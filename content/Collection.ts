export interface Collection<T = unknown> {
  total: number;
  skip: number;
  limit: number;
  items: T[];
}
