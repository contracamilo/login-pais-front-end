<template>
    <div class="services-menu">
      <h1>Menú de Servicios</h1>
      <ul>
        <li>
          <router-link to="/recarga">Recarga</router-link>
        </li>
        <li>
          <router-link to="/pagos">Pagos</router-link>
        </li>
        <li>
          <router-link to="/recaudo">Recaudo de Impuestos</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ServicesMenu'
  };
  </script>
  
  <style scoped>
  .services-menu {
    max-width: 400px;
    margin: auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    text-align: center;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 1rem;
  }
  router-link {
    display: inline-block;
    padding: 0.5rem 1rem;
    color: white;
    background-color: #007bff;
    text-decoration: none;
    border-radius: 4px;
  }
  router-link:hover {
    background-color: #0056b3;
  }
  </style>
  