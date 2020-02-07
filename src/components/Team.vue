<template lang="html">
<div>
  <section class="bg-light page-section" id="team">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
          <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4" v-for="(obj, key) in teamJSON" :key ="key" >
          <div class="team-member">
            <img class="mx-auto rounded-circle" src="../assets/img/keyImage.png" alt="">
            <h4>{{ obj.name }}</h4>
            <p class="text-muted">{{ obj.role }}</p>
            <ul class="list-inline social-buttons">
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 mx-auto text-center">
          <p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  data: () => ({
    teamJSON: [
      {
        name: 'Keoma Trippner',
        imgae: '../assets/img/keyImage.png',
        role: 'Graphic Designer'
      },
      {
        name: 'Keoma Trippner',
        imgae: '../assets/img/keyImage.png',
        role: 'Graphic Designer'
      }
    ]
  })
}
</script>

<style lang="sass" scoped>
</style>
