<template>
    <!--prettier-ignore-->
    <b-container>
        <login-form></login-form>
    </b-container>

</template>

<script>
import loginForm from "../components/loginForm";

export default {
    name: "Login",
    components: { loginForm }
};
</script>

<style lang="less">
</style>
