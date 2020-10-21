import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.devtools = true

export const store = new Vuex.Store({
    state: {
  matchDetails:{
      home_team:"",
      away_team:"",
      home_score:0,
      away_score:0,
      show_cards:false
      },
   homePlayer: {
        name: "",
        overall: 0,
        country: "",
        position: "",
      },
  awayPlayer: {
        name: "",
        overall: 0,
        country: "",
        position: "",
      },
      
  },
  mutations: {
    recordTeams(state,teams){
      state.matchDetails.home_team=teams[0]
      state.matchDetails.away_team=teams[1]
    },
    changeHomePlayer(state, {Name,overall,Nationality,Position}) {
      state.homePlayer = {
        name:Name,
        overall:overall,
        country:Nationality,
        position:Position
      }
    },
    changeAwayPlayer(state, {Name,overall,Nationality,Position}) {
      state.awayPlayer = {
        name:Name,
        overall:overall,
        country:Nationality,
        position:Position
      }
    },
    goalScored(state,team){
      if(team=="home"){state.matchDetails.home_score+=1}
      else if (team == "away"){state.matchDetails.away_score+=1}
     
    },showCards(state,show){
      state.matchDetails.show_cards=show
      setTimeout(function(){ 
        state.matchDetails.show_cards=!show
       }, 4500);
    }
  },
  getters: {
    home: state=>state.matchDetails.home_team,
    away:state=>state.matchDetails.away_team,
    homePlayer: state => state.homePlayer,
    awayPlayer: state=>state.awayPlayer,
    homeScore: state=>state.matchDetails.home_score,
    awayScore: state=>state.matchDetails.away_score,
    showCards: state=>state.matchDetails.show_cards,
    winner: state=>state.home_score>state.away_score?`The winner is ${state.home_team}`:state.matchDetails.home_score<state.matchDetails.away_score?`The winner is ${state.matchDetails.away_team}`:"Draw"
  }
})