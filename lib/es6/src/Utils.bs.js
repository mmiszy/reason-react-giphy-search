// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";

var emptyTimeoutId = (0);

function debounce2(fn, time) {
  var tout = [emptyTimeoutId];
  return (function (arg1, arg2) {
      clearTimeout(tout[0]);
      tout[0] = setTimeout((function () {
              return Curry._2(fn, arg1, arg2);
            }), time);
      return /* () */0;
    });
}

export {
  emptyTimeoutId ,
  debounce2 ,
  
}
/* emptyTimeoutId Not a pure module */
