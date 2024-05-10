import http from "./http-common";

class ProductService {

    insert(product) {
        // if (INSERT === type) {
          return http.post("http://localhost:8888/api/product/insert", product, {
            headers: {
              "Content-Type": "multipart/form-data; charset=utf-8"
            },
            // onUploadProgress
          });
    }

    getProductById(categoryId, productId) {
      return http.get('http://localhost:8888/api/category?category_id=' + categoryId + "&product_id=" + productId);
    }

    async getAllPageable(page) {
      return http.get('http://localhost:8888/api/product/init/pageable' + "?page_no=" + page.pageNo + "&page_size=" + page.pageSize
      + "&sort_direction=" + page.sortDirection + "&sort_by=" + page.sortBy + "&search_value=" + page.searchValue)
    }

    async getAllFilter(page) {
      return http.get('http://localhost:8888/api/product/init/filter' + "?page_no=" + page.pageNo + "&page_size=" + page.pageSize
      + "&sort_direction=" + page.sortDirection + "&sort_by=" + page.sortBy + "&category_id=" + page.categoryId)
    }

    deleteProduct(id) {
      return http.delete("http://localhost:8888/api/product/delete?product_id=" + id);
    }
}

export default new ProductService();