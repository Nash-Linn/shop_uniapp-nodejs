<template>
	<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
		<swiper-item v-for="item in props.dataList">

			<view class="swiper-item">
				<image class='swiper-img' :src="item.imgUrl" mode=""></image>
			</view>
		</swiper-item>

	</swiper>
</template>

<script setup lang="ts">
	const props = withDefaults(defineProps < {
			dataList: any[]
		} >
		(), {})
</script>

<style scoped>
	.swiper-img {
		width: 100%;
		height: 400prx;
	}
</style>
