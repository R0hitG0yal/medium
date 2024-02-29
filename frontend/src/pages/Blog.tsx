import Header from "../component/Header";
import Footer from "../component/Footer";
import ArticleList from "../component/ArticleList";
import Sidebar from "../component/Sidebar";

const Blog: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header label="Add Post" onClick={() => {}} />
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-3/4 mb-16">
          <ArticleList />
        </div>
        <div className="lg:w-1/4">
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
