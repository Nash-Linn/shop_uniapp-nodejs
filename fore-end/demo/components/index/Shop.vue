<template>

	<view class="shop">

		<view class="shop-item">

			<view class="shop-big">
				<image class="shop-big" src="../../static/img/shop.jpg" mode=""></image>
			</view>
			<scroll-view scroll-x="true" class="scroll-content">
				<Commodity :dataList="shopList" :wrap="false" imgHeight="200rpx" nameSize="20rpx" />
			</scroll-view>



		</view>
	</view>
</template>

<script setup lang="ts">
	import Commodity from "@/components/common/Commodity.vue";

	interface DataList {
		id: number;
		imgUrl: string;
		name: string;
		pprice: string;
		oprice: string;
		discount: string;
	}

	const shopList: DataList[] = [{
			id: 1,
			imgUrl: "../../static/img/commodity1.jpg",
			name: "入口即化，松软可口，隔壁小孩都馋哭了，门店招牌",
			pprice: "￥299",
			oprice: "￥599",
			discount: "4.9折",
		},
		{
			id: 2,
			imgUrl: "../../static/img/commodity2.jpg",
			name: "入口即化，松软可口，隔壁小孩都馋哭了，门店招牌",
			pprice: "￥299",
			oprice: "￥599",
			discount: "4.9折",
		},
		{
			id: 3,
			imgUrl: "../../static/img/commodity3.jpg",
			name: "入口即化，松软可口，隔壁小孩都馋哭了，门店招牌",
			pprice: "￥299",
			oprice: "￥599",
			discount: "4.9折",
		},
		{
			id: 4,
			imgUrl: "../../static/img/commodity4.jpg",
			name: "入口即化，松软可口，隔壁小孩都馋哭了，门店招牌",
			pprice: "￥299",
			oprice: "￥599",
			discount: "4.9折",
		},
		{
			id: 5,
			imgUrl: "../../static/img/commodity5.jpg",
			name: "入口即化，松软可口，隔壁小孩都馋哭了，门店招牌",
			pprice: "￥299",
			oprice: "￥599",
			discount: "4.9折",
		},
		{
			id: 6,
			imgUrl: "../../static/img/commodity6.jpg",
			name: "入口即化，松软可口，隔壁小孩都馋哭了，门店招牌",
			pprice: "￥299",
			oprice: "￥599",
			discount: "4.9折",
		},
	];
</script>

<style scoped lang="scss">
	.shop-big {
		width: 100%;
		height: 350rpx;
	}

	.scroll-content {
		width: 100%;
		white-space: nowrap;
	}

	.scroll-item {
		display: inline-block;
		width: 300rpx;
		height: 300rpx;
	}
</style>
