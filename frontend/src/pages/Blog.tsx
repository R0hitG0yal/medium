import Header from "../component/Header";
import Footer from "../component/Footer";
import ArticleList from "../component/ArticleList";
import Sidebar from "../component/Sidebar";

const Blog: React.FC = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Header label="Add Post" onClick={() => {}} />
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-3/4 mb-64">
          <ArticleList />
        </div>
        <div className="absolute bottom-12 w-screen lg:w-1/4 lg:top-10 lg:right-0">
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
