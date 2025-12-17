// src/utils/formatters.ts

/**
 * Format a number as a currency string.
 * @param amount - The number to format
 * @param currency - The currency code (default: 'USD')
 * @param locale - The locale string (default: 'en-US')
 */
export function formatCurrency(
  amount: number,
  currency: string = 'USD',
  locale: string = 'en-US',
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatDate(
  date: Date | string | number,
  locale: string = 'en-US',
  {
    year = 'numeric',
    month = 'long',
    day = 'numeric',
  }: Intl.DateTimeFormatOptions = {},
): string {
  const dateObj = new Date(date);

  if (Number.isNaN(dateObj.getTime())) {
    return '-';
  }

  return new Intl.DateTimeFormat(locale, {
    year,
    month,
    day,
  }).format(dateObj);
}

/**
 * Compact number formatting for large numbers (e.g., 1.2k, 1M).
 */
export function formatCompactNumber(
  value: number,
  locale: string = 'en-US',
): string {
  return new Intl.NumberFormat(locale, {
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: 1,
  }).format(value);
}
