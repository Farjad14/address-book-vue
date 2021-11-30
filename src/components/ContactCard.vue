<template>
    <h3>Contact Card</h3>
    <div class="wrapperContactCard">
      <img v-bind:src="contactInfo.picture.large" class="profilePictureContactCard"/>
      <br/>
      <span>First Name: {{ contactInfo.name.first }}</span>
      <span>Last Name: {{ contactInfo.name.last }}</span>
      <span>Phone Number: {{ contactInfo.phone }}</span>
      <span>Email: {{ contactInfo.email }}</span>
    </div>
</template>

<script>

export default {
  name: 'ContactCard',
  computed: {
    contactInfo() {
      const { id } = this.$route.params;
      return this.$store.getters['contacts/contactInfo'](id);
    },
  },
};
</script>

<style>
.wrapperContactCard {
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  position: relative;
  padding: 1rem;
  border: 1px solid;
  border-radius: 15px;
  margin: 0 0 2rem;
  border-color: #444444;
  background-color: #ffffff;
}
.profilePictureContactCard {
  width: 100px;
  background-size: cover;
}
li {
    display: block;
    margin: 0 10px;
}
</style>
