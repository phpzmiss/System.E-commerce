import React from "react";
import Button from "../form/button/Button";
import formatter from "../../modules/formatter";
import OrderService from "../../modules/OrderService";

const OrderItem = ({ item, index, handleChangeProduct }) => {

  return (
    <tr className={Number.isInteger(index/2) ? "bg-white" : "bg-gray-200" }>
      <td className="px-6 py-4 text-center whitespace-normal">
        <div className="text-sm text-gray-500">{item.user.lastName}</div>
      </td>
      <td className="px-6 py-4 text-center whitespace-normal">
        <div className="text-sm text-gray-500">{item.user.address}</div>
      </td>
      <td className="px-6 py-4 text-center whitespace-normal">
        <div className="text-sm text-gray-500">
          {item.cartNumber}
        </div>
      </td>
      <td className="px-6 py-4 text-center whitespace-normal">
        <div className="text-sm text-gray-500">{item.createdDate}</div>
      </td>
      <td className="px-6 py-4 text-center whitespace-normal">
        <div className="text-sm text-gray-500">{formatter(item.totalPrice)}</div>
      </td>
      <td className="px-6 py-4 text-center whitespace-normal">
      <select
          name="cartStatus"
          id="cartStatus"
          className={"max-w-[150px] px-2 py-2 mt-3 mb-3 text-black transition-all bg-white border border-gray-100 rounded-md shadow-lg outline-none focus:border-blue-500"
            + (item.cartStatus == "3" ? " bg-gray-500 pointer-events-none select-none" : "")
          }
          value={item.cartStatus}
          onChange={(e) => handleChangeProduct(e, item.cartId)}
        >
          <option value="1">Wait confirm</option>
          <option value="2">Confirm</option>
          <option value="3">Complete</option>
        </select>
      </td>
    </tr>
  );
};

export default OrderItem;
