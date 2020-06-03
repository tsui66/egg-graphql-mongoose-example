'use strict';
module.exports = ({ app }, { GraphqlCompose }) => {
  const { schemaComposer } = GraphqlCompose;
  const RecordTC = app.graphqlTC.RecordTC;
  RecordTC.setDescription('操作日志');

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
