<template>
  <div id="app">
    <header>
      <h1 class="site-title">Vue Phone Book</h1>
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </header>

    <div class="content"><router-view /></div>
  </div>
</template>

<style lang="scss">
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

input,
button,
select {
  outline: none;
  padding: 10px;
  border-radius: 15px;
  border: 1px solid darkgray;
  color: white;
  background: #141414;
  min-width: 150px;

  &:focus {
    background: gray;
  }
  &::placeholder {
    color: lightgray;
  }
}

button {
  cursor: pointer;

  &:hover {
    background: gray;
  }
}

h2 {
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid darkgray;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #353535;
  border-radius: 10px;
  height: 60px;
  margin-bottom: 25px;
  text-align: center;
}

#app {
  padding: 25px;
}

.site-title {
  justify-self: flex-start;
  align-self: center;
  padding-left: 15px;
}

#nav {
  display: flex;
}

#nav a {
  background: #353535;
  color: lightgray;
  display: flex;
  align-items: center;
  padding: 0 15px;
  text-decoration: none;

  &:nth-last-of-type(odd) {
    border-left: 1px dashed #4d4d4d;
  }

  &:last-child {
    border-radius: 0 10px 10px 0;
  }

  &:hover {
    background: #4d4d4d;
  }
}
.separator {
  margin: 15px 0;
  border-bottom: 1px solid lightgray;
}
</style>
