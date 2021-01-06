<template>
<div class="people2">
    <logistics></logistics>
    <div class="c-t">
        <router-link to="/Peoplex">    
            <el-button type="success"  icon="el-icon-arrow-left">详情</el-button>
        </router-link>
    </div>
</div>
</template>

<script>
import logistics from '~/components/logistics.vue';



export default {
  name: 'people2',
  data() {
    return {

    }
  },
  components: {
      logistics
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
@media screen and (max-width:900px) {
  .people2{
        background: #fff;
        border-radius: 2px;
        padding: 15px 10px;
    }
}
@media screen and (min-width:900px) {
    .people2{
        background: #fff;
        border-radius: 2px;
        padding: 15px 15px 50px 15px;
    }
}

.c-t{
    margin:  30px 0 15px 0;
}


.fade-enter-active,
.fade-leave-active {
    transition: all 0.4s ease;
}
.fade-enter,
.fade-leave-active {
    opacity: 0;
}


</style>


