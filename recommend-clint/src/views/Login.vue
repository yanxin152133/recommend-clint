<template>
    <!--prettier-ignore-->
    <div>


        <b-card
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
        >

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
