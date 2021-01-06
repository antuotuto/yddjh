<template>
<div class="doctor2">
    <h3>王安安 <el-tag  type="success">男</el-tag>  <el-tag>23岁</el-tag></h3>
    <img src="https://cdn.nlark.com/yuque/0/2018/jpeg/92616/1543724341302-assets/web-upload/7f119bd6-6298-44fc-9f11-778d28be523b.jpeg" alt="">
    <h4>疾病</h4>
    <div class="jb-list">
        <el-tag size="medium" >脑膜炎</el-tag>
        <el-tag size="medium" type="success">感冒</el-tag>
        <el-tag size="medium" type="warning">拉肚子</el-tag>
        <el-tag size="medium" type="info">胃炎</el-tag>
        <el-tag size="medium" type="danger">胃病</el-tag>
    </div>
    <h4>看病历史</h4>

    <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="感冒" name="1">
            <template>
                <el-alert
                    title="2018年10月24日"
                    type="success"
                    description="下次来看病的时候要注意患者不能打胰岛素">
                </el-alert>
            </template>
            <template>
                <el-alert
                    title="2018年11月30日"
                    type="success"
                    description="感冒 39°C 我们下次需要做好东西，下次看病需要注意要把感冒注意好。">
                </el-alert>
            </template>
        </el-collapse-item>
        <el-collapse-item title="胃病" name="2">
            <template>
                <el-alert
                    title="2018年11月30日"
                    type="success"
                    description="感冒 39°C 我们下次需要做好东西，下次看病需要注意要把感冒注意好。">
                </el-alert>
            </template>
            <template>
                <el-alert
                    title="2018年11月30日"
                    type="success"
                    description="感冒 39°C 我们下次需要做好东西，下次看病需要注意要把感冒注意好。">
                </el-alert>
            </template>
        </el-collapse-item>
        <el-collapse-item title="风湿病" name="3">
            <template>
                <el-alert
                    title="2018年11月30日"
                    type="success"
                    description="感冒 39°C 我们下次需要做好东西，下次看病需要注意要把感冒注意好。">
                </el-alert>
            </template>
            <template>
                <el-alert
                    title="2018年11月30日"
                    type="success"
                    description="感冒 39°C 我们下次需要做好东西，下次看病需要注意要把感冒注意好。">
                </el-alert>
            </template>
        </el-collapse-item>
        <el-collapse-item title="漂亮" name="4">
            <template>
                <el-alert
                    title="2018年11月30日"
                    type="success"
                    description="感冒 39°C 我们下次需要做好东西，下次看病需要注意要把感冒注意好。">
                </el-alert>
            </template>
            <template>
                <el-alert
                    title="2018年11月30日"
                    type="success"
                    description="感冒 39°C 我们下次需要做好东西，下次看病需要注意要把感冒注意好。">
                </el-alert>
            </template>
        </el-collapse-item>
    </el-collapse>
    
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="电话">
            <el-input v-model="formLabelAlign.name" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="身份证号">
            <el-input v-model="formLabelAlign.region" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="工作">
            <el-input v-model="formLabelAlign.type" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="婚姻情况">
            <el-input v-model="formLabelAlign.hun" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="名族">
            <el-input v-model="formLabelAlign.mz" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="公司">
            <el-input v-model="formLabelAlign.gs" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="地址">
            <el-input v-model="formLabelAlign.dz" :disabled="true"></el-input>
        </el-form-item>
    </el-form>

    <div class="c-t">
        <router-link to="/Home/0">
            <el-button type="success" plain icon="el-icon-arrow-left">选择病人</el-button>
        </router-link>
        <router-link to="/Home/2">
            <el-button type="success">开始诊疗<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </router-link>
    </div>

    <!-- <div v-for="(ans,index) in an" :key="ans" class="text item">
        <p>{{ ans }}</p>
    </div> -->

</div>
</template>

<script>
export default {
  name: 'doctor2',
  data() {
    return {
        an:[
            '176-1070-5501',
            '421023199411095217'
        ],
        labelPosition: 'top',
        formLabelAlign: {
            name1:'20',
            name: '176-1070-5501',
            region: '421023199411095217',
            type: '护士',
            hun:'未婚',
            mz:'汉',
            gs:'中泽医药',
            dz:'湖北省岳阳市岳阳楼区'
        },
        activeName: '1'
    }
  },
  components: {

  },
  methods: {
      handleNodeClick(data) {
        console.log(data);
      }

  },
  watch: {

  },
  created() {

  },
}
</script>

<style scoped lang="scss">
  .doctor2{
        .el-breadcrumb{
            margin:0 30px 15px 0;
        }
        h3:after {
            content: " ";
            width: 14px;
            height: 6px;
            background-color: #67c23a;
            display: block;
            margin: 12px 0 20px;
        }
        img{
            border-radius: 5px;
        }
        p{
            font-size: 13px;
            // font-weight: 300;
            color: #231f20;
            padding: 5px 0;
        }
        .jb-list{
            margin-bottom: 15px;
        }
        .el-form-item {
            margin-bottom: 9px;
        }
        .el-button--primary{
            margin-top: 20px;
        }
        .c-t{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 15px;
        }
        .el-alert{
            margin-top: 15px;
        }

    }
@media screen and (min-width:900px) {
    
}
</style>


