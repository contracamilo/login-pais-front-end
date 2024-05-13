<template>
  <div class="profile">
    <div class="profile-header">
      <div class="profile-image">
        <!-- Icono de perfil si no hay imagen -->
        <font-awesome-icon icon="fa-solid fa-user" class="fa-2x" v-if="!user.image"/>
        <img :src="user.image" v-else alt="Foto de perfil del usuario" />
      </div>
      <div class="user-info">
        <h3>Hola {{ user.firstName }} {{ user.lastName }}</h3>
        <p><font-awesome-icon icon="fa-solid fa-envelope" /> {{ user.email }}</p>
        <p><font-awesome-icon icon="fa-solid fa-phone" />  {{ user.phone || 'N/A' }}</p>
        <p><font-awesome-icon icon="fa-solid fa-calendar-day" />  {{ user.birthDate }}</p>
        <p><font-awesome-icon icon="fa-solid fa-wallet" /> ${{ user.balance.toFixed(2) }}</p>
      </div>
    </div>
    <h2>Movimientos</h2>
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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import axios from 'axios';

export default {
  name: 'UserProfile',
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        birthDate: '1980-01-01',
        balance: 1024.34,
        image: ''  // Dejar vacío si no hay imagen disponible
      },
      transactions: [
        { transactionId: 1, date: '2021-09-01', serviceName: 'Pago de Servicios', amount: 150.00, type: 'Debito' },
        { transactionId: 2, date: '2021-09-15', serviceName: 'Transferencia Recibida', amount: 300.00, type: 'Credito' }
      ],
      errorMessage: ''
    };
  },
  async created() {
    // Este método simulará la carga de datos.
    // Remover cuando el backend esté listo.
  }
};
</script>

<style scoped>
.profile {
  width: 100%;
  max-width: 420px;
  padding: 2rem 1rem;
  margin: 0;
}
.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}
.profile-image {
  flex-shrink: 0;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 3px solid  #156e8d;;
}
.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.user-info {
  text-align: left;
  width: 100%;
  padding: 0 1rem;
}
.user-info p {
  margin: 0.5rem 0.5rem;
}

.user-info h3 {
  text-align: center;
}

table {
  width: 100%;
  margin-top: 1rem;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ccc;
  padding: 0.5rem;
  font-size: 0.7rem;
}
th {
  background-color: #f4f4f4;
}
</style>
