export interface TaxPortion {
  /**
   * Amount in cent
   */
  amount?: number;
  // TODO: should we keep currency or leave it on the context as in Product.Variant
  // currency?: string
  name?: string;

  /**
   * Rate number in the range [0..1]
   */
  rate?: number;
}
