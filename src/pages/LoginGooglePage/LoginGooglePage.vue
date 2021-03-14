<template>
    <div id="container">
        <div v-if="state == 'loading'"
            class="spinner-border" role="status">
            <span class="sr-only"></span>
        </div>
        <div v-if="state == 'off'"
            class="alert alert-danger" role="alert">
            {{message}}
        </div>
    </div>
</template>
<script lang="ts">
import {RequestUtil} from "../../utils/RequestUtil"
import { TokenUtil } from '../../utils/TokenUtil'
import {title} from "../../var"

export default {
    name: "LoginGooglePage",
    data: function() {
        return ({
            state: "loading",
            message: "",
        })
    },
    methods: {
        getParameterByName: function(name: string, url = window.location.href) {
            name = name.replace(/[\[\]]/g, '\\$&')
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url)
            if (!results) return null
            if (!results[2]) return ''
            return decodeURIComponent(results[2].replace(/\+/g, ' '))
        },
    },
    created: function() {
        // Set title
        document.title = title + " - Login with Google"
        
        // Get "code" param
        let code = this.getParameterByName("code")
        if(!code || code == "") {
            this.state = "off"
            this.message = "Parameter \"code\" is missing"
            return
        }
        RequestUtil.get(String(import.meta.env.VITE_API_LOGIN_GOOGLE)+"?code="+code)
            .then((res: any) => {
                if(res.status == 200) {
                    if(res.data.status == true) {
                        TokenUtil.setToken(res.data.message.token)
                        opener.location.href = "/"
                        window.close()
                    }
                    else {
                        this.message = res.data.message
                        this.state = "off"
                    }
                }
            })
            .catch(err => {
                this.message = "Error"
                this.state = "off"
            })
    },
}
</script>
<style scoped lang="scss">
#container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .alert {
        display: block;
        width: calc(100% - 4rem);
        margin-top: 2rem;
    }
    .spinner-border {
        margin-top: 2rem;
    }
}
</style>