let _compData = {
  '__stpannel__.curIndex': 0
}

let _compEvent = {
  __stpannel__clickText: function(e) {
    this.setData({'__stpannel__.curIndex': e.target.dataset.index})
    typeof this.scrollTitlePannel._configs.callback == "function" &&
    this.scrollTitlePannel._configs.callback(e.target.dataset.index)
  }
}

let scrollTitlePannel = {
  init: function(data) {
    if (data) {
      Object.assign(this._configs, data)
    }
  }
}

function ScrollTitlePannel () {
  // 定义组件的一些回调
  this._configs = {
    callback: null
  }
  // 拿到当前页面对象
  let pages = getCurrentPages()
  let curPage = pages[pages.length - 1]

  // 把组件的事件“合并到”页面对象上
  Object.assign(curPage, _compEvent)

  this.__page = curPage

  // 附加到page上，方便访问

  Object.assign(this, scrollTitlePannel)

  curPage.scrollTitlePannel = this

  // 把组件的数据“注入”到页面的data对象中
  curPage.setData(_compData)

  return this
}

module.exports = {
  ScrollTitlePannel
}
