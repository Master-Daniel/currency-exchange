export const formatCurrency = (value: number, currency: string) => {
    try {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: currency.toUpperCase(),
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(value);
    } catch {
        return `${currency.toUpperCase()} ${value.toFixed(2)}`;
    }
};
