export interface Payment {
  paymentStatusInit: 'init';
  paymentStatusPending: 'pending';
  paymentStatusPaid: 'paid';
  paymentStatusFailed: 'failed';

  /**
   * An internal ID to identify this payment
   */
  id: string;

  /**
   * The name of the payment service provider
   */
  paymentProvider: string;

  /**
   * The ID used by the payment service provider for this payment
   */
  paymentId: string;

  /**
   * Amount in cent
   */
  amount: number;

  // TODO: decide if we want to relay on the context to provide the currency
  // currency?: string

  /**
   * A text describing the current status of the payment
   */
  debug?: string;

  /**
   * One of the `PAYMENT_STATUS_*` constants
   */
  paymentStatus: string;

  version?: number;

  /**
   * The descriptor of the payment method used for this payment
   */
  paymentMethod: string;

  paymentDetails?: [];
}
