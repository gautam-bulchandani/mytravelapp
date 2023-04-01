import Link from "next/link";

const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        {/* <a href="/" className="logo d-flex align-items-center"> */}
          <Link className="logo d-flex align-items-center" href='/' >
          {/* <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> --> */}
          <h1>
            My Travel App<span>.</span>
          </h1>
        {/* </a> */}
        </Link>

        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link href="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link href="/destination" className="active">
                Destinations
              </Link>
            </li>
            <li>
              <Link href="/attraction" className="active">
                Attractions
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
