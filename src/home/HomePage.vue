<template>
  <div class="home">
    <div class="get-started">
      Vuejs Address Book
    </div>
    <Tile v-bind:contacts="contactLists"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Tile from '../components/Tile.vue';

export const PARAMS = {
  RESULTS: 'results',
  SEED: 'seed',
  INCLUDE: 'inc',
};

export default {
  name: 'HomePage',
  components: {
    Tile,
  },
  computed: {
    contactLists() {
      return this.$store.getters['contacts/contactLists'];
    },
  },
  created() {
    this.getContactList();
  },
  methods: {
    ...mapActions('contacts', ['getContactList']),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
}
.get-started {
  padding-top: 20px;
  font-size: 25px;
}
</style>
