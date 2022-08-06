<template>
  <div class="app-container">
    <!-- 搜索区域 -->
    <Search @searchList="searchList"></Search>
    <!-- 下半区域 -->
    <div class="result">
      <el-button size="small" class="new-button" @click="popup = true">
        <i class="el-icon-circle-plus-outline"></i>
        新建
      </el-button>

      <!--工单配置  -->
      <el-button size="small" class="deploy-button"> 工单配置 </el-button>
      <br />
      <!-- 新建的弹框组件 -->
      <AddTask :Visible="popup"></AddTask>
      <!-- 表格区域 -->
      <Table :taskList="taskList"></Table>

      <!-- 分页 -->
      <div class="block">
        <!-- <span class="demonstration">大于 7 页时的效果</span> -->
        <center>
          <el-pagination
            layout="prev, pager, next"
            :total="total"
            small
            @current-change="laypage"
          >
          </el-pagination>
        </center>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
// import { getList } from "@/api/table";
import Table from "@/components/table";
import Search from "@/components/Search";
import AddTask from "../table/components/addtasks.vue";
import { mapActions, mapState } from "vuex";
import { getTasksList } from "@/api/tickets";
export default {
  data() {
    return {
      controlNo: "",
      taskList: [],
      totalCount: 0,
      status: "",
      popup: false,
    };
  },
  components: {
    Table,
    Search,
    AddTask,
  },
  created() {
    this.getTaskssList();
  },
  methods: {
    ...mapActions("tickets", ["getTaskList", "setTasksList"]),
    // 获取工单列表
    async getTaskssList() {
      await this.getTaskList();
      this.taskList = this.$store.state.tickets.taskList;
    },

    // 分页
    async laypage(num) {
      const { data } = await getTasksList({
        pageIndex: num,
        pageSize: 10,
        isRepair: true,
        status: this.status,
      });
      this.taskList = data.currentPageRecords;
    },
    // 搜索列表
    searchList(list, status) {
      this.taskList = list;
      this.status = status;
    },
  },
  computed: {
    ...mapState("tickets", ["total"]),
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
  min-height: 680px;
  width: 100%;
  // min-width: 1680px;
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
.block {
  margin-top: 40px;
}
</style>
