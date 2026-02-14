(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/highcharts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// @ts-nocheck — Highcharts ES module masters lack type declarations
// Import both from es-modules path so they share the same Globals instance
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$highcharts$2f$es$2d$modules$2f$masters$2f$highstock$2e$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/highcharts/es-modules/masters/highstock.src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$highcharts$2f$es$2d$modules$2f$masters$2f$highcharts$2d$more$2e$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/highcharts/es-modules/masters/highcharts-more.src.js [app-client] (ecmascript)");
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$highcharts$2f$es$2d$modules$2f$masters$2f$highstock$2e$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].setOptions({
    chart: {
        backgroundColor: "transparent"
    },
    title: {
        text: undefined
    },
    credits: {
        enabled: false
    },
    legend: {
        enabled: false
    },
    xAxis: {
        gridLineColor: "rgba(255,255,255,0.06)",
        lineColor: "rgba(255,255,255,0.12)",
        labels: {
            style: {
                color: "#9ca3af"
            }
        }
    },
    yAxis: {
        gridLineColor: "rgba(255,255,255,0.06)",
        labels: {
            style: {
                color: "#9ca3af"
            }
        },
        title: {
            text: undefined
        }
    },
    tooltip: {
        backgroundColor: "rgba(17,24,39,0.92)",
        borderColor: "rgba(255,255,255,0.12)",
        style: {
            color: "#e5e7eb"
        }
    },
    navigator: {
        outlineColor: "rgba(255,255,255,0.18)",
        maskFill: "rgba(255,255,255,0.05)",
        series: {
            color: "#6366f1"
        },
        xAxis: {
            labels: {
                style: {
                    color: "#9ca3af"
                }
            }
        }
    },
    rangeSelector: {
        buttonTheme: {
            fill: "rgba(255,255,255,0.06)",
            stroke: "rgba(255,255,255,0.12)",
            style: {
                color: "#9ca3af"
            },
            states: {
                hover: {
                    fill: "rgba(255,255,255,0.12)"
                },
                select: {
                    fill: "rgba(99,102,241,0.3)",
                    style: {
                        color: "#e5e7eb"
                    }
                }
            }
        },
        inputStyle: {
            color: "#e5e7eb",
            backgroundColor: "rgba(255,255,255,0.06)"
        },
        labelStyle: {
            color: "#9ca3af"
        }
    },
    scrollbar: {
        barBackgroundColor: "rgba(255,255,255,0.12)",
        trackBackgroundColor: "rgba(255,255,255,0.04)",
        buttonBackgroundColor: "rgba(255,255,255,0.06)"
    }
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$highcharts$2f$es$2d$modules$2f$masters$2f$highstock$2e$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ReportChartEmbed.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReportChartEmbed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$highcharts$2d$react$2d$official$2f$dist$2f$highcharts$2d$react$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/highcharts-react-official/dist/highcharts-react.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$highcharts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/highcharts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ReportChartEmbed({ price, events, decisions, scenario }) {
    _s();
    const lastX = price[price.length - 1][0];
    const eventFlags = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReportChartEmbed.useMemo[eventFlags]": ()=>events.map({
                "ReportChartEmbed.useMemo[eventFlags]": (e)=>({
                        x: e.x,
                        title: e.title,
                        text: e.desc
                    })
            }["ReportChartEmbed.useMemo[eventFlags]"])
    }["ReportChartEmbed.useMemo[eventFlags]"], [
        events
    ]);
    const { band } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReportChartEmbed.useMemo": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildScenarioBands"])(scenario, price)
    }["ReportChartEmbed.useMemo"], [
        scenario,
        price
    ]);
    const decisionFlags = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReportChartEmbed.useMemo[decisionFlags]": ()=>decisions.map({
                "ReportChartEmbed.useMemo[decisionFlags]": (d)=>({
                        x: d.x,
                        title: d.stance === "BUY" ? "B" : d.stance === "SELL" ? "S" : "H",
                        text: `<b>${d.title}</b><br/>${d.note}<br/><span style="opacity:.85">by ${d.who}</span>`
                    })
            }["ReportChartEmbed.useMemo[decisionFlags]"])
    }["ReportChartEmbed.useMemo[decisionFlags]"], [
        decisions
    ]);
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReportChartEmbed.useMemo[options]": ()=>({
                chart: {
                    height: 360
                },
                rangeSelector: {
                    enabled: false
                },
                navigator: {
                    enabled: false
                },
                scrollbar: {
                    enabled: false
                },
                tooltip: {
                    shared: true
                },
                xAxis: {
                    plotLines: [
                        {
                            value: lastX,
                            width: 2,
                            color: "rgba(255,255,255,0.35)",
                            dashStyle: "ShortDash",
                            label: {
                                text: "AS-OF",
                                style: {
                                    color: "rgba(229,231,235,0.85)"
                                },
                                y: 12
                            },
                            zIndex: 5
                        }
                    ]
                },
                series: [
                    {
                        id: "price",
                        name: "Price",
                        type: "line",
                        data: price
                    },
                    {
                        id: "eventsFlags",
                        type: "flags",
                        name: "Events",
                        onSeries: "price",
                        shape: "flag",
                        data: eventFlags,
                        allowOverlapX: true,
                        zIndex: 6,
                        y: -30
                    },
                    {
                        id: "scenarioBand",
                        type: "arearange",
                        name: "Scenario Band",
                        data: band,
                        color: "rgba(99,102,241,0.55)",
                        fillOpacity: 0.35
                    },
                    {
                        id: "decisions",
                        type: "flags",
                        onSeries: "price",
                        shape: "circlepin",
                        name: "Decisions",
                        data: decisionFlags,
                        allowOverlapX: true,
                        zIndex: 5,
                        y: -65
                    }
                ]
            })
    }["ReportChartEmbed.useMemo[options]"], [
        price,
        eventFlags,
        band,
        decisionFlags,
        lastX
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$highcharts$2d$react$2d$official$2f$dist$2f$highcharts$2d$react$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        highcharts: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$highcharts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        constructorType: "stockChart",
        options: options,
        containerProps: {
            style: {
                width: "100%"
            }
        }
    }, void 0, false, {
        fileName: "[project]/src/components/ReportChartEmbed.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
_s(ReportChartEmbed, "oF41qrQ6FUPRwpBBDNeOnMKHA3c=");
_c = ReportChartEmbed;
var _c;
__turbopack_context__.k.register(_c, "ReportChartEmbed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ReportChartEmbed.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/ReportChartEmbed.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_e2bd1fe1._.js.map