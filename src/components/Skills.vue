<template>
  <section id="skills" class="skills section-bg">
    <div class="container">

      <div class="section-title">
        <h2>Skills</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus
          eius consequatur ex aliquid fuga eum quidem.
          Sit sint consectetur velit. Quisquam quos quisquam
          cupiditate. Et nemo qui impedit suscipit alias ea.
          Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>

      <div ref="skills" class="row skills-content">

        <div class="col-lg-6" data-aos="fade-up">

          <div
            v-for="(progress, idx) in twoPartSkills.even"
            :key="idx"
            class="progress">
            <span class="skill">{{ progress.title }}
              <i class="val">{{ progress.percent }}%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar"
               :style="{
                 width: changeProgress ? progress.percent + '%' : '0',
               }"
              >
              </div>
            </div>
          </div>

        </div>

        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">

          <div
              v-for="(progress, idx) in twoPartSkills.odd"
              :key="idx"
              class="progress">
            <span class="skill">{{ progress.title }}
              <i class="val">{{ progress.percent }}%</i>
            </span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar"
                   :style="{
                 width: changeProgress ? progress.percent + '%' : '0',
               }"
              >
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script>
require('waypoints/lib/noframework.waypoints.min');

export default {
  data() {
    return {
      changeProgress: false,
      progressElems: [
        {
          title: 'HTML',
          percent: '100',
        },
        {
          title: 'CSS',
          percent: '90',
        },
        {
          title: 'JavaScript',
          percent: '75',
        },
        {
          title: 'PHP',
          percent: '80',
        },
        {
          title: 'WordPress/CMS',
          percent: '90',
        },
        {
          title: 'Photoshop',
          percent: '55',
        },

      ],
    };
  },
  computed: {
    twoPartSkills() {
      if (this.progressElems.length) {
        const twoPart = {
          even: [],
          odd: [],
        };
        this.progressElems.forEach((item, idx) => {
          if (idx % 2 === 0) {
            twoPart.even.push(item);
          } else {
            twoPart.odd.push(item);
          }
        });
        return twoPart;
      }
      return null;
    },
  },
  methods: {
    initProgress() {
      const wayPointShow = new window.Waypoint({
        element: this.$refs.skills,
        handler: () => {
          this.changeProgress = true;
        },
        offset: '80%',
      });
      const wayPointHide = new window.Waypoint({
        element: this.$refs.skills,
        handler: () => {
          this.changeProgress = false;
        },
        offset: '200%',
      });
      return [wayPointShow, wayPointHide];
    },
  },
  mounted() {
    this.initProgress();
  },
};
</script>

<style scoped>

</style>
