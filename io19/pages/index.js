/*
Copyright 2017 The AMP Start Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS-IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import {withAmp} from 'next/amp';
import GlobalCss from '../components/GlobalCss';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Landing from '../components/Landing';
import Footer from '../components/Footer';

export default withAmp(() => (
  <>
    <GlobalCss />
    <Header pageType="index" />
    <Menu />
    <Landing />
    <Footer />
  </>
));
