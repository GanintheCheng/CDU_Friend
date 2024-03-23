<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  uni.showTabBarRedDot({
    index: 3,
  })

  // wx.loadFontFace({
  //   family: 'Alimama DaoLiTi',
  //   source: 'url("AlimamaDaoLiTi.woff2")',  //此处需替换为真实字体地址
  //   success(res) {
  //     console.log(res.status)

  //   },
  //   fail: function (res) {
  //     console.log(res.status)
  //   },
  //   complete: function (res) {
  //     console.log(res.status)
  //   }
  // });
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style>

page {
   font-family: cursive  !important
}

/* image {
  vertical-align: middle;
} */
</style>
