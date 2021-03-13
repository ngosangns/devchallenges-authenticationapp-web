import axios from "axios"
export class RequestUtil {
    static post(url: string, params: any, token?: string) {
        let sendParams = Object.entries(params).map(([key, val]) => `${key}=`+encodeURIComponent(val as any)).join('&')
        return new Promise((resolve, reject) => {
            let headers: any = {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            }
            if(token) {
                headers["Authorization"] = "Bearer " + token
            }
            axios.post(String(url), sendParams, { headers })
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
            let headers: any = {}
            if(token) {
                headers["Authorization"] = "Bearer " + token
            }
            axios.get(String(url), { headers })
                .then(function (response) {
                    resolve(response)
                })
                .catch(function (error) {
                    reject(error)
                })
        })
    }
}