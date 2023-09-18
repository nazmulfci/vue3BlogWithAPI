<template>
    <div class="search-results">
      <h2>Search Results for "{{ query }}"</h2>
      <p>
        <!-- {{ data }} -->
      </p>
      <ul>
        <!-- Display search results here -->
        <li v-for="result in quizes" :key="result.id">{{ result.name }}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import q from "../data/quizes.json"
  import {ref,defineProps,watch} from "vue"

  const {query} = defineProps(['query'])

  const quizes = ref(q)

    //  watch(query, () => {
      quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(query.toLowerCase()))
    // })

  </script>
  