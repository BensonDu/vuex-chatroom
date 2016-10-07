<template>
  <div id="header" class="header">
    <h3>Vuex 聊天室 （ <p v-text="getMembers.length"> 0 </p> 人 ）</h3>
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
  .header {
    position: relative;
    width: 100%;
    height: 50px;
    background: #41b883;
    border-bottom: 1px solid rgba(164,164,164,.1);
    z-index: 1;
  h3 {
    width: 100%;
  }
  }
  .header h3,
  .header h3 p {
    display: inline-block;
    font-size: 16px;
    line-height: 50px;
    color: #fff;
    text-align: center;
  }

</style>
