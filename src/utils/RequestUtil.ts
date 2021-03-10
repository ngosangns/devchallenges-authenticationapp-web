import axios from "axios"

export class RequestUtil {
    static post(url: string, params: any) {
        return new Promise((resolve, reject) => {
            axios.post(String(url), params, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
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

    static get(url: string) {
        return new Promise((resolve, reject) => {
            axios.get(String(url))
                .then(function (response) {
                    resolve(response)
                })
                .catch(function (error) {
                    reject(error)
                })
        })
    }

    static postWithToken(url: string, token: string, params: any) {
        return new Promise((resolve, reject) => {
            axios.post(String(url), params, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": token,
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

    static getWithToken(url: string, token: string) {
        return new Promise((resolve, reject) => {
            axios.get(String(url), {
                headers: {
                    "Authorization": token,
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
}