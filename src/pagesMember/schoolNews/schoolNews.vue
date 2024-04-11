<script lang="ts" setup>
import Line from '@/components/Line.vue';
const info = [
  {
    title: '我校新媒体系列报道入选四川省十佳教育新媒体案例',
    url: 'https://news.cdu.edu.cn/index.php?m=news&a=show&news_id=32331'
  },
  {
    title: '集结完毕！2023级学生军训开训！',
    url: 'https://news.cdu.edu.cn/index.php?m=news&a=show&news_id=32329'
  },
  {
    title: '学校官方视频号 抖音号双双进入全国高校影响力排行榜前30位',
    url: 'https://news.cdu.edu.cn/index.php?m=news&a=show&news_id=32330'
  },
  {
    title: '【最美教师】许杰：“杰哥”的心愿',
    url: 'https://news.cdu.edu.cn/index.php?m=news&a=show&news_id=32309'
  },
  {
    title: '“铸牢中华民族共同体意识艺术教育实践基地”在校内挂牌成立',
    url: 'https://news.cdu.edu.cn/index.php?m=news&a=show&news_id=32321'
  },
  {
    title: '学校召开新一轮本科教育教学审核评估专项工作组汇报会',
    url: 'https://news.cdu.edu.cn/index.php?m=news&a=show&news_id=32316'
  },
  {
    title: '成都2024年社会组织“双创”促就业系列活动在我校正式启动',
    url: 'https://news.cdu.edu.cn/index.php?m=news&a=show&news_id=32322'
  },
  {
    title: 'AI如何助力艺术设计？ 美术与设计学院教授来揭秘！',
    url: 'https://news.cdu.edu.cn/index.php?m=news&a=show&news_id=32311'
  },
  {
    title: '我校2位学者入选爱思唯尔 “2023中国高被引学者”榜单',
    url: 'https://news.cdu.edu.cn/index.php?m=news&a=show&news_id=32310'
  },
  {
    title: '我校棍网球选手闪耀中国香港公开赛 摘得亚洲赛铜牌',
    url: 'https://news.cdu.edu.cn/index.php?m=news&a=show&news_id=32307'
  }
]
</script>

<template>
  <view class="body">
    <image src="/static/images/schoolnews.png" mode="aspectFill" class="topimg" />
    <view class="btinfo">
      <view class="title">
        实时校园热点
      </view>
      <Line></Line>
      <uni-list>
        <view v-for="(item,index) in info" :key = index>
          <uni-list-item :ellipsis="1" :title="item.title" :rightText="'热点'+(index+1)" />
          <uni-link :href="item.url" :text="item.url" :showUnderLine="false"
				color="gray" style="margin-left: 20rpx;font-weight: 900;">点击跳转</uni-link>
        </view>
      </uni-list>
    </view>
  </view>
</template>

<style lang="scss">
.topimg {
  width: 750rpx;
  height: 400rpx;
}

.btinfo {
  width: 710rpx;
  margin-left: 20rpx;

  .title {
    background-color: #99999929;
    font-weight: 800;
    padding: 10rpx;
  }
}
</style>