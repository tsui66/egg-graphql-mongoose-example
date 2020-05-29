'use strict';

module.exports = app => {
  const Types = app.mongoose.Schema.Types;
  const RecordSchema = new app.mongoose.Schema({
    taskId: {
      type: Types.ObjectId,
      index: true,
      description: 'Action id or _id',
    },
    deviceId: {
      type: Types.ObjectId,
      index: true,
      description: 'Aliyun IoT device, refer to device`s _id',
    },
    pushStatus: {
      type: Number,
      description: '-1: 向设备下发命令失败; 1: 向设备下发命令成功',
    },
    runStatus: {
      type: Number,
      description: '-1: 向设备下发命令执行失败; 1: 向设备下发命令执行成功; 设备正在执行数量 = 总下发成功设备数 - 执行失败 - 执行成功',
    },
    response: {
      type: Types.Mixed,
      description: '返回的结果详情',
    },
  }, {
    timestamps: true,
  });

  return app.mongoose.model('Record', RecordSchema);
};
