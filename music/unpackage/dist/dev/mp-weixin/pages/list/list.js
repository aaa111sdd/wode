"use strict";
const common_vendor = require("../../common/vendor.js");
const common_api = require("../../common/api.js");
require("../../iconfont.js");
require("../../common/config.js");
const musichead = () => "../../components/musichead/musichead.js";
const _sfc_main = {
  data() {
    return {
      musiclist: []
    };
  },
  comments: {
    musichead
  },
  onLoad() {
    common_api.list().then((res) => {
      console.log(res);
      this.musiclist = res.data.result;
    });
  },
  methods: {
    handToDetil(songId) {
      common_vendor.index.navigateTo({
        url: "/pages/detail/detail?songId=" + songId
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
    b: common_vendor.f($data.musiclist, (item, index, i0) => {
      return {
        a: common_vendor.t(index + 1),
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.song.artists[0].name),
        d: index,
        e: common_vendor.o(($event) => $options.handToDetil(item.id), index)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-98a9e0b2"], ["__file", "D:/wangyiyunmusic/music/pages/list/list.vue"]]);
wx.createPage(MiniProgramPage);
