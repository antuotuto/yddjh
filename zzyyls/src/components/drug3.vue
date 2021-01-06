<template>
<div class="drug3">
    <div class="img">
        <img src="https://cdn.nlark.com/yuque/0/2018/png/92616/1544708314900-b3736042-3295-418e-b302-a866e1142958.png" alt="">
    </div>
    <div>
        <div>
            <h5>感冒灵颗粒 10g*9袋 <el-tag size="small" type="success">处方药</el-tag> <el-tag size="small">饭后服用</el-tag> <el-tag size="small" type="danger">孕</el-tag></h5>
            <div class="jb-list">
                <el-alert
                    title="每天3次，每次1粒"
                    type="warning">
                </el-alert>
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'drug3',
  data() {
    return {
       
    }
  },
  components: {
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
  .drug3{
        padding: 12px;
        background-color: #fbf9f9;
        border-radius: 3px;
        display: flex;
        flex-direction: row;
        justify-content: inherit;
        margin-top: 15px;
        h5{
            margin:0 0 5px 0;
        }
        .img{
            height:70px;
            width:80px;
            overflow: hidden;
            margin-right: 20px;
            border-radius: 3px;
        }
    }
@media screen and (min-width:900px) {
}
</style>


