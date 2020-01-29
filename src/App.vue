<template>
	<div id="app">
		<!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
		<TowersList msg="Welcome to Your Vue.js + TypeScript App" />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TowersList from './components/TowersList.vue';

@Component({
	components: {
		TowersList
	}
})
export default class App extends Vue {}
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
}
body {
	background-color: #2d2d32;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #fff;
	padding: 40px 0;
}
</style>
