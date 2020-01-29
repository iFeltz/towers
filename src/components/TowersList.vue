<template>
	<div class="towers-list">
		<Tower v-for="(item, i) in towerIndicators" :key="i" :item="item" />
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import { Action } from 'vuex-class';
import Tower from './Tower.vue';
import { RootState, TowerIndicator } from '@/store/types';

@Component({
	components: { Tower },
	computed: {
		...mapState({
			towerIndicators: 'towers'
		})
	}
})
export default class TowersList extends Vue {
	@Prop() msg!: string;
	@Action('fetchTowersData') fetchData: any;

	towerIndicators!: [TowerIndicator];

	created() {
		try {
			this.fetchData({ url: '/TowersData.json' });
		} catch (err) {
			console.error(err);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.towers-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
