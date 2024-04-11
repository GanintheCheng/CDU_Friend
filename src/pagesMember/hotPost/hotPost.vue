<script lang="ts" setup>
import Line from '@/components/Line.vue';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';

const info = ref<{
  img: string,
  title: string,
  content: string
}[]>()

onLoad(() => {
  //模拟获取数据
  info.value = [
    {
      img: '/static/images/logo.png',
      title: '我刘胜涛是小可爱',
      content: '如题所示,我是个小可爱'
    },
    {
      img: '/static/images/logo.png',
      title: '我刘胜涛爱玩原神',
      content: '如题所示,我爱玩GenShin'
    },
    {
      img: '/static/images/logo.png',
      title: '我刘胜涛是小可爱',
      content: '如题所示,我是个小可爱'
    },
    {
      img: '/static/images/logo.png',
      title: '我刘胜涛爱玩原神',
      content: '如题所示,我爱玩GenShin'
    },
    {
      img: '/static/images/logo.png',
      title: '我刘胜涛是小可爱',
      content: '如题所示,我是个小可爱'
    },
    {
      img: '/static/images/logo.png',
      title: '我刘胜涛爱玩原神',
      content: '如题所示,我爱玩GenShin'
    },
    {
      img: '/static/images/logo.png',
      title: '我刘胜涛是小可爱',
      content: '如题所示,我是个小可爱'
    },
    {
      img: '/static/images/logo.png',
      title: '我刘胜涛爱玩原神',
      content: '如题所示,我爱玩GenShin'
    }
  ]
})

const tap = () => {
  uni.navigateTo({
    url:`/pagesMember/postdetail/postdetail?id=${1}`,
  })
}
</script>

<template>
  <view class="body">
    <image src="/static/images/hotPost.jpg" mode="aspectFill" class="topimg" />
    <view class="btinfo">
      <view class="title">
        实时热门帖子
      </view>
      <Line></Line>
      <uni-list>
        <uni-list-item :title="item.title" :note="item.content" showArrow :thumb="item.img" thumb-size="lg"
          rightText="跳转" v-for="(item, index) in info" :key="index" clickable @tap="tap" />
      </uni-list>
    </view>
  </view>
</template>

<style lang="scss">
.topimg {
  width: 750rpx;
  height: 400rpx;
}

.btinfo {
  width: 710rpx;
  margin-left: 20rpx;

  .title {
    background-color: #99999929;
    font-weight: 800;
    padding: 10rpx;
  }
}
</style>