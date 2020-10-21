<template>
  <div id="app">
    <div>
    <autocompelete v-show="step==1" :placeholder="'choose a team'" :items="teams" name="home" style="display:block;float:left" v-model="homeTeam"/>
    <autocompelete v-show="step==1" :placeholder="'choose a team'" :items="teams" name="away" style="display:block;float:right" v-model="awayTeam"/>
    
    <autocompelete v-show="step==2 && this.$store.getters.showCards == false" :placeholder="'choose an attribute'" :items="attributes" v-model="homeAttr" style="display:block;float:left"/>
    <autocompelete v-show="step==2 && this.$store.getters.showCards == false" :placeholder="'choose an attribute'" :items="attributes" v-model="awayAttr" style="display:block;float:right"/>
<!-- 
    <span @click="test()">
    HI
    </span> -->
    <!-- {{this.$store.state.counter}}  -->
    <!-- <input type="text" style="display:block;float:right">
    <input type="text"  style="display:block;float:left"> -->
    <button v-show="this.$store.getters.showCards == false" @click="nextStep()">Done</button> 
    <game/>
    </div>
  </div>
</template>

<script>
import game from './components/game.vue'
import autocompelete from './components/autocomplete.vue'
import axios from 'axios'
// import { store } from './store/store' 
export default {
  name: 'App',
  components: {
    game,
    autocompelete
  },data(){
    return{
      step:1,
      teams:[],
      homeTeam:null,
      awayTeam:null,
      homeTeamPlayers:[],
      awayTeamPlayers:[],
      playerdIndex:0,
      homeAttr:null,
      awayAttr:null,
      attributes:[]
    }    
  },methods:{
    nextStep(){
      if(this.step==1){
        if(this.homeTeam&&this.awayTeam){
          this.generateTeams(this.homeTeam,this.awayTeam)
          this.$store.commit('recordTeams',[this.homeTeam,this.awayTeam])
          this.step+=1
      }else{
        alert("Choose teams first")
        }
        }else if(this.step == 2){
          let home
          let away
          if(this.homeAttr&&this.awayAttr&&this.playerdIndex<5){
            this.homeTeamPlayers.team[this.playerdIndex].overall=this.homeTeamPlayers.team[this.playerdIndex][this.homeAttr]
            this.awayTeamPlayers.team[this.playerdIndex].overall=this.awayTeamPlayers.team[this.playerdIndex][this.awayAttr]
            home=this.homeTeamPlayers.team[this.playerdIndex].overall
            away=this.awayTeamPlayers.team[this.playerdIndex].overall
            if(home>away){
              this.$store.commit('goalScored',"home")
            }else if(home<away){
              this.$store.commit('goalScored',"away")
            }

            this.$store.commit('changeHomePlayer',this.homeTeamPlayers.team[this.playerdIndex])
            this.$store.commit('changeAwayPlayer',this.awayTeamPlayers.team[this.playerdIndex])
            this.$store.commit('showCards',!this.$store.getters.showCards)
            this.playerdIndex+=1
          }else{
            alert(this.$store.getters.winner)
          }
        }
    },

    generateTeams(homeTeam,awayTeam){
          axios.get(`players/team/?team=${homeTeam}`).then(res=>{this.homeTeamPlayers=res.data}).catch(err=>{ alert(err)})
          axios.get(`players/team/?team=${awayTeam}`).then(res=>{this.awayTeamPlayers=res.data}).catch(err=>{ alert(err)})
    }
    // test(){
    //   this.$store.commit('change',this.$store.state.counter-20)
    // }

  },mounted(){
    axios.get("/teams").then(res=>{
      this.teams=res.data.teams
    }).catch(err=>{
      alert(err)
    })


    axios.get("/attributes").then(res=>{this.attributes=res.data.attributes}).catch(err=>{alert(err)})
  }
}
</script>

<style>
body{
  background: #2c3e50;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: auto;
  width: 60%;
  padding: 120px 120px;
  text-align: center;
}

</style>
