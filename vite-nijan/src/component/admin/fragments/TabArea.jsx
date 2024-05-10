import React, { useEffect, useState } from 'react'
import CategoryService from '../../modules/CategoryService';

export default function TabArea({handleChangeTabBreak, activeCategory}) {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await CategoryService.getAll();
        if (response.data.code == 200) {
          setCategory(response.data.result);
          setLoading(false)
        }
      } catch (error) {}
    };
    fetchData();
  }, []);
  return (
    <div class="nav-main">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          {!loading && 
          category.map((item, index) => (
            <li class="nav-item cursor-pointer" key={index} onClick={() => handleChangeTabBreak(item.categoryId)}>
              <a class={"nav-link" + (activeCategory == item.categoryId ? ' active' : '')}>{item.categoryName}</a>
            </li>
          ))
          }
        </ul>
    </div>
  )
}
