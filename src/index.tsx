import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { App } from './components/App';
import StoreProvider from './state/StoreProvider';

render(
	<StoreProvider>
		<App />
	</StoreProvider>,
	document.getElementById('root')
);
