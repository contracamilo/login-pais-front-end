<template>
  <div class="bottom-menu">
    <nav>
      <ul>
        <li>
          <router-link to="/user-profile">
            <font-awesome-icon icon="fa-solid fa-user" class="fa-2x white-icon"/>
            <span>Perfil</span>
          </router-link>
        </li>
        <li>
          <router-link to="/services-menu">
            <font-awesome-icon icon="fa-solid fa-exchange-alt" class="fa-2x white-icon"/>
            <span>Servicios</span>
          </router-link>
        </li>
        <li>
          <router-link to="/terms_and_conditions">
            <font-awesome-icon icon="fa-solid fa-file-contract" class="fa-2x white-icon"/>
            <span>TyC</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
  name: 'BottomMenu',
  components: {
    FontAwesomeIcon
  }
};
</script>

<style scoped>
.bottom-menu {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #156e8d;
  font-weight: bold;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
}
nav {
  display: flex;
  justify-content: space-around;
}

.white-icon{
  color: white;
}

ul {
  display: flex;
  list-style-type: none;
  width: 100%;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin: 0;
}
li a{
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.font-awesome-icon {
  color: white;
}

li span{
  margin-top: 0.3rem;
  color: white;
  font-size: 0.8rem;
}

.icon {
  font-size: 2rem;
}
</style>
