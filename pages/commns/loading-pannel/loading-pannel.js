let _compData = {
  '__ldpanel__.isHide': true,
  '__ldpanel__.loading_img': '',
  '__ldpanel__.loading_text': '',
  '__ldpanel__.loading_bottom_img': '',
  '__ldpanel__timer': null,
}



let loadingPannel = {

  show: function() {
    let app = getApp();
    var image_arr = app.loading_img_arr;
    var image_info = app.loading_title;
    var loading_bar_imag_arr = app.loading_bar_img_arr;
    var img_index = 0;
    var index = Math.floor(Math.random() * image_arr.length);
    
    this.__page.setData({'__ldpanel__.isHide': false})
    this.__page.setData({'__ldpanel__.loading_img': image_arr[index]})
    this.__page.setData({'__ldpanel__.loading_text': image_info[index]})
    this.__ldpanel__timer = setInterval(() => {
      this.__page.setData({'__ldpanel__.loading_bottom_img':loading_bar_imag_arr[img_index %     (loading_bar_imag_arr.length)]})
      img_index++;
      }, 400)
  },

  hide: function() {
    clearInterval(this.__ldpanel__timer)
    this.__page.setData({'__ldpanel__.isHide': true})
    this.__page.setData({'__ldpanel__.loading_img': ''})
    this.__page.setData({'__ldpanel__.loading_text': ''})
    this.__page.setData({'__ldpanel__.loading_bottom_img': ''})
  }
}

function LoadingPannel () {

  // 拿到当前页面对象
  let pages = getCurrentPages()
  let curPage = pages[pages.length - 1]

  // 把组件的事件“合并到”页面对象上
  // Object.assign(curPage, _compEvent)

  this.__page = curPage

  // 附加到page上，方便访问

  Object.assign(this, loadingPannel)

  curPage.loadingPannel = this

  // 把组件的数据“注入”到页面的data对象中
  curPage.setData(_compData)

  return this
}

module.exports = {
  LoadingPannel
}
