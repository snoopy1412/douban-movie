<template>
  <div id="app">
      <div class="header">
        <span class='logo'>豆瓣电影</span>
      </div>
    <!-- <img src="./assets/logo.png"> -->
    <!-- <hello></hello> -->
      <div class="main container">
         <router-view></router-view>
      </div>
      <Tabs :tabs="tabNavs"/></Tabs>
    
  </div>
</template>
<script>

import Coming_soon from './views/list.vue'
import In_theaters from './views/list.vue'
import Top250 from './views/list.vue'
import Tabs from './components/tabs.vue'

export default {
  components: {
    Coming_soon,
    In_theaters,
    Top250,
    Tabs
  },
  data() {
    return {
      tabNavs: [{
        type: 'index',
        title: '首页'
      },{
        type: 'in_theaters',
        title: '正在热映'
      },{
        type: 'coming_soon',
        title: '即将上映'
      },{
        type: 'top250',
        title: 'Top250'
      }]
    }
  }
}
</script>

<style>
html * {max-height:1000000px;}
body{
  padding: 0;
  margin: 0;
}
[data-dpr="2"] .header {
  font-size: 48px;
}
[data-dpr="3"] .header {
  font-size: 72px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container{
  margin-left: auto;
  margin-right: auto;
  padding: 0.27rem;
}
.main{
  padding-top: 90px;
  padding-bottom: 90px;
}
.header{
  z-index: 5;
  position: fixed;
  width: 100%;
  padding:0.2rem 0.3rem;
  background-color: #27a;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0,0,0,.15)
}
.logo{
    display: block;
    overflow: hidden;
    color: #fff;
    text-decoration: none;
    font-size: 35px;
}
</style>
