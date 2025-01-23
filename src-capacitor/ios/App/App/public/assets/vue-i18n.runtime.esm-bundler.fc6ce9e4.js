import { h, e as effectScope, i as inject, o as onMounted, a as onUnmounted, r as ref, c as computed, w as watch, F as Fragment, g as getCurrentInstance, d as isRef, s as setupDevtoolsPlugin, f as createVNode, T as Text } from "./index.61ed5618.js";
/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const inBrowser = typeof window !== "undefined";
const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
const makeSymbol = (name) => hasSymbol ? Symbol(name) : name;
const generateFormatCacheKey = (locale, key, source) => friendlyJSONstringify({ l: locale, k: key, s: source });
const friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
const isNumber = (val) => typeof val === "number" && isFinite(val);
const isDate = (val) => toTypeString(val) === "[object Date]";
const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
const isEmptyObject = (val) => isPlainObject(val) && Object.keys(val).length === 0;
function warn(msg, err) {
  if (typeof console !== "undefined") {
    console.warn(`[intlify] ` + msg);
    if (err) {
      console.warn(err.stack);
    }
  }
}
const assign = Object.assign;
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
function escapeHtml(rawText) {
  return rawText.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isBoolean = (val) => typeof val === "boolean";
const isObject = (val) => val !== null && typeof val === "object";
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const toDisplayString = (val) => {
  return val == null ? "" : isArray(val) || isPlainObject(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
};
function createEmitter() {
  const events = /* @__PURE__ */ new Map();
  const emitter = {
    events,
    on(event, handler) {
      const handlers = events.get(event);
      const added = handlers && handlers.push(handler);
      if (!added) {
        events.set(event, [handler]);
      }
    },
    off(event, handler) {
      const handlers = events.get(event);
      if (handlers) {
        handlers.splice(handlers.indexOf(handler) >>> 0, 1);
      }
    },
    emit(event, payload) {
      (events.get(event) || []).slice().map((handler) => handler(payload));
      (events.get("*") || []).slice().map((handler) => handler(event, payload));
    }
  };
  return emitter;
}
/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const CompileErrorCodes = {
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  __EXTEND_POINT__: 15
};
function createCompileError(code2, loc, options = {}) {
  const { domain, messages, args } = options;
  const msg = code2;
  const error = new SyntaxError(String(msg));
  error.code = code2;
  if (loc) {
    error.location = loc;
  }
  error.domain = domain;
  return error;
}
/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const IntlifyDevToolsHooks = {
  I18nInit: "i18n:init",
  FunctionTranslate: "function:translate"
};
/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const pathStateMachine = [];
pathStateMachine[0] = {
  ["w"]: [0],
  ["i"]: [3, 0],
  ["["]: [4],
  ["o"]: [7]
};
pathStateMachine[1] = {
  ["w"]: [1],
  ["."]: [2],
  ["["]: [4],
  ["o"]: [7]
};
pathStateMachine[2] = {
  ["w"]: [2],
  ["i"]: [3, 0],
  ["0"]: [3, 0]
};
pathStateMachine[3] = {
  ["i"]: [3, 0],
  ["0"]: [3, 0],
  ["w"]: [1, 1],
  ["."]: [2, 1],
  ["["]: [4, 1],
  ["o"]: [7, 1]
};
pathStateMachine[4] = {
  ["'"]: [5, 0],
  ['"']: [6, 0],
  ["["]: [
    4,
    2
  ],
  ["]"]: [1, 3],
  ["o"]: 8,
  ["l"]: [4, 0]
};
pathStateMachine[5] = {
  ["'"]: [4, 0],
  ["o"]: 8,
  ["l"]: [5, 0]
};
pathStateMachine[6] = {
  ['"']: [4, 0],
  ["o"]: 8,
  ["l"]: [6, 0]
};
const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
  return literalValueRE.test(exp);
}
function stripQuotes(str) {
  const a = str.charCodeAt(0);
  const b = str.charCodeAt(str.length - 1);
  return a === b && (a === 34 || a === 39) ? str.slice(1, -1) : str;
}
function getPathCharType(ch) {
  if (ch === void 0 || ch === null) {
    return "o";
  }
  const code2 = ch.charCodeAt(0);
  switch (code2) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return ch;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function formatSubPath(path) {
  const trimmed = path.trim();
  if (path.charAt(0) === "0" && isNaN(parseInt(path))) {
    return false;
  }
  return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
}
function parse(path) {
  const keys = [];
  let index = -1;
  let mode = 0;
  let subPathDepth = 0;
  let c;
  let key;
  let newChar;
  let type;
  let transition;
  let action;
  let typeMap;
  const actions = [];
  actions[0] = () => {
    if (key === void 0) {
      key = newChar;
    } else {
      key += newChar;
    }
  };
  actions[1] = () => {
    if (key !== void 0) {
      keys.push(key);
      key = void 0;
    }
  };
  actions[2] = () => {
    actions[0]();
    subPathDepth++;
  };
  actions[3] = () => {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = 4;
      actions[0]();
    } else {
      subPathDepth = 0;
      if (key === void 0) {
        return false;
      }
      key = formatSubPath(key);
      if (key === false) {
        return false;
      } else {
        actions[1]();
      }
    }
  };
  function maybeUnescapeQuote() {
    const nextChar = path[index + 1];
    if (mode === 5 && nextChar === "'" || mode === 6 && nextChar === '"') {
      index++;
      newChar = "\\" + nextChar;
      actions[0]();
      return true;
    }
  }
  while (mode !== null) {
    index++;
    c = path[index];
    if (c === "\\" && maybeUnescapeQuote()) {
      continue;
    }
    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap["l"] || 8;
    if (transition === 8) {
      return;
    }
    mode = transition[0];
    if (transition[1] !== void 0) {
      action = actions[transition[1]];
      if (action) {
        newChar = c;
        if (action() === false) {
          return;
        }
      }
    }
    if (mode === 7) {
      return keys;
    }
  }
}
const cache = /* @__PURE__ */ new Map();
function resolveWithKeyValue(obj, path) {
  return isObject(obj) ? obj[path] : null;
}
function resolveValue(obj, path) {
  if (!isObject(obj)) {
    return null;
  }
  let hit = cache.get(path);
  if (!hit) {
    hit = parse(path);
    if (hit) {
      cache.set(path, hit);
    }
  }
  if (!hit) {
    return null;
  }
  const len = hit.length;
  let last = obj;
  let i = 0;
  while (i < len) {
    const val = last[hit[i]];
    if (val === void 0) {
      return null;
    }
    last = val;
    i++;
  }
  return last;
}
const DEFAULT_MODIFIER = (str) => str;
const DEFAULT_MESSAGE = (ctx) => "";
const DEFAULT_MESSAGE_DATA_TYPE = "text";
const DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : values.join("");
const DEFAULT_INTERPOLATE = toDisplayString;
function pluralDefault(choice, choicesLength) {
  choice = Math.abs(choice);
  if (choicesLength === 2) {
    return choice ? choice > 1 ? 1 : 0 : 1;
  }
  return choice ? Math.min(choice, 2) : 0;
}
function getPluralIndex(options) {
  const index = isNumber(options.pluralIndex) ? options.pluralIndex : -1;
  return options.named && (isNumber(options.named.count) || isNumber(options.named.n)) ? isNumber(options.named.count) ? options.named.count : isNumber(options.named.n) ? options.named.n : index : index;
}
function normalizeNamed(pluralIndex, props) {
  if (!props.count) {
    props.count = pluralIndex;
  }
  if (!props.n) {
    props.n = pluralIndex;
  }
}
function createMessageContext(options = {}) {
  const locale = options.locale;
  const pluralIndex = getPluralIndex(options);
  const pluralRule = isObject(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? options.pluralRules[locale] : pluralDefault;
  const orgPluralRule = isObject(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? pluralDefault : void 0;
  const plural = (messages) => {
    return messages[pluralRule(pluralIndex, messages.length, orgPluralRule)];
  };
  const _list = options.list || [];
  const list = (index) => _list[index];
  const _named = options.named || {};
  isNumber(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
  const named = (key) => _named[key];
  function message(key) {
    const msg = isFunction(options.messages) ? options.messages(key) : isObject(options.messages) ? options.messages[key] : false;
    return !msg ? options.parent ? options.parent.message(key) : DEFAULT_MESSAGE : msg;
  }
  const _modifier = (name) => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
  const normalize = isPlainObject(options.processor) && isFunction(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
  const interpolate = isPlainObject(options.processor) && isFunction(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
  const type = isPlainObject(options.processor) && isString(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
  const linked = (key, ...args) => {
    const [arg1, arg2] = args;
    let type2 = "text";
    let modifier = "";
    if (args.length === 1) {
      if (isObject(arg1)) {
        modifier = arg1.modifier || modifier;
        type2 = arg1.type || type2;
      } else if (isString(arg1)) {
        modifier = arg1 || modifier;
      }
    } else if (args.length === 2) {
      if (isString(arg1)) {
        modifier = arg1 || modifier;
      }
      if (isString(arg2)) {
        type2 = arg2 || type2;
      }
    }
    let msg = message(key)(ctx);
    if (type2 === "vnode" && isArray(msg) && modifier) {
      msg = msg[0];
    }
    return modifier ? _modifier(modifier)(msg, type2) : msg;
  };
  const ctx = {
    ["list"]: list,
    ["named"]: named,
    ["plural"]: plural,
    ["linked"]: linked,
    ["message"]: message,
    ["type"]: type,
    ["interpolate"]: interpolate,
    ["normalize"]: normalize
  };
  return ctx;
}
let devtools = null;
function setDevToolsHook(hook) {
  devtools = hook;
}
function initI18nDevTools(i18n, version, meta) {
  devtools && devtools.emit(IntlifyDevToolsHooks.I18nInit, {
    timestamp: Date.now(),
    i18n,
    version,
    meta
  });
}
const translateDevTools = /* @__PURE__ */ createDevToolsHook(IntlifyDevToolsHooks.FunctionTranslate);
function createDevToolsHook(hook) {
  return (payloads) => devtools && devtools.emit(hook, payloads);
}
const CoreWarnCodes = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  __EXTEND_POINT__: 7
};
function fallbackWithSimple(ctx, fallback, start) {
  return [.../* @__PURE__ */ new Set([
    start,
    ...isArray(fallback) ? fallback : isObject(fallback) ? Object.keys(fallback) : isString(fallback) ? [fallback] : [start]
  ])];
}
function fallbackWithLocaleChain(ctx, fallback, start) {
  const startLocale = isString(start) ? start : DEFAULT_LOCALE;
  const context = ctx;
  if (!context.__localeChainCache) {
    context.__localeChainCache = /* @__PURE__ */ new Map();
  }
  let chain = context.__localeChainCache.get(startLocale);
  if (!chain) {
    chain = [];
    let block = [start];
    while (isArray(block)) {
      block = appendBlockToChain(chain, block, fallback);
    }
    const defaults = isArray(fallback) || !isPlainObject(fallback) ? fallback : fallback["default"] ? fallback["default"] : null;
    block = isString(defaults) ? [defaults] : defaults;
    if (isArray(block)) {
      appendBlockToChain(chain, block, false);
    }
    context.__localeChainCache.set(startLocale, chain);
  }
  return chain;
}
function appendBlockToChain(chain, block, blocks) {
  let follow = true;
  for (let i = 0; i < block.length && isBoolean(follow); i++) {
    const locale = block[i];
    if (isString(locale)) {
      follow = appendLocaleToChain(chain, block[i], blocks);
    }
  }
  return follow;
}
function appendLocaleToChain(chain, locale, blocks) {
  let follow;
  const tokens = locale.split("-");
  do {
    const target = tokens.join("-");
    follow = appendItemToChain(chain, target, blocks);
    tokens.splice(-1, 1);
  } while (tokens.length && follow === true);
  return follow;
}
function appendItemToChain(chain, target, blocks) {
  let follow = false;
  if (!chain.includes(target)) {
    follow = true;
    if (target) {
      follow = target[target.length - 1] !== "!";
      const locale = target.replace(/!/g, "");
      chain.push(locale);
      if ((isArray(blocks) || isPlainObject(blocks)) && blocks[locale]) {
        follow = blocks[locale];
      }
    }
  }
  return follow;
}
const VERSION$1 = "9.2.2";
const NOT_REOSLVED = -1;
const DEFAULT_LOCALE = "en-US";
const MISSING_RESOLVE_VALUE = "";
const capitalize = (str) => `${str.charAt(0).toLocaleUpperCase()}${str.substr(1)}`;
function getDefaultLinkedModifiers() {
  return {
    upper: (val, type) => {
      return type === "text" && isString(val) ? val.toUpperCase() : type === "vnode" && isObject(val) && "__v_isVNode" in val ? val.children.toUpperCase() : val;
    },
    lower: (val, type) => {
      return type === "text" && isString(val) ? val.toLowerCase() : type === "vnode" && isObject(val) && "__v_isVNode" in val ? val.children.toLowerCase() : val;
    },
    capitalize: (val, type) => {
      return type === "text" && isString(val) ? capitalize(val) : type === "vnode" && isObject(val) && "__v_isVNode" in val ? capitalize(val.children) : val;
    }
  };
}
let _compiler;
let _resolver;
function registerMessageResolver(resolver) {
  _resolver = resolver;
}
let _fallbacker;
function registerLocaleFallbacker(fallbacker) {
  _fallbacker = fallbacker;
}
let _additionalMeta = null;
const setAdditionalMeta = (meta) => {
  _additionalMeta = meta;
};
const getAdditionalMeta = () => _additionalMeta;
let _fallbackContext = null;
const setFallbackContext = (context) => {
  _fallbackContext = context;
};
const getFallbackContext = () => _fallbackContext;
let _cid = 0;
function createCoreContext(options = {}) {
  const version = isString(options.version) ? options.version : VERSION$1;
  const locale = isString(options.locale) ? options.locale : DEFAULT_LOCALE;
  const fallbackLocale = isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || isString(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
  const messages = isPlainObject(options.messages) ? options.messages : { [locale]: {} };
  const datetimeFormats = isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [locale]: {} };
  const numberFormats = isPlainObject(options.numberFormats) ? options.numberFormats : { [locale]: {} };
  const modifiers = assign({}, options.modifiers || {}, getDefaultLinkedModifiers());
  const pluralRules = options.pluralRules || {};
  const missing = isFunction(options.missing) ? options.missing : null;
  const missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  const fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  const fallbackFormat = !!options.fallbackFormat;
  const unresolving = !!options.unresolving;
  const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
  const processor = isPlainObject(options.processor) ? options.processor : null;
  const warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  const escapeParameter = !!options.escapeParameter;
  const messageCompiler = isFunction(options.messageCompiler) ? options.messageCompiler : _compiler;
  const messageResolver = isFunction(options.messageResolver) ? options.messageResolver : _resolver || resolveWithKeyValue;
  const localeFallbacker = isFunction(options.localeFallbacker) ? options.localeFallbacker : _fallbacker || fallbackWithSimple;
  const fallbackContext = isObject(options.fallbackContext) ? options.fallbackContext : void 0;
  const onWarn = isFunction(options.onWarn) ? options.onWarn : warn;
  const internalOptions = options;
  const __datetimeFormatters = isObject(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : /* @__PURE__ */ new Map();
  const __numberFormatters = isObject(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : /* @__PURE__ */ new Map();
  const __meta = isObject(internalOptions.__meta) ? internalOptions.__meta : {};
  _cid++;
  const context = {
    version,
    cid: _cid,
    locale,
    fallbackLocale,
    messages,
    modifiers,
    pluralRules,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackFormat,
    unresolving,
    postTranslation,
    processor,
    warnHtmlMessage,
    escapeParameter,
    messageCompiler,
    messageResolver,
    localeFallbacker,
    fallbackContext,
    onWarn,
    __meta
  };
  {
    context.datetimeFormats = datetimeFormats;
    context.numberFormats = numberFormats;
    context.__datetimeFormatters = __datetimeFormatters;
    context.__numberFormatters = __numberFormatters;
  }
  {
    initI18nDevTools(context, version, __meta);
  }
  return context;
}
function handleMissing(context, key, locale, missingWarn, type) {
  const { missing, onWarn } = context;
  if (missing !== null) {
    const ret = missing(context, locale, key, type);
    return isString(ret) ? ret : key;
  } else {
    return key;
  }
}
function updateFallbackLocale(ctx, locale, fallback) {
  const context = ctx;
  context.__localeChainCache = /* @__PURE__ */ new Map();
  ctx.localeFallbacker(ctx, fallback, locale);
}
let code$1 = CompileErrorCodes.__EXTEND_POINT__;
const inc$1 = () => ++code$1;
const CoreErrorCodes = {
  INVALID_ARGUMENT: code$1,
  INVALID_DATE_ARGUMENT: inc$1(),
  INVALID_ISO_DATE_ARGUMENT: inc$1(),
  __EXTEND_POINT__: inc$1()
};
function createCoreError(code2) {
  return createCompileError(code2, null, void 0);
}
const NOOP_MESSAGE_FUNCTION = () => "";
const isMessageFunction = (val) => isFunction(val);
function translate(context, ...args) {
  const { fallbackFormat, postTranslation, unresolving, messageCompiler, fallbackLocale, messages } = context;
  const [key, options] = parseTranslateArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const escapeParameter = isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
  const resolvedMessage = !!options.resolvedMessage;
  const defaultMsgOrKey = isString(options.default) || isBoolean(options.default) ? !isBoolean(options.default) ? options.default : !messageCompiler ? () => key : key : fallbackFormat ? !messageCompiler ? () => key : key : "";
  const enableDefaultMsg = fallbackFormat || defaultMsgOrKey !== "";
  const locale = isString(options.locale) ? options.locale : context.locale;
  escapeParameter && escapeParams(options);
  let [formatScope, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) : [
    key,
    locale,
    messages[locale] || {}
  ];
  let format = formatScope;
  let cacheBaseKey = key;
  if (!resolvedMessage && !(isString(format) || isMessageFunction(format))) {
    if (enableDefaultMsg) {
      format = defaultMsgOrKey;
      cacheBaseKey = format;
    }
  }
  if (!resolvedMessage && (!(isString(format) || isMessageFunction(format)) || !isString(targetLocale))) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let occurred = false;
  const errorDetector = () => {
    occurred = true;
  };
  const msg = !isMessageFunction(format) ? compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, errorDetector) : format;
  if (occurred) {
    return format;
  }
  const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
  const msgContext = createMessageContext(ctxOptions);
  const messaged = evaluateMessage(context, msg, msgContext);
  const ret = postTranslation ? postTranslation(messaged, key) : messaged;
  {
    const payloads = {
      timestamp: Date.now(),
      key: isString(key) ? key : isMessageFunction(format) ? format.key : "",
      locale: targetLocale || (isMessageFunction(format) ? format.locale : ""),
      format: isString(format) ? format : isMessageFunction(format) ? format.source : "",
      message: ret
    };
    payloads.meta = assign({}, context.__meta, getAdditionalMeta() || {});
    translateDevTools(payloads);
  }
  return ret;
}
function escapeParams(options) {
  if (isArray(options.list)) {
    options.list = options.list.map((item) => isString(item) ? escapeHtml(item) : item);
  } else if (isObject(options.named)) {
    Object.keys(options.named).forEach((key) => {
      if (isString(options.named[key])) {
        options.named[key] = escapeHtml(options.named[key]);
      }
    });
  }
}
function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
  const { messages, onWarn, messageResolver: resolveValue2, localeFallbacker } = context;
  const locales = localeFallbacker(context, fallbackLocale, locale);
  let message = {};
  let targetLocale;
  let format = null;
  const type = "translate";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = locales[i];
    message = messages[targetLocale] || {};
    if ((format = resolveValue2(message, key)) === null) {
      format = message[key];
    }
    if (isString(format) || isFunction(format))
      break;
    const missingRet = handleMissing(
      context,
      key,
      targetLocale,
      missingWarn,
      type
    );
    if (missingRet !== key) {
      format = missingRet;
    }
  }
  return [format, targetLocale, message];
}
function compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, errorDetector) {
  const { messageCompiler, warnHtmlMessage } = context;
  if (isMessageFunction(format)) {
    const msg2 = format;
    msg2.locale = msg2.locale || targetLocale;
    msg2.key = msg2.key || key;
    return msg2;
  }
  if (messageCompiler == null) {
    const msg2 = () => format;
    msg2.locale = targetLocale;
    msg2.key = key;
    return msg2;
  }
  const msg = messageCompiler(format, getCompileOptions(context, targetLocale, cacheBaseKey, format, warnHtmlMessage, errorDetector));
  msg.locale = targetLocale;
  msg.key = key;
  msg.source = format;
  return msg;
}
function evaluateMessage(context, msg, msgCtx) {
  const messaged = msg(msgCtx);
  return messaged;
}
function parseTranslateArgs(...args) {
  const [arg1, arg2, arg3] = args;
  const options = {};
  if (!isString(arg1) && !isNumber(arg1) && !isMessageFunction(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const key = isNumber(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
  if (isNumber(arg2)) {
    options.plural = arg2;
  } else if (isString(arg2)) {
    options.default = arg2;
  } else if (isPlainObject(arg2) && !isEmptyObject(arg2)) {
    options.named = arg2;
  } else if (isArray(arg2)) {
    options.list = arg2;
  }
  if (isNumber(arg3)) {
    options.plural = arg3;
  } else if (isString(arg3)) {
    options.default = arg3;
  } else if (isPlainObject(arg3)) {
    assign(options, arg3);
  }
  return [key, options];
}
function getCompileOptions(context, locale, key, source, warnHtmlMessage, errorDetector) {
  return {
    warnHtmlMessage,
    onError: (err) => {
      errorDetector && errorDetector(err);
      {
        throw err;
      }
    },
    onCacheKey: (source2) => generateFormatCacheKey(locale, key, source2)
  };
}
function getMessageContextOptions(context, locale, message, options) {
  const { modifiers, pluralRules, messageResolver: resolveValue2, fallbackLocale, fallbackWarn, missingWarn, fallbackContext } = context;
  const resolveMessage = (key) => {
    let val = resolveValue2(message, key);
    if (val == null && fallbackContext) {
      const [, , message2] = resolveMessageFormat(fallbackContext, key, locale, fallbackLocale, fallbackWarn, missingWarn);
      val = resolveValue2(message2, key);
    }
    if (isString(val)) {
      let occurred = false;
      const errorDetector = () => {
        occurred = true;
      };
      const msg = compileMessageFormat(context, key, locale, val, key, errorDetector);
      return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
    } else if (isMessageFunction(val)) {
      return val;
    } else {
      return NOOP_MESSAGE_FUNCTION;
    }
  };
  const ctxOptions = {
    locale,
    modifiers,
    pluralRules,
    messages: resolveMessage
  };
  if (context.processor) {
    ctxOptions.processor = context.processor;
  }
  if (options.list) {
    ctxOptions.list = options.list;
  }
  if (options.named) {
    ctxOptions.named = options.named;
  }
  if (isNumber(options.plural)) {
    ctxOptions.pluralIndex = options.plural;
  }
  return ctxOptions;
}
function datetime(context, ...args) {
  const { datetimeFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __datetimeFormatters } = context;
  const [key, value, options, overrides] = parseDateTimeArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = isString(options.locale) ? options.locale : context.locale;
  const locales = localeFallbacker(
    context,
    fallbackLocale,
    locale
  );
  if (!isString(key) || key === "") {
    return new Intl.DateTimeFormat(locale, overrides).format(value);
  }
  let datetimeFormat = {};
  let targetLocale;
  let format = null;
  const type = "datetime format";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = locales[i];
    datetimeFormat = datetimeFormats[targetLocale] || {};
    format = datetimeFormat[key];
    if (isPlainObject(format))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
  }
  if (!isPlainObject(format) || !isString(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __datetimeFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(targetLocale, assign({}, format, overrides));
    __datetimeFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
const DATETIME_FORMAT_OPTIONS_KEYS = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function parseDateTimeArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  const options = {};
  let overrides = {};
  let value;
  if (isString(arg1)) {
    const matches = arg1.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!matches) {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
    const dateTime = matches[3] ? matches[3].trim().startsWith("T") ? `${matches[1].trim()}${matches[3].trim()}` : `${matches[1].trim()}T${matches[3].trim()}` : matches[1].trim();
    value = new Date(dateTime);
    try {
      value.toISOString();
    } catch (e) {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (isDate(arg1)) {
    if (isNaN(arg1.getTime())) {
      throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);
    }
    value = arg1;
  } else if (isNumber(arg1)) {
    value = arg1;
  } else {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  if (isString(arg2)) {
    options.key = arg2;
  } else if (isPlainObject(arg2)) {
    Object.keys(arg2).forEach((key) => {
      if (DATETIME_FORMAT_OPTIONS_KEYS.includes(key)) {
        overrides[key] = arg2[key];
      } else {
        options[key] = arg2[key];
      }
    });
  }
  if (isString(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearDateTimeFormat(ctx, locale, format) {
  const context = ctx;
  for (const key in format) {
    const id = `${locale}__${key}`;
    if (!context.__datetimeFormatters.has(id)) {
      continue;
    }
    context.__datetimeFormatters.delete(id);
  }
}
function number(context, ...args) {
  const { numberFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __numberFormatters } = context;
  const [key, value, options, overrides] = parseNumberArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = isString(options.locale) ? options.locale : context.locale;
  const locales = localeFallbacker(
    context,
    fallbackLocale,
    locale
  );
  if (!isString(key) || key === "") {
    return new Intl.NumberFormat(locale, overrides).format(value);
  }
  let numberFormat = {};
  let targetLocale;
  let format = null;
  const type = "number format";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = locales[i];
    numberFormat = numberFormats[targetLocale] || {};
    format = numberFormat[key];
    if (isPlainObject(format))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
  }
  if (!isPlainObject(format) || !isString(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __numberFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.NumberFormat(targetLocale, assign({}, format, overrides));
    __numberFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
const NUMBER_FORMAT_OPTIONS_KEYS = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function parseNumberArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  const options = {};
  let overrides = {};
  if (!isNumber(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const value = arg1;
  if (isString(arg2)) {
    options.key = arg2;
  } else if (isPlainObject(arg2)) {
    Object.keys(arg2).forEach((key) => {
      if (NUMBER_FORMAT_OPTIONS_KEYS.includes(key)) {
        overrides[key] = arg2[key];
      } else {
        options[key] = arg2[key];
      }
    });
  }
  if (isString(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearNumberFormat(ctx, locale, format) {
  const context = ctx;
  for (const key in format) {
    const id = `${locale}__${key}`;
    if (!context.__numberFormatters.has(id)) {
      continue;
    }
    context.__numberFormatters.delete(id);
  }
}
/*!
  * vue-devtools v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const VueDevToolsLabels = {
  ["vue-devtools-plugin-vue-i18n"]: "Vue I18n devtools",
  ["vue-i18n-resource-inspector"]: "I18n Resources",
  ["vue-i18n-timeline"]: "Vue I18n"
};
const VueDevToolsPlaceholders = {
  ["vue-i18n-resource-inspector"]: "Search for scopes ..."
};
const VueDevToolsTimelineColors = {
  ["vue-i18n-timeline"]: 16764185
};
/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const VERSION = "9.2.2";
CoreWarnCodes.__EXTEND_POINT__;
let code = CompileErrorCodes.__EXTEND_POINT__;
const inc = () => ++code;
const I18nErrorCodes = {
  UNEXPECTED_RETURN_TYPE: code,
  INVALID_ARGUMENT: inc(),
  MUST_BE_CALL_SETUP_TOP: inc(),
  NOT_INSLALLED: inc(),
  NOT_AVAILABLE_IN_LEGACY_MODE: inc(),
  REQUIRED_VALUE: inc(),
  INVALID_VALUE: inc(),
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: inc(),
  NOT_INSLALLED_WITH_PROVIDE: inc(),
  UNEXPECTED_ERROR: inc(),
  NOT_COMPATIBLE_LEGACY_VUE_I18N: inc(),
  BRIDGE_SUPPORT_VUE_2_ONLY: inc(),
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: inc(),
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: inc(),
  __EXTEND_POINT__: inc()
};
function createI18nError(code2, ...args) {
  return createCompileError(code2, null, void 0);
}
const TransrateVNodeSymbol = /* @__PURE__ */ makeSymbol("__transrateVNode");
const DatetimePartsSymbol = /* @__PURE__ */ makeSymbol("__datetimeParts");
const NumberPartsSymbol = /* @__PURE__ */ makeSymbol("__numberParts");
const EnableEmitter = /* @__PURE__ */ makeSymbol("__enableEmitter");
const DisableEmitter = /* @__PURE__ */ makeSymbol("__disableEmitter");
const SetPluralRulesSymbol = makeSymbol("__setPluralRules");
makeSymbol("__intlifyMeta");
const InejctWithOption = /* @__PURE__ */ makeSymbol("__injectWithOption");
function handleFlatJson(obj) {
  if (!isObject(obj)) {
    return obj;
  }
  for (const key in obj) {
    if (!hasOwn(obj, key)) {
      continue;
    }
    if (!key.includes(".")) {
      if (isObject(obj[key])) {
        handleFlatJson(obj[key]);
      }
    } else {
      const subKeys = key.split(".");
      const lastIndex = subKeys.length - 1;
      let currentObj = obj;
      for (let i = 0; i < lastIndex; i++) {
        if (!(subKeys[i] in currentObj)) {
          currentObj[subKeys[i]] = {};
        }
        currentObj = currentObj[subKeys[i]];
      }
      currentObj[subKeys[lastIndex]] = obj[key];
      delete obj[key];
      if (isObject(currentObj[subKeys[lastIndex]])) {
        handleFlatJson(currentObj[subKeys[lastIndex]]);
      }
    }
  }
  return obj;
}
function getLocaleMessages(locale, options) {
  const { messages, __i18n, messageResolver, flatJson } = options;
  const ret = isPlainObject(messages) ? messages : isArray(__i18n) ? {} : { [locale]: {} };
  if (isArray(__i18n)) {
    __i18n.forEach((custom) => {
      if ("locale" in custom && "resource" in custom) {
        const { locale: locale2, resource } = custom;
        if (locale2) {
          ret[locale2] = ret[locale2] || {};
          deepCopy(resource, ret[locale2]);
        } else {
          deepCopy(resource, ret);
        }
      } else {
        isString(custom) && deepCopy(JSON.parse(custom), ret);
      }
    });
  }
  if (messageResolver == null && flatJson) {
    for (const key in ret) {
      if (hasOwn(ret, key)) {
        handleFlatJson(ret[key]);
      }
    }
  }
  return ret;
}
const isNotObjectOrIsArray = (val) => !isObject(val) || isArray(val);
function deepCopy(src, des) {
  if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
  for (const key in src) {
    if (hasOwn(src, key)) {
      if (isNotObjectOrIsArray(src[key]) || isNotObjectOrIsArray(des[key])) {
        des[key] = src[key];
      } else {
        deepCopy(src[key], des[key]);
      }
    }
  }
}
function getComponentOptions(instance) {
  return instance.type;
}
function adjustI18nResources(global2, options, componentOptions) {
  let messages = isObject(options.messages) ? options.messages : {};
  if ("__i18nGlobal" in componentOptions) {
    messages = getLocaleMessages(global2.locale.value, {
      messages,
      __i18n: componentOptions.__i18nGlobal
    });
  }
  const locales = Object.keys(messages);
  if (locales.length) {
    locales.forEach((locale) => {
      global2.mergeLocaleMessage(locale, messages[locale]);
    });
  }
  {
    if (isObject(options.datetimeFormats)) {
      const locales2 = Object.keys(options.datetimeFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          global2.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
        });
      }
    }
    if (isObject(options.numberFormats)) {
      const locales2 = Object.keys(options.numberFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          global2.mergeNumberFormat(locale, options.numberFormats[locale]);
        });
      }
    }
  }
}
function createTextNode(key) {
  return createVNode(Text, null, key, 0);
}
const DEVTOOLS_META = "__INTLIFY_META__";
let composerID = 0;
function defineCoreMissingHandler(missing) {
  return (ctx, locale, key, type) => {
    return missing(locale, key, getCurrentInstance() || void 0, type);
  };
}
const getMetaInfo = () => {
  const instance = getCurrentInstance();
  let meta = null;
  return instance && (meta = getComponentOptions(instance)[DEVTOOLS_META]) ? { [DEVTOOLS_META]: meta } : null;
};
function createComposer(options = {}, VueI18nLegacy) {
  const { __root } = options;
  const _isGlobal = __root === void 0;
  let _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
  const _locale = ref(
    __root && _inheritLocale ? __root.locale.value : isString(options.locale) ? options.locale : DEFAULT_LOCALE
  );
  const _fallbackLocale = ref(
    __root && _inheritLocale ? __root.fallbackLocale.value : isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value
  );
  const _messages = ref(getLocaleMessages(_locale.value, options));
  const _datetimeFormats = ref(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
  const _numberFormats = ref(isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
  let _missingWarn = __root ? __root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  let _fallbackFormat = !!options.fallbackFormat;
  let _missing = isFunction(options.missing) ? options.missing : null;
  let _runtimeMissing = isFunction(options.missing) ? defineCoreMissingHandler(options.missing) : null;
  let _postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
  let _warnHtmlMessage = __root ? __root.warnHtmlMessage : isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  let _escapeParameter = !!options.escapeParameter;
  const _modifiers = __root ? __root.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
  let _pluralRules = options.pluralRules || __root && __root.pluralRules;
  let _context;
  const getCoreContext = () => {
    _isGlobal && setFallbackContext(null);
    const ctxOptions = {
      version: VERSION,
      locale: _locale.value,
      fallbackLocale: _fallbackLocale.value,
      messages: _messages.value,
      modifiers: _modifiers,
      pluralRules: _pluralRules,
      missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
      missingWarn: _missingWarn,
      fallbackWarn: _fallbackWarn,
      fallbackFormat: _fallbackFormat,
      unresolving: true,
      postTranslation: _postTranslation === null ? void 0 : _postTranslation,
      warnHtmlMessage: _warnHtmlMessage,
      escapeParameter: _escapeParameter,
      messageResolver: options.messageResolver,
      __meta: { framework: "vue" }
    };
    {
      ctxOptions.datetimeFormats = _datetimeFormats.value;
      ctxOptions.numberFormats = _numberFormats.value;
      ctxOptions.__datetimeFormatters = isPlainObject(_context) ? _context.__datetimeFormatters : void 0;
      ctxOptions.__numberFormatters = isPlainObject(_context) ? _context.__numberFormatters : void 0;
    }
    const ctx = createCoreContext(ctxOptions);
    _isGlobal && setFallbackContext(ctx);
    return ctx;
  };
  _context = getCoreContext();
  updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
  function trackReactivityValues() {
    return [
      _locale.value,
      _fallbackLocale.value,
      _messages.value,
      _datetimeFormats.value,
      _numberFormats.value
    ];
  }
  const locale = computed({
    get: () => _locale.value,
    set: (val) => {
      _locale.value = val;
      _context.locale = _locale.value;
    }
  });
  const fallbackLocale = computed({
    get: () => _fallbackLocale.value,
    set: (val) => {
      _fallbackLocale.value = val;
      _context.fallbackLocale = _fallbackLocale.value;
      updateFallbackLocale(_context, _locale.value, val);
    }
  });
  const messages = computed(() => _messages.value);
  const datetimeFormats = /* @__PURE__ */ computed(() => _datetimeFormats.value);
  const numberFormats = /* @__PURE__ */ computed(() => _numberFormats.value);
  function getPostTranslationHandler() {
    return isFunction(_postTranslation) ? _postTranslation : null;
  }
  function setPostTranslationHandler(handler) {
    _postTranslation = handler;
    _context.postTranslation = handler;
  }
  function getMissingHandler() {
    return _missing;
  }
  function setMissingHandler(handler) {
    if (handler !== null) {
      _runtimeMissing = defineCoreMissingHandler(handler);
    }
    _missing = handler;
    _context.missing = _runtimeMissing;
  }
  const wrapWithDeps = (fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) => {
    trackReactivityValues();
    let ret;
    {
      try {
        setAdditionalMeta(getMetaInfo());
        if (!_isGlobal) {
          _context.fallbackContext = __root ? getFallbackContext() : void 0;
        }
        ret = fn(_context);
      } finally {
        setAdditionalMeta(null);
        if (!_isGlobal) {
          _context.fallbackContext = void 0;
        }
      }
    }
    if (isNumber(ret) && ret === NOT_REOSLVED) {
      const [key, arg2] = argumentParser();
      return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
    } else if (successCondition(ret)) {
      return ret;
    } else {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
    }
  };
  function t(...args) {
    return wrapWithDeps((context) => Reflect.apply(translate, null, [context, ...args]), () => parseTranslateArgs(...args), "translate", (root) => Reflect.apply(root.t, root, [...args]), (key) => key, (val) => isString(val));
  }
  function rt(...args) {
    const [arg1, arg2, arg3] = args;
    if (arg3 && !isObject(arg3)) {
      throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
    }
    return t(...[arg1, arg2, assign({ resolvedMessage: true }, arg3 || {})]);
  }
  function d(...args) {
    return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root) => Reflect.apply(root.d, root, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
  }
  function n(...args) {
    return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root) => Reflect.apply(root.n, root, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
  }
  function normalize(values) {
    return values.map((val) => isString(val) || isNumber(val) || isBoolean(val) ? createTextNode(String(val)) : val);
  }
  const interpolate = (val) => val;
  const processor = {
    normalize,
    interpolate,
    type: "vnode"
  };
  function transrateVNode(...args) {
    return wrapWithDeps(
      (context) => {
        let ret;
        const _context2 = context;
        try {
          _context2.processor = processor;
          ret = Reflect.apply(translate, null, [_context2, ...args]);
        } finally {
          _context2.processor = null;
        }
        return ret;
      },
      () => parseTranslateArgs(...args),
      "translate",
      (root) => root[TransrateVNodeSymbol](...args),
      (key) => [createTextNode(key)],
      (val) => isArray(val)
    );
  }
  function numberParts(...args) {
    return wrapWithDeps(
      (context) => Reflect.apply(number, null, [context, ...args]),
      () => parseNumberArgs(...args),
      "number format",
      (root) => root[NumberPartsSymbol](...args),
      () => [],
      (val) => isString(val) || isArray(val)
    );
  }
  function datetimeParts(...args) {
    return wrapWithDeps(
      (context) => Reflect.apply(datetime, null, [context, ...args]),
      () => parseDateTimeArgs(...args),
      "datetime format",
      (root) => root[DatetimePartsSymbol](...args),
      () => [],
      (val) => isString(val) || isArray(val)
    );
  }
  function setPluralRules(rules) {
    _pluralRules = rules;
    _context.pluralRules = _pluralRules;
  }
  function te(key, locale2) {
    const targetLocale = isString(locale2) ? locale2 : _locale.value;
    const message = getLocaleMessage(targetLocale);
    return _context.messageResolver(message, key) !== null;
  }
  function resolveMessages(key) {
    let messages2 = null;
    const locales = fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
    for (let i = 0; i < locales.length; i++) {
      const targetLocaleMessages = _messages.value[locales[i]] || {};
      const messageValue = _context.messageResolver(targetLocaleMessages, key);
      if (messageValue != null) {
        messages2 = messageValue;
        break;
      }
    }
    return messages2;
  }
  function tm(key) {
    const messages2 = resolveMessages(key);
    return messages2 != null ? messages2 : __root ? __root.tm(key) || {} : {};
  }
  function getLocaleMessage(locale2) {
    return _messages.value[locale2] || {};
  }
  function setLocaleMessage(locale2, message) {
    _messages.value[locale2] = message;
    _context.messages = _messages.value;
  }
  function mergeLocaleMessage(locale2, message) {
    _messages.value[locale2] = _messages.value[locale2] || {};
    deepCopy(message, _messages.value[locale2]);
    _context.messages = _messages.value;
  }
  function getDateTimeFormat(locale2) {
    return _datetimeFormats.value[locale2] || {};
  }
  function setDateTimeFormat(locale2, format) {
    _datetimeFormats.value[locale2] = format;
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format);
  }
  function mergeDateTimeFormat(locale2, format) {
    _datetimeFormats.value[locale2] = assign(_datetimeFormats.value[locale2] || {}, format);
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format);
  }
  function getNumberFormat(locale2) {
    return _numberFormats.value[locale2] || {};
  }
  function setNumberFormat(locale2, format) {
    _numberFormats.value[locale2] = format;
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format);
  }
  function mergeNumberFormat(locale2, format) {
    _numberFormats.value[locale2] = assign(_numberFormats.value[locale2] || {}, format);
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format);
  }
  composerID++;
  if (__root && inBrowser) {
    watch(__root.locale, (val) => {
      if (_inheritLocale) {
        _locale.value = val;
        _context.locale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
    watch(__root.fallbackLocale, (val) => {
      if (_inheritLocale) {
        _fallbackLocale.value = val;
        _context.fallbackLocale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
  }
  const composer = {
    id: composerID,
    locale,
    fallbackLocale,
    get inheritLocale() {
      return _inheritLocale;
    },
    set inheritLocale(val) {
      _inheritLocale = val;
      if (val && __root) {
        _locale.value = __root.locale.value;
        _fallbackLocale.value = __root.fallbackLocale.value;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    },
    get availableLocales() {
      return Object.keys(_messages.value).sort();
    },
    messages,
    get modifiers() {
      return _modifiers;
    },
    get pluralRules() {
      return _pluralRules || {};
    },
    get isGlobal() {
      return _isGlobal;
    },
    get missingWarn() {
      return _missingWarn;
    },
    set missingWarn(val) {
      _missingWarn = val;
      _context.missingWarn = _missingWarn;
    },
    get fallbackWarn() {
      return _fallbackWarn;
    },
    set fallbackWarn(val) {
      _fallbackWarn = val;
      _context.fallbackWarn = _fallbackWarn;
    },
    get fallbackRoot() {
      return _fallbackRoot;
    },
    set fallbackRoot(val) {
      _fallbackRoot = val;
    },
    get fallbackFormat() {
      return _fallbackFormat;
    },
    set fallbackFormat(val) {
      _fallbackFormat = val;
      _context.fallbackFormat = _fallbackFormat;
    },
    get warnHtmlMessage() {
      return _warnHtmlMessage;
    },
    set warnHtmlMessage(val) {
      _warnHtmlMessage = val;
      _context.warnHtmlMessage = val;
    },
    get escapeParameter() {
      return _escapeParameter;
    },
    set escapeParameter(val) {
      _escapeParameter = val;
      _context.escapeParameter = val;
    },
    t,
    getLocaleMessage,
    setLocaleMessage,
    mergeLocaleMessage,
    getPostTranslationHandler,
    setPostTranslationHandler,
    getMissingHandler,
    setMissingHandler,
    [SetPluralRulesSymbol]: setPluralRules
  };
  {
    composer.datetimeFormats = datetimeFormats;
    composer.numberFormats = numberFormats;
    composer.rt = rt;
    composer.te = te;
    composer.tm = tm;
    composer.d = d;
    composer.n = n;
    composer.getDateTimeFormat = getDateTimeFormat;
    composer.setDateTimeFormat = setDateTimeFormat;
    composer.mergeDateTimeFormat = mergeDateTimeFormat;
    composer.getNumberFormat = getNumberFormat;
    composer.setNumberFormat = setNumberFormat;
    composer.mergeNumberFormat = mergeNumberFormat;
    composer[InejctWithOption] = options.__injectWithOption;
    composer[TransrateVNodeSymbol] = transrateVNode;
    composer[DatetimePartsSymbol] = datetimeParts;
    composer[NumberPartsSymbol] = numberParts;
  }
  return composer;
}
const baseFormatProps = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    validator: (val) => val === "parent" || val === "global",
    default: "parent"
  },
  i18n: {
    type: Object
  }
};
function getInterpolateArg({ slots }, keys) {
  if (keys.length === 1 && keys[0] === "default") {
    const ret = slots.default ? slots.default() : [];
    return ret.reduce((slot, current) => {
      return slot = [
        ...slot,
        ...isArray(current.children) ? current.children : [current]
      ];
    }, []);
  } else {
    return keys.reduce((arg, key) => {
      const slot = slots[key];
      if (slot) {
        arg[key] = slot();
      }
      return arg;
    }, {});
  }
}
function getFragmentableTag(tag) {
  return Fragment;
}
const Translation = {
  name: "i18n-t",
  props: assign({
    keypath: {
      type: String,
      required: true
    },
    plural: {
      type: [Number, String],
      validator: (val) => isNumber(val) || !isNaN(val)
    }
  }, baseFormatProps),
  setup(props, context) {
    const { slots, attrs } = context;
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    return () => {
      const keys = Object.keys(slots).filter((key) => key !== "_");
      const options = {};
      if (props.locale) {
        options.locale = props.locale;
      }
      if (props.plural !== void 0) {
        options.plural = isString(props.plural) ? +props.plural : props.plural;
      }
      const arg = getInterpolateArg(context, keys);
      const children = i18n[TransrateVNodeSymbol](props.keypath, arg, options);
      const assignedAttrs = assign({}, attrs);
      const tag = isString(props.tag) || isObject(props.tag) ? props.tag : getFragmentableTag();
      return h(tag, assignedAttrs, children);
    };
  }
};
function isVNode(target) {
  return isArray(target) && !isString(target[0]);
}
function renderFormatter(props, context, slotKeys, partFormatter) {
  const { slots, attrs } = context;
  return () => {
    const options = { part: true };
    let overrides = {};
    if (props.locale) {
      options.locale = props.locale;
    }
    if (isString(props.format)) {
      options.key = props.format;
    } else if (isObject(props.format)) {
      if (isString(props.format.key)) {
        options.key = props.format.key;
      }
      overrides = Object.keys(props.format).reduce((options2, prop) => {
        return slotKeys.includes(prop) ? assign({}, options2, { [prop]: props.format[prop] }) : options2;
      }, {});
    }
    const parts = partFormatter(...[props.value, options, overrides]);
    let children = [options.key];
    if (isArray(parts)) {
      children = parts.map((part, index) => {
        const slot = slots[part.type];
        const node = slot ? slot({ [part.type]: part.value, index, parts }) : [part.value];
        if (isVNode(node)) {
          node[0].key = `${part.type}-${index}`;
        }
        return node;
      });
    } else if (isString(parts)) {
      children = [parts];
    }
    const assignedAttrs = assign({}, attrs);
    const tag = isString(props.tag) || isObject(props.tag) ? props.tag : getFragmentableTag();
    return h(tag, assignedAttrs, children);
  };
}
const NumberFormat = {
  name: "i18n-n",
  props: assign({
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  setup(props, context) {
    const i18n = props.i18n || useI18n({ useScope: "parent", __useComponent: true });
    return renderFormatter(props, context, NUMBER_FORMAT_OPTIONS_KEYS, (...args) => i18n[NumberPartsSymbol](...args));
  }
};
const DatetimeFormat = {
  name: "i18n-d",
  props: assign({
    value: {
      type: [Number, Date],
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  setup(props, context) {
    const i18n = props.i18n || useI18n({ useScope: "parent", __useComponent: true });
    return renderFormatter(props, context, DATETIME_FORMAT_OPTIONS_KEYS, (...args) => i18n[DatetimePartsSymbol](...args));
  }
};
function getComposer$2(i18n, instance) {
  const i18nInternal = i18n;
  if (i18n.mode === "composition") {
    return i18nInternal.__getInstance(instance) || i18n.global;
  } else {
    const vueI18n = i18nInternal.__getInstance(instance);
    return vueI18n != null ? vueI18n.__composer : i18n.global.__composer;
  }
}
function vTDirective(i18n) {
  const _process = (binding) => {
    const { instance, modifiers, value } = binding;
    if (!instance || !instance.$) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const composer = getComposer$2(i18n, instance.$);
    const parsedValue = parseValue(value);
    return [
      Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]),
      composer
    ];
  };
  const register = (el, binding) => {
    const [textContent, composer] = _process(binding);
    if (inBrowser && i18n.global === composer) {
      el.__i18nWatcher = watch(composer.locale, () => {
        binding.instance && binding.instance.$forceUpdate();
      });
    }
    el.__composer = composer;
    el.textContent = textContent;
  };
  const unregister = (el) => {
    if (inBrowser && el.__i18nWatcher) {
      el.__i18nWatcher();
      el.__i18nWatcher = void 0;
      delete el.__i18nWatcher;
    }
    if (el.__composer) {
      el.__composer = void 0;
      delete el.__composer;
    }
  };
  const update = (el, { value }) => {
    if (el.__composer) {
      const composer = el.__composer;
      const parsedValue = parseValue(value);
      el.textContent = Reflect.apply(composer.t, composer, [
        ...makeParams(parsedValue)
      ]);
    }
  };
  const getSSRProps = (binding) => {
    const [textContent] = _process(binding);
    return { textContent };
  };
  return {
    created: register,
    unmounted: unregister,
    beforeUpdate: update,
    getSSRProps
  };
}
function parseValue(value) {
  if (isString(value)) {
    return { path: value };
  } else if (isPlainObject(value)) {
    if (!("path" in value)) {
      throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, "path");
    }
    return value;
  } else {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
}
function makeParams(value) {
  const { path, locale, args, choice, plural } = value;
  const options = {};
  const named = args || {};
  if (isString(locale)) {
    options.locale = locale;
  }
  if (isNumber(choice)) {
    options.plural = choice;
  }
  if (isNumber(plural)) {
    options.plural = plural;
  }
  return [path, named, options];
}
function apply(app, i18n, ...options) {
  const pluginOptions = isPlainObject(options[0]) ? options[0] : {};
  const useI18nComponentName = !!pluginOptions.useI18nComponentName;
  const globalInstall = isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
  if (globalInstall) {
    app.component(!useI18nComponentName ? Translation.name : "i18n", Translation);
    app.component(NumberFormat.name, NumberFormat);
    app.component(DatetimeFormat.name, DatetimeFormat);
  }
  {
    app.directive("t", vTDirective(i18n));
  }
}
const VUE_I18N_COMPONENT_TYPES = "vue-i18n: composer properties";
let devtoolsApi;
async function enableDevTools(app, i18n) {
  return new Promise((resolve, reject) => {
    try {
      setupDevtoolsPlugin({
        id: "vue-devtools-plugin-vue-i18n",
        label: VueDevToolsLabels["vue-devtools-plugin-vue-i18n"],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [VUE_I18N_COMPONENT_TYPES],
        app
      }, (api) => {
        devtoolsApi = api;
        api.on.visitComponentTree(({ componentInstance, treeNode }) => {
          updateComponentTreeTags(componentInstance, treeNode, i18n);
        });
        api.on.inspectComponent(({ componentInstance, instanceData }) => {
          if (componentInstance.vnode.el && componentInstance.vnode.el.__VUE_I18N__ && instanceData) {
            if (i18n.mode === "legacy") {
              if (componentInstance.vnode.el.__VUE_I18N__ !== i18n.global.__composer) {
                inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
              }
            } else {
              inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
            }
          }
        });
        api.addInspector({
          id: "vue-i18n-resource-inspector",
          label: VueDevToolsLabels["vue-i18n-resource-inspector"],
          icon: "language",
          treeFilterPlaceholder: VueDevToolsPlaceholders["vue-i18n-resource-inspector"]
        });
        api.on.getInspectorTree((payload) => {
          if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
            registerScope(payload, i18n);
          }
        });
        const roots = /* @__PURE__ */ new Map();
        api.on.getInspectorState(async (payload) => {
          if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
            api.unhighlightElement();
            inspectScope(payload, i18n);
            if (payload.nodeId === "global") {
              if (!roots.has(payload.app)) {
                const [root] = await api.getComponentInstances(payload.app);
                roots.set(payload.app, root);
              }
              api.highlightElement(roots.get(payload.app));
            } else {
              const instance = getComponentInstance(payload.nodeId, i18n);
              instance && api.highlightElement(instance);
            }
          }
        });
        api.on.editInspectorState((payload) => {
          if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
            editScope(payload, i18n);
          }
        });
        api.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: VueDevToolsLabels["vue-i18n-timeline"],
          color: VueDevToolsTimelineColors["vue-i18n-timeline"]
        });
        resolve(true);
      });
    } catch (e) {
      console.error(e);
      reject(false);
    }
  });
}
function getI18nScopeLable(instance) {
  return instance.type.name || instance.type.displayName || instance.type.__file || "Anonymous";
}
function updateComponentTreeTags(instance, treeNode, i18n) {
  const global2 = i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
  if (instance && instance.vnode.el && instance.vnode.el.__VUE_I18N__) {
    if (instance.vnode.el.__VUE_I18N__ !== global2) {
      const tag = {
        label: `i18n (${getI18nScopeLable(instance)} Scope)`,
        textColor: 0,
        backgroundColor: 16764185
      };
      treeNode.tags.push(tag);
    }
  }
}
function inspectComposer(instanceData, composer) {
  const type = VUE_I18N_COMPONENT_TYPES;
  instanceData.state.push({
    type,
    key: "locale",
    editable: true,
    value: composer.locale.value
  });
  instanceData.state.push({
    type,
    key: "availableLocales",
    editable: false,
    value: composer.availableLocales
  });
  instanceData.state.push({
    type,
    key: "fallbackLocale",
    editable: true,
    value: composer.fallbackLocale.value
  });
  instanceData.state.push({
    type,
    key: "inheritLocale",
    editable: true,
    value: composer.inheritLocale
  });
  instanceData.state.push({
    type,
    key: "messages",
    editable: false,
    value: getLocaleMessageValue(composer.messages.value)
  });
  {
    instanceData.state.push({
      type,
      key: "datetimeFormats",
      editable: false,
      value: composer.datetimeFormats.value
    });
    instanceData.state.push({
      type,
      key: "numberFormats",
      editable: false,
      value: composer.numberFormats.value
    });
  }
}
function getLocaleMessageValue(messages) {
  const value = {};
  Object.keys(messages).forEach((key) => {
    const v = messages[key];
    if (isFunction(v) && "source" in v) {
      value[key] = getMessageFunctionDetails(v);
    } else if (isObject(v)) {
      value[key] = getLocaleMessageValue(v);
    } else {
      value[key] = v;
    }
  });
  return value;
}
const ESC = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function escape(s) {
  return s.replace(/[<>"&]/g, escapeChar);
}
function escapeChar(a) {
  return ESC[a] || a;
}
function getMessageFunctionDetails(func) {
  const argString = func.source ? `("${escape(func.source)}")` : `(?)`;
  return {
    _custom: {
      type: "function",
      display: `<span>\u0192</span> ${argString}`
    }
  };
}
function registerScope(payload, i18n) {
  payload.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const global2 = i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
  for (const [keyInstance, instance] of i18n.__instances) {
    const composer = i18n.mode === "composition" ? instance : instance.__composer;
    if (global2 === composer) {
      continue;
    }
    payload.rootNodes.push({
      id: composer.id.toString(),
      label: `${getI18nScopeLable(keyInstance)} Scope`
    });
  }
}
function getComponentInstance(nodeId, i18n) {
  let instance = null;
  if (nodeId !== "global") {
    for (const [component, composer] of i18n.__instances.entries()) {
      if (composer.id.toString() === nodeId) {
        instance = component;
        break;
      }
    }
  }
  return instance;
}
function getComposer$1(nodeId, i18n) {
  if (nodeId === "global") {
    return i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
  } else {
    const instance = Array.from(i18n.__instances.values()).find((item) => item.id.toString() === nodeId);
    if (instance) {
      return i18n.mode === "composition" ? instance : instance.__composer;
    } else {
      return null;
    }
  }
}
function inspectScope(payload, i18n) {
  const composer = getComposer$1(payload.nodeId, i18n);
  if (composer) {
    payload.state = makeScopeInspectState(composer);
  }
  return null;
}
function makeScopeInspectState(composer) {
  const state = {};
  const localeType = "Locale related info";
  const localeStates = [
    {
      type: localeType,
      key: "locale",
      editable: true,
      value: composer.locale.value
    },
    {
      type: localeType,
      key: "fallbackLocale",
      editable: true,
      value: composer.fallbackLocale.value
    },
    {
      type: localeType,
      key: "availableLocales",
      editable: false,
      value: composer.availableLocales
    },
    {
      type: localeType,
      key: "inheritLocale",
      editable: true,
      value: composer.inheritLocale
    }
  ];
  state[localeType] = localeStates;
  const localeMessagesType = "Locale messages info";
  const localeMessagesStates = [
    {
      type: localeMessagesType,
      key: "messages",
      editable: false,
      value: getLocaleMessageValue(composer.messages.value)
    }
  ];
  state[localeMessagesType] = localeMessagesStates;
  {
    const datetimeFormatsType = "Datetime formats info";
    const datetimeFormatsStates = [
      {
        type: datetimeFormatsType,
        key: "datetimeFormats",
        editable: false,
        value: composer.datetimeFormats.value
      }
    ];
    state[datetimeFormatsType] = datetimeFormatsStates;
    const numberFormatsType = "Datetime formats info";
    const numberFormatsStates = [
      {
        type: numberFormatsType,
        key: "numberFormats",
        editable: false,
        value: composer.numberFormats.value
      }
    ];
    state[numberFormatsType] = numberFormatsStates;
  }
  return state;
}
function addTimelineEvent(event, payload) {
  if (devtoolsApi) {
    let groupId;
    if (payload && "groupId" in payload) {
      groupId = payload.groupId;
      delete payload.groupId;
    }
    devtoolsApi.addTimelineEvent({
      layerId: "vue-i18n-timeline",
      event: {
        title: event,
        groupId,
        time: Date.now(),
        meta: {},
        data: payload || {},
        logType: event === "compile-error" ? "error" : event === "fallback" || event === "missing" ? "warning" : "default"
      }
    });
  }
}
function editScope(payload, i18n) {
  const composer = getComposer$1(payload.nodeId, i18n);
  if (composer) {
    const [field] = payload.path;
    if (field === "locale" && isString(payload.state.value)) {
      composer.locale.value = payload.state.value;
    } else if (field === "fallbackLocale" && (isString(payload.state.value) || isArray(payload.state.value) || isObject(payload.state.value))) {
      composer.fallbackLocale.value = payload.state.value;
    } else if (field === "inheritLocale" && isBoolean(payload.state.value)) {
      composer.inheritLocale = payload.state.value;
    }
  }
}
const I18nInjectionKey = /* @__PURE__ */ makeSymbol("global-vue-i18n");
function createI18n(options = {}, VueI18nLegacy) {
  const __globalInjection = isBoolean(options.globalInjection) ? options.globalInjection : true;
  const __allowComposition = true;
  const __instances = /* @__PURE__ */ new Map();
  const [globalScope, __global] = createGlobal(options);
  const symbol = makeSymbol("");
  function __getInstance(component) {
    return __instances.get(component) || null;
  }
  function __setInstance(component, instance) {
    __instances.set(component, instance);
  }
  function __deleteInstance(component) {
    __instances.delete(component);
  }
  {
    const i18n = {
      get mode() {
        return "composition";
      },
      get allowComposition() {
        return __allowComposition;
      },
      async install(app, ...options2) {
        {
          app.__VUE_I18N__ = i18n;
        }
        app.__VUE_I18N_SYMBOL__ = symbol;
        app.provide(app.__VUE_I18N_SYMBOL__, i18n);
        if (__globalInjection) {
          injectGlobalFields(app, i18n.global);
        }
        {
          apply(app, i18n, ...options2);
        }
        const unmountApp = app.unmount;
        app.unmount = () => {
          i18n.dispose();
          unmountApp();
        };
        {
          const ret = await enableDevTools(app, i18n);
          if (!ret) {
            throw createI18nError(I18nErrorCodes.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
          }
          const emitter = createEmitter();
          {
            const _composer = __global;
            _composer[EnableEmitter] && _composer[EnableEmitter](emitter);
          }
          emitter.on("*", addTimelineEvent);
        }
      },
      get global() {
        return __global;
      },
      dispose() {
        globalScope.stop();
      },
      __instances,
      __getInstance,
      __setInstance,
      __deleteInstance
    };
    return i18n;
  }
}
function useI18n(options = {}) {
  const instance = getCurrentInstance();
  if (instance == null) {
    throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
  }
  if (!instance.isCE && instance.appContext.app != null && !instance.appContext.app.__VUE_I18N_SYMBOL__) {
    throw createI18nError(I18nErrorCodes.NOT_INSLALLED);
  }
  const i18n = getI18nInstance(instance);
  const global2 = getGlobalComposer(i18n);
  const componentOptions = getComponentOptions(instance);
  const scope = getScope(options, componentOptions);
  if (scope === "global") {
    adjustI18nResources(global2, options, componentOptions);
    return global2;
  }
  if (scope === "parent") {
    let composer2 = getComposer(i18n, instance, options.__useComponent);
    if (composer2 == null) {
      composer2 = global2;
    }
    return composer2;
  }
  const i18nInternal = i18n;
  let composer = i18nInternal.__getInstance(instance);
  if (composer == null) {
    const composerOptions = assign({}, options);
    if ("__i18n" in componentOptions) {
      composerOptions.__i18n = componentOptions.__i18n;
    }
    if (global2) {
      composerOptions.__root = global2;
    }
    composer = createComposer(composerOptions);
    setupLifeCycle(i18nInternal, instance, composer);
    i18nInternal.__setInstance(instance, composer);
  }
  return composer;
}
function createGlobal(options, legacyMode, VueI18nLegacy) {
  const scope = effectScope();
  {
    const obj = scope.run(() => createComposer(options));
    if (obj == null) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    return [scope, obj];
  }
}
function getI18nInstance(instance) {
  {
    const i18n = inject(!instance.isCE ? instance.appContext.app.__VUE_I18N_SYMBOL__ : I18nInjectionKey);
    if (!i18n) {
      throw createI18nError(!instance.isCE ? I18nErrorCodes.UNEXPECTED_ERROR : I18nErrorCodes.NOT_INSLALLED_WITH_PROVIDE);
    }
    return i18n;
  }
}
function getScope(options, componentOptions) {
  return isEmptyObject(options) ? "__i18n" in componentOptions ? "local" : "global" : !options.useScope ? "local" : options.useScope;
}
function getGlobalComposer(i18n) {
  return i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
}
function getComposer(i18n, target, useComponent = false) {
  let composer = null;
  const root = target.root;
  let current = target.parent;
  while (current != null) {
    const i18nInternal = i18n;
    if (i18n.mode === "composition") {
      composer = i18nInternal.__getInstance(current);
    }
    if (composer != null) {
      break;
    }
    if (root === current) {
      break;
    }
    current = current.parent;
  }
  return composer;
}
function setupLifeCycle(i18n, target, composer) {
  let emitter = null;
  {
    onMounted(() => {
      if (target.vnode.el) {
        target.vnode.el.__VUE_I18N__ = composer;
        emitter = createEmitter();
        const _composer = composer;
        _composer[EnableEmitter] && _composer[EnableEmitter](emitter);
        emitter.on("*", addTimelineEvent);
      }
    }, target);
    onUnmounted(() => {
      if (target.vnode.el && target.vnode.el.__VUE_I18N__) {
        emitter && emitter.off("*", addTimelineEvent);
        const _composer = composer;
        _composer[DisableEmitter] && _composer[DisableEmitter]();
        delete target.vnode.el.__VUE_I18N__;
      }
      i18n.__deleteInstance(target);
    }, target);
  }
}
const globalExportProps = [
  "locale",
  "fallbackLocale",
  "availableLocales"
];
const globalExportMethods = ["t", "rt", "d", "n", "tm"];
function injectGlobalFields(app, composer) {
  const i18n = /* @__PURE__ */ Object.create(null);
  globalExportProps.forEach((prop) => {
    const desc = Object.getOwnPropertyDescriptor(composer, prop);
    if (!desc) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const wrap = isRef(desc.value) ? {
      get() {
        return desc.value.value;
      },
      set(val) {
        desc.value.value = val;
      }
    } : {
      get() {
        return desc.get && desc.get();
      }
    };
    Object.defineProperty(i18n, prop, wrap);
  });
  app.config.globalProperties.$i18n = i18n;
  globalExportMethods.forEach((method) => {
    const desc = Object.getOwnPropertyDescriptor(composer, method);
    if (!desc || !desc.value) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
  });
}
registerMessageResolver(resolveValue);
registerLocaleFallbacker(fallbackWithLocaleChain);
{
  const target = getGlobalThis();
  target.__INTLIFY__ = true;
  setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
export { createI18n as c, useI18n as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnVlLWkxOG4ucnVudGltZS5lc20tYnVuZGxlci5mYzZjZTllNC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BpbnRsaWZ5L3NoYXJlZC9kaXN0L3NoYXJlZC5lc20tYnVuZGxlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW50bGlmeS9tZXNzYWdlLWNvbXBpbGVyL2Rpc3QvbWVzc2FnZS1jb21waWxlci5lc20tYnVuZGxlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW50bGlmeS9kZXZ0b29scy1pZi9kaXN0L2RldnRvb2xzLWlmLmVzbS1idW5kbGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BpbnRsaWZ5L2NvcmUtYmFzZS9kaXN0L2NvcmUtYmFzZS5lc20tYnVuZGxlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW50bGlmeS92dWUtZGV2dG9vbHMvZGlzdC92dWUtZGV2dG9vbHMuZXNtLWJ1bmRsZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWkxOG4vZGlzdC92dWUtaTE4bi5ydW50aW1lLmVzbS1idW5kbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICAqIHNoYXJlZCB2OS4yLjJcbiAgKiAoYykgMjAyMiBrYXp1eWEga2F3YWd1Y2hpXG4gICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICAqL1xuLyoqXHJcbiAqIE9yaWdpbmFsIFV0aWxpdGllc1xyXG4gKiB3cml0dGVuIGJ5IGthenV5YSBrYXdhZ3VjaGlcclxuICovXHJcbmNvbnN0IGluQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xyXG5sZXQgbWFyaztcclxubGV0IG1lYXN1cmU7XHJcbmlmICgocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykpIHtcclxuICAgIGNvbnN0IHBlcmYgPSBpbkJyb3dzZXIgJiYgd2luZG93LnBlcmZvcm1hbmNlO1xyXG4gICAgaWYgKHBlcmYgJiZcclxuICAgICAgICBwZXJmLm1hcmsgJiZcclxuICAgICAgICBwZXJmLm1lYXN1cmUgJiZcclxuICAgICAgICBwZXJmLmNsZWFyTWFya3MgJiZcclxuICAgICAgICBwZXJmLmNsZWFyTWVhc3VyZXMpIHtcclxuICAgICAgICBtYXJrID0gKHRhZykgPT4gcGVyZi5tYXJrKHRhZyk7XHJcbiAgICAgICAgbWVhc3VyZSA9IChuYW1lLCBzdGFydFRhZywgZW5kVGFnKSA9PiB7XHJcbiAgICAgICAgICAgIHBlcmYubWVhc3VyZShuYW1lLCBzdGFydFRhZywgZW5kVGFnKTtcclxuICAgICAgICAgICAgcGVyZi5jbGVhck1hcmtzKHN0YXJ0VGFnKTtcclxuICAgICAgICAgICAgcGVyZi5jbGVhck1hcmtzKGVuZFRhZyk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5jb25zdCBSRV9BUkdTID0gL1xceyhbMC05YS16QS1aXSspXFx9L2c7XHJcbi8qIGVzbGludC1kaXNhYmxlICovXHJcbmZ1bmN0aW9uIGZvcm1hdChtZXNzYWdlLCAuLi5hcmdzKSB7XHJcbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgaXNPYmplY3QoYXJnc1swXSkpIHtcclxuICAgICAgICBhcmdzID0gYXJnc1swXTtcclxuICAgIH1cclxuICAgIGlmICghYXJncyB8fCAhYXJncy5oYXNPd25Qcm9wZXJ0eSkge1xyXG4gICAgICAgIGFyZ3MgPSB7fTtcclxuICAgIH1cclxuICAgIHJldHVybiBtZXNzYWdlLnJlcGxhY2UoUkVfQVJHUywgKG1hdGNoLCBpZGVudGlmaWVyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGFyZ3MuaGFzT3duUHJvcGVydHkoaWRlbnRpZmllcikgPyBhcmdzW2lkZW50aWZpZXJdIDogJyc7XHJcbiAgICB9KTtcclxufVxyXG5jb25zdCBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnO1xyXG5jb25zdCBtYWtlU3ltYm9sID0gKG5hbWUpID0+IGhhc1N5bWJvbCA/IFN5bWJvbChuYW1lKSA6IG5hbWU7XHJcbmNvbnN0IGdlbmVyYXRlRm9ybWF0Q2FjaGVLZXkgPSAobG9jYWxlLCBrZXksIHNvdXJjZSkgPT4gZnJpZW5kbHlKU09Oc3RyaW5naWZ5KHsgbDogbG9jYWxlLCBrOiBrZXksIHM6IHNvdXJjZSB9KTtcclxuY29uc3QgZnJpZW5kbHlKU09Oc3RyaW5naWZ5ID0gKGpzb24pID0+IEpTT04uc3RyaW5naWZ5KGpzb24pXHJcbiAgICAucmVwbGFjZSgvXFx1MjAyOC9nLCAnXFxcXHUyMDI4JylcclxuICAgIC5yZXBsYWNlKC9cXHUyMDI5L2csICdcXFxcdTIwMjknKVxyXG4gICAgLnJlcGxhY2UoL1xcdTAwMjcvZywgJ1xcXFx1MDAyNycpO1xyXG5jb25zdCBpc051bWJlciA9ICh2YWwpID0+IHR5cGVvZiB2YWwgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbCk7XHJcbmNvbnN0IGlzRGF0ZSA9ICh2YWwpID0+IHRvVHlwZVN0cmluZyh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XHJcbmNvbnN0IGlzUmVnRXhwID0gKHZhbCkgPT4gdG9UeXBlU3RyaW5nKHZhbCkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xyXG5jb25zdCBpc0VtcHR5T2JqZWN0ID0gKHZhbCkgPT4gaXNQbGFpbk9iamVjdCh2YWwpICYmIE9iamVjdC5rZXlzKHZhbCkubGVuZ3RoID09PSAwO1xyXG5mdW5jdGlvbiB3YXJuKG1zZywgZXJyKSB7XHJcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGBbaW50bGlmeV0gYCArIG1zZyk7XHJcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZXJyLnN0YWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuY29uc3QgYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcclxubGV0IF9nbG9iYWxUaGlzO1xyXG5jb25zdCBnZXRHbG9iYWxUaGlzID0gKCkgPT4ge1xyXG4gICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICByZXR1cm4gKF9nbG9iYWxUaGlzIHx8XHJcbiAgICAgICAgKF9nbG9iYWxUaGlzID1cclxuICAgICAgICAgICAgdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgICAgICAgICA/IGdsb2JhbFRoaXNcclxuICAgICAgICAgICAgICAgIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgPyBzZWxmXHJcbiAgICAgICAgICAgICAgICAgICAgOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHdpbmRvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGdsb2JhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fSkpO1xyXG59O1xyXG5mdW5jdGlvbiBlc2NhcGVIdG1sKHJhd1RleHQpIHtcclxuICAgIHJldHVybiByYXdUZXh0XHJcbiAgICAgICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxyXG4gICAgICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcclxuICAgICAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXHJcbiAgICAgICAgLnJlcGxhY2UoLycvZywgJyZhcG9zOycpO1xyXG59XHJcbmNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcclxuZnVuY3Rpb24gaGFzT3duKG9iaiwga2V5KSB7XHJcbiAgICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XHJcbn1cclxuLyogZXNsaW50LWVuYWJsZSAqL1xyXG4vKipcclxuICogVXNlZnVsIFV0aWxpdGllcyBCeSBFdmFuIHlvdVxyXG4gKiBNb2RpZmllZCBieSBrYXp1eWEga2F3YWd1Y2hpXHJcbiAqIE1JVCBMaWNlbnNlXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92dWUtbmV4dC9ibG9iL21hc3Rlci9wYWNrYWdlcy9zaGFyZWQvc3JjL2luZGV4LnRzXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92dWUtbmV4dC9ibG9iL21hc3Rlci9wYWNrYWdlcy9zaGFyZWQvc3JjL2NvZGVmcmFtZS50c1xyXG4gKi9cclxuY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XHJcbmNvbnN0IGlzRnVuY3Rpb24gPSAodmFsKSA9PiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nO1xyXG5jb25zdCBpc1N0cmluZyA9ICh2YWwpID0+IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xyXG5jb25zdCBpc0Jvb2xlYW4gPSAodmFsKSA9PiB0eXBlb2YgdmFsID09PSAnYm9vbGVhbic7XHJcbmNvbnN0IGlzU3ltYm9sID0gKHZhbCkgPT4gdHlwZW9mIHZhbCA9PT0gJ3N5bWJvbCc7XHJcbmNvbnN0IGlzT2JqZWN0ID0gKHZhbCkgPT4gLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xyXG5jb25zdCBpc1Byb21pc2UgPSAodmFsKSA9PiB7XHJcbiAgICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC50aGVuKSAmJiBpc0Z1bmN0aW9uKHZhbC5jYXRjaCk7XHJcbn07XHJcbmNvbnN0IG9iamVjdFRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcclxuY29uc3QgdG9UeXBlU3RyaW5nID0gKHZhbHVlKSA9PiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcclxuY29uc3QgaXNQbGFpbk9iamVjdCA9ICh2YWwpID0+IHRvVHlwZVN0cmluZyh2YWwpID09PSAnW29iamVjdCBPYmplY3RdJztcclxuLy8gZm9yIGNvbnZlcnRpbmcgbGlzdCBhbmQgbmFtZWQgdmFsdWVzIHRvIGRpc3BsYXllZCBzdHJpbmdzLlxyXG5jb25zdCB0b0Rpc3BsYXlTdHJpbmcgPSAodmFsKSA9PiB7XHJcbiAgICByZXR1cm4gdmFsID09IG51bGxcclxuICAgICAgICA/ICcnXHJcbiAgICAgICAgOiBpc0FycmF5KHZhbCkgfHwgKGlzUGxhaW5PYmplY3QodmFsKSAmJiB2YWwudG9TdHJpbmcgPT09IG9iamVjdFRvU3RyaW5nKVxyXG4gICAgICAgICAgICA/IEpTT04uc3RyaW5naWZ5KHZhbCwgbnVsbCwgMilcclxuICAgICAgICAgICAgOiBTdHJpbmcodmFsKTtcclxufTtcclxuY29uc3QgUkFOR0UgPSAyO1xyXG5mdW5jdGlvbiBnZW5lcmF0ZUNvZGVGcmFtZShzb3VyY2UsIHN0YXJ0ID0gMCwgZW5kID0gc291cmNlLmxlbmd0aCkge1xyXG4gICAgY29uc3QgbGluZXMgPSBzb3VyY2Uuc3BsaXQoL1xccj9cXG4vKTtcclxuICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICBjb25zdCByZXMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb3VudCArPSBsaW5lc1tpXS5sZW5ndGggKyAxO1xyXG4gICAgICAgIGlmIChjb3VudCA+PSBzdGFydCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gaSAtIFJBTkdFOyBqIDw9IGkgKyBSQU5HRSB8fCBlbmQgPiBjb3VudDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaiA8IDAgfHwgaiA+PSBsaW5lcy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5lID0gaiArIDE7XHJcbiAgICAgICAgICAgICAgICByZXMucHVzaChgJHtsaW5lfSR7JyAnLnJlcGVhdCgzIC0gU3RyaW5nKGxpbmUpLmxlbmd0aCl9fCAgJHtsaW5lc1tqXX1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVMZW5ndGggPSBsaW5lc1tqXS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBpZiAoaiA9PT0gaSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHB1c2ggdW5kZXJsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFkID0gc3RhcnQgLSAoY291bnQgLSBsaW5lTGVuZ3RoKSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gTWF0aC5tYXgoMSwgZW5kID4gY291bnQgPyBsaW5lTGVuZ3RoIC0gcGFkIDogZW5kIC0gc3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKGAgICB8ICBgICsgJyAnLnJlcGVhdChwYWQpICsgJ14nLnJlcGVhdChsZW5ndGgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGogPiBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVuZCA+IGNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IE1hdGgubWF4KE1hdGgubWluKGVuZCAtIGNvdW50LCBsaW5lTGVuZ3RoKSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKGAgICB8ICBgICsgJ14nLnJlcGVhdChsZW5ndGgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQgKz0gbGluZUxlbmd0aCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcy5qb2luKCdcXG4nKTtcclxufVxuXG4vKipcclxuICogRXZlbnQgZW1pdHRlciwgZm9ya2VkIGZyb20gdGhlIGJlbG93OlxyXG4gKiAtIG9yaWdpbmFsIHJlcG9zaXRvcnkgdXJsOiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHRcclxuICogLSBjb2RlIHVybDogaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvbWFzdGVyL3NyYy9pbmRleC50c1xyXG4gKiAtIGF1dGhvcjogSmFzb24gTWlsbGVyIChodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0KVxyXG4gKiAtIGxpY2Vuc2U6IE1JVFxyXG4gKi9cclxuLyoqXHJcbiAqIENyZWF0ZSBhIGV2ZW50IGVtaXR0ZXJcclxuICpcclxuICogQHJldHVybnMgQW4gZXZlbnQgZW1pdHRlclxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlRW1pdHRlcigpIHtcclxuICAgIGNvbnN0IGV2ZW50cyA9IG5ldyBNYXAoKTtcclxuICAgIGNvbnN0IGVtaXR0ZXIgPSB7XHJcbiAgICAgICAgZXZlbnRzLFxyXG4gICAgICAgIG9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXJzID0gZXZlbnRzLmdldChldmVudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFkZGVkID0gaGFuZGxlcnMgJiYgaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcclxuICAgICAgICAgICAgaWYgKCFhZGRlZCkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnRzLnNldChldmVudCwgW2hhbmRsZXJdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb2ZmKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXJzID0gZXZlbnRzLmdldChldmVudCk7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVycykge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlcnMuc3BsaWNlKGhhbmRsZXJzLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbWl0KGV2ZW50LCBwYXlsb2FkKSB7XHJcbiAgICAgICAgICAgIChldmVudHMuZ2V0KGV2ZW50KSB8fCBbXSlcclxuICAgICAgICAgICAgICAgIC5zbGljZSgpXHJcbiAgICAgICAgICAgICAgICAubWFwKGhhbmRsZXIgPT4gaGFuZGxlcihwYXlsb2FkKSk7XHJcbiAgICAgICAgICAgIChldmVudHMuZ2V0KCcqJykgfHwgW10pXHJcbiAgICAgICAgICAgICAgICAuc2xpY2UoKVxyXG4gICAgICAgICAgICAgICAgLm1hcChoYW5kbGVyID0+IGhhbmRsZXIoZXZlbnQsIHBheWxvYWQpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGVtaXR0ZXI7XHJcbn1cblxuZXhwb3J0IHsgYXNzaWduLCBjcmVhdGVFbWl0dGVyLCBlc2NhcGVIdG1sLCBmb3JtYXQsIGZyaWVuZGx5SlNPTnN0cmluZ2lmeSwgZ2VuZXJhdGVDb2RlRnJhbWUsIGdlbmVyYXRlRm9ybWF0Q2FjaGVLZXksIGdldEdsb2JhbFRoaXMsIGhhc093biwgaW5Ccm93c2VyLCBpc0FycmF5LCBpc0Jvb2xlYW4sIGlzRGF0ZSwgaXNFbXB0eU9iamVjdCwgaXNGdW5jdGlvbiwgaXNOdW1iZXIsIGlzT2JqZWN0LCBpc1BsYWluT2JqZWN0LCBpc1Byb21pc2UsIGlzUmVnRXhwLCBpc1N0cmluZywgaXNTeW1ib2wsIG1ha2VTeW1ib2wsIG1hcmssIG1lYXN1cmUsIG9iamVjdFRvU3RyaW5nLCB0b0Rpc3BsYXlTdHJpbmcsIHRvVHlwZVN0cmluZywgd2FybiB9O1xuIiwiLyohXG4gICogbWVzc2FnZS1jb21waWxlciB2OS4yLjJcbiAgKiAoYykgMjAyMiBrYXp1eWEga2F3YWd1Y2hpXG4gICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICAqL1xuaW1wb3J0IHsgZm9ybWF0LCBhc3NpZ24sIGlzU3RyaW5nIH0gZnJvbSAnQGludGxpZnkvc2hhcmVkJztcblxuY29uc3QgQ29tcGlsZUVycm9yQ29kZXMgPSB7XHJcbiAgICAvLyB0b2tlbml6ZXIgZXJyb3IgY29kZXNcclxuICAgIEVYUEVDVEVEX1RPS0VOOiAxLFxyXG4gICAgSU5WQUxJRF9UT0tFTl9JTl9QTEFDRUhPTERFUjogMixcclxuICAgIFVOVEVSTUlOQVRFRF9TSU5HTEVfUVVPVEVfSU5fUExBQ0VIT0xERVI6IDMsXHJcbiAgICBVTktOT1dOX0VTQ0FQRV9TRVFVRU5DRTogNCxcclxuICAgIElOVkFMSURfVU5JQ09ERV9FU0NBUEVfU0VRVUVOQ0U6IDUsXHJcbiAgICBVTkJBTEFOQ0VEX0NMT1NJTkdfQlJBQ0U6IDYsXHJcbiAgICBVTlRFUk1JTkFURURfQ0xPU0lOR19CUkFDRTogNyxcclxuICAgIEVNUFRZX1BMQUNFSE9MREVSOiA4LFxyXG4gICAgTk9UX0FMTE9XX05FU1RfUExBQ0VIT0xERVI6IDksXHJcbiAgICBJTlZBTElEX0xJTktFRF9GT1JNQVQ6IDEwLFxyXG4gICAgLy8gcGFyc2VyIGVycm9yIGNvZGVzXHJcbiAgICBNVVNUX0hBVkVfTUVTU0FHRVNfSU5fUExVUkFMOiAxMSxcclxuICAgIFVORVhQRUNURURfRU1QVFlfTElOS0VEX01PRElGSUVSOiAxMixcclxuICAgIFVORVhQRUNURURfRU1QVFlfTElOS0VEX0tFWTogMTMsXHJcbiAgICBVTkVYUEVDVEVEX0xFWElDQUxfQU5BTFlTSVM6IDE0LFxyXG4gICAgLy8gU3BlY2lhbCB2YWx1ZSBmb3IgaGlnaGVyLW9yZGVyIGNvbXBpbGVycyB0byBwaWNrIHVwIHRoZSBsYXN0IGNvZGVcclxuICAgIC8vIHRvIGF2b2lkIGNvbGxpc2lvbiBvZiBlcnJvciBjb2Rlcy4gVGhpcyBzaG91bGQgYWx3YXlzIGJlIGtlcHQgYXMgdGhlIGxhc3RcclxuICAgIC8vIGl0ZW0uXHJcbiAgICBfX0VYVEVORF9QT0lOVF9fOiAxNVxyXG59O1xyXG4vKiogQGludGVybmFsICovXHJcbmNvbnN0IGVycm9yTWVzc2FnZXMgPSB7XHJcbiAgICAvLyB0b2tlbml6ZXIgZXJyb3IgbWVzc2FnZXNcclxuICAgIFtDb21waWxlRXJyb3JDb2Rlcy5FWFBFQ1RFRF9UT0tFTl06IGBFeHBlY3RlZCB0b2tlbjogJ3swfSdgLFxyXG4gICAgW0NvbXBpbGVFcnJvckNvZGVzLklOVkFMSURfVE9LRU5fSU5fUExBQ0VIT0xERVJdOiBgSW52YWxpZCB0b2tlbiBpbiBwbGFjZWhvbGRlcjogJ3swfSdgLFxyXG4gICAgW0NvbXBpbGVFcnJvckNvZGVzLlVOVEVSTUlOQVRFRF9TSU5HTEVfUVVPVEVfSU5fUExBQ0VIT0xERVJdOiBgVW50ZXJtaW5hdGVkIHNpbmdsZSBxdW90ZSBpbiBwbGFjZWhvbGRlcmAsXHJcbiAgICBbQ29tcGlsZUVycm9yQ29kZXMuVU5LTk9XTl9FU0NBUEVfU0VRVUVOQ0VdOiBgVW5rbm93biBlc2NhcGUgc2VxdWVuY2U6IFxcXFx7MH1gLFxyXG4gICAgW0NvbXBpbGVFcnJvckNvZGVzLklOVkFMSURfVU5JQ09ERV9FU0NBUEVfU0VRVUVOQ0VdOiBgSW52YWxpZCB1bmljb2RlIGVzY2FwZSBzZXF1ZW5jZTogezB9YCxcclxuICAgIFtDb21waWxlRXJyb3JDb2Rlcy5VTkJBTEFOQ0VEX0NMT1NJTkdfQlJBQ0VdOiBgVW5iYWxhbmNlZCBjbG9zaW5nIGJyYWNlYCxcclxuICAgIFtDb21waWxlRXJyb3JDb2Rlcy5VTlRFUk1JTkFURURfQ0xPU0lOR19CUkFDRV06IGBVbnRlcm1pbmF0ZWQgY2xvc2luZyBicmFjZWAsXHJcbiAgICBbQ29tcGlsZUVycm9yQ29kZXMuRU1QVFlfUExBQ0VIT0xERVJdOiBgRW1wdHkgcGxhY2Vob2xkZXJgLFxyXG4gICAgW0NvbXBpbGVFcnJvckNvZGVzLk5PVF9BTExPV19ORVNUX1BMQUNFSE9MREVSXTogYE5vdCBhbGxvd2VkIG5lc3QgcGxhY2Vob2xkZXJgLFxyXG4gICAgW0NvbXBpbGVFcnJvckNvZGVzLklOVkFMSURfTElOS0VEX0ZPUk1BVF06IGBJbnZhbGlkIGxpbmtlZCBmb3JtYXRgLFxyXG4gICAgLy8gcGFyc2VyIGVycm9yIG1lc3NhZ2VzXHJcbiAgICBbQ29tcGlsZUVycm9yQ29kZXMuTVVTVF9IQVZFX01FU1NBR0VTX0lOX1BMVVJBTF06IGBQbHVyYWwgbXVzdCBoYXZlIG1lc3NhZ2VzYCxcclxuICAgIFtDb21waWxlRXJyb3JDb2Rlcy5VTkVYUEVDVEVEX0VNUFRZX0xJTktFRF9NT0RJRklFUl06IGBVbmV4cGVjdGVkIGVtcHR5IGxpbmtlZCBtb2RpZmllcmAsXHJcbiAgICBbQ29tcGlsZUVycm9yQ29kZXMuVU5FWFBFQ1RFRF9FTVBUWV9MSU5LRURfS0VZXTogYFVuZXhwZWN0ZWQgZW1wdHkgbGlua2VkIGtleWAsXHJcbiAgICBbQ29tcGlsZUVycm9yQ29kZXMuVU5FWFBFQ1RFRF9MRVhJQ0FMX0FOQUxZU0lTXTogYFVuZXhwZWN0ZWQgbGV4aWNhbCBhbmFseXNpcyBpbiB0b2tlbjogJ3swfSdgXHJcbn07XHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbXBpbGVFcnJvcihjb2RlLCBsb2MsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgY29uc3QgeyBkb21haW4sIG1lc3NhZ2VzLCBhcmdzIH0gPSBvcHRpb25zO1xyXG4gICAgY29uc3QgbXNnID0gKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpXHJcbiAgICAgICAgPyBmb3JtYXQoKG1lc3NhZ2VzIHx8IGVycm9yTWVzc2FnZXMpW2NvZGVdIHx8ICcnLCAuLi4oYXJncyB8fCBbXSkpXHJcbiAgICAgICAgOiBjb2RlO1xyXG4gICAgY29uc3QgZXJyb3IgPSBuZXcgU3ludGF4RXJyb3IoU3RyaW5nKG1zZykpO1xyXG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XHJcbiAgICBpZiAobG9jKSB7XHJcbiAgICAgICAgZXJyb3IubG9jYXRpb24gPSBsb2M7XHJcbiAgICB9XHJcbiAgICBlcnJvci5kb21haW4gPSBkb21haW47XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbn1cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5mdW5jdGlvbiBkZWZhdWx0T25FcnJvcihlcnJvcikge1xyXG4gICAgdGhyb3cgZXJyb3I7XHJcbn1cblxuY29uc3QgTG9jYXRpb25TdHViID0ge1xyXG4gICAgc3RhcnQ6IHsgbGluZTogMSwgY29sdW1uOiAxLCBvZmZzZXQ6IDAgfSxcclxuICAgIGVuZDogeyBsaW5lOiAxLCBjb2x1bW46IDEsIG9mZnNldDogMCB9XHJcbn07XHJcbmZ1bmN0aW9uIGNyZWF0ZVBvc2l0aW9uKGxpbmUsIGNvbHVtbiwgb2Zmc2V0KSB7XHJcbiAgICByZXR1cm4geyBsaW5lLCBjb2x1bW4sIG9mZnNldCB9O1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKHN0YXJ0LCBlbmQsIHNvdXJjZSkge1xyXG4gICAgY29uc3QgbG9jID0geyBzdGFydCwgZW5kIH07XHJcbiAgICBpZiAoc291cmNlICE9IG51bGwpIHtcclxuICAgICAgICBsb2Muc291cmNlID0gc291cmNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxvYztcclxufVxuXG5jb25zdCBDSEFSX1NQID0gJyAnO1xyXG5jb25zdCBDSEFSX0NSID0gJ1xccic7XHJcbmNvbnN0IENIQVJfTEYgPSAnXFxuJztcclxuY29uc3QgQ0hBUl9MUyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyMDI4KTtcclxuY29uc3QgQ0hBUl9QUyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHgyMDI5KTtcclxuZnVuY3Rpb24gY3JlYXRlU2Nhbm5lcihzdHIpIHtcclxuICAgIGNvbnN0IF9idWYgPSBzdHI7XHJcbiAgICBsZXQgX2luZGV4ID0gMDtcclxuICAgIGxldCBfbGluZSA9IDE7XHJcbiAgICBsZXQgX2NvbHVtbiA9IDE7XHJcbiAgICBsZXQgX3BlZWtPZmZzZXQgPSAwO1xyXG4gICAgY29uc3QgaXNDUkxGID0gKGluZGV4KSA9PiBfYnVmW2luZGV4XSA9PT0gQ0hBUl9DUiAmJiBfYnVmW2luZGV4ICsgMV0gPT09IENIQVJfTEY7XHJcbiAgICBjb25zdCBpc0xGID0gKGluZGV4KSA9PiBfYnVmW2luZGV4XSA9PT0gQ0hBUl9MRjtcclxuICAgIGNvbnN0IGlzUFMgPSAoaW5kZXgpID0+IF9idWZbaW5kZXhdID09PSBDSEFSX1BTO1xyXG4gICAgY29uc3QgaXNMUyA9IChpbmRleCkgPT4gX2J1ZltpbmRleF0gPT09IENIQVJfTFM7XHJcbiAgICBjb25zdCBpc0xpbmVFbmQgPSAoaW5kZXgpID0+IGlzQ1JMRihpbmRleCkgfHwgaXNMRihpbmRleCkgfHwgaXNQUyhpbmRleCkgfHwgaXNMUyhpbmRleCk7XHJcbiAgICBjb25zdCBpbmRleCA9ICgpID0+IF9pbmRleDtcclxuICAgIGNvbnN0IGxpbmUgPSAoKSA9PiBfbGluZTtcclxuICAgIGNvbnN0IGNvbHVtbiA9ICgpID0+IF9jb2x1bW47XHJcbiAgICBjb25zdCBwZWVrT2Zmc2V0ID0gKCkgPT4gX3BlZWtPZmZzZXQ7XHJcbiAgICBjb25zdCBjaGFyQXQgPSAob2Zmc2V0KSA9PiBpc0NSTEYob2Zmc2V0KSB8fCBpc1BTKG9mZnNldCkgfHwgaXNMUyhvZmZzZXQpID8gQ0hBUl9MRiA6IF9idWZbb2Zmc2V0XTtcclxuICAgIGNvbnN0IGN1cnJlbnRDaGFyID0gKCkgPT4gY2hhckF0KF9pbmRleCk7XHJcbiAgICBjb25zdCBjdXJyZW50UGVlayA9ICgpID0+IGNoYXJBdChfaW5kZXggKyBfcGVla09mZnNldCk7XHJcbiAgICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgICAgIF9wZWVrT2Zmc2V0ID0gMDtcclxuICAgICAgICBpZiAoaXNMaW5lRW5kKF9pbmRleCkpIHtcclxuICAgICAgICAgICAgX2xpbmUrKztcclxuICAgICAgICAgICAgX2NvbHVtbiA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0NSTEYoX2luZGV4KSkge1xyXG4gICAgICAgICAgICBfaW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgX2luZGV4Kys7XHJcbiAgICAgICAgX2NvbHVtbisrO1xyXG4gICAgICAgIHJldHVybiBfYnVmW19pbmRleF07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwZWVrKCkge1xyXG4gICAgICAgIGlmIChpc0NSTEYoX2luZGV4ICsgX3BlZWtPZmZzZXQpKSB7XHJcbiAgICAgICAgICAgIF9wZWVrT2Zmc2V0Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9wZWVrT2Zmc2V0Kys7XHJcbiAgICAgICAgcmV0dXJuIF9idWZbX2luZGV4ICsgX3BlZWtPZmZzZXRdO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XHJcbiAgICAgICAgX2luZGV4ID0gMDtcclxuICAgICAgICBfbGluZSA9IDE7XHJcbiAgICAgICAgX2NvbHVtbiA9IDE7XHJcbiAgICAgICAgX3BlZWtPZmZzZXQgPSAwO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVzZXRQZWVrKG9mZnNldCA9IDApIHtcclxuICAgICAgICBfcGVla09mZnNldCA9IG9mZnNldDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNraXBUb1BlZWsoKSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gX2luZGV4ICsgX3BlZWtPZmZzZXQ7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVubW9kaWZpZWQtbG9vcC1jb25kaXRpb25cclxuICAgICAgICB3aGlsZSAodGFyZ2V0ICE9PSBfaW5kZXgpIHtcclxuICAgICAgICAgICAgbmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfcGVla09mZnNldCA9IDA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluZGV4LFxyXG4gICAgICAgIGxpbmUsXHJcbiAgICAgICAgY29sdW1uLFxyXG4gICAgICAgIHBlZWtPZmZzZXQsXHJcbiAgICAgICAgY2hhckF0LFxyXG4gICAgICAgIGN1cnJlbnRDaGFyLFxyXG4gICAgICAgIGN1cnJlbnRQZWVrLFxyXG4gICAgICAgIG5leHQsXHJcbiAgICAgICAgcGVlayxcclxuICAgICAgICByZXNldCxcclxuICAgICAgICByZXNldFBlZWssXHJcbiAgICAgICAgc2tpcFRvUGVla1xyXG4gICAgfTtcclxufVxuXG5jb25zdCBFT0YgPSB1bmRlZmluZWQ7XHJcbmNvbnN0IExJVEVSQUxfREVMSU1JVEVSID0gXCInXCI7XHJcbmNvbnN0IEVSUk9SX0RPTUFJTiQxID0gJ3Rva2VuaXplcic7XHJcbmZ1bmN0aW9uIGNyZWF0ZVRva2VuaXplcihzb3VyY2UsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgY29uc3QgbG9jYXRpb24gPSBvcHRpb25zLmxvY2F0aW9uICE9PSBmYWxzZTtcclxuICAgIGNvbnN0IF9zY25yID0gY3JlYXRlU2Nhbm5lcihzb3VyY2UpO1xyXG4gICAgY29uc3QgY3VycmVudE9mZnNldCA9ICgpID0+IF9zY25yLmluZGV4KCk7XHJcbiAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSAoKSA9PiBjcmVhdGVQb3NpdGlvbihfc2Nuci5saW5lKCksIF9zY25yLmNvbHVtbigpLCBfc2Nuci5pbmRleCgpKTtcclxuICAgIGNvbnN0IF9pbml0TG9jID0gY3VycmVudFBvc2l0aW9uKCk7XHJcbiAgICBjb25zdCBfaW5pdE9mZnNldCA9IGN1cnJlbnRPZmZzZXQoKTtcclxuICAgIGNvbnN0IF9jb250ZXh0ID0ge1xyXG4gICAgICAgIGN1cnJlbnRUeXBlOiAxNCAvKiBFT0YgKi8sXHJcbiAgICAgICAgb2Zmc2V0OiBfaW5pdE9mZnNldCxcclxuICAgICAgICBzdGFydExvYzogX2luaXRMb2MsXHJcbiAgICAgICAgZW5kTG9jOiBfaW5pdExvYyxcclxuICAgICAgICBsYXN0VHlwZTogMTQgLyogRU9GICovLFxyXG4gICAgICAgIGxhc3RPZmZzZXQ6IF9pbml0T2Zmc2V0LFxyXG4gICAgICAgIGxhc3RTdGFydExvYzogX2luaXRMb2MsXHJcbiAgICAgICAgbGFzdEVuZExvYzogX2luaXRMb2MsXHJcbiAgICAgICAgYnJhY2VOZXN0OiAwLFxyXG4gICAgICAgIGluTGlua2VkOiBmYWxzZSxcclxuICAgICAgICB0ZXh0OiAnJ1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGNvbnRleHQgPSAoKSA9PiBfY29udGV4dDtcclxuICAgIGNvbnN0IHsgb25FcnJvciB9ID0gb3B0aW9ucztcclxuICAgIGZ1bmN0aW9uIGVtaXRFcnJvcihjb2RlLCBwb3MsIG9mZnNldCwgLi4uYXJncykge1xyXG4gICAgICAgIGNvbnN0IGN0eCA9IGNvbnRleHQoKTtcclxuICAgICAgICBwb3MuY29sdW1uICs9IG9mZnNldDtcclxuICAgICAgICBwb3Mub2Zmc2V0ICs9IG9mZnNldDtcclxuICAgICAgICBpZiAob25FcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBsb2MgPSBjcmVhdGVMb2NhdGlvbihjdHguc3RhcnRMb2MsIHBvcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVyciA9IGNyZWF0ZUNvbXBpbGVFcnJvcihjb2RlLCBsb2MsIHtcclxuICAgICAgICAgICAgICAgIGRvbWFpbjogRVJST1JfRE9NQUlOJDEsXHJcbiAgICAgICAgICAgICAgICBhcmdzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBvbkVycm9yKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0VG9rZW4oY29udGV4dCwgdHlwZSwgdmFsdWUpIHtcclxuICAgICAgICBjb250ZXh0LmVuZExvYyA9IGN1cnJlbnRQb3NpdGlvbigpO1xyXG4gICAgICAgIGNvbnRleHQuY3VycmVudFR5cGUgPSB0eXBlO1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0geyB0eXBlIH07XHJcbiAgICAgICAgaWYgKGxvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIHRva2VuLmxvYyA9IGNyZWF0ZUxvY2F0aW9uKGNvbnRleHQuc3RhcnRMb2MsIGNvbnRleHQuZW5kTG9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdG9rZW4udmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0RW5kVG9rZW4gPSAoY29udGV4dCkgPT4gZ2V0VG9rZW4oY29udGV4dCwgMTQgLyogRU9GICovKTtcclxuICAgIGZ1bmN0aW9uIGVhdChzY25yLCBjaCkge1xyXG4gICAgICAgIGlmIChzY25yLmN1cnJlbnRDaGFyKCkgPT09IGNoKSB7XHJcbiAgICAgICAgICAgIHNjbnIubmV4dCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gY2g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlbWl0RXJyb3IoQ29tcGlsZUVycm9yQ29kZXMuRVhQRUNURURfVE9LRU4sIGN1cnJlbnRQb3NpdGlvbigpLCAwLCBjaCk7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwZWVrU3BhY2VzKHNjbnIpIHtcclxuICAgICAgICBsZXQgYnVmID0gJyc7XHJcbiAgICAgICAgd2hpbGUgKHNjbnIuY3VycmVudFBlZWsoKSA9PT0gQ0hBUl9TUCB8fCBzY25yLmN1cnJlbnRQZWVrKCkgPT09IENIQVJfTEYpIHtcclxuICAgICAgICAgICAgYnVmICs9IHNjbnIuY3VycmVudFBlZWsoKTtcclxuICAgICAgICAgICAgc2Nuci5wZWVrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBidWY7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBza2lwU3BhY2VzKHNjbnIpIHtcclxuICAgICAgICBjb25zdCBidWYgPSBwZWVrU3BhY2VzKHNjbnIpO1xyXG4gICAgICAgIHNjbnIuc2tpcFRvUGVlaygpO1xyXG4gICAgICAgIHJldHVybiBidWY7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc0lkZW50aWZpZXJTdGFydChjaCkge1xyXG4gICAgICAgIGlmIChjaCA9PT0gRU9GKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2MgPSBjaC5jaGFyQ29kZUF0KDApO1xyXG4gICAgICAgIHJldHVybiAoKGNjID49IDk3ICYmIGNjIDw9IDEyMikgfHwgLy8gYS16XHJcbiAgICAgICAgICAgIChjYyA+PSA2NSAmJiBjYyA8PSA5MCkgfHwgLy8gQS1aXHJcbiAgICAgICAgICAgIGNjID09PSA5NSAvLyBfXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzTnVtYmVyU3RhcnQoY2gpIHtcclxuICAgICAgICBpZiAoY2ggPT09IEVPRikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNjID0gY2guY2hhckNvZGVBdCgwKTtcclxuICAgICAgICByZXR1cm4gY2MgPj0gNDggJiYgY2MgPD0gNTc7IC8vIDAtOVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNOYW1lZElkZW50aWZpZXJTdGFydChzY25yLCBjb250ZXh0KSB7XHJcbiAgICAgICAgY29uc3QgeyBjdXJyZW50VHlwZSB9ID0gY29udGV4dDtcclxuICAgICAgICBpZiAoY3VycmVudFR5cGUgIT09IDIgLyogQnJhY2VMZWZ0ICovKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGVla1NwYWNlcyhzY25yKTtcclxuICAgICAgICBjb25zdCByZXQgPSBpc0lkZW50aWZpZXJTdGFydChzY25yLmN1cnJlbnRQZWVrKCkpO1xyXG4gICAgICAgIHNjbnIucmVzZXRQZWVrKCk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzTGlzdElkZW50aWZpZXJTdGFydChzY25yLCBjb250ZXh0KSB7XHJcbiAgICAgICAgY29uc3QgeyBjdXJyZW50VHlwZSB9ID0gY29udGV4dDtcclxuICAgICAgICBpZiAoY3VycmVudFR5cGUgIT09IDIgLyogQnJhY2VMZWZ0ICovKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGVla1NwYWNlcyhzY25yKTtcclxuICAgICAgICBjb25zdCBjaCA9IHNjbnIuY3VycmVudFBlZWsoKSA9PT0gJy0nID8gc2Nuci5wZWVrKCkgOiBzY25yLmN1cnJlbnRQZWVrKCk7XHJcbiAgICAgICAgY29uc3QgcmV0ID0gaXNOdW1iZXJTdGFydChjaCk7XHJcbiAgICAgICAgc2Nuci5yZXNldFBlZWsoKTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNMaXRlcmFsU3RhcnQoc2NuciwgY29udGV4dCkge1xyXG4gICAgICAgIGNvbnN0IHsgY3VycmVudFR5cGUgfSA9IGNvbnRleHQ7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRUeXBlICE9PSAyIC8qIEJyYWNlTGVmdCAqLykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBlZWtTcGFjZXMoc2Nucik7XHJcbiAgICAgICAgY29uc3QgcmV0ID0gc2Nuci5jdXJyZW50UGVlaygpID09PSBMSVRFUkFMX0RFTElNSVRFUjtcclxuICAgICAgICBzY25yLnJlc2V0UGVlaygpO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc0xpbmtlZERvdFN0YXJ0KHNjbnIsIGNvbnRleHQpIHtcclxuICAgICAgICBjb25zdCB7IGN1cnJlbnRUeXBlIH0gPSBjb250ZXh0O1xyXG4gICAgICAgIGlmIChjdXJyZW50VHlwZSAhPT0gOCAvKiBMaW5rZWRBbGlhcyAqLykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBlZWtTcGFjZXMoc2Nucik7XHJcbiAgICAgICAgY29uc3QgcmV0ID0gc2Nuci5jdXJyZW50UGVlaygpID09PSBcIi5cIiAvKiBMaW5rZWREb3QgKi87XHJcbiAgICAgICAgc2Nuci5yZXNldFBlZWsoKTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNMaW5rZWRNb2RpZmllclN0YXJ0KHNjbnIsIGNvbnRleHQpIHtcclxuICAgICAgICBjb25zdCB7IGN1cnJlbnRUeXBlIH0gPSBjb250ZXh0O1xyXG4gICAgICAgIGlmIChjdXJyZW50VHlwZSAhPT0gOSAvKiBMaW5rZWREb3QgKi8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwZWVrU3BhY2VzKHNjbnIpO1xyXG4gICAgICAgIGNvbnN0IHJldCA9IGlzSWRlbnRpZmllclN0YXJ0KHNjbnIuY3VycmVudFBlZWsoKSk7XHJcbiAgICAgICAgc2Nuci5yZXNldFBlZWsoKTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNMaW5rZWREZWxpbWl0ZXJTdGFydChzY25yLCBjb250ZXh0KSB7XHJcbiAgICAgICAgY29uc3QgeyBjdXJyZW50VHlwZSB9ID0gY29udGV4dDtcclxuICAgICAgICBpZiAoIShjdXJyZW50VHlwZSA9PT0gOCAvKiBMaW5rZWRBbGlhcyAqLyB8fFxyXG4gICAgICAgICAgICBjdXJyZW50VHlwZSA9PT0gMTIgLyogTGlua2VkTW9kaWZpZXIgKi8pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGVla1NwYWNlcyhzY25yKTtcclxuICAgICAgICBjb25zdCByZXQgPSBzY25yLmN1cnJlbnRQZWVrKCkgPT09IFwiOlwiIC8qIExpbmtlZERlbGltaXRlciAqLztcclxuICAgICAgICBzY25yLnJlc2V0UGVlaygpO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc0xpbmtlZFJlZmVyU3RhcnQoc2NuciwgY29udGV4dCkge1xyXG4gICAgICAgIGNvbnN0IHsgY3VycmVudFR5cGUgfSA9IGNvbnRleHQ7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRUeXBlICE9PSAxMCAvKiBMaW5rZWREZWxpbWl0ZXIgKi8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBmbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2ggPSBzY25yLmN1cnJlbnRQZWVrKCk7XHJcbiAgICAgICAgICAgIGlmIChjaCA9PT0gXCJ7XCIgLyogQnJhY2VMZWZ0ICovKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNJZGVudGlmaWVyU3RhcnQoc2Nuci5wZWVrKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoID09PSBcIkBcIiAvKiBMaW5rZWRBbGlhcyAqLyB8fFxyXG4gICAgICAgICAgICAgICAgY2ggPT09IFwiJVwiIC8qIE1vZHVsbyAqLyB8fFxyXG4gICAgICAgICAgICAgICAgY2ggPT09IFwifFwiIC8qIFBpcGUgKi8gfHxcclxuICAgICAgICAgICAgICAgIGNoID09PSBcIjpcIiAvKiBMaW5rZWREZWxpbWl0ZXIgKi8gfHxcclxuICAgICAgICAgICAgICAgIGNoID09PSBcIi5cIiAvKiBMaW5rZWREb3QgKi8gfHxcclxuICAgICAgICAgICAgICAgIGNoID09PSBDSEFSX1NQIHx8XHJcbiAgICAgICAgICAgICAgICAhY2gpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaCA9PT0gQ0hBUl9MRikge1xyXG4gICAgICAgICAgICAgICAgc2Nuci5wZWVrKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIG90aGVyIGNoYXJhY3RlcnNcclxuICAgICAgICAgICAgICAgIHJldHVybiBpc0lkZW50aWZpZXJTdGFydChjaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHJldCA9IGZuKCk7XHJcbiAgICAgICAgc2Nuci5yZXNldFBlZWsoKTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNQbHVyYWxTdGFydChzY25yKSB7XHJcbiAgICAgICAgcGVla1NwYWNlcyhzY25yKTtcclxuICAgICAgICBjb25zdCByZXQgPSBzY25yLmN1cnJlbnRQZWVrKCkgPT09IFwifFwiIC8qIFBpcGUgKi87XHJcbiAgICAgICAgc2Nuci5yZXNldFBlZWsoKTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZGV0ZWN0TW9kdWxvU3RhcnQoc2Nucikge1xyXG4gICAgICAgIGNvbnN0IHNwYWNlcyA9IHBlZWtTcGFjZXMoc2Nucik7XHJcbiAgICAgICAgY29uc3QgcmV0ID0gc2Nuci5jdXJyZW50UGVlaygpID09PSBcIiVcIiAvKiBNb2R1bG8gKi8gJiZcclxuICAgICAgICAgICAgc2Nuci5wZWVrKCkgPT09IFwie1wiIC8qIEJyYWNlTGVmdCAqLztcclxuICAgICAgICBzY25yLnJlc2V0UGVlaygpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlzTW9kdWxvOiByZXQsXHJcbiAgICAgICAgICAgIGhhc1NwYWNlOiBzcGFjZXMubGVuZ3RoID4gMFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc1RleHRTdGFydChzY25yLCByZXNldCA9IHRydWUpIHtcclxuICAgICAgICBjb25zdCBmbiA9IChoYXNTcGFjZSA9IGZhbHNlLCBwcmV2ID0gJycsIGRldGVjdE1vZHVsbyA9IGZhbHNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoID0gc2Nuci5jdXJyZW50UGVlaygpO1xyXG4gICAgICAgICAgICBpZiAoY2ggPT09IFwie1wiIC8qIEJyYWNlTGVmdCAqLykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXYgPT09IFwiJVwiIC8qIE1vZHVsbyAqLyA/IGZhbHNlIDogaGFzU3BhY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2ggPT09IFwiQFwiIC8qIExpbmtlZEFsaWFzICovIHx8ICFjaCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXYgPT09IFwiJVwiIC8qIE1vZHVsbyAqLyA/IHRydWUgOiBoYXNTcGFjZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaCA9PT0gXCIlXCIgLyogTW9kdWxvICovKSB7XHJcbiAgICAgICAgICAgICAgICBzY25yLnBlZWsoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmbihoYXNTcGFjZSwgXCIlXCIgLyogTW9kdWxvICovLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaCA9PT0gXCJ8XCIgLyogUGlwZSAqLykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXYgPT09IFwiJVwiIC8qIE1vZHVsbyAqLyB8fCBkZXRlY3RNb2R1bG9cclxuICAgICAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgICAgICA6ICEocHJldiA9PT0gQ0hBUl9TUCB8fCBwcmV2ID09PSBDSEFSX0xGKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaCA9PT0gQ0hBUl9TUCkge1xyXG4gICAgICAgICAgICAgICAgc2Nuci5wZWVrKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm4odHJ1ZSwgQ0hBUl9TUCwgZGV0ZWN0TW9kdWxvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaCA9PT0gQ0hBUl9MRikge1xyXG4gICAgICAgICAgICAgICAgc2Nuci5wZWVrKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm4odHJ1ZSwgQ0hBUl9MRiwgZGV0ZWN0TW9kdWxvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCByZXQgPSBmbigpO1xyXG4gICAgICAgIHJlc2V0ICYmIHNjbnIucmVzZXRQZWVrKCk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRha2VDaGFyKHNjbnIsIGZuKSB7XHJcbiAgICAgICAgY29uc3QgY2ggPSBzY25yLmN1cnJlbnRDaGFyKCk7XHJcbiAgICAgICAgaWYgKGNoID09PSBFT0YpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEVPRjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZuKGNoKSkge1xyXG4gICAgICAgICAgICBzY25yLm5leHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNoO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRha2VJZGVudGlmaWVyQ2hhcihzY25yKSB7XHJcbiAgICAgICAgY29uc3QgY2xvc3VyZSA9IChjaCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYyA9IGNoLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKGNjID49IDk3ICYmIGNjIDw9IDEyMikgfHwgLy8gYS16XHJcbiAgICAgICAgICAgICAgICAoY2MgPj0gNjUgJiYgY2MgPD0gOTApIHx8IC8vIEEtWlxyXG4gICAgICAgICAgICAgICAgKGNjID49IDQ4ICYmIGNjIDw9IDU3KSB8fCAvLyAwLTlcclxuICAgICAgICAgICAgICAgIGNjID09PSA5NSB8fCAvLyBfXHJcbiAgICAgICAgICAgICAgICBjYyA9PT0gMzYgLy8gJFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRha2VDaGFyKHNjbnIsIGNsb3N1cmUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdGFrZURpZ2l0KHNjbnIpIHtcclxuICAgICAgICBjb25zdCBjbG9zdXJlID0gKGNoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNjID0gY2guY2hhckNvZGVBdCgwKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNjID49IDQ4ICYmIGNjIDw9IDU3OyAvLyAwLTlcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0YWtlQ2hhcihzY25yLCBjbG9zdXJlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRha2VIZXhEaWdpdChzY25yKSB7XHJcbiAgICAgICAgY29uc3QgY2xvc3VyZSA9IChjaCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYyA9IGNoLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKGNjID49IDQ4ICYmIGNjIDw9IDU3KSB8fCAvLyAwLTlcclxuICAgICAgICAgICAgICAgIChjYyA+PSA2NSAmJiBjYyA8PSA3MCkgfHwgLy8gQS1GXHJcbiAgICAgICAgICAgICAgICAoY2MgPj0gOTcgJiYgY2MgPD0gMTAyKSk7IC8vIGEtZlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRha2VDaGFyKHNjbnIsIGNsb3N1cmUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0RGlnaXRzKHNjbnIpIHtcclxuICAgICAgICBsZXQgY2ggPSAnJztcclxuICAgICAgICBsZXQgbnVtID0gJyc7XHJcbiAgICAgICAgd2hpbGUgKChjaCA9IHRha2VEaWdpdChzY25yKSkpIHtcclxuICAgICAgICAgICAgbnVtICs9IGNoO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVtO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVhZE1vZHVsbyhzY25yKSB7XHJcbiAgICAgICAgc2tpcFNwYWNlcyhzY25yKTtcclxuICAgICAgICBjb25zdCBjaCA9IHNjbnIuY3VycmVudENoYXIoKTtcclxuICAgICAgICBpZiAoY2ggIT09IFwiJVwiIC8qIE1vZHVsbyAqLykge1xyXG4gICAgICAgICAgICBlbWl0RXJyb3IoQ29tcGlsZUVycm9yQ29kZXMuRVhQRUNURURfVE9LRU4sIGN1cnJlbnRQb3NpdGlvbigpLCAwLCBjaCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNjbnIubmV4dCgpO1xyXG4gICAgICAgIHJldHVybiBcIiVcIiAvKiBNb2R1bG8gKi87XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZWFkVGV4dChzY25yKSB7XHJcbiAgICAgICAgbGV0IGJ1ZiA9ICcnO1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoID0gc2Nuci5jdXJyZW50Q2hhcigpO1xyXG4gICAgICAgICAgICBpZiAoY2ggPT09IFwie1wiIC8qIEJyYWNlTGVmdCAqLyB8fFxyXG4gICAgICAgICAgICAgICAgY2ggPT09IFwifVwiIC8qIEJyYWNlUmlnaHQgKi8gfHxcclxuICAgICAgICAgICAgICAgIGNoID09PSBcIkBcIiAvKiBMaW5rZWRBbGlhcyAqLyB8fFxyXG4gICAgICAgICAgICAgICAgY2ggPT09IFwifFwiIC8qIFBpcGUgKi8gfHxcclxuICAgICAgICAgICAgICAgICFjaCkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2ggPT09IFwiJVwiIC8qIE1vZHVsbyAqLykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzVGV4dFN0YXJ0KHNjbnIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVmICs9IGNoO1xyXG4gICAgICAgICAgICAgICAgICAgIHNjbnIubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2ggPT09IENIQVJfU1AgfHwgY2ggPT09IENIQVJfTEYpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc1RleHRTdGFydChzY25yKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZiArPSBjaDtcclxuICAgICAgICAgICAgICAgICAgICBzY25yLm5leHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzUGx1cmFsU3RhcnQoc2NucikpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZiArPSBjaDtcclxuICAgICAgICAgICAgICAgICAgICBzY25yLm5leHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJ1ZiArPSBjaDtcclxuICAgICAgICAgICAgICAgIHNjbnIubmV4dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBidWY7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZWFkTmFtZWRJZGVudGlmaWVyKHNjbnIpIHtcclxuICAgICAgICBza2lwU3BhY2VzKHNjbnIpO1xyXG4gICAgICAgIGxldCBjaCA9ICcnO1xyXG4gICAgICAgIGxldCBuYW1lID0gJyc7XHJcbiAgICAgICAgd2hpbGUgKChjaCA9IHRha2VJZGVudGlmaWVyQ2hhcihzY25yKSkpIHtcclxuICAgICAgICAgICAgbmFtZSArPSBjaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNjbnIuY3VycmVudENoYXIoKSA9PT0gRU9GKSB7XHJcbiAgICAgICAgICAgIGVtaXRFcnJvcihDb21waWxlRXJyb3JDb2Rlcy5VTlRFUk1JTkFURURfQ0xPU0lOR19CUkFDRSwgY3VycmVudFBvc2l0aW9uKCksIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlYWRMaXN0SWRlbnRpZmllcihzY25yKSB7XHJcbiAgICAgICAgc2tpcFNwYWNlcyhzY25yKTtcclxuICAgICAgICBsZXQgdmFsdWUgPSAnJztcclxuICAgICAgICBpZiAoc2Nuci5jdXJyZW50Q2hhcigpID09PSAnLScpIHtcclxuICAgICAgICAgICAgc2Nuci5uZXh0KCk7XHJcbiAgICAgICAgICAgIHZhbHVlICs9IGAtJHtnZXREaWdpdHMoc2Nucil9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhbHVlICs9IGdldERpZ2l0cyhzY25yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNjbnIuY3VycmVudENoYXIoKSA9PT0gRU9GKSB7XHJcbiAgICAgICAgICAgIGVtaXRFcnJvcihDb21waWxlRXJyb3JDb2Rlcy5VTlRFUk1JTkFURURfQ0xPU0lOR19CUkFDRSwgY3VycmVudFBvc2l0aW9uKCksIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZWFkTGl0ZXJhbChzY25yKSB7XHJcbiAgICAgICAgc2tpcFNwYWNlcyhzY25yKTtcclxuICAgICAgICBlYXQoc2NuciwgYFxcJ2ApO1xyXG4gICAgICAgIGxldCBjaCA9ICcnO1xyXG4gICAgICAgIGxldCBsaXRlcmFsID0gJyc7XHJcbiAgICAgICAgY29uc3QgZm4gPSAoeCkgPT4geCAhPT0gTElURVJBTF9ERUxJTUlURVIgJiYgeCAhPT0gQ0hBUl9MRjtcclxuICAgICAgICB3aGlsZSAoKGNoID0gdGFrZUNoYXIoc2NuciwgZm4pKSkge1xyXG4gICAgICAgICAgICBpZiAoY2ggPT09ICdcXFxcJykge1xyXG4gICAgICAgICAgICAgICAgbGl0ZXJhbCArPSByZWFkRXNjYXBlU2VxdWVuY2Uoc2Nucik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsaXRlcmFsICs9IGNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBzY25yLmN1cnJlbnRDaGFyKCk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnQgPT09IENIQVJfTEYgfHwgY3VycmVudCA9PT0gRU9GKSB7XHJcbiAgICAgICAgICAgIGVtaXRFcnJvcihDb21waWxlRXJyb3JDb2Rlcy5VTlRFUk1JTkFURURfU0lOR0xFX1FVT1RFX0lOX1BMQUNFSE9MREVSLCBjdXJyZW50UG9zaXRpb24oKSwgMCk7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IElzIGl0IGNvcnJlY3QgcmVhbGx5P1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudCA9PT0gQ0hBUl9MRikge1xyXG4gICAgICAgICAgICAgICAgc2Nuci5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICBlYXQoc2NuciwgYFxcJ2ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBsaXRlcmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlYXQoc2NuciwgYFxcJ2ApO1xyXG4gICAgICAgIHJldHVybiBsaXRlcmFsO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVhZEVzY2FwZVNlcXVlbmNlKHNjbnIpIHtcclxuICAgICAgICBjb25zdCBjaCA9IHNjbnIuY3VycmVudENoYXIoKTtcclxuICAgICAgICBzd2l0Y2ggKGNoKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ1xcXFwnOlxyXG4gICAgICAgICAgICBjYXNlIGBcXCdgOlxyXG4gICAgICAgICAgICAgICAgc2Nuci5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYFxcXFwke2NofWA7XHJcbiAgICAgICAgICAgIGNhc2UgJ3UnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlYWRVbmljb2RlRXNjYXBlU2VxdWVuY2Uoc2NuciwgY2gsIDQpO1xyXG4gICAgICAgICAgICBjYXNlICdVJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiByZWFkVW5pY29kZUVzY2FwZVNlcXVlbmNlKHNjbnIsIGNoLCA2KTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGVtaXRFcnJvcihDb21waWxlRXJyb3JDb2Rlcy5VTktOT1dOX0VTQ0FQRV9TRVFVRU5DRSwgY3VycmVudFBvc2l0aW9uKCksIDAsIGNoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZWFkVW5pY29kZUVzY2FwZVNlcXVlbmNlKHNjbnIsIHVuaWNvZGUsIGRpZ2l0cykge1xyXG4gICAgICAgIGVhdChzY25yLCB1bmljb2RlKTtcclxuICAgICAgICBsZXQgc2VxdWVuY2UgPSAnJztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpZ2l0czsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoID0gdGFrZUhleERpZ2l0KHNjbnIpO1xyXG4gICAgICAgICAgICBpZiAoIWNoKSB7XHJcbiAgICAgICAgICAgICAgICBlbWl0RXJyb3IoQ29tcGlsZUVycm9yQ29kZXMuSU5WQUxJRF9VTklDT0RFX0VTQ0FQRV9TRVFVRU5DRSwgY3VycmVudFBvc2l0aW9uKCksIDAsIGBcXFxcJHt1bmljb2RlfSR7c2VxdWVuY2V9JHtzY25yLmN1cnJlbnRDaGFyKCl9YCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXF1ZW5jZSArPSBjaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGBcXFxcJHt1bmljb2RlfSR7c2VxdWVuY2V9YDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlYWRJbnZhbGlkSWRlbnRpZmllcihzY25yKSB7XHJcbiAgICAgICAgc2tpcFNwYWNlcyhzY25yKTtcclxuICAgICAgICBsZXQgY2ggPSAnJztcclxuICAgICAgICBsZXQgaWRlbnRpZmllcnMgPSAnJztcclxuICAgICAgICBjb25zdCBjbG9zdXJlID0gKGNoKSA9PiBjaCAhPT0gXCJ7XCIgLyogQnJhY2VMZWZ0ICovICYmXHJcbiAgICAgICAgICAgIGNoICE9PSBcIn1cIiAvKiBCcmFjZVJpZ2h0ICovICYmXHJcbiAgICAgICAgICAgIGNoICE9PSBDSEFSX1NQICYmXHJcbiAgICAgICAgICAgIGNoICE9PSBDSEFSX0xGO1xyXG4gICAgICAgIHdoaWxlICgoY2ggPSB0YWtlQ2hhcihzY25yLCBjbG9zdXJlKSkpIHtcclxuICAgICAgICAgICAgaWRlbnRpZmllcnMgKz0gY2g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpZGVudGlmaWVycztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlYWRMaW5rZWRNb2RpZmllcihzY25yKSB7XHJcbiAgICAgICAgbGV0IGNoID0gJyc7XHJcbiAgICAgICAgbGV0IG5hbWUgPSAnJztcclxuICAgICAgICB3aGlsZSAoKGNoID0gdGFrZUlkZW50aWZpZXJDaGFyKHNjbnIpKSkge1xyXG4gICAgICAgICAgICBuYW1lICs9IGNoO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlYWRMaW5rZWRSZWZlcihzY25yKSB7XHJcbiAgICAgICAgY29uc3QgZm4gPSAoZGV0ZWN0ID0gZmFsc2UsIGJ1ZikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjaCA9IHNjbnIuY3VycmVudENoYXIoKTtcclxuICAgICAgICAgICAgaWYgKGNoID09PSBcIntcIiAvKiBCcmFjZUxlZnQgKi8gfHxcclxuICAgICAgICAgICAgICAgIGNoID09PSBcIiVcIiAvKiBNb2R1bG8gKi8gfHxcclxuICAgICAgICAgICAgICAgIGNoID09PSBcIkBcIiAvKiBMaW5rZWRBbGlhcyAqLyB8fFxyXG4gICAgICAgICAgICAgICAgY2ggPT09IFwifFwiIC8qIFBpcGUgKi8gfHxcclxuICAgICAgICAgICAgICAgICFjaCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1ZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaCA9PT0gQ0hBUl9TUCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1ZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaCA9PT0gQ0hBUl9MRikge1xyXG4gICAgICAgICAgICAgICAgYnVmICs9IGNoO1xyXG4gICAgICAgICAgICAgICAgc2Nuci5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm4oZGV0ZWN0LCBidWYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnVmICs9IGNoO1xyXG4gICAgICAgICAgICAgICAgc2Nuci5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm4odHJ1ZSwgYnVmKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGZuKGZhbHNlLCAnJyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZWFkUGx1cmFsKHNjbnIpIHtcclxuICAgICAgICBza2lwU3BhY2VzKHNjbnIpO1xyXG4gICAgICAgIGNvbnN0IHBsdXJhbCA9IGVhdChzY25yLCBcInxcIiAvKiBQaXBlICovKTtcclxuICAgICAgICBza2lwU3BhY2VzKHNjbnIpO1xyXG4gICAgICAgIHJldHVybiBwbHVyYWw7XHJcbiAgICB9XHJcbiAgICAvLyBUT0RPOiBXZSBuZWVkIHJlZmFjdG9yaW5nIG9mIHRva2VuIHBhcnNpbmcgLi4uXHJcbiAgICBmdW5jdGlvbiByZWFkVG9rZW5JblBsYWNlaG9sZGVyKHNjbnIsIGNvbnRleHQpIHtcclxuICAgICAgICBsZXQgdG9rZW4gPSBudWxsO1xyXG4gICAgICAgIGNvbnN0IGNoID0gc2Nuci5jdXJyZW50Q2hhcigpO1xyXG4gICAgICAgIHN3aXRjaCAoY2gpIHtcclxuICAgICAgICAgICAgY2FzZSBcIntcIiAvKiBCcmFjZUxlZnQgKi86XHJcbiAgICAgICAgICAgICAgICBpZiAoY29udGV4dC5icmFjZU5lc3QgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtaXRFcnJvcihDb21waWxlRXJyb3JDb2Rlcy5OT1RfQUxMT1dfTkVTVF9QTEFDRUhPTERFUiwgY3VycmVudFBvc2l0aW9uKCksIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2Nuci5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB0b2tlbiA9IGdldFRva2VuKGNvbnRleHQsIDIgLyogQnJhY2VMZWZ0ICovLCBcIntcIiAvKiBCcmFjZUxlZnQgKi8pO1xyXG4gICAgICAgICAgICAgICAgc2tpcFNwYWNlcyhzY25yKTtcclxuICAgICAgICAgICAgICAgIGNvbnRleHQuYnJhY2VOZXN0Kys7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW47XHJcbiAgICAgICAgICAgIGNhc2UgXCJ9XCIgLyogQnJhY2VSaWdodCAqLzpcclxuICAgICAgICAgICAgICAgIGlmIChjb250ZXh0LmJyYWNlTmVzdCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmN1cnJlbnRUeXBlID09PSAyIC8qIEJyYWNlTGVmdCAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtaXRFcnJvcihDb21waWxlRXJyb3JDb2Rlcy5FTVBUWV9QTEFDRUhPTERFUiwgY3VycmVudFBvc2l0aW9uKCksIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2Nuci5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB0b2tlbiA9IGdldFRva2VuKGNvbnRleHQsIDMgLyogQnJhY2VSaWdodCAqLywgXCJ9XCIgLyogQnJhY2VSaWdodCAqLyk7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LmJyYWNlTmVzdC0tO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dC5icmFjZU5lc3QgPiAwICYmIHNraXBTcGFjZXMoc2Nucik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29udGV4dC5pbkxpbmtlZCAmJiBjb250ZXh0LmJyYWNlTmVzdCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuaW5MaW5rZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbjtcclxuICAgICAgICAgICAgY2FzZSBcIkBcIiAvKiBMaW5rZWRBbGlhcyAqLzpcclxuICAgICAgICAgICAgICAgIGlmIChjb250ZXh0LmJyYWNlTmVzdCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBlbWl0RXJyb3IoQ29tcGlsZUVycm9yQ29kZXMuVU5URVJNSU5BVEVEX0NMT1NJTkdfQlJBQ0UsIGN1cnJlbnRQb3NpdGlvbigpLCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRva2VuID0gcmVhZFRva2VuSW5MaW5rZWQoc2NuciwgY29udGV4dCkgfHwgZ2V0RW5kVG9rZW4oY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LmJyYWNlTmVzdCA9IDA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW47XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsaWROYW1lZElkZW50aWZpZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbGlkTGlzdElkZW50aWZpZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbGlkTGl0ZXJhbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNQbHVyYWxTdGFydChzY25yKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZXh0LmJyYWNlTmVzdCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1pdEVycm9yKENvbXBpbGVFcnJvckNvZGVzLlVOVEVSTUlOQVRFRF9DTE9TSU5HX0JSQUNFLCBjdXJyZW50UG9zaXRpb24oKSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuID0gZ2V0VG9rZW4oY29udGV4dCwgMSAvKiBQaXBlICovLCByZWFkUGx1cmFsKHNjbnIpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZXNldFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuYnJhY2VOZXN0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmluTGlua2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRleHQuYnJhY2VOZXN0ID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIChjb250ZXh0LmN1cnJlbnRUeXBlID09PSA1IC8qIE5hbWVkICovIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuY3VycmVudFR5cGUgPT09IDYgLyogTGlzdCAqLyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmN1cnJlbnRUeXBlID09PSA3IC8qIExpdGVyYWwgKi8pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1pdEVycm9yKENvbXBpbGVFcnJvckNvZGVzLlVOVEVSTUlOQVRFRF9DTE9TSU5HX0JSQUNFLCBjdXJyZW50UG9zaXRpb24oKSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5icmFjZU5lc3QgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWFkVG9rZW4oc2NuciwgY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoKHZhbGlkTmFtZWRJZGVudGlmaWVyID0gaXNOYW1lZElkZW50aWZpZXJTdGFydChzY25yLCBjb250ZXh0KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IGdldFRva2VuKGNvbnRleHQsIDUgLyogTmFtZWQgKi8sIHJlYWROYW1lZElkZW50aWZpZXIoc2NucikpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNraXBTcGFjZXMoc2Nucik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCh2YWxpZExpc3RJZGVudGlmaWVyID0gaXNMaXN0SWRlbnRpZmllclN0YXJ0KHNjbnIsIGNvbnRleHQpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuID0gZ2V0VG9rZW4oY29udGV4dCwgNiAvKiBMaXN0ICovLCByZWFkTGlzdElkZW50aWZpZXIoc2NucikpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNraXBTcGFjZXMoc2Nucik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCh2YWxpZExpdGVyYWwgPSBpc0xpdGVyYWxTdGFydChzY25yLCBjb250ZXh0KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IGdldFRva2VuKGNvbnRleHQsIDcgLyogTGl0ZXJhbCAqLywgcmVhZExpdGVyYWwoc2NucikpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNraXBTcGFjZXMoc2Nucik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZE5hbWVkSWRlbnRpZmllciAmJiAhdmFsaWRMaXN0SWRlbnRpZmllciAmJiAhdmFsaWRMaXRlcmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogd2Ugc2hvdWxkIGJlIHJlLWRlc2lnbmVkIGludmFsaWQgY2FzZXMsIHdoZW4gd2Ugd2lsbCBleHRlbmQgbWVzc2FnZSBzeW50YXggbmVhciB0aGUgZnV0dXJlIC4uLlxyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuID0gZ2V0VG9rZW4oY29udGV4dCwgMTMgLyogSW52YWxpZFBsYWNlICovLCByZWFkSW52YWxpZElkZW50aWZpZXIoc2NucikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVtaXRFcnJvcihDb21waWxlRXJyb3JDb2Rlcy5JTlZBTElEX1RPS0VOX0lOX1BMQUNFSE9MREVSLCBjdXJyZW50UG9zaXRpb24oKSwgMCwgdG9rZW4udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNraXBTcGFjZXMoc2Nucik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0b2tlbjtcclxuICAgIH1cclxuICAgIC8vIFRPRE86IFdlIG5lZWQgcmVmYWN0b3Jpbmcgb2YgdG9rZW4gcGFyc2luZyAuLi5cclxuICAgIGZ1bmN0aW9uIHJlYWRUb2tlbkluTGlua2VkKHNjbnIsIGNvbnRleHQpIHtcclxuICAgICAgICBjb25zdCB7IGN1cnJlbnRUeXBlIH0gPSBjb250ZXh0O1xyXG4gICAgICAgIGxldCB0b2tlbiA9IG51bGw7XHJcbiAgICAgICAgY29uc3QgY2ggPSBzY25yLmN1cnJlbnRDaGFyKCk7XHJcbiAgICAgICAgaWYgKChjdXJyZW50VHlwZSA9PT0gOCAvKiBMaW5rZWRBbGlhcyAqLyB8fFxyXG4gICAgICAgICAgICBjdXJyZW50VHlwZSA9PT0gOSAvKiBMaW5rZWREb3QgKi8gfHxcclxuICAgICAgICAgICAgY3VycmVudFR5cGUgPT09IDEyIC8qIExpbmtlZE1vZGlmaWVyICovIHx8XHJcbiAgICAgICAgICAgIGN1cnJlbnRUeXBlID09PSAxMCAvKiBMaW5rZWREZWxpbWl0ZXIgKi8pICYmXHJcbiAgICAgICAgICAgIChjaCA9PT0gQ0hBUl9MRiB8fCBjaCA9PT0gQ0hBUl9TUCkpIHtcclxuICAgICAgICAgICAgZW1pdEVycm9yKENvbXBpbGVFcnJvckNvZGVzLklOVkFMSURfTElOS0VEX0ZPUk1BVCwgY3VycmVudFBvc2l0aW9uKCksIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKGNoKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJAXCIgLyogTGlua2VkQWxpYXMgKi86XHJcbiAgICAgICAgICAgICAgICBzY25yLm5leHQoKTtcclxuICAgICAgICAgICAgICAgIHRva2VuID0gZ2V0VG9rZW4oY29udGV4dCwgOCAvKiBMaW5rZWRBbGlhcyAqLywgXCJAXCIgLyogTGlua2VkQWxpYXMgKi8pO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dC5pbkxpbmtlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW47XHJcbiAgICAgICAgICAgIGNhc2UgXCIuXCIgLyogTGlua2VkRG90ICovOlxyXG4gICAgICAgICAgICAgICAgc2tpcFNwYWNlcyhzY25yKTtcclxuICAgICAgICAgICAgICAgIHNjbnIubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldFRva2VuKGNvbnRleHQsIDkgLyogTGlua2VkRG90ICovLCBcIi5cIiAvKiBMaW5rZWREb3QgKi8pO1xyXG4gICAgICAgICAgICBjYXNlIFwiOlwiIC8qIExpbmtlZERlbGltaXRlciAqLzpcclxuICAgICAgICAgICAgICAgIHNraXBTcGFjZXMoc2Nucik7XHJcbiAgICAgICAgICAgICAgICBzY25yLm5leHQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRUb2tlbihjb250ZXh0LCAxMCAvKiBMaW5rZWREZWxpbWl0ZXIgKi8sIFwiOlwiIC8qIExpbmtlZERlbGltaXRlciAqLyk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNQbHVyYWxTdGFydChzY25yKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuID0gZ2V0VG9rZW4oY29udGV4dCwgMSAvKiBQaXBlICovLCByZWFkUGx1cmFsKHNjbnIpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZXNldFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuYnJhY2VOZXN0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmluTGlua2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGlzTGlua2VkRG90U3RhcnQoc2NuciwgY29udGV4dCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBpc0xpbmtlZERlbGltaXRlclN0YXJ0KHNjbnIsIGNvbnRleHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2tpcFNwYWNlcyhzY25yKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVhZFRva2VuSW5MaW5rZWQoc2NuciwgY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNMaW5rZWRNb2RpZmllclN0YXJ0KHNjbnIsIGNvbnRleHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2tpcFNwYWNlcyhzY25yKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0VG9rZW4oY29udGV4dCwgMTIgLyogTGlua2VkTW9kaWZpZXIgKi8sIHJlYWRMaW5rZWRNb2RpZmllcihzY25yKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNMaW5rZWRSZWZlclN0YXJ0KHNjbnIsIGNvbnRleHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2tpcFNwYWNlcyhzY25yKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2ggPT09IFwie1wiIC8qIEJyYWNlTGVmdCAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzY2FuIHRoZSBwbGFjZWhvbGRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVhZFRva2VuSW5QbGFjZWhvbGRlcihzY25yLCBjb250ZXh0KSB8fCB0b2tlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRUb2tlbihjb250ZXh0LCAxMSAvKiBMaW5rZWRLZXkgKi8sIHJlYWRMaW5rZWRSZWZlcihzY25yKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRUeXBlID09PSA4IC8qIExpbmtlZEFsaWFzICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1pdEVycm9yKENvbXBpbGVFcnJvckNvZGVzLklOVkFMSURfTElOS0VEX0ZPUk1BVCwgY3VycmVudFBvc2l0aW9uKCksIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29udGV4dC5icmFjZU5lc3QgPSAwO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dC5pbkxpbmtlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlYWRUb2tlbihzY25yLCBjb250ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBUT0RPOiBXZSBuZWVkIHJlZmFjdG9yaW5nIG9mIHRva2VuIHBhcnNpbmcgLi4uXHJcbiAgICBmdW5jdGlvbiByZWFkVG9rZW4oc2NuciwgY29udGV4dCkge1xyXG4gICAgICAgIGxldCB0b2tlbiA9IHsgdHlwZTogMTQgLyogRU9GICovIH07XHJcbiAgICAgICAgaWYgKGNvbnRleHQuYnJhY2VOZXN0ID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVhZFRva2VuSW5QbGFjZWhvbGRlcihzY25yLCBjb250ZXh0KSB8fCBnZXRFbmRUb2tlbihjb250ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbnRleHQuaW5MaW5rZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlYWRUb2tlbkluTGlua2VkKHNjbnIsIGNvbnRleHQpIHx8IGdldEVuZFRva2VuKGNvbnRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjaCA9IHNjbnIuY3VycmVudENoYXIoKTtcclxuICAgICAgICBzd2l0Y2ggKGNoKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ7XCIgLyogQnJhY2VMZWZ0ICovOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlYWRUb2tlbkluUGxhY2Vob2xkZXIoc2NuciwgY29udGV4dCkgfHwgZ2V0RW5kVG9rZW4oY29udGV4dCk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ9XCIgLyogQnJhY2VSaWdodCAqLzpcclxuICAgICAgICAgICAgICAgIGVtaXRFcnJvcihDb21waWxlRXJyb3JDb2Rlcy5VTkJBTEFOQ0VEX0NMT1NJTkdfQlJBQ0UsIGN1cnJlbnRQb3NpdGlvbigpLCAwKTtcclxuICAgICAgICAgICAgICAgIHNjbnIubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldFRva2VuKGNvbnRleHQsIDMgLyogQnJhY2VSaWdodCAqLywgXCJ9XCIgLyogQnJhY2VSaWdodCAqLyk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJAXCIgLyogTGlua2VkQWxpYXMgKi86XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVhZFRva2VuSW5MaW5rZWQoc2NuciwgY29udGV4dCkgfHwgZ2V0RW5kVG9rZW4oY29udGV4dCk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNQbHVyYWxTdGFydChzY25yKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuID0gZ2V0VG9rZW4oY29udGV4dCwgMSAvKiBQaXBlICovLCByZWFkUGx1cmFsKHNjbnIpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZXNldFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuYnJhY2VOZXN0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmluTGlua2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc01vZHVsbywgaGFzU3BhY2UgfSA9IGRldGVjdE1vZHVsb1N0YXJ0KHNjbnIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzTW9kdWxvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhhc1NwYWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZ2V0VG9rZW4oY29udGV4dCwgMCAvKiBUZXh0ICovLCByZWFkVGV4dChzY25yKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBnZXRUb2tlbihjb250ZXh0LCA0IC8qIE1vZHVsbyAqLywgcmVhZE1vZHVsbyhzY25yKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNUZXh0U3RhcnQoc2NucikpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0VG9rZW4oY29udGV4dCwgMCAvKiBUZXh0ICovLCByZWFkVGV4dChzY25yKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbmV4dFRva2VuKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY3VycmVudFR5cGUsIG9mZnNldCwgc3RhcnRMb2MsIGVuZExvYyB9ID0gX2NvbnRleHQ7XHJcbiAgICAgICAgX2NvbnRleHQubGFzdFR5cGUgPSBjdXJyZW50VHlwZTtcclxuICAgICAgICBfY29udGV4dC5sYXN0T2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgIF9jb250ZXh0Lmxhc3RTdGFydExvYyA9IHN0YXJ0TG9jO1xyXG4gICAgICAgIF9jb250ZXh0Lmxhc3RFbmRMb2MgPSBlbmRMb2M7XHJcbiAgICAgICAgX2NvbnRleHQub2Zmc2V0ID0gY3VycmVudE9mZnNldCgpO1xyXG4gICAgICAgIF9jb250ZXh0LnN0YXJ0TG9jID0gY3VycmVudFBvc2l0aW9uKCk7XHJcbiAgICAgICAgaWYgKF9zY25yLmN1cnJlbnRDaGFyKCkgPT09IEVPRikge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0VG9rZW4oX2NvbnRleHQsIDE0IC8qIEVPRiAqLyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZWFkVG9rZW4oX3NjbnIsIF9jb250ZXh0KTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dFRva2VuLFxyXG4gICAgICAgIGN1cnJlbnRPZmZzZXQsXHJcbiAgICAgICAgY3VycmVudFBvc2l0aW9uLFxyXG4gICAgICAgIGNvbnRleHRcclxuICAgIH07XHJcbn1cblxuY29uc3QgRVJST1JfRE9NQUlOID0gJ3BhcnNlcic7XHJcbi8vIEJhY2tzbGFzaCBiYWNrc2xhc2gsIGJhY2tzbGFzaCBxdW90ZSwgdUhISEgsIFVISEhISEguXHJcbmNvbnN0IEtOT1dOX0VTQ0FQRVMgPSAvKD86XFxcXFxcXFx8XFxcXCd8XFxcXHUoWzAtOWEtZkEtRl17NH0pfFxcXFxVKFswLTlhLWZBLUZdezZ9KSkvZztcclxuZnVuY3Rpb24gZnJvbUVzY2FwZVNlcXVlbmNlKG1hdGNoLCBjb2RlUG9pbnQ0LCBjb2RlUG9pbnQ2KSB7XHJcbiAgICBzd2l0Y2ggKG1hdGNoKSB7XHJcbiAgICAgICAgY2FzZSBgXFxcXFxcXFxgOlxyXG4gICAgICAgICAgICByZXR1cm4gYFxcXFxgO1xyXG4gICAgICAgIGNhc2UgYFxcXFxcXCdgOlxyXG4gICAgICAgICAgICByZXR1cm4gYFxcJ2A7XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICBjb25zdCBjb2RlUG9pbnQgPSBwYXJzZUludChjb2RlUG9pbnQ0IHx8IGNvZGVQb2ludDYsIDE2KTtcclxuICAgICAgICAgICAgaWYgKGNvZGVQb2ludCA8PSAweGQ3ZmYgfHwgY29kZVBvaW50ID49IDB4ZTAwMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ29kZVBvaW50KGNvZGVQb2ludCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaW52YWxpZCAuLi5cclxuICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGVtIHdpdGggVStGRkZEIFJFUExBQ0VNRU5UIENIQVJBQ1RFUi5cclxuICAgICAgICAgICAgcmV0dXJuICfvv70nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjcmVhdGVQYXJzZXIob3B0aW9ucyA9IHt9KSB7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IG9wdGlvbnMubG9jYXRpb24gIT09IGZhbHNlO1xyXG4gICAgY29uc3QgeyBvbkVycm9yIH0gPSBvcHRpb25zO1xyXG4gICAgZnVuY3Rpb24gZW1pdEVycm9yKHRva2VuemVyLCBjb2RlLCBzdGFydCwgb2Zmc2V0LCAuLi5hcmdzKSB7XHJcbiAgICAgICAgY29uc3QgZW5kID0gdG9rZW56ZXIuY3VycmVudFBvc2l0aW9uKCk7XHJcbiAgICAgICAgZW5kLm9mZnNldCArPSBvZmZzZXQ7XHJcbiAgICAgICAgZW5kLmNvbHVtbiArPSBvZmZzZXQ7XHJcbiAgICAgICAgaWYgKG9uRXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbG9jID0gY3JlYXRlTG9jYXRpb24oc3RhcnQsIGVuZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVyciA9IGNyZWF0ZUNvbXBpbGVFcnJvcihjb2RlLCBsb2MsIHtcclxuICAgICAgICAgICAgICAgIGRvbWFpbjogRVJST1JfRE9NQUlOLFxyXG4gICAgICAgICAgICAgICAgYXJnc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgb25FcnJvcihlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN0YXJ0Tm9kZSh0eXBlLCBvZmZzZXQsIGxvYykge1xyXG4gICAgICAgIGNvbnN0IG5vZGUgPSB7XHJcbiAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgIHN0YXJ0OiBvZmZzZXQsXHJcbiAgICAgICAgICAgIGVuZDogb2Zmc2V0XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAobG9jYXRpb24pIHtcclxuICAgICAgICAgICAgbm9kZS5sb2MgPSB7IHN0YXJ0OiBsb2MsIGVuZDogbG9jIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZW5kTm9kZShub2RlLCBvZmZzZXQsIHBvcywgdHlwZSkge1xyXG4gICAgICAgIG5vZGUuZW5kID0gb2Zmc2V0O1xyXG4gICAgICAgIGlmICh0eXBlKSB7XHJcbiAgICAgICAgICAgIG5vZGUudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsb2NhdGlvbiAmJiBub2RlLmxvYykge1xyXG4gICAgICAgICAgICBub2RlLmxvYy5lbmQgPSBwb3M7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcGFyc2VUZXh0KHRva2VuaXplciwgdmFsdWUpIHtcclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gdG9rZW5pemVyLmNvbnRleHQoKTtcclxuICAgICAgICBjb25zdCBub2RlID0gc3RhcnROb2RlKDMgLyogVGV4dCAqLywgY29udGV4dC5vZmZzZXQsIGNvbnRleHQuc3RhcnRMb2MpO1xyXG4gICAgICAgIG5vZGUudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICBlbmROb2RlKG5vZGUsIHRva2VuaXplci5jdXJyZW50T2Zmc2V0KCksIHRva2VuaXplci5jdXJyZW50UG9zaXRpb24oKSk7XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwYXJzZUxpc3QodG9rZW5pemVyLCBpbmRleCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0b2tlbml6ZXIuY29udGV4dCgpO1xyXG4gICAgICAgIGNvbnN0IHsgbGFzdE9mZnNldDogb2Zmc2V0LCBsYXN0U3RhcnRMb2M6IGxvYyB9ID0gY29udGV4dDsgLy8gZ2V0IGJyYWNlIGxlZnQgbG9jXHJcbiAgICAgICAgY29uc3Qgbm9kZSA9IHN0YXJ0Tm9kZSg1IC8qIExpc3QgKi8sIG9mZnNldCwgbG9jKTtcclxuICAgICAgICBub2RlLmluZGV4ID0gcGFyc2VJbnQoaW5kZXgsIDEwKTtcclxuICAgICAgICB0b2tlbml6ZXIubmV4dFRva2VuKCk7IC8vIHNraXAgYnJhY2ggcmlnaHRcclxuICAgICAgICBlbmROb2RlKG5vZGUsIHRva2VuaXplci5jdXJyZW50T2Zmc2V0KCksIHRva2VuaXplci5jdXJyZW50UG9zaXRpb24oKSk7XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwYXJzZU5hbWVkKHRva2VuaXplciwga2V5KSB7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRva2VuaXplci5jb250ZXh0KCk7XHJcbiAgICAgICAgY29uc3QgeyBsYXN0T2Zmc2V0OiBvZmZzZXQsIGxhc3RTdGFydExvYzogbG9jIH0gPSBjb250ZXh0OyAvLyBnZXQgYnJhY2UgbGVmdCBsb2NcclxuICAgICAgICBjb25zdCBub2RlID0gc3RhcnROb2RlKDQgLyogTmFtZWQgKi8sIG9mZnNldCwgbG9jKTtcclxuICAgICAgICBub2RlLmtleSA9IGtleTtcclxuICAgICAgICB0b2tlbml6ZXIubmV4dFRva2VuKCk7IC8vIHNraXAgYnJhY2ggcmlnaHRcclxuICAgICAgICBlbmROb2RlKG5vZGUsIHRva2VuaXplci5jdXJyZW50T2Zmc2V0KCksIHRva2VuaXplci5jdXJyZW50UG9zaXRpb24oKSk7XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwYXJzZUxpdGVyYWwodG9rZW5pemVyLCB2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0b2tlbml6ZXIuY29udGV4dCgpO1xyXG4gICAgICAgIGNvbnN0IHsgbGFzdE9mZnNldDogb2Zmc2V0LCBsYXN0U3RhcnRMb2M6IGxvYyB9ID0gY29udGV4dDsgLy8gZ2V0IGJyYWNlIGxlZnQgbG9jXHJcbiAgICAgICAgY29uc3Qgbm9kZSA9IHN0YXJ0Tm9kZSg5IC8qIExpdGVyYWwgKi8sIG9mZnNldCwgbG9jKTtcclxuICAgICAgICBub2RlLnZhbHVlID0gdmFsdWUucmVwbGFjZShLTk9XTl9FU0NBUEVTLCBmcm9tRXNjYXBlU2VxdWVuY2UpO1xyXG4gICAgICAgIHRva2VuaXplci5uZXh0VG9rZW4oKTsgLy8gc2tpcCBicmFjaCByaWdodFxyXG4gICAgICAgIGVuZE5vZGUobm9kZSwgdG9rZW5pemVyLmN1cnJlbnRPZmZzZXQoKSwgdG9rZW5pemVyLmN1cnJlbnRQb3NpdGlvbigpKTtcclxuICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHBhcnNlTGlua2VkTW9kaWZpZXIodG9rZW5pemVyKSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSB0b2tlbml6ZXIubmV4dFRva2VuKCk7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRva2VuaXplci5jb250ZXh0KCk7XHJcbiAgICAgICAgY29uc3QgeyBsYXN0T2Zmc2V0OiBvZmZzZXQsIGxhc3RTdGFydExvYzogbG9jIH0gPSBjb250ZXh0OyAvLyBnZXQgbGlua2VkIGRvdCBsb2NcclxuICAgICAgICBjb25zdCBub2RlID0gc3RhcnROb2RlKDggLyogTGlua2VkTW9kaWZpZXIgKi8sIG9mZnNldCwgbG9jKTtcclxuICAgICAgICBpZiAodG9rZW4udHlwZSAhPT0gMTIgLyogTGlua2VkTW9kaWZpZXIgKi8pIHtcclxuICAgICAgICAgICAgLy8gZW1wdHkgbW9kaWZpZXJcclxuICAgICAgICAgICAgZW1pdEVycm9yKHRva2VuaXplciwgQ29tcGlsZUVycm9yQ29kZXMuVU5FWFBFQ1RFRF9FTVBUWV9MSU5LRURfTU9ESUZJRVIsIGNvbnRleHQubGFzdFN0YXJ0TG9jLCAwKTtcclxuICAgICAgICAgICAgbm9kZS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBlbmROb2RlKG5vZGUsIG9mZnNldCwgbG9jKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG5leHRDb25zdW1lVG9rZW46IHRva2VuLFxyXG4gICAgICAgICAgICAgICAgbm9kZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjaGVjayB0b2tlblxyXG4gICAgICAgIGlmICh0b2tlbi52YWx1ZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGVtaXRFcnJvcih0b2tlbml6ZXIsIENvbXBpbGVFcnJvckNvZGVzLlVORVhQRUNURURfTEVYSUNBTF9BTkFMWVNJUywgY29udGV4dC5sYXN0U3RhcnRMb2MsIDAsIGdldFRva2VuQ2FwdGlvbih0b2tlbikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBub2RlLnZhbHVlID0gdG9rZW4udmFsdWUgfHwgJyc7XHJcbiAgICAgICAgZW5kTm9kZShub2RlLCB0b2tlbml6ZXIuY3VycmVudE9mZnNldCgpLCB0b2tlbml6ZXIuY3VycmVudFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5vZGVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcGFyc2VMaW5rZWRLZXkodG9rZW5pemVyLCB2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0b2tlbml6ZXIuY29udGV4dCgpO1xyXG4gICAgICAgIGNvbnN0IG5vZGUgPSBzdGFydE5vZGUoNyAvKiBMaW5rZWRLZXkgKi8sIGNvbnRleHQub2Zmc2V0LCBjb250ZXh0LnN0YXJ0TG9jKTtcclxuICAgICAgICBub2RlLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgZW5kTm9kZShub2RlLCB0b2tlbml6ZXIuY3VycmVudE9mZnNldCgpLCB0b2tlbml6ZXIuY3VycmVudFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcGFyc2VMaW5rZWQodG9rZW5pemVyKSB7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRva2VuaXplci5jb250ZXh0KCk7XHJcbiAgICAgICAgY29uc3QgbGlua2VkTm9kZSA9IHN0YXJ0Tm9kZSg2IC8qIExpbmtlZCAqLywgY29udGV4dC5vZmZzZXQsIGNvbnRleHQuc3RhcnRMb2MpO1xyXG4gICAgICAgIGxldCB0b2tlbiA9IHRva2VuaXplci5uZXh0VG9rZW4oKTtcclxuICAgICAgICBpZiAodG9rZW4udHlwZSA9PT0gOSAvKiBMaW5rZWREb3QgKi8pIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VMaW5rZWRNb2RpZmllcih0b2tlbml6ZXIpO1xyXG4gICAgICAgICAgICBsaW5rZWROb2RlLm1vZGlmaWVyID0gcGFyc2VkLm5vZGU7XHJcbiAgICAgICAgICAgIHRva2VuID0gcGFyc2VkLm5leHRDb25zdW1lVG9rZW4gfHwgdG9rZW5pemVyLm5leHRUb2tlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBhc3NldCBjaGVjayB0b2tlblxyXG4gICAgICAgIGlmICh0b2tlbi50eXBlICE9PSAxMCAvKiBMaW5rZWREZWxpbWl0ZXIgKi8pIHtcclxuICAgICAgICAgICAgZW1pdEVycm9yKHRva2VuaXplciwgQ29tcGlsZUVycm9yQ29kZXMuVU5FWFBFQ1RFRF9MRVhJQ0FMX0FOQUxZU0lTLCBjb250ZXh0Lmxhc3RTdGFydExvYywgMCwgZ2V0VG9rZW5DYXB0aW9uKHRva2VuKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRva2VuID0gdG9rZW5pemVyLm5leHRUb2tlbigpO1xyXG4gICAgICAgIC8vIHNraXAgYnJhY2UgbGVmdFxyXG4gICAgICAgIGlmICh0b2tlbi50eXBlID09PSAyIC8qIEJyYWNlTGVmdCAqLykge1xyXG4gICAgICAgICAgICB0b2tlbiA9IHRva2VuaXplci5uZXh0VG9rZW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoICh0b2tlbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTEgLyogTGlua2VkS2V5ICovOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLnZhbHVlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbWl0RXJyb3IodG9rZW5pemVyLCBDb21waWxlRXJyb3JDb2Rlcy5VTkVYUEVDVEVEX0xFWElDQUxfQU5BTFlTSVMsIGNvbnRleHQubGFzdFN0YXJ0TG9jLCAwLCBnZXRUb2tlbkNhcHRpb24odG9rZW4pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxpbmtlZE5vZGUua2V5ID0gcGFyc2VMaW5rZWRLZXkodG9rZW5pemVyLCB0b2tlbi52YWx1ZSB8fCAnJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA1IC8qIE5hbWVkICovOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLnZhbHVlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbWl0RXJyb3IodG9rZW5pemVyLCBDb21waWxlRXJyb3JDb2Rlcy5VTkVYUEVDVEVEX0xFWElDQUxfQU5BTFlTSVMsIGNvbnRleHQubGFzdFN0YXJ0TG9jLCAwLCBnZXRUb2tlbkNhcHRpb24odG9rZW4pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxpbmtlZE5vZGUua2V5ID0gcGFyc2VOYW1lZCh0b2tlbml6ZXIsIHRva2VuLnZhbHVlIHx8ICcnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDYgLyogTGlzdCAqLzpcclxuICAgICAgICAgICAgICAgIGlmICh0b2tlbi52YWx1ZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1pdEVycm9yKHRva2VuaXplciwgQ29tcGlsZUVycm9yQ29kZXMuVU5FWFBFQ1RFRF9MRVhJQ0FMX0FOQUxZU0lTLCBjb250ZXh0Lmxhc3RTdGFydExvYywgMCwgZ2V0VG9rZW5DYXB0aW9uKHRva2VuKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsaW5rZWROb2RlLmtleSA9IHBhcnNlTGlzdCh0b2tlbml6ZXIsIHRva2VuLnZhbHVlIHx8ICcnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDcgLyogTGl0ZXJhbCAqLzpcclxuICAgICAgICAgICAgICAgIGlmICh0b2tlbi52YWx1ZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1pdEVycm9yKHRva2VuaXplciwgQ29tcGlsZUVycm9yQ29kZXMuVU5FWFBFQ1RFRF9MRVhJQ0FMX0FOQUxZU0lTLCBjb250ZXh0Lmxhc3RTdGFydExvYywgMCwgZ2V0VG9rZW5DYXB0aW9uKHRva2VuKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsaW5rZWROb2RlLmtleSA9IHBhcnNlTGl0ZXJhbCh0b2tlbml6ZXIsIHRva2VuLnZhbHVlIHx8ICcnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgLy8gZW1wdHkga2V5XHJcbiAgICAgICAgICAgICAgICBlbWl0RXJyb3IodG9rZW5pemVyLCBDb21waWxlRXJyb3JDb2Rlcy5VTkVYUEVDVEVEX0VNUFRZX0xJTktFRF9LRVksIGNvbnRleHQubGFzdFN0YXJ0TG9jLCAwKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRDb250ZXh0ID0gdG9rZW5pemVyLmNvbnRleHQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVtcHR5TGlua2VkS2V5Tm9kZSA9IHN0YXJ0Tm9kZSg3IC8qIExpbmtlZEtleSAqLywgbmV4dENvbnRleHQub2Zmc2V0LCBuZXh0Q29udGV4dC5zdGFydExvYyk7XHJcbiAgICAgICAgICAgICAgICBlbXB0eUxpbmtlZEtleU5vZGUudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgIGVuZE5vZGUoZW1wdHlMaW5rZWRLZXlOb2RlLCBuZXh0Q29udGV4dC5vZmZzZXQsIG5leHRDb250ZXh0LnN0YXJ0TG9jKTtcclxuICAgICAgICAgICAgICAgIGxpbmtlZE5vZGUua2V5ID0gZW1wdHlMaW5rZWRLZXlOb2RlO1xyXG4gICAgICAgICAgICAgICAgZW5kTm9kZShsaW5rZWROb2RlLCBuZXh0Q29udGV4dC5vZmZzZXQsIG5leHRDb250ZXh0LnN0YXJ0TG9jKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dENvbnN1bWVUb2tlbjogdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZTogbGlua2VkTm9kZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZW5kTm9kZShsaW5rZWROb2RlLCB0b2tlbml6ZXIuY3VycmVudE9mZnNldCgpLCB0b2tlbml6ZXIuY3VycmVudFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5vZGU6IGxpbmtlZE5vZGVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcGFyc2VNZXNzYWdlKHRva2VuaXplcikge1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0b2tlbml6ZXIuY29udGV4dCgpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0T2Zmc2V0ID0gY29udGV4dC5jdXJyZW50VHlwZSA9PT0gMSAvKiBQaXBlICovXHJcbiAgICAgICAgICAgID8gdG9rZW5pemVyLmN1cnJlbnRPZmZzZXQoKVxyXG4gICAgICAgICAgICA6IGNvbnRleHQub2Zmc2V0O1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0TG9jID0gY29udGV4dC5jdXJyZW50VHlwZSA9PT0gMSAvKiBQaXBlICovXHJcbiAgICAgICAgICAgID8gY29udGV4dC5lbmRMb2NcclxuICAgICAgICAgICAgOiBjb250ZXh0LnN0YXJ0TG9jO1xyXG4gICAgICAgIGNvbnN0IG5vZGUgPSBzdGFydE5vZGUoMiAvKiBNZXNzYWdlICovLCBzdGFydE9mZnNldCwgc3RhcnRMb2MpO1xyXG4gICAgICAgIG5vZGUuaXRlbXMgPSBbXTtcclxuICAgICAgICBsZXQgbmV4dFRva2VuID0gbnVsbDtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gbmV4dFRva2VuIHx8IHRva2VuaXplci5uZXh0VG9rZW4oKTtcclxuICAgICAgICAgICAgbmV4dFRva2VuID0gbnVsbDtcclxuICAgICAgICAgICAgc3dpdGNoICh0b2tlbi50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDAgLyogVGV4dCAqLzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4udmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWl0RXJyb3IodG9rZW5pemVyLCBDb21waWxlRXJyb3JDb2Rlcy5VTkVYUEVDVEVEX0xFWElDQUxfQU5BTFlTSVMsIGNvbnRleHQubGFzdFN0YXJ0TG9jLCAwLCBnZXRUb2tlbkNhcHRpb24odG9rZW4pKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pdGVtcy5wdXNoKHBhcnNlVGV4dCh0b2tlbml6ZXIsIHRva2VuLnZhbHVlIHx8ICcnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDYgLyogTGlzdCAqLzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4udmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWl0RXJyb3IodG9rZW5pemVyLCBDb21waWxlRXJyb3JDb2Rlcy5VTkVYUEVDVEVEX0xFWElDQUxfQU5BTFlTSVMsIGNvbnRleHQubGFzdFN0YXJ0TG9jLCAwLCBnZXRUb2tlbkNhcHRpb24odG9rZW4pKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pdGVtcy5wdXNoKHBhcnNlTGlzdCh0b2tlbml6ZXIsIHRva2VuLnZhbHVlIHx8ICcnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDUgLyogTmFtZWQgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLnZhbHVlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1pdEVycm9yKHRva2VuaXplciwgQ29tcGlsZUVycm9yQ29kZXMuVU5FWFBFQ1RFRF9MRVhJQ0FMX0FOQUxZU0lTLCBjb250ZXh0Lmxhc3RTdGFydExvYywgMCwgZ2V0VG9rZW5DYXB0aW9uKHRva2VuKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbXMucHVzaChwYXJzZU5hbWVkKHRva2VuaXplciwgdG9rZW4udmFsdWUgfHwgJycpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNyAvKiBMaXRlcmFsICovOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi52YWx1ZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtaXRFcnJvcih0b2tlbml6ZXIsIENvbXBpbGVFcnJvckNvZGVzLlVORVhQRUNURURfTEVYSUNBTF9BTkFMWVNJUywgY29udGV4dC5sYXN0U3RhcnRMb2MsIDAsIGdldFRva2VuQ2FwdGlvbih0b2tlbikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1zLnB1c2gocGFyc2VMaXRlcmFsKHRva2VuaXplciwgdG9rZW4udmFsdWUgfHwgJycpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgOCAvKiBMaW5rZWRBbGlhcyAqLzpcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUxpbmtlZCh0b2tlbml6ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbXMucHVzaChwYXJzZWQubm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dFRva2VuID0gcGFyc2VkLm5leHRDb25zdW1lVG9rZW4gfHwgbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gd2hpbGUgKGNvbnRleHQuY3VycmVudFR5cGUgIT09IDE0IC8qIEVPRiAqLyAmJlxyXG4gICAgICAgICAgICBjb250ZXh0LmN1cnJlbnRUeXBlICE9PSAxIC8qIFBpcGUgKi8pO1xyXG4gICAgICAgIC8vIGFkanVzdCBtZXNzYWdlIG5vZGUgbG9jXHJcbiAgICAgICAgY29uc3QgZW5kT2Zmc2V0ID0gY29udGV4dC5jdXJyZW50VHlwZSA9PT0gMSAvKiBQaXBlICovXHJcbiAgICAgICAgICAgID8gY29udGV4dC5sYXN0T2Zmc2V0XHJcbiAgICAgICAgICAgIDogdG9rZW5pemVyLmN1cnJlbnRPZmZzZXQoKTtcclxuICAgICAgICBjb25zdCBlbmRMb2MgPSBjb250ZXh0LmN1cnJlbnRUeXBlID09PSAxIC8qIFBpcGUgKi9cclxuICAgICAgICAgICAgPyBjb250ZXh0Lmxhc3RFbmRMb2NcclxuICAgICAgICAgICAgOiB0b2tlbml6ZXIuY3VycmVudFBvc2l0aW9uKCk7XHJcbiAgICAgICAgZW5kTm9kZShub2RlLCBlbmRPZmZzZXQsIGVuZExvYyk7XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwYXJzZVBsdXJhbCh0b2tlbml6ZXIsIG9mZnNldCwgbG9jLCBtc2dOb2RlKSB7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRva2VuaXplci5jb250ZXh0KCk7XHJcbiAgICAgICAgbGV0IGhhc0VtcHR5TWVzc2FnZSA9IG1zZ05vZGUuaXRlbXMubGVuZ3RoID09PSAwO1xyXG4gICAgICAgIGNvbnN0IG5vZGUgPSBzdGFydE5vZGUoMSAvKiBQbHVyYWwgKi8sIG9mZnNldCwgbG9jKTtcclxuICAgICAgICBub2RlLmNhc2VzID0gW107XHJcbiAgICAgICAgbm9kZS5jYXNlcy5wdXNoKG1zZ05vZGUpO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgY29uc3QgbXNnID0gcGFyc2VNZXNzYWdlKHRva2VuaXplcik7XHJcbiAgICAgICAgICAgIGlmICghaGFzRW1wdHlNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBoYXNFbXB0eU1lc3NhZ2UgPSBtc2cuaXRlbXMubGVuZ3RoID09PSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5vZGUuY2FzZXMucHVzaChtc2cpO1xyXG4gICAgICAgIH0gd2hpbGUgKGNvbnRleHQuY3VycmVudFR5cGUgIT09IDE0IC8qIEVPRiAqLyk7XHJcbiAgICAgICAgaWYgKGhhc0VtcHR5TWVzc2FnZSkge1xyXG4gICAgICAgICAgICBlbWl0RXJyb3IodG9rZW5pemVyLCBDb21waWxlRXJyb3JDb2Rlcy5NVVNUX0hBVkVfTUVTU0FHRVNfSU5fUExVUkFMLCBsb2MsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbmROb2RlKG5vZGUsIHRva2VuaXplci5jdXJyZW50T2Zmc2V0KCksIHRva2VuaXplci5jdXJyZW50UG9zaXRpb24oKSk7XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwYXJzZVJlc291cmNlKHRva2VuaXplcikge1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0b2tlbml6ZXIuY29udGV4dCgpO1xyXG4gICAgICAgIGNvbnN0IHsgb2Zmc2V0LCBzdGFydExvYyB9ID0gY29udGV4dDtcclxuICAgICAgICBjb25zdCBtc2dOb2RlID0gcGFyc2VNZXNzYWdlKHRva2VuaXplcik7XHJcbiAgICAgICAgaWYgKGNvbnRleHQuY3VycmVudFR5cGUgPT09IDE0IC8qIEVPRiAqLykge1xyXG4gICAgICAgICAgICByZXR1cm4gbXNnTm9kZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZVBsdXJhbCh0b2tlbml6ZXIsIG9mZnNldCwgc3RhcnRMb2MsIG1zZ05vZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHBhcnNlKHNvdXJjZSkge1xyXG4gICAgICAgIGNvbnN0IHRva2VuaXplciA9IGNyZWF0ZVRva2VuaXplcihzb3VyY2UsIGFzc2lnbih7fSwgb3B0aW9ucykpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0b2tlbml6ZXIuY29udGV4dCgpO1xyXG4gICAgICAgIGNvbnN0IG5vZGUgPSBzdGFydE5vZGUoMCAvKiBSZXNvdXJjZSAqLywgY29udGV4dC5vZmZzZXQsIGNvbnRleHQuc3RhcnRMb2MpO1xyXG4gICAgICAgIGlmIChsb2NhdGlvbiAmJiBub2RlLmxvYykge1xyXG4gICAgICAgICAgICBub2RlLmxvYy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5vZGUuYm9keSA9IHBhcnNlUmVzb3VyY2UodG9rZW5pemVyKTtcclxuICAgICAgICAvLyBhc3NlcnQgd2hldGhlciBhY2hpZXZlZCB0byBFT0ZcclxuICAgICAgICBpZiAoY29udGV4dC5jdXJyZW50VHlwZSAhPT0gMTQgLyogRU9GICovKSB7XHJcbiAgICAgICAgICAgIGVtaXRFcnJvcih0b2tlbml6ZXIsIENvbXBpbGVFcnJvckNvZGVzLlVORVhQRUNURURfTEVYSUNBTF9BTkFMWVNJUywgY29udGV4dC5sYXN0U3RhcnRMb2MsIDAsIHNvdXJjZVtjb250ZXh0Lm9mZnNldF0gfHwgJycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbmROb2RlKG5vZGUsIHRva2VuaXplci5jdXJyZW50T2Zmc2V0KCksIHRva2VuaXplci5jdXJyZW50UG9zaXRpb24oKSk7XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBwYXJzZSB9O1xyXG59XHJcbmZ1bmN0aW9uIGdldFRva2VuQ2FwdGlvbih0b2tlbikge1xyXG4gICAgaWYgKHRva2VuLnR5cGUgPT09IDE0IC8qIEVPRiAqLykge1xyXG4gICAgICAgIHJldHVybiAnRU9GJztcclxuICAgIH1cclxuICAgIGNvbnN0IG5hbWUgPSAodG9rZW4udmFsdWUgfHwgJycpLnJlcGxhY2UoL1xccj9cXG4vZ3UsICdcXFxcbicpO1xyXG4gICAgcmV0dXJuIG5hbWUubGVuZ3RoID4gMTAgPyBuYW1lLnNsaWNlKDAsIDkpICsgJ+KApicgOiBuYW1lO1xyXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRyYW5zZm9ybWVyKGFzdCwgb3B0aW9ucyA9IHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuKSB7XHJcbiAgICBjb25zdCBfY29udGV4dCA9IHtcclxuICAgICAgICBhc3QsXHJcbiAgICAgICAgaGVscGVyczogbmV3IFNldCgpXHJcbiAgICB9O1xyXG4gICAgY29uc3QgY29udGV4dCA9ICgpID0+IF9jb250ZXh0O1xyXG4gICAgY29uc3QgaGVscGVyID0gKG5hbWUpID0+IHtcclxuICAgICAgICBfY29udGV4dC5oZWxwZXJzLmFkZChuYW1lKTtcclxuICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgIH07XHJcbiAgICByZXR1cm4geyBjb250ZXh0LCBoZWxwZXIgfTtcclxufVxyXG5mdW5jdGlvbiB0cmF2ZXJzZU5vZGVzKG5vZGVzLCB0cmFuc2Zvcm1lcikge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRyYXZlcnNlTm9kZShub2Rlc1tpXSwgdHJhbnNmb3JtZXIpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHRyYXZlcnNlTm9kZShub2RlLCB0cmFuc2Zvcm1lcikge1xyXG4gICAgLy8gVE9ETzogaWYgd2UgbmVlZCBwcmUtaG9vayBvZiB0cmFuc2Zvcm0sIHNob3VsZCBiZSBpbXBsZW1lbnRlZCB0byBoZXJlXHJcbiAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xyXG4gICAgICAgIGNhc2UgMSAvKiBQbHVyYWwgKi86XHJcbiAgICAgICAgICAgIHRyYXZlcnNlTm9kZXMobm9kZS5jYXNlcywgdHJhbnNmb3JtZXIpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm1lci5oZWxwZXIoXCJwbHVyYWxcIiAvKiBQTFVSQUwgKi8pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDIgLyogTWVzc2FnZSAqLzpcclxuICAgICAgICAgICAgdHJhdmVyc2VOb2Rlcyhub2RlLml0ZW1zLCB0cmFuc2Zvcm1lcik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNiAvKiBMaW5rZWQgKi86XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmtlZCA9IG5vZGU7XHJcbiAgICAgICAgICAgIHRyYXZlcnNlTm9kZShsaW5rZWQua2V5LCB0cmFuc2Zvcm1lcik7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybWVyLmhlbHBlcihcImxpbmtlZFwiIC8qIExJTktFRCAqLyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybWVyLmhlbHBlcihcInR5cGVcIiAvKiBUWVBFICovKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA1IC8qIExpc3QgKi86XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybWVyLmhlbHBlcihcImludGVycG9sYXRlXCIgLyogSU5URVJQT0xBVEUgKi8pO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm1lci5oZWxwZXIoXCJsaXN0XCIgLyogTElTVCAqLyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNCAvKiBOYW1lZCAqLzpcclxuICAgICAgICAgICAgdHJhbnNmb3JtZXIuaGVscGVyKFwiaW50ZXJwb2xhdGVcIiAvKiBJTlRFUlBPTEFURSAqLyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybWVyLmhlbHBlcihcIm5hbWVkXCIgLyogTkFNRUQgKi8pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIC8vIFRPRE86IGlmIHdlIG5lZWQgcG9zdC1ob29rIG9mIHRyYW5zZm9ybSwgc2hvdWxkIGJlIGltcGxlbWVudGVkIHRvIGhlcmVcclxufVxyXG4vLyB0cmFuc2Zvcm0gQVNUXHJcbmZ1bmN0aW9uIHRyYW5zZm9ybShhc3QsIG9wdGlvbnMgPSB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbikge1xyXG4gICAgY29uc3QgdHJhbnNmb3JtZXIgPSBjcmVhdGVUcmFuc2Zvcm1lcihhc3QpO1xyXG4gICAgdHJhbnNmb3JtZXIuaGVscGVyKFwibm9ybWFsaXplXCIgLyogTk9STUFMSVpFICovKTtcclxuICAgIC8vIHRyYXZlcnNlXHJcbiAgICBhc3QuYm9keSAmJiB0cmF2ZXJzZU5vZGUoYXN0LmJvZHksIHRyYW5zZm9ybWVyKTtcclxuICAgIC8vIHNldCBtZXRhIGluZm9ybWF0aW9uXHJcbiAgICBjb25zdCBjb250ZXh0ID0gdHJhbnNmb3JtZXIuY29udGV4dCgpO1xyXG4gICAgYXN0LmhlbHBlcnMgPSBBcnJheS5mcm9tKGNvbnRleHQuaGVscGVycyk7XHJcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29kZUdlbmVyYXRvcihhc3QsIG9wdGlvbnMpIHtcclxuICAgIGNvbnN0IHsgc291cmNlTWFwLCBmaWxlbmFtZSwgYnJlYWtMaW5lQ29kZSwgbmVlZEluZGVudDogX25lZWRJbmRlbnQgfSA9IG9wdGlvbnM7XHJcbiAgICBjb25zdCBfY29udGV4dCA9IHtcclxuICAgICAgICBzb3VyY2U6IGFzdC5sb2Muc291cmNlLFxyXG4gICAgICAgIGZpbGVuYW1lLFxyXG4gICAgICAgIGNvZGU6ICcnLFxyXG4gICAgICAgIGNvbHVtbjogMSxcclxuICAgICAgICBsaW5lOiAxLFxyXG4gICAgICAgIG9mZnNldDogMCxcclxuICAgICAgICBtYXA6IHVuZGVmaW5lZCxcclxuICAgICAgICBicmVha0xpbmVDb2RlLFxyXG4gICAgICAgIG5lZWRJbmRlbnQ6IF9uZWVkSW5kZW50LFxyXG4gICAgICAgIGluZGVudExldmVsOiAwXHJcbiAgICB9O1xyXG4gICAgY29uc3QgY29udGV4dCA9ICgpID0+IF9jb250ZXh0O1xyXG4gICAgZnVuY3Rpb24gcHVzaChjb2RlLCBub2RlKSB7XHJcbiAgICAgICAgX2NvbnRleHQuY29kZSArPSBjb2RlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gX25ld2xpbmUobiwgd2l0aEJyZWFrTGluZSA9IHRydWUpIHtcclxuICAgICAgICBjb25zdCBfYnJlYWtMaW5lQ29kZSA9IHdpdGhCcmVha0xpbmUgPyBicmVha0xpbmVDb2RlIDogJyc7XHJcbiAgICAgICAgcHVzaChfbmVlZEluZGVudCA/IF9icmVha0xpbmVDb2RlICsgYCAgYC5yZXBlYXQobikgOiBfYnJlYWtMaW5lQ29kZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpbmRlbnQod2l0aE5ld0xpbmUgPSB0cnVlKSB7XHJcbiAgICAgICAgY29uc3QgbGV2ZWwgPSArK19jb250ZXh0LmluZGVudExldmVsO1xyXG4gICAgICAgIHdpdGhOZXdMaW5lICYmIF9uZXdsaW5lKGxldmVsKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRlaW5kZW50KHdpdGhOZXdMaW5lID0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IGxldmVsID0gLS1fY29udGV4dC5pbmRlbnRMZXZlbDtcclxuICAgICAgICB3aXRoTmV3TGluZSAmJiBfbmV3bGluZShsZXZlbCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBuZXdsaW5lKCkge1xyXG4gICAgICAgIF9uZXdsaW5lKF9jb250ZXh0LmluZGVudExldmVsKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhlbHBlciA9IChrZXkpID0+IGBfJHtrZXl9YDtcclxuICAgIGNvbnN0IG5lZWRJbmRlbnQgPSAoKSA9PiBfY29udGV4dC5uZWVkSW5kZW50O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb250ZXh0LFxyXG4gICAgICAgIHB1c2gsXHJcbiAgICAgICAgaW5kZW50LFxyXG4gICAgICAgIGRlaW5kZW50LFxyXG4gICAgICAgIG5ld2xpbmUsXHJcbiAgICAgICAgaGVscGVyLFxyXG4gICAgICAgIG5lZWRJbmRlbnRcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gZ2VuZXJhdGVMaW5rZWROb2RlKGdlbmVyYXRvciwgbm9kZSkge1xyXG4gICAgY29uc3QgeyBoZWxwZXIgfSA9IGdlbmVyYXRvcjtcclxuICAgIGdlbmVyYXRvci5wdXNoKGAke2hlbHBlcihcImxpbmtlZFwiIC8qIExJTktFRCAqLyl9KGApO1xyXG4gICAgZ2VuZXJhdGVOb2RlKGdlbmVyYXRvciwgbm9kZS5rZXkpO1xyXG4gICAgaWYgKG5vZGUubW9kaWZpZXIpIHtcclxuICAgICAgICBnZW5lcmF0b3IucHVzaChgLCBgKTtcclxuICAgICAgICBnZW5lcmF0ZU5vZGUoZ2VuZXJhdG9yLCBub2RlLm1vZGlmaWVyKTtcclxuICAgICAgICBnZW5lcmF0b3IucHVzaChgLCBfdHlwZWApO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZ2VuZXJhdG9yLnB1c2goYCwgdW5kZWZpbmVkLCBfdHlwZWApO1xyXG4gICAgfVxyXG4gICAgZ2VuZXJhdG9yLnB1c2goYClgKTtcclxufVxyXG5mdW5jdGlvbiBnZW5lcmF0ZU1lc3NhZ2VOb2RlKGdlbmVyYXRvciwgbm9kZSkge1xyXG4gICAgY29uc3QgeyBoZWxwZXIsIG5lZWRJbmRlbnQgfSA9IGdlbmVyYXRvcjtcclxuICAgIGdlbmVyYXRvci5wdXNoKGAke2hlbHBlcihcIm5vcm1hbGl6ZVwiIC8qIE5PUk1BTElaRSAqLyl9KFtgKTtcclxuICAgIGdlbmVyYXRvci5pbmRlbnQobmVlZEluZGVudCgpKTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IG5vZGUuaXRlbXMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGdlbmVyYXRlTm9kZShnZW5lcmF0b3IsIG5vZGUuaXRlbXNbaV0pO1xyXG4gICAgICAgIGlmIChpID09PSBsZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZW5lcmF0b3IucHVzaCgnLCAnKTtcclxuICAgIH1cclxuICAgIGdlbmVyYXRvci5kZWluZGVudChuZWVkSW5kZW50KCkpO1xyXG4gICAgZ2VuZXJhdG9yLnB1c2goJ10pJyk7XHJcbn1cclxuZnVuY3Rpb24gZ2VuZXJhdGVQbHVyYWxOb2RlKGdlbmVyYXRvciwgbm9kZSkge1xyXG4gICAgY29uc3QgeyBoZWxwZXIsIG5lZWRJbmRlbnQgfSA9IGdlbmVyYXRvcjtcclxuICAgIGlmIChub2RlLmNhc2VzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICBnZW5lcmF0b3IucHVzaChgJHtoZWxwZXIoXCJwbHVyYWxcIiAvKiBQTFVSQUwgKi8pfShbYCk7XHJcbiAgICAgICAgZ2VuZXJhdG9yLmluZGVudChuZWVkSW5kZW50KCkpO1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IG5vZGUuY2FzZXMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZ2VuZXJhdGVOb2RlKGdlbmVyYXRvciwgbm9kZS5jYXNlc1tpXSk7XHJcbiAgICAgICAgICAgIGlmIChpID09PSBsZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnZW5lcmF0b3IucHVzaCgnLCAnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2VuZXJhdG9yLmRlaW5kZW50KG5lZWRJbmRlbnQoKSk7XHJcbiAgICAgICAgZ2VuZXJhdG9yLnB1c2goYF0pYCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZ2VuZXJhdGVSZXNvdXJjZShnZW5lcmF0b3IsIG5vZGUpIHtcclxuICAgIGlmIChub2RlLmJvZHkpIHtcclxuICAgICAgICBnZW5lcmF0ZU5vZGUoZ2VuZXJhdG9yLCBub2RlLmJvZHkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZ2VuZXJhdG9yLnB1c2goJ251bGwnKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBnZW5lcmF0ZU5vZGUoZ2VuZXJhdG9yLCBub2RlKSB7XHJcbiAgICBjb25zdCB7IGhlbHBlciB9ID0gZ2VuZXJhdG9yO1xyXG4gICAgc3dpdGNoIChub2RlLnR5cGUpIHtcclxuICAgICAgICBjYXNlIDAgLyogUmVzb3VyY2UgKi86XHJcbiAgICAgICAgICAgIGdlbmVyYXRlUmVzb3VyY2UoZ2VuZXJhdG9yLCBub2RlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxIC8qIFBsdXJhbCAqLzpcclxuICAgICAgICAgICAgZ2VuZXJhdGVQbHVyYWxOb2RlKGdlbmVyYXRvciwgbm9kZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMiAvKiBNZXNzYWdlICovOlxyXG4gICAgICAgICAgICBnZW5lcmF0ZU1lc3NhZ2VOb2RlKGdlbmVyYXRvciwgbm9kZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNiAvKiBMaW5rZWQgKi86XHJcbiAgICAgICAgICAgIGdlbmVyYXRlTGlua2VkTm9kZShnZW5lcmF0b3IsIG5vZGUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDggLyogTGlua2VkTW9kaWZpZXIgKi86XHJcbiAgICAgICAgICAgIGdlbmVyYXRvci5wdXNoKEpTT04uc3RyaW5naWZ5KG5vZGUudmFsdWUpLCBub2RlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA3IC8qIExpbmtlZEtleSAqLzpcclxuICAgICAgICAgICAgZ2VuZXJhdG9yLnB1c2goSlNPTi5zdHJpbmdpZnkobm9kZS52YWx1ZSksIG5vZGUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDUgLyogTGlzdCAqLzpcclxuICAgICAgICAgICAgZ2VuZXJhdG9yLnB1c2goYCR7aGVscGVyKFwiaW50ZXJwb2xhdGVcIiAvKiBJTlRFUlBPTEFURSAqLyl9KCR7aGVscGVyKFwibGlzdFwiIC8qIExJU1QgKi8pfSgke25vZGUuaW5kZXh9KSlgLCBub2RlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA0IC8qIE5hbWVkICovOlxyXG4gICAgICAgICAgICBnZW5lcmF0b3IucHVzaChgJHtoZWxwZXIoXCJpbnRlcnBvbGF0ZVwiIC8qIElOVEVSUE9MQVRFICovKX0oJHtoZWxwZXIoXCJuYW1lZFwiIC8qIE5BTUVEICovKX0oJHtKU09OLnN0cmluZ2lmeShub2RlLmtleSl9KSlgLCBub2RlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA5IC8qIExpdGVyYWwgKi86XHJcbiAgICAgICAgICAgIGdlbmVyYXRvci5wdXNoKEpTT04uc3RyaW5naWZ5KG5vZGUudmFsdWUpLCBub2RlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAzIC8qIFRleHQgKi86XHJcbiAgICAgICAgICAgIGdlbmVyYXRvci5wdXNoKEpTT04uc3RyaW5naWZ5KG5vZGUudmFsdWUpLCBub2RlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgaWYgKChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB1bmhhbmRsZWQgY29kZWdlbiBub2RlIHR5cGU6ICR7bm9kZS50eXBlfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gZ2VuZXJhdGUgY29kZSBmcm9tIEFTVFxyXG5jb25zdCBnZW5lcmF0ZSA9IChhc3QsIG9wdGlvbnMgPSB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbikgPT4ge1xyXG4gICAgY29uc3QgbW9kZSA9IGlzU3RyaW5nKG9wdGlvbnMubW9kZSkgPyBvcHRpb25zLm1vZGUgOiAnbm9ybWFsJztcclxuICAgIGNvbnN0IGZpbGVuYW1lID0gaXNTdHJpbmcob3B0aW9ucy5maWxlbmFtZSlcclxuICAgICAgICA/IG9wdGlvbnMuZmlsZW5hbWVcclxuICAgICAgICA6ICdtZXNzYWdlLmludGwnO1xyXG4gICAgY29uc3Qgc291cmNlTWFwID0gISFvcHRpb25zLnNvdXJjZU1hcDtcclxuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gICAgY29uc3QgYnJlYWtMaW5lQ29kZSA9IG9wdGlvbnMuYnJlYWtMaW5lQ29kZSAhPSBudWxsXHJcbiAgICAgICAgPyBvcHRpb25zLmJyZWFrTGluZUNvZGVcclxuICAgICAgICA6IG1vZGUgPT09ICdhcnJvdydcclxuICAgICAgICAgICAgPyAnOydcclxuICAgICAgICAgICAgOiAnXFxuJztcclxuICAgIGNvbnN0IG5lZWRJbmRlbnQgPSBvcHRpb25zLm5lZWRJbmRlbnQgPyBvcHRpb25zLm5lZWRJbmRlbnQgOiBtb2RlICE9PSAnYXJyb3cnO1xyXG4gICAgY29uc3QgaGVscGVycyA9IGFzdC5oZWxwZXJzIHx8IFtdO1xyXG4gICAgY29uc3QgZ2VuZXJhdG9yID0gY3JlYXRlQ29kZUdlbmVyYXRvcihhc3QsIHtcclxuICAgICAgICBtb2RlLFxyXG4gICAgICAgIGZpbGVuYW1lLFxyXG4gICAgICAgIHNvdXJjZU1hcCxcclxuICAgICAgICBicmVha0xpbmVDb2RlLFxyXG4gICAgICAgIG5lZWRJbmRlbnRcclxuICAgIH0pO1xyXG4gICAgZ2VuZXJhdG9yLnB1c2gobW9kZSA9PT0gJ25vcm1hbCcgPyBgZnVuY3Rpb24gX19tc2dfXyAoY3R4KSB7YCA6IGAoY3R4KSA9PiB7YCk7XHJcbiAgICBnZW5lcmF0b3IuaW5kZW50KG5lZWRJbmRlbnQpO1xyXG4gICAgaWYgKGhlbHBlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGdlbmVyYXRvci5wdXNoKGBjb25zdCB7ICR7aGVscGVycy5tYXAocyA9PiBgJHtzfTogXyR7c31gKS5qb2luKCcsICcpfSB9ID0gY3R4YCk7XHJcbiAgICAgICAgZ2VuZXJhdG9yLm5ld2xpbmUoKTtcclxuICAgIH1cclxuICAgIGdlbmVyYXRvci5wdXNoKGByZXR1cm4gYCk7XHJcbiAgICBnZW5lcmF0ZU5vZGUoZ2VuZXJhdG9yLCBhc3QpO1xyXG4gICAgZ2VuZXJhdG9yLmRlaW5kZW50KG5lZWRJbmRlbnQpO1xyXG4gICAgZ2VuZXJhdG9yLnB1c2goYH1gKTtcclxuICAgIGNvbnN0IHsgY29kZSwgbWFwIH0gPSBnZW5lcmF0b3IuY29udGV4dCgpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhc3QsXHJcbiAgICAgICAgY29kZSxcclxuICAgICAgICBtYXA6IG1hcCA/IG1hcC50b0pTT04oKSA6IHVuZGVmaW5lZCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgIH07XHJcbn07XG5cbmZ1bmN0aW9uIGJhc2VDb21waWxlKHNvdXJjZSwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICBjb25zdCBhc3NpZ25lZE9wdGlvbnMgPSBhc3NpZ24oe30sIG9wdGlvbnMpO1xyXG4gICAgLy8gcGFyc2Ugc291cmNlIGNvZGVzXHJcbiAgICBjb25zdCBwYXJzZXIgPSBjcmVhdGVQYXJzZXIoYXNzaWduZWRPcHRpb25zKTtcclxuICAgIGNvbnN0IGFzdCA9IHBhcnNlci5wYXJzZShzb3VyY2UpO1xyXG4gICAgLy8gdHJhbnNmb3JtIEFTVHNcclxuICAgIHRyYW5zZm9ybShhc3QsIGFzc2lnbmVkT3B0aW9ucyk7XHJcbiAgICAvLyBnZW5lcmF0ZSBqYXZhc2NyaXB0IGNvZGVzXHJcbiAgICByZXR1cm4gZ2VuZXJhdGUoYXN0LCBhc3NpZ25lZE9wdGlvbnMpO1xyXG59XG5cbmV4cG9ydCB7IENvbXBpbGVFcnJvckNvZGVzLCBFUlJPUl9ET01BSU4sIExvY2F0aW9uU3R1YiwgYmFzZUNvbXBpbGUsIGNyZWF0ZUNvbXBpbGVFcnJvciwgY3JlYXRlTG9jYXRpb24sIGNyZWF0ZVBhcnNlciwgY3JlYXRlUG9zaXRpb24sIGRlZmF1bHRPbkVycm9yLCBlcnJvck1lc3NhZ2VzIH07XG4iLCIvKiFcbiAgKiBkZXZ0b29scy1pZiB2OS4yLjJcbiAgKiAoYykgMjAyMiBrYXp1eWEga2F3YWd1Y2hpXG4gICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICAqL1xuY29uc3QgSW50bGlmeURldlRvb2xzSG9va3MgPSAge1xyXG4gICAgSTE4bkluaXQ6ICdpMThuOmluaXQnLFxyXG4gICAgRnVuY3Rpb25UcmFuc2xhdGU6ICdmdW5jdGlvbjp0cmFuc2xhdGUnXHJcbn07XG5cbmV4cG9ydCB7IEludGxpZnlEZXZUb29sc0hvb2tzIH07XG4iLCIvKiFcbiAgKiBjb3JlLWJhc2UgdjkuMi4yXG4gICogKGMpIDIwMjIga2F6dXlhIGthd2FndWNoaVxuICAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAgKi9cbmltcG9ydCB7IGlzT2JqZWN0LCBpc1N0cmluZywgaXNGdW5jdGlvbiwgaXNOdW1iZXIsIGlzUGxhaW5PYmplY3QsIHRvRGlzcGxheVN0cmluZywgaXNBcnJheSwgZm9ybWF0LCBpc0Jvb2xlYW4sIGFzc2lnbiwgaXNSZWdFeHAsIHdhcm4sIGVzY2FwZUh0bWwsIGluQnJvd3NlciwgbWFyaywgbWVhc3VyZSwgaXNFbXB0eU9iamVjdCwgZ2VuZXJhdGVDb2RlRnJhbWUsIGdlbmVyYXRlRm9ybWF0Q2FjaGVLZXksIGlzRGF0ZSwgZ2V0R2xvYmFsVGhpcyB9IGZyb20gJ0BpbnRsaWZ5L3NoYXJlZCc7XG5pbXBvcnQgeyBkZWZhdWx0T25FcnJvciwgYmFzZUNvbXBpbGUsIENvbXBpbGVFcnJvckNvZGVzLCBjcmVhdGVDb21waWxlRXJyb3IgfSBmcm9tICdAaW50bGlmeS9tZXNzYWdlLWNvbXBpbGVyJztcbmV4cG9ydCB7IENvbXBpbGVFcnJvckNvZGVzLCBjcmVhdGVDb21waWxlRXJyb3IgfSBmcm9tICdAaW50bGlmeS9tZXNzYWdlLWNvbXBpbGVyJztcbmltcG9ydCB7IEludGxpZnlEZXZUb29sc0hvb2tzIH0gZnJvbSAnQGludGxpZnkvZGV2dG9vbHMtaWYnO1xuXG5jb25zdCBwYXRoU3RhdGVNYWNoaW5lID0gIFtdO1xyXG5wYXRoU3RhdGVNYWNoaW5lWzAgLyogQkVGT1JFX1BBVEggKi9dID0ge1xyXG4gICAgW1wid1wiIC8qIFdPUktTUEFDRSAqL106IFswIC8qIEJFRk9SRV9QQVRIICovXSxcclxuICAgIFtcImlcIiAvKiBJREVOVCAqL106IFszIC8qIElOX0lERU5UICovLCAwIC8qIEFQUEVORCAqL10sXHJcbiAgICBbXCJbXCIgLyogTEVGVF9CUkFDS0VUICovXTogWzQgLyogSU5fU1VCX1BBVEggKi9dLFxyXG4gICAgW1wib1wiIC8qIEVORF9PRl9GQUlMICovXTogWzcgLyogQUZURVJfUEFUSCAqL11cclxufTtcclxucGF0aFN0YXRlTWFjaGluZVsxIC8qIElOX1BBVEggKi9dID0ge1xyXG4gICAgW1wid1wiIC8qIFdPUktTUEFDRSAqL106IFsxIC8qIElOX1BBVEggKi9dLFxyXG4gICAgW1wiLlwiIC8qIERPVCAqL106IFsyIC8qIEJFRk9SRV9JREVOVCAqL10sXHJcbiAgICBbXCJbXCIgLyogTEVGVF9CUkFDS0VUICovXTogWzQgLyogSU5fU1VCX1BBVEggKi9dLFxyXG4gICAgW1wib1wiIC8qIEVORF9PRl9GQUlMICovXTogWzcgLyogQUZURVJfUEFUSCAqL11cclxufTtcclxucGF0aFN0YXRlTWFjaGluZVsyIC8qIEJFRk9SRV9JREVOVCAqL10gPSB7XHJcbiAgICBbXCJ3XCIgLyogV09SS1NQQUNFICovXTogWzIgLyogQkVGT1JFX0lERU5UICovXSxcclxuICAgIFtcImlcIiAvKiBJREVOVCAqL106IFszIC8qIElOX0lERU5UICovLCAwIC8qIEFQUEVORCAqL10sXHJcbiAgICBbXCIwXCIgLyogWkVSTyAqL106IFszIC8qIElOX0lERU5UICovLCAwIC8qIEFQUEVORCAqL11cclxufTtcclxucGF0aFN0YXRlTWFjaGluZVszIC8qIElOX0lERU5UICovXSA9IHtcclxuICAgIFtcImlcIiAvKiBJREVOVCAqL106IFszIC8qIElOX0lERU5UICovLCAwIC8qIEFQUEVORCAqL10sXHJcbiAgICBbXCIwXCIgLyogWkVSTyAqL106IFszIC8qIElOX0lERU5UICovLCAwIC8qIEFQUEVORCAqL10sXHJcbiAgICBbXCJ3XCIgLyogV09SS1NQQUNFICovXTogWzEgLyogSU5fUEFUSCAqLywgMSAvKiBQVVNIICovXSxcclxuICAgIFtcIi5cIiAvKiBET1QgKi9dOiBbMiAvKiBCRUZPUkVfSURFTlQgKi8sIDEgLyogUFVTSCAqL10sXHJcbiAgICBbXCJbXCIgLyogTEVGVF9CUkFDS0VUICovXTogWzQgLyogSU5fU1VCX1BBVEggKi8sIDEgLyogUFVTSCAqL10sXHJcbiAgICBbXCJvXCIgLyogRU5EX09GX0ZBSUwgKi9dOiBbNyAvKiBBRlRFUl9QQVRIICovLCAxIC8qIFBVU0ggKi9dXHJcbn07XHJcbnBhdGhTdGF0ZU1hY2hpbmVbNCAvKiBJTl9TVUJfUEFUSCAqL10gPSB7XHJcbiAgICBbXCInXCIgLyogU0lOR0xFX1FVT1RFICovXTogWzUgLyogSU5fU0lOR0xFX1FVT1RFICovLCAwIC8qIEFQUEVORCAqL10sXHJcbiAgICBbXCJcXFwiXCIgLyogRE9VQkxFX1FVT1RFICovXTogWzYgLyogSU5fRE9VQkxFX1FVT1RFICovLCAwIC8qIEFQUEVORCAqL10sXHJcbiAgICBbXCJbXCIgLyogTEVGVF9CUkFDS0VUICovXTogW1xyXG4gICAgICAgIDQgLyogSU5fU1VCX1BBVEggKi8sXHJcbiAgICAgICAgMiAvKiBJTkNfU1VCX1BBVEhfREVQVEggKi9cclxuICAgIF0sXHJcbiAgICBbXCJdXCIgLyogUklHSFRfQlJBQ0tFVCAqL106IFsxIC8qIElOX1BBVEggKi8sIDMgLyogUFVTSF9TVUJfUEFUSCAqL10sXHJcbiAgICBbXCJvXCIgLyogRU5EX09GX0ZBSUwgKi9dOiA4IC8qIEVSUk9SICovLFxyXG4gICAgW1wibFwiIC8qIEVMU0UgKi9dOiBbNCAvKiBJTl9TVUJfUEFUSCAqLywgMCAvKiBBUFBFTkQgKi9dXHJcbn07XHJcbnBhdGhTdGF0ZU1hY2hpbmVbNSAvKiBJTl9TSU5HTEVfUVVPVEUgKi9dID0ge1xyXG4gICAgW1wiJ1wiIC8qIFNJTkdMRV9RVU9URSAqL106IFs0IC8qIElOX1NVQl9QQVRIICovLCAwIC8qIEFQUEVORCAqL10sXHJcbiAgICBbXCJvXCIgLyogRU5EX09GX0ZBSUwgKi9dOiA4IC8qIEVSUk9SICovLFxyXG4gICAgW1wibFwiIC8qIEVMU0UgKi9dOiBbNSAvKiBJTl9TSU5HTEVfUVVPVEUgKi8sIDAgLyogQVBQRU5EICovXVxyXG59O1xyXG5wYXRoU3RhdGVNYWNoaW5lWzYgLyogSU5fRE9VQkxFX1FVT1RFICovXSA9IHtcclxuICAgIFtcIlxcXCJcIiAvKiBET1VCTEVfUVVPVEUgKi9dOiBbNCAvKiBJTl9TVUJfUEFUSCAqLywgMCAvKiBBUFBFTkQgKi9dLFxyXG4gICAgW1wib1wiIC8qIEVORF9PRl9GQUlMICovXTogOCAvKiBFUlJPUiAqLyxcclxuICAgIFtcImxcIiAvKiBFTFNFICovXTogWzYgLyogSU5fRE9VQkxFX1FVT1RFICovLCAwIC8qIEFQUEVORCAqL11cclxufTtcclxuLyoqXHJcbiAqIENoZWNrIGlmIGFuIGV4cHJlc3Npb24gaXMgYSBsaXRlcmFsIHZhbHVlLlxyXG4gKi9cclxuY29uc3QgbGl0ZXJhbFZhbHVlUkUgPSAvXlxccz8oPzp0cnVlfGZhbHNlfC0/W1xcZC5dK3wnW14nXSonfFwiW15cIl0qXCIpXFxzPyQvO1xyXG5mdW5jdGlvbiBpc0xpdGVyYWwoZXhwKSB7XHJcbiAgICByZXR1cm4gbGl0ZXJhbFZhbHVlUkUudGVzdChleHApO1xyXG59XHJcbi8qKlxyXG4gKiBTdHJpcCBxdW90ZXMgZnJvbSBhIHN0cmluZ1xyXG4gKi9cclxuZnVuY3Rpb24gc3RyaXBRdW90ZXMoc3RyKSB7XHJcbiAgICBjb25zdCBhID0gc3RyLmNoYXJDb2RlQXQoMCk7XHJcbiAgICBjb25zdCBiID0gc3RyLmNoYXJDb2RlQXQoc3RyLmxlbmd0aCAtIDEpO1xyXG4gICAgcmV0dXJuIGEgPT09IGIgJiYgKGEgPT09IDB4MjIgfHwgYSA9PT0gMHgyNykgPyBzdHIuc2xpY2UoMSwgLTEpIDogc3RyO1xyXG59XHJcbi8qKlxyXG4gKiBEZXRlcm1pbmUgdGhlIHR5cGUgb2YgYSBjaGFyYWN0ZXIgaW4gYSBrZXlwYXRoLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0UGF0aENoYXJUeXBlKGNoKSB7XHJcbiAgICBpZiAoY2ggPT09IHVuZGVmaW5lZCB8fCBjaCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBcIm9cIiAvKiBFTkRfT0ZfRkFJTCAqLztcclxuICAgIH1cclxuICAgIGNvbnN0IGNvZGUgPSBjaC5jaGFyQ29kZUF0KDApO1xyXG4gICAgc3dpdGNoIChjb2RlKSB7XHJcbiAgICAgICAgY2FzZSAweDViOiAvLyBbXHJcbiAgICAgICAgY2FzZSAweDVkOiAvLyBdXHJcbiAgICAgICAgY2FzZSAweDJlOiAvLyAuXHJcbiAgICAgICAgY2FzZSAweDIyOiAvLyBcIlxyXG4gICAgICAgIGNhc2UgMHgyNzogLy8gJ1xyXG4gICAgICAgICAgICByZXR1cm4gY2g7XHJcbiAgICAgICAgY2FzZSAweDVmOiAvLyBfXHJcbiAgICAgICAgY2FzZSAweDI0OiAvLyAkXHJcbiAgICAgICAgY2FzZSAweDJkOiAvLyAtXHJcbiAgICAgICAgICAgIHJldHVybiBcImlcIiAvKiBJREVOVCAqLztcclxuICAgICAgICBjYXNlIDB4MDk6IC8vIFRhYiAoSFQpXHJcbiAgICAgICAgY2FzZSAweDBhOiAvLyBOZXdsaW5lIChMRilcclxuICAgICAgICBjYXNlIDB4MGQ6IC8vIFJldHVybiAoQ1IpXHJcbiAgICAgICAgY2FzZSAweGEwOiAvLyBOby1icmVhayBzcGFjZSAoTkJTUClcclxuICAgICAgICBjYXNlIDB4ZmVmZjogLy8gQnl0ZSBPcmRlciBNYXJrIChCT00pXHJcbiAgICAgICAgY2FzZSAweDIwMjg6IC8vIExpbmUgU2VwYXJhdG9yIChMUylcclxuICAgICAgICBjYXNlIDB4MjAyOTogLy8gUGFyYWdyYXBoIFNlcGFyYXRvciAoUFMpXHJcbiAgICAgICAgICAgIHJldHVybiBcIndcIiAvKiBXT1JLU1BBQ0UgKi87XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJpXCIgLyogSURFTlQgKi87XHJcbn1cclxuLyoqXHJcbiAqIEZvcm1hdCBhIHN1YlBhdGgsIHJldHVybiBpdHMgcGxhaW4gZm9ybSBpZiBpdCBpc1xyXG4gKiBhIGxpdGVyYWwgc3RyaW5nIG9yIG51bWJlci4gT3RoZXJ3aXNlIHByZXBlbmQgdGhlXHJcbiAqIGR5bmFtaWMgaW5kaWNhdG9yICgqKS5cclxuICovXHJcbmZ1bmN0aW9uIGZvcm1hdFN1YlBhdGgocGF0aCkge1xyXG4gICAgY29uc3QgdHJpbW1lZCA9IHBhdGgudHJpbSgpO1xyXG4gICAgLy8gaW52YWxpZCBsZWFkaW5nIDBcclxuICAgIGlmIChwYXRoLmNoYXJBdCgwKSA9PT0gJzAnICYmIGlzTmFOKHBhcnNlSW50KHBhdGgpKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc0xpdGVyYWwodHJpbW1lZClcclxuICAgICAgICA/IHN0cmlwUXVvdGVzKHRyaW1tZWQpXHJcbiAgICAgICAgOiBcIipcIiAvKiBBU1RBUklTSyAqLyArIHRyaW1tZWQ7XHJcbn1cclxuLyoqXHJcbiAqIFBhcnNlIGEgc3RyaW5nIHBhdGggaW50byBhbiBhcnJheSBvZiBzZWdtZW50c1xyXG4gKi9cclxuZnVuY3Rpb24gcGFyc2UocGF0aCkge1xyXG4gICAgY29uc3Qga2V5cyA9IFtdO1xyXG4gICAgbGV0IGluZGV4ID0gLTE7XHJcbiAgICBsZXQgbW9kZSA9IDAgLyogQkVGT1JFX1BBVEggKi87XHJcbiAgICBsZXQgc3ViUGF0aERlcHRoID0gMDtcclxuICAgIGxldCBjO1xyXG4gICAgbGV0IGtleTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG4gICAgbGV0IG5ld0NoYXI7XHJcbiAgICBsZXQgdHlwZTtcclxuICAgIGxldCB0cmFuc2l0aW9uO1xyXG4gICAgbGV0IGFjdGlvbjtcclxuICAgIGxldCB0eXBlTWFwO1xyXG4gICAgY29uc3QgYWN0aW9ucyA9IFtdO1xyXG4gICAgYWN0aW9uc1swIC8qIEFQUEVORCAqL10gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGtleSA9IG5ld0NoYXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBrZXkgKz0gbmV3Q2hhcjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgYWN0aW9uc1sxIC8qIFBVU0ggKi9dID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChrZXkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcclxuICAgICAgICAgICAga2V5ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBhY3Rpb25zWzIgLyogSU5DX1NVQl9QQVRIX0RFUFRIICovXSA9ICgpID0+IHtcclxuICAgICAgICBhY3Rpb25zWzAgLyogQVBQRU5EICovXSgpO1xyXG4gICAgICAgIHN1YlBhdGhEZXB0aCsrO1xyXG4gICAgfTtcclxuICAgIGFjdGlvbnNbMyAvKiBQVVNIX1NVQl9QQVRIICovXSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoc3ViUGF0aERlcHRoID4gMCkge1xyXG4gICAgICAgICAgICBzdWJQYXRoRGVwdGgtLTtcclxuICAgICAgICAgICAgbW9kZSA9IDQgLyogSU5fU1VCX1BBVEggKi87XHJcbiAgICAgICAgICAgIGFjdGlvbnNbMCAvKiBBUFBFTkQgKi9dKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzdWJQYXRoRGVwdGggPSAwO1xyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBrZXkgPSBmb3JtYXRTdWJQYXRoKGtleSk7XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zWzEgLyogUFVTSCAqL10oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBtYXliZVVuZXNjYXBlUXVvdGUoKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dENoYXIgPSBwYXRoW2luZGV4ICsgMV07XHJcbiAgICAgICAgaWYgKChtb2RlID09PSA1IC8qIElOX1NJTkdMRV9RVU9URSAqLyAmJlxyXG4gICAgICAgICAgICBuZXh0Q2hhciA9PT0gXCInXCIgLyogU0lOR0xFX1FVT1RFICovKSB8fFxyXG4gICAgICAgICAgICAobW9kZSA9PT0gNiAvKiBJTl9ET1VCTEVfUVVPVEUgKi8gJiZcclxuICAgICAgICAgICAgICAgIG5leHRDaGFyID09PSBcIlxcXCJcIiAvKiBET1VCTEVfUVVPVEUgKi8pKSB7XHJcbiAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgICAgIG5ld0NoYXIgPSAnXFxcXCcgKyBuZXh0Q2hhcjtcclxuICAgICAgICAgICAgYWN0aW9uc1swIC8qIEFQUEVORCAqL10oKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2hpbGUgKG1vZGUgIT09IG51bGwpIHtcclxuICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgIGMgPSBwYXRoW2luZGV4XTtcclxuICAgICAgICBpZiAoYyA9PT0gJ1xcXFwnICYmIG1heWJlVW5lc2NhcGVRdW90ZSgpKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0eXBlID0gZ2V0UGF0aENoYXJUeXBlKGMpO1xyXG4gICAgICAgIHR5cGVNYXAgPSBwYXRoU3RhdGVNYWNoaW5lW21vZGVdO1xyXG4gICAgICAgIHRyYW5zaXRpb24gPSB0eXBlTWFwW3R5cGVdIHx8IHR5cGVNYXBbXCJsXCIgLyogRUxTRSAqL10gfHwgOCAvKiBFUlJPUiAqLztcclxuICAgICAgICAvLyBjaGVjayBwYXJzZSBlcnJvclxyXG4gICAgICAgIGlmICh0cmFuc2l0aW9uID09PSA4IC8qIEVSUk9SICovKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbW9kZSA9IHRyYW5zaXRpb25bMF07XHJcbiAgICAgICAgaWYgKHRyYW5zaXRpb25bMV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBhY3Rpb24gPSBhY3Rpb25zW3RyYW5zaXRpb25bMV1dO1xyXG4gICAgICAgICAgICBpZiAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdDaGFyID0gYztcclxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24oKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY2hlY2sgcGFyc2UgZmluaXNoXHJcbiAgICAgICAgaWYgKG1vZGUgPT09IDcgLyogQUZURVJfUEFUSCAqLykge1xyXG4gICAgICAgICAgICByZXR1cm4ga2V5cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gcGF0aCB0b2tlbiBjYWNoZVxyXG5jb25zdCBjYWNoZSA9IG5ldyBNYXAoKTtcclxuLyoqXHJcbiAqIGtleS12YWx1ZSBtZXNzYWdlIHJlc29sdmVyXHJcbiAqXHJcbiAqIEByZW1hcmtzXHJcbiAqIFJlc29sdmVzIG1lc3NhZ2VzIHdpdGggdGhlIGtleS12YWx1ZSBzdHJ1Y3R1cmUuIE5vdGUgdGhhdCBtZXNzYWdlcyB3aXRoIGEgaGllcmFyY2hpY2FsIHN0cnVjdHVyZSBzdWNoIGFzIG9iamVjdHMgY2Fubm90IGJlIHJlc29sdmVkXHJcbiAqXHJcbiAqIEBwYXJhbSBvYmogLSBBIHRhcmdldCBvYmplY3QgdG8gYmUgcmVzb2x2ZWQgd2l0aCBwYXRoXHJcbiAqIEBwYXJhbSBwYXRoIC0gQSB7QGxpbmsgUGF0aCB8IHBhdGh9IHRvIHJlc29sdmUgdGhlIHZhbHVlIG9mIG1lc3NhZ2VcclxuICpcclxuICogQHJldHVybnMgQSByZXNvbHZlZCB7QGxpbmsgUGF0aFZhbHVlIHwgcGF0aCB2YWx1ZX1cclxuICpcclxuICogQFZ1ZUkxOG5HZW5lcmFsXHJcbiAqL1xyXG5mdW5jdGlvbiByZXNvbHZlV2l0aEtleVZhbHVlKG9iaiwgcGF0aCkge1xyXG4gICAgcmV0dXJuIGlzT2JqZWN0KG9iaikgPyBvYmpbcGF0aF0gOiBudWxsO1xyXG59XHJcbi8qKlxyXG4gKiBtZXNzYWdlIHJlc29sdmVyXHJcbiAqXHJcbiAqIEByZW1hcmtzXHJcbiAqIFJlc29sdmVzIG1lc3NhZ2VzLiBtZXNzYWdlcyB3aXRoIGEgaGllcmFyY2hpY2FsIHN0cnVjdHVyZSBzdWNoIGFzIG9iamVjdHMgY2FuIGJlIHJlc29sdmVkLiBUaGlzIHJlc29sdmVyIGlzIHVzZWQgaW4gVnVlSTE4biBhcyBkZWZhdWx0LlxyXG4gKlxyXG4gKiBAcGFyYW0gb2JqIC0gQSB0YXJnZXQgb2JqZWN0IHRvIGJlIHJlc29sdmVkIHdpdGggcGF0aFxyXG4gKiBAcGFyYW0gcGF0aCAtIEEge0BsaW5rIFBhdGggfCBwYXRofSB0byByZXNvbHZlIHRoZSB2YWx1ZSBvZiBtZXNzYWdlXHJcbiAqXHJcbiAqIEByZXR1cm5zIEEgcmVzb2x2ZWQge0BsaW5rIFBhdGhWYWx1ZSB8IHBhdGggdmFsdWV9XHJcbiAqXHJcbiAqIEBWdWVJMThuR2VuZXJhbFxyXG4gKi9cclxuZnVuY3Rpb24gcmVzb2x2ZVZhbHVlKG9iaiwgcGF0aCkge1xyXG4gICAgLy8gY2hlY2sgb2JqZWN0XHJcbiAgICBpZiAoIWlzT2JqZWN0KG9iaikpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIC8vIHBhcnNlIHBhdGhcclxuICAgIGxldCBoaXQgPSBjYWNoZS5nZXQocGF0aCk7XHJcbiAgICBpZiAoIWhpdCkge1xyXG4gICAgICAgIGhpdCA9IHBhcnNlKHBhdGgpO1xyXG4gICAgICAgIGlmIChoaXQpIHtcclxuICAgICAgICAgICAgY2FjaGUuc2V0KHBhdGgsIGhpdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY2hlY2sgaGl0XHJcbiAgICBpZiAoIWhpdCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgLy8gcmVzb2x2ZSBwYXRoIHZhbHVlXHJcbiAgICBjb25zdCBsZW4gPSBoaXQubGVuZ3RoO1xyXG4gICAgbGV0IGxhc3QgPSBvYmo7XHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICB3aGlsZSAoaSA8IGxlbikge1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IGxhc3RbaGl0W2ldXTtcclxuICAgICAgICBpZiAodmFsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxhc3QgPSB2YWw7XHJcbiAgICAgICAgaSsrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxhc3Q7XHJcbn1cblxuY29uc3QgREVGQVVMVF9NT0RJRklFUiA9IChzdHIpID0+IHN0cjtcclxuY29uc3QgREVGQVVMVF9NRVNTQUdFID0gKGN0eCkgPT4gJyc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuY29uc3QgREVGQVVMVF9NRVNTQUdFX0RBVEFfVFlQRSA9ICd0ZXh0JztcclxuY29uc3QgREVGQVVMVF9OT1JNQUxJWkUgPSAodmFsdWVzKSA9PiB2YWx1ZXMubGVuZ3RoID09PSAwID8gJycgOiB2YWx1ZXMuam9pbignJyk7XHJcbmNvbnN0IERFRkFVTFRfSU5URVJQT0xBVEUgPSB0b0Rpc3BsYXlTdHJpbmc7XHJcbmZ1bmN0aW9uIHBsdXJhbERlZmF1bHQoY2hvaWNlLCBjaG9pY2VzTGVuZ3RoKSB7XHJcbiAgICBjaG9pY2UgPSBNYXRoLmFicyhjaG9pY2UpO1xyXG4gICAgaWYgKGNob2ljZXNMZW5ndGggPT09IDIpIHtcclxuICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgICAgICByZXR1cm4gY2hvaWNlXHJcbiAgICAgICAgICAgID8gY2hvaWNlID4gMVxyXG4gICAgICAgICAgICAgICAgPyAxXHJcbiAgICAgICAgICAgICAgICA6IDBcclxuICAgICAgICAgICAgOiAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNob2ljZSA/IE1hdGgubWluKGNob2ljZSwgMikgOiAwO1xyXG59XHJcbmZ1bmN0aW9uIGdldFBsdXJhbEluZGV4KG9wdGlvbnMpIHtcclxuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gICAgY29uc3QgaW5kZXggPSBpc051bWJlcihvcHRpb25zLnBsdXJhbEluZGV4KVxyXG4gICAgICAgID8gb3B0aW9ucy5wbHVyYWxJbmRleFxyXG4gICAgICAgIDogLTE7XHJcbiAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgIHJldHVybiBvcHRpb25zLm5hbWVkICYmIChpc051bWJlcihvcHRpb25zLm5hbWVkLmNvdW50KSB8fCBpc051bWJlcihvcHRpb25zLm5hbWVkLm4pKVxyXG4gICAgICAgID8gaXNOdW1iZXIob3B0aW9ucy5uYW1lZC5jb3VudClcclxuICAgICAgICAgICAgPyBvcHRpb25zLm5hbWVkLmNvdW50XHJcbiAgICAgICAgICAgIDogaXNOdW1iZXIob3B0aW9ucy5uYW1lZC5uKVxyXG4gICAgICAgICAgICAgICAgPyBvcHRpb25zLm5hbWVkLm5cclxuICAgICAgICAgICAgICAgIDogaW5kZXhcclxuICAgICAgICA6IGluZGV4O1xyXG59XHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWVkKHBsdXJhbEluZGV4LCBwcm9wcykge1xyXG4gICAgaWYgKCFwcm9wcy5jb3VudCkge1xyXG4gICAgICAgIHByb3BzLmNvdW50ID0gcGx1cmFsSW5kZXg7XHJcbiAgICB9XHJcbiAgICBpZiAoIXByb3BzLm4pIHtcclxuICAgICAgICBwcm9wcy5uID0gcGx1cmFsSW5kZXg7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlTWVzc2FnZUNvbnRleHQob3B0aW9ucyA9IHt9KSB7XHJcbiAgICBjb25zdCBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcclxuICAgIGNvbnN0IHBsdXJhbEluZGV4ID0gZ2V0UGx1cmFsSW5kZXgob3B0aW9ucyk7XHJcbiAgICBjb25zdCBwbHVyYWxSdWxlID0gaXNPYmplY3Qob3B0aW9ucy5wbHVyYWxSdWxlcykgJiZcclxuICAgICAgICBpc1N0cmluZyhsb2NhbGUpICYmXHJcbiAgICAgICAgaXNGdW5jdGlvbihvcHRpb25zLnBsdXJhbFJ1bGVzW2xvY2FsZV0pXHJcbiAgICAgICAgPyBvcHRpb25zLnBsdXJhbFJ1bGVzW2xvY2FsZV1cclxuICAgICAgICA6IHBsdXJhbERlZmF1bHQ7XHJcbiAgICBjb25zdCBvcmdQbHVyYWxSdWxlID0gaXNPYmplY3Qob3B0aW9ucy5wbHVyYWxSdWxlcykgJiZcclxuICAgICAgICBpc1N0cmluZyhsb2NhbGUpICYmXHJcbiAgICAgICAgaXNGdW5jdGlvbihvcHRpb25zLnBsdXJhbFJ1bGVzW2xvY2FsZV0pXHJcbiAgICAgICAgPyBwbHVyYWxEZWZhdWx0XHJcbiAgICAgICAgOiB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBwbHVyYWwgPSAobWVzc2FnZXMpID0+IHtcclxuICAgICAgICByZXR1cm4gbWVzc2FnZXNbcGx1cmFsUnVsZShwbHVyYWxJbmRleCwgbWVzc2FnZXMubGVuZ3RoLCBvcmdQbHVyYWxSdWxlKV07XHJcbiAgICB9O1xyXG4gICAgY29uc3QgX2xpc3QgPSBvcHRpb25zLmxpc3QgfHwgW107XHJcbiAgICBjb25zdCBsaXN0ID0gKGluZGV4KSA9PiBfbGlzdFtpbmRleF07XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgY29uc3QgX25hbWVkID0gb3B0aW9ucy5uYW1lZCB8fCB7fTtcclxuICAgIGlzTnVtYmVyKG9wdGlvbnMucGx1cmFsSW5kZXgpICYmIG5vcm1hbGl6ZU5hbWVkKHBsdXJhbEluZGV4LCBfbmFtZWQpO1xyXG4gICAgY29uc3QgbmFtZWQgPSAoa2V5KSA9PiBfbmFtZWRba2V5XTtcclxuICAgIGZ1bmN0aW9uIG1lc3NhZ2Uoa2V5KSB7XHJcbiAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICAgICAgY29uc3QgbXNnID0gaXNGdW5jdGlvbihvcHRpb25zLm1lc3NhZ2VzKVxyXG4gICAgICAgICAgICA/IG9wdGlvbnMubWVzc2FnZXMoa2V5KVxyXG4gICAgICAgICAgICA6IGlzT2JqZWN0KG9wdGlvbnMubWVzc2FnZXMpXHJcbiAgICAgICAgICAgICAgICA/IG9wdGlvbnMubWVzc2FnZXNba2V5XVxyXG4gICAgICAgICAgICAgICAgOiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gIW1zZ1xyXG4gICAgICAgICAgICA/IG9wdGlvbnMucGFyZW50XHJcbiAgICAgICAgICAgICAgICA/IG9wdGlvbnMucGFyZW50Lm1lc3NhZ2Uoa2V5KSAvLyByZXNvbHZlIGZyb20gcGFyZW50IG1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICA6IERFRkFVTFRfTUVTU0FHRVxyXG4gICAgICAgICAgICA6IG1zZztcclxuICAgIH1cclxuICAgIGNvbnN0IF9tb2RpZmllciA9IChuYW1lKSA9PiBvcHRpb25zLm1vZGlmaWVyc1xyXG4gICAgICAgID8gb3B0aW9ucy5tb2RpZmllcnNbbmFtZV1cclxuICAgICAgICA6IERFRkFVTFRfTU9ESUZJRVI7XHJcbiAgICBjb25zdCBub3JtYWxpemUgPSBpc1BsYWluT2JqZWN0KG9wdGlvbnMucHJvY2Vzc29yKSAmJiBpc0Z1bmN0aW9uKG9wdGlvbnMucHJvY2Vzc29yLm5vcm1hbGl6ZSlcclxuICAgICAgICA/IG9wdGlvbnMucHJvY2Vzc29yLm5vcm1hbGl6ZVxyXG4gICAgICAgIDogREVGQVVMVF9OT1JNQUxJWkU7XHJcbiAgICBjb25zdCBpbnRlcnBvbGF0ZSA9IGlzUGxhaW5PYmplY3Qob3B0aW9ucy5wcm9jZXNzb3IpICYmXHJcbiAgICAgICAgaXNGdW5jdGlvbihvcHRpb25zLnByb2Nlc3Nvci5pbnRlcnBvbGF0ZSlcclxuICAgICAgICA/IG9wdGlvbnMucHJvY2Vzc29yLmludGVycG9sYXRlXHJcbiAgICAgICAgOiBERUZBVUxUX0lOVEVSUE9MQVRFO1xyXG4gICAgY29uc3QgdHlwZSA9IGlzUGxhaW5PYmplY3Qob3B0aW9ucy5wcm9jZXNzb3IpICYmIGlzU3RyaW5nKG9wdGlvbnMucHJvY2Vzc29yLnR5cGUpXHJcbiAgICAgICAgPyBvcHRpb25zLnByb2Nlc3Nvci50eXBlXHJcbiAgICAgICAgOiBERUZBVUxUX01FU1NBR0VfREFUQV9UWVBFO1xyXG4gICAgY29uc3QgbGlua2VkID0gKGtleSwgLi4uYXJncykgPT4ge1xyXG4gICAgICAgIGNvbnN0IFthcmcxLCBhcmcyXSA9IGFyZ3M7XHJcbiAgICAgICAgbGV0IHR5cGUgPSAndGV4dCc7XHJcbiAgICAgICAgbGV0IG1vZGlmaWVyID0gJyc7XHJcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGlmIChpc09iamVjdChhcmcxKSkge1xyXG4gICAgICAgICAgICAgICAgbW9kaWZpZXIgPSBhcmcxLm1vZGlmaWVyIHx8IG1vZGlmaWVyO1xyXG4gICAgICAgICAgICAgICAgdHlwZSA9IGFyZzEudHlwZSB8fCB0eXBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzU3RyaW5nKGFyZzEpKSB7XHJcbiAgICAgICAgICAgICAgICBtb2RpZmllciA9IGFyZzEgfHwgbW9kaWZpZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgaWYgKGlzU3RyaW5nKGFyZzEpKSB7XHJcbiAgICAgICAgICAgICAgICBtb2RpZmllciA9IGFyZzEgfHwgbW9kaWZpZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzU3RyaW5nKGFyZzIpKSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlID0gYXJnMiB8fCB0eXBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtc2cgPSBtZXNzYWdlKGtleSkoY3R4KTtcclxuICAgICAgICAvLyBUaGUgbWVzc2FnZSBpbiB2bm9kZSByZXNvbHZlZCB3aXRoIGxpbmtlZCBhcmUgcmV0dXJuZWQgYXMgYW4gYXJyYXkgYnkgcHJvY2Vzc29yLm5vbWFsaXplXHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICd2bm9kZScgJiYgaXNBcnJheShtc2cpICYmIG1vZGlmaWVyKSB7XHJcbiAgICAgICAgICAgIG1zZyA9IG1zZ1swXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1vZGlmaWVyID8gX21vZGlmaWVyKG1vZGlmaWVyKShtc2csIHR5cGUpIDogbXNnO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGN0eCA9IHtcclxuICAgICAgICBbXCJsaXN0XCIgLyogTElTVCAqL106IGxpc3QsXHJcbiAgICAgICAgW1wibmFtZWRcIiAvKiBOQU1FRCAqL106IG5hbWVkLFxyXG4gICAgICAgIFtcInBsdXJhbFwiIC8qIFBMVVJBTCAqL106IHBsdXJhbCxcclxuICAgICAgICBbXCJsaW5rZWRcIiAvKiBMSU5LRUQgKi9dOiBsaW5rZWQsXHJcbiAgICAgICAgW1wibWVzc2FnZVwiIC8qIE1FU1NBR0UgKi9dOiBtZXNzYWdlLFxyXG4gICAgICAgIFtcInR5cGVcIiAvKiBUWVBFICovXTogdHlwZSxcclxuICAgICAgICBbXCJpbnRlcnBvbGF0ZVwiIC8qIElOVEVSUE9MQVRFICovXTogaW50ZXJwb2xhdGUsXHJcbiAgICAgICAgW1wibm9ybWFsaXplXCIgLyogTk9STUFMSVpFICovXTogbm9ybWFsaXplXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGN0eDtcclxufVxuXG5sZXQgZGV2dG9vbHMgPSBudWxsO1xyXG5mdW5jdGlvbiBzZXREZXZUb29sc0hvb2soaG9vaykge1xyXG4gICAgZGV2dG9vbHMgPSBob29rO1xyXG59XHJcbmZ1bmN0aW9uIGdldERldlRvb2xzSG9vaygpIHtcclxuICAgIHJldHVybiBkZXZ0b29scztcclxufVxyXG5mdW5jdGlvbiBpbml0STE4bkRldlRvb2xzKGkxOG4sIHZlcnNpb24sIG1ldGEpIHtcclxuICAgIC8vIFRPRE86IHF1ZXVlIGlmIGRldnRvb2xzIGlzIHVuZGVmaW5lZFxyXG4gICAgZGV2dG9vbHMgJiZcclxuICAgICAgICBkZXZ0b29scy5lbWl0KEludGxpZnlEZXZUb29sc0hvb2tzLkkxOG5Jbml0LCB7XHJcbiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgaTE4bixcclxuICAgICAgICAgICAgdmVyc2lvbixcclxuICAgICAgICAgICAgbWV0YVxyXG4gICAgICAgIH0pO1xyXG59XHJcbmNvbnN0IHRyYW5zbGF0ZURldlRvb2xzID0gLyogI19fUFVSRV9fKi8gY3JlYXRlRGV2VG9vbHNIb29rKEludGxpZnlEZXZUb29sc0hvb2tzLkZ1bmN0aW9uVHJhbnNsYXRlKTtcclxuZnVuY3Rpb24gY3JlYXRlRGV2VG9vbHNIb29rKGhvb2spIHtcclxuICAgIHJldHVybiAocGF5bG9hZHMpID0+IGRldnRvb2xzICYmIGRldnRvb2xzLmVtaXQoaG9vaywgcGF5bG9hZHMpO1xyXG59XG5cbmNvbnN0IENvcmVXYXJuQ29kZXMgPSB7XHJcbiAgICBOT1RfRk9VTkRfS0VZOiAxLFxyXG4gICAgRkFMTEJBQ0tfVE9fVFJBTlNMQVRFOiAyLFxyXG4gICAgQ0FOTk9UX0ZPUk1BVF9OVU1CRVI6IDMsXHJcbiAgICBGQUxMQkFDS19UT19OVU1CRVJfRk9STUFUOiA0LFxyXG4gICAgQ0FOTk9UX0ZPUk1BVF9EQVRFOiA1LFxyXG4gICAgRkFMTEJBQ0tfVE9fREFURV9GT1JNQVQ6IDYsXHJcbiAgICBfX0VYVEVORF9QT0lOVF9fOiA3XHJcbn07XHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuY29uc3Qgd2Fybk1lc3NhZ2VzID0ge1xyXG4gICAgW0NvcmVXYXJuQ29kZXMuTk9UX0ZPVU5EX0tFWV06IGBOb3QgZm91bmQgJ3trZXl9JyBrZXkgaW4gJ3tsb2NhbGV9JyBsb2NhbGUgbWVzc2FnZXMuYCxcclxuICAgIFtDb3JlV2FybkNvZGVzLkZBTExCQUNLX1RPX1RSQU5TTEFURV06IGBGYWxsIGJhY2sgdG8gdHJhbnNsYXRlICd7a2V5fScga2V5IHdpdGggJ3t0YXJnZXR9JyBsb2NhbGUuYCxcclxuICAgIFtDb3JlV2FybkNvZGVzLkNBTk5PVF9GT1JNQVRfTlVNQkVSXTogYENhbm5vdCBmb3JtYXQgYSBudW1iZXIgdmFsdWUgZHVlIHRvIG5vdCBzdXBwb3J0ZWQgSW50bC5OdW1iZXJGb3JtYXQuYCxcclxuICAgIFtDb3JlV2FybkNvZGVzLkZBTExCQUNLX1RPX05VTUJFUl9GT1JNQVRdOiBgRmFsbCBiYWNrIHRvIG51bWJlciBmb3JtYXQgJ3trZXl9JyBrZXkgd2l0aCAne3RhcmdldH0nIGxvY2FsZS5gLFxyXG4gICAgW0NvcmVXYXJuQ29kZXMuQ0FOTk9UX0ZPUk1BVF9EQVRFXTogYENhbm5vdCBmb3JtYXQgYSBkYXRlIHZhbHVlIGR1ZSB0byBub3Qgc3VwcG9ydGVkIEludGwuRGF0ZVRpbWVGb3JtYXQuYCxcclxuICAgIFtDb3JlV2FybkNvZGVzLkZBTExCQUNLX1RPX0RBVEVfRk9STUFUXTogYEZhbGwgYmFjayB0byBkYXRldGltZSBmb3JtYXQgJ3trZXl9JyBrZXkgd2l0aCAne3RhcmdldH0nIGxvY2FsZS5gXHJcbn07XHJcbmZ1bmN0aW9uIGdldFdhcm5NZXNzYWdlKGNvZGUsIC4uLmFyZ3MpIHtcclxuICAgIHJldHVybiBmb3JtYXQod2Fybk1lc3NhZ2VzW2NvZGVdLCAuLi5hcmdzKTtcclxufVxuXG4vKipcclxuICogRmFsbGJhY2sgd2l0aCBzaW1wbGUgaW1wbGVtZW5hdGlvblxyXG4gKlxyXG4gKiBAcmVtYXJrc1xyXG4gKiBBIGZhbGxiYWNrIGxvY2FsZSBmdW5jdGlvbiBpbXBsZW1lbnRlZCB3aXRoIGEgc2ltcGxlIGZhbGxiYWNrIGFsZ29yaXRobS5cclxuICpcclxuICogQmFzaWNhbGx5LCBpdCByZXR1cm5zIHRoZSB2YWx1ZSBhcyBzcGVjaWZpZWQgaW4gdGhlIGBmYWxsYmFja0xvY2FsZWAgcHJvcHMsIGFuZCBpcyBwcm9jZXNzZWQgd2l0aCB0aGUgZmFsbGJhY2sgaW5zaWRlIGludGxpZnkuXHJcbiAqXHJcbiAqIEBwYXJhbSBjdHggLSBBIHtAbGluayBDb3JlQ29udGV4dCB8IGNvbnRleHR9XHJcbiAqIEBwYXJhbSBmYWxsYmFjayAtIEEge0BsaW5rIEZhbGxiYWNrTG9jYWxlIHwgZmFsbGJhY2sgbG9jYWxlfVxyXG4gKiBAcGFyYW0gc3RhcnQgLSBBIHN0YXJ0aW5nIHtAbGluayBMb2NhbGUgfCBsb2NhbGV9XHJcbiAqXHJcbiAqIEByZXR1cm5zIEZhbGxiYWNrIGxvY2FsZXNcclxuICpcclxuICogQFZ1ZUkxOG5HZW5lcmFsXHJcbiAqL1xyXG5mdW5jdGlvbiBmYWxsYmFja1dpdGhTaW1wbGUoY3R4LCBmYWxsYmFjaywgc3RhcnQgLy8gZXNsaW50LWRpc2FibGUtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuKSB7XHJcbiAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgIHJldHVybiBbLi4ubmV3IFNldChbXHJcbiAgICAgICAgICAgIHN0YXJ0LFxyXG4gICAgICAgICAgICAuLi4oaXNBcnJheShmYWxsYmFjaylcclxuICAgICAgICAgICAgICAgID8gZmFsbGJhY2tcclxuICAgICAgICAgICAgICAgIDogaXNPYmplY3QoZmFsbGJhY2spXHJcbiAgICAgICAgICAgICAgICAgICAgPyBPYmplY3Qua2V5cyhmYWxsYmFjaylcclxuICAgICAgICAgICAgICAgICAgICA6IGlzU3RyaW5nKGZhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFtmYWxsYmFja11cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBbc3RhcnRdKVxyXG4gICAgICAgIF0pXTtcclxufVxyXG4vKipcclxuICogRmFsbGJhY2sgd2l0aCBsb2NhbGUgY2hhaW5cclxuICpcclxuICogQHJlbWFya3NcclxuICogQSBmYWxsYmFjayBsb2NhbGUgZnVuY3Rpb24gaW1wbGVtZW50ZWQgd2l0aCBhIGZhbGxiYWNrIGNoYWluIGFsZ29yaXRobS4gSXQncyB1c2VkIGluIFZ1ZUkxOG4gYXMgZGVmYXVsdC5cclxuICpcclxuICogQHBhcmFtIGN0eCAtIEEge0BsaW5rIENvcmVDb250ZXh0IHwgY29udGV4dH1cclxuICogQHBhcmFtIGZhbGxiYWNrIC0gQSB7QGxpbmsgRmFsbGJhY2tMb2NhbGUgfCBmYWxsYmFjayBsb2NhbGV9XHJcbiAqIEBwYXJhbSBzdGFydCAtIEEgc3RhcnRpbmcge0BsaW5rIExvY2FsZSB8IGxvY2FsZX1cclxuICpcclxuICogQHJldHVybnMgRmFsbGJhY2sgbG9jYWxlc1xyXG4gKlxyXG4gKiBAVnVlSTE4blNlZSBbRmFsbGJhY2tpbmddKC4uL2d1aWRlL2Vzc2VudGlhbHMvZmFsbGJhY2spXHJcbiAqXHJcbiAqIEBWdWVJMThuR2VuZXJhbFxyXG4gKi9cclxuZnVuY3Rpb24gZmFsbGJhY2tXaXRoTG9jYWxlQ2hhaW4oY3R4LCBmYWxsYmFjaywgc3RhcnQpIHtcclxuICAgIGNvbnN0IHN0YXJ0TG9jYWxlID0gaXNTdHJpbmcoc3RhcnQpID8gc3RhcnQgOiBERUZBVUxUX0xPQ0FMRTtcclxuICAgIGNvbnN0IGNvbnRleHQgPSBjdHg7XHJcbiAgICBpZiAoIWNvbnRleHQuX19sb2NhbGVDaGFpbkNhY2hlKSB7XHJcbiAgICAgICAgY29udGV4dC5fX2xvY2FsZUNoYWluQ2FjaGUgPSBuZXcgTWFwKCk7XHJcbiAgICB9XHJcbiAgICBsZXQgY2hhaW4gPSBjb250ZXh0Ll9fbG9jYWxlQ2hhaW5DYWNoZS5nZXQoc3RhcnRMb2NhbGUpO1xyXG4gICAgaWYgKCFjaGFpbikge1xyXG4gICAgICAgIGNoYWluID0gW107XHJcbiAgICAgICAgLy8gZmlyc3QgYmxvY2sgZGVmaW5lZCBieSBzdGFydFxyXG4gICAgICAgIGxldCBibG9jayA9IFtzdGFydF07XHJcbiAgICAgICAgLy8gd2hpbGUgYW55IGludGVydmVuaW5nIGJsb2NrIGZvdW5kXHJcbiAgICAgICAgd2hpbGUgKGlzQXJyYXkoYmxvY2spKSB7XHJcbiAgICAgICAgICAgIGJsb2NrID0gYXBwZW5kQmxvY2tUb0NoYWluKGNoYWluLCBibG9jaywgZmFsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgICAgICAvLyBsYXN0IGJsb2NrIGRlZmluZWQgYnkgZGVmYXVsdFxyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRzID0gaXNBcnJheShmYWxsYmFjaykgfHwgIWlzUGxhaW5PYmplY3QoZmFsbGJhY2spXHJcbiAgICAgICAgICAgID8gZmFsbGJhY2tcclxuICAgICAgICAgICAgOiBmYWxsYmFja1snZGVmYXVsdCddXHJcbiAgICAgICAgICAgICAgICA/IGZhbGxiYWNrWydkZWZhdWx0J11cclxuICAgICAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAvLyBjb252ZXJ0IGRlZmF1bHRzIHRvIGFycmF5XHJcbiAgICAgICAgYmxvY2sgPSBpc1N0cmluZyhkZWZhdWx0cykgPyBbZGVmYXVsdHNdIDogZGVmYXVsdHM7XHJcbiAgICAgICAgaWYgKGlzQXJyYXkoYmxvY2spKSB7XHJcbiAgICAgICAgICAgIGFwcGVuZEJsb2NrVG9DaGFpbihjaGFpbiwgYmxvY2ssIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29udGV4dC5fX2xvY2FsZUNoYWluQ2FjaGUuc2V0KHN0YXJ0TG9jYWxlLCBjaGFpbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2hhaW47XHJcbn1cclxuZnVuY3Rpb24gYXBwZW5kQmxvY2tUb0NoYWluKGNoYWluLCBibG9jaywgYmxvY2tzKSB7XHJcbiAgICBsZXQgZm9sbG93ID0gdHJ1ZTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmxvY2subGVuZ3RoICYmIGlzQm9vbGVhbihmb2xsb3cpOyBpKyspIHtcclxuICAgICAgICBjb25zdCBsb2NhbGUgPSBibG9ja1tpXTtcclxuICAgICAgICBpZiAoaXNTdHJpbmcobG9jYWxlKSkge1xyXG4gICAgICAgICAgICBmb2xsb3cgPSBhcHBlbmRMb2NhbGVUb0NoYWluKGNoYWluLCBibG9ja1tpXSwgYmxvY2tzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZm9sbG93O1xyXG59XHJcbmZ1bmN0aW9uIGFwcGVuZExvY2FsZVRvQ2hhaW4oY2hhaW4sIGxvY2FsZSwgYmxvY2tzKSB7XHJcbiAgICBsZXQgZm9sbG93O1xyXG4gICAgY29uc3QgdG9rZW5zID0gbG9jYWxlLnNwbGl0KCctJyk7XHJcbiAgICBkbyB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdG9rZW5zLmpvaW4oJy0nKTtcclxuICAgICAgICBmb2xsb3cgPSBhcHBlbmRJdGVtVG9DaGFpbihjaGFpbiwgdGFyZ2V0LCBibG9ja3MpO1xyXG4gICAgICAgIHRva2Vucy5zcGxpY2UoLTEsIDEpO1xyXG4gICAgfSB3aGlsZSAodG9rZW5zLmxlbmd0aCAmJiBmb2xsb3cgPT09IHRydWUpO1xyXG4gICAgcmV0dXJuIGZvbGxvdztcclxufVxyXG5mdW5jdGlvbiBhcHBlbmRJdGVtVG9DaGFpbihjaGFpbiwgdGFyZ2V0LCBibG9ja3MpIHtcclxuICAgIGxldCBmb2xsb3cgPSBmYWxzZTtcclxuICAgIGlmICghY2hhaW4uaW5jbHVkZXModGFyZ2V0KSkge1xyXG4gICAgICAgIGZvbGxvdyA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRhcmdldCkge1xyXG4gICAgICAgICAgICBmb2xsb3cgPSB0YXJnZXRbdGFyZ2V0Lmxlbmd0aCAtIDFdICE9PSAnISc7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsZSA9IHRhcmdldC5yZXBsYWNlKC8hL2csICcnKTtcclxuICAgICAgICAgICAgY2hhaW4ucHVzaChsb2NhbGUpO1xyXG4gICAgICAgICAgICBpZiAoKGlzQXJyYXkoYmxvY2tzKSB8fCBpc1BsYWluT2JqZWN0KGJsb2NrcykpICYmXHJcbiAgICAgICAgICAgICAgICBibG9ja3NbbG9jYWxlXSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgICAgICAgICAgICAgZm9sbG93ID0gYmxvY2tzW2xvY2FsZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZm9sbG93O1xyXG59XG5cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cclxuLyoqXHJcbiAqIEludGxpZnkgY29yZS1iYXNlIHZlcnNpb25cclxuICogQGludGVybmFsXHJcbiAqL1xyXG5jb25zdCBWRVJTSU9OID0gJzkuMi4yJztcclxuY29uc3QgTk9UX1JFT1NMVkVEID0gLTE7XHJcbmNvbnN0IERFRkFVTFRfTE9DQUxFID0gJ2VuLVVTJztcclxuY29uc3QgTUlTU0lOR19SRVNPTFZFX1ZBTFVFID0gJyc7XHJcbmNvbnN0IGNhcGl0YWxpemUgPSAoc3RyKSA9PiBgJHtzdHIuY2hhckF0KDApLnRvTG9jYWxlVXBwZXJDYXNlKCl9JHtzdHIuc3Vic3RyKDEpfWA7XHJcbmZ1bmN0aW9uIGdldERlZmF1bHRMaW5rZWRNb2RpZmllcnMoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVwcGVyOiAodmFsLCB0eXBlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gICAgICAgICAgICByZXR1cm4gdHlwZSA9PT0gJ3RleHQnICYmIGlzU3RyaW5nKHZhbClcclxuICAgICAgICAgICAgICAgID8gdmFsLnRvVXBwZXJDYXNlKClcclxuICAgICAgICAgICAgICAgIDogdHlwZSA9PT0gJ3Zub2RlJyAmJiBpc09iamVjdCh2YWwpICYmICdfX3ZfaXNWTm9kZScgaW4gdmFsXHJcbiAgICAgICAgICAgICAgICAgICAgPyB2YWwuY2hpbGRyZW4udG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgIDogdmFsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG93ZXI6ICh2YWwsIHR5cGUpID0+IHtcclxuICAgICAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICAgICAgICAgIHJldHVybiB0eXBlID09PSAndGV4dCcgJiYgaXNTdHJpbmcodmFsKVxyXG4gICAgICAgICAgICAgICAgPyB2YWwudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgOiB0eXBlID09PSAndm5vZGUnICYmIGlzT2JqZWN0KHZhbCkgJiYgJ19fdl9pc1ZOb2RlJyBpbiB2YWxcclxuICAgICAgICAgICAgICAgICAgICA/IHZhbC5jaGlsZHJlbi50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgOiB2YWw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYXBpdGFsaXplOiAodmFsLCB0eXBlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gICAgICAgICAgICByZXR1cm4gKHR5cGUgPT09ICd0ZXh0JyAmJiBpc1N0cmluZyh2YWwpXHJcbiAgICAgICAgICAgICAgICA/IGNhcGl0YWxpemUodmFsKVxyXG4gICAgICAgICAgICAgICAgOiB0eXBlID09PSAndm5vZGUnICYmIGlzT2JqZWN0KHZhbCkgJiYgJ19fdl9pc1ZOb2RlJyBpbiB2YWxcclxuICAgICAgICAgICAgICAgICAgICA/IGNhcGl0YWxpemUodmFsLmNoaWxkcmVuKVxyXG4gICAgICAgICAgICAgICAgICAgIDogdmFsKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmxldCBfY29tcGlsZXI7XHJcbmZ1bmN0aW9uIHJlZ2lzdGVyTWVzc2FnZUNvbXBpbGVyKGNvbXBpbGVyKSB7XHJcbiAgICBfY29tcGlsZXIgPSBjb21waWxlcjtcclxufVxyXG5sZXQgX3Jlc29sdmVyO1xyXG4vKipcclxuICogUmVnaXN0ZXIgdGhlIG1lc3NhZ2UgcmVzb2x2ZXJcclxuICpcclxuICogQHBhcmFtIHJlc29sdmVyIC0gQSB7QGxpbmsgTWVzc2FnZVJlc29sdmVyfSBmdW5jdGlvblxyXG4gKlxyXG4gKiBAVnVlSTE4bkdlbmVyYWxcclxuICovXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyTWVzc2FnZVJlc29sdmVyKHJlc29sdmVyKSB7XHJcbiAgICBfcmVzb2x2ZXIgPSByZXNvbHZlcjtcclxufVxyXG5sZXQgX2ZhbGxiYWNrZXI7XHJcbi8qKlxyXG4gKiBSZWdpc3RlciB0aGUgbG9jYWxlIGZhbGxiYWNrZXJcclxuICpcclxuICogQHBhcmFtIGZhbGxiYWNrZXIgLSBBIHtAbGluayBMb2NhbGVGYWxsYmFja2VyfSBmdW5jdGlvblxyXG4gKlxyXG4gKiBAVnVlSTE4bkdlbmVyYWxcclxuICovXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyTG9jYWxlRmFsbGJhY2tlcihmYWxsYmFja2VyKSB7XHJcbiAgICBfZmFsbGJhY2tlciA9IGZhbGxiYWNrZXI7XHJcbn1cclxuLy8gQWRkaXRpb25hbCBNZXRhIGZvciBJbnRsaWZ5IERldlRvb2xzXHJcbmxldCBfYWRkaXRpb25hbE1ldGEgPSBudWxsO1xyXG5jb25zdCBzZXRBZGRpdGlvbmFsTWV0YSA9ICAobWV0YSkgPT4ge1xyXG4gICAgX2FkZGl0aW9uYWxNZXRhID0gbWV0YTtcclxufTtcclxuY29uc3QgZ2V0QWRkaXRpb25hbE1ldGEgPSAgKCkgPT4gX2FkZGl0aW9uYWxNZXRhO1xyXG5sZXQgX2ZhbGxiYWNrQ29udGV4dCA9IG51bGw7XHJcbmNvbnN0IHNldEZhbGxiYWNrQ29udGV4dCA9IChjb250ZXh0KSA9PiB7XHJcbiAgICBfZmFsbGJhY2tDb250ZXh0ID0gY29udGV4dDtcclxufTtcclxuY29uc3QgZ2V0RmFsbGJhY2tDb250ZXh0ID0gKCkgPT4gX2ZhbGxiYWNrQ29udGV4dDtcclxuLy8gSUQgZm9yIENvcmVDb250ZXh0XHJcbmxldCBfY2lkID0gMDtcclxuZnVuY3Rpb24gY3JlYXRlQ29yZUNvbnRleHQob3B0aW9ucyA9IHt9KSB7XHJcbiAgICAvLyBzZXR1cCBvcHRpb25zXHJcbiAgICBjb25zdCB2ZXJzaW9uID0gaXNTdHJpbmcob3B0aW9ucy52ZXJzaW9uKSA/IG9wdGlvbnMudmVyc2lvbiA6IFZFUlNJT047XHJcbiAgICBjb25zdCBsb2NhbGUgPSBpc1N0cmluZyhvcHRpb25zLmxvY2FsZSkgPyBvcHRpb25zLmxvY2FsZSA6IERFRkFVTFRfTE9DQUxFO1xyXG4gICAgY29uc3QgZmFsbGJhY2tMb2NhbGUgPSBpc0FycmF5KG9wdGlvbnMuZmFsbGJhY2tMb2NhbGUpIHx8XHJcbiAgICAgICAgaXNQbGFpbk9iamVjdChvcHRpb25zLmZhbGxiYWNrTG9jYWxlKSB8fFxyXG4gICAgICAgIGlzU3RyaW5nKG9wdGlvbnMuZmFsbGJhY2tMb2NhbGUpIHx8XHJcbiAgICAgICAgb3B0aW9ucy5mYWxsYmFja0xvY2FsZSA9PT0gZmFsc2VcclxuICAgICAgICA/IG9wdGlvbnMuZmFsbGJhY2tMb2NhbGVcclxuICAgICAgICA6IGxvY2FsZTtcclxuICAgIGNvbnN0IG1lc3NhZ2VzID0gaXNQbGFpbk9iamVjdChvcHRpb25zLm1lc3NhZ2VzKVxyXG4gICAgICAgID8gb3B0aW9ucy5tZXNzYWdlc1xyXG4gICAgICAgIDogeyBbbG9jYWxlXToge30gfTtcclxuICAgIGNvbnN0IGRhdGV0aW1lRm9ybWF0cyA9IGlzUGxhaW5PYmplY3Qob3B0aW9ucy5kYXRldGltZUZvcm1hdHMpXHJcbiAgICAgICAgICAgID8gb3B0aW9ucy5kYXRldGltZUZvcm1hdHNcclxuICAgICAgICAgICAgOiB7IFtsb2NhbGVdOiB7fSB9XHJcbiAgICAgICAgO1xyXG4gICAgY29uc3QgbnVtYmVyRm9ybWF0cyA9IGlzUGxhaW5PYmplY3Qob3B0aW9ucy5udW1iZXJGb3JtYXRzKVxyXG4gICAgICAgICAgICA/IG9wdGlvbnMubnVtYmVyRm9ybWF0c1xyXG4gICAgICAgICAgICA6IHsgW2xvY2FsZV06IHt9IH1cclxuICAgICAgICA7XHJcbiAgICBjb25zdCBtb2RpZmllcnMgPSBhc3NpZ24oe30sIG9wdGlvbnMubW9kaWZpZXJzIHx8IHt9LCBnZXREZWZhdWx0TGlua2VkTW9kaWZpZXJzKCkpO1xyXG4gICAgY29uc3QgcGx1cmFsUnVsZXMgPSBvcHRpb25zLnBsdXJhbFJ1bGVzIHx8IHt9O1xyXG4gICAgY29uc3QgbWlzc2luZyA9IGlzRnVuY3Rpb24ob3B0aW9ucy5taXNzaW5nKSA/IG9wdGlvbnMubWlzc2luZyA6IG51bGw7XHJcbiAgICBjb25zdCBtaXNzaW5nV2FybiA9IGlzQm9vbGVhbihvcHRpb25zLm1pc3NpbmdXYXJuKSB8fCBpc1JlZ0V4cChvcHRpb25zLm1pc3NpbmdXYXJuKVxyXG4gICAgICAgID8gb3B0aW9ucy5taXNzaW5nV2FyblxyXG4gICAgICAgIDogdHJ1ZTtcclxuICAgIGNvbnN0IGZhbGxiYWNrV2FybiA9IGlzQm9vbGVhbihvcHRpb25zLmZhbGxiYWNrV2FybikgfHwgaXNSZWdFeHAob3B0aW9ucy5mYWxsYmFja1dhcm4pXHJcbiAgICAgICAgPyBvcHRpb25zLmZhbGxiYWNrV2FyblxyXG4gICAgICAgIDogdHJ1ZTtcclxuICAgIGNvbnN0IGZhbGxiYWNrRm9ybWF0ID0gISFvcHRpb25zLmZhbGxiYWNrRm9ybWF0O1xyXG4gICAgY29uc3QgdW5yZXNvbHZpbmcgPSAhIW9wdGlvbnMudW5yZXNvbHZpbmc7XHJcbiAgICBjb25zdCBwb3N0VHJhbnNsYXRpb24gPSBpc0Z1bmN0aW9uKG9wdGlvbnMucG9zdFRyYW5zbGF0aW9uKVxyXG4gICAgICAgID8gb3B0aW9ucy5wb3N0VHJhbnNsYXRpb25cclxuICAgICAgICA6IG51bGw7XHJcbiAgICBjb25zdCBwcm9jZXNzb3IgPSBpc1BsYWluT2JqZWN0KG9wdGlvbnMucHJvY2Vzc29yKSA/IG9wdGlvbnMucHJvY2Vzc29yIDogbnVsbDtcclxuICAgIGNvbnN0IHdhcm5IdG1sTWVzc2FnZSA9IGlzQm9vbGVhbihvcHRpb25zLndhcm5IdG1sTWVzc2FnZSlcclxuICAgICAgICA/IG9wdGlvbnMud2Fybkh0bWxNZXNzYWdlXHJcbiAgICAgICAgOiB0cnVlO1xyXG4gICAgY29uc3QgZXNjYXBlUGFyYW1ldGVyID0gISFvcHRpb25zLmVzY2FwZVBhcmFtZXRlcjtcclxuICAgIGNvbnN0IG1lc3NhZ2VDb21waWxlciA9IGlzRnVuY3Rpb24ob3B0aW9ucy5tZXNzYWdlQ29tcGlsZXIpXHJcbiAgICAgICAgPyBvcHRpb25zLm1lc3NhZ2VDb21waWxlclxyXG4gICAgICAgIDogX2NvbXBpbGVyO1xyXG4gICAgY29uc3QgbWVzc2FnZVJlc29sdmVyID0gaXNGdW5jdGlvbihvcHRpb25zLm1lc3NhZ2VSZXNvbHZlcilcclxuICAgICAgICA/IG9wdGlvbnMubWVzc2FnZVJlc29sdmVyXHJcbiAgICAgICAgOiBfcmVzb2x2ZXIgfHwgcmVzb2x2ZVdpdGhLZXlWYWx1ZTtcclxuICAgIGNvbnN0IGxvY2FsZUZhbGxiYWNrZXIgPSBpc0Z1bmN0aW9uKG9wdGlvbnMubG9jYWxlRmFsbGJhY2tlcilcclxuICAgICAgICA/IG9wdGlvbnMubG9jYWxlRmFsbGJhY2tlclxyXG4gICAgICAgIDogX2ZhbGxiYWNrZXIgfHwgZmFsbGJhY2tXaXRoU2ltcGxlO1xyXG4gICAgY29uc3QgZmFsbGJhY2tDb250ZXh0ID0gaXNPYmplY3Qob3B0aW9ucy5mYWxsYmFja0NvbnRleHQpXHJcbiAgICAgICAgPyBvcHRpb25zLmZhbGxiYWNrQ29udGV4dFxyXG4gICAgICAgIDogdW5kZWZpbmVkO1xyXG4gICAgY29uc3Qgb25XYXJuID0gaXNGdW5jdGlvbihvcHRpb25zLm9uV2FybikgPyBvcHRpb25zLm9uV2FybiA6IHdhcm47XHJcbiAgICAvLyBzZXR1cCBpbnRlcm5hbCBvcHRpb25zXHJcbiAgICBjb25zdCBpbnRlcm5hbE9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgY29uc3QgX19kYXRldGltZUZvcm1hdHRlcnMgPSBpc09iamVjdChpbnRlcm5hbE9wdGlvbnMuX19kYXRldGltZUZvcm1hdHRlcnMpXHJcbiAgICAgICAgICAgID8gaW50ZXJuYWxPcHRpb25zLl9fZGF0ZXRpbWVGb3JtYXR0ZXJzXHJcbiAgICAgICAgICAgIDogbmV3IE1hcCgpXHJcbiAgICAgICAgO1xyXG4gICAgY29uc3QgX19udW1iZXJGb3JtYXR0ZXJzID0gaXNPYmplY3QoaW50ZXJuYWxPcHRpb25zLl9fbnVtYmVyRm9ybWF0dGVycylcclxuICAgICAgICAgICAgPyBpbnRlcm5hbE9wdGlvbnMuX19udW1iZXJGb3JtYXR0ZXJzXHJcbiAgICAgICAgICAgIDogbmV3IE1hcCgpXHJcbiAgICAgICAgO1xyXG4gICAgY29uc3QgX19tZXRhID0gaXNPYmplY3QoaW50ZXJuYWxPcHRpb25zLl9fbWV0YSkgPyBpbnRlcm5hbE9wdGlvbnMuX19tZXRhIDoge307XHJcbiAgICBfY2lkKys7XHJcbiAgICBjb25zdCBjb250ZXh0ID0ge1xyXG4gICAgICAgIHZlcnNpb24sXHJcbiAgICAgICAgY2lkOiBfY2lkLFxyXG4gICAgICAgIGxvY2FsZSxcclxuICAgICAgICBmYWxsYmFja0xvY2FsZSxcclxuICAgICAgICBtZXNzYWdlcyxcclxuICAgICAgICBtb2RpZmllcnMsXHJcbiAgICAgICAgcGx1cmFsUnVsZXMsXHJcbiAgICAgICAgbWlzc2luZyxcclxuICAgICAgICBtaXNzaW5nV2FybixcclxuICAgICAgICBmYWxsYmFja1dhcm4sXHJcbiAgICAgICAgZmFsbGJhY2tGb3JtYXQsXHJcbiAgICAgICAgdW5yZXNvbHZpbmcsXHJcbiAgICAgICAgcG9zdFRyYW5zbGF0aW9uLFxyXG4gICAgICAgIHByb2Nlc3NvcixcclxuICAgICAgICB3YXJuSHRtbE1lc3NhZ2UsXHJcbiAgICAgICAgZXNjYXBlUGFyYW1ldGVyLFxyXG4gICAgICAgIG1lc3NhZ2VDb21waWxlcixcclxuICAgICAgICBtZXNzYWdlUmVzb2x2ZXIsXHJcbiAgICAgICAgbG9jYWxlRmFsbGJhY2tlcixcclxuICAgICAgICBmYWxsYmFja0NvbnRleHQsXHJcbiAgICAgICAgb25XYXJuLFxyXG4gICAgICAgIF9fbWV0YVxyXG4gICAgfTtcclxuICAgIHtcclxuICAgICAgICBjb250ZXh0LmRhdGV0aW1lRm9ybWF0cyA9IGRhdGV0aW1lRm9ybWF0cztcclxuICAgICAgICBjb250ZXh0Lm51bWJlckZvcm1hdHMgPSBudW1iZXJGb3JtYXRzO1xyXG4gICAgICAgIGNvbnRleHQuX19kYXRldGltZUZvcm1hdHRlcnMgPSBfX2RhdGV0aW1lRm9ybWF0dGVycztcclxuICAgICAgICBjb250ZXh0Ll9fbnVtYmVyRm9ybWF0dGVycyA9IF9fbnVtYmVyRm9ybWF0dGVycztcclxuICAgIH1cclxuICAgIC8vIGZvciB2dWUtZGV2dG9vbHMgdGltZWxpbmUgZXZlbnRcclxuICAgIGlmICgocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykpIHtcclxuICAgICAgICBjb250ZXh0Ll9fdl9lbWl0dGVyID1cclxuICAgICAgICAgICAgaW50ZXJuYWxPcHRpb25zLl9fdl9lbWl0dGVyICE9IG51bGxcclxuICAgICAgICAgICAgICAgID8gaW50ZXJuYWxPcHRpb25zLl9fdl9lbWl0dGVyXHJcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8vIE5PVEU6IGV4cGVyaW1lbnRhbCAhIVxyXG4gICAgaWYgKChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB8fCBfX0lOVExJRllfUFJPRF9ERVZUT09MU19fKSB7XHJcbiAgICAgICAgaW5pdEkxOG5EZXZUb29scyhjb250ZXh0LCB2ZXJzaW9uLCBfX21ldGEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbnRleHQ7XHJcbn1cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5mdW5jdGlvbiBpc1RyYW5zbGF0ZUZhbGxiYWNrV2FybihmYWxsYmFjaywga2V5KSB7XHJcbiAgICByZXR1cm4gZmFsbGJhY2sgaW5zdGFuY2VvZiBSZWdFeHAgPyBmYWxsYmFjay50ZXN0KGtleSkgOiBmYWxsYmFjaztcclxufVxyXG4vKiogQGludGVybmFsICovXHJcbmZ1bmN0aW9uIGlzVHJhbnNsYXRlTWlzc2luZ1dhcm4obWlzc2luZywga2V5KSB7XHJcbiAgICByZXR1cm4gbWlzc2luZyBpbnN0YW5jZW9mIFJlZ0V4cCA/IG1pc3NpbmcudGVzdChrZXkpIDogbWlzc2luZztcclxufVxyXG4vKiogQGludGVybmFsICovXHJcbmZ1bmN0aW9uIGhhbmRsZU1pc3NpbmcoY29udGV4dCwga2V5LCBsb2NhbGUsIG1pc3NpbmdXYXJuLCB0eXBlKSB7XHJcbiAgICBjb25zdCB7IG1pc3NpbmcsIG9uV2FybiB9ID0gY29udGV4dDtcclxuICAgIC8vIGZvciB2dWUtZGV2dG9vbHMgdGltZWxpbmUgZXZlbnRcclxuICAgIGlmICgocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykpIHtcclxuICAgICAgICBjb25zdCBlbWl0dGVyID0gY29udGV4dC5fX3ZfZW1pdHRlcjtcclxuICAgICAgICBpZiAoZW1pdHRlcikge1xyXG4gICAgICAgICAgICBlbWl0dGVyLmVtaXQoXCJtaXNzaW5nXCIgLyogTUlTU0lORyAqLywge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxlLFxyXG4gICAgICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgICAgIGdyb3VwSWQ6IGAke3R5cGV9OiR7a2V5fWBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKG1pc3NpbmcgIT09IG51bGwpIHtcclxuICAgICAgICBjb25zdCByZXQgPSBtaXNzaW5nKGNvbnRleHQsIGxvY2FsZSwga2V5LCB0eXBlKTtcclxuICAgICAgICByZXR1cm4gaXNTdHJpbmcocmV0KSA/IHJldCA6IGtleTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmICgocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgJiYgaXNUcmFuc2xhdGVNaXNzaW5nV2FybihtaXNzaW5nV2Fybiwga2V5KSkge1xyXG4gICAgICAgICAgICBvbldhcm4oZ2V0V2Fybk1lc3NhZ2UoQ29yZVdhcm5Db2Rlcy5OT1RfRk9VTkRfS0VZLCB7IGtleSwgbG9jYWxlIH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGtleTtcclxuICAgIH1cclxufVxyXG4vKiogQGludGVybmFsICovXHJcbmZ1bmN0aW9uIHVwZGF0ZUZhbGxiYWNrTG9jYWxlKGN0eCwgbG9jYWxlLCBmYWxsYmFjaykge1xyXG4gICAgY29uc3QgY29udGV4dCA9IGN0eDtcclxuICAgIGNvbnRleHQuX19sb2NhbGVDaGFpbkNhY2hlID0gbmV3IE1hcCgpO1xyXG4gICAgY3R4LmxvY2FsZUZhbGxiYWNrZXIoY3R4LCBmYWxsYmFjaywgbG9jYWxlKTtcclxufVxyXG4vKiBlc2xpbnQtZW5hYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cblxuY29uc3QgUkVfSFRNTF9UQUcgPSAvPFxcLz9bXFx3XFxzPVwiLy4nOjsjLVxcL10rPi87XHJcbmNvbnN0IFdBUk5fTUVTU0FHRSA9IGBEZXRlY3RlZCBIVE1MIGluICd7c291cmNlfScgbWVzc2FnZS4gUmVjb21tZW5kIG5vdCB1c2luZyBIVE1MIG1lc3NhZ2VzIHRvIGF2b2lkIFhTUy5gO1xyXG5mdW5jdGlvbiBjaGVja0h0bWxNZXNzYWdlKHNvdXJjZSwgb3B0aW9ucykge1xyXG4gICAgY29uc3Qgd2Fybkh0bWxNZXNzYWdlID0gaXNCb29sZWFuKG9wdGlvbnMud2Fybkh0bWxNZXNzYWdlKVxyXG4gICAgICAgID8gb3B0aW9ucy53YXJuSHRtbE1lc3NhZ2VcclxuICAgICAgICA6IHRydWU7XHJcbiAgICBpZiAod2Fybkh0bWxNZXNzYWdlICYmIFJFX0hUTUxfVEFHLnRlc3Qoc291cmNlKSkge1xyXG4gICAgICAgIHdhcm4oZm9ybWF0KFdBUk5fTUVTU0FHRSwgeyBzb3VyY2UgfSkpO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IGRlZmF1bHRPbkNhY2hlS2V5ID0gKHNvdXJjZSkgPT4gc291cmNlO1xyXG5sZXQgY29tcGlsZUNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuZnVuY3Rpb24gY2xlYXJDb21waWxlQ2FjaGUoKSB7XHJcbiAgICBjb21waWxlQ2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG59XHJcbmZ1bmN0aW9uIGNvbXBpbGVUb0Z1bmN0aW9uKHNvdXJjZSwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICB7XHJcbiAgICAgICAgLy8gY2hlY2sgSFRNTCBtZXNzYWdlXHJcbiAgICAgICAgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpICYmIGNoZWNrSHRtbE1lc3NhZ2Uoc291cmNlLCBvcHRpb25zKTtcclxuICAgICAgICAvLyBjaGVjayBjYWNoZXNcclxuICAgICAgICBjb25zdCBvbkNhY2hlS2V5ID0gb3B0aW9ucy5vbkNhY2hlS2V5IHx8IGRlZmF1bHRPbkNhY2hlS2V5O1xyXG4gICAgICAgIGNvbnN0IGtleSA9IG9uQ2FjaGVLZXkoc291cmNlKTtcclxuICAgICAgICBjb25zdCBjYWNoZWQgPSBjb21waWxlQ2FjaGVba2V5XTtcclxuICAgICAgICBpZiAoY2FjaGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbXBpbGUgZXJyb3IgZGV0ZWN0aW5nXHJcbiAgICAgICAgbGV0IG9jY3VycmVkID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3Qgb25FcnJvciA9IG9wdGlvbnMub25FcnJvciB8fCBkZWZhdWx0T25FcnJvcjtcclxuICAgICAgICBvcHRpb25zLm9uRXJyb3IgPSAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIG9jY3VycmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgb25FcnJvcihlcnIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gY29tcGlsZVxyXG4gICAgICAgIGNvbnN0IHsgY29kZSB9ID0gYmFzZUNvbXBpbGUoc291cmNlLCBvcHRpb25zKTtcclxuICAgICAgICAvLyBldmFsdWF0ZSBmdW5jdGlvblxyXG4gICAgICAgIGNvbnN0IG1zZyA9IG5ldyBGdW5jdGlvbihgcmV0dXJuICR7Y29kZX1gKSgpO1xyXG4gICAgICAgIC8vIGlmIG9jY3VycmVkIGNvbXBpbGUgZXJyb3IsIGRvbid0IGNhY2hlXHJcbiAgICAgICAgcmV0dXJuICFvY2N1cnJlZCA/IChjb21waWxlQ2FjaGVba2V5XSA9IG1zZykgOiBtc2c7XHJcbiAgICB9XHJcbn1cblxubGV0IGNvZGUgPSBDb21waWxlRXJyb3JDb2Rlcy5fX0VYVEVORF9QT0lOVF9fO1xyXG5jb25zdCBpbmMgPSAoKSA9PiArK2NvZGU7XHJcbmNvbnN0IENvcmVFcnJvckNvZGVzID0ge1xyXG4gICAgSU5WQUxJRF9BUkdVTUVOVDogY29kZSxcclxuICAgIElOVkFMSURfREFURV9BUkdVTUVOVDogaW5jKCksXHJcbiAgICBJTlZBTElEX0lTT19EQVRFX0FSR1VNRU5UOiBpbmMoKSxcclxuICAgIF9fRVhURU5EX1BPSU5UX186IGluYygpIC8vIDE4XHJcbn07XHJcbmZ1bmN0aW9uIGNyZWF0ZUNvcmVFcnJvcihjb2RlKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlQ29tcGlsZUVycm9yKGNvZGUsIG51bGwsIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSA/IHsgbWVzc2FnZXM6IGVycm9yTWVzc2FnZXMgfSA6IHVuZGVmaW5lZCk7XHJcbn1cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5jb25zdCBlcnJvck1lc3NhZ2VzID0ge1xyXG4gICAgW0NvcmVFcnJvckNvZGVzLklOVkFMSURfQVJHVU1FTlRdOiAnSW52YWxpZCBhcmd1bWVudHMnLFxyXG4gICAgW0NvcmVFcnJvckNvZGVzLklOVkFMSURfREFURV9BUkdVTUVOVF06ICdUaGUgZGF0ZSBwcm92aWRlZCBpcyBhbiBpbnZhbGlkIERhdGUgb2JqZWN0LicgK1xyXG4gICAgICAgICdNYWtlIHN1cmUgeW91ciBEYXRlIHJlcHJlc2VudHMgYSB2YWxpZCBkYXRlLicsXHJcbiAgICBbQ29yZUVycm9yQ29kZXMuSU5WQUxJRF9JU09fREFURV9BUkdVTUVOVF06ICdUaGUgYXJndW1lbnQgcHJvdmlkZWQgaXMgbm90IGEgdmFsaWQgSVNPIGRhdGUgc3RyaW5nJ1xyXG59O1xuXG5jb25zdCBOT09QX01FU1NBR0VfRlVOQ1RJT04gPSAoKSA9PiAnJztcclxuY29uc3QgaXNNZXNzYWdlRnVuY3Rpb24gPSAodmFsKSA9PiBpc0Z1bmN0aW9uKHZhbCk7XHJcbi8vIGltcGxlbWVudGF0aW9uIG9mIGB0cmFuc2xhdGVgIGZ1bmN0aW9uXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZShjb250ZXh0LCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCB7IGZhbGxiYWNrRm9ybWF0LCBwb3N0VHJhbnNsYXRpb24sIHVucmVzb2x2aW5nLCBtZXNzYWdlQ29tcGlsZXIsIGZhbGxiYWNrTG9jYWxlLCBtZXNzYWdlcyB9ID0gY29udGV4dDtcclxuICAgIGNvbnN0IFtrZXksIG9wdGlvbnNdID0gcGFyc2VUcmFuc2xhdGVBcmdzKC4uLmFyZ3MpO1xyXG4gICAgY29uc3QgbWlzc2luZ1dhcm4gPSBpc0Jvb2xlYW4ob3B0aW9ucy5taXNzaW5nV2FybilcclxuICAgICAgICA/IG9wdGlvbnMubWlzc2luZ1dhcm5cclxuICAgICAgICA6IGNvbnRleHQubWlzc2luZ1dhcm47XHJcbiAgICBjb25zdCBmYWxsYmFja1dhcm4gPSBpc0Jvb2xlYW4ob3B0aW9ucy5mYWxsYmFja1dhcm4pXHJcbiAgICAgICAgPyBvcHRpb25zLmZhbGxiYWNrV2FyblxyXG4gICAgICAgIDogY29udGV4dC5mYWxsYmFja1dhcm47XHJcbiAgICBjb25zdCBlc2NhcGVQYXJhbWV0ZXIgPSBpc0Jvb2xlYW4ob3B0aW9ucy5lc2NhcGVQYXJhbWV0ZXIpXHJcbiAgICAgICAgPyBvcHRpb25zLmVzY2FwZVBhcmFtZXRlclxyXG4gICAgICAgIDogY29udGV4dC5lc2NhcGVQYXJhbWV0ZXI7XHJcbiAgICBjb25zdCByZXNvbHZlZE1lc3NhZ2UgPSAhIW9wdGlvbnMucmVzb2x2ZWRNZXNzYWdlO1xyXG4gICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICBjb25zdCBkZWZhdWx0TXNnT3JLZXkgPSBpc1N0cmluZyhvcHRpb25zLmRlZmF1bHQpIHx8IGlzQm9vbGVhbihvcHRpb25zLmRlZmF1bHQpIC8vIGRlZmF1bHQgYnkgZnVuY3Rpb24gb3B0aW9uXHJcbiAgICAgICAgPyAhaXNCb29sZWFuKG9wdGlvbnMuZGVmYXVsdClcclxuICAgICAgICAgICAgPyBvcHRpb25zLmRlZmF1bHRcclxuICAgICAgICAgICAgOiAoIW1lc3NhZ2VDb21waWxlciA/ICgpID0+IGtleSA6IGtleSlcclxuICAgICAgICA6IGZhbGxiYWNrRm9ybWF0IC8vIGRlZmF1bHQgYnkgYGZhbGxiYWNrRm9ybWF0YCBvcHRpb25cclxuICAgICAgICAgICAgPyAoIW1lc3NhZ2VDb21waWxlciA/ICgpID0+IGtleSA6IGtleSlcclxuICAgICAgICAgICAgOiAnJztcclxuICAgIGNvbnN0IGVuYWJsZURlZmF1bHRNc2cgPSBmYWxsYmFja0Zvcm1hdCB8fCBkZWZhdWx0TXNnT3JLZXkgIT09ICcnO1xyXG4gICAgY29uc3QgbG9jYWxlID0gaXNTdHJpbmcob3B0aW9ucy5sb2NhbGUpID8gb3B0aW9ucy5sb2NhbGUgOiBjb250ZXh0LmxvY2FsZTtcclxuICAgIC8vIGVzY2FwZSBwYXJhbXNcclxuICAgIGVzY2FwZVBhcmFtZXRlciAmJiBlc2NhcGVQYXJhbXMob3B0aW9ucyk7XHJcbiAgICAvLyByZXNvbHZlIG1lc3NhZ2UgZm9ybWF0XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XHJcbiAgICBsZXQgW2Zvcm1hdFNjb3BlLCB0YXJnZXRMb2NhbGUsIG1lc3NhZ2VdID0gIXJlc29sdmVkTWVzc2FnZVxyXG4gICAgICAgID8gcmVzb2x2ZU1lc3NhZ2VGb3JtYXQoY29udGV4dCwga2V5LCBsb2NhbGUsIGZhbGxiYWNrTG9jYWxlLCBmYWxsYmFja1dhcm4sIG1pc3NpbmdXYXJuKVxyXG4gICAgICAgIDogW1xyXG4gICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgIGxvY2FsZSxcclxuICAgICAgICAgICAgbWVzc2FnZXNbbG9jYWxlXSB8fCB7fVxyXG4gICAgICAgIF07XHJcbiAgICAvLyBOT1RFOlxyXG4gICAgLy8gIEZpeCB0byB3b3JrIGFyb3VuZCBgc3NyVHJhbnNmcm9tYCBidWcgaW4gVml0ZS5cclxuICAgIC8vICBodHRwczovL2dpdGh1Yi5jb20vdml0ZWpzL3ZpdGUvaXNzdWVzLzQzMDZcclxuICAgIC8vICBUbyBnZXQgYXJvdW5kIHRoaXMsIHVzZSB0ZW1wb3JhcnkgdmFyaWFibGVzLlxyXG4gICAgLy8gIGh0dHBzOi8vZ2l0aHViLmNvbS9udXh0L2ZyYW1ld29yay9pc3N1ZXMvMTQ2MSNpc3N1ZWNvbW1lbnQtOTU0NjA2MjQzXHJcbiAgICBsZXQgZm9ybWF0ID0gZm9ybWF0U2NvcGU7XHJcbiAgICAvLyBpZiB5b3UgdXNlIGRlZmF1bHQgbWVzc2FnZSwgc2V0IGl0IGFzIG1lc3NhZ2UgZm9ybWF0IVxyXG4gICAgbGV0IGNhY2hlQmFzZUtleSA9IGtleTtcclxuICAgIGlmICghcmVzb2x2ZWRNZXNzYWdlICYmXHJcbiAgICAgICAgIShpc1N0cmluZyhmb3JtYXQpIHx8IGlzTWVzc2FnZUZ1bmN0aW9uKGZvcm1hdCkpKSB7XHJcbiAgICAgICAgaWYgKGVuYWJsZURlZmF1bHRNc2cpIHtcclxuICAgICAgICAgICAgZm9ybWF0ID0gZGVmYXVsdE1zZ09yS2V5O1xyXG4gICAgICAgICAgICBjYWNoZUJhc2VLZXkgPSBmb3JtYXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY2hlY2tpbmcgbWVzc2FnZSBmb3JtYXQgYW5kIHRhcmdldCBsb2NhbGVcclxuICAgIGlmICghcmVzb2x2ZWRNZXNzYWdlICYmXHJcbiAgICAgICAgKCEoaXNTdHJpbmcoZm9ybWF0KSB8fCBpc01lc3NhZ2VGdW5jdGlvbihmb3JtYXQpKSB8fFxyXG4gICAgICAgICAgICAhaXNTdHJpbmcodGFyZ2V0TG9jYWxlKSkpIHtcclxuICAgICAgICByZXR1cm4gdW5yZXNvbHZpbmcgPyBOT1RfUkVPU0xWRUQgOiBrZXk7XHJcbiAgICB9XHJcbiAgICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpICYmIGlzU3RyaW5nKGZvcm1hdCkgJiYgY29udGV4dC5tZXNzYWdlQ29tcGlsZXIgPT0gbnVsbCkge1xyXG4gICAgICAgIHdhcm4oYFRoZSBtZXNzYWdlIGZvcm1hdCBjb21waWxhdGlvbiBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnVpbGQuIGAgK1xyXG4gICAgICAgICAgICBgQmVjYXVzZSBtZXNzYWdlIGNvbXBpbGVyIGlzbid0IGluY2x1ZGVkLiBgICtcclxuICAgICAgICAgICAgYFlvdSBuZWVkIHRvIHByZS1jb21waWxhdGlvbiBhbGwgbWVzc2FnZSBmb3JtYXQuIGAgK1xyXG4gICAgICAgICAgICBgU28gdHJhbnNsYXRlIGZ1bmN0aW9uIHJldHVybiAnJHtrZXl9Jy5gKTtcclxuICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgfVxyXG4gICAgLy8gc2V0dXAgY29tcGlsZSBlcnJvciBkZXRlY3RpbmdcclxuICAgIGxldCBvY2N1cnJlZCA9IGZhbHNlO1xyXG4gICAgY29uc3QgZXJyb3JEZXRlY3RvciA9ICgpID0+IHtcclxuICAgICAgICBvY2N1cnJlZCA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgLy8gY29tcGlsZSBtZXNzYWdlIGZvcm1hdFxyXG4gICAgY29uc3QgbXNnID0gIWlzTWVzc2FnZUZ1bmN0aW9uKGZvcm1hdClcclxuICAgICAgICA/IGNvbXBpbGVNZXNzYWdlRm9ybWF0KGNvbnRleHQsIGtleSwgdGFyZ2V0TG9jYWxlLCBmb3JtYXQsIGNhY2hlQmFzZUtleSwgZXJyb3JEZXRlY3RvcilcclxuICAgICAgICA6IGZvcm1hdDtcclxuICAgIC8vIGlmIG9jY3VycmVkIGNvbXBpbGUgZXJyb3IsIHJldHVybiB0aGUgbWVzc2FnZSBmb3JtYXRcclxuICAgIGlmIChvY2N1cnJlZCkge1xyXG4gICAgICAgIHJldHVybiBmb3JtYXQ7XHJcbiAgICB9XHJcbiAgICAvLyBldmFsdWF0ZSBtZXNzYWdlIHdpdGggY29udGV4dFxyXG4gICAgY29uc3QgY3R4T3B0aW9ucyA9IGdldE1lc3NhZ2VDb250ZXh0T3B0aW9ucyhjb250ZXh0LCB0YXJnZXRMb2NhbGUsIG1lc3NhZ2UsIG9wdGlvbnMpO1xyXG4gICAgY29uc3QgbXNnQ29udGV4dCA9IGNyZWF0ZU1lc3NhZ2VDb250ZXh0KGN0eE9wdGlvbnMpO1xyXG4gICAgY29uc3QgbWVzc2FnZWQgPSBldmFsdWF0ZU1lc3NhZ2UoY29udGV4dCwgbXNnLCBtc2dDb250ZXh0KTtcclxuICAgIC8vIGlmIHVzZSBwb3N0IHRyYW5zbGF0aW9uIG9wdGlvbiwgcHJvY2VlZCBpdCB3aXRoIGhhbmRsZXJcclxuICAgIGNvbnN0IHJldCA9IHBvc3RUcmFuc2xhdGlvblxyXG4gICAgICAgID8gcG9zdFRyYW5zbGF0aW9uKG1lc3NhZ2VkLCBrZXkpXHJcbiAgICAgICAgOiBtZXNzYWdlZDtcclxuICAgIC8vIE5PVEU6IGV4cGVyaW1lbnRhbCAhIVxyXG4gICAgaWYgKChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB8fCBfX0lOVExJRllfUFJPRF9ERVZUT09MU19fKSB7XHJcbiAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICAgICAgY29uc3QgcGF5bG9hZHMgPSB7XHJcbiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAga2V5OiBpc1N0cmluZyhrZXkpXHJcbiAgICAgICAgICAgICAgICA/IGtleVxyXG4gICAgICAgICAgICAgICAgOiBpc01lc3NhZ2VGdW5jdGlvbihmb3JtYXQpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBmb3JtYXQua2V5XHJcbiAgICAgICAgICAgICAgICAgICAgOiAnJyxcclxuICAgICAgICAgICAgbG9jYWxlOiB0YXJnZXRMb2NhbGUgfHwgKGlzTWVzc2FnZUZ1bmN0aW9uKGZvcm1hdClcclxuICAgICAgICAgICAgICAgID8gZm9ybWF0LmxvY2FsZVxyXG4gICAgICAgICAgICAgICAgOiAnJyksXHJcbiAgICAgICAgICAgIGZvcm1hdDogaXNTdHJpbmcoZm9ybWF0KVxyXG4gICAgICAgICAgICAgICAgPyBmb3JtYXRcclxuICAgICAgICAgICAgICAgIDogaXNNZXNzYWdlRnVuY3Rpb24oZm9ybWF0KVxyXG4gICAgICAgICAgICAgICAgICAgID8gZm9ybWF0LnNvdXJjZVxyXG4gICAgICAgICAgICAgICAgICAgIDogJycsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IHJldFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcGF5bG9hZHMubWV0YSA9IGFzc2lnbih7fSwgY29udGV4dC5fX21ldGEsIGdldEFkZGl0aW9uYWxNZXRhKCkgfHwge30pO1xyXG4gICAgICAgIHRyYW5zbGF0ZURldlRvb2xzKHBheWxvYWRzKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbn1cclxuZnVuY3Rpb24gZXNjYXBlUGFyYW1zKG9wdGlvbnMpIHtcclxuICAgIGlmIChpc0FycmF5KG9wdGlvbnMubGlzdCkpIHtcclxuICAgICAgICBvcHRpb25zLmxpc3QgPSBvcHRpb25zLmxpc3QubWFwKGl0ZW0gPT4gaXNTdHJpbmcoaXRlbSkgPyBlc2NhcGVIdG1sKGl0ZW0pIDogaXRlbSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpc09iamVjdChvcHRpb25zLm5hbWVkKSkge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMubmFtZWQpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzU3RyaW5nKG9wdGlvbnMubmFtZWRba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMubmFtZWRba2V5XSA9IGVzY2FwZUh0bWwob3B0aW9ucy5uYW1lZFtrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHJlc29sdmVNZXNzYWdlRm9ybWF0KGNvbnRleHQsIGtleSwgbG9jYWxlLCBmYWxsYmFja0xvY2FsZSwgZmFsbGJhY2tXYXJuLCBtaXNzaW5nV2Fybikge1xyXG4gICAgY29uc3QgeyBtZXNzYWdlcywgb25XYXJuLCBtZXNzYWdlUmVzb2x2ZXI6IHJlc29sdmVWYWx1ZSwgbG9jYWxlRmFsbGJhY2tlciB9ID0gY29udGV4dDtcclxuICAgIGNvbnN0IGxvY2FsZXMgPSBsb2NhbGVGYWxsYmFja2VyKGNvbnRleHQsIGZhbGxiYWNrTG9jYWxlLCBsb2NhbGUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgIGxldCBtZXNzYWdlID0ge307XHJcbiAgICBsZXQgdGFyZ2V0TG9jYWxlO1xyXG4gICAgbGV0IGZvcm1hdCA9IG51bGw7XHJcbiAgICBsZXQgZnJvbSA9IGxvY2FsZTtcclxuICAgIGxldCB0byA9IG51bGw7XHJcbiAgICBjb25zdCB0eXBlID0gJ3RyYW5zbGF0ZSc7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0YXJnZXRMb2NhbGUgPSB0byA9IGxvY2FsZXNbaV07XHJcbiAgICAgICAgaWYgKChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSAmJlxyXG4gICAgICAgICAgICBsb2NhbGUgIT09IHRhcmdldExvY2FsZSAmJlxyXG4gICAgICAgICAgICBpc1RyYW5zbGF0ZUZhbGxiYWNrV2FybihmYWxsYmFja1dhcm4sIGtleSkpIHtcclxuICAgICAgICAgICAgb25XYXJuKGdldFdhcm5NZXNzYWdlKENvcmVXYXJuQ29kZXMuRkFMTEJBQ0tfVE9fVFJBTlNMQVRFLCB7XHJcbiAgICAgICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldExvY2FsZVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZvciB2dWUtZGV2dG9vbHMgdGltZWxpbmUgZXZlbnRcclxuICAgICAgICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpICYmIGxvY2FsZSAhPT0gdGFyZ2V0TG9jYWxlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVtaXR0ZXIgPSBjb250ZXh0Ll9fdl9lbWl0dGVyO1xyXG4gICAgICAgICAgICBpZiAoZW1pdHRlcikge1xyXG4gICAgICAgICAgICAgICAgZW1pdHRlci5lbWl0KFwiZmFsbGJhY2tcIiAvKiBGQUxCQUNLICovLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbSxcclxuICAgICAgICAgICAgICAgICAgICB0byxcclxuICAgICAgICAgICAgICAgICAgICBncm91cElkOiBgJHt0eXBlfToke2tleX1gXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBtZXNzYWdlID1cclxuICAgICAgICAgICAgbWVzc2FnZXNbdGFyZ2V0TG9jYWxlXSB8fCB7fTtcclxuICAgICAgICAvLyBmb3IgdnVlLWRldnRvb2xzIHRpbWVsaW5lIGV2ZW50XHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gbnVsbDtcclxuICAgICAgICBsZXQgc3RhcnRUYWc7XHJcbiAgICAgICAgbGV0IGVuZFRhZztcclxuICAgICAgICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpICYmIGluQnJvd3Nlcikge1xyXG4gICAgICAgICAgICBzdGFydCA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgc3RhcnRUYWcgPSAnaW50bGlmeS1tZXNzYWdlLXJlc29sdmUtc3RhcnQnO1xyXG4gICAgICAgICAgICBlbmRUYWcgPSAnaW50bGlmeS1tZXNzYWdlLXJlc29sdmUtZW5kJztcclxuICAgICAgICAgICAgbWFyayAmJiBtYXJrKHN0YXJ0VGFnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKChmb3JtYXQgPSByZXNvbHZlVmFsdWUobWVzc2FnZSwga2V5KSkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gaWYgbnVsbCwgcmVzb2x2ZSB3aXRoIG9iamVjdCBrZXkgcGF0aFxyXG4gICAgICAgICAgICBmb3JtYXQgPSBtZXNzYWdlW2tleV07IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBmb3IgdnVlLWRldnRvb2xzIHRpbWVsaW5lIGV2ZW50XHJcbiAgICAgICAgaWYgKChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSAmJiBpbkJyb3dzZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgZW5kID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICBjb25zdCBlbWl0dGVyID0gY29udGV4dC5fX3ZfZW1pdHRlcjtcclxuICAgICAgICAgICAgaWYgKGVtaXR0ZXIgJiYgc3RhcnQgJiYgZm9ybWF0KSB7XHJcbiAgICAgICAgICAgICAgICBlbWl0dGVyLmVtaXQoXCJtZXNzYWdlLXJlc29sdmVcIiAvKiBNRVNTQUdFX1JFU09MVkUgKi8sIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm1lc3NhZ2UtcmVzb2x2ZVwiIC8qIE1FU1NBR0VfUkVTT0xWRSAqLyxcclxuICAgICAgICAgICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZm9ybWF0LFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6IGVuZCAtIHN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwSWQ6IGAke3R5cGV9OiR7a2V5fWBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzdGFydFRhZyAmJiBlbmRUYWcgJiYgbWFyayAmJiBtZWFzdXJlKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJrKGVuZFRhZyk7XHJcbiAgICAgICAgICAgICAgICBtZWFzdXJlKCdpbnRsaWZ5IG1lc3NhZ2UgcmVzb2x2ZScsIHN0YXJ0VGFnLCBlbmRUYWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1N0cmluZyhmb3JtYXQpIHx8IGlzRnVuY3Rpb24oZm9ybWF0KSlcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY29uc3QgbWlzc2luZ1JldCA9IGhhbmRsZU1pc3NpbmcoY29udGV4dCwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICAgICAga2V5LCB0YXJnZXRMb2NhbGUsIG1pc3NpbmdXYXJuLCB0eXBlKTtcclxuICAgICAgICBpZiAobWlzc2luZ1JldCAhPT0ga2V5KSB7XHJcbiAgICAgICAgICAgIGZvcm1hdCA9IG1pc3NpbmdSZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZyb20gPSB0bztcclxuICAgIH1cclxuICAgIHJldHVybiBbZm9ybWF0LCB0YXJnZXRMb2NhbGUsIG1lc3NhZ2VdO1xyXG59XHJcbmZ1bmN0aW9uIGNvbXBpbGVNZXNzYWdlRm9ybWF0KGNvbnRleHQsIGtleSwgdGFyZ2V0TG9jYWxlLCBmb3JtYXQsIGNhY2hlQmFzZUtleSwgZXJyb3JEZXRlY3Rvcikge1xyXG4gICAgY29uc3QgeyBtZXNzYWdlQ29tcGlsZXIsIHdhcm5IdG1sTWVzc2FnZSB9ID0gY29udGV4dDtcclxuICAgIGlmIChpc01lc3NhZ2VGdW5jdGlvbihmb3JtYXQpKSB7XHJcbiAgICAgICAgY29uc3QgbXNnID0gZm9ybWF0O1xyXG4gICAgICAgIG1zZy5sb2NhbGUgPSBtc2cubG9jYWxlIHx8IHRhcmdldExvY2FsZTtcclxuICAgICAgICBtc2cua2V5ID0gbXNnLmtleSB8fCBrZXk7XHJcbiAgICAgICAgcmV0dXJuIG1zZztcclxuICAgIH1cclxuICAgIGlmIChtZXNzYWdlQ29tcGlsZXIgPT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IG1zZyA9ICgoKSA9PiBmb3JtYXQpO1xyXG4gICAgICAgIG1zZy5sb2NhbGUgPSB0YXJnZXRMb2NhbGU7XHJcbiAgICAgICAgbXNnLmtleSA9IGtleTtcclxuICAgICAgICByZXR1cm4gbXNnO1xyXG4gICAgfVxyXG4gICAgLy8gZm9yIHZ1ZS1kZXZ0b29scyB0aW1lbGluZSBldmVudFxyXG4gICAgbGV0IHN0YXJ0ID0gbnVsbDtcclxuICAgIGxldCBzdGFydFRhZztcclxuICAgIGxldCBlbmRUYWc7XHJcbiAgICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpICYmIGluQnJvd3Nlcikge1xyXG4gICAgICAgIHN0YXJ0ID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHN0YXJ0VGFnID0gJ2ludGxpZnktbWVzc2FnZS1jb21waWxhdGlvbi1zdGFydCc7XHJcbiAgICAgICAgZW5kVGFnID0gJ2ludGxpZnktbWVzc2FnZS1jb21waWxhdGlvbi1lbmQnO1xyXG4gICAgICAgIG1hcmsgJiYgbWFyayhzdGFydFRhZyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtc2cgPSBtZXNzYWdlQ29tcGlsZXIoZm9ybWF0LCBnZXRDb21waWxlT3B0aW9ucyhjb250ZXh0LCB0YXJnZXRMb2NhbGUsIGNhY2hlQmFzZUtleSwgZm9ybWF0LCB3YXJuSHRtbE1lc3NhZ2UsIGVycm9yRGV0ZWN0b3IpKTtcclxuICAgIC8vIGZvciB2dWUtZGV2dG9vbHMgdGltZWxpbmUgZXZlbnRcclxuICAgIGlmICgocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgJiYgaW5Ccm93c2VyKSB7XHJcbiAgICAgICAgY29uc3QgZW5kID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIGNvbnN0IGVtaXR0ZXIgPSBjb250ZXh0Ll9fdl9lbWl0dGVyO1xyXG4gICAgICAgIGlmIChlbWl0dGVyICYmIHN0YXJ0KSB7XHJcbiAgICAgICAgICAgIGVtaXR0ZXIuZW1pdChcIm1lc3NhZ2UtY29tcGlsYXRpb25cIiAvKiBNRVNTQUdFX0NPTVBJTEFUSU9OICovLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm1lc3NhZ2UtY29tcGlsYXRpb25cIiAvKiBNRVNTQUdFX0NPTVBJTEFUSU9OICovLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogZm9ybWF0LFxyXG4gICAgICAgICAgICAgICAgdGltZTogZW5kIC0gc3RhcnQsXHJcbiAgICAgICAgICAgICAgICBncm91cElkOiBgJHsndHJhbnNsYXRlJ306JHtrZXl9YFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0YXJ0VGFnICYmIGVuZFRhZyAmJiBtYXJrICYmIG1lYXN1cmUpIHtcclxuICAgICAgICAgICAgbWFyayhlbmRUYWcpO1xyXG4gICAgICAgICAgICBtZWFzdXJlKCdpbnRsaWZ5IG1lc3NhZ2UgY29tcGlsYXRpb24nLCBzdGFydFRhZywgZW5kVGFnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtc2cubG9jYWxlID0gdGFyZ2V0TG9jYWxlO1xyXG4gICAgbXNnLmtleSA9IGtleTtcclxuICAgIG1zZy5zb3VyY2UgPSBmb3JtYXQ7XHJcbiAgICByZXR1cm4gbXNnO1xyXG59XHJcbmZ1bmN0aW9uIGV2YWx1YXRlTWVzc2FnZShjb250ZXh0LCBtc2csIG1zZ0N0eCkge1xyXG4gICAgLy8gZm9yIHZ1ZS1kZXZ0b29scyB0aW1lbGluZSBldmVudFxyXG4gICAgbGV0IHN0YXJ0ID0gbnVsbDtcclxuICAgIGxldCBzdGFydFRhZztcclxuICAgIGxldCBlbmRUYWc7XHJcbiAgICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpICYmIGluQnJvd3Nlcikge1xyXG4gICAgICAgIHN0YXJ0ID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHN0YXJ0VGFnID0gJ2ludGxpZnktbWVzc2FnZS1ldmFsdWF0aW9uLXN0YXJ0JztcclxuICAgICAgICBlbmRUYWcgPSAnaW50bGlmeS1tZXNzYWdlLWV2YWx1YXRpb24tZW5kJztcclxuICAgICAgICBtYXJrICYmIG1hcmsoc3RhcnRUYWcpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWVzc2FnZWQgPSBtc2cobXNnQ3R4KTtcclxuICAgIC8vIGZvciB2dWUtZGV2dG9vbHMgdGltZWxpbmUgZXZlbnRcclxuICAgIGlmICgocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgJiYgaW5Ccm93c2VyKSB7XHJcbiAgICAgICAgY29uc3QgZW5kID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIGNvbnN0IGVtaXR0ZXIgPSBjb250ZXh0Ll9fdl9lbWl0dGVyO1xyXG4gICAgICAgIGlmIChlbWl0dGVyICYmIHN0YXJ0KSB7XHJcbiAgICAgICAgICAgIGVtaXR0ZXIuZW1pdChcIm1lc3NhZ2UtZXZhbHVhdGlvblwiIC8qIE1FU1NBR0VfRVZBTFVBVElPTiAqLywge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJtZXNzYWdlLWV2YWx1YXRpb25cIiAvKiBNRVNTQUdFX0VWQUxVQVRJT04gKi8sXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogbWVzc2FnZWQsXHJcbiAgICAgICAgICAgICAgICB0aW1lOiBlbmQgLSBzdGFydCxcclxuICAgICAgICAgICAgICAgIGdyb3VwSWQ6IGAkeyd0cmFuc2xhdGUnfToke21zZy5rZXl9YFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0YXJ0VGFnICYmIGVuZFRhZyAmJiBtYXJrICYmIG1lYXN1cmUpIHtcclxuICAgICAgICAgICAgbWFyayhlbmRUYWcpO1xyXG4gICAgICAgICAgICBtZWFzdXJlKCdpbnRsaWZ5IG1lc3NhZ2UgZXZhbHVhdGlvbicsIHN0YXJ0VGFnLCBlbmRUYWcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBtZXNzYWdlZDtcclxufVxyXG4vKiogQGludGVybmFsICovXHJcbmZ1bmN0aW9uIHBhcnNlVHJhbnNsYXRlQXJncyguLi5hcmdzKSB7XHJcbiAgICBjb25zdCBbYXJnMSwgYXJnMiwgYXJnM10gPSBhcmdzO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHt9O1xyXG4gICAgaWYgKCFpc1N0cmluZyhhcmcxKSAmJiAhaXNOdW1iZXIoYXJnMSkgJiYgIWlzTWVzc2FnZUZ1bmN0aW9uKGFyZzEpKSB7XHJcbiAgICAgICAgdGhyb3cgY3JlYXRlQ29yZUVycm9yKENvcmVFcnJvckNvZGVzLklOVkFMSURfQVJHVU1FTlQpO1xyXG4gICAgfVxyXG4gICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICBjb25zdCBrZXkgPSBpc051bWJlcihhcmcxKVxyXG4gICAgICAgID8gU3RyaW5nKGFyZzEpXHJcbiAgICAgICAgOiBpc01lc3NhZ2VGdW5jdGlvbihhcmcxKVxyXG4gICAgICAgICAgICA/IGFyZzFcclxuICAgICAgICAgICAgOiBhcmcxO1xyXG4gICAgaWYgKGlzTnVtYmVyKGFyZzIpKSB7XHJcbiAgICAgICAgb3B0aW9ucy5wbHVyYWwgPSBhcmcyO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNTdHJpbmcoYXJnMikpIHtcclxuICAgICAgICBvcHRpb25zLmRlZmF1bHQgPSBhcmcyO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNQbGFpbk9iamVjdChhcmcyKSAmJiAhaXNFbXB0eU9iamVjdChhcmcyKSkge1xyXG4gICAgICAgIG9wdGlvbnMubmFtZWQgPSBhcmcyO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNBcnJheShhcmcyKSkge1xyXG4gICAgICAgIG9wdGlvbnMubGlzdCA9IGFyZzI7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNOdW1iZXIoYXJnMykpIHtcclxuICAgICAgICBvcHRpb25zLnBsdXJhbCA9IGFyZzM7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpc1N0cmluZyhhcmczKSkge1xyXG4gICAgICAgIG9wdGlvbnMuZGVmYXVsdCA9IGFyZzM7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpc1BsYWluT2JqZWN0KGFyZzMpKSB7XHJcbiAgICAgICAgYXNzaWduKG9wdGlvbnMsIGFyZzMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtrZXksIG9wdGlvbnNdO1xyXG59XHJcbmZ1bmN0aW9uIGdldENvbXBpbGVPcHRpb25zKGNvbnRleHQsIGxvY2FsZSwga2V5LCBzb3VyY2UsIHdhcm5IdG1sTWVzc2FnZSwgZXJyb3JEZXRlY3Rvcikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB3YXJuSHRtbE1lc3NhZ2UsXHJcbiAgICAgICAgb25FcnJvcjogKGVycikgPT4ge1xyXG4gICAgICAgICAgICBlcnJvckRldGVjdG9yICYmIGVycm9yRGV0ZWN0b3IoZXJyKTtcclxuICAgICAgICAgICAgaWYgKChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBNZXNzYWdlIGNvbXBpbGF0aW9uIGVycm9yOiAke2Vyci5tZXNzYWdlfWA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2RlRnJhbWUgPSBlcnIubG9jYXRpb24gJiZcclxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUNvZGVGcmFtZShzb3VyY2UsIGVyci5sb2NhdGlvbi5zdGFydC5vZmZzZXQsIGVyci5sb2NhdGlvbi5lbmQub2Zmc2V0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVtaXR0ZXIgPSBjb250ZXh0Ll9fdl9lbWl0dGVyO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVtaXR0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbWl0dGVyLmVtaXQoXCJjb21waWxlLWVycm9yXCIgLyogQ09NUElMRV9FUlJPUiAqLywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBzb3VyY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnIubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IGVyci5sb2NhdGlvbiAmJiBlcnIubG9jYXRpb24uc3RhcnQub2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IGVyci5sb2NhdGlvbiAmJiBlcnIubG9jYXRpb24uZW5kLm9mZnNldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBJZDogYCR7J3RyYW5zbGF0ZSd9OiR7a2V5fWBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoY29kZUZyYW1lID8gYCR7bWVzc2FnZX1cXG4ke2NvZGVGcmFtZX1gIDogbWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uQ2FjaGVLZXk6IChzb3VyY2UpID0+IGdlbmVyYXRlRm9ybWF0Q2FjaGVLZXkobG9jYWxlLCBrZXksIHNvdXJjZSlcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gZ2V0TWVzc2FnZUNvbnRleHRPcHRpb25zKGNvbnRleHQsIGxvY2FsZSwgbWVzc2FnZSwgb3B0aW9ucykge1xyXG4gICAgY29uc3QgeyBtb2RpZmllcnMsIHBsdXJhbFJ1bGVzLCBtZXNzYWdlUmVzb2x2ZXI6IHJlc29sdmVWYWx1ZSwgZmFsbGJhY2tMb2NhbGUsIGZhbGxiYWNrV2FybiwgbWlzc2luZ1dhcm4sIGZhbGxiYWNrQ29udGV4dCB9ID0gY29udGV4dDtcclxuICAgIGNvbnN0IHJlc29sdmVNZXNzYWdlID0gKGtleSkgPT4ge1xyXG4gICAgICAgIGxldCB2YWwgPSByZXNvbHZlVmFsdWUobWVzc2FnZSwga2V5KTtcclxuICAgICAgICAvLyBmYWxsYmFjayB0byByb290IGNvbnRleHRcclxuICAgICAgICBpZiAodmFsID09IG51bGwgJiYgZmFsbGJhY2tDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFssICwgbWVzc2FnZV0gPSByZXNvbHZlTWVzc2FnZUZvcm1hdChmYWxsYmFja0NvbnRleHQsIGtleSwgbG9jYWxlLCBmYWxsYmFja0xvY2FsZSwgZmFsbGJhY2tXYXJuLCBtaXNzaW5nV2Fybik7XHJcbiAgICAgICAgICAgIHZhbCA9IHJlc29sdmVWYWx1ZShtZXNzYWdlLCBrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNTdHJpbmcodmFsKSkge1xyXG4gICAgICAgICAgICBsZXQgb2NjdXJyZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3JEZXRlY3RvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIG9jY3VycmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgbXNnID0gY29tcGlsZU1lc3NhZ2VGb3JtYXQoY29udGV4dCwga2V5LCBsb2NhbGUsIHZhbCwga2V5LCBlcnJvckRldGVjdG9yKTtcclxuICAgICAgICAgICAgcmV0dXJuICFvY2N1cnJlZFxyXG4gICAgICAgICAgICAgICAgPyBtc2dcclxuICAgICAgICAgICAgICAgIDogTk9PUF9NRVNTQUdFX0ZVTkNUSU9OO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc01lc3NhZ2VGdW5jdGlvbih2YWwpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBzaG91bGQgYmUgaW1wbGVtZW50ZWQgd2FybmluZyBtZXNzYWdlXHJcbiAgICAgICAgICAgIHJldHVybiBOT09QX01FU1NBR0VfRlVOQ1RJT047XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGN0eE9wdGlvbnMgPSB7XHJcbiAgICAgICAgbG9jYWxlLFxyXG4gICAgICAgIG1vZGlmaWVycyxcclxuICAgICAgICBwbHVyYWxSdWxlcyxcclxuICAgICAgICBtZXNzYWdlczogcmVzb2x2ZU1lc3NhZ2VcclxuICAgIH07XHJcbiAgICBpZiAoY29udGV4dC5wcm9jZXNzb3IpIHtcclxuICAgICAgICBjdHhPcHRpb25zLnByb2Nlc3NvciA9IGNvbnRleHQucHJvY2Vzc29yO1xyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbnMubGlzdCkge1xyXG4gICAgICAgIGN0eE9wdGlvbnMubGlzdCA9IG9wdGlvbnMubGlzdDtcclxuICAgIH1cclxuICAgIGlmIChvcHRpb25zLm5hbWVkKSB7XHJcbiAgICAgICAgY3R4T3B0aW9ucy5uYW1lZCA9IG9wdGlvbnMubmFtZWQ7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNOdW1iZXIob3B0aW9ucy5wbHVyYWwpKSB7XHJcbiAgICAgICAgY3R4T3B0aW9ucy5wbHVyYWxJbmRleCA9IG9wdGlvbnMucGx1cmFsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGN0eE9wdGlvbnM7XHJcbn1cblxuY29uc3QgaW50bERlZmluZWQgPSB0eXBlb2YgSW50bCAhPT0gJ3VuZGVmaW5lZCc7XHJcbmNvbnN0IEF2YWlsYWJpbGl0aWVzID0ge1xyXG4gICAgZGF0ZVRpbWVGb3JtYXQ6IGludGxEZWZpbmVkICYmIHR5cGVvZiBJbnRsLkRhdGVUaW1lRm9ybWF0ICE9PSAndW5kZWZpbmVkJyxcclxuICAgIG51bWJlckZvcm1hdDogaW50bERlZmluZWQgJiYgdHlwZW9mIEludGwuTnVtYmVyRm9ybWF0ICE9PSAndW5kZWZpbmVkJ1xyXG59O1xuXG4vLyBpbXBsZW1lbnRhdGlvbiBvZiBgZGF0ZXRpbWVgIGZ1bmN0aW9uXHJcbmZ1bmN0aW9uIGRhdGV0aW1lKGNvbnRleHQsIC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IHsgZGF0ZXRpbWVGb3JtYXRzLCB1bnJlc29sdmluZywgZmFsbGJhY2tMb2NhbGUsIG9uV2FybiwgbG9jYWxlRmFsbGJhY2tlciB9ID0gY29udGV4dDtcclxuICAgIGNvbnN0IHsgX19kYXRldGltZUZvcm1hdHRlcnMgfSA9IGNvbnRleHQ7XHJcbiAgICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpICYmICFBdmFpbGFiaWxpdGllcy5kYXRlVGltZUZvcm1hdCkge1xyXG4gICAgICAgIG9uV2FybihnZXRXYXJuTWVzc2FnZShDb3JlV2FybkNvZGVzLkNBTk5PVF9GT1JNQVRfREFURSkpO1xyXG4gICAgICAgIHJldHVybiBNSVNTSU5HX1JFU09MVkVfVkFMVUU7XHJcbiAgICB9XHJcbiAgICBjb25zdCBba2V5LCB2YWx1ZSwgb3B0aW9ucywgb3ZlcnJpZGVzXSA9IHBhcnNlRGF0ZVRpbWVBcmdzKC4uLmFyZ3MpO1xyXG4gICAgY29uc3QgbWlzc2luZ1dhcm4gPSBpc0Jvb2xlYW4ob3B0aW9ucy5taXNzaW5nV2FybilcclxuICAgICAgICA/IG9wdGlvbnMubWlzc2luZ1dhcm5cclxuICAgICAgICA6IGNvbnRleHQubWlzc2luZ1dhcm47XHJcbiAgICBjb25zdCBmYWxsYmFja1dhcm4gPSBpc0Jvb2xlYW4ob3B0aW9ucy5mYWxsYmFja1dhcm4pXHJcbiAgICAgICAgPyBvcHRpb25zLmZhbGxiYWNrV2FyblxyXG4gICAgICAgIDogY29udGV4dC5mYWxsYmFja1dhcm47XHJcbiAgICBjb25zdCBwYXJ0ID0gISFvcHRpb25zLnBhcnQ7XHJcbiAgICBjb25zdCBsb2NhbGUgPSBpc1N0cmluZyhvcHRpb25zLmxvY2FsZSkgPyBvcHRpb25zLmxvY2FsZSA6IGNvbnRleHQubG9jYWxlO1xyXG4gICAgY29uc3QgbG9jYWxlcyA9IGxvY2FsZUZhbGxiYWNrZXIoY29udGV4dCwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICBmYWxsYmFja0xvY2FsZSwgbG9jYWxlKTtcclxuICAgIGlmICghaXNTdHJpbmcoa2V5KSB8fCBrZXkgPT09ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgb3ZlcnJpZGVzKS5mb3JtYXQodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLy8gcmVzb2x2ZSBmb3JtYXRcclxuICAgIGxldCBkYXRldGltZUZvcm1hdCA9IHt9O1xyXG4gICAgbGV0IHRhcmdldExvY2FsZTtcclxuICAgIGxldCBmb3JtYXQgPSBudWxsO1xyXG4gICAgbGV0IGZyb20gPSBsb2NhbGU7XHJcbiAgICBsZXQgdG8gPSBudWxsO1xyXG4gICAgY29uc3QgdHlwZSA9ICdkYXRldGltZSBmb3JtYXQnO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGFyZ2V0TG9jYWxlID0gdG8gPSBsb2NhbGVzW2ldO1xyXG4gICAgICAgIGlmICgocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgJiZcclxuICAgICAgICAgICAgbG9jYWxlICE9PSB0YXJnZXRMb2NhbGUgJiZcclxuICAgICAgICAgICAgaXNUcmFuc2xhdGVGYWxsYmFja1dhcm4oZmFsbGJhY2tXYXJuLCBrZXkpKSB7XHJcbiAgICAgICAgICAgIG9uV2FybihnZXRXYXJuTWVzc2FnZShDb3JlV2FybkNvZGVzLkZBTExCQUNLX1RPX0RBVEVfRk9STUFULCB7XHJcbiAgICAgICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldExvY2FsZVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZvciB2dWUtZGV2dG9vbHMgdGltZWxpbmUgZXZlbnRcclxuICAgICAgICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpICYmIGxvY2FsZSAhPT0gdGFyZ2V0TG9jYWxlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVtaXR0ZXIgPSBjb250ZXh0Ll9fdl9lbWl0dGVyO1xyXG4gICAgICAgICAgICBpZiAoZW1pdHRlcikge1xyXG4gICAgICAgICAgICAgICAgZW1pdHRlci5lbWl0KFwiZmFsbGJhY2tcIiAvKiBGQUxCQUNLICovLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbSxcclxuICAgICAgICAgICAgICAgICAgICB0byxcclxuICAgICAgICAgICAgICAgICAgICBncm91cElkOiBgJHt0eXBlfToke2tleX1gXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRldGltZUZvcm1hdCA9XHJcbiAgICAgICAgICAgIGRhdGV0aW1lRm9ybWF0c1t0YXJnZXRMb2NhbGVdIHx8IHt9O1xyXG4gICAgICAgIGZvcm1hdCA9IGRhdGV0aW1lRm9ybWF0W2tleV07XHJcbiAgICAgICAgaWYgKGlzUGxhaW5PYmplY3QoZm9ybWF0KSlcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgaGFuZGxlTWlzc2luZyhjb250ZXh0LCBrZXksIHRhcmdldExvY2FsZSwgbWlzc2luZ1dhcm4sIHR5cGUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICBmcm9tID0gdG87XHJcbiAgICB9XHJcbiAgICAvLyBjaGVja2luZyBmb3JtYXQgYW5kIHRhcmdldCBsb2NhbGVcclxuICAgIGlmICghaXNQbGFpbk9iamVjdChmb3JtYXQpIHx8ICFpc1N0cmluZyh0YXJnZXRMb2NhbGUpKSB7XHJcbiAgICAgICAgcmV0dXJuIHVucmVzb2x2aW5nID8gTk9UX1JFT1NMVkVEIDoga2V5O1xyXG4gICAgfVxyXG4gICAgbGV0IGlkID0gYCR7dGFyZ2V0TG9jYWxlfV9fJHtrZXl9YDtcclxuICAgIGlmICghaXNFbXB0eU9iamVjdChvdmVycmlkZXMpKSB7XHJcbiAgICAgICAgaWQgPSBgJHtpZH1fXyR7SlNPTi5zdHJpbmdpZnkob3ZlcnJpZGVzKX1gO1xyXG4gICAgfVxyXG4gICAgbGV0IGZvcm1hdHRlciA9IF9fZGF0ZXRpbWVGb3JtYXR0ZXJzLmdldChpZCk7XHJcbiAgICBpZiAoIWZvcm1hdHRlcikge1xyXG4gICAgICAgIGZvcm1hdHRlciA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHRhcmdldExvY2FsZSwgYXNzaWduKHt9LCBmb3JtYXQsIG92ZXJyaWRlcykpO1xyXG4gICAgICAgIF9fZGF0ZXRpbWVGb3JtYXR0ZXJzLnNldChpZCwgZm9ybWF0dGVyKTtcclxuICAgIH1cclxuICAgIHJldHVybiAhcGFydCA/IGZvcm1hdHRlci5mb3JtYXQodmFsdWUpIDogZm9ybWF0dGVyLmZvcm1hdFRvUGFydHModmFsdWUpO1xyXG59XHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuY29uc3QgREFURVRJTUVfRk9STUFUX09QVElPTlNfS0VZUyA9IFtcclxuICAgICdsb2NhbGVNYXRjaGVyJyxcclxuICAgICd3ZWVrZGF5JyxcclxuICAgICdlcmEnLFxyXG4gICAgJ3llYXInLFxyXG4gICAgJ21vbnRoJyxcclxuICAgICdkYXknLFxyXG4gICAgJ2hvdXInLFxyXG4gICAgJ21pbnV0ZScsXHJcbiAgICAnc2Vjb25kJyxcclxuICAgICd0aW1lWm9uZU5hbWUnLFxyXG4gICAgJ2Zvcm1hdE1hdGNoZXInLFxyXG4gICAgJ2hvdXIxMicsXHJcbiAgICAndGltZVpvbmUnLFxyXG4gICAgJ2RhdGVTdHlsZScsXHJcbiAgICAndGltZVN0eWxlJyxcclxuICAgICdjYWxlbmRhcicsXHJcbiAgICAnZGF5UGVyaW9kJyxcclxuICAgICdudW1iZXJpbmdTeXN0ZW0nLFxyXG4gICAgJ2hvdXJDeWNsZScsXHJcbiAgICAnZnJhY3Rpb25hbFNlY29uZERpZ2l0cydcclxuXTtcclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5mdW5jdGlvbiBwYXJzZURhdGVUaW1lQXJncyguLi5hcmdzKSB7XHJcbiAgICBjb25zdCBbYXJnMSwgYXJnMiwgYXJnMywgYXJnNF0gPSBhcmdzO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHt9O1xyXG4gICAgbGV0IG92ZXJyaWRlcyA9IHt9O1xyXG4gICAgbGV0IHZhbHVlO1xyXG4gICAgaWYgKGlzU3RyaW5nKGFyZzEpKSB7XHJcbiAgICAgICAgLy8gT25seSBhbGxvdyBJU08gc3RyaW5ncyAtIG90aGVyIGRhdGUgZm9ybWF0cyBhcmUgb2Z0ZW4gc3VwcG9ydGVkLFxyXG4gICAgICAgIC8vIGJ1dCBtYXkgY2F1c2UgZGlmZmVyZW50IHJlc3VsdHMgaW4gZGlmZmVyZW50IGJyb3dzZXJzLlxyXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBhcmcxLm1hdGNoKC8oXFxkezR9LVxcZHsyfS1cXGR7Mn0pKFR8XFxzKT8oLiopLyk7XHJcbiAgICAgICAgaWYgKCFtYXRjaGVzKSB7XHJcbiAgICAgICAgICAgIHRocm93IGNyZWF0ZUNvcmVFcnJvcihDb3JlRXJyb3JDb2Rlcy5JTlZBTElEX0lTT19EQVRFX0FSR1VNRU5UKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU29tZSBicm93c2VycyBjYW4gbm90IHBhcnNlIHRoZSBpc28gZGF0ZXRpbWUgc2VwYXJhdGVkIGJ5IHNwYWNlLFxyXG4gICAgICAgIC8vIHRoaXMgaXMgYSBjb21wcm9taXNlIHNvbHV0aW9uIGJ5IHJlcGxhY2UgdGhlICdUJy8nICcgd2l0aCAnVCdcclxuICAgICAgICBjb25zdCBkYXRlVGltZSA9IG1hdGNoZXNbM11cclxuICAgICAgICAgICAgPyBtYXRjaGVzWzNdLnRyaW0oKS5zdGFydHNXaXRoKCdUJylcclxuICAgICAgICAgICAgICAgID8gYCR7bWF0Y2hlc1sxXS50cmltKCl9JHttYXRjaGVzWzNdLnRyaW0oKX1gXHJcbiAgICAgICAgICAgICAgICA6IGAke21hdGNoZXNbMV0udHJpbSgpfVQke21hdGNoZXNbM10udHJpbSgpfWBcclxuICAgICAgICAgICAgOiBtYXRjaGVzWzFdLnRyaW0oKTtcclxuICAgICAgICB2YWx1ZSA9IG5ldyBEYXRlKGRhdGVUaW1lKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBUaGlzIHdpbGwgZmFpbCBpZiB0aGUgZGF0ZSBpcyBub3QgdmFsaWRcclxuICAgICAgICAgICAgdmFsdWUudG9JU09TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgY3JlYXRlQ29yZUVycm9yKENvcmVFcnJvckNvZGVzLklOVkFMSURfSVNPX0RBVEVfQVJHVU1FTlQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzRGF0ZShhcmcxKSkge1xyXG4gICAgICAgIGlmIChpc05hTihhcmcxLmdldFRpbWUoKSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgY3JlYXRlQ29yZUVycm9yKENvcmVFcnJvckNvZGVzLklOVkFMSURfREFURV9BUkdVTUVOVCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhbHVlID0gYXJnMTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzTnVtYmVyKGFyZzEpKSB7XHJcbiAgICAgICAgdmFsdWUgPSBhcmcxO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgY3JlYXRlQ29yZUVycm9yKENvcmVFcnJvckNvZGVzLklOVkFMSURfQVJHVU1FTlQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzU3RyaW5nKGFyZzIpKSB7XHJcbiAgICAgICAgb3B0aW9ucy5rZXkgPSBhcmcyO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNQbGFpbk9iamVjdChhcmcyKSkge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGFyZzIpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgaWYgKERBVEVUSU1FX0ZPUk1BVF9PUFRJT05TX0tFWVMuaW5jbHVkZXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgb3ZlcnJpZGVzW2tleV0gPSBhcmcyW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zW2tleV0gPSBhcmcyW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChpc1N0cmluZyhhcmczKSkge1xyXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gYXJnMztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzUGxhaW5PYmplY3QoYXJnMykpIHtcclxuICAgICAgICBvdmVycmlkZXMgPSBhcmczO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzUGxhaW5PYmplY3QoYXJnNCkpIHtcclxuICAgICAgICBvdmVycmlkZXMgPSBhcmc0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtvcHRpb25zLmtleSB8fCAnJywgdmFsdWUsIG9wdGlvbnMsIG92ZXJyaWRlc107XHJcbn1cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5mdW5jdGlvbiBjbGVhckRhdGVUaW1lRm9ybWF0KGN0eCwgbG9jYWxlLCBmb3JtYXQpIHtcclxuICAgIGNvbnN0IGNvbnRleHQgPSBjdHg7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmb3JtYXQpIHtcclxuICAgICAgICBjb25zdCBpZCA9IGAke2xvY2FsZX1fXyR7a2V5fWA7XHJcbiAgICAgICAgaWYgKCFjb250ZXh0Ll9fZGF0ZXRpbWVGb3JtYXR0ZXJzLmhhcyhpZCkpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRleHQuX19kYXRldGltZUZvcm1hdHRlcnMuZGVsZXRlKGlkKTtcclxuICAgIH1cclxufVxuXG4vLyBpbXBsZW1lbnRhdGlvbiBvZiBgbnVtYmVyYCBmdW5jdGlvblxyXG5mdW5jdGlvbiBudW1iZXIoY29udGV4dCwgLi4uYXJncykge1xyXG4gICAgY29uc3QgeyBudW1iZXJGb3JtYXRzLCB1bnJlc29sdmluZywgZmFsbGJhY2tMb2NhbGUsIG9uV2FybiwgbG9jYWxlRmFsbGJhY2tlciB9ID0gY29udGV4dDtcclxuICAgIGNvbnN0IHsgX19udW1iZXJGb3JtYXR0ZXJzIH0gPSBjb250ZXh0O1xyXG4gICAgaWYgKChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSAmJiAhQXZhaWxhYmlsaXRpZXMubnVtYmVyRm9ybWF0KSB7XHJcbiAgICAgICAgb25XYXJuKGdldFdhcm5NZXNzYWdlKENvcmVXYXJuQ29kZXMuQ0FOTk9UX0ZPUk1BVF9OVU1CRVIpKTtcclxuICAgICAgICByZXR1cm4gTUlTU0lOR19SRVNPTFZFX1ZBTFVFO1xyXG4gICAgfVxyXG4gICAgY29uc3QgW2tleSwgdmFsdWUsIG9wdGlvbnMsIG92ZXJyaWRlc10gPSBwYXJzZU51bWJlckFyZ3MoLi4uYXJncyk7XHJcbiAgICBjb25zdCBtaXNzaW5nV2FybiA9IGlzQm9vbGVhbihvcHRpb25zLm1pc3NpbmdXYXJuKVxyXG4gICAgICAgID8gb3B0aW9ucy5taXNzaW5nV2FyblxyXG4gICAgICAgIDogY29udGV4dC5taXNzaW5nV2FybjtcclxuICAgIGNvbnN0IGZhbGxiYWNrV2FybiA9IGlzQm9vbGVhbihvcHRpb25zLmZhbGxiYWNrV2FybilcclxuICAgICAgICA/IG9wdGlvbnMuZmFsbGJhY2tXYXJuXHJcbiAgICAgICAgOiBjb250ZXh0LmZhbGxiYWNrV2FybjtcclxuICAgIGNvbnN0IHBhcnQgPSAhIW9wdGlvbnMucGFydDtcclxuICAgIGNvbnN0IGxvY2FsZSA9IGlzU3RyaW5nKG9wdGlvbnMubG9jYWxlKSA/IG9wdGlvbnMubG9jYWxlIDogY29udGV4dC5sb2NhbGU7XHJcbiAgICBjb25zdCBsb2NhbGVzID0gbG9jYWxlRmFsbGJhY2tlcihjb250ZXh0LCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgIGZhbGxiYWNrTG9jYWxlLCBsb2NhbGUpO1xyXG4gICAgaWYgKCFpc1N0cmluZyhrZXkpIHx8IGtleSA9PT0gJycpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KGxvY2FsZSwgb3ZlcnJpZGVzKS5mb3JtYXQodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLy8gcmVzb2x2ZSBmb3JtYXRcclxuICAgIGxldCBudW1iZXJGb3JtYXQgPSB7fTtcclxuICAgIGxldCB0YXJnZXRMb2NhbGU7XHJcbiAgICBsZXQgZm9ybWF0ID0gbnVsbDtcclxuICAgIGxldCBmcm9tID0gbG9jYWxlO1xyXG4gICAgbGV0IHRvID0gbnVsbDtcclxuICAgIGNvbnN0IHR5cGUgPSAnbnVtYmVyIGZvcm1hdCc7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0YXJnZXRMb2NhbGUgPSB0byA9IGxvY2FsZXNbaV07XHJcbiAgICAgICAgaWYgKChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSAmJlxyXG4gICAgICAgICAgICBsb2NhbGUgIT09IHRhcmdldExvY2FsZSAmJlxyXG4gICAgICAgICAgICBpc1RyYW5zbGF0ZUZhbGxiYWNrV2FybihmYWxsYmFja1dhcm4sIGtleSkpIHtcclxuICAgICAgICAgICAgb25XYXJuKGdldFdhcm5NZXNzYWdlKENvcmVXYXJuQ29kZXMuRkFMTEJBQ0tfVE9fTlVNQkVSX0ZPUk1BVCwge1xyXG4gICAgICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXRMb2NhbGVcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBmb3IgdnVlLWRldnRvb2xzIHRpbWVsaW5lIGV2ZW50XHJcbiAgICAgICAgaWYgKChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSAmJiBsb2NhbGUgIT09IHRhcmdldExvY2FsZSkge1xyXG4gICAgICAgICAgICBjb25zdCBlbWl0dGVyID0gY29udGV4dC5fX3ZfZW1pdHRlcjtcclxuICAgICAgICAgICAgaWYgKGVtaXR0ZXIpIHtcclxuICAgICAgICAgICAgICAgIGVtaXR0ZXIuZW1pdChcImZhbGxiYWNrXCIgLyogRkFMQkFDSyAqLywge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIGZyb20sXHJcbiAgICAgICAgICAgICAgICAgICAgdG8sXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBJZDogYCR7dHlwZX06JHtrZXl9YFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbnVtYmVyRm9ybWF0ID1cclxuICAgICAgICAgICAgbnVtYmVyRm9ybWF0c1t0YXJnZXRMb2NhbGVdIHx8IHt9O1xyXG4gICAgICAgIGZvcm1hdCA9IG51bWJlckZvcm1hdFtrZXldO1xyXG4gICAgICAgIGlmIChpc1BsYWluT2JqZWN0KGZvcm1hdCkpXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGhhbmRsZU1pc3NpbmcoY29udGV4dCwga2V5LCB0YXJnZXRMb2NhbGUsIG1pc3NpbmdXYXJuLCB0eXBlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICAgICAgZnJvbSA9IHRvO1xyXG4gICAgfVxyXG4gICAgLy8gY2hlY2tpbmcgZm9ybWF0IGFuZCB0YXJnZXQgbG9jYWxlXHJcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QoZm9ybWF0KSB8fCAhaXNTdHJpbmcodGFyZ2V0TG9jYWxlKSkge1xyXG4gICAgICAgIHJldHVybiB1bnJlc29sdmluZyA/IE5PVF9SRU9TTFZFRCA6IGtleTtcclxuICAgIH1cclxuICAgIGxldCBpZCA9IGAke3RhcmdldExvY2FsZX1fXyR7a2V5fWA7XHJcbiAgICBpZiAoIWlzRW1wdHlPYmplY3Qob3ZlcnJpZGVzKSkge1xyXG4gICAgICAgIGlkID0gYCR7aWR9X18ke0pTT04uc3RyaW5naWZ5KG92ZXJyaWRlcyl9YDtcclxuICAgIH1cclxuICAgIGxldCBmb3JtYXR0ZXIgPSBfX251bWJlckZvcm1hdHRlcnMuZ2V0KGlkKTtcclxuICAgIGlmICghZm9ybWF0dGVyKSB7XHJcbiAgICAgICAgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KHRhcmdldExvY2FsZSwgYXNzaWduKHt9LCBmb3JtYXQsIG92ZXJyaWRlcykpO1xyXG4gICAgICAgIF9fbnVtYmVyRm9ybWF0dGVycy5zZXQoaWQsIGZvcm1hdHRlcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gIXBhcnQgPyBmb3JtYXR0ZXIuZm9ybWF0KHZhbHVlKSA6IGZvcm1hdHRlci5mb3JtYXRUb1BhcnRzKHZhbHVlKTtcclxufVxyXG4vKiogQGludGVybmFsICovXHJcbmNvbnN0IE5VTUJFUl9GT1JNQVRfT1BUSU9OU19LRVlTID0gW1xyXG4gICAgJ2xvY2FsZU1hdGNoZXInLFxyXG4gICAgJ3N0eWxlJyxcclxuICAgICdjdXJyZW5jeScsXHJcbiAgICAnY3VycmVuY3lEaXNwbGF5JyxcclxuICAgICdjdXJyZW5jeVNpZ24nLFxyXG4gICAgJ3VzZUdyb3VwaW5nJyxcclxuICAgICdtaW5pbXVtSW50ZWdlckRpZ2l0cycsXHJcbiAgICAnbWluaW11bUZyYWN0aW9uRGlnaXRzJyxcclxuICAgICdtYXhpbXVtRnJhY3Rpb25EaWdpdHMnLFxyXG4gICAgJ21pbmltdW1TaWduaWZpY2FudERpZ2l0cycsXHJcbiAgICAnbWF4aW11bVNpZ25pZmljYW50RGlnaXRzJyxcclxuICAgICdjb21wYWN0RGlzcGxheScsXHJcbiAgICAnbm90YXRpb24nLFxyXG4gICAgJ3NpZ25EaXNwbGF5JyxcclxuICAgICd1bml0JyxcclxuICAgICd1bml0RGlzcGxheScsXHJcbiAgICAncm91bmRpbmdNb2RlJyxcclxuICAgICdyb3VuZGluZ1ByaW9yaXR5JyxcclxuICAgICdyb3VuZGluZ0luY3JlbWVudCcsXHJcbiAgICAndHJhaWxpbmdaZXJvRGlzcGxheSdcclxuXTtcclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5mdW5jdGlvbiBwYXJzZU51bWJlckFyZ3MoLi4uYXJncykge1xyXG4gICAgY29uc3QgW2FyZzEsIGFyZzIsIGFyZzMsIGFyZzRdID0gYXJncztcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7fTtcclxuICAgIGxldCBvdmVycmlkZXMgPSB7fTtcclxuICAgIGlmICghaXNOdW1iZXIoYXJnMSkpIHtcclxuICAgICAgICB0aHJvdyBjcmVhdGVDb3JlRXJyb3IoQ29yZUVycm9yQ29kZXMuSU5WQUxJRF9BUkdVTUVOVCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB2YWx1ZSA9IGFyZzE7XHJcbiAgICBpZiAoaXNTdHJpbmcoYXJnMikpIHtcclxuICAgICAgICBvcHRpb25zLmtleSA9IGFyZzI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpc1BsYWluT2JqZWN0KGFyZzIpKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoYXJnMikuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoTlVNQkVSX0ZPUk1BVF9PUFRJT05TX0tFWVMuaW5jbHVkZXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgb3ZlcnJpZGVzW2tleV0gPSBhcmcyW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zW2tleV0gPSBhcmcyW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChpc1N0cmluZyhhcmczKSkge1xyXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gYXJnMztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzUGxhaW5PYmplY3QoYXJnMykpIHtcclxuICAgICAgICBvdmVycmlkZXMgPSBhcmczO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzUGxhaW5PYmplY3QoYXJnNCkpIHtcclxuICAgICAgICBvdmVycmlkZXMgPSBhcmc0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtvcHRpb25zLmtleSB8fCAnJywgdmFsdWUsIG9wdGlvbnMsIG92ZXJyaWRlc107XHJcbn1cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5mdW5jdGlvbiBjbGVhck51bWJlckZvcm1hdChjdHgsIGxvY2FsZSwgZm9ybWF0KSB7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gY3R4O1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZm9ybWF0KSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBgJHtsb2NhbGV9X18ke2tleX1gO1xyXG4gICAgICAgIGlmICghY29udGV4dC5fX251bWJlckZvcm1hdHRlcnMuaGFzKGlkKSkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29udGV4dC5fX251bWJlckZvcm1hdHRlcnMuZGVsZXRlKGlkKTtcclxuICAgIH1cclxufVxuXG4vLyBUT0RPOiB3ZSBjb3VsZCBub3QgZXhwb3J0cyBmb3IgTm9kZSBuYXRpdmUgRVMgTW91ZGxlcyB5ZXQuLi5cclxue1xyXG4gICAgaWYgKHR5cGVvZiBfX0lOVExJRllfUFJPRF9ERVZUT09MU19fICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICBnZXRHbG9iYWxUaGlzKCkuX19JTlRMSUZZX1BST0RfREVWVE9PTFNfXyA9IGZhbHNlO1xyXG4gICAgfVxyXG59XG5cbmV4cG9ydCB7IENvcmVFcnJvckNvZGVzLCBDb3JlV2FybkNvZGVzLCBEQVRFVElNRV9GT1JNQVRfT1BUSU9OU19LRVlTLCBERUZBVUxUX0xPQ0FMRSwgREVGQVVMVF9NRVNTQUdFX0RBVEFfVFlQRSwgTUlTU0lOR19SRVNPTFZFX1ZBTFVFLCBOT1RfUkVPU0xWRUQsIE5VTUJFUl9GT1JNQVRfT1BUSU9OU19LRVlTLCBWRVJTSU9OLCBjbGVhckNvbXBpbGVDYWNoZSwgY2xlYXJEYXRlVGltZUZvcm1hdCwgY2xlYXJOdW1iZXJGb3JtYXQsIGNvbXBpbGVUb0Z1bmN0aW9uLCBjcmVhdGVDb3JlQ29udGV4dCwgY3JlYXRlQ29yZUVycm9yLCBjcmVhdGVNZXNzYWdlQ29udGV4dCwgZGF0ZXRpbWUsIGZhbGxiYWNrV2l0aExvY2FsZUNoYWluLCBmYWxsYmFja1dpdGhTaW1wbGUsIGdldEFkZGl0aW9uYWxNZXRhLCBnZXREZXZUb29sc0hvb2ssIGdldEZhbGxiYWNrQ29udGV4dCwgZ2V0V2Fybk1lc3NhZ2UsIGhhbmRsZU1pc3NpbmcsIGluaXRJMThuRGV2VG9vbHMsIGlzTWVzc2FnZUZ1bmN0aW9uLCBpc1RyYW5zbGF0ZUZhbGxiYWNrV2FybiwgaXNUcmFuc2xhdGVNaXNzaW5nV2FybiwgbnVtYmVyLCBwYXJzZSwgcGFyc2VEYXRlVGltZUFyZ3MsIHBhcnNlTnVtYmVyQXJncywgcGFyc2VUcmFuc2xhdGVBcmdzLCByZWdpc3RlckxvY2FsZUZhbGxiYWNrZXIsIHJlZ2lzdGVyTWVzc2FnZUNvbXBpbGVyLCByZWdpc3Rlck1lc3NhZ2VSZXNvbHZlciwgcmVzb2x2ZVZhbHVlLCByZXNvbHZlV2l0aEtleVZhbHVlLCBzZXRBZGRpdGlvbmFsTWV0YSwgc2V0RGV2VG9vbHNIb29rLCBzZXRGYWxsYmFja0NvbnRleHQsIHRyYW5zbGF0ZSwgdHJhbnNsYXRlRGV2VG9vbHMsIHVwZGF0ZUZhbGxiYWNrTG9jYWxlIH07XG4iLCIvKiFcbiAgKiB2dWUtZGV2dG9vbHMgdjkuMi4yXG4gICogKGMpIDIwMjIga2F6dXlhIGthd2FndWNoaVxuICAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAgKi9cbmNvbnN0IFZ1ZURldlRvb2xzTGFiZWxzID0ge1xyXG4gICAgW1widnVlLWRldnRvb2xzLXBsdWdpbi12dWUtaTE4blwiIC8qIFBMVUdJTiAqL106ICdWdWUgSTE4biBkZXZ0b29scycsXHJcbiAgICBbXCJ2dWUtaTE4bi1yZXNvdXJjZS1pbnNwZWN0b3JcIiAvKiBDVVNUT01fSU5TUEVDVE9SICovXTogJ0kxOG4gUmVzb3VyY2VzJyxcclxuICAgIFtcInZ1ZS1pMThuLXRpbWVsaW5lXCIgLyogVElNRUxJTkUgKi9dOiAnVnVlIEkxOG4nXHJcbn07XHJcbmNvbnN0IFZ1ZURldlRvb2xzUGxhY2Vob2xkZXJzID0ge1xyXG4gICAgW1widnVlLWkxOG4tcmVzb3VyY2UtaW5zcGVjdG9yXCIgLyogQ1VTVE9NX0lOU1BFQ1RPUiAqL106ICdTZWFyY2ggZm9yIHNjb3BlcyAuLi4nXHJcbn07XHJcbmNvbnN0IFZ1ZURldlRvb2xzVGltZWxpbmVDb2xvcnMgPSB7XHJcbiAgICBbXCJ2dWUtaTE4bi10aW1lbGluZVwiIC8qIFRJTUVMSU5FICovXTogMHhmZmNkMTlcclxufTtcblxuZXhwb3J0IHsgVnVlRGV2VG9vbHNMYWJlbHMsIFZ1ZURldlRvb2xzUGxhY2Vob2xkZXJzLCBWdWVEZXZUb29sc1RpbWVsaW5lQ29sb3JzIH07XG4iLCIvKiFcbiAgKiB2dWUtaTE4biB2OS4yLjJcbiAgKiAoYykgMjAyMiBrYXp1eWEga2F3YWd1Y2hpXG4gICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICAqL1xuaW1wb3J0IHsgZ2V0R2xvYmFsVGhpcywgZm9ybWF0LCBtYWtlU3ltYm9sLCBpc1BsYWluT2JqZWN0LCBpc0FycmF5LCBpc1N0cmluZywgaGFzT3duLCBpc09iamVjdCwgaXNCb29sZWFuLCBpc1JlZ0V4cCwgaXNGdW5jdGlvbiwgaW5Ccm93c2VyLCBhc3NpZ24sIGlzTnVtYmVyLCB3YXJuLCBjcmVhdGVFbWl0dGVyLCBpc0VtcHR5T2JqZWN0IH0gZnJvbSAnQGludGxpZnkvc2hhcmVkJztcbmltcG9ydCB7IENvcmVXYXJuQ29kZXMsIENvbXBpbGVFcnJvckNvZGVzLCBjcmVhdGVDb21waWxlRXJyb3IsIERFRkFVTFRfTE9DQUxFLCB1cGRhdGVGYWxsYmFja0xvY2FsZSwgc2V0RmFsbGJhY2tDb250ZXh0LCBjcmVhdGVDb3JlQ29udGV4dCwgY2xlYXJEYXRlVGltZUZvcm1hdCwgY2xlYXJOdW1iZXJGb3JtYXQsIHNldEFkZGl0aW9uYWxNZXRhLCBnZXRGYWxsYmFja0NvbnRleHQsIE5PVF9SRU9TTFZFRCwgaXNUcmFuc2xhdGVGYWxsYmFja1dhcm4sIGlzVHJhbnNsYXRlTWlzc2luZ1dhcm4sIHBhcnNlVHJhbnNsYXRlQXJncywgdHJhbnNsYXRlLCBNSVNTSU5HX1JFU09MVkVfVkFMVUUsIHBhcnNlRGF0ZVRpbWVBcmdzLCBkYXRldGltZSwgcGFyc2VOdW1iZXJBcmdzLCBudW1iZXIsIGZhbGxiYWNrV2l0aExvY2FsZUNoYWluLCBOVU1CRVJfRk9STUFUX09QVElPTlNfS0VZUywgREFURVRJTUVfRk9STUFUX09QVElPTlNfS0VZUywgcmVnaXN0ZXJNZXNzYWdlUmVzb2x2ZXIsIHJlc29sdmVWYWx1ZSwgcmVnaXN0ZXJMb2NhbGVGYWxsYmFja2VyLCBzZXREZXZUb29sc0hvb2sgfSBmcm9tICdAaW50bGlmeS9jb3JlLWJhc2UnO1xuaW1wb3J0IHsgY3JlYXRlVk5vZGUsIFRleHQsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBnZXRDdXJyZW50SW5zdGFuY2UsIEZyYWdtZW50LCBoLCBlZmZlY3RTY29wZSwgaW5qZWN0LCBvbk1vdW50ZWQsIG9uVW5tb3VudGVkLCBzaGFsbG93UmVmLCBvbkJlZm9yZU1vdW50LCBpc1JlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBzZXR1cERldnRvb2xzUGx1Z2luIH0gZnJvbSAnQHZ1ZS9kZXZ0b29scy1hcGknO1xuaW1wb3J0IHsgVnVlRGV2VG9vbHNMYWJlbHMsIFZ1ZURldlRvb2xzUGxhY2Vob2xkZXJzLCBWdWVEZXZUb29sc1RpbWVsaW5lQ29sb3JzIH0gZnJvbSAnQGludGxpZnkvdnVlLWRldnRvb2xzJztcblxuLyoqXHJcbiAqIFZ1ZSBJMThuIFZlcnNpb25cclxuICpcclxuICogQHJlbWFya3NcclxuICogU2VtdmVyIGZvcm1hdC4gU2FtZSBmb3JtYXQgYXMgdGhlIHBhY2thZ2UuanNvbiBgdmVyc2lvbmAgZmllbGQuXHJcbiAqXHJcbiAqIEBWdWVJMThuR2VuZXJhbFxyXG4gKi9cclxuY29uc3QgVkVSU0lPTiA9ICc5LjIuMic7XHJcbi8qKlxyXG4gKiBUaGlzIGlzIG9ubHkgY2FsbGVkIGluIGVzbS1idW5kbGVyIGJ1aWxkcy5cclxuICogaXN0YW5idWwtaWdub3JlLW5leHRcclxuICovXHJcbmZ1bmN0aW9uIGluaXRGZWF0dXJlRmxhZ3MoKSB7XHJcbiAgICBsZXQgbmVlZFdhcm4gPSBmYWxzZTtcclxuICAgIGlmICh0eXBlb2YgX19WVUVfSTE4Tl9GVUxMX0lOU1RBTExfXyAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgbmVlZFdhcm4gPSB0cnVlO1xyXG4gICAgICAgIGdldEdsb2JhbFRoaXMoKS5fX1ZVRV9JMThOX0ZVTExfSU5TVEFMTF9fID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgX19WVUVfSTE4Tl9MRUdBQ1lfQVBJX18gIT09ICdib29sZWFuJykge1xyXG4gICAgICAgIG5lZWRXYXJuID0gdHJ1ZTtcclxuICAgICAgICBnZXRHbG9iYWxUaGlzKCkuX19WVUVfSTE4Tl9MRUdBQ1lfQVBJX18gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBfX0lOVExJRllfUFJPRF9ERVZUT09MU19fICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICBnZXRHbG9iYWxUaGlzKCkuX19JTlRMSUZZX1BST0RfREVWVE9PTFNfXyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSAmJiBuZWVkV2Fybikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihgWW91IGFyZSBydW5uaW5nIHRoZSBlc20tYnVuZGxlciBidWlsZCBvZiB2dWUtaTE4bi4gSXQgaXMgcmVjb21tZW5kZWQgdG8gYCArXHJcbiAgICAgICAgICAgIGBjb25maWd1cmUgeW91ciBidW5kbGVyIHRvIGV4cGxpY2l0bHkgcmVwbGFjZSBmZWF0dXJlIGZsYWcgZ2xvYmFscyBgICtcclxuICAgICAgICAgICAgYHdpdGggYm9vbGVhbiBsaXRlcmFscyB0byBnZXQgcHJvcGVyIHRyZWUtc2hha2luZyBpbiB0aGUgZmluYWwgYnVuZGxlLmApO1xyXG4gICAgfVxyXG59XG5cbmxldCBjb2RlJDEgPSBDb3JlV2FybkNvZGVzLl9fRVhURU5EX1BPSU5UX187XHJcbmNvbnN0IGluYyQxID0gKCkgPT4gKytjb2RlJDE7XHJcbmNvbnN0IEkxOG5XYXJuQ29kZXMgPSB7XHJcbiAgICBGQUxMQkFDS19UT19ST09UOiBjb2RlJDEsXHJcbiAgICBOT1RfU1VQUE9SVEVEX1BSRVNFUlZFOiBpbmMkMSgpLFxyXG4gICAgTk9UX1NVUFBPUlRFRF9GT1JNQVRURVI6IGluYyQxKCksXHJcbiAgICBOT1RfU1VQUE9SVEVEX1BSRVNFUlZFX0RJUkVDVElWRTogaW5jJDEoKSxcclxuICAgIE5PVF9TVVBQT1JURURfR0VUX0NIT0lDRV9JTkRFWDogaW5jJDEoKSxcclxuICAgIENPTVBPTkVOVF9OQU1FX0xFR0FDWV9DT01QQVRJQkxFOiBpbmMkMSgpLFxyXG4gICAgTk9UX0ZPVU5EX1BBUkVOVF9TQ09QRTogaW5jJDEoKSAvLyAxM1xyXG59O1xyXG5jb25zdCB3YXJuTWVzc2FnZXMgPSB7XHJcbiAgICBbSTE4bldhcm5Db2Rlcy5GQUxMQkFDS19UT19ST09UXTogYEZhbGwgYmFjayB0byB7dHlwZX0gJ3trZXl9JyB3aXRoIHJvb3QgbG9jYWxlLmAsXHJcbiAgICBbSTE4bldhcm5Db2Rlcy5OT1RfU1VQUE9SVEVEX1BSRVNFUlZFXTogYE5vdCBzdXBwb3J0ZWQgJ3ByZXNlcnZlJy5gLFxyXG4gICAgW0kxOG5XYXJuQ29kZXMuTk9UX1NVUFBPUlRFRF9GT1JNQVRURVJdOiBgTm90IHN1cHBvcnRlZCAnZm9ybWF0dGVyJy5gLFxyXG4gICAgW0kxOG5XYXJuQ29kZXMuTk9UX1NVUFBPUlRFRF9QUkVTRVJWRV9ESVJFQ1RJVkVdOiBgTm90IHN1cHBvcnRlZCAncHJlc2VydmVEaXJlY3RpdmVDb250ZW50Jy5gLFxyXG4gICAgW0kxOG5XYXJuQ29kZXMuTk9UX1NVUFBPUlRFRF9HRVRfQ0hPSUNFX0lOREVYXTogYE5vdCBzdXBwb3J0ZWQgJ2dldENob2ljZUluZGV4Jy5gLFxyXG4gICAgW0kxOG5XYXJuQ29kZXMuQ09NUE9ORU5UX05BTUVfTEVHQUNZX0NPTVBBVElCTEVdOiBgQ29tcG9uZW50IG5hbWUgbGVnYWN5IGNvbXBhdGlibGU6ICd7bmFtZX0nIC0+ICdpMThuJ2AsXHJcbiAgICBbSTE4bldhcm5Db2Rlcy5OT1RfRk9VTkRfUEFSRU5UX1NDT1BFXTogYE5vdCBmb3VuZCBwYXJlbnQgc2NvcGUuIHVzZSB0aGUgZ2xvYmFsIHNjb3BlLmBcclxufTtcclxuZnVuY3Rpb24gZ2V0V2Fybk1lc3NhZ2UoY29kZSwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIGZvcm1hdCh3YXJuTWVzc2FnZXNbY29kZV0sIC4uLmFyZ3MpO1xyXG59XG5cbmxldCBjb2RlID0gQ29tcGlsZUVycm9yQ29kZXMuX19FWFRFTkRfUE9JTlRfXztcclxuY29uc3QgaW5jID0gKCkgPT4gKytjb2RlO1xyXG5jb25zdCBJMThuRXJyb3JDb2RlcyA9IHtcclxuICAgIC8vIGNvbXBvc2VyIG1vZHVsZSBlcnJvcnNcclxuICAgIFVORVhQRUNURURfUkVUVVJOX1RZUEU6IGNvZGUsXHJcbiAgICAvLyBsZWdhY3kgbW9kdWxlIGVycm9yc1xyXG4gICAgSU5WQUxJRF9BUkdVTUVOVDogaW5jKCksXHJcbiAgICAvLyBpMThuIG1vZHVsZSBlcnJvcnNcclxuICAgIE1VU1RfQkVfQ0FMTF9TRVRVUF9UT1A6IGluYygpLFxyXG4gICAgTk9UX0lOU0xBTExFRDogaW5jKCksXHJcbiAgICBOT1RfQVZBSUxBQkxFX0lOX0xFR0FDWV9NT0RFOiBpbmMoKSxcclxuICAgIC8vIGRpcmVjdGl2ZSBtb2R1bGUgZXJyb3JzXHJcbiAgICBSRVFVSVJFRF9WQUxVRTogaW5jKCksXHJcbiAgICBJTlZBTElEX1ZBTFVFOiBpbmMoKSxcclxuICAgIC8vIHZ1ZS1kZXZ0b29scyBlcnJvcnNcclxuICAgIENBTk5PVF9TRVRVUF9WVUVfREVWVE9PTFNfUExVR0lOOiBpbmMoKSxcclxuICAgIE5PVF9JTlNMQUxMRURfV0lUSF9QUk9WSURFOiBpbmMoKSxcclxuICAgIC8vIHVuZXhwZWN0ZWQgZXJyb3JcclxuICAgIFVORVhQRUNURURfRVJST1I6IGluYygpLFxyXG4gICAgLy8gbm90IGNvbXBhdGlibGUgbGVnYWN5IHZ1ZS1pMThuIGNvbnN0cnVjdG9yXHJcbiAgICBOT1RfQ09NUEFUSUJMRV9MRUdBQ1lfVlVFX0kxOE46IGluYygpLFxyXG4gICAgLy8gYnJpZGdlIHN1cHBvcnQgdnVlIDIueCBvbmx5XHJcbiAgICBCUklER0VfU1VQUE9SVF9WVUVfMl9PTkxZOiBpbmMoKSxcclxuICAgIC8vIG5lZWQgdG8gZGVmaW5lIGBpMThuYCBvcHRpb24gaW4gYGFsbG93Q29tcG9zaXRpb246IHRydWVgIGFuZCBgdXNlU2NvcGU6ICdsb2NhbCcgYXQgYHVzZUkxOG5gYFxyXG4gICAgTVVTVF9ERUZJTkVfSTE4Tl9PUFRJT05fSU5fQUxMT1dfQ09NUE9TSVRJT046IGluYygpLFxyXG4gICAgLy8gTm90IGF2YWlsYWJsZSBDb21wb3N0aW9uIEFQSSBpbiBMZWdhY3kgQVBJIG1vZGUuIFBsZWFzZSBtYWtlIHN1cmUgdGhhdCB0aGUgbGVnYWN5IEFQSSBtb2RlIGlzIHdvcmtpbmcgcHJvcGVybHlcclxuICAgIE5PVF9BVkFJTEFCTEVfQ09NUE9TSVRJT05fSU5fTEVHQUNZOiBpbmMoKSxcclxuICAgIC8vIGZvciBlbmhhbmNlbWVudFxyXG4gICAgX19FWFRFTkRfUE9JTlRfXzogaW5jKCkgLy8gMjlcclxufTtcclxuZnVuY3Rpb24gY3JlYXRlSTE4bkVycm9yKGNvZGUsIC4uLmFyZ3MpIHtcclxuICAgIHJldHVybiBjcmVhdGVDb21waWxlRXJyb3IoY29kZSwgbnVsbCwgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpID8geyBtZXNzYWdlczogZXJyb3JNZXNzYWdlcywgYXJncyB9IDogdW5kZWZpbmVkKTtcclxufVxyXG5jb25zdCBlcnJvck1lc3NhZ2VzID0ge1xyXG4gICAgW0kxOG5FcnJvckNvZGVzLlVORVhQRUNURURfUkVUVVJOX1RZUEVdOiAnVW5leHBlY3RlZCByZXR1cm4gdHlwZSBpbiBjb21wb3NlcicsXHJcbiAgICBbSTE4bkVycm9yQ29kZXMuSU5WQUxJRF9BUkdVTUVOVF06ICdJbnZhbGlkIGFyZ3VtZW50JyxcclxuICAgIFtJMThuRXJyb3JDb2Rlcy5NVVNUX0JFX0NBTExfU0VUVVBfVE9QXTogJ011c3QgYmUgY2FsbGVkIGF0IHRoZSB0b3Agb2YgYSBgc2V0dXBgIGZ1bmN0aW9uJyxcclxuICAgIFtJMThuRXJyb3JDb2Rlcy5OT1RfSU5TTEFMTEVEXTogJ05lZWQgdG8gaW5zdGFsbCB3aXRoIGBhcHAudXNlYCBmdW5jdGlvbicsXHJcbiAgICBbSTE4bkVycm9yQ29kZXMuVU5FWFBFQ1RFRF9FUlJPUl06ICdVbmV4cGVjdGVkIGVycm9yJyxcclxuICAgIFtJMThuRXJyb3JDb2Rlcy5OT1RfQVZBSUxBQkxFX0lOX0xFR0FDWV9NT0RFXTogJ05vdCBhdmFpbGFibGUgaW4gbGVnYWN5IG1vZGUnLFxyXG4gICAgW0kxOG5FcnJvckNvZGVzLlJFUVVJUkVEX1ZBTFVFXTogYFJlcXVpcmVkIGluIHZhbHVlOiB7MH1gLFxyXG4gICAgW0kxOG5FcnJvckNvZGVzLklOVkFMSURfVkFMVUVdOiBgSW52YWxpZCB2YWx1ZWAsXHJcbiAgICBbSTE4bkVycm9yQ29kZXMuQ0FOTk9UX1NFVFVQX1ZVRV9ERVZUT09MU19QTFVHSU5dOiBgQ2Fubm90IHNldHVwIHZ1ZS1kZXZ0b29scyBwbHVnaW5gLFxyXG4gICAgW0kxOG5FcnJvckNvZGVzLk5PVF9JTlNMQUxMRURfV0lUSF9QUk9WSURFXTogJ05lZWQgdG8gaW5zdGFsbCB3aXRoIGBwcm92aWRlYCBmdW5jdGlvbicsXHJcbiAgICBbSTE4bkVycm9yQ29kZXMuTk9UX0NPTVBBVElCTEVfTEVHQUNZX1ZVRV9JMThOXTogJ05vdCBjb21wYXRpYmxlIGxlZ2FjeSBWdWVJMThuLicsXHJcbiAgICBbSTE4bkVycm9yQ29kZXMuQlJJREdFX1NVUFBPUlRfVlVFXzJfT05MWV06ICd2dWUtaTE4bi1icmlkZ2Ugc3VwcG9ydCBWdWUgMi54IG9ubHknLFxyXG4gICAgW0kxOG5FcnJvckNvZGVzLk1VU1RfREVGSU5FX0kxOE5fT1BUSU9OX0lOX0FMTE9XX0NPTVBPU0lUSU9OXTogJ011c3QgZGVmaW5lIOKAmGkxOG7igJkgb3B0aW9uIG9yIGN1c3RvbSBibG9jayBpbiBDb21wb3NpdGlvbiBBUEkgd2l0aCB1c2luZyBsb2NhbCBzY29wZSBpbiBMZWdhY3kgQVBJIG1vZGUnLFxyXG4gICAgW0kxOG5FcnJvckNvZGVzLk5PVF9BVkFJTEFCTEVfQ09NUE9TSVRJT05fSU5fTEVHQUNZXTogJ05vdCBhdmFpbGFibGUgQ29tcG9zdGlvbiBBUEkgaW4gTGVnYWN5IEFQSSBtb2RlLiBQbGVhc2UgbWFrZSBzdXJlIHRoYXQgdGhlIGxlZ2FjeSBBUEkgbW9kZSBpcyB3b3JraW5nIHByb3Blcmx5J1xyXG59O1xuXG5jb25zdCBUcmFuc3JhdGVWTm9kZVN5bWJvbCA9IFxyXG4vKiAjX19QVVJFX18qLyBtYWtlU3ltYm9sKCdfX3RyYW5zcmF0ZVZOb2RlJyk7XHJcbmNvbnN0IERhdGV0aW1lUGFydHNTeW1ib2wgPSAvKiAjX19QVVJFX18qLyBtYWtlU3ltYm9sKCdfX2RhdGV0aW1lUGFydHMnKTtcclxuY29uc3QgTnVtYmVyUGFydHNTeW1ib2wgPSAvKiAjX19QVVJFX18qLyBtYWtlU3ltYm9sKCdfX251bWJlclBhcnRzJyk7XHJcbmNvbnN0IEVuYWJsZUVtaXR0ZXIgPSAvKiAjX19QVVJFX18qLyBtYWtlU3ltYm9sKCdfX2VuYWJsZUVtaXR0ZXInKTtcclxuY29uc3QgRGlzYWJsZUVtaXR0ZXIgPSAvKiAjX19QVVJFX18qLyBtYWtlU3ltYm9sKCdfX2Rpc2FibGVFbWl0dGVyJyk7XHJcbmNvbnN0IFNldFBsdXJhbFJ1bGVzU3ltYm9sID0gbWFrZVN5bWJvbCgnX19zZXRQbHVyYWxSdWxlcycpO1xyXG5tYWtlU3ltYm9sKCdfX2ludGxpZnlNZXRhJyk7XHJcbmNvbnN0IEluZWpjdFdpdGhPcHRpb24gPSAvKiAjX19QVVJFX18qLyBtYWtlU3ltYm9sKCdfX2luamVjdFdpdGhPcHRpb24nKTtcclxuY29uc3QgX19WVUVfSTE4Tl9CUklER0VfXyA9ICAnX19WVUVfSTE4Tl9CUklER0VfXyc7XG5cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cclxuLyoqXHJcbiAqIFRyYW5zZm9ybSBmbGF0IGpzb24gaW4gb2JqIHRvIG5vcm1hbCBqc29uIGluIG9ialxyXG4gKi9cclxuZnVuY3Rpb24gaGFuZGxlRmxhdEpzb24ob2JqKSB7XHJcbiAgICAvLyBjaGVjayBvYmpcclxuICAgIGlmICghaXNPYmplY3Qob2JqKSkge1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcclxuICAgICAgICAvLyBjaGVjayBrZXlcclxuICAgICAgICBpZiAoIWhhc093bihvYmosIGtleSkpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGhhbmRsZSBmb3Igbm9ybWFsIGpzb25cclxuICAgICAgICBpZiAoIWtleS5pbmNsdWRlcygnLicpKSB7XHJcbiAgICAgICAgICAgIC8vIHJlY3Vyc2l2ZSBwcm9jZXNzIHZhbHVlIGlmIHZhbHVlIGlzIGFsc28gYSBvYmplY3RcclxuICAgICAgICAgICAgaWYgKGlzT2JqZWN0KG9ialtrZXldKSkge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlRmxhdEpzb24ob2JqW2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGhhbmRsZSBmb3IgZmxhdCBqc29uLCB0cmFuc2Zvcm0gdG8gbm9ybWFsIGpzb25cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gZ28gdG8gdGhlIGxhc3Qgb2JqZWN0XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YktleXMgPSBrZXkuc3BsaXQoJy4nKTtcclxuICAgICAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gc3ViS2V5cy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudE9iaiA9IG9iajtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXN0SW5kZXg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoc3ViS2V5c1tpXSBpbiBjdXJyZW50T2JqKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPYmpbc3ViS2V5c1tpXV0gPSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRPYmogPSBjdXJyZW50T2JqW3N1YktleXNbaV1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBsYXN0IG9iamVjdCB2YWx1ZSwgZGVsZXRlIG9sZCBwcm9wZXJ0eVxyXG4gICAgICAgICAgICBjdXJyZW50T2JqW3N1YktleXNbbGFzdEluZGV4XV0gPSBvYmpba2V5XTtcclxuICAgICAgICAgICAgZGVsZXRlIG9ialtrZXldO1xyXG4gICAgICAgICAgICAvLyByZWN1cnNpdmUgcHJvY2VzcyB2YWx1ZSBpZiB2YWx1ZSBpcyBhbHNvIGEgb2JqZWN0XHJcbiAgICAgICAgICAgIGlmIChpc09iamVjdChjdXJyZW50T2JqW3N1YktleXNbbGFzdEluZGV4XV0pKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVGbGF0SnNvbihjdXJyZW50T2JqW3N1YktleXNbbGFzdEluZGV4XV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iajtcclxufVxyXG5mdW5jdGlvbiBnZXRMb2NhbGVNZXNzYWdlcyhsb2NhbGUsIG9wdGlvbnMpIHtcclxuICAgIGNvbnN0IHsgbWVzc2FnZXMsIF9faTE4biwgbWVzc2FnZVJlc29sdmVyLCBmbGF0SnNvbiB9ID0gb3B0aW9ucztcclxuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gICAgY29uc3QgcmV0ID0gaXNQbGFpbk9iamVjdChtZXNzYWdlcylcclxuICAgICAgICA/IG1lc3NhZ2VzXHJcbiAgICAgICAgOiBpc0FycmF5KF9faTE4bilcclxuICAgICAgICAgICAgPyB7fVxyXG4gICAgICAgICAgICA6IHsgW2xvY2FsZV06IHt9IH07XHJcbiAgICAvLyBtZXJnZSBsb2NhbGUgbWVzc2FnZXMgb2YgaTE4biBjdXN0b20gYmxvY2tcclxuICAgIGlmIChpc0FycmF5KF9faTE4bikpIHtcclxuICAgICAgICBfX2kxOG4uZm9yRWFjaChjdXN0b20gPT4ge1xyXG4gICAgICAgICAgICBpZiAoJ2xvY2FsZScgaW4gY3VzdG9tICYmICdyZXNvdXJjZScgaW4gY3VzdG9tKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGxvY2FsZSwgcmVzb3VyY2UgfSA9IGN1c3RvbTtcclxuICAgICAgICAgICAgICAgIGlmIChsb2NhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXRbbG9jYWxlXSA9IHJldFtsb2NhbGVdIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZXBDb3B5KHJlc291cmNlLCByZXRbbG9jYWxlXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWVwQ29weShyZXNvdXJjZSwgcmV0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlzU3RyaW5nKGN1c3RvbSkgJiYgZGVlcENvcHkoSlNPTi5wYXJzZShjdXN0b20pLCByZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBoYW5kbGUgbWVzc2FnZXMgZm9yIGZsYXQganNvblxyXG4gICAgaWYgKG1lc3NhZ2VSZXNvbHZlciA9PSBudWxsICYmIGZsYXRKc29uKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmV0KSB7XHJcbiAgICAgICAgICAgIGlmIChoYXNPd24ocmV0LCBrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVGbGF0SnNvbihyZXRba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG59XHJcbmNvbnN0IGlzTm90T2JqZWN0T3JJc0FycmF5ID0gKHZhbCkgPT4gIWlzT2JqZWN0KHZhbCkgfHwgaXNBcnJheSh2YWwpO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSwgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlc1xyXG5mdW5jdGlvbiBkZWVwQ29weShzcmMsIGRlcykge1xyXG4gICAgLy8gc3JjIGFuZCBkZXMgc2hvdWxkIGJvdGggYmUgb2JqZWN0cywgYW5kIG5vbiBvZiB0aGVuIGNhbiBiZSBhIGFycmF5XHJcbiAgICBpZiAoaXNOb3RPYmplY3RPcklzQXJyYXkoc3JjKSB8fCBpc05vdE9iamVjdE9ySXNBcnJheShkZXMpKSB7XHJcbiAgICAgICAgdGhyb3cgY3JlYXRlSTE4bkVycm9yKEkxOG5FcnJvckNvZGVzLklOVkFMSURfVkFMVUUpO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gc3JjKSB7XHJcbiAgICAgICAgaWYgKGhhc093bihzcmMsIGtleSkpIHtcclxuICAgICAgICAgICAgaWYgKGlzTm90T2JqZWN0T3JJc0FycmF5KHNyY1trZXldKSB8fCBpc05vdE9iamVjdE9ySXNBcnJheShkZXNba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIHJlcGxhY2Ugd2l0aCBzcmNba2V5XSB3aGVuOlxyXG4gICAgICAgICAgICAgICAgLy8gc3JjW2tleV0gb3IgZGVzW2tleV0gaXMgbm90IGEgb2JqZWN0LCBvclxyXG4gICAgICAgICAgICAgICAgLy8gc3JjW2tleV0gb3IgZGVzW2tleV0gaXMgYSBhcnJheVxyXG4gICAgICAgICAgICAgICAgZGVzW2tleV0gPSBzcmNba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHNyY1trZXldIGFuZCBkZXNba2V5XSBhcmUgYm90aCBvYmplY3QsIG1lcmdlIHRoZW1cclxuICAgICAgICAgICAgICAgIGRlZXBDb3B5KHNyY1trZXldLCBkZXNba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50T3B0aW9ucyhpbnN0YW5jZSkge1xyXG4gICAgcmV0dXJuIGluc3RhbmNlLnR5cGUgO1xyXG59XHJcbmZ1bmN0aW9uIGFkanVzdEkxOG5SZXNvdXJjZXMoZ2xvYmFsLCBvcHRpb25zLCBjb21wb25lbnRPcHRpb25zIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4pIHtcclxuICAgIGxldCBtZXNzYWdlcyA9IGlzT2JqZWN0KG9wdGlvbnMubWVzc2FnZXMpID8gb3B0aW9ucy5tZXNzYWdlcyA6IHt9O1xyXG4gICAgaWYgKCdfX2kxOG5HbG9iYWwnIGluIGNvbXBvbmVudE9wdGlvbnMpIHtcclxuICAgICAgICBtZXNzYWdlcyA9IGdldExvY2FsZU1lc3NhZ2VzKGdsb2JhbC5sb2NhbGUudmFsdWUsIHtcclxuICAgICAgICAgICAgbWVzc2FnZXMsXHJcbiAgICAgICAgICAgIF9faTE4bjogY29tcG9uZW50T3B0aW9ucy5fX2kxOG5HbG9iYWxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIG1lcmdlIGxvY2FsZSBtZXNzYWdlc1xyXG4gICAgY29uc3QgbG9jYWxlcyA9IE9iamVjdC5rZXlzKG1lc3NhZ2VzKTtcclxuICAgIGlmIChsb2NhbGVzLmxlbmd0aCkge1xyXG4gICAgICAgIGxvY2FsZXMuZm9yRWFjaChsb2NhbGUgPT4ge1xyXG4gICAgICAgICAgICBnbG9iYWwubWVyZ2VMb2NhbGVNZXNzYWdlKGxvY2FsZSwgbWVzc2FnZXNbbG9jYWxlXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB7XHJcbiAgICAgICAgLy8gbWVyZ2UgZGF0ZXRpbWUgZm9ybWF0c1xyXG4gICAgICAgIGlmIChpc09iamVjdChvcHRpb25zLmRhdGV0aW1lRm9ybWF0cykpIHtcclxuICAgICAgICAgICAgY29uc3QgbG9jYWxlcyA9IE9iamVjdC5rZXlzKG9wdGlvbnMuZGF0ZXRpbWVGb3JtYXRzKTtcclxuICAgICAgICAgICAgaWYgKGxvY2FsZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbGVzLmZvckVhY2gobG9jYWxlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWwubWVyZ2VEYXRlVGltZUZvcm1hdChsb2NhbGUsIG9wdGlvbnMuZGF0ZXRpbWVGb3JtYXRzW2xvY2FsZV0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbWVyZ2UgbnVtYmVyIGZvcm1hdHNcclxuICAgICAgICBpZiAoaXNPYmplY3Qob3B0aW9ucy5udW1iZXJGb3JtYXRzKSkge1xyXG4gICAgICAgICAgICBjb25zdCBsb2NhbGVzID0gT2JqZWN0LmtleXMob3B0aW9ucy5udW1iZXJGb3JtYXRzKTtcclxuICAgICAgICAgICAgaWYgKGxvY2FsZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbGVzLmZvckVhY2gobG9jYWxlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWwubWVyZ2VOdW1iZXJGb3JtYXQobG9jYWxlLCBvcHRpb25zLm51bWJlckZvcm1hdHNbbG9jYWxlXSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjcmVhdGVUZXh0Tm9kZShrZXkpIHtcclxuICAgIHJldHVybiBjcmVhdGVWTm9kZShUZXh0LCBudWxsLCBrZXksIDApXHJcbiAgICAgICAgO1xyXG59XHJcbi8qIGVzbGludC1lbmFibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXHJcbi8vIGV4dGVuZCBWTm9kZSBpbnRlcmZhY2VcclxuY29uc3QgREVWVE9PTFNfTUVUQSA9ICdfX0lOVExJRllfTUVUQV9fJztcclxubGV0IGNvbXBvc2VySUQgPSAwO1xyXG5mdW5jdGlvbiBkZWZpbmVDb3JlTWlzc2luZ0hhbmRsZXIobWlzc2luZykge1xyXG4gICAgcmV0dXJuICgoY3R4LCBsb2NhbGUsIGtleSwgdHlwZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBtaXNzaW5nKGxvY2FsZSwga2V5LCBnZXRDdXJyZW50SW5zdGFuY2UoKSB8fCB1bmRlZmluZWQsIHR5cGUpO1xyXG4gICAgfSk7XHJcbn1cclxuLy8gZm9yIEludGxpZnkgRGV2VG9vbHNcclxuY29uc3QgZ2V0TWV0YUluZm8gPSAgKCkgPT4ge1xyXG4gICAgY29uc3QgaW5zdGFuY2UgPSBnZXRDdXJyZW50SW5zdGFuY2UoKTtcclxuICAgIGxldCBtZXRhID0gbnVsbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICByZXR1cm4gaW5zdGFuY2UgJiYgKG1ldGEgPSBnZXRDb21wb25lbnRPcHRpb25zKGluc3RhbmNlKVtERVZUT09MU19NRVRBXSlcclxuICAgICAgICA/IHsgW0RFVlRPT0xTX01FVEFdOiBtZXRhIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICAgICAgOiBudWxsO1xyXG59O1xyXG4vKipcclxuICogQ3JlYXRlIGNvbXBvc2VyIGludGVyZmFjZSBmYWN0b3J5XHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXNcclxuZnVuY3Rpb24gY3JlYXRlQ29tcG9zZXIob3B0aW9ucyA9IHt9LCBWdWVJMThuTGVnYWN5KSB7XHJcbiAgICBjb25zdCB7IF9fcm9vdCB9ID0gb3B0aW9ucztcclxuICAgIGNvbnN0IF9pc0dsb2JhbCA9IF9fcm9vdCA9PT0gdW5kZWZpbmVkO1xyXG4gICAgbGV0IF9pbmhlcml0TG9jYWxlID0gaXNCb29sZWFuKG9wdGlvbnMuaW5oZXJpdExvY2FsZSlcclxuICAgICAgICA/IG9wdGlvbnMuaW5oZXJpdExvY2FsZVxyXG4gICAgICAgIDogdHJ1ZTtcclxuICAgIGNvbnN0IF9sb2NhbGUgPSByZWYoXHJcbiAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgIF9fcm9vdCAmJiBfaW5oZXJpdExvY2FsZVxyXG4gICAgICAgID8gX19yb290LmxvY2FsZS52YWx1ZVxyXG4gICAgICAgIDogaXNTdHJpbmcob3B0aW9ucy5sb2NhbGUpXHJcbiAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcclxuICAgICAgICAgICAgOiBERUZBVUxUX0xPQ0FMRSk7XHJcbiAgICBjb25zdCBfZmFsbGJhY2tMb2NhbGUgPSByZWYoXHJcbiAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgIF9fcm9vdCAmJiBfaW5oZXJpdExvY2FsZVxyXG4gICAgICAgID8gX19yb290LmZhbGxiYWNrTG9jYWxlLnZhbHVlXHJcbiAgICAgICAgOiBpc1N0cmluZyhvcHRpb25zLmZhbGxiYWNrTG9jYWxlKSB8fFxyXG4gICAgICAgICAgICBpc0FycmF5KG9wdGlvbnMuZmFsbGJhY2tMb2NhbGUpIHx8XHJcbiAgICAgICAgICAgIGlzUGxhaW5PYmplY3Qob3B0aW9ucy5mYWxsYmFja0xvY2FsZSkgfHxcclxuICAgICAgICAgICAgb3B0aW9ucy5mYWxsYmFja0xvY2FsZSA9PT0gZmFsc2VcclxuICAgICAgICAgICAgPyBvcHRpb25zLmZhbGxiYWNrTG9jYWxlXHJcbiAgICAgICAgICAgIDogX2xvY2FsZS52YWx1ZSk7XHJcbiAgICBjb25zdCBfbWVzc2FnZXMgPSByZWYoZ2V0TG9jYWxlTWVzc2FnZXMoX2xvY2FsZS52YWx1ZSwgb3B0aW9ucykpO1xyXG4gICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICBjb25zdCBfZGF0ZXRpbWVGb3JtYXRzID0gcmVmKGlzUGxhaW5PYmplY3Qob3B0aW9ucy5kYXRldGltZUZvcm1hdHMpXHJcbiAgICAgICAgICAgID8gb3B0aW9ucy5kYXRldGltZUZvcm1hdHNcclxuICAgICAgICAgICAgOiB7IFtfbG9jYWxlLnZhbHVlXToge30gfSlcclxuICAgICAgICA7XHJcbiAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgIGNvbnN0IF9udW1iZXJGb3JtYXRzID0gcmVmKGlzUGxhaW5PYmplY3Qob3B0aW9ucy5udW1iZXJGb3JtYXRzKVxyXG4gICAgICAgICAgICA/IG9wdGlvbnMubnVtYmVyRm9ybWF0c1xyXG4gICAgICAgICAgICA6IHsgW19sb2NhbGUudmFsdWVdOiB7fSB9KVxyXG4gICAgICAgIDtcclxuICAgIC8vIHdhcm5pbmcgc3VwcHJlc3Mgb3B0aW9uc1xyXG4gICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICBsZXQgX21pc3NpbmdXYXJuID0gX19yb290XHJcbiAgICAgICAgPyBfX3Jvb3QubWlzc2luZ1dhcm5cclxuICAgICAgICA6IGlzQm9vbGVhbihvcHRpb25zLm1pc3NpbmdXYXJuKSB8fCBpc1JlZ0V4cChvcHRpb25zLm1pc3NpbmdXYXJuKVxyXG4gICAgICAgICAgICA/IG9wdGlvbnMubWlzc2luZ1dhcm5cclxuICAgICAgICAgICAgOiB0cnVlO1xyXG4gICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICBsZXQgX2ZhbGxiYWNrV2FybiA9IF9fcm9vdFxyXG4gICAgICAgID8gX19yb290LmZhbGxiYWNrV2FyblxyXG4gICAgICAgIDogaXNCb29sZWFuKG9wdGlvbnMuZmFsbGJhY2tXYXJuKSB8fCBpc1JlZ0V4cChvcHRpb25zLmZhbGxiYWNrV2FybilcclxuICAgICAgICAgICAgPyBvcHRpb25zLmZhbGxiYWNrV2FyblxyXG4gICAgICAgICAgICA6IHRydWU7XHJcbiAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgIGxldCBfZmFsbGJhY2tSb290ID0gX19yb290XHJcbiAgICAgICAgPyBfX3Jvb3QuZmFsbGJhY2tSb290XHJcbiAgICAgICAgOiBpc0Jvb2xlYW4ob3B0aW9ucy5mYWxsYmFja1Jvb3QpXHJcbiAgICAgICAgICAgID8gb3B0aW9ucy5mYWxsYmFja1Jvb3RcclxuICAgICAgICAgICAgOiB0cnVlO1xyXG4gICAgLy8gY29uZmlndXJlIGZhbGwgYmFjayB0byByb290XHJcbiAgICBsZXQgX2ZhbGxiYWNrRm9ybWF0ID0gISFvcHRpb25zLmZhbGxiYWNrRm9ybWF0O1xyXG4gICAgLy8gcnVudGltZSBtaXNzaW5nXHJcbiAgICBsZXQgX21pc3NpbmcgPSBpc0Z1bmN0aW9uKG9wdGlvbnMubWlzc2luZykgPyBvcHRpb25zLm1pc3NpbmcgOiBudWxsO1xyXG4gICAgbGV0IF9ydW50aW1lTWlzc2luZyA9IGlzRnVuY3Rpb24ob3B0aW9ucy5taXNzaW5nKVxyXG4gICAgICAgID8gZGVmaW5lQ29yZU1pc3NpbmdIYW5kbGVyKG9wdGlvbnMubWlzc2luZylcclxuICAgICAgICA6IG51bGw7XHJcbiAgICAvLyBwb3N0VHJhbnNsYXRpb24gaGFuZGxlclxyXG4gICAgbGV0IF9wb3N0VHJhbnNsYXRpb24gPSBpc0Z1bmN0aW9uKG9wdGlvbnMucG9zdFRyYW5zbGF0aW9uKVxyXG4gICAgICAgID8gb3B0aW9ucy5wb3N0VHJhbnNsYXRpb25cclxuICAgICAgICA6IG51bGw7XHJcbiAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgIGxldCBfd2Fybkh0bWxNZXNzYWdlID0gX19yb290XHJcbiAgICAgICAgPyBfX3Jvb3Qud2Fybkh0bWxNZXNzYWdlXHJcbiAgICAgICAgOiBpc0Jvb2xlYW4ob3B0aW9ucy53YXJuSHRtbE1lc3NhZ2UpXHJcbiAgICAgICAgICAgID8gb3B0aW9ucy53YXJuSHRtbE1lc3NhZ2VcclxuICAgICAgICAgICAgOiB0cnVlO1xyXG4gICAgbGV0IF9lc2NhcGVQYXJhbWV0ZXIgPSAhIW9wdGlvbnMuZXNjYXBlUGFyYW1ldGVyO1xyXG4gICAgLy8gY3VzdG9tIGxpbmtlZCBtb2RpZmllcnNcclxuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gICAgY29uc3QgX21vZGlmaWVycyA9IF9fcm9vdFxyXG4gICAgICAgID8gX19yb290Lm1vZGlmaWVyc1xyXG4gICAgICAgIDogaXNQbGFpbk9iamVjdChvcHRpb25zLm1vZGlmaWVycylcclxuICAgICAgICAgICAgPyBvcHRpb25zLm1vZGlmaWVyc1xyXG4gICAgICAgICAgICA6IHt9O1xyXG4gICAgLy8gcGx1cmFsUnVsZXNcclxuICAgIGxldCBfcGx1cmFsUnVsZXMgPSBvcHRpb25zLnBsdXJhbFJ1bGVzIHx8IChfX3Jvb3QgJiYgX19yb290LnBsdXJhbFJ1bGVzKTtcclxuICAgIC8vIHJ1bnRpbWUgY29udGV4dFxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1jb25zdFxyXG4gICAgbGV0IF9jb250ZXh0O1xyXG4gICAgY29uc3QgZ2V0Q29yZUNvbnRleHQgPSAoKSA9PiB7XHJcbiAgICAgICAgX2lzR2xvYmFsICYmIHNldEZhbGxiYWNrQ29udGV4dChudWxsKTtcclxuICAgICAgICBjb25zdCBjdHhPcHRpb25zID0ge1xyXG4gICAgICAgICAgICB2ZXJzaW9uOiBWRVJTSU9OLFxyXG4gICAgICAgICAgICBsb2NhbGU6IF9sb2NhbGUudmFsdWUsXHJcbiAgICAgICAgICAgIGZhbGxiYWNrTG9jYWxlOiBfZmFsbGJhY2tMb2NhbGUudmFsdWUsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBfbWVzc2FnZXMudmFsdWUsXHJcbiAgICAgICAgICAgIG1vZGlmaWVyczogX21vZGlmaWVycyxcclxuICAgICAgICAgICAgcGx1cmFsUnVsZXM6IF9wbHVyYWxSdWxlcyxcclxuICAgICAgICAgICAgbWlzc2luZzogX3J1bnRpbWVNaXNzaW5nID09PSBudWxsID8gdW5kZWZpbmVkIDogX3J1bnRpbWVNaXNzaW5nLFxyXG4gICAgICAgICAgICBtaXNzaW5nV2FybjogX21pc3NpbmdXYXJuLFxyXG4gICAgICAgICAgICBmYWxsYmFja1dhcm46IF9mYWxsYmFja1dhcm4sXHJcbiAgICAgICAgICAgIGZhbGxiYWNrRm9ybWF0OiBfZmFsbGJhY2tGb3JtYXQsXHJcbiAgICAgICAgICAgIHVucmVzb2x2aW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBwb3N0VHJhbnNsYXRpb246IF9wb3N0VHJhbnNsYXRpb24gPT09IG51bGwgPyB1bmRlZmluZWQgOiBfcG9zdFRyYW5zbGF0aW9uLFxyXG4gICAgICAgICAgICB3YXJuSHRtbE1lc3NhZ2U6IF93YXJuSHRtbE1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGVzY2FwZVBhcmFtZXRlcjogX2VzY2FwZVBhcmFtZXRlcixcclxuICAgICAgICAgICAgbWVzc2FnZVJlc29sdmVyOiBvcHRpb25zLm1lc3NhZ2VSZXNvbHZlcixcclxuICAgICAgICAgICAgX19tZXRhOiB7IGZyYW1ld29yazogJ3Z1ZScgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjdHhPcHRpb25zLmRhdGV0aW1lRm9ybWF0cyA9IF9kYXRldGltZUZvcm1hdHMudmFsdWU7XHJcbiAgICAgICAgICAgIGN0eE9wdGlvbnMubnVtYmVyRm9ybWF0cyA9IF9udW1iZXJGb3JtYXRzLnZhbHVlO1xyXG4gICAgICAgICAgICBjdHhPcHRpb25zLl9fZGF0ZXRpbWVGb3JtYXR0ZXJzID0gaXNQbGFpbk9iamVjdChfY29udGV4dClcclxuICAgICAgICAgICAgICAgID8gX2NvbnRleHQuX19kYXRldGltZUZvcm1hdHRlcnNcclxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBjdHhPcHRpb25zLl9fbnVtYmVyRm9ybWF0dGVycyA9IGlzUGxhaW5PYmplY3QoX2NvbnRleHQpXHJcbiAgICAgICAgICAgICAgICA/IF9jb250ZXh0Ll9fbnVtYmVyRm9ybWF0dGVyc1xyXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykpIHtcclxuICAgICAgICAgICAgY3R4T3B0aW9ucy5fX3ZfZW1pdHRlciA9IGlzUGxhaW5PYmplY3QoX2NvbnRleHQpXHJcbiAgICAgICAgICAgICAgICA/IF9jb250ZXh0Ll9fdl9lbWl0dGVyXHJcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY3R4ID0gY3JlYXRlQ29yZUNvbnRleHQoY3R4T3B0aW9ucyk7XHJcbiAgICAgICAgX2lzR2xvYmFsICYmIHNldEZhbGxiYWNrQ29udGV4dChjdHgpO1xyXG4gICAgICAgIHJldHVybiBjdHg7XHJcbiAgICB9O1xyXG4gICAgX2NvbnRleHQgPSBnZXRDb3JlQ29udGV4dCgpO1xyXG4gICAgdXBkYXRlRmFsbGJhY2tMb2NhbGUoX2NvbnRleHQsIF9sb2NhbGUudmFsdWUsIF9mYWxsYmFja0xvY2FsZS52YWx1ZSk7XHJcbiAgICAvLyB0cmFjayByZWFjdGl2aXR5XHJcbiAgICBmdW5jdGlvbiB0cmFja1JlYWN0aXZpdHlWYWx1ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIF9sb2NhbGUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBfZmFsbGJhY2tMb2NhbGUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBfbWVzc2FnZXMudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBfZGF0ZXRpbWVGb3JtYXRzLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgX251bWJlckZvcm1hdHMudmFsdWVcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICA7XHJcbiAgICB9XHJcbiAgICAvLyBsb2NhbGVcclxuICAgIGNvbnN0IGxvY2FsZSA9IGNvbXB1dGVkKHtcclxuICAgICAgICBnZXQ6ICgpID0+IF9sb2NhbGUudmFsdWUsXHJcbiAgICAgICAgc2V0OiB2YWwgPT4ge1xyXG4gICAgICAgICAgICBfbG9jYWxlLnZhbHVlID0gdmFsO1xyXG4gICAgICAgICAgICBfY29udGV4dC5sb2NhbGUgPSBfbG9jYWxlLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gZmFsbGJhY2tMb2NhbGVcclxuICAgIGNvbnN0IGZhbGxiYWNrTG9jYWxlID0gY29tcHV0ZWQoe1xyXG4gICAgICAgIGdldDogKCkgPT4gX2ZhbGxiYWNrTG9jYWxlLnZhbHVlLFxyXG4gICAgICAgIHNldDogdmFsID0+IHtcclxuICAgICAgICAgICAgX2ZhbGxiYWNrTG9jYWxlLnZhbHVlID0gdmFsO1xyXG4gICAgICAgICAgICBfY29udGV4dC5mYWxsYmFja0xvY2FsZSA9IF9mYWxsYmFja0xvY2FsZS52YWx1ZTtcclxuICAgICAgICAgICAgdXBkYXRlRmFsbGJhY2tMb2NhbGUoX2NvbnRleHQsIF9sb2NhbGUudmFsdWUsIHZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBtZXNzYWdlc1xyXG4gICAgY29uc3QgbWVzc2FnZXMgPSBjb21wdXRlZCgoKSA9PiBfbWVzc2FnZXMudmFsdWUpO1xyXG4gICAgLy8gZGF0ZXRpbWVGb3JtYXRzXHJcbiAgICBjb25zdCBkYXRldGltZUZvcm1hdHMgPSAvKiAjX19QVVJFX18qLyBjb21wdXRlZCgoKSA9PiBfZGF0ZXRpbWVGb3JtYXRzLnZhbHVlKTtcclxuICAgIC8vIG51bWJlckZvcm1hdHNcclxuICAgIGNvbnN0IG51bWJlckZvcm1hdHMgPSAvKiAjX19QVVJFX18qLyBjb21wdXRlZCgoKSA9PiBfbnVtYmVyRm9ybWF0cy52YWx1ZSk7XHJcbiAgICAvLyBnZXRQb3N0VHJhbnNsYXRpb25IYW5kbGVyXHJcbiAgICBmdW5jdGlvbiBnZXRQb3N0VHJhbnNsYXRpb25IYW5kbGVyKCkge1xyXG4gICAgICAgIHJldHVybiBpc0Z1bmN0aW9uKF9wb3N0VHJhbnNsYXRpb24pID8gX3Bvc3RUcmFuc2xhdGlvbiA6IG51bGw7XHJcbiAgICB9XHJcbiAgICAvLyBzZXRQb3N0VHJhbnNsYXRpb25IYW5kbGVyXHJcbiAgICBmdW5jdGlvbiBzZXRQb3N0VHJhbnNsYXRpb25IYW5kbGVyKGhhbmRsZXIpIHtcclxuICAgICAgICBfcG9zdFRyYW5zbGF0aW9uID0gaGFuZGxlcjtcclxuICAgICAgICBfY29udGV4dC5wb3N0VHJhbnNsYXRpb24gPSBoYW5kbGVyO1xyXG4gICAgfVxyXG4gICAgLy8gZ2V0TWlzc2luZ0hhbmRsZXJcclxuICAgIGZ1bmN0aW9uIGdldE1pc3NpbmdIYW5kbGVyKCkge1xyXG4gICAgICAgIHJldHVybiBfbWlzc2luZztcclxuICAgIH1cclxuICAgIC8vIHNldE1pc3NpbmdIYW5kbGVyXHJcbiAgICBmdW5jdGlvbiBzZXRNaXNzaW5nSGFuZGxlcihoYW5kbGVyKSB7XHJcbiAgICAgICAgaWYgKGhhbmRsZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgX3J1bnRpbWVNaXNzaW5nID0gZGVmaW5lQ29yZU1pc3NpbmdIYW5kbGVyKGhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfbWlzc2luZyA9IGhhbmRsZXI7XHJcbiAgICAgICAgX2NvbnRleHQubWlzc2luZyA9IF9ydW50aW1lTWlzc2luZztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzUmVzb2x2ZWRUcmFuc2xhdGVNZXNzYWdlKHR5cGUsIGFyZyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICkge1xyXG4gICAgICAgIHJldHVybiB0eXBlICE9PSAndHJhbnNsYXRlJyB8fCAhYXJnLnJlc29sdmVkTWVzc2FnZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHdyYXBXaXRoRGVwcyA9IChmbiwgYXJndW1lbnRQYXJzZXIsIHdhcm5UeXBlLCBmYWxsYmFja1N1Y2Nlc3MsIGZhbGxiYWNrRmFpbCwgc3VjY2Vzc0NvbmRpdGlvbikgPT4ge1xyXG4gICAgICAgIHRyYWNrUmVhY3Rpdml0eVZhbHVlcygpOyAvLyB0cmFjayByZWFjdGl2ZSBkZXBlbmRlbmN5XHJcbiAgICAgICAgLy8gTk9URTogZXhwZXJpbWVudGFsICEhXHJcbiAgICAgICAgbGV0IHJldDtcclxuICAgICAgICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHx8IF9fSU5UTElGWV9QUk9EX0RFVlRPT0xTX18pIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHNldEFkZGl0aW9uYWxNZXRhKGdldE1ldGFJbmZvKCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFfaXNHbG9iYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5mYWxsYmFja0NvbnRleHQgPSBfX3Jvb3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBnZXRGYWxsYmFja0NvbnRleHQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldCA9IGZuKF9jb250ZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIHNldEFkZGl0aW9uYWxNZXRhKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFfaXNHbG9iYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5mYWxsYmFja0NvbnRleHQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldCA9IGZuKF9jb250ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTnVtYmVyKHJldCkgJiYgcmV0ID09PSBOT1RfUkVPU0xWRUQpIHtcclxuICAgICAgICAgICAgY29uc3QgW2tleSwgYXJnMl0gPSBhcmd1bWVudFBhcnNlcigpO1xyXG4gICAgICAgICAgICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpICYmXHJcbiAgICAgICAgICAgICAgICBfX3Jvb3QgJiZcclxuICAgICAgICAgICAgICAgIGlzU3RyaW5nKGtleSkgJiZcclxuICAgICAgICAgICAgICAgIGlzUmVzb2x2ZWRUcmFuc2xhdGVNZXNzYWdlKHdhcm5UeXBlLCBhcmcyKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9mYWxsYmFja1Jvb3QgJiZcclxuICAgICAgICAgICAgICAgICAgICAoaXNUcmFuc2xhdGVGYWxsYmFja1dhcm4oX2ZhbGxiYWNrV2Fybiwga2V5KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1RyYW5zbGF0ZU1pc3NpbmdXYXJuKF9taXNzaW5nV2Fybiwga2V5KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB3YXJuKGdldFdhcm5NZXNzYWdlKEkxOG5XYXJuQ29kZXMuRkFMTEJBQ0tfVE9fUk9PVCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHdhcm5UeXBlXHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gZm9yIHZ1ZS1kZXZ0b29scyB0aW1lbGluZSBldmVudFxyXG4gICAgICAgICAgICAgICAgaWYgKChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgX192X2VtaXR0ZXI6IGVtaXR0ZXIgfSA9IF9jb250ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbWl0dGVyICYmIF9mYWxsYmFja1Jvb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1pdHRlci5lbWl0KFwiZmFsbGJhY2tcIiAvKiBGQUxCQUNLICovLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB3YXJuVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiAnZ2xvYmFsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwSWQ6IGAke3dhcm5UeXBlfToke2tleX1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gX19yb290ICYmIF9mYWxsYmFja1Jvb3RcclxuICAgICAgICAgICAgICAgID8gZmFsbGJhY2tTdWNjZXNzKF9fcm9vdClcclxuICAgICAgICAgICAgICAgIDogZmFsbGJhY2tGYWlsKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN1Y2Nlc3NDb25kaXRpb24ocmV0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICAgICAgICAgICAgdGhyb3cgY3JlYXRlSTE4bkVycm9yKEkxOG5FcnJvckNvZGVzLlVORVhQRUNURURfUkVUVVJOX1RZUEUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyB0XHJcbiAgICBmdW5jdGlvbiB0KC4uLmFyZ3MpIHtcclxuICAgICAgICByZXR1cm4gd3JhcFdpdGhEZXBzKGNvbnRleHQgPT4gUmVmbGVjdC5hcHBseSh0cmFuc2xhdGUsIG51bGwsIFtjb250ZXh0LCAuLi5hcmdzXSksICgpID0+IHBhcnNlVHJhbnNsYXRlQXJncyguLi5hcmdzKSwgJ3RyYW5zbGF0ZScsIHJvb3QgPT4gUmVmbGVjdC5hcHBseShyb290LnQsIHJvb3QsIFsuLi5hcmdzXSksIGtleSA9PiBrZXksIHZhbCA9PiBpc1N0cmluZyh2YWwpKTtcclxuICAgIH1cclxuICAgIC8vIHJ0XHJcbiAgICBmdW5jdGlvbiBydCguLi5hcmdzKSB7XHJcbiAgICAgICAgY29uc3QgW2FyZzEsIGFyZzIsIGFyZzNdID0gYXJncztcclxuICAgICAgICBpZiAoYXJnMyAmJiAhaXNPYmplY3QoYXJnMykpIHtcclxuICAgICAgICAgICAgdGhyb3cgY3JlYXRlSTE4bkVycm9yKEkxOG5FcnJvckNvZGVzLklOVkFMSURfQVJHVU1FTlQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdCguLi5bYXJnMSwgYXJnMiwgYXNzaWduKHsgcmVzb2x2ZWRNZXNzYWdlOiB0cnVlIH0sIGFyZzMgfHwge30pXSk7XHJcbiAgICB9XHJcbiAgICAvLyBkXHJcbiAgICBmdW5jdGlvbiBkKC4uLmFyZ3MpIHtcclxuICAgICAgICByZXR1cm4gd3JhcFdpdGhEZXBzKGNvbnRleHQgPT4gUmVmbGVjdC5hcHBseShkYXRldGltZSwgbnVsbCwgW2NvbnRleHQsIC4uLmFyZ3NdKSwgKCkgPT4gcGFyc2VEYXRlVGltZUFyZ3MoLi4uYXJncyksICdkYXRldGltZSBmb3JtYXQnLCByb290ID0+IFJlZmxlY3QuYXBwbHkocm9vdC5kLCByb290LCBbLi4uYXJnc10pLCAoKSA9PiBNSVNTSU5HX1JFU09MVkVfVkFMVUUsIHZhbCA9PiBpc1N0cmluZyh2YWwpKTtcclxuICAgIH1cclxuICAgIC8vIG5cclxuICAgIGZ1bmN0aW9uIG4oLi4uYXJncykge1xyXG4gICAgICAgIHJldHVybiB3cmFwV2l0aERlcHMoY29udGV4dCA9PiBSZWZsZWN0LmFwcGx5KG51bWJlciwgbnVsbCwgW2NvbnRleHQsIC4uLmFyZ3NdKSwgKCkgPT4gcGFyc2VOdW1iZXJBcmdzKC4uLmFyZ3MpLCAnbnVtYmVyIGZvcm1hdCcsIHJvb3QgPT4gUmVmbGVjdC5hcHBseShyb290Lm4sIHJvb3QsIFsuLi5hcmdzXSksICgpID0+IE1JU1NJTkdfUkVTT0xWRV9WQUxVRSwgdmFsID0+IGlzU3RyaW5nKHZhbCkpO1xyXG4gICAgfVxyXG4gICAgLy8gZm9yIGN1c3RvbSBwcm9jZXNzb3JcclxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWx1ZXMpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWVzLm1hcCh2YWwgPT4gaXNTdHJpbmcodmFsKSB8fCBpc051bWJlcih2YWwpIHx8IGlzQm9vbGVhbih2YWwpXHJcbiAgICAgICAgICAgID8gY3JlYXRlVGV4dE5vZGUoU3RyaW5nKHZhbCkpXHJcbiAgICAgICAgICAgIDogdmFsKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGludGVycG9sYXRlID0gKHZhbCkgPT4gdmFsO1xyXG4gICAgY29uc3QgcHJvY2Vzc29yID0ge1xyXG4gICAgICAgIG5vcm1hbGl6ZSxcclxuICAgICAgICBpbnRlcnBvbGF0ZSxcclxuICAgICAgICB0eXBlOiAndm5vZGUnXHJcbiAgICB9O1xyXG4gICAgLy8gdHJhbnNyYXRlVk5vZGUsIHVzaW5nIGZvciBgaTE4bi10YCBjb21wb25lbnRcclxuICAgIGZ1bmN0aW9uIHRyYW5zcmF0ZVZOb2RlKC4uLmFyZ3MpIHtcclxuICAgICAgICByZXR1cm4gd3JhcFdpdGhEZXBzKGNvbnRleHQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmV0O1xyXG4gICAgICAgICAgICBjb25zdCBfY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBfY29udGV4dC5wcm9jZXNzb3IgPSBwcm9jZXNzb3I7XHJcbiAgICAgICAgICAgICAgICByZXQgPSBSZWZsZWN0LmFwcGx5KHRyYW5zbGF0ZSwgbnVsbCwgW19jb250ZXh0LCAuLi5hcmdzXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICBfY29udGV4dC5wcm9jZXNzb3IgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgfSwgKCkgPT4gcGFyc2VUcmFuc2xhdGVBcmdzKC4uLmFyZ3MpLCAndHJhbnNsYXRlJywgXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICByb290ID0+IHJvb3RbVHJhbnNyYXRlVk5vZGVTeW1ib2xdKC4uLmFyZ3MpLCBrZXkgPT4gW2NyZWF0ZVRleHROb2RlKGtleSldLCB2YWwgPT4gaXNBcnJheSh2YWwpKTtcclxuICAgIH1cclxuICAgIC8vIG51bWJlclBhcnRzLCB1c2luZyBmb3IgYGkxOG4tbmAgY29tcG9uZW50XHJcbiAgICBmdW5jdGlvbiBudW1iZXJQYXJ0cyguLi5hcmdzKSB7XHJcbiAgICAgICAgcmV0dXJuIHdyYXBXaXRoRGVwcyhjb250ZXh0ID0+IFJlZmxlY3QuYXBwbHkobnVtYmVyLCBudWxsLCBbY29udGV4dCwgLi4uYXJnc10pLCAoKSA9PiBwYXJzZU51bWJlckFyZ3MoLi4uYXJncyksICdudW1iZXIgZm9ybWF0JywgXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICByb290ID0+IHJvb3RbTnVtYmVyUGFydHNTeW1ib2xdKC4uLmFyZ3MpLCAoKSA9PiBbXSwgdmFsID0+IGlzU3RyaW5nKHZhbCkgfHwgaXNBcnJheSh2YWwpKTtcclxuICAgIH1cclxuICAgIC8vIGRhdGV0aW1lUGFydHMsIHVzaW5nIGZvciBgaTE4bi1kYCBjb21wb25lbnRcclxuICAgIGZ1bmN0aW9uIGRhdGV0aW1lUGFydHMoLi4uYXJncykge1xyXG4gICAgICAgIHJldHVybiB3cmFwV2l0aERlcHMoY29udGV4dCA9PiBSZWZsZWN0LmFwcGx5KGRhdGV0aW1lLCBudWxsLCBbY29udGV4dCwgLi4uYXJnc10pLCAoKSA9PiBwYXJzZURhdGVUaW1lQXJncyguLi5hcmdzKSwgJ2RhdGV0aW1lIGZvcm1hdCcsIFxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICAgICAgcm9vdCA9PiByb290W0RhdGV0aW1lUGFydHNTeW1ib2xdKC4uLmFyZ3MpLCAoKSA9PiBbXSwgdmFsID0+IGlzU3RyaW5nKHZhbCkgfHwgaXNBcnJheSh2YWwpKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldFBsdXJhbFJ1bGVzKHJ1bGVzKSB7XHJcbiAgICAgICAgX3BsdXJhbFJ1bGVzID0gcnVsZXM7XHJcbiAgICAgICAgX2NvbnRleHQucGx1cmFsUnVsZXMgPSBfcGx1cmFsUnVsZXM7XHJcbiAgICB9XHJcbiAgICAvLyB0ZVxyXG4gICAgZnVuY3Rpb24gdGUoa2V5LCBsb2NhbGUpIHtcclxuICAgICAgICBjb25zdCB0YXJnZXRMb2NhbGUgPSBpc1N0cmluZyhsb2NhbGUpID8gbG9jYWxlIDogX2xvY2FsZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZ2V0TG9jYWxlTWVzc2FnZSh0YXJnZXRMb2NhbGUpO1xyXG4gICAgICAgIHJldHVybiBfY29udGV4dC5tZXNzYWdlUmVzb2x2ZXIobWVzc2FnZSwga2V5KSAhPT0gbnVsbDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlc29sdmVNZXNzYWdlcyhrZXkpIHtcclxuICAgICAgICBsZXQgbWVzc2FnZXMgPSBudWxsO1xyXG4gICAgICAgIGNvbnN0IGxvY2FsZXMgPSBmYWxsYmFja1dpdGhMb2NhbGVDaGFpbihfY29udGV4dCwgX2ZhbGxiYWNrTG9jYWxlLnZhbHVlLCBfbG9jYWxlLnZhbHVlKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0TG9jYWxlTWVzc2FnZXMgPSBfbWVzc2FnZXMudmFsdWVbbG9jYWxlc1tpXV0gfHwge307XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VWYWx1ZSA9IF9jb250ZXh0Lm1lc3NhZ2VSZXNvbHZlcih0YXJnZXRMb2NhbGVNZXNzYWdlcywga2V5KTtcclxuICAgICAgICAgICAgaWYgKG1lc3NhZ2VWYWx1ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlcyA9IG1lc3NhZ2VWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtZXNzYWdlcztcclxuICAgIH1cclxuICAgIC8vIHRtXHJcbiAgICBmdW5jdGlvbiB0bShrZXkpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlcyA9IHJlc29sdmVNZXNzYWdlcyhrZXkpO1xyXG4gICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gICAgICAgIHJldHVybiBtZXNzYWdlcyAhPSBudWxsXHJcbiAgICAgICAgICAgID8gbWVzc2FnZXNcclxuICAgICAgICAgICAgOiBfX3Jvb3RcclxuICAgICAgICAgICAgICAgID8gX19yb290LnRtKGtleSkgfHwge31cclxuICAgICAgICAgICAgICAgIDoge307XHJcbiAgICB9XHJcbiAgICAvLyBnZXRMb2NhbGVNZXNzYWdlXHJcbiAgICBmdW5jdGlvbiBnZXRMb2NhbGVNZXNzYWdlKGxvY2FsZSkge1xyXG4gICAgICAgIHJldHVybiAoX21lc3NhZ2VzLnZhbHVlW2xvY2FsZV0gfHwge30pO1xyXG4gICAgfVxyXG4gICAgLy8gc2V0TG9jYWxlTWVzc2FnZVxyXG4gICAgZnVuY3Rpb24gc2V0TG9jYWxlTWVzc2FnZShsb2NhbGUsIG1lc3NhZ2UpIHtcclxuICAgICAgICBfbWVzc2FnZXMudmFsdWVbbG9jYWxlXSA9IG1lc3NhZ2U7XHJcbiAgICAgICAgX2NvbnRleHQubWVzc2FnZXMgPSBfbWVzc2FnZXMudmFsdWU7XHJcbiAgICB9XHJcbiAgICAvLyBtZXJnZUxvY2FsZU1lc3NhZ2VcclxuICAgIGZ1bmN0aW9uIG1lcmdlTG9jYWxlTWVzc2FnZShsb2NhbGUsIG1lc3NhZ2UpIHtcclxuICAgICAgICBfbWVzc2FnZXMudmFsdWVbbG9jYWxlXSA9IF9tZXNzYWdlcy52YWx1ZVtsb2NhbGVdIHx8IHt9O1xyXG4gICAgICAgIGRlZXBDb3B5KG1lc3NhZ2UsIF9tZXNzYWdlcy52YWx1ZVtsb2NhbGVdKTtcclxuICAgICAgICBfY29udGV4dC5tZXNzYWdlcyA9IF9tZXNzYWdlcy52YWx1ZTtcclxuICAgIH1cclxuICAgIC8vIGdldERhdGVUaW1lRm9ybWF0XHJcbiAgICBmdW5jdGlvbiBnZXREYXRlVGltZUZvcm1hdChsb2NhbGUpIHtcclxuICAgICAgICByZXR1cm4gX2RhdGV0aW1lRm9ybWF0cy52YWx1ZVtsb2NhbGVdIHx8IHt9O1xyXG4gICAgfVxyXG4gICAgLy8gc2V0RGF0ZVRpbWVGb3JtYXRcclxuICAgIGZ1bmN0aW9uIHNldERhdGVUaW1lRm9ybWF0KGxvY2FsZSwgZm9ybWF0KSB7XHJcbiAgICAgICAgX2RhdGV0aW1lRm9ybWF0cy52YWx1ZVtsb2NhbGVdID0gZm9ybWF0O1xyXG4gICAgICAgIF9jb250ZXh0LmRhdGV0aW1lRm9ybWF0cyA9IF9kYXRldGltZUZvcm1hdHMudmFsdWU7XHJcbiAgICAgICAgY2xlYXJEYXRlVGltZUZvcm1hdChfY29udGV4dCwgbG9jYWxlLCBmb3JtYXQpO1xyXG4gICAgfVxyXG4gICAgLy8gbWVyZ2VEYXRlVGltZUZvcm1hdFxyXG4gICAgZnVuY3Rpb24gbWVyZ2VEYXRlVGltZUZvcm1hdChsb2NhbGUsIGZvcm1hdCkge1xyXG4gICAgICAgIF9kYXRldGltZUZvcm1hdHMudmFsdWVbbG9jYWxlXSA9IGFzc2lnbihfZGF0ZXRpbWVGb3JtYXRzLnZhbHVlW2xvY2FsZV0gfHwge30sIGZvcm1hdCk7XHJcbiAgICAgICAgX2NvbnRleHQuZGF0ZXRpbWVGb3JtYXRzID0gX2RhdGV0aW1lRm9ybWF0cy52YWx1ZTtcclxuICAgICAgICBjbGVhckRhdGVUaW1lRm9ybWF0KF9jb250ZXh0LCBsb2NhbGUsIGZvcm1hdCk7XHJcbiAgICB9XHJcbiAgICAvLyBnZXROdW1iZXJGb3JtYXRcclxuICAgIGZ1bmN0aW9uIGdldE51bWJlckZvcm1hdChsb2NhbGUpIHtcclxuICAgICAgICByZXR1cm4gX251bWJlckZvcm1hdHMudmFsdWVbbG9jYWxlXSB8fCB7fTtcclxuICAgIH1cclxuICAgIC8vIHNldE51bWJlckZvcm1hdFxyXG4gICAgZnVuY3Rpb24gc2V0TnVtYmVyRm9ybWF0KGxvY2FsZSwgZm9ybWF0KSB7XHJcbiAgICAgICAgX251bWJlckZvcm1hdHMudmFsdWVbbG9jYWxlXSA9IGZvcm1hdDtcclxuICAgICAgICBfY29udGV4dC5udW1iZXJGb3JtYXRzID0gX251bWJlckZvcm1hdHMudmFsdWU7XHJcbiAgICAgICAgY2xlYXJOdW1iZXJGb3JtYXQoX2NvbnRleHQsIGxvY2FsZSwgZm9ybWF0KTtcclxuICAgIH1cclxuICAgIC8vIG1lcmdlTnVtYmVyRm9ybWF0XHJcbiAgICBmdW5jdGlvbiBtZXJnZU51bWJlckZvcm1hdChsb2NhbGUsIGZvcm1hdCkge1xyXG4gICAgICAgIF9udW1iZXJGb3JtYXRzLnZhbHVlW2xvY2FsZV0gPSBhc3NpZ24oX251bWJlckZvcm1hdHMudmFsdWVbbG9jYWxlXSB8fCB7fSwgZm9ybWF0KTtcclxuICAgICAgICBfY29udGV4dC5udW1iZXJGb3JtYXRzID0gX251bWJlckZvcm1hdHMudmFsdWU7XHJcbiAgICAgICAgY2xlYXJOdW1iZXJGb3JtYXQoX2NvbnRleHQsIGxvY2FsZSwgZm9ybWF0KTtcclxuICAgIH1cclxuICAgIC8vIGZvciBkZWJ1Z1xyXG4gICAgY29tcG9zZXJJRCsrO1xyXG4gICAgLy8gd2F0Y2ggcm9vdCBsb2NhbGUgJiBmYWxsYmFja0xvY2FsZVxyXG4gICAgaWYgKF9fcm9vdCAmJiBpbkJyb3dzZXIpIHtcclxuICAgICAgICB3YXRjaChfX3Jvb3QubG9jYWxlLCAodmFsKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChfaW5oZXJpdExvY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgX2xvY2FsZS52YWx1ZSA9IHZhbDtcclxuICAgICAgICAgICAgICAgIF9jb250ZXh0LmxvY2FsZSA9IHZhbDtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUZhbGxiYWNrTG9jYWxlKF9jb250ZXh0LCBfbG9jYWxlLnZhbHVlLCBfZmFsbGJhY2tMb2NhbGUudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd2F0Y2goX19yb290LmZhbGxiYWNrTG9jYWxlLCAodmFsKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChfaW5oZXJpdExvY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgX2ZhbGxiYWNrTG9jYWxlLnZhbHVlID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgX2NvbnRleHQuZmFsbGJhY2tMb2NhbGUgPSB2YWw7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVGYWxsYmFja0xvY2FsZShfY29udGV4dCwgX2xvY2FsZS52YWx1ZSwgX2ZhbGxiYWNrTG9jYWxlLnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gZGVmaW5lIGJhc2ljIGNvbXBvc2l0aW9uIEFQSSFcclxuICAgIGNvbnN0IGNvbXBvc2VyID0ge1xyXG4gICAgICAgIGlkOiBjb21wb3NlcklELFxyXG4gICAgICAgIGxvY2FsZSxcclxuICAgICAgICBmYWxsYmFja0xvY2FsZSxcclxuICAgICAgICBnZXQgaW5oZXJpdExvY2FsZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9pbmhlcml0TG9jYWxlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0IGluaGVyaXRMb2NhbGUodmFsKSB7XHJcbiAgICAgICAgICAgIF9pbmhlcml0TG9jYWxlID0gdmFsO1xyXG4gICAgICAgICAgICBpZiAodmFsICYmIF9fcm9vdCkge1xyXG4gICAgICAgICAgICAgICAgX2xvY2FsZS52YWx1ZSA9IF9fcm9vdC5sb2NhbGUudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBfZmFsbGJhY2tMb2NhbGUudmFsdWUgPSBfX3Jvb3QuZmFsbGJhY2tMb2NhbGUudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVGYWxsYmFja0xvY2FsZShfY29udGV4dCwgX2xvY2FsZS52YWx1ZSwgX2ZhbGxiYWNrTG9jYWxlLnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0IGF2YWlsYWJsZUxvY2FsZXMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhfbWVzc2FnZXMudmFsdWUpLnNvcnQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1lc3NhZ2VzLFxyXG4gICAgICAgIGdldCBtb2RpZmllcnMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfbW9kaWZpZXJzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0IHBsdXJhbFJ1bGVzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3BsdXJhbFJ1bGVzIHx8IHt9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0IGlzR2xvYmFsKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX2lzR2xvYmFsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0IG1pc3NpbmdXYXJuKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX21pc3NpbmdXYXJuO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0IG1pc3NpbmdXYXJuKHZhbCkge1xyXG4gICAgICAgICAgICBfbWlzc2luZ1dhcm4gPSB2YWw7XHJcbiAgICAgICAgICAgIF9jb250ZXh0Lm1pc3NpbmdXYXJuID0gX21pc3NpbmdXYXJuO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0IGZhbGxiYWNrV2FybigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9mYWxsYmFja1dhcm47XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQgZmFsbGJhY2tXYXJuKHZhbCkge1xyXG4gICAgICAgICAgICBfZmFsbGJhY2tXYXJuID0gdmFsO1xyXG4gICAgICAgICAgICBfY29udGV4dC5mYWxsYmFja1dhcm4gPSBfZmFsbGJhY2tXYXJuO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0IGZhbGxiYWNrUm9vdCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9mYWxsYmFja1Jvb3Q7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQgZmFsbGJhY2tSb290KHZhbCkge1xyXG4gICAgICAgICAgICBfZmFsbGJhY2tSb290ID0gdmFsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0IGZhbGxiYWNrRm9ybWF0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX2ZhbGxiYWNrRm9ybWF0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0IGZhbGxiYWNrRm9ybWF0KHZhbCkge1xyXG4gICAgICAgICAgICBfZmFsbGJhY2tGb3JtYXQgPSB2YWw7XHJcbiAgICAgICAgICAgIF9jb250ZXh0LmZhbGxiYWNrRm9ybWF0ID0gX2ZhbGxiYWNrRm9ybWF0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0IHdhcm5IdG1sTWVzc2FnZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF93YXJuSHRtbE1lc3NhZ2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQgd2Fybkh0bWxNZXNzYWdlKHZhbCkge1xyXG4gICAgICAgICAgICBfd2Fybkh0bWxNZXNzYWdlID0gdmFsO1xyXG4gICAgICAgICAgICBfY29udGV4dC53YXJuSHRtbE1lc3NhZ2UgPSB2YWw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXQgZXNjYXBlUGFyYW1ldGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX2VzY2FwZVBhcmFtZXRlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldCBlc2NhcGVQYXJhbWV0ZXIodmFsKSB7XHJcbiAgICAgICAgICAgIF9lc2NhcGVQYXJhbWV0ZXIgPSB2YWw7XHJcbiAgICAgICAgICAgIF9jb250ZXh0LmVzY2FwZVBhcmFtZXRlciA9IHZhbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHQsXHJcbiAgICAgICAgZ2V0TG9jYWxlTWVzc2FnZSxcclxuICAgICAgICBzZXRMb2NhbGVNZXNzYWdlLFxyXG4gICAgICAgIG1lcmdlTG9jYWxlTWVzc2FnZSxcclxuICAgICAgICBnZXRQb3N0VHJhbnNsYXRpb25IYW5kbGVyLFxyXG4gICAgICAgIHNldFBvc3RUcmFuc2xhdGlvbkhhbmRsZXIsXHJcbiAgICAgICAgZ2V0TWlzc2luZ0hhbmRsZXIsXHJcbiAgICAgICAgc2V0TWlzc2luZ0hhbmRsZXIsXHJcbiAgICAgICAgW1NldFBsdXJhbFJ1bGVzU3ltYm9sXTogc2V0UGx1cmFsUnVsZXNcclxuICAgIH07XHJcbiAgICB7XHJcbiAgICAgICAgY29tcG9zZXIuZGF0ZXRpbWVGb3JtYXRzID0gZGF0ZXRpbWVGb3JtYXRzO1xyXG4gICAgICAgIGNvbXBvc2VyLm51bWJlckZvcm1hdHMgPSBudW1iZXJGb3JtYXRzO1xyXG4gICAgICAgIGNvbXBvc2VyLnJ0ID0gcnQ7XHJcbiAgICAgICAgY29tcG9zZXIudGUgPSB0ZTtcclxuICAgICAgICBjb21wb3Nlci50bSA9IHRtO1xyXG4gICAgICAgIGNvbXBvc2VyLmQgPSBkO1xyXG4gICAgICAgIGNvbXBvc2VyLm4gPSBuO1xyXG4gICAgICAgIGNvbXBvc2VyLmdldERhdGVUaW1lRm9ybWF0ID0gZ2V0RGF0ZVRpbWVGb3JtYXQ7XHJcbiAgICAgICAgY29tcG9zZXIuc2V0RGF0ZVRpbWVGb3JtYXQgPSBzZXREYXRlVGltZUZvcm1hdDtcclxuICAgICAgICBjb21wb3Nlci5tZXJnZURhdGVUaW1lRm9ybWF0ID0gbWVyZ2VEYXRlVGltZUZvcm1hdDtcclxuICAgICAgICBjb21wb3Nlci5nZXROdW1iZXJGb3JtYXQgPSBnZXROdW1iZXJGb3JtYXQ7XHJcbiAgICAgICAgY29tcG9zZXIuc2V0TnVtYmVyRm9ybWF0ID0gc2V0TnVtYmVyRm9ybWF0O1xyXG4gICAgICAgIGNvbXBvc2VyLm1lcmdlTnVtYmVyRm9ybWF0ID0gbWVyZ2VOdW1iZXJGb3JtYXQ7XHJcbiAgICAgICAgY29tcG9zZXJbSW5lamN0V2l0aE9wdGlvbl0gPSBvcHRpb25zLl9faW5qZWN0V2l0aE9wdGlvbjtcclxuICAgICAgICBjb21wb3NlcltUcmFuc3JhdGVWTm9kZVN5bWJvbF0gPSB0cmFuc3JhdGVWTm9kZTtcclxuICAgICAgICBjb21wb3NlcltEYXRldGltZVBhcnRzU3ltYm9sXSA9IGRhdGV0aW1lUGFydHM7XHJcbiAgICAgICAgY29tcG9zZXJbTnVtYmVyUGFydHNTeW1ib2xdID0gbnVtYmVyUGFydHM7XHJcbiAgICB9XHJcbiAgICAvLyBmb3IgdnVlLWRldnRvb2xzIHRpbWVsaW5lIGV2ZW50XHJcbiAgICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpKSB7XHJcbiAgICAgICAgY29tcG9zZXJbRW5hYmxlRW1pdHRlcl0gPSAoZW1pdHRlcikgPT4ge1xyXG4gICAgICAgICAgICBfY29udGV4dC5fX3ZfZW1pdHRlciA9IGVtaXR0ZXI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb21wb3NlcltEaXNhYmxlRW1pdHRlcl0gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIF9jb250ZXh0Ll9fdl9lbWl0dGVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29tcG9zZXI7XHJcbn1cclxuLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cclxuLyoqXHJcbiAqIENvbnZlcnQgdG8gSTE4biBDb21wb3NlciBPcHRpb25zIGZyb20gVnVlSTE4biBPcHRpb25zXHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZnVuY3Rpb24gY29udmVydENvbXBvc2VyT3B0aW9ucyhvcHRpb25zKSB7XHJcbiAgICBjb25zdCBsb2NhbGUgPSBpc1N0cmluZyhvcHRpb25zLmxvY2FsZSkgPyBvcHRpb25zLmxvY2FsZSA6IERFRkFVTFRfTE9DQUxFO1xyXG4gICAgY29uc3QgZmFsbGJhY2tMb2NhbGUgPSBpc1N0cmluZyhvcHRpb25zLmZhbGxiYWNrTG9jYWxlKSB8fFxyXG4gICAgICAgIGlzQXJyYXkob3B0aW9ucy5mYWxsYmFja0xvY2FsZSkgfHxcclxuICAgICAgICBpc1BsYWluT2JqZWN0KG9wdGlvbnMuZmFsbGJhY2tMb2NhbGUpIHx8XHJcbiAgICAgICAgb3B0aW9ucy5mYWxsYmFja0xvY2FsZSA9PT0gZmFsc2VcclxuICAgICAgICA/IG9wdGlvbnMuZmFsbGJhY2tMb2NhbGVcclxuICAgICAgICA6IGxvY2FsZTtcclxuICAgIGNvbnN0IG1pc3NpbmcgPSBpc0Z1bmN0aW9uKG9wdGlvbnMubWlzc2luZykgPyBvcHRpb25zLm1pc3NpbmcgOiB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBtaXNzaW5nV2FybiA9IGlzQm9vbGVhbihvcHRpb25zLnNpbGVudFRyYW5zbGF0aW9uV2FybikgfHxcclxuICAgICAgICBpc1JlZ0V4cChvcHRpb25zLnNpbGVudFRyYW5zbGF0aW9uV2FybilcclxuICAgICAgICA/ICFvcHRpb25zLnNpbGVudFRyYW5zbGF0aW9uV2FyblxyXG4gICAgICAgIDogdHJ1ZTtcclxuICAgIGNvbnN0IGZhbGxiYWNrV2FybiA9IGlzQm9vbGVhbihvcHRpb25zLnNpbGVudEZhbGxiYWNrV2FybikgfHxcclxuICAgICAgICBpc1JlZ0V4cChvcHRpb25zLnNpbGVudEZhbGxiYWNrV2FybilcclxuICAgICAgICA/ICFvcHRpb25zLnNpbGVudEZhbGxiYWNrV2FyblxyXG4gICAgICAgIDogdHJ1ZTtcclxuICAgIGNvbnN0IGZhbGxiYWNrUm9vdCA9IGlzQm9vbGVhbihvcHRpb25zLmZhbGxiYWNrUm9vdClcclxuICAgICAgICA/IG9wdGlvbnMuZmFsbGJhY2tSb290XHJcbiAgICAgICAgOiB0cnVlO1xyXG4gICAgY29uc3QgZmFsbGJhY2tGb3JtYXQgPSAhIW9wdGlvbnMuZm9ybWF0RmFsbGJhY2tNZXNzYWdlcztcclxuICAgIGNvbnN0IG1vZGlmaWVycyA9IGlzUGxhaW5PYmplY3Qob3B0aW9ucy5tb2RpZmllcnMpID8gb3B0aW9ucy5tb2RpZmllcnMgOiB7fTtcclxuICAgIGNvbnN0IHBsdXJhbGl6YXRpb25SdWxlcyA9IG9wdGlvbnMucGx1cmFsaXphdGlvblJ1bGVzO1xyXG4gICAgY29uc3QgcG9zdFRyYW5zbGF0aW9uID0gaXNGdW5jdGlvbihvcHRpb25zLnBvc3RUcmFuc2xhdGlvbilcclxuICAgICAgICA/IG9wdGlvbnMucG9zdFRyYW5zbGF0aW9uXHJcbiAgICAgICAgOiB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCB3YXJuSHRtbE1lc3NhZ2UgPSBpc1N0cmluZyhvcHRpb25zLndhcm5IdG1sSW5NZXNzYWdlKVxyXG4gICAgICAgID8gb3B0aW9ucy53YXJuSHRtbEluTWVzc2FnZSAhPT0gJ29mZidcclxuICAgICAgICA6IHRydWU7XHJcbiAgICBjb25zdCBlc2NhcGVQYXJhbWV0ZXIgPSAhIW9wdGlvbnMuZXNjYXBlUGFyYW1ldGVySHRtbDtcclxuICAgIGNvbnN0IGluaGVyaXRMb2NhbGUgPSBpc0Jvb2xlYW4ob3B0aW9ucy5zeW5jKSA/IG9wdGlvbnMuc3luYyA6IHRydWU7XHJcbiAgICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpICYmIG9wdGlvbnMuZm9ybWF0dGVyKSB7XHJcbiAgICAgICAgd2FybihnZXRXYXJuTWVzc2FnZShJMThuV2FybkNvZGVzLk5PVF9TVVBQT1JURURfRk9STUFUVEVSKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpICYmIG9wdGlvbnMucHJlc2VydmVEaXJlY3RpdmVDb250ZW50KSB7XHJcbiAgICAgICAgd2FybihnZXRXYXJuTWVzc2FnZShJMThuV2FybkNvZGVzLk5PVF9TVVBQT1JURURfUFJFU0VSVkVfRElSRUNUSVZFKSk7XHJcbiAgICB9XHJcbiAgICBsZXQgbWVzc2FnZXMgPSBvcHRpb25zLm1lc3NhZ2VzO1xyXG4gICAgaWYgKGlzUGxhaW5PYmplY3Qob3B0aW9ucy5zaGFyZWRNZXNzYWdlcykpIHtcclxuICAgICAgICBjb25zdCBzaGFyZWRNZXNzYWdlcyA9IG9wdGlvbnMuc2hhcmVkTWVzc2FnZXM7XHJcbiAgICAgICAgY29uc3QgbG9jYWxlcyA9IE9iamVjdC5rZXlzKHNoYXJlZE1lc3NhZ2VzKTtcclxuICAgICAgICBtZXNzYWdlcyA9IGxvY2FsZXMucmVkdWNlKChtZXNzYWdlcywgbG9jYWxlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBtZXNzYWdlc1tsb2NhbGVdIHx8IChtZXNzYWdlc1tsb2NhbGVdID0ge30pO1xyXG4gICAgICAgICAgICBhc3NpZ24obWVzc2FnZSwgc2hhcmVkTWVzc2FnZXNbbG9jYWxlXSk7XHJcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlcztcclxuICAgICAgICB9LCAobWVzc2FnZXMgfHwge30pKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHsgX19pMThuLCBfX3Jvb3QsIF9faW5qZWN0V2l0aE9wdGlvbiB9ID0gb3B0aW9ucztcclxuICAgIGNvbnN0IGRhdGV0aW1lRm9ybWF0cyA9IG9wdGlvbnMuZGF0ZXRpbWVGb3JtYXRzO1xyXG4gICAgY29uc3QgbnVtYmVyRm9ybWF0cyA9IG9wdGlvbnMubnVtYmVyRm9ybWF0cztcclxuICAgIGNvbnN0IGZsYXRKc29uID0gb3B0aW9ucy5mbGF0SnNvbjtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbG9jYWxlLFxyXG4gICAgICAgIGZhbGxiYWNrTG9jYWxlLFxyXG4gICAgICAgIG1lc3NhZ2VzLFxyXG4gICAgICAgIGZsYXRKc29uLFxyXG4gICAgICAgIGRhdGV0aW1lRm9ybWF0cyxcclxuICAgICAgICBudW1iZXJGb3JtYXRzLFxyXG4gICAgICAgIG1pc3NpbmcsXHJcbiAgICAgICAgbWlzc2luZ1dhcm4sXHJcbiAgICAgICAgZmFsbGJhY2tXYXJuLFxyXG4gICAgICAgIGZhbGxiYWNrUm9vdCxcclxuICAgICAgICBmYWxsYmFja0Zvcm1hdCxcclxuICAgICAgICBtb2RpZmllcnMsXHJcbiAgICAgICAgcGx1cmFsUnVsZXM6IHBsdXJhbGl6YXRpb25SdWxlcyxcclxuICAgICAgICBwb3N0VHJhbnNsYXRpb24sXHJcbiAgICAgICAgd2Fybkh0bWxNZXNzYWdlLFxyXG4gICAgICAgIGVzY2FwZVBhcmFtZXRlcixcclxuICAgICAgICBtZXNzYWdlUmVzb2x2ZXI6IG9wdGlvbnMubWVzc2FnZVJlc29sdmVyLFxyXG4gICAgICAgIGluaGVyaXRMb2NhbGUsXHJcbiAgICAgICAgX19pMThuLFxyXG4gICAgICAgIF9fcm9vdCxcclxuICAgICAgICBfX2luamVjdFdpdGhPcHRpb25cclxuICAgIH07XHJcbn1cclxuLyoqXHJcbiAqIGNyZWF0ZSBWdWVJMThuIGludGVyZmFjZSBmYWN0b3J5XHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXNcclxuZnVuY3Rpb24gY3JlYXRlVnVlSTE4bihvcHRpb25zID0ge30sIFZ1ZUkxOG5MZWdhY3kpIHtcclxuICAgIHtcclxuICAgICAgICBjb25zdCBjb21wb3NlciA9IGNyZWF0ZUNvbXBvc2VyKGNvbnZlcnRDb21wb3Nlck9wdGlvbnMob3B0aW9ucykpO1xyXG4gICAgICAgIC8vIGRlZmluZXMgVnVlSTE4blxyXG4gICAgICAgIGNvbnN0IHZ1ZUkxOG4gPSB7XHJcbiAgICAgICAgICAgIC8vIGlkXHJcbiAgICAgICAgICAgIGlkOiBjb21wb3Nlci5pZCxcclxuICAgICAgICAgICAgLy8gbG9jYWxlXHJcbiAgICAgICAgICAgIGdldCBsb2NhbGUoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9zZXIubG9jYWxlLnZhbHVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQgbG9jYWxlKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgY29tcG9zZXIubG9jYWxlLnZhbHVlID0gdmFsO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBmYWxsYmFja0xvY2FsZVxyXG4gICAgICAgICAgICBnZXQgZmFsbGJhY2tMb2NhbGUoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9zZXIuZmFsbGJhY2tMb2NhbGUudmFsdWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldCBmYWxsYmFja0xvY2FsZSh2YWwpIHtcclxuICAgICAgICAgICAgICAgIGNvbXBvc2VyLmZhbGxiYWNrTG9jYWxlLnZhbHVlID0gdmFsO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBtZXNzYWdlc1xyXG4gICAgICAgICAgICBnZXQgbWVzc2FnZXMoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9zZXIubWVzc2FnZXMudmFsdWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIGRhdGV0aW1lRm9ybWF0c1xyXG4gICAgICAgICAgICBnZXQgZGF0ZXRpbWVGb3JtYXRzKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvc2VyLmRhdGV0aW1lRm9ybWF0cy52YWx1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gbnVtYmVyRm9ybWF0c1xyXG4gICAgICAgICAgICBnZXQgbnVtYmVyRm9ybWF0cygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb21wb3Nlci5udW1iZXJGb3JtYXRzLnZhbHVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBhdmFpbGFibGVMb2NhbGVzXHJcbiAgICAgICAgICAgIGdldCBhdmFpbGFibGVMb2NhbGVzKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvc2VyLmF2YWlsYWJsZUxvY2FsZXM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIGZvcm1hdHRlclxyXG4gICAgICAgICAgICBnZXQgZm9ybWF0dGVyKCkge1xyXG4gICAgICAgICAgICAgICAgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpICYmIHdhcm4oZ2V0V2Fybk1lc3NhZ2UoSTE4bldhcm5Db2Rlcy5OT1RfU1VQUE9SVEVEX0ZPUk1BVFRFUikpO1xyXG4gICAgICAgICAgICAgICAgLy8gZHVtbXlcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJwb2xhdGUoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQgZm9ybWF0dGVyKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpICYmIHdhcm4oZ2V0V2Fybk1lc3NhZ2UoSTE4bldhcm5Db2Rlcy5OT1RfU1VQUE9SVEVEX0ZPUk1BVFRFUikpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBtaXNzaW5nXHJcbiAgICAgICAgICAgIGdldCBtaXNzaW5nKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvc2VyLmdldE1pc3NpbmdIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldCBtaXNzaW5nKGhhbmRsZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbXBvc2VyLnNldE1pc3NpbmdIYW5kbGVyKGhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBzaWxlbnRUcmFuc2xhdGlvbldhcm5cclxuICAgICAgICAgICAgZ2V0IHNpbGVudFRyYW5zbGF0aW9uV2FybigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpc0Jvb2xlYW4oY29tcG9zZXIubWlzc2luZ1dhcm4pXHJcbiAgICAgICAgICAgICAgICAgICAgPyAhY29tcG9zZXIubWlzc2luZ1dhcm5cclxuICAgICAgICAgICAgICAgICAgICA6IGNvbXBvc2VyLm1pc3NpbmdXYXJuO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQgc2lsZW50VHJhbnNsYXRpb25XYXJuKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgY29tcG9zZXIubWlzc2luZ1dhcm4gPSBpc0Jvb2xlYW4odmFsKSA/ICF2YWwgOiB2YWw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIHNpbGVudEZhbGxiYWNrV2FyblxyXG4gICAgICAgICAgICBnZXQgc2lsZW50RmFsbGJhY2tXYXJuKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzQm9vbGVhbihjb21wb3Nlci5mYWxsYmFja1dhcm4pXHJcbiAgICAgICAgICAgICAgICAgICAgPyAhY29tcG9zZXIuZmFsbGJhY2tXYXJuXHJcbiAgICAgICAgICAgICAgICAgICAgOiBjb21wb3Nlci5mYWxsYmFja1dhcm47XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldCBzaWxlbnRGYWxsYmFja1dhcm4odmFsKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wb3Nlci5mYWxsYmFja1dhcm4gPSBpc0Jvb2xlYW4odmFsKSA/ICF2YWwgOiB2YWw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIG1vZGlmaWVyc1xyXG4gICAgICAgICAgICBnZXQgbW9kaWZpZXJzKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvc2VyLm1vZGlmaWVycztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gZm9ybWF0RmFsbGJhY2tNZXNzYWdlc1xyXG4gICAgICAgICAgICBnZXQgZm9ybWF0RmFsbGJhY2tNZXNzYWdlcygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb21wb3Nlci5mYWxsYmFja0Zvcm1hdDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0IGZvcm1hdEZhbGxiYWNrTWVzc2FnZXModmFsKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wb3Nlci5mYWxsYmFja0Zvcm1hdCA9IHZhbDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gcG9zdFRyYW5zbGF0aW9uXHJcbiAgICAgICAgICAgIGdldCBwb3N0VHJhbnNsYXRpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9zZXIuZ2V0UG9zdFRyYW5zbGF0aW9uSGFuZGxlcigpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQgcG9zdFRyYW5zbGF0aW9uKGhhbmRsZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbXBvc2VyLnNldFBvc3RUcmFuc2xhdGlvbkhhbmRsZXIoaGFuZGxlcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIHN5bmNcclxuICAgICAgICAgICAgZ2V0IHN5bmMoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9zZXIuaW5oZXJpdExvY2FsZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0IHN5bmModmFsKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wb3Nlci5pbmhlcml0TG9jYWxlID0gdmFsO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyB3YXJuSW5IdG1sTWVzc2FnZVxyXG4gICAgICAgICAgICBnZXQgd2Fybkh0bWxJbk1lc3NhZ2UoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9zZXIud2Fybkh0bWxNZXNzYWdlID8gJ3dhcm4nIDogJ29mZic7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldCB3YXJuSHRtbEluTWVzc2FnZSh2YWwpIHtcclxuICAgICAgICAgICAgICAgIGNvbXBvc2VyLndhcm5IdG1sTWVzc2FnZSA9IHZhbCAhPT0gJ29mZic7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIGVzY2FwZVBhcmFtZXRlckh0bWxcclxuICAgICAgICAgICAgZ2V0IGVzY2FwZVBhcmFtZXRlckh0bWwoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9zZXIuZXNjYXBlUGFyYW1ldGVyO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQgZXNjYXBlUGFyYW1ldGVySHRtbCh2YWwpIHtcclxuICAgICAgICAgICAgICAgIGNvbXBvc2VyLmVzY2FwZVBhcmFtZXRlciA9IHZhbDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gcHJlc2VydmVEaXJlY3RpdmVDb250ZW50XHJcbiAgICAgICAgICAgIGdldCBwcmVzZXJ2ZURpcmVjdGl2ZUNvbnRlbnQoKSB7XHJcbiAgICAgICAgICAgICAgICAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgJiZcclxuICAgICAgICAgICAgICAgICAgICB3YXJuKGdldFdhcm5NZXNzYWdlKEkxOG5XYXJuQ29kZXMuTk9UX1NVUFBPUlRFRF9QUkVTRVJWRV9ESVJFQ1RJVkUpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQgcHJlc2VydmVEaXJlY3RpdmVDb250ZW50KHZhbCkge1xyXG4gICAgICAgICAgICAgICAgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgd2FybihnZXRXYXJuTWVzc2FnZShJMThuV2FybkNvZGVzLk5PVF9TVVBQT1JURURfUFJFU0VSVkVfRElSRUNUSVZFKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIHBsdXJhbGl6YXRpb25SdWxlc1xyXG4gICAgICAgICAgICBnZXQgcGx1cmFsaXphdGlvblJ1bGVzKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvc2VyLnBsdXJhbFJ1bGVzIHx8IHt9O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBmb3IgaW50ZXJuYWxcclxuICAgICAgICAgICAgX19jb21wb3NlcjogY29tcG9zZXIsXHJcbiAgICAgICAgICAgIC8vIHRcclxuICAgICAgICAgICAgdCguLi5hcmdzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbYXJnMSwgYXJnMiwgYXJnM10gPSBhcmdzO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpc3QgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5hbWVkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmICghaXNTdHJpbmcoYXJnMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVJMThuRXJyb3IoSTE4bkVycm9yQ29kZXMuSU5WQUxJRF9BUkdVTUVOVCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBhcmcxO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nKGFyZzIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBhcmcyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNBcnJheShhcmcyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3QgPSBhcmcyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNQbGFpbk9iamVjdChhcmcyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVkID0gYXJnMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpc0FycmF5KGFyZzMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdCA9IGFyZzM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc1BsYWluT2JqZWN0KGFyZzMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZWQgPSBhcmczO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIGNvbXBvc2VyLnQoa2V5LCAobGlzdCB8fCBuYW1lZCB8fCB7fSkgYXMgYW55LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuYXBwbHkoY29tcG9zZXIudCwgY29tcG9zZXIsIFtcclxuICAgICAgICAgICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgKGxpc3QgfHwgbmFtZWQgfHwge30pLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBydCguLi5hcmdzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5hcHBseShjb21wb3Nlci5ydCwgY29tcG9zZXIsIFsuLi5hcmdzXSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIHRjXHJcbiAgICAgICAgICAgIHRjKC4uLmFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFthcmcxLCBhcmcyLCBhcmczXSA9IGFyZ3M7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0geyBwbHVyYWw6IDEgfTtcclxuICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGxldCBuYW1lZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzU3RyaW5nKGFyZzEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlSTE4bkVycm9yKEkxOG5FcnJvckNvZGVzLklOVkFMSURfQVJHVU1FTlQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gYXJnMTtcclxuICAgICAgICAgICAgICAgIGlmIChpc1N0cmluZyhhcmcyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gYXJnMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzTnVtYmVyKGFyZzIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wbHVyYWwgPSBhcmcyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNBcnJheShhcmcyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3QgPSBhcmcyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNQbGFpbk9iamVjdChhcmcyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVkID0gYXJnMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpc1N0cmluZyhhcmczKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gYXJnMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzQXJyYXkoYXJnMykpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0ID0gYXJnMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzUGxhaW5PYmplY3QoYXJnMykpIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lZCA9IGFyZzM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gY29tcG9zZXIudChrZXksIChsaXN0IHx8IG5hbWVkIHx8IHt9KSBhcyBhbnksIG9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5hcHBseShjb21wb3Nlci50LCBjb21wb3NlciwgW1xyXG4gICAgICAgICAgICAgICAgICAgIGtleSxcclxuICAgICAgICAgICAgICAgICAgICAobGlzdCB8fCBuYW1lZCB8fCB7fSksXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIHRlXHJcbiAgICAgICAgICAgIHRlKGtleSwgbG9jYWxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9zZXIudGUoa2V5LCBsb2NhbGUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyB0bVxyXG4gICAgICAgICAgICB0bShrZXkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb21wb3Nlci50bShrZXkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBnZXRMb2NhbGVNZXNzYWdlXHJcbiAgICAgICAgICAgIGdldExvY2FsZU1lc3NhZ2UobG9jYWxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9zZXIuZ2V0TG9jYWxlTWVzc2FnZShsb2NhbGUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBzZXRMb2NhbGVNZXNzYWdlXHJcbiAgICAgICAgICAgIHNldExvY2FsZU1lc3NhZ2UobG9jYWxlLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wb3Nlci5zZXRMb2NhbGVNZXNzYWdlKGxvY2FsZSwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIG1lcmdlTG9jYWxlTWVzc2FnZVxyXG4gICAgICAgICAgICBtZXJnZUxvY2FsZU1lc3NhZ2UobG9jYWxlLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wb3Nlci5tZXJnZUxvY2FsZU1lc3NhZ2UobG9jYWxlLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gZFxyXG4gICAgICAgICAgICBkKC4uLmFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmFwcGx5KGNvbXBvc2VyLmQsIGNvbXBvc2VyLCBbLi4uYXJnc10pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBnZXREYXRlVGltZUZvcm1hdFxyXG4gICAgICAgICAgICBnZXREYXRlVGltZUZvcm1hdChsb2NhbGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb21wb3Nlci5nZXREYXRlVGltZUZvcm1hdChsb2NhbGUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBzZXREYXRlVGltZUZvcm1hdFxyXG4gICAgICAgICAgICBzZXREYXRlVGltZUZvcm1hdChsb2NhbGUsIGZvcm1hdCkge1xyXG4gICAgICAgICAgICAgICAgY29tcG9zZXIuc2V0RGF0ZVRpbWVGb3JtYXQobG9jYWxlLCBmb3JtYXQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBtZXJnZURhdGVUaW1lRm9ybWF0XHJcbiAgICAgICAgICAgIG1lcmdlRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCBmb3JtYXQpIHtcclxuICAgICAgICAgICAgICAgIGNvbXBvc2VyLm1lcmdlRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCBmb3JtYXQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBuXHJcbiAgICAgICAgICAgIG4oLi4uYXJncykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuYXBwbHkoY29tcG9zZXIubiwgY29tcG9zZXIsIFsuLi5hcmdzXSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIGdldE51bWJlckZvcm1hdFxyXG4gICAgICAgICAgICBnZXROdW1iZXJGb3JtYXQobG9jYWxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9zZXIuZ2V0TnVtYmVyRm9ybWF0KGxvY2FsZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIHNldE51bWJlckZvcm1hdFxyXG4gICAgICAgICAgICBzZXROdW1iZXJGb3JtYXQobG9jYWxlLCBmb3JtYXQpIHtcclxuICAgICAgICAgICAgICAgIGNvbXBvc2VyLnNldE51bWJlckZvcm1hdChsb2NhbGUsIGZvcm1hdCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIG1lcmdlTnVtYmVyRm9ybWF0XHJcbiAgICAgICAgICAgIG1lcmdlTnVtYmVyRm9ybWF0KGxvY2FsZSwgZm9ybWF0KSB7XHJcbiAgICAgICAgICAgICAgICBjb21wb3Nlci5tZXJnZU51bWJlckZvcm1hdChsb2NhbGUsIGZvcm1hdCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIGdldENob2ljZUluZGV4XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuICAgICAgICAgICAgZ2V0Q2hvaWNlSW5kZXgoY2hvaWNlLCBjaG9pY2VzTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgJiZcclxuICAgICAgICAgICAgICAgICAgICB3YXJuKGdldFdhcm5NZXNzYWdlKEkxOG5XYXJuQ29kZXMuTk9UX1NVUFBPUlRFRF9HRVRfQ0hPSUNFX0lOREVYKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIGZvciBpbnRlcm5hbFxyXG4gICAgICAgICAgICBfX29uQ29tcG9uZW50SW5zdGFuY2VDcmVhdGVkKHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBjb21wb25lbnRJbnN0YW5jZUNyZWF0ZWRMaXN0ZW5lciB9ID0gb3B0aW9ucztcclxuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnRJbnN0YW5jZUNyZWF0ZWRMaXN0ZW5lcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEluc3RhbmNlQ3JlYXRlZExpc3RlbmVyKHRhcmdldCwgdnVlSTE4bik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIGZvciB2dWUtZGV2dG9vbHMgdGltZWxpbmUgZXZlbnRcclxuICAgICAgICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpKSB7XHJcbiAgICAgICAgICAgIHZ1ZUkxOG4uX19lbmFibGVFbWl0dGVyID0gKGVtaXR0ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IF9fY29tcG9zZXIgPSBjb21wb3NlcjtcclxuICAgICAgICAgICAgICAgIF9fY29tcG9zZXJbRW5hYmxlRW1pdHRlcl0gJiYgX19jb21wb3NlcltFbmFibGVFbWl0dGVyXShlbWl0dGVyKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdnVlSTE4bi5fX2Rpc2FibGVFbWl0dGVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgX19jb21wb3NlciA9IGNvbXBvc2VyO1xyXG4gICAgICAgICAgICAgICAgX19jb21wb3NlcltEaXNhYmxlRW1pdHRlcl0gJiYgX19jb21wb3NlcltEaXNhYmxlRW1pdHRlcl0oKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZ1ZUkxOG47XHJcbiAgICB9XHJcbn1cclxuLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5cbmNvbnN0IGJhc2VGb3JtYXRQcm9wcyA9IHtcclxuICAgIHRhZzoge1xyXG4gICAgICAgIHR5cGU6IFtTdHJpbmcsIE9iamVjdF1cclxuICAgIH0sXHJcbiAgICBsb2NhbGU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmdcclxuICAgIH0sXHJcbiAgICBzY29wZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAvLyBOT1RFOiBhdm9pZCBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L3J1c2hzdGFjay9pc3N1ZXMvMTA1MFxyXG4gICAgICAgIHZhbGlkYXRvcjogKHZhbCAvKiBDb21wb25ldEkxOG5TY29wZSAqLykgPT4gdmFsID09PSAncGFyZW50JyB8fCB2YWwgPT09ICdnbG9iYWwnLFxyXG4gICAgICAgIGRlZmF1bHQ6ICdwYXJlbnQnIC8qIENvbXBvbmV0STE4blNjb3BlICovXHJcbiAgICB9LFxyXG4gICAgaTE4bjoge1xyXG4gICAgICAgIHR5cGU6IE9iamVjdFxyXG4gICAgfVxyXG59O1xuXG5mdW5jdGlvbiBnZXRJbnRlcnBvbGF0ZUFyZyhcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxueyBzbG90cyB9LCAvLyBTZXR1cENvbnRleHQsXHJcbmtleXMpIHtcclxuICAgIGlmIChrZXlzLmxlbmd0aCA9PT0gMSAmJiBrZXlzWzBdID09PSAnZGVmYXVsdCcpIHtcclxuICAgICAgICAvLyBkZWZhdWx0IHNsb3Qgd2l0aCBsaXN0XHJcbiAgICAgICAgY29uc3QgcmV0ID0gc2xvdHMuZGVmYXVsdCA/IHNsb3RzLmRlZmF1bHQoKSA6IFtdO1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICAgICAgcmV0dXJuIHJldC5yZWR1Y2UoKHNsb3QsIGN1cnJlbnQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChzbG90ID0gW1xyXG4gICAgICAgICAgICAgICAgLi4uc2xvdCxcclxuICAgICAgICAgICAgICAgIC4uLihpc0FycmF5KGN1cnJlbnQuY2hpbGRyZW4pID8gY3VycmVudC5jaGlsZHJlbiA6IFtjdXJyZW50XSlcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgfSwgW10pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy8gbmFtZWQgc2xvdHNcclxuICAgICAgICByZXR1cm4ga2V5cy5yZWR1Y2UoKGFyZywga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNsb3QgPSBzbG90c1trZXldO1xyXG4gICAgICAgICAgICBpZiAoc2xvdCkge1xyXG4gICAgICAgICAgICAgICAgYXJnW2tleV0gPSBzbG90KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFyZztcclxuICAgICAgICB9LCB7fSk7XHJcbiAgICB9XHJcbn1cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuZnVuY3Rpb24gZ2V0RnJhZ21lbnRhYmxlVGFnKHRhZykge1xyXG4gICAgcmV0dXJuIEZyYWdtZW50IDtcclxufVxuXG4vKipcclxuICogVHJhbnNsYXRpb24gQ29tcG9uZW50XHJcbiAqXHJcbiAqIEByZW1hcmtzXHJcbiAqIFNlZSB0aGUgZm9sbG93aW5nIGl0ZW1zIGZvciBwcm9wZXJ0eSBhYm91dCBkZXRhaWxzXHJcbiAqXHJcbiAqIEBWdWVJMThuU2VlIFtUcmFuc2xhdGlvblByb3BzXShjb21wb25lbnQjdHJhbnNsYXRpb25wcm9wcylcclxuICogQFZ1ZUkxOG5TZWUgW0Jhc2VGb3JtYXRQcm9wc10oY29tcG9uZW50I2Jhc2Vmb3JtYXRwcm9wcylcclxuICogQFZ1ZUkxOG5TZWUgW0NvbXBvbmVudCBJbnRlcnBvbGF0aW9uXSguLi9ndWlkZS9hZHZhbmNlZC9jb21wb25lbnQpXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIGBgYGh0bWxcclxuICogPGRpdiBpZD1cImFwcFwiPlxyXG4gKiAgIDwhLS0gLi4uIC0tPlxyXG4gKiAgIDxpMThuIHBhdGg9XCJ0ZXJtXCIgdGFnPVwibGFiZWxcIiBmb3I9XCJ0b3NcIj5cclxuICogICAgIDxhIDpocmVmPVwidXJsXCIgdGFyZ2V0PVwiX2JsYW5rXCI+e3sgJHQoJ3RvcycpIH19PC9hPlxyXG4gKiAgIDwvaTE4bj5cclxuICogICA8IS0tIC4uLiAtLT5cclxuICogPC9kaXY+XHJcbiAqIGBgYFxyXG4gKiBgYGBqc1xyXG4gKiBpbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tICd2dWUnXHJcbiAqIGltcG9ydCB7IGNyZWF0ZUkxOG4gfSBmcm9tICd2dWUtaTE4bidcclxuICpcclxuICogY29uc3QgbWVzc2FnZXMgPSB7XHJcbiAqICAgZW46IHtcclxuICogICAgIHRvczogJ1Rlcm0gb2YgU2VydmljZScsXHJcbiAqICAgICB0ZXJtOiAnSSBhY2NlcHQgeHh4IHswfS4nXHJcbiAqICAgfSxcclxuICogICBqYToge1xyXG4gKiAgICAgdG9zOiAn5Yip55So6KaP57SEJyxcclxuICogICAgIHRlcm06ICfnp4Hjga8geHh4IOOBrnswfeOBq+WQjOaEj+OBl+OBvuOBmeOAgidcclxuICogICB9XHJcbiAqIH1cclxuICpcclxuICogY29uc3QgaTE4biA9IGNyZWF0ZUkxOG4oe1xyXG4gKiAgIGxvY2FsZTogJ2VuJyxcclxuICogICBtZXNzYWdlc1xyXG4gKiB9KVxyXG4gKlxyXG4gKiBjb25zdCBhcHAgPSBjcmVhdGVBcHAoe1xyXG4gKiAgIGRhdGE6IHtcclxuICogICAgIHVybDogJy90ZXJtJ1xyXG4gKiAgIH1cclxuICogfSkudXNlKGkxOG4pLm1vdW50KCcjYXBwJylcclxuICogYGBgXHJcbiAqXHJcbiAqIEBWdWVJMThuQ29tcG9uZW50XHJcbiAqL1xyXG5jb25zdCBUcmFuc2xhdGlvbiA9ICAvKiBkZWZpbmVDb21wb25lbnQgKi8ge1xyXG4gICAgLyogZXNsaW50LWRpc2FibGUgKi9cclxuICAgIG5hbWU6ICdpMThuLXQnLFxyXG4gICAgcHJvcHM6IGFzc2lnbih7XHJcbiAgICAgICAga2V5cGF0aDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwbHVyYWw6IHtcclxuICAgICAgICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICAgICAgdmFsaWRhdG9yOiAodmFsKSA9PiBpc051bWJlcih2YWwpIHx8ICFpc05hTih2YWwpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgYmFzZUZvcm1hdFByb3BzKSxcclxuICAgIC8qIGVzbGludC1lbmFibGUgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICBzZXR1cChwcm9wcywgY29udGV4dCkge1xyXG4gICAgICAgIGNvbnN0IHsgc2xvdHMsIGF0dHJzIH0gPSBjb250ZXh0O1xyXG4gICAgICAgIC8vIE5PVEU6IGF2b2lkIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvcnVzaHN0YWNrL2lzc3Vlcy8xMDUwXHJcbiAgICAgICAgY29uc3QgaTE4biA9IHByb3BzLmkxOG4gfHxcclxuICAgICAgICAgICAgdXNlSTE4bih7XHJcbiAgICAgICAgICAgICAgICB1c2VTY29wZTogcHJvcHMuc2NvcGUsXHJcbiAgICAgICAgICAgICAgICBfX3VzZUNvbXBvbmVudDogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoc2xvdHMpLmZpbHRlcihrZXkgPT4ga2V5ICE9PSAnXycpO1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge307XHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5sb2NhbGUpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gcHJvcHMubG9jYWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5wbHVyYWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5wbHVyYWwgPSBpc1N0cmluZyhwcm9wcy5wbHVyYWwpID8gK3Byb3BzLnBsdXJhbCA6IHByb3BzLnBsdXJhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBhcmcgPSBnZXRJbnRlcnBvbGF0ZUFyZyhjb250ZXh0LCBrZXlzKTtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBpMThuW1RyYW5zcmF0ZVZOb2RlU3ltYm9sXShwcm9wcy5rZXlwYXRoLCBhcmcsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBjb25zdCBhc3NpZ25lZEF0dHJzID0gYXNzaWduKHt9LCBhdHRycyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhZyA9IGlzU3RyaW5nKHByb3BzLnRhZykgfHwgaXNPYmplY3QocHJvcHMudGFnKVxyXG4gICAgICAgICAgICAgICAgPyBwcm9wcy50YWdcclxuICAgICAgICAgICAgICAgIDogZ2V0RnJhZ21lbnRhYmxlVGFnKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBoKHRhZywgYXNzaWduZWRBdHRycywgY2hpbGRyZW4pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn07XG5cbmZ1bmN0aW9uIGlzVk5vZGUodGFyZ2V0KSB7XHJcbiAgICByZXR1cm4gaXNBcnJheSh0YXJnZXQpICYmICFpc1N0cmluZyh0YXJnZXRbMF0pO1xyXG59XHJcbmZ1bmN0aW9uIHJlbmRlckZvcm1hdHRlcihwcm9wcywgY29udGV4dCwgc2xvdEtleXMsIHBhcnRGb3JtYXR0ZXIpIHtcclxuICAgIGNvbnN0IHsgc2xvdHMsIGF0dHJzIH0gPSBjb250ZXh0O1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0geyBwYXJ0OiB0cnVlIH07XHJcbiAgICAgICAgbGV0IG92ZXJyaWRlcyA9IHt9O1xyXG4gICAgICAgIGlmIChwcm9wcy5sb2NhbGUpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBwcm9wcy5sb2NhbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1N0cmluZyhwcm9wcy5mb3JtYXQpKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMua2V5ID0gcHJvcHMuZm9ybWF0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc09iamVjdChwcm9wcy5mb3JtYXQpKSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICAgICAgICAgIGlmIChpc1N0cmluZyhwcm9wcy5mb3JtYXQua2V5KSkge1xyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMua2V5ID0gcHJvcHMuZm9ybWF0LmtleTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBGaWx0ZXIgb3V0IG51bWJlciBmb3JtYXQgb3B0aW9ucyBvbmx5XHJcbiAgICAgICAgICAgIG92ZXJyaWRlcyA9IE9iamVjdC5rZXlzKHByb3BzLmZvcm1hdCkucmVkdWNlKChvcHRpb25zLCBwcm9wKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2xvdEtleXMuaW5jbHVkZXMocHJvcClcclxuICAgICAgICAgICAgICAgICAgICA/IGFzc2lnbih7fSwgb3B0aW9ucywgeyBbcHJvcF06IHByb3BzLmZvcm1hdFtwcm9wXSB9KSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICAgICAgICAgICAgICA6IG9wdGlvbnM7XHJcbiAgICAgICAgICAgIH0sIHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGFydHMgPSBwYXJ0Rm9ybWF0dGVyKC4uLltwcm9wcy52YWx1ZSwgb3B0aW9ucywgb3ZlcnJpZGVzXSk7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gW29wdGlvbnMua2V5XTtcclxuICAgICAgICBpZiAoaXNBcnJheShwYXJ0cykpIHtcclxuICAgICAgICAgICAgY2hpbGRyZW4gPSBwYXJ0cy5tYXAoKHBhcnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzbG90ID0gc2xvdHNbcGFydC50eXBlXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBzbG90XHJcbiAgICAgICAgICAgICAgICAgICAgPyBzbG90KHsgW3BhcnQudHlwZV06IHBhcnQudmFsdWUsIGluZGV4LCBwYXJ0cyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIDogW3BhcnQudmFsdWVdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzVk5vZGUobm9kZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlWzBdLmtleSA9IGAke3BhcnQudHlwZX0tJHtpbmRleH1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc1N0cmluZyhwYXJ0cykpIHtcclxuICAgICAgICAgICAgY2hpbGRyZW4gPSBbcGFydHNdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhc3NpZ25lZEF0dHJzID0gYXNzaWduKHt9LCBhdHRycyk7XHJcbiAgICAgICAgY29uc3QgdGFnID0gaXNTdHJpbmcocHJvcHMudGFnKSB8fCBpc09iamVjdChwcm9wcy50YWcpXHJcbiAgICAgICAgICAgID8gcHJvcHMudGFnXHJcbiAgICAgICAgICAgIDogZ2V0RnJhZ21lbnRhYmxlVGFnKCk7XHJcbiAgICAgICAgcmV0dXJuIGgodGFnLCBhc3NpZ25lZEF0dHJzLCBjaGlsZHJlbik7XHJcbiAgICB9O1xyXG59XG5cbi8qKlxyXG4gKiBOdW1iZXIgRm9ybWF0IENvbXBvbmVudFxyXG4gKlxyXG4gKiBAcmVtYXJrc1xyXG4gKiBTZWUgdGhlIGZvbGxvd2luZyBpdGVtcyBmb3IgcHJvcGVydHkgYWJvdXQgZGV0YWlsc1xyXG4gKlxyXG4gKiBAVnVlSTE4blNlZSBbRm9ybWF0dGFibGVQcm9wc10oY29tcG9uZW50I2Zvcm1hdHRhYmxlcHJvcHMpXHJcbiAqIEBWdWVJMThuU2VlIFtCYXNlRm9ybWF0UHJvcHNdKGNvbXBvbmVudCNiYXNlZm9ybWF0cHJvcHMpXHJcbiAqIEBWdWVJMThuU2VlIFtDdXN0b20gRm9ybWF0dGluZ10oLi4vZ3VpZGUvZXNzZW50aWFscy9udW1iZXIjY3VzdG9tLWZvcm1hdHRpbmcpXHJcbiAqXHJcbiAqIEBWdWVJMThuRGFuZ2VyXHJcbiAqIE5vdCBzdXBwb3J0ZWQgSUUsIGR1ZSB0byBubyBzdXBwb3J0IGBJbnRsLk51bWJlckZvcm1hdCNmb3JtYXRUb1BhcnRzYCBpbiBbSUVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0ludGwvTnVtYmVyRm9ybWF0L2Zvcm1hdFRvUGFydHMpXHJcbiAqXHJcbiAqIElmIHlvdSB3YW50IHRvIHVzZSBpdCwgeW91IG5lZWQgdG8gdXNlIFtwb2x5ZmlsbF0oaHR0cHM6Ly9naXRodWIuY29tL2Zvcm1hdGpzL2Zvcm1hdGpzL3RyZWUvbWFpbi9wYWNrYWdlcy9pbnRsLW51bWJlcmZvcm1hdClcclxuICpcclxuICogQFZ1ZUkxOG5Db21wb25lbnRcclxuICovXHJcbmNvbnN0IE51bWJlckZvcm1hdCA9ICAvKiBkZWZpbmVDb21wb25lbnQgKi8ge1xyXG4gICAgLyogZXNsaW50LWRpc2FibGUgKi9cclxuICAgIG5hbWU6ICdpMThuLW4nLFxyXG4gICAgcHJvcHM6IGFzc2lnbih7XHJcbiAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9ybWF0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIE9iamVjdF1cclxuICAgICAgICB9XHJcbiAgICB9LCBiYXNlRm9ybWF0UHJvcHMpLFxyXG4gICAgLyogZXNsaW50LWVuYWJsZSAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgIHNldHVwKHByb3BzLCBjb250ZXh0KSB7XHJcbiAgICAgICAgY29uc3QgaTE4biA9IHByb3BzLmkxOG4gfHxcclxuICAgICAgICAgICAgdXNlSTE4bih7IHVzZVNjb3BlOiAncGFyZW50JywgX191c2VDb21wb25lbnQ6IHRydWUgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlbmRlckZvcm1hdHRlcihwcm9wcywgY29udGV4dCwgTlVNQkVSX0ZPUk1BVF9PUFRJT05TX0tFWVMsICguLi5hcmdzKSA9PiBcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgICAgIGkxOG5bTnVtYmVyUGFydHNTeW1ib2xdKC4uLmFyZ3MpKTtcclxuICAgIH1cclxufTtcblxuLyoqXHJcbiAqIERhdGV0aW1lIEZvcm1hdCBDb21wb25lbnRcclxuICpcclxuICogQHJlbWFya3NcclxuICogU2VlIHRoZSBmb2xsb3dpbmcgaXRlbXMgZm9yIHByb3BlcnR5IGFib3V0IGRldGFpbHNcclxuICpcclxuICogQFZ1ZUkxOG5TZWUgW0Zvcm1hdHRhYmxlUHJvcHNdKGNvbXBvbmVudCNmb3JtYXR0YWJsZXByb3BzKVxyXG4gKiBAVnVlSTE4blNlZSBbQmFzZUZvcm1hdFByb3BzXShjb21wb25lbnQjYmFzZWZvcm1hdHByb3BzKVxyXG4gKiBAVnVlSTE4blNlZSBbQ3VzdG9tIEZvcm1hdHRpbmddKC4uL2d1aWRlL2Vzc2VudGlhbHMvZGF0ZXRpbWUjY3VzdG9tLWZvcm1hdHRpbmcpXHJcbiAqXHJcbiAqIEBWdWVJMThuRGFuZ2VyXHJcbiAqIE5vdCBzdXBwb3J0ZWQgSUUsIGR1ZSB0byBubyBzdXBwb3J0IGBJbnRsLkRhdGVUaW1lRm9ybWF0I2Zvcm1hdFRvUGFydHNgIGluIFtJRV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvSW50bC9EYXRlVGltZUZvcm1hdC9mb3JtYXRUb1BhcnRzKVxyXG4gKlxyXG4gKiBJZiB5b3Ugd2FudCB0byB1c2UgaXQsIHlvdSBuZWVkIHRvIHVzZSBbcG9seWZpbGxdKGh0dHBzOi8vZ2l0aHViLmNvbS9mb3JtYXRqcy9mb3JtYXRqcy90cmVlL21haW4vcGFja2FnZXMvaW50bC1kYXRldGltZWZvcm1hdClcclxuICpcclxuICogQFZ1ZUkxOG5Db21wb25lbnRcclxuICovXHJcbmNvbnN0IERhdGV0aW1lRm9ybWF0ID0gIC8qZGVmaW5lQ29tcG9uZW50ICovIHtcclxuICAgIC8qIGVzbGludC1kaXNhYmxlICovXHJcbiAgICBuYW1lOiAnaTE4bi1kJyxcclxuICAgIHByb3BzOiBhc3NpZ24oe1xyXG4gICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFtOdW1iZXIsIERhdGVdLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9ybWF0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIE9iamVjdF1cclxuICAgICAgICB9XHJcbiAgICB9LCBiYXNlRm9ybWF0UHJvcHMpLFxyXG4gICAgLyogZXNsaW50LWVuYWJsZSAqL1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgIHNldHVwKHByb3BzLCBjb250ZXh0KSB7XHJcbiAgICAgICAgY29uc3QgaTE4biA9IHByb3BzLmkxOG4gfHxcclxuICAgICAgICAgICAgdXNlSTE4bih7IHVzZVNjb3BlOiAncGFyZW50JywgX191c2VDb21wb25lbnQ6IHRydWUgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlbmRlckZvcm1hdHRlcihwcm9wcywgY29udGV4dCwgREFURVRJTUVfRk9STUFUX09QVElPTlNfS0VZUywgKC4uLmFyZ3MpID0+IFxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICAgICAgaTE4bltEYXRldGltZVBhcnRzU3ltYm9sXSguLi5hcmdzKSk7XHJcbiAgICB9XHJcbn07XG5cbmZ1bmN0aW9uIGdldENvbXBvc2VyJDIoaTE4biwgaW5zdGFuY2UpIHtcclxuICAgIGNvbnN0IGkxOG5JbnRlcm5hbCA9IGkxOG47XHJcbiAgICBpZiAoaTE4bi5tb2RlID09PSAnY29tcG9zaXRpb24nKSB7XHJcbiAgICAgICAgcmV0dXJuIChpMThuSW50ZXJuYWwuX19nZXRJbnN0YW5jZShpbnN0YW5jZSkgfHwgaTE4bi5nbG9iYWwpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29uc3QgdnVlSTE4biA9IGkxOG5JbnRlcm5hbC5fX2dldEluc3RhbmNlKGluc3RhbmNlKTtcclxuICAgICAgICByZXR1cm4gdnVlSTE4biAhPSBudWxsXHJcbiAgICAgICAgICAgID8gdnVlSTE4bi5fX2NvbXBvc2VyXHJcbiAgICAgICAgICAgIDogaTE4bi5nbG9iYWwuX19jb21wb3NlcjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiB2VERpcmVjdGl2ZShpMThuKSB7XHJcbiAgICBjb25zdCBfcHJvY2VzcyA9IChiaW5kaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpbnN0YW5jZSwgbW9kaWZpZXJzLCB2YWx1ZSB9ID0gYmluZGluZztcclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICBpZiAoIWluc3RhbmNlIHx8ICFpbnN0YW5jZS4kKSB7XHJcbiAgICAgICAgICAgIHRocm93IGNyZWF0ZUkxOG5FcnJvcihJMThuRXJyb3JDb2Rlcy5VTkVYUEVDVEVEX0VSUk9SKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY29tcG9zZXIgPSBnZXRDb21wb3NlciQyKGkxOG4sIGluc3RhbmNlLiQpO1xyXG4gICAgICAgIGlmICgocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgJiYgbW9kaWZpZXJzLnByZXNlcnZlKSB7XHJcbiAgICAgICAgICAgIHdhcm4oZ2V0V2Fybk1lc3NhZ2UoSTE4bldhcm5Db2Rlcy5OT1RfU1VQUE9SVEVEX1BSRVNFUlZFKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBhcnNlZFZhbHVlID0gcGFyc2VWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgUmVmbGVjdC5hcHBseShjb21wb3Nlci50LCBjb21wb3NlciwgWy4uLm1ha2VQYXJhbXMocGFyc2VkVmFsdWUpXSksXHJcbiAgICAgICAgICAgIGNvbXBvc2VyXHJcbiAgICAgICAgXTtcclxuICAgIH07XHJcbiAgICBjb25zdCByZWdpc3RlciA9IChlbCwgYmluZGluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IFt0ZXh0Q29udGVudCwgY29tcG9zZXJdID0gX3Byb2Nlc3MoYmluZGluZyk7XHJcbiAgICAgICAgaWYgKGluQnJvd3NlciAmJiBpMThuLmdsb2JhbCA9PT0gY29tcG9zZXIpIHtcclxuICAgICAgICAgICAgLy8gZ2xvYmFsIHNjb3BlIG9ubHlcclxuICAgICAgICAgICAgZWwuX19pMThuV2F0Y2hlciA9IHdhdGNoKGNvbXBvc2VyLmxvY2FsZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYmluZGluZy5pbnN0YW5jZSAmJiBiaW5kaW5nLmluc3RhbmNlLiRmb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWwuX19jb21wb3NlciA9IGNvbXBvc2VyO1xyXG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgdW5yZWdpc3RlciA9IChlbCkgPT4ge1xyXG4gICAgICAgIGlmIChpbkJyb3dzZXIgJiYgZWwuX19pMThuV2F0Y2hlcikge1xyXG4gICAgICAgICAgICBlbC5fX2kxOG5XYXRjaGVyKCk7XHJcbiAgICAgICAgICAgIGVsLl9faTE4bldhdGNoZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBlbC5fX2kxOG5XYXRjaGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZWwuX19jb21wb3Nlcikge1xyXG4gICAgICAgICAgICBlbC5fX2NvbXBvc2VyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBkZWxldGUgZWwuX19jb21wb3NlcjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgdXBkYXRlID0gKGVsLCB7IHZhbHVlIH0pID0+IHtcclxuICAgICAgICBpZiAoZWwuX19jb21wb3Nlcikge1xyXG4gICAgICAgICAgICBjb25zdCBjb21wb3NlciA9IGVsLl9fY29tcG9zZXI7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFZhbHVlID0gcGFyc2VWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGVsLnRleHRDb250ZW50ID0gUmVmbGVjdC5hcHBseShjb21wb3Nlci50LCBjb21wb3NlciwgW1xyXG4gICAgICAgICAgICAgICAgLi4ubWFrZVBhcmFtcyhwYXJzZWRWYWx1ZSlcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGdldFNTUlByb3BzID0gKGJpbmRpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBbdGV4dENvbnRlbnRdID0gX3Byb2Nlc3MoYmluZGluZyk7XHJcbiAgICAgICAgcmV0dXJuIHsgdGV4dENvbnRlbnQgfTtcclxuICAgIH07XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNyZWF0ZWQ6IHJlZ2lzdGVyLFxyXG4gICAgICAgIHVubW91bnRlZDogdW5yZWdpc3RlcixcclxuICAgICAgICBiZWZvcmVVcGRhdGU6IHVwZGF0ZSxcclxuICAgICAgICBnZXRTU1JQcm9wc1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBwYXJzZVZhbHVlKHZhbHVlKSB7XHJcbiAgICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgcGF0aDogdmFsdWUgfTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzUGxhaW5PYmplY3QodmFsdWUpKSB7XHJcbiAgICAgICAgaWYgKCEoJ3BhdGgnIGluIHZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBjcmVhdGVJMThuRXJyb3IoSTE4bkVycm9yQ29kZXMuUkVRVUlSRURfVkFMVUUsICdwYXRoJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IGNyZWF0ZUkxOG5FcnJvcihJMThuRXJyb3JDb2Rlcy5JTlZBTElEX1ZBTFVFKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBtYWtlUGFyYW1zKHZhbHVlKSB7XHJcbiAgICBjb25zdCB7IHBhdGgsIGxvY2FsZSwgYXJncywgY2hvaWNlLCBwbHVyYWwgfSA9IHZhbHVlO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHt9O1xyXG4gICAgY29uc3QgbmFtZWQgPSBhcmdzIHx8IHt9O1xyXG4gICAgaWYgKGlzU3RyaW5nKGxvY2FsZSkpIHtcclxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZTtcclxuICAgIH1cclxuICAgIGlmIChpc051bWJlcihjaG9pY2UpKSB7XHJcbiAgICAgICAgb3B0aW9ucy5wbHVyYWwgPSBjaG9pY2U7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNOdW1iZXIocGx1cmFsKSkge1xyXG4gICAgICAgIG9wdGlvbnMucGx1cmFsID0gcGx1cmFsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtwYXRoLCBuYW1lZCwgb3B0aW9uc107XHJcbn1cblxuZnVuY3Rpb24gYXBwbHkoYXBwLCBpMThuLCAuLi5vcHRpb25zKSB7XHJcbiAgICBjb25zdCBwbHVnaW5PcHRpb25zID0gaXNQbGFpbk9iamVjdChvcHRpb25zWzBdKVxyXG4gICAgICAgID8gb3B0aW9uc1swXVxyXG4gICAgICAgIDoge307XHJcbiAgICBjb25zdCB1c2VJMThuQ29tcG9uZW50TmFtZSA9ICEhcGx1Z2luT3B0aW9ucy51c2VJMThuQ29tcG9uZW50TmFtZTtcclxuICAgIGNvbnN0IGdsb2JhbEluc3RhbGwgPSBpc0Jvb2xlYW4ocGx1Z2luT3B0aW9ucy5nbG9iYWxJbnN0YWxsKVxyXG4gICAgICAgID8gcGx1Z2luT3B0aW9ucy5nbG9iYWxJbnN0YWxsXHJcbiAgICAgICAgOiB0cnVlO1xyXG4gICAgaWYgKChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSAmJiBnbG9iYWxJbnN0YWxsICYmIHVzZUkxOG5Db21wb25lbnROYW1lKSB7XHJcbiAgICAgICAgd2FybihnZXRXYXJuTWVzc2FnZShJMThuV2FybkNvZGVzLkNPTVBPTkVOVF9OQU1FX0xFR0FDWV9DT01QQVRJQkxFLCB7XHJcbiAgICAgICAgICAgIG5hbWU6IFRyYW5zbGF0aW9uLm5hbWVcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZ2xvYmFsSW5zdGFsbCkge1xyXG4gICAgICAgIC8vIGluc3RhbGwgY29tcG9uZW50c1xyXG4gICAgICAgIGFwcC5jb21wb25lbnQoIXVzZUkxOG5Db21wb25lbnROYW1lID8gVHJhbnNsYXRpb24ubmFtZSA6ICdpMThuJywgVHJhbnNsYXRpb24pO1xyXG4gICAgICAgIGFwcC5jb21wb25lbnQoTnVtYmVyRm9ybWF0Lm5hbWUsIE51bWJlckZvcm1hdCk7XHJcbiAgICAgICAgYXBwLmNvbXBvbmVudChEYXRldGltZUZvcm1hdC5uYW1lLCBEYXRldGltZUZvcm1hdCk7XHJcbiAgICB9XHJcbiAgICAvLyBpbnN0YWxsIGRpcmVjdGl2ZVxyXG4gICAge1xyXG4gICAgICAgIGFwcC5kaXJlY3RpdmUoJ3QnLCB2VERpcmVjdGl2ZShpMThuKSk7XHJcbiAgICB9XHJcbn1cblxuY29uc3QgVlVFX0kxOE5fQ09NUE9ORU5UX1RZUEVTID0gJ3Z1ZS1pMThuOiBjb21wb3NlciBwcm9wZXJ0aWVzJztcclxubGV0IGRldnRvb2xzQXBpO1xyXG5hc3luYyBmdW5jdGlvbiBlbmFibGVEZXZUb29scyhhcHAsIGkxOG4pIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc2V0dXBEZXZ0b29sc1BsdWdpbih7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJ2dWUtZGV2dG9vbHMtcGx1Z2luLXZ1ZS1pMThuXCIgLyogUExVR0lOICovLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFZ1ZURldlRvb2xzTGFiZWxzW1widnVlLWRldnRvb2xzLXBsdWdpbi12dWUtaTE4blwiIC8qIFBMVUdJTiAqL10sXHJcbiAgICAgICAgICAgICAgICBwYWNrYWdlTmFtZTogJ3Z1ZS1pMThuJyxcclxuICAgICAgICAgICAgICAgIGhvbWVwYWdlOiAnaHR0cHM6Ly92dWUtaTE4bi5pbnRsaWZ5LmRldicsXHJcbiAgICAgICAgICAgICAgICBsb2dvOiAnaHR0cHM6Ly92dWUtaTE4bi5pbnRsaWZ5LmRldi92dWUtaTE4bi1kZXZ0b29scy1sb2dvLnBuZycsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnRTdGF0ZVR5cGVzOiBbVlVFX0kxOE5fQ09NUE9ORU5UX1RZUEVTXSxcclxuICAgICAgICAgICAgICAgIGFwcDogYXBwIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgICAgICAgICB9LCBhcGkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGV2dG9vbHNBcGkgPSBhcGk7XHJcbiAgICAgICAgICAgICAgICBhcGkub24udmlzaXRDb21wb25lbnRUcmVlKCh7IGNvbXBvbmVudEluc3RhbmNlLCB0cmVlTm9kZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQ29tcG9uZW50VHJlZVRhZ3MoY29tcG9uZW50SW5zdGFuY2UsIHRyZWVOb2RlLCBpMThuKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYXBpLm9uLmluc3BlY3RDb21wb25lbnQoKHsgY29tcG9uZW50SW5zdGFuY2UsIGluc3RhbmNlRGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudEluc3RhbmNlLnZub2RlLmVsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEluc3RhbmNlLnZub2RlLmVsLl9fVlVFX0kxOE5fXyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZURhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkxOG4ubW9kZSA9PT0gJ2xlZ2FjeScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlnbm9yZSBnbG9iYWwgc2NvcGUgb24gbGVnYWN5IG1vZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnRJbnN0YW5jZS52bm9kZS5lbC5fX1ZVRV9JMThOX18gIT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaTE4bi5nbG9iYWwuX19jb21wb3Nlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3BlY3RDb21wb3NlcihpbnN0YW5jZURhdGEsIGNvbXBvbmVudEluc3RhbmNlLnZub2RlLmVsLl9fVlVFX0kxOE5fXyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNwZWN0Q29tcG9zZXIoaW5zdGFuY2VEYXRhLCBjb21wb25lbnRJbnN0YW5jZS52bm9kZS5lbC5fX1ZVRV9JMThOX18pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhcGkuYWRkSW5zcGVjdG9yKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJ2dWUtaTE4bi1yZXNvdXJjZS1pbnNwZWN0b3JcIiAvKiBDVVNUT01fSU5TUEVDVE9SICovLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBWdWVEZXZUb29sc0xhYmVsc1tcInZ1ZS1pMThuLXJlc291cmNlLWluc3BlY3RvclwiIC8qIENVU1RPTV9JTlNQRUNUT1IgKi9dLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdsYW5ndWFnZScsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJlZUZpbHRlclBsYWNlaG9sZGVyOiBWdWVEZXZUb29sc1BsYWNlaG9sZGVyc1tcInZ1ZS1pMThuLXJlc291cmNlLWluc3BlY3RvclwiIC8qIENVU1RPTV9JTlNQRUNUT1IgKi9dXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGFwaS5vbi5nZXRJbnNwZWN0b3JUcmVlKHBheWxvYWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkLmFwcCA9PT0gYXBwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQuaW5zcGVjdG9ySWQgPT09IFwidnVlLWkxOG4tcmVzb3VyY2UtaW5zcGVjdG9yXCIgLyogQ1VTVE9NX0lOU1BFQ1RPUiAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlclNjb3BlKHBheWxvYWQsIGkxOG4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm9vdHMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgICAgICBhcGkub24uZ2V0SW5zcGVjdG9yU3RhdGUoYXN5bmMgKHBheWxvYWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGF5bG9hZC5hcHAgPT09IGFwcCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkLmluc3BlY3RvcklkID09PSBcInZ1ZS1pMThuLXJlc291cmNlLWluc3BlY3RvclwiIC8qIENVU1RPTV9JTlNQRUNUT1IgKi8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpLnVuaGlnaGxpZ2h0RWxlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNwZWN0U2NvcGUocGF5bG9hZCwgaTE4bik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkLm5vZGVJZCA9PT0gJ2dsb2JhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcm9vdHMuaGFzKHBheWxvYWQuYXBwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFtyb290XSA9IGF3YWl0IGFwaS5nZXRDb21wb25lbnRJbnN0YW5jZXMocGF5bG9hZC5hcHApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3RzLnNldChwYXlsb2FkLmFwcCwgcm9vdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGkuaGlnaGxpZ2h0RWxlbWVudChyb290cy5nZXQocGF5bG9hZC5hcHApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gZ2V0Q29tcG9uZW50SW5zdGFuY2UocGF5bG9hZC5ub2RlSWQsIGkxOG4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UgJiYgYXBpLmhpZ2hsaWdodEVsZW1lbnQoaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhcGkub24uZWRpdEluc3BlY3RvclN0YXRlKHBheWxvYWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkLmFwcCA9PT0gYXBwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQuaW5zcGVjdG9ySWQgPT09IFwidnVlLWkxOG4tcmVzb3VyY2UtaW5zcGVjdG9yXCIgLyogQ1VTVE9NX0lOU1BFQ1RPUiAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0U2NvcGUocGF5bG9hZCwgaTE4bik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhcGkuYWRkVGltZWxpbmVMYXllcih7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwidnVlLWkxOG4tdGltZWxpbmVcIiAvKiBUSU1FTElORSAqLyxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogVnVlRGV2VG9vbHNMYWJlbHNbXCJ2dWUtaTE4bi10aW1lbGluZVwiIC8qIFRJTUVMSU5FICovXSxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogVnVlRGV2VG9vbHNUaW1lbGluZUNvbG9yc1tcInZ1ZS1pMThuLXRpbWVsaW5lXCIgLyogVElNRUxJTkUgKi9dXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbmZ1bmN0aW9uIGdldEkxOG5TY29wZUxhYmxlKGluc3RhbmNlKSB7XHJcbiAgICByZXR1cm4gKGluc3RhbmNlLnR5cGUubmFtZSB8fFxyXG4gICAgICAgIGluc3RhbmNlLnR5cGUuZGlzcGxheU5hbWUgfHxcclxuICAgICAgICBpbnN0YW5jZS50eXBlLl9fZmlsZSB8fFxyXG4gICAgICAgICdBbm9ueW1vdXMnKTtcclxufVxyXG5mdW5jdGlvbiB1cGRhdGVDb21wb25lbnRUcmVlVGFncyhpbnN0YW5jZSwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbnRyZWVOb2RlLCBpMThuKSB7XHJcbiAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgIGNvbnN0IGdsb2JhbCA9IGkxOG4ubW9kZSA9PT0gJ2NvbXBvc2l0aW9uJ1xyXG4gICAgICAgID8gaTE4bi5nbG9iYWxcclxuICAgICAgICA6IGkxOG4uZ2xvYmFsLl9fY29tcG9zZXI7XHJcbiAgICBpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2Uudm5vZGUuZWwgJiYgaW5zdGFuY2Uudm5vZGUuZWwuX19WVUVfSTE4Tl9fKSB7XHJcbiAgICAgICAgLy8gYWRkIGN1c3RvbSB0YWdzIGxvY2FsIHNjb3BlIG9ubHlcclxuICAgICAgICBpZiAoaW5zdGFuY2Uudm5vZGUuZWwuX19WVUVfSTE4Tl9fICE9PSBnbG9iYWwpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFnID0ge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IGBpMThuICgke2dldEkxOG5TY29wZUxhYmxlKGluc3RhbmNlKX0gU2NvcGUpYCxcclxuICAgICAgICAgICAgICAgIHRleHRDb2xvcjogMHgwMDAwMDAsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IDB4ZmZjZDE5XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRyZWVOb2RlLnRhZ3MucHVzaCh0YWcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBpbnNwZWN0Q29tcG9zZXIoaW5zdGFuY2VEYXRhLCBjb21wb3Nlcikge1xyXG4gICAgY29uc3QgdHlwZSA9IFZVRV9JMThOX0NPTVBPTkVOVF9UWVBFUztcclxuICAgIGluc3RhbmNlRGF0YS5zdGF0ZS5wdXNoKHtcclxuICAgICAgICB0eXBlLFxyXG4gICAgICAgIGtleTogJ2xvY2FsZScsXHJcbiAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgdmFsdWU6IGNvbXBvc2VyLmxvY2FsZS52YWx1ZVxyXG4gICAgfSk7XHJcbiAgICBpbnN0YW5jZURhdGEuc3RhdGUucHVzaCh7XHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICBrZXk6ICdhdmFpbGFibGVMb2NhbGVzJyxcclxuICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgdmFsdWU6IGNvbXBvc2VyLmF2YWlsYWJsZUxvY2FsZXNcclxuICAgIH0pO1xyXG4gICAgaW5zdGFuY2VEYXRhLnN0YXRlLnB1c2goe1xyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgICAga2V5OiAnZmFsbGJhY2tMb2NhbGUnLFxyXG4gICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgIHZhbHVlOiBjb21wb3Nlci5mYWxsYmFja0xvY2FsZS52YWx1ZVxyXG4gICAgfSk7XHJcbiAgICBpbnN0YW5jZURhdGEuc3RhdGUucHVzaCh7XHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICBrZXk6ICdpbmhlcml0TG9jYWxlJyxcclxuICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICB2YWx1ZTogY29tcG9zZXIuaW5oZXJpdExvY2FsZVxyXG4gICAgfSk7XHJcbiAgICBpbnN0YW5jZURhdGEuc3RhdGUucHVzaCh7XHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICBrZXk6ICdtZXNzYWdlcycsXHJcbiAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgIHZhbHVlOiBnZXRMb2NhbGVNZXNzYWdlVmFsdWUoY29tcG9zZXIubWVzc2FnZXMudmFsdWUpXHJcbiAgICB9KTtcclxuICAgIHtcclxuICAgICAgICBpbnN0YW5jZURhdGEuc3RhdGUucHVzaCh7XHJcbiAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgIGtleTogJ2RhdGV0aW1lRm9ybWF0cycsXHJcbiAgICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgdmFsdWU6IGNvbXBvc2VyLmRhdGV0aW1lRm9ybWF0cy52YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGluc3RhbmNlRGF0YS5zdGF0ZS5wdXNoKHtcclxuICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAga2V5OiAnbnVtYmVyRm9ybWF0cycsXHJcbiAgICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgdmFsdWU6IGNvbXBvc2VyLm51bWJlckZvcm1hdHMudmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG5mdW5jdGlvbiBnZXRMb2NhbGVNZXNzYWdlVmFsdWUobWVzc2FnZXMpIHtcclxuICAgIGNvbnN0IHZhbHVlID0ge307XHJcbiAgICBPYmplY3Qua2V5cyhtZXNzYWdlcykuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdiA9IG1lc3NhZ2VzW2tleV07XHJcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24odikgJiYgJ3NvdXJjZScgaW4gdikge1xyXG4gICAgICAgICAgICB2YWx1ZVtrZXldID0gZ2V0TWVzc2FnZUZ1bmN0aW9uRGV0YWlscyh2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNPYmplY3QodikpIHtcclxuICAgICAgICAgICAgdmFsdWVba2V5XSA9IGdldExvY2FsZU1lc3NhZ2VWYWx1ZSh2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhbHVlW2tleV0gPSB2O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbmNvbnN0IEVTQyA9IHtcclxuICAgICc8JzogJyZsdDsnLFxyXG4gICAgJz4nOiAnJmd0OycsXHJcbiAgICAnXCInOiAnJnF1b3Q7JyxcclxuICAgICcmJzogJyZhbXA7J1xyXG59O1xyXG5mdW5jdGlvbiBlc2NhcGUocykge1xyXG4gICAgcmV0dXJuIHMucmVwbGFjZSgvWzw+XCImXS9nLCBlc2NhcGVDaGFyKTtcclxufVxyXG5mdW5jdGlvbiBlc2NhcGVDaGFyKGEpIHtcclxuICAgIHJldHVybiBFU0NbYV0gfHwgYTtcclxufVxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG5mdW5jdGlvbiBnZXRNZXNzYWdlRnVuY3Rpb25EZXRhaWxzKGZ1bmMpIHtcclxuICAgIGNvbnN0IGFyZ1N0cmluZyA9IGZ1bmMuc291cmNlID8gYChcIiR7ZXNjYXBlKGZ1bmMuc291cmNlKX1cIilgIDogYCg/KWA7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIF9jdXN0b206IHtcclxuICAgICAgICAgICAgdHlwZTogJ2Z1bmN0aW9uJyxcclxuICAgICAgICAgICAgZGlzcGxheTogYDxzcGFuPsaSPC9zcGFuPiAke2FyZ1N0cmluZ31gXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiByZWdpc3RlclNjb3BlKHBheWxvYWQsIGkxOG4pIHtcclxuICAgIHBheWxvYWQucm9vdE5vZGVzLnB1c2goe1xyXG4gICAgICAgIGlkOiAnZ2xvYmFsJyxcclxuICAgICAgICBsYWJlbDogJ0dsb2JhbCBTY29wZSdcclxuICAgIH0pO1xyXG4gICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICBjb25zdCBnbG9iYWwgPSBpMThuLm1vZGUgPT09ICdjb21wb3NpdGlvbidcclxuICAgICAgICA/IGkxOG4uZ2xvYmFsXHJcbiAgICAgICAgOiBpMThuLmdsb2JhbC5fX2NvbXBvc2VyO1xyXG4gICAgZm9yIChjb25zdCBba2V5SW5zdGFuY2UsIGluc3RhbmNlXSBvZiBpMThuLl9faW5zdGFuY2VzKSB7XHJcbiAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICAgICAgY29uc3QgY29tcG9zZXIgPSBpMThuLm1vZGUgPT09ICdjb21wb3NpdGlvbidcclxuICAgICAgICAgICAgPyBpbnN0YW5jZVxyXG4gICAgICAgICAgICA6IGluc3RhbmNlLl9fY29tcG9zZXI7XHJcbiAgICAgICAgaWYgKGdsb2JhbCA9PT0gY29tcG9zZXIpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBheWxvYWQucm9vdE5vZGVzLnB1c2goe1xyXG4gICAgICAgICAgICBpZDogY29tcG9zZXIuaWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgbGFiZWw6IGAke2dldEkxOG5TY29wZUxhYmxlKGtleUluc3RhbmNlKX0gU2NvcGVgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50SW5zdGFuY2Uobm9kZUlkLCBpMThuKSB7XHJcbiAgICBsZXQgaW5zdGFuY2UgPSBudWxsO1xyXG4gICAgaWYgKG5vZGVJZCAhPT0gJ2dsb2JhbCcpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IFtjb21wb25lbnQsIGNvbXBvc2VyXSBvZiBpMThuLl9faW5zdGFuY2VzLmVudHJpZXMoKSkge1xyXG4gICAgICAgICAgICBpZiAoY29tcG9zZXIuaWQudG9TdHJpbmcoKSA9PT0gbm9kZUlkKSB7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IGNvbXBvbmVudDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGluc3RhbmNlO1xyXG59XHJcbmZ1bmN0aW9uIGdldENvbXBvc2VyJDEobm9kZUlkLCBpMThuKSB7XHJcbiAgICBpZiAobm9kZUlkID09PSAnZ2xvYmFsJykge1xyXG4gICAgICAgIHJldHVybiBpMThuLm1vZGUgPT09ICdjb21wb3NpdGlvbidcclxuICAgICAgICAgICAgPyBpMThuLmdsb2JhbFxyXG4gICAgICAgICAgICA6IGkxOG4uZ2xvYmFsLl9fY29tcG9zZXI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IEFycmF5LmZyb20oaTE4bi5fX2luc3RhbmNlcy52YWx1ZXMoKSkuZmluZChpdGVtID0+IGl0ZW0uaWQudG9TdHJpbmcoKSA9PT0gbm9kZUlkKTtcclxuICAgICAgICBpZiAoaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGkxOG4ubW9kZSA9PT0gJ2NvbXBvc2l0aW9uJ1xyXG4gICAgICAgICAgICAgICAgPyBpbnN0YW5jZVxyXG4gICAgICAgICAgICAgICAgOiBpbnN0YW5jZS5fX2NvbXBvc2VyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGluc3BlY3RTY29wZShwYXlsb2FkLCBpMThuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbikge1xyXG4gICAgY29uc3QgY29tcG9zZXIgPSBnZXRDb21wb3NlciQxKHBheWxvYWQubm9kZUlkLCBpMThuKTtcclxuICAgIGlmIChjb21wb3Nlcikge1xyXG4gICAgICAgIC8vIFRPRE86XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICBwYXlsb2FkLnN0YXRlID0gbWFrZVNjb3BlSW5zcGVjdFN0YXRlKGNvbXBvc2VyKTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcbmZ1bmN0aW9uIG1ha2VTY29wZUluc3BlY3RTdGF0ZShjb21wb3Nlcikge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB7fTtcclxuICAgIGNvbnN0IGxvY2FsZVR5cGUgPSAnTG9jYWxlIHJlbGF0ZWQgaW5mbyc7XHJcbiAgICBjb25zdCBsb2NhbGVTdGF0ZXMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBsb2NhbGVUeXBlLFxyXG4gICAgICAgICAgICBrZXk6ICdsb2NhbGUnLFxyXG4gICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgdmFsdWU6IGNvbXBvc2VyLmxvY2FsZS52YWx1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBsb2NhbGVUeXBlLFxyXG4gICAgICAgICAgICBrZXk6ICdmYWxsYmFja0xvY2FsZScsXHJcbiAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB2YWx1ZTogY29tcG9zZXIuZmFsbGJhY2tMb2NhbGUudmFsdWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogbG9jYWxlVHlwZSxcclxuICAgICAgICAgICAga2V5OiAnYXZhaWxhYmxlTG9jYWxlcycsXHJcbiAgICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgdmFsdWU6IGNvbXBvc2VyLmF2YWlsYWJsZUxvY2FsZXNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogbG9jYWxlVHlwZSxcclxuICAgICAgICAgICAga2V5OiAnaW5oZXJpdExvY2FsZScsXHJcbiAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB2YWx1ZTogY29tcG9zZXIuaW5oZXJpdExvY2FsZVxyXG4gICAgICAgIH1cclxuICAgIF07XHJcbiAgICBzdGF0ZVtsb2NhbGVUeXBlXSA9IGxvY2FsZVN0YXRlcztcclxuICAgIGNvbnN0IGxvY2FsZU1lc3NhZ2VzVHlwZSA9ICdMb2NhbGUgbWVzc2FnZXMgaW5mbyc7XHJcbiAgICBjb25zdCBsb2NhbGVNZXNzYWdlc1N0YXRlcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IGxvY2FsZU1lc3NhZ2VzVHlwZSxcclxuICAgICAgICAgICAga2V5OiAnbWVzc2FnZXMnLFxyXG4gICAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOiBnZXRMb2NhbGVNZXNzYWdlVmFsdWUoY29tcG9zZXIubWVzc2FnZXMudmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuICAgIHN0YXRlW2xvY2FsZU1lc3NhZ2VzVHlwZV0gPSBsb2NhbGVNZXNzYWdlc1N0YXRlcztcclxuICAgIHtcclxuICAgICAgICBjb25zdCBkYXRldGltZUZvcm1hdHNUeXBlID0gJ0RhdGV0aW1lIGZvcm1hdHMgaW5mbyc7XHJcbiAgICAgICAgY29uc3QgZGF0ZXRpbWVGb3JtYXRzU3RhdGVzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBkYXRldGltZUZvcm1hdHNUeXBlLFxyXG4gICAgICAgICAgICAgICAga2V5OiAnZGF0ZXRpbWVGb3JtYXRzJyxcclxuICAgICAgICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBjb21wb3Nlci5kYXRldGltZUZvcm1hdHMudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgc3RhdGVbZGF0ZXRpbWVGb3JtYXRzVHlwZV0gPSBkYXRldGltZUZvcm1hdHNTdGF0ZXM7XHJcbiAgICAgICAgY29uc3QgbnVtYmVyRm9ybWF0c1R5cGUgPSAnRGF0ZXRpbWUgZm9ybWF0cyBpbmZvJztcclxuICAgICAgICBjb25zdCBudW1iZXJGb3JtYXRzU3RhdGVzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBudW1iZXJGb3JtYXRzVHlwZSxcclxuICAgICAgICAgICAgICAgIGtleTogJ251bWJlckZvcm1hdHMnLFxyXG4gICAgICAgICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGNvbXBvc2VyLm51bWJlckZvcm1hdHMudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgc3RhdGVbbnVtYmVyRm9ybWF0c1R5cGVdID0gbnVtYmVyRm9ybWF0c1N0YXRlcztcclxuICAgIH1cclxuICAgIHJldHVybiBzdGF0ZTtcclxufVxyXG5mdW5jdGlvbiBhZGRUaW1lbGluZUV2ZW50KGV2ZW50LCBwYXlsb2FkKSB7XHJcbiAgICBpZiAoZGV2dG9vbHNBcGkpIHtcclxuICAgICAgICBsZXQgZ3JvdXBJZDtcclxuICAgICAgICBpZiAocGF5bG9hZCAmJiAnZ3JvdXBJZCcgaW4gcGF5bG9hZCkge1xyXG4gICAgICAgICAgICBncm91cElkID0gcGF5bG9hZC5ncm91cElkO1xyXG4gICAgICAgICAgICBkZWxldGUgcGF5bG9hZC5ncm91cElkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZXZ0b29sc0FwaS5hZGRUaW1lbGluZUV2ZW50KHtcclxuICAgICAgICAgICAgbGF5ZXJJZDogXCJ2dWUtaTE4bi10aW1lbGluZVwiIC8qIFRJTUVMSU5FICovLFxyXG4gICAgICAgICAgICBldmVudDoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgZ3JvdXBJZCxcclxuICAgICAgICAgICAgICAgIHRpbWU6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgICAgICBtZXRhOiB7fSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHBheWxvYWQgfHwge30sXHJcbiAgICAgICAgICAgICAgICBsb2dUeXBlOiBldmVudCA9PT0gXCJjb21waWxlLWVycm9yXCIgLyogQ09NUElMRV9FUlJPUiAqL1xyXG4gICAgICAgICAgICAgICAgICAgID8gJ2Vycm9yJ1xyXG4gICAgICAgICAgICAgICAgICAgIDogZXZlbnQgPT09IFwiZmFsbGJhY2tcIiAvKiBGQUxCQUNLICovIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50ID09PSBcIm1pc3NpbmdcIiAvKiBNSVNTSU5HICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ3dhcm5pbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ2RlZmF1bHQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBlZGl0U2NvcGUocGF5bG9hZCwgaTE4bikge1xyXG4gICAgY29uc3QgY29tcG9zZXIgPSBnZXRDb21wb3NlciQxKHBheWxvYWQubm9kZUlkLCBpMThuKTtcclxuICAgIGlmIChjb21wb3Nlcikge1xyXG4gICAgICAgIGNvbnN0IFtmaWVsZF0gPSBwYXlsb2FkLnBhdGg7XHJcbiAgICAgICAgaWYgKGZpZWxkID09PSAnbG9jYWxlJyAmJiBpc1N0cmluZyhwYXlsb2FkLnN0YXRlLnZhbHVlKSkge1xyXG4gICAgICAgICAgICBjb21wb3Nlci5sb2NhbGUudmFsdWUgPSBwYXlsb2FkLnN0YXRlLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChmaWVsZCA9PT0gJ2ZhbGxiYWNrTG9jYWxlJyAmJlxyXG4gICAgICAgICAgICAoaXNTdHJpbmcocGF5bG9hZC5zdGF0ZS52YWx1ZSkgfHxcclxuICAgICAgICAgICAgICAgIGlzQXJyYXkocGF5bG9hZC5zdGF0ZS52YWx1ZSkgfHxcclxuICAgICAgICAgICAgICAgIGlzT2JqZWN0KHBheWxvYWQuc3RhdGUudmFsdWUpKSkge1xyXG4gICAgICAgICAgICBjb21wb3Nlci5mYWxsYmFja0xvY2FsZS52YWx1ZSA9IHBheWxvYWQuc3RhdGUudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGZpZWxkID09PSAnaW5oZXJpdExvY2FsZScgJiYgaXNCb29sZWFuKHBheWxvYWQuc3RhdGUudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGNvbXBvc2VyLmluaGVyaXRMb2NhbGUgPSBwYXlsb2FkLnN0YXRlLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG4vKipcclxuICogU3VwcG9ydHMgY29tcGF0aWJpbGl0eSBmb3IgbGVnYWN5IHZ1ZS1pMThuIEFQSXNcclxuICogVGhpcyBtaXhpbiBpcyB1c2VkIHdoZW4gd2UgdXNlIHZ1ZS1pMThuQHY5Lnggb3IgbGF0ZXJcclxuICovXHJcbmZ1bmN0aW9uIGRlZmluZU1peGluKHZ1ZWkxOG4sIGNvbXBvc2VyLCBpMThuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGJlZm9yZUNyZWF0ZSgpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBnZXRDdXJyZW50SW5zdGFuY2UoKTtcclxuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICAgICAgICAgIGlmICghaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZUkxOG5FcnJvcihJMThuRXJyb3JDb2Rlcy5VTkVYUEVDVEVEX0VSUk9SKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy4kb3B0aW9ucztcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuaTE4bikge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uc0kxOG4gPSBvcHRpb25zLmkxOG47XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5fX2kxOG4pIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zSTE4bi5fX2kxOG4gPSBvcHRpb25zLl9faTE4bjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9wdGlvbnNJMThuLl9fcm9vdCA9IGNvbXBvc2VyO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMgPT09IHRoaXMuJHJvb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRpMThuID0gbWVyZ2VUb1Jvb3QodnVlaTE4biwgb3B0aW9uc0kxOG4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc0kxOG4uX19pbmplY3RXaXRoT3B0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRpMThuID0gY3JlYXRlVnVlSTE4bihvcHRpb25zSTE4bik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5fX2kxOG4pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzID09PSB0aGlzLiRyb290KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kaTE4biA9IG1lcmdlVG9Sb290KHZ1ZWkxOG4sIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kaTE4biA9IGNyZWF0ZVZ1ZUkxOG4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfX2kxOG46IG9wdGlvbnMuX19pMThuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfX2luamVjdFdpdGhPcHRpb246IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fcm9vdDogY29tcG9zZXJcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHNldCBnbG9iYWxcclxuICAgICAgICAgICAgICAgIHRoaXMuJGkxOG4gPSB2dWVpMThuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLl9faTE4bkdsb2JhbCkge1xyXG4gICAgICAgICAgICAgICAgYWRqdXN0STE4blJlc291cmNlcyhjb21wb3Nlciwgb3B0aW9ucywgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdnVlaTE4bi5fX29uQ29tcG9uZW50SW5zdGFuY2VDcmVhdGVkKHRoaXMuJGkxOG4pO1xyXG4gICAgICAgICAgICBpMThuLl9fc2V0SW5zdGFuY2UoaW5zdGFuY2UsIHRoaXMuJGkxOG4pO1xyXG4gICAgICAgICAgICAvLyBkZWZpbmVzIHZ1ZS1pMThuIGxlZ2FjeSBBUElzXHJcbiAgICAgICAgICAgIHRoaXMuJHQgPSAoLi4uYXJncykgPT4gdGhpcy4kaTE4bi50KC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICB0aGlzLiRydCA9ICguLi5hcmdzKSA9PiB0aGlzLiRpMThuLnJ0KC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICB0aGlzLiR0YyA9ICguLi5hcmdzKSA9PiB0aGlzLiRpMThuLnRjKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICB0aGlzLiR0ZSA9IChrZXksIGxvY2FsZSkgPT4gdGhpcy4kaTE4bi50ZShrZXksIGxvY2FsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuJGQgPSAoLi4uYXJncykgPT4gdGhpcy4kaTE4bi5kKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICB0aGlzLiRuID0gKC4uLmFyZ3MpID0+IHRoaXMuJGkxOG4ubiguLi5hcmdzKTtcclxuICAgICAgICAgICAgdGhpcy4kdG0gPSAoa2V5KSA9PiB0aGlzLiRpMThuLnRtKGtleSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICAgICAgaWYgKCgocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgfHwgX19WVUVfUFJPRF9ERVZUT09MU19fKSAmJlxyXG4gICAgICAgICAgICAgICAgIWZhbHNlICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbCAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy4kaTE4bikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZWwuX19WVUVfSTE4Tl9fID0gdGhpcy4kaTE4bi5fX2NvbXBvc2VyO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW1pdHRlciA9ICh0aGlzLl9fdl9lbWl0dGVyID1cclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVFbWl0dGVyKCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgX3Z1ZUkxOG4gPSB0aGlzLiRpMThuO1xyXG4gICAgICAgICAgICAgICAgX3Z1ZUkxOG4uX19lbmFibGVFbWl0dGVyICYmIF92dWVJMThuLl9fZW5hYmxlRW1pdHRlcihlbWl0dGVyKTtcclxuICAgICAgICAgICAgICAgIGVtaXR0ZXIub24oJyonLCBhZGRUaW1lbGluZUV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdW5tb3VudGVkKCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpO1xyXG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICAgICAgaWYgKCFpbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlSTE4bkVycm9yKEkxOG5FcnJvckNvZGVzLlVORVhQRUNURURfRVJST1IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgICAgICBpZiAoKChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB8fCBfX1ZVRV9QUk9EX0RFVlRPT0xTX18pICYmXHJcbiAgICAgICAgICAgICAgICAhZmFsc2UgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVsICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbC5fX1ZVRV9JMThOX18pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9fdl9lbWl0dGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3ZfZW1pdHRlci5vZmYoJyonLCBhZGRUaW1lbGluZUV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fX3ZfZW1pdHRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLiRpMThuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgX3Z1ZUkxOG4gPSB0aGlzLiRpMThuO1xyXG4gICAgICAgICAgICAgICAgICAgIF92dWVJMThuLl9fZGlzYWJsZUVtaXR0ZXIgJiYgX3Z1ZUkxOG4uX19kaXNhYmxlRW1pdHRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLiRlbC5fX1ZVRV9JMThOX187XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuJHQ7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLiRydDtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuJHRjO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy4kdGU7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLiRkO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy4kbjtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuJHRtO1xyXG4gICAgICAgICAgICBpMThuLl9fZGVsZXRlSW5zdGFuY2UoaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy4kaTE4bjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIG1lcmdlVG9Sb290KHJvb3QsIG9wdGlvbnMpIHtcclxuICAgIHJvb3QubG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgfHwgcm9vdC5sb2NhbGU7XHJcbiAgICByb290LmZhbGxiYWNrTG9jYWxlID0gb3B0aW9ucy5mYWxsYmFja0xvY2FsZSB8fCByb290LmZhbGxiYWNrTG9jYWxlO1xyXG4gICAgcm9vdC5taXNzaW5nID0gb3B0aW9ucy5taXNzaW5nIHx8IHJvb3QubWlzc2luZztcclxuICAgIHJvb3Quc2lsZW50VHJhbnNsYXRpb25XYXJuID1cclxuICAgICAgICBvcHRpb25zLnNpbGVudFRyYW5zbGF0aW9uV2FybiB8fCByb290LnNpbGVudEZhbGxiYWNrV2FybjtcclxuICAgIHJvb3Quc2lsZW50RmFsbGJhY2tXYXJuID1cclxuICAgICAgICBvcHRpb25zLnNpbGVudEZhbGxiYWNrV2FybiB8fCByb290LnNpbGVudEZhbGxiYWNrV2FybjtcclxuICAgIHJvb3QuZm9ybWF0RmFsbGJhY2tNZXNzYWdlcyA9XHJcbiAgICAgICAgb3B0aW9ucy5mb3JtYXRGYWxsYmFja01lc3NhZ2VzIHx8IHJvb3QuZm9ybWF0RmFsbGJhY2tNZXNzYWdlcztcclxuICAgIHJvb3QucG9zdFRyYW5zbGF0aW9uID0gb3B0aW9ucy5wb3N0VHJhbnNsYXRpb24gfHwgcm9vdC5wb3N0VHJhbnNsYXRpb247XHJcbiAgICByb290Lndhcm5IdG1sSW5NZXNzYWdlID0gb3B0aW9ucy53YXJuSHRtbEluTWVzc2FnZSB8fCByb290Lndhcm5IdG1sSW5NZXNzYWdlO1xyXG4gICAgcm9vdC5lc2NhcGVQYXJhbWV0ZXJIdG1sID1cclxuICAgICAgICBvcHRpb25zLmVzY2FwZVBhcmFtZXRlckh0bWwgfHwgcm9vdC5lc2NhcGVQYXJhbWV0ZXJIdG1sO1xyXG4gICAgcm9vdC5zeW5jID0gb3B0aW9ucy5zeW5jIHx8IHJvb3Quc3luYztcclxuICAgIHJvb3QuX19jb21wb3NlcltTZXRQbHVyYWxSdWxlc1N5bWJvbF0ob3B0aW9ucy5wbHVyYWxpemF0aW9uUnVsZXMgfHwgcm9vdC5wbHVyYWxpemF0aW9uUnVsZXMpO1xyXG4gICAgY29uc3QgbWVzc2FnZXMgPSBnZXRMb2NhbGVNZXNzYWdlcyhyb290LmxvY2FsZSwge1xyXG4gICAgICAgIG1lc3NhZ2VzOiBvcHRpb25zLm1lc3NhZ2VzLFxyXG4gICAgICAgIF9faTE4bjogb3B0aW9ucy5fX2kxOG5cclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmtleXMobWVzc2FnZXMpLmZvckVhY2gobG9jYWxlID0+IHJvb3QubWVyZ2VMb2NhbGVNZXNzYWdlKGxvY2FsZSwgbWVzc2FnZXNbbG9jYWxlXSkpO1xyXG4gICAgaWYgKG9wdGlvbnMuZGF0ZXRpbWVGb3JtYXRzKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy5kYXRldGltZUZvcm1hdHMpLmZvckVhY2gobG9jYWxlID0+IHJvb3QubWVyZ2VEYXRlVGltZUZvcm1hdChsb2NhbGUsIG9wdGlvbnMuZGF0ZXRpbWVGb3JtYXRzW2xvY2FsZV0pKTtcclxuICAgIH1cclxuICAgIGlmIChvcHRpb25zLm51bWJlckZvcm1hdHMpIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLm51bWJlckZvcm1hdHMpLmZvckVhY2gobG9jYWxlID0+IHJvb3QubWVyZ2VOdW1iZXJGb3JtYXQobG9jYWxlLCBvcHRpb25zLm51bWJlckZvcm1hdHNbbG9jYWxlXSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJvb3Q7XHJcbn1cblxuLyoqXHJcbiAqIEluamVjdGlvbiBrZXkgZm9yIHtAbGluayB1c2VJMThufVxyXG4gKlxyXG4gKiBAcmVtYXJrc1xyXG4gKiBUaGUgZ2xvYmFsIGluamVjdGlvbiBrZXkgZm9yIEkxOG4gaW5zdGFuY2VzIHdpdGggYHVzZUkxOG5gLiB0aGlzIGluamVjdGlvbiBrZXkgaXMgdXNlZCBpbiBXZWIgQ29tcG9uZW50cy5cclxuICogU3BlY2lmeSB0aGUgaTE4biBpbnN0YW5jZSBjcmVhdGVkIGJ5IHtAbGluayBjcmVhdGVJMThufSB0b2dldGhlciB3aXRoIGBwcm92aWRlYCBmdW5jdGlvbi5cclxuICpcclxuICogQFZ1ZUkxOG5HZW5lcmFsXHJcbiAqL1xyXG5jb25zdCBJMThuSW5qZWN0aW9uS2V5ID0gXHJcbi8qICNfX1BVUkVfXyovIG1ha2VTeW1ib2woJ2dsb2JhbC12dWUtaTE4bicpO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSwgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlc1xyXG5mdW5jdGlvbiBjcmVhdGVJMThuKG9wdGlvbnMgPSB7fSwgVnVlSTE4bkxlZ2FjeSkge1xyXG4gICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICBjb25zdCBfX2xlZ2FjeU1vZGUgPSBfX1ZVRV9JMThOX0xFR0FDWV9BUElfXyAmJiBpc0Jvb2xlYW4ob3B0aW9ucy5sZWdhY3kpXHJcbiAgICAgICAgICAgID8gb3B0aW9ucy5sZWdhY3lcclxuICAgICAgICAgICAgOiBfX1ZVRV9JMThOX0xFR0FDWV9BUElfXztcclxuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gICAgY29uc3QgX19nbG9iYWxJbmplY3Rpb24gPSBpc0Jvb2xlYW4ob3B0aW9ucy5nbG9iYWxJbmplY3Rpb24pXHJcbiAgICAgICAgPyBvcHRpb25zLmdsb2JhbEluamVjdGlvblxyXG4gICAgICAgIDogdHJ1ZTtcclxuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gICAgY29uc3QgX19hbGxvd0NvbXBvc2l0aW9uID0gX19WVUVfSTE4Tl9MRUdBQ1lfQVBJX18gJiYgX19sZWdhY3lNb2RlXHJcbiAgICAgICAgICAgID8gISFvcHRpb25zLmFsbG93Q29tcG9zaXRpb25cclxuICAgICAgICAgICAgOiB0cnVlO1xyXG4gICAgY29uc3QgX19pbnN0YW5jZXMgPSBuZXcgTWFwKCk7XHJcbiAgICBjb25zdCBbZ2xvYmFsU2NvcGUsIF9fZ2xvYmFsXSA9IGNyZWF0ZUdsb2JhbChvcHRpb25zLCBfX2xlZ2FjeU1vZGUpO1xyXG4gICAgY29uc3Qgc3ltYm9sID0gbWFrZVN5bWJvbCgocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgPyAndnVlLWkxOG4nIDogJycpO1xyXG4gICAgZnVuY3Rpb24gX19nZXRJbnN0YW5jZShjb21wb25lbnQpIHtcclxuICAgICAgICByZXR1cm4gX19pbnN0YW5jZXMuZ2V0KGNvbXBvbmVudCkgfHwgbnVsbDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIF9fc2V0SW5zdGFuY2UoY29tcG9uZW50LCBpbnN0YW5jZSkge1xyXG4gICAgICAgIF9faW5zdGFuY2VzLnNldChjb21wb25lbnQsIGluc3RhbmNlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIF9fZGVsZXRlSW5zdGFuY2UoY29tcG9uZW50KSB7XHJcbiAgICAgICAgX19pbnN0YW5jZXMuZGVsZXRlKGNvbXBvbmVudCk7XHJcbiAgICB9XHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaTE4biA9IHtcclxuICAgICAgICAgICAgLy8gbW9kZVxyXG4gICAgICAgICAgICBnZXQgbW9kZSgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfX1ZVRV9JMThOX0xFR0FDWV9BUElfXyAmJiBfX2xlZ2FjeU1vZGVcclxuICAgICAgICAgICAgICAgICAgICA/ICdsZWdhY3knXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnY29tcG9zaXRpb24nO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBhbGxvd0NvbXBvc2l0aW9uXHJcbiAgICAgICAgICAgIGdldCBhbGxvd0NvbXBvc2l0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fYWxsb3dDb21wb3NpdGlvbjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gaW5zdGFsbCBwbHVnaW5cclxuICAgICAgICAgICAgYXN5bmMgaW5zdGFsbChhcHAsIC4uLm9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmICgoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHx8IF9fVlVFX1BST0RfREVWVE9PTFNfXykgJiZcclxuICAgICAgICAgICAgICAgICAgICAhZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcHAuX19WVUVfSTE4Tl9fID0gaTE4bjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHNldHVwIGdsb2JhbCBwcm92aWRlclxyXG4gICAgICAgICAgICAgICAgYXBwLl9fVlVFX0kxOE5fU1lNQk9MX18gPSBzeW1ib2w7XHJcbiAgICAgICAgICAgICAgICBhcHAucHJvdmlkZShhcHAuX19WVUVfSTE4Tl9TWU1CT0xfXywgaTE4bik7XHJcbiAgICAgICAgICAgICAgICAvLyBnbG9iYWwgbWV0aG9kIGFuZCBwcm9wZXJ0aWVzIGluamVjdGlvbiBmb3IgQ29tcG9zaXRpb24gQVBJXHJcbiAgICAgICAgICAgICAgICBpZiAoIV9fbGVnYWN5TW9kZSAmJiBfX2dsb2JhbEluamVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGluamVjdEdsb2JhbEZpZWxkcyhhcHAsIGkxOG4uZ2xvYmFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGluc3RhbGwgYnVpbHQtaW4gY29tcG9uZW50cyBhbmQgZGlyZWN0aXZlXHJcbiAgICAgICAgICAgICAgICBpZiAoX19WVUVfSTE4Tl9GVUxMX0lOU1RBTExfXykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcGx5KGFwcCwgaTE4biwgLi4ub3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBzZXR1cCBtaXhpbiBmb3IgTGVnYWN5IEFQSVxyXG4gICAgICAgICAgICAgICAgaWYgKF9fVlVFX0kxOE5fTEVHQUNZX0FQSV9fICYmIF9fbGVnYWN5TW9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcC5taXhpbihkZWZpbmVNaXhpbihfX2dsb2JhbCwgX19nbG9iYWwuX19jb21wb3NlciwgaTE4bikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gcmVsZWFzZSBnbG9iYWwgc2NvcGVcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVubW91bnRBcHAgPSBhcHAudW5tb3VudDtcclxuICAgICAgICAgICAgICAgIGFwcC51bm1vdW50ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGkxOG4uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVubW91bnRBcHAoKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAvLyBzZXR1cCB2dWUtZGV2dG9vbHMgcGx1Z2luXHJcbiAgICAgICAgICAgICAgICBpZiAoKChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB8fCBfX1ZVRV9QUk9EX0RFVlRPT0xTX18pICYmICFmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJldCA9IGF3YWl0IGVuYWJsZURldlRvb2xzKGFwcCwgaTE4bik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlSTE4bkVycm9yKEkxOG5FcnJvckNvZGVzLkNBTk5PVF9TRVRVUF9WVUVfREVWVE9PTFNfUExVR0lOKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW1pdHRlciA9IGNyZWF0ZUVtaXR0ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX19sZWdhY3lNb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF92dWVJMThuID0gX19nbG9iYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF92dWVJMThuLl9fZW5hYmxlRW1pdHRlciAmJiBfdnVlSTE4bi5fX2VuYWJsZUVtaXR0ZXIoZW1pdHRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfY29tcG9zZXIgPSBfX2dsb2JhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2NvbXBvc2VyW0VuYWJsZUVtaXR0ZXJdICYmIF9jb21wb3NlcltFbmFibGVFbWl0dGVyXShlbWl0dGVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZW1pdHRlci5vbignKicsIGFkZFRpbWVsaW5lRXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBnbG9iYWwgYWNjZXNzb3JcclxuICAgICAgICAgICAgZ2V0IGdsb2JhbCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfX2dsb2JhbDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGlzcG9zZSgpIHtcclxuICAgICAgICAgICAgICAgIGdsb2JhbFNjb3BlLnN0b3AoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gQGludGVybmFsXHJcbiAgICAgICAgICAgIF9faW5zdGFuY2VzLFxyXG4gICAgICAgICAgICAvLyBAaW50ZXJuYWxcclxuICAgICAgICAgICAgX19nZXRJbnN0YW5jZSxcclxuICAgICAgICAgICAgLy8gQGludGVybmFsXHJcbiAgICAgICAgICAgIF9fc2V0SW5zdGFuY2UsXHJcbiAgICAgICAgICAgIC8vIEBpbnRlcm5hbFxyXG4gICAgICAgICAgICBfX2RlbGV0ZUluc3RhbmNlXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gaTE4bjtcclxuICAgIH1cclxufVxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlc1xyXG5mdW5jdGlvbiB1c2VJMThuKG9wdGlvbnMgPSB7fSkge1xyXG4gICAgY29uc3QgaW5zdGFuY2UgPSBnZXRDdXJyZW50SW5zdGFuY2UoKTtcclxuICAgIGlmIChpbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgY3JlYXRlSTE4bkVycm9yKEkxOG5FcnJvckNvZGVzLk1VU1RfQkVfQ0FMTF9TRVRVUF9UT1ApO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpbnN0YW5jZS5pc0NFICYmXHJcbiAgICAgICAgaW5zdGFuY2UuYXBwQ29udGV4dC5hcHAgIT0gbnVsbCAmJlxyXG4gICAgICAgICFpbnN0YW5jZS5hcHBDb250ZXh0LmFwcC5fX1ZVRV9JMThOX1NZTUJPTF9fKSB7XHJcbiAgICAgICAgdGhyb3cgY3JlYXRlSTE4bkVycm9yKEkxOG5FcnJvckNvZGVzLk5PVF9JTlNMQUxMRUQpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaTE4biA9IGdldEkxOG5JbnN0YW5jZShpbnN0YW5jZSk7XHJcbiAgICBjb25zdCBnbG9iYWwgPSBnZXRHbG9iYWxDb21wb3NlcihpMThuKTtcclxuICAgIGNvbnN0IGNvbXBvbmVudE9wdGlvbnMgPSBnZXRDb21wb25lbnRPcHRpb25zKGluc3RhbmNlKTtcclxuICAgIGNvbnN0IHNjb3BlID0gZ2V0U2NvcGUob3B0aW9ucywgY29tcG9uZW50T3B0aW9ucyk7XHJcbiAgICBpZiAoX19WVUVfSTE4Tl9MRUdBQ1lfQVBJX18pIHtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgICAgIGlmIChpMThuLm1vZGUgPT09ICdsZWdhY3knICYmICFvcHRpb25zLl9fdXNlQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIGlmICghaTE4bi5hbGxvd0NvbXBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVJMThuRXJyb3IoSTE4bkVycm9yQ29kZXMuTk9UX0FWQUlMQUJMRV9JTl9MRUdBQ1lfTU9ERSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHVzZUkxOG5Gb3JMZWdhY3koaW5zdGFuY2UsIHNjb3BlLCBnbG9iYWwsIG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChzY29wZSA9PT0gJ2dsb2JhbCcpIHtcclxuICAgICAgICBhZGp1c3RJMThuUmVzb3VyY2VzKGdsb2JhbCwgb3B0aW9ucywgY29tcG9uZW50T3B0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbDtcclxuICAgIH1cclxuICAgIGlmIChzY29wZSA9PT0gJ3BhcmVudCcpIHtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgICAgIGxldCBjb21wb3NlciA9IGdldENvbXBvc2VyKGkxOG4sIGluc3RhbmNlLCBvcHRpb25zLl9fdXNlQ29tcG9uZW50KTtcclxuICAgICAgICBpZiAoY29tcG9zZXIgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpKSB7XHJcbiAgICAgICAgICAgICAgICB3YXJuKGdldFdhcm5NZXNzYWdlKEkxOG5XYXJuQ29kZXMuTk9UX0ZPVU5EX1BBUkVOVF9TQ09QRSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbXBvc2VyID0gZ2xvYmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29tcG9zZXI7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpMThuSW50ZXJuYWwgPSBpMThuO1xyXG4gICAgbGV0IGNvbXBvc2VyID0gaTE4bkludGVybmFsLl9fZ2V0SW5zdGFuY2UoaW5zdGFuY2UpO1xyXG4gICAgaWYgKGNvbXBvc2VyID09IG51bGwpIHtcclxuICAgICAgICBjb25zdCBjb21wb3Nlck9wdGlvbnMgPSBhc3NpZ24oe30sIG9wdGlvbnMpO1xyXG4gICAgICAgIGlmICgnX19pMThuJyBpbiBjb21wb25lbnRPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbXBvc2VyT3B0aW9ucy5fX2kxOG4gPSBjb21wb25lbnRPcHRpb25zLl9faTE4bjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdsb2JhbCkge1xyXG4gICAgICAgICAgICBjb21wb3Nlck9wdGlvbnMuX19yb290ID0gZ2xvYmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb21wb3NlciA9IGNyZWF0ZUNvbXBvc2VyKGNvbXBvc2VyT3B0aW9ucyk7XHJcbiAgICAgICAgc2V0dXBMaWZlQ3ljbGUoaTE4bkludGVybmFsLCBpbnN0YW5jZSwgY29tcG9zZXIpO1xyXG4gICAgICAgIGkxOG5JbnRlcm5hbC5fX3NldEluc3RhbmNlKGluc3RhbmNlLCBjb21wb3Nlcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29tcG9zZXI7XHJcbn1cclxuLyoqXHJcbiAqIENhc3QgdG8gVnVlSTE4biBsZWdhY3kgY29tcGF0aWJsZSB0eXBlXHJcbiAqXHJcbiAqIEByZW1hcmtzXHJcbiAqIFRoaXMgQVBJIGlzIHByb3ZpZGVkIG9ubHkgd2l0aCBbdnVlLWkxOG4tYnJpZGdlXShodHRwczovL3Z1ZS1pMThuLmludGxpZnkuZGV2L2d1aWRlL21pZ3JhdGlvbi93YXlzLmh0bWwjd2hhdC1pcy12dWUtaTE4bi1icmlkZ2UpLlxyXG4gKlxyXG4gKiBUaGUgcHVycG9zZSBvZiB0aGlzIGZ1bmN0aW9uIGlzIHRvIGNvbnZlcnQgYW4ge0BsaW5rIEkxOG59IGluc3RhbmNlIGNyZWF0ZWQgd2l0aCB7QGxpbmsgY3JlYXRlSTE4biB8IGNyZWF0ZUkxOG4obGVnYWN5OiB0cnVlKX0gaW50byBhIGB2dWUtaTE4bkB2OC54YCBjb21wYXRpYmxlIGluc3RhbmNlIG9mIGBuZXcgVnVlSTE4bmAgaW4gYSBUeXBlU2NyaXB0IGVudmlyb25tZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0gaTE4biAtIEFuIGluc3RhbmNlIG9mIHtAbGluayBJMThufVxyXG4gKiBAcmV0dXJucyBBIGkxOG4gaW5zdGFuY2Ugd2hpY2ggaXMgY2FzdGVkIHRvIHtAbGluayBWdWVJMThufSB0eXBlXHJcbiAqXHJcbiAqIEBWdWVJMThuVGlwXHJcbiAqIDpuZXc6IHByb3ZpZGVkIGJ5ICoqdnVlLWkxOG4tYnJpZGdlIG9ubHkqKlxyXG4gKlxyXG4gKiBAVnVlSTE4bkdlbmVyYWxcclxuICovXHJcbmNvbnN0IGNhc3RUb1Z1ZUkxOG4gPSAgKGkxOG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuKSA9PiB7XHJcbiAgICBpZiAoIShfX1ZVRV9JMThOX0JSSURHRV9fIGluIGkxOG4pKSB7XHJcbiAgICAgICAgdGhyb3cgY3JlYXRlSTE4bkVycm9yKEkxOG5FcnJvckNvZGVzLk5PVF9DT01QQVRJQkxFX0xFR0FDWV9WVUVfSTE4Tik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaTE4bjtcclxufTtcclxuZnVuY3Rpb24gY3JlYXRlR2xvYmFsKG9wdGlvbnMsIGxlZ2FjeU1vZGUsIFZ1ZUkxOG5MZWdhY3kgLy8gZXNsaW50LWRpc2FibGUtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbikge1xyXG4gICAgY29uc3Qgc2NvcGUgPSBlZmZlY3RTY29wZSgpO1xyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IG9iaiA9IF9fVlVFX0kxOE5fTEVHQUNZX0FQSV9fICYmIGxlZ2FjeU1vZGVcclxuICAgICAgICAgICAgPyBzY29wZS5ydW4oKCkgPT4gY3JlYXRlVnVlSTE4bihvcHRpb25zKSlcclxuICAgICAgICAgICAgOiBzY29wZS5ydW4oKCkgPT4gY3JlYXRlQ29tcG9zZXIob3B0aW9ucykpO1xyXG4gICAgICAgIGlmIChvYmogPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBjcmVhdGVJMThuRXJyb3IoSTE4bkVycm9yQ29kZXMuVU5FWFBFQ1RFRF9FUlJPUik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbc2NvcGUsIG9ial07XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZ2V0STE4bkluc3RhbmNlKGluc3RhbmNlKSB7XHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaTE4biA9IGluamVjdCghaW5zdGFuY2UuaXNDRVxyXG4gICAgICAgICAgICA/IGluc3RhbmNlLmFwcENvbnRleHQuYXBwLl9fVlVFX0kxOE5fU1lNQk9MX19cclxuICAgICAgICAgICAgOiBJMThuSW5qZWN0aW9uS2V5KTtcclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICBpZiAoIWkxOG4pIHtcclxuICAgICAgICAgICAgdGhyb3cgY3JlYXRlSTE4bkVycm9yKCFpbnN0YW5jZS5pc0NFXHJcbiAgICAgICAgICAgICAgICA/IEkxOG5FcnJvckNvZGVzLlVORVhQRUNURURfRVJST1JcclxuICAgICAgICAgICAgICAgIDogSTE4bkVycm9yQ29kZXMuTk9UX0lOU0xBTExFRF9XSVRIX1BST1ZJREUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaTE4bjtcclxuICAgIH1cclxufVxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG5mdW5jdGlvbiBnZXRTY29wZShvcHRpb25zLCBjb21wb25lbnRPcHRpb25zKSB7XHJcbiAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgIHJldHVybiBpc0VtcHR5T2JqZWN0KG9wdGlvbnMpXHJcbiAgICAgICAgPyAoJ19faTE4bicgaW4gY29tcG9uZW50T3B0aW9ucylcclxuICAgICAgICAgICAgPyAnbG9jYWwnXHJcbiAgICAgICAgICAgIDogJ2dsb2JhbCdcclxuICAgICAgICA6ICFvcHRpb25zLnVzZVNjb3BlXHJcbiAgICAgICAgICAgID8gJ2xvY2FsJ1xyXG4gICAgICAgICAgICA6IG9wdGlvbnMudXNlU2NvcGU7XHJcbn1cclxuZnVuY3Rpb24gZ2V0R2xvYmFsQ29tcG9zZXIoaTE4bikge1xyXG4gICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICByZXR1cm4gaTE4bi5tb2RlID09PSAnY29tcG9zaXRpb24nXHJcbiAgICAgICAgICAgID8gaTE4bi5nbG9iYWxcclxuICAgICAgICAgICAgOiBpMThuLmdsb2JhbC5fX2NvbXBvc2VyXHJcbiAgICAgICAgO1xyXG59XHJcbmZ1bmN0aW9uIGdldENvbXBvc2VyKGkxOG4sIHRhcmdldCwgdXNlQ29tcG9uZW50ID0gZmFsc2UpIHtcclxuICAgIGxldCBjb21wb3NlciA9IG51bGw7XHJcbiAgICBjb25zdCByb290ID0gdGFyZ2V0LnJvb3Q7XHJcbiAgICBsZXQgY3VycmVudCA9IHRhcmdldC5wYXJlbnQ7XHJcbiAgICB3aGlsZSAoY3VycmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgaTE4bkludGVybmFsID0gaTE4bjtcclxuICAgICAgICBpZiAoaTE4bi5tb2RlID09PSAnY29tcG9zaXRpb24nKSB7XHJcbiAgICAgICAgICAgIGNvbXBvc2VyID0gaTE4bkludGVybmFsLl9fZ2V0SW5zdGFuY2UoY3VycmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoX19WVUVfSTE4Tl9MRUdBQ1lfQVBJX18pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZ1ZUkxOG4gPSBpMThuSW50ZXJuYWwuX19nZXRJbnN0YW5jZShjdXJyZW50KTtcclxuICAgICAgICAgICAgICAgIGlmICh2dWVJMThuICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb3NlciA9IHZ1ZUkxOG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLl9fY29tcG9zZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVzZUNvbXBvbmVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb3NlciAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhY29tcG9zZXJbSW5lamN0V2l0aE9wdGlvbl0gLy8gZXNsaW50LWRpc2FibGUtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvc2VyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbXBvc2VyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyb290ID09PSBjdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29tcG9zZXI7XHJcbn1cclxuZnVuY3Rpb24gc2V0dXBMaWZlQ3ljbGUoaTE4biwgdGFyZ2V0LCBjb21wb3Nlcikge1xyXG4gICAgbGV0IGVtaXR0ZXIgPSBudWxsO1xyXG4gICAge1xyXG4gICAgICAgIG9uTW91bnRlZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGluamVjdCBjb21wb3NlciBpbnN0YW5jZSB0byBET00gZm9yIGludGxpZnktZGV2dG9vbHNcclxuICAgICAgICAgICAgaWYgKCgocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgfHwgX19WVUVfUFJPRF9ERVZUT09MU19fKSAmJlxyXG4gICAgICAgICAgICAgICAgIWZhbHNlICYmXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQudm5vZGUuZWwpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC52bm9kZS5lbC5fX1ZVRV9JMThOX18gPSBjb21wb3NlcjtcclxuICAgICAgICAgICAgICAgIGVtaXR0ZXIgPSBjcmVhdGVFbWl0dGVyKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgICAgICAgICAgICAgY29uc3QgX2NvbXBvc2VyID0gY29tcG9zZXI7XHJcbiAgICAgICAgICAgICAgICBfY29tcG9zZXJbRW5hYmxlRW1pdHRlcl0gJiYgX2NvbXBvc2VyW0VuYWJsZUVtaXR0ZXJdKGVtaXR0ZXIpO1xyXG4gICAgICAgICAgICAgICAgZW1pdHRlci5vbignKicsIGFkZFRpbWVsaW5lRXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGFyZ2V0KTtcclxuICAgICAgICBvblVubW91bnRlZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBjb21wb3NlciBpbnN0YW5jZSBmcm9tIERPTSBmb3IgaW50bGlmeS1kZXZ0b29sc1xyXG4gICAgICAgICAgICBpZiAoKChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB8fCBfX1ZVRV9QUk9EX0RFVlRPT0xTX18pICYmXHJcbiAgICAgICAgICAgICAgICAhZmFsc2UgJiZcclxuICAgICAgICAgICAgICAgIHRhcmdldC52bm9kZS5lbCAmJlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LnZub2RlLmVsLl9fVlVFX0kxOE5fXykge1xyXG4gICAgICAgICAgICAgICAgZW1pdHRlciAmJiBlbWl0dGVyLm9mZignKicsIGFkZFRpbWVsaW5lRXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICAgICAgICAgIGNvbnN0IF9jb21wb3NlciA9IGNvbXBvc2VyO1xyXG4gICAgICAgICAgICAgICAgX2NvbXBvc2VyW0Rpc2FibGVFbWl0dGVyXSAmJiBfY29tcG9zZXJbRGlzYWJsZUVtaXR0ZXJdKCk7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGFyZ2V0LnZub2RlLmVsLl9fVlVFX0kxOE5fXztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpMThuLl9fZGVsZXRlSW5zdGFuY2UodGFyZ2V0KTtcclxuICAgICAgICB9LCB0YXJnZXQpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHVzZUkxOG5Gb3JMZWdhY3koaW5zdGFuY2UsIHNjb3BlLCByb290LCBvcHRpb25zID0ge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbikge1xyXG4gICAgY29uc3QgaXNMb2NhbGUgPSBzY29wZSA9PT0gJ2xvY2FsJztcclxuICAgIGNvbnN0IF9jb21wb3NlciA9IHNoYWxsb3dSZWYobnVsbCk7XHJcbiAgICBpZiAoaXNMb2NhbGUgJiZcclxuICAgICAgICBpbnN0YW5jZS5wcm94eSAmJlxyXG4gICAgICAgICEoaW5zdGFuY2UucHJveHkuJG9wdGlvbnMuaTE4biB8fCBpbnN0YW5jZS5wcm94eS4kb3B0aW9ucy5fX2kxOG4pKSB7XHJcbiAgICAgICAgdGhyb3cgY3JlYXRlSTE4bkVycm9yKEkxOG5FcnJvckNvZGVzLk1VU1RfREVGSU5FX0kxOE5fT1BUSU9OX0lOX0FMTE9XX0NPTVBPU0lUSU9OKTtcclxuICAgIH1cclxuICAgIGNvbnN0IF9pbmhlcml0TG9jYWxlID0gaXNCb29sZWFuKG9wdGlvbnMuaW5oZXJpdExvY2FsZSlcclxuICAgICAgICA/IG9wdGlvbnMuaW5oZXJpdExvY2FsZVxyXG4gICAgICAgIDogdHJ1ZTtcclxuICAgIGNvbnN0IF9sb2NhbGUgPSByZWYoXHJcbiAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgIGlzTG9jYWxlICYmIF9pbmhlcml0TG9jYWxlXHJcbiAgICAgICAgPyByb290LmxvY2FsZS52YWx1ZVxyXG4gICAgICAgIDogaXNTdHJpbmcob3B0aW9ucy5sb2NhbGUpXHJcbiAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcclxuICAgICAgICAgICAgOiBERUZBVUxUX0xPQ0FMRSk7XHJcbiAgICBjb25zdCBfZmFsbGJhY2tMb2NhbGUgPSByZWYoXHJcbiAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgIGlzTG9jYWxlICYmIF9pbmhlcml0TG9jYWxlXHJcbiAgICAgICAgPyByb290LmZhbGxiYWNrTG9jYWxlLnZhbHVlXHJcbiAgICAgICAgOiBpc1N0cmluZyhvcHRpb25zLmZhbGxiYWNrTG9jYWxlKSB8fFxyXG4gICAgICAgICAgICBpc0FycmF5KG9wdGlvbnMuZmFsbGJhY2tMb2NhbGUpIHx8XHJcbiAgICAgICAgICAgIGlzUGxhaW5PYmplY3Qob3B0aW9ucy5mYWxsYmFja0xvY2FsZSkgfHxcclxuICAgICAgICAgICAgb3B0aW9ucy5mYWxsYmFja0xvY2FsZSA9PT0gZmFsc2VcclxuICAgICAgICAgICAgPyBvcHRpb25zLmZhbGxiYWNrTG9jYWxlXHJcbiAgICAgICAgICAgIDogX2xvY2FsZS52YWx1ZSk7XHJcbiAgICBjb25zdCBfbWVzc2FnZXMgPSByZWYoZ2V0TG9jYWxlTWVzc2FnZXMoX2xvY2FsZS52YWx1ZSwgb3B0aW9ucykpO1xyXG4gICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICBjb25zdCBfZGF0ZXRpbWVGb3JtYXRzID0gcmVmKGlzUGxhaW5PYmplY3Qob3B0aW9ucy5kYXRldGltZUZvcm1hdHMpXHJcbiAgICAgICAgPyBvcHRpb25zLmRhdGV0aW1lRm9ybWF0c1xyXG4gICAgICAgIDogeyBbX2xvY2FsZS52YWx1ZV06IHt9IH0pO1xyXG4gICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICBjb25zdCBfbnVtYmVyRm9ybWF0cyA9IHJlZihpc1BsYWluT2JqZWN0KG9wdGlvbnMubnVtYmVyRm9ybWF0cylcclxuICAgICAgICA/IG9wdGlvbnMubnVtYmVyRm9ybWF0c1xyXG4gICAgICAgIDogeyBbX2xvY2FsZS52YWx1ZV06IHt9IH0pO1xyXG4gICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICBjb25zdCBfbWlzc2luZ1dhcm4gPSBpc0xvY2FsZVxyXG4gICAgICAgID8gcm9vdC5taXNzaW5nV2FyblxyXG4gICAgICAgIDogaXNCb29sZWFuKG9wdGlvbnMubWlzc2luZ1dhcm4pIHx8IGlzUmVnRXhwKG9wdGlvbnMubWlzc2luZ1dhcm4pXHJcbiAgICAgICAgICAgID8gb3B0aW9ucy5taXNzaW5nV2FyblxyXG4gICAgICAgICAgICA6IHRydWU7XHJcbiAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgIGNvbnN0IF9mYWxsYmFja1dhcm4gPSBpc0xvY2FsZVxyXG4gICAgICAgID8gcm9vdC5mYWxsYmFja1dhcm5cclxuICAgICAgICA6IGlzQm9vbGVhbihvcHRpb25zLmZhbGxiYWNrV2FybikgfHwgaXNSZWdFeHAob3B0aW9ucy5mYWxsYmFja1dhcm4pXHJcbiAgICAgICAgICAgID8gb3B0aW9ucy5mYWxsYmFja1dhcm5cclxuICAgICAgICAgICAgOiB0cnVlO1xyXG4gICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICBjb25zdCBfZmFsbGJhY2tSb290ID0gaXNMb2NhbGVcclxuICAgICAgICA/IHJvb3QuZmFsbGJhY2tSb290XHJcbiAgICAgICAgOiBpc0Jvb2xlYW4ob3B0aW9ucy5mYWxsYmFja1Jvb3QpXHJcbiAgICAgICAgICAgID8gb3B0aW9ucy5mYWxsYmFja1Jvb3RcclxuICAgICAgICAgICAgOiB0cnVlO1xyXG4gICAgLy8gY29uZmlndXJlIGZhbGwgYmFjayB0byByb290XHJcbiAgICBjb25zdCBfZmFsbGJhY2tGb3JtYXQgPSAhIW9wdGlvbnMuZmFsbGJhY2tGb3JtYXQ7XHJcbiAgICAvLyBydW50aW1lIG1pc3NpbmdcclxuICAgIGNvbnN0IF9taXNzaW5nID0gaXNGdW5jdGlvbihvcHRpb25zLm1pc3NpbmcpID8gb3B0aW9ucy5taXNzaW5nIDogbnVsbDtcclxuICAgIC8vIHBvc3RUcmFuc2xhdGlvbiBoYW5kbGVyXHJcbiAgICBjb25zdCBfcG9zdFRyYW5zbGF0aW9uID0gaXNGdW5jdGlvbihvcHRpb25zLnBvc3RUcmFuc2xhdGlvbilcclxuICAgICAgICA/IG9wdGlvbnMucG9zdFRyYW5zbGF0aW9uXHJcbiAgICAgICAgOiBudWxsO1xyXG4gICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICBjb25zdCBfd2Fybkh0bWxNZXNzYWdlID0gaXNMb2NhbGVcclxuICAgICAgICA/IHJvb3Qud2Fybkh0bWxNZXNzYWdlXHJcbiAgICAgICAgOiBpc0Jvb2xlYW4ob3B0aW9ucy53YXJuSHRtbE1lc3NhZ2UpXHJcbiAgICAgICAgICAgID8gb3B0aW9ucy53YXJuSHRtbE1lc3NhZ2VcclxuICAgICAgICAgICAgOiB0cnVlO1xyXG4gICAgY29uc3QgX2VzY2FwZVBhcmFtZXRlciA9ICEhb3B0aW9ucy5lc2NhcGVQYXJhbWV0ZXI7XHJcbiAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgIGNvbnN0IF9tb2RpZmllcnMgPSBpc0xvY2FsZVxyXG4gICAgICAgID8gcm9vdC5tb2RpZmllcnNcclxuICAgICAgICA6IGlzUGxhaW5PYmplY3Qob3B0aW9ucy5tb2RpZmllcnMpXHJcbiAgICAgICAgICAgID8gb3B0aW9ucy5tb2RpZmllcnNcclxuICAgICAgICAgICAgOiB7fTtcclxuICAgIC8vIHBsdXJhbFJ1bGVzXHJcbiAgICBjb25zdCBfcGx1cmFsUnVsZXMgPSBvcHRpb25zLnBsdXJhbFJ1bGVzIHx8IChpc0xvY2FsZSAmJiByb290LnBsdXJhbFJ1bGVzKTtcclxuICAgIC8vIHRyYWNrIHJlYWN0aXZpdHlcclxuICAgIGZ1bmN0aW9uIHRyYWNrUmVhY3Rpdml0eVZhbHVlcygpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBfbG9jYWxlLnZhbHVlLFxyXG4gICAgICAgICAgICBfZmFsbGJhY2tMb2NhbGUudmFsdWUsXHJcbiAgICAgICAgICAgIF9tZXNzYWdlcy52YWx1ZSxcclxuICAgICAgICAgICAgX2RhdGV0aW1lRm9ybWF0cy52YWx1ZSxcclxuICAgICAgICAgICAgX251bWJlckZvcm1hdHMudmFsdWVcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG4gICAgLy8gbG9jYWxlXHJcbiAgICBjb25zdCBsb2NhbGUgPSBjb21wdXRlZCh7XHJcbiAgICAgICAgZ2V0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBfY29tcG9zZXIudmFsdWUgPyBfY29tcG9zZXIudmFsdWUubG9jYWxlLnZhbHVlIDogX2xvY2FsZS52YWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogdmFsID0+IHtcclxuICAgICAgICAgICAgaWYgKF9jb21wb3Nlci52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgX2NvbXBvc2VyLnZhbHVlLmxvY2FsZS52YWx1ZSA9IHZhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfbG9jYWxlLnZhbHVlID0gdmFsO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gZmFsbGJhY2tMb2NhbGVcclxuICAgIGNvbnN0IGZhbGxiYWNrTG9jYWxlID0gY29tcHV0ZWQoe1xyXG4gICAgICAgIGdldDogKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gX2NvbXBvc2VyLnZhbHVlXHJcbiAgICAgICAgICAgICAgICA/IF9jb21wb3Nlci52YWx1ZS5mYWxsYmFja0xvY2FsZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgOiBfZmFsbGJhY2tMb2NhbGUudmFsdWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IHZhbCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChfY29tcG9zZXIudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIF9jb21wb3Nlci52YWx1ZS5mYWxsYmFja0xvY2FsZS52YWx1ZSA9IHZhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfZmFsbGJhY2tMb2NhbGUudmFsdWUgPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBtZXNzYWdlc1xyXG4gICAgY29uc3QgbWVzc2FnZXMgPSBjb21wdXRlZCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKF9jb21wb3Nlci52YWx1ZSkge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgICAgICAgICByZXR1cm4gX2NvbXBvc2VyLnZhbHVlLm1lc3NhZ2VzLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICAgICAgcmV0dXJuIF9tZXNzYWdlcy52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRhdGV0aW1lRm9ybWF0cyA9IGNvbXB1dGVkKCgpID0+IF9kYXRldGltZUZvcm1hdHMudmFsdWUpO1xyXG4gICAgY29uc3QgbnVtYmVyRm9ybWF0cyA9IGNvbXB1dGVkKCgpID0+IF9udW1iZXJGb3JtYXRzLnZhbHVlKTtcclxuICAgIGZ1bmN0aW9uIGdldFBvc3RUcmFuc2xhdGlvbkhhbmRsZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9jb21wb3Nlci52YWx1ZVxyXG4gICAgICAgICAgICA/IF9jb21wb3Nlci52YWx1ZS5nZXRQb3N0VHJhbnNsYXRpb25IYW5kbGVyKClcclxuICAgICAgICAgICAgOiBfcG9zdFRyYW5zbGF0aW9uO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0UG9zdFRyYW5zbGF0aW9uSGFuZGxlcihoYW5kbGVyKSB7XHJcbiAgICAgICAgaWYgKF9jb21wb3Nlci52YWx1ZSkge1xyXG4gICAgICAgICAgICBfY29tcG9zZXIudmFsdWUuc2V0UG9zdFRyYW5zbGF0aW9uSGFuZGxlcihoYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRNaXNzaW5nSGFuZGxlcigpIHtcclxuICAgICAgICByZXR1cm4gX2NvbXBvc2VyLnZhbHVlID8gX2NvbXBvc2VyLnZhbHVlLmdldE1pc3NpbmdIYW5kbGVyKCkgOiBfbWlzc2luZztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldE1pc3NpbmdIYW5kbGVyKGhhbmRsZXIpIHtcclxuICAgICAgICBpZiAoX2NvbXBvc2VyLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIF9jb21wb3Nlci52YWx1ZS5zZXRNaXNzaW5nSGFuZGxlcihoYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB3YXJwV2l0aERlcHMoZm4pIHtcclxuICAgICAgICB0cmFja1JlYWN0aXZpdHlWYWx1ZXMoKTtcclxuICAgICAgICByZXR1cm4gZm4oKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHQoLi4uYXJncykge1xyXG4gICAgICAgIHJldHVybiBfY29tcG9zZXIudmFsdWVcclxuICAgICAgICAgICAgPyB3YXJwV2l0aERlcHMoKCkgPT4gUmVmbGVjdC5hcHBseShfY29tcG9zZXIudmFsdWUudCwgbnVsbCwgWy4uLmFyZ3NdKSlcclxuICAgICAgICAgICAgOiB3YXJwV2l0aERlcHMoKCkgPT4gJycpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcnQoLi4uYXJncykge1xyXG4gICAgICAgIHJldHVybiBfY29tcG9zZXIudmFsdWVcclxuICAgICAgICAgICAgPyBSZWZsZWN0LmFwcGx5KF9jb21wb3Nlci52YWx1ZS5ydCwgbnVsbCwgWy4uLmFyZ3NdKVxyXG4gICAgICAgICAgICA6ICcnO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZCguLi5hcmdzKSB7XHJcbiAgICAgICAgcmV0dXJuIF9jb21wb3Nlci52YWx1ZVxyXG4gICAgICAgICAgICA/IHdhcnBXaXRoRGVwcygoKSA9PiBSZWZsZWN0LmFwcGx5KF9jb21wb3Nlci52YWx1ZS5kLCBudWxsLCBbLi4uYXJnc10pKVxyXG4gICAgICAgICAgICA6IHdhcnBXaXRoRGVwcygoKSA9PiAnJyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBuKC4uLmFyZ3MpIHtcclxuICAgICAgICByZXR1cm4gX2NvbXBvc2VyLnZhbHVlXHJcbiAgICAgICAgICAgID8gd2FycFdpdGhEZXBzKCgpID0+IFJlZmxlY3QuYXBwbHkoX2NvbXBvc2VyLnZhbHVlLm4sIG51bGwsIFsuLi5hcmdzXSkpXHJcbiAgICAgICAgICAgIDogd2FycFdpdGhEZXBzKCgpID0+ICcnKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRtKGtleSkge1xyXG4gICAgICAgIHJldHVybiBfY29tcG9zZXIudmFsdWUgPyBfY29tcG9zZXIudmFsdWUudG0oa2V5KSA6IHt9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdGUoa2V5LCBsb2NhbGUpIHtcclxuICAgICAgICByZXR1cm4gX2NvbXBvc2VyLnZhbHVlID8gX2NvbXBvc2VyLnZhbHVlLnRlKGtleSwgbG9jYWxlKSA6IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0TG9jYWxlTWVzc2FnZShsb2NhbGUpIHtcclxuICAgICAgICByZXR1cm4gX2NvbXBvc2VyLnZhbHVlID8gX2NvbXBvc2VyLnZhbHVlLmdldExvY2FsZU1lc3NhZ2UobG9jYWxlKSA6IHt9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0TG9jYWxlTWVzc2FnZShsb2NhbGUsIG1lc3NhZ2UpIHtcclxuICAgICAgICBpZiAoX2NvbXBvc2VyLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIF9jb21wb3Nlci52YWx1ZS5zZXRMb2NhbGVNZXNzYWdlKGxvY2FsZSwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgIF9tZXNzYWdlcy52YWx1ZVtsb2NhbGVdID0gbWVzc2FnZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtZXJnZUxvY2FsZU1lc3NhZ2UobG9jYWxlLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgaWYgKF9jb21wb3Nlci52YWx1ZSkge1xyXG4gICAgICAgICAgICBfY29tcG9zZXIudmFsdWUubWVyZ2VMb2NhbGVNZXNzYWdlKGxvY2FsZSwgbWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0RGF0ZVRpbWVGb3JtYXQobG9jYWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIF9jb21wb3Nlci52YWx1ZSA/IF9jb21wb3Nlci52YWx1ZS5nZXREYXRlVGltZUZvcm1hdChsb2NhbGUpIDoge307XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXREYXRlVGltZUZvcm1hdChsb2NhbGUsIGZvcm1hdCkge1xyXG4gICAgICAgIGlmIChfY29tcG9zZXIudmFsdWUpIHtcclxuICAgICAgICAgICAgX2NvbXBvc2VyLnZhbHVlLnNldERhdGVUaW1lRm9ybWF0KGxvY2FsZSwgZm9ybWF0KTtcclxuICAgICAgICAgICAgX2RhdGV0aW1lRm9ybWF0cy52YWx1ZVtsb2NhbGVdID0gZm9ybWF0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1lcmdlRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCBmb3JtYXQpIHtcclxuICAgICAgICBpZiAoX2NvbXBvc2VyLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIF9jb21wb3Nlci52YWx1ZS5tZXJnZURhdGVUaW1lRm9ybWF0KGxvY2FsZSwgZm9ybWF0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXROdW1iZXJGb3JtYXQobG9jYWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIF9jb21wb3Nlci52YWx1ZSA/IF9jb21wb3Nlci52YWx1ZS5nZXROdW1iZXJGb3JtYXQobG9jYWxlKSA6IHt9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0TnVtYmVyRm9ybWF0KGxvY2FsZSwgZm9ybWF0KSB7XHJcbiAgICAgICAgaWYgKF9jb21wb3Nlci52YWx1ZSkge1xyXG4gICAgICAgICAgICBfY29tcG9zZXIudmFsdWUuc2V0TnVtYmVyRm9ybWF0KGxvY2FsZSwgZm9ybWF0KTtcclxuICAgICAgICAgICAgX251bWJlckZvcm1hdHMudmFsdWVbbG9jYWxlXSA9IGZvcm1hdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtZXJnZU51bWJlckZvcm1hdChsb2NhbGUsIGZvcm1hdCkge1xyXG4gICAgICAgIGlmIChfY29tcG9zZXIudmFsdWUpIHtcclxuICAgICAgICAgICAgX2NvbXBvc2VyLnZhbHVlLm1lcmdlTnVtYmVyRm9ybWF0KGxvY2FsZSwgZm9ybWF0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCB3cmFwcGVyID0ge1xyXG4gICAgICAgIGdldCBpZCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb21wb3Nlci52YWx1ZSA/IF9jb21wb3Nlci52YWx1ZS5pZCA6IC0xO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9jYWxlLFxyXG4gICAgICAgIGZhbGxiYWNrTG9jYWxlLFxyXG4gICAgICAgIG1lc3NhZ2VzLFxyXG4gICAgICAgIGRhdGV0aW1lRm9ybWF0cyxcclxuICAgICAgICBudW1iZXJGb3JtYXRzLFxyXG4gICAgICAgIGdldCBpbmhlcml0TG9jYWxlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX2NvbXBvc2VyLnZhbHVlID8gX2NvbXBvc2VyLnZhbHVlLmluaGVyaXRMb2NhbGUgOiBfaW5oZXJpdExvY2FsZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldCBpbmhlcml0TG9jYWxlKHZhbCkge1xyXG4gICAgICAgICAgICBpZiAoX2NvbXBvc2VyLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBfY29tcG9zZXIudmFsdWUuaW5oZXJpdExvY2FsZSA9IHZhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0IGF2YWlsYWJsZUxvY2FsZXMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfY29tcG9zZXIudmFsdWVcclxuICAgICAgICAgICAgICAgID8gX2NvbXBvc2VyLnZhbHVlLmF2YWlsYWJsZUxvY2FsZXNcclxuICAgICAgICAgICAgICAgIDogT2JqZWN0LmtleXMoX21lc3NhZ2VzLnZhbHVlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldCBtb2RpZmllcnMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoX2NvbXBvc2VyLnZhbHVlID8gX2NvbXBvc2VyLnZhbHVlLm1vZGlmaWVycyA6IF9tb2RpZmllcnMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0IHBsdXJhbFJ1bGVzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKF9jb21wb3Nlci52YWx1ZSA/IF9jb21wb3Nlci52YWx1ZS5wbHVyYWxSdWxlcyA6IF9wbHVyYWxSdWxlcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXQgaXNHbG9iYWwoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfY29tcG9zZXIudmFsdWUgPyBfY29tcG9zZXIudmFsdWUuaXNHbG9iYWwgOiBmYWxzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldCBtaXNzaW5nV2FybigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb21wb3Nlci52YWx1ZSA/IF9jb21wb3Nlci52YWx1ZS5taXNzaW5nV2FybiA6IF9taXNzaW5nV2FybjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldCBtaXNzaW5nV2Fybih2YWwpIHtcclxuICAgICAgICAgICAgaWYgKF9jb21wb3Nlci52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgX2NvbXBvc2VyLnZhbHVlLm1pc3NpbmdXYXJuID0gdmFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXQgZmFsbGJhY2tXYXJuKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX2NvbXBvc2VyLnZhbHVlID8gX2NvbXBvc2VyLnZhbHVlLmZhbGxiYWNrV2FybiA6IF9mYWxsYmFja1dhcm47XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQgZmFsbGJhY2tXYXJuKHZhbCkge1xyXG4gICAgICAgICAgICBpZiAoX2NvbXBvc2VyLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBfY29tcG9zZXIudmFsdWUubWlzc2luZ1dhcm4gPSB2YWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldCBmYWxsYmFja1Jvb3QoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfY29tcG9zZXIudmFsdWUgPyBfY29tcG9zZXIudmFsdWUuZmFsbGJhY2tSb290IDogX2ZhbGxiYWNrUm9vdDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldCBmYWxsYmFja1Jvb3QodmFsKSB7XHJcbiAgICAgICAgICAgIGlmIChfY29tcG9zZXIudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIF9jb21wb3Nlci52YWx1ZS5mYWxsYmFja1Jvb3QgPSB2YWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldCBmYWxsYmFja0Zvcm1hdCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb21wb3Nlci52YWx1ZSA/IF9jb21wb3Nlci52YWx1ZS5mYWxsYmFja0Zvcm1hdCA6IF9mYWxsYmFja0Zvcm1hdDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldCBmYWxsYmFja0Zvcm1hdCh2YWwpIHtcclxuICAgICAgICAgICAgaWYgKF9jb21wb3Nlci52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgX2NvbXBvc2VyLnZhbHVlLmZhbGxiYWNrRm9ybWF0ID0gdmFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXQgd2Fybkh0bWxNZXNzYWdlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX2NvbXBvc2VyLnZhbHVlXHJcbiAgICAgICAgICAgICAgICA/IF9jb21wb3Nlci52YWx1ZS53YXJuSHRtbE1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIDogX3dhcm5IdG1sTWVzc2FnZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldCB3YXJuSHRtbE1lc3NhZ2UodmFsKSB7XHJcbiAgICAgICAgICAgIGlmIChfY29tcG9zZXIudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIF9jb21wb3Nlci52YWx1ZS53YXJuSHRtbE1lc3NhZ2UgPSB2YWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldCBlc2NhcGVQYXJhbWV0ZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfY29tcG9zZXIudmFsdWVcclxuICAgICAgICAgICAgICAgID8gX2NvbXBvc2VyLnZhbHVlLmVzY2FwZVBhcmFtZXRlclxyXG4gICAgICAgICAgICAgICAgOiBfZXNjYXBlUGFyYW1ldGVyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0IGVzY2FwZVBhcmFtZXRlcih2YWwpIHtcclxuICAgICAgICAgICAgaWYgKF9jb21wb3Nlci52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgX2NvbXBvc2VyLnZhbHVlLmVzY2FwZVBhcmFtZXRlciA9IHZhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdCxcclxuICAgICAgICBnZXRQb3N0VHJhbnNsYXRpb25IYW5kbGVyLFxyXG4gICAgICAgIHNldFBvc3RUcmFuc2xhdGlvbkhhbmRsZXIsXHJcbiAgICAgICAgZ2V0TWlzc2luZ0hhbmRsZXIsXHJcbiAgICAgICAgc2V0TWlzc2luZ0hhbmRsZXIsXHJcbiAgICAgICAgcnQsXHJcbiAgICAgICAgZCxcclxuICAgICAgICBuLFxyXG4gICAgICAgIHRtLFxyXG4gICAgICAgIHRlLFxyXG4gICAgICAgIGdldExvY2FsZU1lc3NhZ2UsXHJcbiAgICAgICAgc2V0TG9jYWxlTWVzc2FnZSxcclxuICAgICAgICBtZXJnZUxvY2FsZU1lc3NhZ2UsXHJcbiAgICAgICAgZ2V0RGF0ZVRpbWVGb3JtYXQsXHJcbiAgICAgICAgc2V0RGF0ZVRpbWVGb3JtYXQsXHJcbiAgICAgICAgbWVyZ2VEYXRlVGltZUZvcm1hdCxcclxuICAgICAgICBnZXROdW1iZXJGb3JtYXQsXHJcbiAgICAgICAgc2V0TnVtYmVyRm9ybWF0LFxyXG4gICAgICAgIG1lcmdlTnVtYmVyRm9ybWF0XHJcbiAgICB9O1xyXG4gICAgZnVuY3Rpb24gc3luYyhjb21wb3Nlcikge1xyXG4gICAgICAgIGNvbXBvc2VyLmxvY2FsZS52YWx1ZSA9IF9sb2NhbGUudmFsdWU7XHJcbiAgICAgICAgY29tcG9zZXIuZmFsbGJhY2tMb2NhbGUudmFsdWUgPSBfZmFsbGJhY2tMb2NhbGUudmFsdWU7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoX21lc3NhZ2VzLnZhbHVlKS5mb3JFYWNoKGxvY2FsZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbXBvc2VyLm1lcmdlTG9jYWxlTWVzc2FnZShsb2NhbGUsIF9tZXNzYWdlcy52YWx1ZVtsb2NhbGVdKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBPYmplY3Qua2V5cyhfZGF0ZXRpbWVGb3JtYXRzLnZhbHVlKS5mb3JFYWNoKGxvY2FsZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbXBvc2VyLm1lcmdlRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCBfZGF0ZXRpbWVGb3JtYXRzLnZhbHVlW2xvY2FsZV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKF9udW1iZXJGb3JtYXRzLnZhbHVlKS5mb3JFYWNoKGxvY2FsZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbXBvc2VyLm1lcmdlTnVtYmVyRm9ybWF0KGxvY2FsZSwgX251bWJlckZvcm1hdHMudmFsdWVbbG9jYWxlXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29tcG9zZXIuZXNjYXBlUGFyYW1ldGVyID0gX2VzY2FwZVBhcmFtZXRlcjtcclxuICAgICAgICBjb21wb3Nlci5mYWxsYmFja0Zvcm1hdCA9IF9mYWxsYmFja0Zvcm1hdDtcclxuICAgICAgICBjb21wb3Nlci5mYWxsYmFja1Jvb3QgPSBfZmFsbGJhY2tSb290O1xyXG4gICAgICAgIGNvbXBvc2VyLmZhbGxiYWNrV2FybiA9IF9mYWxsYmFja1dhcm47XHJcbiAgICAgICAgY29tcG9zZXIubWlzc2luZ1dhcm4gPSBfbWlzc2luZ1dhcm47XHJcbiAgICAgICAgY29tcG9zZXIud2Fybkh0bWxNZXNzYWdlID0gX3dhcm5IdG1sTWVzc2FnZTtcclxuICAgIH1cclxuICAgIG9uQmVmb3JlTW91bnQoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm94eSA9PSBudWxsIHx8IGluc3RhbmNlLnByb3h5LiRpMThuID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgY3JlYXRlSTE4bkVycm9yKEkxOG5FcnJvckNvZGVzLk5PVF9BVkFJTEFCTEVfQ09NUE9TSVRJT05fSU5fTEVHQUNZKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICBjb25zdCBjb21wb3NlciA9IChfY29tcG9zZXIudmFsdWUgPSBpbnN0YW5jZS5wcm94eS4kaTE4blxyXG4gICAgICAgICAgICAuX19jb21wb3Nlcik7XHJcbiAgICAgICAgaWYgKHNjb3BlID09PSAnZ2xvYmFsJykge1xyXG4gICAgICAgICAgICBfbG9jYWxlLnZhbHVlID0gY29tcG9zZXIubG9jYWxlLnZhbHVlO1xyXG4gICAgICAgICAgICBfZmFsbGJhY2tMb2NhbGUudmFsdWUgPSBjb21wb3Nlci5mYWxsYmFja0xvY2FsZS52YWx1ZTtcclxuICAgICAgICAgICAgX21lc3NhZ2VzLnZhbHVlID0gY29tcG9zZXIubWVzc2FnZXMudmFsdWU7XHJcbiAgICAgICAgICAgIF9kYXRldGltZUZvcm1hdHMudmFsdWUgPSBjb21wb3Nlci5kYXRldGltZUZvcm1hdHMudmFsdWU7XHJcbiAgICAgICAgICAgIF9udW1iZXJGb3JtYXRzLnZhbHVlID0gY29tcG9zZXIubnVtYmVyRm9ybWF0cy52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNMb2NhbGUpIHtcclxuICAgICAgICAgICAgc3luYyhjb21wb3Nlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gd3JhcHBlcjtcclxufVxyXG5jb25zdCBnbG9iYWxFeHBvcnRQcm9wcyA9IFtcclxuICAgICdsb2NhbGUnLFxyXG4gICAgJ2ZhbGxiYWNrTG9jYWxlJyxcclxuICAgICdhdmFpbGFibGVMb2NhbGVzJ1xyXG5dO1xyXG5jb25zdCBnbG9iYWxFeHBvcnRNZXRob2RzID0gWyd0JywgJ3J0JywgJ2QnLCAnbicsICd0bSddIDtcclxuZnVuY3Rpb24gaW5qZWN0R2xvYmFsRmllbGRzKGFwcCwgY29tcG9zZXIpIHtcclxuICAgIGNvbnN0IGkxOG4gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gICAgZ2xvYmFsRXhwb3J0UHJvcHMuZm9yRWFjaChwcm9wID0+IHtcclxuICAgICAgICBjb25zdCBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb21wb3NlciwgcHJvcCk7XHJcbiAgICAgICAgaWYgKCFkZXNjKSB7XHJcbiAgICAgICAgICAgIHRocm93IGNyZWF0ZUkxOG5FcnJvcihJMThuRXJyb3JDb2Rlcy5VTkVYUEVDVEVEX0VSUk9SKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgd3JhcCA9IGlzUmVmKGRlc2MudmFsdWUpIC8vIGNoZWNrIGNvbXB1dGVkIHByb3BzXHJcbiAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZXNjLnZhbHVlLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICAgICAgICAgICAgICBzZXQodmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzYy52YWx1ZS52YWx1ZSA9IHZhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVzYy5nZXQgJiYgZGVzYy5nZXQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoaTE4biwgcHJvcCwgd3JhcCk7XHJcbiAgICB9KTtcclxuICAgIGFwcC5jb25maWcuZ2xvYmFsUHJvcGVydGllcy4kaTE4biA9IGkxOG47XHJcbiAgICBnbG9iYWxFeHBvcnRNZXRob2RzLmZvckVhY2gobWV0aG9kID0+IHtcclxuICAgICAgICBjb25zdCBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb21wb3NlciwgbWV0aG9kKTtcclxuICAgICAgICBpZiAoIWRlc2MgfHwgIWRlc2MudmFsdWUpIHtcclxuICAgICAgICAgICAgdGhyb3cgY3JlYXRlSTE4bkVycm9yKEkxOG5FcnJvckNvZGVzLlVORVhQRUNURURfRVJST1IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYXBwLmNvbmZpZy5nbG9iYWxQcm9wZXJ0aWVzLCBgJCR7bWV0aG9kfWAsIGRlc2MpO1xyXG4gICAgfSk7XHJcbn1cblxuLy8gcmVnaXN0ZXIgbWVzc2FnZSByZXNvbHZlciBhdCB2dWUtaTE4blxyXG5yZWdpc3Rlck1lc3NhZ2VSZXNvbHZlcihyZXNvbHZlVmFsdWUpO1xyXG4vLyByZWdpc3RlciBmYWxsYmFjayBsb2NhbGUgYXQgdnVlLWkxOG5cclxucmVnaXN0ZXJMb2NhbGVGYWxsYmFja2VyKGZhbGxiYWNrV2l0aExvY2FsZUNoYWluKTtcclxue1xyXG4gICAgaW5pdEZlYXR1cmVGbGFncygpO1xyXG59XHJcbi8vIE5PVEU6IGV4cGVyaW1lbnRhbCAhIVxyXG5pZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHx8IF9fSU5UTElGWV9QUk9EX0RFVlRPT0xTX18pIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGdldEdsb2JhbFRoaXMoKTtcclxuICAgIHRhcmdldC5fX0lOVExJRllfXyA9IHRydWU7XHJcbiAgICBzZXREZXZUb29sc0hvb2sodGFyZ2V0Ll9fSU5UTElGWV9ERVZUT09MU19HTE9CQUxfSE9PS19fKTtcclxufVxyXG5pZiAoKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpKSA7XG5cbmV4cG9ydCB7IERhdGV0aW1lRm9ybWF0LCBJMThuSW5qZWN0aW9uS2V5LCBOdW1iZXJGb3JtYXQsIFRyYW5zbGF0aW9uLCBWRVJTSU9OLCBjYXN0VG9WdWVJMThuLCBjcmVhdGVJMThuLCB1c2VJMThuLCB2VERpcmVjdGl2ZSB9O1xuIl0sIm5hbWVzIjpbImNvZGUiLCJ0eXBlIiwiVkVSU0lPTiIsImluYyIsInJlc29sdmVWYWx1ZSIsIm1zZyIsInNvdXJjZSIsIm1lc3NhZ2UiLCJsb2NhbGUiLCJnbG9iYWwiLCJsb2NhbGVzIiwiX2NvbnRleHQiLCJtZXNzYWdlcyIsIm9wdGlvbnMiLCJjb21wb3NlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQSxNQUFNLFlBQVksT0FBTyxXQUFXO0FBK0JwQyxNQUFNLFlBQVksT0FBTyxXQUFXLGNBQWMsT0FBTyxPQUFPLGdCQUFnQjtBQUNoRixNQUFNLGFBQWEsQ0FBQyxTQUFTLFlBQVksT0FBTyxJQUFJLElBQUk7QUFDeEQsTUFBTSx5QkFBeUIsQ0FBQyxRQUFRLEtBQUssV0FBVyxzQkFBc0IsRUFBRSxHQUFHLFFBQVEsR0FBRyxLQUFLLEdBQUcsT0FBUSxDQUFBO0FBQzlHLE1BQU0sd0JBQXdCLENBQUMsU0FBUyxLQUFLLFVBQVUsSUFBSSxFQUN0RCxRQUFRLFdBQVcsU0FBUyxFQUM1QixRQUFRLFdBQVcsU0FBUyxFQUM1QixRQUFRLFdBQVcsU0FBUztBQUNqQyxNQUFNLFdBQVcsQ0FBQyxRQUFRLE9BQU8sUUFBUSxZQUFZLFNBQVMsR0FBRztBQUNqRSxNQUFNLFNBQVMsQ0FBQyxRQUFRLGFBQWEsR0FBRyxNQUFNO0FBQzlDLE1BQU0sV0FBVyxDQUFDLFFBQVEsYUFBYSxHQUFHLE1BQU07QUFDaEQsTUFBTSxnQkFBZ0IsQ0FBQyxRQUFRLGNBQWMsR0FBRyxLQUFLLE9BQU8sS0FBSyxHQUFHLEVBQUUsV0FBVztBQUNqRixTQUFTLEtBQUssS0FBSyxLQUFLO0FBQ3BCLE1BQUksT0FBTyxZQUFZLGFBQWE7QUFDaEMsWUFBUSxLQUFLLGVBQWUsR0FBRztBQUUvQixRQUFJLEtBQUs7QUFDTCxjQUFRLEtBQUssSUFBSSxLQUFLO0FBQUEsSUFDekI7QUFBQSxFQUNKO0FBQ0w7QUFDQSxNQUFNLFNBQVMsT0FBTztBQUN0QixJQUFJO0FBQ0osTUFBTSxnQkFBZ0IsTUFBTTtBQUV4QixTQUFRLGdCQUNILGNBQ0csT0FBTyxlQUFlLGNBQ2hCLGFBQ0EsT0FBTyxTQUFT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
