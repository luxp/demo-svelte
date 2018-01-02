import 'normalize.css'
import App from './App.html';
import './app.scss'

const app = new App({
	target: document.body,
	data: {
		name: 'world'
	}
});

window.app = app;

export default app;
