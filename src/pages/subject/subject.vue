<script lang="ts" setup>
import Search from '@/pages/subject/components/Search.vue';
import Foot from '@/pages/subject/components/Foot.vue'
import { provide } from 'vue';
import { ref } from 'vue';
import { onShow } from '@dcloudio/uni-app';
const titleChoice = ref(0)
const changeChoice = (e: number) => {
  titleChoice.value = e
}
provide('changeChoice', changeChoice)

//left
const checkList = ref([false, false, false, false, false, false])
const contentText = [{
  contentDefault: '聊天室',
  contentFav: '随机好友'
}, {
  contentDefault: '刷新',
  contentFav: '刷新'
}]
//偏移
const turn = [0,1,2,3,4]
const colorList = ['#99a2fe','#ffe5e7','#ebf1fe','#51a3e8','#32db72']
const turnNum = ref([0,1,2,0,1,2,2])
const gutter = 0
const nvueWidth = 730
const favClick = (index: number) => {
  if(index==1)changeTurnNum()
  checkList.value[index] = !checkList.value[index]
  console.log(checkList.value[index]);
  // forceUpdate()
}
const changeTurnNum = ()=>{
  const newTurnNum = [
    parseInt(Math.random() * 5+''),
    parseInt(Math.random() * 5+''),
    parseInt(Math.random() * 5+''),
    parseInt(Math.random() * 5+''),
    parseInt(Math.random() * 5+''),
    parseInt(Math.random() * 5+''),
    parseInt(Math.random() * 5+'')
  ]
  turnNum.value = newTurnNum
}


onShow(()=>{
  changeTurnNum()
}) 
</script>

<template>
  <Search></Search>
  <view class="right" v-show="titleChoice === 1">
    <Foot></Foot>
    <view class="at">
      <view class="item">
        <view class="up">
          <view>关注聊天室</view>
          <text class="see">排序顺序<text class="icon-down"></text></text>
        </view>
        <view class="downbox">3</view>
      </view>
    </view>
  </view>
  <view class="left" v-show="titleChoice === 0">
    <view class="title">
      <uni-section title="菜单选取" type="line">
        <view class="example-body">
          <uni-fav :checked="checkList[0]" class="favBtn" @tap="favClick(0)" :content-text="contentText[0]" />
          <uni-fav :checked="false" :star="true" class="favBtn" @tap="favClick(1)" :content-text="contentText[1]" />
        </view>
      </uni-section>
    </view>

    <view class="body">
      <uni-section title="实时聊天" subTitle="一生的陪伴,从这里开始" type="circle">
        <view class="example-body">
          <uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
            <uni-col :span="8" :offset="turn[turnNum[0]]">
              <view class="demo-uni-col dark" :style="{backgroundColor:colorList[turnNum[0]]}">
                <view class="colitem">
                  <image src="@/static/images/logo.png" mode="scaleToFill" />
                  <view>仓田真白</view>
                </view>
              </view>
            </uni-col>
            <uni-col :span="8" :offset="turn[turnNum[1]]">
              <view class="demo-uni-col light" :style="{backgroundColor:colorList[turnNum[1]]}">
                <view class="colitem">
                  <image src="@/static/images/logo.png" mode="scaleToFill" />
                  <view>仓田真白</view>
                </view>
              </view>
            </uni-col>
          </uni-row>

          <uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
            <uni-col :span="8" :offset="turn[turnNum[2]]">
              <view class="demo-uni-col dark" :style="{backgroundColor:colorList[turnNum[2]]}">
                <view class="colitem">
                  <image src="@/static/images/logo.png" mode="scaleToFill" />
                  <view>仓田真白</view>
                </view>
              </view>
            </uni-col>
            <uni-col :span="8" :offset="turn[turnNum[3]]">
              <view class="demo-uni-col light" :style="{backgroundColor:colorList[turnNum[3]]}">
                <view class="colitem">
                  <image src="@/static/images/logo.png" mode="scaleToFill" />
                  <view>仓田真白</view>
                </view>
              </view>
            </uni-col>
          </uni-row>

          <uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
            <uni-col :span="8" :offset="turn[turnNum[4]]">
              <view class="demo-uni-col dark" :style="{backgroundColor:colorList[turnNum[4]]}">
                <view class="colitem">
                  <image src="@/static/images/logo.png" mode="scaleToFill" />
                  <view>仓田真白</view>
                </view>
              </view>
            </uni-col>
            <uni-col :span="8" :offset="turn[turnNum[5]]">
              <view class="demo-uni-col light" :style="{backgroundColor:colorList[turnNum[5]]}">
                <view class="colitem">
                  <image src="@/static/images/logo.png" mode="scaleToFill" />
                  <view>仓田真白</view>
                </view>
              </view>
            </uni-col>
          </uni-row>

          <uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
            <uni-col :span="10" :offset="turn[turnNum[6]]+5">
              <view class="demo-uni-col dark" :style="{backgroundColor:colorList[turnNum[6]]}">
                <view class="colitem">
                  <image src="@/static/images/logo.png" mode="scaleToFill" />
                  <view>仓田真白</view>
                </view>
              </view>
            </uni-col>
          </uni-row>
        </view>
      </uni-section>
    </view>
    <view class="bt">
      <view class="btbox">
        <view class="btinner">
          <image
            src="@/static/images/love.png"
            mode="scaleToFill"
          />
          <view>在线闪聊</view>
        </view>
        <view class="divide">|</view>
        <view class="btinner">
          <image
            src="@/static/images/phone.png"
            mode="scaleToFill"
          />
          <view>语音闪聊</view>
        </view>
        <view class="divide">|</view>
        <view class="btinner">
          <image
            src="@/static/images/shandian.png"
            mode="scaleToFill"
          />
          <view>心动信号</view>
        </view>
        <view class="divide">|</view>
        <view class="btinner">
          <image
            src="@/static/images/room.png"
            mode="scaleToFill"
          />
          <view>聊天室</view>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
page {
  background: linear-gradient(to bottom, skyblue, #f7f7f7);
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: cursive !important;
  position: relative;
}

Search {
  margin-bottom: 20rpx;
}

.right {
  .at {
    margin-top: 20rpx;
    padding-left: 10rpx;
    padding-right: 10rpx;
    height: 500rpx;

    .item {
      background-color: #ffffff;
      height: 100%;
      border-radius: 10rpx;

      .up {
        padding-left: 5rpx;
        padding-top: 10rpx;
        padding-right: 20rpx;
        font-weight: 900;
        margin-bottom: 30rpx;
        height: 50rpx;
        display: flex;
        justify-content: space-between;

        .see {
          font-size: x-small;
          color: gray;
        }
      }

      .downbox {
        height: 400rpx;
        // background-color: pink;
      }
    }
  }
}

.left {
  .title {
    margin-bottom: 20rpx;

    .uni-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .uni-section-content .example-body {
      display: flex;

      .favBtn {
        margin-right: 20rpx;
      }
    }
  }

  .body {
    .uni-section{
      height: 700rpx;
    }
    // background-color: pink;
    margin-bottom: 30rpx;

    .demo-uni-row {
      margin-bottom: 10rpx;

      // 组件在小程序端display为inline
      // QQ、抖音小程序文档写有 :host，但实测不生效
      // 百度小程序没有 :host
      /* #ifdef MP-TOUTIAO || MP-QQ || MP-BAIDU */
      display: block;
      /* #endif */
    }

    // 支付宝小程序没有 demo-uni-row 层级
    // 微信小程序使用了虚拟化节点，没有 demo-uni-row 层级
    /* #ifdef MP-ALIPAY || MP-WEIXIN */
    ::v-deep .uni-row {
      margin-bottom: 10rpx;
    }

    /* #endif */

    .demo-uni-col {
      height: 128rpx;
      border-radius: 5rpx;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .colitem {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 120rpx;
        height: 120rpx;

        // background-color: red;
        image {
          width: 90rpx;
          height: 90rpx;
          border-radius: 90%;
        }

        view {
          white-space: nowrap;
          // width: 200rpx;
          // overflow: hidden;
          /* 隐藏溢出的部分 */
          // text-overflow: ellipsis;
          /* 使用省略号替代溢出的部分 */
        }
      }
    }

    .dark_deep {
      background-color: #99a9bf;
    }

    .example-body {
      /* #ifndef APP-NVUE */
      display: block;
      /* #endif */
      padding: 5rpx 10rpx 0;
      overflow: hidden;
    }
  }

  .bt {
    height: 150rpx;
    padding-left: 20rpx;
    padding-right: 20rpx;
    // position: absolute;
    // bottom: 10rpx;
    .btbox{
      height: 100%;
      background-color: white;
      border-radius: 10rpx;
      padding-left: 20rpx;
      padding-right: 20rpx;
      display: flex;
      align-items: center;
      justify-content:space-between;
      .divide{
        color:rgba(128, 128, 128, 0.187);
        font-weight: 900;
      }
      .btinner{
        width: 150rpx;
        height: 100rpx;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        image{
          width: 40rpx;
          height: 40rpx;
        }
        view{
          font-weight: 800;
        }
      }
    }
  }
}
</style>