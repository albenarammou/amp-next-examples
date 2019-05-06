import {IncludeAmpList, IncludeAmpMustache} from '../amp/AmpInclude';

export default props => (
  <header className="header">
    <div
      role="button"
      aria-label="open sidebar"
      on={'tap:' + props.sidebarId + '.toggle'}
      tabIndex="0"
      className="burger">
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
    {props.middle}
    <div className="navbar-right-container">
      {props.right}
    </div>

    <style jsx global>{`
      .header {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        position: fixed;
        background-color: #fff;
        color: #000;
        height: 3.5rem;
        z-index: 999;
        padding: 0 1rem;
        top: 0;
        left: 0;
        right: 0;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        border-bottom: 1px solid #f3f3f3;
      }

      .header + :not(amp-sidebar),
      .header + amp-sidebar + * {
        margin-top: 3.5rem;
      }

      .header a {
        padding-bottom: 0;
        margin: 0 auto;
      }

      .header amp-img {
        margin: 0 auto;
      }

      .burger {
        position: absolute;
        top: 0;
        padding-right: 1rem;
        margin-right: 1rem;
        margin-top: 1rem;
      }

      .navbar-right-container {
        position: absolute;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        top: 0;
        right: 0;
        padding: 0.8rem 1.5rem 0 0;
      }

      .menu-open-button {
        position: absolute;
        top: 0;
        margin: 1rem 1rem 0 0;
        line-height: 3.5rem;
        font-size: 2.2rem;
        color: #222;
        font-size: 1.38rem;
        padding-right: 0;
      }

      .menu-open-button:focus {
        outline: none;
      }

      .menu-open-button svg {
        pointer-events: none;
      }

      .menu a,
      .menu-open-button,
      amp-sidebar-faq a {
        cursor: pointer;
        text-decoration: none;
      }

      @media (min-width: 52.06rem) {
        .header {
          height: 5rem;
          border-bottom-color: #f3f3f3;
        }

        .burger {
          margin-left: 0.5rem;
          top: 0.5rem;
        }

        .navbar-right-container {
          top: 0.5rem;
        }

        .menu-open-button {
          margin-left: 0.5rem;
          top: 0.5rem;
        }

        .header + :not(amp-sidebar),
        .header + amp-sidebar + *,
        main {
          margin-top: 5rem;
        }
      }
    `}</style>
  </header>
);
