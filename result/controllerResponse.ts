import { Response } from '../../extension-commercetools/node_modules/@frontastic/extension-types/src/ts';

export type ControllerResponse = Response & {
  error?: string;
  errorCode?: number;
};
