module.exports = Model('MongoModel', {
    //字段列表
    fields: {
      title:  String,
      author: String,
      body:   String,
      comments: [{ body: String, date: Date }],
      date: { type: Date, default: Date.now },
      hidden: Boolean,
      meta: {
        votes: Number,
        favs:  Number
      }
    },
    //mongoose模块里创建Schema的选项
    schema_options: {

    }
})
