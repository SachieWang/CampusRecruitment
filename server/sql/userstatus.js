const {
  mysql
} = require('../qcloud')
module.exports = {
  // 改 
  update: async ctx => {
    id=
    await mysql("UserStatus").update({
      isresumed: true
    }).where({
      id
    })
  },

  quary: async ctx => {
    // 查 
    //var res = await mysql("resume")
    ctx.state.data = ctx.request
  }
}