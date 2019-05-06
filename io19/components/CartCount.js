import {IncludeAmpList, IncludeAmpMustache} from './amp/AmpInclude';

export default () => (
  <amp-list
    id="cart-count"
    src="/api/cart-count"
    height="17"
    width="17"
    layout="fixed">
    <template type="amp-mustache">
      {`{{#count}}`}
      <span className="cart-count-display">{`{{.}}`}</span>
      {`{{/count}}`}
    </template>

    <IncludeAmpList />
    <IncludeAmpMustache />

    <style jsx global>{`
      #cart-count {
        position: absolute;
        top: 10px;
        right: 18px;
        text-align: center;
      }

      .cart-count-display {
        display: block;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        background-color: #f88;
        color: #fff;
        font: 700 0.7rem Open Sans Condensed, sans-serif;
        -webkit-animation: c 0.5s forwards;
        animation: c 0.5s forwards;
      }
    `}</style>
  </amp-list>
);
