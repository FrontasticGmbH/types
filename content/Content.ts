import { Attribute } from './Attribute';

export interface Content {
  contentId: string;
  contentTypeId: string;
  name: string;
  slug?: string;
  attributes?: Attribute[];
}
