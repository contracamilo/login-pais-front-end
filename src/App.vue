<template>
  <div class="main-container">
    <router-view />
    <BottomMenu v-if="showBottomMenu" /> 
  </div>
</template>

<script>
import BottomMenu from './components/BottomMenu.vue';

export default {
  name: 'App',
  components: {
    BottomMenu
  },
  computed: {
    showBottomMenu() {
      const hiddenRoutes = ['/login', '/register', '/splash-screen'];
      return !hiddenRoutes.includes(this.$route.path);
    }
  }
}
</script>

<style>
*{
  scroll-behavior: smooth;
}
html{
  font-size: 100%;
  box-sizing: border-box;
}
body{
  font-size: 1rem;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-color: #ebf3f2;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ebf3f2;
  margin: 0px;
  padding: 0px;

}
.main-container{
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: center;
  width: 100%;
  height: 100%;
}

a {
  color: #156E8D;
  text-decoration: none;
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #156E8D;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  font-size: large;
}

button:hover {
  background-color: #3e4770;
}

.error{
  color: red;
}

label {
  display: block;
}
input {
  width: 95%;
  height: 2.2rem;
  margin-top: 0.25rem;
  padding: 0 0 0 0.5rem;
}

.small-text{
  font-size: 0.9rem;
}

</style>
