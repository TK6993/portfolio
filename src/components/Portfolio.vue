<template>
  <div>
    <section class="bg-light page-section" id="portfolio">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Portfolio</h2>
            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div class="row">

          <div class="col-md-4 col-sm-6 portfolio-item" v-for="(obj, key) in portfolioJSON" :key ="key" >
            <b-button v-b-modal="'portfolioModal1'" @click='sendDateToProjectView(obj)' class="portfolio-link">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" :src="obj.image" alt="">
            </b-button>
            <div class="portfolio-caption">
              <h4>{{ obj.caption }}</h4>
              <p class="text-muted">{{ obj.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <b-modal size="xl"  class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                  <!-- Project Details Go Here -->
                  <h2 class="text-uppercase">{{selectedBox.title }}</h2>
                  <p class="item-intro text-muted">{{selectedBox.caption }}</p>
                  <img class="img-fluid d-block mx-auto" :src="selectedBox.image" alt="">
                  <p>{{ selectedBox.text }}</p>
                  <!-- <ul class="list-inline">
                    <li>Date: January 2017</li>
                    <li>Programm: Threads</li>
                    <li>Kategorie: Illustration</li>
                  </ul>
                  <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fas fa-times"></i>
                    Close Project</button> -->
                </div>
              </div>
            </div>
          </div>
        </div>
    </b-modal>

      </div>
</template>

<script>
import Lizard from '../assets/img/poorLizard_JPG_web.jpg'
import turntable from '../assets/img/turntable_web.jpg'
import poster_01 from '../assets/img/Projekt_poster.png'
import meerhexe from '../assets/img/PostMeerhexe.jpg'
import loplop from '../assets/img/PostLopLop.jpg'
import ent from '../assets/img/PostEnt.jpg'
import poster_story from '../assets/img/Plakatentwurf_Story.jpg'
import poster_konzept from '../assets/img/Plakatentwurf_Konzept.jpg'
import poster_feature from '../assets/img/Plakatentwurf_Features.jpg'



export default{
  data: () => ({
    portfolioJSON: [
      {
        image: Lizard,
        title: '3D Lizard',
        caption: 'Dieses Bild wirde mithilf von Austodesk Maya gemoddelt und erstellt.',
        text: ''
      },
      {
        image: turntable,
        title: '3D Turntable',
        caption: 'Dieses Bild wirde mithilf von Austodesk Maya gemoddelt und erstellt.',
        text: 'Im Studium habe ich im Rahmen eines Kurses den Umgang mit Austodesk Maya gelernt und dort 3D Objekte zu modeln. Hierbei ist zum Beispiel dieser Plattenspieler entstanden. Welchen es dann hieß richtig auszuleuchten und zu positionieren.'
      },
      {
        image: poster_01,
        title: 'Bachelor Projekt Poster',
        caption: 'Dies war das Werbeplakat für mein Bachelorprojekt',
        text: ''
      },
      {
        image: loplop,
        title: 'Violeter Hase',
        caption: 'Photoshopzeichnung',
        text:'Diese Zeichnung gehört zu einer Reihe von Bilder die in meiner Freizeit gezeichnet habe. Diese Zeichnung ist in Photoshop endstanden. Die Reihe bestehet aus verschiedenen Tieren, Kreaturen oder Charakteren welche assoziiert mit einer Farbe dargestellt werden. Hier eine Art Hase im Hoody'
      },
      {
        image: meerhexe,
        title: 'Blaue Meerhexe',
        caption: 'Photoshopzeichnung',
        text:'Diese Zeichnung gehört zu einer Reihe von Bilder die in meiner Freizeit gezeichnet habe. Diese Zeichnung ist in Photoshop endstanden. Die Reihe bestehet aus verschiedenen Tieren, Kreaturen oder Charakteren welche assoziiert mit einer Farbe dargestellt werden. Hier eine Art Meerhexe in Blautönen.'

      },
      {
        image: ent,
        title: 'Grüner Ent',
        caption: 'Photoshopzeichnung',
        text: 'Diese Zeichnung gehört zu einer Reihe von Bilder die in meiner Freizeit gezeichnet habe. Diese Zeichnung ist in Photoshop endstanden. Die Reihe bestehet aus verschiedenen Tieren, Kreaturen oder Charakteren welche assoziiert mit einer Farbe dargestellt werden. Hier ein Ent aus Herr der Ringe im grünen Wald.'
      },
      {
        image: poster_feature,
        title: 'Master Projekt Poster',
        caption: 'Dies war das Werbeplakat für mein Masterprojekt',
        text: ''
      },
      {
        image: poster_story,
        title: 'Master Projekt Poster',
        caption: 'Dies war das Werbeplakat für mein Masterprojekt',
        text: ''
      },
      {
        image: poster_konzept,
        title: 'Master Projekt Poster',
        caption: 'Dies war das Werbeplakat für mein Masterprojekt',
        text: ''
      }
    ],
    selectedBox: ''
  }),
  methods: {
   sendDateToProjectView(objekt) {
     this.selectedBox = objekt
   }
 }
}
</script>

<style lang="sass" scoped>

</style>
