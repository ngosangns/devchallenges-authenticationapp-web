<template>
<div id="loading" v-if="state == 'loading'">
    <div class="spinner-border" role="status">
        <span class="sr-only"></span>
    </div>
</div>
<div v-if="state == 'off'" id="container">
    <HeaderComponent :rec="recConst"/>
    <div id="content">
        <div id="header">
            <h2>Personal info</h2>
            <p>Basic info, like your name and photo</p>
        </div>
        <div v-if="message.length" class="alert alert-danger" role="alert">
            {{message}}
        </div>
        <div v-if="!message.length" id="card">
            <form v-on:submit.prevent="submitAccount">
                <div class="card-body">
                    <div>
                        <h5>Change Info</h5>
                        <span>Changes will be reflected to every services</span>
                    </div>
                </div>

                <div class="card-body">
                    <div class="content-section">
                        <h5>Photo</h5>
                        <div id="change-avatar">
                            <img id="change-avatar-image" :src="'data:image/jpeg;base64,'+rec.photo">
                            <span v-on:click="choosePhoto">Change photo</span>
                            <input id="photo-input" v-on:change="changePhoto"
                                name="photo" type="file" class="form-control" style="display: none">
                        </div>
                    </div>
                </div>

                <div class="card-body">
                    <div class="content-section">
                        <h5>Name</h5>
                        <input name="name" type="text" class="form-control"
                            v-model="rec.name" placeholder="Enter your name">
                    </div>
                </div>

                <div class="card-body">
                    <div class="content-section">
                        <h5>Bio</h5>
                        <textarea name="bio" type="text" class="form-control"
                            v-model="rec.bio" placeholder="Enter your bio"></textarea>
                    </div>
                </div>

                <div class="card-body">
                    <div class="content-section">
                        <h5>Phone</h5>
                        <input name="phone" type="text" class="form-control"
                            v-model="rec.phone" placeholder="Enter your phone">
                    </div>
                </div>

                <div class="card-body">
                    <div class="content-section">
                        <h5>Email</h5>
                        <input name="email" type="text" class="form-control"
                            v-model="rec.email" placeholder="Enter your email">
                    </div>
                </div>

                <div class="card-body">
                    <div class="content-section">
                        <h5>Password</h5>
                        <input name="password" type="password" class="form-control"
                            v-model="rec.password" placeholder="Enter your password">
                    </div>
                </div>
                <div v-if="formMessage != ''" class="card-body">
                    <div class="content-section">
                        <div class="alert alert-danger" role="alert">
                            {{formMessage}}
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary"
                    style="margin: 1rem 2rem 2rem; min-width: 6rem">
                    <div v-if="formState == 'loading'"
                        class="spinner-border" role="status">
                        <span class="sr-only"></span>
                    </div>
                    <span v-if="formState == 'off'">Save</span>
                    <span v-if="formState == 'success'" class="material-icons">done</span>
                </button>
            </form>
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

export default {
    name: "InfoUpdatePage",
    data: () => ({
        state: "loading",
        message: "",
        formState: "off",
        formMessage: "",
        rec: new UserModel(),
        recConst: new UserModel(),
    }),
    components: {
        HeaderComponent,
        FooterComponent,
    },
    methods: {
        choosePhoto: function() {
            let photoInput = document.getElementById("photo-input")
            if(photoInput) {
                photoInput.click()
            }
        },
        updateAvatar: function() {
            let avatar: any = document.getElementById("change-avatar-avatar")
            if(avatar) {
                avatar.setAttribute("style", "background-image: url(\"data:image/jpeg;base64,"+this.rec.photo+"\")")
            }
        },
        changePhoto: function(e: any) {
            var reader = new FileReader()
            let rec = this.rec
            let updateAvatar = this.updateAvatar
            reader.onload = function() {
                let arrayBuffer: any = this.result,
                bytes: any = new Uint8Array(arrayBuffer),
                len = bytes.byteLength,
                binary = ""
                for (var i = 0; i < len; i++) {
                    binary += String.fromCharCode(bytes[i])
                }
                rec.photo = window.btoa(binary)
                updateAvatar()
            }
            reader.readAsArrayBuffer(e.target.files[0])
        },
        submitAccount: function() {
            if(this.formState == "loading") return

            // If change photo
            if(this.rec.photo != this.recConst.photo) {
                // Downscale image
                let canvas = document.createElement('canvas'),
                ctx:any = canvas.getContext('2d')
                canvas.width = 80
                canvas.height = 80
                ctx.drawImage(<CanvasImageSource>document.getElementById("change-avatar-image"), 0, 0, 80, 80)
                let photo: string = canvas.toDataURL('image/jpeg', 1.0)
                photo = photo.replace("data:image/jpeg;base64,", "")
                this.rec.photo = photo
            }
            this.formState = "loading"
            RequestUtil.post(String(import.meta.env.VITE_API_USER), this.rec, TokenUtil.getToken())
                .then((res: any) => {
                    if(res.data.status == true) {
                        this.formState = "success"
                        window.location.href = "/"
                        return
                    } else {
                        this.formState = "off"
                        this.formMessage = res.data.message
                    }
                })
                .catch(err => {
                    this.formState = "off"
                    this.formMessage = "Error"
                })
        },
    },
    mounted: function() {
        let token = TokenUtil.getToken()
        // Check login
        if(token == "") {
            this.$router.push("/login")
            return
        }

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
                        Object.assign(this.recConst, this.rec)
                        this.updateAvatar()
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
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

#content {
    max-width: 50rem;
    margin: auto;
    #header {
        margin-top: 3rem;
    }
    #card {
        text-align: left;
        border: thin solid #BDBDBD;
        border-radius: 2rem;
        min-height: 5rem;
        #submit {
            margin: 1rem 2rem 2rem;
            min-width: 6rem;
        }
        button[type=submit] {
            .material-icons {
                display: block;
            }
        }
        .card-body {
            padding: 1rem 2rem;
            // border-bottom: thin solid #bdbdbd;
            display: grid;
            h5 {
                color: #BDBDBD;
                font-size: 1rem;
            }
            > div {
                align-items: center;
                max-width: 30rem;
            }
            #change-avatar {
                display: grid;
                grid-template-columns: min-content auto;
                align-items: center;
                #change-avatar-image {
                    width: 5rem;
                    height: 5rem;
                    border-radius: .8rem;
                }
                >span {
                    display: block;
                    margin-left: 1rem;
                    text-transform: uppercase;
                    cursor: pointer;
                }
            }
        }
        .card-body:last-child {
            border: none;
        }
        .card-body:first-child {
            display: grid;
            grid-template-columns: 9fr auto!important;
            align-items: center;
            padding-top: 2rem;
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
}
</style>