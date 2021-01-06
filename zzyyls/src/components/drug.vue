<template>
<div class="drug">
    <div class="img">
        <img src="https://cdn.nlark.com/yuque/0/2018/jpeg/92616/1544639048326-087dad27-f084-4b1d-949f-4918cb96d57b.jpeg" alt="">
    </div>
    <div>
        <router-link to="/Home/6">
            <h5>碳酸钙D3颗粒 朗迪 3g*12袋 <el-tag size="small" type="success">处方药</el-tag> <el-tag size="small">饭后服用</el-tag> <el-tag size="small" type="danger">孕</el-tag></h5>
            <div class="jb-list">
                <el-alert
                    title="每天3次，每次1粒"
                    type="warning">
                </el-alert>
            </div>
        </router-link>
    </div>
</div>
</template>

<script>

export default {
  name: 'drug',
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
  .drug{
        padding: 15px;
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


