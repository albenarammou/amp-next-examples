import AllProducts from '../components/AllProducts.js';

export default () => (
  <div className="page">
    <h1>Welcome to AMP!</h1>
    <p><amp-img src="/static/amp-logo.png" layout="fixed" width="50" height="50" /></p>
    <AllProducts />
    <style jsx>{`
      .page {
        padding: 0.5em;
      }
    `}</style>
  </div>
);
