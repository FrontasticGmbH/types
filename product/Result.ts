import { Product } from './Product';

export interface Result {
  total?: number;
  previousCursor?: string;
  nextCursor?: string;
  count: number;
  items: Product[];
  facets?: any[];
  query?: any;
}
