import React from 'react';
import Head from 'next/head';

/**
 * Add an AMP custom element via a script tag in the head to import an AMP component.
 * Uses 'key' to avoid importing the same script twice.
 */
export const IncludeCustomElement = props => (
  <Head>
    <script
      async
      custom-element={props.name}
      src={props.src}
      key={props.name}
    />
  </Head>
);

export const IncludeAmpAccess = () => (
  <IncludeCustomElement
    name="amp-access"
    src="https://cdn.ampproject.org/v0/amp-access-0.1.js"
  />
);

export const IncludeAmpAnalytics = () => (
  <IncludeCustomElement
    name="amp-analytics"
    src="https://cdn.ampproject.org/v0/amp-access-0.1.js"
  />
);

export const IncludeAmpBind = () => (
  <IncludeCustomElement
    name="amp-bind"
    src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"
  />
);

export const IncludeAmpDatePicker = () => (
  <IncludeCustomElement
    name="amp-date-picker"
    src="https://cdn.ampproject.org/v0/amp-date-picker-0.1.js"
  />
);

export const IncludeAmpForm = () => (
  <IncludeCustomElement
    name="amp-form"
    src="https://cdn.ampproject.org/v0/amp-form-0.1.js"
  />
);

export const IncludeAmpLightbox = () => (
  <IncludeCustomElement
    name="amp-lightbox"
    src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"
  />
);

export const IncludeAmpList = () => (
  <IncludeCustomElement
    name="amp-list"
    src="https://cdn.ampproject.org/v0/amp-list-0.1.js"
  />
);

export const IncludeAmpLiveList = () => (
  <IncludeCustomElement
    name="amp-live-list"
    src="https://cdn.ampproject.org/v0/amp-live-list-0.1.js"
  />
);

export const IncludeAmpSelector = () => (
  <IncludeCustomElement
    name="amp-selector"
    src="https://cdn.ampproject.org/v0/amp-selector-0.1.js"
  />
);

export const IncludeAmpSidebar = () => (
  <IncludeCustomElement
    name="amp-sidebar"
    src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"
  />
);

/**
 * Add an AMP custom template via a script tag in the head to import an AMP component.
 * Uses 'key' to avoid importing the same script twice.
 */
export const IncludeCustomTemplate = props => (
  <Head>
    <script
      async
      custom-template={props.name}
      src={props.src}
      key={props.name}
    />
  </Head>
);

export const IncludeAmpMustache = () => (
  <IncludeCustomTemplate
    name="amp-mustache"
    src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js"
  />
);

/**
 * Add a script tag to the head to import an AMP component.
 * Uses 'key' to avoid importing the same script twice.
 */
export const IncludeScript = () => (
  <div>
    <Head>
      <script async src={this.props.src} key={this.props.src} />
    </Head>
  </div>
);
