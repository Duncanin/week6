<script setup>
import { ref } from 'vue'

const plans = ref([
    {
        hot: true,
        plan: "全面方案",
        name: "職涯轉型全程計畫",
        desc: "針對希望完全改變職業領域的資深專業人士。我們的專家團隊將協助您將過往經驗轉化為新領域的競爭優勢。",
        list: [
        "深度職能轉換評估與規劃",
        "跨領域技能遷移策略",
        "新領域人脈建立指導",
        "長期職涯發展藍圖"
        ],
        target: "從企業職場轉型為自由工作者 / 數位遊牧者的專業人士",
        price: 120000,
        link: "#",
        pic: new URL('../assets/images/service/plan-1.svg', import.meta.url).href
    },
    {
        hot: false,
        plan: "加速方案",
        name: "自由工作加速計畫",
        desc: "為已確定要轉型但需要全面規劃的專業人士設計。六次深度諮詢，從心態調整到實際操作，全方位為您的轉型做好準備。",
        list: [
        "詳細的市場機會分析",
        "個人優勢定位與差異化策略",
        "完整的轉型時間表與里程碑",
        "轉型期間的心理健康維護策略"
        ],
        target: "已經開始自由工作但想提升效能和收入的專業人士",
        price: 80000,
        link: "#",
        pic: new URL('../assets/images/service/plan-2.svg', import.meta.url).href
    },
    {
        hot: false,
        plan: "遊牧方案",
        name: "數位遊牧生活計畫",
        desc: "針對希望完全改變職業領域的資深專業人士。我們的專家團隊將協助您將過往經驗轉化為新領域的競爭優勢。",
        list: [
        "深度職能轉換評估與規劃",
        "新領域人脈建立指導",
        "跨領域技能遷移策略",
        "長期職涯發展藍圖"
        ],
        target: "希望同時擁有工作自由和地域自由的專業人士",
        price: 60000,
        link: "#",
        pic: new URL('../assets/images/service/plan-3.svg', import.meta.url).href
    },
])
</script>
<template>
    <section class="bg-[url(/assets/images/service/banner-bg.png)] bg-repeat bg-[length:200px] relative">
        <div class="container-1296 max-w-[800px]">
            <div class="hidden min-[1024px]:contents">
                <img src="/assets/images/service/banner-person.svg" alt="bg-img" class="absolute -bottom-2 right-0">
                <img src="/assets/images/service/Frame.svg" alt="bg-img" class="absolute right-0 top-0">
                <img src="/assets/images/service/Frame2.svg" alt="bg-img" class="absolute left-0 bottom-0">
            </div>
            <div class="space-y-6 md:space-y-12 py-12 md:py-20 px-3 md:px-0 text-center">
                <h1 class="cusText-5xl">服務方案</h1>
                <p class="cusTextb-lg text-natural-50 relative z-10">我們最全面的服務方案，為您提供從評估、規劃到實踐的完整支持。不再擔心轉型過程中的各種挑戰，我們的專家團隊將全程陪伴，確保您順利實現職業自由。</p>

            </div>

        </div>
    </section>

    <section>
        <div class="container-1296">
            <section class="py-12 p-3 md:py-20 md:px-0">
                <div class="flex flex-col items-center gap-4 md:">
                    <h3 class="cusText-4xl">
                        <img src="../assets/images/service/goal.svg" alt="iconImg" class="h-14 w-14 mx-auto mb-1">
                        職涯轉型全程計畫</h3>
                    <p class="cusText-b-lg text-natural-50">從企業到自由，無縫轉型之旅</p>
                </div>
    
                <div v-for="(plan, index) in plans" :key="index" class="rounded-card shadow-boxShadow p-6 pt-12 md:p-12 relative my-4" :class="plan.hot ? 'border-2 border-secondary-50' : 'border border-gray-200'" >
                    <!-- HOT 標籤 -->
                    <div v-if="plan.hot" class="absolute top-0 left-0 bg-secondary-50 text-natural-main px-4 py-2 rounded-tAD rounded-tr-none rounded-bl-none cusText-b-sm font-bold">
                        HOT
                    </div>
                    <div class="md:grid md:grid-cols-4 gap-6">
                        <div class="space-y-4 md:space-y-6 md:col-span-2 min-[1140px]:col-span-3">
                            <div class="space-y-2">
                                <!-- 方案標題 -->
                                <p class="text-primary-60 cusText-b-md">{{ plan.plan }}</p>
                                <h2 class="cusText-2xl">{{ plan.name }}</h2>
                                <p class="cusText-b-md">{{ plan.desc }}</p>
                
                                <!-- 特色清單 -->
                                <ul class="space-y-1 cusText-b-md">
                                    <li v-for="(item, idx) in plan.list" :key="idx" class="flex items-center">
                                    <span class="text-blue-500 mr-2 p-[5px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentcolor"><path d="M480-200 200-480l280-280 280 280-280 280Zm0-114 166-166-166-166-166 166 166 166Zm0-166Z"/></svg>
                                    </span>
                                    {{ item }}
                                    </li>
                                </ul>
        
                            </div>
            
                            <div class="bg-natural-95 rounded-tAD p-4 md:p-6">
                                <!-- 目標對象 -->
                                <div class="cusText-b-md">適合對象：
                                    <span class="font-bold">{{ plan.target }}</span>
                                </div>
                                <!-- 價格 -->
                                <div class="flex items-center">
                                    <p class="cusText-b-md">優惠價格：</p>
                                    <p class="cusText-3xl text-primary-60">NT$ {{ plan.price.toLocaleString() }}</p>
                                </div>
                            </div>
                            
            
                            <!-- 按鈕 -->
                            <button :href="plan.link" class="btn-filled rounded-btn cusText-b-md p-3">
                                <span class="-mb-[1px]">我有興趣
                                </span>
                                <span class="[&>svg]:md:w-6 [&>svg]:md:h-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20"><path d="M0 0h24v24H0z" fill="none"/><path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                                </span>
                            </button>
        
                        </div>
                        <div class="hidden md:block md:col-span-2 min-[1140px]:col-span-1 min-w-spac-300">
                            <img :src="plan.pic" alt="pic" class="w-full h-auto object-cover">
                        </div>

                    </div>
                </div>

            </section>
        </div>
    </section>



</template>

