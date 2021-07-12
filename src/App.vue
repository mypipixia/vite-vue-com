<template>
  <div class="vue-app">
    <vueCard :img="img">
      <template v-slot:title>
        JavaScript 教程
      </template>
      <template v-slot:default>
        JavaScript 是 Web 的编程语言。
        所有现代的 HTML 页面都使用 JavaScript。
        JavaScript 非常容易学。
        本教程将教你学习从初级到高级 JavaScript 知识。
      </template>
    </vueCard>
  </div>
</template>

<script lang="ts">
import qr01 from "@/access/images/qr/qr01.png";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const img = ref(qr01);
    console.log(img.value);

    return {
      img,
    };
  },
});
</script>

<style lang="scss">
.vue-app {
  @include full;
  background-color: $primary-bgColor;
}
</style>
