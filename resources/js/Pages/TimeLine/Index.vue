<template>
    <div class="flex flex-wrap justify-between">
        <div
            class="pt-6 xl:pt-[36px] ml-4 md:ml-1 xl:ml-[8%] w-full md:w-[70%] xl:w-[62%] mt-[102px] bg-white rounded-[25px] mr-4 md:mr-0 xl:mr-0 flex">
            <div class="justify-center">
                <div v-for="(item, index) in groupedItems" :key="index" class="pt-0">
                    <div class="flex justify-center">
                        <h1 class="flex self-start text-[12px] md:text-[14px] xl:text-[20px] font-bold">
                            Tháng {{ item.year }} - {{ item.month }}
                        </h1>

                        <div
                            class="ml-[23px] border-l-2 border-[#B1B1B1] pl-[32px] relative flex flex-col justify-center w-[36%] md:w-[40%] xl:w-[34%] items-start">
                            <div class="text-[12px] md:text-[14px] xl:text-[20px] absolute top-[-10px] left-[-10px] md:top-[-14.5px] md:left-[-14.5px] xl:top-[-6px] xl:left-[-17px]
                                flex items-center justify-center w-[22px] md:w-[28px] xl:w-[32px] h-[22px] md:h-[28px] xl:h-[32px]
                                bg-primary text-white font-bold rounded-full">
                                {{ groupedItems.length - index }}
                            </div>

                            <div class="flex flex-col items-start">
                                <h1
                                    class="text-primary text-[12px] md:text-[14px] xl:text-[20px] font-bold text-center">
                                    {{ item.count }} nghiệp vụ AI mới
                                </h1>
                                <h6 class="flex flex-col text-[8px] md:text-[12px] xl:text-[14px] text-left">
                                    {{ item.aiNames.join(', ') }}
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full ml-[16px] mt-[49px] mr-[16px] md:w-[24%] xl:w-[15%]">
            <div class="flex items-start">
                <img src="/assets/icon/star.svg" alt="">
                <h1 class="font-semibold text-[18px] md:text-[22px] xl:text-[25px] ml-1">Nổi Bật</h1>
            </div>
            <div class="mt-[20px]">
                <div class="bg-white md:w-full xl:w-full h-[110px] rounded-[25px] p-2 mb-4"
                    v-for="(aiItem, index) in aiItems" :key="index">
                    <div class="flex space-x-2 justify-between">
                        <div class="flex">
                            <div
                                class="border-2 border-gray-300 w-[49px] h-[49px] flex justify-center items-center rounded-[15px]">
                                <img class="w-[28px] h-[28px] object-contain" :src="aiItem.imagePath" alt="">
                            </div>
                            <div class="flex flex-col justify-start max-w-[calc(100%-80px)] ml-1">
                               <div class="flex flex-col items-start">
                                <p
                                    class="font-bold text-[8px] md:text-[10px] xl:text-[12px] overflow-hidden text-ellipsis line-clamp-2">
                                    {{ aiItem.name }}
                                </p>
                                <div class="flex items-center">
                                    <div
                                        class="w-[12px] xl:w-[18px] md:w-[14px] xl:h-[18px] md:h-[14px] h-[12px] bg-blue-500 rounded-full p-2">
                                    </div>
                                    <p
                                        class="font-medium text-[8px] md:text-[10px] xl:text-[12px] overflow-hidden whitespace-nowrap text-ellipsis mt-1 ml-1">
                                        {{ aiItem.type }}
                                    </p>
                                </div>
                               </div>
                            </div>
                        </div>
                        <div class="flex flex-col space-y-2 items-end ml-auto">
                            <img class="h-[14px] w-[14px]" src="/assets/icon/love.svg" alt="">
                            <img class="h-[14px] w-[14px]" src="/assets/icon/zoom.svg" alt="">
                            <img class="h-[14px] w-[14px]" src="/assets/icon/zoomout.svg" alt="">
                        </div>
                    </div>

                    <div class="bg-[#dbdbdb] rounded-[15px] mt-2 h-[30px] flex items-center">
                        <p class="pl-2">{{ aiItem.free ? 'Miễn Phí' : 'Có phí' }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const items = ref([]);
const groupedItems = ref([]);
const aiItems = ref([]);

onMounted(async () => {
    await fetchProfessionData();
    await fetchAIData();
});

async function fetchProfessionData() {
    try {
        const response = await axios.get('https://670271aebd7c8c1ccd3ee1e2.mockapi.io/Profession');
        items.value = response.data.map(item => {
            const [month, year] = item.date.split('-');
            return {
                ...item,
                month,
                year
            };
        }).sort((a, b) => new Date(b.date) - new Date(a.date));

        groupItems();
    } catch (error) {
        console.error('Error fetching profession data:', error);
    }
}

async function fetchAIData() {
    try {
        const response = await axios.get('https://670271aebd7c8c1ccd3ee1e2.mockapi.io/AI');
        aiItems.value = response.data;
    } catch (error) {
        console.error('Error fetching AI data:', error);
    }
}

function groupItems() {
    const grouped = {};

    items.value.forEach(item => {
        const key = `${item.year}-${item.month}`;
        if (!grouped[key]) {
            grouped[key] = {
                year: item.year,
                month: item.month,
                count: 0,
                aiNames: []
            };
        }
        grouped[key].count += 1;
        grouped[key].aiNames.push(item.name);
    });

    groupedItems.value = Object.values(grouped);
}
</script>
