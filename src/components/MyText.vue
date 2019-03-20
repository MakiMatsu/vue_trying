<template>
  <div>
    <p>！の数 : {{bCount}}個</p>
    <p>★の数 : {{sCount}}個</p>
    <button @click="nCount()">カウント</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
let nC1: number = 0;
let nC2: number = 0;
export default Vue.extend({
  props: { textData: String },
  data() {
    return {
      bCount: 0,
      sCount: 0
    };
  },
  methods: {
    nCount() {
      console.log(this.textData);
      this.bCount = this.textData.split("!").length - 1;
      console.log(this.bCount);
      this.sCount = this.textData.split("★").length - 1;
      console.log(this.sCount);
    }
  }
});
</script>

<style>
#mytext {
  border: 1rem;
  border-block-end-color: brown;
  border-block-start-color: brown;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>