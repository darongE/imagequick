var _history = [];

function setHistory(history) {
    if (history instanceof Array)
        _history = history;
    else
        _history = [];
}

function getHistory(history) {
    return _history;
}

function last() {
    return _history[_history.length-1] || 0;
}

function set(item) {
    _history[_history.length ? _history.length-1 : 0] = item;
}

function push(item) {
    _history.push(item);
}

function pop() {
    return _history.pop();
}
