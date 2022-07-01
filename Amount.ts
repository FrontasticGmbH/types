/**
 * @deprecated The interface should be removed. Use product/Money.ts instead
 */
export interface Amount {
  currency: string; // The currency code compliant to ISO 4217.
  value: number; // In cents
}
