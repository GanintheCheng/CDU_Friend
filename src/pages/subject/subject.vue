<script lang="ts" setup>
import Search from '@/pages/subject/components/Search.vue';
import { provide } from 'vue';
import { ref } from 'vue';
const titleChoice = ref(0)
const changeChoice = (e: number) => {
  titleChoice.value = e
}
provide('changeChoice', changeChoice)
</script>

<template>
  <Search></Search>
  <view class="left" v-show="titleChoice === 0">
    <view class="foot">
      <view class="item">
        <view class="up">

        </view>
        <view class="down">

        </view>
      </view>
    </view>
  </view>
  <view class="right" v-show="titleChoice === 1">
    2
  </view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f9;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Alimama DaoLiTi' !important;
}

Search {
  margin-bottom: 20rpx;
}

.foot {
  height: 300rpx;
  padding-left: 10rpx;
  padding-right: 10rpx;

  .item {
    background-color: #ffffff;
    height: 100%;
    border-radius: 10rpx;
    display: flex;
    flex-direction: column;

    .up {
      flex: 25%;
      background-color: red;
    }

    .down {
      flex: 75%;
      background-color: pink;
    }
  }
}
</style>