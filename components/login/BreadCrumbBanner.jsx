import BreadCrumb from "../common/BreadCrumb";
import SocialIcons from "./socialICons";

const BreadCrumbBanner = () => {
  return (
    <section className="inner_page_breadcrumb   bg-[#3270fc]">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="breadcrumb_content">
              <BreadCrumb subTitle='Home' title="Login" />
              <h4 className="breadcrumb_title">Login</h4>


              <div className="footer_social_widget mt-4">
          {/* <h4>Follow us</h4> */}
          <ul className="mb30">
            <SocialIcons islogin={true} />
          </ul>
         
        </div>


            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbBanner;
