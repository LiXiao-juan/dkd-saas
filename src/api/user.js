import request from "@/utils/request";

/**
 *  图片验证码
 * @param {Number} num 随机数
 * @returns  Promise
 */
export const imgCode = (num) => {
  return request({
    url: `/user-service/user/imageCode/${num}`,
    method: "GET",
    responseType: "blob",
  });
};

/**
 *
 * @param {Object} data
 * @returns
 */
export const login = (loginName, password, code, clientToken) => {
  return request({
    url: "user-service/user/login",
    method: "POST",
    data: {
      loginName,
      password,
      code,
      clientToken,
      loginType: 0,
    },
  });
};
