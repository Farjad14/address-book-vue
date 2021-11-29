<template>
    <div class="wrapper">
      <div class="profilePicture"  v-bind:style="{ backgroundImage: 'url(' + picture + ')' }" />
      <span>First Name: {{firstName}}</span>
      <span>Last Name: {{lastName}}</span>
      <span>Phone Number: {{phoneNumber}}</span>
      <span>Email: {{email}}</span>
    </div>
</template>

<script>
export default {
  name: 'ContactCard',
  props: ['firstName', 'lastName', 'picture', 'phoneNumber', 'email'],
};
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  position: relative;
  padding: 1rem;
  border: 1px solid;
  border-radius: 15px;
  margin: 0 0 2rem;
  border-color: #444444;
  background-color: #ffffff;
}
.profilePicture {
  width: 100px;
  background-size: cover;
}
li {
    display: block;
    margin: 0 10px;
}
</style>
