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
    <div id="copyright">
        <span>created by ngosangns</span>
        <span>devChallenges.io</span>
    </div>
</div>
</template>

<script lang="ts">
export default {
    name: "SignupPage",
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