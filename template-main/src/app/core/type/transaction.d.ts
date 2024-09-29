export interface ITransaction {
  id: number;
  amount: number;
  currency: string;
  status: string;
  transactionDate: Date;
  description: string;
  account: IAccount;
  paymentMethod: IPaymentMethod;
}
export interface IAccount {
  id: number;
  accountNumber: string;
  balance: number;
  accountType: string;
  currency: string;
  createdDate: Date;
  status: string;
  customer: ICustomer;
  transactions: ITransaction[];
}
export interface ICustomer {
  id: number;
  name: string;
  email: string;
  phone: string;
  createdDate: Date;
  status: string;
  accounts: IAccount[];
}
export interface IPaymentMethod {
  id: number;
  type: string;
  provider: string;
  accountNumber: string;
  expiryDate: Date;
  customer: ICustomer;
  createdDate: Date;
  status: string;
}
