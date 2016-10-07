// 获取会话列表
export const getMsgs = (state) => {
  return state.msgs;
};

// 获取聊天室成员列表
export const getMembers = (state) => {
  return state.members;
};

// 获取个人信息
export  const getSelf = (state) => state.self;

// 错误显示
export  const getError = (state) => state.error;


