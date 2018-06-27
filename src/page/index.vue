<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <Header></Header>
    <div class="article_list">
      <ul>
        <li v-for="i in list" v-bind:key = "i">
          <time v-text="i.create_at"></time>
          <router-link :to="'/content/' + i.id">
            {{ i.userName }}
          </router-link>
        </li>
      </ul>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'
  export default {
    components: { Header, Footer },
    data () {
      return {
        list: []
      }
    },
    created () {
        this.getUser();
    },
    methods: {
        getUser () {
          var me = this;
          this.$api.get('user/getUsers', null, r => {
            me.$message.success("请求成功");
            if(r.data){
              me.list = r.data;
            }
          })
        }
    }
  }
</script>
<style>
  .article_list {margin: auto;}
</style>
