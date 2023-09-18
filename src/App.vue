<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { ref } from 'vue'

const data = ref();
const searchQuery = ref();
const router = useRouter();

async function getData() {
  const response = await fetch("https://basic-blog.teamrabbil.com/api/post-categories");
  data.value = await response.json();
  console.log(data);
}

getData();


function performSearch() {
      // This method will be called on each keyup event in the search box.
      // You can add any additional logic here if needed.
      console.log(searchQuery.value);
      router.push({ name: 'search', params: { query: searchQuery.value } });
    }

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

          <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2"
      v-model="searchQuery"
        placeholder="Search for products..."
        @keyup="performSearch"
       type="search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>

        </div>
      </nav>


      

    </div>
  </header>


  <router-view :key="$route.fullPath"></router-view>
  <!-- // :searchQuery="searchQuery" // {{ data }} -->
</template>
