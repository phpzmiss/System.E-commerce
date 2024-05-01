// import { API_CATEGORY_PREFIX } from "../api";
import http from "./http-common";

class CategoryService {

    getAll() {
      return http.get('http://localhost:8888/api/category/list');
    }

    getCategoryById(id) {
      return http.get('http://localhost:8888/api/category?category_id=' + id);
    }
  
    getAllPageable(url, page) {
      return http.get(API_CATEGORY_PREFIX + url + "?page_no=" + page.pageNo + "&page_size=" + page.pageSize
      + "&sort_direction=" + page.sortDirection + "&sort_by=" + page.sortBy + "&search_value=" + page.searchValue)
    }
    
    createCategory(data) {
      return http.post('http://localhost:8888/api/category/register', data);
    }

    deleteCategory(id) {
      return http.post('http://localhost:8888/api/category/delete?category_id=' + id);
    }
}
export default new CategoryService();