<template>
	<view class="music-head" :style="{color:color}">
		<view v-if="icon" class="music-head-icon">
			<image @tap="handleToBack" class="image1" src="../../static/chevron-leftss.png"></image>
			<text>|</text>
			<image @tap="handToHome" class="image2" src="../../static/hui.png"></image>
		</view>
		{{title}}
	</view>
</template>

<script>
	export default {
		name: "musichead",
		data() {
			return {

			};
		},

		props: ['title', 'icon', 'color'],
		methods: {
			handleToBack() {
				uni.navigateBack();
			},
			handleToHome() {
				uni.navigateTo({
					url: "/pages/index/index"
				})
			}

		}
	}
</script>

<style scoped>
	.music-head {
		width: 100%;
		height: 100%;
		height: 75px;
		font-size: 16px;
		line-height: 80px;
		text-align: center;
		color: black;
		position: relative;
	}

	.music-head-icon {
		position: absolute;
		left: 8px;
		top: 26px;
		width: 90px;
		height: 30px;
		background-color: rgba(0, 0, 0, 0.4);
		color: white;
		line-height: 31px;
		border-radius: 15px;
		display: flex;
		justify-content: space-evenly;
	}

	.image1 {
		position: relative;
		width: 40px;
		height: 25px;

	}

	.image2 {
		position: relative;
		width: 40px;
		height: 25px;


	}
</style>
