<template>
	<view class="card">
		<view>-</view>
		<view class="card-name">
			<slot>{{ props.cardTitle }}</slot>
		</view>
		<view>-</view>
	</view>
</template>

<script setup lang="ts">
const props = defineProps<{
	cardTitle?: string;
}>();
</script>

<style scoped lang="scss">
.card {
	padding: 20rpx 0;
	display: flex;
	justify-content: center;
	font-weight: bold;
}

.card-name {
	padding: 0 20rpx;
	font-size: 32rpx;
}
</style>
