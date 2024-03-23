<script setup lang="ts">
import Search from '@/components/Search.vue'
import mySwiper from '@/pages/index/components/mySwiper.vue'
import { ref } from 'vue';

const actionsClick = (text) => {
  uni.showToast({
    title: text,
    icon: 'none'
  })
}

const cover = 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg'
const avatar = 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png'
const extraIcon = {
  color: '#4cd964',
  size: '22',
  type: 'gear-filled'
}

</script>

<template>
  <Search></Search>
  <scroll-view scroll-y>
    <mySwiper></mySwiper>
    <view class="divide">
      <view>
        为您推荐
      </view>
    </view>

    <uni-section title="xx专区" type="line">
      <uni-card title="基础卡片" sub-title="副标题" extra="额外信息" padding="10px 0" :thumbnail="avatar">
        <template v-slot:title>
          <uni-list>
            <uni-list-item :show-switch="false" title="你是不是原神玩多了" />
          </uni-list>
        </template>
        <image style="width: 100%;" :src="cover"></image>
        <text class="uni-body uni-mt-5">你说得对,但是这是一个测试数据</text>
        <view slot="actions" class="card-actions" style="display: flex;justify-content: space-evenly;">
          <view class="card-actions-item" @click="actionsClick('分享')">
            <uni-icons type="redo" size="18" color="#999"></uni-icons>
            <text class="card-actions-item-text">分享</text>
          </view>
          <view class="card-actions-item" @click="actionsClick('点赞')">
            <uni-icons type="heart" size="18" color="#999"></uni-icons>
            <text class="card-actions-item-text">点赞</text>
          </view>
          <view class="card-actions-item" @click="actionsClick('评论')">
            <uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
            <text class="card-actions-item-text">评论</text>
          </view>
        </view>
      </uni-card>
    </uni-section>

    <uni-section title="xx专区" type="line">
      <uni-card title="基础卡片" sub-title="副标题" extra="额外信息" padding="10px 0" :thumbnail="avatar">
        <template v-slot:title>
          <uni-list>
            <uni-list-item :show-switch="false" title="你是不是原神玩多了" />
          </uni-list>
        </template>
        <image style="width: 100%;" :src="cover"></image>
        <text class="uni-body uni-mt-5">你说得对,但是这是一个测试数据</text>
        <view slot="actions" class="card-actions" style="display: flex;justify-content: space-evenly;">
          <view class="card-actions-item" @click="actionsClick('分享')">
            <uni-icons type="redo" size="18" color="#999"></uni-icons>
            <text class="card-actions-item-text">分享</text>
          </view>
          <view class="card-actions-item" @click="actionsClick('点赞')">
            <uni-icons type="heart" size="18" color="#999"></uni-icons>
            <text class="card-actions-item-text">点赞</text>
          </view>
          <view class="card-actions-item" @click="actionsClick('评论')">
            <uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
            <text class="card-actions-item-text">评论</text>
          </view>
        </view>
      </uni-card>
    </uni-section>
  </scroll-view>
</template>

<style lang="scss">
// @import url('../../style/stylesheet.css');
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: cursive !important;
}

uni-section{
  font-family: cursive;
}

scroll-view {
  flex: 1;
  height: 100%;
  overflow: hidden;
}
.divide {
  margin-top: 10rpx;
  height: 50rpx;
  padding-left: 20rpx;

  view {
    font-weight: 600;
  }
}
</style>
