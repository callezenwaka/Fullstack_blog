<template>
    <div class="sidebar">
        <div class="">
            <div style="text-align: center;">
                <h2 class="sidebar_header">Archive</h2><hr class="scotch-rule">
                    <ul>
                        <li><a href="#">Jan, 2018</a></li>
                        <li><a href="#">Feb, 2018</a></li>
                        <li><a href="#">March, 2018</a></li>
                        <li><a href="#">April, 2018</a></li>
                        <li><a href="#">May, 2018</a></li>
                        <li><a href="#">Jun, 2018</a></li>
                    </ul>
            </div>
            <div style="text-align: center;">
                <h2 class="sidebar_header">Connect</h2><hr class="scotch-rule">
                <ul>
                    <li><a title="facebook" href="#">Facebook</a></li>
                    <li><a title="twitter" href="#">Twitter</a></li>
                    <li><a title="instagram" href="#">Instagram</a></li>
                    <li><a title="google+" href="#">Google+</a></li>
                    <li><a title="linkedIn" href="#">LinkedIn</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 15px 0 5px;
  color: #000000;
  background-color: unset;
}
.sidebar  a {
  color: #000000;
  cursor: pointer;
}
.sidebar  a:hover {
  border-bottom: 1px solid #000000;
}
.sidebar_header {
  margin: 8px 0;
}
</style>