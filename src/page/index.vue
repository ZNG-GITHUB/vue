<template xmlns:v-bind="http://www.w3.org/1999/XSL/Transform">
  <div>
    <el-container>
      <el-header class="header">
        <Header :vm="VM" :user="loginUser" @title-click="handleMenu"></Header>
      </el-header>
      <el-container>
        <Menu :vm="VM"
              :data="menuData"
              :option="menuOption"
              :collapse="isCollapse"></Menu>
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
  import Vue from 'Vue'
  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'
  import Menu from '../components/menu.vue'

  const vm=new Vue();

  export default {
    components: { Header,Footer,Menu},
    data () {
      return {
        VM:vm,
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
          router:true,
          backgroundColor:"#545c64",
          textColor:"#fff",
          activeTextColor:"#ffd04b",
          defaultMenu:'permission',
        },
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
        me.$router.push('/permission')
      },
      handleMenu:function(){
        if(this.isCollapse){
          this.isCollapse = false;
        }else {
          this.isCollapse = true;
        }
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
