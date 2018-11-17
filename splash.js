! function(t) {
    function n(e) {
        if (r[e]) return r[e].exports;
        var i = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    var r = {};
    n.m = t, n.c = r, n.d = function(t, r, e) {
        n.o(t, r) || Object.defineProperty(t, r, {
            configurable: !1,
            enumerable: !0,
            get: e
        })
    }, n.n = function(t) {
        var r = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(r, "a", r), r
    }, n.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }, n.p = "", n(n.s = 35)
}({
    1: function(t, n, r) {
        "use strict";
        var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
        t.exports = new function() {
            var t = this;
            this.serialize = function(t) {
                if (t) {
                    if ("string" == typeof t) return encodeURIComponent(t);
                    if ("object" === (void 0 === t ? "undefined" : e(t))) return Object.getOwnPropertyNames(t)
                        .filter(function(n) {
                            return void 0 !== t[n] && null !== t[n] && (!Array.isArray(t[n]) || Array.isArray(t[n]) && t[n].length)
                        })
                        .map(function(n) {
                            return encodeURIComponent(n) + "=" + encodeURIComponent(t[n])
                        })
                        .join("&");
                    throw "Unsupported object type"
                }
                return ""
            }, this.arrayToObject = function(n, r, e) {
                if (!r || !n || !n.length) return t;
                e || (e = function(t) {
                    return t
                });
                var i = {};
                return n.forEach(function(t) {
                    var n = r(t),
                        o = e(t);
                    i[n] = o
                }), i
            }, this.filter = function(n) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.nonEmpty;
                return Array.isArray(n) ? n.filter(r) : t.arrayToObject(Object.getOwnPropertyNames(n)
                    .filter(function(t) {
                        return r(n[t], t)
                    }),
                    function(t) {
                        return t
                    },
                    function(t) {
                        return n[t]
                    })
            }, this.empty = function(t) {
                return void 0 === t || null === t || void 0 !== t.length && 0 === t.length || "object" === (void 0 === t ? "undefined" : e(t)) && 0 === Object.getOwnPropertyNames(t)
                    .length
            }, this.nonEmpty = function(n) {
                return !t.empty(n)
            }, this.find = function(t, n, r) {
                return t && t.length && n && r ? t.find(function(t) {
                    return t[n == r]
                }) : null
            }, this.map = function(t, n) {
                if (!t || !t.length) return {};
                var r = {};
                return t.forEach(function(t) {
                    return r[t[n]] = t
                }), r
            }, this.money = function(t) {
                return isNaN(t) ? void 0 : Math.ceil(100 * t) / 100
            }, this.formatDate = function(t) {
                var n = t ? new Date(t) : new Date,
                    r = n.getDate();
                return n.getMonth() + 1 + "/" + r + "/" + n.getFullYear()
            }, this.getURLParam = function(n, r) {
                return t.safe(function() {
                    return new URL(n)
                        .searchParams.get(r)
                })
            }, this.deleteParams = function(t) {
                var n = t.indexOf("?");
                return n > 0 && (t = t.substring(0, n)), t
            }, this.containsOne = function(t) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), e = 1; e < n; e++) r[e - 1] = arguments[e];
                if (!t || !r || 0 == r.length) return !1;
                var i = !0,
                    o = !1,
                    u = void 0;
                try {
                    for (var a, s = r[Symbol.iterator](); !(i = (a = s.next())
                            .done); i = !0) {
                        var c = a.value;
                        if (t.indexOf(c) >= 0) return !0
                    }
                } catch (t) {
                    o = !0, u = t
                } finally {
                    try {
                        !i && s.return && s.return()
                    } finally {
                        if (o) throw u
                    }
                }
                return !1
            }, this.containsAll = function(t) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), e = 1; e < n; e++) r[e - 1] = arguments[e];
                if (!t || !r || 0 == r.length) return !1;
                var i = !0,
                    o = !1,
                    u = void 0;
                try {
                    for (var a, s = r[Symbol.iterator](); !(i = (a = s.next())
                            .done); i = !0) {
                        var c = a.value;
                        if (t.indexOf(c) < 0) return !1
                    }
                } catch (t) {
                    o = !0, u = t
                } finally {
                    try {
                        !i && s.return && s.return()
                    } finally {
                        if (o) throw u
                    }
                }
                return !0
            }, this.getParameter = function(t, n) {
                var r = new RegExp("[\\?&]" + t + "=([^&#]*)")
                    .exec(n);
                return r ? r[1] : null
            }, this.hasParam = function(t, n) {
                for (var r in n)
                    if (this.getParameter(n[r], t)) return !0;
                return !1
            }, this.updateParameter = function(t, n, r) {
                var e = new RegExp("([?&])" + n + "=.*?(&|$)", "i"),
                    i = -1 !== t.indexOf("?") ? "&" : "?";
                return t.match(e) ? t.replace(e, "$1" + n + "=" + r + "$2") : t + i + n + "=" + r
            }, this.escapeHTML = function(t) {
                return t ? t.replace(/&/g, "&amp;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#39;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;") : ""
            }, this.toNumber = function(t) {
                if (!t) return Number.NaN;
                for (var n, r, e = 0; e < t.length; ++e) {
                    var i = t[t.length - e - 1];
                    if (isNaN(parseInt(i))) {
                        if (e >= 3) {
                            r = i;
                            break
                        }
                        n = i
                    }
                }
                return r && (t = t.replace(new RegExp("\\" + r, "g"), "")), n && (t = t.replace(n, ".")), Number(t)
            }, this.left = function(t, n) {
                if (!t || !n) return t;
                var r = t.indexOf(n);
                return r >= 0 ? t.substring(0, r) : t
            }, this.right = function(t, n) {
                if (!t || !n) return t;
                var r = t.indexOf(n);
                return r >= 0 ? t.substring(r + 1) : t
            }, this.unique = function(t, n) {
                if (!t || !t.length || !n) return t;
                for (var r = new Map, e = 0; e < t.length; ++e) {
                    var i = t[e];
                    if (i) {
                        var o = n ? i[n] : i;
                        r.has(o) || r.set(o, i)
                    }
                }
                return Array.from(r.values())
            }, this.parseUrlParams = function(t) {
                if (!t) return null;
                var n = {},
                    r = t.indexOf("?");
                return (r >= 0 ? t.substring(r + 1) : t)
                    .split("&")
                    .forEach(function(t) {
                        var r = t.split("=");
                        n[r[0]] = decodeURIComponent(r[1])
                    }), n
            }, this.sum = function(t) {
                return t ? "number" == typeof t ? t : Object.getOwnPropertyNames(t)
                    .map(function(n) {
                        return t[n]
                    })
                    .filter(function(t) {
                        return !isNaN(t)
                    })
                    .map(function(t) {
                        return Number(t)
                    })
                    .reduce(function(t, n) {
                        return t + n
                    }, null) : null
            }, this.clone = function(t) {
                if (null == t || "object" != (void 0 === t ? "undefined" : e(t))) return t;
                var n = t.constructor();
                for (var r in t) t.hasOwnProperty(r) && (n[r] = t[r]);
                return n
            }, this.safe = function(t, n) {
                var r;
                try {
                    r = t()
                } catch (t) {
                    r = n
                }
                return r
            }, this.minmax = function(t, n, r) {
                return this.min(this.max(t, r), n)
            }, this.min = function() {
                return Array.prototype.slice.call(arguments)
                    .filter(function(t) {
                        return void 0 !== t && null !== t
                    })
                    .reduce(function(t, n) {
                        return t < n ? t : n
                    })
            }, this.max = function() {
                return Array.prototype.slice.call(arguments)
                    .filter(function(t) {
                        return void 0 !== t && null !== t
                    })
                    .reduce(function(t, n) {
                        return t > n ? t : n
                    })
            }, this.last = function(t) {
                return t && t.length ? t[t.length - 1] : null
            }, this.getHostName = function(n) {
                return t.safe(function() {
                    return n.match(/[\w-]:\/\/([\w.-]+\.[\w]+)(\/|$)/i)[1]
                })
            }, this.getAmazonHost = function(t) {
                return t.match(/https?:\/\/((www|smile)\.)?amazon\.[\w.]+/)[0]
            }, this.getAmazonDomain = function(n) {
                return t.isAmazonUrl(n) && n.match(/amazon\.([\w.]{2,6})/)[1]
            }, this.isAmazonUrl = function(t) {
                return /^https?:\/\/((www|smile)\.)?amazon\.[\w.]{2,6}\//.test(t.trim())
            }, this.isAmazonProductUrl = function(n) {
                return t.isAmazonUrl(n) && /(\/((B[A-Z\d]{9})|(\d{9}[A-Z\d]))($|\/|\?))|(\/dp\/((B[A-Z\d]{9})|(\d{9}[A-Z\d])))/.test(n)
            }, this.getASIN = function(n) {
                return t.safe(function() {
                    return n.match(/\/((:?B[A-Z\d]{9})|(:?\d{9}[A-Z\d]))($|\/|\?)/)[1]
                })
            }, this.isAmazonSearchUrl = function(n) {
                return t.hasParam(n, ["url", "field-keywords", "keywords", "field-brandtextbin", "rh", "rnid", "node"])
            }, this.replaceAmazonImages = function(t) {
                return t.replace(/src=("https:\/\/images[\w\d\-.]+amazon.[\w.]+\/images\/[\w\d+\-%&.,_\/]+")/gi, "_src=$1")
            }, this.isAmazonCategoryUrl = function(t) {
                return /https?:\/\/(www|smile)\.amazon\.[\w.]+\/([\w\d\-%]+\/)?b[\/?]/.test(t)
            }, this.isAmazonAuthorUrl = function(n) {
                return t.isAmazonUrl(n) && /\/e\/((:?B[A-Z\d]{9})|(:?\d{9}[A-Z\d]))($|\/|\?)/.test(n)
            }, this.isAmazonDealsUrl = function(t) {
                return /https?:\/\/(www|smile)\.amazon\.[\w.]+\/sales\-deals\-[\w\d\-%]+($|\/|\?)/i.test(t)
            }, this.isAmazonGoldBoxUrl = function(t) {
                return /https?:\/\/(www|smile)\.amazon\.[\w.]+\/gp\/goldbox($|\/|\?)/i.test(t)
            }, this.isAmazonSearchUrl = function(n) {
                return /\/l\/[\d]{8,16}($|\/|\?)/.test(n) || /https?:\/\/(www|smile)\.amazon\.[\w.]+\/s(\/|\?)/.test(n) || t.hasParam(n, ["url", "field-keywords", "keywords", "field-brandtextbin", "rh", "rnid", "node", "text"])
            }, this.isAmazonBestSellersUrl = function(n) {
                return t.isAmazonUrl(n) && /\/(best\-sellers|bestsellers)/i.test(n)
            }, this.rand = function(t, n) {
                return Math.round(Math.random() * (n - t) + t)
            }, this.parse = function(t) {
                return (new DOMParser)
                    .parseFromString(t, "text/html")
            }, this.eval = function(t, n) {
                return new Function("(function() {" + t + "}).call(this)")
                    .call(n)
            }
        }
    },
    35: function(t, n, r) {
        "use strict";
        r(37);
        var e = r(1),
            i = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(e),
            o = chrome.storage.local,
            u = function(t) {
                return chrome.i18n.getMessage(t)
            },
            a = ["com", "ca", "co.uk", "com.mx", "de", "it", "es", "fr", "in", "co.jp", "com.au"];
        chrome.tabs.query({
            currentWindow: !0,
            active: !0
        }, function(t) {
            var n = t[0],
                r = n.url,
                e = document.querySelector("h2");
            return o.get(["ready"], function(t) {
                if (i.default.isAmazonProductUrl(r)) {
                    var s = r.match(/www\.amazon\.([\w.]+)/)[1].toLowerCase();
                    if (a.includes(s)) {
                        if (t.ready) {
                            chrome.tabs.connect(n.id, {
                                    name: "CALC_EXT"
                                })
                                .postMessage({
                                    action: "toggle-popup",
                                    url: r,
                                    tabId: n.id
                                })
                        } else o.set({
                            open: !0
                        });
                        window.close()
                    } else e.innerHTML = u("unsupportedDomainErr")
                } else e.innerHTML = u("wrongPageErr")
            }), !1
        })
    },
    37: function(t, n) {}
});