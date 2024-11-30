
function Header() {
  return (
    <header className="border-bottom st-border-light bg-white">
      <div className="st-container container-fluid">
        <div className="header d-flex justify-content-between align-items-center align-content-center">
          <div className="header-left">
            <a href="https://ruhlistic.mycommercey.com" target="_blank" rel="noopener noreferrer">
              Visit Frontend Store
            </a>
          </div>

          {/* Search */}
          <div className="header-search-panel mx-3 col-xs-12 col-md-6 d-none" id="global-search-box">
            {/* <form id="search_list_form" action="http://localhost/Commercy/public/get/global/search/list" method="post">
              <input type="hidden" name="_token" value="rcug6Km4ToxJqdkgz1IwZ4j4eRzX6vVuleGAWzh9" />
              <input type="hidden" id="search_mode" name="search_mode" value="all" />
              <div className="input-group w-100">
                <button className="st-btn st-btn-primary st-btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ zIndex: 1 }}>
                  Search: <span id="selected-search-item" data-value="all">All</span>&nbsp;
                </button>
                <ul className="dropdown-menu" id="global-search-list">
                  <li><a className="dropdown-item" href="#" data-value="all">All</a></li>
                  <li><a className="dropdown-item" href="#" data-value="customers">Customers</a></li>
                  <li><a className="dropdown-item" href="#" data-value="orders">Orders</a></li>
                  <li><a className="dropdown-item" href="#" data-value="quotes">Quotes</a></li>
                  <li><a className="dropdown-item" href="#" data-value="return_orders">Return Orders</a></li>
                  <li><a className="dropdown-item" href="#" data-value="products">Products</a></li>
                  <li><a className="dropdown-item" href="#" data-value="coupons">Coupons</a></li>
                  <li><a className="dropdown-item" href="#" data-value="abandoned_cart">Abandoned Cart</a></li>
                </ul>

                <div className="rt_item st-form form-sm st-form-with-icon-left mb-0 search-box" style={{ width: '60%', marginLeft: '0px' }}>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Text input with dropdown button"
                    placeholder="Search..."
                    id="global-search-input"
                    name="search_text"
                    value=""
                    style={{ borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px' }}
                    autoComplete="off"
                  />
                  <div className="icon">
                    <i className="feather-search icon-main st-fs-18"></i>
                  </div>
                  <div id="search-content"></div>
                </div>
              </div>
            </form> */}
          </div>

          {/* Header Menu */}
          <div className="header-menu d-flex">
            {/* Header Menu Item - User Profile */}
            <div className="hm_item user-profile">
              <a href="/" className="st-round-btn st-btn-primary d-flex align-items-center justify-content-center" title="Profile">
                R S
              </a>

              {/* Header Dropdown */}
              <div className="header-dropdown">
                <div className="hd_inner st-default-rounded-block">
                  {/* Link Item - Settings */}
                  <a href="http://localhost/Commercy/public/storeSetting" className="link-item text-decoration-none d-flex align-items-center">
                    <i className="feather-settings st-fs-15 icon me-2"></i>
                    <span>Settings</span>
                  </a>

                  {/* Link Item - Account and Billing */}
                  <a href="http://localhost/Commercy/public/accounts/billing" className="link-item text-decoration-none d-flex align-items-center">
                    <i className="feather-help-circle st-fs-15 icon me-2"></i>
                    <span>Account and Billing</span>
                  </a>

                  {/* Link Item - Logout */}
                  <a href="http://localhost/Commercy/public/logout" className="link-item text-decoration-none d-flex align-items-center">
                    <i className="feather-log-out st-fs-15 icon me-2"></i>
                    <span>Logout</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header