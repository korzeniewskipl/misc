var AsyncResult = function() {
    this.ready = false;
    this.value = null;
}

AsyncResult.prototype.setReady = function() {
    this.ready = true;
}

AsyncResult.prototype.setValue = function(value) {
    this.value = value;
}

function add(a, b) {
    var result = new AsyncResult();
    setTimeout(function() {
        result.setValue(a + b);
        result.setReady();
    }, 1000);
    return result;
}

