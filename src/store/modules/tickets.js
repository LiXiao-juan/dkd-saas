import { getTasksList } from "@/api/tickets";
import router from "@/router";
import { Message } from "element-ui";
export default {
  namespaced: true,
  state: {
    taskObj: {},
    total: 0,
    taskList: [],
  },
  mutations: {
    SETTASKLIST(state, payload) {
      state.taskObj = payload;
      state.total = +payload.totalCount;
      state.taskList = payload.currentPageRecords;
    }
  },
  actions: {
    async getTaskList({ commit }) {
      const { data } = await getTasksList();
      commit("SETTASKLIST", data);
    }
  },
};
