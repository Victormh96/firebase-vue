<template>
    <div id="register">
        <navbar />
        <a-card>
            <a-form layout="vertical" autocomplete="off" :model="formState" @finish="post">
                <a-form-item label="Correo" name="email" :rules="[{ required: true, message: '' }]">
                    <a-input type="email" v-model:value="formState.email" placeholder="Email" />
                </a-form-item>
                <a-form-item label="Contraseña" name="password" :rules="[{ required: true, message: '' }]">
                    <a-input type="password" v-model:value="formState.password" placeholder="Contraseña" />
                </a-form-item>
                <a-button type="primary" htmlType="submit">Registrar</a-button>
            </a-form>
        </a-card>
    </div>
</template>

<!--========Script========-->
<script>
import { reactive } from "vue";
import { Form } from "ant-design-vue";
import { useRouter } from "vue-router";
import navbar from '@/components/navbar.vue';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const useForm = Form.useForm;
const router = useRouter();

export default {
    name: 'Register',
    data() {
        return {
        }
    },

    setup() {
        //Register
        const formState = reactive({
            email: null,
            password: null
        });

        const { resetFields } = useForm(formState, reactive({}));

        return {
            //Register
            formState,
            resetFields,
        };
    },

    mounted() {
    },

    methods: {
        //Register
        post(values) {
            createUserWithEmailAndPassword(getAuth(), values.email, values.password)
                .then((data) => {
                    this.$router.push('/feed')
                })
                .catch((e) => console.log(e));
        },
    },
    components: {
        navbar
    }
};
</script>

<!--========Css========-->
<style scoped>
.ant-card {
    margin: 50px auto;
    width: 35%;
}
</style>
