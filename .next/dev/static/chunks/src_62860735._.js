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
"[project]/src/components/Toolbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "Chip",
    ()=>Chip,
    "Select",
    ()=>Select,
    "Toolbar",
    ()=>Toolbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Toolbar({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-2 flex-wrap items-center mb-2.5",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Toolbar.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Toolbar;
function Chip({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "bg-[#0b1220] border border-gray-800 rounded-full px-2.5 py-1.5 text-xs text-gray-200",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Toolbar.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c1 = Chip;
function Select({ value, onChange, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
        value: value,
        onChange: (e)=>onChange(e.target.value),
        className: "bg-[#0f172a] text-gray-200 border border-gray-800 rounded-[10px] px-2.5 py-2 text-xs outline-none",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Toolbar.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c2 = Select;
function Button({ onClick, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "bg-[#0f172a] text-gray-200 border border-gray-800 rounded-[10px] px-2.5 py-2 text-xs cursor-pointer hover:brightness-110",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Toolbar.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_c3 = Button;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Toolbar");
__turbopack_context__.k.register(_c1, "Chip");
__turbopack_context__.k.register(_c2, "Select");
__turbopack_context__.k.register(_c3, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ScenarioChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScenarioChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$highcharts$2d$react$2d$official$2f$dist$2f$highcharts$2d$react$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/highcharts-react-official/dist/highcharts-react.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$highcharts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/highcharts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Toolbar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ScenarioChart({ price, events, scenario, decisions, onScenarioChange, onAddDecision }) {
    _s();
    const chartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastX = price[price.length - 1][0];
    const { band } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ScenarioChart.useMemo": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildScenarioBands"])(scenario, price)
    }["ScenarioChart.useMemo"], [
        scenario,
        price
    ]);
    const eventFlags = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ScenarioChart.useMemo[eventFlags]": ()=>events.map({
                "ScenarioChart.useMemo[eventFlags]": (e)=>({
                        x: e.x,
                        title: e.title,
                        text: e.desc
                    })
            }["ScenarioChart.useMemo[eventFlags]"])
    }["ScenarioChart.useMemo[eventFlags]"], [
        events
    ]);
    const decisionFlags = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ScenarioChart.useMemo[decisionFlags]": ()=>decisions.map({
                "ScenarioChart.useMemo[decisionFlags]": (d)=>({
                        x: d.x,
                        title: d.stance === "BUY" ? "B" : d.stance === "SELL" ? "S" : "H",
                        text: `<b>${d.title}</b><br/>${d.note}<br/><span style="opacity:.85">by ${d.who} • ${d.stance}</span>`
                    })
            }["ScenarioChart.useMemo[decisionFlags]"])
    }["ScenarioChart.useMemo[decisionFlags]"], [
        decisions
    ]);
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ScenarioChart.useMemo[options]": ()=>({
                rangeSelector: {
                    selected: 2
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
                        id: "p3",
                        type: "line",
                        name: "Price",
                        data: price
                    },
                    {
                        id: "events3",
                        type: "flags",
                        onSeries: "p3",
                        shape: "flag",
                        data: eventFlags
                    },
                    {
                        id: "scenarioBand",
                        type: "arearange",
                        name: "Scenario Band",
                        data: band,
                        color: "rgba(99,102,241,0.3)",
                        fillOpacity: 0.2
                    },
                    {
                        id: "decisions",
                        type: "flags",
                        onSeries: "p3",
                        shape: "circlepin",
                        data: decisionFlags
                    }
                ]
            })
    }["ScenarioChart.useMemo[options]"], [
        price,
        eventFlags,
        band,
        decisionFlags,
        lastX
    ]);
    const jumpToNow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScenarioChart.useCallback[jumpToNow]": ()=>{
            const chart = chartRef.current?.chart;
            if (chart) {
                chart.xAxis[0].setExtremes(lastX - 60 * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAY"], lastX + 120 * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAY"]);
            }
        }
    }["ScenarioChart.useCallback[jumpToNow]"], [
        lastX
    ]);
    const resetZoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScenarioChart.useCallback[resetZoom]": ()=>{
            const chart = chartRef.current?.chart;
            if (chart) chart.xAxis[0].setExtremes(undefined, undefined);
        }
    }["ScenarioChart.useCallback[resetZoom]"], []);
    // After chart renders, set initial zoom to scenario view
    const afterChartCreated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScenarioChart.useCallback[afterChartCreated]": (chart)=>{
            chart.xAxis[0].setExtremes(lastX - 60 * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAY"], lastX + 120 * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAY"]);
        }
    }["ScenarioChart.useCallback[afterChartCreated]"], [
        lastX
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card mt-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-sm font-bold my-1 mb-2.5",
                children: [
                    "3)",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-bold",
                        children: "미래 시점"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScenarioChart.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    " 시나리오 밴드 + 팀 판단(Decision) 히스토리 (메모 입력)"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ScenarioChart.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toolbar"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chip"], {
                        children: "시나리오:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScenarioChart.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                        value: scenario,
                        onChange: (v)=>onScenarioChange(v),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "BASE",
                                children: "BASE (중립)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScenarioChart.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "BULL",
                                children: "BULL (상방)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScenarioChart.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "BEAR",
                                children: "BEAR (하방)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScenarioChart.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ScenarioChart.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: jumpToNow,
                        children: "현재/미래 보기"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScenarioChart.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: onAddDecision,
                        children: "판단 로그 추가 (메모)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScenarioChart.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: resetZoom,
                        children: "줌 리셋"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScenarioChart.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ScenarioChart.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[420px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$highcharts$2d$react$2d$official$2f$dist$2f$highcharts$2d$react$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    highcharts: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$highcharts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                    constructorType: "stockChart",
                    options: options,
                    ref: chartRef,
                    containerProps: {
                        style: {
                            height: "100%"
                        }
                    },
                    callback: afterChartCreated
                }, void 0, false, {
                    fileName: "[project]/src/components/ScenarioChart.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ScenarioChart.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500 text-xs mt-2 leading-relaxed",
                children: '"판단 로그 추가"를 누르면 BUY/HOLD/SELL + 메모를 입력하고, 차트에 팀 판단 마커가 생성됩니다.'
            }, void 0, false, {
                fileName: "[project]/src/components/ScenarioChart.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ScenarioChart.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_s(ScenarioChart, "KN5fyc1BS46Abdzp1RhDIzbCcuc=");
_c = ScenarioChart;
var _c;
__turbopack_context__.k.register(_c, "ScenarioChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ScenarioChart.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/ScenarioChart.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_62860735._.js.map