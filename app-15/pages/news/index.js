import React from "react";
import Link from "next/link";

const NewsPage = () => {
  return (
    <div>
      <h1>News</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-framework">NExtJS Framework</Link>
        </li>
        <li>
          <Link href="/news/nextjs-vs-react18">NExtJS vs REACT 18</Link>
        </li>
      </ul>
    </div>
  );
};

export default NewsPage;
