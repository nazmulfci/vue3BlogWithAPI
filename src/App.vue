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

</script>

<template>
  <header>

    <div class="wrapper">

      <nav class="navbar navbar-expand-lg navbar-dark  bg-dark">
        <RouterLink class="navbar-brand" to="/">My Blog</RouterLink>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <RouterLink class="nav-link" to="/">Home </RouterLink>
            </li>

            <li class="nav-item" v-for="item in data">
              <RouterLink class="nav-link" :to="`/menu/${item.id}`"> {{ item.name }} </RouterLink>
            </li>


          </ul>



        </div>
      </nav>

    </div>
  </header>


  <RouterView />
  <!-- {{ data }} -->
</template>
