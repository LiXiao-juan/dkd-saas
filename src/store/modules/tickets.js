import { getTaskList } from "@/api/tickets";
import router from "@/router";
import { Message } from "element-ui";
export default {
  namespaced: true,
  state: {
    taskObj: {},
  },
  mutations: {
    SETTASKLIST(state, payload) {
      state.taskObj = payload;
    },
  },
  actions: {
    async getTaskList({ commit }) {
      const { data } = await getTaskList();
      console.log(data);
      commit("SETTASKLIST", data);
    },
  },
};
