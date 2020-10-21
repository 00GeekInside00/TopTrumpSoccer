<template>
  <div id="app">
    <div class="container" v-if="this.$store.getters.showCards">
<span>
<span style="color:white">{{this.$store.getters.home}}:</span>
  <p class="result"> {{this.$store.getters.homeScore}}</p>
      <div class="player">
        <div class="logo">⚽</div>
        <div class="country">{{ this.$store.getters.homePlayer.country }}</div>
        <div class="name">{{ this.$store.getters.homePlayer.name }}</div>
        <div class="position">{{ this.$store.getters.homePlayer.position }}</div>
        <div class="score">{{ this.$store.getters.homePlayer.overall }}</div>
      </div>
</span>
<div style="background:white;width:2px"></div>
<span>
  <span style="color:white">{{this.$store.getters.away}}:</span>
  <p class="result"> {{this.$store.getters.awayScore}}</p>
      <div class="player">
        <div class="logo">⚽</div>
        <div class="country">{{ this.$store.getters.awayPlayer.country }}</div>
        <div class="name">{{ this.$store.getters.awayPlayer.name }}</div>
        <div class="position">{{ this.$store.getters.awayPlayer.position }}</div>
        <div class="score">{{ this.$store.getters.awayPlayer.overall }}</div>
      </div>
  </span>
</div>



<div class="container" v-else>
<span>
  <span style="color:white">{{this.$store.getters.home?this.$store.getters.home:"Choose a team"}}:</span>
  <p class="result"> {{this.$store.getters.homeScore}}</p>
      <div class="back">
        ⚽
        <div class="name">Soccer Top Trumps</div>
      </div>
</span>
<div style="background:white;width:2px"></div>
<span>
  <span style="color:white">{{this.$store.getters.away?this.$store.getters.away:"Choose a team"}}:</span>
  <p class="result"> {{this.$store.getters.awayScore}}</p>
      <div class="back">
        ⚽
        <div class="name">Soccer Top Trumps</div>
      </div>
</span>
</div>









  </div>
</template>

<script>
export default {
  name: "game",
  data() {
    return {
    };
  },
};
</script>

<style>
.container {
  display: grid;
  grid-template-columns: 120px 2px 120px;
  grid-gap: 25%;
}
.logo {
  float: right;
}
.position {
  color: darkred;
}
.player {
  color: black;
  background: gold;
  padding: 5px;
  border-radius: 5%;
  font-weight: bold;
  animation: shine 2s ease-in-out infinite;
}

.back {
  color: black;
  background: gold;
  padding: 10px;
  border-radius: 5%;
  font-weight: bold;
  height: 10em;
}
.name {
  color: #2b2812;
  font-weight: bold;
  display: inline-block;
  margin-top: 35%;
  margin-bottom: 35%;
  margin-left: 20%;
  margin-right: 20%;
  text-align: center;
}

.country {
  color: darkslategray;
  float: left;
  margin-top: 3%;
}

.score {
  animation: score 2s ease-in-out infinite;
}
.result{
  color: aliceblue;
  font-size: 55px;
  }
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

@keyframes shine {
  from {
    background-repeat: no-repeat;
    background-image: -webkit-linear-gradient(
      top left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 45%,
      rgba(255, 255, 255, 0.5) 48%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(255, 255, 255, 0.5) 52%,
      rgba(255, 255, 255, 0) 57%,
      rgba(255, 255, 255, 0) 100%
    );
    background-position: -250px -250px;
    background-size: 600px 600px;
  }
  to {
    background-repeat: no-repeat;
    background-position: 250px 250px;
  }
}

@keyframes score {
  from {
    color: red;
  }
  to {
    color: darkred;
  }
}
</style>
