import React from "react";

interface Article {
  title: string;
  author: string;
  date: string;
}

const ArticleList: React.FC = () => {
  const articles: Article[] = [
    {
      title: "The Future of AI",
      author: "John Doe",
      date: "January 1st, 2021",
    },
    {
      title: "How to Build a Successful Startup",
      author: "Jane Smith",
      date: "February 1st, 2021",
    },
  ];

  return (
    <ul className="list-none space-y-4">
      {articles.map((article) => (
        <li key={article.title}>
          <a href="#" className="block bg-white rounded-md shadow-sm p-4">
            <span className="font-semibold block truncate">
              {article.title}
            </span>
            <span className="block truncate">
              by {article.author}, {article.date}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;
