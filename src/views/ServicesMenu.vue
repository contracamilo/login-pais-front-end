<template>
  <div class="services-menu">
    <div class="grid-container">
      <router-link to="/payments" class="menu-item">
        <font-awesome-icon icon="fa-solid fa-dollar-sign" class="fa-2x"/>
        <span>Recarga</span>
      </router-link>
      <router-link to="/pagos" class="menu-item">
        <font-awesome-icon icon="fa-solid fa-credit-card" class="fa-2x"/>
        <span>Pagos</span>
      </router-link>
      <router-link to="/recaudo" class="menu-item">
        <font-awesome-icon icon="fa-solid fa-file-invoice-dollar" class="fa-2x"/>
        <span>Recaudo de Impuestos</span>
      </router-link>
      <router-link to="/other" class="menu-item">
        <font-awesome-icon icon="fa-solid fa-coins" class="fa-2x"/>
        <span>Otra Función</span>
      </router-link>
    </div>
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
    border-radius: 4px;
    text-align: center;
    height: 100vh;
  }

  .fa-2x  {
    fill: white; 
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px; 
  }

  .menu-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #007bff;
    color: white;
    padding: 12px;
    border-radius: 4px;
    text-decoration: none;
    height: 130px; 
    box-sizing: border-box; 
  }

  .menu-item span {
    line-height: 1rem;
    margin-top: 1rem;
  }
  
  .menu-item:hover {
    background-color: #0056b3;
  }
  
  font-awesome-icon {
    margin-bottom: 5px;
  }
  </style>
  