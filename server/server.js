var socket = require('socket.io');

var io = socket.listen(9000);

//群聊成员映射
var memberMap = {};
//群聊成员
var members = [];
//Client ID 名称映射
var idMap = {};
//随机背景色
var randomColors = ()=>{
  return [
    '#fad53e',
    '#039be6',
    '#81c683',
    '#aed582',
    '#f06292',
    '#f57e16',
    '#fad53e',
    '#b39ddb',
    '#64b5f6',
    '#80cbc4'
  ][Math.floor(Math.random()*10)];
};

io.on('connection', function(client){
  client.on('join', function(name){
    let info = {};
    //已存在
    if(memberMap.hasOwnProperty(name) && name != ''){
      client.emit('join', false);
    }
    //新建用户
    else{

      info = {
        name,
        'avatar' : {
          'style' : {
            'background-color' : randomColors()
          },
          rel:name[0].toUpperCase()
        }
      };

      idMap[client.id] = name;
      memberMap[name] = info;
      members.push(info);
      client.emit('join', info);
      io.emit('members', members);
      io.emit('inform', name+' 加入群聊');

    }
  });


  client.on('send', function(msg){

    var data = {
      name : idMap[client.id],
      avatar:memberMap[idMap[client.id]].avatar,
      msg : msg
    };

    io.emit('message', data);

  });


  client.on('disconnect', function(){

    var name;

    if(idMap.hasOwnProperty(client.id)){
      name = idMap[client.id];
      //删除 ID 昵称映射
      delete idMap[client.id];
      //删除 昵称信息映射
      delete memberMap[name];

      //删除 成员列表
      var length = members.length;
      var newMembers = [];

      for(let i = 0;i < length; i++){
        if(members[i].name != name){
          newMembers.push(members[i]);
        }
      }
      members = newMembers;

      io.emit('members', members);
      io.emit('inform', name+' 退出群聊');
    }

  });

});
