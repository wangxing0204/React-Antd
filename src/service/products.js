import {get, post, put, del} from '../utils/request';

/**
 * 获取
 * @param page
 */
export function listApi(page = 1) {
    return get("/api/v1/admin/products", {page});
}

/**
 * 创建
 * @param data
 */
export function createApi(data) {
    return get("/api/v1/admin/products", data);
}

/**
 * 修改
 * @param id
 * @param data
 */
export function modifyApi(id,data) {
    return get(`/api/v1/admin/products/${id}`, data);
}

/**
 * 删除
 * @param id
 * @param data
 */
export function delOne(id,data) {
    return get(`/api/v1/admin/products/${id}`);
}