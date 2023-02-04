<template>
	<view class="index">

		<musichead :icon="false" title="网易云音乐"></musichead>
		<view class="container">

			<scroll-view scroll-y="ture">
				<view class="index-search">
					<image @tap="navtoplay" src="../../static/sou.png"></image>
					<input @input="inputmusic" type="text" placeholder="搜索歌曲" />
				</view>
				<view class="item">
					<view @tap="handleToList(item.listId)" class="index-list-item" v-for="(item,index) in topList"
						:key="index">
						<view class="index-list-img">
							<image :src="item.coverImgUrl" mode="scaleToFill"></image>
							<text>{{item.updateFrequency}}</text>
						</view>
						<view class="index-list-text" v-for="(item,index) in item.tracks" :key="index">
							<view>{{index+1}}.{{item.first}} - {{item.second}}</view>

						</view>

					</view>

				</view>
			</scroll-view>

		</view>
	</view>
</template>

<script>
	import {
		searchmusic
	} from '../../common/api.js'
	import '@/font/iconfont.css'
	import {
		topList
	} from '../../common/api.js'
	import musichead from '../../components/musichead/musichead.vue'
	export default {
		data() {
			return {
				topList: [],
				intput: null,
			}
		},

		onLoad() {
			topList().then((res) => {
				this.topList = res

			});
		},
		components: {
			musichead
		},


		methods: {
			inputmusic(intput) {
				console.log(intput.detail.value)
				this.intput = intput.detail.value
				// searchmusic(intput.detail.value).then((res) => {
				// 	console.log(res.data.result.songs)
				// 	this.searchmusiclist = res.data.result.songs[0]

				//)

			},
			navtoplay() {
				//var change = JSON.stringify(this.searchmusiclist)
				//console.log(change)
				//var changes = encodeURIComponent(change)

				uni.navigateTo({
					url: '/pages/seachlist/seachlist?input=' + this.intput,


				})
			},

			handleToList(listId) {
				uni.navigateTo({
					url: '/pages/list/list?listId=' + listId,

				})
			}
		}
	}
</script>

<style scoped>
	.index-search {
		display: flex;
		align-items: center;
		height: 110rpx;
		margin: 70rpx 30rpx 30rpx 30rpx;
		background: #f7f7f7;
		border-radius: 50rpx;

	}

	.index-search image {
		position: relative;
		width: 70rpx;
		height: 70rpx;
		left: 550rpx;
	}

	.index-search input {

		position: relative;
		left: 40rpx;
	}

	.item {

		display: flex;
		flex-direction: column;
	}

	.index-list-item {
		display: flex;
		flex-direction: column;
		position: relative;
		margin: 20rpx;

		width: 100%;
		height: 300rpx;
	}

	.index-list-img {

		display: flex;
		flex-direction: column;
	}

	.index-list-img image {
		position: absolute;
		width: 250rpx;
		height: 100%;
		border-radius: 10%;

	}

	.index-list-img text {
		position: absolute;
		top: 250rpx;
		color: aliceblue;
	}

	.index-list-text {
		position: relative;
		left: 250rpx;
		display: flex;
		justify-items: center;
		top: 30rpx;
		padding-top: 20rpx;
		flex-direction: column;

		overflow: hidden;

	}
</style>
