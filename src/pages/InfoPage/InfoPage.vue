<template>
<div id="container">
    <div id="top-bar">
        <div id="logo">
            <img src="/resources/devchallenges.svg">
        </div>
        <div id="drop-menu" class="dropdown">
            <a class="btn dropdown-toggle"
                role="button" id="dropMenuLink" href="#"
                data-bs-toggle="dropdown" aria-expanded="false">
                Xanthe Neal
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropMenuLink">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
    </div>

    <div id="header">
        <h2>Personal info</h2>
        <p>Basic info, like your name and photo</p>
    </div>
    <div id="card">
        <div class="card-body">
            <div>
                <h5>Profile</h5>
                <span>Some info may be visible to other people</span>
            </div>
            <div>
                <button type="button" class="btn btn-outline-secondary"
                    style="padding: .3rem 2rem; border-radius: 1rem">Edit</button>
            </div>
        </div>

        <div class="card-body">
            <div class="title-section">
                <h5>Photo</h5>
            </div>
            <div class="content-section">
                <div class="avatar"></div>
            </div>
        </div>

        <div class="card-body">
            <div class="title-section">
                <h5>Name</h5>
            </div>
            <div class="content-section">
                <span>Xanthe Neal</span>
            </div>
        </div>

        <div class="card-body">
            <div class="title-section">
                <h5>Bio</h5>
            </div>
            <div class="content-section">
                <span>I am a software developer and a big fan of devchallenges...</span>
            </div>
        </div>

        <div class="card-body">
            <div class="title-section">
                <h5>Phone</h5>
            </div>
            <div class="content-section">
                <span>908249274292</span>
            </div>
        </div>

        <div class="card-body">
            <div class="title-section">
                <h5>Email</h5>
            </div>
            <div class="content-section">
                <span>xanthe.neal@gmail.com</span>
            </div>
        </div>

        <div class="card-body">
            <div class="title-section">
                <h5>PASSWORD</h5>
            </div>
            <div class="content-section">
                <span>************</span>
            </div>
        </div>
    </div>
    <div id="copyright">
        <span>created by ngosangns</span>
        <span>devChallenges.io</span>
    </div>
</div>
</template>

<script lang="ts">
export default {
    name: "InfoPage",
}
</script>

<style scoped>
#container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    min-height: 100vh;
}

#top-bar {
    grid-column: 1/7;
    height: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 2rem;
}
#top-bar #drop-menu {
    margin-left: auto;
}

#header {
    grid-column: 2/6;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#copyright {
    grid-column: 2/6;
    grid-row-start: 6;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 1rem;
    color: #828282;
}

#card {
    text-align: left;
    border: thin solid #BDBDBD;
    border-radius: 2rem;
    min-height: 5rem;
    grid-column: 2/6;
    grid-row: 2/6;
}
.card-body {
    padding: 2rem;
    border-bottom: thin solid #bdbdbd;
}
.card-body:last-child {
    border: none;
}
.card-body:first-child {
    display: grid;
    grid-template-columns: 9fr auto!important;
    align-items: center;
}
.card-body:first-child h5 {
    font-weight: bold;
    font-size: 1.5rem;
    color: black;
}

.card-body:first-child span {
    color: #828282
}

.card-body {
    display: grid;
    grid-template-columns: 4fr 6fr;
}
.card-body > div {
    align-items: center;
}
.card-body .avatar {
    width: 5rem;
    padding-top: 5rem;
    background: gray;
    border-radius: .8rem;
}
.card-body h5 {
    text-transform: uppercase;
    color: #BDBDBD;
    font-size: 1rem;
}
</style>