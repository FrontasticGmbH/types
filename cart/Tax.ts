import { TaxPortion } from './TaxPortion';

export interface Tax {
  amount: number; // Net amount in cent

  // TODO: should we keep currency or leave it on the context as in Product.Variant
  // currency?: string
  name?: string;
  taxPortions?: TaxPortion[];
}
