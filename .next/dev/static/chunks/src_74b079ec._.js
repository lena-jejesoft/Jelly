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
"[project]/src/components/PriceEventChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PriceEventChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$highcharts$2d$react$2d$official$2f$dist$2f$highcharts$2d$react$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/highcharts-react-official/dist/highcharts-react.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$highcharts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/highcharts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Toolbar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function PriceEventChart({ price, events, filterType, filterImpact, onFilterTypeChange, onFilterImpactChange, onEventClick }) {
    _s();
    const chartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const filteredFlags = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PriceEventChart.useMemo[filteredFlags]": ()=>{
            return events.filter({
                "PriceEventChart.useMemo[filteredFlags]": (e)=>{
                    const okType = filterType === "ALL" || e.type === filterType;
                    const okImpact = e.impact >= filterImpact;
                    return okType && okImpact;
                }
            }["PriceEventChart.useMemo[filteredFlags]"]).map({
                "PriceEventChart.useMemo[filteredFlags]": (e)=>({
                        x: e.x,
                        title: e.title,
                        text: e.desc
                    })
            }["PriceEventChart.useMemo[filteredFlags]"]);
        }
    }["PriceEventChart.useMemo[filteredFlags]"], [
        events,
        filterType,
        filterImpact
    ]);
    const handleFlagClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PriceEventChart.useCallback[handleFlagClick]": function() {
            const pt = this;
            const found = events.find({
                "PriceEventChart.useCallback[handleFlagClick]": (e)=>e.x === pt.x && e.title === pt.options.title
            }["PriceEventChart.useCallback[handleFlagClick]"]) || events.find({
                "PriceEventChart.useCallback[handleFlagClick]": (e)=>e.x === pt.x
            }["PriceEventChart.useCallback[handleFlagClick]"]);
            if (found) onEventClick(found);
        }
    }["PriceEventChart.useCallback[handleFlagClick]"], [
        events,
        onEventClick
    ]);
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PriceEventChart.useMemo[options]": ()=>({
                rangeSelector: {
                    selected: 2
                },
                tooltip: {
                    shared: true
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
                        data: filteredFlags,
                        point: {
                            events: {
                                click: handleFlagClick
                            }
                        }
                    }
                ]
            })
    }["PriceEventChart.useMemo[options]"], [
        price,
        filteredFlags,
        handleFlagClick
    ]);
    const resetZoom = ()=>{
        const chart = chartRef.current?.chart;
        if (chart) chart.xAxis[0].setExtremes(undefined, undefined);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-sm font-bold my-1 mb-2.5",
                children: "1) Price + Event Flags + 카테고리 필터"
            }, void 0, false, {
                fileName: "[project]/src/components/PriceEventChart.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toolbar"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chip"], {
                        children: "이벤트 표시:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PriceEventChart.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                        value: filterType,
                        onChange: onFilterTypeChange,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "ALL",
                                children: "전체"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PriceEventChart.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "EARNINGS",
                                children: "실적"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PriceEventChart.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "FUNDING",
                                children: "증자/자금조달"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PriceEventChart.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "CONTRACT",
                                children: "수주/계약"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PriceEventChart.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "REGULATION",
                                children: "규제/정책"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PriceEventChart.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "INSIDER",
                                children: "오너/지배구조"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PriceEventChart.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PriceEventChart.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chip"], {
                        children: "강도(Impact) 최소:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PriceEventChart.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                        value: String(filterImpact),
                        onChange: (v)=>onFilterImpactChange(Number(v)),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "0",
                                children: "0+"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PriceEventChart.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "1",
                                children: "1+"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PriceEventChart.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "2",
                                children: "2+"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PriceEventChart.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "3",
                                children: "3+"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PriceEventChart.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PriceEventChart.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: resetZoom,
                        children: "줌 리셋"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PriceEventChart.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PriceEventChart.tsx",
                lineNumber: 90,
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
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/PriceEventChart.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PriceEventChart.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PriceEventChart.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s(PriceEventChart, "t2V9fc455kfYM9bKSvzdO3qYBis=");
_c = PriceEventChart;
var _c;
__turbopack_context__.k.register(_c, "PriceEventChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PriceEventChart.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/PriceEventChart.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_74b079ec._.js.map