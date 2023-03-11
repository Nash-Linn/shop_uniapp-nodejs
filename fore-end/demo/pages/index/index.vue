<template>

	<view class="index">

		<!-- 推荐模板 -->
		<!-- <IndexSwiper />
		<Recommend />
		<Card cardTitle="猜你喜欢" />
		<Card cardTitle="商品店铺" />
		<Card cardTitle="运动户外" />
		<CommodityList /> -->

		<!-- 其他模板：运动户外、美妆... -->
		<Banner />
		<Icons />
		<Card cardTitle="热销爆品" />
		<Hot />
		<Card cardTitle="推荐店铺" />
		<Shop />
		<Card cardTitle="为您推荐" />
		<CommodityList />

	</view>


</template>

<script setup lang="ts">
	import Banner from '@/components/index/Banner.vue';
	import Icons from '@/components/index/Icons.vue';
	import Hot from '@/components/index/Hot.vue';
	import Shop from '@/components/index/Shop.vue';

	import IndexSwiper from '@/components/index/IndexSwiper.vue';
	import Recommend from '@/components/index/Recommend.vue';
	import Card from '@/components/common/Card.vue';
	import CommodityList from '@/components/common/CommodityList.vue';
</script>

<style scoped>
	::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}

	.palceholder {
		margin-bottom: 20rpx;
		height: 50rpx;
		width: 100%;
	}
</style>
