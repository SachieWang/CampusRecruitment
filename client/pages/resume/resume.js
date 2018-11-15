var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
const {
  $Toast
} = require('../../dist/base/index');
// pages/resume/resume.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '1999-01-01',
    imgUrl: './default.png',
    photoed: false,
    scrollTop: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const session = qcloud.Session.get()
    console.log(session)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /**
   * 改变日期
   */
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  /**
   * 上传证件照
   */
  doUpload: function() {
    var that = this
    console.log(this.data.imgUrl)
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        that.setData({
          imgUrl: res.tempFilePaths[0]
        })
        util.showBusy('正在上传')
        var filePath = res.tempFilePaths[0]
        // 上传图片
        wx.uploadFile({
          url: config.service.uploadUrl,
          filePath: filePath,
          name: 'file',

          success: function(res) {
            util.showSuccess('上传图片成功')
            console.log(res)
            res = JSON.parse(res.data)
            console.log(res)
            console.log(res.data.imgUrl)
            that.setData({
              imgUrl: res.data.imgUrl,
              photoed: true
            })
          },

          fail: function(e) {
            util.showModel('上传图片失败')
          }
        })
      },
      fail: function(e) {
        console.error(e)
      }
    })
  },

  /**
   * 预览照片
   */
  previewImg: function() {
    wx.previewImage({
      current: this.data.imgUrl,
      urls: [this.data.imgUrl]
    })
  },

  /**
   * 提交表单
   */
  formSubmit: function(e) {
    var that = this
    //检验照片是否已上传
    //console.log(userstatus.id)
    if (!this.data.photoed) {
      $Toast({
        content: '使用内置的图标',
        icon: 'praise'
      });
      return null
    }

    //表单数据整合、提交
    var forms = e.detail.value
    forms.photo = that.data.imgUrl//设置照片url
    var userstatus = wx.getStorageSync("status")//获取openId
    forms.id = userstatus.id
    //console.log("携带:", forms)
    //请求接口，写入简历数据表
    wx.request({
      url: 'https://yojwq2j5.qcloud.la/weapp/resume', //仅为示例，并非真实的接口地址
      data: forms,
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function(res) {
        //更新用户状态表
        /*
        wx.request({
          url: 'https://yojwq2j5.qcloud.la/weapp/userstatus?', //仅为示例，并非真实的接口地址
          data: forms,
          method: "POST",
          header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
          },
          success: function (res) {
            console.log(res.data)
          }
        })*/
        console.log(res.data)
      }
    })

  },

  /**
   * 重置表单
   */
  formReset: function() {
    console.log('form发生了reset事件')
  },


  onChange(event) {
    console.log(event.detail, 'click right menu callback data')
  },
  //页面滚动执行方式
  onPageScroll(event) {
    this.setData({
      scrollTop: event.scrollTop
    })
  }

})