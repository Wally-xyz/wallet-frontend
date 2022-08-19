export interface Wallet {
  id: string;
  email: string;
  address: string;
  tags: string[];
  referenceId: string;
}

export interface VeriftOTPResult {
  token?: string;
}

export interface RequestObject {
  method: string;
  headers: {
    Authorization?: string | undefined;
    Accept: string;
    "Content-Type": string;
  };
  body?: string | undefined;
}

export interface SignedMessage {
  address: string;
  signature: string;
}
