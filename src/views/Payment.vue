<template>
    <div class="payments">
        <img class="qr-img"  alt="QR" src="../assets/qr.png">
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserPayments'
  };
  </script>
  
  <style scoped>
  .qr-img { 
    width: 100%;
    margin-top: 3rem;
    max-width: 400px;
  }

  .terms-and-conditions {
    padding: 2rem 2rem 5rem;
    margin: auto;
    max-width: 400px; 
    text-align: left;
  }
  </style>
  