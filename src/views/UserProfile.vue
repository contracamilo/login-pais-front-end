<template>
    <div class="profile">
      <h1>Perfil de Usuario</h1>
      <div class="user-info">
        <p><strong>Nombre:</strong> {{ user.firstName }} {{ user.lastName }}</p>
        <p><strong>Correo Electrónico:</strong> {{ user.email }}</p>
        <p><strong>Teléfono:</strong> {{ user.phone || 'N/A' }}</p>
        <p><strong>Fecha de Nacimiento:</strong> {{ user.birthDate }}</p>
        <p><strong>Saldo Actual:</strong> ${{ user.balance.toFixed(2) }}</p>
      </div>
      <h2>Historial de Transferencias</h2>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Servicio</th>
            <th>Monto</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction in transactions" :key="transaction.transactionId">
            <td>{{ transaction.date }}</td>
            <td>{{ transaction.serviceName }}</td>
            <td>${{ transaction.amount.toFixed(2) }}</td>
            <td>{{ transaction.type }}</td>
          </tr>
        </tbody>
      </table>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'UserProfile',
    data() {
      return {
        user: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          birthDate: '',
          balance: 0
        },
        transactions: [],
        errorMessage: ''
      };
    },
    async created() {
      try {
        await this.loadUserProfile();
        await this.loadTransactionHistory();
      } catch (error) {
        this.errorMessage = 'Error al cargar los datos del usuario';
      }
    },
    methods: {
      async loadUserProfile() {
        try {
          const response = await axios.get('http://localhost:8080/user-profile');
          this.user = response.data;
        } catch (error) {
          this.errorMessage = 'Error al cargar el perfil';
          throw error;
        }
      },
      async loadTransactionHistory() {
        try {
          const response = await axios.get('http://localhost:8080/user-transactions');
          this.transactions = response.data;
        } catch (error) {
          this.errorMessage = 'Error al cargar el historial de transferencias';
          throw error;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .profile {
    max-width: 600px;
    margin: auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .user-info p {
    margin: 0.5rem 0;
  }
  table {
    width: 100%;
    margin-top: 1rem;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #ccc;
    padding: 0.5rem;
  }
  th {
    background-color: #f4f4f4;
  }
  </style>
  