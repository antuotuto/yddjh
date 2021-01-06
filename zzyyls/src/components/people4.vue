<template>
<div class="people4">
    <h4>2018年10月12日 <el-tag size="medium"  type="success">感冒</el-tag></h4>
    <h5>手术方式治疗</h5>
    <p>颈椎病的治疗方式分为手术...</p>
    <div class="drug_p">
        <drug></drug>
        <drug3></drug3>
    </div> 
</div>
</template>

<script>
import drug from '~/components/drug.vue';
import drug3 from '~/components/drug3.vue';


export default {
  data() {
    return {

    }
  },
  components: {
      drug,
      drug3
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
  
}
@media screen and (min-width:900px) {
    
}

.people4{
    background: #f2f3f5;
    padding: 8px;
    border-radius: 3px;
    margin-top: 10px;
    h4{
        margin: 8px 0;
    }
    h5{
        margin: 2px 0;
        color: #5e6d82;
    }
    p{
        color:rgb(71, 71, 71);
        font-size: 8px;
    }
}


</style>


