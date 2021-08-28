function HomePage() {
  return (
    <div className="gradient py-3">
      <div className="container p-0 ">
        <div className="white_glass  p-2 u_rounded_2X">
          <div
            className="row d-flex justify-content-around"
            style={{ margin: 0 }}
          >
            <div className="col-12">
              <h2> Featured</h2>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="card feature_card  text-center">
                <div className="card-body">
                  <img
                    src="/assets/png/005-avatar.png"
                    className="feature_icon"
                  />
                  <p className="card-text fw-bold text-secondary">Pokémons</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="card  text-center">
                <div className="card-body">
                  <i className="fab fa-raspberry-pi"></i>
                  <p className="card-text fw-bold text-secondary">Berries</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="card  text-center">
                <div className="card-body">
                  <i className="fab fa-raspberry-pi"></i>
                  <p className="card-text fw-bold text-secondary">Items</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="card  text-center">
                <div className="card-body">
                  <i className="fab fa-raspberry-pi"></i>
                  <p className="card-text fw-bold text-secondary">Locations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
