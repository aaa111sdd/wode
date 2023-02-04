<template>
	<view class="detail">
		<image :src="songDetail.al.picUrl" class="backimg"></image>
		<musichead :icon="true" color="white" :title="songDetail.name"></musichead>
		<view class="container">
			<scroll-view scroll-y="true">
				<view class="play-detail" @tap="music">
					<!-- <image class="yuan" src="../../static/eee.png">mage> -->
					<image class="image" :src="songDetail.al.picUrl"></image>
					<image class="begin" :src="srcs"></image>
				</view>

			</scroll-view>
		</view>

	</view>
</template>

<script>
	import {
		lyric,
		songDetail,
		songUrl,
		topList,
		list
	} from "../../common/api.js"
	import '@/font/iconfont.css'
	import musichead from '../../components/musichead/musichead.vue'
	export default {

		data() {
			return {
				songDetail: {},
				al: {},
				i: 0,
				srcs: null
			}
		},
		components: {
			musichead
		},
		onLoad(options) {
			//console.log(options.id),
			this.getMusic(options.songId),
				this.getMusic(options.id)

		},
		methods: {
			getMusic(songId) {
				Promise.all([songDetail(songId), songUrl(songId)]).then((res) => {
					//console.log('ok', res)
					if (res[0].statusCode == '200') {
						console.log(res)
						this.songDetail = res[0].data.songs[0]
					}
					if (res[0].statusCode == '200') {
						this.bgAudioManager = uni.getBackgroundAudioManager();
						this.bgAudioManager.title = this.songDetail.name;
						this.bgAudioManager.src = res[1].data.data[0].url;
						this.bgAudioManager.onPlay(() => {
							//console.log('onplay');
							this.i = 1;
							this.srcs = '../../static/playyyy.png'
						});
						this.bgAudioManager.onPause(() => {
							this.srcs = '../../static/play.png'
							//console.log('onpause');
							this.i = 0
						});
					}
					//console.log(res)
				})
			},
			music() {
				if (this.i) {
					this.bgAudioManager.pause();

				} else {
					this.bgAudioManager.play();

				}

			},

		},

	}
</script>

<style scoped>
	.backimg {

		width: 100%;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;

		background-size: cover;
		background-position: center 0;
		filter: blur(10px);
		transform: scale(1.2);

	}

	.yuan {
		border-color: azure 2rpx;
		border: 20rpx gainsboro solid;
		border-radius: 70%;
		position: absolute;
		top: 30rpx;
		left: 30rpx;
		animation: 10s linear move infinite;
		animation-play-state: running;

	}

	@keyframes move {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}

	}

	.image {
		border: 20rpx solid black;
		border-radius: 50%;
		position: absolute;
		top: 140rpx;
		right: 250rpx;
		width: 260rpx;
		height: 260rpx;
		animation: 10s linear move infinite;
		animation-play-state: running;
	}

	.begin {
		position: absolute;
		width: 100rpx;
		height: 100rpx;
		top: 250rpx;
		left: 300rpx;
	}
</style>
