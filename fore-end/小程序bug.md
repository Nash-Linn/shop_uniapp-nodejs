### uniapp的代码运行到微信小程序。父传子时，变量名bug

子组件

```vue
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

```

父

```vue
<template>
	<view class="index">
		<TestPropsKeyName 
         	data-testa="我是data-testa" 
            dataTestb="我是dataTestb"
            datas-testc="我是datas-testc" 
            datasTestd="我是datasTestd" />
	</view>
</template>

<script setup>
 import TestPropsKeyName from '@/components/common/TestPropsKeyName.vue';
</script>
```

运行到微信小程序时 无法获取 已data- 开头的变量

![image-20230311171459049](D:\code\Coding\learn\shop_uniapp-nodejs\fore-end\小程序bug.assets\image-20230311171459049.png)

运行到H5和app显示正常

![image-20230311171607039](D:\code\Coding\learn\shop_uniapp-nodejs\fore-end\小程序bug.assets\image-20230311171607039.png)