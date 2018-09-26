<template xmlns:v-bind="http://www.w3.org/1999/XSL/Transform">
  <div>
    <el-container>
      <el-header class="header">
        <Header @title-click="handleMenu"></Header>
      </el-header>
      <el-container>
        <el-menu :default-active="activeMenu"
                 :router = "true"
                 class="el-menu-vertical-demo"
                 @open="handleOpen"
                 @close="handleClose"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 :collapse="isCollapse">
          <template v-for="item in menuData">
            <el-submenu v-if="item.children" :index="item.id" v-bind:key="item.id">
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{item.name}}</span>
              </template>
              <el-submenu v-for="item_2 in item.children" v-if="item_2.children" :index="item_2.id" v-bind:key="item_2.id">
                <template slot="title">
                  <span>{{item_2.name}}</span>
                </template>
                <el-menu-item v-for="item_3 in item_2.children" :index="item_3.path" v-bind:key="item_3.id">
                  <span slot="title">{{item_3.name}}</span>
                </el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="item_2.path" v-bind:key="item_2.id">
                <span slot="title">{{item_2.name}}</span>
              </el-menu-item>
            </el-submenu>
            <el-menu-item v-else :index="item.path" v-bind:key="item.id">
              <i :class="item.icon"></i>
              <span slot="title">{{item.name}}</span>
            </el-menu-item>
          </template>
          <!--<el-menu-item v-for="item in menuData" :index="item.path" v-bind:key="item.id">
            <i :class="item.icon"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>-->
        </el-menu>
        <el-main class="page-main" :style="{'min-height':minPageHeight+'px'}">
          <div id="main-box">
            <!-- 路由出口 -->
            <!-- 路由匹配到的组件将渲染在这里 -->
            <router-view></router-view>
          </div>
          <el-footer class="footer">
            <Footer></Footer>
          </el-footer>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'
  export default {
    components: { Header,Footer},
    data () {
      return {
        isCollapse: false,
        minPageHeight:0,
        menuData:[{
          id:'1',
          path:'demo_1',
          icon:'el-icon-location',
          name:'主页',
          children:null
        },{
          id:'2',
          path:'',
          icon:'el-icon-setting',
          name:'系统',
          children:[{
            id:'3',
            path:'',
            icon:'el-icon-setting',
            name:'第一层',
            children:[{
              id:'4',
              path:'demo_2',
              icon:'el-icon-setting',
              name:'第二层'
            }]
          }]
        }],
        activeMenu:'demo_1',
        user:{}
      }
    },
    mounted () {
      this.init();
    },
    methods: {
      init(){
        let me =this;
        me.initMinPageHeight();
//        me.getMenu();
        window.onresize = function () {
          me.initMinPageHeight();
        };
        me.$router.push('/demo_1')
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleMenu:function(){
        if(this.isCollapse){
          this.isCollapse = false;
        }else {
          this.isCollapse = true;
        }
      },
      getUser:function (user) {
          this.user = user;
      },
      initMinPageHeight:function(){
        this.minPageHeight = $(window).height() - $(".page-main").offset().top;
      }
    }
  }
</script>
<style>
  a{
    color: #FFFFFF;
    text-decoration: none;
  }
  body{
    color: #666;
    padding: 0;
    margin: 0;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .page-main{
    background-color: whitesmoke;
  }
  .header{
    background-color: darkcyan;
    color: #fff;
  }
  .footer{
    padding: 0;
    height: 60px;
    line-height: 60px;
  }
  .logo{
    height: 100px;
    text-align: center;
    width: 100%;
    line-height: 100px;
    color: #909399;
  }
</style>
