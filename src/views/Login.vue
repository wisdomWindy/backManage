<template>
  <div class="login">
    <el-form
      v-model:model="formData"
      :rules="formRules"
      label-position="left"
      ref="form"
      class="form"
    >
      <el-form-item prop="account" label="账号" required>
        <el-input v-model="formData.account" name="account"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码" required>
        <el-input v-model="formData.password" name="password"></el-input>
      </el-form-item>
      <el-form-item class="form-item">
        <el-button @click="submit" type="primary" :round="true" class="button">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        account: "",
        password: "",
        
      },
      formRules: {
        account: {
          required: true,
          trigger: "blur",
          message:'账号必填'
        },
        password: {
          required: true,
          trigger: "blur",
          message:'密码必填'
        },
      },
    };
  },
  methods: {
    submit() {
      this.$refs["form"].validate((validated) => {
        if (validated) {
          // 登录
          console.log(validated)
          this.$store.dispatch('login', this.formData);
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  background-color: skyblue;
  display: flex;
  align-items: center;
  justify-content: center;
  .form {
    width: 400px;
    height: auto;
    .form-item {
      .button {
        width: 200px;
        height: 50px;
        margin-left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>