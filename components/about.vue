<script setup>
import Header from '../layout/header.vue'
import Reserve from '../layout/reserve.vue'
import Footer from '../layout/footer.vue'

import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const partners = ref([
    {
        img: new URL('/assets/images/about/mentor-1.png', import.meta.url).href,
        jobTitle: '數位遊牧先驅',
        name: '陳志遠 Ethan Chen',
        tags: ['遠端工作策略', '數位遊牧生活設計'],
    },
    {
        img: new URL('/assets/images/about/mentor-2.png', import.meta.url).href,
        jobTitle: '個人品牌策略專家',
        name: '林曉彤 Clara Lin',
        tags: ['個人品牌建立','內容行銷策略','故事行銷'],
    },
    {
        img: new URL('/assets/images/about/mentor-3.png', import.meta.url).href,
        jobTitle: '財務自由規劃顧問',
        name: '王建明 Marcus',
        tags: ['稅務優化','被動收入建立','現金流管理'],
    },
    {
        img: new URL('/assets/images/about/mentor-4.png', import.meta.url).href,
        jobTitle: '創意接案與多元收入專家',
        name: '張雅琳 Ariel',
        tags: ['創意變現策略','線上課程開發'],
    },
    {
        img: new URL('/assets/images/about/mentor-5.png', import.meta.url).href,
        jobTitle: '遠端工作技術顧問',
        name: '李俊宏 Kevin Lee',
        tags: ['專案管理自動化','虛擬團隊管理'],
    },
    {
        img: new URL('/assets/images/about/mentor-6.png', import.meta.url).href,
        jobTitle: '數位遊牧先驅',
        name: '陳志遠 Ethan Chen',
        tags: ['遠端工作策略', '數位遊牧生活設計'],
    },
])

const comInfo = ref(
    {
        公司位置:'110台北市信義區信義路五段7號',
        負責人:'張世明',
        聯絡專線:'02-2758-6600',
        營業時間:'週一至週五 10:00～18:00（國定假日休息）',
        電子郵件:'contact@workway.tw',
        成立時間:'2023 年 6 月',
        統一編號:'83149276',
    }
)
</script>


<template>
    <Header />
    <section class="bg-[url(/assets/images/service/banner-bg.png)] bg-repeat bg-[length:200px] relative">

        <div class="container-1296 max-w-[800px]">
            <div class="hidden min-[1024px]:contents">
                
                <img src="/assets/images/service/banner-person.svg" alt="bg-img" class="absolute -bottom-2 right-0">
                <img src="/assets/images/service/Frame.svg" alt="bg-img" class="absolute right-0 top-0">
                <img src="/assets/images/service/Frame2.svg" alt="bg-img" class="absolute left-0 bottom-0">
            </div>
    
    
            <div class="space-y-6 md:space-y-12 py-12 md:py-20 px-3 md:px-0 text-center">
                <h1 class="cusText-5xl">關於職旅</h1>
                <p class="cusText-b-lg text-natural-50 relative z-10">職旅 WorkWay 匯集了來自不同領域、擁有豐富實戰經驗的自由工作者與數位遊牧專家。根據你的需求和階段，我們提供一對一諮詢。<br>
                無論你是剛開始探索期，還是已在轉型路上遇到瓶頸，我們都能提供適合你的專業指導。</p>
    
            </div>

        </div>
    </section>

    <section>
        <div class="container-1296">
            <section class="px-3 md:px-0 py-12 md:py-20">
                <div class="my-auto text-center">
                    <h2 class="cusText-4xl mb-4 md:mb-6">精實的職旅夥伴</h2>
                    <p class="text-natural-50 cusText-b-lg">我們相信，最好的指導來自於那些已經走過你想走的路，並願意伸出手拉你一把的人。</p>
                </div>
        
                <!-- partner card -->
                <Swiper :slides-per-view="'auto'"
                        :space-between="24"
                        css-mode="true">
                    <SwiperSlide v-for="partner in partners" :key="partner.name" class="!w-80 flex flex-col items-center h-full rounded-card overflow-hidden bg-natural-light shadow-boxShadow group  my-6 md:my-12">
                        
                        <div class="w-full h-[400px] overflow-hidden relative">
                            <img :src="partner.img" alt="partner-pic" class="w-full h-full object-cover group-hover:scale-[120%] transition-transform duration-500"/>
                            <div class="absolute right-0 bottom-0 w-0 h-0 border-solid border-l-[40px] border-b-[40px] border-l-transparent  border-b-natural-light"></div>
                        </div>
    
                        <div class="p-4 pb-6">
                            <p class="cusText-b-md text-natural-50">{{ partner.jobTitle }}</p>
                            <h3 class="text-2xl font-bold mt-2 mb-4">{{ partner.name }}</h3>
                            <div class="flex flex-wrap gap-x-2 gap-y-1 h-16">
                                <span v-for="(tag, i) in partner.tags" :key="i" class="text-sm text-natural-50 border rounded-tAD border-natural-85 py-1 px-2 mb-auto">
                                #{{ tag }}
                                </span>
                            </div>
                        </div>
    
                    </SwiperSlide>
                </Swiper>
                
                <section class="bg-primary-60 rounded-card">
                    <div class="max-w-[800px] mx-auto text-natural-light text-center p-6 pt-4 md:px-0 md:pt-6 md:pb-12">
                        <div class="flex items-center justify-center flex-col relative mb-6 md:mb-12">
                            <p class="cusText-xl text-primary-main border-2 border-primary-main py-3 px-5 rounded-radius-12 inline-block relative mb-8 md:mb-10 bg-natural-light">團隊承諾
                                <span class="absolute left-1/2 top-full -translate-x-1/2 w-0 h-0 border-x-[15px] border-x-transparent border-t-[15px] border-t-primary-main"></span>
                                <!-- 內層三角形：往下 2px、尺寸小 2px -->
                                <span class="absolute left-1/2 top-full -translate-x-1/2 w-0 h-0 border-x-[13px] border-x-transparent border-t-[13px] border-t-natural-light"></span>
                            </p>
                            <p class="cusText-b-md">我們不只是顧問，更是你職業轉型路上的夥伴與同行者。我們深知轉型過程中的不確定與恐懼，也經歷過停滯不前的困境。正因如此，我們更懂得如何陪你走過這段旅程，不只指引方向，更與你並肩同行。</p>
                        </div>
                        <picture class="block w-full md:w-4/5 h-[100px] md:h-20 mx-auto">
                            <img src="../assets/images/about/slogan-mobile.svg" alt="slogan" class="mx-auto md:hidden">
                            <img src="../assets/images/about/slogan.svg" alt="slogan" class="w-full h-full hidden md:block object-cover">
                        </picture>

                    </div>
                    
                </section>
            </section>

        </div>
    </section>

    <section class="bg-[linear-gradient(to_bottom,_theme(colors.natural.95)_980px,_theme(colors.natural.light)_200px)]">
        <div class="container-1296">
            <div class="py-12 md:py-20 px-3">
                <h2 class="cusText-4xl text-center mb-6 md:mb-12">公司資訊</h2>

                <section class="bg-natural-light rounded-card p-6 md:p-12 shadow-boxShadow">
                    <table class="mb-6 md:mb-12">
                        <tbody>
                            <tr v-for="(v,k) in comInfo" :key="k" class="border-b border-natural-85">
                                <td class="cusText-b-md text-natural-50 p-4 md:p-6 whitespace-nowrap">{{ k }}</td>
                                <td class="cusText-b-md p-4 md:p-6 w-full">{{ v }}</td>
                            </tr>
                        </tbody>
                    </table>

                    <picture class="w-full">
                        <img src="../assets/images/about/map.png" alt="map" class="f-full h-auto block object-cover">
                    </picture>

                </section>
            </div>


        </div>
    </section>


    <Reserve />
    <Footer />
</template>