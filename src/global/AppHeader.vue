<script>
export default {
    name: "AppHeader"
}

</script>
<template>
    <div class="display">
        <div class="menu h-full bg-green-900 text-gray-300 " id="menu">
            <p class="block font-bold mr-2 p-2">المزرعة الذكية</p>
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
                <span class="block justify-center material-symbols-outlined">
                    nest_remote_comfort_sensor
                </span>
                <RouterLink to="/SensorsView">المستشعرات</RouterLink>
            </div>
            <hr class="border-1 rounded border-gray-800 m-2 opacity-90" />
            <div class="transition scale-100 hover:scale-90 duration-100 ease-in-out"><span
                    class="block material-symbols-outlined">
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

}



.menu {
    position: relative;
    height: auto;
    width: 10vh;

    transition: 0.5s;
    text-align: center;

}

#menub {
    position: relative;
    top: 0px;
    left: 170px;
}

.nav {

    top: 0;
    right: 93px;


    text-align: center;

}

.content1 {

    text-align: center;

}

#container1 {
    margin: 20px;
    width: 200px;
    height: 100px;
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