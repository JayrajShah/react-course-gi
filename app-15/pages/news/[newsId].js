import React from "react";
import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();
  const newsId = router.query.newsId;
  return (
    <div>
      Detail page
      <h1>{newsId}</h1>
    </div>
  );
};

export default DetailPage;
