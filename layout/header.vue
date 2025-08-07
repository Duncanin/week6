<script setup>
    import { Modal } from 'tw-elements';
    const openLoginModal = () => {
    const modalEl = document.getElementById('exampleModalFirst');
    const modal = new Modal(modalEl);
        modal.show();
    };
    
    import { onMounted, ref } from 'vue';

    import axios from 'axios';
    // async function getData() {
    //     console.log('getData');
    //     const resp = await axios.get('https://randomuser.me/api/');
    //     console.log(resp);
    // }
    // getData();
    

    // signup
    const signupField = ref({
        email:'',
        password: '',
        nickname:''
    })
    const api = 'https://todolist-api.hexschool.io/';

    const signupRes = ref('')
    const signup = async()=>{
        // // console.log(`${api}/users/sign_up`); //確認連結

        // const res = await axios.post(`${api}users/sign_up`,signupField.value);
        // console.log(res);
        // console.log(signupField.value);

        // try-catch
        try{
            // 註冊時會自動將 nickname 設為 user_時間
            // signupField.value.nickname = `user_${Date.now()}`;
            const res = await axios.post(`${api}users/sign_up`,signupField.value);
            console.log(res);

            // show uid
            signupRes.value =res.data.uid
        } catch (error) {
            console.log('錯誤！！');
            
            console.log(error)
            
        }
        
    }

    // signIn
    const signInField = ref({
        email:'',
        password: ''
    })

    const signInRes = ref ('');
    const signIn = async()=>{
        try{
            const res = await axios.post(`${api}users/sign_in`,signInField.value);
            console.log(res);

            // token
            signInRes.value =res.data.token;
            // token named: customToken
            document.cookie = `customToken=${res.data.token};path/`

        } catch (error) {
            console.log('錯誤！！');
            
            console.log(error)
            
        }
        
    }

    // 驗證
    const user = ref ({
        nickname:'',
        uid:''
    })

    onMounted(async()=>{
        //驗證登入
        //印出 customToken 第一組
        const token = document.cookie.replace(/(?:^|.*;\s*)customToken\s*=\s*([^;]*).*$/i,"$1")
        // console.log(token);
        const res = await axios.get(`${api}users/checkout`,{
            headers:{
                Authorization: token
            }
        })
        console.log(res);
        user.value = res.data;
        
    })

</script>

<template>
    <header class="bg-natural-light border-b border-natural-85">
        <div class="container-1296 md:max-w-[1296px]">
    
            
            <!-- Navigation bar -->
            <nav class="relative flex w-full items-center justify-between" data-twe-navbar-ref>
                <div class="grid grid-cols-7 items-center w-full py-[14px] md:py-3 px-3 md:px-0 justify-between md:grid-cols-12">
                    
                    <!-- Logo -->
                    <div class="col-span-2 w-[92px] md:w-[124px]">
                        <a href="index.html" class="block">
                            <img src="/assets/images/plan/logo-header.svg" alt="logo" class="w-full h-auto block">
                        </a>
                    </div>

                    <!-- opacity-0 透明度寫法 -->
                    <ul id="navbarSupportedContentY"
                        data-twe-collapse-item class="pointer-events-none opacity-0 fixed inset-0 z-50 h-full flex flex-col p-6 gap-6 md:gap-3 bg-natural-light items-stretch text-center transition-all duration-300 ease-in-out md:relative md:flex md:flex-row md:h-auto md:inset-auto md:z-auto md:bg-transparent data-[twe-collapse-show]:opacity-100 data-[twe-collapse-show]:pointer-events-auto md:opacity-100 col-span-8 md:p-0 md:justify-center md:pointer-events-auto"
                        >
    
                        <!-- close btn -->
                        <li class="md:hidden self-end">
                            <button type="button"
                            class="iconBtn ml-auto"
                            aria-label="Close"
                            data-twe-target="#navbarSupportedContentY"
                            data-twe-collapse-init
                            aria-controls="navbarSupportedContentY"
                            aria-expanded="true"
                            >
                            <span class="[&>svg]:h-6 [&>svg]:w-6">
                                <svg
                                xmlns="http://www.w3.org/2000/svg" height="20px"
                                viewBox="0 -960 960 960" width="20px"
                                fill="#currentColor">
                                <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z"/></svg>
                            </span>
                            </button>
                        </li>
    
                        <li class="">
                            <a class="block cusText-b-md py-4 md:py-2 md:px-6 hover:bg-natural-90 active:bg-natural-90 rounded-btn"
                            href="./service.html">服務方案</a>
                        </li>

                        <li class="">
                            <a
                            class="block cusText-b-md py-4 md:py-2 md:px-6 hover:bg-natural-90 active:bg-natural-90 rounded-btn"
                            href="./about.html">關於職旅</a>
                        </li>
                        
                        <li class="">
                            <a class="block cusText-b-md py-4 md:py-2 md:px-6 hover:bg-natural-90 active:bg-natural-90 rounded-btn"
                            href="./contact.html">聯絡我們</a>
                        </li>
                        
                        <li class="mt-auto md:hidden w-full">
                            <button class="btn-lg py-2 w-full md:cusText-sm loginBtn" type="submit"
                            @click="openLoginModal">
                                登入/註冊
                            </button>
                        </li>
                    </ul>
    
                    <!-- login/register // 會員  AND Hamburger-->
                    <div class="col-end-[-1] justify-self-end flex items-center justify-center gap-3">
    
                        <!-- 會員 -->
                        <div class="items-center justify-center userInfo hidden" id="userInfo"
                            v-if="user.uid">
                            <picture class="w-11 h-11 mr-2">
                                <img src="/assets/images/plan/user_pic.png" alt="user-pic" class="w-full h-full block rounded-radius-1000 border object-cover border-natural-85 userImg" id="userImg">
                            </picture>
                            <h3 class="cusText-b-md">Mokumaru</h3>
                        </div>
                        
                        <!-- Button trigger modal -->
                        <button class="btn-outline cusText-b-md py-2 px-4 md:px-6 text-nowrap loginBtn"
                                type="submit"
                                data-twe-toggle="modal"
                                data-twe-target="#exampleModalFirst"
                                data-twe-ripple-init
                                data-twe-ripple-color="light"
                                >
                            登入/註冊
                        </button>
    
    
    
                        <!-- login Modal -->
                        <div data-twe-modal-init
                            style="display: none"
                            class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                            id="exampleModalFirst"
                            tabindex="-1"
                            aria-labelledby="exampleModalFirstLabel">
                            <div data-twe-modal-dialog-ref
                                class="pointer-events-none relative translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out mx-auto min-[576px]:mt-7 max-w-xl lg:max-w-7xl">
    
                                <div class="pointer-events-auto relative rounded-md overflow-hidden border-none bg-natural-light bg-clip-padding text-current shadow-4 outline-none my-6 mx-3 flex flex-1">
                                    <div class="overflow-hidden object-center">
                                        <img src="../assets/images/login.png" alt="login-img" class="hidden object-cover w-full h-full min-[1024px]:block">
                                    </div>
    
                                    <div class="flex flex-col items-center rounded-card p-6 min-[1024px]:p-12 w-full relative" data-twe-modal-body-ref>
                                        <button type="button"
                                            class="iconBtn absolute p-[10px] right-4 top-4 min-[1024px]:right-6 min-[1024px]:top-6"
                                            aria-label="Close"
                                            data-twe-modal-dismiss>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentcolor"><path fill="currentcolor" d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z"/></svg>
                                        </button>
    
                                        <h3 class="cusText-4xl mb-6 min-[1024px]:mb-12" id="exampleModalFirstLabel">
                                            登入
                                        </h3>
    
                                        <div class="flex flex-col w-full gap-4">
                                            <button class="btn-outline py-4 w-full flex items-center rounded-btn border border-natural-85 min-[1024px]:gap-1">
                                                <img src="/assets/images/google.svg" alt="googleIcon" class="object-cover h-5 w-5">
                                                <span>Google</span>
                                            </button>
                                            <button class="btn-outline py-4 w-full flex items-center rounded-btn border border-natural-85 min-[1024px]:gap-1">
                                                <img src="/assets/images/discord.svg" alt="discordIcon" class="object-cover h-5 w-5">
                                                <span>Discord</span>
                                            </button>
                                        </div>
    
                                        
                                        <div class="w-full border-t border-natural-85 mt-6 pt-6 space-y-4">
                                            <div class="relative">
                                                <input type="email" maxlength="50" name="account" class="peer m-0 block h-[53px] md:h-[56px] w-full rounded-radius-8 border border-solid border-natural-85 bg-transparent bg-clip-padding px-3 py-4 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary-60 focus:pb-[0.625rem] focus:pt-[1.625rem] peer-focus:text-primary-border-primary-60 [&amp;:not(:placeholder-shown)]:pb-[0.625rem] [&amp;:not(:placeholder-shown)]:pt-[1.625rem] cusText-b-md focus:outline-primary-90 focus:outline-4 focus:outline-offset-2" id="account" placeholder="Email"
                                                v-model="signInField.email">
                                                
                                                <label for="account" class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-natural-50 peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none cusText-b-md peer-focus:cusText-b-sm peer-[:not(:placeholder-shown)]:text-natural-50">
                                                帳號
                                                </label>
                                            </div>
    
                                            <div class="relative">
                                                <input type="password" maxlength="50" name="password" class="peer m-0 block h-[53px] md:h-[56px] w-full rounded-radius-8 border border-solid border-natural-85 bg-transparent bg-clip-padding px-3 py-4 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary-60 focus:pb-[0.625rem] focus:pt-[1.625rem] peer-focus:text-primary-border-primary-60 [&amp;:not(:placeholder-shown)]:pb-[0.625rem] [&amp;:not(:placeholder-shown)]:pt-[1.625rem] cusText-b-md focus:outline-primary-90 focus:outline-4 focus:outline-offset-2" id="password" placeholder="password" v-model="signInField.password">
    
                                                <label for="password" class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-natural-50 peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not (:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none cusText-b-md peer-focus:cusText-b-sm peer-[:not(:placeholder-shown)]:text-natural-50">
                                                密碼
                                                </label>
                                                <svg class="absolute right-3 min-[1024px]:right-[18px] top-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="none"><path fill="currentcolor" d="m637-425-62-62q4-38-23-65.5T487-576l-62-62q13-5 27-7.5t28-2.5q70 0 119 49t49 119q0 14-2.5 28t-8.5 27Zm133 133-52-52q36-28 65.5-61.5T833-480q-49-101-144.5-158.5T480-696q-26 0-51 3t-49 10l-58-58q38-15 77.5-21t80.5-6q143 0 261.5 77.5T912-480q-22 57-58.5 103.5T770-292Zm-2 202L638-220q-38 14-77.5 21t-80.5 7q-143 0-261.5-77.5T48-480q22-57 58-104t84-85L90-769l51-51 678 679-51 51ZM241-617q-35 28-65 61.5T127-480q49 101 144.5 158.5T480-264q26 0 51-3.5t50-9.5l-45-45q-14 5-28 7.5t-28 2.5q-70 0-119-49t-49-119q0-14 3.5-28t6.5-28l-81-81Zm287 89Zm-96 96Z"/></svg>
                                            </div>
                                            
                                            <!-- <br>
                                            token: {{ signInRes }} -->
                                        
                                        </div>
                                        <a class="cusText-b-sm text-natural-50 ml-auto cursor-pointer py-4">忘記密碼</a>
                                        
                                        <button class="btn-filled w-full cusText-b-md mb-6 min-[1024px]:mb-12"
                                        @click="signIn">
                                            送出
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20"><path d="M0 0h24v24H0z" fill="none" color="currentColor"/><path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                                        </button>
    
                                        <div class="cusText-b-md flex gap-1">
                                            <p class="text-natural-50">不是會員？</p>
                                            <span data-twe-modal-dismiss>
                                                <button type="button"
                                                    class="transition text-primary-60 border-b border-primary-60 hover:font-bold hover:border-b-2"
                                                    data-twe-ripple-init
                                                    data-twe-ripple-color="light"
                                                    data-twe-toggle="modal"
                                                    data-twe-target="#exampleModalSecond">
                                                    快速註冊
                                                </button>
                                            </span>
                                        </div>
    
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <!-- register Modal -->
                        <div data-twe-modal-init
                            style="display: none"
                            class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                            id="exampleModalSecond"
                            tabindex="-1"
                            aria-labelledby="exampleModalSecondLabel">
                            <div data-twe-modal-dialog-ref
                                class="pointer-events-none relative translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 w-auto max-w-xl lg:max-w-7xl">
    
                                <div class="pointer-events-auto relative rounded-md overflow-hidden border-none bg-natural-light bg-clip-padding text-current shadow-4 outline-none my-6 mx-3 flex flex-row-reverse flex-1">
                                    <div class="overflow-hidden object-center">
                                        <img src="../assets/images/register.png" alt="register-img" class="hidden object-cover w-full h-full min-[1024px]:block">
                                    </div>
                                    <div class="flex flex-col items-center rounded-card p-6 min-[1024px]:p-12 w-full bg-natural-light relative" data-twe-modal-body-ref>
                                        <button type="button"
                                            class="iconBtn absolute p-[10px] right-4 top-4 min-[1024px]:right-6 min-[1024px]:top-6"
                                            aria-label="Close"
                                            data-twe-modal-dismiss>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentcolor"><path fill="currentcolor" d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z"/></svg>
                                        </button>
                                        <h3 class="cusText-4xl mb-6 min-[1024px]:mb-12" id="exampleModalSecondLabel">
                                            註冊
                                        </h3>
        
                                        <div class="flex flex-col w-full gap-4" data-twe-modal-body-ref>
                                            <button class="btn-outline py-4 w-full flex items-center rounded-btn border border-natural-85 min-[1024px]:gap-1">
                                                <img src="/assets/images/google.svg" alt="googleIcon" class="object-cover h-5 w-5">
                                                <span>Google</span>
                                            </button>
                                            <button class="btn-outline py-4 w-full flex items-center rounded-btn border border-natural-85 min-[1024px]:gap-1">
                                                <img src="/assets/images/discord.svg" alt="discordIcon" class="object-cover h-5 w-5">
                                                <span>Discord</span>
                                            </button>
                                        </div>
                                        
                                        
                                        <div class="w-full border-t border-natural-85 mt-6 pt-6 space-y-4">

                                            <!-- name -->
                                            <div class="relative">
                                                <input type="test" maxlength="50" name="userName" class="peer m-0 block h-[53px] md:h-[56px] w-full rounded-radius-8 border border-solid border-natural-85 bg-transparent bg-clip-padding px-3 py-4 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary-60 focus:pb-[0.625rem] focus:pt-[1.625rem] peer-focus:text-primary-border-primary-60 [&amp;:not(:placeholder-shown)]:pb-[0.625rem] [&amp;:not(:placeholder-shown)]:pt-[1.625rem] cusText-b-md focus:outline-primary-90 focus:outline-4 focus:outline-offset-2" id="userName" placeholder="userName" v-model="signupField.nickname">
        
                                                <label for="userName" class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-natural-50 peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none cusText-b-md peer-focus:cusText-b-sm peer-[:not(:placeholder-shown)]:text-natural-50">
                                                姓名
                                                </label>
                                            </div>


                                            <div class="relative">
                                                <input type="email" maxlength="50" name="email" class="peer m-0 block h-[53px] md:h-[56px] w-full rounded-radius-8 border border-solid border-natural-85 bg-transparent bg-clip-padding px-3 py-4 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary-60 focus:pb-[0.625rem] focus:pt-[1.625rem] peer-focus:text-primary-border-primary-60 [&amp;:not(:placeholder-shown)]:pb-[0.625rem] [&amp;:not(:placeholder-shown)]:pt-[1.625rem] cusText-b-md focus:outline-primary-90 focus:outline-4 focus:outline-offset-2" id="email" placeholder="Email"
                                                v-model="signupField.email">
        
                                                <label for="email" class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-natural-50 peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none cusText-b-md peer-focus:cusText-b-sm peer-[:not(:placeholder-shown)]:text-natural-50">
                                                信箱
                                                </label>
                                            </div>

                                            <!-- {{ signupField.email }} -->
                                            
                                            <div class="relative">
                                                <input type="password" maxlength="50" name="password" class="peer m-0 block h-[53px] md:h-[56px] w-full rounded-radius-8 border border-solid border-natural-85 bg-transparent bg-clip-padding px-3 py-4 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary-60 focus:pb-[0.625rem] focus:pt-[1.625rem] peer-focus:text-primary-border-primary-60 [&amp;:not(:placeholder-shown)]:pb-[0.625rem] [&amp;:not(:placeholder-shown)]:pt-[1.625rem] cusText-b-md focus:outline-primary-90 focus:outline-4 focus:outline-offset-2" id="password" placeholder="password"
                                                v-model="signupField.password">
        
                                                <label for="password" class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-natural-50 peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not (:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none cusText-b-md peer-focus:cusText-b-sm peer-[:not(:placeholder-shown)]:text-natural-50">
                                                密碼
                                                </label>
                                                <svg class="absolute right-3 min-[1024px]:right-[18px] top-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="none"><path fill="currentcolor" d="m637-425-62-62q4-38-23-65.5T487-576l-62-62q13-5 27-7.5t28-2.5q70 0 119 49t49 119q0 14-2.5 28t-8.5 27Zm133 133-52-52q36-28 65.5-61.5T833-480q-49-101-144.5-158.5T480-696q-26 0-51 3t-49 10l-58-58q38-15 77.5-21t80.5-6q143 0 261.5 77.5T912-480q-22 57-58.5 103.5T770-292Zm-2 202L638-220q-38 14-77.5 21t-80.5 7q-143 0-261.5-77.5T48-480q22-57 58-104t84-85L90-769l51-51 678 679-51 51ZM241-617q-35 28-65 61.5T127-480q49 101 144.5 158.5T480-264q26 0 51-3.5t50-9.5l-45-45q-14 5-28 7.5t-28 2.5q-70 0-119-49t-49-119q0-14 3.5-28t6.5-28l-81-81Zm287 89Zm-96 96Z"/></svg>
                                            </div>

                                            <!-- {{ signupField.password }} -->

                                            <!-- <br>
                                            <input type="text" placeholder="NickName" v-model="signupField.nickname">
                                            nickname: {{ signupField.nickname }}
                                            <br> -->


                                            <!-- show uid -->
                                            <!-- {{ signupRes }} -->

                                            <div class="relative">
                                                <input type="password" maxlength="50" name="password" class="peer m-0 block h-[53px] md:h-[56px] w-full rounded-radius-8 border border-solid border-natural-85 bg-transparent bg-clip-padding px-3 py-4 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary-60 focus:pb-[0.625rem] focus:pt-[1.625rem] peer-focus:text-primary-border-primary-60 [&amp;:not(:placeholder-shown)]:pb-[0.625rem] [&amp;:not(:placeholder-shown)]:pt-[1.625rem] cusText-b-md focus:outline-primary-90 focus:outline-4 focus:outline-offset-2" id="password" placeholder="password">
        
                                                <label for="password" class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-natural-50 peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not (:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none cusText-b-md peer-focus:cusText-b-sm peer-[:not(:placeholder-shown)]:text-natural-50">
                                                確認密碼
                                                </label>
                                                <svg class="absolute right-3 min-[1024px]:right-[18px] top-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="none"><path fill="currentcolor" d="m637-425-62-62q4-38-23-65.5T487-576l-62-62q13-5 27-7.5t28-2.5q70 0 119 49t49 119q0 14-2.5 28t-8.5 27Zm133 133-52-52q36-28 65.5-61.5T833-480q-49-101-144.5-158.5T480-696q-26 0-51 3t-49 10l-58-58q38-15 77.5-21t80.5-6q143 0 261.5 77.5T912-480q-22 57-58.5 103.5T770-292Zm-2 202L638-220q-38 14-77.5 21t-80.5 7q-143 0-261.5-77.5T48-480q22-57 58-104t84-85L90-769l51-51 678 679-51 51ZM241-617q-35 28-65 61.5T127-480q49 101 144.5 158.5T480-264q26 0 51-3.5t50-9.5l-45-45q-14 5-28 7.5t-28 2.5q-70 0-119-49t-49-119q0-14 3.5-28t6.5-28l-81-81Zm287 89Zm-96 96Z"/></svg>
                                            </div>
                                        </div>
    
                                        <div class="flex gap-1 me-auto my-4">
                                            <label class="flex items-center gap-2 cursor-pointer">
                                                <input type="checkbox" class="peer appearance-none w-5 h-5 rounded-[4px] border border-natural-85 bg-natural-light hover:border-primary-60 hover:bg-primary-60 active:border-primary-60 active:bg-primary-60 disabled:bg-natural-75 disabled:border-natural-75 [&.error]:bg-danger-90 [&.error]:border-danger-45 checked:bg-primary-60 checked:border-primary-60 cursor-pointer" />
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 16 16" class="hidden peer-hover:block peer-active:block peer-checked:block absolute pointer-events-none text-natural-light" >
                                                        <path fill="currentColor" d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                                                    </svg>
                                            </label>
                                                我同意
                                                <a href="./userAgreement.html" target="_blank" class="cusText-b-sm border-b border-primary-60 text-primary-60">服務條款</a>
                                                和
                                                <a href="./privacyPolicy.html" target="_blank" class="cusText-b-sm border-b border-primary-60 text-primary-60">隱私政策</a>
                                        </div>
                                        
                                        <button class="btn-filled w-full cusText-b-md mb-6 min-[1024px]:mb-12" type="button" @click="signup">
                                            送出
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20"><path d="M0 0h24v24H0z" fill="none" color="currentColor"/><path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                                        </button>
                                        
                                        <div class="cusText-b-md flex gap-1">
                                            <p class="text-natural-50">已經會員？</p>
                                            <span data-twe-modal-dismiss>
                                                <button type="button"
                                                    class="transition text-primary-60 border-b border-primary-60 hover:font-bold hover:border-b-2"
                                                    data-twe-ripple-init
                                                    data-twe-ripple-color="light"
                                                    data-twe-toggle="modal"
                                                    data-twe-target="#exampleModalFirst">
                                                    快速登入
                                                </button>
                                            </span>
                                        </div>
                                    
                                    </div>
    
                                </div>
                            </div>
                        </div>
                        
    
                        <!-- Hamburger menu button -->
                        <button class="iconBtn p-[10px] focus:ring-0 md:hidden rounded-btn hover:bg-natural-90 active:bg-natural-90"
                        type="button"
                        data-twe-collapse-init
                        data-twe-target="#navbarSupportedContentY"
                        aria-controls="navbarSupportedContentY"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        id="loginBtn">
                        <!-- Hamburger menu icon -->
                            <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" stroke-width="1.5" width="24" height="24"
                            stroke="currentColor">
                                <path stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
    
    
                </div>
            </nav>
    
        </div>
    </header>
    
</template>

