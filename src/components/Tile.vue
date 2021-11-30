<template>
    <div class="wrapper" v-for="contact in contacts" v-bind:key="contact.key">
        <router-link tag="tr" :to="'/contact-info/' + contact.key">
            <img v-bind:src="contact.picture.large" class="profilePicture"/>
            <div class="titleWrapper">
                {{ contact.name.title }} {{ contact.name.first }}
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'Tile',
  props: ['contacts'],
};
</script>

<style scoped>
.wrapper {
    display: inline-block;
    border: 1px solid;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    transition: 0.1s;
    min-height: 40px;
    margin: 8px;
    padding: 8px;
    width: 120px;
    text-align: center;
    color: "black";
    background-color: "lynxWhite";
    border-color: "lightGrey";
}
.profilePicture {
  width: 54px;
  background-size: cover;
}
.titleWrapper {
  color: blue;
  background-size: cover;
}
li {
    display: block;
    margin: 0 10px;
}
</style>
