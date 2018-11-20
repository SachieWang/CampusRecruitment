var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    debug:true,
    isLogined: false,
    isResumed: false
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
    var status = wx.getStorageSync("status")
    //wx.clearStorageSync()
    //console.log(status.login)
    if (status.login) {
      this.setData({
        isLogined: true
      })
    }
    //console.log(this.data.isLogined)
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
  tologin: function() {
    this.setData({
      isLogined: true
    })
  },
  tologout: function() {
    this.setData({
      isLogined: false
    })
  },
  have: function() {
    this.setData({
      isResumed: true
    })
  },
  nohave: function() {
    this.setData({
      isResumed: false
    })
  },
  resume:function(){
    wx.navigateTo({
      url: '/pages/resume/resume',
    })
  }
})