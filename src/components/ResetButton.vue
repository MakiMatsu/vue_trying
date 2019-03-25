<template>
  <button @click="onClick">Reset</button>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
// import VueRouter from "vue-router";

/* Hookしてルーティングを検知 */
// Component.registerHooks(["beforeRouteEnter"]);

@Component
export default class ResetButton extends Vue {
  public data: string = "";
  // beforeRouteEnter(to: VueRouter, from: VueRouter, next: any) {
  //   var data = fetch();
  //   // next に引き渡す callback 経由でデータを引き渡す
  //   next(component => {
  //     component.data = data;
  //   });
  // }
  // @Prop()
  private initialValue!: string;
  /** モデルバインドのために記述必須 */
  @Prop()
  public value!: string;
  /** モデルバインドのために記述必須 */
  @Emit()
  public input(value: string) {}
  /** ライフサイクルフック */
  public created() {
    this.initialValue = this.value;
  }
  public onClick() {
    this.input(this.initialValue);
  }
}
</script>
