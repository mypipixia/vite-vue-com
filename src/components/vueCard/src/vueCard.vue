<template>
  <div class="vue-card">
    <div class="vue-card__content">
      <img class="content-qr"
           :src="img" />
      <div class="content-left">
        <div class="content-title">
          <slot name="title" />
        </div>
        <div class="content-text">
          <slot></slot>
        </div>
      </div>
      <div v-for="i in 5"
           :key="i"
           :class="`cylinder cylinder${i}`"
           :style="`--i:${i}`"></div>
    </div>
  </div>
</template>

<script lang="ts">
interface IData {
  count: number;
  url: String;
}
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "vueCard",
  props: {
    img: {
      type: String,
      default: "",
    },
  },
  setup() {
    const data = reactive({ count: 0 }) as IData;
    const add = () => {
      data.count += 1;
    };
    return {
      add,
      ...toRefs(data),
    };
  },
});
</script>
<style lang='scss' scoped>
$anitme: 0.5s;
.vue-card {
  margin: 50px auto;
  width: 600px;
  height: 300px;
  border-radius: $primary-radius;
  border: $primary-border--width solid $primary-text--color;
  color: $primary-text--color;
  background-color: $primary-text--color;
  position: relative;
  overflow: hidden;
  .vue-card__content {
    height: 100%;
    width: 100%;
    border-radius: $primary-radius;
    background-color: $primary-color;
    .content-qr {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      left: 40px;
      opacity: 0;
      width: 200px;
      height: 200px;
      transition: 0.4s;
    }
    .content-left {
      width: 50%;
      height: 100%;
      padding: 10px 25px;
      transition: $anitme;
      box-sizing: border-box;
      @include udCenter;
      .content-title {
        font-size: $primary-h1--size;
        font-weight: bold;
        margin-bottom: 20px;
      }
      .content-text {
        letter-spacing: 2px;
      }
    }
    .cylinder {
      position: absolute;
      width: 45px;
      height: 310px;
      right: 0;
      border-radius: 50px;
      transform: rotate(45deg);
      transition: $anitme;
    }
    .cylinder1 {
      background-color: #e1bee7;
      top: -20px;
      transform: 0.5s 1s;
    }
    .cylinder2 {
      background-color: #bbdefb;
      top: -40px;
      right: 70px;
    }
    .cylinder3 {
      background-color: #b3e5fc;
      top: 5px;
      right: -75px;
    }
    .cylinder4 {
      background-color: #e1bee7;
      top: -80px;
      right: 135px;
      height: 330px;
    }
    .cylinder5 {
      background-color: #bbdefb;
      top: -160px;
      right: 140px;
    }
  }
  &:hover .vue-card__content .cylinder {
    transition: 0.5s calc(var(--i) * 0.1s);
    transform: rotateZ(45deg) translate(200px, -400px);
  }
  &:hover .vue-card__content .content-left {
    transition: 0.5s 0.5s;
    transform: translateX(280px);
  }
  &:hover .vue-card__content .content-qr {
    opacity: 1;
    transition: 1s 1s;
  }
}
</style>