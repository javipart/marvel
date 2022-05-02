export default {
  topic: {
    selected: 0,
    data: {
      results: [],
    },
    get: {
      data: {},
      details: [],
    },

    page: 1,
    maxPage: 1,
    loading: false,
  },
  search: {
    value: '',
  },
  modals: {
    show: false,
    title: '',
    Component: () => (true),
    data: {},
    dismissible: true,
  }
};
