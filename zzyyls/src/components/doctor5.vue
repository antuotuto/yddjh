<template>
<div class="doctor5">
    <div class="img">
        <img src="https://cdn.yuque.com/yuque/2018/jpeg/avatar/d8bae961-b232-4233-a202-693e586b593c.jpeg?x-oss-process=image/resize,m_fill,w_64,h_64/format,png" alt="">
    </div>
    <div>
        <router-link to="/Home/1">
            <h5>王安安 <el-tag size="small" type="success">男</el-tag> <el-tag size="small">23岁</el-tag> <el-tag size="small" type="warning">感冒</el-tag> <el-tag size="small" type="danger">胃病</el-tag></h5>
            <div class="jb-list">
                <el-alert
                    title="患者已经发烧到40°C"
                    type="error">
                </el-alert>
            </div>
        </router-link>
    </div>
</div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
       value5: 3.7
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
    .doctor5{
        padding: 15px;
        background-color: #fbf9f9;
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
    .doctor5{
        padding: 15px;
        background-color: #fbf9f9;
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
}
</style>


