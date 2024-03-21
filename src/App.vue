<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  uni.showTabBarRedDot({
    index:3,
  })

});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style>
page{
  font-family: 'Alimama DaoLiTi' !important
}

scroll-view {
  flex: 1;
  height: 100%;
  overflow: hidden;
}

/* image {
  vertical-align: middle;
} */

</style>
