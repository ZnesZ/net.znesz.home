<template>
    <div class="home">
        <h1>{{ msg }}</h1>
        <p>Welcome to your new single-page application, built with <a href="https://vuejs.org" target="_blank">Vue.js</a>.</p>
        <b-tabs>
            <b-tab title="first" active>
                <br>I'm the first fading tab
            </b-tab>
            <b-tab title="second">
                <br>I'm the second tab content
            </b-tab>
            <b-tab title="disabled" disabled>
                <br>Disabled tab!
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        props: {
            msg: String
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
