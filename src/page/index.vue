<template xmlns:v-bind="http://www.w3.org/1999/XSL/Transform">
  <div>
    <el-container>
      <el-header class="header">
        <Header :user="loginUser"
                background-color="darkcyan"
                color="#fff"
                @title-click="handleMenu"
                @menu-change="selectMenu"></Header>
      </el-header>
      <el-container>
        <Menu :data="menuData"
              :activeMenu="activeMenu"
              :option="menuOption"
              @select="selectMenu"
              :collapse="isCollapse"></Menu>
        <el-main class="page-main" :style="{'min-height':minPageHeight+'px'}">
          <div style="height: 30px;line-height: 30px">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item><a href="javascript:void(0);" @click="toMain">首页</a></el-breadcrumb-item>
              <el-breadcrumb-item v-if="activeMenu.name && activeMenu.path != 'main'">{{activeMenu.name}}</el-breadcrumb-item>
              <el-breadcrumb-item v-else></el-breadcrumb-item>
            </el-breadcrumb>
          </div>
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
  import Vue from 'Vue'
  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'
  import Menu from '../components/menu.vue'

  export default {
    components: { Header,Footer,Menu},
    data () {
      return {
        isCollapse: false,
        minPageHeight:0,
        menuData:[{
          id:'1',
          path:'main',
          icon:'el-icon-location',
          name:'主页',
          children:null
        },{
          id:'2',
          path:'',
          icon:'el-icon-setting',
          name:'系统',
          children:[{
            id:'21',
            path:'',
            name:'角色权限',
            children:[{
              id:'211',
              path:'permission',
              name:'权限管理'
            }]
          }]
        }],
        menuOption:{
          router:false,
          backgroundColor:"#545c64",
          textColor:"#fff",
          activeTextColor:"#ffd04b",
        },
        activeMenu:{},
        loginUser:{
            id:1,
          name:"John"
        }
      }
    },
    mounted () {
      this.init();
    },
    methods: {
      init(){
        let me =this;
        me.initMinPageHeight();
        window.onresize = function () {
          me.initMinPageHeight();
        };
        this.toMain();
      },
      toMain:function () {
        this.activeMenu = this.menuData[0];
      },
      handleMenu:function(){
        if(this.isCollapse){
          this.isCollapse = false;
        }else {
          this.isCollapse = true;
        }
      },
      selectMenu:function (key,keyPath) {
        //当前菜单项
        let menu = this.getMenuItem(key,this.menuData);
        if(menu.path){
          this.activeMenu = menu;
        }
      },
      getMenuItem:function (id,arr) {
        let cur = "";
        let me = this;
        arr.forEach(function (item,index) {
          if(item.id && item.id === id){
            cur = item;
            return false;
          }else if(item.children && item.children.length > 0){
            let rs = me.getMenuItem(id,item.children);
            if(rs){
              cur = rs;
              return false;
            }
          }
        });
        return cur;
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
  .page-main{
    background-color: whitesmoke;
  }
  .footer{
    padding: 0;
    height: 60px;
    line-height: 60px;
    margin-top: 10px;
  }
  .logo{
    height: 100px;
    text-align: center;
    width: 100%;
    line-height: 100px;
    color: #909399;
  }
</style>
