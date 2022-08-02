<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: </div>
  </div>
</template>

<script>

export default {
  name: "Dashboard",
  computed: {
  },
};
</script>

<style lang="scss" scoped>
.dashboard-container {
  background-color: #f3f5f9;
  min-height: 797px;
  .dashboard-text {
    background-color: #f3f5f9;
    height: 100%;
    width: 100%;
  }
  .dashboard {
    &-container {
      margin: 30px;
    }
    &-text {
      font-size: 30px;
      line-height: 46px;
    }
  }
}
</style>
