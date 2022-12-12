<template>

    <head>
        <meta charset="utf-8" />
        <title>用户主界面</title>
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

                    <div class="page-content">

                        <div class="row">
                            <div class="col-xs-12">
                                <!-- PAGE CONTENT BEGINS -->
                                <n-card size="medium">

                                    <n-carousel autoplay show-arrow>
                                        <img class="carousel-img"
                                            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg">
                                        <img class="carousel-img"
                                            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg">
                                        <img class="carousel-img"
                                            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg">
                                        <img class="carousel-img"
                                            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg">
                                    </n-carousel>

                                </n-card>

                                <n-card size="medium" hoverable title="技术路线">
                                    <n-card size="medium" hoverable title="CS">
                                        ewrjijiuhio
                                    </n-card><n-card size="medium" hoverable title="Web">
                                        ewrjijiuhio
                                    </n-card>
                                </n-card>


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
import { ref, reactive, inject, onMounted, computed } from 'vue'
import { Search } from '@vicons/ionicons5'
import InjectToken from '../components/InjectToken.vue'

import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const serverUrl = inject("serverUrl")
const axios = inject("axios")
const message = inject("message")

const selectedCategory = ref(0)
const categoryOptions = ref([])
const articleList = ref([])
const pageInfo = reactive({
    pageNum: 1,
    pageSize: 5,
    pageCount: 0,
    count: 0,
    keyword: "",
    categoryId: 0
})

const user = reactive({
    avatarUrl: "",
    name: "",
    id: 0,
    role: 1,
})

onMounted(() => {
    loadUserInfo()
})

const loadUserInfo = async () => {
    let res = await axios.get("/user")
    console.log(res)
    if (res.data.code == 200) {
        user.name = res.data.data.name
        user.role = res.data.data.role
        console.log("username", user.name)
    }
}



function ChangeRoute(dir) {
    router.push(dir)
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

.carousel-img {
    width: 100%;
    height: 300px;
    object-fit: cover;
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