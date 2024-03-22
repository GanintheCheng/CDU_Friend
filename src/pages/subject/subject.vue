<script lang="ts" setup>
import Search from '@/pages/subject/components/Search.vue';
import Foot from '@/pages/subject/components/Foot.vue'
import { provide } from 'vue';
import { ref } from 'vue';
const titleChoice = ref(0)
const changeChoice = (e: number) => {
  titleChoice.value = e
}
provide('changeChoice', changeChoice)

//left
const checkList = ref([false, false, false, false, false, false])
const contentText = [{
  contentDefault: '聊天室',
  contentFav: '随机好友'
}, {
  contentDefault: '刷新',
  contentFav: '刷新'
}]

const favClick = (index) => {
  checkList.value[index] = !checkList.value[index]
  console.log(checkList[index]);
  // forceUpdate()
}

</script>

<template>
  <Search></Search>
  <view class="right" v-show="titleChoice === 1">
    <Foot></Foot>
    <view class="at">
      <view class="item">
        <view class="up">
          <view>关注聊天室</view>
          <text class="see">排序顺序<text class="icon-down"></text></text>
        </view>
        <view class="downbox">3</view>
      </view>
    </view>
  </view>
  <view class="left" v-show="titleChoice === 0">
    <uni-section title="菜单选取" type="line" class="title">
      <view class="example-body">
        <uni-fav :checked="checkList[0]" class="favBtn" @click="favClick(0)" :content-text="contentText[0]" />
        <uni-fav :checked="false" :star="true" class="favBtn" @click="favClick(1)" :content-text="contentText[1]" />
      </view>
    </uni-section>
    <view class="body">

    </view>
    <view class="bt">

    </view>
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

.right {
  .at {
    margin-top: 20rpx;
    padding-left: 10rpx;
    padding-right: 10rpx;
    height: 500rpx;

    .item {
      background-color: #ffffff;
      height: 100%;
      border-radius: 10rpx;

      .up {
        padding-left: 5rpx;
        padding-top: 10rpx;
        padding-right: 20rpx;
        font-weight: 900;
        margin-bottom: 30rpx;
        height: 50rpx;
        display: flex;
        justify-content: space-between;

        .see {
          font-size: x-small;
          color: gray;
        }
      }

      .downbox {
        height: 400rpx;
        background-color: pink;
      }
    }
  }
}

.left {
  .title {
    .uni-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .uni-section-content .example-body {
      display: flex;

      .favBtn {
        margin-right: 20rpx;
      }
    }
  }

  .body {
    height: 600rpx;
    background-color: pink;
    margin-bottom: 30rpx;
  }

  .bt{
    height: 250rpx;
    background-color: red;
  }
}
</style>