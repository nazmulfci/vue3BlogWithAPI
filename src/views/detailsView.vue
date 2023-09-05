<script setup>
let url = new URLSearchParams(window.location.search).get('id');
let id = url;


import { ref } from 'vue'

const data = ref();

async function getdata() {
  
  const response = await fetch("https://basic-blog.teamrabbil.com/api/post-details/" + id);
  data.value = await response.json();
  console.log(data.value);
}

getdata();
</script>

<template>

<div class="container">
  <div class="about">
    <h4>Post Details : 
      <span v-if="data.postDetails.title">{{ data.postDetails.title }}</span></h4>
  </div>
  <hr>


  <div class="row">
    <div class="col-md-12">

      <div class="card">
        <img v-if="data.postDetails" class="card-img-top" :src="data.postDetails.img" :alt="data.postDetails.title">
        <div class="card-body">
          <p v-if="data.postDetails" class="card-text"> {{ data.postDetails.content }} </p>
        </div>

      </div>

    </div>
  </div>
  </div>

  <!-- {{ data }} -->
</template>
