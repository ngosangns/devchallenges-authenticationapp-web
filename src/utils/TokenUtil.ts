export class TokenUtil {
    static setToken(token: string): void {
        localStorage.setItem("_token", token)
    }

    static getToken(): string {
        let token = localStorage.getItem("_token")
        if (token != null) {
            return String(token)
        }
        else {
            return ""
        }
    }
}