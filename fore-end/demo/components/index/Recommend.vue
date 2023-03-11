<template>
	<view class="recommend bg-color">
		<view class="recommend-item">
			<image class="item-big" src="../../static/img/flower1.jpg"></image>
			<view class="item-small">
				<image class="item-img" src="../../static/img/flower2.jpg" mode=""></image>
				<image class="item-img" src="../../static/img/flower3.jpg" mode=""></image>
				<image class="item-img" src="../../static/img/flower4.jpg" mode=""></image>
			</view>
		</view>
		<view class="recommend-item">
			<image class="item-big" src="../../static/img/flower5.jpg"></image>
			<view class="item-small">
				<image class="item-img" src="../../static/img/flower6.jpg" mode=""></image>
				<image class="item-img" src="../../static/img/flower7.jpg" mode=""></image>
				<image class="item-img" src="../../static/img/flower8.jpg" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script></script>

<style scoped lang="scss">
.recommend {
	padding: 20rpx;

	.recommend-item {
		display: flex;
		flex-direction: column;
		border-radius: 20rpx;
		border: 2px solid #cccccc;
		overflow: hidden;
		margin: 20rpx 0;

		.item-big {
			width: 100%;
			height: 300rpx;
		}
		.item-small {
			width: 100%;
			height: 240rpx;

			.item-img {
				width: 33.3%;
				height: 240rpx;
			}
		}
	}
}
</style>
