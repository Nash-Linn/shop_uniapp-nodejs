<template>
	<view class="index">
		
		<view class="status_bar"></view>
		<uni-nav-bar title="导航栏组件"></uni-nav-bar>
		
		<view class="f-active-color">文字1</view>
		<view >
			<span class="iconfont icon-fangdajing"></span>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style scoped>
.status_bar {
	height: var(--status-bar-height);
	width: 100%;
}
.wx-nav{
	height: 200rpx;
	width: 100%;
	font-weight: bold;
	line-height: 200rpx;
	display: flex;
	justify-content: center;
}
</style>
