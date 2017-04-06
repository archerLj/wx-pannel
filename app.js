//app.js
import { LoadingPannel } from './pages/commns/loading-pannel/loading-pannel'

App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  LoadingPannel,
  loading_img_arr: [
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491389674039&di=6dbde98248820ed36ea75b6619305acc&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fspace%2Fpic%2Fitem%2F8cb1cb13495409237b0badc39258d109b3de4929.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491391222773&di=1821543b2c3fa512af5916407f3327bc&imgtype=0&src=http%3A%2F%2Fimage48.360doc.com%2FDownloadImg%2F2011%2F12%2F2421%2F20271196_13.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491391240115&di=035cfff713c3c743b36e9f02a1c79d58&imgtype=0&src=http%3A%2F%2Fimg.sj33.cn%2Fuploads%2Fallimg%2F201302%2F1-130201105055.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491393850397&di=806cf5f2ac09480db6fada3925e14b57&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%253D580%2Fsign%3D999d388cf503918fd7d13dc2613c264b%2Fd42a2834349b033ba10f93b617ce36d3d439bdd3.jpg',
],
loading_title: [
  '不管昨天、今天、明天，能豁然开朗就是美好的一天；世界上唯一可以不劳而获的是贫穷，唯一可以无中生有的是梦想。',
  '很多时候，成功只是多坚持一分钟，在一切成定局之前，请不要停下脚步；忧虑是最没有意义的事，它不会改变任何事，只会搅乱你的生活。',
  '强大的人是在内心扛住千斤重，表面却很淡然的人；人生道路上的每个里程碑都刻着两个字--起点；人生只有拼出来的美丽，没有等出来的辉煌。',
  '你的脸是为了呈现上帝赐给人类最贵重的礼物——微笑，一定要成为你工作最大的资产。'
],
loading_bar_img_arr: [
  'http://upload-images.jianshu.io/upload_images/1117475-6a38a36e0c662a5a.png?imageMogr2/auto-orient/strip%7CimageView2/2',
  'http://upload-images.jianshu.io/upload_images/1117475-2fc0c9c3207e6b7c.png?imageMogr2/auto-orient/strip%7CimageView2/2',
  'http://upload-images.jianshu.io/upload_images/1117475-c9862abc400562a1.png?imageMogr2/auto-orient/strip%7CimageView2/2',
  'http://upload-images.jianshu.io/upload_images/1117475-8b37c7fc1ca96d92.png?imageMogr2/auto-orient/strip%7CimageView2/2',
  'http://upload-images.jianshu.io/upload_images/1117475-febb5d90d45a9c07.png?imageMogr2/auto-orient/strip%7CimageView2/2',
],
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})