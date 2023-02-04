"use strict";
const common_vendor = require("../../common/vendor.js");
const common_api = require("../../common/api.js");
require("../../iconfont.js");
require("../../common/config.js");
const musichead = () => "../../components/musichead/musichead.js";
const _sfc_main = {
  data() {
    return {
      topList: [],
      intput: null
    };
  },
  onLoad() {
    common_api.topList().then((res) => {
      this.topList = res;
    });
  },
  components: {
    musichead
  },
  methods: {
    inputmusic(intput) {
      console.log(intput.detail.value);
      this.intput = intput.detail.value;
    },
    navtoplay() {
      common_vendor.index.navigateTo({
        url: "/pages/seachlist/seachlist?input=" + this.intput
      });
    },
    handleToList(listId) {
      common_vendor.index.navigateTo({
        url: "/pages/list/list?listId=" + listId
      });
    }
  }
};
if (!Array) {
  const _easycom_musichead2 = common_vendor.resolveComponent("musichead");
  _easycom_musichead2();
}
const _easycom_musichead = () => "../../components/musichead/musichead.js";
if (!Math) {
  _easycom_musichead();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      icon: false,
      title: "网易云音乐"
    }),
    b: common_vendor.o((...args) => $options.navtoplay && $options.navtoplay(...args)),
    c: common_vendor.o((...args) => $options.inputmusic && $options.inputmusic(...args)),
    d: common_vendor.f($data.topList, (item, index, i0) => {
      return {
        a: item.coverImgUrl,
        b: common_vendor.t(item.updateFrequency),
        c: common_vendor.f(item.tracks, (item2, index2, i1) => {
          return {
            a: common_vendor.t(index2 + 1),
            b: common_vendor.t(item2.first),
            c: common_vendor.t(item2.second),
            d: index2
          };
        }),
        d: common_vendor.o(($event) => $options.handleToList(item.listId), index),
        e: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/wangyiyunmusic/music/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
