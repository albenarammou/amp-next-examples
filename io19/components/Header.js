import TopNavBar from './theme/TopNavBar.js';
import HeaderLogo from './HeaderLogo.js';
import CartCount from './CartCount.js';

export default props => (
  <TopNavBar
    sidebarId="header-sidebar"
    middle={<HeaderLogo />}
    right={
      <a href="/shopping-cart">
        <div>
          <amp-img src="static/img/campmor_backpack.png" width="35" height="27" />
          {props.pageType == 'index' && <CartCount />}
        </div>
      </a>
    }
  />
);
