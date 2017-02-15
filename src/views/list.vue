<template>
<div ref="list">
	<div class='items' v-for='item in subjects'>
		<aside class='left'>
			<img :src="item.images.large">
		</aside>
		<div class='right'>
			<h3 class='item-title'><router-link :to="'/'+$route.params.type+'/detail/'+item.id" class='item-title-link'>{{item.title}}</router-link> 
				<small class='item-type'>
					<span v-for='genre in item.genres'>{{genre}}</span>
				</small>
			</h3>
			<div class='item-casts'>
				<span>演员：</span>
				<span v-for='cast in item.casts' class='item-cast-name'>{{cast.name}}</span>
			</div>
		</div>
	</div>
	<span class='isLoadingList' v-show='isLoading' v-text='loadingText'></span>
	<spinner :is-hidden='isHidden'></spinner>	
</div>
</template>
<script>
import spinner from '../components/spinner.vue'
export default {
	data:function(){
		return {
			data: {},
			isHidden: false,
			subjects: [],
			start: 0,
			isLoading:false,
			loadingText: '正在加载内容',
			canLoading: true
		}
	},
	components:{
		spinner
	},
	mounted:function(){
		var self = this;
		self.isHidden = false;
		this.getContent();
		// 监听滚动事件
		window.addEventListener('scroll', this.handleScroll,null);
	},
	methods:{
		handleScroll(e){
			var node = this.$refs.list;
			if(!node) return false;
			// node.myDis = node.getBoundingClientRect();
			// var t = node.myDis.top;

			var docTop = document.documentElement.scrollTop || document.body.scrollTop;

			if(docTop + document.documentElement.clientHeight - 82  >= node.scrollHeight){
				this.isLoading = true;
				this.getContent()
			}
		},
		getContent() {
			var self = this;
			if (self.canLoading) {
				self.canLoading = false;
				this.$http.jsonp('https://api.douban.com/v2/movie/' + self.$route.params.type + '?start=' + self.start).then((response) => {
					self.isHidden = true;
					self.isLoading = false;
					var res = JSON.parse(response.bodyText);
					self.start =self.start + (res.subjects.length -1);
					self.subjects = self.subjects.concat(res.subjects);
					if (self.start < res.total - 1) {
						self.canLoading = true;
						self.loadingText = '正在加载内容'
					} else {
						self.canLoading = false;
						self.loadingText = '没有更多值了'
					}

					console.log(self.start,self.subjects)
				}, (response) => {});
			}
		}
	},
  watch: {
    $route () {
		self.isHidden = false;
    	this.getContent();
    }
  }
}
</script>
<style>
.items{
	display: flex;
	flex-direction: rows;
	border-bottom: 1px solid #f1f1f1;
	margin-bottom: 0.325rem;
}
.items .left{
	width: 3.5rem;
	overflow: hidden;
}
.left img{
	width: 100%;
	height: 4rem;
}
.items .right{
	margin-left: 0.3rem;
	flex:1;
}
[data-dpr="2"] .item-title {
  font-size: 36px;
}
[data-dpr="3"] .item-title {
  font-size: 54px;
}
.item-title{
	margin-top: 2px;
	margin-bottom: 0.225rem;
	position: relative;
}

.item-title-link{
	text-decoration: none;
	color:#444;
	transition: color .25s;
	display: block;
	margin-bottom: 0.25rem;
}
.item-title-link:hover{
	color:#27a;;
}
[data-dpr="2"] .item-type {
  font-size: 30px;
}
[data-dpr="3"] .item-type {
  font-size: 45px;
}
.item-type{
	display: block;
	font-size: 75%;
	font-weight: normal;
	color:#27a;
}
.item-type span{
	display: inline-block;
	margin-left: 4px;
}
[data-dpr="2"] .item-casts {
  font-size: 28px;
}
[data-dpr="3"] .item-casts {
  font-size: 42px;
}
.item-casts{
	color:#aaa;
}
.item-cast-name{
	display: inline-block;
	margin-right: 10px;
}
.isLoadingList{
	display: block;
	height: 30px;
	text-align: center;
	line-height: 30px;
	font-size: .45rem;
}
</style>