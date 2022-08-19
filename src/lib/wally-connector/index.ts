import { request } from "./request";
import { SignedMessage, VeriftOTPResult, Wallet } from "./types";

export class WallyConnector {
  private appId: string | undefined = undefined;
  private authToken: string | undefined = undefined;

  constructor({ appId, authToken }: { appId?: string; authToken?: string } = {}) {
    // TODO: is appId required field
    this.appId = appId;
    this.authToken = authToken;
  }

  public setAuthToken = (authToken: string): void => {
    this.authToken = authToken;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async requestGet(url: string, isAuthenticated?: boolean): Promise<any> {
    return request(this.authToken, "GET", url, undefined, isAuthenticated);
  }

  public async requestPost(
    url: string,
    data?: Record<string, unknown>,
    isAuthenticated?: boolean,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<any> {
    return request(this.authToken, "POST", url, data, isAuthenticated);
  }

  public async getOTP(email: string): Promise<Wallet[]> {
    return this.requestPost("users/login", { email }, false);
  }

  public async verifyOTP(email: string, OTP: string): Promise<VeriftOTPResult> {
    const result = this.requestPost(
      "users/verifyOTP",
      {
        email,
        OTP,
      },
      false,
    ) as VeriftOTPResult;
    if (result.token) {
      this.authToken = result.token;
    }
    return result;
  }

  public async signMessage(message: string): Promise<SignedMessage> {
    return this.requestPost("users/sign-message", { message, appId: this.appId }, false);
  }

  public async getWallets(): Promise<Wallet[]> {
    return this.requestGet("users/wallets");
  }
}
