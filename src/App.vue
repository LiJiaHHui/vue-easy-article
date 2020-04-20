<template>
    <div>
        <vue-progress-bar></vue-progress-bar>
        <router-view></router-view>
    </div>
</template>

<style>
/* 隐藏未编译的 Mustache 标签直到实例准备完毕 */
[v-cloak] {
    display: none;
}
</style>