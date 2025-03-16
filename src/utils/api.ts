import axiosInstance from "../api/axiosConfig";

export const fetchExchangeRates = async (baseCurrency: string) => {
    try {
        const response = await axiosInstance.get(`currency-api@latest/v1/currencies/${baseCurrency}.json`);
        return response.data[baseCurrency] || {};
    } catch (error) {
        console.log('Failed to fetch exchange rates.', error)
        return null;
    }
};

export const fetchHistoricalRates = async (baseCurrency: string, targetCurrency: string, date: string) => {
    try {
        const response = await axiosInstance.get(`currency-api@${date}/v1/currencies/${baseCurrency}.json`);
        return response.data[baseCurrency]?.[targetCurrency] || null;
    } catch (error) {
        console.error("Failed to fetch historical data:", error);
        return null;
    }
};

export const fetchCurrencyList = async () => {
    try {
        const response = await axiosInstance.get(`currency-api@latest/v1/currencies.json`);
        return response.data || {};
    } catch (error) {
        console.log('Unable to fetch currency list.', error)
        return null;
    }
};
