<template>
  <div v-for="contestMsg in contestMsgs" :key="contestMsg.id">
    <ContestCard :contestMsg="contestMsg"></ContestCard>
  </div>
</template>

<script>
import ContestCard from '@/components/ContestCard.vue';

export default {
  name: 'ContestCardList',
  components: {
    ContestCard,
  },
  props: {
    contestMsgs: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style></style>
