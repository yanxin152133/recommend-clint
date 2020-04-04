<template>
    <!--prettier-ignore-->
    <div>


        <b-card
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
        >
            <div class="mb-2">
                <b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar>
            </div>

            <loginForm></loginForm>
            <b-button href="#" variant="primary">login</b-button>
        </b-card>
    </div>
</template>

<script>
import loginForm from "../components/loginForm";

export default {
    name: "Login",
    components: { loginForm }
};
</script>

<style lang="less"></style>
