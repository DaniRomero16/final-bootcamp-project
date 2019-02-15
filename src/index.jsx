import React from 'react';
import 'babel-polyfill';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';

import 'react-sweet-progress/lib/style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Router } from '@Routes';

const HotReload = hot(module)(Router);
const rootTag = document.getElementById('root');
if (rootTag) {
  render(<HotReload />, rootTag);
} else {
  throw new Error('The root tag with the id "root", dont appear in the document.');
}
