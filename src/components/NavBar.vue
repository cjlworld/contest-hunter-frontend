<template>
    <!-- NavBar -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="#">
          全网比赛日历
          <a class="navbar-brand navbar-small-title">OI / ACM</a>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Calendar</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Api</a>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li> -->
          </ul>
          <span class="navbar-text">
            <a href="https://github.com/cjlworld/contest-hunter-frontend">Github</a>
          </span>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    components: {
        
    },
}
</script>

<style scoped>
.navbar-small-title {
  font-size: 13px;
}
</style>