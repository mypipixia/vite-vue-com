<template>
  <div class="test-card">
    <vueCard img="/src/access/images/qr/qr01.png">
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
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style lang="scss" scoped>
.test-card {
  @include full;
  background-color: $primary-bgColor;
}
</style>
