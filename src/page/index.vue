<template>
  <div>
    <el-container>
      <el-header class="header">
        <Header></Header>
      </el-header>
      <el-container>
        <el-menu default-active="demo_1"
                 :router = "true"
                 class="el-menu-vertical-demo"
                 @open="handleOpen"
                 @close="handleClose"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 :collapse="isCollapse">
          <div class="logo">
            <i class="el-icon-menu" @click="handleMenu"></i>
          </div>
          <el-menu-item index="demo_1">
            <i class="el-icon-location"></i>
            <span slot="title">主页</span>
          </el-menu-item>
          <el-menu-item index="demo_2">
            <i class="el-icon-setting"></i>
            <span slot="title">系统</span>
          </el-menu-item>
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
        minPageHeight:0
      }
    },
    mounted () {
      var me =this;
      me.initMinPageHeight();
      window.onresize = function () {
        me.initMinPageHeight();
      };
      me.$router.push('/demo_1')
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleMenu:function(e){
        if(this.isCollapse){
          this.isCollapse = false;
        }else {
          this.isCollapse = true;
        }
        e.stopPropagation();
      },
      initMinPageHeight:function(){
        this.minPageHeight = $(window).height() - $(".page-main").offset().top;
      }
    }
  }
</script>
<style>
  a{
    color: #419EFF;
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
