<template>
  <div class="login-wrapper">
    <div class="login-container">
      <div class="login-box">
        <div class="avatar-box">
          <img src="../../assets/logo.png" alt="" />
        </div>
        <el-form
          ref="loginFormRef"
          :model="loginForm"
          :rules="loginFormRules"
          label-width="0"
        >
          <!-- 用户名 -->
          <el-form-item class="login-form-top" prop="username">
            <el-input
              prefix-icon="iconfont icon-dengluyonghu"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <!-- 登录 -->
          <el-form-item class="login-form-bottom" prop="password">
            <el-input
              prefix-icon="iconfont icon-password"
              v-model="loginForm.password"
              type="password"
            ></el-input>
          </el-form-item>
          <!-- 按钮 -->
          <el-form-item class="btn">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="info" @click="resetLoginForm">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { setItem } from "@/utils/storage";
import { postLoginApi } from "../../apis/login.js";
export default {
  name: "Login",
  data() {
    return {
      loginData: {},
      // 这是登录表单的数据绑定对象
      loginForm: {
        username: "",
        password: "",
      },

      // 这是表单的验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          {
            required: true,
            message: "请输入登录名称",
            trigger: "blur",
          },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入登录密码",
            trigger: "blur",
          },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },

  methods: {
    resetLoginForm() {
      // console.log(this);
      this.$refs.loginFormRef.resetFields();
    },
    login() {
      this.$refs.loginFormRef.validate((value) => {
        // console.log(value);
        if (value) {
          // console.log(this.loginData);
          // 后端的数据已获取 客户端的数据与后端的数据作对比
          this.postLoginApi({
            username: this.loginForm.username,
            password: this.loginForm.password,
          });
        }
      });
    },
    //后端反馈的数据  用下面的形式来获取后端的数据
    async postLoginApi(query) {
      const { data } = await postLoginApi(query);
      this.loginData = data.data;
      console.log(this.loginData);
      if (data.meta.status === 200) {
        this.$message({
          type: "success",
          message: "登录成功",
        });
        setItem("userToken", this.loginData.token);
        this.$router.push("/home");
      } else {
        this.$message({
          type: "error",
          message: "用户名或密码错误",
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.login-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #2b4b6b;
  .login-box {
    position: absolute;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 2px;
    .avatar-box {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 130px;
      height: 130px;
      padding: 10px;
      border-radius: 50%;
      border: 1px solid #eee;
      box-shadow: 0 0 10px #ddd;
      background-color: #fff;
      & > img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
    .login-form-top {
      position: absolute;
      top: 120px;
      left: 0;
      width: 100%;

      padding: 0 20px;
      box-sizing: border-box;
    }
    .login-form-bottom {
      position: absolute;
      top: 180px;
      left: 0;
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
    }
    .btn {
      position: absolute;
      bottom: 10px;
      right: 20px;
    }
  }
}
</style>