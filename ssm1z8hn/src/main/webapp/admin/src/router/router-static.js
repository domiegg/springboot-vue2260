import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import xueyuantongji from '@/views/modules/xueyuantongji/list'
    import zhuanyetongji from '@/views/modules/zhuanyetongji/list'
    import chengshitongji from '@/views/modules/chengshitongji/list'
    import xingyexinxi from '@/views/modules/xingyexinxi/list'
    import xitonggonggao from '@/views/modules/xitonggonggao/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import xinzitongji from '@/views/modules/xinzitongji/list'
    import xingyetongji from '@/views/modules/xingyetongji/list'
    import zhuanyexinxi from '@/views/modules/zhuanyexinxi/list'
    import xueyuanxinxi from '@/views/modules/xueyuanxinxi/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
          ,{
	path: '/xueyuantongji',
        name: '学院统计',
        component: xueyuantongji
      }
          ,{
	path: '/zhuanyetongji',
        name: '专业统计',
        component: zhuanyetongji
      }
          ,{
	path: '/chengshitongji',
        name: '城市统计',
        component: chengshitongji
      }
          ,{
	path: '/xingyexinxi',
        name: '行业信息',
        component: xingyexinxi
      }
          ,{
	path: '/xitonggonggao',
        name: '系统公告',
        component: xitonggonggao
      }
          ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
          ,{
	path: '/xinzitongji',
        name: '薪资统计',
        component: xinzitongji
      }
          ,{
	path: '/xingyetongji',
        name: '行业统计',
        component: xingyetongji
      }
          ,{
	path: '/zhuanyexinxi',
        name: '专业信息',
        component: zhuanyexinxi
      }
          ,{
	path: '/xueyuanxinxi',
        name: '学院信息',
        component: xueyuanxinxi
      }
        ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
