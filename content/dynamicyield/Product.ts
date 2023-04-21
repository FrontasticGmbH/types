import { Money } from './Money';

export interface Product {
  sku?: string;
  name?: string;
  description?: string;
  imageUrl?: string;
  productType: string;
  categories?: string;
  price?: Money
}
