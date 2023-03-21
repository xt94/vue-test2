<template>
  <div>
    <el-button type="info" @click="loginOut">退出</el-button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    loginOut() {
      // 该方法接受一个键名作为参数，并把该键名从存储中删除。
      sessionStorage.removeItem("userToken");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
</style>