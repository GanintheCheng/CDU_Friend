<script lang="ts" setup>
import Search from '@/pages/subject/components/Search.vue';
import Foot from '@/pages/subject/components/Foot.vue'
import Left from '@/pages/subject/components/Left.vue'
import { provide } from 'vue';
import { ref } from 'vue';
import subjectGujia from './components/subjectGujia.vue';
import { onLoad } from '@dcloudio/uni-app';
const titleChoice = ref(0)
const changeChoice = (e: number) => {
  titleChoice.value = e
}
provide('changeChoice', changeChoice)

//left

const wait = ref(false)
onLoad(()=>{
  wait.value=true
})
</script>

<template>
  <subjectGujia v-if="!wait"></subjectGujia>
  <view v-else>
    <Search style="flex: 0.2;"></Search>
    <view style="flex:0.8">
      <view class="right" v-show="titleChoice === 1">
        <Foot />
        <view class="at">
          <view class="item">
            <view class="up">
              <view>关注聊天室</view>
              <text class="see">下滑更多<text class="icon-down"></text></text>
            </view>
            <view class="downbox">
              <scroll-view scroll-y class="down">
                <view class="innerbox">
                  <view class="downitem">
                    <view class="itemleft">
                      <image src="@/static/images/logo.png" mode="scaleToFill" />
                    </view>
                    <view class="itemright">
                      <view class="topview">
                        仓田真白
                      </view>
                      <view class="downview">
                        666人
                      </view>
                    </view>
                  </view>
                  <view class="downitem">
                    <view class="itemleft">
                      <image src="@/static/images/logo.png" mode="scaleToFill" />
                    </view>
                    <view class="itemright">
                      <view class="topview">
                        仓田真白
                      </view>
                      <view class="downview">
                        666人
                      </view>
                    </view>
                  </view>
                  <view class="downitem">
                    <view class="itemleft">
                      <image src="@/static/images/logo.png" mode="scaleToFill" />
                    </view>
                    <view class="itemright">
                      <view class="topview">
                        仓田真白
                      </view>
                      <view class="downview">
                        666人
                      </view>
                    </view>
                  </view>
                  <view class="downitem">
                    <view class="itemleft">
                      <image src="@/static/images/logo.png" mode="scaleToFill" />
                    </view>
                    <view class="itemright">
                      <view class="topview">
                        仓田真白
                      </view>
                      <view class="downview">
                        666人
                      </view>
                    </view>
                  </view>
                  <view class="downitem">
                    <view class="itemleft">
                      <image src="@/static/images/logo.png" mode="scaleToFill" />
                    </view>
                    <view class="itemright">
                      <view class="topview">
                        仓田真白
                      </view>
                      <view class="downview">
                        666人
                      </view>
                    </view>
                  </view>
                  <view class="downitem">
                    <view class="itemleft">
                      <image src="@/static/images/logo.png" mode="scaleToFill" />
                    </view>
                    <view class="itemright">
                      <view class="topview">
                        仓田真白
                      </view>
                      <view class="downview">
                        666人
                      </view>
                    </view>
                  </view>
                  <view class="downitem">
                    <view class="itemleft">
                      <image src="@/static/images/logo.png" mode="scaleToFill" />
                    </view>
                    <view class="itemright">
                      <view class="topview">
                        仓田真白
                      </view>
                      <view class="downview">
                        666人
                      </view>
                    </view>
                  </view>
                  <view class="downitem">
                    <view class="itemleft">
                      <image src="@/static/images/logo.png" mode="scaleToFill" />
                    </view>
                    <view class="itemright">
                      <view class="topview">
                        仓田真白
                      </view>
                      <view class="downview">
                        666人
                      </view>
                    </view>
                  </view>
                </view>
              </scroll-view>
            </view>
          </view>
        </view>
      </view>
      <view class="left" v-show="titleChoice === 0">
        <Left />
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
    height: 630rpx;

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
        padding-left: 20rpx;
        padding-right: 20rpx;
        padding-bottom: 20rpx;

        .down {
          width: 100%;
          height: 530rpx;

          .innerbox {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            .downitem {
              width: 320rpx;
              height: 180rpx;
              margin-bottom: 20rpx;
              display: flex;

              .itemleft {
                width: 150rpx;
                height: 180rpx;
                display: flex;
                align-items: center;
                justify-content: center;

                image {
                  width: 150rpx;
                  height: 150rpx;
                  border-radius: 90%;
                }
              }

              .itemright {
                width: 170rpx;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                .topview {
                  width: 170rpx;
                  font-weight: 900;
                  font-size: large;
                  margin-bottom: 20rpx;
                  white-space: nowrap;
                  /* 设置不换行 */
                  overflow: hidden;
                  /* 隐藏溢出内容 */
                  text-overflow: ellipsis;
                  /* 使用省略号代替溢出内容 */
                }

                .downview {
                  font-size: small;
                  color: #99a9bf;
                }
              }
            }
          }
        }
      }
    }
  }
}

.left {
  height: 100%;

  left {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .title {
    margin-bottom: 20rpx;
    flex: 0.1;

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
    flex: 0.8;

    .uni-section {
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
      border-radius: 5%;

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
    flex: 0.2;
    height: 150rpx;
    padding-left: 20rpx;
    padding-right: 20rpx;

    // position: absolute;
    // bottom: 10rpx;
    .btbox {
      height: 100%;
      background-color: white;
      border-radius: 10rpx;
      padding-left: 20rpx;
      padding-right: 20rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .divide {
        color: rgba(128, 128, 128, 0.187);
        font-weight: 900;
      }

      .btinner {
        width: 150rpx;
        height: 100rpx;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        image {
          width: 40rpx;
          height: 40rpx;
        }

        view {
          font-weight: 800;
        }
      }
    }
  }
}
</style>