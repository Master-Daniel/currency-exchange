import React, { useState } from "react";
import CurrencySelector from "../components/CurrencySelector";
import { useExchangeContext } from "../hooks/useExchangeContext";
import { formatCurrency } from "../utils/custom-functions";

const Exchange: React.FC = () => {
    const { error, loading, rates, baseCurrency, targetCurrency, setBaseCurrency, setTargetCurrency } = useExchangeContext();
    const [amount, setAmount] = useState<number>(1);

    const exchangeRate = rates[targetCurrency] || 0;
    const convertedAmount = amount * exchangeRate;

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-lg font-semibold mb-4">Currency Exchange</h2>

            <div className="mb-4">
                <label className="block mb-1 text-sm font-medium">From</label>
                <CurrencySelector onChange={setBaseCurrency} type="base" />
            </div>
            
            <div className="mb-4">
                <label className="block mb-1 text-sm font-medium">To</label>
                <CurrencySelector onChange={setTargetCurrency} type="target" />
            </div>

            <div className="mb-4">
                <label htmlFor="amount" className="block mb-1 text-sm font-medium">Amount</label>
                <input
                    id="amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    min="0"
                />
            </div>

            {loading && <p className="text-blue-500">Checking rates...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {!loading && !error && (
                <div className="mt-4 text-lg font-semibold">
                    <p>
                        1 {baseCurrency.toUpperCase()} = {formatCurrency(exchangeRate, targetCurrency)}
                    </p>
                    <p>
                        {formatCurrency(amount, baseCurrency)} = {formatCurrency(convertedAmount, targetCurrency)}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Exchange;
