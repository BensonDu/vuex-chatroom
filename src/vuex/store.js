import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


// 需要维护的状态
const state = {
 //个人信息
 self : {
   'name' : '',
   'avatar' :{
     'style' : {
       'background-color' : ''
     },
     'rel' : ''
   }
 },
 //群聊成员
 members : [],
 //消息
 msgs : [],
 //错误
 error : ''

};

const mutations = {
  // 设置个人信息
  SET_SELF(state, data) {
    state.self = data;
  },
  // 设置群聊成员
  SET_MEMBERS(state,data){
    state.members = data;
  },
  // 接受通知
  GET_INFORM(state,msg){
    state.msgs.push({
      'type' : 'inform',
      'msg'  : msg
    })
  },
  // 接收消息
  GET_MSG(state,data){
    state.msgs.push(data);
  },
  // 显示错误消息
  SET_ERROR(state,msg){
    state.error = msg;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
