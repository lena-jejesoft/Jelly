(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ComposeWorkspace.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ComposeWorkspace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Toolbar.tsx [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const ReportChartEmbed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/ReportChartEmbed.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/ReportChartEmbed.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = ReportChartEmbed;
function ComposeWorkspace({ price, events, decisions, scenario, draft, onDraftChange }) {
    _s();
    const updateBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ComposeWorkspace.useCallback[updateBlock]": (id, patch)=>{
            onDraftChange({
                ...draft,
                lastModified: Date.now(),
                blocks: draft.blocks.map({
                    "ComposeWorkspace.useCallback[updateBlock]": (b)=>b.id === id ? {
                            ...b,
                            ...patch
                        } : b
                }["ComposeWorkspace.useCallback[updateBlock]"])
            });
        }
    }["ComposeWorkspace.useCallback[updateBlock]"], [
        draft,
        onDraftChange
    ]);
    const addFreetextBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ComposeWorkspace.useCallback[addFreetextBlock]": ()=>{
            const maxOrder = Math.max(...draft.blocks.map({
                "ComposeWorkspace.useCallback[addFreetextBlock].maxOrder": (b)=>b.order
            }["ComposeWorkspace.useCallback[addFreetextBlock].maxOrder"]), 0);
            const newBlock = {
                id: "blk_free_" + Date.now(),
                type: "freetext",
                content: "",
                visible: true,
                order: maxOrder + 1
            };
            onDraftChange({
                ...draft,
                lastModified: Date.now(),
                blocks: [
                    ...draft.blocks,
                    newBlock
                ]
            });
        }
    }["ComposeWorkspace.useCallback[addFreetextBlock]"], [
        draft,
        onDraftChange
    ]);
    const sortedBlocks = [
        ...draft.blocks
    ].sort((a, b)=>a.order - b.order);
    /* ── KPI calculations ── */ const firstPrice = price[0]?.[1];
    const lastPrice = price[price.length - 1]?.[1];
    const returnPct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pct"])(firstPrice, lastPrice);
    const highImpactCount = events.filter((e)=>e.impact >= 3).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full overflow-y-auto px-8 py-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[900px] mx-auto space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-gray-400 text-xs font-medium uppercase tracking-wide",
                            children: "Report Composer"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ComposeWorkspace.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: addFreetextBlock,
                            children: "+ 텍스트 블록 추가"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ComposeWorkspace.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ComposeWorkspace.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                sortedBlocks.map((block)=>{
                    if (!block.visible) return null;
                    switch(block.type){
                        case "title":
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "report-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-gray-600 uppercase",
                                                children: "Title"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                lineNumber: 94,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VisibilityToggle, {
                                                visible: block.visible,
                                                onToggle: (v)=>updateBlock(block.id, {
                                                        visible: v
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                lineNumber: 97,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                        lineNumber: 93,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: block.content,
                                        onChange: (e)=>updateBlock(block.id, {
                                                content: e.target.value
                                            }),
                                        className: "w-full bg-transparent border-none outline-none text-gray-100 text-2xl font-bold placeholder-gray-600",
                                        placeholder: "리포트 제목을 입력하세요"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                        lineNumber: 102,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, block.id, true, {
                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                lineNumber: 92,
                                columnNumber: 17
                            }, this);
                        case "summary":
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "report-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-gray-600 uppercase",
                                                children: "Summary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                lineNumber: 118,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VisibilityToggle, {
                                                visible: block.visible,
                                                onToggle: (v)=>updateBlock(block.id, {
                                                        visible: v
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                lineNumber: 121,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                        lineNumber: 117,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: block.content,
                                        onChange: (e)=>updateBlock(block.id, {
                                                content: e.target.value
                                            }),
                                        rows: 6,
                                        className: "report-textarea",
                                        placeholder: "분석 요약을 작성하세요"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                        lineNumber: 126,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, block.id, true, {
                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                lineNumber: 116,
                                columnNumber: 17
                            }, this);
                        case "kpi":
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "report-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-gray-600 uppercase",
                                                children: "KPI Summary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                lineNumber: 142,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VisibilityToggle, {
                                                visible: block.visible,
                                                onToggle: (v)=>updateBlock(block.id, {
                                                        visible: v
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                lineNumber: 145,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                        lineNumber: 141,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-5 gap-3 mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                                                label: "기간 수익률",
                                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmtPct"])(returnPct)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                lineNumber: 151,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                                                label: "이벤트 수",
                                                value: String(events.length)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                lineNumber: 152,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                                                label: "고임팩트",
                                                value: String(highImpactCount)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                lineNumber: 153,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                                                label: "판단 건수",
                                                value: String(decisions.length)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                lineNumber: 157,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                                                label: "시나리오",
                                                value: scenario
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                lineNumber: 158,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                        lineNumber: 150,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: block.content,
                                        onChange: (e)=>updateBlock(block.id, {
                                                content: e.target.value
                                            }),
                                        rows: 2,
                                        className: "report-textarea",
                                        placeholder: "KPI에 대한 코멘트 (선택)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                        lineNumber: 160,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, block.id, true, {
                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                lineNumber: 140,
                                columnNumber: 17
                            }, this);
                        case "chart":
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "report-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-gray-600 uppercase",
                                                children: "Chart"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                lineNumber: 176,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VisibilityToggle, {
                                                visible: block.visible,
                                                onToggle: (v)=>updateBlock(block.id, {
                                                        visible: v
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                lineNumber: 179,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                        lineNumber: 175,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReportChartEmbed, {
                                        price: price,
                                        events: events,
                                        decisions: decisions,
                                        scenario: scenario
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                        lineNumber: 184,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: block.content,
                                        onChange: (e)=>updateBlock(block.id, {
                                                content: e.target.value
                                            }),
                                        rows: 2,
                                        className: "report-textarea mt-3",
                                        placeholder: "차트 캡션 (선택)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                        lineNumber: 190,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, block.id, true, {
                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                lineNumber: 174,
                                columnNumber: 17
                            }, this);
                        case "events":
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "report-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-gray-600 uppercase",
                                                children: "Events"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                lineNumber: 206,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VisibilityToggle, {
                                                visible: block.visible,
                                                onToggle: (v)=>updateBlock(block.id, {
                                                        visible: v
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                lineNumber: 209,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                        lineNumber: 205,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-x-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "text-gray-500 text-xs border-b border-gray-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "text-left py-1.5 pr-3",
                                                                children: "날짜"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                                lineNumber: 218,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "text-left py-1.5 pr-3",
                                                                children: "타입"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                                lineNumber: 219,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "text-left py-1.5 pr-3",
                                                                children: "제목"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                                lineNumber: 220,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "text-left py-1.5",
                                                                children: "강도"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                                lineNumber: 221,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: events.map((evt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "border-b border-gray-800/50 text-gray-300",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-1.5 pr-3 text-xs text-gray-400",
                                                                    children: new Date(evt.x).toLocaleDateString()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                                    lineNumber: 230,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-1.5 pr-3 text-xs",
                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENT_TYPES"][evt.type]?.name ?? evt.type
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                                    lineNumber: 233,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-1.5 pr-3",
                                                                    children: evt.text
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                                    lineNumber: 236,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-1.5",
                                                                    children: "★".repeat(evt.impact)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                                    lineNumber: 237,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, evt.id, true, {
                                                            fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                            lineNumber: 226,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                            lineNumber: 215,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                        lineNumber: 214,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: block.content,
                                        onChange: (e)=>updateBlock(block.id, {
                                                content: e.target.value
                                            }),
                                        rows: 2,
                                        className: "report-textarea mt-3",
                                        placeholder: "이벤트에 대한 코멘트 (선택)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                        lineNumber: 245,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, block.id, true, {
                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                lineNumber: 204,
                                columnNumber: 17
                            }, this);
                        case "decisions":
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "report-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-gray-600 uppercase",
                                                children: "Decisions"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                lineNumber: 261,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VisibilityToggle, {
                                                visible: block.visible,
                                                onToggle: (v)=>updateBlock(block.id, {
                                                        visible: v
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                lineNumber: 264,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                        lineNumber: 260,
                                        columnNumber: 19
                                    }, this),
                                    decisions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 text-sm",
                                        children: "판단 로그가 없습니다."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                        lineNumber: 270,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-x-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "text-gray-500 text-xs border-b border-gray-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "text-left py-1.5 pr-3",
                                                                children: "날짜"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                                lineNumber: 278,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "text-left py-1.5 pr-3",
                                                                children: "판단"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                                lineNumber: 279,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "text-left py-1.5 pr-3",
                                                                children: "메모"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                                lineNumber: 280,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "text-left py-1.5",
                                                                children: "작성자"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                                lineNumber: 281,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                        lineNumber: 277,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: decisions.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "border-b border-gray-800/50 text-gray-300",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-1.5 pr-3 text-xs text-gray-400",
                                                                    children: new Date(d.x).toLocaleDateString()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                                    lineNumber: 290,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-1.5 pr-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: d.stance === "BUY" ? "text-green-400" : d.stance === "SELL" ? "text-red-400" : "text-yellow-400",
                                                                        children: d.stance
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                                        lineNumber: 294,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                                    lineNumber: 293,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-1.5 pr-3",
                                                                    children: d.note
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                                    lineNumber: 306,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-1.5 text-xs text-gray-400",
                                                                    children: d.who
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                                    lineNumber: 307,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                            lineNumber: 286,
                                                            columnNumber: 29
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                            lineNumber: 275,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                        lineNumber: 274,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: block.content,
                                        onChange: (e)=>updateBlock(block.id, {
                                                content: e.target.value
                                            }),
                                        rows: 2,
                                        className: "report-textarea mt-3",
                                        placeholder: "판단에 대한 코멘트 (선택)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                        lineNumber: 316,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, block.id, true, {
                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                lineNumber: 259,
                                columnNumber: 17
                            }, this);
                        case "freetext":
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "report-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-gray-600 uppercase",
                                                children: "Free Text"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                lineNumber: 332,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VisibilityToggle, {
                                                visible: block.visible,
                                                onToggle: (v)=>updateBlock(block.id, {
                                                        visible: v
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                                lineNumber: 335,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                        lineNumber: 331,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: block.content,
                                        onChange: (e)=>updateBlock(block.id, {
                                                content: e.target.value
                                            }),
                                        rows: 4,
                                        className: "report-textarea",
                                        placeholder: "자유 텍스트를 입력하세요"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                        lineNumber: 340,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, block.id, true, {
                                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                                lineNumber: 330,
                                columnNumber: 17
                            }, this);
                        default:
                            return null;
                    }
                })
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ComposeWorkspace.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ComposeWorkspace.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(ComposeWorkspace, "aHoVxAtF+tcbY73iM5IukuV8N1s=");
_c1 = ComposeWorkspace;
/* ── Sub-components ── */ function KpiCard({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#0f172a] border border-gray-800 rounded-lg px-3 py-2.5 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[10px] text-gray-500 mb-1",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                lineNumber: 366,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm font-semibold text-gray-200",
                children: value
            }, void 0, false, {
                fileName: "[project]/src/components/ComposeWorkspace.tsx",
                lineNumber: 367,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ComposeWorkspace.tsx",
        lineNumber: 365,
        columnNumber: 5
    }, this);
}
_c2 = KpiCard;
function VisibilityToggle({ visible, onToggle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>onToggle(!visible),
        className: "text-[10px] text-gray-600 hover:text-gray-400 transition-colors",
        title: visible ? "블록 숨기기" : "블록 보이기",
        children: visible ? "hide" : "show"
    }, void 0, false, {
        fileName: "[project]/src/components/ComposeWorkspace.tsx",
        lineNumber: 380,
        columnNumber: 5
    }, this);
}
_c3 = VisibilityToggle;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ReportChartEmbed");
__turbopack_context__.k.register(_c1, "ComposeWorkspace");
__turbopack_context__.k.register(_c2, "KpiCard");
__turbopack_context__.k.register(_c3, "VisibilityToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ComposeWorkspace.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/ComposeWorkspace.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_ComposeWorkspace_tsx_6f1437fe._.js.map