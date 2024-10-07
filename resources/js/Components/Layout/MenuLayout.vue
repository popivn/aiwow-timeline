<template>
    <div class="relative flex min-h-screen bg-gradient-to-r from-blue-100 to-purple-200">
        <Sidebar class="h-screen z-20" />
        <div class="relative flex flex-col flex-1 overflow-hidden z-10">
            <img src="/assets/img/bg-bottom.svg" alt="Bottom Background"
                class="absolute bottom-0 left-0 right-0 w-full h-auto z-0" />
            <img src="/assets/img/bg-top.svg" alt="Top Background"
                class="absolute top-0 left-0 right-0 w-full h-auto z-0" />
            <main class="flex-1 pb-16 z-20 md:ml-4 xl:ml-[16%] ml-0">
                <Header />
                <slot></slot>
            </main>
        </div>
    </div>
</template>

<script setup>
import Sidebar from '@/Components/Sidebar/Index.vue';
import Header from '@/Components/Header/Index.vue';
</script>
