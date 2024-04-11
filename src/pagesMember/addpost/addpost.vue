<script lang="ts" setup>
import { ref } from 'vue';

//输入框
const contentValue = ref('')
const titleValue = ref('')
//图片
const imageValue = ref([])
const image = ref([])
const select = (e) => {
  image.value = e.tempFilePaths[0]
}
// 获取上传进度
const progress = (e) => {
  console.log('上传进度：', e)
}

// 上传成功
const success = (e) => {
  console.log('上传成功')
}

// 上传失败
const fail = (e) => {
  console.log('上传失败：', e)
}

const myStyles = {
  "border": { // 如果为 Boolean 值，可以控制边框显示与否
    "color": "#6666",		// 边框颜色
    "width": "1px",		// 边框宽度
    "style": "solid", 	// 边框样式
  }
}

//id
const props = defineProps({
    id:{
      type:Number
    }
})
</script>

<template>
  <view class="body">
    <uni-section title="请在下方输入正文" type="circle" paddind>
      <uni-easyinput type="textarea" autoHeight v-model="contentValue" placeholder="请完整输入内容(建议200字以内)" :maxlength="200"
        placeholderStyle="font-weight: bold;"></uni-easyinput>
      <view style="height: 50rpx;"></view>
      <uni-file-picker v-model="imageValue" fileMediatype="image" mode="grid" @select="select" @progress="progress"
        @success="success" @fail="fail" :limit="9" :image-styles="myStyles" return-type="array" />
      <view class="publish">
        <button type="primary">发布</button>
      </view>
    </uni-section>
  </view>
</template>

<style lang="scss">
.placeTitle {
  font-weight: bold;
}

page {
  background: #f7f7f7
}

.body {
  padding-left: 20rpx;
  padding-right: 20rpx;
  height: fit-content;
}

.publish {
  margin-top: 50rpx;
  width: 200rpx;
}
</style>