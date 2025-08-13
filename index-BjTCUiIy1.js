function Wv(n, l) {
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
function eb(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
var uc = {
    exports: {}
}
  , ti = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mp;
function tb() {
    if (mp)
        return ti;
    mp = 1;
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
    return ti.Fragment = l,
    ti.jsx = s,
    ti.jsxs = s,
    ti
}
var pp;
function ab() {
    return pp || (pp = 1,
    uc.exports = tb()),
    uc.exports
}
var f = ab()
  , cc = {
    exports: {}
}
  , Ee = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gp;
function nb() {
    if (gp)
        return Ee;
    gp = 1;
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
      , x = Symbol.for("react.lazy")
      , v = Symbol.iterator;
    function T(j) {
        return j === null || typeof j != "object" ? null : (j = v && j[v] || j["@@iterator"],
        typeof j == "function" ? j : null)
    }
    var A = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , M = Object.assign
      , V = {};
    function D(j, H, Z) {
        this.props = j,
        this.context = H,
        this.refs = V,
        this.updater = Z || A
    }
    D.prototype.isReactComponent = {},
    D.prototype.setState = function(j, H) {
        if (typeof j != "object" && typeof j != "function" && j != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, j, H, "setState")
    }
    ,
    D.prototype.forceUpdate = function(j) {
        this.updater.enqueueForceUpdate(this, j, "forceUpdate")
    }
    ;
    function U() {}
    U.prototype = D.prototype;
    function L(j, H, Z) {
        this.props = j,
        this.context = H,
        this.refs = V,
        this.updater = Z || A
    }
    var B = L.prototype = new U;
    B.constructor = L,
    M(B, D.prototype),
    B.isPureReactComponent = !0;
    var Q = Array.isArray
      , _ = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null
    }
      , $ = Object.prototype.hasOwnProperty;
    function ee(j, H, Z, X, le, ae) {
        return Z = ae.ref,
        {
            $$typeof: n,
            type: j,
            key: H,
            ref: Z !== void 0 ? Z : null,
            props: ae
        }
    }
    function J(j, H) {
        return ee(j.type, H, void 0, void 0, void 0, j.props)
    }
    function ie(j) {
        return typeof j == "object" && j !== null && j.$$typeof === n
    }
    function me(j) {
        var H = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + j.replace(/[=:]/g, function(Z) {
            return H[Z]
        })
    }
    var ge = /\/+/g;
    function he(j, H) {
        return typeof j == "object" && j !== null && j.key != null ? me("" + j.key) : H.toString(36)
    }
    function ue() {}
    function W(j) {
        switch (j.status) {
        case "fulfilled":
            return j.value;
        case "rejected":
            throw j.reason;
        default:
            switch (typeof j.status == "string" ? j.then(ue, ue) : (j.status = "pending",
            j.then(function(H) {
                j.status === "pending" && (j.status = "fulfilled",
                j.value = H)
            }, function(H) {
                j.status === "pending" && (j.status = "rejected",
                j.reason = H)
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
    function P(j, H, Z, X, le) {
        var ae = typeof j;
        (ae === "undefined" || ae === "boolean") && (j = null);
        var G = !1;
        if (j === null)
            G = !0;
        else
            switch (ae) {
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
                case x:
                    return G = j._init,
                    P(G(j._payload), H, Z, X, le)
                }
            }
        if (G)
            return le = le(j),
            G = X === "" ? "." + he(j, 0) : X,
            Q(le) ? (Z = "",
            G != null && (Z = G.replace(ge, "$&/") + "/"),
            P(le, H, Z, "", function(we) {
                return we
            })) : le != null && (ie(le) && (le = J(le, Z + (le.key == null || j && j.key === le.key ? "" : ("" + le.key).replace(ge, "$&/") + "/") + G)),
            H.push(le)),
            1;
        G = 0;
        var ve = X === "" ? "." : X + ":";
        if (Q(j))
            for (var ye = 0; ye < j.length; ye++)
                X = j[ye],
                ae = ve + he(X, ye),
                G += P(X, H, Z, ae, le);
        else if (ye = T(j),
        typeof ye == "function")
            for (j = ye.call(j),
            ye = 0; !(X = j.next()).done; )
                X = X.value,
                ae = ve + he(X, ye++),
                G += P(X, H, Z, ae, le);
        else if (ae === "object") {
            if (typeof j.then == "function")
                return P(W(j), H, Z, X, le);
            throw H = String(j),
            Error("Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead.")
        }
        return G
    }
    function N(j, H, Z) {
        if (j == null)
            return j;
        var X = []
          , le = 0;
        return P(j, X, "", "", function(ae) {
            return H.call(Z, ae, le++)
        }),
        X
    }
    function O(j) {
        if (j._status === -1) {
            var H = j._result;
            H = H(),
            H.then(function(Z) {
                (j._status === 0 || j._status === -1) && (j._status = 1,
                j._result = Z)
            }, function(Z) {
                (j._status === 0 || j._status === -1) && (j._status = 2,
                j._result = Z)
            }),
            j._status === -1 && (j._status = 0,
            j._result = H)
        }
        if (j._status === 1)
            return j._result.default;
        throw j._result
    }
    var Y = typeof reportError == "function" ? reportError : function(j) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var H = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof j == "object" && j !== null && typeof j.message == "string" ? String(j.message) : String(j),
                error: j
            });
            if (!window.dispatchEvent(H))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", j);
            return
        }
        console.error(j)
    }
    ;
    function te() {}
    return Ee.Children = {
        map: N,
        forEach: function(j, H, Z) {
            N(j, function() {
                H.apply(this, arguments)
            }, Z)
        },
        count: function(j) {
            var H = 0;
            return N(j, function() {
                H++
            }),
            H
        },
        toArray: function(j) {
            return N(j, function(H) {
                return H
            }) || []
        },
        only: function(j) {
            if (!ie(j))
                throw Error("React.Children.only expected to receive a single React element child.");
            return j
        }
    },
    Ee.Component = D,
    Ee.Fragment = s,
    Ee.Profiler = c,
    Ee.PureComponent = L,
    Ee.StrictMode = o,
    Ee.Suspense = m,
    Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _,
    Ee.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(j) {
            return _.H.useMemoCache(j)
        }
    },
    Ee.cache = function(j) {
        return function() {
            return j.apply(null, arguments)
        }
    }
    ,
    Ee.cloneElement = function(j, H, Z) {
        if (j == null)
            throw Error("The argument must be a React element, but you passed " + j + ".");
        var X = M({}, j.props)
          , le = j.key
          , ae = void 0;
        if (H != null)
            for (G in H.ref !== void 0 && (ae = void 0),
            H.key !== void 0 && (le = "" + H.key),
            H)
                !$.call(H, G) || G === "key" || G === "__self" || G === "__source" || G === "ref" && H.ref === void 0 || (X[G] = H[G]);
        var G = arguments.length - 2;
        if (G === 1)
            X.children = Z;
        else if (1 < G) {
            for (var ve = Array(G), ye = 0; ye < G; ye++)
                ve[ye] = arguments[ye + 2];
            X.children = ve
        }
        return ee(j.type, le, void 0, void 0, ae, X)
    }
    ,
    Ee.createContext = function(j) {
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
    Ee.createElement = function(j, H, Z) {
        var X, le = {}, ae = null;
        if (H != null)
            for (X in H.key !== void 0 && (ae = "" + H.key),
            H)
                $.call(H, X) && X !== "key" && X !== "__self" && X !== "__source" && (le[X] = H[X]);
        var G = arguments.length - 2;
        if (G === 1)
            le.children = Z;
        else if (1 < G) {
            for (var ve = Array(G), ye = 0; ye < G; ye++)
                ve[ye] = arguments[ye + 2];
            le.children = ve
        }
        if (j && j.defaultProps)
            for (X in G = j.defaultProps,
            G)
                le[X] === void 0 && (le[X] = G[X]);
        return ee(j, ae, void 0, void 0, null, le)
    }
    ,
    Ee.createRef = function() {
        return {
            current: null
        }
    }
    ,
    Ee.forwardRef = function(j) {
        return {
            $$typeof: p,
            render: j
        }
    }
    ,
    Ee.isValidElement = ie,
    Ee.lazy = function(j) {
        return {
            $$typeof: x,
            _payload: {
                _status: -1,
                _result: j
            },
            _init: O
        }
    }
    ,
    Ee.memo = function(j, H) {
        return {
            $$typeof: g,
            type: j,
            compare: H === void 0 ? null : H
        }
    }
    ,
    Ee.startTransition = function(j) {
        var H = _.T
          , Z = {};
        _.T = Z;
        try {
            var X = j()
              , le = _.S;
            le !== null && le(Z, X),
            typeof X == "object" && X !== null && typeof X.then == "function" && X.then(te, Y)
        } catch (ae) {
            Y(ae)
        } finally {
            _.T = H
        }
    }
    ,
    Ee.unstable_useCacheRefresh = function() {
        return _.H.useCacheRefresh()
    }
    ,
    Ee.use = function(j) {
        return _.H.use(j)
    }
    ,
    Ee.useActionState = function(j, H, Z) {
        return _.H.useActionState(j, H, Z)
    }
    ,
    Ee.useCallback = function(j, H) {
        return _.H.useCallback(j, H)
    }
    ,
    Ee.useContext = function(j) {
        return _.H.useContext(j)
    }
    ,
    Ee.useDebugValue = function() {}
    ,
    Ee.useDeferredValue = function(j, H) {
        return _.H.useDeferredValue(j, H)
    }
    ,
    Ee.useEffect = function(j, H, Z) {
        var X = _.H;
        if (typeof Z == "function")
            throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return X.useEffect(j, H)
    }
    ,
    Ee.useId = function() {
        return _.H.useId()
    }
    ,
    Ee.useImperativeHandle = function(j, H, Z) {
        return _.H.useImperativeHandle(j, H, Z)
    }
    ,
    Ee.useInsertionEffect = function(j, H) {
        return _.H.useInsertionEffect(j, H)
    }
    ,
    Ee.useLayoutEffect = function(j, H) {
        return _.H.useLayoutEffect(j, H)
    }
    ,
    Ee.useMemo = function(j, H) {
        return _.H.useMemo(j, H)
    }
    ,
    Ee.useOptimistic = function(j, H) {
        return _.H.useOptimistic(j, H)
    }
    ,
    Ee.useReducer = function(j, H, Z) {
        return _.H.useReducer(j, H, Z)
    }
    ,
    Ee.useRef = function(j) {
        return _.H.useRef(j)
    }
    ,
    Ee.useState = function(j) {
        return _.H.useState(j)
    }
    ,
    Ee.useSyncExternalStore = function(j, H, Z) {
        return _.H.useSyncExternalStore(j, H, Z)
    }
    ,
    Ee.useTransition = function() {
        return _.H.useTransition()
    }
    ,
    Ee.version = "19.1.0",
    Ee
}
var yp;
function Ic() {
    return yp || (yp = 1,
    cc.exports = nb()),
    cc.exports
}
var S = Ic();
const lb = eb(S)
  , sb = Wv({
    __proto__: null,
    default: lb
}, [S]);
var fc = {
    exports: {}
}
  , ai = {}
  , dc = {
    exports: {}
}
  , hc = {};
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
function ib() {
    return xp || (xp = 1,
    function(n) {
        function l(N, O) {
            var Y = N.length;
            N.push(O);
            e: for (; 0 < Y; ) {
                var te = Y - 1 >>> 1
                  , j = N[te];
                if (0 < c(j, O))
                    N[te] = O,
                    N[Y] = j,
                    Y = te;
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
              , Y = N.pop();
            if (Y !== O) {
                N[0] = Y;
                e: for (var te = 0, j = N.length, H = j >>> 1; te < H; ) {
                    var Z = 2 * (te + 1) - 1
                      , X = N[Z]
                      , le = Z + 1
                      , ae = N[le];
                    if (0 > c(X, Y))
                        le < j && 0 > c(ae, X) ? (N[te] = ae,
                        N[le] = Y,
                        te = le) : (N[te] = X,
                        N[Z] = Y,
                        te = Z);
                    else if (le < j && 0 > c(ae, Y))
                        N[te] = ae,
                        N[le] = Y,
                        te = le;
                    else
                        break e
                }
            }
            return O
        }
        function c(N, O) {
            var Y = N.sortIndex - O.sortIndex;
            return Y !== 0 ? Y : N.id - O.id
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
          , x = 1
          , v = null
          , T = 3
          , A = !1
          , M = !1
          , V = !1
          , D = !1
          , U = typeof setTimeout == "function" ? setTimeout : null
          , L = typeof clearTimeout == "function" ? clearTimeout : null
          , B = typeof setImmediate < "u" ? setImmediate : null;
        function Q(N) {
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
        function _(N) {
            if (V = !1,
            Q(N),
            !M)
                if (s(m) !== null)
                    M = !0,
                    $ || ($ = !0,
                    he());
                else {
                    var O = s(g);
                    O !== null && P(_, O.startTime - N)
                }
        }
        var $ = !1
          , ee = -1
          , J = 5
          , ie = -1;
        function me() {
            return D ? !0 : !(n.unstable_now() - ie < J)
        }
        function ge() {
            if (D = !1,
            $) {
                var N = n.unstable_now();
                ie = N;
                var O = !0;
                try {
                    e: {
                        M = !1,
                        V && (V = !1,
                        L(ee),
                        ee = -1),
                        A = !0;
                        var Y = T;
                        try {
                            t: {
                                for (Q(N),
                                v = s(m); v !== null && !(v.expirationTime > N && me()); ) {
                                    var te = v.callback;
                                    if (typeof te == "function") {
                                        v.callback = null,
                                        T = v.priorityLevel;
                                        var j = te(v.expirationTime <= N);
                                        if (N = n.unstable_now(),
                                        typeof j == "function") {
                                            v.callback = j,
                                            Q(N),
                                            O = !0;
                                            break t
                                        }
                                        v === s(m) && o(m),
                                        Q(N)
                                    } else
                                        o(m);
                                    v = s(m)
                                }
                                if (v !== null)
                                    O = !0;
                                else {
                                    var H = s(g);
                                    H !== null && P(_, H.startTime - N),
                                    O = !1
                                }
                            }
                            break e
                        } finally {
                            v = null,
                            T = Y,
                            A = !1
                        }
                        O = void 0
                    }
                } finally {
                    O ? he() : $ = !1
                }
            }
        }
        var he;
        if (typeof B == "function")
            he = function() {
                B(ge)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var ue = new MessageChannel
              , W = ue.port2;
            ue.port1.onmessage = ge,
            he = function() {
                W.postMessage(null)
            }
        } else
            he = function() {
                U(ge, 0)
            }
            ;
        function P(N, O) {
            ee = U(function() {
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
            return T
        }
        ,
        n.unstable_next = function(N) {
            switch (T) {
            case 1:
            case 2:
            case 3:
                var O = 3;
                break;
            default:
                O = T
            }
            var Y = T;
            T = O;
            try {
                return N()
            } finally {
                T = Y
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
            var Y = T;
            T = N;
            try {
                return O()
            } finally {
                T = Y
            }
        }
        ,
        n.unstable_scheduleCallback = function(N, O, Y) {
            var te = n.unstable_now();
            switch (typeof Y == "object" && Y !== null ? (Y = Y.delay,
            Y = typeof Y == "number" && 0 < Y ? te + Y : te) : Y = te,
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
            return j = Y + j,
            N = {
                id: x++,
                callback: O,
                priorityLevel: N,
                startTime: Y,
                expirationTime: j,
                sortIndex: -1
            },
            Y > te ? (N.sortIndex = Y,
            l(g, N),
            s(m) === null && N === s(g) && (V ? (L(ee),
            ee = -1) : V = !0,
            P(_, Y - te))) : (N.sortIndex = j,
            l(m, N),
            M || A || (M = !0,
            $ || ($ = !0,
            he()))),
            N
        }
        ,
        n.unstable_shouldYield = me,
        n.unstable_wrapCallback = function(N) {
            var O = T;
            return function() {
                var Y = T;
                T = O;
                try {
                    return N.apply(this, arguments)
                } finally {
                    T = Y
                }
            }
        }
    }(hc)),
    hc
}
var vp;
function ob() {
    return vp || (vp = 1,
    dc.exports = ib()),
    dc.exports
}
var mc = {
    exports: {}
}
  , Vt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bp;
function rb() {
    if (bp)
        return Vt;
    bp = 1;
    var n = Ic();
    function l(m) {
        var g = "https://react.dev/errors/" + m;
        if (1 < arguments.length) {
            g += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var x = 2; x < arguments.length; x++)
                g += "&args[]=" + encodeURIComponent(arguments[x])
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
    function h(m, g, x) {
        var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: c,
            key: v == null ? null : "" + v,
            children: m,
            containerInfo: g,
            implementation: x
        }
    }
    var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function p(m, g) {
        if (m === "font")
            return "";
        if (typeof g == "string")
            return g === "use-credentials" ? g : ""
    }
    return Vt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o,
    Vt.createPortal = function(m, g) {
        var x = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
            throw Error(l(299));
        return h(m, g, null, x)
    }
    ,
    Vt.flushSync = function(m) {
        var g = d.T
          , x = o.p;
        try {
            if (d.T = null,
            o.p = 2,
            m)
                return m()
        } finally {
            d.T = g,
            o.p = x,
            o.d.f()
        }
    }
    ,
    Vt.preconnect = function(m, g) {
        typeof m == "string" && (g ? (g = g.crossOrigin,
        g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null,
        o.d.C(m, g))
    }
    ,
    Vt.prefetchDNS = function(m) {
        typeof m == "string" && o.d.D(m)
    }
    ,
    Vt.preinit = function(m, g) {
        if (typeof m == "string" && g && typeof g.as == "string") {
            var x = g.as
              , v = p(x, g.crossOrigin)
              , T = typeof g.integrity == "string" ? g.integrity : void 0
              , A = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
            x === "style" ? o.d.S(m, typeof g.precedence == "string" ? g.precedence : void 0, {
                crossOrigin: v,
                integrity: T,
                fetchPriority: A
            }) : x === "script" && o.d.X(m, {
                crossOrigin: v,
                integrity: T,
                fetchPriority: A,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0
            })
        }
    }
    ,
    Vt.preinitModule = function(m, g) {
        if (typeof m == "string")
            if (typeof g == "object" && g !== null) {
                if (g.as == null || g.as === "script") {
                    var x = p(g.as, g.crossOrigin);
                    o.d.M(m, {
                        crossOrigin: x,
                        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                        nonce: typeof g.nonce == "string" ? g.nonce : void 0
                    })
                }
            } else
                g == null && o.d.M(m)
    }
    ,
    Vt.preload = function(m, g) {
        if (typeof m == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
            var x = g.as
              , v = p(x, g.crossOrigin);
            o.d.L(m, x, {
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
    Vt.preloadModule = function(m, g) {
        if (typeof m == "string")
            if (g) {
                var x = p(g.as, g.crossOrigin);
                o.d.m(m, {
                    as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
                    crossOrigin: x,
                    integrity: typeof g.integrity == "string" ? g.integrity : void 0
                })
            } else
                o.d.m(m)
    }
    ,
    Vt.requestFormReset = function(m) {
        o.d.r(m)
    }
    ,
    Vt.unstable_batchedUpdates = function(m, g) {
        return m(g)
    }
    ,
    Vt.useFormState = function(m, g, x) {
        return d.H.useFormState(m, g, x)
    }
    ,
    Vt.useFormStatus = function() {
        return d.H.useHostTransitionStatus()
    }
    ,
    Vt.version = "19.1.0",
    Vt
}
var Sp;
function Kg() {
    if (Sp)
        return mc.exports;
    Sp = 1;
    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (l) {
                console.error(l)
            }
    }
    return n(),
    mc.exports = rb(),
    mc.exports
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
function ub() {
    if (jp)
        return ai;
    jp = 1;
    var n = ob()
      , l = Ic()
      , s = Kg();
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
    var x = Object.assign
      , v = Symbol.for("react.element")
      , T = Symbol.for("react.transitional.element")
      , A = Symbol.for("react.portal")
      , M = Symbol.for("react.fragment")
      , V = Symbol.for("react.strict_mode")
      , D = Symbol.for("react.profiler")
      , U = Symbol.for("react.provider")
      , L = Symbol.for("react.consumer")
      , B = Symbol.for("react.context")
      , Q = Symbol.for("react.forward_ref")
      , _ = Symbol.for("react.suspense")
      , $ = Symbol.for("react.suspense_list")
      , ee = Symbol.for("react.memo")
      , J = Symbol.for("react.lazy")
      , ie = Symbol.for("react.activity")
      , me = Symbol.for("react.memo_cache_sentinel")
      , ge = Symbol.iterator;
    function he(e) {
        return e === null || typeof e != "object" ? null : (e = ge && e[ge] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var ue = Symbol.for("react.client.reference");
    function W(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.$$typeof === ue ? null : e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case M:
            return "Fragment";
        case D:
            return "Profiler";
        case V:
            return "StrictMode";
        case _:
            return "Suspense";
        case $:
            return "SuspenseList";
        case ie:
            return "Activity"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case A:
                return "Portal";
            case B:
                return (e.displayName || "Context") + ".Provider";
            case L:
                return (e._context.displayName || "Context") + ".Consumer";
            case Q:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case ee:
                return t = e.displayName || null,
                t !== null ? t : W(e.type) || "Memo";
            case J:
                t = e._payload,
                e = e._init;
                try {
                    return W(e(t))
                } catch {}
            }
        return null
    }
    var P = Array.isArray
      , N = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , O = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , Y = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , te = []
      , j = -1;
    function H(e) {
        return {
            current: e
        }
    }
    function Z(e) {
        0 > j || (e.current = te[j],
        te[j] = null,
        j--)
    }
    function X(e, t) {
        j++,
        te[j] = e.current,
        e.current = t
    }
    var le = H(null)
      , ae = H(null)
      , G = H(null)
      , ve = H(null);
    function ye(e, t) {
        switch (X(G, t),
        X(ae, e),
        X(le, null),
        t.nodeType) {
        case 9:
        case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? qm(e) : 0;
            break;
        default:
            if (e = t.tagName,
            t = t.namespaceURI)
                t = qm(t),
                e = Ym(t, e);
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
        Z(le),
        X(le, e)
    }
    function we() {
        Z(le),
        Z(ae),
        Z(G)
    }
    function He(e) {
        e.memoizedState !== null && X(ve, e);
        var t = le.current
          , a = Ym(t, e.type);
        t !== a && (X(ae, e),
        X(le, a))
    }
    function Ve(e) {
        ae.current === e && (Z(le),
        Z(ae)),
        ve.current === e && (Z(ve),
        Js._currentValue = Y)
    }
    var at = Object.prototype.hasOwnProperty
      , Ut = n.unstable_scheduleCallback
      , St = n.unstable_cancelCallback
      , Kt = n.unstable_shouldYield
      , wa = n.unstable_requestPaint
      , dt = n.unstable_now
      , Aa = n.unstable_getCurrentPriorityLevel
      , ya = n.unstable_ImmediatePriority
      , Na = n.unstable_UserBlockingPriority
      , ta = n.unstable_NormalPriority
      , Ba = n.unstable_LowPriority
      , Ea = n.unstable_IdlePriority
      , La = n.log
      , Ne = n.unstable_setDisableYieldValue
      , _t = null
      , $e = null;
    function se(e) {
        if (typeof La == "function" && Ne(e),
        $e && typeof $e.setStrictMode == "function")
            try {
                $e.setStrictMode(_t, e)
            } catch {}
    }
    var de = Math.clz32 ? Math.clz32 : Fe
      , ot = Math.log
      , ze = Math.LN2;
    function Fe(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (ot(e) / ze | 0) | 0
    }
    var Je = 256
      , Oe = 4194304;
    function Ot(e) {
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
    function Ca(e, t, a) {
        var i = e.pendingLanes;
        if (i === 0)
            return 0;
        var r = 0
          , u = e.suspendedLanes
          , y = e.pingedLanes;
        e = e.warmLanes;
        var b = i & 134217727;
        return b !== 0 ? (i = b & ~u,
        i !== 0 ? r = Ot(i) : (y &= b,
        y !== 0 ? r = Ot(y) : a || (a = b & ~e,
        a !== 0 && (r = Ot(a))))) : (b = i & ~u,
        b !== 0 ? r = Ot(b) : y !== 0 ? r = Ot(y) : a || (a = i & ~e,
        a !== 0 && (r = Ot(a)))),
        r === 0 ? 0 : t !== 0 && t !== r && (t & u) === 0 && (u = r & -r,
        a = t & -t,
        u >= a || u === 32 && (a & 4194048) !== 0) ? t : r
    }
    function xa(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }
    function Bn(e, t) {
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
    function sn() {
        var e = Je;
        return Je <<= 1,
        (Je & 4194048) === 0 && (Je = 256),
        e
    }
    function ne() {
        var e = Oe;
        return Oe <<= 1,
        (Oe & 62914560) === 0 && (Oe = 4194304),
        e
    }
    function Te(e) {
        for (var t = [], a = 0; 31 > a; a++)
            t.push(e);
        return t
    }
    function ht(e, t) {
        e.pendingLanes |= t,
        t !== 268435456 && (e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0)
    }
    function Ht(e, t, a, i, r, u) {
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
          , w = e.expirationTimes
          , z = e.hiddenUpdates;
        for (a = y & ~a; 0 < a; ) {
            var K = 31 - de(a)
              , I = 1 << K;
            b[K] = 0,
            w[K] = -1;
            var k = z[K];
            if (k !== null)
                for (z[K] = null,
                K = 0; K < k.length; K++) {
                    var q = k[K];
                    q !== null && (q.lane &= -536870913)
                }
            a &= ~I
        }
        i !== 0 && ns(e, i, 0),
        u !== 0 && r === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(y & ~t))
    }
    function ns(e, t, a) {
        e.pendingLanes |= t,
        e.suspendedLanes &= ~t;
        var i = 31 - de(t);
        e.entangledLanes |= t,
        e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 4194090
    }
    function ls(e, t) {
        var a = e.entangledLanes |= t;
        for (e = e.entanglements; a; ) {
            var i = 31 - de(a)
              , r = 1 << i;
            r & t | e[i] & t && (e[i] |= t),
            a &= ~r
        }
    }
    function rl(e) {
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
    function ul(e) {
        return e &= -e,
        2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function ss() {
        var e = O.p;
        return e !== 0 ? e : (e = window.event,
        e === void 0 ? 32 : rp(e.type))
    }
    function Ni(e, t) {
        var a = O.p;
        try {
            return O.p = e,
            t()
        } finally {
            O.p = a
        }
    }
    var va = Math.random().toString(36).slice(2)
      , xt = "__reactFiber$" + va
      , At = "__reactProps$" + va
      , ka = "__reactContainer$" + va
      , cl = "__reactEvents$" + va
      , Ei = "__reactListeners$" + va
      , Ci = "__reactHandles$" + va
      , is = "__reactResources$" + va
      , on = "__reactMarker$" + va;
    function fl(e) {
        delete e[xt],
        delete e[At],
        delete e[cl],
        delete e[Ei],
        delete e[Ci]
    }
    function Ha(e) {
        var t = e[xt];
        if (t)
            return t;
        for (var a = e.parentNode; a; ) {
            if (t = a[ka] || a[xt]) {
                if (a = t.alternate,
                t.child !== null || a !== null && a.child !== null)
                    for (e = Zm(e); e !== null; ) {
                        if (a = e[xt])
                            return a;
                        e = Zm(e)
                    }
                return t
            }
            e = a,
            a = e.parentNode
        }
        return null
    }
    function Pa(e) {
        if (e = e[xt] || e[ka]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
                return e
        }
        return null
    }
    function rn(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e.stateNode;
        throw Error(o(33))
    }
    function qa(e) {
        var t = e[is];
        return t || (t = e[is] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        t
    }
    function ce(e) {
        e[on] = !0
    }
    var fe = new Set
      , Re = {};
    function Ae(e, t) {
        Le(e, t),
        Le(e + "Capture", t)
    }
    function Le(e, t) {
        for (Re[e] = t,
        e = 0; e < t.length; e++)
            fe.add(t[e])
    }
    var aa = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , os = {}
      , rs = {};
    function rt(e) {
        return at.call(rs, e) ? !0 : at.call(os, e) ? !1 : aa.test(e) ? rs[e] = !0 : (os[e] = !0,
        !1)
    }
    function Zt(e, t, a) {
        if (rt(t))
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
    function Ln(e, t, a) {
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
    function na(e, t, a, i) {
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
    var nr, zf;
    function dl(e) {
        if (nr === void 0)
            try {
                throw Error()
            } catch (a) {
                var t = a.stack.trim().match(/\n( *(at )?)/);
                nr = t && t[1] || "",
                zf = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + nr + e + zf
    }
    var lr = !1;
    function sr(e, t) {
        if (!e || lr)
            return "";
        lr = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var i = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var I = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(I.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(I, [])
                                } catch (q) {
                                    var k = q
                                }
                                Reflect.construct(e, [], I)
                            } else {
                                try {
                                    I.call()
                                } catch (q) {
                                    k = q
                                }
                                e.call(I.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (q) {
                                k = q
                            }
                            (I = e()) && typeof I.catch == "function" && I.catch(function() {})
                        }
                    } catch (q) {
                        if (q && k && typeof q.stack == "string")
                            return [q.stack, k.stack]
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
                var w = y.split(`
`)
                  , z = b.split(`
`);
                for (r = i = 0; i < w.length && !w[i].includes("DetermineComponentFrameRoot"); )
                    i++;
                for (; r < z.length && !z[r].includes("DetermineComponentFrameRoot"); )
                    r++;
                if (i === w.length || r === z.length)
                    for (i = w.length - 1,
                    r = z.length - 1; 1 <= i && 0 <= r && w[i] !== z[r]; )
                        r--;
                for (; 1 <= i && 0 <= r; i--,
                r--)
                    if (w[i] !== z[r]) {
                        if (i !== 1 || r !== 1)
                            do
                                if (i--,
                                r--,
                                0 > r || w[i] !== z[r]) {
                                    var K = `
` + w[i].replace(" at new ", " at ");
                                    return e.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", e.displayName)),
                                    K
                                }
                            while (1 <= i && 0 <= r);
                        break
                    }
            }
        } finally {
            lr = !1,
            Error.prepareStackTrace = a
        }
        return (a = e ? e.displayName || e.name : "") ? dl(a) : ""
    }
    function Zy(e) {
        switch (e.tag) {
        case 26:
        case 27:
        case 5:
            return dl(e.type);
        case 16:
            return dl("Lazy");
        case 13:
            return dl("Suspense");
        case 19:
            return dl("SuspenseList");
        case 0:
        case 15:
            return sr(e.type, !1);
        case 11:
            return sr(e.type.render, !1);
        case 1:
            return sr(e.type, !0);
        case 31:
            return dl("Activity");
        default:
            return ""
        }
    }
    function Uf(e) {
        try {
            var t = "";
            do
                t += Zy(e),
                e = e.return;
            while (e);
            return t
        } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack
        }
    }
    function la(e) {
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
    function Bf(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function Qy(e) {
        var t = Bf(e) ? "checked" : "value"
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
    function Di(e) {
        e._valueTracker || (e._valueTracker = Qy(e))
    }
    function Lf(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var a = t.getValue()
          , i = "";
        return e && (i = Bf(e) ? e.checked ? "true" : "false" : e.value),
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
    var Fy = /[\n"\\]/g;
    function sa(e) {
        return e.replace(Fy, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function ir(e, t, a, i, r, u, y, b) {
        e.name = "",
        y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.type = y : e.removeAttribute("type"),
        t != null ? y === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + la(t)) : e.value !== "" + la(t) && (e.value = "" + la(t)) : y !== "submit" && y !== "reset" || e.removeAttribute("value"),
        t != null ? or(e, y, la(t)) : a != null ? or(e, y, la(a)) : i != null && e.removeAttribute("value"),
        r == null && u != null && (e.defaultChecked = !!u),
        r != null && (e.checked = r && typeof r != "function" && typeof r != "symbol"),
        b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? e.name = "" + la(b) : e.removeAttribute("name")
    }
    function kf(e, t, a, i, r, u, y, b) {
        if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u),
        t != null || a != null) {
            if (!(u !== "submit" && u !== "reset" || t != null))
                return;
            a = a != null ? "" + la(a) : "",
            t = t != null ? "" + la(t) : a,
            b || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        i = i ?? r,
        i = typeof i != "function" && typeof i != "symbol" && !!i,
        e.checked = b ? e.checked : !!i,
        e.defaultChecked = !!i,
        y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (e.name = y)
    }
    function or(e, t, a) {
        t === "number" && Mi(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a)
    }
    function hl(e, t, a, i) {
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
            for (a = "" + la(a),
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
    function Hf(e, t, a) {
        if (t != null && (t = "" + la(t),
        t !== e.value && (e.value = t),
        a == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = a != null ? "" + la(a) : ""
    }
    function Pf(e, t, a, i) {
        if (t == null) {
            if (i != null) {
                if (a != null)
                    throw Error(o(92));
                if (P(i)) {
                    if (1 < i.length)
                        throw Error(o(93));
                    i = i[0]
                }
                a = i
            }
            a == null && (a = ""),
            t = a
        }
        a = la(t),
        e.defaultValue = a,
        i = e.textContent,
        i === a && i !== "" && i !== null && (e.value = i)
    }
    function ml(e, t) {
        if (t) {
            var a = e.firstChild;
            if (a && a === e.lastChild && a.nodeType === 3) {
                a.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var Jy = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function qf(e, t, a) {
        var i = t.indexOf("--") === 0;
        a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Jy.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px"
    }
    function Yf(e, t, a) {
        if (t != null && typeof t != "object")
            throw Error(o(62));
        if (e = e.style,
        a != null) {
            for (var i in a)
                !a.hasOwnProperty(i) || t != null && t.hasOwnProperty(i) || (i.indexOf("--") === 0 ? e.setProperty(i, "") : i === "float" ? e.cssFloat = "" : e[i] = "");
            for (var r in t)
                i = t[r],
                t.hasOwnProperty(r) && a[r] !== i && qf(e, r, i)
        } else
            for (var u in t)
                t.hasOwnProperty(u) && qf(e, u, t[u])
    }
    function rr(e) {
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
    var Iy = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , $y = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function _i(e) {
        return $y.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    var ur = null;
    function cr(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var pl = null
      , gl = null;
    function Gf(e) {
        var t = Pa(e);
        if (t && (e = t.stateNode)) {
            var a = e[At] || null;
            e: switch (e = t.stateNode,
            t.type) {
            case "input":
                if (ir(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name),
                t = a.name,
                a.type === "radio" && t != null) {
                    for (a = e; a.parentNode; )
                        a = a.parentNode;
                    for (a = a.querySelectorAll('input[name="' + sa("" + t) + '"][type="radio"]'),
                    t = 0; t < a.length; t++) {
                        var i = a[t];
                        if (i !== e && i.form === e.form) {
                            var r = i[At] || null;
                            if (!r)
                                throw Error(o(90));
                            ir(i, r.value, r.defaultValue, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name)
                        }
                    }
                    for (t = 0; t < a.length; t++)
                        i = a[t],
                        i.form === e.form && Lf(i)
                }
                break e;
            case "textarea":
                Hf(e, a.value, a.defaultValue);
                break e;
            case "select":
                t = a.value,
                t != null && hl(e, !!a.multiple, t, !1)
            }
        }
    }
    var fr = !1;
    function Xf(e, t, a) {
        if (fr)
            return e(t, a);
        fr = !0;
        try {
            var i = e(t);
            return i
        } finally {
            if (fr = !1,
            (pl !== null || gl !== null) && (yo(),
            pl && (t = pl,
            e = gl,
            gl = pl = null,
            Gf(t),
            e)))
                for (t = 0; t < e.length; t++)
                    Gf(e[t])
        }
    }
    function us(e, t) {
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
    var Ya = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , dr = !1;
    if (Ya)
        try {
            var cs = {};
            Object.defineProperty(cs, "passive", {
                get: function() {
                    dr = !0
                }
            }),
            window.addEventListener("test", cs, cs),
            window.removeEventListener("test", cs, cs)
        } catch {
            dr = !1
        }
    var un = null
      , hr = null
      , Oi = null;
    function Kf() {
        if (Oi)
            return Oi;
        var e, t = hr, a = t.length, i, r = "value"in un ? un.value : un.textContent, u = r.length;
        for (e = 0; e < a && t[e] === r[e]; e++)
            ;
        var y = a - e;
        for (i = 1; i <= y && t[a - i] === r[u - i]; i++)
            ;
        return Oi = r.slice(e, 1 < i ? 1 - i : void 0)
    }
    function Ri(e) {
        var t = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function Vi() {
        return !0
    }
    function Zf() {
        return !1
    }
    function Pt(e) {
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
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Vi : Zf,
            this.isPropagationStopped = Zf,
            this
        }
        return x(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1),
                this.isDefaultPrevented = Vi)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
                this.isPropagationStopped = Vi)
            },
            persist: function() {},
            isPersistent: Vi
        }),
        t
    }
    var kn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, zi = Pt(kn), fs = x({}, kn, {
        view: 0,
        detail: 0
    }), Wy = Pt(fs), mr, pr, ds, Ui = x({}, fs, {
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
        getModifierState: yr,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== ds && (ds && e.type === "mousemove" ? (mr = e.screenX - ds.screenX,
            pr = e.screenY - ds.screenY) : pr = mr = 0,
            ds = e),
            mr)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : pr
        }
    }), Qf = Pt(Ui), ex = x({}, Ui, {
        dataTransfer: 0
    }), tx = Pt(ex), ax = x({}, fs, {
        relatedTarget: 0
    }), gr = Pt(ax), nx = x({}, kn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), lx = Pt(nx), sx = x({}, kn, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), ix = Pt(sx), ox = x({}, kn, {
        data: 0
    }), Ff = Pt(ox), rx = {
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
    }, ux = {
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
    }, cx = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function fx(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = cx[e]) ? !!t[e] : !1
    }
    function yr() {
        return fx
    }
    var dx = x({}, fs, {
        key: function(e) {
            if (e.key) {
                var t = rx[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = Ri(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ux[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: yr,
        charCode: function(e) {
            return e.type === "keypress" ? Ri(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Ri(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , hx = Pt(dx)
      , mx = x({}, Ui, {
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
      , Jf = Pt(mx)
      , px = x({}, fs, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: yr
    })
      , gx = Pt(px)
      , yx = x({}, kn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , xx = Pt(yx)
      , vx = x({}, Ui, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , bx = Pt(vx)
      , Sx = x({}, kn, {
        newState: 0,
        oldState: 0
    })
      , jx = Pt(Sx)
      , Tx = [9, 13, 27, 32]
      , xr = Ya && "CompositionEvent"in window
      , hs = null;
    Ya && "documentMode"in document && (hs = document.documentMode);
    var wx = Ya && "TextEvent"in window && !hs
      , If = Ya && (!xr || hs && 8 < hs && 11 >= hs)
      , $f = " "
      , Wf = !1;
    function ed(e, t) {
        switch (e) {
        case "keyup":
            return Tx.indexOf(t.keyCode) !== -1;
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
    function td(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var yl = !1;
    function Ax(e, t) {
        switch (e) {
        case "compositionend":
            return td(t);
        case "keypress":
            return t.which !== 32 ? null : (Wf = !0,
            $f);
        case "textInput":
            return e = t.data,
            e === $f && Wf ? null : e;
        default:
            return null
        }
    }
    function Nx(e, t) {
        if (yl)
            return e === "compositionend" || !xr && ed(e, t) ? (e = Kf(),
            Oi = hr = un = null,
            yl = !1,
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
            return If && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var Ex = {
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
    function ad(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Ex[e.type] : t === "textarea"
    }
    function nd(e, t, a, i) {
        pl ? gl ? gl.push(i) : gl = [i] : pl = i,
        t = To(t, "onChange"),
        0 < t.length && (a = new zi("onChange","change",null,a,i),
        e.push({
            event: a,
            listeners: t
        }))
    }
    var ms = null
      , ps = null;
    function Cx(e) {
        Bm(e, 0)
    }
    function Bi(e) {
        var t = rn(e);
        if (Lf(t))
            return e
    }
    function ld(e, t) {
        if (e === "change")
            return t
    }
    var sd = !1;
    if (Ya) {
        var vr;
        if (Ya) {
            var br = "oninput"in document;
            if (!br) {
                var id = document.createElement("div");
                id.setAttribute("oninput", "return;"),
                br = typeof id.oninput == "function"
            }
            vr = br
        } else
            vr = !1;
        sd = vr && (!document.documentMode || 9 < document.documentMode)
    }
    function od() {
        ms && (ms.detachEvent("onpropertychange", rd),
        ps = ms = null)
    }
    function rd(e) {
        if (e.propertyName === "value" && Bi(ps)) {
            var t = [];
            nd(t, ps, e, cr(e)),
            Xf(Cx, t)
        }
    }
    function Dx(e, t, a) {
        e === "focusin" ? (od(),
        ms = t,
        ps = a,
        ms.attachEvent("onpropertychange", rd)) : e === "focusout" && od()
    }
    function Mx(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return Bi(ps)
    }
    function _x(e, t) {
        if (e === "click")
            return Bi(t)
    }
    function Ox(e, t) {
        if (e === "input" || e === "change")
            return Bi(t)
    }
    function Rx(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var Qt = typeof Object.is == "function" ? Object.is : Rx;
    function gs(e, t) {
        if (Qt(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var a = Object.keys(e)
          , i = Object.keys(t);
        if (a.length !== i.length)
            return !1;
        for (i = 0; i < a.length; i++) {
            var r = a[i];
            if (!at.call(t, r) || !Qt(e[r], t[r]))
                return !1
        }
        return !0
    }
    function ud(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function cd(e, t) {
        var a = ud(e);
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
            a = ud(a)
        }
    }
    function fd(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? fd(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function dd(e) {
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
    function Sr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var Vx = Ya && "documentMode"in document && 11 >= document.documentMode
      , xl = null
      , jr = null
      , ys = null
      , Tr = !1;
    function hd(e, t, a) {
        var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        Tr || xl == null || xl !== Mi(i) || (i = xl,
        "selectionStart"in i && Sr(i) ? i = {
            start: i.selectionStart,
            end: i.selectionEnd
        } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(),
        i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset
        }),
        ys && gs(ys, i) || (ys = i,
        i = To(jr, "onSelect"),
        0 < i.length && (t = new zi("onSelect","select",null,t,a),
        e.push({
            event: t,
            listeners: i
        }),
        t.target = xl)))
    }
    function Hn(e, t) {
        var a = {};
        return a[e.toLowerCase()] = t.toLowerCase(),
        a["Webkit" + e] = "webkit" + t,
        a["Moz" + e] = "moz" + t,
        a
    }
    var vl = {
        animationend: Hn("Animation", "AnimationEnd"),
        animationiteration: Hn("Animation", "AnimationIteration"),
        animationstart: Hn("Animation", "AnimationStart"),
        transitionrun: Hn("Transition", "TransitionRun"),
        transitionstart: Hn("Transition", "TransitionStart"),
        transitioncancel: Hn("Transition", "TransitionCancel"),
        transitionend: Hn("Transition", "TransitionEnd")
    }
      , wr = {}
      , md = {};
    Ya && (md = document.createElement("div").style,
    "AnimationEvent"in window || (delete vl.animationend.animation,
    delete vl.animationiteration.animation,
    delete vl.animationstart.animation),
    "TransitionEvent"in window || delete vl.transitionend.transition);
    function Pn(e) {
        if (wr[e])
            return wr[e];
        if (!vl[e])
            return e;
        var t = vl[e], a;
        for (a in t)
            if (t.hasOwnProperty(a) && a in md)
                return wr[e] = t[a];
        return e
    }
    var pd = Pn("animationend")
      , gd = Pn("animationiteration")
      , yd = Pn("animationstart")
      , zx = Pn("transitionrun")
      , Ux = Pn("transitionstart")
      , Bx = Pn("transitioncancel")
      , xd = Pn("transitionend")
      , vd = new Map
      , Ar = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Ar.push("scrollEnd");
    function ba(e, t) {
        vd.set(e, t),
        Ae(t, [e])
    }
    var bd = new WeakMap;
    function ia(e, t) {
        if (typeof e == "object" && e !== null) {
            var a = bd.get(e);
            return a !== void 0 ? a : (t = {
                value: e,
                source: t,
                stack: Uf(t)
            },
            bd.set(e, t),
            t)
        }
        return {
            value: e,
            source: t,
            stack: Uf(t)
        }
    }
    var oa = []
      , bl = 0
      , Nr = 0;
    function Li() {
        for (var e = bl, t = Nr = bl = 0; t < e; ) {
            var a = oa[t];
            oa[t++] = null;
            var i = oa[t];
            oa[t++] = null;
            var r = oa[t];
            oa[t++] = null;
            var u = oa[t];
            if (oa[t++] = null,
            i !== null && r !== null) {
                var y = i.pending;
                y === null ? r.next = r : (r.next = y.next,
                y.next = r),
                i.pending = r
            }
            u !== 0 && Sd(a, r, u)
        }
    }
    function ki(e, t, a, i) {
        oa[bl++] = e,
        oa[bl++] = t,
        oa[bl++] = a,
        oa[bl++] = i,
        Nr |= i,
        e.lanes |= i,
        e = e.alternate,
        e !== null && (e.lanes |= i)
    }
    function Er(e, t, a, i) {
        return ki(e, t, a, i),
        Hi(e)
    }
    function Sl(e, t) {
        return ki(e, null, null, t),
        Hi(e)
    }
    function Sd(e, t, a) {
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
        r && t !== null && (r = 31 - de(a),
        e = u.hiddenUpdates,
        i = e[r],
        i === null ? e[r] = [t] : i.push(t),
        t.lane = a | 536870912),
        u) : null
    }
    function Hi(e) {
        if (50 < qs)
            throw qs = 0,
            Ru = null,
            Error(o(185));
        for (var t = e.return; t !== null; )
            e = t,
            t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var jl = {};
    function Lx(e, t, a, i) {
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
    function Ft(e, t, a, i) {
        return new Lx(e,t,a,i)
    }
    function Cr(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function Ga(e, t) {
        var a = e.alternate;
        return a === null ? (a = Ft(e.tag, t, e.key, e.mode),
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
    function Pi(e, t, a, i, r, u) {
        var y = 0;
        if (i = e,
        typeof e == "function")
            Cr(e) && (y = 1);
        else if (typeof e == "string")
            y = Hv(e, a, le.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else
            e: switch (e) {
            case ie:
                return e = Ft(31, a, t, r),
                e.elementType = ie,
                e.lanes = u,
                e;
            case M:
                return qn(a.children, r, u, t);
            case V:
                y = 8,
                r |= 24;
                break;
            case D:
                return e = Ft(12, a, t, r | 2),
                e.elementType = D,
                e.lanes = u,
                e;
            case _:
                return e = Ft(13, a, t, r),
                e.elementType = _,
                e.lanes = u,
                e;
            case $:
                return e = Ft(19, a, t, r),
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
                    case Q:
                        y = 11;
                        break e;
                    case ee:
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
        return t = Ft(y, a, t, r),
        t.elementType = e,
        t.type = i,
        t.lanes = u,
        t
    }
    function qn(e, t, a, i) {
        return e = Ft(7, e, i, t),
        e.lanes = a,
        e
    }
    function Dr(e, t, a) {
        return e = Ft(6, e, null, t),
        e.lanes = a,
        e
    }
    function Mr(e, t, a) {
        return t = Ft(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = a,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    var Tl = []
      , wl = 0
      , qi = null
      , Yi = 0
      , ra = []
      , ua = 0
      , Yn = null
      , Xa = 1
      , Ka = "";
    function Gn(e, t) {
        Tl[wl++] = Yi,
        Tl[wl++] = qi,
        qi = e,
        Yi = t
    }
    function Td(e, t, a) {
        ra[ua++] = Xa,
        ra[ua++] = Ka,
        ra[ua++] = Yn,
        Yn = e;
        var i = Xa;
        e = Ka;
        var r = 32 - de(i) - 1;
        i &= ~(1 << r),
        a += 1;
        var u = 32 - de(t) + r;
        if (30 < u) {
            var y = r - r % 5;
            u = (i & (1 << y) - 1).toString(32),
            i >>= y,
            r -= y,
            Xa = 1 << 32 - de(t) + r | a << r | i,
            Ka = u + e
        } else
            Xa = 1 << u | a << r | i,
            Ka = e
    }
    function _r(e) {
        e.return !== null && (Gn(e, 1),
        Td(e, 1, 0))
    }
    function Or(e) {
        for (; e === qi; )
            qi = Tl[--wl],
            Tl[wl] = null,
            Yi = Tl[--wl],
            Tl[wl] = null;
        for (; e === Yn; )
            Yn = ra[--ua],
            ra[ua] = null,
            Ka = ra[--ua],
            ra[ua] = null,
            Xa = ra[--ua],
            ra[ua] = null
    }
    var Bt = null
      , nt = null
      , Pe = !1
      , Xn = null
      , Da = !1
      , Rr = Error(o(519));
    function Kn(e) {
        var t = Error(o(418, ""));
        throw bs(ia(t, e)),
        Rr
    }
    function wd(e) {
        var t = e.stateNode
          , a = e.type
          , i = e.memoizedProps;
        switch (t[xt] = e,
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
            for (a = 0; a < Gs.length; a++)
                _e(Gs[a], t);
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
            kf(t, i.value, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name, !0),
            Di(t);
            break;
        case "select":
            _e("invalid", t);
            break;
        case "textarea":
            _e("invalid", t),
            Pf(t, i.value, i.defaultValue, i.children),
            Di(t)
        }
        a = i.children,
        typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || Pm(t.textContent, a) ? (i.popover != null && (_e("beforetoggle", t),
        _e("toggle", t)),
        i.onScroll != null && _e("scroll", t),
        i.onScrollEnd != null && _e("scrollend", t),
        i.onClick != null && (t.onclick = wo),
        t = !0) : t = !1,
        t || Kn(e)
    }
    function Ad(e) {
        for (Bt = e.return; Bt; )
            switch (Bt.tag) {
            case 5:
            case 13:
                Da = !1;
                return;
            case 27:
            case 3:
                Da = !0;
                return;
            default:
                Bt = Bt.return
            }
    }
    function xs(e) {
        if (e !== Bt)
            return !1;
        if (!Pe)
            return Ad(e),
            Pe = !0,
            !1;
        var t = e.tag, a;
        if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type,
        a = !(a !== "form" && a !== "button") || Fu(e.type, e.memoizedProps)),
        a = !a),
        a && nt && Kn(e),
        Ad(e),
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
                                nt = ja(e.nextSibling);
                                break e
                            }
                            t--
                        } else
                            a !== "$" && a !== "$!" && a !== "$?" || t++;
                    e = e.nextSibling
                }
                nt = null
            }
        } else
            t === 27 ? (t = nt,
            An(e.type) ? (e = Wu,
            Wu = null,
            nt = e) : nt = t) : nt = Bt ? ja(e.stateNode.nextSibling) : null;
        return !0
    }
    function vs() {
        nt = Bt = null,
        Pe = !1
    }
    function Nd() {
        var e = Xn;
        return e !== null && (Gt === null ? Gt = e : Gt.push.apply(Gt, e),
        Xn = null),
        e
    }
    function bs(e) {
        Xn === null ? Xn = [e] : Xn.push(e)
    }
    var Vr = H(null)
      , Zn = null
      , Za = null;
    function cn(e, t, a) {
        X(Vr, t._currentValue),
        t._currentValue = a
    }
    function Qa(e) {
        e._currentValue = Vr.current,
        Z(Vr)
    }
    function zr(e, t, a) {
        for (; e !== null; ) {
            var i = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
            e === a)
                break;
            e = e.return
        }
    }
    function Ur(e, t, a, i) {
        var r = e.child;
        for (r !== null && (r.return = e); r !== null; ) {
            var u = r.dependencies;
            if (u !== null) {
                var y = r.child;
                u = u.firstContext;
                e: for (; u !== null; ) {
                    var b = u;
                    u = r;
                    for (var w = 0; w < t.length; w++)
                        if (b.context === t[w]) {
                            u.lanes |= a,
                            b = u.alternate,
                            b !== null && (b.lanes |= a),
                            zr(u.return, a, e),
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
                zr(y, a, e),
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
    function Ss(e, t, a, i) {
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
                    Qt(r.pendingProps.value, y.value) || (e !== null ? e.push(b) : e = [b])
                }
            } else if (r === ve.current) {
                if (y = r.alternate,
                y === null)
                    throw Error(o(387));
                y.memoizedState.memoizedState !== r.memoizedState.memoizedState && (e !== null ? e.push(Js) : e = [Js])
            }
            r = r.return
        }
        e !== null && Ur(t, e, a, i),
        t.flags |= 262144
    }
    function Gi(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!Qt(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next
        }
        return !1
    }
    function Qn(e) {
        Zn = e,
        Za = null,
        e = e.dependencies,
        e !== null && (e.firstContext = null)
    }
    function Rt(e) {
        return Ed(Zn, e)
    }
    function Xi(e, t) {
        return Zn === null && Qn(e),
        Ed(e, t)
    }
    function Ed(e, t) {
        var a = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: a,
            next: null
        },
        Za === null) {
            if (e === null)
                throw Error(o(308));
            Za = t,
            e.dependencies = {
                lanes: 0,
                firstContext: t
            },
            e.flags |= 524288
        } else
            Za = Za.next = t;
        return a
    }
    var kx = typeof AbortController < "u" ? AbortController : function() {
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
      , Hx = n.unstable_scheduleCallback
      , Px = n.unstable_NormalPriority
      , vt = {
        $$typeof: B,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function Br() {
        return {
            controller: new kx,
            data: new Map,
            refCount: 0
        }
    }
    function js(e) {
        e.refCount--,
        e.refCount === 0 && Hx(Px, function() {
            e.controller.abort()
        })
    }
    var Ts = null
      , Lr = 0
      , Al = 0
      , Nl = null;
    function qx(e, t) {
        if (Ts === null) {
            var a = Ts = [];
            Lr = 0,
            Al = Hu(),
            Nl = {
                status: "pending",
                value: void 0,
                then: function(i) {
                    a.push(i)
                }
            }
        }
        return Lr++,
        t.then(Cd, Cd),
        t
    }
    function Cd() {
        if (--Lr === 0 && Ts !== null) {
            Nl !== null && (Nl.status = "fulfilled");
            var e = Ts;
            Ts = null,
            Al = 0,
            Nl = null;
            for (var t = 0; t < e.length; t++)
                (0,
                e[t])()
        }
    }
    function Yx(e, t) {
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
    var Dd = N.S;
    N.S = function(e, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && qx(e, t),
        Dd !== null && Dd(e, t)
    }
    ;
    var Fn = H(null);
    function kr() {
        var e = Fn.current;
        return e !== null ? e : Qe.pooledCache
    }
    function Ki(e, t) {
        t === null ? X(Fn, Fn.current) : X(Fn, t.pool)
    }
    function Md() {
        var e = kr();
        return e === null ? null : {
            parent: vt._currentValue,
            pool: e
        }
    }
    var ws = Error(o(460))
      , _d = Error(o(474))
      , Zi = Error(o(542))
      , Hr = {
        then: function() {}
    };
    function Od(e) {
        return e = e.status,
        e === "fulfilled" || e === "rejected"
    }
    function Qi() {}
    function Rd(e, t, a) {
        switch (a = e[a],
        a === void 0 ? e.push(t) : a !== t && (t.then(Qi, Qi),
        t = a),
        t.status) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw e = t.reason,
            zd(e),
            e;
        default:
            if (typeof t.status == "string")
                t.then(Qi, Qi);
            else {
                if (e = Qe,
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
                zd(e),
                e
            }
            throw As = t,
            ws
        }
    }
    var As = null;
    function Vd() {
        if (As === null)
            throw Error(o(459));
        var e = As;
        return As = null,
        e
    }
    function zd(e) {
        if (e === ws || e === Zi)
            throw Error(o(483))
    }
    var fn = !1;
    function Pr(e) {
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
    function qr(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }
    function dn(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function hn(e, t, a) {
        var i = e.updateQueue;
        if (i === null)
            return null;
        if (i = i.shared,
        (qe & 2) !== 0) {
            var r = i.pending;
            return r === null ? t.next = t : (t.next = r.next,
            r.next = t),
            i.pending = t,
            t = Hi(e),
            Sd(e, null, a),
            t
        }
        return ki(e, i, t, a),
        Hi(e)
    }
    function Ns(e, t, a) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (a & 4194048) !== 0)) {
            var i = t.lanes;
            i &= e.pendingLanes,
            a |= i,
            t.lanes = a,
            ls(e, a)
        }
    }
    function Yr(e, t) {
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
    var Gr = !1;
    function Es() {
        if (Gr) {
            var e = Nl;
            if (e !== null)
                throw e
        }
    }
    function Cs(e, t, a, i) {
        Gr = !1;
        var r = e.updateQueue;
        fn = !1;
        var u = r.firstBaseUpdate
          , y = r.lastBaseUpdate
          , b = r.shared.pending;
        if (b !== null) {
            r.shared.pending = null;
            var w = b
              , z = w.next;
            w.next = null,
            y === null ? u = z : y.next = z,
            y = w;
            var K = e.alternate;
            K !== null && (K = K.updateQueue,
            b = K.lastBaseUpdate,
            b !== y && (b === null ? K.firstBaseUpdate = z : b.next = z,
            K.lastBaseUpdate = w))
        }
        if (u !== null) {
            var I = r.baseState;
            y = 0,
            K = z = w = null,
            b = u;
            do {
                var k = b.lane & -536870913
                  , q = k !== b.lane;
                if (q ? (Ue & k) === k : (i & k) === k) {
                    k !== 0 && k === Al && (Gr = !0),
                    K !== null && (K = K.next = {
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
                        var Ke = a;
                        switch (xe.tag) {
                        case 1:
                            if (Se = xe.payload,
                            typeof Se == "function") {
                                I = Se.call(Ke, I, k);
                                break e
                            }
                            I = Se;
                            break e;
                        case 3:
                            Se.flags = Se.flags & -65537 | 128;
                        case 0:
                            if (Se = xe.payload,
                            k = typeof Se == "function" ? Se.call(Ke, I, k) : Se,
                            k == null)
                                break e;
                            I = x({}, I, k);
                            break e;
                        case 2:
                            fn = !0
                        }
                    }
                    k = b.callback,
                    k !== null && (e.flags |= 64,
                    q && (e.flags |= 8192),
                    q = r.callbacks,
                    q === null ? r.callbacks = [k] : q.push(k))
                } else
                    q = {
                        lane: k,
                        tag: b.tag,
                        payload: b.payload,
                        callback: b.callback,
                        next: null
                    },
                    K === null ? (z = K = q,
                    w = I) : K = K.next = q,
                    y |= k;
                if (b = b.next,
                b === null) {
                    if (b = r.shared.pending,
                    b === null)
                        break;
                    q = b,
                    b = q.next,
                    q.next = null,
                    r.lastBaseUpdate = q,
                    r.shared.pending = null
                }
            } while (!0);
            K === null && (w = I),
            r.baseState = w,
            r.firstBaseUpdate = z,
            r.lastBaseUpdate = K,
            u === null && (r.shared.lanes = 0),
            Sn |= y,
            e.lanes = y,
            e.memoizedState = I
        }
    }
    function Ud(e, t) {
        if (typeof e != "function")
            throw Error(o(191, e));
        e.call(t)
    }
    function Bd(e, t) {
        var a = e.callbacks;
        if (a !== null)
            for (e.callbacks = null,
            e = 0; e < a.length; e++)
                Ud(a[e], t)
    }
    var El = H(null)
      , Fi = H(0);
    function Ld(e, t) {
        e = tn,
        X(Fi, e),
        X(El, t),
        tn = e | t.baseLanes
    }
    function Xr() {
        X(Fi, tn),
        X(El, El.current)
    }
    function Kr() {
        tn = Fi.current,
        Z(El),
        Z(Fi)
    }
    var mn = 0
      , Ce = null
      , Ge = null
      , mt = null
      , Ji = !1
      , Cl = !1
      , Jn = !1
      , Ii = 0
      , Ds = 0
      , Dl = null
      , Gx = 0;
    function ut() {
        throw Error(o(321))
    }
    function Zr(e, t) {
        if (t === null)
            return !1;
        for (var a = 0; a < t.length && a < e.length; a++)
            if (!Qt(e[a], t[a]))
                return !1;
        return !0
    }
    function Qr(e, t, a, i, r, u) {
        return mn = u,
        Ce = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        N.H = e === null || e.memoizedState === null ? Sh : jh,
        Jn = !1,
        u = a(i, r),
        Jn = !1,
        Cl && (u = Hd(t, a, i, r)),
        kd(e),
        u
    }
    function kd(e) {
        N.H = no;
        var t = Ge !== null && Ge.next !== null;
        if (mn = 0,
        mt = Ge = Ce = null,
        Ji = !1,
        Ds = 0,
        Dl = null,
        t)
            throw Error(o(300));
        e === null || jt || (e = e.dependencies,
        e !== null && Gi(e) && (jt = !0))
    }
    function Hd(e, t, a, i) {
        Ce = e;
        var r = 0;
        do {
            if (Cl && (Dl = null),
            Ds = 0,
            Cl = !1,
            25 <= r)
                throw Error(o(301));
            if (r += 1,
            mt = Ge = null,
            e.updateQueue != null) {
                var u = e.updateQueue;
                u.lastEffect = null,
                u.events = null,
                u.stores = null,
                u.memoCache != null && (u.memoCache.index = 0)
            }
            N.H = Ix,
            u = t(a, i)
        } while (Cl);
        return u
    }
    function Xx() {
        var e = N.H
          , t = e.useState()[0];
        return t = typeof t.then == "function" ? Ms(t) : t,
        e = e.useState()[0],
        (Ge !== null ? Ge.memoizedState : null) !== e && (Ce.flags |= 1024),
        t
    }
    function Fr() {
        var e = Ii !== 0;
        return Ii = 0,
        e
    }
    function Jr(e, t, a) {
        t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~a
    }
    function Ir(e) {
        if (Ji) {
            for (e = e.memoizedState; e !== null; ) {
                var t = e.queue;
                t !== null && (t.pending = null),
                e = e.next
            }
            Ji = !1
        }
        mn = 0,
        mt = Ge = Ce = null,
        Cl = !1,
        Ds = Ii = 0,
        Dl = null
    }
    function qt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return mt === null ? Ce.memoizedState = mt = e : mt = mt.next = e,
        mt
    }
    function pt() {
        if (Ge === null) {
            var e = Ce.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = Ge.next;
        var t = mt === null ? Ce.memoizedState : mt.next;
        if (t !== null)
            mt = t,
            Ge = e;
        else {
            if (e === null)
                throw Ce.alternate === null ? Error(o(467)) : Error(o(310));
            Ge = e,
            e = {
                memoizedState: Ge.memoizedState,
                baseState: Ge.baseState,
                baseQueue: Ge.baseQueue,
                queue: Ge.queue,
                next: null
            },
            mt === null ? Ce.memoizedState = mt = e : mt = mt.next = e
        }
        return mt
    }
    function $r() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function Ms(e) {
        var t = Ds;
        return Ds += 1,
        Dl === null && (Dl = []),
        e = Rd(Dl, e, t),
        t = Ce,
        (mt === null ? t.memoizedState : mt.next) === null && (t = t.alternate,
        N.H = t === null || t.memoizedState === null ? Sh : jh),
        e
    }
    function $i(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
                return Ms(e);
            if (e.$$typeof === B)
                return Rt(e)
        }
        throw Error(o(438, String(e)))
    }
    function Wr(e) {
        var t = null
          , a = Ce.updateQueue;
        if (a !== null && (t = a.memoCache),
        t == null) {
            var i = Ce.alternate;
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
        a === null && (a = $r(),
        Ce.updateQueue = a),
        a.memoCache = t,
        a = t.data[t.index],
        a === void 0)
            for (a = t.data[t.index] = Array(e),
            i = 0; i < e; i++)
                a[i] = me;
        return t.index++,
        a
    }
    function Fa(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function Wi(e) {
        var t = pt();
        return eu(t, Ge, e)
    }
    function eu(e, t, a) {
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
              , w = null
              , z = t
              , K = !1;
            do {
                var I = z.lane & -536870913;
                if (I !== z.lane ? (Ue & I) === I : (mn & I) === I) {
                    var k = z.revertLane;
                    if (k === 0)
                        w !== null && (w = w.next = {
                            lane: 0,
                            revertLane: 0,
                            action: z.action,
                            hasEagerState: z.hasEagerState,
                            eagerState: z.eagerState,
                            next: null
                        }),
                        I === Al && (K = !0);
                    else if ((mn & k) === k) {
                        z = z.next,
                        k === Al && (K = !0);
                        continue
                    } else
                        I = {
                            lane: 0,
                            revertLane: z.revertLane,
                            action: z.action,
                            hasEagerState: z.hasEagerState,
                            eagerState: z.eagerState,
                            next: null
                        },
                        w === null ? (b = w = I,
                        y = u) : w = w.next = I,
                        Ce.lanes |= k,
                        Sn |= k;
                    I = z.action,
                    Jn && a(u, I),
                    u = z.hasEagerState ? z.eagerState : a(u, I)
                } else
                    k = {
                        lane: I,
                        revertLane: z.revertLane,
                        action: z.action,
                        hasEagerState: z.hasEagerState,
                        eagerState: z.eagerState,
                        next: null
                    },
                    w === null ? (b = w = k,
                    y = u) : w = w.next = k,
                    Ce.lanes |= I,
                    Sn |= I;
                z = z.next
            } while (z !== null && z !== t);
            if (w === null ? y = u : w.next = b,
            !Qt(u, e.memoizedState) && (jt = !0,
            K && (a = Nl,
            a !== null)))
                throw a;
            e.memoizedState = u,
            e.baseState = y,
            e.baseQueue = w,
            i.lastRenderedState = u
        }
        return r === null && (i.lanes = 0),
        [e.memoizedState, i.dispatch]
    }
    function tu(e) {
        var t = pt()
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
            Qt(u, t.memoizedState) || (jt = !0),
            t.memoizedState = u,
            t.baseQueue === null && (t.baseState = u),
            a.lastRenderedState = u
        }
        return [u, i]
    }
    function Pd(e, t, a) {
        var i = Ce
          , r = pt()
          , u = Pe;
        if (u) {
            if (a === void 0)
                throw Error(o(407));
            a = a()
        } else
            a = t();
        var y = !Qt((Ge || r).memoizedState, a);
        y && (r.memoizedState = a,
        jt = !0),
        r = r.queue;
        var b = Gd.bind(null, i, r, e);
        if (_s(2048, 8, b, [e]),
        r.getSnapshot !== t || y || mt !== null && mt.memoizedState.tag & 1) {
            if (i.flags |= 2048,
            Ml(9, eo(), Yd.bind(null, i, r, a, t), null),
            Qe === null)
                throw Error(o(349));
            u || (mn & 124) !== 0 || qd(i, t, a)
        }
        return a
    }
    function qd(e, t, a) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: a
        },
        t = Ce.updateQueue,
        t === null ? (t = $r(),
        Ce.updateQueue = t,
        t.stores = [e]) : (a = t.stores,
        a === null ? t.stores = [e] : a.push(e))
    }
    function Yd(e, t, a, i) {
        t.value = a,
        t.getSnapshot = i,
        Xd(t) && Kd(e)
    }
    function Gd(e, t, a) {
        return a(function() {
            Xd(t) && Kd(e)
        })
    }
    function Xd(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var a = t();
            return !Qt(e, a)
        } catch {
            return !0
        }
    }
    function Kd(e) {
        var t = Sl(e, 2);
        t !== null && ea(t, e, 2)
    }
    function au(e) {
        var t = qt();
        if (typeof e == "function") {
            var a = e;
            if (e = a(),
            Jn) {
                se(!0);
                try {
                    a()
                } finally {
                    se(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e,
        t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Fa,
            lastRenderedState: e
        },
        t
    }
    function Zd(e, t, a, i) {
        return e.baseState = a,
        eu(e, Ge, typeof i == "function" ? i : Fa)
    }
    function Kx(e, t, a, i, r) {
        if (ao(e))
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
            Qd(t, u)) : (u.next = a.next,
            t.pending = a.next = u)
        }
    }
    function Qd(e, t) {
        var a = t.action
          , i = t.payload
          , r = e.state;
        if (t.isTransition) {
            var u = N.T
              , y = {};
            N.T = y;
            try {
                var b = a(r, i)
                  , w = N.S;
                w !== null && w(y, b),
                Fd(e, t, b)
            } catch (z) {
                nu(e, t, z)
            } finally {
                N.T = u
            }
        } else
            try {
                u = a(r, i),
                Fd(e, t, u)
            } catch (z) {
                nu(e, t, z)
            }
    }
    function Fd(e, t, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(i) {
            Jd(e, t, i)
        }, function(i) {
            return nu(e, t, i)
        }) : Jd(e, t, a)
    }
    function Jd(e, t, a) {
        t.status = "fulfilled",
        t.value = a,
        Id(t),
        e.state = a,
        t = e.pending,
        t !== null && (a = t.next,
        a === t ? e.pending = null : (a = a.next,
        t.next = a,
        Qd(e, a)))
    }
    function nu(e, t, a) {
        var i = e.pending;
        if (e.pending = null,
        i !== null) {
            i = i.next;
            do
                t.status = "rejected",
                t.reason = a,
                Id(t),
                t = t.next;
            while (t !== i)
        }
        e.action = null
    }
    function Id(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)
            (0,
            e[t])()
    }
    function $d(e, t) {
        return t
    }
    function Wd(e, t) {
        if (Pe) {
            var a = Qe.formState;
            if (a !== null) {
                e: {
                    var i = Ce;
                    if (Pe) {
                        if (nt) {
                            t: {
                                for (var r = nt, u = Da; r.nodeType !== 8; ) {
                                    if (!u) {
                                        r = null;
                                        break t
                                    }
                                    if (r = ja(r.nextSibling),
                                    r === null) {
                                        r = null;
                                        break t
                                    }
                                }
                                u = r.data,
                                r = u === "F!" || u === "F" ? r : null
                            }
                            if (r) {
                                nt = ja(r.nextSibling),
                                i = r.data === "F!";
                                break e
                            }
                        }
                        Kn(i)
                    }
                    i = !1
                }
                i && (t = a[0])
            }
        }
        return a = qt(),
        a.memoizedState = a.baseState = t,
        i = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: $d,
            lastRenderedState: t
        },
        a.queue = i,
        a = xh.bind(null, Ce, i),
        i.dispatch = a,
        i = au(!1),
        u = ru.bind(null, Ce, !1, i.queue),
        i = qt(),
        r = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        },
        i.queue = r,
        a = Kx.bind(null, Ce, r, u, a),
        r.dispatch = a,
        i.memoizedState = e,
        [t, a, !1]
    }
    function eh(e) {
        var t = pt();
        return th(t, Ge, e)
    }
    function th(e, t, a) {
        if (t = eu(e, t, $d)[0],
        e = Wi(Fa)[0],
        typeof t == "object" && t !== null && typeof t.then == "function")
            try {
                var i = Ms(t)
            } catch (y) {
                throw y === ws ? Zi : y
            }
        else
            i = t;
        t = pt();
        var r = t.queue
          , u = r.dispatch;
        return a !== t.memoizedState && (Ce.flags |= 2048,
        Ml(9, eo(), Zx.bind(null, r, a), null)),
        [i, u, e]
    }
    function Zx(e, t) {
        e.action = t
    }
    function ah(e) {
        var t = pt()
          , a = Ge;
        if (a !== null)
            return th(t, a, e);
        pt(),
        t = t.memoizedState,
        a = pt();
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
        t = Ce.updateQueue,
        t === null && (t = $r(),
        Ce.updateQueue = t),
        a = t.lastEffect,
        a === null ? t.lastEffect = e.next = e : (i = a.next,
        a.next = e,
        e.next = i,
        t.lastEffect = e),
        e
    }
    function eo() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }
    function nh() {
        return pt().memoizedState
    }
    function to(e, t, a, i) {
        var r = qt();
        i = i === void 0 ? null : i,
        Ce.flags |= e,
        r.memoizedState = Ml(1 | t, eo(), a, i)
    }
    function _s(e, t, a, i) {
        var r = pt();
        i = i === void 0 ? null : i;
        var u = r.memoizedState.inst;
        Ge !== null && i !== null && Zr(i, Ge.memoizedState.deps) ? r.memoizedState = Ml(t, u, a, i) : (Ce.flags |= e,
        r.memoizedState = Ml(1 | t, u, a, i))
    }
    function lh(e, t) {
        to(8390656, 8, e, t)
    }
    function sh(e, t) {
        _s(2048, 8, e, t)
    }
    function ih(e, t) {
        return _s(4, 2, e, t)
    }
    function oh(e, t) {
        return _s(4, 4, e, t)
    }
    function rh(e, t) {
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
    function uh(e, t, a) {
        a = a != null ? a.concat([e]) : null,
        _s(4, 4, rh.bind(null, t, e), a)
    }
    function lu() {}
    function ch(e, t) {
        var a = pt();
        t = t === void 0 ? null : t;
        var i = a.memoizedState;
        return t !== null && Zr(t, i[1]) ? i[0] : (a.memoizedState = [e, t],
        e)
    }
    function fh(e, t) {
        var a = pt();
        t = t === void 0 ? null : t;
        var i = a.memoizedState;
        if (t !== null && Zr(t, i[1]))
            return i[0];
        if (i = e(),
        Jn) {
            se(!0);
            try {
                e()
            } finally {
                se(!1)
            }
        }
        return a.memoizedState = [i, t],
        i
    }
    function su(e, t, a) {
        return a === void 0 || (mn & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a,
        e = mm(),
        Ce.lanes |= e,
        Sn |= e,
        a)
    }
    function dh(e, t, a, i) {
        return Qt(a, t) ? a : El.current !== null ? (e = su(e, a, i),
        Qt(e, t) || (jt = !0),
        e) : (mn & 42) === 0 ? (jt = !0,
        e.memoizedState = a) : (e = mm(),
        Ce.lanes |= e,
        Sn |= e,
        t)
    }
    function hh(e, t, a, i, r) {
        var u = O.p;
        O.p = u !== 0 && 8 > u ? u : 8;
        var y = N.T
          , b = {};
        N.T = b,
        ru(e, !1, t, a);
        try {
            var w = r()
              , z = N.S;
            if (z !== null && z(b, w),
            w !== null && typeof w == "object" && typeof w.then == "function") {
                var K = Yx(w, i);
                Os(e, t, K, Wt(e))
            } else
                Os(e, t, i, Wt(e))
        } catch (I) {
            Os(e, t, {
                then: function() {},
                status: "rejected",
                reason: I
            }, Wt())
        } finally {
            O.p = u,
            N.T = y
        }
    }
    function Qx() {}
    function iu(e, t, a, i) {
        if (e.tag !== 5)
            throw Error(o(476));
        var r = mh(e).queue;
        hh(e, r, t, Y, a === null ? Qx : function() {
            return ph(e),
            a(i)
        }
        )
    }
    function mh(e) {
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
                lastRenderedReducer: Fa,
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
                lastRenderedReducer: Fa,
                lastRenderedState: a
            },
            next: null
        },
        e.memoizedState = t,
        e = e.alternate,
        e !== null && (e.memoizedState = t),
        t
    }
    function ph(e) {
        var t = mh(e).next.queue;
        Os(e, t, {}, Wt())
    }
    function ou() {
        return Rt(Js)
    }
    function gh() {
        return pt().memoizedState
    }
    function yh() {
        return pt().memoizedState
    }
    function Fx(e) {
        for (var t = e.return; t !== null; ) {
            switch (t.tag) {
            case 24:
            case 3:
                var a = Wt();
                e = dn(a);
                var i = hn(t, e, a);
                i !== null && (ea(i, t, a),
                Ns(i, t, a)),
                t = {
                    cache: Br()
                },
                e.payload = t;
                return
            }
            t = t.return
        }
    }
    function Jx(e, t, a) {
        var i = Wt();
        a = {
            lane: i,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        ao(e) ? vh(t, a) : (a = Er(e, t, a, i),
        a !== null && (ea(a, e, i),
        bh(a, t, i)))
    }
    function xh(e, t, a) {
        var i = Wt();
        Os(e, t, a, i)
    }
    function Os(e, t, a, i) {
        var r = {
            lane: i,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (ao(e))
            vh(t, r);
        else {
            var u = e.alternate;
            if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer,
            u !== null))
                try {
                    var y = t.lastRenderedState
                      , b = u(y, a);
                    if (r.hasEagerState = !0,
                    r.eagerState = b,
                    Qt(b, y))
                        return ki(e, t, r, 0),
                        Qe === null && Li(),
                        !1
                } catch {} finally {}
            if (a = Er(e, t, r, i),
            a !== null)
                return ea(a, e, i),
                bh(a, t, i),
                !0
        }
        return !1
    }
    function ru(e, t, a, i) {
        if (i = {
            lane: 2,
            revertLane: Hu(),
            action: i,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        ao(e)) {
            if (t)
                throw Error(o(479))
        } else
            t = Er(e, a, i, 2),
            t !== null && ea(t, e, 2)
    }
    function ao(e) {
        var t = e.alternate;
        return e === Ce || t !== null && t === Ce
    }
    function vh(e, t) {
        Cl = Ji = !0;
        var a = e.pending;
        a === null ? t.next = t : (t.next = a.next,
        a.next = t),
        e.pending = t
    }
    function bh(e, t, a) {
        if ((a & 4194048) !== 0) {
            var i = t.lanes;
            i &= e.pendingLanes,
            a |= i,
            t.lanes = a,
            ls(e, a)
        }
    }
    var no = {
        readContext: Rt,
        use: $i,
        useCallback: ut,
        useContext: ut,
        useEffect: ut,
        useImperativeHandle: ut,
        useLayoutEffect: ut,
        useInsertionEffect: ut,
        useMemo: ut,
        useReducer: ut,
        useRef: ut,
        useState: ut,
        useDebugValue: ut,
        useDeferredValue: ut,
        useTransition: ut,
        useSyncExternalStore: ut,
        useId: ut,
        useHostTransitionStatus: ut,
        useFormState: ut,
        useActionState: ut,
        useOptimistic: ut,
        useMemoCache: ut,
        useCacheRefresh: ut
    }
      , Sh = {
        readContext: Rt,
        use: $i,
        useCallback: function(e, t) {
            return qt().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: Rt,
        useEffect: lh,
        useImperativeHandle: function(e, t, a) {
            a = a != null ? a.concat([e]) : null,
            to(4194308, 4, rh.bind(null, t, e), a)
        },
        useLayoutEffect: function(e, t) {
            return to(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            to(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var a = qt();
            t = t === void 0 ? null : t;
            var i = e();
            if (Jn) {
                se(!0);
                try {
                    e()
                } finally {
                    se(!1)
                }
            }
            return a.memoizedState = [i, t],
            i
        },
        useReducer: function(e, t, a) {
            var i = qt();
            if (a !== void 0) {
                var r = a(t);
                if (Jn) {
                    se(!0);
                    try {
                        a(t)
                    } finally {
                        se(!1)
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
            e = e.dispatch = Jx.bind(null, Ce, e),
            [i.memoizedState, e]
        },
        useRef: function(e) {
            var t = qt();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: function(e) {
            e = au(e);
            var t = e.queue
              , a = xh.bind(null, Ce, t);
            return t.dispatch = a,
            [e.memoizedState, a]
        },
        useDebugValue: lu,
        useDeferredValue: function(e, t) {
            var a = qt();
            return su(a, e, t)
        },
        useTransition: function() {
            var e = au(!1);
            return e = hh.bind(null, Ce, e.queue, !0, !1),
            qt().memoizedState = e,
            [!1, e]
        },
        useSyncExternalStore: function(e, t, a) {
            var i = Ce
              , r = qt();
            if (Pe) {
                if (a === void 0)
                    throw Error(o(407));
                a = a()
            } else {
                if (a = t(),
                Qe === null)
                    throw Error(o(349));
                (Ue & 124) !== 0 || qd(i, t, a)
            }
            r.memoizedState = a;
            var u = {
                value: a,
                getSnapshot: t
            };
            return r.queue = u,
            lh(Gd.bind(null, i, u, e), [e]),
            i.flags |= 2048,
            Ml(9, eo(), Yd.bind(null, i, u, a, t), null),
            a
        },
        useId: function() {
            var e = qt()
              , t = Qe.identifierPrefix;
            if (Pe) {
                var a = Ka
                  , i = Xa;
                a = (i & ~(1 << 32 - de(i) - 1)).toString(32) + a,
                t = "«" + t + "R" + a,
                a = Ii++,
                0 < a && (t += "H" + a.toString(32)),
                t += "»"
            } else
                a = Gx++,
                t = "«" + t + "r" + a.toString(32) + "»";
            return e.memoizedState = t
        },
        useHostTransitionStatus: ou,
        useFormState: Wd,
        useActionState: Wd,
        useOptimistic: function(e) {
            var t = qt();
            t.memoizedState = t.baseState = e;
            var a = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = a,
            t = ru.bind(null, Ce, !0, a),
            a.dispatch = t,
            [e, t]
        },
        useMemoCache: Wr,
        useCacheRefresh: function() {
            return qt().memoizedState = Fx.bind(null, Ce)
        }
    }
      , jh = {
        readContext: Rt,
        use: $i,
        useCallback: ch,
        useContext: Rt,
        useEffect: sh,
        useImperativeHandle: uh,
        useInsertionEffect: ih,
        useLayoutEffect: oh,
        useMemo: fh,
        useReducer: Wi,
        useRef: nh,
        useState: function() {
            return Wi(Fa)
        },
        useDebugValue: lu,
        useDeferredValue: function(e, t) {
            var a = pt();
            return dh(a, Ge.memoizedState, e, t)
        },
        useTransition: function() {
            var e = Wi(Fa)[0]
              , t = pt().memoizedState;
            return [typeof e == "boolean" ? e : Ms(e), t]
        },
        useSyncExternalStore: Pd,
        useId: gh,
        useHostTransitionStatus: ou,
        useFormState: eh,
        useActionState: eh,
        useOptimistic: function(e, t) {
            var a = pt();
            return Zd(a, Ge, e, t)
        },
        useMemoCache: Wr,
        useCacheRefresh: yh
    }
      , Ix = {
        readContext: Rt,
        use: $i,
        useCallback: ch,
        useContext: Rt,
        useEffect: sh,
        useImperativeHandle: uh,
        useInsertionEffect: ih,
        useLayoutEffect: oh,
        useMemo: fh,
        useReducer: tu,
        useRef: nh,
        useState: function() {
            return tu(Fa)
        },
        useDebugValue: lu,
        useDeferredValue: function(e, t) {
            var a = pt();
            return Ge === null ? su(a, e, t) : dh(a, Ge.memoizedState, e, t)
        },
        useTransition: function() {
            var e = tu(Fa)[0]
              , t = pt().memoizedState;
            return [typeof e == "boolean" ? e : Ms(e), t]
        },
        useSyncExternalStore: Pd,
        useId: gh,
        useHostTransitionStatus: ou,
        useFormState: ah,
        useActionState: ah,
        useOptimistic: function(e, t) {
            var a = pt();
            return Ge !== null ? Zd(a, Ge, e, t) : (a.baseState = e,
            [e, a.queue.dispatch])
        },
        useMemoCache: Wr,
        useCacheRefresh: yh
    }
      , _l = null
      , Rs = 0;
    function lo(e) {
        var t = Rs;
        return Rs += 1,
        _l === null && (_l = []),
        Rd(_l, e, t)
    }
    function Vs(e, t) {
        t = t.props.ref,
        e.ref = t !== void 0 ? t : null
    }
    function so(e, t) {
        throw t.$$typeof === v ? Error(o(525)) : (e = Object.prototype.toString.call(t),
        Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }
    function Th(e) {
        var t = e._init;
        return t(e._payload)
    }
    function wh(e) {
        function t(C, E) {
            if (e) {
                var R = C.deletions;
                R === null ? (C.deletions = [E],
                C.flags |= 16) : R.push(E)
            }
        }
        function a(C, E) {
            if (!e)
                return null;
            for (; E !== null; )
                t(C, E),
                E = E.sibling;
            return null
        }
        function i(C) {
            for (var E = new Map; C !== null; )
                C.key !== null ? E.set(C.key, C) : E.set(C.index, C),
                C = C.sibling;
            return E
        }
        function r(C, E) {
            return C = Ga(C, E),
            C.index = 0,
            C.sibling = null,
            C
        }
        function u(C, E, R) {
            return C.index = R,
            e ? (R = C.alternate,
            R !== null ? (R = R.index,
            R < E ? (C.flags |= 67108866,
            E) : R) : (C.flags |= 67108866,
            E)) : (C.flags |= 1048576,
            E)
        }
        function y(C) {
            return e && C.alternate === null && (C.flags |= 67108866),
            C
        }
        function b(C, E, R, F) {
            return E === null || E.tag !== 6 ? (E = Dr(R, C.mode, F),
            E.return = C,
            E) : (E = r(E, R),
            E.return = C,
            E)
        }
        function w(C, E, R, F) {
            var re = R.type;
            return re === M ? K(C, E, R.props.children, F, R.key) : E !== null && (E.elementType === re || typeof re == "object" && re !== null && re.$$typeof === J && Th(re) === E.type) ? (E = r(E, R.props),
            Vs(E, R),
            E.return = C,
            E) : (E = Pi(R.type, R.key, R.props, null, C.mode, F),
            Vs(E, R),
            E.return = C,
            E)
        }
        function z(C, E, R, F) {
            return E === null || E.tag !== 4 || E.stateNode.containerInfo !== R.containerInfo || E.stateNode.implementation !== R.implementation ? (E = Mr(R, C.mode, F),
            E.return = C,
            E) : (E = r(E, R.children || []),
            E.return = C,
            E)
        }
        function K(C, E, R, F, re) {
            return E === null || E.tag !== 7 ? (E = qn(R, C.mode, F, re),
            E.return = C,
            E) : (E = r(E, R),
            E.return = C,
            E)
        }
        function I(C, E, R) {
            if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
                return E = Dr("" + E, C.mode, R),
                E.return = C,
                E;
            if (typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                case T:
                    return R = Pi(E.type, E.key, E.props, null, C.mode, R),
                    Vs(R, E),
                    R.return = C,
                    R;
                case A:
                    return E = Mr(E, C.mode, R),
                    E.return = C,
                    E;
                case J:
                    var F = E._init;
                    return E = F(E._payload),
                    I(C, E, R)
                }
                if (P(E) || he(E))
                    return E = qn(E, C.mode, R, null),
                    E.return = C,
                    E;
                if (typeof E.then == "function")
                    return I(C, lo(E), R);
                if (E.$$typeof === B)
                    return I(C, Xi(C, E), R);
                so(C, E)
            }
            return null
        }
        function k(C, E, R, F) {
            var re = E !== null ? E.key : null;
            if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
                return re !== null ? null : b(C, E, "" + R, F);
            if (typeof R == "object" && R !== null) {
                switch (R.$$typeof) {
                case T:
                    return R.key === re ? w(C, E, R, F) : null;
                case A:
                    return R.key === re ? z(C, E, R, F) : null;
                case J:
                    return re = R._init,
                    R = re(R._payload),
                    k(C, E, R, F)
                }
                if (P(R) || he(R))
                    return re !== null ? null : K(C, E, R, F, null);
                if (typeof R.then == "function")
                    return k(C, E, lo(R), F);
                if (R.$$typeof === B)
                    return k(C, E, Xi(C, R), F);
                so(C, R)
            }
            return null
        }
        function q(C, E, R, F, re) {
            if (typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint")
                return C = C.get(R) || null,
                b(E, C, "" + F, re);
            if (typeof F == "object" && F !== null) {
                switch (F.$$typeof) {
                case T:
                    return C = C.get(F.key === null ? R : F.key) || null,
                    w(E, C, F, re);
                case A:
                    return C = C.get(F.key === null ? R : F.key) || null,
                    z(E, C, F, re);
                case J:
                    var De = F._init;
                    return F = De(F._payload),
                    q(C, E, R, F, re)
                }
                if (P(F) || he(F))
                    return C = C.get(R) || null,
                    K(E, C, F, re, null);
                if (typeof F.then == "function")
                    return q(C, E, R, lo(F), re);
                if (F.$$typeof === B)
                    return q(C, E, R, Xi(E, F), re);
                so(E, F)
            }
            return null
        }
        function Se(C, E, R, F) {
            for (var re = null, De = null, pe = E, be = E = 0, wt = null; pe !== null && be < R.length; be++) {
                pe.index > be ? (wt = pe,
                pe = null) : wt = pe.sibling;
                var ke = k(C, pe, R[be], F);
                if (ke === null) {
                    pe === null && (pe = wt);
                    break
                }
                e && pe && ke.alternate === null && t(C, pe),
                E = u(ke, E, be),
                De === null ? re = ke : De.sibling = ke,
                De = ke,
                pe = wt
            }
            if (be === R.length)
                return a(C, pe),
                Pe && Gn(C, be),
                re;
            if (pe === null) {
                for (; be < R.length; be++)
                    pe = I(C, R[be], F),
                    pe !== null && (E = u(pe, E, be),
                    De === null ? re = pe : De.sibling = pe,
                    De = pe);
                return Pe && Gn(C, be),
                re
            }
            for (pe = i(pe); be < R.length; be++)
                wt = q(pe, C, be, R[be], F),
                wt !== null && (e && wt.alternate !== null && pe.delete(wt.key === null ? be : wt.key),
                E = u(wt, E, be),
                De === null ? re = wt : De.sibling = wt,
                De = wt);
            return e && pe.forEach(function(Mn) {
                return t(C, Mn)
            }),
            Pe && Gn(C, be),
            re
        }
        function xe(C, E, R, F) {
            if (R == null)
                throw Error(o(151));
            for (var re = null, De = null, pe = E, be = E = 0, wt = null, ke = R.next(); pe !== null && !ke.done; be++,
            ke = R.next()) {
                pe.index > be ? (wt = pe,
                pe = null) : wt = pe.sibling;
                var Mn = k(C, pe, ke.value, F);
                if (Mn === null) {
                    pe === null && (pe = wt);
                    break
                }
                e && pe && Mn.alternate === null && t(C, pe),
                E = u(Mn, E, be),
                De === null ? re = Mn : De.sibling = Mn,
                De = Mn,
                pe = wt
            }
            if (ke.done)
                return a(C, pe),
                Pe && Gn(C, be),
                re;
            if (pe === null) {
                for (; !ke.done; be++,
                ke = R.next())
                    ke = I(C, ke.value, F),
                    ke !== null && (E = u(ke, E, be),
                    De === null ? re = ke : De.sibling = ke,
                    De = ke);
                return Pe && Gn(C, be),
                re
            }
            for (pe = i(pe); !ke.done; be++,
            ke = R.next())
                ke = q(pe, C, be, ke.value, F),
                ke !== null && (e && ke.alternate !== null && pe.delete(ke.key === null ? be : ke.key),
                E = u(ke, E, be),
                De === null ? re = ke : De.sibling = ke,
                De = ke);
            return e && pe.forEach(function($v) {
                return t(C, $v)
            }),
            Pe && Gn(C, be),
            re
        }
        function Ke(C, E, R, F) {
            if (typeof R == "object" && R !== null && R.type === M && R.key === null && (R = R.props.children),
            typeof R == "object" && R !== null) {
                switch (R.$$typeof) {
                case T:
                    e: {
                        for (var re = R.key; E !== null; ) {
                            if (E.key === re) {
                                if (re = R.type,
                                re === M) {
                                    if (E.tag === 7) {
                                        a(C, E.sibling),
                                        F = r(E, R.props.children),
                                        F.return = C,
                                        C = F;
                                        break e
                                    }
                                } else if (E.elementType === re || typeof re == "object" && re !== null && re.$$typeof === J && Th(re) === E.type) {
                                    a(C, E.sibling),
                                    F = r(E, R.props),
                                    Vs(F, R),
                                    F.return = C,
                                    C = F;
                                    break e
                                }
                                a(C, E);
                                break
                            } else
                                t(C, E);
                            E = E.sibling
                        }
                        R.type === M ? (F = qn(R.props.children, C.mode, F, R.key),
                        F.return = C,
                        C = F) : (F = Pi(R.type, R.key, R.props, null, C.mode, F),
                        Vs(F, R),
                        F.return = C,
                        C = F)
                    }
                    return y(C);
                case A:
                    e: {
                        for (re = R.key; E !== null; ) {
                            if (E.key === re)
                                if (E.tag === 4 && E.stateNode.containerInfo === R.containerInfo && E.stateNode.implementation === R.implementation) {
                                    a(C, E.sibling),
                                    F = r(E, R.children || []),
                                    F.return = C,
                                    C = F;
                                    break e
                                } else {
                                    a(C, E);
                                    break
                                }
                            else
                                t(C, E);
                            E = E.sibling
                        }
                        F = Mr(R, C.mode, F),
                        F.return = C,
                        C = F
                    }
                    return y(C);
                case J:
                    return re = R._init,
                    R = re(R._payload),
                    Ke(C, E, R, F)
                }
                if (P(R))
                    return Se(C, E, R, F);
                if (he(R)) {
                    if (re = he(R),
                    typeof re != "function")
                        throw Error(o(150));
                    return R = re.call(R),
                    xe(C, E, R, F)
                }
                if (typeof R.then == "function")
                    return Ke(C, E, lo(R), F);
                if (R.$$typeof === B)
                    return Ke(C, E, Xi(C, R), F);
                so(C, R)
            }
            return typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint" ? (R = "" + R,
            E !== null && E.tag === 6 ? (a(C, E.sibling),
            F = r(E, R),
            F.return = C,
            C = F) : (a(C, E),
            F = Dr(R, C.mode, F),
            F.return = C,
            C = F),
            y(C)) : a(C, E)
        }
        return function(C, E, R, F) {
            try {
                Rs = 0;
                var re = Ke(C, E, R, F);
                return _l = null,
                re
            } catch (pe) {
                if (pe === ws || pe === Zi)
                    throw pe;
                var De = Ft(29, pe, null, C.mode);
                return De.lanes = F,
                De.return = C,
                De
            } finally {}
        }
    }
    var Ol = wh(!0)
      , Ah = wh(!1)
      , ca = H(null)
      , Ma = null;
    function pn(e) {
        var t = e.alternate;
        X(bt, bt.current & 1),
        X(ca, e),
        Ma === null && (t === null || El.current !== null || t.memoizedState !== null) && (Ma = e)
    }
    function Nh(e) {
        if (e.tag === 22) {
            if (X(bt, bt.current),
            X(ca, e),
            Ma === null) {
                var t = e.alternate;
                t !== null && t.memoizedState !== null && (Ma = e)
            }
        } else
            gn()
    }
    function gn() {
        X(bt, bt.current),
        X(ca, ca.current)
    }
    function Ja(e) {
        Z(ca),
        Ma === e && (Ma = null),
        Z(bt)
    }
    var bt = H(0);
    function io(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var a = t.memoizedState;
                if (a !== null && (a = a.dehydrated,
                a === null || a.data === "$?" || $u(a)))
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
    function uu(e, t, a, i) {
        t = e.memoizedState,
        a = a(i, t),
        a = a == null ? t : x({}, t, a),
        e.memoizedState = a,
        e.lanes === 0 && (e.updateQueue.baseState = a)
    }
    var cu = {
        enqueueSetState: function(e, t, a) {
            e = e._reactInternals;
            var i = Wt()
              , r = dn(i);
            r.payload = t,
            a != null && (r.callback = a),
            t = hn(e, r, i),
            t !== null && (ea(t, e, i),
            Ns(t, e, i))
        },
        enqueueReplaceState: function(e, t, a) {
            e = e._reactInternals;
            var i = Wt()
              , r = dn(i);
            r.tag = 1,
            r.payload = t,
            a != null && (r.callback = a),
            t = hn(e, r, i),
            t !== null && (ea(t, e, i),
            Ns(t, e, i))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var a = Wt()
              , i = dn(a);
            i.tag = 2,
            t != null && (i.callback = t),
            t = hn(e, i, a),
            t !== null && (ea(t, e, a),
            Ns(t, e, a))
        }
    };
    function Eh(e, t, a, i, r, u, y) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, u, y) : t.prototype && t.prototype.isPureReactComponent ? !gs(a, i) || !gs(r, u) : !0
    }
    function Ch(e, t, a, i) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i),
        t.state !== e && cu.enqueueReplaceState(t, t.state, null)
    }
    function In(e, t) {
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
    var oo = typeof reportError == "function" ? reportError : function(e) {
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
    function Dh(e) {
        oo(e)
    }
    function Mh(e) {
        console.error(e)
    }
    function _h(e) {
        oo(e)
    }
    function ro(e, t) {
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
    function Oh(e, t, a) {
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
    function fu(e, t, a) {
        return a = dn(a),
        a.tag = 3,
        a.payload = {
            element: null
        },
        a.callback = function() {
            ro(e, t)
        }
        ,
        a
    }
    function Rh(e) {
        return e = dn(e),
        e.tag = 3,
        e
    }
    function Vh(e, t, a, i) {
        var r = a.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var u = i.value;
            e.payload = function() {
                return r(u)
            }
            ,
            e.callback = function() {
                Oh(t, a, i)
            }
        }
        var y = a.stateNode;
        y !== null && typeof y.componentDidCatch == "function" && (e.callback = function() {
            Oh(t, a, i),
            typeof r != "function" && (jn === null ? jn = new Set([this]) : jn.add(this));
            var b = i.stack;
            this.componentDidCatch(i.value, {
                componentStack: b !== null ? b : ""
            })
        }
        )
    }
    function $x(e, t, a, i, r) {
        if (a.flags |= 32768,
        i !== null && typeof i == "object" && typeof i.then == "function") {
            if (t = a.alternate,
            t !== null && Ss(t, a, r, !0),
            a = ca.current,
            a !== null) {
                switch (a.tag) {
                case 13:
                    return Ma === null ? zu() : a.alternate === null && lt === 0 && (lt = 3),
                    a.flags &= -257,
                    a.flags |= 65536,
                    a.lanes = r,
                    i === Hr ? a.flags |= 16384 : (t = a.updateQueue,
                    t === null ? a.updateQueue = new Set([i]) : t.add(i),
                    Bu(e, i, r)),
                    !1;
                case 22:
                    return a.flags |= 65536,
                    i === Hr ? a.flags |= 16384 : (t = a.updateQueue,
                    t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([i])
                    },
                    a.updateQueue = t) : (a = t.retryQueue,
                    a === null ? t.retryQueue = new Set([i]) : a.add(i)),
                    Bu(e, i, r)),
                    !1
                }
                throw Error(o(435, a.tag))
            }
            return Bu(e, i, r),
            zu(),
            !1
        }
        if (Pe)
            return t = ca.current,
            t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            t.flags |= 65536,
            t.lanes = r,
            i !== Rr && (e = Error(o(422), {
                cause: i
            }),
            bs(ia(e, a)))) : (i !== Rr && (t = Error(o(423), {
                cause: i
            }),
            bs(ia(t, a))),
            e = e.current.alternate,
            e.flags |= 65536,
            r &= -r,
            e.lanes |= r,
            i = ia(i, a),
            r = fu(e.stateNode, i, r),
            Yr(e, r),
            lt !== 4 && (lt = 2)),
            !1;
        var u = Error(o(520), {
            cause: i
        });
        if (u = ia(u, a),
        Ps === null ? Ps = [u] : Ps.push(u),
        lt !== 4 && (lt = 2),
        t === null)
            return !0;
        i = ia(i, a),
        a = t;
        do {
            switch (a.tag) {
            case 3:
                return a.flags |= 65536,
                e = r & -r,
                a.lanes |= e,
                e = fu(a.stateNode, i, e),
                Yr(a, e),
                !1;
            case 1:
                if (t = a.type,
                u = a.stateNode,
                (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (jn === null || !jn.has(u))))
                    return a.flags |= 65536,
                    r &= -r,
                    a.lanes |= r,
                    r = Rh(r),
                    Vh(r, e, a, i),
                    Yr(a, r),
                    !1
            }
            a = a.return
        } while (a !== null);
        return !1
    }
    var zh = Error(o(461))
      , jt = !1;
    function Nt(e, t, a, i) {
        t.child = e === null ? Ah(t, null, a, i) : Ol(t, e.child, a, i)
    }
    function Uh(e, t, a, i, r) {
        a = a.render;
        var u = t.ref;
        if ("ref"in i) {
            var y = {};
            for (var b in i)
                b !== "ref" && (y[b] = i[b])
        } else
            y = i;
        return Qn(t),
        i = Qr(e, t, a, y, u, r),
        b = Fr(),
        e !== null && !jt ? (Jr(e, t, r),
        Ia(e, t, r)) : (Pe && b && _r(t),
        t.flags |= 1,
        Nt(e, t, i, r),
        t.child)
    }
    function Bh(e, t, a, i, r) {
        if (e === null) {
            var u = a.type;
            return typeof u == "function" && !Cr(u) && u.defaultProps === void 0 && a.compare === null ? (t.tag = 15,
            t.type = u,
            Lh(e, t, u, i, r)) : (e = Pi(a.type, null, i, t, t.mode, r),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (u = e.child,
        !vu(e, r)) {
            var y = u.memoizedProps;
            if (a = a.compare,
            a = a !== null ? a : gs,
            a(y, i) && e.ref === t.ref)
                return Ia(e, t, r)
        }
        return t.flags |= 1,
        e = Ga(u, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function Lh(e, t, a, i, r) {
        if (e !== null) {
            var u = e.memoizedProps;
            if (gs(u, i) && e.ref === t.ref)
                if (jt = !1,
                t.pendingProps = i = u,
                vu(e, r))
                    (e.flags & 131072) !== 0 && (jt = !0);
                else
                    return t.lanes = e.lanes,
                    Ia(e, t, r)
        }
        return du(e, t, a, i, r)
    }
    function kh(e, t, a) {
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
                return Hh(e, t, i, a)
            }
            if ((a & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                e !== null && Ki(t, u !== null ? u.cachePool : null),
                u !== null ? Ld(t, u) : Xr(),
                Nh(t);
            else
                return t.lanes = t.childLanes = 536870912,
                Hh(e, t, u !== null ? u.baseLanes | a : a, a)
        } else
            u !== null ? (Ki(t, u.cachePool),
            Ld(t, u),
            gn(),
            t.memoizedState = null) : (e !== null && Ki(t, null),
            Xr(),
            gn());
        return Nt(e, t, r, a),
        t.child
    }
    function Hh(e, t, a, i) {
        var r = kr();
        return r = r === null ? null : {
            parent: vt._currentValue,
            pool: r
        },
        t.memoizedState = {
            baseLanes: a,
            cachePool: r
        },
        e !== null && Ki(t, null),
        Xr(),
        Nh(t),
        e !== null && Ss(e, t, i, !0),
        null
    }
    function uo(e, t) {
        var a = t.ref;
        if (a === null)
            e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof a != "function" && typeof a != "object")
                throw Error(o(284));
            (e === null || e.ref !== a) && (t.flags |= 4194816)
        }
    }
    function du(e, t, a, i, r) {
        return Qn(t),
        a = Qr(e, t, a, i, void 0, r),
        i = Fr(),
        e !== null && !jt ? (Jr(e, t, r),
        Ia(e, t, r)) : (Pe && i && _r(t),
        t.flags |= 1,
        Nt(e, t, a, r),
        t.child)
    }
    function Ph(e, t, a, i, r, u) {
        return Qn(t),
        t.updateQueue = null,
        a = Hd(t, i, a, r),
        kd(e),
        i = Fr(),
        e !== null && !jt ? (Jr(e, t, u),
        Ia(e, t, u)) : (Pe && i && _r(t),
        t.flags |= 1,
        Nt(e, t, a, u),
        t.child)
    }
    function qh(e, t, a, i, r) {
        if (Qn(t),
        t.stateNode === null) {
            var u = jl
              , y = a.contextType;
            typeof y == "object" && y !== null && (u = Rt(y)),
            u = new a(i,u),
            t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null,
            u.updater = cu,
            t.stateNode = u,
            u._reactInternals = t,
            u = t.stateNode,
            u.props = i,
            u.state = t.memoizedState,
            u.refs = {},
            Pr(t),
            y = a.contextType,
            u.context = typeof y == "object" && y !== null ? Rt(y) : jl,
            u.state = t.memoizedState,
            y = a.getDerivedStateFromProps,
            typeof y == "function" && (uu(t, a, y, i),
            u.state = t.memoizedState),
            typeof a.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (y = u.state,
            typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(),
            y !== u.state && cu.enqueueReplaceState(u, u.state, null),
            Cs(t, i, u, r),
            Es(),
            u.state = t.memoizedState),
            typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            i = !0
        } else if (e === null) {
            u = t.stateNode;
            var b = t.memoizedProps
              , w = In(a, b);
            u.props = w;
            var z = u.context
              , K = a.contextType;
            y = jl,
            typeof K == "object" && K !== null && (y = Rt(K));
            var I = a.getDerivedStateFromProps;
            K = typeof I == "function" || typeof u.getSnapshotBeforeUpdate == "function",
            b = t.pendingProps !== b,
            K || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (b || z !== y) && Ch(t, u, i, y),
            fn = !1;
            var k = t.memoizedState;
            u.state = k,
            Cs(t, i, u, r),
            Es(),
            z = t.memoizedState,
            b || k !== z || fn ? (typeof I == "function" && (uu(t, a, I, i),
            z = t.memoizedState),
            (w = fn || Eh(t, a, w, i, k, z, y)) ? (K || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()),
            typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = i,
            t.memoizedState = z),
            u.props = i,
            u.state = z,
            u.context = y,
            i = w) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            i = !1)
        } else {
            u = t.stateNode,
            qr(e, t),
            y = t.memoizedProps,
            K = In(a, y),
            u.props = K,
            I = t.pendingProps,
            k = u.context,
            z = a.contextType,
            w = jl,
            typeof z == "object" && z !== null && (w = Rt(z)),
            b = a.getDerivedStateFromProps,
            (z = typeof b == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (y !== I || k !== w) && Ch(t, u, i, w),
            fn = !1,
            k = t.memoizedState,
            u.state = k,
            Cs(t, i, u, r),
            Es();
            var q = t.memoizedState;
            y !== I || k !== q || fn || e !== null && e.dependencies !== null && Gi(e.dependencies) ? (typeof b == "function" && (uu(t, a, b, i),
            q = t.memoizedState),
            (K = fn || Eh(t, a, K, i, k, q, w) || e !== null && e.dependencies !== null && Gi(e.dependencies)) ? (z || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(i, q, w),
            typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(i, q, w)),
            typeof u.componentDidUpdate == "function" && (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || y === e.memoizedProps && k === e.memoizedState || (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && k === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = i,
            t.memoizedState = q),
            u.props = i,
            u.state = q,
            u.context = w,
            i = K) : (typeof u.componentDidUpdate != "function" || y === e.memoizedProps && k === e.memoizedState || (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && k === e.memoizedState || (t.flags |= 1024),
            i = !1)
        }
        return u = i,
        uo(e, t),
        i = (t.flags & 128) !== 0,
        u || i ? (u = t.stateNode,
        a = i && typeof a.getDerivedStateFromError != "function" ? null : u.render(),
        t.flags |= 1,
        e !== null && i ? (t.child = Ol(t, e.child, null, r),
        t.child = Ol(t, null, a, r)) : Nt(e, t, a, r),
        t.memoizedState = u.state,
        e = t.child) : e = Ia(e, t, r),
        e
    }
    function Yh(e, t, a, i) {
        return vs(),
        t.flags |= 256,
        Nt(e, t, a, i),
        t.child
    }
    var hu = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function mu(e) {
        return {
            baseLanes: e,
            cachePool: Md()
        }
    }
    function pu(e, t, a) {
        return e = e !== null ? e.childLanes & ~a : 0,
        t && (e |= fa),
        e
    }
    function Gh(e, t, a) {
        var i = t.pendingProps, r = !1, u = (t.flags & 128) !== 0, y;
        if ((y = u) || (y = e !== null && e.memoizedState === null ? !1 : (bt.current & 2) !== 0),
        y && (r = !0,
        t.flags &= -129),
        y = (t.flags & 32) !== 0,
        t.flags &= -33,
        e === null) {
            if (Pe) {
                if (r ? pn(t) : gn(),
                Pe) {
                    var b = nt, w;
                    if (w = b) {
                        e: {
                            for (w = b,
                            b = Da; w.nodeType !== 8; ) {
                                if (!b) {
                                    b = null;
                                    break e
                                }
                                if (w = ja(w.nextSibling),
                                w === null) {
                                    b = null;
                                    break e
                                }
                            }
                            b = w
                        }
                        b !== null ? (t.memoizedState = {
                            dehydrated: b,
                            treeContext: Yn !== null ? {
                                id: Xa,
                                overflow: Ka
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        },
                        w = Ft(18, null, null, 0),
                        w.stateNode = b,
                        w.return = t,
                        t.child = w,
                        Bt = t,
                        nt = null,
                        w = !0) : w = !1
                    }
                    w || Kn(t)
                }
                if (b = t.memoizedState,
                b !== null && (b = b.dehydrated,
                b !== null))
                    return $u(b) ? t.lanes = 32 : t.lanes = 536870912,
                    null;
                Ja(t)
            }
            return b = i.children,
            i = i.fallback,
            r ? (gn(),
            r = t.mode,
            b = co({
                mode: "hidden",
                children: b
            }, r),
            i = qn(i, r, a, null),
            b.return = t,
            i.return = t,
            b.sibling = i,
            t.child = b,
            r = t.child,
            r.memoizedState = mu(a),
            r.childLanes = pu(e, y, a),
            t.memoizedState = hu,
            i) : (pn(t),
            gu(t, b))
        }
        if (w = e.memoizedState,
        w !== null && (b = w.dehydrated,
        b !== null)) {
            if (u)
                t.flags & 256 ? (pn(t),
                t.flags &= -257,
                t = yu(e, t, a)) : t.memoizedState !== null ? (gn(),
                t.child = e.child,
                t.flags |= 128,
                t = null) : (gn(),
                r = i.fallback,
                b = t.mode,
                i = co({
                    mode: "visible",
                    children: i.children
                }, b),
                r = qn(r, b, a, null),
                r.flags |= 2,
                i.return = t,
                r.return = t,
                i.sibling = r,
                t.child = i,
                Ol(t, e.child, null, a),
                i = t.child,
                i.memoizedState = mu(a),
                i.childLanes = pu(e, y, a),
                t.memoizedState = hu,
                t = r);
            else if (pn(t),
            $u(b)) {
                if (y = b.nextSibling && b.nextSibling.dataset,
                y)
                    var z = y.dgst;
                y = z,
                i = Error(o(419)),
                i.stack = "",
                i.digest = y,
                bs({
                    value: i,
                    source: null,
                    stack: null
                }),
                t = yu(e, t, a)
            } else if (jt || Ss(e, t, a, !1),
            y = (a & e.childLanes) !== 0,
            jt || y) {
                if (y = Qe,
                y !== null && (i = a & -a,
                i = (i & 42) !== 0 ? 1 : rl(i),
                i = (i & (y.suspendedLanes | a)) !== 0 ? 0 : i,
                i !== 0 && i !== w.retryLane))
                    throw w.retryLane = i,
                    Sl(e, i),
                    ea(y, e, i),
                    zh;
                b.data === "$?" || zu(),
                t = yu(e, t, a)
            } else
                b.data === "$?" ? (t.flags |= 192,
                t.child = e.child,
                t = null) : (e = w.treeContext,
                nt = ja(b.nextSibling),
                Bt = t,
                Pe = !0,
                Xn = null,
                Da = !1,
                e !== null && (ra[ua++] = Xa,
                ra[ua++] = Ka,
                ra[ua++] = Yn,
                Xa = e.id,
                Ka = e.overflow,
                Yn = t),
                t = gu(t, i.children),
                t.flags |= 4096);
            return t
        }
        return r ? (gn(),
        r = i.fallback,
        b = t.mode,
        w = e.child,
        z = w.sibling,
        i = Ga(w, {
            mode: "hidden",
            children: i.children
        }),
        i.subtreeFlags = w.subtreeFlags & 65011712,
        z !== null ? r = Ga(z, r) : (r = qn(r, b, a, null),
        r.flags |= 2),
        r.return = t,
        i.return = t,
        i.sibling = r,
        t.child = i,
        i = r,
        r = t.child,
        b = e.child.memoizedState,
        b === null ? b = mu(a) : (w = b.cachePool,
        w !== null ? (z = vt._currentValue,
        w = w.parent !== z ? {
            parent: z,
            pool: z
        } : w) : w = Md(),
        b = {
            baseLanes: b.baseLanes | a,
            cachePool: w
        }),
        r.memoizedState = b,
        r.childLanes = pu(e, y, a),
        t.memoizedState = hu,
        i) : (pn(t),
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
    function gu(e, t) {
        return t = co({
            mode: "visible",
            children: t
        }, e.mode),
        t.return = e,
        e.child = t
    }
    function co(e, t) {
        return e = Ft(22, e, null, t),
        e.lanes = 0,
        e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        },
        e
    }
    function yu(e, t, a) {
        return Ol(t, e.child, null, a),
        e = gu(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function Xh(e, t, a) {
        e.lanes |= t;
        var i = e.alternate;
        i !== null && (i.lanes |= t),
        zr(e.return, t, a)
    }
    function xu(e, t, a, i, r) {
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
    function Kh(e, t, a) {
        var i = t.pendingProps
          , r = i.revealOrder
          , u = i.tail;
        if (Nt(e, t, i.children, a),
        i = bt.current,
        (i & 2) !== 0)
            i = i & 1 | 2,
            t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0)
                e: for (e = t.child; e !== null; ) {
                    if (e.tag === 13)
                        e.memoizedState !== null && Xh(e, a, t);
                    else if (e.tag === 19)
                        Xh(e, a, t);
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
        switch (X(bt, i),
        r) {
        case "forwards":
            for (a = t.child,
            r = null; a !== null; )
                e = a.alternate,
                e !== null && io(e) === null && (r = a),
                a = a.sibling;
            a = r,
            a === null ? (r = t.child,
            t.child = null) : (r = a.sibling,
            a.sibling = null),
            xu(t, !1, r, a, u);
            break;
        case "backwards":
            for (a = null,
            r = t.child,
            t.child = null; r !== null; ) {
                if (e = r.alternate,
                e !== null && io(e) === null) {
                    t.child = r;
                    break
                }
                e = r.sibling,
                r.sibling = a,
                a = r,
                r = e
            }
            xu(t, !0, a, null, u);
            break;
        case "together":
            xu(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
        return t.child
    }
    function Ia(e, t, a) {
        if (e !== null && (t.dependencies = e.dependencies),
        Sn |= t.lanes,
        (a & t.childLanes) === 0)
            if (e !== null) {
                if (Ss(e, t, a, !1),
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
    function vu(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies,
        !!(e !== null && Gi(e)))
    }
    function Wx(e, t, a) {
        switch (t.tag) {
        case 3:
            ye(t, t.stateNode.containerInfo),
            cn(t, vt, e.memoizedState.cache),
            vs();
            break;
        case 27:
        case 5:
            He(t);
            break;
        case 4:
            ye(t, t.stateNode.containerInfo);
            break;
        case 10:
            cn(t, t.type, t.memoizedProps.value);
            break;
        case 13:
            var i = t.memoizedState;
            if (i !== null)
                return i.dehydrated !== null ? (pn(t),
                t.flags |= 128,
                null) : (a & t.child.childLanes) !== 0 ? Gh(e, t, a) : (pn(t),
                e = Ia(e, t, a),
                e !== null ? e.sibling : null);
            pn(t);
            break;
        case 19:
            var r = (e.flags & 128) !== 0;
            if (i = (a & t.childLanes) !== 0,
            i || (Ss(e, t, a, !1),
            i = (a & t.childLanes) !== 0),
            r) {
                if (i)
                    return Kh(e, t, a);
                t.flags |= 128
            }
            if (r = t.memoizedState,
            r !== null && (r.rendering = null,
            r.tail = null,
            r.lastEffect = null),
            X(bt, bt.current),
            i)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
            kh(e, t, a);
        case 24:
            cn(t, vt, e.memoizedState.cache)
        }
        return Ia(e, t, a)
    }
    function Zh(e, t, a) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
                jt = !0;
            else {
                if (!vu(e, a) && (t.flags & 128) === 0)
                    return jt = !1,
                    Wx(e, t, a);
                jt = (e.flags & 131072) !== 0
            }
        else
            jt = !1,
            Pe && (t.flags & 1048576) !== 0 && Td(t, Yi, t.index);
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
                    Cr(i) ? (e = In(i, e),
                    t.tag = 1,
                    t = qh(null, t, i, e, a)) : (t.tag = 0,
                    t = du(null, t, i, e, a));
                else {
                    if (i != null) {
                        if (r = i.$$typeof,
                        r === Q) {
                            t.tag = 11,
                            t = Uh(null, t, i, e, a);
                            break e
                        } else if (r === ee) {
                            t.tag = 14,
                            t = Bh(null, t, i, e, a);
                            break e
                        }
                    }
                    throw t = W(i) || i,
                    Error(o(306, t, ""))
                }
            }
            return t;
        case 0:
            return du(e, t, t.type, t.pendingProps, a);
        case 1:
            return i = t.type,
            r = In(i, t.pendingProps),
            qh(e, t, i, r, a);
        case 3:
            e: {
                if (ye(t, t.stateNode.containerInfo),
                e === null)
                    throw Error(o(387));
                i = t.pendingProps;
                var u = t.memoizedState;
                r = u.element,
                qr(e, t),
                Cs(t, i, null, a);
                var y = t.memoizedState;
                if (i = y.cache,
                cn(t, vt, i),
                i !== u.cache && Ur(t, [vt], a, !0),
                Es(),
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
                        t = Yh(e, t, i, a);
                        break e
                    } else if (i !== r) {
                        r = ia(Error(o(424)), t),
                        bs(r),
                        t = Yh(e, t, i, a);
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
                        for (nt = ja(e.firstChild),
                        Bt = t,
                        Pe = !0,
                        Xn = null,
                        Da = !0,
                        a = Ah(t, null, i, a),
                        t.child = a; a; )
                            a.flags = a.flags & -3 | 4096,
                            a = a.sibling
                    }
                else {
                    if (vs(),
                    i === r) {
                        t = Ia(e, t, a);
                        break e
                    }
                    Nt(e, t, i, a)
                }
                t = t.child
            }
            return t;
        case 26:
            return uo(e, t),
            e === null ? (a = Im(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : Pe || (a = t.type,
            e = t.pendingProps,
            i = Ao(G.current).createElement(a),
            i[xt] = t,
            i[At] = e,
            Ct(i, a, e),
            ce(i),
            t.stateNode = i) : t.memoizedState = Im(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
            null;
        case 27:
            return He(t),
            e === null && Pe && (i = t.stateNode = Qm(t.type, t.pendingProps, G.current),
            Bt = t,
            Da = !0,
            r = nt,
            An(t.type) ? (Wu = r,
            nt = ja(i.firstChild)) : nt = r),
            Nt(e, t, t.pendingProps.children, a),
            uo(e, t),
            e === null && (t.flags |= 4194304),
            t.child;
        case 5:
            return e === null && Pe && ((r = i = nt) && (i = Ev(i, t.type, t.pendingProps, Da),
            i !== null ? (t.stateNode = i,
            Bt = t,
            nt = ja(i.firstChild),
            Da = !1,
            r = !0) : r = !1),
            r || Kn(t)),
            He(t),
            r = t.type,
            u = t.pendingProps,
            y = e !== null ? e.memoizedProps : null,
            i = u.children,
            Fu(r, u) ? i = null : y !== null && Fu(r, y) && (t.flags |= 32),
            t.memoizedState !== null && (r = Qr(e, t, Xx, null, null, a),
            Js._currentValue = r),
            uo(e, t),
            Nt(e, t, i, a),
            t.child;
        case 6:
            return e === null && Pe && ((e = a = nt) && (a = Cv(a, t.pendingProps, Da),
            a !== null ? (t.stateNode = a,
            Bt = t,
            nt = null,
            e = !0) : e = !1),
            e || Kn(t)),
            null;
        case 13:
            return Gh(e, t, a);
        case 4:
            return ye(t, t.stateNode.containerInfo),
            i = t.pendingProps,
            e === null ? t.child = Ol(t, null, i, a) : Nt(e, t, i, a),
            t.child;
        case 11:
            return Uh(e, t, t.type, t.pendingProps, a);
        case 7:
            return Nt(e, t, t.pendingProps, a),
            t.child;
        case 8:
            return Nt(e, t, t.pendingProps.children, a),
            t.child;
        case 12:
            return Nt(e, t, t.pendingProps.children, a),
            t.child;
        case 10:
            return i = t.pendingProps,
            cn(t, t.type, i.value),
            Nt(e, t, i.children, a),
            t.child;
        case 9:
            return r = t.type._context,
            i = t.pendingProps.children,
            Qn(t),
            r = Rt(r),
            i = i(r),
            t.flags |= 1,
            Nt(e, t, i, a),
            t.child;
        case 14:
            return Bh(e, t, t.type, t.pendingProps, a);
        case 15:
            return Lh(e, t, t.type, t.pendingProps, a);
        case 19:
            return Kh(e, t, a);
        case 31:
            return i = t.pendingProps,
            a = t.mode,
            i = {
                mode: i.mode,
                children: i.children
            },
            e === null ? (a = co(i, a),
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
            return kh(e, t, a);
        case 24:
            return Qn(t),
            i = Rt(vt),
            e === null ? (r = kr(),
            r === null && (r = Qe,
            u = Br(),
            r.pooledCache = u,
            u.refCount++,
            u !== null && (r.pooledCacheLanes |= a),
            r = u),
            t.memoizedState = {
                parent: i,
                cache: r
            },
            Pr(t),
            cn(t, vt, r)) : ((e.lanes & a) !== 0 && (qr(e, t),
            Cs(t, null, null, a),
            Es()),
            r = e.memoizedState,
            u = t.memoizedState,
            r.parent !== i ? (r = {
                parent: i,
                cache: i
            },
            t.memoizedState = r,
            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = r),
            cn(t, vt, i)) : (i = u.cache,
            cn(t, vt, i),
            i !== r.cache && Ur(t, [vt], a, !0))),
            Nt(e, t, t.pendingProps.children, a),
            t.child;
        case 29:
            throw t.pendingProps
        }
        throw Error(o(156, t.tag))
    }
    function $a(e) {
        e.flags |= 4
    }
    function Qh(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            e.flags &= -16777217;
        else if (e.flags |= 16777216,
        !ap(t)) {
            if (t = ca.current,
            t !== null && ((Ue & 4194048) === Ue ? Ma !== null : (Ue & 62914560) !== Ue && (Ue & 536870912) === 0 || t !== Ma))
                throw As = Hr,
                _d;
            e.flags |= 8192
        }
    }
    function fo(e, t) {
        t !== null && (e.flags |= 4),
        e.flags & 16384 && (t = e.tag !== 22 ? ne() : 536870912,
        e.lanes |= t,
        Ul |= t)
    }
    function zs(e, t) {
        if (!Pe)
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
    function We(e) {
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
    function ev(e, t, a) {
        var i = t.pendingProps;
        switch (Or(t),
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
            return We(t),
            null;
        case 1:
            return We(t),
            null;
        case 3:
            return a = t.stateNode,
            i = null,
            e !== null && (i = e.memoizedState.cache),
            t.memoizedState.cache !== i && (t.flags |= 2048),
            Qa(vt),
            we(),
            a.pendingContext && (a.context = a.pendingContext,
            a.pendingContext = null),
            (e === null || e.child === null) && (xs(t) ? $a(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            Nd())),
            We(t),
            null;
        case 26:
            return a = t.memoizedState,
            e === null ? ($a(t),
            a !== null ? (We(t),
            Qh(t, a)) : (We(t),
            t.flags &= -16777217)) : a ? a !== e.memoizedState ? ($a(t),
            We(t),
            Qh(t, a)) : (We(t),
            t.flags &= -16777217) : (e.memoizedProps !== i && $a(t),
            We(t),
            t.flags &= -16777217),
            null;
        case 27:
            Ve(t),
            a = G.current;
            var r = t.type;
            if (e !== null && t.stateNode != null)
                e.memoizedProps !== i && $a(t);
            else {
                if (!i) {
                    if (t.stateNode === null)
                        throw Error(o(166));
                    return We(t),
                    null
                }
                e = le.current,
                xs(t) ? wd(t) : (e = Qm(r, i, a),
                t.stateNode = e,
                $a(t))
            }
            return We(t),
            null;
        case 5:
            if (Ve(t),
            a = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== i && $a(t);
            else {
                if (!i) {
                    if (t.stateNode === null)
                        throw Error(o(166));
                    return We(t),
                    null
                }
                if (e = le.current,
                xs(t))
                    wd(t);
                else {
                    switch (r = Ao(G.current),
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
                    e[xt] = t,
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
                    e: switch (Ct(e, a, i),
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
            return We(t),
            t.flags &= -16777217,
            null;
        case 6:
            if (e && t.stateNode != null)
                e.memoizedProps !== i && $a(t);
            else {
                if (typeof i != "string" && t.stateNode === null)
                    throw Error(o(166));
                if (e = G.current,
                xs(t)) {
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
                    e[xt] = t,
                    e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || Pm(e.nodeValue, a)),
                    e || Kn(t)
                } else
                    e = Ao(e).createTextNode(i),
                    e[xt] = t,
                    t.stateNode = e
            }
            return We(t),
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
                        r[xt] = t
                    } else
                        vs(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    We(t),
                    r = !1
                } else
                    r = Nd(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = r),
                    r = !0;
                if (!r)
                    return t.flags & 256 ? (Ja(t),
                    t) : (Ja(t),
                    null)
            }
            if (Ja(t),
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
            fo(t, t.updateQueue),
            We(t),
            null;
        case 4:
            return we(),
            e === null && Gu(t.stateNode.containerInfo),
            We(t),
            null;
        case 10:
            return Qa(t.type),
            We(t),
            null;
        case 19:
            if (Z(bt),
            r = t.memoizedState,
            r === null)
                return We(t),
                null;
            if (i = (t.flags & 128) !== 0,
            u = r.rendering,
            u === null)
                if (i)
                    zs(r, !1);
                else {
                    if (lt !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null; ) {
                            if (u = io(e),
                            u !== null) {
                                for (t.flags |= 128,
                                zs(r, !1),
                                e = u.updateQueue,
                                t.updateQueue = e,
                                fo(t, e),
                                t.subtreeFlags = 0,
                                e = a,
                                a = t.child; a !== null; )
                                    jd(a, e),
                                    a = a.sibling;
                                return X(bt, bt.current & 1 | 2),
                                t.child
                            }
                            e = e.sibling
                        }
                    r.tail !== null && dt() > po && (t.flags |= 128,
                    i = !0,
                    zs(r, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!i)
                    if (e = io(u),
                    e !== null) {
                        if (t.flags |= 128,
                        i = !0,
                        e = e.updateQueue,
                        t.updateQueue = e,
                        fo(t, e),
                        zs(r, !0),
                        r.tail === null && r.tailMode === "hidden" && !u.alternate && !Pe)
                            return We(t),
                            null
                    } else
                        2 * dt() - r.renderingStartTime > po && a !== 536870912 && (t.flags |= 128,
                        i = !0,
                        zs(r, !1),
                        t.lanes = 4194304);
                r.isBackwards ? (u.sibling = t.child,
                t.child = u) : (e = r.last,
                e !== null ? e.sibling = u : t.child = u,
                r.last = u)
            }
            return r.tail !== null ? (t = r.tail,
            r.rendering = t,
            r.tail = t.sibling,
            r.renderingStartTime = dt(),
            t.sibling = null,
            e = bt.current,
            X(bt, i ? e & 1 | 2 : e & 1),
            t) : (We(t),
            null);
        case 22:
        case 23:
            return Ja(t),
            Kr(),
            i = t.memoizedState !== null,
            e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192),
            i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (We(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : We(t),
            a = t.updateQueue,
            a !== null && fo(t, a.retryQueue),
            a = null,
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
            i = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool),
            i !== a && (t.flags |= 2048),
            e !== null && Z(Fn),
            null;
        case 24:
            return a = null,
            e !== null && (a = e.memoizedState.cache),
            t.memoizedState.cache !== a && (t.flags |= 2048),
            Qa(vt),
            We(t),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(o(156, t.tag))
    }
    function tv(e, t) {
        switch (Or(t),
        t.tag) {
        case 1:
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return Qa(vt),
            we(),
            e = t.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 26:
        case 27:
        case 5:
            return Ve(t),
            null;
        case 13:
            if (Ja(t),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(o(340));
                vs()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return Z(bt),
            null;
        case 4:
            return we(),
            null;
        case 10:
            return Qa(t.type),
            null;
        case 22:
        case 23:
            return Ja(t),
            Kr(),
            e !== null && Z(Fn),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 24:
            return Qa(vt),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function Fh(e, t) {
        switch (Or(t),
        t.tag) {
        case 3:
            Qa(vt),
            we();
            break;
        case 26:
        case 27:
        case 5:
            Ve(t);
            break;
        case 4:
            we();
            break;
        case 13:
            Ja(t);
            break;
        case 19:
            Z(bt);
            break;
        case 10:
            Qa(t.type);
            break;
        case 22:
        case 23:
            Ja(t),
            Kr(),
            e !== null && Z(Fn);
            break;
        case 24:
            Qa(vt)
        }
    }
    function Us(e, t) {
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
            Ze(t, t.return, b)
        }
    }
    function yn(e, t, a) {
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
                            var w = a
                              , z = b;
                            try {
                                z()
                            } catch (K) {
                                Ze(r, w, K)
                            }
                        }
                    }
                    i = i.next
                } while (i !== u)
            }
        } catch (K) {
            Ze(t, t.return, K)
        }
    }
    function Jh(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var a = e.stateNode;
            try {
                Bd(t, a)
            } catch (i) {
                Ze(e, e.return, i)
            }
        }
    }
    function Ih(e, t, a) {
        a.props = In(e.type, e.memoizedProps),
        a.state = e.memoizedState;
        try {
            a.componentWillUnmount()
        } catch (i) {
            Ze(e, t, i)
        }
    }
    function Bs(e, t) {
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
            Ze(e, t, r)
        }
    }
    function _a(e, t) {
        var a = e.ref
          , i = e.refCleanup;
        if (a !== null)
            if (typeof i == "function")
                try {
                    i()
                } catch (r) {
                    Ze(e, t, r)
                } finally {
                    e.refCleanup = null,
                    e = e.alternate,
                    e != null && (e.refCleanup = null)
                }
            else if (typeof a == "function")
                try {
                    a(null)
                } catch (r) {
                    Ze(e, t, r)
                }
            else
                a.current = null
    }
    function $h(e) {
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
            Ze(e, e.return, r)
        }
    }
    function bu(e, t, a) {
        try {
            var i = e.stateNode;
            jv(i, e.type, a, t),
            i[At] = t
        } catch (r) {
            Ze(e, e.return, r)
        }
    }
    function Wh(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && An(e.type) || e.tag === 4
    }
    function Su(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || Wh(e.return))
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
    function ju(e, t, a) {
        var i = e.tag;
        if (i === 5 || i === 6)
            e = e.stateNode,
            t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a,
            t.appendChild(e),
            a = a._reactRootContainer,
            a != null || t.onclick !== null || (t.onclick = wo));
        else if (i !== 4 && (i === 27 && An(e.type) && (a = e.stateNode,
        t = null),
        e = e.child,
        e !== null))
            for (ju(e, t, a),
            e = e.sibling; e !== null; )
                ju(e, t, a),
                e = e.sibling
    }
    function ho(e, t, a) {
        var i = e.tag;
        if (i === 5 || i === 6)
            e = e.stateNode,
            t ? a.insertBefore(e, t) : a.appendChild(e);
        else if (i !== 4 && (i === 27 && An(e.type) && (a = e.stateNode),
        e = e.child,
        e !== null))
            for (ho(e, t, a),
            e = e.sibling; e !== null; )
                ho(e, t, a),
                e = e.sibling
    }
    function em(e) {
        var t = e.stateNode
          , a = e.memoizedProps;
        try {
            for (var i = e.type, r = t.attributes; r.length; )
                t.removeAttributeNode(r[0]);
            Ct(t, i, a),
            t[xt] = e,
            t[At] = a
        } catch (u) {
            Ze(e, e.return, u)
        }
    }
    var Wa = !1
      , ct = !1
      , Tu = !1
      , tm = typeof WeakSet == "function" ? WeakSet : Set
      , Tt = null;
    function av(e, t) {
        if (e = e.containerInfo,
        Zu = _o,
        e = dd(e),
        Sr(e)) {
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
                          , w = -1
                          , z = 0
                          , K = 0
                          , I = e
                          , k = null;
                        t: for (; ; ) {
                            for (var q; I !== a || r !== 0 && I.nodeType !== 3 || (b = y + r),
                            I !== u || i !== 0 && I.nodeType !== 3 || (w = y + i),
                            I.nodeType === 3 && (y += I.nodeValue.length),
                            (q = I.firstChild) !== null; )
                                k = I,
                                I = q;
                            for (; ; ) {
                                if (I === e)
                                    break t;
                                if (k === a && ++z === r && (b = y),
                                k === u && ++K === i && (w = y),
                                (q = I.nextSibling) !== null)
                                    break;
                                I = k,
                                k = I.parentNode
                            }
                            I = q
                        }
                        a = b === -1 || w === -1 ? null : {
                            start: b,
                            end: w
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
        for (Qu = {
            focusedElem: e,
            selectionRange: a
        },
        _o = !1,
        Tt = t; Tt !== null; )
            if (t = Tt,
            e = t.child,
            (t.subtreeFlags & 1024) !== 0 && e !== null)
                e.return = t,
                Tt = e;
            else
                for (; Tt !== null; ) {
                    switch (t = Tt,
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
                                var Se = In(a.type, r, a.elementType === a.type);
                                e = i.getSnapshotBeforeUpdate(Se, u),
                                i.__reactInternalSnapshotBeforeUpdate = e
                            } catch (xe) {
                                Ze(a, a.return, xe)
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo,
                            a = e.nodeType,
                            a === 9)
                                Iu(e);
                            else if (a === 1)
                                switch (e.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    Iu(e);
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
    function am(e, t, a) {
        var i = a.flags;
        switch (a.tag) {
        case 0:
        case 11:
        case 15:
            xn(e, a),
            i & 4 && Us(5, a);
            break;
        case 1:
            if (xn(e, a),
            i & 4)
                if (e = a.stateNode,
                t === null)
                    try {
                        e.componentDidMount()
                    } catch (y) {
                        Ze(a, a.return, y)
                    }
                else {
                    var r = In(a.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(r, t, e.__reactInternalSnapshotBeforeUpdate)
                    } catch (y) {
                        Ze(a, a.return, y)
                    }
                }
            i & 64 && Jh(a),
            i & 512 && Bs(a, a.return);
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
                    Bd(e, t)
                } catch (y) {
                    Ze(a, a.return, y)
                }
            }
            break;
        case 27:
            t === null && i & 4 && em(a);
        case 26:
        case 5:
            xn(e, a),
            t === null && i & 4 && $h(a),
            i & 512 && Bs(a, a.return);
            break;
        case 12:
            xn(e, a);
            break;
        case 13:
            xn(e, a),
            i & 4 && sm(e, a),
            i & 64 && (e = a.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null && (a = fv.bind(null, a),
            Dv(e, a))));
            break;
        case 22:
            if (i = a.memoizedState !== null || Wa,
            !i) {
                t = t !== null && t.memoizedState !== null || ct,
                r = Wa;
                var u = ct;
                Wa = i,
                (ct = t) && !u ? vn(e, a, (a.subtreeFlags & 8772) !== 0) : xn(e, a),
                Wa = r,
                ct = u
            }
            break;
        case 30:
            break;
        default:
            xn(e, a)
        }
    }
    function nm(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        nm(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && fl(t)),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    var Ie = null
      , Yt = !1;
    function en(e, t, a) {
        for (a = a.child; a !== null; )
            lm(e, t, a),
            a = a.sibling
    }
    function lm(e, t, a) {
        if ($e && typeof $e.onCommitFiberUnmount == "function")
            try {
                $e.onCommitFiberUnmount(_t, a)
            } catch {}
        switch (a.tag) {
        case 26:
            ct || _a(a, t),
            en(e, t, a),
            a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode,
            a.parentNode.removeChild(a));
            break;
        case 27:
            ct || _a(a, t);
            var i = Ie
              , r = Yt;
            An(a.type) && (Ie = a.stateNode,
            Yt = !1),
            en(e, t, a),
            Ks(a.stateNode),
            Ie = i,
            Yt = r;
            break;
        case 5:
            ct || _a(a, t);
        case 6:
            if (i = Ie,
            r = Yt,
            Ie = null,
            en(e, t, a),
            Ie = i,
            Yt = r,
            Ie !== null)
                if (Yt)
                    try {
                        (Ie.nodeType === 9 ? Ie.body : Ie.nodeName === "HTML" ? Ie.ownerDocument.body : Ie).removeChild(a.stateNode)
                    } catch (u) {
                        Ze(a, t, u)
                    }
                else
                    try {
                        Ie.removeChild(a.stateNode)
                    } catch (u) {
                        Ze(a, t, u)
                    }
            break;
        case 18:
            Ie !== null && (Yt ? (e = Ie,
            Km(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, a.stateNode),
            ei(e)) : Km(Ie, a.stateNode));
            break;
        case 4:
            i = Ie,
            r = Yt,
            Ie = a.stateNode.containerInfo,
            Yt = !0,
            en(e, t, a),
            Ie = i,
            Yt = r;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            ct || yn(2, a, t),
            ct || yn(4, a, t),
            en(e, t, a);
            break;
        case 1:
            ct || (_a(a, t),
            i = a.stateNode,
            typeof i.componentWillUnmount == "function" && Ih(a, t, i)),
            en(e, t, a);
            break;
        case 21:
            en(e, t, a);
            break;
        case 22:
            ct = (i = ct) || a.memoizedState !== null,
            en(e, t, a),
            ct = i;
            break;
        default:
            en(e, t, a)
        }
    }
    function sm(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null))))
            try {
                ei(e)
            } catch (a) {
                Ze(t, t.return, a)
            }
    }
    function nv(e) {
        switch (e.tag) {
        case 13:
        case 19:
            var t = e.stateNode;
            return t === null && (t = e.stateNode = new tm),
            t;
        case 22:
            return e = e.stateNode,
            t = e._retryCache,
            t === null && (t = e._retryCache = new tm),
            t;
        default:
            throw Error(o(435, e.tag))
        }
    }
    function wu(e, t) {
        var a = nv(e);
        t.forEach(function(i) {
            var r = dv.bind(null, e, i);
            a.has(i) || (a.add(i),
            i.then(r, r))
        })
    }
    function Jt(e, t) {
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
                        if (An(b.type)) {
                            Ie = b.stateNode,
                            Yt = !1;
                            break e
                        }
                        break;
                    case 5:
                        Ie = b.stateNode,
                        Yt = !1;
                        break e;
                    case 3:
                    case 4:
                        Ie = b.stateNode.containerInfo,
                        Yt = !0;
                        break e
                    }
                    b = b.return
                }
                if (Ie === null)
                    throw Error(o(160));
                lm(u, y, r),
                Ie = null,
                Yt = !1,
                u = r.alternate,
                u !== null && (u.return = null),
                r.return = null
            }
        if (t.subtreeFlags & 13878)
            for (t = t.child; t !== null; )
                im(t, e),
                t = t.sibling
    }
    var Sa = null;
    function im(e, t) {
        var a = e.alternate
          , i = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            Jt(t, e),
            It(e),
            i & 4 && (yn(3, e, e.return),
            Us(3, e),
            yn(5, e, e.return));
            break;
        case 1:
            Jt(t, e),
            It(e),
            i & 512 && (ct || a === null || _a(a, a.return)),
            i & 64 && Wa && (e = e.updateQueue,
            e !== null && (i = e.callbacks,
            i !== null && (a = e.shared.hiddenCallbacks,
            e.shared.hiddenCallbacks = a === null ? i : a.concat(i))));
            break;
        case 26:
            var r = Sa;
            if (Jt(t, e),
            It(e),
            i & 512 && (ct || a === null || _a(a, a.return)),
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
                                    (!u || u[on] || u[xt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = r.createElement(i),
                                    r.head.insertBefore(u, r.querySelector("head > title"))),
                                    Ct(u, i, a),
                                    u[xt] = e,
                                    ce(u),
                                    i = u;
                                    break e;
                                case "link":
                                    var y = ep("link", "href", r).get(i + (a.href || ""));
                                    if (y) {
                                        for (var b = 0; b < y.length; b++)
                                            if (u = y[b],
                                            u.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && u.getAttribute("rel") === (a.rel == null ? null : a.rel) && u.getAttribute("title") === (a.title == null ? null : a.title) && u.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                y.splice(b, 1);
                                                break t
                                            }
                                    }
                                    u = r.createElement(i),
                                    Ct(u, i, a),
                                    r.head.appendChild(u);
                                    break;
                                case "meta":
                                    if (y = ep("meta", "content", r).get(i + (a.content || ""))) {
                                        for (b = 0; b < y.length; b++)
                                            if (u = y[b],
                                            u.getAttribute("content") === (a.content == null ? null : "" + a.content) && u.getAttribute("name") === (a.name == null ? null : a.name) && u.getAttribute("property") === (a.property == null ? null : a.property) && u.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && u.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                y.splice(b, 1);
                                                break t
                                            }
                                    }
                                    u = r.createElement(i),
                                    Ct(u, i, a),
                                    r.head.appendChild(u);
                                    break;
                                default:
                                    throw Error(o(468, i))
                                }
                                u[xt] = e,
                                ce(u),
                                i = u
                            }
                            e.stateNode = i
                        } else
                            tp(r, e.type, e.stateNode);
                    else
                        e.stateNode = Wm(r, i, e.memoizedProps);
                else
                    u !== i ? (u === null ? a.stateNode !== null && (a = a.stateNode,
                    a.parentNode.removeChild(a)) : u.count--,
                    i === null ? tp(r, e.type, e.stateNode) : Wm(r, i, e.memoizedProps)) : i === null && e.stateNode !== null && bu(e, e.memoizedProps, a.memoizedProps)
            }
            break;
        case 27:
            Jt(t, e),
            It(e),
            i & 512 && (ct || a === null || _a(a, a.return)),
            a !== null && i & 4 && bu(e, e.memoizedProps, a.memoizedProps);
            break;
        case 5:
            if (Jt(t, e),
            It(e),
            i & 512 && (ct || a === null || _a(a, a.return)),
            e.flags & 32) {
                r = e.stateNode;
                try {
                    ml(r, "")
                } catch (q) {
                    Ze(e, e.return, q)
                }
            }
            i & 4 && e.stateNode != null && (r = e.memoizedProps,
            bu(e, r, a !== null ? a.memoizedProps : r)),
            i & 1024 && (Tu = !0);
            break;
        case 6:
            if (Jt(t, e),
            It(e),
            i & 4) {
                if (e.stateNode === null)
                    throw Error(o(162));
                i = e.memoizedProps,
                a = e.stateNode;
                try {
                    a.nodeValue = i
                } catch (q) {
                    Ze(e, e.return, q)
                }
            }
            break;
        case 3:
            if (Co = null,
            r = Sa,
            Sa = No(t.containerInfo),
            Jt(t, e),
            Sa = r,
            It(e),
            i & 4 && a !== null && a.memoizedState.isDehydrated)
                try {
                    ei(t.containerInfo)
                } catch (q) {
                    Ze(e, e.return, q)
                }
            Tu && (Tu = !1,
            om(e));
            break;
        case 4:
            i = Sa,
            Sa = No(e.stateNode.containerInfo),
            Jt(t, e),
            It(e),
            Sa = i;
            break;
        case 12:
            Jt(t, e),
            It(e);
            break;
        case 13:
            Jt(t, e),
            It(e),
            e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Mu = dt()),
            i & 4 && (i = e.updateQueue,
            i !== null && (e.updateQueue = null,
            wu(e, i)));
            break;
        case 22:
            r = e.memoizedState !== null;
            var w = a !== null && a.memoizedState !== null
              , z = Wa
              , K = ct;
            if (Wa = z || r,
            ct = K || w,
            Jt(t, e),
            ct = K,
            Wa = z,
            It(e),
            i & 8192)
                e: for (t = e.stateNode,
                t._visibility = r ? t._visibility & -2 : t._visibility | 1,
                r && (a === null || w || Wa || ct || $n(e)),
                a = null,
                t = e; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (a === null) {
                            w = a = t;
                            try {
                                if (u = w.stateNode,
                                r)
                                    y = u.style,
                                    typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                                else {
                                    b = w.stateNode;
                                    var I = w.memoizedProps.style
                                      , k = I != null && I.hasOwnProperty("display") ? I.display : null;
                                    b.style.display = k == null || typeof k == "boolean" ? "" : ("" + k).trim()
                                }
                            } catch (q) {
                                Ze(w, w.return, q)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (a === null) {
                            w = t;
                            try {
                                w.stateNode.nodeValue = r ? "" : w.memoizedProps
                            } catch (q) {
                                Ze(w, w.return, q)
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
            wu(e, a))));
            break;
        case 19:
            Jt(t, e),
            It(e),
            i & 4 && (i = e.updateQueue,
            i !== null && (e.updateQueue = null,
            wu(e, i)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            Jt(t, e),
            It(e)
        }
    }
    function It(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var a, i = e.return; i !== null; ) {
                    if (Wh(i)) {
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
                      , u = Su(e);
                    ho(e, u, r);
                    break;
                case 5:
                    var y = a.stateNode;
                    a.flags & 32 && (ml(y, ""),
                    a.flags &= -33);
                    var b = Su(e);
                    ho(e, b, y);
                    break;
                case 3:
                case 4:
                    var w = a.stateNode.containerInfo
                      , z = Su(e);
                    ju(e, z, w);
                    break;
                default:
                    throw Error(o(161))
                }
            } catch (K) {
                Ze(e, e.return, K)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function om(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
                var t = e;
                om(t),
                t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                e = e.sibling
            }
    }
    function xn(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                am(e, t.alternate, t),
                t = t.sibling
    }
    function $n(e) {
        for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                yn(4, t, t.return),
                $n(t);
                break;
            case 1:
                _a(t, t.return);
                var a = t.stateNode;
                typeof a.componentWillUnmount == "function" && Ih(t, t.return, a),
                $n(t);
                break;
            case 27:
                Ks(t.stateNode);
            case 26:
            case 5:
                _a(t, t.return),
                $n(t);
                break;
            case 22:
                t.memoizedState === null && $n(t);
                break;
            case 30:
                $n(t);
                break;
            default:
                $n(t)
            }
            e = e.sibling
        }
    }
    function vn(e, t, a) {
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
                vn(r, u, a),
                Us(4, u);
                break;
            case 1:
                if (vn(r, u, a),
                i = u,
                r = i.stateNode,
                typeof r.componentDidMount == "function")
                    try {
                        r.componentDidMount()
                    } catch (z) {
                        Ze(i, i.return, z)
                    }
                if (i = u,
                r = i.updateQueue,
                r !== null) {
                    var b = i.stateNode;
                    try {
                        var w = r.shared.hiddenCallbacks;
                        if (w !== null)
                            for (r.shared.hiddenCallbacks = null,
                            r = 0; r < w.length; r++)
                                Ud(w[r], b)
                    } catch (z) {
                        Ze(i, i.return, z)
                    }
                }
                a && y & 64 && Jh(u),
                Bs(u, u.return);
                break;
            case 27:
                em(u);
            case 26:
            case 5:
                vn(r, u, a),
                a && i === null && y & 4 && $h(u),
                Bs(u, u.return);
                break;
            case 12:
                vn(r, u, a);
                break;
            case 13:
                vn(r, u, a),
                a && y & 4 && sm(r, u);
                break;
            case 22:
                u.memoizedState === null && vn(r, u, a),
                Bs(u, u.return);
                break;
            case 30:
                break;
            default:
                vn(r, u, a)
            }
            t = t.sibling
        }
    }
    function Au(e, t) {
        var a = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
        e = null,
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
        e !== a && (e != null && e.refCount++,
        a != null && js(a))
    }
    function Nu(e, t) {
        e = null,
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== e && (t.refCount++,
        e != null && js(e))
    }
    function Oa(e, t, a, i) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                rm(e, t, a, i),
                t = t.sibling
    }
    function rm(e, t, a, i) {
        var r = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            Oa(e, t, a, i),
            r & 2048 && Us(9, t);
            break;
        case 1:
            Oa(e, t, a, i);
            break;
        case 3:
            Oa(e, t, a, i),
            r & 2048 && (e = null,
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== e && (t.refCount++,
            e != null && js(e)));
            break;
        case 12:
            if (r & 2048) {
                Oa(e, t, a, i),
                e = t.stateNode;
                try {
                    var u = t.memoizedProps
                      , y = u.id
                      , b = u.onPostCommit;
                    typeof b == "function" && b(y, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                } catch (w) {
                    Ze(t, t.return, w)
                }
            } else
                Oa(e, t, a, i);
            break;
        case 13:
            Oa(e, t, a, i);
            break;
        case 23:
            break;
        case 22:
            u = t.stateNode,
            y = t.alternate,
            t.memoizedState !== null ? u._visibility & 2 ? Oa(e, t, a, i) : Ls(e, t) : u._visibility & 2 ? Oa(e, t, a, i) : (u._visibility |= 2,
            Rl(e, t, a, i, (t.subtreeFlags & 10256) !== 0)),
            r & 2048 && Au(y, t);
            break;
        case 24:
            Oa(e, t, a, i),
            r & 2048 && Nu(t.alternate, t);
            break;
        default:
            Oa(e, t, a, i)
        }
    }
    function Rl(e, t, a, i, r) {
        for (r = r && (t.subtreeFlags & 10256) !== 0,
        t = t.child; t !== null; ) {
            var u = e
              , y = t
              , b = a
              , w = i
              , z = y.flags;
            switch (y.tag) {
            case 0:
            case 11:
            case 15:
                Rl(u, y, b, w, r),
                Us(8, y);
                break;
            case 23:
                break;
            case 22:
                var K = y.stateNode;
                y.memoizedState !== null ? K._visibility & 2 ? Rl(u, y, b, w, r) : Ls(u, y) : (K._visibility |= 2,
                Rl(u, y, b, w, r)),
                r && z & 2048 && Au(y.alternate, y);
                break;
            case 24:
                Rl(u, y, b, w, r),
                r && z & 2048 && Nu(y.alternate, y);
                break;
            default:
                Rl(u, y, b, w, r)
            }
            t = t.sibling
        }
    }
    function Ls(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var a = e
                  , i = t
                  , r = i.flags;
                switch (i.tag) {
                case 22:
                    Ls(a, i),
                    r & 2048 && Au(i.alternate, i);
                    break;
                case 24:
                    Ls(a, i),
                    r & 2048 && Nu(i.alternate, i);
                    break;
                default:
                    Ls(a, i)
                }
                t = t.sibling
            }
    }
    var ks = 8192;
    function Vl(e) {
        if (e.subtreeFlags & ks)
            for (e = e.child; e !== null; )
                um(e),
                e = e.sibling
    }
    function um(e) {
        switch (e.tag) {
        case 26:
            Vl(e),
            e.flags & ks && e.memoizedState !== null && qv(Sa, e.memoizedState, e.memoizedProps);
            break;
        case 5:
            Vl(e);
            break;
        case 3:
        case 4:
            var t = Sa;
            Sa = No(e.stateNode.containerInfo),
            Vl(e),
            Sa = t;
            break;
        case 22:
            e.memoizedState === null && (t = e.alternate,
            t !== null && t.memoizedState !== null ? (t = ks,
            ks = 16777216,
            Vl(e),
            ks = t) : Vl(e));
            break;
        default:
            Vl(e)
        }
    }
    function cm(e) {
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
                    dm(i, e)
                }
            cm(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                fm(e),
                e = e.sibling
    }
    function fm(e) {
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Hs(e),
            e.flags & 2048 && yn(9, e, e.return);
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
            mo(e)) : Hs(e);
            break;
        default:
            Hs(e)
        }
    }
    function mo(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var i = t[a];
                    Tt = i,
                    dm(i, e)
                }
            cm(e)
        }
        for (e = e.child; e !== null; ) {
            switch (t = e,
            t.tag) {
            case 0:
            case 11:
            case 15:
                yn(8, t, t.return),
                mo(t);
                break;
            case 22:
                a = t.stateNode,
                a._visibility & 2 && (a._visibility &= -3,
                mo(t));
                break;
            default:
                mo(t)
            }
            e = e.sibling
        }
    }
    function dm(e, t) {
        for (; Tt !== null; ) {
            var a = Tt;
            switch (a.tag) {
            case 0:
            case 11:
            case 15:
                yn(8, a, t);
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
                      , u = i.return;
                    if (nm(i),
                    i === a) {
                        Tt = null;
                        break e
                    }
                    if (r !== null) {
                        r.return = u,
                        Tt = r;
                        break e
                    }
                    Tt = u
                }
        }
    }
    var lv = {
        getCacheForType: function(e) {
            var t = Rt(vt)
              , a = t.data.get(e);
            return a === void 0 && (a = e(),
            t.data.set(e, a)),
            a
        }
    }
      , sv = typeof WeakMap == "function" ? WeakMap : Map
      , qe = 0
      , Qe = null
      , Me = null
      , Ue = 0
      , Ye = 0
      , $t = null
      , bn = !1
      , zl = !1
      , Eu = !1
      , tn = 0
      , lt = 0
      , Sn = 0
      , Wn = 0
      , Cu = 0
      , fa = 0
      , Ul = 0
      , Ps = null
      , Gt = null
      , Du = !1
      , Mu = 0
      , po = 1 / 0
      , go = null
      , jn = null
      , Et = 0
      , Tn = null
      , Bl = null
      , Ll = 0
      , _u = 0
      , Ou = null
      , hm = null
      , qs = 0
      , Ru = null;
    function Wt() {
        if ((qe & 2) !== 0 && Ue !== 0)
            return Ue & -Ue;
        if (N.T !== null) {
            var e = Al;
            return e !== 0 ? e : Hu()
        }
        return ss()
    }
    function mm() {
        fa === 0 && (fa = (Ue & 536870912) === 0 || Pe ? sn() : 536870912);
        var e = ca.current;
        return e !== null && (e.flags |= 32),
        fa
    }
    function ea(e, t, a) {
        (e === Qe && (Ye === 2 || Ye === 9) || e.cancelPendingCommit !== null) && (kl(e, 0),
        wn(e, Ue, fa, !1)),
        ht(e, a),
        ((qe & 2) === 0 || e !== Qe) && (e === Qe && ((qe & 2) === 0 && (Wn |= a),
        lt === 4 && wn(e, Ue, fa, !1)),
        Ra(e))
    }
    function pm(e, t, a) {
        if ((qe & 6) !== 0)
            throw Error(o(327));
        var i = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || xa(e, t)
          , r = i ? rv(e, t) : Uu(e, t, !0)
          , u = i;
        do {
            if (r === 0) {
                zl && !i && wn(e, t, 0, !1);
                break
            } else {
                if (a = e.current.alternate,
                u && !iv(a)) {
                    r = Uu(e, t, !1),
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
                            r = Ps;
                            var w = b.current.memoizedState.isDehydrated;
                            if (w && (kl(b, y).flags |= 256),
                            y = Uu(b, y, !1),
                            y !== 2) {
                                if (Eu && !w) {
                                    b.errorRecoveryDisabledLanes |= u,
                                    Wn |= u,
                                    r = 4;
                                    break e
                                }
                                u = Gt,
                                Gt = r,
                                u !== null && (Gt === null ? Gt = u : Gt.push.apply(Gt, u))
                            }
                            r = y
                        }
                        if (u = !1,
                        r !== 2)
                            continue
                    }
                }
                if (r === 1) {
                    kl(e, 0),
                    wn(e, t, 0, !0);
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
                        wn(i, t, fa, !bn);
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
                    if ((t & 62914560) === t && (r = Mu + 300 - dt(),
                    10 < r)) {
                        if (wn(i, t, fa, !bn),
                        Ca(i, 0, !0) !== 0)
                            break e;
                        i.timeoutHandle = Gm(gm.bind(null, i, a, Gt, go, Du, t, fa, Wn, Ul, bn, u, 2, -0, 0), r);
                        break e
                    }
                    gm(i, a, Gt, go, Du, t, fa, Wn, Ul, bn, u, 0, -0, 0)
                }
            }
            break
        } while (!0);
        Ra(e)
    }
    function gm(e, t, a, i, r, u, y, b, w, z, K, I, k, q) {
        if (e.timeoutHandle = -1,
        I = t.subtreeFlags,
        (I & 8192 || (I & 16785408) === 16785408) && (Fs = {
            stylesheets: null,
            count: 0,
            unsuspend: Pv
        },
        um(t),
        I = Yv(),
        I !== null)) {
            e.cancelPendingCommit = I(Tm.bind(null, e, t, u, a, i, r, y, b, w, K, 1, k, q)),
            wn(e, u, y, !z);
            return
        }
        Tm(e, t, u, a, i, r, y, b, w)
    }
    function iv(e) {
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
                        if (!Qt(u(), r))
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
    function wn(e, t, a, i) {
        t &= ~Cu,
        t &= ~Wn,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        i && (e.warmLanes |= t),
        i = e.expirationTimes;
        for (var r = t; 0 < r; ) {
            var u = 31 - de(r)
              , y = 1 << u;
            i[u] = -1,
            r &= ~y
        }
        a !== 0 && ns(e, a, t)
    }
    function yo() {
        return (qe & 6) === 0 ? (Ys(0),
        !1) : !0
    }
    function Vu() {
        if (Me !== null) {
            if (Ye === 0)
                var e = Me.return;
            else
                e = Me,
                Za = Zn = null,
                Ir(e),
                _l = null,
                Rs = 0,
                e = Me;
            for (; e !== null; )
                Fh(e.alternate, e),
                e = e.return;
            Me = null
        }
    }
    function kl(e, t) {
        var a = e.timeoutHandle;
        a !== -1 && (e.timeoutHandle = -1,
        wv(a)),
        a = e.cancelPendingCommit,
        a !== null && (e.cancelPendingCommit = null,
        a()),
        Vu(),
        Qe = e,
        Me = a = Ga(e.current, null),
        Ue = t,
        Ye = 0,
        $t = null,
        bn = !1,
        zl = xa(e, t),
        Eu = !1,
        Ul = fa = Cu = Wn = Sn = lt = 0,
        Gt = Ps = null,
        Du = !1,
        (t & 8) !== 0 && (t |= t & 32);
        var i = e.entangledLanes;
        if (i !== 0)
            for (e = e.entanglements,
            i &= t; 0 < i; ) {
                var r = 31 - de(i)
                  , u = 1 << r;
                t |= e[r],
                i &= ~u
            }
        return tn = t,
        Li(),
        a
    }
    function ym(e, t) {
        Ce = null,
        N.H = no,
        t === ws || t === Zi ? (t = Vd(),
        Ye = 3) : t === _d ? (t = Vd(),
        Ye = 4) : Ye = t === zh ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
        $t = t,
        Me === null && (lt = 1,
        ro(e, ia(t, e.current)))
    }
    function xm() {
        var e = N.H;
        return N.H = no,
        e === null ? no : e
    }
    function vm() {
        var e = N.A;
        return N.A = lv,
        e
    }
    function zu() {
        lt = 4,
        bn || (Ue & 4194048) !== Ue && ca.current !== null || (zl = !0),
        (Sn & 134217727) === 0 && (Wn & 134217727) === 0 || Qe === null || wn(Qe, Ue, fa, !1)
    }
    function Uu(e, t, a) {
        var i = qe;
        qe |= 2;
        var r = xm()
          , u = vm();
        (Qe !== e || Ue !== t) && (go = null,
        kl(e, t)),
        t = !1;
        var y = lt;
        e: do
            try {
                if (Ye !== 0 && Me !== null) {
                    var b = Me
                      , w = $t;
                    switch (Ye) {
                    case 8:
                        Vu(),
                        y = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        ca.current === null && (t = !0);
                        var z = Ye;
                        if (Ye = 0,
                        $t = null,
                        Hl(e, b, w, z),
                        a && zl) {
                            y = 0;
                            break e
                        }
                        break;
                    default:
                        z = Ye,
                        Ye = 0,
                        $t = null,
                        Hl(e, b, w, z)
                    }
                }
                ov(),
                y = lt;
                break
            } catch (K) {
                ym(e, K)
            }
        while (!0);
        return t && e.shellSuspendCounter++,
        Za = Zn = null,
        qe = i,
        N.H = r,
        N.A = u,
        Me === null && (Qe = null,
        Ue = 0,
        Li()),
        y
    }
    function ov() {
        for (; Me !== null; )
            bm(Me)
    }
    function rv(e, t) {
        var a = qe;
        qe |= 2;
        var i = xm()
          , r = vm();
        Qe !== e || Ue !== t ? (go = null,
        po = dt() + 500,
        kl(e, t)) : zl = xa(e, t);
        e: do
            try {
                if (Ye !== 0 && Me !== null) {
                    t = Me;
                    var u = $t;
                    t: switch (Ye) {
                    case 1:
                        Ye = 0,
                        $t = null,
                        Hl(e, t, u, 1);
                        break;
                    case 2:
                    case 9:
                        if (Od(u)) {
                            Ye = 0,
                            $t = null,
                            Sm(t);
                            break
                        }
                        t = function() {
                            Ye !== 2 && Ye !== 9 || Qe !== e || (Ye = 7),
                            Ra(e)
                        }
                        ,
                        u.then(t, t);
                        break e;
                    case 3:
                        Ye = 7;
                        break e;
                    case 4:
                        Ye = 5;
                        break e;
                    case 7:
                        Od(u) ? (Ye = 0,
                        $t = null,
                        Sm(t)) : (Ye = 0,
                        $t = null,
                        Hl(e, t, u, 7));
                        break;
                    case 5:
                        var y = null;
                        switch (Me.tag) {
                        case 26:
                            y = Me.memoizedState;
                        case 5:
                        case 27:
                            var b = Me;
                            if (!y || ap(y)) {
                                Ye = 0,
                                $t = null;
                                var w = b.sibling;
                                if (w !== null)
                                    Me = w;
                                else {
                                    var z = b.return;
                                    z !== null ? (Me = z,
                                    xo(z)) : Me = null
                                }
                                break t
                            }
                        }
                        Ye = 0,
                        $t = null,
                        Hl(e, t, u, 5);
                        break;
                    case 6:
                        Ye = 0,
                        $t = null,
                        Hl(e, t, u, 6);
                        break;
                    case 8:
                        Vu(),
                        lt = 6;
                        break e;
                    default:
                        throw Error(o(462))
                    }
                }
                uv();
                break
            } catch (K) {
                ym(e, K)
            }
        while (!0);
        return Za = Zn = null,
        N.H = i,
        N.A = r,
        qe = a,
        Me !== null ? 0 : (Qe = null,
        Ue = 0,
        Li(),
        lt)
    }
    function uv() {
        for (; Me !== null && !Kt(); )
            bm(Me)
    }
    function bm(e) {
        var t = Zh(e.alternate, e, tn);
        e.memoizedProps = e.pendingProps,
        t === null ? xo(e) : Me = t
    }
    function Sm(e) {
        var t = e
          , a = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = Ph(a, t, t.pendingProps, t.type, void 0, Ue);
            break;
        case 11:
            t = Ph(a, t, t.pendingProps, t.type.render, t.ref, Ue);
            break;
        case 5:
            Ir(t);
        default:
            Fh(a, t),
            t = Me = jd(t, tn),
            t = Zh(a, t, tn)
        }
        e.memoizedProps = e.pendingProps,
        t === null ? xo(e) : Me = t
    }
    function Hl(e, t, a, i) {
        Za = Zn = null,
        Ir(t),
        _l = null,
        Rs = 0;
        var r = t.return;
        try {
            if ($x(e, r, t, a, Ue)) {
                lt = 1,
                ro(e, ia(a, e.current)),
                Me = null;
                return
            }
        } catch (u) {
            if (r !== null)
                throw Me = r,
                u;
            lt = 1,
            ro(e, ia(a, e.current)),
            Me = null;
            return
        }
        t.flags & 32768 ? (Pe || i === 1 ? e = !0 : zl || (Ue & 536870912) !== 0 ? e = !1 : (bn = e = !0,
        (i === 2 || i === 9 || i === 3 || i === 6) && (i = ca.current,
        i !== null && i.tag === 13 && (i.flags |= 16384))),
        jm(t, e)) : xo(t)
    }
    function xo(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                jm(t, bn);
                return
            }
            e = t.return;
            var a = ev(t.alternate, t, tn);
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
        lt === 0 && (lt = 5)
    }
    function jm(e, t) {
        do {
            var a = tv(e.alternate, e);
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
        lt = 6,
        Me = null
    }
    function Tm(e, t, a, i, r, u, y, b, w) {
        e.cancelPendingCommit = null;
        do
            vo();
        while (Et !== 0);
        if ((qe & 6) !== 0)
            throw Error(o(327));
        if (t !== null) {
            if (t === e.current)
                throw Error(o(177));
            if (u = t.lanes | t.childLanes,
            u |= Nr,
            Ht(e, a, u, y, b, w),
            e === Qe && (Me = Qe = null,
            Ue = 0),
            Bl = t,
            Tn = e,
            Ll = a,
            _u = u,
            Ou = r,
            hm = i,
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null,
            e.callbackPriority = 0,
            hv(ta, function() {
                return Cm(),
                null
            })) : (e.callbackNode = null,
            e.callbackPriority = 0),
            i = (t.flags & 13878) !== 0,
            (t.subtreeFlags & 13878) !== 0 || i) {
                i = N.T,
                N.T = null,
                r = O.p,
                O.p = 2,
                y = qe,
                qe |= 4;
                try {
                    av(e, t, a)
                } finally {
                    qe = y,
                    O.p = r,
                    N.T = i
                }
            }
            Et = 1,
            wm(),
            Am(),
            Nm()
        }
    }
    function wm() {
        if (Et === 1) {
            Et = 0;
            var e = Tn
              , t = Bl
              , a = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || a) {
                a = N.T,
                N.T = null;
                var i = O.p;
                O.p = 2;
                var r = qe;
                qe |= 4;
                try {
                    im(t, e);
                    var u = Qu
                      , y = dd(e.containerInfo)
                      , b = u.focusedElem
                      , w = u.selectionRange;
                    if (y !== b && b && b.ownerDocument && fd(b.ownerDocument.documentElement, b)) {
                        if (w !== null && Sr(b)) {
                            var z = w.start
                              , K = w.end;
                            if (K === void 0 && (K = z),
                            "selectionStart"in b)
                                b.selectionStart = z,
                                b.selectionEnd = Math.min(K, b.value.length);
                            else {
                                var I = b.ownerDocument || document
                                  , k = I && I.defaultView || window;
                                if (k.getSelection) {
                                    var q = k.getSelection()
                                      , Se = b.textContent.length
                                      , xe = Math.min(w.start, Se)
                                      , Ke = w.end === void 0 ? xe : Math.min(w.end, Se);
                                    !q.extend && xe > Ke && (y = Ke,
                                    Ke = xe,
                                    xe = y);
                                    var C = cd(b, xe)
                                      , E = cd(b, Ke);
                                    if (C && E && (q.rangeCount !== 1 || q.anchorNode !== C.node || q.anchorOffset !== C.offset || q.focusNode !== E.node || q.focusOffset !== E.offset)) {
                                        var R = I.createRange();
                                        R.setStart(C.node, C.offset),
                                        q.removeAllRanges(),
                                        xe > Ke ? (q.addRange(R),
                                        q.extend(E.node, E.offset)) : (R.setEnd(E.node, E.offset),
                                        q.addRange(R))
                                    }
                                }
                            }
                        }
                        for (I = [],
                        q = b; q = q.parentNode; )
                            q.nodeType === 1 && I.push({
                                element: q,
                                left: q.scrollLeft,
                                top: q.scrollTop
                            });
                        for (typeof b.focus == "function" && b.focus(),
                        b = 0; b < I.length; b++) {
                            var F = I[b];
                            F.element.scrollLeft = F.left,
                            F.element.scrollTop = F.top
                        }
                    }
                    _o = !!Zu,
                    Qu = Zu = null
                } finally {
                    qe = r,
                    O.p = i,
                    N.T = a
                }
            }
            e.current = t,
            Et = 2
        }
    }
    function Am() {
        if (Et === 2) {
            Et = 0;
            var e = Tn
              , t = Bl
              , a = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || a) {
                a = N.T,
                N.T = null;
                var i = O.p;
                O.p = 2;
                var r = qe;
                qe |= 4;
                try {
                    am(e, t.alternate, t)
                } finally {
                    qe = r,
                    O.p = i,
                    N.T = a
                }
            }
            Et = 3
        }
    }
    function Nm() {
        if (Et === 4 || Et === 3) {
            Et = 0,
            wa();
            var e = Tn
              , t = Bl
              , a = Ll
              , i = hm;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Et = 5 : (Et = 0,
            Bl = Tn = null,
            Em(e, e.pendingLanes));
            var r = e.pendingLanes;
            if (r === 0 && (jn = null),
            ul(a),
            t = t.stateNode,
            $e && typeof $e.onCommitFiberRoot == "function")
                try {
                    $e.onCommitFiberRoot(_t, t, void 0, (t.current.flags & 128) === 128)
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
            (Ll & 3) !== 0 && vo(),
            Ra(e),
            r = e.pendingLanes,
            (a & 4194090) !== 0 && (r & 42) !== 0 ? e === Ru ? qs++ : (qs = 0,
            Ru = e) : qs = 0,
            Ys(0)
        }
    }
    function Em(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache,
        t != null && (e.pooledCache = null,
        js(t)))
    }
    function vo(e) {
        return wm(),
        Am(),
        Nm(),
        Cm()
    }
    function Cm() {
        if (Et !== 5)
            return !1;
        var e = Tn
          , t = _u;
        _u = 0;
        var a = ul(Ll)
          , i = N.T
          , r = O.p;
        try {
            O.p = 32 > a ? 32 : a,
            N.T = null,
            a = Ou,
            Ou = null;
            var u = Tn
              , y = Ll;
            if (Et = 0,
            Bl = Tn = null,
            Ll = 0,
            (qe & 6) !== 0)
                throw Error(o(331));
            var b = qe;
            if (qe |= 4,
            fm(u.current),
            rm(u, u.current, y, a),
            qe = b,
            Ys(0, !1),
            $e && typeof $e.onPostCommitFiberRoot == "function")
                try {
                    $e.onPostCommitFiberRoot(_t, u)
                } catch {}
            return !0
        } finally {
            O.p = r,
            N.T = i,
            Em(e, t)
        }
    }
    function Dm(e, t, a) {
        t = ia(a, t),
        t = fu(e.stateNode, t, 2),
        e = hn(e, t, 2),
        e !== null && (ht(e, 2),
        Ra(e))
    }
    function Ze(e, t, a) {
        if (e.tag === 3)
            Dm(e, e, a);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    Dm(t, e, a);
                    break
                } else if (t.tag === 1) {
                    var i = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (jn === null || !jn.has(i))) {
                        e = ia(a, e),
                        a = Rh(2),
                        i = hn(t, a, 2),
                        i !== null && (Vh(a, i, t, e),
                        ht(i, 2),
                        Ra(i));
                        break
                    }
                }
                t = t.return
            }
    }
    function Bu(e, t, a) {
        var i = e.pingCache;
        if (i === null) {
            i = e.pingCache = new sv;
            var r = new Set;
            i.set(t, r)
        } else
            r = i.get(t),
            r === void 0 && (r = new Set,
            i.set(t, r));
        r.has(a) || (Eu = !0,
        r.add(a),
        e = cv.bind(null, e, t, a),
        t.then(e, e))
    }
    function cv(e, t, a) {
        var i = e.pingCache;
        i !== null && i.delete(t),
        e.pingedLanes |= e.suspendedLanes & a,
        e.warmLanes &= ~a,
        Qe === e && (Ue & a) === a && (lt === 4 || lt === 3 && (Ue & 62914560) === Ue && 300 > dt() - Mu ? (qe & 2) === 0 && kl(e, 0) : Cu |= a,
        Ul === Ue && (Ul = 0)),
        Ra(e)
    }
    function Mm(e, t) {
        t === 0 && (t = ne()),
        e = Sl(e, t),
        e !== null && (ht(e, t),
        Ra(e))
    }
    function fv(e) {
        var t = e.memoizedState
          , a = 0;
        t !== null && (a = t.retryLane),
        Mm(e, a)
    }
    function dv(e, t) {
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
    function hv(e, t) {
        return Ut(e, t)
    }
    var bo = null
      , Pl = null
      , Lu = !1
      , So = !1
      , ku = !1
      , el = 0;
    function Ra(e) {
        e !== Pl && e.next === null && (Pl === null ? bo = Pl = e : Pl = Pl.next = e),
        So = !0,
        Lu || (Lu = !0,
        pv())
    }
    function Ys(e, t) {
        if (!ku && So) {
            ku = !0;
            do
                for (var a = !1, i = bo; i !== null; ) {
                    if (e !== 0) {
                        var r = i.pendingLanes;
                        if (r === 0)
                            var u = 0;
                        else {
                            var y = i.suspendedLanes
                              , b = i.pingedLanes;
                            u = (1 << 31 - de(42 | e) + 1) - 1,
                            u &= r & ~(y & ~b),
                            u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
                        }
                        u !== 0 && (a = !0,
                        Vm(i, u))
                    } else
                        u = Ue,
                        u = Ca(i, i === Qe ? u : 0, i.cancelPendingCommit !== null || i.timeoutHandle !== -1),
                        (u & 3) === 0 || xa(i, u) || (a = !0,
                        Vm(i, u));
                    i = i.next
                }
            while (a);
            ku = !1
        }
    }
    function mv() {
        _m()
    }
    function _m() {
        So = Lu = !1;
        var e = 0;
        el !== 0 && (Tv() && (e = el),
        el = 0);
        for (var t = dt(), a = null, i = bo; i !== null; ) {
            var r = i.next
              , u = Om(i, t);
            u === 0 ? (i.next = null,
            a === null ? bo = r : a.next = r,
            r === null && (Pl = a)) : (a = i,
            (e !== 0 || (u & 3) !== 0) && (So = !0)),
            i = r
        }
        Ys(e)
    }
    function Om(e, t) {
        for (var a = e.suspendedLanes, i = e.pingedLanes, r = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
            var y = 31 - de(u)
              , b = 1 << y
              , w = r[y];
            w === -1 ? ((b & a) === 0 || (b & i) !== 0) && (r[y] = Bn(b, t)) : w <= t && (e.expiredLanes |= b),
            u &= ~b
        }
        if (t = Qe,
        a = Ue,
        a = Ca(e, e === t ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        i = e.callbackNode,
        a === 0 || e === t && (Ye === 2 || Ye === 9) || e.cancelPendingCommit !== null)
            return i !== null && i !== null && St(i),
            e.callbackNode = null,
            e.callbackPriority = 0;
        if ((a & 3) === 0 || xa(e, a)) {
            if (t = a & -a,
            t === e.callbackPriority)
                return t;
            switch (i !== null && St(i),
            ul(a)) {
            case 2:
            case 8:
                a = Na;
                break;
            case 32:
                a = ta;
                break;
            case 268435456:
                a = Ea;
                break;
            default:
                a = ta
            }
            return i = Rm.bind(null, e),
            a = Ut(a, i),
            e.callbackPriority = t,
            e.callbackNode = a,
            t
        }
        return i !== null && i !== null && St(i),
        e.callbackPriority = 2,
        e.callbackNode = null,
        2
    }
    function Rm(e, t) {
        if (Et !== 0 && Et !== 5)
            return e.callbackNode = null,
            e.callbackPriority = 0,
            null;
        var a = e.callbackNode;
        if (vo() && e.callbackNode !== a)
            return null;
        var i = Ue;
        return i = Ca(e, e === Qe ? i : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        i === 0 ? null : (pm(e, i, t),
        Om(e, dt()),
        e.callbackNode != null && e.callbackNode === a ? Rm.bind(null, e) : null)
    }
    function Vm(e, t) {
        if (vo())
            return null;
        pm(e, t, !0)
    }
    function pv() {
        Av(function() {
            (qe & 6) !== 0 ? Ut(ya, mv) : _m()
        })
    }
    function Hu() {
        return el === 0 && (el = sn()),
        el
    }
    function zm(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : _i("" + e)
    }
    function Um(e, t) {
        var a = t.ownerDocument.createElement("input");
        return a.name = t.name,
        a.value = t.value,
        e.id && a.setAttribute("form", e.id),
        t.parentNode.insertBefore(a, t),
        e = new FormData(e),
        a.parentNode.removeChild(a),
        e
    }
    function gv(e, t, a, i, r) {
        if (t === "submit" && a && a.stateNode === r) {
            var u = zm((r[At] || null).action)
              , y = i.submitter;
            y && (t = (t = y[At] || null) ? zm(t.formAction) : y.getAttribute("formAction"),
            t !== null && (u = t,
            y = null));
            var b = new zi("action","action",null,i,r);
            e.push({
                event: b,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (i.defaultPrevented) {
                            if (el !== 0) {
                                var w = y ? Um(r, y) : new FormData(r);
                                iu(a, {
                                    pending: !0,
                                    data: w,
                                    method: r.method,
                                    action: u
                                }, null, w)
                            }
                        } else
                            typeof u == "function" && (b.preventDefault(),
                            w = y ? Um(r, y) : new FormData(r),
                            iu(a, {
                                pending: !0,
                                data: w,
                                method: r.method,
                                action: u
                            }, u, w))
                    },
                    currentTarget: r
                }]
            })
        }
    }
    for (var Pu = 0; Pu < Ar.length; Pu++) {
        var qu = Ar[Pu]
          , yv = qu.toLowerCase()
          , xv = qu[0].toUpperCase() + qu.slice(1);
        ba(yv, "on" + xv)
    }
    ba(pd, "onAnimationEnd"),
    ba(gd, "onAnimationIteration"),
    ba(yd, "onAnimationStart"),
    ba("dblclick", "onDoubleClick"),
    ba("focusin", "onFocus"),
    ba("focusout", "onBlur"),
    ba(zx, "onTransitionRun"),
    ba(Ux, "onTransitionStart"),
    ba(Bx, "onTransitionCancel"),
    ba(xd, "onTransitionEnd"),
    Le("onMouseEnter", ["mouseout", "mouseover"]),
    Le("onMouseLeave", ["mouseout", "mouseover"]),
    Le("onPointerEnter", ["pointerout", "pointerover"]),
    Le("onPointerLeave", ["pointerout", "pointerover"]),
    Ae("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Ae("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Ae("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ae("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Ae("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Ae("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Gs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , vv = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Gs));
    function Bm(e, t) {
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
                          , w = b.instance
                          , z = b.currentTarget;
                        if (b = b.listener,
                        w !== u && r.isPropagationStopped())
                            break e;
                        u = b,
                        r.currentTarget = z;
                        try {
                            u(r)
                        } catch (K) {
                            oo(K)
                        }
                        r.currentTarget = null,
                        u = w
                    }
                else
                    for (y = 0; y < i.length; y++) {
                        if (b = i[y],
                        w = b.instance,
                        z = b.currentTarget,
                        b = b.listener,
                        w !== u && r.isPropagationStopped())
                            break e;
                        u = b,
                        r.currentTarget = z;
                        try {
                            u(r)
                        } catch (K) {
                            oo(K)
                        }
                        r.currentTarget = null,
                        u = w
                    }
            }
        }
    }
    function _e(e, t) {
        var a = t[cl];
        a === void 0 && (a = t[cl] = new Set);
        var i = e + "__bubble";
        a.has(i) || (Lm(t, e, 2, !1),
        a.add(i))
    }
    function Yu(e, t, a) {
        var i = 0;
        t && (i |= 4),
        Lm(a, e, i, t)
    }
    var jo = "_reactListening" + Math.random().toString(36).slice(2);
    function Gu(e) {
        if (!e[jo]) {
            e[jo] = !0,
            fe.forEach(function(a) {
                a !== "selectionchange" && (vv.has(a) || Yu(a, !1, e),
                Yu(a, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[jo] || (t[jo] = !0,
            Yu("selectionchange", !1, t))
        }
    }
    function Lm(e, t, a, i) {
        switch (rp(t)) {
        case 2:
            var r = Kv;
            break;
        case 8:
            r = Zv;
            break;
        default:
            r = lc
        }
        a = r.bind(null, t, a, e),
        r = void 0,
        !dr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (r = !0),
        i ? r !== void 0 ? e.addEventListener(t, a, {
            capture: !0,
            passive: r
        }) : e.addEventListener(t, a, !0) : r !== void 0 ? e.addEventListener(t, a, {
            passive: r
        }) : e.addEventListener(t, a, !1)
    }
    function Xu(e, t, a, i, r) {
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
                            var w = y.tag;
                            if ((w === 3 || w === 4) && y.stateNode.containerInfo === r)
                                return;
                            y = y.return
                        }
                    for (; b !== null; ) {
                        if (y = Ha(b),
                        y === null)
                            return;
                        if (w = y.tag,
                        w === 5 || w === 6 || w === 26 || w === 27) {
                            i = u = y;
                            continue e
                        }
                        b = b.parentNode
                    }
                }
                i = i.return
            }
        Xf(function() {
            var z = u
              , K = cr(a)
              , I = [];
            e: {
                var k = vd.get(e);
                if (k !== void 0) {
                    var q = zi
                      , Se = e;
                    switch (e) {
                    case "keypress":
                        if (Ri(a) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        q = hx;
                        break;
                    case "focusin":
                        Se = "focus",
                        q = gr;
                        break;
                    case "focusout":
                        Se = "blur",
                        q = gr;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        q = gr;
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
                        q = Qf;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        q = tx;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        q = gx;
                        break;
                    case pd:
                    case gd:
                    case yd:
                        q = lx;
                        break;
                    case xd:
                        q = xx;
                        break;
                    case "scroll":
                    case "scrollend":
                        q = Wy;
                        break;
                    case "wheel":
                        q = bx;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        q = ix;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        q = Jf;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        q = jx
                    }
                    var xe = (t & 4) !== 0
                      , Ke = !xe && (e === "scroll" || e === "scrollend")
                      , C = xe ? k !== null ? k + "Capture" : null : k;
                    xe = [];
                    for (var E = z, R; E !== null; ) {
                        var F = E;
                        if (R = F.stateNode,
                        F = F.tag,
                        F !== 5 && F !== 26 && F !== 27 || R === null || C === null || (F = us(E, C),
                        F != null && xe.push(Xs(E, F, R))),
                        Ke)
                            break;
                        E = E.return
                    }
                    0 < xe.length && (k = new q(k,Se,null,a,K),
                    I.push({
                        event: k,
                        listeners: xe
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (k = e === "mouseover" || e === "pointerover",
                    q = e === "mouseout" || e === "pointerout",
                    k && a !== ur && (Se = a.relatedTarget || a.fromElement) && (Ha(Se) || Se[ka]))
                        break e;
                    if ((q || k) && (k = K.window === K ? K : (k = K.ownerDocument) ? k.defaultView || k.parentWindow : window,
                    q ? (Se = a.relatedTarget || a.toElement,
                    q = z,
                    Se = Se ? Ha(Se) : null,
                    Se !== null && (Ke = h(Se),
                    xe = Se.tag,
                    Se !== Ke || xe !== 5 && xe !== 27 && xe !== 6) && (Se = null)) : (q = null,
                    Se = z),
                    q !== Se)) {
                        if (xe = Qf,
                        F = "onMouseLeave",
                        C = "onMouseEnter",
                        E = "mouse",
                        (e === "pointerout" || e === "pointerover") && (xe = Jf,
                        F = "onPointerLeave",
                        C = "onPointerEnter",
                        E = "pointer"),
                        Ke = q == null ? k : rn(q),
                        R = Se == null ? k : rn(Se),
                        k = new xe(F,E + "leave",q,a,K),
                        k.target = Ke,
                        k.relatedTarget = R,
                        F = null,
                        Ha(K) === z && (xe = new xe(C,E + "enter",Se,a,K),
                        xe.target = R,
                        xe.relatedTarget = Ke,
                        F = xe),
                        Ke = F,
                        q && Se)
                            t: {
                                for (xe = q,
                                C = Se,
                                E = 0,
                                R = xe; R; R = ql(R))
                                    E++;
                                for (R = 0,
                                F = C; F; F = ql(F))
                                    R++;
                                for (; 0 < E - R; )
                                    xe = ql(xe),
                                    E--;
                                for (; 0 < R - E; )
                                    C = ql(C),
                                    R--;
                                for (; E--; ) {
                                    if (xe === C || C !== null && xe === C.alternate)
                                        break t;
                                    xe = ql(xe),
                                    C = ql(C)
                                }
                                xe = null
                            }
                        else
                            xe = null;
                        q !== null && km(I, k, q, xe, !1),
                        Se !== null && Ke !== null && km(I, Ke, Se, xe, !0)
                    }
                }
                e: {
                    if (k = z ? rn(z) : window,
                    q = k.nodeName && k.nodeName.toLowerCase(),
                    q === "select" || q === "input" && k.type === "file")
                        var re = ld;
                    else if (ad(k))
                        if (sd)
                            re = Ox;
                        else {
                            re = Mx;
                            var De = Dx
                        }
                    else
                        q = k.nodeName,
                        !q || q.toLowerCase() !== "input" || k.type !== "checkbox" && k.type !== "radio" ? z && rr(z.elementType) && (re = ld) : re = _x;
                    if (re && (re = re(e, z))) {
                        nd(I, re, a, K);
                        break e
                    }
                    De && De(e, k, z),
                    e === "focusout" && z && k.type === "number" && z.memoizedProps.value != null && or(k, "number", k.value)
                }
                switch (De = z ? rn(z) : window,
                e) {
                case "focusin":
                    (ad(De) || De.contentEditable === "true") && (xl = De,
                    jr = z,
                    ys = null);
                    break;
                case "focusout":
                    ys = jr = xl = null;
                    break;
                case "mousedown":
                    Tr = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Tr = !1,
                    hd(I, a, K);
                    break;
                case "selectionchange":
                    if (Vx)
                        break;
                case "keydown":
                case "keyup":
                    hd(I, a, K)
                }
                var pe;
                if (xr)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var be = "onCompositionStart";
                            break e;
                        case "compositionend":
                            be = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            be = "onCompositionUpdate";
                            break e
                        }
                        be = void 0
                    }
                else
                    yl ? ed(e, a) && (be = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (be = "onCompositionStart");
                be && (If && a.locale !== "ko" && (yl || be !== "onCompositionStart" ? be === "onCompositionEnd" && yl && (pe = Kf()) : (un = K,
                hr = "value"in un ? un.value : un.textContent,
                yl = !0)),
                De = To(z, be),
                0 < De.length && (be = new Ff(be,e,null,a,K),
                I.push({
                    event: be,
                    listeners: De
                }),
                pe ? be.data = pe : (pe = td(a),
                pe !== null && (be.data = pe)))),
                (pe = wx ? Ax(e, a) : Nx(e, a)) && (be = To(z, "onBeforeInput"),
                0 < be.length && (De = new Ff("onBeforeInput","beforeinput",null,a,K),
                I.push({
                    event: De,
                    listeners: be
                }),
                De.data = pe)),
                gv(I, e, z, a, K)
            }
            Bm(I, t)
        })
    }
    function Xs(e, t, a) {
        return {
            instance: e,
            listener: t,
            currentTarget: a
        }
    }
    function To(e, t) {
        for (var a = t + "Capture", i = []; e !== null; ) {
            var r = e
              , u = r.stateNode;
            if (r = r.tag,
            r !== 5 && r !== 26 && r !== 27 || u === null || (r = us(e, a),
            r != null && i.unshift(Xs(e, r, u)),
            r = us(e, t),
            r != null && i.push(Xs(e, r, u))),
            e.tag === 3)
                return i;
            e = e.return
        }
        return []
    }
    function ql(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }
    function km(e, t, a, i, r) {
        for (var u = t._reactName, y = []; a !== null && a !== i; ) {
            var b = a
              , w = b.alternate
              , z = b.stateNode;
            if (b = b.tag,
            w !== null && w === i)
                break;
            b !== 5 && b !== 26 && b !== 27 || z === null || (w = z,
            r ? (z = us(a, u),
            z != null && y.unshift(Xs(a, z, w))) : r || (z = us(a, u),
            z != null && y.push(Xs(a, z, w)))),
            a = a.return
        }
        y.length !== 0 && e.push({
            event: t,
            listeners: y
        })
    }
    var bv = /\r\n?/g
      , Sv = /\u0000|\uFFFD/g;
    function Hm(e) {
        return (typeof e == "string" ? e : "" + e).replace(bv, `
`).replace(Sv, "")
    }
    function Pm(e, t) {
        return t = Hm(t),
        Hm(e) === t
    }
    function wo() {}
    function Xe(e, t, a, i, r, u) {
        switch (a) {
        case "children":
            typeof i == "string" ? t === "body" || t === "textarea" && i === "" || ml(e, i) : (typeof i == "number" || typeof i == "bigint") && t !== "body" && ml(e, "" + i);
            break;
        case "className":
            Ln(e, "class", i);
            break;
        case "tabIndex":
            Ln(e, "tabindex", i);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            Ln(e, a, i);
            break;
        case "style":
            Yf(e, i, u);
            break;
        case "data":
            if (t !== "object") {
                Ln(e, "data", i);
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
            i = _i("" + i),
            e.setAttribute(a, i);
            break;
        case "action":
        case "formAction":
            if (typeof i == "function") {
                e.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof u == "function" && (a === "formAction" ? (t !== "input" && Xe(e, t, "name", r.name, r, null),
                Xe(e, t, "formEncType", r.formEncType, r, null),
                Xe(e, t, "formMethod", r.formMethod, r, null),
                Xe(e, t, "formTarget", r.formTarget, r, null)) : (Xe(e, t, "encType", r.encType, r, null),
                Xe(e, t, "method", r.method, r, null),
                Xe(e, t, "target", r.target, r, null)));
            if (i == null || typeof i == "symbol" || typeof i == "boolean") {
                e.removeAttribute(a);
                break
            }
            i = _i("" + i),
            e.setAttribute(a, i);
            break;
        case "onClick":
            i != null && (e.onclick = wo);
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
            a = _i("" + i),
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
            Zt(e, "popover", i);
            break;
        case "xlinkActuate":
            na(e, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
            break;
        case "xlinkArcrole":
            na(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
            break;
        case "xlinkRole":
            na(e, "http://www.w3.org/1999/xlink", "xlink:role", i);
            break;
        case "xlinkShow":
            na(e, "http://www.w3.org/1999/xlink", "xlink:show", i);
            break;
        case "xlinkTitle":
            na(e, "http://www.w3.org/1999/xlink", "xlink:title", i);
            break;
        case "xlinkType":
            na(e, "http://www.w3.org/1999/xlink", "xlink:type", i);
            break;
        case "xmlBase":
            na(e, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
            break;
        case "xmlLang":
            na(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
            break;
        case "xmlSpace":
            na(e, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
            break;
        case "is":
            Zt(e, "is", i);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Iy.get(a) || a,
            Zt(e, a, i))
        }
    }
    function Ku(e, t, a, i, r, u) {
        switch (a) {
        case "style":
            Yf(e, i, u);
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
            typeof i == "string" ? ml(e, i) : (typeof i == "number" || typeof i == "bigint") && ml(e, "" + i);
            break;
        case "onScroll":
            i != null && _e("scroll", e);
            break;
        case "onScrollEnd":
            i != null && _e("scrollend", e);
            break;
        case "onClick":
            i != null && (e.onclick = wo);
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
            if (!Re.hasOwnProperty(a))
                e: {
                    if (a[0] === "o" && a[1] === "n" && (r = a.endsWith("Capture"),
                    t = a.slice(2, r ? a.length - 7 : void 0),
                    u = e[At] || null,
                    u = u != null ? u[a] : null,
                    typeof u == "function" && e.removeEventListener(t, u, r),
                    typeof i == "function")) {
                        typeof u != "function" && u !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)),
                        e.addEventListener(t, i, r);
                        break e
                    }
                    a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : Zt(e, a, i)
                }
        }
    }
    function Ct(e, t, a) {
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
                            Xe(e, t, u, y, a, null)
                        }
                }
            r && Xe(e, t, "srcSet", a.srcSet, a, null),
            i && Xe(e, t, "src", a.src, a, null);
            return;
        case "input":
            _e("invalid", e);
            var b = u = y = r = null
              , w = null
              , z = null;
            for (i in a)
                if (a.hasOwnProperty(i)) {
                    var K = a[i];
                    if (K != null)
                        switch (i) {
                        case "name":
                            r = K;
                            break;
                        case "type":
                            y = K;
                            break;
                        case "checked":
                            w = K;
                            break;
                        case "defaultChecked":
                            z = K;
                            break;
                        case "value":
                            u = K;
                            break;
                        case "defaultValue":
                            b = K;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (K != null)
                                throw Error(o(137, t));
                            break;
                        default:
                            Xe(e, t, i, K, a, null)
                        }
                }
            kf(e, u, b, w, z, y, r, !1),
            Di(e);
            return;
        case "select":
            _e("invalid", e),
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
                        Xe(e, t, r, b, a, null)
                    }
            t = u,
            a = y,
            e.multiple = !!i,
            t != null ? hl(e, !!i, t, !1) : a != null && hl(e, !!i, a, !0);
            return;
        case "textarea":
            _e("invalid", e),
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
                        Xe(e, t, y, b, a, null)
                    }
            Pf(e, i, r, u),
            Di(e);
            return;
        case "option":
            for (w in a)
                if (a.hasOwnProperty(w) && (i = a[w],
                i != null))
                    switch (w) {
                    case "selected":
                        e.selected = i && typeof i != "function" && typeof i != "symbol";
                        break;
                    default:
                        Xe(e, t, w, i, a, null)
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
            for (i = 0; i < Gs.length; i++)
                _e(Gs[i], e);
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
            for (z in a)
                if (a.hasOwnProperty(z) && (i = a[z],
                i != null))
                    switch (z) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(o(137, t));
                    default:
                        Xe(e, t, z, i, a, null)
                    }
            return;
        default:
            if (rr(t)) {
                for (K in a)
                    a.hasOwnProperty(K) && (i = a[K],
                    i !== void 0 && Ku(e, t, K, i, a, void 0));
                return
            }
        }
        for (b in a)
            a.hasOwnProperty(b) && (i = a[b],
            i != null && Xe(e, t, b, i, a, null))
    }
    function jv(e, t, a, i) {
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
              , w = null
              , z = null
              , K = null;
            for (q in a) {
                var I = a[q];
                if (a.hasOwnProperty(q) && I != null)
                    switch (q) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        w = I;
                    default:
                        i.hasOwnProperty(q) || Xe(e, t, q, null, i, I)
                    }
            }
            for (var k in i) {
                var q = i[k];
                if (I = a[k],
                i.hasOwnProperty(k) && (q != null || I != null))
                    switch (k) {
                    case "type":
                        u = q;
                        break;
                    case "name":
                        r = q;
                        break;
                    case "checked":
                        z = q;
                        break;
                    case "defaultChecked":
                        K = q;
                        break;
                    case "value":
                        y = q;
                        break;
                    case "defaultValue":
                        b = q;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (q != null)
                            throw Error(o(137, t));
                        break;
                    default:
                        q !== I && Xe(e, t, k, q, i, I)
                    }
            }
            ir(e, y, b, w, z, K, u, r);
            return;
        case "select":
            q = y = b = k = null;
            for (u in a)
                if (w = a[u],
                a.hasOwnProperty(u) && w != null)
                    switch (u) {
                    case "value":
                        break;
                    case "multiple":
                        q = w;
                    default:
                        i.hasOwnProperty(u) || Xe(e, t, u, null, i, w)
                    }
            for (r in i)
                if (u = i[r],
                w = a[r],
                i.hasOwnProperty(r) && (u != null || w != null))
                    switch (r) {
                    case "value":
                        k = u;
                        break;
                    case "defaultValue":
                        b = u;
                        break;
                    case "multiple":
                        y = u;
                    default:
                        u !== w && Xe(e, t, r, u, i, w)
                    }
            t = b,
            a = y,
            i = q,
            k != null ? hl(e, !!a, k, !1) : !!i != !!a && (t != null ? hl(e, !!a, t, !0) : hl(e, !!a, a ? [] : "", !1));
            return;
        case "textarea":
            q = k = null;
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
                u = a[y],
                i.hasOwnProperty(y) && (r != null || u != null))
                    switch (y) {
                    case "value":
                        k = r;
                        break;
                    case "defaultValue":
                        q = r;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (r != null)
                            throw Error(o(91));
                        break;
                    default:
                        r !== u && Xe(e, t, y, r, i, u)
                    }
            Hf(e, k, q);
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
            for (w in i)
                if (k = i[w],
                q = a[w],
                i.hasOwnProperty(w) && k !== q && (k != null || q != null))
                    switch (w) {
                    case "selected":
                        e.selected = k && typeof k != "function" && typeof k != "symbol";
                        break;
                    default:
                        Xe(e, t, w, k, i, q)
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
            for (z in i)
                if (k = i[z],
                q = a[z],
                i.hasOwnProperty(z) && k !== q && (k != null || q != null))
                    switch (z) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (k != null)
                            throw Error(o(137, t));
                        break;
                    default:
                        Xe(e, t, z, k, i, q)
                    }
            return;
        default:
            if (rr(t)) {
                for (var Ke in a)
                    k = a[Ke],
                    a.hasOwnProperty(Ke) && k !== void 0 && !i.hasOwnProperty(Ke) && Ku(e, t, Ke, void 0, i, k);
                for (K in i)
                    k = i[K],
                    q = a[K],
                    !i.hasOwnProperty(K) || k === q || k === void 0 && q === void 0 || Ku(e, t, K, k, i, q);
                return
            }
        }
        for (var C in a)
            k = a[C],
            a.hasOwnProperty(C) && k != null && !i.hasOwnProperty(C) && Xe(e, t, C, null, i, k);
        for (I in i)
            k = i[I],
            q = a[I],
            !i.hasOwnProperty(I) || k === q || k == null && q == null || Xe(e, t, I, k, i, q)
    }
    var Zu = null
      , Qu = null;
    function Ao(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }
    function qm(e) {
        switch (e) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function Ym(e, t) {
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
    function Fu(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Ju = null;
    function Tv() {
        var e = window.event;
        return e && e.type === "popstate" ? e === Ju ? !1 : (Ju = e,
        !0) : (Ju = null,
        !1)
    }
    var Gm = typeof setTimeout == "function" ? setTimeout : void 0
      , wv = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Xm = typeof Promise == "function" ? Promise : void 0
      , Av = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xm < "u" ? function(e) {
        return Xm.resolve(null).then(e).catch(Nv)
    }
    : Gm;
    function Nv(e) {
        setTimeout(function() {
            throw e
        })
    }
    function An(e) {
        return e === "head"
    }
    function Km(e, t) {
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
                        if (a & 1 && Ks(y.documentElement),
                        a & 2 && Ks(y.body),
                        a & 4)
                            for (a = y.head,
                            Ks(a),
                            y = a.firstChild; y; ) {
                                var b = y.nextSibling
                                  , w = y.nodeName;
                                y[on] || w === "SCRIPT" || w === "STYLE" || w === "LINK" && y.rel.toLowerCase() === "stylesheet" || a.removeChild(y),
                                y = b
                            }
                    }
                    if (r === 0) {
                        e.removeChild(u),
                        ei(t);
                        return
                    }
                    r--
                } else
                    a === "$" || a === "$?" || a === "$!" ? r++ : i = a.charCodeAt(0) - 48;
            else
                i = 0;
            a = u
        } while (a);
        ei(t)
    }
    function Iu(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var a = t;
            switch (t = t.nextSibling,
            a.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                Iu(a),
                fl(a);
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
    function Ev(e, t, a, i) {
        for (; e.nodeType === 1; ) {
            var r = a;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
                    break
            } else if (i) {
                if (!e[on])
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
            if (e = ja(e.nextSibling),
            e === null)
                break
        }
        return null
    }
    function Cv(e, t, a) {
        if (t === "")
            return null;
        for (; e.nodeType !== 3; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = ja(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function $u(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete"
    }
    function Dv(e, t) {
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
    function ja(e) {
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
    var Wu = null;
    function Zm(e) {
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
    function Qm(e, t, a) {
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
        fl(e)
    }
    var da = new Map
      , Fm = new Set;
    function No(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var an = O.d;
    O.d = {
        f: Mv,
        r: _v,
        D: Ov,
        C: Rv,
        L: Vv,
        m: zv,
        X: Bv,
        S: Uv,
        M: Lv
    };
    function Mv() {
        var e = an.f()
          , t = yo();
        return e || t
    }
    function _v(e) {
        var t = Pa(e);
        t !== null && t.tag === 5 && t.type === "form" ? ph(t) : an.r(e)
    }
    var Yl = typeof document > "u" ? null : document;
    function Jm(e, t, a) {
        var i = Yl;
        if (i && typeof t == "string" && t) {
            var r = sa(t);
            r = 'link[rel="' + e + '"][href="' + r + '"]',
            typeof a == "string" && (r += '[crossorigin="' + a + '"]'),
            Fm.has(r) || (Fm.add(r),
            e = {
                rel: e,
                crossOrigin: a,
                href: t
            },
            i.querySelector(r) === null && (t = i.createElement("link"),
            Ct(t, "link", e),
            ce(t),
            i.head.appendChild(t)))
        }
    }
    function Ov(e) {
        an.D(e),
        Jm("dns-prefetch", e, null)
    }
    function Rv(e, t) {
        an.C(e, t),
        Jm("preconnect", e, t)
    }
    function Vv(e, t, a) {
        an.L(e, t, a);
        var i = Yl;
        if (i && e && t) {
            var r = 'link[rel="preload"][as="' + sa(t) + '"]';
            t === "image" && a && a.imageSrcSet ? (r += '[imagesrcset="' + sa(a.imageSrcSet) + '"]',
            typeof a.imageSizes == "string" && (r += '[imagesizes="' + sa(a.imageSizes) + '"]')) : r += '[href="' + sa(e) + '"]';
            var u = r;
            switch (t) {
            case "style":
                u = Gl(e);
                break;
            case "script":
                u = Xl(e)
            }
            da.has(u) || (e = x({
                rel: "preload",
                href: t === "image" && a && a.imageSrcSet ? void 0 : e,
                as: t
            }, a),
            da.set(u, e),
            i.querySelector(r) !== null || t === "style" && i.querySelector(Zs(u)) || t === "script" && i.querySelector(Qs(u)) || (t = i.createElement("link"),
            Ct(t, "link", e),
            ce(t),
            i.head.appendChild(t)))
        }
    }
    function zv(e, t) {
        an.m(e, t);
        var a = Yl;
        if (a && e) {
            var i = t && typeof t.as == "string" ? t.as : "script"
              , r = 'link[rel="modulepreload"][as="' + sa(i) + '"][href="' + sa(e) + '"]'
              , u = r;
            switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                u = Xl(e)
            }
            if (!da.has(u) && (e = x({
                rel: "modulepreload",
                href: e
            }, t),
            da.set(u, e),
            a.querySelector(r) === null)) {
                switch (i) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (a.querySelector(Qs(u)))
                        return
                }
                i = a.createElement("link"),
                Ct(i, "link", e),
                ce(i),
                a.head.appendChild(i)
            }
        }
    }
    function Uv(e, t, a) {
        an.S(e, t, a);
        var i = Yl;
        if (i && e) {
            var r = qa(i).hoistableStyles
              , u = Gl(e);
            t = t || "default";
            var y = r.get(u);
            if (!y) {
                var b = {
                    loading: 0,
                    preload: null
                };
                if (y = i.querySelector(Zs(u)))
                    b.loading = 5;
                else {
                    e = x({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, a),
                    (a = da.get(u)) && ec(e, a);
                    var w = y = i.createElement("link");
                    ce(w),
                    Ct(w, "link", e),
                    w._p = new Promise(function(z, K) {
                        w.onload = z,
                        w.onerror = K
                    }
                    ),
                    w.addEventListener("load", function() {
                        b.loading |= 1
                    }),
                    w.addEventListener("error", function() {
                        b.loading |= 2
                    }),
                    b.loading |= 4,
                    Eo(y, t, i)
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
    function Bv(e, t) {
        an.X(e, t);
        var a = Yl;
        if (a && e) {
            var i = qa(a).hoistableScripts
              , r = Xl(e)
              , u = i.get(r);
            u || (u = a.querySelector(Qs(r)),
            u || (e = x({
                src: e,
                async: !0
            }, t),
            (t = da.get(r)) && tc(e, t),
            u = a.createElement("script"),
            ce(u),
            Ct(u, "link", e),
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
    function Lv(e, t) {
        an.M(e, t);
        var a = Yl;
        if (a && e) {
            var i = qa(a).hoistableScripts
              , r = Xl(e)
              , u = i.get(r);
            u || (u = a.querySelector(Qs(r)),
            u || (e = x({
                src: e,
                async: !0,
                type: "module"
            }, t),
            (t = da.get(r)) && tc(e, t),
            u = a.createElement("script"),
            ce(u),
            Ct(u, "link", e),
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
    function Im(e, t, a, i) {
        var r = (r = G.current) ? No(r) : null;
        if (!r)
            throw Error(o(446));
        switch (e) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Gl(a.href),
            a = qa(r).hoistableStyles,
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
                e = Gl(a.href);
                var u = qa(r).hoistableStyles
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
                (u = r.querySelector(Zs(e))) && !u._p && (y.instance = u,
                y.state.loading = 5),
                da.has(e) || (a = {
                    rel: "preload",
                    as: "style",
                    href: a.href,
                    crossOrigin: a.crossOrigin,
                    integrity: a.integrity,
                    media: a.media,
                    hrefLang: a.hrefLang,
                    referrerPolicy: a.referrerPolicy
                },
                da.set(e, a),
                u || kv(r, e, a, y.state))),
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
            typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Xl(a),
            a = qa(r).hoistableScripts,
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
    function Gl(e) {
        return 'href="' + sa(e) + '"'
    }
    function Zs(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }
    function $m(e) {
        return x({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }
    function kv(e, t, a, i) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? i.loading = 1 : (t = e.createElement("link"),
        i.preload = t,
        t.addEventListener("load", function() {
            return i.loading |= 1
        }),
        t.addEventListener("error", function() {
            return i.loading |= 2
        }),
        Ct(t, "link", a),
        ce(t),
        e.head.appendChild(t))
    }
    function Xl(e) {
        return '[src="' + sa(e) + '"]'
    }
    function Qs(e) {
        return "script[async]" + e
    }
    function Wm(e, t, a) {
        if (t.count++,
        t.instance === null)
            switch (t.type) {
            case "style":
                var i = e.querySelector('style[data-href~="' + sa(a.href) + '"]');
                if (i)
                    return t.instance = i,
                    ce(i),
                    i;
                var r = x({}, a, {
                    "data-href": a.href,
                    "data-precedence": a.precedence,
                    href: null,
                    precedence: null
                });
                return i = (e.ownerDocument || e).createElement("style"),
                ce(i),
                Ct(i, "style", r),
                Eo(i, a.precedence, e),
                t.instance = i;
            case "stylesheet":
                r = Gl(a.href);
                var u = e.querySelector(Zs(r));
                if (u)
                    return t.state.loading |= 4,
                    t.instance = u,
                    ce(u),
                    u;
                i = $m(a),
                (r = da.get(r)) && ec(i, r),
                u = (e.ownerDocument || e).createElement("link"),
                ce(u);
                var y = u;
                return y._p = new Promise(function(b, w) {
                    y.onload = b,
                    y.onerror = w
                }
                ),
                Ct(u, "link", i),
                t.state.loading |= 4,
                Eo(u, a.precedence, e),
                t.instance = u;
            case "script":
                return u = Xl(a.src),
                (r = e.querySelector(Qs(u))) ? (t.instance = r,
                ce(r),
                r) : (i = a,
                (r = da.get(u)) && (i = x({}, a),
                tc(i, r)),
                e = e.ownerDocument || e,
                r = e.createElement("script"),
                ce(r),
                Ct(r, "link", i),
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
            Eo(i, a.precedence, e));
        return t.instance
    }
    function Eo(e, t, a) {
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
    function ec(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.title == null && (e.title = t.title)
    }
    function tc(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.integrity == null && (e.integrity = t.integrity)
    }
    var Co = null;
    function ep(e, t, a) {
        if (Co === null) {
            var i = new Map
              , r = Co = new Map;
            r.set(a, i)
        } else
            r = Co,
            i = r.get(a),
            i || (i = new Map,
            r.set(a, i));
        if (i.has(e))
            return i;
        for (i.set(e, null),
        a = a.getElementsByTagName(e),
        r = 0; r < a.length; r++) {
            var u = a[r];
            if (!(u[on] || u[xt] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
                var y = u.getAttribute(t) || "";
                y = e + y;
                var b = i.get(y);
                b ? b.push(u) : i.set(y, [u])
            }
        }
        return i
    }
    function tp(e, t, a) {
        e = e.ownerDocument || e,
        e.head.insertBefore(a, t === "title" ? e.querySelector("head > title") : null)
    }
    function Hv(e, t, a) {
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
    function ap(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    var Fs = null;
    function Pv() {}
    function qv(e, t, a) {
        if (Fs === null)
            throw Error(o(475));
        var i = Fs;
        if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
            if (t.instance === null) {
                var r = Gl(a.href)
                  , u = e.querySelector(Zs(r));
                if (u) {
                    e = u._p,
                    e !== null && typeof e == "object" && typeof e.then == "function" && (i.count++,
                    i = Do.bind(i),
                    e.then(i, i)),
                    t.state.loading |= 4,
                    t.instance = u,
                    ce(u);
                    return
                }
                u = e.ownerDocument || e,
                a = $m(a),
                (r = da.get(r)) && ec(a, r),
                u = u.createElement("link"),
                ce(u);
                var y = u;
                y._p = new Promise(function(b, w) {
                    y.onload = b,
                    y.onerror = w
                }
                ),
                Ct(u, "link", a),
                t.instance = u
            }
            i.stylesheets === null && (i.stylesheets = new Map),
            i.stylesheets.set(t, e),
            (e = t.state.preload) && (t.state.loading & 3) === 0 && (i.count++,
            t = Do.bind(i),
            e.addEventListener("load", t),
            e.addEventListener("error", t))
        }
    }
    function Yv() {
        if (Fs === null)
            throw Error(o(475));
        var e = Fs;
        return e.stylesheets && e.count === 0 && ac(e, e.stylesheets),
        0 < e.count ? function(t) {
            var a = setTimeout(function() {
                if (e.stylesheets && ac(e, e.stylesheets),
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
    function Do() {
        if (this.count--,
        this.count === 0) {
            if (this.stylesheets)
                ac(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null,
                e()
            }
        }
    }
    var Mo = null;
    function ac(e, t) {
        e.stylesheets = null,
        e.unsuspend !== null && (e.count++,
        Mo = new Map,
        t.forEach(Gv, e),
        Mo = null,
        Do.call(e))
    }
    function Gv(e, t) {
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
            i = Do.bind(this),
            r.addEventListener("load", i),
            r.addEventListener("error", i),
            u ? u.parentNode.insertBefore(r, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
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
    function Xv(e, t, a, i, r, u, y, b) {
        this.tag = 1,
        this.containerInfo = e,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = Te(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Te(0),
        this.hiddenUpdates = Te(null),
        this.identifierPrefix = i,
        this.onUncaughtError = r,
        this.onCaughtError = u,
        this.onRecoverableError = y,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = b,
        this.incompleteTransitions = new Map
    }
    function np(e, t, a, i, r, u, y, b, w, z, K, I) {
        return e = new Xv(e,t,a,y,b,w,z,I),
        t = 1,
        u === !0 && (t |= 24),
        u = Ft(3, null, null, t),
        e.current = u,
        u.stateNode = e,
        t = Br(),
        t.refCount++,
        e.pooledCache = t,
        t.refCount++,
        u.memoizedState = {
            element: i,
            isDehydrated: a,
            cache: t
        },
        Pr(u),
        e
    }
    function lp(e) {
        return e ? (e = jl,
        e) : jl
    }
    function sp(e, t, a, i, r, u) {
        r = lp(r),
        i.context === null ? i.context = r : i.pendingContext = r,
        i = dn(t),
        i.payload = {
            element: a
        },
        u = u === void 0 ? null : u,
        u !== null && (i.callback = u),
        a = hn(e, i, t),
        a !== null && (ea(a, e, t),
        Ns(a, e, t))
    }
    function ip(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var a = e.retryLane;
            e.retryLane = a !== 0 && a < t ? a : t
        }
    }
    function nc(e, t) {
        ip(e, t),
        (e = e.alternate) && ip(e, t)
    }
    function op(e) {
        if (e.tag === 13) {
            var t = Sl(e, 67108864);
            t !== null && ea(t, e, 67108864),
            nc(e, 67108864)
        }
    }
    var _o = !0;
    function Kv(e, t, a, i) {
        var r = N.T;
        N.T = null;
        var u = O.p;
        try {
            O.p = 2,
            lc(e, t, a, i)
        } finally {
            O.p = u,
            N.T = r
        }
    }
    function Zv(e, t, a, i) {
        var r = N.T;
        N.T = null;
        var u = O.p;
        try {
            O.p = 8,
            lc(e, t, a, i)
        } finally {
            O.p = u,
            N.T = r
        }
    }
    function lc(e, t, a, i) {
        if (_o) {
            var r = sc(i);
            if (r === null)
                Xu(e, t, i, Oo, a),
                up(e, i);
            else if (Fv(r, e, t, a, i))
                i.stopPropagation();
            else if (up(e, i),
            t & 4 && -1 < Qv.indexOf(e)) {
                for (; r !== null; ) {
                    var u = Pa(r);
                    if (u !== null)
                        switch (u.tag) {
                        case 3:
                            if (u = u.stateNode,
                            u.current.memoizedState.isDehydrated) {
                                var y = Ot(u.pendingLanes);
                                if (y !== 0) {
                                    var b = u;
                                    for (b.pendingLanes |= 2,
                                    b.entangledLanes |= 2; y; ) {
                                        var w = 1 << 31 - de(y);
                                        b.entanglements[1] |= w,
                                        y &= ~w
                                    }
                                    Ra(u),
                                    (qe & 6) === 0 && (po = dt() + 500,
                                    Ys(0))
                                }
                            }
                            break;
                        case 13:
                            b = Sl(u, 2),
                            b !== null && ea(b, u, 2),
                            yo(),
                            nc(u, 2)
                        }
                    if (u = sc(i),
                    u === null && Xu(e, t, i, Oo, a),
                    u === r)
                        break;
                    r = u
                }
                r !== null && i.stopPropagation()
            } else
                Xu(e, t, i, null, a)
        }
    }
    function sc(e) {
        return e = cr(e),
        ic(e)
    }
    var Oo = null;
    function ic(e) {
        if (Oo = null,
        e = Ha(e),
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
        return Oo = e,
        null
    }
    function rp(e) {
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
            switch (Aa()) {
            case ya:
                return 2;
            case Na:
                return 8;
            case ta:
            case Ba:
                return 32;
            case Ea:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var oc = !1
      , Nn = null
      , En = null
      , Cn = null
      , Is = new Map
      , $s = new Map
      , Dn = []
      , Qv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function up(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            Nn = null;
            break;
        case "dragenter":
        case "dragleave":
            En = null;
            break;
        case "mouseover":
        case "mouseout":
            Cn = null;
            break;
        case "pointerover":
        case "pointerout":
            Is.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            $s.delete(t.pointerId)
        }
    }
    function Ws(e, t, a, i, r, u) {
        return e === null || e.nativeEvent !== u ? (e = {
            blockedOn: t,
            domEventName: a,
            eventSystemFlags: i,
            nativeEvent: u,
            targetContainers: [r]
        },
        t !== null && (t = Pa(t),
        t !== null && op(t)),
        e) : (e.eventSystemFlags |= i,
        t = e.targetContainers,
        r !== null && t.indexOf(r) === -1 && t.push(r),
        e)
    }
    function Fv(e, t, a, i, r) {
        switch (t) {
        case "focusin":
            return Nn = Ws(Nn, e, t, a, i, r),
            !0;
        case "dragenter":
            return En = Ws(En, e, t, a, i, r),
            !0;
        case "mouseover":
            return Cn = Ws(Cn, e, t, a, i, r),
            !0;
        case "pointerover":
            var u = r.pointerId;
            return Is.set(u, Ws(Is.get(u) || null, e, t, a, i, r)),
            !0;
        case "gotpointercapture":
            return u = r.pointerId,
            $s.set(u, Ws($s.get(u) || null, e, t, a, i, r)),
            !0
        }
        return !1
    }
    function cp(e) {
        var t = Ha(e.target);
        if (t !== null) {
            var a = h(t);
            if (a !== null) {
                if (t = a.tag,
                t === 13) {
                    if (t = d(a),
                    t !== null) {
                        e.blockedOn = t,
                        Ni(e.priority, function() {
                            if (a.tag === 13) {
                                var i = Wt();
                                i = rl(i);
                                var r = Sl(a, i);
                                r !== null && ea(r, a, i),
                                nc(a, i)
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
    function Ro(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var a = sc(e.nativeEvent);
            if (a === null) {
                a = e.nativeEvent;
                var i = new a.constructor(a.type,a);
                ur = i,
                a.target.dispatchEvent(i),
                ur = null
            } else
                return t = Pa(a),
                t !== null && op(t),
                e.blockedOn = a,
                !1;
            t.shift()
        }
        return !0
    }
    function fp(e, t, a) {
        Ro(e) && a.delete(t)
    }
    function Jv() {
        oc = !1,
        Nn !== null && Ro(Nn) && (Nn = null),
        En !== null && Ro(En) && (En = null),
        Cn !== null && Ro(Cn) && (Cn = null),
        Is.forEach(fp),
        $s.forEach(fp)
    }
    function Vo(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        oc || (oc = !0,
        n.unstable_scheduleCallback(n.unstable_NormalPriority, Jv)))
    }
    var zo = null;
    function dp(e) {
        zo !== e && (zo = e,
        n.unstable_scheduleCallback(n.unstable_NormalPriority, function() {
            zo === e && (zo = null);
            for (var t = 0; t < e.length; t += 3) {
                var a = e[t]
                  , i = e[t + 1]
                  , r = e[t + 2];
                if (typeof i != "function") {
                    if (ic(i || a) === null)
                        continue;
                    break
                }
                var u = Pa(a);
                u !== null && (e.splice(t, 3),
                t -= 3,
                iu(u, {
                    pending: !0,
                    data: r,
                    method: a.method,
                    action: i
                }, i, r))
            }
        }))
    }
    function ei(e) {
        function t(w) {
            return Vo(w, e)
        }
        Nn !== null && Vo(Nn, e),
        En !== null && Vo(En, e),
        Cn !== null && Vo(Cn, e),
        Is.forEach(t),
        $s.forEach(t);
        for (var a = 0; a < Dn.length; a++) {
            var i = Dn[a];
            i.blockedOn === e && (i.blockedOn = null)
        }
        for (; 0 < Dn.length && (a = Dn[0],
        a.blockedOn === null); )
            cp(a),
            a.blockedOn === null && Dn.shift();
        if (a = (e.ownerDocument || e).$$reactFormReplay,
        a != null)
            for (i = 0; i < a.length; i += 3) {
                var r = a[i]
                  , u = a[i + 1]
                  , y = r[At] || null;
                if (typeof u == "function")
                    y || dp(a);
                else if (y) {
                    var b = null;
                    if (u && u.hasAttribute("formAction")) {
                        if (r = u,
                        y = u[At] || null)
                            b = y.formAction;
                        else if (ic(r) !== null)
                            continue
                    } else
                        b = y.action;
                    typeof b == "function" ? a[i + 1] = b : (a.splice(i, 3),
                    i -= 3),
                    dp(a)
                }
            }
    }
    function rc(e) {
        this._internalRoot = e
    }
    Uo.prototype.render = rc.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(o(409));
        var a = t.current
          , i = Wt();
        sp(a, i, e, t, null, null)
    }
    ,
    Uo.prototype.unmount = rc.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            sp(e.current, 2, null, e, null, null),
            yo(),
            t[ka] = null
        }
    }
    ;
    function Uo(e) {
        this._internalRoot = e
    }
    Uo.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = ss();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var a = 0; a < Dn.length && t !== 0 && t < Dn[a].priority; a++)
                ;
            Dn.splice(a, 0, e),
            a === 0 && cp(e)
        }
    }
    ;
    var hp = l.version;
    if (hp !== "19.1.0")
        throw Error(o(527, hp, "19.1.0"));
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
    var Iv = {
        bundleType: 0,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: N,
        reconcilerVersion: "19.1.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Bo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Bo.isDisabled && Bo.supportsFiber)
            try {
                _t = Bo.inject(Iv),
                $e = Bo
            } catch {}
    }
    return ai.createRoot = function(e, t) {
        if (!c(e))
            throw Error(o(299));
        var a = !1
          , i = ""
          , r = Dh
          , u = Mh
          , y = _h
          , b = null;
        return t != null && (t.unstable_strictMode === !0 && (a = !0),
        t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (r = t.onUncaughtError),
        t.onCaughtError !== void 0 && (u = t.onCaughtError),
        t.onRecoverableError !== void 0 && (y = t.onRecoverableError),
        t.unstable_transitionCallbacks !== void 0 && (b = t.unstable_transitionCallbacks)),
        t = np(e, 1, !1, null, null, a, i, r, u, y, b, null),
        e[ka] = t.current,
        Gu(e),
        new rc(t)
    }
    ,
    ai.hydrateRoot = function(e, t, a) {
        if (!c(e))
            throw Error(o(299));
        var i = !1
          , r = ""
          , u = Dh
          , y = Mh
          , b = _h
          , w = null
          , z = null;
        return a != null && (a.unstable_strictMode === !0 && (i = !0),
        a.identifierPrefix !== void 0 && (r = a.identifierPrefix),
        a.onUncaughtError !== void 0 && (u = a.onUncaughtError),
        a.onCaughtError !== void 0 && (y = a.onCaughtError),
        a.onRecoverableError !== void 0 && (b = a.onRecoverableError),
        a.unstable_transitionCallbacks !== void 0 && (w = a.unstable_transitionCallbacks),
        a.formState !== void 0 && (z = a.formState)),
        t = np(e, 1, !0, t, a ?? null, i, r, u, y, b, w, z),
        t.context = lp(null),
        a = t.current,
        i = Wt(),
        i = rl(i),
        r = dn(i),
        r.callback = null,
        hn(a, r, i),
        a = i,
        t.current.lanes = a,
        ht(t, a),
        Ra(t),
        e[ka] = t.current,
        Gu(e),
        new Uo(t)
    }
    ,
    ai.version = "19.1.0",
    ai
}
var Tp;
function cb() {
    if (Tp)
        return fc.exports;
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
    fc.exports = ub(),
    fc.exports
}
var fb = cb();
const $c = S.createContext({});
function Wc(n) {
    const l = S.useRef(null);
    return l.current === null && (l.current = n()),
    l.current
}
const ef = typeof window < "u"
  , Zg = ef ? S.useLayoutEffect : S.useEffect
  , Io = S.createContext(null);
function tf(n, l) {
    n.indexOf(l) === -1 && n.push(l)
}
function af(n, l) {
    const s = n.indexOf(l);
    s > -1 && n.splice(s, 1)
}
const nn = (n, l, s) => s > l ? l : s < n ? n : s;
let nf = () => {}
;
const ln = {}
  , Qg = n => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);
function Fg(n) {
    return typeof n == "object" && n !== null
}
const Jg = n => /^0[^.\s]+$/u.test(n);
function lf(n) {
    let l;
    return () => (l === void 0 && (l = n()),
    l)
}
const pa = n => n
  , db = (n, l) => s => l(n(s))
  , bi = (...n) => n.reduce(db)
  , fi = (n, l, s) => {
    const o = l - n;
    return o === 0 ? 1 : (s - n) / o
}
;
class sf {
    constructor() {
        this.subscriptions = []
    }
    add(l) {
        return tf(this.subscriptions, l),
        () => af(this.subscriptions, l)
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
const Va = n => n * 1e3
  , za = n => n / 1e3;
function Ig(n, l) {
    return l ? n * (1e3 / l) : 0
}
const $g = (n, l, s) => (((1 - 3 * s + 3 * l) * n + (3 * s - 6 * l)) * n + 3 * l) * n
  , hb = 1e-7
  , mb = 12;
function pb(n, l, s, o, c) {
    let h, d, p = 0;
    do
        d = l + (s - l) / 2,
        h = $g(d, o, c) - n,
        h > 0 ? s = d : l = d;
    while (Math.abs(h) > hb && ++p < mb);
    return d
}
function Si(n, l, s, o) {
    if (n === l && s === o)
        return pa;
    const c = h => pb(h, 0, 1, n, s);
    return h => h === 0 || h === 1 ? h : $g(c(h), l, o)
}
const Wg = n => l => l <= .5 ? n(2 * l) / 2 : (2 - n(2 * (1 - l))) / 2
  , e0 = n => l => 1 - n(1 - l)
  , t0 = Si(.33, 1.53, .69, .99)
  , of = e0(t0)
  , a0 = Wg(of)
  , n0 = n => (n *= 2) < 1 ? .5 * of(n) : .5 * (2 - Math.pow(2, -10 * (n - 1)))
  , rf = n => 1 - Math.sin(Math.acos(n))
  , l0 = e0(rf)
  , s0 = Wg(rf)
  , gb = Si(.42, 0, 1, 1)
  , yb = Si(0, 0, .58, 1)
  , i0 = Si(.42, 0, .58, 1)
  , xb = n => Array.isArray(n) && typeof n[0] != "number"
  , o0 = n => Array.isArray(n) && typeof n[0] == "number"
  , vb = {
    linear: pa,
    easeIn: gb,
    easeInOut: i0,
    easeOut: yb,
    circIn: rf,
    circInOut: s0,
    circOut: l0,
    backIn: of,
    backInOut: a0,
    backOut: t0,
    anticipate: n0
}
  , bb = n => typeof n == "string"
  , wp = n => {
    if (o0(n)) {
        nf(n.length === 4);
        const [l,s,o,c] = n;
        return Si(l, s, o, c)
    } else if (bb(n))
        return vb[n];
    return n
}
  , Lo = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"]
  , Ap = {
    value: null
};
function Sb(n, l) {
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
    function g(v) {
        d.has(v) && (x.schedule(v),
        n()),
        m++,
        v(p)
    }
    const x = {
        schedule: (v, T=!1, A=!1) => {
            const V = A && c ? s : o;
            return T && d.add(v),
            V.has(v) || V.add(v),
            v
        }
        ,
        cancel: v => {
            o.delete(v),
            d.delete(v)
        }
        ,
        process: v => {
            if (p = v,
            c) {
                h = !0;
                return
            }
            c = !0,
            [s,o] = [o, s],
            s.forEach(g),
            l && Ap.value && Ap.value.frameloop[l].push(m),
            m = 0,
            s.clear(),
            c = !1,
            h && (h = !1,
            x.process(v))
        }
    };
    return x
}
const jb = 40;
function r0(n, l) {
    let s = !1
      , o = !0;
    const c = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , h = () => s = !0
      , d = Lo.reduce( (B, Q) => (B[Q] = Sb(h, l ? Q : void 0),
    B), {})
      , {setup: p, read: m, resolveKeyframes: g, preUpdate: x, update: v, preRender: T, render: A, postRender: M} = d
      , V = () => {
        const B = ln.useManualTiming ? c.timestamp : performance.now();
        s = !1,
        ln.useManualTiming || (c.delta = o ? 1e3 / 60 : Math.max(Math.min(B - c.timestamp, jb), 1)),
        c.timestamp = B,
        c.isProcessing = !0,
        p.process(c),
        m.process(c),
        g.process(c),
        x.process(c),
        v.process(c),
        T.process(c),
        A.process(c),
        M.process(c),
        c.isProcessing = !1,
        s && l && (o = !1,
        n(V))
    }
      , D = () => {
        s = !0,
        o = !0,
        c.isProcessing || n(V)
    }
    ;
    return {
        schedule: Lo.reduce( (B, Q) => {
            const _ = d[Q];
            return B[Q] = ($, ee=!1, J=!1) => (s || D(),
            _.schedule($, ee, J)),
            B
        }
        , {}),
        cancel: B => {
            for (let Q = 0; Q < Lo.length; Q++)
                d[Lo[Q]].cancel(B)
        }
        ,
        state: c,
        steps: d
    }
}
const {schedule: tt, cancel: Rn, state: Dt, steps: pc} = r0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : pa, !0);
let qo;
function Tb() {
    qo = void 0
}
const Xt = {
    now: () => (qo === void 0 && Xt.set(Dt.isProcessing || ln.useManualTiming ? Dt.timestamp : performance.now()),
    qo),
    set: n => {
        qo = n,
        queueMicrotask(Tb)
    }
}
  , u0 = n => l => typeof l == "string" && l.startsWith(n)
  , uf = u0("--")
  , wb = u0("var(--")
  , cf = n => wb(n) ? Ab.test(n.split("/*")[0].trim()) : !1
  , Ab = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , Wl = {
    test: n => typeof n == "number",
    parse: parseFloat,
    transform: n => n
}
  , di = {
    ...Wl,
    transform: n => nn(0, 1, n)
}
  , ko = {
    ...Wl,
    default: 1
}
  , ii = n => Math.round(n * 1e5) / 1e5
  , ff = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Nb(n) {
    return n == null
}
const Eb = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , df = (n, l) => s => !!(typeof s == "string" && Eb.test(s) && s.startsWith(n) || l && !Nb(s) && Object.prototype.hasOwnProperty.call(s, l))
  , c0 = (n, l, s) => o => {
    if (typeof o != "string")
        return o;
    const [c,h,d,p] = o.match(ff);
    return {
        [n]: parseFloat(c),
        [l]: parseFloat(h),
        [s]: parseFloat(d),
        alpha: p !== void 0 ? parseFloat(p) : 1
    }
}
  , Cb = n => nn(0, 255, n)
  , gc = {
    ...Wl,
    transform: n => Math.round(Cb(n))
}
  , nl = {
    test: df("rgb", "red"),
    parse: c0("red", "green", "blue"),
    transform: ({red: n, green: l, blue: s, alpha: o=1}) => "rgba(" + gc.transform(n) + ", " + gc.transform(l) + ", " + gc.transform(s) + ", " + ii(di.transform(o)) + ")"
};
function Db(n) {
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
const Dc = {
    test: df("#"),
    parse: Db,
    transform: nl.transform
}
  , ji = n => ({
    test: l => typeof l == "string" && l.endsWith(n) && l.split(" ").length === 1,
    parse: parseFloat,
    transform: l => `${l}${n}`
})
  , _n = ji("deg")
  , Ua = ji("%")
  , je = ji("px")
  , Mb = ji("vh")
  , _b = ji("vw")
  , Np = {
    ...Ua,
    parse: n => Ua.parse(n) / 100,
    transform: n => Ua.transform(n * 100)
}
  , Kl = {
    test: df("hsl", "hue"),
    parse: c0("hue", "saturation", "lightness"),
    transform: ({hue: n, saturation: l, lightness: s, alpha: o=1}) => "hsla(" + Math.round(n) + ", " + Ua.transform(ii(l)) + ", " + Ua.transform(ii(s)) + ", " + ii(di.transform(o)) + ")"
}
  , gt = {
    test: n => nl.test(n) || Dc.test(n) || Kl.test(n),
    parse: n => nl.test(n) ? nl.parse(n) : Kl.test(n) ? Kl.parse(n) : Dc.parse(n),
    transform: n => typeof n == "string" ? n : n.hasOwnProperty("red") ? nl.transform(n) : Kl.transform(n),
    getAnimatableNone: n => {
        const l = gt.parse(n);
        return l.alpha = 0,
        gt.transform(l)
    }
}
  , Ob = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Rb(n) {
    var l, s;
    return isNaN(n) && typeof n == "string" && (((l = n.match(ff)) == null ? void 0 : l.length) || 0) + (((s = n.match(Ob)) == null ? void 0 : s.length) || 0) > 0
}
const f0 = "number"
  , d0 = "color"
  , Vb = "var"
  , zb = "var("
  , Ep = "${}"
  , Ub = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function hi(n) {
    const l = n.toString()
      , s = []
      , o = {
        color: [],
        number: [],
        var: []
    }
      , c = [];
    let h = 0;
    const p = l.replace(Ub, m => (gt.test(m) ? (o.color.push(h),
    c.push(d0),
    s.push(gt.parse(m))) : m.startsWith(zb) ? (o.var.push(h),
    c.push(Vb),
    s.push(m)) : (o.number.push(h),
    c.push(f0),
    s.push(parseFloat(m))),
    ++h,
    Ep)).split(Ep);
    return {
        values: s,
        split: p,
        indexes: o,
        types: c
    }
}
function h0(n) {
    return hi(n).values
}
function m0(n) {
    const {split: l, types: s} = hi(n)
      , o = l.length;
    return c => {
        let h = "";
        for (let d = 0; d < o; d++)
            if (h += l[d],
            c[d] !== void 0) {
                const p = s[d];
                p === f0 ? h += ii(c[d]) : p === d0 ? h += gt.transform(c[d]) : h += c[d]
            }
        return h
    }
}
const Bb = n => typeof n == "number" ? 0 : gt.test(n) ? gt.getAnimatableNone(n) : n;
function Lb(n) {
    const l = h0(n);
    return m0(n)(l.map(Bb))
}
const Vn = {
    test: Rb,
    parse: h0,
    createTransformer: m0,
    getAnimatableNone: Lb
};
function yc(n, l, s) {
    return s < 0 && (s += 1),
    s > 1 && (s -= 1),
    s < 1 / 6 ? n + (l - n) * 6 * s : s < 1 / 2 ? l : s < 2 / 3 ? n + (l - n) * (2 / 3 - s) * 6 : n
}
function kb({hue: n, saturation: l, lightness: s, alpha: o}) {
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
        c = yc(m, p, n + 1 / 3),
        h = yc(m, p, n),
        d = yc(m, p, n - 1 / 3)
    }
    return {
        red: Math.round(c * 255),
        green: Math.round(h * 255),
        blue: Math.round(d * 255),
        alpha: o
    }
}
function Ko(n, l) {
    return s => s > 0 ? l : n
}
const et = (n, l, s) => n + (l - n) * s
  , xc = (n, l, s) => {
    const o = n * n
      , c = s * (l * l - o) + o;
    return c < 0 ? 0 : Math.sqrt(c)
}
  , Hb = [Dc, nl, Kl]
  , Pb = n => Hb.find(l => l.test(n));
function Cp(n) {
    const l = Pb(n);
    if (!l)
        return !1;
    let s = l.parse(n);
    return l === Kl && (s = kb(s)),
    s
}
const Dp = (n, l) => {
    const s = Cp(n)
      , o = Cp(l);
    if (!s || !o)
        return Ko(n, l);
    const c = {
        ...s
    };
    return h => (c.red = xc(s.red, o.red, h),
    c.green = xc(s.green, o.green, h),
    c.blue = xc(s.blue, o.blue, h),
    c.alpha = et(s.alpha, o.alpha, h),
    nl.transform(c))
}
  , Mc = new Set(["none", "hidden"]);
function qb(n, l) {
    return Mc.has(n) ? s => s <= 0 ? n : l : s => s >= 1 ? l : n
}
function Yb(n, l) {
    return s => et(n, l, s)
}
function hf(n) {
    return typeof n == "number" ? Yb : typeof n == "string" ? cf(n) ? Ko : gt.test(n) ? Dp : Kb : Array.isArray(n) ? p0 : typeof n == "object" ? gt.test(n) ? Dp : Gb : Ko
}
function p0(n, l) {
    const s = [...n]
      , o = s.length
      , c = n.map( (h, d) => hf(h)(h, l[d]));
    return h => {
        for (let d = 0; d < o; d++)
            s[d] = c[d](h);
        return s
    }
}
function Gb(n, l) {
    const s = {
        ...n,
        ...l
    }
      , o = {};
    for (const c in s)
        n[c] !== void 0 && l[c] !== void 0 && (o[c] = hf(n[c])(n[c], l[c]));
    return c => {
        for (const h in o)
            s[h] = o[h](c);
        return s
    }
}
function Xb(n, l) {
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
const Kb = (n, l) => {
    const s = Vn.createTransformer(l)
      , o = hi(n)
      , c = hi(l);
    return o.indexes.var.length === c.indexes.var.length && o.indexes.color.length === c.indexes.color.length && o.indexes.number.length >= c.indexes.number.length ? Mc.has(n) && !c.values.length || Mc.has(l) && !o.values.length ? qb(n, l) : bi(p0(Xb(o, c), c.values), s) : Ko(n, l)
}
;
function g0(n, l, s) {
    return typeof n == "number" && typeof l == "number" && typeof s == "number" ? et(n, l, s) : hf(n)(n, l)
}
const Zb = n => {
    const l = ({timestamp: s}) => n(s);
    return {
        start: (s=!0) => tt.update(l, s),
        stop: () => Rn(l),
        now: () => Dt.isProcessing ? Dt.timestamp : Xt.now()
    }
}
  , y0 = (n, l, s=10) => {
    let o = "";
    const c = Math.max(Math.round(l / s), 2);
    for (let h = 0; h < c; h++)
        o += Math.round(n(h / (c - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${o.substring(0, o.length - 2)})`
}
  , Zo = 2e4;
function mf(n) {
    let l = 0;
    const s = 50;
    let o = n.next(l);
    for (; !o.done && l < Zo; )
        l += s,
        o = n.next(l);
    return l >= Zo ? 1 / 0 : l
}
function Qb(n, l=100, s) {
    const o = s({
        ...n,
        keyframes: [0, l]
    })
      , c = Math.min(mf(o), Zo);
    return {
        type: "keyframes",
        ease: h => o.next(c * h).value / l,
        duration: za(c)
    }
}
const Fb = 5;
function x0(n, l, s) {
    const o = Math.max(l - Fb, 0);
    return Ig(s - n(o), l - o)
}
const st = {
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
  , vc = .001;
function Jb({duration: n=st.duration, bounce: l=st.bounce, velocity: s=st.velocity, mass: o=st.mass}) {
    let c, h, d = 1 - l;
    d = nn(st.minDamping, st.maxDamping, d),
    n = nn(st.minDuration, st.maxDuration, za(n)),
    d < 1 ? (c = g => {
        const x = g * d
          , v = x * n
          , T = x - s
          , A = _c(g, d)
          , M = Math.exp(-v);
        return vc - T / A * M
    }
    ,
    h = g => {
        const v = g * d * n
          , T = v * s + s
          , A = Math.pow(d, 2) * Math.pow(g, 2) * n
          , M = Math.exp(-v)
          , V = _c(Math.pow(g, 2), d);
        return (-c(g) + vc > 0 ? -1 : 1) * ((T - A) * M) / V
    }
    ) : (c = g => {
        const x = Math.exp(-g * n)
          , v = (g - s) * n + 1;
        return -vc + x * v
    }
    ,
    h = g => {
        const x = Math.exp(-g * n)
          , v = (s - g) * (n * n);
        return x * v
    }
    );
    const p = 5 / n
      , m = $b(c, h, p);
    if (n = Va(n),
    isNaN(m))
        return {
            stiffness: st.stiffness,
            damping: st.damping,
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
const Ib = 12;
function $b(n, l, s) {
    let o = s;
    for (let c = 1; c < Ib; c++)
        o = o - n(o) / l(o);
    return o
}
function _c(n, l) {
    return n * Math.sqrt(1 - l * l)
}
const Wb = ["duration", "bounce"]
  , e1 = ["stiffness", "damping", "mass"];
function Mp(n, l) {
    return l.some(s => n[s] !== void 0)
}
function t1(n) {
    let l = {
        velocity: st.velocity,
        stiffness: st.stiffness,
        damping: st.damping,
        mass: st.mass,
        isResolvedFromDuration: !1,
        ...n
    };
    if (!Mp(n, e1) && Mp(n, Wb))
        if (n.visualDuration) {
            const s = n.visualDuration
              , o = 2 * Math.PI / (s * 1.2)
              , c = o * o
              , h = 2 * nn(.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(c);
            l = {
                ...l,
                mass: st.mass,
                stiffness: c,
                damping: h
            }
        } else {
            const s = Jb(n);
            l = {
                ...l,
                ...s,
                mass: st.mass
            },
            l.isResolvedFromDuration = !0
        }
    return l
}
function Qo(n=st.visualDuration, l=st.bounce) {
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
      , {stiffness: m, damping: g, mass: x, duration: v, velocity: T, isResolvedFromDuration: A} = t1({
        ...s,
        velocity: -za(s.velocity || 0)
    })
      , M = T || 0
      , V = g / (2 * Math.sqrt(m * x))
      , D = d - h
      , U = za(Math.sqrt(m / x))
      , L = Math.abs(D) < 5;
    o || (o = L ? st.restSpeed.granular : st.restSpeed.default),
    c || (c = L ? st.restDelta.granular : st.restDelta.default);
    let B;
    if (V < 1) {
        const _ = _c(U, V);
        B = $ => {
            const ee = Math.exp(-V * U * $);
            return d - ee * ((M + V * U * D) / _ * Math.sin(_ * $) + D * Math.cos(_ * $))
        }
    } else if (V === 1)
        B = _ => d - Math.exp(-U * _) * (D + (M + U * D) * _);
    else {
        const _ = U * Math.sqrt(V * V - 1);
        B = $ => {
            const ee = Math.exp(-V * U * $)
              , J = Math.min(_ * $, 300);
            return d - ee * ((M + V * U * D) * Math.sinh(J) + _ * D * Math.cosh(J)) / _
        }
    }
    const Q = {
        calculatedDuration: A && v || null,
        next: _ => {
            const $ = B(_);
            if (A)
                p.done = _ >= v;
            else {
                let ee = _ === 0 ? M : 0;
                V < 1 && (ee = _ === 0 ? Va(M) : x0(B, _, $));
                const J = Math.abs(ee) <= o
                  , ie = Math.abs(d - $) <= c;
                p.done = J && ie
            }
            return p.value = p.done ? d : $,
            p
        }
        ,
        toString: () => {
            const _ = Math.min(mf(Q), Zo)
              , $ = y0(ee => Q.next(_ * ee).value, _, 30);
            return _ + "ms " + $
        }
        ,
        toTransition: () => {}
    };
    return Q
}
Qo.applyToOptions = n => {
    const l = Qb(n, 100, Qo);
    return n.ease = l.ease,
    n.duration = Va(l.duration),
    n.type = "keyframes",
    n
}
;
function Oc({keyframes: n, velocity: l=0, power: s=.8, timeConstant: o=325, bounceDamping: c=10, bounceStiffness: h=500, modifyTarget: d, min: p, max: m, restDelta: g=.5, restSpeed: x}) {
    const v = n[0]
      , T = {
        done: !1,
        value: v
    }
      , A = J => p !== void 0 && J < p || m !== void 0 && J > m
      , M = J => p === void 0 ? m : m === void 0 || Math.abs(p - J) < Math.abs(m - J) ? p : m;
    let V = s * l;
    const D = v + V
      , U = d === void 0 ? D : d(D);
    U !== D && (V = U - v);
    const L = J => -V * Math.exp(-J / o)
      , B = J => U + L(J)
      , Q = J => {
        const ie = L(J)
          , me = B(J);
        T.done = Math.abs(ie) <= g,
        T.value = T.done ? U : me
    }
    ;
    let _, $;
    const ee = J => {
        A(T.value) && (_ = J,
        $ = Qo({
            keyframes: [T.value, M(T.value)],
            velocity: x0(B, J, T.value),
            damping: c,
            stiffness: h,
            restDelta: g,
            restSpeed: x
        }))
    }
    ;
    return ee(0),
    {
        calculatedDuration: null,
        next: J => {
            let ie = !1;
            return !$ && _ === void 0 && (ie = !0,
            Q(J),
            ee(J)),
            _ !== void 0 && J >= _ ? $.next(J - _) : (!ie && Q(J),
            T)
        }
    }
}
function a1(n, l, s) {
    const o = []
      , c = s || ln.mix || g0
      , h = n.length - 1;
    for (let d = 0; d < h; d++) {
        let p = c(n[d], n[d + 1]);
        if (l) {
            const m = Array.isArray(l) ? l[d] || pa : l;
            p = bi(m, p)
        }
        o.push(p)
    }
    return o
}
function n1(n, l, {clamp: s=!0, ease: o, mixer: c}={}) {
    const h = n.length;
    if (nf(h === l.length),
    h === 1)
        return () => l[0];
    if (h === 2 && l[0] === l[1])
        return () => l[1];
    const d = n[0] === n[1];
    n[0] > n[h - 1] && (n = [...n].reverse(),
    l = [...l].reverse());
    const p = a1(l, o, c)
      , m = p.length
      , g = x => {
        if (d && x < n[0])
            return l[0];
        let v = 0;
        if (m > 1)
            for (; v < n.length - 2 && !(x < n[v + 1]); v++)
                ;
        const T = fi(n[v], n[v + 1], x);
        return p[v](T)
    }
    ;
    return s ? x => g(nn(n[0], n[h - 1], x)) : g
}
function l1(n, l) {
    const s = n[n.length - 1];
    for (let o = 1; o <= l; o++) {
        const c = fi(0, l, o);
        n.push(et(s, 1, c))
    }
}
function s1(n) {
    const l = [0];
    return l1(l, n.length - 1),
    l
}
function i1(n, l) {
    return n.map(s => s * l)
}
function o1(n, l) {
    return n.map( () => l || i0).splice(0, n.length - 1)
}
function oi({duration: n=300, keyframes: l, times: s, ease: o="easeInOut"}) {
    const c = xb(o) ? o.map(wp) : wp(o)
      , h = {
        done: !1,
        value: l[0]
    }
      , d = i1(s && s.length === l.length ? s : s1(l), n)
      , p = n1(d, l, {
        ease: Array.isArray(c) ? c : o1(l, c)
    });
    return {
        calculatedDuration: n,
        next: m => (h.value = p(m),
        h.done = m >= n,
        h)
    }
}
const r1 = n => n !== null;
function pf(n, {repeat: l, repeatType: s="loop"}, o, c=1) {
    const h = n.filter(r1)
      , p = c < 0 || l && s !== "loop" && l % 2 === 1 ? 0 : h.length - 1;
    return !p || o === void 0 ? h[p] : o
}
const u1 = {
    decay: Oc,
    inertia: Oc,
    tween: oi,
    keyframes: oi,
    spring: Qo
};
function v0(n) {
    typeof n.type == "string" && (n.type = u1[n.type])
}
class gf {
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
const c1 = n => n / 100;
class yf extends gf {
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
            s && s.updatedAt !== Xt.now() && this.tick(Xt.now()),
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
        v0(l);
        const {type: s=oi, repeat: o=0, repeatDelay: c=0, repeatType: h, velocity: d=0} = l;
        let {keyframes: p} = l;
        const m = s || oi;
        m !== oi && typeof p[0] != "number" && (this.mixKeyframes = bi(c1, g0(p[0], p[1])),
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
        g.calculatedDuration === null && (g.calculatedDuration = mf(g));
        const {calculatedDuration: x} = g;
        this.calculatedDuration = x,
        this.resolvedDuration = x + c,
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
        const {delay: g=0, keyframes: x, repeat: v, repeatType: T, repeatDelay: A, type: M, onUpdate: V, finalKeyframe: D} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - c / this.speed, this.startTime)),
        s ? this.currentTime = l : this.updateTime(l);
        const U = this.currentTime - g * (this.playbackSpeed >= 0 ? 1 : -1)
          , L = this.playbackSpeed >= 0 ? U < 0 : U > c;
        this.currentTime = Math.max(U, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = c);
        let B = this.currentTime
          , Q = o;
        if (v) {
            const J = Math.min(this.currentTime, c) / p;
            let ie = Math.floor(J)
              , me = J % 1;
            !me && J >= 1 && (me = 1),
            me === 1 && ie--,
            ie = Math.min(ie, v + 1),
            !!(ie % 2) && (T === "reverse" ? (me = 1 - me,
            A && (me -= A / p)) : T === "mirror" && (Q = d)),
            B = nn(0, 1, me) * p
        }
        const _ = L ? {
            done: !1,
            value: x[0]
        } : Q.next(B);
        h && (_.value = h(_.value));
        let {done: $} = _;
        !L && m !== null && ($ = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        const ee = this.holdTime === null && (this.state === "finished" || this.state === "running" && $);
        return ee && M !== Oc && (_.value = pf(x, this.options, D, this.speed)),
        V && V(_.value),
        ee && this.finish(),
        _
    }
    then(l, s) {
        return this.finished.then(l, s)
    }
    get duration() {
        return za(this.calculatedDuration)
    }
    get time() {
        return za(this.currentTime)
    }
    set time(l) {
        var s;
        l = Va(l),
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
        s && (this.time = za(this.currentTime))
    }
    play() {
        var c, h;
        if (this.isStopped)
            return;
        const {driver: l=Zb, startTime: s} = this.options;
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
function f1(n) {
    for (let l = 1; l < n.length; l++)
        n[l] ?? (n[l] = n[l - 1])
}
const ll = n => n * 180 / Math.PI
  , Rc = n => {
    const l = ll(Math.atan2(n[1], n[0]));
    return Vc(l)
}
  , d1 = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: n => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
    rotate: Rc,
    rotateZ: Rc,
    skewX: n => ll(Math.atan(n[1])),
    skewY: n => ll(Math.atan(n[2])),
    skew: n => (Math.abs(n[1]) + Math.abs(n[2])) / 2
}
  , Vc = n => (n = n % 360,
n < 0 && (n += 360),
n)
  , _p = Rc
  , Op = n => Math.sqrt(n[0] * n[0] + n[1] * n[1])
  , Rp = n => Math.sqrt(n[4] * n[4] + n[5] * n[5])
  , h1 = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Op,
    scaleY: Rp,
    scale: n => (Op(n) + Rp(n)) / 2,
    rotateX: n => Vc(ll(Math.atan2(n[6], n[5]))),
    rotateY: n => Vc(ll(Math.atan2(-n[2], n[0]))),
    rotateZ: _p,
    rotate: _p,
    skewX: n => ll(Math.atan(n[4])),
    skewY: n => ll(Math.atan(n[1])),
    skew: n => (Math.abs(n[1]) + Math.abs(n[4])) / 2
};
function zc(n) {
    return n.includes("scale") ? 1 : 0
}
function Uc(n, l) {
    if (!n || n === "none")
        return zc(l);
    const s = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let o, c;
    if (s)
        o = h1,
        c = s;
    else {
        const p = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        o = d1,
        c = p
    }
    if (!c)
        return zc(l);
    const h = o[l]
      , d = c[1].split(",").map(p1);
    return typeof h == "function" ? h(d) : d[h]
}
const m1 = (n, l) => {
    const {transform: s="none"} = getComputedStyle(n);
    return Uc(s, l)
}
;
function p1(n) {
    return parseFloat(n.trim())
}
const es = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , ts = new Set(es)
  , Vp = n => n === Wl || n === je
  , g1 = new Set(["x", "y", "z"])
  , y1 = es.filter(n => !g1.has(n));
function x1(n) {
    const l = [];
    return y1.forEach(s => {
        const o = n.getValue(s);
        o !== void 0 && (l.push([s, o.get()]),
        o.set(s.startsWith("scale") ? 1 : 0))
    }
    ),
    l
}
const sl = {
    width: ({x: n}, {paddingLeft: l="0", paddingRight: s="0"}) => n.max - n.min - parseFloat(l) - parseFloat(s),
    height: ({y: n}, {paddingTop: l="0", paddingBottom: s="0"}) => n.max - n.min - parseFloat(l) - parseFloat(s),
    top: (n, {top: l}) => parseFloat(l),
    left: (n, {left: l}) => parseFloat(l),
    bottom: ({y: n}, {top: l}) => parseFloat(l) + (n.max - n.min),
    right: ({x: n}, {left: l}) => parseFloat(l) + (n.max - n.min),
    x: (n, {transform: l}) => Uc(l, "x"),
    y: (n, {transform: l}) => Uc(l, "y")
};
sl.translateX = sl.x;
sl.translateY = sl.y;
const il = new Set;
let Bc = !1
  , Lc = !1
  , kc = !1;
function b0() {
    if (Lc) {
        const n = Array.from(il).filter(o => o.needsMeasurement)
          , l = new Set(n.map(o => o.element))
          , s = new Map;
        l.forEach(o => {
            const c = x1(o);
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
    Lc = !1,
    Bc = !1,
    il.forEach(n => n.complete(kc)),
    il.clear()
}
function S0() {
    il.forEach(n => {
        n.readKeyframes(),
        n.needsMeasurement && (Lc = !0)
    }
    )
}
function v1() {
    kc = !0,
    S0(),
    b0(),
    kc = !1
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
        this.isAsync ? (il.add(this),
        Bc || (Bc = !0,
        tt.read(S0),
        tt.resolveKeyframes(b0))) : (this.readKeyframes(),
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
        f1(l)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(l=!1) {
        this.state = "complete",
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l),
        il.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (il.delete(this),
        this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const b1 = n => n.startsWith("--");
function S1(n, l, s) {
    b1(l) ? n.style.setProperty(l, s) : n.style[l] = s
}
const j1 = lf( () => window.ScrollTimeline !== void 0)
  , T1 = {};
function w1(n, l) {
    const s = lf(n);
    return () => T1[l] ?? s()
}
const j0 = w1( () => {
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
  , li = ([n,l,s,o]) => `cubic-bezier(${n}, ${l}, ${s}, ${o})`
  , zp = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: li([0, .65, .55, 1]),
    circOut: li([.55, 0, 1, .45]),
    backIn: li([.31, .01, .66, -.59]),
    backOut: li([.33, 1.53, .69, .99])
};
function T0(n, l) {
    if (n)
        return typeof n == "function" ? j0() ? y0(n, l) : "ease-out" : o0(n) ? li(n) : Array.isArray(n) ? n.map(s => T0(s, l) || zp.easeOut) : zp[n]
}
function A1(n, l, s, {delay: o=0, duration: c=300, repeat: h=0, repeatType: d="loop", ease: p="easeOut", times: m}={}, g=void 0) {
    const x = {
        [l]: s
    };
    m && (x.offset = m);
    const v = T0(p, c);
    Array.isArray(v) && (x.easing = v);
    const T = {
        delay: o,
        duration: c,
        easing: Array.isArray(v) ? "linear" : v,
        fill: "both",
        iterations: h + 1,
        direction: d === "reverse" ? "alternate" : "normal"
    };
    return g && (T.pseudoElement = g),
    n.animate(x, T)
}
function w0(n) {
    return typeof n == "function" && "applyToOptions"in n
}
function N1({type: n, ...l}) {
    return w0(n) && j0() ? n.applyToOptions(l) : (l.duration ?? (l.duration = 300),
    l.ease ?? (l.ease = "easeOut"),
    l)
}
class E1 extends gf {
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
        nf(typeof l.type != "string");
        const g = N1(l);
        this.animation = A1(s, o, c, g, h),
        g.autoplay === !1 && this.animation.pause(),
        this.animation.onfinish = () => {
            if (this.finishedTime = this.time,
            !h) {
                const x = pf(c, this.options, p, this.speed);
                this.updateMotionValue ? this.updateMotionValue(x) : S1(s, o, x),
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
        return za(Number(l))
    }
    get time() {
        return za(Number(this.animation.currentTime) || 0)
    }
    set time(l) {
        this.finishedTime = null,
        this.animation.currentTime = Va(l)
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
        l && j1() ? (this.animation.timeline = l,
        pa) : s(this)
    }
}
const A0 = {
    anticipate: n0,
    backInOut: a0,
    circInOut: s0
};
function C1(n) {
    return n in A0
}
function D1(n) {
    typeof n.ease == "string" && C1(n.ease) && (n.ease = A0[n.ease])
}
const Up = 10;
class M1 extends E1 {
    constructor(l) {
        D1(l),
        v0(l),
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
        const p = new yf({
            ...d,
            autoplay: !1
        })
          , m = Va(this.finishedTime ?? this.time);
        s.setWithVelocity(p.sample(m - Up).value, p.sample(m).value, Up),
        p.stop()
    }
}
const Bp = (n, l) => l === "zIndex" ? !1 : !!(typeof n == "number" || Array.isArray(n) || typeof n == "string" && (Vn.test(n) || n === "0") && !n.startsWith("url("));
function _1(n) {
    const l = n[0];
    if (n.length === 1)
        return !0;
    for (let s = 0; s < n.length; s++)
        if (n[s] !== l)
            return !0
}
function O1(n, l, s, o) {
    const c = n[0];
    if (c === null)
        return !1;
    if (l === "display" || l === "visibility")
        return !0;
    const h = n[n.length - 1]
      , d = Bp(c, l)
      , p = Bp(h, l);
    return !d || !p ? !1 : _1(n) || (s === "spring" || w0(s)) && o
}
function vf(n) {
    return Fg(n) && "offsetHeight"in n
}
const R1 = new Set(["opacity", "clipPath", "filter", "transform"])
  , V1 = lf( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
function z1(n) {
    var g;
    const {motionValue: l, name: s, repeatDelay: o, repeatType: c, damping: h, type: d} = n;
    if (!vf((g = l == null ? void 0 : l.owner) == null ? void 0 : g.current))
        return !1;
    const {onUpdate: p, transformTemplate: m} = l.owner.getProps();
    return V1() && s && R1.has(s) && (s !== "transform" || !m) && !p && !o && c !== "mirror" && h !== 0 && d !== "inertia"
}
const U1 = 40;
class B1 extends gf {
    constructor({autoplay: l=!0, delay: s=0, type: o="keyframes", repeat: c=0, repeatDelay: h=0, repeatType: d="loop", keyframes: p, name: m, motionValue: g, element: x, ...v}) {
        var M;
        super(),
        this.stop = () => {
            var V, D;
            this._animation && (this._animation.stop(),
            (V = this.stopTimeline) == null || V.call(this)),
            (D = this.keyframeResolver) == null || D.cancel()
        }
        ,
        this.createdAt = Xt.now();
        const T = {
            autoplay: l,
            delay: s,
            type: o,
            repeat: c,
            repeatDelay: h,
            repeatType: d,
            name: m,
            motionValue: g,
            element: x,
            ...v
        }
          , A = (x == null ? void 0 : x.KeyframeResolver) || xf;
        this.keyframeResolver = new A(p, (V, D, U) => this.onKeyframesResolved(V, D, T, !U),m,g,x),
        (M = this.keyframeResolver) == null || M.scheduleResolve()
    }
    onKeyframesResolved(l, s, o, c) {
        this.keyframeResolver = void 0;
        const {name: h, type: d, velocity: p, delay: m, isHandoff: g, onUpdate: x} = o;
        this.resolvedAt = Xt.now(),
        O1(l, h, d, p) || ((ln.instantAnimations || !m) && (x == null || x(pf(l, o, s))),
        l[0] = l[l.length - 1],
        o.duration = 0,
        o.repeat = 0);
        const T = {
            startTime: c ? this.resolvedAt ? this.resolvedAt - this.createdAt > U1 ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: s,
            ...o,
            keyframes: l
        }
          , A = !g && z1(T) ? new M1({
            ...T,
            element: T.motionValue.owner.current
        }) : new yf(T);
        A.finished.then( () => this.notifyFinished()).catch(pa),
        this.pendingTimeline && (this.stopTimeline = A.attachTimeline(this.pendingTimeline),
        this.pendingTimeline = void 0),
        this._animation = A
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
        v1()),
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
const L1 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function k1(n) {
    const l = L1.exec(n);
    if (!l)
        return [, ];
    const [,s,o,c] = l;
    return [`--${s ?? o}`, c]
}
function N0(n, l, s=1) {
    const [o,c] = k1(n);
    if (!o)
        return;
    const h = window.getComputedStyle(l).getPropertyValue(o);
    if (h) {
        const d = h.trim();
        return Qg(d) ? parseFloat(d) : d
    }
    return cf(c) ? N0(c, l, s + 1) : c
}
function bf(n, l) {
    return (n == null ? void 0 : n[l]) ?? (n == null ? void 0 : n.default) ?? n
}
const E0 = new Set(["width", "height", "top", "left", "right", "bottom", ...es])
  , H1 = {
    test: n => n === "auto",
    parse: n => n
}
  , C0 = n => l => l.test(n)
  , D0 = [Wl, je, Ua, _n, _b, Mb, H1]
  , Lp = n => D0.find(C0(n));
function P1(n) {
    return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || Jg(n) : !0
}
const q1 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Y1(n) {
    const [l,s] = n.slice(0, -1).split("(");
    if (l === "drop-shadow")
        return n;
    const [o] = s.match(ff) || [];
    if (!o)
        return n;
    const c = s.replace(o, "");
    let h = q1.has(l) ? 1 : 0;
    return o !== s && (h *= 100),
    l + "(" + h + c + ")"
}
const G1 = /\b([a-z-]*)\(.*?\)/gu
  , Hc = {
    ...Vn,
    getAnimatableNone: n => {
        const l = n.match(G1);
        return l ? l.map(Y1).join(" ") : n
    }
}
  , kp = {
    ...Wl,
    transform: Math.round
}
  , X1 = {
    rotate: _n,
    rotateX: _n,
    rotateY: _n,
    rotateZ: _n,
    scale: ko,
    scaleX: ko,
    scaleY: ko,
    scaleZ: ko,
    skew: _n,
    skewX: _n,
    skewY: _n,
    distance: je,
    translateX: je,
    translateY: je,
    translateZ: je,
    x: je,
    y: je,
    z: je,
    perspective: je,
    transformPerspective: je,
    opacity: di,
    originX: Np,
    originY: Np,
    originZ: je
}
  , Sf = {
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
    ...X1,
    zIndex: kp,
    fillOpacity: di,
    strokeOpacity: di,
    numOctaves: kp
}
  , K1 = {
    ...Sf,
    color: gt,
    backgroundColor: gt,
    outlineColor: gt,
    fill: gt,
    stroke: gt,
    borderColor: gt,
    borderTopColor: gt,
    borderRightColor: gt,
    borderBottomColor: gt,
    borderLeftColor: gt,
    filter: Hc,
    WebkitFilter: Hc
}
  , M0 = n => K1[n];
function _0(n, l) {
    let s = M0(n);
    return s !== Hc && (s = Vn),
    s.getAnimatableNone ? s.getAnimatableNone(l) : void 0
}
const Z1 = new Set(["auto", "none", "0"]);
function Q1(n, l, s) {
    let o = 0, c;
    for (; o < n.length && !c; ) {
        const h = n[o];
        typeof h == "string" && !Z1.has(h) && hi(h).values.length && (c = n[o]),
        o++
    }
    if (c && s)
        for (const h of l)
            n[h] = _0(s, c)
}
class F1 extends xf {
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
            cf(g))) {
                const x = N0(g, s.current);
                x !== void 0 && (l[m] = x),
                m === l.length - 1 && (this.finalKeyframe = g)
            }
        }
        if (this.resolveNoneKeyframes(),
        !E0.has(o) || l.length !== 2)
            return;
        const [c,h] = l
          , d = Lp(c)
          , p = Lp(h);
        if (d !== p)
            if (Vp(d) && Vp(p))
                for (let m = 0; m < l.length; m++) {
                    const g = l[m];
                    typeof g == "string" && (l[m] = parseFloat(g))
                }
            else
                sl[o] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: l, name: s} = this
          , o = [];
        for (let c = 0; c < l.length; c++)
            (l[c] === null || P1(l[c])) && o.push(c);
        o.length && Q1(l, o, s)
    }
    measureInitialState() {
        const {element: l, unresolvedKeyframes: s, name: o} = this;
        if (!l || !l.current)
            return;
        o === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = sl[o](l.measureViewportBox(), window.getComputedStyle(l.current)),
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
        o[h] = sl[s](l.measureViewportBox(), window.getComputedStyle(l.current)),
        d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d),
        (p = this.removedTransforms) != null && p.length && this.removedTransforms.forEach( ([m,g]) => {
            l.getValue(m).set(g)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
function J1(n, l, s) {
    if (n instanceof EventTarget)
        return [n];
    if (typeof n == "string") {
        let o = document;
        const c = (s == null ? void 0 : s[n]) ?? o.querySelectorAll(n);
        return c ? Array.from(c) : []
    }
    return Array.from(n)
}
const O0 = (n, l) => l && typeof n == "number" ? l.transform(n) : n
  , Hp = 30
  , I1 = n => !isNaN(parseFloat(n));
class $1 {
    constructor(l, s={}) {
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (o, c=!0) => {
            var d, p;
            const h = Xt.now();
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
        this.updatedAt = Xt.now(),
        this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = I1(this.current))
    }
    setPrevFrameValue(l=this.current) {
        this.prevFrameValue = l,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(l) {
        return this.on("change", l)
    }
    on(l, s) {
        this.events[l] || (this.events[l] = new sf);
        const o = this.events[l].add(s);
        return l === "change" ? () => {
            o(),
            tt.read( () => {
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
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > Hp)
            return 0;
        const s = Math.min(this.updatedAt - this.prevUpdatedAt, Hp);
        return Ig(parseFloat(this.current) - parseFloat(this.prevFrameValue), s)
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
function Il(n, l) {
    return new $1(n,l)
}
const {schedule: jf} = r0(queueMicrotask, !1)
  , Ta = {
    x: !1,
    y: !1
};
function R0() {
    return Ta.x || Ta.y
}
function W1(n) {
    return n === "x" || n === "y" ? Ta[n] ? null : (Ta[n] = !0,
    () => {
        Ta[n] = !1
    }
    ) : Ta.x || Ta.y ? null : (Ta.x = Ta.y = !0,
    () => {
        Ta.x = Ta.y = !1
    }
    )
}
function V0(n, l) {
    const s = J1(n)
      , o = new AbortController
      , c = {
        passive: !0,
        ...l,
        signal: o.signal
    };
    return [s, c, () => o.abort()]
}
function Pp(n) {
    return !(n.pointerType === "touch" || R0())
}
function e2(n, l, s={}) {
    const [o,c,h] = V0(n, s)
      , d = p => {
        if (!Pp(p))
            return;
        const {target: m} = p
          , g = l(m, p);
        if (typeof g != "function" || !m)
            return;
        const x = v => {
            Pp(v) && (g(v),
            m.removeEventListener("pointerleave", x))
        }
        ;
        m.addEventListener("pointerleave", x, c)
    }
    ;
    return o.forEach(p => {
        p.addEventListener("pointerenter", d, c)
    }
    ),
    h
}
const z0 = (n, l) => l ? n === l ? !0 : z0(n, l.parentElement) : !1
  , Tf = n => n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1
  , t2 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function a2(n) {
    return t2.has(n.tagName) || n.tabIndex !== -1
}
const Yo = new WeakSet;
function qp(n) {
    return l => {
        l.key === "Enter" && n(l)
    }
}
function bc(n, l) {
    n.dispatchEvent(new PointerEvent("pointer" + l,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const n2 = (n, l) => {
    const s = n.currentTarget;
    if (!s)
        return;
    const o = qp( () => {
        if (Yo.has(s))
            return;
        bc(s, "down");
        const c = qp( () => {
            bc(s, "up")
        }
        )
          , h = () => bc(s, "cancel");
        s.addEventListener("keyup", c, l),
        s.addEventListener("blur", h, l)
    }
    );
    s.addEventListener("keydown", o, l),
    s.addEventListener("blur", () => s.removeEventListener("keydown", o), l)
}
;
function Yp(n) {
    return Tf(n) && !R0()
}
function l2(n, l, s={}) {
    const [o,c,h] = V0(n, s)
      , d = p => {
        const m = p.currentTarget;
        if (!Yp(p))
            return;
        Yo.add(m);
        const g = l(m, p)
          , x = (A, M) => {
            window.removeEventListener("pointerup", v),
            window.removeEventListener("pointercancel", T),
            Yo.has(m) && Yo.delete(m),
            Yp(A) && typeof g == "function" && g(A, {
                success: M
            })
        }
          , v = A => {
            x(A, m === window || m === document || s.useGlobalTarget || z0(m, A.target))
        }
          , T = A => {
            x(A, !1)
        }
        ;
        window.addEventListener("pointerup", v, c),
        window.addEventListener("pointercancel", T, c)
    }
    ;
    return o.forEach(p => {
        (s.useGlobalTarget ? window : p).addEventListener("pointerdown", d, c),
        vf(p) && (p.addEventListener("focus", g => n2(g, c)),
        !a2(p) && !p.hasAttribute("tabindex") && (p.tabIndex = 0))
    }
    ),
    h
}
function U0(n) {
    return Fg(n) && "ownerSVGElement"in n
}
function s2(n) {
    return U0(n) && n.tagName === "svg"
}
const zt = n => !!(n && n.getVelocity)
  , i2 = [...D0, gt, Vn]
  , o2 = n => i2.find(C0(n))
  , wf = S.createContext({
    transformPagePoint: n => n,
    isStatic: !1,
    reducedMotion: "never"
});
class r2 extends S.Component {
    getSnapshotBeforeUpdate(l) {
        const s = this.props.childRef.current;
        if (s && l.isPresent && !this.props.isPresent) {
            const o = s.offsetParent
              , c = vf(o) && o.offsetWidth || 0
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
function u2({children: n, isPresent: l, anchorX: s}) {
    const o = S.useId()
      , c = S.useRef(null)
      , h = S.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0
    })
      , {nonce: d} = S.useContext(wf);
    return S.useInsertionEffect( () => {
        const {width: p, height: m, top: g, left: x, right: v} = h.current;
        if (l || !c.current || !p || !m)
            return;
        const T = s === "left" ? `left: ${x}` : `right: ${v}`;
        c.current.dataset.motionPopId = o;
        const A = document.createElement("style");
        return d && (A.nonce = d),
        document.head.appendChild(A),
        A.sheet && A.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${m}px !important;
            ${T}px !important;
            top: ${g}px !important;
          }
        `),
        () => {
            document.head.contains(A) && document.head.removeChild(A)
        }
    }
    , [l]),
    f.jsx(r2, {
        isPresent: l,
        childRef: c,
        sizeRef: h,
        children: S.cloneElement(n, {
            ref: c
        })
    })
}
const c2 = ({children: n, initial: l, isPresent: s, onExitComplete: o, custom: c, presenceAffectsLayout: h, mode: d, anchorX: p}) => {
    const m = Wc(f2)
      , g = S.useId();
    let x = !0
      , v = S.useMemo( () => (x = !1,
    {
        id: g,
        initial: l,
        isPresent: s,
        custom: c,
        onExitComplete: T => {
            m.set(T, !0);
            for (const A of m.values())
                if (!A)
                    return;
            o && o()
        }
        ,
        register: T => (m.set(T, !1),
        () => m.delete(T))
    }), [s, m, o]);
    return h && x && (v = {
        ...v
    }),
    S.useMemo( () => {
        m.forEach( (T, A) => m.set(A, !1))
    }
    , [s]),
    S.useEffect( () => {
        !s && !m.size && o && o()
    }
    , [s]),
    d === "popLayout" && (n = f.jsx(u2, {
        isPresent: s,
        anchorX: p,
        children: n
    })),
    f.jsx(Io.Provider, {
        value: v,
        children: n
    })
}
;
function f2() {
    return new Map
}
function B0(n=!0) {
    const l = S.useContext(Io);
    if (l === null)
        return [!0, null];
    const {isPresent: s, onExitComplete: o, register: c} = l
      , h = S.useId();
    S.useEffect( () => {
        if (n)
            return c(h)
    }
    , [n]);
    const d = S.useCallback( () => n && o && o(h), [h, o, n]);
    return !s && o ? [!1, d] : [!0]
}
const Ho = n => n.key || "";
function Gp(n) {
    const l = [];
    return S.Children.forEach(n, s => {
        S.isValidElement(s) && l.push(s)
    }
    ),
    l
}
const L0 = ({children: n, custom: l, initial: s=!0, onExitComplete: o, presenceAffectsLayout: c=!0, mode: h="sync", propagate: d=!1, anchorX: p="left"}) => {
    const [m,g] = B0(d)
      , x = S.useMemo( () => Gp(n), [n])
      , v = d && !m ? [] : x.map(Ho)
      , T = S.useRef(!0)
      , A = S.useRef(x)
      , M = Wc( () => new Map)
      , [V,D] = S.useState(x)
      , [U,L] = S.useState(x);
    Zg( () => {
        T.current = !1,
        A.current = x;
        for (let _ = 0; _ < U.length; _++) {
            const $ = Ho(U[_]);
            v.includes($) ? M.delete($) : M.get($) !== !0 && M.set($, !1)
        }
    }
    , [U, v.length, v.join("-")]);
    const B = [];
    if (x !== V) {
        let _ = [...x];
        for (let $ = 0; $ < U.length; $++) {
            const ee = U[$]
              , J = Ho(ee);
            v.includes(J) || (_.splice($, 0, ee),
            B.push(ee))
        }
        return h === "wait" && B.length && (_ = B),
        L(Gp(_)),
        D(x),
        null
    }
    const {forceRender: Q} = S.useContext($c);
    return f.jsx(f.Fragment, {
        children: U.map(_ => {
            const $ = Ho(_)
              , ee = d && !m ? !1 : x === U || v.includes($)
              , J = () => {
                if (M.has($))
                    M.set($, !0);
                else
                    return;
                let ie = !0;
                M.forEach(me => {
                    me || (ie = !1)
                }
                ),
                ie && (Q == null || Q(),
                L(A.current),
                d && (g == null || g()),
                o && o())
            }
            ;
            return f.jsx(c2, {
                isPresent: ee,
                initial: !T.current || s ? void 0 : !1,
                custom: l,
                presenceAffectsLayout: c,
                mode: h,
                onExitComplete: ee ? void 0 : J,
                anchorX: p,
                children: _
            }, $)
        }
        )
    })
}
  , k0 = S.createContext({
    strict: !1
})
  , Xp = {
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
  , $l = {};
for (const n in Xp)
    $l[n] = {
        isEnabled: l => Xp[n].some(s => !!l[s])
    };
function d2(n) {
    for (const l in n)
        $l[l] = {
            ...$l[l],
            ...n[l]
        }
}
const h2 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Fo(n) {
    return n.startsWith("while") || n.startsWith("drag") && n !== "draggable" || n.startsWith("layout") || n.startsWith("onTap") || n.startsWith("onPan") || n.startsWith("onLayout") || h2.has(n)
}
let H0 = n => !Fo(n);
function m2(n) {
    typeof n == "function" && (H0 = l => l.startsWith("on") ? !Fo(l) : n(l))
}
try {
    m2(require("@emotion/is-prop-valid").default)
} catch {}
function p2(n, l, s) {
    const o = {};
    for (const c in n)
        c === "values" && typeof n.values == "object" || (H0(c) || s === !0 && Fo(c) || !l && !Fo(c) || n.draggable && c.startsWith("onDrag")) && (o[c] = n[c]);
    return o
}
function g2(n) {
    if (typeof Proxy > "u")
        return n;
    const l = new Map
      , s = (...o) => n(...o);
    return new Proxy(s,{
        get: (o, c) => c === "create" ? n : (l.has(c) || l.set(c, n(c)),
        l.get(c))
    })
}
const $o = S.createContext({});
function Wo(n) {
    return n !== null && typeof n == "object" && typeof n.start == "function"
}
function mi(n) {
    return typeof n == "string" || Array.isArray(n)
}
const Af = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Nf = ["initial", ...Af];
function er(n) {
    return Wo(n.animate) || Nf.some(l => mi(n[l]))
}
function P0(n) {
    return !!(er(n) || n.variants)
}
function y2(n, l) {
    if (er(n)) {
        const {initial: s, animate: o} = n;
        return {
            initial: s === !1 || mi(s) ? s : void 0,
            animate: mi(o) ? o : void 0
        }
    }
    return n.inherit !== !1 ? l : {}
}
function x2(n) {
    const {initial: l, animate: s} = y2(n, S.useContext($o));
    return S.useMemo( () => ({
        initial: l,
        animate: s
    }), [Kp(l), Kp(s)])
}
function Kp(n) {
    return Array.isArray(n) ? n.join(" ") : n
}
const v2 = Symbol.for("motionComponentSymbol");
function Zl(n) {
    return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current")
}
function b2(n, l, s) {
    return S.useCallback(o => {
        o && n.onMount && n.onMount(o),
        l && (o ? l.mount(o) : l.unmount()),
        s && (typeof s == "function" ? s(o) : Zl(s) && (s.current = o))
    }
    , [l])
}
const Ef = n => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , S2 = "framerAppearId"
  , q0 = "data-" + Ef(S2)
  , Y0 = S.createContext({});
function j2(n, l, s, o, c) {
    var V, D;
    const {visualElement: h} = S.useContext($o)
      , d = S.useContext(k0)
      , p = S.useContext(Io)
      , m = S.useContext(wf).reducedMotion
      , g = S.useRef(null);
    o = o || d.renderer,
    !g.current && o && (g.current = o(n, {
        visualState: l,
        parent: h,
        props: s,
        presenceContext: p,
        blockInitialAnimation: p ? p.initial === !1 : !1,
        reducedMotionConfig: m
    }));
    const x = g.current
      , v = S.useContext(Y0);
    x && !x.projection && c && (x.type === "html" || x.type === "svg") && T2(g.current, s, c, v);
    const T = S.useRef(!1);
    S.useInsertionEffect( () => {
        x && T.current && x.update(s, p)
    }
    );
    const A = s[q0]
      , M = S.useRef(!!A && !((V = window.MotionHandoffIsComplete) != null && V.call(window, A)) && ((D = window.MotionHasOptimisedAnimation) == null ? void 0 : D.call(window, A)));
    return Zg( () => {
        x && (T.current = !0,
        window.MotionIsMounted = !0,
        x.updateFeatures(),
        jf.render(x.render),
        M.current && x.animationState && x.animationState.animateChanges())
    }
    ),
    S.useEffect( () => {
        x && (!M.current && x.animationState && x.animationState.animateChanges(),
        M.current && (queueMicrotask( () => {
            var U;
            (U = window.MotionHandoffMarkAsComplete) == null || U.call(window, A)
        }
        ),
        M.current = !1))
    }
    ),
    x
}
function T2(n, l, s, o) {
    const {layoutId: c, layout: h, drag: d, dragConstraints: p, layoutScroll: m, layoutRoot: g, layoutCrossfade: x} = l;
    n.projection = new s(n.latestValues,l["data-framer-portal-id"] ? void 0 : G0(n.parent)),
    n.projection.setOptions({
        layoutId: c,
        layout: h,
        alwaysMeasureLayout: !!d || p && Zl(p),
        visualElement: n,
        animationType: typeof h == "string" ? h : "both",
        initialPromotionConfig: o,
        crossfade: x,
        layoutScroll: m,
        layoutRoot: g
    })
}
function G0(n) {
    if (n)
        return n.options.allowProjection !== !1 ? n.projection : G0(n.parent)
}
function w2({preloadedFeatures: n, createVisualElement: l, useRender: s, useVisualState: o, Component: c}) {
    n && d2(n);
    function h(p, m) {
        let g;
        const x = {
            ...S.useContext(wf),
            ...p,
            layoutId: A2(p)
        }
          , {isStatic: v} = x
          , T = x2(p)
          , A = o(p, v);
        if (!v && ef) {
            N2();
            const M = E2(x);
            g = M.MeasureLayout,
            T.visualElement = j2(c, A, x, l, M.ProjectionNode)
        }
        return f.jsxs($o.Provider, {
            value: T,
            children: [g && T.visualElement ? f.jsx(g, {
                visualElement: T.visualElement,
                ...x
            }) : null, s(c, p, b2(A, T.visualElement, m), A, v, T.visualElement)]
        })
    }
    h.displayName = `motion.${typeof c == "string" ? c : `create(${c.displayName ?? c.name ?? ""})`}`;
    const d = S.forwardRef(h);
    return d[v2] = c,
    d
}
function A2({layoutId: n}) {
    const l = S.useContext($c).id;
    return l && n !== void 0 ? l + "-" + n : n
}
function N2(n, l) {
    S.useContext(k0).strict
}
function E2(n) {
    const {drag: l, layout: s} = $l;
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
function C2(n) {
    for (const l in n)
        pi[l] = n[l],
        uf(l) && (pi[l].isCSSVariable = !0)
}
function X0(n, {layout: l, layoutId: s}) {
    return ts.has(n) || n.startsWith("origin") || (l || s !== void 0) && (!!pi[n] || n === "opacity")
}
const D2 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , M2 = es.length;
function _2(n, l, s) {
    let o = ""
      , c = !0;
    for (let h = 0; h < M2; h++) {
        const d = es[h]
          , p = n[d];
        if (p === void 0)
            continue;
        let m = !0;
        if (typeof p == "number" ? m = p === (d.startsWith("scale") ? 1 : 0) : m = parseFloat(p) === 0,
        !m || s) {
            const g = O0(p, Sf[d]);
            if (!m) {
                c = !1;
                const x = D2[d] || d;
                o += `${x}(${g}) `
            }
            s && (l[d] = g)
        }
    }
    return o = o.trim(),
    s ? o = s(l, c ? "" : o) : c && (o = "none"),
    o
}
function Cf(n, l, s) {
    const {style: o, vars: c, transformOrigin: h} = n;
    let d = !1
      , p = !1;
    for (const m in l) {
        const g = l[m];
        if (ts.has(m)) {
            d = !0;
            continue
        } else if (uf(m)) {
            c[m] = g;
            continue
        } else {
            const x = O0(g, Sf[m]);
            m.startsWith("origin") ? (p = !0,
            h[m] = x) : o[m] = x
        }
    }
    if (l.transform || (d || s ? o.transform = _2(l, n.transform, s) : o.transform && (o.transform = "none")),
    p) {
        const {originX: m="50%", originY: g="50%", originZ: x=0} = h;
        o.transformOrigin = `${m} ${g} ${x}`
    }
}
const Df = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function K0(n, l, s) {
    for (const o in l)
        !zt(l[o]) && !X0(o, s) && (n[o] = l[o])
}
function O2({transformTemplate: n}, l) {
    return S.useMemo( () => {
        const s = Df();
        return Cf(s, l, n),
        Object.assign({}, s.vars, s.style)
    }
    , [l])
}
function R2(n, l) {
    const s = n.style || {}
      , o = {};
    return K0(o, s, n),
    Object.assign(o, O2(n, l)),
    o
}
function V2(n, l) {
    const s = {}
      , o = R2(n, l);
    return n.drag && n.dragListener !== !1 && (s.draggable = !1,
    o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none",
    o.touchAction = n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`),
    n.tabIndex === void 0 && (n.onTap || n.onTapStart || n.whileTap) && (s.tabIndex = 0),
    s.style = o,
    s
}
const z2 = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , U2 = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function B2(n, l, s=1, o=0, c=!0) {
    n.pathLength = 1;
    const h = c ? z2 : U2;
    n[h.offset] = je.transform(-o);
    const d = je.transform(l)
      , p = je.transform(s);
    n[h.array] = `${d} ${p}`
}
function Z0(n, {attrX: l, attrY: s, attrScale: o, pathLength: c, pathSpacing: h=1, pathOffset: d=0, ...p}, m, g, x) {
    if (Cf(n, p, g),
    m) {
        n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
        return
    }
    n.attrs = n.style,
    n.style = {};
    const {attrs: v, style: T} = n;
    v.transform && (T.transform = v.transform,
    delete v.transform),
    (T.transform || v.transformOrigin) && (T.transformOrigin = v.transformOrigin ?? "50% 50%",
    delete v.transformOrigin),
    T.transform && (T.transformBox = (x == null ? void 0 : x.transformBox) ?? "fill-box",
    delete v.transformBox),
    l !== void 0 && (v.x = l),
    s !== void 0 && (v.y = s),
    o !== void 0 && (v.scale = o),
    c !== void 0 && B2(v, c, h, d, !1)
}
const Q0 = () => ({
    ...Df(),
    attrs: {}
})
  , F0 = n => typeof n == "string" && n.toLowerCase() === "svg";
function L2(n, l, s, o) {
    const c = S.useMemo( () => {
        const h = Q0();
        return Z0(h, l, F0(o), n.transformTemplate, n.style),
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
        K0(h, n.style, n),
        c.style = {
            ...h,
            ...c.style
        }
    }
    return c
}
const k2 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Mf(n) {
    return typeof n != "string" || n.includes("-") ? !1 : !!(k2.indexOf(n) > -1 || /[A-Z]/u.test(n))
}
function H2(n=!1) {
    return (s, o, c, {latestValues: h}, d) => {
        const m = (Mf(s) ? L2 : V2)(o, h, d, s)
          , g = p2(o, typeof s == "string", n)
          , x = s !== S.Fragment ? {
            ...g,
            ...m,
            ref: c
        } : {}
          , {children: v} = o
          , T = S.useMemo( () => zt(v) ? v.get() : v, [v]);
        return S.createElement(s, {
            ...x,
            children: T
        })
    }
}
function Zp(n) {
    const l = [{}, {}];
    return n == null || n.values.forEach( (s, o) => {
        l[0][o] = s.get(),
        l[1][o] = s.getVelocity()
    }
    ),
    l
}
function _f(n, l, s, o) {
    if (typeof l == "function") {
        const [c,h] = Zp(o);
        l = l(s !== void 0 ? s : n.custom, c, h)
    }
    if (typeof l == "string" && (l = n.variants && n.variants[l]),
    typeof l == "function") {
        const [c,h] = Zp(o);
        l = l(s !== void 0 ? s : n.custom, c, h)
    }
    return l
}
function Go(n) {
    return zt(n) ? n.get() : n
}
function P2({scrapeMotionValuesFromProps: n, createRenderState: l}, s, o, c) {
    return {
        latestValues: q2(s, o, c, n),
        renderState: l()
    }
}
const J0 = n => (l, s) => {
    const o = S.useContext($o)
      , c = S.useContext(Io)
      , h = () => P2(n, l, o, c);
    return s ? h() : Wc(h)
}
;
function q2(n, l, s, o) {
    const c = {}
      , h = o(n, {});
    for (const T in h)
        c[T] = Go(h[T]);
    let {initial: d, animate: p} = n;
    const m = er(n)
      , g = P0(n);
    l && g && !m && n.inherit !== !1 && (d === void 0 && (d = l.initial),
    p === void 0 && (p = l.animate));
    let x = s ? s.initial === !1 : !1;
    x = x || d === !1;
    const v = x ? p : d;
    if (v && typeof v != "boolean" && !Wo(v)) {
        const T = Array.isArray(v) ? v : [v];
        for (let A = 0; A < T.length; A++) {
            const M = _f(n, T[A]);
            if (M) {
                const {transitionEnd: V, transition: D, ...U} = M;
                for (const L in U) {
                    let B = U[L];
                    if (Array.isArray(B)) {
                        const Q = x ? B.length - 1 : 0;
                        B = B[Q]
                    }
                    B !== null && (c[L] = B)
                }
                for (const L in V)
                    c[L] = V[L]
            }
        }
    }
    return c
}
function Of(n, l, s) {
    var h;
    const {style: o} = n
      , c = {};
    for (const d in o)
        (zt(o[d]) || l.style && zt(l.style[d]) || X0(d, n) || ((h = s == null ? void 0 : s.getValue(d)) == null ? void 0 : h.liveStyle) !== void 0) && (c[d] = o[d]);
    return c
}
const Y2 = {
    useVisualState: J0({
        scrapeMotionValuesFromProps: Of,
        createRenderState: Df
    })
};
function I0(n, l, s) {
    const o = Of(n, l, s);
    for (const c in n)
        if (zt(n[c]) || zt(l[c])) {
            const h = es.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
            o[h] = n[c]
        }
    return o
}
const G2 = {
    useVisualState: J0({
        scrapeMotionValuesFromProps: I0,
        createRenderState: Q0
    })
};
function X2(n, l) {
    return function(o, {forwardMotionProps: c}={
        forwardMotionProps: !1
    }) {
        const d = {
            ...Mf(o) ? G2 : Y2,
            preloadedFeatures: n,
            useRender: H2(c),
            createVisualElement: l,
            Component: o
        };
        return w2(d)
    }
}
function gi(n, l, s) {
    const o = n.getProps();
    return _f(o, l, s !== void 0 ? s : o.custom, n)
}
const Pc = n => Array.isArray(n);
function K2(n, l, s) {
    n.hasValue(l) ? n.getValue(l).set(s) : n.addValue(l, Il(s))
}
function Z2(n) {
    return Pc(n) ? n[n.length - 1] || 0 : n
}
function Q2(n, l) {
    const s = gi(n, l);
    let {transitionEnd: o={}, transition: c={}, ...h} = s || {};
    h = {
        ...h,
        ...o
    };
    for (const d in h) {
        const p = Z2(h[d]);
        K2(n, d, p)
    }
}
function F2(n) {
    return !!(zt(n) && n.add)
}
function qc(n, l) {
    const s = n.getValue("willChange");
    if (F2(s))
        return s.add(l);
    if (!s && ln.WillChange) {
        const o = new ln.WillChange("auto");
        n.addValue("willChange", o),
        o.add(l)
    }
}
function $0(n) {
    return n.props[q0]
}
const J2 = n => n !== null;
function I2(n, {repeat: l, repeatType: s="loop"}, o) {
    const c = n.filter(J2)
      , h = l && s !== "loop" && l % 2 === 1 ? 0 : c.length - 1;
    return c[h]
}
const $2 = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , W2 = n => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , eS = {
    type: "keyframes",
    duration: .8
}
  , tS = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , aS = (n, {keyframes: l}) => l.length > 2 ? eS : ts.has(n) ? n.startsWith("scale") ? W2(l[1]) : $2 : tS;
function nS({when: n, delay: l, delayChildren: s, staggerChildren: o, staggerDirection: c, repeat: h, repeatType: d, repeatDelay: p, from: m, elapsed: g, ...x}) {
    return !!Object.keys(x).length
}
const Rf = (n, l, s, o={}, c, h) => d => {
    const p = bf(o, n) || {}
      , m = p.delay || o.delay || 0;
    let {elapsed: g=0} = o;
    g = g - Va(m);
    const x = {
        keyframes: Array.isArray(s) ? s : [null, s],
        ease: "easeOut",
        velocity: l.getVelocity(),
        ...p,
        delay: -g,
        onUpdate: T => {
            l.set(T),
            p.onUpdate && p.onUpdate(T)
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
    nS(p) || Object.assign(x, aS(n, x)),
    x.duration && (x.duration = Va(x.duration)),
    x.repeatDelay && (x.repeatDelay = Va(x.repeatDelay)),
    x.from !== void 0 && (x.keyframes[0] = x.from);
    let v = !1;
    if ((x.type === !1 || x.duration === 0 && !x.repeatDelay) && (x.duration = 0,
    x.delay === 0 && (v = !0)),
    (ln.instantAnimations || ln.skipAnimations) && (v = !0,
    x.duration = 0,
    x.delay = 0),
    x.allowFlatten = !p.type && !p.ease,
    v && !h && l.get() !== void 0) {
        const T = I2(x.keyframes, p);
        if (T !== void 0) {
            tt.update( () => {
                x.onUpdate(T),
                x.onComplete()
            }
            );
            return
        }
    }
    return p.isSync ? new yf(x) : new B1(x)
}
;
function lS({protectedKeys: n, needsAnimating: l}, s) {
    const o = n.hasOwnProperty(s) && l[s] !== !0;
    return l[s] = !1,
    o
}
function W0(n, l, {delay: s=0, transitionOverride: o, type: c}={}) {
    let {transition: h=n.getDefaultTransition(), transitionEnd: d, ...p} = l;
    o && (h = o);
    const m = []
      , g = c && n.animationState && n.animationState.getState()[c];
    for (const x in p) {
        const v = n.getValue(x, n.latestValues[x] ?? null)
          , T = p[x];
        if (T === void 0 || g && lS(g, x))
            continue;
        const A = {
            delay: s,
            ...bf(h || {}, x)
        }
          , M = v.get();
        if (M !== void 0 && !v.isAnimating && !Array.isArray(T) && T === M && !A.velocity)
            continue;
        let V = !1;
        if (window.MotionHandoffAnimation) {
            const U = $0(n);
            if (U) {
                const L = window.MotionHandoffAnimation(U, x, tt);
                L !== null && (A.startTime = L,
                V = !0)
            }
        }
        qc(n, x),
        v.start(Rf(x, v, T, n.shouldReduceMotion && E0.has(x) ? {
            type: !1
        } : A, n, V));
        const D = v.animation;
        D && m.push(D)
    }
    return d && Promise.all(m).then( () => {
        tt.update( () => {
            d && Q2(n, d)
        }
        )
    }
    ),
    m
}
function Yc(n, l, s={}) {
    var m;
    const o = gi(n, l, s.type === "exit" ? (m = n.presenceContext) == null ? void 0 : m.custom : void 0);
    let {transition: c=n.getDefaultTransition() || {}} = o || {};
    s.transitionOverride && (c = s.transitionOverride);
    const h = o ? () => Promise.all(W0(n, o, s)) : () => Promise.resolve()
      , d = n.variantChildren && n.variantChildren.size ? (g=0) => {
        const {delayChildren: x=0, staggerChildren: v, staggerDirection: T} = c;
        return sS(n, l, x + g, v, T, s)
    }
    : () => Promise.resolve()
      , {when: p} = c;
    if (p) {
        const [g,x] = p === "beforeChildren" ? [h, d] : [d, h];
        return g().then( () => x())
    } else
        return Promise.all([h(), d(s.delay)])
}
function sS(n, l, s=0, o=0, c=1, h) {
    const d = []
      , p = (n.variantChildren.size - 1) * o
      , m = c === 1 ? (g=0) => g * o : (g=0) => p - g * o;
    return Array.from(n.variantChildren).sort(iS).forEach( (g, x) => {
        g.notify("AnimationStart", l),
        d.push(Yc(g, l, {
            ...h,
            delay: s + m(x)
        }).then( () => g.notify("AnimationComplete", l)))
    }
    ),
    Promise.all(d)
}
function iS(n, l) {
    return n.sortNodePosition(l)
}
function oS(n, l, s={}) {
    n.notify("AnimationStart", l);
    let o;
    if (Array.isArray(l)) {
        const c = l.map(h => Yc(n, h, s));
        o = Promise.all(c)
    } else if (typeof l == "string")
        o = Yc(n, l, s);
    else {
        const c = typeof l == "function" ? gi(n, l, s.custom) : l;
        o = Promise.all(W0(n, c, s))
    }
    return o.then( () => {
        n.notify("AnimationComplete", l)
    }
    )
}
function ey(n, l) {
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
const rS = Nf.length;
function ty(n) {
    if (!n)
        return;
    if (!n.isControllingVariants) {
        const s = n.parent ? ty(n.parent) || {} : {};
        return n.props.initial !== void 0 && (s.initial = n.props.initial),
        s
    }
    const l = {};
    for (let s = 0; s < rS; s++) {
        const o = Nf[s]
          , c = n.props[o];
        (mi(c) || c === !1) && (l[o] = c)
    }
    return l
}
const uS = [...Af].reverse()
  , cS = Af.length;
function fS(n) {
    return l => Promise.all(l.map( ({animation: s, options: o}) => oS(n, s, o)))
}
function dS(n) {
    let l = fS(n)
      , s = Qp()
      , o = !0;
    const c = m => (g, x) => {
        var T;
        const v = gi(n, x, m === "exit" ? (T = n.presenceContext) == null ? void 0 : T.custom : void 0);
        if (v) {
            const {transition: A, transitionEnd: M, ...V} = v;
            g = {
                ...g,
                ...V,
                ...M
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
          , x = ty(n.parent) || {}
          , v = []
          , T = new Set;
        let A = {}
          , M = 1 / 0;
        for (let D = 0; D < cS; D++) {
            const U = uS[D]
              , L = s[U]
              , B = g[U] !== void 0 ? g[U] : x[U]
              , Q = mi(B)
              , _ = U === m ? L.isActive : null;
            _ === !1 && (M = D);
            let $ = B === x[U] && B !== g[U] && Q;
            if ($ && o && n.manuallyAnimateOnMount && ($ = !1),
            L.protectedKeys = {
                ...A
            },
            !L.isActive && _ === null || !B && !L.prevProp || Wo(B) || typeof B == "boolean")
                continue;
            const ee = hS(L.prevProp, B);
            let J = ee || U === m && L.isActive && !$ && Q || D > M && Q
              , ie = !1;
            const me = Array.isArray(B) ? B : [B];
            let ge = me.reduce(c(U), {});
            _ === !1 && (ge = {});
            const {prevResolvedValues: he={}} = L
              , ue = {
                ...he,
                ...ge
            }
              , W = O => {
                J = !0,
                T.has(O) && (ie = !0,
                T.delete(O)),
                L.needsAnimating[O] = !0;
                const Y = n.getValue(O);
                Y && (Y.liveStyle = !1)
            }
            ;
            for (const O in ue) {
                const Y = ge[O]
                  , te = he[O];
                if (A.hasOwnProperty(O))
                    continue;
                let j = !1;
                Pc(Y) && Pc(te) ? j = !ey(Y, te) : j = Y !== te,
                j ? Y != null ? W(O) : T.add(O) : Y !== void 0 && T.has(O) ? W(O) : L.protectedKeys[O] = !0
            }
            L.prevProp = B,
            L.prevResolvedValues = ge,
            L.isActive && (A = {
                ...A,
                ...ge
            }),
            o && n.blockInitialAnimation && (J = !1),
            J && (!($ && ee) || ie) && v.push(...me.map(O => ({
                animation: O,
                options: {
                    type: U
                }
            })))
        }
        if (T.size) {
            const D = {};
            if (typeof g.initial != "boolean") {
                const U = gi(n, Array.isArray(g.initial) ? g.initial[0] : g.initial);
                U && U.transition && (D.transition = U.transition)
            }
            T.forEach(U => {
                const L = n.getBaseTarget(U)
                  , B = n.getValue(U);
                B && (B.liveStyle = !0),
                D[U] = L ?? null
            }
            ),
            v.push({
                animation: D
            })
        }
        let V = !!v.length;
        return o && (g.initial === !1 || g.initial === g.animate) && !n.manuallyAnimateOnMount && (V = !1),
        o = !1,
        V ? l(v) : Promise.resolve()
    }
    function p(m, g) {
        var v;
        if (s[m].isActive === g)
            return Promise.resolve();
        (v = n.variantChildren) == null || v.forEach(T => {
            var A;
            return (A = T.animationState) == null ? void 0 : A.setActive(m, g)
        }
        ),
        s[m].isActive = g;
        const x = d(m);
        for (const T in s)
            s[T].protectedKeys = {};
        return x
    }
    return {
        animateChanges: d,
        setActive: p,
        setAnimateFunction: h,
        getState: () => s,
        reset: () => {
            s = Qp(),
            o = !0
        }
    }
}
function hS(n, l) {
    return typeof l == "string" ? l !== n : Array.isArray(l) ? !ey(l, n) : !1
}
function tl(n=!1) {
    return {
        isActive: n,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function Qp() {
    return {
        animate: tl(!0),
        whileInView: tl(),
        whileHover: tl(),
        whileTap: tl(),
        whileDrag: tl(),
        whileFocus: tl(),
        exit: tl()
    }
}
class zn {
    constructor(l) {
        this.isMounted = !1,
        this.node = l
    }
    update() {}
}
class mS extends zn {
    constructor(l) {
        super(l),
        l.animationState || (l.animationState = dS(l))
    }
    updateAnimationControlsSubscription() {
        const {animate: l} = this.node.getProps();
        Wo(l) && (this.unmountControls = l.subscribe(this.node))
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
let pS = 0;
class gS extends zn {
    constructor() {
        super(...arguments),
        this.id = pS++
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
const yS = {
    animation: {
        Feature: mS
    },
    exit: {
        Feature: gS
    }
};
function yi(n, l, s, o={
    passive: !0
}) {
    return n.addEventListener(l, s, o),
    () => n.removeEventListener(l, s)
}
function Ti(n) {
    return {
        point: {
            x: n.pageX,
            y: n.pageY
        }
    }
}
const xS = n => l => Tf(l) && n(l, Ti(l));
function ri(n, l, s, o) {
    return yi(n, l, xS(s), o)
}
function ay({top: n, left: l, right: s, bottom: o}) {
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
function vS({x: n, y: l}) {
    return {
        top: l.min,
        right: n.max,
        bottom: l.max,
        left: n.min
    }
}
function bS(n, l) {
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
const ny = 1e-4
  , SS = 1 - ny
  , jS = 1 + ny
  , ly = .01
  , TS = 0 - ly
  , wS = 0 + ly;
function kt(n) {
    return n.max - n.min
}
function AS(n, l, s) {
    return Math.abs(n - l) <= s
}
function Fp(n, l, s, o=.5) {
    n.origin = o,
    n.originPoint = et(l.min, l.max, n.origin),
    n.scale = kt(s) / kt(l),
    n.translate = et(s.min, s.max, n.origin) - n.originPoint,
    (n.scale >= SS && n.scale <= jS || isNaN(n.scale)) && (n.scale = 1),
    (n.translate >= TS && n.translate <= wS || isNaN(n.translate)) && (n.translate = 0)
}
function ui(n, l, s, o) {
    Fp(n.x, l.x, s.x, o ? o.originX : void 0),
    Fp(n.y, l.y, s.y, o ? o.originY : void 0)
}
function Jp(n, l, s) {
    n.min = s.min + l.min,
    n.max = n.min + kt(l)
}
function NS(n, l, s) {
    Jp(n.x, l.x, s.x),
    Jp(n.y, l.y, s.y)
}
function Ip(n, l, s) {
    n.min = l.min - s.min,
    n.max = n.min + kt(l)
}
function ci(n, l, s) {
    Ip(n.x, l.x, s.x),
    Ip(n.y, l.y, s.y)
}
const $p = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Ql = () => ({
    x: $p(),
    y: $p()
})
  , Wp = () => ({
    min: 0,
    max: 0
})
  , ft = () => ({
    x: Wp(),
    y: Wp()
});
function ma(n) {
    return [n("x"), n("y")]
}
function Sc(n) {
    return n === void 0 || n === 1
}
function Gc({scale: n, scaleX: l, scaleY: s}) {
    return !Sc(n) || !Sc(l) || !Sc(s)
}
function al(n) {
    return Gc(n) || sy(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY
}
function sy(n) {
    return eg(n.x) || eg(n.y)
}
function eg(n) {
    return n && n !== "0%"
}
function Jo(n, l, s) {
    const o = n - s
      , c = l * o;
    return s + c
}
function tg(n, l, s, o, c) {
    return c !== void 0 && (n = Jo(n, c, o)),
    Jo(n, s, o) + l
}
function Xc(n, l=0, s=1, o, c) {
    n.min = tg(n.min, l, s, o, c),
    n.max = tg(n.max, l, s, o, c)
}
function iy(n, {x: l, y: s}) {
    Xc(n.x, l.translate, l.scale, l.originPoint),
    Xc(n.y, s.translate, s.scale, s.originPoint)
}
const ag = .999999999999
  , ng = 1.0000000000001;
function ES(n, l, s, o=!1) {
    const c = s.length;
    if (!c)
        return;
    l.x = l.y = 1;
    let h, d;
    for (let p = 0; p < c; p++) {
        h = s[p],
        d = h.projectionDelta;
        const {visualElement: m} = h.options;
        m && m.props.style && m.props.style.display === "contents" || (o && h.options.layoutScroll && h.scroll && h !== h.root && Jl(n, {
            x: -h.scroll.offset.x,
            y: -h.scroll.offset.y
        }),
        d && (l.x *= d.x.scale,
        l.y *= d.y.scale,
        iy(n, d)),
        o && al(h.latestValues) && Jl(n, h.latestValues))
    }
    l.x < ng && l.x > ag && (l.x = 1),
    l.y < ng && l.y > ag && (l.y = 1)
}
function Fl(n, l) {
    n.min = n.min + l,
    n.max = n.max + l
}
function lg(n, l, s, o, c=.5) {
    const h = et(n.min, n.max, c);
    Xc(n, l, s, h, o)
}
function Jl(n, l) {
    lg(n.x, l.x, l.scaleX, l.scale, l.originX),
    lg(n.y, l.y, l.scaleY, l.scale, l.originY)
}
function oy(n, l) {
    return ay(bS(n.getBoundingClientRect(), l))
}
function CS(n, l, s) {
    const o = oy(n, s)
      , {scroll: c} = l;
    return c && (Fl(o.x, c.offset.x),
    Fl(o.y, c.offset.y)),
    o
}
const ry = ({current: n}) => n ? n.ownerDocument.defaultView : null
  , sg = (n, l) => Math.abs(n - l);
function DS(n, l) {
    const s = sg(n.x, l.x)
      , o = sg(n.y, l.y);
    return Math.sqrt(s ** 2 + o ** 2)
}
class uy {
    constructor(l, s, {transformPagePoint: o, contextWindow: c, dragSnapToOrigin: h=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const v = Tc(this.lastMoveEventInfo, this.history)
              , T = this.startEvent !== null
              , A = DS(v.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!T && !A)
                return;
            const {point: M} = v
              , {timestamp: V} = Dt;
            this.history.push({
                ...M,
                timestamp: V
            });
            const {onStart: D, onMove: U} = this.handlers;
            T || (D && D(this.lastMoveEvent, v),
            this.startEvent = this.lastMoveEvent),
            U && U(this.lastMoveEvent, v)
        }
        ,
        this.handlePointerMove = (v, T) => {
            this.lastMoveEvent = v,
            this.lastMoveEventInfo = jc(T, this.transformPagePoint),
            tt.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (v, T) => {
            this.end();
            const {onEnd: A, onSessionEnd: M, resumeAnimation: V} = this.handlers;
            if (this.dragSnapToOrigin && V && V(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const D = Tc(v.type === "pointercancel" ? this.lastMoveEventInfo : jc(T, this.transformPagePoint), this.history);
            this.startEvent && A && A(v, D),
            M && M(v, D)
        }
        ,
        !Tf(l))
            return;
        this.dragSnapToOrigin = h,
        this.handlers = s,
        this.transformPagePoint = o,
        this.contextWindow = c || window;
        const d = Ti(l)
          , p = jc(d, this.transformPagePoint)
          , {point: m} = p
          , {timestamp: g} = Dt;
        this.history = [{
            ...m,
            timestamp: g
        }];
        const {onSessionStart: x} = s;
        x && x(l, Tc(p, this.history)),
        this.removeListeners = bi(ri(this.contextWindow, "pointermove", this.handlePointerMove), ri(this.contextWindow, "pointerup", this.handlePointerUp), ri(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(l) {
        this.handlers = l
    }
    end() {
        this.removeListeners && this.removeListeners(),
        Rn(this.updatePoint)
    }
}
function jc(n, l) {
    return l ? {
        point: l(n.point)
    } : n
}
function ig(n, l) {
    return {
        x: n.x - l.x,
        y: n.y - l.y
    }
}
function Tc({point: n}, l) {
    return {
        point: n,
        delta: ig(n, cy(l)),
        offset: ig(n, MS(l)),
        velocity: _S(l, .1)
    }
}
function MS(n) {
    return n[0]
}
function cy(n) {
    return n[n.length - 1]
}
function _S(n, l) {
    if (n.length < 2)
        return {
            x: 0,
            y: 0
        };
    let s = n.length - 1
      , o = null;
    const c = cy(n);
    for (; s >= 0 && (o = n[s],
    !(c.timestamp - o.timestamp > Va(l))); )
        s--;
    if (!o)
        return {
            x: 0,
            y: 0
        };
    const h = za(c.timestamp - o.timestamp);
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
function OS(n, {min: l, max: s}, o) {
    return l !== void 0 && n < l ? n = o ? et(l, n, o.min) : Math.max(n, l) : s !== void 0 && n > s && (n = o ? et(s, n, o.max) : Math.min(n, s)),
    n
}
function og(n, l, s) {
    return {
        min: l !== void 0 ? n.min + l : void 0,
        max: s !== void 0 ? n.max + s - (n.max - n.min) : void 0
    }
}
function RS(n, {top: l, left: s, bottom: o, right: c}) {
    return {
        x: og(n.x, s, c),
        y: og(n.y, l, o)
    }
}
function rg(n, l) {
    let s = l.min - n.min
      , o = l.max - n.max;
    return l.max - l.min < n.max - n.min && ([s,o] = [o, s]),
    {
        min: s,
        max: o
    }
}
function VS(n, l) {
    return {
        x: rg(n.x, l.x),
        y: rg(n.y, l.y)
    }
}
function zS(n, l) {
    let s = .5;
    const o = kt(n)
      , c = kt(l);
    return c > o ? s = fi(l.min, l.max - o, n.min) : o > c && (s = fi(n.min, n.max - c, l.min)),
    nn(0, 1, s)
}
function US(n, l) {
    const s = {};
    return l.min !== void 0 && (s.min = l.min - n.min),
    l.max !== void 0 && (s.max = l.max - n.min),
    s
}
const Kc = .35;
function BS(n=Kc) {
    return n === !1 ? n = 0 : n === !0 && (n = Kc),
    {
        x: ug(n, "left", "right"),
        y: ug(n, "top", "bottom")
    }
}
function ug(n, l, s) {
    return {
        min: cg(n, l),
        max: cg(n, s)
    }
}
function cg(n, l) {
    return typeof n == "number" ? n : n[l] || 0
}
const LS = new WeakMap;
class kS {
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
        this.elastic = ft(),
        this.visualElement = l
    }
    start(l, {snapToCursor: s=!1}={}) {
        const {presenceContext: o} = this.visualElement;
        if (o && o.isPresent === !1)
            return;
        const c = x => {
            const {dragSnapToOrigin: v} = this.getProps();
            v ? this.pauseAnimation() : this.stopAnimation(),
            s && this.snapToCursor(Ti(x).point)
        }
          , h = (x, v) => {
            const {drag: T, dragPropagation: A, onDragStart: M} = this.getProps();
            if (T && !A && (this.openDragLock && this.openDragLock(),
            this.openDragLock = W1(T),
            !this.openDragLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            ma(D => {
                let U = this.getAxisMotionValue(D).get() || 0;
                if (Ua.test(U)) {
                    const {projection: L} = this.visualElement;
                    if (L && L.layout) {
                        const B = L.layout.layoutBox[D];
                        B && (U = kt(B) * (parseFloat(U) / 100))
                    }
                }
                this.originPoint[D] = U
            }
            ),
            M && tt.postRender( () => M(x, v)),
            qc(this.visualElement, "transform");
            const {animationState: V} = this.visualElement;
            V && V.setActive("whileDrag", !0)
        }
          , d = (x, v) => {
            const {dragPropagation: T, dragDirectionLock: A, onDirectionLock: M, onDrag: V} = this.getProps();
            if (!T && !this.openDragLock)
                return;
            const {offset: D} = v;
            if (A && this.currentDirection === null) {
                this.currentDirection = HS(D),
                this.currentDirection !== null && M && M(this.currentDirection);
                return
            }
            this.updateAxis("x", v.point, D),
            this.updateAxis("y", v.point, D),
            this.visualElement.render(),
            V && V(x, v)
        }
          , p = (x, v) => this.stop(x, v)
          , m = () => ma(x => {
            var v;
            return this.getAnimationState(x) === "paused" && ((v = this.getAxisMotionValue(x).animation) == null ? void 0 : v.play())
        }
        )
          , {dragSnapToOrigin: g} = this.getProps();
        this.panSession = new uy(l,{
            onSessionStart: c,
            onStart: h,
            onMove: d,
            onSessionEnd: p,
            resumeAnimation: m
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: g,
            contextWindow: ry(this.visualElement)
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
        h && tt.postRender( () => h(l, s))
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
        if (!o || !Po(l, c, this.currentDirection))
            return;
        const h = this.getAxisMotionValue(l);
        let d = this.originPoint[l] + o[l];
        this.constraints && this.constraints[l] && (d = OS(d, this.constraints[l], this.elastic[l])),
        h.set(d)
    }
    resolveConstraints() {
        var h;
        const {dragConstraints: l, dragElastic: s} = this.getProps()
          , o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (h = this.visualElement.projection) == null ? void 0 : h.layout
          , c = this.constraints;
        l && Zl(l) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : l && o ? this.constraints = RS(o.layoutBox, l) : this.constraints = !1,
        this.elastic = BS(s),
        c !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && ma(d => {
            this.constraints !== !1 && this.getAxisMotionValue(d) && (this.constraints[d] = US(o.layoutBox[d], this.constraints[d]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: l, onMeasureDragConstraints: s} = this.getProps();
        if (!l || !Zl(l))
            return !1;
        const o = l.current
          , {projection: c} = this.visualElement;
        if (!c || !c.layout)
            return !1;
        const h = CS(o, c.root, this.visualElement.getTransformPagePoint());
        let d = VS(c.layout.layoutBox, h);
        if (s) {
            const p = s(vS(d));
            this.hasMutatedConstraints = !!p,
            p && (d = ay(p))
        }
        return d
    }
    startAnimation(l) {
        const {drag: s, dragMomentum: o, dragElastic: c, dragTransition: h, dragSnapToOrigin: d, onDragTransitionEnd: p} = this.getProps()
          , m = this.constraints || {}
          , g = ma(x => {
            if (!Po(x, s, this.currentDirection))
                return;
            let v = m && m[x] || {};
            d && (v = {
                min: 0,
                max: 0
            });
            const T = c ? 200 : 1e6
              , A = c ? 40 : 1e7
              , M = {
                type: "inertia",
                velocity: o ? l[x] : 0,
                bounceStiffness: T,
                bounceDamping: A,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...h,
                ...v
            };
            return this.startAxisValueAnimation(x, M)
        }
        );
        return Promise.all(g).then(p)
    }
    startAxisValueAnimation(l, s) {
        const o = this.getAxisMotionValue(l);
        return qc(this.visualElement, l),
        o.start(Rf(l, o, 0, s, this.visualElement, !1))
    }
    stopAnimation() {
        ma(l => this.getAxisMotionValue(l).stop())
    }
    pauseAnimation() {
        ma(l => {
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
        ma(s => {
            const {drag: o} = this.getProps();
            if (!Po(s, o, this.currentDirection))
                return;
            const {projection: c} = this.visualElement
              , h = this.getAxisMotionValue(s);
            if (c && c.layout) {
                const {min: d, max: p} = c.layout.layoutBox[s];
                h.set(l[s] - et(d, p, .5))
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
        const c = {
            x: 0,
            y: 0
        };
        ma(d => {
            const p = this.getAxisMotionValue(d);
            if (p && this.constraints !== !1) {
                const m = p.get();
                c[d] = zS({
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
        ma(d => {
            if (!Po(d, l, null))
                return;
            const p = this.getAxisMotionValue(d)
              , {min: m, max: g} = this.constraints[d];
            p.set(et(m, g, c[d]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        LS.set(this.visualElement, this);
        const l = this.visualElement.current
          , s = ri(l, "pointerdown", m => {
            const {drag: g, dragListener: x=!0} = this.getProps();
            g && x && this.start(m)
        }
        )
          , o = () => {
            const {dragConstraints: m} = this.getProps();
            Zl(m) && m.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: c} = this.visualElement
          , h = c.addEventListener("measure", o);
        c && !c.layout && (c.root && c.root.updateScroll(),
        c.updateLayout()),
        tt.read(o);
        const d = yi(window, "resize", () => this.scalePositionWithinConstraints())
          , p = c.addEventListener("didUpdate", ({delta: m, hasLayoutChanged: g}) => {
            this.isDragging && g && (ma(x => {
                const v = this.getAxisMotionValue(x);
                v && (this.originPoint[x] += m[x].translate,
                v.set(v.get() + m[x].translate))
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
          , {drag: s=!1, dragDirectionLock: o=!1, dragPropagation: c=!1, dragConstraints: h=!1, dragElastic: d=Kc, dragMomentum: p=!0} = l;
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
function Po(n, l, s) {
    return (l === !0 || l === n) && (s === null || s === n)
}
function HS(n, l=10) {
    let s = null;
    return Math.abs(n.y) > l ? s = "y" : Math.abs(n.x) > l && (s = "x"),
    s
}
class PS extends zn {
    constructor(l) {
        super(l),
        this.removeGroupControls = pa,
        this.removeListeners = pa,
        this.controls = new kS(l)
    }
    mount() {
        const {dragControls: l} = this.node.getProps();
        l && (this.removeGroupControls = l.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || pa
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const fg = n => (l, s) => {
    n && tt.postRender( () => n(l, s))
}
;
class qS extends zn {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = pa
    }
    onPointerDown(l) {
        this.session = new uy(l,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: ry(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: l, onPanStart: s, onPan: o, onPanEnd: c} = this.node.getProps();
        return {
            onSessionStart: fg(l),
            onStart: fg(s),
            onMove: o,
            onEnd: (h, d) => {
                delete this.session,
                c && tt.postRender( () => c(h, d))
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
const Xo = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function dg(n, l) {
    return l.max === l.min ? 0 : n / (l.max - l.min) * 100
}
const ni = {
    correct: (n, l) => {
        if (!l.target)
            return n;
        if (typeof n == "string")
            if (je.test(n))
                n = parseFloat(n);
            else
                return n;
        const s = dg(n, l.target.x)
          , o = dg(n, l.target.y);
        return `${s}% ${o}%`
    }
}
  , YS = {
    correct: (n, {treeScale: l, projectionDelta: s}) => {
        const o = n
          , c = Vn.parse(n);
        if (c.length > 5)
            return o;
        const h = Vn.createTransformer(n)
          , d = typeof c[0] != "number" ? 1 : 0
          , p = s.x.scale * l.x
          , m = s.y.scale * l.y;
        c[0 + d] /= p,
        c[1 + d] /= m;
        const g = et(p, m, .5);
        return typeof c[2 + d] == "number" && (c[2 + d] /= g),
        typeof c[3 + d] == "number" && (c[3 + d] /= g),
        h(c)
    }
};
class GS extends S.Component {
    componentDidMount() {
        const {visualElement: l, layoutGroup: s, switchLayoutGroup: o, layoutId: c} = this.props
          , {projection: h} = l;
        C2(XS),
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
        Xo.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(l) {
        const {layoutDependency: s, visualElement: o, drag: c, isPresent: h} = this.props
          , {projection: d} = o;
        return d && (d.isPresent = h,
        c || l.layoutDependency !== s || s === void 0 || l.isPresent !== h ? d.willUpdate() : this.safeToRemove(),
        l.isPresent !== h && (h ? d.promote() : d.relegate() || tt.postRender( () => {
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
function fy(n) {
    const [l,s] = B0()
      , o = S.useContext($c);
    return f.jsx(GS, {
        ...n,
        layoutGroup: o,
        switchLayoutGroup: S.useContext(Y0),
        isPresent: l,
        safeToRemove: s
    })
}
const XS = {
    borderRadius: {
        ...ni,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: ni,
    borderTopRightRadius: ni,
    borderBottomLeftRadius: ni,
    borderBottomRightRadius: ni,
    boxShadow: YS
};
function KS(n, l, s) {
    const o = zt(n) ? n : Il(n);
    return o.start(Rf("", o, l, s)),
    o.animation
}
const ZS = (n, l) => n.depth - l.depth;
class QS {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(l) {
        tf(this.children, l),
        this.isDirty = !0
    }
    remove(l) {
        af(this.children, l),
        this.isDirty = !0
    }
    forEach(l) {
        this.isDirty && this.children.sort(ZS),
        this.isDirty = !1,
        this.children.forEach(l)
    }
}
function FS(n, l) {
    const s = Xt.now()
      , o = ({timestamp: c}) => {
        const h = c - s;
        h >= l && (Rn(o),
        n(h - l))
    }
    ;
    return tt.setup(o, !0),
    () => Rn(o)
}
const dy = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , JS = dy.length
  , hg = n => typeof n == "string" ? parseFloat(n) : n
  , mg = n => typeof n == "number" || je.test(n);
function IS(n, l, s, o, c, h) {
    c ? (n.opacity = et(0, s.opacity ?? 1, $S(o)),
    n.opacityExit = et(l.opacity ?? 1, 0, WS(o))) : h && (n.opacity = et(l.opacity ?? 1, s.opacity ?? 1, o));
    for (let d = 0; d < JS; d++) {
        const p = `border${dy[d]}Radius`;
        let m = pg(l, p)
          , g = pg(s, p);
        if (m === void 0 && g === void 0)
            continue;
        m || (m = 0),
        g || (g = 0),
        m === 0 || g === 0 || mg(m) === mg(g) ? (n[p] = Math.max(et(hg(m), hg(g), o), 0),
        (Ua.test(g) || Ua.test(m)) && (n[p] += "%")) : n[p] = g
    }
    (l.rotate || s.rotate) && (n.rotate = et(l.rotate || 0, s.rotate || 0, o))
}
function pg(n, l) {
    return n[l] !== void 0 ? n[l] : n.borderRadius
}
const $S = hy(0, .5, l0)
  , WS = hy(.5, .95, pa);
function hy(n, l, s) {
    return o => o < n ? 0 : o > l ? 1 : s(fi(n, l, o))
}
function gg(n, l) {
    n.min = l.min,
    n.max = l.max
}
function ha(n, l) {
    gg(n.x, l.x),
    gg(n.y, l.y)
}
function yg(n, l) {
    n.translate = l.translate,
    n.scale = l.scale,
    n.originPoint = l.originPoint,
    n.origin = l.origin
}
function xg(n, l, s, o, c) {
    return n -= l,
    n = Jo(n, 1 / s, o),
    c !== void 0 && (n = Jo(n, 1 / c, o)),
    n
}
function ej(n, l=0, s=1, o=.5, c, h=n, d=n) {
    if (Ua.test(l) && (l = parseFloat(l),
    l = et(d.min, d.max, l / 100) - d.min),
    typeof l != "number")
        return;
    let p = et(h.min, h.max, o);
    n === h && (p -= l),
    n.min = xg(n.min, l, s, p, c),
    n.max = xg(n.max, l, s, p, c)
}
function vg(n, l, [s,o,c], h, d) {
    ej(n, l[s], l[o], l[c], l.scale, h, d)
}
const tj = ["x", "scaleX", "originX"]
  , aj = ["y", "scaleY", "originY"];
function bg(n, l, s, o) {
    vg(n.x, l, tj, s ? s.x : void 0, o ? o.x : void 0),
    vg(n.y, l, aj, s ? s.y : void 0, o ? o.y : void 0)
}
function Sg(n) {
    return n.translate === 0 && n.scale === 1
}
function my(n) {
    return Sg(n.x) && Sg(n.y)
}
function jg(n, l) {
    return n.min === l.min && n.max === l.max
}
function nj(n, l) {
    return jg(n.x, l.x) && jg(n.y, l.y)
}
function Tg(n, l) {
    return Math.round(n.min) === Math.round(l.min) && Math.round(n.max) === Math.round(l.max)
}
function py(n, l) {
    return Tg(n.x, l.x) && Tg(n.y, l.y)
}
function wg(n) {
    return kt(n.x) / kt(n.y)
}
function Ag(n, l) {
    return n.translate === l.translate && n.scale === l.scale && n.originPoint === l.originPoint
}
class lj {
    constructor() {
        this.members = []
    }
    add(l) {
        tf(this.members, l),
        l.scheduleRender()
    }
    remove(l) {
        if (af(this.members, l),
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
function sj(n, l, s) {
    let o = "";
    const c = n.x.translate / l.x
      , h = n.y.translate / l.y
      , d = (s == null ? void 0 : s.z) || 0;
    if ((c || h || d) && (o = `translate3d(${c}px, ${h}px, ${d}px) `),
    (l.x !== 1 || l.y !== 1) && (o += `scale(${1 / l.x}, ${1 / l.y}) `),
    s) {
        const {transformPerspective: g, rotate: x, rotateX: v, rotateY: T, skewX: A, skewY: M} = s;
        g && (o = `perspective(${g}px) ${o}`),
        x && (o += `rotate(${x}deg) `),
        v && (o += `rotateX(${v}deg) `),
        T && (o += `rotateY(${T}deg) `),
        A && (o += `skewX(${A}deg) `),
        M && (o += `skewY(${M}deg) `)
    }
    const p = n.x.scale * l.x
      , m = n.y.scale * l.y;
    return (p !== 1 || m !== 1) && (o += `scale(${p}, ${m})`),
    o || "none"
}
const wc = ["", "X", "Y", "Z"]
  , ij = {
    visibility: "hidden"
}
  , oj = 1e3;
let rj = 0;
function Ac(n, l, s, o) {
    const {latestValues: c} = l;
    c[n] && (s[n] = c[n],
    l.setStaticValue(n, 0),
    o && (o[n] = 0))
}
function gy(n) {
    if (n.hasCheckedOptimisedAppear = !0,
    n.root === n)
        return;
    const {visualElement: l} = n.options;
    if (!l)
        return;
    const s = $0(l);
    if (window.MotionHasOptimisedAnimation(s, "transform")) {
        const {layout: c, layoutId: h} = n.options;
        window.MotionCancelOptimisedAnimation(s, "transform", tt, !(c || h))
    }
    const {parent: o} = n;
    o && !o.hasCheckedOptimisedAppear && gy(o)
}
function yy({attachResizeListener: n, defaultParent: l, measureScroll: s, checkIsScrollRoot: o, resetTransform: c}) {
    return class {
        constructor(d={}, p=l == null ? void 0 : l()) {
            this.id = rj++,
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
                this.nodes.forEach(fj),
                this.nodes.forEach(gj),
                this.nodes.forEach(yj),
                this.nodes.forEach(dj)
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
            this.root === this && (this.nodes = new QS)
        }
        addEventListener(d, p) {
            return this.eventHandlers.has(d) || this.eventHandlers.set(d, new sf),
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
            this.isSVG = U0(d) && !s2(d),
            this.instance = d;
            const {layoutId: p, layout: m, visualElement: g} = this.options;
            if (g && !g.current && g.mount(d),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (m || p) && (this.isLayoutDirty = !0),
            n) {
                let x;
                const v = () => this.root.updateBlockedByResize = !1;
                n(d, () => {
                    this.root.updateBlockedByResize = !0,
                    x && x(),
                    x = FS(v, 250),
                    Xo.hasAnimatedSinceResize && (Xo.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Eg))
                }
                )
            }
            p && this.root.registerSharedNode(p, this),
            this.options.animate !== !1 && g && (p || m) && this.addEventListener("didUpdate", ({delta: x, hasLayoutChanged: v, hasRelativeLayoutChanged: T, layout: A}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const M = this.options.transition || g.getDefaultTransition() || jj
                  , {onLayoutAnimationStart: V, onLayoutAnimationComplete: D} = g.getProps()
                  , U = !this.targetLayout || !py(this.targetLayout, A)
                  , L = !v && T;
                if (this.options.layoutRoot || this.resumeFrom || L || v && (U || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0);
                    const B = {
                        ...bf(M, "layout"),
                        onPlay: V,
                        onComplete: D
                    };
                    (g.shouldReduceMotion || this.options.layoutRoot) && (B.delay = 0,
                    B.type = !1),
                    this.startAnimation(B),
                    this.setAnimationOrigin(x, L)
                } else
                    v || Eg(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = A
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
            Rn(this.updateProjection)
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
            this.nodes && this.nodes.forEach(xj),
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
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && gy(this),
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
                this.nodes.forEach(Ng);
                return
            }
            this.isUpdating || this.nodes.forEach(mj),
            this.isUpdating = !1,
            this.nodes.forEach(pj),
            this.nodes.forEach(uj),
            this.nodes.forEach(cj),
            this.clearAllSnapshots();
            const p = Xt.now();
            Dt.delta = nn(0, 1e3 / 60, p - Dt.timestamp),
            Dt.timestamp = p,
            Dt.isProcessing = !0,
            pc.update.process(Dt),
            pc.preRender.process(Dt),
            pc.render.process(Dt),
            Dt.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            jf.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(hj),
            this.sharedNodes.forEach(vj)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            tt.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            tt.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
            this.snapshot && !kt(this.snapshot.measuredBox.x) && !kt(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
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
            this.layoutCorrected = ft(),
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
              , p = this.projectionDelta && !my(this.projectionDelta)
              , m = this.getTransformTemplate()
              , g = m ? m(this.latestValues, "") : void 0
              , x = g !== this.prevTransformTemplateValue;
            d && this.instance && (p || al(this.latestValues) || x) && (c(this.instance, g),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(d=!0) {
            const p = this.measurePageBox();
            let m = this.removeElementScroll(p);
            return d && (m = this.removeTransform(m)),
            Tj(m),
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
                return ft();
            const p = d.measureViewportBox();
            if (!(((g = this.scroll) == null ? void 0 : g.wasRoot) || this.path.some(wj))) {
                const {scroll: x} = this.root;
                x && (Fl(p.x, x.offset.x),
                Fl(p.y, x.offset.y))
            }
            return p
        }
        removeElementScroll(d) {
            var m;
            const p = ft();
            if (ha(p, d),
            (m = this.scroll) != null && m.wasRoot)
                return p;
            for (let g = 0; g < this.path.length; g++) {
                const x = this.path[g]
                  , {scroll: v, options: T} = x;
                x !== this.root && v && T.layoutScroll && (v.wasRoot && ha(p, d),
                Fl(p.x, v.offset.x),
                Fl(p.y, v.offset.y))
            }
            return p
        }
        applyTransform(d, p=!1) {
            const m = ft();
            ha(m, d);
            for (let g = 0; g < this.path.length; g++) {
                const x = this.path[g];
                !p && x.options.layoutScroll && x.scroll && x !== x.root && Jl(m, {
                    x: -x.scroll.offset.x,
                    y: -x.scroll.offset.y
                }),
                al(x.latestValues) && Jl(m, x.latestValues)
            }
            return al(this.latestValues) && Jl(m, this.latestValues),
            m
        }
        removeTransform(d) {
            const p = ft();
            ha(p, d);
            for (let m = 0; m < this.path.length; m++) {
                const g = this.path[m];
                if (!g.instance || !al(g.latestValues))
                    continue;
                Gc(g.latestValues) && g.updateSnapshot();
                const x = ft()
                  , v = g.measurePageBox();
                ha(x, v),
                bg(p, g.latestValues, g.snapshot ? g.snapshot.layoutBox : void 0, x)
            }
            return al(this.latestValues) && bg(p, this.latestValues),
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
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Dt.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(d=!1) {
            var T;
            const p = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = p.isSharedProjectionDirty);
            const m = !!this.resumingFrom || this !== p;
            if (!(d || m && this.isSharedProjectionDirty || this.isProjectionDirty || (T = this.parent) != null && T.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: x, layoutId: v} = this.options;
            if (!(!this.layout || !(x || v))) {
                if (this.resolvedRelativeTargetAt = Dt.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const A = this.getClosestProjectingParent();
                    A && A.layout && this.animationProgress !== 1 ? (this.relativeParent = A,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = ft(),
                    this.relativeTargetOrigin = ft(),
                    ci(this.relativeTargetOrigin, this.layout.layoutBox, A.layout.layoutBox),
                    ha(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = ft(),
                this.targetWithTransforms = ft()),
                this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                NS(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : ha(this.target, this.layout.layoutBox),
                iy(this.target, this.targetDelta)) : ha(this.target, this.layout.layoutBox),
                this.attemptToResolveRelativeTarget)) {
                    this.attemptToResolveRelativeTarget = !1;
                    const A = this.getClosestProjectingParent();
                    A && !!A.resumingFrom == !!this.resumingFrom && !A.options.layoutScroll && A.target && this.animationProgress !== 1 ? (this.relativeParent = A,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = ft(),
                    this.relativeTargetOrigin = ft(),
                    ci(this.relativeTargetOrigin, this.target, A.target),
                    ha(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Gc(this.parent.latestValues) || sy(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var M;
            const d = this.getLead()
              , p = !!this.resumingFrom || this !== d;
            let m = !0;
            if ((this.isProjectionDirty || (M = this.parent) != null && M.isProjectionDirty) && (m = !1),
            p && (this.isSharedProjectionDirty || this.isTransformDirty) && (m = !1),
            this.resolvedRelativeTargetAt === Dt.timestamp && (m = !1),
            m)
                return;
            const {layout: g, layoutId: x} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(g || x))
                return;
            ha(this.layoutCorrected, this.layout.layoutBox);
            const v = this.treeScale.x
              , T = this.treeScale.y;
            ES(this.layoutCorrected, this.treeScale, this.path, p),
            d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox,
            d.targetWithTransforms = ft());
            const {target: A} = d;
            if (!A) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (yg(this.prevProjectionDelta.x, this.projectionDelta.x),
            yg(this.prevProjectionDelta.y, this.projectionDelta.y)),
            ui(this.projectionDelta, this.layoutCorrected, A, this.latestValues),
            (this.treeScale.x !== v || this.treeScale.y !== T || !Ag(this.projectionDelta.x, this.prevProjectionDelta.x) || !Ag(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", A))
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
            this.prevProjectionDelta = Ql(),
            this.projectionDelta = Ql(),
            this.projectionDeltaWithTransform = Ql()
        }
        setAnimationOrigin(d, p=!1) {
            const m = this.snapshot
              , g = m ? m.latestValues : {}
              , x = {
                ...this.latestValues
            }
              , v = Ql();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !p;
            const T = ft()
              , A = m ? m.source : void 0
              , M = this.layout ? this.layout.source : void 0
              , V = A !== M
              , D = this.getStack()
              , U = !D || D.members.length <= 1
              , L = !!(V && !U && this.options.crossfade === !0 && !this.path.some(Sj));
            this.animationProgress = 0;
            let B;
            this.mixTargetDelta = Q => {
                const _ = Q / 1e3;
                Cg(v.x, d.x, _),
                Cg(v.y, d.y, _),
                this.setTargetDelta(v),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ci(T, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                bj(this.relativeTarget, this.relativeTargetOrigin, T, _),
                B && nj(this.relativeTarget, B) && (this.isProjectionDirty = !1),
                B || (B = ft()),
                ha(B, this.relativeTarget)),
                V && (this.animationValues = x,
                IS(x, g, this.latestValues, _, L, U)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = _
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(d) {
            var p, m, g;
            this.notifyListeners("animationStart"),
            (p = this.currentAnimation) == null || p.stop(),
            (g = (m = this.resumingFrom) == null ? void 0 : m.currentAnimation) == null || g.stop(),
            this.pendingAnimation && (Rn(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = tt.update( () => {
                Xo.hasAnimatedSinceResize = !0,
                this.motionValue || (this.motionValue = Il(0)),
                this.currentAnimation = KS(this.motionValue, [0, 1e3], {
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
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(oj),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const d = this.getLead();
            let {targetWithTransforms: p, target: m, layout: g, latestValues: x} = d;
            if (!(!p || !m || !g)) {
                if (this !== d && this.layout && g && xy(this.options.animationType, this.layout.layoutBox, g.layoutBox)) {
                    m = this.target || ft();
                    const v = kt(this.layout.layoutBox.x);
                    m.x.min = d.target.x.min,
                    m.x.max = m.x.min + v;
                    const T = kt(this.layout.layoutBox.y);
                    m.y.min = d.target.y.min,
                    m.y.max = m.y.min + T
                }
                ha(p, m),
                Jl(p, x),
                ui(this.projectionDeltaWithTransform, this.layoutCorrected, p, x)
            }
        }
        registerSharedNode(d, p) {
            this.sharedNodes.has(d) || this.sharedNodes.set(d, new lj),
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
            m.z && Ac("z", d, g, this.animationValues);
            for (let x = 0; x < wc.length; x++)
                Ac(`rotate${wc[x]}`, d, g, this.animationValues),
                Ac(`skew${wc[x]}`, d, g, this.animationValues);
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
                return ij;
            const p = {
                visibility: ""
            }
              , m = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                p.opacity = "",
                p.pointerEvents = Go(d == null ? void 0 : d.pointerEvents) || "",
                p.transform = m ? m(this.latestValues, "") : "none",
                p;
            const g = this.getLead();
            if (!this.projectionDelta || !this.layout || !g.target) {
                const A = {};
                return this.options.layoutId && (A.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                A.pointerEvents = Go(d == null ? void 0 : d.pointerEvents) || ""),
                this.hasProjected && !al(this.latestValues) && (A.transform = m ? m({}, "") : "none",
                this.hasProjected = !1),
                A
            }
            const x = g.animationValues || g.latestValues;
            this.applyTransformsToTarget(),
            p.transform = sj(this.projectionDeltaWithTransform, this.treeScale, x),
            m && (p.transform = m(x, p.transform));
            const {x: v, y: T} = this.projectionDelta;
            p.transformOrigin = `${v.origin * 100}% ${T.origin * 100}% 0`,
            g.animationValues ? p.opacity = g === this ? x.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : x.opacityExit : p.opacity = g === this ? x.opacity !== void 0 ? x.opacity : "" : x.opacityExit !== void 0 ? x.opacityExit : 0;
            for (const A in pi) {
                if (x[A] === void 0)
                    continue;
                const {correct: M, applyTo: V, isCSSVariable: D} = pi[A]
                  , U = p.transform === "none" ? x[A] : M(x[A], g);
                if (V) {
                    const L = V.length;
                    for (let B = 0; B < L; B++)
                        p[V[B]] = U
                } else
                    D ? this.options.visualElement.renderState.vars[A] = U : p[A] = U
            }
            return this.options.layoutId && (p.pointerEvents = g === this ? Go(d == null ? void 0 : d.pointerEvents) || "" : "none"),
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
            this.root.nodes.forEach(Ng),
            this.root.sharedNodes.clear()
        }
    }
}
function uj(n) {
    n.updateLayout()
}
function cj(n) {
    var s;
    const l = ((s = n.resumeFrom) == null ? void 0 : s.snapshot) || n.snapshot;
    if (n.isLead() && n.layout && l && n.hasListeners("didUpdate")) {
        const {layoutBox: o, measuredBox: c} = n.layout
          , {animationType: h} = n.options
          , d = l.source !== n.layout.source;
        h === "size" ? ma(v => {
            const T = d ? l.measuredBox[v] : l.layoutBox[v]
              , A = kt(T);
            T.min = o[v].min,
            T.max = T.min + A
        }
        ) : xy(h, l.layoutBox, o) && ma(v => {
            const T = d ? l.measuredBox[v] : l.layoutBox[v]
              , A = kt(o[v]);
            T.max = T.min + A,
            n.relativeTarget && !n.currentAnimation && (n.isProjectionDirty = !0,
            n.relativeTarget[v].max = n.relativeTarget[v].min + A)
        }
        );
        const p = Ql();
        ui(p, o, l.layoutBox);
        const m = Ql();
        d ? ui(m, n.applyTransform(c, !0), l.measuredBox) : ui(m, o, l.layoutBox);
        const g = !my(p);
        let x = !1;
        if (!n.resumeFrom) {
            const v = n.getClosestProjectingParent();
            if (v && !v.resumeFrom) {
                const {snapshot: T, layout: A} = v;
                if (T && A) {
                    const M = ft();
                    ci(M, l.layoutBox, T.layoutBox);
                    const V = ft();
                    ci(V, o, A.layoutBox),
                    py(M, V) || (x = !0),
                    v.options.layoutRoot && (n.relativeTarget = V,
                    n.relativeTargetOrigin = M,
                    n.relativeParent = v)
                }
            }
        }
        n.notifyListeners("didUpdate", {
            layout: o,
            snapshot: l,
            delta: m,
            layoutDelta: p,
            hasLayoutChanged: g,
            hasRelativeLayoutChanged: x
        })
    } else if (n.isLead()) {
        const {onExitComplete: o} = n.options;
        o && o()
    }
    n.options.transition = void 0
}
function fj(n) {
    n.parent && (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty),
    n.isSharedProjectionDirty || (n.isSharedProjectionDirty = !!(n.isProjectionDirty || n.parent.isProjectionDirty || n.parent.isSharedProjectionDirty)),
    n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty))
}
function dj(n) {
    n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1
}
function hj(n) {
    n.clearSnapshot()
}
function Ng(n) {
    n.clearMeasurements()
}
function mj(n) {
    n.isLayoutDirty = !1
}
function pj(n) {
    const {visualElement: l} = n.options;
    l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"),
    n.resetTransform()
}
function Eg(n) {
    n.finishAnimation(),
    n.targetDelta = n.relativeTarget = n.target = void 0,
    n.isProjectionDirty = !0
}
function gj(n) {
    n.resolveTargetDelta()
}
function yj(n) {
    n.calcProjection()
}
function xj(n) {
    n.resetSkewAndRotation()
}
function vj(n) {
    n.removeLeadSnapshot()
}
function Cg(n, l, s) {
    n.translate = et(l.translate, 0, s),
    n.scale = et(l.scale, 1, s),
    n.origin = l.origin,
    n.originPoint = l.originPoint
}
function Dg(n, l, s, o) {
    n.min = et(l.min, s.min, o),
    n.max = et(l.max, s.max, o)
}
function bj(n, l, s, o) {
    Dg(n.x, l.x, s.x, o),
    Dg(n.y, l.y, s.y, o)
}
function Sj(n) {
    return n.animationValues && n.animationValues.opacityExit !== void 0
}
const jj = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Mg = n => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n)
  , _g = Mg("applewebkit/") && !Mg("chrome/") ? Math.round : pa;
function Og(n) {
    n.min = _g(n.min),
    n.max = _g(n.max)
}
function Tj(n) {
    Og(n.x),
    Og(n.y)
}
function xy(n, l, s) {
    return n === "position" || n === "preserve-aspect" && !AS(wg(l), wg(s), .2)
}
function wj(n) {
    var l;
    return n !== n.root && ((l = n.scroll) == null ? void 0 : l.wasRoot)
}
const Aj = yy({
    attachResizeListener: (n, l) => yi(n, "resize", l),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , Nc = {
    current: void 0
}
  , vy = yy({
    measureScroll: n => ({
        x: n.scrollLeft,
        y: n.scrollTop
    }),
    defaultParent: () => {
        if (!Nc.current) {
            const n = new Aj({});
            n.mount(window),
            n.setOptions({
                layoutScroll: !0
            }),
            Nc.current = n
        }
        return Nc.current
    }
    ,
    resetTransform: (n, l) => {
        n.style.transform = l !== void 0 ? l : "none"
    }
    ,
    checkIsScrollRoot: n => window.getComputedStyle(n).position === "fixed"
})
  , Nj = {
    pan: {
        Feature: qS
    },
    drag: {
        Feature: PS,
        ProjectionNode: vy,
        MeasureLayout: fy
    }
};
function Rg(n, l, s) {
    const {props: o} = n;
    n.animationState && o.whileHover && n.animationState.setActive("whileHover", s === "Start");
    const c = "onHover" + s
      , h = o[c];
    h && tt.postRender( () => h(l, Ti(l)))
}
class Ej extends zn {
    mount() {
        const {current: l} = this.node;
        l && (this.unmount = e2(l, (s, o) => (Rg(this.node, o, "Start"),
        c => Rg(this.node, c, "End"))))
    }
    unmount() {}
}
class Cj extends zn {
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
function Vg(n, l, s) {
    const {props: o} = n;
    if (n.current instanceof HTMLButtonElement && n.current.disabled)
        return;
    n.animationState && o.whileTap && n.animationState.setActive("whileTap", s === "Start");
    const c = "onTap" + (s === "End" ? "" : s)
      , h = o[c];
    h && tt.postRender( () => h(l, Ti(l)))
}
class Dj extends zn {
    mount() {
        const {current: l} = this.node;
        l && (this.unmount = l2(l, (s, o) => (Vg(this.node, o, "Start"),
        (c, {success: h}) => Vg(this.node, c, h ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const Zc = new WeakMap
  , Ec = new WeakMap
  , Mj = n => {
    const l = Zc.get(n.target);
    l && l(n)
}
  , _j = n => {
    n.forEach(Mj)
}
;
function Oj({root: n, ...l}) {
    const s = n || document;
    Ec.has(s) || Ec.set(s, {});
    const o = Ec.get(s)
      , c = JSON.stringify(l);
    return o[c] || (o[c] = new IntersectionObserver(_j,{
        root: n,
        ...l
    })),
    o[c]
}
function Rj(n, l, s) {
    const o = Oj(l);
    return Zc.set(n, s),
    o.observe(n),
    () => {
        Zc.delete(n),
        o.unobserve(n)
    }
}
const Vj = {
    some: 0,
    all: 1
};
class zj extends zn {
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
            threshold: typeof c == "number" ? c : Vj[c]
        }
          , p = m => {
            const {isIntersecting: g} = m;
            if (this.isInView === g || (this.isInView = g,
            h && !g && this.hasEnteredView))
                return;
            g && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", g);
            const {onViewportEnter: x, onViewportLeave: v} = this.node.getProps()
              , T = g ? x : v;
            T && T(m)
        }
        ;
        return Rj(this.node.current, d, p)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: l, prevProps: s} = this.node;
        ["amount", "margin", "root"].some(Uj(l, s)) && this.startObserver()
    }
    unmount() {}
}
function Uj({viewport: n={}}, {viewport: l={}}={}) {
    return s => n[s] !== l[s]
}
const Bj = {
    inView: {
        Feature: zj
    },
    tap: {
        Feature: Dj
    },
    focus: {
        Feature: Cj
    },
    hover: {
        Feature: Ej
    }
}
  , Lj = {
    layout: {
        ProjectionNode: vy,
        MeasureLayout: fy
    }
}
  , Qc = {
    current: null
}
  , by = {
    current: !1
};
function kj() {
    if (by.current = !0,
    !!ef)
        if (window.matchMedia) {
            const n = window.matchMedia("(prefers-reduced-motion)")
              , l = () => Qc.current = n.matches;
            n.addListener(l),
            l()
        } else
            Qc.current = !1
}
const Hj = new WeakMap;
function Pj(n, l, s) {
    for (const o in l) {
        const c = l[o]
          , h = s[o];
        if (zt(c))
            n.addValue(o, c);
        else if (zt(h))
            n.addValue(o, Il(c, {
                owner: n
            }));
        else if (h !== c)
            if (n.hasValue(o)) {
                const d = n.getValue(o);
                d.liveStyle === !0 ? d.jump(c) : d.hasAnimated || d.set(c)
            } else {
                const d = n.getStaticValue(o);
                n.addValue(o, Il(d !== void 0 ? d : c, {
                    owner: n
                }))
            }
    }
    for (const o in s)
        l[o] === void 0 && n.removeValue(o);
    return l
}
const zg = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class qj {
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
            const T = Xt.now();
            this.renderScheduledAt < T && (this.renderScheduledAt = T,
            tt.render(this.render, !1, !0))
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
        this.isControllingVariants = er(s),
        this.isVariantNode = P0(s),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(l && l.current);
        const {willChange: x, ...v} = this.scrapeMotionValuesFromProps(s, {}, this);
        for (const T in v) {
            const A = v[T];
            m[T] !== void 0 && zt(A) && A.set(m[T], !1)
        }
    }
    mount(l) {
        this.current = l,
        Hj.set(l, this),
        this.projection && !this.projection.instance && this.projection.mount(l),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (s, o) => this.bindToMotionValue(o, s)),
        by.current || kj(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Qc.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        this.projection && this.projection.unmount(),
        Rn(this.notifyUpdate),
        Rn(this.render),
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
        const o = ts.has(l);
        o && this.onBindTransform && this.onBindTransform();
        const c = s.on("change", p => {
            this.latestValues[l] = p,
            this.props.onUpdate && tt.preRender(this.notifyUpdate),
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
        for (l in $l) {
            const s = $l[l];
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
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ft()
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
        for (let o = 0; o < zg.length; o++) {
            const c = zg[o];
            this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](),
            delete this.propEventSubscriptions[c]);
            const h = "on" + c
              , d = l[h];
            d && (this.propEventSubscriptions[c] = this.on(c, d))
        }
        this.prevMotionValues = Pj(this, this.scrapeMotionValuesFromProps(l, this.prevProps, this), this.prevMotionValues),
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
        return o === void 0 && s !== void 0 && (o = Il(s === null ? void 0 : s, {
            owner: this
        }),
        this.addValue(l, o)),
        o
    }
    readValue(l, s) {
        let o = this.latestValues[l] !== void 0 || !this.current ? this.latestValues[l] : this.getBaseTargetFromProps(this.props, l) ?? this.readValueFromInstance(this.current, l, this.options);
        return o != null && (typeof o == "string" && (Qg(o) || Jg(o)) ? o = parseFloat(o) : !o2(o) && Vn.test(s) && (o = _0(l, s)),
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
            const d = _f(this.props, s, (h = this.presenceContext) == null ? void 0 : h.custom);
            d && (o = d[l])
        }
        if (s && o !== void 0)
            return o;
        const c = this.getBaseTargetFromProps(this.props, l);
        return c !== void 0 && !zt(c) ? c : this.initialValues[l] !== void 0 && o === void 0 ? void 0 : this.baseTarget[l]
    }
    on(l, s) {
        return this.events[l] || (this.events[l] = new sf),
        this.events[l].add(s)
    }
    notify(l, ...s) {
        this.events[l] && this.events[l].notify(...s)
    }
}
class Sy extends qj {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = F1
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
function jy(n, {style: l, vars: s}, o, c) {
    Object.assign(n.style, l, c && c.getProjectionStyles(o));
    for (const h in s)
        n.style.setProperty(h, s[h])
}
function Yj(n) {
    return window.getComputedStyle(n)
}
class Gj extends Sy {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = jy
    }
    readValueFromInstance(l, s) {
        var o;
        if (ts.has(s))
            return (o = this.projection) != null && o.isProjecting ? zc(s) : m1(l, s);
        {
            const c = Yj(l)
              , h = (uf(s) ? c.getPropertyValue(s) : c[s]) || 0;
            return typeof h == "string" ? h.trim() : h
        }
    }
    measureInstanceViewportBox(l, {transformPagePoint: s}) {
        return oy(l, s)
    }
    build(l, s, o) {
        Cf(l, s, o.transformTemplate)
    }
    scrapeMotionValuesFromProps(l, s, o) {
        return Of(l, s, o)
    }
}
const Ty = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function Xj(n, l, s, o) {
    jy(n, l, void 0, o);
    for (const c in l.attrs)
        n.setAttribute(Ty.has(c) ? c : Ef(c), l.attrs[c])
}
class Kj extends Sy {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = ft
    }
    getBaseTargetFromProps(l, s) {
        return l[s]
    }
    readValueFromInstance(l, s) {
        if (ts.has(s)) {
            const o = M0(s);
            return o && o.default || 0
        }
        return s = Ty.has(s) ? s : Ef(s),
        l.getAttribute(s)
    }
    scrapeMotionValuesFromProps(l, s, o) {
        return I0(l, s, o)
    }
    build(l, s, o) {
        Z0(l, s, this.isSVGTag, o.transformTemplate, o.style)
    }
    renderInstance(l, s, o, c) {
        Xj(l, s, o, c)
    }
    mount(l) {
        this.isSVGTag = F0(l.tagName),
        super.mount(l)
    }
}
const Zj = (n, l) => Mf(n) ? new Kj(l) : new Gj(l,{
    allowProjection: n !== S.Fragment
})
  , Qj = X2({
    ...yS,
    ...Bj,
    ...Nj,
    ...Lj
}, Zj)
  , oe = g2(Qj);
function Fj() {
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
function wy() {
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
function Ay() {
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
function Ny() {
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
function Jj() {
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
function Ug() {
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
function Ey() {
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
const Cy = S.createContext({
    language: "en",
    setLanguage: () => {}
    ,
    translations: {}
})
  , Ij = ({children: n}) => {
    const [l,s] = S.useState( () => localStorage.getItem("language") || "en")
      , [o,c] = S.useState({});
    return S.useEffect( () => {
        const d = JSON.parse(localStorage.getItem("initialData") || "{}").languages || {};
        c(d)
    }
    , [l]),
    S.useEffect( () => {
        localStorage.setItem("language", l)
    }
    , [l]),
    f.jsx(Cy.Provider, {
        value: {
            language: l,
            setLanguage: s,
            translations: o
        },
        children: n
    })
}
  , it = () => S.useContext(Cy)
  , $j = () => {
    var h, d;
    const {language: n, setLanguage: l, translations: s} = it()
      , [o,c] = S.useState([]);
    return S.useEffect( () => {
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
                children: [f.jsx(Fj, {}), " ", (d = s == null ? void 0 : s.video_guide) == null ? void 0 : d[n]]
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
  , Wj = "https://api-payment.ivacbd.com";
async function Be(n, l={}) {
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
        const g = `${Wj}${n}`
          , x = await fetch(g, {
            method: o,
            headers: m,
            body: p ? h : h ? JSON.stringify(h) : void 0
        })
          , v = (s = x.headers.get("content-type")) == null ? void 0 : s.includes("application/json");
        if (!x.ok) {
            const T = v ? await x.json() : await x.text();
            throw {
                status: x.status,
                message: (T == null ? void 0 : T.message) || T || "Unknown error"
            }
        }
        return v ? x.json() : {}
    } catch (o) {
        throw console.error("API Error:", o),
        o
    }
}
function eT() {
    var s, o, c, h;
    const {language: n, translations: l} = it();
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
const tT = ({message: n, type: l="info", onClose: s}) => {
    const [o,c] = S.useState(!0)
      , [h,d] = S.useState(!1)
      , [p,m] = S.useState(5)
      , g = () => {
        c(!1),
        s && s()
    }
    ;
    if (S.useEffect( () => {
        let v;
        return p > 0 ? v = setTimeout( () => {
            m(T => T - 1)
        }
        , 1e3) : d(!0),
        () => {
            v && clearTimeout(v)
        }
    }
    , [p]),
    !o)
        return null;
    const x = {
        success: "bg-green-500 text-white",
        error: "bg-red-500 text-white",
        info: "bg-blue-500 text-white",
        warning: "bg-yellow-400 text-black"
    };
    return f.jsx(L0, {
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
                className: `flex justify-center flex-col h-1/2 rounded-xl shadow-2xl p-6 max-w-md w-full mx-4 text-center ${x[l]}`,
                children: [f.jsxs("div", {
                    className: "flex flex-col justify-center items-center mb-4",
                    children: [f.jsx(Ey, {}), f.jsx("p", {
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
  , Mt = ({message: n, type: l="info", onClose: s}) => {
    const [o,c] = S.useState(!0)
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
    return f.jsx(L0, {
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
                    children: [f.jsx(Ey, {}), f.jsx("p", {
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
  , aT = "/assets/sib_logo-BmWytU9-.png"
  , nT = "/assets/sslwireless_logo-D0EMAZ9R.svg"
  , Dy = "/assets/page_bg-BE0EAheg.jpg"
  , lT = "/assets/SSLCommerzLogo-DJTqXlmx.svg"
  , sT = ({message: n}) => f.jsx("div", {
    className: "fixed h-screen bg-cover bg-center inset-0 z-50 flex items-center justify-center ",
    style: {
        backgroundImage: `url(${Dy})`
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
  , My = () => f.jsxs("div", {
    className: "fixed inset-0 z-50 flex flex-col items-center justify-center bg-transparent bg-opacity-40 backdrop-blur-sm",
    children: [f.jsx("div", {
        className: "animate-spin rounded-full h-16 w-16 border-t-4 border-blue-400 border-opacity-60"
    }), f.jsx("div", {
        className: "text-green-700 text-lg my-4 font-medium",
        children: "Checking..."
    })]
})
  , iT = ({setStep: n}) => {
    var A, M, V, D, U;
    const {language: l, translations: s} = it()
      , [o,c] = S.useState("");
    let h = o.trim() !== "" && o.length >= 11;
    const [d,p] = S.useState(!1)
      , [m,g] = S.useState(null)
      , x = L => {
        const B = L.target.value.replace(/\D/g, "");
        c(B)
    }
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
      , T = async () => {
        var L;
        p(!0);
        try {
            h = !1;
            const B = await Be("/api/v2/mobile-verify", {
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
            const Q = B
              , _ = typeof Q == "object" && (Q != null && Q.message) ? Q.message : "Failed. Please try again later.";
            g({
                message: _,
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
        variants: v,
        initial: "hidden",
        animate: "visible",
        children: [m && f.jsx(Mt, {
            message: m.message,
            type: m.type,
            onClose: () => g(null)
        }), f.jsxs("p", {
            className: "text-xs",
            children: [(A = s == null ? void 0 : s.lblInputLoginMobile) == null ? void 0 : A[l], " ", " ", f.jsx("span", {
                className: "text-red-600 text-[10px]",
                children: (M = s == null ? void 0 : s.lblInputLoginMobileMsg) == null ? void 0 : M[l]
            })]
        }), f.jsx("input", {
            type: "tel",
            id: "phone",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-sm focus:ring-0 focus:border-slate-400 duration-300 border-[1.5px] focus:outline-0 block w-full p-2.5 my-2",
            placeholder: (V = s == null ? void 0 : s.lblInputLoginMobile) == null ? void 0 : V[l],
            autoComplete: "off",
            onCopy: L => L.preventDefault(),
            onPaste: L => L.preventDefault(),
            onCut: L => L.preventDefault(),
            inputMode: "numeric",
            pattern: "[0-9]*",
            maxLength: 11,
            value: o,
            onChange: x
        }), f.jsx(oe.button, {
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
            onClick: !d && h ? T : void 0,
            children: d ? ((D = s == null ? void 0 : s.checking) == null ? void 0 : D[l]) + "..." : (U = s == null ? void 0 : s.lblProceed) == null ? void 0 : U[l]
        })]
    })
}
  , oT = ({setStep: n}) => {
    var Ut, St, Kt, wa, dt, Aa, ya, Na, ta, Ba, Ea, La, Ne, _t, $e, se, de, ot, ze, Fe, Je, Oe, Ot, Ca, xa, Bn, sn;
    const {language: l, translations: s} = it()
      , [o,c] = S.useState(null)
      , [h,d] = S.useState(null)
      , [p,m] = S.useState("")
      , [g,x] = S.useState(null)
      , [v,T] = S.useState(null)
      , [A,M] = S.useState("")
      , [V,D] = S.useState("")
      , [U,L] = S.useState("")
      , [B,Q] = S.useState("")
      , [_,$] = S.useState(!1)
      , [ee,J] = S.useState("")
      , [ie,me] = S.useState(!1)
      , [ge,he] = S.useState(!1)
      , [ue,W] = S.useState(!1)
      , [P,N] = S.useState(!1)
      , [O,Y] = S.useState(0)
      , [te,j] = S.useState(!1);
    S.useEffect( () => {
        const ne = localStorage.getItem("user_phone");
        ne && m(ne)
    }
    , []);
    const H = S.useRef(null)
      , Z = () => {
        var ne;
        (ne = H.current) == null || ne.click()
    }
      , X = ne => {
        var ht;
        const Te = (ht = ne.target.files) == null ? void 0 : ht[0];
        if (Te) {
            if (Te.size > 2 * 1024 * 1024) {
                c({
                    message: "File size must be less than 2MB",
                    type: "error"
                });
                return
            }
            if (!["image/jpeg", "image/jpg", "image/png"].includes(Te.type)) {
                c({
                    message: "Please select a JPG, PNG, or JPEG file",
                    type: "error"
                });
                return
            }
            x(Te),
            T(URL.createObjectURL(Te))
        }
    }
      , le = ne => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ne.trim())
      , ae = g && p.length >= 11 && A.trim() !== "" && le(V) && U.trim() !== "" && B.trim() !== "" && U === B
      , G = async () => {
        try {
            N(!0);
            const ne = new FormData;
            ne.append("photo", g),
            ne.append("mobile_no", p),
            ne.append("full_name", A),
            ne.append("email", V),
            ne.append("password", U),
            ne.append("password_confirmation", B),
            ne.append("resend", "0");
            const Te = await Be("/api/v2/registration", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: ne
            });
            Te.status_code === 200 ? n(6) : c({
                message: (Te == null ? void 0 : Te.message) || "Registration failed",
                type: "error"
            })
        } catch (ne) {
            const Te = ne
              , ht = typeof Te == "object" && (Te != null && Te.message) ? Te.message : "Failed. Please try again later."
              , Ht = typeof Te == "object" && typeof Te.status == "number" ? Te.status : 422;
            (Ht === 401 || Ht === 419) && (c({
                message: ht,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            c({
                message: ht,
                type: "error"
            })
        } finally {
            N(!1)
        }
    }
      , ve = V.trim() !== "" && le(V)
      , ye = async () => {
        try {
            he(!0);
            const ne = await Be("/api/v2/registration-email-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    email: V
                }
            });
            ne.status_code === 200 ? $(!0) : c({
                message: ne == null ? void 0 : ne.message,
                type: "error"
            })
        } catch (ne) {
            const Te = ne
              , ht = typeof Te == "object" && (Te != null && Te.message) ? Te.message : "Failed. Please try again later."
              , Ht = typeof Te == "object" && typeof Te.status == "number" ? Te.status : 422;
            Ht === 401 || Ht === 419 ? (d({
                message: ht,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)) : c({
                message: ht,
                type: "error"
            })
        } finally {
            he(!1)
        }
    }
      , we = ee.trim() !== "" && ee.length >= 6
      , He = async () => {
        try {
            W(!0);
            const ne = await Be("/api/v2/registration-email-otp-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    email: V,
                    otp: ee
                }
            });
            ne.status_code === 200 ? me(!0) : c({
                message: ne == null ? void 0 : ne.message,
                type: "error"
            })
        } catch (ne) {
            const Te = ne
              , ht = typeof Te == "object" && (Te != null && Te.message) ? Te.message : "Failed. Please try again later."
              , Ht = typeof Te == "object" && typeof Te.status == "number" ? Te.status : 422;
            Ht === 401 || Ht === 419 ? (d({
                message: ht,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)) : c({
                message: ht,
                type: "error"
            })
        } finally {
            W(!1)
        }
    }
    ;
    S.useEffect( () => {
        let ne = null;
        return te && O > 0 ? ne = setInterval( () => {
            Y(Te => Te - 1)
        }
        , 1e3) : O === 0 && j(!1),
        () => {
            ne && clearInterval(ne)
        }
    }
    , [O, te]);
    const Ve = () => {
        ye(),
        Y(30),
        j(!0)
    }
      , at = {
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
        variants: at,
        initial: "hidden",
        animate: "visible",
        children: [o && f.jsx(Mt, {
            message: o.message,
            type: o.type,
            onClose: () => c(null)
        }), h && f.jsx(tT, {
            message: h.message,
            type: h.type,
            onClose: () => c(null)
        }), f.jsxs("p", {
            className: "text-xs mb-2 uppercase",
            children: [(Ut = s == null ? void 0 : s.lblInputRegPhotoUpload) == null ? void 0 : Ut[l], " ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (St = s == null ? void 0 : s.lblInputRegPhotoSize) == null ? void 0 : St[l]]
            })]
        }), f.jsx("div", {
            className: "relative w-24 h-24 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors bg-white flex items-center justify-center overflow-hidden",
            onClick: Z,
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
            ref: H,
            type: "file",
            accept: "image/jpeg,image/jpg,image/png",
            onChange: X,
            className: "hidden"
        }), f.jsxs("p", {
            className: "text-xs mt-4 uppercase",
            children: [(Kt = s == null ? void 0 : s.lblInputRegMobile) == null ? void 0 : Kt[l], " ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (wa = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : wa[l]]
            })]
        }), f.jsx("input", {
            type: "tel",
            id: "phone",
            autoComplete: "off",
            onCopy: ne => ne.preventDefault(),
            onPaste: ne => ne.preventDefault(),
            onCut: ne => ne.preventDefault(),
            disabled: false,
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-blue-400 focus:border-[0.1px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (dt = s == null ? void 0 : s.lblInputRegMobile) == null ? void 0 : dt[l],
            inputMode: "numeric",
            pattern: "[0-9]*",
            maxLength: 11,
            value: p,
            onChange: ne => m(ne.target.value)
        }), f.jsxs("p", {
            className: "text-xs mt-4 uppercase",
            children: [(Aa = s == null ? void 0 : s.lblInputRegName) == null ? void 0 : Aa[l], " ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (ya = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : ya[l]]
            })]
        }), f.jsx("input", {
            type: "text",
            id: "name",
            autoComplete: "off",
            onCopy: ne => ne.preventDefault(),
            onPaste: ne => ne.preventDefault(),
            onCut: ne => ne.preventDefault(),
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (Na = s == null ? void 0 : s.lblInputRegName) == null ? void 0 : Na[l],
            onChange: ne => M(ne.target.value),
            value: A
        }), f.jsxs("p", {
            className: "text-xs mt-4 uppercase",
            children: [(ta = s == null ? void 0 : s.lblInputEmail) == null ? void 0 : ta[l], "  ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (Ba = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : Ba[l]]
            })]
        }), f.jsx("input", {
            type: "email",
            id: "email",
            autoComplete: "off",
            onCopy: ne => ne.preventDefault(),
            onPaste: ne => ne.preventDefault(),
            onCut: ne => ne.preventDefault(),
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (Ea = s == null ? void 0 : s.lblInputEmail) == null ? void 0 : Ea[l],
            onChange: ne => D(ne.target.value),
            value: V
        }), ie && f.jsx("p", {
            className: "text-xs text-green-500 mt-1",
            children: (La = s == null ? void 0 : s.emailSuccessfullyVerified) == null ? void 0 : La[l]
        }), !_ && f.jsx("button", {
            type: "button",
            onClick: ve && !ge ? Ve : void 0,
            disabled: !ve || ge,
            className: `text-xs font-medium rounded px-2 py-1.5 mr-2 mb-2 transition-colors duration-200
                  ${!ve || ge ? "text-gray-400 bg-gray-300 cursor-not-allowed" : "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 cursor-pointer"}`,
            children: ge ? (Ne = s == null ? void 0 : s.checking) == null ? void 0 : Ne[l] : (_t = s == null ? void 0 : s.verify_email) == null ? void 0 : _t[l]
        }), ve && _ && !ie && f.jsx("button", {
            onClick: Ve,
            disabled: te,
            className: `text-xs font-medium rounded px-2 py-1.5 mr-2 mb-2 transition-colors duration-200
              ${te ? "text-gray-400 bg-gray-300 cursor-not-allowed" : "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 cursor-pointer"}`,
            children: te ? (($e = s == null ? void 0 : s.resendOtp) == null ? void 0 : $e[l]) + ` ${O}s` : (se = s == null ? void 0 : s.resendOtp) == null ? void 0 : se[l]
        }), _ && !ie && f.jsxs(f.Fragment, {
            children: [f.jsxs("p", {
                className: "text-xs text-blue-500 mt-4",
                children: [(de = s == null ? void 0 : s.otp_message) == null ? void 0 : de[l], "  ", " ", f.jsxs("span", {
                    className: "text-red-600 text-[10px]",
                    children: ["*", (ot = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : ot[l]]
                })]
            }), f.jsx("input", {
                type: "text",
                id: "otp",
                autoComplete: "off",
                onCopy: ne => ne.preventDefault(),
                onPaste: ne => ne.preventDefault(),
                onCut: ne => ne.preventDefault(),
                className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
                placeholder: "Enter OTP",
                maxLength: 6,
                onChange: ne => J(ne.target.value),
                value: ee
            }), f.jsx("button", {
                type: "button",
                onClick: we && !ue ? He : void 0,
                disabled: !we || ue,
                className: `text-xs font-medium rounded px-2 py-1.5 mr-2 mb-2 transition-colors duration-200
                  ${!we || ue ? "text-gray-400 bg-gray-300 cursor-not-allowed" : "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 cursor-pointer"}`,
                children: ue ? (ze = s == null ? void 0 : s.checking) == null ? void 0 : ze[l] : (Fe = s == null ? void 0 : s.verifyOtp) == null ? void 0 : Fe[l]
            })]
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(Je = s == null ? void 0 : s.lblInputPassword) == null ? void 0 : Je[l], "  ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (Oe = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : Oe[l]]
            })]
        }), f.jsx("input", {
            type: "password",
            id: "password",
            disabled: !ie,
            autoComplete: "off",
            onCopy: ne => ne.preventDefault(),
            onPaste: ne => ne.preventDefault(),
            onCut: ne => ne.preventDefault(),
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: "********",
            onChange: ne => L(ne.target.value),
            value: U
        }), U.length > 0 && U.length < 6 && f.jsx("p", {
            className: "text-red-500 text-[11px] mb-2",
            children: (Ot = s == null ? void 0 : s.passwordMinLengthMsg) == null ? void 0 : Ot[l]
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(Ca = s == null ? void 0 : s.lblInputRePassword) == null ? void 0 : Ca[l], " ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (xa = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : xa[l]]
            })]
        }), f.jsx("input", {
            type: "password",
            id: "confirmPassword",
            autoComplete: "off",
            onCopy: ne => ne.preventDefault(),
            onPaste: ne => ne.preventDefault(),
            onCut: ne => ne.preventDefault(),
            disabled: !ie,
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: "********",
            onChange: ne => Q(ne.target.value),
            value: B
        }), f.jsx(oe.button, {
            type: "button",
            disabled: !ae || P,
            whileTap: {
                scale: .95
            },
            className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
            ${!ae || P ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838]"}
            `,
            onClick: !P && ae ? G : void 0,
            children: P ? (Bn = s == null ? void 0 : s.checking) == null ? void 0 : Bn[l] : (sn = s == null ? void 0 : s.lblProceed) == null ? void 0 : sn[l]
        })]
    })
}
  , rT = ({setStep: n}) => {
    var A, M, V, D, U, L, B;
    const {language: l, translations: s} = it()
      , [o,c] = S.useState("")
      , [h,d] = S.useState(!1)
      , p = o.trim() !== "" && o.length >= 6
      , [m,g] = S.useState(null)
      , x = async () => {
        var Q, _;
        d(!0);
        try {
            const $ = localStorage.getItem("user_phone")
              , ee = await Be("/api/v2/login", {
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
            ee.status_code === 200 ? (localStorage.setItem("user_email", JSON.stringify((Q = ee == null ? void 0 : ee.data) == null ? void 0 : Q.email)),
            localStorage.setItem("user_pwd", o),
            n((_ = ee.data) != null && _.email_confirmed ? 100 : 4)) : g({
                message: ee == null ? void 0 : ee.message,
                type: "error"
            })
        } catch ($) {
            const ee = $
              , J = typeof ee == "object" && (ee != null && ee.message) ? ee.message : "Failed. Please try again later."
              , ie = typeof ee == "object" && typeof ee.status == "number" ? ee.status : 422;
            (ie === 401 || ie === 419) && (g({
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
      , v = async () => {
        n(7)
    }
      , T = {
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
        variants: T,
        initial: "hidden",
        animate: "visible",
        children: [m && f.jsx(Mt, {
            message: m.message,
            type: m.type,
            onClose: () => g(null)
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(A = s == null ? void 0 : s.lblInputPassword) == null ? void 0 : A[l], " ", " ", f.jsx("span", {
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
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-sm focus:ring-0 focus:border-slate-400 duration-300 border-[1.5px] focus:outline-0 block w-full p-2.5 my-2",
            placeholder: (V = s == null ? void 0 : s.lblInputPassword) == null ? void 0 : V[l],
            value: o,
            onChange: Q => c(Q.target.value)
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
                disabled: h || !p,
                whileTap: {
                    scale: .95
                },
                className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
         ${h || !p ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer"}`,
                onClick: !h && p ? x : void 0,
                children: h ? (U = s == null ? void 0 : s.checking) == null ? void 0 : U[l] : (L = s == null ? void 0 : s.lblProceed) == null ? void 0 : L[l]
            })]
        }), f.jsx("p", {
            className: "text-xs cursor-pointer text-blue-600 mt-2",
            onClick: v,
            children: ((B = s == null ? void 0 : s.lblInputForgotPassword) == null ? void 0 : B[l]) ?? "Forgot password ?"
        })]
    })
}
  , _y = n => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.trim())
  , uT = ({setStep: n}) => {
    var T, A, M, V, D, U;
    const {language: l, translations: s} = it()
      , [o,c] = S.useState("")
      , [h,d] = S.useState("")
      , [p,m] = S.useState(null);
    S.useEffect( () => {
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
    const g = o.trim() !== "" && _y(o)
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
            const L = await Be("/api/v2/login-email-verify", {
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
              , Q = typeof B == "object" && (B != null && B.message) ? B.message : "Failed. Please try again later."
              , _ = typeof B == "object" && typeof B.status == "number" ? B.status : 422;
            (_ === 401 || _ === 419) && (m({
                message: Q,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            m({
                message: Q,
                type: "error"
            })
        }
    }
    ;
    return f.jsxs(oe.div, {
        className: "bg-white w-full p-4",
        variants: x,
        initial: "hidden",
        animate: "visible",
        children: [p && f.jsx(Mt, {
            message: p.message,
            type: p.type,
            onClose: () => m(null)
        }), f.jsxs("p", {
            className: "text-xs",
            children: [(T = s == null ? void 0 : s.lblAuthFullEmail) == null ? void 0 : T[l], " (", h, ")"]
        }), f.jsx("p", {
            className: "text-xs my-1",
            children: (A = s == null ? void 0 : s.lblAuthFullEmail2) == null ? void 0 : A[l]
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(M = s == null ? void 0 : s.lblInputRegEmail) == null ? void 0 : M[l], " ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (V = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : V[l]]
            })]
        }), f.jsx("input", {
            type: "email",
            id: "phone",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (D = s == null ? void 0 : s.lblInputRegEmail) == null ? void 0 : D[l],
            value: o,
            onChange: L => c(L.target.value),
            autoComplete: "off",
            onCopy: L => L.preventDefault(),
            onPaste: L => L.preventDefault(),
            onCut: L => L.preventDefault()
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
            onClick: g ? v : void 0,
            children: (U = s == null ? void 0 : s.lblProceed) == null ? void 0 : U[l]
        })]
    })
}
;
Kg();
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
var On;
(function(n) {
    n.Pop = "POP",
    n.Push = "PUSH",
    n.Replace = "REPLACE"
}
)(On || (On = {}));
const Bg = "popstate";
function cT(n) {
    n === void 0 && (n = {});
    function l(o, c) {
        let {pathname: h, search: d, hash: p} = o.location;
        return Fc("", {
            pathname: h,
            search: d,
            hash: p
        }, c.state && c.state.usr || null, c.state && c.state.key || "default")
    }
    function s(o, c) {
        return typeof c == "string" ? c : Ry(c)
    }
    return dT(l, s, null, n)
}
function yt(n, l) {
    if (n === !1 || n === null || typeof n > "u")
        throw new Error(l)
}
function Oy(n, l) {
    if (!n) {
        typeof console < "u" && console.warn(l);
        try {
            throw new Error(l)
        } catch {}
    }
}
function fT() {
    return Math.random().toString(36).substr(2, 8)
}
function Lg(n, l) {
    return {
        usr: n.state,
        key: n.key,
        idx: l
    }
}
function Fc(n, l, s, o) {
    return s === void 0 && (s = null),
    xi({
        pathname: typeof n == "string" ? n : n.pathname,
        search: "",
        hash: ""
    }, typeof l == "string" ? as(l) : l, {
        state: s,
        key: l && l.key || o || fT()
    })
}
function Ry(n) {
    let {pathname: l="/", search: s="", hash: o=""} = n;
    return s && s !== "?" && (l += s.charAt(0) === "?" ? s : "?" + s),
    o && o !== "#" && (l += o.charAt(0) === "#" ? o : "#" + o),
    l
}
function as(n) {
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
function dT(n, l, s, o) {
    o === void 0 && (o = {});
    let {window: c=document.defaultView, v5Compat: h=!1} = o
      , d = c.history
      , p = On.Pop
      , m = null
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
        p = On.Pop;
        let D = x()
          , U = D == null ? null : D - g;
        g = D,
        m && m({
            action: p,
            location: V.location,
            delta: U
        })
    }
    function T(D, U) {
        p = On.Push;
        let L = Fc(V.location, D, U);
        g = x() + 1;
        let B = Lg(L, g)
          , Q = V.createHref(L);
        try {
            d.pushState(B, "", Q)
        } catch (_) {
            if (_ instanceof DOMException && _.name === "DataCloneError")
                throw _;
            c.location.assign(Q)
        }
        h && m && m({
            action: p,
            location: V.location,
            delta: 1
        })
    }
    function A(D, U) {
        p = On.Replace;
        let L = Fc(V.location, D, U);
        g = x();
        let B = Lg(L, g)
          , Q = V.createHref(L);
        d.replaceState(B, "", Q),
        h && m && m({
            action: p,
            location: V.location,
            delta: 0
        })
    }
    function M(D) {
        let U = c.location.origin !== "null" ? c.location.origin : c.location.href
          , L = typeof D == "string" ? D : Ry(D);
        return L = L.replace(/ $/, "%20"),
        yt(U, "No window.location.(origin|href) available to create URL for href: " + L),
        new URL(L,U)
    }
    let V = {
        get action() {
            return p
        },
        get location() {
            return n(c, d)
        },
        listen(D) {
            if (m)
                throw new Error("A history only accepts one active listener");
            return c.addEventListener(Bg, v),
            m = D,
            () => {
                c.removeEventListener(Bg, v),
                m = null
            }
        },
        createHref(D) {
            return l(c, D)
        },
        createURL: M,
        encodeLocation(D) {
            let U = M(D);
            return {
                pathname: U.pathname,
                search: U.search,
                hash: U.hash
            }
        },
        push: T,
        replace: A,
        go(D) {
            return d.go(D)
        }
    };
    return V
}
var kg;
(function(n) {
    n.data = "data",
    n.deferred = "deferred",
    n.redirect = "redirect",
    n.error = "error"
}
)(kg || (kg = {}));
function hT(n, l, s) {
    return s === void 0 && (s = "/"),
    mT(n, l, s)
}
function mT(n, l, s, o) {
    let c = typeof l == "string" ? as(l) : l
      , h = Uy(c.pathname || "/", s);
    if (h == null)
        return null;
    let d = Vy(n);
    pT(d);
    let p = null;
    for (let m = 0; p == null && m < d.length; ++m) {
        let g = ET(h);
        p = wT(d[m], g)
    }
    return p
}
function Vy(n, l, s, o) {
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
        m.relativePath.startsWith("/") && (yt(m.relativePath.startsWith(o), 'Absolute route path "' + m.relativePath + '" nested under path ' + ('"' + o + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        m.relativePath = m.relativePath.slice(o.length));
        let g = ol([o, m.relativePath])
          , x = s.concat(m);
        h.children && h.children.length > 0 && (yt(h.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + g + '".')),
        Vy(h.children, l, x, g)),
        !(h.path == null && !h.index) && l.push({
            path: g,
            score: jT(g, h.index),
            routesMeta: x
        })
    }
    ;
    return n.forEach( (h, d) => {
        var p;
        if (h.path === "" || !((p = h.path) != null && p.includes("?")))
            c(h, d);
        else
            for (let m of zy(h.path))
                c(h, d, m)
    }
    ),
    l
}
function zy(n) {
    let l = n.split("/");
    if (l.length === 0)
        return [];
    let[s,...o] = l
      , c = s.endsWith("?")
      , h = s.replace(/\?$/, "");
    if (o.length === 0)
        return c ? [h, ""] : [h];
    let d = zy(o.join("/"))
      , p = [];
    return p.push(...d.map(m => m === "" ? h : [h, m].join("/"))),
    c && p.push(...d),
    p.map(m => n.startsWith("/") && m === "" ? "/" : m)
}
function pT(n) {
    n.sort( (l, s) => l.score !== s.score ? s.score - l.score : TT(l.routesMeta.map(o => o.childrenIndex), s.routesMeta.map(o => o.childrenIndex)))
}
const gT = /^:[\w-]+$/
  , yT = 3
  , xT = 2
  , vT = 1
  , bT = 10
  , ST = -2
  , Hg = n => n === "*";
function jT(n, l) {
    let s = n.split("/")
      , o = s.length;
    return s.some(Hg) && (o += ST),
    l && (o += xT),
    s.filter(c => !Hg(c)).reduce( (c, h) => c + (gT.test(h) ? yT : h === "" ? vT : bT), o)
}
function TT(n, l) {
    return n.length === l.length && n.slice(0, -1).every( (o, c) => o === l[c]) ? n[n.length - 1] - l[l.length - 1] : 0
}
function wT(n, l, s) {
    let {routesMeta: o} = n
      , c = {}
      , h = "/"
      , d = [];
    for (let p = 0; p < o.length; ++p) {
        let m = o[p]
          , g = p === o.length - 1
          , x = h === "/" ? l : l.slice(h.length) || "/"
          , v = AT({
            path: m.relativePath,
            caseSensitive: m.caseSensitive,
            end: g
        }, x)
          , T = m.route;
        if (!v)
            return null;
        Object.assign(c, v.params),
        d.push({
            params: c,
            pathname: ol([h, v.pathname]),
            pathnameBase: _T(ol([h, v.pathnameBase])),
            route: T
        }),
        v.pathnameBase !== "/" && (h = ol([h, v.pathnameBase]))
    }
    return d
}
function AT(n, l) {
    typeof n == "string" && (n = {
        path: n,
        caseSensitive: !1,
        end: !0
    });
    let[s,o] = NT(n.path, n.caseSensitive, n.end)
      , c = l.match(s);
    if (!c)
        return null;
    let h = c[0]
      , d = h.replace(/(.)\/+$/, "$1")
      , p = c.slice(1);
    return {
        params: o.reduce( (g, x, v) => {
            let {paramName: T, isOptional: A} = x;
            if (T === "*") {
                let V = p[v] || "";
                d = h.slice(0, h.length - V.length).replace(/(.)\/+$/, "$1")
            }
            const M = p[v];
            return A && !M ? g[T] = void 0 : g[T] = (M || "").replace(/%2F/g, "/"),
            g
        }
        , {}),
        pathname: h,
        pathnameBase: d,
        pattern: n
    }
}
function NT(n, l, s) {
    l === void 0 && (l = !1),
    s === void 0 && (s = !0),
    Oy(n === "*" || !n.endsWith("*") || n.endsWith("/*"), 'Route path "' + n + '" will be treated as if it were ' + ('"' + n.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + n.replace(/\*$/, "/*") + '".'));
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
function ET(n) {
    try {
        return n.split("/").map(l => decodeURIComponent(l).replace(/\//g, "%2F")).join("/")
    } catch (l) {
        return Oy(!1, 'The URL path "' + n + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + l + ").")),
        n
    }
}
function Uy(n, l) {
    if (l === "/")
        return n;
    if (!n.toLowerCase().startsWith(l.toLowerCase()))
        return null;
    let s = l.endsWith("/") ? l.length - 1 : l.length
      , o = n.charAt(s);
    return o && o !== "/" ? null : n.slice(s) || "/"
}
function CT(n, l) {
    l === void 0 && (l = "/");
    let {pathname: s, search: o="", hash: c=""} = typeof n == "string" ? as(n) : n;
    return {
        pathname: s ? s.startsWith("/") ? s : DT(s, l) : l,
        search: OT(o),
        hash: RT(c)
    }
}
function DT(n, l) {
    let s = l.replace(/\/+$/, "").split("/");
    return n.split("/").forEach(c => {
        c === ".." ? s.length > 1 && s.pop() : c !== "." && s.push(c)
    }
    ),
    s.length > 1 ? s.join("/") : "/"
}
function Cc(n, l, s, o) {
    return "Cannot include a '" + n + "' character in a manually specified " + ("`to." + l + "` field [" + JSON.stringify(o) + "].  Please separate it out to the ") + ("`to." + s + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function MT(n) {
    return n.filter( (l, s) => s === 0 || l.route.path && l.route.path.length > 0)
}
function By(n, l) {
    let s = MT(n);
    return l ? s.map( (o, c) => c === s.length - 1 ? o.pathname : o.pathnameBase) : s.map(o => o.pathnameBase)
}
function Ly(n, l, s, o) {
    o === void 0 && (o = !1);
    let c;
    typeof n == "string" ? c = as(n) : (c = xi({}, n),
    yt(!c.pathname || !c.pathname.includes("?"), Cc("?", "pathname", "search", c)),
    yt(!c.pathname || !c.pathname.includes("#"), Cc("#", "pathname", "hash", c)),
    yt(!c.search || !c.search.includes("#"), Cc("#", "search", "hash", c)));
    let h = n === "" || c.pathname === "", d = h ? "/" : c.pathname, p;
    if (d == null)
        p = s;
    else {
        let v = l.length - 1;
        if (!o && d.startsWith("..")) {
            let T = d.split("/");
            for (; T[0] === ".."; )
                T.shift(),
                v -= 1;
            c.pathname = T.join("/")
        }
        p = v >= 0 ? l[v] : "/"
    }
    let m = CT(c, p)
      , g = d && d !== "/" && d.endsWith("/")
      , x = (h || d === ".") && s.endsWith("/");
    return !m.pathname.endsWith("/") && (g || x) && (m.pathname += "/"),
    m
}
const ol = n => n.join("/").replace(/\/\/+/g, "/")
  , _T = n => n.replace(/\/+$/, "").replace(/^\/*/, "/")
  , OT = n => !n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n
  , RT = n => !n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n;
function VT(n) {
    return n != null && typeof n.status == "number" && typeof n.statusText == "string" && typeof n.internal == "boolean" && "data"in n
}
const ky = ["post", "put", "patch", "delete"];
new Set(ky);
const zT = ["get", ...ky];
new Set(zT);
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
const Vf = S.createContext(null)
  , UT = S.createContext(null)
  , wi = S.createContext(null)
  , tr = S.createContext(null)
  , Un = S.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Hy = S.createContext(null);
function Ai() {
    return S.useContext(tr) != null
}
function ar() {
    return Ai() || yt(!1),
    S.useContext(tr).location
}
function Py(n) {
    S.useContext(wi).static || S.useLayoutEffect(n)
}
function ga() {
    let {isDataRoute: n} = S.useContext(Un);
    return n ? JT() : BT()
}
function BT() {
    Ai() || yt(!1);
    let n = S.useContext(Vf)
      , {basename: l, future: s, navigator: o} = S.useContext(wi)
      , {matches: c} = S.useContext(Un)
      , {pathname: h} = ar()
      , d = JSON.stringify(By(c, s.v7_relativeSplatPath))
      , p = S.useRef(!1);
    return Py( () => {
        p.current = !0
    }
    ),
    S.useCallback(function(g, x) {
        if (x === void 0 && (x = {}),
        !p.current)
            return;
        if (typeof g == "number") {
            o.go(g);
            return
        }
        let v = Ly(g, JSON.parse(d), h, x.relative === "path");
        n == null && l !== "/" && (v.pathname = v.pathname === "/" ? l : ol([l, v.pathname])),
        (x.replace ? o.replace : o.push)(v, x.state, x)
    }, [l, o, d, h, n])
}
function LT() {
    let {matches: n} = S.useContext(Un)
      , l = n[n.length - 1];
    return l ? l.params : {}
}
function kT(n, l) {
    return HT(n, l)
}
function HT(n, l, s, o) {
    Ai() || yt(!1);
    let {navigator: c} = S.useContext(wi)
      , {matches: h} = S.useContext(Un)
      , d = h[h.length - 1]
      , p = d ? d.params : {};
    d && d.pathname;
    let m = d ? d.pathnameBase : "/";
    d && d.route;
    let g = ar(), x;
    if (l) {
        var v;
        let D = typeof l == "string" ? as(l) : l;
        m === "/" || (v = D.pathname) != null && v.startsWith(m) || yt(!1),
        x = D
    } else
        x = g;
    let T = x.pathname || "/"
      , A = T;
    if (m !== "/") {
        let D = m.replace(/^\//, "").split("/");
        A = "/" + T.replace(/^\//, "").split("/").slice(D.length).join("/")
    }
    let M = hT(n, {
        pathname: A
    })
      , V = XT(M && M.map(D => Object.assign({}, D, {
        params: Object.assign({}, p, D.params),
        pathname: ol([m, c.encodeLocation ? c.encodeLocation(D.pathname).pathname : D.pathname]),
        pathnameBase: D.pathnameBase === "/" ? m : ol([m, c.encodeLocation ? c.encodeLocation(D.pathnameBase).pathname : D.pathnameBase])
    })), h, s, o);
    return l && V ? S.createElement(tr.Provider, {
        value: {
            location: vi({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, x),
            navigationType: On.Pop
        }
    }, V) : V
}
function PT() {
    let n = FT()
      , l = VT(n) ? n.status + " " + n.statusText : n instanceof Error ? n.message : JSON.stringify(n)
      , s = n instanceof Error ? n.stack : null
      , c = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return S.createElement(S.Fragment, null, S.createElement("h2", null, "Unexpected Application Error!"), S.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, l), s ? S.createElement("pre", {
        style: c
    }, s) : null, null)
}
const qT = S.createElement(PT, null);
class YT extends S.Component {
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
        return this.state.error !== void 0 ? S.createElement(Un.Provider, {
            value: this.props.routeContext
        }, S.createElement(Hy.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function GT(n) {
    let {routeContext: l, match: s, children: o} = n
      , c = S.useContext(Vf);
    return c && c.static && c.staticContext && (s.route.errorElement || s.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = s.route.id),
    S.createElement(Un.Provider, {
        value: l
    }, o)
}
function XT(n, l, s, o) {
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
        let x = d.findIndex(v => v.route.id && (p == null ? void 0 : p[v.route.id]) !== void 0);
        x >= 0 || yt(!1),
        d = d.slice(0, Math.min(d.length, x + 1))
    }
    let m = !1
      , g = -1;
    if (s && o && o.v7_partialHydration)
        for (let x = 0; x < d.length; x++) {
            let v = d[x];
            if ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (g = x),
            v.route.id) {
                let {loaderData: T, errors: A} = s
                  , M = v.route.loader && T[v.route.id] === void 0 && (!A || A[v.route.id] === void 0);
                if (v.route.lazy || M) {
                    m = !0,
                    g >= 0 ? d = d.slice(0, g + 1) : d = [d[0]];
                    break
                }
            }
        }
    return d.reduceRight( (x, v, T) => {
        let A, M = !1, V = null, D = null;
        s && (A = p && v.route.id ? p[v.route.id] : void 0,
        V = v.route.errorElement || qT,
        m && (g < 0 && T === 0 ? (IT("route-fallback"),
        M = !0,
        D = null) : g === T && (M = !0,
        D = v.route.hydrateFallbackElement || null)));
        let U = l.concat(d.slice(0, T + 1))
          , L = () => {
            let B;
            return A ? B = V : M ? B = D : v.route.Component ? B = S.createElement(v.route.Component, null) : v.route.element ? B = v.route.element : B = x,
            S.createElement(GT, {
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
        return s && (v.route.ErrorBoundary || v.route.errorElement || T === 0) ? S.createElement(YT, {
            location: s.location,
            revalidation: s.revalidation,
            component: V,
            error: A,
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
var qy = function(n) {
    return n.UseBlocker = "useBlocker",
    n.UseRevalidator = "useRevalidator",
    n.UseNavigateStable = "useNavigate",
    n
}(qy || {})
  , Yy = function(n) {
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
}(Yy || {});
function KT(n) {
    let l = S.useContext(Vf);
    return l || yt(!1),
    l
}
function ZT(n) {
    let l = S.useContext(UT);
    return l || yt(!1),
    l
}
function QT(n) {
    let l = S.useContext(Un);
    return l || yt(!1),
    l
}
function Gy(n) {
    let l = QT()
      , s = l.matches[l.matches.length - 1];
    return s.route.id || yt(!1),
    s.route.id
}
function FT() {
    var n;
    let l = S.useContext(Hy)
      , s = ZT()
      , o = Gy();
    return l !== void 0 ? l : (n = s.errors) == null ? void 0 : n[o]
}
function JT() {
    let {router: n} = KT(qy.UseNavigateStable)
      , l = Gy(Yy.UseNavigateStable)
      , s = S.useRef(!1);
    return Py( () => {
        s.current = !0
    }
    ),
    S.useCallback(function(c, h) {
        h === void 0 && (h = {}),
        s.current && (typeof c == "number" ? n.navigate(c) : n.navigate(c, vi({
            fromRouteId: l
        }, h)))
    }, [n, l])
}
const Pg = {};
function IT(n, l, s) {
    Pg[n] || (Pg[n] = !0)
}
function $T(n, l) {
    n == null || n.v7_startTransition,
    n == null || n.v7_relativeSplatPath
}
function Xy(n) {
    let {to: l, replace: s, state: o, relative: c} = n;
    Ai() || yt(!1);
    let {future: h, static: d} = S.useContext(wi)
      , {matches: p} = S.useContext(Un)
      , {pathname: m} = ar()
      , g = ga()
      , x = Ly(l, By(p, h.v7_relativeSplatPath), m, c === "path")
      , v = JSON.stringify(x);
    return S.useEffect( () => g(JSON.parse(v), {
        replace: s,
        state: o,
        relative: c
    }), [g, v, c, s, o]),
    null
}
function si(n) {
    yt(!1)
}
function WT(n) {
    let {basename: l="/", children: s=null, location: o, navigationType: c=On.Pop, navigator: h, static: d=!1, future: p} = n;
    Ai() && yt(!1);
    let m = l.replace(/^\/*/, "/")
      , g = S.useMemo( () => ({
        basename: m,
        navigator: h,
        static: d,
        future: vi({
            v7_relativeSplatPath: !1
        }, p)
    }), [m, p, h, d]);
    typeof o == "string" && (o = as(o));
    let {pathname: x="/", search: v="", hash: T="", state: A=null, key: M="default"} = o
      , V = S.useMemo( () => {
        let D = Uy(x, m);
        return D == null ? null : {
            location: {
                pathname: D,
                search: v,
                hash: T,
                state: A,
                key: M
            },
            navigationType: c
        }
    }
    , [m, x, v, T, A, M, c]);
    return V == null ? null : S.createElement(wi.Provider, {
        value: g
    }, S.createElement(tr.Provider, {
        children: s,
        value: V
    }))
}
function ew(n) {
    let {children: l, location: s} = n;
    return kT(Jc(l), s)
}
new Promise( () => {}
);
function Jc(n, l) {
    l === void 0 && (l = []);
    let s = [];
    return S.Children.forEach(n, (o, c) => {
        if (!S.isValidElement(o))
            return;
        let h = [...l, c];
        if (o.type === S.Fragment) {
            s.push.apply(s, Jc(o.props.children, h));
            return
        }
        o.type !== si && yt(!1),
        !o.props.index || !o.props.children || yt(!1);
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
        o.props.children && (d.children = Jc(o.props.children, h)),
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
const tw = "6";
try {
    window.__reactRouterVersion = tw
} catch {}
const aw = "startTransition"
  , qg = sb[aw];
function nw(n) {
    let {basename: l, children: s, future: o, window: c} = n
      , h = S.useRef();
    h.current == null && (h.current = cT({
        window: c,
        v5Compat: !0
    }));
    let d = h.current
      , [p,m] = S.useState({
        action: d.action,
        location: d.location
    })
      , {v7_startTransition: g} = o || {}
      , x = S.useCallback(v => {
        g && qg ? qg( () => m(v)) : m(v)
    }
    , [m, g]);
    return S.useLayoutEffect( () => d.listen(x), [d, x]),
    S.useEffect( () => $T(o), [o]),
    S.createElement(WT, {
        basename: l,
        children: s,
        location: p.location,
        navigationType: p.action,
        navigator: d,
        future: o
    })
}
var Yg;
(function(n) {
    n.UseScrollRestoration = "useScrollRestoration",
    n.UseSubmit = "useSubmit",
    n.UseSubmitFetcher = "useSubmitFetcher",
    n.UseFetcher = "useFetcher",
    n.useViewTransitionState = "useViewTransitionState"
}
)(Yg || (Yg = {}));
var Gg;
(function(n) {
    n.UseFetcher = "useFetcher",
    n.UseFetchers = "useFetchers",
    n.UseScrollRestoration = "useScrollRestoration"
}
)(Gg || (Gg = {}));
const lw = ({setStep: n}) => {
    var $, ee, J, ie, me, ge, he, ue, W;
    const {language: l, translations: s} = it()
      , o = ga()
      , [c,h] = S.useState(!1)
      , [d,p] = S.useState("")
      , [m,g] = S.useState("")
      , x = d.trim() !== "" && d.length >= 6
      , [v,T] = S.useState(null)
      , [A,M] = S.useState(30)
      , [V,D] = S.useState(!0)
      , [U,L] = S.useState(!1)
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
    S.useEffect( () => {
        const P = localStorage.getItem("user_email");
        P && g(P)
    }
    , []);
    const Q = async () => {
        h(!0);
        try {
            const P = await Be("/api/v2/login-email-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    email: m
                }
            });
            P.status_code === 200 ? n(5) : T({
                message: P == null ? void 0 : P.message,
                type: "error"
            })
        } catch (P) {
            const N = P
              , O = typeof N == "object" && (N != null && N.message) ? N.message : "Failed. Please try again later."
              , Y = typeof N == "object" && typeof N.status == "number" ? N.status : 422;
            (Y === 401 || Y === 419) && (T({
                message: O,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            T({
                message: O,
                type: "error"
            })
        }
    }
    ;
    S.useEffect( () => {
        let P;
        return V && A > 0 && (P = setInterval( () => {
            M(N => N - 1)
        }
        , 1e3)),
        A === 0 && V && (clearInterval(P),
        D(!1),
        L(!0)),
        () => clearInterval(P)
    }
    , [A, V]);
    const _ = async () => {
        var P, N, O, Y, te;
        try {
            h(!0);
            const j = await Be("/api/v2/login-email-otp-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    otp: d
                }
            });
            j.status_code === 200 ? (localStorage.setItem("access_token", (P = j == null ? void 0 : j.data) == null ? void 0 : P.access_token),
            window.dispatchEvent(new Event("tokenUpdate")),
            localStorage.setItem("auth_name", (N = j == null ? void 0 : j.data) == null ? void 0 : N.name),
            localStorage.setItem("auth_email", (O = j == null ? void 0 : j.data) == null ? void 0 : O.email),
            localStorage.setItem("auth_phone", (Y = j == null ? void 0 : j.data) == null ? void 0 : Y.mobile_no),
            localStorage.setItem("auth_photo", (te = j == null ? void 0 : j.data) == null ? void 0 : te.profile_image),
            localStorage.removeItem("user_pwd"),
            o("/application")) : T({
                message: j == null ? void 0 : j.message,
                type: "error"
            })
        } catch (j) {
            const H = j
              , Z = typeof H == "object" && (H != null && H.message) ? H.message : "Failed. Please try again later."
              , X = typeof H == "object" && typeof H.status == "number" ? H.status : 422;
            (X === 401 || X === 419) && (T({
                message: Z,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            T({
                message: Z,
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
        children: [v && f.jsx(Mt, {
            message: v.message,
            type: v.type,
            onClose: () => T(null)
        }), f.jsxs("p", {
            className: "text-[10px]",
            children: [($ = s == null ? void 0 : s.lblAuthOtp1) == null ? void 0 : $[l], " (", m, ")"]
        }), f.jsx("p", {
            className: "text-[10px]",
            children: (ee = s == null ? void 0 : s.lblAuthOtp2) == null ? void 0 : ee[l]
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(J = s == null ? void 0 : s.lblInputAuthOtp) == null ? void 0 : J[l], " ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: [" *", (ie = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : ie[l]]
            })]
        }), f.jsx("input", {
            type: "text",
            id: "otp",
            autoComplete: "off",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-sm focus:ring-0 focus:border-slate-400 duration-300 border-[1.5px] focus:outline-0 block w-full p-2.5 my-2",
            placeholder: (me = s == null ? void 0 : s.lblInputOtp) == null ? void 0 : me[l],
            inputMode: "numeric",
            value: d,
            maxLength: 6,
            onCopy: P => P.preventDefault(),
            onPaste: P => P.preventDefault(),
            onCut: P => P.preventDefault(),
            onChange: P => {
                const N = P.target.value.replace(/\D/g, "");
                p(N)
            }
        }), f.jsxs("div", {
            children: [f.jsx(oe.button, {
                type: "button",
                disabled: c || !x,
                whileTap: {
                    scale: .95
                },
                className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
              ${c || !x ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838]"}`,
                onClick: !c && x ? _ : void 0,
                children: c ? ((ge = s == null ? void 0 : s.checking) == null ? void 0 : ge[l]) + "..." : (he = s == null ? void 0 : s.lblProceed) == null ? void 0 : he[l]
            }), f.jsx(oe.button, {
                onClick: Q,
                disabled: !U,
                className: `text-white mb-2 mt-2 md:ml-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition ${U ? "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`,
                children: U ? (ue = s == null ? void 0 : s.resendOtp) == null ? void 0 : ue[l] : ((W = s == null ? void 0 : s.resendOtp) == null ? void 0 : W[l]) + ` ${A}s`
            })]
        })]
    })
}
  , sw = ({setStep: n}) => {
    var $, ee, J, ie, me, ge, he, ue, W;
    const {language: l, translations: s} = it()
      , o = ga()
      , [c,h] = S.useState(!1)
      , [d,p] = S.useState("")
      , [m,g] = S.useState("")
      , x = d.trim() !== "" && d.length >= 6
      , [v,T] = S.useState(null)
      , [A,M] = S.useState(30)
      , [V,D] = S.useState(!0)
      , [U,L] = S.useState(!1)
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
    S.useEffect( () => {
        const P = localStorage.getItem("user_phone");
        P && g(P)
    }
    , []);
    const Q = async () => {
        h(!0);
        try {
            const P = await Be("/api/v2/registration", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    resend: "1"
                }
            });
            P.status_code === 200 ? (M(30),
            D(!0),
            L(!1)) : (M(30),
            D(!0),
            L(!1),
            T({
                message: P == null ? void 0 : P.message,
                type: "error"
            }))
        } catch (P) {
            const N = P
              , O = typeof N == "object" && (N != null && N.message) ? N.message : "Failed. Please try again later."
              , Y = typeof N == "object" && typeof N.status == "number" ? N.status : 422;
            (Y === 401 || Y === 419) && (T({
                message: O,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            T({
                message: O,
                type: "error"
            })
        } finally {
            h(!1)
        }
    }
    ;
    S.useEffect( () => {
        let P;
        return V && A > 0 && (P = setInterval( () => {
            M(N => N - 1)
        }
        , 1e3)),
        A === 0 && V && (clearInterval(P),
        D(!1),
        L(!0)),
        () => clearInterval(P)
    }
    , [A, V]);
    const _ = async () => {
        var P, N, O, Y, te;
        h(!0);
        try {
            const j = await Be("/api/v2/registration-otp", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    otp: d
                }
            });
            j.status_code === 200 ? (localStorage.setItem("access_token", (P = j == null ? void 0 : j.data) == null ? void 0 : P.access_token),
            window.dispatchEvent(new Event("tokenUpdate")),
            localStorage.setItem("auth_name", (N = j == null ? void 0 : j.data) == null ? void 0 : N.name),
            localStorage.setItem("auth_email", (O = j == null ? void 0 : j.data) == null ? void 0 : O.email),
            localStorage.setItem("auth_phone", (Y = j == null ? void 0 : j.data) == null ? void 0 : Y.mobile_no),
            localStorage.setItem("auth_photo", (te = j == null ? void 0 : j.data) == null ? void 0 : te.profile_image),
            localStorage.removeItem("user_pwd"),
            o("/application")) : T({
                message: j == null ? void 0 : j.message,
                type: "error"
            })
        } catch (j) {
            const H = j
              , Z = typeof H == "object" && (H != null && H.message) ? H.message : "Failed. Please try again later."
              , X = typeof H == "object" && typeof H.status == "number" ? H.status : 422;
            (X === 401 || X === 419) && (T({
                message: Z,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            T({
                message: Z,
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
        children: [v && f.jsx(Mt, {
            message: v.message,
            type: v.type,
            onClose: () => T(null)
        }), f.jsxs("p", {
            className: "text-[10px]",
            children: [($ = s == null ? void 0 : s.lblAuthOtp1) == null ? void 0 : $[l], " (", m, ")"]
        }), f.jsx("p", {
            className: "text-[10px]",
            children: (ee = s == null ? void 0 : s.lblAuthOtp2) == null ? void 0 : ee[l]
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(J = s == null ? void 0 : s.lblInputAuthOtp) == null ? void 0 : J[l], " ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: [" *", (ie = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : ie[l]]
            })]
        }), f.jsx("input", {
            type: "text",
            id: "otp",
            autoComplete: "off",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-sm focus:ring-0 focus:border-slate-400 duration-300 border-[1.5px] focus:outline-0 block w-full p-2.5 my-2",
            placeholder: (me = s == null ? void 0 : s.lblInputOtp) == null ? void 0 : me[l],
            inputMode: "numeric",
            value: d,
            maxLength: 6,
            onCopy: P => P.preventDefault(),
            onPaste: P => P.preventDefault(),
            onCut: P => P.preventDefault(),
            onChange: P => {
                const N = P.target.value.replace(/\D/g, "");
                p(N)
            }
        }), f.jsx(oe.button, {
            type: "button",
            disabled: c || !x,
            whileTap: {
                scale: .95
            },
            className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
              ${c || !x ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838]"}`,
            onClick: !c && x ? _ : void 0,
            children: c ? (ge = s == null ? void 0 : s.checking) == null ? void 0 : ge[l] : (he = s == null ? void 0 : s.lblProceed) == null ? void 0 : he[l]
        }), f.jsx(oe.button, {
            onClick: Q,
            disabled: !U,
            className: `text-white mb-2 mt-2 md:ml-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition ${U ? "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`,
            children: U ? (ue = s == null ? void 0 : s.resendOtp) == null ? void 0 : ue[l] : ((W = s == null ? void 0 : s.resendOtp) == null ? void 0 : W[l]) + ` ${A}s`
        })]
    })
}
  , iw = ({setStep: n}) => {
    var A, M, V, D, U;
    const {language: l, translations: s} = it()
      , [o,c] = S.useState("");
    let h = o.trim() !== "" && o.length >= 11;
    const [d,p] = S.useState(!1)
      , [m,g] = S.useState(null)
      , x = L => {
        const B = L.target.value.replace(/\D/g, "");
        c(B)
    }
      , v = async () => {
        var L, B;
        p(!0);
        try {
            h = !1;
            const Q = await Be("/api/v2/change-password", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    mobile_no: o
                }
            });
            Q.status_code === 200 ? (localStorage.setItem("user_phone", o),
            localStorage.setItem("user_email", (L = Q.data) == null ? void 0 : L.email),
            n((B = Q.data) != null && B.email_confirmed ? 9 : 8)) : g({
                message: Q == null ? void 0 : Q.message,
                type: "error"
            })
        } catch (Q) {
            const _ = Q
              , $ = typeof _ == "object" && (_ != null && _.message) ? _.message : "Failed. Please try again later."
              , ee = typeof _ == "object" && typeof _.status == "number" ? _.status : 422;
            (ee === 401 || ee === 419) && (g({
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
      , T = {
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
        variants: T,
        initial: "hidden",
        animate: "visible",
        children: [m && f.jsx(Mt, {
            message: m.message,
            type: m.type,
            onClose: () => g(null)
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(A = s == null ? void 0 : s.lblInputLoginMobilePassChange) == null ? void 0 : A[l], " ", " ", f.jsx("span", {
                className: "text-red-600 text-[10px]",
                children: (M = s == null ? void 0 : s.lblInputLoginMobileMsg) == null ? void 0 : M[l]
            })]
        }), f.jsx("input", {
            type: "tel",
            id: "phone",
            autoComplete: "off",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (V = s == null ? void 0 : s.lblInputLoginMobile) == null ? void 0 : V[l],
            inputMode: "numeric",
            pattern: "[0-9]*",
            maxLength: 11,
            value: o,
            onChange: x
        }), f.jsx(oe.button, {
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
            children: d ? (D = s == null ? void 0 : s.checking) == null ? void 0 : D[l] : (U = s == null ? void 0 : s.lblProceed) == null ? void 0 : U[l]
        })]
    })
}
  , ow = ({setStep: n}) => {
    var M, V, D, U, L, B, Q;
    const {language: l, translations: s} = it()
      , [o,c] = S.useState("")
      , [h,d] = S.useState("")
      , [p,m] = S.useState(null)
      , [g,x] = S.useState(!1)
      , v = o.trim() !== "" && _y(o);
    S.useEffect( () => {
        const _ = localStorage.getItem("user_email");
        if (_)
            try {
                const $ = JSON.parse(_);
                d($)
            } catch {
                d(_)
            }
    }
    , []);
    const T = async () => {
        try {
            x(!0);
            const _ = await Be("/api/v2/change-password-email-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    email: o
                }
            });
            _.status_code === 200 ? n(9) : m({
                message: _ == null ? void 0 : _.message,
                type: "error"
            })
        } catch (_) {
            const $ = _
              , ee = typeof $ == "object" && ($ != null && $.message) ? $.message : "Failed. Please try again later."
              , J = typeof $ == "object" && typeof $.status == "number" ? $.status : 422;
            (J === 401 || J === 419) && (m({
                message: ee,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            m({
                message: ee,
                type: "error"
            })
        } finally {
            x(!1)
        }
    }
      , A = {
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
        variants: A,
        initial: "hidden",
        animate: "visible",
        children: [p && f.jsx(Mt, {
            message: p.message,
            type: p.type,
            onClose: () => m(null)
        }), f.jsxs("p", {
            className: "text-xs",
            children: [(M = s == null ? void 0 : s.lblAuthFullEmail) == null ? void 0 : M[l], " (", h, ")"]
        }), f.jsx("p", {
            className: "text-xs my-1",
            children: (V = s == null ? void 0 : s.lblAuthFullEmail2) == null ? void 0 : V[l]
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
            onChange: _ => c(_.target.value),
            autoComplete: "off",
            onCopy: _ => _.preventDefault(),
            onPaste: _ => _.preventDefault(),
            onCut: _ => _.preventDefault()
        }), f.jsx(oe.button, {
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
            onClick: !g && v ? T : void 0,
            children: g ? ((B = s == null ? void 0 : s.checking) == null ? void 0 : B[l]) + "..." : (Q = s == null ? void 0 : s.lblProceed) == null ? void 0 : Q[l]
        })]
    })
}
  , rw = ({setStep: n}) => {
    var _, $, ee, J, ie, me, ge, he, ue;
    const {language: l, translations: s} = it()
      , [o,c] = S.useState("")
      , [h,d] = S.useState(!1)
      , [p,m] = S.useState("")
      , [g,x] = S.useState(null)
      , [v,T] = S.useState(30)
      , [A,M] = S.useState(!0)
      , [V,D] = S.useState(!1)
      , U = o.trim() !== "" && o.length >= 6;
    S.useEffect( () => {
        const W = localStorage.getItem("user_email");
        W && m(W)
    }
    , []);
    const L = async () => {
        var W, P, N, O;
        d(!0);
        try {
            const Y = localStorage.getItem("user_phone")
              , te = localStorage.getItem("user_pwd")
              , j = await Be("/api/v2/change-password-otp", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    mobile_no: Y,
                    password: te,
                    otp: o
                }
            });
            j.status_code === 200 ? (localStorage.setItem("auth_name", (W = j == null ? void 0 : j.data) == null ? void 0 : W.name),
            localStorage.setItem("auth_email", (P = j == null ? void 0 : j.data) == null ? void 0 : P.email),
            localStorage.setItem("auth_phone", (N = j == null ? void 0 : j.data) == null ? void 0 : N.mobile_no),
            localStorage.setItem("auth_photo", (O = j == null ? void 0 : j.data) == null ? void 0 : O.profile_image),
            n(10)) : x({
                message: j == null ? void 0 : j.message,
                type: "error"
            })
        } catch (Y) {
            const te = Y
              , j = typeof te == "object" && (te != null && te.message) ? te.message : "Failed. Please try again later."
              , H = typeof te == "object" && typeof te.status == "number" ? te.status : 422;
            (H === 401 || H === 419) && (x({
                message: j,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            x({
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
            const W = localStorage.getItem("user_phone")
              , P = await Be("/api/v2/change-password", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    mobile_no: W
                }
            });
            P.status_code === 200 ? (T(30),
            M(!0),
            D(!1)) : (T(30),
            M(!0),
            D(!1),
            x({
                message: P == null ? void 0 : P.message,
                type: "error"
            }))
        } catch (W) {
            const P = W
              , N = typeof P == "object" && (P != null && P.message) ? P.message : "Failed. Please try again later."
              , O = typeof P == "object" && typeof P.status == "number" ? P.status : 422;
            (O === 401 || O === 419) && (x({
                message: N,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            x({
                message: N,
                type: "error"
            })
        } finally {
            d(!1)
        }
    }
    ;
    S.useEffect( () => {
        let W;
        return A && v > 0 && (W = setInterval( () => {
            T(P => P - 1)
        }
        , 1e3)),
        v === 0 && A && (clearInterval(W),
        M(!1),
        D(!0)),
        () => clearInterval(W)
    }
    , [v, A]);
    const Q = {
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
        variants: Q,
        initial: "hidden",
        animate: "visible",
        children: [g && f.jsx(Mt, {
            message: g.message,
            type: g.type,
            onClose: () => x(null)
        }), f.jsxs("p", {
            className: "text-[10px]",
            children: [(_ = s == null ? void 0 : s.lblAuthOtp1) == null ? void 0 : _[l], " ", " ", " (", p, ")"]
        }), f.jsx("p", {
            className: "text-[10px]",
            children: ($ = s == null ? void 0 : s.lblAuthOtp2) == null ? void 0 : $[l]
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(ee = s == null ? void 0 : s.lblInputAuthOtp) == null ? void 0 : ee[l], " ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: [" *", (J = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : J[l]]
            })]
        }), f.jsx("input", {
            type: "text",
            id: "otp",
            autoComplete: "off",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-blue-400 focus:border-[0.1px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (ie = s == null ? void 0 : s.lblInputOtp) == null ? void 0 : ie[l],
            inputMode: "numeric",
            value: o,
            maxLength: 6,
            onCopy: W => W.preventDefault(),
            onPaste: W => W.preventDefault(),
            onCut: W => W.preventDefault(),
            onChange: W => {
                const P = W.target.value.replace(/\D/g, "");
                c(P)
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
            children: h ? ((me = s == null ? void 0 : s.checking) == null ? void 0 : me[l]) + "..." : (ge = s == null ? void 0 : s.lblProceed) == null ? void 0 : ge[l]
        }), f.jsx(oe.button, {
            onClick: B,
            disabled: !V,
            className: `text-white mb-2 mt-2 md:ml-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition ${V ? "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`,
            children: V ? (he = s == null ? void 0 : s.resendOtp) == null ? void 0 : he[l] : ((ue = s == null ? void 0 : s.resendOtp) == null ? void 0 : ue[l]) + ` ${v}s`
        })]
    })
}
  , uw = ({setStep: n}) => {
    var V, D, U, L, B, Q, _, $, ee;
    const {language: l, translations: s} = it()
      , o = ga()
      , [c,h] = S.useState("")
      , [d,p] = S.useState(!1)
      , [m,g] = S.useState("")
      , [x,v] = S.useState(null)
      , T = c.trim() !== "" && c.length >= 6 && m.trim() !== "" && m.length >= 6
      , A = async () => {
        var J, ie, me, ge, he;
        try {
            if (p(!0),
            c !== m) {
                v({
                    message: "Password and confirm password do not match",
                    type: "error"
                });
                return
            }
            const ue = await Be("/api/v2/change-password-confirm", {
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
            ue.status_code === 200 ? (localStorage.setItem("access_token", (J = ue == null ? void 0 : ue.data) == null ? void 0 : J.access_token),
            window.dispatchEvent(new Event("tokenUpdate")),
            localStorage.setItem("auth_name", (ie = ue == null ? void 0 : ue.data) == null ? void 0 : ie.name),
            localStorage.setItem("auth_email", (me = ue == null ? void 0 : ue.data) == null ? void 0 : me.email),
            localStorage.setItem("auth_phone", (ge = ue == null ? void 0 : ue.data) == null ? void 0 : ge.mobile_no),
            localStorage.setItem("auth_photo", (he = ue == null ? void 0 : ue.data) == null ? void 0 : he.profile_image),
            localStorage.removeItem("user_pwd"),
            o("/application")) : v({
                message: ue == null ? void 0 : ue.message,
                type: "error"
            })
        } catch (ue) {
            const W = ue
              , P = typeof W == "object" && (W != null && W.message) ? W.message : "Failed. Please try again later."
              , N = typeof W == "object" && typeof W.status == "number" ? W.status : 422;
            (N === 401 || N === 419) && (v({
                message: P,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            v({
                message: P,
                type: "error"
            })
        } finally {
            p(!1)
        }
    }
      , M = {
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
        variants: M,
        initial: "hidden",
        animate: "visible",
        children: [x && f.jsx(Mt, {
            message: x.message,
            type: x.type,
            onClose: () => v(null)
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(V = s == null ? void 0 : s.lblInputPassword) == null ? void 0 : V[l], " ", " ", f.jsx("span", {
                className: "text-red-600 text-[10px]",
                children: (D = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : D[l]
            })]
        }), f.jsx("input", {
            type: "password",
            id: "password",
            autoComplete: "off",
            onCopy: J => J.preventDefault(),
            onPaste: J => J.preventDefault(),
            onCut: J => J.preventDefault(),
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
                children: (Q = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : Q[l]
            })]
        }), f.jsx("input", {
            type: "password",
            id: "password_confirm",
            onCopy: J => J.preventDefault(),
            onPaste: J => J.preventDefault(),
            onCut: J => J.preventDefault(),
            autoComplete: "off",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-blue-400 focus:border-[0.1px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (_ = s == null ? void 0 : s.lblInputRePassword) == null ? void 0 : _[l],
            value: m,
            onChange: J => g(J.target.value)
        }), f.jsx(oe.button, {
            type: "button",
            disabled: !T,
            whileTap: {
                scale: .95
            },
            className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
         ${d || !T ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer"}`,
            onClick: !d && T ? A : void 0,
            children: d ? (($ = s == null ? void 0 : s.checking) == null ? void 0 : $[l]) + "..." : (ee = s == null ? void 0 : s.lblProceed) == null ? void 0 : ee[l]
        })]
    })
}
  , cw = ({setStep: n}) => {
    var $, ee, J, ie, me, ge, he, ue, W, P;
    const {language: l, translations: s} = it()
      , o = ga()
      , [c,h] = S.useState("")
      , [d,p] = S.useState(!1)
      , [m,g] = S.useState("")
      , x = c.trim() !== "" && c.length >= 6
      , [v,T] = S.useState(null)
      , [A,M] = S.useState(30)
      , [V,D] = S.useState(!0)
      , [U,L] = S.useState(!1)
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
    S.useEffect( () => {
        const N = localStorage.getItem("user_email");
        N && g(N)
    }
    , []);
    const Q = async () => {
        var N, O, Y, te, j;
        try {
            p(!0);
            const H = localStorage.getItem("user_phone")
              , Z = localStorage.getItem("user_pwd")
              , X = await Be("/api/v2/login-otp", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    mobile_no: H,
                    password: Z,
                    otp: c
                }
            });
            X.status_code === 200 ? (localStorage.setItem("access_token", (N = X == null ? void 0 : X.data) == null ? void 0 : N.access_token),
            window.dispatchEvent(new Event("tokenUpdate")),
            localStorage.setItem("auth_name", (O = X == null ? void 0 : X.data) == null ? void 0 : O.name),
            localStorage.setItem("auth_email", (Y = X == null ? void 0 : X.data) == null ? void 0 : Y.email),
            localStorage.setItem("auth_phone", (te = X == null ? void 0 : X.data) == null ? void 0 : te.mobile_no),
            localStorage.setItem("auth_photo", (j = X == null ? void 0 : X.data) == null ? void 0 : j.profile_image),
            localStorage.removeItem("user_pwd"),
            o("/application")) : T({
                message: X == null ? void 0 : X.message,
                type: "error"
            })
        } catch (H) {
            const Z = H
              , X = typeof Z == "object" && (Z != null && Z.message) ? Z.message : "Failed. Please try again later."
              , le = typeof Z == "object" && typeof Z.status == "number" ? Z.status : 422;
            (le === 401 || le === 419) && (T({
                message: X,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            T({
                message: X,
                type: "error"
            })
        } finally {
            p(!1)
        }
    }
      , _ = async () => {
        p(!0);
        try {
            const N = localStorage.getItem("user_phone")
              , O = localStorage.getItem("user_pwd")
              , Y = await Be("/api/v2/login", {
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
            Y.status_code === 200 ? (M(30),
            D(!0),
            L(!1)) : (M(30),
            D(!0),
            L(!1),
            T({
                message: Y == null ? void 0 : Y.message,
                type: "error"
            }))
        } catch (N) {
            const O = N
              , Y = typeof O == "object" && (O != null && O.message) ? O.message : "Failed. Please try again later."
              , te = typeof O == "object" && typeof O.status == "number" ? O.status : 422;
            (te === 401 || te === 419) && (T({
                message: Y,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            T({
                message: Y,
                type: "error"
            })
        } finally {
            p(!1)
        }
    }
    ;
    return S.useEffect( () => {
        let N;
        return V && A > 0 && (N = setInterval( () => {
            M(O => O - 1)
        }
        , 1e3)),
        A === 0 && V && (clearInterval(N),
        D(!1),
        L(!0)),
        () => clearInterval(N)
    }
    , [A, V]),
    f.jsxs(oe.div, {
        className: "bg-white w-full p-4",
        variants: B,
        initial: "hidden",
        animate: "visible",
        children: [v && f.jsx(Mt, {
            message: v.message,
            type: v.type,
            onClose: () => T(null)
        }), f.jsxs("p", {
            className: "text-[10px]",
            children: [($ = s == null ? void 0 : s.lblAuthOtp1) == null ? void 0 : $[l], " (", m, ")"]
        }), f.jsx("p", {
            className: "text-[10px]",
            children: (ee = s == null ? void 0 : s.lblAuthOtp2) == null ? void 0 : ee[l]
        }), f.jsxs("p", {
            className: "text-xs mt-4",
            children: [(J = s == null ? void 0 : s.lblInputAuthOtp) == null ? void 0 : J[l], " ", " ", f.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: [" *", (ie = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : ie[l]]
            })]
        }), f.jsx("input", {
            type: "text",
            id: "otp",
            autoComplete: "off",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-sm focus:ring-0 focus:border-slate-400 duration-300 border-[1.5px] focus:outline-0 block w-full p-2.5 my-2",
            placeholder: (me = s == null ? void 0 : s.lblInputOtp) == null ? void 0 : me[l],
            inputMode: "numeric",
            value: c,
            maxLength: 6,
            onCopy: N => N.preventDefault(),
            onPaste: N => N.preventDefault(),
            onCut: N => N.preventDefault(),
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
                children: (ge = s == null ? void 0 : s.back) == null ? void 0 : ge[l]
            }), f.jsx(oe.button, {
                type: "button",
                disabled: false,
                whileTap: {
                    scale: .95
                },
                className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
               ${d || !x ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer"}`,
                onClick: x ? Q : void 0,
                children: (ue = s == null ? void 0 : s.lblProceed) == null ? void 0 : ue[l]
            }), f.jsx(oe.button, {
                onClick: _,
                disabled: false,
                className: `text-white mb-2 mt-2 md:ml-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition ${U ? "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`,
                children: U ? (W = s == null ? void 0 : s.resendOtp) == null ? void 0 : W[l] : ((P = s == null ? void 0 : s.resendOtp) == null ? void 0 : P[l]) + ` ${A}s`
            })]
        })]
    })
}
;
async function Ky() {
    const n = localStorage.getItem("access_token")
      , l = {
        Accept: "application/json",
        language: "en"
    };
    return n && (l.Authorization = `Bearer ${n}`),
    await Be("/api/v2/home", {
        method: "GET",
        headers: l
    })
}
const Lt = n => {
    localStorage.clear(),
    window.dispatchEvent(new Event("tokenUpdate")),
    n("/")
}
  , fw = ({setActiveStep: n}) => {
    var we, He, Ve, at, Ut, St, Kt, wa, dt, Aa, ya, Na, ta, Ba, Ea, La, Ne, _t, $e;
    const {language: l, translations: s} = it()
      , o = ga()
      , [c,h] = S.useState(!1)
      , [d,p] = S.useState(null)
      , [m,g] = S.useState([])
      , [x,v] = S.useState("")
      , [T,A] = S.useState("")
      , [M,V] = S.useState("")
      , [D,U] = S.useState(!1)
      , [L,B] = S.useState([])
      , [Q,_] = S.useState([])
      , [$,ee] = S.useState("")
      , [J,ie] = S.useState("")
      , [me,ge] = S.useState(0)
      , [he,ue] = S.useState([])
      , [W,P] = S.useState("")
      , [N,O] = S.useState("")
      , [Y,te] = S.useState("")
      , [j,H] = S.useState(!1)
      , [Z,X] = S.useState(!1);
    S.useEffect( () => {
        const se = localStorage.getItem("applicant");
        if (se)
            try {
                const de = JSON.parse(se);
                v(de.highcom || null),
                A(de.webfile_id || null),
                V(de.webfile_id_repeat || null),
                ge(de.visa_fee || null),
                O(de.family_count || null),
                te(de.visit_purpose || null),
                P(de.visa_type || null),
                ee(de.ivac_name || null),
                ie(de.ivac_id || null)
            } catch {
                console.error("Invalid JSON in localStorage")
            }
    }
    , []),
    S.useEffect( () => {
        (async () => {
            var de, ot, ze, Fe, Je;
            try {
                const Oe = await Ky();
                Oe.status_code === 200 ? (X((de = Oe == null ? void 0 : Oe.data) == null ? void 0 : de.slot_available),
                g((ot = Oe == null ? void 0 : Oe.data) == null ? void 0 : ot.centers),
                B((ze = Oe == null ? void 0 : Oe.data) == null ? void 0 : ze.ivacs),
                _((Fe = Oe == null ? void 0 : Oe.data) == null ? void 0 : Fe.ivacs),
                ue((Je = Oe == null ? void 0 : Oe.data) == null ? void 0 : Je.visa_types),
                localStorage.setItem("initialData", JSON.stringify(Oe.data))) : p({
                    message: Oe == null ? void 0 : Oe.message,
                    type: "error"
                })
            } catch (Oe) {
                let Ot = "Failed to load initial data. Please try again later.";
                typeof Oe == "object" && Oe !== null && "message"in Oe && (Ot = String(Oe.message)),
                p({
                    message: Ot,
                    type: "error"
                })
            }
        }
        )()
    }
    , []);
    const le = async () => {
        try {
            H(!0);
            const se = localStorage.getItem("access_token")
              , de = await Be("/api/v2/payment/check/" + T, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    language: l,
                    Authorization: `Bearer ${se}`
                }
            });
            de.status_code === 200 ? U(!0) : (U(!1),
            p({
                message: de == null ? void 0 : de.message,
                type: "error"
            }))
        } catch (se) {
            const de = se
              , ot = typeof de == "object" && (de != null && de.message) ? de.message : "Failed to get payment data. Please try again later."
              , ze = typeof de == "object" && typeof de.status == "number" ? de.status : 422;
            (ze === 401 || ze === 419) && (p({
                message: "Unauthorized, session timed out",
                type: "error"
            }),
            setTimeout( () => {
                Lt(o)
            }
            , 5e3)),
            p({
                message: ot,
                type: "error"
            })
        } finally {
            H(!1)
        }
    }
    ;
    S.useEffect( () => {
        T.length === 12 && M.length === 12 && (T === M ? le() : p({
            message: "Web File ID does not match",
            type: "error"
        }))
    }
    , [T, M]);
    const ae = se => {
        const de = se.target.value;
        v(de);
        const ot = L.filter(Fe => Fe.center_info_id == de);
        _(ot),
        ee(""),
        ge(0);
        const ze = localStorage.getItem("applicant");
        if (ze) {
            const Fe = JSON.parse(ze);
            "ivac_id"in Fe && delete Fe.ivac_id,
            "ivac_name"in Fe && delete Fe.ivac_name,
            localStorage.setItem("applicant", JSON.stringify(Fe))
        }
    }
      , G = async se => {
        var de;
        try {
            H(!0);
            const [ot,ze] = se.target.value.split("|");
            ee(ot),
            ie(ze);
            const Fe = localStorage.getItem("access_token")
              , Je = await Be("/api/v2/payment/notify-amount-change", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l,
                    Authorization: `Bearer ${Fe}`
                },
                body: {
                    api_key: ot
                }
            });
            Je.status_code === 200 ? ge((de = Je == null ? void 0 : Je.data) == null ? void 0 : de.new_visa_fee) : p({
                message: (Je == null ? void 0 : Je.message) || "Failed to notify",
                type: "error"
            })
        } catch (ot) {
            const ze = ot
              , Fe = typeof ze == "object" && (ze != null && ze.message) ? ze.message : "Failed to get payment data. Please try again later."
              , Je = typeof ze == "object" && typeof ze.status == "number" ? ze.status : 422;
            (Je === 401 || Je === 419) && (p({
                message: "Unauthorized, session timed out",
                type: "error"
            }),
            setTimeout( () => {
                Lt(o)
            }
            , 5e3)),
            p({
                message: Fe,
                type: "error"
            })
        } finally {
            H(!1)
        }
    }
      , ve = x.trim() !== "" && T.trim() !== "" && T.length >= 12 && M.trim() !== "" && M.length >= 12 && D && $.trim() !== "" && me !== 0 && W.trim() !== "" && N.trim() !== "" && Y.trim() !== "" && Y.length >= 15
      , ye = async () => {
        try {
            const se = localStorage.getItem("access_token");
            h(!0);
            const ot = localStorage.getItem("is_edit") === "true" ? "/api/v2/payment/application-info-edit" : "/api/v2/payment/application-info-submit"
              , ze = await Be(ot, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l,
                    Authorization: `Bearer ${se}`
                },
                body: {
                    highcom: x,
                    webfile_id: T,
                    webfile_id_repeat: M,
                    ivac_id: J,
                    visa_type: W,
                    family_count: N,
                    visit_purpose: Y
                }
            });
            if (ze.status_code === 200) {
                n(2);
                const Fe = {
                    highcom: x,
                    webfile_id: T,
                    webfile_id_repeat: M,
                    ivac_id: J,
                    ivac_name: $,
                    visa_fee: me,
                    visa_type: W,
                    family_count: N,
                    visit_purpose: Y
                };
                localStorage.setItem("applicant", JSON.stringify(Fe))
            } else
                p({
                    message: ze == null ? void 0 : ze.message,
                    type: "error"
                });
            h(!1)
        } catch (se) {
            h(!1);
            const de = se
              , ot = typeof de == "object" && (de != null && de.message) ? de.message : "Failed to get payment data. Please try again later."
              , ze = typeof de == "object" && typeof de.status == "number" ? de.status : 422;
            (ze === 401 || ze === 419) && (p({
                message: "Unauthorized, session timed out",
                type: "error"
            }),
            setTimeout( () => {
                Lt(o)
            }
            , 5e3)),
            p({
                message: ot,
                type: "error"
            })
        }
    }
    ;
    return j ? f.jsx(My, {}) : f.jsxs("div", {
        className: "grid grid-cols-1 gap-x-6 gap-y-2",
        children: [d && f.jsx(Mt, {
            message: d.message,
            type: d.type,
            onClose: () => p(null)
        }), Z ? f.jsxs(f.Fragment, {
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
                        value: x,
                        onChange: ae,
                        className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 sm:text-sm/6",
                        children: [f.jsx("option", {
                            value: "",
                            disabled: false,
                            hidden: false,
                            className: "text-gray-500 font-light",
                            children: (Ve = s == null ? void 0 : s.lblSelectHighCommission) == null ? void 0 : Ve[l]
                        }), m.map(se => f.jsx("option", {
                            value: se.id,
                            className: "text-black font-light",
                            children: se == null ? void 0 : se.c_name
                        }, se.id))]
                    })
                })]
            }), f.jsxs("div", {
                className: "sm:col-span-3",
                children: [f.jsxs("label", {
                    htmlFor: "first-name",
                    className: "block text-xs font-light text-black uppercase",
                    children: [(at = s == null ? void 0 : s.lblInputWebFile) == null ? void 0 : at[l], " ", f.jsxs("span", {
                        className: "text-red-600 text-[10px]",
                        children: ["(", (Ut = s == null ? void 0 : s.lblMustFace7) == null ? void 0 : Ut[l], ")"]
                    })]
                }), f.jsx("div", {
                    className: "mt-2",
                    children: f.jsx("input", {
                        type: "text",
                        name: "webfile_id",
                        id: "webfile_id",
                        onCopy: se => se.preventDefault(),
                        onPaste: se => se.preventDefault(),
                        onCut: se => se.preventDefault(),
                        maxLength: 12,
                        autoComplete: "off",
                        value: T,
                        onChange: se => {
                            A(se.target.value),
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
                    children: [(St = s == null ? void 0 : s.lblInputWebFileAgain) == null ? void 0 : St[l], " ", " ", f.jsxs("span", {
                        className: "text-red-600 text-[10px]",
                        children: ["*(", (Kt = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : Kt[l], ")"]
                    })]
                }), f.jsx("div", {
                    className: "mt-2",
                    children: f.jsx("input", {
                        type: "text",
                        name: "first-name",
                        id: "first-name",
                        onCopy: se => se.preventDefault(),
                        onPaste: se => se.preventDefault(),
                        onCut: se => se.preventDefault(),
                        maxLength: 12,
                        autoComplete: "off",
                        value: M,
                        onChange: se => {
                            V(se.target.value),
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
                    children: (wa = s == null ? void 0 : s.lblInputSelectIvac) == null ? void 0 : wa[l]
                }), f.jsx("div", {
                    className: "mt-2",
                    children: f.jsxs("select", {
                        id: "center",
                        name: "center",
                        disabled: false,
                        value: $ && J ? `${$}|${J}` : "",
                        onChange: G,
                        className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400  sm:text-sm/6",
                        children: [f.jsx("option", {
                            value: "",
                            disabled: false,
                            hidden: false,
                            children: (dt = s == null ? void 0 : s.lblInputSelectIvac) == null ? void 0 : dt[l]
                        }), Q.map(se => f.jsx("option", {
                            value: `${se.app_key}|${se.id}`,
                            children: se.ivac_name
                        }, se.id))]
                    })
                })]
            }), f.jsxs("div", {
                className: "sm:col-span-3",
                children: [f.jsxs("label", {
                    htmlFor: "first-name",
                    className: "block text-xs font-light text-black uppercase",
                    children: [(Aa = s == null ? void 0 : s.lblInputVisaType) == null ? void 0 : Aa[l], " ", " ", f.jsxs("span", {
                        className: "text-red-600 text-[10px]",
                        children: ["*(", (ya = s == null ? void 0 : s.lblVisaTypeQueue) == null ? void 0 : ya[l], ")"]
                    })]
                }), f.jsx("div", {
                    className: "mt-2",
                    children: f.jsxs("select", {
                        id: "visa_type",
                        name: "visa_type",
                        disabled: false,
                        value: W ?? "",
                        onChange: se => P(se.target.value),
                        className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6",
                        children: [f.jsx("option", {
                            value: "",
                            disabled: false,
                            hidden: false,
                            children: (Na = s == null ? void 0 : s.lblInputVisaTypePlaceholder) == null ? void 0 : Na[l]
                        }), he.map(se => f.jsx("option", {
                            value: se.id,
                            children: se.type_name
                        }, se.id))]
                    })
                })]
            }), f.jsxs("div", {
                className: "sm:col-span-3",
                children: [f.jsx("label", {
                    htmlFor: "first-name",
                    className: "block text-xs font-light text-black uppercase",
                    children: (ta = s == null ? void 0 : s.lblInputNumberOfFamily) == null ? void 0 : ta[l]
                }), f.jsx("div", {
                    className: "mt-2",
                    children: f.jsxs("select", {
                        id: "family_count",
                        name: "family_count",
                        disabled: !D,
                        value: N ?? "",
                        onChange: se => O(se.target.value),
                        className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6",
                        children: [f.jsx("option", {
                            value: "",
                            disabled: false,
                            hidden: false,
                            children: (Ba = s == null ? void 0 : s.lblInputNoOfAppPlaceholder) == null ? void 0 : Ba[l]
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
                    children: [(Ea = s == null ? void 0 : s.lblInputVisitPurpose) == null ? void 0 : Ea[l], " ", " ", f.jsxs("span", {
                        className: "text-red-600 uppercase text-[10px]",
                        children: ["*(", (La = s == null ? void 0 : s.noCopyPasteMinChar) == null ? void 0 : La[l], ")"]
                    })]
                }), f.jsx("div", {
                    className: "mt-2",
                    children: f.jsx("textarea", {
                        name: "visit_purpose",
                        id: "visit_purpose",
                        onCopy: se => se.preventDefault(),
                        onPaste: se => se.preventDefault(),
                        onCut: se => se.preventDefault(),
                        autoComplete: "off",
                        disabled: !D,
                        value: Y,
                        onChange: se => te(se.target.value),
                        className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"
                    })
                })]
            }), f.jsxs("div", {
                className: "sm:col-span-3",
                children: [f.jsx("label", {
                    htmlFor: "first-name",
                    className: "block text-xs font-light text-black uppercase",
                    children: (Ne = s == null ? void 0 : s.lblInputAmount) == null ? void 0 : Ne[l]
                }), f.jsxs("label", {
                    htmlFor: "first-name",
                    className: "block text-sm font-bold text-black uppercase",
                    children: ["BDT ", me !== 0 ? me : ""]
                })]
            }), f.jsx("div", {
                className: "sm:col-span-3",
                children: c ? f.jsxs(oe.button, {
                    type: "button",
                    whileTap: {
                        scale: .95
                    },
                    className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition duration-300
              bg-gray-400 cursor-not-allowed
            `,
                    children: [(_t = s == null ? void 0 : s.checking) == null ? void 0 : _t[l], "..."]
                }) : f.jsx(oe.button, {
                    type: "button",
                    disabled: !ve,
                    whileTap: {
                        scale: .95
                    },
                    className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full cursor-pointer sm:w-auto px-2 py-2 text-center transition duration-300
              ${ve ? "bg-[#28a745] hover:bg-[#218838] " : "bg-gray-400 cursor-not-allowed"}
            `,
                    onClick: ve ? ye : void 0,
                    children: ($e = s == null ? void 0 : s.lblSaveNext) == null ? void 0 : $e[l]
                })
            })]
        }) : f.jsx("div", {
            className: "sm:col-span-3 flex justify-center h-[50vh]",
            children: f.jsx("p", {
                className: "flex items-center justify-center w-full h-screen-1/2  text-red-500 text-sm font-light rounded-md",
                children: ((we = s == null ? void 0 : s.slotAvailableText) == null ? void 0 : we[l]) ?? "Please wait until slot is available."
            })
        })]
    })
}
  , dw = ({setActiveStep: n}) => {
    var ee, J, ie, me, ge, he, ue;
    const {language: l, translations: s} = it()
      , o = ga()
      , [c,h] = S.useState(null)
      , [d,p] = S.useState(!1)
      , [m,g] = S.useState("")
      , [x,v] = S.useState("")
      , [T,A] = S.useState("")
      , [M,V] = S.useState("")
      , [D,U] = S.useState(0)
      , [L,B] = S.useState({});
    S.useEffect( () => {
        const W = localStorage.getItem("applicant")
          , P = localStorage.getItem("personal_info")
          , N = O => localStorage.getItem(O) || "";
        if (g(N("auth_name")),
        v(N("auth_email")),
        A(N("auth_phone")),
        P) {
            const O = JSON.parse(P);
            B(O == null ? void 0 : O.family)
        }
        if (W)
            try {
                const O = JSON.parse(W);
                O && V(O.webfile_id),
                O.family_count && U(parseInt(O.family_count))
            } catch {
                console.error("Invalid JSON in localStorage")
            }
    }
    , []);
    const Q = (W, P, N) => {
        B(O => ({
            ...O,
            [W + 1]: {
                ...O[W + 1],
                [P]: N
            }
        }))
    }
      , _ = () => {
        var P, N, O;
        const W = [];
        if (m.trim() || W.push("Full name is required."),
        x.trim() || W.push("Email is required."),
        T.trim() || W.push("Phone is required."),
        M.trim() || W.push("Web file number is required."),
        D > 0)
            for (let Y = 1; Y <= D; Y++) {
                const te = L[Y];
                (P = te == null ? void 0 : te.name) != null && P.trim() || W.push(`Family member ${Y}: Name is required.`),
                (N = te == null ? void 0 : te.webfile_no) != null && N.trim() || W.push(`Family member ${Y}: Web file number is required.`),
                (O = te == null ? void 0 : te.again_webfile_no) != null && O.trim() || W.push(`Family member ${Y}: Confirm web file number is required.`)
            }
        return W.length > 0 ? {
            valid: !1,
            errors: W
        } : {
            valid: !0
        }
    }
      , $ = async () => {
        try {
            p(!0);
            const {valid: W, errors: P} = _();
            if (!W && P.length > 0) {
                h({
                    message: `Please fix the following error:
` + P[0],
                    type: "error"
                }),
                p(!1);
                return
            }
            const N = localStorage.getItem("access_token")
              , Y = localStorage.getItem("is_edit") === "true" ? "/api/v2/payment/personal-info-edit" : "/api/v2/payment/personal-info-submit"
              , te = await Be(Y, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l,
                    Authorization: `Bearer ${N}`
                },
                body: {
                    full_name: m,
                    email_name: x,
                    phone: T,
                    webfile_id: M,
                    family: L
                }
            });
            if (te.status_code === 200) {
                const j = {
                    full_name: m,
                    email_name: x,
                    phone: T,
                    webfile_id: M,
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
                    message: (te == null ? void 0 : te.message) || "Failed to notify",
                    type: "error"
                });
            p(!1)
        } catch (W) {
            p(!1);
            const P = W
              , N = typeof P == "object" && (P != null && P.message) ? P.message : "Failed to get payment data. Please try again later."
              , O = typeof P == "object" && typeof P.status == "number" ? P.status : 422;
            (O === 401 || O === 419) && (h({
                message: N,
                type: "error"
            }),
            setTimeout( () => {
                Lt(o)
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
        children: [c && f.jsx(Mt, {
            message: c.message,
            type: c.type,
            onClose: () => h(null)
        }), f.jsxs("div", {
            className: "sm:col-span-3",
            children: [f.jsx("label", {
                htmlFor: "first-name",
                className: "block text-xs font-light text-black uppercase",
                children: (ee = s == null ? void 0 : s.lblInputName) == null ? void 0 : ee[l]
            }), f.jsx("div", {
                className: "mt-2",
                children: f.jsx("input", {
                    type: "text",
                    name: "full-name",
                    id: "full-name",
                    value: m,
                    disabled: !1,
                    autoComplete: "off",
                    placeholder: (J = s == null ? void 0 : s.lblInputRegName) == null ? void 0 : J[l],
                    className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                })
            })]
        }), f.jsxs("div", {
            className: "sm:col-span-3",
            children: [f.jsx("label", {
                htmlFor: "first-name",
                className: "block text-xs font-light text-black uppercase",
                children: (ie = s == null ? void 0 : s.lblInputEmail) == null ? void 0 : ie[l]
            }), f.jsx("div", {
                className: "mt-2",
                children: f.jsx("input", {
                    type: "text",
                    name: "email",
                    id: "email",
                    onCopy: W => W.preventDefault(),
                    onPaste: W => W.preventDefault(),
                    onCut: W => W.preventDefault(),
                    value: x,
                    disabled: !1,
                    autoComplete: "off",
                    className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                })
            })]
        }), f.jsxs("div", {
            className: "sm:col-span-3",
            children: [f.jsx("label", {
                htmlFor: "first-name",
                className: "block text-xs font-light text-black uppercase",
                children: (me = s == null ? void 0 : s.lblInputContactNo) == null ? void 0 : me[l]
            }), f.jsx("div", {
                className: "mt-2",
                children: f.jsx("input", {
                    type: "text",
                    name: "user_phone",
                    id: "user_phone",
                    onCopy: W => W.preventDefault(),
                    onPaste: W => W.preventDefault(),
                    onCut: W => W.preventDefault(),
                    value: T,
                    disabled: !1,
                    autoComplete: "off",
                    className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                })
            })]
        }), f.jsxs("div", {
            className: "sm:col-span-3",
            children: [f.jsx("label", {
                htmlFor: "first-name",
                className: "block text-xs font-light text-black uppercase",
                children: (ge = s == null ? void 0 : s.ovWebID) == null ? void 0 : ge[l]
            }), f.jsx("div", {
                className: "mt-2",
                children: f.jsx("input", {
                    type: "text",
                    name: "webfile_id",
                    id: "webfile_id",
                    value: M,
                    disabled: !1,
                    autoComplete: "off",
                    className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                })
            })]
        }), f.jsxs("div", {
            className: "sm:col-span-3",
            children: [[...Array(D)].map( (W, P) => {
                var N, O, Y, te, j, H, Z, X, le, ae;
                return f.jsxs("div", {
                    className: "flex flex-col w-full gap-2",
                    children: [f.jsxs("div", {
                        className: "w-full",
                        children: [f.jsxs("label", {
                            htmlFor: "first-name",
                            className: "block text-xs font-light text-black uppercase my-2",
                            children: [(N = s == null ? void 0 : s.lblInputFamily) == null ? void 0 : N[l], " ", P + 1]
                        }), f.jsxs("label", {
                            htmlFor: "first-name",
                            className: "block text-xs font-light text-black uppercase",
                            children: [(O = s == null ? void 0 : s.lblInputFullName) == null ? void 0 : O[l], " ", " ", f.jsxs("span", {
                                className: "text-red-600 text-[10px]",
                                children: ["*(", (Y = s == null ? void 0 : s.lblRequired) == null ? void 0 : Y[l], ")"]
                            })]
                        }), f.jsx("div", {
                            className: "mt-2",
                            children: f.jsx("input", {
                                type: "text",
                                name: `full-name-${P}`,
                                id: `full-name-${P}`,
                                onCopy: G => G.preventDefault(),
                                onPaste: G => G.preventDefault(),
                                onCut: G => G.preventDefault(),
                                value: ((te = L[P + 1]) == null ? void 0 : te.name) || "",
                                onChange: G => Q(P, "name", G.target.value),
                                autoComplete: "off",
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
                                children: ["*(", (H = s == null ? void 0 : s.lblMustFace7) == null ? void 0 : H[l], ")"]
                            })]
                        }), f.jsx("div", {
                            className: "mt-2",
                            children: f.jsx("input", {
                                type: "text",
                                name: `web-file-number-${P}`,
                                id: `web-file-number-${P}`,
                                onCopy: G => G.preventDefault(),
                                onPaste: G => G.preventDefault(),
                                onCut: G => G.preventDefault(),
                                value: ((Z = L[P + 1]) == null ? void 0 : Z.webfile_no) || "",
                                onChange: G => Q(P, "webfile_no", G.target.value),
                                autoComplete: "off",
                                className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"
                            })
                        })]
                    }), f.jsxs("div", {
                        className: "sm:col-span-3",
                        children: [f.jsxs("label", {
                            htmlFor: "first-name",
                            className: "block text-xs font-light text-black uppercase",
                            children: [(X = s == null ? void 0 : s.lblInputFamilyWebFileAgain) == null ? void 0 : X[l], " ", " ", f.jsxs("span", {
                                className: "text-red-600 text-[10px]",
                                children: ["*(", (le = s == null ? void 0 : s.lblNoCopyPaste) == null ? void 0 : le[l], ")"]
                            })]
                        }), f.jsx("div", {
                            className: "mt-2",
                            children: f.jsx("input", {
                                type: "text",
                                name: `web-file-number-repeat-${P}`,
                                id: `web-file-number-repeat-${P}`,
                                onCopy: G => G.preventDefault(),
                                onPaste: G => G.preventDefault(),
                                onCut: G => G.preventDefault(),
                                value: ((ae = L[P + 1]) == null ? void 0 : ae.again_webfile_no) || "",
                                onChange: G => Q(P, "again_webfile_no", G.target.value),
                                autoComplete: "off",
                                className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"
                            })
                        })]
                    })]
                }, P)
            }
            ), f.jsx("div", {
                className: "sm:col-span-3",
                children: d ? f.jsxs(oe.button, {
                    type: "button",
                    whileTap: {
                        scale: .95
                    },
                    className: "text-white mb-2 duration-300 cursor-not-allowed mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition bg-gray-500 ",
                    children: [(he = s == null ? void 0 : s.checking) == null ? void 0 : he[l], "..."]
                }) : f.jsx(oe.button, {
                    type: "button",
                    whileTap: {
                        scale: .95
                    },
                    className: "text-white mb-2 duration-300 cursor-pointer mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition bg-[#28a745] hover:bg-[#218838]",
                    onClick: $,
                    children: (ue = s == null ? void 0 : s.lblSaveNext) == null ? void 0 : ue[l]
                })
            })]
        })]
    })
}
  , hw = ({setActiveStep: n}) => {
    var te, j, H, Z, X, le;
    const l = ga()
      , {language: s, translations: o} = it()
      , [c,h] = S.useState(0)
      , [d,p] = S.useState(-1)
      , [m,g] = S.useState(null)
      , [x,v] = S.useState(null)
      , [T,A] = S.useState(null)
      , [M,V] = S.useState(null)
      , [D,U] = S.useState(null)
      , [L,B] = S.useState(null)
      , [Q,_] = S.useState({})
      , [$,ee] = S.useState(!1)
      , [J,ie] = S.useState(null)
      , [me,ge] = S.useState(null)
      , [he,ue] = S.useState(!1)
      , W = async () => {
        if (he) {
            ee(!0);
            const ae = localStorage.getItem("access_token");
            try {
                const G = await Be("/api/v2/payment/overview-submit", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        language: s,
                        Authorization: `Bearer ${ae}`
                    }
                });
                if (ee(!1),
                G.status_code === 200) {
                    const ve = localStorage.getItem("applicant")
                      , ye = localStorage.getItem("personal_info");
                    ve && localStorage.setItem("applicant_backup", ve),
                    ye && localStorage.setItem("personal_info_backup", ye),
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
                  , ye = typeof ve == "object" && (ve != null && ve.message) ? ve.message : "Failed to get payment data. Please try again later."
                  , we = typeof ve == "object" && typeof ve.status == "number" ? ve.status : 422;
                (we === 401 || we === 419) && (g({
                    message: ye,
                    type: "error"
                }),
                setTimeout( () => {
                    Lt(l)
                }
                , 5e3)),
                g({
                    message: ye,
                    type: "error"
                })
            }
        }
    }
    ;
    S.useEffect( () => {
        const ae = we => localStorage.getItem(we) || "";
        v(ae("auth_name")),
        A(ae("auth_email")),
        U(ae("auth_phone")),
        U(ae("auth_phone"));
        const G = localStorage.getItem("personal_info");
        if (G) {
            const we = JSON.parse(G);
            _(we == null ? void 0 : we.family)
        }
        const ve = localStorage.getItem("applicant")
          , ye = localStorage.getItem("initialData");
        if (ve && ye)
            try {
                const we = JSON.parse(ve)
                  , He = JSON.parse(ye);
                if (V(we.visa_fee || null),
                B(we.webfile_id || null),
                He != null && He.ivacs && (we == null ? void 0 : we.ivac_id) !== void 0) {
                    const Ve = He.ivacs.find(at => at.id == we.ivac_id);
                    Ve && ie(Ve.ivac_name)
                }
                if (He != null && He.visa_types && (we == null ? void 0 : we.visa_type) !== void 0) {
                    const Ve = He.visa_types.find(at => at.id == we.visa_type);
                    Ve && ge(Ve.type_name)
                }
            } catch (we) {
                const He = we
                  , Ve = typeof He == "object" && (He != null && He.message) ? He.message : "Failed to get payment data. Please try again later."
                  , at = typeof He == "object" && typeof He.status == "number" ? He.status : 422;
                (at === 401 || at === 419) && Lt(l),
                g({
                    message: Ve,
                    type: "error"
                })
            }
    }
    , []),
    S.useEffect( () => {
        const ae = localStorage.getItem("applicant");
        if (ae) {
            const G = JSON.parse(ae);
            G.family_count && h(parseInt(G.family_count))
        }
    }
    , []);
    const P = ae => {
        p(G => G === ae ? null : ae)
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
      , Y = ["ovWebID", "ovIvacCenter", "ovVisaType", "ovFees", "ovName", "ovEmail", "ovContact"];
    return f.jsxs(oe.div, {
        className: "flex flex-col",
        variants: N,
        initial: "hidden",
        animate: "visible",
        children: [m && f.jsx(Mt, {
            message: m.message,
            type: m.type,
            onClose: () => g(null)
        }), f.jsxs("div", {
            className: "flex flex-row gap-2 items-center p-2 bg-green-50 border-[0.2px] border-green-100 rounded cursor-pointer",
            onClick: () => P(-1),
            children: [f.jsxs("p", {
                className: "text-xs md:text-sm font-light text-white rounded-md bg-black text-center p-2 min-w-[110px]",
                children: [(te = o == null ? void 0 : o.application_text) == null ? void 0 : te[s], " #1"]
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
                children: [Y.map( (ae, G) => {
                    var ve;
                    return f.jsxs(oe.div, {
                        variants: O,
                        initial: "hidden",
                        animate: "visible",
                        className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center w-[180px] md:w-1/3    ",
                        children: [f.jsx("p", {
                            className: "text-red-600 font-light text-[8px] md:text-[10px] break-words text-center w-full",
                            children: (ve = o == null ? void 0 : o[ae]) == null ? void 0 : ve[s]
                        }), f.jsx("p", {
                            className: "text-[12px] font-semibold break-words text-center w-full",
                            children: ae === "ovWebID" ? L || "N/A" : ae === "ovIvacCenter" ? J || "N/A" : ae === "ovVisaType" ? me || "N/A" : ae === "ovEmail" ? T || "N/A" : ae === "ovName" ? x || "N/A" : ae === "ovContact" ? D || "N/A" : ae === "ovFees" ? "BDT " + M || "N/A" : "NA"
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
                        children: [(H = o == null ? void 0 : o.edit_text) == null ? void 0 : H[s], " ", f.jsx(Ug, {})]
                    })
                })]
            })
        }), [...Array(c)].map( (ae, G) => {
            var ve, ye, we, He;
            return f.jsxs(oe.div, {
                initial: "hidden",
                animate: "visible",
                children: [f.jsxs("div", {
                    className: "flex flex-row gap-2 items-center p-2 bg-green-50 border-[0.2px] border-green-100 rounded cursor-pointer",
                    onClick: () => P(G),
                    children: [f.jsxs("p", {
                        className: "text-xs md:text-sm font-light text-white rounded-md bg-black text-center p-2 min-w-[110px]",
                        children: [(ve = o == null ? void 0 : o.application_text) == null ? void 0 : ve[s], " #", G + 2]
                    }), f.jsxs("p", {
                        className: "text-green-700 text-xs  hover:cursor-pointer font-bold cursor-pointer hover:underline",
                        children: [(ye = Object.values(Q)[G]) == null ? void 0 : ye.webfile_no, " (", (we = o == null ? void 0 : o.btnExpandOrClose) == null ? void 0 : we[s], ")"]
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
                        children: [Y.map( (Ve, at) => {
                            var Ut, St, Kt;
                            return f.jsxs(oe.div, {
                                variants: O,
                                initial: "hidden",
                                animate: "visible",
                                className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center w-[180px] md:w-1/3",
                                children: [f.jsx("p", {
                                    className: "text-red-600 font-light text-[8px] md:text-[10px] break-words text-center w-full",
                                    children: (Ut = o == null ? void 0 : o[Ve]) == null ? void 0 : Ut[s]
                                }), f.jsx("p", {
                                    className: "text-[12px] font-semibold break-words text-center w-full",
                                    children: Ve === "ovWebID" ? ((St = Object.values(Q)[G]) == null ? void 0 : St.webfile_no) || "N/A" : Ve === "ovIvacCenter" ? J || "N/A" : Ve === "ovVisaType" ? me || "N/A" : Ve === "ovEmail" ? T || "N/A" : Ve === "ovName" ? ((Kt = Object.values(Q)[G]) == null ? void 0 : Kt.name) || "N/A" : Ve === "ovContact" ? D || "N/A" : Ve === "ovFees" ? "BDT " + M || "N/A" : "NA"
                                })]
                            }, at)
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
                                children: [(He = o == null ? void 0 : o.edit_text) == null ? void 0 : He[s], " ", f.jsx(Ug, {})]
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
                    checked: he,
                    onChange: ae => ue(ae.target.checked)
                }), f.jsxs("label", {
                    htmlFor: "terms",
                    className: "text-sm font-light  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                    children: [(Z = o == null ? void 0 : o.tcAgree) == null ? void 0 : Z[s], " ", " ", f.jsx("a", {
                        href: "https://api-payment.ivacbd.com/contents/tos.html",
                        target: "_blank",
                        className: "text-blue-600 hover:underline",
                        children: (X = o == null ? void 0 : o.tcText) == null ? void 0 : X[s]
                    })]
                })]
            }), f.jsx("button", {
                onClick: he ? W : void 0,
                disabled: !he,
                className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
                      ${he ? "bg-[#28a745] hover:bg-[#218838] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}
                    `,
                children: (le = o == null ? void 0 : o.conMovePay) == null ? void 0 : le[s]
            })]
        })]
    })
}
  , mw = ({setActiveStep: n}) => {
    var Fe, Je, Oe, Ot, Ca, xa, Bn, sn, ne, Te, ht, Ht, ns, ls, rl, ul, ss, Ni, va, xt, At, ka, cl, Ei, Ci, is, on, fl, Ha, Pa, rn, qa;
    const l = ga()
      , {language: s, translations: o} = it()
      , [c,h] = S.useState(null)
      , [d,p] = S.useState(null)
      , [m,g] = S.useState(0)
      , [x,v] = S.useState(0)
      , [T,A] = S.useState(0)
      , [M,V] = S.useState("")
      , [D,U] = S.useState(!1)
      , [L,B] = S.useState("")
      , [Q,_] = S.useState(!1)
      , [$,ee] = S.useState([])
      , [J,ie] = S.useState("")
      , [me,ge] = S.useState(!1)
      , [he,ue] = S.useState([])
      , [W,P] = S.useState("")
      , [N,O] = S.useState("")
      , [Y,te] = S.useState("")
      , [j,H] = S.useState("")
      , [Z,X] = S.useState(!1)
      , [le,ae] = S.useState(!1)
      , [G,ve] = S.useState(!1)
      , [ye,we] = S.useState(!1)
      , [He,Ve] = S.useState(!1)
      , [at,Ut] = S.useState(!1)
      , [St,Kt] = S.useState(0)
      , [wa,dt] = S.useState("")
      , Aa = async () => {
        try {
            const ce = localStorage.getItem("access_token");
            Ve(!0);
            const fe = await Be("/api/v2/captcha/generate-pay", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    language: s,
                    Authorization: `Bearer ${ce}`
                }
            });
            fe.status === "success" ? (O(fe.data.captcha_image),
            te(fe.data.captcha_id)) : h({
                message: fe.message,
                type: "error"
            })
        } catch (ce) {
            const fe = ce
              , Re = typeof fe == "object" && (fe != null && fe.message) ? fe.message : "Failed to get payment data. Please try again later."
              , Ae = typeof fe == "object" && typeof fe.status == "number" ? fe.status : 422;
            (Ae === 401 || Ae === 419) && (h({
                message: Re,
                type: "error"
            }),
            setTimeout( () => {
                Lt(l)
            }
            , 5e3)),
            h({
                message: Re,
                type: "error"
            })
        } finally {
            Ve(!1)
        }
    }
    ;
    S.useEffect( () => {
        (async () => {
            var Re, Ae, Le, aa, os, rs;
            const fe = localStorage.getItem("access_token");
            try {
                const rt = await Be("/api/v2/payment/checkout", {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        language: s,
                        Authorization: `Bearer ${fe}`
                    }
                });
                rt.status_code === 200 ? (v((Re = rt == null ? void 0 : rt.data) == null ? void 0 : Re.convenience_fees),
                g((Ae = rt == null ? void 0 : rt.data) == null ? void 0 : Ae.fees),
                A((Le = rt == null ? void 0 : rt.data) == null ? void 0 : Le.payable_amount),
                V((aa = rt == null ? void 0 : rt.data) == null ? void 0 : aa.mobile_no),
                p((rs = (os = rt == null ? void 0 : rt.data) == null ? void 0 : os.payment_options) == null ? void 0 : rs.data)) : h({
                    message: rt.message,
                    type: "error"
                })
            } catch (rt) {
                const Zt = rt
                  , Ln = typeof Zt == "object" && (Zt != null && Zt.message) ? Zt.message : "Failed to get payment data. Please try again later."
                  , na = typeof Zt == "object" && typeof Zt.status == "number" ? Zt.status : 422;
                (na === 401 || na === 419) && (h({
                    message: Ln,
                    type: "error"
                }),
                setTimeout( () => {
                    Lt(l)
                }
                , 5e3)),
                h({
                    message: Ln,
                    type: "error"
                })
            }
        }
        )()
    }
    , []);
    const ya = async ce => {
        const fe = localStorage.getItem("access_token");
        try {
            ae(!0);
            const Re = await Be("/api/v2/payment/pay-otp-sent", {
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
            if (Re.status_code === 200) {
                U(!0),
                Kt(30);
                const Ae = setInterval( () => {
                    Kt(Le => Le <= 1 ? (clearInterval(Ae),
                    0) : Le - 1)
                }
                , 1e3)
            } else
                h({
                    message: Re.message,
                    type: "error"
                })
        } catch (Re) {
            const Ae = Re
              , Le = typeof Ae == "object" && (Ae != null && Ae.message) ? Ae.message : "Failed to get payment data. Please try again later."
              , aa = typeof Ae == "object" && typeof Ae.status == "number" ? Ae.status : 422;
            (aa === 401 || aa === 419) && (h({
                message: Le,
                type: "error"
            }),
            setTimeout( () => Lt(l), 5e3)),
            h({
                message: Le,
                type: "error"
            })
        } finally {
            ae(!1)
        }
    }
      , Na = () => ya(0)
      , ta = () => ya(1)
      , Ba = async () => {
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
            const Re = await Be("/api/v2/payment/pay-otp-verify", {
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
            Re.status_code === 200 ? (_(!0),
            ee((fe = Re == null ? void 0 : Re.data) == null ? void 0 : fe.slot_dates)) : h({
                message: Re.message,
                type: "error"
            })
        } catch (Re) {
            const Ae = Re
              , Le = typeof Ae == "object" && (Ae != null && Ae.message) ? Ae.message : "Failed to get payment data. Please try again later."
              , aa = typeof Ae == "object" && typeof Ae.status == "number" ? Ae.status : 422;
            (aa === 401 || aa === 419) && (h({
                message: Le,
                type: "error"
            }),
            setTimeout( () => {
                Lt(l)
            }
            , 5e3)),
            h({
                message: Le,
                type: "error"
            })
        } finally {
            ve(!1)
        }
    }
      , Ea = async ce => {
        var Ae;
        const fe = ce.target.value;
        ie(fe);
        const Re = localStorage.getItem("access_token");
        try {
            Ve(!0);
            const Le = await Be("/api/v2/payment/pay-slot-time", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: s,
                    Authorization: `Bearer ${Re}`
                },
                body: {
                    appointment_date: fe
                }
            });
            Le.status_code === 200 ? (ue(((Ae = Le == null ? void 0 : Le.data) == null ? void 0 : Ae.slot_times) ?? []),
            ge(!0),
            Aa()) : h({
                message: Le.message,
                type: "error"
            })
        } catch (Le) {
            const aa = typeof Le == "object" && (Le != null && Le.message) ? Le.message : "Failed to verify email address";
            h({
                message: aa,
                type: "error"
            })
        } finally {
            Ve(!1)
        }
    }
      , La = async () => {
        try {
            Ve(!0),
            we(!0);
            const ce = localStorage.getItem("access_token")
              , fe = await Be("/api/v2/captcha/verify-pay", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: s,
                    Authorization: `Bearer ${ce}`
                },
                body: {
                    captcha_id: Y,
                    captcha_input: j
                }
            });
            fe.status_code === 200 ? (X(!0),
            dt("")) : dt(fe.message)
        } catch (ce) {
            const fe = ce
              , Re = typeof fe == "object" && (fe != null && fe.message) ? fe.message : "Failed to get payment data. Please try again later."
              , Ae = typeof fe == "object" && typeof fe.status == "number" ? fe.status : 422;
            (Ae === 401 || Ae === 419) && (h({
                message: Re,
                type: "error"
            }),
            setTimeout( () => {
                Lt(l)
            }
            , 5e3)),
            dt(Re)
        } finally {
            Ve(!1),
            we(!1)
        }
    }
      , [Ne,_t] = S.useState(null)
      , $e = J.trim() !== "" && J.length >= 6 && W.trim() !== "" && W.length >= 6 && Ne !== null && Ne.item.name.trim() !== "" && Ne.item.slug.trim() !== "" && Ne.item.link.trim() !== "" && j.trim() !== "" && j.length >= 6 && Z
      , se = async () => {
        const ce = localStorage.getItem("access_token");
        try {
            Ut(!0);
            const fe = await Be("/api/v2/payment/pay-now", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: s,
                    Authorization: `Bearer ${ce}`
                },
                body: {
                    appointment_date: J,
                    appointment_time: W,
                    hash_param: Y,
                    selected_payment: {
                        name: Ne.item.name,
                        slug: Ne.item.slug,
                        link: Ne.item.link
                    }
                }
            });
            fe.status_code === 200 ? (localStorage.clear(),
            window.location.href = fe.data.url) : h({
                message: fe.message,
                type: "error"
            })
        } catch (fe) {
            const Re = fe
              , Ae = typeof Re == "object" && (Re != null && Re.message) ? Re.message : "Failed to get payment data. Please try again later."
              , Le = typeof Re == "object" && typeof Re.status == "number" ? Re.status : 422;
            (Le === 401 || Le === 419) && (h({
                message: Ae,
                type: "error"
            }),
            setTimeout( () => {
                Lt(l)
            }
            , 5e3)),
            h({
                message: Ae,
                type: "error"
            })
        } finally {
            Ut(!1)
        }
    }
      , [de,ot] = S.useState("")
      , ze = {
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
    return He ? f.jsx(My, {}) : f.jsxs(oe.div, {
        className: "flex flex-col",
        variants: ze,
        initial: "hidden",
        animate: "visible",
        children: [c && f.jsx(Mt, {
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
                                children: [(Fe = o == null ? void 0 : o.payCard) == null ? void 0 : Fe[s], " "]
                            }), f.jsx("div", {
                                className: "boxes flex flex-row justify-start gap-4 flex-wrap",
                                children: (d == null ? void 0 : d.cards) && Object.keys(d.cards).length > 0 && Object.entries(d.cards).map( ([ce,fe]) => f.jsx("div", {
                                    className: `w-18 h-16 flex items-center justify-center rounded-lg border-[1px] border-slate-300 shadow hover:cursor-pointer hover:border-[#0074D4] duration-300 ${(Ne == null ? void 0 : Ne.type) === "cards" && Ne.key === ce ? "ring-2 ring-[#0074D4]" : ""}`,
                                    onClick: () => _t({
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
                                children: [(Je = o == null ? void 0 : o.payInt) == null ? void 0 : Je[s], " "]
                            }), f.jsx("div", {
                                className: "boxes flex flex-row justify-start gap-4 flex-wrap",
                                children: (d == null ? void 0 : d.internet) && Object.keys(d.internet).length > 0 && Object.entries(d.internet).map( ([ce,fe]) => f.jsx("div", {
                                    className: `w-18 h-16 flex items-center justify-center rounded-lg border-[1px] border-slate-300 shadow hover:cursor-pointer hover:border-[#0074D4] duration-300  ${(Ne == null ? void 0 : Ne.type) === "internet" && Ne.key === ce ? "ring-2 ring-[#0074D4]" : ""}`,
                                    onClick: () => _t({
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
                                children: [(Oe = o == null ? void 0 : o.payMob) == null ? void 0 : Oe[s], " "]
                            }), f.jsx("div", {
                                className: "boxes flex flex-row justify-start gap-4 flex-wrap",
                                children: (d == null ? void 0 : d.mobile) && Object.keys(d.mobile).length > 0 && Object.entries(d.mobile).map( ([ce,fe]) => f.jsx("div", {
                                    className: `w-18 h-16 flex items-center justify-center rounded-lg border-[1px] border-slate-300 shadow hover:cursor-pointer hover:border-[#0074D4] duration-300 ${(Ne == null ? void 0 : Ne.type) === "mobile" && Ne.key === ce ? "ring-2 ring-[#0074D4]" : ""}`,
                                    onClick: () => _t({
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
                                children: (Ot = o == null ? void 0 : o.payOth) == null ? void 0 : Ot[s]
                            }), f.jsx("div", {
                                className: "boxes flex flex-row justify-start gap-4 flex-wrap",
                                children: (d == null ? void 0 : d.others) && Object.keys(d.others).length > 0 && Object.entries(d.others).map( ([ce,fe]) => f.jsx("div", {
                                    className: `w-18 h-16 flex items-center justify-center rounded-lg border-[1px] border-slate-300 shadow hover:cursor-pointer hover:border-[#0074D4] duration-300 ${(Ne == null ? void 0 : Ne.type) === "others" && Ne.key === ce ? "ring-2 ring-[#0074D4]" : ""}`,
                                    onClick: () => _t({
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
                                src: lT,
                                className: "w-36",
                                alt: ""
                            })
                        })
                    }), f.jsx("div", {
                        className: "bg-blue-50 border border-gray-200 rounded-lg px-4 py-2 mb-4",
                        children: Ne ? f.jsxs("div", {
                            className: "flex justify-between items-center ",
                            children: [f.jsx("p", {
                                className: "font-bold",
                                children: (xa = Ne == null ? void 0 : Ne.item) == null ? void 0 : xa.name
                            }), f.jsx("img", {
                                src: (Bn = Ne == null ? void 0 : Ne.item) == null ? void 0 : Bn.link,
                                alt: (sn = Ne == null ? void 0 : Ne.item) == null ? void 0 : sn.name,
                                className: "w-10 h-10 object-contain"
                            })]
                        }) : f.jsxs("p", {
                            className: "text-gray-600 text-sm text-center",
                            children: [" ", (Ca = o == null ? void 0 : o.paySelectOption) == null ? void 0 : Ca[s], " "]
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
                        }), x != "0.00" && f.jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [f.jsxs("span", {
                                className: "text-sm text-gray-600",
                                children: [" ", (Te = o == null ? void 0 : o.payConvFee) == null ? void 0 : Te[s], " :"]
                            }), f.jsxs("span", {
                                className: "text-sm text-gray-900",
                                children: [x, " BDT"]
                            })]
                        }), f.jsxs("div", {
                            className: "flex justify-between items-center pt-2 border-t",
                            children: [f.jsxs("span", {
                                className: "text-sm font-medium text-gray-700",
                                children: [(ht = o == null ? void 0 : o.payPayable) == null ? void 0 : ht[s], ":"]
                            }), f.jsxs("span", {
                                className: "text-sm font-medium text-gray-900",
                                children: [T, " BDT"]
                            })]
                        })]
                    }), f.jsxs("div", {
                        className: "mb-2",
                        children: [f.jsxs("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: [(Ht = o == null ? void 0 : o.payPhone) == null ? void 0 : Ht[s], ":"]
                        }), f.jsxs("div", {
                            className: "flex items-center gap-3 rounded-md flex-wrap",
                            children: [f.jsx("input", {
                                type: "tel",
                                value: M,
                                disabled: false,
                                className: "flex-1 px-3 py-2 text-sm rounded-md border border-gray-300 bg-gray-100 text-gray-700 focus:outline-none",
                                placeholder: "Mobile number",
                                autoComplete: "off"
                            }), !Q && f.jsx("button", {
                                onClick: le || St > 0 ? void 0 : D ? ta : Na,
                                disabled: false,
                                className: `bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors duration-200 ${le || St > 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700 hover:cursor-pointer"}`,
                                children: le ? `${(ns = o == null ? void 0 : o.checking) == null ? void 0 : ns[s]}...` : St > 0 ? `${St}s` : D ? (ls = o == null ? void 0 : o.resendOtp) == null ? void 0 : ls[s] : (rl = o == null ? void 0 : o.lblInputSentOtp) == null ? void 0 : rl[s]
                            })]
                        })]
                    }), Q && f.jsx("div", {
                        className: "mb-2",
                        children: f.jsxs("p", {
                            className: "text-[10px] font-light text-green-500",
                            children: [(ul = o == null ? void 0 : o.payPhone) == null ? void 0 : ul[s], " ", " ", " ", (ss = o == null ? void 0 : o.verified) == null ? void 0 : ss[s], " "]
                        })
                    }), D && !Q && f.jsxs("div", {
                        className: "mb-2",
                        children: [f.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: (Ni = o == null ? void 0 : o.verifyOtp) == null ? void 0 : Ni[s]
                        }), f.jsxs("div", {
                            className: "flex items-center gap-3 rounded-md md:flex-nowrap flex-wrap",
                            children: [f.jsx("input", {
                                type: "tel",
                                value: L,
                                onChange: ce => B(ce.target.value),
                                className: "flex-1 px-3 py-2 text-sm rounded-md border border-gray-300 bg-gray-100 text-gray-700 focus:outline-none",
                                placeholder: (va = o == null ? void 0 : o.lblInputOtp) == null ? void 0 : va[s],
                                autoComplete: "off"
                            }), f.jsx("button", {
                                onClick: Ba,
                                disabled: false,
                                className: "bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-green-700 cursor-pointer transition-colors duration-300",
                                children: "Verify"
                            })]
                        })]
                    }), Q && f.jsxs("div", {
                        className: "my-4",
                        children: [f.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: (ka = o == null ? void 0 : o.lblInputAppointDate) == null ? void 0 : ka[s]
                        }), f.jsxs("select", {
                            id: "appointment_date",
                            name: "appointment_date",
                            value: J ?? "",
                            onChange: Ea,
                            className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6",
                            children: [f.jsx("option", {
                                value: "",
                                disabled: false,
                                hidden: false,
                                children: o?.lblInputAppointment?.[s]
                            }), $ && Object.keys($).length > 0 && Object.entries($).map( ([ce,fe]) => f.jsx("option", {
                                value: fe,
                                children: fe
                            }, ce))]
                        })]
                    }), me && f.jsxs("div", {
                        className: "mb-6 mt-2",
                        children: [f.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: (Ei = o == null ? void 0 : o.lblInputAppointTime) == null ? void 0 : Ei[s]
                        }), f.jsxs("select", {
                            id: "appointment_date",
                            name: "appointment_date",
                            value: W ?? "",
                            onChange: ce => P(ce.target.value),
                            className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6",
                            children: [f.jsx("option", {
                                value: "",
                                disabled: false,
                                hidden: false,
                                children: o?.selectAppointmentTime?.[s]
                            }), Array.isArray(he) && he.length > 0 && he.map(ce => f.jsx("option", {
                                value: ce.time_display,
                                children: ce.time_display
                            }, ce.id))]
                        })]
                    }), W !== "" && f.jsxs("div", {
                        className: "flex flex-col justify-between items-center gap-4 mb-6 mt-2",
                        children: [f.jsxs("div", {
                            className: "flex",
                            children: [f.jsx("img", {
                                src: N,
                                alt: "Captcha",
                                className: "w-full h-10 object-contain"
                            }), f.jsx("div", {
                                className: "ml-2 mt-1 hover:cursor-pointer hover:bg-blue-200 hover:rounded-md",
                                onClick: () => Aa(),
                                children: !Z && f.jsx(wy, {})
                            })]
                        }), f.jsxs("div", {
                            className: "w-full flex items-center gap-2",
                            children: [f.jsx("input", {
                                type: "text",
                                value: j,
                                maxLength: 6,
                                disabled: Z,
                                autoComplete: "off",
                                onChange: ce => H(ce.target.value),
                                className: "w-full h-10 px-3 py-2 text-sm rounded-md border border-gray-300 bg-gray-100 text-gray-700 focus:outline-none",
                                placeholder: (is = o == null ? void 0 : o.enterCaptcha) == null ? void 0 : is[s]
                            }), f.jsx("button", {
                                type: "button",
                                onClick: !Z ? La : void 0,
                                disabled: j.length !== 6 || Z,
                                className: `h-10 px-4 text-sm font-medium rounded-md text-white transition-colors duration-300 ${j.length === 6 && !Z ? "bg-green-600 hover:bg-green-700 hover:cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`
                                children: Z ? o?.verified?.[s] : o?.verify?.[s]
                            })]
                        }), f.jsx("div", {
                            className: "w-full flex items-center gap-2",
                            children: wa !== "" && f.jsx("p", {
                                className: "text-xs text-red-500 mt-0",
                                children: wa
                            })
                        })]
                    }), f.jsx("button", {
                        className: `w-full py-3 mb-2 rounded-lg duration-300 text-white
    ${$e ? "bg-green-600 hover:bg-green-700 cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`,
                        disabled: !$e,
                        onClick: $e ? se : void 0,
                        children: o?.payNow?.[s]
                    }), f.jsx("p", {
                        className: "text-xs text-red-500 text-center",
                        children: (qa = o == null ? void 0 : o.msgTrans5min) == null ? void 0 : qa[s]
                    })]
                })]
            })
        })]
    })
}
  , pw = () => {
    var p, m, g, x, v;
    const {language: n, translations: l} = it()
      , [s,o] = S.useState( () => {
        const T = localStorage.getItem("authStep")
          , A = parseInt(T || "1", 10);
        return A >= 1 && A <= 4 ? A : 1
    }
    );
    S.useEffect( () => {
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
        visible: T => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: T * .3
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
                    children: (v = l == null ? void 0 : l.lblTabMenuAuth) == null ? void 0 : v[n]
                }), c.map( (T, A) => f.jsxs(oe.p, {
                    custom: A,
                    variants: d,
                    initial: "hidden",
                    animate: "visible",
                    className: "py-2 px-4 flex items-center min-w-[160px] text-[#5c7b2f] font-bold",
                    children: [f.jsx("span", {
                        className: "bg-white rounded-full px-2 py-1 mr-2 text-xs font-bold",
                        children: f.jsx("i", {
                            children: T.id
                        })
                    }), T.name]
                }, T.id))]
            }), f.jsxs("div", {
                className: "bg-white w-full py-1 md:px-2 lg:px-4",
                children: [s === 1 && f.jsx(iT, {
                    setStep: o
                }), s === 2 && f.jsx(oT, {
                    setStep: o
                }), s === 3 && f.jsx(rT, {
                    setStep: o
                }), s === 4 && f.jsx(uT, {
                    setStep: o
                }), s === 5 && f.jsx(lw, {
                    setStep: o
                }), s === 6 && f.jsx(sw, {
                    setStep: o
                }), s === 7 && f.jsx(iw, {
                    setStep: o
                }), s === 8 && f.jsx(ow, {
                    setStep: o
                }), s === 9 && f.jsx(rw, {
                    setStep: o
                }), s === 10 && f.jsx(uw, {
                    setStep: o
                }), s === 100 && f.jsx(cw, {
                    setStep: o
                })]
            })]
        })
    })
}
  , gw = () => {
    var J, ie, me, ge, he, ue, W, P, N, O, Y, te, j, H, Z, X, le;
    const n = ga()
      , {language: l, translations: s} = it()
      , [o,c] = S.useState("")
      , [h,d] = S.useState("")
      , [p,m] = S.useState(null)
      , [g,x] = S.useState(!1)
      , [v,T] = S.useState(null)
      , A = o && o.length >= 12 && h.trim() !== "" && h.length >= 6
      , [M,V] = S.useState("")
      , [D,U] = S.useState(!1)
      , [L,B] = S.useState("")
      , Q = {
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
      , _ = {
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
            const ae = await Be("/api/v2/captcha/generate", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    language: l
                }
            });
            ae.status === "success" ? (V(ae.data.captcha_image),
            B(ae.data.captcha_id)) : m({
                message: ae.message,
                type: "error"
            })
        } catch (ae) {
            const G = ae
              , ve = typeof G == "object" && (G != null && G.message) ? G.message : "Failed to get payment data. Please try again later."
              , ye = typeof G == "object" && typeof G.status == "number" ? G.status : 422;
            (ye === 401 || ye === 419) && Lt(n),
            m({
                message: ve,
                type: "error"
            })
        }
    }
    ;
    S.useEffect( () => {
        $()
    }
    , []);
    const ee = async () => {
        try {
            if (!A) {
                m({
                    message: "Please enter valid data",
                    type: "error"
                });
                return
            }
            U(!0);
            const ae = await Be("/api/v2/captcha/verify", {
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
            if (ae.status_code === 200) {
                const G = await Be("/api/v2/get-payment-info", {
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
                G.status_code === 200 ? (x(!0),
                T(G.data)) : m({
                    message: (G == null ? void 0 : G.message) || "Failed to get payment info",
                    type: "error"
                })
            } else
                m({
                    message: (ae == null ? void 0 : ae.message) || "Failed to get payment info",
                    type: "error"
                })
        } catch (ae) {
            const G = ae
              , ve = typeof G == "object" && (G != null && G.message) ? G.message : "Failed to get payment data. Please try again later."
              , ye = typeof G == "object" && typeof G.status == "number" ? G.status : 422;
            (ye === 401 || ye === 419) && Lt(n),
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
            variants: Q,
            initial: "hidden",
            animate: "visible",
            children: [f.jsx("p", {
                className: "font-light text-center text-lg mb-8",
                children: (ue = s == null ? void 0 : s.ovPayStatus) == null ? void 0 : ue[l]
            }), f.jsxs(oe.div, {
                className: "grid sm:grid-cols-2 md:grid-cols-3 md:px-4 text-center",
                variants: Q,
                children: [f.jsxs(oe.div, {
                    variants: _,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [f.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (W = s == null ? void 0 : s.ovWebID) == null ? void 0 : W[l]
                    }), f.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: v == null ? void 0 : v.webfile_id
                    })]
                }), f.jsxs(oe.div, {
                    variants: _,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [f.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (P = s == null ? void 0 : s.ovIvacCenter) == null ? void 0 : P[l]
                    }), f.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: v == null ? void 0 : v.ivac_name
                    })]
                }), f.jsxs(oe.div, {
                    variants: _,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [f.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (N = s == null ? void 0 : s.ovVisaType) == null ? void 0 : N[l]
                    }), f.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: v == null ? void 0 : v.visa_type
                    })]
                }), f.jsxs(oe.div, {
                    variants: _,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [f.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (O = s == null ? void 0 : s.ovFees) == null ? void 0 : O[l]
                    }), f.jsxs("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: [v == null ? void 0 : v.final_amount, " BDT"]
                    })]
                }), f.jsxs(oe.div, {
                    variants: _,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [f.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (Y = s == null ? void 0 : s.ovName) == null ? void 0 : Y[l]
                    }), f.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: v == null ? void 0 : v.name
                    })]
                }), f.jsxs(oe.div, {
                    variants: _,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [f.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (te = s == null ? void 0 : s.ovEmail) == null ? void 0 : te[l]
                    }), f.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: v == null ? void 0 : v.email
                    })]
                }), f.jsxs(oe.div, {
                    variants: _,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [f.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (j = s == null ? void 0 : s.ovContact) == null ? void 0 : j[l]
                    }), f.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: v == null ? void 0 : v.phone
                    })]
                }), f.jsxs(oe.div, {
                    variants: _,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [f.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (H = s == null ? void 0 : s.ovAppointment) == null ? void 0 : H[l]
                    }), f.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: v == null ? void 0 : v.appointment_date
                    })]
                }), f.jsxs(oe.div, {
                    variants: _,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [f.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (Z = s == null ? void 0 : s.ovPayStatus) == null ? void 0 : Z[l]
                    }), f.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: v == null ? void 0 : v.status
                    })]
                })]
            }), f.jsxs(oe.div, {
                className: "flex items-center justify-center my-8 gap-2 px-4 flex-col md:flex-row",
                initial: "hidden",
                animate: "visible",
                variants: Q,
                children: [f.jsxs("a", {
                    target: "_blank",
                    href: v == null ? void 0 : v.download_invoice_url,
                    className: "flex items-center gap-2 bg-gray-800 rounded-md shadow-md text-white text-[14px] px-4 py-2 hover:bg-black cursor-pointer uppercase",
                    children: [f.jsx(Ay, {}), " ", (X = s == null ? void 0 : s.btnDownPDF) == null ? void 0 : X[l]]
                }), f.jsxs("a", {
                    target: "_blank",
                    href: v == null ? void 0 : v.print_invoice_url,
                    className: "flex items-center gap-2 bg-cyan-500 rounded-md shadow-md text-white text-[14px]  px-4 py-2 hover:bg-cyan-600 cursor-pointer uppercase",
                    children: [f.jsx(Ny, {}), " ", (le = s == null ? void 0 : s.btnPrintPDF) == null ? void 0 : le[l]]
                })]
            })]
        }) : f.jsxs(oe.div, {
            className: "flex flex-col bg-green-200  sm:mx-12 lg:mx-44 rounded-md pb-4 overflow-hidden border-[0.1px] border-slate-300",
            variants: Q,
            initial: "hidden",
            animate: "visible",
            children: [p && f.jsx(Mt, {
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
                    children: (ie = s == null ? void 0 : s.lblInputWebFile) == null ? void 0 : ie[l]
                }), f.jsx("input", {
                    type: "text",
                    id: "name",
                    autoComplete: "off",
                    maxLength: 12,
                    className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-md shadow focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full sm:w-1/2 p-2.5 my-2",
                    onChange: ae => c(ae.target.value),
                    value: o
                }), f.jsx("p", {
                    className: "font-light text-xs mt-4 items-center justify-center",
                    children: (me = s == null ? void 0 : s.human_verfication) == null ? void 0 : me[l]
                }), f.jsxs("div", {
                    className: "flex",
                    children: [f.jsx("img", {
                        src: M,
                        alt: "Dummy Captcha",
                        className: "w-full h-8"
                    }), f.jsx("div", {
                        className: "ml-2 hover:cursor-pointer hover:bg-blue-200 hover:rounded-md",
                        onClick: () => $(),
                        children: f.jsx(wy, {})
                    })]
                }), f.jsx("input", {
                    type: "text",
                    id: "name",
                    autoComplete: "off",
                    maxLength: 6,
                    onCopy: ae => ae.preventDefault(),
                    onPaste: ae => ae.preventDefault(),
                    onCut: ae => ae.preventDefault(),
                    className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-md shadow focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full  sm:w-1/2 p-2.5 my-2",
                    onChange: ae => d(ae.target.value),
                    value: h
                }), D ? f.jsxs(oe.button, {
                    type: "button",
                    whileTap: {
                        scale: .95
                    },
                    className: `text-white flex items-center justify-center mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
                            bg-gray-400 cursor-not-allowed
                          `,
                    children: [(ge = s == null ? void 0 : s.checking) == null ? void 0 : ge[l], "..."]
                }) : f.jsx(oe.button, {
                    type: "button",
                    disabled: false,
                    whileTap: {
                        scale: .95
                    },
                    className: `text-white flex items-center cursor-pointer justify-center mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
                            ${A ? "bg-[#28a745] hover:bg-[#218838]" : "bg-gray-400 cursor-not-allowed"}
                          `,
                    onClick: ee,
                    children: (he = s == null ? void 0 : s.btnQueryStatus) == null ? void 0 : he[l]
                })]
            })]
        })
    })
}
  , yw = () => {
    var p, m, g, x;
    const [n,l] = S.useState( () => {
        const v = localStorage.getItem("activeStep");
        return v ? parseInt(v) : 1
    }
    )
      , {language: s, translations: o} = it()
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
        name: (x = o == null ? void 0 : o.lblTabMenu4) == null ? void 0 : x[s]
    }];
    S.useEffect( () => {
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
        visible: v => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: v * .3
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
                children: c.map( (v, T) => f.jsxs(oe.p, {
                    custom: T,
                    variants: d,
                    initial: "hidden",
                    animate: "visible",
                    className: `py-2 px-4 flex items-center font-bold rounded-t min-w-[160px] ${n === v.id ? "bg-white text-black" : "text-[#5c7a2f]"}`,
                    children: [f.jsx("span", {
                        className: `rounded-full px-2 py-1 mr-2 font-light text-xs italic ${n === v.id ? "bg-green-600 text-white" : "bg-white text-gray-500"}`,
                        children: v.id
                    }), v.name]
                }, v.id))
            }), f.jsxs("div", {
                className: "bg-white w-full p-4 overflow-y-scroll",
                children: [n === 1 && f.jsx(fw, {
                    setActiveStep: l
                }), n === 2 && f.jsx(dw, {
                    setActiveStep: l
                }), n === 3 && f.jsx(hw, {
                    setActiveStep: l
                }), n === 4 && f.jsx(mw, {
                    setActiveStep: l
                })]
            })]
        })
    })
}
  , xw = () => {
    var L, B, Q, _, $, ee, J, ie, me, ge, he, ue, W, P, N, O;
    const {id: n} = LT()
      , {language: l, translations: s} = it()
      , o = ga()
      , [c,h] = S.useState(null)
      , [d,p] = S.useState([])
      , [m,g] = S.useState(0)
      , [x,v] = S.useState(!1)
      , [T,A] = S.useState(!1)
      , [M,V] = S.useState(null);
    S.useEffect( () => {
        n && (async () => {
            var te, j, H;
            v(!0);
            try {
                const Z = await Be(`/api/v2/multi-payment/status/${n}`, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        language: l || "en"
                    }
                });
                Z.status_code === 200 ? (console.log("response", ((te = Z == null ? void 0 : Z.data) == null ? void 0 : te.total_charge) == "0.90"),
                h(Z),
                p((j = Z == null ? void 0 : Z.data) == null ? void 0 : j.transactions),
                g((H = Z == null ? void 0 : Z.data) == null ? void 0 : H.successful_transaction_count)) : (V({
                    message: Z.message,
                    type: "error"
                }),
                A(!0))
            } catch (Z) {
                A(!0);
                const X = Z
                  , le = typeof X == "object" && (X != null && X.message) ? X.message : "Failed to get payment data. Please try again later.";
                V({
                    message: le,
                    type: "error"
                })
            } finally {
                v(!1)
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
    return x ? f.jsx("div", {
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
            children: [M && f.jsx(Mt, {
                message: M.message,
                type: M.type,
                onClose: () => V(null)
            }), T ? f.jsxs("div", {
                className: "bg-white flex flex-col justify-center items-center py-4",
                children: [f.jsx("h1", {
                    className: "text-center text-red-500 font-light text-2xl mt-2",
                    children: (P = s == null ? void 0 : s.failed) == null ? void 0 : P[l]
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
                    }), "  ", (Q = s == null ? void 0 : s.payment_response_text2) == null ? void 0 : Q[l]]
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
                                    }), ((_ = c == null ? void 0 : c.data) == null ? void 0 : _.total_charge) != "0.00" && f.jsx("th", {
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
                                children: d.map( (Y, te) => {
                                    var j;
                                    return f.jsxs("tr", {
                                        className: "bg-white  border-gray-200 hover:bg-gray-50",
                                        children: [f.jsx("td", {
                                            className: "px-6 py-4",
                                            children: Y == null ? void 0 : Y.webfile_id
                                        }), f.jsx("td", {
                                            className: "px-6 py-4",
                                            children: Y == null ? void 0 : Y.ivac_name
                                        }), f.jsxs("td", {
                                            className: "px-6 py-4",
                                            children: [Y == null ? void 0 : Y.appointment_date, " (", Y == null ? void 0 : Y.appointment_time_slot, ")"]
                                        }), f.jsx("td", {
                                            className: "px-6 py-4 uppercase",
                                            children: Y == null ? void 0 : Y.email
                                        }), f.jsx("td", {
                                            className: "px-6 py-4",
                                            children: Y == null ? void 0 : Y.phone
                                        }), ((j = c == null ? void 0 : c.data) == null ? void 0 : j.total_charge) != "0.00" && f.jsx("td", {
                                            className: "px-6 py-4",
                                            children: Y == null ? void 0 : Y.charge
                                        }), f.jsx("td", {
                                            className: "px-6 py-4",
                                            children: Y == null ? void 0 : Y.amount
                                        }), f.jsx("td", {
                                            className: "px-6 py-4",
                                            children: Y == null ? void 0 : Y.status
                                        })]
                                    }, te)
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
                        children: [((ee = c == null ? void 0 : c.data) == null ? void 0 : ee.total_charge) != "0.00" && f.jsxs("div", {
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
                                children: ["BDT ", (ie = c == null ? void 0 : c.data) == null ? void 0 : ie.total_fees]
                            })]
                        })]
                    })]
                }), f.jsxs("div", {
                    className: "flex justify-center items-center mt-4 mx-4",
                    children: [f.jsxs("a", {
                        target: "_blank",
                        href: (me = c == null ? void 0 : c.data) == null ? void 0 : me.download_invoice_url,
                        className: "flex items-center gap-2 flex-wrap text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",
                        children: [f.jsx(Ay, {}), f.jsx("span", {
                            children: (ge = s == null ? void 0 : s.btnDownPDF) == null ? void 0 : ge[l]
                        })]
                    }), f.jsxs("a", {
                        type: "button",
                        target: "_blank",
                        href: (he = c == null ? void 0 : c.data) == null ? void 0 : he.print_invoice_url,
                        className: "hover:cursor-pointer flex text-white bg-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",
                        children: [f.jsx(Ny, {}), " ", (ue = s == null ? void 0 : s.btnPrintPDF) == null ? void 0 : ue[l]]
                    }), f.jsx("button", {
                        type: "button",
                        disabled: m >= 5,
                        onClick: D,
                        className: `text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
                            ${m >= 5 ? "bg-gray-400 cursor-not-allowed" : "hover:cursor-pointer bg-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800"}
                           `,
                        children: (W = s == null ? void 0 : s.makeNewPayment) == null ? void 0 : W[l]
                    })]
                })]
            })]
        })
    }))
}
  , vw = () => {
    var v, T, A;
    const {language: n, translations: l} = it()
      , s = ar()
      , o = ga()
      , [c,h] = S.useState( () => !!localStorage.getItem("access_token"))
      , d = localStorage.getItem("auth_photo")
      , p = localStorage.getItem("auth_name") ? localStorage.getItem("auth_name") : "User Name";
    S.useEffect( () => {
        const M = () => {
            h(!!localStorage.getItem("access_token"))
        }
        ;
        return window.addEventListener("storage", M),
        window.addEventListener("tokenUpdate", M),
        () => {
            window.removeEventListener("storage", M),
            window.removeEventListener("tokenUpdate", M)
        }
    }
    , []);
    const m = s.pathname === "/payment-status"
      , g = () => {
        o(m ? -1 : "/payment-status")
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
                src: aT,
                alt: "SIB Logo",
                className: "w-56 cursor-pointer",
                onClick: x
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
                children: m ? (v = l == null ? void 0 : l.bckToPay) == null ? void 0 : v[n] : (T = l == null ? void 0 : l.QueryPay) == null ? void 0 : T[n]
            }), f.jsx("div", {
                className: "flex flex-row items-center gap-2",
                children: c && f.jsxs(f.Fragment, {
                    children: [f.jsxs("p", {
                        className: "flex items-center justify-center gap-1 text-sm",
                        children: [d ? f.jsx("img", {
                            src: `${d}`,
                            alt: "User",
                            className: "w-6 h-6 rounded-full object-cover"
                        }) : f.jsx(Jj, {}), " ", p]
                    }), f.jsx("span", {
                        children: "|"
                    }), f.jsxs("p", {
                        className: "text-sm hover:cursor-pointer text-red-500",
                        onClick: x,
                        children: ["[ ", (A = l == null ? void 0 : l.logout_button) == null ? void 0 : A[n], " ]"]
                    })]
                })
            })]
        })]
    })
}
  , bw = () => f.jsx("div", {
    className: "px-8 py-4 flex justify-center md:justify-end items-center",
    children: f.jsx("div", {
        className: "flex items-center gap-2 text-sm text-gray-600",
        children: f.jsx("img", {
            src: nT,
            alt: "SSL Logo",
            className: " w-80"
        })
    })
})
  , Xg = ({children: n}) => localStorage.getItem("access_token") ? f.jsx(Xy, {
    to: "/application",
    replace: !0
}) : n
  , Sw = ({children: n}) => localStorage.getItem("access_token") ? n : f.jsx(Xy, {
    to: "/",
    replace: !0
})
  , jw = S.createContext({
    hasToken: !1,
    setHasToken: () => {}
})
  , Tw = ({children: n}) => {
    const [l,s] = S.useState(!!localStorage.getItem("access_token"));
    return S.useEffect( () => {
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
    f.jsx(jw.Provider, {
        value: {
            hasToken: l,
            setHasToken: s
        },
        children: n
    })
}
  , ww = () => {
    const [n,l] = S.useState(!0)
      , [s,o] = S.useState(!1);
    return S.useEffect( () => {
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
function Aw() {
    const [n,l] = S.useState(!1)
      , [s,o] = S.useState("")
      , [c,h] = S.useState("")
      , d = window.location.pathname === "/";
    return S.useEffect( () => {
        const p = localStorage.getItem("authStep");
        p && h(p)
    }
    , []),
    S.useEffect( () => {
        const p = () => {}
        ;
        return window.addEventListener("beforeunload", p),
        (async () => {
            try {
                const g = await Ky();
                g.status_code === 200 ? (localStorage.setItem("initialData", JSON.stringify(g.data)),
                l(!0)) : o("Something went wrong, please try again later.")
            } catch (g) {
                const x = g
                  , v = typeof x == "object" && (x != null && x.message) ? x.message : "Too Many Attempts. Please try again later.";
                o(v ? v + " Please try again later." : "Too Many Attempts. Please try again later.")
            }
        }
        )(),
        () => {
            window.removeEventListener("beforeunload", p)
        }
    }
    , []),
    S.useEffect( () => {
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
    S.useEffect( () => {
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
    n ? f.jsx(Tw, {
        children: f.jsx(Ij, {
            children: f.jsx(nw, {
                children: f.jsxs("div", {
                    className: "flex flex-col md:h-screen",
                    children: [f.jsx(eT, {}), f.jsxs("div", {
                        className: "flex flex-1 flex-col md:flex-row overflow-hidden",
                        children: [f.jsx("div", {
                            className: "w-full md:w-1/3 lg:w-1/4 bg-gray-800 md:h-screen h-full scrollbar-hide pb-4",
                            children: f.jsx($j, {})
                        }), f.jsxs("div", {
                            className: "w-full md:flex-1 overflow-y-auto bg-gray-50 p-4 flex flex-col bg-cover bg-center",
                            style: {
                                backgroundImage: `url(${Dy})`
                            },
                            children: [f.jsx("div", {
                                className: "mb-4",
                                children: f.jsx(vw, {})
                            }), f.jsx("div", {
                                className: "flex-1",
                                children: f.jsxs(ew, {
                                    children: [f.jsx(si, {
                                        path: "/",
                                        element: f.jsx(Xg, {
                                            children: f.jsx(pw, {})
                                        })
                                    }), f.jsx(si, {
                                        path: "/payment-status",
                                        element: f.jsx(gw, {})
                                    }), f.jsx(si, {
                                        path: "/application",
                                        element: f.jsx(Sw, {
                                            children: f.jsx(yw, {})
                                        })
                                    }), f.jsx(si, {
                                        path: "/payment-response/:id",
                                        element: f.jsx(Xg, {
                                            children: f.jsx(xw, {})
                                        })
                                    })]
                                })
                            }), c === "1" && d && f.jsx(ww, {}), f.jsx(bw, {})]
                        })]
                    })]
                })
            })
        })
    }) : f.jsx(sT, {
        message: s || "Loading, please wait..."
    })
}
fb.createRoot(document.getElementById("root")).render(
    f.jsx(Aw, {})
);

