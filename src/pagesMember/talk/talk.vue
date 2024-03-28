<script lang="ts" setup>
import { messageInfo } from '@/type/message/message';
import { ref } from 'vue';
import { useMemberStore } from '@/stores/modules/member';
import { talkHistoryInfo } from '@/type/talk/talk';
import { onLoad } from '@dcloudio/uni-app';
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
//获取历史信息
const historyList = ref<talkHistoryInfo[]>()
onLoad(async () => {
  //请求后端数据,本地id为localUser.id,对方id为parseObj.id
  historyList.value = [
    {
      id: '6666',
      user1: parsedObj.value.id,
      user2: localUser.id,
      body: '坩埚埚我喜欢你',
      img: null,
      createtime: new Date(),
      createManId: parsedObj.value.id
    },
    {
      id: '9999',
      user1: parsedObj.value.id,
      user2: localUser.id,
      body: '我也喜欢你',
      img: '/static/images/logo.png',
      createtime: new Date(),
      createManId: localUser.id
    }
  ];
  //模拟得到数据,后期删掉
})
//本地用户输入
const inputMess = ref<string>('')
//本地图片
const inputImg = ref<string>('')
//是否上传了图片
const isImg = ref(false)
//表情
const emo = ref([
  '\u{1F60A}',
  '\u{1F603}',
  '\u{1F604}',
  '\u{1F601}',
  '\u{1F606}',
  '\u{1F609}',
  '\u{1F60D}',
  '\u{1F618}',
  '\u{1F602}',
  '\u{1F605}',
  '\u{1F60B}',
  '\u{1F60E}',
  '\u{1F607}',
  '\u{1F61C}',
  '\u{1F61D}',
  '\u{1F61B}',
  '\u{1F610}',
  '\u{1F615}',
  '\u{1F612}',
  '\u{1F61E}',
  '\u{1F622}',
  '\u{1F61F}',
  '\u{1F623}',
  '\u{1F616}',
  '\u{1F624}',
  '\u{1F62D}',
  '\u{1F626}',
  '\u{1F627}',
  '\u{1F628}',
  '\u{1F629}',
  '\u{1F630}',
  '\u{1F631}',
  '\u{1F635}',
  '\u{1F632}',
  '\u{1F633}',
  '\u{1F637}',
  '\u{1F912}',
  '\u{1F915}',
  '\u{1F922}',
  '\u{1F927}',
  '\u{1F920}',
  '\u{1F921}',
  '\u{1F925}',
  '\u{1F913}',
  '\u{1F917}',
  '\u{1F914}',
  '\u{1F910}',
  '\u{1F915}',
  '\u{1F911}',
  '\u{1F912}',
  '\u{1F913}',
  '\u{1F914}',
  '\u{1F915}',
  '\u{1F916}',
  '\u{1F917}',
  '\u{1F918}',
  '\u{1F919}',
  '\u{1F91A}',
  '\u{1F91B}',
  '\u{1F91C}',
  '\u{1F91D}',
  '\u{1F91E}',
  '\u{1F920}',
  '\u{1F921}',
  '\u{1F922}',
  '\u{1F923}',
  '\u{1F924}',
  '\u{1F925}',
  '\u{1F926}',
  '\u{1F927}',
  '\u{1F928}',
  '\u{1F929}',
  '\u{1F92A}',
  '\u{1F92B}',
  '\u{1F92C}',
  '\u{1F92D}',
  '\u{1F92E}',
  '\u{1F92F}',
  '\u{1F930}',
  '\u{1F931}',
  '\u{1F932}',
  '\u{1F933}',
  '\u{1F934}',
  '\u{1F935}',
  '\u{1F936}',
  '\u{1F937}',
  '\u{1F938}',
  '\u{1F939}',
  '\u{1F93A}',
  '\u{1F93C}',
  '\u{1F93D}',
  '\u{1F93E}',
  '\u{1F940}',
  '\u{1F941}',
  '\u{1F942}',
  '\u{1F943}',
  '\u{1F944}',
  '\u{1F6C0}',
  '\u{1F6C1}',
  '\u{1F6C2}',
  '\u{1F6C3}',
  '\u{1F6C4}',
  '\u{1F6C5}',
  '\u{1F928}',
  '\u{1F929}',
  '\u{1F92A}',
  '\u{1F92B}',
  '\u{1F92C}',
  '\u{1F92D}',
  '\u{1F92E}',
  '\u{1F92F}',
  '\u{1F930}',
  '\u{1F931}',
  '\u{1F932}',
  '\u{1F933}',
  '\u{1F934}',
  '\u{1F935}',
  '\u{1F936}',
  '\u{1F937}',
  '\u{1F938}',
  '\u{1F939}',
  '\u{1F93A}',
  '\u{1F93C}',
  '\u{1F93D}',
  '\u{1F93E}',
  '\u{1F940}',
  '\u{1F941}',
  '\u{1F942}',
  '\u{1F943}',
  '\u{1F944}'
])
//弹出层
const popup = ref<{
  open: (type: UniHelper.UniPopupType) => {}
  close: () => {}
}>()
const message = ref<{
  open: () => {}
  close: () => {}
}>()
const toggle = () => {
  popup.value.open('center')
}
//发送
const sendTalk = () => {
  //数据监测
  const tempImg = (isImg.value ? inputImg.value : null);
  if (inputMess.value.trim().length === 0 && !tempImg) return;
  //包装数据+上传数据 略

  //模拟返回数据
  const res = <talkHistoryInfo>{
    id: '66666',
    user1: parsedObj.value.id,
    user2: localUser.id,
    body: inputMess.value,
    img: tempImg,
    createtime: new Date(),
    createManId: localUser.id
  }
  //添加至本地
  historyList.value.push(res)
  //删除文字
  console.log(res.body);
  inputMess.value = ''
  //删除图片路径
  isImg.value = false
};
1
//添加图片
const sendImg = () => {
  uni.chooseImage({
    count: 1,
    sizeType: 'compressed',
    success: (success) => {
      inputImg.value = success.tempFilePaths[0] as string
      isImg.value = true
      message.value.open()
      setTimeout(() => {
        message.value.close()
      },4000)
    },
  })
}
//重选图片
const deleteImg = () => {
  isImg.value = false
  inputImg.value = ''
}
</script>

<template>
  <uni-nav-bar dark :fixed="true" shadow background-color="#51a3e8" status-bar left-icon="left" :left-text="props.name"
    @clickLeft="back" leftWidth="400rpx" ref="myTitle" />
  <scroll-view scroll-y>
    <view v-for="(item, index) in historyList" :key="index" class="talkview"
      :class="{ lefttalk: item.createManId != localUser.id, righttalk: item.createManId === localUser.id }">
      <!-- 对方发言 -->
      <view class="leftitem" v-if="item.createManId != localUser.id">
        <view class="img">
          <image :src="parsedObj.thumbnail" mode="scaleToFill" />
        </view>
        <view class="text">
          <view class="view">{{ item.body }}</view>
        </view>
      </view>
      <!-- 本地用户发言 -->
      <view class="rightitem" v-else>
        <view class="text">
          <view class="view">{{ item.body }}
            <br>
            <image :src="item.img" mode="widthFix" v-if="item.img" />
          </view>
        </view>
        <view class="img">
          <image :src="localUser.url" mode="scaleToFill" />
        </view>
      </view>
    </view>
  </scroll-view>
  <view class="bt">
    <view class="btbox">
      <view class="song">
        <uni-icons type="mic" size="30"></uni-icons>
      </view>
      <view class="left">
        <textarea v-model="inputMess" placeholder="输入内容" class="input"></textarea>
      </view>
      <view class="right">
        <uni-icons type="color" size="30" @tap="toggle()"></uni-icons>
        <uni-icons type="image" size="30" v-show="inputMess.trim().length == 0 && !isImg" @tap="sendImg"></uni-icons>
        <uni-icons type="trash" size="30" v-show="isImg" @tap="deleteImg"></uni-icons>
        <button v-show="inputMess.trim().length != 0 || isImg" size="mini" @tap="sendTalk">发送</button>
      </view>
    </view>
  </view>
  <view>
    <!-- 普通弹窗 -->
    <uni-popup ref="popup" background-color="#fff">
      <view class="popup-content">
        <scroll-view scroll-y>
          <text v-for="(item, index) in emo" :key="index" @tap="inputMess += item" class="emo">
            {{ item }}</text>
        </scroll-view>
      </view>
    </uni-popup>

    <uni-popup ref="message" type="top">
      <uni-popup-message type="success" message="图片已成功上传,若需重选请点击垃圾桶后重新上传" :duration="100"></uni-popup-message>
    </uni-popup>
  </view>
</template>

<style lang="scss">
page {
  background: linear-gradient(to bottom, skyblue, #f7f7f7);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.uni-popup-message {
  margin-top: 128rpx;
}

scroll-view {
  flex: 0.95;
  height: 100%;
  overflow: hidden;
  // padding-left: 10rpx;
  // padding-right: 10rpx;
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
        width: 100%;
        background-color: white;
        border-radius: 10rpx;
        word-wrap: break-word;
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
        font-size: 18rpx;
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

//talkview
.talkview {
  min-height: 150rpx;
  width: 550rpx;
  margin: 10rpx;
  float: left;
}

//对方发的
.lefttalk {
  float: left;
}

.leftitem {
  display: flex;
  height: 100%;

  .img {
    flex: 0.2;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    height: 150rpx;

    image {
      height: 100rpx;
      width: 100rpx;
      border-radius: 90%;
    }
  }

  .text {
    flex: 0.8;
    padding: 10rpx;

    .view {
      margin-top: 12rpx;
      padding: 15rpx;
      background-color: white;
      border-radius: 12rpx;
      display: inline-block;
      max-width: 400rpx;
      word-wrap: break-word;
      overflow-wrap: break-word;

      image {
        max-width: 300rpx;
      }
    }
  }
}

//本地用户发的
.righttalk {
  float: right;
}

.rightitem {
  display: flex;
  height: 100%;

  .img {
    flex: 0.2;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    height: 150rpx;

    image {
      height: 100rpx;
      width: 100rpx;
      border-radius: 90%;
    }
  }

  .text {
    flex: 0.8;
    padding: 10rpx;

    .view {
      margin-top: 12rpx;
      padding: 15rpx;
      background-color: white;
      border-radius: 12rpx;
      display: inline-block;
      float: right;
      max-width: 400rpx;
      word-wrap: break-word;
      overflow-wrap: break-word;

      image {
        max-width: 300rpx;
      }
    }
  }
}

//popup组件
.popup-content {
  height: 500rpx;
  width: 500rpx;
  padding: 10rpx;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  // align-items:;
}

//表情包
.emo {
  margin-right: 15rpx;
  margin-bottom: 20rpx;
  display: inline-block;
  font-size: xx-large;
}
</style>