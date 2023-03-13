<template>

	<view class="recommend bg-color">

		<view class="recommend-item" v-for=" (item ,index) in props.dataList">
			<image class="item-big" src="../../static/img/flower1.jpg"></image>

			<view class="item-small">
				<block v-for="(k,i) in item.data">
					<image class="item-img" :src="
					k.imgUrl" mode=""></image>
				</block>


			</view>
		</view>

	</view>
</template>

<script setup lang="ts">
	const props = withDefaults(defineProps < {
			dataList: any[]
		} >
		(), {})
</script>

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
