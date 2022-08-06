<template>
  <el-table
    :data="taskList"
    style="width: 100%"
    :border="false"
    class="font table-box"
    :header-row-style="{ background: '#f3f6fb' }"
  >
    <el-table-column type="index" label="序号" width="75" class="font">
    </el-table-column>
    <el-table-column prop="taskCode" label="工单编号" width="160">
    </el-table-column>
    <el-table-column prop="innerCode" label="设备编号" width="160">
    </el-table-column>
    <el-table-column prop="taskType.typeName" label="工单类型" width="160">
    </el-table-column>
    <el-table-column
      :formatter="createTypeFn"
      prop="createType"
      label="工单方式"
      width="160"
    >
    </el-table-column>
    <el-table-column
      prop="taskStatusTypeEntity.statusName"
      label="工单状态"
      width="160"
    >
    </el-table-column>
    <el-table-column
      prop="userName"
      label="运营人员"
      width="160"
      class="item-margin"
    >
    </el-table-column>
    <el-table-column
      prop="createTime"
      label="创建日期"
      :formatter="dateFn"
      width="160"
    >
    </el-table-column>
    <el-table-column prop="zip" label="操作" width="160">
      <span class="watch-info">查看详情</span>
    </el-table-column>
  </el-table>
</template>

<script>
import dayjs from "dayjs";
export default {
  components: {},
  data() {
    return {};
  },
  props: {
    taskList: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  created() {},
  methods: {
    // 工单方式
    createTypeFn(row, column, index) {
      return ["自动", "手动"][index];
    },
    dateFn(row, column, index) {
      return dayjs(index).format('YYYY-MM-DD HH:mm:ss');
    },
  },
};
</script>

<style scoped lang="scss">
.watch-info {
  cursor: pointer;
  color: #5f84ff;
}
.item-margin {
  margin-left: 30px;
}
.table-box {
  overflow-x: hidden;
}
</style>
