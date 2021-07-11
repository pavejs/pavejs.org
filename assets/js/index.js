const focusSearch = () => {
    const el = document.getElementById('docs-search');
    el.focus();
    scrollTo(0);
}

const BINDS = [
    { keys: ['Ctrl', '/'], fn: focusSearch }
]

window.onload = () => {
    const pressedKeys = new Set();
    const watchedKeyGroups = BINDS.map(({ keys }) => keys);
    const watchedKeys = watchedKeyGroups.flat();

    document.addEventListener('keydown', e => (watchedKeys.indexOf(e.key) !== -1) && pressedKeys.add(e.key));
    document.addEventListener('keyup', e => (watchedKeys.indexOf(e.key) !== -1) && pressedKeys.delete(e.key));

    watchedKeyGroups.map(keyArr => {
        keyArr.forEach(i => {
            // check all keys are pressed here, then get fn
        });
    });
}