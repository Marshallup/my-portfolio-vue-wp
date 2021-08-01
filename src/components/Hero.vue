<template>
  <section id="hero"
           class="d-flex flex-column justify-content-center align-items-center">
    <div class="hero-container" data-aos="fade-in">
      <h1 v-if="fio" >{{ fio }}</h1>
      <p>Кто я ? -
        <span
          class="typed"
          ref="typed"
        ></span>
      </p>
    </div>
  </section>
</template>

<script>
import Typed from 'typed.js';

export default {
  props: {
    specialisation: {
      default: null,
    },
    fio: {
      default: null,
    },
  },
  methods: {
    initTyped(val) {
      if (this.specialisation) {
        const typed = new Typed(this.$refs.typed, {
          strings: val,
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000,
        });
        return typed;
      }
      return null;
    },
  },
  watch: {
    specialisation(val) {
      if (val) {
        this.initTyped(val.split(','));
      }
      return val;
    },
  },
};
</script>

<style scoped>

</style>
