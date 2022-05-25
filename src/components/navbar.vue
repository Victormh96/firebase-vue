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
    </div>
</template>

<!--========Css========-->
<style scoped>
a {
    margin: 0 10px;
}

.ant-menu {
    justify-content: center;
}
</style>
