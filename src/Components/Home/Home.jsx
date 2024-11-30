function Home() {
  return (
    <section id="dashboard" className="st-def-mar-TB">
      <div className="container-fluid st-container">
        <div className="app-dashboard">
          <div className="content-wrapper d-flex flex-wrap">
            <div className="cw-lt-part media-body">
              <div className="widget-wrapper">
                <div className="ww-inner row">
                  {/* Head */}
                  <div className="col-12 head-wrapper d-flex align-items-center mb-2">
                    <p className="box-heading st-fs-16 st-fw-600 st-text-color">
                      Quick Shortcuts
                    </p>

                    <a href="#" className="st-text-primary d-inline-flex align-items-center ms-auto text-decoration-none st-fs-13 open-widgets-listing">
                      <div className="feather-edit-2"></div>
                      <span className="ms-2">Edit Widget</span>
                    </a>
                  </div>

                 
                  {/* Items */}
                  <div className="col-12 col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-3 page-border-box2 w-item mb-3">
                    <a href="/" className="pbb2-inner w-item-inner d-flex text-decoration-none">
                      <div className="w-icon st-line-height-0 rounded-circle d-flex align-items-center justify-content-center st-bg-primary text-white">
                        <i className="feather-trending-up"></i>
                      </div>
                      <div className="w-text media-body">
                        <p className="heading st-fs-17 st-fw-700 st-text-primary mb-1">
                          <span></span>
                        </p>
                        <p className="desc st-text-color2">Revenue (Paid Orders)</p>
                      </div>
                    </a>
                  </div>

                  <div className="col-12 col-sm-6 col-xs-6 col-md-6 col-lg-4 col-xl-3 page-border-box2 w-item mb-3">
                    <a href="/" className="pbb2-inner w-item-inner d-flex text-decoration-none">
                      <div className="w-icon st-line-height-0 rounded-circle d-flex align-items-center justify-content-center st-bg-primary text-white">
                        <i className="feather-shopping-cart"></i>
                      </div>
                      <div className="w-text media-body">
                        <p className="heading st-fs-17 st-fw-700 st-text-primary mb-1">
                          <span>0</span>
                        </p>
                        <p className="desc st-text-color2">Total Orders</p>
                      </div>
                    </a>
                  </div>

                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-3 page-border-box2 w-item mb-3">
                    <a href="/" className="pbb2-inner w-item-inner d-flex text-decoration-none">
                      <div className="w-icon st-line-height-0 rounded-circle d-flex align-items-center justify-content-center st-bg-primary text-white">
                        <i className="feather-download-cloud"></i>
                      </div>
                      <div className="w-text media-body">
                        <p className="heading st-fs-17 st-fw-700 st-text-primary mb-1">
                          <span>0</span>
                        </p>
                        <p className="desc st-text-color2">Products Ordered</p>
                      </div>
                    </a>
                  </div>

                  <div className="col-12 col-sm-6 col-xs-6 col-md-6 col-lg-4 col-xl-3 page-border-box2 w-item mb-3">
                    <a href="/" className="pbb2-inner w-item-inner d-flex text-decoration-none">
                      <div className="w-icon st-line-height-0 rounded-circle d-flex align-items-center justify-content-center st-bg-primary text-white">
                        <i className="feather-shopping-cart"></i>
                      </div>
                      <div className="w-text media-body">
                        <p className="heading st-fs-17 st-fw-700 st-text-primary mb-1">
                          <span>415</span>
                        </p>
                        <p className="desc st-text-color2">Abandoned Cart</p>
                      </div>
                    </a>
                  </div>

                  <div className="col-12 col-sm-6 col-xs-6 col-md-6 col-lg-4 col-xl-3 page-border-box2 w-item mb-3">
                    <a href="/" className="pbb2-inner w-item-inner d-flex text-decoration-none">
                      <div className="w-icon st-line-height-0 rounded-circle d-flex align-items-center justify-content-center st-bg-primary text-white">
                        <i className="feather-trending-up"></i>
                      </div>
                      <div className="w-text media-body">
                        <p className="heading st-fs-17 st-fw-700 st-text-primary mb-1">
                          <span>0</span>
                        </p>
                        <p className="desc st-text-color2">All Customers</p>
                      </div>
                    </a>
                  </div>

                  <div className="col-12 col-sm-6 col-xs-6 col-md-6 col-lg-4 col-xl-3 page-border-box2 w-item mb-3">
                    <a href="/" className="pbb2-inner w-item-inner d-flex text-decoration-none">
                      <div className="w-icon st-line-height-0 rounded-circle d-flex align-items-center justify-content-center st-bg-primary text-white">
                        <i className="feather-users"></i>
                      </div>
                      <div className="w-text media-body">
                        <p className="heading st-fs-17 st-fw-700 st-text-primary mb-1">
                          <span>0</span>
                        </p>
                        <p className="desc st-text-color2">Pending Customers</p>
                      </div>
                    </a>
                  </div>

                  <div className="col-12 col-sm-6 col-xs-6 col-md-6 col-lg-4 col-xl-3 page-border-box2 w-item mb-3">
                    <a href="/" className="pbb2-inner w-item-inner d-flex text-decoration-none">
                      <div className="w-icon st-line-height-0 rounded-circle d-flex align-items-center justify-content-center st-bg-primary text-white">
                        <i className="feather-users"></i>
                      </div>
                      <div className="w-text media-body">
                        <p className="heading st-fs-17 st-fw-700 st-text-primary mb-1">
                          <span>0</span>
                        </p>
                        <p className="desc st-text-color2">Approved Customers</p>
                      </div>
                    </a>
                  </div>

                  <div className="col-12 col-sm-6 col-xs-6 col-md-6 col-lg-4 col-xl-3 page-border-box2 w-item mb-3">
                    <a href="/" className="pbb2-inner w-item-inner d-flex text-decoration-none">
                      <div className="w-icon st-line-height-0 rounded-circle d-flex align-items-center justify-content-center st-bg-primary text-white">
                        <i className="feather-users"></i>
                      </div>
                      <div className="w-text media-body">
                        <p className="heading st-fs-17 st-fw-700 st-text-primary mb-1">
                          <span>0</span>
                        </p>
                        <p className="desc st-text-color2">Denied Customers</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home