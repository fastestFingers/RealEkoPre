import { az as registerPlugin, u as __vitePreload } from "./index.61ed5618.js";
const Geolocation = registerPlugin("Geolocation", {
  web: () => __vitePreload(() => import("./web.2347f102.js"), true ? ["assets/web.2347f102.js","assets/index.61ed5618.js","assets/index.dbee30c0.css"] : void 0).then((m) => new m.GeolocationWeb())
});
function checkReady() {
  if (typeof process === "undefined") {
    var win_1 = typeof window !== "undefined" ? window : {};
    var DEVICE_READY_TIMEOUT_1 = 5e3;
    var before_1 = Date.now();
    var didFireReady_1 = false;
    win_1.document.addEventListener("deviceready", function() {
      console.log("Ionic Native: deviceready event fired after " + (Date.now() - before_1) + " ms");
      didFireReady_1 = true;
    });
    setTimeout(function() {
      if (!didFireReady_1 && win_1.cordova) {
        console.warn("Ionic Native: deviceready did not fire within " + DEVICE_READY_TIMEOUT_1 + "ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.");
      }
    }, DEVICE_READY_TIMEOUT_1);
  }
}
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends$1(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function awaitReturn(f) {
    return function(v) {
      return Promise.resolve(v).then(f, reject);
    };
  }
  function verb(n, f) {
    if (g[n]) {
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
      if (f)
        i[n] = f(i[n]);
    }
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length)
      resume(q[0][0], q[0][1]);
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function isFunction(value) {
  return typeof value === "function";
}
function createErrorClass(createImpl) {
  var _super = function(instance) {
    Error.call(instance);
    instance.stack = new Error().stack;
  };
  var ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}
var UnsubscriptionError = createErrorClass(function(_super) {
  return function UnsubscriptionErrorImpl(errors) {
    _super(this);
    this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
      return i + 1 + ") " + err.toString();
    }).join("\n  ") : "";
    this.name = "UnsubscriptionError";
    this.errors = errors;
  };
});
function arrRemove(arr, item) {
  if (arr) {
    var index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}
var Subscription = function() {
  function Subscription2(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  Subscription2.prototype.unsubscribe = function() {
    var e_1, _a, e_2, _b;
    var errors;
    if (!this.closed) {
      this.closed = true;
      var _parentage = this._parentage;
      if (_parentage) {
        this._parentage = null;
        if (Array.isArray(_parentage)) {
          try {
            for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
              var parent_1 = _parentage_1_1.value;
              parent_1.remove(this);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return))
                _a.call(_parentage_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
        } else {
          _parentage.remove(this);
        }
      }
      var initialFinalizer = this.initialTeardown;
      if (isFunction(initialFinalizer)) {
        try {
          initialFinalizer();
        } catch (e) {
          errors = e instanceof UnsubscriptionError ? e.errors : [e];
        }
      }
      var _finalizers = this._finalizers;
      if (_finalizers) {
        this._finalizers = null;
        try {
          for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
            var finalizer = _finalizers_1_1.value;
            try {
              execFinalizer(finalizer);
            } catch (err) {
              errors = errors !== null && errors !== void 0 ? errors : [];
              if (err instanceof UnsubscriptionError) {
                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
              } else {
                errors.push(err);
              }
            }
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return))
              _b.call(_finalizers_1);
          } finally {
            if (e_2)
              throw e_2.error;
          }
        }
      }
      if (errors) {
        throw new UnsubscriptionError(errors);
      }
    }
  };
  Subscription2.prototype.add = function(teardown) {
    var _a;
    if (teardown && teardown !== this) {
      if (this.closed) {
        execFinalizer(teardown);
      } else {
        if (teardown instanceof Subscription2) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }
          teardown._addParent(this);
        }
        (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
      }
    }
  };
  Subscription2.prototype._hasParent = function(parent) {
    var _parentage = this._parentage;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  };
  Subscription2.prototype._addParent = function(parent) {
    var _parentage = this._parentage;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  };
  Subscription2.prototype._removeParent = function(parent) {
    var _parentage = this._parentage;
    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      arrRemove(_parentage, parent);
    }
  };
  Subscription2.prototype.remove = function(teardown) {
    var _finalizers = this._finalizers;
    _finalizers && arrRemove(_finalizers, teardown);
    if (teardown instanceof Subscription2) {
      teardown._removeParent(this);
    }
  };
  Subscription2.EMPTY = function() {
    var empty = new Subscription2();
    empty.closed = true;
    return empty;
  }();
  return Subscription2;
}();
Subscription.EMPTY;
function isSubscription(value) {
  return value instanceof Subscription || value && "closed" in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
}
function execFinalizer(finalizer) {
  if (isFunction(finalizer)) {
    finalizer();
  } else {
    finalizer.unsubscribe();
  }
}
var config = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};
var timeoutProvider = {
  setTimeout: function(handler, timeout) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    var delegate = timeoutProvider.delegate;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
      return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
    }
    return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
  },
  clearTimeout: function(handle) {
    var delegate = timeoutProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
  },
  delegate: void 0
};
function reportUnhandledError(err) {
  timeoutProvider.setTimeout(function() {
    {
      throw err;
    }
  });
}
function noop() {
}
function errorContext(cb) {
  {
    cb();
  }
}
var Subscriber = function(_super) {
  __extends$1(Subscriber2, _super);
  function Subscriber2(destination) {
    var _this = _super.call(this) || this;
    _this.isStopped = false;
    if (destination) {
      _this.destination = destination;
      if (isSubscription(destination)) {
        destination.add(_this);
      }
    } else {
      _this.destination = EMPTY_OBSERVER;
    }
    return _this;
  }
  Subscriber2.create = function(next, error, complete) {
    return new SafeSubscriber(next, error, complete);
  };
  Subscriber2.prototype.next = function(value) {
    if (this.isStopped)
      ;
    else {
      this._next(value);
    }
  };
  Subscriber2.prototype.error = function(err) {
    if (this.isStopped)
      ;
    else {
      this.isStopped = true;
      this._error(err);
    }
  };
  Subscriber2.prototype.complete = function() {
    if (this.isStopped)
      ;
    else {
      this.isStopped = true;
      this._complete();
    }
  };
  Subscriber2.prototype.unsubscribe = function() {
    if (!this.closed) {
      this.isStopped = true;
      _super.prototype.unsubscribe.call(this);
      this.destination = null;
    }
  };
  Subscriber2.prototype._next = function(value) {
    this.destination.next(value);
  };
  Subscriber2.prototype._error = function(err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  };
  Subscriber2.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  };
  return Subscriber2;
}(Subscription);
var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
  return _bind.call(fn, thisArg);
}
var ConsumerObserver = function() {
  function ConsumerObserver2(partialObserver) {
    this.partialObserver = partialObserver;
  }
  ConsumerObserver2.prototype.next = function(value) {
    var partialObserver = this.partialObserver;
    if (partialObserver.next) {
      try {
        partialObserver.next(value);
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };
  ConsumerObserver2.prototype.error = function(err) {
    var partialObserver = this.partialObserver;
    if (partialObserver.error) {
      try {
        partialObserver.error(err);
      } catch (error) {
        handleUnhandledError(error);
      }
    } else {
      handleUnhandledError(err);
    }
  };
  ConsumerObserver2.prototype.complete = function() {
    var partialObserver = this.partialObserver;
    if (partialObserver.complete) {
      try {
        partialObserver.complete();
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };
  return ConsumerObserver2;
}();
var SafeSubscriber = function(_super) {
  __extends$1(SafeSubscriber2, _super);
  function SafeSubscriber2(observerOrNext, error, complete) {
    var _this = _super.call(this) || this;
    var partialObserver;
    if (isFunction(observerOrNext) || !observerOrNext) {
      partialObserver = {
        next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
        error: error !== null && error !== void 0 ? error : void 0,
        complete: complete !== null && complete !== void 0 ? complete : void 0
      };
    } else {
      var context_1;
      if (_this && config.useDeprecatedNextContext) {
        context_1 = Object.create(observerOrNext);
        context_1.unsubscribe = function() {
          return _this.unsubscribe();
        };
        partialObserver = {
          next: observerOrNext.next && bind(observerOrNext.next, context_1),
          error: observerOrNext.error && bind(observerOrNext.error, context_1),
          complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
        };
      } else {
        partialObserver = observerOrNext;
      }
    }
    _this.destination = new ConsumerObserver(partialObserver);
    return _this;
  }
  return SafeSubscriber2;
}(Subscriber);
function handleUnhandledError(error) {
  {
    reportUnhandledError(error);
  }
}
function defaultErrorHandler(err) {
  throw err;
}
var EMPTY_OBSERVER = {
  closed: true,
  next: noop,
  error: defaultErrorHandler,
  complete: noop
};
var observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
function identity(x) {
  return x;
}
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce(function(prev, fn) {
      return fn(prev);
    }, input);
  };
}
var Observable = function() {
  function Observable2(subscribe) {
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }
  Observable2.prototype.lift = function(operator) {
    var observable2 = new Observable2();
    observable2.source = this;
    observable2.operator = operator;
    return observable2;
  };
  Observable2.prototype.subscribe = function(observerOrNext, error, complete) {
    var _this = this;
    var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
    errorContext(function() {
      var _a = _this, operator = _a.operator, source = _a.source;
      subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
    });
    return subscriber;
  };
  Observable2.prototype._trySubscribe = function(sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      sink.error(err);
    }
  };
  Observable2.prototype.forEach = function(next, promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function(resolve, reject) {
      var subscriber = new SafeSubscriber({
        next: function(value) {
          try {
            next(value);
          } catch (err) {
            reject(err);
            subscriber.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
      _this.subscribe(subscriber);
    });
  };
  Observable2.prototype._subscribe = function(subscriber) {
    var _a;
    return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
  };
  Observable2.prototype[observable] = function() {
    return this;
  };
  Observable2.prototype.pipe = function() {
    var operations = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      operations[_i] = arguments[_i];
    }
    return pipeFromArray(operations)(this);
  };
  Observable2.prototype.toPromise = function(promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function(resolve, reject) {
      var value;
      _this.subscribe(function(x) {
        return value = x;
      }, function(err) {
        return reject(err);
      }, function() {
        return resolve(value);
      });
    });
  };
  Observable2.create = function(subscribe) {
    return new Observable2(subscribe);
  };
  return Observable2;
}();
function getPromiseCtor(promiseCtor) {
  var _a;
  return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
  return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
  return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
}
function hasLift(source) {
  return isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
  return function(source) {
    if (hasLift(source)) {
      return source.lift(function(liftedSource) {
        try {
          return init(liftedSource, this);
        } catch (err) {
          this.error(err);
        }
      });
    }
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
  return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = function(_super) {
  __extends$1(OperatorSubscriber2, _super);
  function OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
    var _this = _super.call(this, destination) || this;
    _this.onFinalize = onFinalize;
    _this.shouldUnsubscribe = shouldUnsubscribe;
    _this._next = onNext ? function(value) {
      try {
        onNext(value);
      } catch (err) {
        destination.error(err);
      }
    } : _super.prototype._next;
    _this._error = onError ? function(err) {
      try {
        onError(err);
      } catch (err2) {
        destination.error(err2);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._error;
    _this._complete = onComplete ? function() {
      try {
        onComplete();
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._complete;
    return _this;
  }
  OperatorSubscriber2.prototype.unsubscribe = function() {
    var _a;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var closed_1 = this.closed;
      _super.prototype.unsubscribe.call(this);
      !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
    }
  };
  return OperatorSubscriber2;
}(Subscriber);
var isArrayLike = function(x) {
  return x && typeof x.length === "number" && typeof x !== "function";
};
function isPromise(value) {
  return isFunction(value === null || value === void 0 ? void 0 : value.then);
}
function isInteropObservable(input) {
  return isFunction(input[observable]);
}
function isAsyncIterable(obj) {
  return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
function createInvalidObservableTypeError(input) {
  return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function getSymbolIterator() {
  if (typeof Symbol !== "function" || !Symbol.iterator) {
    return "@@iterator";
  }
  return Symbol.iterator;
}
var iterator = getSymbolIterator();
function isIterable(input) {
  return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
}
function readableStreamLikeToAsyncGenerator(readableStream) {
  return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
    var reader, _a, value, done;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          reader = readableStream.getReader();
          _b.label = 1;
        case 1:
          _b.trys.push([1, , 9, 10]);
          _b.label = 2;
        case 2:
          return [4, __await(reader.read())];
        case 3:
          _a = _b.sent(), value = _a.value, done = _a.done;
          if (!done)
            return [3, 5];
          return [4, __await(void 0)];
        case 4:
          return [2, _b.sent()];
        case 5:
          return [4, __await(value)];
        case 6:
          return [4, _b.sent()];
        case 7:
          _b.sent();
          return [3, 2];
        case 8:
          return [3, 10];
        case 9:
          reader.releaseLock();
          return [7];
        case 10:
          return [2];
      }
    });
  });
}
function isReadableStreamLike(obj) {
  return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}
function innerFrom(input) {
  if (input instanceof Observable) {
    return input;
  }
  if (input != null) {
    if (isInteropObservable(input)) {
      return fromInteropObservable(input);
    }
    if (isArrayLike(input)) {
      return fromArrayLike(input);
    }
    if (isPromise(input)) {
      return fromPromise(input);
    }
    if (isAsyncIterable(input)) {
      return fromAsyncIterable(input);
    }
    if (isIterable(input)) {
      return fromIterable(input);
    }
    if (isReadableStreamLike(input)) {
      return fromReadableStreamLike(input);
    }
  }
  throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
  return new Observable(function(subscriber) {
    var obs = obj[observable]();
    if (isFunction(obs.subscribe)) {
      return obs.subscribe(subscriber);
    }
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function fromArrayLike(array) {
  return new Observable(function(subscriber) {
    for (var i = 0; i < array.length && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }
    subscriber.complete();
  });
}
function fromPromise(promise) {
  return new Observable(function(subscriber) {
    promise.then(function(value) {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, function(err) {
      return subscriber.error(err);
    }).then(null, reportUnhandledError);
  });
}
function fromIterable(iterable) {
  return new Observable(function(subscriber) {
    var e_1, _a;
    try {
      for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
        var value = iterable_1_1.value;
        subscriber.next(value);
        if (subscriber.closed) {
          return;
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return))
          _a.call(iterable_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    subscriber.complete();
  });
}
function fromAsyncIterable(asyncIterable) {
  return new Observable(function(subscriber) {
    process$1(asyncIterable, subscriber).catch(function(err) {
      return subscriber.error(err);
    });
  });
}
function fromReadableStreamLike(readableStream) {
  return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
function process$1(asyncIterable, subscriber) {
  var asyncIterable_1, asyncIterable_1_1;
  var e_2, _a;
  return __awaiter(this, void 0, void 0, function() {
    var value, e_2_1;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          _b.trys.push([0, 5, 6, 11]);
          asyncIterable_1 = __asyncValues(asyncIterable);
          _b.label = 1;
        case 1:
          return [4, asyncIterable_1.next()];
        case 2:
          if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done))
            return [3, 4];
          value = asyncIterable_1_1.value;
          subscriber.next(value);
          if (subscriber.closed) {
            return [2];
          }
          _b.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          e_2_1 = _b.sent();
          e_2 = { error: e_2_1 };
          return [3, 11];
        case 6:
          _b.trys.push([6, , 9, 10]);
          if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return)))
            return [3, 8];
          return [4, _a.call(asyncIterable_1)];
        case 7:
          _b.sent();
          _b.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (e_2)
            throw e_2.error;
          return [7];
        case 10:
          return [7];
        case 11:
          subscriber.complete();
          return [2];
      }
    });
  });
}
function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
  if (delay === void 0) {
    delay = 0;
  }
  if (repeat === void 0) {
    repeat = false;
  }
  var scheduleSubscription = scheduler.schedule(function() {
    work();
    if (repeat) {
      parentSubscription.add(this.schedule(null, delay));
    } else {
      this.unsubscribe();
    }
  }, delay);
  parentSubscription.add(scheduleSubscription);
  if (!repeat) {
    return scheduleSubscription;
  }
}
function map(project, thisArg) {
  return operate(function(source, subscriber) {
    var index = 0;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      subscriber.next(project.call(thisArg, value, index++));
    }));
  });
}
var isArray = Array.isArray;
function callOrApply(fn, args) {
  return isArray(args) ? fn.apply(void 0, __spreadArray([], __read(args))) : fn(args);
}
function mapOneOrManyArgs(fn) {
  return map(function(args) {
    return callOrApply(fn, args);
  });
}
function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
  var buffer = [];
  var active = 0;
  var index = 0;
  var isComplete = false;
  var checkComplete = function() {
    if (isComplete && !buffer.length && !active) {
      subscriber.complete();
    }
  };
  var outerNext = function(value) {
    return active < concurrent ? doInnerSub(value) : buffer.push(value);
  };
  var doInnerSub = function(value) {
    expand && subscriber.next(value);
    active++;
    var innerComplete = false;
    innerFrom(project(value, index++)).subscribe(createOperatorSubscriber(subscriber, function(innerValue) {
      onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
      if (expand) {
        outerNext(innerValue);
      } else {
        subscriber.next(innerValue);
      }
    }, function() {
      innerComplete = true;
    }, void 0, function() {
      if (innerComplete) {
        try {
          active--;
          var _loop_1 = function() {
            var bufferedValue = buffer.shift();
            if (innerSubScheduler) {
              executeSchedule(subscriber, innerSubScheduler, function() {
                return doInnerSub(bufferedValue);
              });
            } else {
              doInnerSub(bufferedValue);
            }
          };
          while (buffer.length && active < concurrent) {
            _loop_1();
          }
          checkComplete();
        } catch (err) {
          subscriber.error(err);
        }
      }
    }));
  };
  source.subscribe(createOperatorSubscriber(subscriber, outerNext, function() {
    isComplete = true;
    checkComplete();
  }));
  return function() {
    additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
  };
}
function mergeMap(project, resultSelector, concurrent) {
  if (concurrent === void 0) {
    concurrent = Infinity;
  }
  if (isFunction(resultSelector)) {
    return mergeMap(function(a, i) {
      return map(function(b, ii) {
        return resultSelector(a, b, i, ii);
      })(innerFrom(project(a, i)));
    }, concurrent);
  } else if (typeof resultSelector === "number") {
    concurrent = resultSelector;
  }
  return operate(function(source, subscriber) {
    return mergeInternals(source, subscriber, project, concurrent);
  });
}
var nodeEventEmitterMethods = ["addListener", "removeListener"];
var eventTargetMethods = ["addEventListener", "removeEventListener"];
var jqueryMethods = ["on", "off"];
function fromEvent(target, eventName, options, resultSelector) {
  if (isFunction(options)) {
    resultSelector = options;
    options = void 0;
  }
  if (resultSelector) {
    return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs(resultSelector));
  }
  var _a = __read(isEventTarget(target) ? eventTargetMethods.map(function(methodName) {
    return function(handler) {
      return target[methodName](eventName, handler, options);
    };
  }) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [], 2), add = _a[0], remove = _a[1];
  if (!add) {
    if (isArrayLike(target)) {
      return mergeMap(function(subTarget) {
        return fromEvent(subTarget, eventName, options);
      })(innerFrom(target));
    }
  }
  if (!add) {
    throw new TypeError("Invalid event target");
  }
  return new Observable(function(subscriber) {
    var handler = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return subscriber.next(1 < args.length ? args : args[0]);
    };
    add(handler);
    return function() {
      return remove(handler);
    };
  });
}
function toCommonHandlerRegistry(target, eventName) {
  return function(methodName) {
    return function(handler) {
      return target[methodName](eventName, handler);
    };
  };
}
function isNodeStyleEventEmitter(target) {
  return isFunction(target.addListener) && isFunction(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
  return isFunction(target.on) && isFunction(target.off);
}
function isEventTarget(target) {
  return isFunction(target.addEventListener) && isFunction(target.removeEventListener);
}
var ERR_CORDOVA_NOT_AVAILABLE = { error: "cordova_not_available" };
var ERR_PLUGIN_NOT_INSTALLED = { error: "plugin_not_installed" };
function getPromise(callback) {
  var tryNativePromise = function() {
    if (Promise) {
      return new Promise(function(resolve, reject) {
        callback(resolve, reject);
      });
    } else {
      console.error("No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.");
    }
  };
  if (typeof window !== "undefined" && window.angular) {
    var doc = window.document;
    var injector = window.angular.element(doc.querySelector("[ng-app]") || doc.body).injector();
    if (injector) {
      var $q = injector.get("$q");
      return $q(function(resolve, reject) {
        callback(resolve, reject);
      });
    }
    console.warn("Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve.");
  }
  return tryNativePromise();
}
function wrapPromise(pluginObj, methodName, args, opts) {
  if (opts === void 0) {
    opts = {};
  }
  var pluginResult, rej;
  var p = getPromise(function(resolve, reject) {
    if (opts.destruct) {
      pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function() {
        var args2 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args2[_i] = arguments[_i];
        }
        return resolve(args2);
      }, function() {
        var args2 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args2[_i] = arguments[_i];
        }
        return reject(args2);
      });
    } else {
      pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject);
    }
    rej = reject;
  });
  if (pluginResult && pluginResult.error) {
    p.catch(function() {
    });
    typeof rej === "function" && rej(pluginResult.error);
  }
  return p;
}
function wrapOtherPromise(pluginObj, methodName, args, opts) {
  if (opts === void 0) {
    opts = {};
  }
  return getPromise(function(resolve, reject) {
    var pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts);
    if (pluginResult) {
      if (pluginResult.error) {
        reject(pluginResult.error);
      } else if (pluginResult.then) {
        pluginResult.then(resolve).catch(reject);
      }
    } else {
      reject({ error: "unexpected_error" });
    }
  });
}
function wrapObservable(pluginObj, methodName, args, opts) {
  if (opts === void 0) {
    opts = {};
  }
  return new Observable(function(observer) {
    var pluginResult;
    if (opts.destruct) {
      pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function() {
        var args2 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args2[_i] = arguments[_i];
        }
        return observer.next(args2);
      }, function() {
        var args2 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args2[_i] = arguments[_i];
        }
        return observer.error(args2);
      });
    } else {
      pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
    }
    if (pluginResult && pluginResult.error) {
      observer.error(pluginResult.error);
      observer.complete();
    }
    return function() {
      try {
        if (opts.clearFunction) {
          if (opts.clearWithArgs) {
            return callCordovaPlugin(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
          }
          return callCordovaPlugin(pluginObj, opts.clearFunction, []);
        }
      } catch (e) {
        console.warn("Unable to clear the previous observable watch for", pluginObj.constructor.getPluginName(), methodName);
        console.warn(e);
      }
    };
  });
}
function wrapEventObservable(event, element) {
  element = typeof window !== "undefined" && element ? get$1(window, element) : element || (typeof window !== "undefined" ? window : {});
  return fromEvent(element, event);
}
function checkAvailability(plugin, methodName, pluginName) {
  var pluginRef, pluginPackage;
  if (typeof plugin === "string") {
    pluginRef = plugin;
  } else {
    pluginRef = plugin.constructor.getPluginRef();
    pluginName = plugin.constructor.getPluginName();
    pluginPackage = plugin.constructor.getPluginInstallName();
  }
  var pluginInstance = getPlugin(pluginRef);
  if (!pluginInstance || !!methodName && typeof pluginInstance[methodName] === "undefined") {
    if (typeof window === "undefined" || !window.cordova) {
      cordovaWarn(pluginName, methodName);
      return ERR_CORDOVA_NOT_AVAILABLE;
    }
    pluginWarn(pluginName, pluginPackage, methodName);
    return ERR_PLUGIN_NOT_INSTALLED;
  }
  return true;
}
function setIndex(args, opts, resolve, reject) {
  if (opts === void 0) {
    opts = {};
  }
  if (opts.sync) {
    return args;
  }
  if (opts.callbackOrder === "reverse") {
    args.unshift(reject);
    args.unshift(resolve);
  } else if (opts.callbackStyle === "node") {
    args.push(function(err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  } else if (opts.callbackStyle === "object" && opts.successName && opts.errorName) {
    var obj = {};
    obj[opts.successName] = resolve;
    obj[opts.errorName] = reject;
    args.push(obj);
  } else if (typeof opts.successIndex !== "undefined" || typeof opts.errorIndex !== "undefined") {
    var setSuccessIndex = function() {
      if (opts.successIndex > args.length) {
        args[opts.successIndex] = resolve;
      } else {
        args.splice(opts.successIndex, 0, resolve);
      }
    };
    var setErrorIndex = function() {
      if (opts.errorIndex > args.length) {
        args[opts.errorIndex] = reject;
      } else {
        args.splice(opts.errorIndex, 0, reject);
      }
    };
    if (opts.successIndex > opts.errorIndex) {
      setErrorIndex();
      setSuccessIndex();
    } else {
      setSuccessIndex();
      setErrorIndex();
    }
  } else {
    args.push(resolve);
    args.push(reject);
  }
  return args;
}
function callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject) {
  if (opts === void 0) {
    opts = {};
  }
  args = setIndex(args, opts, resolve, reject);
  var availabilityCheck = checkAvailability(pluginObj, methodName);
  if (availabilityCheck === true) {
    var pluginInstance = getPlugin(pluginObj.constructor.getPluginRef());
    return pluginInstance[methodName].apply(pluginInstance, args);
  } else {
    return availabilityCheck;
  }
}
function getPlugin(pluginRef) {
  if (typeof window !== "undefined") {
    return get$1(window, pluginRef);
  }
  return null;
}
function get$1(element, path) {
  var paths = path.split(".");
  var obj = element;
  for (var i = 0; i < paths.length; i++) {
    if (!obj) {
      return null;
    }
    obj = obj[paths[i]];
  }
  return obj;
}
function pluginWarn(pluginName, plugin, method) {
  if (method) {
    console.warn("Native: tried calling " + pluginName + "." + method + ", but the " + pluginName + " plugin is not installed.");
  } else {
    console.warn("Native: tried accessing the " + pluginName + " plugin but it's not installed.");
  }
  if (plugin) {
    console.warn("Install the " + pluginName + " plugin: 'ionic cordova plugin add " + plugin + "'");
  }
}
function cordovaWarn(pluginName, method) {
  if (typeof process === "undefined") {
    if (method) {
      console.warn("Native: tried calling " + pluginName + "." + method + ", but Cordova is not available. Make sure to include cordova.js or run in a device/simulator");
    } else {
      console.warn("Native: tried accessing the " + pluginName + " plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator");
    }
  }
}
var wrap = function(pluginObj, methodName, opts) {
  if (opts === void 0) {
    opts = {};
  }
  return function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (opts.sync) {
      return callCordovaPlugin(pluginObj, methodName, args, opts);
    } else if (opts.observable) {
      return wrapObservable(pluginObj, methodName, args, opts);
    } else if (opts.eventObservable && opts.event) {
      return wrapEventObservable(opts.event, opts.element);
    } else if (opts.otherPromise) {
      return wrapOtherPromise(pluginObj, methodName, args, opts);
    } else {
      return wrapPromise(pluginObj, methodName, args, opts);
    }
  };
};
function get(element, path) {
  var paths = path.split(".");
  var obj = element;
  for (var i = 0; i < paths.length; i++) {
    if (!obj) {
      return null;
    }
    obj = obj[paths[i]];
  }
  return obj;
}
var AwesomeCordovaNativePlugin = function() {
  function AwesomeCordovaNativePlugin2() {
  }
  AwesomeCordovaNativePlugin2.installed = function() {
    var isAvailable = checkAvailability(this.pluginRef) === true;
    return isAvailable;
  };
  AwesomeCordovaNativePlugin2.getPlugin = function() {
    if (typeof window !== "undefined") {
      return get(window, this.pluginRef);
    }
    return null;
  };
  AwesomeCordovaNativePlugin2.getPluginName = function() {
    var pluginName = this.pluginName;
    return pluginName;
  };
  AwesomeCordovaNativePlugin2.getPluginRef = function() {
    var pluginRef = this.pluginRef;
    return pluginRef;
  };
  AwesomeCordovaNativePlugin2.getPluginInstallName = function() {
    var plugin = this.plugin;
    return plugin;
  };
  AwesomeCordovaNativePlugin2.getSupportedPlatforms = function() {
    var platform = this.platforms;
    return platform;
  };
  AwesomeCordovaNativePlugin2.pluginName = "";
  AwesomeCordovaNativePlugin2.pluginRef = "";
  AwesomeCordovaNativePlugin2.plugin = "";
  AwesomeCordovaNativePlugin2.repo = "";
  AwesomeCordovaNativePlugin2.platforms = [];
  AwesomeCordovaNativePlugin2.install = "";
  return AwesomeCordovaNativePlugin2;
}();
function cordova(pluginObj, methodName, config2, args) {
  return wrap(pluginObj, methodName, config2).apply(this, args);
}
checkReady();
var __extends = globalThis && globalThis.__extends || function() {
  var extendStatics2 = function(d, b) {
    extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics2(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics2(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var LocationAccuracyOriginal = function(_super) {
  __extends(LocationAccuracyOriginal2, _super);
  function LocationAccuracyOriginal2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.REQUEST_PRIORITY_NO_POWER = 0;
    _this.REQUEST_PRIORITY_LOW_POWER = 1;
    _this.REQUEST_PRIORITY_BALANCED_POWER_ACCURACY = 2;
    _this.REQUEST_PRIORITY_HIGH_ACCURACY = 3;
    _this.SUCCESS_SETTINGS_SATISFIED = 0;
    _this.SUCCESS_USER_AGREED = 1;
    _this.ERROR_ALREADY_REQUESTING = -1;
    _this.ERROR_INVALID_ACTION = 0;
    _this.ERROR_INVALID_ACCURACY = 1;
    _this.ERROR_EXCEPTION = 1;
    _this.ERROR_CANNOT_CHANGE_ACCURACY = 3;
    _this.ERROR_USER_DISAGREED = 4;
    _this.ERROR_GOOGLE_API_CONNECTION_FAILED = 4;
    return _this;
  }
  LocationAccuracyOriginal2.prototype.canRequest = function() {
    return cordova(this, "canRequest", {}, arguments);
  };
  LocationAccuracyOriginal2.prototype.isRequesting = function() {
    return cordova(this, "isRequesting", {}, arguments);
  };
  LocationAccuracyOriginal2.prototype.request = function(accuracy) {
    return cordova(this, "request", { "callbackOrder": "reverse" }, arguments);
  };
  LocationAccuracyOriginal2.pluginName = "LocationAccuracy";
  LocationAccuracyOriginal2.plugin = "cordova-plugin-request-location-accuracy";
  LocationAccuracyOriginal2.pluginRef = "cordova.plugins.locationAccuracy";
  LocationAccuracyOriginal2.repo = "https://github.com/dpa99c/cordova-plugin-request-location-accuracy";
  LocationAccuracyOriginal2.platforms = ["Android", "iOS"];
  return LocationAccuracyOriginal2;
}(AwesomeCordovaNativePlugin);
var LocationAccuracy = new LocationAccuracyOriginal();
const AppLocation = {
  async islocationEnabled() {
    let myPromise = new Promise(function(resolve, reject) {
      Geolocation.checkPermissions().then((data) => {
        console.debug(data);
        if (data.location === "denied") {
          Geolocation.requestPermissions().then((data2) => {
            if (data2.location === "granted") {
              resolve("granted");
            } else {
              resolve("denied");
            }
          });
        } else if (data.location === "prompt") {
          Geolocation.requestPermissions().then((data2) => {
            if (data2.location === "granted") {
              resolve("granted");
            } else {
              resolve("denied");
            }
          });
        } else if (data.location === "granted") {
          resolve("granted");
        } else if (data.location === "prompt-with-rationale") {
          Geolocation.requestPermissions().then((data2) => {
            if (data2.location === "granted") {
              resolve("granted");
            } else {
              resolve("denied");
            }
          });
        }
      }).catch((error) => {
        reject();
      });
    });
    return await myPromise;
  },
  async checkAccuracy() {
    let accuracyPromise = new Promise(function(resolve, reject) {
      LocationAccuracy.canRequest().then((data) => {
        LocationAccuracy.request(
          LocationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY
        ).then(
          () => {
            resolve(true);
          },
          (error) => {
            reject(error);
          }
        );
      }).catch((error) => {
        LocationAccuracy.request(
          LocationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY
        ).then(
          () => {
            resolve(true);
          },
          (error2) => {
            reject(error2);
          }
        );
      });
    });
    return await accuracyPromise;
  },
  async getPosition() {
    let positionPromise = new Promise(function(resolve, reject) {
      Geolocation.getCurrentPosition().then((data) => {
        console.debug(data);
        let position = {
          lat: data.coords.latitude,
          lng: data.coords.longitude
        };
        resolve(position);
      }).catch((error) => {
        reject(error);
      });
    });
    return await positionPromise;
  }
};
export { AppLocation as A };
//# sourceMappingURL=data:application/json;base64,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TTtBQUNKLG9CQUFRLElBQUk7QUFBQSxVQUNiO0FBQUEsVUFDRCxDQUFDQyxXQUFVO0FBQ1QsbUJBQU9BLE1BQUs7QUFBQSxVQUNiO0FBQUEsUUFDYjtBQUFBLE1BQ0EsQ0FBUztBQUFBLElBQ1QsQ0FBSztBQUNELFdBQU8sTUFBTTtBQUFBLEVBQ2Q7QUFBQSxFQUVELE1BQU0sY0FBYztBQUNsQixRQUFJLGtCQUFrQixJQUFJLFFBQVEsU0FBVSxTQUFTLFFBQVE7QUFDM0Qsa0JBQVksbUJBQW9CLEVBQzdCLEtBQUssQ0FBQyxTQUFTO0FBQ2QsZ0JBQVEsTUFBTSxJQUFJO0FBQ2xCLFlBQUksV0FBVztBQUFBLFVBQ2IsS0FBSyxLQUFLLE9BQU87QUFBQSxVQUNqQixLQUFLLEtBQUssT0FBTztBQUFBLFFBQzdCO0FBQ1UsZ0JBQVEsUUFBUTtBQUFBLE1BQzFCLENBQVMsRUFDQSxNQUFNLENBQUMsVUFBVTtBQUNoQixlQUFPLEtBQUs7QUFBQSxNQUN0QixDQUFTO0FBQUEsSUFDVCxDQUFLO0FBQ0QsV0FBTyxNQUFNO0FBQUEsRUFDZDtBQUNIIiwibmFtZXMiOlsiZCIsImIiLCJfX2V4dGVuZHMiLCJ2IiwiU3Vic2NyaXB0aW9uIiwiU3Vic2NyaWJlciIsIkNvbnN1bWVyT2JzZXJ2ZXIiLCJTYWZlU3Vic2NyaWJlciIsIk9ic2VydmFibGUiLCJvYnNlcnZhYmxlIiwiU3ltYm9sX29ic2VydmFibGUiLCJPcGVyYXRvclN1YnNjcmliZXIiLCJlcnIiLCJTeW1ib2xfaXRlcmF0b3IiLCJwcm9jZXNzIiwiYXJncyIsImdldCIsIkF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIiwiY29uZmlnIiwidGhpcyIsImV4dGVuZFN0YXRpY3MiLCJMb2NhdGlvbkFjY3VyYWN5T3JpZ2luYWwiLCJkYXRhIiwiZXJyb3IiXSwic291cmNlcyI6WyIuLi8uLi9ub2RlX21vZHVsZXMvQGNhcGFjaXRvci9nZW9sb2NhdGlvbi9kaXN0L2VzbS9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZS9ib290c3RyYXAuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvaXNGdW5jdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2NyZWF0ZUVycm9yQ2xhc3MuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9VbnN1YnNjcmlwdGlvbkVycm9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvYXJyUmVtb3ZlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL1N1YnNjcmlwdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9jb25maWcuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvc2NoZWR1bGVyL3RpbWVvdXRQcm92aWRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL3JlcG9ydFVuaGFuZGxlZEVycm9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvbm9vcC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2Vycm9yQ29udGV4dC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9TdWJzY3JpYmVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3N5bWJvbC9vYnNlcnZhYmxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvaWRlbnRpdHkuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9waXBlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL09ic2VydmFibGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9saWZ0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL29wZXJhdG9ycy9PcGVyYXRvclN1YnNjcmliZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9pc0FycmF5TGlrZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2lzUHJvbWlzZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2lzSW50ZXJvcE9ic2VydmFibGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9pc0FzeW5jSXRlcmFibGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC90aHJvd1Vub2JzZXJ2YWJsZUVycm9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3N5bWJvbC9pdGVyYXRvci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2lzSXRlcmFibGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9pc1JlYWRhYmxlU3RyZWFtTGlrZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9vYnNlcnZhYmxlL2lubmVyRnJvbS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2V4ZWN1dGVTY2hlZHVsZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9vcGVyYXRvcnMvbWFwLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvbWFwT25lT3JNYW55QXJncy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9vcGVyYXRvcnMvbWVyZ2VJbnRlcm5hbHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvb3BlcmF0b3JzL21lcmdlTWFwLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL29ic2VydmFibGUvZnJvbUV2ZW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlL2RlY29yYXRvcnMvY29tbW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlL3V0aWwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUvYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZS9kZWNvcmF0b3JzL2NvcmRvdmEuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2xvY2F0aW9uLWFjY3VyYWN5L2luZGV4LmpzIiwiLi4vLi4vLi4vc3JjL2FwaS9BcHBMb2NhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWdpc3RlclBsdWdpbiB9IGZyb20gJ0BjYXBhY2l0b3IvY29yZSc7XG5jb25zdCBHZW9sb2NhdGlvbiA9IHJlZ2lzdGVyUGx1Z2luKCdHZW9sb2NhdGlvbicsIHtcbiAgICB3ZWI6ICgpID0+IGltcG9ydCgnLi93ZWInKS50aGVuKG0gPT4gbmV3IG0uR2VvbG9jYXRpb25XZWIoKSksXG59KTtcbmV4cG9ydCAqIGZyb20gJy4vZGVmaW5pdGlvbnMnO1xuZXhwb3J0IHsgR2VvbG9jYXRpb24gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKlxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUmVhZHkoKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgd2luXzEgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHt9O1xuICAgICAgICB2YXIgREVWSUNFX1JFQURZX1RJTUVPVVRfMSA9IDUwMDA7XG4gICAgICAgIC8vIFRvIGhlbHAgZGV2ZWxvcGVycyB1c2luZyBjb3Jkb3ZhLCB3ZSBsaXN0ZW4gZm9yIHRoZSBkZXZpY2UgcmVhZHkgZXZlbnQgYW5kXG4gICAgICAgIC8vIGxvZyBhbiBlcnJvciBpZiBpdCBkaWRuJ3QgZmlyZSBpbiBhIHJlYXNvbmFibGUgYW1vdW50IG9mIHRpbWUuIEdlbmVyYWxseSxcbiAgICAgICAgLy8gd2hlbiB0aGlzIGhhcHBlbnMsIGRldmVsb3BlcnMgc2hvdWxkIHJlbW92ZSBhbmQgcmVpbnN0YWxsIHBsdWdpbnMsIHNpbmNlXG4gICAgICAgIC8vIGFuIGluY29uc2lzdGVudCBwbHVnaW4gaXMgb2Z0ZW4gdGhlIGN1bHByaXQuXG4gICAgICAgIHZhciBiZWZvcmVfMSA9IERhdGUubm93KCk7XG4gICAgICAgIHZhciBkaWRGaXJlUmVhZHlfMSA9IGZhbHNlO1xuICAgICAgICB3aW5fMS5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VyZWFkeScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW9uaWMgTmF0aXZlOiBkZXZpY2VyZWFkeSBldmVudCBmaXJlZCBhZnRlciBcIiArIChEYXRlLm5vdygpIC0gYmVmb3JlXzEpICsgXCIgbXNcIik7XG4gICAgICAgICAgICBkaWRGaXJlUmVhZHlfMSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghZGlkRmlyZVJlYWR5XzEgJiYgd2luXzEuY29yZG92YSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIklvbmljIE5hdGl2ZTogZGV2aWNlcmVhZHkgZGlkIG5vdCBmaXJlIHdpdGhpbiBcIiArIERFVklDRV9SRUFEWV9USU1FT1VUXzEgKyBcIm1zLiBUaGlzIGNhbiBoYXBwZW4gd2hlbiBwbHVnaW5zIGFyZSBpbiBhbiBpbmNvbnNpc3RlbnQgc3RhdGUuIFRyeSByZW1vdmluZyBwbHVnaW5zIGZyb20gcGx1Z2lucy8gYW5kIHJlaW5zdGFsbGluZyB0aGVtLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgREVWSUNFX1JFQURZX1RJTUVPVVRfMSk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ym9vdHN0cmFwLmpzLm1hcCIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSwgU3VwcHJlc3NlZEVycm9yLCBTeW1ib2wgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXNEZWNvcmF0ZShjdG9yLCBkZXNjcmlwdG9ySW4sIGRlY29yYXRvcnMsIGNvbnRleHRJbiwgaW5pdGlhbGl6ZXJzLCBleHRyYUluaXRpYWxpemVycykge1xyXG4gICAgZnVuY3Rpb24gYWNjZXB0KGYpIHsgaWYgKGYgIT09IHZvaWQgMCAmJiB0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRnVuY3Rpb24gZXhwZWN0ZWRcIik7IHJldHVybiBmOyB9XHJcbiAgICB2YXIga2luZCA9IGNvbnRleHRJbi5raW5kLCBrZXkgPSBraW5kID09PSBcImdldHRlclwiID8gXCJnZXRcIiA6IGtpbmQgPT09IFwic2V0dGVyXCIgPyBcInNldFwiIDogXCJ2YWx1ZVwiO1xyXG4gICAgdmFyIHRhcmdldCA9ICFkZXNjcmlwdG9ySW4gJiYgY3RvciA/IGNvbnRleHRJbltcInN0YXRpY1wiXSA/IGN0b3IgOiBjdG9yLnByb3RvdHlwZSA6IG51bGw7XHJcbiAgICB2YXIgZGVzY3JpcHRvciA9IGRlc2NyaXB0b3JJbiB8fCAodGFyZ2V0ID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGNvbnRleHRJbi5uYW1lKSA6IHt9KTtcclxuICAgIHZhciBfLCBkb25lID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIHZhciBjb250ZXh0ID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4pIGNvbnRleHRbcF0gPSBwID09PSBcImFjY2Vzc1wiID8ge30gOiBjb250ZXh0SW5bcF07XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4uYWNjZXNzKSBjb250ZXh0LmFjY2Vzc1twXSA9IGNvbnRleHRJbi5hY2Nlc3NbcF07XHJcbiAgICAgICAgY29udGV4dC5hZGRJbml0aWFsaXplciA9IGZ1bmN0aW9uIChmKSB7IGlmIChkb25lKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGFkZCBpbml0aWFsaXplcnMgYWZ0ZXIgZGVjb3JhdGlvbiBoYXMgY29tcGxldGVkXCIpOyBleHRyYUluaXRpYWxpemVycy5wdXNoKGFjY2VwdChmIHx8IG51bGwpKTsgfTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gKDAsIGRlY29yYXRvcnNbaV0pKGtpbmQgPT09IFwiYWNjZXNzb3JcIiA/IHsgZ2V0OiBkZXNjcmlwdG9yLmdldCwgc2V0OiBkZXNjcmlwdG9yLnNldCB9IDogZGVzY3JpcHRvcltrZXldLCBjb250ZXh0KTtcclxuICAgICAgICBpZiAoa2luZCA9PT0gXCJhY2Nlc3NvclwiKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwgfHwgdHlwZW9mIHJlc3VsdCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZFwiKTtcclxuICAgICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmdldCkpIGRlc2NyaXB0b3IuZ2V0ID0gXztcclxuICAgICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LnNldCkpIGRlc2NyaXB0b3Iuc2V0ID0gXztcclxuICAgICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmluaXQpKSBpbml0aWFsaXplcnMudW5zaGlmdChfKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoXyA9IGFjY2VwdChyZXN1bHQpKSB7XHJcbiAgICAgICAgICAgIGlmIChraW5kID09PSBcImZpZWxkXCIpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xyXG4gICAgICAgICAgICBlbHNlIGRlc2NyaXB0b3Jba2V5XSA9IF87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRhcmdldCkgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgY29udGV4dEluLm5hbWUsIGRlc2NyaXB0b3IpO1xyXG4gICAgZG9uZSA9IHRydWU7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19ydW5Jbml0aWFsaXplcnModGhpc0FyZywgaW5pdGlhbGl6ZXJzLCB2YWx1ZSkge1xyXG4gICAgdmFyIHVzZVZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGluaXRpYWxpemVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhbHVlID0gdXNlVmFsdWUgPyBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnLCB2YWx1ZSkgOiBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnKTtcclxuICAgIH1cclxuICAgIHJldHVybiB1c2VWYWx1ZSA/IHZhbHVlIDogdm9pZCAwO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcHJvcEtleSh4KSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHggPT09IFwic3ltYm9sXCIgPyB4IDogXCJcIi5jb25jYXQoeCk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zZXRGdW5jdGlvbk5hbWUoZiwgbmFtZSwgcHJlZml4KSB7XHJcbiAgICBpZiAodHlwZW9mIG5hbWUgPT09IFwic3ltYm9sXCIpIG5hbWUgPSBuYW1lLmRlc2NyaXB0aW9uID8gXCJbXCIuY29uY2F0KG5hbWUuZGVzY3JpcHRpb24sIFwiXVwiKSA6IFwiXCI7XHJcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGYsIFwibmFtZVwiLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHByZWZpeCA/IFwiXCIuY29uY2F0KHByZWZpeCwgXCIgXCIsIG5hbWUpIDogbmFtZSB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcclxuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XHJcbiAgICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XHJcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcclxuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcclxuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiwgYXdhaXRSZXR1cm4pLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiBhd2FpdFJldHVybihmKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZiwgcmVqZWN0KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlmIChnW25dKSB7IGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IGlmIChmKSBpW25dID0gZihpW25dKTsgfSB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogZmFsc2UgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4oc3RhdGUsIHJlY2VpdmVyKSB7XHJcbiAgICBpZiAocmVjZWl2ZXIgPT09IG51bGwgfHwgKHR5cGVvZiByZWNlaXZlciAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcmVjZWl2ZXIgIT09IFwiZnVuY3Rpb25cIikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgdXNlICdpbicgb3BlcmF0b3Igb24gbm9uLW9iamVjdFwiKTtcclxuICAgIHJldHVybiB0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyID09PSBzdGF0ZSA6IHN0YXRlLmhhcyhyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZShlbnYsIHZhbHVlLCBhc3luYykge1xyXG4gICAgaWYgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB2b2lkIDApIHtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkLlwiKTtcclxuICAgICAgICB2YXIgZGlzcG9zZSwgaW5uZXI7XHJcbiAgICAgICAgaWYgKGFzeW5jKSB7XHJcbiAgICAgICAgICAgIGlmICghU3ltYm9sLmFzeW5jRGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0Rpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgICAgICAgICBkaXNwb3NlID0gdmFsdWVbU3ltYm9sLmFzeW5jRGlzcG9zZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkaXNwb3NlID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgaWYgKCFTeW1ib2wuZGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5kaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgICAgICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5kaXNwb3NlXTtcclxuICAgICAgICAgICAgaWYgKGFzeW5jKSBpbm5lciA9IGRpc3Bvc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgZGlzcG9zZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IG5vdCBkaXNwb3NhYmxlLlwiKTtcclxuICAgICAgICBpZiAoaW5uZXIpIGRpc3Bvc2UgPSBmdW5jdGlvbigpIHsgdHJ5IHsgaW5uZXIuY2FsbCh0aGlzKTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7IH0gfTtcclxuICAgICAgICBlbnYuc3RhY2sucHVzaCh7IHZhbHVlOiB2YWx1ZSwgZGlzcG9zZTogZGlzcG9zZSwgYXN5bmM6IGFzeW5jIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoYXN5bmMpIHtcclxuICAgICAgICBlbnYuc3RhY2sucHVzaCh7IGFzeW5jOiB0cnVlIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG5cclxufVxyXG5cclxudmFyIF9TdXBwcmVzc2VkRXJyb3IgPSB0eXBlb2YgU3VwcHJlc3NlZEVycm9yID09PSBcImZ1bmN0aW9uXCIgPyBTdXBwcmVzc2VkRXJyb3IgOiBmdW5jdGlvbiAoZXJyb3IsIHN1cHByZXNzZWQsIG1lc3NhZ2UpIHtcclxuICAgIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIGUubmFtZSA9IFwiU3VwcHJlc3NlZEVycm9yXCIsIGUuZXJyb3IgPSBlcnJvciwgZS5zdXBwcmVzc2VkID0gc3VwcHJlc3NlZCwgZTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2Rpc3Bvc2VSZXNvdXJjZXMoZW52KSB7XHJcbiAgICBmdW5jdGlvbiBmYWlsKGUpIHtcclxuICAgICAgICBlbnYuZXJyb3IgPSBlbnYuaGFzRXJyb3IgPyBuZXcgX1N1cHByZXNzZWRFcnJvcihlLCBlbnYuZXJyb3IsIFwiQW4gZXJyb3Igd2FzIHN1cHByZXNzZWQgZHVyaW5nIGRpc3Bvc2FsLlwiKSA6IGU7XHJcbiAgICAgICAgZW52Lmhhc0Vycm9yID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICAgICAgd2hpbGUgKGVudi5zdGFjay5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIHJlYyA9IGVudi5zdGFjay5wb3AoKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSByZWMuZGlzcG9zZSAmJiByZWMuZGlzcG9zZS5jYWxsKHJlYy52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVjLmFzeW5jKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCkudGhlbihuZXh0LCBmdW5jdGlvbihlKSB7IGZhaWwoZSk7IHJldHVybiBuZXh0KCk7IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBmYWlsKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbnYuaGFzRXJyb3IpIHRocm93IGVudi5lcnJvcjtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIF9fZXh0ZW5kczogX19leHRlbmRzLFxyXG4gICAgX19hc3NpZ246IF9fYXNzaWduLFxyXG4gICAgX19yZXN0OiBfX3Jlc3QsXHJcbiAgICBfX2RlY29yYXRlOiBfX2RlY29yYXRlLFxyXG4gICAgX19wYXJhbTogX19wYXJhbSxcclxuICAgIF9fbWV0YWRhdGE6IF9fbWV0YWRhdGEsXHJcbiAgICBfX2F3YWl0ZXI6IF9fYXdhaXRlcixcclxuICAgIF9fZ2VuZXJhdG9yOiBfX2dlbmVyYXRvcixcclxuICAgIF9fY3JlYXRlQmluZGluZzogX19jcmVhdGVCaW5kaW5nLFxyXG4gICAgX19leHBvcnRTdGFyOiBfX2V4cG9ydFN0YXIsXHJcbiAgICBfX3ZhbHVlczogX192YWx1ZXMsXHJcbiAgICBfX3JlYWQ6IF9fcmVhZCxcclxuICAgIF9fc3ByZWFkOiBfX3NwcmVhZCxcclxuICAgIF9fc3ByZWFkQXJyYXlzOiBfX3NwcmVhZEFycmF5cyxcclxuICAgIF9fc3ByZWFkQXJyYXk6IF9fc3ByZWFkQXJyYXksXHJcbiAgICBfX2F3YWl0OiBfX2F3YWl0LFxyXG4gICAgX19hc3luY0dlbmVyYXRvcjogX19hc3luY0dlbmVyYXRvcixcclxuICAgIF9fYXN5bmNEZWxlZ2F0b3I6IF9fYXN5bmNEZWxlZ2F0b3IsXHJcbiAgICBfX2FzeW5jVmFsdWVzOiBfX2FzeW5jVmFsdWVzLFxyXG4gICAgX19tYWtlVGVtcGxhdGVPYmplY3Q6IF9fbWFrZVRlbXBsYXRlT2JqZWN0LFxyXG4gICAgX19pbXBvcnRTdGFyOiBfX2ltcG9ydFN0YXIsXHJcbiAgICBfX2ltcG9ydERlZmF1bHQ6IF9faW1wb3J0RGVmYXVsdCxcclxuICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQ6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQsXHJcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0OiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0LFxyXG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEluOiBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4sXHJcbiAgICBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZTogX19hZGREaXNwb3NhYmxlUmVzb3VyY2UsXHJcbiAgICBfX2Rpc3Bvc2VSZXNvdXJjZXM6IF9fZGlzcG9zZVJlc291cmNlcyxcclxufTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNGdW5jdGlvbi5qcy5tYXAiLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRXJyb3JDbGFzcyhjcmVhdGVJbXBsKSB7XG4gICAgdmFyIF9zdXBlciA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICBFcnJvci5jYWxsKGluc3RhbmNlKTtcbiAgICAgICAgaW5zdGFuY2Uuc3RhY2sgPSBuZXcgRXJyb3IoKS5zdGFjaztcbiAgICB9O1xuICAgIHZhciBjdG9yRnVuYyA9IGNyZWF0ZUltcGwoX3N1cGVyKTtcbiAgICBjdG9yRnVuYy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG4gICAgY3RvckZ1bmMucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvckZ1bmM7XG4gICAgcmV0dXJuIGN0b3JGdW5jO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3JlYXRlRXJyb3JDbGFzcy5qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVFcnJvckNsYXNzIH0gZnJvbSAnLi9jcmVhdGVFcnJvckNsYXNzJztcbmV4cG9ydCB2YXIgVW5zdWJzY3JpcHRpb25FcnJvciA9IGNyZWF0ZUVycm9yQ2xhc3MoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHJldHVybiBmdW5jdGlvbiBVbnN1YnNjcmlwdGlvbkVycm9ySW1wbChlcnJvcnMpIHtcbiAgICAgICAgX3N1cGVyKHRoaXMpO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBlcnJvcnNcbiAgICAgICAgICAgID8gZXJyb3JzLmxlbmd0aCArIFwiIGVycm9ycyBvY2N1cnJlZCBkdXJpbmcgdW5zdWJzY3JpcHRpb246XFxuXCIgKyBlcnJvcnMubWFwKGZ1bmN0aW9uIChlcnIsIGkpIHsgcmV0dXJuIGkgKyAxICsgXCIpIFwiICsgZXJyLnRvU3RyaW5nKCk7IH0pLmpvaW4oJ1xcbiAgJylcbiAgICAgICAgICAgIDogJyc7XG4gICAgICAgIHRoaXMubmFtZSA9ICdVbnN1YnNjcmlwdGlvbkVycm9yJztcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgfTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VW5zdWJzY3JpcHRpb25FcnJvci5qcy5tYXAiLCJleHBvcnQgZnVuY3Rpb24gYXJyUmVtb3ZlKGFyciwgaXRlbSkge1xuICAgIGlmIChhcnIpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSk7XG4gICAgICAgIDAgPD0gaW5kZXggJiYgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXJyUmVtb3ZlLmpzLm1hcCIsImltcG9ydCB7IF9fcmVhZCwgX19zcHJlYWRBcnJheSwgX192YWx1ZXMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL3V0aWwvaXNGdW5jdGlvbic7XG5pbXBvcnQgeyBVbnN1YnNjcmlwdGlvbkVycm9yIH0gZnJvbSAnLi91dGlsL1Vuc3Vic2NyaXB0aW9uRXJyb3InO1xuaW1wb3J0IHsgYXJyUmVtb3ZlIH0gZnJvbSAnLi91dGlsL2FyclJlbW92ZSc7XG52YXIgU3Vic2NyaXB0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdWJzY3JpcHRpb24oaW5pdGlhbFRlYXJkb3duKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbFRlYXJkb3duID0gaW5pdGlhbFRlYXJkb3duO1xuICAgICAgICB0aGlzLmNsb3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9wYXJlbnRhZ2UgPSBudWxsO1xuICAgICAgICB0aGlzLl9maW5hbGl6ZXJzID0gbnVsbDtcbiAgICB9XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVfMSwgX2EsIGVfMiwgX2I7XG4gICAgICAgIHZhciBlcnJvcnM7XG4gICAgICAgIGlmICghdGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBfcGFyZW50YWdlID0gdGhpcy5fcGFyZW50YWdlO1xuICAgICAgICAgICAgaWYgKF9wYXJlbnRhZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnRhZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KF9wYXJlbnRhZ2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfcGFyZW50YWdlXzEgPSBfX3ZhbHVlcyhfcGFyZW50YWdlKSwgX3BhcmVudGFnZV8xXzEgPSBfcGFyZW50YWdlXzEubmV4dCgpOyAhX3BhcmVudGFnZV8xXzEuZG9uZTsgX3BhcmVudGFnZV8xXzEgPSBfcGFyZW50YWdlXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudF8xID0gX3BhcmVudGFnZV8xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50XzEucmVtb3ZlKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3BhcmVudGFnZV8xXzEgJiYgIV9wYXJlbnRhZ2VfMV8xLmRvbmUgJiYgKF9hID0gX3BhcmVudGFnZV8xLnJldHVybikpIF9hLmNhbGwoX3BhcmVudGFnZV8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX3BhcmVudGFnZS5yZW1vdmUodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGluaXRpYWxGaW5hbGl6ZXIgPSB0aGlzLmluaXRpYWxUZWFyZG93bjtcbiAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGluaXRpYWxGaW5hbGl6ZXIpKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbEZpbmFsaXplcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcnMgPSBlIGluc3RhbmNlb2YgVW5zdWJzY3JpcHRpb25FcnJvciA/IGUuZXJyb3JzIDogW2VdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBfZmluYWxpemVycyA9IHRoaXMuX2ZpbmFsaXplcnM7XG4gICAgICAgICAgICBpZiAoX2ZpbmFsaXplcnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9maW5hbGl6ZXJzID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfZmluYWxpemVyc18xID0gX192YWx1ZXMoX2ZpbmFsaXplcnMpLCBfZmluYWxpemVyc18xXzEgPSBfZmluYWxpemVyc18xLm5leHQoKTsgIV9maW5hbGl6ZXJzXzFfMS5kb25lOyBfZmluYWxpemVyc18xXzEgPSBfZmluYWxpemVyc18xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpbmFsaXplciA9IF9maW5hbGl6ZXJzXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlY0ZpbmFsaXplcihmaW5hbGl6ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycyA9IGVycm9ycyAhPT0gbnVsbCAmJiBlcnJvcnMgIT09IHZvaWQgMCA/IGVycm9ycyA6IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBVbnN1YnNjcmlwdGlvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycyA9IF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShbXSwgX19yZWFkKGVycm9ycykpLCBfX3JlYWQoZXJyLmVycm9ycykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVfMl8xKSB7IGVfMiA9IHsgZXJyb3I6IGVfMl8xIH07IH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfZmluYWxpemVyc18xXzEgJiYgIV9maW5hbGl6ZXJzXzFfMS5kb25lICYmIChfYiA9IF9maW5hbGl6ZXJzXzEucmV0dXJuKSkgX2IuY2FsbChfZmluYWxpemVyc18xKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBVbnN1YnNjcmlwdGlvbkVycm9yKGVycm9ycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHRlYXJkb3duKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHRlYXJkb3duICYmIHRlYXJkb3duICE9PSB0aGlzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICBleGVjRmluYWxpemVyKHRlYXJkb3duKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0ZWFyZG93biBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGVhcmRvd24uY2xvc2VkIHx8IHRlYXJkb3duLl9oYXNQYXJlbnQodGhpcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0ZWFyZG93bi5fYWRkUGFyZW50KHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAodGhpcy5fZmluYWxpemVycyA9IChfYSA9IHRoaXMuX2ZpbmFsaXplcnMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFtdKS5wdXNoKHRlYXJkb3duKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5faGFzUGFyZW50ID0gZnVuY3Rpb24gKHBhcmVudCkge1xuICAgICAgICB2YXIgX3BhcmVudGFnZSA9IHRoaXMuX3BhcmVudGFnZTtcbiAgICAgICAgcmV0dXJuIF9wYXJlbnRhZ2UgPT09IHBhcmVudCB8fCAoQXJyYXkuaXNBcnJheShfcGFyZW50YWdlKSAmJiBfcGFyZW50YWdlLmluY2x1ZGVzKHBhcmVudCkpO1xuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5fYWRkUGFyZW50ID0gZnVuY3Rpb24gKHBhcmVudCkge1xuICAgICAgICB2YXIgX3BhcmVudGFnZSA9IHRoaXMuX3BhcmVudGFnZTtcbiAgICAgICAgdGhpcy5fcGFyZW50YWdlID0gQXJyYXkuaXNBcnJheShfcGFyZW50YWdlKSA/IChfcGFyZW50YWdlLnB1c2gocGFyZW50KSwgX3BhcmVudGFnZSkgOiBfcGFyZW50YWdlID8gW19wYXJlbnRhZ2UsIHBhcmVudF0gOiBwYXJlbnQ7XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLl9yZW1vdmVQYXJlbnQgPSBmdW5jdGlvbiAocGFyZW50KSB7XG4gICAgICAgIHZhciBfcGFyZW50YWdlID0gdGhpcy5fcGFyZW50YWdlO1xuICAgICAgICBpZiAoX3BhcmVudGFnZSA9PT0gcGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9wYXJlbnRhZ2UgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoX3BhcmVudGFnZSkpIHtcbiAgICAgICAgICAgIGFyclJlbW92ZShfcGFyZW50YWdlLCBwYXJlbnQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICh0ZWFyZG93bikge1xuICAgICAgICB2YXIgX2ZpbmFsaXplcnMgPSB0aGlzLl9maW5hbGl6ZXJzO1xuICAgICAgICBfZmluYWxpemVycyAmJiBhcnJSZW1vdmUoX2ZpbmFsaXplcnMsIHRlYXJkb3duKTtcbiAgICAgICAgaWYgKHRlYXJkb3duIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0ZWFyZG93bi5fcmVtb3ZlUGFyZW50KHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb24uRU1QVFkgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZW1wdHkgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gICAgICAgIGVtcHR5LmNsb3NlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBlbXB0eTtcbiAgICB9KSgpO1xuICAgIHJldHVybiBTdWJzY3JpcHRpb247XG59KCkpO1xuZXhwb3J0IHsgU3Vic2NyaXB0aW9uIH07XG5leHBvcnQgdmFyIEVNUFRZX1NVQlNDUklQVElPTiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbmV4cG9ydCBmdW5jdGlvbiBpc1N1YnNjcmlwdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24gfHxcbiAgICAgICAgKHZhbHVlICYmICdjbG9zZWQnIGluIHZhbHVlICYmIGlzRnVuY3Rpb24odmFsdWUucmVtb3ZlKSAmJiBpc0Z1bmN0aW9uKHZhbHVlLmFkZCkgJiYgaXNGdW5jdGlvbih2YWx1ZS51bnN1YnNjcmliZSkpKTtcbn1cbmZ1bmN0aW9uIGV4ZWNGaW5hbGl6ZXIoZmluYWxpemVyKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oZmluYWxpemVyKSkge1xuICAgICAgICBmaW5hbGl6ZXIoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZpbmFsaXplci51bnN1YnNjcmliZSgpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN1YnNjcmlwdGlvbi5qcy5tYXAiLCJleHBvcnQgdmFyIGNvbmZpZyA9IHtcbiAgICBvblVuaGFuZGxlZEVycm9yOiBudWxsLFxuICAgIG9uU3RvcHBlZE5vdGlmaWNhdGlvbjogbnVsbCxcbiAgICBQcm9taXNlOiB1bmRlZmluZWQsXG4gICAgdXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZzogZmFsc2UsXG4gICAgdXNlRGVwcmVjYXRlZE5leHRDb250ZXh0OiBmYWxzZSxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25maWcuanMubWFwIiwiaW1wb3J0IHsgX19yZWFkLCBfX3NwcmVhZEFycmF5IH0gZnJvbSBcInRzbGliXCI7XG5leHBvcnQgdmFyIHRpbWVvdXRQcm92aWRlciA9IHtcbiAgICBzZXRUaW1lb3V0OiBmdW5jdGlvbiAoaGFuZGxlciwgdGltZW91dCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGVsZWdhdGUgPSB0aW1lb3V0UHJvdmlkZXIuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSA9PT0gbnVsbCB8fCBkZWxlZ2F0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVsZWdhdGUuc2V0VGltZW91dCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlLnNldFRpbWVvdXQuYXBwbHkoZGVsZWdhdGUsIF9fc3ByZWFkQXJyYXkoW2hhbmRsZXIsIHRpbWVvdXRdLCBfX3JlYWQoYXJncykpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2V0VGltZW91dC5hcHBseSh2b2lkIDAsIF9fc3ByZWFkQXJyYXkoW2hhbmRsZXIsIHRpbWVvdXRdLCBfX3JlYWQoYXJncykpKTtcbiAgICB9LFxuICAgIGNsZWFyVGltZW91dDogZnVuY3Rpb24gKGhhbmRsZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSB0aW1lb3V0UHJvdmlkZXIuZGVsZWdhdGU7XG4gICAgICAgIHJldHVybiAoKGRlbGVnYXRlID09PSBudWxsIHx8IGRlbGVnYXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWxlZ2F0ZS5jbGVhclRpbWVvdXQpIHx8IGNsZWFyVGltZW91dCkoaGFuZGxlKTtcbiAgICB9LFxuICAgIGRlbGVnYXRlOiB1bmRlZmluZWQsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGltZW91dFByb3ZpZGVyLmpzLm1hcCIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyB0aW1lb3V0UHJvdmlkZXIgfSBmcm9tICcuLi9zY2hlZHVsZXIvdGltZW91dFByb3ZpZGVyJztcbmV4cG9ydCBmdW5jdGlvbiByZXBvcnRVbmhhbmRsZWRFcnJvcihlcnIpIHtcbiAgICB0aW1lb3V0UHJvdmlkZXIuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvblVuaGFuZGxlZEVycm9yID0gY29uZmlnLm9uVW5oYW5kbGVkRXJyb3I7XG4gICAgICAgIGlmIChvblVuaGFuZGxlZEVycm9yKSB7XG4gICAgICAgICAgICBvblVuaGFuZGxlZEVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcG9ydFVuaGFuZGxlZEVycm9yLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBub29wKCkgeyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub29wLmpzLm1hcCIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG52YXIgY29udGV4dCA9IG51bGw7XG5leHBvcnQgZnVuY3Rpb24gZXJyb3JDb250ZXh0KGNiKSB7XG4gICAgaWYgKGNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgIHZhciBpc1Jvb3QgPSAhY29udGV4dDtcbiAgICAgICAgaWYgKGlzUm9vdCkge1xuICAgICAgICAgICAgY29udGV4dCA9IHsgZXJyb3JUaHJvd246IGZhbHNlLCBlcnJvcjogbnVsbCB9O1xuICAgICAgICB9XG4gICAgICAgIGNiKCk7XG4gICAgICAgIGlmIChpc1Jvb3QpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IGNvbnRleHQsIGVycm9yVGhyb3duID0gX2EuZXJyb3JUaHJvd24sIGVycm9yID0gX2EuZXJyb3I7XG4gICAgICAgICAgICBjb250ZXh0ID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjYigpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBjYXB0dXJlRXJyb3IoZXJyKSB7XG4gICAgaWYgKGNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nICYmIGNvbnRleHQpIHtcbiAgICAgICAgY29udGV4dC5lcnJvclRocm93biA9IHRydWU7XG4gICAgICAgIGNvbnRleHQuZXJyb3IgPSBlcnI7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXJyb3JDb250ZXh0LmpzLm1hcCIsImltcG9ydCB7IF9fZXh0ZW5kcyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IGlzU3Vic2NyaXB0aW9uLCBTdWJzY3JpcHRpb24gfSBmcm9tICcuL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyByZXBvcnRVbmhhbmRsZWRFcnJvciB9IGZyb20gJy4vdXRpbC9yZXBvcnRVbmhhbmRsZWRFcnJvcic7XG5pbXBvcnQgeyBub29wIH0gZnJvbSAnLi91dGlsL25vb3AnO1xuaW1wb3J0IHsgbmV4dE5vdGlmaWNhdGlvbiwgZXJyb3JOb3RpZmljYXRpb24sIENPTVBMRVRFX05PVElGSUNBVElPTiB9IGZyb20gJy4vTm90aWZpY2F0aW9uRmFjdG9yaWVzJztcbmltcG9ydCB7IHRpbWVvdXRQcm92aWRlciB9IGZyb20gJy4vc2NoZWR1bGVyL3RpbWVvdXRQcm92aWRlcic7XG5pbXBvcnQgeyBjYXB0dXJlRXJyb3IgfSBmcm9tICcuL3V0aWwvZXJyb3JDb250ZXh0JztcbnZhciBTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTdWJzY3JpYmVyKGRlc3RpbmF0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICBpZiAoZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gZGVzdGluYXRpb247XG4gICAgICAgICAgICBpZiAoaXNTdWJzY3JpcHRpb24oZGVzdGluYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24uYWRkKF90aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gRU1QVFlfT0JTRVJWRVI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBTdWJzY3JpYmVyLmNyZWF0ZSA9IGZ1bmN0aW9uIChuZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTYWZlU3Vic2NyaWJlcihuZXh0LCBlcnJvciwgY29tcGxldGUpO1xuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIGhhbmRsZVN0b3BwZWROb3RpZmljYXRpb24obmV4dE5vdGlmaWNhdGlvbih2YWx1ZSksIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fbmV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAodGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIGhhbmRsZVN0b3BwZWROb3RpZmljYXRpb24oZXJyb3JOb3RpZmljYXRpb24oZXJyKSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICBoYW5kbGVTdG9wcGVkTm90aWZpY2F0aW9uKENPTVBMRVRFX05PVElGSUNBVElPTiwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS51bnN1YnNjcmliZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dCh2YWx1ZSk7XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5fZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFN1YnNjcmliZXI7XG59KFN1YnNjcmlwdGlvbikpO1xuZXhwb3J0IHsgU3Vic2NyaWJlciB9O1xudmFyIF9iaW5kID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQ7XG5mdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gICAgcmV0dXJuIF9iaW5kLmNhbGwoZm4sIHRoaXNBcmcpO1xufVxudmFyIENvbnN1bWVyT2JzZXJ2ZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbnN1bWVyT2JzZXJ2ZXIocGFydGlhbE9ic2VydmVyKSB7XG4gICAgICAgIHRoaXMucGFydGlhbE9ic2VydmVyID0gcGFydGlhbE9ic2VydmVyO1xuICAgIH1cbiAgICBDb25zdW1lck9ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBwYXJ0aWFsT2JzZXJ2ZXIgPSB0aGlzLnBhcnRpYWxPYnNlcnZlcjtcbiAgICAgICAgaWYgKHBhcnRpYWxPYnNlcnZlci5uZXh0KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBhcnRpYWxPYnNlcnZlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGhhbmRsZVVuaGFuZGxlZEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29uc3VtZXJPYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHZhciBwYXJ0aWFsT2JzZXJ2ZXIgPSB0aGlzLnBhcnRpYWxPYnNlcnZlcjtcbiAgICAgICAgaWYgKHBhcnRpYWxPYnNlcnZlci5lcnJvcikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwYXJ0aWFsT2JzZXJ2ZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGhhbmRsZVVuaGFuZGxlZEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGhhbmRsZVVuaGFuZGxlZEVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbnN1bWVyT2JzZXJ2ZXIucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcGFydGlhbE9ic2VydmVyID0gdGhpcy5wYXJ0aWFsT2JzZXJ2ZXI7XG4gICAgICAgIGlmIChwYXJ0aWFsT2JzZXJ2ZXIuY29tcGxldGUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcGFydGlhbE9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBDb25zdW1lck9ic2VydmVyO1xufSgpKTtcbnZhciBTYWZlU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNhZmVTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNhZmVTdWJzY3JpYmVyKG9ic2VydmVyT3JOZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgdmFyIHBhcnRpYWxPYnNlcnZlcjtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24ob2JzZXJ2ZXJPck5leHQpIHx8ICFvYnNlcnZlck9yTmV4dCkge1xuICAgICAgICAgICAgcGFydGlhbE9ic2VydmVyID0ge1xuICAgICAgICAgICAgICAgIG5leHQ6IChvYnNlcnZlck9yTmV4dCAhPT0gbnVsbCAmJiBvYnNlcnZlck9yTmV4dCAhPT0gdm9pZCAwID8gb2JzZXJ2ZXJPck5leHQgOiB1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvciAhPT0gbnVsbCAmJiBlcnJvciAhPT0gdm9pZCAwID8gZXJyb3IgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGNvbXBsZXRlICE9PSBudWxsICYmIGNvbXBsZXRlICE9PSB2b2lkIDAgPyBjb21wbGV0ZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgY29udGV4dF8xO1xuICAgICAgICAgICAgaWYgKF90aGlzICYmIGNvbmZpZy51c2VEZXByZWNhdGVkTmV4dENvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0XzEgPSBPYmplY3QuY3JlYXRlKG9ic2VydmVyT3JOZXh0KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0XzEudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy51bnN1YnNjcmliZSgpOyB9O1xuICAgICAgICAgICAgICAgIHBhcnRpYWxPYnNlcnZlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogb2JzZXJ2ZXJPck5leHQubmV4dCAmJiBiaW5kKG9ic2VydmVyT3JOZXh0Lm5leHQsIGNvbnRleHRfMSksXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBvYnNlcnZlck9yTmV4dC5lcnJvciAmJiBiaW5kKG9ic2VydmVyT3JOZXh0LmVycm9yLCBjb250ZXh0XzEpLFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogb2JzZXJ2ZXJPck5leHQuY29tcGxldGUgJiYgYmluZChvYnNlcnZlck9yTmV4dC5jb21wbGV0ZSwgY29udGV4dF8xKSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFydGlhbE9ic2VydmVyID0gb2JzZXJ2ZXJPck5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuZGVzdGluYXRpb24gPSBuZXcgQ29uc3VtZXJPYnNlcnZlcihwYXJ0aWFsT2JzZXJ2ZXIpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBTYWZlU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcikpO1xuZXhwb3J0IHsgU2FmZVN1YnNjcmliZXIgfTtcbmZ1bmN0aW9uIGhhbmRsZVVuaGFuZGxlZEVycm9yKGVycm9yKSB7XG4gICAgaWYgKGNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgIGNhcHR1cmVFcnJvcihlcnJvcik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXBvcnRVbmhhbmRsZWRFcnJvcihlcnJvcik7XG4gICAgfVxufVxuZnVuY3Rpb24gZGVmYXVsdEVycm9ySGFuZGxlcihlcnIpIHtcbiAgICB0aHJvdyBlcnI7XG59XG5mdW5jdGlvbiBoYW5kbGVTdG9wcGVkTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbiwgc3Vic2NyaWJlcikge1xuICAgIHZhciBvblN0b3BwZWROb3RpZmljYXRpb24gPSBjb25maWcub25TdG9wcGVkTm90aWZpY2F0aW9uO1xuICAgIG9uU3RvcHBlZE5vdGlmaWNhdGlvbiAmJiB0aW1lb3V0UHJvdmlkZXIuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBvblN0b3BwZWROb3RpZmljYXRpb24obm90aWZpY2F0aW9uLCBzdWJzY3JpYmVyKTsgfSk7XG59XG5leHBvcnQgdmFyIEVNUFRZX09CU0VSVkVSID0ge1xuICAgIGNsb3NlZDogdHJ1ZSxcbiAgICBuZXh0OiBub29wLFxuICAgIGVycm9yOiBkZWZhdWx0RXJyb3JIYW5kbGVyLFxuICAgIGNvbXBsZXRlOiBub29wLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN1YnNjcmliZXIuanMubWFwIiwiZXhwb3J0IHZhciBvYnNlcnZhYmxlID0gKGZ1bmN0aW9uICgpIHsgcmV0dXJuICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5vYnNlcnZhYmxlKSB8fCAnQEBvYnNlcnZhYmxlJzsgfSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9ic2VydmFibGUuanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5KHgpIHtcbiAgICByZXR1cm4geDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlkZW50aXR5LmpzLm1hcCIsImltcG9ydCB7IGlkZW50aXR5IH0gZnJvbSAnLi9pZGVudGl0eSc7XG5leHBvcnQgZnVuY3Rpb24gcGlwZSgpIHtcbiAgICB2YXIgZm5zID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgZm5zW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHJldHVybiBwaXBlRnJvbUFycmF5KGZucyk7XG59XG5leHBvcnQgZnVuY3Rpb24gcGlwZUZyb21BcnJheShmbnMpIHtcbiAgICBpZiAoZm5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gaWRlbnRpdHk7XG4gICAgfVxuICAgIGlmIChmbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBmbnNbMF07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiBwaXBlZChpbnB1dCkge1xuICAgICAgICByZXR1cm4gZm5zLnJlZHVjZShmdW5jdGlvbiAocHJldiwgZm4pIHsgcmV0dXJuIGZuKHByZXYpOyB9LCBpbnB1dCk7XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBpcGUuanMubWFwIiwiaW1wb3J0IHsgU2FmZVN1YnNjcmliZXIsIFN1YnNjcmliZXIgfSBmcm9tICcuL1N1YnNjcmliZXInO1xuaW1wb3J0IHsgaXNTdWJzY3JpcHRpb24gfSBmcm9tICcuL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBvYnNlcnZhYmxlIGFzIFN5bWJvbF9vYnNlcnZhYmxlIH0gZnJvbSAnLi9zeW1ib2wvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBwaXBlRnJvbUFycmF5IH0gZnJvbSAnLi91dGlsL3BpcGUnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IGVycm9yQ29udGV4dCB9IGZyb20gJy4vdXRpbC9lcnJvckNvbnRleHQnO1xudmFyIE9ic2VydmFibGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE9ic2VydmFibGUoc3Vic2NyaWJlKSB7XG4gICAgICAgIGlmIChzdWJzY3JpYmUpIHtcbiAgICAgICAgICAgIHRoaXMuX3N1YnNjcmliZSA9IHN1YnNjcmliZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5saWZ0ID0gZnVuY3Rpb24gKG9wZXJhdG9yKSB7XG4gICAgICAgIHZhciBvYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGUoKTtcbiAgICAgICAgb2JzZXJ2YWJsZS5zb3VyY2UgPSB0aGlzO1xuICAgICAgICBvYnNlcnZhYmxlLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKG9ic2VydmVyT3JOZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHN1YnNjcmliZXIgPSBpc1N1YnNjcmliZXIob2JzZXJ2ZXJPck5leHQpID8gb2JzZXJ2ZXJPck5leHQgOiBuZXcgU2FmZVN1YnNjcmliZXIob2JzZXJ2ZXJPck5leHQsIGVycm9yLCBjb21wbGV0ZSk7XG4gICAgICAgIGVycm9yQ29udGV4dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcywgb3BlcmF0b3IgPSBfYS5vcGVyYXRvciwgc291cmNlID0gX2Euc291cmNlO1xuICAgICAgICAgICAgc3Vic2NyaWJlci5hZGQob3BlcmF0b3JcbiAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yLmNhbGwoc3Vic2NyaWJlciwgc291cmNlKVxuICAgICAgICAgICAgICAgIDogc291cmNlXG4gICAgICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9zdWJzY3JpYmUoc3Vic2NyaWJlcilcbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX3RyeVN1YnNjcmliZShzdWJzY3JpYmVyKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlcjtcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLl90cnlTdWJzY3JpYmUgPSBmdW5jdGlvbiAoc2luaykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N1YnNjcmliZShzaW5rKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBzaW5rLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAobmV4dCwgcHJvbWlzZUN0b3IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcHJvbWlzZUN0b3IgPSBnZXRQcm9taXNlQ3Rvcihwcm9taXNlQ3Rvcik7XG4gICAgICAgIHJldHVybiBuZXcgcHJvbWlzZUN0b3IoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIHN1YnNjcmliZXIgPSBuZXcgU2FmZVN1YnNjcmliZXIoe1xuICAgICAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiByZWplY3QsXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IHJlc29sdmUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIF90aGlzLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gKF9hID0gdGhpcy5zb3VyY2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZVtTeW1ib2xfb2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUucGlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9wZXJhdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIG9wZXJhdGlvbnNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGlwZUZyb21BcnJheShvcGVyYXRpb25zKSh0aGlzKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLnRvUHJvbWlzZSA9IGZ1bmN0aW9uIChwcm9taXNlQ3Rvcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBwcm9taXNlQ3RvciA9IGdldFByb21pc2VDdG9yKHByb21pc2VDdG9yKTtcbiAgICAgICAgcmV0dXJuIG5ldyBwcm9taXNlQ3RvcihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgICAgICBfdGhpcy5zdWJzY3JpYmUoZnVuY3Rpb24gKHgpIHsgcmV0dXJuICh2YWx1ZSA9IHgpOyB9LCBmdW5jdGlvbiAoZXJyKSB7IHJldHVybiByZWplY3QoZXJyKTsgfSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzb2x2ZSh2YWx1ZSk7IH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUuY3JlYXRlID0gZnVuY3Rpb24gKHN1YnNjcmliZSkge1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoc3Vic2NyaWJlKTtcbiAgICB9O1xuICAgIHJldHVybiBPYnNlcnZhYmxlO1xufSgpKTtcbmV4cG9ydCB7IE9ic2VydmFibGUgfTtcbmZ1bmN0aW9uIGdldFByb21pc2VDdG9yKHByb21pc2VDdG9yKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAoX2EgPSBwcm9taXNlQ3RvciAhPT0gbnVsbCAmJiBwcm9taXNlQ3RvciAhPT0gdm9pZCAwID8gcHJvbWlzZUN0b3IgOiBjb25maWcuUHJvbWlzZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogUHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGlzT2JzZXJ2ZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgaXNGdW5jdGlvbih2YWx1ZS5uZXh0KSAmJiBpc0Z1bmN0aW9uKHZhbHVlLmVycm9yKSAmJiBpc0Z1bmN0aW9uKHZhbHVlLmNvbXBsZXRlKTtcbn1cbmZ1bmN0aW9uIGlzU3Vic2NyaWJlcih2YWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgJiYgdmFsdWUgaW5zdGFuY2VvZiBTdWJzY3JpYmVyKSB8fCAoaXNPYnNlcnZlcih2YWx1ZSkgJiYgaXNTdWJzY3JpcHRpb24odmFsdWUpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU9ic2VydmFibGUuanMubWFwIiwiaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5leHBvcnQgZnVuY3Rpb24gaGFzTGlmdChzb3VyY2UpIHtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihzb3VyY2UgPT09IG51bGwgfHwgc291cmNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzb3VyY2UubGlmdCk7XG59XG5leHBvcnQgZnVuY3Rpb24gb3BlcmF0ZShpbml0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgICAgaWYgKGhhc0xpZnQoc291cmNlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZS5saWZ0KGZ1bmN0aW9uIChsaWZ0ZWRTb3VyY2UpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5pdChsaWZ0ZWRTb3VyY2UsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmFibGUgdG8gbGlmdCB1bmtub3duIE9ic2VydmFibGUgdHlwZScpO1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saWZ0LmpzLm1hcCIsImltcG9ydCB7IF9fZXh0ZW5kcyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgb25OZXh0LCBvbkNvbXBsZXRlLCBvbkVycm9yLCBvbkZpbmFsaXplKSB7XG4gICAgcmV0dXJuIG5ldyBPcGVyYXRvclN1YnNjcmliZXIoZGVzdGluYXRpb24sIG9uTmV4dCwgb25Db21wbGV0ZSwgb25FcnJvciwgb25GaW5hbGl6ZSk7XG59XG52YXIgT3BlcmF0b3JTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoT3BlcmF0b3JTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE9wZXJhdG9yU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgb25OZXh0LCBvbkNvbXBsZXRlLCBvbkVycm9yLCBvbkZpbmFsaXplLCBzaG91bGRVbnN1YnNjcmliZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMub25GaW5hbGl6ZSA9IG9uRmluYWxpemU7XG4gICAgICAgIF90aGlzLnNob3VsZFVuc3Vic2NyaWJlID0gc2hvdWxkVW5zdWJzY3JpYmU7XG4gICAgICAgIF90aGlzLl9uZXh0ID0gb25OZXh0XG4gICAgICAgICAgICA/IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIG9uTmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IF9zdXBlci5wcm90b3R5cGUuX25leHQ7XG4gICAgICAgIF90aGlzLl9lcnJvciA9IG9uRXJyb3JcbiAgICAgICAgICAgID8gZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogX3N1cGVyLnByb3RvdHlwZS5fZXJyb3I7XG4gICAgICAgIF90aGlzLl9jb21wbGV0ZSA9IG9uQ29tcGxldGVcbiAgICAgICAgICAgID8gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogX3N1cGVyLnByb3RvdHlwZS5fY29tcGxldGU7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT3BlcmF0b3JTdWJzY3JpYmVyLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoIXRoaXMuc2hvdWxkVW5zdWJzY3JpYmUgfHwgdGhpcy5zaG91bGRVbnN1YnNjcmliZSgpKSB7XG4gICAgICAgICAgICB2YXIgY2xvc2VkXzEgPSB0aGlzLmNsb3NlZDtcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUudW5zdWJzY3JpYmUuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICFjbG9zZWRfMSAmJiAoKF9hID0gdGhpcy5vbkZpbmFsaXplKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBPcGVyYXRvclN1YnNjcmliZXI7XG59KFN1YnNjcmliZXIpKTtcbmV4cG9ydCB7IE9wZXJhdG9yU3Vic2NyaWJlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T3BlcmF0b3JTdWJzY3JpYmVyLmpzLm1hcCIsImV4cG9ydCB2YXIgaXNBcnJheUxpa2UgPSAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHggJiYgdHlwZW9mIHgubGVuZ3RoID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgeCAhPT0gJ2Z1bmN0aW9uJzsgfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0FycmF5TGlrZS5qcy5tYXAiLCJpbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSBcIi4vaXNGdW5jdGlvblwiO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvbWlzZSh2YWx1ZSkge1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2YWx1ZS50aGVuKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzUHJvbWlzZS5qcy5tYXAiLCJpbXBvcnQgeyBvYnNlcnZhYmxlIGFzIFN5bWJvbF9vYnNlcnZhYmxlIH0gZnJvbSAnLi4vc3ltYm9sL29ic2VydmFibGUnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5leHBvcnQgZnVuY3Rpb24gaXNJbnRlcm9wT2JzZXJ2YWJsZShpbnB1dCkge1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKGlucHV0W1N5bWJvbF9vYnNlcnZhYmxlXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0ludGVyb3BPYnNlcnZhYmxlLmpzLm1hcCIsImltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuZXhwb3J0IGZ1bmN0aW9uIGlzQXN5bmNJdGVyYWJsZShvYmopIHtcbiAgICByZXR1cm4gU3ltYm9sLmFzeW5jSXRlcmF0b3IgJiYgaXNGdW5jdGlvbihvYmogPT09IG51bGwgfHwgb2JqID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvYmpbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzQXN5bmNJdGVyYWJsZS5qcy5tYXAiLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlSW52YWxpZE9ic2VydmFibGVUeXBlRXJyb3IoaW5wdXQpIHtcbiAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihcIllvdSBwcm92aWRlZCBcIiArIChpbnB1dCAhPT0gbnVsbCAmJiB0eXBlb2YgaW5wdXQgPT09ICdvYmplY3QnID8gJ2FuIGludmFsaWQgb2JqZWN0JyA6IFwiJ1wiICsgaW5wdXQgKyBcIidcIikgKyBcIiB3aGVyZSBhIHN0cmVhbSB3YXMgZXhwZWN0ZWQuIFlvdSBjYW4gcHJvdmlkZSBhbiBPYnNlcnZhYmxlLCBQcm9taXNlLCBSZWFkYWJsZVN0cmVhbSwgQXJyYXksIEFzeW5jSXRlcmFibGUsIG9yIEl0ZXJhYmxlLlwiKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRocm93VW5vYnNlcnZhYmxlRXJyb3IuanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFN5bWJvbEl0ZXJhdG9yKCkge1xuICAgIGlmICh0eXBlb2YgU3ltYm9sICE9PSAnZnVuY3Rpb24nIHx8ICFTeW1ib2wuaXRlcmF0b3IpIHtcbiAgICAgICAgcmV0dXJuICdAQGl0ZXJhdG9yJztcbiAgICB9XG4gICAgcmV0dXJuIFN5bWJvbC5pdGVyYXRvcjtcbn1cbmV4cG9ydCB2YXIgaXRlcmF0b3IgPSBnZXRTeW1ib2xJdGVyYXRvcigpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXRlcmF0b3IuanMubWFwIiwiaW1wb3J0IHsgaXRlcmF0b3IgYXMgU3ltYm9sX2l0ZXJhdG9yIH0gZnJvbSAnLi4vc3ltYm9sL2l0ZXJhdG9yJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuZXhwb3J0IGZ1bmN0aW9uIGlzSXRlcmFibGUoaW5wdXQpIHtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihpbnB1dCA9PT0gbnVsbCB8fCBpbnB1dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5wdXRbU3ltYm9sX2l0ZXJhdG9yXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0l0ZXJhYmxlLmpzLm1hcCIsImltcG9ydCB7IF9fYXN5bmNHZW5lcmF0b3IsIF9fYXdhaXQsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9pc0Z1bmN0aW9uJztcbmV4cG9ydCBmdW5jdGlvbiByZWFkYWJsZVN0cmVhbUxpa2VUb0FzeW5jR2VuZXJhdG9yKHJlYWRhYmxlU3RyZWFtKSB7XG4gICAgcmV0dXJuIF9fYXN5bmNHZW5lcmF0b3IodGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiByZWFkYWJsZVN0cmVhbUxpa2VUb0FzeW5jR2VuZXJhdG9yXzEoKSB7XG4gICAgICAgIHZhciByZWFkZXIsIF9hLCB2YWx1ZSwgZG9uZTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyID0gcmVhZGFibGVTdHJlYW0uZ2V0UmVhZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMSwgLCA5LCAxMF0pO1xuICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRydWUpIHJldHVybiBbMywgOF07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgX19hd2FpdChyZWFkZXIucmVhZCgpKV07XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBfYSA9IF9iLnNlbnQoKSwgdmFsdWUgPSBfYS52YWx1ZSwgZG9uZSA9IF9hLmRvbmU7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZG9uZSkgcmV0dXJuIFszLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBfX2F3YWl0KHZvaWQgMCldO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyLCBfYi5zZW50KCldO1xuICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFs0LCBfX2F3YWl0KHZhbHVlKV07XG4gICAgICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gWzQsIF9iLnNlbnQoKV07XG4gICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgMl07XG4gICAgICAgICAgICAgICAgY2FzZSA4OiByZXR1cm4gWzMsIDEwXTtcbiAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWxlYXNlTG9jaygpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzddO1xuICAgICAgICAgICAgICAgIGNhc2UgMTA6IHJldHVybiBbMl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVhZGFibGVTdHJlYW1MaWtlKG9iaikge1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKG9iaiA9PT0gbnVsbCB8fCBvYmogPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9iai5nZXRSZWFkZXIpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNSZWFkYWJsZVN0cmVhbUxpa2UuanMubWFwIiwiaW1wb3J0IHsgX19hc3luY1ZhbHVlcywgX19hd2FpdGVyLCBfX2dlbmVyYXRvciwgX192YWx1ZXMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGlzQXJyYXlMaWtlIH0gZnJvbSAnLi4vdXRpbC9pc0FycmF5TGlrZSc7XG5pbXBvcnQgeyBpc1Byb21pc2UgfSBmcm9tICcuLi91dGlsL2lzUHJvbWlzZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBpc0ludGVyb3BPYnNlcnZhYmxlIH0gZnJvbSAnLi4vdXRpbC9pc0ludGVyb3BPYnNlcnZhYmxlJztcbmltcG9ydCB7IGlzQXN5bmNJdGVyYWJsZSB9IGZyb20gJy4uL3V0aWwvaXNBc3luY0l0ZXJhYmxlJztcbmltcG9ydCB7IGNyZWF0ZUludmFsaWRPYnNlcnZhYmxlVHlwZUVycm9yIH0gZnJvbSAnLi4vdXRpbC90aHJvd1Vub2JzZXJ2YWJsZUVycm9yJztcbmltcG9ydCB7IGlzSXRlcmFibGUgfSBmcm9tICcuLi91dGlsL2lzSXRlcmFibGUnO1xuaW1wb3J0IHsgaXNSZWFkYWJsZVN0cmVhbUxpa2UsIHJlYWRhYmxlU3RyZWFtTGlrZVRvQXN5bmNHZW5lcmF0b3IgfSBmcm9tICcuLi91dGlsL2lzUmVhZGFibGVTdHJlYW1MaWtlJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgcmVwb3J0VW5oYW5kbGVkRXJyb3IgfSBmcm9tICcuLi91dGlsL3JlcG9ydFVuaGFuZGxlZEVycm9yJztcbmltcG9ydCB7IG9ic2VydmFibGUgYXMgU3ltYm9sX29ic2VydmFibGUgfSBmcm9tICcuLi9zeW1ib2wvb2JzZXJ2YWJsZSc7XG5leHBvcnQgZnVuY3Rpb24gaW5uZXJGcm9tKGlucHV0KSB7XG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuICAgIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgICAgIGlmIChpc0ludGVyb3BPYnNlcnZhYmxlKGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb21JbnRlcm9wT2JzZXJ2YWJsZShpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQXJyYXlMaWtlKGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1Byb21pc2UoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbVByb21pc2UoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0FzeW5jSXRlcmFibGUoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbUFzeW5jSXRlcmFibGUoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0l0ZXJhYmxlKGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb21JdGVyYWJsZShpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUmVhZGFibGVTdHJlYW1MaWtlKGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb21SZWFkYWJsZVN0cmVhbUxpa2UoaW5wdXQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRocm93IGNyZWF0ZUludmFsaWRPYnNlcnZhYmxlVHlwZUVycm9yKGlucHV0KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmcm9tSW50ZXJvcE9ic2VydmFibGUob2JqKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBvYnMgPSBvYmpbU3ltYm9sX29ic2VydmFibGVdKCk7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKG9icy5zdWJzY3JpYmUpKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JzLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm92aWRlZCBvYmplY3QgZG9lcyBub3QgY29ycmVjdGx5IGltcGxlbWVudCBTeW1ib2wub2JzZXJ2YWJsZScpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZyb21BcnJheUxpa2UoYXJyYXkpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGggJiYgIXN1YnNjcmliZXIuY2xvc2VkOyBpKyspIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChhcnJheVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZyb21Qcm9taXNlKHByb21pc2UpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgcHJvbWlzZVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIHN1YnNjcmliZXIuZXJyb3IoZXJyKTsgfSlcbiAgICAgICAgICAgIC50aGVuKG51bGwsIHJlcG9ydFVuaGFuZGxlZEVycm9yKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmcm9tSXRlcmFibGUoaXRlcmFibGUpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpdGVyYWJsZV8xID0gX192YWx1ZXMoaXRlcmFibGUpLCBpdGVyYWJsZV8xXzEgPSBpdGVyYWJsZV8xLm5leHQoKTsgIWl0ZXJhYmxlXzFfMS5kb25lOyBpdGVyYWJsZV8xXzEgPSBpdGVyYWJsZV8xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGl0ZXJhYmxlXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmFibGVfMV8xICYmICFpdGVyYWJsZV8xXzEuZG9uZSAmJiAoX2EgPSBpdGVyYWJsZV8xLnJldHVybikpIF9hLmNhbGwoaXRlcmFibGVfMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZyb21Bc3luY0l0ZXJhYmxlKGFzeW5jSXRlcmFibGUpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgcHJvY2Vzcyhhc3luY0l0ZXJhYmxlLCBzdWJzY3JpYmVyKS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7IHJldHVybiBzdWJzY3JpYmVyLmVycm9yKGVycik7IH0pO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZyb21SZWFkYWJsZVN0cmVhbUxpa2UocmVhZGFibGVTdHJlYW0pIHtcbiAgICByZXR1cm4gZnJvbUFzeW5jSXRlcmFibGUocmVhZGFibGVTdHJlYW1MaWtlVG9Bc3luY0dlbmVyYXRvcihyZWFkYWJsZVN0cmVhbSkpO1xufVxuZnVuY3Rpb24gcHJvY2Vzcyhhc3luY0l0ZXJhYmxlLCBzdWJzY3JpYmVyKSB7XG4gICAgdmFyIGFzeW5jSXRlcmFibGVfMSwgYXN5bmNJdGVyYWJsZV8xXzE7XG4gICAgdmFyIGVfMiwgX2E7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdmFsdWUsIGVfMl8xO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDUsIDYsIDExXSk7XG4gICAgICAgICAgICAgICAgICAgIGFzeW5jSXRlcmFibGVfMSA9IF9fYXN5bmNWYWx1ZXMoYXN5bmNJdGVyYWJsZSk7XG4gICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBbNCwgYXN5bmNJdGVyYWJsZV8xLm5leHQoKV07XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIShhc3luY0l0ZXJhYmxlXzFfMSA9IF9iLnNlbnQoKSwgIWFzeW5jSXRlcmFibGVfMV8xLmRvbmUpKSByZXR1cm4gWzMsIDRdO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGFzeW5jSXRlcmFibGVfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAzO1xuICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFszLCAxXTtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMywgMTFdO1xuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgZV8yXzEgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGVfMiA9IHsgZXJyb3I6IGVfMl8xIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgMTFdO1xuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFs2LCAsIDksIDEwXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghKGFzeW5jSXRlcmFibGVfMV8xICYmICFhc3luY0l0ZXJhYmxlXzFfMS5kb25lICYmIChfYSA9IGFzeW5jSXRlcmFibGVfMS5yZXR1cm4pKSkgcmV0dXJuIFszLCA4XTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBfYS5jYWxsKGFzeW5jSXRlcmFibGVfMSldO1xuICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDg7XG4gICAgICAgICAgICAgICAgY2FzZSA4OiByZXR1cm4gWzMsIDEwXTtcbiAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgIGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3XTtcbiAgICAgICAgICAgICAgICBjYXNlIDEwOiByZXR1cm4gWzddO1xuICAgICAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbm5lckZyb20uanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIGV4ZWN1dGVTY2hlZHVsZShwYXJlbnRTdWJzY3JpcHRpb24sIHNjaGVkdWxlciwgd29yaywgZGVsYXksIHJlcGVhdCkge1xuICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7IGRlbGF5ID0gMDsgfVxuICAgIGlmIChyZXBlYXQgPT09IHZvaWQgMCkgeyByZXBlYXQgPSBmYWxzZTsgfVxuICAgIHZhciBzY2hlZHVsZVN1YnNjcmlwdGlvbiA9IHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdvcmsoKTtcbiAgICAgICAgaWYgKHJlcGVhdCkge1xuICAgICAgICAgICAgcGFyZW50U3Vic2NyaXB0aW9uLmFkZCh0aGlzLnNjaGVkdWxlKG51bGwsIGRlbGF5KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9LCBkZWxheSk7XG4gICAgcGFyZW50U3Vic2NyaXB0aW9uLmFkZChzY2hlZHVsZVN1YnNjcmlwdGlvbik7XG4gICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgcmV0dXJuIHNjaGVkdWxlU3Vic2NyaXB0aW9uO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV4ZWN1dGVTY2hlZHVsZS5qcy5tYXAiLCJpbXBvcnQgeyBvcGVyYXRlIH0gZnJvbSAnLi4vdXRpbC9saWZ0JztcbmltcG9ydCB7IGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlciB9IGZyb20gJy4vT3BlcmF0b3JTdWJzY3JpYmVyJztcbmV4cG9ydCBmdW5jdGlvbiBtYXAocHJvamVjdCwgdGhpc0FyZykge1xuICAgIHJldHVybiBvcGVyYXRlKGZ1bmN0aW9uIChzb3VyY2UsIHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgc291cmNlLnN1YnNjcmliZShjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIoc3Vic2NyaWJlciwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQocHJvamVjdC5jYWxsKHRoaXNBcmcsIHZhbHVlLCBpbmRleCsrKSk7XG4gICAgICAgIH0pKTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hcC5qcy5tYXAiLCJpbXBvcnQgeyBfX3JlYWQsIF9fc3ByZWFkQXJyYXkgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IG1hcCB9IGZyb20gXCIuLi9vcGVyYXRvcnMvbWFwXCI7XG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5mdW5jdGlvbiBjYWxsT3JBcHBseShmbiwgYXJncykge1xuICAgIHJldHVybiBpc0FycmF5KGFyZ3MpID8gZm4uYXBwbHkodm9pZCAwLCBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQoYXJncykpKSA6IGZuKGFyZ3MpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1hcE9uZU9yTWFueUFyZ3MoZm4pIHtcbiAgICByZXR1cm4gbWFwKGZ1bmN0aW9uIChhcmdzKSB7IHJldHVybiBjYWxsT3JBcHBseShmbiwgYXJncyk7IH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFwT25lT3JNYW55QXJncy5qcy5tYXAiLCJpbXBvcnQgeyBpbm5lckZyb20gfSBmcm9tICcuLi9vYnNlcnZhYmxlL2lubmVyRnJvbSc7XG5pbXBvcnQgeyBleGVjdXRlU2NoZWR1bGUgfSBmcm9tICcuLi91dGlsL2V4ZWN1dGVTY2hlZHVsZSc7XG5pbXBvcnQgeyBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIgfSBmcm9tICcuL09wZXJhdG9yU3Vic2NyaWJlcic7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VJbnRlcm5hbHMoc291cmNlLCBzdWJzY3JpYmVyLCBwcm9qZWN0LCBjb25jdXJyZW50LCBvbkJlZm9yZU5leHQsIGV4cGFuZCwgaW5uZXJTdWJTY2hlZHVsZXIsIGFkZGl0aW9uYWxGaW5hbGl6ZXIpIHtcbiAgICB2YXIgYnVmZmVyID0gW107XG4gICAgdmFyIGFjdGl2ZSA9IDA7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIHZhciBjaGVja0NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaXNDb21wbGV0ZSAmJiAhYnVmZmVyLmxlbmd0aCAmJiAhYWN0aXZlKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBvdXRlck5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIChhY3RpdmUgPCBjb25jdXJyZW50ID8gZG9Jbm5lclN1Yih2YWx1ZSkgOiBidWZmZXIucHVzaCh2YWx1ZSkpOyB9O1xuICAgIHZhciBkb0lubmVyU3ViID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGV4cGFuZCAmJiBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgICBhY3RpdmUrKztcbiAgICAgICAgdmFyIGlubmVyQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgaW5uZXJGcm9tKHByb2plY3QodmFsdWUsIGluZGV4KyspKS5zdWJzY3JpYmUoY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyKHN1YnNjcmliZXIsIGZ1bmN0aW9uIChpbm5lclZhbHVlKSB7XG4gICAgICAgICAgICBvbkJlZm9yZU5leHQgPT09IG51bGwgfHwgb25CZWZvcmVOZXh0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkJlZm9yZU5leHQoaW5uZXJWYWx1ZSk7XG4gICAgICAgICAgICBpZiAoZXhwYW5kKSB7XG4gICAgICAgICAgICAgICAgb3V0ZXJOZXh0KGlubmVyVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KGlubmVyVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpbm5lckNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgfSwgdW5kZWZpbmVkLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoaW5uZXJDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZS0tO1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBidWZmZXJlZFZhbHVlID0gYnVmZmVyLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5uZXJTdWJTY2hlZHVsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVjdXRlU2NoZWR1bGUoc3Vic2NyaWJlciwgaW5uZXJTdWJTY2hlZHVsZXIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvSW5uZXJTdWIoYnVmZmVyZWRWYWx1ZSk7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9Jbm5lclN1YihidWZmZXJlZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGJ1ZmZlci5sZW5ndGggJiYgYWN0aXZlIDwgY29uY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2xvb3BfMSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrQ29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgfTtcbiAgICBzb3VyY2Uuc3Vic2NyaWJlKGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlcihzdWJzY3JpYmVyLCBvdXRlck5leHQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIGNoZWNrQ29tcGxldGUoKTtcbiAgICB9KSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYWRkaXRpb25hbEZpbmFsaXplciA9PT0gbnVsbCB8fCBhZGRpdGlvbmFsRmluYWxpemVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhZGRpdGlvbmFsRmluYWxpemVyKCk7XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1lcmdlSW50ZXJuYWxzLmpzLm1hcCIsImltcG9ydCB7IG1hcCB9IGZyb20gJy4vbWFwJztcbmltcG9ydCB7IGlubmVyRnJvbSB9IGZyb20gJy4uL29ic2VydmFibGUvaW5uZXJGcm9tJztcbmltcG9ydCB7IG9wZXJhdGUgfSBmcm9tICcuLi91dGlsL2xpZnQnO1xuaW1wb3J0IHsgbWVyZ2VJbnRlcm5hbHMgfSBmcm9tICcuL21lcmdlSW50ZXJuYWxzJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuLi91dGlsL2lzRnVuY3Rpb24nO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlTWFwKHByb2plY3QsIHJlc3VsdFNlbGVjdG9yLCBjb25jdXJyZW50KSB7XG4gICAgaWYgKGNvbmN1cnJlbnQgPT09IHZvaWQgMCkgeyBjb25jdXJyZW50ID0gSW5maW5pdHk7IH1cbiAgICBpZiAoaXNGdW5jdGlvbihyZXN1bHRTZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlTWFwKGZ1bmN0aW9uIChhLCBpKSB7IHJldHVybiBtYXAoZnVuY3Rpb24gKGIsIGlpKSB7IHJldHVybiByZXN1bHRTZWxlY3RvcihhLCBiLCBpLCBpaSk7IH0pKGlubmVyRnJvbShwcm9qZWN0KGEsIGkpKSk7IH0sIGNvbmN1cnJlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgcmVzdWx0U2VsZWN0b3IgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbmN1cnJlbnQgPSByZXN1bHRTZWxlY3RvcjtcbiAgICB9XG4gICAgcmV0dXJuIG9wZXJhdGUoZnVuY3Rpb24gKHNvdXJjZSwgc3Vic2NyaWJlcikgeyByZXR1cm4gbWVyZ2VJbnRlcm5hbHMoc291cmNlLCBzdWJzY3JpYmVyLCBwcm9qZWN0LCBjb25jdXJyZW50KTsgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tZXJnZU1hcC5qcy5tYXAiLCJpbXBvcnQgeyBfX3JlYWQgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGlubmVyRnJvbSB9IGZyb20gJy4uL29ic2VydmFibGUvaW5uZXJGcm9tJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IG1lcmdlTWFwIH0gZnJvbSAnLi4vb3BlcmF0b3JzL21lcmdlTWFwJztcbmltcG9ydCB7IGlzQXJyYXlMaWtlIH0gZnJvbSAnLi4vdXRpbC9pc0FycmF5TGlrZSc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IG1hcE9uZU9yTWFueUFyZ3MgfSBmcm9tICcuLi91dGlsL21hcE9uZU9yTWFueUFyZ3MnO1xudmFyIG5vZGVFdmVudEVtaXR0ZXJNZXRob2RzID0gWydhZGRMaXN0ZW5lcicsICdyZW1vdmVMaXN0ZW5lciddO1xudmFyIGV2ZW50VGFyZ2V0TWV0aG9kcyA9IFsnYWRkRXZlbnRMaXN0ZW5lcicsICdyZW1vdmVFdmVudExpc3RlbmVyJ107XG52YXIganF1ZXJ5TWV0aG9kcyA9IFsnb24nLCAnb2ZmJ107XG5leHBvcnQgZnVuY3Rpb24gZnJvbUV2ZW50KHRhcmdldCwgZXZlbnROYW1lLCBvcHRpb25zLCByZXN1bHRTZWxlY3Rvcikge1xuICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMpKSB7XG4gICAgICAgIHJlc3VsdFNlbGVjdG9yID0gb3B0aW9ucztcbiAgICAgICAgb3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHJlc3VsdFNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBmcm9tRXZlbnQodGFyZ2V0LCBldmVudE5hbWUsIG9wdGlvbnMpLnBpcGUobWFwT25lT3JNYW55QXJncyhyZXN1bHRTZWxlY3RvcikpO1xuICAgIH1cbiAgICB2YXIgX2EgPSBfX3JlYWQoaXNFdmVudFRhcmdldCh0YXJnZXQpXG4gICAgICAgID8gZXZlbnRUYXJnZXRNZXRob2RzLm1hcChmdW5jdGlvbiAobWV0aG9kTmFtZSkgeyByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIpIHsgcmV0dXJuIHRhcmdldFttZXRob2ROYW1lXShldmVudE5hbWUsIGhhbmRsZXIsIG9wdGlvbnMpOyB9OyB9KVxuICAgICAgICA6XG4gICAgICAgICAgICBpc05vZGVTdHlsZUV2ZW50RW1pdHRlcih0YXJnZXQpXG4gICAgICAgICAgICAgICAgPyBub2RlRXZlbnRFbWl0dGVyTWV0aG9kcy5tYXAodG9Db21tb25IYW5kbGVyUmVnaXN0cnkodGFyZ2V0LCBldmVudE5hbWUpKVxuICAgICAgICAgICAgICAgIDogaXNKUXVlcnlTdHlsZUV2ZW50RW1pdHRlcih0YXJnZXQpXG4gICAgICAgICAgICAgICAgICAgID8ganF1ZXJ5TWV0aG9kcy5tYXAodG9Db21tb25IYW5kbGVyUmVnaXN0cnkodGFyZ2V0LCBldmVudE5hbWUpKVxuICAgICAgICAgICAgICAgICAgICA6IFtdLCAyKSwgYWRkID0gX2FbMF0sIHJlbW92ZSA9IF9hWzFdO1xuICAgIGlmICghYWRkKSB7XG4gICAgICAgIGlmIChpc0FycmF5TGlrZSh0YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VNYXAoZnVuY3Rpb24gKHN1YlRhcmdldCkgeyByZXR1cm4gZnJvbUV2ZW50KHN1YlRhcmdldCwgZXZlbnROYW1lLCBvcHRpb25zKTsgfSkoaW5uZXJGcm9tKHRhcmdldCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghYWRkKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgZXZlbnQgdGFyZ2V0Jyk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdWJzY3JpYmVyLm5leHQoMSA8IGFyZ3MubGVuZ3RoID8gYXJncyA6IGFyZ3NbMF0pO1xuICAgICAgICB9O1xuICAgICAgICBhZGQoaGFuZGxlcik7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiByZW1vdmUoaGFuZGxlcik7IH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiB0b0NvbW1vbkhhbmRsZXJSZWdpc3RyeSh0YXJnZXQsIGV2ZW50TmFtZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAobWV0aG9kTmFtZSkgeyByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIpIHsgcmV0dXJuIHRhcmdldFttZXRob2ROYW1lXShldmVudE5hbWUsIGhhbmRsZXIpOyB9OyB9O1xufVxuZnVuY3Rpb24gaXNOb2RlU3R5bGVFdmVudEVtaXR0ZXIodGFyZ2V0KSB7XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24odGFyZ2V0LmFkZExpc3RlbmVyKSAmJiBpc0Z1bmN0aW9uKHRhcmdldC5yZW1vdmVMaXN0ZW5lcik7XG59XG5mdW5jdGlvbiBpc0pRdWVyeVN0eWxlRXZlbnRFbWl0dGVyKHRhcmdldCkge1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKHRhcmdldC5vbikgJiYgaXNGdW5jdGlvbih0YXJnZXQub2ZmKTtcbn1cbmZ1bmN0aW9uIGlzRXZlbnRUYXJnZXQodGFyZ2V0KSB7XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24odGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIpICYmIGlzRnVuY3Rpb24odGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZnJvbUV2ZW50LmpzLm1hcCIsImltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IHZhciBFUlJfQ09SRE9WQV9OT1RfQVZBSUxBQkxFID0geyBlcnJvcjogJ2NvcmRvdmFfbm90X2F2YWlsYWJsZScgfTtcbmV4cG9ydCB2YXIgRVJSX1BMVUdJTl9OT1RfSU5TVEFMTEVEID0geyBlcnJvcjogJ3BsdWdpbl9ub3RfaW5zdGFsbGVkJyB9O1xuLyoqXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFByb21pc2UoY2FsbGJhY2spIHtcbiAgICB2YXIgdHJ5TmF0aXZlUHJvbWlzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKFByb21pc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2socmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTm8gUHJvbWlzZSBzdXBwb3J0IG9yIHBvbHlmaWxsIGZvdW5kLiBUbyBlbmFibGUgSW9uaWMgTmF0aXZlIHN1cHBvcnQsIHBsZWFzZSBhZGQgdGhlIGVzNi1wcm9taXNlIHBvbHlmaWxsIGJlZm9yZSB0aGlzIHNjcmlwdCwgb3IgcnVuIHdpdGggYSBsaWJyYXJ5IGxpa2UgQW5ndWxhciBvciBvbiBhIHJlY2VudCBicm93c2VyLicpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmFuZ3VsYXIpIHtcbiAgICAgICAgdmFyIGRvYyA9IHdpbmRvdy5kb2N1bWVudDtcbiAgICAgICAgdmFyIGluamVjdG9yID0gd2luZG93LmFuZ3VsYXIuZWxlbWVudChkb2MucXVlcnlTZWxlY3RvcignW25nLWFwcF0nKSB8fCBkb2MuYm9keSkuaW5qZWN0b3IoKTtcbiAgICAgICAgaWYgKGluamVjdG9yKSB7XG4gICAgICAgICAgICB2YXIgJHEgPSBpbmplY3Rvci5nZXQoJyRxJyk7XG4gICAgICAgICAgICByZXR1cm4gJHEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLndhcm4oXCJBbmd1bGFyIDEgd2FzIGRldGVjdGVkIGJ1dCAkcSBjb3VsZG4ndCBiZSByZXRyaWV2ZWQuIFRoaXMgaXMgdXN1YWxseSB3aGVuIHRoZSBhcHAgaXMgbm90IGJvb3RzdHJhcHBlZCBvbiB0aGUgaHRtbCBvciBib2R5IHRhZy4gRmFsbGluZyBiYWNrIHRvIG5hdGl2ZSBwcm9taXNlcyB3aGljaCB3b24ndCB0cmlnZ2VyIGFuIGF1dG9tYXRpYyBkaWdlc3Qgd2hlbiBwcm9taXNlcyByZXNvbHZlLlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRyeU5hdGl2ZVByb21pc2UoKTtcbn1cbi8qKlxuICogQHBhcmFtIHBsdWdpbk9ialxuICogQHBhcmFtIG1ldGhvZE5hbWVcbiAqIEBwYXJhbSBhcmdzXG4gKiBAcGFyYW0gb3B0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gd3JhcFByb21pc2UocGx1Z2luT2JqLCBtZXRob2ROYW1lLCBhcmdzLCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0ge307IH1cbiAgICB2YXIgcGx1Z2luUmVzdWx0LCByZWo7XG4gICAgdmFyIHAgPSBnZXRQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgaWYgKG9wdHMuZGVzdHJ1Y3QpIHtcbiAgICAgICAgICAgIHBsdWdpblJlc3VsdCA9IGNhbGxDb3Jkb3ZhUGx1Z2luKHBsdWdpbk9iaiwgbWV0aG9kTmFtZSwgYXJncywgb3B0cywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShhcmdzKTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChhcmdzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGx1Z2luUmVzdWx0ID0gY2FsbENvcmRvdmFQbHVnaW4ocGx1Z2luT2JqLCBtZXRob2ROYW1lLCBhcmdzLCBvcHRzLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9XG4gICAgICAgIHJlaiA9IHJlamVjdDtcbiAgICB9KTtcbiAgICAvLyBBbmd1bGFyIHRocm93cyBhbiBlcnJvciBvbiB1bmhhbmRsZWQgcmVqZWN0aW9uLCBidXQgaW4gdGhpcyBjYXNlIHdlIGhhdmUgYWxyZWFkeSBwcmludGVkXG4gICAgLy8gYSB3YXJuaW5nIHRoYXQgQ29yZG92YSBpcyB1bmRlZmluZWQgb3IgdGhlIHBsdWdpbiBpcyB1bmluc3RhbGxlZCwgc28gdGhlcmUgaXMgbm8gcmVhc29uXG4gICAgLy8gdG8gZXJyb3JcbiAgICBpZiAocGx1Z2luUmVzdWx0ICYmIHBsdWdpblJlc3VsdC5lcnJvcikge1xuICAgICAgICBwLmNhdGNoKGZ1bmN0aW9uICgpIHsgfSk7XG4gICAgICAgIHR5cGVvZiByZWogPT09ICdmdW5jdGlvbicgJiYgcmVqKHBsdWdpblJlc3VsdC5lcnJvcik7XG4gICAgfVxuICAgIHJldHVybiBwO1xufVxuLyoqXG4gKiBAcGFyYW0gcGx1Z2luT2JqXG4gKiBAcGFyYW0gbWV0aG9kTmFtZVxuICogQHBhcmFtIGFyZ3NcbiAqIEBwYXJhbSBvcHRzXG4gKi9cbmZ1bmN0aW9uIHdyYXBPdGhlclByb21pc2UocGx1Z2luT2JqLCBtZXRob2ROYW1lLCBhcmdzLCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0ge307IH1cbiAgICByZXR1cm4gZ2V0UHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBwbHVnaW5SZXN1bHQgPSBjYWxsQ29yZG92YVBsdWdpbihwbHVnaW5PYmosIG1ldGhvZE5hbWUsIGFyZ3MsIG9wdHMpO1xuICAgICAgICBpZiAocGx1Z2luUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAocGx1Z2luUmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KHBsdWdpblJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwbHVnaW5SZXN1bHQudGhlbikge1xuICAgICAgICAgICAgICAgIHBsdWdpblJlc3VsdC50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoeyBlcnJvcjogJ3VuZXhwZWN0ZWRfZXJyb3InIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vKipcbiAqIEBwYXJhbSBwbHVnaW5PYmpcbiAqIEBwYXJhbSBtZXRob2ROYW1lXG4gKiBAcGFyYW0gYXJnc1xuICogQHBhcmFtIG9wdHNcbiAqL1xuZnVuY3Rpb24gd3JhcE9ic2VydmFibGUocGx1Z2luT2JqLCBtZXRob2ROYW1lLCBhcmdzLCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0ge307IH1cbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIHZhciBwbHVnaW5SZXN1bHQ7XG4gICAgICAgIGlmIChvcHRzLmRlc3RydWN0KSB7XG4gICAgICAgICAgICBwbHVnaW5SZXN1bHQgPSBjYWxsQ29yZG92YVBsdWdpbihwbHVnaW5PYmosIG1ldGhvZE5hbWUsIGFyZ3MsIG9wdHMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ic2VydmVyLm5leHQoYXJncyk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvYnNlcnZlci5lcnJvcihhcmdzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGx1Z2luUmVzdWx0ID0gY2FsbENvcmRvdmFQbHVnaW4ocGx1Z2luT2JqLCBtZXRob2ROYW1lLCBhcmdzLCBvcHRzLCBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpLCBvYnNlcnZlci5lcnJvci5iaW5kKG9ic2VydmVyKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsdWdpblJlc3VsdCAmJiBwbHVnaW5SZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKHBsdWdpblJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChvcHRzLmNsZWFyRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdHMuY2xlYXJXaXRoQXJncykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxDb3Jkb3ZhUGx1Z2luKHBsdWdpbk9iaiwgb3B0cy5jbGVhckZ1bmN0aW9uLCBhcmdzLCBvcHRzLCBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpLCBvYnNlcnZlci5lcnJvci5iaW5kKG9ic2VydmVyKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxDb3Jkb3ZhUGx1Z2luKHBsdWdpbk9iaiwgb3B0cy5jbGVhckZ1bmN0aW9uLCBbXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1VuYWJsZSB0byBjbGVhciB0aGUgcHJldmlvdXMgb2JzZXJ2YWJsZSB3YXRjaCBmb3InLCBwbHVnaW5PYmouY29uc3RydWN0b3IuZ2V0UGx1Z2luTmFtZSgpLCBtZXRob2ROYW1lKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSk7XG59XG4vKipcbiAqIFdyYXAgdGhlIGV2ZW50IHdpdGggYW4gb2JzZXJ2YWJsZVxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gZXZlbnQgZXZlbnQgbmFtZVxuICogQHBhcmFtIGVsZW1lbnQgVGhlIGVsZW1lbnQgdG8gYXR0YWNoIHRoZSBldmVudCBsaXN0ZW5lciB0b1xuICogQHJldHVybnMge09ic2VydmFibGV9XG4gKi9cbmZ1bmN0aW9uIHdyYXBFdmVudE9ic2VydmFibGUoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBlbGVtZW50ID1cbiAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgZWxlbWVudFxuICAgICAgICAgICAgPyBnZXQod2luZG93LCBlbGVtZW50KVxuICAgICAgICAgICAgOiBlbGVtZW50IHx8ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHt9KTtcbiAgICByZXR1cm4gZnJvbUV2ZW50KGVsZW1lbnQsIGV2ZW50KTtcbn1cbi8qKlxuICogQHBhcmFtIHBsdWdpblxuICogQHBhcmFtIG1ldGhvZE5hbWVcbiAqIEBwYXJhbSBwbHVnaW5OYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0F2YWlsYWJpbGl0eShwbHVnaW4sIG1ldGhvZE5hbWUsIHBsdWdpbk5hbWUpIHtcbiAgICB2YXIgcGx1Z2luUmVmLCBwbHVnaW5QYWNrYWdlO1xuICAgIGlmICh0eXBlb2YgcGx1Z2luID09PSAnc3RyaW5nJykge1xuICAgICAgICBwbHVnaW5SZWYgPSBwbHVnaW47XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwbHVnaW5SZWYgPSBwbHVnaW4uY29uc3RydWN0b3IuZ2V0UGx1Z2luUmVmKCk7XG4gICAgICAgIHBsdWdpbk5hbWUgPSBwbHVnaW4uY29uc3RydWN0b3IuZ2V0UGx1Z2luTmFtZSgpO1xuICAgICAgICBwbHVnaW5QYWNrYWdlID0gcGx1Z2luLmNvbnN0cnVjdG9yLmdldFBsdWdpbkluc3RhbGxOYW1lKCk7XG4gICAgfVxuICAgIHZhciBwbHVnaW5JbnN0YW5jZSA9IGdldFBsdWdpbihwbHVnaW5SZWYpO1xuICAgIGlmICghcGx1Z2luSW5zdGFuY2UgfHwgKCEhbWV0aG9kTmFtZSAmJiB0eXBlb2YgcGx1Z2luSW5zdGFuY2VbbWV0aG9kTmFtZV0gPT09ICd1bmRlZmluZWQnKSkge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXdpbmRvdy5jb3Jkb3ZhKSB7XG4gICAgICAgICAgICBjb3Jkb3ZhV2FybihwbHVnaW5OYW1lLCBtZXRob2ROYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBFUlJfQ09SRE9WQV9OT1RfQVZBSUxBQkxFO1xuICAgICAgICB9XG4gICAgICAgIHBsdWdpbldhcm4ocGx1Z2luTmFtZSwgcGx1Z2luUGFja2FnZSwgbWV0aG9kTmFtZSk7XG4gICAgICAgIHJldHVybiBFUlJfUExVR0lOX05PVF9JTlNUQUxMRUQ7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuLyoqXG4gKiBDaGVja3MgaWYgX29iamVjdEluc3RhbmNlIGV4aXN0cyBhbmQgaGFzIHRoZSBtZXRob2QvcHJvcGVydHlcbiAqXG4gKiBAcGFyYW0gcGx1Z2luT2JqXG4gKiBAcGFyYW0gbWV0aG9kTmFtZVxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbmNlQXZhaWxhYmlsaXR5KHBsdWdpbk9iaiwgbWV0aG9kTmFtZSkge1xuICAgIHJldHVybiBwbHVnaW5PYmouX29iamVjdEluc3RhbmNlICYmICghbWV0aG9kTmFtZSB8fCB0eXBlb2YgcGx1Z2luT2JqLl9vYmplY3RJbnN0YW5jZVttZXRob2ROYW1lXSAhPT0gJ3VuZGVmaW5lZCcpO1xufVxuLyoqXG4gKiBAcGFyYW0gYXJnc1xuICogQHBhcmFtIG9wdHNcbiAqIEBwYXJhbSByZXNvbHZlXG4gKiBAcGFyYW0gcmVqZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRJbmRleChhcmdzLCBvcHRzLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7IG9wdHMgPSB7fTsgfVxuICAgIC8vIGlnbm9yZSByZXNvbHZlIGFuZCByZWplY3QgaW4gY2FzZSBzeW5jXG4gICAgaWYgKG9wdHMuc3luYykge1xuICAgICAgICByZXR1cm4gYXJncztcbiAgICB9XG4gICAgLy8gSWYgdGhlIHBsdWdpbiBtZXRob2QgZXhwZWN0cyBteU1ldGhvZChzdWNjZXNzLCBlcnIsIG9wdGlvbnMpXG4gICAgaWYgKG9wdHMuY2FsbGJhY2tPcmRlciA9PT0gJ3JldmVyc2UnKSB7XG4gICAgICAgIC8vIEdldCB0aG9zZSBhcmd1bWVudHMgaW4gdGhlIG9yZGVyIFtyZXNvbHZlLCByZWplY3QsIC4uLnJlc3RPZkFyZ3NdXG4gICAgICAgIGFyZ3MudW5zaGlmdChyZWplY3QpO1xuICAgICAgICBhcmdzLnVuc2hpZnQocmVzb2x2ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG9wdHMuY2FsbGJhY2tTdHlsZSA9PT0gJ25vZGUnKSB7XG4gICAgICAgIGFyZ3MucHVzaChmdW5jdGlvbiAoZXJyLCByZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG9wdHMuY2FsbGJhY2tTdHlsZSA9PT0gJ29iamVjdCcgJiYgb3B0cy5zdWNjZXNzTmFtZSAmJiBvcHRzLmVycm9yTmFtZSkge1xuICAgICAgICB2YXIgb2JqID0ge307XG4gICAgICAgIG9ialtvcHRzLnN1Y2Nlc3NOYW1lXSA9IHJlc29sdmU7XG4gICAgICAgIG9ialtvcHRzLmVycm9yTmFtZV0gPSByZWplY3Q7XG4gICAgICAgIGFyZ3MucHVzaChvYmopO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2Ygb3B0cy5zdWNjZXNzSW5kZXggIT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBvcHRzLmVycm9ySW5kZXggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBzZXRTdWNjZXNzSW5kZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSd2ZSBzcGVjaWZpZWQgYSBzdWNjZXNzL2Vycm9yIGluZGV4XG4gICAgICAgICAgICBpZiAob3B0cy5zdWNjZXNzSW5kZXggPiBhcmdzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGFyZ3Nbb3B0cy5zdWNjZXNzSW5kZXhdID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFyZ3Muc3BsaWNlKG9wdHMuc3VjY2Vzc0luZGV4LCAwLCByZXNvbHZlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHNldEVycm9ySW5kZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBXZSBkb24ndCB3YW50IHRoYXQgdGhlIHJlamVjdCBjYiBnZXRzIHNwbGljZWQgaW50byB0aGUgcG9zaXRpb24gb2YgYW4gb3B0aW9uYWwgYXJndW1lbnQgdGhhdCBoYXMgbm90IGJlZW5cbiAgICAgICAgICAgIC8vIGRlZmluZWQgYW5kIHRodXMgY2F1c2luZyBub24gZXhwZWN0ZWQgYmVoYXZpb3IuXG4gICAgICAgICAgICBpZiAob3B0cy5lcnJvckluZGV4ID4gYXJncy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBhcmdzW29wdHMuZXJyb3JJbmRleF0gPSByZWplY3Q7IC8vIGluc2VydCB0aGUgcmVqZWN0IGZuIGF0IHRoZSBjb3JyZWN0IHNwZWNpZmljIGluZGV4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhcmdzLnNwbGljZShvcHRzLmVycm9ySW5kZXgsIDAsIHJlamVjdCk7IC8vIG90aGVyd2lzZSBqdXN0IHNwbGljZSBpdCBpbnRvIHRoZSBhcnJheVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAob3B0cy5zdWNjZXNzSW5kZXggPiBvcHRzLmVycm9ySW5kZXgpIHtcbiAgICAgICAgICAgIHNldEVycm9ySW5kZXgoKTtcbiAgICAgICAgICAgIHNldFN1Y2Nlc3NJbmRleCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0U3VjY2Vzc0luZGV4KCk7XG4gICAgICAgICAgICBzZXRFcnJvckluZGV4KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIE90aGVyd2lzZSwgbGV0J3MgdGFjayB0aGVtIG9uIHRvIHRoZSBlbmQgb2YgdGhlIGFyZ3VtZW50IGxpc3RcbiAgICAgICAgLy8gd2hpY2ggaXMgOTAlIG9mIGNhc2VzXG4gICAgICAgIGFyZ3MucHVzaChyZXNvbHZlKTtcbiAgICAgICAgYXJncy5wdXNoKHJlamVjdCk7XG4gICAgfVxuICAgIHJldHVybiBhcmdzO1xufVxuLyoqXG4gKiBAcGFyYW0gcGx1Z2luT2JqXG4gKiBAcGFyYW0gbWV0aG9kTmFtZVxuICogQHBhcmFtIGFyZ3NcbiAqIEBwYXJhbSBvcHRzXG4gKiBAcGFyYW0gcmVzb2x2ZVxuICogQHBhcmFtIHJlamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsbENvcmRvdmFQbHVnaW4ocGx1Z2luT2JqLCBtZXRob2ROYW1lLCBhcmdzLCBvcHRzLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7IG9wdHMgPSB7fTsgfVxuICAgIC8vIFRyeSB0byBmaWd1cmUgb3V0IHdoZXJlIHRoZSBzdWNjZXNzL2Vycm9yIGNhbGxiYWNrcyBuZWVkIHRvIGJlIGJvdW5kXG4gICAgLy8gdG8gb3VyIHByb21pc2UgcmVzb2x2ZS9yZWplY3QgaGFuZGxlcnMuXG4gICAgYXJncyA9IHNldEluZGV4KGFyZ3MsIG9wdHMsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgdmFyIGF2YWlsYWJpbGl0eUNoZWNrID0gY2hlY2tBdmFpbGFiaWxpdHkocGx1Z2luT2JqLCBtZXRob2ROYW1lKTtcbiAgICBpZiAoYXZhaWxhYmlsaXR5Q2hlY2sgPT09IHRydWUpIHtcbiAgICAgICAgdmFyIHBsdWdpbkluc3RhbmNlID0gZ2V0UGx1Z2luKHBsdWdpbk9iai5jb25zdHJ1Y3Rvci5nZXRQbHVnaW5SZWYoKSk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItc3ByZWFkXG4gICAgICAgIHJldHVybiBwbHVnaW5JbnN0YW5jZVttZXRob2ROYW1lXS5hcHBseShwbHVnaW5JbnN0YW5jZSwgYXJncyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gYXZhaWxhYmlsaXR5Q2hlY2s7XG4gICAgfVxufVxuLyoqXG4gKiBAcGFyYW0gcGx1Z2luT2JqXG4gKiBAcGFyYW0gbWV0aG9kTmFtZVxuICogQHBhcmFtIGFyZ3NcbiAqIEBwYXJhbSBvcHRzXG4gKiBAcGFyYW0gcmVzb2x2ZVxuICogQHBhcmFtIHJlamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsbEluc3RhbmNlKHBsdWdpbk9iaiwgbWV0aG9kTmFtZSwgYXJncywgb3B0cywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0ge307IH1cbiAgICBhcmdzID0gc2V0SW5kZXgoYXJncywgb3B0cywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICBpZiAoaW5zdGFuY2VBdmFpbGFiaWxpdHkocGx1Z2luT2JqLCBtZXRob2ROYW1lKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXNwcmVhZFxuICAgICAgICByZXR1cm4gcGx1Z2luT2JqLl9vYmplY3RJbnN0YW5jZVttZXRob2ROYW1lXS5hcHBseShwbHVnaW5PYmouX29iamVjdEluc3RhbmNlLCBhcmdzKTtcbiAgICB9XG59XG4vKipcbiAqIEBwYXJhbSBwbHVnaW5SZWZcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBsdWdpbihwbHVnaW5SZWYpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGdldCh3aW5kb3csIHBsdWdpblJlZik7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuLyoqXG4gKiBAcGFyYW0gZWxlbWVudFxuICogQHBhcmFtIHBhdGhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldChlbGVtZW50LCBwYXRoKSB7XG4gICAgdmFyIHBhdGhzID0gcGF0aC5zcGxpdCgnLicpO1xuICAgIHZhciBvYmogPSBlbGVtZW50O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIG9iaiA9IG9ialtwYXRoc1tpXV07XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG4vKipcbiAqIEBwYXJhbSBwbHVnaW5OYW1lXG4gKiBAcGFyYW0gcGx1Z2luXG4gKiBAcGFyYW0gbWV0aG9kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwbHVnaW5XYXJuKHBsdWdpbk5hbWUsIHBsdWdpbiwgbWV0aG9kKSB7XG4gICAgaWYgKG1ldGhvZCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ05hdGl2ZTogdHJpZWQgY2FsbGluZyAnICsgcGx1Z2luTmFtZSArICcuJyArIG1ldGhvZCArICcsIGJ1dCB0aGUgJyArIHBsdWdpbk5hbWUgKyAnIHBsdWdpbiBpcyBub3QgaW5zdGFsbGVkLicpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiTmF0aXZlOiB0cmllZCBhY2Nlc3NpbmcgdGhlIFwiICsgcGx1Z2luTmFtZSArIFwiIHBsdWdpbiBidXQgaXQncyBub3QgaW5zdGFsbGVkLlwiKTtcbiAgICB9XG4gICAgaWYgKHBsdWdpbikge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJJbnN0YWxsIHRoZSBcIiArIHBsdWdpbk5hbWUgKyBcIiBwbHVnaW46ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgXCIgKyBwbHVnaW4gKyBcIidcIik7XG4gICAgfVxufVxuLyoqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHBsdWdpbk5hbWVcbiAqIEBwYXJhbSBtZXRob2RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcmRvdmFXYXJuKHBsdWdpbk5hbWUsIG1ldGhvZCkge1xuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKG1ldGhvZCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdOYXRpdmU6IHRyaWVkIGNhbGxpbmcgJyArXG4gICAgICAgICAgICAgICAgcGx1Z2luTmFtZSArXG4gICAgICAgICAgICAgICAgJy4nICtcbiAgICAgICAgICAgICAgICBtZXRob2QgK1xuICAgICAgICAgICAgICAgICcsIGJ1dCBDb3Jkb3ZhIGlzIG5vdCBhdmFpbGFibGUuIE1ha2Ugc3VyZSB0byBpbmNsdWRlIGNvcmRvdmEuanMgb3IgcnVuIGluIGEgZGV2aWNlL3NpbXVsYXRvcicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdOYXRpdmU6IHRyaWVkIGFjY2Vzc2luZyB0aGUgJyArXG4gICAgICAgICAgICAgICAgcGx1Z2luTmFtZSArXG4gICAgICAgICAgICAgICAgJyBwbHVnaW4gYnV0IENvcmRvdmEgaXMgbm90IGF2YWlsYWJsZS4gTWFrZSBzdXJlIHRvIGluY2x1ZGUgY29yZG92YS5qcyBvciBydW4gaW4gYSBkZXZpY2Uvc2ltdWxhdG9yJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIEBwYXJhbSBwbHVnaW5PYmpcbiAqIEBwYXJhbSBtZXRob2ROYW1lXG4gKiBAcGFyYW0gb3B0c1xuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IHZhciB3cmFwID0gZnVuY3Rpb24gKHBsdWdpbk9iaiwgbWV0aG9kTmFtZSwgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsgb3B0cyA9IHt9OyB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0cy5zeW5jKSB7XG4gICAgICAgICAgICAvLyBTeW5jIGRvZXNuJ3Qgd3JhcCB0aGUgcGx1Z2luIHdpdGggYSBwcm9taXNlIG9yIG9ic2VydmFibGUsIGl0IHJldHVybnMgdGhlIHJlc3VsdCBhcy1pc1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxDb3Jkb3ZhUGx1Z2luKHBsdWdpbk9iaiwgbWV0aG9kTmFtZSwgYXJncywgb3B0cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob3B0cy5vYnNlcnZhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gd3JhcE9ic2VydmFibGUocGx1Z2luT2JqLCBtZXRob2ROYW1lLCBhcmdzLCBvcHRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvcHRzLmV2ZW50T2JzZXJ2YWJsZSAmJiBvcHRzLmV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gd3JhcEV2ZW50T2JzZXJ2YWJsZShvcHRzLmV2ZW50LCBvcHRzLmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9wdHMub3RoZXJQcm9taXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gd3JhcE90aGVyUHJvbWlzZShwbHVnaW5PYmosIG1ldGhvZE5hbWUsIGFyZ3MsIG9wdHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHdyYXBQcm9taXNlKHBsdWdpbk9iaiwgbWV0aG9kTmFtZSwgYXJncywgb3B0cyk7XG4gICAgICAgIH1cbiAgICB9O1xufTtcbi8qKlxuICogQHBhcmFtIHBsdWdpbk9ialxuICogQHBhcmFtIG1ldGhvZE5hbWVcbiAqIEBwYXJhbSBvcHRzXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gd3JhcEluc3RhbmNlKHBsdWdpbk9iaiwgbWV0aG9kTmFtZSwgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsgb3B0cyA9IHt9OyB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0cy5zeW5jKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbEluc3RhbmNlKHBsdWdpbk9iaiwgbWV0aG9kTmFtZSwgYXJncywgb3B0cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob3B0cy5vYnNlcnZhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBsdWdpblJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZiAob3B0cy5kZXN0cnVjdCkge1xuICAgICAgICAgICAgICAgICAgICBwbHVnaW5SZXN1bHQgPSBjYWxsSW5zdGFuY2UocGx1Z2luT2JqLCBtZXRob2ROYW1lLCBhcmdzLCBvcHRzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JzZXJ2ZXIubmV4dChhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9ic2VydmVyLmVycm9yKGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBsdWdpblJlc3VsdCA9IGNhbGxJbnN0YW5jZShwbHVnaW5PYmosIG1ldGhvZE5hbWUsIGFyZ3MsIG9wdHMsIG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlciksIG9ic2VydmVyLmVycm9yLmJpbmQob2JzZXJ2ZXIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBsdWdpblJlc3VsdCAmJiBwbHVnaW5SZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IocGx1Z2luUmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRzLmNsZWFyV2l0aEFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbEluc3RhbmNlKHBsdWdpbk9iaiwgb3B0cy5jbGVhckZ1bmN0aW9uLCBhcmdzLCBvcHRzLCBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpLCBvYnNlcnZlci5lcnJvci5iaW5kKG9ic2VydmVyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbEluc3RhbmNlKHBsdWdpbk9iaiwgb3B0cy5jbGVhckZ1bmN0aW9uLCBbXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignVW5hYmxlIHRvIGNsZWFyIHRoZSBwcmV2aW91cyBvYnNlcnZhYmxlIHdhdGNoIGZvcicsIHBsdWdpbk9iai5jb25zdHJ1Y3Rvci5nZXRQbHVnaW5OYW1lKCksIG1ldGhvZE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9wdHMub3RoZXJQcm9taXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0UHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZiAob3B0cy5kZXN0cnVjdCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBjYWxsSW5zdGFuY2UocGx1Z2luT2JqLCBtZXRob2ROYW1lLCBhcmdzLCBvcHRzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBjYWxsSW5zdGFuY2UocGx1Z2luT2JqLCBtZXRob2ROYW1lLCBhcmdzLCBvcHRzLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwbHVnaW5SZXN1bHRfMSwgcmVqXzE7XG4gICAgICAgICAgICB2YXIgcCA9IGdldFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChvcHRzLmRlc3RydWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHBsdWdpblJlc3VsdF8xID0gY2FsbEluc3RhbmNlKHBsdWdpbk9iaiwgbWV0aG9kTmFtZSwgYXJncywgb3B0cywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luUmVzdWx0XzEgPSBjYWxsSW5zdGFuY2UocGx1Z2luT2JqLCBtZXRob2ROYW1lLCBhcmdzLCBvcHRzLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZWpfMSA9IHJlamVjdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gQW5ndWxhciB0aHJvd3MgYW4gZXJyb3Igb24gdW5oYW5kbGVkIHJlamVjdGlvbiwgYnV0IGluIHRoaXMgY2FzZSB3ZSBoYXZlIGFscmVhZHkgcHJpbnRlZFxuICAgICAgICAgICAgLy8gYSB3YXJuaW5nIHRoYXQgQ29yZG92YSBpcyB1bmRlZmluZWQgb3IgdGhlIHBsdWdpbiBpcyB1bmluc3RhbGxlZCwgc28gdGhlcmUgaXMgbm8gcmVhc29uXG4gICAgICAgICAgICAvLyB0byBlcnJvclxuICAgICAgICAgICAgaWYgKHBsdWdpblJlc3VsdF8xICYmIHBsdWdpblJlc3VsdF8xLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgcC5jYXRjaChmdW5jdGlvbiAoKSB7IH0pO1xuICAgICAgICAgICAgICAgIHR5cGVvZiByZWpfMSA9PT0gJ2Z1bmN0aW9uJyAmJiByZWpfMShwbHVnaW5SZXN1bHRfMS5lcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgfVxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21tb24uanMubWFwIiwiLyoqXG4gKiBAcGFyYW0gZWxlbWVudFxuICogQHBhcmFtIHBhdGhcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXQoZWxlbWVudCwgcGF0aCkge1xuICAgIHZhciBwYXRocyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgICB2YXIgb2JqID0gZWxlbWVudDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghb2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBvYmogPSBvYmpbcGF0aHNbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuLyoqXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9taXNlKGNhbGxiYWNrKSB7XG4gICAgaWYgKGNhbGxiYWNrID09PSB2b2lkIDApIHsgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7IH07IH1cbiAgICB2YXIgdHJ5TmF0aXZlUHJvbWlzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBQcm9taXNlID09PSAnZnVuY3Rpb24nIHx8ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuUHJvbWlzZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2socmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTm8gUHJvbWlzZSBzdXBwb3J0IG9yIHBvbHlmaWxsIGZvdW5kLiBUbyBlbmFibGUgSW9uaWMgTmF0aXZlIHN1cHBvcnQsIHBsZWFzZSBhZGQgdGhlIGVzNi1wcm9taXNlIHBvbHlmaWxsIGJlZm9yZSB0aGlzIHNjcmlwdCwgb3IgcnVuIHdpdGggYSBsaWJyYXJ5IGxpa2UgQW5ndWxhciBvciBvbiBhIHJlY2VudCBicm93c2VyLicpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gdHJ5TmF0aXZlUHJvbWlzZSgpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbC5qcy5tYXAiLCJpbXBvcnQgeyBjaGVja0F2YWlsYWJpbGl0eSB9IGZyb20gJy4vZGVjb3JhdG9ycy9jb21tb24nO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi91dGlsJztcbnZhciBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbigpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgcGx1Z2luIGlzIGluc3RhbGxlZFxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4uaW5zdGFsbGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaXNBdmFpbGFibGUgPSBjaGVja0F2YWlsYWJpbGl0eSh0aGlzLnBsdWdpblJlZikgPT09IHRydWU7XG4gICAgICAgIHJldHVybiBpc0F2YWlsYWJsZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG9yaWdpbmFsIHBsdWdpbiBvYmplY3RcbiAgICAgKi9cbiAgICBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbi5nZXRQbHVnaW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIGdldCh3aW5kb3csIHRoaXMucGx1Z2luUmVmKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHBsdWdpbidzIG5hbWVcbiAgICAgKi9cbiAgICBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbi5nZXRQbHVnaW5OYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcGx1Z2luTmFtZSA9IHRoaXMucGx1Z2luTmFtZTtcbiAgICAgICAgcmV0dXJuIHBsdWdpbk5hbWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwbHVnaW4ncyByZWZlcmVuY2VcbiAgICAgKi9cbiAgICBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbi5nZXRQbHVnaW5SZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwbHVnaW5SZWYgPSB0aGlzLnBsdWdpblJlZjtcbiAgICAgICAgcmV0dXJuIHBsdWdpblJlZjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHBsdWdpbidzIGluc3RhbGwgbmFtZVxuICAgICAqL1xuICAgIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLmdldFBsdWdpbkluc3RhbGxOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcGx1Z2luID0gdGhpcy5wbHVnaW47XG4gICAgICAgIHJldHVybiBwbHVnaW47XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwbHVnaW4ncyBzdXBwb3J0ZWQgcGxhdGZvcm1zXG4gICAgICovXG4gICAgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4uZ2V0U3VwcG9ydGVkUGxhdGZvcm1zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcGxhdGZvcm0gPSB0aGlzLnBsYXRmb3JtcztcbiAgICAgICAgcmV0dXJuIHBsYXRmb3JtO1xuICAgIH07XG4gICAgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ucGx1Z2luTmFtZSA9ICcnO1xuICAgIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLnBsdWdpblJlZiA9ICcnO1xuICAgIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLnBsdWdpbiA9ICcnO1xuICAgIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLnJlcG8gPSAnJztcbiAgICBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbi5wbGF0Zm9ybXMgPSBbXTtcbiAgICBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbi5pbnN0YWxsID0gJyc7XG4gICAgcmV0dXJuIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luO1xufSgpKTtcbmV4cG9ydCB7IEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hd2Vzb21lLWNvcmRvdmEtcGx1Z2luLmpzLm1hcCIsImltcG9ydCB7IHdyYXAgfSBmcm9tICcuL2NvbW1vbic7XG4vKipcbiAqIEBwYXJhbSBwbHVnaW5PYmpcbiAqIEBwYXJhbSBtZXRob2ROYW1lXG4gKiBAcGFyYW0gY29uZmlnXG4gKiBAcGFyYW0gYXJnc1xuICovXG5leHBvcnQgZnVuY3Rpb24gY29yZG92YShwbHVnaW5PYmosIG1ldGhvZE5hbWUsIGNvbmZpZywgYXJncykge1xuICAgIHJldHVybiB3cmFwKHBsdWdpbk9iaiwgbWV0aG9kTmFtZSwgY29uZmlnKS5hcHBseSh0aGlzLCBhcmdzKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvcmRvdmEuanMubWFwIiwiaW1wb3J0IHsgY2hlY2tSZWFkeSB9IGZyb20gJy4vYm9vdHN0cmFwJztcbmV4cG9ydCB7IEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnLi9hd2Vzb21lLWNvcmRvdmEtcGx1Z2luJztcbi8vIERlY29yYXRvcnNcbmV4cG9ydCB7IGNoZWNrQXZhaWxhYmlsaXR5LCBpbnN0YW5jZUF2YWlsYWJpbGl0eSwgd3JhcCwgZ2V0UHJvbWlzZSB9IGZyb20gJy4vZGVjb3JhdG9ycy9jb21tb24nO1xuZXhwb3J0ICogZnJvbSAnLi9kZWNvcmF0b3JzL2NvcmRvdmEnO1xuZXhwb3J0ICogZnJvbSAnLi9kZWNvcmF0b3JzL2NvcmRvdmEtZnVuY3Rpb24tb3ZlcnJpZGUnO1xuZXhwb3J0ICogZnJvbSAnLi9kZWNvcmF0b3JzL2NvcmRvdmEtaW5zdGFuY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9kZWNvcmF0b3JzL2NvcmRvdmEtcHJvcGVydHknO1xuZXhwb3J0ICogZnJvbSAnLi9kZWNvcmF0b3JzL2luc3RhbmNlLXByb3BlcnR5JztcbmV4cG9ydCAqIGZyb20gJy4vZGVjb3JhdG9ycy9pbnRlcmZhY2VzJztcbmNoZWNrUmVhZHkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgeyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgY29yZG92YSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbnZhciBMb2NhdGlvbkFjY3VyYWN5T3JpZ2luYWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExvY2F0aW9uQWNjdXJhY3lPcmlnaW5hbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMb2NhdGlvbkFjY3VyYWN5T3JpZ2luYWwoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLlJFUVVFU1RfUFJJT1JJVFlfTk9fUE9XRVIgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLlJFUVVFU1RfUFJJT1JJVFlfTE9XX1BPV0VSID0gMTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5SRVFVRVNUX1BSSU9SSVRZX0JBTEFOQ0VEX1BPV0VSX0FDQ1VSQUNZID0gMjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5SRVFVRVNUX1BSSU9SSVRZX0hJR0hfQUNDVVJBQ1kgPSAzO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLlNVQ0NFU1NfU0VUVElOR1NfU0FUSVNGSUVEID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5TVUNDRVNTX1VTRVJfQUdSRUVEID0gMTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5FUlJPUl9BTFJFQURZX1JFUVVFU1RJTkcgPSAtMTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5FUlJPUl9JTlZBTElEX0FDVElPTiA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuRVJST1JfSU5WQUxJRF9BQ0NVUkFDWSA9IDE7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuRVJST1JfRVhDRVBUSU9OID0gMTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5FUlJPUl9DQU5OT1RfQ0hBTkdFX0FDQ1VSQUNZID0gMztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5FUlJPUl9VU0VSX0RJU0FHUkVFRCA9IDQ7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuRVJST1JfR09PR0xFX0FQSV9DT05ORUNUSU9OX0ZBSUxFRCA9IDQ7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTG9jYXRpb25BY2N1cmFjeU9yaWdpbmFsLnByb3RvdHlwZS5jYW5SZXF1ZXN0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gY29yZG92YSh0aGlzLCBcImNhblJlcXVlc3RcIiwge30sIGFyZ3VtZW50cyk7IH07XG4gICAgTG9jYXRpb25BY2N1cmFjeU9yaWdpbmFsLnByb3RvdHlwZS5pc1JlcXVlc3RpbmcgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBjb3Jkb3ZhKHRoaXMsIFwiaXNSZXF1ZXN0aW5nXCIsIHt9LCBhcmd1bWVudHMpOyB9O1xuICAgIExvY2F0aW9uQWNjdXJhY3lPcmlnaW5hbC5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIChhY2N1cmFjeSkgeyByZXR1cm4gY29yZG92YSh0aGlzLCBcInJlcXVlc3RcIiwgeyBcImNhbGxiYWNrT3JkZXJcIjogXCJyZXZlcnNlXCIgfSwgYXJndW1lbnRzKTsgfTtcbiAgICBMb2NhdGlvbkFjY3VyYWN5T3JpZ2luYWwucGx1Z2luTmFtZSA9IFwiTG9jYXRpb25BY2N1cmFjeVwiO1xuICAgIExvY2F0aW9uQWNjdXJhY3lPcmlnaW5hbC5wbHVnaW4gPSBcImNvcmRvdmEtcGx1Z2luLXJlcXVlc3QtbG9jYXRpb24tYWNjdXJhY3lcIjtcbiAgICBMb2NhdGlvbkFjY3VyYWN5T3JpZ2luYWwucGx1Z2luUmVmID0gXCJjb3Jkb3ZhLnBsdWdpbnMubG9jYXRpb25BY2N1cmFjeVwiO1xuICAgIExvY2F0aW9uQWNjdXJhY3lPcmlnaW5hbC5yZXBvID0gXCJodHRwczovL2dpdGh1Yi5jb20vZHBhOTljL2NvcmRvdmEtcGx1Z2luLXJlcXVlc3QtbG9jYXRpb24tYWNjdXJhY3lcIjtcbiAgICBMb2NhdGlvbkFjY3VyYWN5T3JpZ2luYWwucGxhdGZvcm1zID0gW1wiQW5kcm9pZFwiLCBcImlPU1wiXTtcbiAgICByZXR1cm4gTG9jYXRpb25BY2N1cmFjeU9yaWdpbmFsO1xufShBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbikpO1xudmFyIExvY2F0aW9uQWNjdXJhY3kgPSBuZXcgTG9jYXRpb25BY2N1cmFjeU9yaWdpbmFsKCk7XG5leHBvcnQgeyBMb2NhdGlvbkFjY3VyYWN5IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOHVMaTh1TGk5emNtTXZRR0YzWlhOdmJXVXRZMjl5Wkc5MllTMXdiSFZuYVc1ekwzQnNkV2RwYm5NdmJHOWpZWFJwYjI0dFlXTmpkWEpoWTNrdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdPMEZCUTBFc1QwRkJUeXgxUTBGQkswTXNUVUZCVFN3clFrRkJLMElzUTBGQlF6czdTVUZ2UTNSRUxHOURRVUV3UWpzN08xRkJRemxFT3pzN08xZEJTVWM3VVVGRFNDd3JRa0ZCZVVJc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRE9VSTdPenM3VjBGSlJ6dFJRVU5JTEdkRFFVRXdRaXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU12UWpzN096dFhRVWxITzFGQlEwZ3NPRU5CUVhkRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlF6ZERPenM3TzFkQlNVYzdVVUZEU0N4dlEwRkJPRUlzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEYmtNN096czdWMEZKUnp0UlFVTklMR2REUVVFd1FpeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTXZRanM3T3p0WFFVbEhPMUZCUTBnc2VVSkJRVzFDTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTNoQ096czdPMWRCU1VjN1VVRkRTQ3c0UWtGQmQwSXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNNVFqczdPenRYUVVsSE8xRkJRMGdzTUVKQlFXOUNMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRM3BDT3pzN08xZEJTVWM3VVVGRFNDdzBRa0ZCYzBJc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRE0wSTdPenM3VjBGSlJ6dFJRVU5JTEhGQ1FVRmxMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRM0JDT3pzN08xZEJTVWM3VVVGRFNDeHJRMEZCTkVJc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGFrTTdPenM3VjBGSlJ6dFJRVU5JTERCQ1FVRnZRaXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU42UWpzN096dFhRVWxITzFGQlEwZ3NkME5CUVd0RExFZEJRVWNzUTBGQlF5eERRVUZET3pzN1NVRlJka01zY1VOQlFWVTdTVUZWVml4MVEwRkJXVHRKUVZkYUxHdERRVUZQTEdGQlFVTXNVVUZCWjBJN096czdPenN5UWtGb1NqRkNPMFZCY1VOelF5d3dRa0ZCTUVJN1UwRkJia1FzWjBKQlFXZENJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnU1c1cVpXTjBZV0pzWlNCOUlHWnliMjBnSjBCaGJtZDFiR0Z5TDJOdmNtVW5PMXh1YVcxd2IzSjBJSHNnUTI5eVpHOTJZU3dnUVhkbGMyOXRaVU52Y21SdmRtRk9ZWFJwZG1WUWJIVm5hVzRzSUZCc2RXZHBiaUI5SUdaeWIyMGdKMEJoZDJWemIyMWxMV052Y21SdmRtRXRjR3gxWjJsdWN5OWpiM0psSnp0Y2JseHVMeW9xWEc0Z0tpQkFibUZ0WlNCTWIyTmhkR2x2YmlCQlkyTjFjbUZqZVZ4dUlDb2dRR1JsYzJOeWFYQjBhVzl1WEc0Z0tpQlVhR2x6SUVOdmNtUnZkbUV2VUdodmJtVm5ZWEFnY0d4MVoybHVJR1p2Y2lCQmJtUnliMmxrSUdGdVpDQnBUMU1nZEc4Z2NtVnhkV1Z6ZENCbGJtRmliR2x1Wnk5amFHRnVaMmx1WnlCdlppQk1iMk5oZEdsdmJpQlRaWEoyYVdObGN5QmllU0IwY21sbloyVnlhVzVuSUdFZ2JtRjBhWFpsSUdScFlXeHZaeUJtY205dElIZHBkR2hwYmlCMGFHVWdZWEJ3TENCaGRtOXBaR2x1WnlCMGFHVWdibVZsWkNCbWIzSWdkR2hsSUhWelpYSWdkRzhnYkdWaGRtVWdlVzkxY2lCaGNIQWdkRzhnWTJoaGJtZGxJR3h2WTJGMGFXOXVJSE5sZEhScGJtZHpJRzFoYm5WaGJHeDVMbHh1SUNvZ1FIVnpZV2RsWEc0Z0tpQmdZR0IwZVhCbGMyTnlhWEIwWEc0Z0tpQnBiWEJ2Y25RZ2V5Qk1iMk5oZEdsdmJrRmpZM1Z5WVdONUlIMGdabkp2YlNBblFHRjNaWE52YldVdFkyOXlaRzkyWVMxd2JIVm5hVzV6TDJ4dlkyRjBhVzl1TFdGalkzVnlZV041TDI1bmVDYzdYRzRnS2x4dUlDb2dZMjl1YzNSeWRXTjBiM0lvY0hKcGRtRjBaU0JzYjJOaGRHbHZia0ZqWTNWeVlXTjVPaUJNYjJOaGRHbHZia0ZqWTNWeVlXTjVLU0I3SUgxY2JpQXFYRzRnS2lBdUxpNWNiaUFxWEc0Z0tpQjBhR2x6TG14dlkyRjBhVzl1UVdOamRYSmhZM2t1WTJGdVVtVnhkV1Z6ZENncExuUm9aVzRvS0dOaGJsSmxjWFZsYzNRNklHSnZiMnhsWVc0cElEMCtJSHRjYmlBcVhHNGdLaUFnSUdsbUtHTmhibEpsY1hWbGMzUXBJSHRjYmlBcUlDQWdJQ0F2THlCMGFHVWdZV05qZFhKaFkza2diM0IwYVc5dUlIZHBiR3dnWW1VZ2FXZHViM0psWkNCaWVTQnBUMU5jYmlBcUlDQWdJQ0IwYUdsekxteHZZMkYwYVc5dVFXTmpkWEpoWTNrdWNtVnhkV1Z6ZENoMGFHbHpMbXh2WTJGMGFXOXVRV05qZFhKaFkza3VVa1ZSVlVWVFZGOVFVa2xQVWtsVVdWOUlTVWRJWDBGRFExVlNRVU5aS1M1MGFHVnVLRnh1SUNvZ0lDQWdJQ0FnS0NrZ1BUNGdZMjl1YzI5c1pTNXNiMmNvSjFKbGNYVmxjM1FnYzNWalkyVnpjMloxYkNjcExGeHVJQ29nSUNBZ0lDQWdaWEp5YjNJZ1BUNGdZMjl1YzI5c1pTNXNiMmNvSjBWeWNtOXlJSEpsY1hWbGMzUnBibWNnYkc5allYUnBiMjRnY0dWeWJXbHpjMmx2Ym5NbkxDQmxjbkp2Y2lsY2JpQXFJQ0FnSUNBcE8xeHVJQ29nSUNCOVhHNGdLbHh1SUNvZ2ZTazdYRzRnS2x4dUlDb2dZR0JnWEc0Z0tpOWNia0JRYkhWbmFXNG9lMXh1SUNCd2JIVm5hVzVPWVcxbE9pQW5URzlqWVhScGIyNUJZMk4xY21GamVTY3NYRzRnSUhCc2RXZHBiam9nSjJOdmNtUnZkbUV0Y0d4MVoybHVMWEpsY1hWbGMzUXRiRzlqWVhScGIyNHRZV05qZFhKaFkza25MRnh1SUNCd2JIVm5hVzVTWldZNklDZGpiM0prYjNaaExuQnNkV2RwYm5NdWJHOWpZWFJwYjI1QlkyTjFjbUZqZVNjc1hHNGdJSEpsY0c4NklDZG9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZaSEJoT1RsakwyTnZjbVJ2ZG1FdGNHeDFaMmx1TFhKbGNYVmxjM1F0Ykc5allYUnBiMjR0WVdOamRYSmhZM2tuTEZ4dUlDQndiR0YwWm05eWJYTTZJRnNuUVc1a2NtOXBaQ2NzSUNkcFQxTW5YU3hjYm4wcFhHNUFTVzVxWldOMFlXSnNaU2dwWEc1bGVIQnZjblFnWTJ4aGMzTWdURzlqWVhScGIyNUJZMk4xY21GamVTQmxlSFJsYm1SeklFRjNaWE52YldWRGIzSmtiM1poVG1GMGFYWmxVR3gxWjJsdUlIdGNiaUFnTHlvcVhHNGdJQ0FxSUVOdmJuWmxibWxsYm1ObElHTnZibk4wWVc1MFhHNGdJQ0FxWEc0Z0lDQXFJRUIwZVhCbElIdHVkVzFpWlhKOVhHNGdJQ0FxTDF4dUlDQlNSVkZWUlZOVVgxQlNTVTlTU1ZSWlgwNVBYMUJQVjBWU0lEMGdNRHRjYmlBZ0x5b3FYRzRnSUNBcUlFTnZiblpsYm1sbGJtTmxJR052Ym5OMFlXNTBYRzRnSUNBcVhHNGdJQ0FxSUVCMGVYQmxJSHR1ZFcxaVpYSjlYRzRnSUNBcUwxeHVJQ0JTUlZGVlJWTlVYMUJTU1U5U1NWUlpYMHhQVjE5UVQxZEZVaUE5SURFN1hHNGdJQzhxS2x4dUlDQWdLaUJEYjI1MlpXNXBaVzVqWlNCamIyNXpkR0Z1ZEZ4dUlDQWdLbHh1SUNBZ0tpQkFkSGx3WlNCN2JuVnRZbVZ5ZlZ4dUlDQWdLaTljYmlBZ1VrVlJWVVZUVkY5UVVrbFBVa2xVV1Y5Q1FVeEJUa05GUkY5UVQxZEZVbDlCUTBOVlVrRkRXU0E5SURJN1hHNGdJQzhxS2x4dUlDQWdLaUJEYjI1MlpXNXBaVzVqWlNCamIyNXpkR0Z1ZEZ4dUlDQWdLbHh1SUNBZ0tpQkFkSGx3WlNCN2JuVnRZbVZ5ZlZ4dUlDQWdLaTljYmlBZ1VrVlJWVVZUVkY5UVVrbFBVa2xVV1Y5SVNVZElYMEZEUTFWU1FVTlpJRDBnTXp0Y2JpQWdMeW9xWEc0Z0lDQXFJRU52Ym5abGJtbGxibU5sSUdOdmJuTjBZVzUwWEc0Z0lDQXFYRzRnSUNBcUlFQjBlWEJsSUh0dWRXMWlaWEo5WEc0Z0lDQXFMMXh1SUNCVFZVTkRSVk5UWDFORlZGUkpUa2RUWDFOQlZFbFRSa2xGUkNBOUlEQTdYRzRnSUM4cUtseHVJQ0FnS2lCRGIyNTJaVzVwWlc1alpTQmpiMjV6ZEdGdWRGeHVJQ0FnS2x4dUlDQWdLaUJBZEhsd1pTQjdiblZ0WW1WeWZWeHVJQ0FnS2k5Y2JpQWdVMVZEUTBWVFUxOVZVMFZTWDBGSFVrVkZSQ0E5SURFN1hHNGdJQzhxS2x4dUlDQWdLaUJEYjI1MlpXNXBaVzVqWlNCamIyNXpkR0Z1ZEZ4dUlDQWdLbHh1SUNBZ0tpQkFkSGx3WlNCN2JuVnRZbVZ5ZlZ4dUlDQWdLaTljYmlBZ1JWSlNUMUpmUVV4U1JVRkVXVjlTUlZGVlJWTlVTVTVISUQwZ0xURTdYRzRnSUM4cUtseHVJQ0FnS2lCRGIyNTJaVzVwWlc1alpTQmpiMjV6ZEdGdWRGeHVJQ0FnS2x4dUlDQWdLaUJBZEhsd1pTQjdiblZ0WW1WeWZWeHVJQ0FnS2k5Y2JpQWdSVkpTVDFKZlNVNVdRVXhKUkY5QlExUkpUMDRnUFNBd08xeHVJQ0F2S2lwY2JpQWdJQ29nUTI5dWRtVnVhV1Z1WTJVZ1kyOXVjM1JoYm5SY2JpQWdJQ3BjYmlBZ0lDb2dRSFI1Y0dVZ2UyNTFiV0psY24xY2JpQWdJQ292WEc0Z0lFVlNVazlTWDBsT1ZrRk1TVVJmUVVORFZWSkJRMWtnUFNBeE8xeHVJQ0F2S2lwY2JpQWdJQ29nUTI5dWRtVnVhV1Z1WTJVZ1kyOXVjM1JoYm5SY2JpQWdJQ3BjYmlBZ0lDb2dRSFI1Y0dVZ2UyNTFiV0psY24xY2JpQWdJQ292WEc0Z0lFVlNVazlTWDBWWVEwVlFWRWxQVGlBOUlERTdYRzRnSUM4cUtseHVJQ0FnS2lCRGIyNTJaVzVwWlc1alpTQmpiMjV6ZEdGdWRGeHVJQ0FnS2x4dUlDQWdLaUJBZEhsd1pTQjdiblZ0WW1WeWZWeHVJQ0FnS2k5Y2JpQWdSVkpTVDFKZlEwRk9UazlVWDBOSVFVNUhSVjlCUTBOVlVrRkRXU0E5SURNN1hHNGdJQzhxS2x4dUlDQWdLaUJEYjI1MlpXNXBaVzVqWlNCamIyNXpkR0Z1ZEZ4dUlDQWdLbHh1SUNBZ0tpQkFkSGx3WlNCN2JuVnRZbVZ5ZlZ4dUlDQWdLaTljYmlBZ1JWSlNUMUpmVlZORlVsOUVTVk5CUjFKRlJVUWdQU0EwTzF4dUlDQXZLaXBjYmlBZ0lDb2dRMjl1ZG1WdWFXVnVZMlVnWTI5dWMzUmhiblJjYmlBZ0lDcGNiaUFnSUNvZ1FIUjVjR1VnZTI1MWJXSmxjbjFjYmlBZ0lDb3ZYRzRnSUVWU1VrOVNYMGRQVDBkTVJWOUJVRWxmUTA5T1RrVkRWRWxQVGw5R1FVbE1SVVFnUFNBME8xeHVYRzRnSUM4cUtseHVJQ0FnS2lCSmJtUnBZMkYwWlhNZ2FXWWdlVzkxSUdOaGJpQnlaWEYxWlhOMElHRmpZM1Z5WVhSbElHeHZZMkYwYVc5dVhHNGdJQ0FxWEc0Z0lDQXFJRUJ5WlhSMWNtNXpJSHRRY205dGFYTmxQR0p2YjJ4bFlXNCtmU0JTWlhSMWNtNXpJR0VnY0hKdmJXbHpaU0IwYUdGMElISmxjMjkyYkdWeklIZHBkR2dnWVNCaWIyOXNaV0Z1SUhSb1lYUWdhVzVrYVdOaGRHVnpJR2xtSUhsdmRTQmpZVzRnY21WeGRXVnpkQ0JoWTJOMWNtRjBaU0JzYjJOaGRHbHZibHh1SUNBZ0tpOWNiaUFnUUVOdmNtUnZkbUVvS1Z4dUlDQmpZVzVTWlhGMVpYTjBLQ2s2SUZCeWIyMXBjMlU4WW05dmJHVmhiajRnZTF4dUlDQWdJSEpsZEhWeWJqdGNiaUFnZlZ4dVhHNGdJQzhxS2x4dUlDQWdLaUJKYm1ScFkyRjBaWE1nYVdZZ1lTQnlaWEYxWlhOMElHbHpJR04xY25KbGJuUnNlU0JwYmlCd2NtOW5jbVZ6YzF4dUlDQWdLbHh1SUNBZ0tpQkFjbVYwZFhKdWN5QjdVSEp2YldselpUeGliMjlzWldGdVBuMGdVbVYwZFhKdWN5QmhJSEJ5YjIxcGMyVWdkR2hoZENCeVpYTnZiSFpsY3lCM2FYUm9JR0VnWW05dmJHVmhiaUIwYUdGMElHbHVaR2xqWVhSbGN5QnBaaUJoSUhKbGNYVmxjM1FnYVhNZ1kzVnljbVZ1ZEd4NUlHbHVJSEJ5YjJkeVpYTnpYRzRnSUNBcUwxeHVJQ0JBUTI5eVpHOTJZU2dwWEc0Z0lHbHpVbVZ4ZFdWemRHbHVaeWdwT2lCUWNtOXRhWE5sUEdKdmIyeGxZVzQrSUh0Y2JpQWdJQ0J5WlhSMWNtNDdYRzRnSUgxY2JseHVJQ0F2S2lwY2JpQWdJQ29nVW1WeGRXVnpkSE1nWVdOamRYSmhkR1VnYkc5allYUnBiMjVjYmlBZ0lDcGNiaUFnSUNvZ1FIQmhjbUZ0SUdGalkzVnlZV041SUh0dWRXMWlaWEo5SUVGalkzVnlZV041TENCbWNtOXRJREFnZEc4Z05DNGdXVzkxSUdOaGJpQjFjMlVnZEdobElITjBZWFJwWXlCd2NtOXdaWEowYVdWeklHOW1JSFJvYVhNZ1kyeGhjM01nZEdoaGRDQnpkR0Z5ZENCM2FYUm9JRkpGVVZWRlUxUmZVRkpKVDFKSlZGbGZYRzRnSUNBcUlFQnlaWFIxY201eklIdFFjbTl0YVhObFBHRnVlVDU5SUZKbGRIVnlibk1nWVNCd2NtOXRhWE5sSUhSb1lYUWdjbVZ6YjJ4MlpYTWdiMjRnYzNWalkyVnpjeUJoYm1RZ2NtVnFaV04wY3lCcFppQmhiaUJsY25KdmNpQnZZMk4xY25KbFpGeHVJQ0FnS2k5Y2JpQWdRRU52Y21SdmRtRW9leUJqWVd4c1ltRmphMDl5WkdWeU9pQW5jbVYyWlhKelpTY2dmU2xjYmlBZ2NtVnhkV1Z6ZENoaFkyTjFjbUZqZVRvZ2JuVnRZbVZ5S1RvZ1VISnZiV2x6WlR4aGJuaytJSHRjYmlBZ0lDQnlaWFIxY200N1hHNGdJSDFjYm4xY2JpSmRmUT09IiwiaW1wb3J0IHsgR2VvbG9jYXRpb24gfSBmcm9tIFwiQGNhcGFjaXRvci9nZW9sb2NhdGlvblwiO1xuaW1wb3J0IHsgTG9jYXRpb25BY2N1cmFjeSB9IGZyb20gXCJAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvbG9jYXRpb24tYWNjdXJhY3lcIjtcblxuY29uc3QgQXBwTG9jYXRpb24gPSB7XG4gIGFzeW5jIGlzbG9jYXRpb25FbmFibGVkKCkge1xuXG4gICAgbGV0IG15UHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIEdlb2xvY2F0aW9uLmNoZWNrUGVybWlzc2lvbnMoKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZGVidWcoZGF0YSk7XG4gICAgICAgICAgaWYgKGRhdGEubG9jYXRpb24gPT09IFwiZGVuaWVkXCIpIHtcbiAgICAgICAgICAgIEdlb2xvY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9ucygpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGRhdGEubG9jYXRpb24gPT09IFwiZ3JhbnRlZFwiKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShcImdyYW50ZWRcIik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShcImRlbmllZFwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhLmxvY2F0aW9uID09PSBcInByb21wdFwiKSB7XG4gICAgICAgICAgICBHZW9sb2NhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbnMoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChkYXRhLmxvY2F0aW9uID09PSBcImdyYW50ZWRcIikge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoXCJncmFudGVkXCIpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoXCJkZW5pZWRcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5sb2NhdGlvbiA9PT0gXCJncmFudGVkXCIpIHtcbiAgICAgICAgICAgIHJlc29sdmUoXCJncmFudGVkXCIpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5sb2NhdGlvbiA9PT0gXCJwcm9tcHQtd2l0aC1yYXRpb25hbGVcIikge1xuICAgICAgICAgICAgR2VvbG9jYXRpb24ucmVxdWVzdFBlcm1pc3Npb25zKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoZGF0YS5sb2NhdGlvbiA9PT0gXCJncmFudGVkXCIpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKFwiZ3JhbnRlZFwiKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKFwiZGVuaWVkXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy9cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBhd2FpdCBteVByb21pc2U7XG4gIH0sXG5cbiAgYXN5bmMgY2hlY2tBY2N1cmFjeSgpIHtcbiAgICBsZXQgYWNjdXJhY3lQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgTG9jYXRpb25BY2N1cmFjeS5jYW5SZXF1ZXN0KClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBMb2NhdGlvbkFjY3VyYWN5LnJlcXVlc3QoXG4gICAgICAgICAgICBMb2NhdGlvbkFjY3VyYWN5LlJFUVVFU1RfUFJJT1JJVFlfSElHSF9BQ0NVUkFDWVxuICAgICAgICAgICkudGhlbihcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgTG9jYXRpb25BY2N1cmFjeS5yZXF1ZXN0KFxuICAgICAgICAgICAgTG9jYXRpb25BY2N1cmFjeS5SRVFVRVNUX1BSSU9SSVRZX0hJR0hfQUNDVVJBQ1lcbiAgICAgICAgICApLnRoZW4oXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGF3YWl0IGFjY3VyYWN5UHJvbWlzZTtcbiAgfSxcblxuICBhc3luYyBnZXRQb3NpdGlvbigpIHtcbiAgICBsZXQgcG9zaXRpb25Qcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgR2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmRlYnVnKGRhdGEpO1xuICAgICAgICAgIGxldCBwb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIGxhdDogZGF0YS5jb29yZHMubGF0aXR1ZGUsXG4gICAgICAgICAgICBsbmc6IGRhdGEuY29vcmRzLmxvbmdpdHVkZSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJlc29sdmUocG9zaXRpb24pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGF3YWl0IHBvc2l0aW9uUHJvbWlzZTtcbiAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBBcHBMb2NhdGlvbjtcbiJdLCJmaWxlIjoiYXNzZXRzL0FwcExvY2F0aW9uLmFmMzQyMmE1LmpzIn0=
