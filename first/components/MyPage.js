export default () => (
  <div>
    <h1 className="center">Welcome to AMP!</h1>
    <p className="center"><amp-img src="/static/amp-logo.png" layout="fixed" width="50" height="50" /></p>

    <style jsx>{`
      .center {
        display: flex;
        justify-content: center;
      }
    `}</style>
  </div>
);
