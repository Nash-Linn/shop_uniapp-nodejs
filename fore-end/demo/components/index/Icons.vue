<template>
	<view class="icons">
		<view v-for="item of 8" class="icons-item">
			<image class="icons-img" src="../../static/img/icons1.jpg" mode=""></image>
			<text class="f-color">水果</text>
		</view>
	</view>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.icons {
	display: flex;
	flex-wrap: wrap;
	.icons-item {
		width: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-top: 20rpx;

		.icons-img {
			width: 100rpx;
			height: 100rpx;
		}
	}
}
</style>
