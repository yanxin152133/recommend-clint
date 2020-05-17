<template>
    <!--prettier-ignore-->
    <div>
        <b-container>
            <b-col>
                <b-form @submit="onSubmit" v-if="show">
                    <b-col>
                        <b-form-group
                                id="form-group-signName"
                                label="账号："
                                label-for="signName"
                        >
                            <b-form-input
                                    id="signName"
                                    v-model="signName"
                                    required
                                    placeholder="请输入需要修改密码的账号："
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group
                                id="form-group-signPwd"
                                label="密码："
                                label-for="signPwd"
                        >
                            <b-form-input
                                    id="signPwd"
                                    v-model="signPwd"
                                    required
                                    type="password"
                                    placeholder="请输入新密码："
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group
                                id="form-group-signPwd1"
                                label="确认密码："
                                label-for="signPwd1"
                        >
                            <b-form-input
                                    id="signPwd1"
                                    v-model="signPwd1"
                                    required
                                    type="password"
                                    placeholder="请再次输入密码："
                            ></b-form-input>
                        </b-form-group>
                    </b-col>

                    <b-row class="btn-group">
                        <b-col cols="12" md="2">
                            <b-btn type="submit" class="signBtn" variant="success">修改密码</b-btn>
                        </b-col>
                        <b-col cols="12" md="6"></b-col>
                        <b-col cols="auto" md="2">
                            <router-link to="/login">已有帐号？请登录</router-link>
                        </b-col>
                    </b-row>
                </b-form>
            </b-col>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "forgetFrom",
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

    .signBtn {
        text-align: center;
        max-width: 100%;
        min-width: 100%;
    }
</style>
