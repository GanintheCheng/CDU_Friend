<template name="skeleton">
    <view class="sk-container">
        <view is="components/Search">
            <view class="data-v-87359d7f Search--data-v-87359d7f" style="height:20px;background-color:#51a3e8"></view>
            <view class="navbar Search--navbar data-v-87359d7f Search--data-v-87359d7f">
                <view class="logo Search--logo data-v-87359d7f Search--data-v-87359d7f">
                    <image class="logo-image Search--logo-image data-v-87359d7f Search--data-v-87359d7f sk-image">
                    </image>
                    <text
                        class="logo-text Search--logo-text data-v-87359d7f Search--data-v-87359d7f sk-transparent sk-text-3-5714-215 sk-text">交友
                        · 快捷 · 畅聊</text>
                </view>
                <view class="search Search--search data-v-87359d7f Search--data-v-87359d7f">
                    <text
                        class="icon-search Search--icon-search data-v-87359d7f Search--data-v-87359d7f sk-pseudo sk-pseudo-circle"></text>
                    <view class="in Search--in data-v-87359d7f Search--data-v-87359d7f sk-image" placeholder="探索更多"
                        type="text"></view>
                    <text
                        class="icon-scan Search--icon-scan data-v-87359d7f Search--data-v-87359d7f sk-pseudo sk-pseudo-circle"></text>
                </view>
            </view>
        </view>
        <scroll-view :scroll-y="true">
            <view is="pages/index/components/mySwiper">
                <view class="Swiper mySwiper--Swiper sk-image">
                    <view class="inner mySwiper--inner">
                        <view class="top mySwiper--top">
                            <view is="node-modules/@dcloudio/uni-ui/lib/uni-swiper-dot/uni-swiper-dot">
                                <view
                                    class="uni-swiper__warp dot--uni-swiper__warp data-v-51f4b6a5 dot--data-v-51f4b6a5">
                                    <swiper :autoplay="false" :circular="true" class="swiper-box mySwiper--swiper-box"
                                        :duration="500" :current="0"></swiper>
                                    <view
                                        class="uni-swiper__dots-box dot--uni-swiper__dots-box data-v-51f4b6a5 dot--data-v-51f4b6a5"
                                        style="bottom:10px">
                                        <view
                                            class="uni-swiper__dots-item dot--uni-swiper__dots-item data-v-51f4b6a5 dot--data-v-51f4b6a5"
                                            style="width:6px;height:6px;background-color:skyblue;border:1px rgba(0, 0, 0, .3) solid">
                                        </view>
                                        <view
                                            class="uni-swiper__dots-item dot--uni-swiper__dots-item data-v-51f4b6a5 dot--data-v-51f4b6a5"
                                            style="width:6px;height:6px;background-color:skyblue;border:1px rgba(0, 0, 0, .3) solid">
                                        </view>
                                        <view
                                            class="uni-swiper__dots-long dot--uni-swiper__dots-long uni-swiper__dots-item dot--uni-swiper__dots-item data-v-51f4b6a5 dot--data-v-51f4b6a5"
                                            style="width:18px;height:6px;background-color:#53a9ec;border:1px rgba(0, 0, 0, .9) solid">
                                        </view>
                                    </view>
                                </view>
                            </view>
                        </view>
                        <view class="bt mySwiper--bt">
                            <navigator hover-class="navigator-hover" open-type="navigate">
                                <view class="btitem mySwiper--btitem">
                                    <image class="img mySwiper--img sk-image"></image>
                                    <view
                                        class="btitemitem mySwiper--btitemitem sk-transparent sk-text-14-2857-921 sk-text">
                                        校园新闻 </view>
                                </view>
                            </navigator>
                            <navigator hover-class="navigator-hover" open-type="navigate">
                                <view class="btitem mySwiper--btitem">
                                    <image class="img mySwiper--img sk-image"></image>
                                    <view
                                        class="btitemitem mySwiper--btitemitem sk-transparent sk-text-14-2857-288 sk-text">
                                        热门帖子 </view>
                                </view>
                            </navigator>
                        </view>
                    </view>
                </view>
            </view>
            <view class="divide divide">
                <view class="sk-transparent sk-text-14-2857-828 sk-text"> 为您推荐 </view>
            </view>
            <view is="node-modules/@dcloudio/uni-ui/lib/uni-section/uni-section">
                <view class="uni-section section--uni-section">
                    <view class="uni-section-header section--uni-section-header">
                        <view
                            class="uni-section-header__decoration section--uni-section-header__decoration line section--line">
                        </view>
                        <view class="uni-section-header__content section--uni-section-header__content">
                            <text
                                class="uni-section__content-title section--uni-section__content-title distraction section--distraction sk-transparent sk-text-14-2857-605 sk-text"
                                style="font-size:14px;color:#333">坩埚埚 男 20岁</text>
                        </view>
                        <view class="uni-section-header__slot-right section--uni-section-header__slot-right"></view>
                    </view>
                    <view class="uni-section-content section--uni-section-content" style="padding:">
                        <view is="node-modules/@dcloudio/uni-ui/lib/uni-card/uni-card">
                            <view
                                class="uni-card card--uni-card uni-card--shadow card--uni-card--shadow uni-card--border card--uni-card--border"
                                style="margin:15px;padding:0 10px;box-shadow:0px 0px 3px 1px rgba(0, 0, 0, 0.08)">
                                <view is="node-modules/@dcloudio/uni-ui/lib/uni-list/uni-list">
                                    <view
                                        class="uni-list list--uni-list uni-border-top-bottom list--uni-border-top-bottom">
                                        <view class="uni-list--border-top list--uni-list--border-top"></view>
                                        <view is="node-modules/@dcloudio/uni-ui/lib/uni-list-item/uni-list-item">
                                            <view class="uni-list-item item--uni-list-item" hover-class="true"
                                                style="background-color:#FFFFFF">
                                                <view class="uni-list-item__container item--uni-list-item__container"
                                                    style="padding-top:;padding-left:;padding-right:;padding-bottom:">
                                                    <view class="uni-list-item__header item--uni-list-item__header">
                                                    </view>
                                                    <view class="uni-list-item__content item--uni-list-item__content">
                                                        <text
                                                            class="uni-list-item__content-title item--uni-list-item__content-title sk-transparent sk-text-14-2857-856 sk-text">标题位</text>
                                                    </view>
                                                </view>
                                            </view>
                                        </view>
                                        <view class="uni-list--border-bottom list--uni-list--border-bottom"></view>
                                    </view>
                                </view>
                                <view class="uni-card__content card--uni-card__content" style="padding:10px 0">
                                    <navigator hover-class="navigator-hover" open-type="navigate">
                                        <image style="width:100%" class="sk-image"></image>
                                    </navigator>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </scroll-view>
    </view>
</template>

<style scoped>
.sk-transparent {
    color: transparent !important;
}

.sk-text-3-5714-215 {
    background-image: linear-gradient(transparent 3.5714%, #EEEEEE 0%, #EEEEEE 96.4286%, transparent 0%) !important;
    background-size: 100% 28.0000rpx;
    position: relative !important;
}

.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
}

.sk-text-14-2857-921 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 44.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-288 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 44.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-828 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 44.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-605 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 39.2000rpx;
    position: relative !important;
}

.sk-text-14-2857-856 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 39.2000rpx;
    position: relative !important;
}

.sk-image {
    background: #EFEFEF !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
    background: #EFEFEF !important;
    background-image: none !important;
    color: transparent !important;
    border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
    border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
    border-radius: 50% !important;
}

.sk-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
}
</style>