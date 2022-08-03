<template>
  <div class="app-container">
    <!-- 搜索区域 -->
    <div class="search">
      <div class="text">工单编号：</div>
      <el-input v-model="controlNo" placeholder="请输入"></el-input>

      <div class="text">工单状态：</div>
      <el-input v-model="controlNo" placeholder="请输入"></el-input>

      <el-button size="small" class="search-button">
        <i class="el-icon-search"></i>
        查询
      </el-button>
    </div>

    <!-- 下半区域 -->
    <div class="result">
      <el-button size="small" class="new-button">
        <i class="el-icon-circle-plus-outline"></i>
        新建
      </el-button>
      <el-button size="small" class="deploy-button">
        工单配置
      </el-button>
    </div>
  </div>
</template>

<script>
// import { getList } from "@/api/table";

export default {
  data() {
    return {
      controlNo: "",
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.app-container .search {
  display: flex;
  height: 64px;
  align-items: center;
  margin-bottom: 20px;
  background-color: #fff;

  ::v-deep .el-input__inner {
    width: 200px;
    height: 34px;
  }
}
::v-deep .el-input {
  width: unset;
}
.text {
  font-size: 14px;
  width: 80px;
  margin-left: 20px;
}
.result {
  padding: 20px 15px 19px 17px;
  background-color: #fff;
  min-height: 600px;
  width: 100%;
}
.search-button {
  margin-left: 10px;
  background-color: #5f84ff;
  color: #fff;
}
.new-button{
  background-color: #ff8a3b;
  color: #fff;
  border: unset;
}
.deploy-button{
  background-color: #fbf4f0;
  border: unset;
}
</style>
