export enum FilterFieldTypes {
  BOOLEAN = 'boolean',
  ENUM = 'enum',
  LOCALIZED_ENUM = 'localizedEnum',
  TEXT = 'text',
  LOCALIZED_TEXT = 'localizedText',
  NUMBER = 'number',
}

export interface FilterFieldValue {
  value: string;
  name?: string;
}

// Field that can be used as filter (AKA FilterField)
export interface FilterField {
  field: string;
  type: string;
  translatable?: boolean;
  label?: string;
  values?: FilterFieldValue[];
}
