import React from 'react';
import isElectron from 'is-electron';
import { Provider } from 'react-redux';
import { createHashHistory, createBrowserHistory } from 'history';
import store from './store';
import AppRouter from './router' 

let history;
if (isElectron()) {
    history = createHashHistory();
} else {
    history = createBrowserHistory();
}

const crawlUpDomForAnchorTag = (node, e) => {
    if (!node) {
        return;
    } else if (node.nodeName === 'A') {
        const href = node.getAttribute('href');
        if (href && !href.includes('#/') && isElectron()) {
            e.preventDefault();
            window.ipcRenderer.send('open-external-window', href);
        } else {
            return;
        }
    } else {
        // need to pass the click event down through the recursive calls so we can preventDefault if needed
        return crawlUpDomForAnchorTag(node.parentNode, e);
    }
};

if (isElectron()) {
    document.body.addEventListener('click', (e) => {
        crawlUpDomForAnchorTag(e.target, e);
    });
}

const App = () => (
    <Provider store={store}>
        <AppRouter history={history} />
    </Provider>
);

export default App;