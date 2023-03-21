import request from "@/utils/request";

export const postLoginApi = ({ username, password }) => {
    return request({
        method: 'post',
        url: '/login',
        data: {
            username,
            password
        }
    })
}