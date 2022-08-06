<template>
  <!-- 搜索区域 -->
  <div class="search">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="工单编号:">
        <el-input v-model="formInline.taskCode" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="工单状态:">
        <el-select v-model="formInline.status" placeholder="请选择">
          <el-option label="待办" value="1"></el-option>
          <el-option label="进行" value="2"></el-option>
          <el-option label="取消" value="3"></el-option>
          <el-option label="完成" value="4"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          icon="el-icon-search"
          size="small"
          @click="searchList"
          >搜索</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getTasksList } from "@/api/tickets";
export default {
  name: "Search",
  components: {},
  data() {
    return {
      // controlNo: "",
      formInline: {
        taskCode: "",
        status: "",
      },
    };
  },
  created() {},
  methods: {
    // 点击搜索筛选列表
    async searchList() {
      const { data } = await getTasksList(this.formInline);
      // console.log(data);
      this.$emit("searchList", data.currentPageRecords, this.formInline.status);
    },
  },
};
</script>

<style scoped lang="scss">
.app-container .search {
  // display: flex;
  height: 64px;
  padding-top: 30px;
  padding-left: 30px;
  // align-items: center;
  // margin-bottom: 20px;
  background-color: #fff;
  .demo-form-inline {
    // display: flex;
    align-items: center;
  }

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
  min-height: 596px;
  width: 100%;
}
.search-button {
  margin-left: 10px;
  background-color: #5f84ff;
  color: #fff;
}
.new-button {
  background-color: #ff8a3b;
  color: #fff;
  border: unset;
}
.deploy-button {
  background-color: #fbf4f0;
  border: unset;
}
.tab-header {
  margin-top: 20px;
  padding-left: 10px;
  width: 100%;
  border-radius: 5px;
  height: 42px;
  line-height: 42px;
  background-color: #f3f6fb;
}
::v-deep .grid-content {
  font-size: 12px;
}
::v-deep .el-table thead {
  background-color: #f3f6fb;
}
::v-deep .font {
  font-size: 12px;
  // overflow-x: hidden;
}
.watch-info {
  cursor: pointer;
  color: #5f84ff;
}
.item-margin {
  margin-left: 30px;
}
</style>
