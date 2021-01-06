<template>
<div class="drug1">
    <h3>碳酸钙D3颗粒 <el-tag size="small" type="success">处方药</el-tag> <el-tag size="small">饭后服用</el-tag> <el-tag size="small" type="danger">孕</el-tag></h3>
    <img src="https://cdn.nlark.com/yuque/0/2018/jpeg/92616/1544639048326-087dad27-f084-4b1d-949f-4918cb96d57b.jpeg" alt="">
    <h4>通用名称</h4>
    <p>碳酸钙D3颗粒</p>
    <h4>商品名称</h4>
    <p>朗迪</p>
    <h4>英文名称</h4>
    <p>Calcium Carbonate and Vitamin D<sub>3</sub> Tablets</p>
    <h4>药品分类</h4>
    <p><el-tag size="small" type="success">处方药</el-tag> <el-tag size="small" type="warning">儿童可使用</el-tag> <el-tag size="small">饭后服用</el-tag> <el-tag size="small" type="danger">孕</el-tag></p>
    <h4>成份</h4>
    <p>本品为复方制剂，每片含碳酸钙1.25克（相当于钙500毫克），维生素D3 200国际单位。辅料为甘露醇、聚维酮K30、香精、阿司帕坦、硬脂酸镁。</p>
    <h4>适应症</h4>
    <p>用于儿童、妊娠和哺乳期妇女、更年期妇女、老年人等的钙补充剂，并帮助防治骨质疏松症。</p>
    <h4>用法用量</h4>
    <p>口服，咀嚼后咽下。成人，一次1片，一日1-2次，一日最大量不超过3片：儿童，一次半片，一日1-2次。</p>
    <h4>禁忌</h4>
    <p>高钙血症、高尿酸血症、含钙肾结石或有肾结石病史者禁用。</p>
    <h4>注意事项</h4>
    <p>心肾功能不全者慎用。如服用过量或出现严重不良反应，应立即就医。对本品过敏者禁用，过敏体质者慎用。本品性状发生改变时禁止使用。请将本品放在儿童不能接触的地方。如正在使用其他药品，使用本品前请咨询医师。</p>
    <h4>药物相互作用</h4>
    <p>本品不宜与洋地黄类药物含用。大量饮用含酒精和咖啡因的饮料以及大量吸烟，均会抑制钙剂的吸收。大量进食富含纤维素的食物能抑制钙的吸收，因钙与纤维素结合成不易吸收的化合物。</p>
    <h4>批准文号</h4>
    <p>国药准字H20093675</p>
    <h4>生产企业</h4>
    <p>北京康远制药有限公司</p>

    <div class="c-t">
        <el-button type="success" plain icon="el-icon-arrow-left" @click="back">治疗详情</el-button>
    </div>

    <div class="left_top">
        <h1>药品</h1>
    </div>
    

</div>
</template>

<script>



export default {
  name: 'drug1',
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
  .drug1{
        h3:after {
            content: " ";
            width: 14px;
            height: 6px;
            background-color: #f56c6c;
            display: block;
            margin: 12px 0 20px;
        }
        h4{
            font-size: 15px;
            color: #123;
            font-weight: 600;
            margin-top: 20px;
            margin-bottom: 1px;
        }
        p{
            font-size: 15px;
            font-weight: 300;
            color: #231f20;
            padding: 5px 0;  
            margin:7px 0 0 0;
        }
        .c-t{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 50px;
        }
    }

@media screen and (min-width:900px) {
    
}

.drug1{
    position: relative;
    .left_top{
        position: absolute;
        top:-30px;
        right:-5px;
        background: #f56c6c;
        color:#fff;
        width:30px;
        height:30px;
        line-height: 30px;
        font-size: 5px;
        text-align: center;
        border-radius: 100%;
        h1{
            margin: 0;
        }
    }
}
</style>


