<template>
    <table border="2">
      <thead>
        <tr>
          <th v-for="header in headers" :key="header">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in data" :key="row.id">
          <td v-for="header in headers" :key="header">
            {{ displayValue(row[header.toLowerCase()]) }}
            <!-- {{ isArray(row[header.toLowerCase()]) ? row[header.toLowerCase()].join(', ') : row[header.toLowerCase()] }} -->
        </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  
  
  export default {
    props: {
      headers: Array, 
      data: Array    
    },
    methods: {
    displayValue(value) {
      return Array.isArray(value) ? value.join(', ') : value;
    },
  },

  };
  </script>
 
  