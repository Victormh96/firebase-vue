<template>
    <div id="login">
        <navbar />
        <a-card>
            <a-form layout="vertical" autocomplete="off" :model="formState" @finish="post">
                <a-form-item label="Correo" name="email" :rules="[{ required: true, message: '' }]">
                    <a-input type="email" v-model:value="formState.email" placeholder="Email" />
                </a-form-item>
                <a-form-item label="Contraseña" name="password" :rules="[{ required: true, message: '' }]">
                    <a-input type="password" v-model:value="formState.password" placeholder="Contraseña" />
                </a-form-item>
                <a-button type="primary" htmlType="submit">Iniciar Sesión</a-button>
            </a-form>
        </a-card>
    </div>
</template>

<!--========Script========-->
<script>
import { ref } from "vue";
import { reactive } from "vue";
import { Form } from "ant-design-vue";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";
import navbar from '@/components/navbar.vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const useForm = Form.useForm;
const router = useRouter();
const errMsg = ref();

export default {
    name: 'Login',
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
            resetFields
        };
    },

    methods: {
        //Register
        post(values) {
            signInWithEmailAndPassword(getAuth(), values.email, values.password)
                .then((data) => {
                    this.$router.push('/feed');
                })
                .catch((e) => {
                    switch (e.code) {
                        case "auth/invalid-email":
                            message.warning("Email Invalido");
                            break;
                        case "auth/user-not-found":
                            message.warning("La Cuenta No existe");
                            break;
                        case "auth/wrong-password":
                            message.warning("Password Incorrecto");
                            break;
                        default:
                            message.warning("Email Or Password Incorrecto");
                            break;
                    }
                });
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

