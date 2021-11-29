<template>
  <div class="home">
    <div v-for="contact in contacts" :key="contact">
      <tile
        personId={{contact}}
        title={{contact.name.title}}
        firstName={{name.first}}
        picture={{picture.large}}
      />
    </div>
    <div class="get-started">
      hi there
    </div>
  </div>
</template>

<script>
import Tile from '../components/Tile.vue';

export const PARAMS = {
  RESULTS: 'results',
  SEED: 'seed',
  INCLUDE: 'inc',
};

export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
  components: {
    Tile,
  },
  data() {
    return {
      contacts: [],
    };
  },
  methods: {
    async getData() {
      try {
        const response = await fetch(`https://randomuser.me/api/?${PARAMS?.RESULTS}=50&${PARAMS.SEED}=abc&${PARAMS.INCLUDE}=name,phone,picture,email`);
        const data = await response.json();
        console.log(data.results);
        this.contacts = data.results;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
}
.robot {
  height: 300px;
}
.get-started {
  padding-top: 20px;
  font-size: 25px;
}
</style>
