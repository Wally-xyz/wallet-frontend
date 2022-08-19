export type Wallet = {
  id: string;
  email: string;
  address: string;
  tags: string[];
  referenceId: string;
};

export type VeriftOTPResult = { token?: string };

export type RequestObject = {
  method: string;
  headers: {
    Authorization?: string | undefined;
    Accept: string;
    "Content-Type": string;
  };
  body?: string | undefined;
};

export type SignedMessage = {
  address: string;
  signature: string;
};
