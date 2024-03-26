<script lang="ts" setup>


const props = defineProps({
  name:String
})
const back = () => {
  uni.navigateBack(

  )
} 
</script>

<template>
  <uni-nav-bar dark :fixed="true" shadow background-color="#51a3e8" status-bar left-icon="left" :left-text="props.name"
     @clickLeft="back" leftWidth="400rpx" />
     <view v-if="props.name == '刘胜涛'">我刘胜涛最喜欢玩原神了</view>
</template>

<style lang="less" scoped></style>