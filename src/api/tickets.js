import request from "@/utils/request";

export const getTaskList = (parmas) => {
    return request({
      url: '/task-service/task/search',
      method: "GET",
      parmas
    });
  };