<template>
<div class="doctor4">
    <h3>王安安 <el-tag  type="success">男</el-tag> <el-tag>23岁</el-tag></h3>
    <el-alert
        title="看诊完成"
        type="success"
        description="病人情况很好，很快能痊愈。"
        show-icon>
    </el-alert>
    <h4>其他病人</h4>
    <doctor5></doctor5>
    <doctor5></doctor5>
    <doctor5></doctor5>


</div>
</template>

<script>
import doctor5 from '~/components/doctor5.vue';

export default {
  name: 'doctor4',
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
    .doctor4{
        
    }
@media screen and (min-width:900px) {
    
}
</style>