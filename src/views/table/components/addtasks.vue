<template>
  <div>
    <!-- Form -->
    <el-dialog title="新增工单" :visible="Visible">
      <el-form :model="form">
        <el-form-item label="设备编号" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="工单类型" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="$parent.Visible = false">取 消</el-button>
        <el-button type="primary" @click="$parent.Visible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      dialogTableVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },
  props: {
    Visible: {
      type: Boolean,
      default: false,
    },
  },
  created() {},
  methods: {},
};
</script>

<style scoped lang="scss"></style>
