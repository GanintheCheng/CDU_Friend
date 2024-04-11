<script setup lang="ts">
import { ref } from 'vue';
const info = [{
    content: '内容 A'
}, {
    content: '内容 B'
}, {
    content: '内容 C'
}]
const current = ref(0)
const mode = 'round'

const change = (e) => {
    current.value = e.detail.current;
}
</script>

<template>
    <view class="Swiper">
        <view class="inner">
            <view class="top">
                <uni-swiper-dot :info="info" :current="current" field="content" :mode="mode"
                    :dotsStyles="{ selectedBackgroundColor: '#53a9ec', backgroundColor: 'skyblue' }">
                    <swiper class="swiper-box" @change="change" circular autoplay :duration="500">
                        <swiper-item v-for="(item, index) in info" :key="index">
                            <view class="swiper-item">
                                <!-- {{ item.content }} -->
                                <image
                                    src="/static/images/logo.png"
                                    mode="aspectFit"
                                />
                            </view>
                        </swiper-item>
                    </swiper>
                </uni-swiper-dot>
            </view>
            <view class="bt">
                <navigator
                    url="/pages/"
                    open-type="navigate"
                    hover-class="navigator-hover"
                >
                    <view class="btitem">
                    <img src="@/static/images/sch-hot.png" class="img">
                    <view class="btitemitem">
                        校园新闻
                    </view>
                </view>
                </navigator>
                <navigator
                    url="/pages/"
                    open-type="navigate"
                    hover-class="navigator-hover"
                >
                    <view class="btitem">
                    <img src="@/static/images/tiezi-hot.png" class="img">
                    <view class="btitemitem">
                        热门帖子
                    </view>
                </view>
                </navigator>
                
            </view>
        </view>
    </view>
</template>
<style lang="scss">
.Swiper {
    height: 500rpx;
    // border: 1px solid #000;
    background: linear-gradient(to bottom, skyblue, #f7f7f7);
    padding: 20rpx;

    .inner {
        border: 1px solid rgb(230, 230, 230);
        border-radius: 15rpx;
        height: 100%;
        display: flex;
        flex-direction: column;

        .top {
            height: 60%;
        }

        .bt {
            height: 40%;
            background-color: #ffffff;
            padding-left: 50rpx;
            padding-right: 50rpx;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

            .btitem {
                
                height: 150rpx;
                width: 200rpx;
                // background-color: #f7f7f7;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;

                .img {
                    width: 100rpx;
                    height: 100rpx;
                }

                .btitemitem {
                    font-weight: 800;
                    border-bottom: 1rpx solid gray;
                    
                }
            }
        }
    }
}
</style>