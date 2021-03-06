"use strict";
const moment = require("moment/moment");
const IsoDurationParser = (function () {
  function IsoDurationParser () {
  }

  IsoDurationParser.getDuration = function (val) {
    const dur = moment.duration(val);
    return dur.asMilliseconds();
  };
  IsoDurationParser.getMoment = function () {
    return moment;
  };
  return IsoDurationParser;
}());
exports.IsoDurationParser = IsoDurationParser;
