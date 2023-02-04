"use strict";
const common_vendor = require("../../common/vendor.js");
const common_api = require("../../common/api.js");
require("../../common/config.js");
const _sfc_main = {
  data() {
    return {
      searchmusiclist: [],
      list: []
    };
  },
  onLoad(options) {
    var that = this;
    console.log(options.input);
    common_api.searchmusic(options.input).then((res) => {
      console.log(res.data.result.songs);
      that.list = JSON.parse(JSON.stringify(res.data.result.songs));
    });
  },
  methods: {
    navtoplay(id, name, picUrl) {
      console.log(id, name, picUrl);
      common_vendor.index.navigateTo({
        url: "/pages/detail/detail?id=" + id + "&name=" + name + "&picUrl=" + picUrl
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
      icon: true,
      color: "white",
      title: "歌单"
    }),
    b: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.t(index + 1),
        b: common_vendor.t(item.name),
        c: index,
        d: common_vendor.o(($event) => $options.navtoplay(item.id, item.name, item.picUrl), index)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8ddbe67c"], ["__file", "D:/wangyiyunmusic/music/pages/seachlist/seachlist.vue"]]);
wx.createPage(MiniProgramPage);
