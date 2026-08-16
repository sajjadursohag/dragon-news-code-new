import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();

  // ui te dekhanor jonno ekta state declare korte hobe
  const [categoryNews, setCategoryNews] = useState([]);

  // console.log(id, data);
  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filterdNews = data.filter(
        (news) => news.others.is_today_pick == true,
      );
      setCategoryNews(filterdNews);
    } else {
      const filterdNews = data.filter((news) => news.category_id == id);
      console.log(filterdNews);

      setCategoryNews(filterdNews);
    }
  }, [data, id]);
  return <div>Total {categoryNews.length} Found</div>;
};

export default CategoryNews;
