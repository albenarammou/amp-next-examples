export default () => (
  <>
    <style jsx global>{`
      * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }

      html {
        font-family: sans-serif;
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        text-size-adjust: 100%;
      }

      article,
      aside,
      footer,
      header,
      nav,
      section {
        display: block;
      }

      main {
        max-width: 1280px;
        margin: 3.5rem auto 0;
        display: block;
      }

      body {
        background: #fff;
        margin: 0;
        color: #222;
        font-family: Cardo, serif;
        min-width: 315px;
        overflow-x: hidden;
        font-smooth: always;
        -webkit-font-smoothing: antialiased;
        font-size: 0.94rem;
        line-height: normal;
      }

      p {
        padding: 0;
        margin: 0;
      }

      pre {
        font-family: monospace, monospace;
        font-size: 1em;
      }

      a {
        text-decoration: none;
        background-color: none;
        background-color: transparent;
        -webkit-text-decoration-skip: objects;
      }

      a:active,
      a:hover {
        outline-width: 0;
      }

      a,
      a:active,
      a:visited {
        color: inherit;
      }

      b,
      strong {
        font-weight: inherit;
        font-weight: bolder;
      }

      small {
        font-size: 80%;
      }

      img {
        border-style: none;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: sans-serif;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      button,
      input {
        overflow: visible;
      }

      button,
      select {
        text-transform: none;
      }

      textarea {
        overflow: auto;
      }

      h1 {
        font-size: 3.5rem;
        line-height: 3.5rem;
      }

      h2 {
        font-size: 2.2rem;
        line-height: 2.5rem;
      }

      h3 {
        font-size: 1.75rem;
        line-height: 2rem;
      }

      h4 {
        font-size: 1.38rem;
        line-height: 1.5rem;
      }

      h5 {
        font-size: 1.125rem;
        line-height: 1.125rem;
      }

      h6 {
        font-size: 1rem;
        line-height: 1rem;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 0;
        padding: 0;
        font-weight: 400;
        letter-spacing: 0.06rem;
      }

      ul {
        list-style: none;
        margin: 0;
        padding-left: 0;
      }

      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: none;
        -webkit-border-radius: 0;
        border-radius: 0;
        background: none;
        color: #666;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      .sans-big {
        line-height: normal;
        letter-spacing: normal;
        font-family: Open Sans Condensed, sans-serif;
        text-transform: uppercase;
        font-weight: 700;
        color: #000;
      }

      hr {
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
        overflow: visible;
        width: calc(100% + 2 * 1.5rem);
        height: 1px;
        background-color: #f3f3f3;
        border: none;
        margin: 0 -1.5rem;
      }

      dd:after {
        content: '';
        display: block;
      }

      [type='reset'],
      [type='submit'],
      button,
      html [type='button'] {
        -webkit-appearance: button;
      }

      [type='button']::-moz-focus-inner,
      [type='reset']::-moz-focus-inner,
      [type='submit']::-moz-focus-inner,
      button::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      [type='button']:-moz-focusring,
      [type='reset']:-moz-focusring,
      [type='submit']:-moz-focusring,
      button:-moz-focusring {
        outline: 1px dotted ButtonText;
      }

      [type='checkbox'],
      [type='radio'] {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0;
      }

      [type='number']::-webkit-inner-spin-button,
      [type='number']::-webkit-outer-spin-button {
        height: auto;
      }

      [type='search'] {
        -webkit-appearance: textfield;
        outline-offset: -2px [type=search];
      }

      [type='search'] ::-webkit-search-cancel-button,
      [type='search'] [type='search']::-webkit-search-decoration {
        -webkit-appearance: none;
      }

      .button {
        display: inline-block;
        background-color: #222;
        color: #fff;
        border: 1px solid #fff;
        font-size: 0.8rem;
        font-family: Open Sans Condensed, sans-serif;
        font-weight: 700;
        padding: 0.5rem 2rem;
        line-height: 1.125rem;
        text-transform: uppercase;
        -webkit-transition: background-color 0.2s ease-in, color 0.2s ease-in;
        -o-transition: background-color 0.2s ease-in, color 0.2s ease-in;
        transition: background-color 0.2s ease-in, color 0.2s ease-in;
        white-space: nowrap;
        vertical-align: middle;
        cursor: pointer;
      }

      .button:visited {
        color: #fff;
      }

      .button:active,
      .button:focus {
        opacity: 0.8;
      }

      .button[disabled],
      .button[disabled]:active,
      .button[disabled]:focus,
      .button[disabled]:hover {
        opacity: 0.5;
        outline: 0;
        cursor: default;
      }

      .button.no-transition {
        -webkit-transition: none;
        -o-transition: none;
        transition: none;
      }

      .amp-mode-mouse .button:hover,
      .button-white {
        background-color: #fff;
        color: #222;
      }

      .amp-mode-mouse .button-white:hover {
        background-color: #222;
        color: #fff;
      }

      .button-white {
        border-color: #222;
      }

      .button-white:visited {
        color: #222;
      }

      .close-button {
        display: inline-block;
        color: #f88;
      }

      .input-container {
        width: 100%;
        min-width: 100px;
        font-size: 1rem;
        line-height: 1.5rem;
      }

      .input-container input::-webkit-input-placeholder,
      .input-container input[type='email'],
      .input-container input[type='text'],
      .input-container input::-webkit-input-placeholder,
      .input-container label,
      .input-container textarea {
        font-size: 0.94rem;
        font-family: Open Sans Condensed, sans-serif;
        color: #222;
        font-weight: 700;
        text-transform: uppercase;
      }

      .input-container input::-webkit-input-placeholder,
      .input-container input[type='email'],
      .input-container input[type='text'],
      .input-container input::placeholder,
      .input-container label,
      .input-container textarea {
        font-size: 0.94rem;
        font-family: Open Sans Condensed, sans-serif;
        color: #222;
        font-weight: 700;
        text-transform: uppercase;
      }

      .input-container input[type='email'],
      .input-container input[type='text'] {
        margin-top: 1.5rem;
      }

      .input-container [disabled],
      .input-container [disabled] + label {
        opacity: 0.5;
      }

      .input-container [disabled]:focus {
        outline: 0;
      }

      .input-container > label:after {
        height: 1px;
        background: #f3f3f3;
      }

      .input-container > input,
      .input-container > select,
      .input-container > textarea {
        width: 100%;
        margin-top: 1rem;
        line-height: 1.5rem;
        border: 0;
        -webkit-border-radius: 0;
        border-radius: 0;
        background: none;
        outline: 0;
      }

      .input-container > input,
      .input-container > textarea {
        border-bottom: 1px dashed #f3f3f3;
        color: #222;
      }

      .input-container > select {
        border-bottom: 1px solid #4a4a4a;
        color: #4a4a4a;
      }

      .input-container > label {
        color: #222;
        pointer-events: none;
        text-align: left;
        font-size: 0.94rem;
        line-height: 1rem;
        opacity: 0;
        -webkit-animation: 0.2s;
        animation: 0.2s;
        -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
      }

      .input-container > input:focus,
      .input-container > select:focus,
      .input-container > textarea:focus {
        outline: 0;
      }

      .input-container > input:focus::-webkit-input-placeholder,
      .input-container > select:focus::-webkit-input-placeholder,
      .input-container > textarea:focus::-webkit-input-placeholder {
        color: transparent;
      }

      .input-container > input:focus:-ms-input-placeholder,
      .input-container > select:focus:-ms-input-placeholder,
      .input-container > textarea:focus:-ms-input-placeholder {
        color: transparent;
      }

      .input-container > input:focus::-ms-input-placeholder,
      .input-container > select:focus::-ms-input-placeholder,
      .input-container > textarea:focus::-ms-input-placeholder {
        color: transparent;
      }

      .input-container > input:focus::placeholder,
      .input-container > select:focus::placeholder,
      .input-container > textarea:focus::placeholder {
        color: transparent;
      }

      .input-container > input:not(:placeholder-shown):not([disabled]) + label,
      .input-container > select:not(:placeholder-shown):not([disabled]) + label,
      .input-container
        > textarea:not(:placeholder-shown):not([disabled])
        + label {
        opacity: 1;
      }

      .input-container > input:focus + label,
      .input-container > select:focus + label,
      .input-container > textarea:focus + label {
        -webkit-animation-name: c;
        animation-name: c;
      }

      .input-container > label:after {
        content: '';
        height: 2px;
        position: absolute;
        bottom: 0;
        left: 45%;
        background: #222;
        -webkit-transition: 0.2s;
        -o-transition: 0.2s;
        transition: 0.2s;
        -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        -o-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        visibility: hidden;
        width: 10px;
      }

      .input-container > input:focus + label:after,
      .input-container > select:focus + label:after,
      .input-container > textarea:focus + label:after {
        left: 0;
        width: 100%;
        visibility: visible;
      }

      .input-container > input[type='search'] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }

      .input-container > input[type='range'] {
        border-bottom: 0;
      }

      .input-container > input[type='range'] + label:after {
        display: none;
      }

      .input-container > select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }

      .input-container > select + label:before {
        content: '⌄';
        line-height: 1.5rem;
        position: absolute;
        right: 5px;
        zoom: 2;
        top: 0;
        bottom: 0;
        color: #222;
      }

      .input-container input[type='radio'] {
        -webkit-border-radius: 15px;
        border-radius: 15px;
      }

      .input-container input[type='radio']:checked {
        background-color: #fff;
      }

      .input-container input[type='radio']:after {
        top: 3px;
        bottom: 3px;
        left: 3px;
        right: 3px;
        -webkit-border-radius: 12px;
        border-radius: 12px;
      }

      .input-container input[type='radio']:checked:after {
        content: '';
        font-size: 3.5rem;
        background-color: #222;
      }

      .input-container input[type='checkbox'],
      .input-container input[type='radio'] {
        margin-top: 0;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 15px;
        height: 15px;
        border: 1px solid #222;
        vertical-align: middle;
        margin-right: 0.5rem;
        text-align: center;
      }

      .input-container input[type='checkbox']:not([disabled]) + label,
      .input-container input[type='radio']:not([disabled]) + label {
        pointer-events: auto;
        -webkit-animation: none;
        animation: none;
        vertical-align: middle;
        opacity: 1;
        cursor: pointer;
      }

      .input-container input[type='checkbox'] + label:after,
      .input-container input[type='radio'] + label:after {
        display: none;
      }

      .input-container input[type='checkbox']:after,
      .input-container input[type='radio']:after {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        content: ' ';
        line-height: 1.4rem;
        vertical-align: middle;
        text-align: center;
        background-color: #fff;
      }

      .input-container input[type='checkbox']:checked:after {
        background-color: #222;
        color: #fff;
        content: '✓';
      }

      .input-container > label,
      .input-container _:-ms-lang(x) {
        opacity: 1;
      }

      .input-container > input:-ms-input-placeholder,
      .input-container _:-ms-lang(x) {
        color: transparent;
      }

      .input-container > input::-ms-input-placeholder,
      .input-container _:-ms-lang(x) {
        color: transparent;
      }

      .input-container > input::placeholder,
      .input-container _:-ms-lang(x) {
        color: transparent;
      }

      .input-container > input::-ms-input-placeholder,
      .input-container _:-ms-lang(x) {
        color: transparent;
      }

      .input-container > select::-ms-expand {
        display: none;
      }

      .radio-container {
        display: block;
        margin-bottom: 0.5rem;
      }

      .radio-container label {
        font-family: Cardo, serif;
        font-weight: 400;
        text-transform: none;
        color: #222;
        font-size: 0.94rem;
      }

      .radio-container input {
        position: relative;
      }

      .amp-mode-mouse .radio-container label:hover {
        text-decoration: underline;
      }

      .input-container-chk,
      .radio-container {
        color: #4a4a4a;
      }

      .select-container {
        position: relative;
        padding-right: 13px;
      }

      .active {
        color: #000;
      }

      .bold {
        font-weight: 700;
      }

      .regular {
        font-weight: 400;
      }

      .italic {
        font-style: italic;
      }

      .caps {
        text-transform: uppercase;
        letter-spacing: 0;
      }

      .left-align {
        text-align: left;
      }

      .center {
        text-align: center;
      }

      .right-align {
        text-align: right;
      }

      .underline {
        text-decoration: underline;
      }

      .inline {
        display: inline;
      }

      .block {
        display: block;
      }

      .inline-block {
        display: inline-block;
      }

      .clearfix:after,
      .clearfix:before {
        content: ' ';
        display: table;
      }

      .clearfix:after {
        clear: both;
      }

      .left {
        float: left;
      }

      .right {
        float: right;
      }

      .fit {
        max-width: 100%;
      }

      .flex {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
      }

      .flex-column {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
      }

      .flex-wrap {
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
      }

      .self-start {
        -webkit-align-self: flex-start;
        -ms-flex-item-align: start;
        align-self: flex-start;
      }

      .rounded {
        -webkit-border-radius: 3px;
        border-radius: 3px;
      }

      .display-none {
        display: none;
      }

      amp-selector {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: none;
        -webkit-border-radius: 0;
        border-radius: 0;
        background: none;
        color: #666;
      }

      amp-selector [option] {
        outline: 1px solid #f3f3f3;
      }

      amp-selector [option]:hover {
        outline: 1px solid #222;
      }

      amp-selector [option][selected] {
        outline-color: #222;
      }

      .amp-carousel-button-next,
      .amp-carousel-button-prev {
        display: none;
      }

      .icon-star,
      .icon-star-empty {
        height: 14px;
        width: 14px;
        color: #f9ab00;
      }

      .icon-star-empty {
        color: #dadada;
      }

      .sidebar {
        width: 25%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
      }

      .cart-added .ampstart-headerbar-icon-wrapper:after {
        content: '1';
        display: block;
        width: 17px;
        height: 17px;
        position: absolute;
        top: -10px;
        right: -10px;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        background-color: #f88;
        color: #fff;
        font: 700 0.7rem Open Sans Condensed, sans-serif;
        opacity: 0;
        -webkit-animation: c 0.5s forwards;
        animation: c 0.5s forwards;
      }

      .title,
      .title select,
      .title button {
        line-height: normal;
        letter-spacing: normal;
        font-family: Open Sans Condensed, sans-serif;
        text-transform: uppercase;
        font-weight: 700;
        color: #000;
      }

      .loading {
        color: #666;
        margin: 24% auto;
        -webkit-animation-delay: 0.16s;
        animation-delay: 0.16s;
      }

      .loading,
      .loading:after,
      .loading:before {
        -webkit-border-radius: 50%;
        border-radius: 50%;
        width: 0.5rem;
        height: 0.5rem;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        -webkit-animation: a 1.44s infinite ease-in-out;
        animation: a 1.44s infinite ease-in-out;
        will-change: contents;
      }

      .loading:after,
      .loading:before {
        content: '';
        position: absolute;
        top: 0;
      }

      .loading:before {
        left: -1rem;
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
      }

      .loading:after {
        left: 1rem;
        -webkit-animation-delay: 0.32s;
        animation-delay: 0.32s;
      }

      .label {
        font-size: 1.125rem;
        color: #4f4f4f;
        line-height: 1.125rem;
        letter-spacing: 0.06rem;
        text-transform: uppercase;
      }

      @media (min-width: 40.06rem) and (max-width: 52rem) {
        .sm-hide {
          display: none;
        }
      }

      @media (min-width: 52.06rem) {
        main {
          min-height: calc(100vh - 181px - 5rem);
        }

        hr {
          width: 100%;
          margin: 0;
        }

        .side-panel {
          position: -webkit-sticky;
          position: sticky;
          top: 5rem;
        }
      }

      @media (min-width: 52.06rem) and (max-width: 64rem) {
        .md-hide {
          display: none;
        }
      }

      @media (min-width: 64.06rem) {
        .lg-hide {
          display: none;
        }
      }

      @media (max-width: 40rem) {
        .xs-hide {
          display: none;
        }
      }

      @-webkit-keyframes c {
        to {
          opacity: 1;
        }
      }

      @keyframes c {
        to {
          opacity: 1;
        }
      }
    `}</style>
  </>
);
