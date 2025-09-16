export class EnvUtils {
  static get ApiKey() {
    return import.meta.env.VITE_API_KEY
  }

  static get AccessToken() {
    return import.meta.env.VITE_ACCESS_TOKEN
  }
}
