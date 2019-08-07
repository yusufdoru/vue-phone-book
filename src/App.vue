<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="content"><router-view /></div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #141414;
  color: lightgray;
  font-size: 16px;
}
#app {
  padding: 25px;
}
#nav {
  display: block;
  background: #353535;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 15px;
}
#nav a {
  color: lightgray;
}
.separator {
  margin: 15px 0;
  border-bottom: 1px solid lightgray;
}
</style>
