<template>

    <head>
        <meta charset="utf-8" />
        <title>用户主界面2</title>

        <meta name="keywords" content="Bootstrap模版,Bootstrap模版下载,Bootstrap教程,Bootstrap中文" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    </head>

    <body>

        <div class="navbar navbar-default" id="navbar">
            <div class="navbar-container" id="navbar-container">
                <div class="navbar-header pull-left">
                    <a href="#" class="navbar-brand">
                        <small>
                            <i class="icon-leaf"></i>
                            基于Gin-Vue3的天气管理系统
                        </small>
                    </a>
                </div>

                <div class="navbar-header pull-right" role="navigation">
                    <ul class="nav ace-nav">
                        <li class="light-blue">
                            <a data-toggle="dropdown" href="#" class="dropdown-toggle">
                                <!-- <img class="nav-user-photo" src="../assets/bootstrap/avatars/user.jpg"
									alt="Jason's Photo" /> -->
                                <InjectToken></InjectToken>

                                <span class="user-info">
                                    <small>欢迎光临,</small>
                                    {{ user.name }}
                                </span>

                                <i class="icon-caret-down"></i>
                            </a>

                            <ul
                                class="user-menu pull-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
                                <li>
                                    <a href="#">
                                        <i class="icon-cog"></i>
                                        设置
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <i class="icon-user"></i>
                                        个人资料
                                    </a>
                                </li>

                                <li class="divider"></li>

                                <li>
                                    <a href="#">
                                        <i class="icon-off"></i>
                                        退出
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="main-container" id="main-container">

            <div class="main-container-inner">
                <a class="menu-toggler" id="menu-toggler" href="#">
                    <span class="menu-text"></span>
                </a>

                <div class="sidebar" id="sidebar">

                    <div class="sidebar-shortcuts" id="sidebar-shortcuts">
                        <div class="sidebar-shortcuts-large" id="sidebar-shortcuts-large">
                            <button class="btn btn-success">
                                <i class="icon-signal"></i>
                            </button>

                            <button class="btn btn-info">
                                <i class="icon-pencil"></i>
                            </button>

                            <button class="btn btn-warning">
                                <i class="icon-group"></i>
                            </button>

                            <button class="btn btn-danger">
                                <i class="icon-cogs"></i>
                            </button>
                        </div>

                        <div class="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini">
                            <span class="btn btn-success"></span>

                            <span class="btn btn-info"></span>

                            <span class="btn btn-warning"></span>

                            <span class="btn btn-danger"></span>
                        </div>
                    </div><!-- #sidebar-shortcuts -->
                    <ul id="main-nav" class="nav nav-tabs nav-stacked" style="">
                        <li class="active">
                            <a href="#/index">
                                <i class="glyphicon glyphicon-th-large"></i>
                                首页
                            </a>
                        </li>
                        <li v-if="(user.role == 0)">
                            <a href="#userManage" class="nav-header collapsed" data-toggle="collapse">
                                <i class="glyphicon glyphicon-cog"></i>
                                人员管理
                                <span class="pull-right glyphicon glyphicon-chevron-down"></span>
                            </a>
                            <ul id="userManage" class="nav nav-list collapse secondmenu" style="height: 0px;">
                                <li><a @click="ChangeRoute('/UserManage')"><i
                                            class="glyphicon glyphicon-user"></i>用户管理</a>
                                </li>

                            </ul>
                        </li>
                        <li>
                            <a href="#nodeManage" class="nav-header collapsed" data-toggle="collapse">
                                <i class="glyphicon glyphicon-credit-card"></i>
                                设备管理
                                <span class="pull-right glyphicon glyphicon-chevron-down"></span>
                            </a>
                            <ul id="nodeManage" class="nav nav-list collapse secondmenu" style="height: 0px;">
                                <li><a @click="ChangeRoute('/NodeManage')"><i
                                            class="glyphicon glyphicon-th-list"></i>设备操作</a>
                                </li>
                                <li><a @click="ChangeRoute('/PhysicalManage')"><i
                                            class="glyphicon glyphicon-asterisk"></i>物理量设置</a>
                                </li>
                            </ul>

                        </li>
                        <li>
                            <a @click="ChangeRoute('/DataManage')">
                                <i class="glyphicon glyphicon-globe"></i>
                                数据展示

                            </a>
                        </li>
                    </ul>


                    <div class="sidebar-collapse" id="sidebar-collapse">
                        <i class="icon-double-angle-left" data-icon1="icon-double-angle-left"
                            data-icon2="icon-double-angle-right"></i>
                    </div>

                </div>

                <div class="main-content">
                    <div class="breadcrumbs" id="breadcrumbs">

                        <ul class="breadcrumb">
                            <li>
                                <i class="icon-home home-icon"></i>
                                <a href="#/index">首页</a>
                            </li>
                            <li class="active">控制台</li>
                        </ul><!-- .breadcrumb -->

                        <div class="nav-search" id="nav-search">
                            <form class="form-search">
                                <span class="input-icon">
                                    <input type="text" placeholder="Search ..." class="nav-search-input"
                                        id="nav-search-input" autocomplete="off" />
                                    <i class="icon-search nav-search-icon"></i>
                                </span>
                            </form>
                        </div><!-- #nav-search -->
                    </div>

                    <div class="page-content">
                        <div class="page-header">

                            <h1>

                                <small>
                                    <i class="icon-double-angle-right"></i>
                                    用户管理
                                </small>
                            </h1>

                        </div><!-- /.page-header -->

                        <div class="row">

                            <div class="col-xs-12">
                                <!-- PAGE CONTENT BEGINS -->


                                <div class="row">

                                    <div class="col-xs-12">
                                        <n-space>
                                            <n-button @click="showModal = true" type="info">
                                                新建用户
                                            </n-button>
                                            <n-modal v-model:show="showModal" class="custom-card" preset="card"
                                                :style="bodyStyle" title="添加用户" size="huge" :bordered="false"
                                                :segmented="segmented">

                                                <n-form ref="formRef" :rules="rules" :model="newuser">

                                                    <n-form-item label="用户名" path="userName">

                                                        <n-input v-model:value="newuser.userName" size="large" round
                                                            placeholder="用户名" />
                                                    </n-form-item>
                                                    <n-form-item label="密码" path="password">
                                                        <n-input v-model:value="newuser.password" size="large" round
                                                            type="password" placeholder="密码" />
                                                    </n-form-item>
                                                    <n-form-item label="确认密码" path="repeatPassword">
                                                        <n-input v-model:value="newuser.repeatPassword" size="large"
                                                            round type="password" placeholder="重新输入密码" />
                                                    </n-form-item>
                                                    <n-from-item label="分配设备">
                                                        <n-checkbox-group v-model:value="newuser.equipments"
                                                            name="equipments">
                                                            <n-space item-style="display: flex;">
                                                                <n-checkbox v-for="node in nodeList" :key="node.value"
                                                                    :value="node.value">
                                                                    {{ node.label }}&#12288;
                                                                </n-checkbox>
                                                            </n-space>
                                                        </n-checkbox-group>

                                                    </n-from-item>
                                                    <n-button type="success" @click="addUser">
                                                        添加
                                                    </n-button>
                                                </n-form>

                                            </n-modal>
                                        </n-space>
                                        <div style="display: flex; ">
                                            <n-table :bordered="true" :single-line="false" style="margin-top:20px;">
                                                <thead>
                                                    <tr>

                                                        <th class="hidden-480">用户编号</th>
                                                        <th class="hidden-480">用户名</th>
                                                        <th>可操控设备(编号)</th>
                                                        <th>角色</th>
                                                        <th>操作</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr v-for="(users, index) in userList">

                                                        <td>
                                                            {{ users.id }}
                                                        </td>
                                                        <td class="hidden-480">{{ users.userName }}</td>
                                                        <td class="hidden-480">{{ users.equipments }}</td>
                                                        <td v-if="(users.role == 0)">
                                                            管理员</td>
                                                        <td v-else>普通用户</td>
                                                        <td>
                                                            <n-space>
                                                                <n-button @click="updateValue(users)" type="primary">
                                                                    <template #icon><n-icon>
                                                                            <CreateOutline />
                                                                        </n-icon></template>
                                                                    编辑
                                                                </n-button>
                                                                <n-button @click="toDelete(users.id)" type="error">
                                                                    <template #icon><n-icon>
                                                                            <TrashOutline />
                                                                        </n-icon></template>
                                                                    删除
                                                                </n-button>
                                                            </n-space>
                                                        </td>

                                                    </tr>


                                                </tbody>
                                            </n-table>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                                <n-modal v-model:show="showUpdateModel" preset="dialog" title="Dialog">
                                    <template #header>
                                        <div>修改</div>
                                    </template>
                                    <n-form ref="formRef" :rules="Editrules" :model="updateUser">
                                        <n-form-item label="用户编号" style="margin-top: 20px;">
                                            <n-input v-model:value="updateUser.id" :disabled="!active" />
                                        </n-form-item>
                                        <n-form-item label="用户名" path="userName">
                                            <n-input v-model:value="updateUser.userName" placeholder="用户名" clearable />
                                        </n-form-item>
                                        <n-form-item label="密码" path="password">
                                            <n-input v-model:value="updateUser.password" placeholder="密码" clearable
                                                type="password" />
                                        </n-form-item>
                                        <n-form-item label="确认密码" path="repeatPassword">
                                            <n-input v-model:value="updateUser.repeatPassword" size="large" round
                                                type="password" placeholder="重新输入密码" />
                                        </n-form-item>
                                        <n-form-item label="设备">
                                            <n-checkbox-group v-model:value="updateUser.equipments">
                                                <n-space item-style="display: flex;">
                                                    <n-checkbox v-for="node in nodeList" :key="node.value"
                                                        :value="node.value">
                                                        {{ node.label }}&#12288;
                                                    </n-checkbox>
                                                </n-space>
                                            </n-checkbox-group>
                                        </n-form-item>
                                        <n-form-item label="">
                                            <n-button @click="closeModal">取消</n-button>
                                            <n-button @click="toUpdate" type="success"
                                                style="margin-left: 20px;">确认</n-button>
                                        </n-form-item>
                                    </n-form>
                                </n-modal>
                                <div class="vspace-sm"></div>


                            </div><!-- /row -->

                            <div class="hr hr32 hr-dotted"></div>

                            <!-- PAGE CONTENT ENDS -->
                        </div><!-- /.col -->
                    </div><!-- /.row -->


                </div><!-- /.page-content -->
            </div><!-- /.main-content -->

        </div><!-- /.main-container-inner -->
    </body>

</template>

<script setup>
import TopBar from '../components/TopBar.vue'
import { ref, reactive, inject, onMounted, computed, provide } from 'vue'
import { Search } from '@vicons/ionicons5'
import InjectToken from '../components/InjectToken.vue'
import { AddCircleOutline, RefreshCircleOutline, SearchOutline, TrashOutline, CreateOutline, DownloadOutline } from "@vicons/ionicons5"
import { useRouter, useRoute } from 'vue-router'
import { eq } from 'lodash'
const router = useRouter()
const route = useRoute()

const serverUrl = inject("serverUrl")
const axios = inject("axios")
const message = inject("message")
const dialog = inject("dialog")

const selectedCategory = ref(0)
const categoryOptions = ref([])
const articleList = ref([])
const showModal = ref(false)

const user = reactive({
    avatarUrl: "",
    name: "",
    id: 0,
    role: 1,
})
const bodyStyle = {
    width: "650px"
}
const newuser = reactive({
    userName: "",
    password: "",
    repeatPassword: "",
    equipments: "",
})


function validatePasswordSame(rule, value) {
    return value == newuser.password;
}

function validatePasswordSameEdit(rule, value) {
    return value == updateUser.password;
}

let Editrules = {
    userName: [
        { required: true, message: "请输入用户名", trigger: "blur" },
        { min: 3, max: 20, message: "用户名长度在 3 到 20 个字符", trigger: "blur" },
    ],
    password: [
        { required: true, message: "请输入密码", trigger: "blur" },
        { min: 6, max: 20, message: "密码长度在 6 到 20 个字符", trigger: "blur" },
    ],
    repeatPassword: [
        { required: true, message: "请重新输入密码", trigger: "blur" },
        { validator: validatePasswordSameEdit, message: "两次输入的密码不一致", trigger: "blur" },
    ],
}
let rules = {
    userName: [
        { required: true, message: "请输入用户名", trigger: "blur" },
        { min: 3, max: 20, message: "用户名长度在 3 到 20 个字符", trigger: "blur" },
    ],
    password: [
        { required: true, message: "请输入密码", trigger: "blur" },
        { min: 6, max: 20, message: "密码长度在 6 到 20 个字符", trigger: "blur" },
    ],
    repeatPassword: [
        { required: true, message: "请重新输入密码", trigger: "blur" },
        { validator: validatePasswordSame, message: "两次输入的密码不一致", trigger: "blur" },
    ],
}

const userList = ref([])  // 表格里显示的用户信息

const pageInfo = reactive({
    pageNum: 1,
    pageSize: 5,
    pageCount: 0,  // 页数
    count: 0,  // 总的记录数量
    keyword: "",
    categoryId: 0
})
const formRef = ref(null)

function addUser() {
    formRef.value?.validate((errors) => {
        if (errors) {
            message.error("注册失败")
        } else {
            register();
        }
    })
}

const register = async () => {
    var equip = ''
    console.log("newuser:", newuser)
    for (var i = 0; i < newuser.equipments.length; i++) {
        var a = newuser.equipments[i] + ""
        equip = equip + a + " "
    }
    console.log(equip)
    let res = await axios.post("/user", {
        userName: newuser.userName,
        password: newuser.password,
        equipments: equip
    })
    if (res.data.code == 200) {
        message.success(res.data.msg)
        loadUserAndEquip()
        closeModal()
    } else {
        message.error(res.data.msg)
    }
}

// 页面加载时就执行
onMounted(() => {
    loadUserAndEquip()
    loadUserInfo()
    loadAllNodes()
})

const nodeList = ref([])
const loadAllNodes = async () => {
    let res = await axios.get("/node")
    if (res.data.code == 200) {
        nodeList.value = res.data.data.nodeList.map((item) => {
            return {
                label: item.nodeName,
                value: item.id,
            }
        })
    }
    console.log("nodeList:", nodeList)
}


const loadUserInfo = async () => {
    let res = await axios.get("/user")
    if (res.data.code == 200) {
        user.role = res.data.data.role
        user.name = res.data.data.name
        console.log("username", user.name)
    }
}


const loadUserAndEquip = async (pageNum = 0) => {
    if (pageNum != 0) {
        pageInfo.pageNum = pageNum;
    }
    let res = await axios.post(`/user/users?pageNum=${pageInfo.pageNum}&pageSize=${pageInfo.pageSize}`)  // 获取用户列表，以及所有的设备
    if (res.data.code == 200) {
        userList.value = res.data.data.users
    }
    pageInfo.count = res.data.data.count
    pageInfo.pageCount = parseInt(pageInfo.count / pageInfo.pageSize) + (pageInfo.count % pageInfo.pageSize > 0 ? 1 : 0)
}

function ChangeRoute(dir) {
    router.push(dir)
}

const toDelete = async (id) => {
    dialog.warning({
        title: '警告',
        content: '是否要删除',
        positiveText: '确定',
        negativeText: '取消',
        onPositiveClick: async () => {
            console.log(id)
            let res = await axios.delete("user/" + id)
            if (res.data.code == 200) {
                message.info(res.data.msg)
                loadUserAndEquip()
            } else {
                message.error(res.data.msg)
            }
        },
        onNegativeClick: () => { }
    })
}

const updateUser = reactive({
    id: "",
    userName: "",
    password: "",
    repeatPassword: "",
    equipments: "",
    role: "",
})
const showUpdateModel = ref(false)
const closeModal = () => {
    showUpdateModel.value = false;
    showModal.value = false;
}
const updateValue = async (user) => {
    showUpdateModel.value = true
    updateUser.id = user.id
    updateUser.userName = user.userName
    updateUser.password = user.password
    updateUser.repeatPassword = user.password
    updateUser.equipments = user.equipments
    updateUser.role = user.role
}

const toUpdate = async () => {
    formRef.value?.validate((errors) => {
        console.log(errors)
        if (errors) {
            message.error("数据格式有误")
        } else {
            update();
        }
    })
}

const update = async () => {
    console.log(updateUser)
    var equip = ''
    for (var i = 0; i < updateUser.equipments.length; i++) {
        var a = updateUser.equipments[i] + ""
        equip = equip + a + " "
    }
    let res = await axios.put("user/" + updateUser.id, {
        userName: updateUser.userName,
        password: updateUser.password,
        equipments: equip
    })
    console.log(res)
    if (res.data.code == 200) {
        message.success(res.data.msg)
        loadUserAndEquip()
        closeModal()
    } else {
        message.error(res.data.msg)
    }
}


const goback = () => {
    router.go(-1)
}
</script>

<style lang="scss" scoped>
.card {
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    margin: auto;
    height: 60px;
    background: white;
    box-shadow: 0px 1px 3px #D3D4D8;
    border-radius: 5px;
}

.tabs {
    position: absolute;
    top: 150px;
    left: 0;
    right: 0;
    margin: auto;
    width: 1000px;
    height: auto;
    background: white;
    box-shadow: 0px 1px 3px #D3D4D8;
    border-radius: 5px;
}
</style>


<style scoped>
@import '../assets/bootstrap/css/bootstrap.min.css';
@import '../assets/bootstrap/css/font-awesome.min.css';
@import 'https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css';
@import 'http://fonts.useso.com/css?family=Open+Sans:400,300';
@import '../assets/bootstrap/css/ace.min.css';

@import '../assets/bootstrap/css/ace-rtl.min.css';
@import '../assets/bootstrap/css/ace-skins.min.css';
</style>