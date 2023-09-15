import { axios } from './axios.class';

class Auth {
  private accessToken: string | null = null;

  public async login(uri: string) {
    const response = await axios.post('/login', { uri });
    return this.processToken(response.data);
  }

  public async logout() {
    await axios.post('/auth/logout');
  }

  private processToken(data: { token: string }) {
    axios.setAuthorization(data.token);
    this.setAccessToken(data.token);
    return data;
  }

  public setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
    axios.setAuthorization(accessToken);
  }
}

export const auth = new Auth();
