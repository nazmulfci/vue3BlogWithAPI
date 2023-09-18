<template>
    <div class="search-results">
      <h2>Search Results for "{{ query }}"</h2>
      <p>
        {{ searchResults }}
      </p>
      <ul>
        <!-- Display search results here -->
        <li v-for="result in searchResults" :key="result.id">{{ result.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import q from "../data/quizes.json"
  export default {
    
    props: {
        query: String,
    },
    computed: {
      searchResults() {
        // Implement your search logic here using this.searchQuery
        // This computed property will update whenever searchQuery changes
        // and display the corresponding search results

        
    //     let arr = [
    //     // Replace with your list of products
    //     { id: 1, name: "Product 1" },
    //     { id: 2, name: "Product 2" },
    //     { id: 3, name: "Product 3" },
    //     // Add more products as needed
    //   ]
        let arr = q
      let obj = arr.find(a => a.name === "Math")
      console.log(obj)
      return obj
      },
    },
  };
  </script>
  