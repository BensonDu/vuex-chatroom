<template>
  <div class="input">
    <input type="text" maxlength="50" v-model="msg" v-on:keyup.enter="send">
    <div class="send">
      <button v-on:click="send">发送</button>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        'msg' : ''
      }
    },
    methods : {
      send : function () {
        if(this.msg != ''){
          this.$socket.emit('send',this.msg);
          this.msg = '';
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .input {
    position: absolute;
    width: 100%;
    height: 50px;
    bottom: 0;
    left: 0;
    padding: 5px 2% 5px 5%;
    background: #f5f5f5;
    border-top: 1px solid rgba(184,184,184,.4);
    text-align: justify;
    white-space: nowrap;
  input {
    display: inline-block;
    border-radius: 2px;
    border: 1px solid rgba(184,184,184,.4);
    width: 80%;
    font-size: 12px;
    color: #666;
    height: 36px;
    padding: 6px 8px;
  &:focus {
     outline: none;
   }
  }
  .send {
    display: inline-block;
    width: 19%;
    vertical-align: top;
    text-align: center;
  }
  button {
    display: inline-block;
    height: 30px;
    border-radius: 2px;
    background: #41b883;
    color: #fff;
    line-height: 26px;
    text-align: center;
    font-size: 14px;
    border: none;
    margin: 3px 0 0;
    padding: 0 10px;
    vertical-align: top;
  }
  }

</style>
