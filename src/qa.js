(function(root, factory){
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.qa = factory();
    }
    })(this, function(){

    return function qa(args){
        args = args || {};

        return {};
    };
});
