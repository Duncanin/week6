<script setup>
import Footer from '../layout/footer.vue'
import Header from '../layout/header.vue'
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
const consults = ref([
    {
        hot: false,
        title: "職涯探索評估",
        desc: "3 次一對一諮詢，了解可能性和適配性",
        price: 3800,
        link: "#",
        pic: new URL('../assets/images/service/server-1.svg', import.meta.url).href
    },
    {
        hot: true,
        title: "職涯轉型規劃",
        desc: "6 次深度諮詢，建立完整轉型藍圖",
        price: 12000,
        link: "#",
        pic: new URL('../assets/images/service/server-2.svg', import.meta.url).href
    },
    {
        hot: false,
        title: "專業定位與品牌建立",
        desc: "4 次專業諮詢，確立市場定位與差異化策略",
        price: 8800,
        link: "#",
        pic: new URL('../assets/images/service/server-3.svg', import.meta.url).href
    },
])
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
    AOS.init({
        duration: 800,   // 動畫持續時間
        once: false,     // 每次滾動進入都觸發，而不是只觸發一次
    })
})
</script>
<template>
    <Header />
    
    <section class="bg-[url(/assets/images/service/banner-bg.png)] bg-repeat bg-[length:200px] relative">

        <div class="container-1296 max-w-[800px] overflow-hidden">
            <div class="hidden min-[1024px]:contents">
                
                <img src="/assets/images/service/banner-person.svg" alt="bg-img" class="absolute -bottom-2 right-0" data-aos="flip-up">
                <img src="/assets/images/service/Frame.svg" alt="bg-img" class="absolute right-0 top-0" data-aos="fade-down-left">
                <img src="/assets/images/service/Frame2.svg" alt="bg-img" class="absolute left-0 bottom-0" data-aos="fade-up-right">
            </div>
    
    
            <div class="space-y-6 md:space-y-12 py-12 md:py-20 px-3 md:px-0 text-center">
                <h1 class="cusText-5xl" data-aos="zoom-in">服務方案</h1>
                <p class="cusText-b-lg text-natural-50 relative z-10">我們最全面的服務方案，為您提供從評估、規劃到實踐的完整支持。不再擔心轉型過程中的各種挑戰，我們的專家團隊將全程陪伴，確保您順利實現職業自由。</p>
    
            </div>

        </div>
    </section>

    <section>
        <div class="container-1296 overflow-hidden">
            <section class="py-12 p-3 md:py-20 md:px-0">
                <div class="flex flex-col items-center gap-4">
                    <h3 class="cusText-4xl">
                        <img src="../assets/images/service/goal.svg" alt="iconImg" class="h-14 w-14 mx-auto mb-1" data-aos="fade-up-right">
                        職涯轉型全程計畫</h3>
                    <p class="cusText-b-lg text-natural-50">從企業到自由，無縫轉型之旅</p>
                </div>
    
                <div v-for="(plan, index) in plans" :key="index" class="rounded-card shadow-boxShadow p-6 md:p-12 relative my-4" :class="plan.hot ? 'border-2 border-secondary-50 pt-12' : 'border-none'" >
                    <!-- HOT 標籤 -->
                    <div v-if="plan.hot" class="absolute top-0 left-0 bg-secondary-50 text-natural-main px-4 py-2 rounded-tAD rounded-tr-none rounded-bl-none cusText-b-sm font-bold" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        HOT
                    </div>
                    <div class="md:grid md:grid-cols-4 gap-6 group">
                        <div class="space-y-4 md:space-y-6 md:col-span-2 min-[1140px]:col-span-3">
                            <div class="space-y-2">
                                <!-- 方案標題 -->
                                <p class="text-primary-60 cusText-b-md">{{ plan.plan }}</p>
                                <h4 class="cusText-2xl">{{ plan.name }}</h4>
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
                            <img :src="plan.pic" alt="pic" class="w-full h-auto object-cover group-hover:scale-125 transition-transform duration-500 group-hover:translate-y-1/2">
                        </div>

                    </div>
                </div>

            </section>
        </div>
    </section>

    <section class="bg-natural-95">
        <div class="container-1296 overflow-hidden">
            <section class="py-12 p-3 md:py-20 md:px-0">
                <div class="flex flex-col items-center gap-4" data-aos="fade-up-left">
                    <h3 class="cusText-4xl">
                        <img src="../assets/images/service/conversation.svg" alt="iconImg" class="h-14 w-14 mx-auto mb-1">
                        基礎諮詢服務</h3>
                    <p class="cusText-b-lg text-natural-50">我們提供第一次免費諮詢，一起建立信任的橋樑</p>
                </div>
                
                <div class="mt-6 md:mt-12 flex flex-col gap-4 md:gap-6 md:grid md:grid-cols-2 min-[1024px]:grid-cols-3">
                    <div v-for="(consult, index) in consults" :key="index" class="rounded-card shadow-boxShadow relative bg-natural-light py-6 px-4 md:px-6 min-w-spac-300 md:col-span-1" :class="consult.hot ? 'border-2 border-secondary-50' : 'border-none'" >
                        <!-- HOT 標籤 -->
                        <div v-if="consult.hot" class="absolute top-0 left-0 bg-secondary-50 text-natural-main px-4 py-2 rounded-tAD rounded-tr-none rounded-bl-none cusText-b-sm font-bold" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            HOT
                        </div>
                        <div class="flex flex-col items-center text-center gap-4 md:gap-6 group">
                            <div class="w-[120px] md:w-40">
                                <img :src="consult.pic" alt="pic" class="w-full h-auto object-cover group-hover:scale-125 transition-transform duration-700">
                            </div>
                            <div class="space-y-2">
                                <h4 class="cusText-2xl">{{ consult.title }}</h4>
                                <p class="cusText-b-lg text-natural-50">{{ consult.desc }}</p>
                                <p class="cusText-3xl text-primary-60">NT$ {{ consult.price.toLocaleString() }}</p>
        
                            </div>
                            
                            <!-- 按鈕 -->
                            <button :href="consult.link" class="btn-filled rounded-btn cusText-b-md p-3">
                                <span class="-mb-[1px]">我有興趣
                                </span>
                                <span class="[&>svg]:md:w-6 [&>svg]:md:h-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20"><path d="M0 0h24v24H0z" fill="none"/><path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                                </span>
                            </button>
        
                        </div>
    
                    </div>

                </div>

            </section>
        </div>
    </section>


    <section class="bg-[linear-gradient(to_bottom,_theme(colors.natural.95)_200px,_theme(colors.natural.light)_200px)]">
        <div class="container-1296">
            <section class="py-12 p-3 md:py-20 md:px-0 sapce-y-6 md:space-y-12">
                <div class="flex flex-col items-center gap-4">
                    <h3 class="cusText-4xl" data-aos="flip-down">
                        <img src="../assets/images/service/love.svg" alt="iconImg" class="h-14 w-14 mx-auto mb-1">
                        持續支持方案
                    </h3>
                </div>
                
                
                <section class="bg-[url('/assets/images/service/subscribe-3.svg')] bg-secondary-90 bg-[length:175%] bg-no-repeat h-[265px] bg-[position:100%_0%] md:h-[326px] border-2 border-secondary-50 shadow-boxShadow rounded-card p-6 md:p-12 flex flex-col gap-12 items-center text-center max-w-[856px] mx-auto md:bg-[length:70%] relative">
                    <div>
                        <h4 class="cusText-2xl mb-2">職旅會員計畫</h4>
                        <p class="cusText-b-md">享有長期社群支持與資源服務</p>
    
                    </div>
                    <div class="space-y-2">
                        <p class="cusText-b-md">
                            <span class="cusText-xl text-primary-60">NT$ 9,800 </span>
                            /年( NT$1,200 /月)
                        </p>
                    </div>
                    
                    <!-- 按鈕 -->
                    <button href="#" class="btn-filled rounded-btn cusText-b-md p-3">
                        <span class="-mb-[1px]">我有興趣
                        </span>
                        <span class="[&>svg]:md:w-6 [&>svg]:md:h-6">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20"><path d="M0 0h24v24H0z" fill="none"/><path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                        </span>
                    </button>

                    <div>
                        <img src="../assets/images/service/subscribe-1.svg" alt="bg-1" class="absolute -bottom-[2px] left-6 hidden md:block" data-aos="fade-right">
                        <img src="../assets/images/service/subscribe-2.svg" alt="bg-2" class="absolute -bottom-[2px] right-6 hidden md:block" data-aos="fade-left">
                    </div>

                </section>

            </section>
        </div>
    </section>

    <Footer />
</template>

