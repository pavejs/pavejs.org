/* global anchors: false */

(function () {
    'use strict'
  
    // WIP anchors, want to use AnchorJS instead of hugo anchors for customizability
    // anchors.options = {
    //     icon: '#'
    // }

    // anchors.add('.content > h2, .content > h3, .content > h4, .content > h5')

    const focusSearch = () => {
        const el = document.getElementById('docs-search');
        el.focus();
        window.scrollTo(0,0);
    }

    // Define keybinds and their fns
    const BINDS = [
        { keys: ['Control', '/'], fn: focusSearch }
    ];

    window.onload = () => {
        const pressedKeys = new Set();
        const watchedKeys = BINDS.map(({ keys }) => keys).flat();

        const check = () => BINDS.map(({ keys, fn }) => {
            if(keys.length !== pressedKeys.size) return;
            if(!keys.every(key => pressedKeys.has(key))) return;
            return fn();
        });

        document.addEventListener('keydown', e => {
            if (watchedKeys.indexOf(e.key) !== -1) pressedKeys.add(e.key) && check();
        });
        document.addEventListener('keyup', e => {
            if (watchedKeys.indexOf(e.key) !== -1) pressedKeys.delete(e.key) && check();
        });
    }
})()