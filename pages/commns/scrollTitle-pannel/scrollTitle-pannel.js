// 组件变量及数据
let _compData = {
  '__stpannel__.curIndex': 0
}


// 组件事件
let _compEvent = {
  // 按钮方法以及回掉方法调用
  __stpannel__clickText: function(e) {
    this.setData({'__stpannel__.curIndex': e.target.dataset.index})
    typeof this.scrollTitlePannel._configs.callback == "function" &&
    this.scrollTitlePannel._configs.callback(e.target.dataset.index)
  }
}

let scrollTitlePannel = {
  init: function(data) {
    if (data) {
      // 给回掉方法赋值
      Object.assign(this._configs, data)
    }
  }
}

function ScrollTitlePannel () {
  // 回调方法
  this._configs = {
    callback: null
  }

  // 当前页面对象
  let pages = getCurrentPages()
  let curPage = pages[pages.length - 1]

  // 把组件的事件赋到当前页面上
  Object.assign(curPage, _compEvent)
  this.__page = curPage

  // 将scrollTitlePannel赋到当前页面，方便后面使用
  Object.assign(this, scrollTitlePannel)
  curPage.scrollTitlePannel = this

  // 把组件的变量数据赋给当前页面的data
  curPage.setData(_compData)
  return this
}

module.exports = {
  ScrollTitlePannel
}
