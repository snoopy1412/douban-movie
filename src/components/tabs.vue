<template>
	<ul class='tabs'>
		<li v-for='item in tabs'><router-link :to="'/'+item.type" class='footer-title-link'>{{item.title}}</router-link></li>
	</ul>
</template>
<script>
	export default{
		props:{
			tabs:{
				type:Array,
				default:function(){
					return [{
						type: 'index',
						title: '首页'
					}]
				}
			}
		}
	}
</script>
<style>
	.router-link-active{
		color:red !important;
	}
	.tabs{
		position: fixed;
		display: flex;
		bottom: 0;
		left: 0;
		display: flex;
		list-style: none;
		padding-left: 0;
		margin: 0;
		width: 100%;
		background-color: #fff;
	}
	.tabs li{
		font-size: .4rem;
		line-height: .55rem;
		text-align: center;
		padding: 20px 0;
		width: 33%;
		flex: 1;
		border-top: 1px solid #333;

	}
	.tabs li:last-child{
		border-right: 0;
	}
	.tabs a{
		text-decoration: none;
		color:#5D656B;
	}
</style>