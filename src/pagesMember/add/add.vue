<script lang="ts" setup>
import { ref } from 'vue';

//输入内容
const inputSearch = ref<string>()
//处理搜索逻辑
const isShow = ref(true)
const iconClick = () => {
  isShow.value = false
  setTimeout(() => {//模拟获取friend
    friendList.value = [{
      img: '/static/images/logo.png',
      name: '甘在呈',
      id: 1
    }, {
      img: '/static/images/logo.png',
      name: '王楠',
      id: 2
    }]
    roomList.value = [{
      img: '/static/images/logo.png',
      name: '135',
      id: 3
    }, {
      img: '/static/images/logo.png',
      name: '提瓦特码农联盟',
      id: 4
    }]
    isShow.value = true
  }, 500)
}
//分段器
const current = ref(0)
const items = ['好友', '聊天室']
const activeColor = ref('#007aff')
const onClickItem = (e) => {
  if (current.value !== e.currentIndex) {
    current.value = e.currentIndex
  }
}
//好友列表
const friendList = ref<{ img: string; name: string; id: number }[]>([
])
const addFriend = async (e: number) => {
  addNum.value = e
  inputDialog.value.open()
}
//添加好友请求
const inputDialog = ref()
const addNum = ref()
const dialogInputConfirm = (e) => {
  //请求后端
  //id为addNum.value reason为e 
  uni.showToast({
    title: '添加中',
    icon: 'loading',
    duration: 1000,
    success: () => {
      //模拟添加时间
      setTimeout(() => {
        uni.hideToast();
        uni.showToast({
          title: '请求发送成功',
          duration: 500
        })
      }, 1000)
    }
  })
}
//聊天室
const roomList = ref<{ img: string; name: string; id: number }[]>([
])
const addRoom = async (e: number) => {
  console.log(e);
  await uni.showToast({
    title: '添加中',
    icon: 'loading',
    duration: 1000,
    success: () => {
      //模拟添加时间
      setTimeout(() => {
        uni.hideToast();
        uni.showToast({
          title: '关注成功',
          duration: 500
        })
      }, 1000)
    }
  })
}
//好友请求
const requestList = ref<{ img: string; name: string; id: number; reason: string }[]>([])
const flashRequest = () => {
  requestList.value = [{
    img: '/static/images/logo.png',
    name: '甘在呈',
    id: 1,
    reason: '我是刘胜涛他爹'
  }, {
    img: '/static/images/logo.png',
    name: '刘胜涛',
    id: 2,
    reason: '我是原神玩家'
  }]
}
//处理弹窗
const comfirm = ref()
const comfirmMess = ref()
const nowId = ref<number>()
const doRequest = (e) => {
  nowId.value = e.id
  comfirmMess.value = '是否添加' + e.name + '为好友'
  comfirm.value.open()
}
const dialogClose = () => {
  requestList.value = requestList.value.filter(item => item.id != nowId.value);
}
const dialogConfirm = () => {
  requestList.value = requestList.value.filter(item => item.id != nowId.value);
  //添加好友
}
</script>

<template>
  <view class="body">
    <uni-notice-bar show-icon scrollable text="使用昵称与橙子id搜索均可,下方可切换用户与聊天室,避免混淆" />
    <uni-collapse>
      <uni-collapse-item title="待处理请求" :open="false">
        <uni-card :is-shadow="false" is-full>
          <view style="text-align: center;"><button size="mini" type="primary" @tap="flashRequest">刷新</button></view>
          <view v-if="requestList.length != 0">
            <uni-list-item :title="item.name" :note="item.reason" showArrow :thumb="item.img" thumb-size="sm"
              rightText="接受" v-for="(item, index) in requestList" :key="index" clickable @tap="doRequest(item)" />
          </view>
          <view v-else>
            暂无请求,去找更多的小伙伴吧
          </view>
        </uni-card>
      </uni-collapse-item>
    </uni-collapse>
    <uni-easyinput prefixIcon="search" v-model="inputSearch" placeholder="昵称或橙子id" @iconClick="iconClick">
    </uni-easyinput>
    <view class="uni-padding-wrap uni-common-mt">
      <uni-segmented-control :current="current" :values="items" style-type="button" :active-color="activeColor"
        @clickItem="onClickItem" />
    </view>
    <uni-transition mode-class="fade" :show="isShow" :duration="800">
      <view class="content">
        <view v-if="current === 0">
          <view class="content-text">
            <uni-list v-if="friendList.length != 0">
              <uni-list-item :title="item.name" showArrow :thumb="item.img" thumb-size="lg" rightText="添加" clickable
                @click="addFriend(item.id)" v-for="(item, index) in friendList" :key="index" />
            </uni-list>
            <view v-else>
              搜索查无此人
            </view>
          </view>
        </view>
        <view v-if="current === 1">
          <view class="content-text">
            <uni-list v-if="roomList.length != 0">
              <uni-list-item :title="item.name" link="navigateTo" :thumb="item.img" thumb-size="lg" rightText="添加"
                clickable @click="addRoom(item.id)" v-for="(item, index) in roomList" :key="index"></uni-list-item>
            </uni-list>
            <view v-else>
              搜索查无此人
            </view>
          </view>
        </view>
      </view>
    </uni-transition>
  </view>

  <!-- 提示框 -->
  <uni-popup ref="comfirm" type="dialog">
    <uni-popup-dialog type="success" cancelText="拒绝" confirmText="同意" title="确认" :content="comfirmMess"
      @confirm="dialogConfirm" @close="dialogClose"></uni-popup-dialog>
  </uni-popup>
  <!-- 输入提示框 -->
  <uni-popup ref="inputDialog" type="dialog">
    <uni-popup-dialog ref="inputClose" mode="input" title="输入添加理由" placeholder="输入理由"
      @confirm="dialogInputConfirm"></uni-popup-dialog>
  </uni-popup>
</template>



<style lang="scss">
page {
  background: linear-gradient(to bottom, skyblue, #f7f7f7);
}

.body {
  padding-left: 20rpx;
  padding-right: 20rpx;
  background: linear-gradient(to bottom, skyblue, #f7f7f7);
}
</style>