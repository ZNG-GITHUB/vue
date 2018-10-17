<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
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
        <el-card class="box-card card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>目录</span>
            <el-button class="card-button" type="primary" plain>保存</el-button>
          </div>
          <el-tree :data="menuData"
                   :props="defaultTreeProps"
                   node-key="id"
                   @node-click="handleMenuTreeNodeClick"
                   :default-checked-keys="[1]"
                   show-checkbox></el-tree>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>权限</span>
            <el-button class="card-button" type="primary" plain>保存</el-button>
          </div>
          <div>
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAllPermission" @change="handleCheckAllPermissionsChange">全选</el-checkbox>
            <div style="margin: 15px;">
              <el-checkbox-group v-model="checkedPermission" @change="handleCheckedPermissionsChange">
                <el-row :gutter="20" v-for="permission in permissionData" :key="permission.id">
                  <el-col :span="24" style="height: 25px">
                    <el-checkbox  :label="permission.id" >{{permission.name}}</el-checkbox>
                  </el-col>
                </el-row>
              </el-checkbox-group>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import ZList from '../../components/z_list.vue'
  const data = [{
    "id":1,
    "name":"查看"
  }, {
    "id":2,
    "name":"增加"
  }, {
    "id":3,
    "name":"编辑"
  }, {
    "id":4,
    "name":"删除"
  }];
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
        selectedRole:"",
        menuData:[{
          id:'1',
          path:'main',
          icon:'el-icon-location',
          name:'主页',
          disabled: true,
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
        defaultTreeProps: {
          children: 'children',
          label: 'name'
        },
        checkAllPermission: false,
        checkedPermission: ['查看'],
        permissionData: data,
        isIndeterminate: true
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
      },
      handleMenuTreeNodeClick:function(data) {
        console.log(data);
      },
      handleCheckAllPermissionsChange(val) {
        this.checkedPermission = val ? data.map(function (item) {
          return item.id;
        }) : [];
        this.isIndeterminate = false;
      },
      handleCheckedPermissionsChange(value) {
        let checkedCount = value.length;
        this.checkAllPermission = checkedCount === this.permissionData.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.permissionData.length;
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
