<script setup lang="ts">
import { ref } from 'vue'
const {safeAreaInsets} = uni.getSystemInfoSync()
const title = ref('Hello')
</script>


<template>
    <view  :style="{ height: safeAreaInsets?.top + 'px' }" style="background-color: #51a3e8;"></view>
    <view class="navbar">
     <!-- logo文字 -->
     <view class="logo">
       <image class="logo-image" src="../../static/images/logo.png"></image>
       <text class="logo-text">交友 · 快捷 · 畅聊</text>
     </view>
     <!-- 搜索条 -->
     <view class="search">
       <text class="icon-search">
       </text>
       <input type="text" class="in" placeholder="探索更多">
       <text class="icon-scan"></text>
     </view>
   </view>
 </template> 

 <style scoped lang="scss">
 /* 自定义导航条 */
 .navbar {
   background-image: url('@/static/images/na-bgc.jpg');
   background-size: cover;
   position: relative;
   display: flex;
   flex-direction: column;
   padding-top: 20px;
 
   .logo {
     display: flex;
     align-items: center;
     height: 64rpx;
     padding-left: 30rpx;
     padding-top: 20rpx;
 
     .logo-image {
       width: 80rpx;
       height: 80rpx;
       border-radius: 45%;
     }
 
     .logo-text {
       flex: 1;
       line-height: 28rpx;
       color: #fff;
       margin: 2rpx 0 0 20rpx;
       padding-left: 20rpx;
       border-left: 1rpx solid #fff;
       font-size: 26rpx;
     }
   }
 
   .search {
     display: flex;
     align-items: center;
     // justify-content: space-between;
     padding: 0 10rpx 0 26rpx;
     height: 64rpx;
     margin: 16rpx 20rpx;
     color: #fff;
     font-size: 28rpx;
     border-radius: 32rpx;
     background-color: rgba(255, 255, 255, 0.5);
   }
 
   .in{
     width: 100%;
   }
 
   .icon-search {
     &::before {
       margin-right: 10rpx;
     }
   }
 
   .icon-scan {
     font-size: 30rpx;
     padding: 15rpx;
   }
 }
 </style>
 