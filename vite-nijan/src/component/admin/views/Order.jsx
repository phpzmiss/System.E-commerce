import React, { useEffect, useState } from 'react'
import { VscDebugStart } from 'react-icons/vsc';
import axios from 'axios';
import OrderItem from '../fragments/OrderItem';
import OrderService from '../../modules/OrderService';

const Order = () => {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState(null);

    const [page, setPage] = useState({
        pageNo: 0,
        pageSize: 10,
        sortDirection: "",
        sortBy: "",
    });
    const [responsePage, setResponsePage] = useState({
      last: true,
      pageNo: 0,
      pageSize: 0,
      totalElements: 0,
      totalPages: 0,
    });
  
    const [pageLoop, setPageLoop] = useState([]);
    const [pagePrev, setPagePrev] = useState(true);
    const [pageNext, setPageNext] = useState(true);
  
     useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
            OrderService.getAll(page)
            .then(function (response) {
              setItems(response.data.result.result[0]);
              const items = [];
              for (let i = 0; i < response.data.result.totalPages; i++) {
                items.push(i+1);
              }
              setPageLoop(items);
              setLoading(false);
            });
          } catch (error) {}
        };
        fetchData();

      }, []);

    const handleChangeProduct = (e, id) => {
      OrderService.update(id, e.target.value)
      .then((res) => {
        if (res.data.code == 200) {
          try {
            OrderService.getAll(page)
            .then(function (response) {
              setItems(response.data.result.result[0]);
              setLoading(false);
            });
          } catch (error) {}
        }
      })
      
    }

    const changePage = async (e, pageNo) => {
      try {
        page.pageNo = pageNo - 1;
        const response = await OrderService.getAll(page);
        if (response.data.code == 200) {
          setItems(response.data.result.result[0]);
          setResponsePage(response.data.result);
          const items = [];
          for (let i = 0; i < response.data.result.totalPages; i++) {
            items.push(i+1);
          }
          setPageLoop(items);
        }
      } catch (error) {}
    }
  
    const changePrev = async () => {
      if (pagePrev == true && responsePage.pageNo > 0) {
        try {
          page.pageNo = responsePage.pageNo - 1;
          const response = await OrderService.getAll(page);
          if (response.data.code == 200) {
            setItems(response.data.result.result[0]);
            setResponsePage(response.data.result);
            const items = [];
            for (let i = 0; i < response.data.result.totalPages; i++) {
              items.push(i+1);
            }
            setPageLoop(items);
          }
          if (page.pageNo) {
            setPageNext(true);
            setPagePrev(false);
          }
        } catch (error) {}
      }
    }
  
    const changeNext = async () => {
      if (pageNext == true && responsePage.pageNo + 1 < responsePage.totalPages) {
        try {
          page.pageNo = responsePage.pageNo + 1;
          const response = await OrderService.getAll(page);
          if (response.data.code == 200) {
            setItems(response.data.result.result[0]);
            setResponsePage(response.data.result);
            const items = [];
            for (let i = 0; i < response.data.result.totalPages; i++) {
              items.push(i+1);
            }
            setPageLoop(items);
          }
          if (page.pageNo == responsePage.totalPages) {
            setPageNext(false);
            setPagePrev(true);
          }
        } catch (error) {}
      }
    }
    return (
        <div className="w-full h-full mx-auto">
          <div className="flex items-center w-full h-auto py-2 text-2xl font-semibold gap-x-5">
            <span>Home</span> <VscDebugStart /> <span className="font-bold bg">Order</span>
          </div>
          <div className="flex mt-5 border-b shadow">
            <table className="min-w-full">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-6 py-3 text-xs tracking-wider text-center text-black uppercase border-r-2 border-gray-500">
                    Name
                  </th>
                  <th className="px-6 py-3 text-xs tracking-wider text-center text-black uppercase border-r-2 border-gray-500">
                    Address
                  </th>
                  <th className="px-6 py-3 text-xs tracking-wider text-center text-black uppercase border-r-2 border-gray-500">
                    Cart number
                  </th>
                  <th className="px-6 py-3 text-xs tracking-wider text-center text-black uppercase border-r-2 border-gray-500">
                    Created date
                  </th>
                  <th className="px-6 py-3 text-xs tracking-wider text-center text-black uppercase border-r-2 border-gray-500">
                    Total price
                  </th>
                  <th className="px-6 py-3 text-xs tracking-wider text-center text-black uppercase border-gray-500">
                    Action
                  </th>
                </tr>
              </thead>
              {!loading && (
                <tbody>
                  {items.map((condition,index) => (
                    <OrderItem
                      key={index}
                      index={index}
                      item={condition}
                      handleChangeProduct={handleChangeProduct}
                    >
                    </OrderItem>
                  ))}
                </tbody>
              )}
            </table>
          </div>

          <nav className="mt-2">
            <ul className="flex items-center justify-end">
              <li className="select-none page-item bg-slate-100" onClick={changePrev}>Prev</li>
              {!loading && (
                  pageLoop.map((page, index) => (
                    <li className={"select-none page-item " + (responsePage.pageNo + 1 == page ? 'page-active' : '')} key={index} onClick={(e) => changePage(e, page)}>{page}</li>
                  ))
              )}
              <li className="select-none page-item bg-slate-100" onClick={changeNext}>Next</li>
            </ul>
          </nav>
        </div>
      );
}

export default Order;