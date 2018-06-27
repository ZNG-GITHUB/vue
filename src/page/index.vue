<template>
  <div>index page</div>
</template>
<script>
  export default {
    created () {
        var me = this;
        this.$api.get('user/getUsers', null, r => {
          me.$message.success("请求成功");
          console.log(r)
        })
    }
  }
</script>
