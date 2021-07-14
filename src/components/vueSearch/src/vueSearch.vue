<template>
  <div class="vue-search">
    <input class="search-input" />
    <div class="svg-box">
      <svg t="1626245159991"
           class="search-svg"
           viewBox="0 0 1024 1024"
           width="15"
           height="15">
        <path :d="search"
              p-id="2607"
              fill="#388E3C"></path>
      </svg>
    </div>
  </div>
</template>

<script lang='ts'>
import search from "./svg";
import { defineComponent } from "vue";
export default defineComponent({
  name: "VueSearch",
  components: {},
  setup(props) {
    return {
      search,
    };
  },
});
</script>
<style lang='scss' scoped>
.vue-search {
  width: fit-content;
  background-color: $primary-color;
  border-radius: 34px;
  overflow: hidden;
  display: flex;
  height: 34px;
  padding: 0 5px;
  align-items: center;
  .search-input {
    flex: 1;
    border: none;
    outline: none;
    height: 28px;
    background-color: transparent;
    border-radius: 6px;
    color: $primary-text--color;
    min-width: 0;
    margin-right: -4px;
    transition: 0.5s;
    width: 0;
    opacity: 0;
  }
  .svg-box {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    cursor: pointer;
    transition: 0.5s;
    background-color: transparent;
  }
  &:hover .search-input {
    width: 150px;
    margin-right: 5px;
    opacity: 1;
  }
  &:hover .svg-box {
    background-color: #fff;
  }
}
</style>