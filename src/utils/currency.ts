const formatCurrency = (value: number, locale = "en-US", currency = "USD") => {
  const formattedValue = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

  if (currency === "USD") {
    return formattedValue.replace("$", "US$");
  } else if (currency === "AUD") {
    return formattedValue.replace("$", "A$");
  } else if (currency === "SGD") {
    return formattedValue.replace("$", "S$");
  }

  return formattedValue;
};

export { formatCurrency };
