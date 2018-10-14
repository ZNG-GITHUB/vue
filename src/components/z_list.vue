<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <ul>
      <li class="card-li" :class="{'li-select':(li.id == activeItem)}" @click="select(li.id)" v-for="li in list" v-bind:key="li.id">{{li.name}}</li>
    </ul>
    <!--<span style="cursor:auto">auto</span><br>
    <span style="cursor:crosshair">crosshair</span><br>
    <span style="cursor:default">default</span><br>
    <span style="cursor:e-resize">e-resize</span><br>
    <span style="cursor:help">help</span><br>
    <span style="cursor:move">move</span><br>
    <span style="cursor:n-resize">n-resize</span><br>
    <span style="cursor:ne-resize">ne-resize</span><br>
    <span style="cursor:nw-resize">nw-resize</span><br>
    <span style="cursor:pointer">pointer</span><br>
    <span style="cursor:progress">progress</span><br>
    <span style="cursor:s-resize">s-resize</span><br>
    <span style="cursor:se-resize">se-resize</span><br>
    <span style="cursor:sw-resize">sw-resize</span><br>
    <span style="cursor:text">text</span><br>
    <span style="cursor:w-resize">w-resize</span><br>
    <span style="cursor:wait">wait</span><br>-->
  </div>
</template>
<script>
  export default {
    props:{
      list:{
        type:Array
      },
      activeItem:{
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
      select:function (itemId) {
        this.activeItem = itemId;
        this.$emit("select",itemId);
      }
    }
  }
</script>
<style>
  .card-li{
    list-style: none;
    cursor:pointer;
    padding: 10px 20px;
  }
  .card-li.li-select{
    color: cadetblue;
    background-color: whitesmoke;
  }
  .card-li:hover{
    background-color: whitesmoke;
  }
</style>
