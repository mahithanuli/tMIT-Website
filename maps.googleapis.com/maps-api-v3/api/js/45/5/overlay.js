google.maps.__gjsload__('overlay', function(_) {
    var jt = function(a) {
            this.g = a
        },
        Gka = function() {},
        kt = function(a) {
            a.Jo = a.Jo || new Gka;
            return a.Jo
        },
        Hka = function(a) {
            this.ob = new _.Di(function() {
                var b = a.Jo;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.Fn && a.onAdd) a.onAdd();
                        b.Fn = !0;
                        a.draw()
                    }
                } else {
                    if (b.Fn)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.Fn = !1
                }
            }, 0)
        },
        Ika = function(a, b) {
            function c() {
                return _.Ei(e.ob)
            }
            var d = kt(a),
                e = d.Fm;
            e || (e = d.Fm = new Hka(a));
            _.Rb(d.Ma || [], _.G.removeListener);
            var f = d.Cb = d.Cb || new _.Er,
                g = b.__gm;
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("center", g, "projectionCenterQ");
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            f = d.ls = d.ls || new jt(f);
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            a.bindTo("projection", f, "outProjection");
            a.bindTo("panes", g);
            d.Ma = [_.G.addListener(a, "panes_changed", c), _.G.addListener(g, "zoom_changed", c), _.G.addListener(g, "offset_changed", c), _.G.addListener(b, "projection_changed", c), _.G.addListener(g, "projectioncenterq_changed", c)];
            c();
            b instanceof
            _.hg && (_.gh(b, "Ox"), _.Gl("Ox", "-p", a))
        },
        Mka = function(a) {
            if (a) {
                var b = a.getMap();
                if (Jka(a) !== b && b && b instanceof _.hg) {
                    var c = b.__gm;
                    c.overlayLayer ? a.__gmop = new Kka(b, a, c.overlayLayer) : c.i.then(function(d) {
                        d = d.Sc;
                        var e = new lt(b, d);
                        d.Nb(e);
                        c.overlayLayer = e;
                        Lka(a);
                        Mka(a)
                    })
                }
            }
        },
        Lka = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, _.Hl("Ox", "-p", b.g), b.g.unbindAll(), b.g.set("panes", null), b.g.set("projection", null), b.j.Gg(b), b.i && (b.i = !1, b.g.onRemove ? b.g.onRemove() : b.g.remove()))
            }
        },
        Jka = function(a) {
            return (a =
                a.__gmop) ? a.map : null
        },
        Kka = function(a, b, c) {
            this.map = a;
            this.g = b;
            this.j = c;
            this.i = !1;
            _.gh(this.map, "Ox");
            _.Gl("Ox", "-p", this.g);
            c.If(this)
        },
        Nka = function(a, b) {
            a.g.get("projection") != b && (a.g.bindTo("panes", a.map.__gm), a.g.set("projection", b))
        },
        lt = function(a, b) {
            this.o = a;
            this.j = b;
            this.g = null;
            this.i = []
        };
    _.C(jt, _.H);
    jt.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.bf(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.g : null))
    };
    var mt = {};
    _.C(Hka, _.H);
    mt.If = function(a) {
        if (a) {
            var b = a.getMap();
            (kt(a).Nr || null) !== b && (b && Ika(a, b), kt(a).Nr = b)
        }
    };
    mt.Gg = function(a) {
        var b = kt(a),
            c = b.Cb;
        c && c.unbindAll();
        (c = b.ls) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Ma && _.Rb(b.Ma, _.G.removeListener);
        b.Ma = null;
        b.Fm && (b.Fm.ob.je(), b.Fm = null);
        _.Hl("Ox", "-p", a);
        delete kt(a).Nr
    };
    var nt = {};
    Kka.prototype.draw = function() {
        this.i || (this.i = !0, this.g.onAdd && this.g.onAdd());
        this.g.draw && this.g.draw()
    };
    lt.prototype.dispose = function() {};
    lt.prototype.zd = function(a, b, c, d, e, f, g, h) {
        var k = this.g = this.g || new _.zn(this.o, this.j, function() {});
        k.zd(a, b, c, d, e, f, g, h);
        a = _.z(this.i);
        for (b = a.next(); !b.done; b = a.next()) b = b.value, Nka(b, k), b.draw()
    };
    lt.prototype.If = function(a) {
        this.i.push(a);
        this.g && Nka(a, this.g);
        this.j.refresh()
    };
    lt.prototype.Gg = function(a) {
        _.Zb(this.i, a)
    };
    nt.If = Mka;
    nt.Gg = Lka;
    _.Qf("overlay", {
        Zp: function(a) {
            if (a) {
                (0, mt.Gg)(a);
                (0, nt.Gg)(a);
                var b = a.getMap();
                b && (b instanceof _.hg ? (0, nt.If)(a) : (0, mt.If)(a))
            }
        },
        preventMapHitsFrom: function(a) {
            _.fo(a, {
                onClick: function(b) {
                    return _.Kn(b.event)
                },
                Sd: function(b) {
                    return _.Hn(b)
                },
                mi: function(b) {
                    return _.In(b)
                },
                Be: function(b) {
                    return _.In(b)
                },
                be: function(b) {
                    return _.Jn(b)
                }
            }).fj(!0)
        },
        preventMapHitsAndGesturesFrom: function(a) {
            a.addEventListener("click", _.Uf);
            a.addEventListener("contextmenu", _.Uf);
            a.addEventListener("dblclick", _.Uf);
            a.addEventListener("mousedown",
                _.Uf);
            a.addEventListener("mousemove", _.Uf);
            a.addEventListener("MSPointerDown", _.Uf);
            a.addEventListener("pointerdown", _.Uf);
            a.addEventListener("touchstart", _.Uf);
            a.addEventListener("wheel", _.Uf)
        }
    });
});