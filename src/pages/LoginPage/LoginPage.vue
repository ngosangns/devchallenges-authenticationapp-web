<template>
<div id="container">
    <div id="card">
        <img src="/resources/devchallenges.svg" style="margin-bottom: 1rem">
        <h5 style="margin-bottom: 1rem">Login</h5>
        <form>
            <div class="c-input">
                <span class="material-icons icon">email</span>
                <input type="text" placeholder="Email">
            </div>
            <div class="c-input">
                <span class="material-icons icon">lock</span>
                <input type="text" placeholder="Password">
            </div>
            <button class="btn btn-primary w-100" style="border-radius: .5rem">Login</button>
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
    <div id="copyright">
        <span>created by ngosangns</span>
        <span>devChallenges.io</span>
    </div>
</div>
</template>
<script lang="ts">
export default {
    name: "LoginPage",
    methods: {
        openLoginGoogle: function() {
            let link = "https://accounts.google.com/o/oauth2/auth?scope=openid%20profile%20email&redirect_uri=http://localhost:8080/api/login-google&response_type=code&client_id=617831923199-ha6054jhlqqkrioohv5fioo5m5f10iki.apps.googleusercontent.com&approval_prompt=force"
            let windowGoogle = window.open(link, '_blank', 
                'location=yes, height=570, width=520, scrollbars=yes, status=yes')
        },
    }
}
</script>

<style scoped>
#copyright {
    grid-column-start: 2;
    grid-row-start: 6;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 1rem;
    color: #828282;
}

#container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(6, 1fr);
    min-height: 100vh;
}

#card {
    text-align: left;
    padding: 2rem;
    border: thin solid #BDBDBD;
    border-radius: 2rem;
    min-height: 5rem;
    grid-column-start: 2;
    grid-row: 2/6;
}

.c-input {
    width: 100%;
    border: thin solid #BDBDBD;
    border-radius: .5rem;
    margin-bottom: 1rem;
    padding: .3rem;
    display: flex;
    align-items: center;
}
.c-input .icon {
    margin-right: .2rem;
}
.c-input input {
    border: none;
    outline: none;
    background: transparent;
}

#social-login {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
#social-login > div {
    border-radius: 100%;
    margin: 0 .5rem;
}
</style>