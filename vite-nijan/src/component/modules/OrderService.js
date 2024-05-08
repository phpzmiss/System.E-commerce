import httpCommon from "./http-common";

class OrderService {

    insert(order) {
        return httpCommon.post("http://localhost:8888/api/order/insert", order);
    }

    getAll(page) {
        return httpCommon.get('http://localhost:8888/api/order/get-all' + "?page_no=" + page.pageNo + "&page_size=" + page.pageSize
        + "&sort_direction=" + page.sortDirection + "&sort_by=" + page.sortBy);
    }

    update(cartId, orderStatus) {
        return httpCommon.put("http://localhost:8888/api/order/update/" + cartId + "/" + orderStatus);
    }
}

export default new OrderService();