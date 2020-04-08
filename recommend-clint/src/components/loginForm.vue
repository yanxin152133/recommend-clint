<template>
    <!--prettier-ignore-->
    <b-container>
        <b-row align-v="start" class="form-group">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="col-md-12">

                    <b-form-group
                            id="form-group-loginName"
                            label="账号"
                            label-for="loginName"
                            class="col-md-12"
                    >
                        <b-form-input id="loginName"
                                      required
                                      placeholder="请输入账号：">

                        </b-form-input>

                    </b-form-group>

                    <b-form-group
                            id="form-group-loginPwd"
                            label="密码"
                            label-for="loginPwd"
                            class="col-md-12"
                    >
                        <b-form-input id="loginPwd"
                                      required
                                      placeholder="请输入密码：">

                        </b-form-input>

                    </b-form-group>

            </b-form>


        </b-row>
        <b-row align-v="end" class="btn-group">
            <b-col align-self="start" cols="12" md="2">
                <b-btn type="button" class="loginBtn">登录</b-btn>
            </b-col>
            <b-col md="6"></b-col>
            <b-col align-self="begin" cols="auto" md="2">
                <a>忘记密码？</a>
            </b-col>
            <b-col align-self="end" cols="auto" md="2">
                <a>注册</a>
            </b-col>

        </b-row>

    </b-container>
</template>

<script>
export default {
    name: "loginForm",
    data() {
        return {
            form: {
                email: "",
                name: "",
                food: null,
                checked: []
            },
            foods: [
                { text: "Select One", value: null },
                "Carrots",
                "Beans",
                "Tomatoes",
                "Corn"
            ],
            show: true
        };
    }
};
</script>

<style lang="less">
label {
    text-align: left;
}
.btn-group{
    position: relative;
    width: 100%;
    padding-left: -15px;
    padding-right: -15px;
}
.loginBtn {
    max-width: 100%;
    min-width: 100%;
}
</style>
