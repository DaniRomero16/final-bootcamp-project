import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'react-sweet-progress/lib/style.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import { Router } from '@Routes';

const HotReload = hot(module)(Router);
const rootTag = document.getElementById('root');
if (rootTag) {
  render(<HotReload />, rootTag);
} else {
  throw new Error('The root tag with the id "root", dont appear in the document.');
}
