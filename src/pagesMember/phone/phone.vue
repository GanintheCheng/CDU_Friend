<script lang="ts" setup>
import { ref } from 'vue';
import { friendList } from '@/type/phone/phone'

const bindClick = (e) => {
  //点击对象的数据
  //img name id
  uni.navigateTo({
    url: `/pagesMember/talk/talk?obj=${JSON.stringify(e)}`
  })
}
//好友
const friList = ref(<friendList[]>[
  {
    letter: 'A',
    userInfo: [
      {
        img: '/static/images/logo.png',
        name: '阿米诺斯',
        id: '29'
      }
    ]
  },
  {
    letter: 'G',
    userInfo: [{
      img: '/static/images/logo.png',
      name: '甘在呈',
      id: '1'
    }]
  },
  {
    letter: 'L',
    userInfo: [{
      img: '/static/images/logo.png',
      name: '李函',
      id: '2'
    }, {
      img: '/static/images/logo.png',
      name: '李思睿',
      id: '3'
    },
    {
      img: '/static/images/logo.png',
      name: '刘胜涛',
      id: '4'
    }
    ]
  },
  {
    letter: 'W',
    userInfo: [{
      img: '/static/images/logo.png',
      name: '王楠',
      id: '5'
    }
    ]
  }, {
    letter: 'Z',
    userInfo: [{
      img: '/static/images/logo.png',
      name: '只因你太美',
      id: '6'
    }
    ]
  }
])
//聊天室
const roomList = ref(<friendList[]>[
  {
    letter: 'T',
    userInfo: [{
      img: '/static/images/logo.png',
      name: '提瓦特码农联盟',
      id: '1'
    }]
  },
  {
    letter: 'Y',
    userInfo: [{
      img: '/static/images/logo.png',
      name: '原友交流群',
      id: '2'
    }]
  }
])
const list = ref<friendList[][]>([friList.value, roomList.value] as unknown as friendList[][]);
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

//悬浮按钮
const horizontal = 'right'
const vertical = 'bottom'
const direction = 'vertical'
const pattern = {
  color: '#7A7E83',
  backgroundColor: '#fff',
  selectedColor: '#007AFF',
  buttonColor: '#007AFF',
  iconColor: '#fff'
}
const content = [{
  iconPath: '/static/images/my.png',
  selectedIconPath: '/static/images/my_fill.png',
  text: '添加',
  active: false
}]
//处理点击添加按钮
const trigger = ()=>{
  uni.navigateTo({
    url: `/pagesMember/add/add`
  })
}
</script>

<template>
  <uni-search-bar>
  </uni-search-bar>
  <!-- 不管报错 -->
  <uni-segmented-control :current="current" :values="items" :style-type="styleType" :active-color="activeColor"
    @clickItem="onClickItem" />
  <scroll-view scroll-y>
    <view class="box" v-for="(item, index) in list[current]" :key="index">
      <view class="title">
        {{ item.letter }}
      </view>
      <view class="info" v-for="(item1, index1) in item.userInfo" :key="index1" @tap="bindClick(item1)">
        <image :src="item1.img" mode="heightFix" />
        {{ item1.name }}
      </view>
    </view>
  </scroll-view>
  <uni-fab :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical" :direction="direction"
    @trigger="trigger"></uni-fab>
</template>

<style lang="scss">
.box {
  .title {
    height: 80rpx;
    background-color: #99999950;
    padding-left: 20rpx;
    color: black;
    font-size: large;
    font-weight: bolder;
    display: flex;
    align-items: center;
  }

  .info {
    image {
      height: 100rpx;
      width: 100rpx;
      margin-right: 20rpx;
      border-radius: 90%;
    }

    height: 120rpx;
    background-color: white;
    padding-left: 10rpx;
    display: flex;
    align-items: center;
    font-size: larger;
    font-weight: 700;
  }
}

page {
  background: linear-gradient(to bottom, skyblue, #f7f7f7);
  height: 100%;
  display: flex;
  flex-direction: column;
}

scroll-view {
  flex: 1;
  height: 100%;
  overflow: hidden;
  // padding-left: 10rpx;
  // padding-right: 10rpx;
}
</style>