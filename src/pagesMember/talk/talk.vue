<script lang="ts" setup>
import { messageInfo } from '@/type/message/message';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import { useMemberStore } from '@/stores/modules/member'
//本地用户
const localUser = useMemberStore().profile
//参数 后期可用id请求数据
const props = defineProps({
  name: String,
  obj: String,
  index: Number
})
const back = () => {
  uni.navigateBack(
  )
}
// 将接收到的 JSON 字符串转换为对象
const parsedObj = ref<messageInfo>(JSON.parse(props.obj));
const windowHeight = ref()
uni.getSystemInfo({
  success(res) {
    windowHeight.value = res.windowHeight;
  }
});

//本地用户输入
const inputMess = ref<string>('')
</script>

<template>
  <uni-nav-bar dark :fixed="true" shadow background-color="#51a3e8" status-bar left-icon="left" :left-text="props.name"
    @clickLeft="back" leftWidth="400rpx" ref="myTitle" />
  <scroll-view scroll-y>
    <text>&#x1F60A;</text>
  </scroll-view>

  <view class="bt">
    <view class="btbox">
      <view class="song">
        <uni-icons type="mic" size="30"></uni-icons>
      </view>
      <view class="left">
        <input v-model="inputMess" placeholder-class="input-placeholder" @input="" class="input" />
      </view>
      <view class="right">
        <uni-icons type="color" size="30"></uni-icons>
        <uni-icons type="image" size="30" v-show="inputMess.trim().length == 0"></uni-icons>
        <button v-show="inputMess.trim().length != 0"  size="mini">发送</button>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
page {
  background: linear-gradient(to bottom, skyblue, #f7f7f7);
  height: 100%;
  display: flex;
  flex-direction: column;
}

scroll-view {
  flex: 0.95;
  height: 100%;
  overflow: hidden;
}

.bt {
  flex: 0.05;
  background-color: #9999994a;
  padding-left: 10rpx;
  padding-right: 10rpx;
  padding-top: 10rpx;
  padding-bottom: 10rpx;
  overflow: hidden;

  .btbox {
    height: 100%;
    display: flex;

    .song {
      flex: 0.1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .left {
      flex: 0.7;

      .input {
        // border: 1px solid #000;
        height: 100%;
        background-color: white;
        border-radius: 10rpx;
      }
    }

    .right {
      flex: 0.2;
      padding-left: 10rpx;
      padding-right: 10rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;

      uni-icons {
        flex: 0.2;
      }

      button {
        font-size: xx-small;
        font-weight: 900;
        width: 94rpx;
        height: 100%;
        flex: 0.8;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #66a1e2;
        color: white;
      }
    }
  }
}
</style>