"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "musichead",
  data() {
    return {};
  },
  props: ["title", "icon", "color"],
  methods: {
    handleToBack() {
      common_vendor.index.navigateBack();
    },
    handleToHome() {
      common_vendor.index.navigateTo({
        url: "/pages/index/index"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.icon
  }, $props.icon ? {
    b: common_vendor.o((...args) => $options.handleToBack && $options.handleToBack(...args)),
    c: common_vendor.o((...args) => _ctx.handToHome && _ctx.handToHome(...args))
  } : {}, {
    d: common_vendor.t($props.title),
    e: $props.color
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-62260a2d"], ["__file", "D:/wangyiyunmusic/music/components/musichead/musichead.vue"]]);
wx.createComponent(Component);
