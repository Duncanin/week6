<script setup>
    import Header from '../layout/header.vue';
    import Reserve from '../layout/reserve.vue';
    import Footer from '../layout/footer.vue';

    import { ref } from 'vue'
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import 'swiper/css'

    const h1Value = ref('一起陪伴、探索<br>還有你那些未完成的夢')
    const heroImgs = ref([
        {
            jpg: new URL('/assets/images/index/hero-1.png', import.meta.url).href,
            alt:'hero-1'
        },
        {
            jpg: new URL('/assets/images/index/hero-2.png', import.meta.url).href,
            alt:'hero-2'
        },
        {
            jpg: new URL('/assets/images/index/hero-3.png', import.meta.url).href,
            alt:'hero-3'
        },
        {
            jpg: new URL('/assets/images/index/hero-4.png', import.meta.url).href,
            alt:'hero-4'
        },
    ])
    //陣列反轉順序
    heroImgs.value.reverse()

    const stories = ref([
        {
            img: new URL('/assets/images/index/story/story-cover-1.png', import.meta.url).href,
            title: '轉型成功的設計師',
            jobTitle: '視覺設計師',
            name: '郭敏迪',
            age: 34,
            nomadYears: 2,
            desc: '從企業設計師轉職自由接案，比我想的難太多。收入不穩時我幾乎想放棄，是職旅顧問幫我找回方向與差異化。半年後，我不僅維持收入，還能自由挑案，最重要的是，我終於有時間陪爸媽。'
        },
        {
            img: new URL('/assets/images/index/story/story-cover-2.png', import.meta.url).href,
            title: '數位遊牧生活實踐者',
            jobTitle: '內容策略師',
            name: '林雨潔',
            age: 29,
            nomadYears: 2,
            desc: '兩年前我只想環遊世界，卻不知道怎麼開始。職旅給了我遠端工作與生活規劃的指導。現在我在五個國家工作過，收入比以前多 20%。每次打開電腦，看見窗外不同的風景，都慶幸當初那一個決定。'
        },
        {
            img: new URL('/assets/images/index/story/story-cover-3.png', import.meta.url).href,
            title: '中年轉型的工程師',
            jobTitle: '系統架構顧問',
            name: '張世明',
            age: 62,
            nomadYears: 2,
            desc: '59 歲被裁員時，我以為職涯結束了。職旅顧問不只幫我轉職，更讓我相信自己還有價值。現在我每月穩定接案、收入翻倍。年齡不是限制，只是我還沒找到對的方向。'
        },
        {
            img: new URL('/assets/images/index/story/story-cover-1.png', import.meta.url).href,
            title: '轉型成功的設計師',
            jobTitle: '視覺設計師',
            name: '郭敏迪',
            age: 34,
            nomadYears: 2,
            desc: '從企業設計師轉職自由接案，比我想的難太多。收入不穩時我幾乎想放棄，是職旅顧問幫我找回方向與差異化。半年後，我不僅維持收入，還能自由挑案，最重要的是，我終於有時間陪爸媽。'
        },
        {
            img: new URL('/assets/images/index/story/story-cover-2.png', import.meta.url).href,
            title: '數位遊牧生活實踐者',
            jobTitle: '內容策略師',
            name: '林雨潔',
            age: 29,
            nomadYears: 2,
            desc: '兩年前我只想環遊世界，卻不知道怎麼開始。職旅給了我遠端工作與生活規劃的指導。現在我在五個國家工作過，收入比以前多 20%。每次打開電腦，看見窗外不同的風景，都慶幸當初那一個決定。'
        },
        {
            img: new URL('/assets/images/index/story/story-cover-3.png', import.meta.url).href,
            title: '中年轉型的工程師',
            jobTitle: '系統架構顧問',
            name: '張世明',
            age: 62,
            nomadYears: 2,
            desc: '59 歲被裁員時，我以為職涯結束了。職旅顧問不只幫我轉職，更讓我相信自己還有價值。現在我每月穩定接案、收入翻倍。年齡不是限制，只是我還沒找到對的方向。'
        },
    ])

    const chooseImgs =ref([
        {
            jpg: new URL('/assets/images/index/choose/adv-1.png', import.meta.url).href,
            alt:'adv-1',
            tag:'實戰經驗',
            hover:'我們的顧問都是親身走過這條路的專家，不是紙上談兵的理論家。你所學到的每一個建議，都是經過無數次嘗試與錯誤後萃取的精華。'
        },
        {
            jpg: new URL('/assets/images/index/choose/adv-2.png', import.meta.url).href,
            alt:'adv-2',
            tag:'全方位支持',
            hover:'從心態調整到實際操作，從品牌建立到財務規劃，我們提供你轉型路上需要的每一塊拼圖，讓不確定感不再阻礙你的決定。'
        },
        {
            jpg: new URL('/assets/images/index/choose/adv-3.png', import.meta.url).href,
            alt:'adv-3',
            tag:'社群力量',
            hover:'加入職旅不只是獲得諮詢，更是連結到一群志同道合的夥伴。在這裡，你的疑惑有人解答，你的成就有人分享，你的旅程不再孤單。'
        }
    ])

    const serves = ref([
        {
            img: new URL('/assets/images/index/serve-1.svg', import.meta.url).href,
            title: '免費註冊會員',
            desc: '透過網站左上角按鈕，立即註冊免費會員，與我們開始建立連結。',
        },
        {
            img: new URL('/assets/images/index/serve-2.svg', import.meta.url).href,
            title: '填寫職旅計劃',
            desc: '了解你的技能、熱情與市場需求的交會點，找出屬於你的獨特定位。',
        },
        {
            img: new URL('/assets/images/index/serve-3.svg', import.meta.url).href,
            title: '初次諮詢',
            desc: '依據你的目標與現況，給予最直接的建議，建立清晰的轉型思路。',
        },
        {
            img: new URL('/assets/images/index/serve-4.svg', import.meta.url).href,
            title: '實戰指導',
            desc: '專家一對一指導，從品牌建立到客戶開發，每一步都有明確方向。',
        },
    ])

    const qas = ref([
        {
            question:'一對一諮詢是怎麼進行的？需要準備什麼嗎？',
            anser:'諮詢通常採 Google Meet 或 Zoom，時長約 30 分鐘。我們建議你在預約前先簡單整理目前的狀態、遇到的困難、或想達成的目標。如果你不確定，顧問也會從對話中引導你探索，無需擔心準備不夠。',
        },
        {
            question:'自由職涯真的可以養活自己嗎？你們怎麼協助？',
            anser:'自由職涯可以養活自己，但需要有策略與持續調整。WorkWay 顧問會根據你的專業、興趣、可投入時間，設計客製化的變現路徑，例如自由接案、產品化服務、遠端職位申請等，同時協助你管理初期財務風險，避免因壓力過大中途放棄。',
        },
        {
            question:'職旅 WorkWay 的收費方式是怎麼計算的？',
            anser:'我們提供單次諮詢、短期方案（例如 3 次輔導包）、或專案長期陪跑計畫。每種方案都標示清楚金額與包含內容，無強制綁約或推銷額外商品。選擇前，我們也會依照你的需求與預算一起討論最適合的安排。',
        },
        {
            question:'如果諮詢後發現不適合，會有退款保障嗎？',
            anser:'WorkWay 對每一位學員負責。如果你在第一次完整諮詢結束後，覺得方向不符合期待，可在 3 日內申請退款。我們也提供一次更換顧問的機會，確保你找到最適合自己的陪伴者。',
        },
        {
            question:'我現在還不確定自己要什麼，也可以預約諮詢嗎？',
            anser:'很多人來找 WorkWay 時，其實也處於迷惘期。我們的一對一諮詢設計，就是從理解你的人生目標、價值觀與現實條件開始，逐步協助你釐清想要的生活方式與可能路徑。你不需要有答案，只需要願意開始對話。',
        },
    ])
    const openIndex = ref(0)
    const toggle = (i) => {
        openIndex.value = openIndex.value === i ? null : i

        //     if-else 寫法
        //     // 如果點擊的是當前已經展開的 → 收合
        //     if (openIndex.value === i) {
        //     openIndex.value = null
        //     // 如果點擊的是另一個 → 打開那個
        // } else {
        //     openIndex.value = i
        // }
    }

</script>

<template>
    <Header />
    <header class="">
        <div class="container-1296">
            <section
                style="background-position: center 40px; background-size: 560px 560px; background-repeat: no-repeat; @media screen and (min-width: 768px) { background-size:800px 800px;}"
                class="bg-[url(/assets/images/index/mixedCircle.svg)]
                pt-12 px-3 text-center md:pt-20">
                <h1 class="cusText-5xl" v-html="h1Value"></h1>
                
                <section class="pb-12 md:pb-20">
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
            </section>

        </div>

    </header>

    <section class="bg-[linear-gradient(to_top,_#F0F3F5_200px,_transparent_200px)]">
        <div class="container-1296">
            <section class="px-3 md:px-0 md:grid grid-cols-3 gap-6 py-12 md:py-20">
                <div class="col-span-1 my-auto">
                    <svg width="96" height="84" viewBox="0 0 96 84" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-12 h-[42px] md:w-24 md:h-[84px]">
                        <path d="M74.1289 8.19873C86.2078 8.19873 95.9999 17.9987 96 30.0874V54.3354L95.998 54.6372C95.9179 60.5522 93.491 65.9028 89.6133 69.7935V82.0005H87.0967C86.119 82.0004 85.0865 81.7192 84.167 81.3843C83.2024 81.0329 82.1563 80.5447 81.0918 79.9751C79.2139 78.9701 77.1625 77.6479 75.2236 76.1958C74.9491 76.2095 74.673 76.2188 74.3955 76.2222L74.1289 76.2241H60C54.8961 76.224 50.2015 74.4724 46.4805 71.5396C47.9663 70.501 49.2118 69.2988 50.2256 68.0571C52.9816 70.027 56.3552 71.1869 60 71.187H74.1289L74.334 71.186C74.8114 71.1802 75.2852 71.1547 75.7539 71.1099L76.75 71.0142L77.5391 71.6294C79.5009 73.1588 81.6153 74.5444 83.4639 75.5337C83.8555 75.7433 84.2296 75.931 84.5811 76.0972V67.5962L85.4102 66.8462C86.805 65.5854 87.9865 64.0952 88.8975 62.436H66V57.2056H90.7246C90.8718 56.3468 90.9547 55.4659 90.9668 54.5679L90.9678 54.3354V50.4263H71.8066V45.1968H90.9678V38.4165H77.0332V33.187H90.9678V30.0874C90.9677 20.7802 83.4286 13.2349 74.1289 13.2349H60C59.8871 13.2349 59.7745 13.2366 59.6621 13.2388C59.1363 11.5115 58.4152 9.86947 57.5244 8.33838C58.337 8.24675 59.163 8.19875 60 8.19873H74.1289Z" fill="#000000"/>
                        <path d="M36.5801 2.00024C46.2723 2.00024 54.3644 8.85613 56.2793 17.9866C59.0886 27.4208 62.3061 44.2402 62.3223 44.3245H52.4512V49.5549H43.1611C43.1612 52.751 46.3763 57.1389 50.6143 57.1389C50.6143 60.6256 45.7158 69.6026 35.0322 69.6028H20.1289C9.01212 69.6028 0.000168115 60.5841 0 49.4583V22.1458C0 11.0198 9.01202 2.00024 20.1289 2.00024H36.5801ZM42.9668 24.47C40.8291 24.4702 39.0967 26.2045 39.0967 28.344C39.0967 30.4835 40.8291 32.2178 42.9668 32.218C45.1047 32.218 46.8379 30.4836 46.8379 28.344C46.8378 26.2044 45.1046 24.47 42.9668 24.47Z" fill="#4A69E8"/>
                    </svg>

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
                            css-mode="true">
                        <SwiperSlide v-for="story in stories" :key="story.name" class="!w-80 md:!w-[400px] flex flex-col items-center h-full rounded-card overflow-hidden bg-natural-light shadow-boxShadow group m-3">
                            
                            <div class="w-full h-[400px] md:h-[500px] overflow-hidden relative">
                                <img :src="story.img" alt="story-pic" class="w-full h-full object-cover group-hover:scale-[120%] transition-transform duration-500"/>
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
            <div class="px-3 md:px-0 space-y-6 md:space-y-12 py-12 md:py-20">
                <div class="flex items-center justify-center flex-col relative">
                    <img src="/assets/images/index/img.svg" alt="bg-img" class="absolute right-0 top-0 invisible md:visible">
                    <p class="cusText-xl text-primary-main border-2 border-primary-main py-4 px-5 rounded-radius-12 inline-block relative mb-4 bg-natural-light">為什麼？
                        <span class="absolute left-1/2 top-full -translate-x-1/2 w-0 h-0 border-x-[15px] border-x-transparent border-t-[15px] border-t-primary-main"></span>
                        <!-- 內層三角形：往下 2px、尺寸小 2px -->
                        <span class="absolute left-1/2 top-full -translate-x-1/2 w-0 h-0 border-x-[13px] border-x-transparent border-t-[13px] border-t-natural-light"></span>
                    </p>
                    <h2 class="cusText-5xl">選擇職旅 WorkWay</h2>

                </div>

                <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 min-[1140px]:grid-cols-3">
                    <picture v-for="(img, i) in chooseImgs" :key="i" class="relative inline-block col-span-1 group overflow-hidden">
                        <img :src="img.jpg" :alt="img.alt" class="object-cover h-[316px] w-full block rounded-card rounded-bl-none group-hover:scale-[120%] transition-transform duration-700">

                        <!-- mask hover -->
                        <div class="absolute inset-0 bg-natural-main bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-natural-light cusText-b-md transition-opacity duration-300 px-6 text-center rounded-card">
                            {{ img.hover }}
                        </div>
                        <!-- tag -->
                        <div class="absolute bottom-0 left-0 bg-natural-95 text-sm px-6 py-3 rounded-tr-xl flex gap-2 items-center text-primary-60">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none">
                                <path fill="currentColor" d="M468-240q-96-5-162-74t-66-166q0-100 70-170t170-70q97 0 166 66t74 162l-84-25q-13-54-56-88.5T480-640q-66 0-113 47t-47 113q0 57 34.5 100t88.5 56l25 84Zm48 158q-9 2-18 2h-18q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v18q0 9-2 18l-78-24v-12q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h12l24 78Zm305 22L650-231 600-80 480-480l400 120-151 50 171 171-79 79Z"/>
                            </svg>
                            <span class="cusText-2xl text-natural-50">{{ img.tag }}</span>
                        </div>
                    </picture>
                </div>
                <p class="cusText-b-md text-natural-50 flex items-center flex-nowrap text-nowrap">
                    不是套模板的建議，而是為你量身打造的陪伴！
                    <span class="bg-natural-85 h-[1px] w-full"></span>
                </p>

            </div>
        </div>

    </section>


    <section class="bg-natural-light">
        <div class="container-1296">
            <section class="relative overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6 py-12 md:py-20 px-3 md:px-0
            bg-[url(/assets/images/index/choose/gradient-ball.png)] bg-[length:400px_400px] md:bg-[length:800px_800px] bg-no-repeat bg-[position:135px_530px] md:bg-[position:calc(100%+300px)_calc(100%+300px)]">

                <div class="h-[280px] md:h-[480px] col-span-1 group">
                    <img src="/assets/images/index/choose/team.png" alt="bg-img" class="w-full h-full block object-cover rounded-card group-hover:scale-105 transition-transform duration-[2s]">
                </div>

                <div class="cusText-b-lg text-natural-50 flex flex-col gap-6 md:px-3 col-span-1">
                    <h2 class="cusText-5xl text-natural-main text-center md:text-left">遇見你的職涯夥伴</h2>
                    <p>每位顧問都有獨特專長，更重要的是：</p>
                    <p class="p-2 cusText-2xl text-primary-60 bg-natural-95 mx-auto md:ms-0">“他們都曾面對你正在經歷的挑戰”</p>
                    <p>職旅 WorkWay 匯集了來自不同領域、擁有豐富實戰經驗的自由工作者與數位遊牧專家。我們的顧問不只教授理論，更分享親身經歷的挑戰與解決之道。</p>
                    <p>我們相信，最好的指導來自於那些已經走過你想走的路，並願意伸出手拉你一把的人。</p>
                    <button class="btn-filled mx-auto md:ml-0 cusText-b-md">
                        了解更多職旅夥伴
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20"><path d="M0 0h24v24H0z" fill="none"/><path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                    </button>
                </div>
            </section>

        </div>
    </section>


    <section class="bg-primary-60">
        <div class="container-1296">
            <section class="py-12 md:py-20 px-3 md:px-0 space-y-6 md:space-y-12">
                <div class="space-y-4 md:space-y-6 text-center">
                    <h2 class="cusText-5xl text-natural-light">服務流程</h2>
                    <p class="cusText-b-lg text-natural-light">簡單四步，踏上你的職旅</p>
                </div>

                <div class="flex gap-4 md:gap-6 overflow-x-scroll auto-cols-[306px]">
                    <div v-for="(serve, index) in serves" :key="index" class="bg-natural-light rounded-card shadow-boxShadow pt-16 pb-12 px-6 flex flex-col items-center text-center gap-4 md:gap-6 relative w-[306px] h-[370px] md:h-[390px] flex-none group">
                        <div class="bg-natural-95 text-primary-60 cusText-b-sm py-2 px-4 absolute top-0 left-0 rounded-tl-xl rounded-br-xl">STEP
                            <span class="text-primary-60 cusText-b-lg">{{ index+1 }}</span></div>
                        <img :src="serve.img" :alt="serve.title" class="w-40 h-40 block group-hover:scale-125 transition-transform duration-300">
                        <h3 class="text-xl font-bold mb-2">{{ serve.title }}</h3>
                        <p class="cusText-b-sm text-natural-50">{{ serve.desc }}</p>
                    </div>
                </div>

            </section>
            
        </div>
    </section>


    <section class="bg-[url(/assets/images/index/bg-grid.png)] bg-repeat">
        <div class="container-1296">
            
            <div class="flex flex-col py-12 md:py-20 gap-6 md:gap-12 px-3 md:-x-0">

                <div class="flex items-center justify-center flex-col relative">
                    <p class="cusText-xl text-primary-main border-2 border-primary-main py-3 px-6 rounded-radius-12 inline-block relative mb-4 bg-natural-light">\ Q&A /
                        <span class="absolute left-1/2 top-full -translate-x-1/2 w-0 h-0 border-x-[15px] border-x-transparent border-t-[15px] border-t-primary-main"></span>
                        <!-- 內層三角形：往下 2px、尺寸小 2px -->
                        <span class="absolute left-1/2 top-full -translate-x-1/2 w-0 h-0 border-x-[13px] border-x-transparent border-t-[13px] border-t-natural-light"></span>
                    </p>
                    <h2 class="cusText-5xl">你可能有些困惑...</h2>
                </div>

                <div class="grid grid-cols-12">
                    
                    <figure class="hidden md:grid h-[400px] w-[400px] col-start-1 self-end">
                        <img src="/assets/images/index/bg-qa.svg" alt="bg-qa" class="w-full h-auto object-cover hidden md:block"></figure>
                    
                        
                    <div class="col-span-12 md:-col-end-1 md:col-span-7 space-y-4 md:space-y-6">
                        <div class="rounded-radius-12 border border-natural-85 bg-natural-light shadow-boxShadow overflow-hidden hover:shadow-lg hover:bg-natural-95"
                            v-for="(qa, i) in qas" :key="i">
                            <button :id="'qa+{{ i+1 }}'" class="flex w-full text-left gap-2 border-0 cusText-b-lg font-bold text-natural-50 p-6 pb-4"
                                @click="toggle(i)">
                                
                                <span class="">Q.</span>
                                {{ qa.question }}

                                <span
                                class="ms-auto [&>svg]:h-6 [&>svg]:w-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none"
                                    :class="[openIndex === i ? '-rotate-90 transition-transform duration-300 text-primary-60' : 'transition-transform duration-300']">
                                        <path fill="currentColor" d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/>
                                    </svg>
                                </span>
                            </button>

                            <div v-show="openIndex===i" class="cusText-b-sm border-t border-natural-85 border-dashed flex p-6 pt-4">
                                <span class="cusText-xl text-primary-60 mr-2">A.</span>
                                {{ qa.anser }}
                            </div>
                        </div>
                        
                    </div>
    
                </div>
            </div>

        </div>
    </section>



    <Reserve />

    <Footer />

</template>
