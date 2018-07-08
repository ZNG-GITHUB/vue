<template>
  <div>
    <span>这个第二个Demo页面</span><br/><br/><br/>
    <div>
      <label>Token : {{token}}</label>
    </div><br/><br/><br/>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        token:"暂无"
      }
    },
    mounted () {
      this.getToken();
    },
    methods: {
      getToken(){
        var me = this;
        this.$api.get("/01/token",null,function (data) {
          if(data.code == 200){
            me.token = data.data;
          }else{
            me.$message.error(data.message);
          }
        })
      }
    }
  }
</script>
