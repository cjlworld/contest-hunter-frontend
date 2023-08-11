<template>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-2">
        <img :src="require('@/assets/'+contestMsg['platform']+'-icon.png')" class="img-fluid rounded-start logo-image"/>
      </div>
      <div class="col-md-8">
        <div class="card-body contest-card-text">
          <h5 class="card-title">{{ contestMsg['title'] }}</h5>
          <p class="card-text">
            <small class="text-muted">{{ contestMsg['time'] }}</small>
          </p>
          <p class="card-text" v-if="contestMsg['length'] != undefined">
            时长: {{ contestMsg['length'] }}
          </p>
          <p class="card-text" v-if="contestMsg['rating'] != undefined">
            rating 范围: {{ contestMsg['rating'] }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContestCard',
  props: {
    contestMsg: {
      type: Object,
      required: true
    }
  },
}
</script>

<style>
.logo-image {
  margin: 10px;
}
.contest-card-text {
  margin-left: 20px;
}
</style>
