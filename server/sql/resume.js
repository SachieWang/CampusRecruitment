const {
  mysql
} = require('../qcloud')
module.exports = {
  insert: async ctx => {
    //var id = 1
    // 增 --通过！！
    var resumei = ctx.request.body
    await mysql("resume").insert(resumei)
    ctx.state.data = resumei
  },
  quary: async ctx => {
    // 查 
    var res = await mysql("resume")
    ctx.state.data = res
  }


  // 改 
  /*await mysql("Book").update({
    price: 66
  }).where({
    id
  })*/

  // 删 
  /*await mysql("Book").del().where({
    id
  })*/


}