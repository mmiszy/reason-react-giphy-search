// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE

import * as Belt_List from "bs-platform/lib/es6/belt_List.js";
import * as Json_decode from "bs-json/lib/es6/src/Json_decode.js";

function decodeGifs(json) {
  var data = Json_decode.field("data", (function (data) {
          return Json_decode.array((function (gif) {
                        return Json_decode.at(/* :: */[
                                      "images",
                                      /* :: */[
                                        "fixed_height_small",
                                        /* [] */0
                                      ]
                                    ], (function (f) {
                                        return /* record */[
                                                /* url */Json_decode.field("url", Json_decode.string, f),
                                                /* mp4 */Json_decode.field("mp4", Json_decode.string, f),
                                                /* height */Json_decode.field("height", Json_decode.string, f),
                                                /* width */Json_decode.field("width", Json_decode.string, f)
                                              ];
                                      }))(gif);
                      }), data);
        }), json);
  return /* Some */[Belt_List.fromArray(data)];
}

function searchGifs(text) {
  return fetch("https://api.giphy.com/v1/gifs/search?api_key=JL2ng3jv0WFkG1wVXDm71rtuzlx4sHi6&limit=25&offset=0&rating=G&lang=en&q=" + text).then((function (prim) {
                  return prim.json();
                })).then((function (json) {
                return Promise.resolve(decodeGifs(json));
              }));
}

export {
  decodeGifs ,
  searchGifs ,
  
}
/* No side effect */