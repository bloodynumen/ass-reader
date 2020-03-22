<template>
  <el-main>
    <el-row class="operation-box">
      <div class="dashboard-text">
        Welcome
      </div>
      <router-link :to="'/ass/index'">
        <el-button>查看文件列表</el-button>
      </router-link>
    </el-row>
  </el-main>
</template>

<script>
export default {
  name: "Dashboard"
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
