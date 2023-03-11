<template>

	<view class="hot">
		<Commodity :dataList="hotList" :itemSpan="3" />
	</view>
</template>

<script setup lang="ts">
	import Commodity from '../common/Commodity.vue';
	interface DataList {
		id: number;
		imgUrl: string;
		name: string;
		pprice: string;
		oprice: string;
		discount: string;
	}

	const hotList: DataList[] = [{
			id: 1,
			imgUrl: '../../static/img/commodity1.jpg',
			name: '入口即化，松软可口，隔壁小孩都馋哭了，门店招牌',
			pprice: '￥299',
			oprice: '￥599',
			discount: '4.9折'
		},
		{
			id: 2,
			imgUrl: '../../static/img/commodity2.jpg',
			name: '入口即化，松软可口，隔壁小孩都馋哭了，门店招牌',
			pprice: '￥299',
			oprice: '￥599',
			discount: '4.9折'
		},
		{
			id: 3,
			imgUrl: '../../static/img/commodity3.jpg',
			name: '入口即化，松软可口，隔壁小孩都馋哭了，门店招牌',
			pprice: '￥299',
			oprice: '￥599',
			discount: '4.9折'
		},
		{
			id: 4,
			imgUrl: '../../static/img/commodity4.jpg',
			name: '入口即化，松软可口，隔壁小孩都馋哭了，门店招牌',
			pprice: '￥299',
			oprice: '￥599',
			discount: '4.9折'
		},
		{
			id: 5,
			imgUrl: '../../static/img/commodity5.jpg',
			name: '入口即化，松软可口，隔壁小孩都馋哭了，门店招牌',
			pprice: '￥299',
			oprice: '￥599',
			discount: '4.9折'
		},
		{
			id: 6,
			imgUrl: '../../static/img/commodity6.jpg',
			name: '入口即化，松软可口，隔壁小孩都馋哭了，门店招牌',
			pprice: '￥299',
			oprice: '￥599',
			discount: '4.9折'
		}
	];
</script>

<style scoped lang="scss"></style>
