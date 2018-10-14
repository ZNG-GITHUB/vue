<template>
  <header class="header" :style="'background-color:'+backgroundColor+';color:'+color">
    <div class="header-title">
      <a href="javascript:void(0);" @click="handleTitleClick"><h3>Vue Demo by ZNG</h3></a>
    </div>
    <div class="header-user">
      <el-row>
        <el-col :span="8">
          <div class="user-icon">
            <img v-if="user && user.icon" src="user.icon"/>
            <img v-else src="static/image/default-head.png"/>
          </div>
        </el-col>
        <el-col :span="16">
          <el-dropdown @command="handleCommand">
            <div class="user-name el-dropdown-link">
              <span v-if="user">{{user.name}}</span>
              <span v-else>默认</span>
            </div>
            <el-dropdown-menu slot="dropdown" split-button="true">
              <el-dropdown-item command="showUser">查看用户信息</el-dropdown-item>
              <el-dropdown-item command="d" disabled>修改密码</el-dropdown-item>
              <el-dropdown-item command="logout" divided>注销</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </div>
  </header>
</template>
<script>
  export default {
    props:{
      user:{
        type:Object
      },
      vm:{
        type:Object
      },
      backgroundColor:{
        type:String
      },
      color:{
        type:String
      }
    },
    data () {
      return {
      }
    },
    mounted () {

    },
    methods: {

      handleTitleClick(){
        this.$emit('title-click');
      },

      handleCommand(key){
        switch (key){
          case 'showUser':
              this.$emit('menu-change',"211");
              break;
          case 'logout':
              this.handleLoginOut();
              break;
        }
      },
      handleLoginOut(){
        var me =this;
        me.$router.push("/");
      }
    }
  }
</script>
<style>
  img{
    width: 100%;
    height: 100%;
  }
  .header-title{
    float: left;
    padding-left: 50px;
  }
  .user-icon{
    width: 38px;
    height: 38px;
    border: 1px solid;
    border-radius: 50%;
    line-height: 38px;
    margin-top: 12px;
  }
  .user-name{
    height: 60px;
    line-height: 60px;
  }
  .header-user{
    width: 10%;
    float: right;
    height: 60px;
    line-height: 60px;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #FFFFFF;
  }
  .header{
    height: 60px;
    padding: 0;
  }
</style>
