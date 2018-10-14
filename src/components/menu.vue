<template >
  <el-menu :default-active="activeMenu.id"
             :data="data"
             :router="option.router"
             class="el-menu-vertical-demo"
             @open="handleOpen"
             @close="handleClose"
             @select="handleSelect"
             :background-color="option.backgroundColor"
             :text-color="option.textColor"
             :active-text-color="option.activeTextColor"
             :collapse="collapse">
    <template v-for="item in data">
      <el-submenu v-if="item.children" :index="item.id" v-bind:key="item.id">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
        </template>
        <el-submenu v-for="item_2 in item.children" v-if="item_2.children" :index="item_2.id" v-bind:key="item_2.id">
          <template slot="title">
            <span>{{item_2.name}}</span>
          </template>
          <el-menu-item v-for="item_3 in item_2.children" :index="item_3.id" v-bind:key="item_3.id">
            <span slot="title">{{item_3.name}}</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="item_2.id" v-bind:key="item_2.id">
          <span slot="title">{{item_2.name}}</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item v-else :index="item.id" v-bind:key="item.id">
        <i :class="item.icon"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script>
  export default {
    props:{
      option:{
          type:Object
      },
      activeMenu:{
          type:Object
      },
      collapse:{
          type:Boolean
      },
      backgroundColor:{
        type:String
      },
      data:{
          type:Array
      }
    },
    watch:{
      activeMenu:function (newVal,oldVal) {
        if(newVal.path){
          this.$router.push(newVal.path);
        }
      }
    },
    data () {
      return {

      }
    },
    mounted () {

    },
    methods: {
        handleOpen(key, keyPath) {
          this.$emit('open',key, keyPath);
        },
        handleClose(key, keyPath) {
          this.$emit('close',key, keyPath);
        },
        handleSelect(key, keyPath) {
          this.$emit('select',key, keyPath);
        }
    }
  }
</script>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
