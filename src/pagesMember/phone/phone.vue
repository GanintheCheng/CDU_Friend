<script lang="ts" setup>

const bindClick = (e) => {
  console.log('点击item，返回数据' + JSON.stringify(e))
}
const list = [{
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
}]
const back = () => {

}
</script>

<template>
  <uni-search-bar>
  </uni-search-bar>
  <uni-indexed-list :options="list" :show-select="false" @click="bindClick" />
</template>

<style lang="scss">
uni-indexed-list {
  position: absolute;
  left: 0;
  top: 110rpx !important;
  right: 0;
  bottom: 0;
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
}
</style>