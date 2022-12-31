<template>

    <body>
        <img class="bgone" src="../assets/Login/img/1.jpg" />
        <img class="pic" src="../assets/Login/img/a.png" />

        <div class="table">
            <div class="wel">基于Gin+Vue3的天气信息管理系统</div>
            <div class="wel1">Copy@bjfu_yjc</div>

            <div class="board">
                <div>
                    <div @click="toRegister" class="button2">
                        <div style="position: absolute;right:22px;">注册</div>
                    </div>
                    <div class="button1">
                        <div style="position:absolute;left:22px;">登录</div>
                    </div>
                </div>
                <n-form ref="formRef" :rules="rules" :model="user">
                    <n-form-item path="userName" style="position:absolute;left:70px;top:150px;width:350px;">
                        <n-input v-model:value="user.userName" size="large" round placeholder="用户名" />
                    </n-form-item>
                    <n-form-item path="password" style="position:absolute;left:70px;top:230px;width:350px;">
                        <n-input v-model:value="user.password" size="large" round type="password" placeholder="密码" />
                    </n-form-item>
                </n-form>
                <n-checkbox v-model:checked="user.rember" label="记住密码" style="position:absolute;left:70px;top:330px;" />
                <div @click="submit" class="button3">
                    <div style="left: auto;right: auto;text-align: center;">登录</div>
                </div>
            </div>
        </div>

    </body>
</template>

<script setup>

import { ref, reactive, inject } from 'vue'
import { UserStore } from '../stores/UserStore'

import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const axios = inject("axios")
const message = inject("message")
const userStore = UserStore()

const formRef = ref(null)

const user = reactive({
    userName: localStorage.getItem("userName") || route.query.userName || "",
    password: localStorage.getItem("password") || route.query.password || "",
    rember: localStorage.getItem("rember") == 1 || false
})

let rules = {
    userName: [
        { required: true, message: "请输入用户名", trigger: "blur" },
    ],
    password: [
        { required: true, message: "请输入密码", trigger: "blur" },
        { min: 6, max: 20, message: "密码长度在 6 到 20 个字符", trigger: "blur" },
    ]
}

function submit() {
    formRef.value?.validate((errors) => {
        if (errors) {
            message.error("登陆失败")
        } else {
            login();
        }
    })
}

const login = async () => {
    //前端向后端/login接口发送submit的数据，然后阻塞等待后端验证的返回结果
    let res = await axios.post("/login", {
        userName: user.userName,
        password: user.password
    })
    if (res.data.code == 200) {
        userStore.token = res.data.data.token
        console.log("login token:", userStore.token)
        if (user.rember) {
            localStorage.setItem("userName", user.userName)
            localStorage.setItem("password", user.password)
            localStorage.setItem("rember", user.rember ? 1 : 0)
        } else {
            localStorage.removeItem("userName")
            localStorage.removeItem("password")
            localStorage.setItem("rember", user.rember ? 1 : 0)
        }
        localStorage.setItem("token", userStore.token)  // 将token存入localStore

        router.push("/index")
        message.success(res.data.msg)
    } else {
        message.error(res.data.msg)
    }
}

const toRegister = () => {
    router.push("/register")
}

</script>

<style lang="scss" scoped>
.board {
    position: absolute;
    top: 0px;
    right: 35px;
    width: 500px;
    height: 450px;
    border-radius: 20px;
    box-shadow: 0px 20px 50px #D3D4D8;
    background-color: white;
    z-index: 0;

    .button1 {
        position: absolute;
        top: 75px;
        left: 70px;
        width: 80px;
        height: 40px;
        border-radius: 20px;
        background-color: #7B3DE0;
        line-height: 40px;
        font-size: 16px;
        color: white;
        cursor: default;
    }

    .button2 {
        position: absolute;
        top: 75px;
        left: 70px;
        width: 160px;
        height: 40px;
        border-radius: 20px;
        background-color: #F1EBFB;
        line-height: 40px;
        font-size: 16px;
        color: black;
        cursor: pointer;
    }

    .button3 {
        position: absolute;
        top: 370px;
        left: 70px;
        width: 350px;
        height: 50px;
        border-radius: 20px;
        background-color: #7B3DE0;
        line-height: 50px;
        font-size: 16px;
        color: white;
        cursor: pointer;
    }
}


.bgone {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
}

.pic {
    width: 492px;
    height: auto;
    position: absolute;
    top: 173px;
    right: 453px;
    left: 0;
    bottom: 0;
    margin: auto;
    z-index: 99999;
}

.table {
    background-color: #FFFFFF;
    width: 960px;
    height: 465px;
    position: absolute;
    top: 20%;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
}

.password {
    position: absolute;
    top: 12.8rem;
    right: 4rem;
    display: flex;
}

.btn {
    position: absolute;
    top: 18.5rem;
    right: 3.9rem;
    border: none;
    color: #fff;
    width: 373px;
    text-align: center;
    background-color: #7B3DE0;
    text-indent: 0rem;
    border-radius: 10px;
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.2);
    box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.2);
    font-size: 20px;
    height: 50px;
}

.wel {
    width: 960px;
    height: 35px;
    color: #fff;
    font-size: 30px;
    position: absolute;
    top: -7rem;
    text-align: center;


}

.wel1 {
    width: 960px;
    height: 35px;
    color: #fff;
    font-size: 12.38px;
    position: absolute;
    top: -4rem;
    text-align: center;

}

input {
    height: 55px;
    width: 373px;
    text-indent: 55px;
    outline: none;
    background: #eef6fd;
    border-bottom: 2px #d6e7fa solid;
}

.password input {
    border: 0;
}

.user {
    position: absolute;
    top: 7.8rem;
    right: 4rem;
    display: flex;
}

#yonghu img {
    height: 30px;
    position: absolute;
    left: 10px;
    top: 13px;
}
</style>