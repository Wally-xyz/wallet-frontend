export interface SignedMessage {
  address: string;
  signature: string;
}

export interface WallyConnectorOptions {
  isDevelopment?: boolean;
}

export interface Wallet {
  id: string;
  email: string;
  address: string;
  tags: string[];
  referenceId: string;
}
