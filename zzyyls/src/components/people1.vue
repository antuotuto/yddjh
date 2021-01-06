<template>
<div class="people1">
    <h3>王安安 <el-tag  type="success">男</el-tag>  <el-tag>23岁</el-tag></h3>
    <p class="doc_h">痊愈的程度为医生的评价，请关注医生对病情的回复。</p>
    <img src="https://cdn.nlark.com/yuque/0/2018/jpeg/92616/1543724341302-assets/web-upload/7f119bd6-6298-44fc-9f11-778d28be523b.jpeg" alt="">
    <h5>痊愈程度</h5>
    <p>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="30" status="exception"></el-progress>
    </p>

    <div class="c-t">
        <router-link to="/Peoplex/0">    
            <el-button type="success" plain icon="el-icon-news">疾病详情</el-button>
        </router-link>
    </div>

</div>
</template>

<script>



export default {
  name: 'people1',
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
@media screen and (max-width:900px) {
  
}
@media screen and (min-width:900px) {
    
}

h3:after {
    content: " ";
    width: 14px;
    height: 6px;
    background-color: #409EFF;
    display: block;
    margin: 12px 0 20px;
}
img{
    border-radius: 3px;
}

.doc_h{
    background-color: #fffcef;
    border: 1px solid #fc9;
    color: #f96;
    padding: 5px 3%;
    font-size: 12px;
    line-height: 150%;
    text-align: center;
    margin-bottom: 15px;
    font-weight: 400;
}

</style>


