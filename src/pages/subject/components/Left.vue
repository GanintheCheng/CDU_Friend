<script lang="ts" setup>
import { onShow } from '@dcloudio/uni-app';
import { ref } from 'vue';

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
const turn = [0, 1, 2, 3, 4]
const colorList = ['#99a2fe', '#ffe5e7', '#ebf1fe', '#51a3e8', '#32db72']
const turnNum = ref([0, 1, 2, 0, 1, 2, 2])
const gutter = 0
const nvueWidth = 730
const favClick = (index: number) => {
    if (index == 1) changeTurnNum()
    checkList.value[index] = !checkList.value[index]
    // console.log(checkList.value[index]);
    // forceUpdate()
}
const changeTurnNum = () => {
    const newTurnNum = [
        parseInt(Math.random() * 5 + ''),
        parseInt(Math.random() * 5 + ''),
        parseInt(Math.random() * 5 + ''),
        parseInt(Math.random() * 5 + ''),
        parseInt(Math.random() * 5 + ''),
        parseInt(Math.random() * 5 + ''),
        parseInt(Math.random() * 5 + '')
    ]
    turnNum.value = newTurnNum
}


onShow(() => {
    changeTurnNum()
}) 
</script>

<template>
    <view class="title">
        <uni-section title="菜单选取" type="line">
            <view class="example-body">
                <uni-fav :checked="checkList[0]" class="favBtn" @tap="favClick(0)" :content-text="contentText[0]" />
                <uni-fav :checked="false" :star="true" class="favBtn" @tap="favClick(1)"
                    :content-text="contentText[1]" />
            </view>
        </uni-section>
    </view>
    <view class="body">
        <uni-section title="实时聊天" subTitle="一生的陪伴,从这里开始" type="circle">
            <view class="example-body">
                <uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
                    <uni-col :span="8" :offset="turn[turnNum[0]]">
                        <view class="demo-uni-col dark" :style="{ backgroundColor: colorList[turnNum[0]] }">
                            <view class="colitem">
                                <image src="@/static/images/logo.png" mode="scaleToFill" />
                                <view>仓田真白</view>
                            </view>
                        </view>
                    </uni-col>
                    <uni-col :span="8" :offset="turn[turnNum[1]]">
                        <view class="demo-uni-col light" :style="{ backgroundColor: colorList[turnNum[1]] }">
                            <view class="colitem">
                                <image src="@/static/images/logo.png" mode="scaleToFill" />
                                <view>仓田真白</view>
                            </view>
                        </view>
                    </uni-col>
                </uni-row>

                <uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
                    <uni-col :span="8" :offset="turn[turnNum[2]]">
                        <view class="demo-uni-col dark" :style="{ backgroundColor: colorList[turnNum[2]] }">
                            <view class="colitem">
                                <image src="@/static/images/logo.png" mode="scaleToFill" />
                                <view>仓田真白</view>
                            </view>
                        </view>
                    </uni-col>
                    <uni-col :span="8" :offset="turn[turnNum[3]]">
                        <view class="demo-uni-col light" :style="{ backgroundColor: colorList[turnNum[3]] }">
                            <view class="colitem">
                                <image src="@/static/images/logo.png" mode="scaleToFill" />
                                <view>仓田真白</view>
                            </view>
                        </view>
                    </uni-col>
                </uni-row>

                <uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
                    <uni-col :span="8" :offset="turn[turnNum[4]]">
                        <view class="demo-uni-col dark" :style="{ backgroundColor: colorList[turnNum[4]] }">
                            <view class="colitem">
                                <image src="@/static/images/logo.png" mode="scaleToFill" />
                                <view>仓田真白</view>
                            </view>
                        </view>
                    </uni-col>
                    <uni-col :span="8" :offset="turn[turnNum[5]]">
                        <view class="demo-uni-col light" :style="{ backgroundColor: colorList[turnNum[5]] }">
                            <view class="colitem">
                                <image src="@/static/images/logo.png" mode="scaleToFill" />
                                <view>仓田真白</view>
                            </view>
                        </view>
                    </uni-col>
                </uni-row>

                <uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
                    <uni-col :span="10" :offset="turn[turnNum[6]] + 5">
                        <view class="demo-uni-col dark" :style="{ backgroundColor: colorList[turnNum[6]] }">
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
                <image src="@/static/images/love.png" mode="scaleToFill" />
                <view>在线闪聊</view>
            </view>
            <view class="divide">|</view>
            <view class="btinner">
                <image src="@/static/images/phone.png" mode="scaleToFill" />
                <view>语音闪聊</view>
            </view>
            <view class="divide">|</view>
            <view class="btinner">
                <image src="@/static/images/shandian.png" mode="scaleToFill" />
                <view>心动信号</view>
            </view>
            <view class="divide">|</view>
            <view class="btinner">
                <image src="@/static/images/room.png" mode="scaleToFill" />
                <view>聊天室</view>
            </view>
        </view>
    </view>
</template>

<style lang="scss">

</style>