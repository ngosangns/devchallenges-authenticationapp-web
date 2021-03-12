import axios from "axios"

export class RequestUtil {
    static post(url: string, params: any, token?: string) {
        let sendParams = Object.entries(params).map(([key, val]) => `${key}=${val}`).join('&')
        return new Promise((resolve, reject) => {
            axios.post(String(url), sendParams, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": token ? token : "",
                }
            })
                .then(function (response) {
                    resolve(response)
                })
                .catch(function (error) {
                    reject(error)
                })
        })
    }

    static get(url: string, token?: string) {
        return new Promise((resolve, reject) => {
            axios.get(String(url), {
                headers: {
                    "Authorization": token ? token : "",
                },
            })
                .then(function (response) {
                    resolve(response)
                })
                .catch(function (error) {
                    reject(error)
                })
        })
    }
}