function ab(n, l) {
    for (var i = 0; i < l.length; i++) {
        const o = l[i];
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
                for (const f of h.addedNodes)
                    f.tagName === "LINK" && f.rel === "modulepreload" && o(f)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function i(c) {
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
        const h = i(c);
        fetch(c.href, h)
    }
}
)();
function Zg(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
var rc = {
    exports: {}
}
  , Ji = {};
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
function nb() {
    if (mp)
        return Ji;
    mp = 1;
    var n = Symbol.for("react.transitional.element")
      , l = Symbol.for("react.fragment");
    function i(o, c, h) {
        var f = null;
        if (h !== void 0 && (f = "" + h),
        c.key !== void 0 && (f = "" + c.key),
        "key"in c) {
            h = {};
            for (var m in c)
                m !== "key" && (h[m] = c[m])
        } else
            h = c;
        return c = h.ref,
        {
            $$typeof: n,
            type: o,
            key: f,
            ref: c !== void 0 ? c : null,
            props: h
        }
    }
    return Ji.Fragment = l,
    Ji.jsx = i,
    Ji.jsxs = i,
    Ji
}
var pp;
function lb() {
    return pp || (pp = 1,
    rc.exports = nb()),
    rc.exports
}
var d = lb()
  , uc = {
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
var gp;
function ib() {
    if (gp)
        return Ae;
    gp = 1;
    var n = Symbol.for("react.transitional.element")
      , l = Symbol.for("react.portal")
      , i = Symbol.for("react.fragment")
      , o = Symbol.for("react.strict_mode")
      , c = Symbol.for("react.profiler")
      , h = Symbol.for("react.consumer")
      , f = Symbol.for("react.context")
      , m = Symbol.for("react.forward_ref")
      , p = Symbol.for("react.suspense")
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
      , D = {};
    function M(j, q, J) {
        this.props = j,
        this.context = q,
        this.refs = D,
        this.updater = J || w
    }
    M.prototype.isReactComponent = {},
    M.prototype.setState = function(j, q) {
        if (typeof j != "object" && typeof j != "function" && j != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, j, q, "setState")
    }
    ,
    M.prototype.forceUpdate = function(j) {
        this.updater.enqueueForceUpdate(this, j, "forceUpdate")
    }
    ;
    function U() {}
    U.prototype = M.prototype;
    function P(j, q, J) {
        this.props = j,
        this.context = q,
        this.refs = D,
        this.updater = J || w
    }
    var B = P.prototype = new U;
    B.constructor = P,
    C(B, M.prototype),
    B.isPureReactComponent = !0;
    var G = Array.isArray
      , R = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null
    }
      , Z = Object.prototype.hasOwnProperty;
    function W(j, q, J, X, le, te) {
        return J = te.ref,
        {
            $$typeof: n,
            type: j,
            key: q,
            ref: J !== void 0 ? J : null,
            props: te
        }
    }
    function Q(j, q) {
        return W(j.type, q, void 0, void 0, void 0, j.props)
    }
    function ie(j) {
        return typeof j == "object" && j !== null && j.$$typeof === n
    }
    function fe(j) {
        var q = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + j.replace(/[=:]/g, function(J) {
            return q[J]
        })
    }
    var he = /\/+/g;
    function ce(j, q) {
        return typeof j == "object" && j !== null && j.key != null ? fe("" + j.key) : q.toString(36)
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
            j.then(function(q) {
                j.status === "pending" && (j.status = "fulfilled",
                j.value = q)
            }, function(q) {
                j.status === "pending" && (j.status = "rejected",
                j.reason = q)
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
    function k(j, q, J, X, le) {
        var te = typeof j;
        (te === "undefined" || te === "boolean") && (j = null);
        var I = !1;
        if (j === null)
            I = !0;
        else
            switch (te) {
            case "bigint":
            case "string":
            case "number":
                I = !0;
                break;
            case "object":
                switch (j.$$typeof) {
                case n:
                case l:
                    I = !0;
                    break;
                case v:
                    return I = j._init,
                    k(I(j._payload), q, J, X, le)
                }
            }
        if (I)
            return le = le(j),
            I = X === "" ? "." + ce(j, 0) : X,
            G(le) ? (J = "",
            I != null && (J = I.replace(he, "$&/") + "/"),
            k(le, q, J, "", function(ye) {
                return ye
            })) : le != null && (ie(le) && (le = Q(le, J + (le.key == null || j && j.key === le.key ? "" : ("" + le.key).replace(he, "$&/") + "/") + I)),
            q.push(le)),
            1;
        I = 0;
        var Se = X === "" ? "." : X + ":";
        if (G(j))
            for (var Te = 0; Te < j.length; Te++)
                X = j[Te],
                te = Se + ce(X, Te),
                I += k(X, q, J, te, le);
        else if (Te = S(j),
        typeof Te == "function")
            for (j = Te.call(j),
            Te = 0; !(X = j.next()).done; )
                X = X.value,
                te = Se + ce(X, Te++),
                I += k(X, q, J, te, le);
        else if (te === "object") {
            if (typeof j.then == "function")
                return k(ee(j), q, J, X, le);
            throw q = String(j),
            Error("Objects are not valid as a React child (found: " + (q === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : q) + "). If you meant to render a collection of children, use an array instead.")
        }
        return I
    }
    function N(j, q, J) {
        if (j == null)
            return j;
        var X = []
          , le = 0;
        return k(j, X, "", "", function(te) {
            return q.call(J, te, le++)
        }),
        X
    }
    function O(j) {
        if (j._status === -1) {
            var q = j._result;
            q = q(),
            q.then(function(J) {
                (j._status === 0 || j._status === -1) && (j._status = 1,
                j._result = J)
            }, function(J) {
                (j._status === 0 || j._status === -1) && (j._status = 2,
                j._result = J)
            }),
            j._status === -1 && (j._status = 0,
            j._result = q)
        }
        if (j._status === 1)
            return j._result.default;
        throw j._result
    }
    var L = typeof reportError == "function" ? reportError : function(j) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var q = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof j == "object" && j !== null && typeof j.message == "string" ? String(j.message) : String(j),
                error: j
            });
            if (!window.dispatchEvent(q))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", j);
            return
        }
        console.error(j)
    }
    ;
    function ae() {}
    return Ae.Children = {
        map: N,
        forEach: function(j, q, J) {
            N(j, function() {
                q.apply(this, arguments)
            }, J)
        },
        count: function(j) {
            var q = 0;
            return N(j, function() {
                q++
            }),
            q
        },
        toArray: function(j) {
            return N(j, function(q) {
                return q
            }) || []
        },
        only: function(j) {
            if (!ie(j))
                throw Error("React.Children.only expected to receive a single React element child.");
            return j
        }
    },
    Ae.Component = M,
    Ae.Fragment = i,
    Ae.Profiler = c,
    Ae.PureComponent = P,
    Ae.StrictMode = o,
    Ae.Suspense = p,
    Ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = R,
    Ae.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(j) {
            return R.H.useMemoCache(j)
        }
    },
    Ae.cache = function(j) {
        return function() {
            return j.apply(null, arguments)
        }
    }
    ,
    Ae.cloneElement = function(j, q, J) {
        if (j == null)
            throw Error("The argument must be a React element, but you passed " + j + ".");
        var X = C({}, j.props)
          , le = j.key
          , te = void 0;
        if (q != null)
            for (I in q.ref !== void 0 && (te = void 0),
            q.key !== void 0 && (le = "" + q.key),
            q)
                !Z.call(q, I) || I === "key" || I === "__self" || I === "__source" || I === "ref" && q.ref === void 0 || (X[I] = q[I]);
        var I = arguments.length - 2;
        if (I === 1)
            X.children = J;
        else if (1 < I) {
            for (var Se = Array(I), Te = 0; Te < I; Te++)
                Se[Te] = arguments[Te + 2];
            X.children = Se
        }
        return W(j.type, le, void 0, void 0, te, X)
    }
    ,
    Ae.createContext = function(j) {
        return j = {
            $$typeof: f,
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
    Ae.createElement = function(j, q, J) {
        var X, le = {}, te = null;
        if (q != null)
            for (X in q.key !== void 0 && (te = "" + q.key),
            q)
                Z.call(q, X) && X !== "key" && X !== "__self" && X !== "__source" && (le[X] = q[X]);
        var I = arguments.length - 2;
        if (I === 1)
            le.children = J;
        else if (1 < I) {
            for (var Se = Array(I), Te = 0; Te < I; Te++)
                Se[Te] = arguments[Te + 2];
            le.children = Se
        }
        if (j && j.defaultProps)
            for (X in I = j.defaultProps,
            I)
                le[X] === void 0 && (le[X] = I[X]);
        return W(j, te, void 0, void 0, null, le)
    }
    ,
    Ae.createRef = function() {
        return {
            current: null
        }
    }
    ,
    Ae.forwardRef = function(j) {
        return {
            $$typeof: m,
            render: j
        }
    }
    ,
    Ae.isValidElement = ie,
    Ae.lazy = function(j) {
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
    Ae.memo = function(j, q) {
        return {
            $$typeof: g,
            type: j,
            compare: q === void 0 ? null : q
        }
    }
    ,
    Ae.startTransition = function(j) {
        var q = R.T
          , J = {};
        R.T = J;
        try {
            var X = j()
              , le = R.S;
            le !== null && le(J, X),
            typeof X == "object" && X !== null && typeof X.then == "function" && X.then(ae, L)
        } catch (te) {
            L(te)
        } finally {
            R.T = q
        }
    }
    ,
    Ae.unstable_useCacheRefresh = function() {
        return R.H.useCacheRefresh()
    }
    ,
    Ae.use = function(j) {
        return R.H.use(j)
    }
    ,
    Ae.useActionState = function(j, q, J) {
        return R.H.useActionState(j, q, J)
    }
    ,
    Ae.useCallback = function(j, q) {
        return R.H.useCallback(j, q)
    }
    ,
    Ae.useContext = function(j) {
        return R.H.useContext(j)
    }
    ,
    Ae.useDebugValue = function() {}
    ,
    Ae.useDeferredValue = function(j, q) {
        return R.H.useDeferredValue(j, q)
    }
    ,
    Ae.useEffect = function(j, q, J) {
        var X = R.H;
        if (typeof J == "function")
            throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return X.useEffect(j, q)
    }
    ,
    Ae.useId = function() {
        return R.H.useId()
    }
    ,
    Ae.useImperativeHandle = function(j, q, J) {
        return R.H.useImperativeHandle(j, q, J)
    }
    ,
    Ae.useInsertionEffect = function(j, q) {
        return R.H.useInsertionEffect(j, q)
    }
    ,
    Ae.useLayoutEffect = function(j, q) {
        return R.H.useLayoutEffect(j, q)
    }
    ,
    Ae.useMemo = function(j, q) {
        return R.H.useMemo(j, q)
    }
    ,
    Ae.useOptimistic = function(j, q) {
        return R.H.useOptimistic(j, q)
    }
    ,
    Ae.useReducer = function(j, q, J) {
        return R.H.useReducer(j, q, J)
    }
    ,
    Ae.useRef = function(j) {
        return R.H.useRef(j)
    }
    ,
    Ae.useState = function(j) {
        return R.H.useState(j)
    }
    ,
    Ae.useSyncExternalStore = function(j, q, J) {
        return R.H.useSyncExternalStore(j, q, J)
    }
    ,
    Ae.useTransition = function() {
        return R.H.useTransition()
    }
    ,
    Ae.version = "19.1.0",
    Ae
}
var yp;
function Fo() {
    return yp || (yp = 1,
    uc.exports = ib()),
    uc.exports
}
var T = Fo();
const sb = Zg(T)
  , ob = ab({
    __proto__: null,
    default: sb
}, [T]);
var cc = {
    exports: {}
}
  , Ii = {}
  , fc = {
    exports: {}
}
  , dc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vp;
function rb() {
    return vp || (vp = 1,
    function(n) {
        function l(N, O) {
            var L = N.length;
            N.push(O);
            e: for (; 0 < L; ) {
                var ae = L - 1 >>> 1
                  , j = N[ae];
                if (0 < c(j, O))
                    N[ae] = O,
                    N[L] = j,
                    L = ae;
                else
                    break e
            }
        }
        function i(N) {
            return N.length === 0 ? null : N[0]
        }
        function o(N) {
            if (N.length === 0)
                return null;
            var O = N[0]
              , L = N.pop();
            if (L !== O) {
                N[0] = L;
                e: for (var ae = 0, j = N.length, q = j >>> 1; ae < q; ) {
                    var J = 2 * (ae + 1) - 1
                      , X = N[J]
                      , le = J + 1
                      , te = N[le];
                    if (0 > c(X, L))
                        le < j && 0 > c(te, X) ? (N[ae] = te,
                        N[le] = L,
                        ae = le) : (N[ae] = X,
                        N[J] = L,
                        ae = J);
                    else if (le < j && 0 > c(te, L))
                        N[ae] = te,
                        N[le] = L,
                        ae = le;
                    else
                        break e
                }
            }
            return O
        }
        function c(N, O) {
            var L = N.sortIndex - O.sortIndex;
            return L !== 0 ? L : N.id - O.id
        }
        if (n.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var h = performance;
            n.unstable_now = function() {
                return h.now()
            }
        } else {
            var f = Date
              , m = f.now();
            n.unstable_now = function() {
                return f.now() - m
            }
        }
        var p = []
          , g = []
          , v = 1
          , x = null
          , S = 3
          , w = !1
          , C = !1
          , D = !1
          , M = !1
          , U = typeof setTimeout == "function" ? setTimeout : null
          , P = typeof clearTimeout == "function" ? clearTimeout : null
          , B = typeof setImmediate < "u" ? setImmediate : null;
        function G(N) {
            for (var O = i(g); O !== null; ) {
                if (O.callback === null)
                    o(g);
                else if (O.startTime <= N)
                    o(g),
                    O.sortIndex = O.expirationTime,
                    l(p, O);
                else
                    break;
                O = i(g)
            }
        }
        function R(N) {
            if (D = !1,
            G(N),
            !C)
                if (i(p) !== null)
                    C = !0,
                    Z || (Z = !0,
                    ce());
                else {
                    var O = i(g);
                    O !== null && k(R, O.startTime - N)
                }
        }
        var Z = !1
          , W = -1
          , Q = 5
          , ie = -1;
        function fe() {
            return M ? !0 : !(n.unstable_now() - ie < Q)
        }
        function he() {
            if (M = !1,
            Z) {
                var N = n.unstable_now();
                ie = N;
                var O = !0;
                try {
                    e: {
                        C = !1,
                        D && (D = !1,
                        P(W),
                        W = -1),
                        w = !0;
                        var L = S;
                        try {
                            t: {
                                for (G(N),
                                x = i(p); x !== null && !(x.expirationTime > N && fe()); ) {
                                    var ae = x.callback;
                                    if (typeof ae == "function") {
                                        x.callback = null,
                                        S = x.priorityLevel;
                                        var j = ae(x.expirationTime <= N);
                                        if (N = n.unstable_now(),
                                        typeof j == "function") {
                                            x.callback = j,
                                            G(N),
                                            O = !0;
                                            break t
                                        }
                                        x === i(p) && o(p),
                                        G(N)
                                    } else
                                        o(p);
                                    x = i(p)
                                }
                                if (x !== null)
                                    O = !0;
                                else {
                                    var q = i(g);
                                    q !== null && k(R, q.startTime - N),
                                    O = !1
                                }
                            }
                            break e
                        } finally {
                            x = null,
                            S = L,
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
                B(he)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var re = new MessageChannel
              , ee = re.port2;
            re.port1.onmessage = he,
            ce = function() {
                ee.postMessage(null)
            }
        } else
            ce = function() {
                U(he, 0)
            }
            ;
        function k(N, O) {
            W = U(function() {
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
            0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Q = 0 < N ? Math.floor(1e3 / N) : 5
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
            var L = S;
            S = O;
            try {
                return N()
            } finally {
                S = L
            }
        }
        ,
        n.unstable_requestPaint = function() {
            M = !0
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
            var L = S;
            S = N;
            try {
                return O()
            } finally {
                S = L
            }
        }
        ,
        n.unstable_scheduleCallback = function(N, O, L) {
            var ae = n.unstable_now();
            switch (typeof L == "object" && L !== null ? (L = L.delay,
            L = typeof L == "number" && 0 < L ? ae + L : ae) : L = ae,
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
            return j = L + j,
            N = {
                id: v++,
                callback: O,
                priorityLevel: N,
                startTime: L,
                expirationTime: j,
                sortIndex: -1
            },
            L > ae ? (N.sortIndex = L,
            l(g, N),
            i(p) === null && N === i(g) && (D ? (P(W),
            W = -1) : D = !0,
            k(R, L - ae))) : (N.sortIndex = j,
            l(p, N),
            C || w || (C = !0,
            Z || (Z = !0,
            ce()))),
            N
        }
        ,
        n.unstable_shouldYield = fe,
        n.unstable_wrapCallback = function(N) {
            var O = S;
            return function() {
                var L = S;
                S = O;
                try {
                    return N.apply(this, arguments)
                } finally {
                    S = L
                }
            }
        }
    }(dc)),
    dc
}
var xp;
function ub() {
    return xp || (xp = 1,
    fc.exports = rb()),
    fc.exports
}
var hc = {
    exports: {}
}
  , Lt = {};
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
function cb() {
    if (bp)
        return Lt;
    bp = 1;
    var n = Fo();
    function l(p) {
        var g = "https://react.dev/errors/" + p;
        if (1 < arguments.length) {
            g += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var v = 2; v < arguments.length; v++)
                g += "&args[]=" + encodeURIComponent(arguments[v])
        }
        return "Minified React error #" + p + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
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
    function h(p, g, v) {
        var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: c,
            key: x == null ? null : "" + x,
            children: p,
            containerInfo: g,
            implementation: v
        }
    }
    var f = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function m(p, g) {
        if (p === "font")
            return "";
        if (typeof g == "string")
            return g === "use-credentials" ? g : ""
    }
    return Lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o,
    Lt.createPortal = function(p, g) {
        var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
            throw Error(l(299));
        return h(p, g, null, v)
    }
    ,
    Lt.flushSync = function(p) {
        var g = f.T
          , v = o.p;
        try {
            if (f.T = null,
            o.p = 2,
            p)
                return p()
        } finally {
            f.T = g,
            o.p = v,
            o.d.f()
        }
    }
    ,
    Lt.preconnect = function(p, g) {
        typeof p == "string" && (g ? (g = g.crossOrigin,
        g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null,
        o.d.C(p, g))
    }
    ,
    Lt.prefetchDNS = function(p) {
        typeof p == "string" && o.d.D(p)
    }
    ,
    Lt.preinit = function(p, g) {
        if (typeof p == "string" && g && typeof g.as == "string") {
            var v = g.as
              , x = m(v, g.crossOrigin)
              , S = typeof g.integrity == "string" ? g.integrity : void 0
              , w = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
            v === "style" ? o.d.S(p, typeof g.precedence == "string" ? g.precedence : void 0, {
                crossOrigin: x,
                integrity: S,
                fetchPriority: w
            }) : v === "script" && o.d.X(p, {
                crossOrigin: x,
                integrity: S,
                fetchPriority: w,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0
            })
        }
    }
    ,
    Lt.preinitModule = function(p, g) {
        if (typeof p == "string")
            if (typeof g == "object" && g !== null) {
                if (g.as == null || g.as === "script") {
                    var v = m(g.as, g.crossOrigin);
                    o.d.M(p, {
                        crossOrigin: v,
                        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                        nonce: typeof g.nonce == "string" ? g.nonce : void 0
                    })
                }
            } else
                g == null && o.d.M(p)
    }
    ,
    Lt.preload = function(p, g) {
        if (typeof p == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
            var v = g.as
              , x = m(v, g.crossOrigin);
            o.d.L(p, v, {
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
    Lt.preloadModule = function(p, g) {
        if (typeof p == "string")
            if (g) {
                var v = m(g.as, g.crossOrigin);
                o.d.m(p, {
                    as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
                    crossOrigin: v,
                    integrity: typeof g.integrity == "string" ? g.integrity : void 0
                })
            } else
                o.d.m(p)
    }
    ,
    Lt.requestFormReset = function(p) {
        o.d.r(p)
    }
    ,
    Lt.unstable_batchedUpdates = function(p, g) {
        return p(g)
    }
    ,
    Lt.useFormState = function(p, g, v) {
        return f.H.useFormState(p, g, v)
    }
    ,
    Lt.useFormStatus = function() {
        return f.H.useHostTransitionStatus()
    }
    ,
    Lt.version = "19.1.0",
    Lt
}
var Sp;
function Qg() {
    if (Sp)
        return hc.exports;
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
    hc.exports = cb(),
    hc.exports
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
var Tp;
function fb() {
    if (Tp)
        return Ii;
    Tp = 1;
    var n = ub()
      , l = Fo()
      , i = Qg();
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
    function f(e) {
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
                        return m(r),
                        e;
                    if (u === s)
                        return m(r),
                        t;
                    u = u.sibling
                }
                throw Error(o(188))
            }
            if (a.return !== s.return)
                a = r,
                s = u;
            else {
                for (var y = !1, b = r.child; b; ) {
                    if (b === a) {
                        y = !0,
                        a = r,
                        s = u;
                        break
                    }
                    if (b === s) {
                        y = !0,
                        s = r,
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
                            s = r;
                            break
                        }
                        if (b === s) {
                            y = !0,
                            s = u,
                            a = r;
                            break
                        }
                        b = b.sibling
                    }
                    if (!y)
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
      , D = Symbol.for("react.strict_mode")
      , M = Symbol.for("react.profiler")
      , U = Symbol.for("react.provider")
      , P = Symbol.for("react.consumer")
      , B = Symbol.for("react.context")
      , G = Symbol.for("react.forward_ref")
      , R = Symbol.for("react.suspense")
      , Z = Symbol.for("react.suspense_list")
      , W = Symbol.for("react.memo")
      , Q = Symbol.for("react.lazy")
      , ie = Symbol.for("react.activity")
      , fe = Symbol.for("react.memo_cache_sentinel")
      , he = Symbol.iterator;
    function ce(e) {
        return e === null || typeof e != "object" ? null : (e = he && e[he] || e["@@iterator"],
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
        case M:
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
            case P:
                return (e._context.displayName || "Context") + ".Consumer";
            case G:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case W:
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
    var k = Array.isArray
      , N = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , O = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , L = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , ae = []
      , j = -1;
    function q(e) {
        return {
            current: e
        }
    }
    function J(e) {
        0 > j || (e.current = ae[j],
        ae[j] = null,
        j--)
    }
    function X(e, t) {
        j++,
        ae[j] = e.current,
        e.current = t
    }
    var le = q(null)
      , te = q(null)
      , I = q(null)
      , Se = q(null);
    function Te(e, t) {
        switch (X(I, t),
        X(te, e),
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
        J(le),
        X(le, e)
    }
    function ye() {
        J(le),
        J(te),
        J(I)
    }
    function ze(e) {
        e.memoizedState !== null && X(Se, e);
        var t = le.current
          , a = Ym(t, e.type);
        t !== a && (X(te, e),
        X(le, a))
    }
    function Ue(e) {
        te.current === e && (J(le),
        J(te)),
        Se.current === e && (J(Se),
        Xi._currentValue = L)
    }
    var Le = Object.prototype.hasOwnProperty
      , Ct = n.unstable_scheduleCallback
      , je = n.unstable_cancelCallback
      , et = n.unstable_shouldYield
      , la = n.unstable_requestPaint
      , ct = n.unstable_now
      , Ca = n.unstable_getCurrentPriorityLevel
      , Da = n.unstable_ImmediatePriority
      , Ma = n.unstable_UserBlockingPriority
      , ia = n.unstable_NormalPriority
      , ka = n.unstable_LowPriority
      , we = n.unstable_IdlePriority
      , sa = n.log
      , Ta = n.unstable_setDisableYieldValue
      , Jt = null
      , gt = null;
    function Ht(e) {
        if (typeof sa == "function" && Ta(e),
        gt && typeof gt.setStrictMode == "function")
            try {
                gt.setStrictMode(Jt, e)
            } catch {}
    }
    var ft = Math.clz32 ? Math.clz32 : tt
      , se = Math.log
      , me = Math.LN2;
    function tt(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (se(e) / me | 0) | 0
    }
    var Ce = 256
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
    function Re(e, t, a) {
        var s = e.pendingLanes;
        if (s === 0)
            return 0;
        var r = 0
          , u = e.suspendedLanes
          , y = e.pingedLanes;
        e = e.warmLanes;
        var b = s & 134217727;
        return b !== 0 ? (s = b & ~u,
        s !== 0 ? r = Je(s) : (y &= b,
        y !== 0 ? r = Je(y) : a || (a = b & ~e,
        a !== 0 && (r = Je(a))))) : (b = s & ~u,
        b !== 0 ? r = Je(b) : y !== 0 ? r = Je(y) : a || (a = s & ~e,
        a !== 0 && (r = Je(a)))),
        r === 0 ? 0 : t !== 0 && t !== r && (t & u) === 0 && (u = r & -r,
        a = t & -t,
        u >= a || u === 32 && (a & 4194048) !== 0) ? t : r
    }
    function Yt(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }
    function zn(e, t) {
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
        var e = Ce;
        return Ce <<= 1,
        (Ce & 4194048) === 0 && (Ce = 256),
        e
    }
    function ne() {
        var e = Fe;
        return Fe <<= 1,
        (Fe & 62914560) === 0 && (Fe = 4194304),
        e
    }
    function be(e) {
        for (var t = [], a = 0; 31 > a; a++)
            t.push(e);
        return t
    }
    function yt(e, t) {
        e.pendingLanes |= t,
        t !== 268435456 && (e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0)
    }
    function Gt(e, t, a, s, r, u) {
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
            var K = 31 - ft(a)
              , $ = 1 << K;
            b[K] = 0,
            A[K] = -1;
            var H = z[K];
            if (H !== null)
                for (z[K] = null,
                K = 0; K < H.length; K++) {
                    var Y = H[K];
                    Y !== null && (Y.lane &= -536870913)
                }
            a &= ~$
        }
        s !== 0 && Wl(e, s, 0),
        u !== 0 && r === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(y & ~t))
    }
    function Wl(e, t, a) {
        e.pendingLanes |= t,
        e.suspendedLanes &= ~t;
        var s = 31 - ft(t);
        e.entangledLanes |= t,
        e.entanglements[s] = e.entanglements[s] | 1073741824 | a & 4194090
    }
    function ei(e, t) {
        var a = e.entangledLanes |= t;
        for (e = e.entanglements; a; ) {
            var s = 31 - ft(a)
              , r = 1 << s;
            r & t | e[s] & t && (e[s] |= t),
            a &= ~r
        }
    }
    function il(e) {
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
    function sl(e) {
        return e &= -e,
        2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function ti() {
        var e = O.p;
        return e !== 0 ? e : (e = window.event,
        e === void 0 ? 32 : rp(e.type))
    }
    function Ss(e, t) {
        var a = O.p;
        try {
            return O.p = e,
            t()
        } finally {
            O.p = a
        }
    }
    var ja = Math.random().toString(36).slice(2)
      , Tt = "__reactFiber$" + ja
      , Dt = "__reactProps$" + ja
      , Ha = "__reactContainer$" + ja
      , ol = "__reactEvents$" + ja
      , Ts = "__reactListeners$" + ja
      , js = "__reactHandles$" + ja
      , ai = "__reactResources$" + ja
      , Ne = "__reactMarker$" + ja;
    function De(e) {
        delete e[Tt],
        delete e[Dt],
        delete e[ol],
        delete e[Ts],
        delete e[js]
    }
    function ke(e) {
        var t = e[Tt];
        if (t)
            return t;
        for (var a = e.parentNode; a; ) {
            if (t = a[Ha] || a[Tt]) {
                if (a = t.alternate,
                t.child !== null || a !== null && a.child !== null)
                    for (e = Zm(e); e !== null; ) {
                        if (a = e[Tt])
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
    function Ve(e) {
        if (e = e[Tt] || e[Ha]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
                return e
        }
        return null
    }
    function He(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e.stateNode;
        throw Error(o(33))
    }
    function Mt(e) {
        var t = e[ai];
        return t || (t = e[ai] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        t
    }
    function dt(e) {
        e[Ne] = !0
    }
    var ni = new Set
      , it = {};
    function Ut(e, t) {
        Pa(e, t),
        Pa(e + "Capture", t)
    }
    function Pa(e, t) {
        for (it[e] = t,
        e = 0; e < t.length; e++)
            ni.add(t[e])
    }
    var ws = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , Rf = {}
      , Vf = {};
    function F0(e) {
        return Le.call(Vf, e) ? !0 : Le.call(Rf, e) ? !1 : ws.test(e) ? Vf[e] = !0 : (Rf[e] = !0,
        !1)
    }
    function As(e, t, a) {
        if (F0(t))
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
    function Ns(e, t, a) {
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
    function qa(e, t, a, s) {
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
    var ar, zf;
    function rl(e) {
        if (ar === void 0)
            try {
                throw Error()
            } catch (a) {
                var t = a.stack.trim().match(/\n( *(at )?)/);
                ar = t && t[1] || "",
                zf = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + ar + e + zf
    }
    var nr = !1;
    function lr(e, t) {
        if (!e || nr)
            return "";
        nr = !0;
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
              , y = u[0]
              , b = u[1];
            if (y && b) {
                var A = y.split(`
`)
                  , z = b.split(`
`);
                for (r = s = 0; s < A.length && !A[s].includes("DetermineComponentFrameRoot"); )
                    s++;
                for (; r < z.length && !z[r].includes("DetermineComponentFrameRoot"); )
                    r++;
                if (s === A.length || r === z.length)
                    for (s = A.length - 1,
                    r = z.length - 1; 1 <= s && 0 <= r && A[s] !== z[r]; )
                        r--;
                for (; 1 <= s && 0 <= r; s--,
                r--)
                    if (A[s] !== z[r]) {
                        if (s !== 1 || r !== 1)
                            do
                                if (s--,
                                r--,
                                0 > r || A[s] !== z[r]) {
                                    var K = `
` + A[s].replace(" at new ", " at ");
                                    return e.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", e.displayName)),
                                    K
                                }
                            while (1 <= s && 0 <= r);
                        break
                    }
            }
        } finally {
            nr = !1,
            Error.prepareStackTrace = a
        }
        return (a = e ? e.displayName || e.name : "") ? rl(a) : ""
    }
    function J0(e) {
        switch (e.tag) {
        case 26:
        case 27:
        case 5:
            return rl(e.type);
        case 16:
            return rl("Lazy");
        case 13:
            return rl("Suspense");
        case 19:
            return rl("SuspenseList");
        case 0:
        case 15:
            return lr(e.type, !1);
        case 11:
            return lr(e.type.render, !1);
        case 1:
            return lr(e.type, !0);
        case 31:
            return rl("Activity");
        default:
            return ""
        }
    }
    function Uf(e) {
        try {
            var t = "";
            do
                t += J0(e),
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
    function Bf(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function I0(e) {
        var t = Bf(e) ? "checked" : "value"
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
                set: function(y) {
                    s = "" + y,
                    u.call(this, y)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: a.enumerable
            }),
            {
                getValue: function() {
                    return s
                },
                setValue: function(y) {
                    s = "" + y
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function Es(e) {
        e._valueTracker || (e._valueTracker = I0(e))
    }
    function Lf(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var a = t.getValue()
          , s = "";
        return e && (s = Bf(e) ? e.checked ? "true" : "false" : e.value),
        e = s,
        e !== a ? (t.setValue(e),
        !0) : !1
    }
    function Cs(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var $0 = /[\n"\\]/g;
    function ra(e) {
        return e.replace($0, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function ir(e, t, a, s, r, u, y, b) {
        e.name = "",
        y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.type = y : e.removeAttribute("type"),
        t != null ? y === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + oa(t)) : e.value !== "" + oa(t) && (e.value = "" + oa(t)) : y !== "submit" && y !== "reset" || e.removeAttribute("value"),
        t != null ? sr(e, y, oa(t)) : a != null ? sr(e, y, oa(a)) : s != null && e.removeAttribute("value"),
        r == null && u != null && (e.defaultChecked = !!u),
        r != null && (e.checked = r && typeof r != "function" && typeof r != "symbol"),
        b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? e.name = "" + oa(b) : e.removeAttribute("name")
    }
    function kf(e, t, a, s, r, u, y, b) {
        if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u),
        t != null || a != null) {
            if (!(u !== "submit" && u !== "reset" || t != null))
                return;
            a = a != null ? "" + oa(a) : "",
            t = t != null ? "" + oa(t) : a,
            b || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        s = s ?? r,
        s = typeof s != "function" && typeof s != "symbol" && !!s,
        e.checked = b ? e.checked : !!s,
        e.defaultChecked = !!s,
        y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (e.name = y)
    }
    function sr(e, t, a) {
        t === "number" && Cs(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a)
    }
    function ul(e, t, a, s) {
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
            for (a = "" + oa(a),
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
    function Hf(e, t, a) {
        if (t != null && (t = "" + oa(t),
        t !== e.value && (e.value = t),
        a == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = a != null ? "" + oa(a) : ""
    }
    function Pf(e, t, a, s) {
        if (t == null) {
            if (s != null) {
                if (a != null)
                    throw Error(o(92));
                if (k(s)) {
                    if (1 < s.length)
                        throw Error(o(93));
                    s = s[0]
                }
                a = s
            }
            a == null && (a = ""),
            t = a
        }
        a = oa(t),
        e.defaultValue = a,
        s = e.textContent,
        s === a && s !== "" && s !== null && (e.value = s)
    }
    function cl(e, t) {
        if (t) {
            var a = e.firstChild;
            if (a && a === e.lastChild && a.nodeType === 3) {
                a.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var W0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function qf(e, t, a) {
        var s = t.indexOf("--") === 0;
        a == null || typeof a == "boolean" || a === "" ? s ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : s ? e.setProperty(t, a) : typeof a != "number" || a === 0 || W0.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px"
    }
    function Yf(e, t, a) {
        if (t != null && typeof t != "object")
            throw Error(o(62));
        if (e = e.style,
        a != null) {
            for (var s in a)
                !a.hasOwnProperty(s) || t != null && t.hasOwnProperty(s) || (s.indexOf("--") === 0 ? e.setProperty(s, "") : s === "float" ? e.cssFloat = "" : e[s] = "");
            for (var r in t)
                s = t[r],
                t.hasOwnProperty(r) && a[r] !== s && qf(e, r, s)
        } else
            for (var u in t)
                t.hasOwnProperty(u) && qf(e, u, t[u])
    }
    function or(e) {
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
    function Ds(e) {
        return tv.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    var rr = null;
    function ur(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var fl = null
      , dl = null;
    function Gf(e) {
        var t = Ve(e);
        if (t && (e = t.stateNode)) {
            var a = e[Dt] || null;
            e: switch (e = t.stateNode,
            t.type) {
            case "input":
                if (ir(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name),
                t = a.name,
                a.type === "radio" && t != null) {
                    for (a = e; a.parentNode; )
                        a = a.parentNode;
                    for (a = a.querySelectorAll('input[name="' + ra("" + t) + '"][type="radio"]'),
                    t = 0; t < a.length; t++) {
                        var s = a[t];
                        if (s !== e && s.form === e.form) {
                            var r = s[Dt] || null;
                            if (!r)
                                throw Error(o(90));
                            ir(s, r.value, r.defaultValue, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name)
                        }
                    }
                    for (t = 0; t < a.length; t++)
                        s = a[t],
                        s.form === e.form && Lf(s)
                }
                break e;
            case "textarea":
                Hf(e, a.value, a.defaultValue);
                break e;
            case "select":
                t = a.value,
                t != null && ul(e, !!a.multiple, t, !1)
            }
        }
    }
    var cr = !1;
    function Xf(e, t, a) {
        if (cr)
            return e(t, a);
        cr = !0;
        try {
            var s = e(t);
            return s
        } finally {
            if (cr = !1,
            (fl !== null || dl !== null) && (po(),
            fl && (t = fl,
            e = dl,
            dl = fl = null,
            Gf(t),
            e)))
                for (t = 0; t < e.length; t++)
                    Gf(e[t])
        }
    }
    function li(e, t) {
        var a = e.stateNode;
        if (a === null)
            return null;
        var s = a[Dt] || null;
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
    var Ya = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , fr = !1;
    if (Ya)
        try {
            var ii = {};
            Object.defineProperty(ii, "passive", {
                get: function() {
                    fr = !0
                }
            }),
            window.addEventListener("test", ii, ii),
            window.removeEventListener("test", ii, ii)
        } catch {
            fr = !1
        }
    var on = null
      , dr = null
      , Ms = null;
    function Kf() {
        if (Ms)
            return Ms;
        var e, t = dr, a = t.length, s, r = "value"in on ? on.value : on.textContent, u = r.length;
        for (e = 0; e < a && t[e] === r[e]; e++)
            ;
        var y = a - e;
        for (s = 1; s <= y && t[a - s] === r[u - s]; s++)
            ;
        return Ms = r.slice(e, 1 < s ? 1 - s : void 0)
    }
    function _s(e) {
        var t = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function Os() {
        return !0
    }
    function Zf() {
        return !1
    }
    function Xt(e) {
        function t(a, s, r, u, y) {
            this._reactName = a,
            this._targetInst = r,
            this.type = s,
            this.nativeEvent = u,
            this.target = y,
            this.currentTarget = null;
            for (var b in e)
                e.hasOwnProperty(b) && (a = e[b],
                this[b] = a ? a(u) : u[b]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Os : Zf,
            this.isPropagationStopped = Zf,
            this
        }
        return v(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1),
                this.isDefaultPrevented = Os)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
                this.isPropagationStopped = Os)
            },
            persist: function() {},
            isPersistent: Os
        }),
        t
    }
    var Un = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Rs = Xt(Un), si = v({}, Un, {
        view: 0,
        detail: 0
    }), av = Xt(si), hr, mr, oi, Vs = v({}, si, {
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
        getModifierState: gr,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== oi && (oi && e.type === "mousemove" ? (hr = e.screenX - oi.screenX,
            mr = e.screenY - oi.screenY) : mr = hr = 0,
            oi = e),
            hr)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : mr
        }
    }), Qf = Xt(Vs), nv = v({}, Vs, {
        dataTransfer: 0
    }), lv = Xt(nv), iv = v({}, si, {
        relatedTarget: 0
    }), pr = Xt(iv), sv = v({}, Un, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), ov = Xt(sv), rv = v({}, Un, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), uv = Xt(rv), cv = v({}, Un, {
        data: 0
    }), Ff = Xt(cv), fv = {
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
    function gr() {
        return mv
    }
    var pv = v({}, si, {
        key: function(e) {
            if (e.key) {
                var t = fv[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = _s(e),
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
        getModifierState: gr,
        charCode: function(e) {
            return e.type === "keypress" ? _s(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? _s(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , gv = Xt(pv)
      , yv = v({}, Vs, {
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
      , Jf = Xt(yv)
      , vv = v({}, si, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: gr
    })
      , xv = Xt(vv)
      , bv = v({}, Un, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , Sv = Xt(bv)
      , Tv = v({}, Vs, {
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
      , wv = v({}, Un, {
        newState: 0,
        oldState: 0
    })
      , Av = Xt(wv)
      , Nv = [9, 13, 27, 32]
      , yr = Ya && "CompositionEvent"in window
      , ri = null;
    Ya && "documentMode"in document && (ri = document.documentMode);
    var Ev = Ya && "TextEvent"in window && !ri
      , If = Ya && (!yr || ri && 8 < ri && 11 >= ri)
      , $f = " "
      , Wf = !1;
    function ed(e, t) {
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
    function td(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var hl = !1;
    function Cv(e, t) {
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
    function Dv(e, t) {
        if (hl)
            return e === "compositionend" || !yr && ed(e, t) ? (e = Kf(),
            Ms = dr = on = null,
            hl = !1,
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
    function ad(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Mv[e.type] : t === "textarea"
    }
    function nd(e, t, a, s) {
        fl ? dl ? dl.push(s) : dl = [s] : fl = s,
        t = So(t, "onChange"),
        0 < t.length && (a = new Rs("onChange","change",null,a,s),
        e.push({
            event: a,
            listeners: t
        }))
    }
    var ui = null
      , ci = null;
    function _v(e) {
        Bm(e, 0)
    }
    function zs(e) {
        var t = He(e);
        if (Lf(t))
            return e
    }
    function ld(e, t) {
        if (e === "change")
            return t
    }
    var id = !1;
    if (Ya) {
        var vr;
        if (Ya) {
            var xr = "oninput"in document;
            if (!xr) {
                var sd = document.createElement("div");
                sd.setAttribute("oninput", "return;"),
                xr = typeof sd.oninput == "function"
            }
            vr = xr
        } else
            vr = !1;
        id = vr && (!document.documentMode || 9 < document.documentMode)
    }
    function od() {
        ui && (ui.detachEvent("onpropertychange", rd),
        ci = ui = null)
    }
    function rd(e) {
        if (e.propertyName === "value" && zs(ci)) {
            var t = [];
            nd(t, ci, e, ur(e)),
            Xf(_v, t)
        }
    }
    function Ov(e, t, a) {
        e === "focusin" ? (od(),
        ui = t,
        ci = a,
        ui.attachEvent("onpropertychange", rd)) : e === "focusout" && od()
    }
    function Rv(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return zs(ci)
    }
    function Vv(e, t) {
        if (e === "click")
            return zs(t)
    }
    function zv(e, t) {
        if (e === "input" || e === "change")
            return zs(t)
    }
    function Uv(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var It = typeof Object.is == "function" ? Object.is : Uv;
    function fi(e, t) {
        if (It(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var a = Object.keys(e)
          , s = Object.keys(t);
        if (a.length !== s.length)
            return !1;
        for (s = 0; s < a.length; s++) {
            var r = a[s];
            if (!Le.call(t, r) || !It(e[r], t[r]))
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
            a = ud(a)
        }
    }
    function fd(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? fd(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function dd(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = Cs(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
                var a = typeof t.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a)
                e = t.contentWindow;
            else
                break;
            t = Cs(e.document)
        }
        return t
    }
    function br(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var Bv = Ya && "documentMode"in document && 11 >= document.documentMode
      , ml = null
      , Sr = null
      , di = null
      , Tr = !1;
    function hd(e, t, a) {
        var s = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        Tr || ml == null || ml !== Cs(s) || (s = ml,
        "selectionStart"in s && br(s) ? s = {
            start: s.selectionStart,
            end: s.selectionEnd
        } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(),
        s = {
            anchorNode: s.anchorNode,
            anchorOffset: s.anchorOffset,
            focusNode: s.focusNode,
            focusOffset: s.focusOffset
        }),
        di && fi(di, s) || (di = s,
        s = So(Sr, "onSelect"),
        0 < s.length && (t = new Rs("onSelect","select",null,t,a),
        e.push({
            event: t,
            listeners: s
        }),
        t.target = ml)))
    }
    function Bn(e, t) {
        var a = {};
        return a[e.toLowerCase()] = t.toLowerCase(),
        a["Webkit" + e] = "webkit" + t,
        a["Moz" + e] = "moz" + t,
        a
    }
    var pl = {
        animationend: Bn("Animation", "AnimationEnd"),
        animationiteration: Bn("Animation", "AnimationIteration"),
        animationstart: Bn("Animation", "AnimationStart"),
        transitionrun: Bn("Transition", "TransitionRun"),
        transitionstart: Bn("Transition", "TransitionStart"),
        transitioncancel: Bn("Transition", "TransitionCancel"),
        transitionend: Bn("Transition", "TransitionEnd")
    }
      , jr = {}
      , md = {};
    Ya && (md = document.createElement("div").style,
    "AnimationEvent"in window || (delete pl.animationend.animation,
    delete pl.animationiteration.animation,
    delete pl.animationstart.animation),
    "TransitionEvent"in window || delete pl.transitionend.transition);
    function Ln(e) {
        if (jr[e])
            return jr[e];
        if (!pl[e])
            return e;
        var t = pl[e], a;
        for (a in t)
            if (t.hasOwnProperty(a) && a in md)
                return jr[e] = t[a];
        return e
    }
    var pd = Ln("animationend")
      , gd = Ln("animationiteration")
      , yd = Ln("animationstart")
      , Lv = Ln("transitionrun")
      , kv = Ln("transitionstart")
      , Hv = Ln("transitioncancel")
      , vd = Ln("transitionend")
      , xd = new Map
      , wr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    wr.push("scrollEnd");
    function wa(e, t) {
        xd.set(e, t),
        Ut(t, [e])
    }
    var bd = new WeakMap;
    function ua(e, t) {
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
    var ca = []
      , gl = 0
      , Ar = 0;
    function Us() {
        for (var e = gl, t = Ar = gl = 0; t < e; ) {
            var a = ca[t];
            ca[t++] = null;
            var s = ca[t];
            ca[t++] = null;
            var r = ca[t];
            ca[t++] = null;
            var u = ca[t];
            if (ca[t++] = null,
            s !== null && r !== null) {
                var y = s.pending;
                y === null ? r.next = r : (r.next = y.next,
                y.next = r),
                s.pending = r
            }
            u !== 0 && Sd(a, r, u)
        }
    }
    function Bs(e, t, a, s) {
        ca[gl++] = e,
        ca[gl++] = t,
        ca[gl++] = a,
        ca[gl++] = s,
        Ar |= s,
        e.lanes |= s,
        e = e.alternate,
        e !== null && (e.lanes |= s)
    }
    function Nr(e, t, a, s) {
        return Bs(e, t, a, s),
        Ls(e)
    }
    function yl(e, t) {
        return Bs(e, null, null, t),
        Ls(e)
    }
    function Sd(e, t, a) {
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
        r && t !== null && (r = 31 - ft(a),
        e = u.hiddenUpdates,
        s = e[r],
        s === null ? e[r] = [t] : s.push(t),
        t.lane = a | 536870912),
        u) : null
    }
    function Ls(e) {
        if (50 < Bi)
            throw Bi = 0,
            Ou = null,
            Error(o(185));
        for (var t = e.return; t !== null; )
            e = t,
            t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var vl = {};
    function Pv(e, t, a, s) {
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
    function $t(e, t, a, s) {
        return new Pv(e,t,a,s)
    }
    function Er(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function Ga(e, t) {
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
    function Td(e, t) {
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
    function ks(e, t, a, s, r, u) {
        var y = 0;
        if (s = e,
        typeof e == "function")
            Er(e) && (y = 1);
        else if (typeof e == "string")
            y = Yx(e, a, le.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else
            e: switch (e) {
            case ie:
                return e = $t(31, a, t, r),
                e.elementType = ie,
                e.lanes = u,
                e;
            case C:
                return kn(a.children, r, u, t);
            case D:
                y = 8,
                r |= 24;
                break;
            case M:
                return e = $t(12, a, t, r | 2),
                e.elementType = M,
                e.lanes = u,
                e;
            case R:
                return e = $t(13, a, t, r),
                e.elementType = R,
                e.lanes = u,
                e;
            case Z:
                return e = $t(19, a, t, r),
                e.elementType = Z,
                e.lanes = u,
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
                    case G:
                        y = 11;
                        break e;
                    case W:
                        y = 14;
                        break e;
                    case Q:
                        y = 16,
                        s = null;
                        break e
                    }
                y = 29,
                a = Error(o(130, e === null ? "null" : typeof e, "")),
                s = null
            }
        return t = $t(y, a, t, r),
        t.elementType = e,
        t.type = s,
        t.lanes = u,
        t
    }
    function kn(e, t, a, s) {
        return e = $t(7, e, s, t),
        e.lanes = a,
        e
    }
    function Cr(e, t, a) {
        return e = $t(6, e, null, t),
        e.lanes = a,
        e
    }
    function Dr(e, t, a) {
        return t = $t(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = a,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    var xl = []
      , bl = 0
      , Hs = null
      , Ps = 0
      , fa = []
      , da = 0
      , Hn = null
      , Xa = 1
      , Ka = "";
    function Pn(e, t) {
        xl[bl++] = Ps,
        xl[bl++] = Hs,
        Hs = e,
        Ps = t
    }
    function jd(e, t, a) {
        fa[da++] = Xa,
        fa[da++] = Ka,
        fa[da++] = Hn,
        Hn = e;
        var s = Xa;
        e = Ka;
        var r = 32 - ft(s) - 1;
        s &= ~(1 << r),
        a += 1;
        var u = 32 - ft(t) + r;
        if (30 < u) {
            var y = r - r % 5;
            u = (s & (1 << y) - 1).toString(32),
            s >>= y,
            r -= y,
            Xa = 1 << 32 - ft(t) + r | a << r | s,
            Ka = u + e
        } else
            Xa = 1 << u | a << r | s,
            Ka = e
    }
    function Mr(e) {
        e.return !== null && (Pn(e, 1),
        jd(e, 1, 0))
    }
    function _r(e) {
        for (; e === Hs; )
            Hs = xl[--bl],
            xl[bl] = null,
            Ps = xl[--bl],
            xl[bl] = null;
        for (; e === Hn; )
            Hn = fa[--da],
            fa[da] = null,
            Ka = fa[--da],
            fa[da] = null,
            Xa = fa[--da],
            fa[da] = null
    }
    var Pt = null
      , st = null
      , qe = !1
      , qn = null
      , _a = !1
      , Or = Error(o(519));
    function Yn(e) {
        var t = Error(o(418, ""));
        throw pi(ua(t, e)),
        Or
    }
    function wd(e) {
        var t = e.stateNode
          , a = e.type
          , s = e.memoizedProps;
        switch (t[Tt] = e,
        t[Dt] = s,
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
            for (a = 0; a < ki.length; a++)
                Oe(ki[a], t);
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
            kf(t, s.value, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name, !0),
            Es(t);
            break;
        case "select":
            Oe("invalid", t);
            break;
        case "textarea":
            Oe("invalid", t),
            Pf(t, s.value, s.defaultValue, s.children),
            Es(t)
        }
        a = s.children,
        typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || s.suppressHydrationWarning === !0 || Pm(t.textContent, a) ? (s.popover != null && (Oe("beforetoggle", t),
        Oe("toggle", t)),
        s.onScroll != null && Oe("scroll", t),
        s.onScrollEnd != null && Oe("scrollend", t),
        s.onClick != null && (t.onclick = To),
        t = !0) : t = !1,
        t || Yn(e)
    }
    function Ad(e) {
        for (Pt = e.return; Pt; )
            switch (Pt.tag) {
            case 5:
            case 13:
                _a = !1;
                return;
            case 27:
            case 3:
                _a = !0;
                return;
            default:
                Pt = Pt.return
            }
    }
    function hi(e) {
        if (e !== Pt)
            return !1;
        if (!qe)
            return Ad(e),
            qe = !0,
            !1;
        var t = e.tag, a;
        if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type,
        a = !(a !== "form" && a !== "button") || Qu(e.type, e.memoizedProps)),
        a = !a),
        a && st && Yn(e),
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
                                st = Na(e.nextSibling);
                                break e
                            }
                            t--
                        } else
                            a !== "$" && a !== "$!" && a !== "$?" || t++;
                    e = e.nextSibling
                }
                st = null
            }
        } else
            t === 27 ? (t = st,
            jn(e.type) ? (e = $u,
            $u = null,
            st = e) : st = t) : st = Pt ? Na(e.stateNode.nextSibling) : null;
        return !0
    }
    function mi() {
        st = Pt = null,
        qe = !1
    }
    function Nd() {
        var e = qn;
        return e !== null && (Qt === null ? Qt = e : Qt.push.apply(Qt, e),
        qn = null),
        e
    }
    function pi(e) {
        qn === null ? qn = [e] : qn.push(e)
    }
    var Rr = q(null)
      , Gn = null
      , Za = null;
    function rn(e, t, a) {
        X(Rr, t._currentValue),
        t._currentValue = a
    }
    function Qa(e) {
        e._currentValue = Rr.current,
        J(Rr)
    }
    function Vr(e, t, a) {
        for (; e !== null; ) {
            var s = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t),
            e === a)
                break;
            e = e.return
        }
    }
    function zr(e, t, a, s) {
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
                            Vr(u.return, a, e),
                            s || (y = null);
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
                Vr(y, a, e),
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
    function gi(e, t, a, s) {
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
            } else if (r === Se.current) {
                if (y = r.alternate,
                y === null)
                    throw Error(o(387));
                y.memoizedState.memoizedState !== r.memoizedState.memoizedState && (e !== null ? e.push(Xi) : e = [Xi])
            }
            r = r.return
        }
        e !== null && zr(t, e, a, s),
        t.flags |= 262144
    }
    function qs(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!It(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next
        }
        return !1
    }
    function Xn(e) {
        Gn = e,
        Za = null,
        e = e.dependencies,
        e !== null && (e.firstContext = null)
    }
    function Bt(e) {
        return Ed(Gn, e)
    }
    function Ys(e, t) {
        return Gn === null && Xn(e),
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
    var qv = typeof AbortController < "u" ? AbortController : function() {
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
      , Yv = n.unstable_scheduleCallback
      , Gv = n.unstable_NormalPriority
      , jt = {
        $$typeof: B,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function Ur() {
        return {
            controller: new qv,
            data: new Map,
            refCount: 0
        }
    }
    function yi(e) {
        e.refCount--,
        e.refCount === 0 && Yv(Gv, function() {
            e.controller.abort()
        })
    }
    var vi = null
      , Br = 0
      , Sl = 0
      , Tl = null;
    function Xv(e, t) {
        if (vi === null) {
            var a = vi = [];
            Br = 0,
            Sl = ku(),
            Tl = {
                status: "pending",
                value: void 0,
                then: function(s) {
                    a.push(s)
                }
            }
        }
        return Br++,
        t.then(Cd, Cd),
        t
    }
    function Cd() {
        if (--Br === 0 && vi !== null) {
            Tl !== null && (Tl.status = "fulfilled");
            var e = vi;
            vi = null,
            Sl = 0,
            Tl = null;
            for (var t = 0; t < e.length; t++)
                (0,
                e[t])()
        }
    }
    function Kv(e, t) {
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
    var Dd = N.S;
    N.S = function(e, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && Xv(e, t),
        Dd !== null && Dd(e, t)
    }
    ;
    var Kn = q(null);
    function Lr() {
        var e = Kn.current;
        return e !== null ? e : $e.pooledCache
    }
    function Gs(e, t) {
        t === null ? X(Kn, Kn.current) : X(Kn, t.pool)
    }
    function Md() {
        var e = Lr();
        return e === null ? null : {
            parent: jt._currentValue,
            pool: e
        }
    }
    var xi = Error(o(460))
      , _d = Error(o(474))
      , Xs = Error(o(542))
      , kr = {
        then: function() {}
    };
    function Od(e) {
        return e = e.status,
        e === "fulfilled" || e === "rejected"
    }
    function Ks() {}
    function Rd(e, t, a) {
        switch (a = e[a],
        a === void 0 ? e.push(t) : a !== t && (t.then(Ks, Ks),
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
                t.then(Ks, Ks);
            else {
                if (e = $e,
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
                zd(e),
                e
            }
            throw bi = t,
            xi
        }
    }
    var bi = null;
    function Vd() {
        if (bi === null)
            throw Error(o(459));
        var e = bi;
        return bi = null,
        e
    }
    function zd(e) {
        if (e === xi || e === Xs)
            throw Error(o(483))
    }
    var un = !1;
    function Hr(e) {
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
    function Pr(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }
    function cn(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function fn(e, t, a) {
        var s = e.updateQueue;
        if (s === null)
            return null;
        if (s = s.shared,
        (Ge & 2) !== 0) {
            var r = s.pending;
            return r === null ? t.next = t : (t.next = r.next,
            r.next = t),
            s.pending = t,
            t = Ls(e),
            Sd(e, null, a),
            t
        }
        return Bs(e, s, t, a),
        Ls(e)
    }
    function Si(e, t, a) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (a & 4194048) !== 0)) {
            var s = t.lanes;
            s &= e.pendingLanes,
            a |= s,
            t.lanes = a,
            ei(e, a)
        }
    }
    function qr(e, t) {
        var a = e.updateQueue
          , s = e.alternate;
        if (s !== null && (s = s.updateQueue,
        a === s)) {
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
    var Yr = !1;
    function Ti() {
        if (Yr) {
            var e = Tl;
            if (e !== null)
                throw e
        }
    }
    function ji(e, t, a, s) {
        Yr = !1;
        var r = e.updateQueue;
        un = !1;
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
            var K = e.alternate;
            K !== null && (K = K.updateQueue,
            b = K.lastBaseUpdate,
            b !== y && (b === null ? K.firstBaseUpdate = z : b.next = z,
            K.lastBaseUpdate = A))
        }
        if (u !== null) {
            var $ = r.baseState;
            y = 0,
            K = z = A = null,
            b = u;
            do {
                var H = b.lane & -536870913
                  , Y = H !== b.lane;
                if (Y ? (Be & H) === H : (s & H) === H) {
                    H !== 0 && H === Sl && (Yr = !0),
                    K !== null && (K = K.next = {
                        lane: 0,
                        tag: b.tag,
                        payload: b.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var ve = e
                          , pe = b;
                        H = t;
                        var Qe = a;
                        switch (pe.tag) {
                        case 1:
                            if (ve = pe.payload,
                            typeof ve == "function") {
                                $ = ve.call(Qe, $, H);
                                break e
                            }
                            $ = ve;
                            break e;
                        case 3:
                            ve.flags = ve.flags & -65537 | 128;
                        case 0:
                            if (ve = pe.payload,
                            H = typeof ve == "function" ? ve.call(Qe, $, H) : ve,
                            H == null)
                                break e;
                            $ = v({}, $, H);
                            break e;
                        case 2:
                            un = !0
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
                    K === null ? (z = K = Y,
                    A = $) : K = K.next = Y,
                    y |= H;
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
            K === null && (A = $),
            r.baseState = A,
            r.firstBaseUpdate = z,
            r.lastBaseUpdate = K,
            u === null && (r.shared.lanes = 0),
            xn |= y,
            e.lanes = y,
            e.memoizedState = $
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
    var jl = q(null)
      , Zs = q(0);
    function Ld(e, t) {
        e = tn,
        X(Zs, e),
        X(jl, t),
        tn = e | t.baseLanes
    }
    function Gr() {
        X(Zs, tn),
        X(jl, jl.current)
    }
    function Xr() {
        tn = Zs.current,
        J(jl),
        J(Zs)
    }
    var dn = 0
      , Ee = null
      , Ke = null
      , vt = null
      , Qs = !1
      , wl = !1
      , Zn = !1
      , Fs = 0
      , wi = 0
      , Al = null
      , Zv = 0;
    function ht() {
        throw Error(o(321))
    }
    function Kr(e, t) {
        if (t === null)
            return !1;
        for (var a = 0; a < t.length && a < e.length; a++)
            if (!It(e[a], t[a]))
                return !1;
        return !0
    }
    function Zr(e, t, a, s, r, u) {
        return dn = u,
        Ee = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        N.H = e === null || e.memoizedState === null ? Sh : Th,
        Zn = !1,
        u = a(s, r),
        Zn = !1,
        wl && (u = Hd(t, a, s, r)),
        kd(e),
        u
    }
    function kd(e) {
        N.H = to;
        var t = Ke !== null && Ke.next !== null;
        if (dn = 0,
        vt = Ke = Ee = null,
        Qs = !1,
        wi = 0,
        Al = null,
        t)
            throw Error(o(300));
        e === null || At || (e = e.dependencies,
        e !== null && qs(e) && (At = !0))
    }
    function Hd(e, t, a, s) {
        Ee = e;
        var r = 0;
        do {
            if (wl && (Al = null),
            wi = 0,
            wl = !1,
            25 <= r)
                throw Error(o(301));
            if (r += 1,
            vt = Ke = null,
            e.updateQueue != null) {
                var u = e.updateQueue;
                u.lastEffect = null,
                u.events = null,
                u.stores = null,
                u.memoCache != null && (u.memoCache.index = 0)
            }
            N.H = ex,
            u = t(a, s)
        } while (wl);
        return u
    }
    function Qv() {
        var e = N.H
          , t = e.useState()[0];
        return t = typeof t.then == "function" ? Ai(t) : t,
        e = e.useState()[0],
        (Ke !== null ? Ke.memoizedState : null) !== e && (Ee.flags |= 1024),
        t
    }
    function Qr() {
        var e = Fs !== 0;
        return Fs = 0,
        e
    }
    function Fr(e, t, a) {
        t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~a
    }
    function Jr(e) {
        if (Qs) {
            for (e = e.memoizedState; e !== null; ) {
                var t = e.queue;
                t !== null && (t.pending = null),
                e = e.next
            }
            Qs = !1
        }
        dn = 0,
        vt = Ke = Ee = null,
        wl = !1,
        wi = Fs = 0,
        Al = null
    }
    function Kt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return vt === null ? Ee.memoizedState = vt = e : vt = vt.next = e,
        vt
    }
    function xt() {
        if (Ke === null) {
            var e = Ee.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = Ke.next;
        var t = vt === null ? Ee.memoizedState : vt.next;
        if (t !== null)
            vt = t,
            Ke = e;
        else {
            if (e === null)
                throw Ee.alternate === null ? Error(o(467)) : Error(o(310));
            Ke = e,
            e = {
                memoizedState: Ke.memoizedState,
                baseState: Ke.baseState,
                baseQueue: Ke.baseQueue,
                queue: Ke.queue,
                next: null
            },
            vt === null ? Ee.memoizedState = vt = e : vt = vt.next = e
        }
        return vt
    }
    function Ir() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function Ai(e) {
        var t = wi;
        return wi += 1,
        Al === null && (Al = []),
        e = Rd(Al, e, t),
        t = Ee,
        (vt === null ? t.memoizedState : vt.next) === null && (t = t.alternate,
        N.H = t === null || t.memoizedState === null ? Sh : Th),
        e
    }
    function Js(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
                return Ai(e);
            if (e.$$typeof === B)
                return Bt(e)
        }
        throw Error(o(438, String(e)))
    }
    function $r(e) {
        var t = null
          , a = Ee.updateQueue;
        if (a !== null && (t = a.memoCache),
        t == null) {
            var s = Ee.alternate;
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
        a === null && (a = Ir(),
        Ee.updateQueue = a),
        a.memoCache = t,
        a = t.data[t.index],
        a === void 0)
            for (a = t.data[t.index] = Array(e),
            s = 0; s < e; s++)
                a[s] = fe;
        return t.index++,
        a
    }
    function Fa(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function Is(e) {
        var t = xt();
        return Wr(t, Ke, e)
    }
    function Wr(e, t, a) {
        var s = e.queue;
        if (s === null)
            throw Error(o(311));
        s.lastRenderedReducer = a;
        var r = e.baseQueue
          , u = s.pending;
        if (u !== null) {
            if (r !== null) {
                var y = r.next;
                r.next = u.next,
                u.next = y
            }
            t.baseQueue = r = u,
            s.pending = null
        }
        if (u = e.baseState,
        r === null)
            e.memoizedState = u;
        else {
            t = r.next;
            var b = y = null
              , A = null
              , z = t
              , K = !1;
            do {
                var $ = z.lane & -536870913;
                if ($ !== z.lane ? (Be & $) === $ : (dn & $) === $) {
                    var H = z.revertLane;
                    if (H === 0)
                        A !== null && (A = A.next = {
                            lane: 0,
                            revertLane: 0,
                            action: z.action,
                            hasEagerState: z.hasEagerState,
                            eagerState: z.eagerState,
                            next: null
                        }),
                        $ === Sl && (K = !0);
                    else if ((dn & H) === H) {
                        z = z.next,
                        H === Sl && (K = !0);
                        continue
                    } else
                        $ = {
                            lane: 0,
                            revertLane: z.revertLane,
                            action: z.action,
                            hasEagerState: z.hasEagerState,
                            eagerState: z.eagerState,
                            next: null
                        },
                        A === null ? (b = A = $,
                        y = u) : A = A.next = $,
                        Ee.lanes |= H,
                        xn |= H;
                    $ = z.action,
                    Zn && a(u, $),
                    u = z.hasEagerState ? z.eagerState : a(u, $)
                } else
                    H = {
                        lane: $,
                        revertLane: z.revertLane,
                        action: z.action,
                        hasEagerState: z.hasEagerState,
                        eagerState: z.eagerState,
                        next: null
                    },
                    A === null ? (b = A = H,
                    y = u) : A = A.next = H,
                    Ee.lanes |= $,
                    xn |= $;
                z = z.next
            } while (z !== null && z !== t);
            if (A === null ? y = u : A.next = b,
            !It(u, e.memoizedState) && (At = !0,
            K && (a = Tl,
            a !== null)))
                throw a;
            e.memoizedState = u,
            e.baseState = y,
            e.baseQueue = A,
            s.lastRenderedState = u
        }
        return r === null && (s.lanes = 0),
        [e.memoizedState, s.dispatch]
    }
    function eu(e) {
        var t = xt()
          , a = t.queue;
        if (a === null)
            throw Error(o(311));
        a.lastRenderedReducer = e;
        var s = a.dispatch
          , r = a.pending
          , u = t.memoizedState;
        if (r !== null) {
            a.pending = null;
            var y = r = r.next;
            do
                u = e(u, y.action),
                y = y.next;
            while (y !== r);
            It(u, t.memoizedState) || (At = !0),
            t.memoizedState = u,
            t.baseQueue === null && (t.baseState = u),
            a.lastRenderedState = u
        }
        return [u, s]
    }
    function Pd(e, t, a) {
        var s = Ee
          , r = xt()
          , u = qe;
        if (u) {
            if (a === void 0)
                throw Error(o(407));
            a = a()
        } else
            a = t();
        var y = !It((Ke || r).memoizedState, a);
        y && (r.memoizedState = a,
        At = !0),
        r = r.queue;
        var b = Gd.bind(null, s, r, e);
        if (Ni(2048, 8, b, [e]),
        r.getSnapshot !== t || y || vt !== null && vt.memoizedState.tag & 1) {
            if (s.flags |= 2048,
            Nl(9, $s(), Yd.bind(null, s, r, a, t), null),
            $e === null)
                throw Error(o(349));
            u || (dn & 124) !== 0 || qd(s, t, a)
        }
        return a
    }
    function qd(e, t, a) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: a
        },
        t = Ee.updateQueue,
        t === null ? (t = Ir(),
        Ee.updateQueue = t,
        t.stores = [e]) : (a = t.stores,
        a === null ? t.stores = [e] : a.push(e))
    }
    function Yd(e, t, a, s) {
        t.value = a,
        t.getSnapshot = s,
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
            return !It(e, a)
        } catch {
            return !0
        }
    }
    function Kd(e) {
        var t = yl(e, 2);
        t !== null && na(t, e, 2)
    }
    function tu(e) {
        var t = Kt();
        if (typeof e == "function") {
            var a = e;
            if (e = a(),
            Zn) {
                Ht(!0);
                try {
                    a()
                } finally {
                    Ht(!1)
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
    function Zd(e, t, a, s) {
        return e.baseState = a,
        Wr(e, Ke, typeof s == "function" ? s : Fa)
    }
    function Fv(e, t, a, s, r) {
        if (eo(e))
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
            s(u),
            a = t.pending,
            a === null ? (u.next = t.pending = u,
            Qd(t, u)) : (u.next = a.next,
            t.pending = a.next = u)
        }
    }
    function Qd(e, t) {
        var a = t.action
          , s = t.payload
          , r = e.state;
        if (t.isTransition) {
            var u = N.T
              , y = {};
            N.T = y;
            try {
                var b = a(r, s)
                  , A = N.S;
                A !== null && A(y, b),
                Fd(e, t, b)
            } catch (z) {
                au(e, t, z)
            } finally {
                N.T = u
            }
        } else
            try {
                u = a(r, s),
                Fd(e, t, u)
            } catch (z) {
                au(e, t, z)
            }
    }
    function Fd(e, t, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(s) {
            Jd(e, t, s)
        }, function(s) {
            return au(e, t, s)
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
    function au(e, t, a) {
        var s = e.pending;
        if (e.pending = null,
        s !== null) {
            s = s.next;
            do
                t.status = "rejected",
                t.reason = a,
                Id(t),
                t = t.next;
            while (t !== s)
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
        if (qe) {
            var a = $e.formState;
            if (a !== null) {
                e: {
                    var s = Ee;
                    if (qe) {
                        if (st) {
                            t: {
                                for (var r = st, u = _a; r.nodeType !== 8; ) {
                                    if (!u) {
                                        r = null;
                                        break t
                                    }
                                    if (r = Na(r.nextSibling),
                                    r === null) {
                                        r = null;
                                        break t
                                    }
                                }
                                u = r.data,
                                r = u === "F!" || u === "F" ? r : null
                            }
                            if (r) {
                                st = Na(r.nextSibling),
                                s = r.data === "F!";
                                break e
                            }
                        }
                        Yn(s)
                    }
                    s = !1
                }
                s && (t = a[0])
            }
        }
        return a = Kt(),
        a.memoizedState = a.baseState = t,
        s = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: $d,
            lastRenderedState: t
        },
        a.queue = s,
        a = vh.bind(null, Ee, s),
        s.dispatch = a,
        s = tu(!1),
        u = ou.bind(null, Ee, !1, s.queue),
        s = Kt(),
        r = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        },
        s.queue = r,
        a = Fv.bind(null, Ee, r, u, a),
        r.dispatch = a,
        s.memoizedState = e,
        [t, a, !1]
    }
    function eh(e) {
        var t = xt();
        return th(t, Ke, e)
    }
    function th(e, t, a) {
        if (t = Wr(e, t, $d)[0],
        e = Is(Fa)[0],
        typeof t == "object" && t !== null && typeof t.then == "function")
            try {
                var s = Ai(t)
            } catch (y) {
                throw y === xi ? Xs : y
            }
        else
            s = t;
        t = xt();
        var r = t.queue
          , u = r.dispatch;
        return a !== t.memoizedState && (Ee.flags |= 2048,
        Nl(9, $s(), Jv.bind(null, r, a), null)),
        [s, u, e]
    }
    function Jv(e, t) {
        e.action = t
    }
    function ah(e) {
        var t = xt()
          , a = Ke;
        if (a !== null)
            return th(t, a, e);
        xt(),
        t = t.memoizedState,
        a = xt();
        var s = a.queue.dispatch;
        return a.memoizedState = e,
        [t, s, !1]
    }
    function Nl(e, t, a, s) {
        return e = {
            tag: e,
            create: a,
            deps: s,
            inst: t,
            next: null
        },
        t = Ee.updateQueue,
        t === null && (t = Ir(),
        Ee.updateQueue = t),
        a = t.lastEffect,
        a === null ? t.lastEffect = e.next = e : (s = a.next,
        a.next = e,
        e.next = s,
        t.lastEffect = e),
        e
    }
    function $s() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }
    function nh() {
        return xt().memoizedState
    }
    function Ws(e, t, a, s) {
        var r = Kt();
        s = s === void 0 ? null : s,
        Ee.flags |= e,
        r.memoizedState = Nl(1 | t, $s(), a, s)
    }
    function Ni(e, t, a, s) {
        var r = xt();
        s = s === void 0 ? null : s;
        var u = r.memoizedState.inst;
        Ke !== null && s !== null && Kr(s, Ke.memoizedState.deps) ? r.memoizedState = Nl(t, u, a, s) : (Ee.flags |= e,
        r.memoizedState = Nl(1 | t, u, a, s))
    }
    function lh(e, t) {
        Ws(8390656, 8, e, t)
    }
    function ih(e, t) {
        Ni(2048, 8, e, t)
    }
    function sh(e, t) {
        return Ni(4, 2, e, t)
    }
    function oh(e, t) {
        return Ni(4, 4, e, t)
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
        Ni(4, 4, rh.bind(null, t, e), a)
    }
    function nu() {}
    function ch(e, t) {
        var a = xt();
        t = t === void 0 ? null : t;
        var s = a.memoizedState;
        return t !== null && Kr(t, s[1]) ? s[0] : (a.memoizedState = [e, t],
        e)
    }
    function fh(e, t) {
        var a = xt();
        t = t === void 0 ? null : t;
        var s = a.memoizedState;
        if (t !== null && Kr(t, s[1]))
            return s[0];
        if (s = e(),
        Zn) {
            Ht(!0);
            try {
                e()
            } finally {
                Ht(!1)
            }
        }
        return a.memoizedState = [s, t],
        s
    }
    function lu(e, t, a) {
        return a === void 0 || (dn & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a,
        e = mm(),
        Ee.lanes |= e,
        xn |= e,
        a)
    }
    function dh(e, t, a, s) {
        return It(a, t) ? a : jl.current !== null ? (e = lu(e, a, s),
        It(e, t) || (At = !0),
        e) : (dn & 42) === 0 ? (At = !0,
        e.memoizedState = a) : (e = mm(),
        Ee.lanes |= e,
        xn |= e,
        t)
    }
    function hh(e, t, a, s, r) {
        var u = O.p;
        O.p = u !== 0 && 8 > u ? u : 8;
        var y = N.T
          , b = {};
        N.T = b,
        ou(e, !1, t, a);
        try {
            var A = r()
              , z = N.S;
            if (z !== null && z(b, A),
            A !== null && typeof A == "object" && typeof A.then == "function") {
                var K = Kv(A, s);
                Ei(e, t, K, aa(e))
            } else
                Ei(e, t, s, aa(e))
        } catch ($) {
            Ei(e, t, {
                then: function() {},
                status: "rejected",
                reason: $
            }, aa())
        } finally {
            O.p = u,
            N.T = y
        }
    }
    function Iv() {}
    function iu(e, t, a, s) {
        if (e.tag !== 5)
            throw Error(o(476));
        var r = mh(e).queue;
        hh(e, r, t, L, a === null ? Iv : function() {
            return ph(e),
            a(s)
        }
        )
    }
    function mh(e) {
        var t = e.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: L,
            baseState: L,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Fa,
                lastRenderedState: L
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
        Ei(e, t, {}, aa())
    }
    function su() {
        return Bt(Xi)
    }
    function gh() {
        return xt().memoizedState
    }
    function yh() {
        return xt().memoizedState
    }
    function $v(e) {
        for (var t = e.return; t !== null; ) {
            switch (t.tag) {
            case 24:
            case 3:
                var a = aa();
                e = cn(a);
                var s = fn(t, e, a);
                s !== null && (na(s, t, a),
                Si(s, t, a)),
                t = {
                    cache: Ur()
                },
                e.payload = t;
                return
            }
            t = t.return
        }
    }
    function Wv(e, t, a) {
        var s = aa();
        a = {
            lane: s,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        eo(e) ? xh(t, a) : (a = Nr(e, t, a, s),
        a !== null && (na(a, e, s),
        bh(a, t, s)))
    }
    function vh(e, t, a) {
        var s = aa();
        Ei(e, t, a, s)
    }
    function Ei(e, t, a, s) {
        var r = {
            lane: s,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (eo(e))
            xh(t, r);
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
                        return Bs(e, t, r, 0),
                        $e === null && Us(),
                        !1
                } catch {} finally {}
            if (a = Nr(e, t, r, s),
            a !== null)
                return na(a, e, s),
                bh(a, t, s),
                !0
        }
        return !1
    }
    function ou(e, t, a, s) {
        if (s = {
            lane: 2,
            revertLane: ku(),
            action: s,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        eo(e)) {
            if (t)
                throw Error(o(479))
        } else
            t = Nr(e, a, s, 2),
            t !== null && na(t, e, 2)
    }
    function eo(e) {
        var t = e.alternate;
        return e === Ee || t !== null && t === Ee
    }
    function xh(e, t) {
        wl = Qs = !0;
        var a = e.pending;
        a === null ? t.next = t : (t.next = a.next,
        a.next = t),
        e.pending = t
    }
    function bh(e, t, a) {
        if ((a & 4194048) !== 0) {
            var s = t.lanes;
            s &= e.pendingLanes,
            a |= s,
            t.lanes = a,
            ei(e, a)
        }
    }
    var to = {
        readContext: Bt,
        use: Js,
        useCallback: ht,
        useContext: ht,
        useEffect: ht,
        useImperativeHandle: ht,
        useLayoutEffect: ht,
        useInsertionEffect: ht,
        useMemo: ht,
        useReducer: ht,
        useRef: ht,
        useState: ht,
        useDebugValue: ht,
        useDeferredValue: ht,
        useTransition: ht,
        useSyncExternalStore: ht,
        useId: ht,
        useHostTransitionStatus: ht,
        useFormState: ht,
        useActionState: ht,
        useOptimistic: ht,
        useMemoCache: ht,
        useCacheRefresh: ht
    }
      , Sh = {
        readContext: Bt,
        use: Js,
        useCallback: function(e, t) {
            return Kt().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: Bt,
        useEffect: lh,
        useImperativeHandle: function(e, t, a) {
            a = a != null ? a.concat([e]) : null,
            Ws(4194308, 4, rh.bind(null, t, e), a)
        },
        useLayoutEffect: function(e, t) {
            return Ws(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            Ws(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var a = Kt();
            t = t === void 0 ? null : t;
            var s = e();
            if (Zn) {
                Ht(!0);
                try {
                    e()
                } finally {
                    Ht(!1)
                }
            }
            return a.memoizedState = [s, t],
            s
        },
        useReducer: function(e, t, a) {
            var s = Kt();
            if (a !== void 0) {
                var r = a(t);
                if (Zn) {
                    Ht(!0);
                    try {
                        a(t)
                    } finally {
                        Ht(!1)
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
            e = e.dispatch = Wv.bind(null, Ee, e),
            [s.memoizedState, e]
        },
        useRef: function(e) {
            var t = Kt();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: function(e) {
            e = tu(e);
            var t = e.queue
              , a = vh.bind(null, Ee, t);
            return t.dispatch = a,
            [e.memoizedState, a]
        },
        useDebugValue: nu,
        useDeferredValue: function(e, t) {
            var a = Kt();
            return lu(a, e, t)
        },
        useTransition: function() {
            var e = tu(!1);
            return e = hh.bind(null, Ee, e.queue, !0, !1),
            Kt().memoizedState = e,
            [!1, e]
        },
        useSyncExternalStore: function(e, t, a) {
            var s = Ee
              , r = Kt();
            if (qe) {
                if (a === void 0)
                    throw Error(o(407));
                a = a()
            } else {
                if (a = t(),
                $e === null)
                    throw Error(o(349));
                (Be & 124) !== 0 || qd(s, t, a)
            }
            r.memoizedState = a;
            var u = {
                value: a,
                getSnapshot: t
            };
            return r.queue = u,
            lh(Gd.bind(null, s, u, e), [e]),
            s.flags |= 2048,
            Nl(9, $s(), Yd.bind(null, s, u, a, t), null),
            a
        },
        useId: function() {
            var e = Kt()
              , t = $e.identifierPrefix;
            if (qe) {
                var a = Ka
                  , s = Xa;
                a = (s & ~(1 << 32 - ft(s) - 1)).toString(32) + a,
                t = "«" + t + "R" + a,
                a = Fs++,
                0 < a && (t += "H" + a.toString(32)),
                t += "»"
            } else
                a = Zv++,
                t = "«" + t + "r" + a.toString(32) + "»";
            return e.memoizedState = t
        },
        useHostTransitionStatus: su,
        useFormState: Wd,
        useActionState: Wd,
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
            t = ou.bind(null, Ee, !0, a),
            a.dispatch = t,
            [e, t]
        },
        useMemoCache: $r,
        useCacheRefresh: function() {
            return Kt().memoizedState = $v.bind(null, Ee)
        }
    }
      , Th = {
        readContext: Bt,
        use: Js,
        useCallback: ch,
        useContext: Bt,
        useEffect: ih,
        useImperativeHandle: uh,
        useInsertionEffect: sh,
        useLayoutEffect: oh,
        useMemo: fh,
        useReducer: Is,
        useRef: nh,
        useState: function() {
            return Is(Fa)
        },
        useDebugValue: nu,
        useDeferredValue: function(e, t) {
            var a = xt();
            return dh(a, Ke.memoizedState, e, t)
        },
        useTransition: function() {
            var e = Is(Fa)[0]
              , t = xt().memoizedState;
            return [typeof e == "boolean" ? e : Ai(e), t]
        },
        useSyncExternalStore: Pd,
        useId: gh,
        useHostTransitionStatus: su,
        useFormState: eh,
        useActionState: eh,
        useOptimistic: function(e, t) {
            var a = xt();
            return Zd(a, Ke, e, t)
        },
        useMemoCache: $r,
        useCacheRefresh: yh
    }
      , ex = {
        readContext: Bt,
        use: Js,
        useCallback: ch,
        useContext: Bt,
        useEffect: ih,
        useImperativeHandle: uh,
        useInsertionEffect: sh,
        useLayoutEffect: oh,
        useMemo: fh,
        useReducer: eu,
        useRef: nh,
        useState: function() {
            return eu(Fa)
        },
        useDebugValue: nu,
        useDeferredValue: function(e, t) {
            var a = xt();
            return Ke === null ? lu(a, e, t) : dh(a, Ke.memoizedState, e, t)
        },
        useTransition: function() {
            var e = eu(Fa)[0]
              , t = xt().memoizedState;
            return [typeof e == "boolean" ? e : Ai(e), t]
        },
        useSyncExternalStore: Pd,
        useId: gh,
        useHostTransitionStatus: su,
        useFormState: ah,
        useActionState: ah,
        useOptimistic: function(e, t) {
            var a = xt();
            return Ke !== null ? Zd(a, Ke, e, t) : (a.baseState = e,
            [e, a.queue.dispatch])
        },
        useMemoCache: $r,
        useCacheRefresh: yh
    }
      , El = null
      , Ci = 0;
    function ao(e) {
        var t = Ci;
        return Ci += 1,
        El === null && (El = []),
        Rd(El, e, t)
    }
    function Di(e, t) {
        t = t.props.ref,
        e.ref = t !== void 0 ? t : null
    }
    function no(e, t) {
        throw t.$$typeof === x ? Error(o(525)) : (e = Object.prototype.toString.call(t),
        Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }
    function jh(e) {
        var t = e._init;
        return t(e._payload)
    }
    function wh(e) {
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
        function s(_) {
            for (var E = new Map; _ !== null; )
                _.key !== null ? E.set(_.key, _) : E.set(_.index, _),
                _ = _.sibling;
            return E
        }
        function r(_, E) {
            return _ = Ga(_, E),
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
        function b(_, E, V, F) {
            return E === null || E.tag !== 6 ? (E = Cr(V, _.mode, F),
            E.return = _,
            E) : (E = r(E, V),
            E.return = _,
            E)
        }
        function A(_, E, V, F) {
            var ue = V.type;
            return ue === C ? K(_, E, V.props.children, F, V.key) : E !== null && (E.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === Q && jh(ue) === E.type) ? (E = r(E, V.props),
            Di(E, V),
            E.return = _,
            E) : (E = ks(V.type, V.key, V.props, null, _.mode, F),
            Di(E, V),
            E.return = _,
            E)
        }
        function z(_, E, V, F) {
            return E === null || E.tag !== 4 || E.stateNode.containerInfo !== V.containerInfo || E.stateNode.implementation !== V.implementation ? (E = Dr(V, _.mode, F),
            E.return = _,
            E) : (E = r(E, V.children || []),
            E.return = _,
            E)
        }
        function K(_, E, V, F, ue) {
            return E === null || E.tag !== 7 ? (E = kn(V, _.mode, F, ue),
            E.return = _,
            E) : (E = r(E, V),
            E.return = _,
            E)
        }
        function $(_, E, V) {
            if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
                return E = Cr("" + E, _.mode, V),
                E.return = _,
                E;
            if (typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                case S:
                    return V = ks(E.type, E.key, E.props, null, _.mode, V),
                    Di(V, E),
                    V.return = _,
                    V;
                case w:
                    return E = Dr(E, _.mode, V),
                    E.return = _,
                    E;
                case Q:
                    var F = E._init;
                    return E = F(E._payload),
                    $(_, E, V)
                }
                if (k(E) || ce(E))
                    return E = kn(E, _.mode, V, null),
                    E.return = _,
                    E;
                if (typeof E.then == "function")
                    return $(_, ao(E), V);
                if (E.$$typeof === B)
                    return $(_, Ys(_, E), V);
                no(_, E)
            }
            return null
        }
        function H(_, E, V, F) {
            var ue = E !== null ? E.key : null;
            if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint")
                return ue !== null ? null : b(_, E, "" + V, F);
            if (typeof V == "object" && V !== null) {
                switch (V.$$typeof) {
                case S:
                    return V.key === ue ? A(_, E, V, F) : null;
                case w:
                    return V.key === ue ? z(_, E, V, F) : null;
                case Q:
                    return ue = V._init,
                    V = ue(V._payload),
                    H(_, E, V, F)
                }
                if (k(V) || ce(V))
                    return ue !== null ? null : K(_, E, V, F, null);
                if (typeof V.then == "function")
                    return H(_, E, ao(V), F);
                if (V.$$typeof === B)
                    return H(_, E, Ys(_, V), F);
                no(_, V)
            }
            return null
        }
        function Y(_, E, V, F, ue) {
            if (typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint")
                return _ = _.get(V) || null,
                b(E, _, "" + F, ue);
            if (typeof F == "object" && F !== null) {
                switch (F.$$typeof) {
                case S:
                    return _ = _.get(F.key === null ? V : F.key) || null,
                    A(E, _, F, ue);
                case w:
                    return _ = _.get(F.key === null ? V : F.key) || null,
                    z(E, _, F, ue);
                case Q:
                    var Me = F._init;
                    return F = Me(F._payload),
                    Y(_, E, V, F, ue)
                }
                if (k(F) || ce(F))
                    return _ = _.get(V) || null,
                    K(E, _, F, ue, null);
                if (typeof F.then == "function")
                    return Y(_, E, V, ao(F), ue);
                if (F.$$typeof === B)
                    return Y(_, E, V, Ys(E, F), ue);
                no(E, F)
            }
            return null
        }
        function ve(_, E, V, F) {
            for (var ue = null, Me = null, de = E, ge = E = 0, Et = null; de !== null && ge < V.length; ge++) {
                de.index > ge ? (Et = de,
                de = null) : Et = de.sibling;
                var Pe = H(_, de, V[ge], F);
                if (Pe === null) {
                    de === null && (de = Et);
                    break
                }
                e && de && Pe.alternate === null && t(_, de),
                E = u(Pe, E, ge),
                Me === null ? ue = Pe : Me.sibling = Pe,
                Me = Pe,
                de = Et
            }
            if (ge === V.length)
                return a(_, de),
                qe && Pn(_, ge),
                ue;
            if (de === null) {
                for (; ge < V.length; ge++)
                    de = $(_, V[ge], F),
                    de !== null && (E = u(de, E, ge),
                    Me === null ? ue = de : Me.sibling = de,
                    Me = de);
                return qe && Pn(_, ge),
                ue
            }
            for (de = s(de); ge < V.length; ge++)
                Et = Y(de, _, ge, V[ge], F),
                Et !== null && (e && Et.alternate !== null && de.delete(Et.key === null ? ge : Et.key),
                E = u(Et, E, ge),
                Me === null ? ue = Et : Me.sibling = Et,
                Me = Et);
            return e && de.forEach(function(Cn) {
                return t(_, Cn)
            }),
            qe && Pn(_, ge),
            ue
        }
        function pe(_, E, V, F) {
            if (V == null)
                throw Error(o(151));
            for (var ue = null, Me = null, de = E, ge = E = 0, Et = null, Pe = V.next(); de !== null && !Pe.done; ge++,
            Pe = V.next()) {
                de.index > ge ? (Et = de,
                de = null) : Et = de.sibling;
                var Cn = H(_, de, Pe.value, F);
                if (Cn === null) {
                    de === null && (de = Et);
                    break
                }
                e && de && Cn.alternate === null && t(_, de),
                E = u(Cn, E, ge),
                Me === null ? ue = Cn : Me.sibling = Cn,
                Me = Cn,
                de = Et
            }
            if (Pe.done)
                return a(_, de),
                qe && Pn(_, ge),
                ue;
            if (de === null) {
                for (; !Pe.done; ge++,
                Pe = V.next())
                    Pe = $(_, Pe.value, F),
                    Pe !== null && (E = u(Pe, E, ge),
                    Me === null ? ue = Pe : Me.sibling = Pe,
                    Me = Pe);
                return qe && Pn(_, ge),
                ue
            }
            for (de = s(de); !Pe.done; ge++,
            Pe = V.next())
                Pe = Y(de, _, ge, Pe.value, F),
                Pe !== null && (e && Pe.alternate !== null && de.delete(Pe.key === null ? ge : Pe.key),
                E = u(Pe, E, ge),
                Me === null ? ue = Pe : Me.sibling = Pe,
                Me = Pe);
            return e && de.forEach(function(tb) {
                return t(_, tb)
            }),
            qe && Pn(_, ge),
            ue
        }
        function Qe(_, E, V, F) {
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
                                        F = r(E, V.props.children),
                                        F.return = _,
                                        _ = F;
                                        break e
                                    }
                                } else if (E.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === Q && jh(ue) === E.type) {
                                    a(_, E.sibling),
                                    F = r(E, V.props),
                                    Di(F, V),
                                    F.return = _,
                                    _ = F;
                                    break e
                                }
                                a(_, E);
                                break
                            } else
                                t(_, E);
                            E = E.sibling
                        }
                        V.type === C ? (F = kn(V.props.children, _.mode, F, V.key),
                        F.return = _,
                        _ = F) : (F = ks(V.type, V.key, V.props, null, _.mode, F),
                        Di(F, V),
                        F.return = _,
                        _ = F)
                    }
                    return y(_);
                case w:
                    e: {
                        for (ue = V.key; E !== null; ) {
                            if (E.key === ue)
                                if (E.tag === 4 && E.stateNode.containerInfo === V.containerInfo && E.stateNode.implementation === V.implementation) {
                                    a(_, E.sibling),
                                    F = r(E, V.children || []),
                                    F.return = _,
                                    _ = F;
                                    break e
                                } else {
                                    a(_, E);
                                    break
                                }
                            else
                                t(_, E);
                            E = E.sibling
                        }
                        F = Dr(V, _.mode, F),
                        F.return = _,
                        _ = F
                    }
                    return y(_);
                case Q:
                    return ue = V._init,
                    V = ue(V._payload),
                    Qe(_, E, V, F)
                }
                if (k(V))
                    return ve(_, E, V, F);
                if (ce(V)) {
                    if (ue = ce(V),
                    typeof ue != "function")
                        throw Error(o(150));
                    return V = ue.call(V),
                    pe(_, E, V, F)
                }
                if (typeof V.then == "function")
                    return Qe(_, E, ao(V), F);
                if (V.$$typeof === B)
                    return Qe(_, E, Ys(_, V), F);
                no(_, V)
            }
            return typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint" ? (V = "" + V,
            E !== null && E.tag === 6 ? (a(_, E.sibling),
            F = r(E, V),
            F.return = _,
            _ = F) : (a(_, E),
            F = Cr(V, _.mode, F),
            F.return = _,
            _ = F),
            y(_)) : a(_, E)
        }
        return function(_, E, V, F) {
            try {
                Ci = 0;
                var ue = Qe(_, E, V, F);
                return El = null,
                ue
            } catch (de) {
                if (de === xi || de === Xs)
                    throw de;
                var Me = $t(29, de, null, _.mode);
                return Me.lanes = F,
                Me.return = _,
                Me
            } finally {}
        }
    }
    var Cl = wh(!0)
      , Ah = wh(!1)
      , ha = q(null)
      , Oa = null;
    function hn(e) {
        var t = e.alternate;
        X(wt, wt.current & 1),
        X(ha, e),
        Oa === null && (t === null || jl.current !== null || t.memoizedState !== null) && (Oa = e)
    }
    function Nh(e) {
        if (e.tag === 22) {
            if (X(wt, wt.current),
            X(ha, e),
            Oa === null) {
                var t = e.alternate;
                t !== null && t.memoizedState !== null && (Oa = e)
            }
        } else
            mn()
    }
    function mn() {
        X(wt, wt.current),
        X(ha, ha.current)
    }
    function Ja(e) {
        J(ha),
        Oa === e && (Oa = null),
        J(wt)
    }
    var wt = q(0);
    function lo(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var a = t.memoizedState;
                if (a !== null && (a = a.dehydrated,
                a === null || a.data === "$?" || Iu(a)))
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
    function ru(e, t, a, s) {
        t = e.memoizedState,
        a = a(s, t),
        a = a == null ? t : v({}, t, a),
        e.memoizedState = a,
        e.lanes === 0 && (e.updateQueue.baseState = a)
    }
    var uu = {
        enqueueSetState: function(e, t, a) {
            e = e._reactInternals;
            var s = aa()
              , r = cn(s);
            r.payload = t,
            a != null && (r.callback = a),
            t = fn(e, r, s),
            t !== null && (na(t, e, s),
            Si(t, e, s))
        },
        enqueueReplaceState: function(e, t, a) {
            e = e._reactInternals;
            var s = aa()
              , r = cn(s);
            r.tag = 1,
            r.payload = t,
            a != null && (r.callback = a),
            t = fn(e, r, s),
            t !== null && (na(t, e, s),
            Si(t, e, s))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var a = aa()
              , s = cn(a);
            s.tag = 2,
            t != null && (s.callback = t),
            t = fn(e, s, a),
            t !== null && (na(t, e, a),
            Si(t, e, a))
        }
    };
    function Eh(e, t, a, s, r, u, y) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, u, y) : t.prototype && t.prototype.isPureReactComponent ? !fi(a, s) || !fi(r, u) : !0
    }
    function Ch(e, t, a, s) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, s),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, s),
        t.state !== e && uu.enqueueReplaceState(t, t.state, null)
    }
    function Qn(e, t) {
        var a = t;
        if ("ref"in t) {
            a = {};
            for (var s in t)
                s !== "ref" && (a[s] = t[s])
        }
        if (e = e.defaultProps) {
            a === t && (a = v({}, a));
            for (var r in e)
                a[r] === void 0 && (a[r] = e[r])
        }
        return a
    }
    var io = typeof reportError == "function" ? reportError : function(e) {
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
        io(e)
    }
    function Mh(e) {
        console.error(e)
    }
    function _h(e) {
        io(e)
    }
    function so(e, t) {
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
    function Oh(e, t, a) {
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
    function cu(e, t, a) {
        return a = cn(a),
        a.tag = 3,
        a.payload = {
            element: null
        },
        a.callback = function() {
            so(e, t)
        }
        ,
        a
    }
    function Rh(e) {
        return e = cn(e),
        e.tag = 3,
        e
    }
    function Vh(e, t, a, s) {
        var r = a.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var u = s.value;
            e.payload = function() {
                return r(u)
            }
            ,
            e.callback = function() {
                Oh(t, a, s)
            }
        }
        var y = a.stateNode;
        y !== null && typeof y.componentDidCatch == "function" && (e.callback = function() {
            Oh(t, a, s),
            typeof r != "function" && (bn === null ? bn = new Set([this]) : bn.add(this));
            var b = s.stack;
            this.componentDidCatch(s.value, {
                componentStack: b !== null ? b : ""
            })
        }
        )
    }
    function tx(e, t, a, s, r) {
        if (a.flags |= 32768,
        s !== null && typeof s == "object" && typeof s.then == "function") {
            if (t = a.alternate,
            t !== null && gi(t, a, r, !0),
            a = ha.current,
            a !== null) {
                switch (a.tag) {
                case 13:
                    return Oa === null ? Vu() : a.alternate === null && ot === 0 && (ot = 3),
                    a.flags &= -257,
                    a.flags |= 65536,
                    a.lanes = r,
                    s === kr ? a.flags |= 16384 : (t = a.updateQueue,
                    t === null ? a.updateQueue = new Set([s]) : t.add(s),
                    Uu(e, s, r)),
                    !1;
                case 22:
                    return a.flags |= 65536,
                    s === kr ? a.flags |= 16384 : (t = a.updateQueue,
                    t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([s])
                    },
                    a.updateQueue = t) : (a = t.retryQueue,
                    a === null ? t.retryQueue = new Set([s]) : a.add(s)),
                    Uu(e, s, r)),
                    !1
                }
                throw Error(o(435, a.tag))
            }
            return Uu(e, s, r),
            Vu(),
            !1
        }
        if (qe)
            return t = ha.current,
            t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            t.flags |= 65536,
            t.lanes = r,
            s !== Or && (e = Error(o(422), {
                cause: s
            }),
            pi(ua(e, a)))) : (s !== Or && (t = Error(o(423), {
                cause: s
            }),
            pi(ua(t, a))),
            e = e.current.alternate,
            e.flags |= 65536,
            r &= -r,
            e.lanes |= r,
            s = ua(s, a),
            r = cu(e.stateNode, s, r),
            qr(e, r),
            ot !== 4 && (ot = 2)),
            !1;
        var u = Error(o(520), {
            cause: s
        });
        if (u = ua(u, a),
        Ui === null ? Ui = [u] : Ui.push(u),
        ot !== 4 && (ot = 2),
        t === null)
            return !0;
        s = ua(s, a),
        a = t;
        do {
            switch (a.tag) {
            case 3:
                return a.flags |= 65536,
                e = r & -r,
                a.lanes |= e,
                e = cu(a.stateNode, s, e),
                qr(a, e),
                !1;
            case 1:
                if (t = a.type,
                u = a.stateNode,
                (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (bn === null || !bn.has(u))))
                    return a.flags |= 65536,
                    r &= -r,
                    a.lanes |= r,
                    r = Rh(r),
                    Vh(r, e, a, s),
                    qr(a, r),
                    !1
            }
            a = a.return
        } while (a !== null);
        return !1
    }
    var zh = Error(o(461))
      , At = !1;
    function _t(e, t, a, s) {
        t.child = e === null ? Ah(t, null, a, s) : Cl(t, e.child, a, s)
    }
    function Uh(e, t, a, s, r) {
        a = a.render;
        var u = t.ref;
        if ("ref"in s) {
            var y = {};
            for (var b in s)
                b !== "ref" && (y[b] = s[b])
        } else
            y = s;
        return Xn(t),
        s = Zr(e, t, a, y, u, r),
        b = Qr(),
        e !== null && !At ? (Fr(e, t, r),
        Ia(e, t, r)) : (qe && b && Mr(t),
        t.flags |= 1,
        _t(e, t, s, r),
        t.child)
    }
    function Bh(e, t, a, s, r) {
        if (e === null) {
            var u = a.type;
            return typeof u == "function" && !Er(u) && u.defaultProps === void 0 && a.compare === null ? (t.tag = 15,
            t.type = u,
            Lh(e, t, u, s, r)) : (e = ks(a.type, null, s, t, t.mode, r),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (u = e.child,
        !vu(e, r)) {
            var y = u.memoizedProps;
            if (a = a.compare,
            a = a !== null ? a : fi,
            a(y, s) && e.ref === t.ref)
                return Ia(e, t, r)
        }
        return t.flags |= 1,
        e = Ga(u, s),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function Lh(e, t, a, s, r) {
        if (e !== null) {
            var u = e.memoizedProps;
            if (fi(u, s) && e.ref === t.ref)
                if (At = !1,
                t.pendingProps = s = u,
                vu(e, r))
                    (e.flags & 131072) !== 0 && (At = !0);
                else
                    return t.lanes = e.lanes,
                    Ia(e, t, r)
        }
        return fu(e, t, a, s, r)
    }
    function kh(e, t, a) {
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
                return Hh(e, t, s, a)
            }
            if ((a & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                e !== null && Gs(t, u !== null ? u.cachePool : null),
                u !== null ? Ld(t, u) : Gr(),
                Nh(t);
            else
                return t.lanes = t.childLanes = 536870912,
                Hh(e, t, u !== null ? u.baseLanes | a : a, a)
        } else
            u !== null ? (Gs(t, u.cachePool),
            Ld(t, u),
            mn(),
            t.memoizedState = null) : (e !== null && Gs(t, null),
            Gr(),
            mn());
        return _t(e, t, r, a),
        t.child
    }
    function Hh(e, t, a, s) {
        var r = Lr();
        return r = r === null ? null : {
            parent: jt._currentValue,
            pool: r
        },
        t.memoizedState = {
            baseLanes: a,
            cachePool: r
        },
        e !== null && Gs(t, null),
        Gr(),
        Nh(t),
        e !== null && gi(e, t, s, !0),
        null
    }
    function oo(e, t) {
        var a = t.ref;
        if (a === null)
            e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof a != "function" && typeof a != "object")
                throw Error(o(284));
            (e === null || e.ref !== a) && (t.flags |= 4194816)
        }
    }
    function fu(e, t, a, s, r) {
        return Xn(t),
        a = Zr(e, t, a, s, void 0, r),
        s = Qr(),
        e !== null && !At ? (Fr(e, t, r),
        Ia(e, t, r)) : (qe && s && Mr(t),
        t.flags |= 1,
        _t(e, t, a, r),
        t.child)
    }
    function Ph(e, t, a, s, r, u) {
        return Xn(t),
        t.updateQueue = null,
        a = Hd(t, s, a, r),
        kd(e),
        s = Qr(),
        e !== null && !At ? (Fr(e, t, u),
        Ia(e, t, u)) : (qe && s && Mr(t),
        t.flags |= 1,
        _t(e, t, a, u),
        t.child)
    }
    function qh(e, t, a, s, r) {
        if (Xn(t),
        t.stateNode === null) {
            var u = vl
              , y = a.contextType;
            typeof y == "object" && y !== null && (u = Bt(y)),
            u = new a(s,u),
            t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null,
            u.updater = uu,
            t.stateNode = u,
            u._reactInternals = t,
            u = t.stateNode,
            u.props = s,
            u.state = t.memoizedState,
            u.refs = {},
            Hr(t),
            y = a.contextType,
            u.context = typeof y == "object" && y !== null ? Bt(y) : vl,
            u.state = t.memoizedState,
            y = a.getDerivedStateFromProps,
            typeof y == "function" && (ru(t, a, y, s),
            u.state = t.memoizedState),
            typeof a.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (y = u.state,
            typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(),
            y !== u.state && uu.enqueueReplaceState(u, u.state, null),
            ji(t, s, u, r),
            Ti(),
            u.state = t.memoizedState),
            typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            s = !0
        } else if (e === null) {
            u = t.stateNode;
            var b = t.memoizedProps
              , A = Qn(a, b);
            u.props = A;
            var z = u.context
              , K = a.contextType;
            y = vl,
            typeof K == "object" && K !== null && (y = Bt(K));
            var $ = a.getDerivedStateFromProps;
            K = typeof $ == "function" || typeof u.getSnapshotBeforeUpdate == "function",
            b = t.pendingProps !== b,
            K || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (b || z !== y) && Ch(t, u, s, y),
            un = !1;
            var H = t.memoizedState;
            u.state = H,
            ji(t, s, u, r),
            Ti(),
            z = t.memoizedState,
            b || H !== z || un ? (typeof $ == "function" && (ru(t, a, $, s),
            z = t.memoizedState),
            (A = un || Eh(t, a, A, s, H, z, y)) ? (K || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()),
            typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = s,
            t.memoizedState = z),
            u.props = s,
            u.state = z,
            u.context = y,
            s = A) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            s = !1)
        } else {
            u = t.stateNode,
            Pr(e, t),
            y = t.memoizedProps,
            K = Qn(a, y),
            u.props = K,
            $ = t.pendingProps,
            H = u.context,
            z = a.contextType,
            A = vl,
            typeof z == "object" && z !== null && (A = Bt(z)),
            b = a.getDerivedStateFromProps,
            (z = typeof b == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (y !== $ || H !== A) && Ch(t, u, s, A),
            un = !1,
            H = t.memoizedState,
            u.state = H,
            ji(t, s, u, r),
            Ti();
            var Y = t.memoizedState;
            y !== $ || H !== Y || un || e !== null && e.dependencies !== null && qs(e.dependencies) ? (typeof b == "function" && (ru(t, a, b, s),
            Y = t.memoizedState),
            (K = un || Eh(t, a, K, s, H, Y, A) || e !== null && e.dependencies !== null && qs(e.dependencies)) ? (z || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(s, Y, A),
            typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(s, Y, A)),
            typeof u.componentDidUpdate == "function" && (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || y === e.memoizedProps && H === e.memoizedState || (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && H === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = s,
            t.memoizedState = Y),
            u.props = s,
            u.state = Y,
            u.context = A,
            s = K) : (typeof u.componentDidUpdate != "function" || y === e.memoizedProps && H === e.memoizedState || (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && H === e.memoizedState || (t.flags |= 1024),
            s = !1)
        }
        return u = s,
        oo(e, t),
        s = (t.flags & 128) !== 0,
        u || s ? (u = t.stateNode,
        a = s && typeof a.getDerivedStateFromError != "function" ? null : u.render(),
        t.flags |= 1,
        e !== null && s ? (t.child = Cl(t, e.child, null, r),
        t.child = Cl(t, null, a, r)) : _t(e, t, a, r),
        t.memoizedState = u.state,
        e = t.child) : e = Ia(e, t, r),
        e
    }
    function Yh(e, t, a, s) {
        return mi(),
        t.flags |= 256,
        _t(e, t, a, s),
        t.child
    }
    var du = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function hu(e) {
        return {
            baseLanes: e,
            cachePool: Md()
        }
    }
    function mu(e, t, a) {
        return e = e !== null ? e.childLanes & ~a : 0,
        t && (e |= ma),
        e
    }
    function Gh(e, t, a) {
        var s = t.pendingProps, r = !1, u = (t.flags & 128) !== 0, y;
        if ((y = u) || (y = e !== null && e.memoizedState === null ? !1 : (wt.current & 2) !== 0),
        y && (r = !0,
        t.flags &= -129),
        y = (t.flags & 32) !== 0,
        t.flags &= -33,
        e === null) {
            if (qe) {
                if (r ? hn(t) : mn(),
                qe) {
                    var b = st, A;
                    if (A = b) {
                        e: {
                            for (A = b,
                            b = _a; A.nodeType !== 8; ) {
                                if (!b) {
                                    b = null;
                                    break e
                                }
                                if (A = Na(A.nextSibling),
                                A === null) {
                                    b = null;
                                    break e
                                }
                            }
                            b = A
                        }
                        b !== null ? (t.memoizedState = {
                            dehydrated: b,
                            treeContext: Hn !== null ? {
                                id: Xa,
                                overflow: Ka
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        },
                        A = $t(18, null, null, 0),
                        A.stateNode = b,
                        A.return = t,
                        t.child = A,
                        Pt = t,
                        st = null,
                        A = !0) : A = !1
                    }
                    A || Yn(t)
                }
                if (b = t.memoizedState,
                b !== null && (b = b.dehydrated,
                b !== null))
                    return Iu(b) ? t.lanes = 32 : t.lanes = 536870912,
                    null;
                Ja(t)
            }
            return b = s.children,
            s = s.fallback,
            r ? (mn(),
            r = t.mode,
            b = ro({
                mode: "hidden",
                children: b
            }, r),
            s = kn(s, r, a, null),
            b.return = t,
            s.return = t,
            b.sibling = s,
            t.child = b,
            r = t.child,
            r.memoizedState = hu(a),
            r.childLanes = mu(e, y, a),
            t.memoizedState = du,
            s) : (hn(t),
            pu(t, b))
        }
        if (A = e.memoizedState,
        A !== null && (b = A.dehydrated,
        b !== null)) {
            if (u)
                t.flags & 256 ? (hn(t),
                t.flags &= -257,
                t = gu(e, t, a)) : t.memoizedState !== null ? (mn(),
                t.child = e.child,
                t.flags |= 128,
                t = null) : (mn(),
                r = s.fallback,
                b = t.mode,
                s = ro({
                    mode: "visible",
                    children: s.children
                }, b),
                r = kn(r, b, a, null),
                r.flags |= 2,
                s.return = t,
                r.return = t,
                s.sibling = r,
                t.child = s,
                Cl(t, e.child, null, a),
                s = t.child,
                s.memoizedState = hu(a),
                s.childLanes = mu(e, y, a),
                t.memoizedState = du,
                t = r);
            else if (hn(t),
            Iu(b)) {
                if (y = b.nextSibling && b.nextSibling.dataset,
                y)
                    var z = y.dgst;
                y = z,
                s = Error(o(419)),
                s.stack = "",
                s.digest = y,
                pi({
                    value: s,
                    source: null,
                    stack: null
                }),
                t = gu(e, t, a)
            } else if (At || gi(e, t, a, !1),
            y = (a & e.childLanes) !== 0,
            At || y) {
                if (y = $e,
                y !== null && (s = a & -a,
                s = (s & 42) !== 0 ? 1 : il(s),
                s = (s & (y.suspendedLanes | a)) !== 0 ? 0 : s,
                s !== 0 && s !== A.retryLane))
                    throw A.retryLane = s,
                    yl(e, s),
                    na(y, e, s),
                    zh;
                b.data === "$?" || Vu(),
                t = gu(e, t, a)
            } else
                b.data === "$?" ? (t.flags |= 192,
                t.child = e.child,
                t = null) : (e = A.treeContext,
                st = Na(b.nextSibling),
                Pt = t,
                qe = !0,
                qn = null,
                _a = !1,
                e !== null && (fa[da++] = Xa,
                fa[da++] = Ka,
                fa[da++] = Hn,
                Xa = e.id,
                Ka = e.overflow,
                Hn = t),
                t = pu(t, s.children),
                t.flags |= 4096);
            return t
        }
        return r ? (mn(),
        r = s.fallback,
        b = t.mode,
        A = e.child,
        z = A.sibling,
        s = Ga(A, {
            mode: "hidden",
            children: s.children
        }),
        s.subtreeFlags = A.subtreeFlags & 65011712,
        z !== null ? r = Ga(z, r) : (r = kn(r, b, a, null),
        r.flags |= 2),
        r.return = t,
        s.return = t,
        s.sibling = r,
        t.child = s,
        s = r,
        r = t.child,
        b = e.child.memoizedState,
        b === null ? b = hu(a) : (A = b.cachePool,
        A !== null ? (z = jt._currentValue,
        A = A.parent !== z ? {
            parent: z,
            pool: z
        } : A) : A = Md(),
        b = {
            baseLanes: b.baseLanes | a,
            cachePool: A
        }),
        r.memoizedState = b,
        r.childLanes = mu(e, y, a),
        t.memoizedState = du,
        s) : (hn(t),
        a = e.child,
        e = a.sibling,
        a = Ga(a, {
            mode: "visible",
            children: s.children
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
    function pu(e, t) {
        return t = ro({
            mode: "visible",
            children: t
        }, e.mode),
        t.return = e,
        e.child = t
    }
    function ro(e, t) {
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
    function gu(e, t, a) {
        return Cl(t, e.child, null, a),
        e = pu(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function Xh(e, t, a) {
        e.lanes |= t;
        var s = e.alternate;
        s !== null && (s.lanes |= t),
        Vr(e.return, t, a)
    }
    function yu(e, t, a, s, r) {
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
    function Kh(e, t, a) {
        var s = t.pendingProps
          , r = s.revealOrder
          , u = s.tail;
        if (_t(e, t, s.children, a),
        s = wt.current,
        (s & 2) !== 0)
            s = s & 1 | 2,
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
            s &= 1
        }
        switch (X(wt, s),
        r) {
        case "forwards":
            for (a = t.child,
            r = null; a !== null; )
                e = a.alternate,
                e !== null && lo(e) === null && (r = a),
                a = a.sibling;
            a = r,
            a === null ? (r = t.child,
            t.child = null) : (r = a.sibling,
            a.sibling = null),
            yu(t, !1, r, a, u);
            break;
        case "backwards":
            for (a = null,
            r = t.child,
            t.child = null; r !== null; ) {
                if (e = r.alternate,
                e !== null && lo(e) === null) {
                    t.child = r;
                    break
                }
                e = r.sibling,
                r.sibling = a,
                a = r,
                r = e
            }
            yu(t, !0, a, null, u);
            break;
        case "together":
            yu(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
        return t.child
    }
    function Ia(e, t, a) {
        if (e !== null && (t.dependencies = e.dependencies),
        xn |= t.lanes,
        (a & t.childLanes) === 0)
            if (e !== null) {
                if (gi(e, t, a, !1),
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
        !!(e !== null && qs(e)))
    }
    function ax(e, t, a) {
        switch (t.tag) {
        case 3:
            Te(t, t.stateNode.containerInfo),
            rn(t, jt, e.memoizedState.cache),
            mi();
            break;
        case 27:
        case 5:
            ze(t);
            break;
        case 4:
            Te(t, t.stateNode.containerInfo);
            break;
        case 10:
            rn(t, t.type, t.memoizedProps.value);
            break;
        case 13:
            var s = t.memoizedState;
            if (s !== null)
                return s.dehydrated !== null ? (hn(t),
                t.flags |= 128,
                null) : (a & t.child.childLanes) !== 0 ? Gh(e, t, a) : (hn(t),
                e = Ia(e, t, a),
                e !== null ? e.sibling : null);
            hn(t);
            break;
        case 19:
            var r = (e.flags & 128) !== 0;
            if (s = (a & t.childLanes) !== 0,
            s || (gi(e, t, a, !1),
            s = (a & t.childLanes) !== 0),
            r) {
                if (s)
                    return Kh(e, t, a);
                t.flags |= 128
            }
            if (r = t.memoizedState,
            r !== null && (r.rendering = null,
            r.tail = null,
            r.lastEffect = null),
            X(wt, wt.current),
            s)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
            kh(e, t, a);
        case 24:
            rn(t, jt, e.memoizedState.cache)
        }
        return Ia(e, t, a)
    }
    function Zh(e, t, a) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
                At = !0;
            else {
                if (!vu(e, a) && (t.flags & 128) === 0)
                    return At = !1,
                    ax(e, t, a);
                At = (e.flags & 131072) !== 0
            }
        else
            At = !1,
            qe && (t.flags & 1048576) !== 0 && jd(t, Ps, t.index);
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
                    Er(s) ? (e = Qn(s, e),
                    t.tag = 1,
                    t = qh(null, t, s, e, a)) : (t.tag = 0,
                    t = fu(null, t, s, e, a));
                else {
                    if (s != null) {
                        if (r = s.$$typeof,
                        r === G) {
                            t.tag = 11,
                            t = Uh(null, t, s, e, a);
                            break e
                        } else if (r === W) {
                            t.tag = 14,
                            t = Bh(null, t, s, e, a);
                            break e
                        }
                    }
                    throw t = ee(s) || s,
                    Error(o(306, t, ""))
                }
            }
            return t;
        case 0:
            return fu(e, t, t.type, t.pendingProps, a);
        case 1:
            return s = t.type,
            r = Qn(s, t.pendingProps),
            qh(e, t, s, r, a);
        case 3:
            e: {
                if (Te(t, t.stateNode.containerInfo),
                e === null)
                    throw Error(o(387));
                s = t.pendingProps;
                var u = t.memoizedState;
                r = u.element,
                Pr(e, t),
                ji(t, s, null, a);
                var y = t.memoizedState;
                if (s = y.cache,
                rn(t, jt, s),
                s !== u.cache && zr(t, [jt], a, !0),
                Ti(),
                s = y.element,
                u.isDehydrated)
                    if (u = {
                        element: s,
                        isDehydrated: !1,
                        cache: y.cache
                    },
                    t.updateQueue.baseState = u,
                    t.memoizedState = u,
                    t.flags & 256) {
                        t = Yh(e, t, s, a);
                        break e
                    } else if (s !== r) {
                        r = ua(Error(o(424)), t),
                        pi(r),
                        t = Yh(e, t, s, a);
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
                        for (st = Na(e.firstChild),
                        Pt = t,
                        qe = !0,
                        qn = null,
                        _a = !0,
                        a = Ah(t, null, s, a),
                        t.child = a; a; )
                            a.flags = a.flags & -3 | 4096,
                            a = a.sibling
                    }
                else {
                    if (mi(),
                    s === r) {
                        t = Ia(e, t, a);
                        break e
                    }
                    _t(e, t, s, a)
                }
                t = t.child
            }
            return t;
        case 26:
            return oo(e, t),
            e === null ? (a = Im(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : qe || (a = t.type,
            e = t.pendingProps,
            s = jo(I.current).createElement(a),
            s[Tt] = t,
            s[Dt] = e,
            Rt(s, a, e),
            dt(s),
            t.stateNode = s) : t.memoizedState = Im(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
            null;
        case 27:
            return ze(t),
            e === null && qe && (s = t.stateNode = Qm(t.type, t.pendingProps, I.current),
            Pt = t,
            _a = !0,
            r = st,
            jn(t.type) ? ($u = r,
            st = Na(s.firstChild)) : st = r),
            _t(e, t, t.pendingProps.children, a),
            oo(e, t),
            e === null && (t.flags |= 4194304),
            t.child;
        case 5:
            return e === null && qe && ((r = s = st) && (s = Mx(s, t.type, t.pendingProps, _a),
            s !== null ? (t.stateNode = s,
            Pt = t,
            st = Na(s.firstChild),
            _a = !1,
            r = !0) : r = !1),
            r || Yn(t)),
            ze(t),
            r = t.type,
            u = t.pendingProps,
            y = e !== null ? e.memoizedProps : null,
            s = u.children,
            Qu(r, u) ? s = null : y !== null && Qu(r, y) && (t.flags |= 32),
            t.memoizedState !== null && (r = Zr(e, t, Qv, null, null, a),
            Xi._currentValue = r),
            oo(e, t),
            _t(e, t, s, a),
            t.child;
        case 6:
            return e === null && qe && ((e = a = st) && (a = _x(a, t.pendingProps, _a),
            a !== null ? (t.stateNode = a,
            Pt = t,
            st = null,
            e = !0) : e = !1),
            e || Yn(t)),
            null;
        case 13:
            return Gh(e, t, a);
        case 4:
            return Te(t, t.stateNode.containerInfo),
            s = t.pendingProps,
            e === null ? t.child = Cl(t, null, s, a) : _t(e, t, s, a),
            t.child;
        case 11:
            return Uh(e, t, t.type, t.pendingProps, a);
        case 7:
            return _t(e, t, t.pendingProps, a),
            t.child;
        case 8:
            return _t(e, t, t.pendingProps.children, a),
            t.child;
        case 12:
            return _t(e, t, t.pendingProps.children, a),
            t.child;
        case 10:
            return s = t.pendingProps,
            rn(t, t.type, s.value),
            _t(e, t, s.children, a),
            t.child;
        case 9:
            return r = t.type._context,
            s = t.pendingProps.children,
            Xn(t),
            r = Bt(r),
            s = s(r),
            t.flags |= 1,
            _t(e, t, s, a),
            t.child;
        case 14:
            return Bh(e, t, t.type, t.pendingProps, a);
        case 15:
            return Lh(e, t, t.type, t.pendingProps, a);
        case 19:
            return Kh(e, t, a);
        case 31:
            return s = t.pendingProps,
            a = t.mode,
            s = {
                mode: s.mode,
                children: s.children
            },
            e === null ? (a = ro(s, a),
            a.ref = t.ref,
            t.child = a,
            a.return = t,
            t = a) : (a = Ga(e.child, s),
            a.ref = t.ref,
            t.child = a,
            a.return = t,
            t = a),
            t;
        case 22:
            return kh(e, t, a);
        case 24:
            return Xn(t),
            s = Bt(jt),
            e === null ? (r = Lr(),
            r === null && (r = $e,
            u = Ur(),
            r.pooledCache = u,
            u.refCount++,
            u !== null && (r.pooledCacheLanes |= a),
            r = u),
            t.memoizedState = {
                parent: s,
                cache: r
            },
            Hr(t),
            rn(t, jt, r)) : ((e.lanes & a) !== 0 && (Pr(e, t),
            ji(t, null, null, a),
            Ti()),
            r = e.memoizedState,
            u = t.memoizedState,
            r.parent !== s ? (r = {
                parent: s,
                cache: s
            },
            t.memoizedState = r,
            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = r),
            rn(t, jt, s)) : (s = u.cache,
            rn(t, jt, s),
            s !== r.cache && zr(t, [jt], a, !0))),
            _t(e, t, t.pendingProps.children, a),
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
            if (t = ha.current,
            t !== null && ((Be & 4194048) === Be ? Oa !== null : (Be & 62914560) !== Be && (Be & 536870912) === 0 || t !== Oa))
                throw bi = kr,
                _d;
            e.flags |= 8192
        }
    }
    function uo(e, t) {
        t !== null && (e.flags |= 4),
        e.flags & 16384 && (t = e.tag !== 22 ? ne() : 536870912,
        e.lanes |= t,
        Ol |= t)
    }
    function Mi(e, t) {
        if (!qe)
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
    function at(e) {
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
    function nx(e, t, a) {
        var s = t.pendingProps;
        switch (_r(t),
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
            return at(t),
            null;
        case 1:
            return at(t),
            null;
        case 3:
            return a = t.stateNode,
            s = null,
            e !== null && (s = e.memoizedState.cache),
            t.memoizedState.cache !== s && (t.flags |= 2048),
            Qa(jt),
            ye(),
            a.pendingContext && (a.context = a.pendingContext,
            a.pendingContext = null),
            (e === null || e.child === null) && (hi(t) ? $a(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            Nd())),
            at(t),
            null;
        case 26:
            return a = t.memoizedState,
            e === null ? ($a(t),
            a !== null ? (at(t),
            Qh(t, a)) : (at(t),
            t.flags &= -16777217)) : a ? a !== e.memoizedState ? ($a(t),
            at(t),
            Qh(t, a)) : (at(t),
            t.flags &= -16777217) : (e.memoizedProps !== s && $a(t),
            at(t),
            t.flags &= -16777217),
            null;
        case 27:
            Ue(t),
            a = I.current;
            var r = t.type;
            if (e !== null && t.stateNode != null)
                e.memoizedProps !== s && $a(t);
            else {
                if (!s) {
                    if (t.stateNode === null)
                        throw Error(o(166));
                    return at(t),
                    null
                }
                e = le.current,
                hi(t) ? wd(t) : (e = Qm(r, s, a),
                t.stateNode = e,
                $a(t))
            }
            return at(t),
            null;
        case 5:
            if (Ue(t),
            a = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== s && $a(t);
            else {
                if (!s) {
                    if (t.stateNode === null)
                        throw Error(o(166));
                    return at(t),
                    null
                }
                if (e = le.current,
                hi(t))
                    wd(t);
                else {
                    switch (r = jo(I.current),
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
                    e[Tt] = t,
                    e[Dt] = s;
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
                    e: switch (Rt(e, a, s),
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
                    e && $a(t)
                }
            }
            return at(t),
            t.flags &= -16777217,
            null;
        case 6:
            if (e && t.stateNode != null)
                e.memoizedProps !== s && $a(t);
            else {
                if (typeof s != "string" && t.stateNode === null)
                    throw Error(o(166));
                if (e = I.current,
                hi(t)) {
                    if (e = t.stateNode,
                    a = t.memoizedProps,
                    s = null,
                    r = Pt,
                    r !== null)
                        switch (r.tag) {
                        case 27:
                        case 5:
                            s = r.memoizedProps
                        }
                    e[Tt] = t,
                    e = !!(e.nodeValue === a || s !== null && s.suppressHydrationWarning === !0 || Pm(e.nodeValue, a)),
                    e || Yn(t)
                } else
                    e = jo(e).createTextNode(s),
                    e[Tt] = t,
                    t.stateNode = e
            }
            return at(t),
            null;
        case 13:
            if (s = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (r = hi(t),
                s !== null && s.dehydrated !== null) {
                    if (e === null) {
                        if (!r)
                            throw Error(o(318));
                        if (r = t.memoizedState,
                        r = r !== null ? r.dehydrated : null,
                        !r)
                            throw Error(o(317));
                        r[Tt] = t
                    } else
                        mi(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    at(t),
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
            uo(t, t.updateQueue),
            at(t),
            null;
        case 4:
            return ye(),
            e === null && Yu(t.stateNode.containerInfo),
            at(t),
            null;
        case 10:
            return Qa(t.type),
            at(t),
            null;
        case 19:
            if (J(wt),
            r = t.memoizedState,
            r === null)
                return at(t),
                null;
            if (s = (t.flags & 128) !== 0,
            u = r.rendering,
            u === null)
                if (s)
                    Mi(r, !1);
                else {
                    if (ot !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null; ) {
                            if (u = lo(e),
                            u !== null) {
                                for (t.flags |= 128,
                                Mi(r, !1),
                                e = u.updateQueue,
                                t.updateQueue = e,
                                uo(t, e),
                                t.subtreeFlags = 0,
                                e = a,
                                a = t.child; a !== null; )
                                    Td(a, e),
                                    a = a.sibling;
                                return X(wt, wt.current & 1 | 2),
                                t.child
                            }
                            e = e.sibling
                        }
                    r.tail !== null && ct() > ho && (t.flags |= 128,
                    s = !0,
                    Mi(r, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!s)
                    if (e = lo(u),
                    e !== null) {
                        if (t.flags |= 128,
                        s = !0,
                        e = e.updateQueue,
                        t.updateQueue = e,
                        uo(t, e),
                        Mi(r, !0),
                        r.tail === null && r.tailMode === "hidden" && !u.alternate && !qe)
                            return at(t),
                            null
                    } else
                        2 * ct() - r.renderingStartTime > ho && a !== 536870912 && (t.flags |= 128,
                        s = !0,
                        Mi(r, !1),
                        t.lanes = 4194304);
                r.isBackwards ? (u.sibling = t.child,
                t.child = u) : (e = r.last,
                e !== null ? e.sibling = u : t.child = u,
                r.last = u)
            }
            return r.tail !== null ? (t = r.tail,
            r.rendering = t,
            r.tail = t.sibling,
            r.renderingStartTime = ct(),
            t.sibling = null,
            e = wt.current,
            X(wt, s ? e & 1 | 2 : e & 1),
            t) : (at(t),
            null);
        case 22:
        case 23:
            return Ja(t),
            Xr(),
            s = t.memoizedState !== null,
            e !== null ? e.memoizedState !== null !== s && (t.flags |= 8192) : s && (t.flags |= 8192),
            s ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (at(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : at(t),
            a = t.updateQueue,
            a !== null && uo(t, a.retryQueue),
            a = null,
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
            s = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (s = t.memoizedState.cachePool.pool),
            s !== a && (t.flags |= 2048),
            e !== null && J(Kn),
            null;
        case 24:
            return a = null,
            e !== null && (a = e.memoizedState.cache),
            t.memoizedState.cache !== a && (t.flags |= 2048),
            Qa(jt),
            at(t),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(o(156, t.tag))
    }
    function lx(e, t) {
        switch (_r(t),
        t.tag) {
        case 1:
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return Qa(jt),
            ye(),
            e = t.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 26:
        case 27:
        case 5:
            return Ue(t),
            null;
        case 13:
            if (Ja(t),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(o(340));
                mi()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return J(wt),
            null;
        case 4:
            return ye(),
            null;
        case 10:
            return Qa(t.type),
            null;
        case 22:
        case 23:
            return Ja(t),
            Xr(),
            e !== null && J(Kn),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 24:
            return Qa(jt),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function Fh(e, t) {
        switch (_r(t),
        t.tag) {
        case 3:
            Qa(jt),
            ye();
            break;
        case 26:
        case 27:
        case 5:
            Ue(t);
            break;
        case 4:
            ye();
            break;
        case 13:
            Ja(t);
            break;
        case 19:
            J(wt);
            break;
        case 10:
            Qa(t.type);
            break;
        case 22:
        case 23:
            Ja(t),
            Xr(),
            e !== null && J(Kn);
            break;
        case 24:
            Qa(jt)
        }
    }
    function _i(e, t) {
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
                          , y = a.inst;
                        s = u(),
                        y.destroy = s
                    }
                    a = a.next
                } while (a !== r)
            }
        } catch (b) {
            Ie(t, t.return, b)
        }
    }
    function pn(e, t, a) {
        try {
            var s = t.updateQueue
              , r = s !== null ? s.lastEffect : null;
            if (r !== null) {
                var u = r.next;
                s = u;
                do {
                    if ((s.tag & e) === e) {
                        var y = s.inst
                          , b = y.destroy;
                        if (b !== void 0) {
                            y.destroy = void 0,
                            r = t;
                            var A = a
                              , z = b;
                            try {
                                z()
                            } catch (K) {
                                Ie(r, A, K)
                            }
                        }
                    }
                    s = s.next
                } while (s !== u)
            }
        } catch (K) {
            Ie(t, t.return, K)
        }
    }
    function Jh(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var a = e.stateNode;
            try {
                Bd(t, a)
            } catch (s) {
                Ie(e, e.return, s)
            }
        }
    }
    function Ih(e, t, a) {
        a.props = Qn(e.type, e.memoizedProps),
        a.state = e.memoizedState;
        try {
            a.componentWillUnmount()
        } catch (s) {
            Ie(e, t, s)
        }
    }
    function Oi(e, t) {
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
            Ie(e, t, r)
        }
    }
    function Ra(e, t) {
        var a = e.ref
          , s = e.refCleanup;
        if (a !== null)
            if (typeof s == "function")
                try {
                    s()
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
    function $h(e) {
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
            Ie(e, e.return, r)
        }
    }
    function xu(e, t, a) {
        try {
            var s = e.stateNode;
            Ax(s, e.type, a, t),
            s[Dt] = t
        } catch (r) {
            Ie(e, e.return, r)
        }
    }
    function Wh(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && jn(e.type) || e.tag === 4
    }
    function bu(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || Wh(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.tag === 27 && jn(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function Su(e, t, a) {
        var s = e.tag;
        if (s === 5 || s === 6)
            e = e.stateNode,
            t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a,
            t.appendChild(e),
            a = a._reactRootContainer,
            a != null || t.onclick !== null || (t.onclick = To));
        else if (s !== 4 && (s === 27 && jn(e.type) && (a = e.stateNode,
        t = null),
        e = e.child,
        e !== null))
            for (Su(e, t, a),
            e = e.sibling; e !== null; )
                Su(e, t, a),
                e = e.sibling
    }
    function co(e, t, a) {
        var s = e.tag;
        if (s === 5 || s === 6)
            e = e.stateNode,
            t ? a.insertBefore(e, t) : a.appendChild(e);
        else if (s !== 4 && (s === 27 && jn(e.type) && (a = e.stateNode),
        e = e.child,
        e !== null))
            for (co(e, t, a),
            e = e.sibling; e !== null; )
                co(e, t, a),
                e = e.sibling
    }
    function em(e) {
        var t = e.stateNode
          , a = e.memoizedProps;
        try {
            for (var s = e.type, r = t.attributes; r.length; )
                t.removeAttributeNode(r[0]);
            Rt(t, s, a),
            t[Tt] = e,
            t[Dt] = a
        } catch (u) {
            Ie(e, e.return, u)
        }
    }
    var Wa = !1
      , mt = !1
      , Tu = !1
      , tm = typeof WeakSet == "function" ? WeakSet : Set
      , Nt = null;
    function ix(e, t) {
        if (e = e.containerInfo,
        Ku = Do,
        e = dd(e),
        br(e)) {
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
                        var y = 0
                          , b = -1
                          , A = -1
                          , z = 0
                          , K = 0
                          , $ = e
                          , H = null;
                        t: for (; ; ) {
                            for (var Y; $ !== a || r !== 0 && $.nodeType !== 3 || (b = y + r),
                            $ !== u || s !== 0 && $.nodeType !== 3 || (A = y + s),
                            $.nodeType === 3 && (y += $.nodeValue.length),
                            (Y = $.firstChild) !== null; )
                                H = $,
                                $ = Y;
                            for (; ; ) {
                                if ($ === e)
                                    break t;
                                if (H === a && ++z === r && (b = y),
                                H === u && ++K === s && (A = y),
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
        for (Zu = {
            focusedElem: e,
            selectionRange: a
        },
        Do = !1,
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
                                var ve = Qn(a.type, r, a.elementType === a.type);
                                e = s.getSnapshotBeforeUpdate(ve, u),
                                s.__reactInternalSnapshotBeforeUpdate = e
                            } catch (pe) {
                                Ie(a, a.return, pe)
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo,
                            a = e.nodeType,
                            a === 9)
                                Ju(e);
                            else if (a === 1)
                                switch (e.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    Ju(e);
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
    function am(e, t, a) {
        var s = a.flags;
        switch (a.tag) {
        case 0:
        case 11:
        case 15:
            gn(e, a),
            s & 4 && _i(5, a);
            break;
        case 1:
            if (gn(e, a),
            s & 4)
                if (e = a.stateNode,
                t === null)
                    try {
                        e.componentDidMount()
                    } catch (y) {
                        Ie(a, a.return, y)
                    }
                else {
                    var r = Qn(a.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(r, t, e.__reactInternalSnapshotBeforeUpdate)
                    } catch (y) {
                        Ie(a, a.return, y)
                    }
                }
            s & 64 && Jh(a),
            s & 512 && Oi(a, a.return);
            break;
        case 3:
            if (gn(e, a),
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
                    Bd(e, t)
                } catch (y) {
                    Ie(a, a.return, y)
                }
            }
            break;
        case 27:
            t === null && s & 4 && em(a);
        case 26:
        case 5:
            gn(e, a),
            t === null && s & 4 && $h(a),
            s & 512 && Oi(a, a.return);
            break;
        case 12:
            gn(e, a);
            break;
        case 13:
            gn(e, a),
            s & 4 && im(e, a),
            s & 64 && (e = a.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null && (a = mx.bind(null, a),
            Ox(e, a))));
            break;
        case 22:
            if (s = a.memoizedState !== null || Wa,
            !s) {
                t = t !== null && t.memoizedState !== null || mt,
                r = Wa;
                var u = mt;
                Wa = s,
                (mt = t) && !u ? yn(e, a, (a.subtreeFlags & 8772) !== 0) : gn(e, a),
                Wa = r,
                mt = u
            }
            break;
        case 30:
            break;
        default:
            gn(e, a)
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
        t !== null && De(t)),
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
      , Zt = !1;
    function en(e, t, a) {
        for (a = a.child; a !== null; )
            lm(e, t, a),
            a = a.sibling
    }
    function lm(e, t, a) {
        if (gt && typeof gt.onCommitFiberUnmount == "function")
            try {
                gt.onCommitFiberUnmount(Jt, a)
            } catch {}
        switch (a.tag) {
        case 26:
            mt || Ra(a, t),
            en(e, t, a),
            a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode,
            a.parentNode.removeChild(a));
            break;
        case 27:
            mt || Ra(a, t);
            var s = We
              , r = Zt;
            jn(a.type) && (We = a.stateNode,
            Zt = !1),
            en(e, t, a),
            Pi(a.stateNode),
            We = s,
            Zt = r;
            break;
        case 5:
            mt || Ra(a, t);
        case 6:
            if (s = We,
            r = Zt,
            We = null,
            en(e, t, a),
            We = s,
            Zt = r,
            We !== null)
                if (Zt)
                    try {
                        (We.nodeType === 9 ? We.body : We.nodeName === "HTML" ? We.ownerDocument.body : We).removeChild(a.stateNode)
                    } catch (u) {
                        Ie(a, t, u)
                    }
                else
                    try {
                        We.removeChild(a.stateNode)
                    } catch (u) {
                        Ie(a, t, u)
                    }
            break;
        case 18:
            We !== null && (Zt ? (e = We,
            Km(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, a.stateNode),
            Fi(e)) : Km(We, a.stateNode));
            break;
        case 4:
            s = We,
            r = Zt,
            We = a.stateNode.containerInfo,
            Zt = !0,
            en(e, t, a),
            We = s,
            Zt = r;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            mt || pn(2, a, t),
            mt || pn(4, a, t),
            en(e, t, a);
            break;
        case 1:
            mt || (Ra(a, t),
            s = a.stateNode,
            typeof s.componentWillUnmount == "function" && Ih(a, t, s)),
            en(e, t, a);
            break;
        case 21:
            en(e, t, a);
            break;
        case 22:
            mt = (s = mt) || a.memoizedState !== null,
            en(e, t, a),
            mt = s;
            break;
        default:
            en(e, t, a)
        }
    }
    function im(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null))))
            try {
                Fi(e)
            } catch (a) {
                Ie(t, t.return, a)
            }
    }
    function sx(e) {
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
    function ju(e, t) {
        var a = sx(e);
        t.forEach(function(s) {
            var r = px.bind(null, e, s);
            a.has(s) || (a.add(s),
            s.then(r, r))
        })
    }
    function Wt(e, t) {
        var a = t.deletions;
        if (a !== null)
            for (var s = 0; s < a.length; s++) {
                var r = a[s]
                  , u = e
                  , y = t
                  , b = y;
                e: for (; b !== null; ) {
                    switch (b.tag) {
                    case 27:
                        if (jn(b.type)) {
                            We = b.stateNode,
                            Zt = !1;
                            break e
                        }
                        break;
                    case 5:
                        We = b.stateNode,
                        Zt = !1;
                        break e;
                    case 3:
                    case 4:
                        We = b.stateNode.containerInfo,
                        Zt = !0;
                        break e
                    }
                    b = b.return
                }
                if (We === null)
                    throw Error(o(160));
                lm(u, y, r),
                We = null,
                Zt = !1,
                u = r.alternate,
                u !== null && (u.return = null),
                r.return = null
            }
        if (t.subtreeFlags & 13878)
            for (t = t.child; t !== null; )
                sm(t, e),
                t = t.sibling
    }
    var Aa = null;
    function sm(e, t) {
        var a = e.alternate
          , s = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            Wt(t, e),
            ea(e),
            s & 4 && (pn(3, e, e.return),
            _i(3, e),
            pn(5, e, e.return));
            break;
        case 1:
            Wt(t, e),
            ea(e),
            s & 512 && (mt || a === null || Ra(a, a.return)),
            s & 64 && Wa && (e = e.updateQueue,
            e !== null && (s = e.callbacks,
            s !== null && (a = e.shared.hiddenCallbacks,
            e.shared.hiddenCallbacks = a === null ? s : a.concat(s))));
            break;
        case 26:
            var r = Aa;
            if (Wt(t, e),
            ea(e),
            s & 512 && (mt || a === null || Ra(a, a.return)),
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
                                    (!u || u[Ne] || u[Tt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = r.createElement(s),
                                    r.head.insertBefore(u, r.querySelector("head > title"))),
                                    Rt(u, s, a),
                                    u[Tt] = e,
                                    dt(u),
                                    s = u;
                                    break e;
                                case "link":
                                    var y = ep("link", "href", r).get(s + (a.href || ""));
                                    if (y) {
                                        for (var b = 0; b < y.length; b++)
                                            if (u = y[b],
                                            u.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && u.getAttribute("rel") === (a.rel == null ? null : a.rel) && u.getAttribute("title") === (a.title == null ? null : a.title) && u.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                y.splice(b, 1);
                                                break t
                                            }
                                    }
                                    u = r.createElement(s),
                                    Rt(u, s, a),
                                    r.head.appendChild(u);
                                    break;
                                case "meta":
                                    if (y = ep("meta", "content", r).get(s + (a.content || ""))) {
                                        for (b = 0; b < y.length; b++)
                                            if (u = y[b],
                                            u.getAttribute("content") === (a.content == null ? null : "" + a.content) && u.getAttribute("name") === (a.name == null ? null : a.name) && u.getAttribute("property") === (a.property == null ? null : a.property) && u.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && u.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                y.splice(b, 1);
                                                break t
                                            }
                                    }
                                    u = r.createElement(s),
                                    Rt(u, s, a),
                                    r.head.appendChild(u);
                                    break;
                                default:
                                    throw Error(o(468, s))
                                }
                                u[Tt] = e,
                                dt(u),
                                s = u
                            }
                            e.stateNode = s
                        } else
                            tp(r, e.type, e.stateNode);
                    else
                        e.stateNode = Wm(r, s, e.memoizedProps);
                else
                    u !== s ? (u === null ? a.stateNode !== null && (a = a.stateNode,
                    a.parentNode.removeChild(a)) : u.count--,
                    s === null ? tp(r, e.type, e.stateNode) : Wm(r, s, e.memoizedProps)) : s === null && e.stateNode !== null && xu(e, e.memoizedProps, a.memoizedProps)
            }
            break;
        case 27:
            Wt(t, e),
            ea(e),
            s & 512 && (mt || a === null || Ra(a, a.return)),
            a !== null && s & 4 && xu(e, e.memoizedProps, a.memoizedProps);
            break;
        case 5:
            if (Wt(t, e),
            ea(e),
            s & 512 && (mt || a === null || Ra(a, a.return)),
            e.flags & 32) {
                r = e.stateNode;
                try {
                    cl(r, "")
                } catch (Y) {
                    Ie(e, e.return, Y)
                }
            }
            s & 4 && e.stateNode != null && (r = e.memoizedProps,
            xu(e, r, a !== null ? a.memoizedProps : r)),
            s & 1024 && (Tu = !0);
            break;
        case 6:
            if (Wt(t, e),
            ea(e),
            s & 4) {
                if (e.stateNode === null)
                    throw Error(o(162));
                s = e.memoizedProps,
                a = e.stateNode;
                try {
                    a.nodeValue = s
                } catch (Y) {
                    Ie(e, e.return, Y)
                }
            }
            break;
        case 3:
            if (No = null,
            r = Aa,
            Aa = wo(t.containerInfo),
            Wt(t, e),
            Aa = r,
            ea(e),
            s & 4 && a !== null && a.memoizedState.isDehydrated)
                try {
                    Fi(t.containerInfo)
                } catch (Y) {
                    Ie(e, e.return, Y)
                }
            Tu && (Tu = !1,
            om(e));
            break;
        case 4:
            s = Aa,
            Aa = wo(e.stateNode.containerInfo),
            Wt(t, e),
            ea(e),
            Aa = s;
            break;
        case 12:
            Wt(t, e),
            ea(e);
            break;
        case 13:
            Wt(t, e),
            ea(e),
            e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Du = ct()),
            s & 4 && (s = e.updateQueue,
            s !== null && (e.updateQueue = null,
            ju(e, s)));
            break;
        case 22:
            r = e.memoizedState !== null;
            var A = a !== null && a.memoizedState !== null
              , z = Wa
              , K = mt;
            if (Wa = z || r,
            mt = K || A,
            Wt(t, e),
            mt = K,
            Wa = z,
            ea(e),
            s & 8192)
                e: for (t = e.stateNode,
                t._visibility = r ? t._visibility & -2 : t._visibility | 1,
                r && (a === null || A || Wa || mt || Fn(e)),
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
                                    var $ = A.memoizedProps.style
                                      , H = $ != null && $.hasOwnProperty("display") ? $.display : null;
                                    b.style.display = H == null || typeof H == "boolean" ? "" : ("" + H).trim()
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
            s & 4 && (s = e.updateQueue,
            s !== null && (a = s.retryQueue,
            a !== null && (s.retryQueue = null,
            ju(e, a))));
            break;
        case 19:
            Wt(t, e),
            ea(e),
            s & 4 && (s = e.updateQueue,
            s !== null && (e.updateQueue = null,
            ju(e, s)));
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
                for (var a, s = e.return; s !== null; ) {
                    if (Wh(s)) {
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
                      , u = bu(e);
                    co(e, u, r);
                    break;
                case 5:
                    var y = a.stateNode;
                    a.flags & 32 && (cl(y, ""),
                    a.flags &= -33);
                    var b = bu(e);
                    co(e, b, y);
                    break;
                case 3:
                case 4:
                    var A = a.stateNode.containerInfo
                      , z = bu(e);
                    Su(e, z, A);
                    break;
                default:
                    throw Error(o(161))
                }
            } catch (K) {
                Ie(e, e.return, K)
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
    function gn(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                am(e, t.alternate, t),
                t = t.sibling
    }
    function Fn(e) {
        for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                pn(4, t, t.return),
                Fn(t);
                break;
            case 1:
                Ra(t, t.return);
                var a = t.stateNode;
                typeof a.componentWillUnmount == "function" && Ih(t, t.return, a),
                Fn(t);
                break;
            case 27:
                Pi(t.stateNode);
            case 26:
            case 5:
                Ra(t, t.return),
                Fn(t);
                break;
            case 22:
                t.memoizedState === null && Fn(t);
                break;
            case 30:
                Fn(t);
                break;
            default:
                Fn(t)
            }
            e = e.sibling
        }
    }
    function yn(e, t, a) {
        for (a = a && (t.subtreeFlags & 8772) !== 0,
        t = t.child; t !== null; ) {
            var s = t.alternate
              , r = e
              , u = t
              , y = u.flags;
            switch (u.tag) {
            case 0:
            case 11:
            case 15:
                yn(r, u, a),
                _i(4, u);
                break;
            case 1:
                if (yn(r, u, a),
                s = u,
                r = s.stateNode,
                typeof r.componentDidMount == "function")
                    try {
                        r.componentDidMount()
                    } catch (z) {
                        Ie(s, s.return, z)
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
                                Ud(A[r], b)
                    } catch (z) {
                        Ie(s, s.return, z)
                    }
                }
                a && y & 64 && Jh(u),
                Oi(u, u.return);
                break;
            case 27:
                em(u);
            case 26:
            case 5:
                yn(r, u, a),
                a && s === null && y & 4 && $h(u),
                Oi(u, u.return);
                break;
            case 12:
                yn(r, u, a);
                break;
            case 13:
                yn(r, u, a),
                a && y & 4 && im(r, u);
                break;
            case 22:
                u.memoizedState === null && yn(r, u, a),
                Oi(u, u.return);
                break;
            case 30:
                break;
            default:
                yn(r, u, a)
            }
            t = t.sibling
        }
    }
    function wu(e, t) {
        var a = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
        e = null,
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
        e !== a && (e != null && e.refCount++,
        a != null && yi(a))
    }
    function Au(e, t) {
        e = null,
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== e && (t.refCount++,
        e != null && yi(e))
    }
    function Va(e, t, a, s) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                rm(e, t, a, s),
                t = t.sibling
    }
    function rm(e, t, a, s) {
        var r = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            Va(e, t, a, s),
            r & 2048 && _i(9, t);
            break;
        case 1:
            Va(e, t, a, s);
            break;
        case 3:
            Va(e, t, a, s),
            r & 2048 && (e = null,
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== e && (t.refCount++,
            e != null && yi(e)));
            break;
        case 12:
            if (r & 2048) {
                Va(e, t, a, s),
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
                Va(e, t, a, s);
            break;
        case 13:
            Va(e, t, a, s);
            break;
        case 23:
            break;
        case 22:
            u = t.stateNode,
            y = t.alternate,
            t.memoizedState !== null ? u._visibility & 2 ? Va(e, t, a, s) : Ri(e, t) : u._visibility & 2 ? Va(e, t, a, s) : (u._visibility |= 2,
            Dl(e, t, a, s, (t.subtreeFlags & 10256) !== 0)),
            r & 2048 && wu(y, t);
            break;
        case 24:
            Va(e, t, a, s),
            r & 2048 && Au(t.alternate, t);
            break;
        default:
            Va(e, t, a, s)
        }
    }
    function Dl(e, t, a, s, r) {
        for (r = r && (t.subtreeFlags & 10256) !== 0,
        t = t.child; t !== null; ) {
            var u = e
              , y = t
              , b = a
              , A = s
              , z = y.flags;
            switch (y.tag) {
            case 0:
            case 11:
            case 15:
                Dl(u, y, b, A, r),
                _i(8, y);
                break;
            case 23:
                break;
            case 22:
                var K = y.stateNode;
                y.memoizedState !== null ? K._visibility & 2 ? Dl(u, y, b, A, r) : Ri(u, y) : (K._visibility |= 2,
                Dl(u, y, b, A, r)),
                r && z & 2048 && wu(y.alternate, y);
                break;
            case 24:
                Dl(u, y, b, A, r),
                r && z & 2048 && Au(y.alternate, y);
                break;
            default:
                Dl(u, y, b, A, r)
            }
            t = t.sibling
        }
    }
    function Ri(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var a = e
                  , s = t
                  , r = s.flags;
                switch (s.tag) {
                case 22:
                    Ri(a, s),
                    r & 2048 && wu(s.alternate, s);
                    break;
                case 24:
                    Ri(a, s),
                    r & 2048 && Au(s.alternate, s);
                    break;
                default:
                    Ri(a, s)
                }
                t = t.sibling
            }
    }
    var Vi = 8192;
    function Ml(e) {
        if (e.subtreeFlags & Vi)
            for (e = e.child; e !== null; )
                um(e),
                e = e.sibling
    }
    function um(e) {
        switch (e.tag) {
        case 26:
            Ml(e),
            e.flags & Vi && e.memoizedState !== null && Xx(Aa, e.memoizedState, e.memoizedProps);
            break;
        case 5:
            Ml(e);
            break;
        case 3:
        case 4:
            var t = Aa;
            Aa = wo(e.stateNode.containerInfo),
            Ml(e),
            Aa = t;
            break;
        case 22:
            e.memoizedState === null && (t = e.alternate,
            t !== null && t.memoizedState !== null ? (t = Vi,
            Vi = 16777216,
            Ml(e),
            Vi = t) : Ml(e));
            break;
        default:
            Ml(e)
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
    function zi(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    Nt = s,
                    dm(s, e)
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
            zi(e),
            e.flags & 2048 && pn(9, e, e.return);
            break;
        case 3:
            zi(e);
            break;
        case 12:
            zi(e);
            break;
        case 22:
            var t = e.stateNode;
            e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3,
            fo(e)) : zi(e);
            break;
        default:
            zi(e)
        }
    }
    function fo(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    Nt = s,
                    dm(s, e)
                }
            cm(e)
        }
        for (e = e.child; e !== null; ) {
            switch (t = e,
            t.tag) {
            case 0:
            case 11:
            case 15:
                pn(8, t, t.return),
                fo(t);
                break;
            case 22:
                a = t.stateNode,
                a._visibility & 2 && (a._visibility &= -3,
                fo(t));
                break;
            default:
                fo(t)
            }
            e = e.sibling
        }
    }
    function dm(e, t) {
        for (; Nt !== null; ) {
            var a = Nt;
            switch (a.tag) {
            case 0:
            case 11:
            case 15:
                pn(8, a, t);
                break;
            case 23:
            case 22:
                if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                    var s = a.memoizedState.cachePool.pool;
                    s != null && s.refCount++
                }
                break;
            case 24:
                yi(a.memoizedState.cache)
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
                    if (nm(s),
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
    var ox = {
        getCacheForType: function(e) {
            var t = Bt(jt)
              , a = t.data.get(e);
            return a === void 0 && (a = e(),
            t.data.set(e, a)),
            a
        }
    }
      , rx = typeof WeakMap == "function" ? WeakMap : Map
      , Ge = 0
      , $e = null
      , _e = null
      , Be = 0
      , Xe = 0
      , ta = null
      , vn = !1
      , _l = !1
      , Nu = !1
      , tn = 0
      , ot = 0
      , xn = 0
      , Jn = 0
      , Eu = 0
      , ma = 0
      , Ol = 0
      , Ui = null
      , Qt = null
      , Cu = !1
      , Du = 0
      , ho = 1 / 0
      , mo = null
      , bn = null
      , Ot = 0
      , Sn = null
      , Rl = null
      , Vl = 0
      , Mu = 0
      , _u = null
      , hm = null
      , Bi = 0
      , Ou = null;
    function aa() {
        if ((Ge & 2) !== 0 && Be !== 0)
            return Be & -Be;
        if (N.T !== null) {
            var e = Sl;
            return e !== 0 ? e : ku()
        }
        return ti()
    }
    function mm() {
        ma === 0 && (ma = (Be & 536870912) === 0 || qe ? sn() : 536870912);
        var e = ha.current;
        return e !== null && (e.flags |= 32),
        ma
    }
    function na(e, t, a) {
        (e === $e && (Xe === 2 || Xe === 9) || e.cancelPendingCommit !== null) && (zl(e, 0),
        Tn(e, Be, ma, !1)),
        yt(e, a),
        ((Ge & 2) === 0 || e !== $e) && (e === $e && ((Ge & 2) === 0 && (Jn |= a),
        ot === 4 && Tn(e, Be, ma, !1)),
        za(e))
    }
    function pm(e, t, a) {
        if ((Ge & 6) !== 0)
            throw Error(o(327));
        var s = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Yt(e, t)
          , r = s ? fx(e, t) : zu(e, t, !0)
          , u = s;
        do {
            if (r === 0) {
                _l && !s && Tn(e, t, 0, !1);
                break
            } else {
                if (a = e.current.alternate,
                u && !ux(a)) {
                    r = zu(e, t, !1),
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
                            r = Ui;
                            var A = b.current.memoizedState.isDehydrated;
                            if (A && (zl(b, y).flags |= 256),
                            y = zu(b, y, !1),
                            y !== 2) {
                                if (Nu && !A) {
                                    b.errorRecoveryDisabledLanes |= u,
                                    Jn |= u,
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
                    zl(e, 0),
                    Tn(e, t, 0, !0);
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
                        Tn(s, t, ma, !vn);
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
                    if ((t & 62914560) === t && (r = Du + 300 - ct(),
                    10 < r)) {
                        if (Tn(s, t, ma, !vn),
                        Re(s, 0, !0) !== 0)
                            break e;
                        s.timeoutHandle = Gm(gm.bind(null, s, a, Qt, mo, Cu, t, ma, Jn, Ol, vn, u, 2, -0, 0), r);
                        break e
                    }
                    gm(s, a, Qt, mo, Cu, t, ma, Jn, Ol, vn, u, 0, -0, 0)
                }
            }
            break
        } while (!0);
        za(e)
    }
    function gm(e, t, a, s, r, u, y, b, A, z, K, $, H, Y) {
        if (e.timeoutHandle = -1,
        $ = t.subtreeFlags,
        ($ & 8192 || ($ & 16785408) === 16785408) && (Gi = {
            stylesheets: null,
            count: 0,
            unsuspend: Gx
        },
        um(t),
        $ = Kx(),
        $ !== null)) {
            e.cancelPendingCommit = $(jm.bind(null, e, t, u, a, s, r, y, b, A, K, 1, H, Y)),
            Tn(e, u, y, !z);
            return
        }
        jm(e, t, u, a, s, r, y, b, A)
    }
    function ux(e) {
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
    function Tn(e, t, a, s) {
        t &= ~Eu,
        t &= ~Jn,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        s && (e.warmLanes |= t),
        s = e.expirationTimes;
        for (var r = t; 0 < r; ) {
            var u = 31 - ft(r)
              , y = 1 << u;
            s[u] = -1,
            r &= ~y
        }
        a !== 0 && Wl(e, a, t)
    }
    function po() {
        return (Ge & 6) === 0 ? (Li(0),
        !1) : !0
    }
    function Ru() {
        if (_e !== null) {
            if (Xe === 0)
                var e = _e.return;
            else
                e = _e,
                Za = Gn = null,
                Jr(e),
                El = null,
                Ci = 0,
                e = _e;
            for (; e !== null; )
                Fh(e.alternate, e),
                e = e.return;
            _e = null
        }
    }
    function zl(e, t) {
        var a = e.timeoutHandle;
        a !== -1 && (e.timeoutHandle = -1,
        Ex(a)),
        a = e.cancelPendingCommit,
        a !== null && (e.cancelPendingCommit = null,
        a()),
        Ru(),
        $e = e,
        _e = a = Ga(e.current, null),
        Be = t,
        Xe = 0,
        ta = null,
        vn = !1,
        _l = Yt(e, t),
        Nu = !1,
        Ol = ma = Eu = Jn = xn = ot = 0,
        Qt = Ui = null,
        Cu = !1,
        (t & 8) !== 0 && (t |= t & 32);
        var s = e.entangledLanes;
        if (s !== 0)
            for (e = e.entanglements,
            s &= t; 0 < s; ) {
                var r = 31 - ft(s)
                  , u = 1 << r;
                t |= e[r],
                s &= ~u
            }
        return tn = t,
        Us(),
        a
    }
    function ym(e, t) {
        Ee = null,
        N.H = to,
        t === xi || t === Xs ? (t = Vd(),
        Xe = 3) : t === _d ? (t = Vd(),
        Xe = 4) : Xe = t === zh ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
        ta = t,
        _e === null && (ot = 1,
        so(e, ua(t, e.current)))
    }
    function vm() {
        var e = N.H;
        return N.H = to,
        e === null ? to : e
    }
    function xm() {
        var e = N.A;
        return N.A = ox,
        e
    }
    function Vu() {
        ot = 4,
        vn || (Be & 4194048) !== Be && ha.current !== null || (_l = !0),
        (xn & 134217727) === 0 && (Jn & 134217727) === 0 || $e === null || Tn($e, Be, ma, !1)
    }
    function zu(e, t, a) {
        var s = Ge;
        Ge |= 2;
        var r = vm()
          , u = xm();
        ($e !== e || Be !== t) && (mo = null,
        zl(e, t)),
        t = !1;
        var y = ot;
        e: do
            try {
                if (Xe !== 0 && _e !== null) {
                    var b = _e
                      , A = ta;
                    switch (Xe) {
                    case 8:
                        Ru(),
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
                        Ul(e, b, A, z),
                        a && _l) {
                            y = 0;
                            break e
                        }
                        break;
                    default:
                        z = Xe,
                        Xe = 0,
                        ta = null,
                        Ul(e, b, A, z)
                    }
                }
                cx(),
                y = ot;
                break
            } catch (K) {
                ym(e, K)
            }
        while (!0);
        return t && e.shellSuspendCounter++,
        Za = Gn = null,
        Ge = s,
        N.H = r,
        N.A = u,
        _e === null && ($e = null,
        Be = 0,
        Us()),
        y
    }
    function cx() {
        for (; _e !== null; )
            bm(_e)
    }
    function fx(e, t) {
        var a = Ge;
        Ge |= 2;
        var s = vm()
          , r = xm();
        $e !== e || Be !== t ? (mo = null,
        ho = ct() + 500,
        zl(e, t)) : _l = Yt(e, t);
        e: do
            try {
                if (Xe !== 0 && _e !== null) {
                    t = _e;
                    var u = ta;
                    t: switch (Xe) {
                    case 1:
                        Xe = 0,
                        ta = null,
                        Ul(e, t, u, 1);
                        break;
                    case 2:
                    case 9:
                        if (Od(u)) {
                            Xe = 0,
                            ta = null,
                            Sm(t);
                            break
                        }
                        t = function() {
                            Xe !== 2 && Xe !== 9 || $e !== e || (Xe = 7),
                            za(e)
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
                        Od(u) ? (Xe = 0,
                        ta = null,
                        Sm(t)) : (Xe = 0,
                        ta = null,
                        Ul(e, t, u, 7));
                        break;
                    case 5:
                        var y = null;
                        switch (_e.tag) {
                        case 26:
                            y = _e.memoizedState;
                        case 5:
                        case 27:
                            var b = _e;
                            if (!y || ap(y)) {
                                Xe = 0,
                                ta = null;
                                var A = b.sibling;
                                if (A !== null)
                                    _e = A;
                                else {
                                    var z = b.return;
                                    z !== null ? (_e = z,
                                    go(z)) : _e = null
                                }
                                break t
                            }
                        }
                        Xe = 0,
                        ta = null,
                        Ul(e, t, u, 5);
                        break;
                    case 6:
                        Xe = 0,
                        ta = null,
                        Ul(e, t, u, 6);
                        break;
                    case 8:
                        Ru(),
                        ot = 6;
                        break e;
                    default:
                        throw Error(o(462))
                    }
                }
                dx();
                break
            } catch (K) {
                ym(e, K)
            }
        while (!0);
        return Za = Gn = null,
        N.H = s,
        N.A = r,
        Ge = a,
        _e !== null ? 0 : ($e = null,
        Be = 0,
        Us(),
        ot)
    }
    function dx() {
        for (; _e !== null && !et(); )
            bm(_e)
    }
    function bm(e) {
        var t = Zh(e.alternate, e, tn);
        e.memoizedProps = e.pendingProps,
        t === null ? go(e) : _e = t
    }
    function Sm(e) {
        var t = e
          , a = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = Ph(a, t, t.pendingProps, t.type, void 0, Be);
            break;
        case 11:
            t = Ph(a, t, t.pendingProps, t.type.render, t.ref, Be);
            break;
        case 5:
            Jr(t);
        default:
            Fh(a, t),
            t = _e = Td(t, tn),
            t = Zh(a, t, tn)
        }
        e.memoizedProps = e.pendingProps,
        t === null ? go(e) : _e = t
    }
    function Ul(e, t, a, s) {
        Za = Gn = null,
        Jr(t),
        El = null,
        Ci = 0;
        var r = t.return;
        try {
            if (tx(e, r, t, a, Be)) {
                ot = 1,
                so(e, ua(a, e.current)),
                _e = null;
                return
            }
        } catch (u) {
            if (r !== null)
                throw _e = r,
                u;
            ot = 1,
            so(e, ua(a, e.current)),
            _e = null;
            return
        }
        t.flags & 32768 ? (qe || s === 1 ? e = !0 : _l || (Be & 536870912) !== 0 ? e = !1 : (vn = e = !0,
        (s === 2 || s === 9 || s === 3 || s === 6) && (s = ha.current,
        s !== null && s.tag === 13 && (s.flags |= 16384))),
        Tm(t, e)) : go(t)
    }
    function go(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                Tm(t, vn);
                return
            }
            e = t.return;
            var a = nx(t.alternate, t, tn);
            if (a !== null) {
                _e = a;
                return
            }
            if (t = t.sibling,
            t !== null) {
                _e = t;
                return
            }
            _e = t = e
        } while (t !== null);
        ot === 0 && (ot = 5)
    }
    function Tm(e, t) {
        do {
            var a = lx(e.alternate, e);
            if (a !== null) {
                a.flags &= 32767,
                _e = a;
                return
            }
            if (a = e.return,
            a !== null && (a.flags |= 32768,
            a.subtreeFlags = 0,
            a.deletions = null),
            !t && (e = e.sibling,
            e !== null)) {
                _e = e;
                return
            }
            _e = e = a
        } while (e !== null);
        ot = 6,
        _e = null
    }
    function jm(e, t, a, s, r, u, y, b, A) {
        e.cancelPendingCommit = null;
        do
            yo();
        while (Ot !== 0);
        if ((Ge & 6) !== 0)
            throw Error(o(327));
        if (t !== null) {
            if (t === e.current)
                throw Error(o(177));
            if (u = t.lanes | t.childLanes,
            u |= Ar,
            Gt(e, a, u, y, b, A),
            e === $e && (_e = $e = null,
            Be = 0),
            Rl = t,
            Sn = e,
            Vl = a,
            Mu = u,
            _u = r,
            hm = s,
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null,
            e.callbackPriority = 0,
            gx(ia, function() {
                return Cm(),
                null
            })) : (e.callbackNode = null,
            e.callbackPriority = 0),
            s = (t.flags & 13878) !== 0,
            (t.subtreeFlags & 13878) !== 0 || s) {
                s = N.T,
                N.T = null,
                r = O.p,
                O.p = 2,
                y = Ge,
                Ge |= 4;
                try {
                    ix(e, t, a)
                } finally {
                    Ge = y,
                    O.p = r,
                    N.T = s
                }
            }
            Ot = 1,
            wm(),
            Am(),
            Nm()
        }
    }
    function wm() {
        if (Ot === 1) {
            Ot = 0;
            var e = Sn
              , t = Rl
              , a = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || a) {
                a = N.T,
                N.T = null;
                var s = O.p;
                O.p = 2;
                var r = Ge;
                Ge |= 4;
                try {
                    sm(t, e);
                    var u = Zu
                      , y = dd(e.containerInfo)
                      , b = u.focusedElem
                      , A = u.selectionRange;
                    if (y !== b && b && b.ownerDocument && fd(b.ownerDocument.documentElement, b)) {
                        if (A !== null && br(b)) {
                            var z = A.start
                              , K = A.end;
                            if (K === void 0 && (K = z),
                            "selectionStart"in b)
                                b.selectionStart = z,
                                b.selectionEnd = Math.min(K, b.value.length);
                            else {
                                var $ = b.ownerDocument || document
                                  , H = $ && $.defaultView || window;
                                if (H.getSelection) {
                                    var Y = H.getSelection()
                                      , ve = b.textContent.length
                                      , pe = Math.min(A.start, ve)
                                      , Qe = A.end === void 0 ? pe : Math.min(A.end, ve);
                                    !Y.extend && pe > Qe && (y = Qe,
                                    Qe = pe,
                                    pe = y);
                                    var _ = cd(b, pe)
                                      , E = cd(b, Qe);
                                    if (_ && E && (Y.rangeCount !== 1 || Y.anchorNode !== _.node || Y.anchorOffset !== _.offset || Y.focusNode !== E.node || Y.focusOffset !== E.offset)) {
                                        var V = $.createRange();
                                        V.setStart(_.node, _.offset),
                                        Y.removeAllRanges(),
                                        pe > Qe ? (Y.addRange(V),
                                        Y.extend(E.node, E.offset)) : (V.setEnd(E.node, E.offset),
                                        Y.addRange(V))
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
                            var F = $[b];
                            F.element.scrollLeft = F.left,
                            F.element.scrollTop = F.top
                        }
                    }
                    Do = !!Ku,
                    Zu = Ku = null
                } finally {
                    Ge = r,
                    O.p = s,
                    N.T = a
                }
            }
            e.current = t,
            Ot = 2
        }
    }
    function Am() {
        if (Ot === 2) {
            Ot = 0;
            var e = Sn
              , t = Rl
              , a = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || a) {
                a = N.T,
                N.T = null;
                var s = O.p;
                O.p = 2;
                var r = Ge;
                Ge |= 4;
                try {
                    am(e, t.alternate, t)
                } finally {
                    Ge = r,
                    O.p = s,
                    N.T = a
                }
            }
            Ot = 3
        }
    }
    function Nm() {
        if (Ot === 4 || Ot === 3) {
            Ot = 0,
            la();
            var e = Sn
              , t = Rl
              , a = Vl
              , s = hm;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ot = 5 : (Ot = 0,
            Rl = Sn = null,
            Em(e, e.pendingLanes));
            var r = e.pendingLanes;
            if (r === 0 && (bn = null),
            sl(a),
            t = t.stateNode,
            gt && typeof gt.onCommitFiberRoot == "function")
                try {
                    gt.onCommitFiberRoot(Jt, t, void 0, (t.current.flags & 128) === 128)
                } catch {}
            if (s !== null) {
                t = N.T,
                r = O.p,
                O.p = 2,
                N.T = null;
                try {
                    for (var u = e.onRecoverableError, y = 0; y < s.length; y++) {
                        var b = s[y];
                        u(b.value, {
                            componentStack: b.stack
                        })
                    }
                } finally {
                    N.T = t,
                    O.p = r
                }
            }
            (Vl & 3) !== 0 && yo(),
            za(e),
            r = e.pendingLanes,
            (a & 4194090) !== 0 && (r & 42) !== 0 ? e === Ou ? Bi++ : (Bi = 0,
            Ou = e) : Bi = 0,
            Li(0)
        }
    }
    function Em(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache,
        t != null && (e.pooledCache = null,
        yi(t)))
    }
    function yo(e) {
        return wm(),
        Am(),
        Nm(),
        Cm()
    }
    function Cm() {
        if (Ot !== 5)
            return !1;
        var e = Sn
          , t = Mu;
        Mu = 0;
        var a = sl(Vl)
          , s = N.T
          , r = O.p;
        try {
            O.p = 32 > a ? 32 : a,
            N.T = null,
            a = _u,
            _u = null;
            var u = Sn
              , y = Vl;
            if (Ot = 0,
            Rl = Sn = null,
            Vl = 0,
            (Ge & 6) !== 0)
                throw Error(o(331));
            var b = Ge;
            if (Ge |= 4,
            fm(u.current),
            rm(u, u.current, y, a),
            Ge = b,
            Li(0, !1),
            gt && typeof gt.onPostCommitFiberRoot == "function")
                try {
                    gt.onPostCommitFiberRoot(Jt, u)
                } catch {}
            return !0
        } finally {
            O.p = r,
            N.T = s,
            Em(e, t)
        }
    }
    function Dm(e, t, a) {
        t = ua(a, t),
        t = cu(e.stateNode, t, 2),
        e = fn(e, t, 2),
        e !== null && (yt(e, 2),
        za(e))
    }
    function Ie(e, t, a) {
        if (e.tag === 3)
            Dm(e, e, a);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    Dm(t, e, a);
                    break
                } else if (t.tag === 1) {
                    var s = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (bn === null || !bn.has(s))) {
                        e = ua(a, e),
                        a = Rh(2),
                        s = fn(t, a, 2),
                        s !== null && (Vh(a, s, t, e),
                        yt(s, 2),
                        za(s));
                        break
                    }
                }
                t = t.return
            }
    }
    function Uu(e, t, a) {
        var s = e.pingCache;
        if (s === null) {
            s = e.pingCache = new rx;
            var r = new Set;
            s.set(t, r)
        } else
            r = s.get(t),
            r === void 0 && (r = new Set,
            s.set(t, r));
        r.has(a) || (Nu = !0,
        r.add(a),
        e = hx.bind(null, e, t, a),
        t.then(e, e))
    }
    function hx(e, t, a) {
        var s = e.pingCache;
        s !== null && s.delete(t),
        e.pingedLanes |= e.suspendedLanes & a,
        e.warmLanes &= ~a,
        $e === e && (Be & a) === a && (ot === 4 || ot === 3 && (Be & 62914560) === Be && 300 > ct() - Du ? (Ge & 2) === 0 && zl(e, 0) : Eu |= a,
        Ol === Be && (Ol = 0)),
        za(e)
    }
    function Mm(e, t) {
        t === 0 && (t = ne()),
        e = yl(e, t),
        e !== null && (yt(e, t),
        za(e))
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
        Mm(e, a)
    }
    function gx(e, t) {
        return Ct(e, t)
    }
    var vo = null
      , Bl = null
      , Bu = !1
      , xo = !1
      , Lu = !1
      , In = 0;
    function za(e) {
        e !== Bl && e.next === null && (Bl === null ? vo = Bl = e : Bl = Bl.next = e),
        xo = !0,
        Bu || (Bu = !0,
        vx())
    }
    function Li(e, t) {
        if (!Lu && xo) {
            Lu = !0;
            do
                for (var a = !1, s = vo; s !== null; ) {
                    if (e !== 0) {
                        var r = s.pendingLanes;
                        if (r === 0)
                            var u = 0;
                        else {
                            var y = s.suspendedLanes
                              , b = s.pingedLanes;
                            u = (1 << 31 - ft(42 | e) + 1) - 1,
                            u &= r & ~(y & ~b),
                            u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
                        }
                        u !== 0 && (a = !0,
                        Vm(s, u))
                    } else
                        u = Be,
                        u = Re(s, s === $e ? u : 0, s.cancelPendingCommit !== null || s.timeoutHandle !== -1),
                        (u & 3) === 0 || Yt(s, u) || (a = !0,
                        Vm(s, u));
                    s = s.next
                }
            while (a);
            Lu = !1
        }
    }
    function yx() {
        _m()
    }
    function _m() {
        xo = Bu = !1;
        var e = 0;
        In !== 0 && (Nx() && (e = In),
        In = 0);
        for (var t = ct(), a = null, s = vo; s !== null; ) {
            var r = s.next
              , u = Om(s, t);
            u === 0 ? (s.next = null,
            a === null ? vo = r : a.next = r,
            r === null && (Bl = a)) : (a = s,
            (e !== 0 || (u & 3) !== 0) && (xo = !0)),
            s = r
        }
        Li(e)
    }
    function Om(e, t) {
        for (var a = e.suspendedLanes, s = e.pingedLanes, r = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
            var y = 31 - ft(u)
              , b = 1 << y
              , A = r[y];
            A === -1 ? ((b & a) === 0 || (b & s) !== 0) && (r[y] = zn(b, t)) : A <= t && (e.expiredLanes |= b),
            u &= ~b
        }
        if (t = $e,
        a = Be,
        a = Re(e, e === t ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        s = e.callbackNode,
        a === 0 || e === t && (Xe === 2 || Xe === 9) || e.cancelPendingCommit !== null)
            return s !== null && s !== null && je(s),
            e.callbackNode = null,
            e.callbackPriority = 0;
        if ((a & 3) === 0 || Yt(e, a)) {
            if (t = a & -a,
            t === e.callbackPriority)
                return t;
            switch (s !== null && je(s),
            sl(a)) {
            case 2:
            case 8:
                a = Ma;
                break;
            case 32:
                a = ia;
                break;
            case 268435456:
                a = we;
                break;
            default:
                a = ia
            }
            return s = Rm.bind(null, e),
            a = Ct(a, s),
            e.callbackPriority = t,
            e.callbackNode = a,
            t
        }
        return s !== null && s !== null && je(s),
        e.callbackPriority = 2,
        e.callbackNode = null,
        2
    }
    function Rm(e, t) {
        if (Ot !== 0 && Ot !== 5)
            return e.callbackNode = null,
            e.callbackPriority = 0,
            null;
        var a = e.callbackNode;
        if (yo() && e.callbackNode !== a)
            return null;
        var s = Be;
        return s = Re(e, e === $e ? s : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        s === 0 ? null : (pm(e, s, t),
        Om(e, ct()),
        e.callbackNode != null && e.callbackNode === a ? Rm.bind(null, e) : null)
    }
    function Vm(e, t) {
        if (yo())
            return null;
        pm(e, t, !0)
    }
    function vx() {
        Cx(function() {
            (Ge & 6) !== 0 ? Ct(Da, yx) : _m()
        })
    }
    function ku() {
        return In === 0 && (In = sn()),
        In
    }
    function zm(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ds("" + e)
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
    function xx(e, t, a, s, r) {
        if (t === "submit" && a && a.stateNode === r) {
            var u = zm((r[Dt] || null).action)
              , y = s.submitter;
            y && (t = (t = y[Dt] || null) ? zm(t.formAction) : y.getAttribute("formAction"),
            t !== null && (u = t,
            y = null));
            var b = new Rs("action","action",null,s,r);
            e.push({
                event: b,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (s.defaultPrevented) {
                            if (In !== 0) {
                                var A = y ? Um(r, y) : new FormData(r);
                                iu(a, {
                                    pending: !0,
                                    data: A,
                                    method: r.method,
                                    action: u
                                }, null, A)
                            }
                        } else
                            typeof u == "function" && (b.preventDefault(),
                            A = y ? Um(r, y) : new FormData(r),
                            iu(a, {
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
    for (var Hu = 0; Hu < wr.length; Hu++) {
        var Pu = wr[Hu]
          , bx = Pu.toLowerCase()
          , Sx = Pu[0].toUpperCase() + Pu.slice(1);
        wa(bx, "on" + Sx)
    }
    wa(pd, "onAnimationEnd"),
    wa(gd, "onAnimationIteration"),
    wa(yd, "onAnimationStart"),
    wa("dblclick", "onDoubleClick"),
    wa("focusin", "onFocus"),
    wa("focusout", "onBlur"),
    wa(Lv, "onTransitionRun"),
    wa(kv, "onTransitionStart"),
    wa(Hv, "onTransitionCancel"),
    wa(vd, "onTransitionEnd"),
    Pa("onMouseEnter", ["mouseout", "mouseover"]),
    Pa("onMouseLeave", ["mouseout", "mouseover"]),
    Pa("onPointerEnter", ["pointerout", "pointerover"]),
    Pa("onPointerLeave", ["pointerout", "pointerover"]),
    Ut("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Ut("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Ut("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ut("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Ut("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Ut("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var ki = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , Tx = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ki));
    function Bm(e, t) {
        t = (t & 4) !== 0;
        for (var a = 0; a < e.length; a++) {
            var s = e[a]
              , r = s.event;
            s = s.listeners;
            e: {
                var u = void 0;
                if (t)
                    for (var y = s.length - 1; 0 <= y; y--) {
                        var b = s[y]
                          , A = b.instance
                          , z = b.currentTarget;
                        if (b = b.listener,
                        A !== u && r.isPropagationStopped())
                            break e;
                        u = b,
                        r.currentTarget = z;
                        try {
                            u(r)
                        } catch (K) {
                            io(K)
                        }
                        r.currentTarget = null,
                        u = A
                    }
                else
                    for (y = 0; y < s.length; y++) {
                        if (b = s[y],
                        A = b.instance,
                        z = b.currentTarget,
                        b = b.listener,
                        A !== u && r.isPropagationStopped())
                            break e;
                        u = b,
                        r.currentTarget = z;
                        try {
                            u(r)
                        } catch (K) {
                            io(K)
                        }
                        r.currentTarget = null,
                        u = A
                    }
            }
        }
    }
    function Oe(e, t) {
        var a = t[ol];
        a === void 0 && (a = t[ol] = new Set);
        var s = e + "__bubble";
        a.has(s) || (Lm(t, e, 2, !1),
        a.add(s))
    }
    function qu(e, t, a) {
        var s = 0;
        t && (s |= 4),
        Lm(a, e, s, t)
    }
    var bo = "_reactListening" + Math.random().toString(36).slice(2);
    function Yu(e) {
        if (!e[bo]) {
            e[bo] = !0,
            ni.forEach(function(a) {
                a !== "selectionchange" && (Tx.has(a) || qu(a, !1, e),
                qu(a, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[bo] || (t[bo] = !0,
            qu("selectionchange", !1, t))
        }
    }
    function Lm(e, t, a, s) {
        switch (rp(t)) {
        case 2:
            var r = Fx;
            break;
        case 8:
            r = Jx;
            break;
        default:
            r = nc
        }
        a = r.bind(null, t, a, e),
        r = void 0,
        !fr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (r = !0),
        s ? r !== void 0 ? e.addEventListener(t, a, {
            capture: !0,
            passive: r
        }) : e.addEventListener(t, a, !0) : r !== void 0 ? e.addEventListener(t, a, {
            passive: r
        }) : e.addEventListener(t, a, !1)
    }
    function Gu(e, t, a, s, r) {
        var u = s;
        if ((t & 1) === 0 && (t & 2) === 0 && s !== null)
            e: for (; ; ) {
                if (s === null)
                    return;
                var y = s.tag;
                if (y === 3 || y === 4) {
                    var b = s.stateNode.containerInfo;
                    if (b === r)
                        break;
                    if (y === 4)
                        for (y = s.return; y !== null; ) {
                            var A = y.tag;
                            if ((A === 3 || A === 4) && y.stateNode.containerInfo === r)
                                return;
                            y = y.return
                        }
                    for (; b !== null; ) {
                        if (y = ke(b),
                        y === null)
                            return;
                        if (A = y.tag,
                        A === 5 || A === 6 || A === 26 || A === 27) {
                            s = u = y;
                            continue e
                        }
                        b = b.parentNode
                    }
                }
                s = s.return
            }
        Xf(function() {
            var z = u
              , K = ur(a)
              , $ = [];
            e: {
                var H = xd.get(e);
                if (H !== void 0) {
                    var Y = Rs
                      , ve = e;
                    switch (e) {
                    case "keypress":
                        if (_s(a) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        Y = gv;
                        break;
                    case "focusin":
                        ve = "focus",
                        Y = pr;
                        break;
                    case "focusout":
                        ve = "blur",
                        Y = pr;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        Y = pr;
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
                        Y = Qf;
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
                    case pd:
                    case gd:
                    case yd:
                        Y = ov;
                        break;
                    case vd:
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
                        Y = Jf;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        Y = Av
                    }
                    var pe = (t & 4) !== 0
                      , Qe = !pe && (e === "scroll" || e === "scrollend")
                      , _ = pe ? H !== null ? H + "Capture" : null : H;
                    pe = [];
                    for (var E = z, V; E !== null; ) {
                        var F = E;
                        if (V = F.stateNode,
                        F = F.tag,
                        F !== 5 && F !== 26 && F !== 27 || V === null || _ === null || (F = li(E, _),
                        F != null && pe.push(Hi(E, F, V))),
                        Qe)
                            break;
                        E = E.return
                    }
                    0 < pe.length && (H = new Y(H,ve,null,a,K),
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
                    H && a !== rr && (ve = a.relatedTarget || a.fromElement) && (ke(ve) || ve[Ha]))
                        break e;
                    if ((Y || H) && (H = K.window === K ? K : (H = K.ownerDocument) ? H.defaultView || H.parentWindow : window,
                    Y ? (ve = a.relatedTarget || a.toElement,
                    Y = z,
                    ve = ve ? ke(ve) : null,
                    ve !== null && (Qe = h(ve),
                    pe = ve.tag,
                    ve !== Qe || pe !== 5 && pe !== 27 && pe !== 6) && (ve = null)) : (Y = null,
                    ve = z),
                    Y !== ve)) {
                        if (pe = Qf,
                        F = "onMouseLeave",
                        _ = "onMouseEnter",
                        E = "mouse",
                        (e === "pointerout" || e === "pointerover") && (pe = Jf,
                        F = "onPointerLeave",
                        _ = "onPointerEnter",
                        E = "pointer"),
                        Qe = Y == null ? H : He(Y),
                        V = ve == null ? H : He(ve),
                        H = new pe(F,E + "leave",Y,a,K),
                        H.target = Qe,
                        H.relatedTarget = V,
                        F = null,
                        ke(K) === z && (pe = new pe(_,E + "enter",ve,a,K),
                        pe.target = V,
                        pe.relatedTarget = Qe,
                        F = pe),
                        Qe = F,
                        Y && ve)
                            t: {
                                for (pe = Y,
                                _ = ve,
                                E = 0,
                                V = pe; V; V = Ll(V))
                                    E++;
                                for (V = 0,
                                F = _; F; F = Ll(F))
                                    V++;
                                for (; 0 < E - V; )
                                    pe = Ll(pe),
                                    E--;
                                for (; 0 < V - E; )
                                    _ = Ll(_),
                                    V--;
                                for (; E--; ) {
                                    if (pe === _ || _ !== null && pe === _.alternate)
                                        break t;
                                    pe = Ll(pe),
                                    _ = Ll(_)
                                }
                                pe = null
                            }
                        else
                            pe = null;
                        Y !== null && km($, H, Y, pe, !1),
                        ve !== null && Qe !== null && km($, Qe, ve, pe, !0)
                    }
                }
                e: {
                    if (H = z ? He(z) : window,
                    Y = H.nodeName && H.nodeName.toLowerCase(),
                    Y === "select" || Y === "input" && H.type === "file")
                        var ue = ld;
                    else if (ad(H))
                        if (id)
                            ue = zv;
                        else {
                            ue = Rv;
                            var Me = Ov
                        }
                    else
                        Y = H.nodeName,
                        !Y || Y.toLowerCase() !== "input" || H.type !== "checkbox" && H.type !== "radio" ? z && or(z.elementType) && (ue = ld) : ue = Vv;
                    if (ue && (ue = ue(e, z))) {
                        nd($, ue, a, K);
                        break e
                    }
                    Me && Me(e, H, z),
                    e === "focusout" && z && H.type === "number" && z.memoizedProps.value != null && sr(H, "number", H.value)
                }
                switch (Me = z ? He(z) : window,
                e) {
                case "focusin":
                    (ad(Me) || Me.contentEditable === "true") && (ml = Me,
                    Sr = z,
                    di = null);
                    break;
                case "focusout":
                    di = Sr = ml = null;
                    break;
                case "mousedown":
                    Tr = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Tr = !1,
                    hd($, a, K);
                    break;
                case "selectionchange":
                    if (Bv)
                        break;
                case "keydown":
                case "keyup":
                    hd($, a, K)
                }
                var de;
                if (yr)
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
                    hl ? ed(e, a) && (ge = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (ge = "onCompositionStart");
                ge && (If && a.locale !== "ko" && (hl || ge !== "onCompositionStart" ? ge === "onCompositionEnd" && hl && (de = Kf()) : (on = K,
                dr = "value"in on ? on.value : on.textContent,
                hl = !0)),
                Me = So(z, ge),
                0 < Me.length && (ge = new Ff(ge,e,null,a,K),
                $.push({
                    event: ge,
                    listeners: Me
                }),
                de ? ge.data = de : (de = td(a),
                de !== null && (ge.data = de)))),
                (de = Ev ? Cv(e, a) : Dv(e, a)) && (ge = So(z, "onBeforeInput"),
                0 < ge.length && (Me = new Ff("onBeforeInput","beforeinput",null,a,K),
                $.push({
                    event: Me,
                    listeners: ge
                }),
                Me.data = de)),
                xx($, e, z, a, K)
            }
            Bm($, t)
        })
    }
    function Hi(e, t, a) {
        return {
            instance: e,
            listener: t,
            currentTarget: a
        }
    }
    function So(e, t) {
        for (var a = t + "Capture", s = []; e !== null; ) {
            var r = e
              , u = r.stateNode;
            if (r = r.tag,
            r !== 5 && r !== 26 && r !== 27 || u === null || (r = li(e, a),
            r != null && s.unshift(Hi(e, r, u)),
            r = li(e, t),
            r != null && s.push(Hi(e, r, u))),
            e.tag === 3)
                return s;
            e = e.return
        }
        return []
    }
    function Ll(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }
    function km(e, t, a, s, r) {
        for (var u = t._reactName, y = []; a !== null && a !== s; ) {
            var b = a
              , A = b.alternate
              , z = b.stateNode;
            if (b = b.tag,
            A !== null && A === s)
                break;
            b !== 5 && b !== 26 && b !== 27 || z === null || (A = z,
            r ? (z = li(a, u),
            z != null && y.unshift(Hi(a, z, A))) : r || (z = li(a, u),
            z != null && y.push(Hi(a, z, A)))),
            a = a.return
        }
        y.length !== 0 && e.push({
            event: t,
            listeners: y
        })
    }
    var jx = /\r\n?/g
      , wx = /\u0000|\uFFFD/g;
    function Hm(e) {
        return (typeof e == "string" ? e : "" + e).replace(jx, `
`).replace(wx, "")
    }
    function Pm(e, t) {
        return t = Hm(t),
        Hm(e) === t
    }
    function To() {}
    function Ze(e, t, a, s, r, u) {
        switch (a) {
        case "children":
            typeof s == "string" ? t === "body" || t === "textarea" && s === "" || cl(e, s) : (typeof s == "number" || typeof s == "bigint") && t !== "body" && cl(e, "" + s);
            break;
        case "className":
            Ns(e, "class", s);
            break;
        case "tabIndex":
            Ns(e, "tabindex", s);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            Ns(e, a, s);
            break;
        case "style":
            Yf(e, s, u);
            break;
        case "data":
            if (t !== "object") {
                Ns(e, "data", s);
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
            s = Ds("" + s),
            e.setAttribute(a, s);
            break;
        case "action":
        case "formAction":
            if (typeof s == "function") {
                e.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof u == "function" && (a === "formAction" ? (t !== "input" && Ze(e, t, "name", r.name, r, null),
                Ze(e, t, "formEncType", r.formEncType, r, null),
                Ze(e, t, "formMethod", r.formMethod, r, null),
                Ze(e, t, "formTarget", r.formTarget, r, null)) : (Ze(e, t, "encType", r.encType, r, null),
                Ze(e, t, "method", r.method, r, null),
                Ze(e, t, "target", r.target, r, null)));
            if (s == null || typeof s == "symbol" || typeof s == "boolean") {
                e.removeAttribute(a);
                break
            }
            s = Ds("" + s),
            e.setAttribute(a, s);
            break;
        case "onClick":
            s != null && (e.onclick = To);
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
            a = Ds("" + s),
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
            As(e, "popover", s);
            break;
        case "xlinkActuate":
            qa(e, "http://www.w3.org/1999/xlink", "xlink:actuate", s);
            break;
        case "xlinkArcrole":
            qa(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", s);
            break;
        case "xlinkRole":
            qa(e, "http://www.w3.org/1999/xlink", "xlink:role", s);
            break;
        case "xlinkShow":
            qa(e, "http://www.w3.org/1999/xlink", "xlink:show", s);
            break;
        case "xlinkTitle":
            qa(e, "http://www.w3.org/1999/xlink", "xlink:title", s);
            break;
        case "xlinkType":
            qa(e, "http://www.w3.org/1999/xlink", "xlink:type", s);
            break;
        case "xmlBase":
            qa(e, "http://www.w3.org/XML/1998/namespace", "xml:base", s);
            break;
        case "xmlLang":
            qa(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", s);
            break;
        case "xmlSpace":
            qa(e, "http://www.w3.org/XML/1998/namespace", "xml:space", s);
            break;
        case "is":
            As(e, "is", s);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = ev.get(a) || a,
            As(e, a, s))
        }
    }
    function Xu(e, t, a, s, r, u) {
        switch (a) {
        case "style":
            Yf(e, s, u);
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
            typeof s == "string" ? cl(e, s) : (typeof s == "number" || typeof s == "bigint") && cl(e, "" + s);
            break;
        case "onScroll":
            s != null && Oe("scroll", e);
            break;
        case "onScrollEnd":
            s != null && Oe("scrollend", e);
            break;
        case "onClick":
            s != null && (e.onclick = To);
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
            if (!it.hasOwnProperty(a))
                e: {
                    if (a[0] === "o" && a[1] === "n" && (r = a.endsWith("Capture"),
                    t = a.slice(2, r ? a.length - 7 : void 0),
                    u = e[Dt] || null,
                    u = u != null ? u[a] : null,
                    typeof u == "function" && e.removeEventListener(t, u, r),
                    typeof s == "function")) {
                        typeof u != "function" && u !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)),
                        e.addEventListener(t, s, r);
                        break e
                    }
                    a in e ? e[a] = s : s === !0 ? e.setAttribute(a, "") : As(e, a, s)
                }
        }
    }
    function Rt(e, t, a) {
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
                    var y = a[u];
                    if (y != null)
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
                            Ze(e, t, u, y, a, null)
                        }
                }
            r && Ze(e, t, "srcSet", a.srcSet, a, null),
            s && Ze(e, t, "src", a.src, a, null);
            return;
        case "input":
            Oe("invalid", e);
            var b = u = y = r = null
              , A = null
              , z = null;
            for (s in a)
                if (a.hasOwnProperty(s)) {
                    var K = a[s];
                    if (K != null)
                        switch (s) {
                        case "name":
                            r = K;
                            break;
                        case "type":
                            y = K;
                            break;
                        case "checked":
                            A = K;
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
                            Ze(e, t, s, K, a, null)
                        }
                }
            kf(e, u, b, A, z, y, r, !1),
            Es(e);
            return;
        case "select":
            Oe("invalid", e),
            s = y = u = null;
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
                        s = b;
                    default:
                        Ze(e, t, r, b, a, null)
                    }
            t = u,
            a = y,
            e.multiple = !!s,
            t != null ? ul(e, !!s, t, !1) : a != null && ul(e, !!s, a, !0);
            return;
        case "textarea":
            Oe("invalid", e),
            u = r = s = null;
            for (y in a)
                if (a.hasOwnProperty(y) && (b = a[y],
                b != null))
                    switch (y) {
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
                        Ze(e, t, y, b, a, null)
                    }
            Pf(e, s, r, u),
            Es(e);
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
                        Ze(e, t, A, s, a, null)
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
            for (s = 0; s < ki.length; s++)
                Oe(ki[s], e);
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
            for (z in a)
                if (a.hasOwnProperty(z) && (s = a[z],
                s != null))
                    switch (z) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(o(137, t));
                    default:
                        Ze(e, t, z, s, a, null)
                    }
            return;
        default:
            if (or(t)) {
                for (K in a)
                    a.hasOwnProperty(K) && (s = a[K],
                    s !== void 0 && Xu(e, t, K, s, a, void 0));
                return
            }
        }
        for (b in a)
            a.hasOwnProperty(b) && (s = a[b],
            s != null && Ze(e, t, b, s, a, null))
    }
    function Ax(e, t, a, s) {
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
              , K = null;
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
                        s.hasOwnProperty(Y) || Ze(e, t, Y, null, s, $)
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
                        z = Y;
                        break;
                    case "defaultChecked":
                        K = Y;
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
                        Y !== $ && Ze(e, t, H, Y, s, $)
                    }
            }
            ir(e, y, b, A, z, K, u, r);
            return;
        case "select":
            Y = y = b = H = null;
            for (u in a)
                if (A = a[u],
                a.hasOwnProperty(u) && A != null)
                    switch (u) {
                    case "value":
                        break;
                    case "multiple":
                        Y = A;
                    default:
                        s.hasOwnProperty(u) || Ze(e, t, u, null, s, A)
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
                        y = u;
                    default:
                        u !== A && Ze(e, t, r, u, s, A)
                    }
            t = b,
            a = y,
            s = Y,
            H != null ? ul(e, !!a, H, !1) : !!s != !!a && (t != null ? ul(e, !!a, t, !0) : ul(e, !!a, a ? [] : "", !1));
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
                        Ze(e, t, b, null, s, r)
                    }
            for (y in s)
                if (r = s[y],
                u = a[y],
                s.hasOwnProperty(y) && (r != null || u != null))
                    switch (y) {
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
                        r !== u && Ze(e, t, y, r, s, u)
                    }
            Hf(e, H, Y);
            return;
        case "option":
            for (var ve in a)
                if (H = a[ve],
                a.hasOwnProperty(ve) && H != null && !s.hasOwnProperty(ve))
                    switch (ve) {
                    case "selected":
                        e.selected = !1;
                        break;
                    default:
                        Ze(e, t, ve, null, s, H)
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
                        Ze(e, t, A, H, s, Y)
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
                a.hasOwnProperty(pe) && H != null && !s.hasOwnProperty(pe) && Ze(e, t, pe, null, s, H);
            for (z in s)
                if (H = s[z],
                Y = a[z],
                s.hasOwnProperty(z) && H !== Y && (H != null || Y != null))
                    switch (z) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (H != null)
                            throw Error(o(137, t));
                        break;
                    default:
                        Ze(e, t, z, H, s, Y)
                    }
            return;
        default:
            if (or(t)) {
                for (var Qe in a)
                    H = a[Qe],
                    a.hasOwnProperty(Qe) && H !== void 0 && !s.hasOwnProperty(Qe) && Xu(e, t, Qe, void 0, s, H);
                for (K in s)
                    H = s[K],
                    Y = a[K],
                    !s.hasOwnProperty(K) || H === Y || H === void 0 && Y === void 0 || Xu(e, t, K, H, s, Y);
                return
            }
        }
        for (var _ in a)
            H = a[_],
            a.hasOwnProperty(_) && H != null && !s.hasOwnProperty(_) && Ze(e, t, _, null, s, H);
        for ($ in s)
            H = s[$],
            Y = a[$],
            !s.hasOwnProperty($) || H === Y || H == null && Y == null || Ze(e, t, $, H, s, Y)
    }
    var Ku = null
      , Zu = null;
    function jo(e) {
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
    function Qu(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Fu = null;
    function Nx() {
        var e = window.event;
        return e && e.type === "popstate" ? e === Fu ? !1 : (Fu = e,
        !0) : (Fu = null,
        !1)
    }
    var Gm = typeof setTimeout == "function" ? setTimeout : void 0
      , Ex = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Xm = typeof Promise == "function" ? Promise : void 0
      , Cx = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xm < "u" ? function(e) {
        return Xm.resolve(null).then(e).catch(Dx)
    }
    : Gm;
    function Dx(e) {
        setTimeout(function() {
            throw e
        })
    }
    function jn(e) {
        return e === "head"
    }
    function Km(e, t) {
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
                        var y = e.ownerDocument;
                        if (a & 1 && Pi(y.documentElement),
                        a & 2 && Pi(y.body),
                        a & 4)
                            for (a = y.head,
                            Pi(a),
                            y = a.firstChild; y; ) {
                                var b = y.nextSibling
                                  , A = y.nodeName;
                                y[Ne] || A === "SCRIPT" || A === "STYLE" || A === "LINK" && y.rel.toLowerCase() === "stylesheet" || a.removeChild(y),
                                y = b
                            }
                    }
                    if (r === 0) {
                        e.removeChild(u),
                        Fi(t);
                        return
                    }
                    r--
                } else
                    a === "$" || a === "$?" || a === "$!" ? r++ : s = a.charCodeAt(0) - 48;
            else
                s = 0;
            a = u
        } while (a);
        Fi(t)
    }
    function Ju(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var a = t;
            switch (t = t.nextSibling,
            a.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                Ju(a),
                De(a);
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
                if (!e[Ne])
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
            if (e = Na(e.nextSibling),
            e === null)
                break
        }
        return null
    }
    function _x(e, t, a) {
        if (t === "")
            return null;
        for (; e.nodeType !== 3; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Na(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function Iu(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete"
    }
    function Ox(e, t) {
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
    function Na(e) {
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
    var $u = null;
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
        switch (t = jo(a),
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
    function Pi(e) {
        for (var t = e.attributes; t.length; )
            e.removeAttributeNode(t[0]);
        De(e)
    }
    var pa = new Map
      , Fm = new Set;
    function wo(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var an = O.d;
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
        var e = an.f()
          , t = po();
        return e || t
    }
    function Vx(e) {
        var t = Ve(e);
        t !== null && t.tag === 5 && t.type === "form" ? ph(t) : an.r(e)
    }
    var kl = typeof document > "u" ? null : document;
    function Jm(e, t, a) {
        var s = kl;
        if (s && typeof t == "string" && t) {
            var r = ra(t);
            r = 'link[rel="' + e + '"][href="' + r + '"]',
            typeof a == "string" && (r += '[crossorigin="' + a + '"]'),
            Fm.has(r) || (Fm.add(r),
            e = {
                rel: e,
                crossOrigin: a,
                href: t
            },
            s.querySelector(r) === null && (t = s.createElement("link"),
            Rt(t, "link", e),
            dt(t),
            s.head.appendChild(t)))
        }
    }
    function zx(e) {
        an.D(e),
        Jm("dns-prefetch", e, null)
    }
    function Ux(e, t) {
        an.C(e, t),
        Jm("preconnect", e, t)
    }
    function Bx(e, t, a) {
        an.L(e, t, a);
        var s = kl;
        if (s && e && t) {
            var r = 'link[rel="preload"][as="' + ra(t) + '"]';
            t === "image" && a && a.imageSrcSet ? (r += '[imagesrcset="' + ra(a.imageSrcSet) + '"]',
            typeof a.imageSizes == "string" && (r += '[imagesizes="' + ra(a.imageSizes) + '"]')) : r += '[href="' + ra(e) + '"]';
            var u = r;
            switch (t) {
            case "style":
                u = Hl(e);
                break;
            case "script":
                u = Pl(e)
            }
            pa.has(u) || (e = v({
                rel: "preload",
                href: t === "image" && a && a.imageSrcSet ? void 0 : e,
                as: t
            }, a),
            pa.set(u, e),
            s.querySelector(r) !== null || t === "style" && s.querySelector(qi(u)) || t === "script" && s.querySelector(Yi(u)) || (t = s.createElement("link"),
            Rt(t, "link", e),
            dt(t),
            s.head.appendChild(t)))
        }
    }
    function Lx(e, t) {
        an.m(e, t);
        var a = kl;
        if (a && e) {
            var s = t && typeof t.as == "string" ? t.as : "script"
              , r = 'link[rel="modulepreload"][as="' + ra(s) + '"][href="' + ra(e) + '"]'
              , u = r;
            switch (s) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                u = Pl(e)
            }
            if (!pa.has(u) && (e = v({
                rel: "modulepreload",
                href: e
            }, t),
            pa.set(u, e),
            a.querySelector(r) === null)) {
                switch (s) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (a.querySelector(Yi(u)))
                        return
                }
                s = a.createElement("link"),
                Rt(s, "link", e),
                dt(s),
                a.head.appendChild(s)
            }
        }
    }
    function kx(e, t, a) {
        an.S(e, t, a);
        var s = kl;
        if (s && e) {
            var r = Mt(s).hoistableStyles
              , u = Hl(e);
            t = t || "default";
            var y = r.get(u);
            if (!y) {
                var b = {
                    loading: 0,
                    preload: null
                };
                if (y = s.querySelector(qi(u)))
                    b.loading = 5;
                else {
                    e = v({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, a),
                    (a = pa.get(u)) && Wu(e, a);
                    var A = y = s.createElement("link");
                    dt(A),
                    Rt(A, "link", e),
                    A._p = new Promise(function(z, K) {
                        A.onload = z,
                        A.onerror = K
                    }
                    ),
                    A.addEventListener("load", function() {
                        b.loading |= 1
                    }),
                    A.addEventListener("error", function() {
                        b.loading |= 2
                    }),
                    b.loading |= 4,
                    Ao(y, t, s)
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
        an.X(e, t);
        var a = kl;
        if (a && e) {
            var s = Mt(a).hoistableScripts
              , r = Pl(e)
              , u = s.get(r);
            u || (u = a.querySelector(Yi(r)),
            u || (e = v({
                src: e,
                async: !0
            }, t),
            (t = pa.get(r)) && ec(e, t),
            u = a.createElement("script"),
            dt(u),
            Rt(u, "link", e),
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
    function Px(e, t) {
        an.M(e, t);
        var a = kl;
        if (a && e) {
            var s = Mt(a).hoistableScripts
              , r = Pl(e)
              , u = s.get(r);
            u || (u = a.querySelector(Yi(r)),
            u || (e = v({
                src: e,
                async: !0,
                type: "module"
            }, t),
            (t = pa.get(r)) && ec(e, t),
            u = a.createElement("script"),
            dt(u),
            Rt(u, "link", e),
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
    function Im(e, t, a, s) {
        var r = (r = I.current) ? wo(r) : null;
        if (!r)
            throw Error(o(446));
        switch (e) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Hl(a.href),
            a = Mt(r).hoistableStyles,
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
                e = Hl(a.href);
                var u = Mt(r).hoistableStyles
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
                (u = r.querySelector(qi(e))) && !u._p && (y.instance = u,
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
                t && s === null)
                    throw Error(o(528, ""));
                return y
            }
            if (t && s !== null)
                throw Error(o(529, ""));
            return null;
        case "script":
            return t = a.async,
            a = a.src,
            typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Pl(a),
            a = Mt(r).hoistableScripts,
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
    function Hl(e) {
        return 'href="' + ra(e) + '"'
    }
    function qi(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }
    function $m(e) {
        return v({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }
    function qx(e, t, a, s) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? s.loading = 1 : (t = e.createElement("link"),
        s.preload = t,
        t.addEventListener("load", function() {
            return s.loading |= 1
        }),
        t.addEventListener("error", function() {
            return s.loading |= 2
        }),
        Rt(t, "link", a),
        dt(t),
        e.head.appendChild(t))
    }
    function Pl(e) {
        return '[src="' + ra(e) + '"]'
    }
    function Yi(e) {
        return "script[async]" + e
    }
    function Wm(e, t, a) {
        if (t.count++,
        t.instance === null)
            switch (t.type) {
            case "style":
                var s = e.querySelector('style[data-href~="' + ra(a.href) + '"]');
                if (s)
                    return t.instance = s,
                    dt(s),
                    s;
                var r = v({}, a, {
                    "data-href": a.href,
                    "data-precedence": a.precedence,
                    href: null,
                    precedence: null
                });
                return s = (e.ownerDocument || e).createElement("style"),
                dt(s),
                Rt(s, "style", r),
                Ao(s, a.precedence, e),
                t.instance = s;
            case "stylesheet":
                r = Hl(a.href);
                var u = e.querySelector(qi(r));
                if (u)
                    return t.state.loading |= 4,
                    t.instance = u,
                    dt(u),
                    u;
                s = $m(a),
                (r = pa.get(r)) && Wu(s, r),
                u = (e.ownerDocument || e).createElement("link"),
                dt(u);
                var y = u;
                return y._p = new Promise(function(b, A) {
                    y.onload = b,
                    y.onerror = A
                }
                ),
                Rt(u, "link", s),
                t.state.loading |= 4,
                Ao(u, a.precedence, e),
                t.instance = u;
            case "script":
                return u = Pl(a.src),
                (r = e.querySelector(Yi(u))) ? (t.instance = r,
                dt(r),
                r) : (s = a,
                (r = pa.get(u)) && (s = v({}, a),
                ec(s, r)),
                e = e.ownerDocument || e,
                r = e.createElement("script"),
                dt(r),
                Rt(r, "link", s),
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
            Ao(s, a.precedence, e));
        return t.instance
    }
    function Ao(e, t, a) {
        for (var s = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), r = s.length ? s[s.length - 1] : null, u = r, y = 0; y < s.length; y++) {
            var b = s[y];
            if (b.dataset.precedence === t)
                u = b;
            else if (u !== r)
                break
        }
        u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = a.nodeType === 9 ? a.head : a,
        t.insertBefore(e, t.firstChild))
    }
    function Wu(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.title == null && (e.title = t.title)
    }
    function ec(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.integrity == null && (e.integrity = t.integrity)
    }
    var No = null;
    function ep(e, t, a) {
        if (No === null) {
            var s = new Map
              , r = No = new Map;
            r.set(a, s)
        } else
            r = No,
            s = r.get(a),
            s || (s = new Map,
            r.set(a, s));
        if (s.has(e))
            return s;
        for (s.set(e, null),
        a = a.getElementsByTagName(e),
        r = 0; r < a.length; r++) {
            var u = a[r];
            if (!(u[Ne] || u[Tt] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
                var y = u.getAttribute(t) || "";
                y = e + y;
                var b = s.get(y);
                b ? b.push(u) : s.set(y, [u])
            }
        }
        return s
    }
    function tp(e, t, a) {
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
    function ap(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    var Gi = null;
    function Gx() {}
    function Xx(e, t, a) {
        if (Gi === null)
            throw Error(o(475));
        var s = Gi;
        if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
            if (t.instance === null) {
                var r = Hl(a.href)
                  , u = e.querySelector(qi(r));
                if (u) {
                    e = u._p,
                    e !== null && typeof e == "object" && typeof e.then == "function" && (s.count++,
                    s = Eo.bind(s),
                    e.then(s, s)),
                    t.state.loading |= 4,
                    t.instance = u,
                    dt(u);
                    return
                }
                u = e.ownerDocument || e,
                a = $m(a),
                (r = pa.get(r)) && Wu(a, r),
                u = u.createElement("link"),
                dt(u);
                var y = u;
                y._p = new Promise(function(b, A) {
                    y.onload = b,
                    y.onerror = A
                }
                ),
                Rt(u, "link", a),
                t.instance = u
            }
            s.stylesheets === null && (s.stylesheets = new Map),
            s.stylesheets.set(t, e),
            (e = t.state.preload) && (t.state.loading & 3) === 0 && (s.count++,
            t = Eo.bind(s),
            e.addEventListener("load", t),
            e.addEventListener("error", t))
        }
    }
    function Kx() {
        if (Gi === null)
            throw Error(o(475));
        var e = Gi;
        return e.stylesheets && e.count === 0 && tc(e, e.stylesheets),
        0 < e.count ? function(t) {
            var a = setTimeout(function() {
                if (e.stylesheets && tc(e, e.stylesheets),
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
    function Eo() {
        if (this.count--,
        this.count === 0) {
            if (this.stylesheets)
                tc(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null,
                e()
            }
        }
    }
    var Co = null;
    function tc(e, t) {
        e.stylesheets = null,
        e.unsuspend !== null && (e.count++,
        Co = new Map,
        t.forEach(Zx, e),
        Co = null,
        Eo.call(e))
    }
    function Zx(e, t) {
        if (!(t.state.loading & 4)) {
            var a = Co.get(e);
            if (a)
                var s = a.get(null);
            else {
                a = new Map,
                Co.set(e, a);
                for (var r = e.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < r.length; u++) {
                    var y = r[u];
                    (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (a.set(y.dataset.precedence, y),
                    s = y)
                }
                s && a.set(null, s)
            }
            r = t.instance,
            y = r.getAttribute("data-precedence"),
            u = a.get(y) || s,
            u === s && a.set(null, r),
            a.set(y, r),
            this.count++,
            s = Eo.bind(this),
            r.addEventListener("load", s),
            r.addEventListener("error", s),
            u ? u.parentNode.insertBefore(r, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
            e.insertBefore(r, e.firstChild)),
            t.state.loading |= 4
        }
    }
    var Xi = {
        $$typeof: B,
        Provider: null,
        Consumer: null,
        _currentValue: L,
        _currentValue2: L,
        _threadCount: 0
    };
    function Qx(e, t, a, s, r, u, y, b) {
        this.tag = 1,
        this.containerInfo = e,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = be(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = be(0),
        this.hiddenUpdates = be(null),
        this.identifierPrefix = s,
        this.onUncaughtError = r,
        this.onCaughtError = u,
        this.onRecoverableError = y,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = b,
        this.incompleteTransitions = new Map
    }
    function np(e, t, a, s, r, u, y, b, A, z, K, $) {
        return e = new Qx(e,t,a,y,b,A,z,$),
        t = 1,
        u === !0 && (t |= 24),
        u = $t(3, null, null, t),
        e.current = u,
        u.stateNode = e,
        t = Ur(),
        t.refCount++,
        e.pooledCache = t,
        t.refCount++,
        u.memoizedState = {
            element: s,
            isDehydrated: a,
            cache: t
        },
        Hr(u),
        e
    }
    function lp(e) {
        return e ? (e = vl,
        e) : vl
    }
    function ip(e, t, a, s, r, u) {
        r = lp(r),
        s.context === null ? s.context = r : s.pendingContext = r,
        s = cn(t),
        s.payload = {
            element: a
        },
        u = u === void 0 ? null : u,
        u !== null && (s.callback = u),
        a = fn(e, s, t),
        a !== null && (na(a, e, t),
        Si(a, e, t))
    }
    function sp(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var a = e.retryLane;
            e.retryLane = a !== 0 && a < t ? a : t
        }
    }
    function ac(e, t) {
        sp(e, t),
        (e = e.alternate) && sp(e, t)
    }
    function op(e) {
        if (e.tag === 13) {
            var t = yl(e, 67108864);
            t !== null && na(t, e, 67108864),
            ac(e, 67108864)
        }
    }
    var Do = !0;
    function Fx(e, t, a, s) {
        var r = N.T;
        N.T = null;
        var u = O.p;
        try {
            O.p = 2,
            nc(e, t, a, s)
        } finally {
            O.p = u,
            N.T = r
        }
    }
    function Jx(e, t, a, s) {
        var r = N.T;
        N.T = null;
        var u = O.p;
        try {
            O.p = 8,
            nc(e, t, a, s)
        } finally {
            O.p = u,
            N.T = r
        }
    }
    function nc(e, t, a, s) {
        if (Do) {
            var r = lc(s);
            if (r === null)
                Gu(e, t, s, Mo, a),
                up(e, s);
            else if ($x(r, e, t, a, s))
                s.stopPropagation();
            else if (up(e, s),
            t & 4 && -1 < Ix.indexOf(e)) {
                for (; r !== null; ) {
                    var u = Ve(r);
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
                                        var A = 1 << 31 - ft(y);
                                        b.entanglements[1] |= A,
                                        y &= ~A
                                    }
                                    za(u),
                                    (Ge & 6) === 0 && (ho = ct() + 500,
                                    Li(0))
                                }
                            }
                            break;
                        case 13:
                            b = yl(u, 2),
                            b !== null && na(b, u, 2),
                            po(),
                            ac(u, 2)
                        }
                    if (u = lc(s),
                    u === null && Gu(e, t, s, Mo, a),
                    u === r)
                        break;
                    r = u
                }
                r !== null && s.stopPropagation()
            } else
                Gu(e, t, s, null, a)
        }
    }
    function lc(e) {
        return e = ur(e),
        ic(e)
    }
    var Mo = null;
    function ic(e) {
        if (Mo = null,
        e = ke(e),
        e !== null) {
            var t = h(e);
            if (t === null)
                e = null;
            else {
                var a = t.tag;
                if (a === 13) {
                    if (e = f(t),
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
        return Mo = e,
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
            switch (Ca()) {
            case Da:
                return 2;
            case Ma:
                return 8;
            case ia:
            case ka:
                return 32;
            case we:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var sc = !1
      , wn = null
      , An = null
      , Nn = null
      , Ki = new Map
      , Zi = new Map
      , En = []
      , Ix = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function up(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            wn = null;
            break;
        case "dragenter":
        case "dragleave":
            An = null;
            break;
        case "mouseover":
        case "mouseout":
            Nn = null;
            break;
        case "pointerover":
        case "pointerout":
            Ki.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Zi.delete(t.pointerId)
        }
    }
    function Qi(e, t, a, s, r, u) {
        return e === null || e.nativeEvent !== u ? (e = {
            blockedOn: t,
            domEventName: a,
            eventSystemFlags: s,
            nativeEvent: u,
            targetContainers: [r]
        },
        t !== null && (t = Ve(t),
        t !== null && op(t)),
        e) : (e.eventSystemFlags |= s,
        t = e.targetContainers,
        r !== null && t.indexOf(r) === -1 && t.push(r),
        e)
    }
    function $x(e, t, a, s, r) {
        switch (t) {
        case "focusin":
            return wn = Qi(wn, e, t, a, s, r),
            !0;
        case "dragenter":
            return An = Qi(An, e, t, a, s, r),
            !0;
        case "mouseover":
            return Nn = Qi(Nn, e, t, a, s, r),
            !0;
        case "pointerover":
            var u = r.pointerId;
            return Ki.set(u, Qi(Ki.get(u) || null, e, t, a, s, r)),
            !0;
        case "gotpointercapture":
            return u = r.pointerId,
            Zi.set(u, Qi(Zi.get(u) || null, e, t, a, s, r)),
            !0
        }
        return !1
    }
    function cp(e) {
        var t = ke(e.target);
        if (t !== null) {
            var a = h(t);
            if (a !== null) {
                if (t = a.tag,
                t === 13) {
                    if (t = f(a),
                    t !== null) {
                        e.blockedOn = t,
                        Ss(e.priority, function() {
                            if (a.tag === 13) {
                                var s = aa();
                                s = il(s);
                                var r = yl(a, s);
                                r !== null && na(r, a, s),
                                ac(a, s)
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
    function _o(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var a = lc(e.nativeEvent);
            if (a === null) {
                a = e.nativeEvent;
                var s = new a.constructor(a.type,a);
                rr = s,
                a.target.dispatchEvent(s),
                rr = null
            } else
                return t = Ve(a),
                t !== null && op(t),
                e.blockedOn = a,
                !1;
            t.shift()
        }
        return !0
    }
    function fp(e, t, a) {
        _o(e) && a.delete(t)
    }
    function Wx() {
        sc = !1,
        wn !== null && _o(wn) && (wn = null),
        An !== null && _o(An) && (An = null),
        Nn !== null && _o(Nn) && (Nn = null),
        Ki.forEach(fp),
        Zi.forEach(fp)
    }
    function Oo(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        sc || (sc = !0,
        n.unstable_scheduleCallback(n.unstable_NormalPriority, Wx)))
    }
    var Ro = null;
    function dp(e) {
        Ro !== e && (Ro = e,
        n.unstable_scheduleCallback(n.unstable_NormalPriority, function() {
            Ro === e && (Ro = null);
            for (var t = 0; t < e.length; t += 3) {
                var a = e[t]
                  , s = e[t + 1]
                  , r = e[t + 2];
                if (typeof s != "function") {
                    if (ic(s || a) === null)
                        continue;
                    break
                }
                var u = Ve(a);
                u !== null && (e.splice(t, 3),
                t -= 3,
                iu(u, {
                    pending: !0,
                    data: r,
                    method: a.method,
                    action: s
                }, s, r))
            }
        }))
    }
    function Fi(e) {
        function t(A) {
            return Oo(A, e)
        }
        wn !== null && Oo(wn, e),
        An !== null && Oo(An, e),
        Nn !== null && Oo(Nn, e),
        Ki.forEach(t),
        Zi.forEach(t);
        for (var a = 0; a < En.length; a++) {
            var s = En[a];
            s.blockedOn === e && (s.blockedOn = null)
        }
        for (; 0 < En.length && (a = En[0],
        a.blockedOn === null); )
            cp(a),
            a.blockedOn === null && En.shift();
        if (a = (e.ownerDocument || e).$$reactFormReplay,
        a != null)
            for (s = 0; s < a.length; s += 3) {
                var r = a[s]
                  , u = a[s + 1]
                  , y = r[Dt] || null;
                if (typeof u == "function")
                    y || dp(a);
                else if (y) {
                    var b = null;
                    if (u && u.hasAttribute("formAction")) {
                        if (r = u,
                        y = u[Dt] || null)
                            b = y.formAction;
                        else if (ic(r) !== null)
                            continue
                    } else
                        b = y.action;
                    typeof b == "function" ? a[s + 1] = b : (a.splice(s, 3),
                    s -= 3),
                    dp(a)
                }
            }
    }
    function oc(e) {
        this._internalRoot = e
    }
    Vo.prototype.render = oc.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(o(409));
        var a = t.current
          , s = aa();
        ip(a, s, e, t, null, null)
    }
    ,
    Vo.prototype.unmount = oc.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            ip(e.current, 2, null, e, null, null),
            po(),
            t[Ha] = null
        }
    }
    ;
    function Vo(e) {
        this._internalRoot = e
    }
    Vo.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = ti();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var a = 0; a < En.length && t !== 0 && t < En[a].priority; a++)
                ;
            En.splice(a, 0, e),
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
        return e = p(t),
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
        var zo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!zo.isDisabled && zo.supportsFiber)
            try {
                Jt = zo.inject(eb),
                gt = zo
            } catch {}
    }
    return Ii.createRoot = function(e, t) {
        if (!c(e))
            throw Error(o(299));
        var a = !1
          , s = ""
          , r = Dh
          , u = Mh
          , y = _h
          , b = null;
        return t != null && (t.unstable_strictMode === !0 && (a = !0),
        t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (r = t.onUncaughtError),
        t.onCaughtError !== void 0 && (u = t.onCaughtError),
        t.onRecoverableError !== void 0 && (y = t.onRecoverableError),
        t.unstable_transitionCallbacks !== void 0 && (b = t.unstable_transitionCallbacks)),
        t = np(e, 1, !1, null, null, a, s, r, u, y, b, null),
        e[Ha] = t.current,
        Yu(e),
        new oc(t)
    }
    ,
    Ii.hydrateRoot = function(e, t, a) {
        if (!c(e))
            throw Error(o(299));
        var s = !1
          , r = ""
          , u = Dh
          , y = Mh
          , b = _h
          , A = null
          , z = null;
        return a != null && (a.unstable_strictMode === !0 && (s = !0),
        a.identifierPrefix !== void 0 && (r = a.identifierPrefix),
        a.onUncaughtError !== void 0 && (u = a.onUncaughtError),
        a.onCaughtError !== void 0 && (y = a.onCaughtError),
        a.onRecoverableError !== void 0 && (b = a.onRecoverableError),
        a.unstable_transitionCallbacks !== void 0 && (A = a.unstable_transitionCallbacks),
        a.formState !== void 0 && (z = a.formState)),
        t = np(e, 1, !0, t, a ?? null, s, r, u, y, b, A, z),
        t.context = lp(null),
        a = t.current,
        s = aa(),
        s = il(s),
        r = cn(s),
        r.callback = null,
        fn(a, r, s),
        a = s,
        t.current.lanes = a,
        yt(t, a),
        za(t),
        e[Ha] = t.current,
        Yu(e),
        new Vo(t)
    }
    ,
    Ii.version = "19.1.0",
    Ii
}
var jp;
function db() {
    if (jp)
        return cc.exports;
    jp = 1;
    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (l) {
                console.error(l)
            }
    }
    return n(),
    cc.exports = fb(),
    cc.exports
}
var hb = db();
const Jc = T.createContext({});
function Ic(n) {
    const l = T.useRef(null);
    return l.current === null && (l.current = n()),
    l.current
}
const $c = typeof window < "u"
  , Fg = $c ? T.useLayoutEffect : T.useEffect
  , Jo = T.createContext(null);
function Wc(n, l) {
    n.indexOf(l) === -1 && n.push(l)
}
function ef(n, l) {
    const i = n.indexOf(l);
    i > -1 && n.splice(i, 1)
}
const nn = (n, l, i) => i > l ? l : i < n ? n : i;
let tf = () => {}
;
const ln = {}
  , Jg = n => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);
function Ig(n) {
    return typeof n == "object" && n !== null
}
const $g = n => /^0[^.\s]+$/u.test(n);
function af(n) {
    let l;
    return () => (l === void 0 && (l = n()),
    l)
}
const ba = n => n
  , mb = (n, l) => i => l(n(i))
  , ps = (...n) => n.reduce(mb)
  , ss = (n, l, i) => {
    const o = l - n;
    return o === 0 ? 1 : (i - n) / o
}
;
class nf {
    constructor() {
        this.subscriptions = []
    }
    add(l) {
        return Wc(this.subscriptions, l),
        () => ef(this.subscriptions, l)
    }
    notify(l, i, o) {
        const c = this.subscriptions.length;
        if (c)
            if (c === 1)
                this.subscriptions[0](l, i, o);
            else
                for (let h = 0; h < c; h++) {
                    const f = this.subscriptions[h];
                    f && f(l, i, o)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const Ua = n => n * 1e3
  , Ba = n => n / 1e3;
function Wg(n, l) {
    return l ? n * (1e3 / l) : 0
}
const ey = (n, l, i) => (((1 - 3 * i + 3 * l) * n + (3 * i - 6 * l)) * n + 3 * l) * n
  , pb = 1e-7
  , gb = 12;
function yb(n, l, i, o, c) {
    let h, f, m = 0;
    do
        f = l + (i - l) / 2,
        h = ey(f, o, c) - n,
        h > 0 ? i = f : l = f;
    while (Math.abs(h) > pb && ++m < gb);
    return f
}
function gs(n, l, i, o) {
    if (n === l && i === o)
        return ba;
    const c = h => yb(h, 0, 1, n, i);
    return h => h === 0 || h === 1 ? h : ey(c(h), l, o)
}
const ty = n => l => l <= .5 ? n(2 * l) / 2 : (2 - n(2 * (1 - l))) / 2
  , ay = n => l => 1 - n(1 - l)
  , ny = gs(.33, 1.53, .69, .99)
  , lf = ay(ny)
  , ly = ty(lf)
  , iy = n => (n *= 2) < 1 ? .5 * lf(n) : .5 * (2 - Math.pow(2, -10 * (n - 1)))
  , sf = n => 1 - Math.sin(Math.acos(n))
  , sy = ay(sf)
  , oy = ty(sf)
  , vb = gs(.42, 0, 1, 1)
  , xb = gs(0, 0, .58, 1)
  , ry = gs(.42, 0, .58, 1)
  , bb = n => Array.isArray(n) && typeof n[0] != "number"
  , uy = n => Array.isArray(n) && typeof n[0] == "number"
  , Sb = {
    linear: ba,
    easeIn: vb,
    easeInOut: ry,
    easeOut: xb,
    circIn: sf,
    circInOut: oy,
    circOut: sy,
    backIn: lf,
    backInOut: ly,
    backOut: ny,
    anticipate: iy
}
  , Tb = n => typeof n == "string"
  , wp = n => {
    if (uy(n)) {
        tf(n.length === 4);
        const [l,i,o,c] = n;
        return gs(l, i, o, c)
    } else if (Tb(n))
        return Sb[n];
    return n
}
  , Uo = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"]
  , Ap = {
    value: null
};
function jb(n, l) {
    let i = new Set
      , o = new Set
      , c = !1
      , h = !1;
    const f = new WeakSet;
    let m = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , p = 0;
    function g(x) {
        f.has(x) && (v.schedule(x),
        n()),
        p++,
        x(m)
    }
    const v = {
        schedule: (x, S=!1, w=!1) => {
            const D = w && c ? i : o;
            return S && f.add(x),
            D.has(x) || D.add(x),
            x
        }
        ,
        cancel: x => {
            o.delete(x),
            f.delete(x)
        }
        ,
        process: x => {
            if (m = x,
            c) {
                h = !0;
                return
            }
            c = !0,
            [i,o] = [o, i],
            i.forEach(g),
            l && Ap.value && Ap.value.frameloop[l].push(p),
            p = 0,
            i.clear(),
            c = !1,
            h && (h = !1,
            v.process(x))
        }
    };
    return v
}
const wb = 40;
function cy(n, l) {
    let i = !1
      , o = !0;
    const c = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , h = () => i = !0
      , f = Uo.reduce( (B, G) => (B[G] = jb(h, l ? G : void 0),
    B), {})
      , {setup: m, read: p, resolveKeyframes: g, preUpdate: v, update: x, preRender: S, render: w, postRender: C} = f
      , D = () => {
        const B = ln.useManualTiming ? c.timestamp : performance.now();
        i = !1,
        ln.useManualTiming || (c.delta = o ? 1e3 / 60 : Math.max(Math.min(B - c.timestamp, wb), 1)),
        c.timestamp = B,
        c.isProcessing = !0,
        m.process(c),
        p.process(c),
        g.process(c),
        v.process(c),
        x.process(c),
        S.process(c),
        w.process(c),
        C.process(c),
        c.isProcessing = !1,
        i && l && (o = !1,
        n(D))
    }
      , M = () => {
        i = !0,
        o = !0,
        c.isProcessing || n(D)
    }
    ;
    return {
        schedule: Uo.reduce( (B, G) => {
            const R = f[G];
            return B[G] = (Z, W=!1, Q=!1) => (i || M(),
            R.schedule(Z, W, Q)),
            B
        }
        , {}),
        cancel: B => {
            for (let G = 0; G < Uo.length; G++)
                f[Uo[G]].cancel(B)
        }
        ,
        state: c,
        steps: f
    }
}
const {schedule: lt, cancel: _n, state: Vt, steps: mc} = cy(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ba, !0);
let Ho;
function Ab() {
    Ho = void 0
}
const Ft = {
    now: () => (Ho === void 0 && Ft.set(Vt.isProcessing || ln.useManualTiming ? Vt.timestamp : performance.now()),
    Ho),
    set: n => {
        Ho = n,
        queueMicrotask(Ab)
    }
}
  , fy = n => l => typeof l == "string" && l.startsWith(n)
  , of = fy("--")
  , Nb = fy("var(--")
  , rf = n => Nb(n) ? Eb.test(n.split("/*")[0].trim()) : !1
  , Eb = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , Fl = {
    test: n => typeof n == "number",
    parse: parseFloat,
    transform: n => n
}
  , os = {
    ...Fl,
    transform: n => nn(0, 1, n)
}
  , Bo = {
    ...Fl,
    default: 1
}
  , ts = n => Math.round(n * 1e5) / 1e5
  , uf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Cb(n) {
    return n == null
}
const Db = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , cf = (n, l) => i => !!(typeof i == "string" && Db.test(i) && i.startsWith(n) || l && !Cb(i) && Object.prototype.hasOwnProperty.call(i, l))
  , dy = (n, l, i) => o => {
    if (typeof o != "string")
        return o;
    const [c,h,f,m] = o.match(uf);
    return {
        [n]: parseFloat(c),
        [l]: parseFloat(h),
        [i]: parseFloat(f),
        alpha: m !== void 0 ? parseFloat(m) : 1
    }
}
  , Mb = n => nn(0, 255, n)
  , pc = {
    ...Fl,
    transform: n => Math.round(Mb(n))
}
  , el = {
    test: cf("rgb", "red"),
    parse: dy("red", "green", "blue"),
    transform: ({red: n, green: l, blue: i, alpha: o=1}) => "rgba(" + pc.transform(n) + ", " + pc.transform(l) + ", " + pc.transform(i) + ", " + ts(os.transform(o)) + ")"
};
function _b(n) {
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
const Cc = {
    test: cf("#"),
    parse: _b,
    transform: el.transform
}
  , ys = n => ({
    test: l => typeof l == "string" && l.endsWith(n) && l.split(" ").length === 1,
    parse: parseFloat,
    transform: l => `${l}${n}`
})
  , Dn = ys("deg")
  , La = ys("%")
  , xe = ys("px")
  , Ob = ys("vh")
  , Rb = ys("vw")
  , Np = {
    ...La,
    parse: n => La.parse(n) / 100,
    transform: n => La.transform(n * 100)
}
  , ql = {
    test: cf("hsl", "hue"),
    parse: dy("hue", "saturation", "lightness"),
    transform: ({hue: n, saturation: l, lightness: i, alpha: o=1}) => "hsla(" + Math.round(n) + ", " + La.transform(ts(l)) + ", " + La.transform(ts(i)) + ", " + ts(os.transform(o)) + ")"
}
  , bt = {
    test: n => el.test(n) || Cc.test(n) || ql.test(n),
    parse: n => el.test(n) ? el.parse(n) : ql.test(n) ? ql.parse(n) : Cc.parse(n),
    transform: n => typeof n == "string" ? n : n.hasOwnProperty("red") ? el.transform(n) : ql.transform(n),
    getAnimatableNone: n => {
        const l = bt.parse(n);
        return l.alpha = 0,
        bt.transform(l)
    }
}
  , Vb = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function zb(n) {
    var l, i;
    return isNaN(n) && typeof n == "string" && (((l = n.match(uf)) == null ? void 0 : l.length) || 0) + (((i = n.match(Vb)) == null ? void 0 : i.length) || 0) > 0
}
const hy = "number"
  , my = "color"
  , Ub = "var"
  , Bb = "var("
  , Ep = "${}"
  , Lb = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function rs(n) {
    const l = n.toString()
      , i = []
      , o = {
        color: [],
        number: [],
        var: []
    }
      , c = [];
    let h = 0;
    const m = l.replace(Lb, p => (bt.test(p) ? (o.color.push(h),
    c.push(my),
    i.push(bt.parse(p))) : p.startsWith(Bb) ? (o.var.push(h),
    c.push(Ub),
    i.push(p)) : (o.number.push(h),
    c.push(hy),
    i.push(parseFloat(p))),
    ++h,
    Ep)).split(Ep);
    return {
        values: i,
        split: m,
        indexes: o,
        types: c
    }
}
function py(n) {
    return rs(n).values
}
function gy(n) {
    const {split: l, types: i} = rs(n)
      , o = l.length;
    return c => {
        let h = "";
        for (let f = 0; f < o; f++)
            if (h += l[f],
            c[f] !== void 0) {
                const m = i[f];
                m === hy ? h += ts(c[f]) : m === my ? h += bt.transform(c[f]) : h += c[f]
            }
        return h
    }
}
const kb = n => typeof n == "number" ? 0 : bt.test(n) ? bt.getAnimatableNone(n) : n;
function Hb(n) {
    const l = py(n);
    return gy(n)(l.map(kb))
}
const On = {
    test: zb,
    parse: py,
    createTransformer: gy,
    getAnimatableNone: Hb
};
function gc(n, l, i) {
    return i < 0 && (i += 1),
    i > 1 && (i -= 1),
    i < 1 / 6 ? n + (l - n) * 6 * i : i < 1 / 2 ? l : i < 2 / 3 ? n + (l - n) * (2 / 3 - i) * 6 : n
}
function Pb({hue: n, saturation: l, lightness: i, alpha: o}) {
    n /= 360,
    l /= 100,
    i /= 100;
    let c = 0
      , h = 0
      , f = 0;
    if (!l)
        c = h = f = i;
    else {
        const m = i < .5 ? i * (1 + l) : i + l - i * l
          , p = 2 * i - m;
        c = gc(p, m, n + 1 / 3),
        h = gc(p, m, n),
        f = gc(p, m, n - 1 / 3)
    }
    return {
        red: Math.round(c * 255),
        green: Math.round(h * 255),
        blue: Math.round(f * 255),
        alpha: o
    }
}
function Go(n, l) {
    return i => i > 0 ? l : n
}
const nt = (n, l, i) => n + (l - n) * i
  , yc = (n, l, i) => {
    const o = n * n
      , c = i * (l * l - o) + o;
    return c < 0 ? 0 : Math.sqrt(c)
}
  , qb = [Cc, el, ql]
  , Yb = n => qb.find(l => l.test(n));
function Cp(n) {
    const l = Yb(n);
    if (!l)
        return !1;
    let i = l.parse(n);
    return l === ql && (i = Pb(i)),
    i
}
const Dp = (n, l) => {
    const i = Cp(n)
      , o = Cp(l);
    if (!i || !o)
        return Go(n, l);
    const c = {
        ...i
    };
    return h => (c.red = yc(i.red, o.red, h),
    c.green = yc(i.green, o.green, h),
    c.blue = yc(i.blue, o.blue, h),
    c.alpha = nt(i.alpha, o.alpha, h),
    el.transform(c))
}
  , Dc = new Set(["none", "hidden"]);
function Gb(n, l) {
    return Dc.has(n) ? i => i <= 0 ? n : l : i => i >= 1 ? l : n
}
function Xb(n, l) {
    return i => nt(n, l, i)
}
function ff(n) {
    return typeof n == "number" ? Xb : typeof n == "string" ? rf(n) ? Go : bt.test(n) ? Dp : Qb : Array.isArray(n) ? yy : typeof n == "object" ? bt.test(n) ? Dp : Kb : Go
}
function yy(n, l) {
    const i = [...n]
      , o = i.length
      , c = n.map( (h, f) => ff(h)(h, l[f]));
    return h => {
        for (let f = 0; f < o; f++)
            i[f] = c[f](h);
        return i
    }
}
function Kb(n, l) {
    const i = {
        ...n,
        ...l
    }
      , o = {};
    for (const c in i)
        n[c] !== void 0 && l[c] !== void 0 && (o[c] = ff(n[c])(n[c], l[c]));
    return c => {
        for (const h in o)
            i[h] = o[h](c);
        return i
    }
}
function Zb(n, l) {
    const i = []
      , o = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let c = 0; c < l.values.length; c++) {
        const h = l.types[c]
          , f = n.indexes[h][o[h]]
          , m = n.values[f] ?? 0;
        i[c] = m,
        o[h]++
    }
    return i
}
const Qb = (n, l) => {
    const i = On.createTransformer(l)
      , o = rs(n)
      , c = rs(l);
    return o.indexes.var.length === c.indexes.var.length && o.indexes.color.length === c.indexes.color.length && o.indexes.number.length >= c.indexes.number.length ? Dc.has(n) && !c.values.length || Dc.has(l) && !o.values.length ? Gb(n, l) : ps(yy(Zb(o, c), c.values), i) : Go(n, l)
}
;
function vy(n, l, i) {
    return typeof n == "number" && typeof l == "number" && typeof i == "number" ? nt(n, l, i) : ff(n)(n, l)
}
const Fb = n => {
    const l = ({timestamp: i}) => n(i);
    return {
        start: (i=!0) => lt.update(l, i),
        stop: () => _n(l),
        now: () => Vt.isProcessing ? Vt.timestamp : Ft.now()
    }
}
  , xy = (n, l, i=10) => {
    let o = "";
    const c = Math.max(Math.round(l / i), 2);
    for (let h = 0; h < c; h++)
        o += Math.round(n(h / (c - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${o.substring(0, o.length - 2)})`
}
  , Xo = 2e4;
function df(n) {
    let l = 0;
    const i = 50;
    let o = n.next(l);
    for (; !o.done && l < Xo; )
        l += i,
        o = n.next(l);
    return l >= Xo ? 1 / 0 : l
}
function Jb(n, l=100, i) {
    const o = i({
        ...n,
        keyframes: [0, l]
    })
      , c = Math.min(df(o), Xo);
    return {
        type: "keyframes",
        ease: h => o.next(c * h).value / l,
        duration: Ba(c)
    }
}
const Ib = 5;
function by(n, l, i) {
    const o = Math.max(l - Ib, 0);
    return Wg(i - n(o), l - o)
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
  , vc = .001;
function $b({duration: n=rt.duration, bounce: l=rt.bounce, velocity: i=rt.velocity, mass: o=rt.mass}) {
    let c, h, f = 1 - l;
    f = nn(rt.minDamping, rt.maxDamping, f),
    n = nn(rt.minDuration, rt.maxDuration, Ba(n)),
    f < 1 ? (c = g => {
        const v = g * f
          , x = v * n
          , S = v - i
          , w = Mc(g, f)
          , C = Math.exp(-x);
        return vc - S / w * C
    }
    ,
    h = g => {
        const x = g * f * n
          , S = x * i + i
          , w = Math.pow(f, 2) * Math.pow(g, 2) * n
          , C = Math.exp(-x)
          , D = Mc(Math.pow(g, 2), f);
        return (-c(g) + vc > 0 ? -1 : 1) * ((S - w) * C) / D
    }
    ) : (c = g => {
        const v = Math.exp(-g * n)
          , x = (g - i) * n + 1;
        return -vc + v * x
    }
    ,
    h = g => {
        const v = Math.exp(-g * n)
          , x = (i - g) * (n * n);
        return v * x
    }
    );
    const m = 5 / n
      , p = e1(c, h, m);
    if (n = Ua(n),
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
            damping: f * 2 * Math.sqrt(o * g),
            duration: n
        }
    }
}
const Wb = 12;
function e1(n, l, i) {
    let o = i;
    for (let c = 1; c < Wb; c++)
        o = o - n(o) / l(o);
    return o
}
function Mc(n, l) {
    return n * Math.sqrt(1 - l * l)
}
const t1 = ["duration", "bounce"]
  , a1 = ["stiffness", "damping", "mass"];
function Mp(n, l) {
    return l.some(i => n[i] !== void 0)
}
function n1(n) {
    let l = {
        velocity: rt.velocity,
        stiffness: rt.stiffness,
        damping: rt.damping,
        mass: rt.mass,
        isResolvedFromDuration: !1,
        ...n
    };
    if (!Mp(n, a1) && Mp(n, t1))
        if (n.visualDuration) {
            const i = n.visualDuration
              , o = 2 * Math.PI / (i * 1.2)
              , c = o * o
              , h = 2 * nn(.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(c);
            l = {
                ...l,
                mass: rt.mass,
                stiffness: c,
                damping: h
            }
        } else {
            const i = $b(n);
            l = {
                ...l,
                ...i,
                mass: rt.mass
            },
            l.isResolvedFromDuration = !0
        }
    return l
}
function Ko(n=rt.visualDuration, l=rt.bounce) {
    const i = typeof n != "object" ? {
        visualDuration: n,
        keyframes: [0, 1],
        bounce: l
    } : n;
    let {restSpeed: o, restDelta: c} = i;
    const h = i.keyframes[0]
      , f = i.keyframes[i.keyframes.length - 1]
      , m = {
        done: !1,
        value: h
    }
      , {stiffness: p, damping: g, mass: v, duration: x, velocity: S, isResolvedFromDuration: w} = n1({
        ...i,
        velocity: -Ba(i.velocity || 0)
    })
      , C = S || 0
      , D = g / (2 * Math.sqrt(p * v))
      , M = f - h
      , U = Ba(Math.sqrt(p / v))
      , P = Math.abs(M) < 5;
    o || (o = P ? rt.restSpeed.granular : rt.restSpeed.default),
    c || (c = P ? rt.restDelta.granular : rt.restDelta.default);
    let B;
    if (D < 1) {
        const R = Mc(U, D);
        B = Z => {
            const W = Math.exp(-D * U * Z);
            return f - W * ((C + D * U * M) / R * Math.sin(R * Z) + M * Math.cos(R * Z))
        }
    } else if (D === 1)
        B = R => f - Math.exp(-U * R) * (M + (C + U * M) * R);
    else {
        const R = U * Math.sqrt(D * D - 1);
        B = Z => {
            const W = Math.exp(-D * U * Z)
              , Q = Math.min(R * Z, 300);
            return f - W * ((C + D * U * M) * Math.sinh(Q) + R * M * Math.cosh(Q)) / R
        }
    }
    const G = {
        calculatedDuration: w && x || null,
        next: R => {
            const Z = B(R);
            if (w)
                m.done = R >= x;
            else {
                let W = R === 0 ? C : 0;
                D < 1 && (W = R === 0 ? Ua(C) : by(B, R, Z));
                const Q = Math.abs(W) <= o
                  , ie = Math.abs(f - Z) <= c;
                m.done = Q && ie
            }
            return m.value = m.done ? f : Z,
            m
        }
        ,
        toString: () => {
            const R = Math.min(df(G), Xo)
              , Z = xy(W => G.next(R * W).value, R, 30);
            return R + "ms " + Z
        }
        ,
        toTransition: () => {}
    };
    return G
}
Ko.applyToOptions = n => {
    const l = Jb(n, 100, Ko);
    return n.ease = l.ease,
    n.duration = Ua(l.duration),
    n.type = "keyframes",
    n
}
;
function _c({keyframes: n, velocity: l=0, power: i=.8, timeConstant: o=325, bounceDamping: c=10, bounceStiffness: h=500, modifyTarget: f, min: m, max: p, restDelta: g=.5, restSpeed: v}) {
    const x = n[0]
      , S = {
        done: !1,
        value: x
    }
      , w = Q => m !== void 0 && Q < m || p !== void 0 && Q > p
      , C = Q => m === void 0 ? p : p === void 0 || Math.abs(m - Q) < Math.abs(p - Q) ? m : p;
    let D = i * l;
    const M = x + D
      , U = f === void 0 ? M : f(M);
    U !== M && (D = U - x);
    const P = Q => -D * Math.exp(-Q / o)
      , B = Q => U + P(Q)
      , G = Q => {
        const ie = P(Q)
          , fe = B(Q);
        S.done = Math.abs(ie) <= g,
        S.value = S.done ? U : fe
    }
    ;
    let R, Z;
    const W = Q => {
        w(S.value) && (R = Q,
        Z = Ko({
            keyframes: [S.value, C(S.value)],
            velocity: by(B, Q, S.value),
            damping: c,
            stiffness: h,
            restDelta: g,
            restSpeed: v
        }))
    }
    ;
    return W(0),
    {
        calculatedDuration: null,
        next: Q => {
            let ie = !1;
            return !Z && R === void 0 && (ie = !0,
            G(Q),
            W(Q)),
            R !== void 0 && Q >= R ? Z.next(Q - R) : (!ie && G(Q),
            S)
        }
    }
}
function l1(n, l, i) {
    const o = []
      , c = i || ln.mix || vy
      , h = n.length - 1;
    for (let f = 0; f < h; f++) {
        let m = c(n[f], n[f + 1]);
        if (l) {
            const p = Array.isArray(l) ? l[f] || ba : l;
            m = ps(p, m)
        }
        o.push(m)
    }
    return o
}
function i1(n, l, {clamp: i=!0, ease: o, mixer: c}={}) {
    const h = n.length;
    if (tf(h === l.length),
    h === 1)
        return () => l[0];
    if (h === 2 && l[0] === l[1])
        return () => l[1];
    const f = n[0] === n[1];
    n[0] > n[h - 1] && (n = [...n].reverse(),
    l = [...l].reverse());
    const m = l1(l, o, c)
      , p = m.length
      , g = v => {
        if (f && v < n[0])
            return l[0];
        let x = 0;
        if (p > 1)
            for (; x < n.length - 2 && !(v < n[x + 1]); x++)
                ;
        const S = ss(n[x], n[x + 1], v);
        return m[x](S)
    }
    ;
    return i ? v => g(nn(n[0], n[h - 1], v)) : g
}
function s1(n, l) {
    const i = n[n.length - 1];
    for (let o = 1; o <= l; o++) {
        const c = ss(0, l, o);
        n.push(nt(i, 1, c))
    }
}
function o1(n) {
    const l = [0];
    return s1(l, n.length - 1),
    l
}
function r1(n, l) {
    return n.map(i => i * l)
}
function u1(n, l) {
    return n.map( () => l || ry).splice(0, n.length - 1)
}
function as({duration: n=300, keyframes: l, times: i, ease: o="easeInOut"}) {
    const c = bb(o) ? o.map(wp) : wp(o)
      , h = {
        done: !1,
        value: l[0]
    }
      , f = r1(i && i.length === l.length ? i : o1(l), n)
      , m = i1(f, l, {
        ease: Array.isArray(c) ? c : u1(l, c)
    });
    return {
        calculatedDuration: n,
        next: p => (h.value = m(p),
        h.done = p >= n,
        h)
    }
}
const c1 = n => n !== null;
function hf(n, {repeat: l, repeatType: i="loop"}, o, c=1) {
    const h = n.filter(c1)
      , m = c < 0 || l && i !== "loop" && l % 2 === 1 ? 0 : h.length - 1;
    return !m || o === void 0 ? h[m] : o
}
const f1 = {
    decay: _c,
    inertia: _c,
    tween: as,
    keyframes: as,
    spring: Ko
};
function Sy(n) {
    typeof n.type == "string" && (n.type = f1[n.type])
}
class mf {
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
const d1 = n => n / 100;
class pf extends mf {
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
            i && i.updatedAt !== Ft.now() && this.tick(Ft.now()),
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
        Sy(l);
        const {type: i=as, repeat: o=0, repeatDelay: c=0, repeatType: h, velocity: f=0} = l;
        let {keyframes: m} = l;
        const p = i || as;
        p !== as && typeof m[0] != "number" && (this.mixKeyframes = ps(d1, vy(m[0], m[1])),
        m = [0, 100]);
        const g = p({
            ...l,
            keyframes: m
        });
        h === "mirror" && (this.mirroredGenerator = p({
            ...l,
            keyframes: [...m].reverse(),
            velocity: -f
        })),
        g.calculatedDuration === null && (g.calculatedDuration = df(g));
        const {calculatedDuration: v} = g;
        this.calculatedDuration = v,
        this.resolvedDuration = v + c,
        this.totalDuration = this.resolvedDuration * (o + 1) - c,
        this.generator = g
    }
    updateTime(l) {
        const i = Math.round(l - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = i
    }
    tick(l, i=!1) {
        const {generator: o, totalDuration: c, mixKeyframes: h, mirroredGenerator: f, resolvedDuration: m, calculatedDuration: p} = this;
        if (this.startTime === null)
            return o.next(0);
        const {delay: g=0, keyframes: v, repeat: x, repeatType: S, repeatDelay: w, type: C, onUpdate: D, finalKeyframe: M} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - c / this.speed, this.startTime)),
        i ? this.currentTime = l : this.updateTime(l);
        const U = this.currentTime - g * (this.playbackSpeed >= 0 ? 1 : -1)
          , P = this.playbackSpeed >= 0 ? U < 0 : U > c;
        this.currentTime = Math.max(U, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = c);
        let B = this.currentTime
          , G = o;
        if (x) {
            const Q = Math.min(this.currentTime, c) / m;
            let ie = Math.floor(Q)
              , fe = Q % 1;
            !fe && Q >= 1 && (fe = 1),
            fe === 1 && ie--,
            ie = Math.min(ie, x + 1),
            !!(ie % 2) && (S === "reverse" ? (fe = 1 - fe,
            w && (fe -= w / m)) : S === "mirror" && (G = f)),
            B = nn(0, 1, fe) * m
        }
        const R = P ? {
            done: !1,
            value: v[0]
        } : G.next(B);
        h && (R.value = h(R.value));
        let {done: Z} = R;
        !P && p !== null && (Z = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        const W = this.holdTime === null && (this.state === "finished" || this.state === "running" && Z);
        return W && C !== _c && (R.value = hf(v, this.options, M, this.speed)),
        D && D(R.value),
        W && this.finish(),
        R
    }
    then(l, i) {
        return this.finished.then(l, i)
    }
    get duration() {
        return Ba(this.calculatedDuration)
    }
    get time() {
        return Ba(this.currentTime)
    }
    set time(l) {
        var i;
        l = Ua(l),
        this.currentTime = l,
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = l : this.driver && (this.startTime = this.driver.now() - l / this.playbackSpeed),
        (i = this.driver) == null || i.start(!1)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(l) {
        this.updateTime(Ft.now());
        const i = this.playbackSpeed !== l;
        this.playbackSpeed = l,
        i && (this.time = Ba(this.currentTime))
    }
    play() {
        var c, h;
        if (this.isStopped)
            return;
        const {driver: l=Fb, startTime: i} = this.options;
        this.driver || (this.driver = l(f => this.tick(f))),
        (h = (c = this.options).onPlay) == null || h.call(c);
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
        this.updateTime(Ft.now()),
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
function h1(n) {
    for (let l = 1; l < n.length; l++)
        n[l] ?? (n[l] = n[l - 1])
}
const tl = n => n * 180 / Math.PI
  , Oc = n => {
    const l = tl(Math.atan2(n[1], n[0]));
    return Rc(l)
}
  , m1 = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: n => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
    rotate: Oc,
    rotateZ: Oc,
    skewX: n => tl(Math.atan(n[1])),
    skewY: n => tl(Math.atan(n[2])),
    skew: n => (Math.abs(n[1]) + Math.abs(n[2])) / 2
}
  , Rc = n => (n = n % 360,
n < 0 && (n += 360),
n)
  , _p = Oc
  , Op = n => Math.sqrt(n[0] * n[0] + n[1] * n[1])
  , Rp = n => Math.sqrt(n[4] * n[4] + n[5] * n[5])
  , p1 = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Op,
    scaleY: Rp,
    scale: n => (Op(n) + Rp(n)) / 2,
    rotateX: n => Rc(tl(Math.atan2(n[6], n[5]))),
    rotateY: n => Rc(tl(Math.atan2(-n[2], n[0]))),
    rotateZ: _p,
    rotate: _p,
    skewX: n => tl(Math.atan(n[4])),
    skewY: n => tl(Math.atan(n[1])),
    skew: n => (Math.abs(n[1]) + Math.abs(n[4])) / 2
};
function Vc(n) {
    return n.includes("scale") ? 1 : 0
}
function zc(n, l) {
    if (!n || n === "none")
        return Vc(l);
    const i = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let o, c;
    if (i)
        o = p1,
        c = i;
    else {
        const m = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        o = m1,
        c = m
    }
    if (!c)
        return Vc(l);
    const h = o[l]
      , f = c[1].split(",").map(y1);
    return typeof h == "function" ? h(f) : f[h]
}
const g1 = (n, l) => {
    const {transform: i="none"} = getComputedStyle(n);
    return zc(i, l)
}
;
function y1(n) {
    return parseFloat(n.trim())
}
const Jl = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , Il = new Set(Jl)
  , Vp = n => n === Fl || n === xe
  , v1 = new Set(["x", "y", "z"])
  , x1 = Jl.filter(n => !v1.has(n));
function b1(n) {
    const l = [];
    return x1.forEach(i => {
        const o = n.getValue(i);
        o !== void 0 && (l.push([i, o.get()]),
        o.set(i.startsWith("scale") ? 1 : 0))
    }
    ),
    l
}
const al = {
    width: ({x: n}, {paddingLeft: l="0", paddingRight: i="0"}) => n.max - n.min - parseFloat(l) - parseFloat(i),
    height: ({y: n}, {paddingTop: l="0", paddingBottom: i="0"}) => n.max - n.min - parseFloat(l) - parseFloat(i),
    top: (n, {top: l}) => parseFloat(l),
    left: (n, {left: l}) => parseFloat(l),
    bottom: ({y: n}, {top: l}) => parseFloat(l) + (n.max - n.min),
    right: ({x: n}, {left: l}) => parseFloat(l) + (n.max - n.min),
    x: (n, {transform: l}) => zc(l, "x"),
    y: (n, {transform: l}) => zc(l, "y")
};
al.translateX = al.x;
al.translateY = al.y;
const nl = new Set;
let Uc = !1
  , Bc = !1
  , Lc = !1;
function Ty() {
    if (Bc) {
        const n = Array.from(nl).filter(o => o.needsMeasurement)
          , l = new Set(n.map(o => o.element))
          , i = new Map;
        l.forEach(o => {
            const c = b1(o);
            c.length && (i.set(o, c),
            o.render())
        }
        ),
        n.forEach(o => o.measureInitialState()),
        l.forEach(o => {
            o.render();
            const c = i.get(o);
            c && c.forEach( ([h,f]) => {
                var m;
                (m = o.getValue(h)) == null || m.set(f)
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
    Bc = !1,
    Uc = !1,
    nl.forEach(n => n.complete(Lc)),
    nl.clear()
}
function jy() {
    nl.forEach(n => {
        n.readKeyframes(),
        n.needsMeasurement && (Bc = !0)
    }
    )
}
function S1() {
    Lc = !0,
    jy(),
    Ty(),
    Lc = !1
}
class gf {
    constructor(l, i, o, c, h, f=!1) {
        this.state = "pending",
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.unresolvedKeyframes = [...l],
        this.onComplete = i,
        this.name = o,
        this.motionValue = c,
        this.element = h,
        this.isAsync = f
    }
    scheduleResolve() {
        this.state = "scheduled",
        this.isAsync ? (nl.add(this),
        Uc || (Uc = !0,
        lt.read(jy),
        lt.resolveKeyframes(Ty))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: l, name: i, element: o, motionValue: c} = this;
        if (l[0] === null) {
            const h = c == null ? void 0 : c.get()
              , f = l[l.length - 1];
            if (h !== void 0)
                l[0] = h;
            else if (o && i) {
                const m = o.readValue(i, f);
                m != null && (l[0] = m)
            }
            l[0] === void 0 && (l[0] = f),
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
        nl.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (nl.delete(this),
        this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const T1 = n => n.startsWith("--");
function j1(n, l, i) {
    T1(l) ? n.style.setProperty(l, i) : n.style[l] = i
}
const w1 = af( () => window.ScrollTimeline !== void 0)
  , A1 = {};
function N1(n, l) {
    const i = af(n);
    return () => A1[l] ?? i()
}
const wy = N1( () => {
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
  , Wi = ([n,l,i,o]) => `cubic-bezier(${n}, ${l}, ${i}, ${o})`
  , zp = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Wi([0, .65, .55, 1]),
    circOut: Wi([.55, 0, 1, .45]),
    backIn: Wi([.31, .01, .66, -.59]),
    backOut: Wi([.33, 1.53, .69, .99])
};
function Ay(n, l) {
    if (n)
        return typeof n == "function" ? wy() ? xy(n, l) : "ease-out" : uy(n) ? Wi(n) : Array.isArray(n) ? n.map(i => Ay(i, l) || zp.easeOut) : zp[n]
}
function E1(n, l, i, {delay: o=0, duration: c=300, repeat: h=0, repeatType: f="loop", ease: m="easeOut", times: p}={}, g=void 0) {
    const v = {
        [l]: i
    };
    p && (v.offset = p);
    const x = Ay(m, c);
    Array.isArray(x) && (v.easing = x);
    const S = {
        delay: o,
        duration: c,
        easing: Array.isArray(x) ? "linear" : x,
        fill: "both",
        iterations: h + 1,
        direction: f === "reverse" ? "alternate" : "normal"
    };
    return g && (S.pseudoElement = g),
    n.animate(v, S)
}
function Ny(n) {
    return typeof n == "function" && "applyToOptions"in n
}
function C1({type: n, ...l}) {
    return Ny(n) && wy() ? n.applyToOptions(l) : (l.duration ?? (l.duration = 300),
    l.ease ?? (l.ease = "easeOut"),
    l)
}
class D1 extends mf {
    constructor(l) {
        if (super(),
        this.finishedTime = null,
        this.isStopped = !1,
        !l)
            return;
        const {element: i, name: o, keyframes: c, pseudoElement: h, allowFlatten: f=!1, finalKeyframe: m, onComplete: p} = l;
        this.isPseudoElement = !!h,
        this.allowFlatten = f,
        this.options = l,
        tf(typeof l.type != "string");
        const g = C1(l);
        this.animation = E1(i, o, c, g, h),
        g.autoplay === !1 && this.animation.pause(),
        this.animation.onfinish = () => {
            if (this.finishedTime = this.time,
            !h) {
                const v = hf(c, this.options, m, this.speed);
                this.updateMotionValue ? this.updateMotionValue(v) : j1(i, o, v),
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
        return Ba(Number(l))
    }
    get time() {
        return Ba(Number(this.animation.currentTime) || 0)
    }
    set time(l) {
        this.finishedTime = null,
        this.animation.currentTime = Ua(l)
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
        l && w1() ? (this.animation.timeline = l,
        ba) : i(this)
    }
}
const Ey = {
    anticipate: iy,
    backInOut: ly,
    circInOut: oy
};
function M1(n) {
    return n in Ey
}
function _1(n) {
    typeof n.ease == "string" && M1(n.ease) && (n.ease = Ey[n.ease])
}
const Up = 10;
class O1 extends D1 {
    constructor(l) {
        _1(l),
        Sy(l),
        super(l),
        l.startTime && (this.startTime = l.startTime),
        this.options = l
    }
    updateMotionValue(l) {
        const {motionValue: i, onUpdate: o, onComplete: c, element: h, ...f} = this.options;
        if (!i)
            return;
        if (l !== void 0) {
            i.set(l);
            return
        }
        const m = new pf({
            ...f,
            autoplay: !1
        })
          , p = Ua(this.finishedTime ?? this.time);
        i.setWithVelocity(m.sample(p - Up).value, m.sample(p).value, Up),
        m.stop()
    }
}
const Bp = (n, l) => l === "zIndex" ? !1 : !!(typeof n == "number" || Array.isArray(n) || typeof n == "string" && (On.test(n) || n === "0") && !n.startsWith("url("));
function R1(n) {
    const l = n[0];
    if (n.length === 1)
        return !0;
    for (let i = 0; i < n.length; i++)
        if (n[i] !== l)
            return !0
}
function V1(n, l, i, o) {
    const c = n[0];
    if (c === null)
        return !1;
    if (l === "display" || l === "visibility")
        return !0;
    const h = n[n.length - 1]
      , f = Bp(c, l)
      , m = Bp(h, l);
    return !f || !m ? !1 : R1(n) || (i === "spring" || Ny(i)) && o
}
function yf(n) {
    return Ig(n) && "offsetHeight"in n
}
const z1 = new Set(["opacity", "clipPath", "filter", "transform"])
  , U1 = af( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
function B1(n) {
    var g;
    const {motionValue: l, name: i, repeatDelay: o, repeatType: c, damping: h, type: f} = n;
    if (!yf((g = l == null ? void 0 : l.owner) == null ? void 0 : g.current))
        return !1;
    const {onUpdate: m, transformTemplate: p} = l.owner.getProps();
    return U1() && i && z1.has(i) && (i !== "transform" || !p) && !m && !o && c !== "mirror" && h !== 0 && f !== "inertia"
}
const L1 = 40;
class k1 extends mf {
    constructor({autoplay: l=!0, delay: i=0, type: o="keyframes", repeat: c=0, repeatDelay: h=0, repeatType: f="loop", keyframes: m, name: p, motionValue: g, element: v, ...x}) {
        var C;
        super(),
        this.stop = () => {
            var D, M;
            this._animation && (this._animation.stop(),
            (D = this.stopTimeline) == null || D.call(this)),
            (M = this.keyframeResolver) == null || M.cancel()
        }
        ,
        this.createdAt = Ft.now();
        const S = {
            autoplay: l,
            delay: i,
            type: o,
            repeat: c,
            repeatDelay: h,
            repeatType: f,
            name: p,
            motionValue: g,
            element: v,
            ...x
        }
          , w = (v == null ? void 0 : v.KeyframeResolver) || gf;
        this.keyframeResolver = new w(m, (D, M, U) => this.onKeyframesResolved(D, M, S, !U),p,g,v),
        (C = this.keyframeResolver) == null || C.scheduleResolve()
    }
    onKeyframesResolved(l, i, o, c) {
        this.keyframeResolver = void 0;
        const {name: h, type: f, velocity: m, delay: p, isHandoff: g, onUpdate: v} = o;
        this.resolvedAt = Ft.now(),
        V1(l, h, f, m) || ((ln.instantAnimations || !p) && (v == null || v(hf(l, o, i))),
        l[0] = l[l.length - 1],
        o.duration = 0,
        o.repeat = 0);
        const S = {
            startTime: c ? this.resolvedAt ? this.resolvedAt - this.createdAt > L1 ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: i,
            ...o,
            keyframes: l
        }
          , w = !g && B1(S) ? new O1({
            ...S,
            element: S.motionValue.owner.current
        }) : new pf(S);
        w.finished.then( () => this.notifyFinished()).catch(ba),
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
    const [,i,o,c] = l;
    return [`--${i ?? o}`, c]
}
function Cy(n, l, i=1) {
    const [o,c] = P1(n);
    if (!o)
        return;
    const h = window.getComputedStyle(l).getPropertyValue(o);
    if (h) {
        const f = h.trim();
        return Jg(f) ? parseFloat(f) : f
    }
    return rf(c) ? Cy(c, l, i + 1) : c
}
function vf(n, l) {
    return (n == null ? void 0 : n[l]) ?? (n == null ? void 0 : n.default) ?? n
}
const Dy = new Set(["width", "height", "top", "left", "right", "bottom", ...Jl])
  , q1 = {
    test: n => n === "auto",
    parse: n => n
}
  , My = n => l => l.test(n)
  , _y = [Fl, xe, La, Dn, Rb, Ob, q1]
  , Lp = n => _y.find(My(n));
function Y1(n) {
    return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || $g(n) : !0
}
const G1 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function X1(n) {
    const [l,i] = n.slice(0, -1).split("(");
    if (l === "drop-shadow")
        return n;
    const [o] = i.match(uf) || [];
    if (!o)
        return n;
    const c = i.replace(o, "");
    let h = G1.has(l) ? 1 : 0;
    return o !== i && (h *= 100),
    l + "(" + h + c + ")"
}
const K1 = /\b([a-z-]*)\(.*?\)/gu
  , kc = {
    ...On,
    getAnimatableNone: n => {
        const l = n.match(K1);
        return l ? l.map(X1).join(" ") : n
    }
}
  , kp = {
    ...Fl,
    transform: Math.round
}
  , Z1 = {
    rotate: Dn,
    rotateX: Dn,
    rotateY: Dn,
    rotateZ: Dn,
    scale: Bo,
    scaleX: Bo,
    scaleY: Bo,
    scaleZ: Bo,
    skew: Dn,
    skewX: Dn,
    skewY: Dn,
    distance: xe,
    translateX: xe,
    translateY: xe,
    translateZ: xe,
    x: xe,
    y: xe,
    z: xe,
    perspective: xe,
    transformPerspective: xe,
    opacity: os,
    originX: Np,
    originY: Np,
    originZ: xe
}
  , xf = {
    borderWidth: xe,
    borderTopWidth: xe,
    borderRightWidth: xe,
    borderBottomWidth: xe,
    borderLeftWidth: xe,
    borderRadius: xe,
    radius: xe,
    borderTopLeftRadius: xe,
    borderTopRightRadius: xe,
    borderBottomRightRadius: xe,
    borderBottomLeftRadius: xe,
    width: xe,
    maxWidth: xe,
    height: xe,
    maxHeight: xe,
    top: xe,
    right: xe,
    bottom: xe,
    left: xe,
    padding: xe,
    paddingTop: xe,
    paddingRight: xe,
    paddingBottom: xe,
    paddingLeft: xe,
    margin: xe,
    marginTop: xe,
    marginRight: xe,
    marginBottom: xe,
    marginLeft: xe,
    backgroundPositionX: xe,
    backgroundPositionY: xe,
    ...Z1,
    zIndex: kp,
    fillOpacity: os,
    strokeOpacity: os,
    numOctaves: kp
}
  , Q1 = {
    ...xf,
    color: bt,
    backgroundColor: bt,
    outlineColor: bt,
    fill: bt,
    stroke: bt,
    borderColor: bt,
    borderTopColor: bt,
    borderRightColor: bt,
    borderBottomColor: bt,
    borderLeftColor: bt,
    filter: kc,
    WebkitFilter: kc
}
  , Oy = n => Q1[n];
function Ry(n, l) {
    let i = Oy(n);
    return i !== kc && (i = On),
    i.getAnimatableNone ? i.getAnimatableNone(l) : void 0
}
const F1 = new Set(["auto", "none", "0"]);
function J1(n, l, i) {
    let o = 0, c;
    for (; o < n.length && !c; ) {
        const h = n[o];
        typeof h == "string" && !F1.has(h) && rs(h).values.length && (c = n[o]),
        o++
    }
    if (c && i)
        for (const h of l)
            n[h] = Ry(i, c)
}
class I1 extends gf {
    constructor(l, i, o, c, h) {
        super(l, i, o, c, h, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: l, element: i, name: o} = this;
        if (!i || !i.current)
            return;
        super.readKeyframes();
        for (let p = 0; p < l.length; p++) {
            let g = l[p];
            if (typeof g == "string" && (g = g.trim(),
            rf(g))) {
                const v = Cy(g, i.current);
                v !== void 0 && (l[p] = v),
                p === l.length - 1 && (this.finalKeyframe = g)
            }
        }
        if (this.resolveNoneKeyframes(),
        !Dy.has(o) || l.length !== 2)
            return;
        const [c,h] = l
          , f = Lp(c)
          , m = Lp(h);
        if (f !== m)
            if (Vp(f) && Vp(m))
                for (let p = 0; p < l.length; p++) {
                    const g = l[p];
                    typeof g == "string" && (l[p] = parseFloat(g))
                }
            else
                al[o] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: l, name: i} = this
          , o = [];
        for (let c = 0; c < l.length; c++)
            (l[c] === null || Y1(l[c])) && o.push(c);
        o.length && J1(l, o, i)
    }
    measureInitialState() {
        const {element: l, unresolvedKeyframes: i, name: o} = this;
        if (!l || !l.current)
            return;
        o === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = al[o](l.measureViewportBox(), window.getComputedStyle(l.current)),
        i[0] = this.measuredOrigin;
        const c = i[i.length - 1];
        c !== void 0 && l.getValue(o, c).jump(c, !1)
    }
    measureEndState() {
        var m;
        const {element: l, name: i, unresolvedKeyframes: o} = this;
        if (!l || !l.current)
            return;
        const c = l.getValue(i);
        c && c.jump(this.measuredOrigin, !1);
        const h = o.length - 1
          , f = o[h];
        o[h] = al[i](l.measureViewportBox(), window.getComputedStyle(l.current)),
        f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
        (m = this.removedTransforms) != null && m.length && this.removedTransforms.forEach( ([p,g]) => {
            l.getValue(p).set(g)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
function $1(n, l, i) {
    if (n instanceof EventTarget)
        return [n];
    if (typeof n == "string") {
        let o = document;
        const c = (i == null ? void 0 : i[n]) ?? o.querySelectorAll(n);
        return c ? Array.from(c) : []
    }
    return Array.from(n)
}
const Vy = (n, l) => l && typeof n == "number" ? l.transform(n) : n
  , Hp = 30
  , W1 = n => !isNaN(parseFloat(n));
class e2 {
    constructor(l, i={}) {
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (o, c=!0) => {
            var f, m;
            const h = Ft.now();
            if (this.updatedAt !== h && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(o),
            this.current !== this.prev && ((f = this.events.change) == null || f.notify(this.current),
            this.dependents))
                for (const p of this.dependents)
                    p.dirty();
            c && ((m = this.events.renderRequest) == null || m.notify(this.current))
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(l),
        this.owner = i.owner
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
    on(l, i) {
        this.events[l] || (this.events[l] = new nf);
        const o = this.events[l].add(i);
        return l === "change" ? () => {
            o(),
            lt.read( () => {
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
        const l = Ft.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > Hp)
            return 0;
        const i = Math.min(this.updatedAt - this.prevUpdatedAt, Hp);
        return Wg(parseFloat(this.current) - parseFloat(this.prevFrameValue), i)
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
function Zl(n, l) {
    return new e2(n,l)
}
const {schedule: bf} = cy(queueMicrotask, !1)
  , Ea = {
    x: !1,
    y: !1
};
function zy() {
    return Ea.x || Ea.y
}
function t2(n) {
    return n === "x" || n === "y" ? Ea[n] ? null : (Ea[n] = !0,
    () => {
        Ea[n] = !1
    }
    ) : Ea.x || Ea.y ? null : (Ea.x = Ea.y = !0,
    () => {
        Ea.x = Ea.y = !1
    }
    )
}
function Uy(n, l) {
    const i = $1(n)
      , o = new AbortController
      , c = {
        passive: !0,
        ...l,
        signal: o.signal
    };
    return [i, c, () => o.abort()]
}
function Pp(n) {
    return !(n.pointerType === "touch" || zy())
}
function a2(n, l, i={}) {
    const [o,c,h] = Uy(n, i)
      , f = m => {
        if (!Pp(m))
            return;
        const {target: p} = m
          , g = l(p, m);
        if (typeof g != "function" || !p)
            return;
        const v = x => {
            Pp(x) && (g(x),
            p.removeEventListener("pointerleave", v))
        }
        ;
        p.addEventListener("pointerleave", v, c)
    }
    ;
    return o.forEach(m => {
        m.addEventListener("pointerenter", f, c)
    }
    ),
    h
}
const By = (n, l) => l ? n === l ? !0 : By(n, l.parentElement) : !1
  , Sf = n => n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1
  , n2 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function l2(n) {
    return n2.has(n.tagName) || n.tabIndex !== -1
}
const Po = new WeakSet;
function qp(n) {
    return l => {
        l.key === "Enter" && n(l)
    }
}
function xc(n, l) {
    n.dispatchEvent(new PointerEvent("pointer" + l,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const i2 = (n, l) => {
    const i = n.currentTarget;
    if (!i)
        return;
    const o = qp( () => {
        if (Po.has(i))
            return;
        xc(i, "down");
        const c = qp( () => {
            xc(i, "up")
        }
        )
          , h = () => xc(i, "cancel");
        i.addEventListener("keyup", c, l),
        i.addEventListener("blur", h, l)
    }
    );
    i.addEventListener("keydown", o, l),
    i.addEventListener("blur", () => i.removeEventListener("keydown", o), l)
}
;
function Yp(n) {
    return Sf(n) && !zy()
}
function s2(n, l, i={}) {
    const [o,c,h] = Uy(n, i)
      , f = m => {
        const p = m.currentTarget;
        if (!Yp(m))
            return;
        Po.add(p);
        const g = l(p, m)
          , v = (w, C) => {
            window.removeEventListener("pointerup", x),
            window.removeEventListener("pointercancel", S),
            Po.has(p) && Po.delete(p),
            Yp(w) && typeof g == "function" && g(w, {
                success: C
            })
        }
          , x = w => {
            v(w, p === window || p === document || i.useGlobalTarget || By(p, w.target))
        }
          , S = w => {
            v(w, !1)
        }
        ;
        window.addEventListener("pointerup", x, c),
        window.addEventListener("pointercancel", S, c)
    }
    ;
    return o.forEach(m => {
        (i.useGlobalTarget ? window : m).addEventListener("pointerdown", f, c),
        yf(m) && (m.addEventListener("focus", g => i2(g, c)),
        !l2(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0))
    }
    ),
    h
}
function Ly(n) {
    return Ig(n) && "ownerSVGElement"in n
}
function o2(n) {
    return Ly(n) && n.tagName === "svg"
}
const kt = n => !!(n && n.getVelocity)
  , r2 = [..._y, bt, On]
  , u2 = n => r2.find(My(n))
  , Tf = T.createContext({
    transformPagePoint: n => n,
    isStatic: !1,
    reducedMotion: "never"
});
class c2 extends T.Component {
    getSnapshotBeforeUpdate(l) {
        const i = this.props.childRef.current;
        if (i && l.isPresent && !this.props.isPresent) {
            const o = i.offsetParent
              , c = yf(o) && o.offsetWidth || 0
              , h = this.props.sizeRef.current;
            h.height = i.offsetHeight || 0,
            h.width = i.offsetWidth || 0,
            h.top = i.offsetTop,
            h.left = i.offsetLeft,
            h.right = c - h.width - h.left
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function f2({children: n, isPresent: l, anchorX: i}) {
    const o = T.useId()
      , c = T.useRef(null)
      , h = T.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0
    })
      , {nonce: f} = T.useContext(Tf);
    return T.useInsertionEffect( () => {
        const {width: m, height: p, top: g, left: v, right: x} = h.current;
        if (l || !c.current || !m || !p)
            return;
        const S = i === "left" ? `left: ${v}` : `right: ${x}`;
        c.current.dataset.motionPopId = o;
        const w = document.createElement("style");
        return f && (w.nonce = f),
        document.head.appendChild(w),
        w.sheet && w.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${p}px !important;
            ${S}px !important;
            top: ${g}px !important;
          }
        `),
        () => {
            document.head.contains(w) && document.head.removeChild(w)
        }
    }
    , [l]),
    d.jsx(c2, {
        isPresent: l,
        childRef: c,
        sizeRef: h,
        children: T.cloneElement(n, {
            ref: c
        })
    })
}
const d2 = ({children: n, initial: l, isPresent: i, onExitComplete: o, custom: c, presenceAffectsLayout: h, mode: f, anchorX: m}) => {
    const p = Ic(h2)
      , g = T.useId();
    let v = !0
      , x = T.useMemo( () => (v = !1,
    {
        id: g,
        initial: l,
        isPresent: i,
        custom: c,
        onExitComplete: S => {
            p.set(S, !0);
            for (const w of p.values())
                if (!w)
                    return;
            o && o()
        }
        ,
        register: S => (p.set(S, !1),
        () => p.delete(S))
    }), [i, p, o]);
    return h && v && (x = {
        ...x
    }),
    T.useMemo( () => {
        p.forEach( (S, w) => p.set(w, !1))
    }
    , [i]),
    T.useEffect( () => {
        !i && !p.size && o && o()
    }
    , [i]),
    f === "popLayout" && (n = d.jsx(f2, {
        isPresent: i,
        anchorX: m,
        children: n
    })),
    d.jsx(Jo.Provider, {
        value: x,
        children: n
    })
}
;
function h2() {
    return new Map
}
function ky(n=!0) {
    const l = T.useContext(Jo);
    if (l === null)
        return [!0, null];
    const {isPresent: i, onExitComplete: o, register: c} = l
      , h = T.useId();
    T.useEffect( () => {
        if (n)
            return c(h)
    }
    , [n]);
    const f = T.useCallback( () => n && o && o(h), [h, o, n]);
    return !i && o ? [!1, f] : [!0]
}
const Lo = n => n.key || "";
function Gp(n) {
    const l = [];
    return T.Children.forEach(n, i => {
        T.isValidElement(i) && l.push(i)
    }
    ),
    l
}
const Hy = ({children: n, custom: l, initial: i=!0, onExitComplete: o, presenceAffectsLayout: c=!0, mode: h="sync", propagate: f=!1, anchorX: m="left"}) => {
    const [p,g] = ky(f)
      , v = T.useMemo( () => Gp(n), [n])
      , x = f && !p ? [] : v.map(Lo)
      , S = T.useRef(!0)
      , w = T.useRef(v)
      , C = Ic( () => new Map)
      , [D,M] = T.useState(v)
      , [U,P] = T.useState(v);
    Fg( () => {
        S.current = !1,
        w.current = v;
        for (let R = 0; R < U.length; R++) {
            const Z = Lo(U[R]);
            x.includes(Z) ? C.delete(Z) : C.get(Z) !== !0 && C.set(Z, !1)
        }
    }
    , [U, x.length, x.join("-")]);
    const B = [];
    if (v !== D) {
        let R = [...v];
        for (let Z = 0; Z < U.length; Z++) {
            const W = U[Z]
              , Q = Lo(W);
            x.includes(Q) || (R.splice(Z, 0, W),
            B.push(W))
        }
        return h === "wait" && B.length && (R = B),
        P(Gp(R)),
        M(v),
        null
    }
    const {forceRender: G} = T.useContext(Jc);
    return d.jsx(d.Fragment, {
        children: U.map(R => {
            const Z = Lo(R)
              , W = f && !p ? !1 : v === U || x.includes(Z)
              , Q = () => {
                if (C.has(Z))
                    C.set(Z, !0);
                else
                    return;
                let ie = !0;
                C.forEach(fe => {
                    fe || (ie = !1)
                }
                ),
                ie && (G == null || G(),
                P(w.current),
                f && (g == null || g()),
                o && o())
            }
            ;
            return d.jsx(d2, {
                isPresent: W,
                initial: !S.current || i ? void 0 : !1,
                custom: l,
                presenceAffectsLayout: c,
                mode: h,
                onExitComplete: W ? void 0 : Q,
                anchorX: m,
                children: R
            }, Z)
        }
        )
    })
}
  , Py = T.createContext({
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
  , Ql = {};
for (const n in Xp)
    Ql[n] = {
        isEnabled: l => Xp[n].some(i => !!l[i])
    };
function m2(n) {
    for (const l in n)
        Ql[l] = {
            ...Ql[l],
            ...n[l]
        }
}
const p2 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Zo(n) {
    return n.startsWith("while") || n.startsWith("drag") && n !== "draggable" || n.startsWith("layout") || n.startsWith("onTap") || n.startsWith("onPan") || n.startsWith("onLayout") || p2.has(n)
}
let qy = n => !Zo(n);
function g2(n) {
    typeof n == "function" && (qy = l => l.startsWith("on") ? !Zo(l) : n(l))
}
try {
    g2(require("@emotion/is-prop-valid").default)
} catch {}
function y2(n, l, i) {
    const o = {};
    for (const c in n)
        c === "values" && typeof n.values == "object" || (qy(c) || i === !0 && Zo(c) || !l && !Zo(c) || n.draggable && c.startsWith("onDrag")) && (o[c] = n[c]);
    return o
}
function v2(n) {
    if (typeof Proxy > "u")
        return n;
    const l = new Map
      , i = (...o) => n(...o);
    return new Proxy(i,{
        get: (o, c) => c === "create" ? n : (l.has(c) || l.set(c, n(c)),
        l.get(c))
    })
}
const Io = T.createContext({});
function $o(n) {
    return n !== null && typeof n == "object" && typeof n.start == "function"
}
function us(n) {
    return typeof n == "string" || Array.isArray(n)
}
const jf = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , wf = ["initial", ...jf];
function Wo(n) {
    return $o(n.animate) || wf.some(l => us(n[l]))
}
function Yy(n) {
    return !!(Wo(n) || n.variants)
}
function x2(n, l) {
    if (Wo(n)) {
        const {initial: i, animate: o} = n;
        return {
            initial: i === !1 || us(i) ? i : void 0,
            animate: us(o) ? o : void 0
        }
    }
    return n.inherit !== !1 ? l : {}
}
function b2(n) {
    const {initial: l, animate: i} = x2(n, T.useContext(Io));
    return T.useMemo( () => ({
        initial: l,
        animate: i
    }), [Kp(l), Kp(i)])
}
function Kp(n) {
    return Array.isArray(n) ? n.join(" ") : n
}
const S2 = Symbol.for("motionComponentSymbol");
function Yl(n) {
    return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current")
}
function T2(n, l, i) {
    return T.useCallback(o => {
        o && n.onMount && n.onMount(o),
        l && (o ? l.mount(o) : l.unmount()),
        i && (typeof i == "function" ? i(o) : Yl(i) && (i.current = o))
    }
    , [l])
}
const Af = n => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , j2 = "framerAppearId"
  , Gy = "data-" + Af(j2)
  , Xy = T.createContext({});
function w2(n, l, i, o, c) {
    var D, M;
    const {visualElement: h} = T.useContext(Io)
      , f = T.useContext(Py)
      , m = T.useContext(Jo)
      , p = T.useContext(Tf).reducedMotion
      , g = T.useRef(null);
    o = o || f.renderer,
    !g.current && o && (g.current = o(n, {
        visualState: l,
        parent: h,
        props: i,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: p
    }));
    const v = g.current
      , x = T.useContext(Xy);
    v && !v.projection && c && (v.type === "html" || v.type === "svg") && A2(g.current, i, c, x);
    const S = T.useRef(!1);
    T.useInsertionEffect( () => {
        v && S.current && v.update(i, m)
    }
    );
    const w = i[Gy]
      , C = T.useRef(!!w && !((D = window.MotionHandoffIsComplete) != null && D.call(window, w)) && ((M = window.MotionHasOptimisedAnimation) == null ? void 0 : M.call(window, w)));
    return Fg( () => {
        v && (S.current = !0,
        window.MotionIsMounted = !0,
        v.updateFeatures(),
        bf.render(v.render),
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
function A2(n, l, i, o) {
    const {layoutId: c, layout: h, drag: f, dragConstraints: m, layoutScroll: p, layoutRoot: g, layoutCrossfade: v} = l;
    n.projection = new i(n.latestValues,l["data-framer-portal-id"] ? void 0 : Ky(n.parent)),
    n.projection.setOptions({
        layoutId: c,
        layout: h,
        alwaysMeasureLayout: !!f || m && Yl(m),
        visualElement: n,
        animationType: typeof h == "string" ? h : "both",
        initialPromotionConfig: o,
        crossfade: v,
        layoutScroll: p,
        layoutRoot: g
    })
}
function Ky(n) {
    if (n)
        return n.options.allowProjection !== !1 ? n.projection : Ky(n.parent)
}
function N2({preloadedFeatures: n, createVisualElement: l, useRender: i, useVisualState: o, Component: c}) {
    n && m2(n);
    function h(m, p) {
        let g;
        const v = {
            ...T.useContext(Tf),
            ...m,
            layoutId: E2(m)
        }
          , {isStatic: x} = v
          , S = b2(m)
          , w = o(m, x);
        if (!x && $c) {
            C2();
            const C = D2(v);
            g = C.MeasureLayout,
            S.visualElement = w2(c, w, v, l, C.ProjectionNode)
        }
        return d.jsxs(Io.Provider, {
            value: S,
            children: [g && S.visualElement ? d.jsx(g, {
                visualElement: S.visualElement,
                ...v
            }) : null, i(c, m, T2(w, S.visualElement, p), w, x, S.visualElement)]
        })
    }
    h.displayName = `motion.${typeof c == "string" ? c : `create(${c.displayName ?? c.name ?? ""})`}`;
    const f = T.forwardRef(h);
    return f[S2] = c,
    f
}
function E2({layoutId: n}) {
    const l = T.useContext(Jc).id;
    return l && n !== void 0 ? l + "-" + n : n
}
function C2(n, l) {
    T.useContext(Py).strict
}
function D2(n) {
    const {drag: l, layout: i} = Ql;
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
const cs = {};
function M2(n) {
    for (const l in n)
        cs[l] = n[l],
        of(l) && (cs[l].isCSSVariable = !0)
}
function Zy(n, {layout: l, layoutId: i}) {
    return Il.has(n) || n.startsWith("origin") || (l || i !== void 0) && (!!cs[n] || n === "opacity")
}
const _2 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , O2 = Jl.length;
function R2(n, l, i) {
    let o = ""
      , c = !0;
    for (let h = 0; h < O2; h++) {
        const f = Jl[h]
          , m = n[f];
        if (m === void 0)
            continue;
        let p = !0;
        if (typeof m == "number" ? p = m === (f.startsWith("scale") ? 1 : 0) : p = parseFloat(m) === 0,
        !p || i) {
            const g = Vy(m, xf[f]);
            if (!p) {
                c = !1;
                const v = _2[f] || f;
                o += `${v}(${g}) `
            }
            i && (l[f] = g)
        }
    }
    return o = o.trim(),
    i ? o = i(l, c ? "" : o) : c && (o = "none"),
    o
}
function Nf(n, l, i) {
    const {style: o, vars: c, transformOrigin: h} = n;
    let f = !1
      , m = !1;
    for (const p in l) {
        const g = l[p];
        if (Il.has(p)) {
            f = !0;
            continue
        } else if (of(p)) {
            c[p] = g;
            continue
        } else {
            const v = Vy(g, xf[p]);
            p.startsWith("origin") ? (m = !0,
            h[p] = v) : o[p] = v
        }
    }
    if (l.transform || (f || i ? o.transform = R2(l, n.transform, i) : o.transform && (o.transform = "none")),
    m) {
        const {originX: p="50%", originY: g="50%", originZ: v=0} = h;
        o.transformOrigin = `${p} ${g} ${v}`
    }
}
const Ef = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function Qy(n, l, i) {
    for (const o in l)
        !kt(l[o]) && !Zy(o, i) && (n[o] = l[o])
}
function V2({transformTemplate: n}, l) {
    return T.useMemo( () => {
        const i = Ef();
        return Nf(i, l, n),
        Object.assign({}, i.vars, i.style)
    }
    , [l])
}
function z2(n, l) {
    const i = n.style || {}
      , o = {};
    return Qy(o, i, n),
    Object.assign(o, V2(n, l)),
    o
}
function U2(n, l) {
    const i = {}
      , o = z2(n, l);
    return n.drag && n.dragListener !== !1 && (i.draggable = !1,
    o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none",
    o.touchAction = n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`),
    n.tabIndex === void 0 && (n.onTap || n.onTapStart || n.whileTap) && (i.tabIndex = 0),
    i.style = o,
    i
}
const B2 = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , L2 = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function k2(n, l, i=1, o=0, c=!0) {
    n.pathLength = 1;
    const h = c ? B2 : L2;
    n[h.offset] = xe.transform(-o);
    const f = xe.transform(l)
      , m = xe.transform(i);
    n[h.array] = `${f} ${m}`
}
function Fy(n, {attrX: l, attrY: i, attrScale: o, pathLength: c, pathSpacing: h=1, pathOffset: f=0, ...m}, p, g, v) {
    if (Nf(n, m, g),
    p) {
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
    i !== void 0 && (x.y = i),
    o !== void 0 && (x.scale = o),
    c !== void 0 && k2(x, c, h, f, !1)
}
const Jy = () => ({
    ...Ef(),
    attrs: {}
})
  , Iy = n => typeof n == "string" && n.toLowerCase() === "svg";
function H2(n, l, i, o) {
    const c = T.useMemo( () => {
        const h = Jy();
        return Fy(h, l, Iy(o), n.transformTemplate, n.style),
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
        Qy(h, n.style, n),
        c.style = {
            ...h,
            ...c.style
        }
    }
    return c
}
const P2 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Cf(n) {
    return typeof n != "string" || n.includes("-") ? !1 : !!(P2.indexOf(n) > -1 || /[A-Z]/u.test(n))
}
function q2(n=!1) {
    return (i, o, c, {latestValues: h}, f) => {
        const p = (Cf(i) ? H2 : U2)(o, h, f, i)
          , g = y2(o, typeof i == "string", n)
          , v = i !== T.Fragment ? {
            ...g,
            ...p,
            ref: c
        } : {}
          , {children: x} = o
          , S = T.useMemo( () => kt(x) ? x.get() : x, [x]);
        return T.createElement(i, {
            ...v,
            children: S
        })
    }
}
function Zp(n) {
    const l = [{}, {}];
    return n == null || n.values.forEach( (i, o) => {
        l[0][o] = i.get(),
        l[1][o] = i.getVelocity()
    }
    ),
    l
}
function Df(n, l, i, o) {
    if (typeof l == "function") {
        const [c,h] = Zp(o);
        l = l(i !== void 0 ? i : n.custom, c, h)
    }
    if (typeof l == "string" && (l = n.variants && n.variants[l]),
    typeof l == "function") {
        const [c,h] = Zp(o);
        l = l(i !== void 0 ? i : n.custom, c, h)
    }
    return l
}
function qo(n) {
    return kt(n) ? n.get() : n
}
function Y2({scrapeMotionValuesFromProps: n, createRenderState: l}, i, o, c) {
    return {
        latestValues: G2(i, o, c, n),
        renderState: l()
    }
}
const $y = n => (l, i) => {
    const o = T.useContext(Io)
      , c = T.useContext(Jo)
      , h = () => Y2(n, l, o, c);
    return i ? h() : Ic(h)
}
;
function G2(n, l, i, o) {
    const c = {}
      , h = o(n, {});
    for (const S in h)
        c[S] = qo(h[S]);
    let {initial: f, animate: m} = n;
    const p = Wo(n)
      , g = Yy(n);
    l && g && !p && n.inherit !== !1 && (f === void 0 && (f = l.initial),
    m === void 0 && (m = l.animate));
    let v = i ? i.initial === !1 : !1;
    v = v || f === !1;
    const x = v ? m : f;
    if (x && typeof x != "boolean" && !$o(x)) {
        const S = Array.isArray(x) ? x : [x];
        for (let w = 0; w < S.length; w++) {
            const C = Df(n, S[w]);
            if (C) {
                const {transitionEnd: D, transition: M, ...U} = C;
                for (const P in U) {
                    let B = U[P];
                    if (Array.isArray(B)) {
                        const G = v ? B.length - 1 : 0;
                        B = B[G]
                    }
                    B !== null && (c[P] = B)
                }
                for (const P in D)
                    c[P] = D[P]
            }
        }
    }
    return c
}
function Mf(n, l, i) {
    var h;
    const {style: o} = n
      , c = {};
    for (const f in o)
        (kt(o[f]) || l.style && kt(l.style[f]) || Zy(f, n) || ((h = i == null ? void 0 : i.getValue(f)) == null ? void 0 : h.liveStyle) !== void 0) && (c[f] = o[f]);
    return c
}
const X2 = {
    useVisualState: $y({
        scrapeMotionValuesFromProps: Mf,
        createRenderState: Ef
    })
};
function Wy(n, l, i) {
    const o = Mf(n, l, i);
    for (const c in n)
        if (kt(n[c]) || kt(l[c])) {
            const h = Jl.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
            o[h] = n[c]
        }
    return o
}
const K2 = {
    useVisualState: $y({
        scrapeMotionValuesFromProps: Wy,
        createRenderState: Jy
    })
};
function Z2(n, l) {
    return function(o, {forwardMotionProps: c}={
        forwardMotionProps: !1
    }) {
        const f = {
            ...Cf(o) ? K2 : X2,
            preloadedFeatures: n,
            useRender: q2(c),
            createVisualElement: l,
            Component: o
        };
        return N2(f)
    }
}
function fs(n, l, i) {
    const o = n.getProps();
    return Df(o, l, i !== void 0 ? i : o.custom, n)
}
const Hc = n => Array.isArray(n);
function Q2(n, l, i) {
    n.hasValue(l) ? n.getValue(l).set(i) : n.addValue(l, Zl(i))
}
function F2(n) {
    return Hc(n) ? n[n.length - 1] || 0 : n
}
function J2(n, l) {
    const i = fs(n, l);
    let {transitionEnd: o={}, transition: c={}, ...h} = i || {};
    h = {
        ...h,
        ...o
    };
    for (const f in h) {
        const m = F2(h[f]);
        Q2(n, f, m)
    }
}
function I2(n) {
    return !!(kt(n) && n.add)
}
function Pc(n, l) {
    const i = n.getValue("willChange");
    if (I2(i))
        return i.add(l);
    if (!i && ln.WillChange) {
        const o = new ln.WillChange("auto");
        n.addValue("willChange", o),
        o.add(l)
    }
}
function e0(n) {
    return n.props[Gy]
}
const $2 = n => n !== null;
function W2(n, {repeat: l, repeatType: i="loop"}, o) {
    const c = n.filter($2)
      , h = l && i !== "loop" && l % 2 === 1 ? 0 : c.length - 1;
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
  , lS = (n, {keyframes: l}) => l.length > 2 ? aS : Il.has(n) ? n.startsWith("scale") ? tS(l[1]) : eS : nS;
function iS({when: n, delay: l, delayChildren: i, staggerChildren: o, staggerDirection: c, repeat: h, repeatType: f, repeatDelay: m, from: p, elapsed: g, ...v}) {
    return !!Object.keys(v).length
}
const _f = (n, l, i, o={}, c, h) => f => {
    const m = vf(o, n) || {}
      , p = m.delay || o.delay || 0;
    let {elapsed: g=0} = o;
    g = g - Ua(p);
    const v = {
        keyframes: Array.isArray(i) ? i : [null, i],
        ease: "easeOut",
        velocity: l.getVelocity(),
        ...m,
        delay: -g,
        onUpdate: S => {
            l.set(S),
            m.onUpdate && m.onUpdate(S)
        }
        ,
        onComplete: () => {
            f(),
            m.onComplete && m.onComplete()
        }
        ,
        name: n,
        motionValue: l,
        element: h ? void 0 : c
    };
    iS(m) || Object.assign(v, lS(n, v)),
    v.duration && (v.duration = Ua(v.duration)),
    v.repeatDelay && (v.repeatDelay = Ua(v.repeatDelay)),
    v.from !== void 0 && (v.keyframes[0] = v.from);
    let x = !1;
    if ((v.type === !1 || v.duration === 0 && !v.repeatDelay) && (v.duration = 0,
    v.delay === 0 && (x = !0)),
    (ln.instantAnimations || ln.skipAnimations) && (x = !0,
    v.duration = 0,
    v.delay = 0),
    v.allowFlatten = !m.type && !m.ease,
    x && !h && l.get() !== void 0) {
        const S = W2(v.keyframes, m);
        if (S !== void 0) {
            lt.update( () => {
                v.onUpdate(S),
                v.onComplete()
            }
            );
            return
        }
    }
    return m.isSync ? new pf(v) : new k1(v)
}
;
function sS({protectedKeys: n, needsAnimating: l}, i) {
    const o = n.hasOwnProperty(i) && l[i] !== !0;
    return l[i] = !1,
    o
}
function t0(n, l, {delay: i=0, transitionOverride: o, type: c}={}) {
    let {transition: h=n.getDefaultTransition(), transitionEnd: f, ...m} = l;
    o && (h = o);
    const p = []
      , g = c && n.animationState && n.animationState.getState()[c];
    for (const v in m) {
        const x = n.getValue(v, n.latestValues[v] ?? null)
          , S = m[v];
        if (S === void 0 || g && sS(g, v))
            continue;
        const w = {
            delay: i,
            ...vf(h || {}, v)
        }
          , C = x.get();
        if (C !== void 0 && !x.isAnimating && !Array.isArray(S) && S === C && !w.velocity)
            continue;
        let D = !1;
        if (window.MotionHandoffAnimation) {
            const U = e0(n);
            if (U) {
                const P = window.MotionHandoffAnimation(U, v, lt);
                P !== null && (w.startTime = P,
                D = !0)
            }
        }
        Pc(n, v),
        x.start(_f(v, x, S, n.shouldReduceMotion && Dy.has(v) ? {
            type: !1
        } : w, n, D));
        const M = x.animation;
        M && p.push(M)
    }
    return f && Promise.all(p).then( () => {
        lt.update( () => {
            f && J2(n, f)
        }
        )
    }
    ),
    p
}
function qc(n, l, i={}) {
    var p;
    const o = fs(n, l, i.type === "exit" ? (p = n.presenceContext) == null ? void 0 : p.custom : void 0);
    let {transition: c=n.getDefaultTransition() || {}} = o || {};
    i.transitionOverride && (c = i.transitionOverride);
    const h = o ? () => Promise.all(t0(n, o, i)) : () => Promise.resolve()
      , f = n.variantChildren && n.variantChildren.size ? (g=0) => {
        const {delayChildren: v=0, staggerChildren: x, staggerDirection: S} = c;
        return oS(n, l, v + g, x, S, i)
    }
    : () => Promise.resolve()
      , {when: m} = c;
    if (m) {
        const [g,v] = m === "beforeChildren" ? [h, f] : [f, h];
        return g().then( () => v())
    } else
        return Promise.all([h(), f(i.delay)])
}
function oS(n, l, i=0, o=0, c=1, h) {
    const f = []
      , m = (n.variantChildren.size - 1) * o
      , p = c === 1 ? (g=0) => g * o : (g=0) => m - g * o;
    return Array.from(n.variantChildren).sort(rS).forEach( (g, v) => {
        g.notify("AnimationStart", l),
        f.push(qc(g, l, {
            ...h,
            delay: i + p(v)
        }).then( () => g.notify("AnimationComplete", l)))
    }
    ),
    Promise.all(f)
}
function rS(n, l) {
    return n.sortNodePosition(l)
}
function uS(n, l, i={}) {
    n.notify("AnimationStart", l);
    let o;
    if (Array.isArray(l)) {
        const c = l.map(h => qc(n, h, i));
        o = Promise.all(c)
    } else if (typeof l == "string")
        o = qc(n, l, i);
    else {
        const c = typeof l == "function" ? fs(n, l, i.custom) : l;
        o = Promise.all(t0(n, c, i))
    }
    return o.then( () => {
        n.notify("AnimationComplete", l)
    }
    )
}
function a0(n, l) {
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
const cS = wf.length;
function n0(n) {
    if (!n)
        return;
    if (!n.isControllingVariants) {
        const i = n.parent ? n0(n.parent) || {} : {};
        return n.props.initial !== void 0 && (i.initial = n.props.initial),
        i
    }
    const l = {};
    for (let i = 0; i < cS; i++) {
        const o = wf[i]
          , c = n.props[o];
        (us(c) || c === !1) && (l[o] = c)
    }
    return l
}
const fS = [...jf].reverse()
  , dS = jf.length;
function hS(n) {
    return l => Promise.all(l.map( ({animation: i, options: o}) => uS(n, i, o)))
}
function mS(n) {
    let l = hS(n)
      , i = Qp()
      , o = !0;
    const c = p => (g, v) => {
        var S;
        const x = fs(n, v, p === "exit" ? (S = n.presenceContext) == null ? void 0 : S.custom : void 0);
        if (x) {
            const {transition: w, transitionEnd: C, ...D} = x;
            g = {
                ...g,
                ...D,
                ...C
            }
        }
        return g
    }
    ;
    function h(p) {
        l = p(n)
    }
    function f(p) {
        const {props: g} = n
          , v = n0(n.parent) || {}
          , x = []
          , S = new Set;
        let w = {}
          , C = 1 / 0;
        for (let M = 0; M < dS; M++) {
            const U = fS[M]
              , P = i[U]
              , B = g[U] !== void 0 ? g[U] : v[U]
              , G = us(B)
              , R = U === p ? P.isActive : null;
            R === !1 && (C = M);
            let Z = B === v[U] && B !== g[U] && G;
            if (Z && o && n.manuallyAnimateOnMount && (Z = !1),
            P.protectedKeys = {
                ...w
            },
            !P.isActive && R === null || !B && !P.prevProp || $o(B) || typeof B == "boolean")
                continue;
            const W = pS(P.prevProp, B);
            let Q = W || U === p && P.isActive && !Z && G || M > C && G
              , ie = !1;
            const fe = Array.isArray(B) ? B : [B];
            let he = fe.reduce(c(U), {});
            R === !1 && (he = {});
            const {prevResolvedValues: ce={}} = P
              , re = {
                ...ce,
                ...he
            }
              , ee = O => {
                Q = !0,
                S.has(O) && (ie = !0,
                S.delete(O)),
                P.needsAnimating[O] = !0;
                const L = n.getValue(O);
                L && (L.liveStyle = !1)
            }
            ;
            for (const O in re) {
                const L = he[O]
                  , ae = ce[O];
                if (w.hasOwnProperty(O))
                    continue;
                let j = !1;
                Hc(L) && Hc(ae) ? j = !a0(L, ae) : j = L !== ae,
                j ? L != null ? ee(O) : S.add(O) : L !== void 0 && S.has(O) ? ee(O) : P.protectedKeys[O] = !0
            }
            P.prevProp = B,
            P.prevResolvedValues = he,
            P.isActive && (w = {
                ...w,
                ...he
            }),
            o && n.blockInitialAnimation && (Q = !1),
            Q && (!(Z && W) || ie) && x.push(...fe.map(O => ({
                animation: O,
                options: {
                    type: U
                }
            })))
        }
        if (S.size) {
            const M = {};
            if (typeof g.initial != "boolean") {
                const U = fs(n, Array.isArray(g.initial) ? g.initial[0] : g.initial);
                U && U.transition && (M.transition = U.transition)
            }
            S.forEach(U => {
                const P = n.getBaseTarget(U)
                  , B = n.getValue(U);
                B && (B.liveStyle = !0),
                M[U] = P ?? null
            }
            ),
            x.push({
                animation: M
            })
        }
        let D = !!x.length;
        return o && (g.initial === !1 || g.initial === g.animate) && !n.manuallyAnimateOnMount && (D = !1),
        o = !1,
        D ? l(x) : Promise.resolve()
    }
    function m(p, g) {
        var x;
        if (i[p].isActive === g)
            return Promise.resolve();
        (x = n.variantChildren) == null || x.forEach(S => {
            var w;
            return (w = S.animationState) == null ? void 0 : w.setActive(p, g)
        }
        ),
        i[p].isActive = g;
        const v = f(p);
        for (const S in i)
            i[S].protectedKeys = {};
        return v
    }
    return {
        animateChanges: f,
        setActive: m,
        setAnimateFunction: h,
        getState: () => i,
        reset: () => {
            i = Qp(),
            o = !0
        }
    }
}
function pS(n, l) {
    return typeof l == "string" ? l !== n : Array.isArray(l) ? !a0(l, n) : !1
}
function $n(n=!1) {
    return {
        isActive: n,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function Qp() {
    return {
        animate: $n(!0),
        whileInView: $n(),
        whileHover: $n(),
        whileTap: $n(),
        whileDrag: $n(),
        whileFocus: $n(),
        exit: $n()
    }
}
class Rn {
    constructor(l) {
        this.isMounted = !1,
        this.node = l
    }
    update() {}
}
class gS extends Rn {
    constructor(l) {
        super(l),
        l.animationState || (l.animationState = mS(l))
    }
    updateAnimationControlsSubscription() {
        const {animate: l} = this.node.getProps();
        $o(l) && (this.unmountControls = l.subscribe(this.node))
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
let yS = 0;
class vS extends Rn {
    constructor() {
        super(...arguments),
        this.id = yS++
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
const xS = {
    animation: {
        Feature: gS
    },
    exit: {
        Feature: vS
    }
};
function ds(n, l, i, o={
    passive: !0
}) {
    return n.addEventListener(l, i, o),
    () => n.removeEventListener(l, i)
}
function vs(n) {
    return {
        point: {
            x: n.pageX,
            y: n.pageY
        }
    }
}
const bS = n => l => Sf(l) && n(l, vs(l));
function ns(n, l, i, o) {
    return ds(n, l, bS(i), o)
}
function l0({top: n, left: l, right: i, bottom: o}) {
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
const i0 = 1e-4
  , jS = 1 - i0
  , wS = 1 + i0
  , s0 = .01
  , AS = 0 - s0
  , NS = 0 + s0;
function qt(n) {
    return n.max - n.min
}
function ES(n, l, i) {
    return Math.abs(n - l) <= i
}
function Fp(n, l, i, o=.5) {
    n.origin = o,
    n.originPoint = nt(l.min, l.max, n.origin),
    n.scale = qt(i) / qt(l),
    n.translate = nt(i.min, i.max, n.origin) - n.originPoint,
    (n.scale >= jS && n.scale <= wS || isNaN(n.scale)) && (n.scale = 1),
    (n.translate >= AS && n.translate <= NS || isNaN(n.translate)) && (n.translate = 0)
}
function ls(n, l, i, o) {
    Fp(n.x, l.x, i.x, o ? o.originX : void 0),
    Fp(n.y, l.y, i.y, o ? o.originY : void 0)
}
function Jp(n, l, i) {
    n.min = i.min + l.min,
    n.max = n.min + qt(l)
}
function CS(n, l, i) {
    Jp(n.x, l.x, i.x),
    Jp(n.y, l.y, i.y)
}
function Ip(n, l, i) {
    n.min = l.min - i.min,
    n.max = n.min + qt(l)
}
function is(n, l, i) {
    Ip(n.x, l.x, i.x),
    Ip(n.y, l.y, i.y)
}
const $p = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Gl = () => ({
    x: $p(),
    y: $p()
})
  , Wp = () => ({
    min: 0,
    max: 0
})
  , pt = () => ({
    x: Wp(),
    y: Wp()
});
function va(n) {
    return [n("x"), n("y")]
}
function bc(n) {
    return n === void 0 || n === 1
}
function Yc({scale: n, scaleX: l, scaleY: i}) {
    return !bc(n) || !bc(l) || !bc(i)
}
function Wn(n) {
    return Yc(n) || o0(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY
}
function o0(n) {
    return eg(n.x) || eg(n.y)
}
function eg(n) {
    return n && n !== "0%"
}
function Qo(n, l, i) {
    const o = n - i
      , c = l * o;
    return i + c
}
function tg(n, l, i, o, c) {
    return c !== void 0 && (n = Qo(n, c, o)),
    Qo(n, i, o) + l
}
function Gc(n, l=0, i=1, o, c) {
    n.min = tg(n.min, l, i, o, c),
    n.max = tg(n.max, l, i, o, c)
}
function r0(n, {x: l, y: i}) {
    Gc(n.x, l.translate, l.scale, l.originPoint),
    Gc(n.y, i.translate, i.scale, i.originPoint)
}
const ag = .999999999999
  , ng = 1.0000000000001;
function DS(n, l, i, o=!1) {
    const c = i.length;
    if (!c)
        return;
    l.x = l.y = 1;
    let h, f;
    for (let m = 0; m < c; m++) {
        h = i[m],
        f = h.projectionDelta;
        const {visualElement: p} = h.options;
        p && p.props.style && p.props.style.display === "contents" || (o && h.options.layoutScroll && h.scroll && h !== h.root && Kl(n, {
            x: -h.scroll.offset.x,
            y: -h.scroll.offset.y
        }),
        f && (l.x *= f.x.scale,
        l.y *= f.y.scale,
        r0(n, f)),
        o && Wn(h.latestValues) && Kl(n, h.latestValues))
    }
    l.x < ng && l.x > ag && (l.x = 1),
    l.y < ng && l.y > ag && (l.y = 1)
}
function Xl(n, l) {
    n.min = n.min + l,
    n.max = n.max + l
}
function lg(n, l, i, o, c=.5) {
    const h = nt(n.min, n.max, c);
    Gc(n, l, i, h, o)
}
function Kl(n, l) {
    lg(n.x, l.x, l.scaleX, l.scale, l.originX),
    lg(n.y, l.y, l.scaleY, l.scale, l.originY)
}
function u0(n, l) {
    return l0(TS(n.getBoundingClientRect(), l))
}
function MS(n, l, i) {
    const o = u0(n, i)
      , {scroll: c} = l;
    return c && (Xl(o.x, c.offset.x),
    Xl(o.y, c.offset.y)),
    o
}
const c0 = ({current: n}) => n ? n.ownerDocument.defaultView : null
  , ig = (n, l) => Math.abs(n - l);
function _S(n, l) {
    const i = ig(n.x, l.x)
      , o = ig(n.y, l.y);
    return Math.sqrt(i ** 2 + o ** 2)
}
class f0 {
    constructor(l, i, {transformPagePoint: o, contextWindow: c, dragSnapToOrigin: h=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const x = Tc(this.lastMoveEventInfo, this.history)
              , S = this.startEvent !== null
              , w = _S(x.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!S && !w)
                return;
            const {point: C} = x
              , {timestamp: D} = Vt;
            this.history.push({
                ...C,
                timestamp: D
            });
            const {onStart: M, onMove: U} = this.handlers;
            S || (M && M(this.lastMoveEvent, x),
            this.startEvent = this.lastMoveEvent),
            U && U(this.lastMoveEvent, x)
        }
        ,
        this.handlePointerMove = (x, S) => {
            this.lastMoveEvent = x,
            this.lastMoveEventInfo = Sc(S, this.transformPagePoint),
            lt.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (x, S) => {
            this.end();
            const {onEnd: w, onSessionEnd: C, resumeAnimation: D} = this.handlers;
            if (this.dragSnapToOrigin && D && D(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const M = Tc(x.type === "pointercancel" ? this.lastMoveEventInfo : Sc(S, this.transformPagePoint), this.history);
            this.startEvent && w && w(x, M),
            C && C(x, M)
        }
        ,
        !Sf(l))
            return;
        this.dragSnapToOrigin = h,
        this.handlers = i,
        this.transformPagePoint = o,
        this.contextWindow = c || window;
        const f = vs(l)
          , m = Sc(f, this.transformPagePoint)
          , {point: p} = m
          , {timestamp: g} = Vt;
        this.history = [{
            ...p,
            timestamp: g
        }];
        const {onSessionStart: v} = i;
        v && v(l, Tc(m, this.history)),
        this.removeListeners = ps(ns(this.contextWindow, "pointermove", this.handlePointerMove), ns(this.contextWindow, "pointerup", this.handlePointerUp), ns(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(l) {
        this.handlers = l
    }
    end() {
        this.removeListeners && this.removeListeners(),
        _n(this.updatePoint)
    }
}
function Sc(n, l) {
    return l ? {
        point: l(n.point)
    } : n
}
function sg(n, l) {
    return {
        x: n.x - l.x,
        y: n.y - l.y
    }
}
function Tc({point: n}, l) {
    return {
        point: n,
        delta: sg(n, d0(l)),
        offset: sg(n, OS(l)),
        velocity: RS(l, .1)
    }
}
function OS(n) {
    return n[0]
}
function d0(n) {
    return n[n.length - 1]
}
function RS(n, l) {
    if (n.length < 2)
        return {
            x: 0,
            y: 0
        };
    let i = n.length - 1
      , o = null;
    const c = d0(n);
    for (; i >= 0 && (o = n[i],
    !(c.timestamp - o.timestamp > Ua(l))); )
        i--;
    if (!o)
        return {
            x: 0,
            y: 0
        };
    const h = Ba(c.timestamp - o.timestamp);
    if (h === 0)
        return {
            x: 0,
            y: 0
        };
    const f = {
        x: (c.x - o.x) / h,
        y: (c.y - o.y) / h
    };
    return f.x === 1 / 0 && (f.x = 0),
    f.y === 1 / 0 && (f.y = 0),
    f
}
function VS(n, {min: l, max: i}, o) {
    return l !== void 0 && n < l ? n = o ? nt(l, n, o.min) : Math.max(n, l) : i !== void 0 && n > i && (n = o ? nt(i, n, o.max) : Math.min(n, i)),
    n
}
function og(n, l, i) {
    return {
        min: l !== void 0 ? n.min + l : void 0,
        max: i !== void 0 ? n.max + i - (n.max - n.min) : void 0
    }
}
function zS(n, {top: l, left: i, bottom: o, right: c}) {
    return {
        x: og(n.x, i, c),
        y: og(n.y, l, o)
    }
}
function rg(n, l) {
    let i = l.min - n.min
      , o = l.max - n.max;
    return l.max - l.min < n.max - n.min && ([i,o] = [o, i]),
    {
        min: i,
        max: o
    }
}
function US(n, l) {
    return {
        x: rg(n.x, l.x),
        y: rg(n.y, l.y)
    }
}
function BS(n, l) {
    let i = .5;
    const o = qt(n)
      , c = qt(l);
    return c > o ? i = ss(l.min, l.max - o, n.min) : o > c && (i = ss(n.min, n.max - c, l.min)),
    nn(0, 1, i)
}
function LS(n, l) {
    const i = {};
    return l.min !== void 0 && (i.min = l.min - n.min),
    l.max !== void 0 && (i.max = l.max - n.min),
    i
}
const Xc = .35;
function kS(n=Xc) {
    return n === !1 ? n = 0 : n === !0 && (n = Xc),
    {
        x: ug(n, "left", "right"),
        y: ug(n, "top", "bottom")
    }
}
function ug(n, l, i) {
    return {
        min: cg(n, l),
        max: cg(n, i)
    }
}
function cg(n, l) {
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
        this.elastic = pt(),
        this.visualElement = l
    }
    start(l, {snapToCursor: i=!1}={}) {
        const {presenceContext: o} = this.visualElement;
        if (o && o.isPresent === !1)
            return;
        const c = v => {
            const {dragSnapToOrigin: x} = this.getProps();
            x ? this.pauseAnimation() : this.stopAnimation(),
            i && this.snapToCursor(vs(v).point)
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
            va(M => {
                let U = this.getAxisMotionValue(M).get() || 0;
                if (La.test(U)) {
                    const {projection: P} = this.visualElement;
                    if (P && P.layout) {
                        const B = P.layout.layoutBox[M];
                        B && (U = qt(B) * (parseFloat(U) / 100))
                    }
                }
                this.originPoint[M] = U
            }
            ),
            C && lt.postRender( () => C(v, x)),
            Pc(this.visualElement, "transform");
            const {animationState: D} = this.visualElement;
            D && D.setActive("whileDrag", !0)
        }
          , f = (v, x) => {
            const {dragPropagation: S, dragDirectionLock: w, onDirectionLock: C, onDrag: D} = this.getProps();
            if (!S && !this.openDragLock)
                return;
            const {offset: M} = x;
            if (w && this.currentDirection === null) {
                this.currentDirection = qS(M),
                this.currentDirection !== null && C && C(this.currentDirection);
                return
            }
            this.updateAxis("x", x.point, M),
            this.updateAxis("y", x.point, M),
            this.visualElement.render(),
            D && D(v, x)
        }
          , m = (v, x) => this.stop(v, x)
          , p = () => va(v => {
            var x;
            return this.getAnimationState(v) === "paused" && ((x = this.getAxisMotionValue(v).animation) == null ? void 0 : x.play())
        }
        )
          , {dragSnapToOrigin: g} = this.getProps();
        this.panSession = new f0(l,{
            onSessionStart: c,
            onStart: h,
            onMove: f,
            onSessionEnd: m,
            resumeAnimation: p
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: g,
            contextWindow: c0(this.visualElement)
        })
    }
    stop(l, i) {
        const o = this.isDragging;
        if (this.cancel(),
        !o)
            return;
        const {velocity: c} = i;
        this.startAnimation(c);
        const {onDragEnd: h} = this.getProps();
        h && lt.postRender( () => h(l, i))
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
        if (!o || !ko(l, c, this.currentDirection))
            return;
        const h = this.getAxisMotionValue(l);
        let f = this.originPoint[l] + o[l];
        this.constraints && this.constraints[l] && (f = VS(f, this.constraints[l], this.elastic[l])),
        h.set(f)
    }
    resolveConstraints() {
        var h;
        const {dragConstraints: l, dragElastic: i} = this.getProps()
          , o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (h = this.visualElement.projection) == null ? void 0 : h.layout
          , c = this.constraints;
        l && Yl(l) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : l && o ? this.constraints = zS(o.layoutBox, l) : this.constraints = !1,
        this.elastic = kS(i),
        c !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && va(f => {
            this.constraints !== !1 && this.getAxisMotionValue(f) && (this.constraints[f] = LS(o.layoutBox[f], this.constraints[f]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: l, onMeasureDragConstraints: i} = this.getProps();
        if (!l || !Yl(l))
            return !1;
        const o = l.current
          , {projection: c} = this.visualElement;
        if (!c || !c.layout)
            return !1;
        const h = MS(o, c.root, this.visualElement.getTransformPagePoint());
        let f = US(c.layout.layoutBox, h);
        if (i) {
            const m = i(SS(f));
            this.hasMutatedConstraints = !!m,
            m && (f = l0(m))
        }
        return f
    }
    startAnimation(l) {
        const {drag: i, dragMomentum: o, dragElastic: c, dragTransition: h, dragSnapToOrigin: f, onDragTransitionEnd: m} = this.getProps()
          , p = this.constraints || {}
          , g = va(v => {
            if (!ko(v, i, this.currentDirection))
                return;
            let x = p && p[v] || {};
            f && (x = {
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
        return Promise.all(g).then(m)
    }
    startAxisValueAnimation(l, i) {
        const o = this.getAxisMotionValue(l);
        return Pc(this.visualElement, l),
        o.start(_f(l, o, 0, i, this.visualElement, !1))
    }
    stopAnimation() {
        va(l => this.getAxisMotionValue(l).stop())
    }
    pauseAnimation() {
        va(l => {
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
        va(i => {
            const {drag: o} = this.getProps();
            if (!ko(i, o, this.currentDirection))
                return;
            const {projection: c} = this.visualElement
              , h = this.getAxisMotionValue(i);
            if (c && c.layout) {
                const {min: f, max: m} = c.layout.layoutBox[i];
                h.set(l[i] - nt(f, m, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: l, dragConstraints: i} = this.getProps()
          , {projection: o} = this.visualElement;
        if (!Yl(i) || !o || !this.constraints)
            return;
        this.stopAnimation();
        const c = {
            x: 0,
            y: 0
        };
        va(f => {
            const m = this.getAxisMotionValue(f);
            if (m && this.constraints !== !1) {
                const p = m.get();
                c[f] = BS({
                    min: p,
                    max: p
                }, this.constraints[f])
            }
        }
        );
        const {transformTemplate: h} = this.visualElement.getProps();
        this.visualElement.current.style.transform = h ? h({}, "") : "none",
        o.root && o.root.updateScroll(),
        o.updateLayout(),
        this.resolveConstraints(),
        va(f => {
            if (!ko(f, l, null))
                return;
            const m = this.getAxisMotionValue(f)
              , {min: p, max: g} = this.constraints[f];
            m.set(nt(p, g, c[f]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        HS.set(this.visualElement, this);
        const l = this.visualElement.current
          , i = ns(l, "pointerdown", p => {
            const {drag: g, dragListener: v=!0} = this.getProps();
            g && v && this.start(p)
        }
        )
          , o = () => {
            const {dragConstraints: p} = this.getProps();
            Yl(p) && p.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: c} = this.visualElement
          , h = c.addEventListener("measure", o);
        c && !c.layout && (c.root && c.root.updateScroll(),
        c.updateLayout()),
        lt.read(o);
        const f = ds(window, "resize", () => this.scalePositionWithinConstraints())
          , m = c.addEventListener("didUpdate", ({delta: p, hasLayoutChanged: g}) => {
            this.isDragging && g && (va(v => {
                const x = this.getAxisMotionValue(v);
                x && (this.originPoint[v] += p[v].translate,
                x.set(x.get() + p[v].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            f(),
            i(),
            h(),
            m && m()
        }
    }
    getProps() {
        const l = this.visualElement.getProps()
          , {drag: i=!1, dragDirectionLock: o=!1, dragPropagation: c=!1, dragConstraints: h=!1, dragElastic: f=Xc, dragMomentum: m=!0} = l;
        return {
            ...l,
            drag: i,
            dragDirectionLock: o,
            dragPropagation: c,
            dragConstraints: h,
            dragElastic: f,
            dragMomentum: m
        }
    }
}
function ko(n, l, i) {
    return (l === !0 || l === n) && (i === null || i === n)
}
function qS(n, l=10) {
    let i = null;
    return Math.abs(n.y) > l ? i = "y" : Math.abs(n.x) > l && (i = "x"),
    i
}
class YS extends Rn {
    constructor(l) {
        super(l),
        this.removeGroupControls = ba,
        this.removeListeners = ba,
        this.controls = new PS(l)
    }
    mount() {
        const {dragControls: l} = this.node.getProps();
        l && (this.removeGroupControls = l.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || ba
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const fg = n => (l, i) => {
    n && lt.postRender( () => n(l, i))
}
;
class GS extends Rn {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = ba
    }
    onPointerDown(l) {
        this.session = new f0(l,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: c0(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: l, onPanStart: i, onPan: o, onPanEnd: c} = this.node.getProps();
        return {
            onSessionStart: fg(l),
            onStart: fg(i),
            onMove: o,
            onEnd: (h, f) => {
                delete this.session,
                c && lt.postRender( () => c(h, f))
            }
        }
    }
    mount() {
        this.removePointerDownListener = ns(this.node.current, "pointerdown", l => this.onPointerDown(l))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const Yo = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function dg(n, l) {
    return l.max === l.min ? 0 : n / (l.max - l.min) * 100
}
const $i = {
    correct: (n, l) => {
        if (!l.target)
            return n;
        if (typeof n == "string")
            if (xe.test(n))
                n = parseFloat(n);
            else
                return n;
        const i = dg(n, l.target.x)
          , o = dg(n, l.target.y);
        return `${i}% ${o}%`
    }
}
  , XS = {
    correct: (n, {treeScale: l, projectionDelta: i}) => {
        const o = n
          , c = On.parse(n);
        if (c.length > 5)
            return o;
        const h = On.createTransformer(n)
          , f = typeof c[0] != "number" ? 1 : 0
          , m = i.x.scale * l.x
          , p = i.y.scale * l.y;
        c[0 + f] /= m,
        c[1 + f] /= p;
        const g = nt(m, p, .5);
        return typeof c[2 + f] == "number" && (c[2 + f] /= g),
        typeof c[3 + f] == "number" && (c[3 + f] /= g),
        h(c)
    }
};
class KS extends T.Component {
    componentDidMount() {
        const {visualElement: l, layoutGroup: i, switchLayoutGroup: o, layoutId: c} = this.props
          , {projection: h} = l;
        M2(ZS),
        h && (i.group && i.group.add(h),
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
        Yo.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(l) {
        const {layoutDependency: i, visualElement: o, drag: c, isPresent: h} = this.props
          , {projection: f} = o;
        return f && (f.isPresent = h,
        c || l.layoutDependency !== i || i === void 0 || l.isPresent !== h ? f.willUpdate() : this.safeToRemove(),
        l.isPresent !== h && (h ? f.promote() : f.relegate() || lt.postRender( () => {
            const m = f.getStack();
            (!m || !m.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: l} = this.props.visualElement;
        l && (l.root.didUpdate(),
        bf.postRender( () => {
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
function h0(n) {
    const [l,i] = ky()
      , o = T.useContext(Jc);
    return d.jsx(KS, {
        ...n,
        layoutGroup: o,
        switchLayoutGroup: T.useContext(Xy),
        isPresent: l,
        safeToRemove: i
    })
}
const ZS = {
    borderRadius: {
        ...$i,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: $i,
    borderTopRightRadius: $i,
    borderBottomLeftRadius: $i,
    borderBottomRightRadius: $i,
    boxShadow: XS
};
function QS(n, l, i) {
    const o = kt(n) ? n : Zl(n);
    return o.start(_f("", o, l, i)),
    o.animation
}
const FS = (n, l) => n.depth - l.depth;
class JS {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(l) {
        Wc(this.children, l),
        this.isDirty = !0
    }
    remove(l) {
        ef(this.children, l),
        this.isDirty = !0
    }
    forEach(l) {
        this.isDirty && this.children.sort(FS),
        this.isDirty = !1,
        this.children.forEach(l)
    }
}
function IS(n, l) {
    const i = Ft.now()
      , o = ({timestamp: c}) => {
        const h = c - i;
        h >= l && (_n(o),
        n(h - l))
    }
    ;
    return lt.setup(o, !0),
    () => _n(o)
}
const m0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , $S = m0.length
  , hg = n => typeof n == "string" ? parseFloat(n) : n
  , mg = n => typeof n == "number" || xe.test(n);
function WS(n, l, i, o, c, h) {
    c ? (n.opacity = nt(0, i.opacity ?? 1, eT(o)),
    n.opacityExit = nt(l.opacity ?? 1, 0, tT(o))) : h && (n.opacity = nt(l.opacity ?? 1, i.opacity ?? 1, o));
    for (let f = 0; f < $S; f++) {
        const m = `border${m0[f]}Radius`;
        let p = pg(l, m)
          , g = pg(i, m);
        if (p === void 0 && g === void 0)
            continue;
        p || (p = 0),
        g || (g = 0),
        p === 0 || g === 0 || mg(p) === mg(g) ? (n[m] = Math.max(nt(hg(p), hg(g), o), 0),
        (La.test(g) || La.test(p)) && (n[m] += "%")) : n[m] = g
    }
    (l.rotate || i.rotate) && (n.rotate = nt(l.rotate || 0, i.rotate || 0, o))
}
function pg(n, l) {
    return n[l] !== void 0 ? n[l] : n.borderRadius
}
const eT = p0(0, .5, sy)
  , tT = p0(.5, .95, ba);
function p0(n, l, i) {
    return o => o < n ? 0 : o > l ? 1 : i(ss(n, l, o))
}
function gg(n, l) {
    n.min = l.min,
    n.max = l.max
}
function ga(n, l) {
    gg(n.x, l.x),
    gg(n.y, l.y)
}
function yg(n, l) {
    n.translate = l.translate,
    n.scale = l.scale,
    n.originPoint = l.originPoint,
    n.origin = l.origin
}
function vg(n, l, i, o, c) {
    return n -= l,
    n = Qo(n, 1 / i, o),
    c !== void 0 && (n = Qo(n, 1 / c, o)),
    n
}
function aT(n, l=0, i=1, o=.5, c, h=n, f=n) {
    if (La.test(l) && (l = parseFloat(l),
    l = nt(f.min, f.max, l / 100) - f.min),
    typeof l != "number")
        return;
    let m = nt(h.min, h.max, o);
    n === h && (m -= l),
    n.min = vg(n.min, l, i, m, c),
    n.max = vg(n.max, l, i, m, c)
}
function xg(n, l, [i,o,c], h, f) {
    aT(n, l[i], l[o], l[c], l.scale, h, f)
}
const nT = ["x", "scaleX", "originX"]
  , lT = ["y", "scaleY", "originY"];
function bg(n, l, i, o) {
    xg(n.x, l, nT, i ? i.x : void 0, o ? o.x : void 0),
    xg(n.y, l, lT, i ? i.y : void 0, o ? o.y : void 0)
}
function Sg(n) {
    return n.translate === 0 && n.scale === 1
}
function g0(n) {
    return Sg(n.x) && Sg(n.y)
}
function Tg(n, l) {
    return n.min === l.min && n.max === l.max
}
function iT(n, l) {
    return Tg(n.x, l.x) && Tg(n.y, l.y)
}
function jg(n, l) {
    return Math.round(n.min) === Math.round(l.min) && Math.round(n.max) === Math.round(l.max)
}
function y0(n, l) {
    return jg(n.x, l.x) && jg(n.y, l.y)
}
function wg(n) {
    return qt(n.x) / qt(n.y)
}
function Ag(n, l) {
    return n.translate === l.translate && n.scale === l.scale && n.originPoint === l.originPoint
}
class sT {
    constructor() {
        this.members = []
    }
    add(l) {
        Wc(this.members, l),
        l.scheduleRender()
    }
    remove(l) {
        if (ef(this.members, l),
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
            const h = this.members[c];
            if (h.isPresent !== !1) {
                o = h;
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
function oT(n, l, i) {
    let o = "";
    const c = n.x.translate / l.x
      , h = n.y.translate / l.y
      , f = (i == null ? void 0 : i.z) || 0;
    if ((c || h || f) && (o = `translate3d(${c}px, ${h}px, ${f}px) `),
    (l.x !== 1 || l.y !== 1) && (o += `scale(${1 / l.x}, ${1 / l.y}) `),
    i) {
        const {transformPerspective: g, rotate: v, rotateX: x, rotateY: S, skewX: w, skewY: C} = i;
        g && (o = `perspective(${g}px) ${o}`),
        v && (o += `rotate(${v}deg) `),
        x && (o += `rotateX(${x}deg) `),
        S && (o += `rotateY(${S}deg) `),
        w && (o += `skewX(${w}deg) `),
        C && (o += `skewY(${C}deg) `)
    }
    const m = n.x.scale * l.x
      , p = n.y.scale * l.y;
    return (m !== 1 || p !== 1) && (o += `scale(${m}, ${p})`),
    o || "none"
}
const jc = ["", "X", "Y", "Z"]
  , rT = {
    visibility: "hidden"
}
  , uT = 1e3;
let cT = 0;
function wc(n, l, i, o) {
    const {latestValues: c} = l;
    c[n] && (i[n] = c[n],
    l.setStaticValue(n, 0),
    o && (o[n] = 0))
}
function v0(n) {
    if (n.hasCheckedOptimisedAppear = !0,
    n.root === n)
        return;
    const {visualElement: l} = n.options;
    if (!l)
        return;
    const i = e0(l);
    if (window.MotionHasOptimisedAnimation(i, "transform")) {
        const {layout: c, layoutId: h} = n.options;
        window.MotionCancelOptimisedAnimation(i, "transform", lt, !(c || h))
    }
    const {parent: o} = n;
    o && !o.hasCheckedOptimisedAppear && v0(o)
}
function x0({attachResizeListener: n, defaultParent: l, measureScroll: i, checkIsScrollRoot: o, resetTransform: c}) {
    return class {
        constructor(f={}, m=l == null ? void 0 : l()) {
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
            this.latestValues = f,
            this.root = m ? m.root || m : this,
            this.path = m ? [...m.path, m] : [],
            this.parent = m,
            this.depth = m ? m.depth + 1 : 0;
            for (let p = 0; p < this.path.length; p++)
                this.path[p].shouldResetTransform = !0;
            this.root === this && (this.nodes = new JS)
        }
        addEventListener(f, m) {
            return this.eventHandlers.has(f) || this.eventHandlers.set(f, new nf),
            this.eventHandlers.get(f).add(m)
        }
        notifyListeners(f, ...m) {
            const p = this.eventHandlers.get(f);
            p && p.notify(...m)
        }
        hasListeners(f) {
            return this.eventHandlers.has(f)
        }
        mount(f) {
            if (this.instance)
                return;
            this.isSVG = Ly(f) && !o2(f),
            this.instance = f;
            const {layoutId: m, layout: p, visualElement: g} = this.options;
            if (g && !g.current && g.mount(f),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (p || m) && (this.isLayoutDirty = !0),
            n) {
                let v;
                const x = () => this.root.updateBlockedByResize = !1;
                n(f, () => {
                    this.root.updateBlockedByResize = !0,
                    v && v(),
                    v = IS(x, 250),
                    Yo.hasAnimatedSinceResize && (Yo.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Eg))
                }
                )
            }
            m && this.root.registerSharedNode(m, this),
            this.options.animate !== !1 && g && (m || p) && this.addEventListener("didUpdate", ({delta: v, hasLayoutChanged: x, hasRelativeLayoutChanged: S, layout: w}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const C = this.options.transition || g.getDefaultTransition() || wT
                  , {onLayoutAnimationStart: D, onLayoutAnimationComplete: M} = g.getProps()
                  , U = !this.targetLayout || !y0(this.targetLayout, w)
                  , P = !x && S;
                if (this.options.layoutRoot || this.resumeFrom || P || x && (U || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0);
                    const B = {
                        ...vf(C, "layout"),
                        onPlay: D,
                        onComplete: M
                    };
                    (g.shouldReduceMotion || this.options.layoutRoot) && (B.delay = 0,
                    B.type = !1),
                    this.startAnimation(B),
                    this.setAnimationOrigin(v, P)
                } else
                    x || Eg(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = w
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const f = this.getStack();
            f && f.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            this.eventHandlers.clear(),
            _n(this.updateProjection)
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
            const {visualElement: f} = this.options;
            return f && f.getProps().transformTemplate
        }
        willUpdate(f=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && v0(this),
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
            const {layoutId: m, layout: p} = this.options;
            if (m === void 0 && !p)
                return;
            const g = this.getTransformTemplate();
            this.prevTransformTemplateValue = g ? g(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            f && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Ng);
                return
            }
            this.isUpdating || this.nodes.forEach(gT),
            this.isUpdating = !1,
            this.nodes.forEach(yT),
            this.nodes.forEach(fT),
            this.nodes.forEach(dT),
            this.clearAllSnapshots();
            const m = Ft.now();
            Vt.delta = nn(0, 1e3 / 60, m - Vt.timestamp),
            Vt.timestamp = m,
            Vt.isProcessing = !0,
            mc.update.process(Vt),
            mc.preRender.process(Vt),
            mc.render.process(Vt),
            Vt.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            bf.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(pT),
            this.sharedNodes.forEach(ST)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            lt.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            lt.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
            this.snapshot && !qt(this.snapshot.measuredBox.x) && !qt(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let p = 0; p < this.path.length; p++)
                    this.path[p].updateScroll();
            const f = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = pt(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: m} = this.options;
            m && m.notify("LayoutMeasure", this.layout.layoutBox, f ? f.layoutBox : void 0)
        }
        updateScroll(f="measure") {
            let m = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === f && (m = !1),
            m && this.instance) {
                const p = o(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: f,
                    isRoot: p,
                    offset: i(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : p
                }
            }
        }
        resetTransform() {
            if (!c)
                return;
            const f = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , m = this.projectionDelta && !g0(this.projectionDelta)
              , p = this.getTransformTemplate()
              , g = p ? p(this.latestValues, "") : void 0
              , v = g !== this.prevTransformTemplateValue;
            f && this.instance && (m || Wn(this.latestValues) || v) && (c(this.instance, g),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(f=!0) {
            const m = this.measurePageBox();
            let p = this.removeElementScroll(m);
            return f && (p = this.removeTransform(p)),
            AT(p),
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
            const {visualElement: f} = this.options;
            if (!f)
                return pt();
            const m = f.measureViewportBox();
            if (!(((g = this.scroll) == null ? void 0 : g.wasRoot) || this.path.some(NT))) {
                const {scroll: v} = this.root;
                v && (Xl(m.x, v.offset.x),
                Xl(m.y, v.offset.y))
            }
            return m
        }
        removeElementScroll(f) {
            var p;
            const m = pt();
            if (ga(m, f),
            (p = this.scroll) != null && p.wasRoot)
                return m;
            for (let g = 0; g < this.path.length; g++) {
                const v = this.path[g]
                  , {scroll: x, options: S} = v;
                v !== this.root && x && S.layoutScroll && (x.wasRoot && ga(m, f),
                Xl(m.x, x.offset.x),
                Xl(m.y, x.offset.y))
            }
            return m
        }
        applyTransform(f, m=!1) {
            const p = pt();
            ga(p, f);
            for (let g = 0; g < this.path.length; g++) {
                const v = this.path[g];
                !m && v.options.layoutScroll && v.scroll && v !== v.root && Kl(p, {
                    x: -v.scroll.offset.x,
                    y: -v.scroll.offset.y
                }),
                Wn(v.latestValues) && Kl(p, v.latestValues)
            }
            return Wn(this.latestValues) && Kl(p, this.latestValues),
            p
        }
        removeTransform(f) {
            const m = pt();
            ga(m, f);
            for (let p = 0; p < this.path.length; p++) {
                const g = this.path[p];
                if (!g.instance || !Wn(g.latestValues))
                    continue;
                Yc(g.latestValues) && g.updateSnapshot();
                const v = pt()
                  , x = g.measurePageBox();
                ga(v, x),
                bg(m, g.latestValues, g.snapshot ? g.snapshot.layoutBox : void 0, v)
            }
            return Wn(this.latestValues) && bg(m, this.latestValues),
            m
        }
        setTargetDelta(f) {
            this.targetDelta = f,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(f) {
            this.options = {
                ...this.options,
                ...f,
                crossfade: f.crossfade !== void 0 ? f.crossfade : !0
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
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Vt.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(f=!1) {
            var S;
            const m = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = m.isSharedProjectionDirty);
            const p = !!this.resumingFrom || this !== m;
            if (!(f || p && this.isSharedProjectionDirty || this.isProjectionDirty || (S = this.parent) != null && S.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: v, layoutId: x} = this.options;
            if (!(!this.layout || !(v || x))) {
                if (this.resolvedRelativeTargetAt = Vt.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const w = this.getClosestProjectingParent();
                    w && w.layout && this.animationProgress !== 1 ? (this.relativeParent = w,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = pt(),
                    this.relativeTargetOrigin = pt(),
                    is(this.relativeTargetOrigin, this.layout.layoutBox, w.layout.layoutBox),
                    ga(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = pt(),
                this.targetWithTransforms = pt()),
                this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                CS(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : ga(this.target, this.layout.layoutBox),
                r0(this.target, this.targetDelta)) : ga(this.target, this.layout.layoutBox),
                this.attemptToResolveRelativeTarget)) {
                    this.attemptToResolveRelativeTarget = !1;
                    const w = this.getClosestProjectingParent();
                    w && !!w.resumingFrom == !!this.resumingFrom && !w.options.layoutScroll && w.target && this.animationProgress !== 1 ? (this.relativeParent = w,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = pt(),
                    this.relativeTargetOrigin = pt(),
                    is(this.relativeTargetOrigin, this.target, w.target),
                    ga(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Yc(this.parent.latestValues) || o0(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var C;
            const f = this.getLead()
              , m = !!this.resumingFrom || this !== f;
            let p = !0;
            if ((this.isProjectionDirty || (C = this.parent) != null && C.isProjectionDirty) && (p = !1),
            m && (this.isSharedProjectionDirty || this.isTransformDirty) && (p = !1),
            this.resolvedRelativeTargetAt === Vt.timestamp && (p = !1),
            p)
                return;
            const {layout: g, layoutId: v} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(g || v))
                return;
            ga(this.layoutCorrected, this.layout.layoutBox);
            const x = this.treeScale.x
              , S = this.treeScale.y;
            DS(this.layoutCorrected, this.treeScale, this.path, m),
            f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox,
            f.targetWithTransforms = pt());
            const {target: w} = f;
            if (!w) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (yg(this.prevProjectionDelta.x, this.projectionDelta.x),
            yg(this.prevProjectionDelta.y, this.projectionDelta.y)),
            ls(this.projectionDelta, this.layoutCorrected, w, this.latestValues),
            (this.treeScale.x !== x || this.treeScale.y !== S || !Ag(this.projectionDelta.x, this.prevProjectionDelta.x) || !Ag(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", w))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(f=!0) {
            var m;
            if ((m = this.options.visualElement) == null || m.scheduleRender(),
            f) {
                const p = this.getStack();
                p && p.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Gl(),
            this.projectionDelta = Gl(),
            this.projectionDeltaWithTransform = Gl()
        }
        setAnimationOrigin(f, m=!1) {
            const p = this.snapshot
              , g = p ? p.latestValues : {}
              , v = {
                ...this.latestValues
            }
              , x = Gl();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !m;
            const S = pt()
              , w = p ? p.source : void 0
              , C = this.layout ? this.layout.source : void 0
              , D = w !== C
              , M = this.getStack()
              , U = !M || M.members.length <= 1
              , P = !!(D && !U && this.options.crossfade === !0 && !this.path.some(jT));
            this.animationProgress = 0;
            let B;
            this.mixTargetDelta = G => {
                const R = G / 1e3;
                Cg(x.x, f.x, R),
                Cg(x.y, f.y, R),
                this.setTargetDelta(x),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (is(S, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                TT(this.relativeTarget, this.relativeTargetOrigin, S, R),
                B && iT(this.relativeTarget, B) && (this.isProjectionDirty = !1),
                B || (B = pt()),
                ga(B, this.relativeTarget)),
                D && (this.animationValues = v,
                WS(v, g, this.latestValues, R, P, U)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = R
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(f) {
            var m, p, g;
            this.notifyListeners("animationStart"),
            (m = this.currentAnimation) == null || m.stop(),
            (g = (p = this.resumingFrom) == null ? void 0 : p.currentAnimation) == null || g.stop(),
            this.pendingAnimation && (_n(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = lt.update( () => {
                Yo.hasAnimatedSinceResize = !0,
                this.motionValue || (this.motionValue = Zl(0)),
                this.currentAnimation = QS(this.motionValue, [0, 1e3], {
                    ...f,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: v => {
                        this.mixTargetDelta(v),
                        f.onUpdate && f.onUpdate(v)
                    }
                    ,
                    onStop: () => {}
                    ,
                    onComplete: () => {
                        f.onComplete && f.onComplete(),
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
            const f = this.getStack();
            f && f.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(uT),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const f = this.getLead();
            let {targetWithTransforms: m, target: p, layout: g, latestValues: v} = f;
            if (!(!m || !p || !g)) {
                if (this !== f && this.layout && g && b0(this.options.animationType, this.layout.layoutBox, g.layoutBox)) {
                    p = this.target || pt();
                    const x = qt(this.layout.layoutBox.x);
                    p.x.min = f.target.x.min,
                    p.x.max = p.x.min + x;
                    const S = qt(this.layout.layoutBox.y);
                    p.y.min = f.target.y.min,
                    p.y.max = p.y.min + S
                }
                ga(m, p),
                Kl(m, v),
                ls(this.projectionDeltaWithTransform, this.layoutCorrected, m, v)
            }
        }
        registerSharedNode(f, m) {
            this.sharedNodes.has(f) || this.sharedNodes.set(f, new sT),
            this.sharedNodes.get(f).add(m);
            const g = m.options.initialPromotionConfig;
            m.promote({
                transition: g ? g.transition : void 0,
                preserveFollowOpacity: g && g.shouldPreserveFollowOpacity ? g.shouldPreserveFollowOpacity(m) : void 0
            })
        }
        isLead() {
            const f = this.getStack();
            return f ? f.lead === this : !0
        }
        getLead() {
            var m;
            const {layoutId: f} = this.options;
            return f ? ((m = this.getStack()) == null ? void 0 : m.lead) || this : this
        }
        getPrevLead() {
            var m;
            const {layoutId: f} = this.options;
            return f ? (m = this.getStack()) == null ? void 0 : m.prevLead : void 0
        }
        getStack() {
            const {layoutId: f} = this.options;
            if (f)
                return this.root.sharedNodes.get(f)
        }
        promote({needsReset: f, transition: m, preserveFollowOpacity: p}={}) {
            const g = this.getStack();
            g && g.promote(this, p),
            f && (this.projectionDelta = void 0,
            this.needsReset = !0),
            m && this.setOptions({
                transition: m
            })
        }
        relegate() {
            const f = this.getStack();
            return f ? f.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: f} = this.options;
            if (!f)
                return;
            let m = !1;
            const {latestValues: p} = f;
            if ((p.z || p.rotate || p.rotateX || p.rotateY || p.rotateZ || p.skewX || p.skewY) && (m = !0),
            !m)
                return;
            const g = {};
            p.z && wc("z", f, g, this.animationValues);
            for (let v = 0; v < jc.length; v++)
                wc(`rotate${jc[v]}`, f, g, this.animationValues),
                wc(`skew${jc[v]}`, f, g, this.animationValues);
            f.render();
            for (const v in g)
                f.setStaticValue(v, g[v]),
                this.animationValues && (this.animationValues[v] = g[v]);
            f.scheduleRender()
        }
        getProjectionStyles(f) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return rT;
            const m = {
                visibility: ""
            }
              , p = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                m.opacity = "",
                m.pointerEvents = qo(f == null ? void 0 : f.pointerEvents) || "",
                m.transform = p ? p(this.latestValues, "") : "none",
                m;
            const g = this.getLead();
            if (!this.projectionDelta || !this.layout || !g.target) {
                const w = {};
                return this.options.layoutId && (w.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                w.pointerEvents = qo(f == null ? void 0 : f.pointerEvents) || ""),
                this.hasProjected && !Wn(this.latestValues) && (w.transform = p ? p({}, "") : "none",
                this.hasProjected = !1),
                w
            }
            const v = g.animationValues || g.latestValues;
            this.applyTransformsToTarget(),
            m.transform = oT(this.projectionDeltaWithTransform, this.treeScale, v),
            p && (m.transform = p(v, m.transform));
            const {x, y: S} = this.projectionDelta;
            m.transformOrigin = `${x.origin * 100}% ${S.origin * 100}% 0`,
            g.animationValues ? m.opacity = g === this ? v.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : v.opacityExit : m.opacity = g === this ? v.opacity !== void 0 ? v.opacity : "" : v.opacityExit !== void 0 ? v.opacityExit : 0;
            for (const w in cs) {
                if (v[w] === void 0)
                    continue;
                const {correct: C, applyTo: D, isCSSVariable: M} = cs[w]
                  , U = m.transform === "none" ? v[w] : C(v[w], g);
                if (D) {
                    const P = D.length;
                    for (let B = 0; B < P; B++)
                        m[D[B]] = U
                } else
                    M ? this.options.visualElement.renderState.vars[w] = U : m[w] = U
            }
            return this.options.layoutId && (m.pointerEvents = g === this ? qo(f == null ? void 0 : f.pointerEvents) || "" : "none"),
            m
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(f => {
                var m;
                return (m = f.currentAnimation) == null ? void 0 : m.stop()
            }
            ),
            this.root.nodes.forEach(Ng),
            this.root.sharedNodes.clear()
        }
    }
}
function fT(n) {
    n.updateLayout()
}
function dT(n) {
    var i;
    const l = ((i = n.resumeFrom) == null ? void 0 : i.snapshot) || n.snapshot;
    if (n.isLead() && n.layout && l && n.hasListeners("didUpdate")) {
        const {layoutBox: o, measuredBox: c} = n.layout
          , {animationType: h} = n.options
          , f = l.source !== n.layout.source;
        h === "size" ? va(x => {
            const S = f ? l.measuredBox[x] : l.layoutBox[x]
              , w = qt(S);
            S.min = o[x].min,
            S.max = S.min + w
        }
        ) : b0(h, l.layoutBox, o) && va(x => {
            const S = f ? l.measuredBox[x] : l.layoutBox[x]
              , w = qt(o[x]);
            S.max = S.min + w,
            n.relativeTarget && !n.currentAnimation && (n.isProjectionDirty = !0,
            n.relativeTarget[x].max = n.relativeTarget[x].min + w)
        }
        );
        const m = Gl();
        ls(m, o, l.layoutBox);
        const p = Gl();
        f ? ls(p, n.applyTransform(c, !0), l.measuredBox) : ls(p, o, l.layoutBox);
        const g = !g0(m);
        let v = !1;
        if (!n.resumeFrom) {
            const x = n.getClosestProjectingParent();
            if (x && !x.resumeFrom) {
                const {snapshot: S, layout: w} = x;
                if (S && w) {
                    const C = pt();
                    is(C, l.layoutBox, S.layoutBox);
                    const D = pt();
                    is(D, o, w.layoutBox),
                    y0(C, D) || (v = !0),
                    x.options.layoutRoot && (n.relativeTarget = D,
                    n.relativeTargetOrigin = C,
                    n.relativeParent = x)
                }
            }
        }
        n.notifyListeners("didUpdate", {
            layout: o,
            snapshot: l,
            delta: p,
            layoutDelta: m,
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
function Ng(n) {
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
function Eg(n) {
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
function Cg(n, l, i) {
    n.translate = nt(l.translate, 0, i),
    n.scale = nt(l.scale, 1, i),
    n.origin = l.origin,
    n.originPoint = l.originPoint
}
function Dg(n, l, i, o) {
    n.min = nt(l.min, i.min, o),
    n.max = nt(l.max, i.max, o)
}
function TT(n, l, i, o) {
    Dg(n.x, l.x, i.x, o),
    Dg(n.y, l.y, i.y, o)
}
function jT(n) {
    return n.animationValues && n.animationValues.opacityExit !== void 0
}
const wT = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Mg = n => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n)
  , _g = Mg("applewebkit/") && !Mg("chrome/") ? Math.round : ba;
function Og(n) {
    n.min = _g(n.min),
    n.max = _g(n.max)
}
function AT(n) {
    Og(n.x),
    Og(n.y)
}
function b0(n, l, i) {
    return n === "position" || n === "preserve-aspect" && !ES(wg(l), wg(i), .2)
}
function NT(n) {
    var l;
    return n !== n.root && ((l = n.scroll) == null ? void 0 : l.wasRoot)
}
const ET = x0({
    attachResizeListener: (n, l) => ds(n, "resize", l),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , Ac = {
    current: void 0
}
  , S0 = x0({
    measureScroll: n => ({
        x: n.scrollLeft,
        y: n.scrollTop
    }),
    defaultParent: () => {
        if (!Ac.current) {
            const n = new ET({});
            n.mount(window),
            n.setOptions({
                layoutScroll: !0
            }),
            Ac.current = n
        }
        return Ac.current
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
        ProjectionNode: S0,
        MeasureLayout: h0
    }
};
function Rg(n, l, i) {
    const {props: o} = n;
    n.animationState && o.whileHover && n.animationState.setActive("whileHover", i === "Start");
    const c = "onHover" + i
      , h = o[c];
    h && lt.postRender( () => h(l, vs(l)))
}
class DT extends Rn {
    mount() {
        const {current: l} = this.node;
        l && (this.unmount = a2(l, (i, o) => (Rg(this.node, o, "Start"),
        c => Rg(this.node, c, "End"))))
    }
    unmount() {}
}
class MT extends Rn {
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
        this.unmount = ps(ds(this.node.current, "focus", () => this.onFocus()), ds(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function Vg(n, l, i) {
    const {props: o} = n;
    if (n.current instanceof HTMLButtonElement && n.current.disabled)
        return;
    n.animationState && o.whileTap && n.animationState.setActive("whileTap", i === "Start");
    const c = "onTap" + (i === "End" ? "" : i)
      , h = o[c];
    h && lt.postRender( () => h(l, vs(l)))
}
class _T extends Rn {
    mount() {
        const {current: l} = this.node;
        l && (this.unmount = s2(l, (i, o) => (Vg(this.node, o, "Start"),
        (c, {success: h}) => Vg(this.node, c, h ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const Kc = new WeakMap
  , Nc = new WeakMap
  , OT = n => {
    const l = Kc.get(n.target);
    l && l(n)
}
  , RT = n => {
    n.forEach(OT)
}
;
function VT({root: n, ...l}) {
    const i = n || document;
    Nc.has(i) || Nc.set(i, {});
    const o = Nc.get(i)
      , c = JSON.stringify(l);
    return o[c] || (o[c] = new IntersectionObserver(RT,{
        root: n,
        ...l
    })),
    o[c]
}
function zT(n, l, i) {
    const o = VT(l);
    return Kc.set(n, i),
    o.observe(n),
    () => {
        Kc.delete(n),
        o.unobserve(n)
    }
}
const UT = {
    some: 0,
    all: 1
};
class BT extends Rn {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: l={}} = this.node.getProps()
          , {root: i, margin: o, amount: c="some", once: h} = l
          , f = {
            root: i ? i.current : void 0,
            rootMargin: o,
            threshold: typeof c == "number" ? c : UT[c]
        }
          , m = p => {
            const {isIntersecting: g} = p;
            if (this.isInView === g || (this.isInView = g,
            h && !g && this.hasEnteredView))
                return;
            g && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", g);
            const {onViewportEnter: v, onViewportLeave: x} = this.node.getProps()
              , S = g ? v : x;
            S && S(p)
        }
        ;
        return zT(this.node.current, f, m)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: l, prevProps: i} = this.node;
        ["amount", "margin", "root"].some(LT(l, i)) && this.startObserver()
    }
    unmount() {}
}
function LT({viewport: n={}}, {viewport: l={}}={}) {
    return i => n[i] !== l[i]
}
const kT = {
    inView: {
        Feature: BT
    },
    tap: {
        Feature: _T
    },
    focus: {
        Feature: MT
    },
    hover: {
        Feature: DT
    }
}
  , HT = {
    layout: {
        ProjectionNode: S0,
        MeasureLayout: h0
    }
}
  , Zc = {
    current: null
}
  , T0 = {
    current: !1
};
function PT() {
    if (T0.current = !0,
    !!$c)
        if (window.matchMedia) {
            const n = window.matchMedia("(prefers-reduced-motion)")
              , l = () => Zc.current = n.matches;
            n.addListener(l),
            l()
        } else
            Zc.current = !1
}
const qT = new WeakMap;
function YT(n, l, i) {
    for (const o in l) {
        const c = l[o]
          , h = i[o];
        if (kt(c))
            n.addValue(o, c);
        else if (kt(h))
            n.addValue(o, Zl(c, {
                owner: n
            }));
        else if (h !== c)
            if (n.hasValue(o)) {
                const f = n.getValue(o);
                f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c)
            } else {
                const f = n.getStaticValue(o);
                n.addValue(o, Zl(f !== void 0 ? f : c, {
                    owner: n
                }))
            }
    }
    for (const o in i)
        l[o] === void 0 && n.removeValue(o);
    return l
}
const zg = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class GT {
    scrapeMotionValuesFromProps(l, i, o) {
        return {}
    }
    constructor({parent: l, props: i, presenceContext: o, reducedMotionConfig: c, blockInitialAnimation: h, visualState: f}, m={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = gf,
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
            lt.render(this.render, !1, !0))
        }
        ;
        const {latestValues: p, renderState: g} = f;
        this.latestValues = p,
        this.baseTarget = {
            ...p
        },
        this.initialValues = i.initial ? {
            ...p
        } : {},
        this.renderState = g,
        this.parent = l,
        this.props = i,
        this.presenceContext = o,
        this.depth = l ? l.depth + 1 : 0,
        this.reducedMotionConfig = c,
        this.options = m,
        this.blockInitialAnimation = !!h,
        this.isControllingVariants = Wo(i),
        this.isVariantNode = Yy(i),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(l && l.current);
        const {willChange: v, ...x} = this.scrapeMotionValuesFromProps(i, {}, this);
        for (const S in x) {
            const w = x[S];
            p[S] !== void 0 && kt(w) && w.set(p[S], !1)
        }
    }
    mount(l) {
        this.current = l,
        qT.set(l, this),
        this.projection && !this.projection.instance && this.projection.mount(l),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (i, o) => this.bindToMotionValue(o, i)),
        T0.current || PT(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Zc.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        this.projection && this.projection.unmount(),
        _n(this.notifyUpdate),
        _n(this.render),
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
        const o = Il.has(l);
        o && this.onBindTransform && this.onBindTransform();
        const c = i.on("change", m => {
            this.latestValues[l] = m,
            this.props.onUpdate && lt.preRender(this.notifyUpdate),
            o && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , h = i.on("renderRequest", this.scheduleRender);
        let f;
        window.MotionCheckAppearSync && (f = window.MotionCheckAppearSync(this, l, i)),
        this.valueSubscriptions.set(l, () => {
            c(),
            h(),
            f && f(),
            i.owner && i.stop()
        }
        )
    }
    sortNodePosition(l) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== l.type ? 0 : this.sortInstanceNodePosition(this.current, l.current)
    }
    updateFeatures() {
        let l = "animation";
        for (l in Ql) {
            const i = Ql[l];
            if (!i)
                continue;
            const {isEnabled: o, Feature: c} = i;
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
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : pt()
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
        for (let o = 0; o < zg.length; o++) {
            const c = zg[o];
            this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](),
            delete this.propEventSubscriptions[c]);
            const h = "on" + c
              , f = l[h];
            f && (this.propEventSubscriptions[c] = this.on(c, f))
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
        return o === void 0 && i !== void 0 && (o = Zl(i === null ? void 0 : i, {
            owner: this
        }),
        this.addValue(l, o)),
        o
    }
    readValue(l, i) {
        let o = this.latestValues[l] !== void 0 || !this.current ? this.latestValues[l] : this.getBaseTargetFromProps(this.props, l) ?? this.readValueFromInstance(this.current, l, this.options);
        return o != null && (typeof o == "string" && (Jg(o) || $g(o)) ? o = parseFloat(o) : !u2(o) && On.test(i) && (o = Ry(l, i)),
        this.setBaseTarget(l, kt(o) ? o.get() : o)),
        kt(o) ? o.get() : o
    }
    setBaseTarget(l, i) {
        this.baseTarget[l] = i
    }
    getBaseTarget(l) {
        var h;
        const {initial: i} = this.props;
        let o;
        if (typeof i == "string" || typeof i == "object") {
            const f = Df(this.props, i, (h = this.presenceContext) == null ? void 0 : h.custom);
            f && (o = f[l])
        }
        if (i && o !== void 0)
            return o;
        const c = this.getBaseTargetFromProps(this.props, l);
        return c !== void 0 && !kt(c) ? c : this.initialValues[l] !== void 0 && o === void 0 ? void 0 : this.baseTarget[l]
    }
    on(l, i) {
        return this.events[l] || (this.events[l] = new nf),
        this.events[l].add(i)
    }
    notify(l, ...i) {
        this.events[l] && this.events[l].notify(...i)
    }
}
class j0 extends GT {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = I1
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
        kt(l) && (this.childSubscription = l.on("change", i => {
            this.current && (this.current.textContent = `${i}`)
        }
        ))
    }
}
function w0(n, {style: l, vars: i}, o, c) {
    Object.assign(n.style, l, c && c.getProjectionStyles(o));
    for (const h in i)
        n.style.setProperty(h, i[h])
}
function XT(n) {
    return window.getComputedStyle(n)
}
class KT extends j0 {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = w0
    }
    readValueFromInstance(l, i) {
        var o;
        if (Il.has(i))
            return (o = this.projection) != null && o.isProjecting ? Vc(i) : g1(l, i);
        {
            const c = XT(l)
              , h = (of(i) ? c.getPropertyValue(i) : c[i]) || 0;
            return typeof h == "string" ? h.trim() : h
        }
    }
    measureInstanceViewportBox(l, {transformPagePoint: i}) {
        return u0(l, i)
    }
    build(l, i, o) {
        Nf(l, i, o.transformTemplate)
    }
    scrapeMotionValuesFromProps(l, i, o) {
        return Mf(l, i, o)
    }
}
const A0 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function ZT(n, l, i, o) {
    w0(n, l, void 0, o);
    for (const c in l.attrs)
        n.setAttribute(A0.has(c) ? c : Af(c), l.attrs[c])
}
class QT extends j0 {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = pt
    }
    getBaseTargetFromProps(l, i) {
        return l[i]
    }
    readValueFromInstance(l, i) {
        if (Il.has(i)) {
            const o = Oy(i);
            return o && o.default || 0
        }
        return i = A0.has(i) ? i : Af(i),
        l.getAttribute(i)
    }
    scrapeMotionValuesFromProps(l, i, o) {
        return Wy(l, i, o)
    }
    build(l, i, o) {
        Fy(l, i, this.isSVGTag, o.transformTemplate, o.style)
    }
    renderInstance(l, i, o, c) {
        ZT(l, i, o, c)
    }
    mount(l) {
        this.isSVGTag = Iy(l.tagName),
        super.mount(l)
    }
}
const FT = (n, l) => Cf(n) ? new QT(l) : new KT(l,{
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
    return d.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 72 72",
        width: "1.5em",
        height: "1.5em",
        children: [d.jsx("path", {
            fill: "#ea5a47",
            d: "M63.874 21.906a7.31 7.31 0 0 0-5.144-5.177C54.193 15.505 36 15.505 36 15.505s-18.193 0-22.73 1.224a7.31 7.31 0 0 0-5.144 5.177C6.91 26.472 6.91 36 6.91 36s0 9.528 1.216 14.095a7.31 7.31 0 0 0 5.144 5.177C17.807 56.495 36 56.495 36 56.495s18.193 0 22.73-1.223a7.31 7.31 0 0 0 5.144-5.177C65.09 45.528 65.09 36 65.09 36s0-9.528-1.216-14.094"
        }), d.jsx("path", {
            fill: "#fff",
            d: "M30.05 44.65L45.256 36L30.05 27.35Z"
        }), d.jsxs("g", {
            fill: "none",
            stroke: "#000",
            strokeMiterlimit: "10",
            strokeWidth: "2",
            children: [d.jsx("path", {
                d: "M63.874 21.906a7.31 7.31 0 0 0-5.144-5.177C54.193 15.505 36 15.505 36 15.505s-18.193 0-22.73 1.224a7.31 7.31 0 0 0-5.144 5.177C6.91 26.472 6.91 36 6.91 36s0 9.528 1.216 14.095a7.31 7.31 0 0 0 5.144 5.177C17.807 56.495 36 56.495 36 56.495s18.193 0 22.73-1.223a7.31 7.31 0 0 0 5.144-5.177C65.09 45.528 65.09 36 65.09 36s0-9.528-1.216-14.094"
            }), d.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M30.05 44.65L45.256 36L30.05 27.35Z"
            })]
        })]
    })
}
function N0() {
    return d.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: "1em",
        height: "1em",
        children: d.jsx("path", {
            fill: "currentColor",
            d: "M14 8h-2.5L8 11.5L4.5 8H2l-2 4v1h16v-1zM0 14h16v1H0zm9-9V1H7v4H3.5L8 9.5L12.5 5z"
        })
    })
}
function E0() {
    return d.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "1em",
        height: "1em",
        children: d.jsx("path", {
            fill: "currentColor",
            d: "M2 8v9h4v4h12v-4h4V8zm14 11H8v-5h8zm3-7c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m-1-9H6v4h12z"
        })
    })
}
function $T() {
    return d.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        children: d.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M12 20a7.97 7.97 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.97 7.97 0 0 1 12 20M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12m10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7",
            clipRule: "evenodd"
        })
    })
}
function Ug() {
    return d.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 576",
        width: "1em",
        height: "1em",
        children: d.jsx("path", {
            fill: "currentColor",
            d: "m402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0m162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2M384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5"
        })
    })
}
function C0() {
    return d.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "3em",
        height: "3em",
        children: [d.jsx("path", {
            fill: "currentColor",
            d: "M20.48 3.512a11.97 11.97 0 0 0-8.486-3.514C5.366-.002-.007 5.371-.007 11.999c0 3.314 1.344 6.315 3.516 8.487A11.97 11.97 0 0 0 11.995 24c6.628 0 12.001-5.373 12.001-12.001c0-3.314-1.344-6.315-3.516-8.487m-1.542 15.427a9.8 9.8 0 0 1-6.943 2.876c-5.423 0-9.819-4.396-9.819-9.819a9.8 9.8 0 0 1 2.876-6.943a9.8 9.8 0 0 1 6.942-2.876c5.422 0 9.818 4.396 9.818 9.818a9.8 9.8 0 0 1-2.876 6.942z"
        }), d.jsx("path", {
            fill: "currentColor",
            d: "m13.537 12l3.855-3.855a1.091 1.091 0 0 0-1.542-1.541l.001-.001l-3.855 3.855l-3.855-3.855A1.091 1.091 0 0 0 6.6 8.145l-.001-.001l3.855 3.855l-3.855 3.855a1.091 1.091 0 1 0 1.541 1.542l.001-.001l3.855-3.855l3.855 3.855a1.091 1.091 0 1 0 1.542-1.541l-.001-.001z"
        })]
    })
}
const D0 = T.createContext({
    language: "en",
    setLanguage: () => {}
    ,
    translations: {}
})
  , WT = ({children: n}) => {
    const [l,i] = T.useState( () => localStorage.getItem("language") || "en")
      , [o,c] = T.useState({});
    return T.useEffect( () => {
        const f = JSON.parse(localStorage.getItem("initialData") || "{}").languages || {};
        c(f)
    }
    , [l]),
    T.useEffect( () => {
        localStorage.setItem("language", l)
    }
    , [l]),
    d.jsx(D0.Provider, {
        value: {
            language: l,
            setLanguage: i,
            translations: o
        },
        children: n
    })
}
  , ut = () => T.useContext(D0)
  , ej = () => {
    var h, f;
    const {language: n, setLanguage: l, translations: i} = ut()
      , [o,c] = T.useState([]);
    return T.useEffect( () => {
        const m = localStorage.getItem("initialData");
        if (m)
            try {
                const p = JSON.parse(m);
                c(p == null ? void 0 : p.notice)
            } catch (p) {
                console.error("Failed to parse initialData:", p)
            }
    }
    , []),
    d.jsxs("div", {
        className: "w-full bg-gray-800 text-white py-6 px-2 md:px-4 pb-12 flex flex-col h-full",
        children: [d.jsxs("div", {
            className: "mb-8",
            children: [d.jsx("h2", {
                className: "text-yellow-400 text-xl text-center font-bold mb-4 ",
                children: (h = i == null ? void 0 : i.lblInsTitle) == null ? void 0 : h[n]
            }), d.jsxs("a", {
                href: "https://www.youtube.com/watch?v=wsCPTU3giPo",
                target: "_blank",
                className: "flex hover-scale justify-center items-center gap-1 text-white text-xs mb-6 cursor-pointer hover:font-bold",
                children: [d.jsx(IT, {}), " ", (f = i == null ? void 0 : i.video_guide) == null ? void 0 : f[n]]
            }), d.jsxs("div", {
                className: "flex gap-2 justify-center items-center px-4 py-2",
                children: [d.jsx("button", {
                    onClick: () => l("en"),
                    className: `font-xs text-xs transition hover:cursor-pointer ${n === "en" ? "text-white bg-gray-400 px-2 py-2 rounded-md" : "text-gray-400 p-2 rounded-md hover:bg-gray-500"}`,
                    children: "English"
                }), d.jsx("button", {
                    onClick: () => l("bn"),
                    className: `font-medium text-xs transition hover:cursor-pointer ${n === "bn" ? "text-white bg-gray-400 px-2 py-2 rounded-md" : "text-gray-400 p-2 rounded-md hover:bg-gray-500"}`,
                    children: "বাংলা"
                })]
            })]
        }), d.jsx(oe.div, {
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
            children: d.jsx("div", {
                className: "space-y-2",
                children: o.map( (m, p) => d.jsxs("div", {
                    className: m.is_warning === 1 ? "text-red-400 text-justify border-[0.2px] p-2 rounded bg-red-500/5 capitalize" : m.is_warning === 2 ? "text-yellow-400 text-justify border-[0.2px] p-2 rounded bg-yellow-500/5 capitalize" : "text-white text-justify capitalize",
                    children: ["* ", m[n]]
                }, p))
            })
        })]
    })
}
  , tj = "https://api-payment.ivacbd.com";
async function Ye(n, l={}) {
    var i;
    try {
        const {method: o="GET", headers: c={}, body: h, token: f} = l
          , m = typeof FormData < "u" && h instanceof FormData
          , p = {
            ...m ? {} : {
                "Content-Type": "application/json"
            },
            ...c
        };
        f && (p.Authorization = `Bearer ${f}`);
        const g = `${tj}${n}`
          , v = await fetch(g, {
            method: o,
            headers: p,
            body: m ? h : h ? JSON.stringify(h) : void 0
        })
          , x = (i = v.headers.get("content-type")) == null ? void 0 : i.includes("application/json");
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
    var i, o, c, h;
    const {language: n, translations: l} = ut();
    return d.jsxs("div", {
        className: "relative w-full md:h-10 overflow-hidden shadow-md",
        children: [d.jsx("div", {
            className: "absolute inset-0 bg-yellow-50 transform -skew-x-12 origin-top-left scale-x-150 -translate-x-8"
        }), d.jsxs("div", {
            className: "relative z-10 flex md:items-center md:justify-between justify-start h-full md:pr-6 md:flex-row flex-col ",
            children: [d.jsx("div", {
                className: "flex-1 max-w-md",
                children: d.jsx("div", {
                    className: "trapezoid",
                    children: d.jsx("h1", {
                        className: "trapezoid-text text-white",
                        children: "INDIAN VISA APPLICATION FEE"
                    })
                })
            }), d.jsx("div", {
                className: "flex-1 flex md:justify-end",
                children: d.jsx("div", {
                    className: "px-4 py-2 rounded-sm",
                    children: d.jsxs("p", {
                        className: "text-black text-sm font-medium",
                        children: [(i = l == null ? void 0 : l.lblProceed) == null ? void 0 : i[n], " ", d.jsx("a", {
                            href: "https://api-payment.ivacbd.com/contents/user_manual.html",
                            target: "_blank",
                            className: "text-blue-600 hover:text-blue-800 font-semibold",
                            children: (o = l == null ? void 0 : l.user_manual) == null ? void 0 : o[n]
                        }), " ", (c = l == null ? void 0 : l.and) == null ? void 0 : c[n], " ", " ", d.jsx("a", {
                            href: "https://api-payment.ivacbd.com/contents/faq.html",
                            target: "_blank",
                            className: "text-blue-600 hover:text-blue-800 font-semibold",
                            children: (h = l == null ? void 0 : l.faq) == null ? void 0 : h[n]
                        })]
                    })
                })
            })]
        }), d.jsx("div", {
            className: "absolute top-0 right-0 w-2/3 h-full bg-yellow-50 -z-10"
        })]
    })
}
const nj = ({message: n, type: l="info", onClose: i}) => {
    const [o,c] = T.useState(!0)
      , [h,f] = T.useState(!1)
      , [m,p] = T.useState(5)
      , g = () => {
        c(!1),
        i && i()
    }
    ;
    if (T.useEffect( () => {
        let x;
        return m > 0 ? x = setTimeout( () => {
            p(S => S - 1)
        }
        , 1e3) : f(!0),
        () => {
            x && clearTimeout(x)
        }
    }
    , [m]),
    !o)
        return null;
    const v = {
        success: "bg-green-500 text-white",
        error: "bg-red-500 text-white",
        info: "bg-blue-500 text-white",
        warning: "bg-yellow-400 text-black"
    };
    return d.jsx(Hy, {
        children: o && d.jsx(oe.div, {
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
            children: d.jsxs("div", {
                className: `flex justify-center flex-col h-1/2 rounded-xl shadow-2xl p-6 max-w-md w-full mx-4 text-center ${v[l]}`,
                children: [d.jsxs("div", {
                    className: "flex flex-col justify-center items-center mb-4",
                    children: [d.jsx(C0, {}), d.jsx("p", {
                        className: "text-white font-bold text-2xl py-4",
                        children: "Error!"
                    })]
                }), d.jsx("span", {
                    className: "block mb-4",
                    children: n
                }), h ? d.jsx("button", {
                    onClick: g,
                    className: "mt-2 w-24 py-2 rounded bg-gray-500 text-white hover:bg-gray-600 mx-auto",
                    children: "OK"
                }) : d.jsxs("p", {
                    className: "text-sm text-white",
                    children: ["Please wait ", m, " seconds..."]
                })]
            })
        })
    })
}
  , zt = ({message: n, type: l="info", onClose: i}) => {
    const [o,c] = T.useState(!0)
      , h = () => {
        c(!1),
        i && i()
    }
    ;
    if (!o)
        return null;
    const f = {
        success: "bg-green-500 text-white",
        error: "bg-red-500 text-white",
        info: "bg-blue-500 text-white",
        warning: "bg-yellow-400 text-black"
    };
    return d.jsx(Hy, {
        children: o && d.jsx(oe.div, {
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
            children: d.jsxs("div", {
                className: `flex justify-center flex-col h-1/2 rounded-xl shadow-2xl p-6 max-w-md w-full mx-4 text-center ${f[l]}`,
                children: [d.jsxs("div", {
                    className: "flex flex-col justify-center items-center mb-4",
                    children: [d.jsx(C0, {}), d.jsx("p", {
                        className: "text-white font-bold text-2xl py-4",
                        children: "Error!"
                    })]
                }), d.jsx("span", {
                    className: "block mb-4",
                    children: n
                }), d.jsx("button", {
                    onClick: h,
                    className: "mt-2 w-24 py-2 rounded bg-gray-500 text-white hover:bg-gray-600 mx-auto",
                    children: "OK"
                })]
            })
        })
    })
}
  , lj = "/assets/sib_logo-BmWytU9-.png"
  , ij = "/assets/sslwireless_logo-D0EMAZ9R.svg"
  , M0 = "/assets/page_bg-BE0EAheg.jpg"
  , sj = "/assets/SSLCommerzLogo-DJTqXlmx.svg"
  , oj = ({message: n}) => d.jsx("div", {
    className: "fixed h-screen bg-cover bg-center inset-0 z-50 flex items-center justify-center ",
    style: {
        backgroundImage: `url(${M0})`
    },
    children: d.jsxs("div", {
        className: "flex flex-col items-center space-y-4",
        children: [d.jsx("div", {
            className: "w-12 h-12 border-4 border-red-500 border-dashed rounded-full animate-spin"
        }), d.jsx("div", {
            className: "text-red-700 text-lg font-medium",
            children: n
        })]
    })
})
  , _0 = () => d.jsxs("div", {
    className: "fixed inset-0 z-50 flex flex-col items-center justify-center bg-transparent bg-opacity-40 backdrop-blur-sm",
    children: [d.jsx("div", {
        className: "animate-spin rounded-full h-16 w-16 border-t-4 border-blue-400 border-opacity-60"
    }), d.jsx("div", {
        className: "text-green-700 text-lg my-4 font-medium",
        children: "Checking..."
    })]
});
var ya = {}, Bg;
function rj() {
    if (Bg)
        return ya;
    Bg = 1;
    var n = ya && ya.__createBinding || (Object.create ? function(S, w, C, D) {
        D === void 0 && (D = C);
        var M = Object.getOwnPropertyDescriptor(w, C);
        (!M || ("get"in M ? !w.__esModule : M.writable || M.configurable)) && (M = {
            enumerable: !0,
            get: function() {
                return w[C]
            }
        }),
        Object.defineProperty(S, D, M)
    }
    : function(S, w, C, D) {
        D === void 0 && (D = C),
        S[D] = w[C]
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
      , i = ya && ya.__importStar || function(S) {
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
    const o = i(Fo())
      , c = typeof globalThis < "u" ? globalThis : window;
    let h = typeof c.turnstile < "u" ? "ready" : "unloaded", f, m;
    const p = new Promise( (S, w) => {
        m = {
            resolve: S,
            reject: w
        },
        h === "ready" && S(void 0)
    }
    );
    {
        const S = "cf__reactTurnstileOnLoad"
          , w = "https://challenges.cloudflare.com/turnstile/v0/api.js";
        f = () => {
            if (h === "unloaded") {
                h = "loading",
                c[S] = () => {
                    m.resolve(),
                    h = "ready",
                    delete c[S]
                }
                ;
                const C = `${w}?onload=${S}&render=explicit`
                  , D = document.createElement("script");
                D.src = C,
                D.async = !0,
                D.addEventListener("error", () => {
                    m.reject("Failed to load Turnstile."),
                    delete c[S]
                }
                ),
                document.head.appendChild(D)
            }
            return p
        }
    }
    function g({id: S, className: w, style: C, sitekey: D, action: M, cData: U, theme: P, language: B, tabIndex: G, responseField: R, responseFieldName: Z, size: W, fixedSize: Q, retry: ie, retryInterval: fe, refreshExpired: he, appearance: ce, execution: re, userRef: ee, onVerify: k, onSuccess: N, onLoad: O, onError: L, onExpire: ae, onTimeout: j, onAfterInteractive: q, onBeforeInteractive: J, onUnsupported: X}) {
        const le = (0,
        o.useRef)(null)
          , te = (0,
        o.useState)({
            onVerify: k,
            onSuccess: N,
            onLoad: O,
            onError: L,
            onExpire: ae,
            onTimeout: j,
            onAfterInteractive: q,
            onBeforeInteractive: J,
            onUnsupported: X
        })[0]
          , I = ee ?? le
          , Se = Q ? {
            width: W === "compact" ? "130px" : W === "flexible" ? "100%" : "300px",
            height: W === "compact" ? "120px" : "65px",
            ...C
        } : C;
        return (0,
        o.useEffect)( () => {
            if (!I.current)
                return;
            let Te = !1
              , ye = "";
            return (async () => {
                var ze, Ue;
                if (h !== "ready")
                    try {
                        await f()
                    } catch (je) {
                        (ze = te.onError) === null || ze === void 0 || ze.call(te, je);
                        return
                    }
                if (Te || !I.current)
                    return;
                let Le;
                const Ct = {
                    sitekey: D,
                    action: M,
                    cData: U,
                    theme: P,
                    language: B,
                    tabindex: G,
                    "response-field": R,
                    "response-field-name": Z,
                    size: W,
                    retry: ie,
                    "retry-interval": fe,
                    "refresh-expired": he,
                    appearance: ce,
                    execution: re,
                    callback: (je, et) => {
                        var la, ct;
                        (la = te.onVerify) === null || la === void 0 || la.call(te, je, Le),
                        (ct = te.onSuccess) === null || ct === void 0 || ct.call(te, je, et, Le)
                    }
                    ,
                    "error-callback": je => {
                        var et;
                        return (et = te.onError) === null || et === void 0 ? void 0 : et.call(te, je, Le)
                    }
                    ,
                    "expired-callback": je => {
                        var et;
                        return (et = te.onExpire) === null || et === void 0 ? void 0 : et.call(te, je, Le)
                    }
                    ,
                    "timeout-callback": () => {
                        var je;
                        return (je = te.onTimeout) === null || je === void 0 ? void 0 : je.call(te, Le)
                    }
                    ,
                    "after-interactive-callback": () => {
                        var je;
                        return (je = te.onAfterInteractive) === null || je === void 0 ? void 0 : je.call(te, Le)
                    }
                    ,
                    "before-interactive-callback": () => {
                        var je;
                        return (je = te.onBeforeInteractive) === null || je === void 0 ? void 0 : je.call(te, Le)
                    }
                    ,
                    "unsupported-callback": () => {
                        var je;
                        return (je = te.onUnsupported) === null || je === void 0 ? void 0 : je.call(te, Le)
                    }
                };
                ye = window.turnstile.render(I.current, Ct),
                Le = v(ye),
                (Ue = te.onLoad) === null || Ue === void 0 || Ue.call(te, ye, Le)
            }
            )(),
            () => {
                Te = !0,
                ye && window.turnstile.remove(ye)
            }
        }
        , [D, M, U, P, B, G, R, Z, W, ie, fe, he, ce, re]),
        (0,
        o.useEffect)( () => {
            te.onVerify = k,
            te.onSuccess = N,
            te.onLoad = O,
            te.onError = L,
            te.onExpire = ae,
            te.onTimeout = j,
            te.onAfterInteractive = q,
            te.onBeforeInteractive = J,
            te.onUnsupported = X
        }
        , [k, N, O, L, ae, j, q, J, X]),
        o.default.createElement("div", {
            ref: I,
            id: S,
            className: w,
            style: Se
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
            h !== "ready" && p.then( () => w(h))
        }
        , []),
        c.turnstile
    }
    return ya.useTurnstile = x,
    ya
}
var uj = rj();
const O0 = Zg(uj)
  , cj = ({setStep: n}) => {
    var D, M, U, P, B;
    const {language: l, translations: i} = ut()
      , [o,c] = T.useState("");
    let h = o.trim() !== "" && o.length >= 11;
    const [f,m] = T.useState(!1)
      , [p,g] = T.useState(null)
      , [v,x] = T.useState("")
      , S = G => {
        const R = G.target.value.replace(/\D/g, "");
        c(R)
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
    }
      , C = async () => {
        var G;
        m(!0);
        try {
            h = !1;
            const R = await Ye("/api/v2/mobile-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    mobile_no: o,
                    captcha_token: v
                }
            });
            R.status_code === 200 ? (localStorage.setItem("user_phone", o),
            n((G = R.data) != null && G.registered ? 3 : 2)) : g({
                message: R == null ? void 0 : R.message,
                type: "error"
            })
        } catch (R) {
            const Z = R
              , W = typeof Z == "object" && (Z != null && Z.message) ? Z.message : "Failed. Please try again later.";
            g({
                message: W,
                type: "error"
            })
        } finally {
            h = !0,
            m(!1)
        }
    }
    ;
    return d.jsxs(oe.div, {
        className: "bg-white w-full p-4",
        variants: w,
        initial: "hidden",
        animate: "visible",
        children: [p && d.jsx(zt, {
            message: p.message,
            type: p.type,
            onClose: () => g(null)
        }), d.jsxs("p", {
            className: "text-xs",
            children: [(D = i == null ? void 0 : i.lblInputLoginMobile) == null ? void 0 : D[l], " ", " ", d.jsx("span", {
                className: "text-red-600 text-[10px]",
                children: (M = i == null ? void 0 : i.lblInputLoginMobileMsg) == null ? void 0 : M[l]
            })]
        }), d.jsx("input", {
            type: "tel",
            id: "phone",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-sm focus:ring-0 focus:border-slate-400 duration-300 border-[1.5px] focus:outline-0 block w-full p-2.5 my-2",
            placeholder: (U = i == null ? void 0 : i.lblInputLoginMobile) == null ? void 0 : U[l],
            autoComplete: "off",
            onCopy: G => G.preventDefault(),
            onPaste: G => G.preventDefault(),
            onCut: G => G.preventDefault(),
            inputMode: "numeric",
            pattern: "[0-9]*",
            maxLength: 11,
            value: o,
            onChange: S
        }), d.jsx("div", {
            className: "sm:col-span-3",
            children: d.jsx(O0, {
                sitekey: "0x4AAAAAABpNUpzYeppBoYpe",
                onVerify: G => x(G)
            })
        }), d.jsx(oe.button, {
            type: "button",
            whileTap: {
                scale: .95
            },
            whileHover: {
                scale: !f && h ? 1.03 : 1
            },
            className: `text-white mb-2 h-8 rounded-lg  text-xs w-full duration-300 sm:w-auto px-2 py-2 text-center transition 
          ${f || !h ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer"}`,
            onClick: !f && h ? C : void 0,
            children: f ? ((P = i == null ? void 0 : i.checking) == null ? void 0 : P[l]) + "..." : (B = i == null ? void 0 : i.lblProceed) == null ? void 0 : B[l]
        })]
    })
}
  , fj = ({setStep: n}) => {
    var Ct, je, et, la, ct, Ca, Da, Ma, ia, ka, we, sa, Ta, Jt, gt, Ht, ft, se, me, tt, Ce, Fe, Je, Re, Yt, zn, sn;
    const {language: l, translations: i} = ut()
      , [o,c] = T.useState(null)
      , [h,f] = T.useState(null)
      , [m,p] = T.useState("")
      , [g,v] = T.useState(null)
      , [x,S] = T.useState(null)
      , [w,C] = T.useState("")
      , [D,M] = T.useState("")
      , [U,P] = T.useState("")
      , [B,G] = T.useState("")
      , [R,Z] = T.useState(!1)
      , [W,Q] = T.useState("")
      , [ie,fe] = T.useState(!1)
      , [he,ce] = T.useState(!1)
      , [re,ee] = T.useState(!1)
      , [k,N] = T.useState(!1)
      , [O,L] = T.useState(0)
      , [ae,j] = T.useState(!1);
    T.useEffect( () => {
        const ne = localStorage.getItem("user_phone");
        ne && p(ne)
    }
    , []);
    const q = T.useRef(null)
      , J = () => {
        var ne;
        (ne = q.current) == null || ne.click()
    }
      , X = ne => {
        var yt;
        const be = (yt = ne.target.files) == null ? void 0 : yt[0];
        if (be) {
            if (be.size > 2 * 1024 * 1024) {
                c({
                    message: "File size must be less than 2MB",
                    type: "error"
                });
                return
            }
            if (!["image/jpeg", "image/jpg", "image/png"].includes(be.type)) {
                c({
                    message: "Please select a JPG, PNG, or JPEG file",
                    type: "error"
                });
                return
            }
            v(be),
            S(URL.createObjectURL(be))
        }
    }
      , le = ne => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ne.trim())
      , te = g && m.length >= 11 && w.trim() !== "" && le(D) && U.trim() !== "" && B.trim() !== "" && U === B
      , I = async () => {
        try {
            N(!0);
            const ne = new FormData;
            ne.append("photo", g),
            ne.append("mobile_no", m),
            ne.append("full_name", w),
            ne.append("email", D),
            ne.append("password", U),
            ne.append("password_confirmation", B),
            ne.append("resend", "0");
            const be = await Ye("/api/v2/registration", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: ne
            });
            be.status_code === 200 ? n(6) : c({
                message: (be == null ? void 0 : be.message) || "Registration failed",
                type: "error"
            })
        } catch (ne) {
            const be = ne
              , yt = typeof be == "object" && (be != null && be.message) ? be.message : "Failed. Please try again later."
              , Gt = typeof be == "object" && typeof be.status == "number" ? be.status : 422;
            (Gt === 401 || Gt === 419) && (c({
                message: yt,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            c({
                message: yt,
                type: "error"
            })
        } finally {
            N(!1)
        }
    }
      , Se = D.trim() !== "" && le(D)
      , Te = async () => {
        try {
            ce(!0);
            const ne = await Ye("/api/v2/registration-email-verify", {
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
            const be = ne
              , yt = typeof be == "object" && (be != null && be.message) ? be.message : "Failed. Please try again later."
              , Gt = typeof be == "object" && typeof be.status == "number" ? be.status : 422;
            Gt === 401 || Gt === 419 ? (f({
                message: yt,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)) : c({
                message: yt,
                type: "error"
            })
        } finally {
            ce(!1)
        }
    }
      , ye = W.trim() !== "" && W.length >= 6
      , ze = async () => {
        try {
            ee(!0);
            const ne = await Ye("/api/v2/registration-email-otp-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    email: D,
                    otp: W
                }
            });
            ne.status_code === 200 ? fe(!0) : c({
                message: ne == null ? void 0 : ne.message,
                type: "error"
            })
        } catch (ne) {
            const be = ne
              , yt = typeof be == "object" && (be != null && be.message) ? be.message : "Failed. Please try again later."
              , Gt = typeof be == "object" && typeof be.status == "number" ? be.status : 422;
            Gt === 401 || Gt === 419 ? (f({
                message: yt,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)) : c({
                message: yt,
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
            L(be => be - 1)
        }
        , 1e3) : O === 0 && j(!1),
        () => {
            ne && clearInterval(ne)
        }
    }
    , [O, ae]);
    const Ue = () => {
        Te(),
        L(30),
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
    return d.jsxs(oe.div, {
        className: "bg-white w-full p-4",
        variants: Le,
        initial: "hidden",
        animate: "visible",
        children: [o && d.jsx(zt, {
            message: o.message,
            type: o.type,
            onClose: () => c(null)
        }), h && d.jsx(nj, {
            message: h.message,
            type: h.type,
            onClose: () => c(null)
        }), d.jsxs("p", {
            className: "text-xs mb-2 uppercase",
            children: [(Ct = i == null ? void 0 : i.lblInputRegPhotoUpload) == null ? void 0 : Ct[l], " ", " ", d.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (je = i == null ? void 0 : i.lblInputRegPhotoSize) == null ? void 0 : je[l]]
            })]
        }), d.jsx("div", {
            className: "relative w-24 h-24 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors bg-white flex items-center justify-center overflow-hidden",
            onClick: J,
            children: g ? d.jsx("img", {
                src: x || "/placeholder.svg",
                alt: "Selected photo",
                className: "w-full h-full object-cover"
            }) : d.jsx("div", {
                className: "flex flex-col items-center justify-center text-gray-400",
                children: d.jsx("svg", {
                    className: "w-16 h-16 text-gray-300",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    children: d.jsx("path", {
                        d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                    })
                })
            })
        }), d.jsx("input", {
            ref: q,
            type: "file",
            accept: "image/jpeg,image/jpg,image/png",
            onChange: X,
            className: "hidden"
        }), d.jsxs("p", {
            className: "text-xs mt-4 uppercase",
            children: [(et = i == null ? void 0 : i.lblInputRegMobile) == null ? void 0 : et[l], " ", " ", d.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (la = i == null ? void 0 : i.lblNoCopyPaste) == null ? void 0 : la[l]]
            })]
        }), d.jsx("input", {
            type: "tel",
            id: "phone",
            autoComplete: "off",
            onCopy: ne => ne.preventDefault(),
            onPaste: ne => ne.preventDefault(),
            onCut: ne => ne.preventDefault(),
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-blue-400 focus:border-[0.1px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (ct = i == null ? void 0 : i.lblInputRegMobile) == null ? void 0 : ct[l],
            inputMode: "numeric",
            pattern: "[0-9]*",
            maxLength: 11,
            value: m,
            onChange: ne => p(ne.target.value)
        }), d.jsxs("p", {
            className: "text-xs mt-4 uppercase",
            children: [(Ca = i == null ? void 0 : i.lblInputRegName) == null ? void 0 : Ca[l], " ", " ", d.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (Da = i == null ? void 0 : i.lblNoCopyPaste) == null ? void 0 : Da[l]]
            })]
        }), d.jsx("input", {
            type: "text",
            id: "name",
            autoComplete: "off",
            onCopy: ne => ne.preventDefault(),
            onPaste: ne => ne.preventDefault(),
            onCut: ne => ne.preventDefault(),
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (Ma = i == null ? void 0 : i.lblInputRegName) == null ? void 0 : Ma[l],
            onChange: ne => C(ne.target.value),
            value: w
        }), d.jsxs("p", {
            className: "text-xs mt-4 uppercase",
            children: [(ia = i == null ? void 0 : i.lblInputEmail) == null ? void 0 : ia[l], "  ", " ", d.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (ka = i == null ? void 0 : i.lblNoCopyPaste) == null ? void 0 : ka[l]]
            })]
        }), d.jsx("input", {
            type: "email",
            id: "email",
            autoComplete: "off",
            onCopy: ne => ne.preventDefault(),
            onPaste: ne => ne.preventDefault(),
            onCut: ne => ne.preventDefault(),
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (we = i == null ? void 0 : i.lblInputEmail) == null ? void 0 : we[l],
            onChange: ne => M(ne.target.value),
            value: D
        }), ie && d.jsx("p", {
            className: "text-xs text-green-500 mt-1",
            children: (sa = i == null ? void 0 : i.emailSuccessfullyVerified) == null ? void 0 : sa[l]
        }), !R && d.jsx("button", {
            type: "button",
            onClick: Se && !he ? Ue : void 0,
            className: `text-xs font-medium rounded px-2 py-1.5 mr-2 mb-2 transition-colors duration-200
                  ${!Se || he ? "text-gray-400 bg-gray-300 cursor-not-allowed" : "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 cursor-pointer"}`,
            children: he ? (Ta = i == null ? void 0 : i.checking) == null ? void 0 : Ta[l] : (Jt = i == null ? void 0 : i.verify_email) == null ? void 0 : Jt[l]
        }), Se && R && !ie && d.jsx("button", {
            onClick: Ue,
            className: `text-xs font-medium rounded px-2 py-1.5 mr-2 mb-2 transition-colors duration-200
              ${ae ? "text-gray-400 bg-gray-300 cursor-not-allowed" : "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 cursor-pointer"}`,
            children: ae ? ((gt = i == null ? void 0 : i.resendOtp) == null ? void 0 : gt[l]) + ` ${O}s` : (Ht = i == null ? void 0 : i.resendOtp) == null ? void 0 : Ht[l]
        }), R && !ie && d.jsxs(d.Fragment, {
            children: [d.jsxs("p", {
                className: "text-xs text-blue-500 mt-4",
                children: [(ft = i == null ? void 0 : i.otp_message) == null ? void 0 : ft[l], "  ", " ", d.jsxs("span", {
                    className: "text-red-600 text-[10px]",
                    children: ["*", (se = i == null ? void 0 : i.lblNoCopyPaste) == null ? void 0 : se[l]]
                })]
            }), d.jsx("input", {
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
                value: W
            }), d.jsx("button", {
                type: "button",
                onClick: ye && !re ? ze : void 0,
                className: `text-xs font-medium rounded px-2 py-1.5 mr-2 mb-2 transition-colors duration-200
                  ${!ye || re ? "text-gray-400 bg-gray-300 cursor-not-allowed" : "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 cursor-pointer"}`,
                children: re ? (me = i == null ? void 0 : i.checking) == null ? void 0 : me[l] : (tt = i == null ? void 0 : i.verifyOtp) == null ? void 0 : tt[l]
            })]
        }), d.jsxs("p", {
            className: "text-xs mt-4",
            children: [(Ce = i == null ? void 0 : i.lblInputPassword) == null ? void 0 : Ce[l], "  ", " ", d.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (Fe = i == null ? void 0 : i.lblNoCopyPaste) == null ? void 0 : Fe[l]]
            })]
        }), d.jsx("input", {
            type: "password",
            id: "password",
            autoComplete: "off",
            onCopy: ne => ne.preventDefault(),
            onPaste: ne => ne.preventDefault(),
            onCut: ne => ne.preventDefault(),
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: "********",
            onChange: ne => P(ne.target.value),
            value: U
        }), U.length > 0 && U.length < 6 && d.jsx("p", {
            className: "text-red-500 text-[11px] mb-2",
            children: (Je = i == null ? void 0 : i.passwordMinLengthMsg) == null ? void 0 : Je[l]
        }), d.jsxs("p", {
            className: "text-xs mt-4",
            children: [(Re = i == null ? void 0 : i.lblInputRePassword) == null ? void 0 : Re[l], " ", " ", d.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (Yt = i == null ? void 0 : i.lblNoCopyPaste) == null ? void 0 : Yt[l]]
            })]
        }), d.jsx("input", {
            type: "password",
            id: "confirmPassword",
            autoComplete: "off",
            onCopy: ne => ne.preventDefault(),
            onPaste: ne => ne.preventDefault(),
            onCut: ne => ne.preventDefault(),
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: "********",
            onChange: ne => G(ne.target.value),
            value: B
        }), d.jsx(oe.button, {
            type: "button",
            whileTap: {
                scale: .95
            },
            className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
            ${!te || k ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838]"}
            `,
            onClick: !k && te ? I : void 0,
            children: k ? (zn = i == null ? void 0 : i.checking) == null ? void 0 : zn[l] : (sn = i == null ? void 0 : i.lblProceed) == null ? void 0 : sn[l]
        })]
    })
}
  , dj = ({setStep: n}) => {
    var w, C, D, M, U, P, B;
    const {language: l, translations: i} = ut()
      , [o,c] = T.useState("")
      , [h,f] = T.useState(!1)
      , m = o.trim() !== "" && o.length >= 6
      , [p,g] = T.useState(null)
      , v = async () => {
        var G, R;
        f(!0);
        try {
            const Z = localStorage.getItem("user_phone")
              , W = await Ye("/api/v2/login", {
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
            W.status_code === 200 ? (localStorage.setItem("user_email", JSON.stringify((G = W == null ? void 0 : W.data) == null ? void 0 : G.email)),
            localStorage.setItem("user_pwd", o),
            n((R = W.data) != null && R.email_confirmed ? 100 : 4)) : g({
                message: W == null ? void 0 : W.message,
                type: "error"
            })
        } catch (Z) {
            const W = Z
              , Q = typeof W == "object" && (W != null && W.message) ? W.message : "Failed. Please try again later."
              , ie = typeof W == "object" && typeof W.status == "number" ? W.status : 422;
            (ie === 401 || ie === 419) && (g({
                message: Q,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            g({
                message: Q,
                type: "error"
            })
        } finally {
            f(!1)
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
    return d.jsxs(oe.div, {
        className: "bg-white w-full p-4",
        variants: S,
        initial: "hidden",
        animate: "visible",
        children: [p && d.jsx(zt, {
            message: p.message,
            type: p.type,
            onClose: () => g(null)
        }), d.jsxs("p", {
            className: "text-xs mt-4",
            children: [(w = i == null ? void 0 : i.lblInputPassword) == null ? void 0 : w[l], " ", " ", d.jsx("span", {
                className: "text-red-600 text-[10px]",
                children: (C = i == null ? void 0 : i.lblNoCopyPaste) == null ? void 0 : C[l]
            })]
        }), d.jsx("input", {
            type: "password",
            id: "password",
            autoComplete: "off",
            onCopy: G => G.preventDefault(),
            onPaste: G => G.preventDefault(),
            onCut: G => G.preventDefault(),
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-sm focus:ring-0 focus:border-slate-400 duration-300 border-[1.5px] focus:outline-0 block w-full p-2.5 my-2",
            placeholder: (D = i == null ? void 0 : i.lblInputPassword) == null ? void 0 : D[l],
            value: o,
            onChange: G => c(G.target.value)
        }), d.jsxs("div", {
            children: [d.jsx(oe.button, {
                type: "button",
                whileTap: {
                    scale: .95
                },
                className: "text-white mb-2 mt-2 mr-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition bg-gray-400 hover:bg-[#218838] focus:ring-[#218838] cursor-pointer",
                onClick: () => n(1),
                children: (M = i == null ? void 0 : i.back) == null ? void 0 : M[l]
            }), d.jsx(oe.button, {
                type: "button",
                whileTap: {
                    scale: .95
                },
                className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
         ${h || !m ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer"}`,
                onClick: !h && m ? v : void 0,
                children: h ? (U = i == null ? void 0 : i.checking) == null ? void 0 : U[l] : (P = i == null ? void 0 : i.lblProceed) == null ? void 0 : P[l]
            })]
        }), d.jsx("p", {
            className: "text-xs cursor-pointer text-blue-600 mt-2",
            onClick: x,
            children: ((B = i == null ? void 0 : i.lblInputForgotPassword) == null ? void 0 : B[l]) ?? "Forgot password ?"
        })]
    })
}
  , R0 = n => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.trim())
  , hj = ({setStep: n}) => {
    var S, w, C, D, M, U;
    const {language: l, translations: i} = ut()
      , [o,c] = T.useState("")
      , [h,f] = T.useState("")
      , [m,p] = T.useState(null);
    T.useEffect( () => {
        const P = localStorage.getItem("user_email");
        if (P)
            try {
                const B = JSON.parse(P);
                f(B)
            } catch {
                f(P)
            }
    }
    , []);
    const g = o.trim() !== "" && R0(o)
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
            const P = await Ye("/api/v2/login-email-verify", {
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
              , G = typeof B == "object" && (B != null && B.message) ? B.message : "Failed. Please try again later."
              , R = typeof B == "object" && typeof B.status == "number" ? B.status : 422;
            (R === 401 || R === 419) && (p({
                message: G,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            p({
                message: G,
                type: "error"
            })
        }
    }
    ;
    return d.jsxs(oe.div, {
        className: "bg-white w-full p-4",
        variants: v,
        initial: "hidden",
        animate: "visible",
        children: [m && d.jsx(zt, {
            message: m.message,
            type: m.type,
            onClose: () => p(null)
        }), d.jsxs("p", {
            className: "text-xs",
            children: [(S = i == null ? void 0 : i.lblAuthFullEmail) == null ? void 0 : S[l], " (", h, ")"]
        }), d.jsx("p", {
            className: "text-xs my-1",
            children: (w = i == null ? void 0 : i.lblAuthFullEmail2) == null ? void 0 : w[l]
        }), d.jsxs("p", {
            className: "text-xs mt-4",
            children: [(C = i == null ? void 0 : i.lblInputRegEmail) == null ? void 0 : C[l], " ", " ", d.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (D = i == null ? void 0 : i.lblNoCopyPaste) == null ? void 0 : D[l]]
            })]
        }), d.jsx("input", {
            type: "email",
            id: "phone",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (M = i == null ? void 0 : i.lblInputRegEmail) == null ? void 0 : M[l],
            value: o,
            onChange: P => c(P.target.value),
            autoComplete: "off",
            onCopy: P => P.preventDefault(),
            onPaste: P => P.preventDefault(),
            onCut: P => P.preventDefault()
        }), d.jsx(oe.button, {
            whileTap: {
                scale: .95
            },
            whileHover: {
                scale: g ? 1.03 : 1
            },
            className: `text-white mb-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
        ${g ? "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838]" : "bg-gray-400 cursor-not-allowed"}`,
            onClick: g ? x : void 0,
            children: (U = i == null ? void 0 : i.lblProceed) == null ? void 0 : U[l]
        })]
    })
}
;
Qg();
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
function hs() {
    return hs = Object.assign ? Object.assign.bind() : function(n) {
        for (var l = 1; l < arguments.length; l++) {
            var i = arguments[l];
            for (var o in i)
                Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o])
        }
        return n
    }
    ,
    hs.apply(this, arguments)
}
var Mn;
(function(n) {
    n.Pop = "POP",
    n.Push = "PUSH",
    n.Replace = "REPLACE"
}
)(Mn || (Mn = {}));
const Lg = "popstate";
function mj(n) {
    n === void 0 && (n = {});
    function l(o, c) {
        let {pathname: h, search: f, hash: m} = o.location;
        return Qc("", {
            pathname: h,
            search: f,
            hash: m
        }, c.state && c.state.usr || null, c.state && c.state.key || "default")
    }
    function i(o, c) {
        return typeof c == "string" ? c : z0(c)
    }
    return gj(l, i, null, n)
}
function St(n, l) {
    if (n === !1 || n === null || typeof n > "u")
        throw new Error(l)
}
function V0(n, l) {
    if (!n) {
        typeof console < "u" && console.warn(l);
        try {
            throw new Error(l)
        } catch {}
    }
}
function pj() {
    return Math.random().toString(36).substr(2, 8)
}
function kg(n, l) {
    return {
        usr: n.state,
        key: n.key,
        idx: l
    }
}
function Qc(n, l, i, o) {
    return i === void 0 && (i = null),
    hs({
        pathname: typeof n == "string" ? n : n.pathname,
        search: "",
        hash: ""
    }, typeof l == "string" ? $l(l) : l, {
        state: i,
        key: l && l.key || o || pj()
    })
}
function z0(n) {
    let {pathname: l="/", search: i="", hash: o=""} = n;
    return i && i !== "?" && (l += i.charAt(0) === "?" ? i : "?" + i),
    o && o !== "#" && (l += o.charAt(0) === "#" ? o : "#" + o),
    l
}
function $l(n) {
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
function gj(n, l, i, o) {
    o === void 0 && (o = {});
    let {window: c=document.defaultView, v5Compat: h=!1} = o
      , f = c.history
      , m = Mn.Pop
      , p = null
      , g = v();
    g == null && (g = 0,
    f.replaceState(hs({}, f.state, {
        idx: g
    }), ""));
    function v() {
        return (f.state || {
            idx: null
        }).idx
    }
    function x() {
        m = Mn.Pop;
        let M = v()
          , U = M == null ? null : M - g;
        g = M,
        p && p({
            action: m,
            location: D.location,
            delta: U
        })
    }
    function S(M, U) {
        m = Mn.Push;
        let P = Qc(D.location, M, U);
        g = v() + 1;
        let B = kg(P, g)
          , G = D.createHref(P);
        try {
            f.pushState(B, "", G)
        } catch (R) {
            if (R instanceof DOMException && R.name === "DataCloneError")
                throw R;
            c.location.assign(G)
        }
        h && p && p({
            action: m,
            location: D.location,
            delta: 1
        })
    }
    function w(M, U) {
        m = Mn.Replace;
        let P = Qc(D.location, M, U);
        g = v();
        let B = kg(P, g)
          , G = D.createHref(P);
        f.replaceState(B, "", G),
        h && p && p({
            action: m,
            location: D.location,
            delta: 0
        })
    }
    function C(M) {
        let U = c.location.origin !== "null" ? c.location.origin : c.location.href
          , P = typeof M == "string" ? M : z0(M);
        return P = P.replace(/ $/, "%20"),
        St(U, "No window.location.(origin|href) available to create URL for href: " + P),
        new URL(P,U)
    }
    let D = {
        get action() {
            return m
        },
        get location() {
            return n(c, f)
        },
        listen(M) {
            if (p)
                throw new Error("A history only accepts one active listener");
            return c.addEventListener(Lg, x),
            p = M,
            () => {
                c.removeEventListener(Lg, x),
                p = null
            }
        },
        createHref(M) {
            return l(c, M)
        },
        createURL: C,
        encodeLocation(M) {
            let U = C(M);
            return {
                pathname: U.pathname,
                search: U.search,
                hash: U.hash
            }
        },
        push: S,
        replace: w,
        go(M) {
            return f.go(M)
        }
    };
    return D
}
var Hg;
(function(n) {
    n.data = "data",
    n.deferred = "deferred",
    n.redirect = "redirect",
    n.error = "error"
}
)(Hg || (Hg = {}));
function yj(n, l, i) {
    return i === void 0 && (i = "/"),
    vj(n, l, i)
}
function vj(n, l, i, o) {
    let c = typeof l == "string" ? $l(l) : l
      , h = L0(c.pathname || "/", i);
    if (h == null)
        return null;
    let f = U0(n);
    xj(f);
    let m = null;
    for (let p = 0; m == null && p < f.length; ++p) {
        let g = _j(h);
        m = Cj(f[p], g)
    }
    return m
}
function U0(n, l, i, o) {
    l === void 0 && (l = []),
    i === void 0 && (i = []),
    o === void 0 && (o = "");
    let c = (h, f, m) => {
        let p = {
            relativePath: m === void 0 ? h.path || "" : m,
            caseSensitive: h.caseSensitive === !0,
            childrenIndex: f,
            route: h
        };
        p.relativePath.startsWith("/") && (St(p.relativePath.startsWith(o), 'Absolute route path "' + p.relativePath + '" nested under path ' + ('"' + o + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        p.relativePath = p.relativePath.slice(o.length));
        let g = ll([o, p.relativePath])
          , v = i.concat(p);
        h.children && h.children.length > 0 && (St(h.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + g + '".')),
        U0(h.children, l, v, g)),
        !(h.path == null && !h.index) && l.push({
            path: g,
            score: Nj(g, h.index),
            routesMeta: v
        })
    }
    ;
    return n.forEach( (h, f) => {
        var m;
        if (h.path === "" || !((m = h.path) != null && m.includes("?")))
            c(h, f);
        else
            for (let p of B0(h.path))
                c(h, f, p)
    }
    ),
    l
}
function B0(n) {
    let l = n.split("/");
    if (l.length === 0)
        return [];
    let[i,...o] = l
      , c = i.endsWith("?")
      , h = i.replace(/\?$/, "");
    if (o.length === 0)
        return c ? [h, ""] : [h];
    let f = B0(o.join("/"))
      , m = [];
    return m.push(...f.map(p => p === "" ? h : [h, p].join("/"))),
    c && m.push(...f),
    m.map(p => n.startsWith("/") && p === "" ? "/" : p)
}
function xj(n) {
    n.sort( (l, i) => l.score !== i.score ? i.score - l.score : Ej(l.routesMeta.map(o => o.childrenIndex), i.routesMeta.map(o => o.childrenIndex)))
}
const bj = /^:[\w-]+$/
  , Sj = 3
  , Tj = 2
  , jj = 1
  , wj = 10
  , Aj = -2
  , Pg = n => n === "*";
function Nj(n, l) {
    let i = n.split("/")
      , o = i.length;
    return i.some(Pg) && (o += Aj),
    l && (o += Tj),
    i.filter(c => !Pg(c)).reduce( (c, h) => c + (bj.test(h) ? Sj : h === "" ? jj : wj), o)
}
function Ej(n, l) {
    return n.length === l.length && n.slice(0, -1).every( (o, c) => o === l[c]) ? n[n.length - 1] - l[l.length - 1] : 0
}
function Cj(n, l, i) {
    let {routesMeta: o} = n
      , c = {}
      , h = "/"
      , f = [];
    for (let m = 0; m < o.length; ++m) {
        let p = o[m]
          , g = m === o.length - 1
          , v = h === "/" ? l : l.slice(h.length) || "/"
          , x = Dj({
            path: p.relativePath,
            caseSensitive: p.caseSensitive,
            end: g
        }, v)
          , S = p.route;
        if (!x)
            return null;
        Object.assign(c, x.params),
        f.push({
            params: c,
            pathname: ll([h, x.pathname]),
            pathnameBase: zj(ll([h, x.pathnameBase])),
            route: S
        }),
        x.pathnameBase !== "/" && (h = ll([h, x.pathnameBase]))
    }
    return f
}
function Dj(n, l) {
    typeof n == "string" && (n = {
        path: n,
        caseSensitive: !1,
        end: !0
    });
    let[i,o] = Mj(n.path, n.caseSensitive, n.end)
      , c = l.match(i);
    if (!c)
        return null;
    let h = c[0]
      , f = h.replace(/(.)\/+$/, "$1")
      , m = c.slice(1);
    return {
        params: o.reduce( (g, v, x) => {
            let {paramName: S, isOptional: w} = v;
            if (S === "*") {
                let D = m[x] || "";
                f = h.slice(0, h.length - D.length).replace(/(.)\/+$/, "$1")
            }
            const C = m[x];
            return w && !C ? g[S] = void 0 : g[S] = (C || "").replace(/%2F/g, "/"),
            g
        }
        , {}),
        pathname: h,
        pathnameBase: f,
        pattern: n
    }
}
function Mj(n, l, i) {
    l === void 0 && (l = !1),
    i === void 0 && (i = !0),
    V0(n === "*" || !n.endsWith("*") || n.endsWith("/*"), 'Route path "' + n + '" will be treated as if it were ' + ('"' + n.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + n.replace(/\*$/, "/*") + '".'));
    let o = []
      , c = "^" + n.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (f, m, p) => (o.push({
        paramName: m,
        isOptional: p != null
    }),
    p ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return n.endsWith("*") ? (o.push({
        paramName: "*"
    }),
    c += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : i ? c += "\\/*$" : n !== "" && n !== "/" && (c += "(?:(?=\\/|$))"),
    [new RegExp(c,l ? void 0 : "i"), o]
}
function _j(n) {
    try {
        return n.split("/").map(l => decodeURIComponent(l).replace(/\//g, "%2F")).join("/")
    } catch (l) {
        return V0(!1, 'The URL path "' + n + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + l + ").")),
        n
    }
}
function L0(n, l) {
    if (l === "/")
        return n;
    if (!n.toLowerCase().startsWith(l.toLowerCase()))
        return null;
    let i = l.endsWith("/") ? l.length - 1 : l.length
      , o = n.charAt(i);
    return o && o !== "/" ? null : n.slice(i) || "/"
}
function Oj(n, l) {
    l === void 0 && (l = "/");
    let {pathname: i, search: o="", hash: c=""} = typeof n == "string" ? $l(n) : n;
    return {
        pathname: i ? i.startsWith("/") ? i : Rj(i, l) : l,
        search: Uj(o),
        hash: Bj(c)
    }
}
function Rj(n, l) {
    let i = l.replace(/\/+$/, "").split("/");
    return n.split("/").forEach(c => {
        c === ".." ? i.length > 1 && i.pop() : c !== "." && i.push(c)
    }
    ),
    i.length > 1 ? i.join("/") : "/"
}
function Ec(n, l, i, o) {
    return "Cannot include a '" + n + "' character in a manually specified " + ("`to." + l + "` field [" + JSON.stringify(o) + "].  Please separate it out to the ") + ("`to." + i + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function Vj(n) {
    return n.filter( (l, i) => i === 0 || l.route.path && l.route.path.length > 0)
}
function k0(n, l) {
    let i = Vj(n);
    return l ? i.map( (o, c) => c === i.length - 1 ? o.pathname : o.pathnameBase) : i.map(o => o.pathnameBase)
}
function H0(n, l, i, o) {
    o === void 0 && (o = !1);
    let c;
    typeof n == "string" ? c = $l(n) : (c = hs({}, n),
    St(!c.pathname || !c.pathname.includes("?"), Ec("?", "pathname", "search", c)),
    St(!c.pathname || !c.pathname.includes("#"), Ec("#", "pathname", "hash", c)),
    St(!c.search || !c.search.includes("#"), Ec("#", "search", "hash", c)));
    let h = n === "" || c.pathname === "", f = h ? "/" : c.pathname, m;
    if (f == null)
        m = i;
    else {
        let x = l.length - 1;
        if (!o && f.startsWith("..")) {
            let S = f.split("/");
            for (; S[0] === ".."; )
                S.shift(),
                x -= 1;
            c.pathname = S.join("/")
        }
        m = x >= 0 ? l[x] : "/"
    }
    let p = Oj(c, m)
      , g = f && f !== "/" && f.endsWith("/")
      , v = (h || f === ".") && i.endsWith("/");
    return !p.pathname.endsWith("/") && (g || v) && (p.pathname += "/"),
    p
}
const ll = n => n.join("/").replace(/\/\/+/g, "/")
  , zj = n => n.replace(/\/+$/, "").replace(/^\/*/, "/")
  , Uj = n => !n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n
  , Bj = n => !n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n;
function Lj(n) {
    return n != null && typeof n.status == "number" && typeof n.statusText == "string" && typeof n.internal == "boolean" && "data"in n
}
const P0 = ["post", "put", "patch", "delete"];
new Set(P0);
const kj = ["get", ...P0];
new Set(kj);
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
function ms() {
    return ms = Object.assign ? Object.assign.bind() : function(n) {
        for (var l = 1; l < arguments.length; l++) {
            var i = arguments[l];
            for (var o in i)
                Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o])
        }
        return n
    }
    ,
    ms.apply(this, arguments)
}
const Of = T.createContext(null)
  , Hj = T.createContext(null)
  , xs = T.createContext(null)
  , er = T.createContext(null)
  , Vn = T.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , q0 = T.createContext(null);
function bs() {
    return T.useContext(er) != null
}
function tr() {
    return bs() || St(!1),
    T.useContext(er).location
}
function Y0(n) {
    T.useContext(xs).static || T.useLayoutEffect(n)
}
function Sa() {
    let {isDataRoute: n} = T.useContext(Vn);
    return n ? ew() : Pj()
}
function Pj() {
    bs() || St(!1);
    let n = T.useContext(Of)
      , {basename: l, future: i, navigator: o} = T.useContext(xs)
      , {matches: c} = T.useContext(Vn)
      , {pathname: h} = tr()
      , f = JSON.stringify(k0(c, i.v7_relativeSplatPath))
      , m = T.useRef(!1);
    return Y0( () => {
        m.current = !0
    }
    ),
    T.useCallback(function(g, v) {
        if (v === void 0 && (v = {}),
        !m.current)
            return;
        if (typeof g == "number") {
            o.go(g);
            return
        }
        let x = H0(g, JSON.parse(f), h, v.relative === "path");
        n == null && l !== "/" && (x.pathname = x.pathname === "/" ? l : ll([l, x.pathname])),
        (v.replace ? o.replace : o.push)(x, v.state, v)
    }, [l, o, f, h, n])
}
function qj() {
    let {matches: n} = T.useContext(Vn)
      , l = n[n.length - 1];
    return l ? l.params : {}
}
function Yj(n, l) {
    return Gj(n, l)
}
function Gj(n, l, i, o) {
    bs() || St(!1);
    let {navigator: c} = T.useContext(xs)
      , {matches: h} = T.useContext(Vn)
      , f = h[h.length - 1]
      , m = f ? f.params : {};
    f && f.pathname;
    let p = f ? f.pathnameBase : "/";
    f && f.route;
    let g = tr(), v;
    if (l) {
        var x;
        let M = typeof l == "string" ? $l(l) : l;
        p === "/" || (x = M.pathname) != null && x.startsWith(p) || St(!1),
        v = M
    } else
        v = g;
    let S = v.pathname || "/"
      , w = S;
    if (p !== "/") {
        let M = p.replace(/^\//, "").split("/");
        w = "/" + S.replace(/^\//, "").split("/").slice(M.length).join("/")
    }
    let C = yj(n, {
        pathname: w
    })
      , D = Fj(C && C.map(M => Object.assign({}, M, {
        params: Object.assign({}, m, M.params),
        pathname: ll([p, c.encodeLocation ? c.encodeLocation(M.pathname).pathname : M.pathname]),
        pathnameBase: M.pathnameBase === "/" ? p : ll([p, c.encodeLocation ? c.encodeLocation(M.pathnameBase).pathname : M.pathnameBase])
    })), h, i, o);
    return l && D ? T.createElement(er.Provider, {
        value: {
            location: ms({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, v),
            navigationType: Mn.Pop
        }
    }, D) : D
}
function Xj() {
    let n = Wj()
      , l = Lj(n) ? n.status + " " + n.statusText : n instanceof Error ? n.message : JSON.stringify(n)
      , i = n instanceof Error ? n.stack : null
      , c = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return T.createElement(T.Fragment, null, T.createElement("h2", null, "Unexpected Application Error!"), T.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, l), i ? T.createElement("pre", {
        style: c
    }, i) : null, null)
}
const Kj = T.createElement(Xj, null);
class Zj extends T.Component {
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
        return this.state.error !== void 0 ? T.createElement(Vn.Provider, {
            value: this.props.routeContext
        }, T.createElement(q0.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function Qj(n) {
    let {routeContext: l, match: i, children: o} = n
      , c = T.useContext(Of);
    return c && c.static && c.staticContext && (i.route.errorElement || i.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = i.route.id),
    T.createElement(Vn.Provider, {
        value: l
    }, o)
}
function Fj(n, l, i, o) {
    var c;
    if (l === void 0 && (l = []),
    i === void 0 && (i = null),
    o === void 0 && (o = null),
    n == null) {
        var h;
        if (!i)
            return null;
        if (i.errors)
            n = i.matches;
        else if ((h = o) != null && h.v7_partialHydration && l.length === 0 && !i.initialized && i.matches.length > 0)
            n = i.matches;
        else
            return null
    }
    let f = n
      , m = (c = i) == null ? void 0 : c.errors;
    if (m != null) {
        let v = f.findIndex(x => x.route.id && (m == null ? void 0 : m[x.route.id]) !== void 0);
        v >= 0 || St(!1),
        f = f.slice(0, Math.min(f.length, v + 1))
    }
    let p = !1
      , g = -1;
    if (i && o && o.v7_partialHydration)
        for (let v = 0; v < f.length; v++) {
            let x = f[v];
            if ((x.route.HydrateFallback || x.route.hydrateFallbackElement) && (g = v),
            x.route.id) {
                let {loaderData: S, errors: w} = i
                  , C = x.route.loader && S[x.route.id] === void 0 && (!w || w[x.route.id] === void 0);
                if (x.route.lazy || C) {
                    p = !0,
                    g >= 0 ? f = f.slice(0, g + 1) : f = [f[0]];
                    break
                }
            }
        }
    return f.reduceRight( (v, x, S) => {
        let w, C = !1, D = null, M = null;
        i && (w = m && x.route.id ? m[x.route.id] : void 0,
        D = x.route.errorElement || Kj,
        p && (g < 0 && S === 0 ? (tw("route-fallback"),
        C = !0,
        M = null) : g === S && (C = !0,
        M = x.route.hydrateFallbackElement || null)));
        let U = l.concat(f.slice(0, S + 1))
          , P = () => {
            let B;
            return w ? B = D : C ? B = M : x.route.Component ? B = T.createElement(x.route.Component, null) : x.route.element ? B = x.route.element : B = v,
            T.createElement(Qj, {
                match: x,
                routeContext: {
                    outlet: v,
                    matches: U,
                    isDataRoute: i != null
                },
                children: B
            })
        }
        ;
        return i && (x.route.ErrorBoundary || x.route.errorElement || S === 0) ? T.createElement(Zj, {
            location: i.location,
            revalidation: i.revalidation,
            component: D,
            error: w,
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
var G0 = function(n) {
    return n.UseBlocker = "useBlocker",
    n.UseRevalidator = "useRevalidator",
    n.UseNavigateStable = "useNavigate",
    n
}(G0 || {})
  , X0 = function(n) {
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
}(X0 || {});
function Jj(n) {
    let l = T.useContext(Of);
    return l || St(!1),
    l
}
function Ij(n) {
    let l = T.useContext(Hj);
    return l || St(!1),
    l
}
function $j(n) {
    let l = T.useContext(Vn);
    return l || St(!1),
    l
}
function K0(n) {
    let l = $j()
      , i = l.matches[l.matches.length - 1];
    return i.route.id || St(!1),
    i.route.id
}
function Wj() {
    var n;
    let l = T.useContext(q0)
      , i = Ij()
      , o = K0();
    return l !== void 0 ? l : (n = i.errors) == null ? void 0 : n[o]
}
function ew() {
    let {router: n} = Jj(G0.UseNavigateStable)
      , l = K0(X0.UseNavigateStable)
      , i = T.useRef(!1);
    return Y0( () => {
        i.current = !0
    }
    ),
    T.useCallback(function(c, h) {
        h === void 0 && (h = {}),
        i.current && (typeof c == "number" ? n.navigate(c) : n.navigate(c, ms({
            fromRouteId: l
        }, h)))
    }, [n, l])
}
const qg = {};
function tw(n, l, i) {
    qg[n] || (qg[n] = !0)
}
function aw(n, l) {
    n == null || n.v7_startTransition,
    n == null || n.v7_relativeSplatPath
}
function Z0(n) {
    let {to: l, replace: i, state: o, relative: c} = n;
    bs() || St(!1);
    let {future: h, static: f} = T.useContext(xs)
      , {matches: m} = T.useContext(Vn)
      , {pathname: p} = tr()
      , g = Sa()
      , v = H0(l, k0(m, h.v7_relativeSplatPath), p, c === "path")
      , x = JSON.stringify(v);
    return T.useEffect( () => g(JSON.parse(x), {
        replace: i,
        state: o,
        relative: c
    }), [g, x, c, i, o]),
    null
}
function es(n) {
    St(!1)
}
function nw(n) {
    let {basename: l="/", children: i=null, location: o, navigationType: c=Mn.Pop, navigator: h, static: f=!1, future: m} = n;
    bs() && St(!1);
    let p = l.replace(/^\/*/, "/")
      , g = T.useMemo( () => ({
        basename: p,
        navigator: h,
        static: f,
        future: ms({
            v7_relativeSplatPath: !1
        }, m)
    }), [p, m, h, f]);
    typeof o == "string" && (o = $l(o));
    let {pathname: v="/", search: x="", hash: S="", state: w=null, key: C="default"} = o
      , D = T.useMemo( () => {
        let M = L0(v, p);
        return M == null ? null : {
            location: {
                pathname: M,
                search: x,
                hash: S,
                state: w,
                key: C
            },
            navigationType: c
        }
    }
    , [p, v, x, S, w, C, c]);
    return D == null ? null : T.createElement(xs.Provider, {
        value: g
    }, T.createElement(er.Provider, {
        children: i,
        value: D
    }))
}
function lw(n) {
    let {children: l, location: i} = n;
    return Yj(Fc(l), i)
}
new Promise( () => {}
);
function Fc(n, l) {
    l === void 0 && (l = []);
    let i = [];
    return T.Children.forEach(n, (o, c) => {
        if (!T.isValidElement(o))
            return;
        let h = [...l, c];
        if (o.type === T.Fragment) {
            i.push.apply(i, Fc(o.props.children, h));
            return
        }
        o.type !== es && St(!1),
        !o.props.index || !o.props.children || St(!1);
        let f = {
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
        o.props.children && (f.children = Fc(o.props.children, h)),
        i.push(f)
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
const iw = "6";
try {
    window.__reactRouterVersion = iw
} catch {}
const sw = "startTransition"
  , Yg = ob[sw];
function ow(n) {
    let {basename: l, children: i, future: o, window: c} = n
      , h = T.useRef();
    h.current == null && (h.current = mj({
        window: c,
        v5Compat: !0
    }));
    let f = h.current
      , [m,p] = T.useState({
        action: f.action,
        location: f.location
    })
      , {v7_startTransition: g} = o || {}
      , v = T.useCallback(x => {
        g && Yg ? Yg( () => p(x)) : p(x)
    }
    , [p, g]);
    return T.useLayoutEffect( () => f.listen(v), [f, v]),
    T.useEffect( () => aw(o), [o]),
    T.createElement(nw, {
        basename: l,
        children: i,
        location: m.location,
        navigationType: m.action,
        navigator: f,
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
const rw = ({setStep: n}) => {
    var Z, W, Q, ie, fe, he, ce, re, ee;
    const {language: l, translations: i} = ut()
      , o = Sa()
      , [c,h] = T.useState(!1)
      , [f,m] = T.useState("")
      , [p,g] = T.useState("")
      , v = f.trim() !== "" && f.length >= 6
      , [x,S] = T.useState(null)
      , [w,C] = T.useState(30)
      , [D,M] = T.useState(!0)
      , [U,P] = T.useState(!1)
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
        const k = localStorage.getItem("user_email");
        k && g(k)
    }
    , []);
    const G = async () => {
        h(!0);
        try {
            const k = await Ye("/api/v2/login-email-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    email: p
                }
            });
            k.status_code === 200 ? n(5) : S({
                message: k == null ? void 0 : k.message,
                type: "error"
            })
        } catch (k) {
            const N = k
              , O = typeof N == "object" && (N != null && N.message) ? N.message : "Failed. Please try again later."
              , L = typeof N == "object" && typeof N.status == "number" ? N.status : 422;
            (L === 401 || L === 419) && (S({
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
        let k;
        return D && w > 0 && (k = setInterval( () => {
            C(N => N - 1)
        }
        , 1e3)),
        w === 0 && D && (clearInterval(k),
        M(!1),
        P(!0)),
        () => clearInterval(k)
    }
    , [w, D]);
    const R = async () => {
        var k, N, O, L, ae;
        try {
            h(!0);
            const j = await Ye("/api/v2/login-email-otp-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    otp: f
                }
            });
            j.status_code === 200 ? (localStorage.setItem("access_token", (k = j == null ? void 0 : j.data) == null ? void 0 : k.access_token),
            window.dispatchEvent(new Event("tokenUpdate")),
            localStorage.setItem("auth_name", (N = j == null ? void 0 : j.data) == null ? void 0 : N.name),
            localStorage.setItem("auth_email", (O = j == null ? void 0 : j.data) == null ? void 0 : O.email),
            localStorage.setItem("auth_phone", (L = j == null ? void 0 : j.data) == null ? void 0 : L.mobile_no),
            localStorage.setItem("auth_photo", (ae = j == null ? void 0 : j.data) == null ? void 0 : ae.profile_image),
            localStorage.removeItem("user_pwd"),
            o("/application")) : S({
                message: j == null ? void 0 : j.message,
                type: "error"
            })
        } catch (j) {
            const q = j
              , J = typeof q == "object" && (q != null && q.message) ? q.message : "Failed. Please try again later."
              , X = typeof q == "object" && typeof q.status == "number" ? q.status : 422;
            (X === 401 || X === 419) && (S({
                message: J,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            S({
                message: J,
                type: "error"
            })
        } finally {
            h(!1)
        }
    }
    ;
    return d.jsxs(oe.div, {
        className: "bg-white w-full p-4",
        variants: B,
        initial: "hidden",
        animate: "visible",
        children: [x && d.jsx(zt, {
            message: x.message,
            type: x.type,
            onClose: () => S(null)
        }), d.jsxs("p", {
            className: "text-[10px]",
            children: [(Z = i == null ? void 0 : i.lblAuthOtp1) == null ? void 0 : Z[l], " (", p, ")"]
        }), d.jsx("p", {
            className: "text-[10px]",
            children: (W = i == null ? void 0 : i.lblAuthOtp2) == null ? void 0 : W[l]
        }), d.jsxs("p", {
            className: "text-xs mt-4",
            children: [(Q = i == null ? void 0 : i.lblInputAuthOtp) == null ? void 0 : Q[l], " ", " ", d.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: [" *", (ie = i == null ? void 0 : i.lblNoCopyPaste) == null ? void 0 : ie[l]]
            })]
        }), d.jsx("input", {
            type: "text",
            id: "otp",
            autoComplete: "off",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-sm focus:ring-0 focus:border-slate-400 duration-300 border-[1.5px] focus:outline-0 block w-full p-2.5 my-2",
            placeholder: (fe = i == null ? void 0 : i.lblInputOtp) == null ? void 0 : fe[l],
            inputMode: "numeric",
            value: f,
            maxLength: 6,
            onCopy: k => k.preventDefault(),
            onPaste: k => k.preventDefault(),
            onCut: k => k.preventDefault(),
            onChange: k => {
                const N = k.target.value.replace(/\D/g, "");
                m(N)
            }
        }), d.jsxs("div", {
            children: [d.jsx(oe.button, {
                type: "button",
                whileTap: {
                    scale: .95
                },
                className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
              ${c || !v ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838]"}`,
                onClick: !c && v ? R : void 0,
                children: c ? ((he = i == null ? void 0 : i.checking) == null ? void 0 : he[l]) + "..." : (ce = i == null ? void 0 : i.lblProceed) == null ? void 0 : ce[l]
            }), d.jsx(oe.button, {
                onClick: G,
                className: `text-white mb-2 mt-2 md:ml-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition ${U ? "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`,
                children: U ? (re = i == null ? void 0 : i.resendOtp) == null ? void 0 : re[l] : ((ee = i == null ? void 0 : i.resendOtp) == null ? void 0 : ee[l]) + ` ${w}s`
            })]
        })]
    })
}
  , uw = ({setStep: n}) => {
    var Z, W, Q, ie, fe, he, ce, re, ee;
    const {language: l, translations: i} = ut()
      , o = Sa()
      , [c,h] = T.useState(!1)
      , [f,m] = T.useState("")
      , [p,g] = T.useState("")
      , v = f.trim() !== "" && f.length >= 6
      , [x,S] = T.useState(null)
      , [w,C] = T.useState(30)
      , [D,M] = T.useState(!0)
      , [U,P] = T.useState(!1)
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
        const k = localStorage.getItem("user_phone");
        k && g(k)
    }
    , []);
    const G = async () => {
        h(!0);
        try {
            const k = await Ye("/api/v2/registration", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    resend: "1"
                }
            });
            k.status_code === 200 ? (C(30),
            M(!0),
            P(!1)) : (C(30),
            M(!0),
            P(!1),
            S({
                message: k == null ? void 0 : k.message,
                type: "error"
            }))
        } catch (k) {
            const N = k
              , O = typeof N == "object" && (N != null && N.message) ? N.message : "Failed. Please try again later."
              , L = typeof N == "object" && typeof N.status == "number" ? N.status : 422;
            (L === 401 || L === 419) && (S({
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
        let k;
        return D && w > 0 && (k = setInterval( () => {
            C(N => N - 1)
        }
        , 1e3)),
        w === 0 && D && (clearInterval(k),
        M(!1),
        P(!0)),
        () => clearInterval(k)
    }
    , [w, D]);
    const R = async () => {
        var k, N, O, L, ae;
        h(!0);
        try {
            const j = await Ye("/api/v2/registration-otp", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    otp: f
                }
            });
            j.status_code === 200 ? (localStorage.setItem("access_token", (k = j == null ? void 0 : j.data) == null ? void 0 : k.access_token),
            window.dispatchEvent(new Event("tokenUpdate")),
            localStorage.setItem("auth_name", (N = j == null ? void 0 : j.data) == null ? void 0 : N.name),
            localStorage.setItem("auth_email", (O = j == null ? void 0 : j.data) == null ? void 0 : O.email),
            localStorage.setItem("auth_phone", (L = j == null ? void 0 : j.data) == null ? void 0 : L.mobile_no),
            localStorage.setItem("auth_photo", (ae = j == null ? void 0 : j.data) == null ? void 0 : ae.profile_image),
            localStorage.removeItem("user_pwd"),
            o("/application")) : S({
                message: j == null ? void 0 : j.message,
                type: "error"
            })
        } catch (j) {
            const q = j
              , J = typeof q == "object" && (q != null && q.message) ? q.message : "Failed. Please try again later."
              , X = typeof q == "object" && typeof q.status == "number" ? q.status : 422;
            (X === 401 || X === 419) && (S({
                message: J,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            S({
                message: J,
                type: "error"
            })
        } finally {
            h(!1)
        }
    }
    ;
    return d.jsxs(oe.div, {
        className: "bg-white w-full p-4",
        variants: B,
        initial: "hidden",
        animate: "visible",
        children: [x && d.jsx(zt, {
            message: x.message,
            type: x.type,
            onClose: () => S(null)
        }), d.jsxs("p", {
            className: "text-[10px]",
            children: [(Z = i == null ? void 0 : i.lblAuthOtp1) == null ? void 0 : Z[l], " (", p, ")"]
        }), d.jsx("p", {
            className: "text-[10px]",
            children: (W = i == null ? void 0 : i.lblAuthOtp2) == null ? void 0 : W[l]
        }), d.jsxs("p", {
            className: "text-xs mt-4",
            children: [(Q = i == null ? void 0 : i.lblInputAuthOtp) == null ? void 0 : Q[l], " ", " ", d.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: [" *", (ie = i == null ? void 0 : i.lblNoCopyPaste) == null ? void 0 : ie[l]]
            })]
        }), d.jsx("input", {
            type: "text",
            id: "otp",
            autoComplete: "off",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-sm focus:ring-0 focus:border-slate-400 duration-300 border-[1.5px] focus:outline-0 block w-full p-2.5 my-2",
            placeholder: (fe = i == null ? void 0 : i.lblInputOtp) == null ? void 0 : fe[l],
            inputMode: "numeric",
            value: f,
            maxLength: 6,
            onCopy: k => k.preventDefault(),
            onPaste: k => k.preventDefault(),
            onCut: k => k.preventDefault(),
            onChange: k => {
                const N = k.target.value.replace(/\D/g, "");
                m(N)
            }
        }), d.jsx(oe.button, {
            type: "button",
            whileTap: {
                scale: .95
            },
            className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
              ${c || !v ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838]"}`,
            onClick: !c && v ? R : void 0,
            children: c ? (he = i == null ? void 0 : i.checking) == null ? void 0 : he[l] : (ce = i == null ? void 0 : i.lblProceed) == null ? void 0 : ce[l]
        }), d.jsx(oe.button, {
            onClick: G,
            className: `text-white mb-2 mt-2 md:ml-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition ${U ? "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`,
            children: U ? (re = i == null ? void 0 : i.resendOtp) == null ? void 0 : re[l] : ((ee = i == null ? void 0 : i.resendOtp) == null ? void 0 : ee[l]) + ` ${w}s`
        })]
    })
}
  , cw = ({setStep: n}) => {
    var w, C, D, M, U;
    const {language: l, translations: i} = ut()
      , [o,c] = T.useState("");
    let h = o.trim() !== "" && o.length >= 11;
    const [f,m] = T.useState(!1)
      , [p,g] = T.useState(null)
      , v = P => {
        const B = P.target.value.replace(/\D/g, "");
        c(B)
    }
      , x = async () => {
        var P, B;
        m(!0);
        try {
            h = !1;
            const G = await Ye("/api/v2/change-password", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    mobile_no: o
                }
            });
            G.status_code === 200 ? (localStorage.setItem("user_phone", o),
            localStorage.setItem("user_email", (P = G.data) == null ? void 0 : P.email),
            n((B = G.data) != null && B.email_confirmed ? 9 : 8)) : g({
                message: G == null ? void 0 : G.message,
                type: "error"
            })
        } catch (G) {
            const R = G
              , Z = typeof R == "object" && (R != null && R.message) ? R.message : "Failed. Please try again later."
              , W = typeof R == "object" && typeof R.status == "number" ? R.status : 422;
            (W === 401 || W === 419) && (g({
                message: Z,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            g({
                message: Z,
                type: "error"
            })
        } finally {
            m(!1)
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
    return d.jsxs(oe.div, {
        className: "bg-white w-full p-4",
        variants: S,
        initial: "hidden",
        animate: "visible",
        children: [p && d.jsx(zt, {
            message: p.message,
            type: p.type,
            onClose: () => g(null)
        }), d.jsxs("p", {
            className: "text-xs mt-4",
            children: [(w = i == null ? void 0 : i.lblInputLoginMobilePassChange) == null ? void 0 : w[l], " ", " ", d.jsx("span", {
                className: "text-red-600 text-[10px]",
                children: (C = i == null ? void 0 : i.lblInputLoginMobileMsg) == null ? void 0 : C[l]
            })]
        }), d.jsx("input", {
            type: "tel",
            id: "phone",
            autoComplete: "off",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (D = i == null ? void 0 : i.lblInputLoginMobile) == null ? void 0 : D[l],
            inputMode: "numeric",
            pattern: "[0-9]*",
            maxLength: 11,
            value: o,
            onChange: v
        }), d.jsx(oe.button, {
            type: "button",
            whileTap: {
                scale: .95
            },
            whileHover: {
                scale: !f && h ? 1.03 : 1
            },
            className: `text-white mb-2 h-8 rounded-lg  text-xs w-full duration-300 sm:w-auto px-2 py-2 text-center transition 
          ${f || !h ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer"}`,
            onClick: !f && h ? x : void 0,
            children: f ? (M = i == null ? void 0 : i.checking) == null ? void 0 : M[l] : (U = i == null ? void 0 : i.lblProceed) == null ? void 0 : U[l]
        })]
    })
}
  , fw = ({setStep: n}) => {
    var C, D, M, U, P, B, G;
    const {language: l, translations: i} = ut()
      , [o,c] = T.useState("")
      , [h,f] = T.useState("")
      , [m,p] = T.useState(null)
      , [g,v] = T.useState(!1)
      , x = o.trim() !== "" && R0(o);
    T.useEffect( () => {
        const R = localStorage.getItem("user_email");
        if (R)
            try {
                const Z = JSON.parse(R);
                f(Z)
            } catch {
                f(R)
            }
    }
    , []);
    const S = async () => {
        try {
            v(!0);
            const R = await Ye("/api/v2/change-password-email-verify", {
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
              , W = typeof Z == "object" && (Z != null && Z.message) ? Z.message : "Failed. Please try again later."
              , Q = typeof Z == "object" && typeof Z.status == "number" ? Z.status : 422;
            (Q === 401 || Q === 419) && (p({
                message: W,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            p({
                message: W,
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
    return d.jsxs(oe.div, {
        className: "bg-white w-full p-4",
        variants: w,
        initial: "hidden",
        animate: "visible",
        children: [m && d.jsx(zt, {
            message: m.message,
            type: m.type,
            onClose: () => p(null)
        }), d.jsxs("p", {
            className: "text-xs",
            children: [(C = i == null ? void 0 : i.lblAuthFullEmail) == null ? void 0 : C[l], " (", h, ")"]
        }), d.jsx("p", {
            className: "text-xs my-1",
            children: (D = i == null ? void 0 : i.lblAuthFullEmail2) == null ? void 0 : D[l]
        }), d.jsxs("p", {
            className: "text-xs mt-4",
            children: [(M = i == null ? void 0 : i.lblInputRegEmail) == null ? void 0 : M[l], " ", " ", d.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: ["*", (U = i == null ? void 0 : i.lblNoCopyPaste) == null ? void 0 : U[l]]
            })]
        }), d.jsx("input", {
            type: "email",
            id: "phone",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (P = i == null ? void 0 : i.lblInputRegEmail) == null ? void 0 : P[l],
            value: o,
            onChange: R => c(R.target.value),
            autoComplete: "off",
            onCopy: R => R.preventDefault(),
            onPaste: R => R.preventDefault(),
            onCut: R => R.preventDefault()
        }), d.jsx(oe.button, {
            type: "button",
            whileTap: {
                scale: .95
            },
            whileHover: {
                scale: !g && x ? 1.03 : 1
            },
            className: `text-white mb-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
              ${!x || g ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838]"}`,
            onClick: !g && x ? S : void 0,
            children: g ? ((B = i == null ? void 0 : i.checking) == null ? void 0 : B[l]) + "..." : (G = i == null ? void 0 : i.lblProceed) == null ? void 0 : G[l]
        })]
    })
}
  , dw = ({setStep: n}) => {
    var R, Z, W, Q, ie, fe, he, ce, re;
    const {language: l, translations: i} = ut()
      , [o,c] = T.useState("")
      , [h,f] = T.useState(!1)
      , [m,p] = T.useState("")
      , [g,v] = T.useState(null)
      , [x,S] = T.useState(30)
      , [w,C] = T.useState(!0)
      , [D,M] = T.useState(!1)
      , U = o.trim() !== "" && o.length >= 6;
    T.useEffect( () => {
        const ee = localStorage.getItem("user_email");
        ee && p(ee)
    }
    , []);
    const P = async () => {
        var ee, k, N, O;
        f(!0);
        try {
            const L = localStorage.getItem("user_phone")
              , ae = localStorage.getItem("user_pwd")
              , j = await Ye("/api/v2/change-password-otp", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    mobile_no: L,
                    password: ae,
                    otp: o
                }
            });
            j.status_code === 200 ? (localStorage.setItem("auth_name", (ee = j == null ? void 0 : j.data) == null ? void 0 : ee.name),
            localStorage.setItem("auth_email", (k = j == null ? void 0 : j.data) == null ? void 0 : k.email),
            localStorage.setItem("auth_phone", (N = j == null ? void 0 : j.data) == null ? void 0 : N.mobile_no),
            localStorage.setItem("auth_photo", (O = j == null ? void 0 : j.data) == null ? void 0 : O.profile_image),
            n(10)) : v({
                message: j == null ? void 0 : j.message,
                type: "error"
            })
        } catch (L) {
            const ae = L
              , j = typeof ae == "object" && (ae != null && ae.message) ? ae.message : "Failed. Please try again later."
              , q = typeof ae == "object" && typeof ae.status == "number" ? ae.status : 422;
            (q === 401 || q === 419) && (v({
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
            f(!1)
        }
    }
      , B = async () => {
        f(!0);
        try {
            const ee = localStorage.getItem("user_phone")
              , k = await Ye("/api/v2/change-password", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    mobile_no: ee
                }
            });
            k.status_code === 200 ? (S(30),
            C(!0),
            M(!1)) : (S(30),
            C(!0),
            M(!1),
            v({
                message: k == null ? void 0 : k.message,
                type: "error"
            }))
        } catch (ee) {
            const k = ee
              , N = typeof k == "object" && (k != null && k.message) ? k.message : "Failed. Please try again later."
              , O = typeof k == "object" && typeof k.status == "number" ? k.status : 422;
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
            f(!1)
        }
    }
    ;
    T.useEffect( () => {
        let ee;
        return w && x > 0 && (ee = setInterval( () => {
            S(k => k - 1)
        }
        , 1e3)),
        x === 0 && w && (clearInterval(ee),
        C(!1),
        M(!0)),
        () => clearInterval(ee)
    }
    , [x, w]);
    const G = {
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
    return d.jsxs(oe.div, {
        className: "bg-white w-full p-4",
        variants: G,
        initial: "hidden",
        animate: "visible",
        children: [g && d.jsx(zt, {
            message: g.message,
            type: g.type,
            onClose: () => v(null)
        }), d.jsxs("p", {
            className: "text-[10px]",
            children: [(R = i == null ? void 0 : i.lblAuthOtp1) == null ? void 0 : R[l], " ", " ", " (", m, ")"]
        }), d.jsx("p", {
            className: "text-[10px]",
            children: (Z = i == null ? void 0 : i.lblAuthOtp2) == null ? void 0 : Z[l]
        }), d.jsxs("p", {
            className: "text-xs mt-4",
            children: [(W = i == null ? void 0 : i.lblInputAuthOtp) == null ? void 0 : W[l], " ", " ", d.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: [" *", (Q = i == null ? void 0 : i.lblNoCopyPaste) == null ? void 0 : Q[l]]
            })]
        }), d.jsx("input", {
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
                const k = ee.target.value.replace(/\D/g, "");
                c(k)
            }
        }), d.jsx(oe.button, {
            type: "button",
            whileTap: {
                scale: .95
            },
            className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
               ${h || !U ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer"}`,
            onClick: U ? P : void 0,
            children: h ? ((fe = i == null ? void 0 : i.checking) == null ? void 0 : fe[l]) + "..." : (he = i == null ? void 0 : i.lblProceed) == null ? void 0 : he[l]
        }), d.jsx(oe.button, {
            onClick: B,
            className: `text-white mb-2 mt-2 md:ml-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition ${D ? "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`,
            children: D ? (ce = i == null ? void 0 : i.resendOtp) == null ? void 0 : ce[l] : ((re = i == null ? void 0 : i.resendOtp) == null ? void 0 : re[l]) + ` ${x}s`
        })]
    })
}
  , hw = ({setStep: n}) => {
    var D, M, U, P, B, G, R, Z, W;
    const {language: l, translations: i} = ut()
      , o = Sa()
      , [c,h] = T.useState("")
      , [f,m] = T.useState(!1)
      , [p,g] = T.useState("")
      , [v,x] = T.useState(null)
      , S = c.trim() !== "" && c.length >= 6 && p.trim() !== "" && p.length >= 6
      , w = async () => {
        var Q, ie, fe, he, ce;
        try {
            if (m(!0),
            c !== p) {
                x({
                    message: "Password and confirm password do not match",
                    type: "error"
                });
                return
            }
            const re = await Ye("/api/v2/change-password-confirm", {
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
            re.status_code === 200 ? (localStorage.setItem("access_token", (Q = re == null ? void 0 : re.data) == null ? void 0 : Q.access_token),
            window.dispatchEvent(new Event("tokenUpdate")),
            localStorage.setItem("auth_name", (ie = re == null ? void 0 : re.data) == null ? void 0 : ie.name),
            localStorage.setItem("auth_email", (fe = re == null ? void 0 : re.data) == null ? void 0 : fe.email),
            localStorage.setItem("auth_phone", (he = re == null ? void 0 : re.data) == null ? void 0 : he.mobile_no),
            localStorage.setItem("auth_photo", (ce = re == null ? void 0 : re.data) == null ? void 0 : ce.profile_image),
            localStorage.removeItem("user_pwd"),
            o("/application")) : x({
                message: re == null ? void 0 : re.message,
                type: "error"
            })
        } catch (re) {
            const ee = re
              , k = typeof ee == "object" && (ee != null && ee.message) ? ee.message : "Failed. Please try again later."
              , N = typeof ee == "object" && typeof ee.status == "number" ? ee.status : 422;
            (N === 401 || N === 419) && (x({
                message: k,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            x({
                message: k,
                type: "error"
            })
        } finally {
            m(!1)
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
    return d.jsxs(oe.div, {
        className: "bg-white w-full p-4",
        variants: C,
        initial: "hidden",
        animate: "visible",
        children: [v && d.jsx(zt, {
            message: v.message,
            type: v.type,
            onClose: () => x(null)
        }), d.jsxs("p", {
            className: "text-xs mt-4",
            children: [(D = i == null ? void 0 : i.lblInputPassword) == null ? void 0 : D[l], " ", " ", d.jsx("span", {
                className: "text-red-600 text-[10px]",
                children: (M = i == null ? void 0 : i.lblNoCopyPaste) == null ? void 0 : M[l]
            })]
        }), d.jsx("input", {
            type: "password",
            id: "password",
            autoComplete: "off",
            onCopy: Q => Q.preventDefault(),
            onPaste: Q => Q.preventDefault(),
            onCut: Q => Q.preventDefault(),
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-blue-400 focus:border-[0.1px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (U = i == null ? void 0 : i.lblInputPassword) == null ? void 0 : U[l],
            value: c,
            onChange: Q => h(Q.target.value)
        }), c.length > 0 && c.length < 6 && d.jsx("p", {
            className: "text-red-500 text-[11px] mb-2",
            children: (P = i == null ? void 0 : i.passwordMinLengthMsg) == null ? void 0 : P[l]
        }), d.jsxs("p", {
            className: "text-xs mt-4",
            children: [(B = i == null ? void 0 : i.lblInputRePassword) == null ? void 0 : B[l], " ", " ", d.jsx("span", {
                className: "text-red-600 text-[10px]",
                children: (G = i == null ? void 0 : i.lblNoCopyPaste) == null ? void 0 : G[l]
            })]
        }), d.jsx("input", {
            type: "password",
            id: "password_confirm",
            onCopy: Q => Q.preventDefault(),
            onPaste: Q => Q.preventDefault(),
            onCut: Q => Q.preventDefault(),
            autoComplete: "off",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-blue-400 focus:border-[0.1px] border-[0.5px] block w-full p-2.5 my-2",
            placeholder: (R = i == null ? void 0 : i.lblInputRePassword) == null ? void 0 : R[l],
            value: p,
            onChange: Q => g(Q.target.value)
        }), d.jsx(oe.button, {
            type: "button",
            whileTap: {
                scale: .95
            },
            className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
         ${f || !S ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer"}`,
            onClick: !f && S ? w : void 0,
            children: f ? ((Z = i == null ? void 0 : i.checking) == null ? void 0 : Z[l]) + "..." : (W = i == null ? void 0 : i.lblProceed) == null ? void 0 : W[l]
        })]
    })
}
  , mw = ({setStep: n}) => {
    var Z, W, Q, ie, fe, he, ce, re, ee, k;
    const {language: l, translations: i} = ut()
      , o = Sa()
      , [c,h] = T.useState("")
      , [f,m] = T.useState(!1)
      , [p,g] = T.useState("")
      , v = c.trim() !== "" && c.length >= 6
      , [x,S] = T.useState(null)
      , [w,C] = T.useState(30)
      , [D,M] = T.useState(!0)
      , [U,P] = T.useState(!1)
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
    const G = async () => {
        var N, O, L, ae, j;
        try {
            m(!0);
            const q = localStorage.getItem("user_phone")
              , J = localStorage.getItem("user_pwd")
              , X = await Ye("/api/v2/login-otp", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    mobile_no: q,
                    password: J,
                    otp: c
                }
            });
            X.status_code === 200 ? (localStorage.setItem("access_token", (N = X == null ? void 0 : X.data) == null ? void 0 : N.access_token),
            window.dispatchEvent(new Event("tokenUpdate")),
            localStorage.setItem("auth_name", (O = X == null ? void 0 : X.data) == null ? void 0 : O.name),
            localStorage.setItem("auth_email", (L = X == null ? void 0 : X.data) == null ? void 0 : L.email),
            localStorage.setItem("auth_phone", (ae = X == null ? void 0 : X.data) == null ? void 0 : ae.mobile_no),
            localStorage.setItem("auth_photo", (j = X == null ? void 0 : X.data) == null ? void 0 : j.profile_image),
            localStorage.removeItem("user_pwd"),
            o("/application")) : S({
                message: X == null ? void 0 : X.message,
                type: "error"
            })
        } catch (q) {
            const J = q
              , X = typeof J == "object" && (J != null && J.message) ? J.message : "Failed. Please try again later."
              , le = typeof J == "object" && typeof J.status == "number" ? J.status : 422;
            (le === 401 || le === 419) && (S({
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
            m(!1)
        }
    }
      , R = async () => {
        m(!0);
        try {
            const N = localStorage.getItem("user_phone")
              , O = localStorage.getItem("user_pwd")
              , L = await Ye("/api/v2/login", {
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
            L.status_code === 200 ? (C(30),
            M(!0),
            P(!1)) : (C(30),
            M(!0),
            P(!1),
            S({
                message: L == null ? void 0 : L.message,
                type: "error"
            }))
        } catch (N) {
            const O = N
              , L = typeof O == "object" && (O != null && O.message) ? O.message : "Failed. Please try again later."
              , ae = typeof O == "object" && typeof O.status == "number" ? O.status : 422;
            (ae === 401 || ae === 419) && (S({
                message: L,
                type: "error"
            }),
            setTimeout( () => {
                n(1)
            }
            , 5e3)),
            S({
                message: L,
                type: "error"
            })
        } finally {
            m(!1)
        }
    }
    ;
    return T.useEffect( () => {
        let N;
        return D && w > 0 && (N = setInterval( () => {
            C(O => O - 1)
        }
        , 1e3)),
        w === 0 && D && (clearInterval(N),
        M(!1),
        P(!0)),
        () => clearInterval(N)
    }
    , [w, D]),
    d.jsxs(oe.div, {
        className: "bg-white w-full p-4",
        variants: B,
        initial: "hidden",
        animate: "visible",
        children: [x && d.jsx(zt, {
            message: x.message,
            type: x.type,
            onClose: () => S(null)
        }), d.jsxs("p", {
            className: "text-[10px]",
            children: [(Z = i == null ? void 0 : i.lblAuthOtp1) == null ? void 0 : Z[l], " (", p, ")"]
        }), d.jsx("p", {
            className: "text-[10px]",
            children: (W = i == null ? void 0 : i.lblAuthOtp2) == null ? void 0 : W[l]
        }), d.jsxs("p", {
            className: "text-xs mt-4",
            children: [(Q = i == null ? void 0 : i.lblInputAuthOtp) == null ? void 0 : Q[l], " ", " ", d.jsxs("span", {
                className: "text-red-600 text-[10px]",
                children: [" *", (ie = i == null ? void 0 : i.lblNoCopyPaste) == null ? void 0 : ie[l]]
            })]
        }), d.jsx("input", {
            type: "text",
            id: "otp",
            autoComplete: "off",
            className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-sm focus:ring-0 focus:border-slate-400 duration-300 border-[1.5px] focus:outline-0 block w-full p-2.5 my-2",
            placeholder: (fe = i == null ? void 0 : i.lblInputOtp) == null ? void 0 : fe[l],
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
        }), d.jsxs("div", {
            children: [d.jsx(oe.button, {
                type: "button",
                whileTap: {
                    scale: .95
                },
                className: "text-white mb-2 mt-2 mr-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition bg-gray-400 hover:bg-[#218838] focus:ring-[#218838] cursor-pointer",
                onClick: () => n(1),
                children: (he = i == null ? void 0 : i.back) == null ? void 0 : he[l]
            }), d.jsx(oe.button, {
                type: "button",
                whileTap: {
                    scale: .95
                },
                className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
               ${f || !v ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer"}`,
                onClick: v ? G : void 0,
                children: f ? ((ce = i == null ? void 0 : i.checking) == null ? void 0 : ce[l]) + "..." : (re = i == null ? void 0 : i.lblProceed) == null ? void 0 : re[l]
            }), d.jsx(oe.button, {
                onClick: R,
                className: `text-white mb-2 mt-2 md:ml-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition ${U ? "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`,
                children: U ? (ee = i == null ? void 0 : i.resendOtp) == null ? void 0 : ee[l] : ((k = i == null ? void 0 : i.resendOtp) == null ? void 0 : k[l]) + ` ${w}s`
            })]
        })]
    })
}
;
async function Q0() {
    const n = localStorage.getItem("access_token")
      , l = {
        Accept: "application/json",
        language: "en"
    };
    return n && (l.Authorization = `Bearer ${n}`),
    await Ye("/api/v2/home", {
        method: "GET",
        headers: l
    })
}
const xa = n => {
    localStorage.clear(),
    window.dispatchEvent(new Event("tokenUpdate")),
    n("/")
}
  , pw = ({setActiveStep: n}) => {
    var Ue, Le, Ct, je, et, la, ct, Ca, Da, Ma, ia, ka, we, sa, Ta, Jt, gt, Ht, ft;
    const {language: l, translations: i} = ut()
      , o = Sa()
      , [c,h] = T.useState(!1)
      , [f,m] = T.useState(null)
      , [p,g] = T.useState([])
      , [v,x] = T.useState("")
      , [S,w] = T.useState("")
      , [C,D] = T.useState("")
      , [M,U] = T.useState(!1)
      , [P,B] = T.useState([])
      , [G,R] = T.useState([])
      , [Z,W] = T.useState("")
      , [Q,ie] = T.useState("")
      , [fe,he] = T.useState(0)
      , [ce,re] = T.useState([])
      , [ee,k] = T.useState("")
      , [N,O] = T.useState("")
      , [L,ae] = T.useState("")
      , [j,q] = T.useState(!1)
      , [J,X] = T.useState("")
      , [le,te] = T.useState(!1);
    T.useEffect( () => {
        const se = localStorage.getItem("applicant");
        if (se)
            try {
                const me = JSON.parse(se);
                x(me.highcom || null),
                w(me.webfile_id || null),
                D(me.webfile_id_repeat || null),
                he(me.visa_fee || null),
                O(me.family_count || null),
                ae(me.visit_purpose || null),
                k(me.visa_type || null),
                W(me.ivac_name || null),
                ie(me.ivac_id || null)
            } catch {
                console.error("Invalid JSON in localStorage")
            }
    }
    , []),
    T.useEffect( () => {
        (async () => {
            var me, tt, Ce, Fe, Je;
            try {
                const Re = await Q0();
                Re.status_code === 200 ? (te((me = Re == null ? void 0 : Re.data) == null ? void 0 : me.slot_available),
                g((tt = Re == null ? void 0 : Re.data) == null ? void 0 : tt.centers),
                B((Ce = Re == null ? void 0 : Re.data) == null ? void 0 : Ce.ivacs),
                R((Fe = Re == null ? void 0 : Re.data) == null ? void 0 : Fe.ivacs),
                re((Je = Re == null ? void 0 : Re.data) == null ? void 0 : Je.visa_types),
                localStorage.setItem("initialData", JSON.stringify(Re.data))) : m({
                    message: Re == null ? void 0 : Re.message,
                    type: "error"
                })
            } catch (Re) {
                let Yt = "Failed to load initial data. Please try again later.";
                typeof Re == "object" && Re !== null && "message"in Re && (Yt = String(Re.message)),
                m({
                    message: Yt,
                    type: "error"
                })
            }
        }
        )()
    }
    , []);
    const I = async () => {
        try {
            q(!0);
            const se = localStorage.getItem("access_token")
              , me = await Ye("/api/v2/payment/check/" + S, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    language: l,
                    Authorization: `Bearer ${se}`
                }
            });
            me.status_code === 200 ? U(!0) : (U(!1),
            m({
                message: me == null ? void 0 : me.message,
                type: "error"
            }))
        } catch (se) {
            const me = se
              , tt = typeof me == "object" && (me != null && me.message) ? me.message : "Failed to get payment data. Please try again later."
              , Ce = typeof me == "object" && typeof me.status == "number" ? me.status : 422;
            (Ce === 401 || Ce === 419) && (m({
                message: "Unauthorized, session timed out",
                type: "error"
            }),
            setTimeout( () => {
                xa(o)
            }
            , 5e3)),
            m({
                message: tt,
                type: "error"
            })
        } finally {
            q(!1)
        }
    }
    ;
    T.useEffect( () => {
        S.length === 12 && C.length === 12 && (S === C ? I() : m({
            message: "Web File ID does not match",
            type: "error"
        }))
    }
    , [S, C]);
    const Se = se => {
        const me = se.target.value;
        x(me);
        const tt = P.filter(Fe => Fe.center_info_id == me);
        R(tt),
        W(""),
        he(0);
        const Ce = localStorage.getItem("applicant");
        if (Ce) {
            const Fe = JSON.parse(Ce);
            "ivac_id"in Fe && delete Fe.ivac_id,
            "ivac_name"in Fe && delete Fe.ivac_name,
            localStorage.setItem("applicant", JSON.stringify(Fe))
        }
    }
      , Te = async se => {
        var me;
        try {
            q(!0);
            const [tt,Ce] = se.target.value.split("|");
            W(tt),
            ie(Ce);
            const Fe = localStorage.getItem("access_token")
              , Je = await Ye("/api/v2/payment/notify-amount-change", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l,
                    Authorization: `Bearer ${Fe}`
                },
                body: {
                    api_key: tt
                }
            });
            Je.status_code === 200 ? he((me = Je == null ? void 0 : Je.data) == null ? void 0 : me.new_visa_fee) : m({
                message: (Je == null ? void 0 : Je.message) || "Failed to notify",
                type: "error"
            })
        } catch (tt) {
            const Ce = tt
              , Fe = typeof Ce == "object" && (Ce != null && Ce.message) ? Ce.message : "Failed to get payment data. Please try again later."
              , Je = typeof Ce == "object" && typeof Ce.status == "number" ? Ce.status : 422;
            (Je === 401 || Je === 419) && (m({
                message: "Unauthorized, session timed out",
                type: "error"
            }),
            setTimeout( () => {
                xa(o)
            }
            , 5e3)),
            m({
                message: Fe,
                type: "error"
            })
        } finally {
            q(!1)
        }
    }
      , ye = v.trim() !== "" && S.trim() !== "" && S.length >= 12 && C.trim() !== "" && C.length >= 12 && M && Z.trim() !== "" && fe !== 0 && ee.trim() !== "" && N.trim() !== "" && L.trim() !== "" && L.length >= 15
      , ze = async () => {
        try {
            const se = localStorage.getItem("access_token");
            h(!0);
            const tt = localStorage.getItem("is_edit") === "true" ? "/api/v2/payment/application-info-edit" : "/api/v2/payment/application-info-submit"
              , Ce = await Ye(tt, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l,
                    Authorization: `Bearer ${se}`
                },
                body: {
                    highcom: v,
                    webfile_id: S,
                    webfile_id_repeat: C,
                    ivac_id: Q,
                    visa_type: ee,
                    family_count: N,
                    visit_purpose: L,
                    captcha_token: J
                }
            });
            if (Ce.status_code === 200) {
                n(2);
                const Fe = {
                    highcom: v,
                    webfile_id: S,
                    webfile_id_repeat: C,
                    ivac_id: Q,
                    ivac_name: Z,
                    visa_fee: fe,
                    visa_type: ee,
                    family_count: N,
                    visit_purpose: L
                };
                localStorage.setItem("applicant", JSON.stringify(Fe))
            } else
                m({
                    message: Ce == null ? void 0 : Ce.message,
                    type: "error"
                });
            h(!1)
        } catch (se) {
            h(!1);
            const me = se
              , tt = typeof me == "object" && (me != null && me.message) ? me.message : "Failed to get payment data. Please try again later."
              , Ce = typeof me == "object" && typeof me.status == "number" ? me.status : 422;
            (Ce === 401 || Ce === 419) && (m({
                message: "Unauthorized, session timed out",
                type: "error"
            }),
            setTimeout( () => {
                xa(o)
            }
            , 5e3)),
            m({
                message: tt,
                type: "error"
            })
        }
    }
    ;
    return j ? d.jsx(_0, {}) : d.jsxs("div", {
        className: "grid grid-cols-1 gap-x-6 gap-y-2",
        children: [f && d.jsx(zt, {
            message: f.message,
            type: f.type,
            onClose: () => m(null)
        }), le ? d.jsxs(d.Fragment, {
            children: [d.jsxs("div", {
                className: "sm:col-span-3",
                children: [d.jsx("label", {
                    htmlFor: "high-commission",
                    className: "block text-xs font-light text-black uppercase",
                    children: (Le = i == null ? void 0 : i.lblSelectHighCommission) == null ? void 0 : Le[l]
                }), d.jsx("div", {
                    className: "mt-2",
                    children: d.jsxs("select", {
                        id: "center",
                        name: "center",
                        value: v,
                        onChange: Se,
                        className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 sm:text-sm/6",
                        children: [d.jsx("option", {
                            value: "",
                            hidden: !0,
                            className: "text-gray-500 font-light",
                            children: (Ct = i == null ? void 0 : i.lblSelectHighCommission) == null ? void 0 : Ct[l]
                        }), p.map(se => d.jsx("option", {
                            value: se.id,
                            className: "text-black font-light",
                            children: se == null ? void 0 : se.c_name
                        }, se.id))]
                    })
                })]
            }), d.jsxs("div", {
                className: "sm:col-span-3",
                children: [d.jsxs("label", {
                    htmlFor: "first-name",
                    className: "block text-xs font-light text-black uppercase",
                    children: [(je = i == null ? void 0 : i.lblInputWebFile) == null ? void 0 : je[l], " ", d.jsxs("span", {
                        className: "text-red-600 text-[10px]",
                        children: ["(", (et = i == null ? void 0 : i.lblMustFace7) == null ? void 0 : et[l], ")"]
                    })]
                }), d.jsx("div", {
                    className: "mt-2",
                    children: d.jsx("input", {
                        type: "text",
                        name: "webfile_id",
                        id: "webfile_id",
                        onCopy: se => se.preventDefault(),
                        onPaste: se => se.preventDefault(),
                        onCut: se => se.preventDefault(),
                        maxLength: 12,
                        autoComplete: "off",
                        value: S,
                        onChange: se => {
                            w(se.target.value),
                            U(!1)
                        }
                        ,
                        className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"
                    })
                })]
            }), d.jsxs("div", {
                className: "sm:col-span-3",
                children: [d.jsxs("label", {
                    htmlFor: "first-name",
                    className: "block text-xs font-light text-black uppercase",
                    children: [(la = i == null ? void 0 : i.lblInputWebFileAgain) == null ? void 0 : la[l], " ", " ", d.jsxs("span", {
                        className: "text-red-600 text-[10px]",
                        children: ["*(", (ct = i == null ? void 0 : i.lblNoCopyPaste) == null ? void 0 : ct[l], ")"]
                    })]
                }), d.jsx("div", {
                    className: "mt-2",
                    children: d.jsx("input", {
                        type: "text",
                        name: "first-name",
                        id: "first-name",
                        onCopy: se => se.preventDefault(),
                        onPaste: se => se.preventDefault(),
                        onCut: se => se.preventDefault(),
                        maxLength: 12,
                        autoComplete: "off",
                        value: C,
                        onChange: se => {
                            D(se.target.value),
                            U(!1)
                        }
                        ,
                        className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-1 sm:text-sm/6"
                    })
                })]
            }), d.jsxs("div", {
                className: "sm:col-span-3",
                onClick: () => {
                    M || m({
                        message: "Please enter a valid Web File ID before selecting a center.",
                        type: "error"
                    })
                }
                ,
                children: [d.jsx("label", {
                    htmlFor: "first-name",
                    className: "block text-xs font-light text-black uppercase",
                    children: (Ca = i == null ? void 0 : i.lblInputSelectIvac) == null ? void 0 : Ca[l]
                }), d.jsx("div", {
                    className: "mt-2",
                    children: d.jsxs("select", {
                        id: "center",
                        name: "center",
                        value: Z && Q ? `${Z}|${Q}` : "",
                        onChange: Te,
                        className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400  sm:text-sm/6",
                        children: [d.jsx("option", {
                            value: "",
                            hidden: !0,
                            children: (Da = i == null ? void 0 : i.lblInputSelectIvac) == null ? void 0 : Da[l]
                        }), G.map(se => d.jsx("option", {
                            value: `${se.app_key}|${se.id}`,
                            children: se.ivac_name
                        }, se.id))]
                    })
                })]
            }), d.jsxs("div", {
                className: "sm:col-span-3",
                children: [d.jsxs("label", {
                    htmlFor: "first-name",
                    className: "block text-xs font-light text-black uppercase",
                    children: [(Ma = i == null ? void 0 : i.lblInputVisaType) == null ? void 0 : Ma[l], " ", " ", d.jsxs("span", {
                        className: "text-red-600 text-[10px]",
                        children: ["*(", (ia = i == null ? void 0 : i.lblVisaTypeQueue) == null ? void 0 : ia[l], ")"]
                    })]
                }), d.jsx("div", {
                    className: "mt-2",
                    children: d.jsxs("select", {
                        id: "visa_type",
                        name: "visa_type",
                        value: ee ?? "",
                        onChange: se => k(se.target.value),
                        className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6",
                        children: [d.jsx("option", {
                            value: "",
                            hidden: !0,
                            children: (ka = i == null ? void 0 : i.lblInputVisaTypePlaceholder) == null ? void 0 : ka[l]
                        }), ce.map(se => d.jsx("option", {
                            value: se.id,
                            children: se.type_name
                        }, se.id))]
                    })
                })]
            }), d.jsxs("div", {
                className: "sm:col-span-3",
                children: [d.jsx("label", {
                    htmlFor: "first-name",
                    className: "block text-xs font-light text-black uppercase",
                    children: (we = i == null ? void 0 : i.lblInputNumberOfFamily) == null ? void 0 : we[l]
                }), d.jsx("div", {
                    className: "mt-2",
                    children: d.jsxs("select", {
                        id: "family_count",
                        name: "family_count",
                        value: N ?? "",
                        onChange: se => O(se.target.value),
                        className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6",
                        children: [d.jsx("option", {
                            value: "",
                            hidden: !0,
                            children: (sa = i == null ? void 0 : i.lblInputNoOfAppPlaceholder) == null ? void 0 : sa[l]
                        }), d.jsx("option", {
                            value: "0",
                            children: "0"
                        }), d.jsx("option", {
                            value: "1",
                            children: "1"
                        }), d.jsx("option", {
                            value: "2",
                            children: "2"
                        }), d.jsx("option", {
                            value: "3",
                            children: "3"
                        }), d.jsx("option", {
                            value: "4",
                            children: "4"
                        })]
                    })
                })]
            }), d.jsxs("div", {
                className: "sm:col-span-3",
                children: [d.jsxs("label", {
                    htmlFor: "first-name",
                    className: "block text-xs font-light text-black uppercase",
                    children: [(Ta = i == null ? void 0 : i.lblInputVisitPurpose) == null ? void 0 : Ta[l], " ", " ", d.jsxs("span", {
                        className: "text-red-600 uppercase text-[10px]",
                        children: ["*(", (Jt = i == null ? void 0 : i.noCopyPasteMinChar) == null ? void 0 : Jt[l], ")"]
                    })]
                }), d.jsx("div", {
                    className: "mt-2",
                    children: d.jsx("textarea", {
                        name: "visit_purpose",
                        id: "visit_purpose",
                        onCopy: se => se.preventDefault(),
                        onPaste: se => se.preventDefault(),
                        onCut: se => se.preventDefault(),
                        autoComplete: "off",
                        value: L,
                        onChange: se => ae(se.target.value),
                        className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"
                    })
                })]
            }), d.jsxs("div", {
                className: "sm:col-span-3",
                children: [d.jsx("label", {
                    htmlFor: "first-name",
                    className: "block text-xs font-light text-black uppercase",
                    children: (gt = i == null ? void 0 : i.lblInputAmount) == null ? void 0 : gt[l]
                }), d.jsxs("label", {
                    htmlFor: "first-name",
                    className: "block text-sm font-bold text-black uppercase",
                    children: ["BDT ", fe !== 0 ? fe : ""]
                })]
            }), d.jsx("div", {
                className: "sm:col-span-3",
                children: d.jsx(O0, {
                    sitekey: "0x4AAAAAABpNUpzYeppBoYpe",
                    onVerify: se => X(se)
                })
            }), d.jsx("div", {
                className: "sm:col-span-3",
                children: c ? d.jsxs(oe.button, {
                    type: "button",
                    whileTap: {
                        scale: .95
                    },
                    className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition duration-300
              bg-gray-400 cursor-not-allowed
            `,
                    children: [(Ht = i == null ? void 0 : i.checking) == null ? void 0 : Ht[l], "..."]
                }) : d.jsx(oe.button, {
                    type: "button",
                    whileTap: {
                        scale: .95
                    },
                    className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full cursor-pointer sm:w-auto px-2 py-2 text-center transition duration-300
              ${!ye || !J ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] "}
            `,
                    onClick: ye ? ze : void 0,
                    children: (ft = i == null ? void 0 : i.lblSaveNext) == null ? void 0 : ft[l]
                })
            })]
        }) : d.jsx("div", {
            className: "sm:col-span-3 flex justify-center h-[50vh]",
            children: d.jsx("p", {
                className: "flex items-center justify-center w-full h-screen-1/2  text-red-500 text-sm font-light rounded-md",
                children: ((Ue = i == null ? void 0 : i.slotAvailableText) == null ? void 0 : Ue[l]) ?? "Please wait until slot is available."
            })
        })]
    })
}
  , gw = ({setActiveStep: n}) => {
    var W, Q, ie, fe, he, ce, re;
    const {language: l, translations: i} = ut()
      , o = Sa()
      , [c,h] = T.useState(null)
      , [f,m] = T.useState(!1)
      , [p,g] = T.useState("")
      , [v,x] = T.useState("")
      , [S,w] = T.useState("")
      , [C,D] = T.useState("")
      , [M,U] = T.useState(0)
      , [P,B] = T.useState({});
    T.useEffect( () => {
        const ee = localStorage.getItem("applicant")
          , k = localStorage.getItem("personal_info")
          , N = O => localStorage.getItem(O) || "";
        if (g(N("auth_name")),
        x(N("auth_email")),
        w(N("auth_phone")),
        k) {
            const O = JSON.parse(k);
            B(O == null ? void 0 : O.family)
        }
        if (ee)
            try {
                const O = JSON.parse(ee);
                O && D(O.webfile_id),
                O.family_count && U(parseInt(O.family_count))
            } catch {
                console.error("Invalid JSON in localStorage")
            }
    }
    , []);
    const G = (ee, k, N) => {
        B(O => ({
            ...O,
            [ee + 1]: {
                ...O[ee + 1],
                [k]: N
            }
        }))
    }
      , R = () => {
        var k, N, O;
        const ee = [];
        if (p.trim() || ee.push("Full name is required."),
        v.trim() || ee.push("Email is required."),
        S.trim() || ee.push("Phone is required."),
        C.trim() || ee.push("Web file number is required."),
        M > 0)
            for (let L = 1; L <= M; L++) {
                const ae = P[L];
                (k = ae == null ? void 0 : ae.name) != null && k.trim() || ee.push(`Family member ${L}: Name is required.`),
                (N = ae == null ? void 0 : ae.webfile_no) != null && N.trim() || ee.push(`Family member ${L}: Web file number is required.`),
                (O = ae == null ? void 0 : ae.again_webfile_no) != null && O.trim() || ee.push(`Family member ${L}: Confirm web file number is required.`)
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
            m(!0);
            const {valid: ee, errors: k} = R();
            if (!ee && k.length > 0) {
                h({
                    message: `Please fix the following error:
` + k[0],
                    type: "error"
                }),
                m(!1);
                return
            }
            const N = localStorage.getItem("access_token")
              , L = localStorage.getItem("is_edit") === "true" ? "/api/v2/payment/personal-info-edit" : "/api/v2/payment/personal-info-submit"
              , ae = await Ye(L, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l,
                    Authorization: `Bearer ${N}`
                },
                body: {
                    full_name: p,
                    email_name: v,
                    phone: S,
                    webfile_id: C,
                    family: P
                }
            });
            if (ae.status_code === 200) {
                const j = {
                    full_name: p,
                    email_name: v,
                    phone: S,
                    webfile_id: C,
                    family: P
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
            m(!1)
        } catch (ee) {
            m(!1);
            const k = ee
              , N = typeof k == "object" && (k != null && k.message) ? k.message : "Failed to get payment data. Please try again later."
              , O = typeof k == "object" && typeof k.status == "number" ? k.status : 422;
            (O === 401 || O === 419) && (h({
                message: N,
                type: "error"
            }),
            setTimeout( () => {
                xa(o)
            }
            , 5e3)),
            h({
                message: N,
                type: "error"
            })
        }
    }
    ;
    return d.jsxs("div", {
        className: "grid gap-x-6 gap-y-2",
        children: [c && d.jsx(zt, {
            message: c.message,
            type: c.type,
            onClose: () => h(null)
        }), d.jsxs("div", {
            className: "sm:col-span-3",
            children: [d.jsx("label", {
                htmlFor: "first-name",
                className: "block text-xs font-light text-black uppercase",
                children: (W = i == null ? void 0 : i.lblInputName) == null ? void 0 : W[l]
            }), d.jsx("div", {
                className: "mt-2",
                children: d.jsx("input", {
                    type: "text",
                    name: "full-name",
                    id: "full-name",
                    value: p,
                    autoComplete: "off",
                    placeholder: (Q = i == null ? void 0 : i.lblInputRegName) == null ? void 0 : Q[l],
                    className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                })
            })]
        }), d.jsxs("div", {
            className: "sm:col-span-3",
            children: [d.jsx("label", {
                htmlFor: "first-name",
                className: "block text-xs font-light text-black uppercase",
                children: (ie = i == null ? void 0 : i.lblInputEmail) == null ? void 0 : ie[l]
            }), d.jsx("div", {
                className: "mt-2",
                children: d.jsx("input", {
                    type: "text",
                    name: "email",
                    id: "email",
                    onCopy: ee => ee.preventDefault(),
                    onPaste: ee => ee.preventDefault(),
                    onCut: ee => ee.preventDefault(),
                    value: v,
                    autoComplete: "off",
                    className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                })
            })]
        }), d.jsxs("div", {
            className: "sm:col-span-3",
            children: [d.jsx("label", {
                htmlFor: "first-name",
                className: "block text-xs font-light text-black uppercase",
                children: (fe = i == null ? void 0 : i.lblInputContactNo) == null ? void 0 : fe[l]
            }), d.jsx("div", {
                className: "mt-2",
                children: d.jsx("input", {
                    type: "text",
                    name: "user_phone",
                    id: "user_phone",
                    onCopy: ee => ee.preventDefault(),
                    onPaste: ee => ee.preventDefault(),
                    onCut: ee => ee.preventDefault(),
                    value: S,
                    autoComplete: "off",
                    className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                })
            })]
        }), d.jsxs("div", {
            className: "sm:col-span-3",
            children: [d.jsx("label", {
                htmlFor: "first-name",
                className: "block text-xs font-light text-black uppercase",
                children: (he = i == null ? void 0 : i.ovWebID) == null ? void 0 : he[l]
            }), d.jsx("div", {
                className: "mt-2",
                children: d.jsx("input", {
                    type: "text",
                    name: "webfile_id",
                    id: "webfile_id",
                    value: C,
                    autoComplete: "off",
                    className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                })
            })]
        }), d.jsxs("div", {
            className: "sm:col-span-3",
            children: [[...Array(M)].map( (ee, k) => {
                var N, O, L, ae, j, q, J, X, le, te;
                return d.jsxs("div", {
                    className: "flex flex-col w-full gap-2",
                    children: [d.jsxs("div", {
                        className: "w-full",
                        children: [d.jsxs("label", {
                            htmlFor: "first-name",
                            className: "block text-xs font-light text-black uppercase my-2",
                            children: [(N = i == null ? void 0 : i.lblInputFamily) == null ? void 0 : N[l], " ", k + 1]
                        }), d.jsxs("label", {
                            htmlFor: "first-name",
                            className: "block text-xs font-light text-black uppercase",
                            children: [(O = i == null ? void 0 : i.lblInputFullName) == null ? void 0 : O[l], " ", " ", d.jsxs("span", {
                                className: "text-red-600 text-[10px]",
                                children: ["*(", (L = i == null ? void 0 : i.lblRequired) == null ? void 0 : L[l], ")"]
                            })]
                        }), d.jsx("div", {
                            className: "mt-2",
                            children: d.jsx("input", {
                                type: "text",
                                name: `full-name-${k}`,
                                id: `full-name-${k}`,
                                onCopy: I => I.preventDefault(),
                                onPaste: I => I.preventDefault(),
                                onCut: I => I.preventDefault(),
                                value: ((ae = P[k + 1]) == null ? void 0 : ae.name) || "",
                                onChange: I => G(k, "name", I.target.value),
                                autoComplete: "off",
                                className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"
                            })
                        })]
                    }), d.jsxs("div", {
                        className: "sm:col-span-3",
                        children: [d.jsxs("label", {
                            htmlFor: "first-name",
                            className: "block text-xs font-light text-black uppercase",
                            children: [(j = i == null ? void 0 : i.lblInputFamilyWebFile) == null ? void 0 : j[l], " ", " ", d.jsxs("span", {
                                className: "text-red-600 text-[10px]",
                                children: ["*(", (q = i == null ? void 0 : i.lblMustFace7) == null ? void 0 : q[l], ")"]
                            })]
                        }), d.jsx("div", {
                            className: "mt-2",
                            children: d.jsx("input", {
                                type: "text",
                                name: `web-file-number-${k}`,
                                id: `web-file-number-${k}`,
                                onCopy: I => I.preventDefault(),
                                onPaste: I => I.preventDefault(),
                                onCut: I => I.preventDefault(),
                                value: ((J = P[k + 1]) == null ? void 0 : J.webfile_no) || "",
                                onChange: I => G(k, "webfile_no", I.target.value),
                                autoComplete: "off",
                                className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"
                            })
                        })]
                    }), d.jsxs("div", {
                        className: "sm:col-span-3",
                        children: [d.jsxs("label", {
                            htmlFor: "first-name",
                            className: "block text-xs font-light text-black uppercase",
                            children: [(X = i == null ? void 0 : i.lblInputFamilyWebFileAgain) == null ? void 0 : X[l], " ", " ", d.jsxs("span", {
                                className: "text-red-600 text-[10px]",
                                children: ["*(", (le = i == null ? void 0 : i.lblNoCopyPaste) == null ? void 0 : le[l], ")"]
                            })]
                        }), d.jsx("div", {
                            className: "mt-2",
                            children: d.jsx("input", {
                                type: "text",
                                name: `web-file-number-repeat-${k}`,
                                id: `web-file-number-repeat-${k}`,
                                onCopy: I => I.preventDefault(),
                                onPaste: I => I.preventDefault(),
                                onCut: I => I.preventDefault(),
                                value: ((te = P[k + 1]) == null ? void 0 : te.again_webfile_no) || "",
                                onChange: I => G(k, "again_webfile_no", I.target.value),
                                autoComplete: "off",
                                className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"
                            })
                        })]
                    })]
                }, k)
            }
            ), d.jsx("div", {
                className: "sm:col-span-3",
                children: f ? d.jsxs(oe.button, {
                    type: "button",
                    whileTap: {
                        scale: .95
                    },
                    className: "text-white mb-2 duration-300 cursor-not-allowed mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition bg-gray-500 ",
                    children: [(ce = i == null ? void 0 : i.checking) == null ? void 0 : ce[l], "..."]
                }) : d.jsx(oe.button, {
                    type: "button",
                    whileTap: {
                        scale: .95
                    },
                    className: "text-white mb-2 duration-300 cursor-pointer mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition bg-[#28a745] hover:bg-[#218838]",
                    onClick: Z,
                    children: (re = i == null ? void 0 : i.lblSaveNext) == null ? void 0 : re[l]
                })
            })]
        })]
    })
}
  , yw = ({setActiveStep: n}) => {
    var ae, j, q, J, X, le;
    const l = Sa()
      , {language: i, translations: o} = ut()
      , [c,h] = T.useState(0)
      , [f,m] = T.useState(-1)
      , [p,g] = T.useState(null)
      , [v,x] = T.useState(null)
      , [S,w] = T.useState(null)
      , [C,D] = T.useState(null)
      , [M,U] = T.useState(null)
      , [P,B] = T.useState(null)
      , [G,R] = T.useState({})
      , [Z,W] = T.useState(!1)
      , [Q,ie] = T.useState(null)
      , [fe,he] = T.useState(null)
      , [ce,re] = T.useState(!1)
      , ee = async () => {
        if (ce) {
            W(!0);
            const te = localStorage.getItem("access_token");
            try {
                const I = await Ye("/api/v2/payment/overview-submit", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        language: i,
                        Authorization: `Bearer ${te}`
                    }
                });
                if (W(!1),
                I.status_code === 200) {
                    const Se = localStorage.getItem("applicant")
                      , Te = localStorage.getItem("personal_info");
                    Se && localStorage.setItem("applicant_backup", Se),
                    Te && localStorage.setItem("personal_info_backup", Te),
                    localStorage.removeItem("applicant"),
                    localStorage.removeItem("personal_info"),
                    n(4),
                    g({
                        message: I == null ? void 0 : I.message,
                        type: "success"
                    })
                } else
                    g({
                        message: I == null ? void 0 : I.message,
                        type: "error"
                    })
            } catch (I) {
                const Se = I
                  , Te = typeof Se == "object" && (Se != null && Se.message) ? Se.message : "Failed to get payment data. Please try again later."
                  , ye = typeof Se == "object" && typeof Se.status == "number" ? Se.status : 422;
                (ye === 401 || ye === 419) && (g({
                    message: Te,
                    type: "error"
                }),
                setTimeout( () => {
                    xa(l)
                }
                , 5e3)),
                g({
                    message: Te,
                    type: "error"
                })
            }
        }
    }
    ;
    T.useEffect( () => {
        const te = ye => localStorage.getItem(ye) || "";
        x(te("auth_name")),
        w(te("auth_email")),
        U(te("auth_phone")),
        U(te("auth_phone"));
        const I = localStorage.getItem("personal_info");
        if (I) {
            const ye = JSON.parse(I);
            R(ye == null ? void 0 : ye.family)
        }
        const Se = localStorage.getItem("applicant")
          , Te = localStorage.getItem("initialData");
        if (Se && Te)
            try {
                const ye = JSON.parse(Se)
                  , ze = JSON.parse(Te);
                if (D(ye.visa_fee || null),
                B(ye.webfile_id || null),
                ze != null && ze.ivacs && (ye == null ? void 0 : ye.ivac_id) !== void 0) {
                    const Ue = ze.ivacs.find(Le => Le.id == ye.ivac_id);
                    Ue && ie(Ue.ivac_name)
                }
                if (ze != null && ze.visa_types && (ye == null ? void 0 : ye.visa_type) !== void 0) {
                    const Ue = ze.visa_types.find(Le => Le.id == ye.visa_type);
                    Ue && he(Ue.type_name)
                }
            } catch (ye) {
                const ze = ye
                  , Ue = typeof ze == "object" && (ze != null && ze.message) ? ze.message : "Failed to get payment data. Please try again later."
                  , Le = typeof ze == "object" && typeof ze.status == "number" ? ze.status : 422;
                (Le === 401 || Le === 419) && xa(l),
                g({
                    message: Ue,
                    type: "error"
                })
            }
    }
    , []),
    T.useEffect( () => {
        const te = localStorage.getItem("applicant");
        if (te) {
            const I = JSON.parse(te);
            I.family_count && h(parseInt(I.family_count))
        }
    }
    , []);
    const k = te => {
        m(I => I === te ? null : te)
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
      , L = ["ovWebID", "ovIvacCenter", "ovVisaType", "ovFees", "ovName", "ovEmail", "ovContact"];
    return d.jsxs(oe.div, {
        className: "flex flex-col",
        variants: N,
        initial: "hidden",
        animate: "visible",
        children: [p && d.jsx(zt, {
            message: p.message,
            type: p.type,
            onClose: () => g(null)
        }), d.jsxs("div", {
            className: "flex flex-row gap-2 items-center p-2 bg-green-50 border-[0.2px] border-green-100 rounded cursor-pointer",
            onClick: () => k(-1),
            children: [d.jsxs("p", {
                className: "text-xs md:text-sm font-light text-white rounded-md bg-black text-center p-2 min-w-[110px]",
                children: [(ae = o == null ? void 0 : o.application_text) == null ? void 0 : ae[i], " #1"]
            }), d.jsxs("p", {
                className: "text-green-700 text-xs  hover:cursor-pointer font-bold cursor-pointer hover:underline",
                children: [P ?? "", " (", (j = o == null ? void 0 : o.btnExpandOrClose) == null ? void 0 : j[i], ")"]
            })]
        }), d.jsx(oe.div, {
            initial: !1,
            animate: {
                height: f === -1 ? "auto" : 0,
                opacity: f === -1 ? 1 : 0
            },
            transition: {
                duration: .3
            },
            className: `overflow-hidden mt-2 rounded-md border-[0.2px] border-slate-300 ${f === -1 ? "py-4 mb-4" : ""}`,
            children: f === -1 && d.jsxs(oe.div, {
                className: "flex flex-wrap md:px-4 relative text-center justify-center",
                children: [L.map( (te, I) => {
                    var Se;
                    return d.jsxs(oe.div, {
                        variants: O,
                        initial: "hidden",
                        animate: "visible",
                        className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center w-[180px] md:w-1/3    ",
                        children: [d.jsx("p", {
                            className: "text-red-600 font-light text-[8px] md:text-[10px] break-words text-center w-full",
                            children: (Se = o == null ? void 0 : o[te]) == null ? void 0 : Se[i]
                        }), d.jsx("p", {
                            className: "text-[12px] font-semibold break-words text-center w-full",
                            children: te === "ovWebID" ? P || "N/A" : te === "ovIvacCenter" ? Q || "N/A" : te === "ovVisaType" ? fe || "N/A" : te === "ovEmail" ? S || "N/A" : te === "ovName" ? v || "N/A" : te === "ovContact" ? M || "N/A" : te === "ovFees" ? "BDT " + C || "N/A" : "NA"
                        })]
                    }, I)
                }
                ), d.jsx("div", {
                    className: "col-span-3 z-20 -mt-20 relative right-0 w-full flex justify-end items-end  ",
                    children: d.jsxs("div", {
                        className: "flex items-center gap-1 hover:text-green-800 duration-300 font-bold text-xs cursor-pointer w-fit pr-4 md:pr-0",
                        onClick: () => {
                            n(1),
                            localStorage.setItem("is_edit", "true")
                        }
                        ,
                        children: [(q = o == null ? void 0 : o.edit_text) == null ? void 0 : q[i], " ", d.jsx(Ug, {})]
                    })
                })]
            })
        }), [...Array(c)].map( (te, I) => {
            var Se, Te, ye, ze;
            return d.jsxs(oe.div, {
                initial: "hidden",
                animate: "visible",
                children: [d.jsxs("div", {
                    className: "flex flex-row gap-2 items-center p-2 bg-green-50 border-[0.2px] border-green-100 rounded cursor-pointer",
                    onClick: () => k(I),
                    children: [d.jsxs("p", {
                        className: "text-xs md:text-sm font-light text-white rounded-md bg-black text-center p-2 min-w-[110px]",
                        children: [(Se = o == null ? void 0 : o.application_text) == null ? void 0 : Se[i], " #", I + 2]
                    }), d.jsxs("p", {
                        className: "text-green-700 text-xs  hover:cursor-pointer font-bold cursor-pointer hover:underline",
                        children: [(Te = Object.values(G)[I]) == null ? void 0 : Te.webfile_no, " (", (ye = o == null ? void 0 : o.btnExpandOrClose) == null ? void 0 : ye[i], ")"]
                    })]
                }), d.jsx(oe.div, {
                    initial: !1,
                    animate: {
                        height: f === I ? "auto" : 0,
                        opacity: f === I ? 1 : 0
                    },
                    transition: {
                        duration: .3
                    },
                    className: `overflow-hidden mt-2 rounded-md  border-[0.2px] border-slate-300 ${f === I ? "py-4 mb-4" : ""}`,
                    children: f === I && d.jsxs(oe.div, {
                        className: "flex flex-wrap md:px-4 relative text-center justify-center",
                        children: [L.map( (Ue, Le) => {
                            var Ct, je, et;
                            return d.jsxs(oe.div, {
                                variants: O,
                                initial: "hidden",
                                animate: "visible",
                                className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center w-[180px] md:w-1/3",
                                children: [d.jsx("p", {
                                    className: "text-red-600 font-light text-[8px] md:text-[10px] break-words text-center w-full",
                                    children: (Ct = o == null ? void 0 : o[Ue]) == null ? void 0 : Ct[i]
                                }), d.jsx("p", {
                                    className: "text-[12px] font-semibold break-words text-center w-full",
                                    children: Ue === "ovWebID" ? ((je = Object.values(G)[I]) == null ? void 0 : je.webfile_no) || "N/A" : Ue === "ovIvacCenter" ? Q || "N/A" : Ue === "ovVisaType" ? fe || "N/A" : Ue === "ovEmail" ? S || "N/A" : Ue === "ovName" ? ((et = Object.values(G)[I]) == null ? void 0 : et.name) || "N/A" : Ue === "ovContact" ? M || "N/A" : Ue === "ovFees" ? "BDT " + C || "N/A" : "NA"
                                })]
                            }, Le)
                        }
                        ), d.jsx("div", {
                            className: "col-span-3 z-20 -mt-20 relative right-0 w-full flex justify-end items-end  ",
                            children: d.jsxs("div", {
                                className: "flex items-center gap-1 hover:text-green-900 duration-300 font-bold text-xs cursor-pointer w-fit pr-4 md:pr-0",
                                onClick: () => {
                                    n(2),
                                    localStorage.setItem("is_edit", "true")
                                }
                                ,
                                children: [(ze = o == null ? void 0 : o.edit_text) == null ? void 0 : ze[i], " ", d.jsx(Ug, {})]
                            })
                        })]
                    })
                })]
            }, I)
        }
        ), d.jsxs("div", {
            className: "space-y-2 max-w-md px-2 mt-4",
            children: [d.jsxs("div", {
                className: "flex items-center space-x-2",
                children: [d.jsx("input", {
                    type: "checkbox",
                    id: "terms",
                    checked: ce,
                    onChange: te => re(te.target.checked)
                }), d.jsxs("label", {
                    htmlFor: "terms",
                    className: "text-sm font-light  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                    children: [(J = o == null ? void 0 : o.tcAgree) == null ? void 0 : J[i], " ", " ", d.jsx("a", {
                        href: "https://api-payment.ivacbd.com/contents/tos.html",
                        target: "_blank",
                        className: "text-blue-600 hover:underline",
                        children: (X = o == null ? void 0 : o.tcText) == null ? void 0 : X[i]
                    })]
                })]
            }), d.jsx("button", {
                onClick: ce ? ee : void 0,
                className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
                      ${ce ? "bg-[#28a745] hover:bg-[#218838] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}
                    `,
                children: (le = o == null ? void 0 : o.conMovePay) == null ? void 0 : le[i]
            })]
        })]
    })
}
  , vw = ({setActiveStep: n}) => {
    var se, me, tt, Ce, Fe, Je, Re, Yt, zn, sn, ne, be, yt, Gt, Wl, ei, il, sl, ti, Ss, ja, Tt, Dt, Ha, ol, Ts, js, ai;
    const l = Sa()
      , {language: i, translations: o} = ut()
      , [c,h] = T.useState(null)
      , [f,m] = T.useState(null)
      , [p,g] = T.useState(0)
      , [v,x] = T.useState(0)
      , [S,w] = T.useState(0)
      , [C,D] = T.useState("")
      , [M,U] = T.useState(!1)
      , [P,B] = T.useState("")
      , [G,R] = T.useState(!1)
      , [Z,W] = T.useState([])
      , [Q,ie] = T.useState("")
      , [fe,he] = T.useState(!1)
      , [ce,re] = T.useState([])
      , [ee,k] = T.useState("")
      , [N,O] = T.useState("")
      , [L,ae] = T.useState("")
      , [j,q] = T.useState("")
      , [J,X] = T.useState(!1)
      , [le,te] = T.useState(!1)
      , [I,Se] = T.useState(!1)
      , [Te,ye] = T.useState(!1)
      , [ze,Ue] = T.useState(!1)
      , [Le,Ct] = T.useState(!1)
      , [je,et] = T.useState(0)
      , [la,ct] = T.useState("");
    T.useEffect( () => {
        (async () => {
            var ke, Ve, He, Mt, dt, ni;
            const De = localStorage.getItem("access_token");
            try {
                const it = await Ye("/api/v2/payment/checkout", {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        language: i,
                        Authorization: `Bearer ${De}`
                    }
                });
                it.status_code === 200 ? (x((ke = it == null ? void 0 : it.data) == null ? void 0 : ke.convenience_fees),
                g((Ve = it == null ? void 0 : it.data) == null ? void 0 : Ve.fees),
                w((He = it == null ? void 0 : it.data) == null ? void 0 : He.payable_amount),
                D((Mt = it == null ? void 0 : it.data) == null ? void 0 : Mt.mobile_no),
                m((ni = (dt = it == null ? void 0 : it.data) == null ? void 0 : dt.payment_options) == null ? void 0 : ni.data)) : h({
                    message: it.message,
                    type: "error"
                })
            } catch (it) {
                const Ut = it
                  , Pa = typeof Ut == "object" && (Ut != null && Ut.message) ? Ut.message : "Failed to get payment data. Please try again later."
                  , ws = typeof Ut == "object" && typeof Ut.status == "number" ? Ut.status : 422;
                (ws === 401 || ws === 419) && (h({
                    message: Pa,
                    type: "error"
                }),
                setTimeout( () => {
                    xa(l)
                }
                , 5e3)),
                h({
                    message: Pa,
                    type: "error"
                })
            }
        }
        )()
    }
    , []);
    const Ca = async Ne => {
        const De = localStorage.getItem("access_token");
        try {
            te(!0);
            const ke = await Ye("/api/v2/payment/pay-otp-sent", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: i,
                    Authorization: `Bearer ${De}`
                },
                body: {
                    resend: Ne
                }
            });
            if (ke.status_code === 200) {
                U(!0),
                et(01);
                const Ve = setInterval( () => {
                    et(He => He <= 1 ? (clearInterval(Ve),
                    0) : He - 1)
                }
                , 1e3)
            } else
                h({
                    message: ke.message,
                    type: "error"
                })
        } catch (ke) {
            const Ve = ke
              , He = typeof Ve == "object" && (Ve != null && Ve.message) ? Ve.message : "Failed to get payment data. Please try again later."
              , Mt = typeof Ve == "object" && typeof Ve.status == "number" ? Ve.status : 422;
            (Mt === 401 || Mt === 419) && (h({
                message: He,
                type: "error"
            }),
            setTimeout( () => xa(l), 5e3)),
            h({
                message: He,
                type: "error"
            })
        } finally {
            te(!1)
        }
    }
      , Da = () => Ca(0)
      , Ma = () => Ca(1)
      , ia = async () => {
        var De;
        const Ne = localStorage.getItem("access_token");
        try {
            if (P.length < 6) {
                h({
                    message: "Please enter 6 digit otp",
                    type: "error"
                });
                return
            }
            Se(!0);
            const ke = await Ye("/api/v2/payment/pay-otp-verify", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: i,
                    Authorization: `Bearer ${Ne}`
                },
                body: {
                    otp: P
                }
            });
            ke.status_code === 200 ? (R(!0),
            W((De = ke == null ? void 0 : ke.data) == null ? void 0 : De.slot_dates)) : h({
                message: ke.message,
                type: "error"
            })
        } catch (ke) {
            const Ve = ke
              , He = typeof Ve == "object" && (Ve != null && Ve.message) ? Ve.message : "Failed to get payment data. Please try again later."
              , Mt = typeof Ve == "object" && typeof Ve.status == "number" ? Ve.status : 422;
            (Mt === 401 || Mt === 419) && (h({
                message: He,
                type: "error"
            }),
            setTimeout( () => {
                xa(l)
            }
            , 5e3)),
            h({
                message: He,
                type: "error"
            })
        } finally {
            Se(!1)
        }
    }
      , ka = async Ne => {
        var Ve;
        const De = Ne.target.value;
        ie(De);
        const ke = localStorage.getItem("access_token");
        try {
            Ue(!0);
            const He = await Ye("/api/v2/payment/pay-slot-time", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: i,
                    Authorization: `Bearer ${ke}`
                },
                body: {
                    appointment_date: De
                }
            });
            He.status_code === 200 ? (re(((Ve = He == null ? void 0 : He.data) == null ? void 0 : Ve.slot_times) ?? []),
            he(!0)) : h({
                message: He.message,
                type: "error"
            })
        } catch (He) {
            const Mt = typeof He == "object" && (He != null && He.message) ? He.message : "Failed to verify email address";
            h({
                message: Mt,
                type: "error"
            })
        } finally {
            Ue(!1)
        }
    }
      , [we,sa] = T.useState(null)
      , Ta = Q.trim() !== "" && Q.length >= 6 && ee.trim() !== "" && ee.length >= 6 && we !== null && we.item.name.trim() !== "" && we.item.slug.trim() !== "" && we.item.link.trim() !== ""
      , Jt = async () => {
        const Ne = localStorage.getItem("access_token");
        try {
            Ct(!0);
            const De = await Ye("/api/v2/payment/pay-now", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: i,
                    Authorization: `Bearer ${Ne}`
                },
                body: {
                    appointment_date: Q,
                    appointment_time: ee,
                    selected_payment: {
                        name: we.item.name,
                        slug: we.item.slug,
                        link: we.item.link
                    }
                }
            });
            De.status_code === 200 ? (localStorage.clear(),
            window.location.href = De.data.url) : h({
                message: De.message,
                type: "error"
            })
        } catch (De) {
            const ke = De
              , Ve = typeof ke == "object" && (ke != null && ke.message) ? ke.message : "Failed to get payment data. Please try again later."
              , He = typeof ke == "object" && typeof ke.status == "number" ? ke.status : 422;
            (He === 401 || He === 419) && (h({
                message: Ve,
                type: "error"
            }),
            setTimeout( () => {
                xa(l)
            }
            , 5e3)),
            h({
                message: Ve,
                type: "error"
            })
        } finally {
            Ct(!1)
        }
    }
      , [gt,Ht] = T.useState("")
      , ft = {
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
    return ze ? d.jsx(_0, {}) : d.jsxs(oe.div, {
        className: "flex flex-col",
        variants: ft,
        initial: "hidden",
        animate: "visible",
        children: [c && d.jsx(zt, {
            message: c.message,
            type: c.type,
            onClose: () => h(null)
        }), d.jsx("div", {
            className: "max-h-screen bg-gray-50 md:p-4",
            children: d.jsxs("div", {
                className: "max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8",
                children: [d.jsx("div", {
                    className: "bg-white rounded-lg p-5 md:p-6 shadow-sm",
                    children: d.jsxs("div", {
                        className: "space-y-6 h-full flex flex-col justify-around",
                        children: [d.jsxs("div", {
                            className: "flex space-x-2 flex-col",
                            children: [d.jsxs("h3", {
                                className: "text-sm  text-gray-700 mb-3 font-bold",
                                children: [(se = o == null ? void 0 : o.payCard) == null ? void 0 : se[i], " "]
                            }), d.jsx("div", {
                                className: "boxes flex flex-row justify-start gap-4 flex-wrap",
                                children: (f == null ? void 0 : f.cards) && Object.keys(f.cards).length > 0 && Object.entries(f.cards).map( ([Ne,De]) => d.jsx("div", {
                                    className: `w-18 h-16 flex items-center justify-center rounded-lg border-[1px] border-slate-300 shadow hover:cursor-pointer hover:border-[#0074D4] duration-300 ${(we == null ? void 0 : we.type) === "cards" && we.key === Ne ? "ring-2 ring-[#0074D4]" : ""}`,
                                    onClick: () => sa({
                                        type: "cards",
                                        key: Ne,
                                        item: De
                                    }),
                                    children: d.jsx("img", {
                                        src: De.link,
                                        alt: De.name,
                                        className: "w-10 h-10 object-contain"
                                    })
                                }, Ne))
                            })]
                        }), d.jsxs("div", {
                            className: "flex space-x-2 flex-col",
                            children: [d.jsxs("h3", {
                                className: "text-sm font-bold text-gray-700 mb-3",
                                children: [(me = o == null ? void 0 : o.payInt) == null ? void 0 : me[i], " "]
                            }), d.jsx("div", {
                                className: "boxes flex flex-row justify-start gap-4 flex-wrap",
                                children: (f == null ? void 0 : f.internet) && Object.keys(f.internet).length > 0 && Object.entries(f.internet).map( ([Ne,De]) => d.jsx("div", {
                                    className: `w-18 h-16 flex items-center justify-center rounded-lg border-[1px] border-slate-300 shadow hover:cursor-pointer hover:border-[#0074D4] duration-300  ${(we == null ? void 0 : we.type) === "internet" && we.key === Ne ? "ring-2 ring-[#0074D4]" : ""}`,
                                    onClick: () => sa({
                                        type: "internet",
                                        key: Ne,
                                        item: De
                                    }),
                                    children: d.jsx("img", {
                                        src: De.link,
                                        alt: De.name,
                                        className: "w-full h-full object-contain"
                                    })
                                }, Ne))
                            })]
                        }), d.jsxs("div", {
                            className: "flex space-x-2 flex-col",
                            children: [d.jsxs("h3", {
                                className: "text-sm font-bold text-gray-700 mb-3",
                                children: [(tt = o == null ? void 0 : o.payMob) == null ? void 0 : tt[i], " "]
                            }), d.jsx("div", {
                                className: "boxes flex flex-row justify-start gap-4 flex-wrap",
                                children: (f == null ? void 0 : f.mobile) && Object.keys(f.mobile).length > 0 && Object.entries(f.mobile).map( ([Ne,De]) => d.jsx("div", {
                                    className: `w-18 h-16 flex items-center justify-center rounded-lg border-[1px] border-slate-300 shadow hover:cursor-pointer hover:border-[#0074D4] duration-300 ${(we == null ? void 0 : we.type) === "mobile" && we.key === Ne ? "ring-2 ring-[#0074D4]" : ""}`,
                                    onClick: () => sa({
                                        type: "mobile",
                                        key: Ne,
                                        item: De
                                    }),
                                    children: d.jsx("img", {
                                        src: De.link,
                                        alt: De.name,
                                        className: "w-full h-full object-contain"
                                    })
                                }, Ne))
                            })]
                        }), d.jsxs("div", {
                            className: "flex space-x-2 flex-col",
                            children: [d.jsx("h3", {
                                className: "text-sm font-bold text-gray-700 mb-3",
                                children: (Ce = o == null ? void 0 : o.payOth) == null ? void 0 : Ce[i]
                            }), d.jsx("div", {
                                className: "boxes flex flex-row justify-start gap-4 flex-wrap",
                                children: (f == null ? void 0 : f.others) && Object.keys(f.others).length > 0 && Object.entries(f.others).map( ([Ne,De]) => d.jsx("div", {
                                    className: `w-18 h-16 flex items-center justify-center rounded-lg border-[1px] border-slate-300 shadow hover:cursor-pointer hover:border-[#0074D4] duration-300 ${(we == null ? void 0 : we.type) === "others" && we.key === Ne ? "ring-2 ring-[#0074D4]" : ""}`,
                                    onClick: () => sa({
                                        type: "others",
                                        key: Ne,
                                        item: De
                                    }),
                                    children: d.jsx("img", {
                                        src: De.link,
                                        alt: De.name,
                                        className: "w-full h-full object-contain"
                                    })
                                }, Ne))
                            })]
                        })]
                    })
                }), d.jsxs("div", {
                    className: "bg-white rounded-lg p-6 shadow-sm",
                    children: [d.jsx("div", {
                        className: "flex justify-end mb-4",
                        children: d.jsx("div", {
                            className: " px-4 py-2 rounded-lg text-sm font-medium",
                            children: d.jsx("img", {
                                src: sj,
                                className: "w-36",
                                alt: ""
                            })
                        })
                    }), d.jsx("div", {
                        className: "bg-blue-50 border border-gray-200 rounded-lg px-4 py-2 mb-4",
                        children: we ? d.jsxs("div", {
                            className: "flex justify-between items-center ",
                            children: [d.jsx("p", {
                                className: "font-bold",
                                children: (Je = we == null ? void 0 : we.item) == null ? void 0 : Je.name
                            }), d.jsx("img", {
                                src: (Re = we == null ? void 0 : we.item) == null ? void 0 : Re.link,
                                alt: (Yt = we == null ? void 0 : we.item) == null ? void 0 : Yt.name,
                                className: "w-10 h-10 object-contain"
                            })]
                        }) : d.jsxs("p", {
                            className: "text-gray-600 text-sm text-center",
                            children: [" ", (Fe = o == null ? void 0 : o.paySelectOption) == null ? void 0 : Fe[i], " "]
                        })
                    }), d.jsxs("div", {
                        className: "space-y-3 mb-4",
                        children: [d.jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [d.jsxs("span", {
                                className: "text-sm font-medium text-gray-700",
                                children: [" ", (zn = o == null ? void 0 : o.ovFees) == null ? void 0 : zn[i], " :"]
                            }), d.jsxs("span", {
                                className: "text-sm text-gray-900",
                                children: [p, " BDT"]
                            })]
                        }), v != "0.00" && d.jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [d.jsxs("span", {
                                className: "text-sm text-gray-600",
                                children: [" ", (sn = o == null ? void 0 : o.payConvFee) == null ? void 0 : sn[i], " :"]
                            }), d.jsxs("span", {
                                className: "text-sm text-gray-900",
                                children: [v, " BDT"]
                            })]
                        }), d.jsxs("div", {
                            className: "flex justify-between items-center pt-2 border-t",
                            children: [d.jsxs("span", {
                                className: "text-sm font-medium text-gray-700",
                                children: [(ne = o == null ? void 0 : o.payPayable) == null ? void 0 : ne[i], ":"]
                            }), d.jsxs("span", {
                                className: "text-sm font-medium text-gray-900",
                                children: [S, " BDT"]
                            })]
                        })]
                    }), d.jsxs("div", {
                        className: "mb-2",
                        children: [d.jsxs("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: [(be = o == null ? void 0 : o.payPhone) == null ? void 0 : be[i], ":"]
                        }), d.jsxs("div", {
                            className: "flex items-center gap-3 rounded-md flex-wrap",
                            children: [d.jsx("input", {
                                type: "tel",
                                value: C,
                                className: "flex-1 px-3 py-2 text-sm rounded-md border border-gray-300 bg-gray-100 text-gray-700 focus:outline-none",
                                placeholder: "Mobile number",
                                autoComplete: "off"
                            }), !G && d.jsx("button", {
                                onClick: le || je > 0 ? void 0 : M ? Ma : Da,
                                className: `bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors duration-200 ${le || je > 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700 hover:cursor-pointer"}`,
                                children: le ? `${(yt = o == null ? void 0 : o.checking) == null ? void 0 : yt[i]}...` : je > 0 ? `${je}s` : M ? (Gt = o == null ? void 0 : o.resendOtp) == null ? void 0 : Gt[i] : (Wl = o == null ? void 0 : o.lblInputSentOtp) == null ? void 0 : Wl[i]
                            })]
                        })]
                    }), G && d.jsx("div", {
                        className: "mb-2",
                        children: d.jsxs("p", {
                            className: "text-[10px] font-light text-green-500",
                            children: [(ei = o == null ? void 0 : o.payPhone) == null ? void 0 : ei[i], " ", " ", " ", (il = o == null ? void 0 : o.verified) == null ? void 0 : il[i], " "]
                        })
                    }), M && !G && d.jsxs("div", {
                        className: "mb-2",
                        children: [d.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: (sl = o == null ? void 0 : o.verifyOtp) == null ? void 0 : sl[i]
                        }), d.jsxs("div", {
                            className: "flex items-center gap-3 rounded-md md:flex-nowrap flex-wrap",
                            children: [d.jsx("input", {
                                type: "tel",
                                value: P,
                                onChange: Ne => B(Ne.target.value),
                                className: "flex-1 px-3 py-2 text-sm rounded-md border border-gray-300 bg-gray-100 text-gray-700 focus:outline-none",
                                placeholder: (ti = o == null ? void 0 : o.lblInputOtp) == null ? void 0 : ti[i],
                                autoComplete: "off"
                            }), d.jsx("button", {
                                onClick: P.length >= 6 && !I ? ia : void 0,
                                className: `bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors duration-300 ${P.length < 6 || I ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700 hover:cursor-pointer"}`,
                                children: I ? ((Ss = o == null ? void 0 : o.checking) == null ? void 0 : Ss[i]) + "..." : (ja = o == null ? void 0 : o.verify) == null ? void 0 : ja[i]
                            })]
                        })]
                    }), G && d.jsxs("div", {
                        className: "my-4",
                        children: [d.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: (Tt = o == null ? void 0 : o.lblInputAppointDate) == null ? void 0 : Tt[i]
                        }), d.jsxs("select", {
                            id: "appointment_date",
                            name: "appointment_date",
                            value: Q ?? "",
                            onChange: ka,
                            className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6",
                            children: [d.jsx("option", {
                                value: "",
                                hidden: !0,
                                children: (Dt = o == null ? void 0 : o.lblInputAppointment) == null ? void 0 : Dt[i]
                            }), Z && Object.keys(Z).length > 0 && Object.entries(Z).map( ([Ne,De]) => d.jsx("option", {
                                value: De,
                                children: De
                            }, Ne))]
                        })]
                    }), fe && d.jsxs("div", {
                        className: "mb-6 mt-2",
                        children: [d.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: (Ha = o == null ? void 0 : o.lblInputAppointTime) == null ? void 0 : Ha[i]
                        }), d.jsxs("select", {
                            id: "appointment_date",
                            name: "appointment_date",
                            value: ee ?? "",
                            onChange: Ne => k(Ne.target.value),
                            className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6",
                            children: [d.jsx("option", {
                                value: "",
                                hidden: !0,
                                children: (ol = o == null ? void 0 : o.selectAppointmentTime) == null ? void 0 : ol[i]
                            }), Array.isArray(ce) && ce.length > 0 && ce.map(Ne => d.jsx("option", {
                                value: Ne.time_display,
                                children: Ne.time_display
                            }, Ne.id))]
                        })]
                    }), d.jsx("button", {
                        className: `w-full py-3 mb-2 rounded-lg duration-300 text-white
    ${Ta && !Le ? "bg-green-600 hover:bg-green-700 cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`,
                        onClick: Ta && !Le ? Jt : void 0,
                        children: Le ? ((Ts = o == null ? void 0 : o.processing) == null ? void 0 : Ts[i]) + "..." : (js = o == null ? void 0 : o.payNow) == null ? void 0 : js[i]
                    }), d.jsx("p", {
                        className: "text-xs text-red-500 text-center",
                        children: (ai = o == null ? void 0 : o.msgTrans5min) == null ? void 0 : ai[i]
                    })]
                })]
            })
        })]
    })
}
  , xw = () => {
    var m, p, g, v, x;
    const {language: n, translations: l} = ut()
      , [i,o] = T.useState( () => {
        const S = localStorage.getItem("authStep")
          , w = parseInt(S || "1", 10);
        return w >= 1 && w <= 4 ? w : 1
    }
    );
    T.useEffect( () => {
        localStorage.setItem("authStep", i.toString())
    }
    , [i]);
    const c = [{
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
      , f = {
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
    return d.jsx(d.Fragment, {
        children: d.jsxs(oe.div, {
            className: "flex flex-col bg-[#b5d6a9] sm:mx-8 lg:mx-20 rounded-md shadow-lg border-[0.1px] border-slate-300 overflow-auto",
            variants: h,
            initial: "hidden",
            animate: "visible",
            children: [d.jsxs("div", {
                className: "flex flex-row gap-4 text-xs overflow-x-scroll border-b-[0.1px] border-slate-300 scroll-smooth scrollbar-hide",
                children: [d.jsx("p", {
                    className: "font-bold bg-white rounded-tl py-4 px-4",
                    children: (x = l == null ? void 0 : l.lblTabMenuAuth) == null ? void 0 : x[n]
                }), c.map( (S, w) => d.jsxs(oe.p, {
                    custom: w,
                    variants: f,
                    initial: "hidden",
                    animate: "visible",
                    className: "py-2 px-4 flex items-center min-w-[160px] text-[#5c7b2f] font-bold",
                    children: [d.jsx("span", {
                        className: "bg-white rounded-full px-2 py-1 mr-2 text-xs font-bold",
                        children: d.jsx("i", {
                            children: S.id
                        })
                    }), S.name]
                }, S.id))]
            }), d.jsxs("div", {
                className: "bg-white w-full py-1 md:px-2 lg:px-4",
                children: [i === 1 && d.jsx(cj, {
                    setStep: o
                }), i === 2 && d.jsx(fj, {
                    setStep: o
                }), i === 3 && d.jsx(dj, {
                    setStep: o
                }), i === 4 && d.jsx(hj, {
                    setStep: o
                }), i === 5 && d.jsx(rw, {
                    setStep: o
                }), i === 6 && d.jsx(uw, {
                    setStep: o
                }), i === 7 && d.jsx(cw, {
                    setStep: o
                }), i === 8 && d.jsx(fw, {
                    setStep: o
                }), i === 9 && d.jsx(dw, {
                    setStep: o
                }), i === 10 && d.jsx(hw, {
                    setStep: o
                }), i === 100 && d.jsx(mw, {
                    setStep: o
                })]
            })]
        })
    })
}
  , bw = () => {
    var U, P, B, G, R, Z, W, Q, ie, fe, he, ce, re, ee, k, N;
    const n = Sa()
      , {language: l, translations: i} = ut()
      , [o,c] = T.useState("")
      , [h,f] = T.useState(null)
      , [m,p] = T.useState(!1)
      , [g,v] = T.useState(null)
      , x = o && o.length >= 12
      , [S,w] = T.useState(!1)
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
    }
      , D = {
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
      , M = async () => {
        try {
            if (!x) {
                f({
                    message: "Please enter valid data",
                    type: "error"
                });
                return
            }
            w(!0);
            const O = await Ye("/api/v2/get-payment-info", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    language: l
                },
                body: {
                    info: {
                        webfile_id: o
                    }
                }
            });
            O.status_code === 200 ? (p(!0),
            v(O.data)) : f({
                message: (O == null ? void 0 : O.message) || "Failed to get payment info",
                type: "error"
            })
        } catch (O) {
            const L = O
              , ae = typeof L == "object" && (L != null && L.message) ? L.message : "Failed to get payment data. Please try again later."
              , j = typeof L == "object" && typeof L.status == "number" ? L.status : 422;
            (j === 401 || j === 419) && xa(n),
            f({
                message: ae,
                type: "error"
            })
        } finally {
            w(!1)
        }
    }
    ;
    return d.jsx(d.Fragment, {
        children: m ? d.jsxs(oe.div, {
            className: "overflow-hidden mt-2 rounded-md  border-[0.2px] border-slate-300 bg-white  py-4 lg:w-3/4 mx-auto",
            variants: C,
            initial: "hidden",
            animate: "visible",
            children: [d.jsx("p", {
                className: "font-light text-center text-lg mb-8",
                children: (R = i == null ? void 0 : i.ovPayStatus) == null ? void 0 : R[l]
            }), d.jsxs(oe.div, {
                className: "grid sm:grid-cols-2 md:grid-cols-3 md:px-4 text-center",
                variants: C,
                children: [d.jsxs(oe.div, {
                    variants: D,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [d.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (Z = i == null ? void 0 : i.ovWebID) == null ? void 0 : Z[l]
                    }), d.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: g == null ? void 0 : g.webfile_id
                    })]
                }), d.jsxs(oe.div, {
                    variants: D,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [d.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (W = i == null ? void 0 : i.ovIvacCenter) == null ? void 0 : W[l]
                    }), d.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: g == null ? void 0 : g.ivac_name
                    })]
                }), d.jsxs(oe.div, {
                    variants: D,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [d.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (Q = i == null ? void 0 : i.ovVisaType) == null ? void 0 : Q[l]
                    }), d.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: g == null ? void 0 : g.visa_type
                    })]
                }), d.jsxs(oe.div, {
                    variants: D,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [d.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (ie = i == null ? void 0 : i.ovFees) == null ? void 0 : ie[l]
                    }), d.jsxs("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: [g == null ? void 0 : g.final_amount, " BDT"]
                    })]
                }), d.jsxs(oe.div, {
                    variants: D,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [d.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (fe = i == null ? void 0 : i.ovName) == null ? void 0 : fe[l]
                    }), d.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: g == null ? void 0 : g.name
                    })]
                }), d.jsxs(oe.div, {
                    variants: D,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [d.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (he = i == null ? void 0 : i.ovEmail) == null ? void 0 : he[l]
                    }), d.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: g == null ? void 0 : g.email
                    })]
                }), d.jsxs(oe.div, {
                    variants: D,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [d.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (ce = i == null ? void 0 : i.ovContact) == null ? void 0 : ce[l]
                    }), d.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: g == null ? void 0 : g.phone
                    })]
                }), d.jsxs(oe.div, {
                    variants: D,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [d.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (re = i == null ? void 0 : i.ovAppointment) == null ? void 0 : re[l]
                    }), d.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: g == null ? void 0 : g.appointment_date
                    })]
                }), d.jsxs(oe.div, {
                    variants: D,
                    className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center md:max-w-[180px]",
                    children: [d.jsx("p", {
                        className: "text-red-600 font-light text-[10px] break-words text-center w-full",
                        children: (ee = i == null ? void 0 : i.ovPayStatus) == null ? void 0 : ee[l]
                    }), d.jsx("p", {
                        className: "text-[12px] font-semibold break-words text-center w-full",
                        children: g == null ? void 0 : g.status
                    })]
                })]
            }), d.jsxs(oe.div, {
                className: "flex items-center justify-center my-8 gap-2 px-4 flex-col md:flex-row",
                initial: "hidden",
                animate: "visible",
                variants: C,
                children: [d.jsxs("a", {
                    target: "_blank",
                    href: g == null ? void 0 : g.download_invoice_url,
                    className: "flex items-center gap-2 bg-gray-800 rounded-md shadow-md text-white text-[14px] px-4 py-2 hover:bg-black cursor-pointer uppercase",
                    children: [d.jsx(N0, {}), " ", (k = i == null ? void 0 : i.btnDownPDF) == null ? void 0 : k[l]]
                }), d.jsxs("a", {
                    target: "_blank",
                    href: g == null ? void 0 : g.print_invoice_url,
                    className: "flex items-center gap-2 bg-cyan-500 rounded-md shadow-md text-white text-[14px]  px-4 py-2 hover:bg-cyan-600 cursor-pointer uppercase",
                    children: [d.jsx(E0, {}), " ", (N = i == null ? void 0 : i.btnPrintPDF) == null ? void 0 : N[l]]
                })]
            })]
        }) : d.jsxs(oe.div, {
            className: "flex flex-col bg-green-200  sm:mx-12 lg:mx-44 rounded-md pb-4 overflow-hidden border-[0.1px] border-slate-300",
            variants: C,
            initial: "hidden",
            animate: "visible",
            children: [h && d.jsx(zt, {
                message: h.message,
                type: h.type,
                onClose: () => f(null)
            }), d.jsxs("div", {
                className: "flex flex-col items-start sm:items-center justify-center bg-white rounded-t-md px-4 py-6",
                children: [d.jsx("p", {
                    className: "text-lg mb-8 font-bold",
                    children: (U = i == null ? void 0 : i.lblQueryStatus) == null ? void 0 : U[l]
                }), d.jsx("p", {
                    className: "font-light text-xs mb-1",
                    children: (P = i == null ? void 0 : i.lblInputWebFile) == null ? void 0 : P[l]
                }), d.jsx("input", {
                    type: "text",
                    id: "name",
                    autoComplete: "off",
                    maxLength: 12,
                    className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-md shadow focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full sm:w-1/2 p-2.5 my-2",
                    onChange: O => c(O.target.value),
                    value: o
                }), S ? d.jsxs(oe.button, {
                    type: "button",
                    whileTap: {
                        scale: .95
                    },
                    className: `text-white flex items-center justify-center mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
                            bg-gray-400 cursor-not-allowed
                          `,
                    children: [(B = i == null ? void 0 : i.checking) == null ? void 0 : B[l], "..."]
                }) : d.jsx(oe.button, {
                    type: "button",
                    whileTap: {
                        scale: .95
                    },
                    className: `text-white flex items-center cursor-pointer justify-center mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
                            ${x ? "bg-[#28a745] hover:bg-[#218838]" : "bg-gray-400 cursor-not-allowed"}
                          `,
                    onClick: M,
                    children: (G = i == null ? void 0 : i.btnQueryStatus) == null ? void 0 : G[l]
                })]
            })]
        })
    })
}
  , Sw = () => {
    var m, p, g, v;
    const [n,l] = T.useState( () => {
        const x = localStorage.getItem("activeStep");
        return x ? parseInt(x) : 1
    }
    )
      , {language: i, translations: o} = ut()
      , c = [{
        id: 1,
        name: (m = o == null ? void 0 : o.lblTabMenu1) == null ? void 0 : m[i]
    }, {
        id: 2,
        name: (p = o == null ? void 0 : o.lblTabMenu2) == null ? void 0 : p[i]
    }, {
        id: 3,
        name: (g = o == null ? void 0 : o.lblTabMenu3) == null ? void 0 : g[i]
    }, {
        id: 4,
        name: (v = o == null ? void 0 : o.lblTabMenu4) == null ? void 0 : v[i]
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
      , f = {
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
    return d.jsx(d.Fragment, {
        children: d.jsxs(oe.div, {
            className: "flex flex-col bg-[#b5d6a9] sm:mx-8 lg:mx-20 border-[0.1px] border-slate-300 rounded-md shadow-lg pb-4",
            variants: h,
            initial: "hidden",
            animate: "visible",
            children: [d.jsx("div", {
                className: "flex flex-row gap-4  text-xs overflow-x-scroll scrollbar-hide border-b-[0.1px] border-slate-300",
                children: c.map( (x, S) => d.jsxs(oe.p, {
                    custom: S,
                    variants: f,
                    initial: "hidden",
                    animate: "visible",
                    className: `py-2 px-4 flex items-center font-bold rounded-t min-w-[160px] ${n === x.id ? "bg-white text-black" : "text-[#5c7a2f]"}`,
                    children: [d.jsx("span", {
                        className: `rounded-full px-2 py-1 mr-2 font-light text-xs italic ${n === x.id ? "bg-green-600 text-white" : "bg-white text-gray-500"}`,
                        children: x.id
                    }), x.name]
                }, x.id))
            }), d.jsxs("div", {
                className: "bg-white w-full p-4 overflow-y-scroll",
                children: [n === 1 && d.jsx(pw, {
                    setActiveStep: l
                }), n === 2 && d.jsx(gw, {
                    setActiveStep: l
                }), n === 3 && d.jsx(yw, {
                    setActiveStep: l
                }), n === 4 && d.jsx(vw, {
                    setActiveStep: l
                })]
            })]
        })
    })
}
  , Tw = () => {
    var P, B, G, R, Z, W, Q, ie, fe, he, ce, re, ee, k, N, O;
    const {id: n} = qj()
      , {language: l, translations: i} = ut()
      , o = Sa()
      , [c,h] = T.useState(null)
      , [f,m] = T.useState([])
      , [p,g] = T.useState(0)
      , [v,x] = T.useState(!1)
      , [S,w] = T.useState(!1)
      , [C,D] = T.useState(null);
    T.useEffect( () => {
        n && (async () => {
            var ae, j, q;
            x(!0);
            try {
                const J = await Ye(`/api/v2/multi-payment/status/${n}`, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        language: l || "en"
                    }
                });
                J.status_code === 200 ? (console.log("response", ((ae = J == null ? void 0 : J.data) == null ? void 0 : ae.total_charge) == "0.90"),
                h(J),
                m((j = J == null ? void 0 : J.data) == null ? void 0 : j.transactions),
                g((q = J == null ? void 0 : J.data) == null ? void 0 : q.successful_transaction_count)) : (D({
                    message: J.message,
                    type: "error"
                }),
                w(!0))
            } catch (J) {
                w(!0);
                const X = J
                  , le = typeof X == "object" && (X != null && X.message) ? X.message : "Failed to get payment data. Please try again later.";
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
    return v ? d.jsx("div", {
        className: "flex justify-center items-center h-screen",
        children: d.jsx("div", {
            className: "w-12 h-12 border-4 border-green-500 border-dashed rounded-full animate-spin"
        })
    }) : (console.log("paymentData", f),
    d.jsx(d.Fragment, {
        children: d.jsxs(oe.div, {
            className: "flex flex-col bg-[#b5d6a9] sm:mx-8 lg:mx-20 border-[0.1px] border-slate-300 rounded-md shadow-lg pb-4",
            variants: U,
            initial: "hidden",
            animate: "visible",
            children: [C && d.jsx(zt, {
                message: C.message,
                type: C.type,
                onClose: () => D(null)
            }), S ? d.jsxs("div", {
                className: "bg-white flex flex-col justify-center items-center py-4",
                children: [d.jsx("h1", {
                    className: "text-center text-red-500 font-light text-2xl mt-2",
                    children: (k = i == null ? void 0 : i.failed) == null ? void 0 : k[l]
                }), d.jsx("p", {
                    className: "text-sm font-light",
                    children: (N = i == null ? void 0 : i.noTransactionFound) == null ? void 0 : N[l]
                }), d.jsx("button", {
                    type: "button",
                    onClick: M,
                    className: "hover:cursor-pointer bg-amber-400 rounded-md px-2 py-2 mt-3 uppercase text-sm font-light hover:text-white",
                    children: (O = i == null ? void 0 : i.startOverToPayment) == null ? void 0 : O[l]
                })]
            }) : d.jsxs("div", {
                className: "bg-white",
                children: [d.jsx("h1", {
                    className: "text-center text-green-500 font-light text-2xl mt-2",
                    children: c == null ? void 0 : c.message
                }), d.jsxs("p", {
                    className: "text-center font-light text-xs my-4",
                    children: [(P = i == null ? void 0 : i.payment_response_text1) == null ? void 0 : P[l], " ", d.jsxs("span", {
                        className: "underline font-bold",
                        children: ["“", (B = c == null ? void 0 : c.data) == null ? void 0 : B.transaction_id, "”"]
                    }), "  ", (G = i == null ? void 0 : i.payment_response_text2) == null ? void 0 : G[l]]
                }), d.jsx("div", {
                    className: "flex flex-row justify-center items-center gap-4 mx-4 my-4",
                    children: d.jsx("div", {
                        className: "relative w-full overflow-x-auto sm:rounded-lg",
                        children: d.jsxs("table", {
                            className: "w-full text-sm text-left text-black ",
                            children: [d.jsx("thead", {
                                className: "text-xs text-black ",
                                children: d.jsxs("tr", {
                                    children: [d.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "WEBFILE NUMBER"
                                    }), d.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "IVAC CENTER"
                                    }), d.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "Appointment Date"
                                    }), d.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "EMAIL"
                                    }), d.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "MOBILE NUMBER"
                                    }), ((R = c == null ? void 0 : c.data) == null ? void 0 : R.total_charge) != "0.00" && d.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "CHARGE"
                                    }), d.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "FEES"
                                    }), d.jsx("th", {
                                        scope: "col",
                                        className: "px-6 py-3",
                                        children: "STATUS"
                                    })]
                                })
                            }), d.jsx("tbody", {
                                className: "border-b",
                                children: f.map( (L, ae) => {
                                    var j;
                                    return d.jsxs("tr", {
                                        className: "bg-white  border-gray-200 hover:bg-gray-50",
                                        children: [d.jsx("td", {
                                            className: "px-6 py-4",
                                            children: L == null ? void 0 : L.webfile_id
                                        }), d.jsx("td", {
                                            className: "px-6 py-4",
                                            children: L == null ? void 0 : L.ivac_name
                                        }), d.jsxs("td", {
                                            className: "px-6 py-4",
                                            children: [L == null ? void 0 : L.appointment_date, " (", L == null ? void 0 : L.appointment_time_slot, ")"]
                                        }), d.jsx("td", {
                                            className: "px-6 py-4 uppercase",
                                            children: L == null ? void 0 : L.email
                                        }), d.jsx("td", {
                                            className: "px-6 py-4",
                                            children: L == null ? void 0 : L.phone
                                        }), ((j = c == null ? void 0 : c.data) == null ? void 0 : j.total_charge) != "0.00" && d.jsx("td", {
                                            className: "px-6 py-4",
                                            children: L == null ? void 0 : L.charge
                                        }), d.jsx("td", {
                                            className: "px-6 py-4",
                                            children: L == null ? void 0 : L.amount
                                        }), d.jsx("td", {
                                            className: "px-6 py-4",
                                            children: L == null ? void 0 : L.status
                                        })]
                                    }, ae)
                                }
                                )
                            })]
                        })
                    })
                }), d.jsxs("div", {
                    className: "flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 mx-4 gap-2",
                    children: [d.jsx("div", {
                        className: "w-full sm:w-auto",
                        children: d.jsxs("p", {
                            className: "text-[10px] font-light text-red-500",
                            children: ["* ", (Z = i == null ? void 0 : i.lblPaymentSuccessQueue) == null ? void 0 : Z[l]]
                        })
                    }), d.jsxs("div", {
                        className: " text-black font-light text-sm p-2 w-full sm:w-auto",
                        children: [((W = c == null ? void 0 : c.data) == null ? void 0 : W.total_charge) != "0.00" && d.jsxs("div", {
                            className: "grid grid-cols-2 gap-2 text-right",
                            children: [d.jsx("p", {
                                className: "text-left",
                                children: "Total Charges:"
                            }), d.jsxs("p", {
                                children: ["BDT ", (Q = c == null ? void 0 : c.data) == null ? void 0 : Q.total_charge]
                            })]
                        }), d.jsxs("div", {
                            className: "grid grid-cols-2 gap-2 text-right",
                            children: [d.jsx("p", {
                                className: "text-left",
                                children: "Total Fees :"
                            }), d.jsxs("p", {
                                children: ["BDT ", (ie = c == null ? void 0 : c.data) == null ? void 0 : ie.total_fees]
                            })]
                        })]
                    })]
                }), d.jsxs("div", {
                    className: "flex justify-center items-center mt-4 mx-4",
                    children: [d.jsxs("a", {
                        target: "_blank",
                        href: (fe = c == null ? void 0 : c.data) == null ? void 0 : fe.download_invoice_url,
                        className: "flex items-center gap-2 flex-wrap text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",
                        children: [d.jsx(N0, {}), d.jsx("span", {
                            children: (he = i == null ? void 0 : i.btnDownPDF) == null ? void 0 : he[l]
                        })]
                    }), d.jsxs("a", {
                        type: "button",
                        target: "_blank",
                        href: (ce = c == null ? void 0 : c.data) == null ? void 0 : ce.print_invoice_url,
                        className: "hover:cursor-pointer flex text-white bg-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",
                        children: [d.jsx(E0, {}), " ", (re = i == null ? void 0 : i.btnPrintPDF) == null ? void 0 : re[l]]
                    }), d.jsx("button", {
                        type: "button",
                        onClick: M,
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
  , jw = () => {
    var x, S, w;
    const {language: n, translations: l} = ut()
      , i = tr()
      , o = Sa()
      , [c,h] = T.useState( () => !!localStorage.getItem("access_token"))
      , f = localStorage.getItem("auth_photo")
      , m = localStorage.getItem("auth_name") ? localStorage.getItem("auth_name") : "User Name";
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
    const p = i.pathname === "/payment-status"
      , g = () => {
        o(p ? -1 : "/payment-status")
    }
      , v = () => {
        localStorage.clear(),
        h(!1),
        window.dispatchEvent(new Event("tokenUpdate")),
        o("/")
    }
    ;
    return d.jsxs("div", {
        className: "md:px-8 py-4 flex justify-between flex-col lg:flex-row items-center gap-4",
        children: [d.jsx(oe.div, {
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
            children: d.jsx("img", {
                src: lj,
                alt: "SIB Logo",
                className: "w-56 cursor-pointer",
                onClick: v
            })
        }), d.jsxs(oe.div, {
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
            children: [d.jsx("button", {
                onClick: g,
                className: "bg-cyan-500 item-shadow hover-scale uppercase text-sm hover:bg-cyan-600 hover:cursor-pointer text-white px-3 py-2 rounded-md",
                children: p ? (x = l == null ? void 0 : l.bckToPay) == null ? void 0 : x[n] : (S = l == null ? void 0 : l.QueryPay) == null ? void 0 : S[n]
            }), d.jsx("div", {
                className: "flex flex-row items-center gap-2",
                children: c && d.jsxs(d.Fragment, {
                    children: [d.jsxs("p", {
                        className: "flex items-center justify-center gap-1 text-sm",
                        children: [f ? d.jsx("img", {
                            src: `${f}`,
                            alt: "User",
                            className: "w-6 h-6 rounded-full object-cover"
                        }) : d.jsx($T, {}), " ", m]
                    }), d.jsx("span", {
                        children: "|"
                    }), d.jsxs("p", {
                        className: "text-sm hover:cursor-pointer text-red-500",
                        onClick: v,
                        children: ["[ ", (w = l == null ? void 0 : l.logout_button) == null ? void 0 : w[n], " ]"]
                    })]
                })
            })]
        })]
    })
}
  , ww = () => d.jsx("div", {
    className: "px-8 py-4 flex justify-center md:justify-end items-center",
    children: d.jsx("div", {
        className: "flex items-center gap-2 text-sm text-gray-600",
        children: d.jsx("img", {
            src: ij,
            alt: "SSL Logo",
            className: " w-80"
        })
    })
})
  , Kg = ({children: n}) => localStorage.getItem("access_token") ? d.jsx(Z0, {
    to: "/application",
    replace: !0
}) : n
  , Aw = ({children: n}) => localStorage.getItem("access_token") ? n : d.jsx(Z0, {
    to: "/",
    replace: !0
})
  , Nw = T.createContext({
    hasToken: !1,
    setHasToken: () => {}
})
  , Ew = ({children: n}) => {
    const [l,i] = T.useState(!!localStorage.getItem("access_token"));
    return T.useEffect( () => {
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
    d.jsx(Nw.Provider, {
        value: {
            hasToken: l,
            setHasToken: i
        },
        children: n
    })
}
  , Cw = () => {
    const [n,l] = T.useState(!0)
      , [i,o] = T.useState(!1);
    return T.useEffect( () => {
        const c = setTimeout( () => {
            o(!0)
        }
        , 3e3);
        return () => clearTimeout(c)
    }
    , []),
    n ? d.jsx(d.Fragment, {
        children: d.jsx(oe.div, {
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
            children: n && d.jsx("div", {
                className: "fixed inset-0 backdrop-blur-sm backdrop-brightness-75 flex justify-center items-center z-50",
                children: d.jsxs("div", {
                    className: "bg-white max-h-[90vh] w-full max-w-2xl p-6 rounded-lg overflow-y-auto scrollbar-hide relative",
                    children: [i && d.jsx("button", {
                        onClick: () => l(!1),
                        className: "absolute top-2 right-2 text-gray-500 hover:text-red-500 hover:cursor-pointer mb-4",
                        children: "✕"
                    }), d.jsxs("div", {
                        className: "space-y-4 text-sm text-gray-800",
                        children: [d.jsx("div", {
                            className: "w-full text-red-500 text-center font-bold text-lg bg-white z-100",
                            children: "জরুরি বিজ্ঞপ্তি"
                        }), d.jsxs("div", {
                            className: "text-gray-700 font-light text-xs",
                            children: [d.jsx("p", {
                                children: "ভিসা পেমেন্ট এর পূর্বে ভিডিও টি দেখে নিন।"
                            }), d.jsx("p", {
                                children: "Please watch the video before proceeding for visa payment."
                            })]
                        }), d.jsx("div", {
                            className: "aspect-w-16  h-[400px] mb-4",
                            children: d.jsx("iframe", {
                                className: "w-full h-full rounded",
                                src: "https://www.youtube.com/embed/ckFsAX727LM",
                                title: "YouTube video",
                                frameBorder: "0",
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                allowFullScreen: !0
                            })
                        }), d.jsx("div", {
                            className: "text-black font-semibold text-sm",
                            children: "ভিসা আবেদন পত্র জমা দেয়ার স্লট নেয়ার জন্য কি করণীয় এবং কি করবেন না"
                        }), d.jsxs("div", {
                            className: "text-black font-normal text-sm my-1",
                            children: [d.jsx("p", {
                                children: "১. বুকিংয়ের জন্য স্লট খোলার আগে সমস্ত নথি প্রস্তুত রাখুন।"
                            }), d.jsx("p", {
                                children: "[অনলাইন আবেদনপত্র, ব্যক্তিগত যোগাযোগ নম্বর সহ মোবাইল হ্যান্ডসেট (OTP যাচাইকরণের জন্য), আবেদনকারীর ছবির ফরমেটে হবে jpg/png(সাইজ হবে সর্বোচ্চ ২ এমবি)]এগুলো ডেস্কটপ/মোবাইলে সংরক্ষিত রাখুন যেন রেজিস্ট্রেশনের সময় সহজে আপলোড করতে পারেন ।"
                            }), d.jsx("p", {
                                children: "২. প্রথমবার নিবন্ধনের জন্য লগইন আইডি এবং পাসওয়ার্ড তৈরি করতে হবে।"
                            }), d.jsx("p", {
                                children: "৩. একটি একক বুকিং সেশনের অধীনে একটি একক লগইন আইডির মাধ্যমে সর্বাধিক ৫ জনের বুকিং করা যেতে পারে।"
                            }), d.jsx("p", {
                                children: "৪. একটি একক লগইন আইডির মাধ্যমে বুক করা স্লটগুলি একই ভিসা আবেদনকারি হতে হবে৷ একই লগইন আইডির মাধ্যমে অসংলগ্ন অ্যাপ্লিকেশন লক্ষ্য করা গেলে পেমেন্ট ইনভয়েস বাতিল করা হবে।"
                            }), d.jsx("p", {
                                children: "৫. স্লট বুকিং নিয়ে এগিয়ে যাওয়ার আগে অ্যাপ্লিকেশন তথ্য ট্যাবে পরিবারের সকল সদস্যদের তথ্য যোগ করুন ।"
                            }), d.jsx("p", {
                                children: "৬. অনুগ্রহ করে ১৫ মিনিটের মধ্যে আপনার স্লট বুকিং সম্পূর্ণ করুন,না করতে পরলে সেশনের মেয়াদ শেষ হবে এবং নতুন লগইন প্রয়োজন হবে।"
                            }), d.jsx("p", {
                                children: "৭. আবেদনপত্র IVAC-সেন্টারে জমা দেওয়ার সময় আপনার ব্যক্তিগত যোগাযোগ নম্বর সঙ্গে রাখুন।যা OTP যাচাইকরণ এবং অ্যাপয়েন্টমেন্ট বুকিংয়ের জন্য ব্যবহৃত হয়েছে।"
                            }), d.jsx("p", {
                                children: "৮. ভারতীয় ভিসার জন্য কোন অনুমোদিত এজেন্ট বা দালাল নেই।এটি একই সাথে সংযুক্তি আত্মসাৎ এবং চাঁদাবাজির ঝুঁকি বহন করে।"
                            }), d.jsx("p", {
                                children: "৯. এটি একটি গুরুত্বপূর্ণ বিষয়, যেখানে অসাধু উপাদানগুলি একাধিক পেমেন্ট চ্যানেল ব্যবহার করে কৃত্রিম ট্র্যাফিক তৈরি করছে এবং প্রকৃত আবেদনকারীদের জন্য সমস্যা সৃষ্টি করছে। এই ধরনের কার্যকলাপের বিরুদ্ধে কঠোর ব্যবস্থা গ্রহণ করা উচিত এবং যথাযথ পদক্ষেপ গ্রহণ করা দরকার, যেমন একাধিক পেমেন্টের ক্ষেত্রে ফেরত না দেওয়া। এটি কেবল অসাধু কার্যকলাপের প্রতি একটি কঠিন বার্তা পাঠাবে না, বরং প্রকৃত আবেদনকারীদের জন্য সিস্টেমটিকে আরও সুষ্ঠু এবং কার্যকরী করতে সাহায্য করবে।"
                            })]
                        }), d.jsx("div", {
                            className: "w-2/3 h-0.5 bg-red-600 mx-auto"
                        }), d.jsx("div", {
                            className: "text-black font-semibold text-sm",
                            children: "Do’s and Don’ts (Online Payment and Appointment)"
                        }), d.jsxs("div", {
                            className: "text-black font-normal text-sm py-1",
                            children: [d.jsx("p", {
                                children: "1. Keep all documents ready, before slot opens for booking. [Online application form, mobile handset with personal contact no.(for OTP verification), applicant photograph in jpg, png format (max 2MB size) saved in Desktop/mobile for easy upload during registration.]"
                            }), d.jsx("p", {
                                children: "2. Login ID and password will have to be created for first time registration before proceeding with appointment."
                            }), d.jsx("p", {
                                children: "3. Maximum 5 persons’ booking can be done through one single login ID under a single booking session."
                            }), d.jsx("p", {
                                children: "4. The booked slots through one single Login ID should be for the same Visa application/journey. Unrelated applications through same login ID, under 1 payment invoice will be cancelled."
                            }), d.jsx("p", {
                                children: "5. Add all family members in Application Info tab before proceeding with slot booking."
                            }), d.jsx("p", {
                                children: "6. Please complete total slot booking within 15 minutes, after which session will expire and fresh login will be required."
                            }), d.jsx("p", {
                                children: "7. During Submission at IVAC on Appointment date, invariably carry your personal contact no. used for OTP validation and appointment booking."
                            }), d.jsxs("p", {
                                children: ["8. ", d.jsx("span", {
                                    className: "font-bold",
                                    children: "There are no authorized agents or brokers for Indian Visa."
                                }), " Association with the same carries risk of embezzlement and extortion."]
                            }), d.jsx("p", {
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
function Dw() {
    const [n,l] = T.useState(!1)
      , [i,o] = T.useState("")
      , [c,h] = T.useState("")
      , f = window.location.pathname === "/";
    return T.useEffect( () => {
        const m = localStorage.getItem("authStep");
        m && h(m)
    }
    , []),
    T.useEffect( () => {
        const m = () => {}
        ;
        return window.addEventListener("beforeunload", m),
        (async () => {
            try {
                const g = await Q0();
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
            window.removeEventListener("beforeunload", m)
        }
    }
    , []),
    T.useEffect( () => {
        const m = p => {
            p.preventDefault()
        }
        ;
        return document.addEventListener("contextmenu", m),
        () => {
            document.removeEventListener("contextmenu", m)
        }
    }
    , []),
    T.useEffect( () => {
        const m = p => {
            (p.key === "F12" || p.ctrlKey && p.shiftKey && p.key === "I" || p.ctrlKey && p.shiftKey && p.key === "C" || p.ctrlKey && p.shiftKey && p.key === "J" || p.ctrlKey && p.key === "U") && p.preventDefault()
        }
        ;
        return document.addEventListener("keydown", m),
        () => {
            document.removeEventListener("keydown", m)
        }
    }
    , []),
    n ? d.jsx(Ew, {
        children: d.jsx(WT, {
            children: d.jsx(ow, {
                children: d.jsxs("div", {
                    className: "flex flex-col md:h-screen",
                    children: [d.jsx(aj, {}), d.jsxs("div", {
                        className: "flex flex-1 flex-col md:flex-row overflow-hidden",
                        children: [d.jsx("div", {
                            className: "w-full md:w-1/3 lg:w-1/4 bg-gray-800 md:h-screen h-full scrollbar-hide pb-4",
                            children: d.jsx(ej, {})
                        }), d.jsxs("div", {
                            className: "w-full md:flex-1 overflow-y-auto bg-gray-50 p-4 flex flex-col bg-cover bg-center",
                            style: {
                                backgroundImage: `url(${M0})`
                            },
                            children: [d.jsx("div", {
                                className: "mb-4",
                                children: d.jsx(jw, {})
                            }), d.jsx("div", {
                                className: "flex-1",
                                children: d.jsxs(lw, {
                                    children: [d.jsx(es, {
                                        path: "/",
                                        element: d.jsx(Kg, {
                                            children: d.jsx(xw, {})
                                        })
                                    }), d.jsx(es, {
                                        path: "/payment-status",
                                        element: d.jsx(bw, {})
                                    }), d.jsx(es, {
                                        path: "/application",
                                        element: d.jsx(Aw, {
                                            children: d.jsx(Sw, {})
                                        })
                                    }), d.jsx(es, {
                                        path: "/payment-response/:id",
                                        element: d.jsx(Kg, {
                                            children: d.jsx(Tw, {})
                                        })
                                    })]
                                })
                            }), c === "1" && f && d.jsx(Cw, {}), d.jsx(ww, {})]
                        })]
                    })]
                })
            })
        })
    }) : d.jsx(oj, {
        message: i || "Loading, please wait..."
    })
}
hb.createRoot(document.getElementById("root")).render(d.jsx(T.StrictMode, {
    children: d.jsx(Dw, {})
}));
