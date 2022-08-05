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
      <el-button size="small" class="deploy-button"> 工单配置 </el-button>
      <br />
      <!-- 表单区域 -->
      <div class="tab-header">
        <el-row>
          <el-col :span="1"><div class="grid-content">序号</div></el-col>
          <el-col :span="3"><div class="grid-content">工单编号</div></el-col>
          <el-col :span="3"><div class="grid-content">设备编号</div></el-col>
          <el-col :span="3"> <div class="grid-content">工单类型</div></el-col>
          <el-col :span="3"><div class="grid-content">工单方式</div></el-col>
          <el-col :span="4"><div class="grid-content">工单状态</div></el-col>
          <el-col :span="3"
            ><div class="grid-content bg-purple-light">运营人员</div></el-col
          >
          <el-col :span="2"
            ><div class="grid-content bg-purple-light">创建 日期</div></el-col
          >
          <el-col :span="2"
            ><div class="grid-content bg-purple-light">操作</div></el-col
          >
        </el-row>
      </div>
      <!-- 表格区域 -->
      <el-table
        :show-header="false"
        :data="taskList"
        style="width: 100%"
        :border="false"
        class="font"
        :header-row-style="{ background: '#f3f6fb' }"
      >
        <el-table-column prop="createType" label="序号" width="50" class="font">
        </el-table-column>
        <el-table-column prop="taskCode" label="工单编号" width="150">
        </el-table-column>
        <el-table-column prop="innerCode" label="设备编号" width="150">
        </el-table-column>
        <el-table-column prop="taskType.typeName" label="工单类型" width="150">
        </el-table-column>
        <el-table-column prop="createType" label="工单方式" width="150">
        </el-table-column>
        <el-table-column
          prop="taskStatusTypeEntity.statusName"
          label="工单状态"
          width="150"
        >
        </el-table-column>
        <el-table-column
          prop="userName"
          label="运营人员"
          width="150"
          class="item-margin"
        >
        </el-table-column>
        <el-table-column prop="createTime" label="创建日期" width="150">
        </el-table-column>
        <el-table-column prop="zip" label="操作" width="150">
          <span class="watch-info">查看详情</span>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页部分 -->
    <div class="block">
      <span class="demonstration">显示总数</span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="1000"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
// import { getList } from "@/api/table";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      controlNo: "",
      taskList: [],
      currentPage1: 5
    };
  },
  components: {},
  async created() {
    await this.getTaskList();
    this.taskList = this.$store.state.tickets.taskObj.currentPageRecords;
    console.log(this.taskList);
  },
  methods: {
    ...mapActions("tickets", ["getTaskList"]),

    // 分页方法
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
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
