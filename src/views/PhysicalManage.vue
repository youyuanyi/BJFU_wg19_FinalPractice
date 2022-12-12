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
                                    物理量操作
                                </small>
                            </h1>

                        </div><!-- /.page-header -->

                        <div class="row">

                            <div class="col-xs-12">
                                <!-- PAGE CONTENT BEGINS -->


                                <div class="row">

                                    <div class="col-xs-12">

                                        <div style="display: flex; ">
                                            <n-table :bordered="true" :single-line="false" style="margin-top:20px;">
                                                <thead>
                                                    <tr>

                                                        <th class="hidden-480">物理量编号</th>
                                                        <th class="hidden-480">物理量名</th>
                                                        <th>中文名</th>
                                                        <th>物理意义</th>
                                                        <th>换算方式</th>
                                                        <th v-if="(user.role == 0)">操作</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr v-for="(phy, index) in phyList">

                                                        <td>
                                                            {{ phy.id }}
                                                        </td>
                                                        <td class="hidden-480">{{ phy.physicalName }}</td>
                                                        <td>{{ phy.chinese_name }}</td>
                                                        <td class="hidden-480">
                                                            {{ phy.meaning }}
                                                        </td>
                                                        <td>{{ phy.conversion }}</td>
                                                        <td v-if="(user.role == 0)">
                                                            <n-space>
                                                                <n-button @click="updatePhy(phy)" type="primary">
                                                                    <template #icon><n-icon>
                                                                            <CreateOutline />
                                                                        </n-icon></template>
                                                                    编辑
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
                                    <n-form ref="formRef" :model="upPhy">
                                        <n-form-item label="物理量编号" style="margin-top: 20px;">
                                            <n-input v-model:value="upPhy.id" :disabled="!active" />
                                        </n-form-item>
                                        <n-form-item label="物理量名">
                                            <n-input v-model:value="upPhy.physicalName" placeholder="物理量名" clearable
                                                :disabled="!active" />
                                        </n-form-item>
                                        <n-form-item label="物理意义">
                                            <n-input type="textarea" v-model:value="upPhy.meaning" size="large" round
                                                placeholder="物理意义" />
                                        </n-form-item>
                                        <n-form-item label="换算方式" path="duration">
                                            <n-input v-model:value="upPhy.conversion" size="large" round
                                                placeholder="换算方式" />
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
import { ref, reactive, inject, onMounted, computed, provide, onBeforeMount } from 'vue'
import { Search } from '@vicons/ionicons5'
import InjectToken from '../components/InjectToken.vue'
import { AddCircleOutline, RefreshCircleOutline, SearchOutline, TrashOutline, CreateOutline, DownloadOutline } from "@vicons/ionicons5"
import { useRouter, useRoute } from 'vue-router'
import { eq, upperCase } from 'lodash'
const router = useRouter()
const route = useRoute()

const serverUrl = inject("serverUrl")
const axios = inject("axios")
const message = inject("message")
const dialog = inject("dialog")

const showUpdateModel = ref(false)

const user = reactive({
    avatarUrl: "",
    name: "",
    id: 0,
    role: 1,
})


const formRef = ref(null)
const bodyStyle = {
    width: "650px"
}


// 页面加载时就执行
onMounted(() => {
    loadUserInfo()
    loadAllPhy()
})

const phyList = ref([])
const loadAllPhy = async () => {
    let res = await axios.get("/phy")
    if (res.data.code == 200) {
        phyList.value = res.data.data.phyList
    }
}

const loadUserInfo = async () => {
    let res = await axios.get("/user")
    console.log(res)
    if (res.data.code == 200) {
        user.id = res.data.data.id
        user.role = res.data.data.role
        user.name = res.data.data.name
    }
}
const upPhy = reactive({
    id: "",
    physicalName: "",
    meaning: "",
    conversion: "",
})

const updatePhy = async (phy) => {
    showUpdateModel.value = true
    upPhy.id = phy.id
    upPhy.physicalName = phy.physicalName
    upPhy.meaning = phy.meaning
    upPhy.conversion = phy.conversion
}
const toUpdate = async () => {
    formRef.value?.validate((errors) => {
        if (errors) {
            message.error("数据格式有误")
        } else {
            update();
        }
    })
}
const update = async () => {
    let res = await axios.put("phy/" + upPhy.id, {
        physicalName: upPhy.physicalName,
        meaning: upPhy.meaning,
        conversion: upPhy.conversion,
    })
    console.log("res:", res)
    if (res.data.code == 200) {
        message.success(res.data.msg)
        loadAllPhy()
        loadUserInfo()
        closeModal()
    } else {
        message.error(res.data.msg)
    }
}


const closeModal = () => {
    showUpdateModel.value = false;
}

function ChangeRoute(dir) {
    router.push(dir)

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