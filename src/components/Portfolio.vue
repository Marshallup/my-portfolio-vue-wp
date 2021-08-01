<template>
  <section id="portfolio" class="portfolio section-bg">
    <div class="container">

      <div class="section-title">
        <h2>Portfolio</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius
          consequatur ex aliquid fuga eum quidem. Sit sint
          consectetur velit. Quisquam quos quisquam cupiditate.
          Et nemo qui impedit suscipit alias ea. Quia fugiat
          sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div class="row" data-aos="fade-up">
        <div class="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li
              v-for="(header, idx) in headerItems"
              :key="idx"
              :data-filter="header.filter"
              :class="header.active ? 'filter-active' : ''"
              @click="filterElements(header, idx)"
            >
              {{ header.title }}
            </li>
          </ul>
        </div>
      </div>

      <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

        <div
          v-for="(card, idx) in cards"
          :key="idx"
          :class="card.className"
          class="col-lg-4 col-md-6 portfolio-item">
          <div class="portfolio-wrap">
            <img src="../views/html/iPortfolio/assets/img/portfolio/portfolio-1.jpg"
                 class="img-fluid" alt="">
            <div class="portfolio-links">
              <a href="assets/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery"
                 class="venobox" title="Web 3">
                <i class="bx bx-plus"></i>
              </a>
              <a href="portfolio-details.html"
                 title="More Details">
                <i class="bx bx-link"></i>
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
import Isotope from 'isotope-layout';

export default {
  data() {
    return {
      headerItems: [
        {
          filter: '*',
          title: 'All',
          active: true,
        },
        {
          filter: '.filter-app',
          title: 'App',
          active: false,
        },
        {
          filter: '.filter-card',
          title: 'Card',
          active: false,
        },
        {
          filter: '.filter-web',
          title: 'Web',
          active: false,
        },
      ],
      cards: [
        {
          img: '../views/html/iPortfolio/assets/img/portfolio/portfolio-1.jpg',
          className: 'filter-app',
        },
        {
          img: '../views/html/iPortfolio/assets/img/portfolio/portfolio-1.jpg',
          className: 'filter-web',
        },
        {
          img: '../views/html/iPortfolio/assets/img/portfolio/portfolio-1.jpg',
          className: 'filter-card',
        },
        {
          img: '../views/html/iPortfolio/assets/img/portfolio/portfolio-1.jpg',
          className: 'filter-web',
        },
      ],
      portfolioIsotope: null,
    };
  },
  methods: {
    filterElements(item, idx) {
      this.headerItems.forEach((header, idxHeader) => {
        this.headerItems[idxHeader].active = false;
      });
      this.headerItems[idx].active = true;
      this.portfolioIsotope.arrange({
        filter: item.filter,
      });
    },
    initIsotope() {
      const iso = new Isotope(document.querySelector('.portfolio-container'), {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
      });
      return iso;
    },
  },
  mounted() {
    setTimeout(() => {
      this.portfolioIsotope = this.initIsotope();
    }, 1000);
  },
};
</script>

<style scoped>

</style>
