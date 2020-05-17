<template>
    <!--prettier-ignore-->
    <div>
        <b-container>
            <b-col>
                <b-form @submit="onSubmit" v-if="show">
                    <b-col>
                        <b-form-group
                            id="form-group-loginName"
                            label="账号："
                            label-for="loginName"
                        >
                            <b-form-input
                                id="loginName"
                                v-model="loginName"
                                required
                                placeholder="请输入账号："
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group
                            id="form-group-loginPwd"
                            label="密码："
                            label-for="loginPwd"
                        >
                            <b-form-input
                                id="loginPwd"
                                v-model="loginPwd"
                                required
                                type="password"
                                placeholder="请输入密码："
                            ></b-form-input>
                        </b-form-group>
                    </b-col>

                    <b-row class="btn-group">
                        <b-col cols="12" md="2">
                            <b-btn type="submit" class="loginBtn" variant="success">登录</b-btn>
                        </b-col>
                        <b-col cols="12" md="6"></b-col>
                        <b-col cols="auto" md="2">
                            <router-link to="/forget">忘记密码？</router-link>
                        </b-col>
                        <b-col cols="auto" md="2">
                            <router-link to="/sign">注册</router-link>
                        </b-col>
                    </b-row>
                </b-form>
            </b-col>
        </b-container>
    </div>
</template>

<script>
export default {
    name: "loginForm",
    data() {
        return {
            form: {
                loginName: "",
                loginPwd: ""
            },
            show: true
        };
    },
    methods: {
        // onSubmit(evt) {
        //     evt.preventDefault();
        //     alert(JSON.stringify(this.form));
        // }
    }
};
</script>

<style lang="less">
label {
    text-align: left;
}

.btn-group {
    position: relative;
    width: 100%;
    padding-left: -15px;
    padding-right: -15px;
    text-align: center;
}

.loginBtn {
    text-align: center;
    max-width: 100%;
    min-width: 100%;
}
</style>
