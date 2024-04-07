export type user = {
  //主键,用户唯一标识符
  id: string;
  //昵名
  name: string;
  //电话号码
  phoneNum: string;
  //密码
  password: string;
  //创建时间
  createTime: Date;
  //状态
  status: number;
  //最后登录时间
  lastTime: string;
  //头像
  url: string;
  //签名
  signature:string
};
