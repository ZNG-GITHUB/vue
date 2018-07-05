<template>
  <div style="background-image: url('static/image/login-bg.jpg')">
    <el-row type="flex" align="middle" justify="center" :style="{'min-height':pageHeight+'px'}">
      <el-col :span="6">
        <div class="login-box">
          <el-form ref="form" label-width="80px" style="color: black">
            <el-form-item label="用户名">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input></el-input>
            </el-form-item>
            <el-form-item style="text-align: right">
              <el-button type="primary" @click="onSubmit">登录</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data(){
        return {
          pageHeight:0
        }
    },
    mounted () {
      var me =this;
      me.initPageHeight();
      window.onresize = function () {
        me.initPageHeight();
      };
    },
    methods: {
      onSubmit(){
          this.$router.push("/index");
      },
      initPageHeight:function(){
        this.pageHeight = $(window).height();
      }
    }
  }
</script>
<style>
  body{
    margin: 0;
    padding: 0;
  }
  .login-box{
    border-radius: 10px;
    padding-top: 40px;
    padding-right: 30px;
    padding-bottom: 1px;
    background-color : rgba(255,255,255,0.5)
  }
  .el-form-item__label{
    color: #FFFFFF;
  }
</style>
