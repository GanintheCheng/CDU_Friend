<script lang="ts" setup>
import { ref } from 'vue';


const bindClick = (e) => {
  console.log('点击item，返回数据' + JSON.stringify(e))
}
const list = [[{
  'letter': 'A',
  'data': [
    '阿米诺斯'
  ]
}, {
  'letter': 'B',
  'data': [
    '巴啦啦能量'
  ]
}, {
  'letter': 'D',
  'data': [
    '咚咚咚'
  ]
}, {
  'letter': 'G',
  'data': [
    '甘在呈'
  ]
}, {
  'letter': 'L',
  'data': [
    '刘胜涛',
    '李函',
    '李思睿'
  ]
}, {
  'letter': 'W',
  'data': [
    '王楠楠'
  ]
}, {
  'letter': 'Z',
  'data': [
    '张诗明'
  ]
}], [{
  'letter': 'J',
  'data': [
    '计算机科学与技术'
  ]
}, {
  'letter': 'R',
  'data': [
    '软件工程',
    '人工智能'
  ]
}, {
  'letter': 'W',
  'data': [
    '物联网'
  ]
}
]]
//分页选择
const items = ['好友', '聊天室']
const current = ref(0)
const activeColor = ref('#3d63ed')
const styleType = ref('text')
const back = () => {
}
const onClickItem = (e) => {
  if (current.value !== e.currentIndex) {
    current.value = e.currentIndex
  }
}
</script>

<template>
  <uni-search-bar>
  </uni-search-bar>
  <uni-segmented-control :current="current" :values="items" :style-type="styleType" :active-color="activeColor"
    @clickItem="onClickItem" />
  <uni-indexed-list :options="list[current]" :show-select="false" @click="bindClick" />
</template>

<style lang="scss">
uni-indexed-list {
  position: absolute;
  left: 0;
  top: 210rpx !important;
  right: 0;
  bottom: 0;
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
}
</style>