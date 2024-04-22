// import { API_CATEGORY_PREFIX } from "../api";
import http from "./http-common";

class CategoryService {

    getAll(url) {
      return http.get('http://localhost:8888/api/category/list');
    }
  
    getAllPageable(url, page) {
      console.log(page);
      return http.get(API_CATEGORY_PREFIX + url + "?page_no=" + page.pageNo + "&page_size=" + page.pageSize
      + "&sort_direction=" + page.sortDirection + "&sort_by=" + page.sortBy + "&search_value=" + page.searchValue)
    }
    
    createCategory(data) {
        return http.post('http://localhost:8888/api/category/register', data);
    }
}
export default new CategoryService();