<script setup>
// import Msg from '../components/HelpMsg.vue';

</script>
<template>
    <div class="">
        <div class="">



            <div class="flex-col ">
                <div class="nav   md:hidden p-2 bg-green-700 ">
                    <div class="flex justify-center">
                        <a href="">
                            <img src="../global/assets/icon.jpg" width="40" class="" alt="logo" /></a>

                        <h1 class="text-center p-2 text-xl text-gray-800 font-bold"> المستشعرات</h1>

                    </div>
                </div>

                <div class="content text-gray-800 flex-col justify-center bg-gray-100">

                    <div class="nums flex-col text-center py-4   space- space-y-5">
                        <p class="font-bold text-center">التحكم بالمستشعرات</p>
                        <p class="px-4 text-right text-sm font-bold">حالة النظام : <span class="text-green-600">طبيعي</span>
                        </p>
                        <p class="px-4 text-right text-sm font-bold">الأخطاء : <span class="text-green-600">لا توجد
                                أخطاء</span>
                        </p>
                        <hr class="border-1 rounded border-gray-800 m-2 opacity-90" />

                        <table class="flex-col justify-center font-medium">
                            <tr>
                                <th>ادارة</th>
                                <th>الحالة</th>
                                <th>المستشعر</th>
                            </tr>
                            <tr>
                                <td> <button id="control1" class="p-1 px-2 m-2 bg-red-700 text-white">ايقاف</button>
                                </td>
                                <td><span id="light" class="text-green-600 font-bold">مفعل</span></td>
                                <td>الاضاءة</td>
                            </tr>
                            <tr>
                                <td> <button id="control2" class="p-1 px-2 m-2 bg-red-700 text-white">ايقاف</button>
                                </td>
                                <td><span id="water" class="text-green-600 font-bold">مفعل</span></td>
                                <td>المياه</td>
                            </tr>
                        </table>
                    </div>
                    <div class="text-center bg-gray-300 p-4 font-bold">
                        <h1>التفعيل التلقائي للمستشعرات : <span class="text-green-700">مفعل</span></h1>
                    </div>
                    <div class="bg-gray-100 p-4 font-bold">
                        <h1 class="text-right text-xl p-2">اعدادات التفعيل التلقائي</h1>
                        <hr class="border-1 rounded border-gray-800 w-20 mx-auto m-2 opacity-90" />

                        <div class="p-2">
                            <p class="text-right text-sm">ضبط التفعيل الاوتوماتيكي : <span id="custom"
                                    class="text-green-600">تلقائي</span></p>

                            <div class="flex justify-between p-4">
                                <input onclick="customf()" type="time" id="time" value="">
                                <p class="text-sm">: وقت التشغيل</p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<style>
* {
    font-family: "Cairo";
    /* font-weight: 700; */
    /* font-size: 100px; */

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

.bar1,
.bar2,
.bar3 {
    width: 30px;
    height: 3px;
    background-color: #000000;
    margin: 7px 10px;
    transition: 0.3s;
}

.change .bar1 {
    transform: translate(0, 11px) rotate(-45deg);
}

.change .bar2 {
    opacity: 0;
}

.change .bar3 {
    transform: translate(0, -11px) rotate(45deg);
}

.menu {
    /* position: absolute; */
    /* top: 0; */
    /* right: -6px; */
    height: auto;
    width: 15vh;
    z-index: 9999;
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

#container {
    margin: 20px;
    width: 200px;
    height: 100px;
}

table {
    width: 100%;
}


th {
    border-bottom: 1px solid #555;
    text-align: right;
    padding: 8px;
}

td {
    text-align: right;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}
</style>