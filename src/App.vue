<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  uni.showTabBarRedDot({
    index: 3,
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
@import "./style/uniicons.css";
page {
   font-family: cursive  !important
}

/* image {
  vertical-align: middle;
} */
</style>
