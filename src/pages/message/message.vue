<script lang="ts" setup>
import {onShow,onHide} from '@dcloudio/uni-app'
onShow(()=>{
  uni.hideTabBarRedDot({
    index:3,
  })
})

onHide(()=>{
  uni.showTabBarRedDot({
    index:3,
  })
})
</script>

<template>
  <div class="message">message</div>
</template>

<style lang="scss" scoped></style>