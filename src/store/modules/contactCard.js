import axios from 'axios';

const PARAMS = {
  RESULTS: 'results',
  SEED: 'seed',
  INCLUDE: 'inc',
};

export default {
  namespaced: true,
  state: {
    contacts: [],
  },
  mutations: {
    updateContactsList(state, list) {
      state.contacts = list;
    },
  },
  actions: {
    getContactList({ commit }) {
      axios.get(`https://randomuser.me/api/?${PARAMS?.RESULTS}=50&${PARAMS.SEED}=abc&${PARAMS.INCLUDE}=name,phone,picture,email`)
        .then((res) => commit('updateContactsList', res.data.results.map((elm, index) => ({
          ...elm,
          key: `${index}${elm.name.first}`,
        }))))
        .catch(console.error);
    },
  },
  getters: {
    contactLists(state) {
      return state.contacts;
    },
    contactInfo: (state) => (id) => {
      console.log({ id });
      return state.contacts.find((item) => item.key === id);
    },
  },
};
