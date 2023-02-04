<template>
	<view class="list">
		<view class="fixbg"></view>
		<musichead :icon="true" color="white" title="歌单"></musichead>
		<view class="container">
			<scroll-view scroll-y="true">
				<view class="list-head">
					<view class="list-head-img">
						<image src="https://p1.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg"></image>

						<text>31亿</text>
					</view>
					<view class="list-head-text">
						<view> 网易云</view>
						<view>
							<image src="https://p1.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg">
							</image>飙升榜
						</view>
						<view>云音乐中每天热度上升最快的100首单曲，每日更新</view>
					</view>
					<view class="list-music">

						<view class="list-music-head">
							<image class="play" src="../../static/play.png"></image>
							<text>播放全部</text>
							<text>（共100首）</text>
						</view>
						<view v-for="(item,index) in musiclist" :key="index" @tap="handToDetil(item.id)"
							class="list-music-item">
							<view class="list-music-top">{{index+1}}</view>
							<view class="list-music-song">
								<view> {{item.name}}</view>
								<view>
									<text class="iconfont icon-customer-service"></text>
									<text class="iconfont icon-discount"></text>
									{{item.song.artists[0].name}}
								</view>
							</view>

						</view>

					</view>

				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {
		list
	} from "../../common/api.js"
	import '@/font/iconfont.css'
	import musichead from '../../components/musichead/musichead.vue'
	export default {
		data() {
			return {
				musiclist: []
			}
		},
		comments: {
			musichead
		},
		onLoad() {
			//console.log(options.listId)
			list().then((res) => {
				console.log(res)
				this.musiclist = res.data.result
				//console.log(this.musiclist, '成功')
			})
		},
		methods: {
			handToDetil(songId) {
				uni.navigateTo({
					url: '/pages/detail/detail?songId=' + songId
				})
			}

		}
	}
</script>

<style scoped>
	.container {
		position: absolute;
		right: 22rpx;
		width: 100%;
	}

	.list-head {

		display: flex;


		margin: 30rpx;
		height: 300rpx;
	}

	.list-head-img {}

	.list-head-img image {
		position: relative;
		width: 300rpx;
		height: 100%;
		border-radius: 5%;
	}

	.list-head-img text {
		color: aliceblue;
		position: absolute;
		top: 30rpx;
		left: 250rpx;
	}

	.list-head-text {
		position: relative;
		padding: 20rpx;

		overflow: hidden;
		justify-content: space-around;
	}

	.list-head-text view:nth-child(2) {
		position: relative;
		top: 20rpx
	}

	.list-head-text view:nth-child(3) {
		position: relative;
		top: 20rpx
	}

	.list-head-text image {
		position: relative;
		height: 50rpx;
		width: 50rpx;
	}

	.list-music {
		border-radius: 3%;

		position: absolute;
		top: 350rpx;
		width: 100%;
		height: 100vh;


	}


	.list-music-head {
		font-size: 0.5cm;
	}

	.list-music-item {
		display: flex;
		position: relative;
		top: 20rpx;
		flex-direction: row;
	}

	.list-music-top {
		margin-left: 10rpx;
		position: relative;
		top: 20rpx;
	}

	.list-music-song {
		margin-left: 60rpx;
	}

	.play {
		position: relative;
		top: 20rpx;
		width: 80rpx;
		height: 80rpx
	}

	.plays {
		position: relative;
		top: 20rpx;
		left: 260rpx;
		width: 80rpx;
		height: 80rpx
	}
</style>
