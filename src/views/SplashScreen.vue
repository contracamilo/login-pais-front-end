<template>
  <transition name="fade">
    <div class="splash-screen" v-if="showSplash">
      <img class="splash-img" alt="Vue logo" src="../assets/logo.png">
    </div>
  </transition>
</template>

<script>
export default {
  name: 'SplashScreen',
  data() {
    return {
      showSplash: true
    };
  },
  methods: {
    splashLoading() {
      setTimeout(() => {
        this.showSplash = false;
        this.$router.push('/login');
      }, 3000);
    }
  },
  mounted() {
    this.splashLoading();
  }
};
</script>

<style scoped>
.splash-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.splash-img {
  width: 12rem;
  height: auto;
}

.fade {
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

.fade-out {
  opacity: 0;
}

.fade-in {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>