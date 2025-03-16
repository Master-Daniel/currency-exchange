import React from "react";
import Select from "react-select";
import { useExchangeContext } from "../hooks/useExchangeContext";

interface CurrencySelectorProps {
    type: string,
    onChange: (selectedCurrency: string) => void;
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({ onChange, type }) => {
    const { currencyList } = useExchangeContext()

    const options = Object.entries(currencyList).map(([code, name]) => ({
        value: code,
        label: `${name} (${code})`,
    }));

    return (
        <Select
            options={options}
            onChange={(selectedOption) => onChange(selectedOption?.value || "")}
            placeholder={`Select a ${type} currency...`}
            isSearchable
        />
    );
};

export default CurrencySelector;
