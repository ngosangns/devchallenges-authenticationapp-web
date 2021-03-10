<template>
<div id="container">
    <div id="card">
        <img src="/resources/devchallenges.svg" style="margin-bottom: 1rem">
        <h5 style="margin-bottom: 1rem">Login</h5>
        <form v-on:submit.prevent="submitAccount">
            <!-- Account Login -->
            <div class="c-input">
                <span class="material-icons icon">email</span>
                <input type="text" placeholder="Email"
                    v-model="formValue.email.value">
            </div>
            <span v-if="formValue.email.message != ''" class="invalid-message">
                {{formValue.email.message}}
            </span>
            <div class="c-input">
                <span class="material-icons icon">lock</span>
                <input type="text" placeholder="Password"
                    v-model="formValue.password.value">
            </div>
            <span v-if="formValue.password.message != ''" class="invalid-message">
                {{formValue.password.message}}
            </span>
            <button type="submit" class="btn btn-primary w-100" style="border-radius: .5rem">Login</button>
            <!-- Socials login -->
            <p class="w-100 text-center" style="margin-top: 2rem">or continue with these social profile</p>
            <div id="social-login">
                <div><a v-on:click="openLoginGoogle"><img src="/resources/Google.svg"></a></div>
                <div><img src="/resources/Facebook.svg"></div>
                <div><img src="/resources/Twitter.svg"></div>
                <div><img src="/resources/Gihub.svg"></div>
            </div>
            <p class="w-100 text-center mb-0" style="margin-top: 2rem">Don’t have an account yet? Register</p>
        </form>
    </div>
    <FooterComponent/>
</div>
</template>
<script lang="ts">
import FooterComponent from "../../components/FooterComponent.vue"
import {RequestUtil} from "../../utils/RequestUtil"
import axios from "axios"

export default {
    name: "LoginPage",
    data: function() {
        return {
            formValue: {
                email: {
                    value: "",
                    message: "asd",
                },
                password: {
                    value: "",
                    message: "asd",
                },
            }
        }
    },
    components: {
        FooterComponent,
    },
    methods: {
        openLoginGoogle: function() {
            let link = "https://accounts.google.com/o/oauth2/auth?scope=openid%20profile%20email&redirect_uri=http://localhost:8080/api/login-google&response_type=code&client_id=617831923199-ha6054jhlqqkrioohv5fioo5m5f10iki.apps.googleusercontent.com&approval_prompt=force"
            let windowGoogle = window.open(link, '_blank', 
                'location=yes, height=570, width=520, scrollbars=yes, status=yes')
        },
        submitAccount: function() {
            RequestUtil.post(String(import.meta.env.VITE_API_LOGIN), {
                email: this.formValue.email.value,
                password: this.formValue.password.value,
            })
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
        },
    }
}
</script>

<style scoped lang="scss">
#container {
    display: grid;
    min-height: 100vh;
    max-width: 25rem;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 2rem;
    > div {
        width: 100%;
    }
    #card {
        text-align: left;
        padding: 2rem;
        border: thin solid #BDBDBD;
        border-radius: 2rem;
        min-height: 5rem;
        .c-input {
            width: 100%;
            border: thin solid #BDBDBD;
            border-radius: .5rem;
            padding: .3rem;
            display: flex;
            align-items: center;
            .icon {
                margin-right: .2rem;
            }
            input {
                border: none;
                outline: none;
                background: transparent;
            }
        }
        .invalid-message {
            display: block;
            color: red;
            font-size: .9rem;
            margin-top: .1rem;
            margin-bottom: 1rem;
        }
        #social-login {
            display: flex;
            flex-direction: row;
            justify-content: center;
            > div {
                border-radius: 100%;
                margin: 0 .5rem;
            }
        }
    }
}
</style>