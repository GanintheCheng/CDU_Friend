<script lang="ts" setup>
</script>

<template>
  <view class="box">
    <view class="up">
      <image src="/static/images/logo.png" mode="scaleToFill" style="width: 200px;
        height: 200px;border-radius: 90%;" />
    </view>
  </view>
  <view class="box2">
    <uni-section title="项目介绍" type="line">
      <view>橙子交友是一款由成都大学学生自主研发的小程序,力求为成大学生提供一个交友的平台</view>
    </uni-section>
    <view class="line"></view>
    <uni-section title="成员介绍" type="line">
      <view class="font">
        <view>产品测试:刘胜涛</view>
        <view>产品策划:李思睿</view>
        <view>前端开发:甘在呈</view>
        <view>后端开发:王楠 李函</view>
      </view>
    </uni-section>
  </view>
</template>

<style lang="scss">
page {
  background: linear-gradient(to bottom, skyblue, #f7f7f7);
}

.line {
  width: 400rpx;
  height: 10rpx;
  background-color: #66666631;
}

.font {
  font-size: x-large;
  font-weight: 900;
}

.box {
  height: 500rpx;
  width: 100%;
  // background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.box2 {
  width: 600rpx;
  height: 650rpx;
  // background-color: #f7f7f7;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>