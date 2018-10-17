<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <ul>
      <li class="card-li" :class="{'li-select':(li.id == activeItem)}" @click="select(li.id)" v-for="li in list" v-bind:key="li.id">{{li.name}}</li>
    </ul>
  </div>
</template>
<script>
  export default {
    props:{
      list:{
        type:Array
      },
      activeItem:{}
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
    font-size: 14px;
  }
  .card-li.li-select{
    color: cadetblue;
    background-color: #E6E6E6;
  }
  .card-li:hover{
    background-color: whitesmoke;
  }
</style>
