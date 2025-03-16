import { useState, useEffect } from "react";
import { fetchExchangeRates } from "../utils/api";

interface ExchangeRates {
    [currency: string]: number;
}

interface UseExchangeRatesReturn {
    rates: ExchangeRates;
    exchangeRate: number | null;
    loading: boolean;
    error: string | null;
}

export function useExchangeRates(baseCurrency: string, targetCurrency: string): UseExchangeRatesReturn {
    const [rates, setRates] = useState<ExchangeRates>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [exchangeRate, setExchangeRate] = useState<number | null>(null);

    useEffect(() => {
        if (!baseCurrency || !targetCurrency) return;

        const fetchRates = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetchExchangeRates(baseCurrency)
                setRates(response);
                setExchangeRate(response[targetCurrency] ?? null);
            } catch (error) {
                console.log(error)
                setError("Failed to fetch exchange rates.");
            } finally {
                setLoading(false);
            }
        };

        fetchRates();
    }, [baseCurrency, targetCurrency]);

    return { rates, exchangeRate, loading, error };
}
