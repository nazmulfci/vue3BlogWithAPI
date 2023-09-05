<script setup>
// import TheWelcome from '../components/TheWelcome.vue'

import { ref } from 'vue'
 

const list = ref();

async function getlist() {
  const response = await fetch("https://basic-blog.teamrabbil.com/api/post-newest");
  list.value = await response.json();
  console.log(list);
}

getlist();
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->



    <div class="row">
      <div class="col-md-12 text-center">
        <img src="https://t3.ftcdn.net/jpg/03/67/35/72/360_F_367357209_BG07SVnnB4HSHSaMiHajfZhrZZAE859A.jpg" class="img">
      </div>
    </div>



    <div class="row">
      <div class="col-md-12">
        <h1> Latest Blog </h1>
      </div>
      <div class="col-md-12">

        <div class="row">
          <div class="col-md-3 mb-3" v-for="item in list" :key="item.id">
            <RouterLink :to="`/details?id=${item.id}`">
              <div class="card" style="width: 18rem;">
                <img class="card-img-top" :src="item.img" :alt="item.title">
                <div class="card-body">
                  <p class="card-text"> {{ item.title }} </p>
                </div>

              </div>
            </RouterLink>
          </div>
        </div>


      </div>
    </div>
  </main>
</template>
