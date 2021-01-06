<template>
  <div id="home">
    <img src="./assets/lyf.png" alt="">
    <h4>病人：<el-tag>刘亦菲</el-tag></h4>
    <h4>年龄：25</h4>
    <h4>性别：女</h4>
    <h4>性别：25</h4>



    <el-tabs :tab-position="tabPosition" style="height: 200px;">
      <el-tab-pane label="用户管理">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>    


  </div>
</template>

<script>
export default {
    data() {
      return {
        tabPosition: 'left'
      };
    }
  };
</script>

<style>
.home{
  text-align: left;
}


</style>
