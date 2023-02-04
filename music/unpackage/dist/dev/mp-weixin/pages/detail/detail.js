"use strict";
const common_vendor = require("../../common/vendor.js");
const common_api = require("../../common/api.js");
require("../../iconfont.js");
require("../../common/config.js");
const musichead = () => "../../components/musichead/musichead.js";
const _sfc_main = {
  data() {
    return {
      songDetail: {},
      al: {},
      i: 0,
      srcs: null
    };
  },
  components: {
    musichead
  },
  onLoad(options) {
    this.getMusic(options.songId), this.getMusic(options.id);
  },
  methods: {
    getMusic(songId) {
      Promise.all([common_api.songDetail(songId), common_api.songUrl(songId)]).then((res) => {
        if (res[0].statusCode == "200") {
          console.log(res);
          this.songDetail = res[0].data.songs[0];
        }
        if (res[0].statusCode == "200") {
          this.bgAudioManager = common_vendor.index.getBackgroundAudioManager();
          this.bgAudioManager.title = this.songDetail.name;
          this.bgAudioManager.src = res[1].data.data[0].url;
          this.bgAudioManager.onPlay(() => {
            this.i = 1;
            this.srcs = "../../static/playyyy.png";
          });
          this.bgAudioManager.onPause(() => {
            this.srcs = "../../static/play.png";
            this.i = 0;
          });
        }
      });
    },
    music() {
      if (this.i) {
        this.bgAudioManager.pause();
      } else {
        this.bgAudioManager.play();
      }
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
    a: $data.songDetail.al.picUrl,
    b: common_vendor.p({
      icon: true,
      color: "white",
      title: $data.songDetail.name
    }),
    c: $data.songDetail.al.picUrl,
    d: $data.srcs,
    e: common_vendor.o((...args) => $options.music && $options.music(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-eca06f3c"], ["__file", "D:/wangyiyunmusic/music/pages/detail/detail.vue"]]);
wx.createPage(MiniProgramPage);
