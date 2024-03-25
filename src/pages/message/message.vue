<script lang="ts" setup>
import { onShow, onHide } from '@dcloudio/uni-app'
import { ref } from 'vue';
const { safeAreaInsets } = uni.getSystemInfoSync()
//渲染头部
const changeColor = ref(0)
const changeLetter = ref(0)
const letter = [
  '找人聊天,与人交友',
  '恶言伤人,诚以动人',
  '连接心灵，绘就幸福；一生相伴，情意绵绵',
  '为爱相遇，为情相守，让爱不再等待',
  '每一个故事都是爱的传承，每一个人都是幸福的主人',
  '每一次相遇都是一种美好的邂逅，让我们一起留下美好的回忆'
]
setInterval(() => {
  changeColor.value++
  changeColor.value %= 360
}, 10)
setInterval(()=>{
  open()
},3000)
const show = ref(false)
const open = () => {
  show.value = !show.value
  if (show.value) {
    changeLetter.value++
    changeLetter.value %= 6
  }
}

onShow(() => {
  uni.hideTabBarRedDot({
    index: 3,
  })
  open()
})

onHide(() => {
  uni.showTabBarRedDot({
    index: 3,
  })
})
</script>

<template>
  <view :style="{ height: safeAreaInsets?.top * 2 + 'px' }" style="background-color: #51a3e8;" class="first">
    <view>消息</view>
  </view>
  <view class="divide"
    :style="{ background: `linear-gradient(${changeColor}deg, rgb(250, 250, 250), rgb(243, 206, 204))` }">
    <uni-transition :show="show" :mode-class="['fade']" :duration="1000">{{ letter[changeLetter] }}</uni-transition>
  </view>
  <view class="top">
    <view class="topbox">
      <view class="item">
        <image src="@/static/images/通讯录.png" mode="scaleToFill" />
        <view class="title">通讯录</view>
      </view>
      <view class="item">
        <image src="@/static/images/匹配.png" mode="scaleToFill" />
        <view class="title">匹配</view>
      </view>
      <view class="item">
        <image src="@/static/images/添加.png" mode="scaleToFill" />
        <view class="title">添加</view>
      </view>
    </view>
    <view class="line"></view>
  </view>
</template>

<style lang="scss">
page {
  background: linear-gradient(to bottom, skyblue, #f7f7f7);
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: cursive !important;
  position: relative;
}

.first {
  font-size: larger;
  font-weight: 900;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  color: white;

  view {
    margin-bottom: 5rpx;
  }
}

.divide {
  height: 30rpx;
  margin-bottom: 10rpx;
  margin-top: 10rpx;
  font-size: xx-small;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff5500;
  font-weight: 900;
}

.top {
  height: 400rpx;
  background-color: rgba(255, 255, 255, 0.511);
  border-radius: 25rpx;
  // padding-top: 50rpx;
  // padding-bottom: 50rpx;
  padding-left: 30rpx;
  padding-right: 30rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 4px rgba(162, 162, 162, 0.626);

  .line {
    width: 380rpx;
    height: 5rpx;
    background-color: rgba(128, 128, 128, 0.514);
  }

  .topbox {
    // background-color: red;
    height: 250rpx;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50rpx;

    .item {
      width: 210rpx;
      height: 200rpx;
      // background-color: pink;
      border: 5rpx solid skyblue;
      border-radius: 20rpx;
      box-shadow: 2px 2px 4px rgba(162, 162, 162, 0.626);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      image {
        width: 80px;
        height: 80px;
      }

      .title {
        font-weight: 900;
        color: #6666;
      }
    }
  }
}
</style>