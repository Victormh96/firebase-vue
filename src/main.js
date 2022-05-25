import App from './App.vue'
import router from "./router"
import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { initializeApp } from "firebase/app";

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYv3sRY1Jq0PfQxW47XWApevKHP6d-Du8",
  authDomain: "tecla-528dd.firebaseapp.com",
  projectId: "tecla-528dd",
  storageBucket: "tecla-528dd.appspot.com",
  messagingSenderId: "698447747389",
  appId: "1:698447747389:web:f950fa7a82b234f77b0d54"
};

//Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.use(Antd)
  .mount('#app')
