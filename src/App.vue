<template>
  <div>
    <p v-if="msg.length > 0">{{msg}}</p>
    <p v-else>入力してなー</p>
    <input type="text" v-model="msg">
    <button @click="clear()">clear</button>
    <button @click="addBikkuri()">!</button>
    <button @click="addStar()">星</button>
    <MyText msg/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MyText from "./components/MyText.vue";
// import HelloWorld from "./components/HelloWorld.vue";

// @Component({
//   components: {
//     // HelloWorld
//   }
// })
export default Vue.extend({
  // components: {
  //   Mytext
  // },
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    clear() {
      this.msg = "";
    },
    addBikkuri() {
      this.msg = this.msg + "!";
    },
    addStar() {
      this.msg = this.msg + "★";
    }
  }
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
input {
  width: 15rem;
}
button {
  margin: 0.2rem;
}
</style>
