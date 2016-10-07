<template>
  <div id="app" class="app">
    <welcome-component></welcome-component>
    <header-component></header-component>
    <member-component></member-component>
    <chat-component></chat-component>
    <input-component></input-component>
  </div>
</template>

<style>
  .app{
    position: relative;
    height: 100%;
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    box-shadow: 0 5px 40px rgba(0,0,0,.16);
  }
</style>

<script>
  import './assets/css/normalize.css';

  import welcome from './components/welcome';
  import member from './components/member';
  import header from './components/header';
  import chat from './components/chat';
  import input from './components/input';
  import store from './vuex/store';
  import { getSelf } from './vuex/getters';
  import { setSelf,setMembers, getInform,getMsg,setError } from './vuex/actions';

  export default {
    sockets: {
      message (data) {
        data.type = data.name == this.getSelf.name ? 'self' : 'other';
        this.getMsg(data);
      },
      join(data){
        if(!data){
          this.setError('昵称重复');
        }
        else{
          this.setSelf(data);
        }
      },
      members(data){
        this.setMembers(data);
      },
      inform(msg){
        this.getInform(msg);
      },
      connect (){
        console.log('Socket connected !')
      }
    },
    components: {
      'welcome-component' : welcome,
      'member-component' : member,
      'header-component': header,
      'chat-component' : chat,
      'input-component' : input
    },
    store,
    vuex: {
      getters:{
        getSelf
      },
      actions: {
        setSelf,
        setMembers,
        getInform,
        getMsg,
        setError
      }
    },
    ready() {

    }
  }
</script>
