<template lang="html">
  <div>



          <!-- Header -->
          <header class="masthead">
            <div class="container">
              <div class="intro-text">
                <div class="intro-lead-in">Willkommen auf meinem Portfolio</div>
                <div class="intro-heading text-uppercase">Keoma Trippner</div>
                <!-- <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a> -->
              </div>
            </div>
          </header>
          <!-- Services -->
          <section class="page-section" id="services">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 text-center">
                  <h2 class="section-heading text-uppercase">Über mich</h2>
                  <!-- <h3 class="section-subheading text-muted"></h3> -->
                </div>
              </div>
              <div class="row text-center">
                <div class="col-md-4">
                  <span class="fa-stack fa-4x">
                    <i class="fas fa-circle fa-stack-2x text-primary"></i>
                    <i class="fas fa-envelope fa-stack-1x fa-inverse"></i>
                  </span>
                  <h4 class="service-heading">Responsive Design</h4>
                  <p class="text-muted">
                    Name: Keoma Trippner<br>
                    Adresse: Lipaerstraße 22, 12203 Berlin<br>
                    E-Mail: Keoma6993@gmail.com
                  </p>
                </div>
                <div class="col-md-4">
                  <span class="fa-stack fa-4x">
                    <i class="fas fa-circle fa-stack-2x text-primary"></i>
                    <i class="far fa-smile fa-stack-1x fa-inverse"></i>
                  </span>
                  <h4 class="service-heading">Hallo</h4>
                    <p class="text-muted">
                      Mein Name ist Keoma Trippner ich bin 26
                      Jahre alt und studiere zurzeit an der HTW
                      Berlin im Studiengang Internationale
                      Medieninformatik im Master.
                      Ich würde mich als einen kreativen und
                      teamfähigen Menschen beschreiben der gern
                      neue Dinge lernt und aufgeschlossen durchs
                      Leben geht.
                    </p>
                </div>
                <div class="col-md-4">
                  <span class="fa-stack fa-4x">
                    <i class="fas fa-circle fa-stack-2x text-primary"></i>
                    <i class="fas fa-dice fa-stack-1x fa-inverse"></i>
                  </span>
                  <h4 class="service-heading">Hobbys und Freizeit</h4>
                  <p class="text-muted">In meiner Freizeit beschäftige ich mich viel
                    mit Grafik- und Gamedesign, programmiere
                    meine eigenen kleinen Spiele, zeichne gern
                    und erstelle Grafiken für Spiele. Ich lerne
                    gerne Neues und bin stets bemüht meine
                    Fähigkeiten zu verbessern. Andere Hobbys
                    von mit sind Sport, Schwimmen und Parkour.
                    Ich unternehme auch gern etwas mit
                    Freunden und bin interessiert in Bereichen
                    wie Filme, Spiele und Medien.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- Portfolio Grid -->
          <Portfolio></Portfolio>

          <!-- About -->
          <About />

          <!-- Team -->
          <!-- <Team /> -->

          <!-- Clients -->
          <!-- <section class="py-5">
            <div class="container">
              <div class="row">
                <div class="col-md-3 col-sm-6">
                  <a href="#">
                    <img class="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt="">
                  </a>
                </div>
                <div class="col-md-3 col-sm-6">
                  <a href="#">
                    <img class="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt="">
                  </a>
                </div>
                <div class="col-md-3 col-sm-6">
                  <a href="#">
                    <img class="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt="">
                  </a>
                </div>
                <div class="col-md-3 col-sm-6">
                  <a href="#">
                    <img class="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt="">
                  </a>
                </div>
              </div>
            </div>
          </section> -->

          <!-- Contact -->
          <Skills />

          <!-- Footer -->
          <footer class="footer">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-md-4">
                  <span class="copyright">Copyright &copy; Keoma Trippner 2018</span>
                </div>
                <div class="col-md-4">
                  <ul class="list-inline social-buttons">
                    <li class="list-inline-item">
                      <a href="https://twitter.com/KeoTripp">
                        <i class="fab fa-twitter"></i>
                      </a>
                     </li>

                    <!-- <li class="list-inline-item">
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li> -->
                    <!-- <li class="list-inline-item">
                      <a href="#">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li> -->
                  </ul>
                </div>
                <div class="col-md-4">
                  <ul class="list-inline quicklinks">
                    <li class="list-inline-item">
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">Terms of Use</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>



          <!-- Portfolio Modals -->
          <!-- <ProjectView /> -->
  </div>
</template>

<script>
import Portfolio from './Portfolio'
// import ProjectView from './ProjectView'
import About from './About'
import Skills from './Skills'

export default {
  name: 'app',
  components:{
    Portfolio,
    About,
    Skills

  }
}
</script>

<style lang="css" scoped>

.intro-lead-in{
  color: black;
}

.intro-heading{
  color: #FFB319;
}
</style>
