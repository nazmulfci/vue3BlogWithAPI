<template>
    <div>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
      // Define a reactive variable
      const message = ref('');
  
      // Define a function to be executed on component mount
      const fetchData = () => {
        // Simulate fetching data from an API
        setTimeout(() => {
          message.value = 'Data fetched successfully!';
        }, 2000);
      };
  
      // Use the onMounted hook to execute the fetchData function when the component is mounted
      onMounted(() => {
        fetchData();
      });
  
      // Expose the message variable to the template
      return {
        message,
      };
    },
  };
  </script>
  