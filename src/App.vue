<template>
  <div class="header">
    <Header/>
  </div>
  <div class="content">
    <div class="summary">
      <Summary/>
    </div>
    <div class="stats">
      <Stats/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Summary from './components/Summary.vue'
import Stats from './components/Stats.vue'

export default {
  name: 'App',
  components: {
    Header,
    Summary,
    Stats
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  overflow: hidden;
}

.header {
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  height: 220px;
  border: 1px #707070 solid;
  border-radius: 5px;
}

.summary {
  margin: 20px;
  height: 520px;
  width: 385px;
  border: 1px #707070 solid;
  border-radius: 5px;
}

.stats {
  margin-top: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  height: auto;
  width: 100%;
  border: 1px #707070 solid;
  border-radius: 5px;
}

.content {
  display: flex;
}
</style>
