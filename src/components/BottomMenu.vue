<!-- BottomMenu.vue -->
<template>
  <div class="bottom-menu">
    <nav>
      <ul>
        <li><router-link to="/user-profile">
          <img class="splash-img" alt="user profile" src="../assets/user_profile.png">
        </router-link>      <span>Perfil</span></li>
        <li><router-link to="/services-menu">
          <img class="splash-img" alt="user profile" src="../assets/money_movements.png">
         
        </router-link> <span>Transacciones</span></li>
        <li><router-link to="/terms_and_conditions">
          <img class="splash-img" alt="TyC" src="../assets/legal_icon.png">
          
        </router-link><span>TyC</span></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'BottomMenu'
};
</script>

<style scoped>
.bottom-menu {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #156e8d;
  color: white;
  font-weight: bold;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
}
nav {
  display: flex;
  justify-content: space-around;
}
ul {
  display: flex;
  list-style-type: none;
  width: 100%;
  justify-content: space-between;
  padding: 0.5rem 0;
  margin: 0;
}
li {
  flex: 1;
  width: 33%;
  text-align: center;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

img{
  width: 4rem;
  height: auto;
}
</style>
