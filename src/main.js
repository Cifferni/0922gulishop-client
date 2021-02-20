import Vue from 'vue'
import App from '@/App'
import router from '@/router'
// import store from '@/store'//只是简写
import {default as store} from '@/store'//全写

import 'swiper/css/swiper.css' //引入swiper的css

import '@/mock/mockServer'  //引入mockServer，让模拟的接口生效

import * as API from '@/api' //直接获取接口请求函数文件暴露出来的对象


//无论什么样的暴露方式，往外暴露的都是一个对象
//只不过，暴露的对象形成方式不一样

//默认暴露
// export default {a:100}
// 暴露的是一个对象，这个对象里面是以default为属性名，以default后面的东西为值的对象 *****
// {
//   default:{a:100}
// }

// 引入的时候，如果是默认暴露
// 通常我们是这样引入   import a from './xxx.js'  它其实是一个简写方式
// 全写应该是   import {default as a} from './xxx.js'
// 由于默认暴露引入的时候如果全写会很麻烦，因此才出现上面我们的简写


//分别暴露
// export const a = 100
// export const reqXX = () => {}
//最终暴露出文件的时候，会自动的把分别暴露的信息封装为一个对象 ****** 
// {
//   a:a,
//   reqXX:reqXX
// }

//引入的时候
// import {reqXX} from './xx.js'
// import {a} from './xx.js


//整体暴露
// const a = 100
// const obj = {a:100}

//最终暴露的就是你export 后面的对象  ********
// export {
//   a,
//   obj
// }

// 引入的时候
// import {a} from './xx.js'
// import {obj} from './xx.js'


//无论什么暴露方式，如果你想拿到暴露出文件的整个那个对象，就得这么干
// import * as xxx from './xx.js'   





// import '@/api'

//第二种测试接口请求函数方式
// import {reqCategoryList} from '@/api'
// reqCategoryList()

import TypeNav from '@/components/TypeNav'
import SlideLoop from  '@/components/SlideLoop'
import Pagination from '@/components/Pagination'
//全局注册的组件，如果一个非路由组件被多个组件使用，那么定义在components，注册在全局
Vue.component('TypeNav',TypeNav)
Vue.component('SlideLoop',SlideLoop)
Vue.component('Pagination',Pagination)

// @是一个别名，是个小名  代表的就是我们的src的路径
Vue.config.productionTip = false






// new Vue({
//   render: h => h(App),
// }).$mount('#app')

new Vue({
  beforeCreate(){
    Vue.prototype.$bus = this   //安装总线  代表任意组件内部都可以通过this.$bus访问到vm实例（总线）
    Vue.prototype.$API = API
  },
  el:'#app',
  render: h => h(App),
  router,  //我们所有的组件内部都可以使用this.$router和this.$route
  store   //注册上我们所有的组件都可以拿到this.$store
})