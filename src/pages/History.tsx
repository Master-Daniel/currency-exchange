import React, { useEffect, useState } from "react";
import HistoricalChart from "../components/HistoricalChart";
import { useExchangeContext } from "../hooks/useExchangeContext";
import { format, subDays } from "date-fns";
import CurrencySelector from "../components/CurrencySelector";
import { fetchHistoricalRates } from "../utils/api";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const History: React.FC = () => {
    const { baseCurrency, targetCurrency, setBaseCurrency, setTargetCurrency } = useExchangeContext();
    const [historicalData, setHistoricalData] = useState<{ date: string; rate: number }[]>([]);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadHistoricalData = async () => {
            setLoading(true);
            setError(null);

            try {
                const formattedDates = Array.from({ length: 7 }, (_, i) =>
                    format(subDays(new Date(), i), "yyyy-MM-dd")
                );

                const promises = formattedDates.map(date =>
                    fetchHistoricalRates(baseCurrency, targetCurrency, date)
                );
                const results = await Promise.all(promises);

                const formattedData = results.map((rate, i) => ({
                    date: formattedDates[i],
                    rate: rate ?? 0,
                }));

                setHistoricalData(formattedData.reverse());
            } catch (error) {
                console.log(error);
                setError("Error fetching historical data.");
            } finally {
                setLoading(false);
            }
        };

        loadHistoricalData();
    }, [baseCurrency, targetCurrency, selectedDate]);

    return (
        <div className="p-6 mx-auto bg-white shadow-md rounded-lg max-w-6xl">
            <h2 className="text-lg font-semibold mb-4 text-center">Historical Exchange Rates</h2>

            <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-4 sm:space-y-0 mb-4">

                <div className="w-full sm:w-58">
                    <CurrencySelector onChange={setBaseCurrency} type="base" />
                </div>

                <div className="w-full sm:w-60">
                    <CurrencySelector onChange={setTargetCurrency} type="target" />
                </div>

                <div className="w-full sm:w-58">
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => date && setSelectedDate(date)}
                        dateFormat="yyyy-MM-dd"
                        className="border border-gray-300 rounded-md focus:border-gray-300 focus:rounded-md p-2 text-sm w-full"
                    />
                </div>
            </div>

            {loading && <p className="text-blue-500 text-center">Loading historical data...</p>}
            {error && <p className="text-red-500 text-center">{error}</p>}

            {!loading && !error && (
                <HistoricalChart data={historicalData} baseCurrency={baseCurrency} targetCurrency={targetCurrency} />
            )}
        </div>

    );
};

export default History;
