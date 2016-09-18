/*
* @Author: Manraj Singh
* @Date:   2016-09-18 10:22:31
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-09-18 10:24:05
*/

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

        return {
        };
    };
});