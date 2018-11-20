var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    logged: false,
    //takeSession: false,
    //requestResult: '',
    list: [{
      content: "IT",
      id: 1
    }, {
      content: "宣传",
      id: 2
    }, {
      content: "培训",
      id: 3
    }],
    current: 'homepage'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    /*
    wx.getSetting({
      success(res){
        console.log(res.authSetting)
      }
    })*/
    var that = this
    wx.getUserInfo({
      success: function(res) {
        that.setData({
          userInfo: res.userInfo,
          logged: true
        })
      }
    })
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
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

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

  tp: function(e) {
    var sortID = e.currentTarget.dataset.sortId
    var content = e.currentTarget.dataset.content
    wx.navigateTo({
      url: '/pages/sorts/sorts?id=' + sortID,
    })
  },
})