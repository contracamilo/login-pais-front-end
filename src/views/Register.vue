<template>
    <div class="register">
      <h2>Registro de Usuario</h2>
      <form @submit.prevent="register">
        <div class="register-fields">
        <div>
          <label for="firstName">Nombre:</label>
          <input type="text" id="firstName" v-model="user.firstName" required />
        </div>
        <div>
          <label for="lastName">Apellido:</label>
          <input type="text" id="lastName" v-model="user.lastName" required />
        </div>
        <div>
          <label for="email">Correo Electrónico:</label>
          <input type="email" id="email" v-model="user.email" required />
        </div>
        <div>
          <label for="phone">Teléfono:</label>
          <input type="tel" id="phone" v-model="user.phone" />
        </div>
        <div>
          <label for="birthDate">Fecha de Nacimiento:</label>
          <input type="date" id="birthDate" v-model="user.birthDate" required />
        </div>
        <div>
          <label for="addressId">Dirección (ID):</label>
          <input type="number" id="addressId" v-model="user.addressId" required />
        </div>
        <div>
          <label for="neighborhoodId">Barrio (ID):</label>
          <input type="number" id="neighborhoodId" v-model="user.neighborhoodId" required />
        </div>
        <div>
          <label for="cityId">Ciudad (ID):</label>
          <input type="number" id="cityId" v-model="user.cityId" required />
        </div>
        <div>
          <label for="countryId">País (ID):</label>
          <input type="number" id="countryId" v-model="user.countryId" required />
        </div>
      </div>
        <button type="submit">Registrar</button>
        <p class="error" v-if="errorMessage">{{ errorMessage }}</p>
        <p v-if="successMessage">{{ successMessage }}</p>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'UserRegister',
    data() {
      return {
        user: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          birthDate: '',
          addressId: null,
          neighborhoodId: null,
          cityId: null,
          countryId: null
        },
        errorMessage: '',
        successMessage: ''
      };
    },
    methods: {
      async register() {
        try {
          // Realiza la solicitud al backend para registrar el usuario
          const response = await axios.post('http://localhost:8080/register', this.user);
  
          if (response.data.success) {
            this.successMessage = 'Registro exitoso';
            this.errorMessage = '';
          } else {
            this.successMessage = '';
            this.errorMessage = response.data.message || 'Error al registrar el usuario';
          }
        } catch (error) {
          this.successMessage = '';
          this.errorMessage = 'Error al registrar el usuario';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .register-fields{
    margin-bottom: 2rem;
  }
  .register {
    width: 100%;
    height: 100%;
    max-width: 420px;
    margin: 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  form div {
    margin-bottom: 1rem;
  }
  </style>
  