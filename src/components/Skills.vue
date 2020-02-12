<template lang="html">
  <div v-view.once="resetSkillView">
    <section class="page-section" id="skills">
      <h2 class="section-heading text-uppercase">Skills</h2>
    	<ul>
    		<li class="skillList" v-for="(skill, i) in skillSet" :key="i">
    			<div :style="{ width: skill.initLevel + '%'}">
    				<label>{{ skill.area }}</label>
    				<label>{{ }}</label>
    			</div>
    		</li>
    	</ul>
    </section>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      intervalID: '',
      increment: 1,
      skillSet: [
        { area: 'Graphic Design', initLevel: 0, level: 80 },
        { area: 'Game Design', initLevel: 0, level: 100 },
        { area: 'Photoshop', initLevel: 0, level: 85 },
        { area: 'Autodesk Maya', initLevel: 0, level: 65 },
        { area: 'Java', initLevel: 0, level: 80 },
        { area: 'C#', initLevel: 0, level: 100 },
        { area: 'HTML5, CSS', initLevel: 0, level: 70 },
        { area: 'JavaScript / Vue.js', initLevel: 0, level: 40 },
      ]
    }
  },
  mounted: function() {
    this.intervalID = setInterval(() => {
    this.getLevelProgress(this.increment)
    }, 10)
  },
  methods: {
    getLevelProgress: function(value) {
      this.skillSet.forEach(data => {
        data.initLevel = Math.min(Math.floor(data.initLevel+value), data.level)
      })
    },
    resetValues: function() {
      this.skillSet.forEach(data => {
        console.log("test3")

        data.initLevel = 0
      })
    },
    resetSkillView : function(){
      this.resetValues()
      console.log("test")

      this.intervalID
    }
  },
  beforeDestroy: function() {
    clearInterval(this.intervalID)
  }
}
</script>

<style lang="css" scoped>
  body {
  	/*background: $bg-color;*/
  }
  ul{
    margin-left: 20%;
    margin-right: 20%;
  }
  #skills h2{
    color: #e8d700;
  }

  .skillList {
  	margin: .5em 0 .5em;
  	border: .1em solid darken(rgba(0, 101, 255), 50%);
  	border-radius: 3px;
  	background: rgba(83, 83, 83,1);
  	list-style: none;
  	overflow: hidden;
  }
  .skillList div {
  		position: relative;
  		height: 1.4em;
  		background: rgb(227 , 215, 32);
  		font-size: 1.2em;
    }
  label:first-child {
  			position: absolute;
  			left: 8px;
  		}
  label:last-child {
  			position: absolute;
  			right: 8px;
  		}
</style>
