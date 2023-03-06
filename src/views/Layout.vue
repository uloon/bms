<template>
    <div class="common-layout">
        <el-container>
            <el-header class="common-header flex-float">
                <div class="flex">
                    <img class="logo" src="../assets/logo.png">
                    <h1 class="title">商铺后台管理系统</h1>
                </div>
                <el-button type="danger">退出</el-button>
            </el-header>
            <el-container>
                <el-aside width="200px" class="common-aside">
                    <router-link to="/Roles">RolesList</router-link>
                    <br>
                    <router-link to="/Users">UserList</router-link>
                </el-aside>
                <el-main class="common-main">
                    <router-view></router-view></el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    name: "layout"
}
</script>

<style>
.el-container {
    height: 100vh;

}

.common-header {
    background-color:#464c58;
    display: flex;
}

.logo {
    width: 80px;
}

.title {
    color: aliceblue;
}

.common-aside {
    background-color:#464c58;
}

.common-main {
    
}
</style>