<template>
<div id="container">
    <HeaderComponent :rec="rec"/>
    <div id="content">
        <div id="header">
            <h2>Personal info</h2>
            <p>Basic info, like your name and photo</p>
        </div>
        <div id="loading" v-if="state == 'loading'">
            <div class="spinner-border" role="status">
                <span class="sr-only"></span>
            </div>
        </div>
        <div v-if="state == 'off' && message.length" class="alert alert-danger" role="alert">
            {{message}}
        </div>
        <div v-if="state == 'off' && !message.length" id="card">
            <div class="card-body">
                <div>
                    <h5>Profile</h5>
                    <span>Some info may be visible to other people</span>
                </div>
                <div>
                    <router-link to="/info-update" class="btn btn-outline-secondary"
                        style="padding: .3rem 2rem; border-radius: 1rem">Edit</router-link>
                </div>
            </div>

            <div class="card-body">
                <div class="title-section">
                    <h5>Photo</h5>
                </div>
                <div class="content-section">
                    <img id="change-avatar-image" :src="'data:image/jpeg;base64,'+rec.photo">
                </div>
            </div>

            <div class="card-body">
                <div class="title-section">
                    <h5>Name</h5>
                </div>
                <div class="content-section">
                    <span>{{rec.name}}</span>
                </div>
            </div>

            <div class="card-body">
                <div class="title-section">
                    <h5>Bio</h5>
                </div>
                <div class="content-section">
                    <span>{{rec.bio}}</span>
                </div>
            </div>

            <div class="card-body">
                <div class="title-section">
                    <h5>Phone</h5>
                </div>
                <div class="content-section">
                    <span>{{rec.phone}}</span>
                </div>
            </div>

            <div class="card-body">
                <div class="title-section">
                    <h5>Email</h5>
                </div>
                <div class="content-section">
                    <span>{{rec.email}}</span>
                </div>
            </div>

            <div class="card-body">
                <div class="title-section">
                    <h5>PASSWORD</h5>
                </div>
                <div class="content-section">
                    <span>******</span>
                </div>
            </div>
        </div>
        <FooterComponent/>
    </div>
</div>
</template>

<script lang="ts">
import HeaderComponent from "../../components/HeaderComponent.vue"
import FooterComponent from "../../components/FooterComponent.vue"
import { TokenUtil } from "../../utils/TokenUtil"
import {RequestUtil} from "../../utils/RequestUtil"
import {UserModel} from "../../models/UserModel"
import {title} from "../../var"

export default {
    name: "InfoPage",
    data: function() {
        return ({
            state: "loading",
            message: "",
            rec: new UserModel(),
        })
    },
    components: {
        HeaderComponent,
        FooterComponent,
    },
    created: function() {
        let token = TokenUtil.getToken()
        // Check login
        if(token == "") {
            this.$router.push("/login")
            return
        }
        
        // Set title
        document.title = title + " - Home"

        // Get user info
        RequestUtil.get(String(import.meta.env.VITE_API_USER), token)
            .then((res: any) => {
                if(res.status == 200) {
                    if(res.data.status == true) {
                        this.rec.email = res.data.message.email
                        this.rec.password = res.data.message.password
                        this.rec.name = res.data.message.name
                        this.rec.photo = res.data.message.photo
                        this.rec.bio = res.data.message.bio
                        this.rec.phone = res.data.message.phone
                        this.state = "off"
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
    }
}
</script>

<style scoped lang="scss">
#loading {
    width: 100%;
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

#content {
    max-width: 52rem;
    padding: 0 1rem;
    margin: auto;
    #header {
        margin-top: 3rem;
    }
    #card {
        text-align: left;
        border: thin solid #BDBDBD;
        border-radius: 2rem;
        min-height: 5rem;
    }
    .card-body {
        padding: 2rem;
        border-bottom: thin solid #bdbdbd;
        display: grid;
        grid-template-columns: 4fr 6fr;
        > div {
            align-items: center;
        }
        #change-avatar-image {
            width: 5rem;
            height: 5rem;
            border-radius: .8rem;
        }
        h5 {
            text-transform: uppercase;
            color: #BDBDBD;
            font-size: 1rem;
        }
    }
    .card-body:last-child {
        border: none;
    }
    .card-body:first-child {
        display: grid;
        grid-template-columns: 9fr auto!important;
        align-items: center;
        h5 {
            font-weight: bold;
            font-size: 1.5rem;
            color: black;
        }
        span {
            color: #828282
        }
    }
}
</style>