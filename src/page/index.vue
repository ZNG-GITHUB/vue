<template>
  <div>
    <el-container>
      <el-header class="header">
        <Header></Header>
      </el-header>
      <el-container>
        <el-menu default-active="1-4-1"
                   class="el-menu-vertical-demo"
                   @open="handleOpen"
                   @close="handleClose"
                   background-color="#545c64"
                   text-color="#fff"
                   active-text-color="#ffd04b"
                   :collapse="isCollapse">
          <div style="width: 200px;height: 100px">
            <i class="el-icon-menu" @click="handleMenu"></i>
          </div>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
        <el-main class="page-main" :style="{'min-height':minPageHeight+'px'}">
          <div id="main-box"></div>
          <el-footer>
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
    },
    methods: {
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
</style>
