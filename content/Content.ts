export interface Content {
  contentId: string;
  contentTypeId: string;
  name: string;
  slug: string;
  attributes: Record<string, unknown>;
}
