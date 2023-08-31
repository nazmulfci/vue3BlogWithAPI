<script setup>
let url = new URLSearchParams(window.location.search).get('id');
let id = url;


import { ref } from 'vue'

const data = ref();

async function getdata() {
  const response = await fetch("https://basic-blog.teamrabbil.com/api/post-list/"+id);
   data.value = await response.json();
  console.log(data);
}

getdata();
</script>

<template>
  <div class="about">
    <h1>Category : {{ id }}</h1>
  </div>
  <hr>

  <div class="row">
    <div class="col-md-3" v-for="item in data" :key="item.id">
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

  <!-- {{ data }} -->
</template>
