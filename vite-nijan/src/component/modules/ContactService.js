import http from "./http-common";

class ContactService {

    getAllPageable(page) {
        return http.get('http://localhost:8888/api/contact/list' + "?page_no=" + page.pageNo + "&page_size=" + page.pageSize
        + "&sort_direction=" + page.sortDirection + "&sort_by=" + page.sortBy)
    }

    insert(data) {
        return http.post('http://localhost:8888/api/contact/insert', data);
    }
}
export default new ContactService();