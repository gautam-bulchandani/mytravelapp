import Link from "next/link";

const FooterSection = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-content position-relative">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-info">
                  <h3>My Travel App</h3>
                  <p>
                    Vadodara, India <br></br>
                    3rd and 4th Floor, Gujarat Samachar Building<br></br>
                    Karelibaug, Vadodara, Gujarat 390018
                    <br></br>
                    <strong>Phone:</strong> +91-265-232-3272<br></br>
                    <strong>Email:</strong>BDQ@horizontal.com<br></br>
                  </p>
                  <div className="social-links d-flex mt-3">
                    <Link
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-twitter"></i>
                    </Link>
                    <Link
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-facebook"></i>
                    </Link>
                    <Link
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-instagram"></i>
                    </Link>
                    <Link
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Our Destinations</h4>
                <ul>
                  <li>
                    <Link href="/destination">All Destinatios</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Our Attraction</h4>
                <ul>
                  <li>
                    <Link href="/attraction">All Attractions </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-legal text-center position-relative">
              <div className="container">
                <div className="copyright">
                  &copy; Copyright{" "}
                  <strong>
                    <span>My Travel App</span>
                  </strong>
                  . All Rights Reserved
                </div>
                <div className="credits">
                  Designed by{" "}
                  <Link href="https://www.horizontal.com/">Horizontal</Link>{" "}
                  Distributed by <Link href="/">Reactivists</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default FooterSection;
