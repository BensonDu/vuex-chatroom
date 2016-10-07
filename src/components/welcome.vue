<template>
  <div v-if="getSelf.name == ''" v-bind:data="getSelf.name" class="welcome">
    <div class="logo">
      <img src="../assets/img/logo.png">
    </div>
    <h1>Vuex 聊天室</h1>
    <div class="nickname">
      <input type="text" maxlength="50" placeholder="设置昵称" v-model="nickname" v-on:keyup.enter ="join" >
    </div>
    <div class="error" v-bind:class="getError && 'active'">
      <p v-text="getError"></p>
    </div>
    <div class="join">
      <button v-on:click = join>加入聊天室</button>
    </div>
  </div>
</template>

<script>
  import { getSelf,getError } from '../vuex/getters';
  import { joinRoom,setError } from '../vuex/actions';
  export default {
    data(){
      return {
        nickname:''
      }
    },
    methods:{
      'join' : function () {
        if(!this.nickname){
          this.setError('昵称为空');
        }
        else{
          this.$socket.emit('join',this.nickname);
        }
      }
    },
    vuex: {
      getters : {
        getSelf,
        getError
      },
      actions : {
        setError
      }
    }
  }
</script>

<style lang="scss" scoped>
  .welcome {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-around;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 5px 2% 40% 5%;
    background: #f5f5f5;
    border-top: 1px solid rgba(184,184,184,.4);
    text-align: justify;
    white-space: nowrap;
    z-index: 5;
  .logo {
    height: 200px;
    text-align: center;
    padding: 50px 0 0;
  img {
    height: 100%;
  }
  }
  h1 {
    display: inline-block;
    width: 100%;
    text-align: center;
    font-size: 22px;
    color: #666;
  }
  .nickname {
    width: 100%;
    text-align: center;
    white-space: nowrap;
  input {
    display: inline-block;
    border-radius: 2px;
    border: 1px solid rgba(184,184,184,.4);
    width: 60%;
    font-size: 12px;
    color: #666;
    height: 36px;
    padding: 6px 8px;
  &:focus {
     outline: none;
   }
  }
  }
  .error {
    width: 100%;
    visibility: hidden;
    text-align: center;
  &.active {
     visibility: visible;
   }
  p {
    display: inline-block;
    font-size: 12px;
    color: #f50;
  }
  }
  .join {
    display: inline-block;
    width: 100%;
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
