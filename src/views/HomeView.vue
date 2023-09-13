<template>
  <div class="flex-col display">
    <div class="nav  justify-between md:hidden p-2 bg-green-700 ">
      <div class="flex justify-between">
        <a href="">
          <img src="../global/assets/icon.jpg" width="40" class="" alt="logo" /></a>

        <h1 class="text-center p-2 text-xl text-gray-800 font-bold">اللوحة الرئيسية</h1>

        <button id="men" class="md:hidden justify-between">
          <!-- <div class="container">
                                <div class="bar1"></div>
                                <div class="bar2"></div>
                                <div class="bar3"></div>
                            </div> -->
        </button>
      </div>
    </div>
    <div class="content w-72 text-gray-800  bg-gray-200">
      <h1 class="px-2 py-4 text-xl font-bold">أهلا بك في لوحة التحكم الذكية</h1>
      <div class="nums flex mx-auto space-y-5"><iframe src="../global/assets/gif.gif" width="90%"></iframe>
      </div>
      <p class="px-4 py-2 text-right font-bold">حالة المزرعة : <span class="text-green-600">طبيعي</span>
      </p>
      <p class="px-4 py-3 text-right font-bold">حالة المعدات : <span class="text-green-600">بدون
          مشاكل</span>
      </p>
      <hr class="border-1 rounded border-gray-900 p-1 mt-2 " />
    </div>
    <div class="content text-gray-800 flex  w-72 bg-gray-200">
      <div class="nums flex-col py-4 px-2 text-center mx-auto justify-center mr-2 space-y-5 text-xl">
        <section class="text-center flex-col mx-auto justify-center"><i class="fa-solid fa-store fa-xl"></i>
          <div class="progress ml-2 mx-auto flex justify-center" role="progressbar" aria-valuemin="0" aria-valuemax="10"
            style="--value: 80">
          </div>
          <p class="py-2 font-extrabold mr-4">المياه</p>


        </section>
        <section class="text-center flex-col justify-center"><i class="fa-solid fa-store fa-xl"></i>
          <div class="progress ml-2 flex justify-center" role="progressbar1" aria-valuemin="0" aria-valuemax="10"
            style="--value: 90">
          </div>
          <p class="py-2 font-extrabold mr-4">المحصول</p>


        </section>
      </div>
      <div class="nums flex-col justify-center  py-4 text-center  space- space-y-5 text-xl">
        <section class="text-center flex-col"><i class="fa-solid fa-store fa-xl"></i>
          <div class="progress ml-2 flex justify-center" role="progressbar2" aria-valuemin="0" aria-valuemax="10"
            style="--value: 60">
          </div>
          <p class="py-2 font-extrabold mr-4">الرطوبة</p>


        </section>
        <section class="text-center flex-col"><i class="fa-solid fa-store fa-xl"></i>
          <div class="progress ml-2 flex justify-center" role="progressbar3" aria-valuemin="0" aria-valuemax="10"
            style="--value: 24">
          </div>
          <p class="py-2 font-extrabold mr-4">الحرارة</p>


        </section>
      </div>


    </div>
    <div class="content mt-1 text-gray-800 flex-col w-72 bg-gray-300">
      <p class="">: اخر تحديث</p>
      <span id="times" class="text-gray-600">

      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home"
}
// var time = new Date(); document.getElementById("#times").write(time.toLocaleString(time.getDay()))
</script>
<style>
.content {
  position: relative;
  /* top: 0; */
  right: -94px;

  width: 40vh;
  /* background-color: gray; */
  /* overflow-x: scroll; */
  /* overflow-x: scroll; */
  /* transition: 0.5s; */
  text-align: center;

}

.nums {
  width: 40vh;
}

.main {
  position: absolute;
  /* top: 0; */
  /* right: -6px; */
  height: auto;
  width: 14vh;
  z-index: 0;
  /* overflow-y: hidden; */
  /* background-color: gray; */
  transition: 0.5s;
  text-align: center;
  /* margin-left: -70px; */
}
</style>