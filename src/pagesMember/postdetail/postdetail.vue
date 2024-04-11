<script lang="ts" setup>
import Line from "@/components/Line.vue"
import MyPost from "@/components/MyPost.vue";
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";
const props = defineProps({
  id: {
    type: Number
  }
})
const postInfo = ref<
  {
    userImage: string,
    userName: string,
    userTime: string,
    sendImg: string[],
    sendContent: string
  }[]
>()
onLoad(() => {
  //通过id模拟获取数据
  postInfo.value = ([{
    userImage: '/static/images/logo.png',
    userName: '坩埚埚',
    userTime: '20岁 男',
    sendImg: ['/static/images/logo.png', '/static/images/logo.png'],
    sendContent: '好想玩原神'
  }, {
    userImage: '/static/images/logo.png',
    userName: '刘胜涛',
    userTime: '22岁 男',
    sendImg: ['/static/images/logo.png', '/static/images/logo.png'],
    sendContent: '我是个小可爱'
  },
  {
    userImage: '/static/images/logo.png',
    userName: '坩埚埚',
    userTime: '20岁 男',
    sendImg: ['/static/images/logo.png', '/static/images/logo.png'],
    sendContent: '好想玩原神'
  }, {
    userImage: '/static/images/logo.png',
    userName: '刘胜涛',
    userTime: '22岁 男',
    sendImg: ['/static/images/logo.png', '/static/images/logo.png'],
    sendContent: '我是个小可爱'
  },
  {
    userImage: '/static/images/logo.png',
    userName: '坩埚埚',
    userTime: '20岁 男',
    sendImg: ['/static/images/logo.png', '/static/images/logo.png'],
    sendContent: '好想玩原神'
  }])
})
//悬浮窗
const content = [{
  iconPath: '/static/images/发言.png',
  selectedIconPath: '/static/images/发言.png',
  text: '留言',
  active: false
}]
const pattern = {
  color: '#7A7E83',
  backgroundColor: '#fff',
  selectedColor: '#007AFF',
  buttonColor: '#007AFF',
  iconColor: '#fff'
}
const trigger = () => {
  uni.navigateTo({
    url: `/pagesMember/addpost/addpost?id=${1}`
  })
}
</script>

<template>
  <view class="body">
    <view class="title">
      <uni-section class="mb-10" title="标题"
        sub-title="标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容" type="circle" />
      <Line></Line>
      <view v-for="(item, index) in postInfo">
        <MyPost :info="item" :index="index"></MyPost>
      </view>
    </view>
    <uni-fab :pattern="pattern" :content="content" :horizontal="'left'" :vertical="'bottom'" :direction="'vertical'"
      @trigger="trigger"></uni-fab>
  </view>
</template>

<style lang="scss">
page {
  // background: linear-gradient(to bottom, skyblue, #f7f7f7);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.body {
  padding-left: 20rpx;
  padding-right: 20rpx;
  background: linear-gradient(to bottom, skyblue, #f7f7f7);
}

.title {
  margin-top: 10rpx;
}
</style>