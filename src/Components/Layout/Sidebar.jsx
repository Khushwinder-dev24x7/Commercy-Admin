import { Link } from "react-router-dom"
import logo from '../../assets/images/logo.svg';
import PropTypes from 'prop-types';
import { useState } from "react";

function Sidebar({ toggleSlideClass }) {

  const [menu, setmenu] = useState("");

  const toggleElement = (menuId) => {
    setmenu((prevState) => (prevState === menuId ? "" : menuId));
  };
  
  return (
        <div className="inner bg-white h-100 border-end st-border-light">          
            {/* Logo */}
              <div className="st-logo-custom d-flex align-items-center border-bottom st-border-light">
                <Link to="/">
                  <img src={logo} alt="logo" className="img-fluid" />
                </Link>
                
                <button 
                className="st-round-btn st-btn-transparent st-btn-sm d-flex align-items-center justify-content-center cursor-pointer"
                onClick={toggleSlideClass}
                >
                  <i className="feather-menu st-fs-18 menu-custom-hm"></i>
                  <i className="feather-chevrons-right st-fs-18 menu-custom-aro"></i>
                </button>
              </div>

              {/* Store Dropdown */}
                <div className="border-bottom">
                  <div className="st-form st-sm st-form-with-label-top">
                    <div className="media-body st-form-input-container w-100 px-2">
                    <select className="form-control st-sm" name="store_login_id" id="store_login_id">
                      <option>Ruhlistic Decor</option>
                      <option>K Sons</option>
                      <option>Commercey Demo</option>
                      <option>The Pool Equipment</option>
                      <option >Zeog Lifestyle</option>
                      <option>Atamras</option>
                    </select>
                    </div>
                  </div>
                </div>


              {/* Sidebar Menu start Here */}
                {/* Dashbord Menu */}
                  <div className="alm_nav-item">
                    <a href="http://localhost/Commercy/public/dashboard" className="alm_nav-link text-decoration-none d-flex align-items-center">
                      {/* left sec */}
                      <div className="lt d-flex media-body">
                        <i className="feather-home st-fs-15 icon"></i>
                        <span>Dashboard</span>
                      </div>
                    </a>
                  </div>

                {/* My Sales */}
                  <div className="alm_nav-item has-sub-menu">
                    <a 
                    href="#" 
                    data-menu-id="my_sale" 
                    className={`${menu === "my_sale" ? "active" : ""} alm_nav-link text-decoration-none d-flex align-items-center`}
                    onClick={(e) => { e.preventDefault(); toggleElement(e.currentTarget.dataset.menuId)}}
                    >                    
                      {/* left sec */}
                      <div className="lt d-flex media-body">
                        <i className="feather-trending-up st-fs-15 icon"></i>
                        <span>My Sales</span>
                      </div>

                      {/* right sec */}
                      <div className="rt text-center">
                        <i className={`${menu === "my_sale" ? "feather-chevron-down" : "feather-chevron-right"} st-fs-15 icon`}></i>
                      </div>
                    </a>

                    {/* sub menu */}
                    <div className="alm_sub-menu" style={{ display: menu === "my_sale" ? "block" : "none" }}>
                      {/* sub menu nav item */}
                      <div className="alm_sub-nav-item">
                        <a href="http://localhost/Commercy/public/customers" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                          Customers
                        </a>
                      </div>

                      {/* sub menu nav item */}
                      <div className="alm_sub-nav-item">
                        <a href="http://localhost/Commercy/public/customers/groups" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                          Customer Group
                        </a>
                      </div>

                      {/* sub menu nav item */}
                      <div className="alm_sub-nav-item">
                        <a href="http://localhost/Commercy/public/sales/orders" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                          Sale Orders
                        </a>
                      </div>

                      {/* sub menu nav item */}
                      <div className="alm_sub-nav-item">
                        <a href="http://localhost/Commercy/public/return/orders" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                          Return Orders
                        </a>
                      </div>

                      {/* sub menu nav item */}
                      <div className="alm_sub-nav-item">
                        <a href="http://localhost/Commercy/public/quotes" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                          Quotes
                        </a>
                      </div>

                      {/* sub menu nav item */}
                      <div className="alm_sub-nav-item">
                        <a href="http://localhost/Commercy/public/abandonded/cart" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                          Abandoned Carts
                        </a>
                      </div>
                    </div>
                  </div>
                
                {/* Catalog */}
                  <div className="alm_nav-item has-sub-menu">
                    <a
                      href="#"
                      data-menu-id="catalog"
                      className={`${menu === "catalog" ? "active" : ""} alm_nav-link text-decoration-none d-flex align-items-center`}
                      onClick={(e) => { 
                        e.preventDefault();
                        toggleElement(e.currentTarget.dataset.menuId);
                      }}
                    >
                      <div className="lt d-flex media-body">
                        <i className="feather-book st-fs-15 icon"></i>
                        <span>Catalog</span>
                      </div>

                      <div className="rt text-center">
                        <i className={`${menu === "catalog" ? "feather-chevron-down" : "feather-chevron-right"} st-fs-15 icon`}></i>
                      </div>
                    </a>

                    <div className="alm_sub-menu" style={{ display: menu === "catalog" ? "block" : "none" }}>
                      <div className="alm_sub-nav-item">
                        <a href="http://localhost/Commercy/public/catalog/products" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                          Products
                        </a>
                      </div>

                      <div className="alm_sub-nav-item">
                        <a href="http://localhost/Commercy/public/catalog/categories" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                          Categories
                        </a>
                      </div>

                      <div className="alm_sub-nav-item">
                        <a href="http://localhost/Commercy/public/catalog/brands" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                          Brands
                        </a>
                      </div>

                      <div className="alm_sub-nav-item">
                        <a href="http://localhost/Commercy/public/catalog/multipliers" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                          Multipliers
                        </a>
                      </div>

                      <div className="alm_sub-nav-item">
                        <a href="http://localhost/Commercy/public/catalog/coupons" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                          Coupons
                        </a>
                      </div>

                      <div className="alm_sub-nav-item">
                        <a href="http://localhost/Commercy/public/reviews" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                          Product Reviews
                        </a>
                      </div>
                    </div>
                  </div>

                {/* Reports */}
                  <div className="alm_nav-item has-sub-menu">
                    <a
                      href="#"
                      data-menu-id="reports"
                      className={`${menu === "reports" ? "active" : ""} alm_nav-link text-decoration-none d-flex align-items-center`}
                      onClick={(e) => {
                        e.preventDefault();
                        toggleElement(e.currentTarget.dataset.menuId);
                      }}
                    >
                      <div className="lt d-flex media-body">
                        <i className="feather-pie-chart st-fs-15 icon"></i>
                        <span>Reports</span>
                      </div>

                      <div className="rt text-center">
                        <i className={`${menu === "reports" ? "feather-chevron-down" : "feather-chevron-right"} st-fs-15 icon`}></i>
                      </div>
                    </a>

                    <div className="alm_sub-menu" style={{ display: menu === "reports" ? "block" : "none" }}>
                      <div className="alm_sub-nav-item">
                        <a href="https://mycommercey.com/reports/sale-report" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                          Sale Report
                        </a>
                      </div>

                      <div className="alm_sub-nav-item">
                        <a href="https://mycommercey.com/reports/customer-report" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                          Customer Report
                        </a>
                      </div>

                      <div className="alm_sub-nav-item">
                        <a href="https://mycommercey.com/reports/saletax-report" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                          Sale Tax Report
                        </a>
                      </div>

                      <div className="alm_sub-nav-item">
                        <a href="https://mycommercey.com/reports/tracking-report" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                          Source Tracking Report
                        </a>
                      </div>

                      <div className="alm_sub-nav-item">
                        <a href="https://mycommercey.com/reports/payment-report" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                          Payment Report
                        </a>
                      </div>

                      <div className="alm_sub-nav-item">
                        <a href="https://mycommercey.com/reports/yearly-sale-report" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                          Yearly Sale Report
                        </a>
                      </div>

                      <div className="alm_sub-nav-item">
                        <a href="https://mycommercey.com/reports/coupon-tracking-report" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                          Coupon Tracking Report
                        </a>
                      </div>

                      <div className="alm_sub-nav-item">
                        <a href="https://mycommercey.com/reports/inventory-report" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                          Inventory Report
                        </a>
                      </div>

                      <div className="alm_sub-nav-item">
                        <a href="https://mycommercey.com/reports/pl-overview-report" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                          P/L Overview Report
                        </a>
                      </div>

                      <div className="alm_sub-nav-item">
                        <a href="https://mycommercey.com/reports/profit-loss-report" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                          P/L Report
                        </a>
                      </div>
                    </div>
                  </div>

                {/* Themes */}
                  <div className="alm_nav-item has-sub-menu">
                      <a
                        href="#"
                        data-menu-id="themes"
                        className={`${menu === "themes" ? "active" : ""} alm_nav-link text-decoration-none d-flex align-items-center`}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleElement(e.currentTarget.dataset.menuId);
                        }}
                      >
                        <div className="lt d-flex media-body">
                          <i className="feather-layers st-fs-15 icon"></i>
                          <span>Themes</span>
                        </div>

                        <div className="rt text-center">
                          <i className={`${menu === "themes" ? "feather-chevron-down" : "feather-chevron-right"} st-fs-15 icon`}></i>
                        </div>
                      </a>

                      <div className="alm_sub-menu" style={{ display: menu === "themes" ? "block" : "none" }}>
                        <div className="alm_sub-nav-item">
                          <a href="https://mycommercey.com/themes" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                            Theme
                          </a>
                        </div>

                        <div className="alm_sub-nav-item">
                          <a href="https://mycommercey.com/pages" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                            Pages
                          </a>
                        </div>

                        <div className="alm_nav-item alm_sub-nav-item has-sub-menu">
                          <a
                            href="#"
                            data-menu-id="blogs"
                            className={`${menu === "blogs" ? "active" : ""} alm_nav-link text-decoration-none d-flex align-items-center`}
                            onClick={(e) => {
                              e.preventDefault();
                              toggleElement(e.currentTarget.dataset.menuId);
                            }}
                          >
                            <div className="lt d-flex media-body">
                              <span>Blogs</span>
                            </div>

                            <div className="rt text-center">
                              <i className={`${menu === "blogs" ? "feather-chevron-down" : "feather-chevron-right"} st-fs-15 icon`}></i>
                            </div>
                          </a>

                          <div className="alm_sub-menu" style={{ display: menu === "blogs" ? "block" : "none" }}>
                            <div className="alm_sub-nav-item">
                              <a href="https://mycommercey.com/blogs" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                                Blog Posts
                              </a>
                            </div>
                            <div className="alm_sub-nav-item">
                              <a href="https://mycommercey.com/tags" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                                Post Tags
                              </a>
                            </div>
                            <div className="alm_sub-nav-item">
                              <a href="https://mycommercey.com/authors" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                                Authors
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="alm_nav-item alm_sub-nav-item has-sub-menu">
                          <a
                            href="#"
                            data-menu-id="homePage"
                            className={`${menu === "homePage" ? "active" : ""} alm_nav-link text-decoration-none d-flex align-items-center`}
                            onClick={(e) => {
                              e.preventDefault();
                              toggleElement(e.currentTarget.dataset.menuId);
                            }}
                          >
                            <div className="lt d-flex media-body">
                              <span>Home Page</span>
                            </div>

                            <div className="rt text-center">
                              <i className={`${menu === "homePage" ? "feather-chevron-down" : "feather-chevron-right"} st-fs-15 icon`}></i>
                            </div>
                          </a>

                          <div className="alm_sub-menu" style={{ display: menu === "homePage" ? "block" : "none" }}>
                            <div className="alm_sub-nav-item">
                              <a href="https://mycommercey.com/sliders" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                                Main Sliders
                              </a>
                            </div>
                            <div className="alm_sub-nav-item">
                              <a href="https://mycommercey.com/home-sliders" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                                Inner Home Sliders
                              </a>
                            </div>
                            <div className="alm_sub-nav-item">
                              <a href="https://mycommercey.com/home-sliders2" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                                Inner Home Gif Banners
                              </a>
                            </div>
                            <div className="alm_sub-nav-item">
                              <a href="https://mycommercey.com/home-sliders3" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                                Two Box Sliders
                              </a>
                            </div>
                            <div className="alm_sub-nav-item">
                              <a href="https://mycommercey.com/homepage-sliders" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                                Home Page Section
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="alm_sub-nav-item">
                          <a href="https://mycommercey.com/testimonials" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                            Testimonials
                          </a>
                        </div>
                      </div>
                  </div>
                  
                {/* Settings */}
                  <div className="alm_nav-item has-sub-menu">
                    <a
                      href="#"
                      data-menu-id="settings"
                      className={`${menu === "settings" ? "active" : ""} alm_nav-link text-decoration-none d-flex align-items-center`}
                      onClick={(e) => {
                        e.preventDefault();
                        toggleElement(e.currentTarget.dataset.menuId);
                      }}
                    >
                      <div className="lt d-flex media-body">
                        <i className="feather-settings st-fs-15 icon"></i>
                        <span>Settings</span>
                      </div>

                      <div className="rt text-center">
                        <i className={`${menu === "settings" ? "feather-chevron-down" : "feather-chevron-right"} st-fs-15 icon`}></i>
                      </div>
                    </a>

                    <div className="alm_sub-menu" style={{ display: menu === "settings" ? "block" : "none" }}>
                      <div className="alm_sub-nav-item">
                        <a href="https://mycommercey.com/storeSetting" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                          Store settings
                        </a>
                      </div>

                      <div className="alm_nav-item alm_sub-nav-item has-sub-menu">
                        <a
                          href="#"
                          data-menu-id="usersRoles"
                          className={`${menu === "usersRoles" ? "active" : ""} alm_nav-link text-decoration-none d-flex align-items-center`}
                          onClick={(e) => {
                            e.preventDefault();
                            toggleElement(e.currentTarget.dataset.menuId);
                          }}
                        >
                          <div className="lt d-flex media-body">
                            <span>Users & Roles</span>
                          </div>

                          <div className="rt text-center">
                            <i className={`${menu === "usersRoles" ? "feather-chevron-down" : "feather-chevron-right"} st-fs-15 icon`}></i>
                          </div>
                        </a>

                        <div className="alm_sub-menu" style={{ display: menu === "usersRoles" ? "block" : "none" }}>
                          <div className="alm_sub-nav-item">
                            <a href="https://mycommercey.com/admin/roles" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                              Admin Roles
                            </a>
                          </div>
                          <div className="alm_sub-nav-item">
                            <a href="https://mycommercey.com/admin/users" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                              Users
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="alm_sub-nav-item">
                        <a href="https://mycommercey.com/shipping/list" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                          Shipping & Pickup
                        </a>
                      </div>

                      <div className="alm_sub-nav-item">
                        <a href="https://mycommercey.com/notification/list" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                          Notifications
                        </a>
                      </div>

                      <div className="alm_sub-nav-item">
                        <a href="https://mycommercey.com/settings/payments" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                          Payments
                        </a>
                      </div>

                      <div className="alm_sub-nav-item">
                        <a href="https://mycommercey.com/analytics" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                          Analytics
                        </a>
                      </div>

                      <div className="alm_sub-nav-item">
                        <a href="https://mycommercey.com/settings/taxes-and-duties" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                          Taxes & Duties
                        </a>
                      </div>

                      <div className="alm_sub-nav-item">
                        <a href="https://mycommercey.com/catalog/product/attributes" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                          Product Types
                        </a>
                      </div>

                      <div className="alm_sub-nav-item">
                        <a href="https://mycommercey.com/settings/domain" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                          Manage Domain
                        </a>
                      </div>

                      <div className="alm_sub-nav-item">
                        <a href="https://mycommercey.com/import/products-case-quantity" className="alm_sub-nav-link text-decoration-none d-flex align-items-center">
                          Update Inventory
                        </a>
                      </div>
                    </div>
                  </div>
              {/* Sidebar Menu end Here */}

        </div>

  )
}

Sidebar.propTypes = {
  toggleSlideClass: PropTypes.func.isRequired,
};
export default Sidebar