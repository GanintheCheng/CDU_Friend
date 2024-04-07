import { user } from "@/type/user/user";
import { defineStore } from "pinia";
import { ref } from "vue";

// 定义 Store
export const useMemberStore = defineStore(
  "member",
  () => {
    // 会员信息
    // const profile = ref<user>();
    const profile = ref<user>({
      id: "0",
      name: "坩埚埚",
      phoneNum: "18081204700",
      password: "gzcgzc123",
      createTime: new Date(),
      status: 0,
      lastTime: "",
      url: "/static/images/logo.png",
      signature: "这个人比较懒,暂时还没有签名",
    });
    // 保存会员信息，登录时使用
    const setProfile = (val: user) => {
      profile.value = val;
    };

    // 清理会员信息，退出时使用
    const clearProfile = () => {
      profile.value = undefined;
    };

    // 记得 return
    return {
      profile,
      setProfile,
      clearProfile,
    };
  },
  // TODO: 持久化
  {
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key);
        },
        setItem(key, value) {
          uni.setStorageSync(key, value);
        },
      },
    },
  }
);
