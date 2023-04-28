<!--
 * @Author: chenanan
 * @Date: 2023-04-28 00:21:17
 * @LastEditors: chenanan
 * @LastEditTime: 2023-04-29 00:08:48
 * @Description:  
-->
<template>
  <div class="play-container">
     <el-empty description="description" />
  </div>
</template>

<script setup lang="ts">
// code here
</script>

<style lang="scss">
html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  #play {
    height: 100%;
    width: 100%;
    .play-container {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
