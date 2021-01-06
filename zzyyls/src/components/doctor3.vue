<template>
<div class="doctor3">
    <h3>王安安 <el-tag  type="success">男</el-tag>  <el-tag>23岁</el-tag></h3>
    <img src="https://cdn.nlark.com/yuque/0/2018/jpeg/92616/1543724341302-assets/web-upload/7f119bd6-6298-44fc-9f11-778d28be523b.jpeg" alt="">
    <h4>历史疾病</h4>
    <div class="jb-list">
        <el-tag size="medium" >脑膜炎</el-tag>
        <el-tag size="medium" type="success">感冒</el-tag>
        <el-tag size="medium" type="warning">拉肚子</el-tag>
        <el-tag size="medium" type="info">胃炎</el-tag>
        <el-tag size="medium" type="danger">胃病</el-tag>
    </div>
    <h4>疾病详情</h4>

    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign1">
        <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
            <el-tab-pane label="治疗" name="first">
                <h4>治疗方案</h4>
                <el-form-item label="">
                    <el-input v-model="formLabelAlign1.name" placeholder="治疗1：多喝水" :disabled="true" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-input v-model="formLabelAlign1.name11" placeholder="治疗1：多吃饭" :disabled="true" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-input v-model="formLabelAlign1.name22" placeholder="治疗1：多睡觉" :disabled="true" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
                </el-form-item>
                <el-button icon="el-icon-plus" circle></el-button>
                <h4>推荐药品</h4>
                <drug></drug>

            </el-tab-pane>
            <el-tab-pane label="症状" name="second">
                <el-form-item label="">
                <el-input v-model="formLabelAlign1.name1" type="textarea" :disabled="true" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
                <el-tag
                    :key="tag"
                    v-for="tag in dynamicTags"
                    closable
                    :disable-transitions="false"
                    @close="handleClose(tag)">
                    {{tag}}
                    </el-tag>
                    <el-input
                    class="input-new-tag"
                    v-if="inputVisible"
                    v-model="inputValue"
                    ref="saveTagInput"
                    @keyup.enter.native="handleInputConfirm"
                    @blur="handleInputConfirm"
                    >
                </el-input>
                <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
            </el-form-item>
            </el-tab-pane>
            <el-tab-pane label="病因" name="third">
                <el-form-item label="">
                    <el-input v-model="formLabelAlign1.region" placeholder="请输入" :disabled="true" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
                </el-form-item>
            </el-tab-pane>
            <el-tab-pane label="诊断" name="fourth">
                <el-form-item label="">
                    <el-input v-model="formLabelAlign1.type" placeholder="请输入" :disabled="true" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
                </el-form-item>
            </el-tab-pane>
            <el-tab-pane label="生活" name="five">
                <el-form-item label="">
                    <el-input v-model="formLabelAlign1.hun" placeholder="请输入" :disabled="true" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
                </el-form-item>
            </el-tab-pane>
            <el-tab-pane label="预防" name="six">
                <el-form-item label="">
                    <el-input v-model="formLabelAlign1.mz" placeholder="请输入" :disabled="true" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
                </el-form-item>
            </el-tab-pane>
            <el-tab-pane label="留言" name="seven">
                <el-form-item label="">
                    <el-input v-model="formLabelAlign1.gs" placeholder="请输入" :disabled="true" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
                </el-form-item>
            </el-tab-pane>
        </el-tabs>
        
    </el-form>

    <div class="c-t">
        <router-link to="/Home/1">
            <el-button type="success" plain icon="el-icon-arrow-left">患者信息</el-button>
        </router-link>
        <router-link to="/Home/3">    
            <el-button type="success">诊疗完成<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </router-link>
    </div>

</div>
</template>

<script>
import drug from '~/components/drug.vue';

export default {
  name: 'doctor3',
  data() {
    return {
       labelPosition: 'top',
        formLabelAlign1: {
            name1:'',
            name: '',
            name11: '',
            name22: '',
            region: '',
            type: '',
            hun:'',
            mz:'',
            gs:'',
            dz:''
        },
        dynamicTags: ['感冒', '胃病'],
        inputVisible: false,
        inputValue: '',
        activeName: 'first'
    }
  },
  components: {
      drug
  },
  methods: {
    handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
    });
    },
    handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
            this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
    },
    handleClick(tab, event) {
        console.log(tab, event);
    }

  },
  watch: {

  },
  created() {

  },
}
</script>

<style scoped lang="scss">
.doctor3{
    .el-form-item {
        margin-bottom: 9px;
    }
    .el-form-item__content{
        .el-tag{
            margin-right: 5px;
        }
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
    
}

@media screen and (min-width:900px) {
    
}
</style>


