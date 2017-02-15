<template>
<div>
 	<div class="breadcrumb-warp">
          <breadcrumb :breadcrumbs='breadcrumbs'></breadcrumb>
    </div>
	<div class='content'>
		<h1>{{detail.title}}</h1>

		<div class="content-article">
			<section class='img'>
				<img :src="image" class='content-img'>
			</section>
			<div>
				<div class='content-item'><strong>导演：</strong><span v-for='type in detail.directors'>{{type.name}}</span>
				</div>
				<div class='content-item'><strong>编剧：</strong><span v-for='type in types'>{{type}}</span>
				</div>
				<div class='content-item'><strong>主演：</strong><span v-for='type in detail.casts'>{{type.name}}</span>
				</div>			
				<div class='content-item'><strong>类型：</strong><span v-for='type in types'>{{type}}</span>
				</div>
				<div class='content-item'><strong>制片国家/地区：</strong><span v-for='type in detail.countries'>{{type}}</span>
				</div>
				<div class='content-item'><strong>又名：</strong><span v-for='type in detail.aka'>{{type}}
				</span>
				</div>	
			</div>
		</div>
		<div class='content-summary'>
			<p>{{detail.summary}}</p>
		</div>
	</div>
	<spinner :is-hidden='isHidden'></spinner>	
</div>	
</template>
<script>
	import Breadcrumb from '../components/breadcrumb'
	import spinner from '../components/spinner.vue'
	export default {
		// http://localhost:8080/#/coming_soon/detail/26668750
		data() {
				return {
					breadcrumbs: [{
						label: '豆瓣电影',
						name: 'index'
					}],
					image:'',
					types:[],
					detail:{},
					isHidden:false
				}
			},
			mounted() {
				this.fetchData()
			},
			components: {
				Breadcrumb,
				spinner
			},
			methods: {
				fetchData() {
					// console.log(this.$route)
					var self = this;
					this.$http.jsonp('https://api.douban.com/v2/movie/subject/'+self.$route.params.id
					).then((response) => {
						var data = JSON.parse(response.bodyText);
						self.isHidden = true;
						self.image = data.images.large;
						self.types = data.genres;
						self.detail = data;
						self.breadcrumbs = self.breadcrumbs.concat({
						label: data.title
					})
						console.log(self.breadcrumbs)
						// success callback
					}, (response) => {
						// error callback
					})

				}
			}
	}
</script>
<style>
	[data-dpr="2"] h1 {
  		font-size: 50px;
	}
	[data-dpr="3"] h1 {
	  	font-size: 75px;
	}
	.content-article{
		display: flex;
		flex-direction: column;
	}
	.content-article .img,.content-article .img img{
		width: 100%;
	}
	[data-dpr="2"] .content-item{
  		font-size: 30px;
	}
	[data-dpr="3"] .content-item {
	  	font-size: 45px;
	}
	.content-right{
		width: 6rem;
		padding-left: 20px;
		flex: 1;
	}
	.content-item{
		color:#666;
		margin-bottom: 10px;
	}
	.content-item span{
		display: inline-block;
		margin-right: 4px;
	}
	[data-dpr="2"] .content-summary p {
	  font-size: 24px;
	}
	[data-dpr="3"] .content-summary p {
	  font-size: 32px;
	}
	.content-summary{
		padding-left: 20px;
		border-left: 5px solid #ccc;
		line-height: 1.5;
		color:#555;
	}
	.content-summary:before{
		content:'内容简介';
		font-size: 45px;
		margin: 0;
		font-weight: bold;
	}
</style>
