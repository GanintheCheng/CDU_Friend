export type talkHistoryInfo = {
  //消息id 主键
  id: string;
  //发送者1 id
  user1: string;
  //发送者2 id
  user2: string;
  //消息文字部分
  body: string;
  //消息img
  img: string;
  //创建时间
  createtime: Date;
  //发送者id 外键
  createManId: string;
};
