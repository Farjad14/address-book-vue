import { createStore } from 'vuex';

import contactCardModule from './modules/contactCard';

export default createStore({
  state: {
    foo: 'root-foo',
  },
  modules: {
    contacts: contactCardModule,
  },
  getters: {
    foo(state) {
      return `root-getter/${state.foo}`;
    },
  },
});
