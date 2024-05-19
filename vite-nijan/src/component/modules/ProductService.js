import http from "./http-common";

class ProductService {

    insert(product) {
      return http.post("http://localhost:8888/api/product/insert", product, {
        headers: {
          "Content-Type": "multipart/form-data; charset=utf-8"
        },
      });
    }

    update(productId, product) {
      console.log(product);
      return http.post("http://localhost:8888/api/product/update", product, {
        headers: {
          "Content-Type": "multipart/form-data; charset=utf-8"
        },
      });
    }

    getAllBySearchValue(searchValue) {
      return http.get('http://localhost:8888/api/product/all?search_value=' + searchValue);
    }

    getProductById(categoryId, productId) {
      return http.get('http://localhost:8888/api/product?category_id=' + categoryId + "&product_id=" + productId);
    }

    getAllPageable(page) {
      return http.get('http://localhost:8888/api/product/init/pageable' + "?page_no=" + page.pageNo + "&page_size=" + page.pageSize
      + "&sort_direction=" + page.sortDirection + "&sort_by=" + page.sortBy + "&search_value=" + page.searchValue)
    }

    getAllFilter(page) {
      return http.get('http://localhost:8888/api/product/init/filter' + "?page_no=" + page.pageNo + "&page_size=" + page.pageSize
      + "&sort_direction=" + page.sortDirection + "&sort_by=" + page.sortBy + "&category_id=" + page.categoryId)
    }

    deleteProduct(id) {
      return http.delete("http://localhost:8888/api/product/delete?product_id=" + id);
    }
}

export default new ProductService();
