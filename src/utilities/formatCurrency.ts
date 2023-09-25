const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD',
  });
  
  export function formatCurrency(number: number): string {
    const formattedCurrency = CURRENCY_FORMATTER.format(number);
    // Remove "US$" from the formatted currency
    return formattedCurrency.replace('US', '').trim();
  }
  