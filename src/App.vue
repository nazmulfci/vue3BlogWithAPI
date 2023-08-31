<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const data = ref();

async function getData() {
  const response = await fetch("https://basic-blog.teamrabbil.com/api/post-categories");
   data.value = await response.json();
  console.log(data);
}

getData();

 

const list = ref();

async function getlist() {
  const response = await fetch("https://basic-blog.teamrabbil.com/api/post-newest");
  list.value = await response.json();
  console.log(list);
}

getlist();
</script>

<template>
  <header>
  
    <div class="wrapper">
      
      <nav class="navbar navbar-expand-lg navbar-dark  bg-dark">
  <RouterLink class="navbar-brand" to="/">My Blog</RouterLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <RouterLink class="nav-link" to="/">Home <span class="sr-only">(current)</span></RouterLink>
      </li>

      <li class="nav-item" v-for="item in data">
        <RouterLink class="nav-link" :to="`menu?id=${item.id}`"> {{ item.name }} </RouterLink>
      </li>
 
     
    </ul>


     
  </div>
</nav>
      
    </div>
  </header>

  <div class="row">
    <div class="col-md-12 text-center">
      <img src="https://t3.ftcdn.net/jpg/03/67/35/72/360_F_367357209_BG07SVnnB4HSHSaMiHajfZhrZZAE859A.jpg" class="img">
    </div>
    </div>

  <div class="row d-none">
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

  <RouterView />
      <!-- {{ data }} -->
</template>
