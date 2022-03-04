import {get, post, put, del} from '../utils/request';

/**
 * 获取
 * @param page
 */
export function listApi() {
    return get("/api/v1/admin/products/findAll");
}

/**
 * 创建
 * @param data
 */
export function createApi(data) {
    return get("/api/v1/admin/products/add", data);
}

/**
 * 通过id获取单条数据
 * @param id
 */
export function getOneApi(id) {
    return get(`/api/v1/admin/products/findPage/${id}`);
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