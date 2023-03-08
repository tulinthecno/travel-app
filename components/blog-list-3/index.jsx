import Pagination from "../common/blog/Pagination";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../home-3/Header";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import BreadCrumbBlog from "./BreadCrumbBlog";
import Blog from "./Blog";
import SearchMap from './searchMap'

const index = ({ data }) => {
  return (
    <>

      <Header />


      <MobileMenu />


      <PopupSignInUp />




      <SearchMap />


      <section className="blog_post_container bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <BreadCrumbBlog />
            </div>
          </div>

          {data?.length > 0 ? 

          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <Blog data={data} />

              </div>

            </div>

          </div>

:
<div className=" text-3xl text-red-600 font-semibold">لا يوجد أي عناصر</div>
          }



        </div>

      </section>


      {/* <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>  */}


    </>
  );
};

export default index;
