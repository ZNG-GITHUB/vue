<template>
  <header class="header">
    <div class="header-title">
      <h3>Vue Demo by ZNG</h3>
    </div>


    <div class="header-user">
      <el-row>
        <el-col :span="8">
          <div class="user-icon">
            <img src="static/image/default-head.png"/>
          </div>
        </el-col>
        <el-col :span="16">
          <el-dropdown @command="handleCommand">
            <div class="user-name el-dropdown-link">
              <span>系统管理员</span>
            </div>
            <el-dropdown-menu slot="dropdown" split-button="true">
              <el-dropdown-item command="a">查看用户信息</el-dropdown-item>
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
    data () {
      return {

      }
    },
    mounted () {

    },
    methods: {
      handleCommand(key){
        switch (key){
          case 'logout':
            this.handleLoginOut();
        }
      },
      handleLoginOut(){
        var me =this;
        this.$api.get("/01/logout",null,function (data) {
          if(data.code != 200){
            me.$message.error(data.message);
          }
        })
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
</style>
