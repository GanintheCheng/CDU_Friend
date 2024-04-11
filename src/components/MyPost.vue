<script lang="ts" setup>
import Line from "@/components/Line.vue"
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";
const props = defineProps({
    info: {
        type: Object,
        default: {}
    },
    index: {
        type: Number,
        default: 0
    }
})
const info = props.info
</script>

<template>
    <view>
        <view class="item">
            <view class="left">
                <image :src="info.userImage" mode="widthFix" />
            </view>
            <view class="right">
                <view class="name">
                    <view class="nameleft">
                        <text class="username">{{ info.userName }}</text>
                        <text class="usertime">{{ info.userTime }}</text>
                    </view>
                    <view class="nameright">
                        <view class="love">
                            {{ props.index + 1 }}楼
                        </view>
                    </view>
                </view>
                <view class="info">
                    <view>
                        {{ info.sendContent }}
                    </view>
                    <!-- <image :src="info.sendImg" mode="widthFix" /> -->
                    <image :src="item" mode="widthFix" v-for="(item,index) in info.sendImg" :key = index />
                </view>

                <view class="input">
                    <view class="share">
                        <view style="display: flex;align-items: center;"><uni-icons type="heart"
                                size="30"></uni-icons>点赞
                        </view>
                        <view style="display: flex;align-items: center;"><uni-icons type="chatboxes"
                                size="30"></uni-icons>聊天
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <Line></Line>
    </view>
</template>

<style lang="scss">
.item {
    width: 100%;
    // background-color: #f7f7f7;
    // min-height: 500rpx;
    height: fit-content;
    padding-right: 20rpx;
    display: flex;

    .left {
        flex: 0.2;

        // background-color: pink;
        image {
            width: 100%;
            border-radius: 90%;
        }
    }

    .right {
        margin-left: 10rpx;
        flex: 0.8;
        display: flex;
        flex-direction: column;

        .name {
            height: 146rpx;
            // background-color: green;
            display: flex;
            justify-content: space-between;

            .nameleft {
                min-width: 150rpx;
                width: fit-content;
                // background-color: red;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;

                .username {
                    font-weight: 900;
                    font-size: 40rpx;
                }

                .usertime {
                    font-size: 25rpx;
                    color: #6666
                }
            }

            .nameright {
                display: flex;
                justify-content: center;
                align-items: center;
                flex: 0.4;
                margin-right: 40rpx;

                .love {
                    padding: 10rpx;
                    color: #ff6923;
                    font-weight: 900;
                    border: 1px solid #9999;
                    border-radius: 15rpx;
                }
            }
        }

        .info {
            height: fit-content;
            font-weight: 500;

            // background-color: pink;
            image {
                max-width: 400rpx;
            }

            margin-bottom: 20rpx;
        }

        .input {
            height: 100rpx;
            // background-color: skyblue;

            .share {
                height: 100rpx;
                // background-color: red;
                display: flex;
                justify-content: space-around;
                align-items: center;
                margin-right: 120rpx;
            }

            .speak {
                margin-top: 20rpx;
                width: 75%;
                height: 150rpx;
            }
        }
    }
}
</style>