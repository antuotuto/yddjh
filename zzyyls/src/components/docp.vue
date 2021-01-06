<template>
<div class="docp">
    <h3>陈元秀 <el-tag  type="success" size="medium">男</el-tag>  <el-tag size="medium">45岁</el-tag></h3>
    <div class="docp_p">
        <img src="http://clinicclub-10009738.image.myqcloud.com/ebcf089c-0cad-4be5-8c89-0487e11058dc" alt="">
        <h4>医院</h4>
        <p>武汉大学人民医院</p>
        <h4>科室</h4>
        <p>心血管内科</p>
        <h4>出生年月</h4>
        <p>1963年4月</p>
        <h4>学位</h4>
        <p>
            <el-tag type="success" size="small">医学博士</el-tag>
            <el-tag type="warning" size="small">副教授</el-tag>
            <el-tag type="info" size="small">主任医师</el-tag>
            <el-tag type="success" size="small">心功能科主任</el-tag>
            <el-tag type="warning" size="small">湖北省心电生理与起搏学会委员</el-tag>
            <el-tag type="success" size="small">武汉市心电学会副主委</el-tag>
        </p>
        <h4>奖项</h4>
        <p>获国家科技进步奖一项和湖北省科技进步奖一、二等奖各2项。曾赴加拿大西安大略大学学习进修。</p>
        <p>并作为医疗专家赴莱索托王国援外两年。</p>
        <p>参编学术专著十五部，发表论文50余篇。</p>
        <h4>评价</h4>
        <p>对各种快速心律失常及缓慢性心律失常有较丰富的临床经验。</p>
        <h4>擅长</h4>
        <p>处理各种心血管急症问题，对冠心病各种临床类型的药物治疗和非药物治疗经验丰富。</p>
    </div>

    <div class="c-t">
        <el-button type="success" plain icon="el-icon-arrow-left" @click="back">治疗详情</el-button>
    </div>

    <div class="left_top">
        <h1>医生</h1>
    </div>
    

</div>
</template>

<script>

export default {
  name: 'docp',
  data() {
    return {

    }
  },
  components: {

  },
  methods: {
    back(){
        this.$router.go(-1)
    }

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

.docp{
    position: relative;
    .left_top{
        position: absolute;
        top:-25px;
        right:0px;
        background: #409EFF;
        color:#fff;
        width:30px;
        height:30px;
        line-height: 30px;
        font-size: 5px;
        text-align: center;
        border-radius: 100%;
        // transform:rotate(50deg);
        h1{
            margin: 0;
        }
    }
}

h3:after {
    content: " ";
    width: 14px;
    height: 6px;
    background-color: #409EFF;
    display: block;
    margin: 12px 0 20px;
}

h5{
    font-size: 15px;
    color: #123;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 1px;
}
p{
    font-size: 14px;
    font-weight: 300;
    color: #231f20;
    padding: 5px 0;  
    margin:7px 0 0 0;
}



.docp_p{
    .el-tag--small{
        margin-top: 3px;
    }
    img{
        width:100px;
        border-radius: 100px;
    }
}

    

.c-t{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;
}

</style>


