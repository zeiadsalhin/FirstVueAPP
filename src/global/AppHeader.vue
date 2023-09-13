<script>
export default {
    name: "AppHeader"
}
</script>
<template>
    <div class="side">
        <div style="padding: 320px 0; height: 100vh;" class="display1 text-center bg-gray-700">
            <p class="text-4xl font-bold text-gray-200">View on mobile screen</p>
            <p class="text-xl text-gray-200">PC or Tablet is not supported</p>
        </div>


        <div class="menu flex-wrap bg-green-900 text-gray-300 mt- " id="menu">
            <p class="block font-bold mr-2 mt-2 p-2">المزرعة الذكية</p>
            <hr class="border-1 rounded border-gray-900 m-2 " />
            <img class="block font-semibold p-2 mb-2 py-5 " src="./assets/pic.png" alt="" />أهلا، المدير
            <hr class="border-1 rounded border-gray-800 m-2 opacity-90" />
            <div class="transition scale-100 hover:scale-90 duration-100 ease-in-out">
                <span class="block material-symbols-outlined">
                    home
                </span>
                <RouterLink to="/">الرئيسية</RouterLink>
            </div>
            <hr class="border-1 rounded border-gray-900 m-2 " />
            <div class="transition scale-100 hover:scale-90 duration-100 ease-in-out">
                <span class="flex-col justify-center material-symbols-outlined">
                    nest_remote_comfort_sensor
                </span>
                <RouterLink to="/SensorsView">المستشعرات</RouterLink>
            </div>
            <hr class="border-1 rounded border-gray-800 m-2 opacity-90" />
            <div class="transition scale-100 hover:scale-90 duration-100 ease-in-out"><span
                    class="material-symbols-outlined">
                    person_apron
                </span>
                <RouterLink to="/ManagerView">الادارة</RouterLink>
            </div>
            <hr class="border-1 rounded border-gray-800 m-2 opacity-90" />
            <div class="transition scale-100 hover:scale-90 duration-100 ease-in-out"><span
                    class="material-symbols-outlined">
                    support_agent
                </span>
                <a href="https://wa.me/201002986660" class="block mb-2 px-1">الدعم</a>
            </div>
            <hr class="border-1 rounded border-gray-800 m-2 opacity-90" />
            <div class="transition scale-100 hover:scale-90 duration-100 ease-in-out"><span
                    class="material-symbols-outlined">
                    info
                </span> <a class="block text-sm px-1" href="https://pactel.info">
                    معلومات</a></div>

        </div>
    </div>
</template>

<style>
* {
    font-family: "Cairo";

}

html {
    scroll-behavior: smooth;
}

body {
    background-color: rgb(255, 255, 255);

}

p {
    font-family: "Cairo";
    /* font-weight: 500; */
}



.menu {

    /* position: absolute; */
    /* top: 0; */
    /* right: -6px; */
    height: auto;
    width: 14vh;
    /* z-index: 1; */
    /* overflow-y: hidden; */
    /* background-color: gray; */
    transition: 0.5s;
    text-align: center;
    /* margin-left: -70px; */
}

#menub {
    position: relative;
    top: 0px;
    left: 170px;
}

.nav {
    /* position: absolute; */
    top: 0;
    right: 93px;

    /* width: 75%; */
    /* background-color: gray; */
    /* overflow-x: hidden; */
    /* overflow-y: hidden; */
    /* transition: 0.5s; */
    text-align: center;

}

.content1 {
    /* position: relative; */
    /* top: 0; */
    /* right: 94px; */

    /* width: 20vh; */
    /* background-color: gray; */
    /* overflow-x: scroll; */
    /* overflow-x: scroll; */
    /* transition: 0.5s; */
    text-align: center;

}

#container1 {
    margin: 20px;
    width: 200px;
    height: 100px;
}

.side {
    background-color: black;
    display: block;
    width: 5%;
}

@media (min-width:450px) {

    .display1 {
        display: block;
    }

    .display {
        display: none;
    }

}

@media (max-width:450px) {

    .display1 {
        display: none;
    }

    .display {
        display: block;
    }

}
</style>