function lb(n, l) {
    for (var s = 0; s < l.length; s++) {
        const o = l[s];
        if (typeof o != "string" && !Array.isArray(o)) {
            for (const u in o)
                if (u !== "default" && !(u in n)) {
                    const h = Object.getOwnPropertyDescriptor(o, u);
                    h && Object.defineProperty(n, u, h.get ? h : {
                        enumerable: !0,
                        get: () => o[u]
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
    for (const u of document.querySelectorAll('link[rel="modulepreload"]'))
        o(u);
    new MutationObserver(u => {
        for (const h of u)
            if (h.type === "childList")
                for (const d of h.addedNodes)
                    d.tagName === "LINK" && d.rel === "modulepreload" && o(d)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function s(u) {
        const h = {};
        return u.integrity && (h.integrity = u.integrity),
        u.referrerPolicy && (h.referrerPolicy = u.referrerPolicy),
        u.crossOrigin === "use-credentials" ? h.credentials = "include" : u.crossOrigin === "anonymous" ? h.credentials = "omit" : h.credentials = "same-origin",
        h
    }
    function o(u) {
        if (u.ep)
            return;
        u.ep = !0;
        const h = s(u);
        fetch(u.href, h)
    }
}
)();
function Jg(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
var dc = {
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
var yp;
function sb() {
    if (yp)
        return ai;
    yp = 1;
    var n = Symbol.for("react.transitional.element")
      , l = Symbol.for("react.fragment");
    function s(o, u, h) {
        var d = null;
        if (h !== void 0 && (d = "" + h),
        u.key !== void 0 && (d = "" + u.key),
        "key"in u) {
            h = {};
            for (var m in u)
                m !== "key" && (h[m] = u[m])
        } else
            h = u;
        return u = h.ref,
        {
            $$typeof: n,
            type: o,
            key: d,
            ref: u !== void 0 ? u : null,
            props: h
        }
    }
    return ai.Fragment = l,
    ai.jsx = s,
    ai.jsxs = s,
    ai
}
var xp;
function ib() {
    return xp || (xp = 1,
    dc.exports = sb()),
    dc.exports
}
var f = ib()
  , hc = {
    exports: {}
}
  , Ae = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vp;
function ob() {
    if (vp)
        return Ae;
    vp = 1;
    var n = Symbol.for("react.transitional.element")
      , l = Symbol.for("react.portal")
      , s = Symbol.for("react.fragment")
      , o = Symbol.for("react.strict_mode")
      , u = Symbol.for("react.profiler")
      , h = Symbol.for("react.consumer")
      , d = Symbol.for("react.context")
      , m = Symbol.for("react.forward_ref")
      , p = Symbol.for("react.suspense")
      , g = Symbol.for("react.memo")
      , x = Symbol.for("react.lazy")
      , v = Symbol.iterator;
    function w(S) {
        return S === null || typeof S != "object" ? null : (S = v && S[v] || S["@@iterator"],
        typeof S == "function" ? S : null)
    }
    var N = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , E = Object.assign
      , _ = {};
    function M(S, V, te) {
        this.props = S,
        this.context = V,
        this.refs = _,
        this.updater = te || N
    }
    M.prototype.isReactComponent = {},
    M.prototype.setState = function(S, V) {
        if (typeof S != "object" && typeof S != "function" && S != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, S, V, "setState")
    }
    ,
    M.prototype.forceUpdate = function(S) {
        this.updater.enqueueForceUpdate(this, S, "forceUpdate")
    }
    ;
    function U() {}
    U.prototype = M.prototype;
    function P(S, V, te) {
        this.props = S,
        this.context = V,
        this.refs = _,
        this.updater = te || N
    }
    var B = P.prototype = new U;
    B.constructor = P,
    E(B, M.prototype),
    B.isPureReactComponent = !0;
    var X = Array.isArray
      , O = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null
    }
      , q = Object.prototype.hasOwnProperty;
    function I(S, V, te, W, le, ee) {
        return te = ee.ref,
        {
            $$typeof: n,
            type: S,
            key: V,
            ref: te !== void 0 ? te : null,
            props: ee
        }
    }
    function Q(S, V) {
        return I(S.type, V, void 0, void 0, void 0, S.props)
    }
    function re(S) {
        return typeof S == "object" && S !== null && S.$$typeof === n
    }
    function fe(S) {
        var V = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + S.replace(/[=:]/g, function(te) {
            return V[te]
        })
    }
    var he = /\/+/g;
    function me(S, V) {
        return typeof S == "object" && S !== null && S.key != null ? fe("" + S.key) : V.toString(36)
    }
    function ie() {}
    function se(S) {
        switch (S.status) {
        case "fulfilled":
            return S.value;
        case "rejected":
            throw S.reason;
        default:
            switch (typeof S.status == "string" ? S.then(ie, ie) : (S.status = "pending",
            S.then(function(V) {
                S.status === "pending" && (S.status = "fulfilled",
                S.value = V)
            }, function(V) {
                S.status === "pending" && (S.status = "rejected",
                S.reason = V)
            })),
            S.status) {
            case "fulfilled":
                return S.value;
            case "rejected":
                throw S.reason
            }
        }
        throw S
    }
    function F(S, V, te, W, le) {
        var ee = typeof S;
        (ee === "undefined" || ee === "boolean") && (S = null);
        var ae = !1;
        if (S === null)
            ae = !0;
        else
            switch (ee) {
            case "bigint":
            case "string":
            case "number":
                ae = !0;
                break;
            case "object":
                switch (S.$$typeof) {
                case n:
                case l:
                    ae = !0;
                    break;
                case x:
                    return ae = S._init,
                    F(ae(S._payload), V, te, W, le)
                }
            }
        if (ae)
            return le = le(S),
            ae = W === "" ? "." + me(S, 0) : W,
            X(le) ? (te = "",
            ae != null && (te = ae.replace(he, "$&/") + "/"),
            F(le, V, te, "", function(Ve) {
                return Ve
            })) : le != null && (re(le) && (le = Q(le, te + (le.key == null || S && S.key === le.key ? "" : ("" + le.key).replace(he, "$&/") + "/") + ae)),
            V.push(le)),
            1;
        ae = 0;
        var de = W === "" ? "." : W + ":";
        if (X(S))
            for (var ne = 0; ne < S.length; ne++)
                W = S[ne],
                ee = de + me(W, ne),
                ae += F(W, V, te, ee, le);
        else if (ne = w(S),
        typeof ne == "function")
            for (S = ne.call(S),
            ne = 0; !(W = S.next()).done; )
                W = W.value,
                ee = de + me(W, ne++),
                ae += F(W, V, te, ee, le);
        else if (ee === "object") {
            if (typeof S.then == "function")
                return F(se(S), V, te, W, le);
            throw V = String(S),
            Error("Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead.")
        }
        return ae
    }
    function T(S, V, te) {
        if (S == null)
            return S;
        var W = []
          , le = 0;
        return F(S, W, "", "", function(ee) {
            return V.call(te, ee, le++)
        }),
        W
    }
    function D(S) {
        if (S._status === -1) {
            var V = S._result;
            V = V(),
            V.then(function(te) {
                (S._status === 0 || S._status === -1) && (S._status = 1,
                S._result = te)
            }, function(te) {
                (S._status === 0 || S._status === -1) && (S._status = 2,
                S._result = te)
            }),
            S._status === -1 && (S._status = 0,
            S._result = V)
        }
        if (S._status === 1)
            return S._result.default;
        throw S._result
    }
    var Y = typeof reportError == "function" ? reportError : function(S) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var V = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
                error: S
            });
            if (!window.dispatchEvent(V))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", S);
            return
        }
        console.error(S)
    }
    ;
    function J() {}
    return Ae.Children = {
        map: T,
        forEach: function(S, V, te) {
            T(S, function() {
                V.apply(this, arguments)
            }, te)
        },
        count: function(S) {
            var V = 0;
            return T(S, function() {
                V++
            }),
            V
        },
        toArray: function(S) {
            return T(S, function(V) {
                return V
            }) || []
        },
        only: function(S) {
            if (!re(S))
                throw Error("React.Children.only expected to receive a single React element child.");
            return S
        }
    },
    Ae.Component = M,
    Ae.Fragment = s,
    Ae.Profiler = u,
    Ae.PureComponent = P,
    Ae.StrictMode = o,
    Ae.Suspense = p,
    Ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = O,
    Ae.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(S) {
            return O.H.useMemoCache(S)
        }
    },
    Ae.cache = function(S) {
        return function() {
            return S.apply(null, arguments)
        }
    }
    ,
    Ae.cloneElement = function(S, V, te) {
        if (S == null)
            throw Error("The argument must be a React element, but you passed " + S + ".");
        var W = E({}, S.props)
          , le = S.key
          , ee = void 0;
        if (V != null)
            for (ae in V.ref !== void 0 && (ee = void 0),
            V.key !== void 0 && (le = "" + V.key),
            V)
                !q.call(V, ae) || ae === "key" || ae === "__self" || ae === "__source" || ae === "ref" && V.ref === void 0 || (W[ae] = V[ae]);
        var ae = arguments.length - 2;
        if (ae === 1)
            W.children = te;
        else if (1 < ae) {
            for (var de = Array(ae), ne = 0; ne < ae; ne++)
                de[ne] = arguments[ne + 2];
            W.children = de
        }
        return I(S.type, le, void 0, void 0, ee, W)
    }
    ,
    Ae.createContext = function(S) {
        return S = {
            $$typeof: d,
            _currentValue: S,
            _currentValue2: S,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        S.Provider = S,
        S.Consumer = {
            $$typeof: h,
            _context: S
        },
        S
    }
    ,
    Ae.createElement = function(S, V, te) {
        var W, le = {}, ee = null;
        if (V != null)
            for (W in V.key !== void 0 && (ee = "" + V.key),
            V)
                q.call(V, W) && W !== "key" && W !== "__self" && W !== "__source" && (le[W] = V[W]);
        var ae = arguments.length - 2;
        if (ae === 1)
            le.children = te;
        else if (1 < ae) {
            for (var de = Array(ae), ne = 0; ne < ae; ne++)
                de[ne] = arguments[ne + 2];
            le.children = de
        }
        if (S && S.defaultProps)
            for (W in ae = S.defaultProps,
            ae)
                le[W] === void 0 && (le[W] = ae[W]);
        return I(S, ee, void 0, void 0, null, le)
    }
    ,
    Ae.createRef = function() {
        return {
            current: null
        }
    }
    ,
    Ae.forwardRef = function(S) {
        return {
            $$typeof: m,
            render: S
        }
    }
    ,
    Ae.isValidElement = re,
    Ae.lazy = function(S) {
        return {
            $$typeof: x,
            _payload: {
                _status: -1,
                _result: S
            },
            _init: D
        }
    }
    ,
    Ae.memo = function(S, V) {
        return {
            $$typeof: g,
            type: S,
            compare: V === void 0 ? null : V
        }
    }
    ,
    Ae.startTransition = function(S) {
        var V = O.T
          , te = {};
        O.T = te;
        try {
            var W = S()
              , le = O.S;
            le !== null && le(te, W),
            typeof W == "object" && W !== null && typeof W.then == "function" && W.then(J, Y)
        } catch (ee) {
            Y(ee)
        } finally {
            O.T = V
        }
    }
    ,
    Ae.unstable_useCacheRefresh = function() {
        return O.H.useCacheRefresh()
    }
    ,
    Ae.use = function(S) {
        return O.H.use(S)
    }
    ,
    Ae.useActionState = function(S, V, te) {
        return O.H.useActionState(S, V, te)
    }
    ,
    Ae.useCallback = function(S, V) {
        return O.H.useCallback(S, V)
    }
    ,
    Ae.useContext = function(S) {
        return O.H.useContext(S)
    }
    ,
    Ae.useDebugValue = function() {}
    ,
    Ae.useDeferredValue = function(S, V) {
        return O.H.useDeferredValue(S, V)
    }
    ,
    Ae.useEffect = function(S, V, te) {
        var W = O.H;
        if (typeof te == "function")
            throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return W.useEffect(S, V)
    }
    ,
    Ae.useId = function() {
        return O.H.useId()
    }
    ,
    Ae.useImperativeHandle = function(S, V, te) {
        return O.H.useImperativeHandle(S, V, te)
    }
    ,
    Ae.useInsertionEffect = function(S, V) {
        return O.H.useInsertionEffect(S, V)
    }
    ,
    Ae.useLayoutEffect = function(S, V) {
        return O.H.useLayoutEffect(S, V)
    }
    ,
    Ae.useMemo = function(S, V) {
        return O.H.useMemo(S, V)
    }
    ,
    Ae.useOptimistic = function(S, V) {
        return O.H.useOptimistic(S, V)
    }
    ,
    Ae.useReducer = function(S, V, te) {
        return O.H.useReducer(S, V, te)
    }
    ,
    Ae.useRef = function(S) {
        return O.H.useRef(S)
    }
    ,
    Ae.useState = function(S) {
        return O.H.useState(S)
    }
    ,
    Ae.useSyncExternalStore = function(S, V, te) {
        return O.H.useSyncExternalStore(S, V, te)
    }
    ,
    Ae.useTransition = function() {
        return O.H.useTransition()
    }
    ,
    Ae.version = "19.1.0",
    Ae
}
var bp;
function $o() {
    return bp || (bp = 1,
    hc.exports = ob()),
    hc.exports
}
var j = $o();
const rb = Jg(j)
  , ub = lb({
    __proto__: null,
    default: rb
}, [j]);
var mc = {
    exports: {}
}
  , ni = {}
  , pc = {
    exports: {}
}
  , gc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sp;
function cb() {
    return Sp || (Sp = 1,
    function(n) {
        function l(T, D) {
            var Y = T.length;
            T.push(D);
            e: for (; 0 < Y; ) {
                var J = Y - 1 >>> 1
                  , S = T[J];
                if (0 < u(S, D))
                    T[J] = D,
                    T[Y] = S,
                    Y = J;
                else
                    break e
            }
        }
        function s(T) {
            return T.length === 0 ? null : T[0]
        }
        function o(T) {
            if (T.length === 0)
                return null;
            var D = T[0]
              , Y = T.pop();
            if (Y !== D) {
                T[0] = Y;
                e: for (var J = 0, S = T.length, V = S >>> 1; J < V; ) {
                    var te = 2 * (J + 1) - 1
                      , W = T[te]
                      , le = te + 1
                      , ee = T[le];
                    if (0 > u(W, Y))
                        le < S && 0 > u(ee, W) ? (T[J] = ee,
                        T[le] = Y,
                        J = le) : (T[J] = W,
                        T[te] = Y,
                        J = te);
                    else if (le < S && 0 > u(ee, Y))
                        T[J] = ee,
                        T[le] = Y,
                        J = le;
                    else
                        break e
                }
            }
            return D
        }
        function u(T, D) {
            var Y = T.sortIndex - D.sortIndex;
            return Y !== 0 ? Y : T.id - D.id
        }
        if (n.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var h = performance;
            n.unstable_now = function() {
                return h.now()
            }
        } else {
            var d = Date
              , m = d.now();
            n.unstable_now = function() {
                return d.now() - m
            }
        }
        var p = []
          , g = []
          , x = 1
          , v = null
          , w = 3
          , N = !1
          , E = !1
          , _ = !1
          , M = !1
          , U = typeof setTimeout == "function" ? setTimeout : null
          , P = typeof clearTimeout == "function" ? clearTimeout : null
          , B = typeof setImmediate < "u" ? setImmediate : null;
        function X(T) {
            for (var D = s(g); D !== null; ) {
                if (D.callback === null)
                    o(g);
                else if (D.startTime <= T)
                    o(g),
                    D.sortIndex = D.expirationTime,
                    l(p, D);
                else
                    break;
                D = s(g)
            }
        }
        function O(T) {
            if (_ = !1,
            X(T),
            !E)
                if (s(p) !== null)
                    E = !0,
                    q || (q = !0,
                    me());
                else {
                    var D = s(g);
                    D !== null && F(O, D.startTime - T)
                }
        }
        var q = !1
          , I = -1
          , Q = 5
          , re = -1;
        function fe() {
            return M ? !0 : !(n.unstable_now() - re < Q)
        }
        function he() {
            if (M = !1,
            q) {
                var T = n.unstable_now();
                re = T;
                var D = !0;
                try {
                    e: {
                        E = !1,
                        _ && (_ = !1,
                        P(I),
                        I = -1),
                        N = !0;
                        var Y = w;
                        try {
                            t: {
                                for (X(T),
                                v = s(p); v !== null && !(v.expirationTime > T && fe()); ) {
                                    var J = v.callback;
                                    if (typeof J == "function") {
                                        v.callback = null,
                                        w = v.priorityLevel;
                                        var S = J(v.expirationTime <= T);
                                        if (T = n.unstable_now(),
                                        typeof S == "function") {
                                            v.callback = S,
                                            X(T),
                                            D = !0;
                                            break t
                                        }
                                        v === s(p) && o(p),
                                        X(T)
                                    } else
                                        o(p);
                                    v = s(p)
                                }
                                if (v !== null)
                                    D = !0;
                                else {
                                    var V = s(g);
                                    V !== null && F(O, V.startTime - T),
                                    D = !1
                                }
                            }
                            break e
                        } finally {
                            v = null,
                            w = Y,
                            N = !1
                        }
                        D = void 0
                    }
                } finally {
                    D ? me() : q = !1
                }
            }
        }
        var me;
        if (typeof B == "function")
            me = function() {
                B(he)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var ie = new MessageChannel
              , se = ie.port2;
            ie.port1.onmessage = he,
            me = function() {
                se.postMessage(null)
            }
        } else
            me = function() {
                U(he, 0)
            }
            ;
        function F(T, D) {
            I = U(function() {
                T(n.unstable_now())
            }, D)
        }
        n.unstable_IdlePriority = 5,
        n.unstable_ImmediatePriority = 1,
        n.unstable_LowPriority = 4,
        n.unstable_NormalPriority = 3,
        n.unstable_Profiling = null,
        n.unstable_UserBlockingPriority = 2,
        n.unstable_cancelCallback = function(T) {
            T.callback = null
        }
        ,
        n.unstable_forceFrameRate = function(T) {
            0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Q = 0 < T ? Math.floor(1e3 / T) : 5
        }
        ,
        n.unstable_getCurrentPriorityLevel = function() {
            return w
        }
        ,
        n.unstable_next = function(T) {
            switch (w) {
            case 1:
            case 2:
            case 3:
                var D = 3;
                break;
            default:
                D = w
            }
            var Y = w;
            w = D;
            try {
                return T()
            } finally {
                w = Y
            }
        }
        ,
        n.unstable_requestPaint = function() {
            M = !0
        }
        ,
        n.unstable_runWithPriority = function(T, D) {
            switch (T) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                T = 3
            }
            var Y = w;
            w = T;
            try {
                return D()
            } finally {
                w = Y
            }
        }
        ,
        n.unstable_scheduleCallback = function(T, D, Y) {
            var J = n.unstable_now();
            switch (typeof Y == "object" && Y !== null ? (Y = Y.delay,
            Y = typeof Y == "number" && 0 < Y ? J + Y : J) : Y = J,
            T) {
            case 1:
                var S = -1;
                break;
            case 2:
                S = 250;
                break;
            case 5:
                S = 1073741823;
                break;
            case 4:
                S = 1e4;
                break;
            default:
                S = 5e3
            }
            return S = Y + S,
            T = {
                id: x++,
                callback: D,
                priorityLevel: T,
                startTime: Y,
                expirationTime: S,
                sortIndex: -1
            },
            Y > J ? (T.sortIndex = Y,
            l(g, T),
            s(p) === null && T === s(g) && (_ ? (P(I),
            I = -1) : _ = !0,
            F(O, Y - J))) : (T.sortIndex = S,
            l(p, T),
            E || N || (E = !0,
            q || (q = !0,
            me()))),
            T
        }
        ,
        n.unstable_shouldYield = fe,
        n.unstable_wrapCallback = function(T) {
            var D = w;
            return function() {
                var Y = w;
                w = D;
                try {
                    return T.apply(this, arguments)
                } finally {
                    w = Y
                }
            }
        }
    }(gc)),
    gc
}
var wp;
function fb() {
    return wp || (wp = 1,
    pc.exports = cb()),
    pc.exports
}
var yc = {
    exports: {}
}
  , Ut = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jp;
function db() {
    if (jp)
        return Ut;
    jp = 1;
    var n = $o();
    function l(p) {
        var g = "https://react.dev/errors/" + p;
        if (1 < arguments.length) {
            g += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var x = 2; x < arguments.length; x++)
                g += "&args[]=" + encodeURIComponent(arguments[x])
        }
        return "Minified React error #" + p + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
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
      , u = Symbol.for("react.portal");
    function h(p, g, x) {
        var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: u,
            key: v == null ? null : "" + v,
            children: p,
            containerInfo: g,
            implementation: x
        }
    }
    var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function m(p, g) {
        if (p === "font")
            return "";
        if (typeof g == "string")
            return g === "use-credentials" ? g : ""
    }
    return Ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o,
    Ut.createPortal = function(p, g) {
        var x = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
            throw Error(l(299));
        return h(p, g, null, x)
    }
    ,
    Ut.flushSync = function(p) {
        var g = d.T
          , x = o.p;
        try {
            if (d.T = null,
            o.p = 2,
            p)
                return p()
        } finally {
            d.T = g,
            o.p = x,
            o.d.f()
        }
    }
    ,
    Ut.preconnect = function(p, g) {
        typeof p == "string" && (g ? (g = g.crossOrigin,
        g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null,
        o.d.C(p, g))
    }
    ,
    Ut.prefetchDNS = function(p) {
        typeof p == "string" && o.d.D(p)
    }
    ,
    Ut.preinit = function(p, g) {
        if (typeof p == "string" && g && typeof g.as == "string") {
            var x = g.as
              , v = m(x, g.crossOrigin)
              , w = typeof g.integrity == "string" ? g.integrity : void 0
              , N = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
            x === "style" ? o.d.S(p, typeof g.precedence == "string" ? g.precedence : void 0, {
                crossOrigin: v,
                integrity: w,
                fetchPriority: N
            }) : x === "script" && o.d.X(p, {
                crossOrigin: v,
                integrity: w,
                fetchPriority: N,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0
            })
        }
    }
    ,
    Ut.preinitModule = function(p, g) {
        if (typeof p == "string")
            if (typeof g == "object" && g !== null) {
                if (g.as == null || g.as === "script") {
                    var x = m(g.as, g.crossOrigin);
                    o.d.M(p, {
                        crossOrigin: x,
                        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                        nonce: typeof g.nonce == "string" ? g.nonce : void 0
                    })
                }
            } else
                g == null && o.d.M(p)
    }
    ,
    Ut.preload = function(p, g) {
        if (typeof p == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
            var x = g.as
              , v = m(x, g.crossOrigin);
            o.d.L(p, x, {
                crossOrigin: v,
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
    Ut.preloadModule = function(p, g) {
        if (typeof p == "string")
            if (g) {
                var x = m(g.as, g.crossOrigin);
                o.d.m(p, {
                    as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
                    crossOrigin: x,
                    integrity: typeof g.integrity == "string" ? g.integrity : void 0
                })
            } else
                o.d.m(p)
    }
    ,
    Ut.requestFormReset = function(p) {
        o.d.r(p)
    }
    ,
    Ut.unstable_batchedUpdates = function(p, g) {
        return p(g)
    }
    ,
    Ut.useFormState = function(p, g, x) {
        return d.H.useFormState(p, g, x)
    }
    ,
    Ut.useFormStatus = function() {
        return d.H.useHostTransitionStatus()
    }
    ,
    Ut.version = "19.1.0",
    Ut
}
var Tp;
function $g() {
    if (Tp)
        return yc.exports;
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
    yc.exports = db(),
    yc.exports
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
var Np;
function hb() {
    if (Np)
        return ni;
    Np = 1;
    var n = fb()
      , l = $o()
      , s = $g();
    function o(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var a = 2; a < arguments.length; a++)
                t += "&args[]=" + encodeURIComponent(arguments[a])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function u(e) {
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
    function m(e) {
        if (h(e) !== e)
            throw Error(o(188))
    }
    function p(e) {
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
            var c = r.alternate;
            if (c === null) {
                if (i = r.return,
                i !== null) {
                    a = i;
                    continue
                }
                break
            }
            if (r.child === c.child) {
                for (c = r.child; c; ) {
                    if (c === a)
                        return m(r),
                        e;
                    if (c === i)
                        return m(r),
                        t;
                    c = c.sibling
                }
                throw Error(o(188))
            }
            if (a.return !== i.return)
                a = r,
                i = c;
            else {
                for (var y = !1, b = r.child; b; ) {
                    if (b === a) {
                        y = !0,
                        a = r,
                        i = c;
                        break
                    }
                    if (b === i) {
                        y = !0,
                        i = r,
                        a = c;
                        break
                    }
                    b = b.sibling
                }
                if (!y) {
                    for (b = c.child; b; ) {
                        if (b === a) {
                            y = !0,
                            a = c,
                            i = r;
                            break
                        }
                        if (b === i) {
                            y = !0,
                            i = c,
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
    var x = Object.assign
      , v = Symbol.for("react.element")
      , w = Symbol.for("react.transitional.element")
      , N = Symbol.for("react.portal")
      , E = Symbol.for("react.fragment")
      , _ = Symbol.for("react.strict_mode")
      , M = Symbol.for("react.profiler")
      , U = Symbol.for("react.provider")
      , P = Symbol.for("react.consumer")
      , B = Symbol.for("react.context")
      , X = Symbol.for("react.forward_ref")
      , O = Symbol.for("react.suspense")
      , q = Symbol.for("react.suspense_list")
      , I = Symbol.for("react.memo")
      , Q = Symbol.for("react.lazy")
      , re = Symbol.for("react.activity")
      , fe = Symbol.for("react.memo_cache_sentinel")
      , he = Symbol.iterator;
    function me(e) {
        return e === null || typeof e != "object" ? null : (e = he && e[he] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var ie = Symbol.for("react.client.reference");
    function se(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.$$typeof === ie ? null : e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case E:
            return "Fragment";
        case M:
            return "Profiler";
        case _:
            return "StrictMode";
        case O:
            return "Suspense";
        case q:
            return "SuspenseList";
        case re:
            return "Activity"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case N:
                return "Portal";
            case B:
                return (e.displayName || "Context") + ".Provider";
            case P:
                return (e._context.displayName || "Context") + ".Consumer";
            case X:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case I:
                return t = e.displayName || null,
                t !== null ? t : se(e.type) || "Memo";
            case Q:
                t = e._payload,
                e = e._init;
                try {
                    return se(e(t))
                } catch {}
            }
        return null
    }
    var F = Array.isArray
      , T = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , D = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , Y = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , J = []
      , S = -1;
    function V(e) {
        return {
            current: e
        }
    }
    function te(e) {
        0 > S || (e.current = J[S],
        J[S] = null,
        S--)
    }
    function W(e, t) {
        S++,
        J[S] = e.current,
        e.current = t
    }
    var le = V(null)
      , ee = V(null)
      , ae = V(null)
      , de = V(null);
    function ne(e, t) {
        switch (W(ae, t),
        W(ee, e),
        W(le, null),
        t.nodeType) {
        case 9:
        case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? Xm(e) : 0;
            break;
        default:
            if (e = t.tagName,
            t = t.namespaceURI)
                t = Xm(t),
                e = Fm(t, e);
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
        te(le),
        W(le, e)
    }
    function Ve() {
        te(le),
        te(ee),
        te(ae)
    }
    function Oe(e) {
        e.memoizedState !== null && W(de, e);
        var t = le.current
          , a = Fm(t, e.type);
        t !== a && (W(ee, e),
        W(le, a))
    }
    function Re(e) {
        ee.current === e && (te(le),
        te(ee)),
        de.current === e && (te(de),
        Js._currentValue = Y)
    }
    var De = Object.prototype.hasOwnProperty
      , lt = n.unstable_scheduleCallback
      , Ne = n.unstable_cancelCallback
      , Ie = n.unstable_shouldYield
      , vt = n.unstable_requestPaint
      , et = n.unstable_now
      , sn = n.unstable_getCurrentPriorityLevel
      , Va = n.unstable_ImmediatePriority
      , Ta = n.unstable_UserBlockingPriority
      , kt = n.unstable_NormalPriority
      , Ua = n.unstable_LowPriority
      , ga = n.unstable_IdlePriority
      , za = n.log
      , Ba = n.unstable_setDisableYieldValue
      , Ft = null
      , ct = null;
    function be(e) {
        if (typeof za == "function" && Ba(e),
        ct && typeof ct.setStrictMode == "function")
            try {
                ct.setStrictMode(Ft, e)
            } catch {}
    }
    var Je = Math.clz32 ? Math.clz32 : on
      , ya = Math.log
      , La = Math.LN2;
    function on(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (ya(e) / La | 0) | 0
    }
    var xa = 256
      , ea = 4194304;
    function Rt(e) {
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
    function oe(e, t, a) {
        var i = e.pendingLanes;
        if (i === 0)
            return 0;
        var r = 0
          , c = e.suspendedLanes
          , y = e.pingedLanes;
        e = e.warmLanes;
        var b = i & 134217727;
        return b !== 0 ? (i = b & ~c,
        i !== 0 ? r = Rt(i) : (y &= b,
        y !== 0 ? r = Rt(y) : a || (a = b & ~e,
        a !== 0 && (r = Rt(a))))) : (b = i & ~c,
        b !== 0 ? r = Rt(b) : y !== 0 ? r = Rt(y) : a || (a = i & ~e,
        a !== 0 && (r = Rt(a)))),
        r === 0 ? 0 : t !== 0 && t !== r && (t & c) === 0 && (c = r & -r,
        a = t & -t,
        c >= a || c === 32 && (a & 4194048) !== 0) ? t : r
    }
    function ye(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }
    function Qe(e, t) {
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
    function $e() {
        var e = xa;
        return xa <<= 1,
        (xa & 4194048) === 0 && (xa = 256),
        e
    }
    function $() {
        var e = ea;
        return ea <<= 1,
        (ea & 62914560) === 0 && (ea = 4194304),
        e
    }
    function je(e) {
        for (var t = [], a = 0; 31 > a; a++)
            t.push(e);
        return t
    }
    function mt(e, t) {
        e.pendingLanes |= t,
        t !== 268435456 && (e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0)
    }
    function Pt(e, t, a, i, r, c) {
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
          , L = e.hiddenUpdates;
        for (a = y & ~a; 0 < a; ) {
            var G = 31 - Je(a)
              , Z = 1 << G;
            b[G] = 0,
            A[G] = -1;
            var k = L[G];
            if (k !== null)
                for (L[G] = null,
                G = 0; G < k.length; G++) {
                    var H = k[G];
                    H !== null && (H.lane &= -536870913)
                }
            a &= ~Z
        }
        i !== 0 && ss(e, i, 0),
        c !== 0 && r === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(y & ~t))
    }
    function ss(e, t, a) {
        e.pendingLanes |= t,
        e.suspendedLanes &= ~t;
        var i = 31 - Je(t);
        e.entangledLanes |= t,
        e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 4194090
    }
    function is(e, t) {
        var a = e.entangledLanes |= t;
        for (e = e.entanglements; a; ) {
            var i = 31 - Je(a)
              , r = 1 << i;
            r & t | e[i] & t && (e[i] |= t),
            a &= ~r
        }
    }
    function cl(e) {
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
    function fl(e) {
        return e &= -e,
        2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function os() {
        var e = D.p;
        return e !== 0 ? e : (e = window.event,
        e === void 0 ? 32 : fp(e.type))
    }
    function Ai(e, t) {
        var a = D.p;
        try {
            return D.p = e,
            t()
        } finally {
            D.p = a
        }
    }
    var va = Math.random().toString(36).slice(2)
      , bt = "__reactFiber$" + va
      , At = "__reactProps$" + va
      , ka = "__reactContainer$" + va
      , dl = "__reactEvents$" + va
      , Ei = "__reactListeners$" + va
      , Ci = "__reactHandles$" + va
      , rs = "__reactResources$" + va
      , rn = "__reactMarker$" + va;
    function hl(e) {
        delete e[bt],
        delete e[At],
        delete e[dl],
        delete e[Ei],
        delete e[Ci]
    }
    function Pa(e) {
        var t = e[bt];
        if (t)
            return t;
        for (var a = e.parentNode; a; ) {
            if (t = a[ka] || a[bt]) {
                if (a = t.alternate,
                t.child !== null || a !== null && a.child !== null)
                    for (e = Im(e); e !== null; ) {
                        if (a = e[bt])
                            return a;
                        e = Im(e)
                    }
                return t
            }
            e = a,
            a = e.parentNode
        }
        return null
    }
    function Ha(e) {
        if (e = e[bt] || e[ka]) {
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
    function Te(e) {
        var t = e[rs];
        return t || (t = e[rs] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        t
    }
    function ge(e) {
        e[rn] = !0
    }
    var Pe = new Set
      , Le = {};
    function Ue(e, t) {
        Et(e, t),
        Et(e + "Capture", t)
    }
    function Et(e, t) {
        for (Le[e] = t,
        e = 0; e < t.length; e++)
            Pe.add(t[e])
    }
    var Di = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , us = {}
      , st = {};
    function Na(e) {
        return De.call(st, e) ? !0 : De.call(us, e) ? !1 : Di.test(e) ? st[e] = !0 : (us[e] = !0,
        !1)
    }
    function kn(e, t, a) {
        if (Na(t))
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
    function Pn(e, t, a) {
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
    function Ya(e, t, a, i) {
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
    var ir, Lf;
    function ml(e) {
        if (ir === void 0)
            try {
                throw Error()
            } catch (a) {
                var t = a.stack.trim().match(/\n( *(at )?)/);
                ir = t && t[1] || "",
                Lf = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + ir + e + Lf
    }
    var or = !1;
    function rr(e, t) {
        if (!e || or)
            return "";
        or = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var i = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var Z = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(Z.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(Z, [])
                                } catch (H) {
                                    var k = H
                                }
                                Reflect.construct(e, [], Z)
                            } else {
                                try {
                                    Z.call()
                                } catch (H) {
                                    k = H
                                }
                                e.call(Z.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (H) {
                                k = H
                            }
                            (Z = e()) && typeof Z.catch == "function" && Z.catch(function() {})
                        }
                    } catch (H) {
                        if (H && k && typeof H.stack == "string")
                            return [H.stack, k.stack]
                    }
                    return [null, null]
                }
            };
            i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var r = Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot, "name");
            r && r.configurable && Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var c = i.DetermineComponentFrameRoot()
              , y = c[0]
              , b = c[1];
            if (y && b) {
                var A = y.split(`
`)
                  , L = b.split(`
`);
                for (r = i = 0; i < A.length && !A[i].includes("DetermineComponentFrameRoot"); )
                    i++;
                for (; r < L.length && !L[r].includes("DetermineComponentFrameRoot"); )
                    r++;
                if (i === A.length || r === L.length)
                    for (i = A.length - 1,
                    r = L.length - 1; 1 <= i && 0 <= r && A[i] !== L[r]; )
                        r--;
                for (; 1 <= i && 0 <= r; i--,
                r--)
                    if (A[i] !== L[r]) {
                        if (i !== 1 || r !== 1)
                            do
                                if (i--,
                                r--,
                                0 > r || A[i] !== L[r]) {
                                    var G = `
` + A[i].replace(" at new ", " at ");
                                    return e.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", e.displayName)),
                                    G
                                }
                            while (1 <= i && 0 <= r);
                        break
                    }
            }
        } finally {
            or = !1,
            Error.prepareStackTrace = a
        }
        return (a = e ? e.displayName || e.name : "") ? ml(a) : ""
    }
    function $0(e) {
        switch (e.tag) {
        case 26:
        case 27:
        case 5:
            return ml(e.type);
        case 16:
            return ml("Lazy");
        case 13:
            return ml("Suspense");
        case 19:
            return ml("SuspenseList");
        case 0:
        case 15:
            return rr(e.type, !1);
        case 11:
            return rr(e.type.render, !1);
        case 1:
            return rr(e.type, !0);
        case 31:
            return ml("Activity");
        default:
            return ""
        }
    }
    function kf(e) {
        try {
            var t = "";
            do
                t += $0(e),
                e = e.return;
            while (e);
            return t
        } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack
        }
    }
    function ta(e) {
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
    function Pf(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function W0(e) {
        var t = Pf(e) ? "checked" : "value"
          , a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
          , i = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var r = a.get
              , c = a.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return r.call(this)
                },
                set: function(y) {
                    i = "" + y,
                    c.call(this, y)
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
    function Mi(e) {
        e._valueTracker || (e._valueTracker = W0(e))
    }
    function Hf(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var a = t.getValue()
          , i = "";
        return e && (i = Pf(e) ? e.checked ? "true" : "false" : e.value),
        e = i,
        e !== a ? (t.setValue(e),
        !0) : !1
    }
    function _i(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var ex = /[\n"\\]/g;
    function aa(e) {
        return e.replace(ex, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function ur(e, t, a, i, r, c, y, b) {
        e.name = "",
        y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.type = y : e.removeAttribute("type"),
        t != null ? y === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + ta(t)) : e.value !== "" + ta(t) && (e.value = "" + ta(t)) : y !== "submit" && y !== "reset" || e.removeAttribute("value"),
        t != null ? cr(e, y, ta(t)) : a != null ? cr(e, y, ta(a)) : i != null && e.removeAttribute("value"),
        r == null && c != null && (e.defaultChecked = !!c),
        r != null && (e.checked = r && typeof r != "function" && typeof r != "symbol"),
        b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? e.name = "" + ta(b) : e.removeAttribute("name")
    }
    function Yf(e, t, a, i, r, c, y, b) {
        if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c),
        t != null || a != null) {
            if (!(c !== "submit" && c !== "reset" || t != null))
                return;
            a = a != null ? "" + ta(a) : "",
            t = t != null ? "" + ta(t) : a,
            b || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        i = i ?? r,
        i = typeof i != "function" && typeof i != "symbol" && !!i,
        e.checked = b ? e.checked : !!i,
        e.defaultChecked = !!i,
        y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (e.name = y)
    }
    function cr(e, t, a) {
        t === "number" && _i(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a)
    }
    function pl(e, t, a, i) {
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
            for (a = "" + ta(a),
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
    function qf(e, t, a) {
        if (t != null && (t = "" + ta(t),
        t !== e.value && (e.value = t),
        a == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = a != null ? "" + ta(a) : ""
    }
    function Gf(e, t, a, i) {
        if (t == null) {
            if (i != null) {
                if (a != null)
                    throw Error(o(92));
                if (F(i)) {
                    if (1 < i.length)
                        throw Error(o(93));
                    i = i[0]
                }
                a = i
            }
            a == null && (a = ""),
            t = a
        }
        a = ta(t),
        e.defaultValue = a,
        i = e.textContent,
        i === a && i !== "" && i !== null && (e.value = i)
    }
    function gl(e, t) {
        if (t) {
            var a = e.firstChild;
            if (a && a === e.lastChild && a.nodeType === 3) {
                a.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var tx = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Xf(e, t, a) {
        var i = t.indexOf("--") === 0;
        a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || tx.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px"
    }
    function Ff(e, t, a) {
        if (t != null && typeof t != "object")
            throw Error(o(62));
        if (e = e.style,
        a != null) {
            for (var i in a)
                !a.hasOwnProperty(i) || t != null && t.hasOwnProperty(i) || (i.indexOf("--") === 0 ? e.setProperty(i, "") : i === "float" ? e.cssFloat = "" : e[i] = "");
            for (var r in t)
                i = t[r],
                t.hasOwnProperty(r) && a[r] !== i && Xf(e, r, i)
        } else
            for (var c in t)
                t.hasOwnProperty(c) && Xf(e, c, t[c])
    }
    function fr(e) {
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
    var ax = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , nx = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Oi(e) {
        return nx.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    var dr = null;
    function hr(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var yl = null
      , xl = null;
    function Kf(e) {
        var t = Ha(e);
        if (t && (e = t.stateNode)) {
            var a = e[At] || null;
            e: switch (e = t.stateNode,
            t.type) {
            case "input":
                if (ur(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name),
                t = a.name,
                a.type === "radio" && t != null) {
                    for (a = e; a.parentNode; )
                        a = a.parentNode;
                    for (a = a.querySelectorAll('input[name="' + aa("" + t) + '"][type="radio"]'),
                    t = 0; t < a.length; t++) {
                        var i = a[t];
                        if (i !== e && i.form === e.form) {
                            var r = i[At] || null;
                            if (!r)
                                throw Error(o(90));
                            ur(i, r.value, r.defaultValue, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name)
                        }
                    }
                    for (t = 0; t < a.length; t++)
                        i = a[t],
                        i.form === e.form && Hf(i)
                }
                break e;
            case "textarea":
                qf(e, a.value, a.defaultValue);
                break e;
            case "select":
                t = a.value,
                t != null && pl(e, !!a.multiple, t, !1)
            }
        }
    }
    var mr = !1;
    function Qf(e, t, a) {
        if (mr)
            return e(t, a);
        mr = !0;
        try {
            var i = e(t);
            return i
        } finally {
            if (mr = !1,
            (yl !== null || xl !== null) && (xo(),
            yl && (t = yl,
            e = xl,
            xl = yl = null,
            Kf(t),
            e)))
                for (t = 0; t < e.length; t++)
                    Kf(e[t])
        }
    }
    function cs(e, t) {
        var a = e.stateNode;
        if (a === null)
            return null;
        var i = a[At] || null;
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
    var qa = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , pr = !1;
    if (qa)
        try {
            var fs = {};
            Object.defineProperty(fs, "passive", {
                get: function() {
                    pr = !0
                }
            }),
            window.addEventListener("test", fs, fs),
            window.removeEventListener("test", fs, fs)
        } catch {
            pr = !1
        }
    var cn = null
      , gr = null
      , Ri = null;
    function Zf() {
        if (Ri)
            return Ri;
        var e, t = gr, a = t.length, i, r = "value"in cn ? cn.value : cn.textContent, c = r.length;
        for (e = 0; e < a && t[e] === r[e]; e++)
            ;
        var y = a - e;
        for (i = 1; i <= y && t[a - i] === r[c - i]; i++)
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
    function Ui() {
        return !0
    }
    function If() {
        return !1
    }
    function Ht(e) {
        function t(a, i, r, c, y) {
            this._reactName = a,
            this._targetInst = r,
            this.type = i,
            this.nativeEvent = c,
            this.target = y,
            this.currentTarget = null;
            for (var b in e)
                e.hasOwnProperty(b) && (a = e[b],
                this[b] = a ? a(c) : c[b]);
            return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? Ui : If,
            this.isPropagationStopped = If,
            this
        }
        return x(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1),
                this.isDefaultPrevented = Ui)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
                this.isPropagationStopped = Ui)
            },
            persist: function() {},
            isPersistent: Ui
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
    }, zi = Ht(Hn), ds = x({}, Hn, {
        view: 0,
        detail: 0
    }), lx = Ht(ds), yr, xr, hs, Bi = x({}, ds, {
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
        getModifierState: br,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== hs && (hs && e.type === "mousemove" ? (yr = e.screenX - hs.screenX,
            xr = e.screenY - hs.screenY) : xr = yr = 0,
            hs = e),
            yr)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : xr
        }
    }), Jf = Ht(Bi), sx = x({}, Bi, {
        dataTransfer: 0
    }), ix = Ht(sx), ox = x({}, ds, {
        relatedTarget: 0
    }), vr = Ht(ox), rx = x({}, Hn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), ux = Ht(rx), cx = x({}, Hn, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), fx = Ht(cx), dx = x({}, Hn, {
        data: 0
    }), $f = Ht(dx), hx = {
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
    }, mx = {
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
    }, px = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function gx(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = px[e]) ? !!t[e] : !1
    }
    function br() {
        return gx
    }
    var yx = x({}, ds, {
        key: function(e) {
            if (e.key) {
                var t = hx[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = Vi(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? mx[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: br,
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
      , xx = Ht(yx)
      , vx = x({}, Bi, {
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
      , Wf = Ht(vx)
      , bx = x({}, ds, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: br
    })
      , Sx = Ht(bx)
      , wx = x({}, Hn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , jx = Ht(wx)
      , Tx = x({}, Bi, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , Nx = Ht(Tx)
      , Ax = x({}, Hn, {
        newState: 0,
        oldState: 0
    })
      , Ex = Ht(Ax)
      , Cx = [9, 13, 27, 32]
      , Sr = qa && "CompositionEvent"in window
      , ms = null;
    qa && "documentMode"in document && (ms = document.documentMode);
    var Dx = qa && "TextEvent"in window && !ms
      , ed = qa && (!Sr || ms && 8 < ms && 11 >= ms)
      , td = " "
      , ad = !1;
    function nd(e, t) {
        switch (e) {
        case "keyup":
            return Cx.indexOf(t.keyCode) !== -1;
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
    function ld(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var vl = !1;
    function Mx(e, t) {
        switch (e) {
        case "compositionend":
            return ld(t);
        case "keypress":
            return t.which !== 32 ? null : (ad = !0,
            td);
        case "textInput":
            return e = t.data,
            e === td && ad ? null : e;
        default:
            return null
        }
    }
    function _x(e, t) {
        if (vl)
            return e === "compositionend" || !Sr && nd(e, t) ? (e = Zf(),
            Ri = gr = cn = null,
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
            return ed && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var Ox = {
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
    function sd(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Ox[e.type] : t === "textarea"
    }
    function id(e, t, a, i) {
        yl ? xl ? xl.push(i) : xl = [i] : yl = i,
        t = To(t, "onChange"),
        0 < t.length && (a = new zi("onChange","change",null,a,i),
        e.push({
            event: a,
            listeners: t
        }))
    }
    var ps = null
      , gs = null;
    function Rx(e) {
        Pm(e, 0)
    }
    function Li(e) {
        var t = un(e);
        if (Hf(t))
            return e
    }
    function od(e, t) {
        if (e === "change")
            return t
    }
    var rd = !1;
    if (qa) {
        var wr;
        if (qa) {
            var jr = "oninput"in document;
            if (!jr) {
                var ud = document.createElement("div");
                ud.setAttribute("oninput", "return;"),
                jr = typeof ud.oninput == "function"
            }
            wr = jr
        } else
            wr = !1;
        rd = wr && (!document.documentMode || 9 < document.documentMode)
    }
    function cd() {
        ps && (ps.detachEvent("onpropertychange", fd),
        gs = ps = null)
    }
    function fd(e) {
        if (e.propertyName === "value" && Li(gs)) {
            var t = [];
            id(t, gs, e, hr(e)),
            Qf(Rx, t)
        }
    }
    function Vx(e, t, a) {
        e === "focusin" ? (cd(),
        ps = t,
        gs = a,
        ps.attachEvent("onpropertychange", fd)) : e === "focusout" && cd()
    }
    function Ux(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return Li(gs)
    }
    function zx(e, t) {
        if (e === "click")
            return Li(t)
    }
    function Bx(e, t) {
        if (e === "input" || e === "change")
            return Li(t)
    }
    function Lx(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var Kt = typeof Object.is == "function" ? Object.is : Lx;
    function ys(e, t) {
        if (Kt(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var a = Object.keys(e)
          , i = Object.keys(t);
        if (a.length !== i.length)
            return !1;
        for (i = 0; i < a.length; i++) {
            var r = a[i];
            if (!De.call(t, r) || !Kt(e[r], t[r]))
                return !1
        }
        return !0
    }
    function dd(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function hd(e, t) {
        var a = dd(e);
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
            a = dd(a)
        }
    }
    function md(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? md(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function pd(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = _i(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
                var a = typeof t.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a)
                e = t.contentWindow;
            else
                break;
            t = _i(e.document)
        }
        return t
    }
    function Tr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var kx = qa && "documentMode"in document && 11 >= document.documentMode
      , bl = null
      , Nr = null
      , xs = null
      , Ar = !1;
    function gd(e, t, a) {
        var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        Ar || bl == null || bl !== _i(i) || (i = bl,
        "selectionStart"in i && Tr(i) ? i = {
            start: i.selectionStart,
            end: i.selectionEnd
        } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(),
        i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset
        }),
        xs && ys(xs, i) || (xs = i,
        i = To(Nr, "onSelect"),
        0 < i.length && (t = new zi("onSelect","select",null,t,a),
        e.push({
            event: t,
            listeners: i
        }),
        t.target = bl)))
    }
    function Yn(e, t) {
        var a = {};
        return a[e.toLowerCase()] = t.toLowerCase(),
        a["Webkit" + e] = "webkit" + t,
        a["Moz" + e] = "moz" + t,
        a
    }
    var Sl = {
        animationend: Yn("Animation", "AnimationEnd"),
        animationiteration: Yn("Animation", "AnimationIteration"),
        animationstart: Yn("Animation", "AnimationStart"),
        transitionrun: Yn("Transition", "TransitionRun"),
        transitionstart: Yn("Transition", "TransitionStart"),
        transitioncancel: Yn("Transition", "TransitionCancel"),
        transitionend: Yn("Transition", "TransitionEnd")
    }
      , Er = {}
      , yd = {};
    qa && (yd = document.createElement("div").style,
    "AnimationEvent"in window || (delete Sl.animationend.animation,
    delete Sl.animationiteration.animation,
    delete Sl.animationstart.animation),
    "TransitionEvent"in window || delete Sl.transitionend.transition);
    function qn(e) {
        if (Er[e])
            return Er[e];
        if (!Sl[e])
            return e;
        var t = Sl[e], a;
        for (a in t)
            if (t.hasOwnProperty(a) && a in yd)
                return Er[e] = t[a];
        return e
    }
    var xd = qn("animationend")
      , vd = qn("animationiteration")
      , bd = qn("animationstart")
      , Px = qn("transitionrun")
      , Hx = qn("transitionstart")
      , Yx = qn("transitioncancel")
      , Sd = qn("transitionend")
      , wd = new Map
      , Cr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Cr.push("scrollEnd");
    function ba(e, t) {
        wd.set(e, t),
        Ue(t, [e])
    }
    var jd = new WeakMap;
    function na(e, t) {
        if (typeof e == "object" && e !== null) {
            var a = jd.get(e);
            return a !== void 0 ? a : (t = {
                value: e,
                source: t,
                stack: kf(t)
            },
            jd.set(e, t),
            t)
        }
        return {
            value: e,
            source: t,
            stack: kf(t)
        }
    }
    var la = []
      , wl = 0
      , Dr = 0;
    function ki() {
        for (var e = wl, t = Dr = wl = 0; t < e; ) {
            var a = la[t];
            la[t++] = null;
            var i = la[t];
            la[t++] = null;
            var r = la[t];
            la[t++] = null;
            var c = la[t];
            if (la[t++] = null,
            i !== null && r !== null) {
                var y = i.pending;
                y === null ? r.next = r : (r.next = y.next,
                y.next = r),
                i.pending = r
            }
            c !== 0 && Td(a, r, c)
        }
    }
    function Pi(e, t, a, i) {
        la[wl++] = e,
        la[wl++] = t,
        la[wl++] = a,
        la[wl++] = i,
        Dr |= i,
        e.lanes |= i,
        e = e.alternate,
        e !== null && (e.lanes |= i)
    }
    function Mr(e, t, a, i) {
        return Pi(e, t, a, i),
        Hi(e)
    }
    function jl(e, t) {
        return Pi(e, null, null, t),
        Hi(e)
    }
    function Td(e, t, a) {
        e.lanes |= a;
        var i = e.alternate;
        i !== null && (i.lanes |= a);
        for (var r = !1, c = e.return; c !== null; )
            c.childLanes |= a,
            i = c.alternate,
            i !== null && (i.childLanes |= a),
            c.tag === 22 && (e = c.stateNode,
            e === null || e._visibility & 1 || (r = !0)),
            e = c,
            c = c.return;
        return e.tag === 3 ? (c = e.stateNode,
        r && t !== null && (r = 31 - Je(a),
        e = c.hiddenUpdates,
        i = e[r],
        i === null ? e[r] = [t] : i.push(t),
        t.lane = a | 536870912),
        c) : null
    }
    function Hi(e) {
        if (50 < qs)
            throw qs = 0,
            zu = null,
            Error(o(185));
        for (var t = e.return; t !== null; )
            e = t,
            t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var Tl = {};
    function qx(e, t, a, i) {
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
    function Qt(e, t, a, i) {
        return new qx(e,t,a,i)
    }
    function _r(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function Ga(e, t) {
        var a = e.alternate;
        return a === null ? (a = Qt(e.tag, t, e.key, e.mode),
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
    function Nd(e, t) {
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
    function Yi(e, t, a, i, r, c) {
        var y = 0;
        if (i = e,
        typeof e == "function")
            _r(e) && (y = 1);
        else if (typeof e == "string")
            y = Xv(e, a, le.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else
            e: switch (e) {
            case re:
                return e = Qt(31, a, t, r),
                e.elementType = re,
                e.lanes = c,
                e;
            case E:
                return Gn(a.children, r, c, t);
            case _:
                y = 8,
                r |= 24;
                break;
            case M:
                return e = Qt(12, a, t, r | 2),
                e.elementType = M,
                e.lanes = c,
                e;
            case O:
                return e = Qt(13, a, t, r),
                e.elementType = O,
                e.lanes = c,
                e;
            case q:
                return e = Qt(19, a, t, r),
                e.elementType = q,
                e.lanes = c,
                e;
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case U:
                    case B:
                        y = 10;
                        break e;
                    case P:
                        y = 9;
                        break e;
                    case X:
                        y = 11;
                        break e;
                    case I:
                        y = 14;
                        break e;
                    case Q:
                        y = 16,
                        i = null;
                        break e
                    }
                y = 29,
                a = Error(o(130, e === null ? "null" : typeof e, "")),
                i = null
            }
        return t = Qt(y, a, t, r),
        t.elementType = e,
        t.type = i,
        t.lanes = c,
        t
    }
    function Gn(e, t, a, i) {
        return e = Qt(7, e, i, t),
        e.lanes = a,
        e
    }
    function Or(e, t, a) {
        return e = Qt(6, e, null, t),
        e.lanes = a,
        e
    }
    function Rr(e, t, a) {
        return t = Qt(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = a,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    var Nl = []
      , Al = 0
      , qi = null
      , Gi = 0
      , sa = []
      , ia = 0
      , Xn = null
      , Xa = 1
      , Fa = "";
    function Fn(e, t) {
        Nl[Al++] = Gi,
        Nl[Al++] = qi,
        qi = e,
        Gi = t
    }
    function Ad(e, t, a) {
        sa[ia++] = Xa,
        sa[ia++] = Fa,
        sa[ia++] = Xn,
        Xn = e;
        var i = Xa;
        e = Fa;
        var r = 32 - Je(i) - 1;
        i &= ~(1 << r),
        a += 1;
        var c = 32 - Je(t) + r;
        if (30 < c) {
            var y = r - r % 5;
            c = (i & (1 << y) - 1).toString(32),
            i >>= y,
            r -= y,
            Xa = 1 << 32 - Je(t) + r | a << r | i,
            Fa = c + e
        } else
            Xa = 1 << c | a << r | i,
            Fa = e
    }
    function Vr(e) {
        e.return !== null && (Fn(e, 1),
        Ad(e, 1, 0))
    }
    function Ur(e) {
        for (; e === qi; )
            qi = Nl[--Al],
            Nl[Al] = null,
            Gi = Nl[--Al],
            Nl[Al] = null;
        for (; e === Xn; )
            Xn = sa[--ia],
            sa[ia] = null,
            Fa = sa[--ia],
            sa[ia] = null,
            Xa = sa[--ia],
            sa[ia] = null
    }
    var Bt = null
      , it = null
      , ke = !1
      , Kn = null
      , Aa = !1
      , zr = Error(o(519));
    function Qn(e) {
        var t = Error(o(418, ""));
        throw Ss(na(t, e)),
        zr
    }
    function Ed(e) {
        var t = e.stateNode
          , a = e.type
          , i = e.memoizedProps;
        switch (t[bt] = e,
        t[At] = i,
        a) {
        case "dialog":
            _e("cancel", t),
            _e("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            _e("load", t);
            break;
        case "video":
        case "audio":
            for (a = 0; a < Xs.length; a++)
                _e(Xs[a], t);
            break;
        case "source":
            _e("error", t);
            break;
        case "img":
        case "image":
        case "link":
            _e("error", t),
            _e("load", t);
            break;
        case "details":
            _e("toggle", t);
            break;
        case "input":
            _e("invalid", t),
            Yf(t, i.value, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name, !0),
            Mi(t);
            break;
        case "select":
            _e("invalid", t);
            break;
        case "textarea":
            _e("invalid", t),
            Gf(t, i.value, i.defaultValue, i.children),
            Mi(t)
        }
        a = i.children,
        typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || Gm(t.textContent, a) ? (i.popover != null && (_e("beforetoggle", t),
        _e("toggle", t)),
        i.onScroll != null && _e("scroll", t),
        i.onScrollEnd != null && _e("scrollend", t),
        i.onClick != null && (t.onclick = No),
        t = !0) : t = !1,
        t || Qn(e)
    }
    function Cd(e) {
        for (Bt = e.return; Bt; )
            switch (Bt.tag) {
            case 5:
            case 13:
                Aa = !1;
                return;
            case 27:
            case 3:
                Aa = !0;
                return;
            default:
                Bt = Bt.return
            }
    }
    function vs(e) {
        if (e !== Bt)
            return !1;
        if (!ke)
            return Cd(e),
            ke = !0,
            !1;
        var t = e.tag, a;
        if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type,
        a = !(a !== "form" && a !== "button") || $u(e.type, e.memoizedProps)),
        a = !a),
        a && it && Qn(e),
        Cd(e),
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
                                it = wa(e.nextSibling);
                                break e
                            }
                            t--
                        } else
                            a !== "$" && a !== "$!" && a !== "$?" || t++;
                    e = e.nextSibling
                }
                it = null
            }
        } else
            t === 27 ? (t = it,
            An(e.type) ? (e = ac,
            ac = null,
            it = e) : it = t) : it = Bt ? wa(e.stateNode.nextSibling) : null;
        return !0
    }
    function bs() {
        it = Bt = null,
        ke = !1
    }
    function Dd() {
        var e = Kn;
        return e !== null && (Gt === null ? Gt = e : Gt.push.apply(Gt, e),
        Kn = null),
        e
    }
    function Ss(e) {
        Kn === null ? Kn = [e] : Kn.push(e)
    }
    var Br = V(null)
      , Zn = null
      , Ka = null;
    function fn(e, t, a) {
        W(Br, t._currentValue),
        t._currentValue = a
    }
    function Qa(e) {
        e._currentValue = Br.current,
        te(Br)
    }
    function Lr(e, t, a) {
        for (; e !== null; ) {
            var i = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
            e === a)
                break;
            e = e.return
        }
    }
    function kr(e, t, a, i) {
        var r = e.child;
        for (r !== null && (r.return = e); r !== null; ) {
            var c = r.dependencies;
            if (c !== null) {
                var y = r.child;
                c = c.firstContext;
                e: for (; c !== null; ) {
                    var b = c;
                    c = r;
                    for (var A = 0; A < t.length; A++)
                        if (b.context === t[A]) {
                            c.lanes |= a,
                            b = c.alternate,
                            b !== null && (b.lanes |= a),
                            Lr(c.return, a, e),
                            i || (y = null);
                            break e
                        }
                    c = b.next
                }
            } else if (r.tag === 18) {
                if (y = r.return,
                y === null)
                    throw Error(o(341));
                y.lanes |= a,
                c = y.alternate,
                c !== null && (c.lanes |= a),
                Lr(y, a, e),
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
    function ws(e, t, a, i) {
        e = null;
        for (var r = t, c = !1; r !== null; ) {
            if (!c) {
                if ((r.flags & 524288) !== 0)
                    c = !0;
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
                    Kt(r.pendingProps.value, y.value) || (e !== null ? e.push(b) : e = [b])
                }
            } else if (r === de.current) {
                if (y = r.alternate,
                y === null)
                    throw Error(o(387));
                y.memoizedState.memoizedState !== r.memoizedState.memoizedState && (e !== null ? e.push(Js) : e = [Js])
            }
            r = r.return
        }
        e !== null && kr(t, e, a, i),
        t.flags |= 262144
    }
    function Xi(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!Kt(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next
        }
        return !1
    }
    function In(e) {
        Zn = e,
        Ka = null,
        e = e.dependencies,
        e !== null && (e.firstContext = null)
    }
    function Vt(e) {
        return Md(Zn, e)
    }
    function Fi(e, t) {
        return Zn === null && In(e),
        Md(e, t)
    }
    function Md(e, t) {
        var a = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: a,
            next: null
        },
        Ka === null) {
            if (e === null)
                throw Error(o(308));
            Ka = t,
            e.dependencies = {
                lanes: 0,
                firstContext: t
            },
            e.flags |= 524288
        } else
            Ka = Ka.next = t;
        return a
    }
    var Gx = typeof AbortController < "u" ? AbortController : function() {
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
      , Xx = n.unstable_scheduleCallback
      , Fx = n.unstable_NormalPriority
      , St = {
        $$typeof: B,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function Pr() {
        return {
            controller: new Gx,
            data: new Map,
            refCount: 0
        }
    }
    function js(e) {
        e.refCount--,
        e.refCount === 0 && Xx(Fx, function() {
            e.controller.abort()
        })
    }
    var Ts = null
      , Hr = 0
      , El = 0
      , Cl = null;
    function Kx(e, t) {
        if (Ts === null) {
            var a = Ts = [];
            Hr = 0,
            El = qu(),
            Cl = {
                status: "pending",
                value: void 0,
                then: function(i) {
                    a.push(i)
                }
            }
        }
        return Hr++,
        t.then(_d, _d),
        t
    }
    function _d() {
        if (--Hr === 0 && Ts !== null) {
            Cl !== null && (Cl.status = "fulfilled");
            var e = Ts;
            Ts = null,
            El = 0,
            Cl = null;
            for (var t = 0; t < e.length; t++)
                (0,
                e[t])()
        }
    }
    function Qx(e, t) {
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
    var Od = T.S;
    T.S = function(e, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && Kx(e, t),
        Od !== null && Od(e, t)
    }
    ;
    var Jn = V(null);
    function Yr() {
        var e = Jn.current;
        return e !== null ? e : Ze.pooledCache
    }
    function Ki(e, t) {
        t === null ? W(Jn, Jn.current) : W(Jn, t.pool)
    }
    function Rd() {
        var e = Yr();
        return e === null ? null : {
            parent: St._currentValue,
            pool: e
        }
    }
    var Ns = Error(o(460))
      , Vd = Error(o(474))
      , Qi = Error(o(542))
      , qr = {
        then: function() {}
    };
    function Ud(e) {
        return e = e.status,
        e === "fulfilled" || e === "rejected"
    }
    function Zi() {}
    function zd(e, t, a) {
        switch (a = e[a],
        a === void 0 ? e.push(t) : a !== t && (t.then(Zi, Zi),
        t = a),
        t.status) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw e = t.reason,
            Ld(e),
            e;
        default:
            if (typeof t.status == "string")
                t.then(Zi, Zi);
            else {
                if (e = Ze,
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
                Ld(e),
                e
            }
            throw As = t,
            Ns
        }
    }
    var As = null;
    function Bd() {
        if (As === null)
            throw Error(o(459));
        var e = As;
        return As = null,
        e
    }
    function Ld(e) {
        if (e === Ns || e === Qi)
            throw Error(o(483))
    }
    var dn = !1;
    function Gr(e) {
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
    function Xr(e, t) {
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
        (He & 2) !== 0) {
            var r = i.pending;
            return r === null ? t.next = t : (t.next = r.next,
            r.next = t),
            i.pending = t,
            t = Hi(e),
            Td(e, null, a),
            t
        }
        return Pi(e, i, t, a),
        Hi(e)
    }
    function Es(e, t, a) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (a & 4194048) !== 0)) {
            var i = t.lanes;
            i &= e.pendingLanes,
            a |= i,
            t.lanes = a,
            is(e, a)
        }
    }
    function Fr(e, t) {
        var a = e.updateQueue
          , i = e.alternate;
        if (i !== null && (i = i.updateQueue,
        a === i)) {
            var r = null
              , c = null;
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
                    c === null ? r = c = y : c = c.next = y,
                    a = a.next
                } while (a !== null);
                c === null ? r = c = t : c = c.next = t
            } else
                r = c = t;
            a = {
                baseState: i.baseState,
                firstBaseUpdate: r,
                lastBaseUpdate: c,
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
            var e = Cl;
            if (e !== null)
                throw e
        }
    }
    function Ds(e, t, a, i) {
        Kr = !1;
        var r = e.updateQueue;
        dn = !1;
        var c = r.firstBaseUpdate
          , y = r.lastBaseUpdate
          , b = r.shared.pending;
        if (b !== null) {
            r.shared.pending = null;
            var A = b
              , L = A.next;
            A.next = null,
            y === null ? c = L : y.next = L,
            y = A;
            var G = e.alternate;
            G !== null && (G = G.updateQueue,
            b = G.lastBaseUpdate,
            b !== y && (b === null ? G.firstBaseUpdate = L : b.next = L,
            G.lastBaseUpdate = A))
        }
        if (c !== null) {
            var Z = r.baseState;
            y = 0,
            G = L = A = null,
            b = c;
            do {
                var k = b.lane & -536870913
                  , H = k !== b.lane;
                if (H ? (ze & k) === k : (i & k) === k) {
                    k !== 0 && k === El && (Kr = !0),
                    G !== null && (G = G.next = {
                        lane: 0,
                        tag: b.tag,
                        payload: b.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var Se = e
                          , xe = b;
                        k = t;
                        var Fe = a;
                        switch (xe.tag) {
                        case 1:
                            if (Se = xe.payload,
                            typeof Se == "function") {
                                Z = Se.call(Fe, Z, k);
                                break e
                            }
                            Z = Se;
                            break e;
                        case 3:
                            Se.flags = Se.flags & -65537 | 128;
                        case 0:
                            if (Se = xe.payload,
                            k = typeof Se == "function" ? Se.call(Fe, Z, k) : Se,
                            k == null)
                                break e;
                            Z = x({}, Z, k);
                            break e;
                        case 2:
                            dn = !0
                        }
                    }
                    k = b.callback,
                    k !== null && (e.flags |= 64,
                    H && (e.flags |= 8192),
                    H = r.callbacks,
                    H === null ? r.callbacks = [k] : H.push(k))
                } else
                    H = {
                        lane: k,
                        tag: b.tag,
                        payload: b.payload,
                        callback: b.callback,
                        next: null
                    },
                    G === null ? (L = G = H,
                    A = Z) : G = G.next = H,
                    y |= k;
                if (b = b.next,
                b === null) {
                    if (b = r.shared.pending,
                    b === null)
                        break;
                    H = b,
                    b = H.next,
                    H.next = null,
                    r.lastBaseUpdate = H,
                    r.shared.pending = null
                }
            } while (!0);
            G === null && (A = Z),
            r.baseState = A,
            r.firstBaseUpdate = L,
            r.lastBaseUpdate = G,
            c === null && (r.shared.lanes = 0),
            wn |= y,
            e.lanes = y,
            e.memoizedState = Z
        }
    }
    function kd(e, t) {
        if (typeof e != "function")
            throw Error(o(191, e));
        e.call(t)
    }
    function Pd(e, t) {
        var a = e.callbacks;
        if (a !== null)
            for (e.callbacks = null,
            e = 0; e < a.length; e++)
                kd(a[e], t)
    }
    var Dl = V(null)
      , Ii = V(0);
    function Hd(e, t) {
        e = tn,
        W(Ii, e),
        W(Dl, t),
        tn = e | t.baseLanes
    }
    function Qr() {
        W(Ii, tn),
        W(Dl, Dl.current)
    }
    function Zr() {
        tn = Ii.current,
        te(Dl),
        te(Ii)
    }
    var pn = 0
      , Ee = null
      , Ge = null
      , pt = null
      , Ji = !1
      , Ml = !1
      , $n = !1
      , $i = 0
      , Ms = 0
      , _l = null
      , Zx = 0;
    function ft() {
        throw Error(o(321))
    }
    function Ir(e, t) {
        if (t === null)
            return !1;
        for (var a = 0; a < t.length && a < e.length; a++)
            if (!Kt(e[a], t[a]))
                return !1;
        return !0
    }
    function Jr(e, t, a, i, r, c) {
        return pn = c,
        Ee = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        T.H = e === null || e.memoizedState === null ? Th : Nh,
        $n = !1,
        c = a(i, r),
        $n = !1,
        Ml && (c = qd(t, a, i, r)),
        Yd(e),
        c
    }
    function Yd(e) {
        T.H = lo;
        var t = Ge !== null && Ge.next !== null;
        if (pn = 0,
        pt = Ge = Ee = null,
        Ji = !1,
        Ms = 0,
        _l = null,
        t)
            throw Error(o(300));
        e === null || jt || (e = e.dependencies,
        e !== null && Xi(e) && (jt = !0))
    }
    function qd(e, t, a, i) {
        Ee = e;
        var r = 0;
        do {
            if (Ml && (_l = null),
            Ms = 0,
            Ml = !1,
            25 <= r)
                throw Error(o(301));
            if (r += 1,
            pt = Ge = null,
            e.updateQueue != null) {
                var c = e.updateQueue;
                c.lastEffect = null,
                c.events = null,
                c.stores = null,
                c.memoCache != null && (c.memoCache.index = 0)
            }
            T.H = av,
            c = t(a, i)
        } while (Ml);
        return c
    }
    function Ix() {
        var e = T.H
          , t = e.useState()[0];
        return t = typeof t.then == "function" ? _s(t) : t,
        e = e.useState()[0],
        (Ge !== null ? Ge.memoizedState : null) !== e && (Ee.flags |= 1024),
        t
    }
    function $r() {
        var e = $i !== 0;
        return $i = 0,
        e
    }
    function Wr(e, t, a) {
        t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~a
    }
    function eu(e) {
        if (Ji) {
            for (e = e.memoizedState; e !== null; ) {
                var t = e.queue;
                t !== null && (t.pending = null),
                e = e.next
            }
            Ji = !1
        }
        pn = 0,
        pt = Ge = Ee = null,
        Ml = !1,
        Ms = $i = 0,
        _l = null
    }
    function Yt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return pt === null ? Ee.memoizedState = pt = e : pt = pt.next = e,
        pt
    }
    function gt() {
        if (Ge === null) {
            var e = Ee.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = Ge.next;
        var t = pt === null ? Ee.memoizedState : pt.next;
        if (t !== null)
            pt = t,
            Ge = e;
        else {
            if (e === null)
                throw Ee.alternate === null ? Error(o(467)) : Error(o(310));
            Ge = e,
            e = {
                memoizedState: Ge.memoizedState,
                baseState: Ge.baseState,
                baseQueue: Ge.baseQueue,
                queue: Ge.queue,
                next: null
            },
            pt === null ? Ee.memoizedState = pt = e : pt = pt.next = e
        }
        return pt
    }
    function tu() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function _s(e) {
        var t = Ms;
        return Ms += 1,
        _l === null && (_l = []),
        e = zd(_l, e, t),
        t = Ee,
        (pt === null ? t.memoizedState : pt.next) === null && (t = t.alternate,
        T.H = t === null || t.memoizedState === null ? Th : Nh),
        e
    }
    function Wi(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
                return _s(e);
            if (e.$$typeof === B)
                return Vt(e)
        }
        throw Error(o(438, String(e)))
    }
    function au(e) {
        var t = null
          , a = Ee.updateQueue;
        if (a !== null && (t = a.memoCache),
        t == null) {
            var i = Ee.alternate;
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
        a === null && (a = tu(),
        Ee.updateQueue = a),
        a.memoCache = t,
        a = t.data[t.index],
        a === void 0)
            for (a = t.data[t.index] = Array(e),
            i = 0; i < e; i++)
                a[i] = fe;
        return t.index++,
        a
    }
    function Za(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function eo(e) {
        var t = gt();
        return nu(t, Ge, e)
    }
    function nu(e, t, a) {
        var i = e.queue;
        if (i === null)
            throw Error(o(311));
        i.lastRenderedReducer = a;
        var r = e.baseQueue
          , c = i.pending;
        if (c !== null) {
            if (r !== null) {
                var y = r.next;
                r.next = c.next,
                c.next = y
            }
            t.baseQueue = r = c,
            i.pending = null
        }
        if (c = e.baseState,
        r === null)
            e.memoizedState = c;
        else {
            t = r.next;
            var b = y = null
              , A = null
              , L = t
              , G = !1;
            do {
                var Z = L.lane & -536870913;
                if (Z !== L.lane ? (ze & Z) === Z : (pn & Z) === Z) {
                    var k = L.revertLane;
                    if (k === 0)
                        A !== null && (A = A.next = {
                            lane: 0,
                            revertLane: 0,
                            action: L.action,
                            hasEagerState: L.hasEagerState,
                            eagerState: L.eagerState,
                            next: null
                        }),
                        Z === El && (G = !0);
                    else if ((pn & k) === k) {
                        L = L.next,
                        k === El && (G = !0);
                        continue
                    } else
                        Z = {
                            lane: 0,
                            revertLane: L.revertLane,
                            action: L.action,
                            hasEagerState: L.hasEagerState,
                            eagerState: L.eagerState,
                            next: null
                        },
                        A === null ? (b = A = Z,
                        y = c) : A = A.next = Z,
                        Ee.lanes |= k,
                        wn |= k;
                    Z = L.action,
                    $n && a(c, Z),
                    c = L.hasEagerState ? L.eagerState : a(c, Z)
                } else
                    k = {
                        lane: Z,
                        revertLane: L.revertLane,
                        action: L.action,
                        hasEagerState: L.hasEagerState,
                        eagerState: L.eagerState,
                        next: null
                    },
                    A === null ? (b = A = k,
                    y = c) : A = A.next = k,
                    Ee.lanes |= Z,
                    wn |= Z;
                L = L.next
            } while (L !== null && L !== t);
            if (A === null ? y = c : A.next = b,
            !Kt(c, e.memoizedState) && (jt = !0,
            G && (a = Cl,
            a !== null)))
                throw a;
            e.memoizedState = c,
            e.baseState = y,
            e.baseQueue = A,
            i.lastRenderedState = c
        }
        return r === null && (i.lanes = 0),
        [e.memoizedState, i.dispatch]
    }
    function lu(e) {
        var t = gt()
          , a = t.queue;
        if (a === null)
            throw Error(o(311));
        a.lastRenderedReducer = e;
        var i = a.dispatch
          , r = a.pending
          , c = t.memoizedState;
        if (r !== null) {
            a.pending = null;
            var y = r = r.next;
            do
                c = e(c, y.action),
                y = y.next;
            while (y !== r);
            Kt(c, t.memoizedState) || (jt = !0),
            t.memoizedState = c,
            t.baseQueue === null && (t.baseState = c),
            a.lastRenderedState = c
        }
        return [c, i]
    }
    function Gd(e, t, a) {
        var i = Ee
          , r = gt()
          , c = ke;
        if (c) {
            if (a === void 0)
                throw Error(o(407));
            a = a()
        } else
            a = t();
        var y = !Kt((Ge || r).memoizedState, a);
        y && (r.memoizedState = a,
        jt = !0),
        r = r.queue;
        var b = Kd.bind(null, i, r, e);
        if (Os(2048, 8, b, [e]),
        r.getSnapshot !== t || y || pt !== null && pt.memoizedState.tag & 1) {
            if (i.flags |= 2048,
            Ol(9, to(), Fd.bind(null, i, r, a, t), null),
            Ze === null)
                throw Error(o(349));
            c || (pn & 124) !== 0 || Xd(i, t, a)
        }
        return a
    }
    function Xd(e, t, a) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: a
        },
        t = Ee.updateQueue,
        t === null ? (t = tu(),
        Ee.updateQueue = t,
        t.stores = [e]) : (a = t.stores,
        a === null ? t.stores = [e] : a.push(e))
    }
    function Fd(e, t, a, i) {
        t.value = a,
        t.getSnapshot = i,
        Qd(t) && Zd(e)
    }
    function Kd(e, t, a) {
        return a(function() {
            Qd(t) && Zd(e)
        })
    }
    function Qd(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var a = t();
            return !Kt(e, a)
        } catch {
            return !0
        }
    }
    function Zd(e) {
        var t = jl(e, 2);
        t !== null && Wt(t, e, 2)
    }
    function su(e) {
        var t = Yt();
        if (typeof e == "function") {
            var a = e;
            if (e = a(),
            $n) {
                be(!0);
                try {
                    a()
                } finally {
                    be(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e,
        t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Za,
            lastRenderedState: e
        },
        t
    }
    function Id(e, t, a, i) {
        return e.baseState = a,
        nu(e, Ge, typeof i == "function" ? i : Za)
    }
    function Jx(e, t, a, i, r) {
        if (no(e))
            throw Error(o(485));
        if (e = t.action,
        e !== null) {
            var c = {
                payload: r,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(y) {
                    c.listeners.push(y)
                }
            };
            T.T !== null ? a(!0) : c.isTransition = !1,
            i(c),
            a = t.pending,
            a === null ? (c.next = t.pending = c,
            Jd(t, c)) : (c.next = a.next,
            t.pending = a.next = c)
        }
    }
    function Jd(e, t) {
        var a = t.action
          , i = t.payload
          , r = e.state;
        if (t.isTransition) {
            var c = T.T
              , y = {};
            T.T = y;
            try {
                var b = a(r, i)
                  , A = T.S;
                A !== null && A(y, b),
                $d(e, t, b)
            } catch (L) {
                iu(e, t, L)
            } finally {
                T.T = c
            }
        } else
            try {
                c = a(r, i),
                $d(e, t, c)
            } catch (L) {
                iu(e, t, L)
            }
    }
    function $d(e, t, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(i) {
            Wd(e, t, i)
        }, function(i) {
            return iu(e, t, i)
        }) : Wd(e, t, a)
    }
    function Wd(e, t, a) {
        t.status = "fulfilled",
        t.value = a,
        eh(t),
        e.state = a,
        t = e.pending,
        t !== null && (a = t.next,
        a === t ? e.pending = null : (a = a.next,
        t.next = a,
        Jd(e, a)))
    }
    function iu(e, t, a) {
        var i = e.pending;
        if (e.pending = null,
        i !== null) {
            i = i.next;
            do
                t.status = "rejected",
                t.reason = a,
                eh(t),
                t = t.next;
            while (t !== i)
        }
        e.action = null
    }
    function eh(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)
            (0,
            e[t])()
    }
    function th(e, t) {
        return t
    }
    function ah(e, t) {
        if (ke) {
            var a = Ze.formState;
            if (a !== null) {
                e: {
                    var i = Ee;
                    if (ke) {
                        if (it) {
                            t: {
                                for (var r = it, c = Aa; r.nodeType !== 8; ) {
                                    if (!c) {
                                        r = null;
                                        break t
                                    }
                                    if (r = wa(r.nextSibling),
                                    r === null) {
                                        r = null;
                                        break t
                                    }
                                }
                                c = r.data,
                                r = c === "F!" || c === "F" ? r : null
                            }
                            if (r) {
                                it = wa(r.nextSibling),
                                i = r.data === "F!";
                                break e
                            }
                        }
                        Qn(i)
                    }
                    i = !1
                }
                i && (t = a[0])
            }
        }
        return a = Yt(),
        a.memoizedState = a.baseState = t,
        i = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: th,
            lastRenderedState: t
        },
        a.queue = i,
        a = Sh.bind(null, Ee, i),
        i.dispatch = a,
        i = su(!1),
        c = fu.bind(null, Ee, !1, i.queue),
        i = Yt(),
        r = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        },
        i.queue = r,
        a = Jx.bind(null, Ee, r, c, a),
        r.dispatch = a,
        i.memoizedState = e,
        [t, a, !1]
    }
    function nh(e) {
        var t = gt();
        return lh(t, Ge, e)
    }
    function lh(e, t, a) {
        if (t = nu(e, t, th)[0],
        e = eo(Za)[0],
        typeof t == "object" && t !== null && typeof t.then == "function")
            try {
                var i = _s(t)
            } catch (y) {
                throw y === Ns ? Qi : y
            }
        else
            i = t;
        t = gt();
        var r = t.queue
          , c = r.dispatch;
        return a !== t.memoizedState && (Ee.flags |= 2048,
        Ol(9, to(), $x.bind(null, r, a), null)),
        [i, c, e]
    }
    function $x(e, t) {
        e.action = t
    }
    function sh(e) {
        var t = gt()
          , a = Ge;
        if (a !== null)
            return lh(t, a, e);
        gt(),
        t = t.memoizedState,
        a = gt();
        var i = a.queue.dispatch;
        return a.memoizedState = e,
        [t, i, !1]
    }
    function Ol(e, t, a, i) {
        return e = {
            tag: e,
            create: a,
            deps: i,
            inst: t,
            next: null
        },
        t = Ee.updateQueue,
        t === null && (t = tu(),
        Ee.updateQueue = t),
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
    function ih() {
        return gt().memoizedState
    }
    function ao(e, t, a, i) {
        var r = Yt();
        i = i === void 0 ? null : i,
        Ee.flags |= e,
        r.memoizedState = Ol(1 | t, to(), a, i)
    }
    function Os(e, t, a, i) {
        var r = gt();
        i = i === void 0 ? null : i;
        var c = r.memoizedState.inst;
        Ge !== null && i !== null && Ir(i, Ge.memoizedState.deps) ? r.memoizedState = Ol(t, c, a, i) : (Ee.flags |= e,
        r.memoizedState = Ol(1 | t, c, a, i))
    }
    function oh(e, t) {
        ao(8390656, 8, e, t)
    }
    function rh(e, t) {
        Os(2048, 8, e, t)
    }
    function uh(e, t) {
        return Os(4, 2, e, t)
    }
    function ch(e, t) {
        return Os(4, 4, e, t)
    }
    function fh(e, t) {
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
    function dh(e, t, a) {
        a = a != null ? a.concat([e]) : null,
        Os(4, 4, fh.bind(null, t, e), a)
    }
    function ou() {}
    function hh(e, t) {
        var a = gt();
        t = t === void 0 ? null : t;
        var i = a.memoizedState;
        return t !== null && Ir(t, i[1]) ? i[0] : (a.memoizedState = [e, t],
        e)
    }
    function mh(e, t) {
        var a = gt();
        t = t === void 0 ? null : t;
        var i = a.memoizedState;
        if (t !== null && Ir(t, i[1]))
            return i[0];
        if (i = e(),
        $n) {
            be(!0);
            try {
                e()
            } finally {
                be(!1)
            }
        }
        return a.memoizedState = [i, t],
        i
    }
    function ru(e, t, a) {
        return a === void 0 || (pn & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a,
        e = ym(),
        Ee.lanes |= e,
        wn |= e,
        a)
    }
    function ph(e, t, a, i) {
        return Kt(a, t) ? a : Dl.current !== null ? (e = ru(e, a, i),
        Kt(e, t) || (jt = !0),
        e) : (pn & 42) === 0 ? (jt = !0,
        e.memoizedState = a) : (e = ym(),
        Ee.lanes |= e,
        wn |= e,
        t)
    }
    function gh(e, t, a, i, r) {
        var c = D.p;
        D.p = c !== 0 && 8 > c ? c : 8;
        var y = T.T
          , b = {};
        T.T = b,
        fu(e, !1, t, a);
        try {
            var A = r()
              , L = T.S;
            if (L !== null && L(b, A),
            A !== null && typeof A == "object" && typeof A.then == "function") {
                var G = Qx(A, i);
                Rs(e, t, G, $t(e))
            } else
                Rs(e, t, i, $t(e))
        } catch (Z) {
            Rs(e, t, {
                then: function() {},
                status: "rejected",
                reason: Z
            }, $t())
        } finally {
            D.p = c,
            T.T = y
        }
    }
    function Wx() {}
    function uu(e, t, a, i) {
        if (e.tag !== 5)
            throw Error(o(476));
        var r = yh(e).queue;
        gh(e, r, t, Y, a === null ? Wx : function() {
            return xh(e),
            a(i)
        }
        )
    }
    function yh(e) {
        var t = e.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: Y,
            baseState: Y,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Za,
                lastRenderedState: Y
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
                lastRenderedReducer: Za,
                lastRenderedState: a
            },
            next: null
        },
        e.memoizedState = t,
        e = e.alternate,
        e !== null && (e.memoizedState = t),
        t
    }
    function xh(e) {
        var t = yh(e).next.queue;
        Rs(e, t, {}, $t())
    }
    function cu() {
        return Vt(Js)
    }
    function vh() {
        return gt().memoizedState
    }
    function bh() {
        return gt().memoizedState
    }
    function ev(e) {
        for (var t = e.return; t !== null; ) {
            switch (t.tag) {
            case 24:
            case 3:
                var a = $t();
                e = hn(a);
                var i = mn(t, e, a);
                i !== null && (Wt(i, t, a),
                Es(i, t, a)),
                t = {
                    cache: Pr()
                },
                e.payload = t;
                return
            }
            t = t.return
        }
    }
    function tv(e, t, a) {
        var i = $t();
        a = {
            lane: i,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        no(e) ? wh(t, a) : (a = Mr(e, t, a, i),
        a !== null && (Wt(a, e, i),
        jh(a, t, i)))
    }
    function Sh(e, t, a) {
        var i = $t();
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
            wh(t, r);
        else {
            var c = e.alternate;
            if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer,
            c !== null))
                try {
                    var y = t.lastRenderedState
                      , b = c(y, a);
                    if (r.hasEagerState = !0,
                    r.eagerState = b,
                    Kt(b, y))
                        return Pi(e, t, r, 0),
                        Ze === null && ki(),
                        !1
                } catch {} finally {}
            if (a = Mr(e, t, r, i),
            a !== null)
                return Wt(a, e, i),
                jh(a, t, i),
                !0
        }
        return !1
    }
    function fu(e, t, a, i) {
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
            t = Mr(e, a, i, 2),
            t !== null && Wt(t, e, 2)
    }
    function no(e) {
        var t = e.alternate;
        return e === Ee || t !== null && t === Ee
    }
    function wh(e, t) {
        Ml = Ji = !0;
        var a = e.pending;
        a === null ? t.next = t : (t.next = a.next,
        a.next = t),
        e.pending = t
    }
    function jh(e, t, a) {
        if ((a & 4194048) !== 0) {
            var i = t.lanes;
            i &= e.pendingLanes,
            a |= i,
            t.lanes = a,
            is(e, a)
        }
    }
    var lo = {
        readContext: Vt,
        use: Wi,
        useCallback: ft,
        useContext: ft,
        useEffect: ft,
        useImperativeHandle: ft,
        useLayoutEffect: ft,
        useInsertionEffect: ft,
        useMemo: ft,
        useReducer: ft,
        useRef: ft,
        useState: ft,
        useDebugValue: ft,
        useDeferredValue: ft,
        useTransition: ft,
        useSyncExternalStore: ft,
        useId: ft,
        useHostTransitionStatus: ft,
        useFormState: ft,
        useActionState: ft,
        useOptimistic: ft,
        useMemoCache: ft,
        useCacheRefresh: ft
    }
      , Th = {
        readContext: Vt,
        use: Wi,
        useCallback: function(e, t) {
            return Yt().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: Vt,
        useEffect: oh,
        useImperativeHandle: function(e, t, a) {
            a = a != null ? a.concat([e]) : null,
            ao(4194308, 4, fh.bind(null, t, e), a)
        },
        useLayoutEffect: function(e, t) {
            return ao(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            ao(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var a = Yt();
            t = t === void 0 ? null : t;
            var i = e();
            if ($n) {
                be(!0);
                try {
                    e()
                } finally {
                    be(!1)
                }
            }
            return a.memoizedState = [i, t],
            i
        },
        useReducer: function(e, t, a) {
            var i = Yt();
            if (a !== void 0) {
                var r = a(t);
                if ($n) {
                    be(!0);
                    try {
                        a(t)
                    } finally {
                        be(!1)
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
            e = e.dispatch = tv.bind(null, Ee, e),
            [i.memoizedState, e]
        },
        useRef: function(e) {
            var t = Yt();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: function(e) {
            e = su(e);
            var t = e.queue
              , a = Sh.bind(null, Ee, t);
            return t.dispatch = a,
            [e.memoizedState, a]
        },
        useDebugValue: ou,
        useDeferredValue: function(e, t) {
            var a = Yt();
            return ru(a, e, t)
        },
        useTransition: function() {
            var e = su(!1);
            return e = gh.bind(null, Ee, e.queue, !0, !1),
            Yt().memoizedState = e,
            [!1, e]
        },
        useSyncExternalStore: function(e, t, a) {
            var i = Ee
              , r = Yt();
            if (ke) {
                if (a === void 0)
                    throw Error(o(407));
                a = a()
            } else {
                if (a = t(),
                Ze === null)
                    throw Error(o(349));
                (ze & 124) !== 0 || Xd(i, t, a)
            }
            r.memoizedState = a;
            var c = {
                value: a,
                getSnapshot: t
            };
            return r.queue = c,
            oh(Kd.bind(null, i, c, e), [e]),
            i.flags |= 2048,
            Ol(9, to(), Fd.bind(null, i, c, a, t), null),
            a
        },
        useId: function() {
            var e = Yt()
              , t = Ze.identifierPrefix;
            if (ke) {
                var a = Fa
                  , i = Xa;
                a = (i & ~(1 << 32 - Je(i) - 1)).toString(32) + a,
                t = "«" + t + "R" + a,
                a = $i++,
                0 < a && (t += "H" + a.toString(32)),
                t += "»"
            } else
                a = Zx++,
                t = "«" + t + "r" + a.toString(32) + "»";
            return e.memoizedState = t
        },
        useHostTransitionStatus: cu,
        useFormState: ah,
        useActionState: ah,
        useOptimistic: function(e) {
            var t = Yt();
            t.memoizedState = t.baseState = e;
            var a = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = a,
            t = fu.bind(null, Ee, !0, a),
            a.dispatch = t,
            [e, t]
        },
        useMemoCache: au,
        useCacheRefresh: function() {
            return Yt().memoizedState = ev.bind(null, Ee)
        }
    }
      , Nh = {
        readContext: Vt,
        use: Wi,
        useCallback: hh,
        useContext: Vt,
        useEffect: rh,
        useImperativeHandle: dh,
        useInsertionEffect: uh,
        useLayoutEffect: ch,
        useMemo: mh,
        useReducer: eo,
        useRef: ih,
        useState: function() {
            return eo(Za)
        },
        useDebugValue: ou,
        useDeferredValue: function(e, t) {
            var a = gt();
            return ph(a, Ge.memoizedState, e, t)
        },
        useTransition: function() {
            var e = eo(Za)[0]
              , t = gt().memoizedState;
            return [typeof e == "boolean" ? e : _s(e), t]
        },
        useSyncExternalStore: Gd,
        useId: vh,
        useHostTransitionStatus: cu,
        useFormState: nh,
        useActionState: nh,
        useOptimistic: function(e, t) {
            var a = gt();
            return Id(a, Ge, e, t)
        },
        useMemoCache: au,
        useCacheRefresh: bh
    }
      , av = {
        readContext: Vt,
        use: Wi,
        useCallback: hh,
        useContext: Vt,
        useEffect: rh,
        useImperativeHandle: dh,
        useInsertionEffect: uh,
        useLayoutEffect: ch,
        useMemo: mh,
        useReducer: lu,
        useRef: ih,
        useState: function() {
            return lu(Za)
        },
        useDebugValue: ou,
        useDeferredValue: function(e, t) {
            var a = gt();
            return Ge === null ? ru(a, e, t) : ph(a, Ge.memoizedState, e, t)
        },
        useTransition: function() {
            var e = lu(Za)[0]
              , t = gt().memoizedState;
            return [typeof e == "boolean" ? e : _s(e), t]
        },
        useSyncExternalStore: Gd,
        useId: vh,
        useHostTransitionStatus: cu,
        useFormState: sh,
        useActionState: sh,
        useOptimistic: function(e, t) {
            var a = gt();
            return Ge !== null ? Id(a, Ge, e, t) : (a.baseState = e,
            [e, a.queue.dispatch])
        },
        useMemoCache: au,
        useCacheRefresh: bh
    }
      , Rl = null
      , Vs = 0;
    function so(e) {
        var t = Vs;
        return Vs += 1,
        Rl === null && (Rl = []),
        zd(Rl, e, t)
    }
    function Us(e, t) {
        t = t.props.ref,
        e.ref = t !== void 0 ? t : null
    }
    function io(e, t) {
        throw t.$$typeof === v ? Error(o(525)) : (e = Object.prototype.toString.call(t),
        Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }
    function Ah(e) {
        var t = e._init;
        return t(e._payload)
    }
    function Eh(e) {
        function t(R, C) {
            if (e) {
                var z = R.deletions;
                z === null ? (R.deletions = [C],
                R.flags |= 16) : z.push(C)
            }
        }
        function a(R, C) {
            if (!e)
                return null;
            for (; C !== null; )
                t(R, C),
                C = C.sibling;
            return null
        }
        function i(R) {
            for (var C = new Map; R !== null; )
                R.key !== null ? C.set(R.key, R) : C.set(R.index, R),
                R = R.sibling;
            return C
        }
        function r(R, C) {
            return R = Ga(R, C),
            R.index = 0,
            R.sibling = null,
            R
        }
        function c(R, C, z) {
            return R.index = z,
            e ? (z = R.alternate,
            z !== null ? (z = z.index,
            z < C ? (R.flags |= 67108866,
            C) : z) : (R.flags |= 67108866,
            C)) : (R.flags |= 1048576,
            C)
        }
        function y(R) {
            return e && R.alternate === null && (R.flags |= 67108866),
            R
        }
        function b(R, C, z, K) {
            return C === null || C.tag !== 6 ? (C = Or(z, R.mode, K),
            C.return = R,
            C) : (C = r(C, z),
            C.return = R,
            C)
        }
        function A(R, C, z, K) {
            var ce = z.type;
            return ce === E ? G(R, C, z.props.children, K, z.key) : C !== null && (C.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === Q && Ah(ce) === C.type) ? (C = r(C, z.props),
            Us(C, z),
            C.return = R,
            C) : (C = Yi(z.type, z.key, z.props, null, R.mode, K),
            Us(C, z),
            C.return = R,
            C)
        }
        function L(R, C, z, K) {
            return C === null || C.tag !== 4 || C.stateNode.containerInfo !== z.containerInfo || C.stateNode.implementation !== z.implementation ? (C = Rr(z, R.mode, K),
            C.return = R,
            C) : (C = r(C, z.children || []),
            C.return = R,
            C)
        }
        function G(R, C, z, K, ce) {
            return C === null || C.tag !== 7 ? (C = Gn(z, R.mode, K, ce),
            C.return = R,
            C) : (C = r(C, z),
            C.return = R,
            C)
        }
        function Z(R, C, z) {
            if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
                return C = Or("" + C, R.mode, z),
                C.return = R,
                C;
            if (typeof C == "object" && C !== null) {
                switch (C.$$typeof) {
                case w:
                    return z = Yi(C.type, C.key, C.props, null, R.mode, z),
                    Us(z, C),
                    z.return = R,
                    z;
                case N:
                    return C = Rr(C, R.mode, z),
                    C.return = R,
                    C;
                case Q:
                    var K = C._init;
                    return C = K(C._payload),
                    Z(R, C, z)
                }
                if (F(C) || me(C))
                    return C = Gn(C, R.mode, z, null),
                    C.return = R,
                    C;
                if (typeof C.then == "function")
                    return Z(R, so(C), z);
                if (C.$$typeof === B)
                    return Z(R, Fi(R, C), z);
                io(R, C)
            }
            return null
        }
        function k(R, C, z, K) {
            var ce = C !== null ? C.key : null;
            if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
                return ce !== null ? null : b(R, C, "" + z, K);
            if (typeof z == "object" && z !== null) {
                switch (z.$$typeof) {
                case w:
                    return z.key === ce ? A(R, C, z, K) : null;
                case N:
                    return z.key === ce ? L(R, C, z, K) : null;
                case Q:
                    return ce = z._init,
                    z = ce(z._payload),
                    k(R, C, z, K)
                }
                if (F(z) || me(z))
                    return ce !== null ? null : G(R, C, z, K, null);
                if (typeof z.then == "function")
                    return k(R, C, so(z), K);
                if (z.$$typeof === B)
                    return k(R, C, Fi(R, z), K);
                io(R, z)
            }
            return null
        }
        function H(R, C, z, K, ce) {
            if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
                return R = R.get(z) || null,
                b(C, R, "" + K, ce);
            if (typeof K == "object" && K !== null) {
                switch (K.$$typeof) {
                case w:
                    return R = R.get(K.key === null ? z : K.key) || null,
                    A(C, R, K, ce);
                case N:
                    return R = R.get(K.key === null ? z : K.key) || null,
                    L(C, R, K, ce);
                case Q:
                    var Ce = K._init;
                    return K = Ce(K._payload),
                    H(R, C, z, K, ce)
                }
                if (F(K) || me(K))
                    return R = R.get(z) || null,
                    G(C, R, K, ce, null);
                if (typeof K.then == "function")
                    return H(R, C, z, so(K), ce);
                if (K.$$typeof === B)
                    return H(R, C, z, Fi(C, K), ce);
                io(C, K)
            }
            return null
        }
        function Se(R, C, z, K) {
            for (var ce = null, Ce = null, pe = C, ve = C = 0, Nt = null; pe !== null && ve < z.length; ve++) {
                pe.index > ve ? (Nt = pe,
                pe = null) : Nt = pe.sibling;
                var Be = k(R, pe, z[ve], K);
                if (Be === null) {
                    pe === null && (pe = Nt);
                    break
                }
                e && pe && Be.alternate === null && t(R, pe),
                C = c(Be, C, ve),
                Ce === null ? ce = Be : Ce.sibling = Be,
                Ce = Be,
                pe = Nt
            }
            if (ve === z.length)
                return a(R, pe),
                ke && Fn(R, ve),
                ce;
            if (pe === null) {
                for (; ve < z.length; ve++)
                    pe = Z(R, z[ve], K),
                    pe !== null && (C = c(pe, C, ve),
                    Ce === null ? ce = pe : Ce.sibling = pe,
                    Ce = pe);
                return ke && Fn(R, ve),
                ce
            }
            for (pe = i(pe); ve < z.length; ve++)
                Nt = H(pe, R, ve, z[ve], K),
                Nt !== null && (e && Nt.alternate !== null && pe.delete(Nt.key === null ? ve : Nt.key),
                C = c(Nt, C, ve),
                Ce === null ? ce = Nt : Ce.sibling = Nt,
                Ce = Nt);
            return e && pe.forEach(function(_n) {
                return t(R, _n)
            }),
            ke && Fn(R, ve),
            ce
        }
        function xe(R, C, z, K) {
            if (z == null)
                throw Error(o(151));
            for (var ce = null, Ce = null, pe = C, ve = C = 0, Nt = null, Be = z.next(); pe !== null && !Be.done; ve++,
            Be = z.next()) {
                pe.index > ve ? (Nt = pe,
                pe = null) : Nt = pe.sibling;
                var _n = k(R, pe, Be.value, K);
                if (_n === null) {
                    pe === null && (pe = Nt);
                    break
                }
                e && pe && _n.alternate === null && t(R, pe),
                C = c(_n, C, ve),
                Ce === null ? ce = _n : Ce.sibling = _n,
                Ce = _n,
                pe = Nt
            }
            if (Be.done)
                return a(R, pe),
                ke && Fn(R, ve),
                ce;
            if (pe === null) {
                for (; !Be.done; ve++,
                Be = z.next())
                    Be = Z(R, Be.value, K),
                    Be !== null && (C = c(Be, C, ve),
                    Ce === null ? ce = Be : Ce.sibling = Be,
                    Ce = Be);
                return ke && Fn(R, ve),
                ce
            }
            for (pe = i(pe); !Be.done; ve++,
            Be = z.next())
                Be = H(pe, R, ve, Be.value, K),
                Be !== null && (e && Be.alternate !== null && pe.delete(Be.key === null ? ve : Be.key),
                C = c(Be, C, ve),
                Ce === null ? ce = Be : Ce.sibling = Be,
                Ce = Be);
            return e && pe.forEach(function(nb) {
                return t(R, nb)
            }),
            ke && Fn(R, ve),
            ce
        }
        function Fe(R, C, z, K) {
            if (typeof z == "object" && z !== null && z.type === E && z.key === null && (z = z.props.children),
            typeof z == "object" && z !== null) {
                switch (z.$$typeof) {
                case w:
                    e: {
                        for (var ce = z.key; C !== null; ) {
                            if (C.key === ce) {
                                if (ce = z.type,
                                ce === E) {
                                    if (C.tag === 7) {
                                        a(R, C.sibling),
                                        K = r(C, z.props.children),
                                        K.return = R,
                                        R = K;
                                        break e
                                    }
                                } else if (C.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === Q && Ah(ce) === C.type) {
                                    a(R, C.sibling),
                                    K = r(C, z.props),
                                    Us(K, z),
                                    K.return = R,
                                    R = K;
                                    break e
                                }
                                a(R, C);
                                break
                            } else
                                t(R, C);
                            C = C.sibling
                        }
                        z.type === E ? (K = Gn(z.props.children, R.mode, K, z.key),
                        K.return = R,
                        R = K) : (K = Yi(z.type, z.key, z.props, null, R.mode, K),
                        Us(K, z),
                        K.return = R,
                        R = K)
                    }
                    return y(R);
                case N:
                    e: {
                        for (ce = z.key; C !== null; ) {
                            if (C.key === ce)
                                if (C.tag === 4 && C.stateNode.containerInfo === z.containerInfo && C.stateNode.implementation === z.implementation) {
                                    a(R, C.sibling),
                                    K = r(C, z.children || []),
                                    K.return = R,
                                    R = K;
                                    break e
                                } else {
                                    a(R, C);
                                    break
                                }
                            else
                                t(R, C);
                            C = C.sibling
                        }
                        K = Rr(z, R.mode, K),
                        K.return = R,
                        R = K
                    }
                    return y(R);
                case Q:
                    return ce = z._init,
                    z = ce(z._payload),
                    Fe(R, C, z, K)
                }
                if (F(z))
                    return Se(R, C, z, K);
                if (me(z)) {
                    if (ce = me(z),
                    typeof ce != "function")
                        throw Error(o(150));
                    return z = ce.call(z),
                    xe(R, C, z, K)
                }
                if (typeof z.then == "function")
                    return Fe(R, C, so(z), K);
                if (z.$$typeof === B)
                    return Fe(R, C, Fi(R, z), K);
                io(R, z)
            }
            return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (z = "" + z,
            C !== null && C.tag === 6 ? (a(R, C.sibling),
            K = r(C, z),
            K.return = R,
            R = K) : (a(R, C),
            K = Or(z, R.mode, K),
            K.return = R,
            R = K),
            y(R)) : a(R, C)
        }
        return function(R, C, z, K) {
            try {
                Vs = 0;
                var ce = Fe(R, C, z, K);
                return Rl = null,
                ce
            } catch (pe) {
                if (pe === Ns || pe === Qi)
                    throw pe;
                var Ce = Qt(29, pe, null, R.mode);
                return Ce.lanes = K,
                Ce.return = R,
                Ce
            } finally {}
        }
    }
    var Vl = Eh(!0)
      , Ch = Eh(!1)
      , oa = V(null)
      , Ea = null;
    function gn(e) {
        var t = e.alternate;
        W(wt, wt.current & 1),
        W(oa, e),
        Ea === null && (t === null || Dl.current !== null || t.memoizedState !== null) && (Ea = e)
    }
    function Dh(e) {
        if (e.tag === 22) {
            if (W(wt, wt.current),
            W(oa, e),
            Ea === null) {
                var t = e.alternate;
                t !== null && t.memoizedState !== null && (Ea = e)
            }
        } else
            yn()
    }
    function yn() {
        W(wt, wt.current),
        W(oa, oa.current)
    }
    function Ia(e) {
        te(oa),
        Ea === e && (Ea = null),
        te(wt)
    }
    var wt = V(0);
    function oo(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var a = t.memoizedState;
                if (a !== null && (a = a.dehydrated,
                a === null || a.data === "$?" || tc(a)))
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
    function du(e, t, a, i) {
        t = e.memoizedState,
        a = a(i, t),
        a = a == null ? t : x({}, t, a),
        e.memoizedState = a,
        e.lanes === 0 && (e.updateQueue.baseState = a)
    }
    var hu = {
        enqueueSetState: function(e, t, a) {
            e = e._reactInternals;
            var i = $t()
              , r = hn(i);
            r.payload = t,
            a != null && (r.callback = a),
            t = mn(e, r, i),
            t !== null && (Wt(t, e, i),
            Es(t, e, i))
        },
        enqueueReplaceState: function(e, t, a) {
            e = e._reactInternals;
            var i = $t()
              , r = hn(i);
            r.tag = 1,
            r.payload = t,
            a != null && (r.callback = a),
            t = mn(e, r, i),
            t !== null && (Wt(t, e, i),
            Es(t, e, i))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var a = $t()
              , i = hn(a);
            i.tag = 2,
            t != null && (i.callback = t),
            t = mn(e, i, a),
            t !== null && (Wt(t, e, a),
            Es(t, e, a))
        }
    };
    function Mh(e, t, a, i, r, c, y) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, c, y) : t.prototype && t.prototype.isPureReactComponent ? !ys(a, i) || !ys(r, c) : !0
    }
    function _h(e, t, a, i) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i),
        t.state !== e && hu.enqueueReplaceState(t, t.state, null)
    }
    function Wn(e, t) {
        var a = t;
        if ("ref"in t) {
            a = {};
            for (var i in t)
                i !== "ref" && (a[i] = t[i])
        }
        if (e = e.defaultProps) {
            a === t && (a = x({}, a));
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
    function Oh(e) {
        ro(e)
    }
    function Rh(e) {
        console.error(e)
    }
    function Vh(e) {
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
    function Uh(e, t, a) {
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
    function mu(e, t, a) {
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
    function zh(e) {
        return e = hn(e),
        e.tag = 3,
        e
    }
    function Bh(e, t, a, i) {
        var r = a.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var c = i.value;
            e.payload = function() {
                return r(c)
            }
            ,
            e.callback = function() {
                Uh(t, a, i)
            }
        }
        var y = a.stateNode;
        y !== null && typeof y.componentDidCatch == "function" && (e.callback = function() {
            Uh(t, a, i),
            typeof r != "function" && (jn === null ? jn = new Set([this]) : jn.add(this));
            var b = i.stack;
            this.componentDidCatch(i.value, {
                componentStack: b !== null ? b : ""
            })
        }
        )
    }
    function nv(e, t, a, i, r) {
        if (a.flags |= 32768,
        i !== null && typeof i == "object" && typeof i.then == "function") {
            if (t = a.alternate,
            t !== null && ws(t, a, r, !0),
            a = oa.current,
            a !== null) {
                switch (a.tag) {
                case 13:
                    return Ea === null ? Lu() : a.alternate === null && ot === 0 && (ot = 3),
                    a.flags &= -257,
                    a.flags |= 65536,
                    a.lanes = r,
                    i === qr ? a.flags |= 16384 : (t = a.updateQueue,
                    t === null ? a.updateQueue = new Set([i]) : t.add(i),
                    Pu(e, i, r)),
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
                    Pu(e, i, r)),
                    !1
                }
                throw Error(o(435, a.tag))
            }
            return Pu(e, i, r),
            Lu(),
            !1
        }
        if (ke)
            return t = oa.current,
            t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            t.flags |= 65536,
            t.lanes = r,
            i !== zr && (e = Error(o(422), {
                cause: i
            }),
            Ss(na(e, a)))) : (i !== zr && (t = Error(o(423), {
                cause: i
            }),
            Ss(na(t, a))),
            e = e.current.alternate,
            e.flags |= 65536,
            r &= -r,
            e.lanes |= r,
            i = na(i, a),
            r = mu(e.stateNode, i, r),
            Fr(e, r),
            ot !== 4 && (ot = 2)),
            !1;
        var c = Error(o(520), {
            cause: i
        });
        if (c = na(c, a),
        Ys === null ? Ys = [c] : Ys.push(c),
        ot !== 4 && (ot = 2),
        t === null)
            return !0;
        i = na(i, a),
        a = t;
        do {
            switch (a.tag) {
            case 3:
                return a.flags |= 65536,
                e = r & -r,
                a.lanes |= e,
                e = mu(a.stateNode, i, e),
                Fr(a, e),
                !1;
            case 1:
                if (t = a.type,
                c = a.stateNode,
                (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (jn === null || !jn.has(c))))
                    return a.flags |= 65536,
                    r &= -r,
                    a.lanes |= r,
                    r = zh(r),
                    Bh(r, e, a, i),
                    Fr(a, r),
                    !1
            }
            a = a.return
        } while (a !== null);
        return !1
    }
    var Lh = Error(o(461))
      , jt = !1;
    function Ct(e, t, a, i) {
        t.child = e === null ? Ch(t, null, a, i) : Vl(t, e.child, a, i)
    }
    function kh(e, t, a, i, r) {
        a = a.render;
        var c = t.ref;
        if ("ref"in i) {
            var y = {};
            for (var b in i)
                b !== "ref" && (y[b] = i[b])
        } else
            y = i;
        return In(t),
        i = Jr(e, t, a, y, c, r),
        b = $r(),
        e !== null && !jt ? (Wr(e, t, r),
        Ja(e, t, r)) : (ke && b && Vr(t),
        t.flags |= 1,
        Ct(e, t, i, r),
        t.child)
    }
    function Ph(e, t, a, i, r) {
        if (e === null) {
            var c = a.type;
            return typeof c == "function" && !_r(c) && c.defaultProps === void 0 && a.compare === null ? (t.tag = 15,
            t.type = c,
            Hh(e, t, c, i, r)) : (e = Yi(a.type, null, i, t, t.mode, r),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (c = e.child,
        !wu(e, r)) {
            var y = c.memoizedProps;
            if (a = a.compare,
            a = a !== null ? a : ys,
            a(y, i) && e.ref === t.ref)
                return Ja(e, t, r)
        }
        return t.flags |= 1,
        e = Ga(c, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function Hh(e, t, a, i, r) {
        if (e !== null) {
            var c = e.memoizedProps;
            if (ys(c, i) && e.ref === t.ref)
                if (jt = !1,
                t.pendingProps = i = c,
                wu(e, r))
                    (e.flags & 131072) !== 0 && (jt = !0);
                else
                    return t.lanes = e.lanes,
                    Ja(e, t, r)
        }
        return pu(e, t, a, i, r)
    }
    function Yh(e, t, a) {
        var i = t.pendingProps
          , r = i.children
          , c = e !== null ? e.memoizedState : null;
        if (i.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (i = c !== null ? c.baseLanes | a : a,
                e !== null) {
                    for (r = t.child = e.child,
                    c = 0; r !== null; )
                        c = c | r.lanes | r.childLanes,
                        r = r.sibling;
                    t.childLanes = c & ~i
                } else
                    t.childLanes = 0,
                    t.child = null;
                return qh(e, t, i, a)
            }
            if ((a & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                e !== null && Ki(t, c !== null ? c.cachePool : null),
                c !== null ? Hd(t, c) : Qr(),
                Dh(t);
            else
                return t.lanes = t.childLanes = 536870912,
                qh(e, t, c !== null ? c.baseLanes | a : a, a)
        } else
            c !== null ? (Ki(t, c.cachePool),
            Hd(t, c),
            yn(),
            t.memoizedState = null) : (e !== null && Ki(t, null),
            Qr(),
            yn());
        return Ct(e, t, r, a),
        t.child
    }
    function qh(e, t, a, i) {
        var r = Yr();
        return r = r === null ? null : {
            parent: St._currentValue,
            pool: r
        },
        t.memoizedState = {
            baseLanes: a,
            cachePool: r
        },
        e !== null && Ki(t, null),
        Qr(),
        Dh(t),
        e !== null && ws(e, t, i, !0),
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
    function pu(e, t, a, i, r) {
        return In(t),
        a = Jr(e, t, a, i, void 0, r),
        i = $r(),
        e !== null && !jt ? (Wr(e, t, r),
        Ja(e, t, r)) : (ke && i && Vr(t),
        t.flags |= 1,
        Ct(e, t, a, r),
        t.child)
    }
    function Gh(e, t, a, i, r, c) {
        return In(t),
        t.updateQueue = null,
        a = qd(t, i, a, r),
        Yd(e),
        i = $r(),
        e !== null && !jt ? (Wr(e, t, c),
        Ja(e, t, c)) : (ke && i && Vr(t),
        t.flags |= 1,
        Ct(e, t, a, c),
        t.child)
    }
    function Xh(e, t, a, i, r) {
        if (In(t),
        t.stateNode === null) {
            var c = Tl
              , y = a.contextType;
            typeof y == "object" && y !== null && (c = Vt(y)),
            c = new a(i,c),
            t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null,
            c.updater = hu,
            t.stateNode = c,
            c._reactInternals = t,
            c = t.stateNode,
            c.props = i,
            c.state = t.memoizedState,
            c.refs = {},
            Gr(t),
            y = a.contextType,
            c.context = typeof y == "object" && y !== null ? Vt(y) : Tl,
            c.state = t.memoizedState,
            y = a.getDerivedStateFromProps,
            typeof y == "function" && (du(t, a, y, i),
            c.state = t.memoizedState),
            typeof a.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (y = c.state,
            typeof c.componentWillMount == "function" && c.componentWillMount(),
            typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(),
            y !== c.state && hu.enqueueReplaceState(c, c.state, null),
            Ds(t, i, c, r),
            Cs(),
            c.state = t.memoizedState),
            typeof c.componentDidMount == "function" && (t.flags |= 4194308),
            i = !0
        } else if (e === null) {
            c = t.stateNode;
            var b = t.memoizedProps
              , A = Wn(a, b);
            c.props = A;
            var L = c.context
              , G = a.contextType;
            y = Tl,
            typeof G == "object" && G !== null && (y = Vt(G));
            var Z = a.getDerivedStateFromProps;
            G = typeof Z == "function" || typeof c.getSnapshotBeforeUpdate == "function",
            b = t.pendingProps !== b,
            G || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (b || L !== y) && _h(t, c, i, y),
            dn = !1;
            var k = t.memoizedState;
            c.state = k,
            Ds(t, i, c, r),
            Cs(),
            L = t.memoizedState,
            b || k !== L || dn ? (typeof Z == "function" && (du(t, a, Z, i),
            L = t.memoizedState),
            (A = dn || Mh(t, a, A, i, k, L, y)) ? (G || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(),
            typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()),
            typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = i,
            t.memoizedState = L),
            c.props = i,
            c.state = L,
            c.context = y,
            i = A) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
            i = !1)
        } else {
            c = t.stateNode,
            Xr(e, t),
            y = t.memoizedProps,
            G = Wn(a, y),
            c.props = G,
            Z = t.pendingProps,
            k = c.context,
            L = a.contextType,
            A = Tl,
            typeof L == "object" && L !== null && (A = Vt(L)),
            b = a.getDerivedStateFromProps,
            (L = typeof b == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (y !== Z || k !== A) && _h(t, c, i, A),
            dn = !1,
            k = t.memoizedState,
            c.state = k,
            Ds(t, i, c, r),
            Cs();
            var H = t.memoizedState;
            y !== Z || k !== H || dn || e !== null && e.dependencies !== null && Xi(e.dependencies) ? (typeof b == "function" && (du(t, a, b, i),
            H = t.memoizedState),
            (G = dn || Mh(t, a, G, i, k, H, A) || e !== null && e.dependencies !== null && Xi(e.dependencies)) ? (L || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(i, H, A),
            typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(i, H, A)),
            typeof c.componentDidUpdate == "function" && (t.flags |= 4),
            typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || y === e.memoizedProps && k === e.memoizedState || (t.flags |= 4),
            typeof c.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && k === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = i,
            t.memoizedState = H),
            c.props = i,
            c.state = H,
            c.context = A,
            i = G) : (typeof c.componentDidUpdate != "function" || y === e.memoizedProps && k === e.memoizedState || (t.flags |= 4),
            typeof c.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && k === e.memoizedState || (t.flags |= 1024),
            i = !1)
        }
        return c = i,
        co(e, t),
        i = (t.flags & 128) !== 0,
        c || i ? (c = t.stateNode,
        a = i && typeof a.getDerivedStateFromError != "function" ? null : c.render(),
        t.flags |= 1,
        e !== null && i ? (t.child = Vl(t, e.child, null, r),
        t.child = Vl(t, null, a, r)) : Ct(e, t, a, r),
        t.memoizedState = c.state,
        e = t.child) : e = Ja(e, t, r),
        e
    }
    function Fh(e, t, a, i) {
        return bs(),
        t.flags |= 256,
        Ct(e, t, a, i),
        t.child
    }
    var gu = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function yu(e) {
        return {
            baseLanes: e,
            cachePool: Rd()
        }
    }
    function xu(e, t, a) {
        return e = e !== null ? e.childLanes & ~a : 0,
        t && (e |= ra),
        e
    }
    function Kh(e, t, a) {
        var i = t.pendingProps, r = !1, c = (t.flags & 128) !== 0, y;
        if ((y = c) || (y = e !== null && e.memoizedState === null ? !1 : (wt.current & 2) !== 0),
        y && (r = !0,
        t.flags &= -129),
        y = (t.flags & 32) !== 0,
        t.flags &= -33,
        e === null) {
            if (ke) {
                if (r ? gn(t) : yn(),
                ke) {
                    var b = it, A;
                    if (A = b) {
                        e: {
                            for (A = b,
                            b = Aa; A.nodeType !== 8; ) {
                                if (!b) {
                                    b = null;
                                    break e
                                }
                                if (A = wa(A.nextSibling),
                                A === null) {
                                    b = null;
                                    break e
                                }
                            }
                            b = A
                        }
                        b !== null ? (t.memoizedState = {
                            dehydrated: b,
                            treeContext: Xn !== null ? {
                                id: Xa,
                                overflow: Fa
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        },
                        A = Qt(18, null, null, 0),
                        A.stateNode = b,
                        A.return = t,
                        t.child = A,
                        Bt = t,
                        it = null,
                        A = !0) : A = !1
                    }
                    A || Qn(t)
                }
                if (b = t.memoizedState,
                b !== null && (b = b.dehydrated,
                b !== null))
                    return tc(b) ? t.lanes = 32 : t.lanes = 536870912,
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
            i = Gn(i, r, a, null),
            b.return = t,
            i.return = t,
            b.sibling = i,
            t.child = b,
            r = t.child,
            r.memoizedState = yu(a),
            r.childLanes = xu(e, y, a),
            t.memoizedState = gu,
            i) : (gn(t),
            vu(t, b))
        }
        if (A = e.memoizedState,
        A !== null && (b = A.dehydrated,
        b !== null)) {
            if (c)
                t.flags & 256 ? (gn(t),
                t.flags &= -257,
                t = bu(e, t, a)) : t.memoizedState !== null ? (yn(),
                t.child = e.child,
                t.flags |= 128,
                t = null) : (yn(),
                r = i.fallback,
                b = t.mode,
                i = fo({
                    mode: "visible",
                    children: i.children
                }, b),
                r = Gn(r, b, a, null),
                r.flags |= 2,
                i.return = t,
                r.return = t,
                i.sibling = r,
                t.child = i,
                Vl(t, e.child, null, a),
                i = t.child,
                i.memoizedState = yu(a),
                i.childLanes = xu(e, y, a),
                t.memoizedState = gu,
                t = r);
            else if (gn(t),
            tc(b)) {
                if (y = b.nextSibling && b.nextSibling.dataset,
                y)
                    var L = y.dgst;
                y = L,
                i = Error(o(419)),
                i.stack = "",
                i.digest = y,
                Ss({
                    value: i,
                    source: null,
                    stack: null
                }),
                t = bu(e, t, a)
            } else if (jt || ws(e, t, a, !1),
            y = (a & e.childLanes) !== 0,
            jt || y) {
                if (y = Ze,
                y !== null && (i = a & -a,
                i = (i & 42) !== 0 ? 1 : cl(i),
                i = (i & (y.suspendedLanes | a)) !== 0 ? 0 : i,
                i !== 0 && i !== A.retryLane))
                    throw A.retryLane = i,
                    jl(e, i),
                    Wt(y, e, i),
                    Lh;
                b.data === "$?" || Lu(),
                t = bu(e, t, a)
            } else
                b.data === "$?" ? (t.flags |= 192,
                t.child = e.child,
                t = null) : (e = A.treeContext,
                it = wa(b.nextSibling),
                Bt = t,
                ke = !0,
                Kn = null,
                Aa = !1,
                e !== null && (sa[ia++] = Xa,
                sa[ia++] = Fa,
                sa[ia++] = Xn,
                Xa = e.id,
                Fa = e.overflow,
                Xn = t),
                t = vu(t, i.children),
                t.flags |= 4096);
            return t
        }
        return r ? (yn(),
        r = i.fallback,
        b = t.mode,
        A = e.child,
        L = A.sibling,
        i = Ga(A, {
            mode: "hidden",
            children: i.children
        }),
        i.subtreeFlags = A.subtreeFlags & 65011712,
        L !== null ? r = Ga(L, r) : (r = Gn(r, b, a, null),
        r.flags |= 2),
        r.return = t,
        i.return = t,
        i.sibling = r,
        t.child = i,
        i = r,
        r = t.child,
        b = e.child.memoizedState,
        b === null ? b = yu(a) : (A = b.cachePool,
        A !== null ? (L = St._currentValue,
        A = A.parent !== L ? {
            parent: L,
            pool: L
        } : A) : A = Rd(),
        b = {
            baseLanes: b.baseLanes | a,
            cachePool: A
        }),
        r.memoizedState = b,
        r.childLanes = xu(e, y, a),
        t.memoizedState = gu,
        i) : (gn(t),
        a = e.child,
        e = a.sibling,
        a = Ga(a, {
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
        return e = Qt(22, e, null, t),
        e.lanes = 0,
        e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        },
        e
    }
    function bu(e, t, a) {
        return Vl(t, e.child, null, a),
        e = vu(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function Qh(e, t, a) {
        e.lanes |= t;
        var i = e.alternate;
        i !== null && (i.lanes |= t),
        Lr(e.return, t, a)
    }
    function Su(e, t, a, i, r) {
        var c = e.memoizedState;
        c === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: i,
            tail: a,
            tailMode: r
        } : (c.isBackwards = t,
        c.rendering = null,
        c.renderingStartTime = 0,
        c.last = i,
        c.tail = a,
        c.tailMode = r)
    }
    function Zh(e, t, a) {
        var i = t.pendingProps
          , r = i.revealOrder
          , c = i.tail;
        if (Ct(e, t, i.children, a),
        i = wt.current,
        (i & 2) !== 0)
            i = i & 1 | 2,
            t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0)
                e: for (e = t.child; e !== null; ) {
                    if (e.tag === 13)
                        e.memoizedState !== null && Qh(e, a, t);
                    else if (e.tag === 19)
                        Qh(e, a, t);
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
        switch (W(wt, i),
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
            Su(t, !1, r, a, c);
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
            Su(t, !0, a, null, c);
            break;
        case "together":
            Su(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
        return t.child
    }
    function Ja(e, t, a) {
        if (e !== null && (t.dependencies = e.dependencies),
        wn |= t.lanes,
        (a & t.childLanes) === 0)
            if (e !== null) {
                if (ws(e, t, a, !1),
                (a & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (e !== null && t.child !== e.child)
            throw Error(o(153));
        if (t.child !== null) {
            for (e = t.child,
            a = Ga(e, e.pendingProps),
            t.child = a,
            a.return = t; e.sibling !== null; )
                e = e.sibling,
                a = a.sibling = Ga(e, e.pendingProps),
                a.return = t;
            a.sibling = null
        }
        return t.child
    }
    function wu(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies,
        !!(e !== null && Xi(e)))
    }
    function lv(e, t, a) {
        switch (t.tag) {
        case 3:
            ne(t, t.stateNode.containerInfo),
            fn(t, St, e.memoizedState.cache),
            bs();
            break;
        case 27:
        case 5:
            Oe(t);
            break;
        case 4:
            ne(t, t.stateNode.containerInfo);
            break;
        case 10:
            fn(t, t.type, t.memoizedProps.value);
            break;
        case 13:
            var i = t.memoizedState;
            if (i !== null)
                return i.dehydrated !== null ? (gn(t),
                t.flags |= 128,
                null) : (a & t.child.childLanes) !== 0 ? Kh(e, t, a) : (gn(t),
                e = Ja(e, t, a),
                e !== null ? e.sibling : null);
            gn(t);
            break;
        case 19:
            var r = (e.flags & 128) !== 0;
            if (i = (a & t.childLanes) !== 0,
            i || (ws(e, t, a, !1),
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
            W(wt, wt.current),
            i)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
            Yh(e, t, a);
        case 24:
            fn(t, St, e.memoizedState.cache)
        }
        return Ja(e, t, a)
    }
    function Ih(e, t, a) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
                jt = !0;
            else {
                if (!wu(e, a) && (t.flags & 128) === 0)
                    return jt = !1,
                    lv(e, t, a);
                jt = (e.flags & 131072) !== 0
            }
        else
            jt = !1,
            ke && (t.flags & 1048576) !== 0 && Ad(t, Gi, t.index);
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
                    _r(i) ? (e = Wn(i, e),
                    t.tag = 1,
                    t = Xh(null, t, i, e, a)) : (t.tag = 0,
                    t = pu(null, t, i, e, a));
                else {
                    if (i != null) {
                        if (r = i.$$typeof,
                        r === X) {
                            t.tag = 11,
                            t = kh(null, t, i, e, a);
                            break e
                        } else if (r === I) {
                            t.tag = 14,
                            t = Ph(null, t, i, e, a);
                            break e
                        }
                    }
                    throw t = se(i) || i,
                    Error(o(306, t, ""))
                }
            }
            return t;
        case 0:
            return pu(e, t, t.type, t.pendingProps, a);
        case 1:
            return i = t.type,
            r = Wn(i, t.pendingProps),
            Xh(e, t, i, r, a);
        case 3:
            e: {
                if (ne(t, t.stateNode.containerInfo),
                e === null)
                    throw Error(o(387));
                i = t.pendingProps;
                var c = t.memoizedState;
                r = c.element,
                Xr(e, t),
                Ds(t, i, null, a);
                var y = t.memoizedState;
                if (i = y.cache,
                fn(t, St, i),
                i !== c.cache && kr(t, [St], a, !0),
                Cs(),
                i = y.element,
                c.isDehydrated)
                    if (c = {
                        element: i,
                        isDehydrated: !1,
                        cache: y.cache
                    },
                    t.updateQueue.baseState = c,
                    t.memoizedState = c,
                    t.flags & 256) {
                        t = Fh(e, t, i, a);
                        break e
                    } else if (i !== r) {
                        r = na(Error(o(424)), t),
                        Ss(r),
                        t = Fh(e, t, i, a);
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
                        for (it = wa(e.firstChild),
                        Bt = t,
                        ke = !0,
                        Kn = null,
                        Aa = !0,
                        a = Ch(t, null, i, a),
                        t.child = a; a; )
                            a.flags = a.flags & -3 | 4096,
                            a = a.sibling
                    }
                else {
                    if (bs(),
                    i === r) {
                        t = Ja(e, t, a);
                        break e
                    }
                    Ct(e, t, i, a)
                }
                t = t.child
            }
            return t;
        case 26:
            return co(e, t),
            e === null ? (a = ep(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : ke || (a = t.type,
            e = t.pendingProps,
            i = Ao(ae.current).createElement(a),
            i[bt] = t,
            i[At] = e,
            Mt(i, a, e),
            ge(i),
            t.stateNode = i) : t.memoizedState = ep(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
            null;
        case 27:
            return Oe(t),
            e === null && ke && (i = t.stateNode = Jm(t.type, t.pendingProps, ae.current),
            Bt = t,
            Aa = !0,
            r = it,
            An(t.type) ? (ac = r,
            it = wa(i.firstChild)) : it = r),
            Ct(e, t, t.pendingProps.children, a),
            co(e, t),
            e === null && (t.flags |= 4194304),
            t.child;
        case 5:
            return e === null && ke && ((r = i = it) && (i = Ov(i, t.type, t.pendingProps, Aa),
            i !== null ? (t.stateNode = i,
            Bt = t,
            it = wa(i.firstChild),
            Aa = !1,
            r = !0) : r = !1),
            r || Qn(t)),
            Oe(t),
            r = t.type,
            c = t.pendingProps,
            y = e !== null ? e.memoizedProps : null,
            i = c.children,
            $u(r, c) ? i = null : y !== null && $u(r, y) && (t.flags |= 32),
            t.memoizedState !== null && (r = Jr(e, t, Ix, null, null, a),
            Js._currentValue = r),
            co(e, t),
            Ct(e, t, i, a),
            t.child;
        case 6:
            return e === null && ke && ((e = a = it) && (a = Rv(a, t.pendingProps, Aa),
            a !== null ? (t.stateNode = a,
            Bt = t,
            it = null,
            e = !0) : e = !1),
            e || Qn(t)),
            null;
        case 13:
            return Kh(e, t, a);
        case 4:
            return ne(t, t.stateNode.containerInfo),
            i = t.pendingProps,
            e === null ? t.child = Vl(t, null, i, a) : Ct(e, t, i, a),
            t.child;
        case 11:
            return kh(e, t, t.type, t.pendingProps, a);
        case 7:
            return Ct(e, t, t.pendingProps, a),
            t.child;
        case 8:
            return Ct(e, t, t.pendingProps.children, a),
            t.child;
        case 12:
            return Ct(e, t, t.pendingProps.children, a),
            t.child;
        case 10:
            return i = t.pendingProps,
            fn(t, t.type, i.value),
            Ct(e, t, i.children, a),
            t.child;
        case 9:
            return r = t.type._context,
            i = t.pendingProps.children,
            In(t),
            r = Vt(r),
            i = i(r),
            t.flags |= 1,
            Ct(e, t, i, a),
            t.child;
        case 14:
            return Ph(e, t, t.type, t.pendingProps, a);
        case 15:
            return Hh(e, t, t.type, t.pendingProps, a);
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
            t = a) : (a = Ga(e.child, i),
            a.ref = t.ref,
            t.child = a,
            a.return = t,
            t = a),
            t;
        case 22:
            return Yh(e, t, a);
        case 24:
            return In(t),
            i = Vt(St),
            e === null ? (r = Yr(),
            r === null && (r = Ze,
            c = Pr(),
            r.pooledCache = c,
            c.refCount++,
            c !== null && (r.pooledCacheLanes |= a),
            r = c),
            t.memoizedState = {
                parent: i,
                cache: r
            },
            Gr(t),
            fn(t, St, r)) : ((e.lanes & a) !== 0 && (Xr(e, t),
            Ds(t, null, null, a),
            Cs()),
            r = e.memoizedState,
            c = t.memoizedState,
            r.parent !== i ? (r = {
                parent: i,
                cache: i
            },
            t.memoizedState = r,
            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = r),
            fn(t, St, i)) : (i = c.cache,
            fn(t, St, i),
            i !== r.cache && kr(t, [St], a, !0))),
            Ct(e, t, t.pendingProps.children, a),
            t.child;
        case 29:
            throw t.pendingProps
        }
        throw Error(o(156, t.tag))
    }
    function $a(e) {
        e.flags |= 4
    }
    function Jh(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            e.flags &= -16777217;
        else if (e.flags |= 16777216,
        !sp(t)) {
            if (t = oa.current,
            t !== null && ((ze & 4194048) === ze ? Ea !== null : (ze & 62914560) !== ze && (ze & 536870912) === 0 || t !== Ea))
                throw As = qr,
                Vd;
            e.flags |= 8192
        }
    }
    function ho(e, t) {
        t !== null && (e.flags |= 4),
        e.flags & 16384 && (t = e.tag !== 22 ? $() : 536870912,
        e.lanes |= t,
        Ll |= t)
    }
    function zs(e, t) {
        if (!ke)
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
    function tt(e) {
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
    function sv(e, t, a) {
        var i = t.pendingProps;
        switch (Ur(t),
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
            return tt(t),
            null;
        case 1:
            return tt(t),
            null;
        case 3:
            return a = t.stateNode,
            i = null,
            e !== null && (i = e.memoizedState.cache),
            t.memoizedState.cache !== i && (t.flags |= 2048),
            Qa(St),
            Ve(),
            a.pendingContext && (a.context = a.pendingContext,
            a.pendingContext = null),
            (e === null || e.child === null) && (vs(t) ? $a(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            Dd())),
            tt(t),
            null;
        case 26:
            return a = t.memoizedState,
            e === null ? ($a(t),
            a !== null ? (tt(t),
            Jh(t, a)) : (tt(t),
            t.flags &= -16777217)) : a ? a !== e.memoizedState ? ($a(t),
            tt(t),
            Jh(t, a)) : (tt(t),
            t.flags &= -16777217) : (e.memoizedProps !== i && $a(t),
            tt(t),
            t.flags &= -16777217),
            null;
        case 27:
            Re(t),
            a = ae.current;
            var r = t.type;
            if (e !== null && t.stateNode != null)
                e.memoizedProps !== i && $a(t);
            else {
                if (!i) {
                    if (t.stateNode === null)
                        throw Error(o(166));
                    return tt(t),
                    null
                }
                e = le.current,
                vs(t) ? Ed(t) : (e = Jm(r, i, a),
                t.stateNode = e,
                $a(t))
            }
            return tt(t),
            null;
        case 5:
            if (Re(t),
            a = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== i && $a(t);
            else {
                if (!i) {
                    if (t.stateNode === null)
                        throw Error(o(166));
                    return tt(t),
                    null
                }
                if (e = le.current,
                vs(t))
                    Ed(t);
                else {
                    switch (r = Ao(ae.current),
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
                    e[bt] = t,
                    e[At] = i;
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
                    e && $a(t)
                }
            }
            return tt(t),
            t.flags &= -16777217,
            null;
        case 6:
            if (e && t.stateNode != null)
                e.memoizedProps !== i && $a(t);
            else {
                if (typeof i != "string" && t.stateNode === null)
                    throw Error(o(166));
                if (e = ae.current,
                vs(t)) {
                    if (e = t.stateNode,
                    a = t.memoizedProps,
                    i = null,
                    r = Bt,
                    r !== null)
                        switch (r.tag) {
                        case 27:
                        case 5:
                            i = r.memoizedProps
                        }
                    e[bt] = t,
                    e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || Gm(e.nodeValue, a)),
                    e || Qn(t)
                } else
                    e = Ao(e).createTextNode(i),
                    e[bt] = t,
                    t.stateNode = e
            }
            return tt(t),
            null;
        case 13:
            if (i = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (r = vs(t),
                i !== null && i.dehydrated !== null) {
                    if (e === null) {
                        if (!r)
                            throw Error(o(318));
                        if (r = t.memoizedState,
                        r = r !== null ? r.dehydrated : null,
                        !r)
                            throw Error(o(317));
                        r[bt] = t
                    } else
                        bs(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    tt(t),
                    r = !1
                } else
                    r = Dd(),
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
                var c = null;
                i.memoizedState !== null && i.memoizedState.cachePool !== null && (c = i.memoizedState.cachePool.pool),
                c !== r && (i.flags |= 2048)
            }
            return a !== e && a && (t.child.flags |= 8192),
            ho(t, t.updateQueue),
            tt(t),
            null;
        case 4:
            return Ve(),
            e === null && Ku(t.stateNode.containerInfo),
            tt(t),
            null;
        case 10:
            return Qa(t.type),
            tt(t),
            null;
        case 19:
            if (te(wt),
            r = t.memoizedState,
            r === null)
                return tt(t),
                null;
            if (i = (t.flags & 128) !== 0,
            c = r.rendering,
            c === null)
                if (i)
                    zs(r, !1);
                else {
                    if (ot !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null; ) {
                            if (c = oo(e),
                            c !== null) {
                                for (t.flags |= 128,
                                zs(r, !1),
                                e = c.updateQueue,
                                t.updateQueue = e,
                                ho(t, e),
                                t.subtreeFlags = 0,
                                e = a,
                                a = t.child; a !== null; )
                                    Nd(a, e),
                                    a = a.sibling;
                                return W(wt, wt.current & 1 | 2),
                                t.child
                            }
                            e = e.sibling
                        }
                    r.tail !== null && et() > go && (t.flags |= 128,
                    i = !0,
                    zs(r, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!i)
                    if (e = oo(c),
                    e !== null) {
                        if (t.flags |= 128,
                        i = !0,
                        e = e.updateQueue,
                        t.updateQueue = e,
                        ho(t, e),
                        zs(r, !0),
                        r.tail === null && r.tailMode === "hidden" && !c.alternate && !ke)
                            return tt(t),
                            null
                    } else
                        2 * et() - r.renderingStartTime > go && a !== 536870912 && (t.flags |= 128,
                        i = !0,
                        zs(r, !1),
                        t.lanes = 4194304);
                r.isBackwards ? (c.sibling = t.child,
                t.child = c) : (e = r.last,
                e !== null ? e.sibling = c : t.child = c,
                r.last = c)
            }
            return r.tail !== null ? (t = r.tail,
            r.rendering = t,
            r.tail = t.sibling,
            r.renderingStartTime = et(),
            t.sibling = null,
            e = wt.current,
            W(wt, i ? e & 1 | 2 : e & 1),
            t) : (tt(t),
            null);
        case 22:
        case 23:
            return Ia(t),
            Zr(),
            i = t.memoizedState !== null,
            e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192),
            i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (tt(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : tt(t),
            a = t.updateQueue,
            a !== null && ho(t, a.retryQueue),
            a = null,
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
            i = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool),
            i !== a && (t.flags |= 2048),
            e !== null && te(Jn),
            null;
        case 24:
            return a = null,
            e !== null && (a = e.memoizedState.cache),
            t.memoizedState.cache !== a && (t.flags |= 2048),
            Qa(St),
            tt(t),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(o(156, t.tag))
    }
    function iv(e, t) {
        switch (Ur(t),
        t.tag) {
        case 1:
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return Qa(St),
            Ve(),
            e = t.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 26:
        case 27:
        case 5:
            return Re(t),
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
            return te(wt),
            null;
        case 4:
            return Ve(),
            null;
        case 10:
            return Qa(t.type),
            null;
        case 22:
        case 23:
            return Ia(t),
            Zr(),
            e !== null && te(Jn),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 24:
            return Qa(St),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function $h(e, t) {
        switch (Ur(t),
        t.tag) {
        case 3:
            Qa(St),
            Ve();
            break;
        case 26:
        case 27:
        case 5:
            Re(t);
            break;
        case 4:
            Ve();
            break;
        case 13:
            Ia(t);
            break;
        case 19:
            te(wt);
            break;
        case 10:
            Qa(t.type);
            break;
        case 22:
        case 23:
            Ia(t),
            Zr(),
            e !== null && te(Jn);
            break;
        case 24:
            Qa(St)
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
                        var c = a.create
                          , y = a.inst;
                        i = c(),
                        y.destroy = i
                    }
                    a = a.next
                } while (a !== r)
            }
        } catch (b) {
            Ke(t, t.return, b)
        }
    }
    function xn(e, t, a) {
        try {
            var i = t.updateQueue
              , r = i !== null ? i.lastEffect : null;
            if (r !== null) {
                var c = r.next;
                i = c;
                do {
                    if ((i.tag & e) === e) {
                        var y = i.inst
                          , b = y.destroy;
                        if (b !== void 0) {
                            y.destroy = void 0,
                            r = t;
                            var A = a
                              , L = b;
                            try {
                                L()
                            } catch (G) {
                                Ke(r, A, G)
                            }
                        }
                    }
                    i = i.next
                } while (i !== c)
            }
        } catch (G) {
            Ke(t, t.return, G)
        }
    }
    function Wh(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var a = e.stateNode;
            try {
                Pd(t, a)
            } catch (i) {
                Ke(e, e.return, i)
            }
        }
    }
    function em(e, t, a) {
        a.props = Wn(e.type, e.memoizedProps),
        a.state = e.memoizedState;
        try {
            a.componentWillUnmount()
        } catch (i) {
            Ke(e, t, i)
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
            Ke(e, t, r)
        }
    }
    function Ca(e, t) {
        var a = e.ref
          , i = e.refCleanup;
        if (a !== null)
            if (typeof i == "function")
                try {
                    i()
                } catch (r) {
                    Ke(e, t, r)
                } finally {
                    e.refCleanup = null,
                    e = e.alternate,
                    e != null && (e.refCleanup = null)
                }
            else if (typeof a == "function")
                try {
                    a(null)
                } catch (r) {
                    Ke(e, t, r)
                }
            else
                a.current = null
    }
    function tm(e) {
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
            Ke(e, e.return, r)
        }
    }
    function ju(e, t, a) {
        try {
            var i = e.stateNode;
            Ev(i, e.type, a, t),
            i[At] = t
        } catch (r) {
            Ke(e, e.return, r)
        }
    }
    function am(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && An(e.type) || e.tag === 4
    }
    function Tu(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || am(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.tag === 27 && An(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function Nu(e, t, a) {
        var i = e.tag;
        if (i === 5 || i === 6)
            e = e.stateNode,
            t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a,
            t.appendChild(e),
            a = a._reactRootContainer,
            a != null || t.onclick !== null || (t.onclick = No));
        else if (i !== 4 && (i === 27 && An(e.type) && (a = e.stateNode,
        t = null),
        e = e.child,
        e !== null))
            for (Nu(e, t, a),
            e = e.sibling; e !== null; )
                Nu(e, t, a),
                e = e.sibling
    }
    function mo(e, t, a) {
        var i = e.tag;
        if (i === 5 || i === 6)
            e = e.stateNode,
            t ? a.insertBefore(e, t) : a.appendChild(e);
        else if (i !== 4 && (i === 27 && An(e.type) && (a = e.stateNode),
        e = e.child,
        e !== null))
            for (mo(e, t, a),
            e = e.sibling; e !== null; )
                mo(e, t, a),
                e = e.sibling
    }
    function nm(e) {
        var t = e.stateNode
          , a = e.memoizedProps;
        try {
            for (var i = e.type, r = t.attributes; r.length; )
                t.removeAttributeNode(r[0]);
            Mt(t, i, a),
            t[bt] = e,
            t[At] = a
        } catch (c) {
            Ke(e, e.return, c)
        }
    }
    var Wa = !1
      , dt = !1
      , Au = !1
      , lm = typeof WeakSet == "function" ? WeakSet : Set
      , Tt = null;
    function ov(e, t) {
        if (e = e.containerInfo,
        Iu = Oo,
        e = pd(e),
        Tr(e)) {
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
                          , c = i.focusNode;
                        i = i.focusOffset;
                        try {
                            a.nodeType,
                            c.nodeType
                        } catch {
                            a = null;
                            break e
                        }
                        var y = 0
                          , b = -1
                          , A = -1
                          , L = 0
                          , G = 0
                          , Z = e
                          , k = null;
                        t: for (; ; ) {
                            for (var H; Z !== a || r !== 0 && Z.nodeType !== 3 || (b = y + r),
                            Z !== c || i !== 0 && Z.nodeType !== 3 || (A = y + i),
                            Z.nodeType === 3 && (y += Z.nodeValue.length),
                            (H = Z.firstChild) !== null; )
                                k = Z,
                                Z = H;
                            for (; ; ) {
                                if (Z === e)
                                    break t;
                                if (k === a && ++L === r && (b = y),
                                k === c && ++G === i && (A = y),
                                (H = Z.nextSibling) !== null)
                                    break;
                                Z = k,
                                k = Z.parentNode
                            }
                            Z = H
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
        Tt = t; Tt !== null; )
            if (t = Tt,
            e = t.child,
            (t.subtreeFlags & 1024) !== 0 && e !== null)
                e.return = t,
                Tt = e;
            else
                for (; Tt !== null; ) {
                    switch (t = Tt,
                    c = t.alternate,
                    e = t.flags,
                    t.tag) {
                    case 0:
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((e & 1024) !== 0 && c !== null) {
                            e = void 0,
                            a = t,
                            r = c.memoizedProps,
                            c = c.memoizedState,
                            i = a.stateNode;
                            try {
                                var Se = Wn(a.type, r, a.elementType === a.type);
                                e = i.getSnapshotBeforeUpdate(Se, c),
                                i.__reactInternalSnapshotBeforeUpdate = e
                            } catch (xe) {
                                Ke(a, a.return, xe)
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo,
                            a = e.nodeType,
                            a === 9)
                                ec(e);
                            else if (a === 1)
                                switch (e.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    ec(e);
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
                        Tt = e;
                        break
                    }
                    Tt = t.return
                }
    }
    function sm(e, t, a) {
        var i = a.flags;
        switch (a.tag) {
        case 0:
        case 11:
        case 15:
            vn(e, a),
            i & 4 && Bs(5, a);
            break;
        case 1:
            if (vn(e, a),
            i & 4)
                if (e = a.stateNode,
                t === null)
                    try {
                        e.componentDidMount()
                    } catch (y) {
                        Ke(a, a.return, y)
                    }
                else {
                    var r = Wn(a.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(r, t, e.__reactInternalSnapshotBeforeUpdate)
                    } catch (y) {
                        Ke(a, a.return, y)
                    }
                }
            i & 64 && Wh(a),
            i & 512 && Ls(a, a.return);
            break;
        case 3:
            if (vn(e, a),
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
                    Pd(e, t)
                } catch (y) {
                    Ke(a, a.return, y)
                }
            }
            break;
        case 27:
            t === null && i & 4 && nm(a);
        case 26:
        case 5:
            vn(e, a),
            t === null && i & 4 && tm(a),
            i & 512 && Ls(a, a.return);
            break;
        case 12:
            vn(e, a);
            break;
        case 13:
            vn(e, a),
            i & 4 && rm(e, a),
            i & 64 && (e = a.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null && (a = gv.bind(null, a),
            Vv(e, a))));
            break;
        case 22:
            if (i = a.memoizedState !== null || Wa,
            !i) {
                t = t !== null && t.memoizedState !== null || dt,
                r = Wa;
                var c = dt;
                Wa = i,
                (dt = t) && !c ? bn(e, a, (a.subtreeFlags & 8772) !== 0) : vn(e, a),
                Wa = r,
                dt = c
            }
            break;
        case 30:
            break;
        default:
            vn(e, a)
        }
    }
    function im(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        im(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && hl(t)),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    var We = null
      , qt = !1;
    function en(e, t, a) {
        for (a = a.child; a !== null; )
            om(e, t, a),
            a = a.sibling
    }
    function om(e, t, a) {
        if (ct && typeof ct.onCommitFiberUnmount == "function")
            try {
                ct.onCommitFiberUnmount(Ft, a)
            } catch {}
        switch (a.tag) {
        case 26:
            dt || Ca(a, t),
            en(e, t, a),
            a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode,
            a.parentNode.removeChild(a));
            break;
        case 27:
            dt || Ca(a, t);
            var i = We
              , r = qt;
            An(a.type) && (We = a.stateNode,
            qt = !1),
            en(e, t, a),
            Ks(a.stateNode),
            We = i,
            qt = r;
            break;
        case 5:
            dt || Ca(a, t);
        case 6:
            if (i = We,
            r = qt,
            We = null,
            en(e, t, a),
            We = i,
            qt = r,
            We !== null)
                if (qt)
                    try {
                        (We.nodeType === 9 ? We.body : We.nodeName === "HTML" ? We.ownerDocument.body : We).removeChild(a.stateNode)
                    } catch (c) {
                        Ke(a, t, c)
                    }
                else
                    try {
                        We.removeChild(a.stateNode)
                    } catch (c) {
                        Ke(a, t, c)
                    }
            break;
        case 18:
            We !== null && (qt ? (e = We,
            Zm(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, a.stateNode),
            ti(e)) : Zm(We, a.stateNode));
            break;
        case 4:
            i = We,
            r = qt,
            We = a.stateNode.containerInfo,
            qt = !0,
            en(e, t, a),
            We = i,
            qt = r;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            dt || xn(2, a, t),
            dt || xn(4, a, t),
            en(e, t, a);
            break;
        case 1:
            dt || (Ca(a, t),
            i = a.stateNode,
            typeof i.componentWillUnmount == "function" && em(a, t, i)),
            en(e, t, a);
            break;
        case 21:
            en(e, t, a);
            break;
        case 22:
            dt = (i = dt) || a.memoizedState !== null,
            en(e, t, a),
            dt = i;
            break;
        default:
            en(e, t, a)
        }
    }
    function rm(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null))))
            try {
                ti(e)
            } catch (a) {
                Ke(t, t.return, a)
            }
    }
    function rv(e) {
        switch (e.tag) {
        case 13:
        case 19:
            var t = e.stateNode;
            return t === null && (t = e.stateNode = new lm),
            t;
        case 22:
            return e = e.stateNode,
            t = e._retryCache,
            t === null && (t = e._retryCache = new lm),
            t;
        default:
            throw Error(o(435, e.tag))
        }
    }
    function Eu(e, t) {
        var a = rv(e);
        t.forEach(function(i) {
            var r = yv.bind(null, e, i);
            a.has(i) || (a.add(i),
            i.then(r, r))
        })
    }
    function Zt(e, t) {
        var a = t.deletions;
        if (a !== null)
            for (var i = 0; i < a.length; i++) {
                var r = a[i]
                  , c = e
                  , y = t
                  , b = y;
                e: for (; b !== null; ) {
                    switch (b.tag) {
                    case 27:
                        if (An(b.type)) {
                            We = b.stateNode,
                            qt = !1;
                            break e
                        }
                        break;
                    case 5:
                        We = b.stateNode,
                        qt = !1;
                        break e;
                    case 3:
                    case 4:
                        We = b.stateNode.containerInfo,
                        qt = !0;
                        break e
                    }
                    b = b.return
                }
                if (We === null)
                    throw Error(o(160));
                om(c, y, r),
                We = null,
                qt = !1,
                c = r.alternate,
                c !== null && (c.return = null),
                r.return = null
            }
        if (t.subtreeFlags & 13878)
            for (t = t.child; t !== null; )
                um(t, e),
                t = t.sibling
    }
    var Sa = null;
    function um(e, t) {
        var a = e.alternate
          , i = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            Zt(t, e),
            It(e),
            i & 4 && (xn(3, e, e.return),
            Bs(3, e),
            xn(5, e, e.return));
            break;
        case 1:
            Zt(t, e),
            It(e),
            i & 512 && (dt || a === null || Ca(a, a.return)),
            i & 64 && Wa && (e = e.updateQueue,
            e !== null && (i = e.callbacks,
            i !== null && (a = e.shared.hiddenCallbacks,
            e.shared.hiddenCallbacks = a === null ? i : a.concat(i))));
            break;
        case 26:
            var r = Sa;
            if (Zt(t, e),
            It(e),
            i & 512 && (dt || a === null || Ca(a, a.return)),
            i & 4) {
                var c = a !== null ? a.memoizedState : null;
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
                                    c = r.getElementsByTagName("title")[0],
                                    (!c || c[rn] || c[bt] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = r.createElement(i),
                                    r.head.insertBefore(c, r.querySelector("head > title"))),
                                    Mt(c, i, a),
                                    c[bt] = e,
                                    ge(c),
                                    i = c;
                                    break e;
                                case "link":
                                    var y = np("link", "href", r).get(i + (a.href || ""));
                                    if (y) {
                                        for (var b = 0; b < y.length; b++)
                                            if (c = y[b],
                                            c.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && c.getAttribute("rel") === (a.rel == null ? null : a.rel) && c.getAttribute("title") === (a.title == null ? null : a.title) && c.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                y.splice(b, 1);
                                                break t
                                            }
                                    }
                                    c = r.createElement(i),
                                    Mt(c, i, a),
                                    r.head.appendChild(c);
                                    break;
                                case "meta":
                                    if (y = np("meta", "content", r).get(i + (a.content || ""))) {
                                        for (b = 0; b < y.length; b++)
                                            if (c = y[b],
                                            c.getAttribute("content") === (a.content == null ? null : "" + a.content) && c.getAttribute("name") === (a.name == null ? null : a.name) && c.getAttribute("property") === (a.property == null ? null : a.property) && c.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && c.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                y.splice(b, 1);
                                                break t
                                            }
                                    }
                                    c = r.createElement(i),
                                    Mt(c, i, a),
                                    r.head.appendChild(c);
                                    break;
                                default:
                                    throw Error(o(468, i))
                                }
                                c[bt] = e,
                                ge(c),
                                i = c
                            }
                            e.stateNode = i
                        } else
                            lp(r, e.type, e.stateNode);
                    else
                        e.stateNode = ap(r, i, e.memoizedProps);
                else
                    c !== i ? (c === null ? a.stateNode !== null && (a = a.stateNode,
                    a.parentNode.removeChild(a)) : c.count--,
                    i === null ? lp(r, e.type, e.stateNode) : ap(r, i, e.memoizedProps)) : i === null && e.stateNode !== null && ju(e, e.memoizedProps, a.memoizedProps)
            }
            break;
        case 27:
            Zt(t, e),
            It(e),
            i & 512 && (dt || a === null || Ca(a, a.return)),
            a !== null && i & 4 && ju(e, e.memoizedProps, a.memoizedProps);
            break;
        case 5:
            if (Zt(t, e),
            It(e),
            i & 512 && (dt || a === null || Ca(a, a.return)),
            e.flags & 32) {
                r = e.stateNode;
                try {
                    gl(r, "")
                } catch (H) {
                    Ke(e, e.return, H)
                }
            }
            i & 4 && e.stateNode != null && (r = e.memoizedProps,
            ju(e, r, a !== null ? a.memoizedProps : r)),
            i & 1024 && (Au = !0);
            break;
        case 6:
            if (Zt(t, e),
            It(e),
            i & 4) {
                if (e.stateNode === null)
                    throw Error(o(162));
                i = e.memoizedProps,
                a = e.stateNode;
                try {
                    a.nodeValue = i
                } catch (H) {
                    Ke(e, e.return, H)
                }
            }
            break;
        case 3:
            if (Do = null,
            r = Sa,
            Sa = Eo(t.containerInfo),
            Zt(t, e),
            Sa = r,
            It(e),
            i & 4 && a !== null && a.memoizedState.isDehydrated)
                try {
                    ti(t.containerInfo)
                } catch (H) {
                    Ke(e, e.return, H)
                }
            Au && (Au = !1,
            cm(e));
            break;
        case 4:
            i = Sa,
            Sa = Eo(e.stateNode.containerInfo),
            Zt(t, e),
            It(e),
            Sa = i;
            break;
        case 12:
            Zt(t, e),
            It(e);
            break;
        case 13:
            Zt(t, e),
            It(e),
            e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Ru = et()),
            i & 4 && (i = e.updateQueue,
            i !== null && (e.updateQueue = null,
            Eu(e, i)));
            break;
        case 22:
            r = e.memoizedState !== null;
            var A = a !== null && a.memoizedState !== null
              , L = Wa
              , G = dt;
            if (Wa = L || r,
            dt = G || A,
            Zt(t, e),
            dt = G,
            Wa = L,
            It(e),
            i & 8192)
                e: for (t = e.stateNode,
                t._visibility = r ? t._visibility & -2 : t._visibility | 1,
                r && (a === null || A || Wa || dt || el(e)),
                a = null,
                t = e; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (a === null) {
                            A = a = t;
                            try {
                                if (c = A.stateNode,
                                r)
                                    y = c.style,
                                    typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                                else {
                                    b = A.stateNode;
                                    var Z = A.memoizedProps.style
                                      , k = Z != null && Z.hasOwnProperty("display") ? Z.display : null;
                                    b.style.display = k == null || typeof k == "boolean" ? "" : ("" + k).trim()
                                }
                            } catch (H) {
                                Ke(A, A.return, H)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (a === null) {
                            A = t;
                            try {
                                A.stateNode.nodeValue = r ? "" : A.memoizedProps
                            } catch (H) {
                                Ke(A, A.return, H)
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
            Eu(e, a))));
            break;
        case 19:
            Zt(t, e),
            It(e),
            i & 4 && (i = e.updateQueue,
            i !== null && (e.updateQueue = null,
            Eu(e, i)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            Zt(t, e),
            It(e)
        }
    }
    function It(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var a, i = e.return; i !== null; ) {
                    if (am(i)) {
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
                      , c = Tu(e);
                    mo(e, c, r);
                    break;
                case 5:
                    var y = a.stateNode;
                    a.flags & 32 && (gl(y, ""),
                    a.flags &= -33);
                    var b = Tu(e);
                    mo(e, b, y);
                    break;
                case 3:
                case 4:
                    var A = a.stateNode.containerInfo
                      , L = Tu(e);
                    Nu(e, L, A);
                    break;
                default:
                    throw Error(o(161))
                }
            } catch (G) {
                Ke(e, e.return, G)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function cm(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
                var t = e;
                cm(t),
                t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                e = e.sibling
            }
    }
    function vn(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                sm(e, t.alternate, t),
                t = t.sibling
    }
    function el(e) {
        for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                xn(4, t, t.return),
                el(t);
                break;
            case 1:
                Ca(t, t.return);
                var a = t.stateNode;
                typeof a.componentWillUnmount == "function" && em(t, t.return, a),
                el(t);
                break;
            case 27:
                Ks(t.stateNode);
            case 26:
            case 5:
                Ca(t, t.return),
                el(t);
                break;
            case 22:
                t.memoizedState === null && el(t);
                break;
            case 30:
                el(t);
                break;
            default:
                el(t)
            }
            e = e.sibling
        }
    }
    function bn(e, t, a) {
        for (a = a && (t.subtreeFlags & 8772) !== 0,
        t = t.child; t !== null; ) {
            var i = t.alternate
              , r = e
              , c = t
              , y = c.flags;
            switch (c.tag) {
            case 0:
            case 11:
            case 15:
                bn(r, c, a),
                Bs(4, c);
                break;
            case 1:
                if (bn(r, c, a),
                i = c,
                r = i.stateNode,
                typeof r.componentDidMount == "function")
                    try {
                        r.componentDidMount()
                    } catch (L) {
                        Ke(i, i.return, L)
                    }
                if (i = c,
                r = i.updateQueue,
                r !== null) {
                    var b = i.stateNode;
                    try {
                        var A = r.shared.hiddenCallbacks;
                        if (A !== null)
                            for (r.shared.hiddenCallbacks = null,
                            r = 0; r < A.length; r++)
                                kd(A[r], b)
                    } catch (L) {
                        Ke(i, i.return, L)
                    }
                }
                a && y & 64 && Wh(c),
                Ls(c, c.return);
                break;
            case 27:
                nm(c);
            case 26:
            case 5:
                bn(r, c, a),
                a && i === null && y & 4 && tm(c),
                Ls(c, c.return);
                break;
            case 12:
                bn(r, c, a);
                break;
            case 13:
                bn(r, c, a),
                a && y & 4 && rm(r, c);
                break;
            case 22:
                c.memoizedState === null && bn(r, c, a),
                Ls(c, c.return);
                break;
            case 30:
                break;
            default:
                bn(r, c, a)
            }
            t = t.sibling
        }
    }
    function Cu(e, t) {
        var a = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
        e = null,
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
        e !== a && (e != null && e.refCount++,
        a != null && js(a))
    }
    function Du(e, t) {
        e = null,
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== e && (t.refCount++,
        e != null && js(e))
    }
    function Da(e, t, a, i) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                fm(e, t, a, i),
                t = t.sibling
    }
    function fm(e, t, a, i) {
        var r = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            Da(e, t, a, i),
            r & 2048 && Bs(9, t);
            break;
        case 1:
            Da(e, t, a, i);
            break;
        case 3:
            Da(e, t, a, i),
            r & 2048 && (e = null,
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== e && (t.refCount++,
            e != null && js(e)));
            break;
        case 12:
            if (r & 2048) {
                Da(e, t, a, i),
                e = t.stateNode;
                try {
                    var c = t.memoizedProps
                      , y = c.id
                      , b = c.onPostCommit;
                    typeof b == "function" && b(y, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                } catch (A) {
                    Ke(t, t.return, A)
                }
            } else
                Da(e, t, a, i);
            break;
        case 13:
            Da(e, t, a, i);
            break;
        case 23:
            break;
        case 22:
            c = t.stateNode,
            y = t.alternate,
            t.memoizedState !== null ? c._visibility & 2 ? Da(e, t, a, i) : ks(e, t) : c._visibility & 2 ? Da(e, t, a, i) : (c._visibility |= 2,
            Ul(e, t, a, i, (t.subtreeFlags & 10256) !== 0)),
            r & 2048 && Cu(y, t);
            break;
        case 24:
            Da(e, t, a, i),
            r & 2048 && Du(t.alternate, t);
            break;
        default:
            Da(e, t, a, i)
        }
    }
    function Ul(e, t, a, i, r) {
        for (r = r && (t.subtreeFlags & 10256) !== 0,
        t = t.child; t !== null; ) {
            var c = e
              , y = t
              , b = a
              , A = i
              , L = y.flags;
            switch (y.tag) {
            case 0:
            case 11:
            case 15:
                Ul(c, y, b, A, r),
                Bs(8, y);
                break;
            case 23:
                break;
            case 22:
                var G = y.stateNode;
                y.memoizedState !== null ? G._visibility & 2 ? Ul(c, y, b, A, r) : ks(c, y) : (G._visibility |= 2,
                Ul(c, y, b, A, r)),
                r && L & 2048 && Cu(y.alternate, y);
                break;
            case 24:
                Ul(c, y, b, A, r),
                r && L & 2048 && Du(y.alternate, y);
                break;
            default:
                Ul(c, y, b, A, r)
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
                    r & 2048 && Cu(i.alternate, i);
                    break;
                case 24:
                    ks(a, i),
                    r & 2048 && Du(i.alternate, i);
                    break;
                default:
                    ks(a, i)
                }
                t = t.sibling
            }
    }
    var Ps = 8192;
    function zl(e) {
        if (e.subtreeFlags & Ps)
            for (e = e.child; e !== null; )
                dm(e),
                e = e.sibling
    }
    function dm(e) {
        switch (e.tag) {
        case 26:
            zl(e),
            e.flags & Ps && e.memoizedState !== null && Kv(Sa, e.memoizedState, e.memoizedProps);
            break;
        case 5:
            zl(e);
            break;
        case 3:
        case 4:
            var t = Sa;
            Sa = Eo(e.stateNode.containerInfo),
            zl(e),
            Sa = t;
            break;
        case 22:
            e.memoizedState === null && (t = e.alternate,
            t !== null && t.memoizedState !== null ? (t = Ps,
            Ps = 16777216,
            zl(e),
            Ps = t) : zl(e));
            break;
        default:
            zl(e)
        }
    }
    function hm(e) {
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
    function Hs(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    Tt = i,
                    pm(i, e)
                }
            hm(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                mm(e),
                e = e.sibling
    }
    function mm(e) {
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Hs(e),
            e.flags & 2048 && xn(9, e, e.return);
            break;
        case 3:
            Hs(e);
            break;
        case 12:
            Hs(e);
            break;
        case 22:
            var t = e.stateNode;
            e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3,
            po(e)) : Hs(e);
            break;
        default:
            Hs(e)
        }
    }
    function po(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    Tt = i,
                    pm(i, e)
                }
            hm(e)
        }
        for (e = e.child; e !== null; ) {
            switch (t = e,
            t.tag) {
            case 0:
            case 11:
            case 15:
                xn(8, t, t.return),
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
    function pm(e, t) {
        for (; Tt !== null; ) {
            var a = Tt;
            switch (a.tag) {
            case 0:
            case 11:
            case 15:
                xn(8, a, t);
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
                Tt = i;
            else
                e: for (a = e; Tt !== null; ) {
                    i = Tt;
                    var r = i.sibling
                      , c = i.return;
                    if (im(i),
                    i === a) {
                        Tt = null;
                        break e
                    }
                    if (r !== null) {
                        r.return = c,
                        Tt = r;
                        break e
                    }
                    Tt = c
                }
        }
    }
    var uv = {
        getCacheForType: function(e) {
            var t = Vt(St)
              , a = t.data.get(e);
            return a === void 0 && (a = e(),
            t.data.set(e, a)),
            a
        }
    }
      , cv = typeof WeakMap == "function" ? WeakMap : Map
      , He = 0
      , Ze = null
      , Me = null
      , ze = 0
      , Ye = 0
      , Jt = null
      , Sn = !1
      , Bl = !1
      , Mu = !1
      , tn = 0
      , ot = 0
      , wn = 0
      , tl = 0
      , _u = 0
      , ra = 0
      , Ll = 0
      , Ys = null
      , Gt = null
      , Ou = !1
      , Ru = 0
      , go = 1 / 0
      , yo = null
      , jn = null
      , Dt = 0
      , Tn = null
      , kl = null
      , Pl = 0
      , Vu = 0
      , Uu = null
      , gm = null
      , qs = 0
      , zu = null;
    function $t() {
        if ((He & 2) !== 0 && ze !== 0)
            return ze & -ze;
        if (T.T !== null) {
            var e = El;
            return e !== 0 ? e : qu()
        }
        return os()
    }
    function ym() {
        ra === 0 && (ra = (ze & 536870912) === 0 || ke ? $e() : 536870912);
        var e = oa.current;
        return e !== null && (e.flags |= 32),
        ra
    }
    function Wt(e, t, a) {
        (e === Ze && (Ye === 2 || Ye === 9) || e.cancelPendingCommit !== null) && (Hl(e, 0),
        Nn(e, ze, ra, !1)),
        mt(e, a),
        ((He & 2) === 0 || e !== Ze) && (e === Ze && ((He & 2) === 0 && (tl |= a),
        ot === 4 && Nn(e, ze, ra, !1)),
        Ma(e))
    }
    function xm(e, t, a) {
        if ((He & 6) !== 0)
            throw Error(o(327));
        var i = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || ye(e, t)
          , r = i ? hv(e, t) : ku(e, t, !0)
          , c = i;
        do {
            if (r === 0) {
                Bl && !i && Nn(e, t, 0, !1);
                break
            } else {
                if (a = e.current.alternate,
                c && !fv(a)) {
                    r = ku(e, t, !1),
                    c = !1;
                    continue
                }
                if (r === 2) {
                    if (c = t,
                    e.errorRecoveryDisabledLanes & c)
                        var y = 0;
                    else
                        y = e.pendingLanes & -536870913,
                        y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
                    if (y !== 0) {
                        t = y;
                        e: {
                            var b = e;
                            r = Ys;
                            var A = b.current.memoizedState.isDehydrated;
                            if (A && (Hl(b, y).flags |= 256),
                            y = ku(b, y, !1),
                            y !== 2) {
                                if (Mu && !A) {
                                    b.errorRecoveryDisabledLanes |= c,
                                    tl |= c,
                                    r = 4;
                                    break e
                                }
                                c = Gt,
                                Gt = r,
                                c !== null && (Gt === null ? Gt = c : Gt.push.apply(Gt, c))
                            }
                            r = y
                        }
                        if (c = !1,
                        r !== 2)
                            continue
                    }
                }
                if (r === 1) {
                    Hl(e, 0),
                    Nn(e, t, 0, !0);
                    break
                }
                e: {
                    switch (i = e,
                    c = r,
                    c) {
                    case 0:
                    case 1:
                        throw Error(o(345));
                    case 4:
                        if ((t & 4194048) !== t)
                            break;
                    case 6:
                        Nn(i, t, ra, !Sn);
                        break e;
                    case 2:
                        Gt = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(o(329))
                    }
                    if ((t & 62914560) === t && (r = Ru + 300 - et(),
                    10 < r)) {
                        if (Nn(i, t, ra, !Sn),
                        oe(i, 0, !0) !== 0)
                            break e;
                        i.timeoutHandle = Km(vm.bind(null, i, a, Gt, yo, Ou, t, ra, tl, Ll, Sn, c, 2, -0, 0), r);
                        break e
                    }
                    vm(i, a, Gt, yo, Ou, t, ra, tl, Ll, Sn, c, 0, -0, 0)
                }
            }
            break
        } while (!0);
        Ma(e)
    }
    function vm(e, t, a, i, r, c, y, b, A, L, G, Z, k, H) {
        if (e.timeoutHandle = -1,
        Z = t.subtreeFlags,
        (Z & 8192 || (Z & 16785408) === 16785408) && (Is = {
            stylesheets: null,
            count: 0,
            unsuspend: Fv
        },
        dm(t),
        Z = Qv(),
        Z !== null)) {
            e.cancelPendingCommit = Z(Am.bind(null, e, t, c, a, i, r, y, b, A, G, 1, k, H)),
            Nn(e, c, y, !L);
            return
        }
        Am(e, t, c, a, i, r, y, b, A)
    }
    function fv(e) {
        for (var t = e; ; ) {
            var a = t.tag;
            if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue,
            a !== null && (a = a.stores,
            a !== null)))
                for (var i = 0; i < a.length; i++) {
                    var r = a[i]
                      , c = r.getSnapshot;
                    r = r.value;
                    try {
                        if (!Kt(c(), r))
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
    function Nn(e, t, a, i) {
        t &= ~_u,
        t &= ~tl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        i && (e.warmLanes |= t),
        i = e.expirationTimes;
        for (var r = t; 0 < r; ) {
            var c = 31 - Je(r)
              , y = 1 << c;
            i[c] = -1,
            r &= ~y
        }
        a !== 0 && ss(e, a, t)
    }
    function xo() {
        return (He & 6) === 0 ? (Gs(0),
        !1) : !0
    }
    function Bu() {
        if (Me !== null) {
            if (Ye === 0)
                var e = Me.return;
            else
                e = Me,
                Ka = Zn = null,
                eu(e),
                Rl = null,
                Vs = 0,
                e = Me;
            for (; e !== null; )
                $h(e.alternate, e),
                e = e.return;
            Me = null
        }
    }
    function Hl(e, t) {
        var a = e.timeoutHandle;
        a !== -1 && (e.timeoutHandle = -1,
        Dv(a)),
        a = e.cancelPendingCommit,
        a !== null && (e.cancelPendingCommit = null,
        a()),
        Bu(),
        Ze = e,
        Me = a = Ga(e.current, null),
        ze = t,
        Ye = 0,
        Jt = null,
        Sn = !1,
        Bl = ye(e, t),
        Mu = !1,
        Ll = ra = _u = tl = wn = ot = 0,
        Gt = Ys = null,
        Ou = !1,
        (t & 8) !== 0 && (t |= t & 32);
        var i = e.entangledLanes;
        if (i !== 0)
            for (e = e.entanglements,
            i &= t; 0 < i; ) {
                var r = 31 - Je(i)
                  , c = 1 << r;
                t |= e[r],
                i &= ~c
            }
        return tn = t,
        ki(),
        a
    }
    function bm(e, t) {
        Ee = null,
        T.H = lo,
        t === Ns || t === Qi ? (t = Bd(),
        Ye = 3) : t === Vd ? (t = Bd(),
        Ye = 4) : Ye = t === Lh ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
        Jt = t,
        Me === null && (ot = 1,
        uo(e, na(t, e.current)))
    }
    function Sm() {
        var e = T.H;
        return T.H = lo,
        e === null ? lo : e
    }
    function wm() {
        var e = T.A;
        return T.A = uv,
        e
    }
    function Lu() {
        ot = 4,
        Sn || (ze & 4194048) !== ze && oa.current !== null || (Bl = !0),
        (wn & 134217727) === 0 && (tl & 134217727) === 0 || Ze === null || Nn(Ze, ze, ra, !1)
    }
    function ku(e, t, a) {
        var i = He;
        He |= 2;
        var r = Sm()
          , c = wm();
        (Ze !== e || ze !== t) && (yo = null,
        Hl(e, t)),
        t = !1;
        var y = ot;
        e: do
            try {
                if (Ye !== 0 && Me !== null) {
                    var b = Me
                      , A = Jt;
                    switch (Ye) {
                    case 8:
                        Bu(),
                        y = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        oa.current === null && (t = !0);
                        var L = Ye;
                        if (Ye = 0,
                        Jt = null,
                        Yl(e, b, A, L),
                        a && Bl) {
                            y = 0;
                            break e
                        }
                        break;
                    default:
                        L = Ye,
                        Ye = 0,
                        Jt = null,
                        Yl(e, b, A, L)
                    }
                }
                dv(),
                y = ot;
                break
            } catch (G) {
                bm(e, G)
            }
        while (!0);
        return t && e.shellSuspendCounter++,
        Ka = Zn = null,
        He = i,
        T.H = r,
        T.A = c,
        Me === null && (Ze = null,
        ze = 0,
        ki()),
        y
    }
    function dv() {
        for (; Me !== null; )
            jm(Me)
    }
    function hv(e, t) {
        var a = He;
        He |= 2;
        var i = Sm()
          , r = wm();
        Ze !== e || ze !== t ? (yo = null,
        go = et() + 500,
        Hl(e, t)) : Bl = ye(e, t);
        e: do
            try {
                if (Ye !== 0 && Me !== null) {
                    t = Me;
                    var c = Jt;
                    t: switch (Ye) {
                    case 1:
                        Ye = 0,
                        Jt = null,
                        Yl(e, t, c, 1);
                        break;
                    case 2:
                    case 9:
                        if (Ud(c)) {
                            Ye = 0,
                            Jt = null,
                            Tm(t);
                            break
                        }
                        t = function() {
                            Ye !== 2 && Ye !== 9 || Ze !== e || (Ye = 7),
                            Ma(e)
                        }
                        ,
                        c.then(t, t);
                        break e;
                    case 3:
                        Ye = 7;
                        break e;
                    case 4:
                        Ye = 5;
                        break e;
                    case 7:
                        Ud(c) ? (Ye = 0,
                        Jt = null,
                        Tm(t)) : (Ye = 0,
                        Jt = null,
                        Yl(e, t, c, 7));
                        break;
                    case 5:
                        var y = null;
                        switch (Me.tag) {
                        case 26:
                            y = Me.memoizedState;
                        case 5:
                        case 27:
                            var b = Me;
                            if (!y || sp(y)) {
                                Ye = 0,
                                Jt = null;
                                var A = b.sibling;
                                if (A !== null)
                                    Me = A;
                                else {
                                    var L = b.return;
                                    L !== null ? (Me = L,
                                    vo(L)) : Me = null
                                }
                                break t
                            }
                        }
                        Ye = 0,
                        Jt = null,
                        Yl(e, t, c, 5);
                        break;
                    case 6:
                        Ye = 0,
                        Jt = null,
                        Yl(e, t, c, 6);
                        break;
                    case 8:
                        Bu(),
                        ot = 6;
                        break e;
                    default:
                        throw Error(o(462))
                    }
                }
                mv();
                break
            } catch (G) {
                bm(e, G)
            }
        while (!0);
        return Ka = Zn = null,
        T.H = i,
        T.A = r,
        He = a,
        Me !== null ? 0 : (Ze = null,
        ze = 0,
        ki(),
        ot)
    }
    function mv() {
        for (; Me !== null && !Ie(); )
            jm(Me)
    }
    function jm(e) {
        var t = Ih(e.alternate, e, tn);
        e.memoizedProps = e.pendingProps,
        t === null ? vo(e) : Me = t
    }
    function Tm(e) {
        var t = e
          , a = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = Gh(a, t, t.pendingProps, t.type, void 0, ze);
            break;
        case 11:
            t = Gh(a, t, t.pendingProps, t.type.render, t.ref, ze);
            break;
        case 5:
            eu(t);
        default:
            $h(a, t),
            t = Me = Nd(t, tn),
            t = Ih(a, t, tn)
        }
        e.memoizedProps = e.pendingProps,
        t === null ? vo(e) : Me = t
    }
    function Yl(e, t, a, i) {
        Ka = Zn = null,
        eu(t),
        Rl = null,
        Vs = 0;
        var r = t.return;
        try {
            if (nv(e, r, t, a, ze)) {
                ot = 1,
                uo(e, na(a, e.current)),
                Me = null;
                return
            }
        } catch (c) {
            if (r !== null)
                throw Me = r,
                c;
            ot = 1,
            uo(e, na(a, e.current)),
            Me = null;
            return
        }
        t.flags & 32768 ? (ke || i === 1 ? e = !0 : Bl || (ze & 536870912) !== 0 ? e = !1 : (Sn = e = !0,
        (i === 2 || i === 9 || i === 3 || i === 6) && (i = oa.current,
        i !== null && i.tag === 13 && (i.flags |= 16384))),
        Nm(t, e)) : vo(t)
    }
    function vo(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                Nm(t, Sn);
                return
            }
            e = t.return;
            var a = sv(t.alternate, t, tn);
            if (a !== null) {
                Me = a;
                return
            }
            if (t = t.sibling,
            t !== null) {
                Me = t;
                return
            }
            Me = t = e
        } while (t !== null);
        ot === 0 && (ot = 5)
    }
    function Nm(e, t) {
        do {
            var a = iv(e.alternate, e);
            if (a !== null) {
                a.flags &= 32767,
                Me = a;
                return
            }
            if (a = e.return,
            a !== null && (a.flags |= 32768,
            a.subtreeFlags = 0,
            a.deletions = null),
            !t && (e = e.sibling,
            e !== null)) {
                Me = e;
                return
            }
            Me = e = a
        } while (e !== null);
        ot = 6,
        Me = null
    }
    function Am(e, t, a, i, r, c, y, b, A) {
        e.cancelPendingCommit = null;
        do
            bo();
        while (Dt !== 0);
        if ((He & 6) !== 0)
            throw Error(o(327));
        if (t !== null) {
            if (t === e.current)
                throw Error(o(177));
            if (c = t.lanes | t.childLanes,
            c |= Dr,
            Pt(e, a, c, y, b, A),
            e === Ze && (Me = Ze = null,
            ze = 0),
            kl = t,
            Tn = e,
            Pl = a,
            Vu = c,
            Uu = r,
            gm = i,
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null,
            e.callbackPriority = 0,
            xv(kt, function() {
                return _m(),
                null
            })) : (e.callbackNode = null,
            e.callbackPriority = 0),
            i = (t.flags & 13878) !== 0,
            (t.subtreeFlags & 13878) !== 0 || i) {
                i = T.T,
                T.T = null,
                r = D.p,
                D.p = 2,
                y = He,
                He |= 4;
                try {
                    ov(e, t, a)
                } finally {
                    He = y,
                    D.p = r,
                    T.T = i
                }
            }
            Dt = 1,
            Em(),
            Cm(),
            Dm()
        }
    }
    function Em() {
        if (Dt === 1) {
            Dt = 0;
            var e = Tn
              , t = kl
              , a = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || a) {
                a = T.T,
                T.T = null;
                var i = D.p;
                D.p = 2;
                var r = He;
                He |= 4;
                try {
                    um(t, e);
                    var c = Ju
                      , y = pd(e.containerInfo)
                      , b = c.focusedElem
                      , A = c.selectionRange;
                    if (y !== b && b && b.ownerDocument && md(b.ownerDocument.documentElement, b)) {
                        if (A !== null && Tr(b)) {
                            var L = A.start
                              , G = A.end;
                            if (G === void 0 && (G = L),
                            "selectionStart"in b)
                                b.selectionStart = L,
                                b.selectionEnd = Math.min(G, b.value.length);
                            else {
                                var Z = b.ownerDocument || document
                                  , k = Z && Z.defaultView || window;
                                if (k.getSelection) {
                                    var H = k.getSelection()
                                      , Se = b.textContent.length
                                      , xe = Math.min(A.start, Se)
                                      , Fe = A.end === void 0 ? xe : Math.min(A.end, Se);
                                    !H.extend && xe > Fe && (y = Fe,
                                    Fe = xe,
                                    xe = y);
                                    var R = hd(b, xe)
                                      , C = hd(b, Fe);
                                    if (R && C && (H.rangeCount !== 1 || H.anchorNode !== R.node || H.anchorOffset !== R.offset || H.focusNode !== C.node || H.focusOffset !== C.offset)) {
                                        var z = Z.createRange();
                                        z.setStart(R.node, R.offset),
                                        H.removeAllRanges(),
                                        xe > Fe ? (H.addRange(z),
                                        H.extend(C.node, C.offset)) : (z.setEnd(C.node, C.offset),
                                        H.addRange(z))
                                    }
                                }
                            }
                        }
                        for (Z = [],
                        H = b; H = H.parentNode; )
                            H.nodeType === 1 && Z.push({
                                element: H,
                                left: H.scrollLeft,
                                top: H.scrollTop
                            });
                        for (typeof b.focus == "function" && b.focus(),
                        b = 0; b < Z.length; b++) {
                            var K = Z[b];
                            K.element.scrollLeft = K.left,
                            K.element.scrollTop = K.top
                        }
                    }
                    Oo = !!Iu,
                    Ju = Iu = null
                } finally {
                    He = r,
                    D.p = i,
                    T.T = a
                }
            }
            e.current = t,
            Dt = 2
        }
    }
    function Cm() {
        if (Dt === 2) {
            Dt = 0;
            var e = Tn
              , t = kl
              , a = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || a) {
                a = T.T,
                T.T = null;
                var i = D.p;
                D.p = 2;
                var r = He;
                He |= 4;
                try {
                    sm(e, t.alternate, t)
                } finally {
                    He = r,
                    D.p = i,
                    T.T = a
                }
            }
            Dt = 3
        }
    }
    function Dm() {
        if (Dt === 4 || Dt === 3) {
            Dt = 0,
            vt();
            var e = Tn
              , t = kl
              , a = Pl
              , i = gm;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Dt = 5 : (Dt = 0,
            kl = Tn = null,
            Mm(e, e.pendingLanes));
            var r = e.pendingLanes;
            if (r === 0 && (jn = null),
            fl(a),
            t = t.stateNode,
            ct && typeof ct.onCommitFiberRoot == "function")
                try {
                    ct.onCommitFiberRoot(Ft, t, void 0, (t.current.flags & 128) === 128)
                } catch {}
            if (i !== null) {
                t = T.T,
                r = D.p,
                D.p = 2,
                T.T = null;
                try {
                    for (var c = e.onRecoverableError, y = 0; y < i.length; y++) {
                        var b = i[y];
                        c(b.value, {
                            componentStack: b.stack
                        })
                    }
                } finally {
                    T.T = t,
                    D.p = r
                }
            }
            (Pl & 3) !== 0 && bo(),
            Ma(e),
            r = e.pendingLanes,
            (a & 4194090) !== 0 && (r & 42) !== 0 ? e === zu ? qs++ : (qs = 0,
            zu = e) : qs = 0,
            Gs(0)
        }
    }
    function Mm(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache,
        t != null && (e.pooledCache = null,
        js(t)))
    }
    function bo(e) {
        return Em(),
        Cm(),
        Dm(),
        _m()
    }
    function _m() {
        if (Dt !== 5)
            return !1;
        var e = Tn
          , t = Vu;
        Vu = 0;
        var a = fl(Pl)
          , i = T.T
          , r = D.p;
        try {
            D.p = 32 > a ? 32 : a,
            T.T = null,
            a = Uu,
            Uu = null;
            var c = Tn
              , y = Pl;
            if (Dt = 0,
            kl = Tn = null,
            Pl = 0,
            (He & 6) !== 0)
                throw Error(o(331));
            var b = He;
            if (He |= 4,
            mm(c.current),
            fm(c, c.current, y, a),
            He = b,
            Gs(0, !1),
            ct && typeof ct.onPostCommitFiberRoot == "function")
                try {
                    ct.onPostCommitFiberRoot(Ft, c)
                } catch {}
            return !0
        } finally {
            D.p = r,
            T.T = i,
            Mm(e, t)
        }
    }
    function Om(e, t, a) {
        t = na(a, t),
        t = mu(e.stateNode, t, 2),
        e = mn(e, t, 2),
        e !== null && (mt(e, 2),
        Ma(e))
    }
    function Ke(e, t, a) {
        if (e.tag === 3)
            Om(e, e, a);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    Om(t, e, a);
                    break
                } else if (t.tag === 1) {
                    var i = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (jn === null || !jn.has(i))) {
                        e = na(a, e),
                        a = zh(2),
                        i = mn(t, a, 2),
                        i !== null && (Bh(a, i, t, e),
                        mt(i, 2),
                        Ma(i));
                        break
                    }
                }
                t = t.return
            }
    }
    function Pu(e, t, a) {
        var i = e.pingCache;
        if (i === null) {
            i = e.pingCache = new cv;
            var r = new Set;
            i.set(t, r)
        } else
            r = i.get(t),
            r === void 0 && (r = new Set,
            i.set(t, r));
        r.has(a) || (Mu = !0,
        r.add(a),
        e = pv.bind(null, e, t, a),
        t.then(e, e))
    }
    function pv(e, t, a) {
        var i = e.pingCache;
        i !== null && i.delete(t),
        e.pingedLanes |= e.suspendedLanes & a,
        e.warmLanes &= ~a,
        Ze === e && (ze & a) === a && (ot === 4 || ot === 3 && (ze & 62914560) === ze && 300 > et() - Ru ? (He & 2) === 0 && Hl(e, 0) : _u |= a,
        Ll === ze && (Ll = 0)),
        Ma(e)
    }
    function Rm(e, t) {
        t === 0 && (t = $()),
        e = jl(e, t),
        e !== null && (mt(e, t),
        Ma(e))
    }
    function gv(e) {
        var t = e.memoizedState
          , a = 0;
        t !== null && (a = t.retryLane),
        Rm(e, a)
    }
    function yv(e, t) {
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
        Rm(e, a)
    }
    function xv(e, t) {
        return lt(e, t)
    }
    var So = null
      , ql = null
      , Hu = !1
      , wo = !1
      , Yu = !1
      , al = 0;
    function Ma(e) {
        e !== ql && e.next === null && (ql === null ? So = ql = e : ql = ql.next = e),
        wo = !0,
        Hu || (Hu = !0,
        bv())
    }
    function Gs(e, t) {
        if (!Yu && wo) {
            Yu = !0;
            do
                for (var a = !1, i = So; i !== null; ) {
                    if (e !== 0) {
                        var r = i.pendingLanes;
                        if (r === 0)
                            var c = 0;
                        else {
                            var y = i.suspendedLanes
                              , b = i.pingedLanes;
                            c = (1 << 31 - Je(42 | e) + 1) - 1,
                            c &= r & ~(y & ~b),
                            c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0
                        }
                        c !== 0 && (a = !0,
                        Bm(i, c))
                    } else
                        c = ze,
                        c = oe(i, i === Ze ? c : 0, i.cancelPendingCommit !== null || i.timeoutHandle !== -1),
                        (c & 3) === 0 || ye(i, c) || (a = !0,
                        Bm(i, c));
                    i = i.next
                }
            while (a);
            Yu = !1
        }
    }
    function vv() {
        Vm()
    }
    function Vm() {
        wo = Hu = !1;
        var e = 0;
        al !== 0 && (Cv() && (e = al),
        al = 0);
        for (var t = et(), a = null, i = So; i !== null; ) {
            var r = i.next
              , c = Um(i, t);
            c === 0 ? (i.next = null,
            a === null ? So = r : a.next = r,
            r === null && (ql = a)) : (a = i,
            (e !== 0 || (c & 3) !== 0) && (wo = !0)),
            i = r
        }
        Gs(e)
    }
    function Um(e, t) {
        for (var a = e.suspendedLanes, i = e.pingedLanes, r = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c; ) {
            var y = 31 - Je(c)
              , b = 1 << y
              , A = r[y];
            A === -1 ? ((b & a) === 0 || (b & i) !== 0) && (r[y] = Qe(b, t)) : A <= t && (e.expiredLanes |= b),
            c &= ~b
        }
        if (t = Ze,
        a = ze,
        a = oe(e, e === t ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        i = e.callbackNode,
        a === 0 || e === t && (Ye === 2 || Ye === 9) || e.cancelPendingCommit !== null)
            return i !== null && i !== null && Ne(i),
            e.callbackNode = null,
            e.callbackPriority = 0;
        if ((a & 3) === 0 || ye(e, a)) {
            if (t = a & -a,
            t === e.callbackPriority)
                return t;
            switch (i !== null && Ne(i),
            fl(a)) {
            case 2:
            case 8:
                a = Ta;
                break;
            case 32:
                a = kt;
                break;
            case 268435456:
                a = ga;
                break;
            default:
                a = kt
            }
            return i = zm.bind(null, e),
            a = lt(a, i),
            e.callbackPriority = t,
            e.callbackNode = a,
            t
        }
        return i !== null && i !== null && Ne(i),
        e.callbackPriority = 2,
        e.callbackNode = null,
        2
    }
    function zm(e, t) {
        if (Dt !== 0 && Dt !== 5)
            return e.callbackNode = null,
            e.callbackPriority = 0,
            null;
        var a = e.callbackNode;
        if (bo() && e.callbackNode !== a)
            return null;
        var i = ze;
        return i = oe(e, e === Ze ? i : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        i === 0 ? null : (xm(e, i, t),
        Um(e, et()),
        e.callbackNode != null && e.callbackNode === a ? zm.bind(null, e) : null)
    }
    function Bm(e, t) {
        if (bo())
            return null;
        xm(e, t, !0)
    }
    function bv() {
        Mv(function() {
            (He & 6) !== 0 ? lt(Va, vv) : Vm()
        })
    }
    function qu() {
        return al === 0 && (al = $e()),
        al
    }
    function Lm(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Oi("" + e)
    }
    function km(e, t) {
        var a = t.ownerDocument.createElement("input");
        return a.name = t.name,
        a.value = t.value,
        e.id && a.setAttribute("form", e.id),
        t.parentNode.insertBefore(a, t),
        e = new FormData(e),
        a.parentNode.removeChild(a),
        e
    }
    function Sv(e, t, a, i, r) {
        if (t === "submit" && a && a.stateNode === r) {
            var c = Lm((r[At] || null).action)
              , y = i.submitter;
            y && (t = (t = y[At] || null) ? Lm(t.formAction) : y.getAttribute("formAction"),
            t !== null && (c = t,
            y = null));
            var b = new zi("action","action",null,i,r);
            e.push({
                event: b,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (i.defaultPrevented) {
                            if (al !== 0) {
                                var A = y ? km(r, y) : new FormData(r);
                                uu(a, {
                                    pending: !0,
                                    data: A,
                                    method: r.method,
                                    action: c
                                }, null, A)
                            }
                        } else
                            typeof c == "function" && (b.preventDefault(),
                            A = y ? km(r, y) : new FormData(r),
                            uu(a, {
                                pending: !0,
                                data: A,
                                method: r.method,
                                action: c
                            }, c, A))
                    },
                    currentTarget: r
                }]
            })
        }
    }
    for (var Gu = 0; Gu < Cr.length; Gu++) {
        var Xu = Cr[Gu]
          , wv = Xu.toLowerCase()
          , jv = Xu[0].toUpperCase() + Xu.slice(1);
        ba(wv, "on" + jv)
    }
    ba(xd, "onAnimationEnd"),
    ba(vd, "onAnimationIteration"),
    ba(bd, "onAnimationStart"),
    ba("dblclick", "onDoubleClick"),
    ba("focusin", "onFocus"),
    ba("focusout", "onBlur"),
    ba(Px, "onTransitionRun"),
    ba(Hx, "onTransitionStart"),
    ba(Yx, "onTransitionCancel"),
    ba(Sd, "onTransitionEnd"),
    Et("onMouseEnter", ["mouseout", "mouseover"]),
    Et("onMouseLeave", ["mouseout", "mouseover"]),
    Et("onPointerEnter", ["pointerout", "pointerover"]),
    Et("onPointerLeave", ["pointerout", "pointerover"]),
    Ue("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Ue("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Ue("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ue("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Ue("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Ue("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Xs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , Tv = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xs));
    function Pm(e, t) {
        t = (t & 4) !== 0;
        for (var a = 0; a < e.length; a++) {
            var i = e[a]
              , r = i.event;
            i = i.listeners;
            e: {
                var c = void 0;
                if (t)
                    for (var y = i.length - 1; 0 <= y; y--) {
                        var b = i[y]
                          , A = b.instance
                          , L = b.currentTarget;
                        if (b = b.listener,
                        A !== c && r.isPropagationStopped())
                            break e;
                        c = b,
                        r.currentTarget = L;
                        try {
                            c(r)
                        } catch (G) {
                            ro(G)
                        }
                        r.currentTarget = null,
                        c = A
                    }
                else
                    for (y = 0; y < i.length; y++) {
                        if (b = i[y],
                        A = b.instance,
                        L = b.currentTarget,
                        b = b.listener,
                        A !== c && r.isPropagationStopped())
                            break e;
                        c = b,
                        r.currentTarget = L;
                        try {
                            c(r)
                        } catch (G) {
                            ro(G)
                        }
                        r.currentTarget = null,
                        c = A
                    }
            }
        }
    }
    function _e(e, t) {
        var a = t[dl];
        a === void 0 && (a = t[dl] = new Set);
        var i = e + "__bubble";
        a.has(i) || (Hm(t, e, 2, !1),
        a.add(i))
    }
    function Fu(e, t, a) {
        var i = 0;
        t && (i |= 4),
        Hm(a, e, i, t)
    }
    var jo = "_reactListening" + Math.random().toString(36).slice(2);
    function Ku(e) {
        if (!e[jo]) {
            e[jo] = !0,
            Pe.forEach(function(a) {
                a !== "selectionchange" && (Tv.has(a) || Fu(a, !1, e),
                Fu(a, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[jo] || (t[jo] = !0,
            Fu("selectionchange", !1, t))
        }
    }
    function Hm(e, t, a, i) {
        switch (fp(t)) {
        case 2:
            var r = Jv;
            break;
        case 8:
            r = $v;
            break;
        default:
            r = oc
        }
        a = r.bind(null, t, a, e),
        r = void 0,
        !pr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (r = !0),
        i ? r !== void 0 ? e.addEventListener(t, a, {
            capture: !0,
            passive: r
        }) : e.addEventListener(t, a, !0) : r !== void 0 ? e.addEventListener(t, a, {
            passive: r
        }) : e.addEventListener(t, a, !1)
    }
    function Qu(e, t, a, i, r) {
        var c = i;
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
                            i = c = y;
                            continue e
                        }
                        b = b.parentNode
                    }
                }
                i = i.return
            }
        Qf(function() {
            var L = c
              , G = hr(a)
              , Z = [];
            e: {
                var k = wd.get(e);
                if (k !== void 0) {
                    var H = zi
                      , Se = e;
                    switch (e) {
                    case "keypress":
                        if (Vi(a) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        H = xx;
                        break;
                    case "focusin":
                        Se = "focus",
                        H = vr;
                        break;
                    case "focusout":
                        Se = "blur",
                        H = vr;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        H = vr;
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
                        H = Jf;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        H = ix;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        H = Sx;
                        break;
                    case xd:
                    case vd:
                    case bd:
                        H = ux;
                        break;
                    case Sd:
                        H = jx;
                        break;
                    case "scroll":
                    case "scrollend":
                        H = lx;
                        break;
                    case "wheel":
                        H = Nx;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        H = fx;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        H = Wf;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        H = Ex
                    }
                    var xe = (t & 4) !== 0
                      , Fe = !xe && (e === "scroll" || e === "scrollend")
                      , R = xe ? k !== null ? k + "Capture" : null : k;
                    xe = [];
                    for (var C = L, z; C !== null; ) {
                        var K = C;
                        if (z = K.stateNode,
                        K = K.tag,
                        K !== 5 && K !== 26 && K !== 27 || z === null || R === null || (K = cs(C, R),
                        K != null && xe.push(Fs(C, K, z))),
                        Fe)
                            break;
                        C = C.return
                    }
                    0 < xe.length && (k = new H(k,Se,null,a,G),
                    Z.push({
                        event: k,
                        listeners: xe
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (k = e === "mouseover" || e === "pointerover",
                    H = e === "mouseout" || e === "pointerout",
                    k && a !== dr && (Se = a.relatedTarget || a.fromElement) && (Pa(Se) || Se[ka]))
                        break e;
                    if ((H || k) && (k = G.window === G ? G : (k = G.ownerDocument) ? k.defaultView || k.parentWindow : window,
                    H ? (Se = a.relatedTarget || a.toElement,
                    H = L,
                    Se = Se ? Pa(Se) : null,
                    Se !== null && (Fe = h(Se),
                    xe = Se.tag,
                    Se !== Fe || xe !== 5 && xe !== 27 && xe !== 6) && (Se = null)) : (H = null,
                    Se = L),
                    H !== Se)) {
                        if (xe = Jf,
                        K = "onMouseLeave",
                        R = "onMouseEnter",
                        C = "mouse",
                        (e === "pointerout" || e === "pointerover") && (xe = Wf,
                        K = "onPointerLeave",
                        R = "onPointerEnter",
                        C = "pointer"),
                        Fe = H == null ? k : un(H),
                        z = Se == null ? k : un(Se),
                        k = new xe(K,C + "leave",H,a,G),
                        k.target = Fe,
                        k.relatedTarget = z,
                        K = null,
                        Pa(G) === L && (xe = new xe(R,C + "enter",Se,a,G),
                        xe.target = z,
                        xe.relatedTarget = Fe,
                        K = xe),
                        Fe = K,
                        H && Se)
                            t: {
                                for (xe = H,
                                R = Se,
                                C = 0,
                                z = xe; z; z = Gl(z))
                                    C++;
                                for (z = 0,
                                K = R; K; K = Gl(K))
                                    z++;
                                for (; 0 < C - z; )
                                    xe = Gl(xe),
                                    C--;
                                for (; 0 < z - C; )
                                    R = Gl(R),
                                    z--;
                                for (; C--; ) {
                                    if (xe === R || R !== null && xe === R.alternate)
                                        break t;
                                    xe = Gl(xe),
                                    R = Gl(R)
                                }
                                xe = null
                            }
                        else
                            xe = null;
                        H !== null && Ym(Z, k, H, xe, !1),
                        Se !== null && Fe !== null && Ym(Z, Fe, Se, xe, !0)
                    }
                }
                e: {
                    if (k = L ? un(L) : window,
                    H = k.nodeName && k.nodeName.toLowerCase(),
                    H === "select" || H === "input" && k.type === "file")
                        var ce = od;
                    else if (sd(k))
                        if (rd)
                            ce = Bx;
                        else {
                            ce = Ux;
                            var Ce = Vx
                        }
                    else
                        H = k.nodeName,
                        !H || H.toLowerCase() !== "input" || k.type !== "checkbox" && k.type !== "radio" ? L && fr(L.elementType) && (ce = od) : ce = zx;
                    if (ce && (ce = ce(e, L))) {
                        id(Z, ce, a, G);
                        break e
                    }
                    Ce && Ce(e, k, L),
                    e === "focusout" && L && k.type === "number" && L.memoizedProps.value != null && cr(k, "number", k.value)
                }
                switch (Ce = L ? un(L) : window,
                e) {
                case "focusin":
                    (sd(Ce) || Ce.contentEditable === "true") && (bl = Ce,
                    Nr = L,
                    xs = null);
                    break;
                case "focusout":
                    xs = Nr = bl = null;
                    break;
                case "mousedown":
                    Ar = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Ar = !1,
                    gd(Z, a, G);
                    break;
                case "selectionchange":
                    if (kx)
                        break;
                case "keydown":
                case "keyup":
                    gd(Z, a, G)
                }
                var pe;
                if (Sr)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var ve = "onCompositionStart";
                            break e;
                        case "compositionend":
                            ve = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            ve = "onCompositionUpdate";
                            break e
                        }
                        ve = void 0
                    }
                else
                    vl ? nd(e, a) && (ve = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (ve = "onCompositionStart");
                ve && (ed && a.locale !== "ko" && (vl || ve !== "onCompositionStart" ? ve === "onCompositionEnd" && vl && (pe = Zf()) : (cn = G,
                gr = "value"in cn ? cn.value : cn.textContent,
                vl = !0)),
                Ce = To(L, ve),
                0 < Ce.length && (ve = new $f(ve,e,null,a,G),
                Z.push({
                    event: ve,
                    listeners: Ce
                }),
                pe ? ve.data = pe : (pe = ld(a),
                pe !== null && (ve.data = pe)))),
                (pe = Dx ? Mx(e, a) : _x(e, a)) && (ve = To(L, "onBeforeInput"),
                0 < ve.length && (Ce = new $f("onBeforeInput","beforeinput",null,a,G),
                Z.push({
                    event: Ce,
                    listeners: ve
                }),
                Ce.data = pe)),
                Sv(Z, e, L, a, G)
            }
            Pm(Z, t)
        })
    }
    function Fs(e, t, a) {
        return {
            instance: e,
            listener: t,
            currentTarget: a
        }
    }
    function To(e, t) {
        for (var a = t + "Capture", i = []; e !== null; ) {
            var r = e
              , c = r.stateNode;
            if (r = r.tag,
            r !== 5 && r !== 26 && r !== 27 || c === null || (r = cs(e, a),
            r != null && i.unshift(Fs(e, r, c)),
            r = cs(e, t),
            r != null && i.push(Fs(e, r, c))),
            e.tag === 3)
                return i;
            e = e.return
        }
        return []
    }
    function Gl(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }
    function Ym(e, t, a, i, r) {
        for (var c = t._reactName, y = []; a !== null && a !== i; ) {
            var b = a
              , A = b.alternate
              , L = b.stateNode;
            if (b = b.tag,
            A !== null && A === i)
                break;
            b !== 5 && b !== 26 && b !== 27 || L === null || (A = L,
            r ? (L = cs(a, c),
            L != null && y.unshift(Fs(a, L, A))) : r || (L = cs(a, c),
            L != null && y.push(Fs(a, L, A)))),
            a = a.return
        }
        y.length !== 0 && e.push({
            event: t,
            listeners: y
        })
    }
    var Nv = /\r\n?/g
      , Av = /\u0000|\uFFFD/g;
    function qm(e) {
        return (typeof e == "string" ? e : "" + e).replace(Nv, `
`).replace(Av, "")
    }
    function Gm(e, t) {
        return t = qm(t),
        qm(e) === t
    }
    function No() {}
    function Xe(e, t, a, i, r, c) {
        switch (a) {
        case "children":
            typeof i == "string" ? t === "body" || t === "textarea" && i === "" || gl(e, i) : (typeof i == "number" || typeof i == "bigint") && t !== "body" && gl(e, "" + i);
            break;
        case "className":
            Pn(e, "class", i);
            break;
        case "tabIndex":
            Pn(e, "tabindex", i);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            Pn(e, a, i);
            break;
        case "style":
            Ff(e, i, c);
            break;
        case "data":
            if (t !== "object") {
                Pn(e, "data", i);
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
                typeof c == "function" && (a === "formAction" ? (t !== "input" && Xe(e, t, "name", r.name, r, null),
                Xe(e, t, "formEncType", r.formEncType, r, null),
                Xe(e, t, "formMethod", r.formMethod, r, null),
                Xe(e, t, "formTarget", r.formTarget, r, null)) : (Xe(e, t, "encType", r.encType, r, null),
                Xe(e, t, "method", r.method, r, null),
                Xe(e, t, "target", r.target, r, null)));
            if (i == null || typeof i == "symbol" || typeof i == "boolean") {
                e.removeAttribute(a);
                break
            }
            i = Oi("" + i),
            e.setAttribute(a, i);
            break;
        case "onClick":
            i != null && (e.onclick = No);
            break;
        case "onScroll":
            i != null && _e("scroll", e);
            break;
        case "onScrollEnd":
            i != null && _e("scrollend", e);
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
            _e("beforetoggle", e),
            _e("toggle", e),
            kn(e, "popover", i);
            break;
        case "xlinkActuate":
            Ya(e, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
            break;
        case "xlinkArcrole":
            Ya(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
            break;
        case "xlinkRole":
            Ya(e, "http://www.w3.org/1999/xlink", "xlink:role", i);
            break;
        case "xlinkShow":
            Ya(e, "http://www.w3.org/1999/xlink", "xlink:show", i);
            break;
        case "xlinkTitle":
            Ya(e, "http://www.w3.org/1999/xlink", "xlink:title", i);
            break;
        case "xlinkType":
            Ya(e, "http://www.w3.org/1999/xlink", "xlink:type", i);
            break;
        case "xmlBase":
            Ya(e, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
            break;
        case "xmlLang":
            Ya(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
            break;
        case "xmlSpace":
            Ya(e, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
            break;
        case "is":
            kn(e, "is", i);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = ax.get(a) || a,
            kn(e, a, i))
        }
    }
    function Zu(e, t, a, i, r, c) {
        switch (a) {
        case "style":
            Ff(e, i, c);
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
            typeof i == "string" ? gl(e, i) : (typeof i == "number" || typeof i == "bigint") && gl(e, "" + i);
            break;
        case "onScroll":
            i != null && _e("scroll", e);
            break;
        case "onScrollEnd":
            i != null && _e("scrollend", e);
            break;
        case "onClick":
            i != null && (e.onclick = No);
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
            if (!Le.hasOwnProperty(a))
                e: {
                    if (a[0] === "o" && a[1] === "n" && (r = a.endsWith("Capture"),
                    t = a.slice(2, r ? a.length - 7 : void 0),
                    c = e[At] || null,
                    c = c != null ? c[a] : null,
                    typeof c == "function" && e.removeEventListener(t, c, r),
                    typeof i == "function")) {
                        typeof c != "function" && c !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)),
                        e.addEventListener(t, i, r);
                        break e
                    }
                    a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : kn(e, a, i)
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
            _e("error", e),
            _e("load", e);
            var i = !1, r = !1, c;
            for (c in a)
                if (a.hasOwnProperty(c)) {
                    var y = a[c];
                    if (y != null)
                        switch (c) {
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
                            Xe(e, t, c, y, a, null)
                        }
                }
            r && Xe(e, t, "srcSet", a.srcSet, a, null),
            i && Xe(e, t, "src", a.src, a, null);
            return;
        case "input":
            _e("invalid", e);
            var b = c = y = r = null
              , A = null
              , L = null;
            for (i in a)
                if (a.hasOwnProperty(i)) {
                    var G = a[i];
                    if (G != null)
                        switch (i) {
                        case "name":
                            r = G;
                            break;
                        case "type":
                            y = G;
                            break;
                        case "checked":
                            A = G;
                            break;
                        case "defaultChecked":
                            L = G;
                            break;
                        case "value":
                            c = G;
                            break;
                        case "defaultValue":
                            b = G;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (G != null)
                                throw Error(o(137, t));
                            break;
                        default:
                            Xe(e, t, i, G, a, null)
                        }
                }
            Yf(e, c, b, A, L, y, r, !1),
            Mi(e);
            return;
        case "select":
            _e("invalid", e),
            i = y = c = null;
            for (r in a)
                if (a.hasOwnProperty(r) && (b = a[r],
                b != null))
                    switch (r) {
                    case "value":
                        c = b;
                        break;
                    case "defaultValue":
                        y = b;
                        break;
                    case "multiple":
                        i = b;
                    default:
                        Xe(e, t, r, b, a, null)
                    }
            t = c,
            a = y,
            e.multiple = !!i,
            t != null ? pl(e, !!i, t, !1) : a != null && pl(e, !!i, a, !0);
            return;
        case "textarea":
            _e("invalid", e),
            c = r = i = null;
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
                        c = b;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (b != null)
                            throw Error(o(91));
                        break;
                    default:
                        Xe(e, t, y, b, a, null)
                    }
            Gf(e, i, r, c),
            Mi(e);
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
                        Xe(e, t, A, i, a, null)
                    }
            return;
        case "dialog":
            _e("beforetoggle", e),
            _e("toggle", e),
            _e("cancel", e),
            _e("close", e);
            break;
        case "iframe":
        case "object":
            _e("load", e);
            break;
        case "video":
        case "audio":
            for (i = 0; i < Xs.length; i++)
                _e(Xs[i], e);
            break;
        case "image":
            _e("error", e),
            _e("load", e);
            break;
        case "details":
            _e("toggle", e);
            break;
        case "embed":
        case "source":
        case "link":
            _e("error", e),
            _e("load", e);
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
            for (L in a)
                if (a.hasOwnProperty(L) && (i = a[L],
                i != null))
                    switch (L) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(o(137, t));
                    default:
                        Xe(e, t, L, i, a, null)
                    }
            return;
        default:
            if (fr(t)) {
                for (G in a)
                    a.hasOwnProperty(G) && (i = a[G],
                    i !== void 0 && Zu(e, t, G, i, a, void 0));
                return
            }
        }
        for (b in a)
            a.hasOwnProperty(b) && (i = a[b],
            i != null && Xe(e, t, b, i, a, null))
    }
    function Ev(e, t, a, i) {
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
              , c = null
              , y = null
              , b = null
              , A = null
              , L = null
              , G = null;
            for (H in a) {
                var Z = a[H];
                if (a.hasOwnProperty(H) && Z != null)
                    switch (H) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        A = Z;
                    default:
                        i.hasOwnProperty(H) || Xe(e, t, H, null, i, Z)
                    }
            }
            for (var k in i) {
                var H = i[k];
                if (Z = a[k],
                i.hasOwnProperty(k) && (H != null || Z != null))
                    switch (k) {
                    case "type":
                        c = H;
                        break;
                    case "name":
                        r = H;
                        break;
                    case "checked":
                        L = H;
                        break;
                    case "defaultChecked":
                        G = H;
                        break;
                    case "value":
                        y = H;
                        break;
                    case "defaultValue":
                        b = H;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (H != null)
                            throw Error(o(137, t));
                        break;
                    default:
                        H !== Z && Xe(e, t, k, H, i, Z)
                    }
            }
            ur(e, y, b, A, L, G, c, r);
            return;
        case "select":
            H = y = b = k = null;
            for (c in a)
                if (A = a[c],
                a.hasOwnProperty(c) && A != null)
                    switch (c) {
                    case "value":
                        break;
                    case "multiple":
                        H = A;
                    default:
                        i.hasOwnProperty(c) || Xe(e, t, c, null, i, A)
                    }
            for (r in i)
                if (c = i[r],
                A = a[r],
                i.hasOwnProperty(r) && (c != null || A != null))
                    switch (r) {
                    case "value":
                        k = c;
                        break;
                    case "defaultValue":
                        b = c;
                        break;
                    case "multiple":
                        y = c;
                    default:
                        c !== A && Xe(e, t, r, c, i, A)
                    }
            t = b,
            a = y,
            i = H,
            k != null ? pl(e, !!a, k, !1) : !!i != !!a && (t != null ? pl(e, !!a, t, !0) : pl(e, !!a, a ? [] : "", !1));
            return;
        case "textarea":
            H = k = null;
            for (b in a)
                if (r = a[b],
                a.hasOwnProperty(b) && r != null && !i.hasOwnProperty(b))
                    switch (b) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        Xe(e, t, b, null, i, r)
                    }
            for (y in i)
                if (r = i[y],
                c = a[y],
                i.hasOwnProperty(y) && (r != null || c != null))
                    switch (y) {
                    case "value":
                        k = r;
                        break;
                    case "defaultValue":
                        H = r;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (r != null)
                            throw Error(o(91));
                        break;
                    default:
                        r !== c && Xe(e, t, y, r, i, c)
                    }
            qf(e, k, H);
            return;
        case "option":
            for (var Se in a)
                if (k = a[Se],
                a.hasOwnProperty(Se) && k != null && !i.hasOwnProperty(Se))
                    switch (Se) {
                    case "selected":
                        e.selected = !1;
                        break;
                    default:
                        Xe(e, t, Se, null, i, k)
                    }
            for (A in i)
                if (k = i[A],
                H = a[A],
                i.hasOwnProperty(A) && k !== H && (k != null || H != null))
                    switch (A) {
                    case "selected":
                        e.selected = k && typeof k != "function" && typeof k != "symbol";
                        break;
                    default:
                        Xe(e, t, A, k, i, H)
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
            for (var xe in a)
                k = a[xe],
                a.hasOwnProperty(xe) && k != null && !i.hasOwnProperty(xe) && Xe(e, t, xe, null, i, k);
            for (L in i)
                if (k = i[L],
                H = a[L],
                i.hasOwnProperty(L) && k !== H && (k != null || H != null))
                    switch (L) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (k != null)
                            throw Error(o(137, t));
                        break;
                    default:
                        Xe(e, t, L, k, i, H)
                    }
            return;
        default:
            if (fr(t)) {
                for (var Fe in a)
                    k = a[Fe],
                    a.hasOwnProperty(Fe) && k !== void 0 && !i.hasOwnProperty(Fe) && Zu(e, t, Fe, void 0, i, k);
                for (G in i)
                    k = i[G],
                    H = a[G],
                    !i.hasOwnProperty(G) || k === H || k === void 0 && H === void 0 || Zu(e, t, G, k, i, H);
                return
            }
        }
        for (var R in a)
            k = a[R],
            a.hasOwnProperty(R) && k != null && !i.hasOwnProperty(R) && Xe(e, t, R, null, i, k);
        for (Z in i)
            k = i[Z],
            H = a[Z],
            !i.hasOwnProperty(Z) || k === H || k == null && H == null || Xe(e, t, Z, k, i, H)
    }
    var Iu = null
      , Ju = null;
    function Ao(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }
    function Xm(e) {
        switch (e) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function Fm(e, t) {
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
    function $u(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Wu = null;
    function Cv() {
        var e = window.event;
        return e && e.type === "popstate" ? e === Wu ? !1 : (Wu = e,
        !0) : (Wu = null,
        !1)
    }
    var Km = typeof setTimeout == "function" ? setTimeout : void 0
      , Dv = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Qm = typeof Promise == "function" ? Promise : void 0
      , Mv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Qm < "u" ? function(e) {
        return Qm.resolve(null).then(e).catch(_v)
    }
    : Km;
    function _v(e) {
        setTimeout(function() {
            throw e
        })
    }
    function An(e) {
        return e === "head"
    }
    function Zm(e, t) {
        var a = t
          , i = 0
          , r = 0;
        do {
            var c = a.nextSibling;
            if (e.removeChild(a),
            c && c.nodeType === 8)
                if (a = c.data,
                a === "/$") {
                    if (0 < i && 8 > i) {
                        a = i;
                        var y = e.ownerDocument;
                        if (a & 1 && Ks(y.documentElement),
                        a & 2 && Ks(y.body),
                        a & 4)
                            for (a = y.head,
                            Ks(a),
                            y = a.firstChild; y; ) {
                                var b = y.nextSibling
                                  , A = y.nodeName;
                                y[rn] || A === "SCRIPT" || A === "STYLE" || A === "LINK" && y.rel.toLowerCase() === "stylesheet" || a.removeChild(y),
                                y = b
                            }
                    }
                    if (r === 0) {
                        e.removeChild(c),
                        ti(t);
                        return
                    }
                    r--
                } else
                    a === "$" || a === "$?" || a === "$!" ? r++ : i = a.charCodeAt(0) - 48;
            else
                i = 0;
            a = c
        } while (a);
        ti(t)
    }
    function ec(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var a = t;
            switch (t = t.nextSibling,
            a.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                ec(a),
                hl(a);
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
    function Ov(e, t, a, i) {
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
                        if (c = e.getAttribute("rel"),
                        c === "stylesheet" && e.hasAttribute("data-precedence"))
                            break;
                        if (c !== r.rel || e.getAttribute("href") !== (r.href == null || r.href === "" ? null : r.href) || e.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin) || e.getAttribute("title") !== (r.title == null ? null : r.title))
                            break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence"))
                            break;
                        return e;
                    case "script":
                        if (c = e.getAttribute("src"),
                        (c !== (r.src == null ? null : r.src) || e.getAttribute("type") !== (r.type == null ? null : r.type) || e.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin)) && c && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                            break;
                        return e;
                    default:
                        return e
                    }
            } else if (t === "input" && e.type === "hidden") {
                var c = r.name == null ? null : "" + r.name;
                if (r.type === "hidden" && e.getAttribute("name") === c)
                    return e
            } else
                return e;
            if (e = wa(e.nextSibling),
            e === null)
                break
        }
        return null
    }
    function Rv(e, t, a) {
        if (t === "")
            return null;
        for (; e.nodeType !== 3; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = wa(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function tc(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete"
    }
    function Vv(e, t) {
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
    function wa(e) {
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
    var ac = null;
    function Im(e) {
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
    function Jm(e, t, a) {
        switch (t = Ao(a),
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
    function Ks(e) {
        for (var t = e.attributes; t.length; )
            e.removeAttributeNode(t[0]);
        hl(e)
    }
    var ua = new Map
      , $m = new Set;
    function Eo(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var an = D.d;
    D.d = {
        f: Uv,
        r: zv,
        D: Bv,
        C: Lv,
        L: kv,
        m: Pv,
        X: Yv,
        S: Hv,
        M: qv
    };
    function Uv() {
        var e = an.f()
          , t = xo();
        return e || t
    }
    function zv(e) {
        var t = Ha(e);
        t !== null && t.tag === 5 && t.type === "form" ? xh(t) : an.r(e)
    }
    var Xl = typeof document > "u" ? null : document;
    function Wm(e, t, a) {
        var i = Xl;
        if (i && typeof t == "string" && t) {
            var r = aa(t);
            r = 'link[rel="' + e + '"][href="' + r + '"]',
            typeof a == "string" && (r += '[crossorigin="' + a + '"]'),
            $m.has(r) || ($m.add(r),
            e = {
                rel: e,
                crossOrigin: a,
                href: t
            },
            i.querySelector(r) === null && (t = i.createElement("link"),
            Mt(t, "link", e),
            ge(t),
            i.head.appendChild(t)))
        }
    }
    function Bv(e) {
        an.D(e),
        Wm("dns-prefetch", e, null)
    }
    function Lv(e, t) {
        an.C(e, t),
        Wm("preconnect", e, t)
    }
    function kv(e, t, a) {
        an.L(e, t, a);
        var i = Xl;
        if (i && e && t) {
            var r = 'link[rel="preload"][as="' + aa(t) + '"]';
            t === "image" && a && a.imageSrcSet ? (r += '[imagesrcset="' + aa(a.imageSrcSet) + '"]',
            typeof a.imageSizes == "string" && (r += '[imagesizes="' + aa(a.imageSizes) + '"]')) : r += '[href="' + aa(e) + '"]';
            var c = r;
            switch (t) {
            case "style":
                c = Fl(e);
                break;
            case "script":
                c = Kl(e)
            }
            ua.has(c) || (e = x({
                rel: "preload",
                href: t === "image" && a && a.imageSrcSet ? void 0 : e,
                as: t
            }, a),
            ua.set(c, e),
            i.querySelector(r) !== null || t === "style" && i.querySelector(Qs(c)) || t === "script" && i.querySelector(Zs(c)) || (t = i.createElement("link"),
            Mt(t, "link", e),
            ge(t),
            i.head.appendChild(t)))
        }
    }
    function Pv(e, t) {
        an.m(e, t);
        var a = Xl;
        if (a && e) {
            var i = t && typeof t.as == "string" ? t.as : "script"
              , r = 'link[rel="modulepreload"][as="' + aa(i) + '"][href="' + aa(e) + '"]'
              , c = r;
            switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                c = Kl(e)
            }
            if (!ua.has(c) && (e = x({
                rel: "modulepreload",
                href: e
            }, t),
            ua.set(c, e),
            a.querySelector(r) === null)) {
                switch (i) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (a.querySelector(Zs(c)))
                        return
                }
                i = a.createElement("link"),
                Mt(i, "link", e),
                ge(i),
                a.head.appendChild(i)
            }
        }
    }
    function Hv(e, t, a) {
        an.S(e, t, a);
        var i = Xl;
        if (i && e) {
            var r = Te(i).hoistableStyles
              , c = Fl(e);
            t = t || "default";
            var y = r.get(c);
            if (!y) {
                var b = {
                    loading: 0,
                    preload: null
                };
                if (y = i.querySelector(Qs(c)))
                    b.loading = 5;
                else {
                    e = x({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, a),
                    (a = ua.get(c)) && nc(e, a);
                    var A = y = i.createElement("link");
                    ge(A),
                    Mt(A, "link", e),
                    A._p = new Promise(function(L, G) {
                        A.onload = L,
                        A.onerror = G
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
                r.set(c, y)
            }
        }
    }
    function Yv(e, t) {
        an.X(e, t);
        var a = Xl;
        if (a && e) {
            var i = Te(a).hoistableScripts
              , r = Kl(e)
              , c = i.get(r);
            c || (c = a.querySelector(Zs(r)),
            c || (e = x({
                src: e,
                async: !0
            }, t),
            (t = ua.get(r)) && lc(e, t),
            c = a.createElement("script"),
            ge(c),
            Mt(c, "link", e),
            a.head.appendChild(c)),
            c = {
                type: "script",
                instance: c,
                count: 1,
                state: null
            },
            i.set(r, c))
        }
    }
    function qv(e, t) {
        an.M(e, t);
        var a = Xl;
        if (a && e) {
            var i = Te(a).hoistableScripts
              , r = Kl(e)
              , c = i.get(r);
            c || (c = a.querySelector(Zs(r)),
            c || (e = x({
                src: e,
                async: !0,
                type: "module"
            }, t),
            (t = ua.get(r)) && lc(e, t),
            c = a.createElement("script"),
            ge(c),
            Mt(c, "link", e),
            a.head.appendChild(c)),
            c = {
                type: "script",
                instance: c,
                count: 1,
                state: null
            },
            i.set(r, c))
        }
    }
    function ep(e, t, a, i) {
        var r = (r = ae.current) ? Eo(r) : null;
        if (!r)
            throw Error(o(446));
        switch (e) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Fl(a.href),
            a = Te(r).hoistableStyles,
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
                e = Fl(a.href);
                var c = Te(r).hoistableStyles
                  , y = c.get(e);
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
                c.set(e, y),
                (c = r.querySelector(Qs(e))) && !c._p && (y.instance = c,
                y.state.loading = 5),
                ua.has(e) || (a = {
                    rel: "preload",
                    as: "style",
                    href: a.href,
                    crossOrigin: a.crossOrigin,
                    integrity: a.integrity,
                    media: a.media,
                    hrefLang: a.hrefLang,
                    referrerPolicy: a.referrerPolicy
                },
                ua.set(e, a),
                c || Gv(r, e, a, y.state))),
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
            a = Te(r).hoistableScripts,
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
    function Fl(e) {
        return 'href="' + aa(e) + '"'
    }
    function Qs(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }
    function tp(e) {
        return x({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }
    function Gv(e, t, a, i) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? i.loading = 1 : (t = e.createElement("link"),
        i.preload = t,
        t.addEventListener("load", function() {
            return i.loading |= 1
        }),
        t.addEventListener("error", function() {
            return i.loading |= 2
        }),
        Mt(t, "link", a),
        ge(t),
        e.head.appendChild(t))
    }
    function Kl(e) {
        return '[src="' + aa(e) + '"]'
    }
    function Zs(e) {
        return "script[async]" + e
    }
    function ap(e, t, a) {
        if (t.count++,
        t.instance === null)
            switch (t.type) {
            case "style":
                var i = e.querySelector('style[data-href~="' + aa(a.href) + '"]');
                if (i)
                    return t.instance = i,
                    ge(i),
                    i;
                var r = x({}, a, {
                    "data-href": a.href,
                    "data-precedence": a.precedence,
                    href: null,
                    precedence: null
                });
                return i = (e.ownerDocument || e).createElement("style"),
                ge(i),
                Mt(i, "style", r),
                Co(i, a.precedence, e),
                t.instance = i;
            case "stylesheet":
                r = Fl(a.href);
                var c = e.querySelector(Qs(r));
                if (c)
                    return t.state.loading |= 4,
                    t.instance = c,
                    ge(c),
                    c;
                i = tp(a),
                (r = ua.get(r)) && nc(i, r),
                c = (e.ownerDocument || e).createElement("link"),
                ge(c);
                var y = c;
                return y._p = new Promise(function(b, A) {
                    y.onload = b,
                    y.onerror = A
                }
                ),
                Mt(c, "link", i),
                t.state.loading |= 4,
                Co(c, a.precedence, e),
                t.instance = c;
            case "script":
                return c = Kl(a.src),
                (r = e.querySelector(Zs(c))) ? (t.instance = r,
                ge(r),
                r) : (i = a,
                (r = ua.get(c)) && (i = x({}, a),
                lc(i, r)),
                e = e.ownerDocument || e,
                r = e.createElement("script"),
                ge(r),
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
        for (var i = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), r = i.length ? i[i.length - 1] : null, c = r, y = 0; y < i.length; y++) {
            var b = i[y];
            if (b.dataset.precedence === t)
                c = b;
            else if (c !== r)
                break
        }
        c ? c.parentNode.insertBefore(e, c.nextSibling) : (t = a.nodeType === 9 ? a.head : a,
        t.insertBefore(e, t.firstChild))
    }
    function nc(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.title == null && (e.title = t.title)
    }
    function lc(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.integrity == null && (e.integrity = t.integrity)
    }
    var Do = null;
    function np(e, t, a) {
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
            var c = a[r];
            if (!(c[rn] || c[bt] || e === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
                var y = c.getAttribute(t) || "";
                y = e + y;
                var b = i.get(y);
                b ? b.push(c) : i.set(y, [c])
            }
        }
        return i
    }
    function lp(e, t, a) {
        e = e.ownerDocument || e,
        e.head.insertBefore(a, t === "title" ? e.querySelector("head > title") : null)
    }
    function Xv(e, t, a) {
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
    function sp(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    var Is = null;
    function Fv() {}
    function Kv(e, t, a) {
        if (Is === null)
            throw Error(o(475));
        var i = Is;
        if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
            if (t.instance === null) {
                var r = Fl(a.href)
                  , c = e.querySelector(Qs(r));
                if (c) {
                    e = c._p,
                    e !== null && typeof e == "object" && typeof e.then == "function" && (i.count++,
                    i = Mo.bind(i),
                    e.then(i, i)),
                    t.state.loading |= 4,
                    t.instance = c,
                    ge(c);
                    return
                }
                c = e.ownerDocument || e,
                a = tp(a),
                (r = ua.get(r)) && nc(a, r),
                c = c.createElement("link"),
                ge(c);
                var y = c;
                y._p = new Promise(function(b, A) {
                    y.onload = b,
                    y.onerror = A
                }
                ),
                Mt(c, "link", a),
                t.instance = c
            }
            i.stylesheets === null && (i.stylesheets = new Map),
            i.stylesheets.set(t, e),
            (e = t.state.preload) && (t.state.loading & 3) === 0 && (i.count++,
            t = Mo.bind(i),
            e.addEventListener("load", t),
            e.addEventListener("error", t))
        }
    }
    function Qv() {
        if (Is === null)
            throw Error(o(475));
        var e = Is;
        return e.stylesheets && e.count === 0 && sc(e, e.stylesheets),
        0 < e.count ? function(t) {
            var a = setTimeout(function() {
                if (e.stylesheets && sc(e, e.stylesheets),
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
    function Mo() {
        if (this.count--,
        this.count === 0) {
            if (this.stylesheets)
                sc(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null,
                e()
            }
        }
    }
    var _o = null;
    function sc(e, t) {
        e.stylesheets = null,
        e.unsuspend !== null && (e.count++,
        _o = new Map,
        t.forEach(Zv, e),
        _o = null,
        Mo.call(e))
    }
    function Zv(e, t) {
        if (!(t.state.loading & 4)) {
            var a = _o.get(e);
            if (a)
                var i = a.get(null);
            else {
                a = new Map,
                _o.set(e, a);
                for (var r = e.querySelectorAll("link[data-precedence],style[data-precedence]"), c = 0; c < r.length; c++) {
                    var y = r[c];
                    (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (a.set(y.dataset.precedence, y),
                    i = y)
                }
                i && a.set(null, i)
            }
            r = t.instance,
            y = r.getAttribute("data-precedence"),
            c = a.get(y) || i,
            c === i && a.set(null, r),
            a.set(y, r),
            this.count++,
            i = Mo.bind(this),
            r.addEventListener("load", i),
            r.addEventListener("error", i),
            c ? c.parentNode.insertBefore(r, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
            e.insertBefore(r, e.firstChild)),
            t.state.loading |= 4
        }
    }
    var Js = {
        $$typeof: B,
        Provider: null,
        Consumer: null,
        _currentValue: Y,
        _currentValue2: Y,
        _threadCount: 0
    };
    function Iv(e, t, a, i, r, c, y, b) {
        this.tag = 1,
        this.containerInfo = e,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = je(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = je(0),
        this.hiddenUpdates = je(null),
        this.identifierPrefix = i,
        this.onUncaughtError = r,
        this.onCaughtError = c,
        this.onRecoverableError = y,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = b,
        this.incompleteTransitions = new Map
    }
    function ip(e, t, a, i, r, c, y, b, A, L, G, Z) {
        return e = new Iv(e,t,a,y,b,A,L,Z),
        t = 1,
        c === !0 && (t |= 24),
        c = Qt(3, null, null, t),
        e.current = c,
        c.stateNode = e,
        t = Pr(),
        t.refCount++,
        e.pooledCache = t,
        t.refCount++,
        c.memoizedState = {
            element: i,
            isDehydrated: a,
            cache: t
        },
        Gr(c),
        e
    }
    function op(e) {
        return e ? (e = Tl,
        e) : Tl
    }
    function rp(e, t, a, i, r, c) {
        r = op(r),
        i.context === null ? i.context = r : i.pendingContext = r,
        i = hn(t),
        i.payload = {
            element: a
        },
        c = c === void 0 ? null : c,
        c !== null && (i.callback = c),
        a = mn(e, i, t),
        a !== null && (Wt(a, e, t),
        Es(a, e, t))
    }
    function up(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var a = e.retryLane;
            e.retryLane = a !== 0 && a < t ? a : t
        }
    }
    function ic(e, t) {
        up(e, t),
        (e = e.alternate) && up(e, t)
    }
    function cp(e) {
        if (e.tag === 13) {
            var t = jl(e, 67108864);
            t !== null && Wt(t, e, 67108864),
            ic(e, 67108864)
        }
    }
    var Oo = !0;
    function Jv(e, t, a, i) {
        var r = T.T;
        T.T = null;
        var c = D.p;
        try {
            D.p = 2,
            oc(e, t, a, i)
        } finally {
            D.p = c,
            T.T = r
        }
    }
    function $v(e, t, a, i) {
        var r = T.T;
        T.T = null;
        var c = D.p;
        try {
            D.p = 8,
            oc(e, t, a, i)
        } finally {
            D.p = c,
            T.T = r
        }
    }
    function oc(e, t, a, i) {
        if (Oo) {
            var r = rc(i);
            if (r === null)
                Qu(e, t, i, Ro, a),
                dp(e, i);
            else if (eb(r, e, t, a, i))
                i.stopPropagation();
            else if (dp(e, i),
            t & 4 && -1 < Wv.indexOf(e)) {
                for (; r !== null; ) {
                    var c = Ha(r);
                    if (c !== null)
                        switch (c.tag) {
                        case 3:
                            if (c = c.stateNode,
                            c.current.memoizedState.isDehydrated) {
                                var y = Rt(c.pendingLanes);
                                if (y !== 0) {
                                    var b = c;
                                    for (b.pendingLanes |= 2,
                                    b.entangledLanes |= 2; y; ) {
                                        var A = 1 << 31 - Je(y);
                                        b.entanglements[1] |= A,
                                        y &= ~A
                                    }
                                    Ma(c),
                                    (He & 6) === 0 && (go = et() + 500,
                                    Gs(0))
                                }
                            }
                            break;
                        case 13:
                            b = jl(c, 2),
                            b !== null && Wt(b, c, 2),
                            xo(),
                            ic(c, 2)
                        }
                    if (c = rc(i),
                    c === null && Qu(e, t, i, Ro, a),
                    c === r)
                        break;
                    r = c
                }
                r !== null && i.stopPropagation()
            } else
                Qu(e, t, i, null, a)
        }
    }
    function rc(e) {
        return e = hr(e),
        uc(e)
    }
    var Ro = null;
    function uc(e) {
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
    function fp(e) {
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
            switch (sn()) {
            case Va:
                return 2;
            case Ta:
                return 8;
            case kt:
            case Ua:
                return 32;
            case ga:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var cc = !1
      , En = null
      , Cn = null
      , Dn = null
      , $s = new Map
      , Ws = new Map
      , Mn = []
      , Wv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function dp(e, t) {
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
    function ei(e, t, a, i, r, c) {
        return e === null || e.nativeEvent !== c ? (e = {
            blockedOn: t,
            domEventName: a,
            eventSystemFlags: i,
            nativeEvent: c,
            targetContainers: [r]
        },
        t !== null && (t = Ha(t),
        t !== null && cp(t)),
        e) : (e.eventSystemFlags |= i,
        t = e.targetContainers,
        r !== null && t.indexOf(r) === -1 && t.push(r),
        e)
    }
    function eb(e, t, a, i, r) {
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
            var c = r.pointerId;
            return $s.set(c, ei($s.get(c) || null, e, t, a, i, r)),
            !0;
        case "gotpointercapture":
            return c = r.pointerId,
            Ws.set(c, ei(Ws.get(c) || null, e, t, a, i, r)),
            !0
        }
        return !1
    }
    function hp(e) {
        var t = Pa(e.target);
        if (t !== null) {
            var a = h(t);
            if (a !== null) {
                if (t = a.tag,
                t === 13) {
                    if (t = d(a),
                    t !== null) {
                        e.blockedOn = t,
                        Ai(e.priority, function() {
                            if (a.tag === 13) {
                                var i = $t();
                                i = cl(i);
                                var r = jl(a, i);
                                r !== null && Wt(r, a, i),
                                ic(a, i)
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
            var a = rc(e.nativeEvent);
            if (a === null) {
                a = e.nativeEvent;
                var i = new a.constructor(a.type,a);
                dr = i,
                a.target.dispatchEvent(i),
                dr = null
            } else
                return t = Ha(a),
                t !== null && cp(t),
                e.blockedOn = a,
                !1;
            t.shift()
        }
        return !0
    }
    function mp(e, t, a) {
        Vo(e) && a.delete(t)
    }
    function tb() {
        cc = !1,
        En !== null && Vo(En) && (En = null),
        Cn !== null && Vo(Cn) && (Cn = null),
        Dn !== null && Vo(Dn) && (Dn = null),
        $s.forEach(mp),
        Ws.forEach(mp)
    }
    function Uo(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        cc || (cc = !0,
        n.unstable_scheduleCallback(n.unstable_NormalPriority, tb)))
    }
    var zo = null;
    function pp(e) {
        zo !== e && (zo = e,
        n.unstable_scheduleCallback(n.unstable_NormalPriority, function() {
            zo === e && (zo = null);
            for (var t = 0; t < e.length; t += 3) {
                var a = e[t]
                  , i = e[t + 1]
                  , r = e[t + 2];
                if (typeof i != "function") {
                    if (uc(i || a) === null)
                        continue;
                    break
                }
                var c = Ha(a);
                c !== null && (e.splice(t, 3),
                t -= 3,
                uu(c, {
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
            return Uo(A, e)
        }
        En !== null && Uo(En, e),
        Cn !== null && Uo(Cn, e),
        Dn !== null && Uo(Dn, e),
        $s.forEach(t),
        Ws.forEach(t);
        for (var a = 0; a < Mn.length; a++) {
            var i = Mn[a];
            i.blockedOn === e && (i.blockedOn = null)
        }
        for (; 0 < Mn.length && (a = Mn[0],
        a.blockedOn === null); )
            hp(a),
            a.blockedOn === null && Mn.shift();
        if (a = (e.ownerDocument || e).$$reactFormReplay,
        a != null)
            for (i = 0; i < a.length; i += 3) {
                var r = a[i]
                  , c = a[i + 1]
                  , y = r[At] || null;
                if (typeof c == "function")
                    y || pp(a);
                else if (y) {
                    var b = null;
                    if (c && c.hasAttribute("formAction")) {
                        if (r = c,
                        y = c[At] || null)
                            b = y.formAction;
                        else if (uc(r) !== null)
                            continue
                    } else
                        b = y.action;
                    typeof b == "function" ? a[i + 1] = b : (a.splice(i, 3),
                    i -= 3),
                    pp(a)
                }
            }
    }
    function fc(e) {
        this._internalRoot = e
    }
    Bo.prototype.render = fc.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(o(409));
        var a = t.current
          , i = $t();
        rp(a, i, e, t, null, null)
    }
    ,
    Bo.prototype.unmount = fc.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            rp(e.current, 2, null, e, null, null),
            xo(),
            t[ka] = null
        }
    }
    ;
    function Bo(e) {
        this._internalRoot = e
    }
    Bo.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = os();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var a = 0; a < Mn.length && t !== 0 && t < Mn[a].priority; a++)
                ;
            Mn.splice(a, 0, e),
            a === 0 && hp(e)
        }
    }
    ;
    var gp = l.version;
    if (gp !== "19.1.0")
        throw Error(o(527, gp, "19.1.0"));
    D.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","),
            Error(o(268, e)));
        return e = p(t),
        e = e !== null ? g(e) : null,
        e = e === null ? null : e.stateNode,
        e
    }
    ;
    var ab = {
        bundleType: 0,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: T,
        reconcilerVersion: "19.1.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Lo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Lo.isDisabled && Lo.supportsFiber)
            try {
                Ft = Lo.inject(ab),
                ct = Lo
            } catch {}
    }
    return ni.createRoot = function(e, t) {
        if (!u(e))
            throw Error(o(299));
        var a = !1
          , i = ""
          , r = Oh
          , c = Rh
          , y = Vh
          , b = null;
        return t != null && (t.unstable_strictMode === !0 && (a = !0),
        t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (r = t.onUncaughtError),
        t.onCaughtError !== void 0 && (c = t.onCaughtError),
        t.onRecoverableError !== void 0 && (y = t.onRecoverableError),
        t.unstable_transitionCallbacks !== void 0 && (b = t.unstable_transitionCallbacks)),
        t = ip(e, 1, !1, null, null, a, i, r, c, y, b, null),
        e[ka] = t.current,
        Ku(e),
        new fc(t)
    }
    ,
    ni.hydrateRoot = function(e, t, a) {
        if (!u(e))
            throw Error(o(299));
        var i = !1
          , r = ""
          , c = Oh
          , y = Rh
          , b = Vh
          , A = null
          , L = null;
        return a != null && (a.unstable_strictMode === !0 && (i = !0),
        a.identifierPrefix !== void 0 && (r = a.identifierPrefix),
        a.onUncaughtError !== void 0 && (c = a.onUncaughtError),
        a.onCaughtError !== void 0 && (y = a.onCaughtError),
        a.onRecoverableError !== void 0 && (b = a.onRecoverableError),
        a.unstable_transitionCallbacks !== void 0 && (A = a.unstable_transitionCallbacks),
        a.formState !== void 0 && (L = a.formState)),
        t = ip(e, 1, !0, t, a ?? null, i, r, c, y, b, A, L),
        t.context = op(null),
        a = t.current,
        i = $t(),
        i = cl(i),
        r = hn(i),
        r.callback = null,
        mn(a, r, i),
        a = i,
        t.current.lanes = a,
        mt(t, a),
        Ma(t),
        e[ka] = t.current,
        Ku(e),
        new Bo(t)
    }
    ,
    ni.version = "19.1.0",
    ni
}
var Ap;
function mb() {
    if (Ap)
        return mc.exports;
    Ap = 1;
    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (l) {
                console.error(l)
            }
    }
    return n(),
    mc.exports = hb(),
    mc.exports
}
var pb = mb();
const ef = j.createContext({});
function tf(n) {
    const l = j.useRef(null);
    return l.current === null && (l.current = n()),
    l.current
}
const af = typeof window < "u"
  , Wg = af ? j.useLayoutEffect : j.useEffect
  , Wo = j.createContext(null);
function nf(n, l) {
    n.indexOf(l) === -1 && n.push(l)
}
function lf(n, l) {
    const s = n.indexOf(l);
    s > -1 && n.splice(s, 1)
}
const nn = (n, l, s) => s > l ? l : s < n ? n : s;
let sf = () => {}
;
const ln = {}
  , ey = n => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);
function ty(n) {
    return typeof n == "object" && n !== null
}
const ay = n => /^0[^.\s]+$/u.test(n);
function of(n) {
    let l;
    return () => (l === void 0 && (l = n()),
    l)
}
const ma = n => n
  , gb = (n, l) => s => l(n(s))
  , bi = (...n) => n.reduce(gb)
  , fi = (n, l, s) => {
    const o = l - n;
    return o === 0 ? 1 : (s - n) / o
}
;
class rf {
    constructor() {
        this.subscriptions = []
    }
    add(l) {
        return nf(this.subscriptions, l),
        () => lf(this.subscriptions, l)
    }
    notify(l, s, o) {
        const u = this.subscriptions.length;
        if (u)
            if (u === 1)
                this.subscriptions[0](l, s, o);
            else
                for (let h = 0; h < u; h++) {
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
const _a = n => n * 1e3
  , Oa = n => n / 1e3;
function ny(n, l) {
    return l ? n * (1e3 / l) : 0
}
const ly = (n, l, s) => (((1 - 3 * s + 3 * l) * n + (3 * s - 6 * l)) * n + 3 * l) * n
  , yb = 1e-7
  , xb = 12;
function vb(n, l, s, o, u) {
    let h, d, m = 0;
    do
        d = l + (s - l) / 2,
        h = ly(d, o, u) - n,
        h > 0 ? s = d : l = d;
    while (Math.abs(h) > yb && ++m < xb);
    return d
}
function Si(n, l, s, o) {
    if (n === l && s === o)
        return ma;
    const u = h => vb(h, 0, 1, n, s);
    return h => h === 0 || h === 1 ? h : ly(u(h), l, o)
}
const sy = n => l => l <= .5 ? n(2 * l) / 2 : (2 - n(2 * (1 - l))) / 2
  , iy = n => l => 1 - n(1 - l)
  , oy = Si(.33, 1.53, .69, .99)
  , uf = iy(oy)
  , ry = sy(uf)
  , uy = n => (n *= 2) < 1 ? .5 * uf(n) : .5 * (2 - Math.pow(2, -10 * (n - 1)))
  , cf = n => 1 - Math.sin(Math.acos(n))
  , cy = iy(cf)
  , fy = sy(cf)
  , bb = Si(.42, 0, 1, 1)
  , Sb = Si(0, 0, .58, 1)
  , dy = Si(.42, 0, .58, 1)
  , wb = n => Array.isArray(n) && typeof n[0] != "number"
  , hy = n => Array.isArray(n) && typeof n[0] == "number"
  , jb = {
    linear: ma,
    easeIn: bb,
    easeInOut: dy,
    easeOut: Sb,
    circIn: cf,
    circInOut: fy,
    circOut: cy,
    backIn: uf,
    backInOut: ry,
    backOut: oy,
    anticipate: uy
}
  , Tb = n => typeof n == "string"
  , Ep = n => {
    if (hy(n)) {
        sf(n.length === 4);
        const [l,s,o,u] = n;
        return Si(l, s, o, u)
    } else if (Tb(n))
        return jb[n];
    return n
}
  , ko = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"]
  , Cp = {
    value: null
};
function Nb(n, l) {
    let s = new Set
      , o = new Set
      , u = !1
      , h = !1;
    const d = new WeakSet;
    let m = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , p = 0;
    function g(v) {
        d.has(v) && (x.schedule(v),
        n()),
        p++,
        v(m)
    }
    const x = {
        schedule: (v, w=!1, N=!1) => {
            const _ = N && u ? s : o;
            return w && d.add(v),
            _.has(v) || _.add(v),
            v
        }
        ,
        cancel: v => {
            o.delete(v),
            d.delete(v)
        }
        ,
        process: v => {
            if (m = v,
            u) {
                h = !0;
                return
            }
            u = !0,
            [s,o] = [o, s],
            s.forEach(g),
            l && Cp.value && Cp.value.frameloop[l].push(p),
            p = 0,
            s.clear(),
            u = !1,
            h && (h = !1,
            x.process(v))
        }
    };
    return x
}
const Ab = 40;
function my(n, l) {
    let s = !1
      , o = !0;
    const u = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , h = () => s = !0
      , d = ko.reduce( (B, X) => (B[X] = Nb(h, l ? X : void 0),
    B), {})
      , {setup: m, read: p, resolveKeyframes: g, preUpdate: x, update: v, preRender: w, render: N, postRender: E} = d
      , _ = () => {
        const B = ln.useManualTiming ? u.timestamp : performance.now();
        s = !1,
        ln.useManualTiming || (u.delta = o ? 1e3 / 60 : Math.max(Math.min(B - u.timestamp, Ab), 1)),
        u.timestamp = B,
        u.isProcessing = !0,
        m.process(u),
        p.process(u),
        g.process(u),
        x.process(u),
        v.process(u),
        w.process(u),
        N.process(u),
        E.process(u),
        u.isProcessing = !1,
        s && l && (o = !1,
        n(_))
    }
      , M = () => {
        s = !0,
        o = !0,
        u.isProcessing || n(_)
    }
    ;
    return {
        schedule: ko.reduce( (B, X) => {
            const O = d[X];
            return B[X] = (q, I=!1, Q=!1) => (s || M(),
            O.schedule(q, I, Q)),
            B
        }
        , {}),
        cancel: B => {
            for (let X = 0; X < ko.length; X++)
                d[ko[X]].cancel(B)
        }
        ,
        state: u,
        steps: d
    }
}
const {schedule: nt, cancel: Un, state: _t, steps: xc} = my(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ma, !0);
let qo;
function Eb() {
    qo = void 0
}
const Xt = {
    now: () => (qo === void 0 && Xt.set(_t.isProcessing || ln.useManualTiming ? _t.timestamp : performance.now()),
    qo),
    set: n => {
        qo = n,
        queueMicrotask(Eb)
    }
}
  , py = n => l => typeof l == "string" && l.startsWith(n)
  , ff = py("--")
  , Cb = py("var(--")
  , df = n => Cb(n) ? Db.test(n.split("/*")[0].trim()) : !1
  , Db = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , ts = {
    test: n => typeof n == "number",
    parse: parseFloat,
    transform: n => n
}
  , di = {
    ...ts,
    transform: n => nn(0, 1, n)
}
  , Po = {
    ...ts,
    default: 1
}
  , ii = n => Math.round(n * 1e5) / 1e5
  , hf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Mb(n) {
    return n == null
}
const _b = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , mf = (n, l) => s => !!(typeof s == "string" && _b.test(s) && s.startsWith(n) || l && !Mb(s) && Object.prototype.hasOwnProperty.call(s, l))
  , gy = (n, l, s) => o => {
    if (typeof o != "string")
        return o;
    const [u,h,d,m] = o.match(hf);
    return {
        [n]: parseFloat(u),
        [l]: parseFloat(h),
        [s]: parseFloat(d),
        alpha: m !== void 0 ? parseFloat(m) : 1
    }
}
  , Ob = n => nn(0, 255, n)
  , vc = {
    ...ts,
    transform: n => Math.round(Ob(n))
}
  , sl = {
    test: mf("rgb", "red"),
    parse: gy("red", "green", "blue"),
    transform: ({red: n, green: l, blue: s, alpha: o=1}) => "rgba(" + vc.transform(n) + ", " + vc.transform(l) + ", " + vc.transform(s) + ", " + ii(di.transform(o)) + ")"
};
function Rb(n) {
    let l = ""
      , s = ""
      , o = ""
      , u = "";
    return n.length > 5 ? (l = n.substring(1, 3),
    s = n.substring(3, 5),
    o = n.substring(5, 7),
    u = n.substring(7, 9)) : (l = n.substring(1, 2),
    s = n.substring(2, 3),
    o = n.substring(3, 4),
    u = n.substring(4, 5),
    l += l,
    s += s,
    o += o,
    u += u),
    {
        red: parseInt(l, 16),
        green: parseInt(s, 16),
        blue: parseInt(o, 16),
        alpha: u ? parseInt(u, 16) / 255 : 1
    }
}
const Oc = {
    test: mf("#"),
    parse: Rb,
    transform: sl.transform
}
  , wi = n => ({
    test: l => typeof l == "string" && l.endsWith(n) && l.split(" ").length === 1,
    parse: parseFloat,
    transform: l => `${l}${n}`
})
  , On = wi("deg")
  , Ra = wi("%")
  , we = wi("px")
  , Vb = wi("vh")
  , Ub = wi("vw")
  , Dp = {
    ...Ra,
    parse: n => Ra.parse(n) / 100,
    transform: n => Ra.transform(n * 100)
}
  , Ql = {
    test: mf("hsl", "hue"),
    parse: gy("hue", "saturation", "lightness"),
    transform: ({hue: n, saturation: l, lightness: s, alpha: o=1}) => "hsla(" + Math.round(n) + ", " + Ra.transform(ii(l)) + ", " + Ra.transform(ii(s)) + ", " + ii(di.transform(o)) + ")"
}
  , yt = {
    test: n => sl.test(n) || Oc.test(n) || Ql.test(n),
    parse: n => sl.test(n) ? sl.parse(n) : Ql.test(n) ? Ql.parse(n) : Oc.parse(n),
    transform: n => typeof n == "string" ? n : n.hasOwnProperty("red") ? sl.transform(n) : Ql.transform(n),
    getAnimatableNone: n => {
        const l = yt.parse(n);
        return l.alpha = 0,
        yt.transform(l)
    }
}
  , zb = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Bb(n) {
    var l, s;
    return isNaN(n) && typeof n == "string" && (((l = n.match(hf)) == null ? void 0 : l.length) || 0) + (((s = n.match(zb)) == null ? void 0 : s.length) || 0) > 0
}
const yy = "number"
  , xy = "color"
  , Lb = "var"
  , kb = "var("
  , Mp = "${}"
  , Pb = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function hi(n) {
    const l = n.toString()
      , s = []
      , o = {
        color: [],
        number: [],
        var: []
    }
      , u = [];
    let h = 0;
    const m = l.replace(Pb, p => (yt.test(p) ? (o.color.push(h),
    u.push(xy),
    s.push(yt.parse(p))) : p.startsWith(kb) ? (o.var.push(h),
    u.push(Lb),
    s.push(p)) : (o.number.push(h),
    u.push(yy),
    s.push(parseFloat(p))),
    ++h,
    Mp)).split(Mp);
    return {
        values: s,
        split: m,
        indexes: o,
        types: u
    }
}
function vy(n) {
    return hi(n).values
}
function by(n) {
    const {split: l, types: s} = hi(n)
      , o = l.length;
    return u => {
        let h = "";
        for (let d = 0; d < o; d++)
            if (h += l[d],
            u[d] !== void 0) {
                const m = s[d];
                m === yy ? h += ii(u[d]) : m === xy ? h += yt.transform(u[d]) : h += u[d]
            }
        return h
    }
}
const Hb = n => typeof n == "number" ? 0 : yt.test(n) ? yt.getAnimatableNone(n) : n;
function Yb(n) {
    const l = vy(n);
    return by(n)(l.map(Hb))
}
const zn = {
    test: Bb,
    parse: vy,
    createTransformer: by,
    getAnimatableNone: Yb
};
function bc(n, l, s) {
    return s < 0 && (s += 1),
    s > 1 && (s -= 1),
    s < 1 / 6 ? n + (l - n) * 6 * s : s < 1 / 2 ? l : s < 2 / 3 ? n + (l - n) * (2 / 3 - s) * 6 : n
}
function qb({hue: n, saturation: l, lightness: s, alpha: o}) {
    n /= 360,
    l /= 100,
    s /= 100;
    let u = 0
      , h = 0
      , d = 0;
    if (!l)
        u = h = d = s;
    else {
        const m = s < .5 ? s * (1 + l) : s + l - s * l
          , p = 2 * s - m;
        u = bc(p, m, n + 1 / 3),
        h = bc(p, m, n),
        d = bc(p, m, n - 1 / 3)
    }
    return {
        red: Math.round(u * 255),
        green: Math.round(h * 255),
        blue: Math.round(d * 255),
        alpha: o
    }
}
function Ko(n, l) {
    return s => s > 0 ? l : n
}
const at = (n, l, s) => n + (l - n) * s
  , Sc = (n, l, s) => {
    const o = n * n
      , u = s * (l * l - o) + o;
    return u < 0 ? 0 : Math.sqrt(u)
}
  , Gb = [Oc, sl, Ql]
  , Xb = n => Gb.find(l => l.test(n));
function _p(n) {
    const l = Xb(n);
    if (!l)
        return !1;
    let s = l.parse(n);
    return l === Ql && (s = qb(s)),
    s
}
const Op = (n, l) => {
    const s = _p(n)
      , o = _p(l);
    if (!s || !o)
        return Ko(n, l);
    const u = {
        ...s
    };
    return h => (u.red = Sc(s.red, o.red, h),
    u.green = Sc(s.green, o.green, h),
    u.blue = Sc(s.blue, o.blue, h),
    u.alpha = at(s.alpha, o.alpha, h),
    sl.transform(u))
}
  , Rc = new Set(["none", "hidden"]);
function Fb(n, l) {
    return Rc.has(n) ? s => s <= 0 ? n : l : s => s >= 1 ? l : n
}
function Kb(n, l) {
    return s => at(n, l, s)
}
function pf(n) {
    return typeof n == "number" ? Kb : typeof n == "string" ? df(n) ? Ko : yt.test(n) ? Op : Ib : Array.isArray(n) ? Sy : typeof n == "object" ? yt.test(n) ? Op : Qb : Ko
}
function Sy(n, l) {
    const s = [...n]
      , o = s.length
      , u = n.map( (h, d) => pf(h)(h, l[d]));
    return h => {
        for (let d = 0; d < o; d++)
            s[d] = u[d](h);
        return s
    }
}
function Qb(n, l) {
    const s = {
        ...n,
        ...l
    }
      , o = {};
    for (const u in s)
        n[u] !== void 0 && l[u] !== void 0 && (o[u] = pf(n[u])(n[u], l[u]));
    return u => {
        for (const h in o)
            s[h] = o[h](u);
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
    for (let u = 0; u < l.values.length; u++) {
        const h = l.types[u]
          , d = n.indexes[h][o[h]]
          , m = n.values[d] ?? 0;
        s[u] = m,
        o[h]++
    }
    return s
}
const Ib = (n, l) => {
    const s = zn.createTransformer(l)
      , o = hi(n)
      , u = hi(l);
    return o.indexes.var.length === u.indexes.var.length && o.indexes.color.length === u.indexes.color.length && o.indexes.number.length >= u.indexes.number.length ? Rc.has(n) && !u.values.length || Rc.has(l) && !o.values.length ? Fb(n, l) : bi(Sy(Zb(o, u), u.values), s) : Ko(n, l)
}
;
function wy(n, l, s) {
    return typeof n == "number" && typeof l == "number" && typeof s == "number" ? at(n, l, s) : pf(n)(n, l)
}
const Jb = n => {
    const l = ({timestamp: s}) => n(s);
    return {
        start: (s=!0) => nt.update(l, s),
        stop: () => Un(l),
        now: () => _t.isProcessing ? _t.timestamp : Xt.now()
    }
}
  , jy = (n, l, s=10) => {
    let o = "";
    const u = Math.max(Math.round(l / s), 2);
    for (let h = 0; h < u; h++)
        o += Math.round(n(h / (u - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${o.substring(0, o.length - 2)})`
}
  , Qo = 2e4;
function gf(n) {
    let l = 0;
    const s = 50;
    let o = n.next(l);
    for (; !o.done && l < Qo; )
        l += s,
        o = n.next(l);
    return l >= Qo ? 1 / 0 : l
}
function $b(n, l=100, s) {
    const o = s({
        ...n,
        keyframes: [0, l]
    })
      , u = Math.min(gf(o), Qo);
    return {
        type: "keyframes",
        ease: h => o.next(u * h).value / l,
        duration: Oa(u)
    }
}
const Wb = 5;
function Ty(n, l, s) {
    const o = Math.max(l - Wb, 0);
    return ny(s - n(o), l - o)
}
const rt = {
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
  , wc = .001;
function e1({duration: n=rt.duration, bounce: l=rt.bounce, velocity: s=rt.velocity, mass: o=rt.mass}) {
    let u, h, d = 1 - l;
    d = nn(rt.minDamping, rt.maxDamping, d),
    n = nn(rt.minDuration, rt.maxDuration, Oa(n)),
    d < 1 ? (u = g => {
        const x = g * d
          , v = x * n
          , w = x - s
          , N = Vc(g, d)
          , E = Math.exp(-v);
        return wc - w / N * E
    }
    ,
    h = g => {
        const v = g * d * n
          , w = v * s + s
          , N = Math.pow(d, 2) * Math.pow(g, 2) * n
          , E = Math.exp(-v)
          , _ = Vc(Math.pow(g, 2), d);
        return (-u(g) + wc > 0 ? -1 : 1) * ((w - N) * E) / _
    }
    ) : (u = g => {
        const x = Math.exp(-g * n)
          , v = (g - s) * n + 1;
        return -wc + x * v
    }
    ,
    h = g => {
        const x = Math.exp(-g * n)
          , v = (s - g) * (n * n);
        return x * v
    }
    );
    const m = 5 / n
      , p = a1(u, h, m);
    if (n = _a(n),
    isNaN(p))
        return {
            stiffness: rt.stiffness,
            damping: rt.damping,
            duration: n
        };
    {
        const g = Math.pow(p, 2) * o;
        return {
            stiffness: g,
            damping: d * 2 * Math.sqrt(o * g),
            duration: n
        }
    }
}
const t1 = 12;
function a1(n, l, s) {
    let o = s;
    for (let u = 1; u < t1; u++)
        o = o - n(o) / l(o);
    return o
}
function Vc(n, l) {
    return n * Math.sqrt(1 - l * l)
}
const n1 = ["duration", "bounce"]
  , l1 = ["stiffness", "damping", "mass"];
function Rp(n, l) {
    return l.some(s => n[s] !== void 0)
}
function s1(n) {
    let l = {
        velocity: rt.velocity,
        stiffness: rt.stiffness,
        damping: rt.damping,
        mass: rt.mass,
        isResolvedFromDuration: !1,
        ...n
    };
    if (!Rp(n, l1) && Rp(n, n1))
        if (n.visualDuration) {
            const s = n.visualDuration
              , o = 2 * Math.PI / (s * 1.2)
              , u = o * o
              , h = 2 * nn(.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(u);
            l = {
                ...l,
                mass: rt.mass,
                stiffness: u,
                damping: h
            }
        } else {
            const s = e1(n);
            l = {
                ...l,
                ...s,
                mass: rt.mass
            },
            l.isResolvedFromDuration = !0
        }
    return l
}
function Zo(n=rt.visualDuration, l=rt.bounce) {
    const s = typeof n != "object" ? {
        visualDuration: n,
        keyframes: [0, 1],
        bounce: l
    } : n;
    let {restSpeed: o, restDelta: u} = s;
    const h = s.keyframes[0]
      , d = s.keyframes[s.keyframes.length - 1]
      , m = {
        done: !1,
        value: h
    }
      , {stiffness: p, damping: g, mass: x, duration: v, velocity: w, isResolvedFromDuration: N} = s1({
        ...s,
        velocity: -Oa(s.velocity || 0)
    })
      , E = w || 0
      , _ = g / (2 * Math.sqrt(p * x))
      , M = d - h
      , U = Oa(Math.sqrt(p / x))
      , P = Math.abs(M) < 5;
    o || (o = P ? rt.restSpeed.granular : rt.restSpeed.default),
    u || (u = P ? rt.restDelta.granular : rt.restDelta.default);
    let B;
    if (_ < 1) {
        const O = Vc(U, _);
        B = q => {
            const I = Math.exp(-_ * U * q);
            return d - I * ((E + _ * U * M) / O * Math.sin(O * q) + M * Math.cos(O * q))
        }
    } else if (_ === 1)
        B = O => d - Math.exp(-U * O) * (M + (E + U * M) * O);
    else {
        const O = U * Math.sqrt(_ * _ - 1);
        B = q => {
            const I = Math.exp(-_ * U * q)
              , Q = Math.min(O * q, 300);
            return d - I * ((E + _ * U * M) * Math.sinh(Q) + O * M * Math.cosh(Q)) / O
        }
    }
    const X = {
        calculatedDuration: N && v || null,
        next: O => {
            const q = B(O);
            if (N)
                m.done = O >= v;
            else {
                let I = O === 0 ? E : 0;
                _ < 1 && (I = O === 0 ? _a(E) : Ty(B, O, q));
                const Q = Math.abs(I) <= o
                  , re = Math.abs(d - q) <= u;
                m.done = Q && re
            }
            return m.value = m.done ? d : q,
            m
        }
        ,
        toString: () => {
            const O = Math.min(gf(X), Qo)
              , q = jy(I => X.next(O * I).value, O, 30);
            return O + "ms " + q
        }
        ,
        toTransition: () => {}
    };
    return X
}
Zo.applyToOptions = n => {
    const l = $b(n, 100, Zo);
    return n.ease = l.ease,
    n.duration = _a(l.duration),
    n.type = "keyframes",
    n
}
;
function Uc({keyframes: n, velocity: l=0, power: s=.8, timeConstant: o=325, bounceDamping: u=10, bounceStiffness: h=500, modifyTarget: d, min: m, max: p, restDelta: g=.5, restSpeed: x}) {
    const v = n[0]
      , w = {
        done: !1,
        value: v
    }
      , N = Q => m !== void 0 && Q < m || p !== void 0 && Q > p
      , E = Q => m === void 0 ? p : p === void 0 || Math.abs(m - Q) < Math.abs(p - Q) ? m : p;
    let _ = s * l;
    const M = v + _
      , U = d === void 0 ? M : d(M);
    U !== M && (_ = U - v);
    const P = Q => -_ * Math.exp(-Q / o)
      , B = Q => U + P(Q)
      , X = Q => {
        const re = P(Q)
          , fe = B(Q);
        w.done = Math.abs(re) <= g,
        w.value = w.done ? U : fe
    }
    ;
    let O, q;
    const I = Q => {
        N(w.value) && (O = Q,
        q = Zo({
            keyframes: [w.value, E(w.value)],
            velocity: Ty(B, Q, w.value),
            damping: u,
            stiffness: h,
            restDelta: g,
            restSpeed: x
        }))
    }
    ;
    return I(0),
    {
        calculatedDuration: null,
        next: Q => {
            let re = !1;
            return !q && O === void 0 && (re = !0,
            X(Q),
            I(Q)),
            O !== void 0 && Q >= O ? q.next(Q - O) : (!re && X(Q),
            w)
        }
    }
}
function i1(n, l, s) {
    const o = []
      , u = s || ln.mix || wy
      , h = n.length - 1;
    for (let d = 0; d < h; d++) {
        let m = u(n[d], n[d + 1]);
        if (l) {
            const p = Array.isArray(l) ? l[d] || ma : l;
            m = bi(p, m)
        }
        o.push(m)
    }
    return o
}
function o1(n, l, {clamp: s=!0, ease: o, mixer: u}={}) {
    const h = n.length;
    if (sf(h === l.length),
    h === 1)
        return () => l[0];
    if (h === 2 && l[0] === l[1])
        return () => l[1];
    const d = n[0] === n[1];
    n[0] > n[h - 1] && (n = [...n].reverse(),
    l = [...l].reverse());
    const m = i1(l, o, u)
      , p = m.length
      , g = x => {
        if (d && x < n[0])
            return l[0];
        let v = 0;
        if (p > 1)
            for (; v < n.length - 2 && !(x < n[v + 1]); v++)
                ;
        const w = fi(n[v], n[v + 1], x);
        return m[v](w)
    }
    ;
    return s ? x => g(nn(n[0], n[h - 1], x)) : g
}
function r1(n, l) {
    const s = n[n.length - 1];
    for (let o = 1; o <= l; o++) {
        const u = fi(0, l, o);
        n.push(at(s, 1, u))
    }
}
function u1(n) {
    const l = [0];
    return r1(l, n.length - 1),
    l
}
function c1(n, l) {
    return n.map(s => s * l)
}
function f1(n, l) {
    return n.map( () => l || dy).splice(0, n.length - 1)
}
function oi({duration: n=300, keyframes: l, times: s, ease: o="easeInOut"}) {
    const u = wb(o) ? o.map(Ep) : Ep(o)
      , h = {
        done: !1,
        value: l[0]
    }
      , d = c1(s && s.length === l.length ? s : u1(l), n)
      , m = o1(d, l, {
        ease: Array.isArray(u) ? u : f1(l, u)
    });
    return {
        calculatedDuration: n,
        next: p => (h.value = m(p),
        h.done = p >= n,
        h)
    }
}
const d1 = n => n !== null;
function yf(n, {repeat: l, repeatType: s="loop"}, o, u=1) {
    const h = n.filter(d1)
      , m = u < 0 || l && s !== "loop" && l % 2 === 1 ? 0 : h.length - 1;
    return !m || o === void 0 ? h[m] : o
}
const h1 = {
    decay: Uc,
    inertia: Uc,
    tween: oi,
    keyframes: oi,
    spring: Zo
};
function Ny(n) {
    typeof n.type == "string" && (n.type = h1[n.type])
}
class xf {
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
const m1 = n => n / 100;
class vf extends xf {
    constructor(l) {
        super(),
        this.state = "idle",
        this.startTime = null,
        this.isStopped = !1,
        this.currentTime = 0,
        this.holdTime = null,
        this.playbackSpeed = 1,
        this.stop = () => {
            var o, u;
            const {motionValue: s} = this.options;
            s && s.updatedAt !== Xt.now() && this.tick(Xt.now()),
            this.isStopped = !0,
            this.state !== "idle" && (this.teardown(),
            (u = (o = this.options).onStop) == null || u.call(o))
        }
        ,
        this.options = l,
        this.initAnimation(),
        this.play(),
        l.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {options: l} = this;
        Ny(l);
        const {type: s=oi, repeat: o=0, repeatDelay: u=0, repeatType: h, velocity: d=0} = l;
        let {keyframes: m} = l;
        const p = s || oi;
        p !== oi && typeof m[0] != "number" && (this.mixKeyframes = bi(m1, wy(m[0], m[1])),
        m = [0, 100]);
        const g = p({
            ...l,
            keyframes: m
        });
        h === "mirror" && (this.mirroredGenerator = p({
            ...l,
            keyframes: [...m].reverse(),
            velocity: -d
        })),
        g.calculatedDuration === null && (g.calculatedDuration = gf(g));
        const {calculatedDuration: x} = g;
        this.calculatedDuration = x,
        this.resolvedDuration = x + u,
        this.totalDuration = this.resolvedDuration * (o + 1) - u,
        this.generator = g
    }
    updateTime(l) {
        const s = Math.round(l - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = s
    }
    tick(l, s=!1) {
        const {generator: o, totalDuration: u, mixKeyframes: h, mirroredGenerator: d, resolvedDuration: m, calculatedDuration: p} = this;
        if (this.startTime === null)
            return o.next(0);
        const {delay: g=0, keyframes: x, repeat: v, repeatType: w, repeatDelay: N, type: E, onUpdate: _, finalKeyframe: M} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - u / this.speed, this.startTime)),
        s ? this.currentTime = l : this.updateTime(l);
        const U = this.currentTime - g * (this.playbackSpeed >= 0 ? 1 : -1)
          , P = this.playbackSpeed >= 0 ? U < 0 : U > u;
        this.currentTime = Math.max(U, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = u);
        let B = this.currentTime
          , X = o;
        if (v) {
            const Q = Math.min(this.currentTime, u) / m;
            let re = Math.floor(Q)
              , fe = Q % 1;
            !fe && Q >= 1 && (fe = 1),
            fe === 1 && re--,
            re = Math.min(re, v + 1),
            !!(re % 2) && (w === "reverse" ? (fe = 1 - fe,
            N && (fe -= N / m)) : w === "mirror" && (X = d)),
            B = nn(0, 1, fe) * m
        }
        const O = P ? {
            done: !1,
            value: x[0]
        } : X.next(B);
        h && (O.value = h(O.value));
        let {done: q} = O;
        !P && p !== null && (q = this.playbackSpeed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
        const I = this.holdTime === null && (this.state === "finished" || this.state === "running" && q);
        return I && E !== Uc && (O.value = yf(x, this.options, M, this.speed)),
        _ && _(O.value),
        I && this.finish(),
        O
    }
    then(l, s) {
        return this.finished.then(l, s)
    }
    get duration() {
        return Oa(this.calculatedDuration)
    }
    get time() {
        return Oa(this.currentTime)
    }
    set time(l) {
        var s;
        l = _a(l),
        this.currentTime = l,
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = l : this.driver && (this.startTime = this.driver.now() - l / this.playbackSpeed),
        (s = this.driver) == null || s.start(!1)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(l) {
        this.updateTime(Xt.now());
        const s = this.playbackSpeed !== l;
        this.playbackSpeed = l,
        s && (this.time = Oa(this.currentTime))
    }
    play() {
        var u, h;
        if (this.isStopped)
            return;
        const {driver: l=Jb, startTime: s} = this.options;
        this.driver || (this.driver = l(d => this.tick(d))),
        (h = (u = this.options).onPlay) == null || h.call(u);
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
        this.updateTime(Xt.now()),
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
function p1(n) {
    for (let l = 1; l < n.length; l++)
        n[l] ?? (n[l] = n[l - 1])
}
const il = n => n * 180 / Math.PI
  , zc = n => {
    const l = il(Math.atan2(n[1], n[0]));
    return Bc(l)
}
  , g1 = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: n => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
    rotate: zc,
    rotateZ: zc,
    skewX: n => il(Math.atan(n[1])),
    skewY: n => il(Math.atan(n[2])),
    skew: n => (Math.abs(n[1]) + Math.abs(n[2])) / 2
}
  , Bc = n => (n = n % 360,
n < 0 && (n += 360),
n)
  , Vp = zc
  , Up = n => Math.sqrt(n[0] * n[0] + n[1] * n[1])
  , zp = n => Math.sqrt(n[4] * n[4] + n[5] * n[5])
  , y1 = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Up,
    scaleY: zp,
    scale: n => (Up(n) + zp(n)) / 2,
    rotateX: n => Bc(il(Math.atan2(n[6], n[5]))),
    rotateY: n => Bc(il(Math.atan2(-n[2], n[0]))),
    rotateZ: Vp,
    rotate: Vp,
    skewX: n => il(Math.atan(n[4])),
    skewY: n => il(Math.atan(n[1])),
    skew: n => (Math.abs(n[1]) + Math.abs(n[4])) / 2
};
function Lc(n) {
    return n.includes("scale") ? 1 : 0
}
function kc(n, l) {
    if (!n || n === "none")
        return Lc(l);
    const s = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let o, u;
    if (s)
        o = y1,
        u = s;
    else {
        const m = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        o = g1,
        u = m
    }
    if (!u)
        return Lc(l);
    const h = o[l]
      , d = u[1].split(",").map(v1);
    return typeof h == "function" ? h(d) : d[h]
}
const x1 = (n, l) => {
    const {transform: s="none"} = getComputedStyle(n);
    return kc(s, l)
}
;
function v1(n) {
    return parseFloat(n.trim())
}
const as = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , ns = new Set(as)
  , Bp = n => n === ts || n === we
  , b1 = new Set(["x", "y", "z"])
  , S1 = as.filter(n => !b1.has(n));
function w1(n) {
    const l = [];
    return S1.forEach(s => {
        const o = n.getValue(s);
        o !== void 0 && (l.push([s, o.get()]),
        o.set(s.startsWith("scale") ? 1 : 0))
    }
    ),
    l
}
const ol = {
    width: ({x: n}, {paddingLeft: l="0", paddingRight: s="0"}) => n.max - n.min - parseFloat(l) - parseFloat(s),
    height: ({y: n}, {paddingTop: l="0", paddingBottom: s="0"}) => n.max - n.min - parseFloat(l) - parseFloat(s),
    top: (n, {top: l}) => parseFloat(l),
    left: (n, {left: l}) => parseFloat(l),
    bottom: ({y: n}, {top: l}) => parseFloat(l) + (n.max - n.min),
    right: ({x: n}, {left: l}) => parseFloat(l) + (n.max - n.min),
    x: (n, {transform: l}) => kc(l, "x"),
    y: (n, {transform: l}) => kc(l, "y")
};
ol.translateX = ol.x;
ol.translateY = ol.y;
const rl = new Set;
let Pc = !1
  , Hc = !1
  , Yc = !1;
function Ay() {
    if (Hc) {
        const n = Array.from(rl).filter(o => o.needsMeasurement)
          , l = new Set(n.map(o => o.element))
          , s = new Map;
        l.forEach(o => {
            const u = w1(o);
            u.length && (s.set(o, u),
            o.render())
        }
        ),
        n.forEach(o => o.measureInitialState()),
        l.forEach(o => {
            o.render();
            const u = s.get(o);
            u && u.forEach( ([h,d]) => {
                var m;
                (m = o.getValue(h)) == null || m.set(d)
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
    Pc = !1,
    rl.forEach(n => n.complete(Yc)),
    rl.clear()
}
function Ey() {
    rl.forEach(n => {
        n.readKeyframes(),
        n.needsMeasurement && (Hc = !0)
    }
    )
}
function j1() {
    Yc = !0,
    Ey(),
    Ay(),
    Yc = !1
}
class bf {
    constructor(l, s, o, u, h, d=!1) {
        this.state = "pending",
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.unresolvedKeyframes = [...l],
        this.onComplete = s,
        this.name = o,
        this.motionValue = u,
        this.element = h,
        this.isAsync = d
    }
    scheduleResolve() {
        this.state = "scheduled",
        this.isAsync ? (rl.add(this),
        Pc || (Pc = !0,
        nt.read(Ey),
        nt.resolveKeyframes(Ay))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: l, name: s, element: o, motionValue: u} = this;
        if (l[0] === null) {
            const h = u == null ? void 0 : u.get()
              , d = l[l.length - 1];
            if (h !== void 0)
                l[0] = h;
            else if (o && s) {
                const m = o.readValue(s, d);
                m != null && (l[0] = m)
            }
            l[0] === void 0 && (l[0] = d),
            u && h === void 0 && u.set(l[0])
        }
        p1(l)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(l=!1) {
        this.state = "complete",
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l),
        rl.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (rl.delete(this),
        this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const T1 = n => n.startsWith("--");
function N1(n, l, s) {
    T1(l) ? n.style.setProperty(l, s) : n.style[l] = s
}
const A1 = of( () => window.ScrollTimeline !== void 0)
  , E1 = {};
function C1(n, l) {
    const s = of(n);
    return () => E1[l] ?? s()
}
const Cy = C1( () => {
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
  , Lp = {
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
function Dy(n, l) {
    if (n)
        return typeof n == "function" ? Cy() ? jy(n, l) : "ease-out" : hy(n) ? si(n) : Array.isArray(n) ? n.map(s => Dy(s, l) || Lp.easeOut) : Lp[n]
}
function D1(n, l, s, {delay: o=0, duration: u=300, repeat: h=0, repeatType: d="loop", ease: m="easeOut", times: p}={}, g=void 0) {
    const x = {
        [l]: s
    };
    p && (x.offset = p);
    const v = Dy(m, u);
    Array.isArray(v) && (x.easing = v);
    const w = {
        delay: o,
        duration: u,
        easing: Array.isArray(v) ? "linear" : v,
        fill: "both",
        iterations: h + 1,
        direction: d === "reverse" ? "alternate" : "normal"
    };
    return g && (w.pseudoElement = g),
    n.animate(x, w)
}
function My(n) {
    return typeof n == "function" && "applyToOptions"in n
}
function M1({type: n, ...l}) {
    return My(n) && Cy() ? n.applyToOptions(l) : (l.duration ?? (l.duration = 300),
    l.ease ?? (l.ease = "easeOut"),
    l)
}
class _1 extends xf {
    constructor(l) {
        if (super(),
        this.finishedTime = null,
        this.isStopped = !1,
        !l)
            return;
        const {element: s, name: o, keyframes: u, pseudoElement: h, allowFlatten: d=!1, finalKeyframe: m, onComplete: p} = l;
        this.isPseudoElement = !!h,
        this.allowFlatten = d,
        this.options = l,
        sf(typeof l.type != "string");
        const g = M1(l);
        this.animation = D1(s, o, u, g, h),
        g.autoplay === !1 && this.animation.pause(),
        this.animation.onfinish = () => {
            if (this.finishedTime = this.time,
            !h) {
                const x = yf(u, this.options, m, this.speed);
                this.updateMotionValue ? this.updateMotionValue(x) : N1(s, o, x),
                this.animation.cancel()
            }
            p == null || p(),
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
        return Oa(Number(l))
    }
    get time() {
        return Oa(Number(this.animation.currentTime) || 0)
    }
    set time(l) {
        this.finishedTime = null,
        this.animation.currentTime = _a(l)
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
        l && A1() ? (this.animation.timeline = l,
        ma) : s(this)
    }
}
const _y = {
    anticipate: uy,
    backInOut: ry,
    circInOut: fy
};
function O1(n) {
    return n in _y
}
function R1(n) {
    typeof n.ease == "string" && O1(n.ease) && (n.ease = _y[n.ease])
}
const kp = 10;
class V1 extends _1 {
    constructor(l) {
        R1(l),
        Ny(l),
        super(l),
        l.startTime && (this.startTime = l.startTime),
        this.options = l
    }
    updateMotionValue(l) {
        const {motionValue: s, onUpdate: o, onComplete: u, element: h, ...d} = this.options;
        if (!s)
            return;
        if (l !== void 0) {
            s.set(l);
            return
        }
        const m = new vf({
            ...d,
            autoplay: !1
        })
          , p = _a(this.finishedTime ?? this.time);
        s.setWithVelocity(m.sample(p - kp).value, m.sample(p).value, kp),
        m.stop()
    }
}
const Pp = (n, l) => l === "zIndex" ? !1 : !!(typeof n == "number" || Array.isArray(n) || typeof n == "string" && (zn.test(n) || n === "0") && !n.startsWith("url("));
function U1(n) {
    const l = n[0];
    if (n.length === 1)
        return !0;
    for (let s = 0; s < n.length; s++)
        if (n[s] !== l)
            return !0
}
function z1(n, l, s, o) {
    const u = n[0];
    if (u === null)
        return !1;
    if (l === "display" || l === "visibility")
        return !0;
    const h = n[n.length - 1]
      , d = Pp(u, l)
      , m = Pp(h, l);
    return !d || !m ? !1 : U1(n) || (s === "spring" || My(s)) && o
}
function Sf(n) {
    return ty(n) && "offsetHeight"in n
}
const B1 = new Set(["opacity", "clipPath", "filter", "transform"])
  , L1 = of( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
function k1(n) {
    var g;
    const {motionValue: l, name: s, repeatDelay: o, repeatType: u, damping: h, type: d} = n;
    if (!Sf((g = l == null ? void 0 : l.owner) == null ? void 0 : g.current))
        return !1;
    const {onUpdate: m, transformTemplate: p} = l.owner.getProps();
    return L1() && s && B1.has(s) && (s !== "transform" || !p) && !m && !o && u !== "mirror" && h !== 0 && d !== "inertia"
}
const P1 = 40;
class H1 extends xf {
    constructor({autoplay: l=!0, delay: s=0, type: o="keyframes", repeat: u=0, repeatDelay: h=0, repeatType: d="loop", keyframes: m, name: p, motionValue: g, element: x, ...v}) {
        var E;
        super(),
        this.stop = () => {
            var _, M;
            this._animation && (this._animation.stop(),
            (_ = this.stopTimeline) == null || _.call(this)),
            (M = this.keyframeResolver) == null || M.cancel()
        }
        ,
        this.createdAt = Xt.now();
        const w = {
            autoplay: l,
            delay: s,
            type: o,
            repeat: u,
            repeatDelay: h,
            repeatType: d,
            name: p,
            motionValue: g,
            element: x,
            ...v
        }
          , N = (x == null ? void 0 : x.KeyframeResolver) || bf;
        this.keyframeResolver = new N(m, (_, M, U) => this.onKeyframesResolved(_, M, w, !U),p,g,x),
        (E = this.keyframeResolver) == null || E.scheduleResolve()
    }
    onKeyframesResolved(l, s, o, u) {
        this.keyframeResolver = void 0;
        const {name: h, type: d, velocity: m, delay: p, isHandoff: g, onUpdate: x} = o;
        this.resolvedAt = Xt.now(),
        z1(l, h, d, m) || ((ln.instantAnimations || !p) && (x == null || x(yf(l, o, s))),
        l[0] = l[l.length - 1],
        o.duration = 0,
        o.repeat = 0);
        const w = {
            startTime: u ? this.resolvedAt ? this.resolvedAt - this.createdAt > P1 ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: s,
            ...o,
            keyframes: l
        }
          , N = !g && k1(w) ? new V1({
            ...w,
            element: w.motionValue.owner.current
        }) : new vf(w);
        N.finished.then( () => this.notifyFinished()).catch(ma),
        this.pendingTimeline && (this.stopTimeline = N.attachTimeline(this.pendingTimeline),
        this.pendingTimeline = void 0),
        this._animation = N
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
        j1()),
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
const Y1 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function q1(n) {
    const l = Y1.exec(n);
    if (!l)
        return [, ];
    const [,s,o,u] = l;
    return [`--${s ?? o}`, u]
}
function Oy(n, l, s=1) {
    const [o,u] = q1(n);
    if (!o)
        return;
    const h = window.getComputedStyle(l).getPropertyValue(o);
    if (h) {
        const d = h.trim();
        return ey(d) ? parseFloat(d) : d
    }
    return df(u) ? Oy(u, l, s + 1) : u
}
function wf(n, l) {
    return (n == null ? void 0 : n[l]) ?? (n == null ? void 0 : n.default) ?? n
}
const Ry = new Set(["width", "height", "top", "left", "right", "bottom", ...as])
  , G1 = {
    test: n => n === "auto",
    parse: n => n
}
  , Vy = n => l => l.test(n)
  , Uy = [ts, we, Ra, On, Ub, Vb, G1]
  , Hp = n => Uy.find(Vy(n));
function X1(n) {
    return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || ay(n) : !0
}
const F1 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function K1(n) {
    const [l,s] = n.slice(0, -1).split("(");
    if (l === "drop-shadow")
        return n;
    const [o] = s.match(hf) || [];
    if (!o)
        return n;
    const u = s.replace(o, "");
    let h = F1.has(l) ? 1 : 0;
    return o !== s && (h *= 100),
    l + "(" + h + u + ")"
}
const Q1 = /\b([a-z-]*)\(.*?\)/gu
  , qc = {
    ...zn,
    getAnimatableNone: n => {
        const l = n.match(Q1);
        return l ? l.map(K1).join(" ") : n
    }
}
  , Yp = {
    ...ts,
    transform: Math.round
}
  , Z1 = {
    rotate: On,
    rotateX: On,
    rotateY: On,
    rotateZ: On,
    scale: Po,
    scaleX: Po,
    scaleY: Po,
    scaleZ: Po,
    skew: On,
    skewX: On,
    skewY: On,
    distance: we,
    translateX: we,
    translateY: we,
    translateZ: we,
    x: we,
    y: we,
    z: we,
    perspective: we,
    transformPerspective: we,
    opacity: di,
    originX: Dp,
    originY: Dp,
    originZ: we
}
  , jf = {
    borderWidth: we,
    borderTopWidth: we,
    borderRightWidth: we,
    borderBottomWidth: we,
    borderLeftWidth: we,
    borderRadius: we,
    radius: we,
    borderTopLeftRadius: we,
    borderTopRightRadius: we,
    borderBottomRightRadius: we,
    borderBottomLeftRadius: we,
    width: we,
    maxWidth: we,
    height: we,
    maxHeight: we,
    top: we,
    right: we,
    bottom: we,
    left: we,
    padding: we,
    paddingTop: we,
    paddingRight: we,
    paddingBottom: we,
    paddingLeft: we,
    margin: we,
    marginTop: we,
    marginRight: we,
    marginBottom: we,
    marginLeft: we,
    backgroundPositionX: we,
    backgroundPositionY: we,
    ...Z1,
    zIndex: Yp,
    fillOpacity: di,
    strokeOpacity: di,
    numOctaves: Yp
}
  , I1 = {
    ...jf,
    color: yt,
    backgroundColor: yt,
    outlineColor: yt,
    fill: yt,
    stroke: yt,
    borderColor: yt,
    borderTopColor: yt,
    borderRightColor: yt,
    borderBottomColor: yt,
    borderLeftColor: yt,
    filter: qc,
    WebkitFilter: qc
}
  , zy = n => I1[n];
function By(n, l) {
    let s = zy(n);
    return s !== qc && (s = zn),
    s.getAnimatableNone ? s.getAnimatableNone(l) : void 0
}
const J1 = new Set(["auto", "none", "0"]);
function $1(n, l, s) {
    let o = 0, u;
    for (; o < n.length && !u; ) {
        const h = n[o];
        typeof h == "string" && !J1.has(h) && hi(h).values.length && (u = n[o]),
        o++
    }
    if (u && s)
        for (const h of l)
            n[h] = By(s, u)
}
class W1 extends bf {
    constructor(l, s, o, u, h) {
        super(l, s, o, u, h, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: l, element: s, name: o} = this;
        if (!s || !s.current)
            return;
        super.readKeyframes();
        for (let p = 0; p < l.length; p++) {
            let g = l[p];
            if (typeof g == "string" && (g = g.trim(),
            df(g))) {
                const x = Oy(g, s.current);
                x !== void 0 && (l[p] = x),
                p === l.length - 1 && (this.finalKeyframe = g)
            }
        }
        if (this.resolveNoneKeyframes(),
        !Ry.has(o) || l.length !== 2)
            return;
        const [u,h] = l
          , d = Hp(u)
          , m = Hp(h);
        if (d !== m)
            if (Bp(d) && Bp(m))
                for (let p = 0; p < l.length; p++) {
                    const g = l[p];
                    typeof g == "string" && (l[p] = parseFloat(g))
                }
            else
                ol[o] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: l, name: s} = this
          , o = [];
        for (let u = 0; u < l.length; u++)
            (l[u] === null || X1(l[u])) && o.push(u);
        o.length && $1(l, o, s)
    }
    measureInitialState() {
        const {element: l, unresolvedKeyframes: s, name: o} = this;
        if (!l || !l.current)
            return;
        o === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = ol[o](l.measureViewportBox(), window.getComputedStyle(l.current)),
        s[0] = this.measuredOrigin;
        const u = s[s.length - 1];
        u !== void 0 && l.getValue(o, u).jump(u, !1)
    }
    measureEndState() {
        var m;
        const {element: l, name: s, unresolvedKeyframes: o} = this;
        if (!l || !l.current)
            return;
        const u = l.getValue(s);
        u && u.jump(this.measuredOrigin, !1);
        const h = o.length - 1
          , d = o[h];
        o[h] = ol[s](l.measureViewportBox(), window.getComputedStyle(l.current)),
        d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d),
        (m = this.removedTransforms) != null && m.length && this.removedTransforms.forEach( ([p,g]) => {
            l.getValue(p).set(g)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
function eS(n, l, s) {
    if (n instanceof EventTarget)
        return [n];
    if (typeof n == "string") {
        let o = document;
        const u = (s == null ? void 0 : s[n]) ?? o.querySelectorAll(n);
        return u ? Array.from(u) : []
    }
    return Array.from(n)
}
const Ly = (n, l) => l && typeof n == "number" ? l.transform(n) : n
  , qp = 30
  , tS = n => !isNaN(parseFloat(n));
class aS {
    constructor(l, s={}) {
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (o, u=!0) => {
            var d, m;
            const h = Xt.now();
            if (this.updatedAt !== h && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(o),
            this.current !== this.prev && ((d = this.events.change) == null || d.notify(this.current),
            this.dependents))
                for (const p of this.dependents)
                    p.dirty();
            u && ((m = this.events.renderRequest) == null || m.notify(this.current))
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(l),
        this.owner = s.owner
    }
    setCurrent(l) {
        this.current = l,
        this.updatedAt = Xt.now(),
        this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = tS(this.current))
    }
    setPrevFrameValue(l=this.current) {
        this.prevFrameValue = l,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(l) {
        return this.on("change", l)
    }
    on(l, s) {
        this.events[l] || (this.events[l] = new rf);
        const o = this.events[l].add(s);
        return l === "change" ? () => {
            o(),
            nt.read( () => {
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
        const l = Xt.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > qp)
            return 0;
        const s = Math.min(this.updatedAt - this.prevUpdatedAt, qp);
        return ny(parseFloat(this.current) - parseFloat(this.prevFrameValue), s)
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
function Wl(n, l) {
    return new aS(n,l)
}
const {schedule: Tf} = my(queueMicrotask, !1)
  , ja = {
    x: !1,
    y: !1
};
function ky() {
    return ja.x || ja.y
}
function nS(n) {
    return n === "x" || n === "y" ? ja[n] ? null : (ja[n] = !0,
    () => {
        ja[n] = !1
    }
    ) : ja.x || ja.y ? null : (ja.x = ja.y = !0,
    () => {
        ja.x = ja.y = !1
    }
    )
}
function Py(n, l) {
    const s = eS(n)
      , o = new AbortController
      , u = {
        passive: !0,
        ...l,
        signal: o.signal
    };
    return [s, u, () => o.abort()]
}
function Gp(n) {
    return !(n.pointerType === "touch" || ky())
}
function lS(n, l, s={}) {
    const [o,u,h] = Py(n, s)
      , d = m => {
        if (!Gp(m))
            return;
        const {target: p} = m
          , g = l(p, m);
        if (typeof g != "function" || !p)
            return;
        const x = v => {
            Gp(v) && (g(v),
            p.removeEventListener("pointerleave", x))
        }
        ;
        p.addEventListener("pointerleave", x, u)
    }
    ;
    return o.forEach(m => {
        m.addEventListener("pointerenter", d, u)
    }
    ),
    h
}
const Hy = (n, l) => l ? n === l ? !0 : Hy(n, l.parentElement) : !1
  , Nf = n => n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1
  , sS = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function iS(n) {
    return sS.has(n.tagName) || n.tabIndex !== -1
}
const Go = new WeakSet;
function Xp(n) {
    return l => {
        l.key === "Enter" && n(l)
    }
}
function jc(n, l) {
    n.dispatchEvent(new PointerEvent("pointer" + l,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const oS = (n, l) => {
    const s = n.currentTarget;
    if (!s)
        return;
    const o = Xp( () => {
        if (Go.has(s))
            return;
        jc(s, "down");
        const u = Xp( () => {
            jc(s, "up")
        }
        )
          , h = () => jc(s, "cancel");
        s.addEventListener("keyup", u, l),
        s.addEventListener("blur", h, l)
    }
    );
    s.addEventListener("keydown", o, l),
    s.addEventListener("blur", () => s.removeEventListener("keydown", o), l)
}
;
function Fp(n) {
    return Nf(n) && !ky()
}
function rS(n, l, s={}) {
    const [o,u,h] = Py(n, s)
      , d = m => {
        const p = m.currentTarget;
        if (!Fp(m))
            return;
        Go.add(p);
        const g = l(p, m)
          , x = (N, E) => {
            window.removeEventListener("pointerup", v),
            window.removeEventListener("pointercancel", w),
            Go.has(p) && Go.delete(p),
            Fp(N) && typeof g == "function" && g(N, {
                success: E
            })
        }
          , v = N => {
            x(N, p === window || p === document || s.useGlobalTarget || Hy(p, N.target))
        }
          , w = N => {
            x(N, !1)
        }
        ;
        window.addEventListener("pointerup", v, u),
        window.addEventListener("pointercancel", w, u)
    }
    ;
    return o.forEach(m => {
        (s.useGlobalTarget ? window : m).addEventListener("pointerdown", d, u),
        Sf(m) && (m.addEventListener("focus", g => oS(g, u)),
        !iS(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0))
    }
    ),
    h
}
function Yy(n) {
    return ty(n) && "ownerSVGElement"in n
}
function uS(n) {
    return Yy(n) && n.tagName === "svg"
}
const zt = n => !!(n && n.getVelocity)
  , cS = [...Uy, yt, zn]
  , fS = n => cS.find(Vy(n))
  , Af = j.createContext({
    transformPagePoint: n => n,
    isStatic: !1,
    reducedMotion: "never"
});
class dS extends j.Component {
    getSnapshotBeforeUpdate(l) {
        const s = this.props.childRef.current;
        if (s && l.isPresent && !this.props.isPresent) {
            const o = s.offsetParent
              , u = Sf(o) && o.offsetWidth || 0
              , h = this.props.sizeRef.current;
            h.height = s.offsetHeight || 0,
            h.width = s.offsetWidth || 0,
            h.top = s.offsetTop,
            h.left = s.offsetLeft,
            h.right = u - h.width - h.left
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function hS({children: n, isPresent: l, anchorX: s}) {
    const o = j.useId()
      , u = j.useRef(null)
      , h = j.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0
    })
      , {nonce: d} = j.useContext(Af);
    return j.useInsertionEffect( () => {
        const {width: m, height: p, top: g, left: x, right: v} = h.current;
        if (l || !u.current || !m || !p)
            return;
        const w = s === "left" ? `left: ${x}` : `right: ${v}`;
        u.current.dataset.motionPopId = o;
        const N = document.createElement("style");
        return d && (N.nonce = d),
        document.head.appendChild(N),
        N.sheet && N.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${p}px !important;
            ${w}px !important;
            top: ${g}px !important;
          }
        `),
        () => {
            document.head.contains(N) && document.head.removeChild(N)
        }
    }
    , [l]),
    f.jsx(dS, {
        isPresent: l,
        childRef: u,
        sizeRef: h,
        children: j.cloneElement(n, {
            ref: u
        })
    })
}
const mS = ({children: n, initial: l, isPresent: s, onExitComplete: o, custom: u, presenceAffectsLayout: h, mode: d, anchorX: m}) => {
    const p = tf(pS)
      , g = j.useId();
    let x = !0
      , v = j.useMemo( () => (x = !1,
    {
        id: g,
        initial: l,
        isPresent: s,
        custom: u,
        onExitComplete: w => {
            p.set(w, !0);
            for (const N of p.values())
                if (!N)
                    return;
            o && o()
        }
        ,
        register: w => (p.set(w, !1),
        () => p.delete(w))
    }), [s, p, o]);
    return h && x && (v = {
        ...v
    }),
    j.useMemo( () => {
        p.forEach( (w, N) => p.set(N, !1))
    }
    , [s]),
    j.useEffect( () => {
        !s && !p.size && o && o()
    }
    , [s]),
    d === "popLayout" && (n = f.jsx(hS, {
        isPresent: s,
        anchorX: m,
        children: n
    })),
    f.jsx(Wo.Provider, {
        value: v,
        children: n
    })
}
;
function pS() {
    return new Map
}
function qy(n=!0) {
    const l = j.useContext(Wo);
    if (l === null)
        return [!0, null];
    const {isPresent: s, onExitComplete: o, register: u} = l
      , h = j.useId();
    j.useEffect( () => {
        if (n)
            return u(h)
    }
    , [n]);
    const d = j.useCallback( () => n && o && o(h), [h, o, n]);
    return !s && o ? [!1, d] : [!0]
}
const Ho = n => n.key || "";
function Kp(n) {
    const l = [];
    return j.Children.forEach(n, s => {
        j.isValidElement(s) && l.push(s)
    }
    ),
    l
}
const Gy = ({children: n, custom: l, initial: s=!0, onExitComplete: o, presenceAffectsLayout: u=!0, mode: h="sync", propagate: d=!1, anchorX: m="left"}) => {
    const [p,g] = qy(d)
      , x = j.useMemo( () => Kp(n), [n])
      , v = d && !p ? [] : x.map(Ho)
      , w = j.useRef(!0)
      , N = j.useRef(x)
      , E = tf( () => new Map)
      , [_,M] = j.useState(x)
      , [U,P] = j.useState(x);
    Wg( () => {
        w.current = !1,
        N.current = x;
        for (let O = 0; O < U.length; O++) {
            const q = Ho(U[O]);
            v.includes(q) ? E.delete(q) : E.get(q) !== !0 && E.set(q, !1)
        }
    }
    , [U, v.length, v.join("-")]);
    const B = [];
    if (x !== _) {
        let O = [...x];
        for (let q = 0; q < U.length; q++) {
            const I = U[q]
              , Q = Ho(I);
            v.includes(Q) || (O.splice(q, 0, I),
            B.push(I))
        }
        return h === "wait" && B.length && (O = B),
        P(Kp(O)),
        M(x),
        null
    }
    const {forceRender: X} = j.useContext(ef);
    return f.jsx(f.Fragment, {
        children: U.map(O => {
            const q = Ho(O)
              , I = d && !p ? !1 : x === U || v.includes(q)
              , Q = () => {
                if (E.has(q))
                    E.set(q, !0);
                else
                    return;
                let re = !0;
                E.forEach(fe => {
                    fe || (re = !1)
                }
                ),
                re && (X == null || X(),
                P(N.current),
                d && (g == null || g()),
                o && o())
            }
            ;
            return f.jsx(mS, {
                isPresent: I,
                initial: !w.current || s ? void 0 : !1,
                custom: l,
                presenceAffectsLayout: u,
                mode: h,
                onExitComplete: I ? void 0 : Q,
                anchorX: m,
                children: O
            }, q)
        }
        )
    })
}
  , Xy = j.createContext({
    strict: !1
})
  , Qp = {
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
  , es = {};
for (const n in Qp)
    es[n] = {
        isEnabled: l => Qp[n].some(s => !!l[s])
    };
function gS(n) {
    for (const l in n)
        es[l] = {
            ...es[l],
            ...n[l]
        }
}
const yS = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Io(n) {
    return n.startsWith("while") || n.startsWith("drag") && n !== "draggable" || n.startsWith("layout") || n.startsWith("onTap") || n.startsWith("onPan") || n.startsWith("onLayout") || yS.has(n)
}
let Fy = n => !Io(n);
function xS(n) {
    typeof n == "function" && (Fy = l => l.startsWith("on") ? !Io(l) : n(l))
}
try {
    xS(require("@emotion/is-prop-valid").default)
} catch {}
function vS(n, l, s) {
    const o = {};
    for (const u in n)
        u === "values" && typeof n.values == "object" || (Fy(u) || s === !0 && Io(u) || !l && !Io(u) || n.draggable && u.startsWith("onDrag")) && (o[u] = n[u]);
    return o
}
function bS(n) {
    if (typeof Proxy > "u")
        return n;
    const l = new Map
      , s = (...o) => n(...o);
    return new Proxy(s,{
        get: (o, u) => u === "create" ? n : (l.has(u) || l.set(u, n(u)),
        l.get(u))
    })
}
const er = j.createContext({});
function tr(n) {
    return n !== null && typeof n == "object" && typeof n.start == "function"
}
function mi(n) {
    return typeof n == "string" || Array.isArray(n)
}
const Ef = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Cf = ["initial", ...Ef];
function ar(n) {
    return tr(n.animate) || Cf.some(l => mi(n[l]))
}
function Ky(n) {
    return !!(ar(n) || n.variants)
}
function SS(n, l) {
    if (ar(n)) {
        const {initial: s, animate: o} = n;
        return {
            initial: s === !1 || mi(s) ? s : void 0,
            animate: mi(o) ? o : void 0
        }
    }
    return n.inherit !== !1 ? l : {}
}
function wS(n) {
    const {initial: l, animate: s} = SS(n, j.useContext(er));
    return j.useMemo( () => ({
        initial: l,
        animate: s
    }), [Zp(l), Zp(s)])
}
function Zp(n) {
    return Array.isArray(n) ? n.join(" ") : n
}
const jS = Symbol.for("motionComponentSymbol");
function Zl(n) {
    return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current")
}
function TS(n, l, s) {
    return j.useCallback(o => {
        o && n.onMount && n.onMount(o),
        l && (o ? l.mount(o) : l.unmount()),
        s && (typeof s == "function" ? s(o) : Zl(s) && (s.current = o))
    }
    , [l])
}
const Df = n => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , NS = "framerAppearId"
  , Qy = "data-" + Df(NS)
  , Zy = j.createContext({});
function AS(n, l, s, o, u) {
    var _, M;
    const {visualElement: h} = j.useContext(er)
      , d = j.useContext(Xy)
      , m = j.useContext(Wo)
      , p = j.useContext(Af).reducedMotion
      , g = j.useRef(null);
    o = o || d.renderer,
    !g.current && o && (g.current = o(n, {
        visualState: l,
        parent: h,
        props: s,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: p
    }));
    const x = g.current
      , v = j.useContext(Zy);
    x && !x.projection && u && (x.type === "html" || x.type === "svg") && ES(g.current, s, u, v);
    const w = j.useRef(!1);
    j.useInsertionEffect( () => {
        x && w.current && x.update(s, m)
    }
    );
    const N = s[Qy]
      , E = j.useRef(!!N && !((_ = window.MotionHandoffIsComplete) != null && _.call(window, N)) && ((M = window.MotionHasOptimisedAnimation) == null ? void 0 : M.call(window, N)));
    return Wg( () => {
        x && (w.current = !0,
        window.MotionIsMounted = !0,
        x.updateFeatures(),
        Tf.render(x.render),
        E.current && x.animationState && x.animationState.animateChanges())
    }
    ),
    j.useEffect( () => {
        x && (!E.current && x.animationState && x.animationState.animateChanges(),
        E.current && (queueMicrotask( () => {
            var U;
            (U = window.MotionHandoffMarkAsComplete) == null || U.call(window, N)
        }
        ),
        E.current = !1))
    }
    ),
    x
}
function ES(n, l, s, o) {
    const {layoutId: u, layout: h, drag: d, dragConstraints: m, layoutScroll: p, layoutRoot: g, layoutCrossfade: x} = l;
    n.projection = new s(n.latestValues,l["data-framer-portal-id"] ? void 0 : Iy(n.parent)),
    n.projection.setOptions({
        layoutId: u,
        layout: h,
        alwaysMeasureLayout: !!d || m && Zl(m),
        visualElement: n,
        animationType: typeof h == "string" ? h : "both",
        initialPromotionConfig: o,
        crossfade: x,
        layoutScroll: p,
        layoutRoot: g
    })
}
function Iy(n) {
    if (n)
        return n.options.allowProjection !== !1 ? n.projection : Iy(n.parent)
}
function CS({preloadedFeatures: n, createVisualElement: l, useRender: s, useVisualState: o, Component: u}) {
    n && gS(n);
    function h(m, p) {
        let g;
        const x = {
            ...j.useContext(Af),
            ...m,
            layoutId: DS(m)
        }
          , {isStatic: v} = x
          , w = wS(m)
          , N = o(m, v);
        if (!v && af) {
            MS();
            const E = _S(x);
            g = E.MeasureLayout,
            w.visualElement = AS(u, N, x, l, E.ProjectionNode)
        }
        return f.jsxs(er.Provider, {
            value: w,
            children: [g && w.visualElement ? f.jsx(g, {
                visualElement: w.visualElement,
                ...x
            }) : null, s(u, m, TS(N, w.visualElement, p), N, v, w.visualElement)]
        })
    }
    h.displayName = `motion.${typeof u == "string" ? u : `create(${u.displayName ?? u.name ?? ""})`}`;
    const d = j.forwardRef(h);
    return d[jS] = u,
    d
}
function DS({layoutId: n}) {
    const l = j.useContext(ef).id;
    return l && n !== void 0 ? l + "-" + n : n
}
function MS(n, l) {
    j.useContext(Xy).strict
}
function _S(n) {
    const {drag: l, layout: s} = es;
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
const pi = {};
function OS(n) {
    for (const l in n)
        pi[l] = n[l],
        ff(l) && (pi[l].isCSSVariable = !0)
}
function Jy(n, {layout: l, layoutId: s}) {
    return ns.has(n) || n.startsWith("origin") || (l || s !== void 0) && (!!pi[n] || n === "opacity")
}
const RS = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , VS = as.length;
function US(n, l, s) {
    let o = ""
      , u = !0;
    for (let h = 0; h < VS; h++) {
        const d = as[h]
          , m = n[d];
        if (m === void 0)
            continue;
        let p = !0;
        if (typeof m == "number" ? p = m === (d.startsWith("scale") ? 1 : 0) : p = parseFloat(m) === 0,
        !p || s) {
            const g = Ly(m, jf[d]);
            if (!p) {
                u = !1;
                const x = RS[d] || d;
                o += `${x}(${g}) `
            }
            s && (l[d] = g)
        }
    }
    return o = o.trim(),
    s ? o = s(l, u ? "" : o) : u && (o = "none"),
    o
}
function Mf(n, l, s) {
    const {style: o, vars: u, transformOrigin: h} = n;
    let d = !1
      , m = !1;
    for (const p in l) {
        const g = l[p];
        if (ns.has(p)) {
            d = !0;
            continue
        } else if (ff(p)) {
            u[p] = g;
            continue
        } else {
            const x = Ly(g, jf[p]);
            p.startsWith("origin") ? (m = !0,
            h[p] = x) : o[p] = x
        }
    }
    if (l.transform || (d || s ? o.transform = US(l, n.transform, s) : o.transform && (o.transform = "none")),
    m) {
        const {originX: p="50%", originY: g="50%", originZ: x=0} = h;
        o.transformOrigin = `${p} ${g} ${x}`
    }
}
const _f = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function $y(n, l, s) {
    for (const o in l)
        !zt(l[o]) && !Jy(o, s) && (n[o] = l[o])
}
function zS({transformTemplate: n}, l) {
    return j.useMemo( () => {
        const s = _f();
        return Mf(s, l, n),
        Object.assign({}, s.vars, s.style)
    }
    , [l])
}
function BS(n, l) {
    const s = n.style || {}
      , o = {};
    return $y(o, s, n),
    Object.assign(o, zS(n, l)),
    o
}
function LS(n, l) {
    const s = {}
      , o = BS(n, l);
    return n.drag && n.dragListener !== !1 && (s.draggable = !1,
    o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none",
    o.touchAction = n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`),
    n.tabIndex === void 0 && (n.onTap || n.onTapStart || n.whileTap) && (s.tabIndex = 0),
    s.style = o,
    s
}
const kS = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , PS = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function HS(n, l, s=1, o=0, u=!0) {
    n.pathLength = 1;
    const h = u ? kS : PS;
    n[h.offset] = we.transform(-o);
    const d = we.transform(l)
      , m = we.transform(s);
    n[h.array] = `${d} ${m}`
}
function Wy(n, {attrX: l, attrY: s, attrScale: o, pathLength: u, pathSpacing: h=1, pathOffset: d=0, ...m}, p, g, x) {
    if (Mf(n, m, g),
    p) {
        n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
        return
    }
    n.attrs = n.style,
    n.style = {};
    const {attrs: v, style: w} = n;
    v.transform && (w.transform = v.transform,
    delete v.transform),
    (w.transform || v.transformOrigin) && (w.transformOrigin = v.transformOrigin ?? "50% 50%",
    delete v.transformOrigin),
    w.transform && (w.transformBox = (x == null ? void 0 : x.transformBox) ?? "fill-box",
    delete v.transformBox),
    l !== void 0 && (v.x = l),
    s !== void 0 && (v.y = s),
    o !== void 0 && (v.scale = o),
    u !== void 0 && HS(v, u, h, d, !1)
}
const e0 = () => ({
    ..._f(),
    attrs: {}
})
  , t0 = n => typeof n == "string" && n.toLowerCase() === "svg";
function YS(n, l, s, o) {
    const u = j.useMemo( () => {
        const h = e0();
        return Wy(h, l, t0(o), n.transformTemplate, n.style),
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
        $y(h, n.style, n),
        u.style = {
            ...h,
            ...u.style
        }
    }
    return u
}
const qS = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Of(n) {
    return typeof n != "string" || n.includes("-") ? !1 : !!(qS.indexOf(n) > -1 || /[A-Z]/u.test(n))
}
function GS(n=!1) {
    return (s, o, u, {latestValues: h}, d) => {
        const p = (Of(s) ? YS : LS)(o, h, d, s)
          , g = vS(o, typeof s == "string", n)
          , x = s !== j.Fragment ? {
            ...g,
            ...p,
            ref: u
        } : {}
          , {children: v} = o
          , w = j.useMemo( () => zt(v) ? v.get() : v, [v]);
        return j.createElement(s, {
            ...x,
            children: w
        })
    }
}
function Ip(n) {
    const l = [{}, {}];
    return n == null || n.values.forEach( (s, o) => {
        l[0][o] = s.get(),
        l[1][o] = s.getVelocity()
    }
    ),
    l
}
function Rf(n, l, s, o) {
    if (typeof l == "function") {
        const [u,h] = Ip(o);
        l = l(s !== void 0 ? s : n.custom, u, h)
    }
    if (typeof l == "string" && (l = n.variants && n.variants[l]),
    typeof l == "function") {
        const [u,h] = Ip(o);
        l = l(s !== void 0 ? s : n.custom, u, h)
    }
    return l
}
function Xo(n) {
    return zt(n) ? n.get() : n
}
function XS({scrapeMotionValuesFromProps: n, createRenderState: l}, s, o, u) {
    return {
        latestValues: FS(s, o, u, n),
        renderState: l()
    }
}
const a0 = n => (l, s) => {
    const o = j.useContext(er)
      , u = j.useContext(Wo)
      , h = () => XS(n, l, o, u);
    return s ? h() : tf(h)
}
;
function FS(n, l, s, o) {
    const u = {}
      , h = o(n, {});
    for (const w in h)
        u[w] = Xo(h[w]);
    let {initial: d, animate: m} = n;
    const p = ar(n)
      , g = Ky(n);
    l && g && !p && n.inherit !== !1 && (d === void 0 && (d = l.initial),
    m === void 0 && (m = l.animate));
    let x = s ? s.initial === !1 : !1;
    x = x || d === !1;
    const v = x ? m : d;
    if (v && typeof v != "boolean" && !tr(v)) {
        const w = Array.isArray(v) ? v : [v];
        for (let N = 0; N < w.length; N++) {
            const E = Rf(n, w[N]);
            if (E) {
                const {transitionEnd: _, transition: M, ...U} = E;
                for (const P in U) {
                    let B = U[P];
                    if (Array.isArray(B)) {
                        const X = x ? B.length - 1 : 0;
                        B = B[X]
                    }
                    B !== null && (u[P] = B)
                }
                for (const P in _)
                    u[P] = _[P]
            }
        }
    }
    return u
}
function Vf(n, l, s) {
    var h;
    const {style: o} = n
      , u = {};
    for (const d in o)
        (zt(o[d]) || l.style && zt(l.style[d]) || Jy(d, n) || ((h = s == null ? void 0 : s.getValue(d)) == null ? void 0 : h.liveStyle) !== void 0) && (u[d] = o[d]);
    return u
}
const KS = {
    useVisualState: a0({
        scrapeMotionValuesFromProps: Vf,
        createRenderState: _f
    })
};
function n0(n, l, s) {
    const o = Vf(n, l, s);
    for (const u in n)
        if (zt(n[u]) || zt(l[u])) {
            const h = as.indexOf(u) !== -1 ? "attr" + u.charAt(0).toUpperCase() + u.substring(1) : u;
            o[h] = n[u]
        }
    return o
}
const QS = {
    useVisualState: a0({
        scrapeMotionValuesFromProps: n0,
        createRenderState: e0
    })
};
function ZS(n, l) {
    return function(o, {forwardMotionProps: u}={
        forwardMotionProps: !1
    }) {
        const d = {
            ...Of(o) ? QS : KS,
            preloadedFeatures: n,
            useRender: GS(u),
            createVisualElement: l,
            Component: o
        };
        return CS(d)
    }
}
function gi(n, l, s) {
    const o = n.getProps();
    return Rf(o, l, s !== void 0 ? s : o.custom, n)
}
const Gc = n => Array.isArray(n);
function IS(n, l, s) {
    n.hasValue(l) ? n.getValue(l).set(s) : n.addValue(l, Wl(s))
}
function JS(n) {
    return Gc(n) ? n[n.length - 1] || 0 : n
}
function $S(n, l) {
    const s = gi(n, l);
    let {transitionEnd: o={}, transition: u={}, ...h} = s || {};
    h = {
        ...h,
        ...o
    };
    for (const d in h) {
        const m = JS(h[d]);
        IS(n, d, m)
    }
}
function WS(n) {
    return !!(zt(n) && n.add)
}
function Xc(n, l) {
    const s = n.getValue("willChange");
    if (WS(s))
        return s.add(l);
    if (!s && ln.WillChange) {
        const o = new ln.WillChange("auto");
        n.addValue("willChange", o),
        o.add(l)
    }
}
function l0(n) {
    return n.props[Qy]
}
const e2 = n => n !== null;
function t2(n, {repeat: l, repeatType: s="loop"}, o) {
    const u = n.filter(e2)
      , h = l && s !== "loop" && l % 2 === 1 ? 0 : u.length - 1;
    return u[h]
}
const a2 = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , n2 = n => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , l2 = {
    type: "keyframes",
    duration: .8
}
  , s2 = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , i2 = (n, {keyframes: l}) => l.length > 2 ? l2 : ns.has(n) ? n.startsWith("scale") ? n2(l[1]) : a2 : s2;
function o2({when: n, delay: l, delayChildren: s, staggerChildren: o, staggerDirection: u, repeat: h, repeatType: d, repeatDelay: m, from: p, elapsed: g, ...x}) {
    return !!Object.keys(x).length
}
const Uf = (n, l, s, o={}, u, h) => d => {
    const m = wf(o, n) || {}
      , p = m.delay || o.delay || 0;
    let {elapsed: g=0} = o;
    g = g - _a(p);
    const x = {
        keyframes: Array.isArray(s) ? s : [null, s],
        ease: "easeOut",
        velocity: l.getVelocity(),
        ...m,
        delay: -g,
        onUpdate: w => {
            l.set(w),
            m.onUpdate && m.onUpdate(w)
        }
        ,
        onComplete: () => {
            d(),
            m.onComplete && m.onComplete()
        }
        ,
        name: n,
        motionValue: l,
        element: h ? void 0 : u
    };
    o2(m) || Object.assign(x, i2(n, x)),
    x.duration && (x.duration = _a(x.duration)),
    x.repeatDelay && (x.repeatDelay = _a(x.repeatDelay)),
    x.from !== void 0 && (x.keyframes[0] = x.from);
    let v = !1;
    if ((x.type === !1 || x.duration === 0 && !x.repeatDelay) && (x.duration = 0,
    x.delay === 0 && (v = !0)),
    (ln.instantAnimations || ln.skipAnimations) && (v = !0,
    x.duration = 0,
    x.delay = 0),
    x.allowFlatten = !m.type && !m.ease,
    v && !h && l.get() !== void 0) {
        const w = t2(x.keyframes, m);
        if (w !== void 0) {
            nt.update( () => {
                x.onUpdate(w),
                x.onComplete()
            }
            );
            return
        }
    }
    return m.isSync ? new vf(x) : new H1(x)
}
;
function r2({protectedKeys: n, needsAnimating: l}, s) {
    const o = n.hasOwnProperty(s) && l[s] !== !0;
    return l[s] = !1,
    o
}
function s0(n, l, {delay: s=0, transitionOverride: o, type: u}={}) {
    let {transition: h=n.getDefaultTransition(), transitionEnd: d, ...m} = l;
    o && (h = o);
    const p = []
      , g = u && n.animationState && n.animationState.getState()[u];
    for (const x in m) {
        const v = n.getValue(x, n.latestValues[x] ?? null)
          , w = m[x];
        if (w === void 0 || g && r2(g, x))
            continue;
        const N = {
            delay: s,
            ...wf(h || {}, x)
        }
          , E = v.get();
        if (E !== void 0 && !v.isAnimating && !Array.isArray(w) && w === E && !N.velocity)
            continue;
        let _ = !1;
        if (window.MotionHandoffAnimation) {
            const U = l0(n);
            if (U) {
                const P = window.MotionHandoffAnimation(U, x, nt);
                P !== null && (N.startTime = P,
                _ = !0)
            }
        }
        Xc(n, x),
        v.start(Uf(x, v, w, n.shouldReduceMotion && Ry.has(x) ? {
            type: !1
        } : N, n, _));
        const M = v.animation;
        M && p.push(M)
    }
    return d && Promise.all(p).then( () => {
        nt.update( () => {
            d && $S(n, d)
        }
        )
    }
    ),
    p
}
function Fc(n, l, s={}) {
    var p;
    const o = gi(n, l, s.type === "exit" ? (p = n.presenceContext) == null ? void 0 : p.custom : void 0);
    let {transition: u=n.getDefaultTransition() || {}} = o || {};
    s.transitionOverride && (u = s.transitionOverride);
    const h = o ? () => Promise.all(s0(n, o, s)) : () => Promise.resolve()
      , d = n.variantChildren && n.variantChildren.size ? (g=0) => {
        const {delayChildren: x=0, staggerChildren: v, staggerDirection: w} = u;
        return u2(n, l, x + g, v, w, s)
    }
    : () => Promise.resolve()
      , {when: m} = u;
    if (m) {
        const [g,x] = m === "beforeChildren" ? [h, d] : [d, h];
        return g().then( () => x())
    } else
        return Promise.all([h(), d(s.delay)])
}
function u2(n, l, s=0, o=0, u=1, h) {
    const d = []
      , m = (n.variantChildren.size - 1) * o
      , p = u === 1 ? (g=0) => g * o : (g=0) => m - g * o;
    return Array.from(n.variantChildren).sort(c2).forEach( (g, x) => {
        g.notify("AnimationStart", l),
        d.push(Fc(g, l, {
            ...h,
            delay: s + p(x)
        }).then( () => g.notify("AnimationComplete", l)))
    }
    ),
    Promise.all(d)
}
function c2(n, l) {
    return n.sortNodePosition(l)
}
function f2(n, l, s={}) {
    n.notify("AnimationStart", l);
    let o;
    if (Array.isArray(l)) {
        const u = l.map(h => Fc(n, h, s));
        o = Promise.all(u)
    } else if (typeof l == "string")
        o = Fc(n, l, s);
    else {
        const u = typeof l == "function" ? gi(n, l, s.custom) : l;
        o = Promise.all(s0(n, u, s))
    }
    return o.then( () => {
        n.notify("AnimationComplete", l)
    }
    )
}
function i0(n, l) {
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
const d2 = Cf.length;
function o0(n) {
    if (!n)
        return;
    if (!n.isControllingVariants) {
        const s = n.parent ? o0(n.parent) || {} : {};
        return n.props.initial !== void 0 && (s.initial = n.props.initial),
        s
    }
    const l = {};
    for (let s = 0; s < d2; s++) {
        const o = Cf[s]
          , u = n.props[o];
        (mi(u) || u === !1) && (l[o] = u)
    }
    return l
}
const h2 = [...Ef].reverse()
  , m2 = Ef.length;
function p2(n) {
    return l => Promise.all(l.map( ({animation: s, options: o}) => f2(n, s, o)))
}
function g2(n) {
    let l = p2(n)
      , s = Jp()
      , o = !0;
    const u = p => (g, x) => {
        var w;
        const v = gi(n, x, p === "exit" ? (w = n.presenceContext) == null ? void 0 : w.custom : void 0);
        if (v) {
            const {transition: N, transitionEnd: E, ..._} = v;
            g = {
                ...g,
                ..._,
                ...E
            }
        }
        return g
    }
    ;
    function h(p) {
        l = p(n)
    }
    function d(p) {
        const {props: g} = n
          , x = o0(n.parent) || {}
          , v = []
          , w = new Set;
        let N = {}
          , E = 1 / 0;
        for (let M = 0; M < m2; M++) {
            const U = h2[M]
              , P = s[U]
              , B = g[U] !== void 0 ? g[U] : x[U]
              , X = mi(B)
              , O = U === p ? P.isActive : null;
            O === !1 && (E = M);
            let q = B === x[U] && B !== g[U] && X;
            if (q && o && n.manuallyAnimateOnMount && (q = !1),
            P.protectedKeys = {
                ...N
            },
            !P.isActive && O === null || !B && !P.prevProp || tr(B) || typeof B == "boolean")
                continue;
            const I = y2(P.prevProp, B);
            let Q = I || U === p && P.isActive && !q && X || M > E && X
              , re = !1;
            const fe = Array.isArray(B) ? B : [B];
            let he = fe.reduce(u(U), {});
            O === !1 && (he = {});
            const {prevResolvedValues: me={}} = P
              , ie = {
                ...me,
                ...he
            }
              , se = D => {
                Q = !0,
                w.has(D) && (re = !0,
                w.delete(D)),
                P.needsAnimating[D] = !0;
                const Y = n.getValue(D);
                Y && (Y.liveStyle = !1)
            }
            ;
            for (const D in ie) {
                const Y = he[D]
                  , J = me[D];
                if (N.hasOwnProperty(D))
                    continue;
                let S = !1;
                Gc(Y) && Gc(J) ? S = !i0(Y, J) : S = Y !== J,
                S ? Y != null ? se(D) : w.add(D) : Y !== void 0 && w.has(D) ? se(D) : P.protectedKeys[D] = !0
            }
            P.prevProp = B,
            P.prevResolvedValues = he,
            P.isActive && (N = {
                ...N,
                ...he
            }),
            o && n.blockInitialAnimation && (Q = !1),
            Q && (!(q && I) || re) && v.push(...fe.map(D => ({
                animation: D,
                options: {
                    type: U
                }
            })))
        }
        if (w.size) {
            const M = {};
            if (typeof g.initial != "boolean") {
                const U = gi(n, Array.isArray(g.initial) ? g.initial[0] : g.initial);
                U && U.transition && (M.transition = U.transition)
            }
            w.forEach(U => {
                const P = n.getBaseTarget(U)
                  , B = n.getValue(U);
                B && (B.liveStyle = !0),
                M[U] = P ?? null
            }
            ),
            v.push({
                animation: M
            })
        }
        let _ = !!v.length;
        return o && (g.initial === !1 || g.initial === g.animate) && !n.manuallyAnimateOnMount && (_ = !1),
        o = !1,
        _ ? l(v) : Promise.resolve()
    }
    function m(p, g) {
        var v;
        if (s[p].isActive === g)
            return Promise.resolve();
        (v = n.variantChildren) == null || v.forEach(w => {
            var N;
            return (N = w.animationState) == null ? void 0 : N.setActive(p, g)
        }
        ),
        s[p].isActive = g;
        const x = d(p);
        for (const w in s)
            s[w].protectedKeys = {};
        return x
    }
    return {
        animateChanges: d,
        setActive: m,
        setAnimateFunction: h,
        getState: () => s,
        reset: () => {
            s = Jp(),
            o = !0
        }
    }
}
function y2(n, l) {
    return typeof l == "string" ? l !== n : Array.isArray(l) ? !i0(l, n) : !1
}
function nl(n=!1) {
    return {
        isActive: n,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function Jp() {
    return {
        animate: nl(!0),
        whileInView: nl(),
        whileHover: nl(),
        whileTap: nl(),
        whileDrag: nl(),
        whileFocus: nl(),
        exit: nl()
    }
}
class Bn {
    constructor(l) {
        this.isMounted = !1,
        this.node = l
    }
    update() {}
}
class x2 extends Bn {
    constructor(l) {
        super(l),
        l.animationState || (l.animationState = g2(l))
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
let v2 = 0;
class b2 extends Bn {
    constructor() {
        super(...arguments),
        this.id = v2++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: l, onExitComplete: s} = this.node.presenceContext
          , {isPresent: o} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || l === o)
            return;
        const u = this.node.animationState.setActive("exit", !l);
        s && !l && u.then( () => {
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
const S2 = {
    animation: {
        Feature: x2
    },
    exit: {
        Feature: b2
    }
};
function yi(n, l, s, o={
    passive: !0
}) {
    return n.addEventListener(l, s, o),
    () => n.removeEventListener(l, s)
}
function ji(n) {
    return {
        point: {
            x: n.pageX,
            y: n.pageY
        }
    }
}
const w2 = n => l => Nf(l) && n(l, ji(l));
function ri(n, l, s, o) {
    return yi(n, l, w2(s), o)
}
function r0({top: n, left: l, right: s, bottom: o}) {
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
function j2({x: n, y: l}) {
    return {
        top: l.min,
        right: n.max,
        bottom: l.max,
        left: n.min
    }
}
function T2(n, l) {
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
const u0 = 1e-4
  , N2 = 1 - u0
  , A2 = 1 + u0
  , c0 = .01
  , E2 = 0 - c0
  , C2 = 0 + c0;
function Lt(n) {
    return n.max - n.min
}
function D2(n, l, s) {
    return Math.abs(n - l) <= s
}
function $p(n, l, s, o=.5) {
    n.origin = o,
    n.originPoint = at(l.min, l.max, n.origin),
    n.scale = Lt(s) / Lt(l),
    n.translate = at(s.min, s.max, n.origin) - n.originPoint,
    (n.scale >= N2 && n.scale <= A2 || isNaN(n.scale)) && (n.scale = 1),
    (n.translate >= E2 && n.translate <= C2 || isNaN(n.translate)) && (n.translate = 0)
}
function ui(n, l, s, o) {
    $p(n.x, l.x, s.x, o ? o.originX : void 0),
    $p(n.y, l.y, s.y, o ? o.originY : void 0)
}
function Wp(n, l, s) {
    n.min = s.min + l.min,
    n.max = n.min + Lt(l)
}
function M2(n, l, s) {
    Wp(n.x, l.x, s.x),
    Wp(n.y, l.y, s.y)
}
function eg(n, l, s) {
    n.min = l.min - s.min,
    n.max = n.min + Lt(l)
}
function ci(n, l, s) {
    eg(n.x, l.x, s.x),
    eg(n.y, l.y, s.y)
}
const tg = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Il = () => ({
    x: tg(),
    y: tg()
})
  , ag = () => ({
    min: 0,
    max: 0
})
  , ht = () => ({
    x: ag(),
    y: ag()
});
function da(n) {
    return [n("x"), n("y")]
}
function Tc(n) {
    return n === void 0 || n === 1
}
function Kc({scale: n, scaleX: l, scaleY: s}) {
    return !Tc(n) || !Tc(l) || !Tc(s)
}
function ll(n) {
    return Kc(n) || f0(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY
}
function f0(n) {
    return ng(n.x) || ng(n.y)
}
function ng(n) {
    return n && n !== "0%"
}
function Jo(n, l, s) {
    const o = n - s
      , u = l * o;
    return s + u
}
function lg(n, l, s, o, u) {
    return u !== void 0 && (n = Jo(n, u, o)),
    Jo(n, s, o) + l
}
function Qc(n, l=0, s=1, o, u) {
    n.min = lg(n.min, l, s, o, u),
    n.max = lg(n.max, l, s, o, u)
}
function d0(n, {x: l, y: s}) {
    Qc(n.x, l.translate, l.scale, l.originPoint),
    Qc(n.y, s.translate, s.scale, s.originPoint)
}
const sg = .999999999999
  , ig = 1.0000000000001;
function _2(n, l, s, o=!1) {
    const u = s.length;
    if (!u)
        return;
    l.x = l.y = 1;
    let h, d;
    for (let m = 0; m < u; m++) {
        h = s[m],
        d = h.projectionDelta;
        const {visualElement: p} = h.options;
        p && p.props.style && p.props.style.display === "contents" || (o && h.options.layoutScroll && h.scroll && h !== h.root && $l(n, {
            x: -h.scroll.offset.x,
            y: -h.scroll.offset.y
        }),
        d && (l.x *= d.x.scale,
        l.y *= d.y.scale,
        d0(n, d)),
        o && ll(h.latestValues) && $l(n, h.latestValues))
    }
    l.x < ig && l.x > sg && (l.x = 1),
    l.y < ig && l.y > sg && (l.y = 1)
}
function Jl(n, l) {
    n.min = n.min + l,
    n.max = n.max + l
}
function og(n, l, s, o, u=.5) {
    const h = at(n.min, n.max, u);
    Qc(n, l, s, h, o)
}
function $l(n, l) {
    og(n.x, l.x, l.scaleX, l.scale, l.originX),
    og(n.y, l.y, l.scaleY, l.scale, l.originY)
}
function h0(n, l) {
    return r0(T2(n.getBoundingClientRect(), l))
}
function O2(n, l, s) {
    const o = h0(n, s)
      , {scroll: u} = l;
    return u && (Jl(o.x, u.offset.x),
    Jl(o.y, u.offset.y)),
    o
}
const m0 = ({current: n}) => n ? n.ownerDocument.defaultView : null
  , rg = (n, l) => Math.abs(n - l);
function R2(n, l) {
    const s = rg(n.x, l.x)
      , o = rg(n.y, l.y);
    return Math.sqrt(s ** 2 + o ** 2)
}
class p0 {
    constructor(l, s, {transformPagePoint: o, contextWindow: u, dragSnapToOrigin: h=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const v = Ac(this.lastMoveEventInfo, this.history)
              , w = this.startEvent !== null
              , N = R2(v.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!w && !N)
                return;
            const {point: E} = v
              , {timestamp: _} = _t;
            this.history.push({
                ...E,
                timestamp: _
            });
            const {onStart: M, onMove: U} = this.handlers;
            w || (M && M(this.lastMoveEvent, v),
            this.startEvent = this.lastMoveEvent),
            U && U(this.lastMoveEvent, v)
        }
        ,
        this.handlePointerMove = (v, w) => {
            this.lastMoveEvent = v,
            this.lastMoveEventInfo = Nc(w, this.transformPagePoint),
            nt.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (v, w) => {
            this.end();
            const {onEnd: N, onSessionEnd: E, resumeAnimation: _} = this.handlers;
            if (this.dragSnapToOrigin && _ && _(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const M = Ac(v.type === "pointercancel" ? this.lastMoveEventInfo : Nc(w, this.transformPagePoint), this.history);
            this.startEvent && N && N(v, M),
            E && E(v, M)
        }
        ,
        !Nf(l))
            return;
        this.dragSnapToOrigin = h,
        this.handlers = s,
        this.transformPagePoint = o,
        this.contextWindow = u || window;
        const d = ji(l)
          , m = Nc(d, this.transformPagePoint)
          , {point: p} = m
          , {timestamp: g} = _t;
        this.history = [{
            ...p,
            timestamp: g
        }];
        const {onSessionStart: x} = s;
        x && x(l, Ac(m, this.history)),
        this.removeListeners = bi(ri(this.contextWindow, "pointermove", this.handlePointerMove), ri(this.contextWindow, "pointerup", this.handlePointerUp), ri(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(l) {
        this.handlers = l
    }
    end() {
        this.removeListeners && this.removeListeners(),
        Un(this.updatePoint)
    }
}
function Nc(n, l) {
    return l ? {
        point: l(n.point)
    } : n
}
function ug(n, l) {
    return {
        x: n.x - l.x,
        y: n.y - l.y
    }
}
function Ac({point: n}, l) {
    return {
        point: n,
        delta: ug(n, g0(l)),
        offset: ug(n, V2(l)),
        velocity: U2(l, .1)
    }
}
function V2(n) {
    return n[0]
}
function g0(n) {
    return n[n.length - 1]
}
function U2(n, l) {
    if (n.length < 2)
        return {
            x: 0,
            y: 0
        };
    let s = n.length - 1
      , o = null;
    const u = g0(n);
    for (; s >= 0 && (o = n[s],
    !(u.timestamp - o.timestamp > _a(l))); )
        s--;
    if (!o)
        return {
            x: 0,
            y: 0
        };
    const h = Oa(u.timestamp - o.timestamp);
    if (h === 0)
        return {
            x: 0,
            y: 0
        };
    const d = {
        x: (u.x - o.x) / h,
        y: (u.y - o.y) / h
    };
    return d.x === 1 / 0 && (d.x = 0),
    d.y === 1 / 0 && (d.y = 0),
    d
}
function z2(n, {min: l, max: s}, o) {
    return l !== void 0 && n < l ? n = o ? at(l, n, o.min) : Math.max(n, l) : s !== void 0 && n > s && (n = o ? at(s, n, o.max) : Math.min(n, s)),
    n
}
function cg(n, l, s) {
    return {
        min: l !== void 0 ? n.min + l : void 0,
        max: s !== void 0 ? n.max + s - (n.max - n.min) : void 0
    }
}
function B2(n, {top: l, left: s, bottom: o, right: u}) {
    return {
        x: cg(n.x, s, u),
        y: cg(n.y, l, o)
    }
}
function fg(n, l) {
    let s = l.min - n.min
      , o = l.max - n.max;
    return l.max - l.min < n.max - n.min && ([s,o] = [o, s]),
    {
        min: s,
        max: o
    }
}
function L2(n, l) {
    return {
        x: fg(n.x, l.x),
        y: fg(n.y, l.y)
    }
}
function k2(n, l) {
    let s = .5;
    const o = Lt(n)
      , u = Lt(l);
    return u > o ? s = fi(l.min, l.max - o, n.min) : o > u && (s = fi(n.min, n.max - u, l.min)),
    nn(0, 1, s)
}
function P2(n, l) {
    const s = {};
    return l.min !== void 0 && (s.min = l.min - n.min),
    l.max !== void 0 && (s.max = l.max - n.min),
    s
}
const Zc = .35;
function H2(n=Zc) {
    return n === !1 ? n = 0 : n === !0 && (n = Zc),
    {
        x: dg(n, "left", "right"),
        y: dg(n, "top", "bottom")
    }
}
function dg(n, l, s) {
    return {
        min: hg(n, l),
        max: hg(n, s)
    }
}
function hg(n, l) {
    return typeof n == "number" ? n : n[l] || 0
}
const Y2 = new WeakMap;
class q2 {
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
        this.elastic = ht(),
        this.visualElement = l
    }
    start(l, {snapToCursor: s=!1}={}) {
        const {presenceContext: o} = this.visualElement;
        if (o && o.isPresent === !1)
            return;
        const u = x => {
            const {dragSnapToOrigin: v} = this.getProps();
            v ? this.pauseAnimation() : this.stopAnimation(),
            s && this.snapToCursor(ji(x).point)
        }
          , h = (x, v) => {
            const {drag: w, dragPropagation: N, onDragStart: E} = this.getProps();
            if (w && !N && (this.openDragLock && this.openDragLock(),
            this.openDragLock = nS(w),
            !this.openDragLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            da(M => {
                let U = this.getAxisMotionValue(M).get() || 0;
                if (Ra.test(U)) {
                    const {projection: P} = this.visualElement;
                    if (P && P.layout) {
                        const B = P.layout.layoutBox[M];
                        B && (U = Lt(B) * (parseFloat(U) / 100))
                    }
                }
                this.originPoint[M] = U
            }
            ),
            E && nt.postRender( () => E(x, v)),
            Xc(this.visualElement, "transform");
            const {animationState: _} = this.visualElement;
            _ && _.setActive("whileDrag", !0)
        }
          , d = (x, v) => {
            const {dragPropagation: w, dragDirectionLock: N, onDirectionLock: E, onDrag: _} = this.getProps();
            if (!w && !this.openDragLock)
                return;
            const {offset: M} = v;
            if (N && this.currentDirection === null) {
                this.currentDirection = G2(M),
                this.currentDirection !== null && E && E(this.currentDirection);
                return
            }
            this.updateAxis("x", v.point, M),
            this.updateAxis("y", v.point, M),
            this.visualElement.render(),
            _ && _(x, v)
        }
          , m = (x, v) => this.stop(x, v)
          , p = () => da(x => {
            var v;
            return this.getAnimationState(x) === "paused" && ((v = this.getAxisMotionValue(x).animation) == null ? void 0 : v.play())
        }
        )
          , {dragSnapToOrigin: g} = this.getProps();
        this.panSession = new p0(l,{
            onSessionStart: u,
            onStart: h,
            onMove: d,
            onSessionEnd: m,
            resumeAnimation: p
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: g,
            contextWindow: m0(this.visualElement)
        })
    }
    stop(l, s) {
        const o = this.isDragging;
        if (this.cancel(),
        !o)
            return;
        const {velocity: u} = s;
        this.startAnimation(u);
        const {onDragEnd: h} = this.getProps();
        h && nt.postRender( () => h(l, s))
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
        const {drag: u} = this.getProps();
        if (!o || !Yo(l, u, this.currentDirection))
            return;
        const h = this.getAxisMotionValue(l);
        let d = this.originPoint[l] + o[l];
        this.constraints && this.constraints[l] && (d = z2(d, this.constraints[l], this.elastic[l])),
        h.set(d)
    }
    resolveConstraints() {
        var h;
        const {dragConstraints: l, dragElastic: s} = this.getProps()
          , o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (h = this.visualElement.projection) == null ? void 0 : h.layout
          , u = this.constraints;
        l && Zl(l) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : l && o ? this.constraints = B2(o.layoutBox, l) : this.constraints = !1,
        this.elastic = H2(s),
        u !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && da(d => {
            this.constraints !== !1 && this.getAxisMotionValue(d) && (this.constraints[d] = P2(o.layoutBox[d], this.constraints[d]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: l, onMeasureDragConstraints: s} = this.getProps();
        if (!l || !Zl(l))
            return !1;
        const o = l.current
          , {projection: u} = this.visualElement;
        if (!u || !u.layout)
            return !1;
        const h = O2(o, u.root, this.visualElement.getTransformPagePoint());
        let d = L2(u.layout.layoutBox, h);
        if (s) {
            const m = s(j2(d));
            this.hasMutatedConstraints = !!m,
            m && (d = r0(m))
        }
        return d
    }
    startAnimation(l) {
        const {drag: s, dragMomentum: o, dragElastic: u, dragTransition: h, dragSnapToOrigin: d, onDragTransitionEnd: m} = this.getProps()
          , p = this.constraints || {}
          , g = da(x => {
            if (!Yo(x, s, this.currentDirection))
                return;
            let v = p && p[x] || {};
            d && (v = {
                min: 0,
                max: 0
            });
            const w = u ? 200 : 1e6
              , N = u ? 40 : 1e7
              , E = {
                type: "inertia",
                velocity: o ? l[x] : 0,
                bounceStiffness: w,
                bounceDamping: N,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...h,
                ...v
            };
            return this.startAxisValueAnimation(x, E)
        }
        );
        return Promise.all(g).then(m)
    }
    startAxisValueAnimation(l, s) {
        const o = this.getAxisMotionValue(l);
        return Xc(this.visualElement, l),
        o.start(Uf(l, o, 0, s, this.visualElement, !1))
    }
    stopAnimation() {
        da(l => this.getAxisMotionValue(l).stop())
    }
    pauseAnimation() {
        da(l => {
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
          , u = o[s];
        return u || this.visualElement.getValue(l, (o.initial ? o.initial[l] : void 0) || 0)
    }
    snapToCursor(l) {
        da(s => {
            const {drag: o} = this.getProps();
            if (!Yo(s, o, this.currentDirection))
                return;
            const {projection: u} = this.visualElement
              , h = this.getAxisMotionValue(s);
            if (u && u.layout) {
                const {min: d, max: m} = u.layout.layoutBox[s];
                h.set(l[s] - at(d, m, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: l, dragConstraints: s} = this.getProps()
          , {projection: o} = this.visualElement;
        if (!Zl(s) || !o || !this.constraints)
            return;
        this.stopAnimation();
        const u = {
            x: 0,
            y: 0
        };
        da(d => {
            const m = this.getAxisMotionValue(d);
            if (m && this.constraints !== !1) {
                const p = m.get();
                u[d] = k2({
                    min: p,
                    max: p
                }, this.constraints[d])
            }
        }
        );
        const {transformTemplate: h} = this.visualElement.getProps();
        this.visualElement.current.style.transform = h ? h({}, "") : "none",
        o.root && o.root.updateScroll(),
        o.updateLayout(),
        this.resolveConstraints(),
        da(d => {
            if (!Yo(d, l, null))
                return;
            const m = this.getAxisMotionValue(d)
              , {min: p, max: g} = this.constraints[d];
            m.set(at(p, g, u[d]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        Y2.set(this.visualElement, this);
        const l = this.visualElement.current
          , s = ri(l, "pointerdown", p => {
            const {drag: g, dragListener: x=!0} = this.getProps();
            g && x && this.start(p)
        }
        )
          , o = () => {
            const {dragConstraints: p} = this.getProps();
            Zl(p) && p.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: u} = this.visualElement
          , h = u.addEventListener("measure", o);
        u && !u.layout && (u.root && u.root.updateScroll(),
        u.updateLayout()),
        nt.read(o);
        const d = yi(window, "resize", () => this.scalePositionWithinConstraints())
          , m = u.addEventListener("didUpdate", ({delta: p, hasLayoutChanged: g}) => {
            this.isDragging && g && (da(x => {
                const v = this.getAxisMotionValue(x);
                v && (this.originPoint[x] += p[x].translate,
                v.set(v.get() + p[x].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            d(),
            s(),
            h(),
            m && m()
        }
    }
    getProps() {
        const l = this.visualElement.getProps()
          , {drag: s=!1, dragDirectionLock: o=!1, dragPropagation: u=!1, dragConstraints: h=!1, dragElastic: d=Zc, dragMomentum: m=!0} = l;
        return {
            ...l,
            drag: s,
            dragDirectionLock: o,
            dragPropagation: u,
            dragConstraints: h,
            dragElastic: d,
            dragMomentum: m
        }
    }
}
function Yo(n, l, s) {
    return (l === !0 || l === n) && (s === null || s === n)
}
function G2(n, l=10) {
    let s = null;
    return Math.abs(n.y) > l ? s = "y" : Math.abs(n.x) > l && (s = "x"),
    s
}
class X2 extends Bn {
    constructor(l) {
        super(l),
        this.removeGroupControls = ma,
        this.removeListeners = ma,
        this.controls = new q2(l)
    }
    mount() {
        const {dragControls: l} = this.node.getProps();
        l && (this.removeGroupControls = l.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || ma
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const mg = n => (l, s) => {
    n && nt.postRender( () => n(l, s))
}
;
class F2 extends Bn {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = ma
    }
    onPointerDown(l) {
        this.session = new p0(l,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: m0(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: l, onPanStart: s, onPan: o, onPanEnd: u} = this.node.getProps();
        return {
            onSessionStart: mg(l),
            onStart: mg(s),
            onMove: o,
            onEnd: (h, d) => {
                delete this.session,
                u && nt.postRender( () => u(h, d))
            }
        }
    }
    mount() {
        this.removePointerDownListener = ri(this.node.current, "pointerdown", l => this.onPointerDown(l))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const Fo = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function pg(n, l) {
    return l.max === l.min ? 0 : n / (l.max - l.min) * 100
}
const li = {
    correct: (n, l) => {
        if (!l.target)
            return n;
        if (typeof n == "string")
            if (we.test(n))
                n = parseFloat(n);
            else
                return n;
        const s = pg(n, l.target.x)
          , o = pg(n, l.target.y);
        return `${s}% ${o}%`
    }
}
  , K2 = {
    correct: (n, {treeScale: l, projectionDelta: s}) => {
        const o = n
          , u = zn.parse(n);
        if (u.length > 5)
            return o;
        const h = zn.createTransformer(n)
          , d = typeof u[0] != "number" ? 1 : 0
          , m = s.x.scale * l.x
          , p = s.y.scale * l.y;
        u[0 + d] /= m,
        u[1 + d] /= p;
        const g = at(m, p, .5);
        return typeof u[2 + d] == "number" && (u[2 + d] /= g),
        typeof u[3 + d] == "number" && (u[3 + d] /= g),
        h(u)
    }
};
class Q2 extends j.Component {
    componentDidMount() {
        const {visualElement: l, layoutGroup: s, switchLayoutGroup: o, layoutId: u} = this.props
          , {projection: h} = l;
        OS(Z2),
        h && (s.group && s.group.add(h),
        o && o.register && u && o.register(h),
        h.root.didUpdate(),
        h.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        h.setOptions({
            ...h.options,
            onExitComplete: () => this.safeToRemove()
        })),
        Fo.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(l) {
        const {layoutDependency: s, visualElement: o, drag: u, isPresent: h} = this.props
          , {projection: d} = o;
        return d && (d.isPresent = h,
        u || l.layoutDependency !== s || s === void 0 || l.isPresent !== h ? d.willUpdate() : this.safeToRemove(),
        l.isPresent !== h && (h ? d.promote() : d.relegate() || nt.postRender( () => {
            const m = d.getStack();
            (!m || !m.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: l} = this.props.visualElement;
        l && (l.root.didUpdate(),
        Tf.postRender( () => {
            !l.currentAnimation && l.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: l, layoutGroup: s, switchLayoutGroup: o} = this.props
          , {projection: u} = l;
        u && (u.scheduleCheckAfterUnmount(),
        s && s.group && s.group.remove(u),
        o && o.deregister && o.deregister(u))
    }
    safeToRemove() {
        const {safeToRemove: l} = this.props;
        l && l()
    }
    render() {
        return null
    }
}
function y0(n) {
    const [l,s] = qy()
      , o = j.useContext(ef);
    return f.jsx(Q2, {
        ...n,
        layoutGroup: o,
        switchLayoutGroup: j.useContext(Zy),
        isPresent: l,
        safeToRemove: s
    })
}
const Z2 = {
    borderRadius: {
        ...li,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: li,
    borderTopRightRadius: li,
    borderBottomLeftRadius: li,
    borderBottomRightRadius: li,
    boxShadow: K2
};
function I2(n, l, s) {
    const o = zt(n) ? n : Wl(n);
    return o.start(Uf("", o, l, s)),
    o.animation
}
const J2 = (n, l) => n.depth - l.depth;
class $2 {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(l) {
        nf(this.children, l),
        this.isDirty = !0
    }
    remove(l) {
        lf(this.children, l),
        this.isDirty = !0
    }
    forEach(l) {
        this.isDirty && this.children.sort(J2),
        this.isDirty = !1,
        this.children.forEach(l)
    }
}
function W2(n, l) {
    const s = Xt.now()
      , o = ({timestamp: u}) => {
        const h = u - s;
        h >= l && (Un(o),
        n(h - l))
    }
    ;
    return nt.setup(o, !0),
    () => Un(o)
}
const x0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , ew = x0.length
  , gg = n => typeof n == "string" ? parseFloat(n) : n
  , yg = n => typeof n == "number" || we.test(n);
function tw(n, l, s, o, u, h) {
    u ? (n.opacity = at(0, s.opacity ?? 1, aw(o)),
    n.opacityExit = at(l.opacity ?? 1, 0, nw(o))) : h && (n.opacity = at(l.opacity ?? 1, s.opacity ?? 1, o));
    for (let d = 0; d < ew; d++) {
        const m = `border${x0[d]}Radius`;
        let p = xg(l, m)
          , g = xg(s, m);
        if (p === void 0 && g === void 0)
            continue;
        p || (p = 0),
        g || (g = 0),
        p === 0 || g === 0 || yg(p) === yg(g) ? (n[m] = Math.max(at(gg(p), gg(g), o), 0),
        (Ra.test(g) || Ra.test(p)) && (n[m] += "%")) : n[m] = g
    }
    (l.rotate || s.rotate) && (n.rotate = at(l.rotate || 0, s.rotate || 0, o))
}
function xg(n, l) {
    return n[l] !== void 0 ? n[l] : n.borderRadius
}
const aw = v0(0, .5, cy)
  , nw = v0(.5, .95, ma);
function v0(n, l, s) {
    return o => o < n ? 0 : o > l ? 1 : s(fi(n, l, o))
}
function vg(n, l) {
    n.min = l.min,
    n.max = l.max
}
function ca(n, l) {
    vg(n.x, l.x),
    vg(n.y, l.y)
}
function bg(n, l) {
    n.translate = l.translate,
    n.scale = l.scale,
    n.originPoint = l.originPoint,
    n.origin = l.origin
}
function Sg(n, l, s, o, u) {
    return n -= l,
    n = Jo(n, 1 / s, o),
    u !== void 0 && (n = Jo(n, 1 / u, o)),
    n
}
function lw(n, l=0, s=1, o=.5, u, h=n, d=n) {
    if (Ra.test(l) && (l = parseFloat(l),
    l = at(d.min, d.max, l / 100) - d.min),
    typeof l != "number")
        return;
    let m = at(h.min, h.max, o);
    n === h && (m -= l),
    n.min = Sg(n.min, l, s, m, u),
    n.max = Sg(n.max, l, s, m, u)
}
function wg(n, l, [s,o,u], h, d) {
    lw(n, l[s], l[o], l[u], l.scale, h, d)
}
const sw = ["x", "scaleX", "originX"]
  , iw = ["y", "scaleY", "originY"];
function jg(n, l, s, o) {
    wg(n.x, l, sw, s ? s.x : void 0, o ? o.x : void 0),
    wg(n.y, l, iw, s ? s.y : void 0, o ? o.y : void 0)
}
function Tg(n) {
    return n.translate === 0 && n.scale === 1
}
function b0(n) {
    return Tg(n.x) && Tg(n.y)
}
function Ng(n, l) {
    return n.min === l.min && n.max === l.max
}
function ow(n, l) {
    return Ng(n.x, l.x) && Ng(n.y, l.y)
}
function Ag(n, l) {
    return Math.round(n.min) === Math.round(l.min) && Math.round(n.max) === Math.round(l.max)
}
function S0(n, l) {
    return Ag(n.x, l.x) && Ag(n.y, l.y)
}
function Eg(n) {
    return Lt(n.x) / Lt(n.y)
}
function Cg(n, l) {
    return n.translate === l.translate && n.scale === l.scale && n.originPoint === l.originPoint
}
class rw {
    constructor() {
        this.members = []
    }
    add(l) {
        nf(this.members, l),
        l.scheduleRender()
    }
    remove(l) {
        if (lf(this.members, l),
        l === this.prevLead && (this.prevLead = void 0),
        l === this.lead) {
            const s = this.members[this.members.length - 1];
            s && this.promote(s)
        }
    }
    relegate(l) {
        const s = this.members.findIndex(u => l === u);
        if (s === 0)
            return !1;
        let o;
        for (let u = s; u >= 0; u--) {
            const h = this.members[u];
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
            const {crossfade: u} = l.options;
            u === !1 && o.hide()
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
function uw(n, l, s) {
    let o = "";
    const u = n.x.translate / l.x
      , h = n.y.translate / l.y
      , d = (s == null ? void 0 : s.z) || 0;
    if ((u || h || d) && (o = `translate3d(${u}px, ${h}px, ${d}px) `),
    (l.x !== 1 || l.y !== 1) && (o += `scale(${1 / l.x}, ${1 / l.y}) `),
    s) {
        const {transformPerspective: g, rotate: x, rotateX: v, rotateY: w, skewX: N, skewY: E} = s;
        g && (o = `perspective(${g}px) ${o}`),
        x && (o += `rotate(${x}deg) `),
        v && (o += `rotateX(${v}deg) `),
        w && (o += `rotateY(${w}deg) `),
        N && (o += `skewX(${N}deg) `),
        E && (o += `skewY(${E}deg) `)
    }
    const m = n.x.scale * l.x
      , p = n.y.scale * l.y;
    return (m !== 1 || p !== 1) && (o += `scale(${m}, ${p})`),
    o || "none"
}
const Ec = ["", "X", "Y", "Z"]
  , cw = {
    visibility: "hidden"
}
  , fw = 1e3;
let dw = 0;
function Cc(n, l, s, o) {
    const {latestValues: u} = l;
    u[n] && (s[n] = u[n],
    l.setStaticValue(n, 0),
    o && (o[n] = 0))
}
function w0(n) {
    if (n.hasCheckedOptimisedAppear = !0,
    n.root === n)
        return;
    const {visualElement: l} = n.options;
    if (!l)
        return;
    const s = l0(l);
    if (window.MotionHasOptimisedAnimation(s, "transform")) {
        const {layout: u, layoutId: h} = n.options;
        window.MotionCancelOptimisedAnimation(s, "transform", nt, !(u || h))
    }
    const {parent: o} = n;
    o && !o.hasCheckedOptimisedAppear && w0(o)
}
function j0({attachResizeListener: n, defaultParent: l, measureScroll: s, checkIsScrollRoot: o, resetTransform: u}) {
    return class {
        constructor(d={}, m=l == null ? void 0 : l()) {
            this.id = dw++,
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
                this.nodes.forEach(pw),
                this.nodes.forEach(bw),
                this.nodes.forEach(Sw),
                this.nodes.forEach(gw)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = d,
            this.root = m ? m.root || m : this,
            this.path = m ? [...m.path, m] : [],
            this.parent = m,
            this.depth = m ? m.depth + 1 : 0;
            for (let p = 0; p < this.path.length; p++)
                this.path[p].shouldResetTransform = !0;
            this.root === this && (this.nodes = new $2)
        }
        addEventListener(d, m) {
            return this.eventHandlers.has(d) || this.eventHandlers.set(d, new rf),
            this.eventHandlers.get(d).add(m)
        }
        notifyListeners(d, ...m) {
            const p = this.eventHandlers.get(d);
            p && p.notify(...m)
        }
        hasListeners(d) {
            return this.eventHandlers.has(d)
        }
        mount(d) {
            if (this.instance)
                return;
            this.isSVG = Yy(d) && !uS(d),
            this.instance = d;
            const {layoutId: m, layout: p, visualElement: g} = this.options;
            if (g && !g.current && g.mount(d),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (p || m) && (this.isLayoutDirty = !0),
            n) {
                let x;
                const v = () => this.root.updateBlockedByResize = !1;
                n(d, () => {
                    this.root.updateBlockedByResize = !0,
                    x && x(),
                    x = W2(v, 250),
                    Fo.hasAnimatedSinceResize && (Fo.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Mg))
                }
                )
            }
            m && this.root.registerSharedNode(m, this),
            this.options.animate !== !1 && g && (m || p) && this.addEventListener("didUpdate", ({delta: x, hasLayoutChanged: v, hasRelativeLayoutChanged: w, layout: N}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const E = this.options.transition || g.getDefaultTransition() || Aw
                  , {onLayoutAnimationStart: _, onLayoutAnimationComplete: M} = g.getProps()
                  , U = !this.targetLayout || !S0(this.targetLayout, N)
                  , P = !v && w;
                if (this.options.layoutRoot || this.resumeFrom || P || v && (U || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0);
                    const B = {
                        ...wf(E, "layout"),
                        onPlay: _,
                        onComplete: M
                    };
                    (g.shouldReduceMotion || this.options.layoutRoot) && (B.delay = 0,
                    B.type = !1),
                    this.startAnimation(B),
                    this.setAnimationOrigin(x, P)
                } else
                    v || Mg(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = N
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
            Un(this.updateProjection)
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
            this.nodes && this.nodes.forEach(ww),
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
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && w0(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let x = 0; x < this.path.length; x++) {
                const v = this.path[x];
                v.shouldResetTransform = !0,
                v.updateScroll("snapshot"),
                v.options.layoutRoot && v.willUpdate(!1)
            }
            const {layoutId: m, layout: p} = this.options;
            if (m === void 0 && !p)
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
                this.nodes.forEach(Dg);
                return
            }
            this.isUpdating || this.nodes.forEach(xw),
            this.isUpdating = !1,
            this.nodes.forEach(vw),
            this.nodes.forEach(hw),
            this.nodes.forEach(mw),
            this.clearAllSnapshots();
            const m = Xt.now();
            _t.delta = nn(0, 1e3 / 60, m - _t.timestamp),
            _t.timestamp = m,
            _t.isProcessing = !0,
            xc.update.process(_t),
            xc.preRender.process(_t),
            xc.render.process(_t),
            _t.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            Tf.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(yw),
            this.sharedNodes.forEach(jw)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            nt.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            nt.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
            this.snapshot && !Lt(this.snapshot.measuredBox.x) && !Lt(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let p = 0; p < this.path.length; p++)
                    this.path[p].updateScroll();
            const d = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = ht(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: m} = this.options;
            m && m.notify("LayoutMeasure", this.layout.layoutBox, d ? d.layoutBox : void 0)
        }
        updateScroll(d="measure") {
            let m = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === d && (m = !1),
            m && this.instance) {
                const p = o(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: d,
                    isRoot: p,
                    offset: s(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : p
                }
            }
        }
        resetTransform() {
            if (!u)
                return;
            const d = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , m = this.projectionDelta && !b0(this.projectionDelta)
              , p = this.getTransformTemplate()
              , g = p ? p(this.latestValues, "") : void 0
              , x = g !== this.prevTransformTemplateValue;
            d && this.instance && (m || ll(this.latestValues) || x) && (u(this.instance, g),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(d=!0) {
            const m = this.measurePageBox();
            let p = this.removeElementScroll(m);
            return d && (p = this.removeTransform(p)),
            Ew(p),
            {
                animationId: this.root.animationId,
                measuredBox: m,
                layoutBox: p,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var g;
            const {visualElement: d} = this.options;
            if (!d)
                return ht();
            const m = d.measureViewportBox();
            if (!(((g = this.scroll) == null ? void 0 : g.wasRoot) || this.path.some(Cw))) {
                const {scroll: x} = this.root;
                x && (Jl(m.x, x.offset.x),
                Jl(m.y, x.offset.y))
            }
            return m
        }
        removeElementScroll(d) {
            var p;
            const m = ht();
            if (ca(m, d),
            (p = this.scroll) != null && p.wasRoot)
                return m;
            for (let g = 0; g < this.path.length; g++) {
                const x = this.path[g]
                  , {scroll: v, options: w} = x;
                x !== this.root && v && w.layoutScroll && (v.wasRoot && ca(m, d),
                Jl(m.x, v.offset.x),
                Jl(m.y, v.offset.y))
            }
            return m
        }
        applyTransform(d, m=!1) {
            const p = ht();
            ca(p, d);
            for (let g = 0; g < this.path.length; g++) {
                const x = this.path[g];
                !m && x.options.layoutScroll && x.scroll && x !== x.root && $l(p, {
                    x: -x.scroll.offset.x,
                    y: -x.scroll.offset.y
                }),
                ll(x.latestValues) && $l(p, x.latestValues)
            }
            return ll(this.latestValues) && $l(p, this.latestValues),
            p
        }
        removeTransform(d) {
            const m = ht();
            ca(m, d);
            for (let p = 0; p < this.path.length; p++) {
                const g = this.path[p];
                if (!g.instance || !ll(g.latestValues))
                    continue;
                Kc(g.latestValues) && g.updateSnapshot();
                const x = ht()
                  , v = g.measurePageBox();
                ca(x, v),
                jg(m, g.latestValues, g.snapshot ? g.snapshot.layoutBox : void 0, x)
            }
            return ll(this.latestValues) && jg(m, this.latestValues),
            m
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
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== _t.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(d=!1) {
            var w;
            const m = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = m.isSharedProjectionDirty);
            const p = !!this.resumingFrom || this !== m;
            if (!(d || p && this.isSharedProjectionDirty || this.isProjectionDirty || (w = this.parent) != null && w.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: x, layoutId: v} = this.options;
            if (!(!this.layout || !(x || v))) {
                if (this.resolvedRelativeTargetAt = _t.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const N = this.getClosestProjectingParent();
                    N && N.layout && this.animationProgress !== 1 ? (this.relativeParent = N,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = ht(),
                    this.relativeTargetOrigin = ht(),
                    ci(this.relativeTargetOrigin, this.layout.layoutBox, N.layout.layoutBox),
                    ca(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = ht(),
                this.targetWithTransforms = ht()),
                this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                M2(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : ca(this.target, this.layout.layoutBox),
                d0(this.target, this.targetDelta)) : ca(this.target, this.layout.layoutBox),
                this.attemptToResolveRelativeTarget)) {
                    this.attemptToResolveRelativeTarget = !1;
                    const N = this.getClosestProjectingParent();
                    N && !!N.resumingFrom == !!this.resumingFrom && !N.options.layoutScroll && N.target && this.animationProgress !== 1 ? (this.relativeParent = N,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = ht(),
                    this.relativeTargetOrigin = ht(),
                    ci(this.relativeTargetOrigin, this.target, N.target),
                    ca(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Kc(this.parent.latestValues) || f0(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var E;
            const d = this.getLead()
              , m = !!this.resumingFrom || this !== d;
            let p = !0;
            if ((this.isProjectionDirty || (E = this.parent) != null && E.isProjectionDirty) && (p = !1),
            m && (this.isSharedProjectionDirty || this.isTransformDirty) && (p = !1),
            this.resolvedRelativeTargetAt === _t.timestamp && (p = !1),
            p)
                return;
            const {layout: g, layoutId: x} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(g || x))
                return;
            ca(this.layoutCorrected, this.layout.layoutBox);
            const v = this.treeScale.x
              , w = this.treeScale.y;
            _2(this.layoutCorrected, this.treeScale, this.path, m),
            d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox,
            d.targetWithTransforms = ht());
            const {target: N} = d;
            if (!N) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (bg(this.prevProjectionDelta.x, this.projectionDelta.x),
            bg(this.prevProjectionDelta.y, this.projectionDelta.y)),
            ui(this.projectionDelta, this.layoutCorrected, N, this.latestValues),
            (this.treeScale.x !== v || this.treeScale.y !== w || !Cg(this.projectionDelta.x, this.prevProjectionDelta.x) || !Cg(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", N))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(d=!0) {
            var m;
            if ((m = this.options.visualElement) == null || m.scheduleRender(),
            d) {
                const p = this.getStack();
                p && p.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Il(),
            this.projectionDelta = Il(),
            this.projectionDeltaWithTransform = Il()
        }
        setAnimationOrigin(d, m=!1) {
            const p = this.snapshot
              , g = p ? p.latestValues : {}
              , x = {
                ...this.latestValues
            }
              , v = Il();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !m;
            const w = ht()
              , N = p ? p.source : void 0
              , E = this.layout ? this.layout.source : void 0
              , _ = N !== E
              , M = this.getStack()
              , U = !M || M.members.length <= 1
              , P = !!(_ && !U && this.options.crossfade === !0 && !this.path.some(Nw));
            this.animationProgress = 0;
            let B;
            this.mixTargetDelta = X => {
                const O = X / 1e3;
                _g(v.x, d.x, O),
                _g(v.y, d.y, O),
                this.setTargetDelta(v),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ci(w, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                Tw(this.relativeTarget, this.relativeTargetOrigin, w, O),
                B && ow(this.relativeTarget, B) && (this.isProjectionDirty = !1),
                B || (B = ht()),
                ca(B, this.relativeTarget)),
                _ && (this.animationValues = x,
                tw(x, g, this.latestValues, O, P, U)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = O
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(d) {
            var m, p, g;
            this.notifyListeners("animationStart"),
            (m = this.currentAnimation) == null || m.stop(),
            (g = (p = this.resumingFrom) == null ? void 0 : p.currentAnimation) == null || g.stop(),
            this.pendingAnimation && (Un(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = nt.update( () => {
                Fo.hasAnimatedSinceResize = !0,
                this.motionValue || (this.motionValue = Wl(0)),
                this.currentAnimation = I2(this.motionValue, [0, 1e3], {
                    ...d,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: x => {
                        this.mixTargetDelta(x),
                        d.onUpdate && d.onUpdate(x)
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
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(fw),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const d = this.getLead();
            let {targetWithTransforms: m, target: p, layout: g, latestValues: x} = d;
            if (!(!m || !p || !g)) {
                if (this !== d && this.layout && g && T0(this.options.animationType, this.layout.layoutBox, g.layoutBox)) {
                    p = this.target || ht();
                    const v = Lt(this.layout.layoutBox.x);
                    p.x.min = d.target.x.min,
                    p.x.max = p.x.min + v;
                    const w = Lt(this.layout.layoutBox.y);
                    p.y.min = d.target.y.min,
                    p.y.max = p.y.min + w
                }
                ca(m, p),
                $l(m, x),
                ui(this.projectionDeltaWithTransform, this.layoutCorrected, m, x)
            }
        }
        registerSharedNode(d, m) {
            this.sharedNodes.has(d) || this.sharedNodes.set(d, new rw),
            this.sharedNodes.get(d).add(m);
            const g = m.options.initialPromotionConfig;
            m.promote({
                transition: g ? g.transition : void 0,
                preserveFollowOpacity: g && g.shouldPreserveFollowOpacity ? g.shouldPreserveFollowOpacity(m) : void 0
            })
        }
        isLead() {
            const d = this.getStack();
            return d ? d.lead === this : !0
        }
        getLead() {
            var m;
            const {layoutId: d} = this.options;
            return d ? ((m = this.getStack()) == null ? void 0 : m.lead) || this : this
        }
        getPrevLead() {
            var m;
            const {layoutId: d} = this.options;
            return d ? (m = this.getStack()) == null ? void 0 : m.prevLead : void 0
        }
        getStack() {
            const {layoutId: d} = this.options;
            if (d)
                return this.root.sharedNodes.get(d)
        }
        promote({needsReset: d, transition: m, preserveFollowOpacity: p}={}) {
            const g = this.getStack();
            g && g.promote(this, p),
            d && (this.projectionDelta = void 0,
            this.needsReset = !0),
            m && this.setOptions({
                transition: m
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
            let m = !1;
            const {latestValues: p} = d;
            if ((p.z || p.rotate || p.rotateX || p.rotateY || p.rotateZ || p.skewX || p.skewY) && (m = !0),
            !m)
                return;
            const g = {};
            p.z && Cc("z", d, g, this.animationValues);
            for (let x = 0; x < Ec.length; x++)
                Cc(`rotate${Ec[x]}`, d, g, this.animationValues),
                Cc(`skew${Ec[x]}`, d, g, this.animationValues);
            d.render();
            for (const x in g)
                d.setStaticValue(x, g[x]),
                this.animationValues && (this.animationValues[x] = g[x]);
            d.scheduleRender()
        }
        getProjectionStyles(d) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return cw;
            const m = {
                visibility: ""
            }
              , p = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                m.opacity = "",
                m.pointerEvents = Xo(d == null ? void 0 : d.pointerEvents) || "",
                m.transform = p ? p(this.latestValues, "") : "none",
                m;
            const g = this.getLead();
            if (!this.projectionDelta || !this.layout || !g.target) {
                const N = {};
                return this.options.layoutId && (N.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                N.pointerEvents = Xo(d == null ? void 0 : d.pointerEvents) || ""),
                this.hasProjected && !ll(this.latestValues) && (N.transform = p ? p({}, "") : "none",
                this.hasProjected = !1),
                N
            }
            const x = g.animationValues || g.latestValues;
            this.applyTransformsToTarget(),
            m.transform = uw(this.projectionDeltaWithTransform, this.treeScale, x),
            p && (m.transform = p(x, m.transform));
            const {x: v, y: w} = this.projectionDelta;
            m.transformOrigin = `${v.origin * 100}% ${w.origin * 100}% 0`,
            g.animationValues ? m.opacity = g === this ? x.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : x.opacityExit : m.opacity = g === this ? x.opacity !== void 0 ? x.opacity : "" : x.opacityExit !== void 0 ? x.opacityExit : 0;
            for (const N in pi) {
                if (x[N] === void 0)
                    continue;
                const {correct: E, applyTo: _, isCSSVariable: M} = pi[N]
                  , U = m.transform === "none" ? x[N] : E(x[N], g);
                if (_) {
                    const P = _.length;
                    for (let B = 0; B < P; B++)
                        m[_[B]] = U
                } else
                    M ? this.options.visualElement.renderState.vars[N] = U : m[N] = U
            }
            return this.options.layoutId && (m.pointerEvents = g === this ? Xo(d == null ? void 0 : d.pointerEvents) || "" : "none"),
            m
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(d => {
                var m;
                return (m = d.currentAnimation) == null ? void 0 : m.stop()
            }
            ),
            this.root.nodes.forEach(Dg),
            this.root.sharedNodes.clear()
        }
    }
}
function hw(n) {
    n.updateLayout()
}
function mw(n) {
    var s;
    const l = ((s = n.resumeFrom) == null ? void 0 : s.snapshot) || n.snapshot;
    if (n.isLead() && n.layout && l && n.hasListeners("didUpdate")) {
        const {layoutBox: o, measuredBox: u} = n.layout
          , {animationType: h} = n.options
          , d = l.source !== n.layout.source;
        h === "size" ? da(v => {
            const w = d ? l.measuredBox[v] : l.layoutBox[v]
              , N = Lt(w);
            w.min = o[v].min,
            w.max = w.min + N
        }
        ) : T0(h, l.layoutBox, o) && da(v => {
            const w = d ? l.measuredBox[v] : l.layoutBox[v]
              , N = Lt(o[v]);
            w.max = w.min + N,
            n.relativeTarget && !n.currentAnimation && (n.isProjectionDirty = !0,
            n.relativeTarget[v].max = n.relativeTarget[v].min + N)
        }
        );
        const m = Il();
        ui(m, o, l.layoutBox);
        const p = Il();
        d ? ui(p, n.applyTransform(u, !0), l.measuredBox) : ui(p, o, l.layoutBox);
        const g = !b0(m);
        let x = !1;
        if (!n.resumeFrom) {
            const v = n.getClosestProjectingParent();
            if (v && !v.resumeFrom) {
                const {snapshot: w, layout: N} = v;
                if (w && N) {
                    const E = ht();
                    ci(E, l.layoutBox, w.layoutBox);
                    const _ = ht();
                    ci(_, o, N.layoutBox),
                    S0(E, _) || (x = !0),
                    v.options.layoutRoot && (n.relativeTarget = _,
                    n.relativeTargetOrigin = E,
                    n.relativeParent = v)
                }
            }
        }
        n.notifyListeners("didUpdate", {
            layout: o,
            snapshot: l,
            delta: p,
            layoutDelta: m,
            hasLayoutChanged: g,
            hasRelativeLayoutChanged: x
        })
    } else if (n.isLead()) {
        const {onExitComplete: o} = n.options;
        o && o()
    }
    n.options.transition = void 0
}
function pw(n) {
    n.parent && (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty),
    n.isSharedProjectionDirty || (n.isSharedProjectionDirty = !!(n.isProjectionDirty || n.parent.isProjectionDirty || n.parent.isSharedProjectionDirty)),
    n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty))
}
function gw(n) {
    n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1
}
function yw(n) {
    n.clearSnapshot()
}
function Dg(n) {
    n.clearMeasurements()
}
function xw(n) {
    n.isLayoutDirty = !1
}
function vw(n) {
    const {visualElement: l} = n.options;
    l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"),
    n.resetTransform()
}
function Mg(n) {
    n.finishAnimation(),
    n.targetDelta = n.relativeTarget = n.target = void 0,
    n.isProjectionDirty = !0
}
function bw(n) {
    n.resolveTargetDelta()
}
function Sw(n) {
    n.calcProjection()
}
function ww(n) {
    n.resetSkewAndRotation()
}
function jw(n) {
    n.removeLeadSnapshot()
}
function _g(n, l, s) {
    n.translate = at(l.translate, 0, s),
    n.scale = at(l.scale, 1, s),
    n.origin = l.origin,
    n.originPoint = l.originPoint
}
function Og(n, l, s, o) {
    n.min = at(l.min, s.min, o),
    n.max = at(l.max, s.max, o)
}
function Tw(n, l, s, o) {
    Og(n.x, l.x, s.x, o),
    Og(n.y, l.y, s.y, o)
}
function Nw(n) {
    return n.animationValues && n.animationValues.opacityExit !== void 0
}
const Aw = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Rg = n => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n)
  , Vg = Rg("applewebkit/") && !Rg("chrome/") ? Math.round : ma;
function Ug(n) {
    n.min = Vg(n.min),
    n.max = Vg(n.max)
}
function Ew(n) {
    Ug(n.x),
    Ug(n.y)
}
function T0(n, l, s) {
    return n === "position" || n === "preserve-aspect" && !D2(Eg(l), Eg(s), .2)
}
function Cw(n) {
    var l;
    return n !== n.root && ((l = n.scroll) == null ? void 0 : l.wasRoot)
}
const Dw = j0({
    attachResizeListener: (n, l) => yi(n, "resize", l),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , Dc = {
    current: void 0
}
  , N0 = j0({
    measureScroll: n => ({
        x: n.scrollLeft,
        y: n.scrollTop
    }),
    defaultParent: () => {
        if (!Dc.current) {
            const n = new Dw({});
            n.mount(window),
            n.setOptions({
                layoutScroll: !0
            }),
            Dc.current = n
        }
        return Dc.current
    }
    ,
    resetTransform: (n, l) => {
        n.style.transform = l !== void 0 ? l : "none"
    }
    ,
    checkIsScrollRoot: n => window.getComputedStyle(n).position === "fixed"
})
  , Mw = {
    pan: {
        Feature: F2
    },
    drag: {
        Feature: X2,
        ProjectionNode: N0,
        MeasureLayout: y0
    }
};
function zg(n, l, s) {
    const {props: o} = n;
    n.animationState && o.whileHover && n.animationState.setActive("whileHover", s === "Start");
    const u = "onHover" + s
      , h = o[u];
    h && nt.postRender( () => h(l, ji(l)))
}
class _w extends Bn {
    mount() {
        const {current: l} = this.node;
        l && (this.unmount = lS(l, (s, o) => (zg(this.node, o, "Start"),
        u => zg(this.node, u, "End"))))
    }
    unmount() {}
}
class Ow extends Bn {
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
        this.unmount = bi(yi(this.node.current, "focus", () => this.onFocus()), yi(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function Bg(n, l, s) {
    const {props: o} = n;
    if (n.current instanceof HTMLButtonElement && n.current.disabled)
        return;
    n.animationState && o.whileTap && n.animationState.setActive("whileTap", s === "Start");
    const u = "onTap" + (s === "End" ? "" : s)
      , h = o[u];
    h && nt.postRender( () => h(l, ji(l)))
}
class Rw extends Bn {
    mount() {
        const {current: l} = this.node;
        l && (this.unmount = rS(l, (s, o) => (Bg(this.node, o, "Start"),
        (u, {success: h}) => Bg(this.node, u, h ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const Ic = new WeakMap
  , Mc = new WeakMap
  , Vw = n => {
    const l = Ic.get(n.target);
    l && l(n)
}
  , Uw = n => {
    n.forEach(Vw)
}
;
function zw({root: n, ...l}) {
    const s = n || document;
    Mc.has(s) || Mc.set(s, {});
    const o = Mc.get(s)
      , u = JSON.stringify(l);
    return o[u] || (o[u] = new IntersectionObserver(Uw,{
        root: n,
        ...l
    })),
    o[u]
}
function Bw(n, l, s) {
    const o = zw(l);
    return Ic.set(n, s),
    o.observe(n),
    () => {
        Ic.delete(n),
        o.unobserve(n)
    }
}
const Lw = {
    some: 0,
    all: 1
};
class kw extends Bn {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: l={}} = this.node.getProps()
          , {root: s, margin: o, amount: u="some", once: h} = l
          , d = {
            root: s ? s.current : void 0,
            rootMargin: o,
            threshold: typeof u == "number" ? u : Lw[u]
        }
          , m = p => {
            const {isIntersecting: g} = p;
            if (this.isInView === g || (this.isInView = g,
            h && !g && this.hasEnteredView))
                return;
            g && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", g);
            const {onViewportEnter: x, onViewportLeave: v} = this.node.getProps()
              , w = g ? x : v;
            w && w(p)
        }
        ;
        return Bw(this.node.current, d, m)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: l, prevProps: s} = this.node;
        ["amount", "margin", "root"].some(Pw(l, s)) && this.startObserver()
    }
    unmount() {}
}
function Pw({viewport: n={}}, {viewport: l={}}={}) {
    return s => n[s] !== l[s]
}
const Hw = {
    inView: {
        Feature: kw
    },
    tap: {
        Feature: Rw
    },
    focus: {
        Feature: Ow
    },
    hover: {
        Feature: _w
    }
}
  , Yw = {
    layout: {
        ProjectionNode: N0,
        MeasureLayout: y0
    }
}
  , Jc = {
    current: null
}
  , A0 = {
    current: !1
};
function qw() {
    if (A0.current = !0,
    !!af)
        if (window.matchMedia) {
            const n = window.matchMedia("(prefers-reduced-motion)")
              , l = () => Jc.current = n.matches;
            n.addListener(l),
            l()
        } else
            Jc.current = !1
}
const Gw = new WeakMap;
function Xw(n, l, s) {
    for (const o in l) {
        const u = l[o]
          , h = s[o];
        if (zt(u))
            n.addValue(o, u);
        else if (zt(h))
            n.addValue(o, Wl(u, {
                owner: n
            }));
        else if (h !== u)
            if (n.hasValue(o)) {
                const d = n.getValue(o);
                d.liveStyle === !0 ? d.jump(u) : d.hasAnimated || d.set(u)
            } else {
                const d = n.getStaticValue(o);
                n.addValue(o, Wl(d !== void 0 ? d : u, {
                    owner: n
                }))
            }
    }
    for (const o in s)
        l[o] === void 0 && n.removeValue(o);
    return l
}
const Lg = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class Fw {
    scrapeMotionValuesFromProps(l, s, o) {
        return {}
    }
    constructor({parent: l, props: s, presenceContext: o, reducedMotionConfig: u, blockInitialAnimation: h, visualState: d}, m={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = bf,
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
            const w = Xt.now();
            this.renderScheduledAt < w && (this.renderScheduledAt = w,
            nt.render(this.render, !1, !0))
        }
        ;
        const {latestValues: p, renderState: g} = d;
        this.latestValues = p,
        this.baseTarget = {
            ...p
        },
        this.initialValues = s.initial ? {
            ...p
        } : {},
        this.renderState = g,
        this.parent = l,
        this.props = s,
        this.presenceContext = o,
        this.depth = l ? l.depth + 1 : 0,
        this.reducedMotionConfig = u,
        this.options = m,
        this.blockInitialAnimation = !!h,
        this.isControllingVariants = ar(s),
        this.isVariantNode = Ky(s),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(l && l.current);
        const {willChange: x, ...v} = this.scrapeMotionValuesFromProps(s, {}, this);
        for (const w in v) {
            const N = v[w];
            p[w] !== void 0 && zt(N) && N.set(p[w], !1)
        }
    }
    mount(l) {
        this.current = l,
        Gw.set(l, this),
        this.projection && !this.projection.instance && this.projection.mount(l),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (s, o) => this.bindToMotionValue(o, s)),
        A0.current || qw(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Jc.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        this.projection && this.projection.unmount(),
        Un(this.notifyUpdate),
        Un(this.render),
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
        const o = ns.has(l);
        o && this.onBindTransform && this.onBindTransform();
        const u = s.on("change", m => {
            this.latestValues[l] = m,
            this.props.onUpdate && nt.preRender(this.notifyUpdate),
            o && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , h = s.on("renderRequest", this.scheduleRender);
        let d;
        window.MotionCheckAppearSync && (d = window.MotionCheckAppearSync(this, l, s)),
        this.valueSubscriptions.set(l, () => {
            u(),
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
        for (l in es) {
            const s = es[l];
            if (!s)
                continue;
            const {isEnabled: o, Feature: u} = s;
            if (!this.features[l] && u && o(this.props) && (this.features[l] = new u(this)),
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
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ht()
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
        for (let o = 0; o < Lg.length; o++) {
            const u = Lg[o];
            this.propEventSubscriptions[u] && (this.propEventSubscriptions[u](),
            delete this.propEventSubscriptions[u]);
            const h = "on" + u
              , d = l[h];
            d && (this.propEventSubscriptions[u] = this.on(u, d))
        }
        this.prevMotionValues = Xw(this, this.scrapeMotionValuesFromProps(l, this.prevProps, this), this.prevMotionValues),
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
        return o === void 0 && s !== void 0 && (o = Wl(s === null ? void 0 : s, {
            owner: this
        }),
        this.addValue(l, o)),
        o
    }
    readValue(l, s) {
        let o = this.latestValues[l] !== void 0 || !this.current ? this.latestValues[l] : this.getBaseTargetFromProps(this.props, l) ?? this.readValueFromInstance(this.current, l, this.options);
        return o != null && (typeof o == "string" && (ey(o) || ay(o)) ? o = parseFloat(o) : !fS(o) && zn.test(s) && (o = By(l, s)),
        this.setBaseTarget(l, zt(o) ? o.get() : o)),
        zt(o) ? o.get() : o
    }
    setBaseTarget(l, s) {
        this.baseTarget[l] = s
    }
    getBaseTarget(l) {
        var h;
        const {initial: s} = this.props;
        let o;
        if (typeof s == "string" || typeof s == "object") {
            const d = Rf(this.props, s, (h = this.presenceContext) == null ? void 0 : h.custom);
            d && (o = d[l])
        }
        if (s && o !== void 0)
            return o;
        const u = this.getBaseTargetFromProps(this.props, l);
        return u !== void 0 && !zt(u) ? u : this.initialValues[l] !== void 0 && o === void 0 ? void 0 : this.baseTarget[l]
    }
    on(l, s) {
        return this.events[l] || (this.events[l] = new rf),
        this.events[l].add(s)
    }
    notify(l, ...s) {
        this.events[l] && this.events[l].notify(...s)
    }
}
class E0 extends Fw {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = W1
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
        zt(l) && (this.childSubscription = l.on("change", s => {
            this.current && (this.current.textContent = `${s}`)
        }
        ))
    }
}
function C0(n, {style: l, vars: s}, o, u) {
    Object.assign(n.style, l, u && u.getProjectionStyles(o));
    for (const h in s)
        n.style.setProperty(h, s[h])
}
function Kw(n) {
    return window.getComputedStyle(n)
}
class Qw extends E0 {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = C0
    }
    readValueFromInstance(l, s) {
        var o;
        if (ns.has(s))
            return (o = this.projection) != null && o.isProjecting ? Lc(s) : x1(l, s);
        {
            const u = Kw(l)
              , h = (ff(s) ? u.getPropertyValue(s) : u[s]) || 0;
            return typeof h == "string" ? h.trim() : h
        }
    }
    measureInstanceViewportBox(l, {transformPagePoint: s}) {
        return h0(l, s)
    }
    build(l, s, o) {
        Mf(l, s, o.transformTemplate)
    }
    scrapeMotionValuesFromProps(l, s, o) {
        return Vf(l, s, o)
    }
}
const D0 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function Zw(n, l, s, o) {
    C0(n, l, void 0, o);
    for (const u in l.attrs)
        n.setAttribute(D0.has(u) ? u : Df(u), l.attrs[u])
}
class Iw extends E0 {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = ht
    }
    getBaseTargetFromProps(l, s) {
        return l[s]
    }
    readValueFromInstance(l, s) {
        if (ns.has(s)) {
            const o = zy(s);
            return o && o.default || 0
        }
        return s = D0.has(s) ? s : Df(s),
        l.getAttribute(s)
    }
    scrapeMotionValuesFromProps(l, s, o) {
        return n0(l, s, o)
    }
    build(l, s, o) {
        Wy(l, s, this.isSVGTag, o.transformTemplate, o.style)
    }
    renderInstance(l, s, o, u) {
        Zw(l, s, o, u)
    }
    mount(l) {
        this.isSVGTag = t0(l.tagName),
        super.mount(l)
    }
}
const Jw = (n, l) => Of(n) ? new Iw(l) : new Qw(l,{
    allowProjection: n !== j.Fragment
})
  , $w = ZS({
    ...S2,
    ...Hw,
    ...Mw,
    ...Yw
}, Jw)
  , ue = bS($w);
function Ww() {
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
function M0() {
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
function _0() {
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
function ej() {
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
function kg() {
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
function O0() {
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
const R0 = j.createContext({
    language: "en",
    setLanguage: () => {}
    ,
    translations: {}
})
  , tj = ({children: n}) => {
    const [l,s] = j.useState( () => localStorage.getItem("language") || "en")
      , [o,u] = j.useState({});
    return j.useEffect( () => {
        const d = JSON.parse(localStorage.getItem("initialData") || "{}").languages || {};
        u(d)
    }
    , [l]),
    j.useEffect( () => {
        localStorage.setItem("language", l)
    }
    , [l]),
    f.jsx(R0.Provider, {
        value: {
            language: l,
            setLanguage: s,
            translations: o
        },
        children: n
    })
}
  , ut = () => j.useContext(R0)
  , aj = () => {
    var h, d;
    const {language: n, setLanguage: l, translations: s} = ut()
      , [o,u] = j.useState([]);
    return j.useEffect( () => {
        const m = localStorage.getItem("initialData");
        if (m)
            try {
                const p = JSON.parse(m);
                u(p == null ? void 0 : p.notice)
            } catch (p) {
                console.error("Failed to parse initialData:", p)
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
                href: "https://www.youtube.com/watch?v=ckFsAX727LM",
                target: "_blank",
                className: "flex hover-scale justify-center items-center gap-1 text-white text-xs mb-6 cursor-pointer hover:font-bold",
                children: [f.jsx(Ww, {}), " ", (d = s == null ? void 0 : s.video_guide) == null ? void 0 : d[n]]
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
        }), f.jsx(ue.div, {
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
                children: o.map( (m, p) => f.jsxs("div", {
                    className: m.is_warning === 1 ? "text-red-400 text-justify border-[0.2px] p-2 rounded bg-red-500/5 capitalize" : m.is_warning === 2 ? "text-yellow-400 text-justify border-[0.2px] p-2 rounded bg-yellow-500/5 capitalize" : "text-white text-justify capitalize",
                    children: ["* ", m[n]]
                }, p))
            })
        })]
    })
}
;
var fa = {}, Pg;
function nj() {
    if (Pg)
        return fa;
    Pg = 1;
    var n = fa && fa.__createBinding || (Object.create ? function(w, N, E, _) {
        _ === void 0 && (_ = E);
        var M = Object.getOwnPropertyDescriptor(N, E);
        (!M || ("get"in M ? !N.__esModule : M.writable || M.configurable)) && (M = {
            enumerable: !0,
            get: function() {
                return N[E]
            }
        }),
        Object.defineProperty(w, _, M)
    }
    : function(w, N, E, _) {
        _ === void 0 && (_ = E),
        w[_] = N[E]
    }
    )
      , l = fa && fa.__setModuleDefault || (Object.create ? function(w, N) {
        Object.defineProperty(w, "default", {
            enumerable: !0,
            value: N
        })
    }
    : function(w, N) {
        w.default = N
    }
    )
      , s = fa && fa.__importStar || function(w) {
        if (w && w.__esModule)
            return w;
        var N = {};
        if (w != null)
            for (var E in w)
                E !== "default" && Object.prototype.hasOwnProperty.call(w, E) && n(N, w, E);
        return l(N, w),
        N
    }
    ;
    Object.defineProperty(fa, "__esModule", {
        value: !0
    }),
    fa.useTurnstile = void 0;
    const o = s($o())
      , u = typeof globalThis < "u" ? globalThis : window;
    let h = typeof u.turnstile < "u" ? "ready" : "unloaded", d, m;
    const p = new Promise( (w, N) => {
        m = {
            resolve: w,
            reject: N
        },
        h === "ready" && w(void 0)
    }
    );
    {
        const w = "cf__reactTurnstileOnLoad"
          , N = "https://challenges.cloudflare.com/turnstile/v0/api.js";
        d = () => {
            if (h === "unloaded") {
                h = "loading",
                u[w] = () => {
                    m.resolve(),
                    h = "ready",
                    delete u[w]
                }
                ;
                const E = `${N}?onload=${w}&render=explicit`
                  , _ = document.createElement("script");
                _.src = E,
                _.async = !0,
                _.addEventListener("error", () => {
                    m.reject("Failed to load Turnstile."),
                    delete u[w]
                }
                ),
                document.head.appendChild(_)
            }
            return p
        }
    }
    function g({id: w, className: N, style: E, sitekey: _, action: M, cData: U, theme: P, language: B, tabIndex: X, responseField: O, responseFieldName: q, size: I, fixedSize: Q, retry: re, retryInterval: fe, refreshExpired: he, appearance: me, execution: ie, userRef: se, onVerify: F, onSuccess: T, onLoad: D, onError: Y, onExpire: J, onTimeout: S, onAfterInteractive: V, onBeforeInteractive: te, onUnsupported: W}) {
        const le = (0,
        o.useRef)(null)
          , ee = (0,
        o.useState)({
            onVerify: F,
            onSuccess: T,
            onLoad: D,
            onError: Y,
            onExpire: J,
            onTimeout: S,
            onAfterInteractive: V,
            onBeforeInteractive: te,
            onUnsupported: W
        })[0]
          , ae = se ?? le
          , de = Q ? {
            width: I === "compact" ? "130px" : I === "flexible" ? "100%" : "300px",
            height: I === "compact" ? "120px" : "65px",
            ...E
        } : E;
        return (0,
        o.useEffect)( () => {
            if (!ae.current)
                return;
            let ne = !1
              , Ve = "";
            return (async () => {
                var Oe, Re;
                if (h !== "ready")
                    try {
                        await d()
                    } catch (Ne) {
                        (Oe = ee.onError) === null || Oe === void 0 || Oe.call(ee, Ne);
                        return
                    }
                if (ne || !ae.current)
                    return;
                let De;
                const lt = {
                    sitekey: _,
                    action: M,
                    cData: U,
                    theme: P,
                    language: B,
                    tabindex: X,
                    "response-field": O,
                    "response-field-name": q,
                    size: I,
                    retry: re,
                    "retry-interval": fe,
                    "refresh-expired": he,
                    appearance: me,
                    execution: ie,
                    callback: (Ne, Ie) => {
                        var vt, et;
                        (vt = ee.onVerify) === null || vt === void 0 || vt.call(ee, Ne, De),
                        (et = ee.onSuccess) === null || et === void 0 || et.call(ee, Ne, Ie, De)
                    }
                    ,
                    "error-callback": Ne => {
                        var Ie;
                        return (Ie = ee.onError) === null || Ie === void 0 ? void 0 : Ie.call(ee, Ne, De)
                    }
                    ,
                    "expired-callback": Ne => {
                        var Ie;
                        return (Ie = ee.onExpire) === null || Ie === void 0 ? void 0 : Ie.call(ee, Ne, De)
                    }
                    ,
                    "timeout-callback": () => {
                        var Ne;
                        return (Ne = ee.onTimeout) === null || Ne === void 0 ? void 0 : Ne.call(ee, De)
                    }
                    ,
                    "after-interactive-callback": () => {
                        var Ne;
                        return (Ne = ee.onAfterInteractive) === null || Ne === void 0 ? void 0 : Ne.call(ee, De)
                    }
                    ,
                    "before-interactive-callback": () => {
                        var Ne;
                        return (Ne = ee.onBeforeInteractive) === null || Ne === void 0 ? void 0 : Ne.call(ee, De)
                    }
                    ,
                    "unsupported-callback": () => {
                        var Ne;
                        return (Ne = ee.onUnsupported) === null || Ne === void 0 ? void 0 : Ne.call(ee, De)
                    }
                };
                Ve = window.turnstile.render(ae.current, lt),
                De = x(Ve),
                (Re = ee.onLoad) === null || Re === void 0 || Re.call(ee, Ve, De)
            }
            )(),
            () => {
                ne = !0,
                Ve && window.turnstile.remove(Ve)
            }
        }
        , [_, M, U, P, B, X, O, q, I, re, fe, he, me, ie]),
        (0,
        o.useEffect)( () => {
            ee.onVerify = F,
            ee.onSuccess = T,
            ee.onLoad = D,
            ee.onError = Y,
            ee.onExpire = J,
            ee.onTimeout = S,
            ee.onAfterInteractive = V,
            ee.onBeforeInteractive = te,
            ee.onUnsupported = W
        }
        , [F, T, D, Y, J, S, V, te, W]),
        o.default.createElement("div", {
            ref: ae,
            id: w,
            className: N,
            style: de
        })
    }
    fa.default = g;
    function x(w) {
        return {
            execute: N => window.turnstile.execute(w, N),
            reset: () => window.turnstile.reset(w),
            getResponse: () => window.turnstile.getResponse(w),
            isExpired: () => window.turnstile.isExpired(w)
        }
    }
    function v() {
        const [w,N] = (0,
        o.useState)(h);
        return (0,
        o.useEffect)( () => {
            h !== "ready" && p.then( () => N(h))
        }
        , []),
        u.turnstile
    }
    return fa.useTurnstile = v,
    fa
}
var lj = nj();
const nr = Jg(lj)
  , sj = "";
async function qe(n, l={}) {
    var s;
    try {
        const {method: o="GET", headers: u={}, body: h, token: d} = l
          , m = typeof FormData < "u" && h instanceof FormData
          , p = {
            ...m ? {} : {
                "Content-Type": "application/json"
            },
            ...u
        };
        d && (p.Authorization = `Bearer ${d}`);
        const g = `${sj}${n}`
          , x = await fetch(g, {
            method: o,
            headers: p,
            body: m ? h : h ? JSON.stringify(h) : void 0
        })
          , v = (s = x.headers.get("content-type")) == null ? void 0 : s.includes("application/json");
        if (!x.ok) {
            const w = v ? await x.json() : await x.text();
            throw {
                status: x.status,
                message: (w == null ? void 0 : w.message) || w || "Unknown error"
            }
        }
        return v ? x.json() : {}
    } catch (o) {
        if ((o == null ? void 0 : o.status) === 200)
            localStorage.clear(),
            window.location.href = "/";
        else
            throw (o == null ? void 0 : o.status) === 429 ? new Error("Too many requests. Please try again later.") : (o == null ? void 0 : o.status) === 500 ? new Error("Internal server error. Please try again later.") : (o == null ? void 0 : o.status) === 403 ? new Error("Forbidden. You do not have permission to access this resource.") : (o == null ? void 0 : o.status) === 404 ? new Error("Resource not found. Please check the URL and try again.") : (o == null ? void 0 : o.status) === 408 ? new Error("Request timed out. Please try again later.") : (o == null ? void 0 : o.status) === 504 ? new Error("Gateway timeout. Please try again later.") : (o == null ? void 0 : o.status) === 502 ? new Error("Bad gateway. Please try again later.") : (o == null ? void 0 : o.status) === 200 ? new Error("Session expired. Please log in again.") : o
    }
    return {}
}
function ij() {
    var s, o, u, h;
    const {language: n, translations: l} = ut();
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
                            href: "/user-manual",
                            target: "_blank",
                            className: "text-blue-600 hover:text-blue-800 font-semibold",
                            children: (o = l == null ? void 0 : l.user_manual) == null ? void 0 : o[n]
                        }), " ", (u = l == null ? void 0 : l.and) == null ? void 0 : u[n], " ", f.jsx("a", {
                            href: "/faq",
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
const oj = ({message: n, type: l="info", onClose: s}) => {
    const [o,u] = j.useState(!0)
      , [h,d] = j.useState(!1)
      , [m,p] = j.useState(5)
      , g = () => {
        u(!1),
        s && s()
    }
    ;
    if (j.useEffect( () => {
        let v;
        return m > 0 ? v = setTimeout( () => {
            p(w => w - 1)
        }
        , 1e3) : d(!0),
        () => {
            v && clearTimeout(v)
        }
    }
    , [m]),
    !o)
        return null;
    const x = {
        success: "bg-green-500 text-white",
        error: "bg-red-500 text-white",
        info: "bg-blue-500 text-white",
        warning: "bg-yellow-400 text-black"
    };
    return f.jsx(Gy, {
        children: o && f.jsx(ue.div, {
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
                className: `flex justify-center flex-col h-1/2 rounded-xl shadow-2xl p-6 max-w-md w-full mx-4 text-center ${x[l]}`,
                children: [f.jsxs("div", {
                    className: "flex flex-col justify-center items-center mb-4",
                    children: [f.jsx(O0, {}), f.jsx("p", {
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
                    children: ["Please wait ", m, " seconds..."]
                })]
            })
        })
    })
}
  , Ot = ({message: n, type: l="info", onClose: s}) => {
    const [o,u] = j.useState(!0)
      , h = () => {
        u(!1),
        n === "Session expired. Please log in again." && (localStorage.clear(),
        window.location.href = "/"),
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
    return f.jsx(Gy, {
        children: o && f.jsx(ue.div, {
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
                    children: [f.jsx(O0, {}), f.jsx("p", {
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
  , rj = "/assets/sib_logo-BmWytU9-.png"
  , uj = "/assets/sslwireless_logo-D0EMAZ9R.svg"
  , V0 = "/assets/page_bg-BE0EAheg.jpg"
  , cj = "/assets/SSLCommerzLogo-DJTqXlmx.svg"
  , fj = "/assets/s1-MHDV2aZI.png"
  , dj = "/assets/s2-COpR8ElD.png"
  , hj = "/assets/s3-B5ZIY7eR.png"
  , mj = "/assets/s4-DvnniDTH.png"
  , pj = "/assets/s5-C2itbxu7.png"
  , gj = "/assets/s6-CB2zSBV3.png"
  , yj = "/assets/s7-DpXz0lxe.png"
  , xj = "/assets/s8-sncFXjEz.png"
  , vj = "/assets/s9-DlwMK9mk.png"
  , bj = "/assets/s10-hjxn6Maz.png"
  , Sj = "/assets/s11-BM9fO2O7.png"
  , wj = ({message: n}) => f.jsx("div", {
    className: "fixed h-screen bg-cover bg-center inset-0 z-50 flex items-center justify-center ",
    style: {
        backgroundImage: `url(${V0})`
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
  , U0 = () => f.jsxs("div", {
    className: "fixed inset-0 z-50 flex flex-col items-center justify-center bg-transparent bg-opacity-40 backdrop-blur-sm",
    children: [f.jsx("div", {
        className: "animate-spin rounded-full h-16 w-16 border-t-4 border-blue-400 border-opacity-60"
    }), f.jsx("div", {
        className: "text-green-700 text-lg my-4 font-medium",
        children: "Checking..."
    })]
})
  , jj = ({setStep: n}) => {
    var M, U, P, B, X;
    const l = "0x4AAAAAABpNUpzYeppBoYpe"
      , {language: s, translations: o} = ut()
      , [u,h] = j.useState("")
      , [d,m] = j.useState(!1)
      , [p,g] = j.useState(null)
      , [x,v] = j.useState("");
    let w = u.trim() !== "" && u.length >= 11 && x !== "";
    const N = O => {
        const q = O.target.value.replace(/\D/g, "");
        h(q)
    }
      , E = {
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
      , _ = async () => {
        var O;
        m(!0);
        try {
            w = !1;
            const q = await qe("/api/v2/mobile-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: s
                },
                body: {
                    mobile_no: u,
                    captcha_token: x,
                    problem: "abc",
                    answer: 1
                }
            });
            q.status_code === 200 ? (localStorage.setItem("user_phone", u),
            n((O = q.data) != null && O.registered ? 3 : 2)) : g({
                message: q == null ? void 0 : q.message,
                type: "error"
            })
        } catch (q) {
            const I = q
              , Q = typeof I == "object" && (I != null && I.message) ? I.message : "Failed. Please try again later.";
            g({
                message: Q,
                type: "error"
            })
        } finally {
            w = !0,
            m(!1)
        }
    }
    ;
    return f.jsxs(ue.div, {
        className: "bg-white w-full p-4",
        variants: E,
        initial: "hidden",
        animate: "visible",
        children: [p && f.jsx(Ot, {
            message: p.message,
            type: p.type,
            onClose: () => g(null)
        }), f.jsxs("p", {
            className: "text-xs",
            children: [(M = o == null ? void 0 : o.lblInputLoginMobile) == null ? void 0 : M[s], " ", f.jsx("span", {
                className: "text-red-600 text-[10px]",
                children: (U = o == null ? void 0 : o.lblInputLoginMobileMsg) == null ? void 0 : U[s]
            })]
        }), f.jsx("input", {
            type: "tel",
            id: "phone",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-sm focus:ring-0 focus:border-slate-400 duration-300 border-[1.5px] focus:outline-0 block w-full p-2.5 my-2",
            placeholder: (P = o == null ? void 0 : o.lblInputLoginMobile) == null ? void 0 : P[s],
            autoComplete: "off",
            onCopy: O => O.preventDefault(),
            onPaste: O => O.preventDefault(),
            onCut: O => O.preventDefault(),
            inputMode: "numeric",
            pattern: "[0-9]*",
            maxLength: 11,
            value: u,
            onChange: N
        }), f.jsx("div", {
            className: "sm:col-span-3",
            children: f.jsx(nr, {
                sitekey: l,
                onVerify: O => v(O)
            })
        }), f.jsx(ue.button, {
            type: "button",
            disabled: d || !w || !x,
            whileTap: {
                scale: .95
            },
            whileHover: {
                scale: !d && w && x ? 1.03 : 1
            },
            className: `text-white mb-2 h-8 rounded-lg  text-xs w-full duration-300 sm:w-auto px-2 py-2 text-center transition 
          ${d || !w || !x ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer"}`,
            onClick: !d && w && x ? _ : void 0,
            children: d ? ((B = o == null ? void 0 : o.checking) == null ? void 0 : B[s]) + "..." : (X = o == null ? void 0 : o.lblProceed) == null ? void 0 : X[s]
        })]
    })
}
  , Tj = ({setStep: n}) => {
    var lt, Ne, Ie, vt, et, sn, Va, Ta, kt, Ua, ga, za, Ba, Ft, ct, be, Je, ya, La, on, xa, ea, Rt, oe, ye, Qe, $e;
    const {language: l, translations: s} = ut()
      , [o,u] = j.useState(null)
      , [h,d] = j.useState(null)
      , [m,p] = j.useState("")
      , [g,x] = j.useState(null)
      , [v,w] = j.useState(null)
      , [N,E] = j.useState("")
      , [_,M] = j.useState("")
      , [U,P] = j.useState("")
      , [B,X] = j.useState("")
      , [O,q] = j.useState(!1)
      , [I,Q] = j.useState("")
      , [re,fe] = j.useState(!1)
      , [he,me] = j.useState(!1)
      , [ie,se] = j.useState(!1)
      , [F,T] = j.useState(!1)
      , [D,Y] = j.useState(0)
      , [J,S] = j.useState(!1);
    j.useEffect( () => {
        const $ = localStorage.getItem("user_phone");
        $ && p($)
    }
    , []);
    const V = j.useRef(null)
      , te = () => {
        var $;
        ($ = V.current) == null || $.click()
    }
      , W = $ => {
        var mt;
        const je = (mt = $.target.files) == null ? void 0 : mt[0];
        if (je) {
            if (je.size > 2 * 1024 * 1024) {
                u({
                    message: "File size must be less than 2MB",
                    type: "error"
                });
                return
            }
            if (!["image/jpeg", "image/jpg", "image/png"].includes(je.type)) {
                u({
                    message: "Please select a JPG, PNG, or JPEG file",
                    type: "error"
                });
                return
            }
            x(je),
            w(URL.createObjectURL(je))
        }
    }
      , le = $ => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($.trim())
      , ee = g && m.length >= 11 && N.trim() !== "" && le(_) && U.trim() !== "" && B.trim() !== "" && U === B
      , ae = async () => {
        try {
            T(!0);
            const $ = new FormData;
            $.append("photo", g),
            $.append("mobile_no", m),
            $.append("full_name", N),
            $.append("email", _),
            $.append("password", U),
            $.append("password_confirmation", B),
            $.append("resend", "0");
            const je = await qe("/api/v2/registration", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: $
            });
            je.status_code === 200 ? n(6) : u({
                message: (je == null ? void 0 : je.message) || "Registration failed",
                type: "error"
            })
        } catch ($) {
            const je = $
              , mt = typeof je == "object" && (je != null && je.message) ? je.message : "Failed. Please try again later."
              , Pt = typeof je == "object" && typeof je.status == "number" ? je.status : 200;
            (Pt === 200 || Pt === 200) && (u({
                message: mt,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            u({
                message: mt,
                type: "error"
            })
        } finally {
            T(!1)
        }
    }
      , de = _.trim() !== "" && le(_)
      , ne = async () => {
        try {
            me(!0);
            const $ = await qe("/api/v2/registration-email-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    email: _
                }
            });
            $.status_code === 200 ? q(!0) : u({
                message: $ == null ? void 0 : $.message,
                type: "error"
            })
        } catch ($) {
            const je = $
              , mt = typeof je == "object" && (je != null && je.message) ? je.message : "Failed. Please try again later."
              , Pt = typeof je == "object" && typeof je.status == "number" ? je.status : 200;
            Pt === 200 || Pt === 200 ? (d({
                message: mt,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)) : u({
                message: mt,
                type: "error"
            })
        } finally {
            me(!1)
        }
    }
      , Ve = I.trim() !== "" && I.length >= 6
      , Oe = async () => {
        try {
            se(!0);
            const $ = await qe("/api/v2/registration-email-otp-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    email: _,
                    otp: I
                }
            });
            $.status_code === 200 ? fe(!0) : u({
                message: $ == null ? void 0 : $.message,
                type: "error"
            })
        } catch ($) {
            const je = $
              , mt = typeof je == "object" && (je != null && je.message) ? je.message : "Failed. Please try again later."
              , Pt = typeof je == "object" && typeof je.status == "number" ? je.status : 200;
            Pt === 200 || Pt === 200 ? (d({
                message: mt,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)) : u({
                message: mt,
                type: "error"
            })
        } finally {
            se(!1)
        }
    }
    ;
    j.useEffect( () => {
        let $ = null;
        return J && D > 0 ? $ = setInterval( () => {
            Y(je => je - 1)
        }
        , 1e3) : D === 0 && S(!1),
        () => {
            $ && clearInterval($)
        }
    }
    , [D, J]);
    const Re = () => {
        ne(),
        Y(30),
        S(!0)
    }
      , De = {
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
    return f.jsxs(ue.div, {
        className: "bg-white w-full p-4",
        variants: De,
        initial: "hidden",
        animate: "visible",
        children: [o && f.jsx(Ot, {
            message: o.message,
            type: o.type,
            onClose: () => u(null)
        }), h && f.jsx(oj, {
            message: h.message,
            type: h.type,
            onClose: () => u(null)
        }), f.jsxs("p", {
            className: "text-xs mb-2 uppercase",
            children: [(lt = s == null ? void 0 : s.lblInputRegPhotoUpload) == null ? void 0 : lt[l], " ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (Ne = s == null ? void 0 : s.lblInputRegPhotoSize) == null ? void 0 : Ne[l]]
            })]
        }), f.jsx("div", {
            className: "relative w-24 h-24 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors bg-white flex items-center justify-center overflow-hidden",
            onClick: te,
            children: g ? f.jsx("img", {
                src: v || "/placeholder.svg",
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
            ref: V,
            type: "file",
            accept: "image/jpeg,image/jpg,image/png",
            onChange: W,
            className: "hidden"
        }), f.jsxs("p", {
            className: "text-xs mt-4 uppercase",
            children: [(Ie = s == null ? void 0 : s.lblInputRegMobile) == null ? void 0 : Ie[l], " ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (vt = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : vt[l]]
            })]
        }), f.jsx("input", {
            type: "tel",
            id: "phone",
            autoComplete: "off",
            onCopy: $ => $.preventDefault(),
            onPaste: $ => $.preventDefault(),
            onCut: $ => $.preventDefault(),
            disabled: !0,
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-blue-400 focus:border-[0.1px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (et = s == null ? void 0 : s.lblInputRegMobile) == null ? void 0 : et[l],
            inputMode: "numeric",
            pattern: "[0-9]*",
            maxLength: 11,
            value: m,
            onChange: $ => p($.target.value)
        }), f.jsxs("p", {
            className: "text-xs mt-4 uppercase",
            children: [(sn = s == null ? void 0 : s.lblInputRegName) == null ? void 0 : sn[l], " ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (Va = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : Va[l]]
            })]
        }), f.jsx("input", {
            type: "text",
            id: "name",
            autoComplete: "off",
            onCopy: $ => $.preventDefault(),
            onPaste: $ => $.preventDefault(),
            onCut: $ => $.preventDefault(),
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (Ta = s == null ? void 0 : s.lblInputRegName) == null ? void 0 : Ta[l],
            onChange: $ => E($.target.value),
            value: N
        }), f.jsxs("p", {
            className: "text-xs mt-4 uppercase",
            children: [(kt = s == null ? void 0 : s.lblInputEmail) == null ? void 0 : kt[l], "  ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (Ua = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : Ua[l]]
            })]
        }), f.jsx("input", {
            type: "email",
            id: "email",
            autoComplete: "off",
            onCopy: $ => $.preventDefault(),
            onPaste: $ => $.preventDefault(),
            onCut: $ => $.preventDefault(),
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (ga = s == null ? void 0 : s.lblInputEmail) == null ? void 0 : ga[l],
            onChange: $ => M($.target.value),
            value: _
        }), re && f.jsx("p", {
            className: "text-xs text-green-500 mt-1",
            children: (za = s == null ? void 0 : s.emailSuccessfullyVerified) == null ? void 0 : za[l]
        }), !O && f.jsx("button", {
            type: "button",
            onClick: de && !he ? Re : void 0,
            disabled: !de || he,
            className: `text-xs font-medium rounded px-2 py-1.5 mr-2 mb-2 transition-colors duration-200
                  ${!de || he ? "text-gray-400 bg-gray-300 cursor-not-allowed" : "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 cursor-pointer"}`,
            children: he ? (Ba = s == null ? void 0 : s.checking) == null ? void 0 : Ba[l] : (Ft = s == null ? void 0 : s.verify_email) == null ? void 0 : Ft[l]
        }), de && O && !re && f.jsx("button", {
            onClick: Re,
            disabled: J,
            className: `text-xs font-medium rounded px-2 py-1.5 mr-2 mb-2 transition-colors duration-200
              ${J ? "text-gray-400 bg-gray-300 cursor-not-allowed" : "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 cursor-pointer"}`,
            children: J ? ((ct = s == null ? void 0 : s.resendOtp) == null ? void 0 : ct[l]) + ` ${D}s` : (be = s == null ? void 0 : s.resendOtp) == null ? void 0 : be[l]
        }), O && !re && f.jsxs(f.Fragment, {
            children: [f.jsxs("p", {
                className: "text-xs text-blue-500 mt-4",
                children: [(Je = s == null ? void 0 : s.otp_message) == null ? void 0 : Je[l], "  ", " ", f.jsxs("span", {
                    className: "text-red-600 text-[10px]",
                    children: ["*", (ya = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : ya[l]]
                })]
            }), f.jsx("input", {
                type: "text",
                id: "otp",
                autoComplete: "off",
                onCopy: $ => $.preventDefault(),
                onPaste: $ => $.preventDefault(),
                onCut: $ => $.preventDefault(),
                className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
                placeholder: "Enter OTP",
                maxLength: 6,
                onChange: $ => Q($.target.value),
                value: I
            }), f.jsx("button", {
                type: "button",
                onClick: Ve && !ie ? Oe : void 0,
                disabled: !Ve || ie,
                className: `text-xs font-medium rounded px-2 py-1.5 mr-2 mb-2 transition-colors duration-200
                  ${!Ve || ie ? "text-gray-400 bg-gray-300 cursor-not-allowed" : "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 cursor-pointer"}`,
                children: ie ? (La = s == null ? void 0 : s.checking) == null ? void 0 : La[l] : (on = s == null ? void 0 : s.verifyOtp) == null ? void 0 : on[l]
            })]
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(xa = s == null ? void 0 : s.lblInputPassword) == null ? void 0 : xa[l], "  ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (ea = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : ea[l]]
            })]
        }), f.jsx("input", {
            type: "password",
            id: "password",
            disabled: !re,
            autoComplete: "off",
            onCopy: $ => $.preventDefault(),
            onPaste: $ => $.preventDefault(),
            onCut: $ => $.preventDefault(),
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: "********",
            onChange: $ => P($.target.value),
            value: U
        }), U.length > 0 && U.length < 6 && f.jsx("p", {
            className: "text-red-500 text-[11px] mb-2",
            children: (Rt = s == null ? void 0 : s.passwordMinLengthMsg) == null ? void 0 : Rt[l]
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(oe = s == null ? void 0 : s.lblInputRePassword) == null ? void 0 : oe[l], " ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (ye = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : ye[l]]
            })]
        }), f.jsx("input", {
            type: "password",
            id: "confirmPassword",
            autoComplete: "off",
            onCopy: $ => $.preventDefault(),
            onPaste: $ => $.preventDefault(),
            onCut: $ => $.preventDefault(),
            disabled: !re,
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: "********",
            onChange: $ => X($.target.value),
            value: B
        }), f.jsx(ue.button, {
            type: "button",
            disabled: !ee || F,
            whileTap: {
                scale: .95
            },
            className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
            ${!ee || F ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838]"}
            `,
            onClick: !F && ee ? ae : void 0,
            children: F ? (Qe = s == null ? void 0 : s.checking) == null ? void 0 : Qe[l] : ($e = s == null ? void 0 : s.lblProceed) == null ? void 0 : $e[l]
        })]
    })
}
  , Nj = ({setStep: n}) => {
    var N, E, _, M, U, P, B;
    const {language: l, translations: s} = ut()
      , [o,u] = j.useState("")
      , [h,d] = j.useState(!1)
      , [m,p] = j.useState(null)
      , g = o.trim() !== "" && o.length >= 6
      , x = async () => {
        var X, O;
        d(!0);
        try {
            const q = localStorage.getItem("user_phone")
              , I = await qe("/api/v2/login", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    mobile_no: q,
                    password: o
                }
            });
            I.status_code === 200 ? (localStorage.setItem("user_email", JSON.stringify((X = I == null ? void 0 : I.data) == null ? void 0 : X.email)),
            localStorage.setItem("user_pwd", o),
            n((O = I.data) != null && O.email_confirmed ? 100 : 4)) : p({
                message: I == null ? void 0 : I.message,
                type: "error"
            })
        } catch (q) {
            const I = q
              , Q = typeof I == "object" && (I != null && I.message) ? I.message : "Failed. Please try again later."
              , re = typeof I == "object" && typeof I.status == "number" ? I.status : 200;
            (re === 200 || re === 200) && (p({
                message: Q,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            p({
                message: Q,
                type: "error"
            })
        } finally {
            d(!1)
        }
    }
      , v = async () => {
        n(7)
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
    return f.jsxs(ue.div, {
        className: "bg-white w-full p-4",
        variants: w,
        initial: "hidden",
        animate: "visible",
        children: [m && f.jsx(Ot, {
            message: m.message,
            type: m.type,
            onClose: () => p(null)
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(N = s == null ? void 0 : s.lblInputPassword) == null ? void 0 : N[l], " ", f.jsx("span", {
                className: "text-red-600 text-[10px]",
                children: (E = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : E[l]
            })]
        }), f.jsx("input", {
            type: "password",
            id: "password",
            autoComplete: "off",
            onCopy: X => X.preventDefault(),
            onPaste: X => X.preventDefault(),
            onCut: X => X.preventDefault(),
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-sm focus:ring-0 focus:border-slate-400 duration-300 border-[1.5px] focus:outline-0 block w-full p-2.5 my-2",
            placeholder: (_ = s == null ? void 0 : s.lblInputPassword) == null ? void 0 : _[l],
            value: o,
            onChange: X => u(X.target.value)
        }), f.jsxs("div", {
            children: [f.jsx(ue.button, {
                type: "button",
                whileTap: {
                    scale: .95
                },
                className: "text-white mb-2 mt-2 mr-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition bg-gray-400 hover:bg-[#218838] focus:ring-[#218838] cursor-pointer",
                onClick: () => n(1),
                children: (M = s == null ? void 0 : s.back) == null ? void 0 : M[l]
            }), f.jsx(ue.button, {
                type: "button",
                disabled: h || !g,
                whileTap: {
                    scale: .95
                },
                className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
         ${h || !g ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer"}`,
                onClick: !h && g ? x : void 0,
                children: h ? (U = s == null ? void 0 : s.checking) == null ? void 0 : U[l] : (P = s == null ? void 0 : s.lblProceed) == null ? void 0 : P[l]
            })]
        }), f.jsx("span", {
            className: "text-xs cursor-pointer text-blue-600 mt-2",
            onClick: v,
            children: ((B = s == null ? void 0 : s.lblInputForgotPassword) == null ? void 0 : B[l]) ?? "Forgot password ?"
        })]
    })
}
  , z0 = n => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.trim())
  , Aj = ({setStep: n}) => {
    var w, N, E, _, M, U;
    const {language: l, translations: s} = ut()
      , [o,u] = j.useState("")
      , [h,d] = j.useState("")
      , [m,p] = j.useState(null);
    j.useEffect( () => {
        const P = localStorage.getItem("user_email");
        if (P)
            try {
                const B = JSON.parse(P);
                d(B)
            } catch {
                d(P)
            }
    }
    , []);
    const g = o.trim() !== "" && z0(o)
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
      , v = async () => {
        try {
            const P = await qe("/api/v2/login-email-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    email: o
                }
            });
            P.status_code === 200 ? n(5) : p({
                message: P == null ? void 0 : P.message,
                type: "error"
            })
        } catch (P) {
            const B = P
              , X = typeof B == "object" && (B != null && B.message) ? B.message : "Failed. Please try again later."
              , O = typeof B == "object" && typeof B.status == "number" ? B.status : 200;
            (O === 200 || O === 200) && (p({
                message: X,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            p({
                message: X,
                type: "error"
            })
        }
    }
    ;
    return f.jsxs(ue.div, {
        className: "bg-white w-full p-4",
        variants: x,
        initial: "hidden",
        animate: "visible",
        children: [m && f.jsx(Ot, {
            message: m.message,
            type: m.type,
            onClose: () => p(null)
        }), f.jsxs("p", {
            className: "text-xs",
            children: [(w = s == null ? void 0 : s.lblAuthFullEmail) == null ? void 0 : w[l], " (", h, ")"]
        }), f.jsx("p", {
            className: "text-xs my-1",
            children: (N = s == null ? void 0 : s.lblAuthFullEmail2) == null ? void 0 : N[l]
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(E = s == null ? void 0 : s.lblInputRegEmail) == null ? void 0 : E[l], " ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (_ = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : _[l]]
            })]
        }), f.jsx("input", {
            type: "email",
            id: "phone",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (M = s == null ? void 0 : s.lblInputRegEmail) == null ? void 0 : M[l],
            value: o,
            onChange: P => u(P.target.value),
            autoComplete: "off",
            onCopy: P => P.preventDefault(),
            onPaste: P => P.preventDefault(),
            onCut: P => P.preventDefault()
        }), f.jsx(ue.button, {
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
            onClick: g ? v : void 0,
            children: (U = s == null ? void 0 : s.lblProceed) == null ? void 0 : U[l]
        })]
    })
}
;
$g();
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
var Vn;
(function(n) {
    n.Pop = "POP",
    n.Push = "PUSH",
    n.Replace = "REPLACE"
}
)(Vn || (Vn = {}));
const Hg = "popstate";
function Ej(n) {
    n === void 0 && (n = {});
    function l(o, u) {
        let {pathname: h, search: d, hash: m} = o.location;
        return $c("", {
            pathname: h,
            search: d,
            hash: m
        }, u.state && u.state.usr || null, u.state && u.state.key || "default")
    }
    function s(o, u) {
        return typeof u == "string" ? u : L0(u)
    }
    return Dj(l, s, null, n)
}
function xt(n, l) {
    if (n === !1 || n === null || typeof n > "u")
        throw new Error(l)
}
function B0(n, l) {
    if (!n) {
        typeof console < "u" && console.warn(l);
        try {
            throw new Error(l)
        } catch {}
    }
}
function Cj() {
    return Math.random().toString(36).substr(2, 8)
}
function Yg(n, l) {
    return {
        usr: n.state,
        key: n.key,
        idx: l
    }
}
function $c(n, l, s, o) {
    return s === void 0 && (s = null),
    xi({
        pathname: typeof n == "string" ? n : n.pathname,
        search: "",
        hash: ""
    }, typeof l == "string" ? ls(l) : l, {
        state: s,
        key: l && l.key || o || Cj()
    })
}
function L0(n) {
    let {pathname: l="/", search: s="", hash: o=""} = n;
    return s && s !== "?" && (l += s.charAt(0) === "?" ? s : "?" + s),
    o && o !== "#" && (l += o.charAt(0) === "#" ? o : "#" + o),
    l
}
function ls(n) {
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
function Dj(n, l, s, o) {
    o === void 0 && (o = {});
    let {window: u=document.defaultView, v5Compat: h=!1} = o
      , d = u.history
      , m = Vn.Pop
      , p = null
      , g = x();
    g == null && (g = 0,
    d.replaceState(xi({}, d.state, {
        idx: g
    }), ""));
    function x() {
        return (d.state || {
            idx: null
        }).idx
    }
    function v() {
        m = Vn.Pop;
        let M = x()
          , U = M == null ? null : M - g;
        g = M,
        p && p({
            action: m,
            location: _.location,
            delta: U
        })
    }
    function w(M, U) {
        m = Vn.Push;
        let P = $c(_.location, M, U);
        g = x() + 1;
        let B = Yg(P, g)
          , X = _.createHref(P);
        try {
            d.pushState(B, "", X)
        } catch (O) {
            if (O instanceof DOMException && O.name === "DataCloneError")
                throw O;
            u.location.assign(X)
        }
        h && p && p({
            action: m,
            location: _.location,
            delta: 1
        })
    }
    function N(M, U) {
        m = Vn.Replace;
        let P = $c(_.location, M, U);
        g = x();
        let B = Yg(P, g)
          , X = _.createHref(P);
        d.replaceState(B, "", X),
        h && p && p({
            action: m,
            location: _.location,
            delta: 0
        })
    }
    function E(M) {
        let U = u.location.origin !== "null" ? u.location.origin : u.location.href
          , P = typeof M == "string" ? M : L0(M);
        return P = P.replace(/ $/, "%20"),
        xt(U, "No window.location.(origin|href) available to create URL for href: " + P),
        new URL(P,U)
    }
    let _ = {
        get action() {
            return m
        },
        get location() {
            return n(u, d)
        },
        listen(M) {
            if (p)
                throw new Error("A history only accepts one active listener");
            return u.addEventListener(Hg, v),
            p = M,
            () => {
                u.removeEventListener(Hg, v),
                p = null
            }
        },
        createHref(M) {
            return l(u, M)
        },
        createURL: E,
        encodeLocation(M) {
            let U = E(M);
            return {
                pathname: U.pathname,
                search: U.search,
                hash: U.hash
            }
        },
        push: w,
        replace: N,
        go(M) {
            return d.go(M)
        }
    };
    return _
}
var qg;
(function(n) {
    n.data = "data",
    n.deferred = "deferred",
    n.redirect = "redirect",
    n.error = "error"
}
)(qg || (qg = {}));
function Mj(n, l, s) {
    return s === void 0 && (s = "/"),
    _j(n, l, s)
}
function _j(n, l, s, o) {
    let u = typeof l == "string" ? ls(l) : l
      , h = H0(u.pathname || "/", s);
    if (h == null)
        return null;
    let d = k0(n);
    Oj(d);
    let m = null;
    for (let p = 0; m == null && p < d.length; ++p) {
        let g = Gj(h);
        m = Hj(d[p], g)
    }
    return m
}
function k0(n, l, s, o) {
    l === void 0 && (l = []),
    s === void 0 && (s = []),
    o === void 0 && (o = "");
    let u = (h, d, m) => {
        let p = {
            relativePath: m === void 0 ? h.path || "" : m,
            caseSensitive: h.caseSensitive === !0,
            childrenIndex: d,
            route: h
        };
        p.relativePath.startsWith("/") && (xt(p.relativePath.startsWith(o), 'Absolute route path "' + p.relativePath + '" nested under path ' + ('"' + o + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        p.relativePath = p.relativePath.slice(o.length));
        let g = ul([o, p.relativePath])
          , x = s.concat(p);
        h.children && h.children.length > 0 && (xt(h.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + g + '".')),
        k0(h.children, l, x, g)),
        !(h.path == null && !h.index) && l.push({
            path: g,
            score: kj(g, h.index),
            routesMeta: x
        })
    }
    ;
    return n.forEach( (h, d) => {
        var m;
        if (h.path === "" || !((m = h.path) != null && m.includes("?")))
            u(h, d);
        else
            for (let p of P0(h.path))
                u(h, d, p)
    }
    ),
    l
}
function P0(n) {
    let l = n.split("/");
    if (l.length === 0)
        return [];
    let[s,...o] = l
      , u = s.endsWith("?")
      , h = s.replace(/\?$/, "");
    if (o.length === 0)
        return u ? [h, ""] : [h];
    let d = P0(o.join("/"))
      , m = [];
    return m.push(...d.map(p => p === "" ? h : [h, p].join("/"))),
    u && m.push(...d),
    m.map(p => n.startsWith("/") && p === "" ? "/" : p)
}
function Oj(n) {
    n.sort( (l, s) => l.score !== s.score ? s.score - l.score : Pj(l.routesMeta.map(o => o.childrenIndex), s.routesMeta.map(o => o.childrenIndex)))
}
const Rj = /^:[\w-]+$/
  , Vj = 3
  , Uj = 2
  , zj = 1
  , Bj = 10
  , Lj = -2
  , Gg = n => n === "*";
function kj(n, l) {
    let s = n.split("/")
      , o = s.length;
    return s.some(Gg) && (o += Lj),
    l && (o += Uj),
    s.filter(u => !Gg(u)).reduce( (u, h) => u + (Rj.test(h) ? Vj : h === "" ? zj : Bj), o)
}
function Pj(n, l) {
    return n.length === l.length && n.slice(0, -1).every( (o, u) => o === l[u]) ? n[n.length - 1] - l[l.length - 1] : 0
}
function Hj(n, l, s) {
    let {routesMeta: o} = n
      , u = {}
      , h = "/"
      , d = [];
    for (let m = 0; m < o.length; ++m) {
        let p = o[m]
          , g = m === o.length - 1
          , x = h === "/" ? l : l.slice(h.length) || "/"
          , v = Yj({
            path: p.relativePath,
            caseSensitive: p.caseSensitive,
            end: g
        }, x)
          , w = p.route;
        if (!v)
            return null;
        Object.assign(u, v.params),
        d.push({
            params: u,
            pathname: ul([h, v.pathname]),
            pathnameBase: Qj(ul([h, v.pathnameBase])),
            route: w
        }),
        v.pathnameBase !== "/" && (h = ul([h, v.pathnameBase]))
    }
    return d
}
function Yj(n, l) {
    typeof n == "string" && (n = {
        path: n,
        caseSensitive: !1,
        end: !0
    });
    let[s,o] = qj(n.path, n.caseSensitive, n.end)
      , u = l.match(s);
    if (!u)
        return null;
    let h = u[0]
      , d = h.replace(/(.)\/+$/, "$1")
      , m = u.slice(1);
    return {
        params: o.reduce( (g, x, v) => {
            let {paramName: w, isOptional: N} = x;
            if (w === "*") {
                let _ = m[v] || "";
                d = h.slice(0, h.length - _.length).replace(/(.)\/+$/, "$1")
            }
            const E = m[v];
            return N && !E ? g[w] = void 0 : g[w] = (E || "").replace(/%2F/g, "/"),
            g
        }
        , {}),
        pathname: h,
        pathnameBase: d,
        pattern: n
    }
}
function qj(n, l, s) {
    l === void 0 && (l = !1),
    s === void 0 && (s = !0),
    B0(n === "*" || !n.endsWith("*") || n.endsWith("/*"), 'Route path "' + n + '" will be treated as if it were ' + ('"' + n.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + n.replace(/\*$/, "/*") + '".'));
    let o = []
      , u = "^" + n.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (d, m, p) => (o.push({
        paramName: m,
        isOptional: p != null
    }),
    p ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return n.endsWith("*") ? (o.push({
        paramName: "*"
    }),
    u += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? u += "\\/*$" : n !== "" && n !== "/" && (u += "(?:(?=\\/|$))"),
    [new RegExp(u,l ? void 0 : "i"), o]
}
function Gj(n) {
    try {
        return n.split("/").map(l => decodeURIComponent(l).replace(/\//g, "%2F")).join("/")
    } catch (l) {
        return B0(!1, 'The URL path "' + n + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + l + ").")),
        n
    }
}
function H0(n, l) {
    if (l === "/")
        return n;
    if (!n.toLowerCase().startsWith(l.toLowerCase()))
        return null;
    let s = l.endsWith("/") ? l.length - 1 : l.length
      , o = n.charAt(s);
    return o && o !== "/" ? null : n.slice(s) || "/"
}
function Xj(n, l) {
    l === void 0 && (l = "/");
    let {pathname: s, search: o="", hash: u=""} = typeof n == "string" ? ls(n) : n;
    return {
        pathname: s ? s.startsWith("/") ? s : Fj(s, l) : l,
        search: Zj(o),
        hash: Ij(u)
    }
}
function Fj(n, l) {
    let s = l.replace(/\/+$/, "").split("/");
    return n.split("/").forEach(u => {
        u === ".." ? s.length > 1 && s.pop() : u !== "." && s.push(u)
    }
    ),
    s.length > 1 ? s.join("/") : "/"
}
function _c(n, l, s, o) {
    return "Cannot include a '" + n + "' character in a manually specified " + ("`to." + l + "` field [" + JSON.stringify(o) + "].  Please separate it out to the ") + ("`to." + s + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function Kj(n) {
    return n.filter( (l, s) => s === 0 || l.route.path && l.route.path.length > 0)
}
function Y0(n, l) {
    let s = Kj(n);
    return l ? s.map( (o, u) => u === s.length - 1 ? o.pathname : o.pathnameBase) : s.map(o => o.pathnameBase)
}
function q0(n, l, s, o) {
    o === void 0 && (o = !1);
    let u;
    typeof n == "string" ? u = ls(n) : (u = xi({}, n),
    xt(!u.pathname || !u.pathname.includes("?"), _c("?", "pathname", "search", u)),
    xt(!u.pathname || !u.pathname.includes("#"), _c("#", "pathname", "hash", u)),
    xt(!u.search || !u.search.includes("#"), _c("#", "search", "hash", u)));
    let h = n === "" || u.pathname === "", d = h ? "/" : u.pathname, m;
    if (d == null)
        m = s;
    else {
        let v = l.length - 1;
        if (!o && d.startsWith("..")) {
            let w = d.split("/");
            for (; w[0] === ".."; )
                w.shift(),
                v -= 1;
            u.pathname = w.join("/")
        }
        m = v >= 0 ? l[v] : "/"
    }
    let p = Xj(u, m)
      , g = d && d !== "/" && d.endsWith("/")
      , x = (h || d === ".") && s.endsWith("/");
    return !p.pathname.endsWith("/") && (g || x) && (p.pathname += "/"),
    p
}
const ul = n => n.join("/").replace(/\/\/+/g, "/")
  , Qj = n => n.replace(/\/+$/, "").replace(/^\/*/, "/")
  , Zj = n => !n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n
  , Ij = n => !n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n;
function Jj(n) {
    return n != null && typeof n.status == "number" && typeof n.statusText == "string" && typeof n.internal == "boolean" && "data"in n
}
const G0 = ["post", "put", "patch", "delete"];
new Set(G0);
const $j = ["get", ...G0];
new Set($j);
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
function vi() {
    return vi = Object.assign ? Object.assign.bind() : function(n) {
        for (var l = 1; l < arguments.length; l++) {
            var s = arguments[l];
            for (var o in s)
                Object.prototype.hasOwnProperty.call(s, o) && (n[o] = s[o])
        }
        return n
    }
    ,
    vi.apply(this, arguments)
}
const zf = j.createContext(null)
  , Wj = j.createContext(null)
  , Ti = j.createContext(null)
  , lr = j.createContext(null)
  , Ln = j.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , X0 = j.createContext(null);
function Ni() {
    return j.useContext(lr) != null
}
function sr() {
    return Ni() || xt(!1),
    j.useContext(lr).location
}
function F0(n) {
    j.useContext(Ti).static || j.useLayoutEffect(n)
}
function pa() {
    let {isDataRoute: n} = j.useContext(Ln);
    return n ? hT() : eT()
}
function eT() {
    Ni() || xt(!1);
    let n = j.useContext(zf)
      , {basename: l, future: s, navigator: o} = j.useContext(Ti)
      , {matches: u} = j.useContext(Ln)
      , {pathname: h} = sr()
      , d = JSON.stringify(Y0(u, s.v7_relativeSplatPath))
      , m = j.useRef(!1);
    return F0( () => {
        m.current = !0
    }
    ),
    j.useCallback(function(g, x) {
        if (x === void 0 && (x = {}),
        !m.current)
            return;
        if (typeof g == "number") {
            o.go(g);
            return
        }
        let v = q0(g, JSON.parse(d), h, x.relative === "path");
        n == null && l !== "/" && (v.pathname = v.pathname === "/" ? l : ul([l, v.pathname])),
        (x.replace ? o.replace : o.push)(v, x.state, x)
    }, [l, o, d, h, n])
}
function tT() {
    let {matches: n} = j.useContext(Ln)
      , l = n[n.length - 1];
    return l ? l.params : {}
}
function aT(n, l) {
    return nT(n, l)
}
function nT(n, l, s, o) {
    Ni() || xt(!1);
    let {navigator: u} = j.useContext(Ti)
      , {matches: h} = j.useContext(Ln)
      , d = h[h.length - 1]
      , m = d ? d.params : {};
    d && d.pathname;
    let p = d ? d.pathnameBase : "/";
    d && d.route;
    let g = sr(), x;
    if (l) {
        var v;
        let M = typeof l == "string" ? ls(l) : l;
        p === "/" || (v = M.pathname) != null && v.startsWith(p) || xt(!1),
        x = M
    } else
        x = g;
    let w = x.pathname || "/"
      , N = w;
    if (p !== "/") {
        let M = p.replace(/^\//, "").split("/");
        N = "/" + w.replace(/^\//, "").split("/").slice(M.length).join("/")
    }
    let E = Mj(n, {
        pathname: N
    })
      , _ = rT(E && E.map(M => Object.assign({}, M, {
        params: Object.assign({}, m, M.params),
        pathname: ul([p, u.encodeLocation ? u.encodeLocation(M.pathname).pathname : M.pathname]),
        pathnameBase: M.pathnameBase === "/" ? p : ul([p, u.encodeLocation ? u.encodeLocation(M.pathnameBase).pathname : M.pathnameBase])
    })), h, s, o);
    return l && _ ? j.createElement(lr.Provider, {
        value: {
            location: vi({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, x),
            navigationType: Vn.Pop
        }
    }, _) : _
}
function lT() {
    let n = dT()
      , l = Jj(n) ? n.status + " " + n.statusText : n instanceof Error ? n.message : JSON.stringify(n)
      , s = n instanceof Error ? n.stack : null
      , u = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return j.createElement(j.Fragment, null, j.createElement("h2", null, "Unexpected Application Error!"), j.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, l), s ? j.createElement("pre", {
        style: u
    }, s) : null, null)
}
const sT = j.createElement(lT, null);
class iT extends j.Component {
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
        return this.state.error !== void 0 ? j.createElement(Ln.Provider, {
            value: this.props.routeContext
        }, j.createElement(X0.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function oT(n) {
    let {routeContext: l, match: s, children: o} = n
      , u = j.useContext(zf);
    return u && u.static && u.staticContext && (s.route.errorElement || s.route.ErrorBoundary) && (u.staticContext._deepestRenderedBoundaryId = s.route.id),
    j.createElement(Ln.Provider, {
        value: l
    }, o)
}
function rT(n, l, s, o) {
    var u;
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
      , m = (u = s) == null ? void 0 : u.errors;
    if (m != null) {
        let x = d.findIndex(v => v.route.id && (m == null ? void 0 : m[v.route.id]) !== void 0);
        x >= 0 || xt(!1),
        d = d.slice(0, Math.min(d.length, x + 1))
    }
    let p = !1
      , g = -1;
    if (s && o && o.v7_partialHydration)
        for (let x = 0; x < d.length; x++) {
            let v = d[x];
            if ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (g = x),
            v.route.id) {
                let {loaderData: w, errors: N} = s
                  , E = v.route.loader && w[v.route.id] === void 0 && (!N || N[v.route.id] === void 0);
                if (v.route.lazy || E) {
                    p = !0,
                    g >= 0 ? d = d.slice(0, g + 1) : d = [d[0]];
                    break
                }
            }
        }
    return d.reduceRight( (x, v, w) => {
        let N, E = !1, _ = null, M = null;
        s && (N = m && v.route.id ? m[v.route.id] : void 0,
        _ = v.route.errorElement || sT,
        p && (g < 0 && w === 0 ? (mT("route-fallback"),
        E = !0,
        M = null) : g === w && (E = !0,
        M = v.route.hydrateFallbackElement || null)));
        let U = l.concat(d.slice(0, w + 1))
          , P = () => {
            let B;
            return N ? B = _ : E ? B = M : v.route.Component ? B = j.createElement(v.route.Component, null) : v.route.element ? B = v.route.element : B = x,
            j.createElement(oT, {
                match: v,
                routeContext: {
                    outlet: x,
                    matches: U,
                    isDataRoute: s != null
                },
                children: B
            })
        }
        ;
        return s && (v.route.ErrorBoundary || v.route.errorElement || w === 0) ? j.createElement(iT, {
            location: s.location,
            revalidation: s.revalidation,
            component: _,
            error: N,
            children: P(),
            routeContext: {
                outlet: null,
                matches: U,
                isDataRoute: !0
            }
        }) : P()
    }
    , null)
}
var K0 = function(n) {
    return n.UseBlocker = "useBlocker",
    n.UseRevalidator = "useRevalidator",
    n.UseNavigateStable = "useNavigate",
    n
}(K0 || {})
  , Q0 = function(n) {
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
}(Q0 || {});
function uT(n) {
    let l = j.useContext(zf);
    return l || xt(!1),
    l
}
function cT(n) {
    let l = j.useContext(Wj);
    return l || xt(!1),
    l
}
function fT(n) {
    let l = j.useContext(Ln);
    return l || xt(!1),
    l
}
function Z0(n) {
    let l = fT()
      , s = l.matches[l.matches.length - 1];
    return s.route.id || xt(!1),
    s.route.id
}
function dT() {
    var n;
    let l = j.useContext(X0)
      , s = cT()
      , o = Z0();
    return l !== void 0 ? l : (n = s.errors) == null ? void 0 : n[o]
}
function hT() {
    let {router: n} = uT(K0.UseNavigateStable)
      , l = Z0(Q0.UseNavigateStable)
      , s = j.useRef(!1);
    return F0( () => {
        s.current = !0
    }
    ),
    j.useCallback(function(u, h) {
        h === void 0 && (h = {}),
        s.current && (typeof u == "number" ? n.navigate(u) : n.navigate(u, vi({
            fromRouteId: l
        }, h)))
    }, [n, l])
}
const Xg = {};
function mT(n, l, s) {
    Xg[n] || (Xg[n] = !0)
}
function pT(n, l) {
    n == null || n.v7_startTransition,
    n == null || n.v7_relativeSplatPath
}
function I0(n) {
    let {to: l, replace: s, state: o, relative: u} = n;
    Ni() || xt(!1);
    let {future: h, static: d} = j.useContext(Ti)
      , {matches: m} = j.useContext(Ln)
      , {pathname: p} = sr()
      , g = pa()
      , x = q0(l, Y0(m, h.v7_relativeSplatPath), p, u === "path")
      , v = JSON.stringify(x);
    return j.useEffect( () => g(JSON.parse(v), {
        replace: s,
        state: o,
        relative: u
    }), [g, v, u, s, o]),
    null
}
function Rn(n) {
    xt(!1)
}
function gT(n) {
    let {basename: l="/", children: s=null, location: o, navigationType: u=Vn.Pop, navigator: h, static: d=!1, future: m} = n;
    Ni() && xt(!1);
    let p = l.replace(/^\/*/, "/")
      , g = j.useMemo( () => ({
        basename: p,
        navigator: h,
        static: d,
        future: vi({
            v7_relativeSplatPath: !1
        }, m)
    }), [p, m, h, d]);
    typeof o == "string" && (o = ls(o));
    let {pathname: x="/", search: v="", hash: w="", state: N=null, key: E="default"} = o
      , _ = j.useMemo( () => {
        let M = H0(x, p);
        return M == null ? null : {
            location: {
                pathname: M,
                search: v,
                hash: w,
                state: N,
                key: E
            },
            navigationType: u
        }
    }
    , [p, x, v, w, N, E, u]);
    return _ == null ? null : j.createElement(Ti.Provider, {
        value: g
    }, j.createElement(lr.Provider, {
        children: s,
        value: _
    }))
}
function Fg(n) {
    let {children: l, location: s} = n;
    return aT(Wc(l), s)
}
new Promise( () => {}
);
function Wc(n, l) {
    l === void 0 && (l = []);
    let s = [];
    return j.Children.forEach(n, (o, u) => {
        if (!j.isValidElement(o))
            return;
        let h = [...l, u];
        if (o.type === j.Fragment) {
            s.push.apply(s, Wc(o.props.children, h));
            return
        }
        o.type !== Rn && xt(!1),
        !o.props.index || !o.props.children || xt(!1);
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
        o.props.children && (d.children = Wc(o.props.children, h)),
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
const yT = "6";
try {
    window.__reactRouterVersion = yT
} catch {}
const xT = "startTransition"
  , Kg = ub[xT];
function vT(n) {
    let {basename: l, children: s, future: o, window: u} = n
      , h = j.useRef();
    h.current == null && (h.current = Ej({
        window: u,
        v5Compat: !0
    }));
    let d = h.current
      , [m,p] = j.useState({
        action: d.action,
        location: d.location
    })
      , {v7_startTransition: g} = o || {}
      , x = j.useCallback(v => {
        g && Kg ? Kg( () => p(v)) : p(v)
    }
    , [p, g]);
    return j.useLayoutEffect( () => d.listen(x), [d, x]),
    j.useEffect( () => pT(o), [o]),
    j.createElement(gT, {
        basename: l,
        children: s,
        location: m.location,
        navigationType: m.action,
        navigator: d,
        future: o
    })
}
var Qg;
(function(n) {
    n.UseScrollRestoration = "useScrollRestoration",
    n.UseSubmit = "useSubmit",
    n.UseSubmitFetcher = "useSubmitFetcher",
    n.UseFetcher = "useFetcher",
    n.useViewTransitionState = "useViewTransitionState"
}
)(Qg || (Qg = {}));
var Zg;
(function(n) {
    n.UseFetcher = "useFetcher",
    n.UseFetchers = "useFetchers",
    n.UseScrollRestoration = "useScrollRestoration"
}
)(Zg || (Zg = {}));
const bT = ({setStep: n}) => {
    var q, I, Q, re, fe, he, me, ie, se;
    const {language: l, translations: s} = ut()
      , o = pa()
      , [u,h] = j.useState(!1)
      , [d,m] = j.useState("")
      , [p,g] = j.useState("")
      , x = d.trim() !== "" && d.length >= 6
      , [v,w] = j.useState(null)
      , [N,E] = j.useState(30)
      , [_,M] = j.useState(!0)
      , [U,P] = j.useState(!1)
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
    j.useEffect( () => {
        const F = localStorage.getItem("user_email");
        F && g(F)
    }
    , []);
    const X = async () => {
        h(!0);
        try {
            const F = await qe("/api/v2/login-email-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    email: p
                }
            });
            F.status_code === 200 ? n(5) : w({
                message: F == null ? void 0 : F.message,
                type: "error"
            })
        } catch (F) {
            const T = F
              , D = typeof T == "object" && (T != null && T.message) ? T.message : "Failed. Please try again later."
              , Y = typeof T == "object" && typeof T.status == "number" ? T.status : 200;
            (Y === 200 || Y === 200) && (w({
                message: D,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            w({
                message: D,
                type: "error"
            })
        }
    }
    ;
    j.useEffect( () => {
        let F;
        return _ && N > 0 && (F = setInterval( () => {
            E(T => T - 1)
        }
        , 1e3)),
        N === 0 && _ && (clearInterval(F),
        M(!1),
        P(!0)),
        () => clearInterval(F)
    }
    , [N, _]);
    const O = async () => {
        var F, T, D, Y, J;
        try {
            h(!0);
            const S = await qe("/api/v2/login-email-otp-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    otp: d
                }
            });
            S.status_code === 200 ? (localStorage.setItem("access_token", (F = S == null ? void 0 : S.data) == null ? void 0 : F.access_token),
            window.dispatchEvent(new Event("tokenUpdate")),
            localStorage.setItem("auth_name", (T = S == null ? void 0 : S.data) == null ? void 0 : T.name),
            localStorage.setItem("auth_email", (D = S == null ? void 0 : S.data) == null ? void 0 : D.email),
            localStorage.setItem("auth_phone", (Y = S == null ? void 0 : S.data) == null ? void 0 : Y.mobile_no),
            localStorage.setItem("auth_photo", (J = S == null ? void 0 : S.data) == null ? void 0 : J.profile_image),
            localStorage.removeItem("user_pwd"),
            o("/application")) : w({
                message: S == null ? void 0 : S.message,
                type: "error"
            })
        } catch (S) {
            const V = S
              , te = typeof V == "object" && (V != null && V.message) ? V.message : "Failed. Please try again later."
              , W = typeof V == "object" && typeof V.status == "number" ? V.status : 200;
            (W === 200 || W === 200) && (w({
                message: te,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            w({
                message: te,
                type: "error"
            })
        } finally {
            h(!1)
        }
    }
    ;
    return f.jsxs(ue.div, {
        className: "bg-white w-full p-4",
        variants: B,
        initial: "hidden",
        animate: "visible",
        children: [v && f.jsx(Ot, {
            message: v.message,
            type: v.type,
            onClose: () => w(null)
        }), f.jsxs("p", {
            className: "text-[10px]",
            children: [(q = s == null ? void 0 : s.lblAuthOtp1) == null ? void 0 : q[l], " (", p, ")"]
        }), f.jsx("p", {
            className: "text-[10px]",
            children: (I = s == null ? void 0 : s.lblAuthOtp2) == null ? void 0 : I[l]
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(Q = s == null ? void 0 : s.lblInputAuthOtp) == null ? void 0 : Q[l], " ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: [" *", (re = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : re[l]]
            })]
        }), f.jsx("input", {
            type: "text",
            id: "otp",
            autoComplete: "off",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-sm focus:ring-0 focus:border-slate-400 duration-300 border-[1.5px] focus:outline-0 block w-full p-2.5 my-2",
            placeholder: (fe = s == null ? void 0 : s.lblInputOtp) == null ? void 0 : fe[l],
            inputMode: "numeric",
            value: d,
            maxLength: 6,
            onCopy: F => F.preventDefault(),
            onPaste: F => F.preventDefault(),
            onCut: F => F.preventDefault(),
            onChange: F => {
                const T = F.target.value.replace(/\D/g, "");
                m(T)
            }
        }), f.jsxs("div", {
            children: [f.jsx(ue.button, {
                type: "button",
                disabled: u || !x,
                whileTap: {
                    scale: .95
                },
                className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
              ${u || !x ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838]"}`,
                onClick: !u && x ? O : void 0,
                children: u ? ((he = s == null ? void 0 : s.checking) == null ? void 0 : he[l]) + "..." : (me = s == null ? void 0 : s.lblProceed) == null ? void 0 : me[l]
            }), f.jsx(ue.button, {
                onClick: X,
                disabled: !U,
                className: `text-white mb-2 mt-2 md:ml-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition ${U ? "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`,
                children: U ? (ie = s == null ? void 0 : s.resendOtp) == null ? void 0 : ie[l] : ((se = s == null ? void 0 : s.resendOtp) == null ? void 0 : se[l]) + ` ${N}s`
            })]
        })]
    })
}
  , ST = ({setStep: n}) => {
    var q, I, Q, re, fe, he, me, ie, se;
    const {language: l, translations: s} = ut()
      , o = pa()
      , [u,h] = j.useState(!1)
      , [d,m] = j.useState("")
      , [p,g] = j.useState("")
      , x = d.trim() !== "" && d.length >= 6
      , [v,w] = j.useState(null)
      , [N,E] = j.useState(30)
      , [_,M] = j.useState(!0)
      , [U,P] = j.useState(!1)
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
    j.useEffect( () => {
        const F = localStorage.getItem("user_phone");
        F && g(F)
    }
    , []);
    const X = async () => {
        h(!0);
        try {
            const F = await qe("/api/v2/registration", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    resend: "1"
                }
            });
            F.status_code === 200 ? (E(30),
            M(!0),
            P(!1)) : (E(30),
            M(!0),
            P(!1),
            w({
                message: F == null ? void 0 : F.message,
                type: "error"
            }))
        } catch (F) {
            const T = F
              , D = typeof T == "object" && (T != null && T.message) ? T.message : "Failed. Please try again later."
              , Y = typeof T == "object" && typeof T.status == "number" ? T.status : 200;
            (Y === 200 || Y === 200) && (w({
                message: D,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            w({
                message: D,
                type: "error"
            })
        } finally {
            h(!1)
        }
    }
    ;
    j.useEffect( () => {
        let F;
        return _ && N > 0 && (F = setInterval( () => {
            E(T => T - 1)
        }
        , 1e3)),
        N === 0 && _ && (clearInterval(F),
        M(!1),
        P(!0)),
        () => clearInterval(F)
    }
    , [N, _]);
    const O = async () => {
        var F, T, D, Y, J;
        h(!0);
        try {
            const S = await qe("/api/v2/registration-otp", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    otp: d
                }
            });
            S.status_code === 200 ? (localStorage.setItem("access_token", (F = S == null ? void 0 : S.data) == null ? void 0 : F.access_token),
            window.dispatchEvent(new Event("tokenUpdate")),
            localStorage.setItem("auth_name", (T = S == null ? void 0 : S.data) == null ? void 0 : T.name),
            localStorage.setItem("auth_email", (D = S == null ? void 0 : S.data) == null ? void 0 : D.email),
            localStorage.setItem("auth_phone", (Y = S == null ? void 0 : S.data) == null ? void 0 : Y.mobile_no),
            localStorage.setItem("auth_photo", (J = S == null ? void 0 : S.data) == null ? void 0 : J.profile_image),
            localStorage.removeItem("user_pwd"),
            o("/application")) : w({
                message: S == null ? void 0 : S.message,
                type: "error"
            })
        } catch (S) {
            const V = S
              , te = typeof V == "object" && (V != null && V.message) ? V.message : "Failed. Please try again later."
              , W = typeof V == "object" && typeof V.status == "number" ? V.status : 200;
            (W === 200 || W === 200) && (w({
                message: te,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            w({
                message: te,
                type: "error"
            })
        } finally {
            h(!1)
        }
    }
    ;
    return f.jsxs(ue.div, {
        className: "bg-white w-full p-4",
        variants: B,
        initial: "hidden",
        animate: "visible",
        children: [v && f.jsx(Ot, {
            message: v.message,
            type: v.type,
            onClose: () => w(null)
        }), f.jsxs("p", {
            className: "text-[10px]",
            children: [(q = s == null ? void 0 : s.lblAuthOtp1) == null ? void 0 : q[l], " (", p, ")"]
        }), f.jsx("p", {
            className: "text-[10px]",
            children: (I = s == null ? void 0 : s.lblAuthOtp2) == null ? void 0 : I[l]
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(Q = s == null ? void 0 : s.lblInputAuthOtp) == null ? void 0 : Q[l], " ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: [" *", (re = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : re[l]]
            })]
        }), f.jsx("input", {
            type: "text",
            id: "otp",
            autoComplete: "off",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-sm focus:ring-0 focus:border-slate-400 duration-300 border-[1.5px] focus:outline-0 block w-full p-2.5 my-2",
            placeholder: (fe = s == null ? void 0 : s.lblInputOtp) == null ? void 0 : fe[l],
            inputMode: "numeric",
            value: d,
            maxLength: 6,
            onCopy: F => F.preventDefault(),
            onPaste: F => F.preventDefault(),
            onCut: F => F.preventDefault(),
            onChange: F => {
                const T = F.target.value.replace(/\D/g, "");
                m(T)
            }
        }), f.jsx(ue.button, {
            type: "button",
            disabled: u || !x,
            whileTap: {
                scale: .95
            },
            className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
              ${u || !x ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838]"}`,
            onClick: !u && x ? O : void 0,
            children: u ? (he = s == null ? void 0 : s.checking) == null ? void 0 : he[l] : (me = s == null ? void 0 : s.lblProceed) == null ? void 0 : me[l]
        }), f.jsx(ue.button, {
            onClick: X,
            disabled: !U,
            className: `text-white mb-2 mt-2 md:ml-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition ${U ? "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`,
            children: U ? (ie = s == null ? void 0 : s.resendOtp) == null ? void 0 : ie[l] : ((se = s == null ? void 0 : s.resendOtp) == null ? void 0 : se[l]) + ` ${N}s`
        })]
    })
}
  , wT = ({setStep: n}) => {
    var N, E, _, M, U;
    const {language: l, translations: s} = ut()
      , [o,u] = j.useState("");
    let h = o.trim() !== "" && o.length >= 11;
    const [d,m] = j.useState(!1)
      , [p,g] = j.useState(null)
      , x = P => {
        const B = P.target.value.replace(/\D/g, "");
        u(B)
    }
      , v = async () => {
        var P, B;
        m(!0);
        try {
            h = !1;
            const X = await qe("/api/v2/change-password", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    mobile_no: o
                }
            });
            X.status_code === 200 ? (localStorage.setItem("user_phone", o),
            localStorage.setItem("user_email", (P = X.data) == null ? void 0 : P.email),
            n((B = X.data) != null && B.email_confirmed ? 9 : 8)) : g({
                message: X == null ? void 0 : X.message,
                type: "error"
            })
        } catch (X) {
            const O = X
              , q = typeof O == "object" && (O != null && O.message) ? O.message : "Failed. Please try again later."
              , I = typeof O == "object" && typeof O.status == "number" ? O.status : 200;
            (I === 200 || I === 200) && (g({
                message: q,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            g({
                message: q,
                type: "error"
            })
        } finally {
            m(!1)
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
    return f.jsxs(ue.div, {
        className: "bg-white w-full p-4",
        variants: w,
        initial: "hidden",
        animate: "visible",
        children: [p && f.jsx(Ot, {
            message: p.message,
            type: p.type,
            onClose: () => g(null)
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(N = s == null ? void 0 : s.lblInputLoginMobilePassChange) == null ? void 0 : N[l], " ", " ", f.jsx("span", {
                className: "text-red-600 text-[10px]",
                children: (E = s == null ? void 0 : s.lblInputLoginMobileMsg) == null ? void 0 : E[l]
            })]
        }), f.jsx("input", {
            type: "tel",
            id: "phone",
            autoComplete: "off",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (_ = s == null ? void 0 : s.lblInputLoginMobile) == null ? void 0 : _[l],
            inputMode: "numeric",
            pattern: "[0-9]*",
            maxLength: 11,
            value: o,
            onChange: x
        }), f.jsx(ue.button, {
            type: "button",
            disabled: d || !h,
            whileTap: {
                scale: .95
            },
            whileHover: {
                scale: !d && h ? 1.03 : 1
            },
            className: `text-white mb-2 h-8 rounded-lg  text-xs w-full duration-300 sm:w-auto px-2 py-2 text-center transition 
          ${d || !h ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer"}`,
            onClick: !d && h ? v : void 0,
            children: d ? (M = s == null ? void 0 : s.checking) == null ? void 0 : M[l] : (U = s == null ? void 0 : s.lblProceed) == null ? void 0 : U[l]
        })]
    })
}
  , jT = ({setStep: n}) => {
    var E, _, M, U, P, B, X;
    const {language: l, translations: s} = ut()
      , [o,u] = j.useState("")
      , [h,d] = j.useState("")
      , [m,p] = j.useState(null)
      , [g,x] = j.useState(!1)
      , v = o.trim() !== "" && z0(o);
    j.useEffect( () => {
        const O = localStorage.getItem("user_email");
        if (O)
            try {
                const q = JSON.parse(O);
                d(q)
            } catch {
                d(O)
            }
    }
    , []);
    const w = async () => {
        try {
            x(!0);
            const O = await qe("/api/v2/change-password-email-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    email: o
                }
            });
            O.status_code === 200 ? n(9) : p({
                message: O == null ? void 0 : O.message,
                type: "error"
            })
        } catch (O) {
            const q = O
              , I = typeof q == "object" && (q != null && q.message) ? q.message : "Failed. Please try again later."
              , Q = typeof q == "object" && typeof q.status == "number" ? q.status : 200;
            (Q === 200 || Q === 200) && (p({
                message: I,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            p({
                message: I,
                type: "error"
            })
        } finally {
            x(!1)
        }
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
                duration: .6,
                ease: "easeOut"
            }
        }
    };
    return f.jsxs(ue.div, {
        className: "bg-white w-full p-4",
        variants: N,
        initial: "hidden",
        animate: "visible",
        children: [m && f.jsx(Ot, {
            message: m.message,
            type: m.type,
            onClose: () => p(null)
        }), f.jsxs("p", {
            className: "text-xs",
            children: [(E = s == null ? void 0 : s.lblAuthFullEmail) == null ? void 0 : E[l], " (", h, ")"]
        }), f.jsx("p", {
            className: "text-xs my-1",
            children: (_ = s == null ? void 0 : s.lblAuthFullEmail2) == null ? void 0 : _[l]
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(M = s == null ? void 0 : s.lblInputRegEmail) == null ? void 0 : M[l], " ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (U = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : U[l]]
            })]
        }), f.jsx("input", {
            type: "email",
            id: "phone",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (P = s == null ? void 0 : s.lblInputRegEmail) == null ? void 0 : P[l],
            value: o,
            onChange: O => u(O.target.value),
            autoComplete: "off",
            onCopy: O => O.preventDefault(),
            onPaste: O => O.preventDefault(),
            onCut: O => O.preventDefault()
        }), f.jsx(ue.button, {
            type: "button",
            disabled: !v || g,
            whileTap: {
                scale: .95
            },
            whileHover: {
                scale: !g && v ? 1.03 : 1
            },
            className: `text-white mb-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
              ${!v || g ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838]"}`,
            onClick: !g && v ? w : void 0,
            children: g ? ((B = s == null ? void 0 : s.checking) == null ? void 0 : B[l]) + "..." : (X = s == null ? void 0 : s.lblProceed) == null ? void 0 : X[l]
        })]
    })
}
  , TT = ({setStep: n}) => {
    var O, q, I, Q, re, fe, he, me, ie;
    const {language: l, translations: s} = ut()
      , [o,u] = j.useState("")
      , [h,d] = j.useState(!1)
      , [m,p] = j.useState("")
      , [g,x] = j.useState(null)
      , [v,w] = j.useState(30)
      , [N,E] = j.useState(!0)
      , [_,M] = j.useState(!1)
      , U = o.trim() !== "" && o.length >= 6;
    j.useEffect( () => {
        const se = localStorage.getItem("user_email");
        se && p(se)
    }
    , []);
    const P = async () => {
        var se, F, T, D;
        d(!0);
        try {
            const Y = localStorage.getItem("user_phone")
              , J = localStorage.getItem("user_pwd")
              , S = await qe("/api/v2/change-password-otp", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    mobile_no: Y,
                    password: J,
                    otp: o
                }
            });
            S.status_code === 200 ? (localStorage.setItem("auth_name", (se = S == null ? void 0 : S.data) == null ? void 0 : se.name),
            localStorage.setItem("auth_email", (F = S == null ? void 0 : S.data) == null ? void 0 : F.email),
            localStorage.setItem("auth_phone", (T = S == null ? void 0 : S.data) == null ? void 0 : T.mobile_no),
            localStorage.setItem("auth_photo", (D = S == null ? void 0 : S.data) == null ? void 0 : D.profile_image),
            n(10)) : x({
                message: S == null ? void 0 : S.message,
                type: "error"
            })
        } catch (Y) {
            const J = Y
              , S = typeof J == "object" && (J != null && J.message) ? J.message : "Failed. Please try again later."
              , V = typeof J == "object" && typeof J.status == "number" ? J.status : 200;
            (V === 200 || V === 200) && (x({
                message: S,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            x({
                message: S,
                type: "error"
            })
        } finally {
            d(!1)
        }
    }
      , B = async () => {
        d(!0);
        try {
            const se = localStorage.getItem("user_phone")
              , F = await qe("/api/v2/change-password", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    mobile_no: se
                }
            });
            F.status_code === 200 ? (w(30),
            E(!0),
            M(!1)) : (w(30),
            E(!0),
            M(!1),
            x({
                message: F == null ? void 0 : F.message,
                type: "error"
            }))
        } catch (se) {
            const F = se
              , T = typeof F == "object" && (F != null && F.message) ? F.message : "Failed. Please try again later."
              , D = typeof F == "object" && typeof F.status == "number" ? F.status : 200;
            (D === 200 || D === 200) && (x({
                message: T,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            x({
                message: T,
                type: "error"
            })
        } finally {
            d(!1)
        }
    }
    ;
    j.useEffect( () => {
        let se;
        return N && v > 0 && (se = setInterval( () => {
            w(F => F - 1)
        }
        , 1e3)),
        v === 0 && N && (clearInterval(se),
        E(!1),
        M(!0)),
        () => clearInterval(se)
    }
    , [v, N]);
    const X = {
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
    return f.jsxs(ue.div, {
        className: "bg-white w-full p-4",
        variants: X,
        initial: "hidden",
        animate: "visible",
        children: [g && f.jsx(Ot, {
            message: g.message,
            type: g.type,
            onClose: () => x(null)
        }), f.jsxs("p", {
            className: "text-[10px]",
            children: [(O = s == null ? void 0 : s.lblAuthOtp1) == null ? void 0 : O[l], " ", " ", " (", m, ")"]
        }), f.jsx("p", {
            className: "text-[10px]",
            children: (q = s == null ? void 0 : s.lblAuthOtp2) == null ? void 0 : q[l]
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(I = s == null ? void 0 : s.lblInputAuthOtp) == null ? void 0 : I[l], " ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: [" *", (Q = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : Q[l]]
            })]
        }), f.jsx("input", {
            type: "text",
            id: "otp",
            autoComplete: "off",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-blue-400 focus:border-[0.1px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (re = s == null ? void 0 : s.lblInputOtp) == null ? void 0 : re[l],
            inputMode: "numeric",
            value: o,
            maxLength: 6,
            onCopy: se => se.preventDefault(),
            onPaste: se => se.preventDefault(),
            onCut: se => se.preventDefault(),
            onChange: se => {
                const F = se.target.value.replace(/\D/g, "");
                u(F)
            }
        }), f.jsx(ue.button, {
            type: "button",
            disabled: h || !U,
            whileTap: {
                scale: .95
            },
            className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
               ${h || !U ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer"}`,
            onClick: U ? P : void 0,
            children: h ? ((fe = s == null ? void 0 : s.checking) == null ? void 0 : fe[l]) + "..." : (he = s == null ? void 0 : s.lblProceed) == null ? void 0 : he[l]
        }), f.jsx(ue.button, {
            onClick: B,
            disabled: !_,
            className: `text-white mb-2 mt-2 md:ml-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition ${_ ? "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`,
            children: _ ? (me = s == null ? void 0 : s.resendOtp) == null ? void 0 : me[l] : ((ie = s == null ? void 0 : s.resendOtp) == null ? void 0 : ie[l]) + ` ${v}s`
        })]
    })
}
  , NT = ({setStep: n}) => {
    var _, M, U, P, B, X, O, q, I;
    const {language: l, translations: s} = ut()
      , o = pa()
      , [u,h] = j.useState("")
      , [d,m] = j.useState(!1)
      , [p,g] = j.useState("")
      , [x,v] = j.useState(null)
      , w = u.trim() !== "" && u.length >= 6 && p.trim() !== "" && p.length >= 6
      , N = async () => {
        var Q, re, fe, he, me;
        try {
            if (m(!0),
            u !== p) {
                v({
                    message: "Password and confirm password do not match",
                    type: "error"
                });
                return
            }
            const ie = await qe("/api/v2/change-password-confirm", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    password: u,
                    password_confirmation: p
                }
            });
            ie.status_code === 200 ? (localStorage.setItem("access_token", (Q = ie == null ? void 0 : ie.data) == null ? void 0 : Q.access_token),
            window.dispatchEvent(new Event("tokenUpdate")),
            localStorage.setItem("auth_name", (re = ie == null ? void 0 : ie.data) == null ? void 0 : re.name),
            localStorage.setItem("auth_email", (fe = ie == null ? void 0 : ie.data) == null ? void 0 : fe.email),
            localStorage.setItem("auth_phone", (he = ie == null ? void 0 : ie.data) == null ? void 0 : he.mobile_no),
            localStorage.setItem("auth_photo", (me = ie == null ? void 0 : ie.data) == null ? void 0 : me.profile_image),
            localStorage.removeItem("user_pwd"),
            o("/application")) : v({
                message: ie == null ? void 0 : ie.message,
                type: "error"
            })
        } catch (ie) {
            const se = ie
              , F = typeof se == "object" && (se != null && se.message) ? se.message : "Failed. Please try again later."
              , T = typeof se == "object" && typeof se.status == "number" ? se.status : 200;
            (T === 200 || T === 200) && (v({
                message: F,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            v({
                message: F,
                type: "error"
            })
        } finally {
            m(!1)
        }
    }
      , E = {
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
    return f.jsxs(ue.div, {
        className: "bg-white w-full p-4",
        variants: E,
        initial: "hidden",
        animate: "visible",
        children: [x && f.jsx(Ot, {
            message: x.message,
            type: x.type,
            onClose: () => v(null)
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(_ = s == null ? void 0 : s.lblInputPassword) == null ? void 0 : _[l], " ", " ", f.jsx("span", {
                className: "text-red-600 text-[10px]",
                children: (M = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : M[l]
            })]
        }), f.jsx("input", {
            type: "password",
            id: "password",
            autoComplete: "off",
            onCopy: Q => Q.preventDefault(),
            onPaste: Q => Q.preventDefault(),
            onCut: Q => Q.preventDefault(),
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-blue-400 focus:border-[0.1px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (U = s == null ? void 0 : s.lblInputPassword) == null ? void 0 : U[l],
            value: u,
            onChange: Q => h(Q.target.value)
        }), u.length > 0 && u.length < 6 && f.jsx("p", {
            className: "text-red-500 text-[11px] mb-2",
            children: (P = s == null ? void 0 : s.passwordMinLengthMsg) == null ? void 0 : P[l]
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(B = s == null ? void 0 : s.lblInputRePassword) == null ? void 0 : B[l], " ", " ", f.jsx("span", {
                className: "text-red-600 text-[10px]",
                children: (X = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : X[l]
            })]
        }), f.jsx("input", {
            type: "password",
            id: "password_confirm",
            onCopy: Q => Q.preventDefault(),
            onPaste: Q => Q.preventDefault(),
            onCut: Q => Q.preventDefault(),
            autoComplete: "off",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-blue-400 focus:border-[0.1px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (O = s == null ? void 0 : s.lblInputRePassword) == null ? void 0 : O[l],
            value: p,
            onChange: Q => g(Q.target.value)
        }), f.jsx(ue.button, {
            type: "button",
            disabled: !w,
            whileTap: {
                scale: .95
            },
            className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
         ${d || !w ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer"}`,
            onClick: !d && w ? N : void 0,
            children: d ? ((q = s == null ? void 0 : s.checking) == null ? void 0 : q[l]) + "..." : (I = s == null ? void 0 : s.lblProceed) == null ? void 0 : I[l]
        })]
    })
}
  , J0 = j.createContext(void 0)
  , AT = ({children: n}) => {
    const [l,s] = j.useState(null)
      , [o,u] = j.useState(!0)
      , [h,d] = j.useState(null)
      , m = "initialData"
      , p = E => {
        try {
            localStorage.setItem(m, JSON.stringify(E))
        } catch (_) {
            console.error("Failed to save to localStorage:", _)
        }
    }
      , g = async () => {
        try {
            const E = localStorage.getItem(m);
            return E ? localStorage.getItem("access_token") ? JSON.parse(E) : await x() : null
        } catch (E) {
            return console.error("Failed to read from localStorage:", E),
            null
        }
    }
      , x = async () => {
        try {
            const E = await fetch("/home.json");
            if (!E.ok)
                throw new Error(`Failed to fetch: ${E.status}`);
            return await E.json()
        } catch (E) {
            return console.error("Error fetching initial data:", E),
            null
        }
    }
      , v = async () => {
        var E, _;
        try {
            u(!0);
            const M = await qe("/api/v2/is-slot-available", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    language: localStorage.getItem("language") || "en",
                    Authorization: `Bearer ${localStorage.getItem("access_token") || ""}`
                }
            });
            M.status_code === 200 ? N((E = M == null ? void 0 : M.data) == null ? void 0 : E.slot_available, (_ = M == null ? void 0 : M.data) == null ? void 0 : _.ivac_fees) : M.status_code === 200 ? (localStorage.clear(),
            window.location.href = "/") : N(!1)
        } catch (M) {
            M.status === 200 ? (localStorage.clear(),
            window.location.href = "/") : N(!1)
        } finally {
            u(!1)
        }
    }
      , w = async () => {
        u(!0),
        d(null);
        try {
            const E = await x();
            E || (localStorage.clear(),
            window.location.href = "/"),
            s(E),
            p(E)
        } catch (E) {
            localStorage.clear(),
            window.location.href = "/",
            d(E instanceof Error ? E.message : "Unknown error")
        } finally {
            u(!1)
        }
    }
      , N = (E, _=0) => {
        l ? (s(M => ({
            ...M,
            slot_available: E,
            visa_fee: _
        })),
        p({
            ...l,
            slot_available: E,
            visa_fee: _
        })) : x().then(M => {
            M && (s(U => ({
                ...U,
                slot_available: E,
                visa_fee: _
            })),
            p({
                ...M,
                slot_available: E,
                visa_fee: _
            }))
        }
        )
    }
    ;
    return j.useEffect( () => {
        var _;
        const E = g();
        E && ((_ = Object == null ? void 0 : Object.keys(E)) == null ? void 0 : _.length) > 2 ? (s(E),
        u(!1)) : w()
    }
    , []),
    j.useEffect( () => {
        localStorage.getItem("access_token") && v()
    }
    , [localStorage.getItem("access_token")]),
    f.jsx(J0.Provider, {
        value: {
            initialData: l,
            isLoading: o,
            error: h,
            refreshData: w,
            updateSlotAvailableAndFees: N
        },
        children: n
    })
}
  , Bf = () => {
    const n = j.useContext(J0);
    if (n === void 0)
        throw new Error("useInitialData must be used within an InitialDataProvider");
    return n
}
  , ET = ({setStep: n}) => {
    var I, Q, re, fe, he, me, ie, se, F, T;
    const {updateSlotAvailableAndFees: l} = Bf()
      , {language: s, translations: o} = ut()
      , u = pa()
      , [h,d] = j.useState("")
      , [m,p] = j.useState(!1)
      , [g,x] = j.useState("")
      , v = h.trim() !== "" && h.length >= 6
      , [w,N] = j.useState(null)
      , [E,_] = j.useState(30)
      , [M,U] = j.useState(!0)
      , [P,B] = j.useState(!1)
      , X = {
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
    j.useEffect( () => {
        const D = localStorage.getItem("user_email");
        D && x(D)
    }
    , []);
    const O = async () => {
        var D, Y, J, S, V, te;
        try {
            p(!0);
            const W = localStorage.getItem("user_phone")
              , le = localStorage.getItem("user_pwd")
              , ee = await qe("/api/v2/login-otp", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: s
                },
                body: {
                    mobile_no: W,
                    password: le,
                    otp: h
                }
            });
            ee.status_code === 200 ? (localStorage.setItem("access_token", (D = ee == null ? void 0 : ee.data) == null ? void 0 : D.access_token),
            l((Y = ee.data) == null ? void 0 : Y.slot_available),
            window.dispatchEvent(new Event("tokenUpdate")),
            localStorage.setItem("auth_name", (J = ee == null ? void 0 : ee.data) == null ? void 0 : J.name),
            localStorage.setItem("auth_email", (S = ee == null ? void 0 : ee.data) == null ? void 0 : S.email),
            localStorage.setItem("auth_phone", (V = ee == null ? void 0 : ee.data) == null ? void 0 : V.mobile_no),
            localStorage.setItem("auth_photo", (te = ee == null ? void 0 : ee.data) == null ? void 0 : te.profile_image),
            localStorage.removeItem("user_pwd"),
            u("/application")) : N({
                message: ee == null ? void 0 : ee.message,
                type: "error"
            })
        } catch (W) {
            const le = W
              , ee = typeof le == "object" && (le != null && le.message) ? le.message : "Failed. Please try again later."
              , ae = typeof le == "object" && typeof le.status == "number" ? le.status : 200;
            (ae === 200 || ae === 200) && (N({
                message: ee,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            N({
                message: ee,
                type: "error"
            })
        } finally {
            p(!1)
        }
    }
      , q = async () => {
        p(!0);
        try {
            const D = localStorage.getItem("user_phone")
              , Y = localStorage.getItem("user_pwd")
              , J = await qe("/api/v2/login", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: s
                },
                body: {
                    mobile_no: D,
                    password: Y
                }
            });
            J.status_code === 200 ? (_(30),
            U(!0),
            B(!1)) : (_(30),
            U(!0),
            B(!1),
            N({
                message: J == null ? void 0 : J.message,
                type: "error"
            }))
        } catch (D) {
            const Y = D
              , J = typeof Y == "object" && (Y != null && Y.message) ? Y.message : "Failed. Please try again later."
              , S = typeof Y == "object" && typeof Y.status == "number" ? Y.status : 200;
            (S === 200 || S === 200) && (N({
                message: J,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            N({
                message: J,
                type: "error"
            })
        } finally {
            p(!1)
        }
    }
    ;
    return j.useEffect( () => {
        let D;
        return M && E > 0 && (D = setInterval( () => {
            _(Y => Y - 1)
        }
        , 1e3)),
        E === 0 && M && (clearInterval(D),
        U(!1),
        B(!0)),
        () => clearInterval(D)
    }
    , [E, M]),
    f.jsxs(ue.div, {
        className: "bg-white w-full p-4",
        variants: X,
        initial: "hidden",
        animate: "visible",
        children: [w && f.jsx(Ot, {
            message: w.message,
            type: w.type,
            onClose: () => N(null)
        }), f.jsxs("p", {
            className: "text-[10px]",
            children: [(I = o == null ? void 0 : o.lblAuthOtp1) == null ? void 0 : I[s], " (", g, ")"]
        }), f.jsx("p", {
            className: "text-[10px]",
            children: (Q = o == null ? void 0 : o.lblAuthOtp2) == null ? void 0 : Q[s]
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(re = o == null ? void 0 : o.lblInputAuthOtp) == null ? void 0 : re[s], " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: [" ", "*", (fe = o == null ? void 0 : o.lblNoCopyPaste) == null ? void 0 : fe[s]]
            })]
        }), f.jsx("input", {
            type: "text",
            id: "otp",
            autoComplete: "off",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-sm focus:ring-0 focus:border-slate-400 duration-300 border-[1.5px] focus:outline-0 block w-full p-2.5 my-2",
            placeholder: (he = o == null ? void 0 : o.lblInputOtp) == null ? void 0 : he[s],
            inputMode: "numeric",
            value: h,
            maxLength: 6,
            onCopy: D => D.preventDefault(),
            onPaste: D => D.preventDefault(),
            onCut: D => D.preventDefault(),
            onChange: D => {
                const Y = D.target.value.replace(/\D/g, "");
                d(Y)
            }
        }), f.jsxs("div", {
            children: [f.jsx(ue.button, {
                type: "button",
                whileTap: {
                    scale: .95
                },
                className: "text-white mb-2 mt-2 mr-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition bg-gray-400 hover:bg-[#218838] focus:ring-[#218838] cursor-pointer",
                onClick: () => n(1),
                children: (me = o == null ? void 0 : o.back) == null ? void 0 : me[s]
            }), f.jsx(ue.button, {
                type: "button",
                disabled: m || !v,
                whileTap: {
                    scale: .95
                },
                className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
               ${m || !v ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer"}`,
                onClick: v ? O : void 0,
                children: m ? ((ie = o == null ? void 0 : o.checking) == null ? void 0 : ie[s]) + "..." : (se = o == null ? void 0 : o.lblProceed) == null ? void 0 : se[s]
            }), f.jsx(ue.button, {
                onClick: q,
                disabled: !P,
                className: `text-white mb-2 mt-2 md:ml-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition ${P ? "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`,
                children: P ? (F = o == null ? void 0 : o.resendOtp) == null ? void 0 : F[s] : ((T = o == null ? void 0 : o.resendOtp) == null ? void 0 : T[s]) + ` ${E}s`
            })]
        })]
    })
}
  , ha = n => {
    localStorage.clear(),
    window.dispatchEvent(new Event("tokenUpdate")),
    n("/")
}
  , CT = ({setActiveStep: n}) => {
    var et, sn, Va, Ta, kt, Ua, ga, za, Ba, Ft, ct, be, Je, ya, La, on, xa, ea, Rt;
    const [l,s] = j.useState(!1)
      , {initialData: o, error: u, isLoading: h} = Bf()
      , {language: d, translations: m} = ut()
      , p = pa()
      , [g,x] = j.useState(!1)
      , [v,w] = j.useState(null)
      , [N,E] = j.useState([])
      , [_,M] = j.useState("")
      , [U,P] = j.useState("")
      , [B,X] = j.useState("")
      , [O,q] = j.useState(!1)
      , [I,Q] = j.useState([])
      , [re,fe] = j.useState([])
      , [he,me] = j.useState("")
      , [ie,se] = j.useState("")
      , [F,T] = j.useState(0)
      , [D,Y] = j.useState([])
      , [J,S] = j.useState("")
      , [V,te] = j.useState("")
      , [W,le] = j.useState("")
      , [ee,ae] = j.useState(!1)
      , [de,ne] = j.useState("")
      , [Ve,Oe] = j.useState(!1)
      , Re = "0x4AAAAAABvQ3Mi6RktCuZ7P";
    j.useEffect( () => {
        const oe = localStorage.getItem("applicant");
        if (oe)
            try {
                const ye = JSON.parse(oe);
                M(ye.highcom || null),
                P(ye.webfile_id || null),
                X(ye.webfile_id_repeat || null),
                te(ye.family_count || null),
                le(ye.visit_purpose || null),
                S(ye.visa_type || null),
                me(ye.ivac_name || null),
                se(ye.ivac_id || null)
            } catch {
                console.error("Failed to parse applicant data from localStorage.")
            }
    }
    , []),
    j.useEffect( () => {
        o && !h && !u ? (T(o.visa_fee || null),
        Oe(o == null ? void 0 : o.slot_available),
        E(o == null ? void 0 : o.centers),
        Q(o == null ? void 0 : o.ivacs),
        fe(o == null ? void 0 : o.ivacs),
        Y(o == null ? void 0 : o.visa_types)) : u && w({
            message: u,
            type: "error"
        })
    }
    , [h, u, JSON.stringify(o)]);
    const De = async () => {
        try {
            ae(!0);
            const oe = localStorage.getItem("access_token")
              , ye = await qe("/api/v2/payment/check/" + U, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    language: d,
                    Authorization: `Bearer ${oe}`
                }
            });
            ye.status_code === 200 ? q(!0) : (q(!1),
            w({
                message: ye == null ? void 0 : ye.message,
                type: "error"
            }))
        } catch (oe) {
            const ye = oe
              , Qe = typeof ye == "object" && (ye != null && ye.message) ? ye.message : "Failed to get payment data. Please try again later."
              , $e = typeof ye == "object" && typeof ye.status == "number" ? ye.status : 200;
            ($e === 200 || $e === 200) && (w({
                message: "Unauthorized, session timed out",
                type: "error"
            }),
            setTimeout( () => {
                ha(p)
            }
            , 5e3)),
            w({
                message: Qe,
                type: "error"
            })
        } finally {
            ae(!1)
        }
    }
    ;
    j.useEffect( () => {
        U.length === 12 && B.length === 12 && (U === B ? De() : w({
            message: "Web File ID does not match",
            type: "error"
        }))
    }
    , [U, B]);
    const lt = oe => {
        const ye = oe.target.value;
        M(ye);
        const Qe = I.filter($ => ($ == null ? void 0 : $.center_info_id) == ye);
        fe(Qe),
        me("");
        const $e = localStorage.getItem("applicant");
        if ($e) {
            const $ = JSON.parse($e);
            "ivac_id"in $ && delete $.ivac_id,
            "ivac_name"in $ && delete $.ivac_name,
            localStorage.setItem("applicant", JSON.stringify($))
        }
    }
      , Ne = async oe => {
        try {
            ae(!0);
            const [ye,Qe] = oe.target.value.split("|");
            me(ye),
            se(Qe)
        } catch (ye) {
            const Qe = ye
              , $e = typeof Qe == "object" && (Qe != null && Qe.message) ? Qe.message : "Failed to get payment data. Please try again later."
              , $ = typeof Qe == "object" && typeof Qe.status == "number" ? Qe.status : 200;
            ($ === 200 || $ === 200) && (w({
                message: "Unauthorized, session timed out",
                type: "error"
            }),
            setTimeout( () => {
                ha(p)
            }
            , 5e3)),
            w({
                message: $e,
                type: "error"
            })
        } finally {
            ae(!1)
        }
    }
      , Ie = _.trim() !== "" && U.trim() !== "" && U.length >= 12 && B.trim() !== "" && B.length >= 12 && O && he.trim() !== "" && F !== 0 && J.trim() !== "" && V.trim() !== "" && W.trim() !== "" && W.length >= 15 && de.trim() !== "" && l
      , vt = async () => {
        try {
            const oe = localStorage.getItem("access_token");
            x(!0);
            const Qe = localStorage.getItem("is_edit") === "true" ? "/api/v2/payment/application-info-edit" : "/api/v2/payment/application-r5s7h3-submit-hyju6t"
              , $e = await qe(Qe, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: d,
                    Authorization: `Bearer ${oe}`
                },
                body: {
                    highcom: _,
                    webfile_id: U,
                    webfile_id_repeat: B,
                    ivac_id: ie,
                    visa_type: J,
                    family_count: V,
                    visit_purpose: W,
                    y6e7uk_token_t6d8n3: de
                }
            });
            if ($e.status_code === 200) {
                n(2);
                const $ = {
                    highcom: _,
                    webfile_id: U,
                    webfile_id_repeat: B,
                    ivac_id: ie,
                    ivac_name: he,
                    visa_type: J,
                    family_count: V,
                    visit_purpose: W
                };
                localStorage.setItem("applicant", JSON.stringify($))
            } else
                w({
                    message: $e == null ? void 0 : $e.message,
                    type: "error"
                });
            x(!1)
        } catch (oe) {
            x(!1);
            const ye = oe
              , Qe = typeof ye == "object" && (ye != null && ye.message) ? ye.message : "Failed to get payment data. Please try again later."
              , $e = typeof ye == "object" && typeof ye.status == "number" ? ye.status : 200;
            ($e === 200 || $e === 200) && (w({
                message: "Unauthorized, session timed out",
                type: "error"
            }),
            setTimeout( () => {
                ha(p)
            }
            , 5e3)),
            w({
                message: Qe,
                type: "error"
            })
        }
    }
    ;
    return j.useEffect( () => {
        const oe = setTimeout( () => {
            s(!0)
        }
        , 4e4);
        return () => clearTimeout(oe)
    }
    , []),
    ee ? f.jsx(U0, {}) : f.jsxs("div", {
        className: "grid grid-cols-1 gap-x-6 gap-y-2",
        children: [v && f.jsx(Ot, {
            message: v.message,
            type: v.type,
            onClose: () => w(null)
        }), Ve ? f.jsxs(f.Fragment, {
            children: [f.jsxs("div", {
                className: "sm:col-span-3",
                children: [f.jsx("label", {
                    htmlFor: "high-commission",
                    className: "block text-xs font-light text-black uppercase",
                    children: (sn = m == null ? void 0 : m.lblSelectHighCommission) == null ? void 0 : sn[d]
                }), f.jsx("div", {
                    className: "mt-2",
                    children: f.jsxs("select", {
                        id: "center",
                        name: "center",
                        value: _,
                        onChange: lt,
                        className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 sm:text-sm/6",
                        children: [f.jsx("option", {
                            value: "",
                            disabled: !0,
                            hidden: !0,
                            className: "text-gray-500 font-light",
                            children: (Va = m == null ? void 0 : m.lblSelectHighCommission) == null ? void 0 : Va[d]
                        }), N.map(oe => f.jsx("option", {
                            value: oe.id,
                            className: "text-black font-light",
                            children: oe == null ? void 0 : oe.c_name
                        }, oe.id))]
                    })
                })]
            }), f.jsxs("div", {
                className: "sm:col-span-3",
                children: [f.jsxs("label", {
                    htmlFor: "first-name",
                    className: "block text-xs font-light text-black uppercase",
                    children: [(Ta = m == null ? void 0 : m.lblInputWebFile) == null ? void 0 : Ta[d], " ", f.jsxs("span", {
                        className: "text-red-600 text-[10px]",
                        children: ["(", (kt = m == null ? void 0 : m.lblMustFace7) == null ? void 0 : kt[d], ")"]
                    })]
                }), f.jsx("div", {
                    className: "mt-2",
                    children: f.jsx("input", {
                        type: "text",
                        name: "webfile_id",
                        id: "webfile_id",
                        onCopy: oe => oe.preventDefault(),
                        onPaste: oe => oe.preventDefault(),
                        onCut: oe => oe.preventDefault(),
                        maxLength: 12,
                        autoComplete: "off",
                        value: U,
                        onChange: oe => {
                            P(oe.target.value),
                            q(!1)
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
                    children: [(Ua = m == null ? void 0 : m.lblInputWebFileAgain) == null ? void 0 : Ua[d], " ", f.jsxs("span", {
                        className: "text-red-600 text-[10px]",
                        children: ["*(", (ga = m == null ? void 0 : m.lblNoCopyPaste) == null ? void 0 : ga[d], ")"]
                    })]
                }), f.jsx("div", {
                    className: "mt-2",
                    children: f.jsx("input", {
                        type: "text",
                        name: "first-name",
                        id: "first-name",
                        onCopy: oe => oe.preventDefault(),
                        onPaste: oe => oe.preventDefault(),
                        onCut: oe => oe.preventDefault(),
                        maxLength: 12,
                        autoComplete: "off",
                        value: B,
                        onChange: oe => {
                            X(oe.target.value),
                            q(!1)
                        }
                        ,
                        className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-1 sm:text-sm/6"
                    })
                })]
            }), f.jsxs("div", {
                className: "sm:col-span-3",
                onClick: () => {
                    O || w({
                        message: "Please enter a valid Web File ID before selecting a center.",
                        type: "error"
                    })
                }
                ,
                children: [f.jsx("label", {
                    htmlFor: "first-name",
                    className: "block text-xs font-light text-black uppercase",
                    children: (za = m == null ? void 0 : m.lblInputSelectIvac) == null ? void 0 : za[d]
                }), f.jsx("div", {
                    className: "mt-2",
                    children: f.jsxs("select", {
                        id: "center",
                        name: "center",
                        disabled: !O,
                        value: he && ie ? `${he}|${ie}` : "",
                        onChange: Ne,
                        className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400  sm:text-sm/6",
                        children: [f.jsx("option", {
                            value: "",
                            disabled: !0,
                            hidden: !0,
                            children: (Ba = m == null ? void 0 : m.lblInputSelectIvac) == null ? void 0 : Ba[d]
                        }), re.map(oe => f.jsx("option", {
                            value: `${oe.app_key}|${oe.id}`,
                            children: oe.ivac_name
                        }, oe.id))]
                    })
                })]
            }), f.jsxs("div", {
                className: "sm:col-span-3",
                children: [f.jsxs("label", {
                    htmlFor: "first-name",
                    className: "block text-xs font-light text-black uppercase",
                    children: [(Ft = m == null ? void 0 : m.lblInputVisaType) == null ? void 0 : Ft[d], " ", f.jsxs("span", {
                        className: "text-red-600 text-[10px]",
                        children: ["*(", (ct = m == null ? void 0 : m.lblVisaTypeQueue) == null ? void 0 : ct[d], ")"]
                    })]
                }), f.jsx("div", {
                    className: "mt-2",
                    children: f.jsxs("select", {
                        id: "visa_type",
                        name: "visa_type",
                        disabled: !O,
                        value: J ?? "",
                        onChange: oe => S(oe.target.value),
                        className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6",
                        children: [f.jsx("option", {
                            value: "",
                            disabled: !0,
                            hidden: !0,
                            children: (be = m == null ? void 0 : m.lblInputVisaTypePlaceholder) == null ? void 0 : be[d]
                        }), D.map(oe => f.jsx("option", {
                            value: oe.id,
                            children: oe.type_name
                        }, oe.id))]
                    })
                })]
            }), f.jsxs("div", {
                className: "sm:col-span-3",
                children: [f.jsx("label", {
                    htmlFor: "first-name",
                    className: "block text-xs font-light text-black uppercase",
                    children: (Je = m == null ? void 0 : m.lblInputNumberOfFamily) == null ? void 0 : Je[d]
                }), f.jsx("div", {
                    className: "mt-2",
                    children: f.jsxs("select", {
                        id: "family_count",
                        name: "family_count",
                        disabled: !O,
                        value: V ?? "",
                        onChange: oe => te(oe.target.value),
                        className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6",
                        children: [f.jsx("option", {
                            value: "",
                            disabled: !0,
                            hidden: !0,
                            children: (ya = m == null ? void 0 : m.lblInputNoOfAppPlaceholder) == null ? void 0 : ya[d]
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
                    children: [(La = m == null ? void 0 : m.lblInputVisitPurpose) == null ? void 0 : La[d], " ", f.jsxs("span", {
                        className: "text-red-600 uppercase text-[10px]",
                        children: ["*(", (on = m == null ? void 0 : m.noCopyPasteMinChar) == null ? void 0 : on[d], ")"]
                    })]
                }), f.jsx("div", {
                    className: "mt-2",
                    children: f.jsx("textarea", {
                        name: "visit_purpose",
                        id: "visit_purpose",
                        onCopy: oe => oe.preventDefault(),
                        onPaste: oe => oe.preventDefault(),
                        onCut: oe => oe.preventDefault(),
                        autoComplete: "off",
                        disabled: !O,
                        value: W,
                        onChange: oe => le(oe.target.value),
                        className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"
                    })
                })]
            }), f.jsxs("div", {
                className: "sm:col-span-3",
                children: [f.jsx("label", {
                    htmlFor: "first-name",
                    className: "block text-xs font-light text-black uppercase",
                    children: (xa = m == null ? void 0 : m.lblInputAmount) == null ? void 0 : xa[d]
                }), f.jsxs("label", {
                    htmlFor: "first-name",
                    className: "block text-sm font-bold text-black uppercase",
                    children: ["BDT ", F !== 0 ? F : ""]
                })]
            }), f.jsx("div", {
                className: "sm:col-span-3",
                children: f.jsx(nr, {
                    sitekey: Re,
                    onVerify: oe => ne(oe)
                })
            }), f.jsx("div", {
                className: "sm:col-span-3",
                children: g ? f.jsxs(ue.button, {
                    type: "button",
                    whileTap: {
                        scale: .95
                    },
                    className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition duration-300
              bg-gray-400 cursor-not-allowed
            `,
                    children: [(ea = m == null ? void 0 : m.checking) == null ? void 0 : ea[d], "..."]
                }) : f.jsx(ue.button, {
                    type: "button",
                    disabled: !Ie,
                    whileTap: {
                        scale: .95
                    },
                    className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition duration-300
              ${Ie ? "bg-[#28a745] hover:bg-[#218838] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}
            `,
                    onClick: Ie ? vt : void 0,
                    children: (Rt = m == null ? void 0 : m.lblSaveNext) == null ? void 0 : Rt[d]
                })
            })]
        }) : f.jsx("div", {
            className: "sm:col-span-3 flex justify-center h-[50vh]",
            children: f.jsx("p", {
                className: "flex items-center justify-center w-full h-screen-1/2  text-red-500 text-sm font-light rounded-md",
                children: ((et = m == null ? void 0 : m.slotAvailableText) == null ? void 0 : et[d]) ?? "Please wait until slot is available."
            })
        })]
    })
}
  , DT = ({setActiveStep: n}) => {
    var re, fe, he, me, ie, se, F;
    const [l,s] = j.useState(!1)
      , {language: o, translations: u} = ut()
      , h = pa()
      , [d,m] = j.useState(null)
      , [p,g] = j.useState(!1)
      , [x,v] = j.useState("")
      , [w,N] = j.useState("")
      , [E,_] = j.useState("")
      , [M,U] = j.useState("")
      , [P,B] = j.useState(0)
      , [X,O] = j.useState({});
    j.useEffect( () => {
        const T = localStorage.getItem("applicant")
          , D = localStorage.getItem("personal_info")
          , Y = J => localStorage.getItem(J) || "";
        if (v(Y("auth_name")),
        N(Y("auth_email")),
        _(Y("auth_phone")),
        D) {
            const J = JSON.parse(D);
            O(J == null ? void 0 : J.family)
        }
        if (T)
            try {
                const J = JSON.parse(T);
                J && U(J.webfile_id),
                J.family_count && B(parseInt(J.family_count))
            } catch {
                console.error("Invalid JSON in localStorage")
            }
    }
    , []);
    const q = (T, D, Y) => {
        O(J => ({
            ...J,
            [T + 1]: {
                ...J[T + 1],
                [D]: Y
            }
        }))
    }
      , I = () => {
        var D, Y, J;
        const T = [];
        if (x.trim() || T.push("Full name is required."),
        w.trim() || T.push("Email is required."),
        E.trim() || T.push("Phone is required."),
        M.trim() || T.push("Web file number is required."),
        P > 0)
            for (let S = 1; S <= P; S++) {
                const V = X[S];
                (D = V == null ? void 0 : V.name) != null && D.trim() || T.push(`Family member ${S}: Name is required.`),
                (Y = V == null ? void 0 : V.webfile_no) != null && Y.trim() || T.push(`Family member ${S}: Web file number is required.`),
                (J = V == null ? void 0 : V.again_webfile_no) != null && J.trim() || T.push(`Family member ${S}: Confirm web file number is required.`)
            }
        return T.length > 0 ? {
            valid: !1,
            errors: T
        } : {
            valid: !0
        }
    }
      , Q = async () => {
        try {
            g(!0);
            const {valid: T, errors: D} = I();
            if (!T && D.length > 0) {
                m({
                    message: `Please fix the following error:
` + D[0],
                    type: "error"
                }),
                g(!1);
                return
            }
            const Y = localStorage.getItem("access_token")
              , S = localStorage.getItem("is_edit") === "true" ? "/api/v2/payment/personal-info-edit" : "/api/v2/payment/personal-info-submit"
              , V = await qe(S, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: o,
                    Authorization: `Bearer ${Y}`
                },
                body: {
                    full_name: x,
                    email_name: w,
                    phone: E,
                    webfile_id: M,
                    family: X
                }
            });
            if (V.status_code === 200) {
                const te = {
                    full_name: x,
                    email_name: w,
                    phone: E,
                    webfile_id: M,
                    family: X
                };
                localStorage.setItem("personal_info", JSON.stringify(te)),
                n(3),
                m({
                    message: "Amount change notified successfully",
                    type: "success"
                })
            } else
                m({
                    message: (V == null ? void 0 : V.message) || "Failed to notify",
                    type: "error"
                });
            g(!1)
        } catch (T) {
            g(!1);
            const D = T
              , Y = typeof D == "object" && (D != null && D.message) ? D.message : "Failed to get payment data. Please try again later."
              , J = typeof D == "object" && typeof D.status == "number" ? D.status : 200;
            (J === 200 || J === 200) && (m({
                message: Y,
                type: "error"
            }),
            setTimeout( () => {
                ha(h)
            }
            , 5e3)),
            m({
                message: Y,
                type: "error"
            })
        }
    }
    ;
    return j.useEffect( () => {
        const T = setTimeout( () => {
            s(!0)
        }
        , 3e3);
        return () => clearTimeout(T)
    }
    , []),
    f.jsxs("div", {
        className: "grid gap-x-6 gap-y-2",
        children: [d && f.jsx(Ot, {
            message: d.message,
            type: d.type,
            onClose: () => m(null)
        }), f.jsxs("div", {
            className: "sm:col-span-3",
            children: [f.jsx("label", {
                htmlFor: "first-name",
                className: "block text-xs font-light text-black uppercase",
                children: (re = u == null ? void 0 : u.lblInputName) == null ? void 0 : re[o]
            }), f.jsx("div", {
                className: "mt-2",
                children: f.jsx("input", {
                    type: "text",
                    name: "full-name",
                    id: "full-name",
                    value: x,
                    disabled: !0,
                    autoComplete: "off",
                    placeholder: (fe = u == null ? void 0 : u.lblInputRegName) == null ? void 0 : fe[o],
                    className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                })
            })]
        }), f.jsxs("div", {
            className: "sm:col-span-3",
            children: [f.jsx("label", {
                htmlFor: "first-name",
                className: "block text-xs font-light text-black uppercase",
                children: (he = u == null ? void 0 : u.lblInputEmail) == null ? void 0 : he[o]
            }), f.jsx("div", {
                className: "mt-2",
                children: f.jsx("input", {
                    type: "text",
                    name: "email",
                    id: "email",
                    onCopy: T => T.preventDefault(),
                    onPaste: T => T.preventDefault(),
                    onCut: T => T.preventDefault(),
                    value: w,
                    disabled: !0,
                    autoComplete: "off",
                    className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                })
            })]
        }), f.jsxs("div", {
            className: "sm:col-span-3",
            children: [f.jsx("label", {
                htmlFor: "first-name",
                className: "block text-xs font-light text-black uppercase",
                children: (me = u == null ? void 0 : u.lblInputContactNo) == null ? void 0 : me[o]
            }), f.jsx("div", {
                className: "mt-2",
                children: f.jsx("input", {
                    type: "text",
                    name: "user_phone",
                    id: "user_phone",
                    onCopy: T => T.preventDefault(),
                    onPaste: T => T.preventDefault(),
                    onCut: T => T.preventDefault(),
                    value: E,
                    disabled: !0,
                    autoComplete: "off",
                    className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                })
            })]
        }), f.jsxs("div", {
            className: "sm:col-span-3",
            children: [f.jsx("label", {
                htmlFor: "first-name",
                className: "block text-xs font-light text-black uppercase",
                children: (ie = u == null ? void 0 : u.ovWebID) == null ? void 0 : ie[o]
            }), f.jsx("div", {
                className: "mt-2",
                children: f.jsx("input", {
                    type: "text",
                    name: "webfile_id",
                    id: "webfile_id",
                    value: M,
                    disabled: !0,
                    autoComplete: "off",
                    className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                })
            })]
        }), f.jsxs("div", {
            className: "sm:col-span-3",
            children: [[...Array(P)].map( (T, D) => {
                var Y, J, S, V, te, W, le, ee, ae, de;
                return f.jsxs("div", {
                    className: "flex flex-col w-full gap-2",
                    children: [f.jsxs("div", {
                        className: "w-full",
                        children: [f.jsxs("label", {
                            htmlFor: "first-name",
                            className: "block text-xs font-light text-black uppercase my-2",
                            children: [(Y = u == null ? void 0 : u.lblInputFamily) == null ? void 0 : Y[o], " ", D + 1]
                        }), f.jsxs("label", {
                            htmlFor: "first-name",
                            className: "block text-xs font-light text-black uppercase",
                            children: [(J = u == null ? void 0 : u.lblInputFullName) == null ? void 0 : J[o], " ", f.jsxs("span", {
                                className: "text-red-600 text-[10px]",
                                children: ["*(", (S = u == null ? void 0 : u.lblRequired) == null ? void 0 : S[o], ")"]
                            })]
                        }), f.jsx("div", {
                            className: "mt-2",
                            children: f.jsx("input", {
                                type: "text",
                                name: `full-name-${D}`,
                                id: `full-name-${D}`,
                                onCopy: ne => ne.preventDefault(),
                                onPaste: ne => ne.preventDefault(),
                                onCut: ne => ne.preventDefault(),
                                value: ((V = X[D + 1]) == null ? void 0 : V.name) || "",
                                onChange: ne => q(D, "name", ne.target.value),
                                autoComplete: "off",
                                className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"
                            })
                        })]
                    }), f.jsxs("div", {
                        className: "sm:col-span-3",
                        children: [f.jsxs("label", {
                            htmlFor: "first-name",
                            className: "block text-xs font-light text-black uppercase",
                            children: [(te = u == null ? void 0 : u.lblInputFamilyWebFile) == null ? void 0 : te[o], " ", f.jsxs("span", {
                                className: "text-red-600 text-[10px]",
                                children: ["*(", (W = u == null ? void 0 : u.lblMustFace7) == null ? void 0 : W[o], ")"]
                            })]
                        }), f.jsx("div", {
                            className: "mt-2",
                            children: f.jsx("input", {
                                type: "text",
                                name: `web-file-number-${D}`,
                                id: `web-file-number-${D}`,
                                onCopy: ne => ne.preventDefault(),
                                onPaste: ne => ne.preventDefault(),
                                onCut: ne => ne.preventDefault(),
                                value: ((le = X[D + 1]) == null ? void 0 : le.webfile_no) || "",
                                onChange: ne => q(D, "webfile_no", ne.target.value),
                                autoComplete: "off",
                                className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"
                            })
                        })]
                    }), f.jsxs("div", {
                        className: "sm:col-span-3",
                        children: [f.jsxs("label", {
                            htmlFor: "first-name",
                            className: "block text-xs font-light text-black uppercase",
                            children: [(ee = u == null ? void 0 : u.lblInputFamilyWebFileAgain) == null ? void 0 : ee[o], " ", f.jsxs("span", {
                                className: "text-red-600 text-[10px]",
                                children: ["*(", (ae = u == null ? void 0 : u.lblNoCopyPaste) == null ? void 0 : ae[o], ")"]
                            })]
                        }), f.jsx("div", {
                            className: "mt-2",
                            children: f.jsx("input", {
                                type: "text",
                                name: `web-file-number-repeat-${D}`,
                                id: `web-file-number-repeat-${D}`,
                                onCopy: ne => ne.preventDefault(),
                                onPaste: ne => ne.preventDefault(),
                                onCut: ne => ne.preventDefault(),
                                value: ((de = X[D + 1]) == null ? void 0 : de.again_webfile_no) || "",
                                onChange: ne => q(D, "again_webfile_no", ne.target.value),
                                autoComplete: "off",
                                className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"
                            })
                        })]
                    })]
                }, D)
            }
            ), f.jsx("div", {
                className: "sm:col-span-3",
                children: p ? f.jsxs(ue.button, {
                    type: "button",
                    whileTap: {
                        scale: .95
                    },
                    className: "text-white mb-2 duration-300 cursor-not-allowed mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition bg-gray-500 ",
                    children: [(se = u == null ? void 0 : u.checking) == null ? void 0 : se[o], "..."]
                }) : f.jsx(ue.button, {
                    type: "button",
                    whileTap: {
                        scale: .95
                    },
                    className: `text-white mb-2 duration-300 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition bg-[#28a745] hover:bg-[#218838] ${l ? "cursor-pointer" : "cursor-not-allowed opacity-50"}`,
                    onClick: l ? Q : void 0,
                    disabled: !l,
                    children: (F = u == null ? void 0 : u.lblSaveNext) == null ? void 0 : F[o]
                })
            })]
        })]
    })
}
  , MT = ({setActiveStep: n}) => {
    var S, V, te, W, le, ee;
    const l = pa()
      , [s,o] = j.useState(!1)
      , {language: u, translations: h} = ut()
      , [d,m] = j.useState(0)
      , [p,g] = j.useState(-1)
      , [x,v] = j.useState(null)
      , [w,N] = j.useState(null)
      , [E,_] = j.useState(null)
      , [M,U] = j.useState(null)
      , [P,B] = j.useState(null)
      , [X,O] = j.useState(null)
      , [q,I] = j.useState({})
      , [,Q] = j.useState(!1)
      , [re,fe] = j.useState(null)
      , [he,me] = j.useState(null)
      , [ie,se] = j.useState(!1)
      , F = async () => {
        if (ie) {
            Q(!0);
            const ae = localStorage.getItem("access_token");
            try {
                const de = await qe("/api/v2/payment/overview-submit", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        language: u,
                        Authorization: `Bearer ${ae}`
                    }
                });
                if (Q(!1),
                de.status_code === 200) {
                    const ne = localStorage.getItem("applicant")
                      , Ve = localStorage.getItem("personal_info");
                    ne && localStorage.setItem("applicant_backup", ne),
                    Ve && localStorage.setItem("personal_info_backup", Ve),
                    localStorage.removeItem("applicant"),
                    localStorage.removeItem("personal_info"),
                    n(4),
                    v({
                        message: de == null ? void 0 : de.message,
                        type: "success"
                    })
                } else
                    v({
                        message: de == null ? void 0 : de.message,
                        type: "error"
                    })
            } catch (de) {
                const ne = de
                  , Ve = typeof ne == "object" && (ne != null && ne.message) ? ne.message : "Failed to get payment data. Please try again later."
                  , Oe = typeof ne == "object" && typeof ne.status == "number" ? ne.status : 200;
                (Oe === 200 || Oe === 200) && (v({
                    message: Ve,
                    type: "error"
                }),
                setTimeout( () => {
                    ha(l)
                }
                , 5e3)),
                v({
                    message: Ve,
                    type: "error"
                })
            }
        }
    }
    ;
    j.useEffect( () => {
        const ae = Oe => localStorage.getItem(Oe) || "";
        N(ae("auth_name")),
        _(ae("auth_email")),
        B(ae("auth_phone")),
        B(ae("auth_phone"));
        const de = localStorage.getItem("personal_info");
        if (de) {
            const Oe = JSON.parse(de);
            I(Oe == null ? void 0 : Oe.family)
        }
        const ne = localStorage.getItem("applicant")
          , Ve = localStorage.getItem("initialData");
        if (ne && Ve)
            try {
                const Oe = JSON.parse(ne)
                  , Re = JSON.parse(Ve);
                if (U(Re.visa_fee || null),
                O(Oe.webfile_id || null),
                Re != null && Re.ivacs && (Oe == null ? void 0 : Oe.ivac_id) !== void 0) {
                    const De = Re.ivacs.find(lt => lt.id == Oe.ivac_id);
                    De && fe(De.ivac_name)
                }
                if (Re != null && Re.visa_types && (Oe == null ? void 0 : Oe.visa_type) !== void 0) {
                    const De = Re.visa_types.find(lt => lt.id == Oe.visa_type);
                    De && me(De.type_name)
                }
            } catch (Oe) {
                const Re = Oe
                  , De = typeof Re == "object" && (Re != null && Re.message) ? Re.message : "Failed to get payment data. Please try again later."
                  , lt = typeof Re == "object" && typeof Re.status == "number" ? Re.status : 200;
                (lt === 200 || lt === 200) && ha(l),
                v({
                    message: De,
                    type: "error"
                })
            }
    }
    , []),
    j.useEffect( () => {
        const ae = localStorage.getItem("applicant");
        if (ae) {
            const de = JSON.parse(ae);
            de.family_count && m(parseInt(de.family_count))
        }
    }
    , []);
    const T = ae => {
        g(de => de === ae ? null : ae)
    }
      , D = {
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
      , Y = {
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
    };
    j.useEffect( () => {
        const ae = setTimeout( () => {
            o(!0)
        }
        , 3e3);
        return () => clearTimeout(ae)
    }
    , []);
    const J = ["ovWebID", "ovIvacCenter", "ovVisaType", "ovFees", "ovName", "ovEmail", "ovContact"];
    return f.jsxs(ue.div, {
        className: "flex flex-col",
        variants: D,
        initial: "hidden",
        animate: "visible",
        children: [x && f.jsx(Ot, {
            message: x.message,
            type: x.type,
            onClose: () => v(null)
        }), f.jsxs("div", {
            className: "flex flex-row gap-2 items-center p-2 bg-green-50 border-[0.2px] border-green-100 rounded cursor-pointer",
            onClick: () => T(-1),
            children: [f.jsxs("p", {
                className: "text-xs md:text-sm font-light text-white rounded-md bg-black text-center p-2 min-w-[110px]",
                children: [(S = h == null ? void 0 : h.application_text) == null ? void 0 : S[u], " #1"]
            }), f.jsxs("p", {
                className: "text-green-700 text-xs  hover:cursor-pointer font-bold cursor-pointer hover:underline",
                children: [X ?? "", " (", (V = h == null ? void 0 : h.btnExpandOrClose) == null ? void 0 : V[u], ")"]
            })]
        }), f.jsx(ue.div, {
            initial: !1,
            animate: {
                height: p === -1 ? "auto" : 0,
                opacity: p === -1 ? 1 : 0
            },
            transition: {
                duration: .3
            },
            className: `overflow-hidden mt-2 rounded-md border-[0.2px] border-slate-300 ${p === -1 ? "py-4 mb-4" : ""}`,
            children: p === -1 && f.jsxs(ue.div, {
                className: "flex flex-wrap md:px-4 relative text-center justify-center",
                children: [J.map( (ae, de) => {
                    var ne;
                    return f.jsxs(ue.div, {
                        variants: Y,
                        initial: "hidden",
                        animate: "visible",
                        className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center w-[180px] md:w-1/3    ",
                        children: [f.jsx("p", {
                            className: "text-red-600 font-light text-[8px] md:text-[10px] break-words text-center w-full",
                            children: (ne = h == null ? void 0 : h[ae]) == null ? void 0 : ne[u]
                        }), f.jsx("p", {
                            className: "text-[12px] font-semibold break-words text-center w-full",
                            children: ae === "ovWebID" ? X || "N/A" : ae === "ovIvacCenter" ? re || "N/A" : ae === "ovVisaType" ? he || "N/A" : ae === "ovEmail" ? E || "N/A" : ae === "ovName" ? w || "N/A" : ae === "ovContact" ? P || "N/A" : ae === "ovFees" ? "BDT " + M || "N/A" : "NA"
                        })]
                    }, de)
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
                        children: [(te = h == null ? void 0 : h.edit_text) == null ? void 0 : te[u], " ", f.jsx(kg, {})]
                    })
                })]
            })
        }), [...Array(d)].map( (ae, de) => {
            var ne, Ve, Oe, Re;
            return f.jsxs(ue.div, {
                initial: "hidden",
                animate: "visible",
                children: [f.jsxs("div", {
                    className: "flex flex-row gap-2 items-center p-2 bg-green-50 border-[0.2px] border-green-100 rounded cursor-pointer",
                    onClick: () => T(de),
                    children: [f.jsxs("p", {
                        className: "text-xs md:text-sm font-light text-white rounded-md bg-black text-center p-2 min-w-[110px]",
                        children: [(ne = h == null ? void 0 : h.application_text) == null ? void 0 : ne[u], " #", de + 2]
                    }), f.jsxs("p", {
                        className: "text-green-700 text-xs  hover:cursor-pointer font-bold cursor-pointer hover:underline",
                        children: [(Ve = Object.values(q)[de]) == null ? void 0 : Ve.webfile_no, " (", (Oe = h == null ? void 0 : h.btnExpandOrClose) == null ? void 0 : Oe[u], ")"]
                    })]
                }), f.jsx(ue.div, {
                    initial: !1,
                    animate: {
                        height: p === de ? "auto" : 0,
                        opacity: p === de ? 1 : 0
                    },
                    transition: {
                        duration: .3
                    },
                    className: `overflow-hidden mt-2 rounded-md  border-[0.2px] border-slate-300 ${p === de ? "py-4 mb-4" : ""}`,
                    children: p === de && f.jsxs(ue.div, {
                        className: "flex flex-wrap md:px-4 relative text-center justify-center",
                        children: [J.map( (De, lt) => {
                            var Ne, Ie, vt;
                            return f.jsxs(ue.div, {
                                variants: Y,
                                initial: "hidden",
                                animate: "visible",
                                className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center w-[180px] md:w-1/3",
                                children: [f.jsx("p", {
                                    className: "text-red-600 font-light text-[8px] md:text-[10px] break-words text-center w-full",
                                    children: (Ne = h == null ? void 0 : h[De]) == null ? void 0 : Ne[u]
                                }), f.jsx("p", {
                                    className: "text-[12px] font-semibold break-words text-center w-full",
                                    children: De === "ovWebID" ? ((Ie = Object.values(q)[de]) == null ? void 0 : Ie.webfile_no) || "N/A" : De === "ovIvacCenter" ? re || "N/A" : De === "ovVisaType" ? he || "N/A" : De === "ovEmail" ? E || "N/A" : De === "ovName" ? ((vt = Object.values(q)[de]) == null ? void 0 : vt.name) || "N/A" : De === "ovContact" ? P || "N/A" : De === "ovFees" ? "BDT " + M || "N/A" : "NA"
                                })]
                            }, lt)
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
                                children: [(Re = h == null ? void 0 : h.edit_text) == null ? void 0 : Re[u], " ", f.jsx(kg, {})]
                            })
                        })]
                    })
                })]
            }, de)
        }
        ), f.jsxs("div", {
            className: "space-y-2 max-w-md px-2 mt-4",
            children: [f.jsxs("div", {
                className: "flex items-center space-x-2",
                children: [f.jsx("input", {
                    type: "checkbox",
                    id: "terms",
                    checked: ie,
                    onChange: ae => se(ae.target.checked)
                }), f.jsxs("label", {
                    htmlFor: "terms",
                    className: "text-sm font-light  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                    children: [(W = h == null ? void 0 : h.tcAgree) == null ? void 0 : W[u], " ", f.jsx("a", {
                        href: "https://api-payment.ivacbd.com/contents/tos.html",
                        target: "_blank",
                        className: "text-blue-600 hover:underline",
                        children: (le = h == null ? void 0 : h.tcText) == null ? void 0 : le[u]
                    })]
                })]
            }), f.jsx("button", {
                onClick: ie && s ? F : void 0,
                disabled: !ie || !s,
                className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
                      ${ie && s ? "bg-[#28a745] hover:bg-[#218838] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}
                    `,
                children: (ee = h == null ? void 0 : h.conMovePay) == null ? void 0 : ee[u]
            })]
        })]
    })
}
  , _T = ({setActiveStep: n}) => {
    var Rt, oe, ye, Qe, $e, $, je, mt, Pt, ss, is, cl, fl, os, Ai, va, bt, At, ka, dl, Ei, Ci, rs, rn, hl, Pa, Ha, un;
    const l = pa()
      , {language: s, translations: o} = ut()
      , [u,h] = j.useState(null)
      , [d,m] = j.useState(!1)
      , [p,g] = j.useState(null)
      , [x,v] = j.useState(0)
      , [w,N] = j.useState(0)
      , [E,_] = j.useState(0)
      , [M,U] = j.useState("")
      , [P,B] = j.useState(!1)
      , [X,O] = j.useState("")
      , [q,I] = j.useState(!1)
      , [Q,re] = j.useState([])
      , [fe,he] = j.useState("")
      , [me,ie] = j.useState(!1)
      , [se,F] = j.useState([])
      , [T,D] = j.useState("")
      , [Y,J] = j.useState("")
      , [S,V] = j.useState("")
      , [te,W] = j.useState("")
      , [le,ee] = j.useState(!1)
      , [ae,de] = j.useState(!1)
      , [ne,Ve] = j.useState(!1)
      , [Oe,Re] = j.useState(!1)
      , [De,lt] = j.useState(!1)
      , [Ne,Ie] = j.useState(!1)
      , [vt,et] = j.useState(0)
      , [sn,Va] = j.useState("")
      , Ta = "0x4AAAAAABvQ3Mi6RktCuZ7P"
      , [kt,Ua] = j.useState("");
    j.useEffect( () => {
        (async () => {
            var Pe, Le, Ue, Et, Di, us;
            const ge = localStorage.getItem("access_token");
            try {
                const st = await qe("/api/v2/payment/checkout", {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        language: s,
                        Authorization: `Bearer ${ge}`
                    }
                });
                st.status_code === 200 ? (N((Pe = st == null ? void 0 : st.data) == null ? void 0 : Pe.convenience_fees),
                v((Le = st == null ? void 0 : st.data) == null ? void 0 : Le.fees),
                _((Ue = st == null ? void 0 : st.data) == null ? void 0 : Ue.payable_amount),
                U((Et = st == null ? void 0 : st.data) == null ? void 0 : Et.mobile_no),
                g((us = (Di = st == null ? void 0 : st.data) == null ? void 0 : Di.payment_options) == null ? void 0 : us.data)) : h({
                    message: st.message,
                    type: "error"
                })
            } catch (st) {
                const Na = st
                  , kn = typeof Na == "object" && (Na != null && Na.message) ? Na.message : "Failed to get payment data. Please try again later."
                  , Pn = typeof Na == "object" && typeof Na.status == "number" ? Na.status : 200;
                (Pn === 200 || Pn === 200) && (h({
                    message: kn,
                    type: "error"
                }),
                setTimeout( () => {
                    ha(l)
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
    const ga = async Te => {
        const ge = localStorage.getItem("access_token");
        try {
            de(!0);
            const Pe = await qe("/api/v2/payment/pay-otp-sent", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: s,
                    Authorization: `Bearer ${ge}`
                },
                body: {
                    resend: Te
                }
            });
            if (Pe.status_code === 200) {
                B(!0),
                et(30);
                const Le = setInterval( () => {
                    et(Ue => Ue <= 1 ? (clearInterval(Le),
                    0) : Ue - 1)
                }
                , 1e3)
            } else
                h({
                    message: Pe.message,
                    type: "error"
                })
        } catch (Pe) {
            const Le = Pe
              , Ue = typeof Le == "object" && (Le != null && Le.message) ? Le.message : "Failed to get payment data. Please try again later."
              , Et = typeof Le == "object" && typeof Le.status == "number" ? Le.status : 200;
            (Et === 200 || Et === 200) && (h({
                message: Ue,
                type: "error"
            }),
            setTimeout( () => ha(l), 5e3)),
            h({
                message: Ue,
                type: "error"
            })
        } finally {
            de(!1)
        }
    }
      , za = () => ga(0)
      , Ba = () => ga(1)
      , Ft = async () => {
        var ge;
        const Te = localStorage.getItem("access_token");
        try {
            if (X.length < 6) {
                h({
                    message: "Please enter 6 digit otp",
                    type: "error"
                });
                return
            }
            Ve(!0);
            const Pe = await qe("/api/v2/payment/pay-otp-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: s,
                    Authorization: `Bearer ${Te}`
                },
                body: {
                    otp: X
                }
            });
            Pe.status_code === 200 ? (I(!0),
            re((ge = Pe == null ? void 0 : Pe.data) == null ? void 0 : ge.slot_dates)) : h({
                message: Pe.message,
                type: "error"
            })
        } catch (Pe) {
            const Le = Pe
              , Ue = typeof Le == "object" && (Le != null && Le.message) ? Le.message : "Failed to get payment data. Please try again later."
              , Et = typeof Le == "object" && typeof Le.status == "number" ? Le.status : 200;
            (Et === 200 || Et === 200) && (h({
                message: Ue,
                type: "error"
            }),
            setTimeout( () => {
                ha(l)
            }
            , 5e3)),
            h({
                message: Ue,
                type: "error"
            })
        } finally {
            Ve(!1)
        }
    }
      , ct = async Te => {
        var Le;
        const ge = Te.target.value;
        he(ge);
        const Pe = localStorage.getItem("access_token");
        try {
            lt(!0);
            const Ue = await qe("/api/v2/payment/pay-slot-time", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: s,
                    Authorization: `Bearer ${Pe}`
                },
                body: {
                    appointment_date: ge
                }
            });
            Ue.status_code === 200 ? (F(((Le = Ue == null ? void 0 : Ue.data) == null ? void 0 : Le.slot_times) ?? []),
            ie(!0)) : h({
                message: Ue.message,
                type: "error"
            })
        } catch (Ue) {
            const Et = typeof Ue == "object" && (Ue != null && Ue.message) ? Ue.message : "Failed to verify email address";
            h({
                message: Et,
                type: "error"
            })
        } finally {
            lt(!1)
        }
    }
      , [be,Je] = j.useState(null)
      , ya = fe.trim() !== "" && fe.length >= 6 && T.trim() !== "" && T.length >= 6 && be !== null && be.item.name.trim() !== "" && be.item.slug.trim() !== "" && be.item.link.trim() !== "" && kt.trim() !== "" && kt !== ""
      , La = async () => {
        const Te = localStorage.getItem("access_token");
        try {
            Ie(!0);
            const ge = await qe("/api/v2/payment/h7j3wt-now-y0k3d6", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: s,
                    Authorization: `Bearer ${Te}`
                },
                body: {
                    appointment_date: fe,
                    appointment_time: T,
                    k5t0g8_token_y4v9f6: kt,
                    selected_payment: {
                        name: be.item.name,
                        slug: be.item.slug,
                        link: be.item.link
                    }
                }
            });
            ge.status_code === 200 ? (localStorage.clear(),
            window.location.href = ge.data.url) : h({
                message: ge.message,
                type: "error"
            })
        } catch (ge) {
            const Pe = ge
              , Le = typeof Pe == "object" && (Pe != null && Pe.message) ? Pe.message : "Failed to get payment data. Please try again later."
              , Ue = typeof Pe == "object" && typeof Pe.status == "number" ? Pe.status : 200;
            (Ue === 200 || Ue === 200) && (h({
                message: Le,
                type: "error"
            }),
            setTimeout( () => {
                ha(l)
            }
            , 5e3)),
            h({
                message: Le,
                type: "error"
            })
        } finally {
            Ie(!1)
        }
    }
      , [on,xa] = j.useState("");
    j.useEffect( () => {
        const Te = setTimeout( () => {
            m(!0)
        }
        , 6e3);
        return () => clearTimeout(Te)
    }
    , []);
    const ea = {
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
    return De ? f.jsx(U0, {}) : f.jsxs(ue.div, {
        className: "flex flex-col",
        variants: ea,
        initial: "hidden",
        animate: "visible",
        children: [u && f.jsx(Ot, {
            message: u.message,
            type: u.type,
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
                                children: [(Rt = o == null ? void 0 : o.payCard) == null ? void 0 : Rt[s], " "]
                            }), f.jsx("div", {
                                className: "boxes flex flex-row justify-start gap-4 flex-wrap",
                                children: (p == null ? void 0 : p.cards) && Object.keys(p.cards).length > 0 && Object.entries(p.cards).map( ([Te,ge]) => f.jsx("div", {
                                    className: `w-18 h-16 flex items-center justify-center rounded-lg border-[1px] border-slate-300 shadow hover:cursor-pointer hover:border-[#0074D4] duration-300 ${(be == null ? void 0 : be.type) === "cards" && be.key === Te ? "ring-2 ring-[#0074D4]" : ""}`,
                                    onClick: () => Je({
                                        type: "cards",
                                        key: Te,
                                        item: ge
                                    }),
                                    children: f.jsx("img", {
                                        src: ge.link,
                                        alt: ge.name,
                                        className: "w-10 h-10 object-contain"
                                    })
                                }, Te))
                            })]
                        }), f.jsxs("div", {
                            className: "flex space-x-2 flex-col",
                            children: [f.jsxs("h3", {
                                className: "text-sm font-bold text-gray-700 mb-3",
                                children: [(oe = o == null ? void 0 : o.payInt) == null ? void 0 : oe[s], " "]
                            }), f.jsx("div", {
                                className: "boxes flex flex-row justify-start gap-4 flex-wrap",
                                children: (p == null ? void 0 : p.internet) && Object.keys(p.internet).length > 0 && Object.entries(p.internet).map( ([Te,ge]) => f.jsx("div", {
                                    className: `w-18 h-16 flex items-center justify-center rounded-lg border-[1px] border-slate-300 shadow hover:cursor-pointer hover:border-[#0074D4] duration-300  ${(be == null ? void 0 : be.type) === "internet" && be.key === Te ? "ring-2 ring-[#0074D4]" : ""}`,
                                    onClick: () => Je({
                                        type: "internet",
                                        key: Te,
                                        item: ge
                                    }),
                                    children: f.jsx("img", {
                                        src: ge.link,
                                        alt: ge.name,
                                        className: "w-full h-full object-contain"
                                    })
                                }, Te))
                            })]
                        }), f.jsxs("div", {
                            className: "flex space-x-2 flex-col",
                            children: [f.jsxs("h3", {
                                className: "text-sm font-bold text-gray-700 mb-3",
                                children: [(ye = o == null ? void 0 : o.payMob) == null ? void 0 : ye[s], " "]
                            }), f.jsx("div", {
                                className: "boxes flex flex-row justify-start gap-4 flex-wrap",
                                children: (p == null ? void 0 : p.mobile) && Object.keys(p.mobile).length > 0 && Object.entries(p.mobile).map( ([Te,ge]) => f.jsx("div", {
                                    className: `w-18 h-16 flex items-center justify-center rounded-lg border-[1px] border-slate-300 shadow hover:cursor-pointer hover:border-[#0074D4] duration-300 ${(be == null ? void 0 : be.type) === "mobile" && be.key === Te ? "ring-2 ring-[#0074D4]" : ""}`,
                                    onClick: () => Je({
                                        type: "mobile",
                                        key: Te,
                                        item: ge
                                    }),
                                    children: f.jsx("img", {
                                        src: ge.link,
                                        alt: ge.name,
                                        className: "w-full h-full object-contain"
                                    })
                                }, Te))
                            })]
                        }), f.jsxs("div", {
                            className: "flex space-x-2 flex-col",
                            children: [f.jsx("h3", {
                                className: "text-sm font-bold text-gray-700 mb-3",
                                children: (Qe = o == null ? void 0 : o.payOth) == null ? void 0 : Qe[s]
                            }), f.jsx("div", {
                                className: "boxes flex flex-row justify-start gap-4 flex-wrap",
                                children: (p == null ? void 0 : p.others) && Object.keys(p.others).length > 0 && Object.entries(p.others).map( ([Te,ge]) => f.jsx("div", {
                                    className: `w-18 h-16 flex items-center justify-center rounded-lg border-[1px] border-slate-300 shadow hover:cursor-pointer hover:border-[#0074D4] duration-300 ${(be == null ? void 0 : be.type) === "others" && be.key === Te ? "ring-2 ring-[#0074D4]" : ""}`,
                                    onClick: () => Je({
                                        type: "others",
                                        key: Te,
                                        item: ge
                                    }),
                                    children: f.jsx("img", {
                                        src: ge.link,
                                        alt: ge.name,
                                        className: "w-full h-full object-contain"
                                    })
                                }, Te))
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
                                src: cj,
                                className: "w-36",
                                alt: ""
                            })
                        })
                    }), f.jsx("div", {
                        className: "bg-blue-50 border border-gray-200 rounded-lg px-4 py-2 mb-4",
                        children: be ? f.jsxs("div", {
                            className: "flex justify-between items-center ",
                            children: [f.jsx("p", {
                                className: "font-bold",
                                children: ($ = be == null ? void 0 : be.item) == null ? void 0 : $.name
                            }), f.jsx("img", {
                                src: (je = be == null ? void 0 : be.item) == null ? void 0 : je.link,
                                alt: (mt = be == null ? void 0 : be.item) == null ? void 0 : mt.name,
                                className: "w-10 h-10 object-contain"
                            })]
                        }) : f.jsxs("p", {
                            className: "text-gray-600 text-sm text-center",
                            children: [" ", ($e = o == null ? void 0 : o.paySelectOption) == null ? void 0 : $e[s], " "]
                        })
                    }), f.jsxs("div", {
                        className: "space-y-3 mb-4",
                        children: [f.jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [f.jsxs("span", {
                                className: "text-sm font-medium text-gray-700",
                                children: [" ", (Pt = o == null ? void 0 : o.ovFees) == null ? void 0 : Pt[s], " :"]
                            }), f.jsxs("span", {
                                className: "text-sm text-gray-900",
                                children: [x, " BDT"]
                            })]
                        }), w != "0.00" && f.jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [f.jsxs("span", {
                                className: "text-sm text-gray-600",
                                children: [" ", (ss = o == null ? void 0 : o.payConvFee) == null ? void 0 : ss[s], " :"]
                            }), f.jsxs("span", {
                                className: "text-sm text-gray-900",
                                children: [w, " BDT"]
                            })]
                        }), f.jsxs("div", {
                            className: "flex justify-between items-center pt-2 border-t",
                            children: [f.jsxs("span", {
                                className: "text-sm font-medium text-gray-700",
                                children: [(is = o == null ? void 0 : o.payPayable) == null ? void 0 : is[s], ":"]
                            }), f.jsxs("span", {
                                className: "text-sm font-medium text-gray-900",
                                children: [E, " BDT"]
                            })]
                        })]
                    }), f.jsxs("div", {
                        className: "mb-2",
                        children: [f.jsxs("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: [(cl = o == null ? void 0 : o.payPhone) == null ? void 0 : cl[s], ":"]
                        }), f.jsxs("div", {
                            className: "flex items-center gap-3 rounded-md flex-wrap",
                            children: [f.jsx("input", {
                                type: "tel",
                                value: M,
                                disabled: !0,
                                className: "flex-1 px-3 py-2 text-sm rounded-md border border-gray-300 bg-gray-100 text-gray-700 focus:outline-none",
                                placeholder: "Mobile number",
                                autoComplete: "off"
                            }), !q && f.jsx("button", {
                                onClick: ae || vt > 0 ? void 0 : P ? Ba : za,
                                disabled: ae || vt > 0,
                                className: `bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors duration-200 ${ae || vt > 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700 hover:cursor-pointer"}`,
                                children: ae ? `${(fl = o == null ? void 0 : o.checking) == null ? void 0 : fl[s]}...` : vt > 0 ? `${vt}s` : P ? (os = o == null ? void 0 : o.resendOtp) == null ? void 0 : os[s] : (Ai = o == null ? void 0 : o.lblInputSentOtp) == null ? void 0 : Ai[s]
                            })]
                        })]
                    }), q && f.jsx("div", {
                        className: "mb-2",
                        children: f.jsxs("p", {
                            className: "text-[10px] font-light text-green-500",
                            children: [(va = o == null ? void 0 : o.payPhone) == null ? void 0 : va[s], " ", (bt = o == null ? void 0 : o.verified) == null ? void 0 : bt[s], " "]
                        })
                    }), P && !q && f.jsxs("div", {
                        className: "mb-2",
                        children: [f.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: (At = o == null ? void 0 : o.verifyOtp) == null ? void 0 : At[s]
                        }), f.jsxs("div", {
                            className: "flex items-center gap-3 rounded-md md:flex-nowrap flex-wrap",
                            children: [f.jsx("input", {
                                type: "tel",
                                value: X,
                                onChange: Te => O(Te.target.value),
                                className: "flex-1 px-3 py-2 text-sm rounded-md border border-gray-300 bg-gray-100 text-gray-700 focus:outline-none",
                                placeholder: (ka = o == null ? void 0 : o.lblInputOtp) == null ? void 0 : ka[s],
                                autoComplete: "off"
                            }), f.jsx("button", {
                                onClick: X.length >= 6 && !ne && d ? Ft : void 0,
                                disabled: X.length < 6 || ne || !d,
                                className: `bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors duration-300 ${X.length < 6 || ne || !d ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700 hover:cursor-pointer"}`,
                                children: ne ? ((dl = o == null ? void 0 : o.checking) == null ? void 0 : dl[s]) + "..." : (Ei = o == null ? void 0 : o.verify) == null ? void 0 : Ei[s]
                            })]
                        })]
                    }), q && f.jsxs("div", {
                        className: "my-4",
                        children: [f.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: (Ci = o == null ? void 0 : o.lblInputAppointDate) == null ? void 0 : Ci[s]
                        }), f.jsxs("select", {
                            id: "appointment_date",
                            name: "appointment_date",
                            value: fe ?? "",
                            onChange: ct,
                            className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6",
                            children: [f.jsx("option", {
                                value: "",
                                disabled: !0,
                                hidden: !0,
                                children: (rs = o == null ? void 0 : o.lblInputAppointment) == null ? void 0 : rs[s]
                            }), Q && Object.keys(Q).length > 0 && Object.entries(Q).map( ([Te,ge]) => f.jsx("option", {
                                value: ge,
                                children: ge
                            }, Te))]
                        })]
                    }), me && f.jsxs("div", {
                        className: "mb-6 mt-2",
                        children: [f.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: (rn = o == null ? void 0 : o.lblInputAppointTime) == null ? void 0 : rn[s]
                        }), f.jsxs("select", {
                            id: "appointment_date",
                            name: "appointment_date",
                            value: T ?? "",
                            onChange: Te => D(Te.target.value),
                            className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6",
                            children: [f.jsx("option", {
                                value: "",
                                disabled: !0,
                                hidden: !0,
                                children: (hl = o == null ? void 0 : o.selectAppointmentTime) == null ? void 0 : hl[s]
                            }), Array.isArray(se) && se.length > 0 && se.map(Te => f.jsx("option", {
                                value: Te.time_display,
                                children: Te.time_display
                            }, Te.id))]
                        })]
                    }), T != "" && f.jsx("div", {
                        className: "sm:col-span-3",
                        children: f.jsx(nr, {
                            sitekey: Ta,
                            onVerify: Te => Ua(Te)
                        })
                    }), f.jsx("button", {
                        className: `w-full py-3 mb-2 rounded-lg duration-300 text-white
    ${ya && !Ne ? "bg-green-600 hover:bg-green-700 cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`,
                        disabled: !ya || Ne,
                        onClick: ya && !Ne ? La : void 0,
                        children: Ne ? ((Pa = o == null ? void 0 : o.processing) == null ? void 0 : Pa[s]) + "..." : (Ha = o == null ? void 0 : o.payNow) == null ? void 0 : Ha[s]
                    }), f.jsx("p", {
                        className: "text-xs text-red-500 text-center",
                        children: (un = o == null ? void 0 : o.msgTrans5min) == null ? void 0 : un[s]
                    })]
                })]
            })
        })]
    })
}
  , OT = () => {
    var m, p, g, x, v;
    const {language: n, translations: l} = ut()
      , [s,o] = j.useState( () => {
        const w = localStorage.getItem("authStep")
          , N = parseInt(w || "1", 10);
        return N >= 1 && N <= 4 ? N : 1
    }
    );
    j.useEffect( () => {
        localStorage.setItem("authStep", s.toString())
    }
    , [s]);
    const u = [{
        id: 1,
        name: (m = l == null ? void 0 : l.lblTabMenu1) == null ? void 0 : m[n]
    }, {
        id: 2,
        name: (p = l == null ? void 0 : l.lblTabMenu2) == null ? void 0 : p[n]
    }, {
        id: 3,
        name: (g = l == null ? void 0 : l.lblTabMenu3) == null ? void 0 : g[n]
    }, {
        id: 4,
        name: (x = l == null ? void 0 : l.lblTabMenu4) == null ? void 0 : x[n]
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
        visible: w => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: w * .3
            }
        })
    };
    return f.jsx(f.Fragment, {
        children: f.jsxs(ue.div, {
            className: "flex flex-col bg-[#b5d6a9] sm:mx-8 lg:mx-20 rounded-md shadow-lg border-[0.1px] border-slate-300 overflow-auto",
            variants: h,
            initial: "hidden",
            animate: "visible",
            children: [f.jsxs("div", {
                className: "flex flex-row gap-4 text-xs overflow-x-scroll border-b-[0.1px] border-slate-300 scroll-smooth scrollbar-hide",
                children: [f.jsx("p", {
                    className: "font-bold bg-white rounded-tl py-4 px-4",
                    children: (v = l == null ? void 0 : l.lblTabMenuAuth) == null ? void 0 : v[n]
                }), u.map( (w, N) => f.jsxs(ue.p, {
                    custom: N,
                    variants: d,
                    initial: "hidden",
                    animate: "visible",
                    className: "py-2 px-4 flex items-center min-w-[160px] text-[#5c7b2f] font-bold",
                    children: [f.jsx("span", {
                        className: "bg-white rounded-full px-2 py-1 mr-2 text-xs font-bold",
                        children: f.jsx("i", {
                            children: w.id
                        })
                    }), w.name]
                }, w.id))]
            }), f.jsxs("div", {
                className: "bg-white w-full py-1 md:px-2 lg:px-4",
                children: [s === 1 && f.jsx(jj, {
                    setStep: o
                }), s === 2 && f.jsx(Tj, {
                    setStep: o
                }), s === 3 && f.jsx(Nj, {
                    setStep: o
                }), s === 4 && f.jsx(Aj, {
                    setStep: o
                }), s === 5 && f.jsx(bT, {
                    setStep: o
                }), s === 6 && f.jsx(ST, {
                    setStep: o
                }), s === 7 && f.jsx(wT, {
                    setStep: o
                }), s === 8 && f.jsx(jT, {
                    setStep: o
                }), s === 9 && f.jsx(TT, {
                    setStep: o
                }), s === 10 && f.jsx(NT, {
                    setStep: o
                }), s === 100 && f.jsx(ET, {
                    setStep: o
                })]
            })]
        })
    })
}
  , RT = () => {
    var X, O, q, I, Q, re, fe, he, me, ie, se, F, T, D, Y, J;
    const n = pa()
      , {language: l, translations: s} = ut()
      , [o,u] = j.useState("")
      , [h,d] = j.useState(null)
      , [m,p] = j.useState(!1)
      , [g,x] = j.useState(null)
      , [v,w] = j.useState("")
      , [N,E] = j.useState(!1)
      , _ = "0x4AAAAAABpNUpzYeppBoYpe"
      , M = o && o.length >= 12 && v !== ""
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
    }
      , P = {
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
      , B = async () => {
        try {
            if (!M) {
                d({
                    message: "Please enter valid data",
                    type: "error"
                });
                return
            }
            E(!0);
            const S = await qe("/api/v2/get-payment-info", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    info: {
                        webfile_id: o,
                        captcha_token: v
                    }
                }
            });
            S.status_code === 200 ? (p(!0),
            x(S.data)) : d({
                message: (S == null ? void 0 : S.message) || "Failed to get payment info",
                type: "error"
            })
        } catch (S) {
            const V = S
              , te = typeof V == "object" && (V != null && V.message) ? V.message : "Failed to get payment data. Please try again later."
              , W = typeof V == "object" && typeof V.status == "number" ? V.status : 200;
            (W === 200 || W === 200) && ha(n),
            d({
                message: te,
                type: "error"
            })
        } finally {
            E(!1)
        }
    }
    ;
    return f.jsx(f.Fragment, {
        children: m ? f.jsxs(ue.div, {
            className: "overflow-hidden mt-2 rounded-md  border-[0.2px] border-slate-300 bg-white  py-4 lg:w-3/4 mx-auto",
            variants: U,
            initial: "hidden",
            animate: "visible",
            children: [f.jsx("p", {
                className: "font-light text-center text-lg mb-8",
                children: (Q = s == null ? void 0 : s.ovPayStatus) == null ? void 0 : Q[l]
            }), f.jsxs(ue.div, {
                className: "grid sm:grid-cols-2 md:grid-cols-3 md:px-4 text-center",
                variants: U,
                children: [f.jsxs(ue.div, {
                    variants: P,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [f.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (re = s == null ? void 0 : s.ovWebID) == null ? void 0 : re[l]
                    }), f.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: g == null ? void 0 : g.webfile_id
                    })]
                }), f.jsxs(ue.div, {
                    variants: P,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [f.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (fe = s == null ? void 0 : s.ovIvacCenter) == null ? void 0 : fe[l]
                    }), f.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: g == null ? void 0 : g.ivac_name
                    })]
                }), f.jsxs(ue.div, {
                    variants: P,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [f.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (he = s == null ? void 0 : s.ovVisaType) == null ? void 0 : he[l]
                    }), f.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: g == null ? void 0 : g.visa_type
                    })]
                }), f.jsxs(ue.div, {
                    variants: P,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [f.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (me = s == null ? void 0 : s.ovFees) == null ? void 0 : me[l]
                    }), f.jsxs("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: [g == null ? void 0 : g.final_amount, " BDT"]
                    })]
                }), f.jsxs(ue.div, {
                    variants: P,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [f.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (ie = s == null ? void 0 : s.ovName) == null ? void 0 : ie[l]
                    }), f.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: g == null ? void 0 : g.name
                    })]
                }), f.jsxs(ue.div, {
                    variants: P,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [f.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (se = s == null ? void 0 : s.ovEmail) == null ? void 0 : se[l]
                    }), f.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: g == null ? void 0 : g.email
                    })]
                }), f.jsxs(ue.div, {
                    variants: P,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [f.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (F = s == null ? void 0 : s.ovContact) == null ? void 0 : F[l]
                    }), f.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: g == null ? void 0 : g.phone
                    })]
                }), f.jsxs(ue.div, {
                    variants: P,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [f.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (T = s == null ? void 0 : s.ovAppointment) == null ? void 0 : T[l]
                    }), f.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: g == null ? void 0 : g.appointment_date
                    })]
                }), f.jsxs(ue.div, {
                    variants: P,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [f.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (D = s == null ? void 0 : s.ovPayStatus) == null ? void 0 : D[l]
                    }), f.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: g == null ? void 0 : g.status
                    })]
                })]
            }), f.jsxs(ue.div, {
                className: "flex items-center justify-center my-8 gap-2 px-4 flex-col md:flex-row",
                initial: "hidden",
                animate: "visible",
                variants: U,
                children: [f.jsxs("button", {
                    type: "button",
                    className: "flex items-center gap-2 bg-gray-800 rounded-md shadow-md text-white text-[14px] px-4 py-2 hover:bg-black cursor-pointer uppercase",
                    onClick: () => {
                        if (g != null && g.download_invoice) {
                            const S = document.createElement("a");
                            S.href = `data:application/pdf;base64,${g.download_invoice}`,
                            S.download = "invoice.pdf",
                            document.body.appendChild(S),
                            S.click(),
                            document.body.removeChild(S)
                        }
                    }
                    ,
                    children: [f.jsx(M0, {}), " ", (Y = s == null ? void 0 : s.btnDownPDF) == null ? void 0 : Y[l]]
                }), f.jsxs("button", {
                    type: "button",
                    className: "flex items-center gap-2 bg-cyan-500 rounded-md shadow-md text-white text-[14px] px-4 py-2 hover:bg-cyan-600 cursor-pointer uppercase",
                    onClick: () => {
                        if (g != null && g.print_invoice) {
                            const S = window.open("", "_blank");
                            S && S.document.write(`<iframe src="data:application/pdf;base64,${g.print_invoice}" frameborder="0" style="width:100vw;height:100vh;"></iframe>`)
                        }
                    }
                    ,
                    children: [f.jsx(_0, {}), " ", (J = s == null ? void 0 : s.btnPrintPDF) == null ? void 0 : J[l]]
                })]
            })]
        }) : f.jsxs(ue.div, {
            className: "flex flex-col bg-green-200  sm:mx-12 lg:mx-44 rounded-md pb-4 overflow-hidden border-[0.1px] border-slate-300",
            variants: U,
            initial: "hidden",
            animate: "visible",
            children: [h && f.jsx(Ot, {
                message: h.message,
                type: h.type,
                onClose: () => d(null)
            }), f.jsxs("div", {
                className: "flex flex-col items-start sm:items-center justify-center bg-white rounded-t-md px-4 py-6",
                children: [f.jsx("p", {
                    className: "text-lg mb-8 font-bold",
                    children: (X = s == null ? void 0 : s.lblQueryStatus) == null ? void 0 : X[l]
                }), f.jsx("p", {
                    className: "font-light text-xs mb-1",
                    children: (O = s == null ? void 0 : s.lblInputWebFile) == null ? void 0 : O[l]
                }), f.jsx("input", {
                    type: "text",
                    id: "name",
                    autoComplete: "off",
                    maxLength: 12,
                    className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-md shadow focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full sm:w-1/2 p-2.5 my-2",
                    onChange: S => u(S.target.value),
                    value: o
                }), o && o.length == 12 && f.jsx("div", {
                    className: "sm:col-span-3",
                    children: f.jsx(nr, {
                        sitekey: _,
                        onVerify: S => w(S)
                    })
                }), N ? f.jsxs(ue.button, {
                    type: "button",
                    whileTap: {
                        scale: .95
                    },
                    className: `text-white flex items-center justify-center mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
                            bg-gray-400 cursor-not-allowed
                          `,
                    children: [(q = s == null ? void 0 : s.checking) == null ? void 0 : q[l], "..."]
                }) : f.jsx(ue.button, {
                    type: "button",
                    disabled: !M,
                    whileTap: {
                        scale: .95
                    },
                    className: `text-white flex items-center cursor-pointer justify-center mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
                            ${M ? "bg-[#28a745] hover:bg-[#218838]" : "bg-gray-400 cursor-not-allowed"}
                          `,
                    onClick: B,
                    children: (I = s == null ? void 0 : s.btnQueryStatus) == null ? void 0 : I[l]
                })]
            })]
        })
    })
}
  , VT = () => {
    var m, p, g, x;
    const {language: n, translations: l} = ut()
      , [s,o] = j.useState( () => {
        const v = localStorage.getItem("activeStep");
        return v ? parseInt(v) : 1
    }
    )
      , u = [{
        id: 1,
        name: (m = l == null ? void 0 : l.lblTabMenu1) == null ? void 0 : m[n]
    }, {
        id: 2,
        name: (p = l == null ? void 0 : l.lblTabMenu2) == null ? void 0 : p[n]
    }, {
        id: 3,
        name: (g = l == null ? void 0 : l.lblTabMenu3) == null ? void 0 : g[n]
    }, {
        id: 4,
        name: (x = l == null ? void 0 : l.lblTabMenu4) == null ? void 0 : x[n]
    }];
    j.useEffect( () => {
        localStorage.setItem("activeStep", s.toString())
    }
    , [s]);
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
        visible: v => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: v * .3
            }
        })
    };
    return f.jsx(f.Fragment, {
        children: f.jsxs(ue.div, {
            className: "flex flex-col bg-[#b5d6a9] sm:mx-8 lg:mx-20 border-[0.1px] border-slate-300 rounded-md shadow-lg pb-4",
            variants: h,
            initial: "hidden",
            animate: "visible",
            children: [f.jsx("div", {
                className: "flex flex-row gap-4  text-xs overflow-x-scroll scrollbar-hide border-b-[0.1px] border-slate-300",
                children: u.map( (v, w) => f.jsxs(ue.p, {
                    custom: w,
                    variants: d,
                    initial: "hidden",
                    animate: "visible",
                    className: `py-2 px-4 flex items-center font-bold rounded-t min-w-[160px] ${s === v.id ? "bg-white text-black" : "text-[#5c7a2f]"}`,
                    children: [f.jsx("span", {
                        className: `rounded-full px-2 py-1 mr-2 font-light text-xs italic ${s === v.id ? "bg-green-600 text-white" : "bg-white text-gray-500"}`,
                        children: v.id
                    }), v.name]
                }, v.id))
            }), f.jsxs("div", {
                className: "bg-white w-full p-4 overflow-y-scroll",
                children: [s === 1 && f.jsx(CT, {
                    setActiveStep: o
                }), s === 2 && f.jsx(DT, {
                    setActiveStep: o
                }), s === 3 && f.jsx(MT, {
                    setActiveStep: o
                }), s === 4 && f.jsx(_T, {
                    setActiveStep: o
                })]
            })]
        })
    })
}
  , UT = () => {
    var P, B, X, O, q, I, Q, re, fe, he, me, ie, se, F;
    const {id: n} = tT()
      , {language: l, translations: s} = ut()
      , o = pa()
      , [u,h] = j.useState(null)
      , [d,m] = j.useState([])
      , [p,g] = j.useState(0)
      , [x,v] = j.useState(!1)
      , [w,N] = j.useState(!1)
      , [E,_] = j.useState(null);
    j.useEffect( () => {
        n && (async () => {
            var D, Y, J;
            v(!0);
            try {
                const S = await qe(`/api/v2/multi-payment/status/${n}`, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        language: l || "en"
                    }
                });
                S.status_code === 200 ? (console.log("response", ((D = S == null ? void 0 : S.data) == null ? void 0 : D.total_charge) == "0.90"),
                h(S),
                m((Y = S == null ? void 0 : S.data) == null ? void 0 : Y.transactions),
                g((J = S == null ? void 0 : S.data) == null ? void 0 : J.successful_transaction_count)) : (_({
                    message: S.message,
                    type: "error"
                }),
                N(!0))
            } catch (S) {
                N(!0);
                const V = S
                  , te = typeof V == "object" && (V != null && V.message) ? V.message : "Failed to get payment data. Please try again later.";
                _({
                    message: te,
                    type: "error"
                })
            } finally {
                v(!1)
            }
        }
        )()
    }
    , [n, l]);
    const M = () => {
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
    return x ? f.jsx("div", {
        className: "flex justify-center items-center h-screen",
        children: f.jsx("div", {
            className: "w-12 h-12 border-4 border-green-500 border-dashed rounded-full animate-spin"
        })
    }) : (console.log("paymentData", d),
    f.jsx(f.Fragment, {
        children: f.jsxs(ue.div, {
            className: "flex flex-col bg-[#b5d6a9] sm:mx-8 lg:mx-20 border-[0.1px] border-slate-300 rounded-md shadow-lg pb-4",
            variants: U,
            initial: "hidden",
            animate: "visible",
            children: [E && f.jsx(Ot, {
                message: E.message,
                type: E.type,
                onClose: () => _(null)
            }), w ? f.jsxs("div", {
                className: "bg-white flex flex-col justify-center items-center py-4",
                children: [f.jsx("h1", {
                    className: "text-center text-red-500 font-light text-2xl mt-2",
                    children: (ie = s == null ? void 0 : s.failed) == null ? void 0 : ie[l]
                }), f.jsx("p", {
                    className: "text-sm font-light",
                    children: (se = s == null ? void 0 : s.noTransactionFound) == null ? void 0 : se[l]
                }), f.jsx("button", {
                    type: "button",
                    onClick: M,
                    className: "hover:cursor-pointer bg-amber-400 rounded-md px-2 py-2 mt-3 uppercase text-sm font-light hover:text-white",
                    children: (F = s == null ? void 0 : s.startOverToPayment) == null ? void 0 : F[l]
                })]
            }) : f.jsxs("div", {
                className: "bg-white",
                children: [f.jsx("h1", {
                    className: "text-center text-green-500 font-light text-2xl mt-2",
                    children: u == null ? void 0 : u.message
                }), f.jsxs("p", {
                    className: "text-center font-light text-xs my-4",
                    children: [(P = s == null ? void 0 : s.payment_response_text1) == null ? void 0 : P[l], " ", f.jsxs("span", {
                        className: "underline font-bold",
                        children: ["“", (B = u == null ? void 0 : u.data) == null ? void 0 : B.transaction_id, "”"]
                    }), "  ", (X = s == null ? void 0 : s.payment_response_text2) == null ? void 0 : X[l]]
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
                                    }), ((O = u == null ? void 0 : u.data) == null ? void 0 : O.total_charge) != "0.00" && f.jsx("th", {
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
                                children: d.map( (T, D) => {
                                    var Y;
                                    return f.jsxs("tr", {
                                        className: "bg-white  border-gray-200 hover:bg-gray-50",
                                        children: [f.jsx("td", {
                                            className: "px-6 py-4",
                                            children: T == null ? void 0 : T.webfile_id
                                        }), f.jsx("td", {
                                            className: "px-6 py-4",
                                            children: T == null ? void 0 : T.ivac_name
                                        }), f.jsxs("td", {
                                            className: "px-6 py-4",
                                            children: [T == null ? void 0 : T.appointment_date, " (", T == null ? void 0 : T.appointment_time_slot, ")"]
                                        }), f.jsx("td", {
                                            className: "px-6 py-4 uppercase",
                                            children: T == null ? void 0 : T.email
                                        }), f.jsx("td", {
                                            className: "px-6 py-4",
                                            children: T == null ? void 0 : T.phone
                                        }), ((Y = u == null ? void 0 : u.data) == null ? void 0 : Y.total_charge) != "0.00" && f.jsx("td", {
                                            className: "px-6 py-4",
                                            children: T == null ? void 0 : T.charge
                                        }), f.jsx("td", {
                                            className: "px-6 py-4",
                                            children: T == null ? void 0 : T.amount
                                        }), f.jsx("td", {
                                            className: "px-6 py-4",
                                            children: T == null ? void 0 : T.status
                                        })]
                                    }, D)
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
                            children: ["* ", (q = s == null ? void 0 : s.lblPaymentSuccessQueue) == null ? void 0 : q[l]]
                        })
                    }), f.jsxs("div", {
                        className: " text-black font-light text-sm p-2 w-full sm:w-auto",
                        children: [((I = u == null ? void 0 : u.data) == null ? void 0 : I.total_charge) != "0.00" && f.jsxs("div", {
                            className: "grid grid-cols-2 gap-2 text-right",
                            children: [f.jsx("p", {
                                className: "text-left",
                                children: "Total Charges:"
                            }), f.jsxs("p", {
                                children: ["BDT ", (Q = u == null ? void 0 : u.data) == null ? void 0 : Q.total_charge]
                            })]
                        }), f.jsxs("div", {
                            className: "grid grid-cols-2 gap-2 text-right",
                            children: [f.jsx("p", {
                                className: "text-left",
                                children: "Total Fees :"
                            }), f.jsxs("p", {
                                children: ["BDT ", (re = u == null ? void 0 : u.data) == null ? void 0 : re.total_fees]
                            })]
                        })]
                    })]
                }), f.jsxs("div", {
                    className: "flex justify-center items-center mt-4 mx-4",
                    children: [f.jsxs("button", {
                        type: "button",
                        className: "flex items-center gap-2 flex-wrap text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",
                        onClick: () => {
                            var T;
                            if ((T = u == null ? void 0 : u.data) != null && T.download_invoice) {
                                const D = document.createElement("a");
                                D.href = `data:application/pdf;base64,${u.data.download_invoice}`,
                                D.download = "invoice.pdf",
                                document.body.appendChild(D),
                                D.click(),
                                document.body.removeChild(D)
                            }
                        }
                        ,
                        children: [f.jsx(M0, {}), f.jsx("span", {
                            children: (fe = s == null ? void 0 : s.btnDownPDF) == null ? void 0 : fe[l]
                        })]
                    }), f.jsxs("button", {
                        type: "button",
                        className: "hover:cursor-pointer flex text-white bg-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",
                        onClick: () => {
                            var T;
                            if ((T = u == null ? void 0 : u.data) != null && T.print_invoice) {
                                const D = document.createElement("a");
                                D.href = `data:application/pdf;base64,${u.data.print_invoice}`,
                                D.target = "_blank",
                                D.download = "invoice_print.pdf",
                                document.body.appendChild(D),
                                D.click(),
                                document.body.removeChild(D)
                            }
                        }
                        ,
                        children: [f.jsx(_0, {}), " ", (he = s == null ? void 0 : s.btnPrintPDF) == null ? void 0 : he[l]]
                    }), f.jsx("button", {
                        type: "button",
                        disabled: p >= 5,
                        onClick: M,
                        className: `text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
                            ${p >= 5 ? "bg-gray-400 cursor-not-allowed" : "hover:cursor-pointer bg-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800"}
                           `,
                        children: (me = s == null ? void 0 : s.makeNewPayment) == null ? void 0 : me[l]
                    })]
                })]
            })]
        })
    }))
}
  , zT = () => {
    var v, w, N;
    const {language: n, translations: l} = ut()
      , s = sr()
      , o = pa()
      , [u,h] = j.useState( () => !!localStorage.getItem("access_token"))
      , d = localStorage.getItem("auth_photo")
      , m = localStorage.getItem("auth_name") ? localStorage.getItem("auth_name") : "User Name";
    j.useEffect( () => {
        const E = () => {
            h(!!localStorage.getItem("access_token"))
        }
        ;
        return window.addEventListener("storage", E),
        window.addEventListener("tokenUpdate", E),
        () => {
            window.removeEventListener("storage", E),
            window.removeEventListener("tokenUpdate", E)
        }
    }
    , []);
    const p = s.pathname === "/payment-status"
      , g = () => {
        o(p ? -1 : "/payment-status")
    }
      , x = () => {
        localStorage.clear(),
        h(!1),
        window.dispatchEvent(new Event("tokenUpdate")),
        o("/")
    }
    ;
    return f.jsxs("div", {
        className: "md:px-8 py-4 flex justify-between flex-col lg:flex-row items-center gap-4",
        children: [f.jsx(ue.div, {
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
                src: rj,
                alt: "SIB Logo",
                className: "w-56"
            })
        }), f.jsxs(ue.div, {
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
                children: p ? (v = l == null ? void 0 : l.bckToPay) == null ? void 0 : v[n] : (w = l == null ? void 0 : l.QueryPay) == null ? void 0 : w[n]
            }), f.jsx("div", {
                className: "flex flex-row items-center gap-2",
                children: u && f.jsxs(f.Fragment, {
                    children: [f.jsxs("p", {
                        className: "flex items-center justify-center gap-1 text-sm",
                        children: [d ? f.jsx("img", {
                            src: `${d}`,
                            alt: "User",
                            className: "w-6 h-6 rounded-full object-cover"
                        }) : f.jsx(ej, {}), " ", m]
                    }), f.jsx("span", {
                        children: "|"
                    }), f.jsxs("p", {
                        className: "text-sm hover:cursor-pointer text-red-500",
                        onClick: x,
                        children: ["[ ", (N = l == null ? void 0 : l.logout_button) == null ? void 0 : N[n], " ]"]
                    })]
                })
            })]
        })]
    })
}
  , BT = () => f.jsx("div", {
    className: "px-8 py-4 flex justify-center md:justify-end items-center",
    children: f.jsx("div", {
        className: "flex items-center gap-2 text-sm text-gray-600",
        children: f.jsx("img", {
            src: uj,
            alt: "SSL Logo",
            className: " w-80"
        })
    })
})
  , Ig = ({children: n}) => localStorage.getItem("access_token") ? f.jsx(I0, {
    to: "/application",
    replace: !0
}) : n
  , LT = ({children: n}) => localStorage.getItem("access_token") ? n : f.jsx(I0, {
    to: "/",
    replace: !0
})
  , kT = j.createContext({
    hasToken: !1,
    setHasToken: () => {}
})
  , PT = ({children: n}) => {
    const [l,s] = j.useState(!!localStorage.getItem("access_token"));
    return j.useEffect( () => {
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
    f.jsx(kT.Provider, {
        value: {
            hasToken: l,
            setHasToken: s
        },
        children: n
    })
}
  , HT = () => {
    const [n,l] = j.useState(!0)
      , [s,o] = j.useState(!1);
    return j.useEffect( () => {
        const u = setTimeout( () => {
            o(!0)
        }
        , 3e3);
        return () => clearTimeout(u)
    }
    , []),
    n ? f.jsx(f.Fragment, {
        children: f.jsx(ue.div, {
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
  , YT = () => f.jsx("div", {
    className: "mx-auto sm:px-6 lg:px-8 py-8 max-w-7xl",
    children: f.jsx("div", {
        className: "flex flex-col md:flex-row",
        children: f.jsxs("div", {
            className: "w-full p-4",
            children: [f.jsx("h3", {
                className: "text-xl font-semibold mb-4",
                children: "Introduction: Online Indian Visa Application Processing Fee Payment"
            }), f.jsxs("p", {
                className: "text-justify mb-4 text-sm leading-7",
                children: ["This User Manual provides instructions on how Indian Visa Applicants in Bangladesh can use the https://payment.ivacbd.com site to pay their Indian Visa Processing Fees conveniently using multiple payment options. This document provides step-by-step guidelines on How to Use the site efficiently.", f.jsx("br", {}), f.jsx("br", {}), "This user manual contains screenshots and descriptions, which can help the Visa Applicant to use the site correctly.", f.jsx("br", {}), f.jsx("br", {}), "This User Manual provides complete guideline on how to use the payment.ivacbd.com site and how to pay Indian Visa processing fees and perform related tasks using the site. However, if you need any support regarding the payment of the fees, please send us an Email to: ivac@sslwireless.com, mentioning your problem in details."]
            }), f.jsx("h3", {
                className: "text-xl font-semibold mb-2",
                children: "Home/Main Page"
            }), f.jsx("p", {
                className: "mb-4 text-sm leading-7",
                children: "At first, the Applicant (referred to as ‘User’ or ‘You’ hereinafter) has to go to the https://payment.ivacbd.com page to initiate the Indian Visa Processing Fee Payment."
            }), f.jsx("div", {
                className: " mb-8 mt-8",
                children: f.jsx("img", {
                    className: "mx-auto max-w-full",
                    src: fj,
                    alt: "Home page screenshot"
                })
            }), f.jsx("h3", {
                className: "text-xl font-semibold mb-4 mt-5",
                children: "You will get a Form that includes 4 (four) tabs as follows:"
            }), f.jsxs("ol", {
                className: "list-decimal ml-6 mb-4 text-sm leading-7",
                children: [f.jsx("li", {
                    children: "Application Info"
                }), f.jsx("li", {
                    children: "Personal Info"
                }), f.jsx("li", {
                    children: "Overview"
                }), f.jsx("li", {
                    children: "Payment"
                })]
            }), f.jsx("div", {
                className: "text-center mb-4",
                children: f.jsx("img", {
                    className: "mx-auto max-w-full",
                    src: dj,
                    alt: "Form screenshot"
                })
            }), f.jsx("h3", {
                className: "text-xl font-semibold mb-2 mt-8",
                children: "1. Application Info"
            }), f.jsx("p", {
                className: "mb-4 text-sm",
                children: "Follow the below step-by-step process to complete Tab-1: Application Info:"
            }), f.jsx("div", {
                className: "text-center mb-8 mt-8",
                children: f.jsx("img", {
                    className: "mx-auto max-w-full",
                    src: hj,
                    alt: "Application Info screenshot"
                })
            }), f.jsxs("ol", {
                className: "list-decimal ml-6 mb-4 text-sm leading-7",
                children: [f.jsx("li", {
                    children: "SELECT A MISSION: From the drop-down list select the Mission under which you have applied for the Visa. This will change the options under SELECT YOUR IVAC CENTER below."
                }), f.jsx("li", {
                    children: "WEB FILE NUMBER: In the next two boxes enter your WEB FILE NUMBER. Both entries must be same."
                }), f.jsx("li", {
                    children: "SELECT YOUR IVAC CENTER: From the drop-down list select the IVAC center under which you have applied for Visa. As soon as you select the IVAC center name, the AMOUNT in BDT below will update (varies between BDT 600 and BDT 700)."
                }), f.jsx("li", {
                    children: "VISA TYPE: Select the Visa type that you have applied for from the drop-down list."
                }), f.jsx("li", {
                    children: "PASSPORT NUMBER: Enter your passport number correctly."
                }), f.jsx("li", {
                    children: "Save and Next: After done with filling up the above, click on the ‘Save and Next’ button to proceed to the next tab. Note that this button will be activated only after you have completed the above fields."
                })]
            }), f.jsx("h3", {
                className: "text-xl font-semibold mb-2",
                children: "2. Personal Info"
            }), f.jsx("p", {
                className: "mb-4 text-sm",
                children: "Follow the below step-by-step process to complete Tab-2: Personal Info:"
            }), f.jsx("div", {
                className: "text-center mb-8 mt-8",
                children: f.jsx("img", {
                    className: "mx-auto max-w-full",
                    src: mj,
                    alt: "Personal Info screenshot"
                })
            }), f.jsxs("ol", {
                className: "list-decimal ml-6 mb-4 text-sm leading-7",
                children: [f.jsx("li", {
                    children: "Enter your FULL NAME (as it appears in your passport), EMAIL ADDRESS* (provide a valid Email ID, where you will get all invoices and notifications) and CONTACT NUMBER (provide a valid mobile number where you will get SMS notifications)."
                }), f.jsx("li", {
                    children: "After done with the above, click on the ‘Save and show overview’ button below, which is activated only after completing all the mandatory fields above."
                })]
            }), f.jsx("h3", {
                className: "text-xl font-semibold mb-2",
                children: "3. Overview"
            }), f.jsx("p", {
                className: "mb-4 text-sm leading-7",
                children: "In the Overview tab, you cannot edit or do not need to enter anything. However, if you find any mistake and want to edit any field, click on ‘EDIT YOUR INFORMATION’ link below. You can edit the previous tabs and come back to Overview again. As well you can click any previous tab(s) and edit your information if required."
            }), f.jsx("div", {
                className: "text-center mb-8 mt-8",
                children: f.jsx("img", {
                    className: "mx-auto max-w-full",
                    src: pj,
                    alt: "Overview screenshot"
                })
            }), f.jsx("h3", {
                className: "text-xl font-semibold mb-2",
                children: "4. Payment"
            }), f.jsx("p", {
                className: "mb-4 text-sm leading-7",
                children: "After completing the Application Info and Personal Info tabs, and finally clicked the ‘Confirm and move for payment’ button under the Overview tab, the following ‘Payment’ page will appear."
            }), f.jsx("div", {
                className: "text-center mb-8 mt-8",
                children: f.jsx("img", {
                    className: "mx-auto max-w-full",
                    src: gj,
                    alt: "Payment screenshot"
                })
            }), f.jsx("p", {
                className: "mb-4 text-sm leading-7",
                children: "Here you will see multiple payment options under SSLCOMMERZ Payment Gateway such as Debit/Credit CARDS, INTERNET BANKING, MOBILE FINANCIAL SERVICES (MFS) and OTHERS i.e. Proprietary Cards. Select your desired payment method from the available options."
            }), f.jsx("h3", {
                className: "text-xl font-semibold mb-2",
                children: "4.1 Payment Completion"
            }), f.jsx("p", {
                className: "mb-4 text-sm leading-7",
                children: "After completing the process from 1 to 4, click on the ‘Pay Now’ button under the ‘Payment’ tab to proceed to pay the total ‘Payable Amount’."
            }), f.jsx("div", {
                className: "text-center mb-8 mt-8",
                children: f.jsx("img", {
                    className: "mx-auto max-w-full",
                    src: yj,
                    alt: "Payment Completion screenshot"
                })
            }), f.jsx("p", {
                className: "mb-4 text-sm leading-7",
                children: "Enter your card credentials here and click on the ‘Pay’ button below to make the payment. For other payment options like Internet Banking or Mobile Banking, other options will appear where you need to enter your credentials."
            }), f.jsx("div", {
                className: "text-center mb-8 mt-8",
                children: f.jsx("img", {
                    className: "mx-auto max-w-full",
                    src: xj,
                    alt: "Payment Success screenshot"
                })
            }), f.jsx("h3", {
                className: "text-xl font-semibold mb-2",
                children: "4.3 Check Payment Status"
            }), f.jsx("p", {
                className: "mb-4 text-sm leading-7",
                children: "If you have applied for an Indian Visa and/or you wish to check your payment status, click on CHECK PAYMENT STATUS button at the top-right corner of the page."
            }), f.jsx("div", {
                className: "text-center mb-8 mt-8",
                children: f.jsx("img", {
                    className: "mx-auto max-w-full",
                    src: vj,
                    alt: "Check Payment Status screenshot"
                })
            }), f.jsx("p", {
                className: "mb-4 text-sm",
                children: "The below window (next page) will appear where you need to enter your WEB FILE NUMBER, and the words in the captcha under ‘Verify you are human’ and then click on ‘Check Payment’."
            }), f.jsx("div", {
                className: "text-center mb-8 mt-8",
                children: f.jsx("img", {
                    className: "mx-auto max-w-full",
                    src: bj,
                    alt: "Payment Status screenshot"
                })
            }), f.jsx("p", {
                className: "mb-4 text-sm leading-7",
                children: "After clicking on ‘Check Payment’, the below information will appear under ‘Your Payment Status’, which includes summary of your provided information along with your PAYMENT STATUS, ‘PAID’ or ‘UNPAID’."
            }), f.jsx("div", {
                className: "text-center mb-8 mt-8",
                children: f.jsx("img", {
                    className: "mx-auto max-w-full",
                    src: Sj,
                    alt: "Payment Status details screenshot"
                })
            }), f.jsx("p", {
                className: "mb-4 text-sm leading-7",
                children: "You can also download and/or print your payment invoice by clicking on the respective button below. Note: You can check this Payment Status for 15 (fifteen) days since you have made the payment. After 15 days this information will not be available anymore."
            })]
        })
    })
})
  , qT = () => f.jsx("div", {
    className: "mx-auto sm:px-6 lg:px-8 py-8 max-w-7xl",
    children: f.jsxs("div", {
        className: "flex flex-col",
        children: [f.jsx("div", {
            className: "w-full mb-8",
            children: f.jsx("h1", {
                className: "text-center text-3xl font-semibold mt-8 mb-8",
                children: "Frequently Asked Questions - FAQ's"
            })
        }), f.jsxs("div", {
            className: "w-full mb-6",
            children: [f.jsx("h4", {
                className: "text-[18px] font-semibold leading-7 mb-2",
                children: "Q: Where do I go to pay the Indian Visa Application fee?"
            }), f.jsxs("p", {
                className: "text-justify leading-7 text-sm",
                children: ["A: Visit this page/link from your browser:", " ", f.jsx("a", {
                    href: "https://payment.ivacbd.com",
                    className: "text-blue-600",
                    children: "https://payment.ivacbd.com"
                }), ". You will get a Form that includes 4 tabs: 1) Application Info, 2) Personal Info, 3) Overview, and 4) Payment. Fill up the empty fields following the guidelines available on the page and finally click ‘Pay Now’ to make the payment by selecting your chosen payment option."]
            })]
        }), f.jsxs("div", {
            className: "w-full mb-6",
            children: [f.jsx("h4", {
                className: "text-[18px] font-semibold leading-7 mb-2",
                children: "Q: Can I see/fill up the next tabs before completing the first ones?"
            }), f.jsx("p", {
                className: "text-justify leading-7 text-sm",
                children: "A: No, you need to fill in the empty fields of the tabs sequentially. You can click the ‘Save and Next’ under a tab after completing the fields and then you can go to the next tab. However, once you complete filling up the fields of a tab and go to the next one, you can go back to the earlier tab(s) for revision or editing."
            })]
        }), f.jsxs("div", {
            className: "w-full mb-6",
            children: [f.jsx("h4", {
                className: "text-[18px] font-semibold leading-7 mb-2",
                children: "Q: What information do I need to have before making the payment?"
            }), f.jsx("p", {
                className: "text-justify leading-7 text-sm",
                children: "A: You need to have your correct WEB FILE Number & Visa Type. Once you have submitted your Visa application, you would get the Web File Number from IVAC."
            })]
        }), f.jsxs("div", {
            className: "w-full mb-6",
            children: [f.jsx("h4", {
                className: "text-[18px] font-semibold leading-7 mb-2",
                children: "Q: How do I select and what should I enter in Application Info?"
            }), f.jsx("p", {
                className: "text-justify leading-7 text-sm",
                children: "Follow the below step-by-step process to complete tab-1: Application Info:"
            }), f.jsxs("ul", {
                className: "list-decimal ml-6 mb-4 text-sm leading-7",
                children: [f.jsx("li", {
                    children: "SELECT A MISSION: From the drop-down list, select the Mission under which you have applied for the Visa."
                }), f.jsx("li", {
                    children: "In the next two boxes, enter your WEB FILE NUMBER. Both entries must be exactly the same."
                }), f.jsx("li", {
                    children: "SELECT YOUR IVAC CENTER: From the drop-down list, select the IVAC center under which you have applied for the Indian Visa. As soon as you select the IVAC center name, the AMOUNT in BDT below will be automatically populated."
                }), f.jsx("li", {
                    children: "VISA TYPE: Select the Visa type that you have applied for from the drop-down list."
                }), f.jsx("li", {
                    children: "Save and Next: This button will be activated only after you have completed the above fields. Click on this button to proceed to the next tab."
                })]
            })]
        }), f.jsxs("div", {
            className: "w-full mb-6",
            children: [f.jsx("h4", {
                className: "text-[18px] font-semibold leading-7 mb-2",
                children: "Q: How do I select and what should I enter in Personal Info?"
            }), f.jsx("p", {
                className: "text-justify text-sm leading-7",
                children: "Follow the below step-by-step process to complete tab-2: Personal Info:"
            }), f.jsxs("ul", {
                className: "list-decimal ml-6 mb-4 text-sm leading-7",
                children: [f.jsx("li", {
                    children: "Enter your FULL NAME (as it appears in your passport), EMAIL ADDRESS, and MOBILE NUMBER."
                }), f.jsx("li", {
                    children: "Select an APPOINTMENT TYPE from the drop-down list. If you select WALK-IN, then you are done with this tab. However, if you select DATE, another box will appear where you will need to select an APPOINTMENT DATE from the calendar as given to you by IVAC."
                }), f.jsx("li", {
                    children: "After completing the above steps, click on the ‘Save and show overview’ button below."
                })]
            })]
        }), f.jsxs("div", {
            className: "w-full mb-6",
            children: [f.jsx("h4", {
                className: "text-[18px] font-semibold leading-7 mb-2",
                children: "What is the Overview tab? What to do here?"
            }), f.jsx("p", {
                className: "text-justify text-sm leading-7",
                children: "A: The tab-3: ‘Overview’ provides you a summary of the information you have entered in the first two tabs. Here you cannot or do not need to enter anything. This is to review if you have provided all the information accurately in the earlier tabs. If you find any mistake and want to edit any field, click on ‘EDIT YOUR INFORMATION’ link below. You can edit the fields in the previous tabs and come back to Overview again. In this Tab, you can add up to 4 family members’ visas who are from the same family and submitted visa applications for the same visa type. After done reviewing, click on ‘Confirm and move for payment’ button below. You must click to tick the checkbox beside ‘I agree to the Terms of Service’ to proceed."
            })]
        }), f.jsxs("div", {
            className: "w-full mb-6",
            children: [f.jsx("h4", {
                className: "text-[18px] font-semibold leading-7 mb-2",
                children: "What if I don’t check the ‘I agree to the Terms of Service’ checkbox?"
            }), f.jsx("p", {
                className: "text-justify text-sm leading-7",
                children: "A: If you don’t check the ‘I agree to the Terms of Service’ checkbox, you will not be allowed to proceed to Payment. If you click on ‘Confirm and move for payment’ leaving the mentioned box unchecked, an Error message prompt will appear. You must check this box to proceed forward. You can view the ‘Terms of Service’ by clicking on it."
            })]
        }), f.jsxs("div", {
            className: "w-full mb-6",
            children: [f.jsx("h4", {
                className: "text-[18px] font-semibold leading-7 mb-2",
                children: "Appointment Date & Time Selection"
            }), f.jsx("p", {
                className: "text-justify text-sm leading-7",
                children: "A: On the payment page, you will find Appointment Date & Time where you have to select and book an appointment for visa form submission. Please make sure you are selecting this before you choose any payment channel."
            })]
        }), f.jsxs("div", {
            className: "w-full mb-6",
            children: [f.jsx("h4", {
                className: "text-[18px] font-semibold leading-7 mb-2",
                children: "What is the Appointment Date?"
            }), f.jsx("p", {
                className: "text-justify text-sm leading-7",
                children: "A: Appointment Date is the date that you have selected in the APPOINTMENT under Payment tab. This is the date & Time you have been given by IVAC to visit the center with your documents and payment receipt."
            })]
        })]
    })
});
function GT() {
    const {isLoading: n, error: l, refreshData: s} = Bf()
      , [o,u] = j.useState("")
      , [h,d] = j.useState("")
      , m = window.location.pathname === "/";
    return j.useEffect( () => {
        const p = localStorage.getItem("authStep");
        p && d(p)
    }
    , []),
    j.useEffect( () => {
        const p = g => {
            g.preventDefault()
        }
        ;
        return document.addEventListener("contextmenu", p),
        () => {
            document.removeEventListener("contextmenu", p)
        }
    }
    , []),
    j.useEffect( () => {
        const p = g => {
            (g.key === "F12" || g.ctrlKey && g.shiftKey && g.key === "I" || g.ctrlKey && g.shiftKey && g.key === "C" || g.ctrlKey && g.shiftKey && g.key === "J" || g.ctrlKey && g.key === "U") && g.preventDefault()
        }
        ;
        return document.addEventListener("keydown", p),
        () => {
            document.removeEventListener("keydown", p)
        }
    }
    , []),
    j.useEffect( () => {
        !n && l && (u(l),
        s())
    }
    , [l, n, s]),
    n ? f.jsx(wj, {
        message: o || "Loading, please wait..."
    }) : f.jsx(PT, {
        children: f.jsx(tj, {
            children: f.jsx(vT, {
                children: f.jsxs(Fg, {
                    children: [f.jsx(Rn, {
                        path: "/user-manual",
                        element: f.jsx(YT, {})
                    }), f.jsx(Rn, {
                        path: "/faq",
                        element: f.jsx(qT, {})
                    }), f.jsx(Rn, {
                        path: "/*",
                        element: f.jsxs("div", {
                            className: "flex flex-col md:h-screen",
                            children: [f.jsx(ij, {}), f.jsxs("div", {
                                className: "flex flex-1 flex-col md:flex-row overflow-hidden",
                                children: [f.jsx("div", {
                                    className: "w-full md:w-1/3 lg:w-1/4 bg-gray-800 md:h-screen h-full scrollbar-hide pb-4",
                                    children: f.jsx(aj, {})
                                }), f.jsxs("div", {
                                    className: "w-full md:flex-1 overflow-y-auto bg-gray-50 p-4 flex flex-col bg-cover bg-center",
                                    style: {
                                        backgroundImage: `url(${V0})`
                                    },
                                    children: [f.jsx("div", {
                                        className: "mb-4",
                                        children: f.jsx(zT, {})
                                    }), f.jsx("div", {
                                        className: "flex-1",
                                        children: f.jsxs(Fg, {
                                            children: [f.jsx(Rn, {
                                                path: "/",
                                                element: f.jsx(Ig, {
                                                    children: f.jsx(OT, {})
                                                })
                                            }), f.jsx(Rn, {
                                                path: "/payment-status",
                                                element: f.jsx(RT, {})
                                            }), f.jsx(Rn, {
                                                path: "/application",
                                                element: f.jsx(LT, {
                                                    children: f.jsx(VT, {})
                                                })
                                            }), f.jsx(Rn, {
                                                path: "/payment-response/:id",
                                                element: f.jsx(Ig, {
                                                    children: f.jsx(UT, {})
                                                })
                                            })]
                                        })
                                    }), h === "1" && m && f.jsx(HT, {}), f.jsx(BT, {})]
                                })]
                            })]
                        })
                    })]
                })
            })
        })
    })
}
pb.createRoot(document.getElementById("root")).render(f.jsx(j.StrictMode, {
    children: f.jsx(AT, {
        children: f.jsx(GT, {})
    })
}));

