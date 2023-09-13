<script setup>
import AppHeader from '../global/AppHeader.vue';
</script>

<template>
    <main>
        <div class="">
            <div class="flex ">
                <AppHeader />

                <div class="flex-col w-full">
                    <div class="nav  justify-between md:hidden p-2 bg-green-700 ">
                        <div class="flex justify-center">
                            <a href="">
                                <img src="../global/assets/icon.jpg" width="40" class="" alt="logo" /></a>

                            <h1 class="text-center p-2 text-xl text-gray-800 font-bold"> ملف الشركة</h1>

                        </div>
                    </div>

                    <div class="content text-gray-800 flex justify-center bg-gray-100">

                        <div class="nums flex-col text-center py-4 space- space-y-5">
                            <p class="flex-col font-bold text-center"><img class="mx-auto p-1"
                                    src="../global/assets/shield.svg"> المستخدمين
                            </p>

                            <hr class="border-1 rounded border-gray-800 m-2 opacity-90" />

                            <table class="scroll flex justify-center text-sm font-medium">
                                <tr>
                                    <th>التحكم</th>
                                    <th>الحالة</th>
                                    <th>العاملون</th>
                                    <th>الصورة الشخصية</th>
                                </tr>
                                <tr>
                                    <td> <button id="control1" class="p-1 px-2 m-2 bg-red-700 text-white">ادارة</button>
                                    </td>
                                    <td><span id="service1" class="text-green-600 font-bold">في الخدمة</span></td>
                                    <td>أحمد علي</td>
                                    <td><img src="../global/assets/1.jpg" width="50"></td>
                                </tr>
                                <tr>
                                    <td> <button id="control2" class="p-1 px-2 m-2 bg-red-700 text-white">ادارة</button>
                                    </td>
                                    <td><span id="service2" class="text-orange-700 font-bold">اجازة</span></td>
                                    <td>محمد محمود</td>
                                    <td><img src="../global/assets/2.jpg" width="50"></td>
                                </tr>
                                <tr>
                                    <td> <button id="control1" class="p-1 px-2 m-2 bg-red-700 text-white">ادارة</button>
                                    </td>
                                    <td><span id="service1" class="text-red-700 font-bold">مفصول</span></td>
                                    <td>عبدالله اشرف </td>
                                    <td><img src="../global/assets/3.jpg" width="50"></td>
                                </tr>
                                <tr>
                                    <td> <button id="control2" class="p-1 px-2 m-2 bg-red-700 text-white">ادارة</button>
                                    </td>
                                    <td><span id="service2" class="text-orange-700 font-bold">اجازة</span></td>
                                    <td> عبدالرحمن محسن</td>
                                    <td><img src="../global/assets/4.jpg" width="50"></td>
                                </tr>
                                <tr>
                                    <td> <button id="control1" class="p-1 px-2 m-2 bg-red-700 text-white">ادارة</button>
                                    </td>
                                    <td><span id="service1" class="text-green-600 font-bold">في الخدمة</span></td>
                                    <td> وائل حسين</td>
                                    <td><img src="../global/assets/5.jpg" width="50"></td>
                                </tr>
                                <tr>
                                    <td> <button id="control2" class="p-1 px-2 m-2 bg-red-700 text-white">ادارة</button>
                                    </td>
                                    <td><span id="service2" class="text-orange-700 font-bold">اجازة</span></td>
                                    <td> علي عبدالمحسن</td>
                                    <td><img src="../global/assets/6.jpg" width="50"></td>
                                </tr>
                                <tr>
                                    <td> <button id="control1" class="p-1 px-2 m-2 bg-red-700 text-white">ادارة</button>
                                    </td>
                                    <td><span id="service1" class="text-green-600 font-bold">في الخدمة</span></td>
                                    <td>أحمد علي</td>
                                    <td><img src="../global/assets/7.jpg" width="50"></td>
                                </tr>
                                <tr>
                                    <td> <button id="control2" class="p-1 px-2 m-2 bg-red-700 text-white">ادارة</button>
                                    </td>
                                    <td><span id="service2" class="text-green-600 font-bold">في الخدمة</span></td>
                                    <td>محمد عالخالق</td>
                                    <td><img src="../global/assets/8.jpg" width="50"></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="content text-gray-800 flex justify-center bg-gray-400">
                        <hr class="border-1 rounded border-gray-800 w-20 m-1 opacity-90" />
                    </div>
                    <div class="content text-gray-800 flex-col justify-center bg-gray-200">
                        <h1 class="text-center text-xl font-bold p-4"><img class="flex-col mx-auto p-2" width="50"
                                src="../global/assets/admin.svg" alt="">اعدادات
                            المدراء</h1>
                        <hr class="border-1 rounded border-gray-800 w-20 mx-auto m-1 opacity-90" />

                        <p class="px-4 py-2 text-right text-md font-bold text-black"> المدير الحالي : <span
                                class="text-gray-700">المدير</span>
                        </p>
                        <p class="px-4 py-2 text-right text-md font-bold text-black">الحالة :<span class="text-green-500">
                                نشط </span>
                        </p>

                        <h2 class="text-right p-4">قائمة المدراء</h2>
                        <table class="flex justify-center text-md font-medium">
                            <tr>
                                <th>التحكم</th>
                                <th>الحالة</th>
                                <th>اسم المدير</th>
                                <th>الصورة الشخصية</th>
                            </tr>
                            <tr>
                                <td> <button id="control1" class="p-1 px-2 m-2 bg-red-700 text-white">ادارة</button>
                                </td>
                                <td><span id="service1" class="text-green-600 font-bold">نشط </span></td>
                                <td> المدير</td>
                                <td><img src="../global/assets/1.jpg" width="80"></td>
                            </tr>
                            <tr>
                                <td> <button id="control2" class="p-1 px-2 m-2 bg-red-700 text-white">ادارة</button>
                                </td>
                                <td><span id="service2" class="text-orange-700 font-bold">غير نشط</span></td>
                                <td> ياسر</td>
                                <td><img src="../global/assets/2.jpg" width="80"></td>
                            </tr>


                        </table>
                    </div>

                </div>
            </div>
        </div>





    </main>
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
    width: 14vh;
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
    width: 98%;
}


th {
    border-bottom: 1px solid #555;
    text-align: center;
    padding: 2px;
}

td {
    text-align: right;
    padding: 5px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}

.scroll {
    height: 400px;
    overflow-y: scroll;
    overflow-x: hidden;
}
</style>