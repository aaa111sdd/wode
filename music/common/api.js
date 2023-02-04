import {
	baseUrl
} from './config.js'
export function topList() {
	let listIds = ['3', '0', '2', '1']
	return new Promise(function(resolve, reject) {
		uni.request({
			url: `${baseUrl}/topList/detail`,
			method: 'GET',
			data: {},
			success: (res) => {
				let result = res.data.list;

				result.length = 4;
				for (var i = 0; i < listIds.length; i++) {
					result[i].listId = listIds[i];
				}
				resolve(result)
			},
			fail: () => {
				console.log("失败")
			}
		})
	})

}
export function list() {
	return uni.request({
		url: `${baseUrl}/personalized/newsong?limit=100`,
		method: 'GET',


	})
}
export function songDetail(songId) {
	return uni.request({
		url: `${baseUrl}/song/detail?ids=` + songId,
		method: 'GET',


	})
}
export function songSimi(songId) {
	return uni.request({
		url: `${baseUrl}/simi/song?ids=` + songId,
		method: 'GET',


	})
}
export function songUrl(songId) {
	return uni.request({
		url: `${baseUrl}/song/url?id=` + songId,
		method: 'GET',


	})
}
export function lyric(songId) {
	return uni.request({
		url: `${baseUrl}/lyric?id=` + songId,
		method: 'GET',


	})
}
export function searchmusic(keywords) {
	return uni.request({
		url: `${baseUrl}/cloudsearch?keywords=` + keywords,
		method: 'GET',


	})
}
