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
                        <div class="row">
                            <div class="col-xs-12">
                                <!-- PAGE CONTENT BEGINS -->
                                <div class="row">

                                    <div class="col-xs-12">


                                        <div style="display: flex; margin-top: 10px;">
                                            <n-tag type="success">
                                                节点
                                            </n-tag>
                                            <n-select v-model:value="pageInfo.nodeID" :options="equipOptions"
                                                @change="changeNode(pageInfo.nodeID)"
                                                style="width: 150px; margin-left:5px;margin-right:20px;" filterable
                                                clearable />
                                            <n-tag type="success">
                                                数据种类
                                            </n-tag>
                                            <n-select v-model:value="pageInfo.dataName" :options="dataOptions"
                                                style="width: 150px; margin-left:5px;margin-right: 20px;" filterable
                                                clearable />

                                            <n-tag type="success">
                                                时间段
                                            </n-tag>
                                            <n-date-picker style="width: 300px; margin-left:5px;margin-right: 20px;"
                                                v-model:formatted-value="pageInfo.time"
                                                value-format="yyyy-MM-dd HH:mm:ss" type="datetimerange" clearable />
                                            <n-button @click="search" type="success" style="margin-left: 20px;">
                                                <template #icon><n-icon>
                                                        <SearchOutline />
                                                    </n-icon></template>
                                                查询&#8194;
                                            </n-button>
                                            <n-button @click="exportExcel" style="margin-left: 20px;">
                                                <template #icon><n-icon>
                                                        <DownloadOutline />
                                                    </n-icon></template>
                                                导出&#8194;
                                            </n-button>
                                            <n-button @click="ChangeRoute('/BarManage')" style="margin-left: 20px;">
                                                <template #icon><n-icon>
                                                        <BarChart />
                                                    </n-icon></template>
                                                直方图&#8194;

                                            </n-button>
                                            <n-button @click="ChangeRoute('/LineManage')" style="margin-left: 20px;">
                                                <template #icon><n-icon>
                                                        <PieChartOutline />
                                                    </n-icon></template>
                                                折线图&#8194;
                                            </n-button>
                                        </div>
                                        <div style="display: flex; ">
                                            <n-table :bordered="true" :single-line="false" style="margin-top:20px;">
                                                <thead>
                                                    <tr>

                                                        <th class="hidden-480">数据编号</th>
                                                        <th class="hidden-480">区域</th>
                                                        <th>设备节点</th>
                                                        <th>时间</th>
                                                        <th>{{ tableHead.data1 }}</th>
                                                        <th>{{ tableHead.data2 }}</th>
                                                        <th>{{ tableHead.data3 }}</th>
                                                        <th>{{ tableHead.data4 }}</th>
                                                        <th>{{ tableHead.data5 }}</th>
                                                        <th>{{ tableHead.data6 }}</th>
                                                        <th>{{ tableHead.data7 }}</th>
                                                        <th>{{ tableHead.data8 }}</th>
                                                        <th>{{ tableHead.data9 }}</th>

                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr v-for="(data, index) in dataList">
                                                        <td>{{ data.id }}</td>
                                                        <td>{{ data.area_id }}</td>
                                                        <td>{{ data.node_id }}</td>
                                                        <td>{{ data.date }}</td>
                                                        <td>{{ data.data1 }}</td>
                                                        <td>{{ data.data2 }}</td>
                                                        <td>{{ data.data3 }}</td>
                                                        <td>{{ data.data4 }}</td>
                                                        <td>{{ data.data5 }}</td>
                                                        <td>{{ data.data6 }} </td>
                                                        <td>{{ data.data7 }}</td>
                                                        <td>{{ data.data8 }}</td>
                                                        <td>{{ data.data9 }}</td>

                                                    </tr>

                                                </tbody>
                                            </n-table>

                                            <br />
                                        </div>
                                        <n-pagination @update:page="loadUserInfo" v-model:page="pageInfo.pageNum"
                                            :page-count="pageInfo.pageCount" style="margin-top: 20px;" />
                                    </div>
                                </div>

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
import { Search, CashOutline as CashIcon, BarChart, PieChartOutline } from '@vicons/ionicons5'
import InjectToken from '../components/InjectToken.vue'
import { AddCircleOutline, RefreshCircleOutline, SearchOutline, TrashOutline, CreateOutline, DownloadOutline } from "@vicons/ionicons5"
import { useRouter, useRoute } from 'vue-router'
import { eq, flatMap, upperCase } from 'lodash'
import * as echarts from 'echarts'  // 5.0 版本后echarts的引入方式
const router = useRouter()
const route = useRoute()

const serverUrl = inject("serverUrl")
const axios = inject("axios")
const message = inject("message")
const fileDownload = inject("fileDownload")
const showUpdateModel = ref(false)

const user = reactive({
    avatarUrl: "",
    name: "",
    id: 0,
    role: 1,
})

const tableHead = reactive({
    data1: "data1",
    data2: "data2",
    data3: "data3",
    data4: "data4",
    data5: "data5",
    data6: "data6",
    data7: "data7",
    data8: "data8",
    data9: "data9",
})


const equipOptions = ref([])
const dataOptions = ref([])
const dataList = ref([])
const pageInfo = reactive({
    pageNum: 1,
    pageSize: 10,
    pageCount: 0,
    count: 0,
    nodeID: "",
    dataName: "",
    time: ""
})


// 页面加载时就执行
onMounted(() => {
    loadUserInfo()
})

const search = () => {
    pageInfo.pageNum = 1
    loadUserInfo()
}
const loadUserInfo = async () => {
    let res = await axios.get("/user")
    console.log(res)
    if (res.data.code == 200) {
        user.id = res.data.data.id
        user.role = res.data.data.role
        user.name = res.data.data.name
        loadData(0, user.id)
    }
}

const exportExcel = async () => {
    var id = user.id
    let nodeID = new Number(pageInfo.nodeID)
    let res = await axios.get(`/data/download/${id}?dataName=${pageInfo.dataName}&nodeID=${nodeID}&time=${pageInfo.time}`, { responseType: "blob" })
    console.log("excel res:", res)
    fileDownload(res.data, "result.xlsx")
}
const loadData = async (pageNum = 0, id) => {
    if (pageNum != 0) {
        pageInfo.pageNum = pageNum;
    }
    var nodeID = new Number(pageInfo.nodeID)
    let res = await axios.post(`/data/${id}?dataName=${pageInfo.dataName}&nodeID=${nodeID}&time=${pageInfo.time}&pageNum=${pageInfo.pageNum}&pageSize=${pageInfo.pageSize}`)
    console.log("res", res)
    if (res.data.code == 200) {
        dataList.value = res.data.data.dataList
        equipOptions.value = res.data.data.equipListAll.map((item) => {
            return {
                label: item.nodeName,
                value: item.id,
            }
        })
        dataOptions.value = res.data.data.phyList.map((item) => {
            return {
                label: item.dataName,
                value: item.node_id + " " + item.data_id,
            }
        })
    } else {
        console.log(res.data.code)
        message.error(res.data.msg)
    }
    pageInfo.count = res.data.data.count;
    pageInfo.pageCount = parseInt(pageInfo.count / pageInfo.pageSize) + (pageInfo.count % pageInfo.pageSize > 0 ? 1 : 0)
}



const closeModal = () => {
    showUpdateModel.value = false;
}

function ChangeRoute(dir) {
    router.push(dir)

}

const changeNode = async (id) => {
    console.log("changeNode")
    console.log("id:", id)
    if (id == null)
        return;
    let res = await axios.get(`/phy/node/${id}`)
    if (res.data.code == 200) {
        console.log("Node res:", res)
        let pp = res.data.data.phy
        let count = res.data.data.count
        for (let i = 0; i < count; i++) {
            if (i == 0)
                tableHead.data1 = pp[i].dataName
            else if (i == 1)
                tableHead.data2 = pp[i].dataName
            else if (i == 2)
                tableHead.data3 = pp[i].dataName
            else if (i == 3)
                tableHead.data4 = pp[i].dataName
            else if (i == 4)
                tableHead.data5 = pp[i].dataName
            else if (i == 5)
                tableHead.data6 = pp[i].dataName
            else if (i == 6)
                tableHead.data7 = pp[i].dataName
            else if (i == 7)
                tableHead.data8 = pp[i].dataName
            else if (i == 8)
                tableHead.data9 = pp[i].dataName
        }
        loadDataforNode(0, user.id, pp)
    }
}

// 用于动态加载某个node的dataName选项
const loadDataforNode = async (pageNum = 0, id, phy) => {
    if (pageNum != 0) {
        pageInfo.pageNum = pageNum;
    }
    var nodeID = new Number(pageInfo.nodeID)
    pageInfo.pageNum = 1
    let res = await axios.post(`/data/${id}?dataName=${pageInfo.dataName}&nodeID=${nodeID}&time=${pageInfo.time}&pageNum=${pageInfo.pageNum}&pageSize=${pageInfo.pageSize}`)
    if (res.data.code == 200) {
        dataList.value = res.data.data.dataList
        equipOptions.value = res.data.data.equipListAll.map((item) => {
            return {
                label: item.nodeName,
                value: item.id,
            }
        })
        console.log("修改dataOptions")
        console.log("phy:", phy)
        dataOptions.value = phy.map((item) => {
            return {
                label: item.dataName,
                value: item.node_id + " " + item.data_id,
            }
        })
    } else {
        console.log(res.data.code)
        message.error(res.data.msg)
    }
    pageInfo.count = res.data.data.count;
    pageInfo.pageCount = parseInt(pageInfo.count / pageInfo.pageSize) + (pageInfo.count % pageInfo.pageSize > 0 ? 1 : 0)
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