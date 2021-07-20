google.maps.__gjsload__('search_impl', function(_) {
    var Obb = function(a) {
            _.E(this, a, 4)
        },
        Qbb = function(a) {
            Pbb || (Pbb = {
                oa: "sssM",
                Da: ["ss"]
            });
            var b = Pbb;
            return _.wi.g(a.Jb(), b)
        },
        Rbb = function(a, b) {
            a.W[0] = b
        },
        Sbb = function(a, b) {
            a.W[2] = b
        },
        X$ = function(a) {
            _.E(this, a, 3)
        },
        Tbb = function() {
            var a = _.yj,
                b = _.Qi;
            this.i = _.Ke;
            this.g = _.tk(_.hr, a, _.Lr + "/maps/api/js/LayersService.GetFeature", b)
        },
        Wbb = function(a, b, c) {
            var d = _.GA(new Tbb);
            c.lr = (0, _.ob)(d.load, d);
            c.clickable = 0 != a.get("clickable");
            _.MBa(c, _.wH(b));
            var e = [];
            e.push(_.G.addListener(c, "click", (0, _.ob)(Ubb, null, a)));
            _.Rb(["mouseover",
                "mouseout", "mousemove"
            ], function(f) {
                e.push(_.G.addListener(c, f, (0, _.ob)(Vbb, null, a, f)))
            });
            e.push(_.G.addListener(a, "clickable_changed", function() {
                a.g.clickable = 0 != a.get("clickable")
            }));
            a.i = e
        },
        Ubb = function(a, b, c, d, e) {
            var f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, 0 == e.getStatus())) {
                f.location = _.yk(e, 1) ? new _.zf(_.te(e.getLocation(), 0), _.te(e.getLocation(), 1)) : null;
                f.fields = {};
                for (var g = 0, h = _.De(e, 2); g < h; ++g) {
                    var k = new _.CH(_.Ce(e, 2, g));
                    f.fields[k.getKey()] = k.Bb()
                }
            }
            _.G.trigger(a, "click", b, c, d, f)
        },
        Vbb = function(a,
            b, c, d, e, f, g) {
            var h = null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.G.trigger(a, b, c, d, e, h, g)
        },
        Xbb = function() {},
        Pbb;
    _.C(Obb, _.D);
    Obb.prototype.getParameter = function(a) {
        return new _.CH(_.Ce(this, 3, a))
    };
    _.C(X$, _.D);
    X$.prototype.getStatus = function() {
        return _.se(this, 0, -1)
    };
    X$.prototype.getLocation = function() {
        return new _.vl(this.W[1])
    };
    Tbb.prototype.load = function(a, b) {
        function c(g) {
            g = new X$(g);
            b(g)
        }
        var d = new Obb;
        Rbb(d, a.layerId.split("|")[0]);
        d.W[1] = a.g;
        Sbb(d, _.Ee(_.He(this.i)));
        for (var e in a.parameters) {
            var f = new _.CH(_.Be(d, 3));
            f.W[0] = e;
            f.W[1] = a.parameters[e]
        }
        a = Qbb(d);
        this.g(a, c, c);
        return a
    };
    Tbb.prototype.cancel = function() {
        throw Error("Not implemented");
    };
    Xbb.prototype.Hu = function(a) {
        if (_.ei[15]) {
            var b = a.Ke,
                c = a.Ke = a.getMap();
            b && a.g && (a.j ? (b = b.__gm.g, b.set(b.get().Hg(a.g))) : a.g && _.hCa(a.g, b) && (_.Rb(a.i || [], _.G.removeListener), a.i = null));
            if (c) {
                var d = a.get("layerId"),
                    e = a.get("spotlightDescription"),
                    f = a.get("paintExperimentIds"),
                    g = a.get("styler"),
                    h = a.get("mapsApiLayer");
                b = new _.Ol;
                d = d.split("|");
                b.layerId = d[0];
                for (var k = 1; k < d.length; ++k) {
                    var l = d[k].split(":");
                    b.parameters[l[0]] = l[1]
                }
                e && (b.spotlightDescription = new _.ap(e));
                f && (b.paintExperimentIds = f.slice(0));
                g && (b.styler = new _.Rl(g));
                h && (b.mapsApiLayer = new _.Fk(h));
                a.g = b;
                a.j = a.get("renderOnBaseMap");
                a.j ? (a = c.__gm.g, a.set(a.get().Jf(b))) : Wbb(a, c, b);
                _.gh(c, "Lg")
            }
        }
    };
    _.Qf("search_impl", new Xbb);
});