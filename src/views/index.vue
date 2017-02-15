<template>
<div class='movie-type'>
	<section class='movie-type-item-warp'>
		<h3><router-link :to="'/in_theaters'" class='item-title-link'>正在热映</router-link></h3>
		<div class='movie-type-item'>	
			<div class='movie-type-child' v-for='item in subjects'>
				<figure>
					<section>
						<router-link :to="'/in_theaters/detail/'+item.id" class='item-title-link'>
							<img :src="item.images.large">
						</router-link>
					</section>
					<figcaption>
						<router-link :to="'/in_theaters/detail/'+item.id" class='item-title-link'>{{item.title}}</router-link>
					</figcaption>
				</figure>
			</div>	
		</div>		
	</section>
	<section class='movie-type-item-warp'>
		<h3><router-link :to="'/coming_soon'" class='item-title-link'>即将上映</router-link></h3>
		<div class='movie-type-item'>	
			<div class='movie-type-child' v-for='item in subjects'>
				<figure>
					<section>
						<router-link :to="'/coming_soon/detail/'+item.id" class='item-title-link'>
							<img :src="item.images.large">
						</router-link>
					</section>
					<figcaption>
						<router-link :to="'/coming_soon/detail/'+item.id" class='item-title-link'>{{item.title}}</router-link>
					</figcaption>
				</figure>
			</div>	
		</div>		
	</section>
	<section class='movie-type-item-warp'>
		<h3><router-link :to="'/top250'" class='item-title-link'>Top250</router-link></h3>
		<div class='movie-type-item'>	
			<div class='movie-type-child' v-for='item in subjects'>
				<figure>
					<section>
						<router-link :to="'/top250/detail/'+item.id" class='item-title-link'>
							<img :src="item.images.large">
						</router-link>
					</section>
					<figcaption>
						<router-link :to="'/top250/detail/'+item.id" class='item-title-link'>{{item.title}}</router-link>
					</figcaption>
				</figure>
			</div>	
		</div>		
	</section>

	<spinner :is-hidden='isHidden'></spinner>	
</div>
</template>
<script>
import spinner from '../components/spinner.vue'
export default {
	data:function(){
		return {
			data:{},
			isHidden:false,
			subjects:[]
		}
	},
	components:{
		spinner
	},
	mounted:function(){
		var self = this;
		this.$http.jsonp('https://api.douban.com/v2/movie/coming_soon').then((response) => {
			self.isHidden = true;
			var data = JSON.parse(response.bodyText);
			console.log(data)
			self.subjects = data.subjects.slice(0,3);
		}, (response) => {
		});
	}
}
</script>
<style>
.movie-type{
	display: flex;
	flex-direction: column;
}
.movie-type-item-warp{
	padding-top: 20px;
	border-bottom: 1px solid #ccc;
}
.movie-type-item-warp h3{
	margin: 0;
	margin-bottom: 0.20rem;
	font-size: .55rem;
	padding-left: 20px;
	border-left: 10px solid #27a;
}
.movie-type-item{
	display: flex;
	flex-direction: row;
}
.movie-type-child{
	flex: 1;
	margin-right: 10px;
}
.movie-type-child:last-child{
	margin-right: 0;
}
.movie-type-child figure{
	margin: 0;
	padding: 0;
}
.movie-type-child img{
	width: 100%;
	height: 4rem;
}
.movie-type-child a{
	font-size: .5rem;
	text-align: center;
}
</style>