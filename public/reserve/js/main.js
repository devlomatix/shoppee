!(function (a) {
    "use strict";
    function t() {
        a(".slimscroll").slimscroll({ height: "auto", position: "right", size: "7px", color: "#a2b1d021", opacity: 1, wheelStep: 5, touchScrollStep: 50, alwaysVisible: !1 });
    }
    function e() {
        a(document).ready(function () {
            a("#AllCompo")
                .autocomplete({ source: ["Forms", "Tables", "Charts", "Icones", "Maps"], minLength: 0, scroll: !0 })
                .focus(function () {
                    a(this).autocomplete("search", "");
                });
        });
    }
    t(),
        a(".metismenu").metisMenu(),
        a(window).resize(function () {}),
        a(".button-menu-mobile").on("click", function (e) {
            e.preventDefault(), a("body").toggleClass("enlarge-menu"), t();
        }),
        a(".enlarge-menu .left-sidenav-menu > li").hover(
            function () {
                a(this).addClass("nav-hover");
            },
            function () {
                a(this).removeClass("nav-hover");
            }
        ),
        a(window).width() < 1025 ? a("body").addClass("enlarge-menu enlarge-menu-all") : a("body").removeClass("enlarge-menu enlarge-menu-all"),
        a.fn.tooltip && a('[data-toggle="tooltip"]').tooltip(),
        a('[data-toggle="tooltip-custom"]').tooltip({ template: '<div class="tooltip tooltip-custom" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>' }),
        a(".main-icon-menu .nav-link").on("click", function (e) {
            a("body").removeClass("enlarge-menu"), e.preventDefault(), a(this).addClass("active"), a(this).siblings().removeClass("active"), a(".main-menu-inner").addClass("active");
            var t = a(this).attr("href");
            a(t).addClass("active"), a(t).siblings().removeClass("active");
        }),
        a(".leftbar-tab-menu a, .left-sidenav a").each(function () {
            var e = window.location.href.split(/[?#]/)[0];
            if (this.href == e) {
                a(this).addClass("active"),
                    a(this).parent().addClass("active"),
                    a(this).parent().parent().addClass("in"),
                    a(this).parent().parent().addClass("mm-show"),
                    a(this).parent().parent().parent().addClass("mm-active"),
                    a(this).parent().parent().prev().addClass("active"),
                    a(this).parent().parent().parent().addClass("active"),
                    a(this).parent().parent().parent().parent().addClass("mm-show"),
                    a(this).parent().parent().parent().parent().parent().addClass("mm-active"),
                    a(this).parent().parent().parent().parent().parent().addClass("active");
                var t = a(this).closest(".main-icon-menu-pane").attr("id");
                a("a[href='#" + t + "']").addClass("active");
            }
        }),
        feather.replace(),
        e(),
        a(".navigation-menu a").each(function () {
            var e = window.location.href.split(/[?#]/)[0];
            console.log("pageUrl", e, this.href),
                this.href == e &&
                    (a(this).parent().addClass("active"),
                    a(this).parent().parent().parent().addClass("active"),
                    a(this).parent().parent().parent().parent().parent().addClass("active"),
                    a(this).parent().parent(".submenu-tab").addClass("show"));
        }),
        a(".navbar-toggle").on("click", function (e) {
            a(this).toggleClass("open"), a("#navigation").slideToggle(400);
        }),
        a(".navigation-menu>li").slice(-2).addClass("last-elements"),
        a('.navigation-menu li.main-nav-item a[href="#"]').on("click", function (e) {
            a(window).width() < 992 && (e.preventDefault(), a(this).parent("li").toggleClass("open").find(".submenu-tab:first").toggleClass("open"));
        }),
        a('.navigation-menu li.has-submenu a[href="#"]').on("click", function (e) {
            a(window).width() < 992 && (e.preventDefault(), a(this).parent("li").toggleClass("open").find(".submenu:first").toggleClass("open"));
        }),
        Waves.init(),
        a(".main-nav-item").on("click", function (e) {
            e.preventDefault(), a(this).addClass("active"), a(this).siblings().removeClass("active"), a(this).children(".submenu-tab").addClass("show");
            var t = a(this).attr("href");
            a(t).addClass("active"), a(t).siblings().removeClass("active");
        }),
        a(".submenu-tab li").on("click", function (e) {
            a(this).addClass("active"), a(this).siblings().removeClass("active"), (window.location.href = e.target.href);
        }),
        new ApexCharts(document.querySelector("#rightbar_chart"), {
            chart: { height: 250, type: "radialBar", dropShadow: { enabled: !0, top: 10, left: 0, bottom: 0, right: 0, blur: 2, color: "#45404a2e", opacity: 0.35 } },
            colors: ["#6d81f5", "#fd3c97", "#1eca7b"],
            plotOptions: {
                radialBar: {
                    track: { background: "#b9c1d4", opacity: 0.5 },
                    dataLabels: {
                        name: { fontSize: "16px" },
                        value: { fontSize: "13px", color: "#0f4069" },
                        total: {
                            show: !0,
                            label: "Total Tasks",
                            color: "#0f4069",
                            formatter: function (e) {
                                return 249;
                            },
                        },
                    },
                },
            },
            series: [44, 55, 67],
            labels: ["Development", "Backup Create", "Admin Design"],
        }).render(),
        a(window).scroll(function () {
            50 <= a(window).scrollTop() ? a(".sticky-tab-text").addClass("nav-text-visible") : a(".sticky-tab-text").removeClass("nav-text-visible");
        });
})(jQuery);
