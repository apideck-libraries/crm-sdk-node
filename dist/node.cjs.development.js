'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var fetch = _interopDefault(require('node-fetch'));

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
});

var BASE_PATH = /*#__PURE__*/'https://unify.apideck.com'.replace(/\/+$/, '');

var isBlob = function isBlob(value) {
  return typeof Blob !== 'undefined' && value instanceof Blob;
};
/**
 * This is the base class for all generated API classes.
 */


var BaseAPI = /*#__PURE__*/function () {
  function BaseAPI(configuration) {
    var _this = this;

    this.configuration = configuration;

    this.fetchApi = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(url, init) {
        var fetchParams, _iterator, _step, middleware, response, _iterator2, _step2, _middleware;

        return runtime_1.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fetchParams = {
                  url: url,
                  init: init
                };
                _iterator = _createForOfIteratorHelperLoose(_this.middleware);

              case 2:
                if ((_step = _iterator()).done) {
                  _context.next = 13;
                  break;
                }

                middleware = _step.value;

                if (!middleware.pre) {
                  _context.next = 11;
                  break;
                }

                _context.next = 7;
                return middleware.pre(_extends({
                  fetch: _this.fetchApi
                }, fetchParams));

              case 7:
                _context.t0 = _context.sent;

                if (_context.t0) {
                  _context.next = 10;
                  break;
                }

                _context.t0 = fetchParams;

              case 10:
                fetchParams = _context.t0;

              case 11:
                _context.next = 2;
                break;

              case 13:
                _context.next = 15;
                return _this.configuration.fetchApi(fetchParams.url, fetchParams.init);

              case 15:
                response = _context.sent;
                _iterator2 = _createForOfIteratorHelperLoose(_this.middleware);

              case 17:
                if ((_step2 = _iterator2()).done) {
                  _context.next = 28;
                  break;
                }

                _middleware = _step2.value;

                if (!_middleware.post) {
                  _context.next = 26;
                  break;
                }

                _context.next = 22;
                return _middleware.post({
                  fetch: _this.fetchApi,
                  url: url,
                  init: init,
                  response: response.clone()
                });

              case 22:
                _context.t1 = _context.sent;

                if (_context.t1) {
                  _context.next = 25;
                  break;
                }

                _context.t1 = response;

              case 25:
                response = _context.t1;

              case 26:
                _context.next = 17;
                break;

              case 28:
                return _context.abrupt("return", response);

              case 29:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    this.middleware = [];
  }

  var _proto = BaseAPI.prototype;

  _proto.withMiddleware = function withMiddleware() {
    var _next$middleware;

    var next = this.clone();
    next.middleware = (_next$middleware = next.middleware).concat.apply(_next$middleware, arguments);
    return next;
  };

  _proto.withPreMiddleware = function withPreMiddleware() {
    for (var _len = arguments.length, preMiddlewares = new Array(_len), _key = 0; _key < _len; _key++) {
      preMiddlewares[_key] = arguments[_key];
    }

    var middlewares = preMiddlewares.map(function (pre) {
      return {
        pre: pre
      };
    });
    return this.withMiddleware.apply(this, middlewares);
  };

  _proto.withPostMiddleware = function withPostMiddleware() {
    for (var _len2 = arguments.length, postMiddlewares = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      postMiddlewares[_key2] = arguments[_key2];
    }

    var middlewares = postMiddlewares.map(function (post) {
      return {
        post: post
      };
    });
    return this.withMiddleware.apply(this, middlewares);
  };

  _proto.request = /*#__PURE__*/function () {
    var _request = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(context) {
      var _this$createFetchPara, url, init, response;

      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this$createFetchPara = this.createFetchParams(context), url = _this$createFetchPara.url, init = _this$createFetchPara.init;
              _context2.next = 3;
              return this.fetchApi(url, init);

            case 3:
              response = _context2.sent;

              if (!(response.status >= 200 && response.status < 300)) {
                _context2.next = 6;
                break;
              }

              return _context2.abrupt("return", response);

            case 6:
              throw response;

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function request(_x3) {
      return _request.apply(this, arguments);
    }

    return request;
  }();

  _proto.createFetchParams = function createFetchParams(context) {
    var url = this.configuration.basePath + context.path;
    var body = typeof FormData !== 'undefined' && context.body instanceof FormData || context.body instanceof URLSearchParams || isBlob(context.body) ? context.body : JSON.stringify(context.body);
    var headers = Object.assign({}, this.configuration.headers, context.headers);
    var init = {
      method: context.method,
      headers: headers,
      body: body
    };
    return {
      url: url,
      init: init
    };
  }
  /**
   * Create a shallow clone of `this` by constructing a new instance
   * and then shallow cloning data members.
   */
  ;

  _proto.clone = function clone() {
    var constructor = this.constructor;
    var next = new constructor(this.configuration);
    next.middleware = this.middleware.slice();
    return next;
  };

  return BaseAPI;
}();
var RequiredError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(RequiredError, _Error);

  function RequiredError(field, msg) {
    var _this2;

    _this2 = _Error.call(this, msg) || this;
    _this2.field = field;
    _this2.name = 'RequiredError';
    return _this2;
  }

  return RequiredError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
var COLLECTION_FORMATS = {
  csv: ',',
  ssv: ' ',
  tsv: '\t',
  pipes: '|'
};
var Configuration = function Configuration(configuration) {
  this.configuration = configuration;
  this.basePath = this.configuration.basePath != null ? this.configuration.basePath : BASE_PATH;
  this.fetchApi = fetch;
  this.middleware = this.configuration.middleware || [];
  this.applicationId = this.configuration.applicationId;
  this.consumerId = this.configuration.consumerId;
  this.headers = this.configuration.headers;
  this.apiKey = this.configuration.apiKey || undefined;
};
function exists(json, key) {
  var value = json[key];
  return value !== null && value !== undefined;
}
function querystring(params, prefix) {
  if (prefix === void 0) {
    prefix = '';
  }

  return Object.keys(params).map(function (key) {
    var fullKey = prefix + (prefix.length ? "[" + key + "]" : key);
    var value = params[key];

    if (value instanceof Array) {
      var multiValue = value.map(function (singleValue) {
        return encodeURIComponent(String(singleValue));
      }).join("&" + encodeURIComponent(fullKey) + "=");
      return encodeURIComponent(fullKey) + "=" + multiValue;
    }

    if (value instanceof Date) {
      return encodeURIComponent(fullKey) + "=" + encodeURIComponent(value.toISOString());
    }

    if (value instanceof Object) {
      return querystring(value, fullKey);
    }

    return encodeURIComponent(fullKey) + "=" + encodeURIComponent(String(value));
  }).filter(function (part) {
    return part.length > 0;
  }).join('&');
}
function mapValues(data, fn) {
  return Object.keys(data).reduce(function (acc, key) {
    var _extends2;

    return _extends({}, acc, (_extends2 = {}, _extends2[key] = fn(data[key]), _extends2));
  }, {});
}
function canConsumeForm(consumes) {
  for (var _iterator3 = _createForOfIteratorHelperLoose(consumes), _step3; !(_step3 = _iterator3()).done;) {
    var consume = _step3.value;

    if ('multipart/form-data' === consume.contentType) {
      return true;
    }
  }

  return false;
}
var JSONApiResponse = /*#__PURE__*/function () {
  function JSONApiResponse(raw, transformer) {
    if (transformer === void 0) {
      transformer = function transformer(jsonValue) {
        return jsonValue;
      };
    }

    this.raw = raw;
    this.transformer = transformer;
  }

  var _proto2 = JSONApiResponse.prototype;

  _proto2.value = /*#__PURE__*/function () {
    var _value = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3() {
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.t0 = this;
              _context3.next = 3;
              return this.raw.json();

            case 3:
              _context3.t1 = _context3.sent;
              return _context3.abrupt("return", _context3.t0.transformer.call(_context3.t0, _context3.t1));

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function value() {
      return _value.apply(this, arguments);
    }

    return value;
  }();

  return JSONApiResponse;
}();
var VoidApiResponse = /*#__PURE__*/function () {
  function VoidApiResponse(raw) {
    this.raw = raw;
  }

  var _proto3 = VoidApiResponse.prototype;

  _proto3.value = /*#__PURE__*/function () {
    var _value2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4() {
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", undefined);

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function value() {
      return _value2.apply(this, arguments);
    }

    return value;
  }();

  return VoidApiResponse;
}();
var BlobApiResponse = /*#__PURE__*/function () {
  function BlobApiResponse(raw) {
    this.raw = raw;
  }

  var _proto4 = BlobApiResponse.prototype;

  _proto4.value = /*#__PURE__*/function () {
    var _value3 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5() {
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.raw.blob();

            case 2:
              return _context5.abrupt("return", _context5.sent);

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function value() {
      return _value3.apply(this, arguments);
    }

    return value;
  }();

  return BlobApiResponse;
}();
var TextApiResponse = /*#__PURE__*/function () {
  function TextApiResponse(raw) {
    this.raw = raw;
  }

  var _proto5 = TextApiResponse.prototype;

  _proto5.value = /*#__PURE__*/function () {
    var _value4 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6() {
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.raw.text();

            case 2:
              return _context6.abrupt("return", _context6.sent);

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function value() {
      return _value4.apply(this, arguments);
    }

    return value;
  }();

  return TextApiResponse;
}();

/* tslint:disable */

(function (AddressType) {
  AddressType["Default"] = "default";
  AddressType["Primary"] = "primary";
  AddressType["Secondary"] = "secondary";
  AddressType["Tertiary"] = "tertiary";
  AddressType["Invoicing"] = "invoicing";
  AddressType["Delivery"] = "delivery";
  AddressType["Visiting"] = "visiting";
  AddressType["Mailing"] = "mailing";
  AddressType["Home"] = "home";
  AddressType["Work"] = "work";
  AddressType["Other"] = "other";
})(exports.AddressType || (exports.AddressType = {}));

function AddressFromJSON(json) {
  return AddressFromJSONTyped(json);
}
function AddressFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    type: !exists(json, 'type') ? undefined : json['type'],
    name: !exists(json, 'name') ? undefined : json['name'],
    line1: !exists(json, 'line1') ? undefined : json['line1'],
    line2: !exists(json, 'line2') ? undefined : json['line2'],
    city: !exists(json, 'city') ? undefined : json['city'],
    state: !exists(json, 'state') ? undefined : json['state'],
    postalCode: !exists(json, 'postal_code') ? undefined : json['postal_code'],
    country: !exists(json, 'country') ? undefined : json['country'],
    latitude: !exists(json, 'latitude') ? undefined : json['latitude'],
    longitude: !exists(json, 'longitude') ? undefined : json['longitude']
  };
}
function AddressToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    id: value.id,
    type: value.type,
    name: value.name,
    line1: value.line1,
    line2: value.line2,
    city: value.city,
    state: value.state,
    postal_code: value.postalCode,
    country: value.country,
    latitude: value.latitude,
    longitude: value.longitude
  };
}

/* tslint:disable */
function BadRequestFromJSON(json) {
  return BadRequestFromJSONTyped(json);
}
function BadRequestFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    statusCode: !exists(json, 'status_code') ? undefined : json['status_code'],
    error: !exists(json, 'error') ? undefined : json['error'],
    typeName: !exists(json, 'typeName') ? undefined : json['typeName'],
    message: !exists(json, 'message') ? undefined : json['message'],
    detail: !exists(json, 'detail') ? undefined : json['detail'],
    ref: !exists(json, 'ref') ? undefined : json['ref']
  };
}
function BadRequestToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    status_code: value.statusCode,
    error: value.error,
    typeName: value.typeName,
    message: value.message,
    detail: value.detail,
    ref: value.ref
  };
}

/* tslint:disable */
function BankAccountFromJSON(json) {
  return BankAccountFromJSONTyped(json);
}
function BankAccountFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    iban: !exists(json, 'iban') ? undefined : json['iban'],
    bic: !exists(json, 'bic') ? undefined : json['bic']
  };
}
function BankAccountToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    iban: value.iban,
    bic: value.bic
  };
}

/* tslint:disable */
function CompanyFromJSON(json) {
  return CompanyFromJSONTyped(json);
}
function CompanyFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    interactionCount: !exists(json, 'interaction_count') ? undefined : json['interaction_count'],
    name: json['name'],
    ownerId: !exists(json, 'owner_id') ? undefined : json['owner_id'],
    imageUrl: !exists(json, 'image_url') ? undefined : json['image_url'],
    description: !exists(json, 'description') ? undefined : json['description'],
    vatNumber: !exists(json, 'vat_number') ? undefined : json['vat_number'],
    currency: !exists(json, 'currency') ? undefined : json['currency'],
    fax: !exists(json, 'fax') ? undefined : json['fax'],
    bankAccounts: !exists(json, 'bank_accounts') ? undefined : json['bank_accounts'].map(BankAccountFromJSON),
    websites: !exists(json, 'websites') ? undefined : json['websites'].map(WebsiteFromJSON),
    addresses: !exists(json, 'addresses') ? undefined : json['addresses'].map(AddressFromJSON),
    socialLinks: !exists(json, 'social_links') ? undefined : json['social_links'].map(SocialLinkFromJSON),
    phoneNumbers: !exists(json, 'phone_numbers') ? undefined : json['phone_numbers'].map(PhoneNumberFromJSON),
    emails: !exists(json, 'emails') ? undefined : json['emails'].map(EmailFromJSON),
    customFields: !exists(json, 'custom_fields') ? undefined : json['custom_fields'].map(CustomFieldFromJSON),
    tags: !exists(json, 'tags') ? undefined : json['tags'],
    updatedBy: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    createdBy: !exists(json, 'created_by') ? undefined : json['created_by'],
    updatedAt: !exists(json, 'updated_at') ? undefined : json['updated_at'],
    createdAt: !exists(json, 'created_at') ? undefined : json['created_at']
  };
}
function CompanyToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    name: value.name,
    owner_id: value.ownerId,
    image_url: value.imageUrl,
    description: value.description,
    vat_number: value.vatNumber,
    currency: value.currency,
    fax: value.fax,
    bank_accounts: value.bankAccounts === undefined ? undefined : value.bankAccounts.map(BankAccountToJSON),
    websites: value.websites === undefined ? undefined : value.websites.map(WebsiteToJSON),
    addresses: value.addresses === undefined ? undefined : value.addresses.map(AddressToJSON),
    social_links: value.socialLinks === undefined ? undefined : value.socialLinks.map(SocialLinkToJSON),
    phone_numbers: value.phoneNumbers === undefined ? undefined : value.phoneNumbers.map(PhoneNumberToJSON),
    emails: value.emails === undefined ? undefined : value.emails.map(EmailToJSON),
    custom_fields: value.customFields === undefined ? undefined : value.customFields.map(CustomFieldToJSON),
    tags: value.tags
  };
}

/* tslint:disable */

(function (ContactGender) {
  ContactGender["Male"] = "male";
  ContactGender["Female"] = "female";
  ContactGender["Unisex"] = "unisex";
})(exports.ContactGender || (exports.ContactGender = {}));

function ContactFromJSON(json) {
  return ContactFromJSONTyped(json);
}
function ContactFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    ownerId: !exists(json, 'owner_id') ? undefined : json['owner_id'],
    companyId: !exists(json, 'company_id') ? undefined : json['company_id'],
    leadId: !exists(json, 'lead_id') ? undefined : json['lead_id'],
    name: json['name'],
    firstName: !exists(json, 'first_name') ? undefined : json['first_name'],
    middleName: !exists(json, 'middle_name') ? undefined : json['middle_name'],
    lastName: !exists(json, 'last_name') ? undefined : json['last_name'],
    prefix: !exists(json, 'prefix') ? undefined : json['prefix'],
    suffix: !exists(json, 'suffix') ? undefined : json['suffix'],
    title: !exists(json, 'title') ? undefined : json['title'],
    department: !exists(json, 'department') ? undefined : json['department'],
    language: !exists(json, 'language') ? undefined : json['language'],
    gender: !exists(json, 'gender') ? undefined : json['gender'],
    birthday: !exists(json, 'birthday') ? undefined : json['birthday'],
    image: !exists(json, 'image') ? undefined : json['image'],
    leadSource: !exists(json, 'lead_source') ? undefined : json['lead_source'],
    fax: !exists(json, 'fax') ? undefined : json['fax'],
    description: !exists(json, 'description') ? undefined : json['description'],
    status: !exists(json, 'status') ? undefined : json['status'],
    websites: !exists(json, 'websites') ? undefined : json['websites'].map(WebsiteFromJSON),
    addresses: !exists(json, 'addresses') ? undefined : json['addresses'].map(AddressFromJSON),
    socialLinks: !exists(json, 'social_links') ? undefined : json['social_links'].map(SocialLinkFromJSON),
    phoneNumbers: !exists(json, 'phone_numbers') ? undefined : json['phone_numbers'].map(PhoneNumberFromJSON),
    emails: !exists(json, 'emails') ? undefined : json['emails'].map(EmailFromJSON),
    customFields: !exists(json, 'custom_fields') ? undefined : json['custom_fields'].map(CustomFieldFromJSON),
    tags: !exists(json, 'tags') ? undefined : json['tags'],
    updatedAt: !exists(json, 'updated_at') ? undefined : json['updated_at'],
    createdAt: !exists(json, 'created_at') ? undefined : json['created_at']
  };
}
function ContactToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    owner_id: value.ownerId,
    company_id: value.companyId,
    lead_id: value.leadId,
    name: value.name,
    first_name: value.firstName,
    middle_name: value.middleName,
    last_name: value.lastName,
    prefix: value.prefix,
    suffix: value.suffix,
    title: value.title,
    department: value.department,
    language: value.language,
    gender: value.gender,
    birthday: value.birthday,
    image: value.image,
    lead_source: value.leadSource,
    fax: value.fax,
    description: value.description,
    status: value.status,
    websites: value.websites === undefined ? undefined : value.websites.map(WebsiteToJSON),
    addresses: value.addresses === undefined ? undefined : value.addresses.map(AddressToJSON),
    social_links: value.socialLinks === undefined ? undefined : value.socialLinks.map(SocialLinkToJSON),
    phone_numbers: value.phoneNumbers === undefined ? undefined : value.phoneNumbers.map(PhoneNumberToJSON),
    emails: value.emails === undefined ? undefined : value.emails.map(EmailToJSON),
    custom_fields: value.customFields === undefined ? undefined : value.customFields.map(CustomFieldToJSON),
    tags: value.tags
  };
}

function CreateCompanyResponseFromJSON(json) {
  return CreateCompanyResponseFromJSONTyped(json);
}
function CreateCompanyResponseFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    statusCode: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: UnifiedIdFromJSON(json['data'])
  };
}
function CreateCompanyResponseToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    status_code: value.statusCode,
    status: value.status,
    service: value.service,
    resource: value.resource,
    operation: value.operation,
    data: UnifiedIdToJSON(value.data)
  };
}

function CreateContactResponseFromJSON(json) {
  return CreateContactResponseFromJSONTyped(json);
}
function CreateContactResponseFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    statusCode: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: UnifiedIdFromJSON(json['data'])
  };
}
function CreateContactResponseToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    status_code: value.statusCode,
    status: value.status,
    service: value.service,
    resource: value.resource,
    operation: value.operation,
    data: UnifiedIdToJSON(value.data)
  };
}

function CreateLeadResponseFromJSON(json) {
  return CreateLeadResponseFromJSONTyped(json);
}
function CreateLeadResponseFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    statusCode: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: UnifiedIdFromJSON(json['data'])
  };
}
function CreateLeadResponseToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    status_code: value.statusCode,
    status: value.status,
    service: value.service,
    resource: value.resource,
    operation: value.operation,
    data: UnifiedIdToJSON(value.data)
  };
}

function CreateOpportunityResponseFromJSON(json) {
  return CreateOpportunityResponseFromJSONTyped(json);
}
function CreateOpportunityResponseFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    statusCode: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: UnifiedIdFromJSON(json['data'])
  };
}
function CreateOpportunityResponseToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    status_code: value.statusCode,
    status: value.status,
    service: value.service,
    resource: value.resource,
    operation: value.operation,
    data: UnifiedIdToJSON(value.data)
  };
}

/* tslint:disable */
function CustomFieldFromJSON(json) {
  return CustomFieldFromJSONTyped(json);
}
function CustomFieldFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    id: json['id'],
    value: !exists(json, 'value') ? undefined : json['value']
  };
}
function CustomFieldToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    id: value.id,
    value: value.value
  };
}

function DeleteCompanyResponseFromJSON(json) {
  return DeleteCompanyResponseFromJSONTyped(json);
}
function DeleteCompanyResponseFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    statusCode: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: UnifiedIdFromJSON(json['data'])
  };
}
function DeleteCompanyResponseToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    status_code: value.statusCode,
    status: value.status,
    service: value.service,
    resource: value.resource,
    operation: value.operation,
    data: UnifiedIdToJSON(value.data)
  };
}

function DeleteContactResponseFromJSON(json) {
  return DeleteContactResponseFromJSONTyped(json);
}
function DeleteContactResponseFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    statusCode: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: UnifiedIdFromJSON(json['data'])
  };
}
function DeleteContactResponseToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    status_code: value.statusCode,
    status: value.status,
    service: value.service,
    resource: value.resource,
    operation: value.operation,
    data: UnifiedIdToJSON(value.data)
  };
}

function DeleteLeadResponseFromJSON(json) {
  return DeleteLeadResponseFromJSONTyped(json);
}
function DeleteLeadResponseFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    statusCode: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: UnifiedIdFromJSON(json['data'])
  };
}
function DeleteLeadResponseToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    status_code: value.statusCode,
    status: value.status,
    service: value.service,
    resource: value.resource,
    operation: value.operation,
    data: UnifiedIdToJSON(value.data)
  };
}

function DeleteOpportunityResponseFromJSON(json) {
  return DeleteOpportunityResponseFromJSONTyped(json);
}
function DeleteOpportunityResponseFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    statusCode: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: UnifiedIdFromJSON(json['data'])
  };
}
function DeleteOpportunityResponseToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    status_code: value.statusCode,
    status: value.status,
    service: value.service,
    resource: value.resource,
    operation: value.operation,
    data: UnifiedIdToJSON(value.data)
  };
}

/* tslint:disable */
function EmailFromJSON(json) {
  return EmailFromJSONTyped(json);
}
function EmailFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    email: json['email'],
    type: !exists(json, 'type') ? undefined : json['type']
  };
}
function EmailToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    id: value.id,
    email: value.email,
    type: value.type
  };
}

/* tslint:disable */
function GetCompaniesResponseFromJSON(json) {
  return GetCompaniesResponseFromJSONTyped(json);
}
function GetCompaniesResponseFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    statusCode: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: json['data'].map(CompanyFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  };
}
function GetCompaniesResponseToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    status_code: value.statusCode,
    status: value.status,
    service: value.service,
    resource: value.resource,
    operation: value.operation,
    data: value.data.map(CompanyToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  };
}

function GetCompanyResponseFromJSON(json) {
  return GetCompanyResponseFromJSONTyped(json);
}
function GetCompanyResponseFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    statusCode: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: CompanyFromJSON(json['data'])
  };
}
function GetCompanyResponseToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    status_code: value.statusCode,
    status: value.status,
    service: value.service,
    resource: value.resource,
    operation: value.operation,
    data: CompanyToJSON(value.data)
  };
}

function GetContactResponseFromJSON(json) {
  return GetContactResponseFromJSONTyped(json);
}
function GetContactResponseFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    statusCode: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: ContactFromJSON(json['data'])
  };
}
function GetContactResponseToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    status_code: value.statusCode,
    status: value.status,
    service: value.service,
    resource: value.resource,
    operation: value.operation,
    data: ContactToJSON(value.data)
  };
}

/* tslint:disable */
function GetContactsResponseFromJSON(json) {
  return GetContactsResponseFromJSONTyped(json);
}
function GetContactsResponseFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    statusCode: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: json['data'].map(ContactFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  };
}
function GetContactsResponseToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    status_code: value.statusCode,
    status: value.status,
    service: value.service,
    resource: value.resource,
    operation: value.operation,
    data: value.data.map(ContactToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  };
}

function GetLeadResponseFromJSON(json) {
  return GetLeadResponseFromJSONTyped(json);
}
function GetLeadResponseFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    statusCode: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: LeadFromJSON(json['data'])
  };
}
function GetLeadResponseToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    status_code: value.statusCode,
    status: value.status,
    service: value.service,
    resource: value.resource,
    operation: value.operation,
    data: LeadToJSON(value.data)
  };
}

/* tslint:disable */
function GetLeadsResponseFromJSON(json) {
  return GetLeadsResponseFromJSONTyped(json);
}
function GetLeadsResponseFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    statusCode: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: json['data'].map(LeadFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  };
}
function GetLeadsResponseToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    status_code: value.statusCode,
    status: value.status,
    service: value.service,
    resource: value.resource,
    operation: value.operation,
    data: value.data.map(LeadToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  };
}

/* tslint:disable */
function GetOpportunitiesResponseFromJSON(json) {
  return GetOpportunitiesResponseFromJSONTyped(json);
}
function GetOpportunitiesResponseFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    statusCode: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: json['data'].map(OpportunityFromJSON),
    meta: !exists(json, 'meta') ? undefined : MetaFromJSON(json['meta']),
    links: !exists(json, 'links') ? undefined : LinksFromJSON(json['links'])
  };
}
function GetOpportunitiesResponseToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    status_code: value.statusCode,
    status: value.status,
    service: value.service,
    resource: value.resource,
    operation: value.operation,
    data: value.data.map(OpportunityToJSON),
    meta: MetaToJSON(value.meta),
    links: LinksToJSON(value.links)
  };
}

function GetOpportunityResponseFromJSON(json) {
  return GetOpportunityResponseFromJSONTyped(json);
}
function GetOpportunityResponseFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    statusCode: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: OpportunityFromJSON(json['data'])
  };
}
function GetOpportunityResponseToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    status_code: value.statusCode,
    status: value.status,
    service: value.service,
    resource: value.resource,
    operation: value.operation,
    data: OpportunityToJSON(value.data)
  };
}

/* tslint:disable */
function LeadFromJSON(json) {
  return LeadFromJSONTyped(json);
}
function LeadFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    ownerId: !exists(json, 'owner_id') ? undefined : json['owner_id'],
    companyId: !exists(json, 'company_id') ? undefined : json['company_id'],
    companyName: json['company_name'],
    name: json['name'],
    firstName: !exists(json, 'first_name') ? undefined : json['first_name'],
    lastName: !exists(json, 'last_name') ? undefined : json['last_name'],
    description: !exists(json, 'description') ? undefined : json['description'],
    prefix: !exists(json, 'prefix') ? undefined : json['prefix'],
    title: !exists(json, 'title') ? undefined : json['title'],
    status: !exists(json, 'status') ? undefined : json['status'],
    fax: !exists(json, 'fax') ? undefined : json['fax'],
    websites: !exists(json, 'websites') ? undefined : json['websites'].map(WebsiteFromJSON),
    addresses: !exists(json, 'addresses') ? undefined : json['addresses'].map(AddressFromJSON),
    socialLinks: !exists(json, 'social_links') ? undefined : json['social_links'].map(SocialLinkFromJSON),
    phoneNumbers: !exists(json, 'phone_numbers') ? undefined : json['phone_numbers'].map(PhoneNumberFromJSON),
    emails: !exists(json, 'emails') ? undefined : json['emails'].map(EmailFromJSON),
    customFields: !exists(json, 'custom_fields') ? undefined : json['custom_fields'].map(CustomFieldFromJSON),
    tags: !exists(json, 'tags') ? undefined : json['tags'],
    updatedAt: !exists(json, 'updated_at') ? undefined : json['updated_at'],
    createdAt: !exists(json, 'created_at') ? undefined : json['created_at']
  };
}
function LeadToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    owner_id: value.ownerId,
    company_id: value.companyId,
    company_name: value.companyName,
    name: value.name,
    first_name: value.firstName,
    last_name: value.lastName,
    description: value.description,
    prefix: value.prefix,
    title: value.title,
    status: value.status,
    fax: value.fax,
    websites: value.websites === undefined ? undefined : value.websites.map(WebsiteToJSON),
    addresses: value.addresses === undefined ? undefined : value.addresses.map(AddressToJSON),
    social_links: value.socialLinks === undefined ? undefined : value.socialLinks.map(SocialLinkToJSON),
    phone_numbers: value.phoneNumbers === undefined ? undefined : value.phoneNumbers.map(PhoneNumberToJSON),
    emails: value.emails === undefined ? undefined : value.emails.map(EmailToJSON),
    custom_fields: value.customFields === undefined ? undefined : value.customFields.map(CustomFieldToJSON),
    tags: value.tags
  };
}

/* tslint:disable */
function LinksFromJSON(json) {
  return LinksFromJSONTyped(json);
}
function LinksFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    previous: !exists(json, 'previous') ? undefined : json['previous'],
    current: !exists(json, 'current') ? undefined : json['current'],
    next: !exists(json, 'next') ? undefined : json['next']
  };
}
function LinksToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    previous: value.previous,
    current: value.current,
    next: value.next
  };
}

/* tslint:disable */
function MetaFromJSON(json) {
  return MetaFromJSONTyped(json);
}
function MetaFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    itemsOnPage: !exists(json, 'items_on_page') ? undefined : json['items_on_page'],
    cursors: !exists(json, 'cursors') ? undefined : MetaCursorsFromJSON(json['cursors'])
  };
}
function MetaToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    items_on_page: value.itemsOnPage,
    cursors: MetaCursorsToJSON(value.cursors)
  };
}

/* tslint:disable */
function MetaCursorsFromJSON(json) {
  return MetaCursorsFromJSONTyped(json);
}
function MetaCursorsFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    previous: !exists(json, 'previous') ? undefined : json['previous'],
    current: !exists(json, 'current') ? undefined : json['current'],
    next: !exists(json, 'next') ? undefined : json['next']
  };
}
function MetaCursorsToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    previous: value.previous,
    current: value.current,
    next: value.next
  };
}

/* tslint:disable */
function NotFoundResponseFromJSON(json) {
  return NotFoundResponseFromJSONTyped(json);
}
function NotFoundResponseFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    statusCode: !exists(json, 'status_code') ? undefined : json['status_code'],
    error: !exists(json, 'error') ? undefined : json['error'],
    typeName: !exists(json, 'typeName') ? undefined : json['typeName'],
    message: !exists(json, 'message') ? undefined : json['message'],
    detail: !exists(json, 'detail') ? undefined : json['detail'],
    ref: !exists(json, 'ref') ? undefined : json['ref']
  };
}
function NotFoundResponseToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    status_code: value.statusCode,
    error: value.error,
    typeName: value.typeName,
    message: value.message,
    detail: value.detail,
    ref: value.ref
  };
}

/* tslint:disable */
function NotImplementedFromJSON(json) {
  return NotImplementedFromJSONTyped(json);
}
function NotImplementedFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    statusCode: !exists(json, 'status_code') ? undefined : json['status_code'],
    error: !exists(json, 'error') ? undefined : json['error'],
    typeName: !exists(json, 'typeName') ? undefined : json['typeName'],
    message: !exists(json, 'message') ? undefined : json['message'],
    detail: !exists(json, 'detail') ? undefined : json['detail'],
    ref: !exists(json, 'ref') ? undefined : json['ref']
  };
}
function NotImplementedToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    status_code: value.statusCode,
    error: value.error,
    typeName: value.typeName,
    message: value.message,
    detail: value.detail,
    ref: value.ref
  };
}

/* tslint:disable */
function OpportunityFromJSON(json) {
  return OpportunityFromJSONTyped(json);
}
function OpportunityFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    title: json['title'],
    description: !exists(json, 'description') ? undefined : json['description'],
    monetaryAmount: !exists(json, 'monetary_amount') ? undefined : json['monetary_amount'],
    currency: !exists(json, 'currency') ? undefined : json['currency'],
    winProbability: !exists(json, 'win_probability') ? undefined : json['win_probability'],
    closeDate: !exists(json, 'close_date') ? undefined : json['close_date'] === null ? null : new Date(json['close_date']),
    lossReasonId: !exists(json, 'loss_reason_id') ? undefined : json['loss_reason_id'],
    pipelineId: !exists(json, 'pipeline_id') ? undefined : json['pipeline_id'],
    pipelineStageId: !exists(json, 'pipeline_stage_id') ? undefined : json['pipeline_stage_id'],
    sourceId: !exists(json, 'source_id') ? undefined : json['source_id'],
    primaryContactId: json['primary_contact_id'],
    leadId: !exists(json, 'lead_id') ? undefined : json['lead_id'],
    contactId: !exists(json, 'contact_id') ? undefined : json['contact_id'],
    companyId: !exists(json, 'company_id') ? undefined : json['company_id'],
    companyName: !exists(json, 'company_name') ? undefined : json['company_name'],
    ownerId: !exists(json, 'owner_id') ? undefined : json['owner_id'],
    priority: !exists(json, 'priority') ? undefined : json['priority'],
    status: !exists(json, 'status') ? undefined : json['status'],
    statusId: !exists(json, 'status_id') ? undefined : json['status_id'],
    tags: !exists(json, 'tags') ? undefined : json['tags'],
    interactionCount: !exists(json, 'interaction_count') ? undefined : json['interaction_count'],
    customFields: !exists(json, 'custom_fields') ? undefined : json['custom_fields'].map(CustomFieldFromJSON),
    dateStageChanged: !exists(json, 'date_stage_changed') ? undefined : json['date_stage_changed'] === null ? null : new Date(json['date_stage_changed']),
    dateLastContacted: !exists(json, 'date_last_contacted') ? undefined : json['date_last_contacted'] === null ? null : new Date(json['date_last_contacted']),
    dateLeadCreated: !exists(json, 'date_lead_created') ? undefined : json['date_lead_created'] === null ? null : new Date(json['date_lead_created']),
    updatedBy: !exists(json, 'updated_by') ? undefined : json['updated_by'],
    createdBy: !exists(json, 'created_by') ? undefined : json['created_by'],
    updatedAt: !exists(json, 'updated_at') ? undefined : new Date(json['updated_at']),
    createdAt: !exists(json, 'created_at') ? undefined : new Date(json['created_at'])
  };
}
function OpportunityToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    title: value.title,
    description: value.description,
    monetary_amount: value.monetaryAmount,
    currency: value.currency,
    win_probability: value.winProbability,
    close_date: value.closeDate === undefined ? undefined : value.closeDate === null ? null : value.closeDate.toISOString().substr(0, 10),
    loss_reason_id: value.lossReasonId,
    pipeline_id: value.pipelineId,
    pipeline_stage_id: value.pipelineStageId,
    source_id: value.sourceId,
    primary_contact_id: value.primaryContactId,
    lead_id: value.leadId,
    contact_id: value.contactId,
    company_id: value.companyId,
    company_name: value.companyName,
    owner_id: value.ownerId,
    priority: value.priority,
    status: value.status,
    status_id: value.statusId,
    tags: value.tags,
    custom_fields: value.customFields === undefined ? undefined : value.customFields.map(CustomFieldToJSON)
  };
}

/* tslint:disable */
function PaymentRequiredFromJSON(json) {
  return PaymentRequiredFromJSONTyped(json);
}
function PaymentRequiredFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    statusCode: !exists(json, 'status_code') ? undefined : json['status_code'],
    error: !exists(json, 'error') ? undefined : json['error'],
    typeName: !exists(json, 'typeName') ? undefined : json['typeName'],
    message: !exists(json, 'message') ? undefined : json['message'],
    detail: !exists(json, 'detail') ? undefined : json['detail'],
    ref: !exists(json, 'ref') ? undefined : json['ref']
  };
}
function PaymentRequiredToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    status_code: value.statusCode,
    error: value.error,
    typeName: value.typeName,
    message: value.message,
    detail: value.detail,
    ref: value.ref
  };
}

/* tslint:disable */

(function (PhoneNumberType) {
  PhoneNumberType["Default"] = "default";
  PhoneNumberType["Phone"] = "phone";
  PhoneNumberType["Mobile"] = "mobile";
  PhoneNumberType["Work"] = "work";
  PhoneNumberType["Office"] = "office";
  PhoneNumberType["Home"] = "home";
  PhoneNumberType["Fax"] = "fax";
  PhoneNumberType["Assistant"] = "assistant";
  PhoneNumberType["Other"] = "other";
})(exports.PhoneNumberType || (exports.PhoneNumberType = {}));

function PhoneNumberFromJSON(json) {
  return PhoneNumberFromJSONTyped(json);
}
function PhoneNumberFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    number: json['number'],
    type: !exists(json, 'type') ? undefined : json['type']
  };
}
function PhoneNumberToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    id: value.id,
    number: value.number,
    type: value.type
  };
}

/* tslint:disable */
function SocialLinkFromJSON(json) {
  return SocialLinkFromJSONTyped(json);
}
function SocialLinkFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    url: json['url'],
    platform: !exists(json, 'platform') ? undefined : json['platform']
  };
}
function SocialLinkToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    id: value.id,
    url: value.url,
    platform: value.platform
  };
}

/* tslint:disable */
function UnauthorizedFromJSON(json) {
  return UnauthorizedFromJSONTyped(json);
}
function UnauthorizedFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    statusCode: !exists(json, 'status_code') ? undefined : json['status_code'],
    error: !exists(json, 'error') ? undefined : json['error'],
    typeName: !exists(json, 'typeName') ? undefined : json['typeName'],
    message: !exists(json, 'message') ? undefined : json['message'],
    detail: !exists(json, 'detail') ? undefined : json['detail'],
    ref: !exists(json, 'ref') ? undefined : json['ref']
  };
}
function UnauthorizedToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    status_code: value.statusCode,
    error: value.error,
    typeName: value.typeName,
    message: value.message,
    detail: value.detail,
    ref: value.ref
  };
}

/* tslint:disable */
function UnexpectedErrorFromJSON(json) {
  return UnexpectedErrorFromJSONTyped(json);
}
function UnexpectedErrorFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    statusCode: !exists(json, 'status_code') ? undefined : json['status_code'],
    error: !exists(json, 'error') ? undefined : json['error'],
    typeName: !exists(json, 'typeName') ? undefined : json['typeName'],
    message: !exists(json, 'message') ? undefined : json['message'],
    detail: !exists(json, 'detail') ? undefined : json['detail'],
    ref: !exists(json, 'ref') ? undefined : json['ref']
  };
}
function UnexpectedErrorToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  if (value === null) {
    return null;
  }

  return {
    status_code: value.statusCode,
    error: value.error,
    typeName: value.typeName,
    message: value.message,
    detail: value.detail,
    ref: value.ref
  };
}

function UnifiedIdFromJSON(json) {
  return UnifiedIdFromJSONTyped(json);
}
function UnifiedIdFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    id: json['id']
  };
}
function UnifiedIdToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {};
}

/* tslint:disable */
function UnprocessableFromJSON(json) {
  return UnprocessableFromJSONTyped(json);
}
function UnprocessableFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    statusCode: !exists(json, 'status_code') ? undefined : json['status_code'],
    error: !exists(json, 'error') ? undefined : json['error'],
    typeName: !exists(json, 'typeName') ? undefined : json['typeName'],
    message: !exists(json, 'message') ? undefined : json['message'],
    detail: !exists(json, 'detail') ? undefined : json['detail'],
    ref: !exists(json, 'ref') ? undefined : json['ref']
  };
}
function UnprocessableToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    status_code: value.statusCode,
    error: value.error,
    typeName: value.typeName,
    message: value.message,
    detail: value.detail,
    ref: value.ref
  };
}

function UpdateCompanyResponseFromJSON(json) {
  return UpdateCompanyResponseFromJSONTyped(json);
}
function UpdateCompanyResponseFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    statusCode: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: UnifiedIdFromJSON(json['data'])
  };
}
function UpdateCompanyResponseToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    status_code: value.statusCode,
    status: value.status,
    service: value.service,
    resource: value.resource,
    operation: value.operation,
    data: UnifiedIdToJSON(value.data)
  };
}

function UpdateContactResponseFromJSON(json) {
  return UpdateContactResponseFromJSONTyped(json);
}
function UpdateContactResponseFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    statusCode: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: UnifiedIdFromJSON(json['data'])
  };
}
function UpdateContactResponseToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    status_code: value.statusCode,
    status: value.status,
    service: value.service,
    resource: value.resource,
    operation: value.operation,
    data: UnifiedIdToJSON(value.data)
  };
}

function UpdateLeadResponseFromJSON(json) {
  return UpdateLeadResponseFromJSONTyped(json);
}
function UpdateLeadResponseFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    statusCode: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: UnifiedIdFromJSON(json['data'])
  };
}
function UpdateLeadResponseToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    status_code: value.statusCode,
    status: value.status,
    service: value.service,
    resource: value.resource,
    operation: value.operation,
    data: UnifiedIdToJSON(value.data)
  };
}

function UpdateOpportunityResponseFromJSON(json) {
  return UpdateOpportunityResponseFromJSONTyped(json);
}
function UpdateOpportunityResponseFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    statusCode: json['status_code'],
    status: json['status'],
    service: json['service'],
    resource: json['resource'],
    operation: json['operation'],
    data: UnifiedIdFromJSON(json['data'])
  };
}
function UpdateOpportunityResponseToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    status_code: value.statusCode,
    status: value.status,
    service: value.service,
    resource: value.resource,
    operation: value.operation,
    data: UnifiedIdToJSON(value.data)
  };
}

/* tslint:disable */
function WebsiteFromJSON(json) {
  return WebsiteFromJSONTyped(json);
}
function WebsiteFromJSONTyped(json, ignoreDiscriminator) {
  if (json === undefined || json === null) {
    return json;
  }

  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    url: json['url'],
    category: !exists(json, 'category') ? undefined : json['category']
  };
}
function WebsiteToJSON(value) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  return {
    id: value.id,
    url: value.url,
    category: value.category
  };
}

/**
 *
 */

var CompaniesApi = /*#__PURE__*/function (_runtime$BaseAPI) {
  _inheritsLoose(CompaniesApi, _runtime$BaseAPI);

  function CompaniesApi() {
    return _runtime$BaseAPI.apply(this, arguments) || this;
  }

  var _proto = CompaniesApi.prototype;

  /**
   * Create company
   * Create company
   */
  _proto.companiesAddRaw =
  /*#__PURE__*/
  function () {
    var _companiesAddRaw = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(requestParameters) {
      var queryParameters, headerParameters, response;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(requestParameters.company === null || requestParameters.company === undefined)) {
                _context.next = 2;
                break;
              }

              throw new RequiredError('company', 'Required parameter requestParameters.company was null or undefined when calling companiesAdd.');

            case 2:
              queryParameters = {};

              if (requestParameters.raw !== undefined) {
                queryParameters['raw'] = requestParameters.raw;
              }

              headerParameters = {};
              headerParameters['Content-Type'] = 'application/json';

              if (requestParameters.xApideckConsumerId !== undefined && requestParameters.xApideckConsumerId !== null) {
                headerParameters['x-apideck-consumer-id'] = String(requestParameters.xApideckConsumerId);
              }

              if (requestParameters.xApideckAppId !== undefined && requestParameters.xApideckAppId !== null) {
                headerParameters['x-apideck-app-id'] = String(requestParameters.xApideckAppId);
              }

              if (requestParameters.xApideckServiceId !== undefined && requestParameters.xApideckServiceId !== null) {
                headerParameters['x-apideck-service-id'] = String(requestParameters.xApideckServiceId);
              }

              if (this.configuration && this.configuration.apiKey) {
                headerParameters['Authorization'] = "Bearer " + this.configuration.apiKey;
              }

              if (this.configuration && this.configuration.applicationId) {
                headerParameters['x-apideck-app-id'] = this.configuration.applicationId;
              }

              if (this.configuration && this.configuration.consumerId) {
                headerParameters['x-apideck-consumer-id'] = this.configuration.consumerId;
              }

              _context.next = 14;
              return this.request({
                path: "/crm/companies",
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: CompanyToJSON(requestParameters.company)
              });

            case 14:
              response = _context.sent;
              return _context.abrupt("return", new JSONApiResponse(response, function (jsonValue) {
                return CreateCompanyResponseFromJSON(jsonValue);
              }));

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function companiesAddRaw(_x) {
      return _companiesAddRaw.apply(this, arguments);
    }

    return companiesAddRaw;
  }()
  /**
   * Create company
   * Create company
   */
  ;

  _proto.companiesAdd =
  /*#__PURE__*/
  function () {
    var _companiesAdd = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(requestParameters) {
      var response;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.companiesAddRaw(requestParameters);

            case 2:
              response = _context2.sent;
              _context2.next = 5;
              return response.value();

            case 5:
              return _context2.abrupt("return", _context2.sent);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function companiesAdd(_x2) {
      return _companiesAdd.apply(this, arguments);
    }

    return companiesAdd;
  }()
  /**
   * List companies
   * List companies
   */
  ;

  _proto.companiesAllRaw =
  /*#__PURE__*/
  function () {
    var _companiesAllRaw = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(requestParameters) {
      var queryParameters, headerParameters, response;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              queryParameters = {};

              if (requestParameters.raw !== undefined) {
                queryParameters['raw'] = requestParameters.raw;
              }

              if (requestParameters.cursor !== undefined) {
                queryParameters['cursor'] = requestParameters.cursor;
              }

              if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
              }

              headerParameters = {};

              if (requestParameters.xApideckConsumerId !== undefined && requestParameters.xApideckConsumerId !== null) {
                headerParameters['x-apideck-consumer-id'] = String(requestParameters.xApideckConsumerId);
              }

              if (requestParameters.xApideckAppId !== undefined && requestParameters.xApideckAppId !== null) {
                headerParameters['x-apideck-app-id'] = String(requestParameters.xApideckAppId);
              }

              if (requestParameters.xApideckServiceId !== undefined && requestParameters.xApideckServiceId !== null) {
                headerParameters['x-apideck-service-id'] = String(requestParameters.xApideckServiceId);
              }

              if (this.configuration && this.configuration.apiKey) {
                headerParameters['Authorization'] = "Bearer " + this.configuration.apiKey;
              }

              if (this.configuration && this.configuration.applicationId) {
                headerParameters['x-apideck-app-id'] = this.configuration.applicationId;
              }

              if (this.configuration && this.configuration.consumerId) {
                headerParameters['x-apideck-consumer-id'] = this.configuration.consumerId;
              }

              _context3.next = 13;
              return this.request({
                path: "/crm/companies",
                method: 'GET',
                headers: headerParameters,
                query: queryParameters
              });

            case 13:
              response = _context3.sent;
              return _context3.abrupt("return", new JSONApiResponse(response, function (jsonValue) {
                return GetCompaniesResponseFromJSON(jsonValue);
              }));

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function companiesAllRaw(_x3) {
      return _companiesAllRaw.apply(this, arguments);
    }

    return companiesAllRaw;
  }()
  /**
   * List companies
   * List companies
   */
  ;

  _proto.companiesAll =
  /*#__PURE__*/
  function () {
    var _companiesAll = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(requestParameters) {
      var response;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.companiesAllRaw(requestParameters);

            case 2:
              response = _context4.sent;
              _context4.next = 5;
              return response.value();

            case 5:
              return _context4.abrupt("return", _context4.sent);

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function companiesAll(_x4) {
      return _companiesAll.apply(this, arguments);
    }

    return companiesAll;
  }()
  /**
   * Delete company
   * Delete company
   */
  ;

  _proto.companiesDeleteRaw =
  /*#__PURE__*/
  function () {
    var _companiesDeleteRaw = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(requestParameters) {
      var queryParameters, headerParameters, response;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!(requestParameters.id === null || requestParameters.id === undefined)) {
                _context5.next = 2;
                break;
              }

              throw new RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling companiesDelete.');

            case 2:
              queryParameters = {};

              if (requestParameters.raw !== undefined) {
                queryParameters['raw'] = requestParameters.raw;
              }

              headerParameters = {};

              if (requestParameters.xApideckConsumerId !== undefined && requestParameters.xApideckConsumerId !== null) {
                headerParameters['x-apideck-consumer-id'] = String(requestParameters.xApideckConsumerId);
              }

              if (requestParameters.xApideckAppId !== undefined && requestParameters.xApideckAppId !== null) {
                headerParameters['x-apideck-app-id'] = String(requestParameters.xApideckAppId);
              }

              if (requestParameters.xApideckServiceId !== undefined && requestParameters.xApideckServiceId !== null) {
                headerParameters['x-apideck-service-id'] = String(requestParameters.xApideckServiceId);
              }

              if (this.configuration && this.configuration.apiKey) {
                headerParameters['Authorization'] = "Bearer " + this.configuration.apiKey;
              }

              if (this.configuration && this.configuration.applicationId) {
                headerParameters['x-apideck-app-id'] = this.configuration.applicationId;
              }

              if (this.configuration && this.configuration.consumerId) {
                headerParameters['x-apideck-consumer-id'] = this.configuration.consumerId;
              }

              _context5.next = 13;
              return this.request({
                path: "/crm/companies/{id}".replace("{" + 'id' + "}", encodeURIComponent(String(requestParameters.id))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters
              });

            case 13:
              response = _context5.sent;
              return _context5.abrupt("return", new JSONApiResponse(response, function (jsonValue) {
                return DeleteCompanyResponseFromJSON(jsonValue);
              }));

            case 15:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function companiesDeleteRaw(_x5) {
      return _companiesDeleteRaw.apply(this, arguments);
    }

    return companiesDeleteRaw;
  }()
  /**
   * Delete company
   * Delete company
   */
  ;

  _proto.companiesDelete =
  /*#__PURE__*/
  function () {
    var _companiesDelete = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(requestParameters) {
      var response;
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.companiesDeleteRaw(requestParameters);

            case 2:
              response = _context6.sent;
              _context6.next = 5;
              return response.value();

            case 5:
              return _context6.abrupt("return", _context6.sent);

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function companiesDelete(_x6) {
      return _companiesDelete.apply(this, arguments);
    }

    return companiesDelete;
  }()
  /**
   * Get company
   * Get company
   */
  ;

  _proto.companiesOneRaw =
  /*#__PURE__*/
  function () {
    var _companiesOneRaw = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(requestParameters) {
      var queryParameters, headerParameters, response;
      return runtime_1.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (!(requestParameters.id === null || requestParameters.id === undefined)) {
                _context7.next = 2;
                break;
              }

              throw new RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling companiesOne.');

            case 2:
              queryParameters = {};

              if (requestParameters.raw !== undefined) {
                queryParameters['raw'] = requestParameters.raw;
              }

              headerParameters = {};

              if (requestParameters.xApideckConsumerId !== undefined && requestParameters.xApideckConsumerId !== null) {
                headerParameters['x-apideck-consumer-id'] = String(requestParameters.xApideckConsumerId);
              }

              if (requestParameters.xApideckAppId !== undefined && requestParameters.xApideckAppId !== null) {
                headerParameters['x-apideck-app-id'] = String(requestParameters.xApideckAppId);
              }

              if (requestParameters.xApideckServiceId !== undefined && requestParameters.xApideckServiceId !== null) {
                headerParameters['x-apideck-service-id'] = String(requestParameters.xApideckServiceId);
              }

              if (this.configuration && this.configuration.apiKey) {
                headerParameters['Authorization'] = "Bearer " + this.configuration.apiKey;
              }

              if (this.configuration && this.configuration.applicationId) {
                headerParameters['x-apideck-app-id'] = this.configuration.applicationId;
              }

              if (this.configuration && this.configuration.consumerId) {
                headerParameters['x-apideck-consumer-id'] = this.configuration.consumerId;
              }

              _context7.next = 13;
              return this.request({
                path: "/crm/companies/{id}".replace("{" + 'id' + "}", encodeURIComponent(String(requestParameters.id))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters
              });

            case 13:
              response = _context7.sent;
              return _context7.abrupt("return", new JSONApiResponse(response, function (jsonValue) {
                return GetCompanyResponseFromJSON(jsonValue);
              }));

            case 15:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function companiesOneRaw(_x7) {
      return _companiesOneRaw.apply(this, arguments);
    }

    return companiesOneRaw;
  }()
  /**
   * Get company
   * Get company
   */
  ;

  _proto.companiesOne =
  /*#__PURE__*/
  function () {
    var _companiesOne = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee8(requestParameters) {
      var response;
      return runtime_1.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return this.companiesOneRaw(requestParameters);

            case 2:
              response = _context8.sent;
              _context8.next = 5;
              return response.value();

            case 5:
              return _context8.abrupt("return", _context8.sent);

            case 6:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function companiesOne(_x8) {
      return _companiesOne.apply(this, arguments);
    }

    return companiesOne;
  }()
  /**
   * Update company
   * Update company
   */
  ;

  _proto.companiesUpdateRaw =
  /*#__PURE__*/
  function () {
    var _companiesUpdateRaw = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee9(requestParameters) {
      var queryParameters, headerParameters, response;
      return runtime_1.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              if (!(requestParameters.id === null || requestParameters.id === undefined)) {
                _context9.next = 2;
                break;
              }

              throw new RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling companiesUpdate.');

            case 2:
              if (!(requestParameters.company === null || requestParameters.company === undefined)) {
                _context9.next = 4;
                break;
              }

              throw new RequiredError('company', 'Required parameter requestParameters.company was null or undefined when calling companiesUpdate.');

            case 4:
              queryParameters = {};

              if (requestParameters.raw !== undefined) {
                queryParameters['raw'] = requestParameters.raw;
              }

              headerParameters = {};
              headerParameters['Content-Type'] = 'application/json';

              if (requestParameters.xApideckConsumerId !== undefined && requestParameters.xApideckConsumerId !== null) {
                headerParameters['x-apideck-consumer-id'] = String(requestParameters.xApideckConsumerId);
              }

              if (requestParameters.xApideckAppId !== undefined && requestParameters.xApideckAppId !== null) {
                headerParameters['x-apideck-app-id'] = String(requestParameters.xApideckAppId);
              }

              if (requestParameters.xApideckServiceId !== undefined && requestParameters.xApideckServiceId !== null) {
                headerParameters['x-apideck-service-id'] = String(requestParameters.xApideckServiceId);
              }

              if (this.configuration && this.configuration.apiKey) {
                headerParameters['Authorization'] = "Bearer " + this.configuration.apiKey;
              }

              if (this.configuration && this.configuration.applicationId) {
                headerParameters['x-apideck-app-id'] = this.configuration.applicationId;
              }

              if (this.configuration && this.configuration.consumerId) {
                headerParameters['x-apideck-consumer-id'] = this.configuration.consumerId;
              }

              _context9.next = 16;
              return this.request({
                path: "/crm/companies/{id}".replace("{" + 'id' + "}", encodeURIComponent(String(requestParameters.id))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
                body: CompanyToJSON(requestParameters.company)
              });

            case 16:
              response = _context9.sent;
              return _context9.abrupt("return", new JSONApiResponse(response, function (jsonValue) {
                return UpdateCompanyResponseFromJSON(jsonValue);
              }));

            case 18:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    function companiesUpdateRaw(_x9) {
      return _companiesUpdateRaw.apply(this, arguments);
    }

    return companiesUpdateRaw;
  }()
  /**
   * Update company
   * Update company
   */
  ;

  _proto.companiesUpdate =
  /*#__PURE__*/
  function () {
    var _companiesUpdate = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee10(requestParameters) {
      var response;
      return runtime_1.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return this.companiesUpdateRaw(requestParameters);

            case 2:
              response = _context10.sent;
              _context10.next = 5;
              return response.value();

            case 5:
              return _context10.abrupt("return", _context10.sent);

            case 6:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    function companiesUpdate(_x10) {
      return _companiesUpdate.apply(this, arguments);
    }

    return companiesUpdate;
  }();

  return CompaniesApi;
}(BaseAPI);

/**
 *
 */

var ContactsApi = /*#__PURE__*/function (_runtime$BaseAPI) {
  _inheritsLoose(ContactsApi, _runtime$BaseAPI);

  function ContactsApi() {
    return _runtime$BaseAPI.apply(this, arguments) || this;
  }

  var _proto = ContactsApi.prototype;

  /**
   * Create contact
   * Create contact
   */
  _proto.contactsAddRaw =
  /*#__PURE__*/
  function () {
    var _contactsAddRaw = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(requestParameters) {
      var queryParameters, headerParameters, response;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(requestParameters.contact === null || requestParameters.contact === undefined)) {
                _context.next = 2;
                break;
              }

              throw new RequiredError('contact', 'Required parameter requestParameters.contact was null or undefined when calling contactsAdd.');

            case 2:
              queryParameters = {};

              if (requestParameters.raw !== undefined) {
                queryParameters['raw'] = requestParameters.raw;
              }

              headerParameters = {};
              headerParameters['Content-Type'] = 'application/json';

              if (requestParameters.xApideckConsumerId !== undefined && requestParameters.xApideckConsumerId !== null) {
                headerParameters['x-apideck-consumer-id'] = String(requestParameters.xApideckConsumerId);
              }

              if (requestParameters.xApideckAppId !== undefined && requestParameters.xApideckAppId !== null) {
                headerParameters['x-apideck-app-id'] = String(requestParameters.xApideckAppId);
              }

              if (requestParameters.xApideckServiceId !== undefined && requestParameters.xApideckServiceId !== null) {
                headerParameters['x-apideck-service-id'] = String(requestParameters.xApideckServiceId);
              }

              if (this.configuration && this.configuration.apiKey) {
                headerParameters['Authorization'] = "Bearer " + this.configuration.apiKey;
              }

              if (this.configuration && this.configuration.applicationId) {
                headerParameters['x-apideck-app-id'] = this.configuration.applicationId;
              }

              if (this.configuration && this.configuration.consumerId) {
                headerParameters['x-apideck-consumer-id'] = this.configuration.consumerId;
              }

              _context.next = 14;
              return this.request({
                path: "/crm/contacts",
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ContactToJSON(requestParameters.contact)
              });

            case 14:
              response = _context.sent;
              return _context.abrupt("return", new JSONApiResponse(response, function (jsonValue) {
                return CreateContactResponseFromJSON(jsonValue);
              }));

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function contactsAddRaw(_x) {
      return _contactsAddRaw.apply(this, arguments);
    }

    return contactsAddRaw;
  }()
  /**
   * Create contact
   * Create contact
   */
  ;

  _proto.contactsAdd =
  /*#__PURE__*/
  function () {
    var _contactsAdd = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(requestParameters) {
      var response;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.contactsAddRaw(requestParameters);

            case 2:
              response = _context2.sent;
              _context2.next = 5;
              return response.value();

            case 5:
              return _context2.abrupt("return", _context2.sent);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function contactsAdd(_x2) {
      return _contactsAdd.apply(this, arguments);
    }

    return contactsAdd;
  }()
  /**
   * List contacts
   * List contacts
   */
  ;

  _proto.contactsAllRaw =
  /*#__PURE__*/
  function () {
    var _contactsAllRaw = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(requestParameters) {
      var queryParameters, headerParameters, response;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              queryParameters = {};

              if (requestParameters.raw !== undefined) {
                queryParameters['raw'] = requestParameters.raw;
              }

              if (requestParameters.cursor !== undefined) {
                queryParameters['cursor'] = requestParameters.cursor;
              }

              if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
              }

              headerParameters = {};

              if (requestParameters.xApideckConsumerId !== undefined && requestParameters.xApideckConsumerId !== null) {
                headerParameters['x-apideck-consumer-id'] = String(requestParameters.xApideckConsumerId);
              }

              if (requestParameters.xApideckAppId !== undefined && requestParameters.xApideckAppId !== null) {
                headerParameters['x-apideck-app-id'] = String(requestParameters.xApideckAppId);
              }

              if (requestParameters.xApideckServiceId !== undefined && requestParameters.xApideckServiceId !== null) {
                headerParameters['x-apideck-service-id'] = String(requestParameters.xApideckServiceId);
              }

              if (this.configuration && this.configuration.apiKey) {
                headerParameters['Authorization'] = "Bearer " + this.configuration.apiKey;
              }

              if (this.configuration && this.configuration.applicationId) {
                headerParameters['x-apideck-app-id'] = this.configuration.applicationId;
              }

              if (this.configuration && this.configuration.consumerId) {
                headerParameters['x-apideck-consumer-id'] = this.configuration.consumerId;
              }

              _context3.next = 13;
              return this.request({
                path: "/crm/contacts",
                method: 'GET',
                headers: headerParameters,
                query: queryParameters
              });

            case 13:
              response = _context3.sent;
              return _context3.abrupt("return", new JSONApiResponse(response, function (jsonValue) {
                return GetContactsResponseFromJSON(jsonValue);
              }));

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function contactsAllRaw(_x3) {
      return _contactsAllRaw.apply(this, arguments);
    }

    return contactsAllRaw;
  }()
  /**
   * List contacts
   * List contacts
   */
  ;

  _proto.contactsAll =
  /*#__PURE__*/
  function () {
    var _contactsAll = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(requestParameters) {
      var response;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.contactsAllRaw(requestParameters);

            case 2:
              response = _context4.sent;
              _context4.next = 5;
              return response.value();

            case 5:
              return _context4.abrupt("return", _context4.sent);

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function contactsAll(_x4) {
      return _contactsAll.apply(this, arguments);
    }

    return contactsAll;
  }()
  /**
   * Delete contact
   * Delete contact
   */
  ;

  _proto.contactsDeleteRaw =
  /*#__PURE__*/
  function () {
    var _contactsDeleteRaw = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(requestParameters) {
      var queryParameters, headerParameters, response;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!(requestParameters.id === null || requestParameters.id === undefined)) {
                _context5.next = 2;
                break;
              }

              throw new RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling contactsDelete.');

            case 2:
              queryParameters = {};

              if (requestParameters.raw !== undefined) {
                queryParameters['raw'] = requestParameters.raw;
              }

              headerParameters = {};

              if (requestParameters.xApideckConsumerId !== undefined && requestParameters.xApideckConsumerId !== null) {
                headerParameters['x-apideck-consumer-id'] = String(requestParameters.xApideckConsumerId);
              }

              if (requestParameters.xApideckAppId !== undefined && requestParameters.xApideckAppId !== null) {
                headerParameters['x-apideck-app-id'] = String(requestParameters.xApideckAppId);
              }

              if (requestParameters.xApideckServiceId !== undefined && requestParameters.xApideckServiceId !== null) {
                headerParameters['x-apideck-service-id'] = String(requestParameters.xApideckServiceId);
              }

              if (this.configuration && this.configuration.apiKey) {
                headerParameters['Authorization'] = "Bearer " + this.configuration.apiKey;
              }

              if (this.configuration && this.configuration.applicationId) {
                headerParameters['x-apideck-app-id'] = this.configuration.applicationId;
              }

              if (this.configuration && this.configuration.consumerId) {
                headerParameters['x-apideck-consumer-id'] = this.configuration.consumerId;
              }

              _context5.next = 13;
              return this.request({
                path: "/crm/contacts/{id}".replace("{" + 'id' + "}", encodeURIComponent(String(requestParameters.id))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters
              });

            case 13:
              response = _context5.sent;
              return _context5.abrupt("return", new JSONApiResponse(response, function (jsonValue) {
                return DeleteContactResponseFromJSON(jsonValue);
              }));

            case 15:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function contactsDeleteRaw(_x5) {
      return _contactsDeleteRaw.apply(this, arguments);
    }

    return contactsDeleteRaw;
  }()
  /**
   * Delete contact
   * Delete contact
   */
  ;

  _proto.contactsDelete =
  /*#__PURE__*/
  function () {
    var _contactsDelete = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(requestParameters) {
      var response;
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.contactsDeleteRaw(requestParameters);

            case 2:
              response = _context6.sent;
              _context6.next = 5;
              return response.value();

            case 5:
              return _context6.abrupt("return", _context6.sent);

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function contactsDelete(_x6) {
      return _contactsDelete.apply(this, arguments);
    }

    return contactsDelete;
  }()
  /**
   * Get contact
   * Get contact
   */
  ;

  _proto.contactsOneRaw =
  /*#__PURE__*/
  function () {
    var _contactsOneRaw = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(requestParameters) {
      var queryParameters, headerParameters, response;
      return runtime_1.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (!(requestParameters.id === null || requestParameters.id === undefined)) {
                _context7.next = 2;
                break;
              }

              throw new RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling contactsOne.');

            case 2:
              queryParameters = {};

              if (requestParameters.raw !== undefined) {
                queryParameters['raw'] = requestParameters.raw;
              }

              headerParameters = {};

              if (requestParameters.xApideckConsumerId !== undefined && requestParameters.xApideckConsumerId !== null) {
                headerParameters['x-apideck-consumer-id'] = String(requestParameters.xApideckConsumerId);
              }

              if (requestParameters.xApideckAppId !== undefined && requestParameters.xApideckAppId !== null) {
                headerParameters['x-apideck-app-id'] = String(requestParameters.xApideckAppId);
              }

              if (requestParameters.xApideckServiceId !== undefined && requestParameters.xApideckServiceId !== null) {
                headerParameters['x-apideck-service-id'] = String(requestParameters.xApideckServiceId);
              }

              if (this.configuration && this.configuration.apiKey) {
                headerParameters['Authorization'] = "Bearer " + this.configuration.apiKey;
              }

              if (this.configuration && this.configuration.applicationId) {
                headerParameters['x-apideck-app-id'] = this.configuration.applicationId;
              }

              if (this.configuration && this.configuration.consumerId) {
                headerParameters['x-apideck-consumer-id'] = this.configuration.consumerId;
              }

              _context7.next = 13;
              return this.request({
                path: "/crm/contacts/{id}".replace("{" + 'id' + "}", encodeURIComponent(String(requestParameters.id))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters
              });

            case 13:
              response = _context7.sent;
              return _context7.abrupt("return", new JSONApiResponse(response, function (jsonValue) {
                return GetContactResponseFromJSON(jsonValue);
              }));

            case 15:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function contactsOneRaw(_x7) {
      return _contactsOneRaw.apply(this, arguments);
    }

    return contactsOneRaw;
  }()
  /**
   * Get contact
   * Get contact
   */
  ;

  _proto.contactsOne =
  /*#__PURE__*/
  function () {
    var _contactsOne = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee8(requestParameters) {
      var response;
      return runtime_1.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return this.contactsOneRaw(requestParameters);

            case 2:
              response = _context8.sent;
              _context8.next = 5;
              return response.value();

            case 5:
              return _context8.abrupt("return", _context8.sent);

            case 6:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function contactsOne(_x8) {
      return _contactsOne.apply(this, arguments);
    }

    return contactsOne;
  }()
  /**
   * Update contact
   * Update contact
   */
  ;

  _proto.contactsUpdateRaw =
  /*#__PURE__*/
  function () {
    var _contactsUpdateRaw = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee9(requestParameters) {
      var queryParameters, headerParameters, response;
      return runtime_1.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              if (!(requestParameters.id === null || requestParameters.id === undefined)) {
                _context9.next = 2;
                break;
              }

              throw new RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling contactsUpdate.');

            case 2:
              if (!(requestParameters.contact === null || requestParameters.contact === undefined)) {
                _context9.next = 4;
                break;
              }

              throw new RequiredError('contact', 'Required parameter requestParameters.contact was null or undefined when calling contactsUpdate.');

            case 4:
              queryParameters = {};

              if (requestParameters.raw !== undefined) {
                queryParameters['raw'] = requestParameters.raw;
              }

              headerParameters = {};
              headerParameters['Content-Type'] = 'application/json';

              if (requestParameters.xApideckConsumerId !== undefined && requestParameters.xApideckConsumerId !== null) {
                headerParameters['x-apideck-consumer-id'] = String(requestParameters.xApideckConsumerId);
              }

              if (requestParameters.xApideckAppId !== undefined && requestParameters.xApideckAppId !== null) {
                headerParameters['x-apideck-app-id'] = String(requestParameters.xApideckAppId);
              }

              if (requestParameters.xApideckServiceId !== undefined && requestParameters.xApideckServiceId !== null) {
                headerParameters['x-apideck-service-id'] = String(requestParameters.xApideckServiceId);
              }

              if (this.configuration && this.configuration.apiKey) {
                headerParameters['Authorization'] = "Bearer " + this.configuration.apiKey;
              }

              if (this.configuration && this.configuration.applicationId) {
                headerParameters['x-apideck-app-id'] = this.configuration.applicationId;
              }

              if (this.configuration && this.configuration.consumerId) {
                headerParameters['x-apideck-consumer-id'] = this.configuration.consumerId;
              }

              _context9.next = 16;
              return this.request({
                path: "/crm/contacts/{id}".replace("{" + 'id' + "}", encodeURIComponent(String(requestParameters.id))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
                body: ContactToJSON(requestParameters.contact)
              });

            case 16:
              response = _context9.sent;
              return _context9.abrupt("return", new JSONApiResponse(response, function (jsonValue) {
                return UpdateContactResponseFromJSON(jsonValue);
              }));

            case 18:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    function contactsUpdateRaw(_x9) {
      return _contactsUpdateRaw.apply(this, arguments);
    }

    return contactsUpdateRaw;
  }()
  /**
   * Update contact
   * Update contact
   */
  ;

  _proto.contactsUpdate =
  /*#__PURE__*/
  function () {
    var _contactsUpdate = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee10(requestParameters) {
      var response;
      return runtime_1.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return this.contactsUpdateRaw(requestParameters);

            case 2:
              response = _context10.sent;
              _context10.next = 5;
              return response.value();

            case 5:
              return _context10.abrupt("return", _context10.sent);

            case 6:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    function contactsUpdate(_x10) {
      return _contactsUpdate.apply(this, arguments);
    }

    return contactsUpdate;
  }();

  return ContactsApi;
}(BaseAPI);

/**
 *
 */

var LeadsApi = /*#__PURE__*/function (_runtime$BaseAPI) {
  _inheritsLoose(LeadsApi, _runtime$BaseAPI);

  function LeadsApi() {
    return _runtime$BaseAPI.apply(this, arguments) || this;
  }

  var _proto = LeadsApi.prototype;

  /**
   * Create lead
   * Create lead
   */
  _proto.leadsAddRaw =
  /*#__PURE__*/
  function () {
    var _leadsAddRaw = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(requestParameters) {
      var queryParameters, headerParameters, response;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(requestParameters.lead === null || requestParameters.lead === undefined)) {
                _context.next = 2;
                break;
              }

              throw new RequiredError('lead', 'Required parameter requestParameters.lead was null or undefined when calling leadsAdd.');

            case 2:
              queryParameters = {};

              if (requestParameters.raw !== undefined) {
                queryParameters['raw'] = requestParameters.raw;
              }

              headerParameters = {};
              headerParameters['Content-Type'] = 'application/json';

              if (requestParameters.xApideckConsumerId !== undefined && requestParameters.xApideckConsumerId !== null) {
                headerParameters['x-apideck-consumer-id'] = String(requestParameters.xApideckConsumerId);
              }

              if (requestParameters.xApideckAppId !== undefined && requestParameters.xApideckAppId !== null) {
                headerParameters['x-apideck-app-id'] = String(requestParameters.xApideckAppId);
              }

              if (requestParameters.xApideckServiceId !== undefined && requestParameters.xApideckServiceId !== null) {
                headerParameters['x-apideck-service-id'] = String(requestParameters.xApideckServiceId);
              }

              if (this.configuration && this.configuration.apiKey) {
                headerParameters['Authorization'] = "Bearer " + this.configuration.apiKey;
              }

              if (this.configuration && this.configuration.applicationId) {
                headerParameters['x-apideck-app-id'] = this.configuration.applicationId;
              }

              if (this.configuration && this.configuration.consumerId) {
                headerParameters['x-apideck-consumer-id'] = this.configuration.consumerId;
              }

              _context.next = 14;
              return this.request({
                path: "/crm/leads",
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: LeadToJSON(requestParameters.lead)
              });

            case 14:
              response = _context.sent;
              return _context.abrupt("return", new JSONApiResponse(response, function (jsonValue) {
                return CreateLeadResponseFromJSON(jsonValue);
              }));

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function leadsAddRaw(_x) {
      return _leadsAddRaw.apply(this, arguments);
    }

    return leadsAddRaw;
  }()
  /**
   * Create lead
   * Create lead
   */
  ;

  _proto.leadsAdd =
  /*#__PURE__*/
  function () {
    var _leadsAdd = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(requestParameters) {
      var response;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.leadsAddRaw(requestParameters);

            case 2:
              response = _context2.sent;
              _context2.next = 5;
              return response.value();

            case 5:
              return _context2.abrupt("return", _context2.sent);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function leadsAdd(_x2) {
      return _leadsAdd.apply(this, arguments);
    }

    return leadsAdd;
  }()
  /**
   * List leads
   * List leads
   */
  ;

  _proto.leadsAllRaw =
  /*#__PURE__*/
  function () {
    var _leadsAllRaw = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(requestParameters) {
      var queryParameters, headerParameters, response;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              queryParameters = {};

              if (requestParameters.raw !== undefined) {
                queryParameters['raw'] = requestParameters.raw;
              }

              if (requestParameters.cursor !== undefined) {
                queryParameters['cursor'] = requestParameters.cursor;
              }

              if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
              }

              headerParameters = {};

              if (requestParameters.xApideckConsumerId !== undefined && requestParameters.xApideckConsumerId !== null) {
                headerParameters['x-apideck-consumer-id'] = String(requestParameters.xApideckConsumerId);
              }

              if (requestParameters.xApideckAppId !== undefined && requestParameters.xApideckAppId !== null) {
                headerParameters['x-apideck-app-id'] = String(requestParameters.xApideckAppId);
              }

              if (requestParameters.xApideckServiceId !== undefined && requestParameters.xApideckServiceId !== null) {
                headerParameters['x-apideck-service-id'] = String(requestParameters.xApideckServiceId);
              }

              if (this.configuration && this.configuration.apiKey) {
                headerParameters['Authorization'] = "Bearer " + this.configuration.apiKey;
              }

              if (this.configuration && this.configuration.applicationId) {
                headerParameters['x-apideck-app-id'] = this.configuration.applicationId;
              }

              if (this.configuration && this.configuration.consumerId) {
                headerParameters['x-apideck-consumer-id'] = this.configuration.consumerId;
              }

              _context3.next = 13;
              return this.request({
                path: "/crm/leads",
                method: 'GET',
                headers: headerParameters,
                query: queryParameters
              });

            case 13:
              response = _context3.sent;
              return _context3.abrupt("return", new JSONApiResponse(response, function (jsonValue) {
                return GetLeadsResponseFromJSON(jsonValue);
              }));

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function leadsAllRaw(_x3) {
      return _leadsAllRaw.apply(this, arguments);
    }

    return leadsAllRaw;
  }()
  /**
   * List leads
   * List leads
   */
  ;

  _proto.leadsAll =
  /*#__PURE__*/
  function () {
    var _leadsAll = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(requestParameters) {
      var response;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.leadsAllRaw(requestParameters);

            case 2:
              response = _context4.sent;
              _context4.next = 5;
              return response.value();

            case 5:
              return _context4.abrupt("return", _context4.sent);

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function leadsAll(_x4) {
      return _leadsAll.apply(this, arguments);
    }

    return leadsAll;
  }()
  /**
   * Delete lead
   * Delete lead
   */
  ;

  _proto.leadsDeleteRaw =
  /*#__PURE__*/
  function () {
    var _leadsDeleteRaw = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(requestParameters) {
      var queryParameters, headerParameters, response;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!(requestParameters.id === null || requestParameters.id === undefined)) {
                _context5.next = 2;
                break;
              }

              throw new RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling leadsDelete.');

            case 2:
              queryParameters = {};

              if (requestParameters.raw !== undefined) {
                queryParameters['raw'] = requestParameters.raw;
              }

              headerParameters = {};

              if (requestParameters.xApideckConsumerId !== undefined && requestParameters.xApideckConsumerId !== null) {
                headerParameters['x-apideck-consumer-id'] = String(requestParameters.xApideckConsumerId);
              }

              if (requestParameters.xApideckAppId !== undefined && requestParameters.xApideckAppId !== null) {
                headerParameters['x-apideck-app-id'] = String(requestParameters.xApideckAppId);
              }

              if (requestParameters.xApideckServiceId !== undefined && requestParameters.xApideckServiceId !== null) {
                headerParameters['x-apideck-service-id'] = String(requestParameters.xApideckServiceId);
              }

              if (this.configuration && this.configuration.apiKey) {
                headerParameters['Authorization'] = "Bearer " + this.configuration.apiKey;
              }

              if (this.configuration && this.configuration.applicationId) {
                headerParameters['x-apideck-app-id'] = this.configuration.applicationId;
              }

              if (this.configuration && this.configuration.consumerId) {
                headerParameters['x-apideck-consumer-id'] = this.configuration.consumerId;
              }

              _context5.next = 13;
              return this.request({
                path: "/crm/leads/{id}".replace("{" + 'id' + "}", encodeURIComponent(String(requestParameters.id))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters
              });

            case 13:
              response = _context5.sent;
              return _context5.abrupt("return", new JSONApiResponse(response, function (jsonValue) {
                return DeleteLeadResponseFromJSON(jsonValue);
              }));

            case 15:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function leadsDeleteRaw(_x5) {
      return _leadsDeleteRaw.apply(this, arguments);
    }

    return leadsDeleteRaw;
  }()
  /**
   * Delete lead
   * Delete lead
   */
  ;

  _proto.leadsDelete =
  /*#__PURE__*/
  function () {
    var _leadsDelete = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(requestParameters) {
      var response;
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.leadsDeleteRaw(requestParameters);

            case 2:
              response = _context6.sent;
              _context6.next = 5;
              return response.value();

            case 5:
              return _context6.abrupt("return", _context6.sent);

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function leadsDelete(_x6) {
      return _leadsDelete.apply(this, arguments);
    }

    return leadsDelete;
  }()
  /**
   * Get lead
   * Get lead
   */
  ;

  _proto.leadsOneRaw =
  /*#__PURE__*/
  function () {
    var _leadsOneRaw = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(requestParameters) {
      var queryParameters, headerParameters, response;
      return runtime_1.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (!(requestParameters.id === null || requestParameters.id === undefined)) {
                _context7.next = 2;
                break;
              }

              throw new RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling leadsOne.');

            case 2:
              queryParameters = {};

              if (requestParameters.raw !== undefined) {
                queryParameters['raw'] = requestParameters.raw;
              }

              headerParameters = {};

              if (requestParameters.xApideckConsumerId !== undefined && requestParameters.xApideckConsumerId !== null) {
                headerParameters['x-apideck-consumer-id'] = String(requestParameters.xApideckConsumerId);
              }

              if (requestParameters.xApideckAppId !== undefined && requestParameters.xApideckAppId !== null) {
                headerParameters['x-apideck-app-id'] = String(requestParameters.xApideckAppId);
              }

              if (requestParameters.xApideckServiceId !== undefined && requestParameters.xApideckServiceId !== null) {
                headerParameters['x-apideck-service-id'] = String(requestParameters.xApideckServiceId);
              }

              if (this.configuration && this.configuration.apiKey) {
                headerParameters['Authorization'] = "Bearer " + this.configuration.apiKey;
              }

              if (this.configuration && this.configuration.applicationId) {
                headerParameters['x-apideck-app-id'] = this.configuration.applicationId;
              }

              if (this.configuration && this.configuration.consumerId) {
                headerParameters['x-apideck-consumer-id'] = this.configuration.consumerId;
              }

              _context7.next = 13;
              return this.request({
                path: "/crm/leads/{id}".replace("{" + 'id' + "}", encodeURIComponent(String(requestParameters.id))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters
              });

            case 13:
              response = _context7.sent;
              return _context7.abrupt("return", new JSONApiResponse(response, function (jsonValue) {
                return GetLeadResponseFromJSON(jsonValue);
              }));

            case 15:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function leadsOneRaw(_x7) {
      return _leadsOneRaw.apply(this, arguments);
    }

    return leadsOneRaw;
  }()
  /**
   * Get lead
   * Get lead
   */
  ;

  _proto.leadsOne =
  /*#__PURE__*/
  function () {
    var _leadsOne = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee8(requestParameters) {
      var response;
      return runtime_1.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return this.leadsOneRaw(requestParameters);

            case 2:
              response = _context8.sent;
              _context8.next = 5;
              return response.value();

            case 5:
              return _context8.abrupt("return", _context8.sent);

            case 6:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function leadsOne(_x8) {
      return _leadsOne.apply(this, arguments);
    }

    return leadsOne;
  }()
  /**
   * Update lead
   * Update lead
   */
  ;

  _proto.leadsUpdateRaw =
  /*#__PURE__*/
  function () {
    var _leadsUpdateRaw = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee9(requestParameters) {
      var queryParameters, headerParameters, response;
      return runtime_1.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              if (!(requestParameters.id === null || requestParameters.id === undefined)) {
                _context9.next = 2;
                break;
              }

              throw new RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling leadsUpdate.');

            case 2:
              if (!(requestParameters.lead === null || requestParameters.lead === undefined)) {
                _context9.next = 4;
                break;
              }

              throw new RequiredError('lead', 'Required parameter requestParameters.lead was null or undefined when calling leadsUpdate.');

            case 4:
              queryParameters = {};

              if (requestParameters.raw !== undefined) {
                queryParameters['raw'] = requestParameters.raw;
              }

              headerParameters = {};
              headerParameters['Content-Type'] = 'application/json';

              if (requestParameters.xApideckConsumerId !== undefined && requestParameters.xApideckConsumerId !== null) {
                headerParameters['x-apideck-consumer-id'] = String(requestParameters.xApideckConsumerId);
              }

              if (requestParameters.xApideckAppId !== undefined && requestParameters.xApideckAppId !== null) {
                headerParameters['x-apideck-app-id'] = String(requestParameters.xApideckAppId);
              }

              if (requestParameters.xApideckServiceId !== undefined && requestParameters.xApideckServiceId !== null) {
                headerParameters['x-apideck-service-id'] = String(requestParameters.xApideckServiceId);
              }

              if (this.configuration && this.configuration.apiKey) {
                headerParameters['Authorization'] = "Bearer " + this.configuration.apiKey;
              }

              if (this.configuration && this.configuration.applicationId) {
                headerParameters['x-apideck-app-id'] = this.configuration.applicationId;
              }

              if (this.configuration && this.configuration.consumerId) {
                headerParameters['x-apideck-consumer-id'] = this.configuration.consumerId;
              }

              _context9.next = 16;
              return this.request({
                path: "/crm/leads/{id}".replace("{" + 'id' + "}", encodeURIComponent(String(requestParameters.id))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
                body: LeadToJSON(requestParameters.lead)
              });

            case 16:
              response = _context9.sent;
              return _context9.abrupt("return", new JSONApiResponse(response, function (jsonValue) {
                return UpdateLeadResponseFromJSON(jsonValue);
              }));

            case 18:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    function leadsUpdateRaw(_x9) {
      return _leadsUpdateRaw.apply(this, arguments);
    }

    return leadsUpdateRaw;
  }()
  /**
   * Update lead
   * Update lead
   */
  ;

  _proto.leadsUpdate =
  /*#__PURE__*/
  function () {
    var _leadsUpdate = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee10(requestParameters) {
      var response;
      return runtime_1.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return this.leadsUpdateRaw(requestParameters);

            case 2:
              response = _context10.sent;
              _context10.next = 5;
              return response.value();

            case 5:
              return _context10.abrupt("return", _context10.sent);

            case 6:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    function leadsUpdate(_x10) {
      return _leadsUpdate.apply(this, arguments);
    }

    return leadsUpdate;
  }();

  return LeadsApi;
}(BaseAPI);

/**
 *
 */

var OpportunitiesApi = /*#__PURE__*/function (_runtime$BaseAPI) {
  _inheritsLoose(OpportunitiesApi, _runtime$BaseAPI);

  function OpportunitiesApi() {
    return _runtime$BaseAPI.apply(this, arguments) || this;
  }

  var _proto = OpportunitiesApi.prototype;

  /**
   * Create opportunity
   * Create opportunity
   */
  _proto.opportunitiesAddRaw =
  /*#__PURE__*/
  function () {
    var _opportunitiesAddRaw = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(requestParameters) {
      var queryParameters, headerParameters, response;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(requestParameters.opportunity === null || requestParameters.opportunity === undefined)) {
                _context.next = 2;
                break;
              }

              throw new RequiredError('opportunity', 'Required parameter requestParameters.opportunity was null or undefined when calling opportunitiesAdd.');

            case 2:
              queryParameters = {};

              if (requestParameters.raw !== undefined) {
                queryParameters['raw'] = requestParameters.raw;
              }

              headerParameters = {};
              headerParameters['Content-Type'] = 'application/json';

              if (requestParameters.xApideckConsumerId !== undefined && requestParameters.xApideckConsumerId !== null) {
                headerParameters['x-apideck-consumer-id'] = String(requestParameters.xApideckConsumerId);
              }

              if (requestParameters.xApideckAppId !== undefined && requestParameters.xApideckAppId !== null) {
                headerParameters['x-apideck-app-id'] = String(requestParameters.xApideckAppId);
              }

              if (requestParameters.xApideckServiceId !== undefined && requestParameters.xApideckServiceId !== null) {
                headerParameters['x-apideck-service-id'] = String(requestParameters.xApideckServiceId);
              }

              if (this.configuration && this.configuration.apiKey) {
                headerParameters['Authorization'] = "Bearer " + this.configuration.apiKey;
              }

              if (this.configuration && this.configuration.applicationId) {
                headerParameters['x-apideck-app-id'] = this.configuration.applicationId;
              }

              if (this.configuration && this.configuration.consumerId) {
                headerParameters['x-apideck-consumer-id'] = this.configuration.consumerId;
              }

              _context.next = 14;
              return this.request({
                path: "/crm/opportunities",
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: OpportunityToJSON(requestParameters.opportunity)
              });

            case 14:
              response = _context.sent;
              return _context.abrupt("return", new JSONApiResponse(response, function (jsonValue) {
                return CreateOpportunityResponseFromJSON(jsonValue);
              }));

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function opportunitiesAddRaw(_x) {
      return _opportunitiesAddRaw.apply(this, arguments);
    }

    return opportunitiesAddRaw;
  }()
  /**
   * Create opportunity
   * Create opportunity
   */
  ;

  _proto.opportunitiesAdd =
  /*#__PURE__*/
  function () {
    var _opportunitiesAdd = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(requestParameters) {
      var response;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.opportunitiesAddRaw(requestParameters);

            case 2:
              response = _context2.sent;
              _context2.next = 5;
              return response.value();

            case 5:
              return _context2.abrupt("return", _context2.sent);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function opportunitiesAdd(_x2) {
      return _opportunitiesAdd.apply(this, arguments);
    }

    return opportunitiesAdd;
  }()
  /**
   * List opportunities
   * List opportunities
   */
  ;

  _proto.opportunitiesAllRaw =
  /*#__PURE__*/
  function () {
    var _opportunitiesAllRaw = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(requestParameters) {
      var queryParameters, headerParameters, response;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              queryParameters = {};

              if (requestParameters.raw !== undefined) {
                queryParameters['raw'] = requestParameters.raw;
              }

              if (requestParameters.cursor !== undefined) {
                queryParameters['cursor'] = requestParameters.cursor;
              }

              if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
              }

              headerParameters = {};

              if (requestParameters.xApideckConsumerId !== undefined && requestParameters.xApideckConsumerId !== null) {
                headerParameters['x-apideck-consumer-id'] = String(requestParameters.xApideckConsumerId);
              }

              if (requestParameters.xApideckAppId !== undefined && requestParameters.xApideckAppId !== null) {
                headerParameters['x-apideck-app-id'] = String(requestParameters.xApideckAppId);
              }

              if (requestParameters.xApideckServiceId !== undefined && requestParameters.xApideckServiceId !== null) {
                headerParameters['x-apideck-service-id'] = String(requestParameters.xApideckServiceId);
              }

              if (this.configuration && this.configuration.apiKey) {
                headerParameters['Authorization'] = "Bearer " + this.configuration.apiKey;
              }

              if (this.configuration && this.configuration.applicationId) {
                headerParameters['x-apideck-app-id'] = this.configuration.applicationId;
              }

              if (this.configuration && this.configuration.consumerId) {
                headerParameters['x-apideck-consumer-id'] = this.configuration.consumerId;
              }

              _context3.next = 13;
              return this.request({
                path: "/crm/opportunities",
                method: 'GET',
                headers: headerParameters,
                query: queryParameters
              });

            case 13:
              response = _context3.sent;
              return _context3.abrupt("return", new JSONApiResponse(response, function (jsonValue) {
                return GetOpportunitiesResponseFromJSON(jsonValue);
              }));

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function opportunitiesAllRaw(_x3) {
      return _opportunitiesAllRaw.apply(this, arguments);
    }

    return opportunitiesAllRaw;
  }()
  /**
   * List opportunities
   * List opportunities
   */
  ;

  _proto.opportunitiesAll =
  /*#__PURE__*/
  function () {
    var _opportunitiesAll = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(requestParameters) {
      var response;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.opportunitiesAllRaw(requestParameters);

            case 2:
              response = _context4.sent;
              _context4.next = 5;
              return response.value();

            case 5:
              return _context4.abrupt("return", _context4.sent);

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function opportunitiesAll(_x4) {
      return _opportunitiesAll.apply(this, arguments);
    }

    return opportunitiesAll;
  }()
  /**
   * Delete opportunity
   * Delete opportunity
   */
  ;

  _proto.opportunitiesDeleteRaw =
  /*#__PURE__*/
  function () {
    var _opportunitiesDeleteRaw = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(requestParameters) {
      var queryParameters, headerParameters, response;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!(requestParameters.id === null || requestParameters.id === undefined)) {
                _context5.next = 2;
                break;
              }

              throw new RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling opportunitiesDelete.');

            case 2:
              queryParameters = {};

              if (requestParameters.raw !== undefined) {
                queryParameters['raw'] = requestParameters.raw;
              }

              headerParameters = {};

              if (requestParameters.xApideckConsumerId !== undefined && requestParameters.xApideckConsumerId !== null) {
                headerParameters['x-apideck-consumer-id'] = String(requestParameters.xApideckConsumerId);
              }

              if (requestParameters.xApideckAppId !== undefined && requestParameters.xApideckAppId !== null) {
                headerParameters['x-apideck-app-id'] = String(requestParameters.xApideckAppId);
              }

              if (requestParameters.xApideckServiceId !== undefined && requestParameters.xApideckServiceId !== null) {
                headerParameters['x-apideck-service-id'] = String(requestParameters.xApideckServiceId);
              }

              if (this.configuration && this.configuration.apiKey) {
                headerParameters['Authorization'] = "Bearer " + this.configuration.apiKey;
              }

              if (this.configuration && this.configuration.applicationId) {
                headerParameters['x-apideck-app-id'] = this.configuration.applicationId;
              }

              if (this.configuration && this.configuration.consumerId) {
                headerParameters['x-apideck-consumer-id'] = this.configuration.consumerId;
              }

              _context5.next = 13;
              return this.request({
                path: "/crm/opportunities/{id}".replace("{" + 'id' + "}", encodeURIComponent(String(requestParameters.id))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters
              });

            case 13:
              response = _context5.sent;
              return _context5.abrupt("return", new JSONApiResponse(response, function (jsonValue) {
                return DeleteOpportunityResponseFromJSON(jsonValue);
              }));

            case 15:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function opportunitiesDeleteRaw(_x5) {
      return _opportunitiesDeleteRaw.apply(this, arguments);
    }

    return opportunitiesDeleteRaw;
  }()
  /**
   * Delete opportunity
   * Delete opportunity
   */
  ;

  _proto.opportunitiesDelete =
  /*#__PURE__*/
  function () {
    var _opportunitiesDelete = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(requestParameters) {
      var response;
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.opportunitiesDeleteRaw(requestParameters);

            case 2:
              response = _context6.sent;
              _context6.next = 5;
              return response.value();

            case 5:
              return _context6.abrupt("return", _context6.sent);

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function opportunitiesDelete(_x6) {
      return _opportunitiesDelete.apply(this, arguments);
    }

    return opportunitiesDelete;
  }()
  /**
   * Get opportunity
   * Get opportunity
   */
  ;

  _proto.opportunitiesOneRaw =
  /*#__PURE__*/
  function () {
    var _opportunitiesOneRaw = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(requestParameters) {
      var queryParameters, headerParameters, response;
      return runtime_1.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (!(requestParameters.id === null || requestParameters.id === undefined)) {
                _context7.next = 2;
                break;
              }

              throw new RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling opportunitiesOne.');

            case 2:
              queryParameters = {};

              if (requestParameters.raw !== undefined) {
                queryParameters['raw'] = requestParameters.raw;
              }

              headerParameters = {};

              if (requestParameters.xApideckConsumerId !== undefined && requestParameters.xApideckConsumerId !== null) {
                headerParameters['x-apideck-consumer-id'] = String(requestParameters.xApideckConsumerId);
              }

              if (requestParameters.xApideckAppId !== undefined && requestParameters.xApideckAppId !== null) {
                headerParameters['x-apideck-app-id'] = String(requestParameters.xApideckAppId);
              }

              if (requestParameters.xApideckServiceId !== undefined && requestParameters.xApideckServiceId !== null) {
                headerParameters['x-apideck-service-id'] = String(requestParameters.xApideckServiceId);
              }

              if (this.configuration && this.configuration.apiKey) {
                headerParameters['Authorization'] = "Bearer " + this.configuration.apiKey;
              }

              if (this.configuration && this.configuration.applicationId) {
                headerParameters['x-apideck-app-id'] = this.configuration.applicationId;
              }

              if (this.configuration && this.configuration.consumerId) {
                headerParameters['x-apideck-consumer-id'] = this.configuration.consumerId;
              }

              _context7.next = 13;
              return this.request({
                path: "/crm/opportunities/{id}".replace("{" + 'id' + "}", encodeURIComponent(String(requestParameters.id))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters
              });

            case 13:
              response = _context7.sent;
              return _context7.abrupt("return", new JSONApiResponse(response, function (jsonValue) {
                return GetOpportunityResponseFromJSON(jsonValue);
              }));

            case 15:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function opportunitiesOneRaw(_x7) {
      return _opportunitiesOneRaw.apply(this, arguments);
    }

    return opportunitiesOneRaw;
  }()
  /**
   * Get opportunity
   * Get opportunity
   */
  ;

  _proto.opportunitiesOne =
  /*#__PURE__*/
  function () {
    var _opportunitiesOne = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee8(requestParameters) {
      var response;
      return runtime_1.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return this.opportunitiesOneRaw(requestParameters);

            case 2:
              response = _context8.sent;
              _context8.next = 5;
              return response.value();

            case 5:
              return _context8.abrupt("return", _context8.sent);

            case 6:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function opportunitiesOne(_x8) {
      return _opportunitiesOne.apply(this, arguments);
    }

    return opportunitiesOne;
  }()
  /**
   * Update opportunity
   * Update opportunity
   */
  ;

  _proto.opportunitiesUpdateRaw =
  /*#__PURE__*/
  function () {
    var _opportunitiesUpdateRaw = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee9(requestParameters) {
      var queryParameters, headerParameters, response;
      return runtime_1.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              if (!(requestParameters.id === null || requestParameters.id === undefined)) {
                _context9.next = 2;
                break;
              }

              throw new RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling opportunitiesUpdate.');

            case 2:
              if (!(requestParameters.opportunity === null || requestParameters.opportunity === undefined)) {
                _context9.next = 4;
                break;
              }

              throw new RequiredError('opportunity', 'Required parameter requestParameters.opportunity was null or undefined when calling opportunitiesUpdate.');

            case 4:
              queryParameters = {};

              if (requestParameters.raw !== undefined) {
                queryParameters['raw'] = requestParameters.raw;
              }

              headerParameters = {};
              headerParameters['Content-Type'] = 'application/json';

              if (requestParameters.xApideckConsumerId !== undefined && requestParameters.xApideckConsumerId !== null) {
                headerParameters['x-apideck-consumer-id'] = String(requestParameters.xApideckConsumerId);
              }

              if (requestParameters.xApideckAppId !== undefined && requestParameters.xApideckAppId !== null) {
                headerParameters['x-apideck-app-id'] = String(requestParameters.xApideckAppId);
              }

              if (requestParameters.xApideckServiceId !== undefined && requestParameters.xApideckServiceId !== null) {
                headerParameters['x-apideck-service-id'] = String(requestParameters.xApideckServiceId);
              }

              if (this.configuration && this.configuration.apiKey) {
                headerParameters['Authorization'] = "Bearer " + this.configuration.apiKey;
              }

              if (this.configuration && this.configuration.applicationId) {
                headerParameters['x-apideck-app-id'] = this.configuration.applicationId;
              }

              if (this.configuration && this.configuration.consumerId) {
                headerParameters['x-apideck-consumer-id'] = this.configuration.consumerId;
              }

              _context9.next = 16;
              return this.request({
                path: "/crm/opportunities/{id}".replace("{" + 'id' + "}", encodeURIComponent(String(requestParameters.id))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
                body: OpportunityToJSON(requestParameters.opportunity)
              });

            case 16:
              response = _context9.sent;
              return _context9.abrupt("return", new JSONApiResponse(response, function (jsonValue) {
                return UpdateOpportunityResponseFromJSON(jsonValue);
              }));

            case 18:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    function opportunitiesUpdateRaw(_x9) {
      return _opportunitiesUpdateRaw.apply(this, arguments);
    }

    return opportunitiesUpdateRaw;
  }()
  /**
   * Update opportunity
   * Update opportunity
   */
  ;

  _proto.opportunitiesUpdate =
  /*#__PURE__*/
  function () {
    var _opportunitiesUpdate = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee10(requestParameters) {
      var response;
      return runtime_1.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return this.opportunitiesUpdateRaw(requestParameters);

            case 2:
              response = _context10.sent;
              _context10.next = 5;
              return response.value();

            case 5:
              return _context10.abrupt("return", _context10.sent);

            case 6:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    function opportunitiesUpdate(_x10) {
      return _opportunitiesUpdate.apply(this, arguments);
    }

    return opportunitiesUpdate;
  }();

  return OpportunitiesApi;
}(BaseAPI);

var Mapper = /*#__PURE__*/function () {
  function Mapper() {}

  Mapper.toInternal = function toInternal(requestParameters) {
    var mappedRequestParameters = _extends({}, requestParameters, {
      xApideckAppId: requestParameters.applicationId,
      xApideckConsumerId: requestParameters.consumerId,
      xApideckServiceId: requestParameters.serviceId
    });

    return mappedRequestParameters;
  };

  return Mapper;
}();
var CompaniesApi$1 = /*#__PURE__*/function () {
  function CompaniesApi$1(config) {
    this.config = config;
    this.companies = new CompaniesApi(config);
  }

  var _proto = CompaniesApi$1.prototype;

  _proto.list = /*#__PURE__*/function () {
    var _list = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(parameters) {
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.companies.companiesAll(Mapper.toInternal(parameters)));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function list(_x) {
      return _list.apply(this, arguments);
    }

    return list;
  }();

  _proto.retrieve = /*#__PURE__*/function () {
    var _retrieve = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(parameters) {
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.companies.companiesOne(Mapper.toInternal(parameters)));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function retrieve(_x2) {
      return _retrieve.apply(this, arguments);
    }

    return retrieve;
  }();

  _proto.create = /*#__PURE__*/function () {
    var _create = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(parameters) {
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", this.companies.companiesAdd(Mapper.toInternal(parameters)));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function create(_x3) {
      return _create.apply(this, arguments);
    }

    return create;
  }();

  _proto.update = /*#__PURE__*/function () {
    var _update = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(parameters) {
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", this.companies.companiesUpdate(Mapper.toInternal(parameters)));

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function update(_x4) {
      return _update.apply(this, arguments);
    }

    return update;
  }();

  _proto["delete"] = /*#__PURE__*/function () {
    var _delete2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(parameters) {
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", this.companies.companiesDelete(Mapper.toInternal(parameters)));

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function _delete(_x5) {
      return _delete2.apply(this, arguments);
    }

    return _delete;
  }();

  return CompaniesApi$1;
}();
var ContactsApi$1 = /*#__PURE__*/function () {
  function ContactsApi$1(config) {
    this.config = config;
    this.contacts = new ContactsApi(config);
  }

  var _proto2 = ContactsApi$1.prototype;

  _proto2.list = /*#__PURE__*/function () {
    var _list2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(parameters) {
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", this.contacts.contactsAll(Mapper.toInternal(parameters)));

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function list(_x6) {
      return _list2.apply(this, arguments);
    }

    return list;
  }();

  _proto2.retrieve = /*#__PURE__*/function () {
    var _retrieve2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(parameters) {
      return runtime_1.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", this.contacts.contactsOne(Mapper.toInternal(parameters)));

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function retrieve(_x7) {
      return _retrieve2.apply(this, arguments);
    }

    return retrieve;
  }();

  _proto2.create = /*#__PURE__*/function () {
    var _create2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee8(parameters) {
      return runtime_1.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt("return", this.contacts.contactsAdd(Mapper.toInternal(parameters)));

            case 1:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function create(_x8) {
      return _create2.apply(this, arguments);
    }

    return create;
  }();

  _proto2.update = /*#__PURE__*/function () {
    var _update2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee9(parameters) {
      return runtime_1.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              return _context9.abrupt("return", this.contacts.contactsUpdate(Mapper.toInternal(parameters)));

            case 1:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    function update(_x9) {
      return _update2.apply(this, arguments);
    }

    return update;
  }();

  _proto2["delete"] = /*#__PURE__*/function () {
    var _delete3 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee10(parameters) {
      return runtime_1.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              return _context10.abrupt("return", this.contacts.contactsDelete(Mapper.toInternal(parameters)));

            case 1:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    function _delete(_x10) {
      return _delete3.apply(this, arguments);
    }

    return _delete;
  }();

  return ContactsApi$1;
}();
var LeadsApi$1 = /*#__PURE__*/function () {
  function LeadsApi$1(config) {
    this.config = config;
    this.leads = new LeadsApi(config);
  }

  var _proto3 = LeadsApi$1.prototype;

  _proto3.list = /*#__PURE__*/function () {
    var _list3 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee11(parameters) {
      return runtime_1.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              return _context11.abrupt("return", this.leads.leadsAll(Mapper.toInternal(parameters)));

            case 1:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, this);
    }));

    function list(_x11) {
      return _list3.apply(this, arguments);
    }

    return list;
  }();

  _proto3.retrieve = /*#__PURE__*/function () {
    var _retrieve3 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee12(parameters) {
      return runtime_1.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              return _context12.abrupt("return", this.leads.leadsOne(Mapper.toInternal(parameters)));

            case 1:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, this);
    }));

    function retrieve(_x12) {
      return _retrieve3.apply(this, arguments);
    }

    return retrieve;
  }();

  _proto3.create = /*#__PURE__*/function () {
    var _create3 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee13(parameters) {
      return runtime_1.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              return _context13.abrupt("return", this.leads.leadsAdd(Mapper.toInternal(parameters)));

            case 1:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, this);
    }));

    function create(_x13) {
      return _create3.apply(this, arguments);
    }

    return create;
  }();

  _proto3.update = /*#__PURE__*/function () {
    var _update3 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee14(parameters) {
      return runtime_1.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              return _context14.abrupt("return", this.leads.leadsUpdate(Mapper.toInternal(parameters)));

            case 1:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, this);
    }));

    function update(_x14) {
      return _update3.apply(this, arguments);
    }

    return update;
  }();

  _proto3["delete"] = /*#__PURE__*/function () {
    var _delete4 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee15(parameters) {
      return runtime_1.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              return _context15.abrupt("return", this.leads.leadsDelete(Mapper.toInternal(parameters)));

            case 1:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, this);
    }));

    function _delete(_x15) {
      return _delete4.apply(this, arguments);
    }

    return _delete;
  }();

  return LeadsApi$1;
}();
var OpportunitiesApi$1 = /*#__PURE__*/function () {
  function OpportunitiesApi$1(config) {
    this.config = config;
    this.opportunities = new OpportunitiesApi(config);
  }

  var _proto4 = OpportunitiesApi$1.prototype;

  _proto4.list = /*#__PURE__*/function () {
    var _list4 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee16(parameters) {
      return runtime_1.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              return _context16.abrupt("return", this.opportunities.opportunitiesAll(Mapper.toInternal(parameters)));

            case 1:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16, this);
    }));

    function list(_x16) {
      return _list4.apply(this, arguments);
    }

    return list;
  }();

  _proto4.retrieve = /*#__PURE__*/function () {
    var _retrieve4 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee17(parameters) {
      return runtime_1.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              return _context17.abrupt("return", this.opportunities.opportunitiesOne(Mapper.toInternal(parameters)));

            case 1:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17, this);
    }));

    function retrieve(_x17) {
      return _retrieve4.apply(this, arguments);
    }

    return retrieve;
  }();

  _proto4.create = /*#__PURE__*/function () {
    var _create4 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee18(parameters) {
      return runtime_1.wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              return _context18.abrupt("return", this.opportunities.opportunitiesAdd(Mapper.toInternal(parameters)));

            case 1:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18, this);
    }));

    function create(_x18) {
      return _create4.apply(this, arguments);
    }

    return create;
  }();

  _proto4.update = /*#__PURE__*/function () {
    var _update4 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee19(parameters) {
      return runtime_1.wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              return _context19.abrupt("return", this.opportunities.opportunitiesUpdate(Mapper.toInternal(parameters)));

            case 1:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19, this);
    }));

    function update(_x19) {
      return _update4.apply(this, arguments);
    }

    return update;
  }();

  _proto4["delete"] = /*#__PURE__*/function () {
    var _delete5 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee20(parameters) {
      return runtime_1.wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              return _context20.abrupt("return", this.opportunities.opportunitiesDelete(Mapper.toInternal(parameters)));

            case 1:
            case "end":
              return _context20.stop();
          }
        }
      }, _callee20, this);
    }));

    function _delete(_x20) {
      return _delete5.apply(this, arguments);
    }

    return _delete;
  }();

  return OpportunitiesApi$1;
}();
var CrmApi = function CrmApi(configParameters) {
  this.configParameters = configParameters;
  var config = new Configuration(configParameters);
  this.companies = new CompaniesApi$1(config);
  this.contacts = new ContactsApi$1(config);
  this.leads = new LeadsApi$1(config);
  this.opportunities = new OpportunitiesApi$1(config);
};
var Apideck = function Apideck(config) {
  this.config = config;
  this.crm = new CrmApi(config);
};

exports.AddressFromJSON = AddressFromJSON;
exports.AddressFromJSONTyped = AddressFromJSONTyped;
exports.AddressToJSON = AddressToJSON;
exports.Apideck = Apideck;
exports.BASE_PATH = BASE_PATH;
exports.BadRequestFromJSON = BadRequestFromJSON;
exports.BadRequestFromJSONTyped = BadRequestFromJSONTyped;
exports.BadRequestToJSON = BadRequestToJSON;
exports.BankAccountFromJSON = BankAccountFromJSON;
exports.BankAccountFromJSONTyped = BankAccountFromJSONTyped;
exports.BankAccountToJSON = BankAccountToJSON;
exports.BaseAPI = BaseAPI;
exports.BlobApiResponse = BlobApiResponse;
exports.COLLECTION_FORMATS = COLLECTION_FORMATS;
exports.CompaniesApi = CompaniesApi;
exports.CompanyFromJSON = CompanyFromJSON;
exports.CompanyFromJSONTyped = CompanyFromJSONTyped;
exports.CompanyToJSON = CompanyToJSON;
exports.Configuration = Configuration;
exports.ContactFromJSON = ContactFromJSON;
exports.ContactFromJSONTyped = ContactFromJSONTyped;
exports.ContactToJSON = ContactToJSON;
exports.ContactsApi = ContactsApi;
exports.CreateCompanyResponseFromJSON = CreateCompanyResponseFromJSON;
exports.CreateCompanyResponseFromJSONTyped = CreateCompanyResponseFromJSONTyped;
exports.CreateCompanyResponseToJSON = CreateCompanyResponseToJSON;
exports.CreateContactResponseFromJSON = CreateContactResponseFromJSON;
exports.CreateContactResponseFromJSONTyped = CreateContactResponseFromJSONTyped;
exports.CreateContactResponseToJSON = CreateContactResponseToJSON;
exports.CreateLeadResponseFromJSON = CreateLeadResponseFromJSON;
exports.CreateLeadResponseFromJSONTyped = CreateLeadResponseFromJSONTyped;
exports.CreateLeadResponseToJSON = CreateLeadResponseToJSON;
exports.CreateOpportunityResponseFromJSON = CreateOpportunityResponseFromJSON;
exports.CreateOpportunityResponseFromJSONTyped = CreateOpportunityResponseFromJSONTyped;
exports.CreateOpportunityResponseToJSON = CreateOpportunityResponseToJSON;
exports.CustomFieldFromJSON = CustomFieldFromJSON;
exports.CustomFieldFromJSONTyped = CustomFieldFromJSONTyped;
exports.CustomFieldToJSON = CustomFieldToJSON;
exports.DeleteCompanyResponseFromJSON = DeleteCompanyResponseFromJSON;
exports.DeleteCompanyResponseFromJSONTyped = DeleteCompanyResponseFromJSONTyped;
exports.DeleteCompanyResponseToJSON = DeleteCompanyResponseToJSON;
exports.DeleteContactResponseFromJSON = DeleteContactResponseFromJSON;
exports.DeleteContactResponseFromJSONTyped = DeleteContactResponseFromJSONTyped;
exports.DeleteContactResponseToJSON = DeleteContactResponseToJSON;
exports.DeleteLeadResponseFromJSON = DeleteLeadResponseFromJSON;
exports.DeleteLeadResponseFromJSONTyped = DeleteLeadResponseFromJSONTyped;
exports.DeleteLeadResponseToJSON = DeleteLeadResponseToJSON;
exports.DeleteOpportunityResponseFromJSON = DeleteOpportunityResponseFromJSON;
exports.DeleteOpportunityResponseFromJSONTyped = DeleteOpportunityResponseFromJSONTyped;
exports.DeleteOpportunityResponseToJSON = DeleteOpportunityResponseToJSON;
exports.EmailFromJSON = EmailFromJSON;
exports.EmailFromJSONTyped = EmailFromJSONTyped;
exports.EmailToJSON = EmailToJSON;
exports.GetCompaniesResponseFromJSON = GetCompaniesResponseFromJSON;
exports.GetCompaniesResponseFromJSONTyped = GetCompaniesResponseFromJSONTyped;
exports.GetCompaniesResponseToJSON = GetCompaniesResponseToJSON;
exports.GetCompanyResponseFromJSON = GetCompanyResponseFromJSON;
exports.GetCompanyResponseFromJSONTyped = GetCompanyResponseFromJSONTyped;
exports.GetCompanyResponseToJSON = GetCompanyResponseToJSON;
exports.GetContactResponseFromJSON = GetContactResponseFromJSON;
exports.GetContactResponseFromJSONTyped = GetContactResponseFromJSONTyped;
exports.GetContactResponseToJSON = GetContactResponseToJSON;
exports.GetContactsResponseFromJSON = GetContactsResponseFromJSON;
exports.GetContactsResponseFromJSONTyped = GetContactsResponseFromJSONTyped;
exports.GetContactsResponseToJSON = GetContactsResponseToJSON;
exports.GetLeadResponseFromJSON = GetLeadResponseFromJSON;
exports.GetLeadResponseFromJSONTyped = GetLeadResponseFromJSONTyped;
exports.GetLeadResponseToJSON = GetLeadResponseToJSON;
exports.GetLeadsResponseFromJSON = GetLeadsResponseFromJSON;
exports.GetLeadsResponseFromJSONTyped = GetLeadsResponseFromJSONTyped;
exports.GetLeadsResponseToJSON = GetLeadsResponseToJSON;
exports.GetOpportunitiesResponseFromJSON = GetOpportunitiesResponseFromJSON;
exports.GetOpportunitiesResponseFromJSONTyped = GetOpportunitiesResponseFromJSONTyped;
exports.GetOpportunitiesResponseToJSON = GetOpportunitiesResponseToJSON;
exports.GetOpportunityResponseFromJSON = GetOpportunityResponseFromJSON;
exports.GetOpportunityResponseFromJSONTyped = GetOpportunityResponseFromJSONTyped;
exports.GetOpportunityResponseToJSON = GetOpportunityResponseToJSON;
exports.JSONApiResponse = JSONApiResponse;
exports.LeadFromJSON = LeadFromJSON;
exports.LeadFromJSONTyped = LeadFromJSONTyped;
exports.LeadToJSON = LeadToJSON;
exports.LeadsApi = LeadsApi;
exports.LinksFromJSON = LinksFromJSON;
exports.LinksFromJSONTyped = LinksFromJSONTyped;
exports.LinksToJSON = LinksToJSON;
exports.MetaCursorsFromJSON = MetaCursorsFromJSON;
exports.MetaCursorsFromJSONTyped = MetaCursorsFromJSONTyped;
exports.MetaCursorsToJSON = MetaCursorsToJSON;
exports.MetaFromJSON = MetaFromJSON;
exports.MetaFromJSONTyped = MetaFromJSONTyped;
exports.MetaToJSON = MetaToJSON;
exports.NotFoundResponseFromJSON = NotFoundResponseFromJSON;
exports.NotFoundResponseFromJSONTyped = NotFoundResponseFromJSONTyped;
exports.NotFoundResponseToJSON = NotFoundResponseToJSON;
exports.NotImplementedFromJSON = NotImplementedFromJSON;
exports.NotImplementedFromJSONTyped = NotImplementedFromJSONTyped;
exports.NotImplementedToJSON = NotImplementedToJSON;
exports.OpportunitiesApi = OpportunitiesApi;
exports.OpportunityFromJSON = OpportunityFromJSON;
exports.OpportunityFromJSONTyped = OpportunityFromJSONTyped;
exports.OpportunityToJSON = OpportunityToJSON;
exports.PaymentRequiredFromJSON = PaymentRequiredFromJSON;
exports.PaymentRequiredFromJSONTyped = PaymentRequiredFromJSONTyped;
exports.PaymentRequiredToJSON = PaymentRequiredToJSON;
exports.PhoneNumberFromJSON = PhoneNumberFromJSON;
exports.PhoneNumberFromJSONTyped = PhoneNumberFromJSONTyped;
exports.PhoneNumberToJSON = PhoneNumberToJSON;
exports.RequiredError = RequiredError;
exports.SocialLinkFromJSON = SocialLinkFromJSON;
exports.SocialLinkFromJSONTyped = SocialLinkFromJSONTyped;
exports.SocialLinkToJSON = SocialLinkToJSON;
exports.TextApiResponse = TextApiResponse;
exports.UnauthorizedFromJSON = UnauthorizedFromJSON;
exports.UnauthorizedFromJSONTyped = UnauthorizedFromJSONTyped;
exports.UnauthorizedToJSON = UnauthorizedToJSON;
exports.UnexpectedErrorFromJSON = UnexpectedErrorFromJSON;
exports.UnexpectedErrorFromJSONTyped = UnexpectedErrorFromJSONTyped;
exports.UnexpectedErrorToJSON = UnexpectedErrorToJSON;
exports.UnifiedIdFromJSON = UnifiedIdFromJSON;
exports.UnifiedIdFromJSONTyped = UnifiedIdFromJSONTyped;
exports.UnifiedIdToJSON = UnifiedIdToJSON;
exports.UnprocessableFromJSON = UnprocessableFromJSON;
exports.UnprocessableFromJSONTyped = UnprocessableFromJSONTyped;
exports.UnprocessableToJSON = UnprocessableToJSON;
exports.UpdateCompanyResponseFromJSON = UpdateCompanyResponseFromJSON;
exports.UpdateCompanyResponseFromJSONTyped = UpdateCompanyResponseFromJSONTyped;
exports.UpdateCompanyResponseToJSON = UpdateCompanyResponseToJSON;
exports.UpdateContactResponseFromJSON = UpdateContactResponseFromJSON;
exports.UpdateContactResponseFromJSONTyped = UpdateContactResponseFromJSONTyped;
exports.UpdateContactResponseToJSON = UpdateContactResponseToJSON;
exports.UpdateLeadResponseFromJSON = UpdateLeadResponseFromJSON;
exports.UpdateLeadResponseFromJSONTyped = UpdateLeadResponseFromJSONTyped;
exports.UpdateLeadResponseToJSON = UpdateLeadResponseToJSON;
exports.UpdateOpportunityResponseFromJSON = UpdateOpportunityResponseFromJSON;
exports.UpdateOpportunityResponseFromJSONTyped = UpdateOpportunityResponseFromJSONTyped;
exports.UpdateOpportunityResponseToJSON = UpdateOpportunityResponseToJSON;
exports.VoidApiResponse = VoidApiResponse;
exports.WebsiteFromJSON = WebsiteFromJSON;
exports.WebsiteFromJSONTyped = WebsiteFromJSONTyped;
exports.WebsiteToJSON = WebsiteToJSON;
exports.canConsumeForm = canConsumeForm;
exports.default = Apideck;
exports.exists = exists;
exports.mapValues = mapValues;
exports.querystring = querystring;
//# sourceMappingURL=node.cjs.development.js.map
