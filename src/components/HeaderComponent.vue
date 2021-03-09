<template>
    <div id="top-bar">
        <div id="logo">
            <router-link to="/"><img src="/resources/devchallenges.svg"></router-link>
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
</template>
<script>
export default {
    name: "HeaderComponent",
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
    #drop-menu {
        margin-left: auto;
    }
}
</style>