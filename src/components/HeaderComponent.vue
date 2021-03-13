<template>
    <div id="top-bar">
        <div id="logo">
            <router-link to="/"><img src="/resources/devchallenges.svg"></router-link>
        </div>
        <div id="drop-menu" class="dropdown">
            <a class="btn dropdown-toggle"
                role="button" id="dropMenuLink" href="#"
                data-bs-toggle="dropdown" aria-expanded="false">
                <img v-if="rec" :src="'data:image/jpeg;base64,'+rec.photo"
                    class="avatar">
                {{rec ? (rec["name"] ? rec["name"] : "User") : "User"}}
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropMenuLink">
                <li><router-link class="dropdown-item" to="/">
                    <span class="material-icons">account_circle</span>My profile</router-link></li>
                <li><a class="dropdown-item" href="#">
                    <span class="material-icons">supervisor_account</span>Group chat</a></li>
                <div class="dropdown-divider"></div>
                <li><a v-on:click="logout"
                    class="dropdown-item" href="#" style="color: red">
                    <span class="material-icons">exit_to_app</span>Logout</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
import {TokenUtil} from "../utils/TokenUtil"

export default {
    name: "HeaderComponent",
    props: ["rec"],
    methods: {
        logout: function() {
            TokenUtil.removeToken()
            window.location.href = "/login"
        }
    }
}
</script>
<style scoped lang="scss">
#top-bar {
    grid-column: 1/7;
    height: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 2rem;
    .avatar {
        width: 2rem;
        height: 2rem;
        border-radius: .5rem;
        margin-right: .5rem;
    }
    #drop-menu {
        padding: 0;
        margin-left: auto;
        .dropdown-menu {
            padding: .5rem;
            overflow: hidden;
            li {
                padding: 0;
                a {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    margin: 0;
                    padding: .5rem;
                    border-radius: .5rem;
                    .material-icons {
                        margin-right: .5rem;
                    }
                }
            }
        }
        
    }
}
</style>