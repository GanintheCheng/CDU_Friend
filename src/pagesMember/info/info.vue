<script lang="ts" setup>
import { useMemberStore } from '@/stores'
import { watch } from 'vue';
import { ref } from 'vue';
//账号信息
const profile = ref(useMemberStore().profile)
//输入昵称
const inputName = ref()
const name = ref(profile.value.name)
const saveName = () => {
  profile.value.name = name.value
}
//输入签名
const inputsign = ref()
const sign = ref(profile.value.signature)
const saveSign = () => {
  profile.value.signature = sign.value
}
//选择兴趣
const interest = ref()
const inputInterest = () => {
  interest.value.open()
}
const checkbox1 = ref([0])
const hobby = ref([{
  text: '玩原',
  value: 0
}, {
  text: '玩穹',
  value: 1
}, {
  text: '玩农',
  value: 2
}, {
  text: '打搅',
  value: 3
}
])
//日期
const single = ref('')
const maskClick = (e) => {
  console.log('maskClick事件:', e);
}
const age = ref()
const calculateAge = (birthdate) => {
  const today = new Date();
  const birthdateArr = birthdate.split('-').map(Number);
  const birthYear = birthdateArr[0];
  const birthMonth = birthdateArr[1] - 1; // 月份从 0 开始
  const birthDay = birthdateArr[2];

  const ageDate = new Date(today.getTime());
  ageDate.setFullYear(birthYear);
  ageDate.setMonth(birthMonth);
  ageDate.setDate(birthDay);

  let age = today.getFullYear() - ageDate.getFullYear();
  const m = today.getMonth() - ageDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < ageDate.getDate())) {
    age--;
  }
  return age;
};

watch(single, (newValue) => {
  const newAge = calculateAge(newValue);
  age.value = newAge
});
</script>

<template>
  <view class="body">
    <view class="top">
      <view class="img">
        <image src="/static/images/logo.png" mode="scaleToFill" />
        <uni-icons type="paperclip" size="20" class="changeimg"></uni-icons>
      </view>
    </view>
    <view class="body">
      <uni-section title="基础信息" type="line">
        <uni-list>
          <uni-list-item showArrow title="昵称" :right-text="profile.name" clickable @tap="inputName.open()" />
          <uni-list-item showArrow title="个性签名" :rightText="profile.signature" clickable @tap="inputsign.open()" />
          <uni-list-item showArrow title="兴趣标签" note="智能匹配" rightText="点击可看" clickable @tap="inputInterest" />
        </uni-list>
      </uni-section>
      <view style="height: 50rpx;"></view>
      <uni-section title="隐私信息" type="line">
        <uni-list border-full>
          <!-- <uni-list-item title="列表文字" /> -->
          <uni-datetime-picker type="date" :clear-icon="false" v-model="single" @maskClick="maskClick"
            placeholder="点击修改出生日期" end="2006-1-1"/>
          <uni-list-item title="年龄" note="仅您可见" :rightText="age + '岁'" />
          <uni-list-item title="性别" note="不可修改" right-text="虾头男" />
        </uni-list>
      </uni-section>
    </view>
  </view>

  <!-- 昵称 -->
  <uni-popup ref="inputName" type="dialog">
    <uni-popup-dialog ref="CloseName" mode="input" title="修改昵称" v-model="name" placeholder="请输入内容"
      @confirm="saveName"></uni-popup-dialog>
  </uni-popup>
  <!-- 签名 -->
  <uni-popup ref="inputsign" type="dialog">
    <uni-popup-dialog ref="Closesign" mode="input" title="修改签名" v-model="sign" placeholder="请输入内容"
      @confirm="saveSign"></uni-popup-dialog>
  </uni-popup>
  <!-- 兴趣 -->
  <uni-popup ref="interest" type="center" border-radius="10px 10px 0 0">
    <view class="interest">
      <uni-section title="标签选择" subTitle="注意,兴趣选择将会影响好友匹配" type="line">
        <!-- <view class="text">多选选中：{{ JSON.stringify(checkbox1) }}</view> -->
        <uni-data-checkbox multiple v-model="checkbox1" :localdata="hobby"></uni-data-checkbox>
      </uni-section>
    </view>
  </uni-popup>
</template>

<style lang="scss">
.top {
  width: 100%;
  height: 230rpx;
  background-color: #99999928;
  display: flex;
  justify-content: center;
  align-items: center;

  .img {
    position: relative;

    .changeimg {
      position: absolute;
      right: 15rpx;
      bottom: 10rpx;
      background-color: white;
      border-radius: 90%;
    }
  }

  image {
    width: 200rpx;
    height: 200rpx;
    border-radius: 90%;
  }
}

.interest {
  border-radius: 15rpx;
  // width: 500rpx;
  // height: 500rpx;
  // background-color: red;
}
</style>