<template>
    <div id="copyright">
        <span>created by ngosangns</span>
        <span>devChallenges.io</span>
    </div>
</template>
<script>
export default {
    name: "FooterComponent",
}
</script>
<style scoped lang="scss">
#copyright {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 1rem;
    color: #828282;
    margin-bottom: 2rem;
}
</style>