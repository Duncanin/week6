<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const h1Value = ref('一起陪伴、探索<br>還有你那些未完成的夢')
const heroImgs = ref([
    {
        jpg:'../assets/images/index/hero-1.png',
        alt:'hero-1'
    },
    {
        jpg:'../assets/images/index/hero-2.png',
        alt:'hero-2'
    },
    {
        jpg:'../assets/images/index/hero-3.png',
        alt:'hero-3'
    },
    {
        jpg:'../assets/images/index/hero-4.png',
        alt:'hero-4'
    },
])
//陣列反轉順序
heroImgs.value.reverse()

const stories = ref([
    {
        img: '../assets/images/index/story/story-cover-1.png',
        title: '轉型成功的設計師',
        jobTitle: '視覺設計師',
        name: '郭敏迪',
        age: 34,
        nomadYears: 2,
        desc: '從企業設計師轉職自由接案，比我想的難太多。收入不穩時我幾乎想放棄，是職旅顧問幫我找回方向與差異化。半年後，我不僅維持收入，還能自由挑案，最重要的是，我終於有時間陪爸媽。'
    },
    {
        img: '../assets/images/index/story/story-cover-2.png',
        title: '數位遊牧生活實踐者',
        jobTitle: '內容策略師',
        name: '林雨潔',
        age: 29,
        nomadYears: 2,
        desc: '兩年前我只想環遊世界，卻不知道怎麼開始。職旅給了我遠端工作與生活規劃的指導。現在我在五個國家工作過，收入比以前多 20%。每次打開電腦，看見窗外不同的風景，都慶幸當初那一個決定。'
    },
    {
        img: '../assets/images/index/story/story-cover-3.png',
        title: '中年轉型的工程師',
        jobTitle: '系統架構顧問',
        name: '張世明',
        age: 62,
        nomadYears: 2,
        desc: '59 歲被裁員時，我以為職涯結束了。職旅顧問不只幫我轉職，更讓我相信自己還有價值。現在我每月穩定接案、收入翻倍。年齡不是限制，只是我還沒找到對的方向。'
    },
    {
        img: '../assets/images/index/story/story-cover-1.png',
        title: '轉型成功的設計師',
        jobTitle: '視覺設計師',
        name: '郭敏迪',
        age: 34,
        nomadYears: 2,
        desc: '從企業設計師轉職自由接案，比我想的難太多。收入不穩時我幾乎想放棄，是職旅顧問幫我找回方向與差異化。半年後，我不僅維持收入，還能自由挑案，最重要的是，我終於有時間陪爸媽。'
    },
    {
        img: '../assets/images/index/story/story-cover-2.png',
        title: '數位遊牧生活實踐者',
        jobTitle: '內容策略師',
        name: '林雨潔',
        age: 29,
        nomadYears: 2,
        desc: '兩年前我只想環遊世界，卻不知道怎麼開始。職旅給了我遠端工作與生活規劃的指導。現在我在五個國家工作過，收入比以前多 20%。每次打開電腦，看見窗外不同的風景，都慶幸當初那一個決定。'
    },
    {
        img: '../assets/images/index/story/story-cover-3.png',
        title: '中年轉型的工程師',
        jobTitle: '系統架構顧問',
        name: '張世明',
        age: 62,
        nomadYears: 2,
        desc: '59 歲被裁員時，我以為職涯結束了。職旅顧問不只幫我轉職，更讓我相信自己還有價值。現在我每月穩定接案、收入翻倍。年齡不是限制，只是我還沒找到對的方向。'
    },
])

</script>

<template>
    <header class="">
        <div class="container-1296">
            <section
                style="background-position: center 40px; background-size: 560px 560px; background-repeat: no-repeat; @media screen and (min-width: 768px) { background-size:800px 800px;}"
                class="bg-[url(/assets/images/index/mixedCircle.svg)]
                pt-12 px-3 text-center md:pt-20 "
                >
                <h1 class="cusText-5xl" v-html="h1Value"></h1>
                
            </section>

            <section class="px-3 md:px-0 pb-12 md:pb-20">
                <div class="mt-6 mb-10 md:flex space-y-4 md:gap-6 md:text-left max-w-[815px] mx-auto text-center">
                    <p class="cusText-b-lg text-natural-50 py-spac-4">自由工作很美，也很難。<br>
                        我們用 1 對 1 陪伴，陪你從第一步開始，直到夢想變成日常
                    </p>

                    <button class="btn-lg mx-auto mb-10 md:mr-0">
                        開始你的職旅
                        <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 0 24 24" width="28"><path d="M0 0h24v24H0z" fill="none"/><path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                    </button>
                </div>
                <picture class="flex overflow-x-scroll md:gap-6 h-[200px] md:h-[400px] w-full md:grid md:grid-rows-7 md:[grid-template-columns:608px_608px_608px]">
                    <img v-for="(img, i) in heroImgs" :key="i" :src="img.jpg" :alt="img.alt" :class="['object-cover h-full w-full flex-shrink-0 block',
                        i === 0 ? 'md:row-span-7 md:col-span-1 md:col-start-3 md:row-start-1' : '',
                        i === 1 ? 'md:row-span-4 md:col-span-1 md:col-start-2 md:row-start-4' : '',
                        i === 2 ? 'md:row-span-3 md:col-span-1 md:col-start-2 md:row-start-1' : '',
                        i === 3 ? 'md:row-span-7 md:col-span-1 md:col-start-1' : '',
                    ]">
                </picture>
            </section>
        </div>

    </header>

    <section class="bg-[linear-gradient(to_top,_#F0F3F5_200px,_transparent_200px)]">
        <div class="container-1296">
            <section class="px-3 md:px-0 md:grid grid-cols-3 gap-6 py-12 md:py-20">
                <div class="col-span-1 my-auto">
                    <img src="/assets/images/index/logo.svg" alt="">
                    <h2 class="cusText-5xl py-4 md:py06">他們已經踏上職旅
                        <br>
                        聽聽他們的故事
                    </h2>
                    <p class="text-natural-50">每一段職涯轉型都有獨特挑戰，這些曾經與你有相同疑惑的夥伴，現在正過著他們嚮往的生活</p>
                </div>
    
                <!-- story card -->
                <div class="col-span-2">
                    <Swiper :slides-per-view="'auto'"
                            :space-between="0"
                            :speed="3000"
                            :loop="true">
                        <SwiperSlide v-for="story in stories" :key="story.name" class="!w-80 md:!w-[400px] flex flex-col items-center h-full rounded-card overflow-hidden bg-natural-light shadow-boxShadow m-3">
                            
                            <div class="relative w-full h-[400px] md:h-[500px]">
                                <img :src="story.img" alt="story-pic" class="w-full h-full object-cover"/>
                                <div class="absolute right-0 bottom-0 w-0 h-0 border-solid border-l-[40px] border-b-[40px] border-l-transparent  border-b-natural-light"></div>
                            </div>

                            <div class="p-4 space-y-4">
                                <h3 class="text-xl font-bold mb-1">{{ story.title }}</h3>
                                <p class="cusText-b-sm text-natural-50 line-clamp-4 h-[84px]">{{ story.desc }}</p>
                                <div class="flex cusText-b-sm items-center">
                                    <span class="font-bold border-r border-natural-85 pr-2 mr-2 cusText-b-md"> {{ story.jobTitle }} </span>{{ story.name }}（{{ story.age }}y）
                                </div>
                            </div>
                            <div class="text-natural-light bg-primary-60 rounded-tAD cusText-b-md py-2 px-4 absolute left-3 top-3">數位遊牧{{ story.nomadYears }}年</div>

                        </SwiperSlide>
                    </Swiper>
                </div>

            </section>
        </div>
    </section>


    <section class="bg-natural-95">
        <div class="container-1296">

            <h2 class="cusText-5xl flex items-center justify-center flex-col">
                <p class="cusText-xl text-primary-main border-2 border-primary-main py-4 px-5 rounded-radius-12 inline-block relative mb-4 bg-natural-light">為什麼？
                    <span class="absolute left-1/2 top-full -translate-x-1/2 w-0 h-0 border-x-[15px] border-x-transparent border-t-[15px] border-t-primary-main"></span>
                    <!-- 內層三角形：往下 2px、尺寸小 2px -->
                    <span class="absolute left-1/2 top-full -translate-x-1/2 w-0 h-0 border-x-[13px] border-x-transparent border-t-[13px] border-t-natural-light"></span>
                </p>
                選擇職旅 WorkWay
            </h2>



        </div>

    </section>
</template>
