<template>
  <div style="background-image: url('static/image/login-bg.jpg')">
    <el-row type="flex" align="middle" justify="center" :style="{'min-height':pageHeight+'px'}">
      <el-col :span="6">
        <div class="login-box">
          <el-form ref="form" v-model="login_form" label-width="80px" style="color: black">
            <el-form-item label="用户名">
              <el-input v-model="login_form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="login_form.password" type="password"></el-input>
            </el-form-item>
            <el-form-item style="text-align: right">
              <el-button type="primary" @click="onSubmit">登录</el-button>
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
          pageHeight:0,
          login_form:{
              username:"admin",
              password:"123"
          }
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
        var loginInfo = this.login_form;
        var me = this;
        /*this.$api.post("/login",loginInfo,function (data) {
          if(data.code == 200){
            localStorage.setItem("token",data.data);
            me.$router.push("/index");
          }else{
            me.$message.error(data.message);
          }
        })*/
        me.$router.push("/index");
        event.preventDefault();
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
    background-color : rgba(255,255,255,0.5);
    box-shadow: 0px 0px 20px 0px #ffffff;
  }
  .el-form-item__label{
    color: #FFFFFF;
  }
</style>
