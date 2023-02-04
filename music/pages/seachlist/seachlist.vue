<template>
	<view>
		<musichead :icon="true" color="white" title="歌单"></musichead>
		<view v-for="(item,index) in list" :key="index" @tap="navtoplay(item.id,item.name,item.picUrl)"
			class="musiclist">
			<view>{{index+1}}. {{item.name}}</view>
			<image src="../../static/play.png"></image>

		</view>

	</view>
</template>

<script>
	import {
		searchmusic,
	} from '../../common/api.js'
	export default {
		data() {
			return {
				searchmusiclist: [],
				list: [],
			}
		},
		onLoad(options) {
			//var change = JSON.parse(options)
			//console.log(options)
			//var changes = decodeURIComponent(change)
			//console.log(change)
			// uni.$on('music', (data) => {
			//var change = JSON.parse(data)
			//console.log('监听到事件来自 update ，携带参数 msg 为：' + change);//})
			var that = this
			console.log(options.input)
			searchmusic(options.input).then((res) => {

				console.log(res.data.result.songs)
				that.list = JSON.parse(JSON.stringify(res.data.result.songs))
			})

		},
		methods: {
			navtoplay(id, name, picUrl) {
				console.log(id, name, picUrl)
				uni.navigateTo({
					url: '/pages/detail/detail?id=' + id + '&name=' + name + '&picUrl=' + picUrl,
				})
			}

		}
	}
</script>

<style scoped>
	.musiclist {
		background-color: beige;
	}

	.musiclist view {
		border-radius: 3%;
		border: 2rpx solid rosybrown;
		background-color: antiquewhite;
		position: relative;
		height: 100rpx;
		margin-left: 30rpx;
		font-size: 40rpx;

	}

	.musiclist image {
		position: relative;
		height: 70rpx;
		width: 70rpx;
		left: 600rpx;
		bottom: 80rpx;
	}
</style>
