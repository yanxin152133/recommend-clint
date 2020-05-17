<template>
    <!--prettier-ignore-->
    <div>
        <b-container>
            <b-col>
                <b-form onsubmit="commit()">
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
                        <b-form-checkbox-group
                                v-model="selected"
                                :options="options"
                                class="mb-3"
                                value-field="item"
                                text-field="name"
                                disabled-field="notEnabled"
                        ></b-form-checkbox-group>
                        <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
                    </b-col>

                </b-form>


            </b-col>

        </b-container>

    </div>
</template>

<script>
export default {
    name: "detailForm",
    data() {
        return {
            selected: [],
            options: [
                { item: "A", name: "Option A" },
                { item: "B", name: "Option B" }
            ]
        };
    },
    methods: {
        commit() {
            alert();
        }
    }
};
</script>

<style scoped></style>
