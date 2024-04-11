<script lang="ts" setup>
import { ref } from 'vue';
const value = ref()
</script>

<template>
  <view class="title">
    <view class="innerbox">
      <view class="inner">
        <view class="text">
          交友
        </view>
        <view>
          <button>
            发动态
          </button>
        </view>
      </view>
    </view>
  </view>
  <view class="line"></view>
  <view class="bt">
    <scroll-view scroll-y>
      <view class="item">
        <view class="left">
          <image src="/static/images/logo.png" mode="widthFix" />
        </view>
        <view class="right">
          <view class="name">
            <view class="nameleft">
              <text class="username">坩埚埚</text>
              <text class="usertime">男 20岁</text>
            </view>
            <view class="nameright">
              <view class="love">
                喜欢
              </view>
            </view>
          </view>
          <view class="info">
            <view>
              啊,好想玩原神
            </view>
            <image src="/static/images/logo.png" mode="widthFix" />
          </view>
          <view class="input">
            <view class="share">
              <uni-icons type="heart" size="30"></uni-icons>
              <uni-icons type="compose" size="30"></uni-icons>
              <uni-icons type="chatboxes" size="30"></uni-icons>
            </view>
            <view class="speak">
              <uni-easyinput class="uni-mt-5" trim="all" v-model="value" placeholder="请输入内容">
              </uni-easyinput>
            </view>
          </view>
        </view>
      </view>
      <view class="line"></view>
    </scroll-view>
  </view>
</template>

<style lang="scss">
page {
  background: linear-gradient(to bottom, skyblue, #f7f7f7);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.bt {
  height: 100%;

  scroll-view {
    flex: 1;
    height: 100%;
    overflow: hidden;
    padding-left: 20rpx;
    padding-right: 20rpx;
  }

  .item {
    width: 100%;
    // background-color: #f7f7f7;
    // min-height: 500rpx;
    height: fit-content;
    padding-right: 20rpx;
    display: flex;

    .left {
      flex: 0.2;

      // background-color: pink;
      image {
        width: 100%;
        border-radius: 90%;
      }
    }

    .right {
      flex: 0.8;
      display: flex;
      flex-direction: column;

      .name {
        height: 146rpx;
        // background-color: green;
        display: flex;
        justify-content: space-between;

        .nameleft {
          min-width: 150rpx;
          width: fit-content;
          // background-color: red;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;

          .username {
            font-weight: 900;
            font-size: 40rpx;
          }

          .usertime {
            font-size: 25rpx;
            color: #6666
          }
        }

        .nameright {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 0.4;
          margin-right: 40rpx;

          .love {
            padding: 10rpx;
            color: #ff6923;
            font-weight: 900;
            border: 1px solid #9999;
            border-radius: 15rpx;
          }
        }
      }

      .info {
        height: fit-content;
        font-weight: 500;

        // background-color: pink;
        image {
          max-width: 400rpx;
        }

        margin-bottom: 20rpx;
      }

      .input {
        height: 250rpx;
        background-color: skyblue;

        .share {
          height: 100rpx;
          // background-color: red;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        .speak {
          margin-top: 20rpx;
          width: 90%;
          height: 150rpx;
        }
      }
    }
  }
}


.line {
  width: 600rpx;
  height: 10rpx;
  background-color: rgba(102, 102, 102, 0.13);
  margin: 0 auto;
  margin-top: 20rpx;
  margin-bottom: 10rpx;
}

.title {
  height: 120rpx;
  // padding-bottom: 50rpx;

  .innerbox {
    background-color: white;
    height: 100rpx;
    padding-left: 20rpx;
    padding-right: 20rpx;

    .inner {
      height: 100rpx;
      // background-color: red;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .text {
        font-size: 65rpx;
        font-weight: 900;
      }

      button {
        background-color: #ff6923;
        color: white;
        font-weight: 900;
        border-radius: 25rpx;
      }
    }
  }
}
</style>