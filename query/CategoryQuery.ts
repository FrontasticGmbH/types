import { PaginatedQuery } from './PaginatedQuery';

export interface CategoryQuery extends PaginatedQuery {
  path?: string;
  slug?: string;
}
