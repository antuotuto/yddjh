<template>
<div class="doctor1">
  <div>
        <h3>2018年10月24日</h3>
        <el-alert
          title="10:00 急症"
          type="error"
          :closable="false">
        </el-alert>
        <router-link to="/Home/1" class="an">
          <doctor5></doctor5>
        </router-link>
        <router-link to="/Home/1">
          <doctor5></doctor5>
        </router-link>
        <router-link to="/Home/1">
          <doctor5></doctor5>
        </router-link>
        <router-link to="/Home/1">
          <doctor5></doctor5>
        </router-link>
    </div>
</div>
</template>

<script>
import doctor5 from '~/components/doctor5.vue';

export default {
  name: 'home',
  data() {
    return {
       
    }
  },
  components: {
    doctor5
  },
  methods: {
     

  },
  watch: {

  },
  created() {

  },
}
</script>

<style scoped lang="scss">
  .doctor5{
        padding: 15px;
        background-color: #ebeef5;
        border-radius: 4px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 15px;
        h5{
            margin:0 0 15px 0;
        }
        .img{
            height:50px;
            width:50px;
            border-radius: 50%;
            overflow: hidden;
        }
    }
@media screen and (min-width:900px) {
    
}
</style>


