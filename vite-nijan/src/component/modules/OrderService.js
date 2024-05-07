import httpCommon from "./http-common";

class OrderService {

    insert(order) {
        console.log(order);
          return httpCommon.post("http://localhost:8888/api/order/insert", order);
    }
}

export default new OrderService();