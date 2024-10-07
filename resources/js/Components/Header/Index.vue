<template>
    <header class="flex items-center pl-[39.52px] pt-[29px] pb-0 fixed w-full z-50">
      <div class="flex items-center">
        <img src="/assets/icon/home.svg" alt="Home Icon" class="mr-2" />
        <span class="text-primary font-[500]">/ {{ currentLabel }}</span>
      </div>
    </header>
  </template>

  <script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const menuItems = [
    { to: "/", label: "Trang Chủ" },
    { to: "/timeline", label: "Mốc Thời Gian" },
  ];

  const currentLabel = computed(() => {
    const currentItem = menuItems.find(item => item.to === route.path);
    return currentItem ? currentItem.label : '';
  });
  </script>
