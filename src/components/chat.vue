<template>
  <div class="chat">
    <div id="msg-board" class="board">

      <div class="msg" v-for="m in getMsgs">
        <div v-if="m.type == 'other'" class="other">
          <h5 v-text="m.avatar.rel" v-bind:style="m.avatar.style"></h5>
          <a>
            <h3 v-text="m.name"></h3>
            <p v-text="m.msg"></p>
          </a>
        </div>
        <div v-if="m.type == 'inform'" class="inform">
          <p v-text="m.msg"></p>
        </div>
        <div v-if="m.type == 'self'" class="self">
          <a>
            <h3 v-text="m.name"></h3>
            <p v-text="m.msg"></p>
          </a>
          <h5 v-text="m.avatar.rel" v-bind:style="m.avatar.style"></h5>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import { getMsgs } from '../vuex/getters';

export default {
  vuex: {
    getters :{
      getMsgs
    }
  }
}
</script>

<style lang="scss" scoped>
  .chat {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    padding: 110px 0 50px;
    background: #f0f0f0;
  .board {
    width: 100%;
    height: 100%;
    padding: 5px 5%;
    border-top: 1px solid rgba(164,164,164,.1);
    overflow: auto;
  .msg {
    width: 100%;
    margin: 10px 0 0;
    overflow: hidden;
  .other {
    width: 100%;
    white-space: nowrap;
  h5 {
    display: inline-block;
    height: 40px;
    width: 40px;
    line-height: 40px;
    color: #fff;
    text-align: center;
    background: #ccc;
    border-radius: 50%;
    margin-right: 1%;
    margin-top: 10px;
  }
  a {
    display: inline-block;
    width: 60%;
    vertical-align: top;
    padding: 4px 0 0;
    overflow: visible;
    margin-left: 4px;
  h3 {
    color: #ccc;
    font-size: 12px;
    line-height: 18px;
    padding-left: 4px;
  }
  p {
    position: relative;
    display: inline-block;
    max-width: 80%;
    border-radius: 5px;
    background: #fff;
    padding: 10px;
    font-size: 14px;
    line-height: 16px;
    white-space: normal;
    color: #666;
  &:before {
     content: '';
     position: absolute;
     left: -8px;
     top: 8px;
     border-bottom: 4px solid transparent;
     border-top: 4px solid transparent;
     border-right: 8px solid #fff;
   }
  }
  }
  }
  .inform {
    width: 100%;
    text-align: center;
    margin: 20px 0 0;
  p {
    display: inline-block;
    padding: 2px 10px;
    font-size: 12px;
    line-height: 14px;
    color: #fff;
    background: #ccc;
    border-radius: 3px;
    text-align: center;
  }
  }
  .self {
    width: 100%;
    white-space: nowrap;
    text-align: right;
  h5 {
    display: inline-block;
    height: 40px;
    width: 40px;
    line-height: 40px;
    color: #fff;
    text-align: center;
    background: #ccc;
    border-radius: 50%;
    margin-left: 1%;
    margin-top: 10px;
  }
  a {
    display: inline-block;
    width: 60%;
    vertical-align: top;
    padding: 4px 0 0;
    overflow: visible;
    margin-right: 4px;
  h3 {
    color: #ccc;
    font-size: 12px;
    line-height: 18px;
    padding-right: 4px;
  }
  p {
    position: relative;
    display: inline-block;
    text-align: left;
    max-width: 80%;
    border-radius: 5px;
    background: #4ad295;
    padding: 10px;
    font-size: 14px;
    line-height: 16px;
    white-space: normal;
    color: #fff;
  &:after {
     content: '';
     position: absolute;
     right: -8px;
     top: 8px;
     border-bottom: 4px solid transparent;
     border-top: 4px solid transparent;
     border-left: 8px solid #4ad295;
   }
  }
  }
  }
  }
  }
  }
</style>
