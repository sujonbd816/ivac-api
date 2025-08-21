function nb(n, l) {
    for (var i = 0; i < l.length; i++) {
        const o = l[i];
        if (typeof o != "string" && !Array.isArray(o)) {
            for (const c in o)
                if (c !== "default" && !(c in n)) {
                    const f = Object.getOwnPropertyDescriptor(o, c);
                    f && Object.defineProperty(n, c, f.get ? f : {
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
        for (const f of c)
            if (f.type === "childList")
                for (const d of f.addedNodes)
                    d.tagName === "LINK" && d.rel === "modulepreload" && o(d)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function i(c) {
        const f = {};
        return c.integrity && (f.integrity = c.integrity),
        c.referrerPolicy && (f.referrerPolicy = c.referrerPolicy),
        c.crossOrigin === "use-credentials" ? f.credentials = "include" : c.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin",
        f
    }
    function o(c) {
        if (c.ep)
            return;
        c.ep = !0;
        const f = i(c);
        fetch(c.href, f)
    }
}
)();
function Jg(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
var dc = {
    exports: {}
}
  , Wi = {};
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
function lb() {
    if (yp)
        return Wi;
    yp = 1;
    var n = Symbol.for("react.transitional.element")
      , l = Symbol.for("react.fragment");
    function i(o, c, f) {
        var d = null;
        if (f !== void 0 && (d = "" + f),
        c.key !== void 0 && (d = "" + c.key),
        "key"in c) {
            f = {};
            for (var g in c)
                g !== "key" && (f[g] = c[g])
        } else
            f = c;
        return c = f.ref,
        {
            $$typeof: n,
            type: o,
            key: d,
            ref: c !== void 0 ? c : null,
            props: f
        }
    }
    return Wi.Fragment = l,
    Wi.jsx = i,
    Wi.jsxs = i,
    Wi
}
var vp;
function ib() {
    return vp || (vp = 1,
    dc.exports = lb()),
    dc.exports
}
var h = ib()
  , hc = {
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
var xp;
function sb() {
    if (xp)
        return Ee;
    xp = 1;
    var n = Symbol.for("react.transitional.element")
      , l = Symbol.for("react.portal")
      , i = Symbol.for("react.fragment")
      , o = Symbol.for("react.strict_mode")
      , c = Symbol.for("react.profiler")
      , f = Symbol.for("react.consumer")
      , d = Symbol.for("react.context")
      , g = Symbol.for("react.forward_ref")
      , p = Symbol.for("react.suspense")
      , m = Symbol.for("react.memo")
      , y = Symbol.for("react.lazy")
      , x = Symbol.iterator;
    function T(j) {
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
      , N = Object.assign
      , D = {};
    function _(j, L, W) {
        this.props = j,
        this.context = L,
        this.refs = D,
        this.updater = W || w
    }
    _.prototype.isReactComponent = {},
    _.prototype.setState = function(j, L) {
        if (typeof j != "object" && typeof j != "function" && j != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, j, L, "setState")
    }
    ,
    _.prototype.forceUpdate = function(j) {
        this.updater.enqueueForceUpdate(this, j, "forceUpdate")
    }
    ;
    function V() {}
    V.prototype = _.prototype;
    function k(j, L, W) {
        this.props = j,
        this.context = L,
        this.refs = D,
        this.updater = W || w
    }
    var B = k.prototype = new V;
    B.constructor = k,
    N(B, _.prototype),
    B.isPureReactComponent = !0;
    var K = Array.isArray
      , R = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null
    }
      , Z = Object.prototype.hasOwnProperty;
    function I(j, L, W, te, le, G) {
        return W = G.ref,
        {
            $$typeof: n,
            type: j,
            key: L,
            ref: W !== void 0 ? W : null,
            props: G
        }
    }
    function Q(j, L) {
        return I(j.type, L, void 0, void 0, void 0, j.props)
    }
    function ie(j) {
        return typeof j == "object" && j !== null && j.$$typeof === n
    }
    function fe(j) {
        var L = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + j.replace(/[=:]/g, function(W) {
            return L[W]
        })
    }
    var de = /\/+/g;
    function ce(j, L) {
        return typeof j == "object" && j !== null && j.key != null ? fe("" + j.key) : L.toString(36)
    }
    function oe() {}
    function ee(j) {
        switch (j.status) {
        case "fulfilled":
            return j.value;
        case "rejected":
            throw j.reason;
        default:
            switch (typeof j.status == "string" ? j.then(oe, oe) : (j.status = "pending",
            j.then(function(L) {
                j.status === "pending" && (j.status = "fulfilled",
                j.value = L)
            }, function(L) {
                j.status === "pending" && (j.status = "rejected",
                j.reason = L)
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
    function P(j, L, W, te, le) {
        var G = typeof j;
        (G === "undefined" || G === "boolean") && (j = null);
        var F = !1;
        if (j === null)
            F = !0;
        else
            switch (G) {
            case "bigint":
            case "string":
            case "number":
                F = !0;
                break;
            case "object":
                switch (j.$$typeof) {
                case n:
                case l:
                    F = !0;
                    break;
                case y:
                    return F = j._init,
                    P(F(j._payload), L, W, te, le)
                }
            }
        if (F)
            return le = le(j),
            F = te === "" ? "." + ce(j, 0) : te,
            K(le) ? (W = "",
            F != null && (W = F.replace(de, "$&/") + "/"),
            P(le, L, W, "", function(Te) {
                return Te
            })) : le != null && (ie(le) && (le = Q(le, W + (le.key == null || j && j.key === le.key ? "" : ("" + le.key).replace(de, "$&/") + "/") + F)),
            L.push(le)),
            1;
        F = 0;
        var Se = te === "" ? "." : te + ":";
        if (K(j))
            for (var we = 0; we < j.length; we++)
                te = j[we],
                G = Se + ce(te, we),
                F += P(te, L, W, G, le);
        else if (we = T(j),
        typeof we == "function")
            for (j = we.call(j),
            we = 0; !(te = j.next()).done; )
                te = te.value,
                G = Se + ce(te, we++),
                F += P(te, L, W, G, le);
        else if (G === "object") {
            if (typeof j.then == "function")
                return P(ee(j), L, W, te, le);
            throw L = String(j),
            Error("Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead.")
        }
        return F
    }
    function E(j, L, W) {
        if (j == null)
            return j;
        var te = []
          , le = 0;
        return P(j, te, "", "", function(G) {
            return L.call(W, G, le++)
        }),
        te
    }
    function O(j) {
        if (j._status === -1) {
            var L = j._result;
            L = L(),
            L.then(function(W) {
                (j._status === 0 || j._status === -1) && (j._status = 1,
                j._result = W)
            }, function(W) {
                (j._status === 0 || j._status === -1) && (j._status = 2,
                j._result = W)
            }),
            j._status === -1 && (j._status = 0,
            j._result = L)
        }
        if (j._status === 1)
            return j._result.default;
        throw j._result
    }
    var q = typeof reportError == "function" ? reportError : function(j) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var L = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof j == "object" && j !== null && typeof j.message == "string" ? String(j.message) : String(j),
                error: j
            });
            if (!window.dispatchEvent(L))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", j);
            return
        }
        console.error(j)
    }
    ;
    function ae() {}
    return Ee.Children = {
        map: E,
        forEach: function(j, L, W) {
            E(j, function() {
                L.apply(this, arguments)
            }, W)
        },
        count: function(j) {
            var L = 0;
            return E(j, function() {
                L++
            }),
            L
        },
        toArray: function(j) {
            return E(j, function(L) {
                return L
            }) || []
        },
        only: function(j) {
            if (!ie(j))
                throw Error("React.Children.only expected to receive a single React element child.");
            return j
        }
    },
    Ee.Component = _,
    Ee.Fragment = i,
    Ee.Profiler = c,
    Ee.PureComponent = k,
    Ee.StrictMode = o,
    Ee.Suspense = p,
    Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = R,
    Ee.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(j) {
            return R.H.useMemoCache(j)
        }
    },
    Ee.cache = function(j) {
        return function() {
            return j.apply(null, arguments)
        }
    }
    ,
    Ee.cloneElement = function(j, L, W) {
        if (j == null)
            throw Error("The argument must be a React element, but you passed " + j + ".");
        var te = N({}, j.props)
          , le = j.key
          , G = void 0;
        if (L != null)
            for (F in L.ref !== void 0 && (G = void 0),
            L.key !== void 0 && (le = "" + L.key),
            L)
                !Z.call(L, F) || F === "key" || F === "__self" || F === "__source" || F === "ref" && L.ref === void 0 || (te[F] = L[F]);
        var F = arguments.length - 2;
        if (F === 1)
            te.children = W;
        else if (1 < F) {
            for (var Se = Array(F), we = 0; we < F; we++)
                Se[we] = arguments[we + 2];
            te.children = Se
        }
        return I(j.type, le, void 0, void 0, G, te)
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
            $$typeof: f,
            _context: j
        },
        j
    }
    ,
    Ee.createElement = function(j, L, W) {
        var te, le = {}, G = null;
        if (L != null)
            for (te in L.key !== void 0 && (G = "" + L.key),
            L)
                Z.call(L, te) && te !== "key" && te !== "__self" && te !== "__source" && (le[te] = L[te]);
        var F = arguments.length - 2;
        if (F === 1)
            le.children = W;
        else if (1 < F) {
            for (var Se = Array(F), we = 0; we < F; we++)
                Se[we] = arguments[we + 2];
            le.children = Se
        }
        if (j && j.defaultProps)
            for (te in F = j.defaultProps,
            F)
                le[te] === void 0 && (le[te] = F[te]);
        return I(j, G, void 0, void 0, null, le)
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
            $$typeof: g,
            render: j
        }
    }
    ,
    Ee.isValidElement = ie,
    Ee.lazy = function(j) {
        return {
            $$typeof: y,
            _payload: {
                _status: -1,
                _result: j
            },
            _init: O
        }
    }
    ,
    Ee.memo = function(j, L) {
        return {
            $$typeof: m,
            type: j,
            compare: L === void 0 ? null : L
        }
    }
    ,
    Ee.startTransition = function(j) {
        var L = R.T
          , W = {};
        R.T = W;
        try {
            var te = j()
              , le = R.S;
            le !== null && le(W, te),
            typeof te == "object" && te !== null && typeof te.then == "function" && te.then(ae, q)
        } catch (G) {
            q(G)
        } finally {
            R.T = L
        }
    }
    ,
    Ee.unstable_useCacheRefresh = function() {
        return R.H.useCacheRefresh()
    }
    ,
    Ee.use = function(j) {
        return R.H.use(j)
    }
    ,
    Ee.useActionState = function(j, L, W) {
        return R.H.useActionState(j, L, W)
    }
    ,
    Ee.useCallback = function(j, L) {
        return R.H.useCallback(j, L)
    }
    ,
    Ee.useContext = function(j) {
        return R.H.useContext(j)
    }
    ,
    Ee.useDebugValue = function() {}
    ,
    Ee.useDeferredValue = function(j, L) {
        return R.H.useDeferredValue(j, L)
    }
    ,
    Ee.useEffect = function(j, L, W) {
        var te = R.H;
        if (typeof W == "function")
            throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return te.useEffect(j, L)
    }
    ,
    Ee.useId = function() {
        return R.H.useId()
    }
    ,
    Ee.useImperativeHandle = function(j, L, W) {
        return R.H.useImperativeHandle(j, L, W)
    }
    ,
    Ee.useInsertionEffect = function(j, L) {
        return R.H.useInsertionEffect(j, L)
    }
    ,
    Ee.useLayoutEffect = function(j, L) {
        return R.H.useLayoutEffect(j, L)
    }
    ,
    Ee.useMemo = function(j, L) {
        return R.H.useMemo(j, L)
    }
    ,
    Ee.useOptimistic = function(j, L) {
        return R.H.useOptimistic(j, L)
    }
    ,
    Ee.useReducer = function(j, L, W) {
        return R.H.useReducer(j, L, W)
    }
    ,
    Ee.useRef = function(j) {
        return R.H.useRef(j)
    }
    ,
    Ee.useState = function(j) {
        return R.H.useState(j)
    }
    ,
    Ee.useSyncExternalStore = function(j, L, W) {
        return R.H.useSyncExternalStore(j, L, W)
    }
    ,
    Ee.useTransition = function() {
        return R.H.useTransition()
    }
    ,
    Ee.version = "19.1.0",
    Ee
}
var bp;
function $o() {
    return bp || (bp = 1,
    hc.exports = sb()),
    hc.exports
}
var S = $o();
const ob = Jg(S)
  , rb = nb({
    __proto__: null,
    default: ob
}, [S]);
var mc = {
    exports: {}
}
  , es = {}
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
function ub() {
    return Sp || (Sp = 1,
    function(n) {
        function l(E, O) {
            var q = E.length;
            E.push(O);
            e: for (; 0 < q; ) {
                var ae = q - 1 >>> 1
                  , j = E[ae];
                if (0 < c(j, O))
                    E[ae] = O,
                    E[q] = j,
                    q = ae;
                else
                    break e
            }
        }
        function i(E) {
            return E.length === 0 ? null : E[0]
        }
        function o(E) {
            if (E.length === 0)
                return null;
            var O = E[0]
              , q = E.pop();
            if (q !== O) {
                E[0] = q;
                e: for (var ae = 0, j = E.length, L = j >>> 1; ae < L; ) {
                    var W = 2 * (ae + 1) - 1
                      , te = E[W]
                      , le = W + 1
                      , G = E[le];
                    if (0 > c(te, q))
                        le < j && 0 > c(G, te) ? (E[ae] = G,
                        E[le] = q,
                        ae = le) : (E[ae] = te,
                        E[W] = q,
                        ae = W);
                    else if (le < j && 0 > c(G, q))
                        E[ae] = G,
                        E[le] = q,
                        ae = le;
                    else
                        break e
                }
            }
            return O
        }
        function c(E, O) {
            var q = E.sortIndex - O.sortIndex;
            return q !== 0 ? q : E.id - O.id
        }
        if (n.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var f = performance;
            n.unstable_now = function() {
                return f.now()
            }
        } else {
            var d = Date
              , g = d.now();
            n.unstable_now = function() {
                return d.now() - g
            }
        }
        var p = []
          , m = []
          , y = 1
          , x = null
          , T = 3
          , w = !1
          , N = !1
          , D = !1
          , _ = !1
          , V = typeof setTimeout == "function" ? setTimeout : null
          , k = typeof clearTimeout == "function" ? clearTimeout : null
          , B = typeof setImmediate < "u" ? setImmediate : null;
        function K(E) {
            for (var O = i(m); O !== null; ) {
                if (O.callback === null)
                    o(m);
                else if (O.startTime <= E)
                    o(m),
                    O.sortIndex = O.expirationTime,
                    l(p, O);
                else
                    break;
                O = i(m)
            }
        }
        function R(E) {
            if (D = !1,
            K(E),
            !N)
                if (i(p) !== null)
                    N = !0,
                    Z || (Z = !0,
                    ce());
                else {
                    var O = i(m);
                    O !== null && P(R, O.startTime - E)
                }
        }
        var Z = !1
          , I = -1
          , Q = 5
          , ie = -1;
        function fe() {
            return _ ? !0 : !(n.unstable_now() - ie < Q)
        }
        function de() {
            if (_ = !1,
            Z) {
                var E = n.unstable_now();
                ie = E;
                var O = !0;
                try {
                    e: {
                        N = !1,
                        D && (D = !1,
                        k(I),
                        I = -1),
                        w = !0;
                        var q = T;
                        try {
                            t: {
                                for (K(E),
                                x = i(p); x !== null && !(x.expirationTime > E && fe()); ) {
                                    var ae = x.callback;
                                    if (typeof ae == "function") {
                                        x.callback = null,
                                        T = x.priorityLevel;
                                        var j = ae(x.expirationTime <= E);
                                        if (E = n.unstable_now(),
                                        typeof j == "function") {
                                            x.callback = j,
                                            K(E),
                                            O = !0;
                                            break t
                                        }
                                        x === i(p) && o(p),
                                        K(E)
                                    } else
                                        o(p);
                                    x = i(p)
                                }
                                if (x !== null)
                                    O = !0;
                                else {
                                    var L = i(m);
                                    L !== null && P(R, L.startTime - E),
                                    O = !1
                                }
                            }
                            break e
                        } finally {
                            x = null,
                            T = q,
                            w = !1
                        }
                        O = void 0
                    }
                } finally {
                    O ? ce() : Z = !1
                }
            }
        }
        var ce;
        if (typeof B == "function")
            ce = function() {
                B(de)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var oe = new MessageChannel
              , ee = oe.port2;
            oe.port1.onmessage = de,
            ce = function() {
                ee.postMessage(null)
            }
        } else
            ce = function() {
                V(de, 0)
            }
            ;
        function P(E, O) {
            I = V(function() {
                E(n.unstable_now())
            }, O)
        }
        n.unstable_IdlePriority = 5,
        n.unstable_ImmediatePriority = 1,
        n.unstable_LowPriority = 4,
        n.unstable_NormalPriority = 3,
        n.unstable_Profiling = null,
        n.unstable_UserBlockingPriority = 2,
        n.unstable_cancelCallback = function(E) {
            E.callback = null
        }
        ,
        n.unstable_forceFrameRate = function(E) {
            0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Q = 0 < E ? Math.floor(1e3 / E) : 5
        }
        ,
        n.unstable_getCurrentPriorityLevel = function() {
            return T
        }
        ,
        n.unstable_next = function(E) {
            switch (T) {
            case 1:
            case 2:
            case 3:
                var O = 3;
                break;
            default:
                O = T
            }
            var q = T;
            T = O;
            try {
                return E()
            } finally {
                T = q
            }
        }
        ,
        n.unstable_requestPaint = function() {
            _ = !0
        }
        ,
        n.unstable_runWithPriority = function(E, O) {
            switch (E) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                E = 3
            }
            var q = T;
            T = E;
            try {
                return O()
            } finally {
                T = q
            }
        }
        ,
        n.unstable_scheduleCallback = function(E, O, q) {
            var ae = n.unstable_now();
            switch (typeof q == "object" && q !== null ? (q = q.delay,
            q = typeof q == "number" && 0 < q ? ae + q : ae) : q = ae,
            E) {
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
            E = {
                id: y++,
                callback: O,
                priorityLevel: E,
                startTime: q,
                expirationTime: j,
                sortIndex: -1
            },
            q > ae ? (E.sortIndex = q,
            l(m, E),
            i(p) === null && E === i(m) && (D ? (k(I),
            I = -1) : D = !0,
            P(R, q - ae))) : (E.sortIndex = j,
            l(p, E),
            N || w || (N = !0,
            Z || (Z = !0,
            ce()))),
            E
        }
        ,
        n.unstable_shouldYield = fe,
        n.unstable_wrapCallback = function(E) {
            var O = T;
            return function() {
                var q = T;
                T = O;
                try {
                    return E.apply(this, arguments)
                } finally {
                    T = q
                }
            }
        }
    }(gc)),
    gc
}
var Tp;
function cb() {
    return Tp || (Tp = 1,
    pc.exports = ub()),
    pc.exports
}
var yc = {
    exports: {}
}
  , zt = {};
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
function fb() {
    if (jp)
        return zt;
    jp = 1;
    var n = $o();
    function l(p) {
        var m = "https://react.dev/errors/" + p;
        if (1 < arguments.length) {
            m += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var y = 2; y < arguments.length; y++)
                m += "&args[]=" + encodeURIComponent(arguments[y])
        }
        return "Minified React error #" + p + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function i() {}
    var o = {
        d: {
            f: i,
            r: function() {
                throw Error(l(522))
            },
            D: i,
            C: i,
            L: i,
            m: i,
            X: i,
            S: i,
            M: i
        },
        p: 0,
        findDOMNode: null
    }
      , c = Symbol.for("react.portal");
    function f(p, m, y) {
        var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: c,
            key: x == null ? null : "" + x,
            children: p,
            containerInfo: m,
            implementation: y
        }
    }
    var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function g(p, m) {
        if (p === "font")
            return "";
        if (typeof m == "string")
            return m === "use-credentials" ? m : ""
    }
    return zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o,
    zt.createPortal = function(p, m) {
        var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
            throw Error(l(299));
        return f(p, m, null, y)
    }
    ,
    zt.flushSync = function(p) {
        var m = d.T
          , y = o.p;
        try {
            if (d.T = null,
            o.p = 2,
            p)
                return p()
        } finally {
            d.T = m,
            o.p = y,
            o.d.f()
        }
    }
    ,
    zt.preconnect = function(p, m) {
        typeof p == "string" && (m ? (m = m.crossOrigin,
        m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null,
        o.d.C(p, m))
    }
    ,
    zt.prefetchDNS = function(p) {
        typeof p == "string" && o.d.D(p)
    }
    ,
    zt.preinit = function(p, m) {
        if (typeof p == "string" && m && typeof m.as == "string") {
            var y = m.as
              , x = g(y, m.crossOrigin)
              , T = typeof m.integrity == "string" ? m.integrity : void 0
              , w = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
            y === "style" ? o.d.S(p, typeof m.precedence == "string" ? m.precedence : void 0, {
                crossOrigin: x,
                integrity: T,
                fetchPriority: w
            }) : y === "script" && o.d.X(p, {
                crossOrigin: x,
                integrity: T,
                fetchPriority: w,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0
            })
        }
    }
    ,
    zt.preinitModule = function(p, m) {
        if (typeof p == "string")
            if (typeof m == "object" && m !== null) {
                if (m.as == null || m.as === "script") {
                    var y = g(m.as, m.crossOrigin);
                    o.d.M(p, {
                        crossOrigin: y,
                        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                        nonce: typeof m.nonce == "string" ? m.nonce : void 0
                    })
                }
            } else
                m == null && o.d.M(p)
    }
    ,
    zt.preload = function(p, m) {
        if (typeof p == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
            var y = m.as
              , x = g(y, m.crossOrigin);
            o.d.L(p, y, {
                crossOrigin: x,
                integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0,
                type: typeof m.type == "string" ? m.type : void 0,
                fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
                referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
                imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
                imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
                media: typeof m.media == "string" ? m.media : void 0
            })
        }
    }
    ,
    zt.preloadModule = function(p, m) {
        if (typeof p == "string")
            if (m) {
                var y = g(m.as, m.crossOrigin);
                o.d.m(p, {
                    as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
                    crossOrigin: y,
                    integrity: typeof m.integrity == "string" ? m.integrity : void 0
                })
            } else
                o.d.m(p)
    }
    ,
    zt.requestFormReset = function(p) {
        o.d.r(p)
    }
    ,
    zt.unstable_batchedUpdates = function(p, m) {
        return p(m)
    }
    ,
    zt.useFormState = function(p, m, y) {
        return d.H.useFormState(p, m, y)
    }
    ,
    zt.useFormStatus = function() {
        return d.H.useHostTransitionStatus()
    }
    ,
    zt.version = "19.1.0",
    zt
}
var wp;
function Ig() {
    if (wp)
        return yc.exports;
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
    yc.exports = fb(),
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
var Ap;
function db() {
    if (Ap)
        return es;
    Ap = 1;
    var n = cb()
      , l = $o()
      , i = Ig();
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
    function f(e) {
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
    function g(e) {
        if (f(e) !== e)
            throw Error(o(188))
    }
    function p(e) {
        var t = e.alternate;
        if (!t) {
            if (t = f(e),
            t === null)
                throw Error(o(188));
            return t !== e ? null : e
        }
        for (var a = e, s = t; ; ) {
            var r = a.return;
            if (r === null)
                break;
            var u = r.alternate;
            if (u === null) {
                if (s = r.return,
                s !== null) {
                    a = s;
                    continue
                }
                break
            }
            if (r.child === u.child) {
                for (u = r.child; u; ) {
                    if (u === a)
                        return g(r),
                        e;
                    if (u === s)
                        return g(r),
                        t;
                    u = u.sibling
                }
                throw Error(o(188))
            }
            if (a.return !== s.return)
                a = r,
                s = u;
            else {
                for (var v = !1, b = r.child; b; ) {
                    if (b === a) {
                        v = !0,
                        a = r,
                        s = u;
                        break
                    }
                    if (b === s) {
                        v = !0,
                        s = r,
                        a = u;
                        break
                    }
                    b = b.sibling
                }
                if (!v) {
                    for (b = u.child; b; ) {
                        if (b === a) {
                            v = !0,
                            a = u,
                            s = r;
                            break
                        }
                        if (b === s) {
                            v = !0,
                            s = u,
                            a = r;
                            break
                        }
                        b = b.sibling
                    }
                    if (!v)
                        throw Error(o(189))
                }
            }
            if (a.alternate !== s)
                throw Error(o(190))
        }
        if (a.tag !== 3)
            throw Error(o(188));
        return a.stateNode.current === a ? e : t
    }
    function m(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e;
        for (e = e.child; e !== null; ) {
            if (t = m(e),
            t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var y = Object.assign
      , x = Symbol.for("react.element")
      , T = Symbol.for("react.transitional.element")
      , w = Symbol.for("react.portal")
      , N = Symbol.for("react.fragment")
      , D = Symbol.for("react.strict_mode")
      , _ = Symbol.for("react.profiler")
      , V = Symbol.for("react.provider")
      , k = Symbol.for("react.consumer")
      , B = Symbol.for("react.context")
      , K = Symbol.for("react.forward_ref")
      , R = Symbol.for("react.suspense")
      , Z = Symbol.for("react.suspense_list")
      , I = Symbol.for("react.memo")
      , Q = Symbol.for("react.lazy")
      , ie = Symbol.for("react.activity")
      , fe = Symbol.for("react.memo_cache_sentinel")
      , de = Symbol.iterator;
    function ce(e) {
        return e === null || typeof e != "object" ? null : (e = de && e[de] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var oe = Symbol.for("react.client.reference");
    function ee(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.$$typeof === oe ? null : e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case N:
            return "Fragment";
        case _:
            return "Profiler";
        case D:
            return "StrictMode";
        case R:
            return "Suspense";
        case Z:
            return "SuspenseList";
        case ie:
            return "Activity"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case w:
                return "Portal";
            case B:
                return (e.displayName || "Context") + ".Provider";
            case k:
                return (e._context.displayName || "Context") + ".Consumer";
            case K:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case I:
                return t = e.displayName || null,
                t !== null ? t : ee(e.type) || "Memo";
            case Q:
                t = e._payload,
                e = e._init;
                try {
                    return ee(e(t))
                } catch {}
            }
        return null
    }
    var P = Array.isArray
      , E = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , O = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , q = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , ae = []
      , j = -1;
    function L(e) {
        return {
            current: e
        }
    }
    function W(e) {
        0 > j || (e.current = ae[j],
        ae[j] = null,
        j--)
    }
    function te(e, t) {
        j++,
        ae[j] = e.current,
        e.current = t
    }
    var le = L(null)
      , G = L(null)
      , F = L(null)
      , Se = L(null);
    function we(e, t) {
        switch (te(F, t),
        te(G, e),
        te(le, null),
        t.nodeType) {
        case 9:
        case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? Xm(e) : 0;
            break;
        default:
            if (e = t.tagName,
            t = t.namespaceURI)
                t = Xm(t),
                e = Km(t, e);
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
        W(le),
        te(le, e)
    }
    function Te() {
        W(le),
        W(G),
        W(F)
    }
    function Ve(e) {
        e.memoizedState !== null && te(Se, e);
        var t = le.current
          , a = Km(t, e.type);
        t !== a && (te(G, e),
        te(le, a))
    }
    function Ue(e) {
        G.current === e && (W(le),
        W(G)),
        Se.current === e && (W(Se),
        Qi._currentValue = q)
    }
    var Le = Object.prototype.hasOwnProperty
      , jt = n.unstable_scheduleCallback
      , Ne = n.unstable_cancelCallback
      , $e = n.unstable_shouldYield
      , ta = n.unstable_requestPaint
      , ot = n.unstable_now
      , za = n.unstable_getCurrentPriorityLevel
      , aa = n.unstable_ImmediatePriority
      , wa = n.unstable_UserBlockingPriority
      , Xt = n.unstable_NormalPriority
      , Ua = n.unstable_LowPriority
      , Aa = n.unstable_IdlePriority
      , Ba = n.log
      , La = n.unstable_setDisableYieldValue
      , je = null
      , Je = null;
    function wt(e) {
        if (typeof Ba == "function" && La(e),
        Je && typeof Je.setStrictMode == "function")
            try {
                Je.setStrictMode(je, e)
            } catch {}
    }
    var rt = Math.clz32 ? Math.clz32 : ka
      , on = Math.log
      , rn = Math.LN2;
    function ka(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (on(e) / rn | 0) | 0
    }
    var Kt = 256
      , se = 4194304;
    function me(e) {
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
    function We(e, t, a) {
        var s = e.pendingLanes;
        if (s === 0)
            return 0;
        var r = 0
          , u = e.suspendedLanes
          , v = e.pingedLanes;
        e = e.warmLanes;
        var b = s & 134217727;
        return b !== 0 ? (s = b & ~u,
        s !== 0 ? r = me(s) : (v &= b,
        v !== 0 ? r = me(v) : a || (a = b & ~e,
        a !== 0 && (r = me(a))))) : (b = s & ~u,
        b !== 0 ? r = me(b) : v !== 0 ? r = me(v) : a || (a = s & ~e,
        a !== 0 && (r = me(a)))),
        r === 0 ? 0 : t !== 0 && t !== r && (t & u) === 0 && (u = r & -r,
        a = t & -t,
        u >= a || u === 32 && (a & 4194048) !== 0) ? t : r
    }
    function Re(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }
    function ut(e, t) {
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
    function xt() {
        var e = Kt;
        return Kt <<= 1,
        (Kt & 4194048) === 0 && (Kt = 256),
        e
    }
    function ne() {
        var e = se;
        return se <<= 1,
        (se & 62914560) === 0 && (se = 4194304),
        e
    }
    function xe(e) {
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
    function kt(e, t, a, s, r, u) {
        var v = e.pendingLanes;
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
          , U = e.hiddenUpdates;
        for (a = v & ~a; 0 < a; ) {
            var X = 31 - rt(a)
              , $ = 1 << X;
            b[X] = 0,
            A[X] = -1;
            var H = U[X];
            if (H !== null)
                for (U[X] = null,
                X = 0; X < H.length; X++) {
                    var Y = H[X];
                    Y !== null && (Y.lane &= -536870913)
                }
            a &= ~$
        }
        s !== 0 && ai(e, s, 0),
        u !== 0 && r === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(v & ~t))
    }
    function ai(e, t, a) {
        e.pendingLanes |= t,
        e.suspendedLanes &= ~t;
        var s = 31 - rt(t);
        e.entangledLanes |= t,
        e.entanglements[s] = e.entanglements[s] | 1073741824 | a & 4194090
    }
    function ni(e, t) {
        var a = e.entangledLanes |= t;
        for (e = e.entanglements; a; ) {
            var s = 31 - rt(a)
              , r = 1 << s;
            r & t | e[s] & t && (e[s] |= t),
            a &= ~r
        }
    }
    function ol(e) {
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
    function rl(e) {
        return e &= -e,
        2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function li() {
        var e = O.p;
        return e !== 0 ? e : (e = window.event,
        e === void 0 ? 32 : fp(e.type))
    }
    function ws(e, t) {
        var a = O.p;
        try {
            return O.p = e,
            t()
        } finally {
            O.p = a
        }
    }
    var va = Math.random().toString(36).slice(2)
      , bt = "__reactFiber$" + va
      , Ct = "__reactProps$" + va
      , Ha = "__reactContainer$" + va
      , ul = "__reactEvents$" + va
      , As = "__reactListeners$" + va
      , Ns = "__reactHandles$" + va
      , ii = "__reactResources$" + va
      , un = "__reactMarker$" + va;
    function cl(e) {
        delete e[bt],
        delete e[Ct],
        delete e[ul],
        delete e[As],
        delete e[Ns]
    }
    function Pa(e) {
        var t = e[bt];
        if (t)
            return t;
        for (var a = e.parentNode; a; ) {
            if (t = a[Ha] || a[bt]) {
                if (a = t.alternate,
                t.child !== null || a !== null && a.child !== null)
                    for (e = Jm(e); e !== null; ) {
                        if (a = e[bt])
                            return a;
                        e = Jm(e)
                    }
                return t
            }
            e = a,
            a = e.parentNode
        }
        return null
    }
    function Ae(e) {
        if (e = e[bt] || e[Ha]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
                return e
        }
        return null
    }
    function Ce(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e.stateNode;
        throw Error(o(33))
    }
    function Be(e) {
        var t = e[ii];
        return t || (t = e[ii] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        t
    }
    function be(e) {
        e[un] = !0
    }
    var qe = new Set
      , Zt = {};
    function Na(e, t) {
        qa(e, t),
        qa(e + "Capture", t)
    }
    function qa(e, t) {
        for (Zt[e] = t,
        e = 0; e < t.length; e++)
            qe.add(t[e])
    }
    var ct = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , xa = {}
      , si = {};
    function Es(e) {
        return Le.call(si, e) ? !0 : Le.call(xa, e) ? !1 : ct.test(e) ? si[e] = !0 : (xa[e] = !0,
        !1)
    }
    function Cs(e, t, a) {
        if (Es(t))
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
                    var s = t.toLowerCase().slice(0, 5);
                    if (s !== "data-" && s !== "aria-") {
                        e.removeAttribute(t);
                        return
                    }
                }
                e.setAttribute(t, "" + a)
            }
    }
    function Ds(e, t, a) {
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
    function Ya(e, t, a, s) {
        if (s === null)
            e.removeAttribute(a);
        else {
            switch (typeof s) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(a);
                return
            }
            e.setAttributeNS(t, a, "" + s)
        }
    }
    var sr, Lf;
    function fl(e) {
        if (sr === void 0)
            try {
                throw Error()
            } catch (a) {
                var t = a.stack.trim().match(/\n( *(at )?)/);
                sr = t && t[1] || "",
                Lf = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + sr + e + Lf
    }
    var or = !1;
    function rr(e, t) {
        if (!e || or)
            return "";
        or = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var s = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var $ = function() {
                                throw Error()
                            };
                            if (Object.defineProperty($.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct($, [])
                                } catch (Y) {
                                    var H = Y
                                }
                                Reflect.construct(e, [], $)
                            } else {
                                try {
                                    $.call()
                                } catch (Y) {
                                    H = Y
                                }
                                e.call($.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (Y) {
                                H = Y
                            }
                            ($ = e()) && typeof $.catch == "function" && $.catch(function() {})
                        }
                    } catch (Y) {
                        if (Y && H && typeof Y.stack == "string")
                            return [Y.stack, H.stack]
                    }
                    return [null, null]
                }
            };
            s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var r = Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot, "name");
            r && r.configurable && Object.defineProperty(s.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var u = s.DetermineComponentFrameRoot()
              , v = u[0]
              , b = u[1];
            if (v && b) {
                var A = v.split(`
`)
                  , U = b.split(`
`);
                for (r = s = 0; s < A.length && !A[s].includes("DetermineComponentFrameRoot"); )
                    s++;
                for (; r < U.length && !U[r].includes("DetermineComponentFrameRoot"); )
                    r++;
                if (s === A.length || r === U.length)
                    for (s = A.length - 1,
                    r = U.length - 1; 1 <= s && 0 <= r && A[s] !== U[r]; )
                        r--;
                for (; 1 <= s && 0 <= r; s--,
                r--)
                    if (A[s] !== U[r]) {
                        if (s !== 1 || r !== 1)
                            do
                                if (s--,
                                r--,
                                0 > r || A[s] !== U[r]) {
                                    var X = `
` + A[s].replace(" at new ", " at ");
                                    return e.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", e.displayName)),
                                    X
                                }
                            while (1 <= s && 0 <= r);
                        break
                    }
            }
        } finally {
            or = !1,
            Error.prepareStackTrace = a
        }
        return (a = e ? e.displayName || e.name : "") ? fl(a) : ""
    }
    function I0(e) {
        switch (e.tag) {
        case 26:
        case 27:
        case 5:
            return fl(e.type);
        case 16:
            return fl("Lazy");
        case 13:
            return fl("Suspense");
        case 19:
            return fl("SuspenseList");
        case 0:
        case 15:
            return rr(e.type, !1);
        case 11:
            return rr(e.type.render, !1);
        case 1:
            return rr(e.type, !0);
        case 31:
            return fl("Activity");
        default:
            return ""
        }
    }
    function kf(e) {
        try {
            var t = "";
            do
                t += I0(e),
                e = e.return;
            while (e);
            return t
        } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack
        }
    }
    function na(e) {
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
    function Hf(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function $0(e) {
        var t = Hf(e) ? "checked" : "value"
          , a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
          , s = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var r = a.get
              , u = a.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return r.call(this)
                },
                set: function(v) {
                    s = "" + v,
                    u.call(this, v)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: a.enumerable
            }),
            {
                getValue: function() {
                    return s
                },
                setValue: function(v) {
                    s = "" + v
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function _s(e) {
        e._valueTracker || (e._valueTracker = $0(e))
    }
    function Pf(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var a = t.getValue()
          , s = "";
        return e && (s = Hf(e) ? e.checked ? "true" : "false" : e.value),
        e = s,
        e !== a ? (t.setValue(e),
        !0) : !1
    }
    function Ms(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var W0 = /[\n"\\]/g;
    function la(e) {
        return e.replace(W0, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function ur(e, t, a, s, r, u, v, b) {
        e.name = "",
        v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? e.type = v : e.removeAttribute("type"),
        t != null ? v === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + na(t)) : e.value !== "" + na(t) && (e.value = "" + na(t)) : v !== "submit" && v !== "reset" || e.removeAttribute("value"),
        t != null ? cr(e, v, na(t)) : a != null ? cr(e, v, na(a)) : s != null && e.removeAttribute("value"),
        r == null && u != null && (e.defaultChecked = !!u),
        r != null && (e.checked = r && typeof r != "function" && typeof r != "symbol"),
        b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? e.name = "" + na(b) : e.removeAttribute("name")
    }
    function qf(e, t, a, s, r, u, v, b) {
        if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u),
        t != null || a != null) {
            if (!(u !== "submit" && u !== "reset" || t != null))
                return;
            a = a != null ? "" + na(a) : "",
            t = t != null ? "" + na(t) : a,
            b || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        s = s ?? r,
        s = typeof s != "function" && typeof s != "symbol" && !!s,
        e.checked = b ? e.checked : !!s,
        e.defaultChecked = !!s,
        v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" && (e.name = v)
    }
    function cr(e, t, a) {
        t === "number" && Ms(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a)
    }
    function dl(e, t, a, s) {
        if (e = e.options,
        t) {
            t = {};
            for (var r = 0; r < a.length; r++)
                t["$" + a[r]] = !0;
            for (a = 0; a < e.length; a++)
                r = t.hasOwnProperty("$" + e[a].value),
                e[a].selected !== r && (e[a].selected = r),
                r && s && (e[a].defaultSelected = !0)
        } else {
            for (a = "" + na(a),
            t = null,
            r = 0; r < e.length; r++) {
                if (e[r].value === a) {
                    e[r].selected = !0,
                    s && (e[r].defaultSelected = !0);
                    return
                }
                t !== null || e[r].disabled || (t = e[r])
            }
            t !== null && (t.selected = !0)
        }
    }
    function Yf(e, t, a) {
        if (t != null && (t = "" + na(t),
        t !== e.value && (e.value = t),
        a == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = a != null ? "" + na(a) : ""
    }
    function Gf(e, t, a, s) {
        if (t == null) {
            if (s != null) {
                if (a != null)
                    throw Error(o(92));
                if (P(s)) {
                    if (1 < s.length)
                        throw Error(o(93));
                    s = s[0]
                }
                a = s
            }
            a == null && (a = ""),
            t = a
        }
        a = na(t),
        e.defaultValue = a,
        s = e.textContent,
        s === a && s !== "" && s !== null && (e.value = s)
    }
    function hl(e, t) {
        if (t) {
            var a = e.firstChild;
            if (a && a === e.lastChild && a.nodeType === 3) {
                a.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var ev = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Xf(e, t, a) {
        var s = t.indexOf("--") === 0;
        a == null || typeof a == "boolean" || a === "" ? s ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : s ? e.setProperty(t, a) : typeof a != "number" || a === 0 || ev.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px"
    }
    function Kf(e, t, a) {
        if (t != null && typeof t != "object")
            throw Error(o(62));
        if (e = e.style,
        a != null) {
            for (var s in a)
                !a.hasOwnProperty(s) || t != null && t.hasOwnProperty(s) || (s.indexOf("--") === 0 ? e.setProperty(s, "") : s === "float" ? e.cssFloat = "" : e[s] = "");
            for (var r in t)
                s = t[r],
                t.hasOwnProperty(r) && a[r] !== s && Xf(e, r, s)
        } else
            for (var u in t)
                t.hasOwnProperty(u) && Xf(e, u, t[u])
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
    var tv = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , av = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Os(e) {
        return av.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    var dr = null;
    function hr(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var ml = null
      , pl = null;
    function Zf(e) {
        var t = Ae(e);
        if (t && (e = t.stateNode)) {
            var a = e[Ct] || null;
            e: switch (e = t.stateNode,
            t.type) {
            case "input":
                if (ur(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name),
                t = a.name,
                a.type === "radio" && t != null) {
                    for (a = e; a.parentNode; )
                        a = a.parentNode;
                    for (a = a.querySelectorAll('input[name="' + la("" + t) + '"][type="radio"]'),
                    t = 0; t < a.length; t++) {
                        var s = a[t];
                        if (s !== e && s.form === e.form) {
                            var r = s[Ct] || null;
                            if (!r)
                                throw Error(o(90));
                            ur(s, r.value, r.defaultValue, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name)
                        }
                    }
                    for (t = 0; t < a.length; t++)
                        s = a[t],
                        s.form === e.form && Pf(s)
                }
                break e;
            case "textarea":
                Yf(e, a.value, a.defaultValue);
                break e;
            case "select":
                t = a.value,
                t != null && dl(e, !!a.multiple, t, !1)
            }
        }
    }
    var mr = !1;
    function Qf(e, t, a) {
        if (mr)
            return e(t, a);
        mr = !0;
        try {
            var s = e(t);
            return s
        } finally {
            if (mr = !1,
            (ml !== null || pl !== null) && (vo(),
            ml && (t = ml,
            e = pl,
            pl = ml = null,
            Zf(t),
            e)))
                for (t = 0; t < e.length; t++)
                    Zf(e[t])
        }
    }
    function oi(e, t) {
        var a = e.stateNode;
        if (a === null)
            return null;
        var s = a[Ct] || null;
        if (s === null)
            return null;
        a = s[t];
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
            (s = !s.disabled) || (e = e.type,
            s = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !s;
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
      , pr = !1;
    if (Ga)
        try {
            var ri = {};
            Object.defineProperty(ri, "passive", {
                get: function() {
                    pr = !0
                }
            }),
            window.addEventListener("test", ri, ri),
            window.removeEventListener("test", ri, ri)
        } catch {
            pr = !1
        }
    var cn = null
      , gr = null
      , Rs = null;
    function Ff() {
        if (Rs)
            return Rs;
        var e, t = gr, a = t.length, s, r = "value"in cn ? cn.value : cn.textContent, u = r.length;
        for (e = 0; e < a && t[e] === r[e]; e++)
            ;
        var v = a - e;
        for (s = 1; s <= v && t[a - s] === r[u - s]; s++)
            ;
        return Rs = r.slice(e, 1 < s ? 1 - s : void 0)
    }
    function Vs(e) {
        var t = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function zs() {
        return !0
    }
    function Jf() {
        return !1
    }
    function Ht(e) {
        function t(a, s, r, u, v) {
            this._reactName = a,
            this._targetInst = r,
            this.type = s,
            this.nativeEvent = u,
            this.target = v,
            this.currentTarget = null;
            for (var b in e)
                e.hasOwnProperty(b) && (a = e[b],
                this[b] = a ? a(u) : u[b]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? zs : Jf,
            this.isPropagationStopped = Jf,
            this
        }
        return y(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1),
                this.isDefaultPrevented = zs)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
                this.isPropagationStopped = zs)
            },
            persist: function() {},
            isPersistent: zs
        }),
        t
    }
    var Ln = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Us = Ht(Ln), ui = y({}, Ln, {
        view: 0,
        detail: 0
    }), nv = Ht(ui), yr, vr, ci, Bs = y({}, ui, {
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
            return "movementX"in e ? e.movementX : (e !== ci && (ci && e.type === "mousemove" ? (yr = e.screenX - ci.screenX,
            vr = e.screenY - ci.screenY) : vr = yr = 0,
            ci = e),
            yr)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : vr
        }
    }), If = Ht(Bs), lv = y({}, Bs, {
        dataTransfer: 0
    }), iv = Ht(lv), sv = y({}, ui, {
        relatedTarget: 0
    }), xr = Ht(sv), ov = y({}, Ln, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), rv = Ht(ov), uv = y({}, Ln, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), cv = Ht(uv), fv = y({}, Ln, {
        data: 0
    }), $f = Ht(fv), dv = {
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
    }, hv = {
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
    }, mv = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function pv(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = mv[e]) ? !!t[e] : !1
    }
    function br() {
        return pv
    }
    var gv = y({}, ui, {
        key: function(e) {
            if (e.key) {
                var t = dv[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = Vs(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? hv[e.keyCode] || "Unidentified" : ""
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
            return e.type === "keypress" ? Vs(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Vs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , yv = Ht(gv)
      , vv = y({}, Bs, {
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
      , Wf = Ht(vv)
      , xv = y({}, ui, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: br
    })
      , bv = Ht(xv)
      , Sv = y({}, Ln, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , Tv = Ht(Sv)
      , jv = y({}, Bs, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , wv = Ht(jv)
      , Av = y({}, Ln, {
        newState: 0,
        oldState: 0
    })
      , Nv = Ht(Av)
      , Ev = [9, 13, 27, 32]
      , Sr = Ga && "CompositionEvent"in window
      , fi = null;
    Ga && "documentMode"in document && (fi = document.documentMode);
    var Cv = Ga && "TextEvent"in window && !fi
      , ed = Ga && (!Sr || fi && 8 < fi && 11 >= fi)
      , td = " "
      , ad = !1;
    function nd(e, t) {
        switch (e) {
        case "keyup":
            return Ev.indexOf(t.keyCode) !== -1;
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
    var gl = !1;
    function Dv(e, t) {
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
    function _v(e, t) {
        if (gl)
            return e === "compositionend" || !Sr && nd(e, t) ? (e = Ff(),
            Rs = gr = cn = null,
            gl = !1,
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
    var Mv = {
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
    function id(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Mv[e.type] : t === "textarea"
    }
    function sd(e, t, a, s) {
        ml ? pl ? pl.push(s) : pl = [s] : ml = s,
        t = wo(t, "onChange"),
        0 < t.length && (a = new Us("onChange","change",null,a,s),
        e.push({
            event: a,
            listeners: t
        }))
    }
    var di = null
      , hi = null;
    function Ov(e) {
        Hm(e, 0)
    }
    function Ls(e) {
        var t = Ce(e);
        if (Pf(t))
            return e
    }
    function od(e, t) {
        if (e === "change")
            return t
    }
    var rd = !1;
    if (Ga) {
        var Tr;
        if (Ga) {
            var jr = "oninput"in document;
            if (!jr) {
                var ud = document.createElement("div");
                ud.setAttribute("oninput", "return;"),
                jr = typeof ud.oninput == "function"
            }
            Tr = jr
        } else
            Tr = !1;
        rd = Tr && (!document.documentMode || 9 < document.documentMode)
    }
    function cd() {
        di && (di.detachEvent("onpropertychange", fd),
        hi = di = null)
    }
    function fd(e) {
        if (e.propertyName === "value" && Ls(hi)) {
            var t = [];
            sd(t, hi, e, hr(e)),
            Qf(Ov, t)
        }
    }
    function Rv(e, t, a) {
        e === "focusin" ? (cd(),
        di = t,
        hi = a,
        di.attachEvent("onpropertychange", fd)) : e === "focusout" && cd()
    }
    function Vv(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return Ls(hi)
    }
    function zv(e, t) {
        if (e === "click")
            return Ls(t)
    }
    function Uv(e, t) {
        if (e === "input" || e === "change")
            return Ls(t)
    }
    function Bv(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var Qt = typeof Object.is == "function" ? Object.is : Bv;
    function mi(e, t) {
        if (Qt(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var a = Object.keys(e)
          , s = Object.keys(t);
        if (a.length !== s.length)
            return !1;
        for (s = 0; s < a.length; s++) {
            var r = a[s];
            if (!Le.call(t, r) || !Qt(e[r], t[r]))
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
        for (var s; a; ) {
            if (a.nodeType === 3) {
                if (s = e + a.textContent.length,
                e <= t && s >= t)
                    return {
                        node: a,
                        offset: t - e
                    };
                e = s
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
        for (var t = Ms(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
                var a = typeof t.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a)
                e = t.contentWindow;
            else
                break;
            t = Ms(e.document)
        }
        return t
    }
    function wr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var Lv = Ga && "documentMode"in document && 11 >= document.documentMode
      , yl = null
      , Ar = null
      , pi = null
      , Nr = !1;
    function gd(e, t, a) {
        var s = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        Nr || yl == null || yl !== Ms(s) || (s = yl,
        "selectionStart"in s && wr(s) ? s = {
            start: s.selectionStart,
            end: s.selectionEnd
        } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(),
        s = {
            anchorNode: s.anchorNode,
            anchorOffset: s.anchorOffset,
            focusNode: s.focusNode,
            focusOffset: s.focusOffset
        }),
        pi && mi(pi, s) || (pi = s,
        s = wo(Ar, "onSelect"),
        0 < s.length && (t = new Us("onSelect","select",null,t,a),
        e.push({
            event: t,
            listeners: s
        }),
        t.target = yl)))
    }
    function kn(e, t) {
        var a = {};
        return a[e.toLowerCase()] = t.toLowerCase(),
        a["Webkit" + e] = "webkit" + t,
        a["Moz" + e] = "moz" + t,
        a
    }
    var vl = {
        animationend: kn("Animation", "AnimationEnd"),
        animationiteration: kn("Animation", "AnimationIteration"),
        animationstart: kn("Animation", "AnimationStart"),
        transitionrun: kn("Transition", "TransitionRun"),
        transitionstart: kn("Transition", "TransitionStart"),
        transitioncancel: kn("Transition", "TransitionCancel"),
        transitionend: kn("Transition", "TransitionEnd")
    }
      , Er = {}
      , yd = {};
    Ga && (yd = document.createElement("div").style,
    "AnimationEvent"in window || (delete vl.animationend.animation,
    delete vl.animationiteration.animation,
    delete vl.animationstart.animation),
    "TransitionEvent"in window || delete vl.transitionend.transition);
    function Hn(e) {
        if (Er[e])
            return Er[e];
        if (!vl[e])
            return e;
        var t = vl[e], a;
        for (a in t)
            if (t.hasOwnProperty(a) && a in yd)
                return Er[e] = t[a];
        return e
    }
    var vd = Hn("animationend")
      , xd = Hn("animationiteration")
      , bd = Hn("animationstart")
      , kv = Hn("transitionrun")
      , Hv = Hn("transitionstart")
      , Pv = Hn("transitioncancel")
      , Sd = Hn("transitionend")
      , Td = new Map
      , Cr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Cr.push("scrollEnd");
    function ba(e, t) {
        Td.set(e, t),
        Na(t, [e])
    }
    var jd = new WeakMap;
    function ia(e, t) {
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
    var sa = []
      , xl = 0
      , Dr = 0;
    function ks() {
        for (var e = xl, t = Dr = xl = 0; t < e; ) {
            var a = sa[t];
            sa[t++] = null;
            var s = sa[t];
            sa[t++] = null;
            var r = sa[t];
            sa[t++] = null;
            var u = sa[t];
            if (sa[t++] = null,
            s !== null && r !== null) {
                var v = s.pending;
                v === null ? r.next = r : (r.next = v.next,
                v.next = r),
                s.pending = r
            }
            u !== 0 && wd(a, r, u)
        }
    }
    function Hs(e, t, a, s) {
        sa[xl++] = e,
        sa[xl++] = t,
        sa[xl++] = a,
        sa[xl++] = s,
        Dr |= s,
        e.lanes |= s,
        e = e.alternate,
        e !== null && (e.lanes |= s)
    }
    function _r(e, t, a, s) {
        return Hs(e, t, a, s),
        Ps(e)
    }
    function bl(e, t) {
        return Hs(e, null, null, t),
        Ps(e)
    }
    function wd(e, t, a) {
        e.lanes |= a;
        var s = e.alternate;
        s !== null && (s.lanes |= a);
        for (var r = !1, u = e.return; u !== null; )
            u.childLanes |= a,
            s = u.alternate,
            s !== null && (s.childLanes |= a),
            u.tag === 22 && (e = u.stateNode,
            e === null || e._visibility & 1 || (r = !0)),
            e = u,
            u = u.return;
        return e.tag === 3 ? (u = e.stateNode,
        r && t !== null && (r = 31 - rt(a),
        e = u.hiddenUpdates,
        s = e[r],
        s === null ? e[r] = [t] : s.push(t),
        t.lane = a | 536870912),
        u) : null
    }
    function Ps(e) {
        if (50 < Hi)
            throw Hi = 0,
            Uu = null,
            Error(o(185));
        for (var t = e.return; t !== null; )
            e = t,
            t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var Sl = {};
    function qv(e, t, a, s) {
        this.tag = e,
        this.key = a,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = s,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function Ft(e, t, a, s) {
        return new qv(e,t,a,s)
    }
    function Mr(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function Xa(e, t) {
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
    function Ad(e, t) {
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
    function qs(e, t, a, s, r, u) {
        var v = 0;
        if (s = e,
        typeof e == "function")
            Mr(e) && (v = 1);
        else if (typeof e == "string")
            v = Gx(e, a, le.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else
            e: switch (e) {
            case ie:
                return e = Ft(31, a, t, r),
                e.elementType = ie,
                e.lanes = u,
                e;
            case N:
                return Pn(a.children, r, u, t);
            case D:
                v = 8,
                r |= 24;
                break;
            case _:
                return e = Ft(12, a, t, r | 2),
                e.elementType = _,
                e.lanes = u,
                e;
            case R:
                return e = Ft(13, a, t, r),
                e.elementType = R,
                e.lanes = u,
                e;
            case Z:
                return e = Ft(19, a, t, r),
                e.elementType = Z,
                e.lanes = u,
                e;
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case V:
                    case B:
                        v = 10;
                        break e;
                    case k:
                        v = 9;
                        break e;
                    case K:
                        v = 11;
                        break e;
                    case I:
                        v = 14;
                        break e;
                    case Q:
                        v = 16,
                        s = null;
                        break e
                    }
                v = 29,
                a = Error(o(130, e === null ? "null" : typeof e, "")),
                s = null
            }
        return t = Ft(v, a, t, r),
        t.elementType = e,
        t.type = s,
        t.lanes = u,
        t
    }
    function Pn(e, t, a, s) {
        return e = Ft(7, e, s, t),
        e.lanes = a,
        e
    }
    function Or(e, t, a) {
        return e = Ft(6, e, null, t),
        e.lanes = a,
        e
    }
    function Rr(e, t, a) {
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
      , jl = 0
      , Ys = null
      , Gs = 0
      , oa = []
      , ra = 0
      , qn = null
      , Ka = 1
      , Za = "";
    function Yn(e, t) {
        Tl[jl++] = Gs,
        Tl[jl++] = Ys,
        Ys = e,
        Gs = t
    }
    function Nd(e, t, a) {
        oa[ra++] = Ka,
        oa[ra++] = Za,
        oa[ra++] = qn,
        qn = e;
        var s = Ka;
        e = Za;
        var r = 32 - rt(s) - 1;
        s &= ~(1 << r),
        a += 1;
        var u = 32 - rt(t) + r;
        if (30 < u) {
            var v = r - r % 5;
            u = (s & (1 << v) - 1).toString(32),
            s >>= v,
            r -= v,
            Ka = 1 << 32 - rt(t) + r | a << r | s,
            Za = u + e
        } else
            Ka = 1 << u | a << r | s,
            Za = e
    }
    function Vr(e) {
        e.return !== null && (Yn(e, 1),
        Nd(e, 1, 0))
    }
    function zr(e) {
        for (; e === Ys; )
            Ys = Tl[--jl],
            Tl[jl] = null,
            Gs = Tl[--jl],
            Tl[jl] = null;
        for (; e === qn; )
            qn = oa[--ra],
            oa[ra] = null,
            Za = oa[--ra],
            oa[ra] = null,
            Ka = oa[--ra],
            oa[ra] = null
    }
    var Bt = null
      , nt = null
      , He = !1
      , Gn = null
      , Ea = !1
      , Ur = Error(o(519));
    function Xn(e) {
        var t = Error(o(418, ""));
        throw vi(ia(t, e)),
        Ur
    }
    function Ed(e) {
        var t = e.stateNode
          , a = e.type
          , s = e.memoizedProps;
        switch (t[bt] = e,
        t[Ct] = s,
        a) {
        case "dialog":
            Oe("cancel", t),
            Oe("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            Oe("load", t);
            break;
        case "video":
        case "audio":
            for (a = 0; a < qi.length; a++)
                Oe(qi[a], t);
            break;
        case "source":
            Oe("error", t);
            break;
        case "img":
        case "image":
        case "link":
            Oe("error", t),
            Oe("load", t);
            break;
        case "details":
            Oe("toggle", t);
            break;
        case "input":
            Oe("invalid", t),
            qf(t, s.value, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name, !0),
            _s(t);
            break;
        case "select":
            Oe("invalid", t);
            break;
        case "textarea":
            Oe("invalid", t),
            Gf(t, s.value, s.defaultValue, s.children),
            _s(t)
        }
        a = s.children,
        typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || s.suppressHydrationWarning === !0 || Gm(t.textContent, a) ? (s.popover != null && (Oe("beforetoggle", t),
        Oe("toggle", t)),
        s.onScroll != null && Oe("scroll", t),
        s.onScrollEnd != null && Oe("scrollend", t),
        s.onClick != null && (t.onclick = Ao),
        t = !0) : t = !1,
        t || Xn(e)
    }
    function Cd(e) {
        for (Bt = e.return; Bt; )
            switch (Bt.tag) {
            case 5:
            case 13:
                Ea = !1;
                return;
            case 27:
            case 3:
                Ea = !0;
                return;
            default:
                Bt = Bt.return
            }
    }
    function gi(e) {
        if (e !== Bt)
            return !1;
        if (!He)
            return Cd(e),
            He = !0,
            !1;
        var t = e.tag, a;
        if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type,
        a = !(a !== "form" && a !== "button") || $u(e.type, e.memoizedProps)),
        a = !a),
        a && nt && Xn(e),
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
                                nt = Ta(e.nextSibling);
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
            Nn(e.type) ? (e = ac,
            ac = null,
            nt = e) : nt = t) : nt = Bt ? Ta(e.stateNode.nextSibling) : null;
        return !0
    }
    function yi() {
        nt = Bt = null,
        He = !1
    }
    function Dd() {
        var e = Gn;
        return e !== null && (Yt === null ? Yt = e : Yt.push.apply(Yt, e),
        Gn = null),
        e
    }
    function vi(e) {
        Gn === null ? Gn = [e] : Gn.push(e)
    }
    var Br = L(null)
      , Kn = null
      , Qa = null;
    function fn(e, t, a) {
        te(Br, t._currentValue),
        t._currentValue = a
    }
    function Fa(e) {
        e._currentValue = Br.current,
        W(Br)
    }
    function Lr(e, t, a) {
        for (; e !== null; ) {
            var s = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t),
            e === a)
                break;
            e = e.return
        }
    }
    function kr(e, t, a, s) {
        var r = e.child;
        for (r !== null && (r.return = e); r !== null; ) {
            var u = r.dependencies;
            if (u !== null) {
                var v = r.child;
                u = u.firstContext;
                e: for (; u !== null; ) {
                    var b = u;
                    u = r;
                    for (var A = 0; A < t.length; A++)
                        if (b.context === t[A]) {
                            u.lanes |= a,
                            b = u.alternate,
                            b !== null && (b.lanes |= a),
                            Lr(u.return, a, e),
                            s || (v = null);
                            break e
                        }
                    u = b.next
                }
            } else if (r.tag === 18) {
                if (v = r.return,
                v === null)
                    throw Error(o(341));
                v.lanes |= a,
                u = v.alternate,
                u !== null && (u.lanes |= a),
                Lr(v, a, e),
                v = null
            } else
                v = r.child;
            if (v !== null)
                v.return = r;
            else
                for (v = r; v !== null; ) {
                    if (v === e) {
                        v = null;
                        break
                    }
                    if (r = v.sibling,
                    r !== null) {
                        r.return = v.return,
                        v = r;
                        break
                    }
                    v = v.return
                }
            r = v
        }
    }
    function xi(e, t, a, s) {
        e = null;
        for (var r = t, u = !1; r !== null; ) {
            if (!u) {
                if ((r.flags & 524288) !== 0)
                    u = !0;
                else if ((r.flags & 262144) !== 0)
                    break
            }
            if (r.tag === 10) {
                var v = r.alternate;
                if (v === null)
                    throw Error(o(387));
                if (v = v.memoizedProps,
                v !== null) {
                    var b = r.type;
                    Qt(r.pendingProps.value, v.value) || (e !== null ? e.push(b) : e = [b])
                }
            } else if (r === Se.current) {
                if (v = r.alternate,
                v === null)
                    throw Error(o(387));
                v.memoizedState.memoizedState !== r.memoizedState.memoizedState && (e !== null ? e.push(Qi) : e = [Qi])
            }
            r = r.return
        }
        e !== null && kr(t, e, a, s),
        t.flags |= 262144
    }
    function Xs(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!Qt(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next
        }
        return !1
    }
    function Zn(e) {
        Kn = e,
        Qa = null,
        e = e.dependencies,
        e !== null && (e.firstContext = null)
    }
    function Vt(e) {
        return _d(Kn, e)
    }
    function Ks(e, t) {
        return Kn === null && Zn(e),
        _d(e, t)
    }
    function _d(e, t) {
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
    var Yv = typeof AbortController < "u" ? AbortController : function() {
        var e = []
          , t = this.signal = {
            aborted: !1,
            addEventListener: function(a, s) {
                e.push(s)
            }
        };
        this.abort = function() {
            t.aborted = !0,
            e.forEach(function(a) {
                return a()
            })
        }
    }
      , Gv = n.unstable_scheduleCallback
      , Xv = n.unstable_NormalPriority
      , St = {
        $$typeof: B,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function Hr() {
        return {
            controller: new Yv,
            data: new Map,
            refCount: 0
        }
    }
    function bi(e) {
        e.refCount--,
        e.refCount === 0 && Gv(Xv, function() {
            e.controller.abort()
        })
    }
    var Si = null
      , Pr = 0
      , wl = 0
      , Al = null;
    function Kv(e, t) {
        if (Si === null) {
            var a = Si = [];
            Pr = 0,
            wl = Yu(),
            Al = {
                status: "pending",
                value: void 0,
                then: function(s) {
                    a.push(s)
                }
            }
        }
        return Pr++,
        t.then(Md, Md),
        t
    }
    function Md() {
        if (--Pr === 0 && Si !== null) {
            Al !== null && (Al.status = "fulfilled");
            var e = Si;
            Si = null,
            wl = 0,
            Al = null;
            for (var t = 0; t < e.length; t++)
                (0,
                e[t])()
        }
    }
    function Zv(e, t) {
        var a = []
          , s = {
            status: "pending",
            value: null,
            reason: null,
            then: function(r) {
                a.push(r)
            }
        };
        return e.then(function() {
            s.status = "fulfilled",
            s.value = t;
            for (var r = 0; r < a.length; r++)
                (0,
                a[r])(t)
        }, function(r) {
            for (s.status = "rejected",
            s.reason = r,
            r = 0; r < a.length; r++)
                (0,
                a[r])(void 0)
        }),
        s
    }
    var Od = E.S;
    E.S = function(e, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && Kv(e, t),
        Od !== null && Od(e, t)
    }
    ;
    var Qn = L(null);
    function qr() {
        var e = Qn.current;
        return e !== null ? e : Fe.pooledCache
    }
    function Zs(e, t) {
        t === null ? te(Qn, Qn.current) : te(Qn, t.pool)
    }
    function Rd() {
        var e = qr();
        return e === null ? null : {
            parent: St._currentValue,
            pool: e
        }
    }
    var Ti = Error(o(460))
      , Vd = Error(o(474))
      , Qs = Error(o(542))
      , Yr = {
        then: function() {}
    };
    function zd(e) {
        return e = e.status,
        e === "fulfilled" || e === "rejected"
    }
    function Fs() {}
    function Ud(e, t, a) {
        switch (a = e[a],
        a === void 0 ? e.push(t) : a !== t && (t.then(Fs, Fs),
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
                t.then(Fs, Fs);
            else {
                if (e = Fe,
                e !== null && 100 < e.shellSuspendCounter)
                    throw Error(o(482));
                e = t,
                e.status = "pending",
                e.then(function(s) {
                    if (t.status === "pending") {
                        var r = t;
                        r.status = "fulfilled",
                        r.value = s
                    }
                }, function(s) {
                    if (t.status === "pending") {
                        var r = t;
                        r.status = "rejected",
                        r.reason = s
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
            throw ji = t,
            Ti
        }
    }
    var ji = null;
    function Bd() {
        if (ji === null)
            throw Error(o(459));
        var e = ji;
        return ji = null,
        e
    }
    function Ld(e) {
        if (e === Ti || e === Qs)
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
        var s = e.updateQueue;
        if (s === null)
            return null;
        if (s = s.shared,
        (Ye & 2) !== 0) {
            var r = s.pending;
            return r === null ? t.next = t : (t.next = r.next,
            r.next = t),
            s.pending = t,
            t = Ps(e),
            wd(e, null, a),
            t
        }
        return Hs(e, s, t, a),
        Ps(e)
    }
    function wi(e, t, a) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (a & 4194048) !== 0)) {
            var s = t.lanes;
            s &= e.pendingLanes,
            a |= s,
            t.lanes = a,
            ni(e, a)
        }
    }
    function Kr(e, t) {
        var a = e.updateQueue
          , s = e.alternate;
        if (s !== null && (s = s.updateQueue,
        a === s)) {
            var r = null
              , u = null;
            if (a = a.firstBaseUpdate,
            a !== null) {
                do {
                    var v = {
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: null,
                        next: null
                    };
                    u === null ? r = u = v : u = u.next = v,
                    a = a.next
                } while (a !== null);
                u === null ? r = u = t : u = u.next = t
            } else
                r = u = t;
            a = {
                baseState: s.baseState,
                firstBaseUpdate: r,
                lastBaseUpdate: u,
                shared: s.shared,
                callbacks: s.callbacks
            },
            e.updateQueue = a;
            return
        }
        e = a.lastBaseUpdate,
        e === null ? a.firstBaseUpdate = t : e.next = t,
        a.lastBaseUpdate = t
    }
    var Zr = !1;
    function Ai() {
        if (Zr) {
            var e = Al;
            if (e !== null)
                throw e
        }
    }
    function Ni(e, t, a, s) {
        Zr = !1;
        var r = e.updateQueue;
        dn = !1;
        var u = r.firstBaseUpdate
          , v = r.lastBaseUpdate
          , b = r.shared.pending;
        if (b !== null) {
            r.shared.pending = null;
            var A = b
              , U = A.next;
            A.next = null,
            v === null ? u = U : v.next = U,
            v = A;
            var X = e.alternate;
            X !== null && (X = X.updateQueue,
            b = X.lastBaseUpdate,
            b !== v && (b === null ? X.firstBaseUpdate = U : b.next = U,
            X.lastBaseUpdate = A))
        }
        if (u !== null) {
            var $ = r.baseState;
            v = 0,
            X = U = A = null,
            b = u;
            do {
                var H = b.lane & -536870913
                  , Y = H !== b.lane;
                if (Y ? (ze & H) === H : (s & H) === H) {
                    H !== 0 && H === wl && (Zr = !0),
                    X !== null && (X = X.next = {
                        lane: 0,
                        tag: b.tag,
                        payload: b.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var ye = e
                          , pe = b;
                        H = t;
                        var Ze = a;
                        switch (pe.tag) {
                        case 1:
                            if (ye = pe.payload,
                            typeof ye == "function") {
                                $ = ye.call(Ze, $, H);
                                break e
                            }
                            $ = ye;
                            break e;
                        case 3:
                            ye.flags = ye.flags & -65537 | 128;
                        case 0:
                            if (ye = pe.payload,
                            H = typeof ye == "function" ? ye.call(Ze, $, H) : ye,
                            H == null)
                                break e;
                            $ = y({}, $, H);
                            break e;
                        case 2:
                            dn = !0
                        }
                    }
                    H = b.callback,
                    H !== null && (e.flags |= 64,
                    Y && (e.flags |= 8192),
                    Y = r.callbacks,
                    Y === null ? r.callbacks = [H] : Y.push(H))
                } else
                    Y = {
                        lane: H,
                        tag: b.tag,
                        payload: b.payload,
                        callback: b.callback,
                        next: null
                    },
                    X === null ? (U = X = Y,
                    A = $) : X = X.next = Y,
                    v |= H;
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
            X === null && (A = $),
            r.baseState = A,
            r.firstBaseUpdate = U,
            r.lastBaseUpdate = X,
            u === null && (r.shared.lanes = 0),
            Tn |= v,
            e.lanes = v,
            e.memoizedState = $
        }
    }
    function kd(e, t) {
        if (typeof e != "function")
            throw Error(o(191, e));
        e.call(t)
    }
    function Hd(e, t) {
        var a = e.callbacks;
        if (a !== null)
            for (e.callbacks = null,
            e = 0; e < a.length; e++)
                kd(a[e], t)
    }
    var Nl = L(null)
      , Js = L(0);
    function Pd(e, t) {
        e = an,
        te(Js, e),
        te(Nl, t),
        an = e | t.baseLanes
    }
    function Qr() {
        te(Js, an),
        te(Nl, Nl.current)
    }
    function Fr() {
        an = Js.current,
        W(Nl),
        W(Js)
    }
    var pn = 0
      , De = null
      , Xe = null
      , pt = null
      , Is = !1
      , El = !1
      , Fn = !1
      , $s = 0
      , Ei = 0
      , Cl = null
      , Qv = 0;
    function ft() {
        throw Error(o(321))
    }
    function Jr(e, t) {
        if (t === null)
            return !1;
        for (var a = 0; a < t.length && a < e.length; a++)
            if (!Qt(e[a], t[a]))
                return !1;
        return !0
    }
    function Ir(e, t, a, s, r, u) {
        return pn = u,
        De = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        E.H = e === null || e.memoizedState === null ? wh : Ah,
        Fn = !1,
        u = a(s, r),
        Fn = !1,
        El && (u = Yd(t, a, s, r)),
        qd(e),
        u
    }
    function qd(e) {
        E.H = lo;
        var t = Xe !== null && Xe.next !== null;
        if (pn = 0,
        pt = Xe = De = null,
        Is = !1,
        Ei = 0,
        Cl = null,
        t)
            throw Error(o(300));
        e === null || At || (e = e.dependencies,
        e !== null && Xs(e) && (At = !0))
    }
    function Yd(e, t, a, s) {
        De = e;
        var r = 0;
        do {
            if (El && (Cl = null),
            Ei = 0,
            El = !1,
            25 <= r)
                throw Error(o(301));
            if (r += 1,
            pt = Xe = null,
            e.updateQueue != null) {
                var u = e.updateQueue;
                u.lastEffect = null,
                u.events = null,
                u.stores = null,
                u.memoCache != null && (u.memoCache.index = 0)
            }
            E.H = tx,
            u = t(a, s)
        } while (El);
        return u
    }
    function Fv() {
        var e = E.H
          , t = e.useState()[0];
        return t = typeof t.then == "function" ? Ci(t) : t,
        e = e.useState()[0],
        (Xe !== null ? Xe.memoizedState : null) !== e && (De.flags |= 1024),
        t
    }
    function $r() {
        var e = $s !== 0;
        return $s = 0,
        e
    }
    function Wr(e, t, a) {
        t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~a
    }
    function eu(e) {
        if (Is) {
            for (e = e.memoizedState; e !== null; ) {
                var t = e.queue;
                t !== null && (t.pending = null),
                e = e.next
            }
            Is = !1
        }
        pn = 0,
        pt = Xe = De = null,
        El = !1,
        Ei = $s = 0,
        Cl = null
    }
    function Pt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return pt === null ? De.memoizedState = pt = e : pt = pt.next = e,
        pt
    }
    function gt() {
        if (Xe === null) {
            var e = De.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = Xe.next;
        var t = pt === null ? De.memoizedState : pt.next;
        if (t !== null)
            pt = t,
            Xe = e;
        else {
            if (e === null)
                throw De.alternate === null ? Error(o(467)) : Error(o(310));
            Xe = e,
            e = {
                memoizedState: Xe.memoizedState,
                baseState: Xe.baseState,
                baseQueue: Xe.baseQueue,
                queue: Xe.queue,
                next: null
            },
            pt === null ? De.memoizedState = pt = e : pt = pt.next = e
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
    function Ci(e) {
        var t = Ei;
        return Ei += 1,
        Cl === null && (Cl = []),
        e = Ud(Cl, e, t),
        t = De,
        (pt === null ? t.memoizedState : pt.next) === null && (t = t.alternate,
        E.H = t === null || t.memoizedState === null ? wh : Ah),
        e
    }
    function Ws(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
                return Ci(e);
            if (e.$$typeof === B)
                return Vt(e)
        }
        throw Error(o(438, String(e)))
    }
    function au(e) {
        var t = null
          , a = De.updateQueue;
        if (a !== null && (t = a.memoCache),
        t == null) {
            var s = De.alternate;
            s !== null && (s = s.updateQueue,
            s !== null && (s = s.memoCache,
            s != null && (t = {
                data: s.data.map(function(r) {
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
        De.updateQueue = a),
        a.memoCache = t,
        a = t.data[t.index],
        a === void 0)
            for (a = t.data[t.index] = Array(e),
            s = 0; s < e; s++)
                a[s] = fe;
        return t.index++,
        a
    }
    function Ja(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function eo(e) {
        var t = gt();
        return nu(t, Xe, e)
    }
    function nu(e, t, a) {
        var s = e.queue;
        if (s === null)
            throw Error(o(311));
        s.lastRenderedReducer = a;
        var r = e.baseQueue
          , u = s.pending;
        if (u !== null) {
            if (r !== null) {
                var v = r.next;
                r.next = u.next,
                u.next = v
            }
            t.baseQueue = r = u,
            s.pending = null
        }
        if (u = e.baseState,
        r === null)
            e.memoizedState = u;
        else {
            t = r.next;
            var b = v = null
              , A = null
              , U = t
              , X = !1;
            do {
                var $ = U.lane & -536870913;
                if ($ !== U.lane ? (ze & $) === $ : (pn & $) === $) {
                    var H = U.revertLane;
                    if (H === 0)
                        A !== null && (A = A.next = {
                            lane: 0,
                            revertLane: 0,
                            action: U.action,
                            hasEagerState: U.hasEagerState,
                            eagerState: U.eagerState,
                            next: null
                        }),
                        $ === wl && (X = !0);
                    else if ((pn & H) === H) {
                        U = U.next,
                        H === wl && (X = !0);
                        continue
                    } else
                        $ = {
                            lane: 0,
                            revertLane: U.revertLane,
                            action: U.action,
                            hasEagerState: U.hasEagerState,
                            eagerState: U.eagerState,
                            next: null
                        },
                        A === null ? (b = A = $,
                        v = u) : A = A.next = $,
                        De.lanes |= H,
                        Tn |= H;
                    $ = U.action,
                    Fn && a(u, $),
                    u = U.hasEagerState ? U.eagerState : a(u, $)
                } else
                    H = {
                        lane: $,
                        revertLane: U.revertLane,
                        action: U.action,
                        hasEagerState: U.hasEagerState,
                        eagerState: U.eagerState,
                        next: null
                    },
                    A === null ? (b = A = H,
                    v = u) : A = A.next = H,
                    De.lanes |= $,
                    Tn |= $;
                U = U.next
            } while (U !== null && U !== t);
            if (A === null ? v = u : A.next = b,
            !Qt(u, e.memoizedState) && (At = !0,
            X && (a = Al,
            a !== null)))
                throw a;
            e.memoizedState = u,
            e.baseState = v,
            e.baseQueue = A,
            s.lastRenderedState = u
        }
        return r === null && (s.lanes = 0),
        [e.memoizedState, s.dispatch]
    }
    function lu(e) {
        var t = gt()
          , a = t.queue;
        if (a === null)
            throw Error(o(311));
        a.lastRenderedReducer = e;
        var s = a.dispatch
          , r = a.pending
          , u = t.memoizedState;
        if (r !== null) {
            a.pending = null;
            var v = r = r.next;
            do
                u = e(u, v.action),
                v = v.next;
            while (v !== r);
            Qt(u, t.memoizedState) || (At = !0),
            t.memoizedState = u,
            t.baseQueue === null && (t.baseState = u),
            a.lastRenderedState = u
        }
        return [u, s]
    }
    function Gd(e, t, a) {
        var s = De
          , r = gt()
          , u = He;
        if (u) {
            if (a === void 0)
                throw Error(o(407));
            a = a()
        } else
            a = t();
        var v = !Qt((Xe || r).memoizedState, a);
        v && (r.memoizedState = a,
        At = !0),
        r = r.queue;
        var b = Zd.bind(null, s, r, e);
        if (Di(2048, 8, b, [e]),
        r.getSnapshot !== t || v || pt !== null && pt.memoizedState.tag & 1) {
            if (s.flags |= 2048,
            Dl(9, to(), Kd.bind(null, s, r, a, t), null),
            Fe === null)
                throw Error(o(349));
            u || (pn & 124) !== 0 || Xd(s, t, a)
        }
        return a
    }
    function Xd(e, t, a) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: a
        },
        t = De.updateQueue,
        t === null ? (t = tu(),
        De.updateQueue = t,
        t.stores = [e]) : (a = t.stores,
        a === null ? t.stores = [e] : a.push(e))
    }
    function Kd(e, t, a, s) {
        t.value = a,
        t.getSnapshot = s,
        Qd(t) && Fd(e)
    }
    function Zd(e, t, a) {
        return a(function() {
            Qd(t) && Fd(e)
        })
    }
    function Qd(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var a = t();
            return !Qt(e, a)
        } catch {
            return !0
        }
    }
    function Fd(e) {
        var t = bl(e, 2);
        t !== null && ea(t, e, 2)
    }
    function iu(e) {
        var t = Pt();
        if (typeof e == "function") {
            var a = e;
            if (e = a(),
            Fn) {
                wt(!0);
                try {
                    a()
                } finally {
                    wt(!1)
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
    function Jd(e, t, a, s) {
        return e.baseState = a,
        nu(e, Xe, typeof s == "function" ? s : Ja)
    }
    function Jv(e, t, a, s, r) {
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
                then: function(v) {
                    u.listeners.push(v)
                }
            };
            E.T !== null ? a(!0) : u.isTransition = !1,
            s(u),
            a = t.pending,
            a === null ? (u.next = t.pending = u,
            Id(t, u)) : (u.next = a.next,
            t.pending = a.next = u)
        }
    }
    function Id(e, t) {
        var a = t.action
          , s = t.payload
          , r = e.state;
        if (t.isTransition) {
            var u = E.T
              , v = {};
            E.T = v;
            try {
                var b = a(r, s)
                  , A = E.S;
                A !== null && A(v, b),
                $d(e, t, b)
            } catch (U) {
                su(e, t, U)
            } finally {
                E.T = u
            }
        } else
            try {
                u = a(r, s),
                $d(e, t, u)
            } catch (U) {
                su(e, t, U)
            }
    }
    function $d(e, t, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(s) {
            Wd(e, t, s)
        }, function(s) {
            return su(e, t, s)
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
        Id(e, a)))
    }
    function su(e, t, a) {
        var s = e.pending;
        if (e.pending = null,
        s !== null) {
            s = s.next;
            do
                t.status = "rejected",
                t.reason = a,
                eh(t),
                t = t.next;
            while (t !== s)
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
        if (He) {
            var a = Fe.formState;
            if (a !== null) {
                e: {
                    var s = De;
                    if (He) {
                        if (nt) {
                            t: {
                                for (var r = nt, u = Ea; r.nodeType !== 8; ) {
                                    if (!u) {
                                        r = null;
                                        break t
                                    }
                                    if (r = Ta(r.nextSibling),
                                    r === null) {
                                        r = null;
                                        break t
                                    }
                                }
                                u = r.data,
                                r = u === "F!" || u === "F" ? r : null
                            }
                            if (r) {
                                nt = Ta(r.nextSibling),
                                s = r.data === "F!";
                                break e
                            }
                        }
                        Xn(s)
                    }
                    s = !1
                }
                s && (t = a[0])
            }
        }
        return a = Pt(),
        a.memoizedState = a.baseState = t,
        s = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: th,
            lastRenderedState: t
        },
        a.queue = s,
        a = Sh.bind(null, De, s),
        s.dispatch = a,
        s = iu(!1),
        u = fu.bind(null, De, !1, s.queue),
        s = Pt(),
        r = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        },
        s.queue = r,
        a = Jv.bind(null, De, r, u, a),
        r.dispatch = a,
        s.memoizedState = e,
        [t, a, !1]
    }
    function nh(e) {
        var t = gt();
        return lh(t, Xe, e)
    }
    function lh(e, t, a) {
        if (t = nu(e, t, th)[0],
        e = eo(Ja)[0],
        typeof t == "object" && t !== null && typeof t.then == "function")
            try {
                var s = Ci(t)
            } catch (v) {
                throw v === Ti ? Qs : v
            }
        else
            s = t;
        t = gt();
        var r = t.queue
          , u = r.dispatch;
        return a !== t.memoizedState && (De.flags |= 2048,
        Dl(9, to(), Iv.bind(null, r, a), null)),
        [s, u, e]
    }
    function Iv(e, t) {
        e.action = t
    }
    function ih(e) {
        var t = gt()
          , a = Xe;
        if (a !== null)
            return lh(t, a, e);
        gt(),
        t = t.memoizedState,
        a = gt();
        var s = a.queue.dispatch;
        return a.memoizedState = e,
        [t, s, !1]
    }
    function Dl(e, t, a, s) {
        return e = {
            tag: e,
            create: a,
            deps: s,
            inst: t,
            next: null
        },
        t = De.updateQueue,
        t === null && (t = tu(),
        De.updateQueue = t),
        a = t.lastEffect,
        a === null ? t.lastEffect = e.next = e : (s = a.next,
        a.next = e,
        e.next = s,
        t.lastEffect = e),
        e
    }
    function to() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }
    function sh() {
        return gt().memoizedState
    }
    function ao(e, t, a, s) {
        var r = Pt();
        s = s === void 0 ? null : s,
        De.flags |= e,
        r.memoizedState = Dl(1 | t, to(), a, s)
    }
    function Di(e, t, a, s) {
        var r = gt();
        s = s === void 0 ? null : s;
        var u = r.memoizedState.inst;
        Xe !== null && s !== null && Jr(s, Xe.memoizedState.deps) ? r.memoizedState = Dl(t, u, a, s) : (De.flags |= e,
        r.memoizedState = Dl(1 | t, u, a, s))
    }
    function oh(e, t) {
        ao(8390656, 8, e, t)
    }
    function rh(e, t) {
        Di(2048, 8, e, t)
    }
    function uh(e, t) {
        return Di(4, 2, e, t)
    }
    function ch(e, t) {
        return Di(4, 4, e, t)
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
        Di(4, 4, fh.bind(null, t, e), a)
    }
    function ou() {}
    function hh(e, t) {
        var a = gt();
        t = t === void 0 ? null : t;
        var s = a.memoizedState;
        return t !== null && Jr(t, s[1]) ? s[0] : (a.memoizedState = [e, t],
        e)
    }
    function mh(e, t) {
        var a = gt();
        t = t === void 0 ? null : t;
        var s = a.memoizedState;
        if (t !== null && Jr(t, s[1]))
            return s[0];
        if (s = e(),
        Fn) {
            wt(!0);
            try {
                e()
            } finally {
                wt(!1)
            }
        }
        return a.memoizedState = [s, t],
        s
    }
    function ru(e, t, a) {
        return a === void 0 || (pn & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a,
        e = ym(),
        De.lanes |= e,
        Tn |= e,
        a)
    }
    function ph(e, t, a, s) {
        return Qt(a, t) ? a : Nl.current !== null ? (e = ru(e, a, s),
        Qt(e, t) || (At = !0),
        e) : (pn & 42) === 0 ? (At = !0,
        e.memoizedState = a) : (e = ym(),
        De.lanes |= e,
        Tn |= e,
        t)
    }
    function gh(e, t, a, s, r) {
        var u = O.p;
        O.p = u !== 0 && 8 > u ? u : 8;
        var v = E.T
          , b = {};
        E.T = b,
        fu(e, !1, t, a);
        try {
            var A = r()
              , U = E.S;
            if (U !== null && U(b, A),
            A !== null && typeof A == "object" && typeof A.then == "function") {
                var X = Zv(A, s);
                _i(e, t, X, Wt(e))
            } else
                _i(e, t, s, Wt(e))
        } catch ($) {
            _i(e, t, {
                then: function() {},
                status: "rejected",
                reason: $
            }, Wt())
        } finally {
            O.p = u,
            E.T = v
        }
    }
    function $v() {}
    function uu(e, t, a, s) {
        if (e.tag !== 5)
            throw Error(o(476));
        var r = yh(e).queue;
        gh(e, r, t, q, a === null ? $v : function() {
            return vh(e),
            a(s)
        }
        )
    }
    function yh(e) {
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
    function vh(e) {
        var t = yh(e).next.queue;
        _i(e, t, {}, Wt())
    }
    function cu() {
        return Vt(Qi)
    }
    function xh() {
        return gt().memoizedState
    }
    function bh() {
        return gt().memoizedState
    }
    function Wv(e) {
        for (var t = e.return; t !== null; ) {
            switch (t.tag) {
            case 24:
            case 3:
                var a = Wt();
                e = hn(a);
                var s = mn(t, e, a);
                s !== null && (ea(s, t, a),
                wi(s, t, a)),
                t = {
                    cache: Hr()
                },
                e.payload = t;
                return
            }
            t = t.return
        }
    }
    function ex(e, t, a) {
        var s = Wt();
        a = {
            lane: s,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        no(e) ? Th(t, a) : (a = _r(e, t, a, s),
        a !== null && (ea(a, e, s),
        jh(a, t, s)))
    }
    function Sh(e, t, a) {
        var s = Wt();
        _i(e, t, a, s)
    }
    function _i(e, t, a, s) {
        var r = {
            lane: s,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (no(e))
            Th(t, r);
        else {
            var u = e.alternate;
            if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer,
            u !== null))
                try {
                    var v = t.lastRenderedState
                      , b = u(v, a);
                    if (r.hasEagerState = !0,
                    r.eagerState = b,
                    Qt(b, v))
                        return Hs(e, t, r, 0),
                        Fe === null && ks(),
                        !1
                } catch {} finally {}
            if (a = _r(e, t, r, s),
            a !== null)
                return ea(a, e, s),
                jh(a, t, s),
                !0
        }
        return !1
    }
    function fu(e, t, a, s) {
        if (s = {
            lane: 2,
            revertLane: Yu(),
            action: s,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        no(e)) {
            if (t)
                throw Error(o(479))
        } else
            t = _r(e, a, s, 2),
            t !== null && ea(t, e, 2)
    }
    function no(e) {
        var t = e.alternate;
        return e === De || t !== null && t === De
    }
    function Th(e, t) {
        El = Is = !0;
        var a = e.pending;
        a === null ? t.next = t : (t.next = a.next,
        a.next = t),
        e.pending = t
    }
    function jh(e, t, a) {
        if ((a & 4194048) !== 0) {
            var s = t.lanes;
            s &= e.pendingLanes,
            a |= s,
            t.lanes = a,
            ni(e, a)
        }
    }
    var lo = {
        readContext: Vt,
        use: Ws,
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
      , wh = {
        readContext: Vt,
        use: Ws,
        useCallback: function(e, t) {
            return Pt().memoizedState = [e, t === void 0 ? null : t],
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
            var a = Pt();
            t = t === void 0 ? null : t;
            var s = e();
            if (Fn) {
                wt(!0);
                try {
                    e()
                } finally {
                    wt(!1)
                }
            }
            return a.memoizedState = [s, t],
            s
        },
        useReducer: function(e, t, a) {
            var s = Pt();
            if (a !== void 0) {
                var r = a(t);
                if (Fn) {
                    wt(!0);
                    try {
                        a(t)
                    } finally {
                        wt(!1)
                    }
                }
            } else
                r = t;
            return s.memoizedState = s.baseState = r,
            e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: r
            },
            s.queue = e,
            e = e.dispatch = ex.bind(null, De, e),
            [s.memoizedState, e]
        },
        useRef: function(e) {
            var t = Pt();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: function(e) {
            e = iu(e);
            var t = e.queue
              , a = Sh.bind(null, De, t);
            return t.dispatch = a,
            [e.memoizedState, a]
        },
        useDebugValue: ou,
        useDeferredValue: function(e, t) {
            var a = Pt();
            return ru(a, e, t)
        },
        useTransition: function() {
            var e = iu(!1);
            return e = gh.bind(null, De, e.queue, !0, !1),
            Pt().memoizedState = e,
            [!1, e]
        },
        useSyncExternalStore: function(e, t, a) {
            var s = De
              , r = Pt();
            if (He) {
                if (a === void 0)
                    throw Error(o(407));
                a = a()
            } else {
                if (a = t(),
                Fe === null)
                    throw Error(o(349));
                (ze & 124) !== 0 || Xd(s, t, a)
            }
            r.memoizedState = a;
            var u = {
                value: a,
                getSnapshot: t
            };
            return r.queue = u,
            oh(Zd.bind(null, s, u, e), [e]),
            s.flags |= 2048,
            Dl(9, to(), Kd.bind(null, s, u, a, t), null),
            a
        },
        useId: function() {
            var e = Pt()
              , t = Fe.identifierPrefix;
            if (He) {
                var a = Za
                  , s = Ka;
                a = (s & ~(1 << 32 - rt(s) - 1)).toString(32) + a,
                t = "«" + t + "R" + a,
                a = $s++,
                0 < a && (t += "H" + a.toString(32)),
                t += "»"
            } else
                a = Qv++,
                t = "«" + t + "r" + a.toString(32) + "»";
            return e.memoizedState = t
        },
        useHostTransitionStatus: cu,
        useFormState: ah,
        useActionState: ah,
        useOptimistic: function(e) {
            var t = Pt();
            t.memoizedState = t.baseState = e;
            var a = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = a,
            t = fu.bind(null, De, !0, a),
            a.dispatch = t,
            [e, t]
        },
        useMemoCache: au,
        useCacheRefresh: function() {
            return Pt().memoizedState = Wv.bind(null, De)
        }
    }
      , Ah = {
        readContext: Vt,
        use: Ws,
        useCallback: hh,
        useContext: Vt,
        useEffect: rh,
        useImperativeHandle: dh,
        useInsertionEffect: uh,
        useLayoutEffect: ch,
        useMemo: mh,
        useReducer: eo,
        useRef: sh,
        useState: function() {
            return eo(Ja)
        },
        useDebugValue: ou,
        useDeferredValue: function(e, t) {
            var a = gt();
            return ph(a, Xe.memoizedState, e, t)
        },
        useTransition: function() {
            var e = eo(Ja)[0]
              , t = gt().memoizedState;
            return [typeof e == "boolean" ? e : Ci(e), t]
        },
        useSyncExternalStore: Gd,
        useId: xh,
        useHostTransitionStatus: cu,
        useFormState: nh,
        useActionState: nh,
        useOptimistic: function(e, t) {
            var a = gt();
            return Jd(a, Xe, e, t)
        },
        useMemoCache: au,
        useCacheRefresh: bh
    }
      , tx = {
        readContext: Vt,
        use: Ws,
        useCallback: hh,
        useContext: Vt,
        useEffect: rh,
        useImperativeHandle: dh,
        useInsertionEffect: uh,
        useLayoutEffect: ch,
        useMemo: mh,
        useReducer: lu,
        useRef: sh,
        useState: function() {
            return lu(Ja)
        },
        useDebugValue: ou,
        useDeferredValue: function(e, t) {
            var a = gt();
            return Xe === null ? ru(a, e, t) : ph(a, Xe.memoizedState, e, t)
        },
        useTransition: function() {
            var e = lu(Ja)[0]
              , t = gt().memoizedState;
            return [typeof e == "boolean" ? e : Ci(e), t]
        },
        useSyncExternalStore: Gd,
        useId: xh,
        useHostTransitionStatus: cu,
        useFormState: ih,
        useActionState: ih,
        useOptimistic: function(e, t) {
            var a = gt();
            return Xe !== null ? Jd(a, Xe, e, t) : (a.baseState = e,
            [e, a.queue.dispatch])
        },
        useMemoCache: au,
        useCacheRefresh: bh
    }
      , _l = null
      , Mi = 0;
    function io(e) {
        var t = Mi;
        return Mi += 1,
        _l === null && (_l = []),
        Ud(_l, e, t)
    }
    function Oi(e, t) {
        t = t.props.ref,
        e.ref = t !== void 0 ? t : null
    }
    function so(e, t) {
        throw t.$$typeof === x ? Error(o(525)) : (e = Object.prototype.toString.call(t),
        Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }
    function Nh(e) {
        var t = e._init;
        return t(e._payload)
    }
    function Eh(e) {
        function t(M, C) {
            if (e) {
                var z = M.deletions;
                z === null ? (M.deletions = [C],
                M.flags |= 16) : z.push(C)
            }
        }
        function a(M, C) {
            if (!e)
                return null;
            for (; C !== null; )
                t(M, C),
                C = C.sibling;
            return null
        }
        function s(M) {
            for (var C = new Map; M !== null; )
                M.key !== null ? C.set(M.key, M) : C.set(M.index, M),
                M = M.sibling;
            return C
        }
        function r(M, C) {
            return M = Xa(M, C),
            M.index = 0,
            M.sibling = null,
            M
        }
        function u(M, C, z) {
            return M.index = z,
            e ? (z = M.alternate,
            z !== null ? (z = z.index,
            z < C ? (M.flags |= 67108866,
            C) : z) : (M.flags |= 67108866,
            C)) : (M.flags |= 1048576,
            C)
        }
        function v(M) {
            return e && M.alternate === null && (M.flags |= 67108866),
            M
        }
        function b(M, C, z, J) {
            return C === null || C.tag !== 6 ? (C = Or(z, M.mode, J),
            C.return = M,
            C) : (C = r(C, z),
            C.return = M,
            C)
        }
        function A(M, C, z, J) {
            var ue = z.type;
            return ue === N ? X(M, C, z.props.children, J, z.key) : C !== null && (C.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === Q && Nh(ue) === C.type) ? (C = r(C, z.props),
            Oi(C, z),
            C.return = M,
            C) : (C = qs(z.type, z.key, z.props, null, M.mode, J),
            Oi(C, z),
            C.return = M,
            C)
        }
        function U(M, C, z, J) {
            return C === null || C.tag !== 4 || C.stateNode.containerInfo !== z.containerInfo || C.stateNode.implementation !== z.implementation ? (C = Rr(z, M.mode, J),
            C.return = M,
            C) : (C = r(C, z.children || []),
            C.return = M,
            C)
        }
        function X(M, C, z, J, ue) {
            return C === null || C.tag !== 7 ? (C = Pn(z, M.mode, J, ue),
            C.return = M,
            C) : (C = r(C, z),
            C.return = M,
            C)
        }
        function $(M, C, z) {
            if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
                return C = Or("" + C, M.mode, z),
                C.return = M,
                C;
            if (typeof C == "object" && C !== null) {
                switch (C.$$typeof) {
                case T:
                    return z = qs(C.type, C.key, C.props, null, M.mode, z),
                    Oi(z, C),
                    z.return = M,
                    z;
                case w:
                    return C = Rr(C, M.mode, z),
                    C.return = M,
                    C;
                case Q:
                    var J = C._init;
                    return C = J(C._payload),
                    $(M, C, z)
                }
                if (P(C) || ce(C))
                    return C = Pn(C, M.mode, z, null),
                    C.return = M,
                    C;
                if (typeof C.then == "function")
                    return $(M, io(C), z);
                if (C.$$typeof === B)
                    return $(M, Ks(M, C), z);
                so(M, C)
            }
            return null
        }
        function H(M, C, z, J) {
            var ue = C !== null ? C.key : null;
            if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
                return ue !== null ? null : b(M, C, "" + z, J);
            if (typeof z == "object" && z !== null) {
                switch (z.$$typeof) {
                case T:
                    return z.key === ue ? A(M, C, z, J) : null;
                case w:
                    return z.key === ue ? U(M, C, z, J) : null;
                case Q:
                    return ue = z._init,
                    z = ue(z._payload),
                    H(M, C, z, J)
                }
                if (P(z) || ce(z))
                    return ue !== null ? null : X(M, C, z, J, null);
                if (typeof z.then == "function")
                    return H(M, C, io(z), J);
                if (z.$$typeof === B)
                    return H(M, C, Ks(M, z), J);
                so(M, z)
            }
            return null
        }
        function Y(M, C, z, J, ue) {
            if (typeof J == "string" && J !== "" || typeof J == "number" || typeof J == "bigint")
                return M = M.get(z) || null,
                b(C, M, "" + J, ue);
            if (typeof J == "object" && J !== null) {
                switch (J.$$typeof) {
                case T:
                    return M = M.get(J.key === null ? z : J.key) || null,
                    A(C, M, J, ue);
                case w:
                    return M = M.get(J.key === null ? z : J.key) || null,
                    U(C, M, J, ue);
                case Q:
                    var _e = J._init;
                    return J = _e(J._payload),
                    Y(M, C, z, J, ue)
                }
                if (P(J) || ce(J))
                    return M = M.get(z) || null,
                    X(C, M, J, ue, null);
                if (typeof J.then == "function")
                    return Y(M, C, z, io(J), ue);
                if (J.$$typeof === B)
                    return Y(M, C, z, Ks(C, J), ue);
                so(C, J)
            }
            return null
        }
        function ye(M, C, z, J) {
            for (var ue = null, _e = null, he = C, ge = C = 0, Et = null; he !== null && ge < z.length; ge++) {
                he.index > ge ? (Et = he,
                he = null) : Et = he.sibling;
                var ke = H(M, he, z[ge], J);
                if (ke === null) {
                    he === null && (he = Et);
                    break
                }
                e && he && ke.alternate === null && t(M, he),
                C = u(ke, C, ge),
                _e === null ? ue = ke : _e.sibling = ke,
                _e = ke,
                he = Et
            }
            if (ge === z.length)
                return a(M, he),
                He && Yn(M, ge),
                ue;
            if (he === null) {
                for (; ge < z.length; ge++)
                    he = $(M, z[ge], J),
                    he !== null && (C = u(he, C, ge),
                    _e === null ? ue = he : _e.sibling = he,
                    _e = he);
                return He && Yn(M, ge),
                ue
            }
            for (he = s(he); ge < z.length; ge++)
                Et = Y(he, M, ge, z[ge], J),
                Et !== null && (e && Et.alternate !== null && he.delete(Et.key === null ? ge : Et.key),
                C = u(Et, C, ge),
                _e === null ? ue = Et : _e.sibling = Et,
                _e = Et);
            return e && he.forEach(function(Mn) {
                return t(M, Mn)
            }),
            He && Yn(M, ge),
            ue
        }
        function pe(M, C, z, J) {
            if (z == null)
                throw Error(o(151));
            for (var ue = null, _e = null, he = C, ge = C = 0, Et = null, ke = z.next(); he !== null && !ke.done; ge++,
            ke = z.next()) {
                he.index > ge ? (Et = he,
                he = null) : Et = he.sibling;
                var Mn = H(M, he, ke.value, J);
                if (Mn === null) {
                    he === null && (he = Et);
                    break
                }
                e && he && Mn.alternate === null && t(M, he),
                C = u(Mn, C, ge),
                _e === null ? ue = Mn : _e.sibling = Mn,
                _e = Mn,
                he = Et
            }
            if (ke.done)
                return a(M, he),
                He && Yn(M, ge),
                ue;
            if (he === null) {
                for (; !ke.done; ge++,
                ke = z.next())
                    ke = $(M, ke.value, J),
                    ke !== null && (C = u(ke, C, ge),
                    _e === null ? ue = ke : _e.sibling = ke,
                    _e = ke);
                return He && Yn(M, ge),
                ue
            }
            for (he = s(he); !ke.done; ge++,
            ke = z.next())
                ke = Y(he, M, ge, ke.value, J),
                ke !== null && (e && ke.alternate !== null && he.delete(ke.key === null ? ge : ke.key),
                C = u(ke, C, ge),
                _e === null ? ue = ke : _e.sibling = ke,
                _e = ke);
            return e && he.forEach(function(ab) {
                return t(M, ab)
            }),
            He && Yn(M, ge),
            ue
        }
        function Ze(M, C, z, J) {
            if (typeof z == "object" && z !== null && z.type === N && z.key === null && (z = z.props.children),
            typeof z == "object" && z !== null) {
                switch (z.$$typeof) {
                case T:
                    e: {
                        for (var ue = z.key; C !== null; ) {
                            if (C.key === ue) {
                                if (ue = z.type,
                                ue === N) {
                                    if (C.tag === 7) {
                                        a(M, C.sibling),
                                        J = r(C, z.props.children),
                                        J.return = M,
                                        M = J;
                                        break e
                                    }
                                } else if (C.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === Q && Nh(ue) === C.type) {
                                    a(M, C.sibling),
                                    J = r(C, z.props),
                                    Oi(J, z),
                                    J.return = M,
                                    M = J;
                                    break e
                                }
                                a(M, C);
                                break
                            } else
                                t(M, C);
                            C = C.sibling
                        }
                        z.type === N ? (J = Pn(z.props.children, M.mode, J, z.key),
                        J.return = M,
                        M = J) : (J = qs(z.type, z.key, z.props, null, M.mode, J),
                        Oi(J, z),
                        J.return = M,
                        M = J)
                    }
                    return v(M);
                case w:
                    e: {
                        for (ue = z.key; C !== null; ) {
                            if (C.key === ue)
                                if (C.tag === 4 && C.stateNode.containerInfo === z.containerInfo && C.stateNode.implementation === z.implementation) {
                                    a(M, C.sibling),
                                    J = r(C, z.children || []),
                                    J.return = M,
                                    M = J;
                                    break e
                                } else {
                                    a(M, C);
                                    break
                                }
                            else
                                t(M, C);
                            C = C.sibling
                        }
                        J = Rr(z, M.mode, J),
                        J.return = M,
                        M = J
                    }
                    return v(M);
                case Q:
                    return ue = z._init,
                    z = ue(z._payload),
                    Ze(M, C, z, J)
                }
                if (P(z))
                    return ye(M, C, z, J);
                if (ce(z)) {
                    if (ue = ce(z),
                    typeof ue != "function")
                        throw Error(o(150));
                    return z = ue.call(z),
                    pe(M, C, z, J)
                }
                if (typeof z.then == "function")
                    return Ze(M, C, io(z), J);
                if (z.$$typeof === B)
                    return Ze(M, C, Ks(M, z), J);
                so(M, z)
            }
            return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (z = "" + z,
            C !== null && C.tag === 6 ? (a(M, C.sibling),
            J = r(C, z),
            J.return = M,
            M = J) : (a(M, C),
            J = Or(z, M.mode, J),
            J.return = M,
            M = J),
            v(M)) : a(M, C)
        }
        return function(M, C, z, J) {
            try {
                Mi = 0;
                var ue = Ze(M, C, z, J);
                return _l = null,
                ue
            } catch (he) {
                if (he === Ti || he === Qs)
                    throw he;
                var _e = Ft(29, he, null, M.mode);
                return _e.lanes = J,
                _e.return = M,
                _e
            } finally {}
        }
    }
    var Ml = Eh(!0)
      , Ch = Eh(!1)
      , ua = L(null)
      , Ca = null;
    function gn(e) {
        var t = e.alternate;
        te(Tt, Tt.current & 1),
        te(ua, e),
        Ca === null && (t === null || Nl.current !== null || t.memoizedState !== null) && (Ca = e)
    }
    function Dh(e) {
        if (e.tag === 22) {
            if (te(Tt, Tt.current),
            te(ua, e),
            Ca === null) {
                var t = e.alternate;
                t !== null && t.memoizedState !== null && (Ca = e)
            }
        } else
            yn()
    }
    function yn() {
        te(Tt, Tt.current),
        te(ua, ua.current)
    }
    function Ia(e) {
        W(ua),
        Ca === e && (Ca = null),
        W(Tt)
    }
    var Tt = L(0);
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
    function du(e, t, a, s) {
        t = e.memoizedState,
        a = a(s, t),
        a = a == null ? t : y({}, t, a),
        e.memoizedState = a,
        e.lanes === 0 && (e.updateQueue.baseState = a)
    }
    var hu = {
        enqueueSetState: function(e, t, a) {
            e = e._reactInternals;
            var s = Wt()
              , r = hn(s);
            r.payload = t,
            a != null && (r.callback = a),
            t = mn(e, r, s),
            t !== null && (ea(t, e, s),
            wi(t, e, s))
        },
        enqueueReplaceState: function(e, t, a) {
            e = e._reactInternals;
            var s = Wt()
              , r = hn(s);
            r.tag = 1,
            r.payload = t,
            a != null && (r.callback = a),
            t = mn(e, r, s),
            t !== null && (ea(t, e, s),
            wi(t, e, s))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var a = Wt()
              , s = hn(a);
            s.tag = 2,
            t != null && (s.callback = t),
            t = mn(e, s, a),
            t !== null && (ea(t, e, a),
            wi(t, e, a))
        }
    };
    function _h(e, t, a, s, r, u, v) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, u, v) : t.prototype && t.prototype.isPureReactComponent ? !mi(a, s) || !mi(r, u) : !0
    }
    function Mh(e, t, a, s) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, s),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, s),
        t.state !== e && hu.enqueueReplaceState(t, t.state, null)
    }
    function Jn(e, t) {
        var a = t;
        if ("ref"in t) {
            a = {};
            for (var s in t)
                s !== "ref" && (a[s] = t[s])
        }
        if (e = e.defaultProps) {
            a === t && (a = y({}, a));
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
        } catch (s) {
            setTimeout(function() {
                throw s
            })
        }
    }
    function zh(e, t, a) {
        try {
            var s = e.onCaughtError;
            s(a.value, {
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
    function Uh(e) {
        return e = hn(e),
        e.tag = 3,
        e
    }
    function Bh(e, t, a, s) {
        var r = a.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var u = s.value;
            e.payload = function() {
                return r(u)
            }
            ,
            e.callback = function() {
                zh(t, a, s)
            }
        }
        var v = a.stateNode;
        v !== null && typeof v.componentDidCatch == "function" && (e.callback = function() {
            zh(t, a, s),
            typeof r != "function" && (jn === null ? jn = new Set([this]) : jn.add(this));
            var b = s.stack;
            this.componentDidCatch(s.value, {
                componentStack: b !== null ? b : ""
            })
        }
        )
    }
    function ax(e, t, a, s, r) {
        if (a.flags |= 32768,
        s !== null && typeof s == "object" && typeof s.then == "function") {
            if (t = a.alternate,
            t !== null && xi(t, a, r, !0),
            a = ua.current,
            a !== null) {
                switch (a.tag) {
                case 13:
                    return Ca === null ? Lu() : a.alternate === null && lt === 0 && (lt = 3),
                    a.flags &= -257,
                    a.flags |= 65536,
                    a.lanes = r,
                    s === Yr ? a.flags |= 16384 : (t = a.updateQueue,
                    t === null ? a.updateQueue = new Set([s]) : t.add(s),
                    Hu(e, s, r)),
                    !1;
                case 22:
                    return a.flags |= 65536,
                    s === Yr ? a.flags |= 16384 : (t = a.updateQueue,
                    t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([s])
                    },
                    a.updateQueue = t) : (a = t.retryQueue,
                    a === null ? t.retryQueue = new Set([s]) : a.add(s)),
                    Hu(e, s, r)),
                    !1
                }
                throw Error(o(435, a.tag))
            }
            return Hu(e, s, r),
            Lu(),
            !1
        }
        if (He)
            return t = ua.current,
            t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            t.flags |= 65536,
            t.lanes = r,
            s !== Ur && (e = Error(o(422), {
                cause: s
            }),
            vi(ia(e, a)))) : (s !== Ur && (t = Error(o(423), {
                cause: s
            }),
            vi(ia(t, a))),
            e = e.current.alternate,
            e.flags |= 65536,
            r &= -r,
            e.lanes |= r,
            s = ia(s, a),
            r = mu(e.stateNode, s, r),
            Kr(e, r),
            lt !== 4 && (lt = 2)),
            !1;
        var u = Error(o(520), {
            cause: s
        });
        if (u = ia(u, a),
        ki === null ? ki = [u] : ki.push(u),
        lt !== 4 && (lt = 2),
        t === null)
            return !0;
        s = ia(s, a),
        a = t;
        do {
            switch (a.tag) {
            case 3:
                return a.flags |= 65536,
                e = r & -r,
                a.lanes |= e,
                e = mu(a.stateNode, s, e),
                Kr(a, e),
                !1;
            case 1:
                if (t = a.type,
                u = a.stateNode,
                (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (jn === null || !jn.has(u))))
                    return a.flags |= 65536,
                    r &= -r,
                    a.lanes |= r,
                    r = Uh(r),
                    Bh(r, e, a, s),
                    Kr(a, r),
                    !1
            }
            a = a.return
        } while (a !== null);
        return !1
    }
    var Lh = Error(o(461))
      , At = !1;
    function Dt(e, t, a, s) {
        t.child = e === null ? Ch(t, null, a, s) : Ml(t, e.child, a, s)
    }
    function kh(e, t, a, s, r) {
        a = a.render;
        var u = t.ref;
        if ("ref"in s) {
            var v = {};
            for (var b in s)
                b !== "ref" && (v[b] = s[b])
        } else
            v = s;
        return Zn(t),
        s = Ir(e, t, a, v, u, r),
        b = $r(),
        e !== null && !At ? (Wr(e, t, r),
        $a(e, t, r)) : (He && b && Vr(t),
        t.flags |= 1,
        Dt(e, t, s, r),
        t.child)
    }
    function Hh(e, t, a, s, r) {
        if (e === null) {
            var u = a.type;
            return typeof u == "function" && !Mr(u) && u.defaultProps === void 0 && a.compare === null ? (t.tag = 15,
            t.type = u,
            Ph(e, t, u, s, r)) : (e = qs(a.type, null, s, t, t.mode, r),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (u = e.child,
        !Tu(e, r)) {
            var v = u.memoizedProps;
            if (a = a.compare,
            a = a !== null ? a : mi,
            a(v, s) && e.ref === t.ref)
                return $a(e, t, r)
        }
        return t.flags |= 1,
        e = Xa(u, s),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function Ph(e, t, a, s, r) {
        if (e !== null) {
            var u = e.memoizedProps;
            if (mi(u, s) && e.ref === t.ref)
                if (At = !1,
                t.pendingProps = s = u,
                Tu(e, r))
                    (e.flags & 131072) !== 0 && (At = !0);
                else
                    return t.lanes = e.lanes,
                    $a(e, t, r)
        }
        return pu(e, t, a, s, r)
    }
    function qh(e, t, a) {
        var s = t.pendingProps
          , r = s.children
          , u = e !== null ? e.memoizedState : null;
        if (s.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (s = u !== null ? u.baseLanes | a : a,
                e !== null) {
                    for (r = t.child = e.child,
                    u = 0; r !== null; )
                        u = u | r.lanes | r.childLanes,
                        r = r.sibling;
                    t.childLanes = u & ~s
                } else
                    t.childLanes = 0,
                    t.child = null;
                return Yh(e, t, s, a)
            }
            if ((a & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                e !== null && Zs(t, u !== null ? u.cachePool : null),
                u !== null ? Pd(t, u) : Qr(),
                Dh(t);
            else
                return t.lanes = t.childLanes = 536870912,
                Yh(e, t, u !== null ? u.baseLanes | a : a, a)
        } else
            u !== null ? (Zs(t, u.cachePool),
            Pd(t, u),
            yn(),
            t.memoizedState = null) : (e !== null && Zs(t, null),
            Qr(),
            yn());
        return Dt(e, t, r, a),
        t.child
    }
    function Yh(e, t, a, s) {
        var r = qr();
        return r = r === null ? null : {
            parent: St._currentValue,
            pool: r
        },
        t.memoizedState = {
            baseLanes: a,
            cachePool: r
        },
        e !== null && Zs(t, null),
        Qr(),
        Dh(t),
        e !== null && xi(e, t, s, !0),
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
    function pu(e, t, a, s, r) {
        return Zn(t),
        a = Ir(e, t, a, s, void 0, r),
        s = $r(),
        e !== null && !At ? (Wr(e, t, r),
        $a(e, t, r)) : (He && s && Vr(t),
        t.flags |= 1,
        Dt(e, t, a, r),
        t.child)
    }
    function Gh(e, t, a, s, r, u) {
        return Zn(t),
        t.updateQueue = null,
        a = Yd(t, s, a, r),
        qd(e),
        s = $r(),
        e !== null && !At ? (Wr(e, t, u),
        $a(e, t, u)) : (He && s && Vr(t),
        t.flags |= 1,
        Dt(e, t, a, u),
        t.child)
    }
    function Xh(e, t, a, s, r) {
        if (Zn(t),
        t.stateNode === null) {
            var u = Sl
              , v = a.contextType;
            typeof v == "object" && v !== null && (u = Vt(v)),
            u = new a(s,u),
            t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null,
            u.updater = hu,
            t.stateNode = u,
            u._reactInternals = t,
            u = t.stateNode,
            u.props = s,
            u.state = t.memoizedState,
            u.refs = {},
            Gr(t),
            v = a.contextType,
            u.context = typeof v == "object" && v !== null ? Vt(v) : Sl,
            u.state = t.memoizedState,
            v = a.getDerivedStateFromProps,
            typeof v == "function" && (du(t, a, v, s),
            u.state = t.memoizedState),
            typeof a.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (v = u.state,
            typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(),
            v !== u.state && hu.enqueueReplaceState(u, u.state, null),
            Ni(t, s, u, r),
            Ai(),
            u.state = t.memoizedState),
            typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            s = !0
        } else if (e === null) {
            u = t.stateNode;
            var b = t.memoizedProps
              , A = Jn(a, b);
            u.props = A;
            var U = u.context
              , X = a.contextType;
            v = Sl,
            typeof X == "object" && X !== null && (v = Vt(X));
            var $ = a.getDerivedStateFromProps;
            X = typeof $ == "function" || typeof u.getSnapshotBeforeUpdate == "function",
            b = t.pendingProps !== b,
            X || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (b || U !== v) && Mh(t, u, s, v),
            dn = !1;
            var H = t.memoizedState;
            u.state = H,
            Ni(t, s, u, r),
            Ai(),
            U = t.memoizedState,
            b || H !== U || dn ? (typeof $ == "function" && (du(t, a, $, s),
            U = t.memoizedState),
            (A = dn || _h(t, a, A, s, H, U, v)) ? (X || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()),
            typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = s,
            t.memoizedState = U),
            u.props = s,
            u.state = U,
            u.context = v,
            s = A) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            s = !1)
        } else {
            u = t.stateNode,
            Xr(e, t),
            v = t.memoizedProps,
            X = Jn(a, v),
            u.props = X,
            $ = t.pendingProps,
            H = u.context,
            U = a.contextType,
            A = Sl,
            typeof U == "object" && U !== null && (A = Vt(U)),
            b = a.getDerivedStateFromProps,
            (U = typeof b == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (v !== $ || H !== A) && Mh(t, u, s, A),
            dn = !1,
            H = t.memoizedState,
            u.state = H,
            Ni(t, s, u, r),
            Ai();
            var Y = t.memoizedState;
            v !== $ || H !== Y || dn || e !== null && e.dependencies !== null && Xs(e.dependencies) ? (typeof b == "function" && (du(t, a, b, s),
            Y = t.memoizedState),
            (X = dn || _h(t, a, X, s, H, Y, A) || e !== null && e.dependencies !== null && Xs(e.dependencies)) ? (U || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(s, Y, A),
            typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(s, Y, A)),
            typeof u.componentDidUpdate == "function" && (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || v === e.memoizedProps && H === e.memoizedState || (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && H === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = s,
            t.memoizedState = Y),
            u.props = s,
            u.state = Y,
            u.context = A,
            s = X) : (typeof u.componentDidUpdate != "function" || v === e.memoizedProps && H === e.memoizedState || (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && H === e.memoizedState || (t.flags |= 1024),
            s = !1)
        }
        return u = s,
        co(e, t),
        s = (t.flags & 128) !== 0,
        u || s ? (u = t.stateNode,
        a = s && typeof a.getDerivedStateFromError != "function" ? null : u.render(),
        t.flags |= 1,
        e !== null && s ? (t.child = Ml(t, e.child, null, r),
        t.child = Ml(t, null, a, r)) : Dt(e, t, a, r),
        t.memoizedState = u.state,
        e = t.child) : e = $a(e, t, r),
        e
    }
    function Kh(e, t, a, s) {
        return yi(),
        t.flags |= 256,
        Dt(e, t, a, s),
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
    function vu(e, t, a) {
        return e = e !== null ? e.childLanes & ~a : 0,
        t && (e |= ca),
        e
    }
    function Zh(e, t, a) {
        var s = t.pendingProps, r = !1, u = (t.flags & 128) !== 0, v;
        if ((v = u) || (v = e !== null && e.memoizedState === null ? !1 : (Tt.current & 2) !== 0),
        v && (r = !0,
        t.flags &= -129),
        v = (t.flags & 32) !== 0,
        t.flags &= -33,
        e === null) {
            if (He) {
                if (r ? gn(t) : yn(),
                He) {
                    var b = nt, A;
                    if (A = b) {
                        e: {
                            for (A = b,
                            b = Ea; A.nodeType !== 8; ) {
                                if (!b) {
                                    b = null;
                                    break e
                                }
                                if (A = Ta(A.nextSibling),
                                A === null) {
                                    b = null;
                                    break e
                                }
                            }
                            b = A
                        }
                        b !== null ? (t.memoizedState = {
                            dehydrated: b,
                            treeContext: qn !== null ? {
                                id: Ka,
                                overflow: Za
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        },
                        A = Ft(18, null, null, 0),
                        A.stateNode = b,
                        A.return = t,
                        t.child = A,
                        Bt = t,
                        nt = null,
                        A = !0) : A = !1
                    }
                    A || Xn(t)
                }
                if (b = t.memoizedState,
                b !== null && (b = b.dehydrated,
                b !== null))
                    return tc(b) ? t.lanes = 32 : t.lanes = 536870912,
                    null;
                Ia(t)
            }
            return b = s.children,
            s = s.fallback,
            r ? (yn(),
            r = t.mode,
            b = fo({
                mode: "hidden",
                children: b
            }, r),
            s = Pn(s, r, a, null),
            b.return = t,
            s.return = t,
            b.sibling = s,
            t.child = b,
            r = t.child,
            r.memoizedState = yu(a),
            r.childLanes = vu(e, v, a),
            t.memoizedState = gu,
            s) : (gn(t),
            xu(t, b))
        }
        if (A = e.memoizedState,
        A !== null && (b = A.dehydrated,
        b !== null)) {
            if (u)
                t.flags & 256 ? (gn(t),
                t.flags &= -257,
                t = bu(e, t, a)) : t.memoizedState !== null ? (yn(),
                t.child = e.child,
                t.flags |= 128,
                t = null) : (yn(),
                r = s.fallback,
                b = t.mode,
                s = fo({
                    mode: "visible",
                    children: s.children
                }, b),
                r = Pn(r, b, a, null),
                r.flags |= 2,
                s.return = t,
                r.return = t,
                s.sibling = r,
                t.child = s,
                Ml(t, e.child, null, a),
                s = t.child,
                s.memoizedState = yu(a),
                s.childLanes = vu(e, v, a),
                t.memoizedState = gu,
                t = r);
            else if (gn(t),
            tc(b)) {
                if (v = b.nextSibling && b.nextSibling.dataset,
                v)
                    var U = v.dgst;
                v = U,
                s = Error(o(419)),
                s.stack = "",
                s.digest = v,
                vi({
                    value: s,
                    source: null,
                    stack: null
                }),
                t = bu(e, t, a)
            } else if (At || xi(e, t, a, !1),
            v = (a & e.childLanes) !== 0,
            At || v) {
                if (v = Fe,
                v !== null && (s = a & -a,
                s = (s & 42) !== 0 ? 1 : ol(s),
                s = (s & (v.suspendedLanes | a)) !== 0 ? 0 : s,
                s !== 0 && s !== A.retryLane))
                    throw A.retryLane = s,
                    bl(e, s),
                    ea(v, e, s),
                    Lh;
                b.data === "$?" || Lu(),
                t = bu(e, t, a)
            } else
                b.data === "$?" ? (t.flags |= 192,
                t.child = e.child,
                t = null) : (e = A.treeContext,
                nt = Ta(b.nextSibling),
                Bt = t,
                He = !0,
                Gn = null,
                Ea = !1,
                e !== null && (oa[ra++] = Ka,
                oa[ra++] = Za,
                oa[ra++] = qn,
                Ka = e.id,
                Za = e.overflow,
                qn = t),
                t = xu(t, s.children),
                t.flags |= 4096);
            return t
        }
        return r ? (yn(),
        r = s.fallback,
        b = t.mode,
        A = e.child,
        U = A.sibling,
        s = Xa(A, {
            mode: "hidden",
            children: s.children
        }),
        s.subtreeFlags = A.subtreeFlags & 65011712,
        U !== null ? r = Xa(U, r) : (r = Pn(r, b, a, null),
        r.flags |= 2),
        r.return = t,
        s.return = t,
        s.sibling = r,
        t.child = s,
        s = r,
        r = t.child,
        b = e.child.memoizedState,
        b === null ? b = yu(a) : (A = b.cachePool,
        A !== null ? (U = St._currentValue,
        A = A.parent !== U ? {
            parent: U,
            pool: U
        } : A) : A = Rd(),
        b = {
            baseLanes: b.baseLanes | a,
            cachePool: A
        }),
        r.memoizedState = b,
        r.childLanes = vu(e, v, a),
        t.memoizedState = gu,
        s) : (gn(t),
        a = e.child,
        e = a.sibling,
        a = Xa(a, {
            mode: "visible",
            children: s.children
        }),
        a.return = t,
        a.sibling = null,
        e !== null && (v = t.deletions,
        v === null ? (t.deletions = [e],
        t.flags |= 16) : v.push(e)),
        t.child = a,
        t.memoizedState = null,
        a)
    }
    function xu(e, t) {
        return t = fo({
            mode: "visible",
            children: t
        }, e.mode),
        t.return = e,
        e.child = t
    }
    function fo(e, t) {
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
    function bu(e, t, a) {
        return Ml(t, e.child, null, a),
        e = xu(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function Qh(e, t, a) {
        e.lanes |= t;
        var s = e.alternate;
        s !== null && (s.lanes |= t),
        Lr(e.return, t, a)
    }
    function Su(e, t, a, s, r) {
        var u = e.memoizedState;
        u === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: s,
            tail: a,
            tailMode: r
        } : (u.isBackwards = t,
        u.rendering = null,
        u.renderingStartTime = 0,
        u.last = s,
        u.tail = a,
        u.tailMode = r)
    }
    function Fh(e, t, a) {
        var s = t.pendingProps
          , r = s.revealOrder
          , u = s.tail;
        if (Dt(e, t, s.children, a),
        s = Tt.current,
        (s & 2) !== 0)
            s = s & 1 | 2,
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
            s &= 1
        }
        switch (te(Tt, s),
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
            Su(t, !1, r, a, u);
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
            Su(t, !0, a, null, u);
            break;
        case "together":
            Su(t, !1, null, null, void 0);
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
                if (xi(e, t, a, !1),
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
    function Tu(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies,
        !!(e !== null && Xs(e)))
    }
    function nx(e, t, a) {
        switch (t.tag) {
        case 3:
            we(t, t.stateNode.containerInfo),
            fn(t, St, e.memoizedState.cache),
            yi();
            break;
        case 27:
        case 5:
            Ve(t);
            break;
        case 4:
            we(t, t.stateNode.containerInfo);
            break;
        case 10:
            fn(t, t.type, t.memoizedProps.value);
            break;
        case 13:
            var s = t.memoizedState;
            if (s !== null)
                return s.dehydrated !== null ? (gn(t),
                t.flags |= 128,
                null) : (a & t.child.childLanes) !== 0 ? Zh(e, t, a) : (gn(t),
                e = $a(e, t, a),
                e !== null ? e.sibling : null);
            gn(t);
            break;
        case 19:
            var r = (e.flags & 128) !== 0;
            if (s = (a & t.childLanes) !== 0,
            s || (xi(e, t, a, !1),
            s = (a & t.childLanes) !== 0),
            r) {
                if (s)
                    return Fh(e, t, a);
                t.flags |= 128
            }
            if (r = t.memoizedState,
            r !== null && (r.rendering = null,
            r.tail = null,
            r.lastEffect = null),
            te(Tt, Tt.current),
            s)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
            qh(e, t, a);
        case 24:
            fn(t, St, e.memoizedState.cache)
        }
        return $a(e, t, a)
    }
    function Jh(e, t, a) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
                At = !0;
            else {
                if (!Tu(e, a) && (t.flags & 128) === 0)
                    return At = !1,
                    nx(e, t, a);
                At = (e.flags & 131072) !== 0
            }
        else
            At = !1,
            He && (t.flags & 1048576) !== 0 && Nd(t, Gs, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 16:
            e: {
                e = t.pendingProps;
                var s = t.elementType
                  , r = s._init;
                if (s = r(s._payload),
                t.type = s,
                typeof s == "function")
                    Mr(s) ? (e = Jn(s, e),
                    t.tag = 1,
                    t = Xh(null, t, s, e, a)) : (t.tag = 0,
                    t = pu(null, t, s, e, a));
                else {
                    if (s != null) {
                        if (r = s.$$typeof,
                        r === K) {
                            t.tag = 11,
                            t = kh(null, t, s, e, a);
                            break e
                        } else if (r === I) {
                            t.tag = 14,
                            t = Hh(null, t, s, e, a);
                            break e
                        }
                    }
                    throw t = ee(s) || s,
                    Error(o(306, t, ""))
                }
            }
            return t;
        case 0:
            return pu(e, t, t.type, t.pendingProps, a);
        case 1:
            return s = t.type,
            r = Jn(s, t.pendingProps),
            Xh(e, t, s, r, a);
        case 3:
            e: {
                if (we(t, t.stateNode.containerInfo),
                e === null)
                    throw Error(o(387));
                s = t.pendingProps;
                var u = t.memoizedState;
                r = u.element,
                Xr(e, t),
                Ni(t, s, null, a);
                var v = t.memoizedState;
                if (s = v.cache,
                fn(t, St, s),
                s !== u.cache && kr(t, [St], a, !0),
                Ai(),
                s = v.element,
                u.isDehydrated)
                    if (u = {
                        element: s,
                        isDehydrated: !1,
                        cache: v.cache
                    },
                    t.updateQueue.baseState = u,
                    t.memoizedState = u,
                    t.flags & 256) {
                        t = Kh(e, t, s, a);
                        break e
                    } else if (s !== r) {
                        r = ia(Error(o(424)), t),
                        vi(r),
                        t = Kh(e, t, s, a);
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
                        for (nt = Ta(e.firstChild),
                        Bt = t,
                        He = !0,
                        Gn = null,
                        Ea = !0,
                        a = Ch(t, null, s, a),
                        t.child = a; a; )
                            a.flags = a.flags & -3 | 4096,
                            a = a.sibling
                    }
                else {
                    if (yi(),
                    s === r) {
                        t = $a(e, t, a);
                        break e
                    }
                    Dt(e, t, s, a)
                }
                t = t.child
            }
            return t;
        case 26:
            return co(e, t),
            e === null ? (a = ep(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : He || (a = t.type,
            e = t.pendingProps,
            s = No(F.current).createElement(a),
            s[bt] = t,
            s[Ct] = e,
            Mt(s, a, e),
            be(s),
            t.stateNode = s) : t.memoizedState = ep(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
            null;
        case 27:
            return Ve(t),
            e === null && He && (s = t.stateNode = Im(t.type, t.pendingProps, F.current),
            Bt = t,
            Ea = !0,
            r = nt,
            Nn(t.type) ? (ac = r,
            nt = Ta(s.firstChild)) : nt = r),
            Dt(e, t, t.pendingProps.children, a),
            co(e, t),
            e === null && (t.flags |= 4194304),
            t.child;
        case 5:
            return e === null && He && ((r = s = nt) && (s = Mx(s, t.type, t.pendingProps, Ea),
            s !== null ? (t.stateNode = s,
            Bt = t,
            nt = Ta(s.firstChild),
            Ea = !1,
            r = !0) : r = !1),
            r || Xn(t)),
            Ve(t),
            r = t.type,
            u = t.pendingProps,
            v = e !== null ? e.memoizedProps : null,
            s = u.children,
            $u(r, u) ? s = null : v !== null && $u(r, v) && (t.flags |= 32),
            t.memoizedState !== null && (r = Ir(e, t, Fv, null, null, a),
            Qi._currentValue = r),
            co(e, t),
            Dt(e, t, s, a),
            t.child;
        case 6:
            return e === null && He && ((e = a = nt) && (a = Ox(a, t.pendingProps, Ea),
            a !== null ? (t.stateNode = a,
            Bt = t,
            nt = null,
            e = !0) : e = !1),
            e || Xn(t)),
            null;
        case 13:
            return Zh(e, t, a);
        case 4:
            return we(t, t.stateNode.containerInfo),
            s = t.pendingProps,
            e === null ? t.child = Ml(t, null, s, a) : Dt(e, t, s, a),
            t.child;
        case 11:
            return kh(e, t, t.type, t.pendingProps, a);
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
            return s = t.pendingProps,
            fn(t, t.type, s.value),
            Dt(e, t, s.children, a),
            t.child;
        case 9:
            return r = t.type._context,
            s = t.pendingProps.children,
            Zn(t),
            r = Vt(r),
            s = s(r),
            t.flags |= 1,
            Dt(e, t, s, a),
            t.child;
        case 14:
            return Hh(e, t, t.type, t.pendingProps, a);
        case 15:
            return Ph(e, t, t.type, t.pendingProps, a);
        case 19:
            return Fh(e, t, a);
        case 31:
            return s = t.pendingProps,
            a = t.mode,
            s = {
                mode: s.mode,
                children: s.children
            },
            e === null ? (a = fo(s, a),
            a.ref = t.ref,
            t.child = a,
            a.return = t,
            t = a) : (a = Xa(e.child, s),
            a.ref = t.ref,
            t.child = a,
            a.return = t,
            t = a),
            t;
        case 22:
            return qh(e, t, a);
        case 24:
            return Zn(t),
            s = Vt(St),
            e === null ? (r = qr(),
            r === null && (r = Fe,
            u = Hr(),
            r.pooledCache = u,
            u.refCount++,
            u !== null && (r.pooledCacheLanes |= a),
            r = u),
            t.memoizedState = {
                parent: s,
                cache: r
            },
            Gr(t),
            fn(t, St, r)) : ((e.lanes & a) !== 0 && (Xr(e, t),
            Ni(t, null, null, a),
            Ai()),
            r = e.memoizedState,
            u = t.memoizedState,
            r.parent !== s ? (r = {
                parent: s,
                cache: s
            },
            t.memoizedState = r,
            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = r),
            fn(t, St, s)) : (s = u.cache,
            fn(t, St, s),
            s !== r.cache && kr(t, [St], a, !0))),
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
    function Ih(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            e.flags &= -16777217;
        else if (e.flags |= 16777216,
        !ip(t)) {
            if (t = ua.current,
            t !== null && ((ze & 4194048) === ze ? Ca !== null : (ze & 62914560) !== ze && (ze & 536870912) === 0 || t !== Ca))
                throw ji = Yr,
                Vd;
            e.flags |= 8192
        }
    }
    function ho(e, t) {
        t !== null && (e.flags |= 4),
        e.flags & 16384 && (t = e.tag !== 22 ? ne() : 536870912,
        e.lanes |= t,
        zl |= t)
    }
    function Ri(e, t) {
        if (!He)
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
                for (var s = null; a !== null; )
                    a.alternate !== null && (s = a),
                    a = a.sibling;
                s === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : s.sibling = null
            }
    }
    function et(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , a = 0
          , s = 0;
        if (t)
            for (var r = e.child; r !== null; )
                a |= r.lanes | r.childLanes,
                s |= r.subtreeFlags & 65011712,
                s |= r.flags & 65011712,
                r.return = e,
                r = r.sibling;
        else
            for (r = e.child; r !== null; )
                a |= r.lanes | r.childLanes,
                s |= r.subtreeFlags,
                s |= r.flags,
                r.return = e,
                r = r.sibling;
        return e.subtreeFlags |= s,
        e.childLanes = a,
        t
    }
    function lx(e, t, a) {
        var s = t.pendingProps;
        switch (zr(t),
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
            return et(t),
            null;
        case 1:
            return et(t),
            null;
        case 3:
            return a = t.stateNode,
            s = null,
            e !== null && (s = e.memoizedState.cache),
            t.memoizedState.cache !== s && (t.flags |= 2048),
            Fa(St),
            Te(),
            a.pendingContext && (a.context = a.pendingContext,
            a.pendingContext = null),
            (e === null || e.child === null) && (gi(t) ? Wa(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            Dd())),
            et(t),
            null;
        case 26:
            return a = t.memoizedState,
            e === null ? (Wa(t),
            a !== null ? (et(t),
            Ih(t, a)) : (et(t),
            t.flags &= -16777217)) : a ? a !== e.memoizedState ? (Wa(t),
            et(t),
            Ih(t, a)) : (et(t),
            t.flags &= -16777217) : (e.memoizedProps !== s && Wa(t),
            et(t),
            t.flags &= -16777217),
            null;
        case 27:
            Ue(t),
            a = F.current;
            var r = t.type;
            if (e !== null && t.stateNode != null)
                e.memoizedProps !== s && Wa(t);
            else {
                if (!s) {
                    if (t.stateNode === null)
                        throw Error(o(166));
                    return et(t),
                    null
                }
                e = le.current,
                gi(t) ? Ed(t) : (e = Im(r, s, a),
                t.stateNode = e,
                Wa(t))
            }
            return et(t),
            null;
        case 5:
            if (Ue(t),
            a = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== s && Wa(t);
            else {
                if (!s) {
                    if (t.stateNode === null)
                        throw Error(o(166));
                    return et(t),
                    null
                }
                if (e = le.current,
                gi(t))
                    Ed(t);
                else {
                    switch (r = No(F.current),
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
                            e = typeof s.is == "string" ? r.createElement("select", {
                                is: s.is
                            }) : r.createElement("select"),
                            s.multiple ? e.multiple = !0 : s.size && (e.size = s.size);
                            break;
                        default:
                            e = typeof s.is == "string" ? r.createElement(a, {
                                is: s.is
                            }) : r.createElement(a)
                        }
                    }
                    e[bt] = t,
                    e[Ct] = s;
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
                    e: switch (Mt(e, a, s),
                    a) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        e = !!s.autoFocus;
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
            return et(t),
            t.flags &= -16777217,
            null;
        case 6:
            if (e && t.stateNode != null)
                e.memoizedProps !== s && Wa(t);
            else {
                if (typeof s != "string" && t.stateNode === null)
                    throw Error(o(166));
                if (e = F.current,
                gi(t)) {
                    if (e = t.stateNode,
                    a = t.memoizedProps,
                    s = null,
                    r = Bt,
                    r !== null)
                        switch (r.tag) {
                        case 27:
                        case 5:
                            s = r.memoizedProps
                        }
                    e[bt] = t,
                    e = !!(e.nodeValue === a || s !== null && s.suppressHydrationWarning === !0 || Gm(e.nodeValue, a)),
                    e || Xn(t)
                } else
                    e = No(e).createTextNode(s),
                    e[bt] = t,
                    t.stateNode = e
            }
            return et(t),
            null;
        case 13:
            if (s = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (r = gi(t),
                s !== null && s.dehydrated !== null) {
                    if (e === null) {
                        if (!r)
                            throw Error(o(318));
                        if (r = t.memoizedState,
                        r = r !== null ? r.dehydrated : null,
                        !r)
                            throw Error(o(317));
                        r[bt] = t
                    } else
                        yi(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    et(t),
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
            if (a = s !== null,
            e = e !== null && e.memoizedState !== null,
            a) {
                s = t.child,
                r = null,
                s.alternate !== null && s.alternate.memoizedState !== null && s.alternate.memoizedState.cachePool !== null && (r = s.alternate.memoizedState.cachePool.pool);
                var u = null;
                s.memoizedState !== null && s.memoizedState.cachePool !== null && (u = s.memoizedState.cachePool.pool),
                u !== r && (s.flags |= 2048)
            }
            return a !== e && a && (t.child.flags |= 8192),
            ho(t, t.updateQueue),
            et(t),
            null;
        case 4:
            return Te(),
            e === null && Zu(t.stateNode.containerInfo),
            et(t),
            null;
        case 10:
            return Fa(t.type),
            et(t),
            null;
        case 19:
            if (W(Tt),
            r = t.memoizedState,
            r === null)
                return et(t),
                null;
            if (s = (t.flags & 128) !== 0,
            u = r.rendering,
            u === null)
                if (s)
                    Ri(r, !1);
                else {
                    if (lt !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null; ) {
                            if (u = oo(e),
                            u !== null) {
                                for (t.flags |= 128,
                                Ri(r, !1),
                                e = u.updateQueue,
                                t.updateQueue = e,
                                ho(t, e),
                                t.subtreeFlags = 0,
                                e = a,
                                a = t.child; a !== null; )
                                    Ad(a, e),
                                    a = a.sibling;
                                return te(Tt, Tt.current & 1 | 2),
                                t.child
                            }
                            e = e.sibling
                        }
                    r.tail !== null && ot() > go && (t.flags |= 128,
                    s = !0,
                    Ri(r, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!s)
                    if (e = oo(u),
                    e !== null) {
                        if (t.flags |= 128,
                        s = !0,
                        e = e.updateQueue,
                        t.updateQueue = e,
                        ho(t, e),
                        Ri(r, !0),
                        r.tail === null && r.tailMode === "hidden" && !u.alternate && !He)
                            return et(t),
                            null
                    } else
                        2 * ot() - r.renderingStartTime > go && a !== 536870912 && (t.flags |= 128,
                        s = !0,
                        Ri(r, !1),
                        t.lanes = 4194304);
                r.isBackwards ? (u.sibling = t.child,
                t.child = u) : (e = r.last,
                e !== null ? e.sibling = u : t.child = u,
                r.last = u)
            }
            return r.tail !== null ? (t = r.tail,
            r.rendering = t,
            r.tail = t.sibling,
            r.renderingStartTime = ot(),
            t.sibling = null,
            e = Tt.current,
            te(Tt, s ? e & 1 | 2 : e & 1),
            t) : (et(t),
            null);
        case 22:
        case 23:
            return Ia(t),
            Fr(),
            s = t.memoizedState !== null,
            e !== null ? e.memoizedState !== null !== s && (t.flags |= 8192) : s && (t.flags |= 8192),
            s ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (et(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : et(t),
            a = t.updateQueue,
            a !== null && ho(t, a.retryQueue),
            a = null,
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
            s = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (s = t.memoizedState.cachePool.pool),
            s !== a && (t.flags |= 2048),
            e !== null && W(Qn),
            null;
        case 24:
            return a = null,
            e !== null && (a = e.memoizedState.cache),
            t.memoizedState.cache !== a && (t.flags |= 2048),
            Fa(St),
            et(t),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(o(156, t.tag))
    }
    function ix(e, t) {
        switch (zr(t),
        t.tag) {
        case 1:
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return Fa(St),
            Te(),
            e = t.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 26:
        case 27:
        case 5:
            return Ue(t),
            null;
        case 13:
            if (Ia(t),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(o(340));
                yi()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return W(Tt),
            null;
        case 4:
            return Te(),
            null;
        case 10:
            return Fa(t.type),
            null;
        case 22:
        case 23:
            return Ia(t),
            Fr(),
            e !== null && W(Qn),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 24:
            return Fa(St),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function $h(e, t) {
        switch (zr(t),
        t.tag) {
        case 3:
            Fa(St),
            Te();
            break;
        case 26:
        case 27:
        case 5:
            Ue(t);
            break;
        case 4:
            Te();
            break;
        case 13:
            Ia(t);
            break;
        case 19:
            W(Tt);
            break;
        case 10:
            Fa(t.type);
            break;
        case 22:
        case 23:
            Ia(t),
            Fr(),
            e !== null && W(Qn);
            break;
        case 24:
            Fa(St)
        }
    }
    function Vi(e, t) {
        try {
            var a = t.updateQueue
              , s = a !== null ? a.lastEffect : null;
            if (s !== null) {
                var r = s.next;
                a = r;
                do {
                    if ((a.tag & e) === e) {
                        s = void 0;
                        var u = a.create
                          , v = a.inst;
                        s = u(),
                        v.destroy = s
                    }
                    a = a.next
                } while (a !== r)
            }
        } catch (b) {
            Qe(t, t.return, b)
        }
    }
    function vn(e, t, a) {
        try {
            var s = t.updateQueue
              , r = s !== null ? s.lastEffect : null;
            if (r !== null) {
                var u = r.next;
                s = u;
                do {
                    if ((s.tag & e) === e) {
                        var v = s.inst
                          , b = v.destroy;
                        if (b !== void 0) {
                            v.destroy = void 0,
                            r = t;
                            var A = a
                              , U = b;
                            try {
                                U()
                            } catch (X) {
                                Qe(r, A, X)
                            }
                        }
                    }
                    s = s.next
                } while (s !== u)
            }
        } catch (X) {
            Qe(t, t.return, X)
        }
    }
    function Wh(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var a = e.stateNode;
            try {
                Hd(t, a)
            } catch (s) {
                Qe(e, e.return, s)
            }
        }
    }
    function em(e, t, a) {
        a.props = Jn(e.type, e.memoizedProps),
        a.state = e.memoizedState;
        try {
            a.componentWillUnmount()
        } catch (s) {
            Qe(e, t, s)
        }
    }
    function zi(e, t) {
        try {
            var a = e.ref;
            if (a !== null) {
                switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    var s = e.stateNode;
                    break;
                case 30:
                    s = e.stateNode;
                    break;
                default:
                    s = e.stateNode
                }
                typeof a == "function" ? e.refCleanup = a(s) : a.current = s
            }
        } catch (r) {
            Qe(e, t, r)
        }
    }
    function Da(e, t) {
        var a = e.ref
          , s = e.refCleanup;
        if (a !== null)
            if (typeof s == "function")
                try {
                    s()
                } catch (r) {
                    Qe(e, t, r)
                } finally {
                    e.refCleanup = null,
                    e = e.alternate,
                    e != null && (e.refCleanup = null)
                }
            else if (typeof a == "function")
                try {
                    a(null)
                } catch (r) {
                    Qe(e, t, r)
                }
            else
                a.current = null
    }
    function tm(e) {
        var t = e.type
          , a = e.memoizedProps
          , s = e.stateNode;
        try {
            e: switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                a.autoFocus && s.focus();
                break e;
            case "img":
                a.src ? s.src = a.src : a.srcSet && (s.srcset = a.srcSet)
            }
        } catch (r) {
            Qe(e, e.return, r)
        }
    }
    function ju(e, t, a) {
        try {
            var s = e.stateNode;
            Nx(s, e.type, a, t),
            s[Ct] = t
        } catch (r) {
            Qe(e, e.return, r)
        }
    }
    function am(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Nn(e.type) || e.tag === 4
    }
    function wu(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || am(e.return))
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
    function Au(e, t, a) {
        var s = e.tag;
        if (s === 5 || s === 6)
            e = e.stateNode,
            t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a,
            t.appendChild(e),
            a = a._reactRootContainer,
            a != null || t.onclick !== null || (t.onclick = Ao));
        else if (s !== 4 && (s === 27 && Nn(e.type) && (a = e.stateNode,
        t = null),
        e = e.child,
        e !== null))
            for (Au(e, t, a),
            e = e.sibling; e !== null; )
                Au(e, t, a),
                e = e.sibling
    }
    function mo(e, t, a) {
        var s = e.tag;
        if (s === 5 || s === 6)
            e = e.stateNode,
            t ? a.insertBefore(e, t) : a.appendChild(e);
        else if (s !== 4 && (s === 27 && Nn(e.type) && (a = e.stateNode),
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
            for (var s = e.type, r = t.attributes; r.length; )
                t.removeAttributeNode(r[0]);
            Mt(t, s, a),
            t[bt] = e,
            t[Ct] = a
        } catch (u) {
            Qe(e, e.return, u)
        }
    }
    var en = !1
      , dt = !1
      , Nu = !1
      , lm = typeof WeakSet == "function" ? WeakSet : Set
      , Nt = null;
    function sx(e, t) {
        if (e = e.containerInfo,
        Ju = Oo,
        e = pd(e),
        wr(e)) {
            if ("selectionStart"in e)
                var a = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    a = (a = e.ownerDocument) && a.defaultView || window;
                    var s = a.getSelection && a.getSelection();
                    if (s && s.rangeCount !== 0) {
                        a = s.anchorNode;
                        var r = s.anchorOffset
                          , u = s.focusNode;
                        s = s.focusOffset;
                        try {
                            a.nodeType,
                            u.nodeType
                        } catch {
                            a = null;
                            break e
                        }
                        var v = 0
                          , b = -1
                          , A = -1
                          , U = 0
                          , X = 0
                          , $ = e
                          , H = null;
                        t: for (; ; ) {
                            for (var Y; $ !== a || r !== 0 && $.nodeType !== 3 || (b = v + r),
                            $ !== u || s !== 0 && $.nodeType !== 3 || (A = v + s),
                            $.nodeType === 3 && (v += $.nodeValue.length),
                            (Y = $.firstChild) !== null; )
                                H = $,
                                $ = Y;
                            for (; ; ) {
                                if ($ === e)
                                    break t;
                                if (H === a && ++U === r && (b = v),
                                H === u && ++X === s && (A = v),
                                (Y = $.nextSibling) !== null)
                                    break;
                                $ = H,
                                H = $.parentNode
                            }
                            $ = Y
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
        for (Iu = {
            focusedElem: e,
            selectionRange: a
        },
        Oo = !1,
        Nt = t; Nt !== null; )
            if (t = Nt,
            e = t.child,
            (t.subtreeFlags & 1024) !== 0 && e !== null)
                e.return = t,
                Nt = e;
            else
                for (; Nt !== null; ) {
                    switch (t = Nt,
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
                            s = a.stateNode;
                            try {
                                var ye = Jn(a.type, r, a.elementType === a.type);
                                e = s.getSnapshotBeforeUpdate(ye, u),
                                s.__reactInternalSnapshotBeforeUpdate = e
                            } catch (pe) {
                                Qe(a, a.return, pe)
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
                        Nt = e;
                        break
                    }
                    Nt = t.return
                }
    }
    function im(e, t, a) {
        var s = a.flags;
        switch (a.tag) {
        case 0:
        case 11:
        case 15:
            xn(e, a),
            s & 4 && Vi(5, a);
            break;
        case 1:
            if (xn(e, a),
            s & 4)
                if (e = a.stateNode,
                t === null)
                    try {
                        e.componentDidMount()
                    } catch (v) {
                        Qe(a, a.return, v)
                    }
                else {
                    var r = Jn(a.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(r, t, e.__reactInternalSnapshotBeforeUpdate)
                    } catch (v) {
                        Qe(a, a.return, v)
                    }
                }
            s & 64 && Wh(a),
            s & 512 && zi(a, a.return);
            break;
        case 3:
            if (xn(e, a),
            s & 64 && (e = a.updateQueue,
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
                    Hd(e, t)
                } catch (v) {
                    Qe(a, a.return, v)
                }
            }
            break;
        case 27:
            t === null && s & 4 && nm(a);
        case 26:
        case 5:
            xn(e, a),
            t === null && s & 4 && tm(a),
            s & 512 && zi(a, a.return);
            break;
        case 12:
            xn(e, a);
            break;
        case 13:
            xn(e, a),
            s & 4 && rm(e, a),
            s & 64 && (e = a.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null && (a = px.bind(null, a),
            Rx(e, a))));
            break;
        case 22:
            if (s = a.memoizedState !== null || en,
            !s) {
                t = t !== null && t.memoizedState !== null || dt,
                r = en;
                var u = dt;
                en = s,
                (dt = t) && !u ? bn(e, a, (a.subtreeFlags & 8772) !== 0) : xn(e, a),
                en = r,
                dt = u
            }
            break;
        case 30:
            break;
        default:
            xn(e, a)
        }
    }
    function sm(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        sm(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && cl(t)),
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
      , qt = !1;
    function tn(e, t, a) {
        for (a = a.child; a !== null; )
            om(e, t, a),
            a = a.sibling
    }
    function om(e, t, a) {
        if (Je && typeof Je.onCommitFiberUnmount == "function")
            try {
                Je.onCommitFiberUnmount(je, a)
            } catch {}
        switch (a.tag) {
        case 26:
            dt || Da(a, t),
            tn(e, t, a),
            a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode,
            a.parentNode.removeChild(a));
            break;
        case 27:
            dt || Da(a, t);
            var s = Ie
              , r = qt;
            Nn(a.type) && (Ie = a.stateNode,
            qt = !1),
            tn(e, t, a),
            Gi(a.stateNode),
            Ie = s,
            qt = r;
            break;
        case 5:
            dt || Da(a, t);
        case 6:
            if (s = Ie,
            r = qt,
            Ie = null,
            tn(e, t, a),
            Ie = s,
            qt = r,
            Ie !== null)
                if (qt)
                    try {
                        (Ie.nodeType === 9 ? Ie.body : Ie.nodeName === "HTML" ? Ie.ownerDocument.body : Ie).removeChild(a.stateNode)
                    } catch (u) {
                        Qe(a, t, u)
                    }
                else
                    try {
                        Ie.removeChild(a.stateNode)
                    } catch (u) {
                        Qe(a, t, u)
                    }
            break;
        case 18:
            Ie !== null && (qt ? (e = Ie,
            Fm(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, a.stateNode),
            $i(e)) : Fm(Ie, a.stateNode));
            break;
        case 4:
            s = Ie,
            r = qt,
            Ie = a.stateNode.containerInfo,
            qt = !0,
            tn(e, t, a),
            Ie = s,
            qt = r;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            dt || vn(2, a, t),
            dt || vn(4, a, t),
            tn(e, t, a);
            break;
        case 1:
            dt || (Da(a, t),
            s = a.stateNode,
            typeof s.componentWillUnmount == "function" && em(a, t, s)),
            tn(e, t, a);
            break;
        case 21:
            tn(e, t, a);
            break;
        case 22:
            dt = (s = dt) || a.memoizedState !== null,
            tn(e, t, a),
            dt = s;
            break;
        default:
            tn(e, t, a)
        }
    }
    function rm(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null))))
            try {
                $i(e)
            } catch (a) {
                Qe(t, t.return, a)
            }
    }
    function ox(e) {
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
        var a = ox(e);
        t.forEach(function(s) {
            var r = gx.bind(null, e, s);
            a.has(s) || (a.add(s),
            s.then(r, r))
        })
    }
    function Jt(e, t) {
        var a = t.deletions;
        if (a !== null)
            for (var s = 0; s < a.length; s++) {
                var r = a[s]
                  , u = e
                  , v = t
                  , b = v;
                e: for (; b !== null; ) {
                    switch (b.tag) {
                    case 27:
                        if (Nn(b.type)) {
                            Ie = b.stateNode,
                            qt = !1;
                            break e
                        }
                        break;
                    case 5:
                        Ie = b.stateNode,
                        qt = !1;
                        break e;
                    case 3:
                    case 4:
                        Ie = b.stateNode.containerInfo,
                        qt = !0;
                        break e
                    }
                    b = b.return
                }
                if (Ie === null)
                    throw Error(o(160));
                om(u, v, r),
                Ie = null,
                qt = !1,
                u = r.alternate,
                u !== null && (u.return = null),
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
          , s = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            Jt(t, e),
            It(e),
            s & 4 && (vn(3, e, e.return),
            Vi(3, e),
            vn(5, e, e.return));
            break;
        case 1:
            Jt(t, e),
            It(e),
            s & 512 && (dt || a === null || Da(a, a.return)),
            s & 64 && en && (e = e.updateQueue,
            e !== null && (s = e.callbacks,
            s !== null && (a = e.shared.hiddenCallbacks,
            e.shared.hiddenCallbacks = a === null ? s : a.concat(s))));
            break;
        case 26:
            var r = Sa;
            if (Jt(t, e),
            It(e),
            s & 512 && (dt || a === null || Da(a, a.return)),
            s & 4) {
                var u = a !== null ? a.memoizedState : null;
                if (s = e.memoizedState,
                a === null)
                    if (s === null)
                        if (e.stateNode === null) {
                            e: {
                                s = e.type,
                                a = e.memoizedProps,
                                r = r.ownerDocument || r;
                                t: switch (s) {
                                case "title":
                                    u = r.getElementsByTagName("title")[0],
                                    (!u || u[un] || u[bt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = r.createElement(s),
                                    r.head.insertBefore(u, r.querySelector("head > title"))),
                                    Mt(u, s, a),
                                    u[bt] = e,
                                    be(u),
                                    s = u;
                                    break e;
                                case "link":
                                    var v = np("link", "href", r).get(s + (a.href || ""));
                                    if (v) {
                                        for (var b = 0; b < v.length; b++)
                                            if (u = v[b],
                                            u.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && u.getAttribute("rel") === (a.rel == null ? null : a.rel) && u.getAttribute("title") === (a.title == null ? null : a.title) && u.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                v.splice(b, 1);
                                                break t
                                            }
                                    }
                                    u = r.createElement(s),
                                    Mt(u, s, a),
                                    r.head.appendChild(u);
                                    break;
                                case "meta":
                                    if (v = np("meta", "content", r).get(s + (a.content || ""))) {
                                        for (b = 0; b < v.length; b++)
                                            if (u = v[b],
                                            u.getAttribute("content") === (a.content == null ? null : "" + a.content) && u.getAttribute("name") === (a.name == null ? null : a.name) && u.getAttribute("property") === (a.property == null ? null : a.property) && u.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && u.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                v.splice(b, 1);
                                                break t
                                            }
                                    }
                                    u = r.createElement(s),
                                    Mt(u, s, a),
                                    r.head.appendChild(u);
                                    break;
                                default:
                                    throw Error(o(468, s))
                                }
                                u[bt] = e,
                                be(u),
                                s = u
                            }
                            e.stateNode = s
                        } else
                            lp(r, e.type, e.stateNode);
                    else
                        e.stateNode = ap(r, s, e.memoizedProps);
                else
                    u !== s ? (u === null ? a.stateNode !== null && (a = a.stateNode,
                    a.parentNode.removeChild(a)) : u.count--,
                    s === null ? lp(r, e.type, e.stateNode) : ap(r, s, e.memoizedProps)) : s === null && e.stateNode !== null && ju(e, e.memoizedProps, a.memoizedProps)
            }
            break;
        case 27:
            Jt(t, e),
            It(e),
            s & 512 && (dt || a === null || Da(a, a.return)),
            a !== null && s & 4 && ju(e, e.memoizedProps, a.memoizedProps);
            break;
        case 5:
            if (Jt(t, e),
            It(e),
            s & 512 && (dt || a === null || Da(a, a.return)),
            e.flags & 32) {
                r = e.stateNode;
                try {
                    hl(r, "")
                } catch (Y) {
                    Qe(e, e.return, Y)
                }
            }
            s & 4 && e.stateNode != null && (r = e.memoizedProps,
            ju(e, r, a !== null ? a.memoizedProps : r)),
            s & 1024 && (Nu = !0);
            break;
        case 6:
            if (Jt(t, e),
            It(e),
            s & 4) {
                if (e.stateNode === null)
                    throw Error(o(162));
                s = e.memoizedProps,
                a = e.stateNode;
                try {
                    a.nodeValue = s
                } catch (Y) {
                    Qe(e, e.return, Y)
                }
            }
            break;
        case 3:
            if (Do = null,
            r = Sa,
            Sa = Eo(t.containerInfo),
            Jt(t, e),
            Sa = r,
            It(e),
            s & 4 && a !== null && a.memoizedState.isDehydrated)
                try {
                    $i(t.containerInfo)
                } catch (Y) {
                    Qe(e, e.return, Y)
                }
            Nu && (Nu = !1,
            cm(e));
            break;
        case 4:
            s = Sa,
            Sa = Eo(e.stateNode.containerInfo),
            Jt(t, e),
            It(e),
            Sa = s;
            break;
        case 12:
            Jt(t, e),
            It(e);
            break;
        case 13:
            Jt(t, e),
            It(e),
            e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Ru = ot()),
            s & 4 && (s = e.updateQueue,
            s !== null && (e.updateQueue = null,
            Eu(e, s)));
            break;
        case 22:
            r = e.memoizedState !== null;
            var A = a !== null && a.memoizedState !== null
              , U = en
              , X = dt;
            if (en = U || r,
            dt = X || A,
            Jt(t, e),
            dt = X,
            en = U,
            It(e),
            s & 8192)
                e: for (t = e.stateNode,
                t._visibility = r ? t._visibility & -2 : t._visibility | 1,
                r && (a === null || A || en || dt || In(e)),
                a = null,
                t = e; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (a === null) {
                            A = a = t;
                            try {
                                if (u = A.stateNode,
                                r)
                                    v = u.style,
                                    typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : v.display = "none";
                                else {
                                    b = A.stateNode;
                                    var $ = A.memoizedProps.style
                                      , H = $ != null && $.hasOwnProperty("display") ? $.display : null;
                                    b.style.display = H == null || typeof H == "boolean" ? "" : ("" + H).trim()
                                }
                            } catch (Y) {
                                Qe(A, A.return, Y)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (a === null) {
                            A = t;
                            try {
                                A.stateNode.nodeValue = r ? "" : A.memoizedProps
                            } catch (Y) {
                                Qe(A, A.return, Y)
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
            s & 4 && (s = e.updateQueue,
            s !== null && (a = s.retryQueue,
            a !== null && (s.retryQueue = null,
            Eu(e, a))));
            break;
        case 19:
            Jt(t, e),
            It(e),
            s & 4 && (s = e.updateQueue,
            s !== null && (e.updateQueue = null,
            Eu(e, s)));
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
                for (var a, s = e.return; s !== null; ) {
                    if (am(s)) {
                        a = s;
                        break
                    }
                    s = s.return
                }
                if (a == null)
                    throw Error(o(160));
                switch (a.tag) {
                case 27:
                    var r = a.stateNode
                      , u = wu(e);
                    mo(e, u, r);
                    break;
                case 5:
                    var v = a.stateNode;
                    a.flags & 32 && (hl(v, ""),
                    a.flags &= -33);
                    var b = wu(e);
                    mo(e, b, v);
                    break;
                case 3:
                case 4:
                    var A = a.stateNode.containerInfo
                      , U = wu(e);
                    Au(e, U, A);
                    break;
                default:
                    throw Error(o(161))
                }
            } catch (X) {
                Qe(e, e.return, X)
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
    function xn(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                im(e, t.alternate, t),
                t = t.sibling
    }
    function In(e) {
        for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                vn(4, t, t.return),
                In(t);
                break;
            case 1:
                Da(t, t.return);
                var a = t.stateNode;
                typeof a.componentWillUnmount == "function" && em(t, t.return, a),
                In(t);
                break;
            case 27:
                Gi(t.stateNode);
            case 26:
            case 5:
                Da(t, t.return),
                In(t);
                break;
            case 22:
                t.memoizedState === null && In(t);
                break;
            case 30:
                In(t);
                break;
            default:
                In(t)
            }
            e = e.sibling
        }
    }
    function bn(e, t, a) {
        for (a = a && (t.subtreeFlags & 8772) !== 0,
        t = t.child; t !== null; ) {
            var s = t.alternate
              , r = e
              , u = t
              , v = u.flags;
            switch (u.tag) {
            case 0:
            case 11:
            case 15:
                bn(r, u, a),
                Vi(4, u);
                break;
            case 1:
                if (bn(r, u, a),
                s = u,
                r = s.stateNode,
                typeof r.componentDidMount == "function")
                    try {
                        r.componentDidMount()
                    } catch (U) {
                        Qe(s, s.return, U)
                    }
                if (s = u,
                r = s.updateQueue,
                r !== null) {
                    var b = s.stateNode;
                    try {
                        var A = r.shared.hiddenCallbacks;
                        if (A !== null)
                            for (r.shared.hiddenCallbacks = null,
                            r = 0; r < A.length; r++)
                                kd(A[r], b)
                    } catch (U) {
                        Qe(s, s.return, U)
                    }
                }
                a && v & 64 && Wh(u),
                zi(u, u.return);
                break;
            case 27:
                nm(u);
            case 26:
            case 5:
                bn(r, u, a),
                a && s === null && v & 4 && tm(u),
                zi(u, u.return);
                break;
            case 12:
                bn(r, u, a);
                break;
            case 13:
                bn(r, u, a),
                a && v & 4 && rm(r, u);
                break;
            case 22:
                u.memoizedState === null && bn(r, u, a),
                zi(u, u.return);
                break;
            case 30:
                break;
            default:
                bn(r, u, a)
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
        a != null && bi(a))
    }
    function Du(e, t) {
        e = null,
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== e && (t.refCount++,
        e != null && bi(e))
    }
    function _a(e, t, a, s) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                fm(e, t, a, s),
                t = t.sibling
    }
    function fm(e, t, a, s) {
        var r = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            _a(e, t, a, s),
            r & 2048 && Vi(9, t);
            break;
        case 1:
            _a(e, t, a, s);
            break;
        case 3:
            _a(e, t, a, s),
            r & 2048 && (e = null,
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== e && (t.refCount++,
            e != null && bi(e)));
            break;
        case 12:
            if (r & 2048) {
                _a(e, t, a, s),
                e = t.stateNode;
                try {
                    var u = t.memoizedProps
                      , v = u.id
                      , b = u.onPostCommit;
                    typeof b == "function" && b(v, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                } catch (A) {
                    Qe(t, t.return, A)
                }
            } else
                _a(e, t, a, s);
            break;
        case 13:
            _a(e, t, a, s);
            break;
        case 23:
            break;
        case 22:
            u = t.stateNode,
            v = t.alternate,
            t.memoizedState !== null ? u._visibility & 2 ? _a(e, t, a, s) : Ui(e, t) : u._visibility & 2 ? _a(e, t, a, s) : (u._visibility |= 2,
            Ol(e, t, a, s, (t.subtreeFlags & 10256) !== 0)),
            r & 2048 && Cu(v, t);
            break;
        case 24:
            _a(e, t, a, s),
            r & 2048 && Du(t.alternate, t);
            break;
        default:
            _a(e, t, a, s)
        }
    }
    function Ol(e, t, a, s, r) {
        for (r = r && (t.subtreeFlags & 10256) !== 0,
        t = t.child; t !== null; ) {
            var u = e
              , v = t
              , b = a
              , A = s
              , U = v.flags;
            switch (v.tag) {
            case 0:
            case 11:
            case 15:
                Ol(u, v, b, A, r),
                Vi(8, v);
                break;
            case 23:
                break;
            case 22:
                var X = v.stateNode;
                v.memoizedState !== null ? X._visibility & 2 ? Ol(u, v, b, A, r) : Ui(u, v) : (X._visibility |= 2,
                Ol(u, v, b, A, r)),
                r && U & 2048 && Cu(v.alternate, v);
                break;
            case 24:
                Ol(u, v, b, A, r),
                r && U & 2048 && Du(v.alternate, v);
                break;
            default:
                Ol(u, v, b, A, r)
            }
            t = t.sibling
        }
    }
    function Ui(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var a = e
                  , s = t
                  , r = s.flags;
                switch (s.tag) {
                case 22:
                    Ui(a, s),
                    r & 2048 && Cu(s.alternate, s);
                    break;
                case 24:
                    Ui(a, s),
                    r & 2048 && Du(s.alternate, s);
                    break;
                default:
                    Ui(a, s)
                }
                t = t.sibling
            }
    }
    var Bi = 8192;
    function Rl(e) {
        if (e.subtreeFlags & Bi)
            for (e = e.child; e !== null; )
                dm(e),
                e = e.sibling
    }
    function dm(e) {
        switch (e.tag) {
        case 26:
            Rl(e),
            e.flags & Bi && e.memoizedState !== null && Kx(Sa, e.memoizedState, e.memoizedProps);
            break;
        case 5:
            Rl(e);
            break;
        case 3:
        case 4:
            var t = Sa;
            Sa = Eo(e.stateNode.containerInfo),
            Rl(e),
            Sa = t;
            break;
        case 22:
            e.memoizedState === null && (t = e.alternate,
            t !== null && t.memoizedState !== null ? (t = Bi,
            Bi = 16777216,
            Rl(e),
            Bi = t) : Rl(e));
            break;
        default:
            Rl(e)
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
    function Li(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    Nt = s,
                    pm(s, e)
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
            Li(e),
            e.flags & 2048 && vn(9, e, e.return);
            break;
        case 3:
            Li(e);
            break;
        case 12:
            Li(e);
            break;
        case 22:
            var t = e.stateNode;
            e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3,
            po(e)) : Li(e);
            break;
        default:
            Li(e)
        }
    }
    function po(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    Nt = s,
                    pm(s, e)
                }
            hm(e)
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
    function pm(e, t) {
        for (; Nt !== null; ) {
            var a = Nt;
            switch (a.tag) {
            case 0:
            case 11:
            case 15:
                vn(8, a, t);
                break;
            case 23:
            case 22:
                if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                    var s = a.memoizedState.cachePool.pool;
                    s != null && s.refCount++
                }
                break;
            case 24:
                bi(a.memoizedState.cache)
            }
            if (s = a.child,
            s !== null)
                s.return = a,
                Nt = s;
            else
                e: for (a = e; Nt !== null; ) {
                    s = Nt;
                    var r = s.sibling
                      , u = s.return;
                    if (sm(s),
                    s === a) {
                        Nt = null;
                        break e
                    }
                    if (r !== null) {
                        r.return = u,
                        Nt = r;
                        break e
                    }
                    Nt = u
                }
        }
    }
    var rx = {
        getCacheForType: function(e) {
            var t = Vt(St)
              , a = t.data.get(e);
            return a === void 0 && (a = e(),
            t.data.set(e, a)),
            a
        }
    }
      , ux = typeof WeakMap == "function" ? WeakMap : Map
      , Ye = 0
      , Fe = null
      , Me = null
      , ze = 0
      , Ge = 0
      , $t = null
      , Sn = !1
      , Vl = !1
      , _u = !1
      , an = 0
      , lt = 0
      , Tn = 0
      , $n = 0
      , Mu = 0
      , ca = 0
      , zl = 0
      , ki = null
      , Yt = null
      , Ou = !1
      , Ru = 0
      , go = 1 / 0
      , yo = null
      , jn = null
      , _t = 0
      , wn = null
      , Ul = null
      , Bl = 0
      , Vu = 0
      , zu = null
      , gm = null
      , Hi = 0
      , Uu = null;
    function Wt() {
        if ((Ye & 2) !== 0 && ze !== 0)
            return ze & -ze;
        if (E.T !== null) {
            var e = wl;
            return e !== 0 ? e : Yu()
        }
        return li()
    }
    function ym() {
        ca === 0 && (ca = (ze & 536870912) === 0 || He ? xt() : 536870912);
        var e = ua.current;
        return e !== null && (e.flags |= 32),
        ca
    }
    function ea(e, t, a) {
        (e === Fe && (Ge === 2 || Ge === 9) || e.cancelPendingCommit !== null) && (Ll(e, 0),
        An(e, ze, ca, !1)),
        mt(e, a),
        ((Ye & 2) === 0 || e !== Fe) && (e === Fe && ((Ye & 2) === 0 && ($n |= a),
        lt === 4 && An(e, ze, ca, !1)),
        Ma(e))
    }
    function vm(e, t, a) {
        if ((Ye & 6) !== 0)
            throw Error(o(327));
        var s = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Re(e, t)
          , r = s ? dx(e, t) : ku(e, t, !0)
          , u = s;
        do {
            if (r === 0) {
                Vl && !s && An(e, t, 0, !1);
                break
            } else {
                if (a = e.current.alternate,
                u && !cx(a)) {
                    r = ku(e, t, !1),
                    u = !1;
                    continue
                }
                if (r === 2) {
                    if (u = t,
                    e.errorRecoveryDisabledLanes & u)
                        var v = 0;
                    else
                        v = e.pendingLanes & -536870913,
                        v = v !== 0 ? v : v & 536870912 ? 536870912 : 0;
                    if (v !== 0) {
                        t = v;
                        e: {
                            var b = e;
                            r = ki;
                            var A = b.current.memoizedState.isDehydrated;
                            if (A && (Ll(b, v).flags |= 256),
                            v = ku(b, v, !1),
                            v !== 2) {
                                if (_u && !A) {
                                    b.errorRecoveryDisabledLanes |= u,
                                    $n |= u,
                                    r = 4;
                                    break e
                                }
                                u = Yt,
                                Yt = r,
                                u !== null && (Yt === null ? Yt = u : Yt.push.apply(Yt, u))
                            }
                            r = v
                        }
                        if (u = !1,
                        r !== 2)
                            continue
                    }
                }
                if (r === 1) {
                    Ll(e, 0),
                    An(e, t, 0, !0);
                    break
                }
                e: {
                    switch (s = e,
                    u = r,
                    u) {
                    case 0:
                    case 1:
                        throw Error(o(345));
                    case 4:
                        if ((t & 4194048) !== t)
                            break;
                    case 6:
                        An(s, t, ca, !Sn);
                        break e;
                    case 2:
                        Yt = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(o(329))
                    }
                    if ((t & 62914560) === t && (r = Ru + 300 - ot(),
                    10 < r)) {
                        if (An(s, t, ca, !Sn),
                        We(s, 0, !0) !== 0)
                            break e;
                        s.timeoutHandle = Zm(xm.bind(null, s, a, Yt, yo, Ou, t, ca, $n, zl, Sn, u, 2, -0, 0), r);
                        break e
                    }
                    xm(s, a, Yt, yo, Ou, t, ca, $n, zl, Sn, u, 0, -0, 0)
                }
            }
            break
        } while (!0);
        Ma(e)
    }
    function xm(e, t, a, s, r, u, v, b, A, U, X, $, H, Y) {
        if (e.timeoutHandle = -1,
        $ = t.subtreeFlags,
        ($ & 8192 || ($ & 16785408) === 16785408) && (Zi = {
            stylesheets: null,
            count: 0,
            unsuspend: Xx
        },
        dm(t),
        $ = Zx(),
        $ !== null)) {
            e.cancelPendingCommit = $(Nm.bind(null, e, t, u, a, s, r, v, b, A, X, 1, H, Y)),
            An(e, u, v, !U);
            return
        }
        Nm(e, t, u, a, s, r, v, b, A)
    }
    function cx(e) {
        for (var t = e; ; ) {
            var a = t.tag;
            if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue,
            a !== null && (a = a.stores,
            a !== null)))
                for (var s = 0; s < a.length; s++) {
                    var r = a[s]
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
    function An(e, t, a, s) {
        t &= ~Mu,
        t &= ~$n,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        s && (e.warmLanes |= t),
        s = e.expirationTimes;
        for (var r = t; 0 < r; ) {
            var u = 31 - rt(r)
              , v = 1 << u;
            s[u] = -1,
            r &= ~v
        }
        a !== 0 && ai(e, a, t)
    }
    function vo() {
        return (Ye & 6) === 0 ? (Pi(0),
        !1) : !0
    }
    function Bu() {
        if (Me !== null) {
            if (Ge === 0)
                var e = Me.return;
            else
                e = Me,
                Qa = Kn = null,
                eu(e),
                _l = null,
                Mi = 0,
                e = Me;
            for (; e !== null; )
                $h(e.alternate, e),
                e = e.return;
            Me = null
        }
    }
    function Ll(e, t) {
        var a = e.timeoutHandle;
        a !== -1 && (e.timeoutHandle = -1,
        Cx(a)),
        a = e.cancelPendingCommit,
        a !== null && (e.cancelPendingCommit = null,
        a()),
        Bu(),
        Fe = e,
        Me = a = Xa(e.current, null),
        ze = t,
        Ge = 0,
        $t = null,
        Sn = !1,
        Vl = Re(e, t),
        _u = !1,
        zl = ca = Mu = $n = Tn = lt = 0,
        Yt = ki = null,
        Ou = !1,
        (t & 8) !== 0 && (t |= t & 32);
        var s = e.entangledLanes;
        if (s !== 0)
            for (e = e.entanglements,
            s &= t; 0 < s; ) {
                var r = 31 - rt(s)
                  , u = 1 << r;
                t |= e[r],
                s &= ~u
            }
        return an = t,
        ks(),
        a
    }
    function bm(e, t) {
        De = null,
        E.H = lo,
        t === Ti || t === Qs ? (t = Bd(),
        Ge = 3) : t === Vd ? (t = Bd(),
        Ge = 4) : Ge = t === Lh ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
        $t = t,
        Me === null && (lt = 1,
        uo(e, ia(t, e.current)))
    }
    function Sm() {
        var e = E.H;
        return E.H = lo,
        e === null ? lo : e
    }
    function Tm() {
        var e = E.A;
        return E.A = rx,
        e
    }
    function Lu() {
        lt = 4,
        Sn || (ze & 4194048) !== ze && ua.current !== null || (Vl = !0),
        (Tn & 134217727) === 0 && ($n & 134217727) === 0 || Fe === null || An(Fe, ze, ca, !1)
    }
    function ku(e, t, a) {
        var s = Ye;
        Ye |= 2;
        var r = Sm()
          , u = Tm();
        (Fe !== e || ze !== t) && (yo = null,
        Ll(e, t)),
        t = !1;
        var v = lt;
        e: do
            try {
                if (Ge !== 0 && Me !== null) {
                    var b = Me
                      , A = $t;
                    switch (Ge) {
                    case 8:
                        Bu(),
                        v = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        ua.current === null && (t = !0);
                        var U = Ge;
                        if (Ge = 0,
                        $t = null,
                        kl(e, b, A, U),
                        a && Vl) {
                            v = 0;
                            break e
                        }
                        break;
                    default:
                        U = Ge,
                        Ge = 0,
                        $t = null,
                        kl(e, b, A, U)
                    }
                }
                fx(),
                v = lt;
                break
            } catch (X) {
                bm(e, X)
            }
        while (!0);
        return t && e.shellSuspendCounter++,
        Qa = Kn = null,
        Ye = s,
        E.H = r,
        E.A = u,
        Me === null && (Fe = null,
        ze = 0,
        ks()),
        v
    }
    function fx() {
        for (; Me !== null; )
            jm(Me)
    }
    function dx(e, t) {
        var a = Ye;
        Ye |= 2;
        var s = Sm()
          , r = Tm();
        Fe !== e || ze !== t ? (yo = null,
        go = ot() + 500,
        Ll(e, t)) : Vl = Re(e, t);
        e: do
            try {
                if (Ge !== 0 && Me !== null) {
                    t = Me;
                    var u = $t;
                    t: switch (Ge) {
                    case 1:
                        Ge = 0,
                        $t = null,
                        kl(e, t, u, 1);
                        break;
                    case 2:
                    case 9:
                        if (zd(u)) {
                            Ge = 0,
                            $t = null,
                            wm(t);
                            break
                        }
                        t = function() {
                            Ge !== 2 && Ge !== 9 || Fe !== e || (Ge = 7),
                            Ma(e)
                        }
                        ,
                        u.then(t, t);
                        break e;
                    case 3:
                        Ge = 7;
                        break e;
                    case 4:
                        Ge = 5;
                        break e;
                    case 7:
                        zd(u) ? (Ge = 0,
                        $t = null,
                        wm(t)) : (Ge = 0,
                        $t = null,
                        kl(e, t, u, 7));
                        break;
                    case 5:
                        var v = null;
                        switch (Me.tag) {
                        case 26:
                            v = Me.memoizedState;
                        case 5:
                        case 27:
                            var b = Me;
                            if (!v || ip(v)) {
                                Ge = 0,
                                $t = null;
                                var A = b.sibling;
                                if (A !== null)
                                    Me = A;
                                else {
                                    var U = b.return;
                                    U !== null ? (Me = U,
                                    xo(U)) : Me = null
                                }
                                break t
                            }
                        }
                        Ge = 0,
                        $t = null,
                        kl(e, t, u, 5);
                        break;
                    case 6:
                        Ge = 0,
                        $t = null,
                        kl(e, t, u, 6);
                        break;
                    case 8:
                        Bu(),
                        lt = 6;
                        break e;
                    default:
                        throw Error(o(462))
                    }
                }
                hx();
                break
            } catch (X) {
                bm(e, X)
            }
        while (!0);
        return Qa = Kn = null,
        E.H = s,
        E.A = r,
        Ye = a,
        Me !== null ? 0 : (Fe = null,
        ze = 0,
        ks(),
        lt)
    }
    function hx() {
        for (; Me !== null && !$e(); )
            jm(Me)
    }
    function jm(e) {
        var t = Jh(e.alternate, e, an);
        e.memoizedProps = e.pendingProps,
        t === null ? xo(e) : Me = t
    }
    function wm(e) {
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
            t = Me = Ad(t, an),
            t = Jh(a, t, an)
        }
        e.memoizedProps = e.pendingProps,
        t === null ? xo(e) : Me = t
    }
    function kl(e, t, a, s) {
        Qa = Kn = null,
        eu(t),
        _l = null,
        Mi = 0;
        var r = t.return;
        try {
            if (ax(e, r, t, a, ze)) {
                lt = 1,
                uo(e, ia(a, e.current)),
                Me = null;
                return
            }
        } catch (u) {
            if (r !== null)
                throw Me = r,
                u;
            lt = 1,
            uo(e, ia(a, e.current)),
            Me = null;
            return
        }
        t.flags & 32768 ? (He || s === 1 ? e = !0 : Vl || (ze & 536870912) !== 0 ? e = !1 : (Sn = e = !0,
        (s === 2 || s === 9 || s === 3 || s === 6) && (s = ua.current,
        s !== null && s.tag === 13 && (s.flags |= 16384))),
        Am(t, e)) : xo(t)
    }
    function xo(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                Am(t, Sn);
                return
            }
            e = t.return;
            var a = lx(t.alternate, t, an);
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
    function Am(e, t) {
        do {
            var a = ix(e.alternate, e);
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
    function Nm(e, t, a, s, r, u, v, b, A) {
        e.cancelPendingCommit = null;
        do
            bo();
        while (_t !== 0);
        if ((Ye & 6) !== 0)
            throw Error(o(327));
        if (t !== null) {
            if (t === e.current)
                throw Error(o(177));
            if (u = t.lanes | t.childLanes,
            u |= Dr,
            kt(e, a, u, v, b, A),
            e === Fe && (Me = Fe = null,
            ze = 0),
            Ul = t,
            wn = e,
            Bl = a,
            Vu = u,
            zu = r,
            gm = s,
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null,
            e.callbackPriority = 0,
            yx(Xt, function() {
                return Mm(),
                null
            })) : (e.callbackNode = null,
            e.callbackPriority = 0),
            s = (t.flags & 13878) !== 0,
            (t.subtreeFlags & 13878) !== 0 || s) {
                s = E.T,
                E.T = null,
                r = O.p,
                O.p = 2,
                v = Ye,
                Ye |= 4;
                try {
                    sx(e, t, a)
                } finally {
                    Ye = v,
                    O.p = r,
                    E.T = s
                }
            }
            _t = 1,
            Em(),
            Cm(),
            Dm()
        }
    }
    function Em() {
        if (_t === 1) {
            _t = 0;
            var e = wn
              , t = Ul
              , a = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || a) {
                a = E.T,
                E.T = null;
                var s = O.p;
                O.p = 2;
                var r = Ye;
                Ye |= 4;
                try {
                    um(t, e);
                    var u = Iu
                      , v = pd(e.containerInfo)
                      , b = u.focusedElem
                      , A = u.selectionRange;
                    if (v !== b && b && b.ownerDocument && md(b.ownerDocument.documentElement, b)) {
                        if (A !== null && wr(b)) {
                            var U = A.start
                              , X = A.end;
                            if (X === void 0 && (X = U),
                            "selectionStart"in b)
                                b.selectionStart = U,
                                b.selectionEnd = Math.min(X, b.value.length);
                            else {
                                var $ = b.ownerDocument || document
                                  , H = $ && $.defaultView || window;
                                if (H.getSelection) {
                                    var Y = H.getSelection()
                                      , ye = b.textContent.length
                                      , pe = Math.min(A.start, ye)
                                      , Ze = A.end === void 0 ? pe : Math.min(A.end, ye);
                                    !Y.extend && pe > Ze && (v = Ze,
                                    Ze = pe,
                                    pe = v);
                                    var M = hd(b, pe)
                                      , C = hd(b, Ze);
                                    if (M && C && (Y.rangeCount !== 1 || Y.anchorNode !== M.node || Y.anchorOffset !== M.offset || Y.focusNode !== C.node || Y.focusOffset !== C.offset)) {
                                        var z = $.createRange();
                                        z.setStart(M.node, M.offset),
                                        Y.removeAllRanges(),
                                        pe > Ze ? (Y.addRange(z),
                                        Y.extend(C.node, C.offset)) : (z.setEnd(C.node, C.offset),
                                        Y.addRange(z))
                                    }
                                }
                            }
                        }
                        for ($ = [],
                        Y = b; Y = Y.parentNode; )
                            Y.nodeType === 1 && $.push({
                                element: Y,
                                left: Y.scrollLeft,
                                top: Y.scrollTop
                            });
                        for (typeof b.focus == "function" && b.focus(),
                        b = 0; b < $.length; b++) {
                            var J = $[b];
                            J.element.scrollLeft = J.left,
                            J.element.scrollTop = J.top
                        }
                    }
                    Oo = !!Ju,
                    Iu = Ju = null
                } finally {
                    Ye = r,
                    O.p = s,
                    E.T = a
                }
            }
            e.current = t,
            _t = 2
        }
    }
    function Cm() {
        if (_t === 2) {
            _t = 0;
            var e = wn
              , t = Ul
              , a = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || a) {
                a = E.T,
                E.T = null;
                var s = O.p;
                O.p = 2;
                var r = Ye;
                Ye |= 4;
                try {
                    im(e, t.alternate, t)
                } finally {
                    Ye = r,
                    O.p = s,
                    E.T = a
                }
            }
            _t = 3
        }
    }
    function Dm() {
        if (_t === 4 || _t === 3) {
            _t = 0,
            ta();
            var e = wn
              , t = Ul
              , a = Bl
              , s = gm;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? _t = 5 : (_t = 0,
            Ul = wn = null,
            _m(e, e.pendingLanes));
            var r = e.pendingLanes;
            if (r === 0 && (jn = null),
            rl(a),
            t = t.stateNode,
            Je && typeof Je.onCommitFiberRoot == "function")
                try {
                    Je.onCommitFiberRoot(je, t, void 0, (t.current.flags & 128) === 128)
                } catch {}
            if (s !== null) {
                t = E.T,
                r = O.p,
                O.p = 2,
                E.T = null;
                try {
                    for (var u = e.onRecoverableError, v = 0; v < s.length; v++) {
                        var b = s[v];
                        u(b.value, {
                            componentStack: b.stack
                        })
                    }
                } finally {
                    E.T = t,
                    O.p = r
                }
            }
            (Bl & 3) !== 0 && bo(),
            Ma(e),
            r = e.pendingLanes,
            (a & 4194090) !== 0 && (r & 42) !== 0 ? e === Uu ? Hi++ : (Hi = 0,
            Uu = e) : Hi = 0,
            Pi(0)
        }
    }
    function _m(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache,
        t != null && (e.pooledCache = null,
        bi(t)))
    }
    function bo(e) {
        return Em(),
        Cm(),
        Dm(),
        Mm()
    }
    function Mm() {
        if (_t !== 5)
            return !1;
        var e = wn
          , t = Vu;
        Vu = 0;
        var a = rl(Bl)
          , s = E.T
          , r = O.p;
        try {
            O.p = 32 > a ? 32 : a,
            E.T = null,
            a = zu,
            zu = null;
            var u = wn
              , v = Bl;
            if (_t = 0,
            Ul = wn = null,
            Bl = 0,
            (Ye & 6) !== 0)
                throw Error(o(331));
            var b = Ye;
            if (Ye |= 4,
            mm(u.current),
            fm(u, u.current, v, a),
            Ye = b,
            Pi(0, !1),
            Je && typeof Je.onPostCommitFiberRoot == "function")
                try {
                    Je.onPostCommitFiberRoot(je, u)
                } catch {}
            return !0
        } finally {
            O.p = r,
            E.T = s,
            _m(e, t)
        }
    }
    function Om(e, t, a) {
        t = ia(a, t),
        t = mu(e.stateNode, t, 2),
        e = mn(e, t, 2),
        e !== null && (mt(e, 2),
        Ma(e))
    }
    function Qe(e, t, a) {
        if (e.tag === 3)
            Om(e, e, a);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    Om(t, e, a);
                    break
                } else if (t.tag === 1) {
                    var s = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (jn === null || !jn.has(s))) {
                        e = ia(a, e),
                        a = Uh(2),
                        s = mn(t, a, 2),
                        s !== null && (Bh(a, s, t, e),
                        mt(s, 2),
                        Ma(s));
                        break
                    }
                }
                t = t.return
            }
    }
    function Hu(e, t, a) {
        var s = e.pingCache;
        if (s === null) {
            s = e.pingCache = new ux;
            var r = new Set;
            s.set(t, r)
        } else
            r = s.get(t),
            r === void 0 && (r = new Set,
            s.set(t, r));
        r.has(a) || (_u = !0,
        r.add(a),
        e = mx.bind(null, e, t, a),
        t.then(e, e))
    }
    function mx(e, t, a) {
        var s = e.pingCache;
        s !== null && s.delete(t),
        e.pingedLanes |= e.suspendedLanes & a,
        e.warmLanes &= ~a,
        Fe === e && (ze & a) === a && (lt === 4 || lt === 3 && (ze & 62914560) === ze && 300 > ot() - Ru ? (Ye & 2) === 0 && Ll(e, 0) : Mu |= a,
        zl === ze && (zl = 0)),
        Ma(e)
    }
    function Rm(e, t) {
        t === 0 && (t = ne()),
        e = bl(e, t),
        e !== null && (mt(e, t),
        Ma(e))
    }
    function px(e) {
        var t = e.memoizedState
          , a = 0;
        t !== null && (a = t.retryLane),
        Rm(e, a)
    }
    function gx(e, t) {
        var a = 0;
        switch (e.tag) {
        case 13:
            var s = e.stateNode
              , r = e.memoizedState;
            r !== null && (a = r.retryLane);
            break;
        case 19:
            s = e.stateNode;
            break;
        case 22:
            s = e.stateNode._retryCache;
            break;
        default:
            throw Error(o(314))
        }
        s !== null && s.delete(t),
        Rm(e, a)
    }
    function yx(e, t) {
        return jt(e, t)
    }
    var So = null
      , Hl = null
      , Pu = !1
      , To = !1
      , qu = !1
      , Wn = 0;
    function Ma(e) {
        e !== Hl && e.next === null && (Hl === null ? So = Hl = e : Hl = Hl.next = e),
        To = !0,
        Pu || (Pu = !0,
        xx())
    }
    function Pi(e, t) {
        if (!qu && To) {
            qu = !0;
            do
                for (var a = !1, s = So; s !== null; ) {
                    if (e !== 0) {
                        var r = s.pendingLanes;
                        if (r === 0)
                            var u = 0;
                        else {
                            var v = s.suspendedLanes
                              , b = s.pingedLanes;
                            u = (1 << 31 - rt(42 | e) + 1) - 1,
                            u &= r & ~(v & ~b),
                            u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
                        }
                        u !== 0 && (a = !0,
                        Bm(s, u))
                    } else
                        u = ze,
                        u = We(s, s === Fe ? u : 0, s.cancelPendingCommit !== null || s.timeoutHandle !== -1),
                        (u & 3) === 0 || Re(s, u) || (a = !0,
                        Bm(s, u));
                    s = s.next
                }
            while (a);
            qu = !1
        }
    }
    function vx() {
        Vm()
    }
    function Vm() {
        To = Pu = !1;
        var e = 0;
        Wn !== 0 && (Ex() && (e = Wn),
        Wn = 0);
        for (var t = ot(), a = null, s = So; s !== null; ) {
            var r = s.next
              , u = zm(s, t);
            u === 0 ? (s.next = null,
            a === null ? So = r : a.next = r,
            r === null && (Hl = a)) : (a = s,
            (e !== 0 || (u & 3) !== 0) && (To = !0)),
            s = r
        }
        Pi(e)
    }
    function zm(e, t) {
        for (var a = e.suspendedLanes, s = e.pingedLanes, r = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
            var v = 31 - rt(u)
              , b = 1 << v
              , A = r[v];
            A === -1 ? ((b & a) === 0 || (b & s) !== 0) && (r[v] = ut(b, t)) : A <= t && (e.expiredLanes |= b),
            u &= ~b
        }
        if (t = Fe,
        a = ze,
        a = We(e, e === t ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        s = e.callbackNode,
        a === 0 || e === t && (Ge === 2 || Ge === 9) || e.cancelPendingCommit !== null)
            return s !== null && s !== null && Ne(s),
            e.callbackNode = null,
            e.callbackPriority = 0;
        if ((a & 3) === 0 || Re(e, a)) {
            if (t = a & -a,
            t === e.callbackPriority)
                return t;
            switch (s !== null && Ne(s),
            rl(a)) {
            case 2:
            case 8:
                a = wa;
                break;
            case 32:
                a = Xt;
                break;
            case 268435456:
                a = Aa;
                break;
            default:
                a = Xt
            }
            return s = Um.bind(null, e),
            a = jt(a, s),
            e.callbackPriority = t,
            e.callbackNode = a,
            t
        }
        return s !== null && s !== null && Ne(s),
        e.callbackPriority = 2,
        e.callbackNode = null,
        2
    }
    function Um(e, t) {
        if (_t !== 0 && _t !== 5)
            return e.callbackNode = null,
            e.callbackPriority = 0,
            null;
        var a = e.callbackNode;
        if (bo() && e.callbackNode !== a)
            return null;
        var s = ze;
        return s = We(e, e === Fe ? s : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        s === 0 ? null : (vm(e, s, t),
        zm(e, ot()),
        e.callbackNode != null && e.callbackNode === a ? Um.bind(null, e) : null)
    }
    function Bm(e, t) {
        if (bo())
            return null;
        vm(e, t, !0)
    }
    function xx() {
        Dx(function() {
            (Ye & 6) !== 0 ? jt(aa, vx) : Vm()
        })
    }
    function Yu() {
        return Wn === 0 && (Wn = xt()),
        Wn
    }
    function Lm(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Os("" + e)
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
    function bx(e, t, a, s, r) {
        if (t === "submit" && a && a.stateNode === r) {
            var u = Lm((r[Ct] || null).action)
              , v = s.submitter;
            v && (t = (t = v[Ct] || null) ? Lm(t.formAction) : v.getAttribute("formAction"),
            t !== null && (u = t,
            v = null));
            var b = new Us("action","action",null,s,r);
            e.push({
                event: b,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (s.defaultPrevented) {
                            if (Wn !== 0) {
                                var A = v ? km(r, v) : new FormData(r);
                                uu(a, {
                                    pending: !0,
                                    data: A,
                                    method: r.method,
                                    action: u
                                }, null, A)
                            }
                        } else
                            typeof u == "function" && (b.preventDefault(),
                            A = v ? km(r, v) : new FormData(r),
                            uu(a, {
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
    for (var Gu = 0; Gu < Cr.length; Gu++) {
        var Xu = Cr[Gu]
          , Sx = Xu.toLowerCase()
          , Tx = Xu[0].toUpperCase() + Xu.slice(1);
        ba(Sx, "on" + Tx)
    }
    ba(vd, "onAnimationEnd"),
    ba(xd, "onAnimationIteration"),
    ba(bd, "onAnimationStart"),
    ba("dblclick", "onDoubleClick"),
    ba("focusin", "onFocus"),
    ba("focusout", "onBlur"),
    ba(kv, "onTransitionRun"),
    ba(Hv, "onTransitionStart"),
    ba(Pv, "onTransitionCancel"),
    ba(Sd, "onTransitionEnd"),
    qa("onMouseEnter", ["mouseout", "mouseover"]),
    qa("onMouseLeave", ["mouseout", "mouseover"]),
    qa("onPointerEnter", ["pointerout", "pointerover"]),
    qa("onPointerLeave", ["pointerout", "pointerover"]),
    Na("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Na("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Na("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Na("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Na("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Na("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var qi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , jx = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qi));
    function Hm(e, t) {
        t = (t & 4) !== 0;
        for (var a = 0; a < e.length; a++) {
            var s = e[a]
              , r = s.event;
            s = s.listeners;
            e: {
                var u = void 0;
                if (t)
                    for (var v = s.length - 1; 0 <= v; v--) {
                        var b = s[v]
                          , A = b.instance
                          , U = b.currentTarget;
                        if (b = b.listener,
                        A !== u && r.isPropagationStopped())
                            break e;
                        u = b,
                        r.currentTarget = U;
                        try {
                            u(r)
                        } catch (X) {
                            ro(X)
                        }
                        r.currentTarget = null,
                        u = A
                    }
                else
                    for (v = 0; v < s.length; v++) {
                        if (b = s[v],
                        A = b.instance,
                        U = b.currentTarget,
                        b = b.listener,
                        A !== u && r.isPropagationStopped())
                            break e;
                        u = b,
                        r.currentTarget = U;
                        try {
                            u(r)
                        } catch (X) {
                            ro(X)
                        }
                        r.currentTarget = null,
                        u = A
                    }
            }
        }
    }
    function Oe(e, t) {
        var a = t[ul];
        a === void 0 && (a = t[ul] = new Set);
        var s = e + "__bubble";
        a.has(s) || (Pm(t, e, 2, !1),
        a.add(s))
    }
    function Ku(e, t, a) {
        var s = 0;
        t && (s |= 4),
        Pm(a, e, s, t)
    }
    var jo = "_reactListening" + Math.random().toString(36).slice(2);
    function Zu(e) {
        if (!e[jo]) {
            e[jo] = !0,
            qe.forEach(function(a) {
                a !== "selectionchange" && (jx.has(a) || Ku(a, !1, e),
                Ku(a, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[jo] || (t[jo] = !0,
            Ku("selectionchange", !1, t))
        }
    }
    function Pm(e, t, a, s) {
        switch (fp(t)) {
        case 2:
            var r = Jx;
            break;
        case 8:
            r = Ix;
            break;
        default:
            r = oc
        }
        a = r.bind(null, t, a, e),
        r = void 0,
        !pr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (r = !0),
        s ? r !== void 0 ? e.addEventListener(t, a, {
            capture: !0,
            passive: r
        }) : e.addEventListener(t, a, !0) : r !== void 0 ? e.addEventListener(t, a, {
            passive: r
        }) : e.addEventListener(t, a, !1)
    }
    function Qu(e, t, a, s, r) {
        var u = s;
        if ((t & 1) === 0 && (t & 2) === 0 && s !== null)
            e: for (; ; ) {
                if (s === null)
                    return;
                var v = s.tag;
                if (v === 3 || v === 4) {
                    var b = s.stateNode.containerInfo;
                    if (b === r)
                        break;
                    if (v === 4)
                        for (v = s.return; v !== null; ) {
                            var A = v.tag;
                            if ((A === 3 || A === 4) && v.stateNode.containerInfo === r)
                                return;
                            v = v.return
                        }
                    for (; b !== null; ) {
                        if (v = Pa(b),
                        v === null)
                            return;
                        if (A = v.tag,
                        A === 5 || A === 6 || A === 26 || A === 27) {
                            s = u = v;
                            continue e
                        }
                        b = b.parentNode
                    }
                }
                s = s.return
            }
        Qf(function() {
            var U = u
              , X = hr(a)
              , $ = [];
            e: {
                var H = Td.get(e);
                if (H !== void 0) {
                    var Y = Us
                      , ye = e;
                    switch (e) {
                    case "keypress":
                        if (Vs(a) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        Y = yv;
                        break;
                    case "focusin":
                        ye = "focus",
                        Y = xr;
                        break;
                    case "focusout":
                        ye = "blur",
                        Y = xr;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        Y = xr;
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
                        Y = If;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        Y = iv;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        Y = bv;
                        break;
                    case vd:
                    case xd:
                    case bd:
                        Y = rv;
                        break;
                    case Sd:
                        Y = Tv;
                        break;
                    case "scroll":
                    case "scrollend":
                        Y = nv;
                        break;
                    case "wheel":
                        Y = wv;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        Y = cv;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        Y = Wf;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        Y = Nv
                    }
                    var pe = (t & 4) !== 0
                      , Ze = !pe && (e === "scroll" || e === "scrollend")
                      , M = pe ? H !== null ? H + "Capture" : null : H;
                    pe = [];
                    for (var C = U, z; C !== null; ) {
                        var J = C;
                        if (z = J.stateNode,
                        J = J.tag,
                        J !== 5 && J !== 26 && J !== 27 || z === null || M === null || (J = oi(C, M),
                        J != null && pe.push(Yi(C, J, z))),
                        Ze)
                            break;
                        C = C.return
                    }
                    0 < pe.length && (H = new Y(H,ye,null,a,X),
                    $.push({
                        event: H,
                        listeners: pe
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (H = e === "mouseover" || e === "pointerover",
                    Y = e === "mouseout" || e === "pointerout",
                    H && a !== dr && (ye = a.relatedTarget || a.fromElement) && (Pa(ye) || ye[Ha]))
                        break e;
                    if ((Y || H) && (H = X.window === X ? X : (H = X.ownerDocument) ? H.defaultView || H.parentWindow : window,
                    Y ? (ye = a.relatedTarget || a.toElement,
                    Y = U,
                    ye = ye ? Pa(ye) : null,
                    ye !== null && (Ze = f(ye),
                    pe = ye.tag,
                    ye !== Ze || pe !== 5 && pe !== 27 && pe !== 6) && (ye = null)) : (Y = null,
                    ye = U),
                    Y !== ye)) {
                        if (pe = If,
                        J = "onMouseLeave",
                        M = "onMouseEnter",
                        C = "mouse",
                        (e === "pointerout" || e === "pointerover") && (pe = Wf,
                        J = "onPointerLeave",
                        M = "onPointerEnter",
                        C = "pointer"),
                        Ze = Y == null ? H : Ce(Y),
                        z = ye == null ? H : Ce(ye),
                        H = new pe(J,C + "leave",Y,a,X),
                        H.target = Ze,
                        H.relatedTarget = z,
                        J = null,
                        Pa(X) === U && (pe = new pe(M,C + "enter",ye,a,X),
                        pe.target = z,
                        pe.relatedTarget = Ze,
                        J = pe),
                        Ze = J,
                        Y && ye)
                            t: {
                                for (pe = Y,
                                M = ye,
                                C = 0,
                                z = pe; z; z = Pl(z))
                                    C++;
                                for (z = 0,
                                J = M; J; J = Pl(J))
                                    z++;
                                for (; 0 < C - z; )
                                    pe = Pl(pe),
                                    C--;
                                for (; 0 < z - C; )
                                    M = Pl(M),
                                    z--;
                                for (; C--; ) {
                                    if (pe === M || M !== null && pe === M.alternate)
                                        break t;
                                    pe = Pl(pe),
                                    M = Pl(M)
                                }
                                pe = null
                            }
                        else
                            pe = null;
                        Y !== null && qm($, H, Y, pe, !1),
                        ye !== null && Ze !== null && qm($, Ze, ye, pe, !0)
                    }
                }
                e: {
                    if (H = U ? Ce(U) : window,
                    Y = H.nodeName && H.nodeName.toLowerCase(),
                    Y === "select" || Y === "input" && H.type === "file")
                        var ue = od;
                    else if (id(H))
                        if (rd)
                            ue = Uv;
                        else {
                            ue = Vv;
                            var _e = Rv
                        }
                    else
                        Y = H.nodeName,
                        !Y || Y.toLowerCase() !== "input" || H.type !== "checkbox" && H.type !== "radio" ? U && fr(U.elementType) && (ue = od) : ue = zv;
                    if (ue && (ue = ue(e, U))) {
                        sd($, ue, a, X);
                        break e
                    }
                    _e && _e(e, H, U),
                    e === "focusout" && U && H.type === "number" && U.memoizedProps.value != null && cr(H, "number", H.value)
                }
                switch (_e = U ? Ce(U) : window,
                e) {
                case "focusin":
                    (id(_e) || _e.contentEditable === "true") && (yl = _e,
                    Ar = U,
                    pi = null);
                    break;
                case "focusout":
                    pi = Ar = yl = null;
                    break;
                case "mousedown":
                    Nr = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Nr = !1,
                    gd($, a, X);
                    break;
                case "selectionchange":
                    if (Lv)
                        break;
                case "keydown":
                case "keyup":
                    gd($, a, X)
                }
                var he;
                if (Sr)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var ge = "onCompositionStart";
                            break e;
                        case "compositionend":
                            ge = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            ge = "onCompositionUpdate";
                            break e
                        }
                        ge = void 0
                    }
                else
                    gl ? nd(e, a) && (ge = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (ge = "onCompositionStart");
                ge && (ed && a.locale !== "ko" && (gl || ge !== "onCompositionStart" ? ge === "onCompositionEnd" && gl && (he = Ff()) : (cn = X,
                gr = "value"in cn ? cn.value : cn.textContent,
                gl = !0)),
                _e = wo(U, ge),
                0 < _e.length && (ge = new $f(ge,e,null,a,X),
                $.push({
                    event: ge,
                    listeners: _e
                }),
                he ? ge.data = he : (he = ld(a),
                he !== null && (ge.data = he)))),
                (he = Cv ? Dv(e, a) : _v(e, a)) && (ge = wo(U, "onBeforeInput"),
                0 < ge.length && (_e = new $f("onBeforeInput","beforeinput",null,a,X),
                $.push({
                    event: _e,
                    listeners: ge
                }),
                _e.data = he)),
                bx($, e, U, a, X)
            }
            Hm($, t)
        })
    }
    function Yi(e, t, a) {
        return {
            instance: e,
            listener: t,
            currentTarget: a
        }
    }
    function wo(e, t) {
        for (var a = t + "Capture", s = []; e !== null; ) {
            var r = e
              , u = r.stateNode;
            if (r = r.tag,
            r !== 5 && r !== 26 && r !== 27 || u === null || (r = oi(e, a),
            r != null && s.unshift(Yi(e, r, u)),
            r = oi(e, t),
            r != null && s.push(Yi(e, r, u))),
            e.tag === 3)
                return s;
            e = e.return
        }
        return []
    }
    function Pl(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }
    function qm(e, t, a, s, r) {
        for (var u = t._reactName, v = []; a !== null && a !== s; ) {
            var b = a
              , A = b.alternate
              , U = b.stateNode;
            if (b = b.tag,
            A !== null && A === s)
                break;
            b !== 5 && b !== 26 && b !== 27 || U === null || (A = U,
            r ? (U = oi(a, u),
            U != null && v.unshift(Yi(a, U, A))) : r || (U = oi(a, u),
            U != null && v.push(Yi(a, U, A)))),
            a = a.return
        }
        v.length !== 0 && e.push({
            event: t,
            listeners: v
        })
    }
    var wx = /\r\n?/g
      , Ax = /\u0000|\uFFFD/g;
    function Ym(e) {
        return (typeof e == "string" ? e : "" + e).replace(wx, `
`).replace(Ax, "")
    }
    function Gm(e, t) {
        return t = Ym(t),
        Ym(e) === t
    }
    function Ao() {}
    function Ke(e, t, a, s, r, u) {
        switch (a) {
        case "children":
            typeof s == "string" ? t === "body" || t === "textarea" && s === "" || hl(e, s) : (typeof s == "number" || typeof s == "bigint") && t !== "body" && hl(e, "" + s);
            break;
        case "className":
            Ds(e, "class", s);
            break;
        case "tabIndex":
            Ds(e, "tabindex", s);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            Ds(e, a, s);
            break;
        case "style":
            Kf(e, s, u);
            break;
        case "data":
            if (t !== "object") {
                Ds(e, "data", s);
                break
            }
        case "src":
        case "href":
            if (s === "" && (t !== "a" || a !== "href")) {
                e.removeAttribute(a);
                break
            }
            if (s == null || typeof s == "function" || typeof s == "symbol" || typeof s == "boolean") {
                e.removeAttribute(a);
                break
            }
            s = Os("" + s),
            e.setAttribute(a, s);
            break;
        case "action":
        case "formAction":
            if (typeof s == "function") {
                e.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof u == "function" && (a === "formAction" ? (t !== "input" && Ke(e, t, "name", r.name, r, null),
                Ke(e, t, "formEncType", r.formEncType, r, null),
                Ke(e, t, "formMethod", r.formMethod, r, null),
                Ke(e, t, "formTarget", r.formTarget, r, null)) : (Ke(e, t, "encType", r.encType, r, null),
                Ke(e, t, "method", r.method, r, null),
                Ke(e, t, "target", r.target, r, null)));
            if (s == null || typeof s == "symbol" || typeof s == "boolean") {
                e.removeAttribute(a);
                break
            }
            s = Os("" + s),
            e.setAttribute(a, s);
            break;
        case "onClick":
            s != null && (e.onclick = Ao);
            break;
        case "onScroll":
            s != null && Oe("scroll", e);
            break;
        case "onScrollEnd":
            s != null && Oe("scrollend", e);
            break;
        case "dangerouslySetInnerHTML":
            if (s != null) {
                if (typeof s != "object" || !("__html"in s))
                    throw Error(o(61));
                if (a = s.__html,
                a != null) {
                    if (r.children != null)
                        throw Error(o(60));
                    e.innerHTML = a
                }
            }
            break;
        case "multiple":
            e.multiple = s && typeof s != "function" && typeof s != "symbol";
            break;
        case "muted":
            e.muted = s && typeof s != "function" && typeof s != "symbol";
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
            if (s == null || typeof s == "function" || typeof s == "boolean" || typeof s == "symbol") {
                e.removeAttribute("xlink:href");
                break
            }
            a = Os("" + s),
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
            s != null && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(a, "" + s) : e.removeAttribute(a);
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
            s && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
            break;
        case "capture":
        case "download":
            s === !0 ? e.setAttribute(a, "") : s !== !1 && s != null && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(a, s) : e.removeAttribute(a);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            s != null && typeof s != "function" && typeof s != "symbol" && !isNaN(s) && 1 <= s ? e.setAttribute(a, s) : e.removeAttribute(a);
            break;
        case "rowSpan":
        case "start":
            s == null || typeof s == "function" || typeof s == "symbol" || isNaN(s) ? e.removeAttribute(a) : e.setAttribute(a, s);
            break;
        case "popover":
            Oe("beforetoggle", e),
            Oe("toggle", e),
            Cs(e, "popover", s);
            break;
        case "xlinkActuate":
            Ya(e, "http://www.w3.org/1999/xlink", "xlink:actuate", s);
            break;
        case "xlinkArcrole":
            Ya(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", s);
            break;
        case "xlinkRole":
            Ya(e, "http://www.w3.org/1999/xlink", "xlink:role", s);
            break;
        case "xlinkShow":
            Ya(e, "http://www.w3.org/1999/xlink", "xlink:show", s);
            break;
        case "xlinkTitle":
            Ya(e, "http://www.w3.org/1999/xlink", "xlink:title", s);
            break;
        case "xlinkType":
            Ya(e, "http://www.w3.org/1999/xlink", "xlink:type", s);
            break;
        case "xmlBase":
            Ya(e, "http://www.w3.org/XML/1998/namespace", "xml:base", s);
            break;
        case "xmlLang":
            Ya(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", s);
            break;
        case "xmlSpace":
            Ya(e, "http://www.w3.org/XML/1998/namespace", "xml:space", s);
            break;
        case "is":
            Cs(e, "is", s);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = tv.get(a) || a,
            Cs(e, a, s))
        }
    }
    function Fu(e, t, a, s, r, u) {
        switch (a) {
        case "style":
            Kf(e, s, u);
            break;
        case "dangerouslySetInnerHTML":
            if (s != null) {
                if (typeof s != "object" || !("__html"in s))
                    throw Error(o(61));
                if (a = s.__html,
                a != null) {
                    if (r.children != null)
                        throw Error(o(60));
                    e.innerHTML = a
                }
            }
            break;
        case "children":
            typeof s == "string" ? hl(e, s) : (typeof s == "number" || typeof s == "bigint") && hl(e, "" + s);
            break;
        case "onScroll":
            s != null && Oe("scroll", e);
            break;
        case "onScrollEnd":
            s != null && Oe("scrollend", e);
            break;
        case "onClick":
            s != null && (e.onclick = Ao);
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
            if (!Zt.hasOwnProperty(a))
                e: {
                    if (a[0] === "o" && a[1] === "n" && (r = a.endsWith("Capture"),
                    t = a.slice(2, r ? a.length - 7 : void 0),
                    u = e[Ct] || null,
                    u = u != null ? u[a] : null,
                    typeof u == "function" && e.removeEventListener(t, u, r),
                    typeof s == "function")) {
                        typeof u != "function" && u !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)),
                        e.addEventListener(t, s, r);
                        break e
                    }
                    a in e ? e[a] = s : s === !0 ? e.setAttribute(a, "") : Cs(e, a, s)
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
            Oe("error", e),
            Oe("load", e);
            var s = !1, r = !1, u;
            for (u in a)
                if (a.hasOwnProperty(u)) {
                    var v = a[u];
                    if (v != null)
                        switch (u) {
                        case "src":
                            s = !0;
                            break;
                        case "srcSet":
                            r = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(o(137, t));
                        default:
                            Ke(e, t, u, v, a, null)
                        }
                }
            r && Ke(e, t, "srcSet", a.srcSet, a, null),
            s && Ke(e, t, "src", a.src, a, null);
            return;
        case "input":
            Oe("invalid", e);
            var b = u = v = r = null
              , A = null
              , U = null;
            for (s in a)
                if (a.hasOwnProperty(s)) {
                    var X = a[s];
                    if (X != null)
                        switch (s) {
                        case "name":
                            r = X;
                            break;
                        case "type":
                            v = X;
                            break;
                        case "checked":
                            A = X;
                            break;
                        case "defaultChecked":
                            U = X;
                            break;
                        case "value":
                            u = X;
                            break;
                        case "defaultValue":
                            b = X;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (X != null)
                                throw Error(o(137, t));
                            break;
                        default:
                            Ke(e, t, s, X, a, null)
                        }
                }
            qf(e, u, b, A, U, v, r, !1),
            _s(e);
            return;
        case "select":
            Oe("invalid", e),
            s = v = u = null;
            for (r in a)
                if (a.hasOwnProperty(r) && (b = a[r],
                b != null))
                    switch (r) {
                    case "value":
                        u = b;
                        break;
                    case "defaultValue":
                        v = b;
                        break;
                    case "multiple":
                        s = b;
                    default:
                        Ke(e, t, r, b, a, null)
                    }
            t = u,
            a = v,
            e.multiple = !!s,
            t != null ? dl(e, !!s, t, !1) : a != null && dl(e, !!s, a, !0);
            return;
        case "textarea":
            Oe("invalid", e),
            u = r = s = null;
            for (v in a)
                if (a.hasOwnProperty(v) && (b = a[v],
                b != null))
                    switch (v) {
                    case "value":
                        s = b;
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
                        Ke(e, t, v, b, a, null)
                    }
            Gf(e, s, r, u),
            _s(e);
            return;
        case "option":
            for (A in a)
                if (a.hasOwnProperty(A) && (s = a[A],
                s != null))
                    switch (A) {
                    case "selected":
                        e.selected = s && typeof s != "function" && typeof s != "symbol";
                        break;
                    default:
                        Ke(e, t, A, s, a, null)
                    }
            return;
        case "dialog":
            Oe("beforetoggle", e),
            Oe("toggle", e),
            Oe("cancel", e),
            Oe("close", e);
            break;
        case "iframe":
        case "object":
            Oe("load", e);
            break;
        case "video":
        case "audio":
            for (s = 0; s < qi.length; s++)
                Oe(qi[s], e);
            break;
        case "image":
            Oe("error", e),
            Oe("load", e);
            break;
        case "details":
            Oe("toggle", e);
            break;
        case "embed":
        case "source":
        case "link":
            Oe("error", e),
            Oe("load", e);
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
            for (U in a)
                if (a.hasOwnProperty(U) && (s = a[U],
                s != null))
                    switch (U) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(o(137, t));
                    default:
                        Ke(e, t, U, s, a, null)
                    }
            return;
        default:
            if (fr(t)) {
                for (X in a)
                    a.hasOwnProperty(X) && (s = a[X],
                    s !== void 0 && Fu(e, t, X, s, a, void 0));
                return
            }
        }
        for (b in a)
            a.hasOwnProperty(b) && (s = a[b],
            s != null && Ke(e, t, b, s, a, null))
    }
    function Nx(e, t, a, s) {
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
              , v = null
              , b = null
              , A = null
              , U = null
              , X = null;
            for (Y in a) {
                var $ = a[Y];
                if (a.hasOwnProperty(Y) && $ != null)
                    switch (Y) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        A = $;
                    default:
                        s.hasOwnProperty(Y) || Ke(e, t, Y, null, s, $)
                    }
            }
            for (var H in s) {
                var Y = s[H];
                if ($ = a[H],
                s.hasOwnProperty(H) && (Y != null || $ != null))
                    switch (H) {
                    case "type":
                        u = Y;
                        break;
                    case "name":
                        r = Y;
                        break;
                    case "checked":
                        U = Y;
                        break;
                    case "defaultChecked":
                        X = Y;
                        break;
                    case "value":
                        v = Y;
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
                        Y !== $ && Ke(e, t, H, Y, s, $)
                    }
            }
            ur(e, v, b, A, U, X, u, r);
            return;
        case "select":
            Y = v = b = H = null;
            for (u in a)
                if (A = a[u],
                a.hasOwnProperty(u) && A != null)
                    switch (u) {
                    case "value":
                        break;
                    case "multiple":
                        Y = A;
                    default:
                        s.hasOwnProperty(u) || Ke(e, t, u, null, s, A)
                    }
            for (r in s)
                if (u = s[r],
                A = a[r],
                s.hasOwnProperty(r) && (u != null || A != null))
                    switch (r) {
                    case "value":
                        H = u;
                        break;
                    case "defaultValue":
                        b = u;
                        break;
                    case "multiple":
                        v = u;
                    default:
                        u !== A && Ke(e, t, r, u, s, A)
                    }
            t = b,
            a = v,
            s = Y,
            H != null ? dl(e, !!a, H, !1) : !!s != !!a && (t != null ? dl(e, !!a, t, !0) : dl(e, !!a, a ? [] : "", !1));
            return;
        case "textarea":
            Y = H = null;
            for (b in a)
                if (r = a[b],
                a.hasOwnProperty(b) && r != null && !s.hasOwnProperty(b))
                    switch (b) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        Ke(e, t, b, null, s, r)
                    }
            for (v in s)
                if (r = s[v],
                u = a[v],
                s.hasOwnProperty(v) && (r != null || u != null))
                    switch (v) {
                    case "value":
                        H = r;
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
                        r !== u && Ke(e, t, v, r, s, u)
                    }
            Yf(e, H, Y);
            return;
        case "option":
            for (var ye in a)
                if (H = a[ye],
                a.hasOwnProperty(ye) && H != null && !s.hasOwnProperty(ye))
                    switch (ye) {
                    case "selected":
                        e.selected = !1;
                        break;
                    default:
                        Ke(e, t, ye, null, s, H)
                    }
            for (A in s)
                if (H = s[A],
                Y = a[A],
                s.hasOwnProperty(A) && H !== Y && (H != null || Y != null))
                    switch (A) {
                    case "selected":
                        e.selected = H && typeof H != "function" && typeof H != "symbol";
                        break;
                    default:
                        Ke(e, t, A, H, s, Y)
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
            for (var pe in a)
                H = a[pe],
                a.hasOwnProperty(pe) && H != null && !s.hasOwnProperty(pe) && Ke(e, t, pe, null, s, H);
            for (U in s)
                if (H = s[U],
                Y = a[U],
                s.hasOwnProperty(U) && H !== Y && (H != null || Y != null))
                    switch (U) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (H != null)
                            throw Error(o(137, t));
                        break;
                    default:
                        Ke(e, t, U, H, s, Y)
                    }
            return;
        default:
            if (fr(t)) {
                for (var Ze in a)
                    H = a[Ze],
                    a.hasOwnProperty(Ze) && H !== void 0 && !s.hasOwnProperty(Ze) && Fu(e, t, Ze, void 0, s, H);
                for (X in s)
                    H = s[X],
                    Y = a[X],
                    !s.hasOwnProperty(X) || H === Y || H === void 0 && Y === void 0 || Fu(e, t, X, H, s, Y);
                return
            }
        }
        for (var M in a)
            H = a[M],
            a.hasOwnProperty(M) && H != null && !s.hasOwnProperty(M) && Ke(e, t, M, null, s, H);
        for ($ in s)
            H = s[$],
            Y = a[$],
            !s.hasOwnProperty($) || H === Y || H == null && Y == null || Ke(e, t, $, H, s, Y)
    }
    var Ju = null
      , Iu = null;
    function No(e) {
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
    function Km(e, t) {
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
    function Ex() {
        var e = window.event;
        return e && e.type === "popstate" ? e === Wu ? !1 : (Wu = e,
        !0) : (Wu = null,
        !1)
    }
    var Zm = typeof setTimeout == "function" ? setTimeout : void 0
      , Cx = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Qm = typeof Promise == "function" ? Promise : void 0
      , Dx = typeof queueMicrotask == "function" ? queueMicrotask : typeof Qm < "u" ? function(e) {
        return Qm.resolve(null).then(e).catch(_x)
    }
    : Zm;
    function _x(e) {
        setTimeout(function() {
            throw e
        })
    }
    function Nn(e) {
        return e === "head"
    }
    function Fm(e, t) {
        var a = t
          , s = 0
          , r = 0;
        do {
            var u = a.nextSibling;
            if (e.removeChild(a),
            u && u.nodeType === 8)
                if (a = u.data,
                a === "/$") {
                    if (0 < s && 8 > s) {
                        a = s;
                        var v = e.ownerDocument;
                        if (a & 1 && Gi(v.documentElement),
                        a & 2 && Gi(v.body),
                        a & 4)
                            for (a = v.head,
                            Gi(a),
                            v = a.firstChild; v; ) {
                                var b = v.nextSibling
                                  , A = v.nodeName;
                                v[un] || A === "SCRIPT" || A === "STYLE" || A === "LINK" && v.rel.toLowerCase() === "stylesheet" || a.removeChild(v),
                                v = b
                            }
                    }
                    if (r === 0) {
                        e.removeChild(u),
                        $i(t);
                        return
                    }
                    r--
                } else
                    a === "$" || a === "$?" || a === "$!" ? r++ : s = a.charCodeAt(0) - 48;
            else
                s = 0;
            a = u
        } while (a);
        $i(t)
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
                cl(a);
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
    function Mx(e, t, a, s) {
        for (; e.nodeType === 1; ) {
            var r = a;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!s && (e.nodeName !== "INPUT" || e.type !== "hidden"))
                    break
            } else if (s) {
                if (!e[un])
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
            if (e = Ta(e.nextSibling),
            e === null)
                break
        }
        return null
    }
    function Ox(e, t, a) {
        if (t === "")
            return null;
        for (; e.nodeType !== 3; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Ta(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function tc(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete"
    }
    function Rx(e, t) {
        var a = e.ownerDocument;
        if (e.data !== "$?" || a.readyState === "complete")
            t();
        else {
            var s = function() {
                t(),
                a.removeEventListener("DOMContentLoaded", s)
            };
            a.addEventListener("DOMContentLoaded", s),
            e._reactRetry = s
        }
    }
    function Ta(e) {
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
    function Jm(e) {
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
    function Im(e, t, a) {
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
    function Gi(e) {
        for (var t = e.attributes; t.length; )
            e.removeAttributeNode(t[0]);
        cl(e)
    }
    var fa = new Map
      , $m = new Set;
    function Eo(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var nn = O.d;
    O.d = {
        f: Vx,
        r: zx,
        D: Ux,
        C: Bx,
        L: Lx,
        m: kx,
        X: Px,
        S: Hx,
        M: qx
    };
    function Vx() {
        var e = nn.f()
          , t = vo();
        return e || t
    }
    function zx(e) {
        var t = Ae(e);
        t !== null && t.tag === 5 && t.type === "form" ? vh(t) : nn.r(e)
    }
    var ql = typeof document > "u" ? null : document;
    function Wm(e, t, a) {
        var s = ql;
        if (s && typeof t == "string" && t) {
            var r = la(t);
            r = 'link[rel="' + e + '"][href="' + r + '"]',
            typeof a == "string" && (r += '[crossorigin="' + a + '"]'),
            $m.has(r) || ($m.add(r),
            e = {
                rel: e,
                crossOrigin: a,
                href: t
            },
            s.querySelector(r) === null && (t = s.createElement("link"),
            Mt(t, "link", e),
            be(t),
            s.head.appendChild(t)))
        }
    }
    function Ux(e) {
        nn.D(e),
        Wm("dns-prefetch", e, null)
    }
    function Bx(e, t) {
        nn.C(e, t),
        Wm("preconnect", e, t)
    }
    function Lx(e, t, a) {
        nn.L(e, t, a);
        var s = ql;
        if (s && e && t) {
            var r = 'link[rel="preload"][as="' + la(t) + '"]';
            t === "image" && a && a.imageSrcSet ? (r += '[imagesrcset="' + la(a.imageSrcSet) + '"]',
            typeof a.imageSizes == "string" && (r += '[imagesizes="' + la(a.imageSizes) + '"]')) : r += '[href="' + la(e) + '"]';
            var u = r;
            switch (t) {
            case "style":
                u = Yl(e);
                break;
            case "script":
                u = Gl(e)
            }
            fa.has(u) || (e = y({
                rel: "preload",
                href: t === "image" && a && a.imageSrcSet ? void 0 : e,
                as: t
            }, a),
            fa.set(u, e),
            s.querySelector(r) !== null || t === "style" && s.querySelector(Xi(u)) || t === "script" && s.querySelector(Ki(u)) || (t = s.createElement("link"),
            Mt(t, "link", e),
            be(t),
            s.head.appendChild(t)))
        }
    }
    function kx(e, t) {
        nn.m(e, t);
        var a = ql;
        if (a && e) {
            var s = t && typeof t.as == "string" ? t.as : "script"
              , r = 'link[rel="modulepreload"][as="' + la(s) + '"][href="' + la(e) + '"]'
              , u = r;
            switch (s) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                u = Gl(e)
            }
            if (!fa.has(u) && (e = y({
                rel: "modulepreload",
                href: e
            }, t),
            fa.set(u, e),
            a.querySelector(r) === null)) {
                switch (s) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (a.querySelector(Ki(u)))
                        return
                }
                s = a.createElement("link"),
                Mt(s, "link", e),
                be(s),
                a.head.appendChild(s)
            }
        }
    }
    function Hx(e, t, a) {
        nn.S(e, t, a);
        var s = ql;
        if (s && e) {
            var r = Be(s).hoistableStyles
              , u = Yl(e);
            t = t || "default";
            var v = r.get(u);
            if (!v) {
                var b = {
                    loading: 0,
                    preload: null
                };
                if (v = s.querySelector(Xi(u)))
                    b.loading = 5;
                else {
                    e = y({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, a),
                    (a = fa.get(u)) && nc(e, a);
                    var A = v = s.createElement("link");
                    be(A),
                    Mt(A, "link", e),
                    A._p = new Promise(function(U, X) {
                        A.onload = U,
                        A.onerror = X
                    }
                    ),
                    A.addEventListener("load", function() {
                        b.loading |= 1
                    }),
                    A.addEventListener("error", function() {
                        b.loading |= 2
                    }),
                    b.loading |= 4,
                    Co(v, t, s)
                }
                v = {
                    type: "stylesheet",
                    instance: v,
                    count: 1,
                    state: b
                },
                r.set(u, v)
            }
        }
    }
    function Px(e, t) {
        nn.X(e, t);
        var a = ql;
        if (a && e) {
            var s = Be(a).hoistableScripts
              , r = Gl(e)
              , u = s.get(r);
            u || (u = a.querySelector(Ki(r)),
            u || (e = y({
                src: e,
                async: !0
            }, t),
            (t = fa.get(r)) && lc(e, t),
            u = a.createElement("script"),
            be(u),
            Mt(u, "link", e),
            a.head.appendChild(u)),
            u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            },
            s.set(r, u))
        }
    }
    function qx(e, t) {
        nn.M(e, t);
        var a = ql;
        if (a && e) {
            var s = Be(a).hoistableScripts
              , r = Gl(e)
              , u = s.get(r);
            u || (u = a.querySelector(Ki(r)),
            u || (e = y({
                src: e,
                async: !0,
                type: "module"
            }, t),
            (t = fa.get(r)) && lc(e, t),
            u = a.createElement("script"),
            be(u),
            Mt(u, "link", e),
            a.head.appendChild(u)),
            u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            },
            s.set(r, u))
        }
    }
    function ep(e, t, a, s) {
        var r = (r = F.current) ? Eo(r) : null;
        if (!r)
            throw Error(o(446));
        switch (e) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Yl(a.href),
            a = Be(r).hoistableStyles,
            s = a.get(t),
            s || (s = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            a.set(t, s)),
            s) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                e = Yl(a.href);
                var u = Be(r).hoistableStyles
                  , v = u.get(e);
                if (v || (r = r.ownerDocument || r,
                v = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                u.set(e, v),
                (u = r.querySelector(Xi(e))) && !u._p && (v.instance = u,
                v.state.loading = 5),
                fa.has(e) || (a = {
                    rel: "preload",
                    as: "style",
                    href: a.href,
                    crossOrigin: a.crossOrigin,
                    integrity: a.integrity,
                    media: a.media,
                    hrefLang: a.hrefLang,
                    referrerPolicy: a.referrerPolicy
                },
                fa.set(e, a),
                u || Yx(r, e, a, v.state))),
                t && s === null)
                    throw Error(o(528, ""));
                return v
            }
            if (t && s !== null)
                throw Error(o(529, ""));
            return null;
        case "script":
            return t = a.async,
            a = a.src,
            typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Gl(a),
            a = Be(r).hoistableScripts,
            s = a.get(t),
            s || (s = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            a.set(t, s)),
            s) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(o(444, e))
        }
    }
    function Yl(e) {
        return 'href="' + la(e) + '"'
    }
    function Xi(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }
    function tp(e) {
        return y({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }
    function Yx(e, t, a, s) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? s.loading = 1 : (t = e.createElement("link"),
        s.preload = t,
        t.addEventListener("load", function() {
            return s.loading |= 1
        }),
        t.addEventListener("error", function() {
            return s.loading |= 2
        }),
        Mt(t, "link", a),
        be(t),
        e.head.appendChild(t))
    }
    function Gl(e) {
        return '[src="' + la(e) + '"]'
    }
    function Ki(e) {
        return "script[async]" + e
    }
    function ap(e, t, a) {
        if (t.count++,
        t.instance === null)
            switch (t.type) {
            case "style":
                var s = e.querySelector('style[data-href~="' + la(a.href) + '"]');
                if (s)
                    return t.instance = s,
                    be(s),
                    s;
                var r = y({}, a, {
                    "data-href": a.href,
                    "data-precedence": a.precedence,
                    href: null,
                    precedence: null
                });
                return s = (e.ownerDocument || e).createElement("style"),
                be(s),
                Mt(s, "style", r),
                Co(s, a.precedence, e),
                t.instance = s;
            case "stylesheet":
                r = Yl(a.href);
                var u = e.querySelector(Xi(r));
                if (u)
                    return t.state.loading |= 4,
                    t.instance = u,
                    be(u),
                    u;
                s = tp(a),
                (r = fa.get(r)) && nc(s, r),
                u = (e.ownerDocument || e).createElement("link"),
                be(u);
                var v = u;
                return v._p = new Promise(function(b, A) {
                    v.onload = b,
                    v.onerror = A
                }
                ),
                Mt(u, "link", s),
                t.state.loading |= 4,
                Co(u, a.precedence, e),
                t.instance = u;
            case "script":
                return u = Gl(a.src),
                (r = e.querySelector(Ki(u))) ? (t.instance = r,
                be(r),
                r) : (s = a,
                (r = fa.get(u)) && (s = y({}, a),
                lc(s, r)),
                e = e.ownerDocument || e,
                r = e.createElement("script"),
                be(r),
                Mt(r, "link", s),
                e.head.appendChild(r),
                t.instance = r);
            case "void":
                return null;
            default:
                throw Error(o(443, t.type))
            }
        else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (s = t.instance,
            t.state.loading |= 4,
            Co(s, a.precedence, e));
        return t.instance
    }
    function Co(e, t, a) {
        for (var s = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), r = s.length ? s[s.length - 1] : null, u = r, v = 0; v < s.length; v++) {
            var b = s[v];
            if (b.dataset.precedence === t)
                u = b;
            else if (u !== r)
                break
        }
        u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = a.nodeType === 9 ? a.head : a,
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
            var s = new Map
              , r = Do = new Map;
            r.set(a, s)
        } else
            r = Do,
            s = r.get(a),
            s || (s = new Map,
            r.set(a, s));
        if (s.has(e))
            return s;
        for (s.set(e, null),
        a = a.getElementsByTagName(e),
        r = 0; r < a.length; r++) {
            var u = a[r];
            if (!(u[un] || u[bt] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
                var v = u.getAttribute(t) || "";
                v = e + v;
                var b = s.get(v);
                b ? b.push(u) : s.set(v, [u])
            }
        }
        return s
    }
    function lp(e, t, a) {
        e = e.ownerDocument || e,
        e.head.insertBefore(a, t === "title" ? e.querySelector("head > title") : null)
    }
    function Gx(e, t, a) {
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
    function ip(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    var Zi = null;
    function Xx() {}
    function Kx(e, t, a) {
        if (Zi === null)
            throw Error(o(475));
        var s = Zi;
        if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
            if (t.instance === null) {
                var r = Yl(a.href)
                  , u = e.querySelector(Xi(r));
                if (u) {
                    e = u._p,
                    e !== null && typeof e == "object" && typeof e.then == "function" && (s.count++,
                    s = _o.bind(s),
                    e.then(s, s)),
                    t.state.loading |= 4,
                    t.instance = u,
                    be(u);
                    return
                }
                u = e.ownerDocument || e,
                a = tp(a),
                (r = fa.get(r)) && nc(a, r),
                u = u.createElement("link"),
                be(u);
                var v = u;
                v._p = new Promise(function(b, A) {
                    v.onload = b,
                    v.onerror = A
                }
                ),
                Mt(u, "link", a),
                t.instance = u
            }
            s.stylesheets === null && (s.stylesheets = new Map),
            s.stylesheets.set(t, e),
            (e = t.state.preload) && (t.state.loading & 3) === 0 && (s.count++,
            t = _o.bind(s),
            e.addEventListener("load", t),
            e.addEventListener("error", t))
        }
    }
    function Zx() {
        if (Zi === null)
            throw Error(o(475));
        var e = Zi;
        return e.stylesheets && e.count === 0 && ic(e, e.stylesheets),
        0 < e.count ? function(t) {
            var a = setTimeout(function() {
                if (e.stylesheets && ic(e, e.stylesheets),
                e.unsuspend) {
                    var s = e.unsuspend;
                    e.unsuspend = null,
                    s()
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
                ic(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null,
                e()
            }
        }
    }
    var Mo = null;
    function ic(e, t) {
        e.stylesheets = null,
        e.unsuspend !== null && (e.count++,
        Mo = new Map,
        t.forEach(Qx, e),
        Mo = null,
        _o.call(e))
    }
    function Qx(e, t) {
        if (!(t.state.loading & 4)) {
            var a = Mo.get(e);
            if (a)
                var s = a.get(null);
            else {
                a = new Map,
                Mo.set(e, a);
                for (var r = e.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < r.length; u++) {
                    var v = r[u];
                    (v.nodeName === "LINK" || v.getAttribute("media") !== "not all") && (a.set(v.dataset.precedence, v),
                    s = v)
                }
                s && a.set(null, s)
            }
            r = t.instance,
            v = r.getAttribute("data-precedence"),
            u = a.get(v) || s,
            u === s && a.set(null, r),
            a.set(v, r),
            this.count++,
            s = _o.bind(this),
            r.addEventListener("load", s),
            r.addEventListener("error", s),
            u ? u.parentNode.insertBefore(r, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
            e.insertBefore(r, e.firstChild)),
            t.state.loading |= 4
        }
    }
    var Qi = {
        $$typeof: B,
        Provider: null,
        Consumer: null,
        _currentValue: q,
        _currentValue2: q,
        _threadCount: 0
    };
    function Fx(e, t, a, s, r, u, v, b) {
        this.tag = 1,
        this.containerInfo = e,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = xe(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = xe(0),
        this.hiddenUpdates = xe(null),
        this.identifierPrefix = s,
        this.onUncaughtError = r,
        this.onCaughtError = u,
        this.onRecoverableError = v,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = b,
        this.incompleteTransitions = new Map
    }
    function sp(e, t, a, s, r, u, v, b, A, U, X, $) {
        return e = new Fx(e,t,a,v,b,A,U,$),
        t = 1,
        u === !0 && (t |= 24),
        u = Ft(3, null, null, t),
        e.current = u,
        u.stateNode = e,
        t = Hr(),
        t.refCount++,
        e.pooledCache = t,
        t.refCount++,
        u.memoizedState = {
            element: s,
            isDehydrated: a,
            cache: t
        },
        Gr(u),
        e
    }
    function op(e) {
        return e ? (e = Sl,
        e) : Sl
    }
    function rp(e, t, a, s, r, u) {
        r = op(r),
        s.context === null ? s.context = r : s.pendingContext = r,
        s = hn(t),
        s.payload = {
            element: a
        },
        u = u === void 0 ? null : u,
        u !== null && (s.callback = u),
        a = mn(e, s, t),
        a !== null && (ea(a, e, t),
        wi(a, e, t))
    }
    function up(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var a = e.retryLane;
            e.retryLane = a !== 0 && a < t ? a : t
        }
    }
    function sc(e, t) {
        up(e, t),
        (e = e.alternate) && up(e, t)
    }
    function cp(e) {
        if (e.tag === 13) {
            var t = bl(e, 67108864);
            t !== null && ea(t, e, 67108864),
            sc(e, 67108864)
        }
    }
    var Oo = !0;
    function Jx(e, t, a, s) {
        var r = E.T;
        E.T = null;
        var u = O.p;
        try {
            O.p = 2,
            oc(e, t, a, s)
        } finally {
            O.p = u,
            E.T = r
        }
    }
    function Ix(e, t, a, s) {
        var r = E.T;
        E.T = null;
        var u = O.p;
        try {
            O.p = 8,
            oc(e, t, a, s)
        } finally {
            O.p = u,
            E.T = r
        }
    }
    function oc(e, t, a, s) {
        if (Oo) {
            var r = rc(s);
            if (r === null)
                Qu(e, t, s, Ro, a),
                dp(e, s);
            else if (Wx(r, e, t, a, s))
                s.stopPropagation();
            else if (dp(e, s),
            t & 4 && -1 < $x.indexOf(e)) {
                for (; r !== null; ) {
                    var u = Ae(r);
                    if (u !== null)
                        switch (u.tag) {
                        case 3:
                            if (u = u.stateNode,
                            u.current.memoizedState.isDehydrated) {
                                var v = me(u.pendingLanes);
                                if (v !== 0) {
                                    var b = u;
                                    for (b.pendingLanes |= 2,
                                    b.entangledLanes |= 2; v; ) {
                                        var A = 1 << 31 - rt(v);
                                        b.entanglements[1] |= A,
                                        v &= ~A
                                    }
                                    Ma(u),
                                    (Ye & 6) === 0 && (go = ot() + 500,
                                    Pi(0))
                                }
                            }
                            break;
                        case 13:
                            b = bl(u, 2),
                            b !== null && ea(b, u, 2),
                            vo(),
                            sc(u, 2)
                        }
                    if (u = rc(s),
                    u === null && Qu(e, t, s, Ro, a),
                    u === r)
                        break;
                    r = u
                }
                r !== null && s.stopPropagation()
            } else
                Qu(e, t, s, null, a)
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
            var t = f(e);
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
            switch (za()) {
            case aa:
                return 2;
            case wa:
                return 8;
            case Xt:
            case Ua:
                return 32;
            case Aa:
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
      , Fi = new Map
      , Ji = new Map
      , _n = []
      , $x = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
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
            Fi.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Ji.delete(t.pointerId)
        }
    }
    function Ii(e, t, a, s, r, u) {
        return e === null || e.nativeEvent !== u ? (e = {
            blockedOn: t,
            domEventName: a,
            eventSystemFlags: s,
            nativeEvent: u,
            targetContainers: [r]
        },
        t !== null && (t = Ae(t),
        t !== null && cp(t)),
        e) : (e.eventSystemFlags |= s,
        t = e.targetContainers,
        r !== null && t.indexOf(r) === -1 && t.push(r),
        e)
    }
    function Wx(e, t, a, s, r) {
        switch (t) {
        case "focusin":
            return En = Ii(En, e, t, a, s, r),
            !0;
        case "dragenter":
            return Cn = Ii(Cn, e, t, a, s, r),
            !0;
        case "mouseover":
            return Dn = Ii(Dn, e, t, a, s, r),
            !0;
        case "pointerover":
            var u = r.pointerId;
            return Fi.set(u, Ii(Fi.get(u) || null, e, t, a, s, r)),
            !0;
        case "gotpointercapture":
            return u = r.pointerId,
            Ji.set(u, Ii(Ji.get(u) || null, e, t, a, s, r)),
            !0
        }
        return !1
    }
    function hp(e) {
        var t = Pa(e.target);
        if (t !== null) {
            var a = f(t);
            if (a !== null) {
                if (t = a.tag,
                t === 13) {
                    if (t = d(a),
                    t !== null) {
                        e.blockedOn = t,
                        ws(e.priority, function() {
                            if (a.tag === 13) {
                                var s = Wt();
                                s = ol(s);
                                var r = bl(a, s);
                                r !== null && ea(r, a, s),
                                sc(a, s)
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
                var s = new a.constructor(a.type,a);
                dr = s,
                a.target.dispatchEvent(s),
                dr = null
            } else
                return t = Ae(a),
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
    function eb() {
        cc = !1,
        En !== null && Vo(En) && (En = null),
        Cn !== null && Vo(Cn) && (Cn = null),
        Dn !== null && Vo(Dn) && (Dn = null),
        Fi.forEach(mp),
        Ji.forEach(mp)
    }
    function zo(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        cc || (cc = !0,
        n.unstable_scheduleCallback(n.unstable_NormalPriority, eb)))
    }
    var Uo = null;
    function pp(e) {
        Uo !== e && (Uo = e,
        n.unstable_scheduleCallback(n.unstable_NormalPriority, function() {
            Uo === e && (Uo = null);
            for (var t = 0; t < e.length; t += 3) {
                var a = e[t]
                  , s = e[t + 1]
                  , r = e[t + 2];
                if (typeof s != "function") {
                    if (uc(s || a) === null)
                        continue;
                    break
                }
                var u = Ae(a);
                u !== null && (e.splice(t, 3),
                t -= 3,
                uu(u, {
                    pending: !0,
                    data: r,
                    method: a.method,
                    action: s
                }, s, r))
            }
        }))
    }
    function $i(e) {
        function t(A) {
            return zo(A, e)
        }
        En !== null && zo(En, e),
        Cn !== null && zo(Cn, e),
        Dn !== null && zo(Dn, e),
        Fi.forEach(t),
        Ji.forEach(t);
        for (var a = 0; a < _n.length; a++) {
            var s = _n[a];
            s.blockedOn === e && (s.blockedOn = null)
        }
        for (; 0 < _n.length && (a = _n[0],
        a.blockedOn === null); )
            hp(a),
            a.blockedOn === null && _n.shift();
        if (a = (e.ownerDocument || e).$$reactFormReplay,
        a != null)
            for (s = 0; s < a.length; s += 3) {
                var r = a[s]
                  , u = a[s + 1]
                  , v = r[Ct] || null;
                if (typeof u == "function")
                    v || pp(a);
                else if (v) {
                    var b = null;
                    if (u && u.hasAttribute("formAction")) {
                        if (r = u,
                        v = u[Ct] || null)
                            b = v.formAction;
                        else if (uc(r) !== null)
                            continue
                    } else
                        b = v.action;
                    typeof b == "function" ? a[s + 1] = b : (a.splice(s, 3),
                    s -= 3),
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
          , s = Wt();
        rp(a, s, e, t, null, null)
    }
    ,
    Bo.prototype.unmount = fc.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            rp(e.current, 2, null, e, null, null),
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
            var t = li();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var a = 0; a < _n.length && t !== 0 && t < _n[a].priority; a++)
                ;
            _n.splice(a, 0, e),
            a === 0 && hp(e)
        }
    }
    ;
    var gp = l.version;
    if (gp !== "19.1.0")
        throw Error(o(527, gp, "19.1.0"));
    O.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","),
            Error(o(268, e)));
        return e = p(t),
        e = e !== null ? m(e) : null,
        e = e === null ? null : e.stateNode,
        e
    }
    ;
    var tb = {
        bundleType: 0,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: E,
        reconcilerVersion: "19.1.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Lo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Lo.isDisabled && Lo.supportsFiber)
            try {
                je = Lo.inject(tb),
                Je = Lo
            } catch {}
    }
    return es.createRoot = function(e, t) {
        if (!c(e))
            throw Error(o(299));
        var a = !1
          , s = ""
          , r = Oh
          , u = Rh
          , v = Vh
          , b = null;
        return t != null && (t.unstable_strictMode === !0 && (a = !0),
        t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (r = t.onUncaughtError),
        t.onCaughtError !== void 0 && (u = t.onCaughtError),
        t.onRecoverableError !== void 0 && (v = t.onRecoverableError),
        t.unstable_transitionCallbacks !== void 0 && (b = t.unstable_transitionCallbacks)),
        t = sp(e, 1, !1, null, null, a, s, r, u, v, b, null),
        e[Ha] = t.current,
        Zu(e),
        new fc(t)
    }
    ,
    es.hydrateRoot = function(e, t, a) {
        if (!c(e))
            throw Error(o(299));
        var s = !1
          , r = ""
          , u = Oh
          , v = Rh
          , b = Vh
          , A = null
          , U = null;
        return a != null && (a.unstable_strictMode === !0 && (s = !0),
        a.identifierPrefix !== void 0 && (r = a.identifierPrefix),
        a.onUncaughtError !== void 0 && (u = a.onUncaughtError),
        a.onCaughtError !== void 0 && (v = a.onCaughtError),
        a.onRecoverableError !== void 0 && (b = a.onRecoverableError),
        a.unstable_transitionCallbacks !== void 0 && (A = a.unstable_transitionCallbacks),
        a.formState !== void 0 && (U = a.formState)),
        t = sp(e, 1, !0, t, a ?? null, s, r, u, v, b, A, U),
        t.context = op(null),
        a = t.current,
        s = Wt(),
        s = ol(s),
        r = hn(s),
        r.callback = null,
        mn(a, r, s),
        a = s,
        t.current.lanes = a,
        mt(t, a),
        Ma(t),
        e[Ha] = t.current,
        Zu(e),
        new Bo(t)
    }
    ,
    es.version = "19.1.0",
    es
}
var Np;
function hb() {
    if (Np)
        return mc.exports;
    Np = 1;
    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (l) {
                console.error(l)
            }
    }
    return n(),
    mc.exports = db(),
    mc.exports
}
var mb = hb();
const ef = S.createContext({});
function tf(n) {
    const l = S.useRef(null);
    return l.current === null && (l.current = n()),
    l.current
}
const af = typeof window < "u"
  , $g = af ? S.useLayoutEffect : S.useEffect
  , Wo = S.createContext(null);
function nf(n, l) {
    n.indexOf(l) === -1 && n.push(l)
}
function lf(n, l) {
    const i = n.indexOf(l);
    i > -1 && n.splice(i, 1)
}
const ln = (n, l, i) => i > l ? l : i < n ? n : i;
let sf = () => {}
;
const sn = {}
  , Wg = n => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);
function ey(n) {
    return typeof n == "object" && n !== null
}
const ty = n => /^0[^.\s]+$/u.test(n);
function of(n) {
    let l;
    return () => (l === void 0 && (l = n()),
    l)
}
const ga = n => n
  , pb = (n, l) => i => l(n(i))
  , vs = (...n) => n.reduce(pb)
  , us = (n, l, i) => {
    const o = l - n;
    return o === 0 ? 1 : (i - n) / o
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
    notify(l, i, o) {
        const c = this.subscriptions.length;
        if (c)
            if (c === 1)
                this.subscriptions[0](l, i, o);
            else
                for (let f = 0; f < c; f++) {
                    const d = this.subscriptions[f];
                    d && d(l, i, o)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const Oa = n => n * 1e3
  , Ra = n => n / 1e3;
function ay(n, l) {
    return l ? n * (1e3 / l) : 0
}
const ny = (n, l, i) => (((1 - 3 * i + 3 * l) * n + (3 * i - 6 * l)) * n + 3 * l) * n
  , gb = 1e-7
  , yb = 12;
function vb(n, l, i, o, c) {
    let f, d, g = 0;
    do
        d = l + (i - l) / 2,
        f = ny(d, o, c) - n,
        f > 0 ? i = d : l = d;
    while (Math.abs(f) > gb && ++g < yb);
    return d
}
function xs(n, l, i, o) {
    if (n === l && i === o)
        return ga;
    const c = f => vb(f, 0, 1, n, i);
    return f => f === 0 || f === 1 ? f : ny(c(f), l, o)
}
const ly = n => l => l <= .5 ? n(2 * l) / 2 : (2 - n(2 * (1 - l))) / 2
  , iy = n => l => 1 - n(1 - l)
  , sy = xs(.33, 1.53, .69, .99)
  , uf = iy(sy)
  , oy = ly(uf)
  , ry = n => (n *= 2) < 1 ? .5 * uf(n) : .5 * (2 - Math.pow(2, -10 * (n - 1)))
  , cf = n => 1 - Math.sin(Math.acos(n))
  , uy = iy(cf)
  , cy = ly(cf)
  , xb = xs(.42, 0, 1, 1)
  , bb = xs(0, 0, .58, 1)
  , fy = xs(.42, 0, .58, 1)
  , Sb = n => Array.isArray(n) && typeof n[0] != "number"
  , dy = n => Array.isArray(n) && typeof n[0] == "number"
  , Tb = {
    linear: ga,
    easeIn: xb,
    easeInOut: fy,
    easeOut: bb,
    circIn: cf,
    circInOut: cy,
    circOut: uy,
    backIn: uf,
    backInOut: oy,
    backOut: sy,
    anticipate: ry
}
  , jb = n => typeof n == "string"
  , Ep = n => {
    if (dy(n)) {
        sf(n.length === 4);
        const [l,i,o,c] = n;
        return xs(l, i, o, c)
    } else if (jb(n))
        return Tb[n];
    return n
}
  , ko = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"]
  , Cp = {
    value: null
};
function wb(n, l) {
    let i = new Set
      , o = new Set
      , c = !1
      , f = !1;
    const d = new WeakSet;
    let g = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , p = 0;
    function m(x) {
        d.has(x) && (y.schedule(x),
        n()),
        p++,
        x(g)
    }
    const y = {
        schedule: (x, T=!1, w=!1) => {
            const D = w && c ? i : o;
            return T && d.add(x),
            D.has(x) || D.add(x),
            x
        }
        ,
        cancel: x => {
            o.delete(x),
            d.delete(x)
        }
        ,
        process: x => {
            if (g = x,
            c) {
                f = !0;
                return
            }
            c = !0,
            [i,o] = [o, i],
            i.forEach(m),
            l && Cp.value && Cp.value.frameloop[l].push(p),
            p = 0,
            i.clear(),
            c = !1,
            f && (f = !1,
            y.process(x))
        }
    };
    return y
}
const Ab = 40;
function hy(n, l) {
    let i = !1
      , o = !0;
    const c = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , f = () => i = !0
      , d = ko.reduce( (B, K) => (B[K] = wb(f, l ? K : void 0),
    B), {})
      , {setup: g, read: p, resolveKeyframes: m, preUpdate: y, update: x, preRender: T, render: w, postRender: N} = d
      , D = () => {
        const B = sn.useManualTiming ? c.timestamp : performance.now();
        i = !1,
        sn.useManualTiming || (c.delta = o ? 1e3 / 60 : Math.max(Math.min(B - c.timestamp, Ab), 1)),
        c.timestamp = B,
        c.isProcessing = !0,
        g.process(c),
        p.process(c),
        m.process(c),
        y.process(c),
        x.process(c),
        T.process(c),
        w.process(c),
        N.process(c),
        c.isProcessing = !1,
        i && l && (o = !1,
        n(D))
    }
      , _ = () => {
        i = !0,
        o = !0,
        c.isProcessing || n(D)
    }
    ;
    return {
        schedule: ko.reduce( (B, K) => {
            const R = d[K];
            return B[K] = (Z, I=!1, Q=!1) => (i || _(),
            R.schedule(Z, I, Q)),
            B
        }
        , {}),
        cancel: B => {
            for (let K = 0; K < ko.length; K++)
                d[ko[K]].cancel(B)
        }
        ,
        state: c,
        steps: d
    }
}
const {schedule: at, cancel: Vn, state: Ot, steps: vc} = hy(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ga, !0);
let Yo;
function Nb() {
    Yo = void 0
}
const Gt = {
    now: () => (Yo === void 0 && Gt.set(Ot.isProcessing || sn.useManualTiming ? Ot.timestamp : performance.now()),
    Yo),
    set: n => {
        Yo = n,
        queueMicrotask(Nb)
    }
}
  , my = n => l => typeof l == "string" && l.startsWith(n)
  , ff = my("--")
  , Eb = my("var(--")
  , df = n => Eb(n) ? Cb.test(n.split("/*")[0].trim()) : !1
  , Cb = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , $l = {
    test: n => typeof n == "number",
    parse: parseFloat,
    transform: n => n
}
  , cs = {
    ...$l,
    transform: n => ln(0, 1, n)
}
  , Ho = {
    ...$l,
    default: 1
}
  , ls = n => Math.round(n * 1e5) / 1e5
  , hf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Db(n) {
    return n == null
}
const _b = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , mf = (n, l) => i => !!(typeof i == "string" && _b.test(i) && i.startsWith(n) || l && !Db(i) && Object.prototype.hasOwnProperty.call(i, l))
  , py = (n, l, i) => o => {
    if (typeof o != "string")
        return o;
    const [c,f,d,g] = o.match(hf);
    return {
        [n]: parseFloat(c),
        [l]: parseFloat(f),
        [i]: parseFloat(d),
        alpha: g !== void 0 ? parseFloat(g) : 1
    }
}
  , Mb = n => ln(0, 255, n)
  , xc = {
    ...$l,
    transform: n => Math.round(Mb(n))
}
  , al = {
    test: mf("rgb", "red"),
    parse: py("red", "green", "blue"),
    transform: ({red: n, green: l, blue: i, alpha: o=1}) => "rgba(" + xc.transform(n) + ", " + xc.transform(l) + ", " + xc.transform(i) + ", " + ls(cs.transform(o)) + ")"
};
function Ob(n) {
    let l = ""
      , i = ""
      , o = ""
      , c = "";
    return n.length > 5 ? (l = n.substring(1, 3),
    i = n.substring(3, 5),
    o = n.substring(5, 7),
    c = n.substring(7, 9)) : (l = n.substring(1, 2),
    i = n.substring(2, 3),
    o = n.substring(3, 4),
    c = n.substring(4, 5),
    l += l,
    i += i,
    o += o,
    c += c),
    {
        red: parseInt(l, 16),
        green: parseInt(i, 16),
        blue: parseInt(o, 16),
        alpha: c ? parseInt(c, 16) / 255 : 1
    }
}
const Oc = {
    test: mf("#"),
    parse: Ob,
    transform: al.transform
}
  , bs = n => ({
    test: l => typeof l == "string" && l.endsWith(n) && l.split(" ").length === 1,
    parse: parseFloat,
    transform: l => `${l}${n}`
})
  , On = bs("deg")
  , Va = bs("%")
  , ve = bs("px")
  , Rb = bs("vh")
  , Vb = bs("vw")
  , Dp = {
    ...Va,
    parse: n => Va.parse(n) / 100,
    transform: n => Va.transform(n * 100)
}
  , Xl = {
    test: mf("hsl", "hue"),
    parse: py("hue", "saturation", "lightness"),
    transform: ({hue: n, saturation: l, lightness: i, alpha: o=1}) => "hsla(" + Math.round(n) + ", " + Va.transform(ls(l)) + ", " + Va.transform(ls(i)) + ", " + ls(cs.transform(o)) + ")"
}
  , yt = {
    test: n => al.test(n) || Oc.test(n) || Xl.test(n),
    parse: n => al.test(n) ? al.parse(n) : Xl.test(n) ? Xl.parse(n) : Oc.parse(n),
    transform: n => typeof n == "string" ? n : n.hasOwnProperty("red") ? al.transform(n) : Xl.transform(n),
    getAnimatableNone: n => {
        const l = yt.parse(n);
        return l.alpha = 0,
        yt.transform(l)
    }
}
  , zb = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Ub(n) {
    var l, i;
    return isNaN(n) && typeof n == "string" && (((l = n.match(hf)) == null ? void 0 : l.length) || 0) + (((i = n.match(zb)) == null ? void 0 : i.length) || 0) > 0
}
const gy = "number"
  , yy = "color"
  , Bb = "var"
  , Lb = "var("
  , _p = "${}"
  , kb = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function fs(n) {
    const l = n.toString()
      , i = []
      , o = {
        color: [],
        number: [],
        var: []
    }
      , c = [];
    let f = 0;
    const g = l.replace(kb, p => (yt.test(p) ? (o.color.push(f),
    c.push(yy),
    i.push(yt.parse(p))) : p.startsWith(Lb) ? (o.var.push(f),
    c.push(Bb),
    i.push(p)) : (o.number.push(f),
    c.push(gy),
    i.push(parseFloat(p))),
    ++f,
    _p)).split(_p);
    return {
        values: i,
        split: g,
        indexes: o,
        types: c
    }
}
function vy(n) {
    return fs(n).values
}
function xy(n) {
    const {split: l, types: i} = fs(n)
      , o = l.length;
    return c => {
        let f = "";
        for (let d = 0; d < o; d++)
            if (f += l[d],
            c[d] !== void 0) {
                const g = i[d];
                g === gy ? f += ls(c[d]) : g === yy ? f += yt.transform(c[d]) : f += c[d]
            }
        return f
    }
}
const Hb = n => typeof n == "number" ? 0 : yt.test(n) ? yt.getAnimatableNone(n) : n;
function Pb(n) {
    const l = vy(n);
    return xy(n)(l.map(Hb))
}
const zn = {
    test: Ub,
    parse: vy,
    createTransformer: xy,
    getAnimatableNone: Pb
};
function bc(n, l, i) {
    return i < 0 && (i += 1),
    i > 1 && (i -= 1),
    i < 1 / 6 ? n + (l - n) * 6 * i : i < 1 / 2 ? l : i < 2 / 3 ? n + (l - n) * (2 / 3 - i) * 6 : n
}
function qb({hue: n, saturation: l, lightness: i, alpha: o}) {
    n /= 360,
    l /= 100,
    i /= 100;
    let c = 0
      , f = 0
      , d = 0;
    if (!l)
        c = f = d = i;
    else {
        const g = i < .5 ? i * (1 + l) : i + l - i * l
          , p = 2 * i - g;
        c = bc(p, g, n + 1 / 3),
        f = bc(p, g, n),
        d = bc(p, g, n - 1 / 3)
    }
    return {
        red: Math.round(c * 255),
        green: Math.round(f * 255),
        blue: Math.round(d * 255),
        alpha: o
    }
}
function Zo(n, l) {
    return i => i > 0 ? l : n
}
const tt = (n, l, i) => n + (l - n) * i
  , Sc = (n, l, i) => {
    const o = n * n
      , c = i * (l * l - o) + o;
    return c < 0 ? 0 : Math.sqrt(c)
}
  , Yb = [Oc, al, Xl]
  , Gb = n => Yb.find(l => l.test(n));
function Mp(n) {
    const l = Gb(n);
    if (!l)
        return !1;
    let i = l.parse(n);
    return l === Xl && (i = qb(i)),
    i
}
const Op = (n, l) => {
    const i = Mp(n)
      , o = Mp(l);
    if (!i || !o)
        return Zo(n, l);
    const c = {
        ...i
    };
    return f => (c.red = Sc(i.red, o.red, f),
    c.green = Sc(i.green, o.green, f),
    c.blue = Sc(i.blue, o.blue, f),
    c.alpha = tt(i.alpha, o.alpha, f),
    al.transform(c))
}
  , Rc = new Set(["none", "hidden"]);
function Xb(n, l) {
    return Rc.has(n) ? i => i <= 0 ? n : l : i => i >= 1 ? l : n
}
function Kb(n, l) {
    return i => tt(n, l, i)
}
function pf(n) {
    return typeof n == "number" ? Kb : typeof n == "string" ? df(n) ? Zo : yt.test(n) ? Op : Fb : Array.isArray(n) ? by : typeof n == "object" ? yt.test(n) ? Op : Zb : Zo
}
function by(n, l) {
    const i = [...n]
      , o = i.length
      , c = n.map( (f, d) => pf(f)(f, l[d]));
    return f => {
        for (let d = 0; d < o; d++)
            i[d] = c[d](f);
        return i
    }
}
function Zb(n, l) {
    const i = {
        ...n,
        ...l
    }
      , o = {};
    for (const c in i)
        n[c] !== void 0 && l[c] !== void 0 && (o[c] = pf(n[c])(n[c], l[c]));
    return c => {
        for (const f in o)
            i[f] = o[f](c);
        return i
    }
}
function Qb(n, l) {
    const i = []
      , o = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let c = 0; c < l.values.length; c++) {
        const f = l.types[c]
          , d = n.indexes[f][o[f]]
          , g = n.values[d] ?? 0;
        i[c] = g,
        o[f]++
    }
    return i
}
const Fb = (n, l) => {
    const i = zn.createTransformer(l)
      , o = fs(n)
      , c = fs(l);
    return o.indexes.var.length === c.indexes.var.length && o.indexes.color.length === c.indexes.color.length && o.indexes.number.length >= c.indexes.number.length ? Rc.has(n) && !c.values.length || Rc.has(l) && !o.values.length ? Xb(n, l) : vs(by(Qb(o, c), c.values), i) : Zo(n, l)
}
;
function Sy(n, l, i) {
    return typeof n == "number" && typeof l == "number" && typeof i == "number" ? tt(n, l, i) : pf(n)(n, l)
}
const Jb = n => {
    const l = ({timestamp: i}) => n(i);
    return {
        start: (i=!0) => at.update(l, i),
        stop: () => Vn(l),
        now: () => Ot.isProcessing ? Ot.timestamp : Gt.now()
    }
}
  , Ty = (n, l, i=10) => {
    let o = "";
    const c = Math.max(Math.round(l / i), 2);
    for (let f = 0; f < c; f++)
        o += Math.round(n(f / (c - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${o.substring(0, o.length - 2)})`
}
  , Qo = 2e4;
function gf(n) {
    let l = 0;
    const i = 50;
    let o = n.next(l);
    for (; !o.done && l < Qo; )
        l += i,
        o = n.next(l);
    return l >= Qo ? 1 / 0 : l
}
function Ib(n, l=100, i) {
    const o = i({
        ...n,
        keyframes: [0, l]
    })
      , c = Math.min(gf(o), Qo);
    return {
        type: "keyframes",
        ease: f => o.next(c * f).value / l,
        duration: Ra(c)
    }
}
const $b = 5;
function jy(n, l, i) {
    const o = Math.max(l - $b, 0);
    return ay(i - n(o), l - o)
}
const it = {
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
  , Tc = .001;
function Wb({duration: n=it.duration, bounce: l=it.bounce, velocity: i=it.velocity, mass: o=it.mass}) {
    let c, f, d = 1 - l;
    d = ln(it.minDamping, it.maxDamping, d),
    n = ln(it.minDuration, it.maxDuration, Ra(n)),
    d < 1 ? (c = m => {
        const y = m * d
          , x = y * n
          , T = y - i
          , w = Vc(m, d)
          , N = Math.exp(-x);
        return Tc - T / w * N
    }
    ,
    f = m => {
        const x = m * d * n
          , T = x * i + i
          , w = Math.pow(d, 2) * Math.pow(m, 2) * n
          , N = Math.exp(-x)
          , D = Vc(Math.pow(m, 2), d);
        return (-c(m) + Tc > 0 ? -1 : 1) * ((T - w) * N) / D
    }
    ) : (c = m => {
        const y = Math.exp(-m * n)
          , x = (m - i) * n + 1;
        return -Tc + y * x
    }
    ,
    f = m => {
        const y = Math.exp(-m * n)
          , x = (i - m) * (n * n);
        return y * x
    }
    );
    const g = 5 / n
      , p = t1(c, f, g);
    if (n = Oa(n),
    isNaN(p))
        return {
            stiffness: it.stiffness,
            damping: it.damping,
            duration: n
        };
    {
        const m = Math.pow(p, 2) * o;
        return {
            stiffness: m,
            damping: d * 2 * Math.sqrt(o * m),
            duration: n
        }
    }
}
const e1 = 12;
function t1(n, l, i) {
    let o = i;
    for (let c = 1; c < e1; c++)
        o = o - n(o) / l(o);
    return o
}
function Vc(n, l) {
    return n * Math.sqrt(1 - l * l)
}
const a1 = ["duration", "bounce"]
  , n1 = ["stiffness", "damping", "mass"];
function Rp(n, l) {
    return l.some(i => n[i] !== void 0)
}
function l1(n) {
    let l = {
        velocity: it.velocity,
        stiffness: it.stiffness,
        damping: it.damping,
        mass: it.mass,
        isResolvedFromDuration: !1,
        ...n
    };
    if (!Rp(n, n1) && Rp(n, a1))
        if (n.visualDuration) {
            const i = n.visualDuration
              , o = 2 * Math.PI / (i * 1.2)
              , c = o * o
              , f = 2 * ln(.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(c);
            l = {
                ...l,
                mass: it.mass,
                stiffness: c,
                damping: f
            }
        } else {
            const i = Wb(n);
            l = {
                ...l,
                ...i,
                mass: it.mass
            },
            l.isResolvedFromDuration = !0
        }
    return l
}
function Fo(n=it.visualDuration, l=it.bounce) {
    const i = typeof n != "object" ? {
        visualDuration: n,
        keyframes: [0, 1],
        bounce: l
    } : n;
    let {restSpeed: o, restDelta: c} = i;
    const f = i.keyframes[0]
      , d = i.keyframes[i.keyframes.length - 1]
      , g = {
        done: !1,
        value: f
    }
      , {stiffness: p, damping: m, mass: y, duration: x, velocity: T, isResolvedFromDuration: w} = l1({
        ...i,
        velocity: -Ra(i.velocity || 0)
    })
      , N = T || 0
      , D = m / (2 * Math.sqrt(p * y))
      , _ = d - f
      , V = Ra(Math.sqrt(p / y))
      , k = Math.abs(_) < 5;
    o || (o = k ? it.restSpeed.granular : it.restSpeed.default),
    c || (c = k ? it.restDelta.granular : it.restDelta.default);
    let B;
    if (D < 1) {
        const R = Vc(V, D);
        B = Z => {
            const I = Math.exp(-D * V * Z);
            return d - I * ((N + D * V * _) / R * Math.sin(R * Z) + _ * Math.cos(R * Z))
        }
    } else if (D === 1)
        B = R => d - Math.exp(-V * R) * (_ + (N + V * _) * R);
    else {
        const R = V * Math.sqrt(D * D - 1);
        B = Z => {
            const I = Math.exp(-D * V * Z)
              , Q = Math.min(R * Z, 300);
            return d - I * ((N + D * V * _) * Math.sinh(Q) + R * _ * Math.cosh(Q)) / R
        }
    }
    const K = {
        calculatedDuration: w && x || null,
        next: R => {
            const Z = B(R);
            if (w)
                g.done = R >= x;
            else {
                let I = R === 0 ? N : 0;
                D < 1 && (I = R === 0 ? Oa(N) : jy(B, R, Z));
                const Q = Math.abs(I) <= o
                  , ie = Math.abs(d - Z) <= c;
                g.done = Q && ie
            }
            return g.value = g.done ? d : Z,
            g
        }
        ,
        toString: () => {
            const R = Math.min(gf(K), Qo)
              , Z = Ty(I => K.next(R * I).value, R, 30);
            return R + "ms " + Z
        }
        ,
        toTransition: () => {}
    };
    return K
}
Fo.applyToOptions = n => {
    const l = Ib(n, 100, Fo);
    return n.ease = l.ease,
    n.duration = Oa(l.duration),
    n.type = "keyframes",
    n
}
;
function zc({keyframes: n, velocity: l=0, power: i=.8, timeConstant: o=325, bounceDamping: c=10, bounceStiffness: f=500, modifyTarget: d, min: g, max: p, restDelta: m=.5, restSpeed: y}) {
    const x = n[0]
      , T = {
        done: !1,
        value: x
    }
      , w = Q => g !== void 0 && Q < g || p !== void 0 && Q > p
      , N = Q => g === void 0 ? p : p === void 0 || Math.abs(g - Q) < Math.abs(p - Q) ? g : p;
    let D = i * l;
    const _ = x + D
      , V = d === void 0 ? _ : d(_);
    V !== _ && (D = V - x);
    const k = Q => -D * Math.exp(-Q / o)
      , B = Q => V + k(Q)
      , K = Q => {
        const ie = k(Q)
          , fe = B(Q);
        T.done = Math.abs(ie) <= m,
        T.value = T.done ? V : fe
    }
    ;
    let R, Z;
    const I = Q => {
        w(T.value) && (R = Q,
        Z = Fo({
            keyframes: [T.value, N(T.value)],
            velocity: jy(B, Q, T.value),
            damping: c,
            stiffness: f,
            restDelta: m,
            restSpeed: y
        }))
    }
    ;
    return I(0),
    {
        calculatedDuration: null,
        next: Q => {
            let ie = !1;
            return !Z && R === void 0 && (ie = !0,
            K(Q),
            I(Q)),
            R !== void 0 && Q >= R ? Z.next(Q - R) : (!ie && K(Q),
            T)
        }
    }
}
function i1(n, l, i) {
    const o = []
      , c = i || sn.mix || Sy
      , f = n.length - 1;
    for (let d = 0; d < f; d++) {
        let g = c(n[d], n[d + 1]);
        if (l) {
            const p = Array.isArray(l) ? l[d] || ga : l;
            g = vs(p, g)
        }
        o.push(g)
    }
    return o
}
function s1(n, l, {clamp: i=!0, ease: o, mixer: c}={}) {
    const f = n.length;
    if (sf(f === l.length),
    f === 1)
        return () => l[0];
    if (f === 2 && l[0] === l[1])
        return () => l[1];
    const d = n[0] === n[1];
    n[0] > n[f - 1] && (n = [...n].reverse(),
    l = [...l].reverse());
    const g = i1(l, o, c)
      , p = g.length
      , m = y => {
        if (d && y < n[0])
            return l[0];
        let x = 0;
        if (p > 1)
            for (; x < n.length - 2 && !(y < n[x + 1]); x++)
                ;
        const T = us(n[x], n[x + 1], y);
        return g[x](T)
    }
    ;
    return i ? y => m(ln(n[0], n[f - 1], y)) : m
}
function o1(n, l) {
    const i = n[n.length - 1];
    for (let o = 1; o <= l; o++) {
        const c = us(0, l, o);
        n.push(tt(i, 1, c))
    }
}
function r1(n) {
    const l = [0];
    return o1(l, n.length - 1),
    l
}
function u1(n, l) {
    return n.map(i => i * l)
}
function c1(n, l) {
    return n.map( () => l || fy).splice(0, n.length - 1)
}
function is({duration: n=300, keyframes: l, times: i, ease: o="easeInOut"}) {
    const c = Sb(o) ? o.map(Ep) : Ep(o)
      , f = {
        done: !1,
        value: l[0]
    }
      , d = u1(i && i.length === l.length ? i : r1(l), n)
      , g = s1(d, l, {
        ease: Array.isArray(c) ? c : c1(l, c)
    });
    return {
        calculatedDuration: n,
        next: p => (f.value = g(p),
        f.done = p >= n,
        f)
    }
}
const f1 = n => n !== null;
function yf(n, {repeat: l, repeatType: i="loop"}, o, c=1) {
    const f = n.filter(f1)
      , g = c < 0 || l && i !== "loop" && l % 2 === 1 ? 0 : f.length - 1;
    return !g || o === void 0 ? f[g] : o
}
const d1 = {
    decay: zc,
    inertia: zc,
    tween: is,
    keyframes: is,
    spring: Fo
};
function wy(n) {
    typeof n.type == "string" && (n.type = d1[n.type])
}
class vf {
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
    then(l, i) {
        return this.finished.then(l, i)
    }
}
const h1 = n => n / 100;
class xf extends vf {
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
            const {motionValue: i} = this.options;
            i && i.updatedAt !== Gt.now() && this.tick(Gt.now()),
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
        wy(l);
        const {type: i=is, repeat: o=0, repeatDelay: c=0, repeatType: f, velocity: d=0} = l;
        let {keyframes: g} = l;
        const p = i || is;
        p !== is && typeof g[0] != "number" && (this.mixKeyframes = vs(h1, Sy(g[0], g[1])),
        g = [0, 100]);
        const m = p({
            ...l,
            keyframes: g
        });
        f === "mirror" && (this.mirroredGenerator = p({
            ...l,
            keyframes: [...g].reverse(),
            velocity: -d
        })),
        m.calculatedDuration === null && (m.calculatedDuration = gf(m));
        const {calculatedDuration: y} = m;
        this.calculatedDuration = y,
        this.resolvedDuration = y + c,
        this.totalDuration = this.resolvedDuration * (o + 1) - c,
        this.generator = m
    }
    updateTime(l) {
        const i = Math.round(l - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = i
    }
    tick(l, i=!1) {
        const {generator: o, totalDuration: c, mixKeyframes: f, mirroredGenerator: d, resolvedDuration: g, calculatedDuration: p} = this;
        if (this.startTime === null)
            return o.next(0);
        const {delay: m=0, keyframes: y, repeat: x, repeatType: T, repeatDelay: w, type: N, onUpdate: D, finalKeyframe: _} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - c / this.speed, this.startTime)),
        i ? this.currentTime = l : this.updateTime(l);
        const V = this.currentTime - m * (this.playbackSpeed >= 0 ? 1 : -1)
          , k = this.playbackSpeed >= 0 ? V < 0 : V > c;
        this.currentTime = Math.max(V, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = c);
        let B = this.currentTime
          , K = o;
        if (x) {
            const Q = Math.min(this.currentTime, c) / g;
            let ie = Math.floor(Q)
              , fe = Q % 1;
            !fe && Q >= 1 && (fe = 1),
            fe === 1 && ie--,
            ie = Math.min(ie, x + 1),
            !!(ie % 2) && (T === "reverse" ? (fe = 1 - fe,
            w && (fe -= w / g)) : T === "mirror" && (K = d)),
            B = ln(0, 1, fe) * g
        }
        const R = k ? {
            done: !1,
            value: y[0]
        } : K.next(B);
        f && (R.value = f(R.value));
        let {done: Z} = R;
        !k && p !== null && (Z = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        const I = this.holdTime === null && (this.state === "finished" || this.state === "running" && Z);
        return I && N !== zc && (R.value = yf(y, this.options, _, this.speed)),
        D && D(R.value),
        I && this.finish(),
        R
    }
    then(l, i) {
        return this.finished.then(l, i)
    }
    get duration() {
        return Ra(this.calculatedDuration)
    }
    get time() {
        return Ra(this.currentTime)
    }
    set time(l) {
        var i;
        l = Oa(l),
        this.currentTime = l,
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = l : this.driver && (this.startTime = this.driver.now() - l / this.playbackSpeed),
        (i = this.driver) == null || i.start(!1)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(l) {
        this.updateTime(Gt.now());
        const i = this.playbackSpeed !== l;
        this.playbackSpeed = l,
        i && (this.time = Ra(this.currentTime))
    }
    play() {
        var c, f;
        if (this.isStopped)
            return;
        const {driver: l=Jb, startTime: i} = this.options;
        this.driver || (this.driver = l(d => this.tick(d))),
        (f = (c = this.options).onPlay) == null || f.call(c);
        const o = this.driver.now();
        this.state === "finished" ? (this.updateFinished(),
        this.startTime = o) : this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime || (this.startTime = i ?? o),
        this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        this.state = "paused",
        this.updateTime(Gt.now()),
        this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(),
        this.state = "finished",
        this.holdTime = null
    }
    finish() {
        var l, i;
        this.notifyFinished(),
        this.teardown(),
        this.state = "finished",
        (i = (l = this.options).onComplete) == null || i.call(l)
    }
    cancel() {
        var l, i;
        this.holdTime = null,
        this.startTime = 0,
        this.tick(0),
        this.teardown(),
        (i = (l = this.options).onCancel) == null || i.call(l)
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
        var i;
        return this.options.allowFlatten && (this.options.type = "keyframes",
        this.options.ease = "linear",
        this.initAnimation()),
        (i = this.driver) == null || i.stop(),
        l.observe(this)
    }
}
function m1(n) {
    for (let l = 1; l < n.length; l++)
        n[l] ?? (n[l] = n[l - 1])
}
const nl = n => n * 180 / Math.PI
  , Uc = n => {
    const l = nl(Math.atan2(n[1], n[0]));
    return Bc(l)
}
  , p1 = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: n => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
    rotate: Uc,
    rotateZ: Uc,
    skewX: n => nl(Math.atan(n[1])),
    skewY: n => nl(Math.atan(n[2])),
    skew: n => (Math.abs(n[1]) + Math.abs(n[2])) / 2
}
  , Bc = n => (n = n % 360,
n < 0 && (n += 360),
n)
  , Vp = Uc
  , zp = n => Math.sqrt(n[0] * n[0] + n[1] * n[1])
  , Up = n => Math.sqrt(n[4] * n[4] + n[5] * n[5])
  , g1 = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: zp,
    scaleY: Up,
    scale: n => (zp(n) + Up(n)) / 2,
    rotateX: n => Bc(nl(Math.atan2(n[6], n[5]))),
    rotateY: n => Bc(nl(Math.atan2(-n[2], n[0]))),
    rotateZ: Vp,
    rotate: Vp,
    skewX: n => nl(Math.atan(n[4])),
    skewY: n => nl(Math.atan(n[1])),
    skew: n => (Math.abs(n[1]) + Math.abs(n[4])) / 2
};
function Lc(n) {
    return n.includes("scale") ? 1 : 0
}
function kc(n, l) {
    if (!n || n === "none")
        return Lc(l);
    const i = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let o, c;
    if (i)
        o = g1,
        c = i;
    else {
        const g = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        o = p1,
        c = g
    }
    if (!c)
        return Lc(l);
    const f = o[l]
      , d = c[1].split(",").map(v1);
    return typeof f == "function" ? f(d) : d[f]
}
const y1 = (n, l) => {
    const {transform: i="none"} = getComputedStyle(n);
    return kc(i, l)
}
;
function v1(n) {
    return parseFloat(n.trim())
}
const Wl = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , ei = new Set(Wl)
  , Bp = n => n === $l || n === ve
  , x1 = new Set(["x", "y", "z"])
  , b1 = Wl.filter(n => !x1.has(n));
function S1(n) {
    const l = [];
    return b1.forEach(i => {
        const o = n.getValue(i);
        o !== void 0 && (l.push([i, o.get()]),
        o.set(i.startsWith("scale") ? 1 : 0))
    }
    ),
    l
}
const ll = {
    width: ({x: n}, {paddingLeft: l="0", paddingRight: i="0"}) => n.max - n.min - parseFloat(l) - parseFloat(i),
    height: ({y: n}, {paddingTop: l="0", paddingBottom: i="0"}) => n.max - n.min - parseFloat(l) - parseFloat(i),
    top: (n, {top: l}) => parseFloat(l),
    left: (n, {left: l}) => parseFloat(l),
    bottom: ({y: n}, {top: l}) => parseFloat(l) + (n.max - n.min),
    right: ({x: n}, {left: l}) => parseFloat(l) + (n.max - n.min),
    x: (n, {transform: l}) => kc(l, "x"),
    y: (n, {transform: l}) => kc(l, "y")
};
ll.translateX = ll.x;
ll.translateY = ll.y;
const il = new Set;
let Hc = !1
  , Pc = !1
  , qc = !1;
function Ay() {
    if (Pc) {
        const n = Array.from(il).filter(o => o.needsMeasurement)
          , l = new Set(n.map(o => o.element))
          , i = new Map;
        l.forEach(o => {
            const c = S1(o);
            c.length && (i.set(o, c),
            o.render())
        }
        ),
        n.forEach(o => o.measureInitialState()),
        l.forEach(o => {
            o.render();
            const c = i.get(o);
            c && c.forEach( ([f,d]) => {
                var g;
                (g = o.getValue(f)) == null || g.set(d)
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
    Pc = !1,
    Hc = !1,
    il.forEach(n => n.complete(qc)),
    il.clear()
}
function Ny() {
    il.forEach(n => {
        n.readKeyframes(),
        n.needsMeasurement && (Pc = !0)
    }
    )
}
function T1() {
    qc = !0,
    Ny(),
    Ay(),
    qc = !1
}
class bf {
    constructor(l, i, o, c, f, d=!1) {
        this.state = "pending",
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.unresolvedKeyframes = [...l],
        this.onComplete = i,
        this.name = o,
        this.motionValue = c,
        this.element = f,
        this.isAsync = d
    }
    scheduleResolve() {
        this.state = "scheduled",
        this.isAsync ? (il.add(this),
        Hc || (Hc = !0,
        at.read(Ny),
        at.resolveKeyframes(Ay))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: l, name: i, element: o, motionValue: c} = this;
        if (l[0] === null) {
            const f = c == null ? void 0 : c.get()
              , d = l[l.length - 1];
            if (f !== void 0)
                l[0] = f;
            else if (o && i) {
                const g = o.readValue(i, d);
                g != null && (l[0] = g)
            }
            l[0] === void 0 && (l[0] = d),
            c && f === void 0 && c.set(l[0])
        }
        m1(l)
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
const j1 = n => n.startsWith("--");
function w1(n, l, i) {
    j1(l) ? n.style.setProperty(l, i) : n.style[l] = i
}
const A1 = of( () => window.ScrollTimeline !== void 0)
  , N1 = {};
function E1(n, l) {
    const i = of(n);
    return () => N1[l] ?? i()
}
const Ey = E1( () => {
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
  , as = ([n,l,i,o]) => `cubic-bezier(${n}, ${l}, ${i}, ${o})`
  , Lp = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: as([0, .65, .55, 1]),
    circOut: as([.55, 0, 1, .45]),
    backIn: as([.31, .01, .66, -.59]),
    backOut: as([.33, 1.53, .69, .99])
};
function Cy(n, l) {
    if (n)
        return typeof n == "function" ? Ey() ? Ty(n, l) : "ease-out" : dy(n) ? as(n) : Array.isArray(n) ? n.map(i => Cy(i, l) || Lp.easeOut) : Lp[n]
}
function C1(n, l, i, {delay: o=0, duration: c=300, repeat: f=0, repeatType: d="loop", ease: g="easeOut", times: p}={}, m=void 0) {
    const y = {
        [l]: i
    };
    p && (y.offset = p);
    const x = Cy(g, c);
    Array.isArray(x) && (y.easing = x);
    const T = {
        delay: o,
        duration: c,
        easing: Array.isArray(x) ? "linear" : x,
        fill: "both",
        iterations: f + 1,
        direction: d === "reverse" ? "alternate" : "normal"
    };
    return m && (T.pseudoElement = m),
    n.animate(y, T)
}
function Dy(n) {
    return typeof n == "function" && "applyToOptions"in n
}
function D1({type: n, ...l}) {
    return Dy(n) && Ey() ? n.applyToOptions(l) : (l.duration ?? (l.duration = 300),
    l.ease ?? (l.ease = "easeOut"),
    l)
}
class _1 extends vf {
    constructor(l) {
        if (super(),
        this.finishedTime = null,
        this.isStopped = !1,
        !l)
            return;
        const {element: i, name: o, keyframes: c, pseudoElement: f, allowFlatten: d=!1, finalKeyframe: g, onComplete: p} = l;
        this.isPseudoElement = !!f,
        this.allowFlatten = d,
        this.options = l,
        sf(typeof l.type != "string");
        const m = D1(l);
        this.animation = C1(i, o, c, m, f),
        m.autoplay === !1 && this.animation.pause(),
        this.animation.onfinish = () => {
            if (this.finishedTime = this.time,
            !f) {
                const y = yf(c, this.options, g, this.speed);
                this.updateMotionValue ? this.updateMotionValue(y) : w1(i, o, y),
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
        var l, i;
        (i = (l = this.animation).finish) == null || i.call(l)
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
        var l, i;
        this.isPseudoElement || (i = (l = this.animation).commitStyles) == null || i.call(l)
    }
    get duration() {
        var i, o;
        const l = ((o = (i = this.animation.effect) == null ? void 0 : i.getComputedTiming) == null ? void 0 : o.call(i).duration) || 0;
        return Ra(Number(l))
    }
    get time() {
        return Ra(Number(this.animation.currentTime) || 0)
    }
    set time(l) {
        this.finishedTime = null,
        this.animation.currentTime = Oa(l)
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
    attachTimeline({timeline: l, observe: i}) {
        var o;
        return this.allowFlatten && ((o = this.animation.effect) == null || o.updateTiming({
            easing: "linear"
        })),
        this.animation.onfinish = null,
        l && A1() ? (this.animation.timeline = l,
        ga) : i(this)
    }
}
const _y = {
    anticipate: ry,
    backInOut: oy,
    circInOut: cy
};
function M1(n) {
    return n in _y
}
function O1(n) {
    typeof n.ease == "string" && M1(n.ease) && (n.ease = _y[n.ease])
}
const kp = 10;
class R1 extends _1 {
    constructor(l) {
        O1(l),
        wy(l),
        super(l),
        l.startTime && (this.startTime = l.startTime),
        this.options = l
    }
    updateMotionValue(l) {
        const {motionValue: i, onUpdate: o, onComplete: c, element: f, ...d} = this.options;
        if (!i)
            return;
        if (l !== void 0) {
            i.set(l);
            return
        }
        const g = new xf({
            ...d,
            autoplay: !1
        })
          , p = Oa(this.finishedTime ?? this.time);
        i.setWithVelocity(g.sample(p - kp).value, g.sample(p).value, kp),
        g.stop()
    }
}
const Hp = (n, l) => l === "zIndex" ? !1 : !!(typeof n == "number" || Array.isArray(n) || typeof n == "string" && (zn.test(n) || n === "0") && !n.startsWith("url("));
function V1(n) {
    const l = n[0];
    if (n.length === 1)
        return !0;
    for (let i = 0; i < n.length; i++)
        if (n[i] !== l)
            return !0
}
function z1(n, l, i, o) {
    const c = n[0];
    if (c === null)
        return !1;
    if (l === "display" || l === "visibility")
        return !0;
    const f = n[n.length - 1]
      , d = Hp(c, l)
      , g = Hp(f, l);
    return !d || !g ? !1 : V1(n) || (i === "spring" || Dy(i)) && o
}
function Sf(n) {
    return ey(n) && "offsetHeight"in n
}
const U1 = new Set(["opacity", "clipPath", "filter", "transform"])
  , B1 = of( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
function L1(n) {
    var m;
    const {motionValue: l, name: i, repeatDelay: o, repeatType: c, damping: f, type: d} = n;
    if (!Sf((m = l == null ? void 0 : l.owner) == null ? void 0 : m.current))
        return !1;
    const {onUpdate: g, transformTemplate: p} = l.owner.getProps();
    return B1() && i && U1.has(i) && (i !== "transform" || !p) && !g && !o && c !== "mirror" && f !== 0 && d !== "inertia"
}
const k1 = 40;
class H1 extends vf {
    constructor({autoplay: l=!0, delay: i=0, type: o="keyframes", repeat: c=0, repeatDelay: f=0, repeatType: d="loop", keyframes: g, name: p, motionValue: m, element: y, ...x}) {
        var N;
        super(),
        this.stop = () => {
            var D, _;
            this._animation && (this._animation.stop(),
            (D = this.stopTimeline) == null || D.call(this)),
            (_ = this.keyframeResolver) == null || _.cancel()
        }
        ,
        this.createdAt = Gt.now();
        const T = {
            autoplay: l,
            delay: i,
            type: o,
            repeat: c,
            repeatDelay: f,
            repeatType: d,
            name: p,
            motionValue: m,
            element: y,
            ...x
        }
          , w = (y == null ? void 0 : y.KeyframeResolver) || bf;
        this.keyframeResolver = new w(g, (D, _, V) => this.onKeyframesResolved(D, _, T, !V),p,m,y),
        (N = this.keyframeResolver) == null || N.scheduleResolve()
    }
    onKeyframesResolved(l, i, o, c) {
        this.keyframeResolver = void 0;
        const {name: f, type: d, velocity: g, delay: p, isHandoff: m, onUpdate: y} = o;
        this.resolvedAt = Gt.now(),
        z1(l, f, d, g) || ((sn.instantAnimations || !p) && (y == null || y(yf(l, o, i))),
        l[0] = l[l.length - 1],
        o.duration = 0,
        o.repeat = 0);
        const T = {
            startTime: c ? this.resolvedAt ? this.resolvedAt - this.createdAt > k1 ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: i,
            ...o,
            keyframes: l
        }
          , w = !m && L1(T) ? new R1({
            ...T,
            element: T.motionValue.owner.current
        }) : new xf(T);
        w.finished.then( () => this.notifyFinished()).catch(ga),
        this.pendingTimeline && (this.stopTimeline = w.attachTimeline(this.pendingTimeline),
        this.pendingTimeline = void 0),
        this._animation = w
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(l, i) {
        return this.finished.finally(l).then( () => {}
        )
    }
    get animation() {
        var l;
        return this._animation || ((l = this.keyframeResolver) == null || l.resume(),
        T1()),
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
const P1 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function q1(n) {
    const l = P1.exec(n);
    if (!l)
        return [, ];
    const [,i,o,c] = l;
    return [`--${i ?? o}`, c]
}
function My(n, l, i=1) {
    const [o,c] = q1(n);
    if (!o)
        return;
    const f = window.getComputedStyle(l).getPropertyValue(o);
    if (f) {
        const d = f.trim();
        return Wg(d) ? parseFloat(d) : d
    }
    return df(c) ? My(c, l, i + 1) : c
}
function Tf(n, l) {
    return (n == null ? void 0 : n[l]) ?? (n == null ? void 0 : n.default) ?? n
}
const Oy = new Set(["width", "height", "top", "left", "right", "bottom", ...Wl])
  , Y1 = {
    test: n => n === "auto",
    parse: n => n
}
  , Ry = n => l => l.test(n)
  , Vy = [$l, ve, Va, On, Vb, Rb, Y1]
  , Pp = n => Vy.find(Ry(n));
function G1(n) {
    return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || ty(n) : !0
}
const X1 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function K1(n) {
    const [l,i] = n.slice(0, -1).split("(");
    if (l === "drop-shadow")
        return n;
    const [o] = i.match(hf) || [];
    if (!o)
        return n;
    const c = i.replace(o, "");
    let f = X1.has(l) ? 1 : 0;
    return o !== i && (f *= 100),
    l + "(" + f + c + ")"
}
const Z1 = /\b([a-z-]*)\(.*?\)/gu
  , Yc = {
    ...zn,
    getAnimatableNone: n => {
        const l = n.match(Z1);
        return l ? l.map(K1).join(" ") : n
    }
}
  , qp = {
    ...$l,
    transform: Math.round
}
  , Q1 = {
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
    distance: ve,
    translateX: ve,
    translateY: ve,
    translateZ: ve,
    x: ve,
    y: ve,
    z: ve,
    perspective: ve,
    transformPerspective: ve,
    opacity: cs,
    originX: Dp,
    originY: Dp,
    originZ: ve
}
  , jf = {
    borderWidth: ve,
    borderTopWidth: ve,
    borderRightWidth: ve,
    borderBottomWidth: ve,
    borderLeftWidth: ve,
    borderRadius: ve,
    radius: ve,
    borderTopLeftRadius: ve,
    borderTopRightRadius: ve,
    borderBottomRightRadius: ve,
    borderBottomLeftRadius: ve,
    width: ve,
    maxWidth: ve,
    height: ve,
    maxHeight: ve,
    top: ve,
    right: ve,
    bottom: ve,
    left: ve,
    padding: ve,
    paddingTop: ve,
    paddingRight: ve,
    paddingBottom: ve,
    paddingLeft: ve,
    margin: ve,
    marginTop: ve,
    marginRight: ve,
    marginBottom: ve,
    marginLeft: ve,
    backgroundPositionX: ve,
    backgroundPositionY: ve,
    ...Q1,
    zIndex: qp,
    fillOpacity: cs,
    strokeOpacity: cs,
    numOctaves: qp
}
  , F1 = {
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
    filter: Yc,
    WebkitFilter: Yc
}
  , zy = n => F1[n];
function Uy(n, l) {
    let i = zy(n);
    return i !== Yc && (i = zn),
    i.getAnimatableNone ? i.getAnimatableNone(l) : void 0
}
const J1 = new Set(["auto", "none", "0"]);
function I1(n, l, i) {
    let o = 0, c;
    for (; o < n.length && !c; ) {
        const f = n[o];
        typeof f == "string" && !J1.has(f) && fs(f).values.length && (c = n[o]),
        o++
    }
    if (c && i)
        for (const f of l)
            n[f] = Uy(i, c)
}
class $1 extends bf {
    constructor(l, i, o, c, f) {
        super(l, i, o, c, f, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: l, element: i, name: o} = this;
        if (!i || !i.current)
            return;
        super.readKeyframes();
        for (let p = 0; p < l.length; p++) {
            let m = l[p];
            if (typeof m == "string" && (m = m.trim(),
            df(m))) {
                const y = My(m, i.current);
                y !== void 0 && (l[p] = y),
                p === l.length - 1 && (this.finalKeyframe = m)
            }
        }
        if (this.resolveNoneKeyframes(),
        !Oy.has(o) || l.length !== 2)
            return;
        const [c,f] = l
          , d = Pp(c)
          , g = Pp(f);
        if (d !== g)
            if (Bp(d) && Bp(g))
                for (let p = 0; p < l.length; p++) {
                    const m = l[p];
                    typeof m == "string" && (l[p] = parseFloat(m))
                }
            else
                ll[o] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: l, name: i} = this
          , o = [];
        for (let c = 0; c < l.length; c++)
            (l[c] === null || G1(l[c])) && o.push(c);
        o.length && I1(l, o, i)
    }
    measureInitialState() {
        const {element: l, unresolvedKeyframes: i, name: o} = this;
        if (!l || !l.current)
            return;
        o === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = ll[o](l.measureViewportBox(), window.getComputedStyle(l.current)),
        i[0] = this.measuredOrigin;
        const c = i[i.length - 1];
        c !== void 0 && l.getValue(o, c).jump(c, !1)
    }
    measureEndState() {
        var g;
        const {element: l, name: i, unresolvedKeyframes: o} = this;
        if (!l || !l.current)
            return;
        const c = l.getValue(i);
        c && c.jump(this.measuredOrigin, !1);
        const f = o.length - 1
          , d = o[f];
        o[f] = ll[i](l.measureViewportBox(), window.getComputedStyle(l.current)),
        d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d),
        (g = this.removedTransforms) != null && g.length && this.removedTransforms.forEach( ([p,m]) => {
            l.getValue(p).set(m)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
function W1(n, l, i) {
    if (n instanceof EventTarget)
        return [n];
    if (typeof n == "string") {
        let o = document;
        const c = (i == null ? void 0 : i[n]) ?? o.querySelectorAll(n);
        return c ? Array.from(c) : []
    }
    return Array.from(n)
}
const By = (n, l) => l && typeof n == "number" ? l.transform(n) : n
  , Yp = 30
  , eS = n => !isNaN(parseFloat(n));
class tS {
    constructor(l, i={}) {
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (o, c=!0) => {
            var d, g;
            const f = Gt.now();
            if (this.updatedAt !== f && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(o),
            this.current !== this.prev && ((d = this.events.change) == null || d.notify(this.current),
            this.dependents))
                for (const p of this.dependents)
                    p.dirty();
            c && ((g = this.events.renderRequest) == null || g.notify(this.current))
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(l),
        this.owner = i.owner
    }
    setCurrent(l) {
        this.current = l,
        this.updatedAt = Gt.now(),
        this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = eS(this.current))
    }
    setPrevFrameValue(l=this.current) {
        this.prevFrameValue = l,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(l) {
        return this.on("change", l)
    }
    on(l, i) {
        this.events[l] || (this.events[l] = new rf);
        const o = this.events[l].add(i);
        return l === "change" ? () => {
            o(),
            at.read( () => {
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
    attach(l, i) {
        this.passiveEffect = l,
        this.stopPassiveEffect = i
    }
    set(l, i=!0) {
        !i || !this.passiveEffect ? this.updateAndNotify(l, i) : this.passiveEffect(l, this.updateAndNotify)
    }
    setWithVelocity(l, i, o) {
        this.set(i),
        this.prev = void 0,
        this.prevFrameValue = l,
        this.prevUpdatedAt = this.updatedAt - o
    }
    jump(l, i=!0) {
        this.updateAndNotify(l),
        this.prev = l,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        i && this.stop(),
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
        const l = Gt.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > Yp)
            return 0;
        const i = Math.min(this.updatedAt - this.prevUpdatedAt, Yp);
        return ay(parseFloat(this.current) - parseFloat(this.prevFrameValue), i)
    }
    start(l) {
        return this.stop(),
        new Promise(i => {
            this.hasAnimated = !0,
            this.animation = l(i),
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
        var l, i;
        (l = this.dependents) == null || l.clear(),
        (i = this.events.destroy) == null || i.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function Jl(n, l) {
    return new tS(n,l)
}
const {schedule: wf} = hy(queueMicrotask, !1)
  , ja = {
    x: !1,
    y: !1
};
function Ly() {
    return ja.x || ja.y
}
function aS(n) {
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
function ky(n, l) {
    const i = W1(n)
      , o = new AbortController
      , c = {
        passive: !0,
        ...l,
        signal: o.signal
    };
    return [i, c, () => o.abort()]
}
function Gp(n) {
    return !(n.pointerType === "touch" || Ly())
}
function nS(n, l, i={}) {
    const [o,c,f] = ky(n, i)
      , d = g => {
        if (!Gp(g))
            return;
        const {target: p} = g
          , m = l(p, g);
        if (typeof m != "function" || !p)
            return;
        const y = x => {
            Gp(x) && (m(x),
            p.removeEventListener("pointerleave", y))
        }
        ;
        p.addEventListener("pointerleave", y, c)
    }
    ;
    return o.forEach(g => {
        g.addEventListener("pointerenter", d, c)
    }
    ),
    f
}
const Hy = (n, l) => l ? n === l ? !0 : Hy(n, l.parentElement) : !1
  , Af = n => n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1
  , lS = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function iS(n) {
    return lS.has(n.tagName) || n.tabIndex !== -1
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
const sS = (n, l) => {
    const i = n.currentTarget;
    if (!i)
        return;
    const o = Xp( () => {
        if (Go.has(i))
            return;
        jc(i, "down");
        const c = Xp( () => {
            jc(i, "up")
        }
        )
          , f = () => jc(i, "cancel");
        i.addEventListener("keyup", c, l),
        i.addEventListener("blur", f, l)
    }
    );
    i.addEventListener("keydown", o, l),
    i.addEventListener("blur", () => i.removeEventListener("keydown", o), l)
}
;
function Kp(n) {
    return Af(n) && !Ly()
}
function oS(n, l, i={}) {
    const [o,c,f] = ky(n, i)
      , d = g => {
        const p = g.currentTarget;
        if (!Kp(g))
            return;
        Go.add(p);
        const m = l(p, g)
          , y = (w, N) => {
            window.removeEventListener("pointerup", x),
            window.removeEventListener("pointercancel", T),
            Go.has(p) && Go.delete(p),
            Kp(w) && typeof m == "function" && m(w, {
                success: N
            })
        }
          , x = w => {
            y(w, p === window || p === document || i.useGlobalTarget || Hy(p, w.target))
        }
          , T = w => {
            y(w, !1)
        }
        ;
        window.addEventListener("pointerup", x, c),
        window.addEventListener("pointercancel", T, c)
    }
    ;
    return o.forEach(g => {
        (i.useGlobalTarget ? window : g).addEventListener("pointerdown", d, c),
        Sf(g) && (g.addEventListener("focus", m => sS(m, c)),
        !iS(g) && !g.hasAttribute("tabindex") && (g.tabIndex = 0))
    }
    ),
    f
}
function Py(n) {
    return ey(n) && "ownerSVGElement"in n
}
function rS(n) {
    return Py(n) && n.tagName === "svg"
}
const Ut = n => !!(n && n.getVelocity)
  , uS = [...Vy, yt, zn]
  , cS = n => uS.find(Ry(n))
  , Nf = S.createContext({
    transformPagePoint: n => n,
    isStatic: !1,
    reducedMotion: "never"
});
class fS extends S.Component {
    getSnapshotBeforeUpdate(l) {
        const i = this.props.childRef.current;
        if (i && l.isPresent && !this.props.isPresent) {
            const o = i.offsetParent
              , c = Sf(o) && o.offsetWidth || 0
              , f = this.props.sizeRef.current;
            f.height = i.offsetHeight || 0,
            f.width = i.offsetWidth || 0,
            f.top = i.offsetTop,
            f.left = i.offsetLeft,
            f.right = c - f.width - f.left
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function dS({children: n, isPresent: l, anchorX: i}) {
    const o = S.useId()
      , c = S.useRef(null)
      , f = S.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0
    })
      , {nonce: d} = S.useContext(Nf);
    return S.useInsertionEffect( () => {
        const {width: g, height: p, top: m, left: y, right: x} = f.current;
        if (l || !c.current || !g || !p)
            return;
        const T = i === "left" ? `left: ${y}` : `right: ${x}`;
        c.current.dataset.motionPopId = o;
        const w = document.createElement("style");
        return d && (w.nonce = d),
        document.head.appendChild(w),
        w.sheet && w.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${g}px !important;
            height: ${p}px !important;
            ${T}px !important;
            top: ${m}px !important;
          }
        `),
        () => {
            document.head.contains(w) && document.head.removeChild(w)
        }
    }
    , [l]),
    h.jsx(fS, {
        isPresent: l,
        childRef: c,
        sizeRef: f,
        children: S.cloneElement(n, {
            ref: c
        })
    })
}
const hS = ({children: n, initial: l, isPresent: i, onExitComplete: o, custom: c, presenceAffectsLayout: f, mode: d, anchorX: g}) => {
    const p = tf(mS)
      , m = S.useId();
    let y = !0
      , x = S.useMemo( () => (y = !1,
    {
        id: m,
        initial: l,
        isPresent: i,
        custom: c,
        onExitComplete: T => {
            p.set(T, !0);
            for (const w of p.values())
                if (!w)
                    return;
            o && o()
        }
        ,
        register: T => (p.set(T, !1),
        () => p.delete(T))
    }), [i, p, o]);
    return f && y && (x = {
        ...x
    }),
    S.useMemo( () => {
        p.forEach( (T, w) => p.set(w, !1))
    }
    , [i]),
    S.useEffect( () => {
        !i && !p.size && o && o()
    }
    , [i]),
    d === "popLayout" && (n = h.jsx(dS, {
        isPresent: i,
        anchorX: g,
        children: n
    })),
    h.jsx(Wo.Provider, {
        value: x,
        children: n
    })
}
;
function mS() {
    return new Map
}
function qy(n=!0) {
    const l = S.useContext(Wo);
    if (l === null)
        return [!0, null];
    const {isPresent: i, onExitComplete: o, register: c} = l
      , f = S.useId();
    S.useEffect( () => {
        if (n)
            return c(f)
    }
    , [n]);
    const d = S.useCallback( () => n && o && o(f), [f, o, n]);
    return !i && o ? [!1, d] : [!0]
}
const Po = n => n.key || "";
function Zp(n) {
    const l = [];
    return S.Children.forEach(n, i => {
        S.isValidElement(i) && l.push(i)
    }
    ),
    l
}
const Yy = ({children: n, custom: l, initial: i=!0, onExitComplete: o, presenceAffectsLayout: c=!0, mode: f="sync", propagate: d=!1, anchorX: g="left"}) => {
    const [p,m] = qy(d)
      , y = S.useMemo( () => Zp(n), [n])
      , x = d && !p ? [] : y.map(Po)
      , T = S.useRef(!0)
      , w = S.useRef(y)
      , N = tf( () => new Map)
      , [D,_] = S.useState(y)
      , [V,k] = S.useState(y);
    $g( () => {
        T.current = !1,
        w.current = y;
        for (let R = 0; R < V.length; R++) {
            const Z = Po(V[R]);
            x.includes(Z) ? N.delete(Z) : N.get(Z) !== !0 && N.set(Z, !1)
        }
    }
    , [V, x.length, x.join("-")]);
    const B = [];
    if (y !== D) {
        let R = [...y];
        for (let Z = 0; Z < V.length; Z++) {
            const I = V[Z]
              , Q = Po(I);
            x.includes(Q) || (R.splice(Z, 0, I),
            B.push(I))
        }
        return f === "wait" && B.length && (R = B),
        k(Zp(R)),
        _(y),
        null
    }
    const {forceRender: K} = S.useContext(ef);
    return h.jsx(h.Fragment, {
        children: V.map(R => {
            const Z = Po(R)
              , I = d && !p ? !1 : y === V || x.includes(Z)
              , Q = () => {
                if (N.has(Z))
                    N.set(Z, !0);
                else
                    return;
                let ie = !0;
                N.forEach(fe => {
                    fe || (ie = !1)
                }
                ),
                ie && (K == null || K(),
                k(w.current),
                d && (m == null || m()),
                o && o())
            }
            ;
            return h.jsx(hS, {
                isPresent: I,
                initial: !T.current || i ? void 0 : !1,
                custom: l,
                presenceAffectsLayout: c,
                mode: f,
                onExitComplete: I ? void 0 : Q,
                anchorX: g,
                children: R
            }, Z)
        }
        )
    })
}
  , Gy = S.createContext({
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
  , Il = {};
for (const n in Qp)
    Il[n] = {
        isEnabled: l => Qp[n].some(i => !!l[i])
    };
function pS(n) {
    for (const l in n)
        Il[l] = {
            ...Il[l],
            ...n[l]
        }
}
const gS = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Jo(n) {
    return n.startsWith("while") || n.startsWith("drag") && n !== "draggable" || n.startsWith("layout") || n.startsWith("onTap") || n.startsWith("onPan") || n.startsWith("onLayout") || gS.has(n)
}
let Xy = n => !Jo(n);
function yS(n) {
    typeof n == "function" && (Xy = l => l.startsWith("on") ? !Jo(l) : n(l))
}
try {
    yS(require("@emotion/is-prop-valid").default)
} catch {}
function vS(n, l, i) {
    const o = {};
    for (const c in n)
        c === "values" && typeof n.values == "object" || (Xy(c) || i === !0 && Jo(c) || !l && !Jo(c) || n.draggable && c.startsWith("onDrag")) && (o[c] = n[c]);
    return o
}
function xS(n) {
    if (typeof Proxy > "u")
        return n;
    const l = new Map
      , i = (...o) => n(...o);
    return new Proxy(i,{
        get: (o, c) => c === "create" ? n : (l.has(c) || l.set(c, n(c)),
        l.get(c))
    })
}
const er = S.createContext({});
function tr(n) {
    return n !== null && typeof n == "object" && typeof n.start == "function"
}
function ds(n) {
    return typeof n == "string" || Array.isArray(n)
}
const Ef = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Cf = ["initial", ...Ef];
function ar(n) {
    return tr(n.animate) || Cf.some(l => ds(n[l]))
}
function Ky(n) {
    return !!(ar(n) || n.variants)
}
function bS(n, l) {
    if (ar(n)) {
        const {initial: i, animate: o} = n;
        return {
            initial: i === !1 || ds(i) ? i : void 0,
            animate: ds(o) ? o : void 0
        }
    }
    return n.inherit !== !1 ? l : {}
}
function SS(n) {
    const {initial: l, animate: i} = bS(n, S.useContext(er));
    return S.useMemo( () => ({
        initial: l,
        animate: i
    }), [Fp(l), Fp(i)])
}
function Fp(n) {
    return Array.isArray(n) ? n.join(" ") : n
}
const TS = Symbol.for("motionComponentSymbol");
function Kl(n) {
    return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current")
}
function jS(n, l, i) {
    return S.useCallback(o => {
        o && n.onMount && n.onMount(o),
        l && (o ? l.mount(o) : l.unmount()),
        i && (typeof i == "function" ? i(o) : Kl(i) && (i.current = o))
    }
    , [l])
}
const Df = n => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , wS = "framerAppearId"
  , Zy = "data-" + Df(wS)
  , Qy = S.createContext({});
function AS(n, l, i, o, c) {
    var D, _;
    const {visualElement: f} = S.useContext(er)
      , d = S.useContext(Gy)
      , g = S.useContext(Wo)
      , p = S.useContext(Nf).reducedMotion
      , m = S.useRef(null);
    o = o || d.renderer,
    !m.current && o && (m.current = o(n, {
        visualState: l,
        parent: f,
        props: i,
        presenceContext: g,
        blockInitialAnimation: g ? g.initial === !1 : !1,
        reducedMotionConfig: p
    }));
    const y = m.current
      , x = S.useContext(Qy);
    y && !y.projection && c && (y.type === "html" || y.type === "svg") && NS(m.current, i, c, x);
    const T = S.useRef(!1);
    S.useInsertionEffect( () => {
        y && T.current && y.update(i, g)
    }
    );
    const w = i[Zy]
      , N = S.useRef(!!w && !((D = window.MotionHandoffIsComplete) != null && D.call(window, w)) && ((_ = window.MotionHasOptimisedAnimation) == null ? void 0 : _.call(window, w)));
    return $g( () => {
        y && (T.current = !0,
        window.MotionIsMounted = !0,
        y.updateFeatures(),
        wf.render(y.render),
        N.current && y.animationState && y.animationState.animateChanges())
    }
    ),
    S.useEffect( () => {
        y && (!N.current && y.animationState && y.animationState.animateChanges(),
        N.current && (queueMicrotask( () => {
            var V;
            (V = window.MotionHandoffMarkAsComplete) == null || V.call(window, w)
        }
        ),
        N.current = !1))
    }
    ),
    y
}
function NS(n, l, i, o) {
    const {layoutId: c, layout: f, drag: d, dragConstraints: g, layoutScroll: p, layoutRoot: m, layoutCrossfade: y} = l;
    n.projection = new i(n.latestValues,l["data-framer-portal-id"] ? void 0 : Fy(n.parent)),
    n.projection.setOptions({
        layoutId: c,
        layout: f,
        alwaysMeasureLayout: !!d || g && Kl(g),
        visualElement: n,
        animationType: typeof f == "string" ? f : "both",
        initialPromotionConfig: o,
        crossfade: y,
        layoutScroll: p,
        layoutRoot: m
    })
}
function Fy(n) {
    if (n)
        return n.options.allowProjection !== !1 ? n.projection : Fy(n.parent)
}
function ES({preloadedFeatures: n, createVisualElement: l, useRender: i, useVisualState: o, Component: c}) {
    n && pS(n);
    function f(g, p) {
        let m;
        const y = {
            ...S.useContext(Nf),
            ...g,
            layoutId: CS(g)
        }
          , {isStatic: x} = y
          , T = SS(g)
          , w = o(g, x);
        if (!x && af) {
            DS();
            const N = _S(y);
            m = N.MeasureLayout,
            T.visualElement = AS(c, w, y, l, N.ProjectionNode)
        }
        return h.jsxs(er.Provider, {
            value: T,
            children: [m && T.visualElement ? h.jsx(m, {
                visualElement: T.visualElement,
                ...y
            }) : null, i(c, g, jS(w, T.visualElement, p), w, x, T.visualElement)]
        })
    }
    f.displayName = `motion.${typeof c == "string" ? c : `create(${c.displayName ?? c.name ?? ""})`}`;
    const d = S.forwardRef(f);
    return d[TS] = c,
    d
}
function CS({layoutId: n}) {
    const l = S.useContext(ef).id;
    return l && n !== void 0 ? l + "-" + n : n
}
function DS(n, l) {
    S.useContext(Gy).strict
}
function _S(n) {
    const {drag: l, layout: i} = Il;
    if (!l && !i)
        return {};
    const o = {
        ...l,
        ...i
    };
    return {
        MeasureLayout: l != null && l.isEnabled(n) || i != null && i.isEnabled(n) ? o.MeasureLayout : void 0,
        ProjectionNode: o.ProjectionNode
    }
}
const hs = {};
function MS(n) {
    for (const l in n)
        hs[l] = n[l],
        ff(l) && (hs[l].isCSSVariable = !0)
}
function Jy(n, {layout: l, layoutId: i}) {
    return ei.has(n) || n.startsWith("origin") || (l || i !== void 0) && (!!hs[n] || n === "opacity")
}
const OS = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , RS = Wl.length;
function VS(n, l, i) {
    let o = ""
      , c = !0;
    for (let f = 0; f < RS; f++) {
        const d = Wl[f]
          , g = n[d];
        if (g === void 0)
            continue;
        let p = !0;
        if (typeof g == "number" ? p = g === (d.startsWith("scale") ? 1 : 0) : p = parseFloat(g) === 0,
        !p || i) {
            const m = By(g, jf[d]);
            if (!p) {
                c = !1;
                const y = OS[d] || d;
                o += `${y}(${m}) `
            }
            i && (l[d] = m)
        }
    }
    return o = o.trim(),
    i ? o = i(l, c ? "" : o) : c && (o = "none"),
    o
}
function _f(n, l, i) {
    const {style: o, vars: c, transformOrigin: f} = n;
    let d = !1
      , g = !1;
    for (const p in l) {
        const m = l[p];
        if (ei.has(p)) {
            d = !0;
            continue
        } else if (ff(p)) {
            c[p] = m;
            continue
        } else {
            const y = By(m, jf[p]);
            p.startsWith("origin") ? (g = !0,
            f[p] = y) : o[p] = y
        }
    }
    if (l.transform || (d || i ? o.transform = VS(l, n.transform, i) : o.transform && (o.transform = "none")),
    g) {
        const {originX: p="50%", originY: m="50%", originZ: y=0} = f;
        o.transformOrigin = `${p} ${m} ${y}`
    }
}
const Mf = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function Iy(n, l, i) {
    for (const o in l)
        !Ut(l[o]) && !Jy(o, i) && (n[o] = l[o])
}
function zS({transformTemplate: n}, l) {
    return S.useMemo( () => {
        const i = Mf();
        return _f(i, l, n),
        Object.assign({}, i.vars, i.style)
    }
    , [l])
}
function US(n, l) {
    const i = n.style || {}
      , o = {};
    return Iy(o, i, n),
    Object.assign(o, zS(n, l)),
    o
}
function BS(n, l) {
    const i = {}
      , o = US(n, l);
    return n.drag && n.dragListener !== !1 && (i.draggable = !1,
    o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none",
    o.touchAction = n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`),
    n.tabIndex === void 0 && (n.onTap || n.onTapStart || n.whileTap) && (i.tabIndex = 0),
    i.style = o,
    i
}
const LS = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , kS = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function HS(n, l, i=1, o=0, c=!0) {
    n.pathLength = 1;
    const f = c ? LS : kS;
    n[f.offset] = ve.transform(-o);
    const d = ve.transform(l)
      , g = ve.transform(i);
    n[f.array] = `${d} ${g}`
}
function $y(n, {attrX: l, attrY: i, attrScale: o, pathLength: c, pathSpacing: f=1, pathOffset: d=0, ...g}, p, m, y) {
    if (_f(n, g, m),
    p) {
        n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
        return
    }
    n.attrs = n.style,
    n.style = {};
    const {attrs: x, style: T} = n;
    x.transform && (T.transform = x.transform,
    delete x.transform),
    (T.transform || x.transformOrigin) && (T.transformOrigin = x.transformOrigin ?? "50% 50%",
    delete x.transformOrigin),
    T.transform && (T.transformBox = (y == null ? void 0 : y.transformBox) ?? "fill-box",
    delete x.transformBox),
    l !== void 0 && (x.x = l),
    i !== void 0 && (x.y = i),
    o !== void 0 && (x.scale = o),
    c !== void 0 && HS(x, c, f, d, !1)
}
const Wy = () => ({
    ...Mf(),
    attrs: {}
})
  , e0 = n => typeof n == "string" && n.toLowerCase() === "svg";
function PS(n, l, i, o) {
    const c = S.useMemo( () => {
        const f = Wy();
        return $y(f, l, e0(o), n.transformTemplate, n.style),
        {
            ...f.attrs,
            style: {
                ...f.style
            }
        }
    }
    , [l]);
    if (n.style) {
        const f = {};
        Iy(f, n.style, n),
        c.style = {
            ...f,
            ...c.style
        }
    }
    return c
}
const qS = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Of(n) {
    return typeof n != "string" || n.includes("-") ? !1 : !!(qS.indexOf(n) > -1 || /[A-Z]/u.test(n))
}
function YS(n=!1) {
    return (i, o, c, {latestValues: f}, d) => {
        const p = (Of(i) ? PS : BS)(o, f, d, i)
          , m = vS(o, typeof i == "string", n)
          , y = i !== S.Fragment ? {
            ...m,
            ...p,
            ref: c
        } : {}
          , {children: x} = o
          , T = S.useMemo( () => Ut(x) ? x.get() : x, [x]);
        return S.createElement(i, {
            ...y,
            children: T
        })
    }
}
function Jp(n) {
    const l = [{}, {}];
    return n == null || n.values.forEach( (i, o) => {
        l[0][o] = i.get(),
        l[1][o] = i.getVelocity()
    }
    ),
    l
}
function Rf(n, l, i, o) {
    if (typeof l == "function") {
        const [c,f] = Jp(o);
        l = l(i !== void 0 ? i : n.custom, c, f)
    }
    if (typeof l == "string" && (l = n.variants && n.variants[l]),
    typeof l == "function") {
        const [c,f] = Jp(o);
        l = l(i !== void 0 ? i : n.custom, c, f)
    }
    return l
}
function Xo(n) {
    return Ut(n) ? n.get() : n
}
function GS({scrapeMotionValuesFromProps: n, createRenderState: l}, i, o, c) {
    return {
        latestValues: XS(i, o, c, n),
        renderState: l()
    }
}
const t0 = n => (l, i) => {
    const o = S.useContext(er)
      , c = S.useContext(Wo)
      , f = () => GS(n, l, o, c);
    return i ? f() : tf(f)
}
;
function XS(n, l, i, o) {
    const c = {}
      , f = o(n, {});
    for (const T in f)
        c[T] = Xo(f[T]);
    let {initial: d, animate: g} = n;
    const p = ar(n)
      , m = Ky(n);
    l && m && !p && n.inherit !== !1 && (d === void 0 && (d = l.initial),
    g === void 0 && (g = l.animate));
    let y = i ? i.initial === !1 : !1;
    y = y || d === !1;
    const x = y ? g : d;
    if (x && typeof x != "boolean" && !tr(x)) {
        const T = Array.isArray(x) ? x : [x];
        for (let w = 0; w < T.length; w++) {
            const N = Rf(n, T[w]);
            if (N) {
                const {transitionEnd: D, transition: _, ...V} = N;
                for (const k in V) {
                    let B = V[k];
                    if (Array.isArray(B)) {
                        const K = y ? B.length - 1 : 0;
                        B = B[K]
                    }
                    B !== null && (c[k] = B)
                }
                for (const k in D)
                    c[k] = D[k]
            }
        }
    }
    return c
}
function Vf(n, l, i) {
    var f;
    const {style: o} = n
      , c = {};
    for (const d in o)
        (Ut(o[d]) || l.style && Ut(l.style[d]) || Jy(d, n) || ((f = i == null ? void 0 : i.getValue(d)) == null ? void 0 : f.liveStyle) !== void 0) && (c[d] = o[d]);
    return c
}
const KS = {
    useVisualState: t0({
        scrapeMotionValuesFromProps: Vf,
        createRenderState: Mf
    })
};
function a0(n, l, i) {
    const o = Vf(n, l, i);
    for (const c in n)
        if (Ut(n[c]) || Ut(l[c])) {
            const f = Wl.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
            o[f] = n[c]
        }
    return o
}
const ZS = {
    useVisualState: t0({
        scrapeMotionValuesFromProps: a0,
        createRenderState: Wy
    })
};
function QS(n, l) {
    return function(o, {forwardMotionProps: c}={
        forwardMotionProps: !1
    }) {
        const d = {
            ...Of(o) ? ZS : KS,
            preloadedFeatures: n,
            useRender: YS(c),
            createVisualElement: l,
            Component: o
        };
        return ES(d)
    }
}
function ms(n, l, i) {
    const o = n.getProps();
    return Rf(o, l, i !== void 0 ? i : o.custom, n)
}
const Gc = n => Array.isArray(n);
function FS(n, l, i) {
    n.hasValue(l) ? n.getValue(l).set(i) : n.addValue(l, Jl(i))
}
function JS(n) {
    return Gc(n) ? n[n.length - 1] || 0 : n
}
function IS(n, l) {
    const i = ms(n, l);
    let {transitionEnd: o={}, transition: c={}, ...f} = i || {};
    f = {
        ...f,
        ...o
    };
    for (const d in f) {
        const g = JS(f[d]);
        FS(n, d, g)
    }
}
function $S(n) {
    return !!(Ut(n) && n.add)
}
function Xc(n, l) {
    const i = n.getValue("willChange");
    if ($S(i))
        return i.add(l);
    if (!i && sn.WillChange) {
        const o = new sn.WillChange("auto");
        n.addValue("willChange", o),
        o.add(l)
    }
}
function n0(n) {
    return n.props[Zy]
}
const WS = n => n !== null;
function e2(n, {repeat: l, repeatType: i="loop"}, o) {
    const c = n.filter(WS)
      , f = l && i !== "loop" && l % 2 === 1 ? 0 : c.length - 1;
    return c[f]
}
const t2 = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , a2 = n => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , n2 = {
    type: "keyframes",
    duration: .8
}
  , l2 = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , i2 = (n, {keyframes: l}) => l.length > 2 ? n2 : ei.has(n) ? n.startsWith("scale") ? a2(l[1]) : t2 : l2;
function s2({when: n, delay: l, delayChildren: i, staggerChildren: o, staggerDirection: c, repeat: f, repeatType: d, repeatDelay: g, from: p, elapsed: m, ...y}) {
    return !!Object.keys(y).length
}
const zf = (n, l, i, o={}, c, f) => d => {
    const g = Tf(o, n) || {}
      , p = g.delay || o.delay || 0;
    let {elapsed: m=0} = o;
    m = m - Oa(p);
    const y = {
        keyframes: Array.isArray(i) ? i : [null, i],
        ease: "easeOut",
        velocity: l.getVelocity(),
        ...g,
        delay: -m,
        onUpdate: T => {
            l.set(T),
            g.onUpdate && g.onUpdate(T)
        }
        ,
        onComplete: () => {
            d(),
            g.onComplete && g.onComplete()
        }
        ,
        name: n,
        motionValue: l,
        element: f ? void 0 : c
    };
    s2(g) || Object.assign(y, i2(n, y)),
    y.duration && (y.duration = Oa(y.duration)),
    y.repeatDelay && (y.repeatDelay = Oa(y.repeatDelay)),
    y.from !== void 0 && (y.keyframes[0] = y.from);
    let x = !1;
    if ((y.type === !1 || y.duration === 0 && !y.repeatDelay) && (y.duration = 0,
    y.delay === 0 && (x = !0)),
    (sn.instantAnimations || sn.skipAnimations) && (x = !0,
    y.duration = 0,
    y.delay = 0),
    y.allowFlatten = !g.type && !g.ease,
    x && !f && l.get() !== void 0) {
        const T = e2(y.keyframes, g);
        if (T !== void 0) {
            at.update( () => {
                y.onUpdate(T),
                y.onComplete()
            }
            );
            return
        }
    }
    return g.isSync ? new xf(y) : new H1(y)
}
;
function o2({protectedKeys: n, needsAnimating: l}, i) {
    const o = n.hasOwnProperty(i) && l[i] !== !0;
    return l[i] = !1,
    o
}
function l0(n, l, {delay: i=0, transitionOverride: o, type: c}={}) {
    let {transition: f=n.getDefaultTransition(), transitionEnd: d, ...g} = l;
    o && (f = o);
    const p = []
      , m = c && n.animationState && n.animationState.getState()[c];
    for (const y in g) {
        const x = n.getValue(y, n.latestValues[y] ?? null)
          , T = g[y];
        if (T === void 0 || m && o2(m, y))
            continue;
        const w = {
            delay: i,
            ...Tf(f || {}, y)
        }
          , N = x.get();
        if (N !== void 0 && !x.isAnimating && !Array.isArray(T) && T === N && !w.velocity)
            continue;
        let D = !1;
        if (window.MotionHandoffAnimation) {
            const V = n0(n);
            if (V) {
                const k = window.MotionHandoffAnimation(V, y, at);
                k !== null && (w.startTime = k,
                D = !0)
            }
        }
        Xc(n, y),
        x.start(zf(y, x, T, n.shouldReduceMotion && Oy.has(y) ? {
            type: !1
        } : w, n, D));
        const _ = x.animation;
        _ && p.push(_)
    }
    return d && Promise.all(p).then( () => {
        at.update( () => {
            d && IS(n, d)
        }
        )
    }
    ),
    p
}
function Kc(n, l, i={}) {
    var p;
    const o = ms(n, l, i.type === "exit" ? (p = n.presenceContext) == null ? void 0 : p.custom : void 0);
    let {transition: c=n.getDefaultTransition() || {}} = o || {};
    i.transitionOverride && (c = i.transitionOverride);
    const f = o ? () => Promise.all(l0(n, o, i)) : () => Promise.resolve()
      , d = n.variantChildren && n.variantChildren.size ? (m=0) => {
        const {delayChildren: y=0, staggerChildren: x, staggerDirection: T} = c;
        return r2(n, l, y + m, x, T, i)
    }
    : () => Promise.resolve()
      , {when: g} = c;
    if (g) {
        const [m,y] = g === "beforeChildren" ? [f, d] : [d, f];
        return m().then( () => y())
    } else
        return Promise.all([f(), d(i.delay)])
}
function r2(n, l, i=0, o=0, c=1, f) {
    const d = []
      , g = (n.variantChildren.size - 1) * o
      , p = c === 1 ? (m=0) => m * o : (m=0) => g - m * o;
    return Array.from(n.variantChildren).sort(u2).forEach( (m, y) => {
        m.notify("AnimationStart", l),
        d.push(Kc(m, l, {
            ...f,
            delay: i + p(y)
        }).then( () => m.notify("AnimationComplete", l)))
    }
    ),
    Promise.all(d)
}
function u2(n, l) {
    return n.sortNodePosition(l)
}
function c2(n, l, i={}) {
    n.notify("AnimationStart", l);
    let o;
    if (Array.isArray(l)) {
        const c = l.map(f => Kc(n, f, i));
        o = Promise.all(c)
    } else if (typeof l == "string")
        o = Kc(n, l, i);
    else {
        const c = typeof l == "function" ? ms(n, l, i.custom) : l;
        o = Promise.all(l0(n, c, i))
    }
    return o.then( () => {
        n.notify("AnimationComplete", l)
    }
    )
}
function i0(n, l) {
    if (!Array.isArray(l))
        return !1;
    const i = l.length;
    if (i !== n.length)
        return !1;
    for (let o = 0; o < i; o++)
        if (l[o] !== n[o])
            return !1;
    return !0
}
const f2 = Cf.length;
function s0(n) {
    if (!n)
        return;
    if (!n.isControllingVariants) {
        const i = n.parent ? s0(n.parent) || {} : {};
        return n.props.initial !== void 0 && (i.initial = n.props.initial),
        i
    }
    const l = {};
    for (let i = 0; i < f2; i++) {
        const o = Cf[i]
          , c = n.props[o];
        (ds(c) || c === !1) && (l[o] = c)
    }
    return l
}
const d2 = [...Ef].reverse()
  , h2 = Ef.length;
function m2(n) {
    return l => Promise.all(l.map( ({animation: i, options: o}) => c2(n, i, o)))
}
function p2(n) {
    let l = m2(n)
      , i = Ip()
      , o = !0;
    const c = p => (m, y) => {
        var T;
        const x = ms(n, y, p === "exit" ? (T = n.presenceContext) == null ? void 0 : T.custom : void 0);
        if (x) {
            const {transition: w, transitionEnd: N, ...D} = x;
            m = {
                ...m,
                ...D,
                ...N
            }
        }
        return m
    }
    ;
    function f(p) {
        l = p(n)
    }
    function d(p) {
        const {props: m} = n
          , y = s0(n.parent) || {}
          , x = []
          , T = new Set;
        let w = {}
          , N = 1 / 0;
        for (let _ = 0; _ < h2; _++) {
            const V = d2[_]
              , k = i[V]
              , B = m[V] !== void 0 ? m[V] : y[V]
              , K = ds(B)
              , R = V === p ? k.isActive : null;
            R === !1 && (N = _);
            let Z = B === y[V] && B !== m[V] && K;
            if (Z && o && n.manuallyAnimateOnMount && (Z = !1),
            k.protectedKeys = {
                ...w
            },
            !k.isActive && R === null || !B && !k.prevProp || tr(B) || typeof B == "boolean")
                continue;
            const I = g2(k.prevProp, B);
            let Q = I || V === p && k.isActive && !Z && K || _ > N && K
              , ie = !1;
            const fe = Array.isArray(B) ? B : [B];
            let de = fe.reduce(c(V), {});
            R === !1 && (de = {});
            const {prevResolvedValues: ce={}} = k
              , oe = {
                ...ce,
                ...de
            }
              , ee = O => {
                Q = !0,
                T.has(O) && (ie = !0,
                T.delete(O)),
                k.needsAnimating[O] = !0;
                const q = n.getValue(O);
                q && (q.liveStyle = !1)
            }
            ;
            for (const O in oe) {
                const q = de[O]
                  , ae = ce[O];
                if (w.hasOwnProperty(O))
                    continue;
                let j = !1;
                Gc(q) && Gc(ae) ? j = !i0(q, ae) : j = q !== ae,
                j ? q != null ? ee(O) : T.add(O) : q !== void 0 && T.has(O) ? ee(O) : k.protectedKeys[O] = !0
            }
            k.prevProp = B,
            k.prevResolvedValues = de,
            k.isActive && (w = {
                ...w,
                ...de
            }),
            o && n.blockInitialAnimation && (Q = !1),
            Q && (!(Z && I) || ie) && x.push(...fe.map(O => ({
                animation: O,
                options: {
                    type: V
                }
            })))
        }
        if (T.size) {
            const _ = {};
            if (typeof m.initial != "boolean") {
                const V = ms(n, Array.isArray(m.initial) ? m.initial[0] : m.initial);
                V && V.transition && (_.transition = V.transition)
            }
            T.forEach(V => {
                const k = n.getBaseTarget(V)
                  , B = n.getValue(V);
                B && (B.liveStyle = !0),
                _[V] = k ?? null
            }
            ),
            x.push({
                animation: _
            })
        }
        let D = !!x.length;
        return o && (m.initial === !1 || m.initial === m.animate) && !n.manuallyAnimateOnMount && (D = !1),
        o = !1,
        D ? l(x) : Promise.resolve()
    }
    function g(p, m) {
        var x;
        if (i[p].isActive === m)
            return Promise.resolve();
        (x = n.variantChildren) == null || x.forEach(T => {
            var w;
            return (w = T.animationState) == null ? void 0 : w.setActive(p, m)
        }
        ),
        i[p].isActive = m;
        const y = d(p);
        for (const T in i)
            i[T].protectedKeys = {};
        return y
    }
    return {
        animateChanges: d,
        setActive: g,
        setAnimateFunction: f,
        getState: () => i,
        reset: () => {
            i = Ip(),
            o = !0
        }
    }
}
function g2(n, l) {
    return typeof l == "string" ? l !== n : Array.isArray(l) ? !i0(l, n) : !1
}
function el(n=!1) {
    return {
        isActive: n,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function Ip() {
    return {
        animate: el(!0),
        whileInView: el(),
        whileHover: el(),
        whileTap: el(),
        whileDrag: el(),
        whileFocus: el(),
        exit: el()
    }
}
class Un {
    constructor(l) {
        this.isMounted = !1,
        this.node = l
    }
    update() {}
}
class y2 extends Un {
    constructor(l) {
        super(l),
        l.animationState || (l.animationState = p2(l))
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
          , {animate: i} = this.node.prevProps || {};
        l !== i && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var l;
        this.node.animationState.reset(),
        (l = this.unmountControls) == null || l.call(this)
    }
}
let v2 = 0;
class x2 extends Un {
    constructor() {
        super(...arguments),
        this.id = v2++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: l, onExitComplete: i} = this.node.presenceContext
          , {isPresent: o} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || l === o)
            return;
        const c = this.node.animationState.setActive("exit", !l);
        i && !l && c.then( () => {
            i(this.id)
        }
        )
    }
    mount() {
        const {register: l, onExitComplete: i} = this.node.presenceContext || {};
        i && i(this.id),
        l && (this.unmount = l(this.id))
    }
    unmount() {}
}
const b2 = {
    animation: {
        Feature: y2
    },
    exit: {
        Feature: x2
    }
};
function ps(n, l, i, o={
    passive: !0
}) {
    return n.addEventListener(l, i, o),
    () => n.removeEventListener(l, i)
}
function Ss(n) {
    return {
        point: {
            x: n.pageX,
            y: n.pageY
        }
    }
}
const S2 = n => l => Af(l) && n(l, Ss(l));
function ss(n, l, i, o) {
    return ps(n, l, S2(i), o)
}
function o0({top: n, left: l, right: i, bottom: o}) {
    return {
        x: {
            min: l,
            max: i
        },
        y: {
            min: n,
            max: o
        }
    }
}
function T2({x: n, y: l}) {
    return {
        top: l.min,
        right: n.max,
        bottom: l.max,
        left: n.min
    }
}
function j2(n, l) {
    if (!l)
        return n;
    const i = l({
        x: n.left,
        y: n.top
    })
      , o = l({
        x: n.right,
        y: n.bottom
    });
    return {
        top: i.y,
        left: i.x,
        bottom: o.y,
        right: o.x
    }
}
const r0 = 1e-4
  , w2 = 1 - r0
  , A2 = 1 + r0
  , u0 = .01
  , N2 = 0 - u0
  , E2 = 0 + u0;
function Lt(n) {
    return n.max - n.min
}
function C2(n, l, i) {
    return Math.abs(n - l) <= i
}
function $p(n, l, i, o=.5) {
    n.origin = o,
    n.originPoint = tt(l.min, l.max, n.origin),
    n.scale = Lt(i) / Lt(l),
    n.translate = tt(i.min, i.max, n.origin) - n.originPoint,
    (n.scale >= w2 && n.scale <= A2 || isNaN(n.scale)) && (n.scale = 1),
    (n.translate >= N2 && n.translate <= E2 || isNaN(n.translate)) && (n.translate = 0)
}
function os(n, l, i, o) {
    $p(n.x, l.x, i.x, o ? o.originX : void 0),
    $p(n.y, l.y, i.y, o ? o.originY : void 0)
}
function Wp(n, l, i) {
    n.min = i.min + l.min,
    n.max = n.min + Lt(l)
}
function D2(n, l, i) {
    Wp(n.x, l.x, i.x),
    Wp(n.y, l.y, i.y)
}
function eg(n, l, i) {
    n.min = l.min - i.min,
    n.max = n.min + Lt(l)
}
function rs(n, l, i) {
    eg(n.x, l.x, i.x),
    eg(n.y, l.y, i.y)
}
const tg = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Zl = () => ({
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
function ma(n) {
    return [n("x"), n("y")]
}
function wc(n) {
    return n === void 0 || n === 1
}
function Zc({scale: n, scaleX: l, scaleY: i}) {
    return !wc(n) || !wc(l) || !wc(i)
}
function tl(n) {
    return Zc(n) || c0(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY
}
function c0(n) {
    return ng(n.x) || ng(n.y)
}
function ng(n) {
    return n && n !== "0%"
}
function Io(n, l, i) {
    const o = n - i
      , c = l * o;
    return i + c
}
function lg(n, l, i, o, c) {
    return c !== void 0 && (n = Io(n, c, o)),
    Io(n, i, o) + l
}
function Qc(n, l=0, i=1, o, c) {
    n.min = lg(n.min, l, i, o, c),
    n.max = lg(n.max, l, i, o, c)
}
function f0(n, {x: l, y: i}) {
    Qc(n.x, l.translate, l.scale, l.originPoint),
    Qc(n.y, i.translate, i.scale, i.originPoint)
}
const ig = .999999999999
  , sg = 1.0000000000001;
function _2(n, l, i, o=!1) {
    const c = i.length;
    if (!c)
        return;
    l.x = l.y = 1;
    let f, d;
    for (let g = 0; g < c; g++) {
        f = i[g],
        d = f.projectionDelta;
        const {visualElement: p} = f.options;
        p && p.props.style && p.props.style.display === "contents" || (o && f.options.layoutScroll && f.scroll && f !== f.root && Fl(n, {
            x: -f.scroll.offset.x,
            y: -f.scroll.offset.y
        }),
        d && (l.x *= d.x.scale,
        l.y *= d.y.scale,
        f0(n, d)),
        o && tl(f.latestValues) && Fl(n, f.latestValues))
    }
    l.x < sg && l.x > ig && (l.x = 1),
    l.y < sg && l.y > ig && (l.y = 1)
}
function Ql(n, l) {
    n.min = n.min + l,
    n.max = n.max + l
}
function og(n, l, i, o, c=.5) {
    const f = tt(n.min, n.max, c);
    Qc(n, l, i, f, o)
}
function Fl(n, l) {
    og(n.x, l.x, l.scaleX, l.scale, l.originX),
    og(n.y, l.y, l.scaleY, l.scale, l.originY)
}
function d0(n, l) {
    return o0(j2(n.getBoundingClientRect(), l))
}
function M2(n, l, i) {
    const o = d0(n, i)
      , {scroll: c} = l;
    return c && (Ql(o.x, c.offset.x),
    Ql(o.y, c.offset.y)),
    o
}
const h0 = ({current: n}) => n ? n.ownerDocument.defaultView : null
  , rg = (n, l) => Math.abs(n - l);
function O2(n, l) {
    const i = rg(n.x, l.x)
      , o = rg(n.y, l.y);
    return Math.sqrt(i ** 2 + o ** 2)
}
class m0 {
    constructor(l, i, {transformPagePoint: o, contextWindow: c, dragSnapToOrigin: f=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const x = Nc(this.lastMoveEventInfo, this.history)
              , T = this.startEvent !== null
              , w = O2(x.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!T && !w)
                return;
            const {point: N} = x
              , {timestamp: D} = Ot;
            this.history.push({
                ...N,
                timestamp: D
            });
            const {onStart: _, onMove: V} = this.handlers;
            T || (_ && _(this.lastMoveEvent, x),
            this.startEvent = this.lastMoveEvent),
            V && V(this.lastMoveEvent, x)
        }
        ,
        this.handlePointerMove = (x, T) => {
            this.lastMoveEvent = x,
            this.lastMoveEventInfo = Ac(T, this.transformPagePoint),
            at.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (x, T) => {
            this.end();
            const {onEnd: w, onSessionEnd: N, resumeAnimation: D} = this.handlers;
            if (this.dragSnapToOrigin && D && D(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const _ = Nc(x.type === "pointercancel" ? this.lastMoveEventInfo : Ac(T, this.transformPagePoint), this.history);
            this.startEvent && w && w(x, _),
            N && N(x, _)
        }
        ,
        !Af(l))
            return;
        this.dragSnapToOrigin = f,
        this.handlers = i,
        this.transformPagePoint = o,
        this.contextWindow = c || window;
        const d = Ss(l)
          , g = Ac(d, this.transformPagePoint)
          , {point: p} = g
          , {timestamp: m} = Ot;
        this.history = [{
            ...p,
            timestamp: m
        }];
        const {onSessionStart: y} = i;
        y && y(l, Nc(g, this.history)),
        this.removeListeners = vs(ss(this.contextWindow, "pointermove", this.handlePointerMove), ss(this.contextWindow, "pointerup", this.handlePointerUp), ss(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(l) {
        this.handlers = l
    }
    end() {
        this.removeListeners && this.removeListeners(),
        Vn(this.updatePoint)
    }
}
function Ac(n, l) {
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
function Nc({point: n}, l) {
    return {
        point: n,
        delta: ug(n, p0(l)),
        offset: ug(n, R2(l)),
        velocity: V2(l, .1)
    }
}
function R2(n) {
    return n[0]
}
function p0(n) {
    return n[n.length - 1]
}
function V2(n, l) {
    if (n.length < 2)
        return {
            x: 0,
            y: 0
        };
    let i = n.length - 1
      , o = null;
    const c = p0(n);
    for (; i >= 0 && (o = n[i],
    !(c.timestamp - o.timestamp > Oa(l))); )
        i--;
    if (!o)
        return {
            x: 0,
            y: 0
        };
    const f = Ra(c.timestamp - o.timestamp);
    if (f === 0)
        return {
            x: 0,
            y: 0
        };
    const d = {
        x: (c.x - o.x) / f,
        y: (c.y - o.y) / f
    };
    return d.x === 1 / 0 && (d.x = 0),
    d.y === 1 / 0 && (d.y = 0),
    d
}
function z2(n, {min: l, max: i}, o) {
    return l !== void 0 && n < l ? n = o ? tt(l, n, o.min) : Math.max(n, l) : i !== void 0 && n > i && (n = o ? tt(i, n, o.max) : Math.min(n, i)),
    n
}
function cg(n, l, i) {
    return {
        min: l !== void 0 ? n.min + l : void 0,
        max: i !== void 0 ? n.max + i - (n.max - n.min) : void 0
    }
}
function U2(n, {top: l, left: i, bottom: o, right: c}) {
    return {
        x: cg(n.x, i, c),
        y: cg(n.y, l, o)
    }
}
function fg(n, l) {
    let i = l.min - n.min
      , o = l.max - n.max;
    return l.max - l.min < n.max - n.min && ([i,o] = [o, i]),
    {
        min: i,
        max: o
    }
}
function B2(n, l) {
    return {
        x: fg(n.x, l.x),
        y: fg(n.y, l.y)
    }
}
function L2(n, l) {
    let i = .5;
    const o = Lt(n)
      , c = Lt(l);
    return c > o ? i = us(l.min, l.max - o, n.min) : o > c && (i = us(n.min, n.max - c, l.min)),
    ln(0, 1, i)
}
function k2(n, l) {
    const i = {};
    return l.min !== void 0 && (i.min = l.min - n.min),
    l.max !== void 0 && (i.max = l.max - n.min),
    i
}
const Fc = .35;
function H2(n=Fc) {
    return n === !1 ? n = 0 : n === !0 && (n = Fc),
    {
        x: dg(n, "left", "right"),
        y: dg(n, "top", "bottom")
    }
}
function dg(n, l, i) {
    return {
        min: hg(n, l),
        max: hg(n, i)
    }
}
function hg(n, l) {
    return typeof n == "number" ? n : n[l] || 0
}
const P2 = new WeakMap;
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
    start(l, {snapToCursor: i=!1}={}) {
        const {presenceContext: o} = this.visualElement;
        if (o && o.isPresent === !1)
            return;
        const c = y => {
            const {dragSnapToOrigin: x} = this.getProps();
            x ? this.pauseAnimation() : this.stopAnimation(),
            i && this.snapToCursor(Ss(y).point)
        }
          , f = (y, x) => {
            const {drag: T, dragPropagation: w, onDragStart: N} = this.getProps();
            if (T && !w && (this.openDragLock && this.openDragLock(),
            this.openDragLock = aS(T),
            !this.openDragLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            ma(_ => {
                let V = this.getAxisMotionValue(_).get() || 0;
                if (Va.test(V)) {
                    const {projection: k} = this.visualElement;
                    if (k && k.layout) {
                        const B = k.layout.layoutBox[_];
                        B && (V = Lt(B) * (parseFloat(V) / 100))
                    }
                }
                this.originPoint[_] = V
            }
            ),
            N && at.postRender( () => N(y, x)),
            Xc(this.visualElement, "transform");
            const {animationState: D} = this.visualElement;
            D && D.setActive("whileDrag", !0)
        }
          , d = (y, x) => {
            const {dragPropagation: T, dragDirectionLock: w, onDirectionLock: N, onDrag: D} = this.getProps();
            if (!T && !this.openDragLock)
                return;
            const {offset: _} = x;
            if (w && this.currentDirection === null) {
                this.currentDirection = Y2(_),
                this.currentDirection !== null && N && N(this.currentDirection);
                return
            }
            this.updateAxis("x", x.point, _),
            this.updateAxis("y", x.point, _),
            this.visualElement.render(),
            D && D(y, x)
        }
          , g = (y, x) => this.stop(y, x)
          , p = () => ma(y => {
            var x;
            return this.getAnimationState(y) === "paused" && ((x = this.getAxisMotionValue(y).animation) == null ? void 0 : x.play())
        }
        )
          , {dragSnapToOrigin: m} = this.getProps();
        this.panSession = new m0(l,{
            onSessionStart: c,
            onStart: f,
            onMove: d,
            onSessionEnd: g,
            resumeAnimation: p
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: m,
            contextWindow: h0(this.visualElement)
        })
    }
    stop(l, i) {
        const o = this.isDragging;
        if (this.cancel(),
        !o)
            return;
        const {velocity: c} = i;
        this.startAnimation(c);
        const {onDragEnd: f} = this.getProps();
        f && at.postRender( () => f(l, i))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: l, animationState: i} = this.visualElement;
        l && (l.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: o} = this.getProps();
        !o && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        i && i.setActive("whileDrag", !1)
    }
    updateAxis(l, i, o) {
        const {drag: c} = this.getProps();
        if (!o || !qo(l, c, this.currentDirection))
            return;
        const f = this.getAxisMotionValue(l);
        let d = this.originPoint[l] + o[l];
        this.constraints && this.constraints[l] && (d = z2(d, this.constraints[l], this.elastic[l])),
        f.set(d)
    }
    resolveConstraints() {
        var f;
        const {dragConstraints: l, dragElastic: i} = this.getProps()
          , o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (f = this.visualElement.projection) == null ? void 0 : f.layout
          , c = this.constraints;
        l && Kl(l) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : l && o ? this.constraints = U2(o.layoutBox, l) : this.constraints = !1,
        this.elastic = H2(i),
        c !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && ma(d => {
            this.constraints !== !1 && this.getAxisMotionValue(d) && (this.constraints[d] = k2(o.layoutBox[d], this.constraints[d]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: l, onMeasureDragConstraints: i} = this.getProps();
        if (!l || !Kl(l))
            return !1;
        const o = l.current
          , {projection: c} = this.visualElement;
        if (!c || !c.layout)
            return !1;
        const f = M2(o, c.root, this.visualElement.getTransformPagePoint());
        let d = B2(c.layout.layoutBox, f);
        if (i) {
            const g = i(T2(d));
            this.hasMutatedConstraints = !!g,
            g && (d = o0(g))
        }
        return d
    }
    startAnimation(l) {
        const {drag: i, dragMomentum: o, dragElastic: c, dragTransition: f, dragSnapToOrigin: d, onDragTransitionEnd: g} = this.getProps()
          , p = this.constraints || {}
          , m = ma(y => {
            if (!qo(y, i, this.currentDirection))
                return;
            let x = p && p[y] || {};
            d && (x = {
                min: 0,
                max: 0
            });
            const T = c ? 200 : 1e6
              , w = c ? 40 : 1e7
              , N = {
                type: "inertia",
                velocity: o ? l[y] : 0,
                bounceStiffness: T,
                bounceDamping: w,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...f,
                ...x
            };
            return this.startAxisValueAnimation(y, N)
        }
        );
        return Promise.all(m).then(g)
    }
    startAxisValueAnimation(l, i) {
        const o = this.getAxisMotionValue(l);
        return Xc(this.visualElement, l),
        o.start(zf(l, o, 0, i, this.visualElement, !1))
    }
    stopAnimation() {
        ma(l => this.getAxisMotionValue(l).stop())
    }
    pauseAnimation() {
        ma(l => {
            var i;
            return (i = this.getAxisMotionValue(l).animation) == null ? void 0 : i.pause()
        }
        )
    }
    getAnimationState(l) {
        var i;
        return (i = this.getAxisMotionValue(l).animation) == null ? void 0 : i.state
    }
    getAxisMotionValue(l) {
        const i = `_drag${l.toUpperCase()}`
          , o = this.visualElement.getProps()
          , c = o[i];
        return c || this.visualElement.getValue(l, (o.initial ? o.initial[l] : void 0) || 0)
    }
    snapToCursor(l) {
        ma(i => {
            const {drag: o} = this.getProps();
            if (!qo(i, o, this.currentDirection))
                return;
            const {projection: c} = this.visualElement
              , f = this.getAxisMotionValue(i);
            if (c && c.layout) {
                const {min: d, max: g} = c.layout.layoutBox[i];
                f.set(l[i] - tt(d, g, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: l, dragConstraints: i} = this.getProps()
          , {projection: o} = this.visualElement;
        if (!Kl(i) || !o || !this.constraints)
            return;
        this.stopAnimation();
        const c = {
            x: 0,
            y: 0
        };
        ma(d => {
            const g = this.getAxisMotionValue(d);
            if (g && this.constraints !== !1) {
                const p = g.get();
                c[d] = L2({
                    min: p,
                    max: p
                }, this.constraints[d])
            }
        }
        );
        const {transformTemplate: f} = this.visualElement.getProps();
        this.visualElement.current.style.transform = f ? f({}, "") : "none",
        o.root && o.root.updateScroll(),
        o.updateLayout(),
        this.resolveConstraints(),
        ma(d => {
            if (!qo(d, l, null))
                return;
            const g = this.getAxisMotionValue(d)
              , {min: p, max: m} = this.constraints[d];
            g.set(tt(p, m, c[d]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        P2.set(this.visualElement, this);
        const l = this.visualElement.current
          , i = ss(l, "pointerdown", p => {
            const {drag: m, dragListener: y=!0} = this.getProps();
            m && y && this.start(p)
        }
        )
          , o = () => {
            const {dragConstraints: p} = this.getProps();
            Kl(p) && p.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: c} = this.visualElement
          , f = c.addEventListener("measure", o);
        c && !c.layout && (c.root && c.root.updateScroll(),
        c.updateLayout()),
        at.read(o);
        const d = ps(window, "resize", () => this.scalePositionWithinConstraints())
          , g = c.addEventListener("didUpdate", ({delta: p, hasLayoutChanged: m}) => {
            this.isDragging && m && (ma(y => {
                const x = this.getAxisMotionValue(y);
                x && (this.originPoint[y] += p[y].translate,
                x.set(x.get() + p[y].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            d(),
            i(),
            f(),
            g && g()
        }
    }
    getProps() {
        const l = this.visualElement.getProps()
          , {drag: i=!1, dragDirectionLock: o=!1, dragPropagation: c=!1, dragConstraints: f=!1, dragElastic: d=Fc, dragMomentum: g=!0} = l;
        return {
            ...l,
            drag: i,
            dragDirectionLock: o,
            dragPropagation: c,
            dragConstraints: f,
            dragElastic: d,
            dragMomentum: g
        }
    }
}
function qo(n, l, i) {
    return (l === !0 || l === n) && (i === null || i === n)
}
function Y2(n, l=10) {
    let i = null;
    return Math.abs(n.y) > l ? i = "y" : Math.abs(n.x) > l && (i = "x"),
    i
}
class G2 extends Un {
    constructor(l) {
        super(l),
        this.removeGroupControls = ga,
        this.removeListeners = ga,
        this.controls = new q2(l)
    }
    mount() {
        const {dragControls: l} = this.node.getProps();
        l && (this.removeGroupControls = l.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || ga
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const mg = n => (l, i) => {
    n && at.postRender( () => n(l, i))
}
;
class X2 extends Un {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = ga
    }
    onPointerDown(l) {
        this.session = new m0(l,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: h0(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: l, onPanStart: i, onPan: o, onPanEnd: c} = this.node.getProps();
        return {
            onSessionStart: mg(l),
            onStart: mg(i),
            onMove: o,
            onEnd: (f, d) => {
                delete this.session,
                c && at.postRender( () => c(f, d))
            }
        }
    }
    mount() {
        this.removePointerDownListener = ss(this.node.current, "pointerdown", l => this.onPointerDown(l))
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
function pg(n, l) {
    return l.max === l.min ? 0 : n / (l.max - l.min) * 100
}
const ts = {
    correct: (n, l) => {
        if (!l.target)
            return n;
        if (typeof n == "string")
            if (ve.test(n))
                n = parseFloat(n);
            else
                return n;
        const i = pg(n, l.target.x)
          , o = pg(n, l.target.y);
        return `${i}% ${o}%`
    }
}
  , K2 = {
    correct: (n, {treeScale: l, projectionDelta: i}) => {
        const o = n
          , c = zn.parse(n);
        if (c.length > 5)
            return o;
        const f = zn.createTransformer(n)
          , d = typeof c[0] != "number" ? 1 : 0
          , g = i.x.scale * l.x
          , p = i.y.scale * l.y;
        c[0 + d] /= g,
        c[1 + d] /= p;
        const m = tt(g, p, .5);
        return typeof c[2 + d] == "number" && (c[2 + d] /= m),
        typeof c[3 + d] == "number" && (c[3 + d] /= m),
        f(c)
    }
};
class Z2 extends S.Component {
    componentDidMount() {
        const {visualElement: l, layoutGroup: i, switchLayoutGroup: o, layoutId: c} = this.props
          , {projection: f} = l;
        MS(Q2),
        f && (i.group && i.group.add(f),
        o && o.register && c && o.register(f),
        f.root.didUpdate(),
        f.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        f.setOptions({
            ...f.options,
            onExitComplete: () => this.safeToRemove()
        })),
        Ko.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(l) {
        const {layoutDependency: i, visualElement: o, drag: c, isPresent: f} = this.props
          , {projection: d} = o;
        return d && (d.isPresent = f,
        c || l.layoutDependency !== i || i === void 0 || l.isPresent !== f ? d.willUpdate() : this.safeToRemove(),
        l.isPresent !== f && (f ? d.promote() : d.relegate() || at.postRender( () => {
            const g = d.getStack();
            (!g || !g.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: l} = this.props.visualElement;
        l && (l.root.didUpdate(),
        wf.postRender( () => {
            !l.currentAnimation && l.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: l, layoutGroup: i, switchLayoutGroup: o} = this.props
          , {projection: c} = l;
        c && (c.scheduleCheckAfterUnmount(),
        i && i.group && i.group.remove(c),
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
function g0(n) {
    const [l,i] = qy()
      , o = S.useContext(ef);
    return h.jsx(Z2, {
        ...n,
        layoutGroup: o,
        switchLayoutGroup: S.useContext(Qy),
        isPresent: l,
        safeToRemove: i
    })
}
const Q2 = {
    borderRadius: {
        ...ts,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: ts,
    borderTopRightRadius: ts,
    borderBottomLeftRadius: ts,
    borderBottomRightRadius: ts,
    boxShadow: K2
};
function F2(n, l, i) {
    const o = Ut(n) ? n : Jl(n);
    return o.start(zf("", o, l, i)),
    o.animation
}
const J2 = (n, l) => n.depth - l.depth;
class I2 {
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
function $2(n, l) {
    const i = Gt.now()
      , o = ({timestamp: c}) => {
        const f = c - i;
        f >= l && (Vn(o),
        n(f - l))
    }
    ;
    return at.setup(o, !0),
    () => Vn(o)
}
const y0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , W2 = y0.length
  , gg = n => typeof n == "string" ? parseFloat(n) : n
  , yg = n => typeof n == "number" || ve.test(n);
function eT(n, l, i, o, c, f) {
    c ? (n.opacity = tt(0, i.opacity ?? 1, tT(o)),
    n.opacityExit = tt(l.opacity ?? 1, 0, aT(o))) : f && (n.opacity = tt(l.opacity ?? 1, i.opacity ?? 1, o));
    for (let d = 0; d < W2; d++) {
        const g = `border${y0[d]}Radius`;
        let p = vg(l, g)
          , m = vg(i, g);
        if (p === void 0 && m === void 0)
            continue;
        p || (p = 0),
        m || (m = 0),
        p === 0 || m === 0 || yg(p) === yg(m) ? (n[g] = Math.max(tt(gg(p), gg(m), o), 0),
        (Va.test(m) || Va.test(p)) && (n[g] += "%")) : n[g] = m
    }
    (l.rotate || i.rotate) && (n.rotate = tt(l.rotate || 0, i.rotate || 0, o))
}
function vg(n, l) {
    return n[l] !== void 0 ? n[l] : n.borderRadius
}
const tT = v0(0, .5, uy)
  , aT = v0(.5, .95, ga);
function v0(n, l, i) {
    return o => o < n ? 0 : o > l ? 1 : i(us(n, l, o))
}
function xg(n, l) {
    n.min = l.min,
    n.max = l.max
}
function da(n, l) {
    xg(n.x, l.x),
    xg(n.y, l.y)
}
function bg(n, l) {
    n.translate = l.translate,
    n.scale = l.scale,
    n.originPoint = l.originPoint,
    n.origin = l.origin
}
function Sg(n, l, i, o, c) {
    return n -= l,
    n = Io(n, 1 / i, o),
    c !== void 0 && (n = Io(n, 1 / c, o)),
    n
}
function nT(n, l=0, i=1, o=.5, c, f=n, d=n) {
    if (Va.test(l) && (l = parseFloat(l),
    l = tt(d.min, d.max, l / 100) - d.min),
    typeof l != "number")
        return;
    let g = tt(f.min, f.max, o);
    n === f && (g -= l),
    n.min = Sg(n.min, l, i, g, c),
    n.max = Sg(n.max, l, i, g, c)
}
function Tg(n, l, [i,o,c], f, d) {
    nT(n, l[i], l[o], l[c], l.scale, f, d)
}
const lT = ["x", "scaleX", "originX"]
  , iT = ["y", "scaleY", "originY"];
function jg(n, l, i, o) {
    Tg(n.x, l, lT, i ? i.x : void 0, o ? o.x : void 0),
    Tg(n.y, l, iT, i ? i.y : void 0, o ? o.y : void 0)
}
function wg(n) {
    return n.translate === 0 && n.scale === 1
}
function x0(n) {
    return wg(n.x) && wg(n.y)
}
function Ag(n, l) {
    return n.min === l.min && n.max === l.max
}
function sT(n, l) {
    return Ag(n.x, l.x) && Ag(n.y, l.y)
}
function Ng(n, l) {
    return Math.round(n.min) === Math.round(l.min) && Math.round(n.max) === Math.round(l.max)
}
function b0(n, l) {
    return Ng(n.x, l.x) && Ng(n.y, l.y)
}
function Eg(n) {
    return Lt(n.x) / Lt(n.y)
}
function Cg(n, l) {
    return n.translate === l.translate && n.scale === l.scale && n.originPoint === l.originPoint
}
class oT {
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
            const i = this.members[this.members.length - 1];
            i && this.promote(i)
        }
    }
    relegate(l) {
        const i = this.members.findIndex(c => l === c);
        if (i === 0)
            return !1;
        let o;
        for (let c = i; c >= 0; c--) {
            const f = this.members[c];
            if (f.isPresent !== !1) {
                o = f;
                break
            }
        }
        return o ? (this.promote(o),
        !0) : !1
    }
    promote(l, i) {
        const o = this.lead;
        if (l !== o && (this.prevLead = o,
        this.lead = l,
        l.show(),
        o)) {
            o.instance && o.scheduleRender(),
            l.scheduleRender(),
            l.resumeFrom = o,
            i && (l.resumeFrom.preserveOpacity = !0),
            o.snapshot && (l.snapshot = o.snapshot,
            l.snapshot.latestValues = o.animationValues || o.latestValues),
            l.root && l.root.isUpdating && (l.isLayoutDirty = !0);
            const {crossfade: c} = l.options;
            c === !1 && o.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(l => {
            const {options: i, resumingFrom: o} = l;
            i.onExitComplete && i.onExitComplete(),
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
function rT(n, l, i) {
    let o = "";
    const c = n.x.translate / l.x
      , f = n.y.translate / l.y
      , d = (i == null ? void 0 : i.z) || 0;
    if ((c || f || d) && (o = `translate3d(${c}px, ${f}px, ${d}px) `),
    (l.x !== 1 || l.y !== 1) && (o += `scale(${1 / l.x}, ${1 / l.y}) `),
    i) {
        const {transformPerspective: m, rotate: y, rotateX: x, rotateY: T, skewX: w, skewY: N} = i;
        m && (o = `perspective(${m}px) ${o}`),
        y && (o += `rotate(${y}deg) `),
        x && (o += `rotateX(${x}deg) `),
        T && (o += `rotateY(${T}deg) `),
        w && (o += `skewX(${w}deg) `),
        N && (o += `skewY(${N}deg) `)
    }
    const g = n.x.scale * l.x
      , p = n.y.scale * l.y;
    return (g !== 1 || p !== 1) && (o += `scale(${g}, ${p})`),
    o || "none"
}
const Ec = ["", "X", "Y", "Z"]
  , uT = {
    visibility: "hidden"
}
  , cT = 1e3;
let fT = 0;
function Cc(n, l, i, o) {
    const {latestValues: c} = l;
    c[n] && (i[n] = c[n],
    l.setStaticValue(n, 0),
    o && (o[n] = 0))
}
function S0(n) {
    if (n.hasCheckedOptimisedAppear = !0,
    n.root === n)
        return;
    const {visualElement: l} = n.options;
    if (!l)
        return;
    const i = n0(l);
    if (window.MotionHasOptimisedAnimation(i, "transform")) {
        const {layout: c, layoutId: f} = n.options;
        window.MotionCancelOptimisedAnimation(i, "transform", at, !(c || f))
    }
    const {parent: o} = n;
    o && !o.hasCheckedOptimisedAppear && S0(o)
}
function T0({attachResizeListener: n, defaultParent: l, measureScroll: i, checkIsScrollRoot: o, resetTransform: c}) {
    return class {
        constructor(d={}, g=l == null ? void 0 : l()) {
            this.id = fT++,
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
                this.nodes.forEach(mT),
                this.nodes.forEach(xT),
                this.nodes.forEach(bT),
                this.nodes.forEach(pT)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = d,
            this.root = g ? g.root || g : this,
            this.path = g ? [...g.path, g] : [],
            this.parent = g,
            this.depth = g ? g.depth + 1 : 0;
            for (let p = 0; p < this.path.length; p++)
                this.path[p].shouldResetTransform = !0;
            this.root === this && (this.nodes = new I2)
        }
        addEventListener(d, g) {
            return this.eventHandlers.has(d) || this.eventHandlers.set(d, new rf),
            this.eventHandlers.get(d).add(g)
        }
        notifyListeners(d, ...g) {
            const p = this.eventHandlers.get(d);
            p && p.notify(...g)
        }
        hasListeners(d) {
            return this.eventHandlers.has(d)
        }
        mount(d) {
            if (this.instance)
                return;
            this.isSVG = Py(d) && !rS(d),
            this.instance = d;
            const {layoutId: g, layout: p, visualElement: m} = this.options;
            if (m && !m.current && m.mount(d),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (p || g) && (this.isLayoutDirty = !0),
            n) {
                let y;
                const x = () => this.root.updateBlockedByResize = !1;
                n(d, () => {
                    this.root.updateBlockedByResize = !0,
                    y && y(),
                    y = $2(x, 250),
                    Ko.hasAnimatedSinceResize && (Ko.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(_g))
                }
                )
            }
            g && this.root.registerSharedNode(g, this),
            this.options.animate !== !1 && m && (g || p) && this.addEventListener("didUpdate", ({delta: y, hasLayoutChanged: x, hasRelativeLayoutChanged: T, layout: w}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const N = this.options.transition || m.getDefaultTransition() || AT
                  , {onLayoutAnimationStart: D, onLayoutAnimationComplete: _} = m.getProps()
                  , V = !this.targetLayout || !b0(this.targetLayout, w)
                  , k = !x && T;
                if (this.options.layoutRoot || this.resumeFrom || k || x && (V || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0);
                    const B = {
                        ...Tf(N, "layout"),
                        onPlay: D,
                        onComplete: _
                    };
                    (m.shouldReduceMotion || this.options.layoutRoot) && (B.delay = 0,
                    B.type = !1),
                    this.startAnimation(B),
                    this.setAnimationOrigin(y, k)
                } else
                    x || _g(this),
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
            this.nodes && this.nodes.forEach(ST),
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
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && S0(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let y = 0; y < this.path.length; y++) {
                const x = this.path[y];
                x.shouldResetTransform = !0,
                x.updateScroll("snapshot"),
                x.options.layoutRoot && x.willUpdate(!1)
            }
            const {layoutId: g, layout: p} = this.options;
            if (g === void 0 && !p)
                return;
            const m = this.getTransformTemplate();
            this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0,
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
            this.isUpdating || this.nodes.forEach(yT),
            this.isUpdating = !1,
            this.nodes.forEach(vT),
            this.nodes.forEach(dT),
            this.nodes.forEach(hT),
            this.clearAllSnapshots();
            const g = Gt.now();
            Ot.delta = ln(0, 1e3 / 60, g - Ot.timestamp),
            Ot.timestamp = g,
            Ot.isProcessing = !0,
            vc.update.process(Ot),
            vc.preRender.process(Ot),
            vc.render.process(Ot),
            Ot.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            wf.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(gT),
            this.sharedNodes.forEach(TT)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            at.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            at.postRender( () => {
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
            const {visualElement: g} = this.options;
            g && g.notify("LayoutMeasure", this.layout.layoutBox, d ? d.layoutBox : void 0)
        }
        updateScroll(d="measure") {
            let g = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === d && (g = !1),
            g && this.instance) {
                const p = o(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: d,
                    isRoot: p,
                    offset: i(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : p
                }
            }
        }
        resetTransform() {
            if (!c)
                return;
            const d = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , g = this.projectionDelta && !x0(this.projectionDelta)
              , p = this.getTransformTemplate()
              , m = p ? p(this.latestValues, "") : void 0
              , y = m !== this.prevTransformTemplateValue;
            d && this.instance && (g || tl(this.latestValues) || y) && (c(this.instance, m),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(d=!0) {
            const g = this.measurePageBox();
            let p = this.removeElementScroll(g);
            return d && (p = this.removeTransform(p)),
            NT(p),
            {
                animationId: this.root.animationId,
                measuredBox: g,
                layoutBox: p,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var m;
            const {visualElement: d} = this.options;
            if (!d)
                return ht();
            const g = d.measureViewportBox();
            if (!(((m = this.scroll) == null ? void 0 : m.wasRoot) || this.path.some(ET))) {
                const {scroll: y} = this.root;
                y && (Ql(g.x, y.offset.x),
                Ql(g.y, y.offset.y))
            }
            return g
        }
        removeElementScroll(d) {
            var p;
            const g = ht();
            if (da(g, d),
            (p = this.scroll) != null && p.wasRoot)
                return g;
            for (let m = 0; m < this.path.length; m++) {
                const y = this.path[m]
                  , {scroll: x, options: T} = y;
                y !== this.root && x && T.layoutScroll && (x.wasRoot && da(g, d),
                Ql(g.x, x.offset.x),
                Ql(g.y, x.offset.y))
            }
            return g
        }
        applyTransform(d, g=!1) {
            const p = ht();
            da(p, d);
            for (let m = 0; m < this.path.length; m++) {
                const y = this.path[m];
                !g && y.options.layoutScroll && y.scroll && y !== y.root && Fl(p, {
                    x: -y.scroll.offset.x,
                    y: -y.scroll.offset.y
                }),
                tl(y.latestValues) && Fl(p, y.latestValues)
            }
            return tl(this.latestValues) && Fl(p, this.latestValues),
            p
        }
        removeTransform(d) {
            const g = ht();
            da(g, d);
            for (let p = 0; p < this.path.length; p++) {
                const m = this.path[p];
                if (!m.instance || !tl(m.latestValues))
                    continue;
                Zc(m.latestValues) && m.updateSnapshot();
                const y = ht()
                  , x = m.measurePageBox();
                da(y, x),
                jg(g, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, y)
            }
            return tl(this.latestValues) && jg(g, this.latestValues),
            g
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
            var T;
            const g = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = g.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = g.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = g.isSharedProjectionDirty);
            const p = !!this.resumingFrom || this !== g;
            if (!(d || p && this.isSharedProjectionDirty || this.isProjectionDirty || (T = this.parent) != null && T.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: y, layoutId: x} = this.options;
            if (!(!this.layout || !(y || x))) {
                if (this.resolvedRelativeTargetAt = Ot.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const w = this.getClosestProjectingParent();
                    w && w.layout && this.animationProgress !== 1 ? (this.relativeParent = w,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = ht(),
                    this.relativeTargetOrigin = ht(),
                    rs(this.relativeTargetOrigin, this.layout.layoutBox, w.layout.layoutBox),
                    da(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = ht(),
                this.targetWithTransforms = ht()),
                this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                D2(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : da(this.target, this.layout.layoutBox),
                f0(this.target, this.targetDelta)) : da(this.target, this.layout.layoutBox),
                this.attemptToResolveRelativeTarget)) {
                    this.attemptToResolveRelativeTarget = !1;
                    const w = this.getClosestProjectingParent();
                    w && !!w.resumingFrom == !!this.resumingFrom && !w.options.layoutScroll && w.target && this.animationProgress !== 1 ? (this.relativeParent = w,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = ht(),
                    this.relativeTargetOrigin = ht(),
                    rs(this.relativeTargetOrigin, this.target, w.target),
                    da(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Zc(this.parent.latestValues) || c0(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var N;
            const d = this.getLead()
              , g = !!this.resumingFrom || this !== d;
            let p = !0;
            if ((this.isProjectionDirty || (N = this.parent) != null && N.isProjectionDirty) && (p = !1),
            g && (this.isSharedProjectionDirty || this.isTransformDirty) && (p = !1),
            this.resolvedRelativeTargetAt === Ot.timestamp && (p = !1),
            p)
                return;
            const {layout: m, layoutId: y} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(m || y))
                return;
            da(this.layoutCorrected, this.layout.layoutBox);
            const x = this.treeScale.x
              , T = this.treeScale.y;
            _2(this.layoutCorrected, this.treeScale, this.path, g),
            d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox,
            d.targetWithTransforms = ht());
            const {target: w} = d;
            if (!w) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (bg(this.prevProjectionDelta.x, this.projectionDelta.x),
            bg(this.prevProjectionDelta.y, this.projectionDelta.y)),
            os(this.projectionDelta, this.layoutCorrected, w, this.latestValues),
            (this.treeScale.x !== x || this.treeScale.y !== T || !Cg(this.projectionDelta.x, this.prevProjectionDelta.x) || !Cg(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
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
            var g;
            if ((g = this.options.visualElement) == null || g.scheduleRender(),
            d) {
                const p = this.getStack();
                p && p.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Zl(),
            this.projectionDelta = Zl(),
            this.projectionDeltaWithTransform = Zl()
        }
        setAnimationOrigin(d, g=!1) {
            const p = this.snapshot
              , m = p ? p.latestValues : {}
              , y = {
                ...this.latestValues
            }
              , x = Zl();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !g;
            const T = ht()
              , w = p ? p.source : void 0
              , N = this.layout ? this.layout.source : void 0
              , D = w !== N
              , _ = this.getStack()
              , V = !_ || _.members.length <= 1
              , k = !!(D && !V && this.options.crossfade === !0 && !this.path.some(wT));
            this.animationProgress = 0;
            let B;
            this.mixTargetDelta = K => {
                const R = K / 1e3;
                Mg(x.x, d.x, R),
                Mg(x.y, d.y, R),
                this.setTargetDelta(x),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (rs(T, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                jT(this.relativeTarget, this.relativeTargetOrigin, T, R),
                B && sT(this.relativeTarget, B) && (this.isProjectionDirty = !1),
                B || (B = ht()),
                da(B, this.relativeTarget)),
                D && (this.animationValues = y,
                eT(y, m, this.latestValues, R, k, V)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = R
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(d) {
            var g, p, m;
            this.notifyListeners("animationStart"),
            (g = this.currentAnimation) == null || g.stop(),
            (m = (p = this.resumingFrom) == null ? void 0 : p.currentAnimation) == null || m.stop(),
            this.pendingAnimation && (Vn(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = at.update( () => {
                Ko.hasAnimatedSinceResize = !0,
                this.motionValue || (this.motionValue = Jl(0)),
                this.currentAnimation = F2(this.motionValue, [0, 1e3], {
                    ...d,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: y => {
                        this.mixTargetDelta(y),
                        d.onUpdate && d.onUpdate(y)
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
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(cT),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const d = this.getLead();
            let {targetWithTransforms: g, target: p, layout: m, latestValues: y} = d;
            if (!(!g || !p || !m)) {
                if (this !== d && this.layout && m && j0(this.options.animationType, this.layout.layoutBox, m.layoutBox)) {
                    p = this.target || ht();
                    const x = Lt(this.layout.layoutBox.x);
                    p.x.min = d.target.x.min,
                    p.x.max = p.x.min + x;
                    const T = Lt(this.layout.layoutBox.y);
                    p.y.min = d.target.y.min,
                    p.y.max = p.y.min + T
                }
                da(g, p),
                Fl(g, y),
                os(this.projectionDeltaWithTransform, this.layoutCorrected, g, y)
            }
        }
        registerSharedNode(d, g) {
            this.sharedNodes.has(d) || this.sharedNodes.set(d, new oT),
            this.sharedNodes.get(d).add(g);
            const m = g.options.initialPromotionConfig;
            g.promote({
                transition: m ? m.transition : void 0,
                preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(g) : void 0
            })
        }
        isLead() {
            const d = this.getStack();
            return d ? d.lead === this : !0
        }
        getLead() {
            var g;
            const {layoutId: d} = this.options;
            return d ? ((g = this.getStack()) == null ? void 0 : g.lead) || this : this
        }
        getPrevLead() {
            var g;
            const {layoutId: d} = this.options;
            return d ? (g = this.getStack()) == null ? void 0 : g.prevLead : void 0
        }
        getStack() {
            const {layoutId: d} = this.options;
            if (d)
                return this.root.sharedNodes.get(d)
        }
        promote({needsReset: d, transition: g, preserveFollowOpacity: p}={}) {
            const m = this.getStack();
            m && m.promote(this, p),
            d && (this.projectionDelta = void 0,
            this.needsReset = !0),
            g && this.setOptions({
                transition: g
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
            let g = !1;
            const {latestValues: p} = d;
            if ((p.z || p.rotate || p.rotateX || p.rotateY || p.rotateZ || p.skewX || p.skewY) && (g = !0),
            !g)
                return;
            const m = {};
            p.z && Cc("z", d, m, this.animationValues);
            for (let y = 0; y < Ec.length; y++)
                Cc(`rotate${Ec[y]}`, d, m, this.animationValues),
                Cc(`skew${Ec[y]}`, d, m, this.animationValues);
            d.render();
            for (const y in m)
                d.setStaticValue(y, m[y]),
                this.animationValues && (this.animationValues[y] = m[y]);
            d.scheduleRender()
        }
        getProjectionStyles(d) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return uT;
            const g = {
                visibility: ""
            }
              , p = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                g.opacity = "",
                g.pointerEvents = Xo(d == null ? void 0 : d.pointerEvents) || "",
                g.transform = p ? p(this.latestValues, "") : "none",
                g;
            const m = this.getLead();
            if (!this.projectionDelta || !this.layout || !m.target) {
                const w = {};
                return this.options.layoutId && (w.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                w.pointerEvents = Xo(d == null ? void 0 : d.pointerEvents) || ""),
                this.hasProjected && !tl(this.latestValues) && (w.transform = p ? p({}, "") : "none",
                this.hasProjected = !1),
                w
            }
            const y = m.animationValues || m.latestValues;
            this.applyTransformsToTarget(),
            g.transform = rT(this.projectionDeltaWithTransform, this.treeScale, y),
            p && (g.transform = p(y, g.transform));
            const {x, y: T} = this.projectionDelta;
            g.transformOrigin = `${x.origin * 100}% ${T.origin * 100}% 0`,
            m.animationValues ? g.opacity = m === this ? y.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : y.opacityExit : g.opacity = m === this ? y.opacity !== void 0 ? y.opacity : "" : y.opacityExit !== void 0 ? y.opacityExit : 0;
            for (const w in hs) {
                if (y[w] === void 0)
                    continue;
                const {correct: N, applyTo: D, isCSSVariable: _} = hs[w]
                  , V = g.transform === "none" ? y[w] : N(y[w], m);
                if (D) {
                    const k = D.length;
                    for (let B = 0; B < k; B++)
                        g[D[B]] = V
                } else
                    _ ? this.options.visualElement.renderState.vars[w] = V : g[w] = V
            }
            return this.options.layoutId && (g.pointerEvents = m === this ? Xo(d == null ? void 0 : d.pointerEvents) || "" : "none"),
            g
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(d => {
                var g;
                return (g = d.currentAnimation) == null ? void 0 : g.stop()
            }
            ),
            this.root.nodes.forEach(Dg),
            this.root.sharedNodes.clear()
        }
    }
}
function dT(n) {
    n.updateLayout()
}
function hT(n) {
    var i;
    const l = ((i = n.resumeFrom) == null ? void 0 : i.snapshot) || n.snapshot;
    if (n.isLead() && n.layout && l && n.hasListeners("didUpdate")) {
        const {layoutBox: o, measuredBox: c} = n.layout
          , {animationType: f} = n.options
          , d = l.source !== n.layout.source;
        f === "size" ? ma(x => {
            const T = d ? l.measuredBox[x] : l.layoutBox[x]
              , w = Lt(T);
            T.min = o[x].min,
            T.max = T.min + w
        }
        ) : j0(f, l.layoutBox, o) && ma(x => {
            const T = d ? l.measuredBox[x] : l.layoutBox[x]
              , w = Lt(o[x]);
            T.max = T.min + w,
            n.relativeTarget && !n.currentAnimation && (n.isProjectionDirty = !0,
            n.relativeTarget[x].max = n.relativeTarget[x].min + w)
        }
        );
        const g = Zl();
        os(g, o, l.layoutBox);
        const p = Zl();
        d ? os(p, n.applyTransform(c, !0), l.measuredBox) : os(p, o, l.layoutBox);
        const m = !x0(g);
        let y = !1;
        if (!n.resumeFrom) {
            const x = n.getClosestProjectingParent();
            if (x && !x.resumeFrom) {
                const {snapshot: T, layout: w} = x;
                if (T && w) {
                    const N = ht();
                    rs(N, l.layoutBox, T.layoutBox);
                    const D = ht();
                    rs(D, o, w.layoutBox),
                    b0(N, D) || (y = !0),
                    x.options.layoutRoot && (n.relativeTarget = D,
                    n.relativeTargetOrigin = N,
                    n.relativeParent = x)
                }
            }
        }
        n.notifyListeners("didUpdate", {
            layout: o,
            snapshot: l,
            delta: p,
            layoutDelta: g,
            hasLayoutChanged: m,
            hasRelativeLayoutChanged: y
        })
    } else if (n.isLead()) {
        const {onExitComplete: o} = n.options;
        o && o()
    }
    n.options.transition = void 0
}
function mT(n) {
    n.parent && (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty),
    n.isSharedProjectionDirty || (n.isSharedProjectionDirty = !!(n.isProjectionDirty || n.parent.isProjectionDirty || n.parent.isSharedProjectionDirty)),
    n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty))
}
function pT(n) {
    n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1
}
function gT(n) {
    n.clearSnapshot()
}
function Dg(n) {
    n.clearMeasurements()
}
function yT(n) {
    n.isLayoutDirty = !1
}
function vT(n) {
    const {visualElement: l} = n.options;
    l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"),
    n.resetTransform()
}
function _g(n) {
    n.finishAnimation(),
    n.targetDelta = n.relativeTarget = n.target = void 0,
    n.isProjectionDirty = !0
}
function xT(n) {
    n.resolveTargetDelta()
}
function bT(n) {
    n.calcProjection()
}
function ST(n) {
    n.resetSkewAndRotation()
}
function TT(n) {
    n.removeLeadSnapshot()
}
function Mg(n, l, i) {
    n.translate = tt(l.translate, 0, i),
    n.scale = tt(l.scale, 1, i),
    n.origin = l.origin,
    n.originPoint = l.originPoint
}
function Og(n, l, i, o) {
    n.min = tt(l.min, i.min, o),
    n.max = tt(l.max, i.max, o)
}
function jT(n, l, i, o) {
    Og(n.x, l.x, i.x, o),
    Og(n.y, l.y, i.y, o)
}
function wT(n) {
    return n.animationValues && n.animationValues.opacityExit !== void 0
}
const AT = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Rg = n => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n)
  , Vg = Rg("applewebkit/") && !Rg("chrome/") ? Math.round : ga;
function zg(n) {
    n.min = Vg(n.min),
    n.max = Vg(n.max)
}
function NT(n) {
    zg(n.x),
    zg(n.y)
}
function j0(n, l, i) {
    return n === "position" || n === "preserve-aspect" && !C2(Eg(l), Eg(i), .2)
}
function ET(n) {
    var l;
    return n !== n.root && ((l = n.scroll) == null ? void 0 : l.wasRoot)
}
const CT = T0({
    attachResizeListener: (n, l) => ps(n, "resize", l),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , Dc = {
    current: void 0
}
  , w0 = T0({
    measureScroll: n => ({
        x: n.scrollLeft,
        y: n.scrollTop
    }),
    defaultParent: () => {
        if (!Dc.current) {
            const n = new CT({});
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
  , DT = {
    pan: {
        Feature: X2
    },
    drag: {
        Feature: G2,
        ProjectionNode: w0,
        MeasureLayout: g0
    }
};
function Ug(n, l, i) {
    const {props: o} = n;
    n.animationState && o.whileHover && n.animationState.setActive("whileHover", i === "Start");
    const c = "onHover" + i
      , f = o[c];
    f && at.postRender( () => f(l, Ss(l)))
}
class _T extends Un {
    mount() {
        const {current: l} = this.node;
        l && (this.unmount = nS(l, (i, o) => (Ug(this.node, o, "Start"),
        c => Ug(this.node, c, "End"))))
    }
    unmount() {}
}
class MT extends Un {
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
        this.unmount = vs(ps(this.node.current, "focus", () => this.onFocus()), ps(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function Bg(n, l, i) {
    const {props: o} = n;
    if (n.current instanceof HTMLButtonElement && n.current.disabled)
        return;
    n.animationState && o.whileTap && n.animationState.setActive("whileTap", i === "Start");
    const c = "onTap" + (i === "End" ? "" : i)
      , f = o[c];
    f && at.postRender( () => f(l, Ss(l)))
}
class OT extends Un {
    mount() {
        const {current: l} = this.node;
        l && (this.unmount = oS(l, (i, o) => (Bg(this.node, o, "Start"),
        (c, {success: f}) => Bg(this.node, c, f ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const Jc = new WeakMap
  , _c = new WeakMap
  , RT = n => {
    const l = Jc.get(n.target);
    l && l(n)
}
  , VT = n => {
    n.forEach(RT)
}
;
function zT({root: n, ...l}) {
    const i = n || document;
    _c.has(i) || _c.set(i, {});
    const o = _c.get(i)
      , c = JSON.stringify(l);
    return o[c] || (o[c] = new IntersectionObserver(VT,{
        root: n,
        ...l
    })),
    o[c]
}
function UT(n, l, i) {
    const o = zT(l);
    return Jc.set(n, i),
    o.observe(n),
    () => {
        Jc.delete(n),
        o.unobserve(n)
    }
}
const BT = {
    some: 0,
    all: 1
};
class LT extends Un {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: l={}} = this.node.getProps()
          , {root: i, margin: o, amount: c="some", once: f} = l
          , d = {
            root: i ? i.current : void 0,
            rootMargin: o,
            threshold: typeof c == "number" ? c : BT[c]
        }
          , g = p => {
            const {isIntersecting: m} = p;
            if (this.isInView === m || (this.isInView = m,
            f && !m && this.hasEnteredView))
                return;
            m && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", m);
            const {onViewportEnter: y, onViewportLeave: x} = this.node.getProps()
              , T = m ? y : x;
            T && T(p)
        }
        ;
        return UT(this.node.current, d, g)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: l, prevProps: i} = this.node;
        ["amount", "margin", "root"].some(kT(l, i)) && this.startObserver()
    }
    unmount() {}
}
function kT({viewport: n={}}, {viewport: l={}}={}) {
    return i => n[i] !== l[i]
}
const HT = {
    inView: {
        Feature: LT
    },
    tap: {
        Feature: OT
    },
    focus: {
        Feature: MT
    },
    hover: {
        Feature: _T
    }
}
  , PT = {
    layout: {
        ProjectionNode: w0,
        MeasureLayout: g0
    }
}
  , Ic = {
    current: null
}
  , A0 = {
    current: !1
};
function qT() {
    if (A0.current = !0,
    !!af)
        if (window.matchMedia) {
            const n = window.matchMedia("(prefers-reduced-motion)")
              , l = () => Ic.current = n.matches;
            n.addListener(l),
            l()
        } else
            Ic.current = !1
}
const YT = new WeakMap;
function GT(n, l, i) {
    for (const o in l) {
        const c = l[o]
          , f = i[o];
        if (Ut(c))
            n.addValue(o, c);
        else if (Ut(f))
            n.addValue(o, Jl(c, {
                owner: n
            }));
        else if (f !== c)
            if (n.hasValue(o)) {
                const d = n.getValue(o);
                d.liveStyle === !0 ? d.jump(c) : d.hasAnimated || d.set(c)
            } else {
                const d = n.getStaticValue(o);
                n.addValue(o, Jl(d !== void 0 ? d : c, {
                    owner: n
                }))
            }
    }
    for (const o in i)
        l[o] === void 0 && n.removeValue(o);
    return l
}
const Lg = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class XT {
    scrapeMotionValuesFromProps(l, i, o) {
        return {}
    }
    constructor({parent: l, props: i, presenceContext: o, reducedMotionConfig: c, blockInitialAnimation: f, visualState: d}, g={}) {
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
            const T = Gt.now();
            this.renderScheduledAt < T && (this.renderScheduledAt = T,
            at.render(this.render, !1, !0))
        }
        ;
        const {latestValues: p, renderState: m} = d;
        this.latestValues = p,
        this.baseTarget = {
            ...p
        },
        this.initialValues = i.initial ? {
            ...p
        } : {},
        this.renderState = m,
        this.parent = l,
        this.props = i,
        this.presenceContext = o,
        this.depth = l ? l.depth + 1 : 0,
        this.reducedMotionConfig = c,
        this.options = g,
        this.blockInitialAnimation = !!f,
        this.isControllingVariants = ar(i),
        this.isVariantNode = Ky(i),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(l && l.current);
        const {willChange: y, ...x} = this.scrapeMotionValuesFromProps(i, {}, this);
        for (const T in x) {
            const w = x[T];
            p[T] !== void 0 && Ut(w) && w.set(p[T], !1)
        }
    }
    mount(l) {
        this.current = l,
        YT.set(l, this),
        this.projection && !this.projection.instance && this.projection.mount(l),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (i, o) => this.bindToMotionValue(o, i)),
        A0.current || qT(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ic.current,
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
            const i = this.features[l];
            i && (i.unmount(),
            i.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(l, i) {
        this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)();
        const o = ei.has(l);
        o && this.onBindTransform && this.onBindTransform();
        const c = i.on("change", g => {
            this.latestValues[l] = g,
            this.props.onUpdate && at.preRender(this.notifyUpdate),
            o && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , f = i.on("renderRequest", this.scheduleRender);
        let d;
        window.MotionCheckAppearSync && (d = window.MotionCheckAppearSync(this, l, i)),
        this.valueSubscriptions.set(l, () => {
            c(),
            f(),
            d && d(),
            i.owner && i.stop()
        }
        )
    }
    sortNodePosition(l) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== l.type ? 0 : this.sortInstanceNodePosition(this.current, l.current)
    }
    updateFeatures() {
        let l = "animation";
        for (l in Il) {
            const i = Il[l];
            if (!i)
                continue;
            const {isEnabled: o, Feature: c} = i;
            if (!this.features[l] && c && o(this.props) && (this.features[l] = new c(this)),
            this.features[l]) {
                const f = this.features[l];
                f.isMounted ? f.update() : (f.mount(),
                f.isMounted = !0)
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
    setStaticValue(l, i) {
        this.latestValues[l] = i
    }
    update(l, i) {
        (l.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = l,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = i;
        for (let o = 0; o < Lg.length; o++) {
            const c = Lg[o];
            this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](),
            delete this.propEventSubscriptions[c]);
            const f = "on" + c
              , d = l[f];
            d && (this.propEventSubscriptions[c] = this.on(c, d))
        }
        this.prevMotionValues = GT(this, this.scrapeMotionValuesFromProps(l, this.prevProps, this), this.prevMotionValues),
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
        const i = this.getClosestVariantNode();
        if (i)
            return i.variantChildren && i.variantChildren.add(l),
            () => i.variantChildren.delete(l)
    }
    addValue(l, i) {
        const o = this.values.get(l);
        i !== o && (o && this.removeValue(l),
        this.bindToMotionValue(l, i),
        this.values.set(l, i),
        this.latestValues[l] = i.get())
    }
    removeValue(l) {
        this.values.delete(l);
        const i = this.valueSubscriptions.get(l);
        i && (i(),
        this.valueSubscriptions.delete(l)),
        delete this.latestValues[l],
        this.removeValueFromRenderState(l, this.renderState)
    }
    hasValue(l) {
        return this.values.has(l)
    }
    getValue(l, i) {
        if (this.props.values && this.props.values[l])
            return this.props.values[l];
        let o = this.values.get(l);
        return o === void 0 && i !== void 0 && (o = Jl(i === null ? void 0 : i, {
            owner: this
        }),
        this.addValue(l, o)),
        o
    }
    readValue(l, i) {
        let o = this.latestValues[l] !== void 0 || !this.current ? this.latestValues[l] : this.getBaseTargetFromProps(this.props, l) ?? this.readValueFromInstance(this.current, l, this.options);
        return o != null && (typeof o == "string" && (Wg(o) || ty(o)) ? o = parseFloat(o) : !cS(o) && zn.test(i) && (o = Uy(l, i)),
        this.setBaseTarget(l, Ut(o) ? o.get() : o)),
        Ut(o) ? o.get() : o
    }
    setBaseTarget(l, i) {
        this.baseTarget[l] = i
    }
    getBaseTarget(l) {
        var f;
        const {initial: i} = this.props;
        let o;
        if (typeof i == "string" || typeof i == "object") {
            const d = Rf(this.props, i, (f = this.presenceContext) == null ? void 0 : f.custom);
            d && (o = d[l])
        }
        if (i && o !== void 0)
            return o;
        const c = this.getBaseTargetFromProps(this.props, l);
        return c !== void 0 && !Ut(c) ? c : this.initialValues[l] !== void 0 && o === void 0 ? void 0 : this.baseTarget[l]
    }
    on(l, i) {
        return this.events[l] || (this.events[l] = new rf),
        this.events[l].add(i)
    }
    notify(l, ...i) {
        this.events[l] && this.events[l].notify(...i)
    }
}
class N0 extends XT {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = $1
    }
    sortInstanceNodePosition(l, i) {
        return l.compareDocumentPosition(i) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(l, i) {
        return l.style ? l.style[i] : void 0
    }
    removeValueFromRenderState(l, {vars: i, style: o}) {
        delete i[l],
        delete o[l]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: l} = this.props;
        Ut(l) && (this.childSubscription = l.on("change", i => {
            this.current && (this.current.textContent = `${i}`)
        }
        ))
    }
}
function E0(n, {style: l, vars: i}, o, c) {
    Object.assign(n.style, l, c && c.getProjectionStyles(o));
    for (const f in i)
        n.style.setProperty(f, i[f])
}
function KT(n) {
    return window.getComputedStyle(n)
}
class ZT extends N0 {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = E0
    }
    readValueFromInstance(l, i) {
        var o;
        if (ei.has(i))
            return (o = this.projection) != null && o.isProjecting ? Lc(i) : y1(l, i);
        {
            const c = KT(l)
              , f = (ff(i) ? c.getPropertyValue(i) : c[i]) || 0;
            return typeof f == "string" ? f.trim() : f
        }
    }
    measureInstanceViewportBox(l, {transformPagePoint: i}) {
        return d0(l, i)
    }
    build(l, i, o) {
        _f(l, i, o.transformTemplate)
    }
    scrapeMotionValuesFromProps(l, i, o) {
        return Vf(l, i, o)
    }
}
const C0 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function QT(n, l, i, o) {
    E0(n, l, void 0, o);
    for (const c in l.attrs)
        n.setAttribute(C0.has(c) ? c : Df(c), l.attrs[c])
}
class FT extends N0 {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = ht
    }
    getBaseTargetFromProps(l, i) {
        return l[i]
    }
    readValueFromInstance(l, i) {
        if (ei.has(i)) {
            const o = zy(i);
            return o && o.default || 0
        }
        return i = C0.has(i) ? i : Df(i),
        l.getAttribute(i)
    }
    scrapeMotionValuesFromProps(l, i, o) {
        return a0(l, i, o)
    }
    build(l, i, o) {
        $y(l, i, this.isSVGTag, o.transformTemplate, o.style)
    }
    renderInstance(l, i, o, c) {
        QT(l, i, o, c)
    }
    mount(l) {
        this.isSVGTag = e0(l.tagName),
        super.mount(l)
    }
}
const JT = (n, l) => Of(n) ? new FT(l) : new ZT(l,{
    allowProjection: n !== S.Fragment
})
  , IT = QS({
    ...b2,
    ...HT,
    ...DT,
    ...PT
}, JT)
  , re = xS(IT);
function $T() {
    return h.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 72 72",
        width: "1.5em",
        height: "1.5em",
        children: [h.jsx("path", {
            fill: "#ea5a47",
            d: "M63.874 21.906a7.31 7.31 0 0 0-5.144-5.177C54.193 15.505 36 15.505 36 15.505s-18.193 0-22.73 1.224a7.31 7.31 0 0 0-5.144 5.177C6.91 26.472 6.91 36 6.91 36s0 9.528 1.216 14.095a7.31 7.31 0 0 0 5.144 5.177C17.807 56.495 36 56.495 36 56.495s18.193 0 22.73-1.223a7.31 7.31 0 0 0 5.144-5.177C65.09 45.528 65.09 36 65.09 36s0-9.528-1.216-14.094"
        }), h.jsx("path", {
            fill: "#fff",
            d: "M30.05 44.65L45.256 36L30.05 27.35Z"
        }), h.jsxs("g", {
            fill: "none",
            stroke: "#000",
            strokeMiterlimit: "10",
            strokeWidth: "2",
            children: [h.jsx("path", {
                d: "M63.874 21.906a7.31 7.31 0 0 0-5.144-5.177C54.193 15.505 36 15.505 36 15.505s-18.193 0-22.73 1.224a7.31 7.31 0 0 0-5.144 5.177C6.91 26.472 6.91 36 6.91 36s0 9.528 1.216 14.095a7.31 7.31 0 0 0 5.144 5.177C17.807 56.495 36 56.495 36 56.495s18.193 0 22.73-1.223a7.31 7.31 0 0 0 5.144-5.177C65.09 45.528 65.09 36 65.09 36s0-9.528-1.216-14.094"
            }), h.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M30.05 44.65L45.256 36L30.05 27.35Z"
            })]
        })]
    })
}
function D0() {
    return h.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: "1em",
        height: "1em",
        children: h.jsx("path", {
            fill: "currentColor",
            d: "M14 8h-2.5L8 11.5L4.5 8H2l-2 4v1h16v-1zM0 14h16v1H0zm9-9V1H7v4H3.5L8 9.5L12.5 5z"
        })
    })
}
function _0() {
    return h.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "1em",
        height: "1em",
        children: h.jsx("path", {
            fill: "currentColor",
            d: "M2 8v9h4v4h12v-4h4V8zm14 11H8v-5h8zm3-7c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m-1-9H6v4h12z"
        })
    })
}
function WT() {
    return h.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        children: h.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M12 20a7.97 7.97 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.97 7.97 0 0 1 12 20M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12m10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7",
            clipRule: "evenodd"
        })
    })
}
function kg() {
    return h.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 576",
        width: "1em",
        height: "1em",
        children: h.jsx("path", {
            fill: "currentColor",
            d: "m402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0m162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2M384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5"
        })
    })
}
function M0() {
    return h.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "3em",
        height: "3em",
        children: [h.jsx("path", {
            fill: "currentColor",
            d: "M20.48 3.512a11.97 11.97 0 0 0-8.486-3.514C5.366-.002-.007 5.371-.007 11.999c0 3.314 1.344 6.315 3.516 8.487A11.97 11.97 0 0 0 11.995 24c6.628 0 12.001-5.373 12.001-12.001c0-3.314-1.344-6.315-3.516-8.487m-1.542 15.427a9.8 9.8 0 0 1-6.943 2.876c-5.423 0-9.819-4.396-9.819-9.819a9.8 9.8 0 0 1 2.876-6.943a9.8 9.8 0 0 1 6.942-2.876c5.422 0 9.818 4.396 9.818 9.818a9.8 9.8 0 0 1-2.876 6.942z"
        }), h.jsx("path", {
            fill: "currentColor",
            d: "m13.537 12l3.855-3.855a1.091 1.091 0 0 0-1.542-1.541l.001-.001l-3.855 3.855l-3.855-3.855A1.091 1.091 0 0 0 6.6 8.145l-.001-.001l3.855 3.855l-3.855 3.855a1.091 1.091 0 1 0 1.541 1.542l.001-.001l3.855-3.855l3.855 3.855a1.091 1.091 0 1 0 1.542-1.541l-.001-.001z"
        })]
    })
}
const O0 = S.createContext({
    language: "en",
    setLanguage: () => {}
    ,
    translations: {}
})
  , ej = ({children: n}) => {
    const [l,i] = S.useState( () => localStorage.getItem("language") || "en")
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
    h.jsx(O0.Provider, {
        value: {
            language: l,
            setLanguage: i,
            translations: o
        },
        children: n
    })
}
  , st = () => S.useContext(O0)
  , tj = () => {
    var f, d;
    const {language: n, setLanguage: l, translations: i} = st()
      , [o,c] = S.useState([]);
    return S.useEffect( () => {
        const g = localStorage.getItem("initialData");
        if (g)
            try {
                const p = JSON.parse(g);
                c(p == null ? void 0 : p.notice)
            } catch (p) {
                console.error("Failed to parse initialData:", p)
            }
    }
    , []),
    h.jsxs("div", {
        className: "w-full bg-gray-800 text-white py-6 px-2 md:px-4 pb-12 flex flex-col h-full",
        children: [h.jsxs("div", {
            className: "mb-8",
            children: [h.jsx("h2", {
                className: "text-yellow-400 text-xl text-center font-bold mb-4 ",
                children: (f = i == null ? void 0 : i.lblInsTitle) == null ? void 0 : f[n]
            }), h.jsxs("a", {
                href: "https://www.youtube.com/watch?v=wsCPTU3giPo",
                target: "_blank",
                className: "flex hover-scale justify-center items-center gap-1 text-white text-xs mb-6 cursor-pointer hover:font-bold",
                children: [h.jsx($T, {}), " ", (d = i == null ? void 0 : i.video_guide) == null ? void 0 : d[n]]
            }), h.jsxs("div", {
                className: "flex gap-2 justify-center items-center px-4 py-2",
                children: [h.jsx("button", {
                    onClick: () => l("en"),
                    className: `font-xs text-xs transition hover:cursor-pointer ${n === "en" ? "text-white bg-gray-400 px-2 py-2 rounded-md" : "text-gray-400 p-2 rounded-md hover:bg-gray-500"}`,
                    children: "English"
                }), h.jsx("button", {
                    onClick: () => l("bn"),
                    className: `font-medium text-xs transition hover:cursor-pointer ${n === "bn" ? "text-white bg-gray-400 px-2 py-2 rounded-md" : "text-gray-400 p-2 rounded-md hover:bg-gray-500"}`,
                    children: "বাংলা"
                })]
            })]
        }), h.jsx(re.div, {
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
            children: h.jsx("div", {
                className: "space-y-2",
                children: o.map( (g, p) => h.jsxs("div", {
                    className: g.is_warning === 1 ? "text-red-400 text-justify border-[0.2px] p-2 rounded bg-red-500/5 capitalize" : g.is_warning === 2 ? "text-yellow-400 text-justify border-[0.2px] p-2 rounded bg-yellow-500/5 capitalize" : "text-white text-justify capitalize",
                    children: ["* ", g[n]]
                }, p))
            })
        })]
    })
}
  , aj = "https://api-payment.ivacbd.com";
async function Pe(n, l={}) {
    var i;
    try {
        const {method: o="GET", headers: c={}, body: f, token: d} = l
          , g = typeof FormData < "u" && f instanceof FormData
          , p = {
            ...g ? {} : {
                "Content-Type": "application/json"
            },
            ...c
        };
        d && (p.Authorization = `Bearer ${d}`);
        const m = `${aj}${n}`
          , y = await fetch(m, {
            method: o,
            headers: p,
            body: g ? f : f ? JSON.stringify(f) : void 0
        })
          , x = (i = y.headers.get("content-type")) == null ? void 0 : i.includes("application/json");
        if (!y.ok) {
            const T = x ? await y.json() : await y.text();
            throw {
                status: y.status,
                message: (T == null ? void 0 : T.message) || T || "Unknown error"
            }
        }
        return x ? y.json() : {}
    } catch (o) {
        if ((o == null ? void 0 : o.status) === 401)
            localStorage.clear(),
            window.location.href = "/";
        else
            throw o
    }
}
function nj() {
    var i, o, c, f;
    const {language: n, translations: l} = st();
    return h.jsxs("div", {
        className: "relative w-full md:h-10 overflow-hidden shadow-md",
        children: [h.jsx("div", {
            className: "absolute inset-0 bg-yellow-50 transform -skew-x-12 origin-top-left scale-x-150 -translate-x-8"
        }), h.jsxs("div", {
            className: "relative z-10 flex md:items-center md:justify-between justify-start h-full md:pr-6 md:flex-row flex-col ",
            children: [h.jsx("div", {
                className: "flex-1 max-w-md",
                children: h.jsx("div", {
                    className: "trapezoid",
                    children: h.jsx("h1", {
                        className: "trapezoid-text text-white",
                        children: "INDIAN VISA APPLICATION FEE"
                    })
                })
            }), h.jsx("div", {
                className: "flex-1 flex md:justify-end",
                children: h.jsx("div", {
                    className: "px-4 py-2 rounded-sm",
                    children: h.jsxs("p", {
                        className: "text-black text-sm font-medium",
                        children: [(i = l == null ? void 0 : l.lblProceed) == null ? void 0 : i[n], " ", h.jsx("a", {
                            href: "https://api-payment.ivacbd.com/contents/user_manual.html",
                            target: "_blank",
                            className: "text-blue-600 hover:text-blue-800 font-semibold",
                            children: (o = l == null ? void 0 : l.user_manual) == null ? void 0 : o[n]
                        }), " ", (c = l == null ? void 0 : l.and) == null ? void 0 : c[n], " ", " ", h.jsx("a", {
                            href: "https://api-payment.ivacbd.com/contents/faq.html",
                            target: "_blank",
                            className: "text-blue-600 hover:text-blue-800 font-semibold",
                            children: (f = l == null ? void 0 : l.faq) == null ? void 0 : f[n]
                        })]
                    })
                })
            })]
        }), h.jsx("div", {
            className: "absolute top-0 right-0 w-2/3 h-full bg-yellow-50 -z-10"
        })]
    })
}
const lj = ({message: n, type: l="info", onClose: i}) => {
    const [o,c] = S.useState(!0)
      , [f,d] = S.useState(!1)
      , [g,p] = S.useState(5)
      , m = () => {
        c(!1),
        i && i()
    }
    ;
    if (S.useEffect( () => {
        let x;
        return g > 0 ? x = setTimeout( () => {
            p(T => T - 1)
        }
        , 1e3) : d(!0),
        () => {
            x && clearTimeout(x)
        }
    }
    , [g]),
    !o)
        return null;
    const y = {
        success: "bg-green-500 text-white",
        error: "bg-red-500 text-white",
        info: "bg-blue-500 text-white",
        warning: "bg-yellow-400 text-black"
    };
    return h.jsx(Yy, {
        children: o && h.jsx(re.div, {
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
            children: h.jsxs("div", {
                className: `flex justify-center flex-col h-1/2 rounded-xl shadow-2xl p-6 max-w-md w-full mx-4 text-center ${y[l]}`,
                children: [h.jsxs("div", {
                    className: "flex flex-col justify-center items-center mb-4",
                    children: [h.jsx(M0, {}), h.jsx("p", {
                        className: "text-white font-bold text-2xl py-4",
                        children: "Error!"
                    })]
                }), h.jsx("span", {
                    className: "block mb-4",
                    children: n
                }), f ? h.jsx("button", {
                    onClick: m,
                    className: "mt-2 w-24 py-2 rounded bg-gray-500 text-white hover:bg-gray-600 mx-auto",
                    children: "OK"
                }) : h.jsxs("p", {
                    className: "text-sm text-white",
                    children: ["Please wait ", g, " seconds..."]
                })]
            })
        })
    })
}
  , Rt = ({message: n, type: l="info", onClose: i}) => {
    const [o,c] = S.useState(!0)
      , f = () => {
        c(!1),
        i && i()
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
    return h.jsx(Yy, {
        children: o && h.jsx(re.div, {
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
            children: h.jsxs("div", {
                className: `flex justify-center flex-col h-1/2 rounded-xl shadow-2xl p-6 max-w-md w-full mx-4 text-center ${d[l]}`,
                children: [h.jsxs("div", {
                    className: "flex flex-col justify-center items-center mb-4",
                    children: [h.jsx(M0, {}), h.jsx("p", {
                        className: "text-white font-bold text-2xl py-4",
                        children: "Error!"
                    })]
                }), h.jsx("span", {
                    className: "block mb-4",
                    children: n
                }), h.jsx("button", {
                    onClick: f,
                    className: "mt-2 w-24 py-2 rounded bg-gray-500 text-white hover:bg-gray-600 mx-auto",
                    children: "OK"
                })]
            })
        })
    })
}
  , ij = "/assets/sib_logo-BmWytU9-.png"
  , sj = "/assets/sslwireless_logo-D0EMAZ9R.svg"
  , R0 = "/assets/page_bg-BE0EAheg.jpg"
  , oj = "/assets/SSLCommerzLogo-DJTqXlmx.svg"
  , rj = ({message: n}) => h.jsx("div", {
    className: "fixed h-screen bg-cover bg-center inset-0 z-50 flex items-center justify-center ",
    style: {
        backgroundImage: `url(${R0})`
    },
    children: h.jsxs("div", {
        className: "flex flex-col items-center space-y-4",
        children: [h.jsx("div", {
            className: "w-12 h-12 border-4 border-red-500 border-dashed rounded-full animate-spin"
        }), h.jsx("div", {
            className: "text-red-700 text-lg font-medium",
            children: n
        })]
    })
})
  , V0 = () => h.jsxs("div", {
    className: "fixed inset-0 z-50 flex flex-col items-center justify-center bg-transparent bg-opacity-40 backdrop-blur-sm",
    children: [h.jsx("div", {
        className: "animate-spin rounded-full h-16 w-16 border-t-4 border-blue-400 border-opacity-60"
    }), h.jsx("div", {
        className: "text-green-700 text-lg my-4 font-medium",
        children: "Checking..."
    })]
});
var ha = {}, Hg;
function uj() {
    if (Hg)
        return ha;
    Hg = 1;
    var n = ha && ha.__createBinding || (Object.create ? function(T, w, N, D) {
        D === void 0 && (D = N);
        var _ = Object.getOwnPropertyDescriptor(w, N);
        (!_ || ("get"in _ ? !w.__esModule : _.writable || _.configurable)) && (_ = {
            enumerable: !0,
            get: function() {
                return w[N]
            }
        }),
        Object.defineProperty(T, D, _)
    }
    : function(T, w, N, D) {
        D === void 0 && (D = N),
        T[D] = w[N]
    }
    )
      , l = ha && ha.__setModuleDefault || (Object.create ? function(T, w) {
        Object.defineProperty(T, "default", {
            enumerable: !0,
            value: w
        })
    }
    : function(T, w) {
        T.default = w
    }
    )
      , i = ha && ha.__importStar || function(T) {
        if (T && T.__esModule)
            return T;
        var w = {};
        if (T != null)
            for (var N in T)
                N !== "default" && Object.prototype.hasOwnProperty.call(T, N) && n(w, T, N);
        return l(w, T),
        w
    }
    ;
    Object.defineProperty(ha, "__esModule", {
        value: !0
    }),
    ha.useTurnstile = void 0;
    const o = i($o())
      , c = typeof globalThis < "u" ? globalThis : window;
    let f = typeof c.turnstile < "u" ? "ready" : "unloaded", d, g;
    const p = new Promise( (T, w) => {
        g = {
            resolve: T,
            reject: w
        },
        f === "ready" && T(void 0)
    }
    );
    {
        const T = "cf__reactTurnstileOnLoad"
          , w = "https://challenges.cloudflare.com/turnstile/v0/api.js";
        d = () => {
            if (f === "unloaded") {
                f = "loading",
                c[T] = () => {
                    g.resolve(),
                    f = "ready",
                    delete c[T]
                }
                ;
                const N = `${w}?onload=${T}&render=explicit`
                  , D = document.createElement("script");
                D.src = N,
                D.async = !0,
                D.addEventListener("error", () => {
                    g.reject("Failed to load Turnstile."),
                    delete c[T]
                }
                ),
                document.head.appendChild(D)
            }
            return p
        }
    }
    function m({id: T, className: w, style: N, sitekey: D, action: _, cData: V, theme: k, language: B, tabIndex: K, responseField: R, responseFieldName: Z, size: I, fixedSize: Q, retry: ie, retryInterval: fe, refreshExpired: de, appearance: ce, execution: oe, userRef: ee, onVerify: P, onSuccess: E, onLoad: O, onError: q, onExpire: ae, onTimeout: j, onAfterInteractive: L, onBeforeInteractive: W, onUnsupported: te}) {
        const le = (0,
        o.useRef)(null)
          , G = (0,
        o.useState)({
            onVerify: P,
            onSuccess: E,
            onLoad: O,
            onError: q,
            onExpire: ae,
            onTimeout: j,
            onAfterInteractive: L,
            onBeforeInteractive: W,
            onUnsupported: te
        })[0]
          , F = ee ?? le
          , Se = Q ? {
            width: I === "compact" ? "130px" : I === "flexible" ? "100%" : "300px",
            height: I === "compact" ? "120px" : "65px",
            ...N
        } : N;
        return (0,
        o.useEffect)( () => {
            if (!F.current)
                return;
            let we = !1
              , Te = "";
            return (async () => {
                var Ve, Ue;
                if (f !== "ready")
                    try {
                        await d()
                    } catch (Ne) {
                        (Ve = G.onError) === null || Ve === void 0 || Ve.call(G, Ne);
                        return
                    }
                if (we || !F.current)
                    return;
                let Le;
                const jt = {
                    sitekey: D,
                    action: _,
                    cData: V,
                    theme: k,
                    language: B,
                    tabindex: K,
                    "response-field": R,
                    "response-field-name": Z,
                    size: I,
                    retry: ie,
                    "retry-interval": fe,
                    "refresh-expired": de,
                    appearance: ce,
                    execution: oe,
                    callback: (Ne, $e) => {
                        var ta, ot;
                        (ta = G.onVerify) === null || ta === void 0 || ta.call(G, Ne, Le),
                        (ot = G.onSuccess) === null || ot === void 0 || ot.call(G, Ne, $e, Le)
                    }
                    ,
                    "error-callback": Ne => {
                        var $e;
                        return ($e = G.onError) === null || $e === void 0 ? void 0 : $e.call(G, Ne, Le)
                    }
                    ,
                    "expired-callback": Ne => {
                        var $e;
                        return ($e = G.onExpire) === null || $e === void 0 ? void 0 : $e.call(G, Ne, Le)
                    }
                    ,
                    "timeout-callback": () => {
                        var Ne;
                        return (Ne = G.onTimeout) === null || Ne === void 0 ? void 0 : Ne.call(G, Le)
                    }
                    ,
                    "after-interactive-callback": () => {
                        var Ne;
                        return (Ne = G.onAfterInteractive) === null || Ne === void 0 ? void 0 : Ne.call(G, Le)
                    }
                    ,
                    "before-interactive-callback": () => {
                        var Ne;
                        return (Ne = G.onBeforeInteractive) === null || Ne === void 0 ? void 0 : Ne.call(G, Le)
                    }
                    ,
                    "unsupported-callback": () => {
                        var Ne;
                        return (Ne = G.onUnsupported) === null || Ne === void 0 ? void 0 : Ne.call(G, Le)
                    }
                };
                Te = window.turnstile.render(F.current, jt),
                Le = y(Te),
                (Ue = G.onLoad) === null || Ue === void 0 || Ue.call(G, Te, Le)
            }
            )(),
            () => {
                we = !0,
                Te && window.turnstile.remove(Te)
            }
        }
        , [D, _, V, k, B, K, R, Z, I, ie, fe, de, ce, oe]),
        (0,
        o.useEffect)( () => {
            G.onVerify = P,
            G.onSuccess = E,
            G.onLoad = O,
            G.onError = q,
            G.onExpire = ae,
            G.onTimeout = j,
            G.onAfterInteractive = L,
            G.onBeforeInteractive = W,
            G.onUnsupported = te
        }
        , [P, E, O, q, ae, j, L, W, te]),
        o.default.createElement("div", {
            ref: F,
            id: T,
            className: w,
            style: Se
        })
    }
    ha.default = m;
    function y(T) {
        return {
            execute: w => window.turnstile.execute(T, w),
            reset: () => window.turnstile.reset(T),
            getResponse: () => window.turnstile.getResponse(T),
            isExpired: () => window.turnstile.isExpired(T)
        }
    }
    function x() {
        const [T,w] = (0,
        o.useState)(f);
        return (0,
        o.useEffect)( () => {
            f !== "ready" && p.then( () => w(f))
        }
        , []),
        c.turnstile
    }
    return ha.useTurnstile = x,
    ha
}
var cj = uj();
const nr = Jg(cj)
  , fj = ({setStep: n}) => {
    var _, V, k, B, K;
    const {language: l, translations: i} = st()
      , [o,c] = S.useState("")
      , [f,d] = S.useState(!1)
      , [g,p] = S.useState(null)
      , m = "0x4AAAAAABpNUpzYeppBoYpe"
      , [y,x] = S.useState("");
    let T = o.trim() !== "" && o.length >= 11 && y !== "";
    const w = R => {
        const Z = R.target.value.replace(/\D/g, "");
        c(Z)
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
    }
      , D = async () => {
        var R;
        d(!0);
        try {
            T = !1;
            const Z = await Pe("/api/v2/mobile-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    mobile_no: o,
                    captcha_token: y
                }
            });
            Z.status_code === 200 ? (localStorage.setItem("user_phone", o),
            n((R = Z.data) != null && R.registered ? 3 : 2)) : p({
                message: Z == null ? void 0 : Z.message,
                type: "error"
            })
        } catch (Z) {
            const I = Z
              , Q = typeof I == "object" && (I != null && I.message) ? I.message : "Failed. Please try again later.";
            p({
                message: Q,
                type: "error"
            })
        } finally {
            T = !0,
            d(!1)
        }
    }
    ;
    return h.jsxs(re.div, {
        className: "bg-white w-full p-4",
        variants: N,
        initial: "hidden",
        animate: "visible",
        children: [g && h.jsx(Rt, {
            message: g.message,
            type: g.type,
            onClose: () => p(null)
        }), h.jsxs("p", {
            className: "text-xs",
            children: [(_ = i == null ? void 0 : i.lblInputLoginMobile) == null ? void 0 : _[l], " ", " ", h.jsx("span", {
                className: "text-red-600 text-[10px]",
                children: (V = i == null ? void 0 : i.lblInputLoginMobileMsg) == null ? void 0 : V[l]
            })]
        }), h.jsx("input", {
            type: "tel",
            id: "phone",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-sm focus:ring-0 focus:border-slate-400 duration-300 border-[1.5px] focus:outline-0 block w-full p-2.5 my-2",
            placeholder: (k = i == null ? void 0 : i.lblInputLoginMobile) == null ? void 0 : k[l],
            autoComplete: "off",
            onCopy: R => R.preventDefault(),
            onPaste: R => R.preventDefault(),
            onCut: R => R.preventDefault(),
            inputMode: "numeric",
            pattern: "[0-9]*",
            maxLength: 11,
            value: o,
            onChange: w
        }), h.jsx("div", {
            className: "sm:col-span-3",
            children: h.jsx(nr, {
                sitekey: m,
                onVerify: R => x(R)
            })
        }), h.jsx(re.button, {
            type: "button",
            disabled: f || !T,
            whileTap: {
                scale: .95
            },
            whileHover: {
                scale: !f && T ? 1.03 : 1
            },
            className: `text-white mb-2 h-8 rounded-lg  text-xs w-full duration-300 sm:w-auto px-2 py-2 text-center transition 
          ${f || !T ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer"}`,
            onClick: !f && T ? D : void 0,
            children: f ? ((B = i == null ? void 0 : i.checking) == null ? void 0 : B[l]) + "..." : (K = i == null ? void 0 : i.lblProceed) == null ? void 0 : K[l]
        })]
    })
}
  , dj = ({setStep: n}) => {
    var jt, Ne, $e, ta, ot, za, aa, wa, Xt, Ua, Aa, Ba, La, je, Je, wt, rt, on, rn, ka, Kt, se, me, We, Re, ut, xt;
    const {language: l, translations: i} = st()
      , [o,c] = S.useState(null)
      , [f,d] = S.useState(null)
      , [g,p] = S.useState("")
      , [m,y] = S.useState(null)
      , [x,T] = S.useState(null)
      , [w,N] = S.useState("")
      , [D,_] = S.useState("")
      , [V,k] = S.useState("")
      , [B,K] = S.useState("")
      , [R,Z] = S.useState(!1)
      , [I,Q] = S.useState("")
      , [ie,fe] = S.useState(!1)
      , [de,ce] = S.useState(!1)
      , [oe,ee] = S.useState(!1)
      , [P,E] = S.useState(!1)
      , [O,q] = S.useState(0)
      , [ae,j] = S.useState(!1);
    S.useEffect( () => {
        const ne = localStorage.getItem("user_phone");
        ne && p(ne)
    }
    , []);
    const L = S.useRef(null)
      , W = () => {
        var ne;
        (ne = L.current) == null || ne.click()
    }
      , te = ne => {
        var mt;
        const xe = (mt = ne.target.files) == null ? void 0 : mt[0];
        if (xe) {
            if (xe.size > 2 * 1024 * 1024) {
                c({
                    message: "File size must be less than 2MB",
                    type: "error"
                });
                return
            }
            if (!["image/jpeg", "image/jpg", "image/png"].includes(xe.type)) {
                c({
                    message: "Please select a JPG, PNG, or JPEG file",
                    type: "error"
                });
                return
            }
            y(xe),
            T(URL.createObjectURL(xe))
        }
    }
      , le = ne => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ne.trim())
      , G = m && g.length >= 11 && w.trim() !== "" && le(D) && V.trim() !== "" && B.trim() !== "" && V === B
      , F = async () => {
        try {
            E(!0);
            const ne = new FormData;
            ne.append("photo", m),
            ne.append("mobile_no", g),
            ne.append("full_name", w),
            ne.append("email", D),
            ne.append("password", V),
            ne.append("password_confirmation", B),
            ne.append("resend", "0");
            const xe = await Pe("/api/v2/registration", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: ne
            });
            xe.status_code === 200 ? n(6) : c({
                message: (xe == null ? void 0 : xe.message) || "Registration failed",
                type: "error"
            })
        } catch (ne) {
            const xe = ne
              , mt = typeof xe == "object" && (xe != null && xe.message) ? xe.message : "Failed. Please try again later."
              , kt = typeof xe == "object" && typeof xe.status == "number" ? xe.status : 422;
            (kt === 401 || kt === 419) && (c({
                message: mt,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            c({
                message: mt,
                type: "error"
            })
        } finally {
            E(!1)
        }
    }
      , Se = D.trim() !== "" && le(D)
      , we = async () => {
        try {
            ce(!0);
            const ne = await Pe("/api/v2/registration-email-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    email: D
                }
            });
            ne.status_code === 200 ? Z(!0) : c({
                message: ne == null ? void 0 : ne.message,
                type: "error"
            })
        } catch (ne) {
            const xe = ne
              , mt = typeof xe == "object" && (xe != null && xe.message) ? xe.message : "Failed. Please try again later."
              , kt = typeof xe == "object" && typeof xe.status == "number" ? xe.status : 422;
            kt === 401 || kt === 419 ? (d({
                message: mt,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)) : c({
                message: mt,
                type: "error"
            })
        } finally {
            ce(!1)
        }
    }
      , Te = I.trim() !== "" && I.length >= 6
      , Ve = async () => {
        try {
            ee(!0);
            const ne = await Pe("/api/v2/registration-email-otp-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    email: D,
                    otp: I
                }
            });
            ne.status_code === 200 ? fe(!0) : c({
                message: ne == null ? void 0 : ne.message,
                type: "error"
            })
        } catch (ne) {
            const xe = ne
              , mt = typeof xe == "object" && (xe != null && xe.message) ? xe.message : "Failed. Please try again later."
              , kt = typeof xe == "object" && typeof xe.status == "number" ? xe.status : 422;
            kt === 401 || kt === 419 ? (d({
                message: mt,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)) : c({
                message: mt,
                type: "error"
            })
        } finally {
            ee(!1)
        }
    }
    ;
    S.useEffect( () => {
        let ne = null;
        return ae && O > 0 ? ne = setInterval( () => {
            q(xe => xe - 1)
        }
        , 1e3) : O === 0 && j(!1),
        () => {
            ne && clearInterval(ne)
        }
    }
    , [O, ae]);
    const Ue = () => {
        we(),
        q(30),
        j(!0)
    }
      , Le = {
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
    return h.jsxs(re.div, {
        className: "bg-white w-full p-4",
        variants: Le,
        initial: "hidden",
        animate: "visible",
        children: [o && h.jsx(Rt, {
            message: o.message,
            type: o.type,
            onClose: () => c(null)
        }), f && h.jsx(lj, {
            message: f.message,
            type: f.type,
            onClose: () => c(null)
        }), h.jsxs("p", {
            className: "text-xs mb-2 uppercase",
            children: [(jt = i == null ? void 0 : i.lblInputRegPhotoUpload) == null ? void 0 : jt[l], " ", " ", h.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (Ne = i == null ? void 0 : i.lblInputRegPhotoSize) == null ? void 0 : Ne[l]]
            })]
        }), h.jsx("div", {
            className: "relative w-24 h-24 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors bg-white flex items-center justify-center overflow-hidden",
            onClick: W,
            children: m ? h.jsx("img", {
                src: x || "/placeholder.svg",
                alt: "Selected photo",
                className: "w-full h-full object-cover"
            }) : h.jsx("div", {
                className: "flex flex-col items-center justify-center text-gray-400",
                children: h.jsx("svg", {
                    className: "w-16 h-16 text-gray-300",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    children: h.jsx("path", {
                        d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                    })
                })
            })
        }), h.jsx("input", {
            ref: L,
            type: "file",
            accept: "image/jpeg,image/jpg,image/png",
            onChange: te,
            className: "hidden"
        }), h.jsxs("p", {
            className: "text-xs mt-4 uppercase",
            children: [($e = i == null ? void 0 : i.lblInputRegMobile) == null ? void 0 : $e[l], " ", " ", h.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (ta = i == null ? void 0 : i.lblNoCopyPaste) == null ? void 0 : ta[l]]
            })]
        }), h.jsx("input", {
            type: "tel",
            id: "phone",
            autoComplete: "off",
            onCopy: ne => ne.preventDefault(),
            onPaste: ne => ne.preventDefault(),
            onCut: ne => ne.preventDefault(),
            disabled: !0,
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-blue-400 focus:border-[0.1px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (ot = i == null ? void 0 : i.lblInputRegMobile) == null ? void 0 : ot[l],
            inputMode: "numeric",
            pattern: "[0-9]*",
            maxLength: 11,
            value: g,
            onChange: ne => p(ne.target.value)
        }), h.jsxs("p", {
            className: "text-xs mt-4 uppercase",
            children: [(za = i == null ? void 0 : i.lblInputRegName) == null ? void 0 : za[l], " ", " ", h.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (aa = i == null ? void 0 : i.lblNoCopyPaste) == null ? void 0 : aa[l]]
            })]
        }), h.jsx("input", {
            type: "text",
            id: "name",
            autoComplete: "off",
            onCopy: ne => ne.preventDefault(),
            onPaste: ne => ne.preventDefault(),
            onCut: ne => ne.preventDefault(),
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (wa = i == null ? void 0 : i.lblInputRegName) == null ? void 0 : wa[l],
            onChange: ne => N(ne.target.value),
            value: w
        }), h.jsxs("p", {
            className: "text-xs mt-4 uppercase",
            children: [(Xt = i == null ? void 0 : i.lblInputEmail) == null ? void 0 : Xt[l], "  ", " ", h.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (Ua = i == null ? void 0 : i.lblNoCopyPaste) == null ? void 0 : Ua[l]]
            })]
        }), h.jsx("input", {
            type: "email",
            id: "email",
            autoComplete: "off",
            onCopy: ne => ne.preventDefault(),
            onPaste: ne => ne.preventDefault(),
            onCut: ne => ne.preventDefault(),
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (Aa = i == null ? void 0 : i.lblInputEmail) == null ? void 0 : Aa[l],
            onChange: ne => _(ne.target.value),
            value: D
        }), ie && h.jsx("p", {
            className: "text-xs text-green-500 mt-1",
            children: (Ba = i == null ? void 0 : i.emailSuccessfullyVerified) == null ? void 0 : Ba[l]
        }), !R && h.jsx("button", {
            type: "button",
            onClick: Se && !de ? Ue : void 0,
            disabled: !Se || de,
            className: `text-xs font-medium rounded px-2 py-1.5 mr-2 mb-2 transition-colors duration-200
                  ${!Se || de ? "text-gray-400 bg-gray-300 cursor-not-allowed" : "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 cursor-pointer"}`,
            children: de ? (La = i == null ? void 0 : i.checking) == null ? void 0 : La[l] : (je = i == null ? void 0 : i.verify_email) == null ? void 0 : je[l]
        }), Se && R && !ie && h.jsx("button", {
            onClick: Ue,
            disabled: ae,
            className: `text-xs font-medium rounded px-2 py-1.5 mr-2 mb-2 transition-colors duration-200
              ${ae ? "text-gray-400 bg-gray-300 cursor-not-allowed" : "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 cursor-pointer"}`,
            children: ae ? ((Je = i == null ? void 0 : i.resendOtp) == null ? void 0 : Je[l]) + ` ${O}s` : (wt = i == null ? void 0 : i.resendOtp) == null ? void 0 : wt[l]
        }), R && !ie && h.jsxs(h.Fragment, {
            children: [h.jsxs("p", {
                className: "text-xs text-blue-500 mt-4",
                children: [(rt = i == null ? void 0 : i.otp_message) == null ? void 0 : rt[l], "  ", " ", h.jsxs("span", {
                    className: "text-red-600 text-[10px]",
                    children: ["*", (on = i == null ? void 0 : i.lblNoCopyPaste) == null ? void 0 : on[l]]
                })]
            }), h.jsx("input", {
                type: "text",
                id: "otp",
                autoComplete: "off",
                onCopy: ne => ne.preventDefault(),
                onPaste: ne => ne.preventDefault(),
                onCut: ne => ne.preventDefault(),
                className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
                placeholder: "Enter OTP",
                maxLength: 6,
                onChange: ne => Q(ne.target.value),
                value: I
            }), h.jsx("button", {
                type: "button",
                onClick: Te && !oe ? Ve : void 0,
                disabled: !Te || oe,
                className: `text-xs font-medium rounded px-2 py-1.5 mr-2 mb-2 transition-colors duration-200
                  ${!Te || oe ? "text-gray-400 bg-gray-300 cursor-not-allowed" : "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 cursor-pointer"}`,
                children: oe ? (rn = i == null ? void 0 : i.checking) == null ? void 0 : rn[l] : (ka = i == null ? void 0 : i.verifyOtp) == null ? void 0 : ka[l]
            })]
        }), h.jsxs("p", {
            className: "text-xs mt-4",
            children: [(Kt = i == null ? void 0 : i.lblInputPassword) == null ? void 0 : Kt[l], "  ", " ", h.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (se = i == null ? void 0 : i.lblNoCopyPaste) == null ? void 0 : se[l]]
            })]
        }), h.jsx("input", {
            type: "password",
            id: "password",
            disabled: !ie,
            autoComplete: "off",
            onCopy: ne => ne.preventDefault(),
            onPaste: ne => ne.preventDefault(),
            onCut: ne => ne.preventDefault(),
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: "********",
            onChange: ne => k(ne.target.value),
            value: V
        }), V.length > 0 && V.length < 6 && h.jsx("p", {
            className: "text-red-500 text-[11px] mb-2",
            children: (me = i == null ? void 0 : i.passwordMinLengthMsg) == null ? void 0 : me[l]
        }), h.jsxs("p", {
            className: "text-xs mt-4",
            children: [(We = i == null ? void 0 : i.lblInputRePassword) == null ? void 0 : We[l], " ", " ", h.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (Re = i == null ? void 0 : i.lblNoCopyPaste) == null ? void 0 : Re[l]]
            })]
        }), h.jsx("input", {
            type: "password",
            id: "confirmPassword",
            autoComplete: "off",
            onCopy: ne => ne.preventDefault(),
            onPaste: ne => ne.preventDefault(),
            onCut: ne => ne.preventDefault(),
            disabled: !ie,
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: "********",
            onChange: ne => K(ne.target.value),
            value: B
        }), h.jsx(re.button, {
            type: "button",
            disabled: !G || P,
            whileTap: {
                scale: .95
            },
            className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
            ${!G || P ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838]"}
            `,
            onClick: !P && G ? F : void 0,
            children: P ? (ut = i == null ? void 0 : i.checking) == null ? void 0 : ut[l] : (xt = i == null ? void 0 : i.lblProceed) == null ? void 0 : xt[l]
        })]
    })
}
  , hj = ({setStep: n}) => {
    var w, N, D, _, V, k, B;
    const {language: l, translations: i} = st()
      , [o,c] = S.useState("")
      , [f,d] = S.useState(!1)
      , g = o.trim() !== "" && o.length >= 6
      , [p,m] = S.useState(null)
      , y = async () => {
        var K, R;
        d(!0);
        try {
            const Z = localStorage.getItem("user_phone")
              , I = await Pe("/api/v2/login", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    mobile_no: Z,
                    password: o
                }
            });
            I.status_code === 200 ? (localStorage.setItem("user_email", JSON.stringify((K = I == null ? void 0 : I.data) == null ? void 0 : K.email)),
            localStorage.setItem("user_pwd", o),
            n((R = I.data) != null && R.email_confirmed ? 100 : 4)) : m({
                message: I == null ? void 0 : I.message,
                type: "error"
            })
        } catch (Z) {
            const I = Z
              , Q = typeof I == "object" && (I != null && I.message) ? I.message : "Failed. Please try again later."
              , ie = typeof I == "object" && typeof I.status == "number" ? I.status : 422;
            (ie === 401 || ie === 419) && (m({
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
        } finally {
            d(!1)
        }
    }
      , x = async () => {
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
    return h.jsxs(re.div, {
        className: "bg-white w-full p-4",
        variants: T,
        initial: "hidden",
        animate: "visible",
        children: [p && h.jsx(Rt, {
            message: p.message,
            type: p.type,
            onClose: () => m(null)
        }), h.jsxs("p", {
            className: "text-xs mt-4",
            children: [(w = i == null ? void 0 : i.lblInputPassword) == null ? void 0 : w[l], " ", " ", h.jsx("span", {
                className: "text-red-600 text-[10px]",
                children: (N = i == null ? void 0 : i.lblNoCopyPaste) == null ? void 0 : N[l]
            })]
        }), h.jsx("input", {
            type: "password",
            id: "password",
            autoComplete: "off",
            onCopy: K => K.preventDefault(),
            onPaste: K => K.preventDefault(),
            onCut: K => K.preventDefault(),
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-sm focus:ring-0 focus:border-slate-400 duration-300 border-[1.5px] focus:outline-0 block w-full p-2.5 my-2",
            placeholder: (D = i == null ? void 0 : i.lblInputPassword) == null ? void 0 : D[l],
            value: o,
            onChange: K => c(K.target.value)
        }), h.jsxs("div", {
            children: [h.jsx(re.button, {
                type: "button",
                whileTap: {
                    scale: .95
                },
                className: "text-white mb-2 mt-2 mr-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition bg-gray-400 hover:bg-[#218838] focus:ring-[#218838] cursor-pointer",
                onClick: () => n(1),
                children: (_ = i == null ? void 0 : i.back) == null ? void 0 : _[l]
            }), h.jsx(re.button, {
                type: "button",
                disabled: f || !g,
                whileTap: {
                    scale: .95
                },
                className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
         ${f || !g ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer"}`,
                onClick: !f && g ? y : void 0,
                children: f ? (V = i == null ? void 0 : i.checking) == null ? void 0 : V[l] : (k = i == null ? void 0 : i.lblProceed) == null ? void 0 : k[l]
            })]
        }), h.jsx("p", {
            className: "text-xs cursor-pointer text-blue-600 mt-2",
            onClick: x,
            children: ((B = i == null ? void 0 : i.lblInputForgotPassword) == null ? void 0 : B[l]) ?? "Forgot password ?"
        })]
    })
}
  , z0 = n => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.trim())
  , mj = ({setStep: n}) => {
    var T, w, N, D, _, V;
    const {language: l, translations: i} = st()
      , [o,c] = S.useState("")
      , [f,d] = S.useState("")
      , [g,p] = S.useState(null);
    S.useEffect( () => {
        const k = localStorage.getItem("user_email");
        if (k)
            try {
                const B = JSON.parse(k);
                d(B)
            } catch {
                d(k)
            }
    }
    , []);
    const m = o.trim() !== "" && z0(o)
      , y = {
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
            const k = await Pe("/api/v2/login-email-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    email: o
                }
            });
            k.status_code === 200 ? n(5) : p({
                message: k == null ? void 0 : k.message,
                type: "error"
            })
        } catch (k) {
            const B = k
              , K = typeof B == "object" && (B != null && B.message) ? B.message : "Failed. Please try again later."
              , R = typeof B == "object" && typeof B.status == "number" ? B.status : 422;
            (R === 401 || R === 419) && (p({
                message: K,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            p({
                message: K,
                type: "error"
            })
        }
    }
    ;
    return h.jsxs(re.div, {
        className: "bg-white w-full p-4",
        variants: y,
        initial: "hidden",
        animate: "visible",
        children: [g && h.jsx(Rt, {
            message: g.message,
            type: g.type,
            onClose: () => p(null)
        }), h.jsxs("p", {
            className: "text-xs",
            children: [(T = i == null ? void 0 : i.lblAuthFullEmail) == null ? void 0 : T[l], " (", f, ")"]
        }), h.jsx("p", {
            className: "text-xs my-1",
            children: (w = i == null ? void 0 : i.lblAuthFullEmail2) == null ? void 0 : w[l]
        }), h.jsxs("p", {
            className: "text-xs mt-4",
            children: [(N = i == null ? void 0 : i.lblInputRegEmail) == null ? void 0 : N[l], " ", " ", h.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (D = i == null ? void 0 : i.lblNoCopyPaste) == null ? void 0 : D[l]]
            })]
        }), h.jsx("input", {
            type: "email",
            id: "phone",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (_ = i == null ? void 0 : i.lblInputRegEmail) == null ? void 0 : _[l],
            value: o,
            onChange: k => c(k.target.value),
            autoComplete: "off",
            onCopy: k => k.preventDefault(),
            onPaste: k => k.preventDefault(),
            onCut: k => k.preventDefault()
        }), h.jsx(re.button, {
            type: "button",
            disabled: !m,
            whileTap: {
                scale: .95
            },
            whileHover: {
                scale: m ? 1.03 : 1
            },
            className: `text-white mb-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
        ${m ? "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838]" : "bg-gray-400 cursor-not-allowed"}`,
            onClick: m ? x : void 0,
            children: (V = i == null ? void 0 : i.lblProceed) == null ? void 0 : V[l]
        })]
    })
}
;
Ig();
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
function gs() {
    return gs = Object.assign ? Object.assign.bind() : function(n) {
        for (var l = 1; l < arguments.length; l++) {
            var i = arguments[l];
            for (var o in i)
                Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o])
        }
        return n
    }
    ,
    gs.apply(this, arguments)
}
var Rn;
(function(n) {
    n.Pop = "POP",
    n.Push = "PUSH",
    n.Replace = "REPLACE"
}
)(Rn || (Rn = {}));
const Pg = "popstate";
function pj(n) {
    n === void 0 && (n = {});
    function l(o, c) {
        let {pathname: f, search: d, hash: g} = o.location;
        return $c("", {
            pathname: f,
            search: d,
            hash: g
        }, c.state && c.state.usr || null, c.state && c.state.key || "default")
    }
    function i(o, c) {
        return typeof c == "string" ? c : B0(c)
    }
    return yj(l, i, null, n)
}
function vt(n, l) {
    if (n === !1 || n === null || typeof n > "u")
        throw new Error(l)
}
function U0(n, l) {
    if (!n) {
        typeof console < "u" && console.warn(l);
        try {
            throw new Error(l)
        } catch {}
    }
}
function gj() {
    return Math.random().toString(36).substr(2, 8)
}
function qg(n, l) {
    return {
        usr: n.state,
        key: n.key,
        idx: l
    }
}
function $c(n, l, i, o) {
    return i === void 0 && (i = null),
    gs({
        pathname: typeof n == "string" ? n : n.pathname,
        search: "",
        hash: ""
    }, typeof l == "string" ? ti(l) : l, {
        state: i,
        key: l && l.key || o || gj()
    })
}
function B0(n) {
    let {pathname: l="/", search: i="", hash: o=""} = n;
    return i && i !== "?" && (l += i.charAt(0) === "?" ? i : "?" + i),
    o && o !== "#" && (l += o.charAt(0) === "#" ? o : "#" + o),
    l
}
function ti(n) {
    let l = {};
    if (n) {
        let i = n.indexOf("#");
        i >= 0 && (l.hash = n.substr(i),
        n = n.substr(0, i));
        let o = n.indexOf("?");
        o >= 0 && (l.search = n.substr(o),
        n = n.substr(0, o)),
        n && (l.pathname = n)
    }
    return l
}
function yj(n, l, i, o) {
    o === void 0 && (o = {});
    let {window: c=document.defaultView, v5Compat: f=!1} = o
      , d = c.history
      , g = Rn.Pop
      , p = null
      , m = y();
    m == null && (m = 0,
    d.replaceState(gs({}, d.state, {
        idx: m
    }), ""));
    function y() {
        return (d.state || {
            idx: null
        }).idx
    }
    function x() {
        g = Rn.Pop;
        let _ = y()
          , V = _ == null ? null : _ - m;
        m = _,
        p && p({
            action: g,
            location: D.location,
            delta: V
        })
    }
    function T(_, V) {
        g = Rn.Push;
        let k = $c(D.location, _, V);
        m = y() + 1;
        let B = qg(k, m)
          , K = D.createHref(k);
        try {
            d.pushState(B, "", K)
        } catch (R) {
            if (R instanceof DOMException && R.name === "DataCloneError")
                throw R;
            c.location.assign(K)
        }
        f && p && p({
            action: g,
            location: D.location,
            delta: 1
        })
    }
    function w(_, V) {
        g = Rn.Replace;
        let k = $c(D.location, _, V);
        m = y();
        let B = qg(k, m)
          , K = D.createHref(k);
        d.replaceState(B, "", K),
        f && p && p({
            action: g,
            location: D.location,
            delta: 0
        })
    }
    function N(_) {
        let V = c.location.origin !== "null" ? c.location.origin : c.location.href
          , k = typeof _ == "string" ? _ : B0(_);
        return k = k.replace(/ $/, "%20"),
        vt(V, "No window.location.(origin|href) available to create URL for href: " + k),
        new URL(k,V)
    }
    let D = {
        get action() {
            return g
        },
        get location() {
            return n(c, d)
        },
        listen(_) {
            if (p)
                throw new Error("A history only accepts one active listener");
            return c.addEventListener(Pg, x),
            p = _,
            () => {
                c.removeEventListener(Pg, x),
                p = null
            }
        },
        createHref(_) {
            return l(c, _)
        },
        createURL: N,
        encodeLocation(_) {
            let V = N(_);
            return {
                pathname: V.pathname,
                search: V.search,
                hash: V.hash
            }
        },
        push: T,
        replace: w,
        go(_) {
            return d.go(_)
        }
    };
    return D
}
var Yg;
(function(n) {
    n.data = "data",
    n.deferred = "deferred",
    n.redirect = "redirect",
    n.error = "error"
}
)(Yg || (Yg = {}));
function vj(n, l, i) {
    return i === void 0 && (i = "/"),
    xj(n, l, i)
}
function xj(n, l, i, o) {
    let c = typeof l == "string" ? ti(l) : l
      , f = H0(c.pathname || "/", i);
    if (f == null)
        return null;
    let d = L0(n);
    bj(d);
    let g = null;
    for (let p = 0; g == null && p < d.length; ++p) {
        let m = Oj(f);
        g = Dj(d[p], m)
    }
    return g
}
function L0(n, l, i, o) {
    l === void 0 && (l = []),
    i === void 0 && (i = []),
    o === void 0 && (o = "");
    let c = (f, d, g) => {
        let p = {
            relativePath: g === void 0 ? f.path || "" : g,
            caseSensitive: f.caseSensitive === !0,
            childrenIndex: d,
            route: f
        };
        p.relativePath.startsWith("/") && (vt(p.relativePath.startsWith(o), 'Absolute route path "' + p.relativePath + '" nested under path ' + ('"' + o + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        p.relativePath = p.relativePath.slice(o.length));
        let m = sl([o, p.relativePath])
          , y = i.concat(p);
        f.children && f.children.length > 0 && (vt(f.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + m + '".')),
        L0(f.children, l, y, m)),
        !(f.path == null && !f.index) && l.push({
            path: m,
            score: Ej(m, f.index),
            routesMeta: y
        })
    }
    ;
    return n.forEach( (f, d) => {
        var g;
        if (f.path === "" || !((g = f.path) != null && g.includes("?")))
            c(f, d);
        else
            for (let p of k0(f.path))
                c(f, d, p)
    }
    ),
    l
}
function k0(n) {
    let l = n.split("/");
    if (l.length === 0)
        return [];
    let[i,...o] = l
      , c = i.endsWith("?")
      , f = i.replace(/\?$/, "");
    if (o.length === 0)
        return c ? [f, ""] : [f];
    let d = k0(o.join("/"))
      , g = [];
    return g.push(...d.map(p => p === "" ? f : [f, p].join("/"))),
    c && g.push(...d),
    g.map(p => n.startsWith("/") && p === "" ? "/" : p)
}
function bj(n) {
    n.sort( (l, i) => l.score !== i.score ? i.score - l.score : Cj(l.routesMeta.map(o => o.childrenIndex), i.routesMeta.map(o => o.childrenIndex)))
}
const Sj = /^:[\w-]+$/
  , Tj = 3
  , jj = 2
  , wj = 1
  , Aj = 10
  , Nj = -2
  , Gg = n => n === "*";
function Ej(n, l) {
    let i = n.split("/")
      , o = i.length;
    return i.some(Gg) && (o += Nj),
    l && (o += jj),
    i.filter(c => !Gg(c)).reduce( (c, f) => c + (Sj.test(f) ? Tj : f === "" ? wj : Aj), o)
}
function Cj(n, l) {
    return n.length === l.length && n.slice(0, -1).every( (o, c) => o === l[c]) ? n[n.length - 1] - l[l.length - 1] : 0
}
function Dj(n, l, i) {
    let {routesMeta: o} = n
      , c = {}
      , f = "/"
      , d = [];
    for (let g = 0; g < o.length; ++g) {
        let p = o[g]
          , m = g === o.length - 1
          , y = f === "/" ? l : l.slice(f.length) || "/"
          , x = _j({
            path: p.relativePath,
            caseSensitive: p.caseSensitive,
            end: m
        }, y)
          , T = p.route;
        if (!x)
            return null;
        Object.assign(c, x.params),
        d.push({
            params: c,
            pathname: sl([f, x.pathname]),
            pathnameBase: Uj(sl([f, x.pathnameBase])),
            route: T
        }),
        x.pathnameBase !== "/" && (f = sl([f, x.pathnameBase]))
    }
    return d
}
function _j(n, l) {
    typeof n == "string" && (n = {
        path: n,
        caseSensitive: !1,
        end: !0
    });
    let[i,o] = Mj(n.path, n.caseSensitive, n.end)
      , c = l.match(i);
    if (!c)
        return null;
    let f = c[0]
      , d = f.replace(/(.)\/+$/, "$1")
      , g = c.slice(1);
    return {
        params: o.reduce( (m, y, x) => {
            let {paramName: T, isOptional: w} = y;
            if (T === "*") {
                let D = g[x] || "";
                d = f.slice(0, f.length - D.length).replace(/(.)\/+$/, "$1")
            }
            const N = g[x];
            return w && !N ? m[T] = void 0 : m[T] = (N || "").replace(/%2F/g, "/"),
            m
        }
        , {}),
        pathname: f,
        pathnameBase: d,
        pattern: n
    }
}
function Mj(n, l, i) {
    l === void 0 && (l = !1),
    i === void 0 && (i = !0),
    U0(n === "*" || !n.endsWith("*") || n.endsWith("/*"), 'Route path "' + n + '" will be treated as if it were ' + ('"' + n.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + n.replace(/\*$/, "/*") + '".'));
    let o = []
      , c = "^" + n.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (d, g, p) => (o.push({
        paramName: g,
        isOptional: p != null
    }),
    p ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return n.endsWith("*") ? (o.push({
        paramName: "*"
    }),
    c += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : i ? c += "\\/*$" : n !== "" && n !== "/" && (c += "(?:(?=\\/|$))"),
    [new RegExp(c,l ? void 0 : "i"), o]
}
function Oj(n) {
    try {
        return n.split("/").map(l => decodeURIComponent(l).replace(/\//g, "%2F")).join("/")
    } catch (l) {
        return U0(!1, 'The URL path "' + n + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + l + ").")),
        n
    }
}
function H0(n, l) {
    if (l === "/")
        return n;
    if (!n.toLowerCase().startsWith(l.toLowerCase()))
        return null;
    let i = l.endsWith("/") ? l.length - 1 : l.length
      , o = n.charAt(i);
    return o && o !== "/" ? null : n.slice(i) || "/"
}
function Rj(n, l) {
    l === void 0 && (l = "/");
    let {pathname: i, search: o="", hash: c=""} = typeof n == "string" ? ti(n) : n;
    return {
        pathname: i ? i.startsWith("/") ? i : Vj(i, l) : l,
        search: Bj(o),
        hash: Lj(c)
    }
}
function Vj(n, l) {
    let i = l.replace(/\/+$/, "").split("/");
    return n.split("/").forEach(c => {
        c === ".." ? i.length > 1 && i.pop() : c !== "." && i.push(c)
    }
    ),
    i.length > 1 ? i.join("/") : "/"
}
function Mc(n, l, i, o) {
    return "Cannot include a '" + n + "' character in a manually specified " + ("`to." + l + "` field [" + JSON.stringify(o) + "].  Please separate it out to the ") + ("`to." + i + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function zj(n) {
    return n.filter( (l, i) => i === 0 || l.route.path && l.route.path.length > 0)
}
function P0(n, l) {
    let i = zj(n);
    return l ? i.map( (o, c) => c === i.length - 1 ? o.pathname : o.pathnameBase) : i.map(o => o.pathnameBase)
}
function q0(n, l, i, o) {
    o === void 0 && (o = !1);
    let c;
    typeof n == "string" ? c = ti(n) : (c = gs({}, n),
    vt(!c.pathname || !c.pathname.includes("?"), Mc("?", "pathname", "search", c)),
    vt(!c.pathname || !c.pathname.includes("#"), Mc("#", "pathname", "hash", c)),
    vt(!c.search || !c.search.includes("#"), Mc("#", "search", "hash", c)));
    let f = n === "" || c.pathname === "", d = f ? "/" : c.pathname, g;
    if (d == null)
        g = i;
    else {
        let x = l.length - 1;
        if (!o && d.startsWith("..")) {
            let T = d.split("/");
            for (; T[0] === ".."; )
                T.shift(),
                x -= 1;
            c.pathname = T.join("/")
        }
        g = x >= 0 ? l[x] : "/"
    }
    let p = Rj(c, g)
      , m = d && d !== "/" && d.endsWith("/")
      , y = (f || d === ".") && i.endsWith("/");
    return !p.pathname.endsWith("/") && (m || y) && (p.pathname += "/"),
    p
}
const sl = n => n.join("/").replace(/\/\/+/g, "/")
  , Uj = n => n.replace(/\/+$/, "").replace(/^\/*/, "/")
  , Bj = n => !n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n
  , Lj = n => !n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n;
function kj(n) {
    return n != null && typeof n.status == "number" && typeof n.statusText == "string" && typeof n.internal == "boolean" && "data"in n
}
const Y0 = ["post", "put", "patch", "delete"];
new Set(Y0);
const Hj = ["get", ...Y0];
new Set(Hj);
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
function ys() {
    return ys = Object.assign ? Object.assign.bind() : function(n) {
        for (var l = 1; l < arguments.length; l++) {
            var i = arguments[l];
            for (var o in i)
                Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o])
        }
        return n
    }
    ,
    ys.apply(this, arguments)
}
const Uf = S.createContext(null)
  , Pj = S.createContext(null)
  , Ts = S.createContext(null)
  , lr = S.createContext(null)
  , Bn = S.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , G0 = S.createContext(null);
function js() {
    return S.useContext(lr) != null
}
function ir() {
    return js() || vt(!1),
    S.useContext(lr).location
}
function X0(n) {
    S.useContext(Ts).static || S.useLayoutEffect(n)
}
function ya() {
    let {isDataRoute: n} = S.useContext(Bn);
    return n ? tw() : qj()
}
function qj() {
    js() || vt(!1);
    let n = S.useContext(Uf)
      , {basename: l, future: i, navigator: o} = S.useContext(Ts)
      , {matches: c} = S.useContext(Bn)
      , {pathname: f} = ir()
      , d = JSON.stringify(P0(c, i.v7_relativeSplatPath))
      , g = S.useRef(!1);
    return X0( () => {
        g.current = !0
    }
    ),
    S.useCallback(function(m, y) {
        if (y === void 0 && (y = {}),
        !g.current)
            return;
        if (typeof m == "number") {
            o.go(m);
            return
        }
        let x = q0(m, JSON.parse(d), f, y.relative === "path");
        n == null && l !== "/" && (x.pathname = x.pathname === "/" ? l : sl([l, x.pathname])),
        (y.replace ? o.replace : o.push)(x, y.state, y)
    }, [l, o, d, f, n])
}
function Yj() {
    let {matches: n} = S.useContext(Bn)
      , l = n[n.length - 1];
    return l ? l.params : {}
}
function Gj(n, l) {
    return Xj(n, l)
}
function Xj(n, l, i, o) {
    js() || vt(!1);
    let {navigator: c} = S.useContext(Ts)
      , {matches: f} = S.useContext(Bn)
      , d = f[f.length - 1]
      , g = d ? d.params : {};
    d && d.pathname;
    let p = d ? d.pathnameBase : "/";
    d && d.route;
    let m = ir(), y;
    if (l) {
        var x;
        let _ = typeof l == "string" ? ti(l) : l;
        p === "/" || (x = _.pathname) != null && x.startsWith(p) || vt(!1),
        y = _
    } else
        y = m;
    let T = y.pathname || "/"
      , w = T;
    if (p !== "/") {
        let _ = p.replace(/^\//, "").split("/");
        w = "/" + T.replace(/^\//, "").split("/").slice(_.length).join("/")
    }
    let N = vj(n, {
        pathname: w
    })
      , D = Jj(N && N.map(_ => Object.assign({}, _, {
        params: Object.assign({}, g, _.params),
        pathname: sl([p, c.encodeLocation ? c.encodeLocation(_.pathname).pathname : _.pathname]),
        pathnameBase: _.pathnameBase === "/" ? p : sl([p, c.encodeLocation ? c.encodeLocation(_.pathnameBase).pathname : _.pathnameBase])
    })), f, i, o);
    return l && D ? S.createElement(lr.Provider, {
        value: {
            location: ys({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, y),
            navigationType: Rn.Pop
        }
    }, D) : D
}
function Kj() {
    let n = ew()
      , l = kj(n) ? n.status + " " + n.statusText : n instanceof Error ? n.message : JSON.stringify(n)
      , i = n instanceof Error ? n.stack : null
      , c = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return S.createElement(S.Fragment, null, S.createElement("h2", null, "Unexpected Application Error!"), S.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, l), i ? S.createElement("pre", {
        style: c
    }, i) : null, null)
}
const Zj = S.createElement(Kj, null);
class Qj extends S.Component {
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
    static getDerivedStateFromProps(l, i) {
        return i.location !== l.location || i.revalidation !== "idle" && l.revalidation === "idle" ? {
            error: l.error,
            location: l.location,
            revalidation: l.revalidation
        } : {
            error: l.error !== void 0 ? l.error : i.error,
            location: i.location,
            revalidation: l.revalidation || i.revalidation
        }
    }
    componentDidCatch(l, i) {
        console.error("React Router caught the following error during render", l, i)
    }
    render() {
        return this.state.error !== void 0 ? S.createElement(Bn.Provider, {
            value: this.props.routeContext
        }, S.createElement(G0.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function Fj(n) {
    let {routeContext: l, match: i, children: o} = n
      , c = S.useContext(Uf);
    return c && c.static && c.staticContext && (i.route.errorElement || i.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = i.route.id),
    S.createElement(Bn.Provider, {
        value: l
    }, o)
}
function Jj(n, l, i, o) {
    var c;
    if (l === void 0 && (l = []),
    i === void 0 && (i = null),
    o === void 0 && (o = null),
    n == null) {
        var f;
        if (!i)
            return null;
        if (i.errors)
            n = i.matches;
        else if ((f = o) != null && f.v7_partialHydration && l.length === 0 && !i.initialized && i.matches.length > 0)
            n = i.matches;
        else
            return null
    }
    let d = n
      , g = (c = i) == null ? void 0 : c.errors;
    if (g != null) {
        let y = d.findIndex(x => x.route.id && (g == null ? void 0 : g[x.route.id]) !== void 0);
        y >= 0 || vt(!1),
        d = d.slice(0, Math.min(d.length, y + 1))
    }
    let p = !1
      , m = -1;
    if (i && o && o.v7_partialHydration)
        for (let y = 0; y < d.length; y++) {
            let x = d[y];
            if ((x.route.HydrateFallback || x.route.hydrateFallbackElement) && (m = y),
            x.route.id) {
                let {loaderData: T, errors: w} = i
                  , N = x.route.loader && T[x.route.id] === void 0 && (!w || w[x.route.id] === void 0);
                if (x.route.lazy || N) {
                    p = !0,
                    m >= 0 ? d = d.slice(0, m + 1) : d = [d[0]];
                    break
                }
            }
        }
    return d.reduceRight( (y, x, T) => {
        let w, N = !1, D = null, _ = null;
        i && (w = g && x.route.id ? g[x.route.id] : void 0,
        D = x.route.errorElement || Zj,
        p && (m < 0 && T === 0 ? (aw("route-fallback"),
        N = !0,
        _ = null) : m === T && (N = !0,
        _ = x.route.hydrateFallbackElement || null)));
        let V = l.concat(d.slice(0, T + 1))
          , k = () => {
            let B;
            return w ? B = D : N ? B = _ : x.route.Component ? B = S.createElement(x.route.Component, null) : x.route.element ? B = x.route.element : B = y,
            S.createElement(Fj, {
                match: x,
                routeContext: {
                    outlet: y,
                    matches: V,
                    isDataRoute: i != null
                },
                children: B
            })
        }
        ;
        return i && (x.route.ErrorBoundary || x.route.errorElement || T === 0) ? S.createElement(Qj, {
            location: i.location,
            revalidation: i.revalidation,
            component: D,
            error: w,
            children: k(),
            routeContext: {
                outlet: null,
                matches: V,
                isDataRoute: !0
            }
        }) : k()
    }
    , null)
}
var K0 = function(n) {
    return n.UseBlocker = "useBlocker",
    n.UseRevalidator = "useRevalidator",
    n.UseNavigateStable = "useNavigate",
    n
}(K0 || {})
  , Z0 = function(n) {
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
}(Z0 || {});
function Ij(n) {
    let l = S.useContext(Uf);
    return l || vt(!1),
    l
}
function $j(n) {
    let l = S.useContext(Pj);
    return l || vt(!1),
    l
}
function Wj(n) {
    let l = S.useContext(Bn);
    return l || vt(!1),
    l
}
function Q0(n) {
    let l = Wj()
      , i = l.matches[l.matches.length - 1];
    return i.route.id || vt(!1),
    i.route.id
}
function ew() {
    var n;
    let l = S.useContext(G0)
      , i = $j()
      , o = Q0();
    return l !== void 0 ? l : (n = i.errors) == null ? void 0 : n[o]
}
function tw() {
    let {router: n} = Ij(K0.UseNavigateStable)
      , l = Q0(Z0.UseNavigateStable)
      , i = S.useRef(!1);
    return X0( () => {
        i.current = !0
    }
    ),
    S.useCallback(function(c, f) {
        f === void 0 && (f = {}),
        i.current && (typeof c == "number" ? n.navigate(c) : n.navigate(c, ys({
            fromRouteId: l
        }, f)))
    }, [n, l])
}
const Xg = {};
function aw(n, l, i) {
    Xg[n] || (Xg[n] = !0)
}
function nw(n, l) {
    n == null || n.v7_startTransition,
    n == null || n.v7_relativeSplatPath
}
function F0(n) {
    let {to: l, replace: i, state: o, relative: c} = n;
    js() || vt(!1);
    let {future: f, static: d} = S.useContext(Ts)
      , {matches: g} = S.useContext(Bn)
      , {pathname: p} = ir()
      , m = ya()
      , y = q0(l, P0(g, f.v7_relativeSplatPath), p, c === "path")
      , x = JSON.stringify(y);
    return S.useEffect( () => m(JSON.parse(x), {
        replace: i,
        state: o,
        relative: c
    }), [m, x, c, i, o]),
    null
}
function ns(n) {
    vt(!1)
}
function lw(n) {
    let {basename: l="/", children: i=null, location: o, navigationType: c=Rn.Pop, navigator: f, static: d=!1, future: g} = n;
    js() && vt(!1);
    let p = l.replace(/^\/*/, "/")
      , m = S.useMemo( () => ({
        basename: p,
        navigator: f,
        static: d,
        future: ys({
            v7_relativeSplatPath: !1
        }, g)
    }), [p, g, f, d]);
    typeof o == "string" && (o = ti(o));
    let {pathname: y="/", search: x="", hash: T="", state: w=null, key: N="default"} = o
      , D = S.useMemo( () => {
        let _ = H0(y, p);
        return _ == null ? null : {
            location: {
                pathname: _,
                search: x,
                hash: T,
                state: w,
                key: N
            },
            navigationType: c
        }
    }
    , [p, y, x, T, w, N, c]);
    return D == null ? null : S.createElement(Ts.Provider, {
        value: m
    }, S.createElement(lr.Provider, {
        children: i,
        value: D
    }))
}
function iw(n) {
    let {children: l, location: i} = n;
    return Gj(Wc(l), i)
}
new Promise( () => {}
);
function Wc(n, l) {
    l === void 0 && (l = []);
    let i = [];
    return S.Children.forEach(n, (o, c) => {
        if (!S.isValidElement(o))
            return;
        let f = [...l, c];
        if (o.type === S.Fragment) {
            i.push.apply(i, Wc(o.props.children, f));
            return
        }
        o.type !== ns && vt(!1),
        !o.props.index || !o.props.children || vt(!1);
        let d = {
            id: o.props.id || f.join("-"),
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
        o.props.children && (d.children = Wc(o.props.children, f)),
        i.push(d)
    }
    ),
    i
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
const sw = "6";
try {
    window.__reactRouterVersion = sw
} catch {}
const ow = "startTransition"
  , Kg = rb[ow];
function rw(n) {
    let {basename: l, children: i, future: o, window: c} = n
      , f = S.useRef();
    f.current == null && (f.current = pj({
        window: c,
        v5Compat: !0
    }));
    let d = f.current
      , [g,p] = S.useState({
        action: d.action,
        location: d.location
    })
      , {v7_startTransition: m} = o || {}
      , y = S.useCallback(x => {
        m && Kg ? Kg( () => p(x)) : p(x)
    }
    , [p, m]);
    return S.useLayoutEffect( () => d.listen(y), [d, y]),
    S.useEffect( () => nw(o), [o]),
    S.createElement(lw, {
        basename: l,
        children: i,
        location: g.location,
        navigationType: g.action,
        navigator: d,
        future: o
    })
}
var Zg;
(function(n) {
    n.UseScrollRestoration = "useScrollRestoration",
    n.UseSubmit = "useSubmit",
    n.UseSubmitFetcher = "useSubmitFetcher",
    n.UseFetcher = "useFetcher",
    n.useViewTransitionState = "useViewTransitionState"
}
)(Zg || (Zg = {}));
var Qg;
(function(n) {
    n.UseFetcher = "useFetcher",
    n.UseFetchers = "useFetchers",
    n.UseScrollRestoration = "useScrollRestoration"
}
)(Qg || (Qg = {}));
const uw = ({setStep: n}) => {
    var Z, I, Q, ie, fe, de, ce, oe, ee;
    const {language: l, translations: i} = st()
      , o = ya()
      , [c,f] = S.useState(!1)
      , [d,g] = S.useState("")
      , [p,m] = S.useState("")
      , y = d.trim() !== "" && d.length >= 6
      , [x,T] = S.useState(null)
      , [w,N] = S.useState(30)
      , [D,_] = S.useState(!0)
      , [V,k] = S.useState(!1)
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
        P && m(P)
    }
    , []);
    const K = async () => {
        f(!0);
        try {
            const P = await Pe("/api/v2/login-email-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    email: p
                }
            });
            P.status_code === 200 ? n(5) : T({
                message: P == null ? void 0 : P.message,
                type: "error"
            })
        } catch (P) {
            const E = P
              , O = typeof E == "object" && (E != null && E.message) ? E.message : "Failed. Please try again later."
              , q = typeof E == "object" && typeof E.status == "number" ? E.status : 422;
            (q === 401 || q === 419) && (T({
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
        return D && w > 0 && (P = setInterval( () => {
            N(E => E - 1)
        }
        , 1e3)),
        w === 0 && D && (clearInterval(P),
        _(!1),
        k(!0)),
        () => clearInterval(P)
    }
    , [w, D]);
    const R = async () => {
        var P, E, O, q, ae;
        try {
            f(!0);
            const j = await Pe("/api/v2/login-email-otp-verify", {
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
            localStorage.setItem("auth_name", (E = j == null ? void 0 : j.data) == null ? void 0 : E.name),
            localStorage.setItem("auth_email", (O = j == null ? void 0 : j.data) == null ? void 0 : O.email),
            localStorage.setItem("auth_phone", (q = j == null ? void 0 : j.data) == null ? void 0 : q.mobile_no),
            localStorage.setItem("auth_photo", (ae = j == null ? void 0 : j.data) == null ? void 0 : ae.profile_image),
            localStorage.removeItem("user_pwd"),
            o("/application")) : T({
                message: j == null ? void 0 : j.message,
                type: "error"
            })
        } catch (j) {
            const L = j
              , W = typeof L == "object" && (L != null && L.message) ? L.message : "Failed. Please try again later."
              , te = typeof L == "object" && typeof L.status == "number" ? L.status : 422;
            (te === 401 || te === 419) && (T({
                message: W,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            T({
                message: W,
                type: "error"
            })
        } finally {
            f(!1)
        }
    }
    ;
    return h.jsxs(re.div, {
        className: "bg-white w-full p-4",
        variants: B,
        initial: "hidden",
        animate: "visible",
        children: [x && h.jsx(Rt, {
            message: x.message,
            type: x.type,
            onClose: () => T(null)
        }), h.jsxs("p", {
            className: "text-[10px]",
            children: [(Z = i == null ? void 0 : i.lblAuthOtp1) == null ? void 0 : Z[l], " (", p, ")"]
        }), h.jsx("p", {
            className: "text-[10px]",
            children: (I = i == null ? void 0 : i.lblAuthOtp2) == null ? void 0 : I[l]
        }), h.jsxs("p", {
            className: "text-xs mt-4",
            children: [(Q = i == null ? void 0 : i.lblInputAuthOtp) == null ? void 0 : Q[l], " ", " ", h.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: [" *", (ie = i == null ? void 0 : i.lblNoCopyPaste) == null ? void 0 : ie[l]]
            })]
        }), h.jsx("input", {
            type: "text",
            id: "otp",
            autoComplete: "off",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-sm focus:ring-0 focus:border-slate-400 duration-300 border-[1.5px] focus:outline-0 block w-full p-2.5 my-2",
            placeholder: (fe = i == null ? void 0 : i.lblInputOtp) == null ? void 0 : fe[l],
            inputMode: "numeric",
            value: d,
            maxLength: 6,
            onCopy: P => P.preventDefault(),
            onPaste: P => P.preventDefault(),
            onCut: P => P.preventDefault(),
            onChange: P => {
                const E = P.target.value.replace(/\D/g, "");
                g(E)
            }
        }), h.jsxs("div", {
            children: [h.jsx(re.button, {
                type: "button",
                disabled: c || !y,
                whileTap: {
                    scale: .95
                },
                className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
              ${c || !y ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838]"}`,
                onClick: !c && y ? R : void 0,
                children: c ? ((de = i == null ? void 0 : i.checking) == null ? void 0 : de[l]) + "..." : (ce = i == null ? void 0 : i.lblProceed) == null ? void 0 : ce[l]
            }), h.jsx(re.button, {
                onClick: K,
                disabled: !V,
                className: `text-white mb-2 mt-2 md:ml-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition ${V ? "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`,
                children: V ? (oe = i == null ? void 0 : i.resendOtp) == null ? void 0 : oe[l] : ((ee = i == null ? void 0 : i.resendOtp) == null ? void 0 : ee[l]) + ` ${w}s`
            })]
        })]
    })
}
  , cw = ({setStep: n}) => {
    var Z, I, Q, ie, fe, de, ce, oe, ee;
    const {language: l, translations: i} = st()
      , o = ya()
      , [c,f] = S.useState(!1)
      , [d,g] = S.useState("")
      , [p,m] = S.useState("")
      , y = d.trim() !== "" && d.length >= 6
      , [x,T] = S.useState(null)
      , [w,N] = S.useState(30)
      , [D,_] = S.useState(!0)
      , [V,k] = S.useState(!1)
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
        P && m(P)
    }
    , []);
    const K = async () => {
        f(!0);
        try {
            const P = await Pe("/api/v2/registration", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    resend: "1"
                }
            });
            P.status_code === 200 ? (N(30),
            _(!0),
            k(!1)) : (N(30),
            _(!0),
            k(!1),
            T({
                message: P == null ? void 0 : P.message,
                type: "error"
            }))
        } catch (P) {
            const E = P
              , O = typeof E == "object" && (E != null && E.message) ? E.message : "Failed. Please try again later."
              , q = typeof E == "object" && typeof E.status == "number" ? E.status : 422;
            (q === 401 || q === 419) && (T({
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
            f(!1)
        }
    }
    ;
    S.useEffect( () => {
        let P;
        return D && w > 0 && (P = setInterval( () => {
            N(E => E - 1)
        }
        , 1e3)),
        w === 0 && D && (clearInterval(P),
        _(!1),
        k(!0)),
        () => clearInterval(P)
    }
    , [w, D]);
    const R = async () => {
        var P, E, O, q, ae;
        f(!0);
        try {
            const j = await Pe("/api/v2/registration-otp", {
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
            localStorage.setItem("auth_name", (E = j == null ? void 0 : j.data) == null ? void 0 : E.name),
            localStorage.setItem("auth_email", (O = j == null ? void 0 : j.data) == null ? void 0 : O.email),
            localStorage.setItem("auth_phone", (q = j == null ? void 0 : j.data) == null ? void 0 : q.mobile_no),
            localStorage.setItem("auth_photo", (ae = j == null ? void 0 : j.data) == null ? void 0 : ae.profile_image),
            localStorage.removeItem("user_pwd"),
            o("/application")) : T({
                message: j == null ? void 0 : j.message,
                type: "error"
            })
        } catch (j) {
            const L = j
              , W = typeof L == "object" && (L != null && L.message) ? L.message : "Failed. Please try again later."
              , te = typeof L == "object" && typeof L.status == "number" ? L.status : 422;
            (te === 401 || te === 419) && (T({
                message: W,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            T({
                message: W,
                type: "error"
            })
        } finally {
            f(!1)
        }
    }
    ;
    return h.jsxs(re.div, {
        className: "bg-white w-full p-4",
        variants: B,
        initial: "hidden",
        animate: "visible",
        children: [x && h.jsx(Rt, {
            message: x.message,
            type: x.type,
            onClose: () => T(null)
        }), h.jsxs("p", {
            className: "text-[10px]",
            children: [(Z = i == null ? void 0 : i.lblAuthOtp1) == null ? void 0 : Z[l], " (", p, ")"]
        }), h.jsx("p", {
            className: "text-[10px]",
            children: (I = i == null ? void 0 : i.lblAuthOtp2) == null ? void 0 : I[l]
        }), h.jsxs("p", {
            className: "text-xs mt-4",
            children: [(Q = i == null ? void 0 : i.lblInputAuthOtp) == null ? void 0 : Q[l], " ", " ", h.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: [" *", (ie = i == null ? void 0 : i.lblNoCopyPaste) == null ? void 0 : ie[l]]
            })]
        }), h.jsx("input", {
            type: "text",
            id: "otp",
            autoComplete: "off",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-sm focus:ring-0 focus:border-slate-400 duration-300 border-[1.5px] focus:outline-0 block w-full p-2.5 my-2",
            placeholder: (fe = i == null ? void 0 : i.lblInputOtp) == null ? void 0 : fe[l],
            inputMode: "numeric",
            value: d,
            maxLength: 6,
            onCopy: P => P.preventDefault(),
            onPaste: P => P.preventDefault(),
            onCut: P => P.preventDefault(),
            onChange: P => {
                const E = P.target.value.replace(/\D/g, "");
                g(E)
            }
        }), h.jsx(re.button, {
            type: "button",
            disabled: c || !y,
            whileTap: {
                scale: .95
            },
            className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
              ${c || !y ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838]"}`,
            onClick: !c && y ? R : void 0,
            children: c ? (de = i == null ? void 0 : i.checking) == null ? void 0 : de[l] : (ce = i == null ? void 0 : i.lblProceed) == null ? void 0 : ce[l]
        }), h.jsx(re.button, {
            onClick: K,
            disabled: !V,
            className: `text-white mb-2 mt-2 md:ml-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition ${V ? "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`,
            children: V ? (oe = i == null ? void 0 : i.resendOtp) == null ? void 0 : oe[l] : ((ee = i == null ? void 0 : i.resendOtp) == null ? void 0 : ee[l]) + ` ${w}s`
        })]
    })
}
  , fw = ({setStep: n}) => {
    var w, N, D, _, V;
    const {language: l, translations: i} = st()
      , [o,c] = S.useState("");
    let f = o.trim() !== "" && o.length >= 11;
    const [d,g] = S.useState(!1)
      , [p,m] = S.useState(null)
      , y = k => {
        const B = k.target.value.replace(/\D/g, "");
        c(B)
    }
      , x = async () => {
        var k, B;
        g(!0);
        try {
            f = !1;
            const K = await Pe("/api/v2/change-password", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    mobile_no: o
                }
            });
            K.status_code === 200 ? (localStorage.setItem("user_phone", o),
            localStorage.setItem("user_email", (k = K.data) == null ? void 0 : k.email),
            n((B = K.data) != null && B.email_confirmed ? 9 : 8)) : m({
                message: K == null ? void 0 : K.message,
                type: "error"
            })
        } catch (K) {
            const R = K
              , Z = typeof R == "object" && (R != null && R.message) ? R.message : "Failed. Please try again later."
              , I = typeof R == "object" && typeof R.status == "number" ? R.status : 422;
            (I === 401 || I === 419) && (m({
                message: Z,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            m({
                message: Z,
                type: "error"
            })
        } finally {
            g(!1)
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
    return h.jsxs(re.div, {
        className: "bg-white w-full p-4",
        variants: T,
        initial: "hidden",
        animate: "visible",
        children: [p && h.jsx(Rt, {
            message: p.message,
            type: p.type,
            onClose: () => m(null)
        }), h.jsxs("p", {
            className: "text-xs mt-4",
            children: [(w = i == null ? void 0 : i.lblInputLoginMobilePassChange) == null ? void 0 : w[l], " ", " ", h.jsx("span", {
                className: "text-red-600 text-[10px]",
                children: (N = i == null ? void 0 : i.lblInputLoginMobileMsg) == null ? void 0 : N[l]
            })]
        }), h.jsx("input", {
            type: "tel",
            id: "phone",
            autoComplete: "off",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (D = i == null ? void 0 : i.lblInputLoginMobile) == null ? void 0 : D[l],
            inputMode: "numeric",
            pattern: "[0-9]*",
            maxLength: 11,
            value: o,
            onChange: y
        }), h.jsx(re.button, {
            type: "button",
            disabled: d || !f,
            whileTap: {
                scale: .95
            },
            whileHover: {
                scale: !d && f ? 1.03 : 1
            },
            className: `text-white mb-2 h-8 rounded-lg  text-xs w-full duration-300 sm:w-auto px-2 py-2 text-center transition 
          ${d || !f ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer"}`,
            onClick: !d && f ? x : void 0,
            children: d ? (_ = i == null ? void 0 : i.checking) == null ? void 0 : _[l] : (V = i == null ? void 0 : i.lblProceed) == null ? void 0 : V[l]
        })]
    })
}
  , dw = ({setStep: n}) => {
    var N, D, _, V, k, B, K;
    const {language: l, translations: i} = st()
      , [o,c] = S.useState("")
      , [f,d] = S.useState("")
      , [g,p] = S.useState(null)
      , [m,y] = S.useState(!1)
      , x = o.trim() !== "" && z0(o);
    S.useEffect( () => {
        const R = localStorage.getItem("user_email");
        if (R)
            try {
                const Z = JSON.parse(R);
                d(Z)
            } catch {
                d(R)
            }
    }
    , []);
    const T = async () => {
        try {
            y(!0);
            const R = await Pe("/api/v2/change-password-email-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    email: o
                }
            });
            R.status_code === 200 ? n(9) : p({
                message: R == null ? void 0 : R.message,
                type: "error"
            })
        } catch (R) {
            const Z = R
              , I = typeof Z == "object" && (Z != null && Z.message) ? Z.message : "Failed. Please try again later."
              , Q = typeof Z == "object" && typeof Z.status == "number" ? Z.status : 422;
            (Q === 401 || Q === 419) && (p({
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
            y(!1)
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
    return h.jsxs(re.div, {
        className: "bg-white w-full p-4",
        variants: w,
        initial: "hidden",
        animate: "visible",
        children: [g && h.jsx(Rt, {
            message: g.message,
            type: g.type,
            onClose: () => p(null)
        }), h.jsxs("p", {
            className: "text-xs",
            children: [(N = i == null ? void 0 : i.lblAuthFullEmail) == null ? void 0 : N[l], " (", f, ")"]
        }), h.jsx("p", {
            className: "text-xs my-1",
            children: (D = i == null ? void 0 : i.lblAuthFullEmail2) == null ? void 0 : D[l]
        }), h.jsxs("p", {
            className: "text-xs mt-4",
            children: [(_ = i == null ? void 0 : i.lblInputRegEmail) == null ? void 0 : _[l], " ", " ", h.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (V = i == null ? void 0 : i.lblNoCopyPaste) == null ? void 0 : V[l]]
            })]
        }), h.jsx("input", {
            type: "email",
            id: "phone",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (k = i == null ? void 0 : i.lblInputRegEmail) == null ? void 0 : k[l],
            value: o,
            onChange: R => c(R.target.value),
            autoComplete: "off",
            onCopy: R => R.preventDefault(),
            onPaste: R => R.preventDefault(),
            onCut: R => R.preventDefault()
        }), h.jsx(re.button, {
            type: "button",
            disabled: !x || m,
            whileTap: {
                scale: .95
            },
            whileHover: {
                scale: !m && x ? 1.03 : 1
            },
            className: `text-white mb-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
              ${!x || m ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838]"}`,
            onClick: !m && x ? T : void 0,
            children: m ? ((B = i == null ? void 0 : i.checking) == null ? void 0 : B[l]) + "..." : (K = i == null ? void 0 : i.lblProceed) == null ? void 0 : K[l]
        })]
    })
}
  , hw = ({setStep: n}) => {
    var R, Z, I, Q, ie, fe, de, ce, oe;
    const {language: l, translations: i} = st()
      , [o,c] = S.useState("")
      , [f,d] = S.useState(!1)
      , [g,p] = S.useState("")
      , [m,y] = S.useState(null)
      , [x,T] = S.useState(30)
      , [w,N] = S.useState(!0)
      , [D,_] = S.useState(!1)
      , V = o.trim() !== "" && o.length >= 6;
    S.useEffect( () => {
        const ee = localStorage.getItem("user_email");
        ee && p(ee)
    }
    , []);
    const k = async () => {
        var ee, P, E, O;
        d(!0);
        try {
            const q = localStorage.getItem("user_phone")
              , ae = localStorage.getItem("user_pwd")
              , j = await Pe("/api/v2/change-password-otp", {
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
            localStorage.setItem("auth_email", (P = j == null ? void 0 : j.data) == null ? void 0 : P.email),
            localStorage.setItem("auth_phone", (E = j == null ? void 0 : j.data) == null ? void 0 : E.mobile_no),
            localStorage.setItem("auth_photo", (O = j == null ? void 0 : j.data) == null ? void 0 : O.profile_image),
            n(10)) : y({
                message: j == null ? void 0 : j.message,
                type: "error"
            })
        } catch (q) {
            const ae = q
              , j = typeof ae == "object" && (ae != null && ae.message) ? ae.message : "Failed. Please try again later."
              , L = typeof ae == "object" && typeof ae.status == "number" ? ae.status : 422;
            (L === 401 || L === 419) && (y({
                message: j,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            y({
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
              , P = await Pe("/api/v2/change-password", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    mobile_no: ee
                }
            });
            P.status_code === 200 ? (T(30),
            N(!0),
            _(!1)) : (T(30),
            N(!0),
            _(!1),
            y({
                message: P == null ? void 0 : P.message,
                type: "error"
            }))
        } catch (ee) {
            const P = ee
              , E = typeof P == "object" && (P != null && P.message) ? P.message : "Failed. Please try again later."
              , O = typeof P == "object" && typeof P.status == "number" ? P.status : 422;
            (O === 401 || O === 419) && (y({
                message: E,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            y({
                message: E,
                type: "error"
            })
        } finally {
            d(!1)
        }
    }
    ;
    S.useEffect( () => {
        let ee;
        return w && x > 0 && (ee = setInterval( () => {
            T(P => P - 1)
        }
        , 1e3)),
        x === 0 && w && (clearInterval(ee),
        N(!1),
        _(!0)),
        () => clearInterval(ee)
    }
    , [x, w]);
    const K = {
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
    return h.jsxs(re.div, {
        className: "bg-white w-full p-4",
        variants: K,
        initial: "hidden",
        animate: "visible",
        children: [m && h.jsx(Rt, {
            message: m.message,
            type: m.type,
            onClose: () => y(null)
        }), h.jsxs("p", {
            className: "text-[10px]",
            children: [(R = i == null ? void 0 : i.lblAuthOtp1) == null ? void 0 : R[l], " ", " ", " (", g, ")"]
        }), h.jsx("p", {
            className: "text-[10px]",
            children: (Z = i == null ? void 0 : i.lblAuthOtp2) == null ? void 0 : Z[l]
        }), h.jsxs("p", {
            className: "text-xs mt-4",
            children: [(I = i == null ? void 0 : i.lblInputAuthOtp) == null ? void 0 : I[l], " ", " ", h.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: [" *", (Q = i == null ? void 0 : i.lblNoCopyPaste) == null ? void 0 : Q[l]]
            })]
        }), h.jsx("input", {
            type: "text",
            id: "otp",
            autoComplete: "off",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-blue-400 focus:border-[0.1px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (ie = i == null ? void 0 : i.lblInputOtp) == null ? void 0 : ie[l],
            inputMode: "numeric",
            value: o,
            maxLength: 6,
            onCopy: ee => ee.preventDefault(),
            onPaste: ee => ee.preventDefault(),
            onCut: ee => ee.preventDefault(),
            onChange: ee => {
                const P = ee.target.value.replace(/\D/g, "");
                c(P)
            }
        }), h.jsx(re.button, {
            type: "button",
            disabled: f || !V,
            whileTap: {
                scale: .95
            },
            className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
               ${f || !V ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer"}`,
            onClick: V ? k : void 0,
            children: f ? ((fe = i == null ? void 0 : i.checking) == null ? void 0 : fe[l]) + "..." : (de = i == null ? void 0 : i.lblProceed) == null ? void 0 : de[l]
        }), h.jsx(re.button, {
            onClick: B,
            disabled: !D,
            className: `text-white mb-2 mt-2 md:ml-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition ${D ? "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`,
            children: D ? (ce = i == null ? void 0 : i.resendOtp) == null ? void 0 : ce[l] : ((oe = i == null ? void 0 : i.resendOtp) == null ? void 0 : oe[l]) + ` ${x}s`
        })]
    })
}
  , mw = ({setStep: n}) => {
    var D, _, V, k, B, K, R, Z, I;
    const {language: l, translations: i} = st()
      , o = ya()
      , [c,f] = S.useState("")
      , [d,g] = S.useState(!1)
      , [p,m] = S.useState("")
      , [y,x] = S.useState(null)
      , T = c.trim() !== "" && c.length >= 6 && p.trim() !== "" && p.length >= 6
      , w = async () => {
        var Q, ie, fe, de, ce;
        try {
            if (g(!0),
            c !== p) {
                x({
                    message: "Password and confirm password do not match",
                    type: "error"
                });
                return
            }
            const oe = await Pe("/api/v2/change-password-confirm", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    password: c,
                    password_confirmation: p
                }
            });
            oe.status_code === 200 ? (localStorage.setItem("access_token", (Q = oe == null ? void 0 : oe.data) == null ? void 0 : Q.access_token),
            window.dispatchEvent(new Event("tokenUpdate")),
            localStorage.setItem("auth_name", (ie = oe == null ? void 0 : oe.data) == null ? void 0 : ie.name),
            localStorage.setItem("auth_email", (fe = oe == null ? void 0 : oe.data) == null ? void 0 : fe.email),
            localStorage.setItem("auth_phone", (de = oe == null ? void 0 : oe.data) == null ? void 0 : de.mobile_no),
            localStorage.setItem("auth_photo", (ce = oe == null ? void 0 : oe.data) == null ? void 0 : ce.profile_image),
            localStorage.removeItem("user_pwd"),
            o("/application")) : x({
                message: oe == null ? void 0 : oe.message,
                type: "error"
            })
        } catch (oe) {
            const ee = oe
              , P = typeof ee == "object" && (ee != null && ee.message) ? ee.message : "Failed. Please try again later."
              , E = typeof ee == "object" && typeof ee.status == "number" ? ee.status : 422;
            (E === 401 || E === 419) && (x({
                message: P,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            x({
                message: P,
                type: "error"
            })
        } finally {
            g(!1)
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
    return h.jsxs(re.div, {
        className: "bg-white w-full p-4",
        variants: N,
        initial: "hidden",
        animate: "visible",
        children: [y && h.jsx(Rt, {
            message: y.message,
            type: y.type,
            onClose: () => x(null)
        }), h.jsxs("p", {
            className: "text-xs mt-4",
            children: [(D = i == null ? void 0 : i.lblInputPassword) == null ? void 0 : D[l], " ", " ", h.jsx("span", {
                className: "text-red-600 text-[10px]",
                children: (_ = i == null ? void 0 : i.lblNoCopyPaste) == null ? void 0 : _[l]
            })]
        }), h.jsx("input", {
            type: "password",
            id: "password",
            autoComplete: "off",
            onCopy: Q => Q.preventDefault(),
            onPaste: Q => Q.preventDefault(),
            onCut: Q => Q.preventDefault(),
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-blue-400 focus:border-[0.1px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (V = i == null ? void 0 : i.lblInputPassword) == null ? void 0 : V[l],
            value: c,
            onChange: Q => f(Q.target.value)
        }), c.length > 0 && c.length < 6 && h.jsx("p", {
            className: "text-red-500 text-[11px] mb-2",
            children: (k = i == null ? void 0 : i.passwordMinLengthMsg) == null ? void 0 : k[l]
        }), h.jsxs("p", {
            className: "text-xs mt-4",
            children: [(B = i == null ? void 0 : i.lblInputRePassword) == null ? void 0 : B[l], " ", " ", h.jsx("span", {
                className: "text-red-600 text-[10px]",
                children: (K = i == null ? void 0 : i.lblNoCopyPaste) == null ? void 0 : K[l]
            })]
        }), h.jsx("input", {
            type: "password",
            id: "password_confirm",
            onCopy: Q => Q.preventDefault(),
            onPaste: Q => Q.preventDefault(),
            onCut: Q => Q.preventDefault(),
            autoComplete: "off",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-blue-400 focus:border-[0.1px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (R = i == null ? void 0 : i.lblInputRePassword) == null ? void 0 : R[l],
            value: p,
            onChange: Q => m(Q.target.value)
        }), h.jsx(re.button, {
            type: "button",
            disabled: !T,
            whileTap: {
                scale: .95
            },
            className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
         ${d || !T ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer"}`,
            onClick: !d && T ? w : void 0,
            children: d ? ((Z = i == null ? void 0 : i.checking) == null ? void 0 : Z[l]) + "..." : (I = i == null ? void 0 : i.lblProceed) == null ? void 0 : I[l]
        })]
    })
}
  , J0 = S.createContext(void 0)
  , pw = ({children: n}) => {
    const [l,i] = S.useState(null)
      , [o,c] = S.useState(!0)
      , [f,d] = S.useState(null)
      , g = "initialData"
      , p = N => {
        try {
            localStorage.setItem(g, JSON.stringify(N))
        } catch (D) {
            console.error("Failed to save to localStorage:", D)
        }
    }
      , m = () => {
        try {
            const N = localStorage.getItem(g);
            return N ? JSON.parse(N) : null
        } catch (N) {
            return console.error("Failed to read from localStorage:", N),
            null
        }
    }
      , y = async () => {
        try {
            const N = await fetch("/home.json");
            if (!N.ok)
                throw new Error(`Failed to fetch: ${N.status}`);
            return await N.json()
        } catch (N) {
            return console.error("Error fetching initial data:", N),
            null
        }
    }
      , x = async () => {
        try {
            c(!0);
            const N = await Pe("/api/v2/is-slot-available", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    language: localStorage.getItem("language") || "en",
                    Authorization: `Bearer ${localStorage.getItem("access_token") || ""}`
                }
            });
            N.status_code === 200 ? w(!0) : N.status_code === 401 ? (localStorage.clear(),
            window.location.href = "/") : w(!1)
        } catch (N) {
            N.status === 401 ? (localStorage.clear(),
            window.location.href = "/") : w(!1)
        } finally {
            c(!1)
        }
    }
      , T = async () => {
        c(!0),
        d(null);
        try {
            const N = await y();
            N || (localStorage.clear(),
            window.location.href = "/"),
            i(N),
            p(N)
        } catch (N) {
            localStorage.clear(),
            window.location.href = "/",
            d(N instanceof Error ? N.message : "Unknown error")
        } finally {
            c(!1)
        }
    }
      , w = N => {
        l ? (i(D => ({
            ...D,
            slot_available: N
        })),
        p({
            ...l,
            slot_available: N
        })) : y().then(D => {
            D && (i(_ => ({
                ..._,
                slot_available: N
            })),
            p({
                ...D,
                slot_available: N
            }))
        }
        )
    }
    ;
    return S.useEffect( () => {
        var D;
        const N = m();
        N && ((D = Object == null ? void 0 : Object.keys(N)) == null ? void 0 : D.length) > 2 ? (i(N),
        c(!1)) : T()
    }
    , []),
    S.useEffect( () => {
        localStorage.getItem("access_token") && x()
    }
    , [localStorage.getItem("access_token")]),
    h.jsx(J0.Provider, {
        value: {
            initialData: l,
            isLoading: o,
            error: f,
            refreshData: T,
            updateSlotAvailable: w
        },
        children: n
    })
}
  , Bf = () => {
    const n = S.useContext(J0);
    if (n === void 0)
        throw new Error("useInitialData must be used within an InitialDataProvider");
    return n
}
  , gw = ({setStep: n}) => {
    var I, Q, ie, fe, de, ce, oe, ee, P, E;
    const {updateSlotAvailable: l} = Bf()
      , {language: i, translations: o} = st()
      , c = ya()
      , [f,d] = S.useState("")
      , [g,p] = S.useState(!1)
      , [m,y] = S.useState("")
      , x = f.trim() !== "" && f.length >= 6
      , [T,w] = S.useState(null)
      , [N,D] = S.useState(30)
      , [_,V] = S.useState(!0)
      , [k,B] = S.useState(!1)
      , K = {
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
        const O = localStorage.getItem("user_email");
        O && y(O)
    }
    , []);
    const R = async () => {
        var O, q, ae, j, L, W;
        try {
            p(!0);
            const te = localStorage.getItem("user_phone")
              , le = localStorage.getItem("user_pwd")
              , G = await Pe("/api/v2/login-otp", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: i
                },
                body: {
                    mobile_no: te,
                    password: le,
                    otp: f
                }
            });
            G.status_code === 200 ? (localStorage.setItem("access_token", (O = G == null ? void 0 : G.data) == null ? void 0 : O.access_token),
            l((q = G.data) == null ? void 0 : q.slot_available),
            window.dispatchEvent(new Event("tokenUpdate")),
            localStorage.setItem("auth_name", (ae = G == null ? void 0 : G.data) == null ? void 0 : ae.name),
            localStorage.setItem("auth_email", (j = G == null ? void 0 : G.data) == null ? void 0 : j.email),
            localStorage.setItem("auth_phone", (L = G == null ? void 0 : G.data) == null ? void 0 : L.mobile_no),
            localStorage.setItem("auth_photo", (W = G == null ? void 0 : G.data) == null ? void 0 : W.profile_image),
            localStorage.removeItem("user_pwd"),
            c("/application")) : w({
                message: G == null ? void 0 : G.message,
                type: "error"
            })
        } catch (te) {
            const le = te
              , G = typeof le == "object" && (le != null && le.message) ? le.message : "Failed. Please try again later."
              , F = typeof le == "object" && typeof le.status == "number" ? le.status : 422;
            (F === 401 || F === 419) && (w({
                message: G,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            w({
                message: G,
                type: "error"
            })
        } finally {
            p(!1)
        }
    }
      , Z = async () => {
        p(!0);
        try {
            const O = localStorage.getItem("user_phone")
              , q = localStorage.getItem("user_pwd")
              , ae = await Pe("/api/v2/login", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: i
                },
                body: {
                    mobile_no: O,
                    password: q
                }
            });
            ae.status_code === 200 ? (D(30),
            V(!0),
            B(!1)) : (D(30),
            V(!0),
            B(!1),
            w({
                message: ae == null ? void 0 : ae.message,
                type: "error"
            }))
        } catch (O) {
            const q = O
              , ae = typeof q == "object" && (q != null && q.message) ? q.message : "Failed. Please try again later."
              , j = typeof q == "object" && typeof q.status == "number" ? q.status : 422;
            (j === 401 || j === 419) && (w({
                message: ae,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            w({
                message: ae,
                type: "error"
            })
        } finally {
            p(!1)
        }
    }
    ;
    return S.useEffect( () => {
        let O;
        return _ && N > 0 && (O = setInterval( () => {
            D(q => q - 1)
        }
        , 1e3)),
        N === 0 && _ && (clearInterval(O),
        V(!1),
        B(!0)),
        () => clearInterval(O)
    }
    , [N, _]),
    h.jsxs(re.div, {
        className: "bg-white w-full p-4",
        variants: K,
        initial: "hidden",
        animate: "visible",
        children: [T && h.jsx(Rt, {
            message: T.message,
            type: T.type,
            onClose: () => w(null)
        }), h.jsxs("p", {
            className: "text-[10px]",
            children: [(I = o == null ? void 0 : o.lblAuthOtp1) == null ? void 0 : I[i], " (", m, ")"]
        }), h.jsx("p", {
            className: "text-[10px]",
            children: (Q = o == null ? void 0 : o.lblAuthOtp2) == null ? void 0 : Q[i]
        }), h.jsxs("p", {
            className: "text-xs mt-4",
            children: [(ie = o == null ? void 0 : o.lblInputAuthOtp) == null ? void 0 : ie[i], " ", " ", h.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: [" *", (fe = o == null ? void 0 : o.lblNoCopyPaste) == null ? void 0 : fe[i]]
            })]
        }), h.jsx("input", {
            type: "text",
            id: "otp",
            autoComplete: "off",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-sm focus:ring-0 focus:border-slate-400 duration-300 border-[1.5px] focus:outline-0 block w-full p-2.5 my-2",
            placeholder: (de = o == null ? void 0 : o.lblInputOtp) == null ? void 0 : de[i],
            inputMode: "numeric",
            value: f,
            maxLength: 6,
            onCopy: O => O.preventDefault(),
            onPaste: O => O.preventDefault(),
            onCut: O => O.preventDefault(),
            onChange: O => {
                const q = O.target.value.replace(/\D/g, "");
                d(q)
            }
        }), h.jsxs("div", {
            children: [h.jsx(re.button, {
                type: "button",
                whileTap: {
                    scale: .95
                },
                className: "text-white mb-2 mt-2 mr-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition bg-gray-400 hover:bg-[#218838] focus:ring-[#218838] cursor-pointer",
                onClick: () => n(1),
                children: (ce = o == null ? void 0 : o.back) == null ? void 0 : ce[i]
            }), h.jsx(re.button, {
                type: "button",
                disabled: g || !x,
                whileTap: {
                    scale: .95
                },
                className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
               ${g || !x ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer"}`,
                onClick: x ? R : void 0,
                children: g ? ((oe = o == null ? void 0 : o.checking) == null ? void 0 : oe[i]) + "..." : (ee = o == null ? void 0 : o.lblProceed) == null ? void 0 : ee[i]
            }), h.jsx(re.button, {
                onClick: Z,
                disabled: !k,
                className: `text-white mb-2 mt-2 md:ml-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition ${k ? "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`,
                children: k ? (P = o == null ? void 0 : o.resendOtp) == null ? void 0 : P[i] : ((E = o == null ? void 0 : o.resendOtp) == null ? void 0 : E[i]) + ` ${N}s`
            })]
        })]
    })
}
  , pa = n => {
    localStorage.clear(),
    window.dispatchEvent(new Event("tokenUpdate")),
    n("/")
}
  , yw = ({setActiveStep: n}) => {
    var $e, ta, ot, za, aa, wa, Xt, Ua, Aa, Ba, La, je, Je, wt, rt, on, rn, ka, Kt;
    const {initialData: l, error: i, isLoading: o} = Bf()
      , {language: c, translations: f} = st()
      , d = ya()
      , [g,p] = S.useState(!1)
      , [m,y] = S.useState(null)
      , [x,T] = S.useState([])
      , [w,N] = S.useState("")
      , [D,_] = S.useState("")
      , [V,k] = S.useState("")
      , [B,K] = S.useState(!1)
      , [R,Z] = S.useState([])
      , [I,Q] = S.useState([])
      , [ie,fe] = S.useState("")
      , [de,ce] = S.useState("")
      , [oe,ee] = S.useState(0)
      , [P,E] = S.useState([])
      , [O,q] = S.useState("")
      , [ae,j] = S.useState("")
      , [L,W] = S.useState("")
      , [te,le] = S.useState(!1)
      , G = "0x4AAAAAABpNUpzYeppBoYpe"
      , [F,Se] = S.useState("")
      , [we,Te] = S.useState(!1);
    S.useEffect( () => {
        const se = localStorage.getItem("applicant");
        if (se)
            try {
                const me = JSON.parse(se);
                N(me.highcom || null),
                _(me.webfile_id || null),
                k(me.webfile_id_repeat || null),
                ee(me.visa_fee || null),
                j(me.family_count || null),
                W(me.visit_purpose || null),
                q(me.visa_type || null),
                fe(me.ivac_name || null),
                ce(me.ivac_id || null)
            } catch {
                console.error("Invalid JSON in localStorage")
            }
    }
    , []),
    S.useEffect( () => {
        l && !o && !i ? (Te(l == null ? void 0 : l.slot_available),
        T(l == null ? void 0 : l.centers),
        Z(l == null ? void 0 : l.ivacs),
        Q(l == null ? void 0 : l.ivacs),
        E(l == null ? void 0 : l.visa_types)) : i && y({
            message: i,
            type: "error"
        })
    }
    , [o, i, JSON.stringify(l)]);
    const Ve = async () => {
        try {
            le(!0);
            const se = localStorage.getItem("access_token")
              , me = await Pe("/api/v2/payment/check/" + D, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    language: c,
                    Authorization: `Bearer ${se}`
                }
            });
            me.status_code === 200 ? K(!0) : (K(!1),
            y({
                message: me == null ? void 0 : me.message,
                type: "error"
            }))
        } catch (se) {
            const me = se
              , We = typeof me == "object" && (me != null && me.message) ? me.message : "Failed to get payment data. Please try again later."
              , Re = typeof me == "object" && typeof me.status == "number" ? me.status : 422;
            (Re === 401 || Re === 419) && (y({
                message: "Unauthorized, session timed out",
                type: "error"
            }),
            setTimeout( () => {
                pa(d)
            }
            , 5e3)),
            y({
                message: We,
                type: "error"
            })
        } finally {
            le(!1)
        }
    }
    ;
    S.useEffect( () => {
        D.length === 12 && V.length === 12 && (D === V ? Ve() : y({
            message: "Web File ID does not match",
            type: "error"
        }))
    }
    , [D, V]);
    const Ue = se => {
        const me = se.target.value;
        N(me);
        const We = R.filter(ut => ut.center_info_id == me);
        Q(We),
        fe(""),
        ee(0);
        const Re = localStorage.getItem("applicant");
        if (Re) {
            const ut = JSON.parse(Re);
            "ivac_id"in ut && delete ut.ivac_id,
            "ivac_name"in ut && delete ut.ivac_name,
            localStorage.setItem("applicant", JSON.stringify(ut))
        }
    }
      , Le = async se => {
        var me;
        try {
            le(!0);
            const [We,Re] = se.target.value.split("|");
            fe(We),
            ce(Re);
            const ut = localStorage.getItem("access_token")
              , xt = await Pe("/api/v2/payment/notify-amount-change", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: c,
                    Authorization: `Bearer ${ut}`
                },
                body: {
                    api_key: We
                }
            });
            xt.status_code === 200 ? ee((me = xt == null ? void 0 : xt.data) == null ? void 0 : me.new_visa_fee) : y({
                message: (xt == null ? void 0 : xt.message) || "Failed to notify",
                type: "error"
            })
        } catch (We) {
            const Re = We
              , ut = typeof Re == "object" && (Re != null && Re.message) ? Re.message : "Failed to get payment data. Please try again later."
              , xt = typeof Re == "object" && typeof Re.status == "number" ? Re.status : 422;
            (xt === 401 || xt === 419) && (y({
                message: "Unauthorized, session timed out",
                type: "error"
            }),
            setTimeout( () => {
                pa(d)
            }
            , 5e3)),
            y({
                message: ut,
                type: "error"
            })
        } finally {
            le(!1)
        }
    }
      , jt = w.trim() !== "" && D.trim() !== "" && D.length >= 12 && V.trim() !== "" && V.length >= 12 && B && ie.trim() !== "" && oe !== 0 && O.trim() !== "" && ae.trim() !== "" && L.trim() !== "" && L.length >= 15 && F.trim() !== ""
      , Ne = async () => {
        try {
            const se = localStorage.getItem("access_token");
            p(!0);
            const We = localStorage.getItem("is_edit") === "true" ? "/api/v2/payment/application-info-edit" : "/api/v2/payment/application-info-submit-ivac"
              , Re = await Pe(We, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: c,
                    Authorization: `Bearer ${se}`
                },
                body: {
                    highcom: w,
                    webfile_id: D,
                    webfile_id_repeat: V,
                    ivac_id: de,
                    visa_type: O,
                    family_count: ae,
                    visit_purpose: L,
                    captcha_token: F
                }
            });
            if (Re.status_code === 200) {
                n(2);
                const ut = {
                    highcom: w,
                    webfile_id: D,
                    webfile_id_repeat: V,
                    ivac_id: de,
                    ivac_name: ie,
                    visa_fee: oe,
                    visa_type: O,
                    family_count: ae,
                    visit_purpose: L
                };
                localStorage.setItem("applicant", JSON.stringify(ut))
            } else
                y({
                    message: Re == null ? void 0 : Re.message,
                    type: "error"
                });
            p(!1)
        } catch (se) {
            p(!1);
            const me = se
              , We = typeof me == "object" && (me != null && me.message) ? me.message : "Failed to get payment data. Please try again later."
              , Re = typeof me == "object" && typeof me.status == "number" ? me.status : 422;
            (Re === 401 || Re === 419) && (y({
                message: "Unauthorized, session timed out",
                type: "error"
            }),
            setTimeout( () => {
                pa(d)
            }
            , 5e3)),
            y({
                message: We,
                type: "error"
            })
        }
    }
    ;
    return te ? h.jsx(V0, {}) : h.jsxs("div", {
        className: "grid grid-cols-1 gap-x-6 gap-y-2",
        children: [m && h.jsx(Rt, {
            message: m.message,
            type: m.type,
            onClose: () => y(null)
        }), we ? h.jsxs(h.Fragment, {
            children: [h.jsxs("div", {
                className: "sm:col-span-3",
                children: [h.jsx("label", {
                    htmlFor: "high-commission",
                    className: "block text-xs font-light text-black uppercase",
                    children: (ta = f == null ? void 0 : f.lblSelectHighCommission) == null ? void 0 : ta[c]
                }), h.jsx("div", {
                    className: "mt-2",
                    children: h.jsxs("select", {
                        id: "center",
                        name: "center",
                        value: w,
                        onChange: Ue,
                        className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 sm:text-sm/6",
                        children: [h.jsx("option", {
                            value: "",
                            disabled: !0,
                            hidden: !0,
                            className: "text-gray-500 font-light",
                            children: (ot = f == null ? void 0 : f.lblSelectHighCommission) == null ? void 0 : ot[c]
                        }), x.map(se => h.jsx("option", {
                            value: se.id,
                            className: "text-black font-light",
                            children: se == null ? void 0 : se.c_name
                        }, se.id))]
                    })
                })]
            }), h.jsxs("div", {
                className: "sm:col-span-3",
                children: [h.jsxs("label", {
                    htmlFor: "first-name",
                    className: "block text-xs font-light text-black uppercase",
                    children: [(za = f == null ? void 0 : f.lblInputWebFile) == null ? void 0 : za[c], " ", h.jsxs("span", {
                        className: "text-red-600 text-[10px]",
                        children: ["(", (aa = f == null ? void 0 : f.lblMustFace7) == null ? void 0 : aa[c], ")"]
                    })]
                }), h.jsx("div", {
                    className: "mt-2",
                    children: h.jsx("input", {
                        type: "text",
                        name: "webfile_id",
                        id: "webfile_id",
                        onCopy: se => se.preventDefault(),
                        onPaste: se => se.preventDefault(),
                        onCut: se => se.preventDefault(),
                        maxLength: 12,
                        autoComplete: "off",
                        value: D,
                        onChange: se => {
                            _(se.target.value),
                            K(!1)
                        }
                        ,
                        className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"
                    })
                })]
            }), h.jsxs("div", {
                className: "sm:col-span-3",
                children: [h.jsxs("label", {
                    htmlFor: "first-name",
                    className: "block text-xs font-light text-black uppercase",
                    children: [(wa = f == null ? void 0 : f.lblInputWebFileAgain) == null ? void 0 : wa[c], " ", " ", h.jsxs("span", {
                        className: "text-red-600 text-[10px]",
                        children: ["*(", (Xt = f == null ? void 0 : f.lblNoCopyPaste) == null ? void 0 : Xt[c], ")"]
                    })]
                }), h.jsx("div", {
                    className: "mt-2",
                    children: h.jsx("input", {
                        type: "text",
                        name: "first-name",
                        id: "first-name",
                        onCopy: se => se.preventDefault(),
                        onPaste: se => se.preventDefault(),
                        onCut: se => se.preventDefault(),
                        maxLength: 12,
                        autoComplete: "off",
                        value: V,
                        onChange: se => {
                            k(se.target.value),
                            K(!1)
                        }
                        ,
                        className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-1 sm:text-sm/6"
                    })
                })]
            }), h.jsxs("div", {
                className: "sm:col-span-3",
                onClick: () => {
                    B || y({
                        message: "Please enter a valid Web File ID before selecting a center.",
                        type: "error"
                    })
                }
                ,
                children: [h.jsx("label", {
                    htmlFor: "first-name",
                    className: "block text-xs font-light text-black uppercase",
                    children: (Ua = f == null ? void 0 : f.lblInputSelectIvac) == null ? void 0 : Ua[c]
                }), h.jsx("div", {
                    className: "mt-2",
                    children: h.jsxs("select", {
                        id: "center",
                        name: "center",
                        disabled: !B,
                        value: ie && de ? `${ie}|${de}` : "",
                        onChange: Le,
                        className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400  sm:text-sm/6",
                        children: [h.jsx("option", {
                            value: "",
                            disabled: !0,
                            hidden: !0,
                            children: (Aa = f == null ? void 0 : f.lblInputSelectIvac) == null ? void 0 : Aa[c]
                        }), I.map(se => h.jsx("option", {
                            value: `${se.app_key}|${se.id}`,
                            children: se.ivac_name
                        }, se.id))]
                    })
                })]
            }), h.jsxs("div", {
                className: "sm:col-span-3",
                children: [h.jsxs("label", {
                    htmlFor: "first-name",
                    className: "block text-xs font-light text-black uppercase",
                    children: [(Ba = f == null ? void 0 : f.lblInputVisaType) == null ? void 0 : Ba[c], " ", " ", h.jsxs("span", {
                        className: "text-red-600 text-[10px]",
                        children: ["*(", (La = f == null ? void 0 : f.lblVisaTypeQueue) == null ? void 0 : La[c], ")"]
                    })]
                }), h.jsx("div", {
                    className: "mt-2",
                    children: h.jsxs("select", {
                        id: "visa_type",
                        name: "visa_type",
                        disabled: !B,
                        value: O ?? "",
                        onChange: se => q(se.target.value),
                        className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6",
                        children: [h.jsx("option", {
                            value: "",
                            disabled: !0,
                            hidden: !0,
                            children: (je = f == null ? void 0 : f.lblInputVisaTypePlaceholder) == null ? void 0 : je[c]
                        }), P.map(se => h.jsx("option", {
                            value: se.id,
                            children: se.type_name
                        }, se.id))]
                    })
                })]
            }), h.jsxs("div", {
                className: "sm:col-span-3",
                children: [h.jsx("label", {
                    htmlFor: "first-name",
                    className: "block text-xs font-light text-black uppercase",
                    children: (Je = f == null ? void 0 : f.lblInputNumberOfFamily) == null ? void 0 : Je[c]
                }), h.jsx("div", {
                    className: "mt-2",
                    children: h.jsxs("select", {
                        id: "family_count",
                        name: "family_count",
                        disabled: !B,
                        value: ae ?? "",
                        onChange: se => j(se.target.value),
                        className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6",
                        children: [h.jsx("option", {
                            value: "",
                            disabled: !0,
                            hidden: !0,
                            children: (wt = f == null ? void 0 : f.lblInputNoOfAppPlaceholder) == null ? void 0 : wt[c]
                        }), h.jsx("option", {
                            value: "0",
                            children: "0"
                        }), h.jsx("option", {
                            value: "1",
                            children: "1"
                        }), h.jsx("option", {
                            value: "2",
                            children: "2"
                        }), h.jsx("option", {
                            value: "3",
                            children: "3"
                        }), h.jsx("option", {
                            value: "4",
                            children: "4"
                        })]
                    })
                })]
            }), h.jsxs("div", {
                className: "sm:col-span-3",
                children: [h.jsxs("label", {
                    htmlFor: "first-name",
                    className: "block text-xs font-light text-black uppercase",
                    children: [(rt = f == null ? void 0 : f.lblInputVisitPurpose) == null ? void 0 : rt[c], " ", " ", h.jsxs("span", {
                        className: "text-red-600 uppercase text-[10px]",
                        children: ["*(", (on = f == null ? void 0 : f.noCopyPasteMinChar) == null ? void 0 : on[c], ")"]
                    })]
                }), h.jsx("div", {
                    className: "mt-2",
                    children: h.jsx("textarea", {
                        name: "visit_purpose",
                        id: "visit_purpose",
                        onCopy: se => se.preventDefault(),
                        onPaste: se => se.preventDefault(),
                        onCut: se => se.preventDefault(),
                        autoComplete: "off",
                        disabled: !B,
                        value: L,
                        onChange: se => W(se.target.value),
                        className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"
                    })
                })]
            }), h.jsxs("div", {
                className: "sm:col-span-3",
                children: [h.jsx("label", {
                    htmlFor: "first-name",
                    className: "block text-xs font-light text-black uppercase",
                    children: (rn = f == null ? void 0 : f.lblInputAmount) == null ? void 0 : rn[c]
                }), h.jsxs("label", {
                    htmlFor: "first-name",
                    className: "block text-sm font-bold text-black uppercase",
                    children: ["BDT ", oe !== 0 ? oe : ""]
                })]
            }), h.jsx("div", {
                className: "sm:col-span-3",
                children: h.jsx(nr, {
                    sitekey: G,
                    onVerify: se => Se(se)
                })
            }), h.jsx("div", {
                className: "sm:col-span-3",
                children: g ? h.jsxs(re.button, {
                    type: "button",
                    whileTap: {
                        scale: .95
                    },
                    className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition duration-300
              bg-gray-400 cursor-not-allowed
            `,
                    children: [(ka = f == null ? void 0 : f.checking) == null ? void 0 : ka[c], "..."]
                }) : h.jsx(re.button, {
                    type: "button",
                    disabled: !jt,
                    whileTap: {
                        scale: .95
                    },
                    className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full cursor-pointer sm:w-auto px-2 py-2 text-center transition duration-300
              ${jt ? "bg-[#28a745] hover:bg-[#218838] " : "bg-gray-400 cursor-not-allowed"}
            `,
                    onClick: jt ? Ne : void 0,
                    children: (Kt = f == null ? void 0 : f.lblSaveNext) == null ? void 0 : Kt[c]
                })
            })]
        }) : h.jsx("div", {
            className: "sm:col-span-3 flex justify-center h-[50vh]",
            children: h.jsx("p", {
                className: "flex items-center justify-center w-full h-screen-1/2  text-red-500 text-sm font-light rounded-md",
                children: (($e = f == null ? void 0 : f.slotAvailableText) == null ? void 0 : $e[c]) ?? "Please wait until slot is available."
            })
        })]
    })
}
  , vw = ({setActiveStep: n}) => {
    var I, Q, ie, fe, de, ce, oe;
    const {language: l, translations: i} = st()
      , o = ya()
      , [c,f] = S.useState(null)
      , [d,g] = S.useState(!1)
      , [p,m] = S.useState("")
      , [y,x] = S.useState("")
      , [T,w] = S.useState("")
      , [N,D] = S.useState("")
      , [_,V] = S.useState(0)
      , [k,B] = S.useState({});
    S.useEffect( () => {
        const ee = localStorage.getItem("applicant")
          , P = localStorage.getItem("personal_info")
          , E = O => localStorage.getItem(O) || "";
        if (m(E("auth_name")),
        x(E("auth_email")),
        w(E("auth_phone")),
        P) {
            const O = JSON.parse(P);
            B(O == null ? void 0 : O.family)
        }
        if (ee)
            try {
                const O = JSON.parse(ee);
                O && D(O.webfile_id),
                O.family_count && V(parseInt(O.family_count))
            } catch {
                console.error("Invalid JSON in localStorage")
            }
    }
    , []);
    const K = (ee, P, E) => {
        B(O => ({
            ...O,
            [ee + 1]: {
                ...O[ee + 1],
                [P]: E
            }
        }))
    }
      , R = () => {
        var P, E, O;
        const ee = [];
        if (p.trim() || ee.push("Full name is required."),
        y.trim() || ee.push("Email is required."),
        T.trim() || ee.push("Phone is required."),
        N.trim() || ee.push("Web file number is required."),
        _ > 0)
            for (let q = 1; q <= _; q++) {
                const ae = k[q];
                (P = ae == null ? void 0 : ae.name) != null && P.trim() || ee.push(`Family member ${q}: Name is required.`),
                (E = ae == null ? void 0 : ae.webfile_no) != null && E.trim() || ee.push(`Family member ${q}: Web file number is required.`),
                (O = ae == null ? void 0 : ae.again_webfile_no) != null && O.trim() || ee.push(`Family member ${q}: Confirm web file number is required.`)
            }
        return ee.length > 0 ? {
            valid: !1,
            errors: ee
        } : {
            valid: !0
        }
    }
      , Z = async () => {
        try {
            g(!0);
            const {valid: ee, errors: P} = R();
            if (!ee && P.length > 0) {
                f({
                    message: `Please fix the following error:
` + P[0],
                    type: "error"
                }),
                g(!1);
                return
            }
            const E = localStorage.getItem("access_token")
              , q = localStorage.getItem("is_edit") === "true" ? "/api/v2/payment/personal-info-edit" : "/api/v2/payment/personal-info-submit"
              , ae = await Pe(q, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l,
                    Authorization: `Bearer ${E}`
                },
                body: {
                    full_name: p,
                    email_name: y,
                    phone: T,
                    webfile_id: N,
                    family: k
                }
            });
            if (ae.status_code === 200) {
                const j = {
                    full_name: p,
                    email_name: y,
                    phone: T,
                    webfile_id: N,
                    family: k
                };
                localStorage.setItem("personal_info", JSON.stringify(j)),
                n(3),
                f({
                    message: "Amount change notified successfully",
                    type: "success"
                })
            } else
                f({
                    message: (ae == null ? void 0 : ae.message) || "Failed to notify",
                    type: "error"
                });
            g(!1)
        } catch (ee) {
            g(!1);
            const P = ee
              , E = typeof P == "object" && (P != null && P.message) ? P.message : "Failed to get payment data. Please try again later."
              , O = typeof P == "object" && typeof P.status == "number" ? P.status : 422;
            (O === 401 || O === 419) && (f({
                message: E,
                type: "error"
            }),
            setTimeout( () => {
                pa(o)
            }
            , 5e3)),
            f({
                message: E,
                type: "error"
            })
        }
    }
    ;
    return h.jsxs("div", {
        className: "grid gap-x-6 gap-y-2",
        children: [c && h.jsx(Rt, {
            message: c.message,
            type: c.type,
            onClose: () => f(null)
        }), h.jsxs("div", {
            className: "sm:col-span-3",
            children: [h.jsx("label", {
                htmlFor: "first-name",
                className: "block text-xs font-light text-black uppercase",
                children: (I = i == null ? void 0 : i.lblInputName) == null ? void 0 : I[l]
            }), h.jsx("div", {
                className: "mt-2",
                children: h.jsx("input", {
                    type: "text",
                    name: "full-name",
                    id: "full-name",
                    value: p,
                    disabled: !0,
                    autoComplete: "off",
                    placeholder: (Q = i == null ? void 0 : i.lblInputRegName) == null ? void 0 : Q[l],
                    className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                })
            })]
        }), h.jsxs("div", {
            className: "sm:col-span-3",
            children: [h.jsx("label", {
                htmlFor: "first-name",
                className: "block text-xs font-light text-black uppercase",
                children: (ie = i == null ? void 0 : i.lblInputEmail) == null ? void 0 : ie[l]
            }), h.jsx("div", {
                className: "mt-2",
                children: h.jsx("input", {
                    type: "text",
                    name: "email",
                    id: "email",
                    onCopy: ee => ee.preventDefault(),
                    onPaste: ee => ee.preventDefault(),
                    onCut: ee => ee.preventDefault(),
                    value: y,
                    disabled: !0,
                    autoComplete: "off",
                    className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                })
            })]
        }), h.jsxs("div", {
            className: "sm:col-span-3",
            children: [h.jsx("label", {
                htmlFor: "first-name",
                className: "block text-xs font-light text-black uppercase",
                children: (fe = i == null ? void 0 : i.lblInputContactNo) == null ? void 0 : fe[l]
            }), h.jsx("div", {
                className: "mt-2",
                children: h.jsx("input", {
                    type: "text",
                    name: "user_phone",
                    id: "user_phone",
                    onCopy: ee => ee.preventDefault(),
                    onPaste: ee => ee.preventDefault(),
                    onCut: ee => ee.preventDefault(),
                    value: T,
                    disabled: !0,
                    autoComplete: "off",
                    className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                })
            })]
        }), h.jsxs("div", {
            className: "sm:col-span-3",
            children: [h.jsx("label", {
                htmlFor: "first-name",
                className: "block text-xs font-light text-black uppercase",
                children: (de = i == null ? void 0 : i.ovWebID) == null ? void 0 : de[l]
            }), h.jsx("div", {
                className: "mt-2",
                children: h.jsx("input", {
                    type: "text",
                    name: "webfile_id",
                    id: "webfile_id",
                    value: N,
                    disabled: !0,
                    autoComplete: "off",
                    className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                })
            })]
        }), h.jsxs("div", {
            className: "sm:col-span-3",
            children: [[...Array(_)].map( (ee, P) => {
                var E, O, q, ae, j, L, W, te, le, G;
                return h.jsxs("div", {
                    className: "flex flex-col w-full gap-2",
                    children: [h.jsxs("div", {
                        className: "w-full",
                        children: [h.jsxs("label", {
                            htmlFor: "first-name",
                            className: "block text-xs font-light text-black uppercase my-2",
                            children: [(E = i == null ? void 0 : i.lblInputFamily) == null ? void 0 : E[l], " ", P + 1]
                        }), h.jsxs("label", {
                            htmlFor: "first-name",
                            className: "block text-xs font-light text-black uppercase",
                            children: [(O = i == null ? void 0 : i.lblInputFullName) == null ? void 0 : O[l], " ", " ", h.jsxs("span", {
                                className: "text-red-600 text-[10px]",
                                children: ["*(", (q = i == null ? void 0 : i.lblRequired) == null ? void 0 : q[l], ")"]
                            })]
                        }), h.jsx("div", {
                            className: "mt-2",
                            children: h.jsx("input", {
                                type: "text",
                                name: `full-name-${P}`,
                                id: `full-name-${P}`,
                                onCopy: F => F.preventDefault(),
                                onPaste: F => F.preventDefault(),
                                onCut: F => F.preventDefault(),
                                value: ((ae = k[P + 1]) == null ? void 0 : ae.name) || "",
                                onChange: F => K(P, "name", F.target.value),
                                autoComplete: "off",
                                className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"
                            })
                        })]
                    }), h.jsxs("div", {
                        className: "sm:col-span-3",
                        children: [h.jsxs("label", {
                            htmlFor: "first-name",
                            className: "block text-xs font-light text-black uppercase",
                            children: [(j = i == null ? void 0 : i.lblInputFamilyWebFile) == null ? void 0 : j[l], " ", " ", h.jsxs("span", {
                                className: "text-red-600 text-[10px]",
                                children: ["*(", (L = i == null ? void 0 : i.lblMustFace7) == null ? void 0 : L[l], ")"]
                            })]
                        }), h.jsx("div", {
                            className: "mt-2",
                            children: h.jsx("input", {
                                type: "text",
                                name: `web-file-number-${P}`,
                                id: `web-file-number-${P}`,
                                onCopy: F => F.preventDefault(),
                                onPaste: F => F.preventDefault(),
                                onCut: F => F.preventDefault(),
                                value: ((W = k[P + 1]) == null ? void 0 : W.webfile_no) || "",
                                onChange: F => K(P, "webfile_no", F.target.value),
                                autoComplete: "off",
                                className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"
                            })
                        })]
                    }), h.jsxs("div", {
                        className: "sm:col-span-3",
                        children: [h.jsxs("label", {
                            htmlFor: "first-name",
                            className: "block text-xs font-light text-black uppercase",
                            children: [(te = i == null ? void 0 : i.lblInputFamilyWebFileAgain) == null ? void 0 : te[l], " ", " ", h.jsxs("span", {
                                className: "text-red-600 text-[10px]",
                                children: ["*(", (le = i == null ? void 0 : i.lblNoCopyPaste) == null ? void 0 : le[l], ")"]
                            })]
                        }), h.jsx("div", {
                            className: "mt-2",
                            children: h.jsx("input", {
                                type: "text",
                                name: `web-file-number-repeat-${P}`,
                                id: `web-file-number-repeat-${P}`,
                                onCopy: F => F.preventDefault(),
                                onPaste: F => F.preventDefault(),
                                onCut: F => F.preventDefault(),
                                value: ((G = k[P + 1]) == null ? void 0 : G.again_webfile_no) || "",
                                onChange: F => K(P, "again_webfile_no", F.target.value),
                                autoComplete: "off",
                                className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"
                            })
                        })]
                    })]
                }, P)
            }
            ), h.jsx("div", {
                className: "sm:col-span-3",
                children: d ? h.jsxs(re.button, {
                    type: "button",
                    whileTap: {
                        scale: .95
                    },
                    className: "text-white mb-2 duration-300 cursor-not-allowed mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition bg-gray-500 ",
                    children: [(ce = i == null ? void 0 : i.checking) == null ? void 0 : ce[l], "..."]
                }) : h.jsx(re.button, {
                    type: "button",
                    whileTap: {
                        scale: .95
                    },
                    className: "text-white mb-2 duration-300 cursor-pointer mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition bg-[#28a745] hover:bg-[#218838]",
                    onClick: Z,
                    children: (oe = i == null ? void 0 : i.lblSaveNext) == null ? void 0 : oe[l]
                })
            })]
        })]
    })
}
  , xw = ({setActiveStep: n}) => {
    var ae, j, L, W, te, le;
    const l = ya()
      , {language: i, translations: o} = st()
      , [c,f] = S.useState(0)
      , [d,g] = S.useState(-1)
      , [p,m] = S.useState(null)
      , [y,x] = S.useState(null)
      , [T,w] = S.useState(null)
      , [N,D] = S.useState(null)
      , [_,V] = S.useState(null)
      , [k,B] = S.useState(null)
      , [K,R] = S.useState({})
      , [Z,I] = S.useState(!1)
      , [Q,ie] = S.useState(null)
      , [fe,de] = S.useState(null)
      , [ce,oe] = S.useState(!1)
      , ee = async () => {
        if (ce) {
            I(!0);
            const G = localStorage.getItem("access_token");
            try {
                const F = await Pe("/api/v2/payment/overview-submit", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        language: i,
                        Authorization: `Bearer ${G}`
                    }
                });
                if (I(!1),
                F.status_code === 200) {
                    const Se = localStorage.getItem("applicant")
                      , we = localStorage.getItem("personal_info");
                    Se && localStorage.setItem("applicant_backup", Se),
                    we && localStorage.setItem("personal_info_backup", we),
                    localStorage.removeItem("applicant"),
                    localStorage.removeItem("personal_info"),
                    n(4),
                    m({
                        message: F == null ? void 0 : F.message,
                        type: "success"
                    })
                } else
                    m({
                        message: F == null ? void 0 : F.message,
                        type: "error"
                    })
            } catch (F) {
                const Se = F
                  , we = typeof Se == "object" && (Se != null && Se.message) ? Se.message : "Failed to get payment data. Please try again later."
                  , Te = typeof Se == "object" && typeof Se.status == "number" ? Se.status : 422;
                (Te === 401 || Te === 419) && (m({
                    message: we,
                    type: "error"
                }),
                setTimeout( () => {
                    pa(l)
                }
                , 5e3)),
                m({
                    message: we,
                    type: "error"
                })
            }
        }
    }
    ;
    S.useEffect( () => {
        const G = Te => localStorage.getItem(Te) || "";
        x(G("auth_name")),
        w(G("auth_email")),
        V(G("auth_phone")),
        V(G("auth_phone"));
        const F = localStorage.getItem("personal_info");
        if (F) {
            const Te = JSON.parse(F);
            R(Te == null ? void 0 : Te.family)
        }
        const Se = localStorage.getItem("applicant")
          , we = localStorage.getItem("initialData");
        if (Se && we)
            try {
                const Te = JSON.parse(Se)
                  , Ve = JSON.parse(we);
                if (D(Te.visa_fee || null),
                B(Te.webfile_id || null),
                Ve != null && Ve.ivacs && (Te == null ? void 0 : Te.ivac_id) !== void 0) {
                    const Ue = Ve.ivacs.find(Le => Le.id == Te.ivac_id);
                    Ue && ie(Ue.ivac_name)
                }
                if (Ve != null && Ve.visa_types && (Te == null ? void 0 : Te.visa_type) !== void 0) {
                    const Ue = Ve.visa_types.find(Le => Le.id == Te.visa_type);
                    Ue && de(Ue.type_name)
                }
            } catch (Te) {
                const Ve = Te
                  , Ue = typeof Ve == "object" && (Ve != null && Ve.message) ? Ve.message : "Failed to get payment data. Please try again later."
                  , Le = typeof Ve == "object" && typeof Ve.status == "number" ? Ve.status : 422;
                (Le === 401 || Le === 419) && pa(l),
                m({
                    message: Ue,
                    type: "error"
                })
            }
    }
    , []),
    S.useEffect( () => {
        const G = localStorage.getItem("applicant");
        if (G) {
            const F = JSON.parse(G);
            F.family_count && f(parseInt(F.family_count))
        }
    }
    , []);
    const P = G => {
        g(F => F === G ? null : G)
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
    return h.jsxs(re.div, {
        className: "flex flex-col",
        variants: E,
        initial: "hidden",
        animate: "visible",
        children: [p && h.jsx(Rt, {
            message: p.message,
            type: p.type,
            onClose: () => m(null)
        }), h.jsxs("div", {
            className: "flex flex-row gap-2 items-center p-2 bg-green-50 border-[0.2px] border-green-100 rounded cursor-pointer",
            onClick: () => P(-1),
            children: [h.jsxs("p", {
                className: "text-xs md:text-sm font-light text-white rounded-md bg-black text-center p-2 min-w-[110px]",
                children: [(ae = o == null ? void 0 : o.application_text) == null ? void 0 : ae[i], " #1"]
            }), h.jsxs("p", {
                className: "text-green-700 text-xs  hover:cursor-pointer font-bold cursor-pointer hover:underline",
                children: [k ?? "", " (", (j = o == null ? void 0 : o.btnExpandOrClose) == null ? void 0 : j[i], ")"]
            })]
        }), h.jsx(re.div, {
            initial: !1,
            animate: {
                height: d === -1 ? "auto" : 0,
                opacity: d === -1 ? 1 : 0
            },
            transition: {
                duration: .3
            },
            className: `overflow-hidden mt-2 rounded-md border-[0.2px] border-slate-300 ${d === -1 ? "py-4 mb-4" : ""}`,
            children: d === -1 && h.jsxs(re.div, {
                className: "flex flex-wrap md:px-4 relative text-center justify-center",
                children: [q.map( (G, F) => {
                    var Se;
                    return h.jsxs(re.div, {
                        variants: O,
                        initial: "hidden",
                        animate: "visible",
                        className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center w-[180px] md:w-1/3    ",
                        children: [h.jsx("p", {
                            className: "text-red-600 font-light text-[8px] md:text-[10px] break-words text-center w-full",
                            children: (Se = o == null ? void 0 : o[G]) == null ? void 0 : Se[i]
                        }), h.jsx("p", {
                            className: "text-[12px] font-semibold break-words text-center w-full",
                            children: G === "ovWebID" ? k || "N/A" : G === "ovIvacCenter" ? Q || "N/A" : G === "ovVisaType" ? fe || "N/A" : G === "ovEmail" ? T || "N/A" : G === "ovName" ? y || "N/A" : G === "ovContact" ? _ || "N/A" : G === "ovFees" ? "BDT " + N || "N/A" : "NA"
                        })]
                    }, F)
                }
                ), h.jsx("div", {
                    className: "col-span-3 z-20 -mt-20 relative right-0 w-full flex justify-end items-end  ",
                    children: h.jsxs("div", {
                        className: "flex items-center gap-1 hover:text-green-800 duration-300 font-bold text-xs cursor-pointer w-fit pr-4 md:pr-0",
                        onClick: () => {
                            n(1),
                            localStorage.setItem("is_edit", "true")
                        }
                        ,
                        children: [(L = o == null ? void 0 : o.edit_text) == null ? void 0 : L[i], " ", h.jsx(kg, {})]
                    })
                })]
            })
        }), [...Array(c)].map( (G, F) => {
            var Se, we, Te, Ve;
            return h.jsxs(re.div, {
                initial: "hidden",
                animate: "visible",
                children: [h.jsxs("div", {
                    className: "flex flex-row gap-2 items-center p-2 bg-green-50 border-[0.2px] border-green-100 rounded cursor-pointer",
                    onClick: () => P(F),
                    children: [h.jsxs("p", {
                        className: "text-xs md:text-sm font-light text-white rounded-md bg-black text-center p-2 min-w-[110px]",
                        children: [(Se = o == null ? void 0 : o.application_text) == null ? void 0 : Se[i], " #", F + 2]
                    }), h.jsxs("p", {
                        className: "text-green-700 text-xs  hover:cursor-pointer font-bold cursor-pointer hover:underline",
                        children: [(we = Object.values(K)[F]) == null ? void 0 : we.webfile_no, " (", (Te = o == null ? void 0 : o.btnExpandOrClose) == null ? void 0 : Te[i], ")"]
                    })]
                }), h.jsx(re.div, {
                    initial: !1,
                    animate: {
                        height: d === F ? "auto" : 0,
                        opacity: d === F ? 1 : 0
                    },
                    transition: {
                        duration: .3
                    },
                    className: `overflow-hidden mt-2 rounded-md  border-[0.2px] border-slate-300 ${d === F ? "py-4 mb-4" : ""}`,
                    children: d === F && h.jsxs(re.div, {
                        className: "flex flex-wrap md:px-4 relative text-center justify-center",
                        children: [q.map( (Ue, Le) => {
                            var jt, Ne, $e;
                            return h.jsxs(re.div, {
                                variants: O,
                                initial: "hidden",
                                animate: "visible",
                                className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center w-[180px] md:w-1/3",
                                children: [h.jsx("p", {
                                    className: "text-red-600 font-light text-[8px] md:text-[10px] break-words text-center w-full",
                                    children: (jt = o == null ? void 0 : o[Ue]) == null ? void 0 : jt[i]
                                }), h.jsx("p", {
                                    className: "text-[12px] font-semibold break-words text-center w-full",
                                    children: Ue === "ovWebID" ? ((Ne = Object.values(K)[F]) == null ? void 0 : Ne.webfile_no) || "N/A" : Ue === "ovIvacCenter" ? Q || "N/A" : Ue === "ovVisaType" ? fe || "N/A" : Ue === "ovEmail" ? T || "N/A" : Ue === "ovName" ? (($e = Object.values(K)[F]) == null ? void 0 : $e.name) || "N/A" : Ue === "ovContact" ? _ || "N/A" : Ue === "ovFees" ? "BDT " + N || "N/A" : "NA"
                                })]
                            }, Le)
                        }
                        ), h.jsx("div", {
                            className: "col-span-3 z-20 -mt-20 relative right-0 w-full flex justify-end items-end  ",
                            children: h.jsxs("div", {
                                className: "flex items-center gap-1 hover:text-green-900 duration-300 font-bold text-xs cursor-pointer w-fit pr-4 md:pr-0",
                                onClick: () => {
                                    n(2),
                                    localStorage.setItem("is_edit", "true")
                                }
                                ,
                                children: [(Ve = o == null ? void 0 : o.edit_text) == null ? void 0 : Ve[i], " ", h.jsx(kg, {})]
                            })
                        })]
                    })
                })]
            }, F)
        }
        ), h.jsxs("div", {
            className: "space-y-2 max-w-md px-2 mt-4",
            children: [h.jsxs("div", {
                className: "flex items-center space-x-2",
                children: [h.jsx("input", {
                    type: "checkbox",
                    id: "terms",
                    checked: ce,
                    onChange: G => oe(G.target.checked)
                }), h.jsxs("label", {
                    htmlFor: "terms",
                    className: "text-sm font-light  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                    children: [(W = o == null ? void 0 : o.tcAgree) == null ? void 0 : W[i], " ", " ", h.jsx("a", {
                        href: "https://api-payment.ivacbd.com/contents/tos.html",
                        target: "_blank",
                        className: "text-blue-600 hover:underline",
                        children: (te = o == null ? void 0 : o.tcText) == null ? void 0 : te[i]
                    })]
                })]
            }), h.jsx("button", {
                onClick: ce ? ee : void 0,
                disabled: !ce,
                className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
                      ${ce ? "bg-[#28a745] hover:bg-[#218838] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}
                    `,
                children: (le = o == null ? void 0 : o.conMovePay) == null ? void 0 : le[i]
            })]
        })]
    })
}
  , bw = ({setActiveStep: n}) => {
    var Kt, se, me, We, Re, ut, xt, ne, xe, mt, kt, ai, ni, ol, rl, li, ws, va, bt, Ct, Ha, ul, As, Ns, ii, un, cl, Pa;
    const l = ya()
      , {language: i, translations: o} = st()
      , [c,f] = S.useState(null)
      , [d,g] = S.useState(null)
      , [p,m] = S.useState(0)
      , [y,x] = S.useState(0)
      , [T,w] = S.useState(0)
      , [N,D] = S.useState("")
      , [_,V] = S.useState(!1)
      , [k,B] = S.useState("")
      , [K,R] = S.useState(!1)
      , [Z,I] = S.useState([])
      , [Q,ie] = S.useState("")
      , [fe,de] = S.useState(!1)
      , [ce,oe] = S.useState([])
      , [ee,P] = S.useState("")
      , [E,O] = S.useState("")
      , [q,ae] = S.useState("")
      , [j,L] = S.useState("")
      , [W,te] = S.useState(!1)
      , [le,G] = S.useState(!1)
      , [F,Se] = S.useState(!1)
      , [we,Te] = S.useState(!1)
      , [Ve,Ue] = S.useState(!1)
      , [Le,jt] = S.useState(!1)
      , [Ne,$e] = S.useState(0)
      , [ta,ot] = S.useState("")
      , za = "0x4AAAAAABpNUpzYeppBoYpe"
      , [aa,wa] = S.useState("");
    S.useEffect( () => {
        (async () => {
            var Be, be, qe, Zt, Na, qa;
            const Ce = localStorage.getItem("access_token");
            try {
                const ct = await Pe("/api/v2/payment/checkout", {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        language: i,
                        Authorization: `Bearer ${Ce}`
                    }
                });
                ct.status_code === 200 ? (x((Be = ct == null ? void 0 : ct.data) == null ? void 0 : Be.convenience_fees),
                m((be = ct == null ? void 0 : ct.data) == null ? void 0 : be.fees),
                w((qe = ct == null ? void 0 : ct.data) == null ? void 0 : qe.payable_amount),
                D((Zt = ct == null ? void 0 : ct.data) == null ? void 0 : Zt.mobile_no),
                g((qa = (Na = ct == null ? void 0 : ct.data) == null ? void 0 : Na.payment_options) == null ? void 0 : qa.data)) : f({
                    message: ct.message,
                    type: "error"
                })
            } catch (ct) {
                const xa = ct
                  , si = typeof xa == "object" && (xa != null && xa.message) ? xa.message : "Failed to get payment data. Please try again later."
                  , Es = typeof xa == "object" && typeof xa.status == "number" ? xa.status : 422;
                (Es === 401 || Es === 419) && (f({
                    message: si,
                    type: "error"
                }),
                setTimeout( () => {
                    pa(l)
                }
                , 5e3)),
                f({
                    message: si,
                    type: "error"
                })
            }
        }
        )()
    }
    , []);
    const Xt = async Ae => {
        const Ce = localStorage.getItem("access_token");
        try {
            G(!0);
            const Be = await Pe("/api/v2/payment/pay-otp-sent", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: i,
                    Authorization: `Bearer ${Ce}`
                },
                body: {
                    resend: Ae
                }
            });
            if (Be.status_code === 200) {
                V(!0),
                $e(30);
                const be = setInterval( () => {
                    $e(qe => qe <= 1 ? (clearInterval(be),
                    0) : qe - 1)
                }
                , 1e3)
            } else
                f({
                    message: Be.message,
                    type: "error"
                })
        } catch (Be) {
            const be = Be
              , qe = typeof be == "object" && (be != null && be.message) ? be.message : "Failed to get payment data. Please try again later."
              , Zt = typeof be == "object" && typeof be.status == "number" ? be.status : 422;
            (Zt === 401 || Zt === 419) && (f({
                message: qe,
                type: "error"
            }),
            setTimeout( () => pa(l), 5e3)),
            f({
                message: qe,
                type: "error"
            })
        } finally {
            G(!1)
        }
    }
      , Ua = () => Xt(0)
      , Aa = () => Xt(1)
      , Ba = async () => {
        var Ce;
        const Ae = localStorage.getItem("access_token");
        try {
            if (k.length < 6) {
                f({
                    message: "Please enter 6 digit otp",
                    type: "error"
                });
                return
            }
            Se(!0);
            const Be = await Pe("/api/v2/payment/pay-otp-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: i,
                    Authorization: `Bearer ${Ae}`
                },
                body: {
                    otp: k
                }
            });
            Be.status_code === 200 ? (R(!0),
            I((Ce = Be == null ? void 0 : Be.data) == null ? void 0 : Ce.slot_dates)) : f({
                message: Be.message,
                type: "error"
            })
        } catch (Be) {
            const be = Be
              , qe = typeof be == "object" && (be != null && be.message) ? be.message : "Failed to get payment data. Please try again later."
              , Zt = typeof be == "object" && typeof be.status == "number" ? be.status : 422;
            (Zt === 401 || Zt === 419) && (f({
                message: qe,
                type: "error"
            }),
            setTimeout( () => {
                pa(l)
            }
            , 5e3)),
            f({
                message: qe,
                type: "error"
            })
        } finally {
            Se(!1)
        }
    }
      , La = async Ae => {
        var be;
        const Ce = Ae.target.value;
        ie(Ce);
        const Be = localStorage.getItem("access_token");
        try {
            Ue(!0);
            const qe = await Pe("/api/v2/payment/pay-slot-time", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: i,
                    Authorization: `Bearer ${Be}`
                },
                body: {
                    appointment_date: Ce
                }
            });
            qe.status_code === 200 ? (oe(((be = qe == null ? void 0 : qe.data) == null ? void 0 : be.slot_times) ?? []),
            de(!0)) : f({
                message: qe.message,
                type: "error"
            })
        } catch (qe) {
            const Zt = typeof qe == "object" && (qe != null && qe.message) ? qe.message : "Failed to verify email address";
            f({
                message: Zt,
                type: "error"
            })
        } finally {
            Ue(!1)
        }
    }
      , [je,Je] = S.useState(null)
      , wt = Q.trim() !== "" && Q.length >= 6 && ee.trim() !== "" && ee.length >= 6 && je !== null && je.item.name.trim() !== "" && je.item.slug.trim() !== "" && je.item.link.trim() !== "" && aa.trim() !== "" && aa !== ""
      , rt = async () => {
        const Ae = localStorage.getItem("access_token");
        try {
            jt(!0);
            const Ce = await Pe("/api/v2/payment/pay-now", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: i,
                    Authorization: `Bearer ${Ae}`
                },
                body: {
                    appointment_date: Q,
                    appointment_time_final: ee,
                    captcha_token: aa,
                    selected_payment: {
                        name: je.item.name,
                        slug: je.item.slug,
                        link: je.item.link
                    }
                }
            });
            Ce.status_code === 200 ? (localStorage.clear(),
            window.location.href = Ce.data.url) : f({
                message: Ce.message,
                type: "error"
            })
        } catch (Ce) {
            const Be = Ce
              , be = typeof Be == "object" && (Be != null && Be.message) ? Be.message : "Failed to get payment data. Please try again later."
              , qe = typeof Be == "object" && typeof Be.status == "number" ? Be.status : 42;
            (qe === 41 || qe === 41) && (f({
                message: be,
                type: "error"
            }),
            setTimeout( () => {
                pa(l)
            }
            , 5e3)),
            f({
                message: be,
                type: "error"
            })
        } finally {
            jt(!1)
        }
    }
      , [on,rn] = S.useState("")
      , ka = {
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
    return Ve ? h.jsx(V0, {}) : h.jsxs(re.div, {
        className: "flex flex-col",
        variants: ka,
        initial: "hidden",
        animate: "visible",
        children: [c && h.jsx(Rt, {
            message: c.message,
            type: c.type,
            onClose: () => f(null)
        }), h.jsx("div", {
            className: "max-h-screen bg-gray-50 md:p-4",
            children: h.jsxs("div", {
                className: "max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8",
                children: [h.jsx("div", {
                    className: "bg-white rounded-lg p-5 md:p-6 shadow-sm",
                    children: h.jsxs("div", {
                        className: "space-y-6 h-full flex flex-col justify-around",
                        children: [h.jsxs("div", {
                            className: "flex space-x-2 flex-col",
                            children: [h.jsxs("h3", {
                                className: "text-sm  text-gray-700 mb-3 font-bold",
                                children: [(Kt = o == null ? void 0 : o.payCard) == null ? void 0 : Kt[i], " "]
                            }), h.jsx("div", {
                                className: "boxes flex flex-row justify-start gap-4 flex-wrap",
                                children: (d == null ? void 0 : d.cards) && Object.keys(d.cards).length > 0 && Object.entries(d.cards).map( ([Ae,Ce]) => h.jsx("div", {
                                    className: `w-18 h-16 flex items-center justify-center rounded-lg border-[1px] border-slate-300 shadow hover:cursor-pointer hover:border-[#0074D4] duration-300 ${(je == null ? void 0 : je.type) === "cards" && je.key === Ae ? "ring-2 ring-[#0074D4]" : ""}`,
                                    onClick: () => Je({
                                        type: "cards",
                                        key: Ae,
                                        item: Ce
                                    }),
                                    children: h.jsx("img", {
                                        src: Ce.link,
                                        alt: Ce.name,
                                        className: "w-10 h-10 object-contain"
                                    })
                                }, Ae))
                            })]
                        }), h.jsxs("div", {
                            className: "flex space-x-2 flex-col",
                            children: [h.jsxs("h3", {
                                className: "text-sm font-bold text-gray-700 mb-3",
                                children: [(se = o == null ? void 0 : o.payInt) == null ? void 0 : se[i], " "]
                            }), h.jsx("div", {
                                className: "boxes flex flex-row justify-start gap-4 flex-wrap",
                                children: (d == null ? void 0 : d.internet) && Object.keys(d.internet).length > 0 && Object.entries(d.internet).map( ([Ae,Ce]) => h.jsx("div", {
                                    className: `w-18 h-16 flex items-center justify-center rounded-lg border-[1px] border-slate-300 shadow hover:cursor-pointer hover:border-[#0074D4] duration-300  ${(je == null ? void 0 : je.type) === "internet" && je.key === Ae ? "ring-2 ring-[#0074D4]" : ""}`,
                                    onClick: () => Je({
                                        type: "internet",
                                        key: Ae,
                                        item: Ce
                                    }),
                                    children: h.jsx("img", {
                                        src: Ce.link,
                                        alt: Ce.name,
                                        className: "w-full h-full object-contain"
                                    })
                                }, Ae))
                            })]
                        }), h.jsxs("div", {
                            className: "flex space-x-2 flex-col",
                            children: [h.jsxs("h3", {
                                className: "text-sm font-bold text-gray-700 mb-3",
                                children: [(me = o == null ? void 0 : o.payMob) == null ? void 0 : me[i], " "]
                            }), h.jsx("div", {
                                className: "boxes flex flex-row justify-start gap-4 flex-wrap",
                                children: (d == null ? void 0 : d.mobile) && Object.keys(d.mobile).length > 0 && Object.entries(d.mobile).map( ([Ae,Ce]) => h.jsx("div", {
                                    className: `w-18 h-16 flex items-center justify-center rounded-lg border-[1px] border-slate-300 shadow hover:cursor-pointer hover:border-[#0074D4] duration-300 ${(je == null ? void 0 : je.type) === "mobile" && je.key === Ae ? "ring-2 ring-[#0074D4]" : ""}`,
                                    onClick: () => Je({
                                        type: "mobile",
                                        key: Ae,
                                        item: Ce
                                    }),
                                    children: h.jsx("img", {
                                        src: Ce.link,
                                        alt: Ce.name,
                                        className: "w-full h-full object-contain"
                                    })
                                }, Ae))
                            })]
                        }), h.jsxs("div", {
                            className: "flex space-x-2 flex-col",
                            children: [h.jsx("h3", {
                                className: "text-sm font-bold text-gray-700 mb-3",
                                children: (We = o == null ? void 0 : o.payOth) == null ? void 0 : We[i]
                            }), h.jsx("div", {
                                className: "boxes flex flex-row justify-start gap-4 flex-wrap",
                                children: (d == null ? void 0 : d.others) && Object.keys(d.others).length > 0 && Object.entries(d.others).map( ([Ae,Ce]) => h.jsx("div", {
                                    className: `w-18 h-16 flex items-center justify-center rounded-lg border-[1px] border-slate-300 shadow hover:cursor-pointer hover:border-[#0074D4] duration-300 ${(je == null ? void 0 : je.type) === "others" && je.key === Ae ? "ring-2 ring-[#0074D4]" : ""}`,
                                    onClick: () => Je({
                                        type: "others",
                                        key: Ae,
                                        item: Ce
                                    }),
                                    children: h.jsx("img", {
                                        src: Ce.link,
                                        alt: Ce.name,
                                        className: "w-full h-full object-contain"
                                    })
                                }, Ae))
                            })]
                        })]
                    })
                }), h.jsxs("div", {
                    className: "bg-white rounded-lg p-6 shadow-sm",
                    children: [h.jsx("div", {
                        className: "flex justify-end mb-4",
                        children: h.jsx("div", {
                            className: " px-4 py-2 rounded-lg text-sm font-medium",
                            children: h.jsx("img", {
                                src: oj,
                                className: "w-36",
                                alt: ""
                            })
                        })
                    }), h.jsx("div", {
                        className: "bg-blue-50 border border-gray-200 rounded-lg px-4 py-2 mb-4",
                        children: je ? h.jsxs("div", {
                            className: "flex justify-between items-center ",
                            children: [h.jsx("p", {
                                className: "font-bold",
                                children: (ut = je == null ? void 0 : je.item) == null ? void 0 : ut.name
                            }), h.jsx("img", {
                                src: (xt = je == null ? void 0 : je.item) == null ? void 0 : xt.link,
                                alt: (ne = je == null ? void 0 : je.item) == null ? void 0 : ne.name,
                                className: "w-10 h-10 object-contain"
                            })]
                        }) : h.jsxs("p", {
                            className: "text-gray-600 text-sm text-center",
                            children: [" ", (Re = o == null ? void 0 : o.paySelectOption) == null ? void 0 : Re[i], " "]
                        })
                    }), h.jsxs("div", {
                        className: "space-y-3 mb-4",
                        children: [h.jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [h.jsxs("span", {
                                className: "text-sm font-medium text-gray-700",
                                children: [" ", (xe = o == null ? void 0 : o.ovFees) == null ? void 0 : xe[i], " :"]
                            }), h.jsxs("span", {
                                className: "text-sm text-gray-900",
                                children: [p, " BDT"]
                            })]
                        }), y != "0.00" && h.jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [h.jsxs("span", {
                                className: "text-sm text-gray-600",
                                children: [" ", (mt = o == null ? void 0 : o.payConvFee) == null ? void 0 : mt[i], " :"]
                            }), h.jsxs("span", {
                                className: "text-sm text-gray-900",
                                children: [y, " BDT"]
                            })]
                        }), h.jsxs("div", {
                            className: "flex justify-between items-center pt-2 border-t",
                            children: [h.jsxs("span", {
                                className: "text-sm font-medium text-gray-700",
                                children: [(kt = o == null ? void 0 : o.payPayable) == null ? void 0 : kt[i], ":"]
                            }), h.jsxs("span", {
                                className: "text-sm font-medium text-gray-900",
                                children: [T, " BDT"]
                            })]
                        })]
                    }), h.jsxs("div", {
                        className: "mb-2",
                        children: [h.jsxs("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: [(ai = o == null ? void 0 : o.payPhone) == null ? void 0 : ai[i], ":"]
                        }), h.jsxs("div", {
                            className: "flex items-center gap-3 rounded-md flex-wrap",
                            children: [h.jsx("input", {
                                type: "tel",
                                value: N,
                                disabled: !0,
                                className: "flex-1 px-3 py-2 text-sm rounded-md border border-gray-300 bg-gray-100 text-gray-700 focus:outline-none",
                                placeholder: "Mobile number",
                                autoComplete: "off"
                            }), !K && h.jsx("button", {
                                onClick: le || Ne > 0 ? void 0 : _ ? Aa : Ua,
                                disabled: le || Ne > 0,
                                className: `bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors duration-200 ${le || Ne > 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700 hover:cursor-pointer"}`,
                                children: le ? `${(ni = o == null ? void 0 : o.checking) == null ? void 0 : ni[i]}...` : Ne > 0 ? `${Ne}s` : _ ? (ol = o == null ? void 0 : o.resendOtp) == null ? void 0 : ol[i] : (rl = o == null ? void 0 : o.lblInputSentOtp) == null ? void 0 : rl[i]
                            })]
                        })]
                    }), K && h.jsx("div", {
                        className: "mb-2",
                        children: h.jsxs("p", {
                            className: "text-[10px] font-light text-green-500",
                            children: [(li = o == null ? void 0 : o.payPhone) == null ? void 0 : li[i], " ", " ", " ", (ws = o == null ? void 0 : o.verified) == null ? void 0 : ws[i], " "]
                        })
                    }), _ && !K && h.jsxs("div", {
                        className: "mb-2",
                        children: [h.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: (va = o == null ? void 0 : o.verifyOtp) == null ? void 0 : va[i]
                        }), h.jsxs("div", {
                            className: "flex items-center gap-3 rounded-md md:flex-nowrap flex-wrap",
                            children: [h.jsx("input", {
                                type: "tel",
                                value: k,
                                onChange: Ae => B(Ae.target.value),
                                className: "flex-1 px-3 py-2 text-sm rounded-md border border-gray-300 bg-gray-100 text-gray-700 focus:outline-none",
                                placeholder: (bt = o == null ? void 0 : o.lblInputOtp) == null ? void 0 : bt[i],
                                autoComplete: "off"
                            }), h.jsx("button", {
                                onClick: k.length >= 6 && !F ? Ba : void 0,
                                disabled: k.length < 6 || F,
                                className: `bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors duration-300 ${k.length < 6 || F ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700 hover:cursor-pointer"}`,
                                children: F ? ((Ct = o == null ? void 0 : o.checking) == null ? void 0 : Ct[i]) + "..." : (Ha = o == null ? void 0 : o.verify) == null ? void 0 : Ha[i]
                            })]
                        })]
                    }), K && h.jsxs("div", {
                        className: "my-4",
                        children: [h.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: (ul = o == null ? void 0 : o.lblInputAppointDate) == null ? void 0 : ul[i]
                        }), h.jsxs("select", {
                            id: "appointment_date",
                            name: "appointment_date",
                            value: Q ?? "",
                            onChange: La,
                            className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6",
                            children: [h.jsx("option", {
                                value: "",
                                disabled: !0,
                                hidden: !0,
                                children: (As = o == null ? void 0 : o.lblInputAppointment) == null ? void 0 : As[i]
                            }), Z && Object.keys(Z).length > 0 && Object.entries(Z).map( ([Ae,Ce]) => h.jsx("option", {
                                value: Ce,
                                children: Ce
                            }, Ae))]
                        })]
                    }), fe && h.jsxs("div", {
                        className: "mb-6 mt-2",
                        children: [h.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: (Ns = o == null ? void 0 : o.lblInputAppointTime) == null ? void 0 : Ns[i]
                        }), h.jsxs("select", {
                            id: "appointment_date",
                            name: "appointment_date",
                            value: ee ?? "",
                            onChange: Ae => P(Ae.target.value),
                            className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6",
                            children: [h.jsx("option", {
                                value: "",
                                disabled: !0,
                                hidden: !0,
                                children: (ii = o == null ? void 0 : o.selectAppointmentTime) == null ? void 0 : ii[i]
                            }), Array.isArray(ce) && ce.length > 0 && ce.map(Ae => h.jsx("option", {
                                value: Ae.time_display,
                                children: Ae.time_display
                            }, Ae.id))]
                        })]
                    }), ee != "" && h.jsx("div", {
                        className: "sm:col-span-3",
                        children: h.jsx(nr, {
                            sitekey: za,
                            onVerify: Ae => wa(Ae)
                        })
                    }), h.jsx("button", {
                        className: `w-full py-3 mb-2 rounded-lg duration-300 text-white
    ${wt && !Le ? "bg-green-600 hover:bg-green-700 cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`,
                        disabled: !wt || Le,
                        onClick: wt && !Le ? rt : void 0,
                        children: Le ? ((un = o == null ? void 0 : o.processing) == null ? void 0 : un[i]) + "..." : (cl = o == null ? void 0 : o.payNow) == null ? void 0 : cl[i]
                    }), h.jsx("p", {
                        className: "text-xs text-red-500 text-center",
                        children: (Pa = o == null ? void 0 : o.msgTrans5min) == null ? void 0 : Pa[i]
                    })]
                })]
            })
        })]
    })
}
  , Sw = () => {
    var g, p, m, y, x;
    const {language: n, translations: l} = st()
      , [i,o] = S.useState( () => {
        const T = localStorage.getItem("authStep")
          , w = parseInt(T || "1", 10);
        return w >= 1 && w <= 4 ? w : 1
    }
    );
    S.useEffect( () => {
        localStorage.setItem("authStep", i.toString())
    }
    , [i]);
    const c = [{
        id: 1,
        name: (g = l == null ? void 0 : l.lblTabMenu1) == null ? void 0 : g[n]
    }, {
        id: 2,
        name: (p = l == null ? void 0 : l.lblTabMenu2) == null ? void 0 : p[n]
    }, {
        id: 3,
        name: (m = l == null ? void 0 : l.lblTabMenu3) == null ? void 0 : m[n]
    }, {
        id: 4,
        name: (y = l == null ? void 0 : l.lblTabMenu4) == null ? void 0 : y[n]
    }]
      , f = {
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
    return h.jsx(h.Fragment, {
        children: h.jsxs(re.div, {
            className: "flex flex-col bg-[#b5d6a9] sm:mx-8 lg:mx-20 rounded-md shadow-lg border-[0.1px] border-slate-300 overflow-auto",
            variants: f,
            initial: "hidden",
            animate: "visible",
            children: [h.jsxs("div", {
                className: "flex flex-row gap-4 text-xs overflow-x-scroll border-b-[0.1px] border-slate-300 scroll-smooth scrollbar-hide",
                children: [h.jsx("p", {
                    className: "font-bold bg-white rounded-tl py-4 px-4",
                    children: (x = l == null ? void 0 : l.lblTabMenuAuth) == null ? void 0 : x[n]
                }), c.map( (T, w) => h.jsxs(re.p, {
                    custom: w,
                    variants: d,
                    initial: "hidden",
                    animate: "visible",
                    className: "py-2 px-4 flex items-center min-w-[160px] text-[#5c7b2f] font-bold",
                    children: [h.jsx("span", {
                        className: "bg-white rounded-full px-2 py-1 mr-2 text-xs font-bold",
                        children: h.jsx("i", {
                            children: T.id
                        })
                    }), T.name]
                }, T.id))]
            }), h.jsxs("div", {
                className: "bg-white w-full py-1 md:px-2 lg:px-4",
                children: [i === 1 && h.jsx(fj, {
                    setStep: o
                }), i === 2 && h.jsx(dj, {
                    setStep: o
                }), i === 3 && h.jsx(hj, {
                    setStep: o
                }), i === 4 && h.jsx(mj, {
                    setStep: o
                }), i === 5 && h.jsx(uw, {
                    setStep: o
                }), i === 6 && h.jsx(cw, {
                    setStep: o
                }), i === 7 && h.jsx(fw, {
                    setStep: o
                }), i === 8 && h.jsx(dw, {
                    setStep: o
                }), i === 9 && h.jsx(hw, {
                    setStep: o
                }), i === 10 && h.jsx(mw, {
                    setStep: o
                }), i === 100 && h.jsx(gw, {
                    setStep: o
                })]
            })]
        })
    })
}
  , Tw = () => {
    var K, R, Z, I, Q, ie, fe, de, ce, oe, ee, P, E, O, q, ae;
    const n = ya()
      , {language: l, translations: i} = st()
      , [o,c] = S.useState("")
      , [f,d] = S.useState(null)
      , [g,p] = S.useState(!1)
      , [m,y] = S.useState(null)
      , [x,T] = S.useState("")
      , w = "0x4AAAAAABpNUpzYeppBoYpe"
      , N = o && o.length >= 12 && x !== ""
      , [D,_] = S.useState(!1)
      , V = {
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
      , k = {
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
            if (!N) {
                d({
                    message: "Please enter valid data",
                    type: "error"
                });
                return
            }
            _(!0);
            const j = await Pe("/api/v2/get-payment-info", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    info: {
                        webfile_id: o,
                        captcha_token: x
                    }
                }
            });
            j.status_code === 200 ? (p(!0),
            y(j.data)) : d({
                message: (j == null ? void 0 : j.message) || "Failed to get payment info",
                type: "error"
            })
        } catch (j) {
            const L = j
              , W = typeof L == "object" && (L != null && L.message) ? L.message : "Failed to get payment data. Please try again later."
              , te = typeof L == "object" && typeof L.status == "number" ? L.status : 422;
            (te === 401 || te === 419) && pa(n),
            d({
                message: W,
                type: "error"
            })
        } finally {
            _(!1)
        }
    }
    ;
    return h.jsx(h.Fragment, {
        children: g ? h.jsxs(re.div, {
            className: "overflow-hidden mt-2 rounded-md  border-[0.2px] border-slate-300 bg-white  py-4 lg:w-3/4 mx-auto",
            variants: V,
            initial: "hidden",
            animate: "visible",
            children: [h.jsx("p", {
                className: "font-light text-center text-lg mb-8",
                children: (Q = i == null ? void 0 : i.ovPayStatus) == null ? void 0 : Q[l]
            }), h.jsxs(re.div, {
                className: "grid sm:grid-cols-2 md:grid-cols-3 md:px-4 text-center",
                variants: V,
                children: [h.jsxs(re.div, {
                    variants: k,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [h.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (ie = i == null ? void 0 : i.ovWebID) == null ? void 0 : ie[l]
                    }), h.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: m == null ? void 0 : m.webfile_id
                    })]
                }), h.jsxs(re.div, {
                    variants: k,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [h.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (fe = i == null ? void 0 : i.ovIvacCenter) == null ? void 0 : fe[l]
                    }), h.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: m == null ? void 0 : m.ivac_name
                    })]
                }), h.jsxs(re.div, {
                    variants: k,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [h.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (de = i == null ? void 0 : i.ovVisaType) == null ? void 0 : de[l]
                    }), h.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: m == null ? void 0 : m.visa_type
                    })]
                }), h.jsxs(re.div, {
                    variants: k,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [h.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (ce = i == null ? void 0 : i.ovFees) == null ? void 0 : ce[l]
                    }), h.jsxs("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: [m == null ? void 0 : m.final_amount, " BDT"]
                    })]
                }), h.jsxs(re.div, {
                    variants: k,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [h.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (oe = i == null ? void 0 : i.ovName) == null ? void 0 : oe[l]
                    }), h.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: m == null ? void 0 : m.name
                    })]
                }), h.jsxs(re.div, {
                    variants: k,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [h.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (ee = i == null ? void 0 : i.ovEmail) == null ? void 0 : ee[l]
                    }), h.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: m == null ? void 0 : m.email
                    })]
                }), h.jsxs(re.div, {
                    variants: k,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [h.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (P = i == null ? void 0 : i.ovContact) == null ? void 0 : P[l]
                    }), h.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: m == null ? void 0 : m.phone
                    })]
                }), h.jsxs(re.div, {
                    variants: k,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [h.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (E = i == null ? void 0 : i.ovAppointment) == null ? void 0 : E[l]
                    }), h.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: m == null ? void 0 : m.appointment_date
                    })]
                }), h.jsxs(re.div, {
                    variants: k,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [h.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (O = i == null ? void 0 : i.ovPayStatus) == null ? void 0 : O[l]
                    }), h.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: m == null ? void 0 : m.status
                    })]
                })]
            }), h.jsxs(re.div, {
                className: "flex items-center justify-center my-8 gap-2 px-4 flex-col md:flex-row",
                initial: "hidden",
                animate: "visible",
                variants: V,
                children: [h.jsxs("a", {
                    target: "_blank",
                    href: m == null ? void 0 : m.download_invoice_url,
                    className: "flex items-center gap-2 bg-gray-800 rounded-md shadow-md text-white text-[14px] px-4 py-2 hover:bg-black cursor-pointer uppercase",
                    children: [h.jsx(D0, {}), " ", (q = i == null ? void 0 : i.btnDownPDF) == null ? void 0 : q[l]]
                }), h.jsxs("a", {
                    target: "_blank",
                    href: m == null ? void 0 : m.print_invoice_url,
                    className: "flex items-center gap-2 bg-cyan-500 rounded-md shadow-md text-white text-[14px]  px-4 py-2 hover:bg-cyan-600 cursor-pointer uppercase",
                    children: [h.jsx(_0, {}), " ", (ae = i == null ? void 0 : i.btnPrintPDF) == null ? void 0 : ae[l]]
                })]
            })]
        }) : h.jsxs(re.div, {
            className: "flex flex-col bg-green-200  sm:mx-12 lg:mx-44 rounded-md pb-4 overflow-hidden border-[0.1px] border-slate-300",
            variants: V,
            initial: "hidden",
            animate: "visible",
            children: [f && h.jsx(Rt, {
                message: f.message,
                type: f.type,
                onClose: () => d(null)
            }), h.jsxs("div", {
                className: "flex flex-col items-start sm:items-center justify-center bg-white rounded-t-md px-4 py-6",
                children: [h.jsx("p", {
                    className: "text-lg mb-8 font-bold",
                    children: (K = i == null ? void 0 : i.lblQueryStatus) == null ? void 0 : K[l]
                }), h.jsx("p", {
                    className: "font-light text-xs mb-1",
                    children: (R = i == null ? void 0 : i.lblInputWebFile) == null ? void 0 : R[l]
                }), h.jsx("input", {
                    type: "text",
                    id: "name",
                    autoComplete: "off",
                    maxLength: 12,
                    className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-md shadow focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full sm:w-1/2 p-2.5 my-2",
                    onChange: j => c(j.target.value),
                    value: o
                }), o && o.length == 12 && h.jsx("div", {
                    className: "sm:col-span-3",
                    children: h.jsx(nr, {
                        sitekey: w,
                        onVerify: j => T(j)
                    })
                }), D ? h.jsxs(re.button, {
                    type: "button",
                    whileTap: {
                        scale: .95
                    },
                    className: `text-white flex items-center justify-center mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
                            bg-gray-400 cursor-not-allowed
                          `,
                    children: [(Z = i == null ? void 0 : i.checking) == null ? void 0 : Z[l], "..."]
                }) : h.jsx(re.button, {
                    type: "button",
                    disabled: !N,
                    whileTap: {
                        scale: .95
                    },
                    className: `text-white flex items-center cursor-pointer justify-center mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
                            ${N ? "bg-[#28a745] hover:bg-[#218838]" : "bg-gray-400 cursor-not-allowed"}
                          `,
                    onClick: B,
                    children: (I = i == null ? void 0 : i.btnQueryStatus) == null ? void 0 : I[l]
                })]
            })]
        })
    })
}
  , jw = () => {
    var g, p, m, y;
    const [n,l] = S.useState( () => {
        const x = localStorage.getItem("activeStep");
        return x ? parseInt(x) : 1
    }
    )
      , {language: i, translations: o} = st()
      , c = [{
        id: 1,
        name: (g = o == null ? void 0 : o.lblTabMenu1) == null ? void 0 : g[i]
    }, {
        id: 2,
        name: (p = o == null ? void 0 : o.lblTabMenu2) == null ? void 0 : p[i]
    }, {
        id: 3,
        name: (m = o == null ? void 0 : o.lblTabMenu3) == null ? void 0 : m[i]
    }, {
        id: 4,
        name: (y = o == null ? void 0 : o.lblTabMenu4) == null ? void 0 : y[i]
    }];
    S.useEffect( () => {
        localStorage.setItem("activeStep", n.toString())
    }
    , [n]);
    const f = {
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
    return h.jsx(h.Fragment, {
        children: h.jsxs(re.div, {
            className: "flex flex-col bg-[#b5d6a9] sm:mx-8 lg:mx-20 border-[0.1px] border-slate-300 rounded-md shadow-lg pb-4",
            variants: f,
            initial: "hidden",
            animate: "visible",
            children: [h.jsx("div", {
                className: "flex flex-row gap-4  text-xs overflow-x-scroll scrollbar-hide border-b-[0.1px] border-slate-300",
                children: c.map( (x, T) => h.jsxs(re.p, {
                    custom: T,
                    variants: d,
                    initial: "hidden",
                    animate: "visible",
                    className: `py-2 px-4 flex items-center font-bold rounded-t min-w-[160px] ${n === x.id ? "bg-white text-black" : "text-[#5c7a2f]"}`,
                    children: [h.jsx("span", {
                        className: `rounded-full px-2 py-1 mr-2 font-light text-xs italic ${n === x.id ? "bg-green-600 text-white" : "bg-white text-gray-500"}`,
                        children: x.id
                    }), x.name]
                }, x.id))
            }), h.jsxs("div", {
                className: "bg-white w-full p-4 overflow-y-scroll",
                children: [n === 1 && h.jsx(yw, {
                    setActiveStep: l
                }), n === 2 && h.jsx(vw, {
                    setActiveStep: l
                }), n === 3 && h.jsx(xw, {
                    setActiveStep: l
                }), n === 4 && h.jsx(bw, {
                    setActiveStep: l
                })]
            })]
        })
    })
}
  , ww = () => {
    var k, B, K, R, Z, I, Q, ie, fe, de, ce, oe, ee, P, E, O;
    const {id: n} = Yj()
      , {language: l, translations: i} = st()
      , o = ya()
      , [c,f] = S.useState(null)
      , [d,g] = S.useState([])
      , [p,m] = S.useState(0)
      , [y,x] = S.useState(!1)
      , [T,w] = S.useState(!1)
      , [N,D] = S.useState(null);
    S.useEffect( () => {
        n && (async () => {
            var ae, j, L;
            x(!0);
            try {
                const W = await Pe(`/api/v2/multi-payment/status/${n}`, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        language: l || "en"
                    }
                });
                W.status_code === 200 ? (console.log("response", ((ae = W == null ? void 0 : W.data) == null ? void 0 : ae.total_charge) == "0.90"),
                f(W),
                g((j = W == null ? void 0 : W.data) == null ? void 0 : j.transactions),
                m((L = W == null ? void 0 : W.data) == null ? void 0 : L.successful_transaction_count)) : (D({
                    message: W.message,
                    type: "error"
                }),
                w(!0))
            } catch (W) {
                w(!0);
                const te = W
                  , le = typeof te == "object" && (te != null && te.message) ? te.message : "Failed to get payment data. Please try again later.";
                D({
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
    const _ = () => {
        localStorage.clear(),
        o("/")
    }
      , V = {
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
    return y ? h.jsx("div", {
        className: "flex justify-center items-center h-screen",
        children: h.jsx("div", {
            className: "w-12 h-12 border-4 border-green-500 border-dashed rounded-full animate-spin"
        })
    }) : (console.log("paymentData", d),
    h.jsx(h.Fragment, {
        children: h.jsxs(re.div, {
            className: "flex flex-col bg-[#b5d6a9] sm:mx-8 lg:mx-20 border-[0.1px] border-slate-300 rounded-md shadow-lg pb-4",
            variants: V,
            initial: "hidden",
            animate: "visible",
            children: [N && h.jsx(Rt, {
                message: N.message,
                type: N.type,
                onClose: () => D(null)
            }), T ? h.jsxs("div", {
                className: "bg-white flex flex-col justify-center items-center py-4",
                children: [h.jsx("h1", {
                    className: "text-center text-red-500 font-light text-2xl mt-2",
                    children: (P = i == null ? void 0 : i.failed) == null ? void 0 : P[l]
                }), h.jsx("p", {
                    className: "text-sm font-light",
                    children: (E = i == null ? void 0 : i.noTransactionFound) == null ? void 0 : E[l]
                }), h.jsx("button", {
                    type: "button",
                    onClick: _,
                    className: "hover:cursor-pointer bg-amber-400 rounded-md px-2 py-2 mt-3 uppercase text-sm font-light hover:text-white",
                    children: (O = i == null ? void 0 : i.startOverToPayment) == null ? void 0 : O[l]
                })]
            }) : h.jsxs("div", {
                className: "bg-white",
                children: [h.jsx("h1", {
                    className: "text-center text-green-500 font-light text-2xl mt-2",
                    children: c == null ? void 0 : c.message
                }), h.jsxs("p", {
                    className: "text-center font-light text-xs my-4",
                    children: [(k = i == null ? void 0 : i.payment_response_text1) == null ? void 0 : k[l], " ", h.jsxs("span", {
                        className: "underline font-bold",
                        children: ["“", (B = c == null ? void 0 : c.data) == null ? void 0 : B.transaction_id, "”"]
                    }), "  ", (K = i == null ? void 0 : i.payment_response_text2) == null ? void 0 : K[l]]
                }), h.jsx("div", {
                    className: "flex flex-row justify-center items-center gap-4 mx-4 my-4",
                    children: h.jsx("div", {
                        className: "relative w-full overflow-x-auto sm:rounded-lg",
                        children: h.jsxs("table", {
                            className: "w-full text-sm text-left text-black ",
                            children: [h.jsx("thead", {
                                className: "text-xs text-black ",
                                children: h.jsxs("tr", {
                                    children: [h.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "WEBFILE NUMBER"
                                    }), h.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "IVAC CENTER"
                                    }), h.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "Appointment Date"
                                    }), h.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "EMAIL"
                                    }), h.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "MOBILE NUMBER"
                                    }), ((R = c == null ? void 0 : c.data) == null ? void 0 : R.total_charge) != "0.00" && h.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "CHARGE"
                                    }), h.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "FEES"
                                    }), h.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "STATUS"
                                    })]
                                })
                            }), h.jsx("tbody", {
                                className: "border-b",
                                children: d.map( (q, ae) => {
                                    var j;
                                    return h.jsxs("tr", {
                                        className: "bg-white  border-gray-200 hover:bg-gray-50",
                                        children: [h.jsx("td", {
                                            className: "px-6 py-4",
                                            children: q == null ? void 0 : q.webfile_id
                                        }), h.jsx("td", {
                                            className: "px-6 py-4",
                                            children: q == null ? void 0 : q.ivac_name
                                        }), h.jsxs("td", {
                                            className: "px-6 py-4",
                                            children: [q == null ? void 0 : q.appointment_date, " (", q == null ? void 0 : q.appointment_time_slot, ")"]
                                        }), h.jsx("td", {
                                            className: "px-6 py-4 uppercase",
                                            children: q == null ? void 0 : q.email
                                        }), h.jsx("td", {
                                            className: "px-6 py-4",
                                            children: q == null ? void 0 : q.phone
                                        }), ((j = c == null ? void 0 : c.data) == null ? void 0 : j.total_charge) != "0.00" && h.jsx("td", {
                                            className: "px-6 py-4",
                                            children: q == null ? void 0 : q.charge
                                        }), h.jsx("td", {
                                            className: "px-6 py-4",
                                            children: q == null ? void 0 : q.amount
                                        }), h.jsx("td", {
                                            className: "px-6 py-4",
                                            children: q == null ? void 0 : q.status
                                        })]
                                    }, ae)
                                }
                                )
                            })]
                        })
                    })
                }), h.jsxs("div", {
                    className: "flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 mx-4 gap-2",
                    children: [h.jsx("div", {
                        className: "w-full sm:w-auto",
                        children: h.jsxs("p", {
                            className: "text-[10px] font-light text-red-500",
                            children: ["* ", (Z = i == null ? void 0 : i.lblPaymentSuccessQueue) == null ? void 0 : Z[l]]
                        })
                    }), h.jsxs("div", {
                        className: " text-black font-light text-sm p-2 w-full sm:w-auto",
                        children: [((I = c == null ? void 0 : c.data) == null ? void 0 : I.total_charge) != "0.00" && h.jsxs("div", {
                            className: "grid grid-cols-2 gap-2 text-right",
                            children: [h.jsx("p", {
                                className: "text-left",
                                children: "Total Charges:"
                            }), h.jsxs("p", {
                                children: ["BDT ", (Q = c == null ? void 0 : c.data) == null ? void 0 : Q.total_charge]
                            })]
                        }), h.jsxs("div", {
                            className: "grid grid-cols-2 gap-2 text-right",
                            children: [h.jsx("p", {
                                className: "text-left",
                                children: "Total Fees :"
                            }), h.jsxs("p", {
                                children: ["BDT ", (ie = c == null ? void 0 : c.data) == null ? void 0 : ie.total_fees]
                            })]
                        })]
                    })]
                }), h.jsxs("div", {
                    className: "flex justify-center items-center mt-4 mx-4",
                    children: [h.jsxs("a", {
                        target: "_blank",
                        href: (fe = c == null ? void 0 : c.data) == null ? void 0 : fe.download_invoice_url,
                        className: "flex items-center gap-2 flex-wrap text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",
                        children: [h.jsx(D0, {}), h.jsx("span", {
                            children: (de = i == null ? void 0 : i.btnDownPDF) == null ? void 0 : de[l]
                        })]
                    }), h.jsxs("a", {
                        type: "button",
                        target: "_blank",
                        href: (ce = c == null ? void 0 : c.data) == null ? void 0 : ce.print_invoice_url,
                        className: "hover:cursor-pointer flex text-white bg-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",
                        children: [h.jsx(_0, {}), " ", (oe = i == null ? void 0 : i.btnPrintPDF) == null ? void 0 : oe[l]]
                    }), h.jsx("button", {
                        type: "button",
                        disabled: p >= 5,
                        onClick: _,
                        className: `text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
                            ${p >= 5 ? "bg-gray-400 cursor-not-allowed" : "hover:cursor-pointer bg-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800"}
                           `,
                        children: (ee = i == null ? void 0 : i.makeNewPayment) == null ? void 0 : ee[l]
                    })]
                })]
            })]
        })
    }))
}
  , Aw = () => {
    var x, T, w;
    const {language: n, translations: l} = st()
      , i = ir()
      , o = ya()
      , [c,f] = S.useState( () => !!localStorage.getItem("access_token"))
      , d = localStorage.getItem("auth_photo")
      , g = localStorage.getItem("auth_name") ? localStorage.getItem("auth_name") : "User Name";
    S.useEffect( () => {
        const N = () => {
            f(!!localStorage.getItem("access_token"))
        }
        ;
        return window.addEventListener("storage", N),
        window.addEventListener("tokenUpdate", N),
        () => {
            window.removeEventListener("storage", N),
            window.removeEventListener("tokenUpdate", N)
        }
    }
    , []);
    const p = i.pathname === "/payment-status"
      , m = () => {
        o(p ? -1 : "/payment-status")
    }
      , y = () => {
        localStorage.clear(),
        f(!1),
        window.dispatchEvent(new Event("tokenUpdate")),
        o("/")
    }
    ;
    return h.jsxs("div", {
        className: "md:px-8 py-4 flex justify-between flex-col lg:flex-row items-center gap-4",
        children: [h.jsx(re.div, {
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
            children: h.jsx("img", {
                src: ij,
                alt: "SIB Logo",
                className: "w-56 cursor-pointer",
                onClick: y
            })
        }), h.jsxs(re.div, {
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
            children: [h.jsx("button", {
                onClick: m,
                className: "bg-cyan-500 item-shadow hover-scale uppercase text-sm hover:bg-cyan-600 hover:cursor-pointer text-white px-3 py-2 rounded-md",
                children: p ? (x = l == null ? void 0 : l.bckToPay) == null ? void 0 : x[n] : (T = l == null ? void 0 : l.QueryPay) == null ? void 0 : T[n]
            }), h.jsx("div", {
                className: "flex flex-row items-center gap-2",
                children: c && h.jsxs(h.Fragment, {
                    children: [h.jsxs("p", {
                        className: "flex items-center justify-center gap-1 text-sm",
                        children: [d ? h.jsx("img", {
                            src: `${d}`,
                            alt: "User",
                            className: "w-6 h-6 rounded-full object-cover"
                        }) : h.jsx(WT, {}), " ", g]
                    }), h.jsx("span", {
                        children: "|"
                    }), h.jsxs("p", {
                        className: "text-sm hover:cursor-pointer text-red-500",
                        onClick: y,
                        children: ["[ ", (w = l == null ? void 0 : l.logout_button) == null ? void 0 : w[n], " ]"]
                    })]
                })
            })]
        })]
    })
}
  , Nw = () => h.jsx("div", {
    className: "px-8 py-4 flex justify-center md:justify-end items-center",
    children: h.jsx("div", {
        className: "flex items-center gap-2 text-sm text-gray-600",
        children: h.jsx("img", {
            src: sj,
            alt: "SSL Logo",
            className: " w-80"
        })
    })
})
  , Fg = ({children: n}) => localStorage.getItem("access_token") ? h.jsx(F0, {
    to: "/application",
    replace: !0
}) : n
  , Ew = ({children: n}) => localStorage.getItem("access_token") ? n : h.jsx(F0, {
    to: "/",
    replace: !0
})
  , Cw = S.createContext({
    hasToken: !1,
    setHasToken: () => {}
})
  , Dw = ({children: n}) => {
    const [l,i] = S.useState(!!localStorage.getItem("access_token"));
    return S.useEffect( () => {
        const o = () => {
            i(!!localStorage.getItem("access_token"))
        }
        ;
        return window.addEventListener("tokenUpdate", o),
        () => {
            window.removeEventListener("tokenUpdate", o)
        }
    }
    , []),
    h.jsx(Cw.Provider, {
        value: {
            hasToken: l,
            setHasToken: i
        },
        children: n
    })
}
  , _w = () => {
    const [n,l] = S.useState(!0)
      , [i,o] = S.useState(!1);
    return S.useEffect( () => {
        const c = setTimeout( () => {
            o(!0)
        }
        , 3e3);
        return () => clearTimeout(c)
    }
    , []),
    n ? h.jsx(h.Fragment, {
        children: h.jsx(re.div, {
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
            children: n && h.jsx("div", {
                className: "fixed inset-0 backdrop-blur-sm backdrop-brightness-75 flex justify-center items-center z-50",
                children: h.jsxs("div", {
                    className: "bg-white max-h-[90vh] w-full max-w-2xl p-6 rounded-lg overflow-y-auto scrollbar-hide relative",
                    children: [i && h.jsx("button", {
                        onClick: () => l(!1),
                        className: "absolute top-2 right-2 text-gray-500 hover:text-red-500 hover:cursor-pointer mb-4",
                        children: "✕"
                    }), h.jsxs("div", {
                        className: "space-y-4 text-sm text-gray-800",
                        children: [h.jsx("div", {
                            className: "w-full text-red-500 text-center font-bold text-lg bg-white z-100",
                            children: "জরুরি বিজ্ঞপ্তি"
                        }), h.jsxs("div", {
                            className: "text-gray-700 font-light text-xs",
                            children: [h.jsx("p", {
                                children: "ভিসা পেমেন্ট এর পূর্বে ভিডিও টি দেখে নিন।"
                            }), h.jsx("p", {
                                children: "Please watch the video before proceeding for visa payment."
                            })]
                        }), h.jsx("div", {
                            className: "aspect-w-16  h-[400px] mb-4",
                            children: h.jsx("iframe", {
                                className: "w-full h-full rounded",
                                src: "https://www.youtube.com/embed/ckFsAX727LM",
                                title: "YouTube video",
                                frameBorder: "0",
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                allowFullScreen: !0
                            })
                        }), h.jsx("div", {
                            className: "text-black font-semibold text-sm",
                            children: "ভিসা আবেদন পত্র জমা দেয়ার স্লট নেয়ার জন্য কি করণীয় এবং কি করবেন না"
                        }), h.jsxs("div", {
                            className: "text-black font-normal text-sm my-1",
                            children: [h.jsx("p", {
                                children: "১. বুকিংয়ের জন্য স্লট খোলার আগে সমস্ত নথি প্রস্তুত রাখুন।"
                            }), h.jsx("p", {
                                children: "[অনলাইন আবেদনপত্র, ব্যক্তিগত যোগাযোগ নম্বর সহ মোবাইল হ্যান্ডসেট (OTP যাচাইকরণের জন্য), আবেদনকারীর ছবির ফরমেটে হবে jpg/png(সাইজ হবে সর্বোচ্চ ২ এমবি)]এগুলো ডেস্কটপ/মোবাইলে সংরক্ষিত রাখুন যেন রেজিস্ট্রেশনের সময় সহজে আপলোড করতে পারেন ।"
                            }), h.jsx("p", {
                                children: "২. প্রথমবার নিবন্ধনের জন্য লগইন আইডি এবং পাসওয়ার্ড তৈরি করতে হবে।"
                            }), h.jsx("p", {
                                children: "৩. একটি একক বুকিং সেশনের অধীনে একটি একক লগইন আইডির মাধ্যমে সর্বাধিক ৫ জনের বুকিং করা যেতে পারে।"
                            }), h.jsx("p", {
                                children: "৪. একটি একক লগইন আইডির মাধ্যমে বুক করা স্লটগুলি একই ভিসা আবেদনকারি হতে হবে৷ একই লগইন আইডির মাধ্যমে অসংলগ্ন অ্যাপ্লিকেশন লক্ষ্য করা গেলে পেমেন্ট ইনভয়েস বাতিল করা হবে।"
                            }), h.jsx("p", {
                                children: "৫. স্লট বুকিং নিয়ে এগিয়ে যাওয়ার আগে অ্যাপ্লিকেশন তথ্য ট্যাবে পরিবারের সকল সদস্যদের তথ্য যোগ করুন ।"
                            }), h.jsx("p", {
                                children: "৬. অনুগ্রহ করে ১৫ মিনিটের মধ্যে আপনার স্লট বুকিং সম্পূর্ণ করুন,না করতে পরলে সেশনের মেয়াদ শেষ হবে এবং নতুন লগইন প্রয়োজন হবে।"
                            }), h.jsx("p", {
                                children: "৭. আবেদনপত্র IVAC-সেন্টারে জমা দেওয়ার সময় আপনার ব্যক্তিগত যোগাযোগ নম্বর সঙ্গে রাখুন।যা OTP যাচাইকরণ এবং অ্যাপয়েন্টমেন্ট বুকিংয়ের জন্য ব্যবহৃত হয়েছে।"
                            }), h.jsx("p", {
                                children: "৮. ভারতীয় ভিসার জন্য কোন অনুমোদিত এজেন্ট বা দালাল নেই।এটি একই সাথে সংযুক্তি আত্মসাৎ এবং চাঁদাবাজির ঝুঁকি বহন করে।"
                            }), h.jsx("p", {
                                children: "৯. এটি একটি গুরুত্বপূর্ণ বিষয়, যেখানে অসাধু উপাদানগুলি একাধিক পেমেন্ট চ্যানেল ব্যবহার করে কৃত্রিম ট্র্যাফিক তৈরি করছে এবং প্রকৃত আবেদনকারীদের জন্য সমস্যা সৃষ্টি করছে। এই ধরনের কার্যকলাপের বিরুদ্ধে কঠোর ব্যবস্থা গ্রহণ করা উচিত এবং যথাযথ পদক্ষেপ গ্রহণ করা দরকার, যেমন একাধিক পেমেন্টের ক্ষেত্রে ফেরত না দেওয়া। এটি কেবল অসাধু কার্যকলাপের প্রতি একটি কঠিন বার্তা পাঠাবে না, বরং প্রকৃত আবেদনকারীদের জন্য সিস্টেমটিকে আরও সুষ্ঠু এবং কার্যকরী করতে সাহায্য করবে।"
                            })]
                        }), h.jsx("div", {
                            className: "w-2/3 h-0.5 bg-red-600 mx-auto"
                        }), h.jsx("div", {
                            className: "text-black font-semibold text-sm",
                            children: "Do’s and Don’ts (Online Payment and Appointment)"
                        }), h.jsxs("div", {
                            className: "text-black font-normal text-sm py-1",
                            children: [h.jsx("p", {
                                children: "1. Keep all documents ready, before slot opens for booking. [Online application form, mobile handset with personal contact no.(for OTP verification), applicant photograph in jpg, png format (max 2MB size) saved in Desktop/mobile for easy upload during registration.]"
                            }), h.jsx("p", {
                                children: "2. Login ID and password will have to be created for first time registration before proceeding with appointment."
                            }), h.jsx("p", {
                                children: "3. Maximum 5 persons’ booking can be done through one single login ID under a single booking session."
                            }), h.jsx("p", {
                                children: "4. The booked slots through one single Login ID should be for the same Visa application/journey. Unrelated applications through same login ID, under 1 payment invoice will be cancelled."
                            }), h.jsx("p", {
                                children: "5. Add all family members in Application Info tab before proceeding with slot booking."
                            }), h.jsx("p", {
                                children: "6. Please complete total slot booking within 15 minutes, after which session will expire and fresh login will be required."
                            }), h.jsx("p", {
                                children: "7. During Submission at IVAC on Appointment date, invariably carry your personal contact no. used for OTP validation and appointment booking."
                            }), h.jsxs("p", {
                                children: ["8. ", h.jsx("span", {
                                    className: "font-bold",
                                    children: "There are no authorized agents or brokers for Indian Visa."
                                }), " Association with the same carries risk of embezzlement and extortion."]
                            }), h.jsx("p", {
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
function Mw() {
    const {isLoading: n, error: l, refreshData: i} = Bf()
      , [o,c] = S.useState("")
      , [f,d] = S.useState("")
      , g = window.location.pathname === "/";
    return S.useEffect( () => {
        const p = localStorage.getItem("authStep");
        p && d(p)
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
    S.useEffect( () => {
        !n && l && (c(l),
        i())
    }
    , [l, n, i]),
    n ? h.jsx(rj, {
        message: o || "Loading, please wait..."
    }) : h.jsx(Dw, {
        children: h.jsx(ej, {
            children: h.jsx(rw, {
                children: h.jsxs("div", {
                    className: "flex flex-col md:h-screen",
                    children: [h.jsx(nj, {}), h.jsxs("div", {
                        className: "flex flex-1 flex-col md:flex-row overflow-hidden",
                        children: [h.jsx("div", {
                            className: "w-full md:w-1/3 lg:w-1/4 bg-gray-800 md:h-screen h-full scrollbar-hide pb-4",
                            children: h.jsx(tj, {})
                        }), h.jsxs("div", {
                            className: "w-full md:flex-1 overflow-y-auto bg-gray-50 p-4 flex flex-col bg-cover bg-center",
                            style: {
                                backgroundImage: `url(${R0})`
                            },
                            children: [h.jsx("div", {
                                className: "mb-4",
                                children: h.jsx(Aw, {})
                            }), h.jsx("div", {
                                className: "flex-1",
                                children: h.jsxs(iw, {
                                    children: [h.jsx(ns, {
                                        path: "/",
                                        element: h.jsx(Fg, {
                                            children: h.jsx(Sw, {})
                                        })
                                    }), h.jsx(ns, {
                                        path: "/payment-status",
                                        element: h.jsx(Tw, {})
                                    }), h.jsx(ns, {
                                        path: "/application",
                                        element: h.jsx(Ew, {
                                            children: h.jsx(jw, {})
                                        })
                                    }), h.jsx(ns, {
                                        path: "/payment-response/:id",
                                        element: h.jsx(Fg, {
                                            children: h.jsx(ww, {})
                                        })
                                    })]
                                })
                            }), f === "1" && g && h.jsx(_w, {}), h.jsx(Nw, {})]
                        })]
                    })]
                })
            })
        })
    })
}
mb.createRoot(document.getElementById("root")).render(h.jsx(S.StrictMode, {
    children: h.jsx(pw, {
        children: h.jsx(Mw, {})
    })
}));
