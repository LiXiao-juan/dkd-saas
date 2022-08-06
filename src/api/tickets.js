import request from "@/utils/request";

export const getTasksList = (params) => {
    return request({
      url: '/task-service/task/search',
      method: "GET",
      params
    });
  };