<template>
<div class="people3">
    <el-tabs :tab-position="tabPosition">
        <el-tab-pane label="全部">
            <h4>喜爱的医师</h4>
            <div class="people_doc_b">
                <div class="people_doc">
                    <div class="people_doc1">
                        <img src="https://cdn.nlark.com/yuque/0/2018/jpeg/92616/1543724341302-assets/web-upload/7f119bd6-6298-44fc-9f11-778d28be523b.jpeg" alt="">
                        <div class="name">
                            <h5>张医生</h5>
                            <p>心血管内科</p>
                        </div>
                    </div>
                    <div class="text_l"></div>
                    <div class="people_doc2">
                        <span class="nian">医龄：1年</span>
                        <router-link to="/Peoplex/3"> 
                            <span class="see">查看医生</span>
                        </router-link>
                    </div>
                </div>
                <div class="people_doc">
                    <div class="people_doc1">
                        <img src="https://cdn.nlark.com/yuque/0/2018/jpeg/92616/1543724341302-assets/web-upload/7f119bd6-6298-44fc-9f11-778d28be523b.jpeg" alt="">
                        <div class="name">
                            <h5>张医生</h5>
                            <p>心血管内科</p>
                        </div>
                    </div>
                    <div class="text_l"></div>
                    <div class="people_doc2">
                        <span class="nian">医龄：1年</span>
                        <router-link to="/Peoplex/3"> 
                            <span class="see">查看医生</span>
                        </router-link>
                    </div>
                </div>
            </div>
            <h4>全部病史</h4>
            <people4></people4>
            <people4></people4>
        </el-tab-pane>
        <el-tab-pane label="感冒">
            <people4></people4>
            <people4></people4>
        </el-tab-pane>
        <el-tab-pane label="风湿">
            <people4></people4>
        </el-tab-pane>
        <el-tab-pane label="失眠">
            您没看过这个疾病哦
        </el-tab-pane>
    </el-tabs>
</div>
</template>

<script>
import people4 from './people4.vue'

export default {
  data() {
    return {
        tabPosition: 'top'
    }
  },
  components: {
      people4
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

.people_doc_b{
    display: flex;
    flex-direction: row;
    justify-content: start;
}

.people_doc{
    border-radius: 3px;
    border:1px solid #eee;
    padding: 8px;
    margin-right: 5px;
    width:50%;
    .people_doc1{
        display: flex;
        flex-direction: row;
        justify-content: start;
        img{
            width:60px;
            height:60px;
            border-radius: 100%;
        }
        .name{
            margin-left: 15px;
        }
        h5{
            margin: 3px 0;
        }
        p{
            font-size: 10px;
        }
    }
    .text_l{
        width:100%;
        border-bottom: 1px solid #eee;
    }
    .people_doc2{
        margin-top: 8px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 12px;
        p{
            font-size: 10px;
        }
        .nian{
            margin-top: 1px;
            color:rgba(114, 110, 110, 0.972);
        }
        .see{
            background: #409EFF;
            border-radius: 20px;
            padding:4px 8px;
            font-size: 10px;
            color:#fff;
        }
    }
}





</style>


