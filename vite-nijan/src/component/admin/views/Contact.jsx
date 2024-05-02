import React, { useEffect, useState } from 'react'
import ContactItem from '../fragments/ContactItem';
import ContactService from '../../modules/ContactService';
import { VscDebugStart } from 'react-icons/vsc';
import axios from 'axios';

const Contact = () => {
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState(null);

    const [page, setPage] = useState({
        pageNo: 0,
        pageSize: 5,
        sortDirection: "",
        sortBy: "",
    })
  
     useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
            axios({
                method: 'get',
                url: 'http://localhost:8888/api/contact/list' + "?page_no=" + page.pageNo + "&page_size=" + page.pageSize
                + "&sort_direction=" + page.sortDirection + "&sort_by=" + page.sortBy,
              })
            .then(function (response) {
                setCategory(response.data.result.result);
                setLoading(false);
            });
          } catch (error) {}
        };
        fetchData();

      }, []);

    return (
        <div className="w-full h-full mx-auto">
          <div className="flex items-center w-full h-auto py-2 text-2xl font-semibold gap-x-5">
            <span>Home</span> <VscDebugStart /> <span className="font-bold bg">Contact</span>
          </div>
          <div className="flex mt-5 border-b shadow">
            <table className="min-w-full">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-6 py-3 text-xs tracking-wider text-center text-black uppercase border-r-2 border-gray-500">
                    Name
                  </th>
                  <th className="px-6 py-3 text-xs tracking-wider text-center text-black uppercase border-r-2 border-gray-500">
                    Phone
                  </th>
                  <th className="px-6 py-3 text-xs tracking-wider text-center text-black uppercase border-r-2 border-gray-500">
                    Email
                  </th>
                  <th className="px-6 py-3 text-xs tracking-wider text-center text-black uppercase border-r-2 border-gray-500">
                    Message
                  </th>
                  <th className="px-6 py-3 text-xs tracking-wider text-center text-black uppercase border-r-2 border-gray-500">
                    Subject
                  </th>
                  {/* <th className="px-6 py-3 text-xs tracking-wider text-center text-black uppercase border-gray-500">
                    Action
                  </th> */}
                </tr>
              </thead>
              {!loading && category != null && (
                <tbody>
                  {category.map((c, index) => (
                    <ContactItem
                      index={index}
                      contact={c}
                      key={c.contactId}
                    ></ContactItem>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
      );
}

export default Contact;