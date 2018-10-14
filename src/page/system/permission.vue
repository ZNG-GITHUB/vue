<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="box-card card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>角色</span>
          </div>
          <Z-List :list="roleList" :activeItem="selectedRole" @select="selectRole"></Z-List>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card" shadow="hover" style="height: 200px">
          <div slot="header" class="clearfix">
            <span>目录</span>
            <el-button class="card-button" type="primary" plain>保存</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card" shadow="hover" style="height: 200px">
          <div slot="header" class="clearfix">
            <span>权限</span>
            <el-button class="card-button" type="primary" plain>保存</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import ZList from '../../components/z_list.vue'
  export default {
    components: { ZList},
    data(){
      return {
        roleList:[{
          id:1,
          name:"管理员"
        },{
          id:2,
          name:"开发人员"
        },{
          id:3,
          name:"测试人员"
        }],
        selectedRole:""
      }
    },
    mounted () {
      if(this.roleList[0]){
        this.selectedRole=this.roleList[0].id;
      }
    },
    methods: {
      selectRole:function (key) {
        this.selectedRole = key;
      }
    }
  }
</script>
<style>
  .card{
    min-height: 100px;
  }
  .card-button{
    float: right;
    padding: 3px 0;
    height: 30px;
    width: 80px;
    margin-top: -5px;
  }
</style>
