<template lang="html">
  <div>
    <section class="page-section" id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Schulischer und beruflicher Lebensweg</h2>
            <h3 class="section-subheading text-muted">Hier ist eine kleine Übersicht über meinen beruflichen und meinen schulischen Werdegang.</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <ul class="timeline">

              <li class="timeline-inverted" v-for="(obj, key) in aboutJSON" :key ="key" >
                <div class="timeline-image">
                  <img class="rounded-circle img-fluid" :src="obj.image"  alt="">
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>{{ obj.date }}</h4>
                    <h4 class="subheading">{{ obj.title }}</h4>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">{{ obj.description }}</p>
                  </div>
                </div>
              </li>

              <li class="timeline-inverted">
                <div class="timeline-image">
                  <h4>Beruflichen<br>
                    <br>Lebensweg</h4>
                </div>
              </li>

            </ul> 
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import book from '../assets/img/icons/book.png'
import game from '../assets/img/icons/joystick.png'
import report from '../assets/img/icons/report.png'
import school from '../assets/img/icons/school.png'
export default{
  data: () => ({
    aboutJSON: [
      {
        image: report,
        date: 'Juni 2017 - März 2019',
        title: 'Bus Verkehr Berlin KG, Berlin - Digitales Marketing',
        description: 'Web Development ( HTML5, CSS, JavaScript, Wordpress) | SEO und SEA (Google Analytics / Adwords und Organic SEO) | Online Marketing und Social Media'
      },
      {
        image: game,
        date: 'November 2017 – März 2018',
        title: 'Praktikum: ClockStone Studios, Innsbruck – Gamedevelopment',
        description: 'Evaluierung von Unity 3D Tools und Assets | Gamedesign | Qualitätssicherung vom Spiel und Gamedesign | Gameplay Testing | Gameplay Prototyping/Programming'
      },
      {
        image: school,
        date: 'März 2019 – Heute',
        title: 'Studium - Master of Science',
        description: 'Zurzeit studiere ich an der HTW Berlin im Studiengang Internationale Medieninformatik auf dem Master of Science hin.'
      },
      {
        image: school,
        date: 'Oktober 2014 – Juni 2019',
        title: 'Studium - Bachelor of Science',
        description: 'Ich habe meinen Bachelor of Science an der HTW Berlin gemacht im Studiengang Internationale Medieninformatik. Dieser Studiengang beinhaltete Schwerpunkte wie: Informatik, Game Technology, Visual Computing und WebTechnologie'
      },
      {
        image: book,
        date: 'August 2010 –Juni 2013',
        title: 'Allgemeine Hochschulreife',
        description: 'Ich habe mein Abitur an dem Beruflichen Gymnasium - technik in Walsrode gemacht mit dem Schwerpunkt auf Informationstechnik.'
      }
    ]
  })
}
</script>

<style lang="sass" scoped>
</style>
