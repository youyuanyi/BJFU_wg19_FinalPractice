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
                                    首页
                                </small>
                            </h1>

                        </div><!-- /.page-header -->

                        <div class="aline">
                            <n-grid x-gap="12" :cols="11">
                                <n-gi>
                                    <n-gradient-text id="year" type="info">
                                    </n-gradient-text>
                                    <n-gradient-text id="month" type="info">
                                    </n-gradient-text>
                                    <br>
                                    <n-gradient-text :size="24" type="warning" id="day">
                                    </n-gradient-text>
                                </n-gi>
                                <n-gi>
                                    <n-card :bordered=false>
                                        <img class="decoration" src="../assets/image/彩虹.png" />
                                    </n-card>
                                </n-gi>
                                <n-gi>
                                    <n-card :bordered=false>
                                        <img class="decoration" src="../assets/image/大雪.png" />
                                    </n-card>
                                </n-gi>
                                <n-gi>
                                    <n-card :bordered=false>
                                        <img class="decoration" src="../assets/image/风.png" />
                                    </n-card>
                                </n-gi>
                                <n-gi>
                                    <n-card :bordered=false>
                                        <img class="decoration" src="../assets/image/雷暴.png" />
                                    </n-card>
                                </n-gi>
                                <n-gi>
                                    <n-card :bordered=false>
                                        <img class="decoration" src="../assets/image/大雨.png" />
                                    </n-card>
                                </n-gi>
                                <n-gi>
                                    <n-card :bordered=false>
                                        <img class="decoration" src="../assets/image/晴.png" />
                                    </n-card>
                                </n-gi>
                                <n-gi>
                                    <n-card :bordered=false>
                                        <img class="decoration" src="../assets/image/太阳雨.png" />
                                    </n-card>
                                </n-gi>
                                <n-gi>
                                    <n-card :bordered=false>
                                        <img class="decoration" src="../assets/image/雾.png" />
                                    </n-card>
                                </n-gi>
                                <n-gi>
                                    <n-card :bordered=false>
                                        <img class="decoration" src="../assets/image/霾.png" />
                                    </n-card>
                                </n-gi>
                                <n-gi>
                                    <n-card :bordered=false>
                                        <img class="decoration" src="../assets/image/小雨.png" />
                                    </n-card>
                                </n-gi>
                            </n-grid>

                        </div>


                        <div class="carousel"><!--the carousel-->

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

                        </div>

                        <div><!--cards for showing the route-->
                            <n-card class="title" :bordered="false">
                                技术路线
                            </n-card>

                            <n-grid x-gap="12" :cols="2">
                                <n-gi>
                                    <!--card for CS-->
                                    <n-card title="CS" class="abox" embeded :bordered="false">
                                        Code Segment
                                    </n-card>
                                </n-gi>
                                <n-gi>
                                    <!--card for Web-->
                                    <n-card title="Web" class="light-abox" embeded :bordered="false">
                                        后端：Golang + Gin + Gorm + JWT<br />
                                        前端：Vue3 + axois + vue-router + Naive-ui<br />
                                        测试: Postman
                                    </n-card>
                                </n-gi>
                            </n-grid>
                        </div>
                        <n-divider />




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
    getnow();
}



function ChangeRoute(dir) {
    router.push(dir)
}

function getnow() {
    //1、获得当前时间，格式化时间
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    var date = now.getDate();
    if (date < 10) {
        date = "0" + date;
    }
    //var nowstr=year+"年"+month+"月"+date+"日  ";
    var nowyear = year + "年";
    var nowmonth = month + "月";
    var nowday = date + "日";

    lementById("nowspan");
    var a = document.getElementById("year");
    var b = document.getElementById("month");
    var c = document.getElementById("day");

    //nowspan.innerHTML=nowstr;
    a.innerHTML = nowyear;
    b.innerHTML = nowmonth;
    c.innerHTML = nowday;
    //3、使时间动起来
}



</script>

<style lang="scss" scoped>
.card {
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    margin: auto;
    t: 60px;
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


.carousel-img {
    width: 100%;
    height: 240px;
    object-fit: fill;
    border-radius: 15px;
}

.title {
    height: 36px;
    font-weight: bold;
    font-size: 36px;
}

.light-abox {
    height: 108px;
    margin-top: 9px;
    border-radius: 15px;
}

.abox {
    height: 108px;
    margin-top: 9px;
    border-radius: 15px;
}

.decoration {
    height: 36px;
    object-fit: fill;
}

.aline {
    height: 54px;
}

.dateBox {
    background: #121747;
    background-image: url("~@/assets/images/时间.png");
    background-repeat: no-repeat;
    top: 70px;
    right: 50px;
    width: 400px;
    height: 88px;
}

.date {
    font-size: 28px;
    color: #8ac9ff;
    margin-left: 15px;
}

.time {
    font-size: 48px;
    color: #ffffff;
}
</style>