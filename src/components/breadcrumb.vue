<template>
	<div class="el-breadcrumb">
		<span class="el-breadcrumb__item" v-for='item in breadcrumbs'>
			<span class="el-breadcrumb__item__inner" @click='redirect(item.name)'>{{item.label}}</span>
			<span class="el-breadcrumb__separator">/</span>
		</span>
	</div>
</template>
<script>
	export default{
		props: {
			breadcrumbs: {
				type: Array,
				default: function() {
					return [{
						label: '豆瓣电影',
						name: 'index'
					}]
				}
			}
		},
		methods:{
			redirect:function(name){
				this.$router.push({ path: '/'+name})
			}
		}
	}
</script>
<style>
[data-dpr="2"] .el-breadcrumb {
	font-size: 30px;
}
[data-dpr="3"] .el-breadcrumb {
	font-size: 45px;
}
.el-breadcrumb {
   margin-bottom: 20px;
}
.el-breadcrumb:after, .el-breadcrumb:before {
    display: table;
    content: "";
}
.el-breadcrumb__item {
    float: left;
}
.el-breadcrumb__item__inner, .el-breadcrumb__item__inner a {
    -webkit-transition: color .15s linear;
    transition: color .15s linear;
    color: #475669;
}
.el-breadcrumb__item__inner:hover, .el-breadcrumb__item__inner a:hover {
    color: #20a0ff;
    cursor: pointer;
}
.el-breadcrumb__separator {
    margin: 0 8px;
    color: #c0ccda;
}
.el-breadcrumb__item:last-child .el-breadcrumb__item__inner, .el-breadcrumb__item:last-child .el-breadcrumb__item__inner:hover, .el-breadcrumb__item:last-child .el-breadcrumb__item__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__item__inner a:hover {
    color: #99a9bf;
    cursor: text;
}
.el-breadcrumb__item:last-child .el-breadcrumb__separator {
    display: none;
}
.el-breadcrumb:after {
    clear: both;
}
.el-breadcrumb:after, .el-breadcrumb:before {
    display: table;
    content: "";
}
</style>