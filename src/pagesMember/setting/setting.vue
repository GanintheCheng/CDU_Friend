<script setup lang="ts">
import { useMemberStore } from '@/stores/modules/member'
import { ref } from 'vue'
import { http } from '@/util/http'
const popup = ref<{
  open: () => {}
  close: () => {}
  comfirm: () => {}
}>()
const noLogin = () => {
  // store.clearProfile()
  // uni.showToast({ icon: 'success', title: '退出成功' })
  popup!.value!.open()
}
const close = () => {
  popup!.value!.close()
}
const confirm = () => {
  store.clearProfile()
  uni.showToast({ icon: 'success', title: '退出成功' })
  popup!.value!.close()
}
//

const store = useMemberStore()

// const getXX = () => {
//   return http<any>({
//     method: 'GET',
//     url: '',
//     data: {
      
//     },
//   })
// }
// getXX().then(res=>{
//   console.log(res);
// })
  
</script>

<template>
  <view class="viewport">
    <!-- 列表1 -->
    <view class="list" v-if="store.profile">
      <navigator url="/pagesMember/info/info" hover-class="none" class="item arrow">
        我的个人信息
      </navigator>
    </view>
    <!-- 列表2 -->
    <view class="list">
      <button hover-class="none" class="item arrow" open-type="openSetting">授权管理</button>
      <button hover-class="none" class="item arrow" open-type="feedback">问题反馈</button>
      <button hover-class="none" class="item arrow" open-type="contact">联系我们</button>
    </view>
    <!-- 列表3 -->
    <view class="list">
      <navigator hover-class="none" class="item arrow" url="/pagesMember/agreement/agreement">用户协议</navigator>
      <navigator hover-class="none" class="item arrow" url="/pagesMember/privacy/privacy">隐私政策</navigator>
      <navigator hover-class="none" class="item arrow" url="/pagesMember/about/about">关于橙子交友</navigator>
    </view>
    <!-- 操作按钮 -->
    <view class="action" v-if="store.profile" @tap="noLogin">
      <view class="button">退出登录</view>
    </view>
  </view>
  <!-- 弹窗 -->
  <uni-popup ref="popup" type="dialog">
    <uni-popup-dialog mode="base" title="提醒" content="是否确认退出" :duration="2000" :before-close="true" @close="close"
      @confirm="confirm"></uni-popup-dialog>
  </uni-popup>
</template>

<style lang="scss">
page {
  background: linear-gradient(to bottom, skyblue, #f7f7f7);
}

.viewport {
  padding: 20rpx;
}

/* 列表 */
.list {
  padding: 0 20rpx;
  background-color: #fff;
  margin-bottom: 20rpx;
  border-radius: 10rpx;

  .item {
    line-height: 90rpx;
    padding-left: 10rpx;
    font-size: 30rpx;
    color: #333;
    border-top: 1rpx solid #ddd;
    position: relative;
    text-align: left;
    border-radius: 0;
    background-color: #fff;

    &::after {
      width: auto;
      height: auto;
      left: auto;
      border: none;
    }

    &:first-child {
      border: none;
    }

    &::after {
      right: 5rpx;
    }
  }

  .arrow::after {
    content: '\e6c2';
    position: absolute;
    top: 50%;
    color: #ccc;
    font-family: 'erabbit' !important;
    font-size: 32rpx;
    transform: translateY(-50%);
  }
}

/* 操作按钮 */
.action {
  text-align: center;
  line-height: 90rpx;
  margin-top: 40rpx;
  font-size: 32rpx;
  color: #333;

  .button {
    background-color: #fff;
    margin-bottom: 20rpx;
    border-radius: 10rpx;
  }
}
</style>
