export interface Locale {
  id: string;
  code: string;
  name: string;
  default: boolean;
  fallbackCode?: string | null;
}
