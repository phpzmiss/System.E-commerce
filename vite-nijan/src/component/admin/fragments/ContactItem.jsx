import React from "react";
import Button from "../form/button/Button";

const ContactItem = ({ contact, index }) => {
  return (
    <tr className={Number.isInteger(index/2) ? "bg-white" : "bg-gray-200" } key={contact.contactId}>
      <td className="px-6 py-4 text-center whitespace-normal">
        <div className="text-sm text-gray-500">{contact.contactName}</div>
      </td>
      <td className="px-6 py-4 text-center whitespace-normal">
        <div className="text-sm text-gray-500">{contact.contactPhone}</div>
      </td>
      <td className="px-6 py-4 text-center whitespace-normal">
        <div className="text-sm text-gray-500">
          {contact.contactEmail}
        </div>
      </td>
      <td className="px-6 py-4 text-center whitespace-normal">
        <div className="text-sm text-gray-500">{contact.contactMessage}</div>
      </td>
      <td className="px-6 py-4 text-center whitespace-normal">
        <div className="text-sm text-gray-500">{contact.contactSubject}</div>
      </td>
      {/* <td className="flex items-center justify-center px-6 py-4 text-sm font-medium text-right whitespace-normal gap-x-5">
        <a
          onClick={(e, id) => editProduct(e, product.id)}
          href="#"
          className="px-3 pt-2 pb-1 bg-blue-500 rounded-sm hover:cursor-pointer"
        >
          <Button><FaEdit className="w-5 h-5 text-white" /></Button>
        </a>
        <a
          onClick={(e, id) => deleteProduct(e, product.id)}
          href="#"
          className="px-3 pt-2 pb-1 bg-red-500 rounded-sm hover:cursor-pointer"
        >
          <Button><RiDeleteBin6Line className="w-5 h-5 text-white" /></Button>
        </a>

      </td> */}
    </tr>
  );
};

export default ContactItem;
