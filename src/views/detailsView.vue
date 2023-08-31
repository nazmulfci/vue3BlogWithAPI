<script setup>
let url = new URLSearchParams(window.location.search).get('id');
let id = url;


import { ref } from 'vue'

const data = ref();

async function getdata() {
  const response = await fetch("https://basic-blog.teamrabbil.com/api/post-details/"+id);
   data.value = await response.json();
  console.log(data);
}

getdata();
</script>

<template>
  <div class="about">
    <h4>Post Details : {{ data.postDetails.title }}</h4>
  </div>
  <hr>

  <div class="row">
    <div class="col-md-12">
       
      <div class="card">
  <img class="card-img-top" :src="data.postDetails.img" :alt="data.postDetails.title">
  <div class="card-body">
    <p class="card-text"> {{ data.postDetails.content }} </p>
  </div>

</div>
 
    </div>
  </div>

  <!-- {{ data }} -->
</template>
