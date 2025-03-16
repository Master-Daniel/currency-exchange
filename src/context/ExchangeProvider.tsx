import { createContext, useState, useEffect } from "react";
import { useExchangeRates } from "../hooks/useExchangeRates";
import { fetchCurrencyList } from "../utils/api";

interface CurrencyList {
    [code: string]: string;
}

interface ExchangeContextType {
    baseCurrency: string;
    setBaseCurrency: (currency: string) => void;
    targetCurrency: string;
    setTargetCurrency: (currency: string) => void;
    rates: Record<string, number>;
    loading: boolean;
    error: string | null;
    currencyList: CurrencyList;
}

const ExchangeContext = createContext<ExchangeContextType | undefined>(undefined);

export const ExchangeProvider = ({ children }: { children: React.ReactNode }) => {
    const [baseCurrency, setBaseCurrency] = useState("usd");
    const [targetCurrency, setTargetCurrency] = useState("eur");
    const [currencyList, setCurrencyList] = useState<CurrencyList>({});
    const { rates, loading, error } = useExchangeRates(baseCurrency, targetCurrency);

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const data = await fetchCurrencyList();
                setCurrencyList(data);
            } catch (error) {
                console.error("Failed to fetch currency list", error);
            }
        };

        fetchCurrencies();
    }, []);

    return (
        <ExchangeContext.Provider
            value={{
                baseCurrency,
                setBaseCurrency,
                targetCurrency,
                setTargetCurrency,
                rates,
                loading,
                error,
                currencyList,
            }}
        >
            {children}
        </ExchangeContext.Provider>
    );
};

export { ExchangeContext };
