<template>
  <header id="header">
    <div class="d-flex flex-column">

      <div class="profile">
        <img src="../assets/img/profile-img.jpg" alt="" class="img-fluid rounded-circle">
        <h1 class="text-light">
          <a href="index.html">Михаил Тесля</a>
        </h1>
        <div class="social-links mt-3 text-center">
          <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
          <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
          <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>

      <nav class="nav-menu">
        <ul>
          <li class="active"><a href="index.html">
            <i class="bx bx-home"></i>
            <span>Главная</span></a>
          </li>
          <li><a href="#about">
            <i class="bx bx-user"></i>
            <span>Обо мне</span></a>
          </li>
          <li>
            <a href="#resume">
              <i class="bx bx-file-blank"></i>
              <span>Резюме</span>
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <i class="bx bx-book-content"></i>
              Портфолио
            </a>
          </li>
          <li>
            <a href="#services">
              <i class="bx bx-server"></i>
              Услуги
            </a>
          </li>
          <li>
            <a href="#contact">
              <i class="bx bx-envelope"></i>
              Контакты
            </a>
          </li>

        </ul>
      </nav><!-- .nav-menu -->
      <button type="button"
              class="mobile-nav-toggle d-xl-none"
      >
        <i class="icofont-navigation-menu"></i>
      </button>

    </div>
  </header>
</template>

<script>
export default {
};
</script>

<style scoped>

</style>
