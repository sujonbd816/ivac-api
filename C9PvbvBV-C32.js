function ab(n, l) {
    for (var s = 0; s < l.length; s++) {
        const o = l[s];
        if (typeof o != "string" && !Array.isArray(o)) {
            for (const c in o)
                if (c !== "default" && !(c in n)) {
                    const h = Object.getOwnPropertyDescriptor(o, c);
                    h && Object.defineProperty(n, c, h.get ? h : {
                        enumerable: !0,
                        get: () => o[c]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const l = document.createElement("link").relList;
    if (l && l.supports && l.supports("modulepreload"))
        return;
    for (const c of document.querySelectorAll('link[rel="modulepreload"]'))
        o(c);
    new MutationObserver(c => {
        for (const h of c)
            if (h.type === "childList")
                for (const d of h.addedNodes)
                    d.tagName === "LINK" && d.rel === "modulepreload" && o(d)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function s(c) {
        const h = {};
        return c.integrity && (h.integrity = c.integrity),
        c.referrerPolicy && (h.referrerPolicy = c.referrerPolicy),
        c.crossOrigin === "use-credentials" ? h.credentials = "include" : c.crossOrigin === "anonymous" ? h.credentials = "omit" : h.credentials = "same-origin",
        h
    }
    function o(c) {
        if (c.ep)
            return;
        c.ep = !0;
        const h = s(c);
        fetch(c.href, h)
    }
}
)();
function Qg(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
var fc = {
    exports: {}
}
  , ai = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pp;
function nb() {
    if (pp)
        return ai;
    pp = 1;
    var n = Symbol.for("react.transitional.element")
      , l = Symbol.for("react.fragment");
    function s(o, c, h) {
        var d = null;
        if (h !== void 0 && (d = "" + h),
        c.key !== void 0 && (d = "" + c.key),
        "key"in c) {
            h = {};
            for (var p in c)
                p !== "key" && (h[p] = c[p])
        } else
            h = c;
        return c = h.ref,
        {
            $$typeof: n,
            type: o,
            key: d,
            ref: c !== void 0 ? c : null,
            props: h
        }
    }
    return ai.Fragment = l,
    ai.jsx = s,
    ai.jsxs = s,
    ai
}
var gp;
function lb() {
    return gp || (gp = 1,
    fc.exports = nb()),
    fc.exports
}
var f = lb()
  , dc = {
    exports: {}
}
  , Ce = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yp;
function sb() {
    if (yp)
        return Ce;
    yp = 1;
    var n = Symbol.for("react.transitional.element")
      , l = Symbol.for("react.portal")
      , s = Symbol.for("react.fragment")
      , o = Symbol.for("react.strict_mode")
      , c = Symbol.for("react.profiler")
      , h = Symbol.for("react.consumer")
      , d = Symbol.for("react.context")
      , p = Symbol.for("react.forward_ref")
      , m = Symbol.for("react.suspense")
      , g = Symbol.for("react.memo")
      , v = Symbol.for("react.lazy")
      , x = Symbol.iterator;
    function S(j) {
        return j === null || typeof j != "object" ? null : (j = x && j[x] || j["@@iterator"],
        typeof j == "function" ? j : null)
    }
    var w = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , C = Object.assign
      , M = {};
    function D(j, k, X) {
        this.props = j,
        this.context = k,
        this.refs = M,
        this.updater = X || w
    }
    D.prototype.isReactComponent = {},
    D.prototype.setState = function(j, k) {
        if (typeof j != "object" && typeof j != "function" && j != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, j, k, "setState")
    }
    ,
    D.prototype.forceUpdate = function(j) {
        this.updater.enqueueForceUpdate(this, j, "forceUpdate")
    }
    ;
    function U() {}
    U.prototype = D.prototype;
    function L(j, k, X) {
        this.props = j,
        this.context = k,
        this.refs = M,
        this.updater = X || w
    }
    var B = L.prototype = new U;
    B.constructor = L,
    C(B, D.prototype),
    B.isPureReactComponent = !0;
    var F = Array.isArray
      , R = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null
    }
      , $ = Object.prototype.hasOwnProperty;
    function te(j, k, X, K, le, Z) {
        return X = Z.ref,
        {
            $$typeof: n,
            type: j,
            key: k,
            ref: X !== void 0 ? X : null,
            props: Z
        }
    }
    function J(j, k) {
        return te(j.type, k, void 0, void 0, void 0, j.props)
    }
    function se(j) {
        return typeof j == "object" && j !== null && j.$$typeof === n
    }
    function he(j) {
        var k = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + j.replace(/[=:]/g, function(X) {
            return k[X]
        })
    }
    var pe = /\/+/g;
    function de(j, k) {
        return typeof j == "object" && j !== null && j.key != null ? he("" + j.key) : k.toString(36)
    }
    function re() {}
    function ee(j) {
        switch (j.status) {
        case "fulfilled":
            return j.value;
        case "rejected":
            throw j.reason;
        default:
            switch (typeof j.status == "string" ? j.then(re, re) : (j.status = "pending",
            j.then(function(k) {
                j.status === "pending" && (j.status = "fulfilled",
                j.value = k)
            }, function(k) {
                j.status === "pending" && (j.status = "rejected",
                j.reason = k)
            })),
            j.status) {
            case "fulfilled":
                return j.value;
            case "rejected":
                throw j.reason
            }
        }
        throw j
    }
    function H(j, k, X, K, le) {
        var Z = typeof j;
        (Z === "undefined" || Z === "boolean") && (j = null);
        var G = !1;
        if (j === null)
            G = !0;
        else
            switch (Z) {
            case "bigint":
            case "string":
            case "number":
                G = !0;
                break;
            case "object":
                switch (j.$$typeof) {
                case n:
                case l:
                    G = !0;
                    break;
                case v:
                    return G = j._init,
                    H(G(j._payload), k, X, K, le)
                }
            }
        if (G)
            return le = le(j),
            G = K === "" ? "." + de(j, 0) : K,
            F(le) ? (X = "",
            G != null && (X = G.replace(pe, "$&/") + "/"),
            H(le, k, X, "", function(xe) {
                return xe
            })) : le != null && (se(le) && (le = J(le, X + (le.key == null || j && j.key === le.key ? "" : ("" + le.key).replace(pe, "$&/") + "/") + G)),
            k.push(le)),
            1;
        G = 0;
        var ve = K === "" ? "." : K + ":";
        if (F(j))
            for (var ge = 0; ge < j.length; ge++)
                K = j[ge],
                Z = ve + de(K, ge),
                G += H(K, k, X, Z, le);
        else if (ge = S(j),
        typeof ge == "function")
            for (j = ge.call(j),
            ge = 0; !(K = j.next()).done; )
                K = K.value,
                Z = ve + de(K, ge++),
                G += H(K, k, X, Z, le);
        else if (Z === "object") {
            if (typeof j.then == "function")
                return H(ee(j), k, X, K, le);
            throw k = String(j),
            Error("Objects are not valid as a React child (found: " + (k === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : k) + "). If you meant to render a collection of children, use an array instead.")
        }
        return G
    }
    function N(j, k, X) {
        if (j == null)
            return j;
        var K = []
          , le = 0;
        return H(j, K, "", "", function(Z) {
            return k.call(X, Z, le++)
        }),
        K
    }
    function O(j) {
        if (j._status === -1) {
            var k = j._result;
            k = k(),
            k.then(function(X) {
                (j._status === 0 || j._status === -1) && (j._status = 1,
                j._result = X)
            }, function(X) {
                (j._status === 0 || j._status === -1) && (j._status = 2,
                j._result = X)
            }),
            j._status === -1 && (j._status = 0,
            j._result = k)
        }
        if (j._status === 1)
            return j._result.default;
        throw j._result
    }
    var q = typeof reportError == "function" ? reportError : function(j) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var k = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof j == "object" && j !== null && typeof j.message == "string" ? String(j.message) : String(j),
                error: j
            });
            if (!window.dispatchEvent(k))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", j);
            return
        }
        console.error(j)
    }
    ;
    function ae() {}
    return Ce.Children = {
        map: N,
        forEach: function(j, k, X) {
            N(j, function() {
                k.apply(this, arguments)
            }, X)
        },
        count: function(j) {
            var k = 0;
            return N(j, function() {
                k++
            }),
            k
        },
        toArray: function(j) {
            return N(j, function(k) {
                return k
            }) || []
        },
        only: function(j) {
            if (!se(j))
                throw Error("React.Children.only expected to receive a single React element child.");
            return j
        }
    },
    Ce.Component = D,
    Ce.Fragment = s,
    Ce.Profiler = c,
    Ce.PureComponent = L,
    Ce.StrictMode = o,
    Ce.Suspense = m,
    Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = R,
    Ce.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(j) {
            return R.H.useMemoCache(j)
        }
    },
    Ce.cache = function(j) {
        return function() {
            return j.apply(null, arguments)
        }
    }
    ,
    Ce.cloneElement = function(j, k, X) {
        if (j == null)
            throw Error("The argument must be a React element, but you passed " + j + ".");
        var K = C({}, j.props)
          , le = j.key
          , Z = void 0;
        if (k != null)
            for (G in k.ref !== void 0 && (Z = void 0),
            k.key !== void 0 && (le = "" + k.key),
            k)
                !$.call(k, G) || G === "key" || G === "__self" || G === "__source" || G === "ref" && k.ref === void 0 || (K[G] = k[G]);
        var G = arguments.length - 2;
        if (G === 1)
            K.children = X;
        else if (1 < G) {
            for (var ve = Array(G), ge = 0; ge < G; ge++)
                ve[ge] = arguments[ge + 2];
            K.children = ve
        }
        return te(j.type, le, void 0, void 0, Z, K)
    }
    ,
    Ce.createContext = function(j) {
        return j = {
            $$typeof: d,
            _currentValue: j,
            _currentValue2: j,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        j.Provider = j,
        j.Consumer = {
            $$typeof: h,
            _context: j
        },
        j
    }
    ,
    Ce.createElement = function(j, k, X) {
        var K, le = {}, Z = null;
        if (k != null)
            for (K in k.key !== void 0 && (Z = "" + k.key),
            k)
                $.call(k, K) && K !== "key" && K !== "__self" && K !== "__source" && (le[K] = k[K]);
        var G = arguments.length - 2;
        if (G === 1)
            le.children = X;
        else if (1 < G) {
            for (var ve = Array(G), ge = 0; ge < G; ge++)
                ve[ge] = arguments[ge + 2];
            le.children = ve
        }
        if (j && j.defaultProps)
            for (K in G = j.defaultProps,
            G)
                le[K] === void 0 && (le[K] = G[K]);
        return te(j, Z, void 0, void 0, null, le)
    }
    ,
    Ce.createRef = function() {
        return {
            current: null
        }
    }
    ,
    Ce.forwardRef = function(j) {
        return {
            $$typeof: p,
            render: j
        }
    }
    ,
    Ce.isValidElement = se,
    Ce.lazy = function(j) {
        return {
            $$typeof: v,
            _payload: {
                _status: -1,
                _result: j
            },
            _init: O
        }
    }
    ,
    Ce.memo = function(j, k) {
        return {
            $$typeof: g,
            type: j,
            compare: k === void 0 ? null : k
        }
    }
    ,
    Ce.startTransition = function(j) {
        var k = R.T
          , X = {};
        R.T = X;
        try {
            var K = j()
              , le = R.S;
            le !== null && le(X, K),
            typeof K == "object" && K !== null && typeof K.then == "function" && K.then(ae, q)
        } catch (Z) {
            q(Z)
        } finally {
            R.T = k
        }
    }
    ,
    Ce.unstable_useCacheRefresh = function() {
        return R.H.useCacheRefresh()
    }
    ,
    Ce.use = function(j) {
        return R.H.use(j)
    }
    ,
    Ce.useActionState = function(j, k, X) {
        return R.H.useActionState(j, k, X)
    }
    ,
    Ce.useCallback = function(j, k) {
        return R.H.useCallback(j, k)
    }
    ,
    Ce.useContext = function(j) {
        return R.H.useContext(j)
    }
    ,
    Ce.useDebugValue = function() {}
    ,
    Ce.useDeferredValue = function(j, k) {
        return R.H.useDeferredValue(j, k)
    }
    ,
    Ce.useEffect = function(j, k, X) {
        var K = R.H;
        if (typeof X == "function")
            throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return K.useEffect(j, k)
    }
    ,
    Ce.useId = function() {
        return R.H.useId()
    }
    ,
    Ce.useImperativeHandle = function(j, k, X) {
        return R.H.useImperativeHandle(j, k, X)
    }
    ,
    Ce.useInsertionEffect = function(j, k) {
        return R.H.useInsertionEffect(j, k)
    }
    ,
    Ce.useLayoutEffect = function(j, k) {
        return R.H.useLayoutEffect(j, k)
    }
    ,
    Ce.useMemo = function(j, k) {
        return R.H.useMemo(j, k)
    }
    ,
    Ce.useOptimistic = function(j, k) {
        return R.H.useOptimistic(j, k)
    }
    ,
    Ce.useReducer = function(j, k, X) {
        return R.H.useReducer(j, k, X)
    }
    ,
    Ce.useRef = function(j) {
        return R.H.useRef(j)
    }
    ,
    Ce.useState = function(j) {
        return R.H.useState(j)
    }
    ,
    Ce.useSyncExternalStore = function(j, k, X) {
        return R.H.useSyncExternalStore(j, k, X)
    }
    ,
    Ce.useTransition = function() {
        return R.H.useTransition()
    }
    ,
    Ce.version = "19.1.0",
    Ce
}
var vp;
function $o() {
    return vp || (vp = 1,
    dc.exports = sb()),
    dc.exports
}
var T = $o();
const ib = Qg(T)
  , ob = ab({
    __proto__: null,
    default: ib
}, [T]);
var hc = {
    exports: {}
}
  , ni = {}
  , mc = {
    exports: {}
}
  , pc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xp;
function rb() {
    return xp || (xp = 1,
    function(n) {
        function l(N, O) {
            var q = N.length;
            N.push(O);
            e: for (; 0 < q; ) {
                var ae = q - 1 >>> 1
                  , j = N[ae];
                if (0 < c(j, O))
                    N[ae] = O,
                    N[q] = j,
                    q = ae;
                else
                    break e
            }
        }
        function s(N) {
            return N.length === 0 ? null : N[0]
        }
        function o(N) {
            if (N.length === 0)
                return null;
            var O = N[0]
              , q = N.pop();
            if (q !== O) {
                N[0] = q;
                e: for (var ae = 0, j = N.length, k = j >>> 1; ae < k; ) {
                    var X = 2 * (ae + 1) - 1
                      , K = N[X]
                      , le = X + 1
                      , Z = N[le];
                    if (0 > c(K, q))
                        le < j && 0 > c(Z, K) ? (N[ae] = Z,
                        N[le] = q,
                        ae = le) : (N[ae] = K,
                        N[X] = q,
                        ae = X);
                    else if (le < j && 0 > c(Z, q))
                        N[ae] = Z,
                        N[le] = q,
                        ae = le;
                    else
                        break e
                }
            }
            return O
        }
        function c(N, O) {
            var q = N.sortIndex - O.sortIndex;
            return q !== 0 ? q : N.id - O.id
        }
        if (n.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var h = performance;
            n.unstable_now = function() {
                return h.now()
            }
        } else {
            var d = Date
              , p = d.now();
            n.unstable_now = function() {
                return d.now() - p
            }
        }
        var m = []
          , g = []
          , v = 1
          , x = null
          , S = 3
          , w = !1
          , C = !1
          , M = !1
          , D = !1
          , U = typeof setTimeout == "function" ? setTimeout : null
          , L = typeof clearTimeout == "function" ? clearTimeout : null
          , B = typeof setImmediate < "u" ? setImmediate : null;
        function F(N) {
            for (var O = s(g); O !== null; ) {
                if (O.callback === null)
                    o(g);
                else if (O.startTime <= N)
                    o(g),
                    O.sortIndex = O.expirationTime,
                    l(m, O);
                else
                    break;
                O = s(g)
            }
        }
        function R(N) {
            if (M = !1,
            F(N),
            !C)
                if (s(m) !== null)
                    C = !0,
                    $ || ($ = !0,
                    de());
                else {
                    var O = s(g);
                    O !== null && H(R, O.startTime - N)
                }
        }
        var $ = !1
          , te = -1
          , J = 5
          , se = -1;
        function he() {
            return D ? !0 : !(n.unstable_now() - se < J)
        }
        function pe() {
            if (D = !1,
            $) {
                var N = n.unstable_now();
                se = N;
                var O = !0;
                try {
                    e: {
                        C = !1,
                        M && (M = !1,
                        L(te),
                        te = -1),
                        w = !0;
                        var q = S;
                        try {
                            t: {
                                for (F(N),
                                x = s(m); x !== null && !(x.expirationTime > N && he()); ) {
                                    var ae = x.callback;
                                    if (typeof ae == "function") {
                                        x.callback = null,
                                        S = x.priorityLevel;
                                        var j = ae(x.expirationTime <= N);
                                        if (N = n.unstable_now(),
                                        typeof j == "function") {
                                            x.callback = j,
                                            F(N),
                                            O = !0;
                                            break t
                                        }
                                        x === s(m) && o(m),
                                        F(N)
                                    } else
                                        o(m);
                                    x = s(m)
                                }
                                if (x !== null)
                                    O = !0;
                                else {
                                    var k = s(g);
                                    k !== null && H(R, k.startTime - N),
                                    O = !1
                                }
                            }
                            break e
                        } finally {
                            x = null,
                            S = q,
                            w = !1
                        }
                        O = void 0
                    }
                } finally {
                    O ? de() : $ = !1
                }
            }
        }
        var de;
        if (typeof B == "function")
            de = function() {
                B(pe)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var re = new MessageChannel
              , ee = re.port2;
            re.port1.onmessage = pe,
            de = function() {
                ee.postMessage(null)
            }
        } else
            de = function() {
                U(pe, 0)
            }
            ;
        function H(N, O) {
            te = U(function() {
                N(n.unstable_now())
            }, O)
        }
        n.unstable_IdlePriority = 5,
        n.unstable_ImmediatePriority = 1,
        n.unstable_LowPriority = 4,
        n.unstable_NormalPriority = 3,
        n.unstable_Profiling = null,
        n.unstable_UserBlockingPriority = 2,
        n.unstable_cancelCallback = function(N) {
            N.callback = null
        }
        ,
        n.unstable_forceFrameRate = function(N) {
            0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : J = 0 < N ? Math.floor(1e3 / N) : 5
        }
        ,
        n.unstable_getCurrentPriorityLevel = function() {
            return S
        }
        ,
        n.unstable_next = function(N) {
            switch (S) {
            case 1:
            case 2:
            case 3:
                var O = 3;
                break;
            default:
                O = S
            }
            var q = S;
            S = O;
            try {
                return N()
            } finally {
                S = q
            }
        }
        ,
        n.unstable_requestPaint = function() {
            D = !0
        }
        ,
        n.unstable_runWithPriority = function(N, O) {
            switch (N) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                N = 3
            }
            var q = S;
            S = N;
            try {
                return O()
            } finally {
                S = q
            }
        }
        ,
        n.unstable_scheduleCallback = function(N, O, q) {
            var ae = n.unstable_now();
            switch (typeof q == "object" && q !== null ? (q = q.delay,
            q = typeof q == "number" && 0 < q ? ae + q : ae) : q = ae,
            N) {
            case 1:
                var j = -1;
                break;
            case 2:
                j = 250;
                break;
            case 5:
                j = 1073741823;
                break;
            case 4:
                j = 1e4;
                break;
            default:
                j = 5e3
            }
            return j = q + j,
            N = {
                id: v++,
                callback: O,
                priorityLevel: N,
                startTime: q,
                expirationTime: j,
                sortIndex: -1
            },
            q > ae ? (N.sortIndex = q,
            l(g, N),
            s(m) === null && N === s(g) && (M ? (L(te),
            te = -1) : M = !0,
            H(R, q - ae))) : (N.sortIndex = j,
            l(m, N),
            C || w || (C = !0,
            $ || ($ = !0,
            de()))),
            N
        }
        ,
        n.unstable_shouldYield = he,
        n.unstable_wrapCallback = function(N) {
            var O = S;
            return function() {
                var q = S;
                S = O;
                try {
                    return N.apply(this, arguments)
                } finally {
                    S = q
                }
            }
        }
    }(pc)),
    pc
}
var bp;
function ub() {
    return bp || (bp = 1,
    mc.exports = rb()),
    mc.exports
}
var gc = {
    exports: {}
}
  , Bt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sp;
function cb() {
    if (Sp)
        return Bt;
    Sp = 1;
    var n = $o();
    function l(m) {
        var g = "https://react.dev/errors/" + m;
        if (1 < arguments.length) {
            g += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var v = 2; v < arguments.length; v++)
                g += "&args[]=" + encodeURIComponent(arguments[v])
        }
        return "Minified React error #" + m + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function s() {}
    var o = {
        d: {
            f: s,
            r: function() {
                throw Error(l(522))
            },
            D: s,
            C: s,
            L: s,
            m: s,
            X: s,
            S: s,
            M: s
        },
        p: 0,
        findDOMNode: null
    }
      , c = Symbol.for("react.portal");
    function h(m, g, v) {
        var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: c,
            key: x == null ? null : "" + x,
            children: m,
            containerInfo: g,
            implementation: v
        }
    }
    var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function p(m, g) {
        if (m === "font")
            return "";
        if (typeof g == "string")
            return g === "use-credentials" ? g : ""
    }
    return Bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o,
    Bt.createPortal = function(m, g) {
        var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
            throw Error(l(299));
        return h(m, g, null, v)
    }
    ,
    Bt.flushSync = function(m) {
        var g = d.T
          , v = o.p;
        try {
            if (d.T = null,
            o.p = 2,
            m)
                return m()
        } finally {
            d.T = g,
            o.p = v,
            o.d.f()
        }
    }
    ,
    Bt.preconnect = function(m, g) {
        typeof m == "string" && (g ? (g = g.crossOrigin,
        g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null,
        o.d.C(m, g))
    }
    ,
    Bt.prefetchDNS = function(m) {
        typeof m == "string" && o.d.D(m)
    }
    ,
    Bt.preinit = function(m, g) {
        if (typeof m == "string" && g && typeof g.as == "string") {
            var v = g.as
              , x = p(v, g.crossOrigin)
              , S = typeof g.integrity == "string" ? g.integrity : void 0
              , w = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
            v === "style" ? o.d.S(m, typeof g.precedence == "string" ? g.precedence : void 0, {
                crossOrigin: x,
                integrity: S,
                fetchPriority: w
            }) : v === "script" && o.d.X(m, {
                crossOrigin: x,
                integrity: S,
                fetchPriority: w,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0
            })
        }
    }
    ,
    Bt.preinitModule = function(m, g) {
        if (typeof m == "string")
            if (typeof g == "object" && g !== null) {
                if (g.as == null || g.as === "script") {
                    var v = p(g.as, g.crossOrigin);
                    o.d.M(m, {
                        crossOrigin: v,
                        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                        nonce: typeof g.nonce == "string" ? g.nonce : void 0
                    })
                }
            } else
                g == null && o.d.M(m)
    }
    ,
    Bt.preload = function(m, g) {
        if (typeof m == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
            var v = g.as
              , x = p(v, g.crossOrigin);
            o.d.L(m, v, {
                crossOrigin: x,
                integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0,
                type: typeof g.type == "string" ? g.type : void 0,
                fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
                referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
                imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
                imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
                media: typeof g.media == "string" ? g.media : void 0
            })
        }
    }
    ,
    Bt.preloadModule = function(m, g) {
        if (typeof m == "string")
            if (g) {
                var v = p(g.as, g.crossOrigin);
                o.d.m(m, {
                    as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
                    crossOrigin: v,
                    integrity: typeof g.integrity == "string" ? g.integrity : void 0
                })
            } else
                o.d.m(m)
    }
    ,
    Bt.requestFormReset = function(m) {
        o.d.r(m)
    }
    ,
    Bt.unstable_batchedUpdates = function(m, g) {
        return m(g)
    }
    ,
    Bt.useFormState = function(m, g, v) {
        return d.H.useFormState(m, g, v)
    }
    ,
    Bt.useFormStatus = function() {
        return d.H.useHostTransitionStatus()
    }
    ,
    Bt.version = "19.1.0",
    Bt
}
var Tp;
function Fg() {
    if (Tp)
        return gc.exports;
    Tp = 1;
    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (l) {
                console.error(l)
            }
    }
    return n(),
    gc.exports = cb(),
    gc.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jp;
function fb() {
    if (jp)
        return ni;
    jp = 1;
    var n = ub()
      , l = $o()
      , s = Fg();
    function o(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var a = 2; a < arguments.length; a++)
                t += "&args[]=" + encodeURIComponent(arguments[a])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function c(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function h(e) {
        var t = e
          , a = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do
                t = e,
                (t.flags & 4098) !== 0 && (a = t.return),
                e = t.return;
            while (e)
        }
        return t.tag === 3 ? a : null
    }
    function d(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function p(e) {
        if (h(e) !== e)
            throw Error(o(188))
    }
    function m(e) {
        var t = e.alternate;
        if (!t) {
            if (t = h(e),
            t === null)
                throw Error(o(188));
            return t !== e ? null : e
        }
        for (var a = e, i = t; ; ) {
            var r = a.return;
            if (r === null)
                break;
            var u = r.alternate;
            if (u === null) {
                if (i = r.return,
                i !== null) {
                    a = i;
                    continue
                }
                break
            }
            if (r.child === u.child) {
                for (u = r.child; u; ) {
                    if (u === a)
                        return p(r),
                        e;
                    if (u === i)
                        return p(r),
                        t;
                    u = u.sibling
                }
                throw Error(o(188))
            }
            if (a.return !== i.return)
                a = r,
                i = u;
            else {
                for (var y = !1, b = r.child; b; ) {
                    if (b === a) {
                        y = !0,
                        a = r,
                        i = u;
                        break
                    }
                    if (b === i) {
                        y = !0,
                        i = r,
                        a = u;
                        break
                    }
                    b = b.sibling
                }
                if (!y) {
                    for (b = u.child; b; ) {
                        if (b === a) {
                            y = !0,
                            a = u,
                            i = r;
                            break
                        }
                        if (b === i) {
                            y = !0,
                            i = u,
                            a = r;
                            break
                        }
                        b = b.sibling
                    }
                    if (!y)
                        throw Error(o(189))
                }
            }
            if (a.alternate !== i)
                throw Error(o(190))
        }
        if (a.tag !== 3)
            throw Error(o(188));
        return a.stateNode.current === a ? e : t
    }
    function g(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e;
        for (e = e.child; e !== null; ) {
            if (t = g(e),
            t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var v = Object.assign
      , x = Symbol.for("react.element")
      , S = Symbol.for("react.transitional.element")
      , w = Symbol.for("react.portal")
      , C = Symbol.for("react.fragment")
      , M = Symbol.for("react.strict_mode")
      , D = Symbol.for("react.profiler")
      , U = Symbol.for("react.provider")
      , L = Symbol.for("react.consumer")
      , B = Symbol.for("react.context")
      , F = Symbol.for("react.forward_ref")
      , R = Symbol.for("react.suspense")
      , $ = Symbol.for("react.suspense_list")
      , te = Symbol.for("react.memo")
      , J = Symbol.for("react.lazy")
      , se = Symbol.for("react.activity")
      , he = Symbol.for("react.memo_cache_sentinel")
      , pe = Symbol.iterator;
    function de(e) {
        return e === null || typeof e != "object" ? null : (e = pe && e[pe] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var re = Symbol.for("react.client.reference");
    function ee(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.$$typeof === re ? null : e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case C:
            return "Fragment";
        case D:
            return "Profiler";
        case M:
            return "StrictMode";
        case R:
            return "Suspense";
        case $:
            return "SuspenseList";
        case se:
            return "Activity"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case w:
                return "Portal";
            case B:
                return (e.displayName || "Context") + ".Provider";
            case L:
                return (e._context.displayName || "Context") + ".Consumer";
            case F:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case te:
                return t = e.displayName || null,
                t !== null ? t : ee(e.type) || "Memo";
            case J:
                t = e._payload,
                e = e._init;
                try {
                    return ee(e(t))
                } catch {}
            }
        return null
    }
    var H = Array.isArray
      , N = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , O = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , q = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , ae = []
      , j = -1;
    function k(e) {
        return {
            current: e
        }
    }
    function X(e) {
        0 > j || (e.current = ae[j],
        ae[j] = null,
        j--)
    }
    function K(e, t) {
        j++,
        ae[j] = e.current,
        e.current = t
    }
    var le = k(null)
      , Z = k(null)
      , G = k(null)
      , ve = k(null);
    function ge(e, t) {
        switch (K(G, t),
        K(Z, e),
        K(le, null),
        t.nodeType) {
        case 9:
        case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? Ym(e) : 0;
            break;
        default:
            if (e = t.tagName,
            t = t.namespaceURI)
                t = Ym(t),
                e = Gm(t, e);
            else
                switch (e) {
                case "svg":
                    e = 1;
                    break;
                case "math":
                    e = 2;
                    break;
                default:
                    e = 0
                }
        }
        X(le),
        K(le, e)
    }
    function xe() {
        X(le),
        X(Z),
        X(G)
    }
    function Be(e) {
        e.memoizedState !== null && K(ve, e);
        var t = le.current
          , a = Gm(t, e.type);
        t !== a && (K(Z, e),
        K(le, a))
    }
    function _e(e) {
        Z.current === e && (X(le),
        X(Z)),
        ve.current === e && (X(ve),
        Is._currentValue = q)
    }
    var He = Object.prototype.hasOwnProperty
      , Et = n.unstable_scheduleCallback
      , Ae = n.unstable_cancelCallback
      , tt = n.unstable_shouldYield
      , qt = n.unstable_requestPaint
      , We = n.unstable_now
      , Ea = n.unstable_getCurrentPriorityLevel
      , Sa = n.unstable_ImmediatePriority
      , Ca = n.unstable_UserBlockingPriority
      , la = n.unstable_NormalPriority
      , La = n.unstable_LowPriority
      , Da = n.unstable_IdlePriority
      , ka = n.log
      , Ee = n.unstable_setDisableYieldValue
      , Vt = null
      , at = null;
    function zt(e) {
        if (typeof ka == "function" && Ee(e),
        at && typeof at.setStrictMode == "function")
            try {
                at.setStrictMode(Vt, e)
            } catch {}
    }
    var pt = Math.clz32 ? Math.clz32 : nt
      , ie = Math.log
      , be = Math.LN2;
    function nt(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (ie(e) / be | 0) | 0
    }
    var Me = 256
      , Fe = 4194304;
    function Je(e) {
        var t = e & 42;
        if (t !== 0)
            return t;
        switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return e & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return e
        }
    }
    function ze(e, t, a) {
        var i = e.pendingLanes;
        if (i === 0)
            return 0;
        var r = 0
          , u = e.suspendedLanes
          , y = e.pingedLanes;
        e = e.warmLanes;
        var b = i & 134217727;
        return b !== 0 ? (i = b & ~u,
        i !== 0 ? r = Je(i) : (y &= b,
        y !== 0 ? r = Je(y) : a || (a = b & ~e,
        a !== 0 && (r = Je(a))))) : (b = i & ~u,
        b !== 0 ? r = Je(b) : y !== 0 ? r = Je(y) : a || (a = i & ~e,
        a !== 0 && (r = Je(a)))),
        r === 0 ? 0 : t !== 0 && t !== r && (t & u) === 0 && (u = r & -r,
        a = t & -t,
        u >= a || u === 32 && (a & 4194048) !== 0) ? t : r
    }
    function Yt(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }
    function Ln(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function on() {
        var e = Me;
        return Me <<= 1,
        (Me & 4194048) === 0 && (Me = 256),
        e
    }
    function ne() {
        var e = Fe;
        return Fe <<= 1,
        (Fe & 62914560) === 0 && (Fe = 4194304),
        e
    }
    function we(e) {
        for (var t = [], a = 0; 31 > a; a++)
            t.push(e);
        return t
    }
    function gt(e, t) {
        e.pendingLanes |= t,
        t !== 268435456 && (e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0)
    }
    function Gt(e, t, a, i, r, u) {
        var y = e.pendingLanes;
        e.pendingLanes = a,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0,
        e.expiredLanes &= a,
        e.entangledLanes &= a,
        e.errorRecoveryDisabledLanes &= a,
        e.shellSuspendCounter = 0;
        var b = e.entanglements
          , A = e.expirationTimes
          , z = e.hiddenUpdates;
        for (a = y & ~a; 0 < a; ) {
            var Q = 31 - pt(a)
              , W = 1 << Q;
            b[Q] = 0,
            A[Q] = -1;
            var P = z[Q];
            if (P !== null)
                for (z[Q] = null,
                Q = 0; Q < P.length; Q++) {
                    var Y = P[Q];
                    Y !== null && (Y.lane &= -536870913)
                }
            a &= ~W
        }
        i !== 0 && ls(e, i, 0),
        u !== 0 && r === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(y & ~t))
    }
    function ls(e, t, a) {
        e.pendingLanes |= t,
        e.suspendedLanes &= ~t;
        var i = 31 - pt(t);
        e.entangledLanes |= t,
        e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 4194090
    }
    function ss(e, t) {
        var a = e.entangledLanes |= t;
        for (e = e.entanglements; a; ) {
            var i = 31 - pt(a)
              , r = 1 << i;
            r & t | e[i] & t && (e[i] |= t),
            a &= ~r
        }
    }
    function ul(e) {
        switch (e) {
        case 2:
            e = 1;
            break;
        case 8:
            e = 4;
            break;
        case 32:
            e = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            e = 128;
            break;
        case 268435456:
            e = 134217728;
            break;
        default:
            e = 0
        }
        return e
    }
    function cl(e) {
        return e &= -e,
        2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function is() {
        var e = O.p;
        return e !== 0 ? e : (e = window.event,
        e === void 0 ? 32 : up(e.type))
    }
    function Ei(e, t) {
        var a = O.p;
        try {
            return O.p = e,
            t()
        } finally {
            O.p = a
        }
    }
    var Ta = Math.random().toString(36).slice(2)
      , St = "__reactFiber$" + Ta
      , Ct = "__reactProps$" + Ta
      , Ha = "__reactContainer$" + Ta
      , fl = "__reactEvents$" + Ta
      , Ci = "__reactListeners$" + Ta
      , Di = "__reactHandles$" + Ta
      , os = "__reactResources$" + Ta
      , rn = "__reactMarker$" + Ta;
    function dl(e) {
        delete e[St],
        delete e[Ct],
        delete e[fl],
        delete e[Ci],
        delete e[Di]
    }
    function Pa(e) {
        var t = e[St];
        if (t)
            return t;
        for (var a = e.parentNode; a; ) {
            if (t = a[Ha] || a[St]) {
                if (a = t.alternate,
                t.child !== null || a !== null && a.child !== null)
                    for (e = Qm(e); e !== null; ) {
                        if (a = e[St])
                            return a;
                        e = Qm(e)
                    }
                return t
            }
            e = a,
            a = e.parentNode
        }
        return null
    }
    function qa(e) {
        if (e = e[St] || e[Ha]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
                return e
        }
        return null
    }
    function un(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e.stateNode;
        throw Error(o(33))
    }
    function Ya(e) {
        var t = e[os];
        return t || (t = e[os] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        t
    }
    function ce(e) {
        e[rn] = !0
    }
    var fe = new Set
      , Ue = {};
    function Ne(e, t) {
        Pe(e, t),
        Pe(e + "Capture", t)
    }
    function Pe(e, t) {
        for (Ue[e] = t,
        e = 0; e < t.length; e++)
            fe.add(t[e])
    }
    var sa = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , rs = {}
      , us = {};
    function ft(e) {
        return He.call(us, e) ? !0 : He.call(rs, e) ? !1 : sa.test(e) ? us[e] = !0 : (rs[e] = !0,
        !1)
    }
    function Jt(e, t, a) {
        if (ft(t))
            if (a === null)
                e.removeAttribute(t);
            else {
                switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                    e.removeAttribute(t);
                    return;
                case "boolean":
                    var i = t.toLowerCase().slice(0, 5);
                    if (i !== "data-" && i !== "aria-") {
                        e.removeAttribute(t);
                        return
                    }
                }
                e.setAttribute(t, "" + a)
            }
    }
    function kn(e, t, a) {
        if (a === null)
            e.removeAttribute(t);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(t);
                return
            }
            e.setAttribute(t, "" + a)
        }
    }
    function ia(e, t, a, i) {
        if (i === null)
            e.removeAttribute(a);
        else {
            switch (typeof i) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(a);
                return
            }
            e.setAttributeNS(t, a, "" + i)
        }
    }
    var sr, Uf;
    function hl(e) {
        if (sr === void 0)
            try {
                throw Error()
            } catch (a) {
                var t = a.stack.trim().match(/\n( *(at )?)/);
                sr = t && t[1] || "",
                Uf = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + sr + e + Uf
    }
    var ir = !1;
    function or(e, t) {
        if (!e || ir)
            return "";
        ir = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var i = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var W = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(W.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(W, [])
                                } catch (Y) {
                                    var P = Y
                                }
                                Reflect.construct(e, [], W)
                            } else {
                                try {
                                    W.call()
                                } catch (Y) {
                                    P = Y
                                }
                                e.call(W.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (Y) {
                                P = Y
                            }
                            (W = e()) && typeof W.catch == "function" && W.catch(function() {})
                        }
                    } catch (Y) {
                        if (Y && P && typeof Y.stack == "string")
                            return [Y.stack, P.stack]
                    }
                    return [null, null]
                }
            };
            i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var r = Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot, "name");
            r && r.configurable && Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var u = i.DetermineComponentFrameRoot()
              , y = u[0]
              , b = u[1];
            if (y && b) {
                var A = y.split(`
`)
                  , z = b.split(`
`);
                for (r = i = 0; i < A.length && !A[i].includes("DetermineComponentFrameRoot"); )
                    i++;
                for (; r < z.length && !z[r].includes("DetermineComponentFrameRoot"); )
                    r++;
                if (i === A.length || r === z.length)
                    for (i = A.length - 1,
                    r = z.length - 1; 1 <= i && 0 <= r && A[i] !== z[r]; )
                        r--;
                for (; 1 <= i && 0 <= r; i--,
                r--)
                    if (A[i] !== z[r]) {
                        if (i !== 1 || r !== 1)
                            do
                                if (i--,
                                r--,
                                0 > r || A[i] !== z[r]) {
                                    var Q = `
` + A[i].replace(" at new ", " at ");
                                    return e.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", e.displayName)),
                                    Q
                                }
                            while (1 <= i && 0 <= r);
                        break
                    }
            }
        } finally {
            ir = !1,
            Error.prepareStackTrace = a
        }
        return (a = e ? e.displayName || e.name : "") ? hl(a) : ""
    }
    function Jy(e) {
        switch (e.tag) {
        case 26:
        case 27:
        case 5:
            return hl(e.type);
        case 16:
            return hl("Lazy");
        case 13:
            return hl("Suspense");
        case 19:
            return hl("SuspenseList");
        case 0:
        case 15:
            return or(e.type, !1);
        case 11:
            return or(e.type.render, !1);
        case 1:
            return or(e.type, !0);
        case 31:
            return hl("Activity");
        default:
            return ""
        }
    }
    function Bf(e) {
        try {
            var t = "";
            do
                t += Jy(e),
                e = e.return;
            while (e);
            return t
        } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack
        }
    }
    function oa(e) {
        switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
        }
    }
    function Lf(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function Iy(e) {
        var t = Lf(e) ? "checked" : "value"
          , a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
          , i = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var r = a.get
              , u = a.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return r.call(this)
                },
                set: function(y) {
                    i = "" + y,
                    u.call(this, y)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: a.enumerable
            }),
            {
                getValue: function() {
                    return i
                },
                setValue: function(y) {
                    i = "" + y
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function _i(e) {
        e._valueTracker || (e._valueTracker = Iy(e))
    }
    function kf(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var a = t.getValue()
          , i = "";
        return e && (i = Lf(e) ? e.checked ? "true" : "false" : e.value),
        e = i,
        e !== a ? (t.setValue(e),
        !0) : !1
    }
    function Mi(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var $y = /[\n"\\]/g;
    function ra(e) {
        return e.replace($y, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function rr(e, t, a, i, r, u, y, b) {
        e.name = "",
        y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.type = y : e.removeAttribute("type"),
        t != null ? y === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + oa(t)) : e.value !== "" + oa(t) && (e.value = "" + oa(t)) : y !== "submit" && y !== "reset" || e.removeAttribute("value"),
        t != null ? ur(e, y, oa(t)) : a != null ? ur(e, y, oa(a)) : i != null && e.removeAttribute("value"),
        r == null && u != null && (e.defaultChecked = !!u),
        r != null && (e.checked = r && typeof r != "function" && typeof r != "symbol"),
        b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? e.name = "" + oa(b) : e.removeAttribute("name")
    }
    function Hf(e, t, a, i, r, u, y, b) {
        if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u),
        t != null || a != null) {
            if (!(u !== "submit" && u !== "reset" || t != null))
                return;
            a = a != null ? "" + oa(a) : "",
            t = t != null ? "" + oa(t) : a,
            b || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        i = i ?? r,
        i = typeof i != "function" && typeof i != "symbol" && !!i,
        e.checked = b ? e.checked : !!i,
        e.defaultChecked = !!i,
        y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (e.name = y)
    }
    function ur(e, t, a) {
        t === "number" && Mi(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a)
    }
    function ml(e, t, a, i) {
        if (e = e.options,
        t) {
            t = {};
            for (var r = 0; r < a.length; r++)
                t["$" + a[r]] = !0;
            for (a = 0; a < e.length; a++)
                r = t.hasOwnProperty("$" + e[a].value),
                e[a].selected !== r && (e[a].selected = r),
                r && i && (e[a].defaultSelected = !0)
        } else {
            for (a = "" + oa(a),
            t = null,
            r = 0; r < e.length; r++) {
                if (e[r].value === a) {
                    e[r].selected = !0,
                    i && (e[r].defaultSelected = !0);
                    return
                }
                t !== null || e[r].disabled || (t = e[r])
            }
            t !== null && (t.selected = !0)
        }
    }
    function Pf(e, t, a) {
        if (t != null && (t = "" + oa(t),
        t !== e.value && (e.value = t),
        a == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = a != null ? "" + oa(a) : ""
    }
    function qf(e, t, a, i) {
        if (t == null) {
            if (i != null) {
                if (a != null)
                    throw Error(o(92));
                if (H(i)) {
                    if (1 < i.length)
                        throw Error(o(93));
                    i = i[0]
                }
                a = i
            }
            a == null && (a = ""),
            t = a
        }
        a = oa(t),
        e.defaultValue = a,
        i = e.textContent,
        i === a && i !== "" && i !== null && (e.value = i)
    }
    function pl(e, t) {
        if (t) {
            var a = e.firstChild;
            if (a && a === e.lastChild && a.nodeType === 3) {
                a.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var Wy = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Yf(e, t, a) {
        var i = t.indexOf("--") === 0;
        a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Wy.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px"
    }
    function Gf(e, t, a) {
        if (t != null && typeof t != "object")
            throw Error(o(62));
        if (e = e.style,
        a != null) {
            for (var i in a)
                !a.hasOwnProperty(i) || t != null && t.hasOwnProperty(i) || (i.indexOf("--") === 0 ? e.setProperty(i, "") : i === "float" ? e.cssFloat = "" : e[i] = "");
            for (var r in t)
                i = t[r],
                t.hasOwnProperty(r) && a[r] !== i && Yf(e, r, i)
        } else
            for (var u in t)
                t.hasOwnProperty(u) && Yf(e, u, t[u])
    }
    function cr(e) {
        if (e.indexOf("-") === -1)
            return !1;
        switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var ev = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , tv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Oi(e) {
        return tv.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    var fr = null;
    function dr(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var gl = null
      , yl = null;
    function Xf(e) {
        var t = qa(e);
        if (t && (e = t.stateNode)) {
            var a = e[Ct] || null;
            e: switch (e = t.stateNode,
            t.type) {
            case "input":
                if (rr(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name),
                t = a.name,
                a.type === "radio" && t != null) {
                    for (a = e; a.parentNode; )
                        a = a.parentNode;
                    for (a = a.querySelectorAll('input[name="' + ra("" + t) + '"][type="radio"]'),
                    t = 0; t < a.length; t++) {
                        var i = a[t];
                        if (i !== e && i.form === e.form) {
                            var r = i[Ct] || null;
                            if (!r)
                                throw Error(o(90));
                            rr(i, r.value, r.defaultValue, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name)
                        }
                    }
                    for (t = 0; t < a.length; t++)
                        i = a[t],
                        i.form === e.form && kf(i)
                }
                break e;
            case "textarea":
                Pf(e, a.value, a.defaultValue);
                break e;
            case "select":
                t = a.value,
                t != null && ml(e, !!a.multiple, t, !1)
            }
        }
    }
    var hr = !1;
    function Kf(e, t, a) {
        if (hr)
            return e(t, a);
        hr = !0;
        try {
            var i = e(t);
            return i
        } finally {
            if (hr = !1,
            (gl !== null || yl !== null) && (vo(),
            gl && (t = gl,
            e = yl,
            yl = gl = null,
            Xf(t),
            e)))
                for (t = 0; t < e.length; t++)
                    Xf(e[t])
        }
    }
    function cs(e, t) {
        var a = e.stateNode;
        if (a === null)
            return null;
        var i = a[Ct] || null;
        if (i === null)
            return null;
        a = i[t];
        e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (i = !i.disabled) || (e = e.type,
            i = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !i;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (a && typeof a != "function")
            throw Error(o(231, t, typeof a));
        return a
    }
    var Ga = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , mr = !1;
    if (Ga)
        try {
            var fs = {};
            Object.defineProperty(fs, "passive", {
                get: function() {
                    mr = !0
                }
            }),
            window.addEventListener("test", fs, fs),
            window.removeEventListener("test", fs, fs)
        } catch {
            mr = !1
        }
    var cn = null
      , pr = null
      , Ri = null;
    function Zf() {
        if (Ri)
            return Ri;
        var e, t = pr, a = t.length, i, r = "value"in cn ? cn.value : cn.textContent, u = r.length;
        for (e = 0; e < a && t[e] === r[e]; e++)
            ;
        var y = a - e;
        for (i = 1; i <= y && t[a - i] === r[u - i]; i++)
            ;
        return Ri = r.slice(e, 1 < i ? 1 - i : void 0)
    }
    function Vi(e) {
        var t = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function zi() {
        return !0
    }
    function Qf() {
        return !1
    }
    function Xt(e) {
        function t(a, i, r, u, y) {
            this._reactName = a,
            this._targetInst = r,
            this.type = i,
            this.nativeEvent = u,
            this.target = y,
            this.currentTarget = null;
            for (var b in e)
                e.hasOwnProperty(b) && (a = e[b],
                this[b] = a ? a(u) : u[b]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? zi : Qf,
            this.isPropagationStopped = Qf,
            this
        }
        return v(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1),
                this.isDefaultPrevented = zi)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
                this.isPropagationStopped = zi)
            },
            persist: function() {},
            isPersistent: zi
        }),
        t
    }
    var Hn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Ui = Xt(Hn), ds = v({}, Hn, {
        view: 0,
        detail: 0
    }), av = Xt(ds), gr, yr, hs, Bi = v({}, ds, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: xr,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== hs && (hs && e.type === "mousemove" ? (gr = e.screenX - hs.screenX,
            yr = e.screenY - hs.screenY) : yr = gr = 0,
            hs = e),
            gr)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : yr
        }
    }), Ff = Xt(Bi), nv = v({}, Bi, {
        dataTransfer: 0
    }), lv = Xt(nv), sv = v({}, ds, {
        relatedTarget: 0
    }), vr = Xt(sv), iv = v({}, Hn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), ov = Xt(iv), rv = v({}, Hn, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), uv = Xt(rv), cv = v({}, Hn, {
        data: 0
    }), Jf = Xt(cv), fv = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, dv = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, hv = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function mv(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = hv[e]) ? !!t[e] : !1
    }
    function xr() {
        return mv
    }
    var pv = v({}, ds, {
        key: function(e) {
            if (e.key) {
                var t = fv[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = Vi(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? dv[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: xr,
        charCode: function(e) {
            return e.type === "keypress" ? Vi(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Vi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , gv = Xt(pv)
      , yv = v({}, Bi, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , If = Xt(yv)
      , vv = v({}, ds, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: xr
    })
      , xv = Xt(vv)
      , bv = v({}, Hn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , Sv = Xt(bv)
      , Tv = v({}, Bi, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , jv = Xt(Tv)
      , wv = v({}, Hn, {
        newState: 0,
        oldState: 0
    })
      , Av = Xt(wv)
      , Nv = [9, 13, 27, 32]
      , br = Ga && "CompositionEvent"in window
      , ms = null;
    Ga && "documentMode"in document && (ms = document.documentMode);
    var Ev = Ga && "TextEvent"in window && !ms
      , $f = Ga && (!br || ms && 8 < ms && 11 >= ms)
      , Wf = " "
      , ed = !1;
    function td(e, t) {
        switch (e) {
        case "keyup":
            return Nv.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function ad(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var vl = !1;
    function Cv(e, t) {
        switch (e) {
        case "compositionend":
            return ad(t);
        case "keypress":
            return t.which !== 32 ? null : (ed = !0,
            Wf);
        case "textInput":
            return e = t.data,
            e === Wf && ed ? null : e;
        default:
            return null
        }
    }
    function Dv(e, t) {
        if (vl)
            return e === "compositionend" || !br && td(e, t) ? (e = Zf(),
            Ri = pr = cn = null,
            vl = !1,
            e) : null;
        switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return $f && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var _v = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function nd(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!_v[e.type] : t === "textarea"
    }
    function ld(e, t, a, i) {
        gl ? yl ? yl.push(i) : yl = [i] : gl = i,
        t = wo(t, "onChange"),
        0 < t.length && (a = new Ui("onChange","change",null,a,i),
        e.push({
            event: a,
            listeners: t
        }))
    }
    var ps = null
      , gs = null;
    function Mv(e) {
        Lm(e, 0)
    }
    function Li(e) {
        var t = un(e);
        if (kf(t))
            return e
    }
    function sd(e, t) {
        if (e === "change")
            return t
    }
    var id = !1;
    if (Ga) {
        var Sr;
        if (Ga) {
            var Tr = "oninput"in document;
            if (!Tr) {
                var od = document.createElement("div");
                od.setAttribute("oninput", "return;"),
                Tr = typeof od.oninput == "function"
            }
            Sr = Tr
        } else
            Sr = !1;
        id = Sr && (!document.documentMode || 9 < document.documentMode)
    }
    function rd() {
        ps && (ps.detachEvent("onpropertychange", ud),
        gs = ps = null)
    }
    function ud(e) {
        if (e.propertyName === "value" && Li(gs)) {
            var t = [];
            ld(t, gs, e, dr(e)),
            Kf(Mv, t)
        }
    }
    function Ov(e, t, a) {
        e === "focusin" ? (rd(),
        ps = t,
        gs = a,
        ps.attachEvent("onpropertychange", ud)) : e === "focusout" && rd()
    }
    function Rv(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return Li(gs)
    }
    function Vv(e, t) {
        if (e === "click")
            return Li(t)
    }
    function zv(e, t) {
        if (e === "input" || e === "change")
            return Li(t)
    }
    function Uv(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var It = typeof Object.is == "function" ? Object.is : Uv;
    function ys(e, t) {
        if (It(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var a = Object.keys(e)
          , i = Object.keys(t);
        if (a.length !== i.length)
            return !1;
        for (i = 0; i < a.length; i++) {
            var r = a[i];
            if (!He.call(t, r) || !It(e[r], t[r]))
                return !1
        }
        return !0
    }
    function cd(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function fd(e, t) {
        var a = cd(e);
        e = 0;
        for (var i; a; ) {
            if (a.nodeType === 3) {
                if (i = e + a.textContent.length,
                e <= t && i >= t)
                    return {
                        node: a,
                        offset: t - e
                    };
                e = i
            }
            e: {
                for (; a; ) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break e
                    }
                    a = a.parentNode
                }
                a = void 0
            }
            a = cd(a)
        }
    }
    function dd(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? dd(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function hd(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = Mi(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
                var a = typeof t.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a)
                e = t.contentWindow;
            else
                break;
            t = Mi(e.document)
        }
        return t
    }
    function jr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var Bv = Ga && "documentMode"in document && 11 >= document.documentMode
      , xl = null
      , wr = null
      , vs = null
      , Ar = !1;
    function md(e, t, a) {
        var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        Ar || xl == null || xl !== Mi(i) || (i = xl,
        "selectionStart"in i && jr(i) ? i = {
            start: i.selectionStart,
            end: i.selectionEnd
        } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(),
        i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset
        }),
        vs && ys(vs, i) || (vs = i,
        i = wo(wr, "onSelect"),
        0 < i.length && (t = new Ui("onSelect","select",null,t,a),
        e.push({
            event: t,
            listeners: i
        }),
        t.target = xl)))
    }
    function Pn(e, t) {
        var a = {};
        return a[e.toLowerCase()] = t.toLowerCase(),
        a["Webkit" + e] = "webkit" + t,
        a["Moz" + e] = "moz" + t,
        a
    }
    var bl = {
        animationend: Pn("Animation", "AnimationEnd"),
        animationiteration: Pn("Animation", "AnimationIteration"),
        animationstart: Pn("Animation", "AnimationStart"),
        transitionrun: Pn("Transition", "TransitionRun"),
        transitionstart: Pn("Transition", "TransitionStart"),
        transitioncancel: Pn("Transition", "TransitionCancel"),
        transitionend: Pn("Transition", "TransitionEnd")
    }
      , Nr = {}
      , pd = {};
    Ga && (pd = document.createElement("div").style,
    "AnimationEvent"in window || (delete bl.animationend.animation,
    delete bl.animationiteration.animation,
    delete bl.animationstart.animation),
    "TransitionEvent"in window || delete bl.transitionend.transition);
    function qn(e) {
        if (Nr[e])
            return Nr[e];
        if (!bl[e])
            return e;
        var t = bl[e], a;
        for (a in t)
            if (t.hasOwnProperty(a) && a in pd)
                return Nr[e] = t[a];
        return e
    }
    var gd = qn("animationend")
      , yd = qn("animationiteration")
      , vd = qn("animationstart")
      , Lv = qn("transitionrun")
      , kv = qn("transitionstart")
      , Hv = qn("transitioncancel")
      , xd = qn("transitionend")
      , bd = new Map
      , Er = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Er.push("scrollEnd");
    function ja(e, t) {
        bd.set(e, t),
        Ne(t, [e])
    }
    var Sd = new WeakMap;
    function ua(e, t) {
        if (typeof e == "object" && e !== null) {
            var a = Sd.get(e);
            return a !== void 0 ? a : (t = {
                value: e,
                source: t,
                stack: Bf(t)
            },
            Sd.set(e, t),
            t)
        }
        return {
            value: e,
            source: t,
            stack: Bf(t)
        }
    }
    var ca = []
      , Sl = 0
      , Cr = 0;
    function ki() {
        for (var e = Sl, t = Cr = Sl = 0; t < e; ) {
            var a = ca[t];
            ca[t++] = null;
            var i = ca[t];
            ca[t++] = null;
            var r = ca[t];
            ca[t++] = null;
            var u = ca[t];
            if (ca[t++] = null,
            i !== null && r !== null) {
                var y = i.pending;
                y === null ? r.next = r : (r.next = y.next,
                y.next = r),
                i.pending = r
            }
            u !== 0 && Td(a, r, u)
        }
    }
    function Hi(e, t, a, i) {
        ca[Sl++] = e,
        ca[Sl++] = t,
        ca[Sl++] = a,
        ca[Sl++] = i,
        Cr |= i,
        e.lanes |= i,
        e = e.alternate,
        e !== null && (e.lanes |= i)
    }
    function Dr(e, t, a, i) {
        return Hi(e, t, a, i),
        Pi(e)
    }
    function Tl(e, t) {
        return Hi(e, null, null, t),
        Pi(e)
    }
    function Td(e, t, a) {
        e.lanes |= a;
        var i = e.alternate;
        i !== null && (i.lanes |= a);
        for (var r = !1, u = e.return; u !== null; )
            u.childLanes |= a,
            i = u.alternate,
            i !== null && (i.childLanes |= a),
            u.tag === 22 && (e = u.stateNode,
            e === null || e._visibility & 1 || (r = !0)),
            e = u,
            u = u.return;
        return e.tag === 3 ? (u = e.stateNode,
        r && t !== null && (r = 31 - pt(a),
        e = u.hiddenUpdates,
        i = e[r],
        i === null ? e[r] = [t] : i.push(t),
        t.lane = a | 536870912),
        u) : null
    }
    function Pi(e) {
        if (50 < Ys)
            throw Ys = 0,
            zu = null,
            Error(o(185));
        for (var t = e.return; t !== null; )
            e = t,
            t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var jl = {};
    function Pv(e, t, a, i) {
        this.tag = e,
        this.key = a,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = i,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function $t(e, t, a, i) {
        return new Pv(e,t,a,i)
    }
    function _r(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function Xa(e, t) {
        var a = e.alternate;
        return a === null ? (a = $t(e.tag, t, e.key, e.mode),
        a.elementType = e.elementType,
        a.type = e.type,
        a.stateNode = e.stateNode,
        a.alternate = e,
        e.alternate = a) : (a.pendingProps = t,
        a.type = e.type,
        a.flags = 0,
        a.subtreeFlags = 0,
        a.deletions = null),
        a.flags = e.flags & 65011712,
        a.childLanes = e.childLanes,
        a.lanes = e.lanes,
        a.child = e.child,
        a.memoizedProps = e.memoizedProps,
        a.memoizedState = e.memoizedState,
        a.updateQueue = e.updateQueue,
        t = e.dependencies,
        a.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        a.sibling = e.sibling,
        a.index = e.index,
        a.ref = e.ref,
        a.refCleanup = e.refCleanup,
        a
    }
    function jd(e, t) {
        e.flags &= 65011714;
        var a = e.alternate;
        return a === null ? (e.childLanes = 0,
        e.lanes = t,
        e.child = null,
        e.subtreeFlags = 0,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.updateQueue = null,
        e.dependencies = null,
        e.stateNode = null) : (e.childLanes = a.childLanes,
        e.lanes = a.lanes,
        e.child = a.child,
        e.subtreeFlags = 0,
        e.deletions = null,
        e.memoizedProps = a.memoizedProps,
        e.memoizedState = a.memoizedState,
        e.updateQueue = a.updateQueue,
        e.type = a.type,
        t = a.dependencies,
        e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }),
        e
    }
    function qi(e, t, a, i, r, u) {
        var y = 0;
        if (i = e,
        typeof e == "function")
            _r(e) && (y = 1);
        else if (typeof e == "string")
            y = Yx(e, a, le.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else
            e: switch (e) {
            case se:
                return e = $t(31, a, t, r),
                e.elementType = se,
                e.lanes = u,
                e;
            case C:
                return Yn(a.children, r, u, t);
            case M:
                y = 8,
                r |= 24;
                break;
            case D:
                return e = $t(12, a, t, r | 2),
                e.elementType = D,
                e.lanes = u,
                e;
            case R:
                return e = $t(13, a, t, r),
                e.elementType = R,
                e.lanes = u,
                e;
            case $:
                return e = $t(19, a, t, r),
                e.elementType = $,
                e.lanes = u,
                e;
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case U:
                    case B:
                        y = 10;
                        break e;
                    case L:
                        y = 9;
                        break e;
                    case F:
                        y = 11;
                        break e;
                    case te:
                        y = 14;
                        break e;
                    case J:
                        y = 16,
                        i = null;
                        break e
                    }
                y = 29,
                a = Error(o(130, e === null ? "null" : typeof e, "")),
                i = null
            }
        return t = $t(y, a, t, r),
        t.elementType = e,
        t.type = i,
        t.lanes = u,
        t
    }
    function Yn(e, t, a, i) {
        return e = $t(7, e, i, t),
        e.lanes = a,
        e
    }
    function Mr(e, t, a) {
        return e = $t(6, e, null, t),
        e.lanes = a,
        e
    }
    function Or(e, t, a) {
        return t = $t(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = a,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    var wl = []
      , Al = 0
      , Yi = null
      , Gi = 0
      , fa = []
      , da = 0
      , Gn = null
      , Ka = 1
      , Za = "";
    function Xn(e, t) {
        wl[Al++] = Gi,
        wl[Al++] = Yi,
        Yi = e,
        Gi = t
    }
    function wd(e, t, a) {
        fa[da++] = Ka,
        fa[da++] = Za,
        fa[da++] = Gn,
        Gn = e;
        var i = Ka;
        e = Za;
        var r = 32 - pt(i) - 1;
        i &= ~(1 << r),
        a += 1;
        var u = 32 - pt(t) + r;
        if (30 < u) {
            var y = r - r % 5;
            u = (i & (1 << y) - 1).toString(32),
            i >>= y,
            r -= y,
            Ka = 1 << 32 - pt(t) + r | a << r | i,
            Za = u + e
        } else
            Ka = 1 << u | a << r | i,
            Za = e
    }
    function Rr(e) {
        e.return !== null && (Xn(e, 1),
        wd(e, 1, 0))
    }
    function Vr(e) {
        for (; e === Yi; )
            Yi = wl[--Al],
            wl[Al] = null,
            Gi = wl[--Al],
            wl[Al] = null;
        for (; e === Gn; )
            Gn = fa[--da],
            fa[da] = null,
            Za = fa[--da],
            fa[da] = null,
            Ka = fa[--da],
            fa[da] = null
    }
    var kt = null
      , ot = null
      , Ye = !1
      , Kn = null
      , _a = !1
      , zr = Error(o(519));
    function Zn(e) {
        var t = Error(o(418, ""));
        throw Ss(ua(t, e)),
        zr
    }
    function Ad(e) {
        var t = e.stateNode
          , a = e.type
          , i = e.memoizedProps;
        switch (t[St] = e,
        t[Ct] = i,
        a) {
        case "dialog":
            Ve("cancel", t),
            Ve("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            Ve("load", t);
            break;
        case "video":
        case "audio":
            for (a = 0; a < Xs.length; a++)
                Ve(Xs[a], t);
            break;
        case "source":
            Ve("error", t);
            break;
        case "img":
        case "image":
        case "link":
            Ve("error", t),
            Ve("load", t);
            break;
        case "details":
            Ve("toggle", t);
            break;
        case "input":
            Ve("invalid", t),
            Hf(t, i.value, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name, !0),
            _i(t);
            break;
        case "select":
            Ve("invalid", t);
            break;
        case "textarea":
            Ve("invalid", t),
            qf(t, i.value, i.defaultValue, i.children),
            _i(t)
        }
        a = i.children,
        typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || qm(t.textContent, a) ? (i.popover != null && (Ve("beforetoggle", t),
        Ve("toggle", t)),
        i.onScroll != null && Ve("scroll", t),
        i.onScrollEnd != null && Ve("scrollend", t),
        i.onClick != null && (t.onclick = Ao),
        t = !0) : t = !1,
        t || Zn(e)
    }
    function Nd(e) {
        for (kt = e.return; kt; )
            switch (kt.tag) {
            case 5:
            case 13:
                _a = !1;
                return;
            case 27:
            case 3:
                _a = !0;
                return;
            default:
                kt = kt.return
            }
    }
    function xs(e) {
        if (e !== kt)
            return !1;
        if (!Ye)
            return Nd(e),
            Ye = !0,
            !1;
        var t = e.tag, a;
        if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type,
        a = !(a !== "form" && a !== "button") || Iu(e.type, e.memoizedProps)),
        a = !a),
        a && ot && Zn(e),
        Nd(e),
        t === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(o(317));
            e: {
                for (e = e.nextSibling,
                t = 0; e; ) {
                    if (e.nodeType === 8)
                        if (a = e.data,
                        a === "/$") {
                            if (t === 0) {
                                ot = Aa(e.nextSibling);
                                break e
                            }
                            t--
                        } else
                            a !== "$" && a !== "$!" && a !== "$?" || t++;
                    e = e.nextSibling
                }
                ot = null
            }
        } else
            t === 27 ? (t = ot,
            Nn(e.type) ? (e = tc,
            tc = null,
            ot = e) : ot = t) : ot = kt ? Aa(e.stateNode.nextSibling) : null;
        return !0
    }
    function bs() {
        ot = kt = null,
        Ye = !1
    }
    function Ed() {
        var e = Kn;
        return e !== null && (Qt === null ? Qt = e : Qt.push.apply(Qt, e),
        Kn = null),
        e
    }
    function Ss(e) {
        Kn === null ? Kn = [e] : Kn.push(e)
    }
    var Ur = k(null)
      , Qn = null
      , Qa = null;
    function fn(e, t, a) {
        K(Ur, t._currentValue),
        t._currentValue = a
    }
    function Fa(e) {
        e._currentValue = Ur.current,
        X(Ur)
    }
    function Br(e, t, a) {
        for (; e !== null; ) {
            var i = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
            e === a)
                break;
            e = e.return
        }
    }
    function Lr(e, t, a, i) {
        var r = e.child;
        for (r !== null && (r.return = e); r !== null; ) {
            var u = r.dependencies;
            if (u !== null) {
                var y = r.child;
                u = u.firstContext;
                e: for (; u !== null; ) {
                    var b = u;
                    u = r;
                    for (var A = 0; A < t.length; A++)
                        if (b.context === t[A]) {
                            u.lanes |= a,
                            b = u.alternate,
                            b !== null && (b.lanes |= a),
                            Br(u.return, a, e),
                            i || (y = null);
                            break e
                        }
                    u = b.next
                }
            } else if (r.tag === 18) {
                if (y = r.return,
                y === null)
                    throw Error(o(341));
                y.lanes |= a,
                u = y.alternate,
                u !== null && (u.lanes |= a),
                Br(y, a, e),
                y = null
            } else
                y = r.child;
            if (y !== null)
                y.return = r;
            else
                for (y = r; y !== null; ) {
                    if (y === e) {
                        y = null;
                        break
                    }
                    if (r = y.sibling,
                    r !== null) {
                        r.return = y.return,
                        y = r;
                        break
                    }
                    y = y.return
                }
            r = y
        }
    }
    function Ts(e, t, a, i) {
        e = null;
        for (var r = t, u = !1; r !== null; ) {
            if (!u) {
                if ((r.flags & 524288) !== 0)
                    u = !0;
                else if ((r.flags & 262144) !== 0)
                    break
            }
            if (r.tag === 10) {
                var y = r.alternate;
                if (y === null)
                    throw Error(o(387));
                if (y = y.memoizedProps,
                y !== null) {
                    var b = r.type;
                    It(r.pendingProps.value, y.value) || (e !== null ? e.push(b) : e = [b])
                }
            } else if (r === ve.current) {
                if (y = r.alternate,
                y === null)
                    throw Error(o(387));
                y.memoizedState.memoizedState !== r.memoizedState.memoizedState && (e !== null ? e.push(Is) : e = [Is])
            }
            r = r.return
        }
        e !== null && Lr(t, e, a, i),
        t.flags |= 262144
    }
    function Xi(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!It(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next
        }
        return !1
    }
    function Fn(e) {
        Qn = e,
        Qa = null,
        e = e.dependencies,
        e !== null && (e.firstContext = null)
    }
    function Ut(e) {
        return Cd(Qn, e)
    }
    function Ki(e, t) {
        return Qn === null && Fn(e),
        Cd(e, t)
    }
    function Cd(e, t) {
        var a = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: a,
            next: null
        },
        Qa === null) {
            if (e === null)
                throw Error(o(308));
            Qa = t,
            e.dependencies = {
                lanes: 0,
                firstContext: t
            },
            e.flags |= 524288
        } else
            Qa = Qa.next = t;
        return a
    }
    var qv = typeof AbortController < "u" ? AbortController : function() {
        var e = []
          , t = this.signal = {
            aborted: !1,
            addEventListener: function(a, i) {
                e.push(i)
            }
        };
        this.abort = function() {
            t.aborted = !0,
            e.forEach(function(a) {
                return a()
            })
        }
    }
      , Yv = n.unstable_scheduleCallback
      , Gv = n.unstable_NormalPriority
      , Tt = {
        $$typeof: B,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function kr() {
        return {
            controller: new qv,
            data: new Map,
            refCount: 0
        }
    }
    function js(e) {
        e.refCount--,
        e.refCount === 0 && Yv(Gv, function() {
            e.controller.abort()
        })
    }
    var ws = null
      , Hr = 0
      , Nl = 0
      , El = null;
    function Xv(e, t) {
        if (ws === null) {
            var a = ws = [];
            Hr = 0,
            Nl = qu(),
            El = {
                status: "pending",
                value: void 0,
                then: function(i) {
                    a.push(i)
                }
            }
        }
        return Hr++,
        t.then(Dd, Dd),
        t
    }
    function Dd() {
        if (--Hr === 0 && ws !== null) {
            El !== null && (El.status = "fulfilled");
            var e = ws;
            ws = null,
            Nl = 0,
            El = null;
            for (var t = 0; t < e.length; t++)
                (0,
                e[t])()
        }
    }
    function Kv(e, t) {
        var a = []
          , i = {
            status: "pending",
            value: null,
            reason: null,
            then: function(r) {
                a.push(r)
            }
        };
        return e.then(function() {
            i.status = "fulfilled",
            i.value = t;
            for (var r = 0; r < a.length; r++)
                (0,
                a[r])(t)
        }, function(r) {
            for (i.status = "rejected",
            i.reason = r,
            r = 0; r < a.length; r++)
                (0,
                a[r])(void 0)
        }),
        i
    }
    var _d = N.S;
    N.S = function(e, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && Xv(e, t),
        _d !== null && _d(e, t)
    }
    ;
    var Jn = k(null);
    function Pr() {
        var e = Jn.current;
        return e !== null ? e : $e.pooledCache
    }
    function Zi(e, t) {
        t === null ? K(Jn, Jn.current) : K(Jn, t.pool)
    }
    function Md() {
        var e = Pr();
        return e === null ? null : {
            parent: Tt._currentValue,
            pool: e
        }
    }
    var As = Error(o(460))
      , Od = Error(o(474))
      , Qi = Error(o(542))
      , qr = {
        then: function() {}
    };
    function Rd(e) {
        return e = e.status,
        e === "fulfilled" || e === "rejected"
    }
    function Fi() {}
    function Vd(e, t, a) {
        switch (a = e[a],
        a === void 0 ? e.push(t) : a !== t && (t.then(Fi, Fi),
        t = a),
        t.status) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw e = t.reason,
            Ud(e),
            e;
        default:
            if (typeof t.status == "string")
                t.then(Fi, Fi);
            else {
                if (e = $e,
                e !== null && 100 < e.shellSuspendCounter)
                    throw Error(o(482));
                e = t,
                e.status = "pending",
                e.then(function(i) {
                    if (t.status === "pending") {
                        var r = t;
                        r.status = "fulfilled",
                        r.value = i
                    }
                }, function(i) {
                    if (t.status === "pending") {
                        var r = t;
                        r.status = "rejected",
                        r.reason = i
                    }
                })
            }
            switch (t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason,
                Ud(e),
                e
            }
            throw Ns = t,
            As
        }
    }
    var Ns = null;
    function zd() {
        if (Ns === null)
            throw Error(o(459));
        var e = Ns;
        return Ns = null,
        e
    }
    function Ud(e) {
        if (e === As || e === Qi)
            throw Error(o(483))
    }
    var dn = !1;
    function Yr(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function Gr(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }
    function hn(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function mn(e, t, a) {
        var i = e.updateQueue;
        if (i === null)
            return null;
        if (i = i.shared,
        (Ge & 2) !== 0) {
            var r = i.pending;
            return r === null ? t.next = t : (t.next = r.next,
            r.next = t),
            i.pending = t,
            t = Pi(e),
            Td(e, null, a),
            t
        }
        return Hi(e, i, t, a),
        Pi(e)
    }
    function Es(e, t, a) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (a & 4194048) !== 0)) {
            var i = t.lanes;
            i &= e.pendingLanes,
            a |= i,
            t.lanes = a,
            ss(e, a)
        }
    }
    function Xr(e, t) {
        var a = e.updateQueue
          , i = e.alternate;
        if (i !== null && (i = i.updateQueue,
        a === i)) {
            var r = null
              , u = null;
            if (a = a.firstBaseUpdate,
            a !== null) {
                do {
                    var y = {
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: null,
                        next: null
                    };
                    u === null ? r = u = y : u = u.next = y,
                    a = a.next
                } while (a !== null);
                u === null ? r = u = t : u = u.next = t
            } else
                r = u = t;
            a = {
                baseState: i.baseState,
                firstBaseUpdate: r,
                lastBaseUpdate: u,
                shared: i.shared,
                callbacks: i.callbacks
            },
            e.updateQueue = a;
            return
        }
        e = a.lastBaseUpdate,
        e === null ? a.firstBaseUpdate = t : e.next = t,
        a.lastBaseUpdate = t
    }
    var Kr = !1;
    function Cs() {
        if (Kr) {
            var e = El;
            if (e !== null)
                throw e
        }
    }
    function Ds(e, t, a, i) {
        Kr = !1;
        var r = e.updateQueue;
        dn = !1;
        var u = r.firstBaseUpdate
          , y = r.lastBaseUpdate
          , b = r.shared.pending;
        if (b !== null) {
            r.shared.pending = null;
            var A = b
              , z = A.next;
            A.next = null,
            y === null ? u = z : y.next = z,
            y = A;
            var Q = e.alternate;
            Q !== null && (Q = Q.updateQueue,
            b = Q.lastBaseUpdate,
            b !== y && (b === null ? Q.firstBaseUpdate = z : b.next = z,
            Q.lastBaseUpdate = A))
        }
        if (u !== null) {
            var W = r.baseState;
            y = 0,
            Q = z = A = null,
            b = u;
            do {
                var P = b.lane & -536870913
                  , Y = P !== b.lane;
                if (Y ? (Le & P) === P : (i & P) === P) {
                    P !== 0 && P === Nl && (Kr = !0),
                    Q !== null && (Q = Q.next = {
                        lane: 0,
                        tag: b.tag,
                        payload: b.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var Te = e
                          , ye = b;
                        P = t;
                        var Qe = a;
                        switch (ye.tag) {
                        case 1:
                            if (Te = ye.payload,
                            typeof Te == "function") {
                                W = Te.call(Qe, W, P);
                                break e
                            }
                            W = Te;
                            break e;
                        case 3:
                            Te.flags = Te.flags & -65537 | 128;
                        case 0:
                            if (Te = ye.payload,
                            P = typeof Te == "function" ? Te.call(Qe, W, P) : Te,
                            P == null)
                                break e;
                            W = v({}, W, P);
                            break e;
                        case 2:
                            dn = !0
                        }
                    }
                    P = b.callback,
                    P !== null && (e.flags |= 64,
                    Y && (e.flags |= 8192),
                    Y = r.callbacks,
                    Y === null ? r.callbacks = [P] : Y.push(P))
                } else
                    Y = {
                        lane: P,
                        tag: b.tag,
                        payload: b.payload,
                        callback: b.callback,
                        next: null
                    },
                    Q === null ? (z = Q = Y,
                    A = W) : Q = Q.next = Y,
                    y |= P;
                if (b = b.next,
                b === null) {
                    if (b = r.shared.pending,
                    b === null)
                        break;
                    Y = b,
                    b = Y.next,
                    Y.next = null,
                    r.lastBaseUpdate = Y,
                    r.shared.pending = null
                }
            } while (!0);
            Q === null && (A = W),
            r.baseState = A,
            r.firstBaseUpdate = z,
            r.lastBaseUpdate = Q,
            u === null && (r.shared.lanes = 0),
            Tn |= y,
            e.lanes = y,
            e.memoizedState = W
        }
    }
    function Bd(e, t) {
        if (typeof e != "function")
            throw Error(o(191, e));
        e.call(t)
    }
    function Ld(e, t) {
        var a = e.callbacks;
        if (a !== null)
            for (e.callbacks = null,
            e = 0; e < a.length; e++)
                Bd(a[e], t)
    }
    var Cl = k(null)
      , Ji = k(0);
    function kd(e, t) {
        e = an,
        K(Ji, e),
        K(Cl, t),
        an = e | t.baseLanes
    }
    function Zr() {
        K(Ji, an),
        K(Cl, Cl.current)
    }
    function Qr() {
        an = Ji.current,
        X(Cl),
        X(Ji)
    }
    var pn = 0
      , De = null
      , Ke = null
      , yt = null
      , Ii = !1
      , Dl = !1
      , In = !1
      , $i = 0
      , _s = 0
      , _l = null
      , Zv = 0;
    function dt() {
        throw Error(o(321))
    }
    function Fr(e, t) {
        if (t === null)
            return !1;
        for (var a = 0; a < t.length && a < e.length; a++)
            if (!It(e[a], t[a]))
                return !1;
        return !0
    }
    function Jr(e, t, a, i, r, u) {
        return pn = u,
        De = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        N.H = e === null || e.memoizedState === null ? Th : jh,
        In = !1,
        u = a(i, r),
        In = !1,
        Dl && (u = Pd(t, a, i, r)),
        Hd(e),
        u
    }
    function Hd(e) {
        N.H = lo;
        var t = Ke !== null && Ke.next !== null;
        if (pn = 0,
        yt = Ke = De = null,
        Ii = !1,
        _s = 0,
        _l = null,
        t)
            throw Error(o(300));
        e === null || wt || (e = e.dependencies,
        e !== null && Xi(e) && (wt = !0))
    }
    function Pd(e, t, a, i) {
        De = e;
        var r = 0;
        do {
            if (Dl && (_l = null),
            _s = 0,
            Dl = !1,
            25 <= r)
                throw Error(o(301));
            if (r += 1,
            yt = Ke = null,
            e.updateQueue != null) {
                var u = e.updateQueue;
                u.lastEffect = null,
                u.events = null,
                u.stores = null,
                u.memoCache != null && (u.memoCache.index = 0)
            }
            N.H = ex,
            u = t(a, i)
        } while (Dl);
        return u
    }
    function Qv() {
        var e = N.H
          , t = e.useState()[0];
        return t = typeof t.then == "function" ? Ms(t) : t,
        e = e.useState()[0],
        (Ke !== null ? Ke.memoizedState : null) !== e && (De.flags |= 1024),
        t
    }
    function Ir() {
        var e = $i !== 0;
        return $i = 0,
        e
    }
    function $r(e, t, a) {
        t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~a
    }
    function Wr(e) {
        if (Ii) {
            for (e = e.memoizedState; e !== null; ) {
                var t = e.queue;
                t !== null && (t.pending = null),
                e = e.next
            }
            Ii = !1
        }
        pn = 0,
        yt = Ke = De = null,
        Dl = !1,
        _s = $i = 0,
        _l = null
    }
    function Kt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return yt === null ? De.memoizedState = yt = e : yt = yt.next = e,
        yt
    }
    function vt() {
        if (Ke === null) {
            var e = De.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = Ke.next;
        var t = yt === null ? De.memoizedState : yt.next;
        if (t !== null)
            yt = t,
            Ke = e;
        else {
            if (e === null)
                throw De.alternate === null ? Error(o(467)) : Error(o(310));
            Ke = e,
            e = {
                memoizedState: Ke.memoizedState,
                baseState: Ke.baseState,
                baseQueue: Ke.baseQueue,
                queue: Ke.queue,
                next: null
            },
            yt === null ? De.memoizedState = yt = e : yt = yt.next = e
        }
        return yt
    }
    function eu() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function Ms(e) {
        var t = _s;
        return _s += 1,
        _l === null && (_l = []),
        e = Vd(_l, e, t),
        t = De,
        (yt === null ? t.memoizedState : yt.next) === null && (t = t.alternate,
        N.H = t === null || t.memoizedState === null ? Th : jh),
        e
    }
    function Wi(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
                return Ms(e);
            if (e.$$typeof === B)
                return Ut(e)
        }
        throw Error(o(438, String(e)))
    }
    function tu(e) {
        var t = null
          , a = De.updateQueue;
        if (a !== null && (t = a.memoCache),
        t == null) {
            var i = De.alternate;
            i !== null && (i = i.updateQueue,
            i !== null && (i = i.memoCache,
            i != null && (t = {
                data: i.data.map(function(r) {
                    return r.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }),
        a === null && (a = eu(),
        De.updateQueue = a),
        a.memoCache = t,
        a = t.data[t.index],
        a === void 0)
            for (a = t.data[t.index] = Array(e),
            i = 0; i < e; i++)
                a[i] = he;
        return t.index++,
        a
    }
    function Ja(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function eo(e) {
        var t = vt();
        return au(t, Ke, e)
    }
    function au(e, t, a) {
        var i = e.queue;
        if (i === null)
            throw Error(o(311));
        i.lastRenderedReducer = a;
        var r = e.baseQueue
          , u = i.pending;
        if (u !== null) {
            if (r !== null) {
                var y = r.next;
                r.next = u.next,
                u.next = y
            }
            t.baseQueue = r = u,
            i.pending = null
        }
        if (u = e.baseState,
        r === null)
            e.memoizedState = u;
        else {
            t = r.next;
            var b = y = null
              , A = null
              , z = t
              , Q = !1;
            do {
                var W = z.lane & -536870913;
                if (W !== z.lane ? (Le & W) === W : (pn & W) === W) {
                    var P = z.revertLane;
                    if (P === 0)
                        A !== null && (A = A.next = {
                            lane: 0,
                            revertLane: 0,
                            action: z.action,
                            hasEagerState: z.hasEagerState,
                            eagerState: z.eagerState,
                            next: null
                        }),
                        W === Nl && (Q = !0);
                    else if ((pn & P) === P) {
                        z = z.next,
                        P === Nl && (Q = !0);
                        continue
                    } else
                        W = {
                            lane: 0,
                            revertLane: z.revertLane,
                            action: z.action,
                            hasEagerState: z.hasEagerState,
                            eagerState: z.eagerState,
                            next: null
                        },
                        A === null ? (b = A = W,
                        y = u) : A = A.next = W,
                        De.lanes |= P,
                        Tn |= P;
                    W = z.action,
                    In && a(u, W),
                    u = z.hasEagerState ? z.eagerState : a(u, W)
                } else
                    P = {
                        lane: W,
                        revertLane: z.revertLane,
                        action: z.action,
                        hasEagerState: z.hasEagerState,
                        eagerState: z.eagerState,
                        next: null
                    },
                    A === null ? (b = A = P,
                    y = u) : A = A.next = P,
                    De.lanes |= W,
                    Tn |= W;
                z = z.next
            } while (z !== null && z !== t);
            if (A === null ? y = u : A.next = b,
            !It(u, e.memoizedState) && (wt = !0,
            Q && (a = El,
            a !== null)))
                throw a;
            e.memoizedState = u,
            e.baseState = y,
            e.baseQueue = A,
            i.lastRenderedState = u
        }
        return r === null && (i.lanes = 0),
        [e.memoizedState, i.dispatch]
    }
    function nu(e) {
        var t = vt()
          , a = t.queue;
        if (a === null)
            throw Error(o(311));
        a.lastRenderedReducer = e;
        var i = a.dispatch
          , r = a.pending
          , u = t.memoizedState;
        if (r !== null) {
            a.pending = null;
            var y = r = r.next;
            do
                u = e(u, y.action),
                y = y.next;
            while (y !== r);
            It(u, t.memoizedState) || (wt = !0),
            t.memoizedState = u,
            t.baseQueue === null && (t.baseState = u),
            a.lastRenderedState = u
        }
        return [u, i]
    }
    function qd(e, t, a) {
        var i = De
          , r = vt()
          , u = Ye;
        if (u) {
            if (a === void 0)
                throw Error(o(407));
            a = a()
        } else
            a = t();
        var y = !It((Ke || r).memoizedState, a);
        y && (r.memoizedState = a,
        wt = !0),
        r = r.queue;
        var b = Xd.bind(null, i, r, e);
        if (Os(2048, 8, b, [e]),
        r.getSnapshot !== t || y || yt !== null && yt.memoizedState.tag & 1) {
            if (i.flags |= 2048,
            Ml(9, to(), Gd.bind(null, i, r, a, t), null),
            $e === null)
                throw Error(o(349));
            u || (pn & 124) !== 0 || Yd(i, t, a)
        }
        return a
    }
    function Yd(e, t, a) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: a
        },
        t = De.updateQueue,
        t === null ? (t = eu(),
        De.updateQueue = t,
        t.stores = [e]) : (a = t.stores,
        a === null ? t.stores = [e] : a.push(e))
    }
    function Gd(e, t, a, i) {
        t.value = a,
        t.getSnapshot = i,
        Kd(t) && Zd(e)
    }
    function Xd(e, t, a) {
        return a(function() {
            Kd(t) && Zd(e)
        })
    }
    function Kd(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var a = t();
            return !It(e, a)
        } catch {
            return !0
        }
    }
    function Zd(e) {
        var t = Tl(e, 2);
        t !== null && na(t, e, 2)
    }
    function lu(e) {
        var t = Kt();
        if (typeof e == "function") {
            var a = e;
            if (e = a(),
            In) {
                zt(!0);
                try {
                    a()
                } finally {
                    zt(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e,
        t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ja,
            lastRenderedState: e
        },
        t
    }
    function Qd(e, t, a, i) {
        return e.baseState = a,
        au(e, Ke, typeof i == "function" ? i : Ja)
    }
    function Fv(e, t, a, i, r) {
        if (no(e))
            throw Error(o(485));
        if (e = t.action,
        e !== null) {
            var u = {
                payload: r,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(y) {
                    u.listeners.push(y)
                }
            };
            N.T !== null ? a(!0) : u.isTransition = !1,
            i(u),
            a = t.pending,
            a === null ? (u.next = t.pending = u,
            Fd(t, u)) : (u.next = a.next,
            t.pending = a.next = u)
        }
    }
    function Fd(e, t) {
        var a = t.action
          , i = t.payload
          , r = e.state;
        if (t.isTransition) {
            var u = N.T
              , y = {};
            N.T = y;
            try {
                var b = a(r, i)
                  , A = N.S;
                A !== null && A(y, b),
                Jd(e, t, b)
            } catch (z) {
                su(e, t, z)
            } finally {
                N.T = u
            }
        } else
            try {
                u = a(r, i),
                Jd(e, t, u)
            } catch (z) {
                su(e, t, z)
            }
    }
    function Jd(e, t, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(i) {
            Id(e, t, i)
        }, function(i) {
            return su(e, t, i)
        }) : Id(e, t, a)
    }
    function Id(e, t, a) {
        t.status = "fulfilled",
        t.value = a,
        $d(t),
        e.state = a,
        t = e.pending,
        t !== null && (a = t.next,
        a === t ? e.pending = null : (a = a.next,
        t.next = a,
        Fd(e, a)))
    }
    function su(e, t, a) {
        var i = e.pending;
        if (e.pending = null,
        i !== null) {
            i = i.next;
            do
                t.status = "rejected",
                t.reason = a,
                $d(t),
                t = t.next;
            while (t !== i)
        }
        e.action = null
    }
    function $d(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)
            (0,
            e[t])()
    }
    function Wd(e, t) {
        return t
    }
    function eh(e, t) {
        if (Ye) {
            var a = $e.formState;
            if (a !== null) {
                e: {
                    var i = De;
                    if (Ye) {
                        if (ot) {
                            t: {
                                for (var r = ot, u = _a; r.nodeType !== 8; ) {
                                    if (!u) {
                                        r = null;
                                        break t
                                    }
                                    if (r = Aa(r.nextSibling),
                                    r === null) {
                                        r = null;
                                        break t
                                    }
                                }
                                u = r.data,
                                r = u === "F!" || u === "F" ? r : null
                            }
                            if (r) {
                                ot = Aa(r.nextSibling),
                                i = r.data === "F!";
                                break e
                            }
                        }
                        Zn(i)
                    }
                    i = !1
                }
                i && (t = a[0])
            }
        }
        return a = Kt(),
        a.memoizedState = a.baseState = t,
        i = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Wd,
            lastRenderedState: t
        },
        a.queue = i,
        a = xh.bind(null, De, i),
        i.dispatch = a,
        i = lu(!1),
        u = cu.bind(null, De, !1, i.queue),
        i = Kt(),
        r = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        },
        i.queue = r,
        a = Fv.bind(null, De, r, u, a),
        r.dispatch = a,
        i.memoizedState = e,
        [t, a, !1]
    }
    function th(e) {
        var t = vt();
        return ah(t, Ke, e)
    }
    function ah(e, t, a) {
        if (t = au(e, t, Wd)[0],
        e = eo(Ja)[0],
        typeof t == "object" && t !== null && typeof t.then == "function")
            try {
                var i = Ms(t)
            } catch (y) {
                throw y === As ? Qi : y
            }
        else
            i = t;
        t = vt();
        var r = t.queue
          , u = r.dispatch;
        return a !== t.memoizedState && (De.flags |= 2048,
        Ml(9, to(), Jv.bind(null, r, a), null)),
        [i, u, e]
    }
    function Jv(e, t) {
        e.action = t
    }
    function nh(e) {
        var t = vt()
          , a = Ke;
        if (a !== null)
            return ah(t, a, e);
        vt(),
        t = t.memoizedState,
        a = vt();
        var i = a.queue.dispatch;
        return a.memoizedState = e,
        [t, i, !1]
    }
    function Ml(e, t, a, i) {
        return e = {
            tag: e,
            create: a,
            deps: i,
            inst: t,
            next: null
        },
        t = De.updateQueue,
        t === null && (t = eu(),
        De.updateQueue = t),
        a = t.lastEffect,
        a === null ? t.lastEffect = e.next = e : (i = a.next,
        a.next = e,
        e.next = i,
        t.lastEffect = e),
        e
    }
    function to() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }
    function lh() {
        return vt().memoizedState
    }
    function ao(e, t, a, i) {
        var r = Kt();
        i = i === void 0 ? null : i,
        De.flags |= e,
        r.memoizedState = Ml(1 | t, to(), a, i)
    }
    function Os(e, t, a, i) {
        var r = vt();
        i = i === void 0 ? null : i;
        var u = r.memoizedState.inst;
        Ke !== null && i !== null && Fr(i, Ke.memoizedState.deps) ? r.memoizedState = Ml(t, u, a, i) : (De.flags |= e,
        r.memoizedState = Ml(1 | t, u, a, i))
    }
    function sh(e, t) {
        ao(8390656, 8, e, t)
    }
    function ih(e, t) {
        Os(2048, 8, e, t)
    }
    function oh(e, t) {
        return Os(4, 2, e, t)
    }
    function rh(e, t) {
        return Os(4, 4, e, t)
    }
    function uh(e, t) {
        if (typeof t == "function") {
            e = e();
            var a = t(e);
            return function() {
                typeof a == "function" ? a() : t(null)
            }
        }
        if (t != null)
            return e = e(),
            t.current = e,
            function() {
                t.current = null
            }
    }
    function ch(e, t, a) {
        a = a != null ? a.concat([e]) : null,
        Os(4, 4, uh.bind(null, t, e), a)
    }
    function iu() {}
    function fh(e, t) {
        var a = vt();
        t = t === void 0 ? null : t;
        var i = a.memoizedState;
        return t !== null && Fr(t, i[1]) ? i[0] : (a.memoizedState = [e, t],
        e)
    }
    function dh(e, t) {
        var a = vt();
        t = t === void 0 ? null : t;
        var i = a.memoizedState;
        if (t !== null && Fr(t, i[1]))
            return i[0];
        if (i = e(),
        In) {
            zt(!0);
            try {
                e()
            } finally {
                zt(!1)
            }
        }
        return a.memoizedState = [i, t],
        i
    }
    function ou(e, t, a) {
        return a === void 0 || (pn & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a,
        e = pm(),
        De.lanes |= e,
        Tn |= e,
        a)
    }
    function hh(e, t, a, i) {
        return It(a, t) ? a : Cl.current !== null ? (e = ou(e, a, i),
        It(e, t) || (wt = !0),
        e) : (pn & 42) === 0 ? (wt = !0,
        e.memoizedState = a) : (e = pm(),
        De.lanes |= e,
        Tn |= e,
        t)
    }
    function mh(e, t, a, i, r) {
        var u = O.p;
        O.p = u !== 0 && 8 > u ? u : 8;
        var y = N.T
          , b = {};
        N.T = b,
        cu(e, !1, t, a);
        try {
            var A = r()
              , z = N.S;
            if (z !== null && z(b, A),
            A !== null && typeof A == "object" && typeof A.then == "function") {
                var Q = Kv(A, i);
                Rs(e, t, Q, aa(e))
            } else
                Rs(e, t, i, aa(e))
        } catch (W) {
            Rs(e, t, {
                then: function() {},
                status: "rejected",
                reason: W
            }, aa())
        } finally {
            O.p = u,
            N.T = y
        }
    }
    function Iv() {}
    function ru(e, t, a, i) {
        if (e.tag !== 5)
            throw Error(o(476));
        var r = ph(e).queue;
        mh(e, r, t, q, a === null ? Iv : function() {
            return gh(e),
            a(i)
        }
        )
    }
    function ph(e) {
        var t = e.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: q,
            baseState: q,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Ja,
                lastRenderedState: q
            },
            next: null
        };
        var a = {};
        return t.next = {
            memoizedState: a,
            baseState: a,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Ja,
                lastRenderedState: a
            },
            next: null
        },
        e.memoizedState = t,
        e = e.alternate,
        e !== null && (e.memoizedState = t),
        t
    }
    function gh(e) {
        var t = ph(e).next.queue;
        Rs(e, t, {}, aa())
    }
    function uu() {
        return Ut(Is)
    }
    function yh() {
        return vt().memoizedState
    }
    function vh() {
        return vt().memoizedState
    }
    function $v(e) {
        for (var t = e.return; t !== null; ) {
            switch (t.tag) {
            case 24:
            case 3:
                var a = aa();
                e = hn(a);
                var i = mn(t, e, a);
                i !== null && (na(i, t, a),
                Es(i, t, a)),
                t = {
                    cache: kr()
                },
                e.payload = t;
                return
            }
            t = t.return
        }
    }
    function Wv(e, t, a) {
        var i = aa();
        a = {
            lane: i,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        no(e) ? bh(t, a) : (a = Dr(e, t, a, i),
        a !== null && (na(a, e, i),
        Sh(a, t, i)))
    }
    function xh(e, t, a) {
        var i = aa();
        Rs(e, t, a, i)
    }
    function Rs(e, t, a, i) {
        var r = {
            lane: i,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (no(e))
            bh(t, r);
        else {
            var u = e.alternate;
            if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer,
            u !== null))
                try {
                    var y = t.lastRenderedState
                      , b = u(y, a);
                    if (r.hasEagerState = !0,
                    r.eagerState = b,
                    It(b, y))
                        return Hi(e, t, r, 0),
                        $e === null && ki(),
                        !1
                } catch {} finally {}
            if (a = Dr(e, t, r, i),
            a !== null)
                return na(a, e, i),
                Sh(a, t, i),
                !0
        }
        return !1
    }
    function cu(e, t, a, i) {
        if (i = {
            lane: 2,
            revertLane: qu(),
            action: i,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        no(e)) {
            if (t)
                throw Error(o(479))
        } else
            t = Dr(e, a, i, 2),
            t !== null && na(t, e, 2)
    }
    function no(e) {
        var t = e.alternate;
        return e === De || t !== null && t === De
    }
    function bh(e, t) {
        Dl = Ii = !0;
        var a = e.pending;
        a === null ? t.next = t : (t.next = a.next,
        a.next = t),
        e.pending = t
    }
    function Sh(e, t, a) {
        if ((a & 4194048) !== 0) {
            var i = t.lanes;
            i &= e.pendingLanes,
            a |= i,
            t.lanes = a,
            ss(e, a)
        }
    }
    var lo = {
        readContext: Ut,
        use: Wi,
        useCallback: dt,
        useContext: dt,
        useEffect: dt,
        useImperativeHandle: dt,
        useLayoutEffect: dt,
        useInsertionEffect: dt,
        useMemo: dt,
        useReducer: dt,
        useRef: dt,
        useState: dt,
        useDebugValue: dt,
        useDeferredValue: dt,
        useTransition: dt,
        useSyncExternalStore: dt,
        useId: dt,
        useHostTransitionStatus: dt,
        useFormState: dt,
        useActionState: dt,
        useOptimistic: dt,
        useMemoCache: dt,
        useCacheRefresh: dt
    }
      , Th = {
        readContext: Ut,
        use: Wi,
        useCallback: function(e, t) {
            return Kt().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: Ut,
        useEffect: sh,
        useImperativeHandle: function(e, t, a) {
            a = a != null ? a.concat([e]) : null,
            ao(4194308, 4, uh.bind(null, t, e), a)
        },
        useLayoutEffect: function(e, t) {
            return ao(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            ao(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var a = Kt();
            t = t === void 0 ? null : t;
            var i = e();
            if (In) {
                zt(!0);
                try {
                    e()
                } finally {
                    zt(!1)
                }
            }
            return a.memoizedState = [i, t],
            i
        },
        useReducer: function(e, t, a) {
            var i = Kt();
            if (a !== void 0) {
                var r = a(t);
                if (In) {
                    zt(!0);
                    try {
                        a(t)
                    } finally {
                        zt(!1)
                    }
                }
            } else
                r = t;
            return i.memoizedState = i.baseState = r,
            e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: r
            },
            i.queue = e,
            e = e.dispatch = Wv.bind(null, De, e),
            [i.memoizedState, e]
        },
        useRef: function(e) {
            var t = Kt();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: function(e) {
            e = lu(e);
            var t = e.queue
              , a = xh.bind(null, De, t);
            return t.dispatch = a,
            [e.memoizedState, a]
        },
        useDebugValue: iu,
        useDeferredValue: function(e, t) {
            var a = Kt();
            return ou(a, e, t)
        },
        useTransition: function() {
            var e = lu(!1);
            return e = mh.bind(null, De, e.queue, !0, !1),
            Kt().memoizedState = e,
            [!1, e]
        },
        useSyncExternalStore: function(e, t, a) {
            var i = De
              , r = Kt();
            if (Ye) {
                if (a === void 0)
                    throw Error(o(407));
                a = a()
            } else {
                if (a = t(),
                $e === null)
                    throw Error(o(349));
                (Le & 124) !== 0 || Yd(i, t, a)
            }
            r.memoizedState = a;
            var u = {
                value: a,
                getSnapshot: t
            };
            return r.queue = u,
            sh(Xd.bind(null, i, u, e), [e]),
            i.flags |= 2048,
            Ml(9, to(), Gd.bind(null, i, u, a, t), null),
            a
        },
        useId: function() {
            var e = Kt()
              , t = $e.identifierPrefix;
            if (Ye) {
                var a = Za
                  , i = Ka;
                a = (i & ~(1 << 32 - pt(i) - 1)).toString(32) + a,
                t = "«" + t + "R" + a,
                a = $i++,
                0 < a && (t += "H" + a.toString(32)),
                t += "»"
            } else
                a = Zv++,
                t = "«" + t + "r" + a.toString(32) + "»";
            return e.memoizedState = t
        },
        useHostTransitionStatus: uu,
        useFormState: eh,
        useActionState: eh,
        useOptimistic: function(e) {
            var t = Kt();
            t.memoizedState = t.baseState = e;
            var a = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = a,
            t = cu.bind(null, De, !0, a),
            a.dispatch = t,
            [e, t]
        },
        useMemoCache: tu,
        useCacheRefresh: function() {
            return Kt().memoizedState = $v.bind(null, De)
        }
    }
      , jh = {
        readContext: Ut,
        use: Wi,
        useCallback: fh,
        useContext: Ut,
        useEffect: ih,
        useImperativeHandle: ch,
        useInsertionEffect: oh,
        useLayoutEffect: rh,
        useMemo: dh,
        useReducer: eo,
        useRef: lh,
        useState: function() {
            return eo(Ja)
        },
        useDebugValue: iu,
        useDeferredValue: function(e, t) {
            var a = vt();
            return hh(a, Ke.memoizedState, e, t)
        },
        useTransition: function() {
            var e = eo(Ja)[0]
              , t = vt().memoizedState;
            return [typeof e == "boolean" ? e : Ms(e), t]
        },
        useSyncExternalStore: qd,
        useId: yh,
        useHostTransitionStatus: uu,
        useFormState: th,
        useActionState: th,
        useOptimistic: function(e, t) {
            var a = vt();
            return Qd(a, Ke, e, t)
        },
        useMemoCache: tu,
        useCacheRefresh: vh
    }
      , ex = {
        readContext: Ut,
        use: Wi,
        useCallback: fh,
        useContext: Ut,
        useEffect: ih,
        useImperativeHandle: ch,
        useInsertionEffect: oh,
        useLayoutEffect: rh,
        useMemo: dh,
        useReducer: nu,
        useRef: lh,
        useState: function() {
            return nu(Ja)
        },
        useDebugValue: iu,
        useDeferredValue: function(e, t) {
            var a = vt();
            return Ke === null ? ou(a, e, t) : hh(a, Ke.memoizedState, e, t)
        },
        useTransition: function() {
            var e = nu(Ja)[0]
              , t = vt().memoizedState;
            return [typeof e == "boolean" ? e : Ms(e), t]
        },
        useSyncExternalStore: qd,
        useId: yh,
        useHostTransitionStatus: uu,
        useFormState: nh,
        useActionState: nh,
        useOptimistic: function(e, t) {
            var a = vt();
            return Ke !== null ? Qd(a, Ke, e, t) : (a.baseState = e,
            [e, a.queue.dispatch])
        },
        useMemoCache: tu,
        useCacheRefresh: vh
    }
      , Ol = null
      , Vs = 0;
    function so(e) {
        var t = Vs;
        return Vs += 1,
        Ol === null && (Ol = []),
        Vd(Ol, e, t)
    }
    function zs(e, t) {
        t = t.props.ref,
        e.ref = t !== void 0 ? t : null
    }
    function io(e, t) {
        throw t.$$typeof === x ? Error(o(525)) : (e = Object.prototype.toString.call(t),
        Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }
    function wh(e) {
        var t = e._init;
        return t(e._payload)
    }
    function Ah(e) {
        function t(_, E) {
            if (e) {
                var V = _.deletions;
                V === null ? (_.deletions = [E],
                _.flags |= 16) : V.push(E)
            }
        }
        function a(_, E) {
            if (!e)
                return null;
            for (; E !== null; )
                t(_, E),
                E = E.sibling;
            return null
        }
        function i(_) {
            for (var E = new Map; _ !== null; )
                _.key !== null ? E.set(_.key, _) : E.set(_.index, _),
                _ = _.sibling;
            return E
        }
        function r(_, E) {
            return _ = Xa(_, E),
            _.index = 0,
            _.sibling = null,
            _
        }
        function u(_, E, V) {
            return _.index = V,
            e ? (V = _.alternate,
            V !== null ? (V = V.index,
            V < E ? (_.flags |= 67108866,
            E) : V) : (_.flags |= 67108866,
            E)) : (_.flags |= 1048576,
            E)
        }
        function y(_) {
            return e && _.alternate === null && (_.flags |= 67108866),
            _
        }
        function b(_, E, V, I) {
            return E === null || E.tag !== 6 ? (E = Mr(V, _.mode, I),
            E.return = _,
            E) : (E = r(E, V),
            E.return = _,
            E)
        }
        function A(_, E, V, I) {
            var ue = V.type;
            return ue === C ? Q(_, E, V.props.children, I, V.key) : E !== null && (E.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === J && wh(ue) === E.type) ? (E = r(E, V.props),
            zs(E, V),
            E.return = _,
            E) : (E = qi(V.type, V.key, V.props, null, _.mode, I),
            zs(E, V),
            E.return = _,
            E)
        }
        function z(_, E, V, I) {
            return E === null || E.tag !== 4 || E.stateNode.containerInfo !== V.containerInfo || E.stateNode.implementation !== V.implementation ? (E = Or(V, _.mode, I),
            E.return = _,
            E) : (E = r(E, V.children || []),
            E.return = _,
            E)
        }
        function Q(_, E, V, I, ue) {
            return E === null || E.tag !== 7 ? (E = Yn(V, _.mode, I, ue),
            E.return = _,
            E) : (E = r(E, V),
            E.return = _,
            E)
        }
        function W(_, E, V) {
            if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
                return E = Mr("" + E, _.mode, V),
                E.return = _,
                E;
            if (typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                case S:
                    return V = qi(E.type, E.key, E.props, null, _.mode, V),
                    zs(V, E),
                    V.return = _,
                    V;
                case w:
                    return E = Or(E, _.mode, V),
                    E.return = _,
                    E;
                case J:
                    var I = E._init;
                    return E = I(E._payload),
                    W(_, E, V)
                }
                if (H(E) || de(E))
                    return E = Yn(E, _.mode, V, null),
                    E.return = _,
                    E;
                if (typeof E.then == "function")
                    return W(_, so(E), V);
                if (E.$$typeof === B)
                    return W(_, Ki(_, E), V);
                io(_, E)
            }
            return null
        }
        function P(_, E, V, I) {
            var ue = E !== null ? E.key : null;
            if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint")
                return ue !== null ? null : b(_, E, "" + V, I);
            if (typeof V == "object" && V !== null) {
                switch (V.$$typeof) {
                case S:
                    return V.key === ue ? A(_, E, V, I) : null;
                case w:
                    return V.key === ue ? z(_, E, V, I) : null;
                case J:
                    return ue = V._init,
                    V = ue(V._payload),
                    P(_, E, V, I)
                }
                if (H(V) || de(V))
                    return ue !== null ? null : Q(_, E, V, I, null);
                if (typeof V.then == "function")
                    return P(_, E, so(V), I);
                if (V.$$typeof === B)
                    return P(_, E, Ki(_, V), I);
                io(_, V)
            }
            return null
        }
        function Y(_, E, V, I, ue) {
            if (typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint")
                return _ = _.get(V) || null,
                b(E, _, "" + I, ue);
            if (typeof I == "object" && I !== null) {
                switch (I.$$typeof) {
                case S:
                    return _ = _.get(I.key === null ? V : I.key) || null,
                    A(E, _, I, ue);
                case w:
                    return _ = _.get(I.key === null ? V : I.key) || null,
                    z(E, _, I, ue);
                case J:
                    var Oe = I._init;
                    return I = Oe(I._payload),
                    Y(_, E, V, I, ue)
                }
                if (H(I) || de(I))
                    return _ = _.get(V) || null,
                    Q(E, _, I, ue, null);
                if (typeof I.then == "function")
                    return Y(_, E, V, so(I), ue);
                if (I.$$typeof === B)
                    return Y(_, E, V, Ki(E, I), ue);
                io(E, I)
            }
            return null
        }
        function Te(_, E, V, I) {
            for (var ue = null, Oe = null, me = E, Se = E = 0, Nt = null; me !== null && Se < V.length; Se++) {
                me.index > Se ? (Nt = me,
                me = null) : Nt = me.sibling;
                var qe = P(_, me, V[Se], I);
                if (qe === null) {
                    me === null && (me = Nt);
                    break
                }
                e && me && qe.alternate === null && t(_, me),
                E = u(qe, E, Se),
                Oe === null ? ue = qe : Oe.sibling = qe,
                Oe = qe,
                me = Nt
            }
            if (Se === V.length)
                return a(_, me),
                Ye && Xn(_, Se),
                ue;
            if (me === null) {
                for (; Se < V.length; Se++)
                    me = W(_, V[Se], I),
                    me !== null && (E = u(me, E, Se),
                    Oe === null ? ue = me : Oe.sibling = me,
                    Oe = me);
                return Ye && Xn(_, Se),
                ue
            }
            for (me = i(me); Se < V.length; Se++)
                Nt = Y(me, _, Se, V[Se], I),
                Nt !== null && (e && Nt.alternate !== null && me.delete(Nt.key === null ? Se : Nt.key),
                E = u(Nt, E, Se),
                Oe === null ? ue = Nt : Oe.sibling = Nt,
                Oe = Nt);
            return e && me.forEach(function(Mn) {
                return t(_, Mn)
            }),
            Ye && Xn(_, Se),
            ue
        }
        function ye(_, E, V, I) {
            if (V == null)
                throw Error(o(151));
            for (var ue = null, Oe = null, me = E, Se = E = 0, Nt = null, qe = V.next(); me !== null && !qe.done; Se++,
            qe = V.next()) {
                me.index > Se ? (Nt = me,
                me = null) : Nt = me.sibling;
                var Mn = P(_, me, qe.value, I);
                if (Mn === null) {
                    me === null && (me = Nt);
                    break
                }
                e && me && Mn.alternate === null && t(_, me),
                E = u(Mn, E, Se),
                Oe === null ? ue = Mn : Oe.sibling = Mn,
                Oe = Mn,
                me = Nt
            }
            if (qe.done)
                return a(_, me),
                Ye && Xn(_, Se),
                ue;
            if (me === null) {
                for (; !qe.done; Se++,
                qe = V.next())
                    qe = W(_, qe.value, I),
                    qe !== null && (E = u(qe, E, Se),
                    Oe === null ? ue = qe : Oe.sibling = qe,
                    Oe = qe);
                return Ye && Xn(_, Se),
                ue
            }
            for (me = i(me); !qe.done; Se++,
            qe = V.next())
                qe = Y(me, _, Se, qe.value, I),
                qe !== null && (e && qe.alternate !== null && me.delete(qe.key === null ? Se : qe.key),
                E = u(qe, E, Se),
                Oe === null ? ue = qe : Oe.sibling = qe,
                Oe = qe);
            return e && me.forEach(function(tb) {
                return t(_, tb)
            }),
            Ye && Xn(_, Se),
            ue
        }
        function Qe(_, E, V, I) {
            if (typeof V == "object" && V !== null && V.type === C && V.key === null && (V = V.props.children),
            typeof V == "object" && V !== null) {
                switch (V.$$typeof) {
                case S:
                    e: {
                        for (var ue = V.key; E !== null; ) {
                            if (E.key === ue) {
                                if (ue = V.type,
                                ue === C) {
                                    if (E.tag === 7) {
                                        a(_, E.sibling),
                                        I = r(E, V.props.children),
                                        I.return = _,
                                        _ = I;
                                        break e
                                    }
                                } else if (E.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === J && wh(ue) === E.type) {
                                    a(_, E.sibling),
                                    I = r(E, V.props),
                                    zs(I, V),
                                    I.return = _,
                                    _ = I;
                                    break e
                                }
                                a(_, E);
                                break
                            } else
                                t(_, E);
                            E = E.sibling
                        }
                        V.type === C ? (I = Yn(V.props.children, _.mode, I, V.key),
                        I.return = _,
                        _ = I) : (I = qi(V.type, V.key, V.props, null, _.mode, I),
                        zs(I, V),
                        I.return = _,
                        _ = I)
                    }
                    return y(_);
                case w:
                    e: {
                        for (ue = V.key; E !== null; ) {
                            if (E.key === ue)
                                if (E.tag === 4 && E.stateNode.containerInfo === V.containerInfo && E.stateNode.implementation === V.implementation) {
                                    a(_, E.sibling),
                                    I = r(E, V.children || []),
                                    I.return = _,
                                    _ = I;
                                    break e
                                } else {
                                    a(_, E);
                                    break
                                }
                            else
                                t(_, E);
                            E = E.sibling
                        }
                        I = Or(V, _.mode, I),
                        I.return = _,
                        _ = I
                    }
                    return y(_);
                case J:
                    return ue = V._init,
                    V = ue(V._payload),
                    Qe(_, E, V, I)
                }
                if (H(V))
                    return Te(_, E, V, I);
                if (de(V)) {
                    if (ue = de(V),
                    typeof ue != "function")
                        throw Error(o(150));
                    return V = ue.call(V),
                    ye(_, E, V, I)
                }
                if (typeof V.then == "function")
                    return Qe(_, E, so(V), I);
                if (V.$$typeof === B)
                    return Qe(_, E, Ki(_, V), I);
                io(_, V)
            }
            return typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint" ? (V = "" + V,
            E !== null && E.tag === 6 ? (a(_, E.sibling),
            I = r(E, V),
            I.return = _,
            _ = I) : (a(_, E),
            I = Mr(V, _.mode, I),
            I.return = _,
            _ = I),
            y(_)) : a(_, E)
        }
        return function(_, E, V, I) {
            try {
                Vs = 0;
                var ue = Qe(_, E, V, I);
                return Ol = null,
                ue
            } catch (me) {
                if (me === As || me === Qi)
                    throw me;
                var Oe = $t(29, me, null, _.mode);
                return Oe.lanes = I,
                Oe.return = _,
                Oe
            } finally {}
        }
    }
    var Rl = Ah(!0)
      , Nh = Ah(!1)
      , ha = k(null)
      , Ma = null;
    function gn(e) {
        var t = e.alternate;
        K(jt, jt.current & 1),
        K(ha, e),
        Ma === null && (t === null || Cl.current !== null || t.memoizedState !== null) && (Ma = e)
    }
    function Eh(e) {
        if (e.tag === 22) {
            if (K(jt, jt.current),
            K(ha, e),
            Ma === null) {
                var t = e.alternate;
                t !== null && t.memoizedState !== null && (Ma = e)
            }
        } else
            yn()
    }
    function yn() {
        K(jt, jt.current),
        K(ha, ha.current)
    }
    function Ia(e) {
        X(ha),
        Ma === e && (Ma = null),
        X(jt)
    }
    var jt = k(0);
    function oo(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var a = t.memoizedState;
                if (a !== null && (a = a.dehydrated,
                a === null || a.data === "$?" || ec(a)))
                    return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    function fu(e, t, a, i) {
        t = e.memoizedState,
        a = a(i, t),
        a = a == null ? t : v({}, t, a),
        e.memoizedState = a,
        e.lanes === 0 && (e.updateQueue.baseState = a)
    }
    var du = {
        enqueueSetState: function(e, t, a) {
            e = e._reactInternals;
            var i = aa()
              , r = hn(i);
            r.payload = t,
            a != null && (r.callback = a),
            t = mn(e, r, i),
            t !== null && (na(t, e, i),
            Es(t, e, i))
        },
        enqueueReplaceState: function(e, t, a) {
            e = e._reactInternals;
            var i = aa()
              , r = hn(i);
            r.tag = 1,
            r.payload = t,
            a != null && (r.callback = a),
            t = mn(e, r, i),
            t !== null && (na(t, e, i),
            Es(t, e, i))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var a = aa()
              , i = hn(a);
            i.tag = 2,
            t != null && (i.callback = t),
            t = mn(e, i, a),
            t !== null && (na(t, e, a),
            Es(t, e, a))
        }
    };
    function Ch(e, t, a, i, r, u, y) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, u, y) : t.prototype && t.prototype.isPureReactComponent ? !ys(a, i) || !ys(r, u) : !0
    }
    function Dh(e, t, a, i) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i),
        t.state !== e && du.enqueueReplaceState(t, t.state, null)
    }
    function $n(e, t) {
        var a = t;
        if ("ref"in t) {
            a = {};
            for (var i in t)
                i !== "ref" && (a[i] = t[i])
        }
        if (e = e.defaultProps) {
            a === t && (a = v({}, a));
            for (var r in e)
                a[r] === void 0 && (a[r] = e[r])
        }
        return a
    }
    var ro = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    }
    ;
    function _h(e) {
        ro(e)
    }
    function Mh(e) {
        console.error(e)
    }
    function Oh(e) {
        ro(e)
    }
    function uo(e, t) {
        try {
            var a = e.onUncaughtError;
            a(t.value, {
                componentStack: t.stack
            })
        } catch (i) {
            setTimeout(function() {
                throw i
            })
        }
    }
    function Rh(e, t, a) {
        try {
            var i = e.onCaughtError;
            i(a.value, {
                componentStack: a.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (r) {
            setTimeout(function() {
                throw r
            })
        }
    }
    function hu(e, t, a) {
        return a = hn(a),
        a.tag = 3,
        a.payload = {
            element: null
        },
        a.callback = function() {
            uo(e, t)
        }
        ,
        a
    }
    function Vh(e) {
        return e = hn(e),
        e.tag = 3,
        e
    }
    function zh(e, t, a, i) {
        var r = a.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var u = i.value;
            e.payload = function() {
                return r(u)
            }
            ,
            e.callback = function() {
                Rh(t, a, i)
            }
        }
        var y = a.stateNode;
        y !== null && typeof y.componentDidCatch == "function" && (e.callback = function() {
            Rh(t, a, i),
            typeof r != "function" && (jn === null ? jn = new Set([this]) : jn.add(this));
            var b = i.stack;
            this.componentDidCatch(i.value, {
                componentStack: b !== null ? b : ""
            })
        }
        )
    }
    function tx(e, t, a, i, r) {
        if (a.flags |= 32768,
        i !== null && typeof i == "object" && typeof i.then == "function") {
            if (t = a.alternate,
            t !== null && Ts(t, a, r, !0),
            a = ha.current,
            a !== null) {
                switch (a.tag) {
                case 13:
                    return Ma === null ? Bu() : a.alternate === null && rt === 0 && (rt = 3),
                    a.flags &= -257,
                    a.flags |= 65536,
                    a.lanes = r,
                    i === qr ? a.flags |= 16384 : (t = a.updateQueue,
                    t === null ? a.updateQueue = new Set([i]) : t.add(i),
                    ku(e, i, r)),
                    !1;
                case 22:
                    return a.flags |= 65536,
                    i === qr ? a.flags |= 16384 : (t = a.updateQueue,
                    t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([i])
                    },
                    a.updateQueue = t) : (a = t.retryQueue,
                    a === null ? t.retryQueue = new Set([i]) : a.add(i)),
                    ku(e, i, r)),
                    !1
                }
                throw Error(o(435, a.tag))
            }
            return ku(e, i, r),
            Bu(),
            !1
        }
        if (Ye)
            return t = ha.current,
            t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            t.flags |= 65536,
            t.lanes = r,
            i !== zr && (e = Error(o(422), {
                cause: i
            }),
            Ss(ua(e, a)))) : (i !== zr && (t = Error(o(423), {
                cause: i
            }),
            Ss(ua(t, a))),
            e = e.current.alternate,
            e.flags |= 65536,
            r &= -r,
            e.lanes |= r,
            i = ua(i, a),
            r = hu(e.stateNode, i, r),
            Xr(e, r),
            rt !== 4 && (rt = 2)),
            !1;
        var u = Error(o(520), {
            cause: i
        });
        if (u = ua(u, a),
        qs === null ? qs = [u] : qs.push(u),
        rt !== 4 && (rt = 2),
        t === null)
            return !0;
        i = ua(i, a),
        a = t;
        do {
            switch (a.tag) {
            case 3:
                return a.flags |= 65536,
                e = r & -r,
                a.lanes |= e,
                e = hu(a.stateNode, i, e),
                Xr(a, e),
                !1;
            case 1:
                if (t = a.type,
                u = a.stateNode,
                (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (jn === null || !jn.has(u))))
                    return a.flags |= 65536,
                    r &= -r,
                    a.lanes |= r,
                    r = Vh(r),
                    zh(r, e, a, i),
                    Xr(a, r),
                    !1
            }
            a = a.return
        } while (a !== null);
        return !1
    }
    var Uh = Error(o(461))
      , wt = !1;
    function Dt(e, t, a, i) {
        t.child = e === null ? Nh(t, null, a, i) : Rl(t, e.child, a, i)
    }
    function Bh(e, t, a, i, r) {
        a = a.render;
        var u = t.ref;
        if ("ref"in i) {
            var y = {};
            for (var b in i)
                b !== "ref" && (y[b] = i[b])
        } else
            y = i;
        return Fn(t),
        i = Jr(e, t, a, y, u, r),
        b = Ir(),
        e !== null && !wt ? ($r(e, t, r),
        $a(e, t, r)) : (Ye && b && Rr(t),
        t.flags |= 1,
        Dt(e, t, i, r),
        t.child)
    }
    function Lh(e, t, a, i, r) {
        if (e === null) {
            var u = a.type;
            return typeof u == "function" && !_r(u) && u.defaultProps === void 0 && a.compare === null ? (t.tag = 15,
            t.type = u,
            kh(e, t, u, i, r)) : (e = qi(a.type, null, i, t, t.mode, r),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (u = e.child,
        !Su(e, r)) {
            var y = u.memoizedProps;
            if (a = a.compare,
            a = a !== null ? a : ys,
            a(y, i) && e.ref === t.ref)
                return $a(e, t, r)
        }
        return t.flags |= 1,
        e = Xa(u, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function kh(e, t, a, i, r) {
        if (e !== null) {
            var u = e.memoizedProps;
            if (ys(u, i) && e.ref === t.ref)
                if (wt = !1,
                t.pendingProps = i = u,
                Su(e, r))
                    (e.flags & 131072) !== 0 && (wt = !0);
                else
                    return t.lanes = e.lanes,
                    $a(e, t, r)
        }
        return mu(e, t, a, i, r)
    }
    function Hh(e, t, a) {
        var i = t.pendingProps
          , r = i.children
          , u = e !== null ? e.memoizedState : null;
        if (i.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (i = u !== null ? u.baseLanes | a : a,
                e !== null) {
                    for (r = t.child = e.child,
                    u = 0; r !== null; )
                        u = u | r.lanes | r.childLanes,
                        r = r.sibling;
                    t.childLanes = u & ~i
                } else
                    t.childLanes = 0,
                    t.child = null;
                return Ph(e, t, i, a)
            }
            if ((a & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                e !== null && Zi(t, u !== null ? u.cachePool : null),
                u !== null ? kd(t, u) : Zr(),
                Eh(t);
            else
                return t.lanes = t.childLanes = 536870912,
                Ph(e, t, u !== null ? u.baseLanes | a : a, a)
        } else
            u !== null ? (Zi(t, u.cachePool),
            kd(t, u),
            yn(),
            t.memoizedState = null) : (e !== null && Zi(t, null),
            Zr(),
            yn());
        return Dt(e, t, r, a),
        t.child
    }
    function Ph(e, t, a, i) {
        var r = Pr();
        return r = r === null ? null : {
            parent: Tt._currentValue,
            pool: r
        },
        t.memoizedState = {
            baseLanes: a,
            cachePool: r
        },
        e !== null && Zi(t, null),
        Zr(),
        Eh(t),
        e !== null && Ts(e, t, i, !0),
        null
    }
    function co(e, t) {
        var a = t.ref;
        if (a === null)
            e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof a != "function" && typeof a != "object")
                throw Error(o(284));
            (e === null || e.ref !== a) && (t.flags |= 4194816)
        }
    }
    function mu(e, t, a, i, r) {
        return Fn(t),
        a = Jr(e, t, a, i, void 0, r),
        i = Ir(),
        e !== null && !wt ? ($r(e, t, r),
        $a(e, t, r)) : (Ye && i && Rr(t),
        t.flags |= 1,
        Dt(e, t, a, r),
        t.child)
    }
    function qh(e, t, a, i, r, u) {
        return Fn(t),
        t.updateQueue = null,
        a = Pd(t, i, a, r),
        Hd(e),
        i = Ir(),
        e !== null && !wt ? ($r(e, t, u),
        $a(e, t, u)) : (Ye && i && Rr(t),
        t.flags |= 1,
        Dt(e, t, a, u),
        t.child)
    }
    function Yh(e, t, a, i, r) {
        if (Fn(t),
        t.stateNode === null) {
            var u = jl
              , y = a.contextType;
            typeof y == "object" && y !== null && (u = Ut(y)),
            u = new a(i,u),
            t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null,
            u.updater = du,
            t.stateNode = u,
            u._reactInternals = t,
            u = t.stateNode,
            u.props = i,
            u.state = t.memoizedState,
            u.refs = {},
            Yr(t),
            y = a.contextType,
            u.context = typeof y == "object" && y !== null ? Ut(y) : jl,
            u.state = t.memoizedState,
            y = a.getDerivedStateFromProps,
            typeof y == "function" && (fu(t, a, y, i),
            u.state = t.memoizedState),
            typeof a.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (y = u.state,
            typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(),
            y !== u.state && du.enqueueReplaceState(u, u.state, null),
            Ds(t, i, u, r),
            Cs(),
            u.state = t.memoizedState),
            typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            i = !0
        } else if (e === null) {
            u = t.stateNode;
            var b = t.memoizedProps
              , A = $n(a, b);
            u.props = A;
            var z = u.context
              , Q = a.contextType;
            y = jl,
            typeof Q == "object" && Q !== null && (y = Ut(Q));
            var W = a.getDerivedStateFromProps;
            Q = typeof W == "function" || typeof u.getSnapshotBeforeUpdate == "function",
            b = t.pendingProps !== b,
            Q || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (b || z !== y) && Dh(t, u, i, y),
            dn = !1;
            var P = t.memoizedState;
            u.state = P,
            Ds(t, i, u, r),
            Cs(),
            z = t.memoizedState,
            b || P !== z || dn ? (typeof W == "function" && (fu(t, a, W, i),
            z = t.memoizedState),
            (A = dn || Ch(t, a, A, i, P, z, y)) ? (Q || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()),
            typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = i,
            t.memoizedState = z),
            u.props = i,
            u.state = z,
            u.context = y,
            i = A) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            i = !1)
        } else {
            u = t.stateNode,
            Gr(e, t),
            y = t.memoizedProps,
            Q = $n(a, y),
            u.props = Q,
            W = t.pendingProps,
            P = u.context,
            z = a.contextType,
            A = jl,
            typeof z == "object" && z !== null && (A = Ut(z)),
            b = a.getDerivedStateFromProps,
            (z = typeof b == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (y !== W || P !== A) && Dh(t, u, i, A),
            dn = !1,
            P = t.memoizedState,
            u.state = P,
            Ds(t, i, u, r),
            Cs();
            var Y = t.memoizedState;
            y !== W || P !== Y || dn || e !== null && e.dependencies !== null && Xi(e.dependencies) ? (typeof b == "function" && (fu(t, a, b, i),
            Y = t.memoizedState),
            (Q = dn || Ch(t, a, Q, i, P, Y, A) || e !== null && e.dependencies !== null && Xi(e.dependencies)) ? (z || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(i, Y, A),
            typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(i, Y, A)),
            typeof u.componentDidUpdate == "function" && (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || y === e.memoizedProps && P === e.memoizedState || (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && P === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = i,
            t.memoizedState = Y),
            u.props = i,
            u.state = Y,
            u.context = A,
            i = Q) : (typeof u.componentDidUpdate != "function" || y === e.memoizedProps && P === e.memoizedState || (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && P === e.memoizedState || (t.flags |= 1024),
            i = !1)
        }
        return u = i,
        co(e, t),
        i = (t.flags & 128) !== 0,
        u || i ? (u = t.stateNode,
        a = i && typeof a.getDerivedStateFromError != "function" ? null : u.render(),
        t.flags |= 1,
        e !== null && i ? (t.child = Rl(t, e.child, null, r),
        t.child = Rl(t, null, a, r)) : Dt(e, t, a, r),
        t.memoizedState = u.state,
        e = t.child) : e = $a(e, t, r),
        e
    }
    function Gh(e, t, a, i) {
        return bs(),
        t.flags |= 256,
        Dt(e, t, a, i),
        t.child
    }
    var pu = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function gu(e) {
        return {
            baseLanes: e,
            cachePool: Md()
        }
    }
    function yu(e, t, a) {
        return e = e !== null ? e.childLanes & ~a : 0,
        t && (e |= ma),
        e
    }
    function Xh(e, t, a) {
        var i = t.pendingProps, r = !1, u = (t.flags & 128) !== 0, y;
        if ((y = u) || (y = e !== null && e.memoizedState === null ? !1 : (jt.current & 2) !== 0),
        y && (r = !0,
        t.flags &= -129),
        y = (t.flags & 32) !== 0,
        t.flags &= -33,
        e === null) {
            if (Ye) {
                if (r ? gn(t) : yn(),
                Ye) {
                    var b = ot, A;
                    if (A = b) {
                        e: {
                            for (A = b,
                            b = _a; A.nodeType !== 8; ) {
                                if (!b) {
                                    b = null;
                                    break e
                                }
                                if (A = Aa(A.nextSibling),
                                A === null) {
                                    b = null;
                                    break e
                                }
                            }
                            b = A
                        }
                        b !== null ? (t.memoizedState = {
                            dehydrated: b,
                            treeContext: Gn !== null ? {
                                id: Ka,
                                overflow: Za
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        },
                        A = $t(18, null, null, 0),
                        A.stateNode = b,
                        A.return = t,
                        t.child = A,
                        kt = t,
                        ot = null,
                        A = !0) : A = !1
                    }
                    A || Zn(t)
                }
                if (b = t.memoizedState,
                b !== null && (b = b.dehydrated,
                b !== null))
                    return ec(b) ? t.lanes = 32 : t.lanes = 536870912,
                    null;
                Ia(t)
            }
            return b = i.children,
            i = i.fallback,
            r ? (yn(),
            r = t.mode,
            b = fo({
                mode: "hidden",
                children: b
            }, r),
            i = Yn(i, r, a, null),
            b.return = t,
            i.return = t,
            b.sibling = i,
            t.child = b,
            r = t.child,
            r.memoizedState = gu(a),
            r.childLanes = yu(e, y, a),
            t.memoizedState = pu,
            i) : (gn(t),
            vu(t, b))
        }
        if (A = e.memoizedState,
        A !== null && (b = A.dehydrated,
        b !== null)) {
            if (u)
                t.flags & 256 ? (gn(t),
                t.flags &= -257,
                t = xu(e, t, a)) : t.memoizedState !== null ? (yn(),
                t.child = e.child,
                t.flags |= 128,
                t = null) : (yn(),
                r = i.fallback,
                b = t.mode,
                i = fo({
                    mode: "visible",
                    children: i.children
                }, b),
                r = Yn(r, b, a, null),
                r.flags |= 2,
                i.return = t,
                r.return = t,
                i.sibling = r,
                t.child = i,
                Rl(t, e.child, null, a),
                i = t.child,
                i.memoizedState = gu(a),
                i.childLanes = yu(e, y, a),
                t.memoizedState = pu,
                t = r);
            else if (gn(t),
            ec(b)) {
                if (y = b.nextSibling && b.nextSibling.dataset,
                y)
                    var z = y.dgst;
                y = z,
                i = Error(o(419)),
                i.stack = "",
                i.digest = y,
                Ss({
                    value: i,
                    source: null,
                    stack: null
                }),
                t = xu(e, t, a)
            } else if (wt || Ts(e, t, a, !1),
            y = (a & e.childLanes) !== 0,
            wt || y) {
                if (y = $e,
                y !== null && (i = a & -a,
                i = (i & 42) !== 0 ? 1 : ul(i),
                i = (i & (y.suspendedLanes | a)) !== 0 ? 0 : i,
                i !== 0 && i !== A.retryLane))
                    throw A.retryLane = i,
                    Tl(e, i),
                    na(y, e, i),
                    Uh;
                b.data === "$?" || Bu(),
                t = xu(e, t, a)
            } else
                b.data === "$?" ? (t.flags |= 192,
                t.child = e.child,
                t = null) : (e = A.treeContext,
                ot = Aa(b.nextSibling),
                kt = t,
                Ye = !0,
                Kn = null,
                _a = !1,
                e !== null && (fa[da++] = Ka,
                fa[da++] = Za,
                fa[da++] = Gn,
                Ka = e.id,
                Za = e.overflow,
                Gn = t),
                t = vu(t, i.children),
                t.flags |= 4096);
            return t
        }
        return r ? (yn(),
        r = i.fallback,
        b = t.mode,
        A = e.child,
        z = A.sibling,
        i = Xa(A, {
            mode: "hidden",
            children: i.children
        }),
        i.subtreeFlags = A.subtreeFlags & 65011712,
        z !== null ? r = Xa(z, r) : (r = Yn(r, b, a, null),
        r.flags |= 2),
        r.return = t,
        i.return = t,
        i.sibling = r,
        t.child = i,
        i = r,
        r = t.child,
        b = e.child.memoizedState,
        b === null ? b = gu(a) : (A = b.cachePool,
        A !== null ? (z = Tt._currentValue,
        A = A.parent !== z ? {
            parent: z,
            pool: z
        } : A) : A = Md(),
        b = {
            baseLanes: b.baseLanes | a,
            cachePool: A
        }),
        r.memoizedState = b,
        r.childLanes = yu(e, y, a),
        t.memoizedState = pu,
        i) : (gn(t),
        a = e.child,
        e = a.sibling,
        a = Xa(a, {
            mode: "visible",
            children: i.children
        }),
        a.return = t,
        a.sibling = null,
        e !== null && (y = t.deletions,
        y === null ? (t.deletions = [e],
        t.flags |= 16) : y.push(e)),
        t.child = a,
        t.memoizedState = null,
        a)
    }
    function vu(e, t) {
        return t = fo({
            mode: "visible",
            children: t
        }, e.mode),
        t.return = e,
        e.child = t
    }
    function fo(e, t) {
        return e = $t(22, e, null, t),
        e.lanes = 0,
        e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        },
        e
    }
    function xu(e, t, a) {
        return Rl(t, e.child, null, a),
        e = vu(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function Kh(e, t, a) {
        e.lanes |= t;
        var i = e.alternate;
        i !== null && (i.lanes |= t),
        Br(e.return, t, a)
    }
    function bu(e, t, a, i, r) {
        var u = e.memoizedState;
        u === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: i,
            tail: a,
            tailMode: r
        } : (u.isBackwards = t,
        u.rendering = null,
        u.renderingStartTime = 0,
        u.last = i,
        u.tail = a,
        u.tailMode = r)
    }
    function Zh(e, t, a) {
        var i = t.pendingProps
          , r = i.revealOrder
          , u = i.tail;
        if (Dt(e, t, i.children, a),
        i = jt.current,
        (i & 2) !== 0)
            i = i & 1 | 2,
            t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0)
                e: for (e = t.child; e !== null; ) {
                    if (e.tag === 13)
                        e.memoizedState !== null && Kh(e, a, t);
                    else if (e.tag === 19)
                        Kh(e, a, t);
                    else if (e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break e;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break e;
                        e = e.return
                    }
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            i &= 1
        }
        switch (K(jt, i),
        r) {
        case "forwards":
            for (a = t.child,
            r = null; a !== null; )
                e = a.alternate,
                e !== null && oo(e) === null && (r = a),
                a = a.sibling;
            a = r,
            a === null ? (r = t.child,
            t.child = null) : (r = a.sibling,
            a.sibling = null),
            bu(t, !1, r, a, u);
            break;
        case "backwards":
            for (a = null,
            r = t.child,
            t.child = null; r !== null; ) {
                if (e = r.alternate,
                e !== null && oo(e) === null) {
                    t.child = r;
                    break
                }
                e = r.sibling,
                r.sibling = a,
                a = r,
                r = e
            }
            bu(t, !0, a, null, u);
            break;
        case "together":
            bu(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
        return t.child
    }
    function $a(e, t, a) {
        if (e !== null && (t.dependencies = e.dependencies),
        Tn |= t.lanes,
        (a & t.childLanes) === 0)
            if (e !== null) {
                if (Ts(e, t, a, !1),
                (a & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (e !== null && t.child !== e.child)
            throw Error(o(153));
        if (t.child !== null) {
            for (e = t.child,
            a = Xa(e, e.pendingProps),
            t.child = a,
            a.return = t; e.sibling !== null; )
                e = e.sibling,
                a = a.sibling = Xa(e, e.pendingProps),
                a.return = t;
            a.sibling = null
        }
        return t.child
    }
    function Su(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies,
        !!(e !== null && Xi(e)))
    }
    function ax(e, t, a) {
        switch (t.tag) {
        case 3:
            ge(t, t.stateNode.containerInfo),
            fn(t, Tt, e.memoizedState.cache),
            bs();
            break;
        case 27:
        case 5:
            Be(t);
            break;
        case 4:
            ge(t, t.stateNode.containerInfo);
            break;
        case 10:
            fn(t, t.type, t.memoizedProps.value);
            break;
        case 13:
            var i = t.memoizedState;
            if (i !== null)
                return i.dehydrated !== null ? (gn(t),
                t.flags |= 128,
                null) : (a & t.child.childLanes) !== 0 ? Xh(e, t, a) : (gn(t),
                e = $a(e, t, a),
                e !== null ? e.sibling : null);
            gn(t);
            break;
        case 19:
            var r = (e.flags & 128) !== 0;
            if (i = (a & t.childLanes) !== 0,
            i || (Ts(e, t, a, !1),
            i = (a & t.childLanes) !== 0),
            r) {
                if (i)
                    return Zh(e, t, a);
                t.flags |= 128
            }
            if (r = t.memoizedState,
            r !== null && (r.rendering = null,
            r.tail = null,
            r.lastEffect = null),
            K(jt, jt.current),
            i)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
            Hh(e, t, a);
        case 24:
            fn(t, Tt, e.memoizedState.cache)
        }
        return $a(e, t, a)
    }
    function Qh(e, t, a) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
                wt = !0;
            else {
                if (!Su(e, a) && (t.flags & 128) === 0)
                    return wt = !1,
                    ax(e, t, a);
                wt = (e.flags & 131072) !== 0
            }
        else
            wt = !1,
            Ye && (t.flags & 1048576) !== 0 && wd(t, Gi, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 16:
            e: {
                e = t.pendingProps;
                var i = t.elementType
                  , r = i._init;
                if (i = r(i._payload),
                t.type = i,
                typeof i == "function")
                    _r(i) ? (e = $n(i, e),
                    t.tag = 1,
                    t = Yh(null, t, i, e, a)) : (t.tag = 0,
                    t = mu(null, t, i, e, a));
                else {
                    if (i != null) {
                        if (r = i.$$typeof,
                        r === F) {
                            t.tag = 11,
                            t = Bh(null, t, i, e, a);
                            break e
                        } else if (r === te) {
                            t.tag = 14,
                            t = Lh(null, t, i, e, a);
                            break e
                        }
                    }
                    throw t = ee(i) || i,
                    Error(o(306, t, ""))
                }
            }
            return t;
        case 0:
            return mu(e, t, t.type, t.pendingProps, a);
        case 1:
            return i = t.type,
            r = $n(i, t.pendingProps),
            Yh(e, t, i, r, a);
        case 3:
            e: {
                if (ge(t, t.stateNode.containerInfo),
                e === null)
                    throw Error(o(387));
                i = t.pendingProps;
                var u = t.memoizedState;
                r = u.element,
                Gr(e, t),
                Ds(t, i, null, a);
                var y = t.memoizedState;
                if (i = y.cache,
                fn(t, Tt, i),
                i !== u.cache && Lr(t, [Tt], a, !0),
                Cs(),
                i = y.element,
                u.isDehydrated)
                    if (u = {
                        element: i,
                        isDehydrated: !1,
                        cache: y.cache
                    },
                    t.updateQueue.baseState = u,
                    t.memoizedState = u,
                    t.flags & 256) {
                        t = Gh(e, t, i, a);
                        break e
                    } else if (i !== r) {
                        r = ua(Error(o(424)), t),
                        Ss(r),
                        t = Gh(e, t, i, a);
                        break e
                    } else {
                        switch (e = t.stateNode.containerInfo,
                        e.nodeType) {
                        case 9:
                            e = e.body;
                            break;
                        default:
                            e = e.nodeName === "HTML" ? e.ownerDocument.body : e
                        }
                        for (ot = Aa(e.firstChild),
                        kt = t,
                        Ye = !0,
                        Kn = null,
                        _a = !0,
                        a = Nh(t, null, i, a),
                        t.child = a; a; )
                            a.flags = a.flags & -3 | 4096,
                            a = a.sibling
                    }
                else {
                    if (bs(),
                    i === r) {
                        t = $a(e, t, a);
                        break e
                    }
                    Dt(e, t, i, a)
                }
                t = t.child
            }
            return t;
        case 26:
            return co(e, t),
            e === null ? (a = $m(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : Ye || (a = t.type,
            e = t.pendingProps,
            i = No(G.current).createElement(a),
            i[St] = t,
            i[Ct] = e,
            Mt(i, a, e),
            ce(i),
            t.stateNode = i) : t.memoizedState = $m(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
            null;
        case 27:
            return Be(t),
            e === null && Ye && (i = t.stateNode = Fm(t.type, t.pendingProps, G.current),
            kt = t,
            _a = !0,
            r = ot,
            Nn(t.type) ? (tc = r,
            ot = Aa(i.firstChild)) : ot = r),
            Dt(e, t, t.pendingProps.children, a),
            co(e, t),
            e === null && (t.flags |= 4194304),
            t.child;
        case 5:
            return e === null && Ye && ((r = i = ot) && (i = _x(i, t.type, t.pendingProps, _a),
            i !== null ? (t.stateNode = i,
            kt = t,
            ot = Aa(i.firstChild),
            _a = !1,
            r = !0) : r = !1),
            r || Zn(t)),
            Be(t),
            r = t.type,
            u = t.pendingProps,
            y = e !== null ? e.memoizedProps : null,
            i = u.children,
            Iu(r, u) ? i = null : y !== null && Iu(r, y) && (t.flags |= 32),
            t.memoizedState !== null && (r = Jr(e, t, Qv, null, null, a),
            Is._currentValue = r),
            co(e, t),
            Dt(e, t, i, a),
            t.child;
        case 6:
            return e === null && Ye && ((e = a = ot) && (a = Mx(a, t.pendingProps, _a),
            a !== null ? (t.stateNode = a,
            kt = t,
            ot = null,
            e = !0) : e = !1),
            e || Zn(t)),
            null;
        case 13:
            return Xh(e, t, a);
        case 4:
            return ge(t, t.stateNode.containerInfo),
            i = t.pendingProps,
            e === null ? t.child = Rl(t, null, i, a) : Dt(e, t, i, a),
            t.child;
        case 11:
            return Bh(e, t, t.type, t.pendingProps, a);
        case 7:
            return Dt(e, t, t.pendingProps, a),
            t.child;
        case 8:
            return Dt(e, t, t.pendingProps.children, a),
            t.child;
        case 12:
            return Dt(e, t, t.pendingProps.children, a),
            t.child;
        case 10:
            return i = t.pendingProps,
            fn(t, t.type, i.value),
            Dt(e, t, i.children, a),
            t.child;
        case 9:
            return r = t.type._context,
            i = t.pendingProps.children,
            Fn(t),
            r = Ut(r),
            i = i(r),
            t.flags |= 1,
            Dt(e, t, i, a),
            t.child;
        case 14:
            return Lh(e, t, t.type, t.pendingProps, a);
        case 15:
            return kh(e, t, t.type, t.pendingProps, a);
        case 19:
            return Zh(e, t, a);
        case 31:
            return i = t.pendingProps,
            a = t.mode,
            i = {
                mode: i.mode,
                children: i.children
            },
            e === null ? (a = fo(i, a),
            a.ref = t.ref,
            t.child = a,
            a.return = t,
            t = a) : (a = Xa(e.child, i),
            a.ref = t.ref,
            t.child = a,
            a.return = t,
            t = a),
            t;
        case 22:
            return Hh(e, t, a);
        case 24:
            return Fn(t),
            i = Ut(Tt),
            e === null ? (r = Pr(),
            r === null && (r = $e,
            u = kr(),
            r.pooledCache = u,
            u.refCount++,
            u !== null && (r.pooledCacheLanes |= a),
            r = u),
            t.memoizedState = {
                parent: i,
                cache: r
            },
            Yr(t),
            fn(t, Tt, r)) : ((e.lanes & a) !== 0 && (Gr(e, t),
            Ds(t, null, null, a),
            Cs()),
            r = e.memoizedState,
            u = t.memoizedState,
            r.parent !== i ? (r = {
                parent: i,
                cache: i
            },
            t.memoizedState = r,
            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = r),
            fn(t, Tt, i)) : (i = u.cache,
            fn(t, Tt, i),
            i !== r.cache && Lr(t, [Tt], a, !0))),
            Dt(e, t, t.pendingProps.children, a),
            t.child;
        case 29:
            throw t.pendingProps
        }
        throw Error(o(156, t.tag))
    }
    function Wa(e) {
        e.flags |= 4
    }
    function Fh(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            e.flags &= -16777217;
        else if (e.flags |= 16777216,
        !np(t)) {
            if (t = ha.current,
            t !== null && ((Le & 4194048) === Le ? Ma !== null : (Le & 62914560) !== Le && (Le & 536870912) === 0 || t !== Ma))
                throw Ns = qr,
                Od;
            e.flags |= 8192
        }
    }
    function ho(e, t) {
        t !== null && (e.flags |= 4),
        e.flags & 16384 && (t = e.tag !== 22 ? ne() : 536870912,
        e.lanes |= t,
        Bl |= t)
    }
    function Us(e, t) {
        if (!Ye)
            switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var a = null; t !== null; )
                    t.alternate !== null && (a = t),
                    t = t.sibling;
                a === null ? e.tail = null : a.sibling = null;
                break;
            case "collapsed":
                a = e.tail;
                for (var i = null; a !== null; )
                    a.alternate !== null && (i = a),
                    a = a.sibling;
                i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null
            }
    }
    function lt(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , a = 0
          , i = 0;
        if (t)
            for (var r = e.child; r !== null; )
                a |= r.lanes | r.childLanes,
                i |= r.subtreeFlags & 65011712,
                i |= r.flags & 65011712,
                r.return = e,
                r = r.sibling;
        else
            for (r = e.child; r !== null; )
                a |= r.lanes | r.childLanes,
                i |= r.subtreeFlags,
                i |= r.flags,
                r.return = e,
                r = r.sibling;
        return e.subtreeFlags |= i,
        e.childLanes = a,
        t
    }
    function nx(e, t, a) {
        var i = t.pendingProps;
        switch (Vr(t),
        t.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return lt(t),
            null;
        case 1:
            return lt(t),
            null;
        case 3:
            return a = t.stateNode,
            i = null,
            e !== null && (i = e.memoizedState.cache),
            t.memoizedState.cache !== i && (t.flags |= 2048),
            Fa(Tt),
            xe(),
            a.pendingContext && (a.context = a.pendingContext,
            a.pendingContext = null),
            (e === null || e.child === null) && (xs(t) ? Wa(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            Ed())),
            lt(t),
            null;
        case 26:
            return a = t.memoizedState,
            e === null ? (Wa(t),
            a !== null ? (lt(t),
            Fh(t, a)) : (lt(t),
            t.flags &= -16777217)) : a ? a !== e.memoizedState ? (Wa(t),
            lt(t),
            Fh(t, a)) : (lt(t),
            t.flags &= -16777217) : (e.memoizedProps !== i && Wa(t),
            lt(t),
            t.flags &= -16777217),
            null;
        case 27:
            _e(t),
            a = G.current;
            var r = t.type;
            if (e !== null && t.stateNode != null)
                e.memoizedProps !== i && Wa(t);
            else {
                if (!i) {
                    if (t.stateNode === null)
                        throw Error(o(166));
                    return lt(t),
                    null
                }
                e = le.current,
                xs(t) ? Ad(t) : (e = Fm(r, i, a),
                t.stateNode = e,
                Wa(t))
            }
            return lt(t),
            null;
        case 5:
            if (_e(t),
            a = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== i && Wa(t);
            else {
                if (!i) {
                    if (t.stateNode === null)
                        throw Error(o(166));
                    return lt(t),
                    null
                }
                if (e = le.current,
                xs(t))
                    Ad(t);
                else {
                    switch (r = No(G.current),
                    e) {
                    case 1:
                        e = r.createElementNS("http://www.w3.org/2000/svg", a);
                        break;
                    case 2:
                        e = r.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                        break;
                    default:
                        switch (a) {
                        case "svg":
                            e = r.createElementNS("http://www.w3.org/2000/svg", a);
                            break;
                        case "math":
                            e = r.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                            break;
                        case "script":
                            e = r.createElement("div"),
                            e.innerHTML = "<script><\/script>",
                            e = e.removeChild(e.firstChild);
                            break;
                        case "select":
                            e = typeof i.is == "string" ? r.createElement("select", {
                                is: i.is
                            }) : r.createElement("select"),
                            i.multiple ? e.multiple = !0 : i.size && (e.size = i.size);
                            break;
                        default:
                            e = typeof i.is == "string" ? r.createElement(a, {
                                is: i.is
                            }) : r.createElement(a)
                        }
                    }
                    e[St] = t,
                    e[Ct] = i;
                    e: for (r = t.child; r !== null; ) {
                        if (r.tag === 5 || r.tag === 6)
                            e.appendChild(r.stateNode);
                        else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                            r.child.return = r,
                            r = r.child;
                            continue
                        }
                        if (r === t)
                            break e;
                        for (; r.sibling === null; ) {
                            if (r.return === null || r.return === t)
                                break e;
                            r = r.return
                        }
                        r.sibling.return = r.return,
                        r = r.sibling
                    }
                    t.stateNode = e;
                    e: switch (Mt(e, a, i),
                    a) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        e = !!i.autoFocus;
                        break e;
                    case "img":
                        e = !0;
                        break e;
                    default:
                        e = !1
                    }
                    e && Wa(t)
                }
            }
            return lt(t),
            t.flags &= -16777217,
            null;
        case 6:
            if (e && t.stateNode != null)
                e.memoizedProps !== i && Wa(t);
            else {
                if (typeof i != "string" && t.stateNode === null)
                    throw Error(o(166));
                if (e = G.current,
                xs(t)) {
                    if (e = t.stateNode,
                    a = t.memoizedProps,
                    i = null,
                    r = kt,
                    r !== null)
                        switch (r.tag) {
                        case 27:
                        case 5:
                            i = r.memoizedProps
                        }
                    e[St] = t,
                    e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || qm(e.nodeValue, a)),
                    e || Zn(t)
                } else
                    e = No(e).createTextNode(i),
                    e[St] = t,
                    t.stateNode = e
            }
            return lt(t),
            null;
        case 13:
            if (i = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (r = xs(t),
                i !== null && i.dehydrated !== null) {
                    if (e === null) {
                        if (!r)
                            throw Error(o(318));
                        if (r = t.memoizedState,
                        r = r !== null ? r.dehydrated : null,
                        !r)
                            throw Error(o(317));
                        r[St] = t
                    } else
                        bs(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    lt(t),
                    r = !1
                } else
                    r = Ed(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = r),
                    r = !0;
                if (!r)
                    return t.flags & 256 ? (Ia(t),
                    t) : (Ia(t),
                    null)
            }
            if (Ia(t),
            (t.flags & 128) !== 0)
                return t.lanes = a,
                t;
            if (a = i !== null,
            e = e !== null && e.memoizedState !== null,
            a) {
                i = t.child,
                r = null,
                i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (r = i.alternate.memoizedState.cachePool.pool);
                var u = null;
                i.memoizedState !== null && i.memoizedState.cachePool !== null && (u = i.memoizedState.cachePool.pool),
                u !== r && (i.flags |= 2048)
            }
            return a !== e && a && (t.child.flags |= 8192),
            ho(t, t.updateQueue),
            lt(t),
            null;
        case 4:
            return xe(),
            e === null && Ku(t.stateNode.containerInfo),
            lt(t),
            null;
        case 10:
            return Fa(t.type),
            lt(t),
            null;
        case 19:
            if (X(jt),
            r = t.memoizedState,
            r === null)
                return lt(t),
                null;
            if (i = (t.flags & 128) !== 0,
            u = r.rendering,
            u === null)
                if (i)
                    Us(r, !1);
                else {
                    if (rt !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null; ) {
                            if (u = oo(e),
                            u !== null) {
                                for (t.flags |= 128,
                                Us(r, !1),
                                e = u.updateQueue,
                                t.updateQueue = e,
                                ho(t, e),
                                t.subtreeFlags = 0,
                                e = a,
                                a = t.child; a !== null; )
                                    jd(a, e),
                                    a = a.sibling;
                                return K(jt, jt.current & 1 | 2),
                                t.child
                            }
                            e = e.sibling
                        }
                    r.tail !== null && We() > go && (t.flags |= 128,
                    i = !0,
                    Us(r, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!i)
                    if (e = oo(u),
                    e !== null) {
                        if (t.flags |= 128,
                        i = !0,
                        e = e.updateQueue,
                        t.updateQueue = e,
                        ho(t, e),
                        Us(r, !0),
                        r.tail === null && r.tailMode === "hidden" && !u.alternate && !Ye)
                            return lt(t),
                            null
                    } else
                        2 * We() - r.renderingStartTime > go && a !== 536870912 && (t.flags |= 128,
                        i = !0,
                        Us(r, !1),
                        t.lanes = 4194304);
                r.isBackwards ? (u.sibling = t.child,
                t.child = u) : (e = r.last,
                e !== null ? e.sibling = u : t.child = u,
                r.last = u)
            }
            return r.tail !== null ? (t = r.tail,
            r.rendering = t,
            r.tail = t.sibling,
            r.renderingStartTime = We(),
            t.sibling = null,
            e = jt.current,
            K(jt, i ? e & 1 | 2 : e & 1),
            t) : (lt(t),
            null);
        case 22:
        case 23:
            return Ia(t),
            Qr(),
            i = t.memoizedState !== null,
            e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192),
            i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (lt(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : lt(t),
            a = t.updateQueue,
            a !== null && ho(t, a.retryQueue),
            a = null,
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
            i = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool),
            i !== a && (t.flags |= 2048),
            e !== null && X(Jn),
            null;
        case 24:
            return a = null,
            e !== null && (a = e.memoizedState.cache),
            t.memoizedState.cache !== a && (t.flags |= 2048),
            Fa(Tt),
            lt(t),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(o(156, t.tag))
    }
    function lx(e, t) {
        switch (Vr(t),
        t.tag) {
        case 1:
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return Fa(Tt),
            xe(),
            e = t.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 26:
        case 27:
        case 5:
            return _e(t),
            null;
        case 13:
            if (Ia(t),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(o(340));
                bs()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return X(jt),
            null;
        case 4:
            return xe(),
            null;
        case 10:
            return Fa(t.type),
            null;
        case 22:
        case 23:
            return Ia(t),
            Qr(),
            e !== null && X(Jn),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 24:
            return Fa(Tt),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function Jh(e, t) {
        switch (Vr(t),
        t.tag) {
        case 3:
            Fa(Tt),
            xe();
            break;
        case 26:
        case 27:
        case 5:
            _e(t);
            break;
        case 4:
            xe();
            break;
        case 13:
            Ia(t);
            break;
        case 19:
            X(jt);
            break;
        case 10:
            Fa(t.type);
            break;
        case 22:
        case 23:
            Ia(t),
            Qr(),
            e !== null && X(Jn);
            break;
        case 24:
            Fa(Tt)
        }
    }
    function Bs(e, t) {
        try {
            var a = t.updateQueue
              , i = a !== null ? a.lastEffect : null;
            if (i !== null) {
                var r = i.next;
                a = r;
                do {
                    if ((a.tag & e) === e) {
                        i = void 0;
                        var u = a.create
                          , y = a.inst;
                        i = u(),
                        y.destroy = i
                    }
                    a = a.next
                } while (a !== r)
            }
        } catch (b) {
            Ie(t, t.return, b)
        }
    }
    function vn(e, t, a) {
        try {
            var i = t.updateQueue
              , r = i !== null ? i.lastEffect : null;
            if (r !== null) {
                var u = r.next;
                i = u;
                do {
                    if ((i.tag & e) === e) {
                        var y = i.inst
                          , b = y.destroy;
                        if (b !== void 0) {
                            y.destroy = void 0,
                            r = t;
                            var A = a
                              , z = b;
                            try {
                                z()
                            } catch (Q) {
                                Ie(r, A, Q)
                            }
                        }
                    }
                    i = i.next
                } while (i !== u)
            }
        } catch (Q) {
            Ie(t, t.return, Q)
        }
    }
    function Ih(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var a = e.stateNode;
            try {
                Ld(t, a)
            } catch (i) {
                Ie(e, e.return, i)
            }
        }
    }
    function $h(e, t, a) {
        a.props = $n(e.type, e.memoizedProps),
        a.state = e.memoizedState;
        try {
            a.componentWillUnmount()
        } catch (i) {
            Ie(e, t, i)
        }
    }
    function Ls(e, t) {
        try {
            var a = e.ref;
            if (a !== null) {
                switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    var i = e.stateNode;
                    break;
                case 30:
                    i = e.stateNode;
                    break;
                default:
                    i = e.stateNode
                }
                typeof a == "function" ? e.refCleanup = a(i) : a.current = i
            }
        } catch (r) {
            Ie(e, t, r)
        }
    }
    function Oa(e, t) {
        var a = e.ref
          , i = e.refCleanup;
        if (a !== null)
            if (typeof i == "function")
                try {
                    i()
                } catch (r) {
                    Ie(e, t, r)
                } finally {
                    e.refCleanup = null,
                    e = e.alternate,
                    e != null && (e.refCleanup = null)
                }
            else if (typeof a == "function")
                try {
                    a(null)
                } catch (r) {
                    Ie(e, t, r)
                }
            else
                a.current = null
    }
    function Wh(e) {
        var t = e.type
          , a = e.memoizedProps
          , i = e.stateNode;
        try {
            e: switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                a.autoFocus && i.focus();
                break e;
            case "img":
                a.src ? i.src = a.src : a.srcSet && (i.srcset = a.srcSet)
            }
        } catch (r) {
            Ie(e, e.return, r)
        }
    }
    function Tu(e, t, a) {
        try {
            var i = e.stateNode;
            Ax(i, e.type, a, t),
            i[Ct] = t
        } catch (r) {
            Ie(e, e.return, r)
        }
    }
    function em(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Nn(e.type) || e.tag === 4
    }
    function ju(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || em(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.tag === 27 && Nn(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function wu(e, t, a) {
        var i = e.tag;
        if (i === 5 || i === 6)
            e = e.stateNode,
            t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a,
            t.appendChild(e),
            a = a._reactRootContainer,
            a != null || t.onclick !== null || (t.onclick = Ao));
        else if (i !== 4 && (i === 27 && Nn(e.type) && (a = e.stateNode,
        t = null),
        e = e.child,
        e !== null))
            for (wu(e, t, a),
            e = e.sibling; e !== null; )
                wu(e, t, a),
                e = e.sibling
    }
    function mo(e, t, a) {
        var i = e.tag;
        if (i === 5 || i === 6)
            e = e.stateNode,
            t ? a.insertBefore(e, t) : a.appendChild(e);
        else if (i !== 4 && (i === 27 && Nn(e.type) && (a = e.stateNode),
        e = e.child,
        e !== null))
            for (mo(e, t, a),
            e = e.sibling; e !== null; )
                mo(e, t, a),
                e = e.sibling
    }
    function tm(e) {
        var t = e.stateNode
          , a = e.memoizedProps;
        try {
            for (var i = e.type, r = t.attributes; r.length; )
                t.removeAttributeNode(r[0]);
            Mt(t, i, a),
            t[St] = e,
            t[Ct] = a
        } catch (u) {
            Ie(e, e.return, u)
        }
    }
    var en = !1
      , ht = !1
      , Au = !1
      , am = typeof WeakSet == "function" ? WeakSet : Set
      , At = null;
    function sx(e, t) {
        if (e = e.containerInfo,
        Fu = Oo,
        e = hd(e),
        jr(e)) {
            if ("selectionStart"in e)
                var a = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    a = (a = e.ownerDocument) && a.defaultView || window;
                    var i = a.getSelection && a.getSelection();
                    if (i && i.rangeCount !== 0) {
                        a = i.anchorNode;
                        var r = i.anchorOffset
                          , u = i.focusNode;
                        i = i.focusOffset;
                        try {
                            a.nodeType,
                            u.nodeType
                        } catch {
                            a = null;
                            break e
                        }
                        var y = 0
                          , b = -1
                          , A = -1
                          , z = 0
                          , Q = 0
                          , W = e
                          , P = null;
                        t: for (; ; ) {
                            for (var Y; W !== a || r !== 0 && W.nodeType !== 3 || (b = y + r),
                            W !== u || i !== 0 && W.nodeType !== 3 || (A = y + i),
                            W.nodeType === 3 && (y += W.nodeValue.length),
                            (Y = W.firstChild) !== null; )
                                P = W,
                                W = Y;
                            for (; ; ) {
                                if (W === e)
                                    break t;
                                if (P === a && ++z === r && (b = y),
                                P === u && ++Q === i && (A = y),
                                (Y = W.nextSibling) !== null)
                                    break;
                                W = P,
                                P = W.parentNode
                            }
                            W = Y
                        }
                        a = b === -1 || A === -1 ? null : {
                            start: b,
                            end: A
                        }
                    } else
                        a = null
                }
            a = a || {
                start: 0,
                end: 0
            }
        } else
            a = null;
        for (Ju = {
            focusedElem: e,
            selectionRange: a
        },
        Oo = !1,
        At = t; At !== null; )
            if (t = At,
            e = t.child,
            (t.subtreeFlags & 1024) !== 0 && e !== null)
                e.return = t,
                At = e;
            else
                for (; At !== null; ) {
                    switch (t = At,
                    u = t.alternate,
                    e = t.flags,
                    t.tag) {
                    case 0:
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((e & 1024) !== 0 && u !== null) {
                            e = void 0,
                            a = t,
                            r = u.memoizedProps,
                            u = u.memoizedState,
                            i = a.stateNode;
                            try {
                                var Te = $n(a.type, r, a.elementType === a.type);
                                e = i.getSnapshotBeforeUpdate(Te, u),
                                i.__reactInternalSnapshotBeforeUpdate = e
                            } catch (ye) {
                                Ie(a, a.return, ye)
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo,
                            a = e.nodeType,
                            a === 9)
                                Wu(e);
                            else if (a === 1)
                                switch (e.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    Wu(e);
                                    break;
                                default:
                                    e.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((e & 1024) !== 0)
                            throw Error(o(163))
                    }
                    if (e = t.sibling,
                    e !== null) {
                        e.return = t.return,
                        At = e;
                        break
                    }
                    At = t.return
                }
    }
    function nm(e, t, a) {
        var i = a.flags;
        switch (a.tag) {
        case 0:
        case 11:
        case 15:
            xn(e, a),
            i & 4 && Bs(5, a);
            break;
        case 1:
            if (xn(e, a),
            i & 4)
                if (e = a.stateNode,
                t === null)
                    try {
                        e.componentDidMount()
                    } catch (y) {
                        Ie(a, a.return, y)
                    }
                else {
                    var r = $n(a.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(r, t, e.__reactInternalSnapshotBeforeUpdate)
                    } catch (y) {
                        Ie(a, a.return, y)
                    }
                }
            i & 64 && Ih(a),
            i & 512 && Ls(a, a.return);
            break;
        case 3:
            if (xn(e, a),
            i & 64 && (e = a.updateQueue,
            e !== null)) {
                if (t = null,
                a.child !== null)
                    switch (a.child.tag) {
                    case 27:
                    case 5:
                        t = a.child.stateNode;
                        break;
                    case 1:
                        t = a.child.stateNode
                    }
                try {
                    Ld(e, t)
                } catch (y) {
                    Ie(a, a.return, y)
                }
            }
            break;
        case 27:
            t === null && i & 4 && tm(a);
        case 26:
        case 5:
            xn(e, a),
            t === null && i & 4 && Wh(a),
            i & 512 && Ls(a, a.return);
            break;
        case 12:
            xn(e, a);
            break;
        case 13:
            xn(e, a),
            i & 4 && im(e, a),
            i & 64 && (e = a.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null && (a = mx.bind(null, a),
            Ox(e, a))));
            break;
        case 22:
            if (i = a.memoizedState !== null || en,
            !i) {
                t = t !== null && t.memoizedState !== null || ht,
                r = en;
                var u = ht;
                en = i,
                (ht = t) && !u ? bn(e, a, (a.subtreeFlags & 8772) !== 0) : xn(e, a),
                en = r,
                ht = u
            }
            break;
        case 30:
            break;
        default:
            xn(e, a)
        }
    }
    function lm(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        lm(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && dl(t)),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    var et = null
      , Zt = !1;
    function tn(e, t, a) {
        for (a = a.child; a !== null; )
            sm(e, t, a),
            a = a.sibling
    }
    function sm(e, t, a) {
        if (at && typeof at.onCommitFiberUnmount == "function")
            try {
                at.onCommitFiberUnmount(Vt, a)
            } catch {}
        switch (a.tag) {
        case 26:
            ht || Oa(a, t),
            tn(e, t, a),
            a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode,
            a.parentNode.removeChild(a));
            break;
        case 27:
            ht || Oa(a, t);
            var i = et
              , r = Zt;
            Nn(a.type) && (et = a.stateNode,
            Zt = !1),
            tn(e, t, a),
            Zs(a.stateNode),
            et = i,
            Zt = r;
            break;
        case 5:
            ht || Oa(a, t);
        case 6:
            if (i = et,
            r = Zt,
            et = null,
            tn(e, t, a),
            et = i,
            Zt = r,
            et !== null)
                if (Zt)
                    try {
                        (et.nodeType === 9 ? et.body : et.nodeName === "HTML" ? et.ownerDocument.body : et).removeChild(a.stateNode)
                    } catch (u) {
                        Ie(a, t, u)
                    }
                else
                    try {
                        et.removeChild(a.stateNode)
                    } catch (u) {
                        Ie(a, t, u)
                    }
            break;
        case 18:
            et !== null && (Zt ? (e = et,
            Zm(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, a.stateNode),
            ti(e)) : Zm(et, a.stateNode));
            break;
        case 4:
            i = et,
            r = Zt,
            et = a.stateNode.containerInfo,
            Zt = !0,
            tn(e, t, a),
            et = i,
            Zt = r;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            ht || vn(2, a, t),
            ht || vn(4, a, t),
            tn(e, t, a);
            break;
        case 1:
            ht || (Oa(a, t),
            i = a.stateNode,
            typeof i.componentWillUnmount == "function" && $h(a, t, i)),
            tn(e, t, a);
            break;
        case 21:
            tn(e, t, a);
            break;
        case 22:
            ht = (i = ht) || a.memoizedState !== null,
            tn(e, t, a),
            ht = i;
            break;
        default:
            tn(e, t, a)
        }
    }
    function im(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null))))
            try {
                ti(e)
            } catch (a) {
                Ie(t, t.return, a)
            }
    }
    function ix(e) {
        switch (e.tag) {
        case 13:
        case 19:
            var t = e.stateNode;
            return t === null && (t = e.stateNode = new am),
            t;
        case 22:
            return e = e.stateNode,
            t = e._retryCache,
            t === null && (t = e._retryCache = new am),
            t;
        default:
            throw Error(o(435, e.tag))
        }
    }
    function Nu(e, t) {
        var a = ix(e);
        t.forEach(function(i) {
            var r = px.bind(null, e, i);
            a.has(i) || (a.add(i),
            i.then(r, r))
        })
    }
    function Wt(e, t) {
        var a = t.deletions;
        if (a !== null)
            for (var i = 0; i < a.length; i++) {
                var r = a[i]
                  , u = e
                  , y = t
                  , b = y;
                e: for (; b !== null; ) {
                    switch (b.tag) {
                    case 27:
                        if (Nn(b.type)) {
                            et = b.stateNode,
                            Zt = !1;
                            break e
                        }
                        break;
                    case 5:
                        et = b.stateNode,
                        Zt = !1;
                        break e;
                    case 3:
                    case 4:
                        et = b.stateNode.containerInfo,
                        Zt = !0;
                        break e
                    }
                    b = b.return
                }
                if (et === null)
                    throw Error(o(160));
                sm(u, y, r),
                et = null,
                Zt = !1,
                u = r.alternate,
                u !== null && (u.return = null),
                r.return = null
            }
        if (t.subtreeFlags & 13878)
            for (t = t.child; t !== null; )
                om(t, e),
                t = t.sibling
    }
    var wa = null;
    function om(e, t) {
        var a = e.alternate
          , i = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            Wt(t, e),
            ea(e),
            i & 4 && (vn(3, e, e.return),
            Bs(3, e),
            vn(5, e, e.return));
            break;
        case 1:
            Wt(t, e),
            ea(e),
            i & 512 && (ht || a === null || Oa(a, a.return)),
            i & 64 && en && (e = e.updateQueue,
            e !== null && (i = e.callbacks,
            i !== null && (a = e.shared.hiddenCallbacks,
            e.shared.hiddenCallbacks = a === null ? i : a.concat(i))));
            break;
        case 26:
            var r = wa;
            if (Wt(t, e),
            ea(e),
            i & 512 && (ht || a === null || Oa(a, a.return)),
            i & 4) {
                var u = a !== null ? a.memoizedState : null;
                if (i = e.memoizedState,
                a === null)
                    if (i === null)
                        if (e.stateNode === null) {
                            e: {
                                i = e.type,
                                a = e.memoizedProps,
                                r = r.ownerDocument || r;
                                t: switch (i) {
                                case "title":
                                    u = r.getElementsByTagName("title")[0],
                                    (!u || u[rn] || u[St] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = r.createElement(i),
                                    r.head.insertBefore(u, r.querySelector("head > title"))),
                                    Mt(u, i, a),
                                    u[St] = e,
                                    ce(u),
                                    i = u;
                                    break e;
                                case "link":
                                    var y = tp("link", "href", r).get(i + (a.href || ""));
                                    if (y) {
                                        for (var b = 0; b < y.length; b++)
                                            if (u = y[b],
                                            u.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && u.getAttribute("rel") === (a.rel == null ? null : a.rel) && u.getAttribute("title") === (a.title == null ? null : a.title) && u.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                y.splice(b, 1);
                                                break t
                                            }
                                    }
                                    u = r.createElement(i),
                                    Mt(u, i, a),
                                    r.head.appendChild(u);
                                    break;
                                case "meta":
                                    if (y = tp("meta", "content", r).get(i + (a.content || ""))) {
                                        for (b = 0; b < y.length; b++)
                                            if (u = y[b],
                                            u.getAttribute("content") === (a.content == null ? null : "" + a.content) && u.getAttribute("name") === (a.name == null ? null : a.name) && u.getAttribute("property") === (a.property == null ? null : a.property) && u.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && u.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                y.splice(b, 1);
                                                break t
                                            }
                                    }
                                    u = r.createElement(i),
                                    Mt(u, i, a),
                                    r.head.appendChild(u);
                                    break;
                                default:
                                    throw Error(o(468, i))
                                }
                                u[St] = e,
                                ce(u),
                                i = u
                            }
                            e.stateNode = i
                        } else
                            ap(r, e.type, e.stateNode);
                    else
                        e.stateNode = ep(r, i, e.memoizedProps);
                else
                    u !== i ? (u === null ? a.stateNode !== null && (a = a.stateNode,
                    a.parentNode.removeChild(a)) : u.count--,
                    i === null ? ap(r, e.type, e.stateNode) : ep(r, i, e.memoizedProps)) : i === null && e.stateNode !== null && Tu(e, e.memoizedProps, a.memoizedProps)
            }
            break;
        case 27:
            Wt(t, e),
            ea(e),
            i & 512 && (ht || a === null || Oa(a, a.return)),
            a !== null && i & 4 && Tu(e, e.memoizedProps, a.memoizedProps);
            break;
        case 5:
            if (Wt(t, e),
            ea(e),
            i & 512 && (ht || a === null || Oa(a, a.return)),
            e.flags & 32) {
                r = e.stateNode;
                try {
                    pl(r, "")
                } catch (Y) {
                    Ie(e, e.return, Y)
                }
            }
            i & 4 && e.stateNode != null && (r = e.memoizedProps,
            Tu(e, r, a !== null ? a.memoizedProps : r)),
            i & 1024 && (Au = !0);
            break;
        case 6:
            if (Wt(t, e),
            ea(e),
            i & 4) {
                if (e.stateNode === null)
                    throw Error(o(162));
                i = e.memoizedProps,
                a = e.stateNode;
                try {
                    a.nodeValue = i
                } catch (Y) {
                    Ie(e, e.return, Y)
                }
            }
            break;
        case 3:
            if (Do = null,
            r = wa,
            wa = Eo(t.containerInfo),
            Wt(t, e),
            wa = r,
            ea(e),
            i & 4 && a !== null && a.memoizedState.isDehydrated)
                try {
                    ti(t.containerInfo)
                } catch (Y) {
                    Ie(e, e.return, Y)
                }
            Au && (Au = !1,
            rm(e));
            break;
        case 4:
            i = wa,
            wa = Eo(e.stateNode.containerInfo),
            Wt(t, e),
            ea(e),
            wa = i;
            break;
        case 12:
            Wt(t, e),
            ea(e);
            break;
        case 13:
            Wt(t, e),
            ea(e),
            e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Ou = We()),
            i & 4 && (i = e.updateQueue,
            i !== null && (e.updateQueue = null,
            Nu(e, i)));
            break;
        case 22:
            r = e.memoizedState !== null;
            var A = a !== null && a.memoizedState !== null
              , z = en
              , Q = ht;
            if (en = z || r,
            ht = Q || A,
            Wt(t, e),
            ht = Q,
            en = z,
            ea(e),
            i & 8192)
                e: for (t = e.stateNode,
                t._visibility = r ? t._visibility & -2 : t._visibility | 1,
                r && (a === null || A || en || ht || Wn(e)),
                a = null,
                t = e; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (a === null) {
                            A = a = t;
                            try {
                                if (u = A.stateNode,
                                r)
                                    y = u.style,
                                    typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                                else {
                                    b = A.stateNode;
                                    var W = A.memoizedProps.style
                                      , P = W != null && W.hasOwnProperty("display") ? W.display : null;
                                    b.style.display = P == null || typeof P == "boolean" ? "" : ("" + P).trim()
                                }
                            } catch (Y) {
                                Ie(A, A.return, Y)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (a === null) {
                            A = t;
                            try {
                                A.stateNode.nodeValue = r ? "" : A.memoizedProps
                            } catch (Y) {
                                Ie(A, A.return, Y)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break e;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e)
                            break e;
                        a === t && (a = null),
                        t = t.return
                    }
                    a === t && (a = null),
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            i & 4 && (i = e.updateQueue,
            i !== null && (a = i.retryQueue,
            a !== null && (i.retryQueue = null,
            Nu(e, a))));
            break;
        case 19:
            Wt(t, e),
            ea(e),
            i & 4 && (i = e.updateQueue,
            i !== null && (e.updateQueue = null,
            Nu(e, i)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            Wt(t, e),
            ea(e)
        }
    }
    function ea(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var a, i = e.return; i !== null; ) {
                    if (em(i)) {
                        a = i;
                        break
                    }
                    i = i.return
                }
                if (a == null)
                    throw Error(o(160));
                switch (a.tag) {
                case 27:
                    var r = a.stateNode
                      , u = ju(e);
                    mo(e, u, r);
                    break;
                case 5:
                    var y = a.stateNode;
                    a.flags & 32 && (pl(y, ""),
                    a.flags &= -33);
                    var b = ju(e);
                    mo(e, b, y);
                    break;
                case 3:
                case 4:
                    var A = a.stateNode.containerInfo
                      , z = ju(e);
                    wu(e, z, A);
                    break;
                default:
                    throw Error(o(161))
                }
            } catch (Q) {
                Ie(e, e.return, Q)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function rm(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
                var t = e;
                rm(t),
                t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                e = e.sibling
            }
    }
    function xn(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                nm(e, t.alternate, t),
                t = t.sibling
    }
    function Wn(e) {
        for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                vn(4, t, t.return),
                Wn(t);
                break;
            case 1:
                Oa(t, t.return);
                var a = t.stateNode;
                typeof a.componentWillUnmount == "function" && $h(t, t.return, a),
                Wn(t);
                break;
            case 27:
                Zs(t.stateNode);
            case 26:
            case 5:
                Oa(t, t.return),
                Wn(t);
                break;
            case 22:
                t.memoizedState === null && Wn(t);
                break;
            case 30:
                Wn(t);
                break;
            default:
                Wn(t)
            }
            e = e.sibling
        }
    }
    function bn(e, t, a) {
        for (a = a && (t.subtreeFlags & 8772) !== 0,
        t = t.child; t !== null; ) {
            var i = t.alternate
              , r = e
              , u = t
              , y = u.flags;
            switch (u.tag) {
            case 0:
            case 11:
            case 15:
                bn(r, u, a),
                Bs(4, u);
                break;
            case 1:
                if (bn(r, u, a),
                i = u,
                r = i.stateNode,
                typeof r.componentDidMount == "function")
                    try {
                        r.componentDidMount()
                    } catch (z) {
                        Ie(i, i.return, z)
                    }
                if (i = u,
                r = i.updateQueue,
                r !== null) {
                    var b = i.stateNode;
                    try {
                        var A = r.shared.hiddenCallbacks;
                        if (A !== null)
                            for (r.shared.hiddenCallbacks = null,
                            r = 0; r < A.length; r++)
                                Bd(A[r], b)
                    } catch (z) {
                        Ie(i, i.return, z)
                    }
                }
                a && y & 64 && Ih(u),
                Ls(u, u.return);
                break;
            case 27:
                tm(u);
            case 26:
            case 5:
                bn(r, u, a),
                a && i === null && y & 4 && Wh(u),
                Ls(u, u.return);
                break;
            case 12:
                bn(r, u, a);
                break;
            case 13:
                bn(r, u, a),
                a && y & 4 && im(r, u);
                break;
            case 22:
                u.memoizedState === null && bn(r, u, a),
                Ls(u, u.return);
                break;
            case 30:
                break;
            default:
                bn(r, u, a)
            }
            t = t.sibling
        }
    }
    function Eu(e, t) {
        var a = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
        e = null,
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
        e !== a && (e != null && e.refCount++,
        a != null && js(a))
    }
    function Cu(e, t) {
        e = null,
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== e && (t.refCount++,
        e != null && js(e))
    }
    function Ra(e, t, a, i) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                um(e, t, a, i),
                t = t.sibling
    }
    function um(e, t, a, i) {
        var r = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            Ra(e, t, a, i),
            r & 2048 && Bs(9, t);
            break;
        case 1:
            Ra(e, t, a, i);
            break;
        case 3:
            Ra(e, t, a, i),
            r & 2048 && (e = null,
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== e && (t.refCount++,
            e != null && js(e)));
            break;
        case 12:
            if (r & 2048) {
                Ra(e, t, a, i),
                e = t.stateNode;
                try {
                    var u = t.memoizedProps
                      , y = u.id
                      , b = u.onPostCommit;
                    typeof b == "function" && b(y, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                } catch (A) {
                    Ie(t, t.return, A)
                }
            } else
                Ra(e, t, a, i);
            break;
        case 13:
            Ra(e, t, a, i);
            break;
        case 23:
            break;
        case 22:
            u = t.stateNode,
            y = t.alternate,
            t.memoizedState !== null ? u._visibility & 2 ? Ra(e, t, a, i) : ks(e, t) : u._visibility & 2 ? Ra(e, t, a, i) : (u._visibility |= 2,
            Vl(e, t, a, i, (t.subtreeFlags & 10256) !== 0)),
            r & 2048 && Eu(y, t);
            break;
        case 24:
            Ra(e, t, a, i),
            r & 2048 && Cu(t.alternate, t);
            break;
        default:
            Ra(e, t, a, i)
        }
    }
    function Vl(e, t, a, i, r) {
        for (r = r && (t.subtreeFlags & 10256) !== 0,
        t = t.child; t !== null; ) {
            var u = e
              , y = t
              , b = a
              , A = i
              , z = y.flags;
            switch (y.tag) {
            case 0:
            case 11:
            case 15:
                Vl(u, y, b, A, r),
                Bs(8, y);
                break;
            case 23:
                break;
            case 22:
                var Q = y.stateNode;
                y.memoizedState !== null ? Q._visibility & 2 ? Vl(u, y, b, A, r) : ks(u, y) : (Q._visibility |= 2,
                Vl(u, y, b, A, r)),
                r && z & 2048 && Eu(y.alternate, y);
                break;
            case 24:
                Vl(u, y, b, A, r),
                r && z & 2048 && Cu(y.alternate, y);
                break;
            default:
                Vl(u, y, b, A, r)
            }
            t = t.sibling
        }
    }
    function ks(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var a = e
                  , i = t
                  , r = i.flags;
                switch (i.tag) {
                case 22:
                    ks(a, i),
                    r & 2048 && Eu(i.alternate, i);
                    break;
                case 24:
                    ks(a, i),
                    r & 2048 && Cu(i.alternate, i);
                    break;
                default:
                    ks(a, i)
                }
                t = t.sibling
            }
    }
    var Hs = 8192;
    function zl(e) {
        if (e.subtreeFlags & Hs)
            for (e = e.child; e !== null; )
                cm(e),
                e = e.sibling
    }
    function cm(e) {
        switch (e.tag) {
        case 26:
            zl(e),
            e.flags & Hs && e.memoizedState !== null && Xx(wa, e.memoizedState, e.memoizedProps);
            break;
        case 5:
            zl(e);
            break;
        case 3:
        case 4:
            var t = wa;
            wa = Eo(e.stateNode.containerInfo),
            zl(e),
            wa = t;
            break;
        case 22:
            e.memoizedState === null && (t = e.alternate,
            t !== null && t.memoizedState !== null ? (t = Hs,
            Hs = 16777216,
            zl(e),
            Hs = t) : zl(e));
            break;
        default:
            zl(e)
        }
    }
    function fm(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child,
        e !== null)) {
            t.child = null;
            do
                t = e.sibling,
                e.sibling = null,
                e = t;
            while (e !== null)
        }
    }
    function Ps(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    At = i,
                    hm(i, e)
                }
            fm(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                dm(e),
                e = e.sibling
    }
    function dm(e) {
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Ps(e),
            e.flags & 2048 && vn(9, e, e.return);
            break;
        case 3:
            Ps(e);
            break;
        case 12:
            Ps(e);
            break;
        case 22:
            var t = e.stateNode;
            e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3,
            po(e)) : Ps(e);
            break;
        default:
            Ps(e)
        }
    }
    function po(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    At = i,
                    hm(i, e)
                }
            fm(e)
        }
        for (e = e.child; e !== null; ) {
            switch (t = e,
            t.tag) {
            case 0:
            case 11:
            case 15:
                vn(8, t, t.return),
                po(t);
                break;
            case 22:
                a = t.stateNode,
                a._visibility & 2 && (a._visibility &= -3,
                po(t));
                break;
            default:
                po(t)
            }
            e = e.sibling
        }
    }
    function hm(e, t) {
        for (; At !== null; ) {
            var a = At;
            switch (a.tag) {
            case 0:
            case 11:
            case 15:
                vn(8, a, t);
                break;
            case 23:
            case 22:
                if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                    var i = a.memoizedState.cachePool.pool;
                    i != null && i.refCount++
                }
                break;
            case 24:
                js(a.memoizedState.cache)
            }
            if (i = a.child,
            i !== null)
                i.return = a,
                At = i;
            else
                e: for (a = e; At !== null; ) {
                    i = At;
                    var r = i.sibling
                      , u = i.return;
                    if (lm(i),
                    i === a) {
                        At = null;
                        break e
                    }
                    if (r !== null) {
                        r.return = u,
                        At = r;
                        break e
                    }
                    At = u
                }
        }
    }
    var ox = {
        getCacheForType: function(e) {
            var t = Ut(Tt)
              , a = t.data.get(e);
            return a === void 0 && (a = e(),
            t.data.set(e, a)),
            a
        }
    }
      , rx = typeof WeakMap == "function" ? WeakMap : Map
      , Ge = 0
      , $e = null
      , Re = null
      , Le = 0
      , Xe = 0
      , ta = null
      , Sn = !1
      , Ul = !1
      , Du = !1
      , an = 0
      , rt = 0
      , Tn = 0
      , el = 0
      , _u = 0
      , ma = 0
      , Bl = 0
      , qs = null
      , Qt = null
      , Mu = !1
      , Ou = 0
      , go = 1 / 0
      , yo = null
      , jn = null
      , _t = 0
      , wn = null
      , Ll = null
      , kl = 0
      , Ru = 0
      , Vu = null
      , mm = null
      , Ys = 0
      , zu = null;
    function aa() {
        if ((Ge & 2) !== 0 && Le !== 0)
            return Le & -Le;
        if (N.T !== null) {
            var e = Nl;
            return e !== 0 ? e : qu()
        }
        return is()
    }
    function pm() {
        ma === 0 && (ma = (Le & 536870912) === 0 || Ye ? on() : 536870912);
        var e = ha.current;
        return e !== null && (e.flags |= 32),
        ma
    }
    function na(e, t, a) {
        (e === $e && (Xe === 2 || Xe === 9) || e.cancelPendingCommit !== null) && (Hl(e, 0),
        An(e, Le, ma, !1)),
        gt(e, a),
        ((Ge & 2) === 0 || e !== $e) && (e === $e && ((Ge & 2) === 0 && (el |= a),
        rt === 4 && An(e, Le, ma, !1)),
        Va(e))
    }
    function gm(e, t, a) {
        if ((Ge & 6) !== 0)
            throw Error(o(327));
        var i = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Yt(e, t)
          , r = i ? fx(e, t) : Lu(e, t, !0)
          , u = i;
        do {
            if (r === 0) {
                Ul && !i && An(e, t, 0, !1);
                break
            } else {
                if (a = e.current.alternate,
                u && !ux(a)) {
                    r = Lu(e, t, !1),
                    u = !1;
                    continue
                }
                if (r === 2) {
                    if (u = t,
                    e.errorRecoveryDisabledLanes & u)
                        var y = 0;
                    else
                        y = e.pendingLanes & -536870913,
                        y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
                    if (y !== 0) {
                        t = y;
                        e: {
                            var b = e;
                            r = qs;
                            var A = b.current.memoizedState.isDehydrated;
                            if (A && (Hl(b, y).flags |= 256),
                            y = Lu(b, y, !1),
                            y !== 2) {
                                if (Du && !A) {
                                    b.errorRecoveryDisabledLanes |= u,
                                    el |= u,
                                    r = 4;
                                    break e
                                }
                                u = Qt,
                                Qt = r,
                                u !== null && (Qt === null ? Qt = u : Qt.push.apply(Qt, u))
                            }
                            r = y
                        }
                        if (u = !1,
                        r !== 2)
                            continue
                    }
                }
                if (r === 1) {
                    Hl(e, 0),
                    An(e, t, 0, !0);
                    break
                }
                e: {
                    switch (i = e,
                    u = r,
                    u) {
                    case 0:
                    case 1:
                        throw Error(o(345));
                    case 4:
                        if ((t & 4194048) !== t)
                            break;
                    case 6:
                        An(i, t, ma, !Sn);
                        break e;
                    case 2:
                        Qt = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(o(329))
                    }
                    if ((t & 62914560) === t && (r = Ou + 300 - We(),
                    10 < r)) {
                        if (An(i, t, ma, !Sn),
                        ze(i, 0, !0) !== 0)
                            break e;
                        i.timeoutHandle = Xm(ym.bind(null, i, a, Qt, yo, Mu, t, ma, el, Bl, Sn, u, 2, -0, 0), r);
                        break e
                    }
                    ym(i, a, Qt, yo, Mu, t, ma, el, Bl, Sn, u, 0, -0, 0)
                }
            }
            break
        } while (!0);
        Va(e)
    }
    function ym(e, t, a, i, r, u, y, b, A, z, Q, W, P, Y) {
        if (e.timeoutHandle = -1,
        W = t.subtreeFlags,
        (W & 8192 || (W & 16785408) === 16785408) && (Js = {
            stylesheets: null,
            count: 0,
            unsuspend: Gx
        },
        cm(t),
        W = Kx(),
        W !== null)) {
            e.cancelPendingCommit = W(wm.bind(null, e, t, u, a, i, r, y, b, A, Q, 1, P, Y)),
            An(e, u, y, !z);
            return
        }
        wm(e, t, u, a, i, r, y, b, A)
    }
    function ux(e) {
        for (var t = e; ; ) {
            var a = t.tag;
            if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue,
            a !== null && (a = a.stores,
            a !== null)))
                for (var i = 0; i < a.length; i++) {
                    var r = a[i]
                      , u = r.getSnapshot;
                    r = r.value;
                    try {
                        if (!It(u(), r))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (a = t.child,
            t.subtreeFlags & 16384 && a !== null)
                a.return = t,
                t = a;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function An(e, t, a, i) {
        t &= ~_u,
        t &= ~el,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        i && (e.warmLanes |= t),
        i = e.expirationTimes;
        for (var r = t; 0 < r; ) {
            var u = 31 - pt(r)
              , y = 1 << u;
            i[u] = -1,
            r &= ~y
        }
        a !== 0 && ls(e, a, t)
    }
    function vo() {
        return (Ge & 6) === 0 ? (Gs(0),
        !1) : !0
    }
    function Uu() {
        if (Re !== null) {
            if (Xe === 0)
                var e = Re.return;
            else
                e = Re,
                Qa = Qn = null,
                Wr(e),
                Ol = null,
                Vs = 0,
                e = Re;
            for (; e !== null; )
                Jh(e.alternate, e),
                e = e.return;
            Re = null
        }
    }
    function Hl(e, t) {
        var a = e.timeoutHandle;
        a !== -1 && (e.timeoutHandle = -1,
        Ex(a)),
        a = e.cancelPendingCommit,
        a !== null && (e.cancelPendingCommit = null,
        a()),
        Uu(),
        $e = e,
        Re = a = Xa(e.current, null),
        Le = t,
        Xe = 0,
        ta = null,
        Sn = !1,
        Ul = Yt(e, t),
        Du = !1,
        Bl = ma = _u = el = Tn = rt = 0,
        Qt = qs = null,
        Mu = !1,
        (t & 8) !== 0 && (t |= t & 32);
        var i = e.entangledLanes;
        if (i !== 0)
            for (e = e.entanglements,
            i &= t; 0 < i; ) {
                var r = 31 - pt(i)
                  , u = 1 << r;
                t |= e[r],
                i &= ~u
            }
        return an = t,
        ki(),
        a
    }
    function vm(e, t) {
        De = null,
        N.H = lo,
        t === As || t === Qi ? (t = zd(),
        Xe = 3) : t === Od ? (t = zd(),
        Xe = 4) : Xe = t === Uh ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
        ta = t,
        Re === null && (rt = 1,
        uo(e, ua(t, e.current)))
    }
    function xm() {
        var e = N.H;
        return N.H = lo,
        e === null ? lo : e
    }
    function bm() {
        var e = N.A;
        return N.A = ox,
        e
    }
    function Bu() {
        rt = 4,
        Sn || (Le & 4194048) !== Le && ha.current !== null || (Ul = !0),
        (Tn & 134217727) === 0 && (el & 134217727) === 0 || $e === null || An($e, Le, ma, !1)
    }
    function Lu(e, t, a) {
        var i = Ge;
        Ge |= 2;
        var r = xm()
          , u = bm();
        ($e !== e || Le !== t) && (yo = null,
        Hl(e, t)),
        t = !1;
        var y = rt;
        e: do
            try {
                if (Xe !== 0 && Re !== null) {
                    var b = Re
                      , A = ta;
                    switch (Xe) {
                    case 8:
                        Uu(),
                        y = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        ha.current === null && (t = !0);
                        var z = Xe;
                        if (Xe = 0,
                        ta = null,
                        Pl(e, b, A, z),
                        a && Ul) {
                            y = 0;
                            break e
                        }
                        break;
                    default:
                        z = Xe,
                        Xe = 0,
                        ta = null,
                        Pl(e, b, A, z)
                    }
                }
                cx(),
                y = rt;
                break
            } catch (Q) {
                vm(e, Q)
            }
        while (!0);
        return t && e.shellSuspendCounter++,
        Qa = Qn = null,
        Ge = i,
        N.H = r,
        N.A = u,
        Re === null && ($e = null,
        Le = 0,
        ki()),
        y
    }
    function cx() {
        for (; Re !== null; )
            Sm(Re)
    }
    function fx(e, t) {
        var a = Ge;
        Ge |= 2;
        var i = xm()
          , r = bm();
        $e !== e || Le !== t ? (yo = null,
        go = We() + 500,
        Hl(e, t)) : Ul = Yt(e, t);
        e: do
            try {
                if (Xe !== 0 && Re !== null) {
                    t = Re;
                    var u = ta;
                    t: switch (Xe) {
                    case 1:
                        Xe = 0,
                        ta = null,
                        Pl(e, t, u, 1);
                        break;
                    case 2:
                    case 9:
                        if (Rd(u)) {
                            Xe = 0,
                            ta = null,
                            Tm(t);
                            break
                        }
                        t = function() {
                            Xe !== 2 && Xe !== 9 || $e !== e || (Xe = 7),
                            Va(e)
                        }
                        ,
                        u.then(t, t);
                        break e;
                    case 3:
                        Xe = 7;
                        break e;
                    case 4:
                        Xe = 5;
                        break e;
                    case 7:
                        Rd(u) ? (Xe = 0,
                        ta = null,
                        Tm(t)) : (Xe = 0,
                        ta = null,
                        Pl(e, t, u, 7));
                        break;
                    case 5:
                        var y = null;
                        switch (Re.tag) {
                        case 26:
                            y = Re.memoizedState;
                        case 5:
                        case 27:
                            var b = Re;
                            if (!y || np(y)) {
                                Xe = 0,
                                ta = null;
                                var A = b.sibling;
                                if (A !== null)
                                    Re = A;
                                else {
                                    var z = b.return;
                                    z !== null ? (Re = z,
                                    xo(z)) : Re = null
                                }
                                break t
                            }
                        }
                        Xe = 0,
                        ta = null,
                        Pl(e, t, u, 5);
                        break;
                    case 6:
                        Xe = 0,
                        ta = null,
                        Pl(e, t, u, 6);
                        break;
                    case 8:
                        Uu(),
                        rt = 6;
                        break e;
                    default:
                        throw Error(o(462))
                    }
                }
                dx();
                break
            } catch (Q) {
                vm(e, Q)
            }
        while (!0);
        return Qa = Qn = null,
        N.H = i,
        N.A = r,
        Ge = a,
        Re !== null ? 0 : ($e = null,
        Le = 0,
        ki(),
        rt)
    }
    function dx() {
        for (; Re !== null && !tt(); )
            Sm(Re)
    }
    function Sm(e) {
        var t = Qh(e.alternate, e, an);
        e.memoizedProps = e.pendingProps,
        t === null ? xo(e) : Re = t
    }
    function Tm(e) {
        var t = e
          , a = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = qh(a, t, t.pendingProps, t.type, void 0, Le);
            break;
        case 11:
            t = qh(a, t, t.pendingProps, t.type.render, t.ref, Le);
            break;
        case 5:
            Wr(t);
        default:
            Jh(a, t),
            t = Re = jd(t, an),
            t = Qh(a, t, an)
        }
        e.memoizedProps = e.pendingProps,
        t === null ? xo(e) : Re = t
    }
    function Pl(e, t, a, i) {
        Qa = Qn = null,
        Wr(t),
        Ol = null,
        Vs = 0;
        var r = t.return;
        try {
            if (tx(e, r, t, a, Le)) {
                rt = 1,
                uo(e, ua(a, e.current)),
                Re = null;
                return
            }
        } catch (u) {
            if (r !== null)
                throw Re = r,
                u;
            rt = 1,
            uo(e, ua(a, e.current)),
            Re = null;
            return
        }
        t.flags & 32768 ? (Ye || i === 1 ? e = !0 : Ul || (Le & 536870912) !== 0 ? e = !1 : (Sn = e = !0,
        (i === 2 || i === 9 || i === 3 || i === 6) && (i = ha.current,
        i !== null && i.tag === 13 && (i.flags |= 16384))),
        jm(t, e)) : xo(t)
    }
    function xo(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                jm(t, Sn);
                return
            }
            e = t.return;
            var a = nx(t.alternate, t, an);
            if (a !== null) {
                Re = a;
                return
            }
            if (t = t.sibling,
            t !== null) {
                Re = t;
                return
            }
            Re = t = e
        } while (t !== null);
        rt === 0 && (rt = 5)
    }
    function jm(e, t) {
        do {
            var a = lx(e.alternate, e);
            if (a !== null) {
                a.flags &= 32767,
                Re = a;
                return
            }
            if (a = e.return,
            a !== null && (a.flags |= 32768,
            a.subtreeFlags = 0,
            a.deletions = null),
            !t && (e = e.sibling,
            e !== null)) {
                Re = e;
                return
            }
            Re = e = a
        } while (e !== null);
        rt = 6,
        Re = null
    }
    function wm(e, t, a, i, r, u, y, b, A) {
        e.cancelPendingCommit = null;
        do
            bo();
        while (_t !== 0);
        if ((Ge & 6) !== 0)
            throw Error(o(327));
        if (t !== null) {
            if (t === e.current)
                throw Error(o(177));
            if (u = t.lanes | t.childLanes,
            u |= Cr,
            Gt(e, a, u, y, b, A),
            e === $e && (Re = $e = null,
            Le = 0),
            Ll = t,
            wn = e,
            kl = a,
            Ru = u,
            Vu = r,
            mm = i,
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null,
            e.callbackPriority = 0,
            gx(la, function() {
                return Dm(),
                null
            })) : (e.callbackNode = null,
            e.callbackPriority = 0),
            i = (t.flags & 13878) !== 0,
            (t.subtreeFlags & 13878) !== 0 || i) {
                i = N.T,
                N.T = null,
                r = O.p,
                O.p = 2,
                y = Ge,
                Ge |= 4;
                try {
                    sx(e, t, a)
                } finally {
                    Ge = y,
                    O.p = r,
                    N.T = i
                }
            }
            _t = 1,
            Am(),
            Nm(),
            Em()
        }
    }
    function Am() {
        if (_t === 1) {
            _t = 0;
            var e = wn
              , t = Ll
              , a = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || a) {
                a = N.T,
                N.T = null;
                var i = O.p;
                O.p = 2;
                var r = Ge;
                Ge |= 4;
                try {
                    om(t, e);
                    var u = Ju
                      , y = hd(e.containerInfo)
                      , b = u.focusedElem
                      , A = u.selectionRange;
                    if (y !== b && b && b.ownerDocument && dd(b.ownerDocument.documentElement, b)) {
                        if (A !== null && jr(b)) {
                            var z = A.start
                              , Q = A.end;
                            if (Q === void 0 && (Q = z),
                            "selectionStart"in b)
                                b.selectionStart = z,
                                b.selectionEnd = Math.min(Q, b.value.length);
                            else {
                                var W = b.ownerDocument || document
                                  , P = W && W.defaultView || window;
                                if (P.getSelection) {
                                    var Y = P.getSelection()
                                      , Te = b.textContent.length
                                      , ye = Math.min(A.start, Te)
                                      , Qe = A.end === void 0 ? ye : Math.min(A.end, Te);
                                    !Y.extend && ye > Qe && (y = Qe,
                                    Qe = ye,
                                    ye = y);
                                    var _ = fd(b, ye)
                                      , E = fd(b, Qe);
                                    if (_ && E && (Y.rangeCount !== 1 || Y.anchorNode !== _.node || Y.anchorOffset !== _.offset || Y.focusNode !== E.node || Y.focusOffset !== E.offset)) {
                                        var V = W.createRange();
                                        V.setStart(_.node, _.offset),
                                        Y.removeAllRanges(),
                                        ye > Qe ? (Y.addRange(V),
                                        Y.extend(E.node, E.offset)) : (V.setEnd(E.node, E.offset),
                                        Y.addRange(V))
                                    }
                                }
                            }
                        }
                        for (W = [],
                        Y = b; Y = Y.parentNode; )
                            Y.nodeType === 1 && W.push({
                                element: Y,
                                left: Y.scrollLeft,
                                top: Y.scrollTop
                            });
                        for (typeof b.focus == "function" && b.focus(),
                        b = 0; b < W.length; b++) {
                            var I = W[b];
                            I.element.scrollLeft = I.left,
                            I.element.scrollTop = I.top
                        }
                    }
                    Oo = !!Fu,
                    Ju = Fu = null
                } finally {
                    Ge = r,
                    O.p = i,
                    N.T = a
                }
            }
            e.current = t,
            _t = 2
        }
    }
    function Nm() {
        if (_t === 2) {
            _t = 0;
            var e = wn
              , t = Ll
              , a = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || a) {
                a = N.T,
                N.T = null;
                var i = O.p;
                O.p = 2;
                var r = Ge;
                Ge |= 4;
                try {
                    nm(e, t.alternate, t)
                } finally {
                    Ge = r,
                    O.p = i,
                    N.T = a
                }
            }
            _t = 3
        }
    }
    function Em() {
        if (_t === 4 || _t === 3) {
            _t = 0,
            qt();
            var e = wn
              , t = Ll
              , a = kl
              , i = mm;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? _t = 5 : (_t = 0,
            Ll = wn = null,
            Cm(e, e.pendingLanes));
            var r = e.pendingLanes;
            if (r === 0 && (jn = null),
            cl(a),
            t = t.stateNode,
            at && typeof at.onCommitFiberRoot == "function")
                try {
                    at.onCommitFiberRoot(Vt, t, void 0, (t.current.flags & 128) === 128)
                } catch {}
            if (i !== null) {
                t = N.T,
                r = O.p,
                O.p = 2,
                N.T = null;
                try {
                    for (var u = e.onRecoverableError, y = 0; y < i.length; y++) {
                        var b = i[y];
                        u(b.value, {
                            componentStack: b.stack
                        })
                    }
                } finally {
                    N.T = t,
                    O.p = r
                }
            }
            (kl & 3) !== 0 && bo(),
            Va(e),
            r = e.pendingLanes,
            (a & 4194090) !== 0 && (r & 42) !== 0 ? e === zu ? Ys++ : (Ys = 0,
            zu = e) : Ys = 0,
            Gs(0)
        }
    }
    function Cm(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache,
        t != null && (e.pooledCache = null,
        js(t)))
    }
    function bo(e) {
        return Am(),
        Nm(),
        Em(),
        Dm()
    }
    function Dm() {
        if (_t !== 5)
            return !1;
        var e = wn
          , t = Ru;
        Ru = 0;
        var a = cl(kl)
          , i = N.T
          , r = O.p;
        try {
            O.p = 32 > a ? 32 : a,
            N.T = null,
            a = Vu,
            Vu = null;
            var u = wn
              , y = kl;
            if (_t = 0,
            Ll = wn = null,
            kl = 0,
            (Ge & 6) !== 0)
                throw Error(o(331));
            var b = Ge;
            if (Ge |= 4,
            dm(u.current),
            um(u, u.current, y, a),
            Ge = b,
            Gs(0, !1),
            at && typeof at.onPostCommitFiberRoot == "function")
                try {
                    at.onPostCommitFiberRoot(Vt, u)
                } catch {}
            return !0
        } finally {
            O.p = r,
            N.T = i,
            Cm(e, t)
        }
    }
    function _m(e, t, a) {
        t = ua(a, t),
        t = hu(e.stateNode, t, 2),
        e = mn(e, t, 2),
        e !== null && (gt(e, 2),
        Va(e))
    }
    function Ie(e, t, a) {
        if (e.tag === 3)
            _m(e, e, a);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    _m(t, e, a);
                    break
                } else if (t.tag === 1) {
                    var i = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (jn === null || !jn.has(i))) {
                        e = ua(a, e),
                        a = Vh(2),
                        i = mn(t, a, 2),
                        i !== null && (zh(a, i, t, e),
                        gt(i, 2),
                        Va(i));
                        break
                    }
                }
                t = t.return
            }
    }
    function ku(e, t, a) {
        var i = e.pingCache;
        if (i === null) {
            i = e.pingCache = new rx;
            var r = new Set;
            i.set(t, r)
        } else
            r = i.get(t),
            r === void 0 && (r = new Set,
            i.set(t, r));
        r.has(a) || (Du = !0,
        r.add(a),
        e = hx.bind(null, e, t, a),
        t.then(e, e))
    }
    function hx(e, t, a) {
        var i = e.pingCache;
        i !== null && i.delete(t),
        e.pingedLanes |= e.suspendedLanes & a,
        e.warmLanes &= ~a,
        $e === e && (Le & a) === a && (rt === 4 || rt === 3 && (Le & 62914560) === Le && 300 > We() - Ou ? (Ge & 2) === 0 && Hl(e, 0) : _u |= a,
        Bl === Le && (Bl = 0)),
        Va(e)
    }
    function Mm(e, t) {
        t === 0 && (t = ne()),
        e = Tl(e, t),
        e !== null && (gt(e, t),
        Va(e))
    }
    function mx(e) {
        var t = e.memoizedState
          , a = 0;
        t !== null && (a = t.retryLane),
        Mm(e, a)
    }
    function px(e, t) {
        var a = 0;
        switch (e.tag) {
        case 13:
            var i = e.stateNode
              , r = e.memoizedState;
            r !== null && (a = r.retryLane);
            break;
        case 19:
            i = e.stateNode;
            break;
        case 22:
            i = e.stateNode._retryCache;
            break;
        default:
            throw Error(o(314))
        }
        i !== null && i.delete(t),
        Mm(e, a)
    }
    function gx(e, t) {
        return Et(e, t)
    }
    var So = null
      , ql = null
      , Hu = !1
      , To = !1
      , Pu = !1
      , tl = 0;
    function Va(e) {
        e !== ql && e.next === null && (ql === null ? So = ql = e : ql = ql.next = e),
        To = !0,
        Hu || (Hu = !0,
        vx())
    }
    function Gs(e, t) {
        if (!Pu && To) {
            Pu = !0;
            do
                for (var a = !1, i = So; i !== null; ) {
                    if (e !== 0) {
                        var r = i.pendingLanes;
                        if (r === 0)
                            var u = 0;
                        else {
                            var y = i.suspendedLanes
                              , b = i.pingedLanes;
                            u = (1 << 31 - pt(42 | e) + 1) - 1,
                            u &= r & ~(y & ~b),
                            u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
                        }
                        u !== 0 && (a = !0,
                        zm(i, u))
                    } else
                        u = Le,
                        u = ze(i, i === $e ? u : 0, i.cancelPendingCommit !== null || i.timeoutHandle !== -1),
                        (u & 3) === 0 || Yt(i, u) || (a = !0,
                        zm(i, u));
                    i = i.next
                }
            while (a);
            Pu = !1
        }
    }
    function yx() {
        Om()
    }
    function Om() {
        To = Hu = !1;
        var e = 0;
        tl !== 0 && (Nx() && (e = tl),
        tl = 0);
        for (var t = We(), a = null, i = So; i !== null; ) {
            var r = i.next
              , u = Rm(i, t);
            u === 0 ? (i.next = null,
            a === null ? So = r : a.next = r,
            r === null && (ql = a)) : (a = i,
            (e !== 0 || (u & 3) !== 0) && (To = !0)),
            i = r
        }
        Gs(e)
    }
    function Rm(e, t) {
        for (var a = e.suspendedLanes, i = e.pingedLanes, r = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
            var y = 31 - pt(u)
              , b = 1 << y
              , A = r[y];
            A === -1 ? ((b & a) === 0 || (b & i) !== 0) && (r[y] = Ln(b, t)) : A <= t && (e.expiredLanes |= b),
            u &= ~b
        }
        if (t = $e,
        a = Le,
        a = ze(e, e === t ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        i = e.callbackNode,
        a === 0 || e === t && (Xe === 2 || Xe === 9) || e.cancelPendingCommit !== null)
            return i !== null && i !== null && Ae(i),
            e.callbackNode = null,
            e.callbackPriority = 0;
        if ((a & 3) === 0 || Yt(e, a)) {
            if (t = a & -a,
            t === e.callbackPriority)
                return t;
            switch (i !== null && Ae(i),
            cl(a)) {
            case 2:
            case 8:
                a = Ca;
                break;
            case 32:
                a = la;
                break;
            case 268435456:
                a = Da;
                break;
            default:
                a = la
            }
            return i = Vm.bind(null, e),
            a = Et(a, i),
            e.callbackPriority = t,
            e.callbackNode = a,
            t
        }
        return i !== null && i !== null && Ae(i),
        e.callbackPriority = 2,
        e.callbackNode = null,
        2
    }
    function Vm(e, t) {
        if (_t !== 0 && _t !== 5)
            return e.callbackNode = null,
            e.callbackPriority = 0,
            null;
        var a = e.callbackNode;
        if (bo() && e.callbackNode !== a)
            return null;
        var i = Le;
        return i = ze(e, e === $e ? i : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        i === 0 ? null : (gm(e, i, t),
        Rm(e, We()),
        e.callbackNode != null && e.callbackNode === a ? Vm.bind(null, e) : null)
    }
    function zm(e, t) {
        if (bo())
            return null;
        gm(e, t, !0)
    }
    function vx() {
        Cx(function() {
            (Ge & 6) !== 0 ? Et(Sa, yx) : Om()
        })
    }
    function qu() {
        return tl === 0 && (tl = on()),
        tl
    }
    function Um(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Oi("" + e)
    }
    function Bm(e, t) {
        var a = t.ownerDocument.createElement("input");
        return a.name = t.name,
        a.value = t.value,
        e.id && a.setAttribute("form", e.id),
        t.parentNode.insertBefore(a, t),
        e = new FormData(e),
        a.parentNode.removeChild(a),
        e
    }
    function xx(e, t, a, i, r) {
        if (t === "submit" && a && a.stateNode === r) {
            var u = Um((r[Ct] || null).action)
              , y = i.submitter;
            y && (t = (t = y[Ct] || null) ? Um(t.formAction) : y.getAttribute("formAction"),
            t !== null && (u = t,
            y = null));
            var b = new Ui("action","action",null,i,r);
            e.push({
                event: b,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (i.defaultPrevented) {
                            if (tl !== 0) {
                                var A = y ? Bm(r, y) : new FormData(r);
                                ru(a, {
                                    pending: !0,
                                    data: A,
                                    method: r.method,
                                    action: u
                                }, null, A)
                            }
                        } else
                            typeof u == "function" && (b.preventDefault(),
                            A = y ? Bm(r, y) : new FormData(r),
                            ru(a, {
                                pending: !0,
                                data: A,
                                method: r.method,
                                action: u
                            }, u, A))
                    },
                    currentTarget: r
                }]
            })
        }
    }
    for (var Yu = 0; Yu < Er.length; Yu++) {
        var Gu = Er[Yu]
          , bx = Gu.toLowerCase()
          , Sx = Gu[0].toUpperCase() + Gu.slice(1);
        ja(bx, "on" + Sx)
    }
    ja(gd, "onAnimationEnd"),
    ja(yd, "onAnimationIteration"),
    ja(vd, "onAnimationStart"),
    ja("dblclick", "onDoubleClick"),
    ja("focusin", "onFocus"),
    ja("focusout", "onBlur"),
    ja(Lv, "onTransitionRun"),
    ja(kv, "onTransitionStart"),
    ja(Hv, "onTransitionCancel"),
    ja(xd, "onTransitionEnd"),
    Pe("onMouseEnter", ["mouseout", "mouseover"]),
    Pe("onMouseLeave", ["mouseout", "mouseover"]),
    Pe("onPointerEnter", ["pointerout", "pointerover"]),
    Pe("onPointerLeave", ["pointerout", "pointerover"]),
    Ne("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Ne("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Ne("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ne("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Ne("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Ne("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Xs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , Tx = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xs));
    function Lm(e, t) {
        t = (t & 4) !== 0;
        for (var a = 0; a < e.length; a++) {
            var i = e[a]
              , r = i.event;
            i = i.listeners;
            e: {
                var u = void 0;
                if (t)
                    for (var y = i.length - 1; 0 <= y; y--) {
                        var b = i[y]
                          , A = b.instance
                          , z = b.currentTarget;
                        if (b = b.listener,
                        A !== u && r.isPropagationStopped())
                            break e;
                        u = b,
                        r.currentTarget = z;
                        try {
                            u(r)
                        } catch (Q) {
                            ro(Q)
                        }
                        r.currentTarget = null,
                        u = A
                    }
                else
                    for (y = 0; y < i.length; y++) {
                        if (b = i[y],
                        A = b.instance,
                        z = b.currentTarget,
                        b = b.listener,
                        A !== u && r.isPropagationStopped())
                            break e;
                        u = b,
                        r.currentTarget = z;
                        try {
                            u(r)
                        } catch (Q) {
                            ro(Q)
                        }
                        r.currentTarget = null,
                        u = A
                    }
            }
        }
    }
    function Ve(e, t) {
        var a = t[fl];
        a === void 0 && (a = t[fl] = new Set);
        var i = e + "__bubble";
        a.has(i) || (km(t, e, 2, !1),
        a.add(i))
    }
    function Xu(e, t, a) {
        var i = 0;
        t && (i |= 4),
        km(a, e, i, t)
    }
    var jo = "_reactListening" + Math.random().toString(36).slice(2);
    function Ku(e) {
        if (!e[jo]) {
            e[jo] = !0,
            fe.forEach(function(a) {
                a !== "selectionchange" && (Tx.has(a) || Xu(a, !1, e),
                Xu(a, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[jo] || (t[jo] = !0,
            Xu("selectionchange", !1, t))
        }
    }
    function km(e, t, a, i) {
        switch (up(t)) {
        case 2:
            var r = Fx;
            break;
        case 8:
            r = Jx;
            break;
        default:
            r = ic
        }
        a = r.bind(null, t, a, e),
        r = void 0,
        !mr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (r = !0),
        i ? r !== void 0 ? e.addEventListener(t, a, {
            capture: !0,
            passive: r
        }) : e.addEventListener(t, a, !0) : r !== void 0 ? e.addEventListener(t, a, {
            passive: r
        }) : e.addEventListener(t, a, !1)
    }
    function Zu(e, t, a, i, r) {
        var u = i;
        if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
            e: for (; ; ) {
                if (i === null)
                    return;
                var y = i.tag;
                if (y === 3 || y === 4) {
                    var b = i.stateNode.containerInfo;
                    if (b === r)
                        break;
                    if (y === 4)
                        for (y = i.return; y !== null; ) {
                            var A = y.tag;
                            if ((A === 3 || A === 4) && y.stateNode.containerInfo === r)
                                return;
                            y = y.return
                        }
                    for (; b !== null; ) {
                        if (y = Pa(b),
                        y === null)
                            return;
                        if (A = y.tag,
                        A === 5 || A === 6 || A === 26 || A === 27) {
                            i = u = y;
                            continue e
                        }
                        b = b.parentNode
                    }
                }
                i = i.return
            }
        Kf(function() {
            var z = u
              , Q = dr(a)
              , W = [];
            e: {
                var P = bd.get(e);
                if (P !== void 0) {
                    var Y = Ui
                      , Te = e;
                    switch (e) {
                    case "keypress":
                        if (Vi(a) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        Y = gv;
                        break;
                    case "focusin":
                        Te = "focus",
                        Y = vr;
                        break;
                    case "focusout":
                        Te = "blur",
                        Y = vr;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        Y = vr;
                        break;
                    case "click":
                        if (a.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        Y = Ff;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        Y = lv;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        Y = xv;
                        break;
                    case gd:
                    case yd:
                    case vd:
                        Y = ov;
                        break;
                    case xd:
                        Y = Sv;
                        break;
                    case "scroll":
                    case "scrollend":
                        Y = av;
                        break;
                    case "wheel":
                        Y = jv;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        Y = uv;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        Y = If;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        Y = Av
                    }
                    var ye = (t & 4) !== 0
                      , Qe = !ye && (e === "scroll" || e === "scrollend")
                      , _ = ye ? P !== null ? P + "Capture" : null : P;
                    ye = [];
                    for (var E = z, V; E !== null; ) {
                        var I = E;
                        if (V = I.stateNode,
                        I = I.tag,
                        I !== 5 && I !== 26 && I !== 27 || V === null || _ === null || (I = cs(E, _),
                        I != null && ye.push(Ks(E, I, V))),
                        Qe)
                            break;
                        E = E.return
                    }
                    0 < ye.length && (P = new Y(P,Te,null,a,Q),
                    W.push({
                        event: P,
                        listeners: ye
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (P = e === "mouseover" || e === "pointerover",
                    Y = e === "mouseout" || e === "pointerout",
                    P && a !== fr && (Te = a.relatedTarget || a.fromElement) && (Pa(Te) || Te[Ha]))
                        break e;
                    if ((Y || P) && (P = Q.window === Q ? Q : (P = Q.ownerDocument) ? P.defaultView || P.parentWindow : window,
                    Y ? (Te = a.relatedTarget || a.toElement,
                    Y = z,
                    Te = Te ? Pa(Te) : null,
                    Te !== null && (Qe = h(Te),
                    ye = Te.tag,
                    Te !== Qe || ye !== 5 && ye !== 27 && ye !== 6) && (Te = null)) : (Y = null,
                    Te = z),
                    Y !== Te)) {
                        if (ye = Ff,
                        I = "onMouseLeave",
                        _ = "onMouseEnter",
                        E = "mouse",
                        (e === "pointerout" || e === "pointerover") && (ye = If,
                        I = "onPointerLeave",
                        _ = "onPointerEnter",
                        E = "pointer"),
                        Qe = Y == null ? P : un(Y),
                        V = Te == null ? P : un(Te),
                        P = new ye(I,E + "leave",Y,a,Q),
                        P.target = Qe,
                        P.relatedTarget = V,
                        I = null,
                        Pa(Q) === z && (ye = new ye(_,E + "enter",Te,a,Q),
                        ye.target = V,
                        ye.relatedTarget = Qe,
                        I = ye),
                        Qe = I,
                        Y && Te)
                            t: {
                                for (ye = Y,
                                _ = Te,
                                E = 0,
                                V = ye; V; V = Yl(V))
                                    E++;
                                for (V = 0,
                                I = _; I; I = Yl(I))
                                    V++;
                                for (; 0 < E - V; )
                                    ye = Yl(ye),
                                    E--;
                                for (; 0 < V - E; )
                                    _ = Yl(_),
                                    V--;
                                for (; E--; ) {
                                    if (ye === _ || _ !== null && ye === _.alternate)
                                        break t;
                                    ye = Yl(ye),
                                    _ = Yl(_)
                                }
                                ye = null
                            }
                        else
                            ye = null;
                        Y !== null && Hm(W, P, Y, ye, !1),
                        Te !== null && Qe !== null && Hm(W, Qe, Te, ye, !0)
                    }
                }
                e: {
                    if (P = z ? un(z) : window,
                    Y = P.nodeName && P.nodeName.toLowerCase(),
                    Y === "select" || Y === "input" && P.type === "file")
                        var ue = sd;
                    else if (nd(P))
                        if (id)
                            ue = zv;
                        else {
                            ue = Rv;
                            var Oe = Ov
                        }
                    else
                        Y = P.nodeName,
                        !Y || Y.toLowerCase() !== "input" || P.type !== "checkbox" && P.type !== "radio" ? z && cr(z.elementType) && (ue = sd) : ue = Vv;
                    if (ue && (ue = ue(e, z))) {
                        ld(W, ue, a, Q);
                        break e
                    }
                    Oe && Oe(e, P, z),
                    e === "focusout" && z && P.type === "number" && z.memoizedProps.value != null && ur(P, "number", P.value)
                }
                switch (Oe = z ? un(z) : window,
                e) {
                case "focusin":
                    (nd(Oe) || Oe.contentEditable === "true") && (xl = Oe,
                    wr = z,
                    vs = null);
                    break;
                case "focusout":
                    vs = wr = xl = null;
                    break;
                case "mousedown":
                    Ar = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Ar = !1,
                    md(W, a, Q);
                    break;
                case "selectionchange":
                    if (Bv)
                        break;
                case "keydown":
                case "keyup":
                    md(W, a, Q)
                }
                var me;
                if (br)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var Se = "onCompositionStart";
                            break e;
                        case "compositionend":
                            Se = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            Se = "onCompositionUpdate";
                            break e
                        }
                        Se = void 0
                    }
                else
                    vl ? td(e, a) && (Se = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (Se = "onCompositionStart");
                Se && ($f && a.locale !== "ko" && (vl || Se !== "onCompositionStart" ? Se === "onCompositionEnd" && vl && (me = Zf()) : (cn = Q,
                pr = "value"in cn ? cn.value : cn.textContent,
                vl = !0)),
                Oe = wo(z, Se),
                0 < Oe.length && (Se = new Jf(Se,e,null,a,Q),
                W.push({
                    event: Se,
                    listeners: Oe
                }),
                me ? Se.data = me : (me = ad(a),
                me !== null && (Se.data = me)))),
                (me = Ev ? Cv(e, a) : Dv(e, a)) && (Se = wo(z, "onBeforeInput"),
                0 < Se.length && (Oe = new Jf("onBeforeInput","beforeinput",null,a,Q),
                W.push({
                    event: Oe,
                    listeners: Se
                }),
                Oe.data = me)),
                xx(W, e, z, a, Q)
            }
            Lm(W, t)
        })
    }
    function Ks(e, t, a) {
        return {
            instance: e,
            listener: t,
            currentTarget: a
        }
    }
    function wo(e, t) {
        for (var a = t + "Capture", i = []; e !== null; ) {
            var r = e
              , u = r.stateNode;
            if (r = r.tag,
            r !== 5 && r !== 26 && r !== 27 || u === null || (r = cs(e, a),
            r != null && i.unshift(Ks(e, r, u)),
            r = cs(e, t),
            r != null && i.push(Ks(e, r, u))),
            e.tag === 3)
                return i;
            e = e.return
        }
        return []
    }
    function Yl(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }
    function Hm(e, t, a, i, r) {
        for (var u = t._reactName, y = []; a !== null && a !== i; ) {
            var b = a
              , A = b.alternate
              , z = b.stateNode;
            if (b = b.tag,
            A !== null && A === i)
                break;
            b !== 5 && b !== 26 && b !== 27 || z === null || (A = z,
            r ? (z = cs(a, u),
            z != null && y.unshift(Ks(a, z, A))) : r || (z = cs(a, u),
            z != null && y.push(Ks(a, z, A)))),
            a = a.return
        }
        y.length !== 0 && e.push({
            event: t,
            listeners: y
        })
    }
    var jx = /\r\n?/g
      , wx = /\u0000|\uFFFD/g;
    function Pm(e) {
        return (typeof e == "string" ? e : "" + e).replace(jx, `
`).replace(wx, "")
    }
    function qm(e, t) {
        return t = Pm(t),
        Pm(e) === t
    }
    function Ao() {}
    function Ze(e, t, a, i, r, u) {
        switch (a) {
        case "children":
            typeof i == "string" ? t === "body" || t === "textarea" && i === "" || pl(e, i) : (typeof i == "number" || typeof i == "bigint") && t !== "body" && pl(e, "" + i);
            break;
        case "className":
            kn(e, "class", i);
            break;
        case "tabIndex":
            kn(e, "tabindex", i);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            kn(e, a, i);
            break;
        case "style":
            Gf(e, i, u);
            break;
        case "data":
            if (t !== "object") {
                kn(e, "data", i);
                break
            }
        case "src":
        case "href":
            if (i === "" && (t !== "a" || a !== "href")) {
                e.removeAttribute(a);
                break
            }
            if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
                e.removeAttribute(a);
                break
            }
            i = Oi("" + i),
            e.setAttribute(a, i);
            break;
        case "action":
        case "formAction":
            if (typeof i == "function") {
                e.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof u == "function" && (a === "formAction" ? (t !== "input" && Ze(e, t, "name", r.name, r, null),
                Ze(e, t, "formEncType", r.formEncType, r, null),
                Ze(e, t, "formMethod", r.formMethod, r, null),
                Ze(e, t, "formTarget", r.formTarget, r, null)) : (Ze(e, t, "encType", r.encType, r, null),
                Ze(e, t, "method", r.method, r, null),
                Ze(e, t, "target", r.target, r, null)));
            if (i == null || typeof i == "symbol" || typeof i == "boolean") {
                e.removeAttribute(a);
                break
            }
            i = Oi("" + i),
            e.setAttribute(a, i);
            break;
        case "onClick":
            i != null && (e.onclick = Ao);
            break;
        case "onScroll":
            i != null && Ve("scroll", e);
            break;
        case "onScrollEnd":
            i != null && Ve("scrollend", e);
            break;
        case "dangerouslySetInnerHTML":
            if (i != null) {
                if (typeof i != "object" || !("__html"in i))
                    throw Error(o(61));
                if (a = i.__html,
                a != null) {
                    if (r.children != null)
                        throw Error(o(60));
                    e.innerHTML = a
                }
            }
            break;
        case "multiple":
            e.multiple = i && typeof i != "function" && typeof i != "symbol";
            break;
        case "muted":
            e.muted = i && typeof i != "function" && typeof i != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
                e.removeAttribute("xlink:href");
                break
            }
            a = Oi("" + i),
            e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            i != null && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "" + i) : e.removeAttribute(a);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
            break;
        case "capture":
        case "download":
            i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, i) : e.removeAttribute(a);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? e.setAttribute(a, i) : e.removeAttribute(a);
            break;
        case "rowSpan":
        case "start":
            i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : e.setAttribute(a, i);
            break;
        case "popover":
            Ve("beforetoggle", e),
            Ve("toggle", e),
            Jt(e, "popover", i);
            break;
        case "xlinkActuate":
            ia(e, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
            break;
        case "xlinkArcrole":
            ia(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
            break;
        case "xlinkRole":
            ia(e, "http://www.w3.org/1999/xlink", "xlink:role", i);
            break;
        case "xlinkShow":
            ia(e, "http://www.w3.org/1999/xlink", "xlink:show", i);
            break;
        case "xlinkTitle":
            ia(e, "http://www.w3.org/1999/xlink", "xlink:title", i);
            break;
        case "xlinkType":
            ia(e, "http://www.w3.org/1999/xlink", "xlink:type", i);
            break;
        case "xmlBase":
            ia(e, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
            break;
        case "xmlLang":
            ia(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
            break;
        case "xmlSpace":
            ia(e, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
            break;
        case "is":
            Jt(e, "is", i);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = ev.get(a) || a,
            Jt(e, a, i))
        }
    }
    function Qu(e, t, a, i, r, u) {
        switch (a) {
        case "style":
            Gf(e, i, u);
            break;
        case "dangerouslySetInnerHTML":
            if (i != null) {
                if (typeof i != "object" || !("__html"in i))
                    throw Error(o(61));
                if (a = i.__html,
                a != null) {
                    if (r.children != null)
                        throw Error(o(60));
                    e.innerHTML = a
                }
            }
            break;
        case "children":
            typeof i == "string" ? pl(e, i) : (typeof i == "number" || typeof i == "bigint") && pl(e, "" + i);
            break;
        case "onScroll":
            i != null && Ve("scroll", e);
            break;
        case "onScrollEnd":
            i != null && Ve("scrollend", e);
            break;
        case "onClick":
            i != null && (e.onclick = Ao);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!Ue.hasOwnProperty(a))
                e: {
                    if (a[0] === "o" && a[1] === "n" && (r = a.endsWith("Capture"),
                    t = a.slice(2, r ? a.length - 7 : void 0),
                    u = e[Ct] || null,
                    u = u != null ? u[a] : null,
                    typeof u == "function" && e.removeEventListener(t, u, r),
                    typeof i == "function")) {
                        typeof u != "function" && u !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)),
                        e.addEventListener(t, i, r);
                        break e
                    }
                    a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : Jt(e, a, i)
                }
        }
    }
    function Mt(e, t, a) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            Ve("error", e),
            Ve("load", e);
            var i = !1, r = !1, u;
            for (u in a)
                if (a.hasOwnProperty(u)) {
                    var y = a[u];
                    if (y != null)
                        switch (u) {
                        case "src":
                            i = !0;
                            break;
                        case "srcSet":
                            r = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(o(137, t));
                        default:
                            Ze(e, t, u, y, a, null)
                        }
                }
            r && Ze(e, t, "srcSet", a.srcSet, a, null),
            i && Ze(e, t, "src", a.src, a, null);
            return;
        case "input":
            Ve("invalid", e);
            var b = u = y = r = null
              , A = null
              , z = null;
            for (i in a)
                if (a.hasOwnProperty(i)) {
                    var Q = a[i];
                    if (Q != null)
                        switch (i) {
                        case "name":
                            r = Q;
                            break;
                        case "type":
                            y = Q;
                            break;
                        case "checked":
                            A = Q;
                            break;
                        case "defaultChecked":
                            z = Q;
                            break;
                        case "value":
                            u = Q;
                            break;
                        case "defaultValue":
                            b = Q;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (Q != null)
                                throw Error(o(137, t));
                            break;
                        default:
                            Ze(e, t, i, Q, a, null)
                        }
                }
            Hf(e, u, b, A, z, y, r, !1),
            _i(e);
            return;
        case "select":
            Ve("invalid", e),
            i = y = u = null;
            for (r in a)
                if (a.hasOwnProperty(r) && (b = a[r],
                b != null))
                    switch (r) {
                    case "value":
                        u = b;
                        break;
                    case "defaultValue":
                        y = b;
                        break;
                    case "multiple":
                        i = b;
                    default:
                        Ze(e, t, r, b, a, null)
                    }
            t = u,
            a = y,
            e.multiple = !!i,
            t != null ? ml(e, !!i, t, !1) : a != null && ml(e, !!i, a, !0);
            return;
        case "textarea":
            Ve("invalid", e),
            u = r = i = null;
            for (y in a)
                if (a.hasOwnProperty(y) && (b = a[y],
                b != null))
                    switch (y) {
                    case "value":
                        i = b;
                        break;
                    case "defaultValue":
                        r = b;
                        break;
                    case "children":
                        u = b;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (b != null)
                            throw Error(o(91));
                        break;
                    default:
                        Ze(e, t, y, b, a, null)
                    }
            qf(e, i, r, u),
            _i(e);
            return;
        case "option":
            for (A in a)
                if (a.hasOwnProperty(A) && (i = a[A],
                i != null))
                    switch (A) {
                    case "selected":
                        e.selected = i && typeof i != "function" && typeof i != "symbol";
                        break;
                    default:
                        Ze(e, t, A, i, a, null)
                    }
            return;
        case "dialog":
            Ve("beforetoggle", e),
            Ve("toggle", e),
            Ve("cancel", e),
            Ve("close", e);
            break;
        case "iframe":
        case "object":
            Ve("load", e);
            break;
        case "video":
        case "audio":
            for (i = 0; i < Xs.length; i++)
                Ve(Xs[i], e);
            break;
        case "image":
            Ve("error", e),
            Ve("load", e);
            break;
        case "details":
            Ve("toggle", e);
            break;
        case "embed":
        case "source":
        case "link":
            Ve("error", e),
            Ve("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (z in a)
                if (a.hasOwnProperty(z) && (i = a[z],
                i != null))
                    switch (z) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(o(137, t));
                    default:
                        Ze(e, t, z, i, a, null)
                    }
            return;
        default:
            if (cr(t)) {
                for (Q in a)
                    a.hasOwnProperty(Q) && (i = a[Q],
                    i !== void 0 && Qu(e, t, Q, i, a, void 0));
                return
            }
        }
        for (b in a)
            a.hasOwnProperty(b) && (i = a[b],
            i != null && Ze(e, t, b, i, a, null))
    }
    function Ax(e, t, a, i) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var r = null
              , u = null
              , y = null
              , b = null
              , A = null
              , z = null
              , Q = null;
            for (Y in a) {
                var W = a[Y];
                if (a.hasOwnProperty(Y) && W != null)
                    switch (Y) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        A = W;
                    default:
                        i.hasOwnProperty(Y) || Ze(e, t, Y, null, i, W)
                    }
            }
            for (var P in i) {
                var Y = i[P];
                if (W = a[P],
                i.hasOwnProperty(P) && (Y != null || W != null))
                    switch (P) {
                    case "type":
                        u = Y;
                        break;
                    case "name":
                        r = Y;
                        break;
                    case "checked":
                        z = Y;
                        break;
                    case "defaultChecked":
                        Q = Y;
                        break;
                    case "value":
                        y = Y;
                        break;
                    case "defaultValue":
                        b = Y;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (Y != null)
                            throw Error(o(137, t));
                        break;
                    default:
                        Y !== W && Ze(e, t, P, Y, i, W)
                    }
            }
            rr(e, y, b, A, z, Q, u, r);
            return;
        case "select":
            Y = y = b = P = null;
            for (u in a)
                if (A = a[u],
                a.hasOwnProperty(u) && A != null)
                    switch (u) {
                    case "value":
                        break;
                    case "multiple":
                        Y = A;
                    default:
                        i.hasOwnProperty(u) || Ze(e, t, u, null, i, A)
                    }
            for (r in i)
                if (u = i[r],
                A = a[r],
                i.hasOwnProperty(r) && (u != null || A != null))
                    switch (r) {
                    case "value":
                        P = u;
                        break;
                    case "defaultValue":
                        b = u;
                        break;
                    case "multiple":
                        y = u;
                    default:
                        u !== A && Ze(e, t, r, u, i, A)
                    }
            t = b,
            a = y,
            i = Y,
            P != null ? ml(e, !!a, P, !1) : !!i != !!a && (t != null ? ml(e, !!a, t, !0) : ml(e, !!a, a ? [] : "", !1));
            return;
        case "textarea":
            Y = P = null;
            for (b in a)
                if (r = a[b],
                a.hasOwnProperty(b) && r != null && !i.hasOwnProperty(b))
                    switch (b) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        Ze(e, t, b, null, i, r)
                    }
            for (y in i)
                if (r = i[y],
                u = a[y],
                i.hasOwnProperty(y) && (r != null || u != null))
                    switch (y) {
                    case "value":
                        P = r;
                        break;
                    case "defaultValue":
                        Y = r;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (r != null)
                            throw Error(o(91));
                        break;
                    default:
                        r !== u && Ze(e, t, y, r, i, u)
                    }
            Pf(e, P, Y);
            return;
        case "option":
            for (var Te in a)
                if (P = a[Te],
                a.hasOwnProperty(Te) && P != null && !i.hasOwnProperty(Te))
                    switch (Te) {
                    case "selected":
                        e.selected = !1;
                        break;
                    default:
                        Ze(e, t, Te, null, i, P)
                    }
            for (A in i)
                if (P = i[A],
                Y = a[A],
                i.hasOwnProperty(A) && P !== Y && (P != null || Y != null))
                    switch (A) {
                    case "selected":
                        e.selected = P && typeof P != "function" && typeof P != "symbol";
                        break;
                    default:
                        Ze(e, t, A, P, i, Y)
                    }
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var ye in a)
                P = a[ye],
                a.hasOwnProperty(ye) && P != null && !i.hasOwnProperty(ye) && Ze(e, t, ye, null, i, P);
            for (z in i)
                if (P = i[z],
                Y = a[z],
                i.hasOwnProperty(z) && P !== Y && (P != null || Y != null))
                    switch (z) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (P != null)
                            throw Error(o(137, t));
                        break;
                    default:
                        Ze(e, t, z, P, i, Y)
                    }
            return;
        default:
            if (cr(t)) {
                for (var Qe in a)
                    P = a[Qe],
                    a.hasOwnProperty(Qe) && P !== void 0 && !i.hasOwnProperty(Qe) && Qu(e, t, Qe, void 0, i, P);
                for (Q in i)
                    P = i[Q],
                    Y = a[Q],
                    !i.hasOwnProperty(Q) || P === Y || P === void 0 && Y === void 0 || Qu(e, t, Q, P, i, Y);
                return
            }
        }
        for (var _ in a)
            P = a[_],
            a.hasOwnProperty(_) && P != null && !i.hasOwnProperty(_) && Ze(e, t, _, null, i, P);
        for (W in i)
            P = i[W],
            Y = a[W],
            !i.hasOwnProperty(W) || P === Y || P == null && Y == null || Ze(e, t, W, P, i, Y)
    }
    var Fu = null
      , Ju = null;
    function No(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }
    function Ym(e) {
        switch (e) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function Gm(e, t) {
        if (e === 0)
            switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return e === 1 && t === "foreignObject" ? 0 : e
    }
    function Iu(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var $u = null;
    function Nx() {
        var e = window.event;
        return e && e.type === "popstate" ? e === $u ? !1 : ($u = e,
        !0) : ($u = null,
        !1)
    }
    var Xm = typeof setTimeout == "function" ? setTimeout : void 0
      , Ex = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Km = typeof Promise == "function" ? Promise : void 0
      , Cx = typeof queueMicrotask == "function" ? queueMicrotask : typeof Km < "u" ? function(e) {
        return Km.resolve(null).then(e).catch(Dx)
    }
    : Xm;
    function Dx(e) {
        setTimeout(function() {
            throw e
        })
    }
    function Nn(e) {
        return e === "head"
    }
    function Zm(e, t) {
        var a = t
          , i = 0
          , r = 0;
        do {
            var u = a.nextSibling;
            if (e.removeChild(a),
            u && u.nodeType === 8)
                if (a = u.data,
                a === "/$") {
                    if (0 < i && 8 > i) {
                        a = i;
                        var y = e.ownerDocument;
                        if (a & 1 && Zs(y.documentElement),
                        a & 2 && Zs(y.body),
                        a & 4)
                            for (a = y.head,
                            Zs(a),
                            y = a.firstChild; y; ) {
                                var b = y.nextSibling
                                  , A = y.nodeName;
                                y[rn] || A === "SCRIPT" || A === "STYLE" || A === "LINK" && y.rel.toLowerCase() === "stylesheet" || a.removeChild(y),
                                y = b
                            }
                    }
                    if (r === 0) {
                        e.removeChild(u),
                        ti(t);
                        return
                    }
                    r--
                } else
                    a === "$" || a === "$?" || a === "$!" ? r++ : i = a.charCodeAt(0) - 48;
            else
                i = 0;
            a = u
        } while (a);
        ti(t)
    }
    function Wu(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var a = t;
            switch (t = t.nextSibling,
            a.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                Wu(a),
                dl(a);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (a.rel.toLowerCase() === "stylesheet")
                    continue
            }
            e.removeChild(a)
        }
    }
    function _x(e, t, a, i) {
        for (; e.nodeType === 1; ) {
            var r = a;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
                    break
            } else if (i) {
                if (!e[rn])
                    switch (t) {
                    case "meta":
                        if (!e.hasAttribute("itemprop"))
                            break;
                        return e;
                    case "link":
                        if (u = e.getAttribute("rel"),
                        u === "stylesheet" && e.hasAttribute("data-precedence"))
                            break;
                        if (u !== r.rel || e.getAttribute("href") !== (r.href == null || r.href === "" ? null : r.href) || e.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin) || e.getAttribute("title") !== (r.title == null ? null : r.title))
                            break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence"))
                            break;
                        return e;
                    case "script":
                        if (u = e.getAttribute("src"),
                        (u !== (r.src == null ? null : r.src) || e.getAttribute("type") !== (r.type == null ? null : r.type) || e.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                            break;
                        return e;
                    default:
                        return e
                    }
            } else if (t === "input" && e.type === "hidden") {
                var u = r.name == null ? null : "" + r.name;
                if (r.type === "hidden" && e.getAttribute("name") === u)
                    return e
            } else
                return e;
            if (e = Aa(e.nextSibling),
            e === null)
                break
        }
        return null
    }
    function Mx(e, t, a) {
        if (t === "")
            return null;
        for (; e.nodeType !== 3; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Aa(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function ec(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete"
    }
    function Ox(e, t) {
        var a = e.ownerDocument;
        if (e.data !== "$?" || a.readyState === "complete")
            t();
        else {
            var i = function() {
                t(),
                a.removeEventListener("DOMContentLoaded", i)
            };
            a.addEventListener("DOMContentLoaded", i),
            e._reactRetry = i
        }
    }
    function Aa(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
                    break;
                if (t === "/$")
                    return null
            }
        }
        return e
    }
    var tc = null;
    function Qm(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var a = e.data;
                if (a === "$" || a === "$!" || a === "$?") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    a === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }
    function Fm(e, t, a) {
        switch (t = No(a),
        e) {
        case "html":
            if (e = t.documentElement,
            !e)
                throw Error(o(452));
            return e;
        case "head":
            if (e = t.head,
            !e)
                throw Error(o(453));
            return e;
        case "body":
            if (e = t.body,
            !e)
                throw Error(o(454));
            return e;
        default:
            throw Error(o(451))
        }
    }
    function Zs(e) {
        for (var t = e.attributes; t.length; )
            e.removeAttributeNode(t[0]);
        dl(e)
    }
    var pa = new Map
      , Jm = new Set;
    function Eo(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var nn = O.d;
    O.d = {
        f: Rx,
        r: Vx,
        D: zx,
        C: Ux,
        L: Bx,
        m: Lx,
        X: Hx,
        S: kx,
        M: Px
    };
    function Rx() {
        var e = nn.f()
          , t = vo();
        return e || t
    }
    function Vx(e) {
        var t = qa(e);
        t !== null && t.tag === 5 && t.type === "form" ? gh(t) : nn.r(e)
    }
    var Gl = typeof document > "u" ? null : document;
    function Im(e, t, a) {
        var i = Gl;
        if (i && typeof t == "string" && t) {
            var r = ra(t);
            r = 'link[rel="' + e + '"][href="' + r + '"]',
            typeof a == "string" && (r += '[crossorigin="' + a + '"]'),
            Jm.has(r) || (Jm.add(r),
            e = {
                rel: e,
                crossOrigin: a,
                href: t
            },
            i.querySelector(r) === null && (t = i.createElement("link"),
            Mt(t, "link", e),
            ce(t),
            i.head.appendChild(t)))
        }
    }
    function zx(e) {
        nn.D(e),
        Im("dns-prefetch", e, null)
    }
    function Ux(e, t) {
        nn.C(e, t),
        Im("preconnect", e, t)
    }
    function Bx(e, t, a) {
        nn.L(e, t, a);
        var i = Gl;
        if (i && e && t) {
            var r = 'link[rel="preload"][as="' + ra(t) + '"]';
            t === "image" && a && a.imageSrcSet ? (r += '[imagesrcset="' + ra(a.imageSrcSet) + '"]',
            typeof a.imageSizes == "string" && (r += '[imagesizes="' + ra(a.imageSizes) + '"]')) : r += '[href="' + ra(e) + '"]';
            var u = r;
            switch (t) {
            case "style":
                u = Xl(e);
                break;
            case "script":
                u = Kl(e)
            }
            pa.has(u) || (e = v({
                rel: "preload",
                href: t === "image" && a && a.imageSrcSet ? void 0 : e,
                as: t
            }, a),
            pa.set(u, e),
            i.querySelector(r) !== null || t === "style" && i.querySelector(Qs(u)) || t === "script" && i.querySelector(Fs(u)) || (t = i.createElement("link"),
            Mt(t, "link", e),
            ce(t),
            i.head.appendChild(t)))
        }
    }
    function Lx(e, t) {
        nn.m(e, t);
        var a = Gl;
        if (a && e) {
            var i = t && typeof t.as == "string" ? t.as : "script"
              , r = 'link[rel="modulepreload"][as="' + ra(i) + '"][href="' + ra(e) + '"]'
              , u = r;
            switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                u = Kl(e)
            }
            if (!pa.has(u) && (e = v({
                rel: "modulepreload",
                href: e
            }, t),
            pa.set(u, e),
            a.querySelector(r) === null)) {
                switch (i) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (a.querySelector(Fs(u)))
                        return
                }
                i = a.createElement("link"),
                Mt(i, "link", e),
                ce(i),
                a.head.appendChild(i)
            }
        }
    }
    function kx(e, t, a) {
        nn.S(e, t, a);
        var i = Gl;
        if (i && e) {
            var r = Ya(i).hoistableStyles
              , u = Xl(e);
            t = t || "default";
            var y = r.get(u);
            if (!y) {
                var b = {
                    loading: 0,
                    preload: null
                };
                if (y = i.querySelector(Qs(u)))
                    b.loading = 5;
                else {
                    e = v({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, a),
                    (a = pa.get(u)) && ac(e, a);
                    var A = y = i.createElement("link");
                    ce(A),
                    Mt(A, "link", e),
                    A._p = new Promise(function(z, Q) {
                        A.onload = z,
                        A.onerror = Q
                    }
                    ),
                    A.addEventListener("load", function() {
                        b.loading |= 1
                    }),
                    A.addEventListener("error", function() {
                        b.loading |= 2
                    }),
                    b.loading |= 4,
                    Co(y, t, i)
                }
                y = {
                    type: "stylesheet",
                    instance: y,
                    count: 1,
                    state: b
                },
                r.set(u, y)
            }
        }
    }
    function Hx(e, t) {
        nn.X(e, t);
        var a = Gl;
        if (a && e) {
            var i = Ya(a).hoistableScripts
              , r = Kl(e)
              , u = i.get(r);
            u || (u = a.querySelector(Fs(r)),
            u || (e = v({
                src: e,
                async: !0
            }, t),
            (t = pa.get(r)) && nc(e, t),
            u = a.createElement("script"),
            ce(u),
            Mt(u, "link", e),
            a.head.appendChild(u)),
            u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            },
            i.set(r, u))
        }
    }
    function Px(e, t) {
        nn.M(e, t);
        var a = Gl;
        if (a && e) {
            var i = Ya(a).hoistableScripts
              , r = Kl(e)
              , u = i.get(r);
            u || (u = a.querySelector(Fs(r)),
            u || (e = v({
                src: e,
                async: !0,
                type: "module"
            }, t),
            (t = pa.get(r)) && nc(e, t),
            u = a.createElement("script"),
            ce(u),
            Mt(u, "link", e),
            a.head.appendChild(u)),
            u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            },
            i.set(r, u))
        }
    }
    function $m(e, t, a, i) {
        var r = (r = G.current) ? Eo(r) : null;
        if (!r)
            throw Error(o(446));
        switch (e) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Xl(a.href),
            a = Ya(r).hoistableStyles,
            i = a.get(t),
            i || (i = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            a.set(t, i)),
            i) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                e = Xl(a.href);
                var u = Ya(r).hoistableStyles
                  , y = u.get(e);
                if (y || (r = r.ownerDocument || r,
                y = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                u.set(e, y),
                (u = r.querySelector(Qs(e))) && !u._p && (y.instance = u,
                y.state.loading = 5),
                pa.has(e) || (a = {
                    rel: "preload",
                    as: "style",
                    href: a.href,
                    crossOrigin: a.crossOrigin,
                    integrity: a.integrity,
                    media: a.media,
                    hrefLang: a.hrefLang,
                    referrerPolicy: a.referrerPolicy
                },
                pa.set(e, a),
                u || qx(r, e, a, y.state))),
                t && i === null)
                    throw Error(o(528, ""));
                return y
            }
            if (t && i !== null)
                throw Error(o(529, ""));
            return null;
        case "script":
            return t = a.async,
            a = a.src,
            typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Kl(a),
            a = Ya(r).hoistableScripts,
            i = a.get(t),
            i || (i = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            a.set(t, i)),
            i) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(o(444, e))
        }
    }
    function Xl(e) {
        return 'href="' + ra(e) + '"'
    }
    function Qs(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }
    function Wm(e) {
        return v({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }
    function qx(e, t, a, i) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? i.loading = 1 : (t = e.createElement("link"),
        i.preload = t,
        t.addEventListener("load", function() {
            return i.loading |= 1
        }),
        t.addEventListener("error", function() {
            return i.loading |= 2
        }),
        Mt(t, "link", a),
        ce(t),
        e.head.appendChild(t))
    }
    function Kl(e) {
        return '[src="' + ra(e) + '"]'
    }
    function Fs(e) {
        return "script[async]" + e
    }
    function ep(e, t, a) {
        if (t.count++,
        t.instance === null)
            switch (t.type) {
            case "style":
                var i = e.querySelector('style[data-href~="' + ra(a.href) + '"]');
                if (i)
                    return t.instance = i,
                    ce(i),
                    i;
                var r = v({}, a, {
                    "data-href": a.href,
                    "data-precedence": a.precedence,
                    href: null,
                    precedence: null
                });
                return i = (e.ownerDocument || e).createElement("style"),
                ce(i),
                Mt(i, "style", r),
                Co(i, a.precedence, e),
                t.instance = i;
            case "stylesheet":
                r = Xl(a.href);
                var u = e.querySelector(Qs(r));
                if (u)
                    return t.state.loading |= 4,
                    t.instance = u,
                    ce(u),
                    u;
                i = Wm(a),
                (r = pa.get(r)) && ac(i, r),
                u = (e.ownerDocument || e).createElement("link"),
                ce(u);
                var y = u;
                return y._p = new Promise(function(b, A) {
                    y.onload = b,
                    y.onerror = A
                }
                ),
                Mt(u, "link", i),
                t.state.loading |= 4,
                Co(u, a.precedence, e),
                t.instance = u;
            case "script":
                return u = Kl(a.src),
                (r = e.querySelector(Fs(u))) ? (t.instance = r,
                ce(r),
                r) : (i = a,
                (r = pa.get(u)) && (i = v({}, a),
                nc(i, r)),
                e = e.ownerDocument || e,
                r = e.createElement("script"),
                ce(r),
                Mt(r, "link", i),
                e.head.appendChild(r),
                t.instance = r);
            case "void":
                return null;
            default:
                throw Error(o(443, t.type))
            }
        else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (i = t.instance,
            t.state.loading |= 4,
            Co(i, a.precedence, e));
        return t.instance
    }
    function Co(e, t, a) {
        for (var i = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), r = i.length ? i[i.length - 1] : null, u = r, y = 0; y < i.length; y++) {
            var b = i[y];
            if (b.dataset.precedence === t)
                u = b;
            else if (u !== r)
                break
        }
        u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = a.nodeType === 9 ? a.head : a,
        t.insertBefore(e, t.firstChild))
    }
    function ac(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.title == null && (e.title = t.title)
    }
    function nc(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.integrity == null && (e.integrity = t.integrity)
    }
    var Do = null;
    function tp(e, t, a) {
        if (Do === null) {
            var i = new Map
              , r = Do = new Map;
            r.set(a, i)
        } else
            r = Do,
            i = r.get(a),
            i || (i = new Map,
            r.set(a, i));
        if (i.has(e))
            return i;
        for (i.set(e, null),
        a = a.getElementsByTagName(e),
        r = 0; r < a.length; r++) {
            var u = a[r];
            if (!(u[rn] || u[St] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
                var y = u.getAttribute(t) || "";
                y = e + y;
                var b = i.get(y);
                b ? b.push(u) : i.set(y, [u])
            }
        }
        return i
    }
    function ap(e, t, a) {
        e = e.ownerDocument || e,
        e.head.insertBefore(a, t === "title" ? e.querySelector("head > title") : null)
    }
    function Yx(e, t, a) {
        if (a === 1 || t.itemProp != null)
            return !1;
        switch (e) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                break;
            return !0;
        case "link":
            if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                break;
            switch (t.rel) {
            case "stylesheet":
                return e = t.disabled,
                typeof t.precedence == "string" && e == null;
            default:
                return !0
            }
        case "script":
            if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
                return !0
        }
        return !1
    }
    function np(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    var Js = null;
    function Gx() {}
    function Xx(e, t, a) {
        if (Js === null)
            throw Error(o(475));
        var i = Js;
        if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
            if (t.instance === null) {
                var r = Xl(a.href)
                  , u = e.querySelector(Qs(r));
                if (u) {
                    e = u._p,
                    e !== null && typeof e == "object" && typeof e.then == "function" && (i.count++,
                    i = _o.bind(i),
                    e.then(i, i)),
                    t.state.loading |= 4,
                    t.instance = u,
                    ce(u);
                    return
                }
                u = e.ownerDocument || e,
                a = Wm(a),
                (r = pa.get(r)) && ac(a, r),
                u = u.createElement("link"),
                ce(u);
                var y = u;
                y._p = new Promise(function(b, A) {
                    y.onload = b,
                    y.onerror = A
                }
                ),
                Mt(u, "link", a),
                t.instance = u
            }
            i.stylesheets === null && (i.stylesheets = new Map),
            i.stylesheets.set(t, e),
            (e = t.state.preload) && (t.state.loading & 3) === 0 && (i.count++,
            t = _o.bind(i),
            e.addEventListener("load", t),
            e.addEventListener("error", t))
        }
    }
    function Kx() {
        if (Js === null)
            throw Error(o(475));
        var e = Js;
        return e.stylesheets && e.count === 0 && lc(e, e.stylesheets),
        0 < e.count ? function(t) {
            var a = setTimeout(function() {
                if (e.stylesheets && lc(e, e.stylesheets),
                e.unsuspend) {
                    var i = e.unsuspend;
                    e.unsuspend = null,
                    i()
                }
            }, 6e4);
            return e.unsuspend = t,
            function() {
                e.unsuspend = null,
                clearTimeout(a)
            }
        }
        : null
    }
    function _o() {
        if (this.count--,
        this.count === 0) {
            if (this.stylesheets)
                lc(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null,
                e()
            }
        }
    }
    var Mo = null;
    function lc(e, t) {
        e.stylesheets = null,
        e.unsuspend !== null && (e.count++,
        Mo = new Map,
        t.forEach(Zx, e),
        Mo = null,
        _o.call(e))
    }
    function Zx(e, t) {
        if (!(t.state.loading & 4)) {
            var a = Mo.get(e);
            if (a)
                var i = a.get(null);
            else {
                a = new Map,
                Mo.set(e, a);
                for (var r = e.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < r.length; u++) {
                    var y = r[u];
                    (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (a.set(y.dataset.precedence, y),
                    i = y)
                }
                i && a.set(null, i)
            }
            r = t.instance,
            y = r.getAttribute("data-precedence"),
            u = a.get(y) || i,
            u === i && a.set(null, r),
            a.set(y, r),
            this.count++,
            i = _o.bind(this),
            r.addEventListener("load", i),
            r.addEventListener("error", i),
            u ? u.parentNode.insertBefore(r, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
            e.insertBefore(r, e.firstChild)),
            t.state.loading |= 4
        }
    }
    var Is = {
        $$typeof: B,
        Provider: null,
        Consumer: null,
        _currentValue: q,
        _currentValue2: q,
        _threadCount: 0
    };
    function Qx(e, t, a, i, r, u, y, b) {
        this.tag = 1,
        this.containerInfo = e,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = we(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = we(0),
        this.hiddenUpdates = we(null),
        this.identifierPrefix = i,
        this.onUncaughtError = r,
        this.onCaughtError = u,
        this.onRecoverableError = y,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = b,
        this.incompleteTransitions = new Map
    }
    function lp(e, t, a, i, r, u, y, b, A, z, Q, W) {
        return e = new Qx(e,t,a,y,b,A,z,W),
        t = 1,
        u === !0 && (t |= 24),
        u = $t(3, null, null, t),
        e.current = u,
        u.stateNode = e,
        t = kr(),
        t.refCount++,
        e.pooledCache = t,
        t.refCount++,
        u.memoizedState = {
            element: i,
            isDehydrated: a,
            cache: t
        },
        Yr(u),
        e
    }
    function sp(e) {
        return e ? (e = jl,
        e) : jl
    }
    function ip(e, t, a, i, r, u) {
        r = sp(r),
        i.context === null ? i.context = r : i.pendingContext = r,
        i = hn(t),
        i.payload = {
            element: a
        },
        u = u === void 0 ? null : u,
        u !== null && (i.callback = u),
        a = mn(e, i, t),
        a !== null && (na(a, e, t),
        Es(a, e, t))
    }
    function op(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var a = e.retryLane;
            e.retryLane = a !== 0 && a < t ? a : t
        }
    }
    function sc(e, t) {
        op(e, t),
        (e = e.alternate) && op(e, t)
    }
    function rp(e) {
        if (e.tag === 13) {
            var t = Tl(e, 67108864);
            t !== null && na(t, e, 67108864),
            sc(e, 67108864)
        }
    }
    var Oo = !0;
    function Fx(e, t, a, i) {
        var r = N.T;
        N.T = null;
        var u = O.p;
        try {
            O.p = 2,
            ic(e, t, a, i)
        } finally {
            O.p = u,
            N.T = r
        }
    }
    function Jx(e, t, a, i) {
        var r = N.T;
        N.T = null;
        var u = O.p;
        try {
            O.p = 8,
            ic(e, t, a, i)
        } finally {
            O.p = u,
            N.T = r
        }
    }
    function ic(e, t, a, i) {
        if (Oo) {
            var r = oc(i);
            if (r === null)
                Zu(e, t, i, Ro, a),
                cp(e, i);
            else if ($x(r, e, t, a, i))
                i.stopPropagation();
            else if (cp(e, i),
            t & 4 && -1 < Ix.indexOf(e)) {
                for (; r !== null; ) {
                    var u = qa(r);
                    if (u !== null)
                        switch (u.tag) {
                        case 3:
                            if (u = u.stateNode,
                            u.current.memoizedState.isDehydrated) {
                                var y = Je(u.pendingLanes);
                                if (y !== 0) {
                                    var b = u;
                                    for (b.pendingLanes |= 2,
                                    b.entangledLanes |= 2; y; ) {
                                        var A = 1 << 31 - pt(y);
                                        b.entanglements[1] |= A,
                                        y &= ~A
                                    }
                                    Va(u),
                                    (Ge & 6) === 0 && (go = We() + 500,
                                    Gs(0))
                                }
                            }
                            break;
                        case 13:
                            b = Tl(u, 2),
                            b !== null && na(b, u, 2),
                            vo(),
                            sc(u, 2)
                        }
                    if (u = oc(i),
                    u === null && Zu(e, t, i, Ro, a),
                    u === r)
                        break;
                    r = u
                }
                r !== null && i.stopPropagation()
            } else
                Zu(e, t, i, null, a)
        }
    }
    function oc(e) {
        return e = dr(e),
        rc(e)
    }
    var Ro = null;
    function rc(e) {
        if (Ro = null,
        e = Pa(e),
        e !== null) {
            var t = h(e);
            if (t === null)
                e = null;
            else {
                var a = t.tag;
                if (a === 13) {
                    if (e = d(t),
                    e !== null)
                        return e;
                    e = null
                } else if (a === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else
                    t !== e && (e = null)
            }
        }
        return Ro = e,
        null
    }
    function up(e) {
        switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (Ea()) {
            case Sa:
                return 2;
            case Ca:
                return 8;
            case la:
            case La:
                return 32;
            case Da:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var uc = !1
      , En = null
      , Cn = null
      , Dn = null
      , $s = new Map
      , Ws = new Map
      , _n = []
      , Ix = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function cp(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            En = null;
            break;
        case "dragenter":
        case "dragleave":
            Cn = null;
            break;
        case "mouseover":
        case "mouseout":
            Dn = null;
            break;
        case "pointerover":
        case "pointerout":
            $s.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Ws.delete(t.pointerId)
        }
    }
    function ei(e, t, a, i, r, u) {
        return e === null || e.nativeEvent !== u ? (e = {
            blockedOn: t,
            domEventName: a,
            eventSystemFlags: i,
            nativeEvent: u,
            targetContainers: [r]
        },
        t !== null && (t = qa(t),
        t !== null && rp(t)),
        e) : (e.eventSystemFlags |= i,
        t = e.targetContainers,
        r !== null && t.indexOf(r) === -1 && t.push(r),
        e)
    }
    function $x(e, t, a, i, r) {
        switch (t) {
        case "focusin":
            return En = ei(En, e, t, a, i, r),
            !0;
        case "dragenter":
            return Cn = ei(Cn, e, t, a, i, r),
            !0;
        case "mouseover":
            return Dn = ei(Dn, e, t, a, i, r),
            !0;
        case "pointerover":
            var u = r.pointerId;
            return $s.set(u, ei($s.get(u) || null, e, t, a, i, r)),
            !0;
        case "gotpointercapture":
            return u = r.pointerId,
            Ws.set(u, ei(Ws.get(u) || null, e, t, a, i, r)),
            !0
        }
        return !1
    }
    function fp(e) {
        var t = Pa(e.target);
        if (t !== null) {
            var a = h(t);
            if (a !== null) {
                if (t = a.tag,
                t === 13) {
                    if (t = d(a),
                    t !== null) {
                        e.blockedOn = t,
                        Ei(e.priority, function() {
                            if (a.tag === 13) {
                                var i = aa();
                                i = ul(i);
                                var r = Tl(a, i);
                                r !== null && na(r, a, i),
                                sc(a, i)
                            }
                        });
                        return
                    }
                } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function Vo(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var a = oc(e.nativeEvent);
            if (a === null) {
                a = e.nativeEvent;
                var i = new a.constructor(a.type,a);
                fr = i,
                a.target.dispatchEvent(i),
                fr = null
            } else
                return t = qa(a),
                t !== null && rp(t),
                e.blockedOn = a,
                !1;
            t.shift()
        }
        return !0
    }
    function dp(e, t, a) {
        Vo(e) && a.delete(t)
    }
    function Wx() {
        uc = !1,
        En !== null && Vo(En) && (En = null),
        Cn !== null && Vo(Cn) && (Cn = null),
        Dn !== null && Vo(Dn) && (Dn = null),
        $s.forEach(dp),
        Ws.forEach(dp)
    }
    function zo(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        uc || (uc = !0,
        n.unstable_scheduleCallback(n.unstable_NormalPriority, Wx)))
    }
    var Uo = null;
    function hp(e) {
        Uo !== e && (Uo = e,
        n.unstable_scheduleCallback(n.unstable_NormalPriority, function() {
            Uo === e && (Uo = null);
            for (var t = 0; t < e.length; t += 3) {
                var a = e[t]
                  , i = e[t + 1]
                  , r = e[t + 2];
                if (typeof i != "function") {
                    if (rc(i || a) === null)
                        continue;
                    break
                }
                var u = qa(a);
                u !== null && (e.splice(t, 3),
                t -= 3,
                ru(u, {
                    pending: !0,
                    data: r,
                    method: a.method,
                    action: i
                }, i, r))
            }
        }))
    }
    function ti(e) {
        function t(A) {
            return zo(A, e)
        }
        En !== null && zo(En, e),
        Cn !== null && zo(Cn, e),
        Dn !== null && zo(Dn, e),
        $s.forEach(t),
        Ws.forEach(t);
        for (var a = 0; a < _n.length; a++) {
            var i = _n[a];
            i.blockedOn === e && (i.blockedOn = null)
        }
        for (; 0 < _n.length && (a = _n[0],
        a.blockedOn === null); )
            fp(a),
            a.blockedOn === null && _n.shift();
        if (a = (e.ownerDocument || e).$$reactFormReplay,
        a != null)
            for (i = 0; i < a.length; i += 3) {
                var r = a[i]
                  , u = a[i + 1]
                  , y = r[Ct] || null;
                if (typeof u == "function")
                    y || hp(a);
                else if (y) {
                    var b = null;
                    if (u && u.hasAttribute("formAction")) {
                        if (r = u,
                        y = u[Ct] || null)
                            b = y.formAction;
                        else if (rc(r) !== null)
                            continue
                    } else
                        b = y.action;
                    typeof b == "function" ? a[i + 1] = b : (a.splice(i, 3),
                    i -= 3),
                    hp(a)
                }
            }
    }
    function cc(e) {
        this._internalRoot = e
    }
    Bo.prototype.render = cc.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(o(409));
        var a = t.current
          , i = aa();
        ip(a, i, e, t, null, null)
    }
    ,
    Bo.prototype.unmount = cc.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            ip(e.current, 2, null, e, null, null),
            vo(),
            t[Ha] = null
        }
    }
    ;
    function Bo(e) {
        this._internalRoot = e
    }
    Bo.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = is();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var a = 0; a < _n.length && t !== 0 && t < _n[a].priority; a++)
                ;
            _n.splice(a, 0, e),
            a === 0 && fp(e)
        }
    }
    ;
    var mp = l.version;
    if (mp !== "19.1.0")
        throw Error(o(527, mp, "19.1.0"));
    O.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","),
            Error(o(268, e)));
        return e = m(t),
        e = e !== null ? g(e) : null,
        e = e === null ? null : e.stateNode,
        e
    }
    ;
    var eb = {
        bundleType: 0,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: N,
        reconcilerVersion: "19.1.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Lo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Lo.isDisabled && Lo.supportsFiber)
            try {
                Vt = Lo.inject(eb),
                at = Lo
            } catch {}
    }
    return ni.createRoot = function(e, t) {
        if (!c(e))
            throw Error(o(299));
        var a = !1
          , i = ""
          , r = _h
          , u = Mh
          , y = Oh
          , b = null;
        return t != null && (t.unstable_strictMode === !0 && (a = !0),
        t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (r = t.onUncaughtError),
        t.onCaughtError !== void 0 && (u = t.onCaughtError),
        t.onRecoverableError !== void 0 && (y = t.onRecoverableError),
        t.unstable_transitionCallbacks !== void 0 && (b = t.unstable_transitionCallbacks)),
        t = lp(e, 1, !1, null, null, a, i, r, u, y, b, null),
        e[Ha] = t.current,
        Ku(e),
        new cc(t)
    }
    ,
    ni.hydrateRoot = function(e, t, a) {
        if (!c(e))
            throw Error(o(299));
        var i = !1
          , r = ""
          , u = _h
          , y = Mh
          , b = Oh
          , A = null
          , z = null;
        return a != null && (a.unstable_strictMode === !0 && (i = !0),
        a.identifierPrefix !== void 0 && (r = a.identifierPrefix),
        a.onUncaughtError !== void 0 && (u = a.onUncaughtError),
        a.onCaughtError !== void 0 && (y = a.onCaughtError),
        a.onRecoverableError !== void 0 && (b = a.onRecoverableError),
        a.unstable_transitionCallbacks !== void 0 && (A = a.unstable_transitionCallbacks),
        a.formState !== void 0 && (z = a.formState)),
        t = lp(e, 1, !0, t, a ?? null, i, r, u, y, b, A, z),
        t.context = sp(null),
        a = t.current,
        i = aa(),
        i = ul(i),
        r = hn(i),
        r.callback = null,
        mn(a, r, i),
        a = i,
        t.current.lanes = a,
        gt(t, a),
        Va(t),
        e[Ha] = t.current,
        Ku(e),
        new Bo(t)
    }
    ,
    ni.version = "19.1.0",
    ni
}
var wp;
function db() {
    if (wp)
        return hc.exports;
    wp = 1;
    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (l) {
                console.error(l)
            }
    }
    return n(),
    hc.exports = fb(),
    hc.exports
}
var hb = db();
const Wc = T.createContext({});
function ef(n) {
    const l = T.useRef(null);
    return l.current === null && (l.current = n()),
    l.current
}
const tf = typeof window < "u"
  , Jg = tf ? T.useLayoutEffect : T.useEffect
  , Wo = T.createContext(null);
function af(n, l) {
    n.indexOf(l) === -1 && n.push(l)
}
function nf(n, l) {
    const s = n.indexOf(l);
    s > -1 && n.splice(s, 1)
}
const ln = (n, l, s) => s > l ? l : s < n ? n : s;
let lf = () => {}
;
const sn = {}
  , Ig = n => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);
function $g(n) {
    return typeof n == "object" && n !== null
}
const Wg = n => /^0[^.\s]+$/u.test(n);
function sf(n) {
    let l;
    return () => (l === void 0 && (l = n()),
    l)
}
const xa = n => n
  , mb = (n, l) => s => l(n(s))
  , Si = (...n) => n.reduce(mb)
  , di = (n, l, s) => {
    const o = l - n;
    return o === 0 ? 1 : (s - n) / o
}
;
class of {
    constructor() {
        this.subscriptions = []
    }
    add(l) {
        return af(this.subscriptions, l),
        () => nf(this.subscriptions, l)
    }
    notify(l, s, o) {
        const c = this.subscriptions.length;
        if (c)
            if (c === 1)
                this.subscriptions[0](l, s, o);
            else
                for (let h = 0; h < c; h++) {
                    const d = this.subscriptions[h];
                    d && d(l, s, o)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const za = n => n * 1e3
  , Ua = n => n / 1e3;
function e0(n, l) {
    return l ? n * (1e3 / l) : 0
}
const t0 = (n, l, s) => (((1 - 3 * s + 3 * l) * n + (3 * s - 6 * l)) * n + 3 * l) * n
  , pb = 1e-7
  , gb = 12;
function yb(n, l, s, o, c) {
    let h, d, p = 0;
    do
        d = l + (s - l) / 2,
        h = t0(d, o, c) - n,
        h > 0 ? s = d : l = d;
    while (Math.abs(h) > pb && ++p < gb);
    return d
}
function Ti(n, l, s, o) {
    if (n === l && s === o)
        return xa;
    const c = h => yb(h, 0, 1, n, s);
    return h => h === 0 || h === 1 ? h : t0(c(h), l, o)
}
const a0 = n => l => l <= .5 ? n(2 * l) / 2 : (2 - n(2 * (1 - l))) / 2
  , n0 = n => l => 1 - n(1 - l)
  , l0 = Ti(.33, 1.53, .69, .99)
  , rf = n0(l0)
  , s0 = a0(rf)
  , i0 = n => (n *= 2) < 1 ? .5 * rf(n) : .5 * (2 - Math.pow(2, -10 * (n - 1)))
  , uf = n => 1 - Math.sin(Math.acos(n))
  , o0 = n0(uf)
  , r0 = a0(uf)
  , vb = Ti(.42, 0, 1, 1)
  , xb = Ti(0, 0, .58, 1)
  , u0 = Ti(.42, 0, .58, 1)
  , bb = n => Array.isArray(n) && typeof n[0] != "number"
  , c0 = n => Array.isArray(n) && typeof n[0] == "number"
  , Sb = {
    linear: xa,
    easeIn: vb,
    easeInOut: u0,
    easeOut: xb,
    circIn: uf,
    circInOut: r0,
    circOut: o0,
    backIn: rf,
    backInOut: s0,
    backOut: l0,
    anticipate: i0
}
  , Tb = n => typeof n == "string"
  , Ap = n => {
    if (c0(n)) {
        lf(n.length === 4);
        const [l,s,o,c] = n;
        return Ti(l, s, o, c)
    } else if (Tb(n))
        return Sb[n];
    return n
}
  , ko = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"]
  , Np = {
    value: null
};
function jb(n, l) {
    let s = new Set
      , o = new Set
      , c = !1
      , h = !1;
    const d = new WeakSet;
    let p = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , m = 0;
    function g(x) {
        d.has(x) && (v.schedule(x),
        n()),
        m++,
        x(p)
    }
    const v = {
        schedule: (x, S=!1, w=!1) => {
            const M = w && c ? s : o;
            return S && d.add(x),
            M.has(x) || M.add(x),
            x
        }
        ,
        cancel: x => {
            o.delete(x),
            d.delete(x)
        }
        ,
        process: x => {
            if (p = x,
            c) {
                h = !0;
                return
            }
            c = !0,
            [s,o] = [o, s],
            s.forEach(g),
            l && Np.value && Np.value.frameloop[l].push(m),
            m = 0,
            s.clear(),
            c = !1,
            h && (h = !1,
            v.process(x))
        }
    };
    return v
}
const wb = 40;
function f0(n, l) {
    let s = !1
      , o = !0;
    const c = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , h = () => s = !0
      , d = ko.reduce( (B, F) => (B[F] = jb(h, l ? F : void 0),
    B), {})
      , {setup: p, read: m, resolveKeyframes: g, preUpdate: v, update: x, preRender: S, render: w, postRender: C} = d
      , M = () => {
        const B = sn.useManualTiming ? c.timestamp : performance.now();
        s = !1,
        sn.useManualTiming || (c.delta = o ? 1e3 / 60 : Math.max(Math.min(B - c.timestamp, wb), 1)),
        c.timestamp = B,
        c.isProcessing = !0,
        p.process(c),
        m.process(c),
        g.process(c),
        v.process(c),
        x.process(c),
        S.process(c),
        w.process(c),
        C.process(c),
        c.isProcessing = !1,
        s && l && (o = !1,
        n(M))
    }
      , D = () => {
        s = !0,
        o = !0,
        c.isProcessing || n(M)
    }
    ;
    return {
        schedule: ko.reduce( (B, F) => {
            const R = d[F];
            return B[F] = ($, te=!1, J=!1) => (s || D(),
            R.schedule($, te, J)),
            B
        }
        , {}),
        cancel: B => {
            for (let F = 0; F < ko.length; F++)
                d[ko[F]].cancel(B)
        }
        ,
        state: c,
        steps: d
    }
}
const {schedule: it, cancel: Vn, state: Ot, steps: yc} = f0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : xa, !0);
let Yo;
function Ab() {
    Yo = void 0
}
const Ft = {
    now: () => (Yo === void 0 && Ft.set(Ot.isProcessing || sn.useManualTiming ? Ot.timestamp : performance.now()),
    Yo),
    set: n => {
        Yo = n,
        queueMicrotask(Ab)
    }
}
  , d0 = n => l => typeof l == "string" && l.startsWith(n)
  , cf = d0("--")
  , Nb = d0("var(--")
  , ff = n => Nb(n) ? Eb.test(n.split("/*")[0].trim()) : !1
  , Eb = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , es = {
    test: n => typeof n == "number",
    parse: parseFloat,
    transform: n => n
}
  , hi = {
    ...es,
    transform: n => ln(0, 1, n)
}
  , Ho = {
    ...es,
    default: 1
}
  , oi = n => Math.round(n * 1e5) / 1e5
  , df = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Cb(n) {
    return n == null
}
const Db = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , hf = (n, l) => s => !!(typeof s == "string" && Db.test(s) && s.startsWith(n) || l && !Cb(s) && Object.prototype.hasOwnProperty.call(s, l))
  , h0 = (n, l, s) => o => {
    if (typeof o != "string")
        return o;
    const [c,h,d,p] = o.match(df);
    return {
        [n]: parseFloat(c),
        [l]: parseFloat(h),
        [s]: parseFloat(d),
        alpha: p !== void 0 ? parseFloat(p) : 1
    }
}
  , _b = n => ln(0, 255, n)
  , vc = {
    ...es,
    transform: n => Math.round(_b(n))
}
  , ll = {
    test: hf("rgb", "red"),
    parse: h0("red", "green", "blue"),
    transform: ({red: n, green: l, blue: s, alpha: o=1}) => "rgba(" + vc.transform(n) + ", " + vc.transform(l) + ", " + vc.transform(s) + ", " + oi(hi.transform(o)) + ")"
};
function Mb(n) {
    let l = ""
      , s = ""
      , o = ""
      , c = "";
    return n.length > 5 ? (l = n.substring(1, 3),
    s = n.substring(3, 5),
    o = n.substring(5, 7),
    c = n.substring(7, 9)) : (l = n.substring(1, 2),
    s = n.substring(2, 3),
    o = n.substring(3, 4),
    c = n.substring(4, 5),
    l += l,
    s += s,
    o += o,
    c += c),
    {
        red: parseInt(l, 16),
        green: parseInt(s, 16),
        blue: parseInt(o, 16),
        alpha: c ? parseInt(c, 16) / 255 : 1
    }
}
const Mc = {
    test: hf("#"),
    parse: Mb,
    transform: ll.transform
}
  , ji = n => ({
    test: l => typeof l == "string" && l.endsWith(n) && l.split(" ").length === 1,
    parse: parseFloat,
    transform: l => `${l}${n}`
})
  , On = ji("deg")
  , Ba = ji("%")
  , je = ji("px")
  , Ob = ji("vh")
  , Rb = ji("vw")
  , Ep = {
    ...Ba,
    parse: n => Ba.parse(n) / 100,
    transform: n => Ba.transform(n * 100)
}
  , Zl = {
    test: hf("hsl", "hue"),
    parse: h0("hue", "saturation", "lightness"),
    transform: ({hue: n, saturation: l, lightness: s, alpha: o=1}) => "hsla(" + Math.round(n) + ", " + Ba.transform(oi(l)) + ", " + Ba.transform(oi(s)) + ", " + oi(hi.transform(o)) + ")"
}
  , xt = {
    test: n => ll.test(n) || Mc.test(n) || Zl.test(n),
    parse: n => ll.test(n) ? ll.parse(n) : Zl.test(n) ? Zl.parse(n) : Mc.parse(n),
    transform: n => typeof n == "string" ? n : n.hasOwnProperty("red") ? ll.transform(n) : Zl.transform(n),
    getAnimatableNone: n => {
        const l = xt.parse(n);
        return l.alpha = 0,
        xt.transform(l)
    }
}
  , Vb = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function zb(n) {
    var l, s;
    return isNaN(n) && typeof n == "string" && (((l = n.match(df)) == null ? void 0 : l.length) || 0) + (((s = n.match(Vb)) == null ? void 0 : s.length) || 0) > 0
}
const m0 = "number"
  , p0 = "color"
  , Ub = "var"
  , Bb = "var("
  , Cp = "${}"
  , Lb = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function mi(n) {
    const l = n.toString()
      , s = []
      , o = {
        color: [],
        number: [],
        var: []
    }
      , c = [];
    let h = 0;
    const p = l.replace(Lb, m => (xt.test(m) ? (o.color.push(h),
    c.push(p0),
    s.push(xt.parse(m))) : m.startsWith(Bb) ? (o.var.push(h),
    c.push(Ub),
    s.push(m)) : (o.number.push(h),
    c.push(m0),
    s.push(parseFloat(m))),
    ++h,
    Cp)).split(Cp);
    return {
        values: s,
        split: p,
        indexes: o,
        types: c
    }
}
function g0(n) {
    return mi(n).values
}
function y0(n) {
    const {split: l, types: s} = mi(n)
      , o = l.length;
    return c => {
        let h = "";
        for (let d = 0; d < o; d++)
            if (h += l[d],
            c[d] !== void 0) {
                const p = s[d];
                p === m0 ? h += oi(c[d]) : p === p0 ? h += xt.transform(c[d]) : h += c[d]
            }
        return h
    }
}
const kb = n => typeof n == "number" ? 0 : xt.test(n) ? xt.getAnimatableNone(n) : n;
function Hb(n) {
    const l = g0(n);
    return y0(n)(l.map(kb))
}
const zn = {
    test: zb,
    parse: g0,
    createTransformer: y0,
    getAnimatableNone: Hb
};
function xc(n, l, s) {
    return s < 0 && (s += 1),
    s > 1 && (s -= 1),
    s < 1 / 6 ? n + (l - n) * 6 * s : s < 1 / 2 ? l : s < 2 / 3 ? n + (l - n) * (2 / 3 - s) * 6 : n
}
function Pb({hue: n, saturation: l, lightness: s, alpha: o}) {
    n /= 360,
    l /= 100,
    s /= 100;
    let c = 0
      , h = 0
      , d = 0;
    if (!l)
        c = h = d = s;
    else {
        const p = s < .5 ? s * (1 + l) : s + l - s * l
          , m = 2 * s - p;
        c = xc(m, p, n + 1 / 3),
        h = xc(m, p, n),
        d = xc(m, p, n - 1 / 3)
    }
    return {
        red: Math.round(c * 255),
        green: Math.round(h * 255),
        blue: Math.round(d * 255),
        alpha: o
    }
}
function Zo(n, l) {
    return s => s > 0 ? l : n
}
const st = (n, l, s) => n + (l - n) * s
  , bc = (n, l, s) => {
    const o = n * n
      , c = s * (l * l - o) + o;
    return c < 0 ? 0 : Math.sqrt(c)
}
  , qb = [Mc, ll, Zl]
  , Yb = n => qb.find(l => l.test(n));
function Dp(n) {
    const l = Yb(n);
    if (!l)
        return !1;
    let s = l.parse(n);
    return l === Zl && (s = Pb(s)),
    s
}
const _p = (n, l) => {
    const s = Dp(n)
      , o = Dp(l);
    if (!s || !o)
        return Zo(n, l);
    const c = {
        ...s
    };
    return h => (c.red = bc(s.red, o.red, h),
    c.green = bc(s.green, o.green, h),
    c.blue = bc(s.blue, o.blue, h),
    c.alpha = st(s.alpha, o.alpha, h),
    ll.transform(c))
}
  , Oc = new Set(["none", "hidden"]);
function Gb(n, l) {
    return Oc.has(n) ? s => s <= 0 ? n : l : s => s >= 1 ? l : n
}
function Xb(n, l) {
    return s => st(n, l, s)
}
function mf(n) {
    return typeof n == "number" ? Xb : typeof n == "string" ? ff(n) ? Zo : xt.test(n) ? _p : Qb : Array.isArray(n) ? v0 : typeof n == "object" ? xt.test(n) ? _p : Kb : Zo
}
function v0(n, l) {
    const s = [...n]
      , o = s.length
      , c = n.map( (h, d) => mf(h)(h, l[d]));
    return h => {
        for (let d = 0; d < o; d++)
            s[d] = c[d](h);
        return s
    }
}
function Kb(n, l) {
    const s = {
        ...n,
        ...l
    }
      , o = {};
    for (const c in s)
        n[c] !== void 0 && l[c] !== void 0 && (o[c] = mf(n[c])(n[c], l[c]));
    return c => {
        for (const h in o)
            s[h] = o[h](c);
        return s
    }
}
function Zb(n, l) {
    const s = []
      , o = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let c = 0; c < l.values.length; c++) {
        const h = l.types[c]
          , d = n.indexes[h][o[h]]
          , p = n.values[d] ?? 0;
        s[c] = p,
        o[h]++
    }
    return s
}
const Qb = (n, l) => {
    const s = zn.createTransformer(l)
      , o = mi(n)
      , c = mi(l);
    return o.indexes.var.length === c.indexes.var.length && o.indexes.color.length === c.indexes.color.length && o.indexes.number.length >= c.indexes.number.length ? Oc.has(n) && !c.values.length || Oc.has(l) && !o.values.length ? Gb(n, l) : Si(v0(Zb(o, c), c.values), s) : Zo(n, l)
}
;
function x0(n, l, s) {
    return typeof n == "number" && typeof l == "number" && typeof s == "number" ? st(n, l, s) : mf(n)(n, l)
}
const Fb = n => {
    const l = ({timestamp: s}) => n(s);
    return {
        start: (s=!0) => it.update(l, s),
        stop: () => Vn(l),
        now: () => Ot.isProcessing ? Ot.timestamp : Ft.now()
    }
}
  , b0 = (n, l, s=10) => {
    let o = "";
    const c = Math.max(Math.round(l / s), 2);
    for (let h = 0; h < c; h++)
        o += Math.round(n(h / (c - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${o.substring(0, o.length - 2)})`
}
  , Qo = 2e4;
function pf(n) {
    let l = 0;
    const s = 50;
    let o = n.next(l);
    for (; !o.done && l < Qo; )
        l += s,
        o = n.next(l);
    return l >= Qo ? 1 / 0 : l
}
function Jb(n, l=100, s) {
    const o = s({
        ...n,
        keyframes: [0, l]
    })
      , c = Math.min(pf(o), Qo);
    return {
        type: "keyframes",
        ease: h => o.next(c * h).value / l,
        duration: Ua(c)
    }
}
const Ib = 5;
function S0(n, l, s) {
    const o = Math.max(l - Ib, 0);
    return e0(s - n(o), l - o)
}
const ut = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , Sc = .001;
function $b({duration: n=ut.duration, bounce: l=ut.bounce, velocity: s=ut.velocity, mass: o=ut.mass}) {
    let c, h, d = 1 - l;
    d = ln(ut.minDamping, ut.maxDamping, d),
    n = ln(ut.minDuration, ut.maxDuration, Ua(n)),
    d < 1 ? (c = g => {
        const v = g * d
          , x = v * n
          , S = v - s
          , w = Rc(g, d)
          , C = Math.exp(-x);
        return Sc - S / w * C
    }
    ,
    h = g => {
        const x = g * d * n
          , S = x * s + s
          , w = Math.pow(d, 2) * Math.pow(g, 2) * n
          , C = Math.exp(-x)
          , M = Rc(Math.pow(g, 2), d);
        return (-c(g) + Sc > 0 ? -1 : 1) * ((S - w) * C) / M
    }
    ) : (c = g => {
        const v = Math.exp(-g * n)
          , x = (g - s) * n + 1;
        return -Sc + v * x
    }
    ,
    h = g => {
        const v = Math.exp(-g * n)
          , x = (s - g) * (n * n);
        return v * x
    }
    );
    const p = 5 / n
      , m = e1(c, h, p);
    if (n = za(n),
    isNaN(m))
        return {
            stiffness: ut.stiffness,
            damping: ut.damping,
            duration: n
        };
    {
        const g = Math.pow(m, 2) * o;
        return {
            stiffness: g,
            damping: d * 2 * Math.sqrt(o * g),
            duration: n
        }
    }
}
const Wb = 12;
function e1(n, l, s) {
    let o = s;
    for (let c = 1; c < Wb; c++)
        o = o - n(o) / l(o);
    return o
}
function Rc(n, l) {
    return n * Math.sqrt(1 - l * l)
}
const t1 = ["duration", "bounce"]
  , a1 = ["stiffness", "damping", "mass"];
function Mp(n, l) {
    return l.some(s => n[s] !== void 0)
}
function n1(n) {
    let l = {
        velocity: ut.velocity,
        stiffness: ut.stiffness,
        damping: ut.damping,
        mass: ut.mass,
        isResolvedFromDuration: !1,
        ...n
    };
    if (!Mp(n, a1) && Mp(n, t1))
        if (n.visualDuration) {
            const s = n.visualDuration
              , o = 2 * Math.PI / (s * 1.2)
              , c = o * o
              , h = 2 * ln(.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(c);
            l = {
                ...l,
                mass: ut.mass,
                stiffness: c,
                damping: h
            }
        } else {
            const s = $b(n);
            l = {
                ...l,
                ...s,
                mass: ut.mass
            },
            l.isResolvedFromDuration = !0
        }
    return l
}
function Fo(n=ut.visualDuration, l=ut.bounce) {
    const s = typeof n != "object" ? {
        visualDuration: n,
        keyframes: [0, 1],
        bounce: l
    } : n;
    let {restSpeed: o, restDelta: c} = s;
    const h = s.keyframes[0]
      , d = s.keyframes[s.keyframes.length - 1]
      , p = {
        done: !1,
        value: h
    }
      , {stiffness: m, damping: g, mass: v, duration: x, velocity: S, isResolvedFromDuration: w} = n1({
        ...s,
        velocity: -Ua(s.velocity || 0)
    })
      , C = S || 0
      , M = g / (2 * Math.sqrt(m * v))
      , D = d - h
      , U = Ua(Math.sqrt(m / v))
      , L = Math.abs(D) < 5;
    o || (o = L ? ut.restSpeed.granular : ut.restSpeed.default),
    c || (c = L ? ut.restDelta.granular : ut.restDelta.default);
    let B;
    if (M < 1) {
        const R = Rc(U, M);
        B = $ => {
            const te = Math.exp(-M * U * $);
            return d - te * ((C + M * U * D) / R * Math.sin(R * $) + D * Math.cos(R * $))
        }
    } else if (M === 1)
        B = R => d - Math.exp(-U * R) * (D + (C + U * D) * R);
    else {
        const R = U * Math.sqrt(M * M - 1);
        B = $ => {
            const te = Math.exp(-M * U * $)
              , J = Math.min(R * $, 300);
            return d - te * ((C + M * U * D) * Math.sinh(J) + R * D * Math.cosh(J)) / R
        }
    }
    const F = {
        calculatedDuration: w && x || null,
        next: R => {
            const $ = B(R);
            if (w)
                p.done = R >= x;
            else {
                let te = R === 0 ? C : 0;
                M < 1 && (te = R === 0 ? za(C) : S0(B, R, $));
                const J = Math.abs(te) <= o
                  , se = Math.abs(d - $) <= c;
                p.done = J && se
            }
            return p.value = p.done ? d : $,
            p
        }
        ,
        toString: () => {
            const R = Math.min(pf(F), Qo)
              , $ = b0(te => F.next(R * te).value, R, 30);
            return R + "ms " + $
        }
        ,
        toTransition: () => {}
    };
    return F
}
Fo.applyToOptions = n => {
    const l = Jb(n, 100, Fo);
    return n.ease = l.ease,
    n.duration = za(l.duration),
    n.type = "keyframes",
    n
}
;
function Vc({keyframes: n, velocity: l=0, power: s=.8, timeConstant: o=325, bounceDamping: c=10, bounceStiffness: h=500, modifyTarget: d, min: p, max: m, restDelta: g=.5, restSpeed: v}) {
    const x = n[0]
      , S = {
        done: !1,
        value: x
    }
      , w = J => p !== void 0 && J < p || m !== void 0 && J > m
      , C = J => p === void 0 ? m : m === void 0 || Math.abs(p - J) < Math.abs(m - J) ? p : m;
    let M = s * l;
    const D = x + M
      , U = d === void 0 ? D : d(D);
    U !== D && (M = U - x);
    const L = J => -M * Math.exp(-J / o)
      , B = J => U + L(J)
      , F = J => {
        const se = L(J)
          , he = B(J);
        S.done = Math.abs(se) <= g,
        S.value = S.done ? U : he
    }
    ;
    let R, $;
    const te = J => {
        w(S.value) && (R = J,
        $ = Fo({
            keyframes: [S.value, C(S.value)],
            velocity: S0(B, J, S.value),
            damping: c,
            stiffness: h,
            restDelta: g,
            restSpeed: v
        }))
    }
    ;
    return te(0),
    {
        calculatedDuration: null,
        next: J => {
            let se = !1;
            return !$ && R === void 0 && (se = !0,
            F(J),
            te(J)),
            R !== void 0 && J >= R ? $.next(J - R) : (!se && F(J),
            S)
        }
    }
}
function l1(n, l, s) {
    const o = []
      , c = s || sn.mix || x0
      , h = n.length - 1;
    for (let d = 0; d < h; d++) {
        let p = c(n[d], n[d + 1]);
        if (l) {
            const m = Array.isArray(l) ? l[d] || xa : l;
            p = Si(m, p)
        }
        o.push(p)
    }
    return o
}
function s1(n, l, {clamp: s=!0, ease: o, mixer: c}={}) {
    const h = n.length;
    if (lf(h === l.length),
    h === 1)
        return () => l[0];
    if (h === 2 && l[0] === l[1])
        return () => l[1];
    const d = n[0] === n[1];
    n[0] > n[h - 1] && (n = [...n].reverse(),
    l = [...l].reverse());
    const p = l1(l, o, c)
      , m = p.length
      , g = v => {
        if (d && v < n[0])
            return l[0];
        let x = 0;
        if (m > 1)
            for (; x < n.length - 2 && !(v < n[x + 1]); x++)
                ;
        const S = di(n[x], n[x + 1], v);
        return p[x](S)
    }
    ;
    return s ? v => g(ln(n[0], n[h - 1], v)) : g
}
function i1(n, l) {
    const s = n[n.length - 1];
    for (let o = 1; o <= l; o++) {
        const c = di(0, l, o);
        n.push(st(s, 1, c))
    }
}
function o1(n) {
    const l = [0];
    return i1(l, n.length - 1),
    l
}
function r1(n, l) {
    return n.map(s => s * l)
}
function u1(n, l) {
    return n.map( () => l || u0).splice(0, n.length - 1)
}
function ri({duration: n=300, keyframes: l, times: s, ease: o="easeInOut"}) {
    const c = bb(o) ? o.map(Ap) : Ap(o)
      , h = {
        done: !1,
        value: l[0]
    }
      , d = r1(s && s.length === l.length ? s : o1(l), n)
      , p = s1(d, l, {
        ease: Array.isArray(c) ? c : u1(l, c)
    });
    return {
        calculatedDuration: n,
        next: m => (h.value = p(m),
        h.done = m >= n,
        h)
    }
}
const c1 = n => n !== null;
function gf(n, {repeat: l, repeatType: s="loop"}, o, c=1) {
    const h = n.filter(c1)
      , p = c < 0 || l && s !== "loop" && l % 2 === 1 ? 0 : h.length - 1;
    return !p || o === void 0 ? h[p] : o
}
const f1 = {
    decay: Vc,
    inertia: Vc,
    tween: ri,
    keyframes: ri,
    spring: Fo
};
function T0(n) {
    typeof n.type == "string" && (n.type = f1[n.type])
}
class yf {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(l => {
            this.resolve = l
        }
        )
    }
    notifyFinished() {
        this.resolve()
    }
    then(l, s) {
        return this.finished.then(l, s)
    }
}
const d1 = n => n / 100;
class vf extends yf {
    constructor(l) {
        super(),
        this.state = "idle",
        this.startTime = null,
        this.isStopped = !1,
        this.currentTime = 0,
        this.holdTime = null,
        this.playbackSpeed = 1,
        this.stop = () => {
            var o, c;
            const {motionValue: s} = this.options;
            s && s.updatedAt !== Ft.now() && this.tick(Ft.now()),
            this.isStopped = !0,
            this.state !== "idle" && (this.teardown(),
            (c = (o = this.options).onStop) == null || c.call(o))
        }
        ,
        this.options = l,
        this.initAnimation(),
        this.play(),
        l.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {options: l} = this;
        T0(l);
        const {type: s=ri, repeat: o=0, repeatDelay: c=0, repeatType: h, velocity: d=0} = l;
        let {keyframes: p} = l;
        const m = s || ri;
        m !== ri && typeof p[0] != "number" && (this.mixKeyframes = Si(d1, x0(p[0], p[1])),
        p = [0, 100]);
        const g = m({
            ...l,
            keyframes: p
        });
        h === "mirror" && (this.mirroredGenerator = m({
            ...l,
            keyframes: [...p].reverse(),
            velocity: -d
        })),
        g.calculatedDuration === null && (g.calculatedDuration = pf(g));
        const {calculatedDuration: v} = g;
        this.calculatedDuration = v,
        this.resolvedDuration = v + c,
        this.totalDuration = this.resolvedDuration * (o + 1) - c,
        this.generator = g
    }
    updateTime(l) {
        const s = Math.round(l - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = s
    }
    tick(l, s=!1) {
        const {generator: o, totalDuration: c, mixKeyframes: h, mirroredGenerator: d, resolvedDuration: p, calculatedDuration: m} = this;
        if (this.startTime === null)
            return o.next(0);
        const {delay: g=0, keyframes: v, repeat: x, repeatType: S, repeatDelay: w, type: C, onUpdate: M, finalKeyframe: D} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - c / this.speed, this.startTime)),
        s ? this.currentTime = l : this.updateTime(l);
        const U = this.currentTime - g * (this.playbackSpeed >= 0 ? 1 : -1)
          , L = this.playbackSpeed >= 0 ? U < 0 : U > c;
        this.currentTime = Math.max(U, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = c);
        let B = this.currentTime
          , F = o;
        if (x) {
            const J = Math.min(this.currentTime, c) / p;
            let se = Math.floor(J)
              , he = J % 1;
            !he && J >= 1 && (he = 1),
            he === 1 && se--,
            se = Math.min(se, x + 1),
            !!(se % 2) && (S === "reverse" ? (he = 1 - he,
            w && (he -= w / p)) : S === "mirror" && (F = d)),
            B = ln(0, 1, he) * p
        }
        const R = L ? {
            done: !1,
            value: v[0]
        } : F.next(B);
        h && (R.value = h(R.value));
        let {done: $} = R;
        !L && m !== null && ($ = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        const te = this.holdTime === null && (this.state === "finished" || this.state === "running" && $);
        return te && C !== Vc && (R.value = gf(v, this.options, D, this.speed)),
        M && M(R.value),
        te && this.finish(),
        R
    }
    then(l, s) {
        return this.finished.then(l, s)
    }
    get duration() {
        return Ua(this.calculatedDuration)
    }
    get time() {
        return Ua(this.currentTime)
    }
    set time(l) {
        var s;
        l = za(l),
        this.currentTime = l,
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = l : this.driver && (this.startTime = this.driver.now() - l / this.playbackSpeed),
        (s = this.driver) == null || s.start(!1)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(l) {
        this.updateTime(Ft.now());
        const s = this.playbackSpeed !== l;
        this.playbackSpeed = l,
        s && (this.time = Ua(this.currentTime))
    }
    play() {
        var c, h;
        if (this.isStopped)
            return;
        const {driver: l=Fb, startTime: s} = this.options;
        this.driver || (this.driver = l(d => this.tick(d))),
        (h = (c = this.options).onPlay) == null || h.call(c);
        const o = this.driver.now();
        this.state === "finished" ? (this.updateFinished(),
        this.startTime = o) : this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime || (this.startTime = s ?? o),
        this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        this.state = "paused",
        this.updateTime(Ft.now()),
        this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(),
        this.state = "finished",
        this.holdTime = null
    }
    finish() {
        var l, s;
        this.notifyFinished(),
        this.teardown(),
        this.state = "finished",
        (s = (l = this.options).onComplete) == null || s.call(l)
    }
    cancel() {
        var l, s;
        this.holdTime = null,
        this.startTime = 0,
        this.tick(0),
        this.teardown(),
        (s = (l = this.options).onCancel) == null || s.call(l)
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(l) {
        return this.startTime = 0,
        this.tick(l, !0)
    }
    attachTimeline(l) {
        var s;
        return this.options.allowFlatten && (this.options.type = "keyframes",
        this.options.ease = "linear",
        this.initAnimation()),
        (s = this.driver) == null || s.stop(),
        l.observe(this)
    }
}
function h1(n) {
    for (let l = 1; l < n.length; l++)
        n[l] ?? (n[l] = n[l - 1])
}
const sl = n => n * 180 / Math.PI
  , zc = n => {
    const l = sl(Math.atan2(n[1], n[0]));
    return Uc(l)
}
  , m1 = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: n => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
    rotate: zc,
    rotateZ: zc,
    skewX: n => sl(Math.atan(n[1])),
    skewY: n => sl(Math.atan(n[2])),
    skew: n => (Math.abs(n[1]) + Math.abs(n[2])) / 2
}
  , Uc = n => (n = n % 360,
n < 0 && (n += 360),
n)
  , Op = zc
  , Rp = n => Math.sqrt(n[0] * n[0] + n[1] * n[1])
  , Vp = n => Math.sqrt(n[4] * n[4] + n[5] * n[5])
  , p1 = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Rp,
    scaleY: Vp,
    scale: n => (Rp(n) + Vp(n)) / 2,
    rotateX: n => Uc(sl(Math.atan2(n[6], n[5]))),
    rotateY: n => Uc(sl(Math.atan2(-n[2], n[0]))),
    rotateZ: Op,
    rotate: Op,
    skewX: n => sl(Math.atan(n[4])),
    skewY: n => sl(Math.atan(n[1])),
    skew: n => (Math.abs(n[1]) + Math.abs(n[4])) / 2
};
function Bc(n) {
    return n.includes("scale") ? 1 : 0
}
function Lc(n, l) {
    if (!n || n === "none")
        return Bc(l);
    const s = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let o, c;
    if (s)
        o = p1,
        c = s;
    else {
        const p = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        o = m1,
        c = p
    }
    if (!c)
        return Bc(l);
    const h = o[l]
      , d = c[1].split(",").map(y1);
    return typeof h == "function" ? h(d) : d[h]
}
const g1 = (n, l) => {
    const {transform: s="none"} = getComputedStyle(n);
    return Lc(s, l)
}
;
function y1(n) {
    return parseFloat(n.trim())
}
const ts = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , as = new Set(ts)
  , zp = n => n === es || n === je
  , v1 = new Set(["x", "y", "z"])
  , x1 = ts.filter(n => !v1.has(n));
function b1(n) {
    const l = [];
    return x1.forEach(s => {
        const o = n.getValue(s);
        o !== void 0 && (l.push([s, o.get()]),
        o.set(s.startsWith("scale") ? 1 : 0))
    }
    ),
    l
}
const il = {
    width: ({x: n}, {paddingLeft: l="0", paddingRight: s="0"}) => n.max - n.min - parseFloat(l) - parseFloat(s),
    height: ({y: n}, {paddingTop: l="0", paddingBottom: s="0"}) => n.max - n.min - parseFloat(l) - parseFloat(s),
    top: (n, {top: l}) => parseFloat(l),
    left: (n, {left: l}) => parseFloat(l),
    bottom: ({y: n}, {top: l}) => parseFloat(l) + (n.max - n.min),
    right: ({x: n}, {left: l}) => parseFloat(l) + (n.max - n.min),
    x: (n, {transform: l}) => Lc(l, "x"),
    y: (n, {transform: l}) => Lc(l, "y")
};
il.translateX = il.x;
il.translateY = il.y;
const ol = new Set;
let kc = !1
  , Hc = !1
  , Pc = !1;
function j0() {
    if (Hc) {
        const n = Array.from(ol).filter(o => o.needsMeasurement)
          , l = new Set(n.map(o => o.element))
          , s = new Map;
        l.forEach(o => {
            const c = b1(o);
            c.length && (s.set(o, c),
            o.render())
        }
        ),
        n.forEach(o => o.measureInitialState()),
        l.forEach(o => {
            o.render();
            const c = s.get(o);
            c && c.forEach( ([h,d]) => {
                var p;
                (p = o.getValue(h)) == null || p.set(d)
            }
            )
        }
        ),
        n.forEach(o => o.measureEndState()),
        n.forEach(o => {
            o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY)
        }
        )
    }
    Hc = !1,
    kc = !1,
    ol.forEach(n => n.complete(Pc)),
    ol.clear()
}
function w0() {
    ol.forEach(n => {
        n.readKeyframes(),
        n.needsMeasurement && (Hc = !0)
    }
    )
}
function S1() {
    Pc = !0,
    w0(),
    j0(),
    Pc = !1
}
class xf {
    constructor(l, s, o, c, h, d=!1) {
        this.state = "pending",
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.unresolvedKeyframes = [...l],
        this.onComplete = s,
        this.name = o,
        this.motionValue = c,
        this.element = h,
        this.isAsync = d
    }
    scheduleResolve() {
        this.state = "scheduled",
        this.isAsync ? (ol.add(this),
        kc || (kc = !0,
        it.read(w0),
        it.resolveKeyframes(j0))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: l, name: s, element: o, motionValue: c} = this;
        if (l[0] === null) {
            const h = c == null ? void 0 : c.get()
              , d = l[l.length - 1];
            if (h !== void 0)
                l[0] = h;
            else if (o && s) {
                const p = o.readValue(s, d);
                p != null && (l[0] = p)
            }
            l[0] === void 0 && (l[0] = d),
            c && h === void 0 && c.set(l[0])
        }
        h1(l)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(l=!1) {
        this.state = "complete",
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l),
        ol.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (ol.delete(this),
        this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const T1 = n => n.startsWith("--");
function j1(n, l, s) {
    T1(l) ? n.style.setProperty(l, s) : n.style[l] = s
}
const w1 = sf( () => window.ScrollTimeline !== void 0)
  , A1 = {};
function N1(n, l) {
    const s = sf(n);
    return () => A1[l] ?? s()
}
const A0 = N1( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , si = ([n,l,s,o]) => `cubic-bezier(${n}, ${l}, ${s}, ${o})`
  , Up = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: si([0, .65, .55, 1]),
    circOut: si([.55, 0, 1, .45]),
    backIn: si([.31, .01, .66, -.59]),
    backOut: si([.33, 1.53, .69, .99])
};
function N0(n, l) {
    if (n)
        return typeof n == "function" ? A0() ? b0(n, l) : "ease-out" : c0(n) ? si(n) : Array.isArray(n) ? n.map(s => N0(s, l) || Up.easeOut) : Up[n]
}
function E1(n, l, s, {delay: o=0, duration: c=300, repeat: h=0, repeatType: d="loop", ease: p="easeOut", times: m}={}, g=void 0) {
    const v = {
        [l]: s
    };
    m && (v.offset = m);
    const x = N0(p, c);
    Array.isArray(x) && (v.easing = x);
    const S = {
        delay: o,
        duration: c,
        easing: Array.isArray(x) ? "linear" : x,
        fill: "both",
        iterations: h + 1,
        direction: d === "reverse" ? "alternate" : "normal"
    };
    return g && (S.pseudoElement = g),
    n.animate(v, S)
}
function E0(n) {
    return typeof n == "function" && "applyToOptions"in n
}
function C1({type: n, ...l}) {
    return E0(n) && A0() ? n.applyToOptions(l) : (l.duration ?? (l.duration = 300),
    l.ease ?? (l.ease = "easeOut"),
    l)
}
class D1 extends yf {
    constructor(l) {
        if (super(),
        this.finishedTime = null,
        this.isStopped = !1,
        !l)
            return;
        const {element: s, name: o, keyframes: c, pseudoElement: h, allowFlatten: d=!1, finalKeyframe: p, onComplete: m} = l;
        this.isPseudoElement = !!h,
        this.allowFlatten = d,
        this.options = l,
        lf(typeof l.type != "string");
        const g = C1(l);
        this.animation = E1(s, o, c, g, h),
        g.autoplay === !1 && this.animation.pause(),
        this.animation.onfinish = () => {
            if (this.finishedTime = this.time,
            !h) {
                const v = gf(c, this.options, p, this.speed);
                this.updateMotionValue ? this.updateMotionValue(v) : j1(s, o, v),
                this.animation.cancel()
            }
            m == null || m(),
            this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.animation.play(),
        this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        var l, s;
        (s = (l = this.animation).finish) == null || s.call(l)
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = !0;
        const {state: l} = this;
        l === "idle" || l === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
        this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        var l, s;
        this.isPseudoElement || (s = (l = this.animation).commitStyles) == null || s.call(l)
    }
    get duration() {
        var s, o;
        const l = ((o = (s = this.animation.effect) == null ? void 0 : s.getComputedTiming) == null ? void 0 : o.call(s).duration) || 0;
        return Ua(Number(l))
    }
    get time() {
        return Ua(Number(this.animation.currentTime) || 0)
    }
    set time(l) {
        this.finishedTime = null,
        this.animation.currentTime = za(l)
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(l) {
        l < 0 && (this.finishedTime = null),
        this.animation.playbackRate = l
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return Number(this.animation.startTime)
    }
    set startTime(l) {
        this.animation.startTime = l
    }
    attachTimeline({timeline: l, observe: s}) {
        var o;
        return this.allowFlatten && ((o = this.animation.effect) == null || o.updateTiming({
            easing: "linear"
        })),
        this.animation.onfinish = null,
        l && w1() ? (this.animation.timeline = l,
        xa) : s(this)
    }
}
const C0 = {
    anticipate: i0,
    backInOut: s0,
    circInOut: r0
};
function _1(n) {
    return n in C0
}
function M1(n) {
    typeof n.ease == "string" && _1(n.ease) && (n.ease = C0[n.ease])
}
const Bp = 10;
class O1 extends D1 {
    constructor(l) {
        M1(l),
        T0(l),
        super(l),
        l.startTime && (this.startTime = l.startTime),
        this.options = l
    }
    updateMotionValue(l) {
        const {motionValue: s, onUpdate: o, onComplete: c, element: h, ...d} = this.options;
        if (!s)
            return;
        if (l !== void 0) {
            s.set(l);
            return
        }
        const p = new vf({
            ...d,
            autoplay: !1
        })
          , m = za(this.finishedTime ?? this.time);
        s.setWithVelocity(p.sample(m - Bp).value, p.sample(m).value, Bp),
        p.stop()
    }
}
const Lp = (n, l) => l === "zIndex" ? !1 : !!(typeof n == "number" || Array.isArray(n) || typeof n == "string" && (zn.test(n) || n === "0") && !n.startsWith("url("));
function R1(n) {
    const l = n[0];
    if (n.length === 1)
        return !0;
    for (let s = 0; s < n.length; s++)
        if (n[s] !== l)
            return !0
}
function V1(n, l, s, o) {
    const c = n[0];
    if (c === null)
        return !1;
    if (l === "display" || l === "visibility")
        return !0;
    const h = n[n.length - 1]
      , d = Lp(c, l)
      , p = Lp(h, l);
    return !d || !p ? !1 : R1(n) || (s === "spring" || E0(s)) && o
}
function bf(n) {
    return $g(n) && "offsetHeight"in n
}
const z1 = new Set(["opacity", "clipPath", "filter", "transform"])
  , U1 = sf( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
function B1(n) {
    var g;
    const {motionValue: l, name: s, repeatDelay: o, repeatType: c, damping: h, type: d} = n;
    if (!bf((g = l == null ? void 0 : l.owner) == null ? void 0 : g.current))
        return !1;
    const {onUpdate: p, transformTemplate: m} = l.owner.getProps();
    return U1() && s && z1.has(s) && (s !== "transform" || !m) && !p && !o && c !== "mirror" && h !== 0 && d !== "inertia"
}
const L1 = 40;
class k1 extends yf {
    constructor({autoplay: l=!0, delay: s=0, type: o="keyframes", repeat: c=0, repeatDelay: h=0, repeatType: d="loop", keyframes: p, name: m, motionValue: g, element: v, ...x}) {
        var C;
        super(),
        this.stop = () => {
            var M, D;
            this._animation && (this._animation.stop(),
            (M = this.stopTimeline) == null || M.call(this)),
            (D = this.keyframeResolver) == null || D.cancel()
        }
        ,
        this.createdAt = Ft.now();
        const S = {
            autoplay: l,
            delay: s,
            type: o,
            repeat: c,
            repeatDelay: h,
            repeatType: d,
            name: m,
            motionValue: g,
            element: v,
            ...x
        }
          , w = (v == null ? void 0 : v.KeyframeResolver) || xf;
        this.keyframeResolver = new w(p, (M, D, U) => this.onKeyframesResolved(M, D, S, !U),m,g,v),
        (C = this.keyframeResolver) == null || C.scheduleResolve()
    }
    onKeyframesResolved(l, s, o, c) {
        this.keyframeResolver = void 0;
        const {name: h, type: d, velocity: p, delay: m, isHandoff: g, onUpdate: v} = o;
        this.resolvedAt = Ft.now(),
        V1(l, h, d, p) || ((sn.instantAnimations || !m) && (v == null || v(gf(l, o, s))),
        l[0] = l[l.length - 1],
        o.duration = 0,
        o.repeat = 0);
        const S = {
            startTime: c ? this.resolvedAt ? this.resolvedAt - this.createdAt > L1 ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: s,
            ...o,
            keyframes: l
        }
          , w = !g && B1(S) ? new O1({
            ...S,
            element: S.motionValue.owner.current
        }) : new vf(S);
        w.finished.then( () => this.notifyFinished()).catch(xa),
        this.pendingTimeline && (this.stopTimeline = w.attachTimeline(this.pendingTimeline),
        this.pendingTimeline = void 0),
        this._animation = w
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(l, s) {
        return this.finished.finally(l).then( () => {}
        )
    }
    get animation() {
        var l;
        return this._animation || ((l = this.keyframeResolver) == null || l.resume(),
        S1()),
        this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get time() {
        return this.animation.time
    }
    set time(l) {
        this.animation.time = l
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(l) {
        this.animation.speed = l
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(l) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(l) : this.pendingTimeline = l,
        () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        var l;
        this._animation && this.animation.cancel(),
        (l = this.keyframeResolver) == null || l.cancel()
    }
}
const H1 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function P1(n) {
    const l = H1.exec(n);
    if (!l)
        return [, ];
    const [,s,o,c] = l;
    return [`--${s ?? o}`, c]
}
function D0(n, l, s=1) {
    const [o,c] = P1(n);
    if (!o)
        return;
    const h = window.getComputedStyle(l).getPropertyValue(o);
    if (h) {
        const d = h.trim();
        return Ig(d) ? parseFloat(d) : d
    }
    return ff(c) ? D0(c, l, s + 1) : c
}
function Sf(n, l) {
    return (n == null ? void 0 : n[l]) ?? (n == null ? void 0 : n.default) ?? n
}
const _0 = new Set(["width", "height", "top", "left", "right", "bottom", ...ts])
  , q1 = {
    test: n => n === "auto",
    parse: n => n
}
  , M0 = n => l => l.test(n)
  , O0 = [es, je, Ba, On, Rb, Ob, q1]
  , kp = n => O0.find(M0(n));
function Y1(n) {
    return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || Wg(n) : !0
}
const G1 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function X1(n) {
    const [l,s] = n.slice(0, -1).split("(");
    if (l === "drop-shadow")
        return n;
    const [o] = s.match(df) || [];
    if (!o)
        return n;
    const c = s.replace(o, "");
    let h = G1.has(l) ? 1 : 0;
    return o !== s && (h *= 100),
    l + "(" + h + c + ")"
}
const K1 = /\b([a-z-]*)\(.*?\)/gu
  , qc = {
    ...zn,
    getAnimatableNone: n => {
        const l = n.match(K1);
        return l ? l.map(X1).join(" ") : n
    }
}
  , Hp = {
    ...es,
    transform: Math.round
}
  , Z1 = {
    rotate: On,
    rotateX: On,
    rotateY: On,
    rotateZ: On,
    scale: Ho,
    scaleX: Ho,
    scaleY: Ho,
    scaleZ: Ho,
    skew: On,
    skewX: On,
    skewY: On,
    distance: je,
    translateX: je,
    translateY: je,
    translateZ: je,
    x: je,
    y: je,
    z: je,
    perspective: je,
    transformPerspective: je,
    opacity: hi,
    originX: Ep,
    originY: Ep,
    originZ: je
}
  , Tf = {
    borderWidth: je,
    borderTopWidth: je,
    borderRightWidth: je,
    borderBottomWidth: je,
    borderLeftWidth: je,
    borderRadius: je,
    radius: je,
    borderTopLeftRadius: je,
    borderTopRightRadius: je,
    borderBottomRightRadius: je,
    borderBottomLeftRadius: je,
    width: je,
    maxWidth: je,
    height: je,
    maxHeight: je,
    top: je,
    right: je,
    bottom: je,
    left: je,
    padding: je,
    paddingTop: je,
    paddingRight: je,
    paddingBottom: je,
    paddingLeft: je,
    margin: je,
    marginTop: je,
    marginRight: je,
    marginBottom: je,
    marginLeft: je,
    backgroundPositionX: je,
    backgroundPositionY: je,
    ...Z1,
    zIndex: Hp,
    fillOpacity: hi,
    strokeOpacity: hi,
    numOctaves: Hp
}
  , Q1 = {
    ...Tf,
    color: xt,
    backgroundColor: xt,
    outlineColor: xt,
    fill: xt,
    stroke: xt,
    borderColor: xt,
    borderTopColor: xt,
    borderRightColor: xt,
    borderBottomColor: xt,
    borderLeftColor: xt,
    filter: qc,
    WebkitFilter: qc
}
  , R0 = n => Q1[n];
function V0(n, l) {
    let s = R0(n);
    return s !== qc && (s = zn),
    s.getAnimatableNone ? s.getAnimatableNone(l) : void 0
}
const F1 = new Set(["auto", "none", "0"]);
function J1(n, l, s) {
    let o = 0, c;
    for (; o < n.length && !c; ) {
        const h = n[o];
        typeof h == "string" && !F1.has(h) && mi(h).values.length && (c = n[o]),
        o++
    }
    if (c && s)
        for (const h of l)
            n[h] = V0(s, c)
}
class I1 extends xf {
    constructor(l, s, o, c, h) {
        super(l, s, o, c, h, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: l, element: s, name: o} = this;
        if (!s || !s.current)
            return;
        super.readKeyframes();
        for (let m = 0; m < l.length; m++) {
            let g = l[m];
            if (typeof g == "string" && (g = g.trim(),
            ff(g))) {
                const v = D0(g, s.current);
                v !== void 0 && (l[m] = v),
                m === l.length - 1 && (this.finalKeyframe = g)
            }
        }
        if (this.resolveNoneKeyframes(),
        !_0.has(o) || l.length !== 2)
            return;
        const [c,h] = l
          , d = kp(c)
          , p = kp(h);
        if (d !== p)
            if (zp(d) && zp(p))
                for (let m = 0; m < l.length; m++) {
                    const g = l[m];
                    typeof g == "string" && (l[m] = parseFloat(g))
                }
            else
                il[o] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: l, name: s} = this
          , o = [];
        for (let c = 0; c < l.length; c++)
            (l[c] === null || Y1(l[c])) && o.push(c);
        o.length && J1(l, o, s)
    }
    measureInitialState() {
        const {element: l, unresolvedKeyframes: s, name: o} = this;
        if (!l || !l.current)
            return;
        o === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = il[o](l.measureViewportBox(), window.getComputedStyle(l.current)),
        s[0] = this.measuredOrigin;
        const c = s[s.length - 1];
        c !== void 0 && l.getValue(o, c).jump(c, !1)
    }
    measureEndState() {
        var p;
        const {element: l, name: s, unresolvedKeyframes: o} = this;
        if (!l || !l.current)
            return;
        const c = l.getValue(s);
        c && c.jump(this.measuredOrigin, !1);
        const h = o.length - 1
          , d = o[h];
        o[h] = il[s](l.measureViewportBox(), window.getComputedStyle(l.current)),
        d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d),
        (p = this.removedTransforms) != null && p.length && this.removedTransforms.forEach( ([m,g]) => {
            l.getValue(m).set(g)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
function $1(n, l, s) {
    if (n instanceof EventTarget)
        return [n];
    if (typeof n == "string") {
        let o = document;
        const c = (s == null ? void 0 : s[n]) ?? o.querySelectorAll(n);
        return c ? Array.from(c) : []
    }
    return Array.from(n)
}
const z0 = (n, l) => l && typeof n == "number" ? l.transform(n) : n
  , Pp = 30
  , W1 = n => !isNaN(parseFloat(n));
class e2 {
    constructor(l, s={}) {
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (o, c=!0) => {
            var d, p;
            const h = Ft.now();
            if (this.updatedAt !== h && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(o),
            this.current !== this.prev && ((d = this.events.change) == null || d.notify(this.current),
            this.dependents))
                for (const m of this.dependents)
                    m.dirty();
            c && ((p = this.events.renderRequest) == null || p.notify(this.current))
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(l),
        this.owner = s.owner
    }
    setCurrent(l) {
        this.current = l,
        this.updatedAt = Ft.now(),
        this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = W1(this.current))
    }
    setPrevFrameValue(l=this.current) {
        this.prevFrameValue = l,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(l) {
        return this.on("change", l)
    }
    on(l, s) {
        this.events[l] || (this.events[l] = new of);
        const o = this.events[l].add(s);
        return l === "change" ? () => {
            o(),
            it.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : o
    }
    clearListeners() {
        for (const l in this.events)
            this.events[l].clear()
    }
    attach(l, s) {
        this.passiveEffect = l,
        this.stopPassiveEffect = s
    }
    set(l, s=!0) {
        !s || !this.passiveEffect ? this.updateAndNotify(l, s) : this.passiveEffect(l, this.updateAndNotify)
    }
    setWithVelocity(l, s, o) {
        this.set(s),
        this.prev = void 0,
        this.prevFrameValue = l,
        this.prevUpdatedAt = this.updatedAt - o
    }
    jump(l, s=!0) {
        this.updateAndNotify(l),
        this.prev = l,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        s && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        var l;
        (l = this.events.change) == null || l.notify(this.current)
    }
    addDependent(l) {
        this.dependents || (this.dependents = new Set),
        this.dependents.add(l)
    }
    removeDependent(l) {
        this.dependents && this.dependents.delete(l)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const l = Ft.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > Pp)
            return 0;
        const s = Math.min(this.updatedAt - this.prevUpdatedAt, Pp);
        return e0(parseFloat(this.current) - parseFloat(this.prevFrameValue), s)
    }
    start(l) {
        return this.stop(),
        new Promise(s => {
            this.hasAnimated = !0,
            this.animation = l(s),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        var l, s;
        (l = this.dependents) == null || l.clear(),
        (s = this.events.destroy) == null || s.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function $l(n, l) {
    return new e2(n,l)
}
const {schedule: jf} = f0(queueMicrotask, !1)
  , Na = {
    x: !1,
    y: !1
};
function U0() {
    return Na.x || Na.y
}
function t2(n) {
    return n === "x" || n === "y" ? Na[n] ? null : (Na[n] = !0,
    () => {
        Na[n] = !1
    }
    ) : Na.x || Na.y ? null : (Na.x = Na.y = !0,
    () => {
        Na.x = Na.y = !1
    }
    )
}
function B0(n, l) {
    const s = $1(n)
      , o = new AbortController
      , c = {
        passive: !0,
        ...l,
        signal: o.signal
    };
    return [s, c, () => o.abort()]
}
function qp(n) {
    return !(n.pointerType === "touch" || U0())
}
function a2(n, l, s={}) {
    const [o,c,h] = B0(n, s)
      , d = p => {
        if (!qp(p))
            return;
        const {target: m} = p
          , g = l(m, p);
        if (typeof g != "function" || !m)
            return;
        const v = x => {
            qp(x) && (g(x),
            m.removeEventListener("pointerleave", v))
        }
        ;
        m.addEventListener("pointerleave", v, c)
    }
    ;
    return o.forEach(p => {
        p.addEventListener("pointerenter", d, c)
    }
    ),
    h
}
const L0 = (n, l) => l ? n === l ? !0 : L0(n, l.parentElement) : !1
  , wf = n => n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1
  , n2 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function l2(n) {
    return n2.has(n.tagName) || n.tabIndex !== -1
}
const Go = new WeakSet;
function Yp(n) {
    return l => {
        l.key === "Enter" && n(l)
    }
}
function Tc(n, l) {
    n.dispatchEvent(new PointerEvent("pointer" + l,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const s2 = (n, l) => {
    const s = n.currentTarget;
    if (!s)
        return;
    const o = Yp( () => {
        if (Go.has(s))
            return;
        Tc(s, "down");
        const c = Yp( () => {
            Tc(s, "up")
        }
        )
          , h = () => Tc(s, "cancel");
        s.addEventListener("keyup", c, l),
        s.addEventListener("blur", h, l)
    }
    );
    s.addEventListener("keydown", o, l),
    s.addEventListener("blur", () => s.removeEventListener("keydown", o), l)
}
;
function Gp(n) {
    return wf(n) && !U0()
}
function i2(n, l, s={}) {
    const [o,c,h] = B0(n, s)
      , d = p => {
        const m = p.currentTarget;
        if (!Gp(p))
            return;
        Go.add(m);
        const g = l(m, p)
          , v = (w, C) => {
            window.removeEventListener("pointerup", x),
            window.removeEventListener("pointercancel", S),
            Go.has(m) && Go.delete(m),
            Gp(w) && typeof g == "function" && g(w, {
                success: C
            })
        }
          , x = w => {
            v(w, m === window || m === document || s.useGlobalTarget || L0(m, w.target))
        }
          , S = w => {
            v(w, !1)
        }
        ;
        window.addEventListener("pointerup", x, c),
        window.addEventListener("pointercancel", S, c)
    }
    ;
    return o.forEach(p => {
        (s.useGlobalTarget ? window : p).addEventListener("pointerdown", d, c),
        bf(p) && (p.addEventListener("focus", g => s2(g, c)),
        !l2(p) && !p.hasAttribute("tabindex") && (p.tabIndex = 0))
    }
    ),
    h
}
function k0(n) {
    return $g(n) && "ownerSVGElement"in n
}
function o2(n) {
    return k0(n) && n.tagName === "svg"
}
const Lt = n => !!(n && n.getVelocity)
  , r2 = [...O0, xt, zn]
  , u2 = n => r2.find(M0(n))
  , Af = T.createContext({
    transformPagePoint: n => n,
    isStatic: !1,
    reducedMotion: "never"
});
class c2 extends T.Component {
    getSnapshotBeforeUpdate(l) {
        const s = this.props.childRef.current;
        if (s && l.isPresent && !this.props.isPresent) {
            const o = s.offsetParent
              , c = bf(o) && o.offsetWidth || 0
              , h = this.props.sizeRef.current;
            h.height = s.offsetHeight || 0,
            h.width = s.offsetWidth || 0,
            h.top = s.offsetTop,
            h.left = s.offsetLeft,
            h.right = c - h.width - h.left
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function f2({children: n, isPresent: l, anchorX: s}) {
    const o = T.useId()
      , c = T.useRef(null)
      , h = T.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0
    })
      , {nonce: d} = T.useContext(Af);
    return T.useInsertionEffect( () => {
        const {width: p, height: m, top: g, left: v, right: x} = h.current;
        if (l || !c.current || !p || !m)
            return;
        const S = s === "left" ? `left: ${v}` : `right: ${x}`;
        c.current.dataset.motionPopId = o;
        const w = document.createElement("style");
        return d && (w.nonce = d),
        document.head.appendChild(w),
        w.sheet && w.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${m}px !important;
            ${S}px !important;
            top: ${g}px !important;
          }
        `),
        () => {
            document.head.contains(w) && document.head.removeChild(w)
        }
    }
    , [l]),
    f.jsx(c2, {
        isPresent: l,
        childRef: c,
        sizeRef: h,
        children: T.cloneElement(n, {
            ref: c
        })
    })
}
const d2 = ({children: n, initial: l, isPresent: s, onExitComplete: o, custom: c, presenceAffectsLayout: h, mode: d, anchorX: p}) => {
    const m = ef(h2)
      , g = T.useId();
    let v = !0
      , x = T.useMemo( () => (v = !1,
    {
        id: g,
        initial: l,
        isPresent: s,
        custom: c,
        onExitComplete: S => {
            m.set(S, !0);
            for (const w of m.values())
                if (!w)
                    return;
            o && o()
        }
        ,
        register: S => (m.set(S, !1),
        () => m.delete(S))
    }), [s, m, o]);
    return h && v && (x = {
        ...x
    }),
    T.useMemo( () => {
        m.forEach( (S, w) => m.set(w, !1))
    }
    , [s]),
    T.useEffect( () => {
        !s && !m.size && o && o()
    }
    , [s]),
    d === "popLayout" && (n = f.jsx(f2, {
        isPresent: s,
        anchorX: p,
        children: n
    })),
    f.jsx(Wo.Provider, {
        value: x,
        children: n
    })
}
;
function h2() {
    return new Map
}
function H0(n=!0) {
    const l = T.useContext(Wo);
    if (l === null)
        return [!0, null];
    const {isPresent: s, onExitComplete: o, register: c} = l
      , h = T.useId();
    T.useEffect( () => {
        if (n)
            return c(h)
    }
    , [n]);
    const d = T.useCallback( () => n && o && o(h), [h, o, n]);
    return !s && o ? [!1, d] : [!0]
}
const Po = n => n.key || "";
function Xp(n) {
    const l = [];
    return T.Children.forEach(n, s => {
        T.isValidElement(s) && l.push(s)
    }
    ),
    l
}
const P0 = ({children: n, custom: l, initial: s=!0, onExitComplete: o, presenceAffectsLayout: c=!0, mode: h="sync", propagate: d=!1, anchorX: p="left"}) => {
    const [m,g] = H0(d)
      , v = T.useMemo( () => Xp(n), [n])
      , x = d && !m ? [] : v.map(Po)
      , S = T.useRef(!0)
      , w = T.useRef(v)
      , C = ef( () => new Map)
      , [M,D] = T.useState(v)
      , [U,L] = T.useState(v);
    Jg( () => {
        S.current = !1,
        w.current = v;
        for (let R = 0; R < U.length; R++) {
            const $ = Po(U[R]);
            x.includes($) ? C.delete($) : C.get($) !== !0 && C.set($, !1)
        }
    }
    , [U, x.length, x.join("-")]);
    const B = [];
    if (v !== M) {
        let R = [...v];
        for (let $ = 0; $ < U.length; $++) {
            const te = U[$]
              , J = Po(te);
            x.includes(J) || (R.splice($, 0, te),
            B.push(te))
        }
        return h === "wait" && B.length && (R = B),
        L(Xp(R)),
        D(v),
        null
    }
    const {forceRender: F} = T.useContext(Wc);
    return f.jsx(f.Fragment, {
        children: U.map(R => {
            const $ = Po(R)
              , te = d && !m ? !1 : v === U || x.includes($)
              , J = () => {
                if (C.has($))
                    C.set($, !0);
                else
                    return;
                let se = !0;
                C.forEach(he => {
                    he || (se = !1)
                }
                ),
                se && (F == null || F(),
                L(w.current),
                d && (g == null || g()),
                o && o())
            }
            ;
            return f.jsx(d2, {
                isPresent: te,
                initial: !S.current || s ? void 0 : !1,
                custom: l,
                presenceAffectsLayout: c,
                mode: h,
                onExitComplete: te ? void 0 : J,
                anchorX: p,
                children: R
            }, $)
        }
        )
    })
}
  , q0 = T.createContext({
    strict: !1
})
  , Kp = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , Wl = {};
for (const n in Kp)
    Wl[n] = {
        isEnabled: l => Kp[n].some(s => !!l[s])
    };
function m2(n) {
    for (const l in n)
        Wl[l] = {
            ...Wl[l],
            ...n[l]
        }
}
const p2 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Jo(n) {
    return n.startsWith("while") || n.startsWith("drag") && n !== "draggable" || n.startsWith("layout") || n.startsWith("onTap") || n.startsWith("onPan") || n.startsWith("onLayout") || p2.has(n)
}
let Y0 = n => !Jo(n);
function g2(n) {
    typeof n == "function" && (Y0 = l => l.startsWith("on") ? !Jo(l) : n(l))
}
try {
    g2(require("@emotion/is-prop-valid").default)
} catch {}
function y2(n, l, s) {
    const o = {};
    for (const c in n)
        c === "values" && typeof n.values == "object" || (Y0(c) || s === !0 && Jo(c) || !l && !Jo(c) || n.draggable && c.startsWith("onDrag")) && (o[c] = n[c]);
    return o
}
function v2(n) {
    if (typeof Proxy > "u")
        return n;
    const l = new Map
      , s = (...o) => n(...o);
    return new Proxy(s,{
        get: (o, c) => c === "create" ? n : (l.has(c) || l.set(c, n(c)),
        l.get(c))
    })
}
const er = T.createContext({});
function tr(n) {
    return n !== null && typeof n == "object" && typeof n.start == "function"
}
function pi(n) {
    return typeof n == "string" || Array.isArray(n)
}
const Nf = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Ef = ["initial", ...Nf];
function ar(n) {
    return tr(n.animate) || Ef.some(l => pi(n[l]))
}
function G0(n) {
    return !!(ar(n) || n.variants)
}
function x2(n, l) {
    if (ar(n)) {
        const {initial: s, animate: o} = n;
        return {
            initial: s === !1 || pi(s) ? s : void 0,
            animate: pi(o) ? o : void 0
        }
    }
    return n.inherit !== !1 ? l : {}
}
function b2(n) {
    const {initial: l, animate: s} = x2(n, T.useContext(er));
    return T.useMemo( () => ({
        initial: l,
        animate: s
    }), [Zp(l), Zp(s)])
}
function Zp(n) {
    return Array.isArray(n) ? n.join(" ") : n
}
const S2 = Symbol.for("motionComponentSymbol");
function Ql(n) {
    return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current")
}
function T2(n, l, s) {
    return T.useCallback(o => {
        o && n.onMount && n.onMount(o),
        l && (o ? l.mount(o) : l.unmount()),
        s && (typeof s == "function" ? s(o) : Ql(s) && (s.current = o))
    }
    , [l])
}
const Cf = n => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , j2 = "framerAppearId"
  , X0 = "data-" + Cf(j2)
  , K0 = T.createContext({});
function w2(n, l, s, o, c) {
    var M, D;
    const {visualElement: h} = T.useContext(er)
      , d = T.useContext(q0)
      , p = T.useContext(Wo)
      , m = T.useContext(Af).reducedMotion
      , g = T.useRef(null);
    o = o || d.renderer,
    !g.current && o && (g.current = o(n, {
        visualState: l,
        parent: h,
        props: s,
        presenceContext: p,
        blockInitialAnimation: p ? p.initial === !1 : !1,
        reducedMotionConfig: m
    }));
    const v = g.current
      , x = T.useContext(K0);
    v && !v.projection && c && (v.type === "html" || v.type === "svg") && A2(g.current, s, c, x);
    const S = T.useRef(!1);
    T.useInsertionEffect( () => {
        v && S.current && v.update(s, p)
    }
    );
    const w = s[X0]
      , C = T.useRef(!!w && !((M = window.MotionHandoffIsComplete) != null && M.call(window, w)) && ((D = window.MotionHasOptimisedAnimation) == null ? void 0 : D.call(window, w)));
    return Jg( () => {
        v && (S.current = !0,
        window.MotionIsMounted = !0,
        v.updateFeatures(),
        jf.render(v.render),
        C.current && v.animationState && v.animationState.animateChanges())
    }
    ),
    T.useEffect( () => {
        v && (!C.current && v.animationState && v.animationState.animateChanges(),
        C.current && (queueMicrotask( () => {
            var U;
            (U = window.MotionHandoffMarkAsComplete) == null || U.call(window, w)
        }
        ),
        C.current = !1))
    }
    ),
    v
}
function A2(n, l, s, o) {
    const {layoutId: c, layout: h, drag: d, dragConstraints: p, layoutScroll: m, layoutRoot: g, layoutCrossfade: v} = l;
    n.projection = new s(n.latestValues,l["data-framer-portal-id"] ? void 0 : Z0(n.parent)),
    n.projection.setOptions({
        layoutId: c,
        layout: h,
        alwaysMeasureLayout: !!d || p && Ql(p),
        visualElement: n,
        animationType: typeof h == "string" ? h : "both",
        initialPromotionConfig: o,
        crossfade: v,
        layoutScroll: m,
        layoutRoot: g
    })
}
function Z0(n) {
    if (n)
        return n.options.allowProjection !== !1 ? n.projection : Z0(n.parent)
}
function N2({preloadedFeatures: n, createVisualElement: l, useRender: s, useVisualState: o, Component: c}) {
    n && m2(n);
    function h(p, m) {
        let g;
        const v = {
            ...T.useContext(Af),
            ...p,
            layoutId: E2(p)
        }
          , {isStatic: x} = v
          , S = b2(p)
          , w = o(p, x);
        if (!x && tf) {
            C2();
            const C = D2(v);
            g = C.MeasureLayout,
            S.visualElement = w2(c, w, v, l, C.ProjectionNode)
        }
        return f.jsxs(er.Provider, {
            value: S,
            children: [g && S.visualElement ? f.jsx(g, {
                visualElement: S.visualElement,
                ...v
            }) : null, s(c, p, T2(w, S.visualElement, m), w, x, S.visualElement)]
        })
    }
    h.displayName = `motion.${typeof c == "string" ? c : `create(${c.displayName ?? c.name ?? ""})`}`;
    const d = T.forwardRef(h);
    return d[S2] = c,
    d
}
function E2({layoutId: n}) {
    const l = T.useContext(Wc).id;
    return l && n !== void 0 ? l + "-" + n : n
}
function C2(n, l) {
    T.useContext(q0).strict
}
function D2(n) {
    const {drag: l, layout: s} = Wl;
    if (!l && !s)
        return {};
    const o = {
        ...l,
        ...s
    };
    return {
        MeasureLayout: l != null && l.isEnabled(n) || s != null && s.isEnabled(n) ? o.MeasureLayout : void 0,
        ProjectionNode: o.ProjectionNode
    }
}
const gi = {};
function _2(n) {
    for (const l in n)
        gi[l] = n[l],
        cf(l) && (gi[l].isCSSVariable = !0)
}
function Q0(n, {layout: l, layoutId: s}) {
    return as.has(n) || n.startsWith("origin") || (l || s !== void 0) && (!!gi[n] || n === "opacity")
}
const M2 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , O2 = ts.length;
function R2(n, l, s) {
    let o = ""
      , c = !0;
    for (let h = 0; h < O2; h++) {
        const d = ts[h]
          , p = n[d];
        if (p === void 0)
            continue;
        let m = !0;
        if (typeof p == "number" ? m = p === (d.startsWith("scale") ? 1 : 0) : m = parseFloat(p) === 0,
        !m || s) {
            const g = z0(p, Tf[d]);
            if (!m) {
                c = !1;
                const v = M2[d] || d;
                o += `${v}(${g}) `
            }
            s && (l[d] = g)
        }
    }
    return o = o.trim(),
    s ? o = s(l, c ? "" : o) : c && (o = "none"),
    o
}
function Df(n, l, s) {
    const {style: o, vars: c, transformOrigin: h} = n;
    let d = !1
      , p = !1;
    for (const m in l) {
        const g = l[m];
        if (as.has(m)) {
            d = !0;
            continue
        } else if (cf(m)) {
            c[m] = g;
            continue
        } else {
            const v = z0(g, Tf[m]);
            m.startsWith("origin") ? (p = !0,
            h[m] = v) : o[m] = v
        }
    }
    if (l.transform || (d || s ? o.transform = R2(l, n.transform, s) : o.transform && (o.transform = "none")),
    p) {
        const {originX: m="50%", originY: g="50%", originZ: v=0} = h;
        o.transformOrigin = `${m} ${g} ${v}`
    }
}
const _f = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function F0(n, l, s) {
    for (const o in l)
        !Lt(l[o]) && !Q0(o, s) && (n[o] = l[o])
}
function V2({transformTemplate: n}, l) {
    return T.useMemo( () => {
        const s = _f();
        return Df(s, l, n),
        Object.assign({}, s.vars, s.style)
    }
    , [l])
}
function z2(n, l) {
    const s = n.style || {}
      , o = {};
    return F0(o, s, n),
    Object.assign(o, V2(n, l)),
    o
}
function U2(n, l) {
    const s = {}
      , o = z2(n, l);
    return n.drag && n.dragListener !== !1 && (s.draggable = !1,
    o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none",
    o.touchAction = n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`),
    n.tabIndex === void 0 && (n.onTap || n.onTapStart || n.whileTap) && (s.tabIndex = 0),
    s.style = o,
    s
}
const B2 = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , L2 = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function k2(n, l, s=1, o=0, c=!0) {
    n.pathLength = 1;
    const h = c ? B2 : L2;
    n[h.offset] = je.transform(-o);
    const d = je.transform(l)
      , p = je.transform(s);
    n[h.array] = `${d} ${p}`
}
function J0(n, {attrX: l, attrY: s, attrScale: o, pathLength: c, pathSpacing: h=1, pathOffset: d=0, ...p}, m, g, v) {
    if (Df(n, p, g),
    m) {
        n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
        return
    }
    n.attrs = n.style,
    n.style = {};
    const {attrs: x, style: S} = n;
    x.transform && (S.transform = x.transform,
    delete x.transform),
    (S.transform || x.transformOrigin) && (S.transformOrigin = x.transformOrigin ?? "50% 50%",
    delete x.transformOrigin),
    S.transform && (S.transformBox = (v == null ? void 0 : v.transformBox) ?? "fill-box",
    delete x.transformBox),
    l !== void 0 && (x.x = l),
    s !== void 0 && (x.y = s),
    o !== void 0 && (x.scale = o),
    c !== void 0 && k2(x, c, h, d, !1)
}
const I0 = () => ({
    ..._f(),
    attrs: {}
})
  , $0 = n => typeof n == "string" && n.toLowerCase() === "svg";
function H2(n, l, s, o) {
    const c = T.useMemo( () => {
        const h = I0();
        return J0(h, l, $0(o), n.transformTemplate, n.style),
        {
            ...h.attrs,
            style: {
                ...h.style
            }
        }
    }
    , [l]);
    if (n.style) {
        const h = {};
        F0(h, n.style, n),
        c.style = {
            ...h,
            ...c.style
        }
    }
    return c
}
const P2 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Mf(n) {
    return typeof n != "string" || n.includes("-") ? !1 : !!(P2.indexOf(n) > -1 || /[A-Z]/u.test(n))
}
function q2(n=!1) {
    return (s, o, c, {latestValues: h}, d) => {
        const m = (Mf(s) ? H2 : U2)(o, h, d, s)
          , g = y2(o, typeof s == "string", n)
          , v = s !== T.Fragment ? {
            ...g,
            ...m,
            ref: c
        } : {}
          , {children: x} = o
          , S = T.useMemo( () => Lt(x) ? x.get() : x, [x]);
        return T.createElement(s, {
            ...v,
            children: S
        })
    }
}
function Qp(n) {
    const l = [{}, {}];
    return n == null || n.values.forEach( (s, o) => {
        l[0][o] = s.get(),
        l[1][o] = s.getVelocity()
    }
    ),
    l
}
function Of(n, l, s, o) {
    if (typeof l == "function") {
        const [c,h] = Qp(o);
        l = l(s !== void 0 ? s : n.custom, c, h)
    }
    if (typeof l == "string" && (l = n.variants && n.variants[l]),
    typeof l == "function") {
        const [c,h] = Qp(o);
        l = l(s !== void 0 ? s : n.custom, c, h)
    }
    return l
}
function Xo(n) {
    return Lt(n) ? n.get() : n
}
function Y2({scrapeMotionValuesFromProps: n, createRenderState: l}, s, o, c) {
    return {
        latestValues: G2(s, o, c, n),
        renderState: l()
    }
}
const W0 = n => (l, s) => {
    const o = T.useContext(er)
      , c = T.useContext(Wo)
      , h = () => Y2(n, l, o, c);
    return s ? h() : ef(h)
}
;
function G2(n, l, s, o) {
    const c = {}
      , h = o(n, {});
    for (const S in h)
        c[S] = Xo(h[S]);
    let {initial: d, animate: p} = n;
    const m = ar(n)
      , g = G0(n);
    l && g && !m && n.inherit !== !1 && (d === void 0 && (d = l.initial),
    p === void 0 && (p = l.animate));
    let v = s ? s.initial === !1 : !1;
    v = v || d === !1;
    const x = v ? p : d;
    if (x && typeof x != "boolean" && !tr(x)) {
        const S = Array.isArray(x) ? x : [x];
        for (let w = 0; w < S.length; w++) {
            const C = Of(n, S[w]);
            if (C) {
                const {transitionEnd: M, transition: D, ...U} = C;
                for (const L in U) {
                    let B = U[L];
                    if (Array.isArray(B)) {
                        const F = v ? B.length - 1 : 0;
                        B = B[F]
                    }
                    B !== null && (c[L] = B)
                }
                for (const L in M)
                    c[L] = M[L]
            }
        }
    }
    return c
}
function Rf(n, l, s) {
    var h;
    const {style: o} = n
      , c = {};
    for (const d in o)
        (Lt(o[d]) || l.style && Lt(l.style[d]) || Q0(d, n) || ((h = s == null ? void 0 : s.getValue(d)) == null ? void 0 : h.liveStyle) !== void 0) && (c[d] = o[d]);
    return c
}
const X2 = {
    useVisualState: W0({
        scrapeMotionValuesFromProps: Rf,
        createRenderState: _f
    })
};
function ey(n, l, s) {
    const o = Rf(n, l, s);
    for (const c in n)
        if (Lt(n[c]) || Lt(l[c])) {
            const h = ts.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
            o[h] = n[c]
        }
    return o
}
const K2 = {
    useVisualState: W0({
        scrapeMotionValuesFromProps: ey,
        createRenderState: I0
    })
};
function Z2(n, l) {
    return function(o, {forwardMotionProps: c}={
        forwardMotionProps: !1
    }) {
        const d = {
            ...Mf(o) ? K2 : X2,
            preloadedFeatures: n,
            useRender: q2(c),
            createVisualElement: l,
            Component: o
        };
        return N2(d)
    }
}
function yi(n, l, s) {
    const o = n.getProps();
    return Of(o, l, s !== void 0 ? s : o.custom, n)
}
const Yc = n => Array.isArray(n);
function Q2(n, l, s) {
    n.hasValue(l) ? n.getValue(l).set(s) : n.addValue(l, $l(s))
}
function F2(n) {
    return Yc(n) ? n[n.length - 1] || 0 : n
}
function J2(n, l) {
    const s = yi(n, l);
    let {transitionEnd: o={}, transition: c={}, ...h} = s || {};
    h = {
        ...h,
        ...o
    };
    for (const d in h) {
        const p = F2(h[d]);
        Q2(n, d, p)
    }
}
function I2(n) {
    return !!(Lt(n) && n.add)
}
function Gc(n, l) {
    const s = n.getValue("willChange");
    if (I2(s))
        return s.add(l);
    if (!s && sn.WillChange) {
        const o = new sn.WillChange("auto");
        n.addValue("willChange", o),
        o.add(l)
    }
}
function ty(n) {
    return n.props[X0]
}
const $2 = n => n !== null;
function W2(n, {repeat: l, repeatType: s="loop"}, o) {
    const c = n.filter($2)
      , h = l && s !== "loop" && l % 2 === 1 ? 0 : c.length - 1;
    return c[h]
}
const eS = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , tS = n => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , aS = {
    type: "keyframes",
    duration: .8
}
  , nS = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , lS = (n, {keyframes: l}) => l.length > 2 ? aS : as.has(n) ? n.startsWith("scale") ? tS(l[1]) : eS : nS;
function sS({when: n, delay: l, delayChildren: s, staggerChildren: o, staggerDirection: c, repeat: h, repeatType: d, repeatDelay: p, from: m, elapsed: g, ...v}) {
    return !!Object.keys(v).length
}
const Vf = (n, l, s, o={}, c, h) => d => {
    const p = Sf(o, n) || {}
      , m = p.delay || o.delay || 0;
    let {elapsed: g=0} = o;
    g = g - za(m);
    const v = {
        keyframes: Array.isArray(s) ? s : [null, s],
        ease: "easeOut",
        velocity: l.getVelocity(),
        ...p,
        delay: -g,
        onUpdate: S => {
            l.set(S),
            p.onUpdate && p.onUpdate(S)
        }
        ,
        onComplete: () => {
            d(),
            p.onComplete && p.onComplete()
        }
        ,
        name: n,
        motionValue: l,
        element: h ? void 0 : c
    };
    sS(p) || Object.assign(v, lS(n, v)),
    v.duration && (v.duration = za(v.duration)),
    v.repeatDelay && (v.repeatDelay = za(v.repeatDelay)),
    v.from !== void 0 && (v.keyframes[0] = v.from);
    let x = !1;
    if ((v.type === !1 || v.duration === 0 && !v.repeatDelay) && (v.duration = 0,
    v.delay === 0 && (x = !0)),
    (sn.instantAnimations || sn.skipAnimations) && (x = !0,
    v.duration = 0,
    v.delay = 0),
    v.allowFlatten = !p.type && !p.ease,
    x && !h && l.get() !== void 0) {
        const S = W2(v.keyframes, p);
        if (S !== void 0) {
            it.update( () => {
                v.onUpdate(S),
                v.onComplete()
            }
            );
            return
        }
    }
    return p.isSync ? new vf(v) : new k1(v)
}
;
function iS({protectedKeys: n, needsAnimating: l}, s) {
    const o = n.hasOwnProperty(s) && l[s] !== !0;
    return l[s] = !1,
    o
}
function ay(n, l, {delay: s=0, transitionOverride: o, type: c}={}) {
    let {transition: h=n.getDefaultTransition(), transitionEnd: d, ...p} = l;
    o && (h = o);
    const m = []
      , g = c && n.animationState && n.animationState.getState()[c];
    for (const v in p) {
        const x = n.getValue(v, n.latestValues[v] ?? null)
          , S = p[v];
        if (S === void 0 || g && iS(g, v))
            continue;
        const w = {
            delay: s,
            ...Sf(h || {}, v)
        }
          , C = x.get();
        if (C !== void 0 && !x.isAnimating && !Array.isArray(S) && S === C && !w.velocity)
            continue;
        let M = !1;
        if (window.MotionHandoffAnimation) {
            const U = ty(n);
            if (U) {
                const L = window.MotionHandoffAnimation(U, v, it);
                L !== null && (w.startTime = L,
                M = !0)
            }
        }
        Gc(n, v),
        x.start(Vf(v, x, S, n.shouldReduceMotion && _0.has(v) ? {
            type: !1
        } : w, n, M));
        const D = x.animation;
        D && m.push(D)
    }
    return d && Promise.all(m).then( () => {
        it.update( () => {
            d && J2(n, d)
        }
        )
    }
    ),
    m
}
function Xc(n, l, s={}) {
    var m;
    const o = yi(n, l, s.type === "exit" ? (m = n.presenceContext) == null ? void 0 : m.custom : void 0);
    let {transition: c=n.getDefaultTransition() || {}} = o || {};
    s.transitionOverride && (c = s.transitionOverride);
    const h = o ? () => Promise.all(ay(n, o, s)) : () => Promise.resolve()
      , d = n.variantChildren && n.variantChildren.size ? (g=0) => {
        const {delayChildren: v=0, staggerChildren: x, staggerDirection: S} = c;
        return oS(n, l, v + g, x, S, s)
    }
    : () => Promise.resolve()
      , {when: p} = c;
    if (p) {
        const [g,v] = p === "beforeChildren" ? [h, d] : [d, h];
        return g().then( () => v())
    } else
        return Promise.all([h(), d(s.delay)])
}
function oS(n, l, s=0, o=0, c=1, h) {
    const d = []
      , p = (n.variantChildren.size - 1) * o
      , m = c === 1 ? (g=0) => g * o : (g=0) => p - g * o;
    return Array.from(n.variantChildren).sort(rS).forEach( (g, v) => {
        g.notify("AnimationStart", l),
        d.push(Xc(g, l, {
            ...h,
            delay: s + m(v)
        }).then( () => g.notify("AnimationComplete", l)))
    }
    ),
    Promise.all(d)
}
function rS(n, l) {
    return n.sortNodePosition(l)
}
function uS(n, l, s={}) {
    n.notify("AnimationStart", l);
    let o;
    if (Array.isArray(l)) {
        const c = l.map(h => Xc(n, h, s));
        o = Promise.all(c)
    } else if (typeof l == "string")
        o = Xc(n, l, s);
    else {
        const c = typeof l == "function" ? yi(n, l, s.custom) : l;
        o = Promise.all(ay(n, c, s))
    }
    return o.then( () => {
        n.notify("AnimationComplete", l)
    }
    )
}
function ny(n, l) {
    if (!Array.isArray(l))
        return !1;
    const s = l.length;
    if (s !== n.length)
        return !1;
    for (let o = 0; o < s; o++)
        if (l[o] !== n[o])
            return !1;
    return !0
}
const cS = Ef.length;
function ly(n) {
    if (!n)
        return;
    if (!n.isControllingVariants) {
        const s = n.parent ? ly(n.parent) || {} : {};
        return n.props.initial !== void 0 && (s.initial = n.props.initial),
        s
    }
    const l = {};
    for (let s = 0; s < cS; s++) {
        const o = Ef[s]
          , c = n.props[o];
        (pi(c) || c === !1) && (l[o] = c)
    }
    return l
}
const fS = [...Nf].reverse()
  , dS = Nf.length;
function hS(n) {
    return l => Promise.all(l.map( ({animation: s, options: o}) => uS(n, s, o)))
}
function mS(n) {
    let l = hS(n)
      , s = Fp()
      , o = !0;
    const c = m => (g, v) => {
        var S;
        const x = yi(n, v, m === "exit" ? (S = n.presenceContext) == null ? void 0 : S.custom : void 0);
        if (x) {
            const {transition: w, transitionEnd: C, ...M} = x;
            g = {
                ...g,
                ...M,
                ...C
            }
        }
        return g
    }
    ;
    function h(m) {
        l = m(n)
    }
    function d(m) {
        const {props: g} = n
          , v = ly(n.parent) || {}
          , x = []
          , S = new Set;
        let w = {}
          , C = 1 / 0;
        for (let D = 0; D < dS; D++) {
            const U = fS[D]
              , L = s[U]
              , B = g[U] !== void 0 ? g[U] : v[U]
              , F = pi(B)
              , R = U === m ? L.isActive : null;
            R === !1 && (C = D);
            let $ = B === v[U] && B !== g[U] && F;
            if ($ && o && n.manuallyAnimateOnMount && ($ = !1),
            L.protectedKeys = {
                ...w
            },
            !L.isActive && R === null || !B && !L.prevProp || tr(B) || typeof B == "boolean")
                continue;
            const te = pS(L.prevProp, B);
            let J = te || U === m && L.isActive && !$ && F || D > C && F
              , se = !1;
            const he = Array.isArray(B) ? B : [B];
            let pe = he.reduce(c(U), {});
            R === !1 && (pe = {});
            const {prevResolvedValues: de={}} = L
              , re = {
                ...de,
                ...pe
            }
              , ee = O => {
                J = !0,
                S.has(O) && (se = !0,
                S.delete(O)),
                L.needsAnimating[O] = !0;
                const q = n.getValue(O);
                q && (q.liveStyle = !1)
            }
            ;
            for (const O in re) {
                const q = pe[O]
                  , ae = de[O];
                if (w.hasOwnProperty(O))
                    continue;
                let j = !1;
                Yc(q) && Yc(ae) ? j = !ny(q, ae) : j = q !== ae,
                j ? q != null ? ee(O) : S.add(O) : q !== void 0 && S.has(O) ? ee(O) : L.protectedKeys[O] = !0
            }
            L.prevProp = B,
            L.prevResolvedValues = pe,
            L.isActive && (w = {
                ...w,
                ...pe
            }),
            o && n.blockInitialAnimation && (J = !1),
            J && (!($ && te) || se) && x.push(...he.map(O => ({
                animation: O,
                options: {
                    type: U
                }
            })))
        }
        if (S.size) {
            const D = {};
            if (typeof g.initial != "boolean") {
                const U = yi(n, Array.isArray(g.initial) ? g.initial[0] : g.initial);
                U && U.transition && (D.transition = U.transition)
            }
            S.forEach(U => {
                const L = n.getBaseTarget(U)
                  , B = n.getValue(U);
                B && (B.liveStyle = !0),
                D[U] = L ?? null
            }
            ),
            x.push({
                animation: D
            })
        }
        let M = !!x.length;
        return o && (g.initial === !1 || g.initial === g.animate) && !n.manuallyAnimateOnMount && (M = !1),
        o = !1,
        M ? l(x) : Promise.resolve()
    }
    function p(m, g) {
        var x;
        if (s[m].isActive === g)
            return Promise.resolve();
        (x = n.variantChildren) == null || x.forEach(S => {
            var w;
            return (w = S.animationState) == null ? void 0 : w.setActive(m, g)
        }
        ),
        s[m].isActive = g;
        const v = d(m);
        for (const S in s)
            s[S].protectedKeys = {};
        return v
    }
    return {
        animateChanges: d,
        setActive: p,
        setAnimateFunction: h,
        getState: () => s,
        reset: () => {
            s = Fp(),
            o = !0
        }
    }
}
function pS(n, l) {
    return typeof l == "string" ? l !== n : Array.isArray(l) ? !ny(l, n) : !1
}
function al(n=!1) {
    return {
        isActive: n,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function Fp() {
    return {
        animate: al(!0),
        whileInView: al(),
        whileHover: al(),
        whileTap: al(),
        whileDrag: al(),
        whileFocus: al(),
        exit: al()
    }
}
class Un {
    constructor(l) {
        this.isMounted = !1,
        this.node = l
    }
    update() {}
}
class gS extends Un {
    constructor(l) {
        super(l),
        l.animationState || (l.animationState = mS(l))
    }
    updateAnimationControlsSubscription() {
        const {animate: l} = this.node.getProps();
        tr(l) && (this.unmountControls = l.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: l} = this.node.getProps()
          , {animate: s} = this.node.prevProps || {};
        l !== s && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var l;
        this.node.animationState.reset(),
        (l = this.unmountControls) == null || l.call(this)
    }
}
let yS = 0;
class vS extends Un {
    constructor() {
        super(...arguments),
        this.id = yS++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: l, onExitComplete: s} = this.node.presenceContext
          , {isPresent: o} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || l === o)
            return;
        const c = this.node.animationState.setActive("exit", !l);
        s && !l && c.then( () => {
            s(this.id)
        }
        )
    }
    mount() {
        const {register: l, onExitComplete: s} = this.node.presenceContext || {};
        s && s(this.id),
        l && (this.unmount = l(this.id))
    }
    unmount() {}
}
const xS = {
    animation: {
        Feature: gS
    },
    exit: {
        Feature: vS
    }
};
function vi(n, l, s, o={
    passive: !0
}) {
    return n.addEventListener(l, s, o),
    () => n.removeEventListener(l, s)
}
function wi(n) {
    return {
        point: {
            x: n.pageX,
            y: n.pageY
        }
    }
}
const bS = n => l => wf(l) && n(l, wi(l));
function ui(n, l, s, o) {
    return vi(n, l, bS(s), o)
}
function sy({top: n, left: l, right: s, bottom: o}) {
    return {
        x: {
            min: l,
            max: s
        },
        y: {
            min: n,
            max: o
        }
    }
}
function SS({x: n, y: l}) {
    return {
        top: l.min,
        right: n.max,
        bottom: l.max,
        left: n.min
    }
}
function TS(n, l) {
    if (!l)
        return n;
    const s = l({
        x: n.left,
        y: n.top
    })
      , o = l({
        x: n.right,
        y: n.bottom
    });
    return {
        top: s.y,
        left: s.x,
        bottom: o.y,
        right: o.x
    }
}
const iy = 1e-4
  , jS = 1 - iy
  , wS = 1 + iy
  , oy = .01
  , AS = 0 - oy
  , NS = 0 + oy;
function Pt(n) {
    return n.max - n.min
}
function ES(n, l, s) {
    return Math.abs(n - l) <= s
}
function Jp(n, l, s, o=.5) {
    n.origin = o,
    n.originPoint = st(l.min, l.max, n.origin),
    n.scale = Pt(s) / Pt(l),
    n.translate = st(s.min, s.max, n.origin) - n.originPoint,
    (n.scale >= jS && n.scale <= wS || isNaN(n.scale)) && (n.scale = 1),
    (n.translate >= AS && n.translate <= NS || isNaN(n.translate)) && (n.translate = 0)
}
function ci(n, l, s, o) {
    Jp(n.x, l.x, s.x, o ? o.originX : void 0),
    Jp(n.y, l.y, s.y, o ? o.originY : void 0)
}
function Ip(n, l, s) {
    n.min = s.min + l.min,
    n.max = n.min + Pt(l)
}
function CS(n, l, s) {
    Ip(n.x, l.x, s.x),
    Ip(n.y, l.y, s.y)
}
function $p(n, l, s) {
    n.min = l.min - s.min,
    n.max = n.min + Pt(l)
}
function fi(n, l, s) {
    $p(n.x, l.x, s.x),
    $p(n.y, l.y, s.y)
}
const Wp = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Fl = () => ({
    x: Wp(),
    y: Wp()
})
  , eg = () => ({
    min: 0,
    max: 0
})
  , mt = () => ({
    x: eg(),
    y: eg()
});
function va(n) {
    return [n("x"), n("y")]
}
function jc(n) {
    return n === void 0 || n === 1
}
function Kc({scale: n, scaleX: l, scaleY: s}) {
    return !jc(n) || !jc(l) || !jc(s)
}
function nl(n) {
    return Kc(n) || ry(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY
}
function ry(n) {
    return tg(n.x) || tg(n.y)
}
function tg(n) {
    return n && n !== "0%"
}
function Io(n, l, s) {
    const o = n - s
      , c = l * o;
    return s + c
}
function ag(n, l, s, o, c) {
    return c !== void 0 && (n = Io(n, c, o)),
    Io(n, s, o) + l
}
function Zc(n, l=0, s=1, o, c) {
    n.min = ag(n.min, l, s, o, c),
    n.max = ag(n.max, l, s, o, c)
}
function uy(n, {x: l, y: s}) {
    Zc(n.x, l.translate, l.scale, l.originPoint),
    Zc(n.y, s.translate, s.scale, s.originPoint)
}
const ng = .999999999999
  , lg = 1.0000000000001;
function DS(n, l, s, o=!1) {
    const c = s.length;
    if (!c)
        return;
    l.x = l.y = 1;
    let h, d;
    for (let p = 0; p < c; p++) {
        h = s[p],
        d = h.projectionDelta;
        const {visualElement: m} = h.options;
        m && m.props.style && m.props.style.display === "contents" || (o && h.options.layoutScroll && h.scroll && h !== h.root && Il(n, {
            x: -h.scroll.offset.x,
            y: -h.scroll.offset.y
        }),
        d && (l.x *= d.x.scale,
        l.y *= d.y.scale,
        uy(n, d)),
        o && nl(h.latestValues) && Il(n, h.latestValues))
    }
    l.x < lg && l.x > ng && (l.x = 1),
    l.y < lg && l.y > ng && (l.y = 1)
}
function Jl(n, l) {
    n.min = n.min + l,
    n.max = n.max + l
}
function sg(n, l, s, o, c=.5) {
    const h = st(n.min, n.max, c);
    Zc(n, l, s, h, o)
}
function Il(n, l) {
    sg(n.x, l.x, l.scaleX, l.scale, l.originX),
    sg(n.y, l.y, l.scaleY, l.scale, l.originY)
}
function cy(n, l) {
    return sy(TS(n.getBoundingClientRect(), l))
}
function _S(n, l, s) {
    const o = cy(n, s)
      , {scroll: c} = l;
    return c && (Jl(o.x, c.offset.x),
    Jl(o.y, c.offset.y)),
    o
}
const fy = ({current: n}) => n ? n.ownerDocument.defaultView : null
  , ig = (n, l) => Math.abs(n - l);
function MS(n, l) {
    const s = ig(n.x, l.x)
      , o = ig(n.y, l.y);
    return Math.sqrt(s ** 2 + o ** 2)
}
class dy {
    constructor(l, s, {transformPagePoint: o, contextWindow: c, dragSnapToOrigin: h=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const x = Ac(this.lastMoveEventInfo, this.history)
              , S = this.startEvent !== null
              , w = MS(x.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!S && !w)
                return;
            const {point: C} = x
              , {timestamp: M} = Ot;
            this.history.push({
                ...C,
                timestamp: M
            });
            const {onStart: D, onMove: U} = this.handlers;
            S || (D && D(this.lastMoveEvent, x),
            this.startEvent = this.lastMoveEvent),
            U && U(this.lastMoveEvent, x)
        }
        ,
        this.handlePointerMove = (x, S) => {
            this.lastMoveEvent = x,
            this.lastMoveEventInfo = wc(S, this.transformPagePoint),
            it.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (x, S) => {
            this.end();
            const {onEnd: w, onSessionEnd: C, resumeAnimation: M} = this.handlers;
            if (this.dragSnapToOrigin && M && M(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const D = Ac(x.type === "pointercancel" ? this.lastMoveEventInfo : wc(S, this.transformPagePoint), this.history);
            this.startEvent && w && w(x, D),
            C && C(x, D)
        }
        ,
        !wf(l))
            return;
        this.dragSnapToOrigin = h,
        this.handlers = s,
        this.transformPagePoint = o,
        this.contextWindow = c || window;
        const d = wi(l)
          , p = wc(d, this.transformPagePoint)
          , {point: m} = p
          , {timestamp: g} = Ot;
        this.history = [{
            ...m,
            timestamp: g
        }];
        const {onSessionStart: v} = s;
        v && v(l, Ac(p, this.history)),
        this.removeListeners = Si(ui(this.contextWindow, "pointermove", this.handlePointerMove), ui(this.contextWindow, "pointerup", this.handlePointerUp), ui(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(l) {
        this.handlers = l
    }
    end() {
        this.removeListeners && this.removeListeners(),
        Vn(this.updatePoint)
    }
}
function wc(n, l) {
    return l ? {
        point: l(n.point)
    } : n
}
function og(n, l) {
    return {
        x: n.x - l.x,
        y: n.y - l.y
    }
}
function Ac({point: n}, l) {
    return {
        point: n,
        delta: og(n, hy(l)),
        offset: og(n, OS(l)),
        velocity: RS(l, .1)
    }
}
function OS(n) {
    return n[0]
}
function hy(n) {
    return n[n.length - 1]
}
function RS(n, l) {
    if (n.length < 2)
        return {
            x: 0,
            y: 0
        };
    let s = n.length - 1
      , o = null;
    const c = hy(n);
    for (; s >= 0 && (o = n[s],
    !(c.timestamp - o.timestamp > za(l))); )
        s--;
    if (!o)
        return {
            x: 0,
            y: 0
        };
    const h = Ua(c.timestamp - o.timestamp);
    if (h === 0)
        return {
            x: 0,
            y: 0
        };
    const d = {
        x: (c.x - o.x) / h,
        y: (c.y - o.y) / h
    };
    return d.x === 1 / 0 && (d.x = 0),
    d.y === 1 / 0 && (d.y = 0),
    d
}
function VS(n, {min: l, max: s}, o) {
    return l !== void 0 && n < l ? n = o ? st(l, n, o.min) : Math.max(n, l) : s !== void 0 && n > s && (n = o ? st(s, n, o.max) : Math.min(n, s)),
    n
}
function rg(n, l, s) {
    return {
        min: l !== void 0 ? n.min + l : void 0,
        max: s !== void 0 ? n.max + s - (n.max - n.min) : void 0
    }
}
function zS(n, {top: l, left: s, bottom: o, right: c}) {
    return {
        x: rg(n.x, s, c),
        y: rg(n.y, l, o)
    }
}
function ug(n, l) {
    let s = l.min - n.min
      , o = l.max - n.max;
    return l.max - l.min < n.max - n.min && ([s,o] = [o, s]),
    {
        min: s,
        max: o
    }
}
function US(n, l) {
    return {
        x: ug(n.x, l.x),
        y: ug(n.y, l.y)
    }
}
function BS(n, l) {
    let s = .5;
    const o = Pt(n)
      , c = Pt(l);
    return c > o ? s = di(l.min, l.max - o, n.min) : o > c && (s = di(n.min, n.max - c, l.min)),
    ln(0, 1, s)
}
function LS(n, l) {
    const s = {};
    return l.min !== void 0 && (s.min = l.min - n.min),
    l.max !== void 0 && (s.max = l.max - n.min),
    s
}
const Qc = .35;
function kS(n=Qc) {
    return n === !1 ? n = 0 : n === !0 && (n = Qc),
    {
        x: cg(n, "left", "right"),
        y: cg(n, "top", "bottom")
    }
}
function cg(n, l, s) {
    return {
        min: fg(n, l),
        max: fg(n, s)
    }
}
function fg(n, l) {
    return typeof n == "number" ? n : n[l] || 0
}
const HS = new WeakMap;
class PS {
    constructor(l) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = mt(),
        this.visualElement = l
    }
    start(l, {snapToCursor: s=!1}={}) {
        const {presenceContext: o} = this.visualElement;
        if (o && o.isPresent === !1)
            return;
        const c = v => {
            const {dragSnapToOrigin: x} = this.getProps();
            x ? this.pauseAnimation() : this.stopAnimation(),
            s && this.snapToCursor(wi(v).point)
        }
          , h = (v, x) => {
            const {drag: S, dragPropagation: w, onDragStart: C} = this.getProps();
            if (S && !w && (this.openDragLock && this.openDragLock(),
            this.openDragLock = t2(S),
            !this.openDragLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            va(D => {
                let U = this.getAxisMotionValue(D).get() || 0;
                if (Ba.test(U)) {
                    const {projection: L} = this.visualElement;
                    if (L && L.layout) {
                        const B = L.layout.layoutBox[D];
                        B && (U = Pt(B) * (parseFloat(U) / 100))
                    }
                }
                this.originPoint[D] = U
            }
            ),
            C && it.postRender( () => C(v, x)),
            Gc(this.visualElement, "transform");
            const {animationState: M} = this.visualElement;
            M && M.setActive("whileDrag", !0)
        }
          , d = (v, x) => {
            const {dragPropagation: S, dragDirectionLock: w, onDirectionLock: C, onDrag: M} = this.getProps();
            if (!S && !this.openDragLock)
                return;
            const {offset: D} = x;
            if (w && this.currentDirection === null) {
                this.currentDirection = qS(D),
                this.currentDirection !== null && C && C(this.currentDirection);
                return
            }
            this.updateAxis("x", x.point, D),
            this.updateAxis("y", x.point, D),
            this.visualElement.render(),
            M && M(v, x)
        }
          , p = (v, x) => this.stop(v, x)
          , m = () => va(v => {
            var x;
            return this.getAnimationState(v) === "paused" && ((x = this.getAxisMotionValue(v).animation) == null ? void 0 : x.play())
        }
        )
          , {dragSnapToOrigin: g} = this.getProps();
        this.panSession = new dy(l,{
            onSessionStart: c,
            onStart: h,
            onMove: d,
            onSessionEnd: p,
            resumeAnimation: m
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: g,
            contextWindow: fy(this.visualElement)
        })
    }
    stop(l, s) {
        const o = this.isDragging;
        if (this.cancel(),
        !o)
            return;
        const {velocity: c} = s;
        this.startAnimation(c);
        const {onDragEnd: h} = this.getProps();
        h && it.postRender( () => h(l, s))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: l, animationState: s} = this.visualElement;
        l && (l.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: o} = this.getProps();
        !o && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        s && s.setActive("whileDrag", !1)
    }
    updateAxis(l, s, o) {
        const {drag: c} = this.getProps();
        if (!o || !qo(l, c, this.currentDirection))
            return;
        const h = this.getAxisMotionValue(l);
        let d = this.originPoint[l] + o[l];
        this.constraints && this.constraints[l] && (d = VS(d, this.constraints[l], this.elastic[l])),
        h.set(d)
    }
    resolveConstraints() {
        var h;
        const {dragConstraints: l, dragElastic: s} = this.getProps()
          , o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (h = this.visualElement.projection) == null ? void 0 : h.layout
          , c = this.constraints;
        l && Ql(l) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : l && o ? this.constraints = zS(o.layoutBox, l) : this.constraints = !1,
        this.elastic = kS(s),
        c !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && va(d => {
            this.constraints !== !1 && this.getAxisMotionValue(d) && (this.constraints[d] = LS(o.layoutBox[d], this.constraints[d]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: l, onMeasureDragConstraints: s} = this.getProps();
        if (!l || !Ql(l))
            return !1;
        const o = l.current
          , {projection: c} = this.visualElement;
        if (!c || !c.layout)
            return !1;
        const h = _S(o, c.root, this.visualElement.getTransformPagePoint());
        let d = US(c.layout.layoutBox, h);
        if (s) {
            const p = s(SS(d));
            this.hasMutatedConstraints = !!p,
            p && (d = sy(p))
        }
        return d
    }
    startAnimation(l) {
        const {drag: s, dragMomentum: o, dragElastic: c, dragTransition: h, dragSnapToOrigin: d, onDragTransitionEnd: p} = this.getProps()
          , m = this.constraints || {}
          , g = va(v => {
            if (!qo(v, s, this.currentDirection))
                return;
            let x = m && m[v] || {};
            d && (x = {
                min: 0,
                max: 0
            });
            const S = c ? 200 : 1e6
              , w = c ? 40 : 1e7
              , C = {
                type: "inertia",
                velocity: o ? l[v] : 0,
                bounceStiffness: S,
                bounceDamping: w,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...h,
                ...x
            };
            return this.startAxisValueAnimation(v, C)
        }
        );
        return Promise.all(g).then(p)
    }
    startAxisValueAnimation(l, s) {
        const o = this.getAxisMotionValue(l);
        return Gc(this.visualElement, l),
        o.start(Vf(l, o, 0, s, this.visualElement, !1))
    }
    stopAnimation() {
        va(l => this.getAxisMotionValue(l).stop())
    }
    pauseAnimation() {
        va(l => {
            var s;
            return (s = this.getAxisMotionValue(l).animation) == null ? void 0 : s.pause()
        }
        )
    }
    getAnimationState(l) {
        var s;
        return (s = this.getAxisMotionValue(l).animation) == null ? void 0 : s.state
    }
    getAxisMotionValue(l) {
        const s = `_drag${l.toUpperCase()}`
          , o = this.visualElement.getProps()
          , c = o[s];
        return c || this.visualElement.getValue(l, (o.initial ? o.initial[l] : void 0) || 0)
    }
    snapToCursor(l) {
        va(s => {
            const {drag: o} = this.getProps();
            if (!qo(s, o, this.currentDirection))
                return;
            const {projection: c} = this.visualElement
              , h = this.getAxisMotionValue(s);
            if (c && c.layout) {
                const {min: d, max: p} = c.layout.layoutBox[s];
                h.set(l[s] - st(d, p, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: l, dragConstraints: s} = this.getProps()
          , {projection: o} = this.visualElement;
        if (!Ql(s) || !o || !this.constraints)
            return;
        this.stopAnimation();
        const c = {
            x: 0,
            y: 0
        };
        va(d => {
            const p = this.getAxisMotionValue(d);
            if (p && this.constraints !== !1) {
                const m = p.get();
                c[d] = BS({
                    min: m,
                    max: m
                }, this.constraints[d])
            }
        }
        );
        const {transformTemplate: h} = this.visualElement.getProps();
        this.visualElement.current.style.transform = h ? h({}, "") : "none",
        o.root && o.root.updateScroll(),
        o.updateLayout(),
        this.resolveConstraints(),
        va(d => {
            if (!qo(d, l, null))
                return;
            const p = this.getAxisMotionValue(d)
              , {min: m, max: g} = this.constraints[d];
            p.set(st(m, g, c[d]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        HS.set(this.visualElement, this);
        const l = this.visualElement.current
          , s = ui(l, "pointerdown", m => {
            const {drag: g, dragListener: v=!0} = this.getProps();
            g && v && this.start(m)
        }
        )
          , o = () => {
            const {dragConstraints: m} = this.getProps();
            Ql(m) && m.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: c} = this.visualElement
          , h = c.addEventListener("measure", o);
        c && !c.layout && (c.root && c.root.updateScroll(),
        c.updateLayout()),
        it.read(o);
        const d = vi(window, "resize", () => this.scalePositionWithinConstraints())
          , p = c.addEventListener("didUpdate", ({delta: m, hasLayoutChanged: g}) => {
            this.isDragging && g && (va(v => {
                const x = this.getAxisMotionValue(v);
                x && (this.originPoint[v] += m[v].translate,
                x.set(x.get() + m[v].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            d(),
            s(),
            h(),
            p && p()
        }
    }
    getProps() {
        const l = this.visualElement.getProps()
          , {drag: s=!1, dragDirectionLock: o=!1, dragPropagation: c=!1, dragConstraints: h=!1, dragElastic: d=Qc, dragMomentum: p=!0} = l;
        return {
            ...l,
            drag: s,
            dragDirectionLock: o,
            dragPropagation: c,
            dragConstraints: h,
            dragElastic: d,
            dragMomentum: p
        }
    }
}
function qo(n, l, s) {
    return (l === !0 || l === n) && (s === null || s === n)
}
function qS(n, l=10) {
    let s = null;
    return Math.abs(n.y) > l ? s = "y" : Math.abs(n.x) > l && (s = "x"),
    s
}
class YS extends Un {
    constructor(l) {
        super(l),
        this.removeGroupControls = xa,
        this.removeListeners = xa,
        this.controls = new PS(l)
    }
    mount() {
        const {dragControls: l} = this.node.getProps();
        l && (this.removeGroupControls = l.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || xa
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const dg = n => (l, s) => {
    n && it.postRender( () => n(l, s))
}
;
class GS extends Un {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = xa
    }
    onPointerDown(l) {
        this.session = new dy(l,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: fy(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: l, onPanStart: s, onPan: o, onPanEnd: c} = this.node.getProps();
        return {
            onSessionStart: dg(l),
            onStart: dg(s),
            onMove: o,
            onEnd: (h, d) => {
                delete this.session,
                c && it.postRender( () => c(h, d))
            }
        }
    }
    mount() {
        this.removePointerDownListener = ui(this.node.current, "pointerdown", l => this.onPointerDown(l))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const Ko = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function hg(n, l) {
    return l.max === l.min ? 0 : n / (l.max - l.min) * 100
}
const li = {
    correct: (n, l) => {
        if (!l.target)
            return n;
        if (typeof n == "string")
            if (je.test(n))
                n = parseFloat(n);
            else
                return n;
        const s = hg(n, l.target.x)
          , o = hg(n, l.target.y);
        return `${s}% ${o}%`
    }
}
  , XS = {
    correct: (n, {treeScale: l, projectionDelta: s}) => {
        const o = n
          , c = zn.parse(n);
        if (c.length > 5)
            return o;
        const h = zn.createTransformer(n)
          , d = typeof c[0] != "number" ? 1 : 0
          , p = s.x.scale * l.x
          , m = s.y.scale * l.y;
        c[0 + d] /= p,
        c[1 + d] /= m;
        const g = st(p, m, .5);
        return typeof c[2 + d] == "number" && (c[2 + d] /= g),
        typeof c[3 + d] == "number" && (c[3 + d] /= g),
        h(c)
    }
};
class KS extends T.Component {
    componentDidMount() {
        const {visualElement: l, layoutGroup: s, switchLayoutGroup: o, layoutId: c} = this.props
          , {projection: h} = l;
        _2(ZS),
        h && (s.group && s.group.add(h),
        o && o.register && c && o.register(h),
        h.root.didUpdate(),
        h.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        h.setOptions({
            ...h.options,
            onExitComplete: () => this.safeToRemove()
        })),
        Ko.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(l) {
        const {layoutDependency: s, visualElement: o, drag: c, isPresent: h} = this.props
          , {projection: d} = o;
        return d && (d.isPresent = h,
        c || l.layoutDependency !== s || s === void 0 || l.isPresent !== h ? d.willUpdate() : this.safeToRemove(),
        l.isPresent !== h && (h ? d.promote() : d.relegate() || it.postRender( () => {
            const p = d.getStack();
            (!p || !p.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: l} = this.props.visualElement;
        l && (l.root.didUpdate(),
        jf.postRender( () => {
            !l.currentAnimation && l.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: l, layoutGroup: s, switchLayoutGroup: o} = this.props
          , {projection: c} = l;
        c && (c.scheduleCheckAfterUnmount(),
        s && s.group && s.group.remove(c),
        o && o.deregister && o.deregister(c))
    }
    safeToRemove() {
        const {safeToRemove: l} = this.props;
        l && l()
    }
    render() {
        return null
    }
}
function my(n) {
    const [l,s] = H0()
      , o = T.useContext(Wc);
    return f.jsx(KS, {
        ...n,
        layoutGroup: o,
        switchLayoutGroup: T.useContext(K0),
        isPresent: l,
        safeToRemove: s
    })
}
const ZS = {
    borderRadius: {
        ...li,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: li,
    borderTopRightRadius: li,
    borderBottomLeftRadius: li,
    borderBottomRightRadius: li,
    boxShadow: XS
};
function QS(n, l, s) {
    const o = Lt(n) ? n : $l(n);
    return o.start(Vf("", o, l, s)),
    o.animation
}
const FS = (n, l) => n.depth - l.depth;
class JS {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(l) {
        af(this.children, l),
        this.isDirty = !0
    }
    remove(l) {
        nf(this.children, l),
        this.isDirty = !0
    }
    forEach(l) {
        this.isDirty && this.children.sort(FS),
        this.isDirty = !1,
        this.children.forEach(l)
    }
}
function IS(n, l) {
    const s = Ft.now()
      , o = ({timestamp: c}) => {
        const h = c - s;
        h >= l && (Vn(o),
        n(h - l))
    }
    ;
    return it.setup(o, !0),
    () => Vn(o)
}
const py = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , $S = py.length
  , mg = n => typeof n == "string" ? parseFloat(n) : n
  , pg = n => typeof n == "number" || je.test(n);
function WS(n, l, s, o, c, h) {
    c ? (n.opacity = st(0, s.opacity ?? 1, eT(o)),
    n.opacityExit = st(l.opacity ?? 1, 0, tT(o))) : h && (n.opacity = st(l.opacity ?? 1, s.opacity ?? 1, o));
    for (let d = 0; d < $S; d++) {
        const p = `border${py[d]}Radius`;
        let m = gg(l, p)
          , g = gg(s, p);
        if (m === void 0 && g === void 0)
            continue;
        m || (m = 0),
        g || (g = 0),
        m === 0 || g === 0 || pg(m) === pg(g) ? (n[p] = Math.max(st(mg(m), mg(g), o), 0),
        (Ba.test(g) || Ba.test(m)) && (n[p] += "%")) : n[p] = g
    }
    (l.rotate || s.rotate) && (n.rotate = st(l.rotate || 0, s.rotate || 0, o))
}
function gg(n, l) {
    return n[l] !== void 0 ? n[l] : n.borderRadius
}
const eT = gy(0, .5, o0)
  , tT = gy(.5, .95, xa);
function gy(n, l, s) {
    return o => o < n ? 0 : o > l ? 1 : s(di(n, l, o))
}
function yg(n, l) {
    n.min = l.min,
    n.max = l.max
}
function ga(n, l) {
    yg(n.x, l.x),
    yg(n.y, l.y)
}
function vg(n, l) {
    n.translate = l.translate,
    n.scale = l.scale,
    n.originPoint = l.originPoint,
    n.origin = l.origin
}
function xg(n, l, s, o, c) {
    return n -= l,
    n = Io(n, 1 / s, o),
    c !== void 0 && (n = Io(n, 1 / c, o)),
    n
}
function aT(n, l=0, s=1, o=.5, c, h=n, d=n) {
    if (Ba.test(l) && (l = parseFloat(l),
    l = st(d.min, d.max, l / 100) - d.min),
    typeof l != "number")
        return;
    let p = st(h.min, h.max, o);
    n === h && (p -= l),
    n.min = xg(n.min, l, s, p, c),
    n.max = xg(n.max, l, s, p, c)
}
function bg(n, l, [s,o,c], h, d) {
    aT(n, l[s], l[o], l[c], l.scale, h, d)
}
const nT = ["x", "scaleX", "originX"]
  , lT = ["y", "scaleY", "originY"];
function Sg(n, l, s, o) {
    bg(n.x, l, nT, s ? s.x : void 0, o ? o.x : void 0),
    bg(n.y, l, lT, s ? s.y : void 0, o ? o.y : void 0)
}
function Tg(n) {
    return n.translate === 0 && n.scale === 1
}
function yy(n) {
    return Tg(n.x) && Tg(n.y)
}
function jg(n, l) {
    return n.min === l.min && n.max === l.max
}
function sT(n, l) {
    return jg(n.x, l.x) && jg(n.y, l.y)
}
function wg(n, l) {
    return Math.round(n.min) === Math.round(l.min) && Math.round(n.max) === Math.round(l.max)
}
function vy(n, l) {
    return wg(n.x, l.x) && wg(n.y, l.y)
}
function Ag(n) {
    return Pt(n.x) / Pt(n.y)
}
function Ng(n, l) {
    return n.translate === l.translate && n.scale === l.scale && n.originPoint === l.originPoint
}
class iT {
    constructor() {
        this.members = []
    }
    add(l) {
        af(this.members, l),
        l.scheduleRender()
    }
    remove(l) {
        if (nf(this.members, l),
        l === this.prevLead && (this.prevLead = void 0),
        l === this.lead) {
            const s = this.members[this.members.length - 1];
            s && this.promote(s)
        }
    }
    relegate(l) {
        const s = this.members.findIndex(c => l === c);
        if (s === 0)
            return !1;
        let o;
        for (let c = s; c >= 0; c--) {
            const h = this.members[c];
            if (h.isPresent !== !1) {
                o = h;
                break
            }
        }
        return o ? (this.promote(o),
        !0) : !1
    }
    promote(l, s) {
        const o = this.lead;
        if (l !== o && (this.prevLead = o,
        this.lead = l,
        l.show(),
        o)) {
            o.instance && o.scheduleRender(),
            l.scheduleRender(),
            l.resumeFrom = o,
            s && (l.resumeFrom.preserveOpacity = !0),
            o.snapshot && (l.snapshot = o.snapshot,
            l.snapshot.latestValues = o.animationValues || o.latestValues),
            l.root && l.root.isUpdating && (l.isLayoutDirty = !0);
            const {crossfade: c} = l.options;
            c === !1 && o.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(l => {
            const {options: s, resumingFrom: o} = l;
            s.onExitComplete && s.onExitComplete(),
            o && o.options.onExitComplete && o.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(l => {
            l.instance && l.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function oT(n, l, s) {
    let o = "";
    const c = n.x.translate / l.x
      , h = n.y.translate / l.y
      , d = (s == null ? void 0 : s.z) || 0;
    if ((c || h || d) && (o = `translate3d(${c}px, ${h}px, ${d}px) `),
    (l.x !== 1 || l.y !== 1) && (o += `scale(${1 / l.x}, ${1 / l.y}) `),
    s) {
        const {transformPerspective: g, rotate: v, rotateX: x, rotateY: S, skewX: w, skewY: C} = s;
        g && (o = `perspective(${g}px) ${o}`),
        v && (o += `rotate(${v}deg) `),
        x && (o += `rotateX(${x}deg) `),
        S && (o += `rotateY(${S}deg) `),
        w && (o += `skewX(${w}deg) `),
        C && (o += `skewY(${C}deg) `)
    }
    const p = n.x.scale * l.x
      , m = n.y.scale * l.y;
    return (p !== 1 || m !== 1) && (o += `scale(${p}, ${m})`),
    o || "none"
}
const Nc = ["", "X", "Y", "Z"]
  , rT = {
    visibility: "hidden"
}
  , uT = 1e3;
let cT = 0;
function Ec(n, l, s, o) {
    const {latestValues: c} = l;
    c[n] && (s[n] = c[n],
    l.setStaticValue(n, 0),
    o && (o[n] = 0))
}
function xy(n) {
    if (n.hasCheckedOptimisedAppear = !0,
    n.root === n)
        return;
    const {visualElement: l} = n.options;
    if (!l)
        return;
    const s = ty(l);
    if (window.MotionHasOptimisedAnimation(s, "transform")) {
        const {layout: c, layoutId: h} = n.options;
        window.MotionCancelOptimisedAnimation(s, "transform", it, !(c || h))
    }
    const {parent: o} = n;
    o && !o.hasCheckedOptimisedAppear && xy(o)
}
function by({attachResizeListener: n, defaultParent: l, measureScroll: s, checkIsScrollRoot: o, resetTransform: c}) {
    return class {
        constructor(d={}, p=l == null ? void 0 : l()) {
            this.id = cT++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                this.nodes.forEach(hT),
                this.nodes.forEach(vT),
                this.nodes.forEach(xT),
                this.nodes.forEach(mT)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = d,
            this.root = p ? p.root || p : this,
            this.path = p ? [...p.path, p] : [],
            this.parent = p,
            this.depth = p ? p.depth + 1 : 0;
            for (let m = 0; m < this.path.length; m++)
                this.path[m].shouldResetTransform = !0;
            this.root === this && (this.nodes = new JS)
        }
        addEventListener(d, p) {
            return this.eventHandlers.has(d) || this.eventHandlers.set(d, new of),
            this.eventHandlers.get(d).add(p)
        }
        notifyListeners(d, ...p) {
            const m = this.eventHandlers.get(d);
            m && m.notify(...p)
        }
        hasListeners(d) {
            return this.eventHandlers.has(d)
        }
        mount(d) {
            if (this.instance)
                return;
            this.isSVG = k0(d) && !o2(d),
            this.instance = d;
            const {layoutId: p, layout: m, visualElement: g} = this.options;
            if (g && !g.current && g.mount(d),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (m || p) && (this.isLayoutDirty = !0),
            n) {
                let v;
                const x = () => this.root.updateBlockedByResize = !1;
                n(d, () => {
                    this.root.updateBlockedByResize = !0,
                    v && v(),
                    v = IS(x, 250),
                    Ko.hasAnimatedSinceResize && (Ko.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Cg))
                }
                )
            }
            p && this.root.registerSharedNode(p, this),
            this.options.animate !== !1 && g && (p || m) && this.addEventListener("didUpdate", ({delta: v, hasLayoutChanged: x, hasRelativeLayoutChanged: S, layout: w}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const C = this.options.transition || g.getDefaultTransition() || wT
                  , {onLayoutAnimationStart: M, onLayoutAnimationComplete: D} = g.getProps()
                  , U = !this.targetLayout || !vy(this.targetLayout, w)
                  , L = !x && S;
                if (this.options.layoutRoot || this.resumeFrom || L || x && (U || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0);
                    const B = {
                        ...Sf(C, "layout"),
                        onPlay: M,
                        onComplete: D
                    };
                    (g.shouldReduceMotion || this.options.layoutRoot) && (B.delay = 0,
                    B.type = !1),
                    this.startAnimation(B),
                    this.setAnimationOrigin(v, L)
                } else
                    x || Cg(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = w
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const d = this.getStack();
            d && d.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            this.eventHandlers.clear(),
            Vn(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(bT),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: d} = this.options;
            return d && d.getProps().transformTemplate
        }
        willUpdate(d=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && xy(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let v = 0; v < this.path.length; v++) {
                const x = this.path[v];
                x.shouldResetTransform = !0,
                x.updateScroll("snapshot"),
                x.options.layoutRoot && x.willUpdate(!1)
            }
            const {layoutId: p, layout: m} = this.options;
            if (p === void 0 && !m)
                return;
            const g = this.getTransformTemplate();
            this.prevTransformTemplateValue = g ? g(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            d && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Eg);
                return
            }
            this.isUpdating || this.nodes.forEach(gT),
            this.isUpdating = !1,
            this.nodes.forEach(yT),
            this.nodes.forEach(fT),
            this.nodes.forEach(dT),
            this.clearAllSnapshots();
            const p = Ft.now();
            Ot.delta = ln(0, 1e3 / 60, p - Ot.timestamp),
            Ot.timestamp = p,
            Ot.isProcessing = !0,
            yc.update.process(Ot),
            yc.preRender.process(Ot),
            yc.render.process(Ot),
            Ot.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            jf.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(pT),
            this.sharedNodes.forEach(ST)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            it.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            it.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
            this.snapshot && !Pt(this.snapshot.measuredBox.x) && !Pt(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let m = 0; m < this.path.length; m++)
                    this.path[m].updateScroll();
            const d = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = mt(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: p} = this.options;
            p && p.notify("LayoutMeasure", this.layout.layoutBox, d ? d.layoutBox : void 0)
        }
        updateScroll(d="measure") {
            let p = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === d && (p = !1),
            p && this.instance) {
                const m = o(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: d,
                    isRoot: m,
                    offset: s(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : m
                }
            }
        }
        resetTransform() {
            if (!c)
                return;
            const d = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , p = this.projectionDelta && !yy(this.projectionDelta)
              , m = this.getTransformTemplate()
              , g = m ? m(this.latestValues, "") : void 0
              , v = g !== this.prevTransformTemplateValue;
            d && this.instance && (p || nl(this.latestValues) || v) && (c(this.instance, g),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(d=!0) {
            const p = this.measurePageBox();
            let m = this.removeElementScroll(p);
            return d && (m = this.removeTransform(m)),
            AT(m),
            {
                animationId: this.root.animationId,
                measuredBox: p,
                layoutBox: m,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var g;
            const {visualElement: d} = this.options;
            if (!d)
                return mt();
            const p = d.measureViewportBox();
            if (!(((g = this.scroll) == null ? void 0 : g.wasRoot) || this.path.some(NT))) {
                const {scroll: v} = this.root;
                v && (Jl(p.x, v.offset.x),
                Jl(p.y, v.offset.y))
            }
            return p
        }
        removeElementScroll(d) {
            var m;
            const p = mt();
            if (ga(p, d),
            (m = this.scroll) != null && m.wasRoot)
                return p;
            for (let g = 0; g < this.path.length; g++) {
                const v = this.path[g]
                  , {scroll: x, options: S} = v;
                v !== this.root && x && S.layoutScroll && (x.wasRoot && ga(p, d),
                Jl(p.x, x.offset.x),
                Jl(p.y, x.offset.y))
            }
            return p
        }
        applyTransform(d, p=!1) {
            const m = mt();
            ga(m, d);
            for (let g = 0; g < this.path.length; g++) {
                const v = this.path[g];
                !p && v.options.layoutScroll && v.scroll && v !== v.root && Il(m, {
                    x: -v.scroll.offset.x,
                    y: -v.scroll.offset.y
                }),
                nl(v.latestValues) && Il(m, v.latestValues)
            }
            return nl(this.latestValues) && Il(m, this.latestValues),
            m
        }
        removeTransform(d) {
            const p = mt();
            ga(p, d);
            for (let m = 0; m < this.path.length; m++) {
                const g = this.path[m];
                if (!g.instance || !nl(g.latestValues))
                    continue;
                Kc(g.latestValues) && g.updateSnapshot();
                const v = mt()
                  , x = g.measurePageBox();
                ga(v, x),
                Sg(p, g.latestValues, g.snapshot ? g.snapshot.layoutBox : void 0, v)
            }
            return nl(this.latestValues) && Sg(p, this.latestValues),
            p
        }
        setTargetDelta(d) {
            this.targetDelta = d,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(d) {
            this.options = {
                ...this.options,
                ...d,
                crossfade: d.crossfade !== void 0 ? d.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ot.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(d=!1) {
            var S;
            const p = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = p.isSharedProjectionDirty);
            const m = !!this.resumingFrom || this !== p;
            if (!(d || m && this.isSharedProjectionDirty || this.isProjectionDirty || (S = this.parent) != null && S.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: v, layoutId: x} = this.options;
            if (!(!this.layout || !(v || x))) {
                if (this.resolvedRelativeTargetAt = Ot.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const w = this.getClosestProjectingParent();
                    w && w.layout && this.animationProgress !== 1 ? (this.relativeParent = w,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = mt(),
                    this.relativeTargetOrigin = mt(),
                    fi(this.relativeTargetOrigin, this.layout.layoutBox, w.layout.layoutBox),
                    ga(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = mt(),
                this.targetWithTransforms = mt()),
                this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                CS(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : ga(this.target, this.layout.layoutBox),
                uy(this.target, this.targetDelta)) : ga(this.target, this.layout.layoutBox),
                this.attemptToResolveRelativeTarget)) {
                    this.attemptToResolveRelativeTarget = !1;
                    const w = this.getClosestProjectingParent();
                    w && !!w.resumingFrom == !!this.resumingFrom && !w.options.layoutScroll && w.target && this.animationProgress !== 1 ? (this.relativeParent = w,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = mt(),
                    this.relativeTargetOrigin = mt(),
                    fi(this.relativeTargetOrigin, this.target, w.target),
                    ga(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Kc(this.parent.latestValues) || ry(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var C;
            const d = this.getLead()
              , p = !!this.resumingFrom || this !== d;
            let m = !0;
            if ((this.isProjectionDirty || (C = this.parent) != null && C.isProjectionDirty) && (m = !1),
            p && (this.isSharedProjectionDirty || this.isTransformDirty) && (m = !1),
            this.resolvedRelativeTargetAt === Ot.timestamp && (m = !1),
            m)
                return;
            const {layout: g, layoutId: v} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(g || v))
                return;
            ga(this.layoutCorrected, this.layout.layoutBox);
            const x = this.treeScale.x
              , S = this.treeScale.y;
            DS(this.layoutCorrected, this.treeScale, this.path, p),
            d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox,
            d.targetWithTransforms = mt());
            const {target: w} = d;
            if (!w) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (vg(this.prevProjectionDelta.x, this.projectionDelta.x),
            vg(this.prevProjectionDelta.y, this.projectionDelta.y)),
            ci(this.projectionDelta, this.layoutCorrected, w, this.latestValues),
            (this.treeScale.x !== x || this.treeScale.y !== S || !Ng(this.projectionDelta.x, this.prevProjectionDelta.x) || !Ng(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", w))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(d=!0) {
            var p;
            if ((p = this.options.visualElement) == null || p.scheduleRender(),
            d) {
                const m = this.getStack();
                m && m.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Fl(),
            this.projectionDelta = Fl(),
            this.projectionDeltaWithTransform = Fl()
        }
        setAnimationOrigin(d, p=!1) {
            const m = this.snapshot
              , g = m ? m.latestValues : {}
              , v = {
                ...this.latestValues
            }
              , x = Fl();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !p;
            const S = mt()
              , w = m ? m.source : void 0
              , C = this.layout ? this.layout.source : void 0
              , M = w !== C
              , D = this.getStack()
              , U = !D || D.members.length <= 1
              , L = !!(M && !U && this.options.crossfade === !0 && !this.path.some(jT));
            this.animationProgress = 0;
            let B;
            this.mixTargetDelta = F => {
                const R = F / 1e3;
                Dg(x.x, d.x, R),
                Dg(x.y, d.y, R),
                this.setTargetDelta(x),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (fi(S, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                TT(this.relativeTarget, this.relativeTargetOrigin, S, R),
                B && sT(this.relativeTarget, B) && (this.isProjectionDirty = !1),
                B || (B = mt()),
                ga(B, this.relativeTarget)),
                M && (this.animationValues = v,
                WS(v, g, this.latestValues, R, L, U)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = R
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(d) {
            var p, m, g;
            this.notifyListeners("animationStart"),
            (p = this.currentAnimation) == null || p.stop(),
            (g = (m = this.resumingFrom) == null ? void 0 : m.currentAnimation) == null || g.stop(),
            this.pendingAnimation && (Vn(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = it.update( () => {
                Ko.hasAnimatedSinceResize = !0,
                this.motionValue || (this.motionValue = $l(0)),
                this.currentAnimation = QS(this.motionValue, [0, 1e3], {
                    ...d,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: v => {
                        this.mixTargetDelta(v),
                        d.onUpdate && d.onUpdate(v)
                    }
                    ,
                    onStop: () => {}
                    ,
                    onComplete: () => {
                        d.onComplete && d.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const d = this.getStack();
            d && d.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(uT),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const d = this.getLead();
            let {targetWithTransforms: p, target: m, layout: g, latestValues: v} = d;
            if (!(!p || !m || !g)) {
                if (this !== d && this.layout && g && Sy(this.options.animationType, this.layout.layoutBox, g.layoutBox)) {
                    m = this.target || mt();
                    const x = Pt(this.layout.layoutBox.x);
                    m.x.min = d.target.x.min,
                    m.x.max = m.x.min + x;
                    const S = Pt(this.layout.layoutBox.y);
                    m.y.min = d.target.y.min,
                    m.y.max = m.y.min + S
                }
                ga(p, m),
                Il(p, v),
                ci(this.projectionDeltaWithTransform, this.layoutCorrected, p, v)
            }
        }
        registerSharedNode(d, p) {
            this.sharedNodes.has(d) || this.sharedNodes.set(d, new iT),
            this.sharedNodes.get(d).add(p);
            const g = p.options.initialPromotionConfig;
            p.promote({
                transition: g ? g.transition : void 0,
                preserveFollowOpacity: g && g.shouldPreserveFollowOpacity ? g.shouldPreserveFollowOpacity(p) : void 0
            })
        }
        isLead() {
            const d = this.getStack();
            return d ? d.lead === this : !0
        }
        getLead() {
            var p;
            const {layoutId: d} = this.options;
            return d ? ((p = this.getStack()) == null ? void 0 : p.lead) || this : this
        }
        getPrevLead() {
            var p;
            const {layoutId: d} = this.options;
            return d ? (p = this.getStack()) == null ? void 0 : p.prevLead : void 0
        }
        getStack() {
            const {layoutId: d} = this.options;
            if (d)
                return this.root.sharedNodes.get(d)
        }
        promote({needsReset: d, transition: p, preserveFollowOpacity: m}={}) {
            const g = this.getStack();
            g && g.promote(this, m),
            d && (this.projectionDelta = void 0,
            this.needsReset = !0),
            p && this.setOptions({
                transition: p
            })
        }
        relegate() {
            const d = this.getStack();
            return d ? d.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: d} = this.options;
            if (!d)
                return;
            let p = !1;
            const {latestValues: m} = d;
            if ((m.z || m.rotate || m.rotateX || m.rotateY || m.rotateZ || m.skewX || m.skewY) && (p = !0),
            !p)
                return;
            const g = {};
            m.z && Ec("z", d, g, this.animationValues);
            for (let v = 0; v < Nc.length; v++)
                Ec(`rotate${Nc[v]}`, d, g, this.animationValues),
                Ec(`skew${Nc[v]}`, d, g, this.animationValues);
            d.render();
            for (const v in g)
                d.setStaticValue(v, g[v]),
                this.animationValues && (this.animationValues[v] = g[v]);
            d.scheduleRender()
        }
        getProjectionStyles(d) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return rT;
            const p = {
                visibility: ""
            }
              , m = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                p.opacity = "",
                p.pointerEvents = Xo(d == null ? void 0 : d.pointerEvents) || "",
                p.transform = m ? m(this.latestValues, "") : "none",
                p;
            const g = this.getLead();
            if (!this.projectionDelta || !this.layout || !g.target) {
                const w = {};
                return this.options.layoutId && (w.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                w.pointerEvents = Xo(d == null ? void 0 : d.pointerEvents) || ""),
                this.hasProjected && !nl(this.latestValues) && (w.transform = m ? m({}, "") : "none",
                this.hasProjected = !1),
                w
            }
            const v = g.animationValues || g.latestValues;
            this.applyTransformsToTarget(),
            p.transform = oT(this.projectionDeltaWithTransform, this.treeScale, v),
            m && (p.transform = m(v, p.transform));
            const {x, y: S} = this.projectionDelta;
            p.transformOrigin = `${x.origin * 100}% ${S.origin * 100}% 0`,
            g.animationValues ? p.opacity = g === this ? v.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : v.opacityExit : p.opacity = g === this ? v.opacity !== void 0 ? v.opacity : "" : v.opacityExit !== void 0 ? v.opacityExit : 0;
            for (const w in gi) {
                if (v[w] === void 0)
                    continue;
                const {correct: C, applyTo: M, isCSSVariable: D} = gi[w]
                  , U = p.transform === "none" ? v[w] : C(v[w], g);
                if (M) {
                    const L = M.length;
                    for (let B = 0; B < L; B++)
                        p[M[B]] = U
                } else
                    D ? this.options.visualElement.renderState.vars[w] = U : p[w] = U
            }
            return this.options.layoutId && (p.pointerEvents = g === this ? Xo(d == null ? void 0 : d.pointerEvents) || "" : "none"),
            p
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(d => {
                var p;
                return (p = d.currentAnimation) == null ? void 0 : p.stop()
            }
            ),
            this.root.nodes.forEach(Eg),
            this.root.sharedNodes.clear()
        }
    }
}
function fT(n) {
    n.updateLayout()
}
function dT(n) {
    var s;
    const l = ((s = n.resumeFrom) == null ? void 0 : s.snapshot) || n.snapshot;
    if (n.isLead() && n.layout && l && n.hasListeners("didUpdate")) {
        const {layoutBox: o, measuredBox: c} = n.layout
          , {animationType: h} = n.options
          , d = l.source !== n.layout.source;
        h === "size" ? va(x => {
            const S = d ? l.measuredBox[x] : l.layoutBox[x]
              , w = Pt(S);
            S.min = o[x].min,
            S.max = S.min + w
        }
        ) : Sy(h, l.layoutBox, o) && va(x => {
            const S = d ? l.measuredBox[x] : l.layoutBox[x]
              , w = Pt(o[x]);
            S.max = S.min + w,
            n.relativeTarget && !n.currentAnimation && (n.isProjectionDirty = !0,
            n.relativeTarget[x].max = n.relativeTarget[x].min + w)
        }
        );
        const p = Fl();
        ci(p, o, l.layoutBox);
        const m = Fl();
        d ? ci(m, n.applyTransform(c, !0), l.measuredBox) : ci(m, o, l.layoutBox);
        const g = !yy(p);
        let v = !1;
        if (!n.resumeFrom) {
            const x = n.getClosestProjectingParent();
            if (x && !x.resumeFrom) {
                const {snapshot: S, layout: w} = x;
                if (S && w) {
                    const C = mt();
                    fi(C, l.layoutBox, S.layoutBox);
                    const M = mt();
                    fi(M, o, w.layoutBox),
                    vy(C, M) || (v = !0),
                    x.options.layoutRoot && (n.relativeTarget = M,
                    n.relativeTargetOrigin = C,
                    n.relativeParent = x)
                }
            }
        }
        n.notifyListeners("didUpdate", {
            layout: o,
            snapshot: l,
            delta: m,
            layoutDelta: p,
            hasLayoutChanged: g,
            hasRelativeLayoutChanged: v
        })
    } else if (n.isLead()) {
        const {onExitComplete: o} = n.options;
        o && o()
    }
    n.options.transition = void 0
}
function hT(n) {
    n.parent && (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty),
    n.isSharedProjectionDirty || (n.isSharedProjectionDirty = !!(n.isProjectionDirty || n.parent.isProjectionDirty || n.parent.isSharedProjectionDirty)),
    n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty))
}
function mT(n) {
    n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1
}
function pT(n) {
    n.clearSnapshot()
}
function Eg(n) {
    n.clearMeasurements()
}
function gT(n) {
    n.isLayoutDirty = !1
}
function yT(n) {
    const {visualElement: l} = n.options;
    l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"),
    n.resetTransform()
}
function Cg(n) {
    n.finishAnimation(),
    n.targetDelta = n.relativeTarget = n.target = void 0,
    n.isProjectionDirty = !0
}
function vT(n) {
    n.resolveTargetDelta()
}
function xT(n) {
    n.calcProjection()
}
function bT(n) {
    n.resetSkewAndRotation()
}
function ST(n) {
    n.removeLeadSnapshot()
}
function Dg(n, l, s) {
    n.translate = st(l.translate, 0, s),
    n.scale = st(l.scale, 1, s),
    n.origin = l.origin,
    n.originPoint = l.originPoint
}
function _g(n, l, s, o) {
    n.min = st(l.min, s.min, o),
    n.max = st(l.max, s.max, o)
}
function TT(n, l, s, o) {
    _g(n.x, l.x, s.x, o),
    _g(n.y, l.y, s.y, o)
}
function jT(n) {
    return n.animationValues && n.animationValues.opacityExit !== void 0
}
const wT = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Mg = n => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n)
  , Og = Mg("applewebkit/") && !Mg("chrome/") ? Math.round : xa;
function Rg(n) {
    n.min = Og(n.min),
    n.max = Og(n.max)
}
function AT(n) {
    Rg(n.x),
    Rg(n.y)
}
function Sy(n, l, s) {
    return n === "position" || n === "preserve-aspect" && !ES(Ag(l), Ag(s), .2)
}
function NT(n) {
    var l;
    return n !== n.root && ((l = n.scroll) == null ? void 0 : l.wasRoot)
}
const ET = by({
    attachResizeListener: (n, l) => vi(n, "resize", l),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , Cc = {
    current: void 0
}
  , Ty = by({
    measureScroll: n => ({
        x: n.scrollLeft,
        y: n.scrollTop
    }),
    defaultParent: () => {
        if (!Cc.current) {
            const n = new ET({});
            n.mount(window),
            n.setOptions({
                layoutScroll: !0
            }),
            Cc.current = n
        }
        return Cc.current
    }
    ,
    resetTransform: (n, l) => {
        n.style.transform = l !== void 0 ? l : "none"
    }
    ,
    checkIsScrollRoot: n => window.getComputedStyle(n).position === "fixed"
})
  , CT = {
    pan: {
        Feature: GS
    },
    drag: {
        Feature: YS,
        ProjectionNode: Ty,
        MeasureLayout: my
    }
};
function Vg(n, l, s) {
    const {props: o} = n;
    n.animationState && o.whileHover && n.animationState.setActive("whileHover", s === "Start");
    const c = "onHover" + s
      , h = o[c];
    h && it.postRender( () => h(l, wi(l)))
}
class DT extends Un {
    mount() {
        const {current: l} = this.node;
        l && (this.unmount = a2(l, (s, o) => (Vg(this.node, o, "Start"),
        c => Vg(this.node, c, "End"))))
    }
    unmount() {}
}
class _T extends Un {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let l = !1;
        try {
            l = this.node.current.matches(":focus-visible")
        } catch {
            l = !0
        }
        !l || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = Si(vi(this.node.current, "focus", () => this.onFocus()), vi(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function zg(n, l, s) {
    const {props: o} = n;
    if (n.current instanceof HTMLButtonElement && n.current.disabled)
        return;
    n.animationState && o.whileTap && n.animationState.setActive("whileTap", s === "Start");
    const c = "onTap" + (s === "End" ? "" : s)
      , h = o[c];
    h && it.postRender( () => h(l, wi(l)))
}
class MT extends Un {
    mount() {
        const {current: l} = this.node;
        l && (this.unmount = i2(l, (s, o) => (zg(this.node, o, "Start"),
        (c, {success: h}) => zg(this.node, c, h ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const Fc = new WeakMap
  , Dc = new WeakMap
  , OT = n => {
    const l = Fc.get(n.target);
    l && l(n)
}
  , RT = n => {
    n.forEach(OT)
}
;
function VT({root: n, ...l}) {
    const s = n || document;
    Dc.has(s) || Dc.set(s, {});
    const o = Dc.get(s)
      , c = JSON.stringify(l);
    return o[c] || (o[c] = new IntersectionObserver(RT,{
        root: n,
        ...l
    })),
    o[c]
}
function zT(n, l, s) {
    const o = VT(l);
    return Fc.set(n, s),
    o.observe(n),
    () => {
        Fc.delete(n),
        o.unobserve(n)
    }
}
const UT = {
    some: 0,
    all: 1
};
class BT extends Un {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: l={}} = this.node.getProps()
          , {root: s, margin: o, amount: c="some", once: h} = l
          , d = {
            root: s ? s.current : void 0,
            rootMargin: o,
            threshold: typeof c == "number" ? c : UT[c]
        }
          , p = m => {
            const {isIntersecting: g} = m;
            if (this.isInView === g || (this.isInView = g,
            h && !g && this.hasEnteredView))
                return;
            g && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", g);
            const {onViewportEnter: v, onViewportLeave: x} = this.node.getProps()
              , S = g ? v : x;
            S && S(m)
        }
        ;
        return zT(this.node.current, d, p)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: l, prevProps: s} = this.node;
        ["amount", "margin", "root"].some(LT(l, s)) && this.startObserver()
    }
    unmount() {}
}
function LT({viewport: n={}}, {viewport: l={}}={}) {
    return s => n[s] !== l[s]
}
const kT = {
    inView: {
        Feature: BT
    },
    tap: {
        Feature: MT
    },
    focus: {
        Feature: _T
    },
    hover: {
        Feature: DT
    }
}
  , HT = {
    layout: {
        ProjectionNode: Ty,
        MeasureLayout: my
    }
}
  , Jc = {
    current: null
}
  , jy = {
    current: !1
};
function PT() {
    if (jy.current = !0,
    !!tf)
        if (window.matchMedia) {
            const n = window.matchMedia("(prefers-reduced-motion)")
              , l = () => Jc.current = n.matches;
            n.addListener(l),
            l()
        } else
            Jc.current = !1
}
const qT = new WeakMap;
function YT(n, l, s) {
    for (const o in l) {
        const c = l[o]
          , h = s[o];
        if (Lt(c))
            n.addValue(o, c);
        else if (Lt(h))
            n.addValue(o, $l(c, {
                owner: n
            }));
        else if (h !== c)
            if (n.hasValue(o)) {
                const d = n.getValue(o);
                d.liveStyle === !0 ? d.jump(c) : d.hasAnimated || d.set(c)
            } else {
                const d = n.getStaticValue(o);
                n.addValue(o, $l(d !== void 0 ? d : c, {
                    owner: n
                }))
            }
    }
    for (const o in s)
        l[o] === void 0 && n.removeValue(o);
    return l
}
const Ug = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class GT {
    scrapeMotionValuesFromProps(l, s, o) {
        return {}
    }
    constructor({parent: l, props: s, presenceContext: o, reducedMotionConfig: c, blockInitialAnimation: h, visualState: d}, p={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = xf,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const S = Ft.now();
            this.renderScheduledAt < S && (this.renderScheduledAt = S,
            it.render(this.render, !1, !0))
        }
        ;
        const {latestValues: m, renderState: g} = d;
        this.latestValues = m,
        this.baseTarget = {
            ...m
        },
        this.initialValues = s.initial ? {
            ...m
        } : {},
        this.renderState = g,
        this.parent = l,
        this.props = s,
        this.presenceContext = o,
        this.depth = l ? l.depth + 1 : 0,
        this.reducedMotionConfig = c,
        this.options = p,
        this.blockInitialAnimation = !!h,
        this.isControllingVariants = ar(s),
        this.isVariantNode = G0(s),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(l && l.current);
        const {willChange: v, ...x} = this.scrapeMotionValuesFromProps(s, {}, this);
        for (const S in x) {
            const w = x[S];
            m[S] !== void 0 && Lt(w) && w.set(m[S], !1)
        }
    }
    mount(l) {
        this.current = l,
        qT.set(l, this),
        this.projection && !this.projection.instance && this.projection.mount(l),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (s, o) => this.bindToMotionValue(o, s)),
        jy.current || PT(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Jc.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        this.projection && this.projection.unmount(),
        Vn(this.notifyUpdate),
        Vn(this.render),
        this.valueSubscriptions.forEach(l => l()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const l in this.events)
            this.events[l].clear();
        for (const l in this.features) {
            const s = this.features[l];
            s && (s.unmount(),
            s.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(l, s) {
        this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)();
        const o = as.has(l);
        o && this.onBindTransform && this.onBindTransform();
        const c = s.on("change", p => {
            this.latestValues[l] = p,
            this.props.onUpdate && it.preRender(this.notifyUpdate),
            o && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , h = s.on("renderRequest", this.scheduleRender);
        let d;
        window.MotionCheckAppearSync && (d = window.MotionCheckAppearSync(this, l, s)),
        this.valueSubscriptions.set(l, () => {
            c(),
            h(),
            d && d(),
            s.owner && s.stop()
        }
        )
    }
    sortNodePosition(l) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== l.type ? 0 : this.sortInstanceNodePosition(this.current, l.current)
    }
    updateFeatures() {
        let l = "animation";
        for (l in Wl) {
            const s = Wl[l];
            if (!s)
                continue;
            const {isEnabled: o, Feature: c} = s;
            if (!this.features[l] && c && o(this.props) && (this.features[l] = new c(this)),
            this.features[l]) {
                const h = this.features[l];
                h.isMounted ? h.update() : (h.mount(),
                h.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : mt()
    }
    getStaticValue(l) {
        return this.latestValues[l]
    }
    setStaticValue(l, s) {
        this.latestValues[l] = s
    }
    update(l, s) {
        (l.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = l,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = s;
        for (let o = 0; o < Ug.length; o++) {
            const c = Ug[o];
            this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](),
            delete this.propEventSubscriptions[c]);
            const h = "on" + c
              , d = l[h];
            d && (this.propEventSubscriptions[c] = this.on(c, d))
        }
        this.prevMotionValues = YT(this, this.scrapeMotionValuesFromProps(l, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(l) {
        return this.props.variants ? this.props.variants[l] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(l) {
        const s = this.getClosestVariantNode();
        if (s)
            return s.variantChildren && s.variantChildren.add(l),
            () => s.variantChildren.delete(l)
    }
    addValue(l, s) {
        const o = this.values.get(l);
        s !== o && (o && this.removeValue(l),
        this.bindToMotionValue(l, s),
        this.values.set(l, s),
        this.latestValues[l] = s.get())
    }
    removeValue(l) {
        this.values.delete(l);
        const s = this.valueSubscriptions.get(l);
        s && (s(),
        this.valueSubscriptions.delete(l)),
        delete this.latestValues[l],
        this.removeValueFromRenderState(l, this.renderState)
    }
    hasValue(l) {
        return this.values.has(l)
    }
    getValue(l, s) {
        if (this.props.values && this.props.values[l])
            return this.props.values[l];
        let o = this.values.get(l);
        return o === void 0 && s !== void 0 && (o = $l(s === null ? void 0 : s, {
            owner: this
        }),
        this.addValue(l, o)),
        o
    }
    readValue(l, s) {
        let o = this.latestValues[l] !== void 0 || !this.current ? this.latestValues[l] : this.getBaseTargetFromProps(this.props, l) ?? this.readValueFromInstance(this.current, l, this.options);
        return o != null && (typeof o == "string" && (Ig(o) || Wg(o)) ? o = parseFloat(o) : !u2(o) && zn.test(s) && (o = V0(l, s)),
        this.setBaseTarget(l, Lt(o) ? o.get() : o)),
        Lt(o) ? o.get() : o
    }
    setBaseTarget(l, s) {
        this.baseTarget[l] = s
    }
    getBaseTarget(l) {
        var h;
        const {initial: s} = this.props;
        let o;
        if (typeof s == "string" || typeof s == "object") {
            const d = Of(this.props, s, (h = this.presenceContext) == null ? void 0 : h.custom);
            d && (o = d[l])
        }
        if (s && o !== void 0)
            return o;
        const c = this.getBaseTargetFromProps(this.props, l);
        return c !== void 0 && !Lt(c) ? c : this.initialValues[l] !== void 0 && o === void 0 ? void 0 : this.baseTarget[l]
    }
    on(l, s) {
        return this.events[l] || (this.events[l] = new of),
        this.events[l].add(s)
    }
    notify(l, ...s) {
        this.events[l] && this.events[l].notify(...s)
    }
}
class wy extends GT {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = I1
    }
    sortInstanceNodePosition(l, s) {
        return l.compareDocumentPosition(s) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(l, s) {
        return l.style ? l.style[s] : void 0
    }
    removeValueFromRenderState(l, {vars: s, style: o}) {
        delete s[l],
        delete o[l]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: l} = this.props;
        Lt(l) && (this.childSubscription = l.on("change", s => {
            this.current && (this.current.textContent = `${s}`)
        }
        ))
    }
}
function Ay(n, {style: l, vars: s}, o, c) {
    Object.assign(n.style, l, c && c.getProjectionStyles(o));
    for (const h in s)
        n.style.setProperty(h, s[h])
}
function XT(n) {
    return window.getComputedStyle(n)
}
class KT extends wy {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = Ay
    }
    readValueFromInstance(l, s) {
        var o;
        if (as.has(s))
            return (o = this.projection) != null && o.isProjecting ? Bc(s) : g1(l, s);
        {
            const c = XT(l)
              , h = (cf(s) ? c.getPropertyValue(s) : c[s]) || 0;
            return typeof h == "string" ? h.trim() : h
        }
    }
    measureInstanceViewportBox(l, {transformPagePoint: s}) {
        return cy(l, s)
    }
    build(l, s, o) {
        Df(l, s, o.transformTemplate)
    }
    scrapeMotionValuesFromProps(l, s, o) {
        return Rf(l, s, o)
    }
}
const Ny = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function ZT(n, l, s, o) {
    Ay(n, l, void 0, o);
    for (const c in l.attrs)
        n.setAttribute(Ny.has(c) ? c : Cf(c), l.attrs[c])
}
class QT extends wy {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = mt
    }
    getBaseTargetFromProps(l, s) {
        return l[s]
    }
    readValueFromInstance(l, s) {
        if (as.has(s)) {
            const o = R0(s);
            return o && o.default || 0
        }
        return s = Ny.has(s) ? s : Cf(s),
        l.getAttribute(s)
    }
    scrapeMotionValuesFromProps(l, s, o) {
        return ey(l, s, o)
    }
    build(l, s, o) {
        J0(l, s, this.isSVGTag, o.transformTemplate, o.style)
    }
    renderInstance(l, s, o, c) {
        ZT(l, s, o, c)
    }
    mount(l) {
        this.isSVGTag = $0(l.tagName),
        super.mount(l)
    }
}
const FT = (n, l) => Mf(n) ? new QT(l) : new KT(l,{
    allowProjection: n !== T.Fragment
})
  , JT = Z2({
    ...xS,
    ...kT,
    ...CT,
    ...HT
}, FT)
  , oe = v2(JT);
function IT() {
    return f.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 72 72",
        width: "1.5em",
        height: "1.5em",
        children: [f.jsx("path", {
            fill: "#ea5a47",
            d: "M63.874 21.906a7.31 7.31 0 0 0-5.144-5.177C54.193 15.505 36 15.505 36 15.505s-18.193 0-22.73 1.224a7.31 7.31 0 0 0-5.144 5.177C6.91 26.472 6.91 36 6.91 36s0 9.528 1.216 14.095a7.31 7.31 0 0 0 5.144 5.177C17.807 56.495 36 56.495 36 56.495s18.193 0 22.73-1.223a7.31 7.31 0 0 0 5.144-5.177C65.09 45.528 65.09 36 65.09 36s0-9.528-1.216-14.094"
        }), f.jsx("path", {
            fill: "#fff",
            d: "M30.05 44.65L45.256 36L30.05 27.35Z"
        }), f.jsxs("g", {
            fill: "none",
            stroke: "#000",
            strokeMiterlimit: "10",
            strokeWidth: "2",
            children: [f.jsx("path", {
                d: "M63.874 21.906a7.31 7.31 0 0 0-5.144-5.177C54.193 15.505 36 15.505 36 15.505s-18.193 0-22.73 1.224a7.31 7.31 0 0 0-5.144 5.177C6.91 26.472 6.91 36 6.91 36s0 9.528 1.216 14.095a7.31 7.31 0 0 0 5.144 5.177C17.807 56.495 36 56.495 36 56.495s18.193 0 22.73-1.223a7.31 7.31 0 0 0 5.144-5.177C65.09 45.528 65.09 36 65.09 36s0-9.528-1.216-14.094"
            }), f.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M30.05 44.65L45.256 36L30.05 27.35Z"
            })]
        })]
    })
}
function Ey() {
    return f.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "1.5em",
        height: "1.5em",
        style: {
            margin: "2px"
        },
        children: f.jsx("path", {
            fill: "currentColor",
            d: "M10 11H7.101l.001-.009a5 5 0 0 1 .752-1.787a5.05 5.05 0 0 1 2.2-1.811q.455-.193.938-.291a5.1 5.1 0 0 1 2.018 0a5 5 0 0 1 2.525 1.361l1.416-1.412a7 7 0 0 0-2.224-1.501a7 7 0 0 0-1.315-.408a7.1 7.1 0 0 0-2.819 0a7 7 0 0 0-1.316.409a7.04 7.04 0 0 0-3.08 2.534a7 7 0 0 0-1.054 2.505c-.028.135-.043.273-.063.41H2l4 4zm4 2h2.899l-.001.008a4.98 4.98 0 0 1-2.103 3.138a4.9 4.9 0 0 1-1.787.752a5.1 5.1 0 0 1-2.017 0a5 5 0 0 1-1.787-.752a5 5 0 0 1-.74-.61L7.05 16.95a7 7 0 0 0 2.225 1.5c.424.18.867.317 1.315.408a7.1 7.1 0 0 0 2.818 0a7.03 7.03 0 0 0 4.395-2.945a7 7 0 0 0 1.053-2.503c.027-.135.043-.273.063-.41H22l-4-4z"
        })
    })
}
function Cy() {
    return f.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: "1em",
        height: "1em",
        children: f.jsx("path", {
            fill: "currentColor",
            d: "M14 8h-2.5L8 11.5L4.5 8H2l-2 4v1h16v-1zM0 14h16v1H0zm9-9V1H7v4H3.5L8 9.5L12.5 5z"
        })
    })
}
function Dy() {
    return f.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "1em",
        height: "1em",
        children: f.jsx("path", {
            fill: "currentColor",
            d: "M2 8v9h4v4h12v-4h4V8zm14 11H8v-5h8zm3-7c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m-1-9H6v4h12z"
        })
    })
}
function $T() {
    return f.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        children: f.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M12 20a7.97 7.97 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.97 7.97 0 0 1 12 20M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12m10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7",
            clipRule: "evenodd"
        })
    })
}
function Bg() {
    return f.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 576",
        width: "1em",
        height: "1em",
        children: f.jsx("path", {
            fill: "currentColor",
            d: "m402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0m162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2M384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5"
        })
    })
}
function _y() {
    return f.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "3em",
        height: "3em",
        children: [f.jsx("path", {
            fill: "currentColor",
            d: "M20.48 3.512a11.97 11.97 0 0 0-8.486-3.514C5.366-.002-.007 5.371-.007 11.999c0 3.314 1.344 6.315 3.516 8.487A11.97 11.97 0 0 0 11.995 24c6.628 0 12.001-5.373 12.001-12.001c0-3.314-1.344-6.315-3.516-8.487m-1.542 15.427a9.8 9.8 0 0 1-6.943 2.876c-5.423 0-9.819-4.396-9.819-9.819a9.8 9.8 0 0 1 2.876-6.943a9.8 9.8 0 0 1 6.942-2.876c5.422 0 9.818 4.396 9.818 9.818a9.8 9.8 0 0 1-2.876 6.942z"
        }), f.jsx("path", {
            fill: "currentColor",
            d: "m13.537 12l3.855-3.855a1.091 1.091 0 0 0-1.542-1.541l.001-.001l-3.855 3.855l-3.855-3.855A1.091 1.091 0 0 0 6.6 8.145l-.001-.001l3.855 3.855l-3.855 3.855a1.091 1.091 0 1 0 1.541 1.542l.001-.001l3.855-3.855l3.855 3.855a1.091 1.091 0 1 0 1.542-1.541l-.001-.001z"
        })]
    })
}
const My = T.createContext({
    language: "en",
    setLanguage: () => {}
    ,
    translations: {}
})
  , WT = ({children: n}) => {
    const [l,s] = T.useState( () => localStorage.getItem("language") || "en")
      , [o,c] = T.useState({});
    return T.useEffect( () => {
        const d = JSON.parse(localStorage.getItem("initialData") || "{}").languages || {};
        c(d)
    }
    , [l]),
    T.useEffect( () => {
        localStorage.setItem("language", l)
    }
    , [l]),
    f.jsx(My.Provider, {
        value: {
            language: l,
            setLanguage: s,
            translations: o
        },
        children: n
    })
}
  , ct = () => T.useContext(My)
  , ej = () => {
    var h, d;
    const {language: n, setLanguage: l, translations: s} = ct()
      , [o,c] = T.useState([]);
    return T.useEffect( () => {
        const p = localStorage.getItem("initialData");
        if (p)
            try {
                const m = JSON.parse(p);
                c(m == null ? void 0 : m.notice)
            } catch (m) {
                console.error("Failed to parse initialData:", m)
            }
    }
    , []),
    f.jsxs("div", {
        className: "w-full bg-gray-800 text-white py-6 px-2 md:px-4 pb-12 flex flex-col h-full",
        children: [f.jsxs("div", {
            className: "mb-8",
            children: [f.jsx("h2", {
                className: "text-yellow-400 text-xl text-center font-bold mb-4 ",
                children: (h = s == null ? void 0 : s.lblInsTitle) == null ? void 0 : h[n]
            }), f.jsxs("a", {
                href: "https://www.youtube.com/watch?v=wsCPTU3giPo",
                target: "_blank",
                className: "flex hover-scale justify-center items-center gap-1 text-white text-xs mb-6 cursor-pointer hover:font-bold",
                children: [f.jsx(IT, {}), " ", (d = s == null ? void 0 : s.video_guide) == null ? void 0 : d[n]]
            }), f.jsxs("div", {
                className: "flex gap-2 justify-center items-center px-4 py-2",
                children: [f.jsx("button", {
                    onClick: () => l("en"),
                    className: `font-xs text-xs transition hover:cursor-pointer ${n === "en" ? "text-white bg-gray-400 px-2 py-2 rounded-md" : "text-gray-400 p-2 rounded-md hover:bg-gray-500"}`,
                    children: "English"
                }), f.jsx("button", {
                    onClick: () => l("bn"),
                    className: `font-medium text-xs transition hover:cursor-pointer ${n === "bn" ? "text-white bg-gray-400 px-2 py-2 rounded-md" : "text-gray-400 p-2 rounded-md hover:bg-gray-500"}`,
                    children: "বাংলা"
                })]
            })]
        }), f.jsx(oe.div, {
            className: "space-y-4 text-sm h-[calc(100vh-2.5rem)] overflow-y-auto  px-2 py-2 scroll-smooth",
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .6,
                ease: "easeOut"
            },
            children: f.jsx("div", {
                className: "space-y-2",
                children: o.map( (p, m) => f.jsxs("div", {
                    className: p.is_warning === 1 ? "text-red-400 text-justify border-[0.2px] p-2 rounded bg-red-500/5 capitalize" : p.is_warning === 2 ? "text-yellow-400 text-justify border-[0.2px] p-2 rounded bg-yellow-500/5 capitalize" : "text-white text-justify capitalize",
                    children: ["* ", p[n]]
                }, m))
            })
        })]
    })
}
  , tj = "https://api-payment.ivacbd.com";
async function ke(n, l={}) {
    var s;
    try {
        const {method: o="GET", headers: c={}, body: h, token: d} = l
          , p = typeof FormData < "u" && h instanceof FormData
          , m = {
            ...p ? {} : {
                "Content-Type": "application/json"
            },
            ...c
        };
        d && (m.Authorization = `Bearer ${d}`);
        const g = `${tj}${n}`
          , v = await fetch(g, {
            method: o,
            headers: m,
            body: p ? h : h ? JSON.stringify(h) : void 0
        })
          , x = (s = v.headers.get("content-type")) == null ? void 0 : s.includes("application/json");
        if (!v.ok) {
            const S = x ? await v.json() : await v.text();
            throw {
                status: v.status,
                message: (S == null ? void 0 : S.message) || S || "Unknown error"
            }
        }
        return x ? v.json() : {}
    } catch (o) {
        throw console.error("API Error:", o),
        o
    }
}
function aj() {
    var s, o, c, h;
    const {language: n, translations: l} = ct();
    return f.jsxs("div", {
        className: "relative w-full md:h-10 overflow-hidden shadow-md",
        children: [f.jsx("div", {
            className: "absolute inset-0 bg-yellow-50 transform -skew-x-12 origin-top-left scale-x-150 -translate-x-8"
        }), f.jsxs("div", {
            className: "relative z-10 flex md:items-center md:justify-between justify-start h-full md:pr-6 md:flex-row flex-col ",
            children: [f.jsx("div", {
                className: "flex-1 max-w-md",
                children: f.jsx("div", {
                    className: "trapezoid",
                    children: f.jsx("h1", {
                        className: "trapezoid-text text-white",
                        children: "INDIAN VISA APPLICATION FEE"
                    })
                })
            }), f.jsx("div", {
                className: "flex-1 flex md:justify-end",
                children: f.jsx("div", {
                    className: "px-4 py-2 rounded-sm",
                    children: f.jsxs("p", {
                        className: "text-black text-sm font-medium",
                        children: [(s = l == null ? void 0 : l.lblProceed) == null ? void 0 : s[n], " ", f.jsx("a", {
                            href: "https://api-payment.ivacbd.com/contents/user_manual.html",
                            target: "_blank",
                            className: "text-blue-600 hover:text-blue-800 font-semibold",
                            children: (o = l == null ? void 0 : l.user_manual) == null ? void 0 : o[n]
                        }), " ", (c = l == null ? void 0 : l.and) == null ? void 0 : c[n], " ", " ", f.jsx("a", {
                            href: "https://api-payment.ivacbd.com/contents/faq.html",
                            target: "_blank",
                            className: "text-blue-600 hover:text-blue-800 font-semibold",
                            children: (h = l == null ? void 0 : l.faq) == null ? void 0 : h[n]
                        })]
                    })
                })
            })]
        }), f.jsx("div", {
            className: "absolute top-0 right-0 w-2/3 h-full bg-yellow-50 -z-10"
        })]
    })
}
const nj = ({message: n, type: l="info", onClose: s}) => {
    const [o,c] = T.useState(!0)
      , [h,d] = T.useState(!1)
      , [p,m] = T.useState(5)
      , g = () => {
        c(!1),
        s && s()
    }
    ;
    if (T.useEffect( () => {
        let x;
        return p > 0 ? x = setTimeout( () => {
            m(S => S - 1)
        }
        , 1e3) : d(!0),
        () => {
            x && clearTimeout(x)
        }
    }
    , [p]),
    !o)
        return null;
    const v = {
        success: "bg-green-500 text-white",
        error: "bg-red-500 text-white",
        info: "bg-blue-500 text-white",
        warning: "bg-yellow-400 text-black"
    };
    return f.jsx(P0, {
        children: o && f.jsx(oe.div, {
            initial: {
                scale: .8,
                opacity: 0
            },
            animate: {
                scale: 1,
                opacity: 1
            },
            exit: {
                scale: .8,
                opacity: 0
            },
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 25
            },
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm",
            children: f.jsxs("div", {
                className: `flex justify-center flex-col h-1/2 rounded-xl shadow-2xl p-6 max-w-md w-full mx-4 text-center ${v[l]}`,
                children: [f.jsxs("div", {
                    className: "flex flex-col justify-center items-center mb-4",
                    children: [f.jsx(_y, {}), f.jsx("p", {
                        className: "text-white font-bold text-2xl py-4",
                        children: "Error!"
                    })]
                }), f.jsx("span", {
                    className: "block mb-4",
                    children: n
                }), h ? f.jsx("button", {
                    onClick: g,
                    className: "mt-2 w-24 py-2 rounded bg-gray-500 text-white hover:bg-gray-600 mx-auto",
                    children: "OK"
                }) : f.jsxs("p", {
                    className: "text-sm text-white",
                    children: ["Please wait ", p, " seconds..."]
                })]
            })
        })
    })
}
  , Rt = ({message: n, type: l="info", onClose: s}) => {
    const [o,c] = T.useState(!0)
      , h = () => {
        c(!1),
        s && s()
    }
    ;
    if (!o)
        return null;
    const d = {
        success: "bg-green-500 text-white",
        error: "bg-red-500 text-white",
        info: "bg-blue-500 text-white",
        warning: "bg-yellow-400 text-black"
    };
    return f.jsx(P0, {
        children: o && f.jsx(oe.div, {
            initial: {
                scale: .8,
                opacity: 0
            },
            animate: {
                scale: 1,
                opacity: 1
            },
            exit: {
                scale: .8,
                opacity: 0
            },
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 25
            },
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm",
            children: f.jsxs("div", {
                className: `flex justify-center flex-col h-1/2 rounded-xl shadow-2xl p-6 max-w-md w-full mx-4 text-center ${d[l]}`,
                children: [f.jsxs("div", {
                    className: "flex flex-col justify-center items-center mb-4",
                    children: [f.jsx(_y, {}), f.jsx("p", {
                        className: "text-white font-bold text-2xl py-4",
                        children: "Error!"
                    })]
                }), f.jsx("span", {
                    className: "block mb-4",
                    children: n
                }), f.jsx("button", {
                    onClick: h,
                    className: "mt-2 w-24 py-2 rounded bg-gray-500 text-white hover:bg-gray-600 mx-auto",
                    children: "OK"
                })]
            })
        })
    })
}
  , lj = "/assets/sib_logo-BmWytU9-.png"
  , sj = "/assets/sslwireless_logo-D0EMAZ9R.svg"
  , Oy = "/assets/page_bg-BE0EAheg.jpg"
  , ij = "/assets/SSLCommerzLogo-DJTqXlmx.svg"
  , oj = ({message: n}) => f.jsx("div", {
    className: "fixed h-screen bg-cover bg-center inset-0 z-50 flex items-center justify-center ",
    style: {
        backgroundImage: `url(${Oy})`
    },
    children: f.jsxs("div", {
        className: "flex flex-col items-center space-y-4",
        children: [f.jsx("div", {
            className: "w-12 h-12 border-4 border-red-500 border-dashed rounded-full animate-spin"
        }), f.jsx("div", {
            className: "text-red-700 text-lg font-medium",
            children: n
        })]
    })
})
  , Ry = () => f.jsxs("div", {
    className: "fixed inset-0 z-50 flex flex-col items-center justify-center bg-transparent bg-opacity-40 backdrop-blur-sm",
    children: [f.jsx("div", {
        className: "animate-spin rounded-full h-16 w-16 border-t-4 border-blue-400 border-opacity-60"
    }), f.jsx("div", {
        className: "text-green-700 text-lg my-4 font-medium",
        children: "Checking..."
    })]
})
  , rj = ({setStep: n}) => {
    var w, C, M, D, U;
    const {language: l, translations: s} = ct()
      , [o,c] = T.useState("");
    let h = o.trim() !== "" && o.length >= 11;
    const [d,p] = T.useState(!1)
      , [m,g] = T.useState(null)
      , v = L => {
        const B = L.target.value.replace(/\D/g, "");
        c(B)
    }
      , x = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .6,
                ease: "easeOut"
            }
        }
    }
      , S = async () => {
        var L;
        p(!0);
        try {
            h = !1;
            const B = await ke("/api/v2/mobile-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    mobile_no: o
                }
            });
            B.status_code === 200 ? (localStorage.setItem("user_phone", o),
            n((L = B.data) != null && L.registered ? 3 : 2)) : g({
                message: B == null ? void 0 : B.message,
                type: "error"
            })
        } catch (B) {
            const F = B
              , R = typeof F == "object" && (F != null && F.message) ? F.message : "Failed. Please try again later.";
            g({
                message: R,
                type: "error"
            })
        } finally {
            h = !0,
            p(!1)
        }
    }
    ;
    return f.jsxs(oe.div, {
        className: "bg-white w-full p-4",
        variants: x,
        initial: "hidden",
        animate: "visible",
        children: [m && f.jsx(Rt, {
            message: m.message,
            type: m.type,
            onClose: () => g(null)
        }), f.jsxs("p", {
            className: "text-xs",
            children: [(w = s == null ? void 0 : s.lblInputLoginMobile) == null ? void 0 : w[l], " ", " ", f.jsx("span", {
                className: "text-red-600 text-[10px]",
                children: (C = s == null ? void 0 : s.lblInputLoginMobileMsg) == null ? void 0 : C[l]
            })]
        }), f.jsx("input", {
            type: "tel",
            id: "phone",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-sm focus:ring-0 focus:border-slate-400 duration-300 border-[1.5px] focus:outline-0 block w-full p-2.5 my-2",
            placeholder: (M = s == null ? void 0 : s.lblInputLoginMobile) == null ? void 0 : M[l],
            autoComplete: "on",
            inputMode: "numeric",
            pattern: "[0-9]*",
            maxLength: 11,
            value: o,
            onChange: v
        }), f.jsx(oe.button, {
			type: "button",
			disabled: false,
			whileTap: { scale: .95 },
			whileHover: { scale: 1.03 },
			className: `text-white mb-2 h-8 rounded-lg text-xs w-full duration-300 sm:w-auto px-2 py-2 text-center transition 
			bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer`,
			onClick: S,
			children: (U = s?.lblProceed)?.[l] || "Proceed"
			})
		]
    })
}
  , uj = ({setStep: n}) => {
    var Et, Ae, tt, qt, We, Ea, Sa, Ca, la, La, Da, ka, Ee, Vt, at, zt, pt, ie, be, nt, Me, Fe, Je, ze, Yt, Ln, on;
    const {language: l, translations: s} = ct()
      , [o,c] = T.useState(null)
      , [h,d] = T.useState(null)
      , [p,m] = T.useState("")
      , [g,v] = T.useState(null)
      , [x,S] = T.useState(null)
      , [w,C] = T.useState("")
      , [M,D] = T.useState("")
      , [U,L] = T.useState("")
      , [B,F] = T.useState("")
      , [R,$] = T.useState(!1)
      , [te,J] = T.useState("")
      , [se,he] = T.useState(!1)
      , [pe,de] = T.useState(!1)
      , [re,ee] = T.useState(!1)
      , [H,N] = T.useState(!1)
      , [O,q] = T.useState(0)
      , [ae,j] = T.useState(!1);
    T.useEffect( () => {
        const ne = localStorage.getItem("user_phone");
        ne && m(ne)
    }
    , []);
    const k = T.useRef(null)
      , X = () => {
        var ne;
        (ne = k.current) == null || ne.click()
    }
      , K = ne => {
        var gt;
        const we = (gt = ne.target.files) == null ? void 0 : gt[0];
        if (we) {
            if (we.size > 2 * 1024 * 1024) {
                c({
                    message: "File size must be less than 2MB",
                    type: "error"
                });
                return
            }
            if (!["image/jpeg", "image/jpg", "image/png"].includes(we.type)) {
                c({
                    message: "Please select a JPG, PNG, or JPEG file",
                    type: "error"
                });
                return
            }
            v(we),
            S(URL.createObjectURL(we))
        }
    }
      , le = ne => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ne.trim())
      , Z = g && p.length >= 11 && w.trim() !== "" && le(M) && U.trim() !== "" && B.trim() !== "" && U === B
      , G = async () => {
        try {
            N(!0);
            const ne = new FormData;
            ne.append("photo", g),
            ne.append("mobile_no", p),
            ne.append("full_name", w),
            ne.append("email", M),
            ne.append("password", U),
            ne.append("password_confirmation", B),
            ne.append("resend", "0");
            const we = await ke("/api/v2/registration", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: ne
            });
            we.status_code === 200 ? n(6) : c({
                message: (we == null ? void 0 : we.message) || "Registration failed",
                type: "error"
            })
        } catch (ne) {
            const we = ne
              , gt = typeof we == "object" && (we != null && we.message) ? we.message : "Failed. Please try again later."
              , Gt = typeof we == "object" && typeof we.status == "number" ? we.status : 422;
            (Gt === 401 || Gt === 419) && (c({
                message: gt,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            c({
                message: gt,
                type: "error"
            })
        } finally {
            N(!1)
        }
    }
      , ve = M.trim() !== "" && le(M)
      , ge = async () => {
        try {
            de(!0);
            const ne = await ke("/api/v2/registration-email-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    email: M
                }
            });
            ne.status_code === 200 ? $(!0) : c({
                message: ne == null ? void 0 : ne.message,
                type: "error"
            })
        } catch (ne) {
            const we = ne
              , gt = typeof we == "object" && (we != null && we.message) ? we.message : "Failed. Please try again later."
              , Gt = typeof we == "object" && typeof we.status == "number" ? we.status : 422;
            Gt === 401 || Gt === 419 ? (d({
                message: gt,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)) : c({
                message: gt,
                type: "error"
            })
        } finally {
            de(!1)
        }
    }
      , xe = te.trim() !== "" && te.length >= 6
      , Be = async () => {
        try {
            ee(!0);
            const ne = await ke("/api/v2/registration-email-otp-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    email: M,
                    otp: te
                }
            });
            ne.status_code === 200 ? he(!0) : c({
                message: ne == null ? void 0 : ne.message,
                type: "error"
            })
        } catch (ne) {
            const we = ne
              , gt = typeof we == "object" && (we != null && we.message) ? we.message : "Failed. Please try again later."
              , Gt = typeof we == "object" && typeof we.status == "number" ? we.status : 422;
            Gt === 401 || Gt === 419 ? (d({
                message: gt,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)) : c({
                message: gt,
                type: "error"
            })
        } finally {
            ee(!1)
        }
    }
    ;
    T.useEffect( () => {
        let ne = null;
        return ae && O > 0 ? ne = setInterval( () => {
            q(we => we - 1)
        }
        , 1e3) : O === 0 && j(!1),
        () => {
            ne && clearInterval(ne)
        }
    }
    , [O, ae]);
    const _e = () => {
        ge(),
        q(30),
        j(!0)
    }
      , He = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .6,
                ease: "easeOut"
            }
        }
    };
    return f.jsxs(oe.div, {
        className: "bg-white w-full p-4",
        variants: He,
        initial: "hidden",
        animate: "visible",
        children: [o && f.jsx(Rt, {
            message: o.message,
            type: o.type,
            onClose: () => c(null)
        }), h && f.jsx(nj, {
            message: h.message,
            type: h.type,
            onClose: () => c(null)
        }), f.jsxs("p", {
            className: "text-xs mb-2 uppercase",
            children: [(Et = s == null ? void 0 : s.lblInputRegPhotoUpload) == null ? void 0 : Et[l], " ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (Ae = s == null ? void 0 : s.lblInputRegPhotoSize) == null ? void 0 : Ae[l]]
            })]
        }), f.jsx("div", {
            className: "relative w-24 h-24 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors bg-white flex items-center justify-center overflow-hidden",
            onClick: X,
            children: g ? f.jsx("img", {
                src: x || "/placeholder.svg",
                alt: "Selected photo",
                className: "w-full h-full object-cover"
            }) : f.jsx("div", {
                className: "flex flex-col items-center justify-center text-gray-400",
                children: f.jsx("svg", {
                    className: "w-16 h-16 text-gray-300",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    children: f.jsx("path", {
                        d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                    })
                })
            })
        }), f.jsx("input", {
            ref: k,
            type: "file",
            accept: "image/jpeg,image/jpg,image/png",
            onChange: K,
            className: "hidden"
        }), f.jsxs("p", {
            className: "text-xs mt-4 uppercase",
            children: [(tt = s == null ? void 0 : s.lblInputRegMobile) == null ? void 0 : tt[l], " ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (qt = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : qt[l]]
            })]
        }), f.jsx("input", {
            type: "tel",
            id: "phone",
            autoComplete: "on",
            disabled: !0,
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-blue-400 focus:border-[0.1px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (We = s == null ? void 0 : s.lblInputRegMobile) == null ? void 0 : We[l],
            inputMode: "numeric",
            pattern: "[0-9]*",
            maxLength: 11,
            value: p,
            onChange: ne => m(ne.target.value)
        }), f.jsxs("p", {
            className: "text-xs mt-4 uppercase",
            children: [(Ea = s == null ? void 0 : s.lblInputRegName) == null ? void 0 : Ea[l], " ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (Sa = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : Sa[l]]
            })]
        }), f.jsx("input", {
            type: "text",
            id: "name",
            autoComplete: "on",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (Ca = s == null ? void 0 : s.lblInputRegName) == null ? void 0 : Ca[l],
            onChange: ne => C(ne.target.value),
            value: w
        }), f.jsxs("p", {
            className: "text-xs mt-4 uppercase",
            children: [(la = s == null ? void 0 : s.lblInputEmail) == null ? void 0 : la[l], "  ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (La = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : La[l]]
            })]
        }), f.jsx("input", {
            type: "email",
            id: "email",
            autoComplete: "on",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (Da = s == null ? void 0 : s.lblInputEmail) == null ? void 0 : Da[l],
            onChange: ne => D(ne.target.value),
            value: M
        }), se && f.jsx("p", {
            className: "text-xs text-green-500 mt-1",
            children: (ka = s == null ? void 0 : s.emailSuccessfullyVerified) == null ? void 0 : ka[l]
        }), !R && f.jsx("button", {
            type: "button",
            onClick: ve && !pe ? _e : void 0,
            disabled: !ve || pe,
            className: `text-xs font-medium rounded px-2 py-1.5 mr-2 mb-2 transition-colors duration-200
                  ${!ve || pe ? "text-gray-400 bg-gray-300 cursor-not-allowed" : "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 cursor-pointer"}`,
            children: pe ? (Ee = s == null ? void 0 : s.checking) == null ? void 0 : Ee[l] : (Vt = s == null ? void 0 : s.verify_email) == null ? void 0 : Vt[l]
        }), ve && R && !se && f.jsx("button", {
            onClick: _e,
            disabled: ae,
            className: `text-xs font-medium rounded px-2 py-1.5 mr-2 mb-2 transition-colors duration-200
              ${ae ? "text-gray-400 bg-gray-300 cursor-not-allowed" : "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 cursor-pointer"}`,
            children: ae ? ((at = s == null ? void 0 : s.resendOtp) == null ? void 0 : at[l]) + ` ${O}s` : (zt = s == null ? void 0 : s.resendOtp) == null ? void 0 : zt[l]
        }), R && !se && f.jsxs(f.Fragment, {
            children: [f.jsxs("p", {
                className: "text-xs text-blue-500 mt-4",
                children: [(pt = s == null ? void 0 : s.otp_message) == null ? void 0 : pt[l], "  ", " ", f.jsxs("span", {
                    className: "text-red-600 text-[10px]",
                    children: ["*", (ie = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : ie[l]]
                })]
            }), f.jsx("input", {
                type: "text",
                id: "otp",
                autoComplete: "on",
                className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
                placeholder: "Enter OTP",
                maxLength: 6,
                onChange: ne => J(ne.target.value),
                value: te
            }), f.jsx("button", {
			type: "button",
			onClick: Be, // কোনো condition ছাড়াই always call হবে
			disabled: false, // সবসময় active
			className: `text-xs font-medium rounded px-2 py-1.5 mr-2 mb-2 transition-colors duration-200
			text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 cursor-pointer`,
			children: (nt = s == null ? void 0 : s.verifyOtp) == null ? void 0 : nt[l]
		})
		]
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(Me = s == null ? void 0 : s.lblInputPassword) == null ? void 0 : Me[l], "  ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (Fe = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : Fe[l]]
            })]
        }), f.jsx("input", {
            type: "password",
            id: "password",
            disabled: !se,
            autoComplete: "on",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: "********",
            onChange: ne => L(ne.target.value),
            value: U
        }), U.length > 0 && U.length < 6 && f.jsx("p", {
            className: "text-red-500 text-[11px] mb-2",
            children: (Je = s == null ? void 0 : s.passwordMinLengthMsg) == null ? void 0 : Je[l]
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(ze = s == null ? void 0 : s.lblInputRePassword) == null ? void 0 : ze[l], " ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (Yt = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : Yt[l]]
            })]
}), f.jsx("input", {
    type: "password",
    id: "confirmPassword",
    autoComplete: "on",
    disabled: false, // সবসময় enabled
    className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
    placeholder: "********",
    onChange: ne => F(ne.target.value),
    value: B
}), f.jsx(oe.button, {
    type: "button",
    whileTap: { scale: .95 },
    className: "text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer",
    onClick: G,
    children: (on = s == null ? void 0 : s.lblProceed) == null ? void 0 : on[l]
})
]
    })
}
  , cj = ({setStep: n}) => {
    var w, C, M, D, U, L, B;
    const {language: l, translations: s} = ct()
      , [o,c] = T.useState("")
      , [h,d] = T.useState(!1)
      , p = o.trim() !== "" && o.length >= 6
      , [m,g] = T.useState(null)
      , v = async () => {
        var F, R;
        d(!0);
        try {
            const $ = localStorage.getItem("user_phone")
              , te = await ke("/api/v2/login", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    mobile_no: $,
                    password: o
                }
            });
            te.status_code === 200 ? (localStorage.setItem("user_email", JSON.stringify((F = te == null ? void 0 : te.data) == null ? void 0 : F.email)),
            localStorage.setItem("user_pwd", o),
            n((R = te.data) != null && R.email_confirmed ? 100 : 4)) : g({
                message: te == null ? void 0 : te.message,
                type: "error"
            })
        } catch ($) {
            const te = $
              , J = typeof te == "object" && (te != null && te.message) ? te.message : "Failed. Please try again later."
              , se = typeof te == "object" && typeof te.status == "number" ? te.status : 422;
            (se === 401 || se === 419) && (g({
                message: J,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            g({
                message: J,
                type: "error"
            })
        } finally {
            d(!1)
        }
    }
      , x = async () => {
        n(7)
    }
      , S = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .6,
                ease: "easeOut"
            }
        }
    };
    return f.jsxs(oe.div, {
        className: "bg-white w-full p-4",
        variants: S,
        initial: "hidden",
        animate: "visible",
        children: [m && f.jsx(Rt, {
            message: m.message,
            type: m.type,
            onClose: () => g(null)
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(w = s == null ? void 0 : s.lblInputPassword) == null ? void 0 : w[l], " ", " ", f.jsx("span", {
                className: "text-red-600 text-[10px]",
                children: (C = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : C[l]
            })]
        }), f.jsx("input", {
            type: "password",
            id: "password",
            autoComplete: "on",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-sm focus:ring-0 focus:border-slate-400 duration-300 border-[1.5px] focus:outline-0 block w-full p-2.5 my-2",
            placeholder: (M = s == null ? void 0 : s.lblInputPassword) == null ? void 0 : M[l],
            value: o,
            onChange: F => c(F.target.value)
        }), f.jsxs("div", {
            children: [f.jsx(oe.button, {
                type: "button",
                whileTap: {
                    scale: .95
                },
                className: "text-white mb-2 mt-2 mr-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition bg-gray-400 hover:bg-[#218838] focus:ring-[#218838] cursor-pointer",
                onClick: () => n(1),
                children: (D = s == null ? void 0 : s.back) == null ? void 0 : D[l]
}), f.jsx(oe.button, {
    type: "button",
    whileTap: { scale: .95 },
    className: "text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer",
    onClick: v, // সবসময় click করলে v() call হবে
    children: (L = s == null ? void 0 : s.lblProceed) == null ? void 0 : L[l]
})
]
        }), f.jsx("p", {
            className: "text-xs cursor-pointer text-blue-600 mt-2",
            onClick: x,
            children: ((B = s == null ? void 0 : s.lblInputForgotPassword) == null ? void 0 : B[l]) ?? "Forgot password ?"
        })]
    })
}
  , Vy = n => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.trim())
  , fj = ({setStep: n}) => {
    var S, w, C, M, D, U;
    const {language: l, translations: s} = ct()
      , [o,c] = T.useState("")
      , [h,d] = T.useState("")
      , [p,m] = T.useState(null);
    T.useEffect( () => {
        const L = localStorage.getItem("user_email");
        if (L)
            try {
                const B = JSON.parse(L);
                d(B)
            } catch {
                d(L)
            }
    }
    , []);
    const g = o.trim() !== "" && Vy(o)
      , v = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .6,
                ease: "easeOut"
            }
        }
    }
      , x = async () => {
        try {
            const L = await ke("/api/v2/login-email-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    email: o
                }
            });
            L.status_code === 200 ? n(5) : m({
                message: L == null ? void 0 : L.message,
                type: "error"
            })
        } catch (L) {
            const B = L
              , F = typeof B == "object" && (B != null && B.message) ? B.message : "Failed. Please try again later."
              , R = typeof B == "object" && typeof B.status == "number" ? B.status : 422;
            (R === 401 || R === 419) && (m({
                message: F,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            m({
                message: F,
                type: "error"
            })
        }
    }
    ;
    return f.jsxs(oe.div, {
        className: "bg-white w-full p-4",
        variants: v,
        initial: "hidden",
        animate: "visible",
        children: [p && f.jsx(Rt, {
            message: p.message,
            type: p.type,
            onClose: () => m(null)
        }), f.jsxs("p", {
            className: "text-xs",
            children: [(S = s == null ? void 0 : s.lblAuthFullEmail) == null ? void 0 : S[l], " (", h, ")"]
        }), f.jsx("p", {
            className: "text-xs my-1",
            children: (w = s == null ? void 0 : s.lblAuthFullEmail2) == null ? void 0 : w[l]
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(C = s == null ? void 0 : s.lblInputRegEmail) == null ? void 0 : C[l], " ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (M = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : M[l]]
            })]
        }), f.jsx("input", {
            type: "email",
            id: "phone",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (D = s == null ? void 0 : s.lblInputRegEmail) == null ? void 0 : D[l],
            value: o,
            onChange: L => c(L.target.value),
            autoComplete: "on",
        }), f.jsx(oe.button, {
            type: "button",
            disabled: !g,
            whileTap: {
                scale: .95
            },
            whileHover: {
                scale: g ? 1.03 : 1
            },
            className: `text-white mb-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
        ${g ? "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838]" : "bg-gray-400 cursor-not-allowed"}`,
            onClick: g ? x : void 0,
            children: (U = s == null ? void 0 : s.lblProceed) == null ? void 0 : U[l]
        })]
    })
}
;
Fg();
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function xi() {
    return xi = Object.assign ? Object.assign.bind() : function(n) {
        for (var l = 1; l < arguments.length; l++) {
            var s = arguments[l];
            for (var o in s)
                Object.prototype.hasOwnProperty.call(s, o) && (n[o] = s[o])
        }
        return n
    }
    ,
    xi.apply(this, arguments)
}
var Rn;
(function(n) {
    n.Pop = "POP",
    n.Push = "PUSH",
    n.Replace = "REPLACE"
}
)(Rn || (Rn = {}));
const Lg = "popstate";
function dj(n) {
    n === void 0 && (n = {});
    function l(o, c) {
        let {pathname: h, search: d, hash: p} = o.location;
        return Ic("", {
            pathname: h,
            search: d,
            hash: p
        }, c.state && c.state.usr || null, c.state && c.state.key || "default")
    }
    function s(o, c) {
        return typeof c == "string" ? c : Uy(c)
    }
    return mj(l, s, null, n)
}
function bt(n, l) {
    if (n === !1 || n === null || typeof n > "u")
        throw new Error(l)
}
function zy(n, l) {
    if (!n) {
        typeof console < "u" && console.warn(l);
        try {
            throw new Error(l)
        } catch {}
    }
}
function hj() {
    return Math.random().toString(36).substr(2, 8)
}
function kg(n, l) {
    return {
        usr: n.state,
        key: n.key,
        idx: l
    }
}
function Ic(n, l, s, o) {
    return s === void 0 && (s = null),
    xi({
        pathname: typeof n == "string" ? n : n.pathname,
        search: "",
        hash: ""
    }, typeof l == "string" ? ns(l) : l, {
        state: s,
        key: l && l.key || o || hj()
    })
}
function Uy(n) {
    let {pathname: l="/", search: s="", hash: o=""} = n;
    return s && s !== "?" && (l += s.charAt(0) === "?" ? s : "?" + s),
    o && o !== "#" && (l += o.charAt(0) === "#" ? o : "#" + o),
    l
}
function ns(n) {
    let l = {};
    if (n) {
        let s = n.indexOf("#");
        s >= 0 && (l.hash = n.substr(s),
        n = n.substr(0, s));
        let o = n.indexOf("?");
        o >= 0 && (l.search = n.substr(o),
        n = n.substr(0, o)),
        n && (l.pathname = n)
    }
    return l
}
function mj(n, l, s, o) {
    o === void 0 && (o = {});
    let {window: c=document.defaultView, v5Compat: h=!1} = o
      , d = c.history
      , p = Rn.Pop
      , m = null
      , g = v();
    g == null && (g = 0,
    d.replaceState(xi({}, d.state, {
        idx: g
    }), ""));
    function v() {
        return (d.state || {
            idx: null
        }).idx
    }
    function x() {
        p = Rn.Pop;
        let D = v()
          , U = D == null ? null : D - g;
        g = D,
        m && m({
            action: p,
            location: M.location,
            delta: U
        })
    }
    function S(D, U) {
        p = Rn.Push;
        let L = Ic(M.location, D, U);
        g = v() + 1;
        let B = kg(L, g)
          , F = M.createHref(L);
        try {
            d.pushState(B, "", F)
        } catch (R) {
            if (R instanceof DOMException && R.name === "DataCloneError")
                throw R;
            c.location.assign(F)
        }
        h && m && m({
            action: p,
            location: M.location,
            delta: 1
        })
    }
    function w(D, U) {
        p = Rn.Replace;
        let L = Ic(M.location, D, U);
        g = v();
        let B = kg(L, g)
          , F = M.createHref(L);
        d.replaceState(B, "", F),
        h && m && m({
            action: p,
            location: M.location,
            delta: 0
        })
    }
    function C(D) {
        let U = c.location.origin !== "null" ? c.location.origin : c.location.href
          , L = typeof D == "string" ? D : Uy(D);
        return L = L.replace(/ $/, "%20"),
        bt(U, "No window.location.(origin|href) available to create URL for href: " + L),
        new URL(L,U)
    }
    let M = {
        get action() {
            return p
        },
        get location() {
            return n(c, d)
        },
        listen(D) {
            if (m)
                throw new Error("A history only accepts one active listener");
            return c.addEventListener(Lg, x),
            m = D,
            () => {
                c.removeEventListener(Lg, x),
                m = null
            }
        },
        createHref(D) {
            return l(c, D)
        },
        createURL: C,
        encodeLocation(D) {
            let U = C(D);
            return {
                pathname: U.pathname,
                search: U.search,
                hash: U.hash
            }
        },
        push: S,
        replace: w,
        go(D) {
            return d.go(D)
        }
    };
    return M
}
var Hg;
(function(n) {
    n.data = "data",
    n.deferred = "deferred",
    n.redirect = "redirect",
    n.error = "error"
}
)(Hg || (Hg = {}));
function pj(n, l, s) {
    return s === void 0 && (s = "/"),
    gj(n, l, s)
}
function gj(n, l, s, o) {
    let c = typeof l == "string" ? ns(l) : l
      , h = ky(c.pathname || "/", s);
    if (h == null)
        return null;
    let d = By(n);
    yj(d);
    let p = null;
    for (let m = 0; p == null && m < d.length; ++m) {
        let g = Dj(h);
        p = Nj(d[m], g)
    }
    return p
}
function By(n, l, s, o) {
    l === void 0 && (l = []),
    s === void 0 && (s = []),
    o === void 0 && (o = "");
    let c = (h, d, p) => {
        let m = {
            relativePath: p === void 0 ? h.path || "" : p,
            caseSensitive: h.caseSensitive === !0,
            childrenIndex: d,
            route: h
        };
        m.relativePath.startsWith("/") && (bt(m.relativePath.startsWith(o), 'Absolute route path "' + m.relativePath + '" nested under path ' + ('"' + o + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        m.relativePath = m.relativePath.slice(o.length));
        let g = rl([o, m.relativePath])
          , v = s.concat(m);
        h.children && h.children.length > 0 && (bt(h.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + g + '".')),
        By(h.children, l, v, g)),
        !(h.path == null && !h.index) && l.push({
            path: g,
            score: wj(g, h.index),
            routesMeta: v
        })
    }
    ;
    return n.forEach( (h, d) => {
        var p;
        if (h.path === "" || !((p = h.path) != null && p.includes("?")))
            c(h, d);
        else
            for (let m of Ly(h.path))
                c(h, d, m)
    }
    ),
    l
}
function Ly(n) {
    let l = n.split("/");
    if (l.length === 0)
        return [];
    let[s,...o] = l
      , c = s.endsWith("?")
      , h = s.replace(/\?$/, "");
    if (o.length === 0)
        return c ? [h, ""] : [h];
    let d = Ly(o.join("/"))
      , p = [];
    return p.push(...d.map(m => m === "" ? h : [h, m].join("/"))),
    c && p.push(...d),
    p.map(m => n.startsWith("/") && m === "" ? "/" : m)
}
function yj(n) {
    n.sort( (l, s) => l.score !== s.score ? s.score - l.score : Aj(l.routesMeta.map(o => o.childrenIndex), s.routesMeta.map(o => o.childrenIndex)))
}
const vj = /^:[\w-]+$/
  , xj = 3
  , bj = 2
  , Sj = 1
  , Tj = 10
  , jj = -2
  , Pg = n => n === "*";
function wj(n, l) {
    let s = n.split("/")
      , o = s.length;
    return s.some(Pg) && (o += jj),
    l && (o += bj),
    s.filter(c => !Pg(c)).reduce( (c, h) => c + (vj.test(h) ? xj : h === "" ? Sj : Tj), o)
}
function Aj(n, l) {
    return n.length === l.length && n.slice(0, -1).every( (o, c) => o === l[c]) ? n[n.length - 1] - l[l.length - 1] : 0
}
function Nj(n, l, s) {
    let {routesMeta: o} = n
      , c = {}
      , h = "/"
      , d = [];
    for (let p = 0; p < o.length; ++p) {
        let m = o[p]
          , g = p === o.length - 1
          , v = h === "/" ? l : l.slice(h.length) || "/"
          , x = Ej({
            path: m.relativePath,
            caseSensitive: m.caseSensitive,
            end: g
        }, v)
          , S = m.route;
        if (!x)
            return null;
        Object.assign(c, x.params),
        d.push({
            params: c,
            pathname: rl([h, x.pathname]),
            pathnameBase: Rj(rl([h, x.pathnameBase])),
            route: S
        }),
        x.pathnameBase !== "/" && (h = rl([h, x.pathnameBase]))
    }
    return d
}
function Ej(n, l) {
    typeof n == "string" && (n = {
        path: n,
        caseSensitive: !1,
        end: !0
    });
    let[s,o] = Cj(n.path, n.caseSensitive, n.end)
      , c = l.match(s);
    if (!c)
        return null;
    let h = c[0]
      , d = h.replace(/(.)\/+$/, "$1")
      , p = c.slice(1);
    return {
        params: o.reduce( (g, v, x) => {
            let {paramName: S, isOptional: w} = v;
            if (S === "*") {
                let M = p[x] || "";
                d = h.slice(0, h.length - M.length).replace(/(.)\/+$/, "$1")
            }
            const C = p[x];
            return w && !C ? g[S] = void 0 : g[S] = (C || "").replace(/%2F/g, "/"),
            g
        }
        , {}),
        pathname: h,
        pathnameBase: d,
        pattern: n
    }
}
function Cj(n, l, s) {
    l === void 0 && (l = !1),
    s === void 0 && (s = !0),
    zy(n === "*" || !n.endsWith("*") || n.endsWith("/*"), 'Route path "' + n + '" will be treated as if it were ' + ('"' + n.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + n.replace(/\*$/, "/*") + '".'));
    let o = []
      , c = "^" + n.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (d, p, m) => (o.push({
        paramName: p,
        isOptional: m != null
    }),
    m ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return n.endsWith("*") ? (o.push({
        paramName: "*"
    }),
    c += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? c += "\\/*$" : n !== "" && n !== "/" && (c += "(?:(?=\\/|$))"),
    [new RegExp(c,l ? void 0 : "i"), o]
}
function Dj(n) {
    try {
        return n.split("/").map(l => decodeURIComponent(l).replace(/\//g, "%2F")).join("/")
    } catch (l) {
        return zy(!1, 'The URL path "' + n + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + l + ").")),
        n
    }
}
function ky(n, l) {
    if (l === "/")
        return n;
    if (!n.toLowerCase().startsWith(l.toLowerCase()))
        return null;
    let s = l.endsWith("/") ? l.length - 1 : l.length
      , o = n.charAt(s);
    return o && o !== "/" ? null : n.slice(s) || "/"
}
function _j(n, l) {
    l === void 0 && (l = "/");
    let {pathname: s, search: o="", hash: c=""} = typeof n == "string" ? ns(n) : n;
    return {
        pathname: s ? s.startsWith("/") ? s : Mj(s, l) : l,
        search: Vj(o),
        hash: zj(c)
    }
}
function Mj(n, l) {
    let s = l.replace(/\/+$/, "").split("/");
    return n.split("/").forEach(c => {
        c === ".." ? s.length > 1 && s.pop() : c !== "." && s.push(c)
    }
    ),
    s.length > 1 ? s.join("/") : "/"
}
function _c(n, l, s, o) {
    return "Cannot include a '" + n + "' character in a manually specified " + ("`to." + l + "` field [" + JSON.stringify(o) + "].  Please separate it out to the ") + ("`to." + s + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function Oj(n) {
    return n.filter( (l, s) => s === 0 || l.route.path && l.route.path.length > 0)
}
function Hy(n, l) {
    let s = Oj(n);
    return l ? s.map( (o, c) => c === s.length - 1 ? o.pathname : o.pathnameBase) : s.map(o => o.pathnameBase)
}
function Py(n, l, s, o) {
    o === void 0 && (o = !1);
    let c;
    typeof n == "string" ? c = ns(n) : (c = xi({}, n),
    bt(!c.pathname || !c.pathname.includes("?"), _c("?", "pathname", "search", c)),
    bt(!c.pathname || !c.pathname.includes("#"), _c("#", "pathname", "hash", c)),
    bt(!c.search || !c.search.includes("#"), _c("#", "search", "hash", c)));
    let h = n === "" || c.pathname === "", d = h ? "/" : c.pathname, p;
    if (d == null)
        p = s;
    else {
        let x = l.length - 1;
        if (!o && d.startsWith("..")) {
            let S = d.split("/");
            for (; S[0] === ".."; )
                S.shift(),
                x -= 1;
            c.pathname = S.join("/")
        }
        p = x >= 0 ? l[x] : "/"
    }
    let m = _j(c, p)
      , g = d && d !== "/" && d.endsWith("/")
      , v = (h || d === ".") && s.endsWith("/");
    return !m.pathname.endsWith("/") && (g || v) && (m.pathname += "/"),
    m
}
const rl = n => n.join("/").replace(/\/\/+/g, "/")
  , Rj = n => n.replace(/\/+$/, "").replace(/^\/*/, "/")
  , Vj = n => !n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n
  , zj = n => !n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n;
function Uj(n) {
    return n != null && typeof n.status == "number" && typeof n.statusText == "string" && typeof n.internal == "boolean" && "data"in n
}
const qy = ["post", "put", "patch", "delete"];
new Set(qy);
const Bj = ["get", ...qy];
new Set(Bj);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function bi() {
    return bi = Object.assign ? Object.assign.bind() : function(n) {
        for (var l = 1; l < arguments.length; l++) {
            var s = arguments[l];
            for (var o in s)
                Object.prototype.hasOwnProperty.call(s, o) && (n[o] = s[o])
        }
        return n
    }
    ,
    bi.apply(this, arguments)
}
const zf = T.createContext(null)
  , Lj = T.createContext(null)
  , Ai = T.createContext(null)
  , nr = T.createContext(null)
  , Bn = T.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Yy = T.createContext(null);
function Ni() {
    return T.useContext(nr) != null
}
function lr() {
    return Ni() || bt(!1),
    T.useContext(nr).location
}
function Gy(n) {
    T.useContext(Ai).static || T.useLayoutEffect(n)
}
function ba() {
    let {isDataRoute: n} = T.useContext(Bn);
    return n ? $j() : kj()
}
function kj() {
    Ni() || bt(!1);
    let n = T.useContext(zf)
      , {basename: l, future: s, navigator: o} = T.useContext(Ai)
      , {matches: c} = T.useContext(Bn)
      , {pathname: h} = lr()
      , d = JSON.stringify(Hy(c, s.v7_relativeSplatPath))
      , p = T.useRef(!1);
    return Gy( () => {
        p.current = !0
    }
    ),
    T.useCallback(function(g, v) {
        if (v === void 0 && (v = {}),
        !p.current)
            return;
        if (typeof g == "number") {
            o.go(g);
            return
        }
        let x = Py(g, JSON.parse(d), h, v.relative === "path");
        n == null && l !== "/" && (x.pathname = x.pathname === "/" ? l : rl([l, x.pathname])),
        (v.replace ? o.replace : o.push)(x, v.state, v)
    }, [l, o, d, h, n])
}
function Hj() {
    let {matches: n} = T.useContext(Bn)
      , l = n[n.length - 1];
    return l ? l.params : {}
}
function Pj(n, l) {
    return qj(n, l)
}
function qj(n, l, s, o) {
    Ni() || bt(!1);
    let {navigator: c} = T.useContext(Ai)
      , {matches: h} = T.useContext(Bn)
      , d = h[h.length - 1]
      , p = d ? d.params : {};
    d && d.pathname;
    let m = d ? d.pathnameBase : "/";
    d && d.route;
    let g = lr(), v;
    if (l) {
        var x;
        let D = typeof l == "string" ? ns(l) : l;
        m === "/" || (x = D.pathname) != null && x.startsWith(m) || bt(!1),
        v = D
    } else
        v = g;
    let S = v.pathname || "/"
      , w = S;
    if (m !== "/") {
        let D = m.replace(/^\//, "").split("/");
        w = "/" + S.replace(/^\//, "").split("/").slice(D.length).join("/")
    }
    let C = pj(n, {
        pathname: w
    })
      , M = Zj(C && C.map(D => Object.assign({}, D, {
        params: Object.assign({}, p, D.params),
        pathname: rl([m, c.encodeLocation ? c.encodeLocation(D.pathname).pathname : D.pathname]),
        pathnameBase: D.pathnameBase === "/" ? m : rl([m, c.encodeLocation ? c.encodeLocation(D.pathnameBase).pathname : D.pathnameBase])
    })), h, s, o);
    return l && M ? T.createElement(nr.Provider, {
        value: {
            location: bi({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, v),
            navigationType: Rn.Pop
        }
    }, M) : M
}
function Yj() {
    let n = Ij()
      , l = Uj(n) ? n.status + " " + n.statusText : n instanceof Error ? n.message : JSON.stringify(n)
      , s = n instanceof Error ? n.stack : null
      , c = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return T.createElement(T.Fragment, null, T.createElement("h2", null, "Unexpected Application Error!"), T.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, l), s ? T.createElement("pre", {
        style: c
    }, s) : null, null)
}
const Gj = T.createElement(Yj, null);
class Xj extends T.Component {
    constructor(l) {
        super(l),
        this.state = {
            location: l.location,
            revalidation: l.revalidation,
            error: l.error
        }
    }
    static getDerivedStateFromError(l) {
        return {
            error: l
        }
    }
    static getDerivedStateFromProps(l, s) {
        return s.location !== l.location || s.revalidation !== "idle" && l.revalidation === "idle" ? {
            error: l.error,
            location: l.location,
            revalidation: l.revalidation
        } : {
            error: l.error !== void 0 ? l.error : s.error,
            location: s.location,
            revalidation: l.revalidation || s.revalidation
        }
    }
    componentDidCatch(l, s) {
        console.error("React Router caught the following error during render", l, s)
    }
    render() {
        return this.state.error !== void 0 ? T.createElement(Bn.Provider, {
            value: this.props.routeContext
        }, T.createElement(Yy.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function Kj(n) {
    let {routeContext: l, match: s, children: o} = n
      , c = T.useContext(zf);
    return c && c.static && c.staticContext && (s.route.errorElement || s.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = s.route.id),
    T.createElement(Bn.Provider, {
        value: l
    }, o)
}
function Zj(n, l, s, o) {
    var c;
    if (l === void 0 && (l = []),
    s === void 0 && (s = null),
    o === void 0 && (o = null),
    n == null) {
        var h;
        if (!s)
            return null;
        if (s.errors)
            n = s.matches;
        else if ((h = o) != null && h.v7_partialHydration && l.length === 0 && !s.initialized && s.matches.length > 0)
            n = s.matches;
        else
            return null
    }
    let d = n
      , p = (c = s) == null ? void 0 : c.errors;
    if (p != null) {
        let v = d.findIndex(x => x.route.id && (p == null ? void 0 : p[x.route.id]) !== void 0);
        v >= 0 || bt(!1),
        d = d.slice(0, Math.min(d.length, v + 1))
    }
    let m = !1
      , g = -1;
    if (s && o && o.v7_partialHydration)
        for (let v = 0; v < d.length; v++) {
            let x = d[v];
            if ((x.route.HydrateFallback || x.route.hydrateFallbackElement) && (g = v),
            x.route.id) {
                let {loaderData: S, errors: w} = s
                  , C = x.route.loader && S[x.route.id] === void 0 && (!w || w[x.route.id] === void 0);
                if (x.route.lazy || C) {
                    m = !0,
                    g >= 0 ? d = d.slice(0, g + 1) : d = [d[0]];
                    break
                }
            }
        }
    return d.reduceRight( (v, x, S) => {
        let w, C = !1, M = null, D = null;
        s && (w = p && x.route.id ? p[x.route.id] : void 0,
        M = x.route.errorElement || Gj,
        m && (g < 0 && S === 0 ? (Wj("route-fallback"),
        C = !0,
        D = null) : g === S && (C = !0,
        D = x.route.hydrateFallbackElement || null)));
        let U = l.concat(d.slice(0, S + 1))
          , L = () => {
            let B;
            return w ? B = M : C ? B = D : x.route.Component ? B = T.createElement(x.route.Component, null) : x.route.element ? B = x.route.element : B = v,
            T.createElement(Kj, {
                match: x,
                routeContext: {
                    outlet: v,
                    matches: U,
                    isDataRoute: s != null
                },
                children: B
            })
        }
        ;
        return s && (x.route.ErrorBoundary || x.route.errorElement || S === 0) ? T.createElement(Xj, {
            location: s.location,
            revalidation: s.revalidation,
            component: M,
            error: w,
            children: L(),
            routeContext: {
                outlet: null,
                matches: U,
                isDataRoute: !0
            }
        }) : L()
    }
    , null)
}
var Xy = function(n) {
    return n.UseBlocker = "useBlocker",
    n.UseRevalidator = "useRevalidator",
    n.UseNavigateStable = "useNavigate",
    n
}(Xy || {})
  , Ky = function(n) {
    return n.UseBlocker = "useBlocker",
    n.UseLoaderData = "useLoaderData",
    n.UseActionData = "useActionData",
    n.UseRouteError = "useRouteError",
    n.UseNavigation = "useNavigation",
    n.UseRouteLoaderData = "useRouteLoaderData",
    n.UseMatches = "useMatches",
    n.UseRevalidator = "useRevalidator",
    n.UseNavigateStable = "useNavigate",
    n.UseRouteId = "useRouteId",
    n
}(Ky || {});
function Qj(n) {
    let l = T.useContext(zf);
    return l || bt(!1),
    l
}
function Fj(n) {
    let l = T.useContext(Lj);
    return l || bt(!1),
    l
}
function Jj(n) {
    let l = T.useContext(Bn);
    return l || bt(!1),
    l
}
function Zy(n) {
    let l = Jj()
      , s = l.matches[l.matches.length - 1];
    return s.route.id || bt(!1),
    s.route.id
}
function Ij() {
    var n;
    let l = T.useContext(Yy)
      , s = Fj()
      , o = Zy();
    return l !== void 0 ? l : (n = s.errors) == null ? void 0 : n[o]
}
function $j() {
    let {router: n} = Qj(Xy.UseNavigateStable)
      , l = Zy(Ky.UseNavigateStable)
      , s = T.useRef(!1);
    return Gy( () => {
        s.current = !0
    }
    ),
    T.useCallback(function(c, h) {
        h === void 0 && (h = {}),
        s.current && (typeof c == "number" ? n.navigate(c) : n.navigate(c, bi({
            fromRouteId: l
        }, h)))
    }, [n, l])
}
const qg = {};
function Wj(n, l, s) {
    qg[n] || (qg[n] = !0)
}
function ew(n, l) {
    n == null || n.v7_startTransition,
    n == null || n.v7_relativeSplatPath
}
function Qy(n) {
    let {to: l, replace: s, state: o, relative: c} = n;
    Ni() || bt(!1);
    let {future: h, static: d} = T.useContext(Ai)
      , {matches: p} = T.useContext(Bn)
      , {pathname: m} = lr()
      , g = ba()
      , v = Py(l, Hy(p, h.v7_relativeSplatPath), m, c === "path")
      , x = JSON.stringify(v);
    return T.useEffect( () => g(JSON.parse(x), {
        replace: s,
        state: o,
        relative: c
    }), [g, x, c, s, o]),
    null
}
function ii(n) {
    bt(!1)
}
function tw(n) {
    let {basename: l="/", children: s=null, location: o, navigationType: c=Rn.Pop, navigator: h, static: d=!1, future: p} = n;
    Ni() && bt(!1);
    let m = l.replace(/^\/*/, "/")
      , g = T.useMemo( () => ({
        basename: m,
        navigator: h,
        static: d,
        future: bi({
            v7_relativeSplatPath: !1
        }, p)
    }), [m, p, h, d]);
    typeof o == "string" && (o = ns(o));
    let {pathname: v="/", search: x="", hash: S="", state: w=null, key: C="default"} = o
      , M = T.useMemo( () => {
        let D = ky(v, m);
        return D == null ? null : {
            location: {
                pathname: D,
                search: x,
                hash: S,
                state: w,
                key: C
            },
            navigationType: c
        }
    }
    , [m, v, x, S, w, C, c]);
    return M == null ? null : T.createElement(Ai.Provider, {
        value: g
    }, T.createElement(nr.Provider, {
        children: s,
        value: M
    }))
}
function aw(n) {
    let {children: l, location: s} = n;
    return Pj($c(l), s)
}
new Promise( () => {}
);
function $c(n, l) {
    l === void 0 && (l = []);
    let s = [];
    return T.Children.forEach(n, (o, c) => {
        if (!T.isValidElement(o))
            return;
        let h = [...l, c];
        if (o.type === T.Fragment) {
            s.push.apply(s, $c(o.props.children, h));
            return
        }
        o.type !== ii && bt(!1),
        !o.props.index || !o.props.children || bt(!1);
        let d = {
            id: o.props.id || h.join("-"),
            caseSensitive: o.props.caseSensitive,
            element: o.props.element,
            Component: o.props.Component,
            index: o.props.index,
            path: o.props.path,
            loader: o.props.loader,
            action: o.props.action,
            errorElement: o.props.errorElement,
            ErrorBoundary: o.props.ErrorBoundary,
            hasErrorBoundary: o.props.ErrorBoundary != null || o.props.errorElement != null,
            shouldRevalidate: o.props.shouldRevalidate,
            handle: o.props.handle,
            lazy: o.props.lazy
        };
        o.props.children && (d.children = $c(o.props.children, h)),
        s.push(d)
    }
    ),
    s
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const nw = "6";
try {
    window.__reactRouterVersion = nw
} catch {}
const lw = "startTransition"
  , Yg = ob[lw];
function sw(n) {
    let {basename: l, children: s, future: o, window: c} = n
      , h = T.useRef();
    h.current == null && (h.current = dj({
        window: c,
        v5Compat: !0
    }));
    let d = h.current
      , [p,m] = T.useState({
        action: d.action,
        location: d.location
    })
      , {v7_startTransition: g} = o || {}
      , v = T.useCallback(x => {
        g && Yg ? Yg( () => m(x)) : m(x)
    }
    , [m, g]);
    return T.useLayoutEffect( () => d.listen(v), [d, v]),
    T.useEffect( () => ew(o), [o]),
    T.createElement(tw, {
        basename: l,
        children: s,
        location: p.location,
        navigationType: p.action,
        navigator: d,
        future: o
    })
}
var Gg;
(function(n) {
    n.UseScrollRestoration = "useScrollRestoration",
    n.UseSubmit = "useSubmit",
    n.UseSubmitFetcher = "useSubmitFetcher",
    n.UseFetcher = "useFetcher",
    n.useViewTransitionState = "useViewTransitionState"
}
)(Gg || (Gg = {}));
var Xg;
(function(n) {
    n.UseFetcher = "useFetcher",
    n.UseFetchers = "useFetchers",
    n.UseScrollRestoration = "useScrollRestoration"
}
)(Xg || (Xg = {}));
const iw = ({setStep: n}) => {
    var $, te, J, se, he, pe, de, re, ee;
    const {language: l, translations: s} = ct()
      , o = ba()
      , [c,h] = T.useState(!1)
      , [d,p] = T.useState("")
      , [m,g] = T.useState("")
      , v = d.trim() !== "" && d.length >= 6
      , [x,S] = T.useState(null)
      , [w,C] = T.useState(30)
      , [M,D] = T.useState(!0)
      , [U,L] = T.useState(!1)
      , B = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .6,
                ease: "easeOut"
            }
        }
    };
    T.useEffect( () => {
        const H = localStorage.getItem("user_email");
        H && g(H)
    }
    , []);
    const F = async () => {
        h(!0);
        try {
            const H = await ke("/api/v2/login-email-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    email: m
                }
            });
            H.status_code === 200 ? n(5) : S({
                message: H == null ? void 0 : H.message,
                type: "error"
            })
        } catch (H) {
            const N = H
              , O = typeof N == "object" && (N != null && N.message) ? N.message : "Failed. Please try again later."
              , q = typeof N == "object" && typeof N.status == "number" ? N.status : 422;
            (q === 401 || q === 419) && (S({
                message: O,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            S({
                message: O,
                type: "error"
            })
        }
    }
    ;
    T.useEffect( () => {
        let H;
        return M && w > 0 && (H = setInterval( () => {
            C(N => N - 1)
        }
        , 1e3)),
        w === 0 && M && (clearInterval(H),
        D(!1),
        L(!0)),
        () => clearInterval(H)
    }
    , [w, M]);
    const R = async () => {
        var H, N, O, q, ae;
        try {
            h(!0);
            const j = await ke("/api/v2/login-email-otp-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    otp: d
                }
            });
            j.status_code === 200 ? (localStorage.setItem("access_token", (H = j == null ? void 0 : j.data) == null ? void 0 : H.access_token),
            window.dispatchEvent(new Event("tokenUpdate")),
            localStorage.setItem("auth_name", (N = j == null ? void 0 : j.data) == null ? void 0 : N.name),
            localStorage.setItem("auth_email", (O = j == null ? void 0 : j.data) == null ? void 0 : O.email),
            localStorage.setItem("auth_phone", (q = j == null ? void 0 : j.data) == null ? void 0 : q.mobile_no),
            localStorage.setItem("auth_photo", (ae = j == null ? void 0 : j.data) == null ? void 0 : ae.profile_image),
            localStorage.removeItem("user_pwd"),
            o("/application")) : S({
                message: j == null ? void 0 : j.message,
                type: "error"
            })
        } catch (j) {
            const k = j
              , X = typeof k == "object" && (k != null && k.message) ? k.message : "Failed. Please try again later."
              , K = typeof k == "object" && typeof k.status == "number" ? k.status : 422;
            (K === 401 || K === 419) && (S({
                message: X,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            S({
                message: X,
                type: "error"
            })
        } finally {
            h(!1)
        }
    }
    ;
    return f.jsxs(oe.div, {
        className: "bg-white w-full p-4",
        variants: B,
        initial: "hidden",
        animate: "visible",
        children: [x && f.jsx(Rt, {
            message: x.message,
            type: x.type,
            onClose: () => S(null)
        }), f.jsxs("p", {
            className: "text-[10px]",
            children: [($ = s == null ? void 0 : s.lblAuthOtp1) == null ? void 0 : $[l], " (", m, ")"]
        }), f.jsx("p", {
            className: "text-[10px]",
            children: (te = s == null ? void 0 : s.lblAuthOtp2) == null ? void 0 : te[l]
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(J = s == null ? void 0 : s.lblInputAuthOtp) == null ? void 0 : J[l], " ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: [" *", (se = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : se[l]]
            })]
        }), f.jsx("input", {
            type: "text",
            id: "otp",
            autoComplete: "on",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-sm focus:ring-0 focus:border-slate-400 duration-300 border-[1.5px] focus:outline-0 block w-full p-2.5 my-2",
            placeholder: (he = s == null ? void 0 : s.lblInputOtp) == null ? void 0 : he[l],
            inputMode: "numeric",
            value: d,
            maxLength: 6,
            onChange: H => {
                const N = H.target.value.replace(/\D/g, "");
                p(N)
            }
        }), f.jsxs("div", {
            children: [f.jsx(oe.button, {
                type: "button",
                disabled: c || !v,
                whileTap: {
                    scale: .95
                },
                className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
              ${c || !v ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838]"}`,
                onClick: !c && v ? R : void 0,
                children: c ? ((pe = s == null ? void 0 : s.checking) == null ? void 0 : pe[l]) + "..." : (de = s == null ? void 0 : s.lblProceed) == null ? void 0 : de[l]
            }), f.jsx(oe.button, {
                onClick: F,
                disabled: !U,
                className: `text-white mb-2 mt-2 md:ml-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition ${U ? "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`,
                children: U ? (re = s == null ? void 0 : s.resendOtp) == null ? void 0 : re[l] : ((ee = s == null ? void 0 : s.resendOtp) == null ? void 0 : ee[l]) + ` ${w}s`
            })]
        })]
    })
}
  , ow = ({setStep: n}) => {
    var $, te, J, se, he, pe, de, re, ee;
    const {language: l, translations: s} = ct()
      , o = ba()
      , [c,h] = T.useState(!1)
      , [d,p] = T.useState("")
      , [m,g] = T.useState("")
      , v = d.trim() !== "" && d.length >= 6
      , [x,S] = T.useState(null)
      , [w,C] = T.useState(30)
      , [M,D] = T.useState(!0)
      , [U,L] = T.useState(!1)
      , B = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .6,
                ease: "easeOut"
            }
        }
    };
    T.useEffect( () => {
        const H = localStorage.getItem("user_phone");
        H && g(H)
    }
    , []);
    const F = async () => {
        h(!0);
        try {
            const H = await ke("/api/v2/registration", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    resend: "1"
                }
            });
            H.status_code === 200 ? (C(30),
            D(!0),
            L(!1)) : (C(30),
            D(!0),
            L(!1),
            S({
                message: H == null ? void 0 : H.message,
                type: "error"
            }))
        } catch (H) {
            const N = H
              , O = typeof N == "object" && (N != null && N.message) ? N.message : "Failed. Please try again later."
              , q = typeof N == "object" && typeof N.status == "number" ? N.status : 422;
            (q === 401 || q === 419) && (S({
                message: O,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            S({
                message: O,
                type: "error"
            })
        } finally {
            h(!1)
        }
    }
    ;
    T.useEffect( () => {
        let H;
        return M && w > 0 && (H = setInterval( () => {
            C(N => N - 1)
        }
        , 1e3)),
        w === 0 && M && (clearInterval(H),
        D(!1),
        L(!0)),
        () => clearInterval(H)
    }
    , [w, M]);
    const R = async () => {
        var H, N, O, q, ae;
        h(!0);
        try {
            const j = await ke("/api/v2/registration-otp", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    otp: d
                }
            });
            j.status_code === 200 ? (localStorage.setItem("access_token", (H = j == null ? void 0 : j.data) == null ? void 0 : H.access_token),
            window.dispatchEvent(new Event("tokenUpdate")),
            localStorage.setItem("auth_name", (N = j == null ? void 0 : j.data) == null ? void 0 : N.name),
            localStorage.setItem("auth_email", (O = j == null ? void 0 : j.data) == null ? void 0 : O.email),
            localStorage.setItem("auth_phone", (q = j == null ? void 0 : j.data) == null ? void 0 : q.mobile_no),
            localStorage.setItem("auth_photo", (ae = j == null ? void 0 : j.data) == null ? void 0 : ae.profile_image),
            localStorage.removeItem("user_pwd"),
            o("/application")) : S({
                message: j == null ? void 0 : j.message,
                type: "error"
            })
        } catch (j) {
            const k = j
              , X = typeof k == "object" && (k != null && k.message) ? k.message : "Failed. Please try again later."
              , K = typeof k == "object" && typeof k.status == "number" ? k.status : 422;
            (K === 401 || K === 419) && (S({
                message: X,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            S({
                message: X,
                type: "error"
            })
        } finally {
            h(!1)
        }
    }
    ;
    return f.jsxs(oe.div, {
        className: "bg-white w-full p-4",
        variants: B,
        initial: "hidden",
        animate: "visible",
        children: [x && f.jsx(Rt, {
            message: x.message,
            type: x.type,
            onClose: () => S(null)
        }), f.jsxs("p", {
            className: "text-[10px]",
            children: [($ = s == null ? void 0 : s.lblAuthOtp1) == null ? void 0 : $[l], " (", m, ")"]
        }), f.jsx("p", {
            className: "text-[10px]",
            children: (te = s == null ? void 0 : s.lblAuthOtp2) == null ? void 0 : te[l]
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(J = s == null ? void 0 : s.lblInputAuthOtp) == null ? void 0 : J[l], " ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: [" *", (se = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : se[l]]
            })]
        }), f.jsx("input", {
            type: "text",
            id: "otp",
            autoComplete: "on",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-sm focus:ring-0 focus:border-slate-400 duration-300 border-[1.5px] focus:outline-0 block w-full p-2.5 my-2",
            placeholder: (he = s == null ? void 0 : s.lblInputOtp) == null ? void 0 : he[l],
            inputMode: "numeric",
            value: d,
            maxLength: 6,
            onChange: H => {
                const N = H.target.value.replace(/\D/g, "");
                p(N)
            }
        }), f.jsx(oe.button, {
            type: "button",
            disabled: c || !v,
            whileTap: {
                scale: .95
            },
            className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
              ${c || !v ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838]"}`,
            onClick: !c && v ? R : void 0,
            children: c ? (pe = s == null ? void 0 : s.checking) == null ? void 0 : pe[l] : (de = s == null ? void 0 : s.lblProceed) == null ? void 0 : de[l]
        }), f.jsx(oe.button, {
            onClick: F,
            disabled: !U,
            className: `text-white mb-2 mt-2 md:ml-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition ${U ? "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`,
            children: U ? (re = s == null ? void 0 : s.resendOtp) == null ? void 0 : re[l] : ((ee = s == null ? void 0 : s.resendOtp) == null ? void 0 : ee[l]) + ` ${w}s`
        })]
    })
}
  , rw = ({setStep: n}) => {
    var w, C, M, D, U;
    const {language: l, translations: s} = ct()
      , [o,c] = T.useState("");
    let h = o.trim() !== "" && o.length >= 11;
    const [d,p] = T.useState(!1)
      , [m,g] = T.useState(null)
      , v = L => {
        const B = L.target.value.replace(/\D/g, "");
        c(B)
    }
      , x = async () => {
        var L, B;
        p(!0);
        try {
            h = !1;
            const F = await ke("/api/v2/change-password", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    mobile_no: o
                }
            });
            F.status_code === 200 ? (localStorage.setItem("user_phone", o),
            localStorage.setItem("user_email", (L = F.data) == null ? void 0 : L.email),
            n((B = F.data) != null && B.email_confirmed ? 9 : 8)) : g({
                message: F == null ? void 0 : F.message,
                type: "error"
            })
        } catch (F) {
            const R = F
              , $ = typeof R == "object" && (R != null && R.message) ? R.message : "Failed. Please try again later."
              , te = typeof R == "object" && typeof R.status == "number" ? R.status : 422;
            (te === 401 || te === 419) && (g({
                message: $,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            g({
                message: $,
                type: "error"
            })
        } finally {
            p(!1)
        }
    }
      , S = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .6,
                ease: "easeOut"
            }
        }
    };
    return f.jsxs(oe.div, {
        className: "bg-white w-full p-4",
        variants: S,
        initial: "hidden",
        animate: "visible",
        children: [m && f.jsx(Rt, {
            message: m.message,
            type: m.type,
            onClose: () => g(null)
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(w = s == null ? void 0 : s.lblInputLoginMobilePassChange) == null ? void 0 : w[l], " ", " ", f.jsx("span", {
                className: "text-red-600 text-[10px]",
                children: (C = s == null ? void 0 : s.lblInputLoginMobileMsg) == null ? void 0 : C[l]
            })]
        }), f.jsx("input", {
            type: "tel",
            id: "phone",
            autoComplete: "on",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (M = s == null ? void 0 : s.lblInputLoginMobile) == null ? void 0 : M[l],
            inputMode: "numeric",
            pattern: "[0-9]*",
            maxLength: 11,
            value: o,
            onChange: v
}), f.jsx(oe.button, {
    type: "button",
    whileTap: { scale: .95 },
    whileHover: { scale: 1.03 }, // সবসময় hover effect
    className: "text-white mb-2 h-8 rounded-lg text-xs w-full duration-300 sm:w-auto px-2 py-2 text-center transition bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer",
    onClick: x, // সবসময় click করলে x() call হবে
    children: (U = s == null ? void 0 : s.lblProceed) == null ? void 0 : U[l]
})
]
    })
}
  , uw = ({setStep: n}) => {
    var C, M, D, U, L, B, F;
    const {language: l, translations: s} = ct()
      , [o,c] = T.useState("")
      , [h,d] = T.useState("")
      , [p,m] = T.useState(null)
      , [g,v] = T.useState(!1)
      , x = o.trim() !== "" && Vy(o);
    T.useEffect( () => {
        const R = localStorage.getItem("user_email");
        if (R)
            try {
                const $ = JSON.parse(R);
                d($)
            } catch {
                d(R)
            }
    }
    , []);
    const S = async () => {
        try {
            v(!0);
            const R = await ke("/api/v2/change-password-email-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    email: o
                }
            });
            R.status_code === 200 ? n(9) : m({
                message: R == null ? void 0 : R.message,
                type: "error"
            })
        } catch (R) {
            const $ = R
              , te = typeof $ == "object" && ($ != null && $.message) ? $.message : "Failed. Please try again later."
              , J = typeof $ == "object" && typeof $.status == "number" ? $.status : 422;
            (J === 401 || J === 419) && (m({
                message: te,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            m({
                message: te,
                type: "error"
            })
        } finally {
            v(!1)
        }
    }
      , w = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .6,
                ease: "easeOut"
            }
        }
    };
    return f.jsxs(oe.div, {
        className: "bg-white w-full p-4",
        variants: w,
        initial: "hidden",
        animate: "visible",
        children: [p && f.jsx(Rt, {
            message: p.message,
            type: p.type,
            onClose: () => m(null)
        }), f.jsxs("p", {
            className: "text-xs",
            children: [(C = s == null ? void 0 : s.lblAuthFullEmail) == null ? void 0 : C[l], " (", h, ")"]
        }), f.jsx("p", {
            className: "text-xs my-1",
            children: (M = s == null ? void 0 : s.lblAuthFullEmail2) == null ? void 0 : M[l]
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(D = s == null ? void 0 : s.lblInputRegEmail) == null ? void 0 : D[l], " ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (U = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : U[l]]
            })]
        }), f.jsx("input", {
            type: "email",
            id: "phone",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (L = s == null ? void 0 : s.lblInputRegEmail) == null ? void 0 : L[l],
            value: o,
            onChange: R => c(R.target.value),
            autoComplete: "on",
        }), f.jsx(oe.button, {
		type: "button",
		disabled: false, // সবসময় active
		whileTap: { scale: .95 },
		whileHover: { scale: 1.03 },
		className: `text-white mb-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
		bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838]`,
		onClick: S, // সবসময় call হবে
		children: (F = s == null ? void 0 : s.lblProceed) == null ? void 0 : F[l]
	})
	]
    })
}
  , cw = ({setStep: n}) => {
    var R, $, te, J, se, he, pe, de, re;
    const {language: l, translations: s} = ct()
      , [o,c] = T.useState("")
      , [h,d] = T.useState(!1)
      , [p,m] = T.useState("")
      , [g,v] = T.useState(null)
      , [x,S] = T.useState(30)
      , [w,C] = T.useState(!0)
      , [M,D] = T.useState(!1)
      , U = o.trim() !== "" && o.length >= 6;
    T.useEffect( () => {
        const ee = localStorage.getItem("user_email");
        ee && m(ee)
    }
    , []);
    const L = async () => {
        var ee, H, N, O;
        d(!0);
        try {
            const q = localStorage.getItem("user_phone")
              , ae = localStorage.getItem("user_pwd")
              , j = await ke("/api/v2/change-password-otp", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    mobile_no: q,
                    password: ae,
                    otp: o
                }
            });
            j.status_code === 200 ? (localStorage.setItem("auth_name", (ee = j == null ? void 0 : j.data) == null ? void 0 : ee.name),
            localStorage.setItem("auth_email", (H = j == null ? void 0 : j.data) == null ? void 0 : H.email),
            localStorage.setItem("auth_phone", (N = j == null ? void 0 : j.data) == null ? void 0 : N.mobile_no),
            localStorage.setItem("auth_photo", (O = j == null ? void 0 : j.data) == null ? void 0 : O.profile_image),
            n(10)) : v({
                message: j == null ? void 0 : j.message,
                type: "error"
            })
        } catch (q) {
            const ae = q
              , j = typeof ae == "object" && (ae != null && ae.message) ? ae.message : "Failed. Please try again later."
              , k = typeof ae == "object" && typeof ae.status == "number" ? ae.status : 422;
            (k === 401 || k === 419) && (v({
                message: j,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            v({
                message: j,
                type: "error"
            })
        } finally {
            d(!1)
        }
    }
      , B = async () => {
        d(!0);
        try {
            const ee = localStorage.getItem("user_phone")
              , H = await ke("/api/v2/change-password", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    mobile_no: ee
                }
            });
            H.status_code === 200 ? (S(30),
            C(!0),
            D(!1)) : (S(30),
            C(!0),
            D(!1),
            v({
                message: H == null ? void 0 : H.message,
                type: "error"
            }))
        } catch (ee) {
            const H = ee
              , N = typeof H == "object" && (H != null && H.message) ? H.message : "Failed. Please try again later."
              , O = typeof H == "object" && typeof H.status == "number" ? H.status : 422;
            (O === 401 || O === 419) && (v({
                message: N,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            v({
                message: N,
                type: "error"
            })
        } finally {
            d(!1)
        }
    }
    ;
    T.useEffect( () => {
        let ee;
        return w && x > 0 && (ee = setInterval( () => {
            S(H => H - 1)
        }
        , 1e3)),
        x === 0 && w && (clearInterval(ee),
        C(!1),
        D(!0)),
        () => clearInterval(ee)
    }
    , [x, w]);
    const F = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .6,
                ease: "easeOut"
            }
        }
    };
    return f.jsxs(oe.div, {
        className: "bg-white w-full p-4",
        variants: F,
        initial: "hidden",
        animate: "visible",
        children: [g && f.jsx(Rt, {
            message: g.message,
            type: g.type,
            onClose: () => v(null)
        }), f.jsxs("p", {
            className: "text-[10px]",
            children: [(R = s == null ? void 0 : s.lblAuthOtp1) == null ? void 0 : R[l], " ", " ", " (", p, ")"]
        }), f.jsx("p", {
            className: "text-[10px]",
            children: ($ = s == null ? void 0 : s.lblAuthOtp2) == null ? void 0 : $[l]
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(te = s == null ? void 0 : s.lblInputAuthOtp) == null ? void 0 : te[l], " ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: [" *", (J = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : J[l]]
            })]
        }), f.jsx("input", {
            type: "text",
            id: "otp",
            autoComplete: "on",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-blue-400 focus:border-[0.1px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (se = s == null ? void 0 : s.lblInputOtp) == null ? void 0 : se[l],
            inputMode: "numeric",
            value: o,
            maxLength: 6,
            onChange: ee => {
                const H = ee.target.value.replace(/\D/g, "");
                c(H)
            }
        }), f.jsx(oe.button, {
            type: "button",
            disabled: h || !U,
            whileTap: {
                scale: .95
            },
            className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
               ${h || !U ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer"}`,
            onClick: U ? L : void 0,
            children: h ? ((he = s == null ? void 0 : s.checking) == null ? void 0 : he[l]) + "..." : (pe = s == null ? void 0 : s.lblProceed) == null ? void 0 : pe[l]
        }), f.jsx(oe.button, {
            onClick: B,
            disabled: !M,
            className: `text-white mb-2 mt-2 md:ml-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition ${M ? "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`,
            children: M ? (de = s == null ? void 0 : s.resendOtp) == null ? void 0 : de[l] : ((re = s == null ? void 0 : s.resendOtp) == null ? void 0 : re[l]) + ` ${x}s`
        })]
    })
}
  , fw = ({setStep: n}) => {
    var M, D, U, L, B, F, R, $, te;
    const {language: l, translations: s} = ct()
      , o = ba()
      , [c,h] = T.useState("")
      , [d,p] = T.useState(!1)
      , [m,g] = T.useState("")
      , [v,x] = T.useState(null)
      , S = c.trim() !== "" && c.length >= 6 && m.trim() !== "" && m.length >= 6
      , w = async () => {
        var J, se, he, pe, de;
        try {
            if (p(!0),
            c !== m) {
                x({
                    message: "Password and confirm password do not match",
                    type: "error"
                });
                return
            }
            const re = await ke("/api/v2/change-password-confirm", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    password: c,
                    password_confirmation: m
                }
            });
            re.status_code === 200 ? (localStorage.setItem("access_token", (J = re == null ? void 0 : re.data) == null ? void 0 : J.access_token),
            window.dispatchEvent(new Event("tokenUpdate")),
            localStorage.setItem("auth_name", (se = re == null ? void 0 : re.data) == null ? void 0 : se.name),
            localStorage.setItem("auth_email", (he = re == null ? void 0 : re.data) == null ? void 0 : he.email),
            localStorage.setItem("auth_phone", (pe = re == null ? void 0 : re.data) == null ? void 0 : pe.mobile_no),
            localStorage.setItem("auth_photo", (de = re == null ? void 0 : re.data) == null ? void 0 : de.profile_image),
            localStorage.removeItem("user_pwd"),
            o("/application")) : x({
                message: re == null ? void 0 : re.message,
                type: "error"
            })
        } catch (re) {
            const ee = re
              , H = typeof ee == "object" && (ee != null && ee.message) ? ee.message : "Failed. Please try again later."
              , N = typeof ee == "object" && typeof ee.status == "number" ? ee.status : 422;
            (N === 401 || N === 419) && (x({
                message: H,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            x({
                message: H,
                type: "error"
            })
        } finally {
            p(!1)
        }
    }
      , C = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .6,
                ease: "easeOut"
            }
        }
    };
    return f.jsxs(oe.div, {
        className: "bg-white w-full p-4",
        variants: C,
        initial: "hidden",
        animate: "visible",
        children: [v && f.jsx(Rt, {
            message: v.message,
            type: v.type,
            onClose: () => x(null)
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(M = s == null ? void 0 : s.lblInputPassword) == null ? void 0 : M[l], " ", " ", f.jsx("span", {
                className: "text-red-600 text-[10px]",
                children: (D = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : D[l]
            })]
        }), f.jsx("input", {
            type: "password",
            id: "password",
            autoComplete: "on",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-blue-400 focus:border-[0.1px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (U = s == null ? void 0 : s.lblInputPassword) == null ? void 0 : U[l],
            value: c,
            onChange: J => h(J.target.value)
        }), c.length > 0 && c.length < 6 && f.jsx("p", {
            className: "text-red-500 text-[11px] mb-2",
            children: (L = s == null ? void 0 : s.passwordMinLengthMsg) == null ? void 0 : L[l]
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(B = s == null ? void 0 : s.lblInputRePassword) == null ? void 0 : B[l], " ", " ", f.jsx("span", {
                className: "text-red-600 text-[10px]",
                children: (F = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : F[l]
            })]
        }), f.jsx("input", {
            type: "password",
            id: "password_confirm",
            autoComplete: "on",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-blue-400 focus:border-[0.1px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (R = s == null ? void 0 : s.lblInputRePassword) == null ? void 0 : R[l],
            value: m,
            onChange: J => g(J.target.value)
        }), f.jsx(oe.button, {
            type: "button",
            disabled: !S,
            whileTap: {
                scale: .95
            },
            className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
         ${d || !S ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer"}`,
            onClick: !d && S ? w : void 0,
            children: d ? (($ = s == null ? void 0 : s.checking) == null ? void 0 : $[l]) + "..." : (te = s == null ? void 0 : s.lblProceed) == null ? void 0 : te[l]
        })]
    })
}
  , dw = ({setStep: n}) => {
    var $, te, J, se, he, pe, de, re, ee, H;
    const {language: l, translations: s} = ct()
      , o = ba()
      , [c,h] = T.useState("")
      , [d,p] = T.useState(!1)
      , [m,g] = T.useState("")
      , v = c.trim() !== "" && c.length >= 6
      , [x,S] = T.useState(null)
      , [w,C] = T.useState(30)
      , [M,D] = T.useState(!0)
      , [U,L] = T.useState(!1)
      , B = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .6,
                ease: "easeOut"
            }
        }
    };
    T.useEffect( () => {
        const N = localStorage.getItem("user_email");
        N && g(N)
    }
    , []);
    const F = async () => {
        var N, O, q, ae, j;
        try {
            p(!0);
            const k = localStorage.getItem("user_phone")
              , X = localStorage.getItem("user_pwd")
              , K = await ke("/api/v2/login-otp", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    mobile_no: k,
                    password: X,
                    otp: c
                }
            });
            K.status_code === 200 ? (localStorage.setItem("access_token", (N = K == null ? void 0 : K.data) == null ? void 0 : N.access_token),
            window.dispatchEvent(new Event("tokenUpdate")),
            localStorage.setItem("auth_name", (O = K == null ? void 0 : K.data) == null ? void 0 : O.name),
            localStorage.setItem("auth_email", (q = K == null ? void 0 : K.data) == null ? void 0 : q.email),
            localStorage.setItem("auth_phone", (ae = K == null ? void 0 : K.data) == null ? void 0 : ae.mobile_no),
            localStorage.setItem("auth_photo", (j = K == null ? void 0 : K.data) == null ? void 0 : j.profile_image),
            localStorage.removeItem("user_pwd"),
            o("/application")) : S({
                message: K == null ? void 0 : K.message,
                type: "error"
            })
        } catch (k) {
            const X = k
              , K = typeof X == "object" && (X != null && X.message) ? X.message : "Failed. Please try again later."
              , le = typeof X == "object" && typeof X.status == "number" ? X.status : 422;
            (le === 401 || le === 419) && (S({
                message: K,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            S({
                message: K,
                type: "error"
            })
        } finally {
            p(!1)
        }
    }
      , R = async () => {
        p(!0);
        try {
            const N = localStorage.getItem("user_phone")
              , O = localStorage.getItem("user_pwd")
              , q = await ke("/api/v2/login", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    mobile_no: N,
                    password: O
                }
            });
            q.status_code === 200 ? (C(30),
            D(!0),
            L(!1)) : (C(30),
            D(!0),
            L(!1),
            S({
                message: q == null ? void 0 : q.message,
                type: "error"
            }))
        } catch (N) {
            const O = N
              , q = typeof O == "object" && (O != null && O.message) ? O.message : "Failed. Please try again later."
              , ae = typeof O == "object" && typeof O.status == "number" ? O.status : 422;
            (ae === 401 || ae === 419) && (S({
                message: q,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            S({
                message: q,
                type: "error"
            })
        } finally {
            p(!1)
        }
    }
    ;
    return T.useEffect( () => {
        let N;
        return M && w > 0 && (N = setInterval( () => {
            C(O => O - 1)
        }
        , 1e3)),
        w === 0 && M && (clearInterval(N),
        D(!1),
        L(!0)),
        () => clearInterval(N)
    }
    , [w, M]),
    f.jsxs(oe.div, {
        className: "bg-white w-full p-4",
        variants: B,
        initial: "hidden",
        animate: "visible",
        children: [x && f.jsx(Rt, {
            message: x.message,
            type: x.type,
            onClose: () => S(null)
        }), f.jsxs("p", {
            className: "text-[10px]",
            children: [($ = s == null ? void 0 : s.lblAuthOtp1) == null ? void 0 : $[l], " (", m, ")"]
        }), f.jsx("p", {
            className: "text-[10px]",
            children: (te = s == null ? void 0 : s.lblAuthOtp2) == null ? void 0 : te[l]
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(J = s == null ? void 0 : s.lblInputAuthOtp) == null ? void 0 : J[l], " ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: [" *", (se = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : se[l]]
            })]
        }), f.jsx("input", {
            type: "text",
            id: "otp",
            autoComplete: "on",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-sm focus:ring-0 focus:border-slate-400 duration-300 border-[1.5px] focus:outline-0 block w-full p-2.5 my-2",
            placeholder: (he = s == null ? void 0 : s.lblInputOtp) == null ? void 0 : he[l],
            inputMode: "numeric",
            value: c,
            maxLength: 6,
            onChange: N => {
                const O = N.target.value.replace(/\D/g, "");
                h(O)
            }
        }), f.jsxs("div", {
            children: [f.jsx(oe.button, {
                type: "button",
                whileTap: {
                    scale: .95
                },
                className: "text-white mb-2 mt-2 mr-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition bg-gray-400 hover:bg-[#218838] focus:ring-[#218838] cursor-pointer",
                onClick: () => n(1),
                children: (pe = s == null ? void 0 : s.back) == null ? void 0 : pe[l]
            }), f.jsx(oe.button, {
                type: "button",
                disabled: d || !v,
                whileTap: {
                    scale: .95
                },
                className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
               ${d || !v ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer"}`,
                onClick: v ? F : void 0,
                children: d ? ((de = s == null ? void 0 : s.checking) == null ? void 0 : de[l]) + "..." : (re = s == null ? void 0 : s.lblProceed) == null ? void 0 : re[l]
            }), f.jsx(oe.button, {
                onClick: R,
                disabled: !U,
                className: `text-white mb-2 mt-2 md:ml-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition ${U ? "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`,
                children: U ? (ee = s == null ? void 0 : s.resendOtp) == null ? void 0 : ee[l] : ((H = s == null ? void 0 : s.resendOtp) == null ? void 0 : H[l]) + ` ${w}s`
            })]
        })]
    })
}
;
async function Fy() {
    const n = localStorage.getItem("access_token")
      , l = {
        Accept: "application/json",
        language: "en"
    };
    return n && (l.Authorization = `Bearer ${n}`),
    await ke("/api/v2/home", {
        method: "GET",
        headers: l
    })
}
const Ht = n => {
    localStorage.clear(),
    window.dispatchEvent(new Event("tokenUpdate")),
    n("/")
}
;
var ya = {}, Kg;
function hw() {
    if (Kg)
        return ya;
    Kg = 1;
    var n = ya && ya.__createBinding || (Object.create ? function(S, w, C, M) {
        M === void 0 && (M = C);
        var D = Object.getOwnPropertyDescriptor(w, C);
        (!D || ("get"in D ? !w.__esModule : D.writable || D.configurable)) && (D = {
            enumerable: !0,
            get: function() {
                return w[C]
            }
        }),
        Object.defineProperty(S, M, D)
    }
    : function(S, w, C, M) {
        M === void 0 && (M = C),
        S[M] = w[C]
    }
    )
      , l = ya && ya.__setModuleDefault || (Object.create ? function(S, w) {
        Object.defineProperty(S, "default", {
            enumerable: !0,
            value: w
        })
    }
    : function(S, w) {
        S.default = w
    }
    )
      , s = ya && ya.__importStar || function(S) {
        if (S && S.__esModule)
            return S;
        var w = {};
        if (S != null)
            for (var C in S)
                C !== "default" && Object.prototype.hasOwnProperty.call(S, C) && n(w, S, C);
        return l(w, S),
        w
    }
    ;
    Object.defineProperty(ya, "__esModule", {
        value: !0
    }),
    ya.useTurnstile = void 0;
    const o = s($o())
      , c = typeof globalThis < "u" ? globalThis : window;
    let h = typeof c.turnstile < "u" ? "ready" : "unloaded", d, p;
    const m = new Promise( (S, w) => {
        p = {
            resolve: S,
            reject: w
        },
        h === "ready" && S(void 0)
    }
    );
    {
        const S = "cf__reactTurnstileOnLoad"
          , w = "https://challenges.cloudflare.com/turnstile/v0/api.js";
        d = () => {
            if (h === "unloaded") {
                h = "loading",
                c[S] = () => {
                    p.resolve(),
                    h = "ready",
                    delete c[S]
                }
                ;
                const C = `${w}?onload=${S}&render=explicit`
                  , M = document.createElement("script");
                M.src = C,
                M.async = !0,
                M.addEventListener("error", () => {
                    p.reject("Failed to load Turnstile."),
                    delete c[S]
                }
                ),
                document.head.appendChild(M)
            }
            return m
        }
    }
    function g({id: S, className: w, style: C, sitekey: M, action: D, cData: U, theme: L, language: B, tabIndex: F, responseField: R, responseFieldName: $, size: te, fixedSize: J, retry: se, retryInterval: he, refreshExpired: pe, appearance: de, execution: re, userRef: ee, onVerify: H, onSuccess: N, onLoad: O, onError: q, onExpire: ae, onTimeout: j, onAfterInteractive: k, onBeforeInteractive: X, onUnsupported: K}) {
        const le = (0,
        o.useRef)(null)
          , Z = (0,
        o.useState)({
            onVerify: H,
            onSuccess: N,
            onLoad: O,
            onError: q,
            onExpire: ae,
            onTimeout: j,
            onAfterInteractive: k,
            onBeforeInteractive: X,
            onUnsupported: K
        })[0]
          , G = ee ?? le
          , ve = J ? {
            width: te === "compact" ? "130px" : te === "flexible" ? "100%" : "300px",
            height: te === "compact" ? "120px" : "65px",
            ...C
        } : C;
        return (0,
        o.useEffect)( () => {
            if (!G.current)
                return;
            let ge = !1
              , xe = "";
            return (async () => {
                var Be, _e;
                if (h !== "ready")
                    try {
                        await d()
                    } catch (Ae) {
                        (Be = Z.onError) === null || Be === void 0 || Be.call(Z, Ae);
                        return
                    }
                if (ge || !G.current)
                    return;
                let He;
                const Et = {
                    sitekey: M,
                    action: D,
                    cData: U,
                    theme: L,
                    language: B,
                    tabindex: F,
                    "response-field": R,
                    "response-field-name": $,
                    size: te,
                    retry: se,
                    "retry-interval": he,
                    "refresh-expired": pe,
                    appearance: de,
                    execution: re,
                    callback: (Ae, tt) => {
                        var qt, We;
                        (qt = Z.onVerify) === null || qt === void 0 || qt.call(Z, Ae, He),
                        (We = Z.onSuccess) === null || We === void 0 || We.call(Z, Ae, tt, He)
                    }
                    ,
                    "error-callback": Ae => {
                        var tt;
                        return (tt = Z.onError) === null || tt === void 0 ? void 0 : tt.call(Z, Ae, He)
                    }
                    ,
                    "expired-callback": Ae => {
                        var tt;
                        return (tt = Z.onExpire) === null || tt === void 0 ? void 0 : tt.call(Z, Ae, He)
                    }
                    ,
                    "timeout-callback": () => {
                        var Ae;
                        return (Ae = Z.onTimeout) === null || Ae === void 0 ? void 0 : Ae.call(Z, He)
                    }
                    ,
                    "after-interactive-callback": () => {
                        var Ae;
                        return (Ae = Z.onAfterInteractive) === null || Ae === void 0 ? void 0 : Ae.call(Z, He)
                    }
                    ,
                    "before-interactive-callback": () => {
                        var Ae;
                        return (Ae = Z.onBeforeInteractive) === null || Ae === void 0 ? void 0 : Ae.call(Z, He)
                    }
                    ,
                    "unsupported-callback": () => {
                        var Ae;
                        return (Ae = Z.onUnsupported) === null || Ae === void 0 ? void 0 : Ae.call(Z, He)
                    }
                };
                xe = window.turnstile.render(G.current, Et),
                He = v(xe),
                (_e = Z.onLoad) === null || _e === void 0 || _e.call(Z, xe, He)
            }
            )(),
            () => {
                ge = !0,
                xe && window.turnstile.remove(xe)
            }
        }
        , [M, D, U, L, B, F, R, $, te, se, he, pe, de, re]),
        (0,
        o.useEffect)( () => {
            Z.onVerify = H,
            Z.onSuccess = N,
            Z.onLoad = O,
            Z.onError = q,
            Z.onExpire = ae,
            Z.onTimeout = j,
            Z.onAfterInteractive = k,
            Z.onBeforeInteractive = X,
            Z.onUnsupported = K
        }
        , [H, N, O, q, ae, j, k, X, K]),
        o.default.createElement("div", {
            ref: G,
            id: S,
            className: w,
            style: ve
        })
    }
    ya.default = g;
    function v(S) {
        return {
            execute: w => window.turnstile.execute(S, w),
            reset: () => window.turnstile.reset(S),
            getResponse: () => window.turnstile.getResponse(S),
            isExpired: () => window.turnstile.isExpired(S)
        }
    }
    function x() {
        const [S,w] = (0,
        o.useState)(h);
        return (0,
        o.useEffect)( () => {
            h !== "ready" && m.then( () => w(h))
        }
        , []),
        c.turnstile
    }
    return ya.useTurnstile = x,
    ya
}
var mw = hw();
const pw = Qg(mw)
  , gw = ({setActiveStep: n}) => {
    var _e, He, Et, Ae, tt, qt, We, Ea, Sa, Ca, la, La, Da, ka, Ee, Vt, at, zt, pt;
    const {language: l, translations: s} = ct()
      , o = ba()
      , [c,h] = T.useState(!1)
      , [d,p] = T.useState(null)
      , [m,g] = T.useState([])
      , [v,x] = T.useState("")
      , [S,w] = T.useState("")
      , [C,M] = T.useState("")
      , [D,U] = T.useState(!1)
      , [L,B] = T.useState([])
      , [F,R] = T.useState([])
      , [$,te] = T.useState("")
      , [J,se] = T.useState("")
      , [he,pe] = T.useState(0)
      , [de,re] = T.useState([])
      , [ee,H] = T.useState("")
      , [N,O] = T.useState("")
      , [q,ae] = T.useState("")
      , [j,k] = T.useState(!1)
      , [X,K] = T.useState("")
      , [le,Z] = T.useState(!1);
    T.useEffect( () => {
        const ie = localStorage.getItem("applicant");
        if (ie)
            try {
                const be = JSON.parse(ie);
                x(be.highcom || null),
                w(be.webfile_id || null),
                M(be.webfile_id_repeat || null),
                pe(be.visa_fee || null),
                O(be.family_count || null),
                ae(be.visit_purpose || null),
                H(be.visa_type || null),
                te(be.ivac_name || null),
                se(be.ivac_id || null)
            } catch {
                console.error("Invalid JSON in localStorage")
            }
    }
    , []),
    T.useEffect( () => {
        (async () => {
            var be, nt, Me, Fe, Je;
            try {
                const ze = await Fy();
                ze.status_code === 200 ? (Z((be = ze == null ? void 0 : ze.data) == null ? void 0 : be.slot_available),
                g((nt = ze == null ? void 0 : ze.data) == null ? void 0 : nt.centers),
                B((Me = ze == null ? void 0 : ze.data) == null ? void 0 : Me.ivacs),
                R((Fe = ze == null ? void 0 : ze.data) == null ? void 0 : Fe.ivacs),
                re((Je = ze == null ? void 0 : ze.data) == null ? void 0 : Je.visa_types),
                localStorage.setItem("initialData", JSON.stringify(ze.data))) : p({
                    message: ze == null ? void 0 : ze.message,
                    type: "error"
                })
            } catch (ze) {
                let Yt = "Failed to load initial data. Please try again later.";
                typeof ze == "object" && ze !== null && "message"in ze && (Yt = String(ze.message)),
                p({
                    message: Yt,
                    type: "error"
                })
            }
        }
        )()
    }
    , []);
    const G = async () => {
        try {
            k(!0);
            const ie = localStorage.getItem("access_token")
              , be = await ke("/api/v2/payment/check/" + S, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    language: l,
                    Authorization: `Bearer ${ie}`
                }
            });
            be.status_code === 200 ? U(!0) : (U(!1),
            p({
                message: be == null ? void 0 : be.message,
                type: "error"
            }))
        } catch (ie) {
            const be = ie
              , nt = typeof be == "object" && (be != null && be.message) ? be.message : "Failed to get payment data. Please try again later."
              , Me = typeof be == "object" && typeof be.status == "number" ? be.status : 422;
            (Me === 401 || Me === 419) && (p({
                message: "Unauthorized, session timed out",
                type: "error"
            }),
            setTimeout( () => {
                Ht(o)
            }
            , 5e3)),
            p({
                message: nt,
                type: "error"
            })
        } finally {
            k(!1)
        }
    }
    ;
    T.useEffect( () => {
        S.length === 12 && C.length === 12 && (S === C ? G() : p({
            message: "Web File ID does not match",
            type: "error"
        }))
    }
    , [S, C]);
    const ve = ie => {
        const be = ie.target.value;
        x(be);
        const nt = L.filter(Fe => Fe.center_info_id == be);
        R(nt),
        te(""),
        pe(0);
        const Me = localStorage.getItem("applicant");
        if (Me) {
            const Fe = JSON.parse(Me);
            "ivac_id"in Fe && delete Fe.ivac_id,
            "ivac_name"in Fe && delete Fe.ivac_name,
            localStorage.setItem("applicant", JSON.stringify(Fe))
        }
    }
      , ge = async ie => {
        var be;
        try {
            k(!0);
            const [nt,Me] = ie.target.value.split("|");
            te(nt),
            se(Me);
            const Fe = localStorage.getItem("access_token")
              , Je = await ke("/api/v2/payment/notify-amount-change", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l,
                    Authorization: `Bearer ${Fe}`
                },
                body: {
                    api_key: nt
                }
            });
            Je.status_code === 200 ? pe((be = Je == null ? void 0 : Je.data) == null ? void 0 : be.new_visa_fee) : p({
                message: (Je == null ? void 0 : Je.message) || "Failed to notify",
                type: "error"
            })
        } catch (nt) {
            const Me = nt
              , Fe = typeof Me == "object" && (Me != null && Me.message) ? Me.message : "Failed to get payment data. Please try again later."
              , Je = typeof Me == "object" && typeof Me.status == "number" ? Me.status : 422;
            (Je === 401 || Je === 419) && (p({
                message: "Unauthorized, session timed out",
                type: "error"
            }),
            setTimeout( () => {
                Ht(o)
            }
            , 5e3)),
            p({
                message: Fe,
                type: "error"
            })
        } finally {
            k(!1)
        }
    }
      , xe = v.trim() !== "" && S.trim() !== "" && S.length >= 12 && C.trim() !== "" && C.length >= 12 && D && $.trim() !== "" && he !== 0 && ee.trim() !== "" && N.trim() !== "" && q.trim() !== "" && q.length >= 15
      , Be = async () => {
        try {
            const ie = localStorage.getItem("access_token");
            h(!0);
            const nt = localStorage.getItem("is_edit") === "true" ? "/api/v2/payment/application-info-edit" : "/api/v2/payment/application-info-submit"
              , Me = await ke(nt, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l,
                    Authorization: `Bearer ${ie}`
                },
                body: {
                    highcom: v,
                    webfile_id: S,
                    webfile_id_repeat: C,
                    ivac_id: J,
                    visa_type: ee,
                    family_count: N,
                    visit_purpose: q,
                    captcha_token: X
                }
            });
            if (Me.status_code === 200) {
                n(2);
                const Fe = {
                    highcom: v,
                    webfile_id: S,
                    webfile_id_repeat: C,
                    ivac_id: J,
                    ivac_name: $,
                    visa_fee: he,
                    visa_type: ee,
                    family_count: N,
                    visit_purpose: q
                };
                localStorage.setItem("applicant", JSON.stringify(Fe))
            } else
                p({
                    message: Me == null ? void 0 : Me.message,
                    type: "error"
                });
            h(!1)
        } catch (ie) {
            h(!1);
            const be = ie
              , nt = typeof be == "object" && (be != null && be.message) ? be.message : "Failed to get payment data. Please try again later."
              , Me = typeof be == "object" && typeof be.status == "number" ? be.status : 422;
            (Me === 401 || Me === 419) && (p({
                message: "Unauthorized, session timed out",
                type: "error"
            }),
            setTimeout( () => {
                Ht(o)
            }
            , 5e3)),
            p({
                message: nt,
                type: "error"
            })
        }
    }
    ;
    return j ? f.jsx(Ry, {}) : f.jsxs("div", {
        className: "grid grid-cols-1 gap-x-6 gap-y-2",
        children: [d && f.jsx(Rt, {
            message: d.message,
            type: d.type,
            onClose: () => p(null)
        }), le ? f.jsxs(f.Fragment, {
            children: [f.jsxs("div", {
                className: "sm:col-span-3",
                children: [f.jsx("label", {
                    htmlFor: "high-commission",
                    className: "block text-xs font-light text-black uppercase",
                    children: (He = s == null ? void 0 : s.lblSelectHighCommission) == null ? void 0 : He[l]
                }), f.jsx("div", {
                    className: "mt-2",
                    children: f.jsxs("select", {
                        id: "center",
                        name: "center",
                        value: v,
                        onChange: ve,
                        className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 sm:text-sm/6",
                        children: [f.jsx("option", {
                            value: "",
                            disabled: !0,
                            hidden: !0,
                            className: "text-gray-500 font-light",
                            children: (Et = s == null ? void 0 : s.lblSelectHighCommission) == null ? void 0 : Et[l]
                        }), m.map(ie => f.jsx("option", {
                            value: ie.id,
                            className: "text-black font-light",
                            children: ie == null ? void 0 : ie.c_name
                        }, ie.id))]
                    })
                })]
            }), f.jsxs("div", {
                className: "sm:col-span-3",
                children: [f.jsxs("label", {
                    htmlFor: "first-name",
                    className: "block text-xs font-light text-black uppercase",
                    children: [(Ae = s == null ? void 0 : s.lblInputWebFile) == null ? void 0 : Ae[l], " ", f.jsxs("span", {
                        className: "text-red-600 text-[10px]",
                        children: ["(", (tt = s == null ? void 0 : s.lblMustFace7) == null ? void 0 : tt[l], ")"]
                    })]
                }), f.jsx("div", {
                    className: "mt-2",
                    children: f.jsx("input", {
                        type: "text",
                        name: "webfile_id",
                        id: "webfile_id",
                        maxLength: 12,
                        autoComplete: "on",
                        value: S,
                        onChange: ie => {
                            w(ie.target.value),
                            U(!1)
                        }
                        ,
                        className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"
                    })
                })]
            }), f.jsxs("div", {
                className: "sm:col-span-3",
                children: [f.jsxs("label", {
                    htmlFor: "first-name",
                    className: "block text-xs font-light text-black uppercase",
                    children: [(qt = s == null ? void 0 : s.lblInputWebFileAgain) == null ? void 0 : qt[l], " ", " ", f.jsxs("span", {
                        className: "text-red-600 text-[10px]",
                        children: ["*(", (We = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : We[l], ")"]
                    })]
                }), f.jsx("div", {
                    className: "mt-2",
                    children: f.jsx("input", {
                        type: "text",
                        name: "first-name",
                        id: "first-name",
                        maxLength: 12,
                        autoComplete: "on",
                        value: C,
                        onChange: ie => {
                            M(ie.target.value),
                            U(!1)
                        }
                        ,
                        className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-1 sm:text-sm/6"
                    })
                })]
            }), f.jsxs("div", {
                className: "sm:col-span-3",
                onClick: () => {
                    D || p({
                        message: "Please enter a valid Web File ID before selecting a center.",
                        type: "error"
                    })
                }
                ,
                children: [f.jsx("label", {
                    htmlFor: "first-name",
                    className: "block text-xs font-light text-black uppercase",
                    children: (Ea = s == null ? void 0 : s.lblInputSelectIvac) == null ? void 0 : Ea[l]
                }), f.jsx("div", {
                    className: "mt-2",
                    children: f.jsxs("select", {
                        id: "center",
                        name: "center",
                        disabled: !D,
                        value: $ && J ? `${$}|${J}` : "",
                        onChange: ge,
                        className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400  sm:text-sm/6",
                        children: [f.jsx("option", {
                            value: "",
                            disabled: !0,
                            hidden: !0,
                            children: (Sa = s == null ? void 0 : s.lblInputSelectIvac) == null ? void 0 : Sa[l]
                        }), F.map(ie => f.jsx("option", {
                            value: `${ie.app_key}|${ie.id}`,
                            children: ie.ivac_name
                        }, ie.id))]
                    })
                })]
            }), f.jsxs("div", {
                className: "sm:col-span-3",
                children: [f.jsxs("label", {
                    htmlFor: "first-name",
                    className: "block text-xs font-light text-black uppercase",
                    children: [(Ca = s == null ? void 0 : s.lblInputVisaType) == null ? void 0 : Ca[l], " ", " ", f.jsxs("span", {
                        className: "text-red-600 text-[10px]",
                        children: ["*(", (la = s == null ? void 0 : s.lblVisaTypeQueue) == null ? void 0 : la[l], ")"]
                    })]
                }), f.jsx("div", {
                    className: "mt-2",
                    children: f.jsxs("select", {
                        id: "visa_type",
                        name: "visa_type",
                        disabled: !D,
                        value: ee ?? "",
                        onChange: ie => H(ie.target.value),
                        className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6",
                        children: [f.jsx("option", {
                            value: "",
                            disabled: !0,
                            hidden: !0,
                            children: (La = s == null ? void 0 : s.lblInputVisaTypePlaceholder) == null ? void 0 : La[l]
                        }), de.map(ie => f.jsx("option", {
                            value: ie.id,
                            children: ie.type_name
                        }, ie.id))]
                    })
                })]
            }), f.jsxs("div", {
                className: "sm:col-span-3",
                children: [f.jsx("label", {
                    htmlFor: "first-name",
                    className: "block text-xs font-light text-black uppercase",
                    children: (Da = s == null ? void 0 : s.lblInputNumberOfFamily) == null ? void 0 : Da[l]
                }), f.jsx("div", {
                    className: "mt-2",
                    children: f.jsxs("select", {
                        id: "family_count",
                        name: "family_count",
                        disabled: !D,
                        value: N ?? "",
                        onChange: ie => O(ie.target.value),
                        className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6",
                        children: [f.jsx("option", {
                            value: "",
                            disabled: !0,
                            hidden: !0,
                            children: (ka = s == null ? void 0 : s.lblInputNoOfAppPlaceholder) == null ? void 0 : ka[l]
                        }), f.jsx("option", {
                            value: "0",
                            children: "0"
                        }), f.jsx("option", {
                            value: "1",
                            children: "1"
                        }), f.jsx("option", {
                            value: "2",
                            children: "2"
                        }), f.jsx("option", {
                            value: "3",
                            children: "3"
                        }), f.jsx("option", {
                            value: "4",
                            children: "4"
                        })]
                    })
                })]
            }), f.jsxs("div", {
                className: "sm:col-span-3",
                children: [f.jsxs("label", {
                    htmlFor: "first-name",
                    className: "block text-xs font-light text-black uppercase",
                    children: [(Ee = s == null ? void 0 : s.lblInputVisitPurpose) == null ? void 0 : Ee[l], " ", " ", f.jsxs("span", {
                        className: "text-red-600 uppercase text-[10px]",
                        children: ["*(", (Vt = s == null ? void 0 : s.noCopyPasteMinChar) == null ? void 0 : Vt[l], ")"]
                    })]
                }), f.jsx("div", {
                    className: "mt-2",
                    children: f.jsx("textarea", {
                        name: "visit_purpose",
                        id: "visit_purpose",
                        autoComplete: "on",
                        disabled: !D,
                        value: q,
                        onChange: ie => ae(ie.target.value),
                        className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"
                    })
                })]
            }), f.jsxs("div", {
                className: "sm:col-span-3",
                children: [f.jsx("label", {
                    htmlFor: "first-name",
                    className: "block text-xs font-light text-black uppercase",
                    children: (at = s == null ? void 0 : s.lblInputAmount) == null ? void 0 : at[l]
                }), f.jsxs("label", {
                    htmlFor: "first-name",
                    className: "block text-sm font-bold text-black uppercase",
                    children: ["BDT ", he !== 0 ? he : ""]
                })]
            }), f.jsx("div", {
                className: "sm:col-span-3",
                children: f.jsx(pw, {
                    sitekey: "0x4AAAAAABpNUpzYeppBoYpe",
                    onVerify: ie => K(ie)
                })
            }), f.jsx("div", {
			className: "sm:col-span-3",
			children: f.jsx(oe.button, {
			type: "button",
			whileTap: {
            scale: .95
			},
			className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full cursor-pointer sm:w-auto px-2 py-2 text-center transition duration-300
			bg-[#28a745] hover:bg-[#218838]
			`,
			onClick: Be, // সবসময় কল হবে
			children: (pt = s == null ? void 0 : s.lblSaveNext) == null ? void 0 : pt[l]
		})
	})
]
        }) : f.jsx("div", {
            className: "sm:col-span-3 flex justify-center h-[50vh]",
            children: f.jsx("p", {
                className: "flex items-center justify-center w-full h-screen-1/2  text-red-500 text-sm font-light rounded-md",
                children: ((_e = s == null ? void 0 : s.slotAvailableText) == null ? void 0 : _e[l]) ?? "Please wait until slot is available."
            })
        })]
    })
}
  , yw = ({setActiveStep: n}) => {
    var te, J, se, he, pe, de, re;
    const {language: l, translations: s} = ct()
      , o = ba()
      , [c,h] = T.useState(null)
      , [d,p] = T.useState(!1)
      , [m,g] = T.useState("")
      , [v,x] = T.useState("")
      , [S,w] = T.useState("")
      , [C,M] = T.useState("")
      , [D,U] = T.useState(0)
      , [L,B] = T.useState({});
    T.useEffect( () => {
        const ee = localStorage.getItem("applicant")
          , H = localStorage.getItem("personal_info")
          , N = O => localStorage.getItem(O) || "";
        if (g(N("auth_name")),
        x(N("auth_email")),
        w(N("auth_phone")),
        H) {
            const O = JSON.parse(H);
            B(O == null ? void 0 : O.family)
        }
        if (ee)
            try {
                const O = JSON.parse(ee);
                O && M(O.webfile_id),
                O.family_count && U(parseInt(O.family_count))
            } catch {
                console.error("Invalid JSON in localStorage")
            }
    }
    , []);
    const F = (ee, H, N) => {
        B(O => ({
            ...O,
            [ee + 1]: {
                ...O[ee + 1],
                [H]: N
            }
        }))
    }
      , R = () => {
        var H, N, O;
        const ee = [];
        if (m.trim() || ee.push("Full name is required."),
        v.trim() || ee.push("Email is required."),
        S.trim() || ee.push("Phone is required."),
        C.trim() || ee.push("Web file number is required."),
        D > 0)
            for (let q = 1; q <= D; q++) {
                const ae = L[q];
                (H = ae == null ? void 0 : ae.name) != null && H.trim() || ee.push(`Family member ${q}: Name is required.`),
                (N = ae == null ? void 0 : ae.webfile_no) != null && N.trim() || ee.push(`Family member ${q}: Web file number is required.`),
                (O = ae == null ? void 0 : ae.again_webfile_no) != null && O.trim() || ee.push(`Family member ${q}: Confirm web file number is required.`)
            }
        return ee.length > 0 ? {
            valid: !1,
            errors: ee
        } : {
            valid: !0
        }
    }
      , $ = async () => {
        try {
            p(!0);
            const {valid: ee, errors: H} = R();
            if (!ee && H.length > 0) {
                h({
                    message: `Please fix the following error:
` + H[0],
                    type: "error"
                }),
                p(!1);
                return
            }
            const N = localStorage.getItem("access_token")
              , q = localStorage.getItem("is_edit") === "true" ? "/api/v2/payment/personal-info-edit" : "/api/v2/payment/personal-info-submit"
              , ae = await ke(q, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l,
                    Authorization: `Bearer ${N}`
                },
                body: {
                    full_name: m,
                    email_name: v,
                    phone: S,
                    webfile_id: C,
                    family: L
                }
            });
            if (ae.status_code === 200) {
                const j = {
                    full_name: m,
                    email_name: v,
                    phone: S,
                    webfile_id: C,
                    family: L
                };
                localStorage.setItem("personal_info", JSON.stringify(j)),
                n(3),
                h({
                    message: "Amount change notified successfully",
                    type: "success"
                })
            } else
                h({
                    message: (ae == null ? void 0 : ae.message) || "Failed to notify",
                    type: "error"
                });
            p(!1)
        } catch (ee) {
            p(!1);
            const H = ee
              , N = typeof H == "object" && (H != null && H.message) ? H.message : "Failed to get payment data. Please try again later."
              , O = typeof H == "object" && typeof H.status == "number" ? H.status : 422;
            (O === 401 || O === 419) && (h({
                message: N,
                type: "error"
            }),
            setTimeout( () => {
                Ht(o)
            }
            , 5e3)),
            h({
                message: N,
                type: "error"
            })
        }
    }
    ;
    return f.jsxs("div", {
        className: "grid gap-x-6 gap-y-2",
        children: [c && f.jsx(Rt, {
            message: c.message,
            type: c.type,
            onClose: () => h(null)
        }), f.jsxs("div", {
            className: "sm:col-span-3",
            children: [f.jsx("label", {
                htmlFor: "first-name",
                className: "block text-xs font-light text-black uppercase",
                children: (te = s == null ? void 0 : s.lblInputName) == null ? void 0 : te[l]
            }), f.jsx("div", {
                className: "mt-2",
                children: f.jsx("input", {
                    type: "text",
                    name: "full-name",
                    id: "full-name",
                    value: m,
                    disabled: !0,
                    autoComplete: "on",
                    placeholder: (J = s == null ? void 0 : s.lblInputRegName) == null ? void 0 : J[l],
                    className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                })
            })]
        }), f.jsxs("div", {
            className: "sm:col-span-3",
            children: [f.jsx("label", {
                htmlFor: "first-name",
                className: "block text-xs font-light text-black uppercase",
                children: (se = s == null ? void 0 : s.lblInputEmail) == null ? void 0 : se[l]
            }), f.jsx("div", {
                className: "mt-2",
                children: f.jsx("input", {
                    type: "text",
                    name: "email",
                    id: "email",
                    value: v,
                    disabled: !0,
                    autoComplete: "on",
                    className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                })
            })]
        }), f.jsxs("div", {
            className: "sm:col-span-3",
            children: [f.jsx("label", {
                htmlFor: "first-name",
                className: "block text-xs font-light text-black uppercase",
                children: (he = s == null ? void 0 : s.lblInputContactNo) == null ? void 0 : he[l]
            }), f.jsx("div", {
                className: "mt-2",
                children: f.jsx("input", {
                    type: "text",
                    name: "user_phone",
                    id: "user_phone",
                    value: S,
                    disabled: !0,
                    autoComplete: "on",
                    className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                })
            })]
        }), f.jsxs("div", {
            className: "sm:col-span-3",
            children: [f.jsx("label", {
                htmlFor: "first-name",
                className: "block text-xs font-light text-black uppercase",
                children: (pe = s == null ? void 0 : s.ovWebID) == null ? void 0 : pe[l]
            }), f.jsx("div", {
                className: "mt-2",
                children: f.jsx("input", {
                    type: "text",
                    name: "webfile_id",
                    id: "webfile_id",
                    value: C,
                    disabled: !0,
                    autoComplete: "on",
                    className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                })
            })]
        }), f.jsxs("div", {
            className: "sm:col-span-3",
            children: [[...Array(D)].map( (ee, H) => {
                var N, O, q, ae, j, k, X, K, le, Z;
                return f.jsxs("div", {
                    className: "flex flex-col w-full gap-2",
                    children: [f.jsxs("div", {
                        className: "w-full",
                        children: [f.jsxs("label", {
                            htmlFor: "first-name",
                            className: "block text-xs font-light text-black uppercase my-2",
                            children: [(N = s == null ? void 0 : s.lblInputFamily) == null ? void 0 : N[l], " ", H + 1]
                        }), f.jsxs("label", {
                            htmlFor: "first-name",
                            className: "block text-xs font-light text-black uppercase",
                            children: [(O = s == null ? void 0 : s.lblInputFullName) == null ? void 0 : O[l], " ", " ", f.jsxs("span", {
                                className: "text-red-600 text-[10px]",
                                children: ["*(", (q = s == null ? void 0 : s.lblRequired) == null ? void 0 : q[l], ")"]
                            })]
                        }), f.jsx("div", {
                            className: "mt-2",
                            children: f.jsx("input", {
                                type: "text",
                                name: `full-name-${H}`,
                                id: `full-name-${H}`,
                                value: ((ae = L[H + 1]) == null ? void 0 : ae.name) || "",
                                onChange: G => F(H, "name", G.target.value),
                                autoComplete: "on",
                                className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"
                            })
                        })]
                    }), f.jsxs("div", {
                        className: "sm:col-span-3",
                        children: [f.jsxs("label", {
                            htmlFor: "first-name",
                            className: "block text-xs font-light text-black uppercase",
                            children: [(j = s == null ? void 0 : s.lblInputFamilyWebFile) == null ? void 0 : j[l], " ", " ", f.jsxs("span", {
                                className: "text-red-600 text-[10px]",
                                children: ["*(", (k = s == null ? void 0 : s.lblMustFace7) == null ? void 0 : k[l], ")"]
                            })]
                        }), f.jsx("div", {
                            className: "mt-2",
                            children: f.jsx("input", {
                                type: "text",
                                name: `web-file-number-${H}`,
                                id: `web-file-number-${H}`,
                                value: ((X = L[H + 1]) == null ? void 0 : X.webfile_no) || "",
                                onChange: G => F(H, "webfile_no", G.target.value),
                                autoComplete: "on",
                                className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"
                            })
                        })]
                    }), f.jsxs("div", {
                        className: "sm:col-span-3",
                        children: [f.jsxs("label", {
                            htmlFor: "first-name",
                            className: "block text-xs font-light text-black uppercase",
                            children: [(K = s == null ? void 0 : s.lblInputFamilyWebFileAgain) == null ? void 0 : K[l], " ", " ", f.jsxs("span", {
                                className: "text-red-600 text-[10px]",
                                children: ["*(", (le = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : le[l], ")"]
                            })]
                        }), f.jsx("div", {
                            className: "mt-2",
                            children: f.jsx("input", {
                                type: "text",
                                name: `web-file-number-repeat-${H}`,
                                id: `web-file-number-repeat-${H}`,
                                value: ((Z = L[H + 1]) == null ? void 0 : Z.again_webfile_no) || "",
                                onChange: G => F(H, "again_webfile_no", G.target.value),
                                autoComplete: "on",
                                className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"
                            })
                        })]
                    })]
                }, H)
            }
            ), f.jsx("div", {
                className: "sm:col-span-3",
                children: d ? f.jsxs(oe.button, {
                    type: "button",
                    whileTap: {
                        scale: .95
                    },
                    className: "text-white mb-2 duration-300 cursor-not-allowed mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition bg-gray-500 ",
                    children: [(de = s == null ? void 0 : s.checking) == null ? void 0 : de[l], "..."]
                }) : f.jsx(oe.button, {
                    type: "button",
                    whileTap: {
                        scale: .95
                    },
                    className: "text-white mb-2 duration-300 cursor-pointer mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition bg-[#28a745] hover:bg-[#218838]",
                    onClick: $,
                    children: (re = s == null ? void 0 : s.lblSaveNext) == null ? void 0 : re[l]
                })
            })]
        })]
    })
}
  , vw = ({setActiveStep: n}) => {
    var ae, j, k, X, K, le;
    const l = ba()
      , {language: s, translations: o} = ct()
      , [c,h] = T.useState(0)
      , [d,p] = T.useState(-1)
      , [m,g] = T.useState(null)
      , [v,x] = T.useState(null)
      , [S,w] = T.useState(null)
      , [C,M] = T.useState(null)
      , [D,U] = T.useState(null)
      , [L,B] = T.useState(null)
      , [F,R] = T.useState({})
      , [$,te] = T.useState(!1)
      , [J,se] = T.useState(null)
      , [he,pe] = T.useState(null)
      , [de,re] = T.useState(!1)
      , ee = async () => {
        if (de) {
            te(!0);
            const Z = localStorage.getItem("access_token");
            try {
                const G = await ke("/api/v2/payment/overview-submit", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        language: s,
                        Authorization: `Bearer ${Z}`
                    }
                });
                if (te(!1),
                G.status_code === 200) {
                    const ve = localStorage.getItem("applicant")
                      , ge = localStorage.getItem("personal_info");
                    ve && localStorage.setItem("applicant_backup", ve),
                    ge && localStorage.setItem("personal_info_backup", ge),
                    localStorage.removeItem("applicant"),
                    localStorage.removeItem("personal_info"),
                    n(4),
                    g({
                        message: G == null ? void 0 : G.message,
                        type: "success"
                    })
                } else
                    g({
                        message: G == null ? void 0 : G.message,
                        type: "error"
                    })
            } catch (G) {
                const ve = G
                  , ge = typeof ve == "object" && (ve != null && ve.message) ? ve.message : "Failed to get payment data. Please try again later."
                  , xe = typeof ve == "object" && typeof ve.status == "number" ? ve.status : 422;
                (xe === 401 || xe === 419) && (g({
                    message: ge,
                    type: "error"
                }),
                setTimeout( () => {
                    Ht(l)
                }
                , 5e3)),
                g({
                    message: ge,
                    type: "error"
                })
            }
        }
    }
    ;
    T.useEffect( () => {
        const Z = xe => localStorage.getItem(xe) || "";
        x(Z("auth_name")),
        w(Z("auth_email")),
        U(Z("auth_phone")),
        U(Z("auth_phone"));
        const G = localStorage.getItem("personal_info");
        if (G) {
            const xe = JSON.parse(G);
            R(xe == null ? void 0 : xe.family)
        }
        const ve = localStorage.getItem("applicant")
          , ge = localStorage.getItem("initialData");
        if (ve && ge)
            try {
                const xe = JSON.parse(ve)
                  , Be = JSON.parse(ge);
                if (M(xe.visa_fee || null),
                B(xe.webfile_id || null),
                Be != null && Be.ivacs && (xe == null ? void 0 : xe.ivac_id) !== void 0) {
                    const _e = Be.ivacs.find(He => He.id == xe.ivac_id);
                    _e && se(_e.ivac_name)
                }
                if (Be != null && Be.visa_types && (xe == null ? void 0 : xe.visa_type) !== void 0) {
                    const _e = Be.visa_types.find(He => He.id == xe.visa_type);
                    _e && pe(_e.type_name)
                }
            } catch (xe) {
                const Be = xe
                  , _e = typeof Be == "object" && (Be != null && Be.message) ? Be.message : "Failed to get payment data. Please try again later."
                  , He = typeof Be == "object" && typeof Be.status == "number" ? Be.status : 422;
                (He === 401 || He === 419) && Ht(l),
                g({
                    message: _e,
                    type: "error"
                })
            }
    }
    , []),
    T.useEffect( () => {
        const Z = localStorage.getItem("applicant");
        if (Z) {
            const G = JSON.parse(Z);
            G.family_count && h(parseInt(G.family_count))
        }
    }
    , []);
    const H = Z => {
        p(G => G === Z ? null : Z)
    }
      , N = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .6
            }
        }
    }
      , O = {
        hidden: {
            opacity: 0,
            y: 10,
            scale: .95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: .3
            }
        }
    }
      , q = ["ovWebID", "ovIvacCenter", "ovVisaType", "ovFees", "ovName", "ovEmail", "ovContact"];
    return f.jsxs(oe.div, {
        className: "flex flex-col",
        variants: N,
        initial: "hidden",
        animate: "visible",
        children: [m && f.jsx(Rt, {
            message: m.message,
            type: m.type,
            onClose: () => g(null)
        }), f.jsxs("div", {
            className: "flex flex-row gap-2 items-center p-2 bg-green-50 border-[0.2px] border-green-100 rounded cursor-pointer",
            onClick: () => H(-1),
            children: [f.jsxs("p", {
                className: "text-xs md:text-sm font-light text-white rounded-md bg-black text-center p-2 min-w-[110px]",
                children: [(ae = o == null ? void 0 : o.application_text) == null ? void 0 : ae[s], " #1"]
            }), f.jsxs("p", {
                className: "text-green-700 text-xs  hover:cursor-pointer font-bold cursor-pointer hover:underline",
                children: [L ?? "", " (", (j = o == null ? void 0 : o.btnExpandOrClose) == null ? void 0 : j[s], ")"]
            })]
        }), f.jsx(oe.div, {
            initial: !1,
            animate: {
                height: d === -1 ? "auto" : 0,
                opacity: d === -1 ? 1 : 0
            },
            transition: {
                duration: .3
            },
            className: `overflow-hidden mt-2 rounded-md border-[0.2px] border-slate-300 ${d === -1 ? "py-4 mb-4" : ""}`,
            children: d === -1 && f.jsxs(oe.div, {
                className: "flex flex-wrap md:px-4 relative text-center justify-center",
                children: [q.map( (Z, G) => {
                    var ve;
                    return f.jsxs(oe.div, {
                        variants: O,
                        initial: "hidden",
                        animate: "visible",
                        className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center w-[180px] md:w-1/3    ",
                        children: [f.jsx("p", {
                            className: "text-red-600 font-light text-[8px] md:text-[10px] break-words text-center w-full",
                            children: (ve = o == null ? void 0 : o[Z]) == null ? void 0 : ve[s]
                        }), f.jsx("p", {
                            className: "text-[12px] font-semibold break-words text-center w-full",
                            children: Z === "ovWebID" ? L || "N/A" : Z === "ovIvacCenter" ? J || "N/A" : Z === "ovVisaType" ? he || "N/A" : Z === "ovEmail" ? S || "N/A" : Z === "ovName" ? v || "N/A" : Z === "ovContact" ? D || "N/A" : Z === "ovFees" ? "BDT " + C || "N/A" : "NA"
                        })]
                    }, G)
                }
                ), f.jsx("div", {
                    className: "col-span-3 z-20 -mt-20 relative right-0 w-full flex justify-end items-end  ",
                    children: f.jsxs("div", {
                        className: "flex items-center gap-1 hover:text-green-800 duration-300 font-bold text-xs cursor-pointer w-fit pr-4 md:pr-0",
                        onClick: () => {
                            n(1),
                            localStorage.setItem("is_edit", "true")
                        }
                        ,
                        children: [(k = o == null ? void 0 : o.edit_text) == null ? void 0 : k[s], " ", f.jsx(Bg, {})]
                    })
                })]
            })
        }), [...Array(c)].map( (Z, G) => {
            var ve, ge, xe, Be;
            return f.jsxs(oe.div, {
                initial: "hidden",
                animate: "visible",
                children: [f.jsxs("div", {
                    className: "flex flex-row gap-2 items-center p-2 bg-green-50 border-[0.2px] border-green-100 rounded cursor-pointer",
                    onClick: () => H(G),
                    children: [f.jsxs("p", {
                        className: "text-xs md:text-sm font-light text-white rounded-md bg-black text-center p-2 min-w-[110px]",
                        children: [(ve = o == null ? void 0 : o.application_text) == null ? void 0 : ve[s], " #", G + 2]
                    }), f.jsxs("p", {
                        className: "text-green-700 text-xs  hover:cursor-pointer font-bold cursor-pointer hover:underline",
                        children: [(ge = Object.values(F)[G]) == null ? void 0 : ge.webfile_no, " (", (xe = o == null ? void 0 : o.btnExpandOrClose) == null ? void 0 : xe[s], ")"]
                    })]
                }), f.jsx(oe.div, {
                    initial: !1,
                    animate: {
                        height: d === G ? "auto" : 0,
                        opacity: d === G ? 1 : 0
                    },
                    transition: {
                        duration: .3
                    },
                    className: `overflow-hidden mt-2 rounded-md  border-[0.2px] border-slate-300 ${d === G ? "py-4 mb-4" : ""}`,
                    children: d === G && f.jsxs(oe.div, {
                        className: "flex flex-wrap md:px-4 relative text-center justify-center",
                        children: [q.map( (_e, He) => {
                            var Et, Ae, tt;
                            return f.jsxs(oe.div, {
                                variants: O,
                                initial: "hidden",
                                animate: "visible",
                                className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center w-[180px] md:w-1/3",
                                children: [f.jsx("p", {
                                    className: "text-red-600 font-light text-[8px] md:text-[10px] break-words text-center w-full",
                                    children: (Et = o == null ? void 0 : o[_e]) == null ? void 0 : Et[s]
                                }), f.jsx("p", {
                                    className: "text-[12px] font-semibold break-words text-center w-full",
                                    children: _e === "ovWebID" ? ((Ae = Object.values(F)[G]) == null ? void 0 : Ae.webfile_no) || "N/A" : _e === "ovIvacCenter" ? J || "N/A" : _e === "ovVisaType" ? he || "N/A" : _e === "ovEmail" ? S || "N/A" : _e === "ovName" ? ((tt = Object.values(F)[G]) == null ? void 0 : tt.name) || "N/A" : _e === "ovContact" ? D || "N/A" : _e === "ovFees" ? "BDT " + C || "N/A" : "NA"
                                })]
                            }, He)
                        }
                        ), f.jsx("div", {
                            className: "col-span-3 z-20 -mt-20 relative right-0 w-full flex justify-end items-end  ",
                            children: f.jsxs("div", {
                                className: "flex items-center gap-1 hover:text-green-900 duration-300 font-bold text-xs cursor-pointer w-fit pr-4 md:pr-0",
                                onClick: () => {
                                    n(2),
                                    localStorage.setItem("is_edit", "true")
                                }
                                ,
                                children: [(Be = o == null ? void 0 : o.edit_text) == null ? void 0 : Be[s], " ", f.jsx(Bg, {})]
                            })
                        })]
                    })
                })]
            }, G)
        }
        ), f.jsxs("div", {
            className: "space-y-2 max-w-md px-2 mt-4",
            children: [f.jsxs("div", {
                className: "flex items-center space-x-2",
                children: [f.jsx("input", {
                    type: "checkbox",
                    id: "terms",
                    checked: de,
                    onChange: Z => re(Z.target.checked)
                }), f.jsxs("label", {
                    htmlFor: "terms",
                    className: "text-sm font-light  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                    children: [(X = o == null ? void 0 : o.tcAgree) == null ? void 0 : X[s], " ", " ", f.jsx("a", {
                        href: "https://api-payment.ivacbd.com/contents/tos.html",
                        target: "_blank",
                        className: "text-blue-600 hover:underline",
                        children: (K = o == null ? void 0 : o.tcText) == null ? void 0 : K[s]
                    })]
                })]
            }), f.jsx("button", {
                onClick: de ? ee : void 0,
                disabled: !de,
                className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
                      ${de ? "bg-[#28a745] hover:bg-[#218838] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}
                    `,
                children: (le = o == null ? void 0 : o.conMovePay) == null ? void 0 : le[s]
            })]
        })]
    })
}
  , xw = ({setActiveStep: n}) => {
    var nt, Me, Fe, Je, ze, Yt, Ln, on, ne, we, gt, Gt, ls, ss, ul, cl, is, Ei, Ta, St, Ct, Ha, fl, Ci, Di, os, rn, dl, Pa, qa, un, Ya;
    const l = ba()
      , {language: s, translations: o} = ct()
      , [c,h] = T.useState(null)
      , [d,p] = T.useState(null)
      , [m,g] = T.useState(0)
      , [v,x] = T.useState(0)
      , [S,w] = T.useState(0)
      , [C,M] = T.useState("")
      , [D,U] = T.useState(!1)
      , [L,B] = T.useState("")
      , [F,R] = T.useState(!1)
      , [$,te] = T.useState([])
      , [J,se] = T.useState("")
      , [he,pe] = T.useState(!1)
      , [de,re] = T.useState([])
      , [ee,H] = T.useState("")
      , [N,O] = T.useState("")
      , [q,ae] = T.useState("")
      , [j,k] = T.useState("")
      , [X,K] = T.useState(!1)
      , [le,Z] = T.useState(!1)
      , [G,ve] = T.useState(!1)
      , [ge,xe] = T.useState(!1)
      , [Be,_e] = T.useState(!1)
      , [He,Et] = T.useState(!1)
      , [Ae,tt] = T.useState(0)
      , [qt,We] = T.useState("")
      , Ea = async () => {
        try {
            const ce = localStorage.getItem("access_token");
            _e(!0);
            const fe = await ke("/api/v2/captcha/generate-pay", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    language: s,
                    Authorization: `Bearer ${ce}`
                }
            });
            fe.status === "success" ? (O(fe.data.captcha_image),
            ae(fe.data.captcha_id)) : h({
                message: fe.message,
                type: "error"
            })
        } catch (ce) {
            const fe = ce
              , Ue = typeof fe == "object" && (fe != null && fe.message) ? fe.message : "Failed to get payment data. Please try again later."
              , Ne = typeof fe == "object" && typeof fe.status == "number" ? fe.status : 422;
            (Ne === 401 || Ne === 419) && (h({
                message: Ue,
                type: "error"
            }),
            setTimeout( () => {
                Ht(l)
            }
            , 5e3)),
            h({
                message: Ue,
                type: "error"
            })
        } finally {
            _e(!1)
        }
    }
    ;
    T.useEffect( () => {
        (async () => {
            var Ue, Ne, Pe, sa, rs, us;
            const fe = localStorage.getItem("access_token");
            try {
                const ft = await ke("/api/v2/payment/checkout", {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        language: s,
                        Authorization: `Bearer ${fe}`
                    }
                });
                ft.status_code === 200 ? (x((Ue = ft == null ? void 0 : ft.data) == null ? void 0 : Ue.convenience_fees),
                g((Ne = ft == null ? void 0 : ft.data) == null ? void 0 : Ne.fees),
                w((Pe = ft == null ? void 0 : ft.data) == null ? void 0 : Pe.payable_amount),
                M((sa = ft == null ? void 0 : ft.data) == null ? void 0 : sa.mobile_no),
                p((us = (rs = ft == null ? void 0 : ft.data) == null ? void 0 : rs.payment_options) == null ? void 0 : us.data)) : h({
                    message: ft.message,
                    type: "error"
                })
            } catch (ft) {
                const Jt = ft
                  , kn = typeof Jt == "object" && (Jt != null && Jt.message) ? Jt.message : "Failed to get payment data. Please try again later."
                  , ia = typeof Jt == "object" && typeof Jt.status == "number" ? Jt.status : 422;
                (ia === 401 || ia === 419) && (h({
                    message: kn,
                    type: "error"
                }),
                setTimeout( () => {
                    Ht(l)
                }
                , 5e3)),
                h({
                    message: kn,
                    type: "error"
                })
            }
        }
        )()
    }
    , []);
    const Sa = async ce => {
        const fe = localStorage.getItem("access_token");
        try {
            Z(!0);
            const Ue = await ke("/api/v2/payment/pay-otp-sent", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: s,
                    Authorization: `Bearer ${fe}`
                },
                body: {
                    resend: ce
                }
            });
            if (Ue.status_code === 200) {
                U(!0),
                tt(30);
                const Ne = setInterval( () => {
                    tt(Pe => Pe <= 1 ? (clearInterval(Ne),
                    0) : Pe - 1)
                }
                , 1e3)
            } else
                h({
                    message: Ue.message,
                    type: "error"
                })
        } catch (Ue) {
            const Ne = Ue
              , Pe = typeof Ne == "object" && (Ne != null && Ne.message) ? Ne.message : "Failed to get payment data. Please try again later."
              , sa = typeof Ne == "object" && typeof Ne.status == "number" ? Ne.status : 422;
            (sa === 401 || sa === 419) && (h({
                message: Pe,
                type: "error"
            }),
            setTimeout( () => Ht(l), 5e3)),
            h({
                message: Pe,
                type: "error"
            })
        } finally {
            Z(!1)
        }
    }
      , Ca = () => Sa(0)
      , la = () => Sa(1)
      , La = async () => {
        var fe;
        const ce = localStorage.getItem("access_token");
        try {
            if (L.length < 6) {
                h({
                    message: "Please enter 6 digit otp",
                    type: "error"
                });
                return
            }
            ve(!0);
            const Ue = await ke("/api/v2/payment/pay-otp-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: s,
                    Authorization: `Bearer ${ce}`
                },
                body: {
                    otp: L
                }
            });
            Ue.status_code === 200 ? (R(!0),
            te((fe = Ue == null ? void 0 : Ue.data) == null ? void 0 : fe.slot_dates)) : h({
                message: Ue.message,
                type: "error"
            })
        } catch (Ue) {
            const Ne = Ue
              , Pe = typeof Ne == "object" && (Ne != null && Ne.message) ? Ne.message : "Failed to get payment data. Please try again later."
              , sa = typeof Ne == "object" && typeof Ne.status == "number" ? Ne.status : 422;
            (sa === 401 || sa === 419) && (h({
                message: Pe,
                type: "error"
            }),
            setTimeout( () => {
                Ht(l)
            }
            , 5e3)),
            h({
                message: Pe,
                type: "error"
            })
        } finally {
            ve(!1)
        }
    }
      , Da = async ce => {
        var Ne;
        const fe = ce.target.value;
        se(fe);
        const Ue = localStorage.getItem("access_token");
        try {
            _e(!0);
            const Pe = await ke("/api/v2/payment/pay-slot-time", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: s,
                    Authorization: `Bearer ${Ue}`
                },
                body: {
                    appointment_date: fe
                }
            });
            Pe.status_code === 200 ? (re(((Ne = Pe == null ? void 0 : Pe.data) == null ? void 0 : Ne.slot_times) ?? []),
            pe(!0),
            Ea()) : h({
                message: Pe.message,
                type: "error"
            })
        } catch (Pe) {
            const sa = typeof Pe == "object" && (Pe != null && Pe.message) ? Pe.message : "Failed to verify email address";
            h({
                message: sa,
                type: "error"
            })
        } finally {
            _e(!1)
        }
    }
      , ka = async () => {
        try {
            _e(!0),
            xe(!0);
            const ce = localStorage.getItem("access_token")
              , fe = await ke("/api/v2/captcha/verify-pay", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: s,
                    Authorization: `Bearer ${ce}`
                },
                body: {
                    captcha_id: q,
                    captcha_input: j
                }
            });
            fe.status_code === 200 ? (K(!0),
            We("")) : We(fe.message)
        } catch (ce) {
            const fe = ce
              , Ue = typeof fe == "object" && (fe != null && fe.message) ? fe.message : "Failed to get payment data. Please try again later."
              , Ne = typeof fe == "object" && typeof fe.status == "number" ? fe.status : 422;
            (Ne === 401 || Ne === 419) && (h({
                message: Ue,
                type: "error"
            }),
            setTimeout( () => {
                Ht(l)
            }
            , 5e3)),
            We(Ue)
        } finally {
            _e(!1),
            xe(!1)
        }
    }
      , [Ee,Vt] = T.useState(null)
      , at = J.trim() !== "" && J.length >= 6 && ee.trim() !== "" && ee.length >= 6 && Ee !== null && Ee.item.name.trim() !== "" && Ee.item.slug.trim() !== "" && Ee.item.link.trim() !== "" && j.trim() !== "" && j.length >= 6 && X
      , zt = async () => {
        const ce = localStorage.getItem("access_token");
        try {
            Et(!0);
            const fe = await ke("/api/v2/payment/pay-now", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: s,
                    Authorization: `Bearer ${ce}`
                },
                body: {
                    appointment_date: J,
                    appointment_time: ee,
                    hash_param: q,
                    selected_payment: {
                        name: Ee.item.name,
                        slug: Ee.item.slug,
                        link: Ee.item.link
                    }
                }
            });
            fe.status_code === 200 ? (localStorage.clear(),
            window.location.href = fe.data.url) : h({
                message: fe.message,
                type: "error"
            })
        } catch (fe) {
            const Ue = fe
              , Ne = typeof Ue == "object" && (Ue != null && Ue.message) ? Ue.message : "Failed to get payment data. Please try again later."
              , Pe = typeof Ue == "object" && typeof Ue.status == "number" ? Ue.status : 422;
            (Pe === 401 || Pe === 419) && (h({
                message: Ne,
                type: "error"
            }),
            setTimeout( () => {
                Ht(l)
            }
            , 5e3)),
            h({
                message: Ne,
                type: "error"
            })
        } finally {
            Et(!1)
        }
    }
      , [pt,ie] = T.useState("")
      , be = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .6
            }
        }
    };
    return Be ? f.jsx(Ry, {}) : f.jsxs(oe.div, {
        className: "flex flex-col",
        variants: be,
        initial: "hidden",
        animate: "visible",
        children: [c && f.jsx(Rt, {
            message: c.message,
            type: c.type,
            onClose: () => h(null)
        }), f.jsx("div", {
            className: "max-h-screen bg-gray-50 md:p-4",
            children: f.jsxs("div", {
                className: "max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8",
                children: [f.jsx("div", {
                    className: "bg-white rounded-lg p-5 md:p-6 shadow-sm",
                    children: f.jsxs("div", {
                        className: "space-y-6 h-full flex flex-col justify-around",
                        children: [f.jsxs("div", {
                            className: "flex space-x-2 flex-col",
                            children: [f.jsxs("h3", {
                                className: "text-sm  text-gray-700 mb-3 font-bold",
                                children: [(nt = o == null ? void 0 : o.payCard) == null ? void 0 : nt[s], " "]
                            }), f.jsx("div", {
                                className: "boxes flex flex-row justify-start gap-4 flex-wrap",
                                children: (d == null ? void 0 : d.cards) && Object.keys(d.cards).length > 0 && Object.entries(d.cards).map( ([ce,fe]) => f.jsx("div", {
                                    className: `w-18 h-16 flex items-center justify-center rounded-lg border-[1px] border-slate-300 shadow hover:cursor-pointer hover:border-[#0074D4] duration-300 ${(Ee == null ? void 0 : Ee.type) === "cards" && Ee.key === ce ? "ring-2 ring-[#0074D4]" : ""}`,
                                    onClick: () => Vt({
                                        type: "cards",
                                        key: ce,
                                        item: fe
                                    }),
                                    children: f.jsx("img", {
                                        src: fe.link,
                                        alt: fe.name,
                                        className: "w-10 h-10 object-contain"
                                    })
                                }, ce))
                            })]
                        }), f.jsxs("div", {
                            className: "flex space-x-2 flex-col",
                            children: [f.jsxs("h3", {
                                className: "text-sm font-bold text-gray-700 mb-3",
                                children: [(Me = o == null ? void 0 : o.payInt) == null ? void 0 : Me[s], " "]
                            }), f.jsx("div", {
                                className: "boxes flex flex-row justify-start gap-4 flex-wrap",
                                children: (d == null ? void 0 : d.internet) && Object.keys(d.internet).length > 0 && Object.entries(d.internet).map( ([ce,fe]) => f.jsx("div", {
                                    className: `w-18 h-16 flex items-center justify-center rounded-lg border-[1px] border-slate-300 shadow hover:cursor-pointer hover:border-[#0074D4] duration-300  ${(Ee == null ? void 0 : Ee.type) === "internet" && Ee.key === ce ? "ring-2 ring-[#0074D4]" : ""}`,
                                    onClick: () => Vt({
                                        type: "internet",
                                        key: ce,
                                        item: fe
                                    }),
                                    children: f.jsx("img", {
                                        src: fe.link,
                                        alt: fe.name,
                                        className: "w-full h-full object-contain"
                                    })
                                }, ce))
                            })]
                        }), f.jsxs("div", {
                            className: "flex space-x-2 flex-col",
                            children: [f.jsxs("h3", {
                                className: "text-sm font-bold text-gray-700 mb-3",
                                children: [(Fe = o == null ? void 0 : o.payMob) == null ? void 0 : Fe[s], " "]
                            }), f.jsx("div", {
                                className: "boxes flex flex-row justify-start gap-4 flex-wrap",
                                children: (d == null ? void 0 : d.mobile) && Object.keys(d.mobile).length > 0 && Object.entries(d.mobile).map( ([ce,fe]) => f.jsx("div", {
                                    className: `w-18 h-16 flex items-center justify-center rounded-lg border-[1px] border-slate-300 shadow hover:cursor-pointer hover:border-[#0074D4] duration-300 ${(Ee == null ? void 0 : Ee.type) === "mobile" && Ee.key === ce ? "ring-2 ring-[#0074D4]" : ""}`,
                                    onClick: () => Vt({
                                        type: "mobile",
                                        key: ce,
                                        item: fe
                                    }),
                                    children: f.jsx("img", {
                                        src: fe.link,
                                        alt: fe.name,
                                        className: "w-full h-full object-contain"
                                    })
                                }, ce))
                            })]
                        }), f.jsxs("div", {
                            className: "flex space-x-2 flex-col",
                            children: [f.jsx("h3", {
                                className: "text-sm font-bold text-gray-700 mb-3",
                                children: (Je = o == null ? void 0 : o.payOth) == null ? void 0 : Je[s]
                            }), f.jsx("div", {
                                className: "boxes flex flex-row justify-start gap-4 flex-wrap",
                                children: (d == null ? void 0 : d.others) && Object.keys(d.others).length > 0 && Object.entries(d.others).map( ([ce,fe]) => f.jsx("div", {
                                    className: `w-18 h-16 flex items-center justify-center rounded-lg border-[1px] border-slate-300 shadow hover:cursor-pointer hover:border-[#0074D4] duration-300 ${(Ee == null ? void 0 : Ee.type) === "others" && Ee.key === ce ? "ring-2 ring-[#0074D4]" : ""}`,
                                    onClick: () => Vt({
                                        type: "others",
                                        key: ce,
                                        item: fe
                                    }),
                                    children: f.jsx("img", {
                                        src: fe.link,
                                        alt: fe.name,
                                        className: "w-full h-full object-contain"
                                    })
                                }, ce))
                            })]
                        })]
                    })
                }), f.jsxs("div", {
                    className: "bg-white rounded-lg p-6 shadow-sm",
                    children: [f.jsx("div", {
                        className: "flex justify-end mb-4",
                        children: f.jsx("div", {
                            className: " px-4 py-2 rounded-lg text-sm font-medium",
                            children: f.jsx("img", {
                                src: ij,
                                className: "w-36",
                                alt: ""
                            })
                        })
                    }), f.jsx("div", {
                        className: "bg-blue-50 border border-gray-200 rounded-lg px-4 py-2 mb-4",
                        children: Ee ? f.jsxs("div", {
                            className: "flex justify-between items-center ",
                            children: [f.jsx("p", {
                                className: "font-bold",
                                children: (Yt = Ee == null ? void 0 : Ee.item) == null ? void 0 : Yt.name
                            }), f.jsx("img", {
                                src: (Ln = Ee == null ? void 0 : Ee.item) == null ? void 0 : Ln.link,
                                alt: (on = Ee == null ? void 0 : Ee.item) == null ? void 0 : on.name,
                                className: "w-10 h-10 object-contain"
                            })]
                        }) : f.jsxs("p", {
                            className: "text-gray-600 text-sm text-center",
                            children: [" ", (ze = o == null ? void 0 : o.paySelectOption) == null ? void 0 : ze[s], " "]
                        })
                    }), f.jsxs("div", {
                        className: "space-y-3 mb-4",
                        children: [f.jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [f.jsxs("span", {
                                className: "text-sm font-medium text-gray-700",
                                children: [" ", (ne = o == null ? void 0 : o.ovFees) == null ? void 0 : ne[s], " :"]
                            }), f.jsxs("span", {
                                className: "text-sm text-gray-900",
                                children: [m, " BDT"]
                            })]
                        }), v != "0.00" && f.jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [f.jsxs("span", {
                                className: "text-sm text-gray-600",
                                children: [" ", (we = o == null ? void 0 : o.payConvFee) == null ? void 0 : we[s], " :"]
                            }), f.jsxs("span", {
                                className: "text-sm text-gray-900",
                                children: [v, " BDT"]
                            })]
                        }), f.jsxs("div", {
                            className: "flex justify-between items-center pt-2 border-t",
                            children: [f.jsxs("span", {
                                className: "text-sm font-medium text-gray-700",
                                children: [(gt = o == null ? void 0 : o.payPayable) == null ? void 0 : gt[s], ":"]
                            }), f.jsxs("span", {
                                className: "text-sm font-medium text-gray-900",
                                children: [S, " BDT"]
                            })]
                        })]
                    }), f.jsxs("div", {
                        className: "mb-2",
                        children: [f.jsxs("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: [(Gt = o == null ? void 0 : o.payPhone) == null ? void 0 : Gt[s], ":"]
                        }), f.jsxs("div", {
                            className: "flex items-center gap-3 rounded-md flex-wrap",
                            children: [f.jsx("input", {
                                type: "tel",
                                value: C,
                                disabled: !0,
                                className: "flex-1 px-3 py-2 text-sm rounded-md border border-gray-300 bg-gray-100 text-gray-700 focus:outline-none",
                                placeholder: "Mobile number",
                                autoComplete: "off"
                            }), !F && f.jsx("button", {
                                onClick: le || Ae > 0 ? void 0 : D ? la : Ca,
                                disabled: le || Ae > 0,
                                className: `bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors duration-200 ${le || Ae > 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700 hover:cursor-pointer"}`,
                                children: le ? `${(ls = o == null ? void 0 : o.checking) == null ? void 0 : ls[s]}...` : Ae > 0 ? `${Ae}s` : D ? (ss = o == null ? void 0 : o.resendOtp) == null ? void 0 : ss[s] : (ul = o == null ? void 0 : o.lblInputSentOtp) == null ? void 0 : ul[s]
                            })]
                        })]
                    }), F && f.jsx("div", {
                        className: "mb-2",
                        children: f.jsxs("p", {
                            className: "text-[10px] font-light text-green-500",
                            children: [(cl = o == null ? void 0 : o.payPhone) == null ? void 0 : cl[s], " ", " ", " ", (is = o == null ? void 0 : o.verified) == null ? void 0 : is[s], " "]
                        })
                    }), D && !F && f.jsxs("div", {
                        className: "mb-2",
                        children: [f.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: (Ei = o == null ? void 0 : o.verifyOtp) == null ? void 0 : Ei[s]
                        }), f.jsxs("div", {
                            className: "flex items-center gap-3 rounded-md md:flex-nowrap flex-wrap",
                            children: [f.jsx("input", {
                                type: "tel",
                                value: L,
                                onChange: ce => B(ce.target.value),
                                className: "flex-1 px-3 py-2 text-sm rounded-md border border-gray-300 bg-gray-100 text-gray-700 focus:outline-none",
                                placeholder: (Ta = o == null ? void 0 : o.lblInputOtp) == null ? void 0 : Ta[s],
                                autoComplete: "off"
                            }), f.jsx("button", {
                                onClick: L.length >= 6 && !G ? La : void 0,
                                disabled: L.length < 6 || G,
                                className: `bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors duration-300 ${L.length < 6 || G ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700 hover:cursor-pointer"}`,
                                children: G ? ((St = o == null ? void 0 : o.checking) == null ? void 0 : St[s]) + "..." : (Ct = o == null ? void 0 : o.verify) == null ? void 0 : Ct[s]
                            })]
                        })]
                    }), F && f.jsxs("div", {
                        className: "my-4",
                        children: [f.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: (Ha = o == null ? void 0 : o.lblInputAppointDate) == null ? void 0 : Ha[s]
                        }), f.jsxs("select", {
                            id: "appointment_date",
                            name: "appointment_date",
                            value: J ?? "",
                            onChange: Da,
                            className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6",
                            children: [f.jsx("option", {
                                value: "",
                                disabled: !0,
                                hidden: !0,
                                children: (fl = o == null ? void 0 : o.lblInputAppointment) == null ? void 0 : fl[s]
                            }), $ && Object.keys($).length > 0 && Object.entries($).map( ([ce,fe]) => f.jsx("option", {
                                value: fe,
                                children: fe
                            }, ce))]
                        })]
                    }), he && f.jsxs("div", {
                        className: "mb-6 mt-2",
                        children: [f.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: (Ci = o == null ? void 0 : o.lblInputAppointTime) == null ? void 0 : Ci[s]
                        }), f.jsxs("select", {
                            id: "appointment_date",
                            name: "appointment_date",
                            value: ee ?? "",
                            onChange: ce => H(ce.target.value),
                            className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6",
                            children: [f.jsx("option", {
                                value: "",
                                disabled: !0,
                                hidden: !0,
                                children: (Di = o == null ? void 0 : o.selectAppointmentTime) == null ? void 0 : Di[s]
                            }), Array.isArray(de) && de.length > 0 && de.map(ce => f.jsx("option", {
                                value: ce.time_display,
                                children: ce.time_display
                            }, ce.id))]
                        })]
                    }), ee !== "" && f.jsxs("div", {
                        className: "flex flex-col justify-between items-center gap-4 mb-6 mt-2",
                        children: [f.jsxs("div", {
                            className: "flex",
                            children: [f.jsx("img", {
                                src: N,
                                alt: "Captcha",
                                className: "w-full h-10 object-contain"
                            }), f.jsx("div", {
                                className: "ml-2 mt-1 hover:cursor-pointer hover:bg-blue-200 hover:rounded-md",
                                onClick: () => Ea(),
                                children: !X && f.jsx(Ey, {})
                            })]
f.jsxs("div", {
    className: "w-full flex flex-col gap-2",
    children: [
        f.jsxs("div", {
            className: "w-full flex items-center gap-2",
            children: [
                f.jsx("input", {
                    type: "text",
                    value: j || "", // safe value
                    maxLength: 6,
                    autoComplete: "on",
                    onChange: ce => k && k(ce.target.value),
                    className: "w-full h-10 px-3 py-2 text-sm rounded-md border border-gray-300 bg-gray-100 text-gray-700 focus:outline-none",
                    placeholder: (o?.enterCaptcha?.[s]) || "Enter code" // safe placeholder
                }),
                f.jsx("button", {
                    type: "button",
                    disabled: false, // সবসময় active
                    className: "h-10 px-4 text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 cursor-pointer transition-colors duration-300",
                    onClick: ka, // সবসময় call হবে
                    children: (o?.verify?.[s]) || "Verify" // safe value
                })
            ]
        }),
        f.jsx("p", {
            className: "text-xs text-red-500 mt-0",
            children: qt || "" // safe value
        })
    ]
})

        qt && f.jsx("p", {
            className: "text-xs text-red-500 mt-0",
            children: qt
        })
    ]
})
        qt !== "" && f.jsx("p", {
            className: "text-xs text-red-500 mt-0",
            children: qt
        })
    ]
})
                    }), f.jsx("button", {
    type: "button",
    disabled: false, // সবসময় active
    className: "w-full py-3 mb-2 rounded-lg duration-300 text-white bg-green-600 hover:bg-green-700 cursor-pointer",
    onClick: zt, // সবসময় call হবে
    children: (o?.payNow?.[s]) ?? "Pay Now" // safe access, fallback "Pay Now"
}), f.jsx("p", {
                        className: "text-xs text-red-500 text-center",
                        children: (Ya = o == null ? void 0 : o.msgTrans5min) == null ? void 0 : Ya[s]
                    })]
                })]
            })
        })]
    })
}
  , bw = () => {
    var p, m, g, v, x;
    const {language: n, translations: l} = ct()
      , [s,o] = T.useState( () => {
        const S = localStorage.getItem("authStep")
          , w = parseInt(S || "1", 10);
        return w >= 1 && w <= 4 ? w : 1
    }
    );
    T.useEffect( () => {
        localStorage.setItem("authStep", s.toString())
    }
    , [s]);
    const c = [{
        id: 1,
        name: (p = l == null ? void 0 : l.lblTabMenu1) == null ? void 0 : p[n]
    }, {
        id: 2,
        name: (m = l == null ? void 0 : l.lblTabMenu2) == null ? void 0 : m[n]
    }, {
        id: 3,
        name: (g = l == null ? void 0 : l.lblTabMenu3) == null ? void 0 : g[n]
    }, {
        id: 4,
        name: (v = l == null ? void 0 : l.lblTabMenu4) == null ? void 0 : v[n]
    }]
      , h = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .6,
                ease: "easeOut"
            }
        }
    }
      , d = {
        hidden: {
            opacity: 0,
            x: 20
        },
        visible: S => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: S * .3
            }
        })
    };
    return f.jsx(f.Fragment, {
        children: f.jsxs(oe.div, {
            className: "flex flex-col bg-[#b5d6a9] sm:mx-8 lg:mx-20 rounded-md shadow-lg border-[0.1px] border-slate-300 overflow-auto",
            variants: h,
            initial: "hidden",
            animate: "visible",
            children: [f.jsxs("div", {
                className: "flex flex-row gap-4 text-xs overflow-x-scroll border-b-[0.1px] border-slate-300 scroll-smooth scrollbar-hide",
                children: [f.jsx("p", {
                    className: "font-bold bg-white rounded-tl py-4 px-4",
                    children: (x = l == null ? void 0 : l.lblTabMenuAuth) == null ? void 0 : x[n]
                }), c.map( (S, w) => f.jsxs(oe.p, {
                    custom: w,
                    variants: d,
                    initial: "hidden",
                    animate: "visible",
                    className: "py-2 px-4 flex items-center min-w-[160px] text-[#5c7b2f] font-bold",
                    children: [f.jsx("span", {
                        className: "bg-white rounded-full px-2 py-1 mr-2 text-xs font-bold",
                        children: f.jsx("i", {
                            children: S.id
                        })
                    }), S.name]
                }, S.id))]
            }), f.jsxs("div", {
                className: "bg-white w-full py-1 md:px-2 lg:px-4",
                children: [s === 1 && f.jsx(rj, {
                    setStep: o
                }), s === 2 && f.jsx(uj, {
                    setStep: o
                }), s === 3 && f.jsx(cj, {
                    setStep: o
                }), s === 4 && f.jsx(fj, {
                    setStep: o
                }), s === 5 && f.jsx(iw, {
                    setStep: o
                }), s === 6 && f.jsx(ow, {
                    setStep: o
                }), s === 7 && f.jsx(rw, {
                    setStep: o
                }), s === 8 && f.jsx(uw, {
                    setStep: o
                }), s === 9 && f.jsx(cw, {
                    setStep: o
                }), s === 10 && f.jsx(fw, {
                    setStep: o
                }), s === 100 && f.jsx(dw, {
                    setStep: o
                })]
            })]
        })
    })
}
  , Sw = () => {
    var J, se, he, pe, de, re, ee, H, N, O, q, ae, j, k, X, K, le;
    const n = ba()
      , {language: l, translations: s} = ct()
      , [o,c] = T.useState("")
      , [h,d] = T.useState("")
      , [p,m] = T.useState(null)
      , [g,v] = T.useState(!1)
      , [x,S] = T.useState(null)
      , w = o && o.length >= 12 && h.trim() !== "" && h.length >= 6
      , [C,M] = T.useState("")
      , [D,U] = T.useState(!1)
      , [L,B] = T.useState("")
      , F = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .6,
                ease: "easeOut"
            }
        }
    }
      , R = {
        hidden: {
            opacity: 0,
            scale: .95,
            y: 10
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: .3
            }
        }
    }
      , $ = async () => {
        try {
            const Z = await ke("/api/v2/captcha/generate", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    language: l
                }
            });
            Z.status === "success" ? (M(Z.data.captcha_image),
            B(Z.data.captcha_id)) : m({
                message: Z.message,
                type: "error"
            })
        } catch (Z) {
            const G = Z
              , ve = typeof G == "object" && (G != null && G.message) ? G.message : "Failed to get payment data. Please try again later."
              , ge = typeof G == "object" && typeof G.status == "number" ? G.status : 422;
            (ge === 401 || ge === 419) && Ht(n),
            m({
                message: ve,
                type: "error"
            })
        }
    }
    ;
    T.useEffect( () => {
        $()
    }
    , []);
    const te = async () => {
        try {
            if (!w) {
                m({
                    message: "Please enter valid data",
                    type: "error"
                });
                return
            }
            U(!0);
            const Z = await ke("/api/v2/captcha/verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    captcha_id: L,
                    captcha_input: h
                }
            });
            if (Z.status_code === 200) {
                const G = await ke("/api/v2/get-payment-info", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        language: l
                    },
                    body: {
                        info: {
                            webfile_id: o,
                            query_captcha: h
                        }
                    }
                });
                G.status_code === 200 ? (v(!0),
                S(G.data)) : m({
                    message: (G == null ? void 0 : G.message) || "Failed to get payment info",
                    type: "error"
                })
            } else
                m({
                    message: (Z == null ? void 0 : Z.message) || "Failed to get payment info",
                    type: "error"
                })
        } catch (Z) {
            const G = Z
              , ve = typeof G == "object" && (G != null && G.message) ? G.message : "Failed to get payment data. Please try again later."
              , ge = typeof G == "object" && typeof G.status == "number" ? G.status : 422;
            (ge === 401 || ge === 419) && Ht(n),
            m({
                message: ve,
                type: "error"
            })
        } finally {
            U(!1)
        }
    }
    ;
    return f.jsx(f.Fragment, {
        children: g ? f.jsxs(oe.div, {
            className: "overflow-hidden mt-2 rounded-md  border-[0.2px] border-slate-300 bg-white  py-4 lg:w-3/4 mx-auto",
            variants: F,
            initial: "hidden",
            animate: "visible",
            children: [f.jsx("p", {
                className: "font-light text-center text-lg mb-8",
                children: (re = s == null ? void 0 : s.ovPayStatus) == null ? void 0 : re[l]
            }), f.jsxs(oe.div, {
                className: "grid sm:grid-cols-2 md:grid-cols-3 md:px-4 text-center",
                variants: F,
                children: [f.jsxs(oe.div, {
                    variants: R,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [f.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (ee = s == null ? void 0 : s.ovWebID) == null ? void 0 : ee[l]
                    }), f.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: x == null ? void 0 : x.webfile_id
                    })]
                }), f.jsxs(oe.div, {
                    variants: R,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [f.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (H = s == null ? void 0 : s.ovIvacCenter) == null ? void 0 : H[l]
                    }), f.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: x == null ? void 0 : x.ivac_name
                    })]
                }), f.jsxs(oe.div, {
                    variants: R,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [f.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (N = s == null ? void 0 : s.ovVisaType) == null ? void 0 : N[l]
                    }), f.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: x == null ? void 0 : x.visa_type
                    })]
                }), f.jsxs(oe.div, {
                    variants: R,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [f.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (O = s == null ? void 0 : s.ovFees) == null ? void 0 : O[l]
                    }), f.jsxs("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: [x == null ? void 0 : x.final_amount, " BDT"]
                    })]
                }), f.jsxs(oe.div, {
                    variants: R,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [f.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (q = s == null ? void 0 : s.ovName) == null ? void 0 : q[l]
                    }), f.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: x == null ? void 0 : x.name
                    })]
                }), f.jsxs(oe.div, {
                    variants: R,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [f.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (ae = s == null ? void 0 : s.ovEmail) == null ? void 0 : ae[l]
                    }), f.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: x == null ? void 0 : x.email
                    })]
                }), f.jsxs(oe.div, {
                    variants: R,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [f.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (j = s == null ? void 0 : s.ovContact) == null ? void 0 : j[l]
                    }), f.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: x == null ? void 0 : x.phone
                    })]
                }), f.jsxs(oe.div, {
                    variants: R,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [f.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (k = s == null ? void 0 : s.ovAppointment) == null ? void 0 : k[l]
                    }), f.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: x == null ? void 0 : x.appointment_date
                    })]
                }), f.jsxs(oe.div, {
                    variants: R,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [f.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (X = s == null ? void 0 : s.ovPayStatus) == null ? void 0 : X[l]
                    }), f.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: x == null ? void 0 : x.status
                    })]
                })]
            }), f.jsxs(oe.div, {
                className: "flex items-center justify-center my-8 gap-2 px-4 flex-col md:flex-row",
                initial: "hidden",
                animate: "visible",
                variants: F,
                children: [f.jsxs("a", {
                    target: "_blank",
                    href: x == null ? void 0 : x.download_invoice_url,
                    className: "flex items-center gap-2 bg-gray-800 rounded-md shadow-md text-white text-[14px] px-4 py-2 hover:bg-black cursor-pointer uppercase",
                    children: [f.jsx(Cy, {}), " ", (K = s == null ? void 0 : s.btnDownPDF) == null ? void 0 : K[l]]
                }), f.jsxs("a", {
                    target: "_blank",
                    href: x == null ? void 0 : x.print_invoice_url,
                    className: "flex items-center gap-2 bg-cyan-500 rounded-md shadow-md text-white text-[14px]  px-4 py-2 hover:bg-cyan-600 cursor-pointer uppercase",
                    children: [f.jsx(Dy, {}), " ", (le = s == null ? void 0 : s.btnPrintPDF) == null ? void 0 : le[l]]
                })]
            })]
        }) : f.jsxs(oe.div, {
            className: "flex flex-col bg-green-200  sm:mx-12 lg:mx-44 rounded-md pb-4 overflow-hidden border-[0.1px] border-slate-300",
            variants: F,
            initial: "hidden",
            animate: "visible",
            children: [p && f.jsx(Rt, {
                message: p.message,
                type: p.type,
                onClose: () => m(null)
            }), f.jsxs("div", {
                className: "flex flex-col items-start sm:items-center justify-center bg-white rounded-t-md px-4 py-6",
                children: [f.jsx("p", {
                    className: "text-lg mb-8 font-bold",
                    children: (J = s == null ? void 0 : s.lblQueryStatus) == null ? void 0 : J[l]
                }), f.jsx("p", {
                    className: "font-light text-xs mb-1",
                    children: (se = s == null ? void 0 : s.lblInputWebFile) == null ? void 0 : se[l]
                }), f.jsx("input", {
                    type: "text",
                    id: "name",
                    autoComplete: "on",
                    maxLength: 12,
                    className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-md shadow focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full sm:w-1/2 p-2.5 my-2",
                    onChange: Z => c(Z.target.value),
                    value: o
                }), f.jsx("p", {
                    className: "font-light text-xs mt-4 items-center justify-center",
                    children: (he = s == null ? void 0 : s.human_verfication) == null ? void 0 : he[l]
                }), f.jsxs("div", {
                    className: "flex",
                    children: [f.jsx("img", {
                        src: C,
                        alt: "Dummy Captcha",
                        className: "w-full h-8"
                    }), f.jsx("div", {
                        className: "ml-2 hover:cursor-pointer hover:bg-blue-200 hover:rounded-md",
                        onClick: () => $(),
                        children: f.jsx(Ey, {})
                    })]
                }), f.jsx("input", {
                    type: "text",
                    id: "name",
                    autoComplete: "on",
                    maxLength: 6,
                    className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-md shadow focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full  sm:w-1/2 p-2.5 my-2",
                    onChange: Z => d(Z.target.value),
                    value: h
                }), D ? f.jsxs(oe.button, {
                    type: "button",
                    whileTap: {
                        scale: .95
                    },
                    className: `text-white flex items-center justify-center mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
                            bg-gray-400 cursor-not-allowed
                          `,
                    children: [(pe = s == null ? void 0 : s.checking) == null ? void 0 : pe[l], "..."]
                }) : f.jsx(oe.button, {
                    type: "button",
                    disabled: !w,
                    whileTap: {
                        scale: .95
                    },
                    className: `text-white flex items-center cursor-pointer justify-center mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
                            ${w ? "bg-[#28a745] hover:bg-[#218838]" : "bg-gray-400 cursor-not-allowed"}
                          `,
                    onClick: te,
                    children: (de = s == null ? void 0 : s.btnQueryStatus) == null ? void 0 : de[l]
                })]
            })]
        })
    })
}
  , Tw = () => {
    var p, m, g, v;
    const [n,l] = T.useState( () => {
        const x = localStorage.getItem("activeStep");
        return x ? parseInt(x) : 1
    }
    )
      , {language: s, translations: o} = ct()
      , c = [{
        id: 1,
        name: (p = o == null ? void 0 : o.lblTabMenu1) == null ? void 0 : p[s]
    }, {
        id: 2,
        name: (m = o == null ? void 0 : o.lblTabMenu2) == null ? void 0 : m[s]
    }, {
        id: 3,
        name: (g = o == null ? void 0 : o.lblTabMenu3) == null ? void 0 : g[s]
    }, {
        id: 4,
        name: (v = o == null ? void 0 : o.lblTabMenu4) == null ? void 0 : v[s]
    }];
    T.useEffect( () => {
        localStorage.setItem("activeStep", n.toString())
    }
    , [n]);
    const h = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .6,
                ease: "easeOut"
            }
        }
    }
      , d = {
        hidden: {
            opacity: 0,
            x: 20
        },
        visible: x => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: x * .3
            }
        })
    };
    return f.jsx(f.Fragment, {
        children: f.jsxs(oe.div, {
            className: "flex flex-col bg-[#b5d6a9] sm:mx-8 lg:mx-20 border-[0.1px] border-slate-300 rounded-md shadow-lg pb-4",
            variants: h,
            initial: "hidden",
            animate: "visible",
            children: [f.jsx("div", {
                className: "flex flex-row gap-4  text-xs overflow-x-scroll scrollbar-hide border-b-[0.1px] border-slate-300",
                children: c.map( (x, S) => f.jsxs(oe.p, {
                    custom: S,
                    variants: d,
                    initial: "hidden",
                    animate: "visible",
                    className: `py-2 px-4 flex items-center font-bold rounded-t min-w-[160px] ${n === x.id ? "bg-white text-black" : "text-[#5c7a2f]"}`,
                    children: [f.jsx("span", {
                        className: `rounded-full px-2 py-1 mr-2 font-light text-xs italic ${n === x.id ? "bg-green-600 text-white" : "bg-white text-gray-500"}`,
                        children: x.id
                    }), x.name]
                }, x.id))
            }), f.jsxs("div", {
                className: "bg-white w-full p-4 overflow-y-scroll",
                children: [n === 1 && f.jsx(gw, {
                    setActiveStep: l
                }), n === 2 && f.jsx(yw, {
                    setActiveStep: l
                }), n === 3 && f.jsx(vw, {
                    setActiveStep: l
                }), n === 4 && f.jsx(xw, {
                    setActiveStep: l
                })]
            })]
        })
    })
}
  , jw = () => {
    var L, B, F, R, $, te, J, se, he, pe, de, re, ee, H, N, O;
    const {id: n} = Hj()
      , {language: l, translations: s} = ct()
      , o = ba()
      , [c,h] = T.useState(null)
      , [d,p] = T.useState([])
      , [m,g] = T.useState(0)
      , [v,x] = T.useState(!1)
      , [S,w] = T.useState(!1)
      , [C,M] = T.useState(null);
    T.useEffect( () => {
        n && (async () => {
            var ae, j, k;
            x(!0);
            try {
                const X = await ke(`/api/v2/multi-payment/status/${n}`, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        language: l || "en"
                    }
                });
                X.status_code === 200 ? (console.log("response", ((ae = X == null ? void 0 : X.data) == null ? void 0 : ae.total_charge) == "0.90"),
                h(X),
                p((j = X == null ? void 0 : X.data) == null ? void 0 : j.transactions),
                g((k = X == null ? void 0 : X.data) == null ? void 0 : k.successful_transaction_count)) : (M({
                    message: X.message,
                    type: "error"
                }),
                w(!0))
            } catch (X) {
                w(!0);
                const K = X
                  , le = typeof K == "object" && (K != null && K.message) ? K.message : "Failed to get payment data. Please try again later.";
                M({
                    message: le,
                    type: "error"
                })
            } finally {
                x(!1)
            }
        }
        )()
    }
    , [n, l]);
    const D = () => {
        localStorage.clear(),
        o("/")
    }
      , U = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .6,
                ease: "easeOut"
            }
        }
    };
    return v ? f.jsx("div", {
        className: "flex justify-center items-center h-screen",
        children: f.jsx("div", {
            className: "w-12 h-12 border-4 border-green-500 border-dashed rounded-full animate-spin"
        })
    }) : (console.log("paymentData", d),
    f.jsx(f.Fragment, {
        children: f.jsxs(oe.div, {
            className: "flex flex-col bg-[#b5d6a9] sm:mx-8 lg:mx-20 border-[0.1px] border-slate-300 rounded-md shadow-lg pb-4",
            variants: U,
            initial: "hidden",
            animate: "visible",
            children: [C && f.jsx(Rt, {
                message: C.message,
                type: C.type,
                onClose: () => M(null)
            }), S ? f.jsxs("div", {
                className: "bg-white flex flex-col justify-center items-center py-4",
                children: [f.jsx("h1", {
                    className: "text-center text-red-500 font-light text-2xl mt-2",
                    children: (H = s == null ? void 0 : s.failed) == null ? void 0 : H[l]
                }), f.jsx("p", {
                    className: "text-sm font-light",
                    children: (N = s == null ? void 0 : s.noTransactionFound) == null ? void 0 : N[l]
                }), f.jsx("button", {
                    type: "button",
                    onClick: D,
                    className: "hover:cursor-pointer bg-amber-400 rounded-md px-2 py-2 mt-3 uppercase text-sm font-light hover:text-white",
                    children: (O = s == null ? void 0 : s.startOverToPayment) == null ? void 0 : O[l]
                })]
            }) : f.jsxs("div", {
                className: "bg-white",
                children: [f.jsx("h1", {
                    className: "text-center text-green-500 font-light text-2xl mt-2",
                    children: c == null ? void 0 : c.message
                }), f.jsxs("p", {
                    className: "text-center font-light text-xs my-4",
                    children: [(L = s == null ? void 0 : s.payment_response_text1) == null ? void 0 : L[l], " ", f.jsxs("span", {
                        className: "underline font-bold",
                        children: ["“", (B = c == null ? void 0 : c.data) == null ? void 0 : B.transaction_id, "”"]
                    }), "  ", (F = s == null ? void 0 : s.payment_response_text2) == null ? void 0 : F[l]]
                }), f.jsx("div", {
                    className: "flex flex-row justify-center items-center gap-4 mx-4 my-4",
                    children: f.jsx("div", {
                        className: "relative w-full overflow-x-auto sm:rounded-lg",
                        children: f.jsxs("table", {
                            className: "w-full text-sm text-left text-black ",
                            children: [f.jsx("thead", {
                                className: "text-xs text-black ",
                                children: f.jsxs("tr", {
                                    children: [f.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "WEBFILE NUMBER"
                                    }), f.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "IVAC CENTER"
                                    }), f.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "Appointment Date"
                                    }), f.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "EMAIL"
                                    }), f.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "MOBILE NUMBER"
                                    }), ((R = c == null ? void 0 : c.data) == null ? void 0 : R.total_charge) != "0.00" && f.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "CHARGE"
                                    }), f.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "FEES"
                                    }), f.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "STATUS"
                                    })]
                                })
                            }), f.jsx("tbody", {
                                className: "border-b",
                                children: d.map( (q, ae) => {
                                    var j;
                                    return f.jsxs("tr", {
                                        className: "bg-white  border-gray-200 hover:bg-gray-50",
                                        children: [f.jsx("td", {
                                            className: "px-6 py-4",
                                            children: q == null ? void 0 : q.webfile_id
                                        }), f.jsx("td", {
                                            className: "px-6 py-4",
                                            children: q == null ? void 0 : q.ivac_name
                                        }), f.jsxs("td", {
                                            className: "px-6 py-4",
                                            children: [q == null ? void 0 : q.appointment_date, " (", q == null ? void 0 : q.appointment_time_slot, ")"]
                                        }), f.jsx("td", {
                                            className: "px-6 py-4 uppercase",
                                            children: q == null ? void 0 : q.email
                                        }), f.jsx("td", {
                                            className: "px-6 py-4",
                                            children: q == null ? void 0 : q.phone
                                        }), ((j = c == null ? void 0 : c.data) == null ? void 0 : j.total_charge) != "0.00" && f.jsx("td", {
                                            className: "px-6 py-4",
                                            children: q == null ? void 0 : q.charge
                                        }), f.jsx("td", {
                                            className: "px-6 py-4",
                                            children: q == null ? void 0 : q.amount
                                        }), f.jsx("td", {
                                            className: "px-6 py-4",
                                            children: q == null ? void 0 : q.status
                                        })]
                                    }, ae)
                                }
                                )
                            })]
                        })
                    })
                }), f.jsxs("div", {
                    className: "flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 mx-4 gap-2",
                    children: [f.jsx("div", {
                        className: "w-full sm:w-auto",
                        children: f.jsxs("p", {
                            className: "text-[10px] font-light text-red-500",
                            children: ["* ", ($ = s == null ? void 0 : s.lblPaymentSuccessQueue) == null ? void 0 : $[l]]
                        })
                    }), f.jsxs("div", {
                        className: " text-black font-light text-sm p-2 w-full sm:w-auto",
                        children: [((te = c == null ? void 0 : c.data) == null ? void 0 : te.total_charge) != "0.00" && f.jsxs("div", {
                            className: "grid grid-cols-2 gap-2 text-right",
                            children: [f.jsx("p", {
                                className: "text-left",
                                children: "Total Charges:"
                            }), f.jsxs("p", {
                                children: ["BDT ", (J = c == null ? void 0 : c.data) == null ? void 0 : J.total_charge]
                            })]
                        }), f.jsxs("div", {
                            className: "grid grid-cols-2 gap-2 text-right",
                            children: [f.jsx("p", {
                                className: "text-left",
                                children: "Total Fees :"
                            }), f.jsxs("p", {
                                children: ["BDT ", (se = c == null ? void 0 : c.data) == null ? void 0 : se.total_fees]
                            })]
                        })]
                    })]
                }), f.jsxs("div", {
                    className: "flex justify-center items-center mt-4 mx-4",
                    children: [f.jsxs("a", {
                        target: "_blank",
                        href: (he = c == null ? void 0 : c.data) == null ? void 0 : he.download_invoice_url,
                        className: "flex items-center gap-2 flex-wrap text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",
                        children: [f.jsx(Cy, {}), f.jsx("span", {
                            children: (pe = s == null ? void 0 : s.btnDownPDF) == null ? void 0 : pe[l]
                        })]
                    }), f.jsxs("a", {
                        type: "button",
                        target: "_blank",
                        href: (de = c == null ? void 0 : c.data) == null ? void 0 : de.print_invoice_url,
                        className: "hover:cursor-pointer flex text-white bg-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",
                        children: [f.jsx(Dy, {}), " ", (re = s == null ? void 0 : s.btnPrintPDF) == null ? void 0 : re[l]]
                    }), f.jsx("button", {
                        type: "button",
                        disabled: m >= 5,
                        onClick: D,
                        className: `text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
                            ${m >= 5 ? "bg-gray-400 cursor-not-allowed" : "hover:cursor-pointer bg-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800"}
                           `,
                        children: (ee = s == null ? void 0 : s.makeNewPayment) == null ? void 0 : ee[l]
                    })]
                })]
            })]
        })
    }))
}
  , ww = () => {
    var x, S, w;
    const {language: n, translations: l} = ct()
      , s = lr()
      , o = ba()
      , [c,h] = T.useState( () => !!localStorage.getItem("access_token"))
      , d = localStorage.getItem("auth_photo")
      , p = localStorage.getItem("auth_name") ? localStorage.getItem("auth_name") : "User Name";
    T.useEffect( () => {
        const C = () => {
            h(!!localStorage.getItem("access_token"))
        }
        ;
        return window.addEventListener("storage", C),
        window.addEventListener("tokenUpdate", C),
        () => {
            window.removeEventListener("storage", C),
            window.removeEventListener("tokenUpdate", C)
        }
    }
    , []);
    const m = s.pathname === "/payment-status"
      , g = () => {
        o(m ? -1 : "/payment-status")
    }
      , v = () => {
        localStorage.clear(),
        h(!1),
        window.dispatchEvent(new Event("tokenUpdate")),
        o("/")
    }
    ;
    return f.jsxs("div", {
        className: "md:px-8 py-4 flex justify-between flex-col lg:flex-row items-center gap-4",
        children: [f.jsx(oe.div, {
            initial: {
                x: -50,
                opacity: 0
            },
            animate: {
                x: 0,
                opacity: 1
            },
            transition: {
                delay: .3,
                duration: .5
            },
            children: f.jsx("img", {
                src: lj,
                alt: "SIB Logo",
                className: "w-56 cursor-pointer",
                onClick: v
            })
        }), f.jsxs(oe.div, {
            className: "flex items-center gap-4 flex-col md:flex-row",
            initial: {
                x: -50,
                opacity: 0
            },
            animate: {
                x: 0,
                opacity: 1
            },
            transition: {
                delay: .3,
                duration: .5
            },
            children: [f.jsx("button", {
                onClick: g,
                className: "bg-cyan-500 item-shadow hover-scale uppercase text-sm hover:bg-cyan-600 hover:cursor-pointer text-white px-3 py-2 rounded-md",
                children: m ? (x = l == null ? void 0 : l.bckToPay) == null ? void 0 : x[n] : (S = l == null ? void 0 : l.QueryPay) == null ? void 0 : S[n]
            }), f.jsx("div", {
                className: "flex flex-row items-center gap-2",
                children: c && f.jsxs(f.Fragment, {
                    children: [f.jsxs("p", {
                        className: "flex items-center justify-center gap-1 text-sm",
                        children: [d ? f.jsx("img", {
                            src: `${d}`,
                            alt: "User",
                            className: "w-6 h-6 rounded-full object-cover"
                        }) : f.jsx($T, {}), " ", p]
                    }), f.jsx("span", {
                        children: "|"
                    }), f.jsxs("p", {
                        className: "text-sm hover:cursor-pointer text-red-500",
                        onClick: v,
                        children: ["[ ", (w = l == null ? void 0 : l.logout_button) == null ? void 0 : w[n], " ]"]
                    })]
                })
            })]
        })]
    })
}
  , Aw = () => f.jsx("div", {
    className: "px-8 py-4 flex justify-center md:justify-end items-center",
    children: f.jsx("div", {
        className: "flex items-center gap-2 text-sm text-gray-600",
        children: f.jsx("img", {
            src: sj,
            alt: "SSL Logo",
            className: " w-80"
        })
    })
})
  , Zg = ({children: n}) => localStorage.getItem("access_token") ? f.jsx(Qy, {
    to: "/application",
    replace: !0
}) : n
  , Nw = ({children: n}) => localStorage.getItem("access_token") ? n : f.jsx(Qy, {
    to: "/",
    replace: !0
})
  , Ew = T.createContext({
    hasToken: !1,
    setHasToken: () => {}
})
  , Cw = ({children: n}) => {
    const [l,s] = T.useState(!!localStorage.getItem("access_token"));
    return T.useEffect( () => {
        const o = () => {
            s(!!localStorage.getItem("access_token"))
        }
        ;
        return window.addEventListener("tokenUpdate", o),
        () => {
            window.removeEventListener("tokenUpdate", o)
        }
    }
    , []),
    f.jsx(Ew.Provider, {
        value: {
            hasToken: l,
            setHasToken: s
        },
        children: n
    })
}
  , Dw = () => {
    const [n,l] = T.useState(!0)
      , [s,o] = T.useState(!1);
    return T.useEffect( () => {
        const c = setTimeout( () => {
            o(!0)
        }
        , 3e3);
        return () => clearTimeout(c)
    }
    , []),
    n ? f.jsx(f.Fragment, {
        children: f.jsx(oe.div, {
            initial: {
                opacity: 0,
                scale: .95
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            exit: {
                opacity: 0,
                scale: .95
            },
            transition: {
                duration: .3
            },
            className: "fixed inset-0 backdrop-blur-sm backdrop-brightness-75 flex justify-center items-center z-50",
            children: n && f.jsx("div", {
                className: "fixed inset-0 backdrop-blur-sm backdrop-brightness-75 flex justify-center items-center z-50",
                children: f.jsxs("div", {
                    className: "bg-white max-h-[90vh] w-full max-w-2xl p-6 rounded-lg overflow-y-auto scrollbar-hide relative",
                    children: [s && f.jsx("button", {
                        onClick: () => l(!1),
                        className: "absolute top-2 right-2 text-gray-500 hover:text-red-500 hover:cursor-pointer mb-4",
                        children: "✕"
                    }), f.jsxs("div", {
                        className: "space-y-4 text-sm text-gray-800",
                        children: [f.jsx("div", {
                            className: "w-full text-red-500 text-center font-bold text-lg bg-white z-100",
                            children: "জরুরি বিজ্ঞপ্তি"
                        }), f.jsxs("div", {
                            className: "text-gray-700 font-light text-xs",
                            children: [f.jsx("p", {
                                children: "ভিসা পেমেন্ট এর পূর্বে ভিডিও টি দেখে নিন।"
                            }), f.jsx("p", {
                                children: "Please watch the video before proceeding for visa payment."
                            })]
                        }), f.jsx("div", {
                            className: "aspect-w-16  h-[400px] mb-4",
                            children: f.jsx("iframe", {
                                className: "w-full h-full rounded",
                                src: "https://www.youtube.com/embed/ckFsAX727LM",
                                title: "YouTube video",
                                frameBorder: "0",
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                allowFullScreen: !0
                            })
                        }), f.jsx("div", {
                            className: "text-black font-semibold text-sm",
                            children: "ভিসা আবেদন পত্র জমা দেয়ার স্লট নেয়ার জন্য কি করণীয় এবং কি করবেন না"
                        }), f.jsxs("div", {
                            className: "text-black font-normal text-sm my-1",
                            children: [f.jsx("p", {
                                children: "১. বুকিংয়ের জন্য স্লট খোলার আগে সমস্ত নথি প্রস্তুত রাখুন।"
                            }), f.jsx("p", {
                                children: "[অনলাইন আবেদনপত্র, ব্যক্তিগত যোগাযোগ নম্বর সহ মোবাইল হ্যান্ডসেট (OTP যাচাইকরণের জন্য), আবেদনকারীর ছবির ফরমেটে হবে jpg/png(সাইজ হবে সর্বোচ্চ ২ এমবি)]এগুলো ডেস্কটপ/মোবাইলে সংরক্ষিত রাখুন যেন রেজিস্ট্রেশনের সময় সহজে আপলোড করতে পারেন ।"
                            }), f.jsx("p", {
                                children: "২. প্রথমবার নিবন্ধনের জন্য লগইন আইডি এবং পাসওয়ার্ড তৈরি করতে হবে।"
                            }), f.jsx("p", {
                                children: "৩. একটি একক বুকিং সেশনের অধীনে একটি একক লগইন আইডির মাধ্যমে সর্বাধিক ৫ জনের বুকিং করা যেতে পারে।"
                            }), f.jsx("p", {
                                children: "৪. একটি একক লগইন আইডির মাধ্যমে বুক করা স্লটগুলি একই ভিসা আবেদনকারি হতে হবে৷ একই লগইন আইডির মাধ্যমে অসংলগ্ন অ্যাপ্লিকেশন লক্ষ্য করা গেলে পেমেন্ট ইনভয়েস বাতিল করা হবে।"
                            }), f.jsx("p", {
                                children: "৫. স্লট বুকিং নিয়ে এগিয়ে যাওয়ার আগে অ্যাপ্লিকেশন তথ্য ট্যাবে পরিবারের সকল সদস্যদের তথ্য যোগ করুন ।"
                            }), f.jsx("p", {
                                children: "৬. অনুগ্রহ করে ১৫ মিনিটের মধ্যে আপনার স্লট বুকিং সম্পূর্ণ করুন,না করতে পরলে সেশনের মেয়াদ শেষ হবে এবং নতুন লগইন প্রয়োজন হবে।"
                            }), f.jsx("p", {
                                children: "৭. আবেদনপত্র IVAC-সেন্টারে জমা দেওয়ার সময় আপনার ব্যক্তিগত যোগাযোগ নম্বর সঙ্গে রাখুন।যা OTP যাচাইকরণ এবং অ্যাপয়েন্টমেন্ট বুকিংয়ের জন্য ব্যবহৃত হয়েছে।"
                            }), f.jsx("p", {
                                children: "৮. ভারতীয় ভিসার জন্য কোন অনুমোদিত এজেন্ট বা দালাল নেই।এটি একই সাথে সংযুক্তি আত্মসাৎ এবং চাঁদাবাজির ঝুঁকি বহন করে।"
                            }), f.jsx("p", {
                                children: "৯. এটি একটি গুরুত্বপূর্ণ বিষয়, যেখানে অসাধু উপাদানগুলি একাধিক পেমেন্ট চ্যানেল ব্যবহার করে কৃত্রিম ট্র্যাফিক তৈরি করছে এবং প্রকৃত আবেদনকারীদের জন্য সমস্যা সৃষ্টি করছে। এই ধরনের কার্যকলাপের বিরুদ্ধে কঠোর ব্যবস্থা গ্রহণ করা উচিত এবং যথাযথ পদক্ষেপ গ্রহণ করা দরকার, যেমন একাধিক পেমেন্টের ক্ষেত্রে ফেরত না দেওয়া। এটি কেবল অসাধু কার্যকলাপের প্রতি একটি কঠিন বার্তা পাঠাবে না, বরং প্রকৃত আবেদনকারীদের জন্য সিস্টেমটিকে আরও সুষ্ঠু এবং কার্যকরী করতে সাহায্য করবে।"
                            })]
                        }), f.jsx("div", {
                            className: "w-2/3 h-0.5 bg-red-600 mx-auto"
                        }), f.jsx("div", {
                            className: "text-black font-semibold text-sm",
                            children: "Do’s and Don’ts (Online Payment and Appointment)"
                        }), f.jsxs("div", {
                            className: "text-black font-normal text-sm py-1",
                            children: [f.jsx("p", {
                                children: "1. Keep all documents ready, before slot opens for booking. [Online application form, mobile handset with personal contact no.(for OTP verification), applicant photograph in jpg, png format (max 2MB size) saved in Desktop/mobile for easy upload during registration.]"
                            }), f.jsx("p", {
                                children: "2. Login ID and password will have to be created for first time registration before proceeding with appointment."
                            }), f.jsx("p", {
                                children: "3. Maximum 5 persons’ booking can be done through one single login ID under a single booking session."
                            }), f.jsx("p", {
                                children: "4. The booked slots through one single Login ID should be for the same Visa application/journey. Unrelated applications through same login ID, under 1 payment invoice will be cancelled."
                            }), f.jsx("p", {
                                children: "5. Add all family members in Application Info tab before proceeding with slot booking."
                            }), f.jsx("p", {
                                children: "6. Please complete total slot booking within 15 minutes, after which session will expire and fresh login will be required."
                            }), f.jsx("p", {
                                children: "7. During Submission at IVAC on Appointment date, invariably carry your personal contact no. used for OTP validation and appointment booking."
                            }), f.jsxs("p", {
                                children: ["8. ", f.jsx("span", {
                                    className: "font-bold",
                                    children: "There are no authorized agents or brokers for Indian Visa."
                                }), " Association with the same carries risk of embezzlement and extortion."]
                            }), f.jsx("p", {
                                children: "9. It has been reported that some unscrupulous elements are charging large sums of money for deploying several personnel at the same time to attempt payments through multiple channels creating unnecessary traffic and causing problems to genuine applicants. In such cases, multiple payments made will not be refunded as a step to discourage such malpractices."
                            })]
                        })]
                    })]
                })
            })
        })
    }) : null
}
;
function _w() {
    const [n,l] = T.useState(!1)
      , [s,o] = T.useState("")
      , [c,h] = T.useState("")
      , d = window.location.pathname === "/";
    return T.useEffect( () => {
        const p = localStorage.getItem("authStep");
        p && h(p)
    }
    , []),
    T.useEffect( () => {
        const p = () => {}
        ;
        return window.addEventListener("beforeunload", p),
        (async () => {
            try {
                const g = await Fy();
                g.status_code === 200 ? (localStorage.setItem("initialData", JSON.stringify(g.data)),
                l(!0)) : o("Something went wrong, please try again later.")
            } catch (g) {
                const v = g
                  , x = typeof v == "object" && (v != null && v.message) ? v.message : "Too Many Attempts. Please try again later.";
                o(x ? x + " Please try again later." : "Too Many Attempts. Please try again later.")
            }
        }
        )(),
        () => {
            window.removeEventListener("beforeunload", p)
        }
    }
    , []),
    T.useEffect( () => {
        const p = m => {
            m.preventDefault()
        }
        ;
        return document.addEventListener("contextmenu", p),
        () => {
            document.removeEventListener("contextmenu", p)
        }
    }
    , []),
    T.useEffect( () => {
        const p = m => {
            (m.key === "F12" || m.ctrlKey && m.shiftKey && m.key === "I" || m.ctrlKey && m.shiftKey && m.key === "C" || m.ctrlKey && m.shiftKey && m.key === "J" || m.ctrlKey && m.key === "U") && m.preventDefault()
        }
        ;
        return document.addEventListener("keydown", p),
        () => {
            document.removeEventListener("keydown", p)
        }
    }
    , []),
    n ? f.jsx(Cw, {
        children: f.jsx(WT, {
            children: f.jsx(sw, {
                children: f.jsxs("div", {
                    className: "flex flex-col md:h-screen",
                    children: [f.jsx(aj, {}), f.jsxs("div", {
                        className: "flex flex-1 flex-col md:flex-row overflow-hidden",
                        children: [f.jsx("div", {
                            className: "w-full md:w-1/3 lg:w-1/4 bg-gray-800 md:h-screen h-full scrollbar-hide pb-4",
                            children: f.jsx(ej, {})
                        }), f.jsxs("div", {
                            className: "w-full md:flex-1 overflow-y-auto bg-gray-50 p-4 flex flex-col bg-cover bg-center",
                            style: {
                                backgroundImage: `url(${Oy})`
                            },
                            children: [f.jsx("div", {
                                className: "mb-4",
                                children: f.jsx(ww, {})
                            }), f.jsx("div", {
                                className: "flex-1",
                                children: f.jsxs(aw, {
                                    children: [f.jsx(ii, {
                                        path: "/",
                                        element: f.jsx(Zg, {
                                            children: f.jsx(bw, {})
                                        })
                                    }), f.jsx(ii, {
                                        path: "/payment-status",
                                        element: f.jsx(Sw, {})
                                    }), f.jsx(ii, {
                                        path: "/application",
                                        element: f.jsx(Nw, {
                                            children: f.jsx(Tw, {})
                                        })
                                    }), f.jsx(ii, {
                                        path: "/payment-response/:id",
                                        element: f.jsx(Zg, {
                                            children: f.jsx(jw, {})
                                        })
                                    })]
                                })
                            }), c === "1" && d && f.jsx(Dw, {}), f.jsx(Aw, {})]
                        })]
                    })]
                })
            })
        })
    }) : f.jsx(oj, {
        message: s || "Loading, please wait..."
    })
}
hb.createRoot(document.getElementById("root")).render(f.jsx(T.StrictMode, {
    children: f.jsx(_w, {})
}));
