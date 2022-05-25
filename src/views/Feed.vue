<template>
    <div id="feed">
        <a-menu v-model:selectedKeys="current" mode="horizontal">
            <a-menu-item key="home">
                <router-link to="/">Home</router-link>
            </a-menu-item>
            <a-menu-item key="register">
                <router-link to="/register">Register</router-link>
            </a-menu-item>
            <a-menu-item key="login">
                <router-link to="/login">Login</router-link>
            </a-menu-item>
            <a-menu-item key="feed">
                <router-link to="/feed">Feed</router-link>
            </a-menu-item>
            <a-menu-item key="logout">
                <button @click="handleSignOut" v-if="isLoggedIn">Logout</button>
            </a-menu-item>
        </a-menu>
        <br>
        <h1>Feed</h1>
    </div>
</template>

<!--========Script========-->
<script>
import { ref } from "vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const isLoggedIn = ref(false);
let auth;

export default {
    data() {
        return {
        }
    },

    setup() {
        return {
        }
    },

    methods: {
        //Register
        onMounted() {
            auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    isLoggedIn.value = true;
                } else {
                    isLoggedIn.value = false;
                }
            })
        },

        handleSignOut() {
            signOut(auth).then(() => {
                this.$router.push('/');
            })

        }
    },
};
</script>

<!--========Css========-->
<style scoped>
a {
    margin: 0 10px;
}

.ant-menu {
    justify-content: center;
}
</style>
