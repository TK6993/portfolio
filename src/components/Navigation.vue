<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">Keoma Trippner</a>
      <button @click="toggleNav" class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>

      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive" ref="nav">
        <ul class="navbar-nav text-uppercase ml-auto">
          <li class="nav-item" v-for="(obj, key) in navList" :key ="key" >
            <a class="nav-link js-scroll-trigger" :href="obj.path">{{ obj.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script>
export default{
data: () =>({
  navList: [
    {
      name: 'Portfolio',
      path: '#portfolio'
    },
    {
      name: 'Über mich',
      path: '#services'
    },
    {
      name: 'Lebenslauf',
      path: '#about'
    },
    {
      name: 'Skills',
      path: '#skills'
    },
  ]
}),
methods: {
  toggleNav (){
    const nav = this.$refs.nav.classList
    nav.contains('show') ? nav.remove('show') : nav.add('show')
  }
}
}

</script>


<style lang="css" scoped>



  .nav-link{
    color: black;
  }

  #mainNav.navbar{
    background: rgba(0,0,0,0.5);
  }
</style>
