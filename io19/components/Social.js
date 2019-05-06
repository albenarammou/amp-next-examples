export default () => (
  <ul className="social">
    <li>
      <a
        className="icon facebook"
        href="#"
        target="_blank"
        aria-label="Link to AMP HTML Facebook">
        Facebook
      </a>
    </li>
    <li>
      <a
        className="icon instagram"
        href="#"
        target="_blank"
        aria-label="Link to AMP HTML Instagram">
        Instagram
      </a>
    </li>
    <li>
      <a
        className="icon twitter"
        href="#"
        target="_blank"
        aria-label="Link to AMP HTML Twitter">
        Twitter
      </a>
    </li>

    <style jsx global>{`
      .social {
        margin: 0.5rem 0 1rem;
      }

      footer .social {
        margin: 0;
      }

      .social li {
        display: inline-block;
      }

      .social li a {
        display: inline-block;
        overflow: hidden;
        padding: 0.5rem;
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
      }

      .social li a.icon {
        text-indent: 100px;
      }

      .social li a.icon.twitter {
        width: 24px;
        height: 22.2px;
      }

      .social li a.icon.facebook {
        width: 24px;
        height: 23.6px;
      }

      .social li a.icon.instagram {
        width: 24px;
        height: 24px;
      }

      .social amp-social-share,
      .social .icon {
        background: #222;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
      }

      footer .social amp-social-share,
      footer .social .icon {
        background: #fff;
      }

      .social amp-social-share[type='twitter'],
      .social amp-social-share.twitter,
      .social .icon[type='twitter'],
      .social .icon.twitter {
        -webkit-mask-image: url('static/img/social-icons.svg#twitter-svg-view');
        mask-image: url('static/img/social-icons.svg#twitter-svg-view');
      }

      .social amp-social-share[type='facebook'],
      .social amp-social-share.facebook,
      .social .icon[type='facebook'],
      .social .icon.facebook {
        -webkit-mask-image: url('static/img/social-icons.svg#facebook-svg-view');
        mask-image: url('static/img/social-icons.svg#facebook-svg-view');
      }

      .social amp-social-share.instagram,
      .social .icon.instagram {
        -webkit-mask-image: url('static/img/social-icons.svg#instagram-svg-view');
        mask-image: url('static/img/social-icons.svg#instagram-svg-view');
      }
    `}</style>
  </ul>
);
