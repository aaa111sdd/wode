"use strict";
const common_vendor = require("./vendor.js");
const common_config = require("./config.js");
function topList() {
  let listIds = ["3", "0", "2", "1"];
  return new Promise(function(resolve, reject) {
    common_vendor.index.request({
      url: `${common_config.baseUrl}/topList/detail`,
      method: "GET",
      data: {},
      success: (res) => {
        let result = res.data.list;
        result.length = 4;
        for (var i = 0; i < listIds.length; i++) {
          result[i].listId = listIds[i];
        }
        resolve(result);
      },
      fail: () => {
        console.log("失败");
      }
    });
  });
}
function list() {
  return common_vendor.index.request({
    url: `${common_config.baseUrl}/personalized/newsong?limit=100`,
    method: "GET"
  });
}
function songDetail(songId) {
  return common_vendor.index.request({
    url: `${common_config.baseUrl}/song/detail?ids=` + songId,
    method: "GET"
  });
}
function songUrl(songId) {
  return common_vendor.index.request({
    url: `${common_config.baseUrl}/song/url?id=` + songId,
    method: "GET"
  });
}
function searchmusic(keywords) {
  return common_vendor.index.request({
    url: `${common_config.baseUrl}/cloudsearch?keywords=` + keywords,
    method: "GET"
  });
}
exports.list = list;
exports.searchmusic = searchmusic;
exports.songDetail = songDetail;
exports.songUrl = songUrl;
exports.topList = topList;
