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
		<scroll-view scroll-x="true" class="scroll-content" :scroll-into-view="'top'+topBarIndex">

			<view v-for="(item,index) in topBarData" :key='index' :id="'top'+index" class="scroll-item"
				@click="switchTopBar(index)">
				<text class="f-color" :class="{' f-active-color':topBarIndex==index }">{{item.name}}</text>
			</view>
		</scroll-view>

		<swiper @change="changeSwiperTab" :current="topBarIndex" class="swiper" :style="`height:${swiperItemHeight}px`">
			<swiper-item v-for="(item,index) in newTopBar" :key='index'>

				<view class="swiper-item">

					<block v-for=" (k,i) in item.data" :key='i'>
						<IndexSwiper v-if="k.type == 'swiperList'" :dataList="k.data" />
						<Recommend v-if="k.type == 'recommendList'" :dataList="k.data" />
						<template>
							<Card cardTitle=" 猜你喜欢" />
							<CommodityList v-if="k.type == 'commodityList'" :dataList="k.data" />
						</template>

						<!-- 	<Card cardTitle="商品店铺" />
						<Shop />
						<Card cardTitle="运动户外" /> -->


					</block>

					<!-- 	<Banner />
					<Icons />
					<Card cardTitle="热销爆品" />
					<Hot />
					<Card cardTitle="推荐店铺" />
					<Shop />
					<Card cardTitle="为您推荐" />
					<CommodityList /> -->
				</view>

			</swiper-item>
		</swiper>





	</view>


</template>

<script setup lang="ts">
	import {
		ref
	} from 'vue'
	import {
		onLoad,
		onReady
	} from '@dcloudio/uni-app'

	import Banner from '@/components/index/Banner.vue';
	import Icons from '@/components/index/Icons.vue';
	import Hot from '@/components/index/Hot.vue';
	import Shop from '@/components/index/Shop.vue';

	import IndexSwiper from '@/components/index/IndexSwiper.vue';
	import Recommend from '@/components/index/Recommend.vue';
	import Card from '@/components/common/Card.vue';
	import CommodityList from '@/components/common/CommodityList.vue';




	interface TopBarData {
		id: number
		name: string
	}

	const topBarData = ref < TopBarData[] > ([])

	const newTopBar = ref < any[] > ([])

	const topBarIndex = ref < number > (0)

	const switchTopBar = (index: number): void => {
		topBarIndex.value = index
	}
	const changeSwiperTab = (event: any): void => {
		topBarIndex.value = event.detail.current
	}

	const swiperItemHeight: any = ref(0)

	const __init = () => {
		uni.request({
			url: "http://192.168.1.4:3000/api/index_list/data",
			success: (res: any) => {
				let data = res.data.data
				topBarData.value = data?.topBar
				newTopBar.value = initData(data)
				console.log(newTopBar.value);
			}
		})


	}

	const initData = (res: any): any[] => {
		let arr = []
		for (let i in topBarData.value) {
			let obj = {
				data: []
			}
			//获取首次数据
			if (i == "0") {
				obj.data = res.data
			}
			arr.push(obj)
		}
		return arr
	}

	onLoad(() => {
		__init()
	})
	onReady(() => {
		const query = uni.createSelectorQuery().in(this);
		query.select('.swiper-item').boundingClientRect((data: any) => {
			console.log(data);
			// swiperItemHeight.value = data?.height
			swiperItemHeight.value = 3000
		}).exec();
	})
</script>

<style scoped lang="scss">
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

	.scroll-content {
		width: 100%;
		height: 80rpx;
		white-space: nowrap;


		.scroll-item {
			display: inline-block;
			padding: 10rpx 30rpx;
			font-size: 36rpx;
		}
	}

	.f-active-color {
		padding: 10rpx 0;
		border-bottom: 6rpx solid #49BDFB;
	}

	.swiper-wrap {
		height: 100%;
		background-color: red;
	}
</style>
