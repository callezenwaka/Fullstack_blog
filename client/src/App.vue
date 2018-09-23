<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>
<script>
</script>
<style lang="css">
* { box-sizing: border-box }
html,body{
  margin: 0;
  padding: 0;
  font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-size: 0.9em;
  width: 100%;
  min-height: 100%;
}
h1,h2,h3,h4,h5,h6,ul,li,p,hr, div, header, footer {
  margin: 0;
  padding: 0;
}
.active {
	border-bottom: 2px solid rgba(255, 255, 255, 0.5);
}
.container {
  display: grid;
  grid-template-columns: 100%;
  /*grid-template-rows: 1fr auto auto;*/
  grid-gap: 0.5em;
  margin: 0;
  padding: 0;
  min-height:100%;
  grid-template-areas:
  "header"
  "main_container"
  "footer";
}
.header {
    grid-area: header;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "";
}
.main_container {
  grid-area: main_container;
  display: grid;
  grid-template-columns: 75% 25%;
  grid-template-rows: auto;
  grid-template-areas: 
  "page_content sidebar";
}
.page_content {
  grid-area: page_content;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 15% 85%;
  grid-template-areas:
  "page_head"
  "blog_content";
  font-size: 1em;
  padding: 0;
  margin: 0;
}
.sidebar {
  grid-area: sidebar;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  /*grid-template-areas:
  ""
  "";*/
  font-size: 1em;
  padding: 0;
}
.blog_content {
  grid-area: blog_content;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas:
  "blog_container";
}
.footer {
  grid-area: footer;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr
}
.page_content {
  font-size: 1em;
  padding: 0 10px;
}
.page_header {
  text-align: center;
  text-transform: uppercase;
  margin: 8px 0;
}
.scotch-rule:first-child {
    margin: 0 0 6px;
}
.scotch-rule {
    border-left: none;
    border-right: none;
}
.scotch-rule {
    box-sizing: content-box;
    content: '';
    display: block;
    border-top: 2px solid #e2e2e2;
    border-bottom: 1px solid #e2e2e2;
    height: 1px;
    margin: 15px 0;
    background-color: #fff;
    margin-top: 12px;
    margin-bottom: 12px;
}
</style>
