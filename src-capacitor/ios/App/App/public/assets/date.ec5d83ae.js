import { bM as Plugin, bN as isDate, bO as defaultLang } from "./index.61ed5618.js";
import { p as pad, c as capitalize } from "./format.7f7370d3.js";
const breaks = [
  -61,
  9,
  38,
  199,
  426,
  686,
  756,
  818,
  1111,
  1181,
  1210,
  1635,
  2060,
  2097,
  2192,
  2262,
  2324,
  2394,
  2456,
  3178
];
function isLeapJalaaliYear(jy) {
  return jalCalLeap(jy) === 0;
}
function jalaaliMonthLength(jy, jm) {
  if (jm <= 6)
    return 31;
  if (jm <= 11)
    return 30;
  if (isLeapJalaaliYear(jy))
    return 30;
  return 29;
}
function jalCalLeap(jy) {
  const bl = breaks.length;
  let jp = breaks[0], jm, jump, leap, n, i;
  if (jy < jp || jy >= breaks[bl - 1]) {
    throw new Error("Invalid Jalaali year " + jy);
  }
  for (i = 1; i < bl; i += 1) {
    jm = breaks[i];
    jump = jm - jp;
    if (jy < jm) {
      break;
    }
    jp = jm;
  }
  n = jy - jp;
  if (jump - n < 6) {
    n = n - jump + div(jump + 4, 33) * 33;
  }
  leap = mod(mod(n + 1, 33) - 1, 4);
  if (leap === -1) {
    leap = 4;
  }
  return leap;
}
function div(a, b) {
  return ~~(a / b);
}
function mod(a, b) {
  return a - ~~(a / b) * b;
}
const MILLISECONDS_IN_DAY = 864e5, MILLISECONDS_IN_HOUR = 36e5, MILLISECONDS_IN_MINUTE = 6e4, defaultMask = "YYYY-MM-DDTHH:mm:ss.SSSZ", token = /\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g, reverseToken = /(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g, regexStore = {};
function getRegexData(mask, dateLocale) {
  const days = "(" + dateLocale.days.join("|") + ")", key = mask + days;
  if (regexStore[key] !== void 0) {
    return regexStore[key];
  }
  const daysShort = "(" + dateLocale.daysShort.join("|") + ")", months = "(" + dateLocale.months.join("|") + ")", monthsShort = "(" + dateLocale.monthsShort.join("|") + ")";
  const map = {};
  let index = 0;
  const regexText = mask.replace(reverseToken, (match) => {
    index++;
    switch (match) {
      case "YY":
        map.YY = index;
        return "(-?\\d{1,2})";
      case "YYYY":
        map.YYYY = index;
        return "(-?\\d{1,4})";
      case "M":
        map.M = index;
        return "(\\d{1,2})";
      case "MM":
        map.M = index;
        return "(\\d{2})";
      case "MMM":
        map.MMM = index;
        return monthsShort;
      case "MMMM":
        map.MMMM = index;
        return months;
      case "D":
        map.D = index;
        return "(\\d{1,2})";
      case "Do":
        map.D = index++;
        return "(\\d{1,2}(st|nd|rd|th))";
      case "DD":
        map.D = index;
        return "(\\d{2})";
      case "H":
        map.H = index;
        return "(\\d{1,2})";
      case "HH":
        map.H = index;
        return "(\\d{2})";
      case "h":
        map.h = index;
        return "(\\d{1,2})";
      case "hh":
        map.h = index;
        return "(\\d{2})";
      case "m":
        map.m = index;
        return "(\\d{1,2})";
      case "mm":
        map.m = index;
        return "(\\d{2})";
      case "s":
        map.s = index;
        return "(\\d{1,2})";
      case "ss":
        map.s = index;
        return "(\\d{2})";
      case "S":
        map.S = index;
        return "(\\d{1})";
      case "SS":
        map.S = index;
        return "(\\d{2})";
      case "SSS":
        map.S = index;
        return "(\\d{3})";
      case "A":
        map.A = index;
        return "(AM|PM)";
      case "a":
        map.a = index;
        return "(am|pm)";
      case "aa":
        map.aa = index;
        return "(a\\.m\\.|p\\.m\\.)";
      case "ddd":
        return daysShort;
      case "dddd":
        return days;
      case "Q":
      case "d":
      case "E":
        return "(\\d{1})";
      case "Qo":
        return "(1st|2nd|3rd|4th)";
      case "DDD":
      case "DDDD":
        return "(\\d{1,3})";
      case "w":
        return "(\\d{1,2})";
      case "ww":
        return "(\\d{2})";
      case "Z":
        map.Z = index;
        return "(Z|[+-]\\d{2}:\\d{2})";
      case "ZZ":
        map.ZZ = index;
        return "(Z|[+-]\\d{2}\\d{2})";
      case "X":
        map.X = index;
        return "(-?\\d+)";
      case "x":
        map.x = index;
        return "(-?\\d{4,})";
      default:
        index--;
        if (match[0] === "[") {
          match = match.substring(1, match.length - 1);
        }
        return match.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
  });
  const res = { map, regex: new RegExp("^" + regexText) };
  regexStore[key] = res;
  return res;
}
function getDateLocale(paramDateLocale, langProps) {
  return paramDateLocale !== void 0 ? paramDateLocale : langProps !== void 0 ? langProps.date : defaultLang.date;
}
function formatTimezone(offset, delimeter = "") {
  const sign = offset > 0 ? "-" : "+", absOffset = Math.abs(offset), hours = Math.floor(absOffset / 60), minutes = absOffset % 60;
  return sign + pad(hours) + delimeter + pad(minutes);
}
function applyYearMonthDayChange(date2, mod2, sign) {
  let year = date2.getFullYear(), month = date2.getMonth();
  const day = date2.getDate();
  if (mod2.year !== void 0) {
    year += sign * mod2.year;
    delete mod2.year;
  }
  if (mod2.month !== void 0) {
    month += sign * mod2.month;
    delete mod2.month;
  }
  date2.setDate(1);
  date2.setMonth(2);
  date2.setFullYear(year);
  date2.setMonth(month);
  date2.setDate(Math.min(day, daysInMonth(date2)));
  if (mod2.date !== void 0) {
    date2.setDate(date2.getDate() + sign * mod2.date);
    delete mod2.date;
  }
  return date2;
}
function applyYearMonthDay(date2, mod2, middle) {
  const year = mod2.year !== void 0 ? mod2.year : date2[`get${middle}FullYear`](), month = mod2.month !== void 0 ? mod2.month - 1 : date2[`get${middle}Month`](), maxDay = new Date(year, month + 1, 0).getDate(), day = Math.min(maxDay, mod2.date !== void 0 ? mod2.date : date2[`get${middle}Date`]());
  date2[`set${middle}Date`](1);
  date2[`set${middle}Month`](2);
  date2[`set${middle}FullYear`](year);
  date2[`set${middle}Month`](month);
  date2[`set${middle}Date`](day);
  delete mod2.year;
  delete mod2.month;
  delete mod2.date;
  return date2;
}
function getChange(date2, rawMod, sign) {
  const mod2 = normalizeMod(rawMod), d = new Date(date2), t = mod2.year !== void 0 || mod2.month !== void 0 || mod2.date !== void 0 ? applyYearMonthDayChange(d, mod2, sign) : d;
  for (const key in mod2) {
    const op = capitalize(key);
    t[`set${op}`](t[`get${op}`]() + sign * mod2[key]);
  }
  return t;
}
function normalizeMod(mod2) {
  const acc = { ...mod2 };
  if (mod2.years !== void 0) {
    acc.year = mod2.years;
    delete acc.years;
  }
  if (mod2.months !== void 0) {
    acc.month = mod2.months;
    delete acc.months;
  }
  if (mod2.days !== void 0) {
    acc.date = mod2.days;
    delete acc.days;
  }
  if (mod2.day !== void 0) {
    acc.date = mod2.day;
    delete acc.day;
  }
  if (mod2.hour !== void 0) {
    acc.hours = mod2.hour;
    delete acc.hour;
  }
  if (mod2.minute !== void 0) {
    acc.minutes = mod2.minute;
    delete acc.minute;
  }
  if (mod2.second !== void 0) {
    acc.seconds = mod2.second;
    delete acc.second;
  }
  if (mod2.millisecond !== void 0) {
    acc.milliseconds = mod2.millisecond;
    delete acc.millisecond;
  }
  return acc;
}
function adjustDate(date2, rawMod, utc) {
  const mod2 = normalizeMod(rawMod), middle = utc === true ? "UTC" : "", d = new Date(date2), t = mod2.year !== void 0 || mod2.month !== void 0 || mod2.date !== void 0 ? applyYearMonthDay(d, mod2, middle) : d;
  for (const key in mod2) {
    const op = key.charAt(0).toUpperCase() + key.slice(1);
    t[`set${middle}${op}`](mod2[key]);
  }
  return t;
}
function extractDate(str, mask, dateLocale) {
  const d = __splitDate(str, mask, dateLocale);
  const date2 = new Date(
    d.year,
    d.month === null ? null : d.month - 1,
    d.day === null ? 1 : d.day,
    d.hour,
    d.minute,
    d.second,
    d.millisecond
  );
  const tzOffset = date2.getTimezoneOffset();
  return d.timezoneOffset === null || d.timezoneOffset === tzOffset ? date2 : getChange(date2, { minutes: d.timezoneOffset - tzOffset }, 1);
}
function __splitDate(str, mask, dateLocale, calendar, defaultModel) {
  const date2 = {
    year: null,
    month: null,
    day: null,
    hour: null,
    minute: null,
    second: null,
    millisecond: null,
    timezoneOffset: null,
    dateHash: null,
    timeHash: null
  };
  defaultModel !== void 0 && Object.assign(date2, defaultModel);
  if (str === void 0 || str === null || str === "" || typeof str !== "string") {
    return date2;
  }
  if (mask === void 0) {
    mask = defaultMask;
  }
  const langOpts = getDateLocale(dateLocale, Plugin.props), months = langOpts.months, monthsShort = langOpts.monthsShort;
  const { regex, map } = getRegexData(mask, langOpts);
  const match = str.match(regex);
  if (match === null) {
    return date2;
  }
  let tzString = "";
  if (map.X !== void 0 || map.x !== void 0) {
    const stamp = parseInt(match[map.X !== void 0 ? map.X : map.x], 10);
    if (isNaN(stamp) === true || stamp < 0) {
      return date2;
    }
    const d = new Date(stamp * (map.X !== void 0 ? 1e3 : 1));
    date2.year = d.getFullYear();
    date2.month = d.getMonth() + 1;
    date2.day = d.getDate();
    date2.hour = d.getHours();
    date2.minute = d.getMinutes();
    date2.second = d.getSeconds();
    date2.millisecond = d.getMilliseconds();
  } else {
    if (map.YYYY !== void 0) {
      date2.year = parseInt(match[map.YYYY], 10);
    } else if (map.YY !== void 0) {
      const y = parseInt(match[map.YY], 10);
      date2.year = y < 0 ? y : 2e3 + y;
    }
    if (map.M !== void 0) {
      date2.month = parseInt(match[map.M], 10);
      if (date2.month < 1 || date2.month > 12) {
        return date2;
      }
    } else if (map.MMM !== void 0) {
      date2.month = monthsShort.indexOf(match[map.MMM]) + 1;
    } else if (map.MMMM !== void 0) {
      date2.month = months.indexOf(match[map.MMMM]) + 1;
    }
    if (map.D !== void 0) {
      date2.day = parseInt(match[map.D], 10);
      if (date2.year === null || date2.month === null || date2.day < 1) {
        return date2;
      }
      const maxDay = calendar !== "persian" ? new Date(date2.year, date2.month, 0).getDate() : jalaaliMonthLength(date2.year, date2.month);
      if (date2.day > maxDay) {
        return date2;
      }
    }
    if (map.H !== void 0) {
      date2.hour = parseInt(match[map.H], 10) % 24;
    } else if (map.h !== void 0) {
      date2.hour = parseInt(match[map.h], 10) % 12;
      if (map.A && match[map.A] === "PM" || map.a && match[map.a] === "pm" || map.aa && match[map.aa] === "p.m.") {
        date2.hour += 12;
      }
      date2.hour = date2.hour % 24;
    }
    if (map.m !== void 0) {
      date2.minute = parseInt(match[map.m], 10) % 60;
    }
    if (map.s !== void 0) {
      date2.second = parseInt(match[map.s], 10) % 60;
    }
    if (map.S !== void 0) {
      date2.millisecond = parseInt(match[map.S], 10) * 10 ** (3 - match[map.S].length);
    }
    if (map.Z !== void 0 || map.ZZ !== void 0) {
      tzString = map.Z !== void 0 ? match[map.Z].replace(":", "") : match[map.ZZ];
      date2.timezoneOffset = (tzString[0] === "+" ? -1 : 1) * (60 * tzString.slice(1, 3) + 1 * tzString.slice(3, 5));
    }
  }
  date2.dateHash = pad(date2.year, 6) + "/" + pad(date2.month) + "/" + pad(date2.day);
  date2.timeHash = pad(date2.hour) + ":" + pad(date2.minute) + ":" + pad(date2.second) + tzString;
  return date2;
}
function isValid(date2) {
  return typeof date2 === "number" ? true : isNaN(Date.parse(date2)) === false;
}
function buildDate(mod2, utc) {
  return adjustDate(new Date(), mod2, utc);
}
function getDayOfWeek(date2) {
  const dow = new Date(date2).getDay();
  return dow === 0 ? 7 : dow;
}
function getWeekOfYear(date2) {
  const thursday = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
  thursday.setDate(thursday.getDate() - (thursday.getDay() + 6) % 7 + 3);
  const firstThursday = new Date(thursday.getFullYear(), 0, 4);
  firstThursday.setDate(firstThursday.getDate() - (firstThursday.getDay() + 6) % 7 + 3);
  const ds = thursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
  thursday.setHours(thursday.getHours() - ds);
  const weekDiff = (thursday - firstThursday) / (MILLISECONDS_IN_DAY * 7);
  return 1 + Math.floor(weekDiff);
}
function getDayIdentifier(date2) {
  return date2.getFullYear() * 1e4 + date2.getMonth() * 100 + date2.getDate();
}
function getDateIdentifier(date2, onlyDate) {
  const d = new Date(date2);
  return onlyDate === true ? getDayIdentifier(d) : d.getTime();
}
function isBetweenDates(date2, from, to, opts = {}) {
  const d1 = getDateIdentifier(from, opts.onlyDate), d2 = getDateIdentifier(to, opts.onlyDate), cur = getDateIdentifier(date2, opts.onlyDate);
  return (cur > d1 || opts.inclusiveFrom === true && cur === d1) && (cur < d2 || opts.inclusiveTo === true && cur === d2);
}
function addToDate(date2, mod2) {
  return getChange(date2, mod2, 1);
}
function subtractFromDate(date2, mod2) {
  return getChange(date2, mod2, -1);
}
function startOfDate(date2, unit, utc) {
  const t = new Date(date2), prefix = `set${utc === true ? "UTC" : ""}`;
  switch (unit) {
    case "year":
    case "years":
      t[`${prefix}Month`](0);
    case "month":
    case "months":
      t[`${prefix}Date`](1);
    case "day":
    case "days":
    case "date":
      t[`${prefix}Hours`](0);
    case "hour":
    case "hours":
      t[`${prefix}Minutes`](0);
    case "minute":
    case "minutes":
      t[`${prefix}Seconds`](0);
    case "second":
    case "seconds":
      t[`${prefix}Milliseconds`](0);
  }
  return t;
}
function endOfDate(date2, unit, utc) {
  const t = new Date(date2), prefix = `set${utc === true ? "UTC" : ""}`;
  switch (unit) {
    case "year":
    case "years":
      t[`${prefix}Month`](11);
    case "month":
    case "months":
      t[`${prefix}Date`](daysInMonth(t));
    case "day":
    case "days":
    case "date":
      t[`${prefix}Hours`](23);
    case "hour":
    case "hours":
      t[`${prefix}Minutes`](59);
    case "minute":
    case "minutes":
      t[`${prefix}Seconds`](59);
    case "second":
    case "seconds":
      t[`${prefix}Milliseconds`](999);
  }
  return t;
}
function getMaxDate(date2) {
  let t = new Date(date2);
  Array.prototype.slice.call(arguments, 1).forEach((d) => {
    t = Math.max(t, new Date(d));
  });
  return t;
}
function getMinDate(date2) {
  let t = new Date(date2);
  Array.prototype.slice.call(arguments, 1).forEach((d) => {
    t = Math.min(t, new Date(d));
  });
  return t;
}
function getDiff(t, sub, interval) {
  return (t.getTime() - t.getTimezoneOffset() * MILLISECONDS_IN_MINUTE - (sub.getTime() - sub.getTimezoneOffset() * MILLISECONDS_IN_MINUTE)) / interval;
}
function getDateDiff(date2, subtract, unit = "days") {
  const t = new Date(date2), sub = new Date(subtract);
  switch (unit) {
    case "years":
    case "year":
      return t.getFullYear() - sub.getFullYear();
    case "months":
    case "month":
      return (t.getFullYear() - sub.getFullYear()) * 12 + t.getMonth() - sub.getMonth();
    case "days":
    case "day":
    case "date":
      return getDiff(startOfDate(t, "day"), startOfDate(sub, "day"), MILLISECONDS_IN_DAY);
    case "hours":
    case "hour":
      return getDiff(startOfDate(t, "hour"), startOfDate(sub, "hour"), MILLISECONDS_IN_HOUR);
    case "minutes":
    case "minute":
      return getDiff(startOfDate(t, "minute"), startOfDate(sub, "minute"), MILLISECONDS_IN_MINUTE);
    case "seconds":
    case "second":
      return getDiff(startOfDate(t, "second"), startOfDate(sub, "second"), 1e3);
  }
}
function getDayOfYear(date2) {
  return getDateDiff(date2, startOfDate(date2, "year"), "days") + 1;
}
function inferDateFormat(date2) {
  return isDate(date2) === true ? "date" : typeof date2 === "number" ? "number" : "string";
}
function getDateBetween(date2, min, max) {
  const t = new Date(date2);
  if (min) {
    const low = new Date(min);
    if (t < low) {
      return low;
    }
  }
  if (max) {
    const high = new Date(max);
    if (t > high) {
      return high;
    }
  }
  return t;
}
function isSameDate(date2, date22, unit) {
  const t = new Date(date2), d = new Date(date22);
  if (unit === void 0) {
    return t.getTime() === d.getTime();
  }
  switch (unit) {
    case "second":
    case "seconds":
      if (t.getSeconds() !== d.getSeconds()) {
        return false;
      }
    case "minute":
    case "minutes":
      if (t.getMinutes() !== d.getMinutes()) {
        return false;
      }
    case "hour":
    case "hours":
      if (t.getHours() !== d.getHours()) {
        return false;
      }
    case "day":
    case "days":
    case "date":
      if (t.getDate() !== d.getDate()) {
        return false;
      }
    case "month":
    case "months":
      if (t.getMonth() !== d.getMonth()) {
        return false;
      }
    case "year":
    case "years":
      if (t.getFullYear() !== d.getFullYear()) {
        return false;
      }
      break;
    default:
      throw new Error(`date isSameDate unknown unit ${unit}`);
  }
  return true;
}
function daysInMonth(date2) {
  return new Date(date2.getFullYear(), date2.getMonth() + 1, 0).getDate();
}
function getOrdinal(n) {
  if (n >= 11 && n <= 13) {
    return `${n}th`;
  }
  switch (n % 10) {
    case 1:
      return `${n}st`;
    case 2:
      return `${n}nd`;
    case 3:
      return `${n}rd`;
  }
  return `${n}th`;
}
const formatter = {
  YY(date2, dateLocale, forcedYear) {
    const y = this.YYYY(date2, dateLocale, forcedYear) % 100;
    return y >= 0 ? pad(y) : "-" + pad(Math.abs(y));
  },
  YYYY(date2, _dateLocale, forcedYear) {
    return forcedYear !== void 0 && forcedYear !== null ? forcedYear : date2.getFullYear();
  },
  M(date2) {
    return date2.getMonth() + 1;
  },
  MM(date2) {
    return pad(date2.getMonth() + 1);
  },
  MMM(date2, dateLocale) {
    return dateLocale.monthsShort[date2.getMonth()];
  },
  MMMM(date2, dateLocale) {
    return dateLocale.months[date2.getMonth()];
  },
  Q(date2) {
    return Math.ceil((date2.getMonth() + 1) / 3);
  },
  Qo(date2) {
    return getOrdinal(this.Q(date2));
  },
  D(date2) {
    return date2.getDate();
  },
  Do(date2) {
    return getOrdinal(date2.getDate());
  },
  DD(date2) {
    return pad(date2.getDate());
  },
  DDD(date2) {
    return getDayOfYear(date2);
  },
  DDDD(date2) {
    return pad(getDayOfYear(date2), 3);
  },
  d(date2) {
    return date2.getDay();
  },
  dd(date2, dateLocale) {
    return this.dddd(date2, dateLocale).slice(0, 2);
  },
  ddd(date2, dateLocale) {
    return dateLocale.daysShort[date2.getDay()];
  },
  dddd(date2, dateLocale) {
    return dateLocale.days[date2.getDay()];
  },
  E(date2) {
    return date2.getDay() || 7;
  },
  w(date2) {
    return getWeekOfYear(date2);
  },
  ww(date2) {
    return pad(getWeekOfYear(date2));
  },
  H(date2) {
    return date2.getHours();
  },
  HH(date2) {
    return pad(date2.getHours());
  },
  h(date2) {
    const hours = date2.getHours();
    return hours === 0 ? 12 : hours > 12 ? hours % 12 : hours;
  },
  hh(date2) {
    return pad(this.h(date2));
  },
  m(date2) {
    return date2.getMinutes();
  },
  mm(date2) {
    return pad(date2.getMinutes());
  },
  s(date2) {
    return date2.getSeconds();
  },
  ss(date2) {
    return pad(date2.getSeconds());
  },
  S(date2) {
    return Math.floor(date2.getMilliseconds() / 100);
  },
  SS(date2) {
    return pad(Math.floor(date2.getMilliseconds() / 10));
  },
  SSS(date2) {
    return pad(date2.getMilliseconds(), 3);
  },
  A(date2) {
    return this.H(date2) < 12 ? "AM" : "PM";
  },
  a(date2) {
    return this.H(date2) < 12 ? "am" : "pm";
  },
  aa(date2) {
    return this.H(date2) < 12 ? "a.m." : "p.m.";
  },
  Z(date2, _dateLocale, _forcedYear, forcedTimezoneOffset) {
    const tzOffset = forcedTimezoneOffset === void 0 || forcedTimezoneOffset === null ? date2.getTimezoneOffset() : forcedTimezoneOffset;
    return formatTimezone(tzOffset, ":");
  },
  ZZ(date2, _dateLocale, _forcedYear, forcedTimezoneOffset) {
    const tzOffset = forcedTimezoneOffset === void 0 || forcedTimezoneOffset === null ? date2.getTimezoneOffset() : forcedTimezoneOffset;
    return formatTimezone(tzOffset);
  },
  X(date2) {
    return Math.floor(date2.getTime() / 1e3);
  },
  x(date2) {
    return date2.getTime();
  }
};
function formatDate(val, mask, dateLocale, __forcedYear, __forcedTimezoneOffset) {
  if (val !== 0 && !val || val === Infinity || val === -Infinity) {
    return;
  }
  const date2 = new Date(val);
  if (isNaN(date2)) {
    return;
  }
  if (mask === void 0) {
    mask = defaultMask;
  }
  const locale = getDateLocale(dateLocale, Plugin.props);
  return mask.replace(
    token,
    (match, text) => match in formatter ? formatter[match](date2, locale, __forcedYear, __forcedTimezoneOffset) : text === void 0 ? match : text.split("\\]").join("]")
  );
}
function clone(date2) {
  return isDate(date2) === true ? new Date(date2.getTime()) : date2;
}
var date = {
  isValid,
  extractDate,
  buildDate,
  getDayOfWeek,
  getWeekOfYear,
  isBetweenDates,
  addToDate,
  subtractFromDate,
  adjustDate,
  startOfDate,
  endOfDate,
  getMaxDate,
  getMinDate,
  getDateDiff,
  getDayOfYear,
  inferDateFormat,
  getDateBetween,
  isSameDate,
  daysInMonth,
  formatDate,
  clone
};
export { date as d };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5lYzVkODNhZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvdXRpbHMvZGF0ZS9wcml2YXRlLnBlcnNpYW4uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9kYXRlL2RhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vamFsYWFsaS9qYWxhYWxpLWpzXG5cbi8qXG4gIEphbGFhbGkgeWVhcnMgc3RhcnRpbmcgdGhlIDMzLXllYXIgcnVsZS5cbiovXG5jb25zdCBicmVha3MgPSBbXG4gIC02MSwgOSwgMzgsIDE5OSwgNDI2LCA2ODYsIDc1NiwgODE4LCAxMTExLCAxMTgxLCAxMjEwLFxuICAxNjM1LCAyMDYwLCAyMDk3LCAyMTkyLCAyMjYyLCAyMzI0LCAyMzk0LCAyNDU2LCAzMTc4XG5dXG5cbi8qXG4gIENvbnZlcnRzIGEgR3JlZ29yaWFuIGRhdGUgdG8gSmFsYWFsaS5cbiovXG5leHBvcnQgZnVuY3Rpb24gdG9KYWxhYWxpIChneSwgZ20sIGdkKSB7XG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZ3kpID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICBnZCA9IGd5LmdldERhdGUoKVxuICAgIGdtID0gZ3kuZ2V0TW9udGgoKSArIDFcbiAgICBneSA9IGd5LmdldEZ1bGxZZWFyKClcbiAgfVxuICByZXR1cm4gZDJqKGcyZChneSwgZ20sIGdkKSlcbn1cblxuLypcbiAgQ29udmVydHMgYSBKYWxhYWxpIGRhdGUgdG8gR3JlZ29yaWFuLlxuKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0dyZWdvcmlhbiAoanksIGptLCBqZCkge1xuICByZXR1cm4gZDJnKGoyZChqeSwgam0sIGpkKSlcbn1cblxuLypcbiAgSXMgdGhpcyBhIGxlYXAgeWVhciBvciBub3Q/XG4qL1xuZnVuY3Rpb24gaXNMZWFwSmFsYWFsaVllYXIgKGp5KSB7XG4gIHJldHVybiBqYWxDYWxMZWFwKGp5KSA9PT0gMFxufVxuXG4vKlxuICBOdW1iZXIgb2YgZGF5cyBpbiBhIGdpdmVuIG1vbnRoIGluIGEgSmFsYWFsaSB5ZWFyLlxuKi9cbmV4cG9ydCBmdW5jdGlvbiBqYWxhYWxpTW9udGhMZW5ndGggKGp5LCBqbSkge1xuICBpZiAoam0gPD0gNikgcmV0dXJuIDMxXG4gIGlmIChqbSA8PSAxMSkgcmV0dXJuIDMwXG4gIGlmIChpc0xlYXBKYWxhYWxpWWVhcihqeSkpIHJldHVybiAzMFxuICByZXR1cm4gMjlcbn1cblxuLypcbiAgICBUaGlzIGZ1bmN0aW9uIGRldGVybWluZXMgaWYgdGhlIEphbGFhbGkgKFBlcnNpYW4pIHllYXIgaXNcbiAgICBsZWFwICgzNjYtZGF5IGxvbmcpIG9yIGlzIHRoZSBjb21tb24geWVhciAoMzY1IGRheXMpXG5cbiAgICBAcGFyYW0gankgSmFsYWFsaSBjYWxlbmRhciB5ZWFyICgtNjEgdG8gMzE3NylcbiAgICBAcmV0dXJucyBudW1iZXIgb2YgeWVhcnMgc2luY2UgdGhlIGxhc3QgbGVhcCB5ZWFyICgwIHRvIDQpXG4gKi9cbmZ1bmN0aW9uIGphbENhbExlYXAgKGp5KSB7XG4gIGNvbnN0IGJsID0gYnJlYWtzLmxlbmd0aFxuICBsZXRcbiAgICBqcCA9IGJyZWFrc1sgMCBdLFxuICAgIGptLFxuICAgIGp1bXAsXG4gICAgbGVhcCxcbiAgICBuLFxuICAgIGlcblxuICBpZiAoankgPCBqcCB8fCBqeSA+PSBicmVha3NbIGJsIC0gMSBdKSB7IHRocm93IG5ldyBFcnJvcignSW52YWxpZCBKYWxhYWxpIHllYXIgJyArIGp5KSB9XG5cbiAgZm9yIChpID0gMTsgaSA8IGJsOyBpICs9IDEpIHtcbiAgICBqbSA9IGJyZWFrc1sgaSBdXG4gICAganVtcCA9IGptIC0ganBcbiAgICBpZiAoankgPCBqbSkgeyBicmVhayB9XG4gICAganAgPSBqbVxuICB9XG4gIG4gPSBqeSAtIGpwXG5cbiAgaWYgKGp1bXAgLSBuIDwgNikgeyBuID0gbiAtIGp1bXAgKyBkaXYoanVtcCArIDQsIDMzKSAqIDMzIH1cbiAgbGVhcCA9IG1vZChtb2QobiArIDEsIDMzKSAtIDEsIDQpXG4gIGlmIChsZWFwID09PSAtMSkge1xuICAgIGxlYXAgPSA0XG4gIH1cblxuICByZXR1cm4gbGVhcFxufVxuXG4vKlxuICBUaGlzIGZ1bmN0aW9uIGRldGVybWluZXMgaWYgdGhlIEphbGFhbGkgKFBlcnNpYW4pIHllYXIgaXNcbiAgbGVhcCAoMzY2LWRheSBsb25nKSBvciBpcyB0aGUgY29tbW9uIHllYXIgKDM2NSBkYXlzKSwgYW5kXG4gIGZpbmRzIHRoZSBkYXkgaW4gTWFyY2ggKEdyZWdvcmlhbiBjYWxlbmRhcikgb2YgdGhlIGZpcnN0XG4gIGRheSBvZiB0aGUgSmFsYWFsaSB5ZWFyIChqeSkuXG5cbiAgQHBhcmFtIGp5IEphbGFhbGkgY2FsZW5kYXIgeWVhciAoLTYxIHRvIDMxNzcpXG4gIEBwYXJhbSB3aXRob3V0TGVhcCB3aGVuIGRvbid0IG5lZWQgbGVhcCAodHJ1ZSBvciBmYWxzZSkgZGVmYXVsdCBpcyBmYWxzZVxuICBAcmV0dXJuXG4gICAgbGVhcDogbnVtYmVyIG9mIHllYXJzIHNpbmNlIHRoZSBsYXN0IGxlYXAgeWVhciAoMCB0byA0KVxuICAgIGd5OiBHcmVnb3JpYW4geWVhciBvZiB0aGUgYmVnaW5uaW5nIG9mIEphbGFhbGkgeWVhclxuICAgIG1hcmNoOiB0aGUgTWFyY2ggZGF5IG9mIEZhcnZhcmRpbiB0aGUgMXN0ICgxc3QgZGF5IG9mIGp5KVxuICBAc2VlOiBodHRwOi8vd3d3LmFzdHJvLnVuaS50b3J1bi5wbC9+a2IvUGFwZXJzL0VNUC9QZXJzaWFuQy1FTVAuaHRtXG4gIEBzZWU6IGh0dHA6Ly93d3cuZm91cm1pbGFiLmNoL2RvY3VtZW50cy9jYWxlbmRhci9cbiovXG5mdW5jdGlvbiBqYWxDYWwgKGp5LCB3aXRob3V0TGVhcCkge1xuICBjb25zdFxuICAgIGJsID0gYnJlYWtzLmxlbmd0aCxcbiAgICBneSA9IGp5ICsgNjIxXG4gIGxldFxuICAgIGxlYXBKID0gLTE0LFxuICAgIGpwID0gYnJlYWtzWyAwIF0sXG4gICAgam0sXG4gICAganVtcCxcbiAgICBsZWFwLFxuICAgIG4sXG4gICAgaVxuXG4gIGlmIChqeSA8IGpwIHx8IGp5ID49IGJyZWFrc1sgYmwgLSAxIF0pIHsgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEphbGFhbGkgeWVhciAnICsgankpIH1cblxuICAvLyBGaW5kIHRoZSBsaW1pdGluZyB5ZWFycyBmb3IgdGhlIEphbGFhbGkgeWVhciBqeS5cbiAgZm9yIChpID0gMTsgaSA8IGJsOyBpICs9IDEpIHtcbiAgICBqbSA9IGJyZWFrc1sgaSBdXG4gICAganVtcCA9IGptIC0ganBcbiAgICBpZiAoankgPCBqbSkgeyBicmVhayB9XG4gICAgbGVhcEogPSBsZWFwSiArIGRpdihqdW1wLCAzMykgKiA4ICsgZGl2KG1vZChqdW1wLCAzMyksIDQpXG4gICAganAgPSBqbVxuICB9XG4gIG4gPSBqeSAtIGpwXG5cbiAgLy8gRmluZCB0aGUgbnVtYmVyIG9mIGxlYXAgeWVhcnMgZnJvbSBBRCA2MjEgdG8gdGhlIGJlZ2lubmluZ1xuICAvLyBvZiB0aGUgY3VycmVudCBKYWxhYWxpIHllYXIgaW4gdGhlIFBlcnNpYW4gY2FsZW5kYXIuXG4gIGxlYXBKID0gbGVhcEogKyBkaXYobiwgMzMpICogOCArIGRpdihtb2QobiwgMzMpICsgMywgNClcbiAgaWYgKG1vZChqdW1wLCAzMykgPT09IDQgJiYganVtcCAtIG4gPT09IDQpIHsgbGVhcEogKz0gMSB9XG5cbiAgLy8gQW5kIHRoZSBzYW1lIGluIHRoZSBHcmVnb3JpYW4gY2FsZW5kYXIgKHVudGlsIHRoZSB5ZWFyIGd5KS5cbiAgY29uc3QgbGVhcEcgPSBkaXYoZ3ksIDQpIC0gZGl2KChkaXYoZ3ksIDEwMCkgKyAxKSAqIDMsIDQpIC0gMTUwXG5cbiAgLy8gRGV0ZXJtaW5lIHRoZSBHcmVnb3JpYW4gZGF0ZSBvZiBGYXJ2YXJkaW4gdGhlIDFzdC5cbiAgY29uc3QgbWFyY2ggPSAyMCArIGxlYXBKIC0gbGVhcEdcblxuICAvLyBGaW5kIGhvdyBtYW55IHllYXJzIGhhdmUgcGFzc2VkIHNpbmNlIHRoZSBsYXN0IGxlYXAgeWVhci5cbiAgaWYgKCF3aXRob3V0TGVhcCkge1xuICAgIGlmIChqdW1wIC0gbiA8IDYpIHsgbiA9IG4gLSBqdW1wICsgZGl2KGp1bXAgKyA0LCAzMykgKiAzMyB9XG4gICAgbGVhcCA9IG1vZChtb2QobiArIDEsIDMzKSAtIDEsIDQpXG4gICAgaWYgKGxlYXAgPT09IC0xKSB7XG4gICAgICBsZWFwID0gNFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGVhcCxcbiAgICBneSxcbiAgICBtYXJjaFxuICB9XG59XG5cbi8qXG4gIENvbnZlcnRzIGEgZGF0ZSBvZiB0aGUgSmFsYWFsaSBjYWxlbmRhciB0byB0aGUgSnVsaWFuIERheSBudW1iZXIuXG5cbiAgQHBhcmFtIGp5IEphbGFhbGkgeWVhciAoMSB0byAzMTAwKVxuICBAcGFyYW0gam0gSmFsYWFsaSBtb250aCAoMSB0byAxMilcbiAgQHBhcmFtIGpkIEphbGFhbGkgZGF5ICgxIHRvIDI5LzMxKVxuICBAcmV0dXJuIEp1bGlhbiBEYXkgbnVtYmVyXG4qL1xuZnVuY3Rpb24gajJkIChqeSwgam0sIGpkKSB7XG4gIGNvbnN0IHIgPSBqYWxDYWwoanksIHRydWUpXG4gIHJldHVybiBnMmQoci5neSwgMywgci5tYXJjaCkgKyAoam0gLSAxKSAqIDMxIC0gZGl2KGptLCA3KSAqIChqbSAtIDcpICsgamQgLSAxXG59XG5cbi8qXG4gIENvbnZlcnRzIHRoZSBKdWxpYW4gRGF5IG51bWJlciB0byBhIGRhdGUgaW4gdGhlIEphbGFhbGkgY2FsZW5kYXIuXG5cbiAgQHBhcmFtIGpkbiBKdWxpYW4gRGF5IG51bWJlclxuICBAcmV0dXJuXG4gICAgank6IEphbGFhbGkgeWVhciAoMSB0byAzMTAwKVxuICAgIGptOiBKYWxhYWxpIG1vbnRoICgxIHRvIDEyKVxuICAgIGpkOiBKYWxhYWxpIGRheSAoMSB0byAyOS8zMSlcbiovXG5mdW5jdGlvbiBkMmogKGpkbikge1xuICBjb25zdCBneSA9IGQyZyhqZG4pLmd5IC8vIENhbGN1bGF0ZSBHcmVnb3JpYW4geWVhciAoZ3kpLlxuICBsZXRcbiAgICBqeSA9IGd5IC0gNjIxLFxuICAgIGpkLFxuICAgIGptLFxuICAgIGtcbiAgY29uc3RcbiAgICByID0gamFsQ2FsKGp5LCBmYWxzZSksXG4gICAgamRuMWYgPSBnMmQoZ3ksIDMsIHIubWFyY2gpXG5cbiAgLy8gRmluZCBudW1iZXIgb2YgZGF5cyB0aGF0IHBhc3NlZCBzaW5jZSAxIEZhcnZhcmRpbi5cbiAgayA9IGpkbiAtIGpkbjFmXG4gIGlmIChrID49IDApIHtcbiAgICBpZiAoayA8PSAxODUpIHtcbiAgICAgIC8vIFRoZSBmaXJzdCA2IG1vbnRocy5cbiAgICAgIGptID0gMSArIGRpdihrLCAzMSlcbiAgICAgIGpkID0gbW9kKGssIDMxKSArIDFcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGp5LFxuICAgICAgICBqbSxcbiAgICAgICAgamRcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyBUaGUgcmVtYWluaW5nIG1vbnRocy5cbiAgICAgIGsgLT0gMTg2XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIC8vIFByZXZpb3VzIEphbGFhbGkgeWVhci5cbiAgICBqeSAtPSAxXG4gICAgayArPSAxNzlcbiAgICBpZiAoci5sZWFwID09PSAxKSB7IGsgKz0gMSB9XG4gIH1cbiAgam0gPSA3ICsgZGl2KGssIDMwKVxuICBqZCA9IG1vZChrLCAzMCkgKyAxXG4gIHJldHVybiB7XG4gICAganksXG4gICAgam0sXG4gICAgamRcbiAgfVxufVxuXG4vKlxuICBDYWxjdWxhdGVzIHRoZSBKdWxpYW4gRGF5IG51bWJlciBmcm9tIEdyZWdvcmlhbiBvciBKdWxpYW5cbiAgY2FsZW5kYXIgZGF0ZXMuIFRoaXMgaW50ZWdlciBudW1iZXIgY29ycmVzcG9uZHMgdG8gdGhlIG5vb24gb2ZcbiAgdGhlIGRhdGUgKGkuZS4gMTIgaG91cnMgb2YgVW5pdmVyc2FsIFRpbWUpLlxuICBUaGUgcHJvY2VkdXJlIHdhcyB0ZXN0ZWQgdG8gYmUgZ29vZCBzaW5jZSAxIE1hcmNoLCAtMTAwMTAwIChvZiBib3RoXG4gIGNhbGVuZGFycykgdXAgdG8gYSBmZXcgbWlsbGlvbiB5ZWFycyBpbnRvIHRoZSBmdXR1cmUuXG5cbiAgQHBhcmFtIGd5IENhbGVuZGFyIHllYXIgKHllYXJzIEJDIG51bWJlcmVkIDAsIC0xLCAtMiwgLi4uKVxuICBAcGFyYW0gZ20gQ2FsZW5kYXIgbW9udGggKDEgdG8gMTIpXG4gIEBwYXJhbSBnZCBDYWxlbmRhciBkYXkgb2YgdGhlIG1vbnRoICgxIHRvIDI4LzI5LzMwLzMxKVxuICBAcmV0dXJuIEp1bGlhbiBEYXkgbnVtYmVyXG4qL1xuZnVuY3Rpb24gZzJkIChneSwgZ20sIGdkKSB7XG4gIGxldCBkID0gZGl2KChneSArIGRpdihnbSAtIDgsIDYpICsgMTAwMTAwKSAqIDE0NjEsIDQpXG4gICAgICArIGRpdigxNTMgKiBtb2QoZ20gKyA5LCAxMikgKyAyLCA1KVxuICAgICAgKyBnZCAtIDM0ODQwNDA4XG4gIGQgPSBkIC0gZGl2KGRpdihneSArIDEwMDEwMCArIGRpdihnbSAtIDgsIDYpLCAxMDApICogMywgNCkgKyA3NTJcbiAgcmV0dXJuIGRcbn1cblxuLypcbiAgQ2FsY3VsYXRlcyBHcmVnb3JpYW4gYW5kIEp1bGlhbiBjYWxlbmRhciBkYXRlcyBmcm9tIHRoZSBKdWxpYW4gRGF5IG51bWJlclxuICAoamRuKSBmb3IgdGhlIHBlcmlvZCBzaW5jZSBqZG49LTM0ODM5NjU1IChpLmUuIHRoZSB5ZWFyIC0xMDAxMDAgb2YgYm90aFxuICBjYWxlbmRhcnMpIHRvIHNvbWUgbWlsbGlvbnMgeWVhcnMgYWhlYWQgb2YgdGhlIHByZXNlbnQuXG5cbiAgQHBhcmFtIGpkbiBKdWxpYW4gRGF5IG51bWJlclxuICBAcmV0dXJuXG4gICAgZ3k6IENhbGVuZGFyIHllYXIgKHllYXJzIEJDIG51bWJlcmVkIDAsIC0xLCAtMiwgLi4uKVxuICAgIGdtOiBDYWxlbmRhciBtb250aCAoMSB0byAxMilcbiAgICBnZDogQ2FsZW5kYXIgZGF5IG9mIHRoZSBtb250aCBNICgxIHRvIDI4LzI5LzMwLzMxKVxuKi9cbmZ1bmN0aW9uIGQyZyAoamRuKSB7XG4gIGxldCBqID0gNCAqIGpkbiArIDEzOTM2MTYzMVxuICBqID0gaiArIGRpdihkaXYoNCAqIGpkbiArIDE4MzE4NzcyMCwgMTQ2MDk3KSAqIDMsIDQpICogNCAtIDM5MDhcbiAgY29uc3RcbiAgICBpID0gZGl2KG1vZChqLCAxNDYxKSwgNCkgKiA1ICsgMzA4LFxuICAgIGdkID0gZGl2KG1vZChpLCAxNTMpLCA1KSArIDEsXG4gICAgZ20gPSBtb2QoZGl2KGksIDE1MyksIDEyKSArIDEsXG4gICAgZ3kgPSBkaXYoaiwgMTQ2MSkgLSAxMDAxMDAgKyBkaXYoOCAtIGdtLCA2KVxuICByZXR1cm4ge1xuICAgIGd5LFxuICAgIGdtLFxuICAgIGdkXG4gIH1cbn1cblxuLypcbiAgVXRpbGl0eSBoZWxwZXIgZnVuY3Rpb25zLlxuKi9cblxuZnVuY3Rpb24gZGl2IChhLCBiKSB7XG4gIHJldHVybiB+fihhIC8gYilcbn1cblxuZnVuY3Rpb24gbW9kIChhLCBiKSB7XG4gIHJldHVybiBhIC0gfn4oYSAvIGIpICogYlxufVxuIiwiLyogZXNsaW50IG5vLWZhbGx0aHJvdWdoOiAwICovXG5cbmltcG9ydCB7IGlzRGF0ZSB9IGZyb20gJy4uL2lzL2lzLmpzJ1xuaW1wb3J0IHsgcGFkLCBjYXBpdGFsaXplIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdC5qcydcbmltcG9ydCB7IGphbGFhbGlNb250aExlbmd0aCB9IGZyb20gJy4vcHJpdmF0ZS5wZXJzaWFuLmpzJ1xuaW1wb3J0IExhbmcsIHsgZGVmYXVsdExhbmcgfSBmcm9tICcuLi8uLi9wbHVnaW5zL2xhbmcvTGFuZy5qcydcblxuY29uc3RcbiAgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwLFxuICBNSUxMSVNFQ09ORFNfSU5fSE9VUiA9IDM2MDAwMDAsXG4gIE1JTExJU0VDT05EU19JTl9NSU5VVEUgPSA2MDAwMCxcbiAgZGVmYXVsdE1hc2sgPSAnWVlZWS1NTS1ERFRISDptbTpzcy5TU1NaJyxcbiAgdG9rZW4gPSAvXFxbKCg/OlteXFxdXFxcXF18XFxcXF18XFxcXCkqKVxcXXxkezEsNH18TXsxLDR9fG17MSwyfXx3ezEsMn18UW98RG98RHsxLDR9fFlZKD86WVkpP3xIezEsMn18aHsxLDJ9fHN7MSwyfXxTezEsM318WnsxLDJ9fGF7MSwyfXxbQVFFeFhdL2csXG4gIHJldmVyc2VUb2tlbiA9IC8oXFxbW15cXF1dKlxcXSl8ZHsxLDR9fE17MSw0fXxtezEsMn18d3sxLDJ9fFFvfERvfER7MSw0fXxZWSg/OllZKT98SHsxLDJ9fGh7MSwyfXxzezEsMn18U3sxLDN9fFp7MSwyfXxhezEsMn18W0FRRXhYXXwoWy4qKzo/XixcXHMke30oKXxcXFxcXSspL2csXG4gIHJlZ2V4U3RvcmUgPSB7fVxuXG5mdW5jdGlvbiBnZXRSZWdleERhdGEgKG1hc2ssIGRhdGVMb2NhbGUpIHtcbiAgY29uc3RcbiAgICBkYXlzID0gJygnICsgZGF0ZUxvY2FsZS5kYXlzLmpvaW4oJ3wnKSArICcpJyxcbiAgICBrZXkgPSBtYXNrICsgZGF5c1xuXG4gIGlmIChyZWdleFN0b3JlWyBrZXkgXSAhPT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuIHJlZ2V4U3RvcmVbIGtleSBdXG4gIH1cblxuICBjb25zdFxuICAgIGRheXNTaG9ydCA9ICcoJyArIGRhdGVMb2NhbGUuZGF5c1Nob3J0LmpvaW4oJ3wnKSArICcpJyxcbiAgICBtb250aHMgPSAnKCcgKyBkYXRlTG9jYWxlLm1vbnRocy5qb2luKCd8JykgKyAnKScsXG4gICAgbW9udGhzU2hvcnQgPSAnKCcgKyBkYXRlTG9jYWxlLm1vbnRoc1Nob3J0LmpvaW4oJ3wnKSArICcpJ1xuXG4gIGNvbnN0IG1hcCA9IHt9XG4gIGxldCBpbmRleCA9IDBcblxuICBjb25zdCByZWdleFRleHQgPSBtYXNrLnJlcGxhY2UocmV2ZXJzZVRva2VuLCBtYXRjaCA9PiB7XG4gICAgaW5kZXgrK1xuICAgIHN3aXRjaCAobWF0Y2gpIHtcbiAgICAgIGNhc2UgJ1lZJzpcbiAgICAgICAgbWFwLllZID0gaW5kZXhcbiAgICAgICAgcmV0dXJuICcoLT9cXFxcZHsxLDJ9KSdcbiAgICAgIGNhc2UgJ1lZWVknOlxuICAgICAgICBtYXAuWVlZWSA9IGluZGV4XG4gICAgICAgIHJldHVybiAnKC0/XFxcXGR7MSw0fSknXG4gICAgICBjYXNlICdNJzpcbiAgICAgICAgbWFwLk0gPSBpbmRleFxuICAgICAgICByZXR1cm4gJyhcXFxcZHsxLDJ9KSdcbiAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgbWFwLk0gPSBpbmRleCAvLyBidW1waW5nIHRvIE1cbiAgICAgICAgcmV0dXJuICcoXFxcXGR7Mn0pJ1xuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgbWFwLk1NTSA9IGluZGV4XG4gICAgICAgIHJldHVybiBtb250aHNTaG9ydFxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICAgIG1hcC5NTU1NID0gaW5kZXhcbiAgICAgICAgcmV0dXJuIG1vbnRoc1xuICAgICAgY2FzZSAnRCc6XG4gICAgICAgIG1hcC5EID0gaW5kZXhcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7MSwyfSknXG4gICAgICBjYXNlICdEbyc6XG4gICAgICAgIG1hcC5EID0gaW5kZXgrKyAvLyBidW1waW5nIHRvIERcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7MSwyfShzdHxuZHxyZHx0aCkpJ1xuICAgICAgY2FzZSAnREQnOlxuICAgICAgICBtYXAuRCA9IGluZGV4IC8vIGJ1bXBpbmcgdG8gRFxuICAgICAgICByZXR1cm4gJyhcXFxcZHsyfSknXG4gICAgICBjYXNlICdIJzpcbiAgICAgICAgbWFwLkggPSBpbmRleFxuICAgICAgICByZXR1cm4gJyhcXFxcZHsxLDJ9KSdcbiAgICAgIGNhc2UgJ0hIJzpcbiAgICAgICAgbWFwLkggPSBpbmRleCAvLyBidW1waW5nIHRvIEhcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7Mn0pJ1xuICAgICAgY2FzZSAnaCc6XG4gICAgICAgIG1hcC5oID0gaW5kZXhcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7MSwyfSknXG4gICAgICBjYXNlICdoaCc6XG4gICAgICAgIG1hcC5oID0gaW5kZXggLy8gYnVtcGluZyB0byBoXG4gICAgICAgIHJldHVybiAnKFxcXFxkezJ9KSdcbiAgICAgIGNhc2UgJ20nOlxuICAgICAgICBtYXAubSA9IGluZGV4XG4gICAgICAgIHJldHVybiAnKFxcXFxkezEsMn0pJ1xuICAgICAgY2FzZSAnbW0nOlxuICAgICAgICBtYXAubSA9IGluZGV4IC8vIGJ1bXBpbmcgdG8gbVxuICAgICAgICByZXR1cm4gJyhcXFxcZHsyfSknXG4gICAgICBjYXNlICdzJzpcbiAgICAgICAgbWFwLnMgPSBpbmRleFxuICAgICAgICByZXR1cm4gJyhcXFxcZHsxLDJ9KSdcbiAgICAgIGNhc2UgJ3NzJzpcbiAgICAgICAgbWFwLnMgPSBpbmRleCAvLyBidW1waW5nIHRvIHNcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7Mn0pJ1xuICAgICAgY2FzZSAnUyc6XG4gICAgICAgIG1hcC5TID0gaW5kZXhcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7MX0pJ1xuICAgICAgY2FzZSAnU1MnOlxuICAgICAgICBtYXAuUyA9IGluZGV4IC8vIGJ1bXAgdG8gU1xuICAgICAgICByZXR1cm4gJyhcXFxcZHsyfSknXG4gICAgICBjYXNlICdTU1MnOlxuICAgICAgICBtYXAuUyA9IGluZGV4IC8vIGJ1bXAgdG8gU1xuICAgICAgICByZXR1cm4gJyhcXFxcZHszfSknXG4gICAgICBjYXNlICdBJzpcbiAgICAgICAgbWFwLkEgPSBpbmRleFxuICAgICAgICByZXR1cm4gJyhBTXxQTSknXG4gICAgICBjYXNlICdhJzpcbiAgICAgICAgbWFwLmEgPSBpbmRleFxuICAgICAgICByZXR1cm4gJyhhbXxwbSknXG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIG1hcC5hYSA9IGluZGV4XG4gICAgICAgIHJldHVybiAnKGFcXFxcLm1cXFxcLnxwXFxcXC5tXFxcXC4pJ1xuXG4gICAgICBjYXNlICdkZGQnOlxuICAgICAgICByZXR1cm4gZGF5c1Nob3J0XG4gICAgICBjYXNlICdkZGRkJzpcbiAgICAgICAgcmV0dXJuIGRheXNcbiAgICAgIGNhc2UgJ1EnOlxuICAgICAgY2FzZSAnZCc6XG4gICAgICBjYXNlICdFJzpcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7MX0pJ1xuICAgICAgY2FzZSAnUW8nOlxuICAgICAgICByZXR1cm4gJygxc3R8Mm5kfDNyZHw0dGgpJ1xuICAgICAgY2FzZSAnREREJzpcbiAgICAgIGNhc2UgJ0REREQnOlxuICAgICAgICByZXR1cm4gJyhcXFxcZHsxLDN9KSdcbiAgICAgIGNhc2UgJ3cnOlxuICAgICAgICByZXR1cm4gJyhcXFxcZHsxLDJ9KSdcbiAgICAgIGNhc2UgJ3d3JzpcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7Mn0pJ1xuXG4gICAgICBjYXNlICdaJzogLy8gdG8gc3BsaXQ6ICg/OihaKSgpKCl8KFsrLV0pPyhcXFxcZHsyfSk6PyhcXFxcZHsyfSkpXG4gICAgICAgIG1hcC5aID0gaW5kZXhcbiAgICAgICAgcmV0dXJuICcoWnxbKy1dXFxcXGR7Mn06XFxcXGR7Mn0pJ1xuICAgICAgY2FzZSAnWlonOlxuICAgICAgICBtYXAuWlogPSBpbmRleFxuICAgICAgICByZXR1cm4gJyhafFsrLV1cXFxcZHsyfVxcXFxkezJ9KSdcblxuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIG1hcC5YID0gaW5kZXhcbiAgICAgICAgcmV0dXJuICcoLT9cXFxcZCspJ1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIG1hcC54ID0gaW5kZXhcbiAgICAgICAgcmV0dXJuICcoLT9cXFxcZHs0LH0pJ1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpbmRleC0tXG4gICAgICAgIGlmIChtYXRjaFsgMCBdID09PSAnWycpIHtcbiAgICAgICAgICBtYXRjaCA9IG1hdGNoLnN1YnN0cmluZygxLCBtYXRjaC5sZW5ndGggLSAxKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXRjaC5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHJlcyA9IHsgbWFwLCByZWdleDogbmV3IFJlZ0V4cCgnXicgKyByZWdleFRleHQpIH1cbiAgcmVnZXhTdG9yZVsga2V5IF0gPSByZXNcblxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGdldERhdGVMb2NhbGUgKHBhcmFtRGF0ZUxvY2FsZSwgbGFuZ1Byb3BzKSB7XG4gIHJldHVybiBwYXJhbURhdGVMb2NhbGUgIT09IHZvaWQgMFxuICAgID8gcGFyYW1EYXRlTG9jYWxlXG4gICAgOiAoXG4gICAgICAgIGxhbmdQcm9wcyAhPT0gdm9pZCAwXG4gICAgICAgICAgPyBsYW5nUHJvcHMuZGF0ZVxuICAgICAgICAgIDogZGVmYXVsdExhbmcuZGF0ZVxuICAgICAgKVxufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZSAob2Zmc2V0LCBkZWxpbWV0ZXIgPSAnJykge1xuICBjb25zdFxuICAgIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnLFxuICAgIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCksXG4gICAgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSxcbiAgICBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjBcblxuICByZXR1cm4gc2lnbiArIHBhZChob3VycykgKyBkZWxpbWV0ZXIgKyBwYWQobWludXRlcylcbn1cblxuZnVuY3Rpb24gYXBwbHlZZWFyTW9udGhEYXlDaGFuZ2UgKGRhdGUsIG1vZCwgc2lnbikge1xuICBsZXRcbiAgICB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgIG1vbnRoID0gZGF0ZS5nZXRNb250aCgpXG5cbiAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKClcblxuICBpZiAobW9kLnllYXIgIT09IHZvaWQgMCkge1xuICAgIHllYXIgKz0gc2lnbiAqIG1vZC55ZWFyXG4gICAgZGVsZXRlIG1vZC55ZWFyXG4gIH1cblxuICBpZiAobW9kLm1vbnRoICE9PSB2b2lkIDApIHtcbiAgICBtb250aCArPSBzaWduICogbW9kLm1vbnRoXG4gICAgZGVsZXRlIG1vZC5tb250aFxuICB9XG5cbiAgZGF0ZS5zZXREYXRlKDEpXG4gIGRhdGUuc2V0TW9udGgoMilcblxuICBkYXRlLnNldEZ1bGxZZWFyKHllYXIpXG4gIGRhdGUuc2V0TW9udGgobW9udGgpXG4gIGRhdGUuc2V0RGF0ZShNYXRoLm1pbihkYXksIGRheXNJbk1vbnRoKGRhdGUpKSlcblxuICBpZiAobW9kLmRhdGUgIT09IHZvaWQgMCkge1xuICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIHNpZ24gKiBtb2QuZGF0ZSlcbiAgICBkZWxldGUgbW9kLmRhdGVcbiAgfVxuXG4gIHJldHVybiBkYXRlXG59XG5cbmZ1bmN0aW9uIGFwcGx5WWVhck1vbnRoRGF5IChkYXRlLCBtb2QsIG1pZGRsZSkge1xuICBjb25zdFxuICAgIHllYXIgPSBtb2QueWVhciAhPT0gdm9pZCAwID8gbW9kLnllYXIgOiBkYXRlWyBgZ2V0JHsgbWlkZGxlIH1GdWxsWWVhcmAgXSgpLFxuICAgIG1vbnRoID0gbW9kLm1vbnRoICE9PSB2b2lkIDAgPyBtb2QubW9udGggLSAxIDogZGF0ZVsgYGdldCR7IG1pZGRsZSB9TW9udGhgIF0oKSxcbiAgICBtYXhEYXkgPSAobmV3IERhdGUoeWVhciwgbW9udGggKyAxLCAwKSkuZ2V0RGF0ZSgpLFxuICAgIGRheSA9IE1hdGgubWluKG1heERheSwgbW9kLmRhdGUgIT09IHZvaWQgMCA/IG1vZC5kYXRlIDogZGF0ZVsgYGdldCR7IG1pZGRsZSB9RGF0ZWAgXSgpKVxuXG4gIGRhdGVbIGBzZXQkeyBtaWRkbGUgfURhdGVgIF0oMSlcbiAgZGF0ZVsgYHNldCR7IG1pZGRsZSB9TW9udGhgIF0oMilcblxuICBkYXRlWyBgc2V0JHsgbWlkZGxlIH1GdWxsWWVhcmAgXSh5ZWFyKVxuICBkYXRlWyBgc2V0JHsgbWlkZGxlIH1Nb250aGAgXShtb250aClcbiAgZGF0ZVsgYHNldCR7IG1pZGRsZSB9RGF0ZWAgXShkYXkpXG5cbiAgZGVsZXRlIG1vZC55ZWFyXG4gIGRlbGV0ZSBtb2QubW9udGhcbiAgZGVsZXRlIG1vZC5kYXRlXG5cbiAgcmV0dXJuIGRhdGVcbn1cblxuZnVuY3Rpb24gZ2V0Q2hhbmdlIChkYXRlLCByYXdNb2QsIHNpZ24pIHtcbiAgY29uc3RcbiAgICBtb2QgPSBub3JtYWxpemVNb2QocmF3TW9kKSxcbiAgICBkID0gbmV3IERhdGUoZGF0ZSksXG4gICAgdCA9IG1vZC55ZWFyICE9PSB2b2lkIDAgfHwgbW9kLm1vbnRoICE9PSB2b2lkIDAgfHwgbW9kLmRhdGUgIT09IHZvaWQgMFxuICAgICAgPyBhcHBseVllYXJNb250aERheUNoYW5nZShkLCBtb2QsIHNpZ24pIC8vIHJlbW92ZXMgeWVhci9tb250aC9kYXlcbiAgICAgIDogZFxuXG4gIGZvciAoY29uc3Qga2V5IGluIG1vZCkge1xuICAgIGNvbnN0IG9wID0gY2FwaXRhbGl6ZShrZXkpXG4gICAgdFsgYHNldCR7IG9wIH1gIF0odFsgYGdldCR7IG9wIH1gIF0oKSArIHNpZ24gKiBtb2RbIGtleSBdKVxuICB9XG5cbiAgcmV0dXJuIHRcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplTW9kIChtb2QpIHtcbiAgY29uc3QgYWNjID0geyAuLi5tb2QgfVxuXG4gIGlmIChtb2QueWVhcnMgIT09IHZvaWQgMCkge1xuICAgIGFjYy55ZWFyID0gbW9kLnllYXJzXG4gICAgZGVsZXRlIGFjYy55ZWFyc1xuICB9XG5cbiAgaWYgKG1vZC5tb250aHMgIT09IHZvaWQgMCkge1xuICAgIGFjYy5tb250aCA9IG1vZC5tb250aHNcbiAgICBkZWxldGUgYWNjLm1vbnRoc1xuICB9XG5cbiAgaWYgKG1vZC5kYXlzICE9PSB2b2lkIDApIHtcbiAgICBhY2MuZGF0ZSA9IG1vZC5kYXlzXG4gICAgZGVsZXRlIGFjYy5kYXlzXG4gIH1cbiAgaWYgKG1vZC5kYXkgIT09IHZvaWQgMCkge1xuICAgIGFjYy5kYXRlID0gbW9kLmRheVxuICAgIGRlbGV0ZSBhY2MuZGF5XG4gIH1cblxuICBpZiAobW9kLmhvdXIgIT09IHZvaWQgMCkge1xuICAgIGFjYy5ob3VycyA9IG1vZC5ob3VyXG4gICAgZGVsZXRlIGFjYy5ob3VyXG4gIH1cblxuICBpZiAobW9kLm1pbnV0ZSAhPT0gdm9pZCAwKSB7XG4gICAgYWNjLm1pbnV0ZXMgPSBtb2QubWludXRlXG4gICAgZGVsZXRlIGFjYy5taW51dGVcbiAgfVxuXG4gIGlmIChtb2Quc2Vjb25kICE9PSB2b2lkIDApIHtcbiAgICBhY2Muc2Vjb25kcyA9IG1vZC5zZWNvbmRcbiAgICBkZWxldGUgYWNjLnNlY29uZFxuICB9XG5cbiAgaWYgKG1vZC5taWxsaXNlY29uZCAhPT0gdm9pZCAwKSB7XG4gICAgYWNjLm1pbGxpc2Vjb25kcyA9IG1vZC5taWxsaXNlY29uZFxuICAgIGRlbGV0ZSBhY2MubWlsbGlzZWNvbmRcbiAgfVxuXG4gIHJldHVybiBhY2Ncbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkanVzdERhdGUgKGRhdGUsIHJhd01vZCwgdXRjKSB7XG4gIGNvbnN0XG4gICAgbW9kID0gbm9ybWFsaXplTW9kKHJhd01vZCksXG4gICAgbWlkZGxlID0gdXRjID09PSB0cnVlID8gJ1VUQycgOiAnJyxcbiAgICBkID0gbmV3IERhdGUoZGF0ZSksXG4gICAgdCA9IG1vZC55ZWFyICE9PSB2b2lkIDAgfHwgbW9kLm1vbnRoICE9PSB2b2lkIDAgfHwgbW9kLmRhdGUgIT09IHZvaWQgMFxuICAgICAgPyBhcHBseVllYXJNb250aERheShkLCBtb2QsIG1pZGRsZSkgLy8gcmVtb3ZlcyB5ZWFyL21vbnRoL2RheVxuICAgICAgOiBkXG5cbiAgZm9yIChjb25zdCBrZXkgaW4gbW9kKSB7XG4gICAgY29uc3Qgb3AgPSBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSlcbiAgICB0WyBgc2V0JHsgbWlkZGxlIH0keyBvcCB9YCBdKG1vZFsga2V5IF0pXG4gIH1cblxuICByZXR1cm4gdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdERhdGUgKHN0ciwgbWFzaywgZGF0ZUxvY2FsZSkge1xuICBjb25zdCBkID0gX19zcGxpdERhdGUoc3RyLCBtYXNrLCBkYXRlTG9jYWxlKVxuXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShcbiAgICBkLnllYXIsXG4gICAgZC5tb250aCA9PT0gbnVsbCA/IG51bGwgOiBkLm1vbnRoIC0gMSxcbiAgICBkLmRheSA9PT0gbnVsbCA/IDEgOiBkLmRheSxcbiAgICBkLmhvdXIsXG4gICAgZC5taW51dGUsXG4gICAgZC5zZWNvbmQsXG4gICAgZC5taWxsaXNlY29uZFxuICApXG5cbiAgY29uc3QgdHpPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KClcblxuICByZXR1cm4gZC50aW1lem9uZU9mZnNldCA9PT0gbnVsbCB8fCBkLnRpbWV6b25lT2Zmc2V0ID09PSB0ek9mZnNldFxuICAgID8gZGF0ZVxuICAgIDogZ2V0Q2hhbmdlKGRhdGUsIHsgbWludXRlczogZC50aW1lem9uZU9mZnNldCAtIHR6T2Zmc2V0IH0sIDEpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NwbGl0RGF0ZSAoc3RyLCBtYXNrLCBkYXRlTG9jYWxlLCBjYWxlbmRhciwgZGVmYXVsdE1vZGVsKSB7XG4gIGNvbnN0IGRhdGUgPSB7XG4gICAgeWVhcjogbnVsbCxcbiAgICBtb250aDogbnVsbCxcbiAgICBkYXk6IG51bGwsXG4gICAgaG91cjogbnVsbCxcbiAgICBtaW51dGU6IG51bGwsXG4gICAgc2Vjb25kOiBudWxsLFxuICAgIG1pbGxpc2Vjb25kOiBudWxsLFxuICAgIHRpbWV6b25lT2Zmc2V0OiBudWxsLFxuICAgIGRhdGVIYXNoOiBudWxsLFxuICAgIHRpbWVIYXNoOiBudWxsXG4gIH1cblxuICBkZWZhdWx0TW9kZWwgIT09IHZvaWQgMCAmJiBPYmplY3QuYXNzaWduKGRhdGUsIGRlZmF1bHRNb2RlbClcblxuICBpZiAoXG4gICAgc3RyID09PSB2b2lkIDBcbiAgICB8fCBzdHIgPT09IG51bGxcbiAgICB8fCBzdHIgPT09ICcnXG4gICAgfHwgdHlwZW9mIHN0ciAhPT0gJ3N0cmluZydcbiAgKSB7XG4gICAgcmV0dXJuIGRhdGVcbiAgfVxuXG4gIGlmIChtYXNrID09PSB2b2lkIDApIHtcbiAgICBtYXNrID0gZGVmYXVsdE1hc2tcbiAgfVxuXG4gIGNvbnN0XG4gICAgbGFuZ09wdHMgPSBnZXREYXRlTG9jYWxlKGRhdGVMb2NhbGUsIExhbmcucHJvcHMpLFxuICAgIG1vbnRocyA9IGxhbmdPcHRzLm1vbnRocyxcbiAgICBtb250aHNTaG9ydCA9IGxhbmdPcHRzLm1vbnRoc1Nob3J0XG5cbiAgY29uc3QgeyByZWdleCwgbWFwIH0gPSBnZXRSZWdleERhdGEobWFzaywgbGFuZ09wdHMpXG5cbiAgY29uc3QgbWF0Y2ggPSBzdHIubWF0Y2gocmVnZXgpXG5cbiAgaWYgKG1hdGNoID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGRhdGVcbiAgfVxuXG4gIGxldCB0elN0cmluZyA9ICcnXG5cbiAgaWYgKG1hcC5YICE9PSB2b2lkIDAgfHwgbWFwLnggIT09IHZvaWQgMCkge1xuICAgIGNvbnN0IHN0YW1wID0gcGFyc2VJbnQobWF0Y2hbIG1hcC5YICE9PSB2b2lkIDAgPyBtYXAuWCA6IG1hcC54IF0sIDEwKVxuXG4gICAgaWYgKGlzTmFOKHN0YW1wKSA9PT0gdHJ1ZSB8fCBzdGFtcCA8IDApIHtcbiAgICAgIHJldHVybiBkYXRlXG4gICAgfVxuXG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKHN0YW1wICogKG1hcC5YICE9PSB2b2lkIDAgPyAxMDAwIDogMSkpXG5cbiAgICBkYXRlLnllYXIgPSBkLmdldEZ1bGxZZWFyKClcbiAgICBkYXRlLm1vbnRoID0gZC5nZXRNb250aCgpICsgMVxuICAgIGRhdGUuZGF5ID0gZC5nZXREYXRlKClcbiAgICBkYXRlLmhvdXIgPSBkLmdldEhvdXJzKClcbiAgICBkYXRlLm1pbnV0ZSA9IGQuZ2V0TWludXRlcygpXG4gICAgZGF0ZS5zZWNvbmQgPSBkLmdldFNlY29uZHMoKVxuICAgIGRhdGUubWlsbGlzZWNvbmQgPSBkLmdldE1pbGxpc2Vjb25kcygpXG4gIH1cbiAgZWxzZSB7XG4gICAgaWYgKG1hcC5ZWVlZICE9PSB2b2lkIDApIHtcbiAgICAgIGRhdGUueWVhciA9IHBhcnNlSW50KG1hdGNoWyBtYXAuWVlZWSBdLCAxMClcbiAgICB9XG4gICAgZWxzZSBpZiAobWFwLllZICE9PSB2b2lkIDApIHtcbiAgICAgIGNvbnN0IHkgPSBwYXJzZUludChtYXRjaFsgbWFwLllZIF0sIDEwKVxuICAgICAgZGF0ZS55ZWFyID0geSA8IDAgPyB5IDogMjAwMCArIHlcbiAgICB9XG5cbiAgICBpZiAobWFwLk0gIT09IHZvaWQgMCkge1xuICAgICAgZGF0ZS5tb250aCA9IHBhcnNlSW50KG1hdGNoWyBtYXAuTSBdLCAxMClcbiAgICAgIGlmIChkYXRlLm1vbnRoIDwgMSB8fCBkYXRlLm1vbnRoID4gMTIpIHtcbiAgICAgICAgcmV0dXJuIGRhdGVcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobWFwLk1NTSAhPT0gdm9pZCAwKSB7XG4gICAgICBkYXRlLm1vbnRoID0gbW9udGhzU2hvcnQuaW5kZXhPZihtYXRjaFsgbWFwLk1NTSBdKSArIDFcbiAgICB9XG4gICAgZWxzZSBpZiAobWFwLk1NTU0gIT09IHZvaWQgMCkge1xuICAgICAgZGF0ZS5tb250aCA9IG1vbnRocy5pbmRleE9mKG1hdGNoWyBtYXAuTU1NTSBdKSArIDFcbiAgICB9XG5cbiAgICBpZiAobWFwLkQgIT09IHZvaWQgMCkge1xuICAgICAgZGF0ZS5kYXkgPSBwYXJzZUludChtYXRjaFsgbWFwLkQgXSwgMTApXG5cbiAgICAgIGlmIChkYXRlLnllYXIgPT09IG51bGwgfHwgZGF0ZS5tb250aCA9PT0gbnVsbCB8fCBkYXRlLmRheSA8IDEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGVcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWF4RGF5ID0gY2FsZW5kYXIgIT09ICdwZXJzaWFuJ1xuICAgICAgICA/IChuZXcgRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGgsIDApKS5nZXREYXRlKClcbiAgICAgICAgOiBqYWxhYWxpTW9udGhMZW5ndGgoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoKVxuXG4gICAgICBpZiAoZGF0ZS5kYXkgPiBtYXhEYXkpIHtcbiAgICAgICAgcmV0dXJuIGRhdGVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWFwLkggIT09IHZvaWQgMCkge1xuICAgICAgZGF0ZS5ob3VyID0gcGFyc2VJbnQobWF0Y2hbIG1hcC5IIF0sIDEwKSAlIDI0XG4gICAgfVxuICAgIGVsc2UgaWYgKG1hcC5oICE9PSB2b2lkIDApIHtcbiAgICAgIGRhdGUuaG91ciA9IHBhcnNlSW50KG1hdGNoWyBtYXAuaCBdLCAxMCkgJSAxMlxuICAgICAgaWYgKFxuICAgICAgICAobWFwLkEgJiYgbWF0Y2hbIG1hcC5BIF0gPT09ICdQTScpXG4gICAgICAgIHx8IChtYXAuYSAmJiBtYXRjaFsgbWFwLmEgXSA9PT0gJ3BtJylcbiAgICAgICAgfHwgKG1hcC5hYSAmJiBtYXRjaFsgbWFwLmFhIF0gPT09ICdwLm0uJylcbiAgICAgICkge1xuICAgICAgICBkYXRlLmhvdXIgKz0gMTJcbiAgICAgIH1cbiAgICAgIGRhdGUuaG91ciA9IGRhdGUuaG91ciAlIDI0XG4gICAgfVxuXG4gICAgaWYgKG1hcC5tICE9PSB2b2lkIDApIHtcbiAgICAgIGRhdGUubWludXRlID0gcGFyc2VJbnQobWF0Y2hbIG1hcC5tIF0sIDEwKSAlIDYwXG4gICAgfVxuXG4gICAgaWYgKG1hcC5zICE9PSB2b2lkIDApIHtcbiAgICAgIGRhdGUuc2Vjb25kID0gcGFyc2VJbnQobWF0Y2hbIG1hcC5zIF0sIDEwKSAlIDYwXG4gICAgfVxuXG4gICAgaWYgKG1hcC5TICE9PSB2b2lkIDApIHtcbiAgICAgIGRhdGUubWlsbGlzZWNvbmQgPSBwYXJzZUludChtYXRjaFsgbWFwLlMgXSwgMTApICogMTAgKiogKDMgLSBtYXRjaFsgbWFwLlMgXS5sZW5ndGgpXG4gICAgfVxuXG4gICAgaWYgKG1hcC5aICE9PSB2b2lkIDAgfHwgbWFwLlpaICE9PSB2b2lkIDApIHtcbiAgICAgIHR6U3RyaW5nID0gKG1hcC5aICE9PSB2b2lkIDAgPyBtYXRjaFsgbWFwLlogXS5yZXBsYWNlKCc6JywgJycpIDogbWF0Y2hbIG1hcC5aWiBdKVxuICAgICAgZGF0ZS50aW1lem9uZU9mZnNldCA9ICh0elN0cmluZ1sgMCBdID09PSAnKycgPyAtMSA6IDEpICogKDYwICogdHpTdHJpbmcuc2xpY2UoMSwgMykgKyAxICogdHpTdHJpbmcuc2xpY2UoMywgNSkpXG4gICAgfVxuICB9XG5cbiAgZGF0ZS5kYXRlSGFzaCA9IHBhZChkYXRlLnllYXIsIDYpICsgJy8nICsgcGFkKGRhdGUubW9udGgpICsgJy8nICsgcGFkKGRhdGUuZGF5KVxuICBkYXRlLnRpbWVIYXNoID0gcGFkKGRhdGUuaG91cikgKyAnOicgKyBwYWQoZGF0ZS5taW51dGUpICsgJzonICsgcGFkKGRhdGUuc2Vjb25kKSArIHR6U3RyaW5nXG5cbiAgcmV0dXJuIGRhdGVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWQgKGRhdGUpIHtcbiAgcmV0dXJuIHR5cGVvZiBkYXRlID09PSAnbnVtYmVyJ1xuICAgID8gdHJ1ZVxuICAgIDogaXNOYU4oRGF0ZS5wYXJzZShkYXRlKSkgPT09IGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZERhdGUgKG1vZCwgdXRjKSB7XG4gIHJldHVybiBhZGp1c3REYXRlKG5ldyBEYXRlKCksIG1vZCwgdXRjKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5T2ZXZWVrIChkYXRlKSB7XG4gIGNvbnN0IGRvdyA9IG5ldyBEYXRlKGRhdGUpLmdldERheSgpXG4gIHJldHVybiBkb3cgPT09IDAgPyA3IDogZG93XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrT2ZZZWFyIChkYXRlKSB7XG4gIC8vIFJlbW92ZSB0aW1lIGNvbXBvbmVudHMgb2YgZGF0ZVxuICBjb25zdCB0aHVyc2RheSA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSlcblxuICAvLyBDaGFuZ2UgZGF0ZSB0byBUaHVyc2RheSBzYW1lIHdlZWtcbiAgdGh1cnNkYXkuc2V0RGF0ZSh0aHVyc2RheS5nZXREYXRlKCkgLSAoKHRodXJzZGF5LmdldERheSgpICsgNikgJSA3KSArIDMpXG5cbiAgLy8gVGFrZSBKYW51YXJ5IDR0aCBhcyBpdCBpcyBhbHdheXMgaW4gd2VlayAxIChzZWUgSVNPIDg2MDEpXG4gIGNvbnN0IGZpcnN0VGh1cnNkYXkgPSBuZXcgRGF0ZSh0aHVyc2RheS5nZXRGdWxsWWVhcigpLCAwLCA0KVxuXG4gIC8vIENoYW5nZSBkYXRlIHRvIFRodXJzZGF5IHNhbWUgd2Vla1xuICBmaXJzdFRodXJzZGF5LnNldERhdGUoZmlyc3RUaHVyc2RheS5nZXREYXRlKCkgLSAoKGZpcnN0VGh1cnNkYXkuZ2V0RGF5KCkgKyA2KSAlIDcpICsgMylcblxuICAvLyBDaGVjayBpZiBkYXlsaWdodC1zYXZpbmctdGltZS1zd2l0Y2ggb2NjdXJyZWQgYW5kIGNvcnJlY3QgZm9yIGl0XG4gIGNvbnN0IGRzID0gdGh1cnNkYXkuZ2V0VGltZXpvbmVPZmZzZXQoKSAtIGZpcnN0VGh1cnNkYXkuZ2V0VGltZXpvbmVPZmZzZXQoKVxuICB0aHVyc2RheS5zZXRIb3Vycyh0aHVyc2RheS5nZXRIb3VycygpIC0gZHMpXG5cbiAgLy8gTnVtYmVyIG9mIHdlZWtzIGJldHdlZW4gdGFyZ2V0IFRodXJzZGF5IGFuZCBmaXJzdCBUaHVyc2RheVxuICBjb25zdCB3ZWVrRGlmZiA9ICh0aHVyc2RheSAtIGZpcnN0VGh1cnNkYXkpIC8gKE1JTExJU0VDT05EU19JTl9EQVkgKiA3KVxuICByZXR1cm4gMSArIE1hdGguZmxvb3Iod2Vla0RpZmYpXG59XG5cbmZ1bmN0aW9uIGdldERheUlkZW50aWZpZXIgKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKSAqIDEwMDAwICsgZGF0ZS5nZXRNb250aCgpICogMTAwICsgZGF0ZS5nZXREYXRlKClcbn1cblxuZnVuY3Rpb24gZ2V0RGF0ZUlkZW50aWZpZXIgKGRhdGUsIG9ubHlEYXRlIC8qID0gZmFsc2UgKi8pIHtcbiAgY29uc3QgZCA9IG5ldyBEYXRlKGRhdGUpXG4gIHJldHVybiBvbmx5RGF0ZSA9PT0gdHJ1ZSA/IGdldERheUlkZW50aWZpZXIoZCkgOiBkLmdldFRpbWUoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNCZXR3ZWVuRGF0ZXMgKGRhdGUsIGZyb20sIHRvLCBvcHRzID0ge30pIHtcbiAgY29uc3RcbiAgICBkMSA9IGdldERhdGVJZGVudGlmaWVyKGZyb20sIG9wdHMub25seURhdGUpLFxuICAgIGQyID0gZ2V0RGF0ZUlkZW50aWZpZXIodG8sIG9wdHMub25seURhdGUpLFxuICAgIGN1ciA9IGdldERhdGVJZGVudGlmaWVyKGRhdGUsIG9wdHMub25seURhdGUpXG5cbiAgcmV0dXJuIChjdXIgPiBkMSB8fCAob3B0cy5pbmNsdXNpdmVGcm9tID09PSB0cnVlICYmIGN1ciA9PT0gZDEpKVxuICAgICYmIChjdXIgPCBkMiB8fCAob3B0cy5pbmNsdXNpdmVUbyA9PT0gdHJ1ZSAmJiBjdXIgPT09IGQyKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvRGF0ZSAoZGF0ZSwgbW9kKSB7XG4gIHJldHVybiBnZXRDaGFuZ2UoZGF0ZSwgbW9kLCAxKVxufVxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0RnJvbURhdGUgKGRhdGUsIG1vZCkge1xuICByZXR1cm4gZ2V0Q2hhbmdlKGRhdGUsIG1vZCwgLTEpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mRGF0ZSAoZGF0ZSwgdW5pdCwgdXRjKSB7XG4gIGNvbnN0XG4gICAgdCA9IG5ldyBEYXRlKGRhdGUpLFxuICAgIHByZWZpeCA9IGBzZXQkeyB1dGMgPT09IHRydWUgPyAnVVRDJyA6ICcnIH1gXG5cbiAgc3dpdGNoICh1bml0KSB7XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneWVhcnMnOlxuICAgICAgdFsgYCR7IHByZWZpeCB9TW9udGhgIF0oMClcbiAgICBjYXNlICdtb250aCc6XG4gICAgY2FzZSAnbW9udGhzJzpcbiAgICAgIHRbIGAkeyBwcmVmaXggfURhdGVgIF0oMSlcbiAgICBjYXNlICdkYXknOlxuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgdFsgYCR7IHByZWZpeCB9SG91cnNgIF0oMClcbiAgICBjYXNlICdob3VyJzpcbiAgICBjYXNlICdob3Vycyc6XG4gICAgICB0WyBgJHsgcHJlZml4IH1NaW51dGVzYCBdKDApXG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICAgIHRbIGAkeyBwcmVmaXggfVNlY29uZHNgIF0oMClcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgICAgdFsgYCR7IHByZWZpeCB9TWlsbGlzZWNvbmRzYCBdKDApXG4gIH1cbiAgcmV0dXJuIHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuZE9mRGF0ZSAoZGF0ZSwgdW5pdCwgdXRjKSB7XG4gIGNvbnN0XG4gICAgdCA9IG5ldyBEYXRlKGRhdGUpLFxuICAgIHByZWZpeCA9IGBzZXQkeyB1dGMgPT09IHRydWUgPyAnVVRDJyA6ICcnIH1gXG5cbiAgc3dpdGNoICh1bml0KSB7XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneWVhcnMnOlxuICAgICAgdFsgYCR7IHByZWZpeCB9TW9udGhgIF0oMTEpXG4gICAgY2FzZSAnbW9udGgnOlxuICAgIGNhc2UgJ21vbnRocyc6XG4gICAgICB0WyBgJHsgcHJlZml4IH1EYXRlYCBdKGRheXNJbk1vbnRoKHQpKVxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF0ZSc6XG4gICAgICB0WyBgJHsgcHJlZml4IH1Ib3Vyc2AgXSgyMylcbiAgICBjYXNlICdob3VyJzpcbiAgICBjYXNlICdob3Vycyc6XG4gICAgICB0WyBgJHsgcHJlZml4IH1NaW51dGVzYCBdKDU5KVxuICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgICB0WyBgJHsgcHJlZml4IH1TZWNvbmRzYCBdKDU5KVxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgICB0WyBgJHsgcHJlZml4IH1NaWxsaXNlY29uZHNgIF0oOTk5KVxuICB9XG4gIHJldHVybiB0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXhEYXRlIChkYXRlIC8qICwgLi4uYXJncyAqLykge1xuICBsZXQgdCA9IG5ldyBEYXRlKGRhdGUpXG4gIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkuZm9yRWFjaChkID0+IHtcbiAgICB0ID0gTWF0aC5tYXgodCwgbmV3IERhdGUoZCkpXG4gIH0pXG4gIHJldHVybiB0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNaW5EYXRlIChkYXRlIC8qLCAuLi5hcmdzICovKSB7XG4gIGxldCB0ID0gbmV3IERhdGUoZGF0ZSlcbiAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKS5mb3JFYWNoKGQgPT4ge1xuICAgIHQgPSBNYXRoLm1pbih0LCBuZXcgRGF0ZShkKSlcbiAgfSlcbiAgcmV0dXJuIHRcbn1cblxuZnVuY3Rpb24gZ2V0RGlmZiAodCwgc3ViLCBpbnRlcnZhbCkge1xuICByZXR1cm4gKFxuICAgICh0LmdldFRpbWUoKSAtIHQuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIE1JTExJU0VDT05EU19JTl9NSU5VVEUpXG4gICAgLSAoc3ViLmdldFRpbWUoKSAtIHN1Yi5nZXRUaW1lem9uZU9mZnNldCgpICogTUlMTElTRUNPTkRTX0lOX01JTlVURSlcbiAgKSAvIGludGVydmFsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRlRGlmZiAoZGF0ZSwgc3VidHJhY3QsIHVuaXQgPSAnZGF5cycpIHtcbiAgY29uc3RcbiAgICB0ID0gbmV3IERhdGUoZGF0ZSksXG4gICAgc3ViID0gbmV3IERhdGUoc3VidHJhY3QpXG5cbiAgc3dpdGNoICh1bml0KSB7XG4gICAgY2FzZSAneWVhcnMnOlxuICAgIGNhc2UgJ3llYXInOlxuICAgICAgcmV0dXJuICh0LmdldEZ1bGxZZWFyKCkgLSBzdWIuZ2V0RnVsbFllYXIoKSlcblxuICAgIGNhc2UgJ21vbnRocyc6XG4gICAgY2FzZSAnbW9udGgnOlxuICAgICAgcmV0dXJuICh0LmdldEZ1bGxZZWFyKCkgLSBzdWIuZ2V0RnVsbFllYXIoKSkgKiAxMiArIHQuZ2V0TW9udGgoKSAtIHN1Yi5nZXRNb250aCgpXG5cbiAgICBjYXNlICdkYXlzJzpcbiAgICBjYXNlICdkYXknOlxuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgcmV0dXJuIGdldERpZmYoc3RhcnRPZkRhdGUodCwgJ2RheScpLCBzdGFydE9mRGF0ZShzdWIsICdkYXknKSwgTUlMTElTRUNPTkRTX0lOX0RBWSlcblxuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICBjYXNlICdob3VyJzpcbiAgICAgIHJldHVybiBnZXREaWZmKHN0YXJ0T2ZEYXRlKHQsICdob3VyJyksIHN0YXJ0T2ZEYXRlKHN1YiwgJ2hvdXInKSwgTUlMTElTRUNPTkRTX0lOX0hPVVIpXG5cbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICBjYXNlICdtaW51dGUnOlxuICAgICAgcmV0dXJuIGdldERpZmYoc3RhcnRPZkRhdGUodCwgJ21pbnV0ZScpLCBzdGFydE9mRGF0ZShzdWIsICdtaW51dGUnKSwgTUlMTElTRUNPTkRTX0lOX01JTlVURSlcblxuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICByZXR1cm4gZ2V0RGlmZihzdGFydE9mRGF0ZSh0LCAnc2Vjb25kJyksIHN0YXJ0T2ZEYXRlKHN1YiwgJ3NlY29uZCcpLCAxMDAwKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlPZlllYXIgKGRhdGUpIHtcbiAgcmV0dXJuIGdldERhdGVEaWZmKGRhdGUsIHN0YXJ0T2ZEYXRlKGRhdGUsICd5ZWFyJyksICdkYXlzJykgKyAxXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmZlckRhdGVGb3JtYXQgKGRhdGUpIHtcbiAgcmV0dXJuIGlzRGF0ZShkYXRlKSA9PT0gdHJ1ZVxuICAgID8gJ2RhdGUnXG4gICAgOiAodHlwZW9mIGRhdGUgPT09ICdudW1iZXInID8gJ251bWJlcicgOiAnc3RyaW5nJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGVCZXR3ZWVuIChkYXRlLCBtaW4sIG1heCkge1xuICBjb25zdCB0ID0gbmV3IERhdGUoZGF0ZSlcblxuICBpZiAobWluKSB7XG4gICAgY29uc3QgbG93ID0gbmV3IERhdGUobWluKVxuICAgIGlmICh0IDwgbG93KSB7XG4gICAgICByZXR1cm4gbG93XG4gICAgfVxuICB9XG5cbiAgaWYgKG1heCkge1xuICAgIGNvbnN0IGhpZ2ggPSBuZXcgRGF0ZShtYXgpXG4gICAgaWYgKHQgPiBoaWdoKSB7XG4gICAgICByZXR1cm4gaGlnaFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVEYXRlIChkYXRlLCBkYXRlMiwgdW5pdCkge1xuICBjb25zdFxuICAgIHQgPSBuZXcgRGF0ZShkYXRlKSxcbiAgICBkID0gbmV3IERhdGUoZGF0ZTIpXG5cbiAgaWYgKHVuaXQgPT09IHZvaWQgMCkge1xuICAgIHJldHVybiB0LmdldFRpbWUoKSA9PT0gZC5nZXRUaW1lKClcbiAgfVxuXG4gIHN3aXRjaCAodW5pdCkge1xuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgICBpZiAodC5nZXRTZWNvbmRzKCkgIT09IGQuZ2V0U2Vjb25kcygpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIGNhc2UgJ21pbnV0ZSc6IC8vIGludGVudGlvbmFsIGZhbGwtdGhyb3VnaFxuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgICAgaWYgKHQuZ2V0TWludXRlcygpICE9PSBkLmdldE1pbnV0ZXMoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICBjYXNlICdob3VyJzogLy8gaW50ZW50aW9uYWwgZmFsbC10aHJvdWdoXG4gICAgY2FzZSAnaG91cnMnOlxuICAgICAgaWYgKHQuZ2V0SG91cnMoKSAhPT0gZC5nZXRIb3VycygpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIGNhc2UgJ2RheSc6IC8vIGludGVudGlvbmFsIGZhbGwtdGhyb3VnaFxuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgaWYgKHQuZ2V0RGF0ZSgpICE9PSBkLmdldERhdGUoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICBjYXNlICdtb250aCc6IC8vIGludGVudGlvbmFsIGZhbGwtdGhyb3VnaFxuICAgIGNhc2UgJ21vbnRocyc6XG4gICAgICBpZiAodC5nZXRNb250aCgpICE9PSBkLmdldE1vbnRoKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgY2FzZSAneWVhcic6IC8vIGludGVudGlvbmFsIGZhbGwtdGhyb3VnaFxuICAgIGNhc2UgJ3llYXJzJzpcbiAgICAgIGlmICh0LmdldEZ1bGxZZWFyKCkgIT09IGQuZ2V0RnVsbFllYXIoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihgZGF0ZSBpc1NhbWVEYXRlIHVua25vd24gdW5pdCAkeyB1bml0IH1gKVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRheXNJbk1vbnRoIChkYXRlKSB7XG4gIHJldHVybiAobmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgKyAxLCAwKSkuZ2V0RGF0ZSgpXG59XG5cbmZ1bmN0aW9uIGdldE9yZGluYWwgKG4pIHtcbiAgaWYgKG4gPj0gMTEgJiYgbiA8PSAxMykge1xuICAgIHJldHVybiBgJHsgbiB9dGhgXG4gIH1cbiAgc3dpdGNoIChuICUgMTApIHtcbiAgICBjYXNlIDE6IHJldHVybiBgJHsgbiB9c3RgXG4gICAgY2FzZSAyOiByZXR1cm4gYCR7IG4gfW5kYFxuICAgIGNhc2UgMzogcmV0dXJuIGAkeyBuIH1yZGBcbiAgfVxuICByZXR1cm4gYCR7IG4gfXRoYFxufVxuXG5jb25zdCBmb3JtYXR0ZXIgPSB7XG4gIC8vIFllYXI6IDAwLCAwMSwgLi4uLCA5OVxuICBZWSAoZGF0ZSwgZGF0ZUxvY2FsZSwgZm9yY2VkWWVhcikge1xuICAgIC8vIHdvcmthcm91bmQgZm9yIDwgMTkwMCB3aXRoIG5ldyBEYXRlKClcbiAgICBjb25zdCB5ID0gdGhpcy5ZWVlZKGRhdGUsIGRhdGVMb2NhbGUsIGZvcmNlZFllYXIpICUgMTAwXG4gICAgcmV0dXJuIHkgPj0gMFxuICAgICAgPyBwYWQoeSlcbiAgICAgIDogJy0nICsgcGFkKE1hdGguYWJzKHkpKVxuICB9LFxuXG4gIC8vIFllYXI6IDE5MDAsIDE5MDEsIC4uLiwgMjA5OVxuICBZWVlZIChkYXRlLCBfZGF0ZUxvY2FsZSwgZm9yY2VkWWVhcikge1xuICAgIC8vIHdvcmthcm91bmQgZm9yIDwgMTkwMCB3aXRoIG5ldyBEYXRlKClcbiAgICByZXR1cm4gZm9yY2VkWWVhciAhPT0gdm9pZCAwICYmIGZvcmNlZFllYXIgIT09IG51bGxcbiAgICAgID8gZm9yY2VkWWVhclxuICAgICAgOiBkYXRlLmdldEZ1bGxZZWFyKClcbiAgfSxcblxuICAvLyBNb250aDogMSwgMiwgLi4uLCAxMlxuICBNIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0TW9udGgoKSArIDFcbiAgfSxcblxuICAvLyBNb250aDogMDEsIDAyLCAuLi4sIDEyXG4gIE1NIChkYXRlKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlLmdldE1vbnRoKCkgKyAxKVxuICB9LFxuXG4gIC8vIE1vbnRoIFNob3J0IE5hbWU6IEphbiwgRmViLCAuLi5cbiAgTU1NIChkYXRlLCBkYXRlTG9jYWxlKSB7XG4gICAgcmV0dXJuIGRhdGVMb2NhbGUubW9udGhzU2hvcnRbIGRhdGUuZ2V0TW9udGgoKSBdXG4gIH0sXG5cbiAgLy8gTW9udGggTmFtZTogSmFudWFyeSwgRmVicnVhcnksIC4uLlxuICBNTU1NIChkYXRlLCBkYXRlTG9jYWxlKSB7XG4gICAgcmV0dXJuIGRhdGVMb2NhbGUubW9udGhzWyBkYXRlLmdldE1vbnRoKCkgXVxuICB9LFxuXG4gIC8vIFF1YXJ0ZXI6IDEsIDIsIDMsIDRcbiAgUSAoZGF0ZSkge1xuICAgIHJldHVybiBNYXRoLmNlaWwoKGRhdGUuZ2V0TW9udGgoKSArIDEpIC8gMylcbiAgfSxcblxuICAvLyBRdWFydGVyOiAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgUW8gKGRhdGUpIHtcbiAgICByZXR1cm4gZ2V0T3JkaW5hbCh0aGlzLlEoZGF0ZSkpXG4gIH0sXG5cbiAgLy8gRGF5IG9mIG1vbnRoOiAxLCAyLCAuLi4sIDMxXG4gIEQgKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXREYXRlKClcbiAgfSxcblxuICAvLyBEYXkgb2YgbW9udGg6IDFzdCwgMm5kLCAuLi4sIDMxc3RcbiAgRG8gKGRhdGUpIHtcbiAgICByZXR1cm4gZ2V0T3JkaW5hbChkYXRlLmdldERhdGUoKSlcbiAgfSxcblxuICAvLyBEYXkgb2YgbW9udGg6IDAxLCAwMiwgLi4uLCAzMVxuICBERCAoZGF0ZSkge1xuICAgIHJldHVybiBwYWQoZGF0ZS5nZXREYXRlKCkpXG4gIH0sXG5cbiAgLy8gRGF5IG9mIHllYXI6IDEsIDIsIC4uLiwgMzY2XG4gIERERCAoZGF0ZSkge1xuICAgIHJldHVybiBnZXREYXlPZlllYXIoZGF0ZSlcbiAgfSxcblxuICAvLyBEYXkgb2YgeWVhcjogMDAxLCAwMDIsIC4uLiwgMzY2XG4gIEREREQgKGRhdGUpIHtcbiAgICByZXR1cm4gcGFkKGdldERheU9mWWVhcihkYXRlKSwgMylcbiAgfSxcblxuICAvLyBEYXkgb2Ygd2VlazogMCwgMSwgLi4uLCA2XG4gIGQgKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXREYXkoKVxuICB9LFxuXG4gIC8vIERheSBvZiB3ZWVrOiBTdSwgTW8sIC4uLlxuICBkZCAoZGF0ZSwgZGF0ZUxvY2FsZSkge1xuICAgIHJldHVybiB0aGlzLmRkZGQoZGF0ZSwgZGF0ZUxvY2FsZSkuc2xpY2UoMCwgMilcbiAgfSxcblxuICAvLyBEYXkgb2Ygd2VlazogU3VuLCBNb24sIC4uLlxuICBkZGQgKGRhdGUsIGRhdGVMb2NhbGUpIHtcbiAgICByZXR1cm4gZGF0ZUxvY2FsZS5kYXlzU2hvcnRbIGRhdGUuZ2V0RGF5KCkgXVxuICB9LFxuXG4gIC8vIERheSBvZiB3ZWVrOiBTdW5kYXksIE1vbmRheSwgLi4uXG4gIGRkZGQgKGRhdGUsIGRhdGVMb2NhbGUpIHtcbiAgICByZXR1cm4gZGF0ZUxvY2FsZS5kYXlzWyBkYXRlLmdldERheSgpIF1cbiAgfSxcblxuICAvLyBEYXkgb2YgSVNPIHdlZWs6IDEsIDIsIC4uLiwgN1xuICBFIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0RGF5KCkgfHwgN1xuICB9LFxuXG4gIC8vIFdlZWsgb2YgWWVhcjogMSAyIC4uLiA1MiA1M1xuICB3IChkYXRlKSB7XG4gICAgcmV0dXJuIGdldFdlZWtPZlllYXIoZGF0ZSlcbiAgfSxcblxuICAvLyBXZWVrIG9mIFllYXI6IDAxIDAyIC4uLiA1MiA1M1xuICB3dyAoZGF0ZSkge1xuICAgIHJldHVybiBwYWQoZ2V0V2Vla09mWWVhcihkYXRlKSlcbiAgfSxcblxuICAvLyBIb3VyOiAwLCAxLCAuLi4gMjNcbiAgSCAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldEhvdXJzKClcbiAgfSxcblxuICAvLyBIb3VyOiAwMCwgMDEsIC4uLiwgMjNcbiAgSEggKGRhdGUpIHtcbiAgICByZXR1cm4gcGFkKGRhdGUuZ2V0SG91cnMoKSlcbiAgfSxcblxuICAvLyBIb3VyOiAxLCAyLCAuLi4sIDEyXG4gIGggKGRhdGUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKVxuICAgIHJldHVybiBob3VycyA9PT0gMFxuICAgICAgPyAxMlxuICAgICAgOiAoaG91cnMgPiAxMiA/IGhvdXJzICUgMTIgOiBob3VycylcbiAgfSxcblxuICAvLyBIb3VyOiAwMSwgMDIsIC4uLiwgMTJcbiAgaGggKGRhdGUpIHtcbiAgICByZXR1cm4gcGFkKHRoaXMuaChkYXRlKSlcbiAgfSxcblxuICAvLyBNaW51dGU6IDAsIDEsIC4uLiwgNTlcbiAgbSAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldE1pbnV0ZXMoKVxuICB9LFxuXG4gIC8vIE1pbnV0ZTogMDAsIDAxLCAuLi4sIDU5XG4gIG1tIChkYXRlKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlLmdldE1pbnV0ZXMoKSlcbiAgfSxcblxuICAvLyBTZWNvbmQ6IDAsIDEsIC4uLiwgNTlcbiAgcyAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldFNlY29uZHMoKVxuICB9LFxuXG4gIC8vIFNlY29uZDogMDAsIDAxLCAuLi4sIDU5XG4gIHNzIChkYXRlKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlLmdldFNlY29uZHMoKSlcbiAgfSxcblxuICAvLyAxLzEwIG9mIHNlY29uZDogMCwgMSwgLi4uLCA5XG4gIFMgKGRhdGUpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihkYXRlLmdldE1pbGxpc2Vjb25kcygpIC8gMTAwKVxuICB9LFxuXG4gIC8vIDEvMTAwIG9mIHNlY29uZDogMDAsIDAxLCAuLi4sIDk5XG4gIFNTIChkYXRlKSB7XG4gICAgcmV0dXJuIHBhZChNYXRoLmZsb29yKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgLyAxMCkpXG4gIH0sXG5cbiAgLy8gTWlsbGlzZWNvbmQ6IDAwMCwgMDAxLCAuLi4sIDk5OVxuICBTU1MgKGRhdGUpIHtcbiAgICByZXR1cm4gcGFkKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCksIDMpXG4gIH0sXG5cbiAgLy8gTWVyaWRpZW06IEFNLCBQTVxuICBBIChkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuSChkYXRlKSA8IDEyID8gJ0FNJyA6ICdQTSdcbiAgfSxcblxuICAvLyBNZXJpZGllbTogYW0sIHBtXG4gIGEgKGRhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5IKGRhdGUpIDwgMTIgPyAnYW0nIDogJ3BtJ1xuICB9LFxuXG4gIC8vIE1lcmlkaWVtOiBhLm0uLCBwLm0uXG4gIGFhIChkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuSChkYXRlKSA8IDEyID8gJ2EubS4nIDogJ3AubS4nXG4gIH0sXG5cbiAgLy8gVGltZXpvbmU6IC0wMTowMCwgKzAwOjAwLCAuLi4gKzEyOjAwXG4gIFogKGRhdGUsIF9kYXRlTG9jYWxlLCBfZm9yY2VkWWVhciwgZm9yY2VkVGltZXpvbmVPZmZzZXQpIHtcbiAgICBjb25zdCB0ek9mZnNldCA9IGZvcmNlZFRpbWV6b25lT2Zmc2V0ID09PSB2b2lkIDAgfHwgZm9yY2VkVGltZXpvbmVPZmZzZXQgPT09IG51bGxcbiAgICAgID8gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpXG4gICAgICA6IGZvcmNlZFRpbWV6b25lT2Zmc2V0XG5cbiAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodHpPZmZzZXQsICc6JylcbiAgfSxcblxuICAvLyBUaW1lem9uZTogLTAxMDAsICswMDAwLCAuLi4gKzEyMDBcbiAgWlogKGRhdGUsIF9kYXRlTG9jYWxlLCBfZm9yY2VkWWVhciwgZm9yY2VkVGltZXpvbmVPZmZzZXQpIHtcbiAgICBjb25zdCB0ek9mZnNldCA9IGZvcmNlZFRpbWV6b25lT2Zmc2V0ID09PSB2b2lkIDAgfHwgZm9yY2VkVGltZXpvbmVPZmZzZXQgPT09IG51bGxcbiAgICAgID8gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpXG4gICAgICA6IGZvcmNlZFRpbWV6b25lT2Zmc2V0XG5cbiAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodHpPZmZzZXQpXG4gIH0sXG5cbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXA6IDUxMjk2OTUyMFxuICBYIChkYXRlKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoZGF0ZS5nZXRUaW1lKCkgLyAxMDAwKVxuICB9LFxuXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXA6IDUxMjk2OTUyMDkwMFxuICB4IChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUgKHZhbCwgbWFzaywgZGF0ZUxvY2FsZSwgX19mb3JjZWRZZWFyLCBfX2ZvcmNlZFRpbWV6b25lT2Zmc2V0KSB7XG4gIGlmIChcbiAgICAodmFsICE9PSAwICYmICF2YWwpXG4gICAgfHwgdmFsID09PSBJbmZpbml0eVxuICAgIHx8IHZhbCA9PT0gLUluZmluaXR5XG4gICkge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHZhbClcblxuICBpZiAoaXNOYU4oZGF0ZSkpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChtYXNrID09PSB2b2lkIDApIHtcbiAgICBtYXNrID0gZGVmYXVsdE1hc2tcbiAgfVxuXG4gIGNvbnN0IGxvY2FsZSA9IGdldERhdGVMb2NhbGUoZGF0ZUxvY2FsZSwgTGFuZy5wcm9wcylcblxuICByZXR1cm4gbWFzay5yZXBsYWNlKFxuICAgIHRva2VuLFxuICAgIChtYXRjaCwgdGV4dCkgPT4gKFxuICAgICAgbWF0Y2ggaW4gZm9ybWF0dGVyXG4gICAgICAgID8gZm9ybWF0dGVyWyBtYXRjaCBdKGRhdGUsIGxvY2FsZSwgX19mb3JjZWRZZWFyLCBfX2ZvcmNlZFRpbWV6b25lT2Zmc2V0KVxuICAgICAgICA6ICh0ZXh0ID09PSB2b2lkIDAgPyBtYXRjaCA6IHRleHQuc3BsaXQoJ1xcXFxdJykuam9pbignXScpKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUgKGRhdGUpIHtcbiAgcmV0dXJuIGlzRGF0ZShkYXRlKSA9PT0gdHJ1ZVxuICAgID8gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkpXG4gICAgOiBkYXRlXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNWYWxpZCxcbiAgZXh0cmFjdERhdGUsXG4gIGJ1aWxkRGF0ZSxcbiAgZ2V0RGF5T2ZXZWVrLFxuICBnZXRXZWVrT2ZZZWFyLFxuICBpc0JldHdlZW5EYXRlcyxcbiAgYWRkVG9EYXRlLFxuICBzdWJ0cmFjdEZyb21EYXRlLFxuICBhZGp1c3REYXRlLFxuICBzdGFydE9mRGF0ZSxcbiAgZW5kT2ZEYXRlLFxuICBnZXRNYXhEYXRlLFxuICBnZXRNaW5EYXRlLFxuICBnZXREYXRlRGlmZixcbiAgZ2V0RGF5T2ZZZWFyLFxuICBpbmZlckRhdGVGb3JtYXQsXG4gIGdldERhdGVCZXR3ZWVuLFxuICBpc1NhbWVEYXRlLFxuICBkYXlzSW5Nb250aCxcbiAgZm9ybWF0RGF0ZSxcbiAgY2xvbmVcbn1cbiJdLCJuYW1lcyI6WyJkYXRlIiwibW9kIiwiTGFuZyIsImRhdGUyIl0sIm1hcHBpbmdzIjoiOztBQUtBLE1BQU0sU0FBUztBQUFBLEVBQ2I7QUFBQSxFQUFLO0FBQUEsRUFBRztBQUFBLEVBQUk7QUFBQSxFQUFLO0FBQUEsRUFBSztBQUFBLEVBQUs7QUFBQSxFQUFLO0FBQUEsRUFBSztBQUFBLEVBQU07QUFBQSxFQUFNO0FBQUEsRUFDakQ7QUFBQSxFQUFNO0FBQUEsRUFBTTtBQUFBLEVBQU07QUFBQSxFQUFNO0FBQUEsRUFBTTtBQUFBLEVBQU07QUFBQSxFQUFNO0FBQUEsRUFBTTtBQUNsRDtBQXdCQSxTQUFTLGtCQUFtQixJQUFJO0FBQzlCLFNBQU8sV0FBVyxFQUFFLE1BQU07QUFDNUI7QUFLTyxTQUFTLG1CQUFvQixJQUFJLElBQUk7QUFDMUMsTUFBSSxNQUFNO0FBQUcsV0FBTztBQUNwQixNQUFJLE1BQU07QUFBSSxXQUFPO0FBQ3JCLE1BQUksa0JBQWtCLEVBQUU7QUFBRyxXQUFPO0FB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
