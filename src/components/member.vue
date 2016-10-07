<template>
  <div id="member" class="member">
    <div class="users">
        <div v-for="m in getMembers" v-bind:style="m.avatar.style" class="item"><p v-text="m.avatar.rel"></p></div>
    </div>
  </div>
</template>

<script>

import { getMembers } from '../vuex/getters';

export default {
  vuex: {
    getters : {
      getMembers
    }
  }
}
</script>

<style lang="scss" scoped>
  .member {
    position: relative;
    width: 100%;
    height: 60px;
    z-index: 1;
    background: #fff;
  .users {
    width: 100%;
    height: 100%;
    padding: 10px 3%;
    white-space: nowrap;
    overflow: auto;
  .item {
    display: inline-block;
    height: 40px;
    width: 40px;
    background: #ccc;
    border-radius: 50%;
    margin-right: 1%;
  p {
    display: inline-block;
    width: 100%;
    font-size: 12px;
    color: #fff;
    text-align: center;
    line-height: 40px;
  }
  }
  }
  }
</style>
