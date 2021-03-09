<template>
<div id="container">
    <div id="card">
        <img src="/resources/devchallenges.svg" style="margin-bottom: 1rem">
        <p style="font-weight: bold">Join thousands of learners from around the world </p>
        <p>Master web development by making real-life projects. There are multiple paths for you to choose</p>
        <form>
            <div class="c-input">
                <span class="material-icons icon">email</span>
                <input type="text" placeholder="Email">
            </div>
            <div class="c-input">
                <span class="material-icons icon">lock</span>
                <input type="text" placeholder="Password">
            </div>
            <button class="btn btn-primary w-100" style="border-radius: .5rem">Start coding now</button>
            <p class="w-100 text-center" style="margin-top: 2rem">or continue with these social profile</p>
            <div id="social-login">
                <div><img src="/resources/Google.svg"></div>
                <div><img src="/resources/Facebook.svg"></div>
                <div><img src="/resources/Twitter.svg"></div>
                <div><img src="/resources/Gihub.svg"></div>
            </div>
            <p class="w-100 text-center mb-0" style="margin-top: 2rem">Adready a member? Login</p>
        </form>
    </div>
    <FooterComponent/>
</div>
</template>

<script lang="ts">
import FooterComponent from "../../components/FooterComponent.vue"
export default {
    name: "SignupPage",
    components: {
        FooterComponent,
    },
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
            margin-bottom: 1rem;
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