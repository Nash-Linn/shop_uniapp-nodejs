<template>

	<view class="commodity" :class="{ 'flex-wrap': props.wrap }">
		<!-- 单个商品组件 -->

		<view v-for="item of props.dataList" class="commodity-item" :style="`width:${itemWidth}`" :key="item.id">
			<image class="commodity-img" :style="`height:${props.imgHeight};`" :src="item.imgUrl" mode=""></image>

			<view class="commodity-content">
				<text class="commodity-name" :style="`font-size:${props.nameSize}`">{{
          item.name
        }}</text>

				<view>
					<text class="pprice">{{ item.pprice }}</text>
					<text class="oprice">{{ item.oprice }}</text>
				</view>
				<text class="discount">{{ item.discount }}</text>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import {
		computed,
	} from "vue";


	interface DataList {
		id: number;
		imgUrl: string;
		name: string;
		pprice: string;
		oprice: string;
		discount: string;
	}

	const props = withDefaults(
		defineProps < {
			// 数据
			dataList: DataList[];
			// 屏幕一行显示个数 
			itemSpan ? : number;
			//图片高度
			imgHeight ? : string;
			//每项是否换行
			wrap ? : boolean;
			//商品文字大小
			nameSize ? : string;
		} > (), {
			itemSpan: 2,
			imgHeight: "375rpx",
			wrap: true,
			nameSize: "26rpx",
		}
	);
	const itemWidth = computed(() => {
		return 750 / props.itemSpan + "rpx";
	});
</script>

<style scoped lang="scss">
	.flex-wrap {
		flex-wrap: wrap !important;
	}

	.commodity {
		display: flex;
		flex-wrap: nowrap;

		.commodity-item {
			box-sizing: border-box;
			padding: 10rpx;
			flex-shrink: 0;
			border-radius: 5rpx;

			.commodity-img {
				width: 100%;
				height: 375rpx;
			}

			.commodity-content {
				text-align: center;

				.commodity-name {
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					color: #333333;
					word-break: break-all;
					padding: 5rpx 20rpx;
					font-size: 26rpx;
				}

				.oprice {
					text-decoration: line-through;
					font-size: 24rpx;
					color: #999999;
				}

				.discount {
					border-radius: 4rpx;
					border: 1px solid #ff3333;
					font-size: 20rpx;
					color: #ff3333;
				}
			}
		}
	}
</style>
