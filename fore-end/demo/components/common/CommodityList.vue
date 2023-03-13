<template>

	<view class="commodity-list">
		<Commodity :dataList="props.dataList"></Commodity>
	</view>
</template>

<script setup lang="ts">
	import Commodity from './Commodity.vue';

	interface DataList {
		id: number;
		imgUrl: string;
		name: string;
		pprice: string;
		oprice: string;
		discount: string;
	}
	const props = withDefaults(defineProps < {
			dataList: DataList[]
		} >
		(), {})
</script>

<style scoped lang="scss"></style>
