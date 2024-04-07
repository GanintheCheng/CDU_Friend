<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import { useMemberStore } from '@/stores'

//获取当前状态
const profile = useMemberStore().profile

onLoad(() => {
  footList.value = [
    {
      img: '/static/images/logo.png',
      title: '我刘胜涛是个小可爱'
    },
    {
      img: '/static/images/logo.png',
      title: '我是刘胜涛爹'
    }
  ]
  roomList.value = []
  myList.value = [
    {
      img: '/static/images/logo.png',
      title: '我刘胜涛是个小可爱'
    },
    {
      img: '/static/images/logo.png',
      title: '我是刘胜涛爹'
    }
  ]
  setTimeout(() => {
    // showDrawer()
  }, 100)
})

//左侧抽屉
const showLeft = ref()
const showDrawer = () => {
  showLeft.value.open()
}
const closeDrawer = () => {
  showLeft.value.close()
}

//帖子足迹
const footList = ref<
  {
    img: string,
    title: string
  }[]>([])
//聊天室足迹
const roomList = ref<
  {
    img: string,
    title: string
  }[]>([])
//我的贴子
const myList = ref<
  {
    img: string,
    title: string
  }[]>([])
</script>

<template>
  <!-- 左侧抽屉 -->
  <view class="example-body">
    <uni-drawer ref="showLeft" mode="left" :width="230">
      <view class="close">
        <uni-icons type="close" size="40" class="more" @click="closeDrawer()"></uni-icons>
      </view>
      <view class="leftbox">
        <image src="/static/images/logo.png" mode="aspectFill" style="width: 100%;height: 300rpx;" />
        <view class="bt">
          <navigator url="/pages/message/message" open-type="switchTab">
            <view class="showinner">
              <view class="img">
                <image src="/static/images/myroom.png" mode="scaleToFill" />
              </view>
              <view class="text">
                <text>聊天</text>
              </view>
            </view>
          </navigator>
          <view class="split">
          </view>
          <navigator url="/pagesMember/setting/setting" open-type="navigate" hover-class="navigator-hover">
            <view class="showinner">
              <view class="img">
                <image src="/static/images/setting.png" mode="scaleToFill" />
              </view>
              <view class="text">
                <text>设置</text>
              </view>
            </view>
          </navigator>
          <view class="split">
          </view>
          <navigator url="/pagesMember/about/about" open-type="navigate" hover-class="navigator-hover">
            <view class="showinner">
              <view class="img">
                <image src="/static/images/us.png" mode="scaleToFill" />
              </view>
              <view class="text">
                <text>关于橙子交友</text>
              </view>
            </view>
          </navigator>
        </view>
      </view>
    </uni-drawer>
  </view>
  <view class="body">
    <!-- 侧栏图案 -->
    <view class="title">
      <uni-icons type="settings" size="40" class="more" @click="showDrawer()"></uni-icons>
    </view>

    <!-- 头像与信息 -->
    <uni-section title="基本信息" type="line">
      <view class="imginfo">
        <view class="img">
          <view class="changeimg">
            <uni-icons type="paperclip" size="20"></uni-icons>
          </view>
          <image :src="profile.url" mode="aspectFill" />
        </view>
        <view class="text">
          <view class="top">
            <view class="h1">
              {{ profile.name }}
            </view>
            <view class="friendnum">
              20 好友
            </view>
          </view>
          <view class="bt">
            {{ profile.signature }}
          </view>
        </view>
      </view>
    </uni-section>
    <view></view>
    <!-- 爱好选择 -->
    <uni-section title="帖子足迹" type="line">
      <uni-list-item :title="item.title" showArrow :thumb="item.img" thumb-size="base" rightText="跳转"
        v-for="(item, index) in footList" :key="index" v-if="footList.length != 0" />
      <view v-else>
        暂无足迹,多去转转吧!
      </view>
    </uni-section>
    <uni-section title="聊天室足迹" type="line">
      <uni-list-item :title="item.title" showArrow :thumb="item.img" thumb-size="base" rightText="跳转"
        v-for="(item, index) in roomList" :key="index" v-if="roomList.length != 0" />
      <view v-else>
        暂无足迹,多去转转吧!
      </view>
    </uni-section>
    <uni-section title="我的帖子" type="line">
      <uni-list-item :title="item.title" showArrow :thumb="item.img" thumb-size="base" rightText="跳转"
        v-for="(item, index) in myList" :key="index" v-if="myList.length != 0" />
      <view v-else>
        暂无足迹,多去转转吧!
      </view>
    </uni-section>
  </view>

</template>

<style lang="scss">
page {
  background: linear-gradient(to bottom, skyblue, #f7f7f7);
}

.uni-drawer__content {
  border-radius: 25rpx;
  padding-left: 50rpx;
  padding-right: 50rpx;

  .close {
    margin-bottom: 10rpx;
  }

  .leftbox {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
  }

  .showinner {
    height: 100rpx;
    display: flex;
    margin-bottom: 30rpx;

    .img {
      flex: 0.3;
      display: flex;
      justify-content: center;
      align-items: center;

      image {
        height: 100%;
        width: 100%;
      }
    }

    .text {
      flex: 0.7;
      padding-left: 10rpx;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      text {
        font-size: x-large;
        font-weight: bolder;
      }
    }
  }

  .split {
    width: 300rpx;
    height: 6rpx;
    background-color: rgba(128, 128, 128, 0.123);
    margin: 0 auto;
    margin-bottom: 30rpx;
  }
}

.body {
  padding-left: 20rpx;
  padding-right: 20rpx;
  background: linear-gradient(to bottom, skyblue, #f7f7f7);
}

.title {
  width: 100%;
  height: 100rpx;
  display: flex;
  align-items: center;
}

.imginfo {
  width: 100%;
  height: 300rpx;
  display: flex;

  .img {
    flex: 0.3;
    height: 100%;
    position: relative;

    .changeimg {
      position: absolute;
      // width: 50%;
      border-radius: 90%;
      height: 40rpx;
      bottom: 20rpx;
      left: 50%;
      transform: translateX(-50%);

      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10rpx;
    }

    image {
      border-radius: 10rpx;
      width: 100%;
      height: 100%;
    }
  }

  .text {
    flex: 0.7;
    padding-top: 20rpx;
    padding-left: 20rpx;
    background-color: #f7f7f7;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .h1 {
      // font-weight: 900;
      font-size: 60rpx;
      font-weight: bolder;
    }

    .friendnum {
      color: #666666;
    }

    .bt {
      margin-bottom: 30rpx;
      padding-left: 10rpx;
      width: fit-content;
      border: 1px solid #00000033;
      border-radius: 20rpx;
    }
  }
}
</style>