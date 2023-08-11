<template>
  <NavBar></NavBar>
  <ContentMainCard>
    <ContestCardList :contestMsgs="contestMsgs"></ContestCardList>
  </ContentMainCard>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import ContentMainCard from '@/components/ContentMainCard.vue';
// import ContestCard from '@/components/ContestCard.vue';
import ContestCardList from '@/components/ContestCardList.vue';
import axios from 'axios';

export default {
  name: 'CalendarView',
  components: {
    NavBar,
    ContentMainCard,
    // ContestCard
    ContestCardList,
  },
  data() {
    return {
      contestMsgs: [] // 初始化 contestMsgs 数组
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get('https://69ci238615.imdo.co/daily-report')
        .then(response => {
          console.log(response.data); // 在控制台打印响应数据
          // 将响应数据存储到 contestMsgs 中
          this.contestMsgs = response.data['data'];
        })
        .catch(error => {
          console.error(error);
          // 处理错误的逻辑
        });
    }
  }
 
}

// setup() {
//   const contestMsgs = [
//     {
//       'title': 'Codeforces Round 2',
//       'time': '2023/08/10 22:00',
//       'platform': 'codeforces',
//       'rating': ' - 1600',
//       'length': '02:00'
//     },
//     {
//       'title': 'Codeforces Round 2',
//       'time': '2023/08/10 22:00',
//       'platform': 'codeforces',
//       'rating': ' - 1600',
//       'length': '02:00'
//     },
//     {
//       'title': 'Codeforces Round 2',
//       'time': '2023/08/10 22:00',
//       'platform': 'codeforces',
//       'rating': ' - 1600',
//       'length': '02:00'
//     },
//     {
//       'title': 'Codeforces Round 2',
//       'time': '2023/08/10 22:00',
//       'platform': 'codeforces',
//       'rating': ' - 1600',
//       'length': '02:00'
//     },
//   ]

//   return {
//     contestMsgs,
//   }
// }
</script>

<style scoped>
</style>

