import Head from 'next/head';

export default () => (
  <div className="product-list">

    {/* Note the use of the 'key' attribute to remove duplicate script imports by other components. */}
    <Head>
      <script async custom-element="amp-list" src="https://cdn.ampproject.org/v0/amp-list-0.1.js" key="amp-list" />
      <script async custom-template="amp-mustache" src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js" key="amp-mustache" />
    </Head>

    <amp-list src="/api/products" layout="fixed-height" height="100">
      <template type="amp-mustache">
        <div className="product-item">{`{{name}}`}: {`{{description}}`}</div>
      </template>
    </amp-list>

    <style jsx>{`

      .product-list {
      }

      .product-item {
        display: flex;
        align-items: center;
        height: 2em;
        padding: 5px;
        background: #eee;
        border: 1px solid #ccc;
      }
      
      .product-item + .product-item {
        border-top: 0;
      }
        
    `}</style>
  </div>
);
