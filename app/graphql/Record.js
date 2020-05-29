'use strict';
module.exports = (app, { composeWithMongoose, GraphqlCompose }) => {
  const { schemaComposer } = GraphqlCompose;
  const customizationOptions = { description: '操作日志' };
  const RecordTC = composeWithMongoose(app.model.Record, customizationOptions);

  schemaComposer.Query.addFields({
    RecordById: RecordTC.getResolver('findById'),
    RecordByIds: RecordTC.getResolver('findByIds'),
    RecordOne: RecordTC.getResolver('findOne'),
    RecordMany: RecordTC.getResolver('findMany'),
    RecordCount: RecordTC.getResolver('count'),
    RecordConnection: RecordTC.getResolver('connection'),
    RecordPagination: RecordTC.getResolver('pagination'),
  });

  schemaComposer.Mutation.addFields({
    RecordCreateOne: RecordTC.getResolver('createOne'),
  });

};
