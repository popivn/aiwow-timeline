<template>
    <aside :class="`w-full md:w-[44%] xl:w-[16%] bg-white text-black h-screen fixed top-0 left-0 z-50 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`">
        <div class="flex items-center flex-start pl-4">
            <img
                @click="toggleSidebar"
                src="/assets/icon/hamburger-button.svg"
                alt="Hamburger Button"
                class="mt-[26px] w-[32px] h-[32px] mr-[20px] cursor-pointer"
            />
            <img src="/assets/img/banner.svg" alt="Banner" class="md:mt-10 mt-[26px] md:mt-[26px] w-[125.16px] h-[40.98px] mr-2" />
        </div>

        <nav class="flex-1 overflow-y-auto mt-4">
            <ul>
                <li v-for="(item, index) in menuItems" :key="item.to" class="px-2">
                    <router-link
                        :to="item.to"
                        class="flex items-center block p-2 hover:bg-primary xl:mr-[54px] hover:text-white transition-colors duration-300 rounded-lg"
                        @mouseover="hoverIndex = index"
                        @mouseleave="hoverIndex = null"
                    >
                        <img
                            :src="index === hoverIndex ? item.activeIcon : item.icon"
                            :alt="`${item.label} Icon`"
                            class="w-5 h-5 mr-4"
                        />
                        <span class="text-sm font-medium">{{ item.label }}</span>
                    </router-link>
                </li>
            </ul>
        </nav>
    </aside>

    <div
        v-if="isSidebarOpen"
        @click="toggleSidebar"
        class="fixed inset-0 bg-black opacity-50 z-40"
    ></div>

    <div
        v-if="!isSidebarOpen"
        @click="toggleSidebar"
        class="fixed top-6 left-2 z-50 cursor-pointer"
    >
        <img src="/assets/icon/hamburger-button.svg" alt="Hamburger Button" class="w-[32px] h-[32px]" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isSidebarOpen = ref(true);
const hoverIndex = ref(null);

const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
};

const menuItems = [
    { to: "/", icon: "/assets/icon/home.svg", activeIcon: "/assets/icon/home-active.svg", label: "Trang Chủ" },
    { to: "/somewhere", icon: "/assets/icon/chat.svg", activeIcon: "/assets/icon/chat-active.svg", label: "Chat" },
    { to: "/somewhere", icon: "/assets/icon/picture.svg", activeIcon: "/assets/icon/picture-active.svg", label: "Picture" },
    { to: "/somewhere", icon: "/assets/icon/job.svg", activeIcon: "/assets/icon/job-active.svg", label: "Ngành Nghề" },
    { to: "/somewhere", icon: "/assets/icon/ai.svg", activeIcon: "/assets/icon/ai-active.svg", label: "AI Mới" },
    { to: "/somewhere", icon: "/assets/icon/lovely.svg", activeIcon: "/assets/icon/lovely-active.svg", label: "Yêu Thích" },
    { to: "/timeline", icon: "/assets/icon/timeline.svg", activeIcon: "/assets/icon/timeline-active.svg", label: "Mốc Thời Gian" },
    { to: "/somewhere", icon: "/assets/icon/hightlight.svg", activeIcon: "/assets/icon/hightlight-active.svg", label: "Nổi Bật" },
    { to: "/somewhere", icon: "/assets/icon/report.svg", activeIcon: "/assets/icon/report-active.svg", label: "Người Ảnh Hưởng" },
    { to: "/somewhere", icon: "/assets/icon/letter.svg", activeIcon: "/assets/icon/letter-active.svg", label: "Bản Tin" },
    { to: "/somewhere", icon: "/assets/icon/thinker.svg", activeIcon: "/assets/icon/thinker-active.svg", label: "Diễn Đàn" },
    { to: "/somewhere", icon: "/assets/icon/twopeople.svg", activeIcon: "/assets/icon/twopeople-active.svg", label: "Yêu Cầu" },
    { to: "/somewhere", icon: "/assets/icon/wifi.svg", activeIcon: "/assets/icon/wifi-active.svg", label: "Kết Nối Với Chúng Tôi" },
    { to: "/somewhere", icon: "/assets/icon/setting.svg", activeIcon: "/assets/icon/setting-active.svg", label: "Tài Khoản" },
];
</script>
