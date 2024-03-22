<script lang="ts" setup>
</script>

<template>
  <view class="foot">
      <view class="item">
        <view class="up">
          好友足迹
        </view>
        <view class="down">
          <scroll-view :scroll-x="true" class="downScroll">
            <view class="downitem-container">
              <view class="downitem"  v-for="item in 10">
                <image src="@/static/images/logo.png" mode="scaleToFill" />
                <view class="text">仓田真白</view>
              </view>
            </view>
          </scroll-view>
        </view>
      </view>
    </view>
</template>

<style lang="scss" scoped>
.foot {
    height: 300rpx;
    padding-left: 10rpx;
    padding-right: 10rpx;

    .item {
      background-color: #ffffff;
      height: 100%;
      border-radius: 10rpx;
      display: flex;
      flex-direction: column;

      .up {
        flex: 25%;
        // background-color: red;
        padding-left: 5rpx;
        padding-top: 10rpx;
        font-weight: 900;
        margin-bottom: 30rpx;
      }

      .down {
        flex: 75%;
        // background-color: pink;
        padding-left: 40rpx;
        padding-right: 40rpx;

        // display: flex;
        .downScroll {
          // display: flex;
          // flex-direction: row;
          height: 250rpx;
          width: 650rpx;
          white-space: nowrap;
          /* 水平方向不换行 */
          overflow-x: auto;

          /* 水平方向滚动 */
          .downitem-container {
            display: flex;
            /* 使用 Flex 布局 */
            flex-direction: row;
            /* 横向排列 */
          }

          .downitem {
            margin-right: 35rpx;
            image {
              width: 150rpx;
              height: 150rpx;
              border-radius: 90%;
            }

            justify-content:space-between;
            align-items: center;
            display: flex;
            flex-direction: column;
            width: 150rpx;
            height: 200rpx;
            // background-color: red;
          }
        }
      }
    }
  }
</style>