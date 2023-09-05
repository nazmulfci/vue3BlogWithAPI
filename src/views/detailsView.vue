<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router';




// best practice
// - onMounted hook have to use at mounting component.




// initialize with default object. Because at first when template is rendering, postDetails object is necessary.
// let data = ref({
//   postDetails:{
//     title:'',
//     img:'#',
//     content:"dummy"
//   }
// });

const route = useRoute();
let data = reactive({
      postDetails:{
        title:'',
        img:'#',
        content:"dummy"
      }
    });
let id =route.query.id// new URLSearchParams(window.location.search).get('id'); //route.query.id

let name =route.query.name // new URLSearchParams(window.location.search).get('id'); //route.query.id


onMounted(async ()=>{
  console.log("id: ", id)
  const response = await fetch("https://basic-blog.teamrabbil.com/api/post-details/" + id);
  const resJson = await response.json();
  console.log(resJson);
  if(resJson && resJson.postDetails)
    data = resJson;
  console.log("data: ", data.value);
})
</script>

<template>

<div class="container">
  <div class="about">
    <h4>Post Details : {{ data }}
      <span>{{  data.postDetails.title }}</span></h4>
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
  </div>
</template>
