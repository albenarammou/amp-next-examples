import {IncludeAmpSidebar} from './amp/AmpInclude';

export default () => (
  <>
    <header className="header">
      <div
        role="button"
        aria-label="open sidebar"
        on="tap:header-sidebar.toggle"
        tabIndex="0"
        className="ampstart-navbar-trigger  pr2 absolute top-0 pr0 mr2 mt2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="block">
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="currentColor"
            d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
          />
        </svg>
      </div>
      <a href="/">
        <amp-img
          src="/static/img/e-commerce/logo.png"
          width="120"
          height="37"
          layout="fixed"
          className="my0 mx-auto "
          alt=""
        />
      </a>
      <div className="cart-icon-container">
        <div />
        <amp-pixel src="https://foo.com/pixel?cid=CLIENT_ID(cart)" />
        <a
          href="/cart-details?clientId=CLIENT_ID(cart)"
          data-amp-replace="CLIENT_ID">
          <div>
            <amp-img
              src="/static/img/e-commerce/campmor_backpack.png"
              width="35"
              height="27"
            />
          </div>
        </a>
      </div>
    </header>
    <amp-sidebar id="header-sidebar" layout="nodisplay">
      <div className="menu-header">
        <div
          role="button"
          aria-label="close sidebar"
          on="tap:header-sidebar.toggle"
          tabIndex="0"
          className="ampstart-navbar-trigger items-start">
          ✕
        </div>
      </div>
      <nav className="menu">
        <ul className="label">
          <li className="logo">
            <a href="/" className="block">
              <amp-img
                src="/static/img/e-commerce/logo-nav.png"
                width="180"
                height="180"
                layout="intrinsic"
                alt="Company logo"
                noloading="">
                <div placeholder="" className="commerce-loader" />
              </amp-img>
            </a>
          </li>
          <li>
            <a href="/product-listing-women.html">Women's</a>
          </li>
          <li>
            <a href="/product-listing-men.html">Men's</a>
          </li>
          {/*
            <li><a href="/blog-listing.html">Blog</a></li>
            */}
          <li>
            <a href="/contact.html">Contact us</a>
          </li>
        </ul>
      </nav>
      <h3>follow us</h3>
      <ul className="social">
        <li>
          <a href="#" target="_blank" aria-label="Link to AMP HTML Facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="23.6"
              viewBox="0 0 56 55">
              <title>Facebook</title>
              <path
                d="M47.5 43c0 1.2-.9 2.1-2.1 2.1h-10V30h5.1l.8-5.9h-5.9v-3.7c0-1.7.5-2.9 3-2.9h3.1v-5.3c-.6 0-2.4-.2-4.6-.2-4.5 0-7.5 2.7-7.5 7.8v4.3h-5.1V30h5.1v15.1H10.7c-1.2 0-2.2-.9-2.2-2.1V8.3c0-1.2 1-2.2 2.2-2.2h34.7c1.2 0 2.1 1 2.1 2.2V43"
                className="ampstart-icon ampstart-icon-fb"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="#" target="_blank" aria-label="Link to AMP HTML Instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 54 54">
              <title>instagram</title>
              <path
                d="M27.2 6.1c-5.1 0-5.8 0-7.8.1s-3.4.4-4.6.9c-1.2.5-2.3 1.1-3.3 2.2-1.1 1-1.7 2.1-2.2 3.3-.5 1.2-.8 2.6-.9 4.6-.1 2-.1 2.7-.1 7.8s0 5.8.1 7.8.4 3.4.9 4.6c.5 1.2 1.1 2.3 2.2 3.3 1 1.1 2.1 1.7 3.3 2.2 1.2.5 2.6.8 4.6.9 2 .1 2.7.1 7.8.1s5.8 0 7.8-.1 3.4-.4 4.6-.9c1.2-.5 2.3-1.1 3.3-2.2 1.1-1 1.7-2.1 2.2-3.3.5-1.2.8-2.6.9-4.6.1-2 .1-2.7.1-7.8s0-5.8-.1-7.8-.4-3.4-.9-4.6c-.5-1.2-1.1-2.3-2.2-3.3-1-1.1-2.1-1.7-3.3-2.2-1.2-.5-2.6-.8-4.6-.9-2-.1-2.7-.1-7.8-.1zm0 3.4c5 0 5.6 0 7.6.1 1.9.1 2.9.4 3.5.7.9.3 1.6.7 2.2 1.4.7.6 1.1 1.3 1.4 2.2.3.6.6 1.6.7 3.5.1 2 .1 2.6.1 7.6s0 5.6-.1 7.6c-.1 1.9-.4 2.9-.7 3.5-.3.9-.7 1.6-1.4 2.2-.7.7-1.3 1.1-2.2 1.4-.6.3-1.7.6-3.5.7-2 .1-2.6.1-7.6.1-5.1 0-5.7 0-7.7-.1-1.8-.1-2.9-.4-3.5-.7-.9-.3-1.5-.7-2.2-1.4-.7-.7-1.1-1.3-1.4-2.2-.3-.6-.6-1.7-.7-3.5 0-2-.1-2.6-.1-7.6 0-5.1.1-5.7.1-7.7.1-1.8.4-2.8.7-3.5.3-.9.7-1.5 1.4-2.2.7-.6 1.3-1.1 2.2-1.4.6-.3 1.6-.6 3.5-.7h7.7zm0 5.8c-5.4 0-9.7 4.3-9.7 9.7 0 5.4 4.3 9.7 9.7 9.7 5.4 0 9.7-4.3 9.7-9.7 0-5.4-4.3-9.7-9.7-9.7zm0 16c-3.5 0-6.3-2.8-6.3-6.3s2.8-6.3 6.3-6.3 6.3 2.8 6.3 6.3-2.8 6.3-6.3 6.3zm12.4-16.4c0 1.3-1.1 2.3-2.3 2.3-1.3 0-2.3-1-2.3-2.3 0-1.2 1-2.3 2.3-2.3 1.2 0 2.3 1.1 2.3 2.3z"
                className="ampstart-icon ampstart-icon-instagram"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="#" target="_blank" aria-label="Link to AMP HTML Twitter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="22.2"
              viewBox="0 0 53 49">
              <title>Twitter</title>
              <path
                d="M45 6.9c-1.6 1-3.3 1.6-5.2 2-1.5-1.6-3.6-2.6-5.9-2.6-4.5 0-8.2 3.7-8.2 8.3 0 .6.1 1.3.2 1.9-6.8-.4-12.8-3.7-16.8-8.7C8.4 9 8 10.5 8 12c0 2.8 1.4 5.4 3.6 6.9-1.3-.1-2.6-.5-3.7-1.1v.1c0 4 2.8 7.4 6.6 8.1-.7.2-1.5.3-2.2.3-.5 0-1 0-1.5-.1 1 3.3 4 5.7 7.6 5.7-2.8 2.2-6.3 3.6-10.2 3.6-.6 0-1.3-.1-1.9-.1 3.6 2.3 7.9 3.7 12.5 3.7 15.1 0 23.3-12.6 23.3-23.6 0-.3 0-.7-.1-1 1.6-1.2 3-2.7 4.1-4.3-1.4.6-3 1.1-4.7 1.3 1.7-1 3-2.7 3.6-4.6"
                className="ampstart-icon ampstart-icon-twitter"
              />
            </svg>
          </a>
        </li>
      </ul>
      <ul className="faq">
        <li>
          <a href="#" className="text-decoration-none">
            Size Guide
          </a>
        </li>
        <li>
          <a href="#" className="text-decoration-none">
            Returns Policy
          </a>
        </li>
        <li>
          <a href="#" className="text-decoration-none">
            Cookie &amp; privacy policy
          </a>
        </li>
      </ul>
      <IncludeAmpSidebar />
    </amp-sidebar>
  </>
);
