<template>
	<view></view>
</template>

<script setup>
const props = defineProps({
	dataTesta: {
		type: String
	},
	dataTestb: {
		type: String
	},
	datasTestc: {
		type: String
	},
	datasTestd: {
		type: String
	}
});

console.log('我是data-testa====》', props.dataTesta);
console.log('我是dataTestb====》', props.dataTestb);
console.log('我是datas-testc====》', props.datasTestc);
console.log('我是datasTestd====》', props.datasTestd);
</script>

<style></style>
