<template>
    <div class="login-container">
    <img class="login-img" alt="Vue logo" src="../assets/logo.png">
    <div class="login">
      <form @submit.prevent="login">
        <div class="login-fields">
          <div>
            <label for="username">Usuario:</label>
            <input type="text" id="username" v-model="username" required />
          </div>
          <div>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" v-model="password" required />
          </div>
      </div>
        <button  @click.prevent="goToProfile()">Ingresar</button>
        <p class="error" v-if="errorMessage">{{ errorMessage }}</p>
        <p class="small-text">
          Ingresa con tus credenciales o
          <a href="#" @click.prevent="goToRegisterUser">crea una cuenta</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'; // Asegúrate de instalar Axios: npm install axios

export default {
  name: 'UserLogin', // Asegúrate de que el nombre del componente sea multi-word
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async login() {
      try {
        // Realiza la llamada al backend para autenticación.
        const response = await axios.post('http://localhost:8080/login', {
          username: this.username,
          password: this.password
        });
        // Procesa la respuesta y navega al menú de servicios.
        if (response.data.success) {
          this.$router.push('/services-menu');
        } else {
          this.errorMessage = 'Nombre de usuario o contraseña incorrectos.';
        }
      } catch (error) {
        this.errorMessage = 'Error al intentar iniciar sesión.';
      }
    },
    goToRegisterUser() {
      this.$router.push({ name: 'register' });
    },
    goToProfile() {
      this.$router.push({ name: 'user-profile' });
    }
  }
};
</script>

<style scoped>
.login-container{
    width: 100%;
    height: 100vh;
    padding: 1rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.login {
  max-width: 420px;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.login-img{
  width: 100px;
  height: auto;
  margin-bottom: 1rem;
}
.login-fields {
  margin-bottom: 2rem;
}
form div {
  margin-bottom: 1rem;
}
</style>
