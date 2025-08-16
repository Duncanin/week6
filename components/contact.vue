<script setup>
import Header from '../layout/header.vue'
import Footer from '../layout/footer.vue'

import { ref } from 'vue'

const consultTitle = ref([
    '職涯探索與方向','接案與技能變現','品牌與內容經營','遠端工作與數位游牧','收入與時間管理','其他（請填寫下題）'
])

const contactWay = ref([
    '信箱','電話','LINE','Discord'
])

const contactTime = ref([
    '平日上午(9:00-12:00)','平日下午(13:00-17:00)','平日晚上(18:00-21:00)','週末上午(9:00-12:00)','週末下午(13:00-17:00)','週末晚上(18:00-21:00)',
])
const infoSource = ref ([
    'Google 搜尋',
    'Instagram',
    'Facebook',
    'Threads',
    'YouTube',
    'Podcast / 節目推薦',
    '朋友或同事推薦',
    '曾參加職旅活動 / 工作坊',
    '職涯顧問介紹',
    '其他（請填寫下題）',
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

    
    <main class="bg-natural-95">
        <div class="container max-w-5xl px-3">
            <section class="py-12 md:py-20 space-y-6 md:space-y-12">
                <div class="space-y-4 md:space-y-6 text-center">
                    <h1 class="cusText-4xl">聯絡我們</h1>
                    <p class="cusText-b-lg text-natural-50">每一封郵件，我們都會親自回覆。每一通電話，都是新可能的開始。</p>
                </div>
        
                <form action="" class="bg-natural-light rounded-card p-6 md:p-12 shadow-boxShadow space-y-6 md:space-y-12 relative">

                    <img src="../assets/images/contact/person-img.svg" alt="bg-img" class="absolute right-10 -top-[140px] hidden min-[1024px]:block" data-aos="fade-down-left">

                    <!-- basic Info -->
                    <section class="md:flex border-b border-natural-85">

                        <h2 class="cusText-2xl text-natural-10 font-medium
                                    flex items-center justify-between md:flex-col md:items-start min-w-spac-300 md:justify-start md:gap-3 mb-4">基本資料
                        <sapn class="cusText-b-md text-natural-50">欄位皆為
                            <span class="cusText-b-sm font-medium py-1 px-2 text-natural-light bg-danger-45 rounded-radius-12">
                            必填</span>
                        </sapn>
                        </h2>
        
                        
                        <div class="md:flex flex-col pb-6 md:pb-12 space-y-4 md:space-y-6">

                    
                            <!-- user name -->
                            <div class="relative">
                                <input
                                type="text"
                                maxlength="30"
                                name="userName"
                                class="peer m-0 block h-[53px] md:h-[56px] w-full rounded-radius-8 border border-solid border-natural-85 bg-transparent bg-clip-padding px-3 py-4 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary-60 focus:pb-[0.625rem] focus:pt-[1.625rem] focus:outline-primary-90 focus:outline-4 focus:outline-offset-2 peer-focus:text-primary-border-primary-60 [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] cusText-b-md"
                                id="userName"
                                placeholder="userName"
                                />

                                <label
                                for="userName"
                                class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-natural-50 peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none cusText-b-md peer-focus:cusText-b-sm peer-[:not(:placeholder-shown)]:text-natural-50"
                                >
                                姓名
                                </label>
                            </div>

                            <!-- email -->
                            <div class="relative">
                                <input
                                type="email"
                                maxlength="50"
                                name="email"
                                class="peer m-0 block h-[53px] md:h-[56px] w-full rounded-radius-8 border border-solid border-natural-85 bg-transparent bg-clip-padding px-3 py-4 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary-60 focus:pb-[0.625rem] focus:pt-[1.625rem] peer-focus:text-primary-border-primary-60 [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] cusText-b-md focus:outline-primary-90 focus:outline-4 focus:outline-offset-2"
                                id="email"
                                placeholder="email"
                                />

                                <label
                                for="email"
                                class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-natural-50 peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none cusText-b-md peer-focus:cusText-b-sm peer-[:not(:placeholder-shown)]:text-natural-50"
                                >
                                信箱
                                </label>
                                <p class="cusText-b-sm text-natural-50 px-2">盡量勿使用Yahoo或Hotmail郵件信箱，以免因擋信、漏信</p>
                            </div>

                            <!-- contact phone number -->
                            <div class="relative">
                                <input
                                type="tel"
                                maxlength="15"
                                name="tel"
                                class="peer m-0 block h-[53px] md:h-[56px] w-full rounded-radius-8 border border-solid border-natural-85 bg-transparent bg-clip-padding px-3 py-4 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary-60 focus:pb-[0.625rem] focus:pt-[1.625rem] peer-focus:text-primary-border-primary-60 [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] cusText-b-md focus:outline-primary-90 focus:outline-4 focus:outline-offset-2"
                                id="tel"
                                placeholder="tel"
                                />

                                <label
                                for="tel"
                                class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-natural-50 peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none cusText-b-md peer-focus:cusText-b-sm peer-[:not(:placeholder-shown)]:text-natural-50"
                                >
                                聯絡電話
                                </label>
                                <p class="cusText-b-sm text-natural-50 px-2">我們不會以電話主動聯繫您，告知您要至ATM操作轉帳</p>
                                
                            </div>


                            <!-- professional title -->
                            <!-- 隱藏 input -->
                            <input type="hidden" name="professionalTitle" id="professionalTitleValue">
                            <div class="relative" data-twe-dropdown-ref>
                                <button
                                class="flex rounded-lg px-3 py-4 shadow-natural-90 transition duration-150 ease-in-out hover:bg-natural-90 hover:shadow-natural-90 motion-reduce:transition-none text-natural-main cusText-b-md w-full justify-between outline outline-1 outline-natural-85"
                                type="button"
                                id="professionalTitle"
                                name="professionalTitle"
                                data-twe-dropdown-toggle-ref
                                aria-expanded="false">
                                目前職業/工作身分
                                <span class="me-0 [&>svg]:h-5 [&>svg]:w-5">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clip-rule="evenodd" />
                                    </svg>
                                </span>
                                </button>
                                <ul
                                class="absolute z-[1000] m-0 hidden list-none rounded-tagAndDropdown border-none bg-clip-padding text-base data-[twe-dropdown-show]:flex flex-col w-full py-2 shadow-boxShadow bg-natural-light"
                                aria-labelledby="professionalTitle"
                                data-twe-dropdown-menu-ref>
                                <li>
                                    <a
                                    class="block w-full whitespace-nowrap text-natural-main px-6 py-2 hover:bg-natural-90 focus:bg-natural-90 focus:outline-none active:bg-natural-90 active:no-underline cusText-b-md"
                                    href="#"
                                    data-twe-dropdown-item-ref
                                    >科技</a
                                    >
                                </li>
                                <li>
                                    <a
                                    class="block w-full whitespace-nowrap text-natural-main px-6 py-2 hover:bg-natural-90 focus:bg-natural-90 focus:outline-none active:bg-natural-90 active:no-underline cusText-b-md"
                                    href="#"
                                    data-twe-dropdown-item-ref
                                    >媒體</a
                                    >
                                </li>
                                <li>
                                    <a
                                    class="block w-full whitespace-nowrap text-natural-main px-6 py-2 hover:bg-natural-90 focus:bg-natural-90 focus:outline-none active:bg-natural-90 active:no-underline cusText-b-md"
                                    href="#"
                                    data-twe-dropdown-item-ref
                                    >教育</a
                                    >
                                </li>
                                <li>
                                    <a
                                    class="block w-full whitespace-nowrap text-natural-main px-6 py-2 hover:bg-natural-90 focus:bg-natural-90 focus:outline-none active:bg-natural-90 active:no-underline cusText-b-md"
                                    href="#"
                                    data-twe-dropdown-item-ref
                                    >金融</a
                                    >
                                </li>
                                <li>
                                    <a
                                    class="block w-full whitespace-nowrap text-natural-main px-6 py-2 hover:bg-natural-90 focus:bg-natural-90 focus:outline-none active:bg-natural-90 active:no-underline cusText-b-md"
                                    href="#"
                                    data-twe-dropdown-item-ref
                                    >醫療健康</a
                                    >
                                </li>
                                <li>
                                    <a
                                    class="block w-full whitespace-nowrap text-natural-main px-6 py-2 hover:bg-natural-90 focus:bg-natural-90 focus:outline-none active:bg-natural-90 active:no-underline cusText-b-md"
                                    href="#"
                                    data-twe-dropdown-item-ref
                                    >零售製造</a
                                    >
                                </li>
                                <li>
                                    <a
                                    class="block w-full whitespace-nowrap text-natural-main px-6 py-2 hover:bg-natural-90 focus:bg-natural-90 focus:outline-none active:bg-natural-90 active:no-underline cusText-b-md"
                                    href="#"
                                    data-twe-dropdown-item-ref
                                    >服務業</a
                                    >
                                </li>
                                <li>
                                    <a
                                    class="block w-full whitespace-nowrap text-natural-main px-6 py-2 hover:bg-natural-90 focus:bg-natural-90 focus:outline-none active:bg-natural-90 active:no-underline cusText-b-md"
                                    href="#"
                                    data-twe-dropdown-item-ref
                                    >藝術創意</a
                                    >
                                </li>
                                <li>
                                    <a
                                    class="block w-full whitespace-nowrap text-natural-main px-6 py-2 hover:bg-natural-90 focus:bg-natural-90 focus:outline-none active:bg-natural-90 active:no-underline cusText-b-md"
                                    href="#"
                                    data-twe-dropdown-item-ref
                                    >非營利組織</a
                                    >
                                </li>
                                </ul>

                            </div>
                            
                        </div>
                    
                    </section>

                    <!-- consult purpose -->
                    <section class="md:flex border-b border-natural-85">
                        <h2 class="cusText-2xl text-natural-10 font-medium
                                    flex items-center justify-between md:flex-col md:items-start min-w-spac-300 md:justify-start md:gap-3 mb-4">諮詢需求
                            <sapn class="cusText-b-md text-natural-50">欄位皆為
                                <span class="cusText-b-sm font-medium py-1 px-2 text-natural-light bg-danger-45 rounded-radius-12">
                                必填</span>
                            </sapn>
                        </h2>
                        
                        <div class="md:flex flex-col pb-6 md:pb-12 space-y-4 md:space-y-6">

                            <!-- consult target -->
                            <div class="space-y-spac-8">
                                <h3 class="cusText-b-md">諮詢主題</h3>
                                <div class="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-2">
                                    <div class="ps-[0.5rem] flex items-center cusText-b-sm gap-2 relative" v-for="(v,i) in consultTitle" :key="i">
                                        <input
                                            type="checkbox"
                                            class="peer appearance-none w-5 h-5 rounded-[4px] border border-natural-85 bg-natural-light
                                                hover:border-primary-60 hover:bg-primary-60
                                                checked:bg-primary-60 checked:border-primary-60"
                                            :id="`consultTitle-${i}`"
                                            :value="v" />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" class="hidden peer-checked:block peer-hover:block absolute left-2 m-auto text-natural-light pointer-events-none" >
                                            <path fill="currentColor" d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                                        </svg>
                                        <label :for="`consultTitle-${i}`"
                                            class="flex items-center gap-2 cursor-pointer relative w-max" >
                                            {{ v }}
                                        </label>
                                    </div>
                                </div>

                                <p class="cusText-b-sm text-natural-50 ps-[0.5rem]">可複選，讓我們更了解你的狀況，安排最適合的顧問與建議。</p>
                            </div>

                            <!-- forward expert -->
                            <!-- 隱藏 input -->
                            <input type="hidden" name="workSeniority" id="workSeniorityValue">
                            <div class="relative" data-twe-dropdown-ref>
                                <button
                                class="flex rounded-lg px-3 py-4 shadow-natural-90 transition duration-150 ease-in-out hover:bg-natural-90 hover:shadow-natural-90 motion-reduce:transition-none text-natural-main cusText-b-md w-full justify-between outline outline-1 outline-natural-85"
                                type="button"
                                name="workSeniority"
                                id="workSeniority"
                                data-twe-dropdown-toggle-ref
                                aria-expanded="false"
                                data-twe-ripple-init
                                data-twe-ripple-color="light">
                                期望諮詢的專家
                                <span class="me-0 [&>svg]:h-5 [&>svg]:w-5">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clip-rule="evenodd" />
                                    </svg>
                                </span>
                                </button>
                                <ul
                                class="absolute z-[1000] m-0 hidden list-none rounded-tAD border-none bg-clip-padding text-base data-[twe-dropdown-show]:flex flex-col w-full py-2 shadow-boxShadow bg-natural-light"
                                aria-labelledby="workSeniority"
                                data-twe-dropdown-menu-ref>
                                <li>
                                    <a
                                    class="block w-full whitespace-nowrap text-natural-main px-6 py-2 hover:bg-natural-90 focus:bg-natural-90 focus:outline-none active:bg-natural-90 active:no-underline cusText-b-md"
                                    href="#"
                                    data-twe-dropdown-item-ref
                                    >1 年以下</a
                                    >
                                </li>
                                <li>
                                    <a
                                    class="block w-full whitespace-nowrap text-natural-main px-6 py-2 hover:bg-natural-90 focus:bg-natural-90 focus:outline-none active:bg-natural-90 active:no-underline cusText-b-md"
                                    href="#"
                                    data-twe-dropdown-item-ref
                                    >1-3 年</a
                                    >
                                </li>
                                <li>
                                    <a
                                    class="block w-full whitespace-nowrap text-natural-main px-6 py-2 hover:bg-natural-90 focus:bg-natural-90 focus:outline-none active:bg-natural-90 active:no-underline cusText-b-md"
                                    href="#"
                                    data-twe-dropdown-item-ref
                                    >3-5 年</a
                                    >
                                </li>
                                <li>
                                    <a
                                    class="block w-full whitespace-nowrap text-natural-main px-6 py-2 hover:bg-natural-90 focus:bg-natural-90 focus:outline-none active:bg-natural-90 active:no-underline cusText-b-md"
                                    href="#"
                                    data-twe-dropdown-item-ref
                                    >5-10 年</a
                                    >
                                </li>
                                <li>
                                    <a
                                    class="block w-full whitespace-nowrap text-natural-main px-6 py-2 hover:bg-natural-90 focus:bg-natural-90 focus:outline-none active:bg-natural-90 active:no-underline cusText-b-md"
                                    href="#"
                                    data-twe-dropdown-item-ref
                                    >10 年以上</a
                                    >
                                </li>
                                </ul>

                            </div>


                            <!-- current challenge -->
                            <div class="relative">
                                <textarea
                                name="currentChallenge"
                                maxlength="300"
                                rows="6"
                                type="text"
                                class="peer m-0 block h-40 w-full rounded-radius-8 border border-solid border-natural-85 bg-transparent bg-clip-padding px-3 py-4 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary-60 focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-natural-50 peer-focus:text-primary-border-primary-60 [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] cusText-b-md resize-none focus:outline-primary-90 focus:outline-4 focus:outline-offset-2"
                                id="currentChallenge"
                                placeholder="currentChallenge" ></textarea>
                                <label
                                for="currentChallenge"
                                class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-natural-50 peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none cusText-b-md peer-focus:cusText-b-sm"
                                >您目前面臨的主要挑戰</label>
                            </div>

                            <!-- ideal goal -->
                            <div class="relative">
                                <textarea
                                name="idealGoal"
                                maxlength="300"
                                rows="6"
                                type="text"
                                class="peer m-0 block h-40 w-full rounded-radius-8 border border-solid border-natural-85 bg-transparent bg-clip-padding px-3 py-4 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary-60 focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-natural-50 peer-focus:text-primary-border-primary-60 [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] cusText-b-md resize-none focus:outline-primary-90 focus:outline-4 focus:outline-offset-2"
                                id="idealGoal"
                                placeholder="idealGoal" ></textarea>
                                <label
                                for="idealGoal"
                                class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-natural-50 peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none cusText-b-md peer-focus:cusText-b-sm"
                                >期望達成的目標</label
                                >
                            </div>

                        </div>
                    
                    </section>
                    



                        <!-- basic Info -->
                    <section class="md:flex">

                        <h2 class="cusText-2xl text-natural-10 font-medium
                                    flex items-center justify-between md:flex-col md:items-start min-w-spac-300 md:justify-start md:gap-3 mb-4">聯絡偏好
                            <sapn class="cusText-b-md text-natural-50">欄位皆為選填</sapn>
                        </h2>
            
                            
                        <div class="md:flex flex-col pb-6 md:pb-12 space-y-4 md:space-y-6">

                            <!-- contact Way -->
                            <div class="space-y-spac-8 space-x-spac-8">
                                <h3 class="cusText-b-md">偏好聯絡方式</h3>
                                <div class="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-2">
                                    <div class="ps-[1.5rem] flex items-center cusText-b-sm" v-for="(way,i) in contactWay">
                                        <input
                                        class="relative -ms-[1.5rem] me-1 mt-0.5 h-5 w-5 appearance-none rounded-full border border-natural-85 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary-60 checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-3 checked:after:w-3 checked:after:rounded-full checked:after:border-primary-60 checked:after:bg-primary-60 checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 checked:focus:border-primary-60"
                                        type="radio" name="contactWay" :id="`contactWay-${i}`"/>
                                        <label class="inline-block ps-[0.15rem] hover:cursor-pointer" :for="`contactWay-${i}`">
                                        {{ way }}
                                        </label>
                                    </div>
                                </div>
                                
                            </div>

                            <!-- contact Time -->
                            <div class="space-y-spac-8">
                                <h3 class="cusText-b-md">偏好聯絡時段</h3>
                                <div class="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-2">
                                    <div class="ps-[0.5rem] flex items-center cusText-b-sm gap-2 relative" v-for="(v,i) in contactTime" :key="i">
                                        <input
                                            type="checkbox"
                                            class="peer appearance-none w-5 h-5 rounded-[4px] border border-natural-85 bg-natural-light
                                                hover:border-primary-60 hover:bg-primary-60
                                                checked:bg-primary-60 checked:border-primary-60"
                                            :id="`contactTime-${i}`"
                                            :value="v" />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" class="hidden peer-checked:block peer-hover:block absolute left-2 m-auto text-natural-light pointer-events-none" >
                                            <path fill="currentColor" d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                                        </svg>
                                        <label :for="`contactTime-${i}`"
                                            class="flex items-center gap-2 cursor-pointer relative w-max" >
                                            {{ v }}
                                        </label>
                                    </div>
                                </div>

                                <p class="cusText-b-sm text-natural-50 ps-[0.5rem]">建議您可以勾選 2 個時段以上</p>
                            </div>
                            
                            <!-- reserve time -->
                            <div class="relative">
                                <input
                                type="text"
                                name="reserveTime"
                                class="peer m-0 block w-full rounded-radius-8 border border-solid border-natural-85 bg-transparent bg-clip-padding px-3 py-4 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary-60 focus:pb-[0.375rem] focus:pt-[1.625rem] peer-focus:text-primary-border-primary-60 [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] cusText-b-md resize-none appearance-none [&::-webkit-calendar-picker-indicator]:hidden focus:outline-primary-90 focus:outline-4 focus:outline-offset-2"
                                id="reserveTime"
                                placeholder="預約諮詢時間">
                                </input>
                                <label
                                for="reserveTime"
                                class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-natural-50 peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none cusText-b-md peer-focus:cusText-b-sm"
                                >預約諮詢時間
                                </label>
                                <label for="reserveTime" class="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentcolor" class="absolute right-4 top-1/2 -translate-y-1/2 text-natural-50 pointer-events-auto"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>
                                </label>
                            </div>

                            <!-- Info Source -->
                            <div class="space-y-spac-8">
                                <h3 class="cusText-b-md">如何得知我們</h3>
                                <div class="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-2 ml-2">
                                    <div class="flex items-center cusText-b-sm gap-1 relative" v-for="(v,i) in infoSource" :key="i">
                                        <input type="checkbox" class="peer appearance-none w-5 h-5 rounded-[4px] border border-natural-85 bg-natural-light hover:border-primary-60 hover:bg-primary-60
                                                checked:bg-primary-60 checked:border-primary-60"
                                            :id="`infoSource-${i}`"
                                            :value="v" />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" class="hidden peer-checked:block peer-hover:block absolute left-0 m-auto text-natural-light pointer-events-none" >
                                            <path fill="currentColor" d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                                        </svg>
                                        <label :for="`infoSource-${i}`"
                                            class="flex items-center gap-2 cursor-pointer relative w-max" >
                                            {{ v }}
                                        </label>
                                    </div>
                                </div>

                                <p class="cusText-b-sm text-natural-50 ps-[0.5rem]">最多勾選 3 個</p>
                            </div>

                            <!-- leave Text -->
                            <div class="relative">
                                <textarea
                                maxlength="300"
                                type="text"
                                name="leaveText"
                                class="peer m-0 block h-40 w-full rounded-radius-8 border border-solid border-natural-85 bg-transparent bg-clip-padding px-3 py-4 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary-60 focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-natural-50 peer-focus:text-primary-border-primary-60 [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] cusText-b-md resize-none focus:outline-primary-90 focus:outline-4 focus:outline-offset-2"
                                id="leaveText"
                                placeholder="leaveText" ></textarea>
                                <label
                                for="leaveText"
                                class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-natural-50 peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none cusText-b-md peer-focus:cusText-b-sm"
                                >有什麼其他想告訴我們的事情嗎？（最多300字）</label
                                >
                            </div>
            
                            <!-- describe -->
                            <div class="flex items-center cusText-b-sm gap-1 relative">
                                <input type="checkbox" class="peer appearance-none w-5 h-5 rounded-[4px] border border-natural-85 bg-natural-light hover:border-primary-60 hover:bg-primary-60
                                        checked:bg-primary-60 checked:border-primary-60" id="describeMail" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" class="hidden peer-checked:block peer-hover:block absolute left-0 m-auto text-natural-light pointer-events-none" >
                                    <path fill="currentColor" d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                                </svg>
                                <label for="describeMail"
                                    class="flex items-center gap-2 cursor-pointer relative w-max" >
                                    我願意接收職旅最新資訊和專業內容
                                </label>
                            </div>

                            <!-- approve Principle -->
                            <div class="flex items-center cusText-b-sm gap-1 relative">
                                <input type="checkbox" class="peer appearance-none w-5 h-5 rounded-[4px] border border-natural-85 bg-natural-light hover:border-primary-60 hover:bg-primary-60
                                        checked:bg-primary-60 checked:border-primary-60" id="approvePrinciple" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" class="hidden peer-checked:block peer-hover:block absolute left-0 m-auto text-natural-light pointer-events-none" >
                                    <path fill="currentColor" d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                                </svg>
                                <label for="approvePrinciple"
                                    class="flex items-center gap-2 cursor-pointer relative w-max" >
                                    我同意
                                    <a href="./userAgreement.html" target="_blank" class="cusText-b-sm border-b border-primary-60 text-primary-60" >服務條款</a>
                                    和
                                    <a href="./privacyPolicy.html" target="_blank" class="cusText-b-sm border-b border-primary-60 text-primary-60">隱私政策</a>
                                </label>
                            </div>


                        </div>

                    
                    </section>
                    
                    <!-- button -->
                    <section class="flex flex-col gap-4 md:flex-row-reverse justify-center md:gap-6">
                        <button type="button" class="btn-filled cusText-b-md">
                        確認送出
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/></svg>
                        </button>

                        <button type="button" class="btn-outline cusText-b-md">
                        重新填寫
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/></svg>
                        </button>
                    </section>

                </form>

            </section>

        </div>
    </main>

    <Footer />
</template>