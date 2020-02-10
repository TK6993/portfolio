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
                  <br>
                   <a :href="selectedBox.linksrc" target="_blank"> {{selectedBox.linkText}}</a>
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
import bg from '../assets/img/header-bg.jpg'
import Lizard from '../assets/img/poorLizard_JPG_web.jpg'
import turntable from '../assets/img/turntable_web.jpg'
import poster_01 from '../assets/img/Projekt_poster.png'
import meerhexe from '../assets/img/PostMeerhexe.jpg'
import loplop from '../assets/img/PostLopLop.jpg'
import ent from '../assets/img/PostEnt.jpg'
import poster_story from '../assets/img/Plakatentwurf_Story.jpg'
import poster_konzept from '../assets/img/Plakatentwurf_Konzept.jpg'
import poster_feature from '../assets/img/Plakatentwurf_Features.jpg'
import frauenrechte from '../assets/img/woman_rights_2.jpg'
import moons from '../assets/img/moons.jpg'
import sneakySpheres from '../assets/img/SneakySpheres.jpg'
import planets from '../assets/img/planets.jpg'
import portal from '../assets/img/portal.jpg'




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
        caption: 'Werbeplakat für mein Bachelorprojekt',
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
        caption: 'Werbeplakat für mein Masterprojekt',
        text: ''
      },
      {
        image: poster_story,
        title: 'Master Projekt Poster',
        caption: 'Werbeplakat für mein Masterprojekt',
        text: ''
      },
      {
        image: poster_konzept,
        title: 'Master Projekt Poster',
        caption: 'Werbeplakat für mein Masterprojekt',
        text: ''
      },
      {
        image: planets,
        title: 'Planeten für User Interface',
        caption: 'Gamejam Bilder',
        text: 'Dies sind ein paar Planeten für das Gamejam Spiel Moons, welche ich in Photoshop gezeichnet habe.',
        linksrc: 'https://keomatrippner.itch.io/sneakyspheres',
        linkText: 'Itch.io Seite von SneakySpheres'
      },
      {
        image: moons,
        title: 'Moons',
        caption: 'Gamejam Spiel',
        text: 'Hier ist ein kleiner Spiel Prototyp für ein Highscore Stategiespiel. Das Spiel ist auf einem 48 Stunden Gamejam entstanden.',
        linksrc: 'https://keomatrippner.itch.io/moons',
        linkText: 'Itch.io Seite von Moons'
      },
      {
        image: frauenrechte,
        title: 'Kampf der Frauenrechte',
        caption: 'Game Project',
        text: 'In diesem Projekt habe ich mit einigen Mädchen im Alter von 10 - 16 Jahren ein kleines Jump and Run Spiel entwicket. Im Rahmen eines gemeinnützigen Projektes zum Thema 100 Jahre Frauenwahltrecht.'
      },
      {
        image: sneakySpheres,
        title: 'SneakySpheres',
        caption: 'Gamejam Spiel',
        text: 'Sneaky Spheres is a sort of action, maze game. You are the blue Hero-Sphere and you want to find all 6 goal stones inside the maze. But the Problem is there are other, sneaky spheres who wanna stop you. Do not touch them !!',
        linksrc: 'https://keomatrippner.itch.io/sneakyspheres',
        linkText: 'Itch.io Seite von SneakySpheres'
      },
      {
        image: portal,
        title: 'Bridge Constructor Portal',
        caption: 'Quality Assurance',
        text: 'In meinem Praktikum beim ClockStone Studios war ich verantwortlich für die Quality Assurance des Spiels "Bridge Constructor Portal" und für das Bewerten der User Experience und das Testen auf unteschiedlichen Endgeräten',
        linksrc: 'https://store.steampowered.com/app/684410/Bridge_Constructor_Portal/',
        linkText: 'Steamseite von Bridge Constructor Portal'
      },
      {
        image: bg,
        title: 'Wolkenlandschaft',
        caption: 'Photoshop Bildbearbeitung',
        text: 'Das Bild habe ich als Hintergrundbild erstellt und wird nun auch auf der Webseite verwendet',

      },
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

<style lang="css" scoped>

</style>
