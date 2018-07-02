<template>
  <header class="header">
    <div class="header-title">
      <h3>Vue Demo by ZNG</h3>
    </div>

    <el-row :gutter="20">
      <el-col :span="12">
        <div class="user-icon">
          <img src="static/image/default-head.png"/>
        </div>
      </el-col>
    </el-row>
    <!--<div class="header-user">

      <div class="user-info">
        <span>系统管理员</span>
      </div>
    </div>-->
  </header>
</template>
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
    display: inline-block;
  }
  .user-info{
    margin-left: 10px;
    height: 38px;
    line-height: 38px;
    display: inline-block;
  }
  .header-user{
    float: right;
    padding-right: 100px;
    height: 60px;
    line-height: 60px;
  }

</style>
