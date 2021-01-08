<template>
    <ul class="topnav">
        <li><router-link get="a" to="/">推荐音乐</router-link></li>
        <li><router-link get="a" to="/hotsong">热歌榜</router-link></li>
        <li><router-link get="a" to="/search">搜索</router-link></li>
    </ul>
</template>

<script>
export default {
    
}
</script>
<style lang="less" scoped>
.topnav{
    display: flex;
    border-bottom: 1px solid #cccccc;
    li{
        line-height: 40px;
        flex: 1 1 auto;
        font-size: 15px;
        a{
            display: inline-block;
            text-decoration: none;
            color: #000000;
            &.router-link-exact-active{
                color: red;
                border-bottom: 5px solid red;
            }
        }
    }
}
</style>