import{l as C,_ as D}from"./_plugin-vue_export-helper-8iaa2MZM.js";import{d as A,p as w,o as B,a as E,r,b as y,w as a,e as i,f as o,g as d,u as l,F,h as f,i as g,j as _}from"./preload-helper-AmL5lASo.js";import"./zh_CN-02U-KPKI.js";const k=""+new URL("baseline-planning-DYPKcJ_N.png",import.meta.url).href,P=""+new URL("baseline-rules-CVe0sCAq.png",import.meta.url).href,S=""+new URL("color-combination-DHjlEbvn.jpg",import.meta.url).href,z=""+new URL("color-fhi-91JhEQoM.jpg",import.meta.url).href,R=""+new URL("color-hex-CfL4_KYt.jpg",import.meta.url).href,q=""+new URL("forbidden-dcl0lhAK.jpg",import.meta.url).href,I=""+new URL("planning-color-Cwe2pmo0.jpg",import.meta.url).href,M=""+new URL("planning-top-B_iruffa.jpg",import.meta.url).href,T=`<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI 产品设计｜主色选择原型 v1.2</title>
  <meta name="description" content="AI 产品设计交互原型在线预览">
  <meta property="og:type" content="website">
  <meta property="og:title" content="AI 产品设计｜主色选择原型 v1.2">
  <meta property="og:description" content="AI 产品设计交互原型在线预览">
  <meta property="og:image" content="https://zhu-huiwen.github.io/ai-product-design-v12/og.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="AI 产品设计｜主色选择原型 v1.2">
  <meta name="twitter:description" content="AI 产品设计交互原型在线预览">
  <meta name="twitter:image" content="https://zhu-huiwen.github.io/ai-product-design-v12/og.png">
  <link rel="stylesheet" href="https://unpkg.com/element-ui@2.15.14/lib/theme-chalk/index.css">
  <style>
    :root {
      --sw-sidebar-width: 230px;
      --sw-topbar-height: 52px;
      --sw-tabs-height: 35px;
      --sw-workspace-padding: 10px;
      --sw-workspace-bg: #EFF1F7;
      --sw-sidebar-bg: #425DCC;
      --sw-submenu-bg: #364CA4;
      --sw-active-bg: #566FD7;
      --sw-primary: #0064FF;
      --sw-table-head: #F2F6FC;
      --sw-border: #E5E5E5;
      --sw-text: #666666;
      --sw-muted: #909399;
    }
    * { box-sizing: border-box; }
    html, body { margin: 0; min-width: 1100px; min-height: 100%; color: var(--sw-text); background: var(--sw-workspace-bg); }
    html, body, button, input, select, textarea { font-family: "PingFang SC", "Microsoft YaHei", sans-serif; }
    body, button, input, select, textarea { font-size: 14px; }
    .prototype-scale { width: 142.857142%; min-height: 142.857142vh; transform: scale(.7); transform-origin: left top; }
    .sw-shell { display: flex; min-height: 142.857142vh; background: var(--sw-workspace-bg); }
    .sw-sidebar { display: flex; flex: 0 0 var(--sw-sidebar-width); width: var(--sw-sidebar-width); min-height: 142.857142vh; flex-direction: column; color: #fff; background: var(--sw-sidebar-bg); }
    .sw-brand { display: flex; height: var(--sw-topbar-height); align-items: center; padding: 0 18px; border-bottom: 1px solid rgba(255,255,255,.12); font-size: 18px; }
    .sw-brand__mark { display: inline-flex; width: 32px; height: 32px; margin-right: 10px; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,.55); border-radius: 50%; font-size: 12px; }
    .sw-menu { flex: 1; border-right: 0 !important; background: transparent !important; }
    .sw-menu .el-menu-item, .sw-menu .el-submenu__title { height: 42px; line-height: 42px; color: rgba(255,255,255,.92) !important; }
    .sw-menu .el-menu { background: var(--sw-submenu-bg) !important; }
    .sw-menu .el-menu-item:hover, .sw-menu .el-submenu__title:hover { background: rgba(54,76,164,.76) !important; }
    .sw-menu .el-menu-item.is-active { margin: 2px 10px; height: 38px; border-radius: 6px; color: #fff !important; background: var(--sw-active-bg) !important; line-height: 38px; }
    .sw-menu i { color: rgba(255,255,255,.9); }
    .sw-sidebar__footer { padding: 14px 18px; border-top: 1px solid rgba(255,255,255,.12); color: rgba(255,255,255,.82); font-size: 12px; line-height: 20px; }
    .sw-main { min-width: 0; flex: 1; }
    .sw-top-toolbar { display: flex; height: var(--sw-topbar-height); align-items: center; justify-content: space-between; padding: 0 18px; border-bottom: 1px solid #ECEEF3; background: #fff; }
    .sw-top-title { display: flex; align-items: center; gap: 10px; color: #303133; font-weight: 600; }
    .sw-toolbar-actions { display: flex; align-items: center; gap: 14px; }
    .sw-version { padding: 3px 8px; border-radius: 3px; color: #8B8F99; background: #F3F5F9; font-size: 12px; }
    .sw-tab-navigation { display: flex; height: var(--sw-tabs-height); align-items: stretch; border-bottom: 1px solid #E8EAF0; background: #F7F8FB; }
    .sw-tab { min-width: 112px; padding: 0 18px; border: 0; border-right: 1px solid #E5E7EC; color: #666; background: #F7F8FB; cursor: pointer; }
    .sw-tab.is-active { color: var(--sw-primary); background: #fff; }
    .sw-workspace { min-height: calc(142.857142vh - var(--sw-topbar-height) - var(--sw-tabs-height)); padding: var(--sw-workspace-padding); background: var(--sw-workspace-bg); }
    .sw-business-card { min-height: 760px; padding: 18px; border-radius: 8px; background: #fff; box-shadow: 0 2px 6px rgba(52,52,52,.03); }
    .prototype-meta { display: flex; margin-bottom: 12px; align-items: center; justify-content: space-between; gap: 14px; color: var(--sw-muted); font-size: 12px; }
    .prototype-title { margin: 0; color: #303133; font-size: 19px; font-weight: 600; }
    .meta-right { text-align: right; line-height: 20px; }
    .task-guide { margin-bottom: 12px; }
    .task-guide__line { margin: 5px 0 0; line-height: 21px; }
    .task-steps { margin-bottom: 14px; }
    .result-strip { margin: 12px 0; }
    .v11-summary { display: flex; margin-bottom: 14px; gap: 10px; flex-wrap: wrap; }
    .v11-summary .el-tag { height: 28px; line-height: 26px; }
    .planning-layout { display: grid; grid-template-columns: minmax(560px, .95fr) minmax(620px, 1.05fr); gap: 14px; }
    .panel { padding: 16px; border: 1px solid #ECEEF3; border-radius: 8px; background: #fff; }
    .panel-title { display: flex; margin: 0 0 14px; align-items: center; justify-content: space-between; color: #303133; font-size: 16px; font-weight: 600; }
    .panel-subtitle { color: var(--sw-muted); font-size: 12px; font-weight: 400; }
    .field-description { margin-top: 4px; color: var(--sw-muted); font-size: 12px; line-height: 18px; }
    .main-color-card__selection, .color-result-strip, .color-detail-row { display:flex; align-items:center; gap:12px; padding:12px; border:1px solid #e4e9f2; border-radius:10px; background:#fafbfe; }
    .main-color-card__selection { margin:12px 0; }
    .main-color-card__swatch, .color-result-strip__swatch, .color-detail-row__swatch { width:42px; height:42px; flex:none; border-radius:8px; border:1px solid rgba(0,0,0,.12); box-shadow:inset 0 0 0 1px rgba(255,255,255,.35); }
    .main-color-card__copy { display:flex; flex:1; min-width:0; flex-direction:column; gap:3px; }
    .main-color-card__copy strong { color:#303133; font-size:15px; }
    .main-color-card__copy small, .color-result-strip small { color:#909399; font-size:12px; }
    .main-color-card__actions { display:flex; gap:8px; flex-wrap:wrap; }
    .reference-form-card.main-color-card { padding:16px 20px; }
    .main-color-card__header { display:flex; align-items:flex-start; justify-content:space-between; gap:16px; margin-bottom:10px; }
    .main-color-card__header .reference-form-card__title { margin:0; }
    .main-color-card__header-side { display:flex; flex-direction:column; align-items:flex-end; gap:4px; }
    .main-color-card__subtitle { margin:0; text-align:right; }
    .main-color-card__header .main-color-card__actions { align-items:center; flex:none; gap:2px; }
    .main-color-card__header .el-button { margin:0; padding:7px 10px; border-radius:7px; color:#39485a; font-size:12px; }
    .main-color-card__header .el-button--default { border-color:#dde3ea; background:#fff; }
    .main-color-card__header .el-button--default:hover { border-color:#aebac8; background:#f7f9fb; }
    .main-color-card__header .el-button--text { color:#8792a0; }
    .main-color-card__header .el-button--text:hover { color:#495a6d; }
    .palette-preview { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:8px; }
    .palette-preview__item { position:relative; display:flex; align-items:center; gap:10px; min-width:0; padding:8px; border:1px solid #e3e8ee; border-radius:10px; background:#fff; }
    .palette-preview__item--main { position:relative; overflow:visible; border-color:#bbc7d6; background:#f8fafd; box-shadow:0 2px 7px rgba(43,57,77,.07); }
    .palette-preview__item--main::before { position:absolute; inset:0 auto 0 0; width:3px; background:var(--palette-main-color,#344153); content:''; }
    .palette-preview__swatch { display:block; width:38px; height:38px; flex:none; border:1px solid rgba(30,42,58,.08); border-radius:7px; }
    .palette-preview__item--main .palette-preview__swatch { width:42px; height:42px; border-radius:8px; box-shadow:0 0 0 2px #fff,0 0 0 3px #c8d1de; }
    .palette-preview__info { display:flex; min-width:0; flex-direction:column; align-items:flex-start; gap:2px; }
    .palette-preview__role { flex:none; color:#84909d; font-size:11px; }
    .palette-preview__item--main .palette-preview__role { padding:1px 5px; border-radius:4px; background:#e9eef5; color:#40536d; font-weight:700; }
    .palette-preview__code { max-width:100%; overflow:hidden; color:#344153; font-size:12px; font-weight:600; text-overflow:ellipsis; white-space:nowrap; font-variant-numeric:tabular-nums; }
    .palette-preview__item--main .palette-preview__code { color:#223148; font-size:13px; font-weight:700; }
    .palette-preview__hex { display:block; color:#929da9; font-size:10px; font-variant-numeric:tabular-nums; }
    .palette-preview__remove { position:absolute; top:5px; right:5px; display:grid; place-items:center; width:20px; height:20px; padding:0; border:1px solid #dce3ec; border-radius:50%; background:#fff; color:#7c8999; font-size:16px; line-height:1; cursor:pointer; opacity:0; transform:scale(.85); transition:opacity .15s ease,transform .15s ease,background-color .15s ease,color .15s ease; }
    .palette-preview__item:hover .palette-preview__remove, .palette-preview__remove:focus-visible { opacity:1; transform:scale(1); }
    .palette-preview__remove:hover { border-color:#c5ceda; background:#f2f5f9; color:#334155; }
    .palette-preview__item[draggable="true"] { cursor:grab; }
    .palette-preview__item.is-dragging { opacity:.45; cursor:grabbing; }
    .palette-preview__item.is-drop-target { border-color:#7d8da2; outline:2px dashed #aab7c9; outline-offset:2px; }
    .palette-preview__item[data-hover-tip] { cursor:grab; touch-action:none; user-select:none; }
    .palette-preview__item[data-hover-tip]::after { display:none; position:absolute; z-index:2200; left:0; bottom:calc(100% + 6px); box-sizing:border-box; max-width:none; width:max-content; padding:4px 7px; border-radius:5px; background:#303844; color:#fff; font-size:10px; line-height:14px; font-weight:400; white-space:nowrap; pointer-events:none; content:attr(data-hover-tip); box-shadow:0 3px 12px rgba(0,0,0,.14); }
    .palette-preview__item[data-hover-tip]:nth-child(4n)::after { left:auto; right:0; }
    @media (max-width:800px) { .color-role-flow__palette .palette-preview__item[data-hover-tip]:nth-child(2n)::after { left:auto; right:0; } }
    @media (max-width:540px) { .palette-preview .palette-preview__item[data-hover-tip]:nth-child(2n)::after { left:auto; right:0; } }
    @media (max-width:500px) { .color-role-flow__palette .palette-preview__item[data-hover-tip]::after { left:0; right:auto; } }
    .palette-preview__item[data-hover-tip]:hover::after,.palette-preview__item[data-hover-tip]:focus-visible::after { display:block; }
    .palette-preview.is-reordering .palette-preview__item::after,.color-role-flow__palette.is-reordering .palette-preview__item::after { display:none; }
    .palette-preview.is-reordering,.palette-preview.is-reordering *,.palette-preview__item[data-hover-tip]:active { cursor:grabbing; }
    .palette-preview__item.is-selected { outline:2px solid #a6b5c9; outline-offset:1px; }
    .palette-drag-preview { position:fixed; z-index:10000; display:flex; align-items:center; gap:10px; width:170px; box-sizing:border-box; padding:10px; border:1px solid #9cacc1; border-radius:10px; background:#fff; box-shadow:0 8px 24px rgba(33,48,68,.22); pointer-events:none; transform:rotate(2deg); }
    .palette-drag-preview__swatch { width:36px; height:36px; border:1px solid rgba(0,0,0,.1); border-radius:6px; flex:none; }
    .palette-drag-preview strong { color:#344153; font-size:12px; }
    .palette-drag-preview small { display:block; margin-bottom:3px; color:#8792a2; font-size:11px; }
    @media (hover:none) { .palette-preview__remove { opacity:1; transform:none; } }
    .main-color-card__empty { display:flex; align-items:center; justify-content:center; padding:8px 12px; border:1px dashed #d9e0e8; border-radius:10px; background:#fafbfc; }
    .main-color-card__empty .el-button { flex:none; padding:7px 11px; border-radius:7px; font-size:12px; }
    @media (max-width:540px) { .main-color-card__header { align-items:flex-start; } .main-color-card__header .main-color-card__actions { flex-direction:column; align-items:flex-end; } .palette-preview { grid-template-columns:repeat(2,minmax(0,1fr)); } }
    .color-dialog { margin-top:1vh !important; }
    .color-dialog .el-dialog__body { max-height:calc(92vh - 112px); overflow-x:hidden; overflow-y:auto; padding-top:8px; }
    .color-dialog--main .el-tabs__header { margin:0 0 6px; }
    .color-dialog--main .el-tabs__nav-wrap::after,
    .color-dialog--main .el-tabs__active-bar { display:none; }
    .color-dialog--main .el-tabs__nav { display:flex; gap:3px; padding:4px; border:1px solid #e0e5ed; border-radius:10px; background:#f2f4f7; }
    .color-dialog--main .el-tabs__item { height:34px; padding:0 18px !important; border-radius:7px; color:#687486; font-size:13px; font-weight:500; line-height:34px; transition:background .15s,color .15s,box-shadow .15s; }
    .color-dialog--main .el-tabs__item:hover { color:#263447; background:#e8edf3; }
    .color-dialog--main .el-tabs__item.is-active { background:#fff; box-shadow:0 1px 4px rgba(31,48,78,.14); color:#263447; font-weight:650; }
    .color-dialog--main .el-tabs__item:focus-visible { outline:2px solid #315cf5; outline-offset:2px; }
    .color-dialog:not(.frequent-add-dialog) .el-dialog__footer { padding:10px 20px 16px; }
    .color-dialog:not(.frequent-add-dialog) .el-dialog__footer .el-button { min-height:36px; padding:8px 18px; border-radius:999px; font-size:13px; font-weight:500; }
    .color-dialog:not(.frequent-add-dialog) .el-dialog__footer .el-button--primary:not(.is-disabled) { box-shadow:0 3px 9px rgba(0,102,255,.16); }
    .color-picker-layout { display:flex; align-items:center; gap:26px; padding:12px 0 18px; }
    .color-picker-layout--wheel { gap:16px; }
    .color-dialog--main .color-picker-layout--wheel { padding-top:0; padding-bottom:0; }
    .color-dialog--main .frequent-color-section { margin-top:0; }
    .color-wheel-group { display:flex; align-items:center; gap:8px; flex:none; }
    .color-wheel { position:relative; width:224px; height:224px; flex:none; border-radius:50%; cursor:crosshair; touch-action:none; user-select:none; background:radial-gradient(circle, #fff 0%, rgba(255,255,255,0) 70%), conic-gradient(red, yellow, lime, cyan, blue, magenta, red); box-shadow:0 0 0 1px #d8deeb, 0 7px 22px rgba(31,56,105,.12); }
    .color-picker-value-row { display:flex; align-items:center; justify-content:space-between; gap:8px; margin:9px 0 5px; }
    .color-picker-value-row label { margin:0; }
    .color-wheel-eyedropper { display:inline-flex; align-items:center; justify-content:center; gap:5px; min-height:28px; padding:2px 6px; border:0; border-radius:6px; background:transparent; color:#60738f; cursor:pointer; font-size:12px; white-space:nowrap; }
    .color-wheel-eyedropper:hover,.color-wheel-eyedropper:focus-visible { background:#edf4ff; color:#315cf5; outline:none; }
    .color-wheel-eyedropper svg { width:16px; height:16px; fill:none; stroke:currentColor; stroke-width:1.8; stroke-linecap:round; stroke-linejoin:round; }
    .color-wheel__shade { position:absolute; inset:0; border-radius:50%; pointer-events:none; background:#000; }
    .color-wheel__cursor { position:absolute; width:15px; height:15px; border:2px solid #fff; border-radius:50%; box-shadow:0 0 0 1px #27324a, 0 1px 5px rgba(0,0,0,.3); transform:translate(-50%,-50%); pointer-events:none; }
    .color-picker-controls { flex:1; min-width:0; }
    .color-picker-preview { width:100%; height:70px; margin-bottom:12px; border:1px solid #dfe4ee; border-radius:9px; }
    .color-picker-controls label { display:block; margin:12px 0 5px; color:#606266; font-size:13px; }
    .frequent-color-section { display:flex; align-items:center; gap:8px; min-height:34px; margin-top:4px; padding:4px 10px; border:1px solid #dce4f1; border-radius:18px; background:#f1f5ff; }
    .frequent-color-title { display:flex; align-items:baseline; gap:5px; min-width:0; white-space:nowrap; }
    .frequent-color-title strong { font-size:11px; line-height:1.2; }
    .frequent-color-title small { color:#8993a1; font-size:9px; }
    .frequent-color-section .color-quick-list { display:flex; align-items:center; gap:5px; min-width:0; margin-left:auto; }
    .frequent-color-item { position:relative; display:block; flex:0 0 24px; width:24px; height:24px; border:1px solid transparent; border-radius:50%; background:#fff; }
    .frequent-color-item:hover, .frequent-color-item.is-selected { border-color:#315cf5; }
    .frequent-color-item.is-selected { box-shadow:0 0 0 1px #315cf5 inset; }
    .frequent-color-item .color-quick,.frequent-color-item .color-quick__swatch { height:100%; border-radius:50%; }
    .frequent-color-item .color-quick { padding:1px; }
    .frequent-color-remove { position:absolute; top:-4px; right:-4px; display:flex; align-items:center; justify-content:center; width:14px; height:14px; padding:0; border:1px solid rgba(0,0,0,.08); border-radius:50%; background:#fff; color:#697386; cursor:pointer; font-size:11px; line-height:1; opacity:0; visibility:hidden; pointer-events:none; transition:opacity .15s; }
    .frequent-color-item:hover .frequent-color-remove, .frequent-color-item:focus-within .frequent-color-remove { opacity:1; visibility:visible; pointer-events:auto; }
    .frequent-color-remove:hover { color:#d14b4b; }
    @media (hover:none) { .frequent-color-remove { opacity:1; visibility:visible; pointer-events:auto; } }
    .frequent-color-empty { display:flex; flex:0 0 24px; width:24px; height:24px; align-items:center; justify-content:center; padding:1px; border:1px dashed #aebbd0; border-radius:50%; background:#fff; color:#6b7d99; cursor:pointer; }
    .frequent-color-empty:hover { border-color:#315cf5; color:#315cf5; background:#f5f8ff; }
    .frequent-color-empty__swatch { display:flex; align-items:center; justify-content:center; width:100%; height:100%; border-radius:50%; background:#f2f5fa; font-size:14px; line-height:1; }
    .frequent-add-dialog .el-dialog__body { padding-top:6px; }
    .frequent-add-dialog .color-picker-layout { padding-bottom:4px; }
    .frequent-add-dialog .color-picker-preview { display:flex; align-items:center; justify-content:center; color:#8792a2; font-size:13px; }
    .frequent-add-dialog .color-picker-preview.is-empty { background:repeating-conic-gradient(#f1f3f7 0 25%,#fff 0 50%) 0 0/16px 16px; }
    .color-step-card { margin:0 0 14px; padding:14px; border:1px solid #e4e9f2; border-radius:16px; background:#fff; }
    .color-step-card__heading { display:flex; align-items:center; gap:9px; margin-bottom:12px; min-height:26px; }
    .color-step-card__number { display:inline-flex; flex:none; width:25px; height:25px; align-items:center; justify-content:center; border-radius:50%; background:#f1f3f6; color:#687489; font-size:10px; font-weight:600; }
    .color-step-card__heading strong { color:#263447; font-size:15px; }
    .color-step-card__heading small { min-width:0; color:#8993a1; font-size:11px; font-weight:400; }
    .color-dialog--main .color-role-flow { box-sizing:border-box; flex:none; height:auto; margin-bottom:0; padding:8px; overflow:visible; }
    .color-role-flow .color-step-card__heading { margin-bottom:4px; }
    .color-role-flow__current { display:flex; align-items:center; gap:10px; flex-wrap:wrap; }
    .color-role-flow__current .main-color-card__swatch { width:26px; height:26px; }
    .color-role-flow__current-copy { display:flex; flex:1; min-width:150px; align-items:center; flex-wrap:wrap; gap:6px; }
    .color-role-flow__current-copy strong { font-size:13px; color:#303133; }
    .color-role-flow__current-copy small { color:#697386; font-size:11px; }
    .color-role-flow__add.el-button { min-height:28px; padding:5px 10px; border-color:#d9e0e9; border-radius:16px; background:#f5f7fa; color:#526174; font-size:12px; font-weight:500; }
    .color-role-flow__add.el-button:hover,.color-role-flow__add.el-button:focus { border-color:#b8c4d3; background:#edf2f8; color:#34445a; }
    .color-role-flow__palette { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:6px; margin-top:6px; }
    .color-role-flow__palette .palette-preview__item { display:grid; grid-template-columns:40px minmax(0,1fr); align-items:center; gap:6px; height:64px; min-width:0; box-sizing:border-box; padding:6px 9px; }
    .color-role-flow__palette .palette-preview__swatch { width:34px; height:34px; box-sizing:border-box; }
    .color-role-flow__palette .palette-preview__item--main { border:2px solid #657a98; background:#f2f5fa; padding-left:12px; }
    .color-role-flow__palette .palette-preview__item--main::before { width:4px; }
    .color-role-flow__palette .palette-preview__item--main .palette-preview__swatch { width:40px; height:40px; }
    .color-role-flow__palette .palette-preview__item--main .palette-preview__role { background:#34465f; color:#fff; padding:1px 6px; }
    .color-role-flow__palette .palette-preview__item--main .palette-preview__code { font-size:13px; }
    .color-role-flow__palette .palette-preview__info { min-width:0; gap:1px; padding-right:0; }
    .color-role-flow__palette .palette-preview__item:not(.palette-preview__item--main) .palette-preview__info { align-self:start; padding-top:0; }
    .color-role-flow__palette .palette-preview__role { display:flex; align-items:center; gap:7px; line-height:16px; white-space:nowrap; }
    .color-role-flow__palette .palette-preview__code { line-height:16px; }
    .color-role-flow__palette .palette-preview__hex { line-height:12px; }
    .color-role-flow__palette .palette-preview__remove { opacity:1; transform:none; width:18px; height:18px; font-size:14px; }
    .color-role-flow__palette .palette-preview__swatch { padding:0; cursor:grab; touch-action:none; transition:outline-color .15s,box-shadow .15s; }
    .color-role-flow__palette .palette-preview__swatch:hover,.color-role-flow__palette .palette-preview__swatch.is-selected,.color-role-flow__palette .palette-preview__swatch:focus-visible { outline:2px solid #657a98; outline-offset:2px; }
    .color-role-flow__palette .palette-preview__swatch:active,.color-role-flow__palette.is-reordering,.color-role-flow__palette.is-reordering * { cursor:grabbing; }
    .color-role-flow__empty { grid-column:1 / -1; display:flex; align-items:center; gap:12px; min-height:64px; box-sizing:border-box; padding:10px; border:1px dashed #cbd4e1; border-radius:10px; background:#f8fafd; }
    .color-role-flow__empty > span { width:42px; height:42px; flex:none; border:1px dashed #b8c4d3; border-radius:8px; }
    .color-role-flow__empty strong { display:block; color:#40536d; font-size:13px; }
    .color-role-flow__empty small { display:block; margin-top:5px; color:#8994a4; font-size:12px; }
    .color-selection-list { display:flex; gap:8px; flex-wrap:wrap; margin:10px 0 0; }
    .color-selection-chip { display:flex; align-items:center; gap:7px; padding:6px 8px; border:1px solid #dfe5ee; border-radius:8px; background:#fff; color:#3d4655; font-size:12px; }
    .color-selection-chip__copy { display:flex; flex-direction:column; gap:2px; }
    .color-selection-chip__copy small { color:#8792a2; font-size:10px; }
    .color-selection-chip__swatch { width:23px; height:23px; border:1px solid rgba(0,0,0,.12); border-radius:5px; flex:none; }
    .color-selection-chip .color-selection-chip__select { display:flex; align-items:center; gap:6px; color:#3d4655; }
    .color-selection-chip button { border:0; background:none; color:#315cf5; cursor:pointer; padding:2px; }
    .color-selection-chip button[aria-label^="移除"] { color:#77818f; font-size:17px; line-height:1; }
    .color-quick { display:block; width:100%; min-width:0; padding:4px; border:0; border-radius:8px; background:transparent; cursor:pointer; }
    .color-quick__swatch { display:block; width:100%; height:44px; border-radius:5px; border:1px solid rgba(0,0,0,.12); }
    .pantone-toolbar { margin:0 0 6px; }
    .pantone-toolbar .el-input__inner { height:30px; line-height:30px; padding:0 10px; font-size:11px; }
    .pantone-toolbar .el-input__suffix { line-height:30px; }
    .pantone-count { white-space:nowrap; color:#697386; font-size:12px; }
    .color-dialog--main { max-width:980px; margin-top:.5vh !important; overflow:hidden; border:1px solid #e6eaf1; border-radius:20px; background:#fff; box-shadow:0 24px 72px rgba(22,37,64,.17),0 4px 16px rgba(22,37,64,.06); }
    .color-dialog--main .el-dialog__header { padding:16px 22px 9px; }
    .color-dialog--main .el-dialog__title { color:#243044; font-weight:600; }
    .color-dialog--main .el-dialog__headerbtn { top:18px; right:22px; }
    .color-dialog--main .el-dialog__close { color:#8b96a6; }
    .color-dialog--main .el-dialog__close:hover { color:#334155; }
    .color-dialog--main .el-dialog__footer { border-top:1px solid #f0f2f6; background:#fff; }
    .color-dialog--main .el-dialog__footer { padding-top:6px !important; padding-bottom:10px !important; }
    .color-dialog--main .el-dialog__body { display:flex; height:auto; max-height:calc(100vh - 100px); flex-direction:column; gap:14px; padding-bottom:10px; overflow-y:auto; }
    .color-step-card--selection { box-sizing:border-box; flex:none; height:clamp(370px,calc(35vh + 110px),410px); margin-bottom:0; overflow-y:auto; }
    .color-step-card--selection .color-picker-layout--wheel,
    .color-step-card--selection .frequent-color-section { max-width:640px; margin-left:auto; margin-right:auto; }
    .pantone-workspace { display:grid; grid-template-columns:minmax(0,1fr) 260px; gap:12px; align-items:start; }
    .pantone-colors-pane { box-sizing:border-box; display:flex; flex-direction:column; min-width:0; height:clamp(200px,35vh,300px); border:1px solid #e1e6ee; border-radius:9px; background:#fff; overflow:hidden; }
    .pantone-colors-head { display:flex; justify-content:space-between; align-items:center; padding:11px 13px; border-bottom:1px solid #e1e6ee; }
    .pantone-colors-head strong { color:#263447; font-size:14px; }
    .pantone-colors-scroll { flex:1; min-height:0; overflow-y:auto; padding:12px; }
    .pantone-controls-pane { box-sizing:border-box; display:flex; min-width:0; height:clamp(200px,35vh,300px); flex-direction:column; padding:0 3px 0 1px; }
    .pantone-grid { display:grid; grid-template-columns:repeat(auto-fill,var(--pantone-card-width,70px)); justify-content:space-between; gap:6px; margin:0; }
    .pantone-filters { display:grid; min-height:0; flex:1; grid-template-columns:repeat(3,minmax(0,1fr)); grid-template-rows:auto minmax(0,1fr) auto; gap:5px; margin:0; padding:8px; border:1px solid #e1e6ee; border-radius:9px; background:#f9fbfe; }
    .pantone-filters__head { display:flex; grid-column:1/-1; align-items:center; justify-content:space-between; min-height:18px; color:#687385; font-size:11px; }
    .pantone-filters__head button { padding:0; border:0; background:none; color:#718096; font-size:10px; cursor:pointer; }
    .pantone-filter { display:flex; min-width:0; flex-direction:column; align-items:center; }
    .pantone-filter-head { display:flex; min-height:24px; align-items:center; justify-content:center; gap:3px; margin-bottom:4px; color:#4e5969; text-align:center; }
    .pantone-filter-head strong { color:#263447; font-size:13px; }
    .pantone-filter-head button { padding:0; border:0; background:none; color:#8994a4; cursor:pointer; font-size:14px; line-height:1; }
    .pantone-filter-track { position:relative; box-sizing:border-box; width:44px; min-height:0; flex:1; border:1px solid rgba(0,0,0,.13); border-radius:6px; cursor:ns-resize; touch-action:none; user-select:none; overflow:visible; box-shadow:none; }
    .pantone-filter-track--h { background:linear-gradient(to bottom,#f33,#ff0,#0f0,#0ff,#33f,#f0f,#f33); }
    .pantone-filter-track--s { background:linear-gradient(to bottom,#f33,#b37474,#858585); }
    .pantone-filter-track--l { background:linear-gradient(to bottom,#080808,#777,#fff); }
    .pantone-filter-selection { position:absolute; left:0; right:0; box-sizing:border-box; pointer-events:auto; cursor:grab; min-height:2px; }
    .pantone-filter-handle { position:absolute; z-index:2; left:-4px; right:-4px; height:22px; padding:0; border:0; background:transparent; cursor:ns-resize; touch-action:none; }
    .pantone-filter-handle::after { content:""; position:absolute; left:4px; right:4px; top:10px; height:2px; border-radius:1px; background:#fff; box-shadow:0 0 0 1px rgba(38,54,75,.45); }
    .pantone-filter-handle:hover::after,.pantone-filter-handle:focus-visible::after { box-shadow:0 0 0 1px #526c91; }
    .pantone-filter-handle:focus-visible { outline:none; }
    .pantone-filter-handle--top { top:-10px; }
    .pantone-filter-handle--bottom { bottom:-10px; }
    .pantone-filter-bounds { display:flex; align-items:center; justify-content:center; gap:2px; margin:5px 0 2px; color:#8792a2; font-size:10px; white-space:nowrap; }
    .pantone-filter-bounds input { box-sizing:border-box; width:31px; height:22px; padding:1px; border:1px solid #d9e0ea; border-radius:5px; appearance:textfield; -moz-appearance:textfield; background:#fff; color:#3b4657; text-align:center; font-size:10px; }
    .pantone-filter-bounds input::-webkit-inner-spin-button,.pantone-filter-bounds input::-webkit-outer-spin-button { margin:0; -webkit-appearance:none; }
    .pantone-card-size { display:flex; grid-column:1/-1; min-width:0; flex-direction:column; gap:2px; margin:3px 0 0; color:#687385; font-size:11px; }
    .pantone-card-size__head,.pantone-card-size__scale { display:flex; align-items:center; justify-content:space-between; gap:8px; white-space:nowrap; }
    .pantone-card-size__head strong { color:#263447; font-size:11px; }
    .color-picker-controls input[type=range],.pantone-card-size input { display:block; width:100%; height:18px; margin:0; appearance:none; -webkit-appearance:none; background:transparent; cursor:pointer; }
    .color-picker-controls input[type=range]::-webkit-slider-runnable-track,.pantone-card-size input::-webkit-slider-runnable-track { height:4px; border-radius:999px; background:#d5dbe4; }
    .color-picker-controls input[type=range]::-webkit-slider-runnable-track { background:linear-gradient(to right,#8793a3 var(--brightness-fill),#d5dbe4 var(--brightness-fill)); }
    .color-picker-controls input[type=range]::-webkit-slider-thumb,.pantone-card-size input::-webkit-slider-thumb { width:14px; height:14px; margin-top:-5px; appearance:none; -webkit-appearance:none; border:2px solid #fff; border-radius:50%; background:#8793a3; box-shadow:0 1px 4px rgba(35,48,67,.2); }
    .color-picker-controls input[type=range]::-moz-range-track,.pantone-card-size input::-moz-range-track { height:4px; border-radius:999px; background:#d5dbe4; }
    .color-picker-controls input[type=range]::-moz-range-track { background:linear-gradient(to right,#8793a3 var(--brightness-fill),#d5dbe4 var(--brightness-fill)); }
    .color-picker-controls input[type=range]::-moz-range-thumb,.pantone-card-size input::-moz-range-thumb { width:10px; height:10px; border:2px solid #fff; border-radius:50%; background:#8793a3; box-shadow:0 1px 4px rgba(35,48,67,.2); }
    .pantone-card-size__scale { color:#8b95a3; font-size:10px; }
    .pantone-swatch { display:block; min-width:0; padding:4px; border:1px solid #dfe5ee; border-radius:7px; background:#fff; text-align:left; cursor:pointer; }
    .pantone-swatch:hover,.pantone-swatch.is-selected { border-color:#315cf5; box-shadow:0 0 0 1px #315cf5; }
    .pantone-swatch__color { display:block; height:var(--pantone-card-height,42px); border:1px solid rgba(0,0,0,.07); border-radius:4px; }
    .pantone-swatch__code { display:block; margin-top:3px; font-weight:600; font-size:clamp(6px,calc((var(--pantone-card-width,70px) - 10px) / 6),12px); line-height:1.4; letter-spacing:-.2px; color:#30394a; white-space:nowrap; }
    .pantone-swatch__hex { display:none; }
    .pantone-page { display:flex; justify-content:center; padding:6px 4px; border-top:1px solid #e1e6ee; }
    .pantone-page .el-pagination.is-background .btn-prev,
    .pantone-page .el-pagination.is-background .btn-next,
    .pantone-page .el-pagination.is-background .el-pager li { width:26px; min-width:26px; height:26px; line-height:26px; margin:0 3px; border-radius:50%; background:#f1f3f6; color:#667488; font-size:11px; font-weight:500; }
    .pantone-page .el-pagination.is-background .el-pager li:not(.disabled):hover { background:#e8edf3; color:#334155; }
    .pantone-page .el-pagination.is-background .el-pager li:not(.disabled).active { background:#dce3ec; color:#263447; font-weight:600; }
    @media (max-width:800px) {
      .color-dialog--main .el-dialog__body { display:block; height:auto; max-height:calc(100vh - 100px); overflow-y:auto; }
      .color-step-card--selection { height:auto; overflow:visible; margin-bottom:14px; }
      .pantone-workspace { grid-template-columns:1fr; }
      .pantone-colors-pane { height:clamp(200px,35vh,300px); }
      .color-role-flow__palette { grid-template-columns:repeat(2,minmax(0,1fr)); }
    }
    @media (max-width:500px) { .color-role-flow__palette { grid-template-columns:1fr; } .color-role-flow .color-step-card__heading { flex-wrap:wrap; } .frequent-color-section .color-quick-list { overflow-x:auto; padding:4px 0; } }
    .color-result-strip { margin:0 0 16px; }
    .color-result-strip__swatch, .color-detail-row__swatch { width:32px; height:32px; }
    .color-card-meta { display:flex; align-items:center; gap:6px; margin:10px 0 0; color:#606266; font-size:12px; }
    .color-card-meta__swatch { width:16px; height:16px; border:1px solid rgba(0,0,0,.12); border-radius:4px; }
    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 16px; }
    .form-span-2 { grid-column: 1 / -1; }
    .upload-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
    .upload-box { padding: 10px; border: 1px dashed #D9DDE7; border-radius: 6px; background: #FAFBFD; }
    .upload-box__title { margin-bottom: 8px; color: #303133; }
    .prompt-actions { display: flex; margin-bottom: 12px; align-items: center; justify-content: flex-end; gap: 10px; }
    .scenario-control { display: flex; margin-right: auto; align-items: center; gap: 8px; color: var(--sw-muted); font-size: 12px; }
    .scenario-control .el-select { width: 170px; }
    .empty-canvas { display: flex; min-height: 455px; align-items: center; justify-content: center; border: 1px dashed #D9DDE7; border-radius: 8px; color: var(--sw-muted); background: #FAFBFD; text-align: center; line-height: 25px; }
    .direction-list { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
    .direction-card { min-width: 0; border: 1px solid #E6EAF1; border-radius: 8px; background: #fff; }
    .direction-card.is-selected { border-color: var(--sw-primary); box-shadow: 0 0 0 1px rgba(0,100,255,.12); }
    .direction-card__head { display: flex; padding: 12px 12px 8px; align-items: flex-start; justify-content: space-between; gap: 8px; }
    .direction-name { color: #303133; font-weight: 600; }
    .direction-body { padding: 0 12px 12px; color: #606266; line-height: 20px; }
    .direction-line { margin: 5px 0; }
    .direction-actions { display: flex; margin-top: 10px; justify-content: space-between; align-items: center; }
    .creative-layout { display: grid; grid-template-columns: 270px 1fr; gap: 14px; }
    .creative-settings .el-form-item { margin-bottom: 14px; }
    .creative-toolbar { display: flex; margin-bottom: 12px; align-items: center; justify-content: space-between; gap: 12px; }
    .sw-filter-row { display: flex; align-items: flex-start; gap: 14px; flex-wrap: wrap; }
    .sw-filter-item { display: flex; align-items: center; gap: 8px; }
    .sw-filter-item .el-input, .sw-filter-item .el-select { width: 220px; }
    .sw-filter-actions { display: flex; margin-left: auto; gap: 10px; }
    .sw-list-head { display: flex; margin: 12px 0; align-items: center; justify-content: space-between; }
    .sw-status-filter { display: flex; align-items: center; gap: 10px; }
    .sw-list-title { color: #303133; font-size: 16px; font-weight: 600; }
    .creative-grid { display: grid; grid-template-columns: repeat(3, minmax(230px, 1fr)); gap: 12px; }
    .creative-card { overflow: hidden; border: 1px solid #E7EAF0; border-radius: 8px; background: #fff; }
    .creative-image { position: relative; height: 235px; background: #F7F8FA; }
    .creative-image img { width: 100%; height: 100%; object-fit: cover; }
    .creative-card__body { padding: 12px; }
    .creative-card__title { display: flex; align-items: center; justify-content: space-between; gap: 8px; color: #303133; font-weight: 600; }
    .creative-card__desc { min-height: 40px; margin: 8px 0; color: #606266; line-height: 20px; }
    .creative-card__actions { display: flex; padding-top: 10px; border-top: 1px solid #ECEEF3; justify-content: space-between; }
    .sw-pagination { display: flex; margin-top: 14px; align-items: center; justify-content: flex-end; }
    .history-filter { padding: 14px; border: 1px solid #ECEEF3; border-radius: 8px; background: #fff; }
    .history-table { margin-top: 12px; }
    .history-table .el-table th { height: 40px; padding: 0; color: #666; background: var(--sw-table-head); font-weight: 400; }
    .drawer-section { margin-bottom: 18px; padding: 18px; border-radius: 8px; background: #fff; box-shadow: 0 1px 5px rgba(52,52,52,.06); }
    .drawer-section__title { margin: 0 0 16px; padding-left: 9px; border-left: 3px solid var(--sw-primary); color: #303133; font-size: 15px; font-weight: 600; }
    .drawer-footer { position: sticky; bottom: -20px; display: flex; margin: 20px -20px -20px; padding: 12px 20px; justify-content: flex-end; gap: 10px; border-top: 1px solid #ECEEF3; background: #fff; }
    .refine-workspace { display:grid; grid-template-columns:minmax(0,1.6fr) minmax(290px,.85fr); grid-template-rows:minmax(0,1fr) auto; gap:14px; height:calc(100vh - 166px); min-height:490px; }
    .refine-canvas { position:relative; display:flex; min-height:0; align-items:center; justify-content:center; overflow:hidden; border:1px solid #e6e9ef; border-radius:14px; background:#f5f6f8; cursor:crosshair; user-select:none; }
    .refine-canvas img { display:block; width:100%; max-height:100%; object-fit:contain; pointer-events:none; }
    .refine-annotation-box { position:absolute; z-index:2; border:2px solid #2563eb; border-radius:4px; background:rgba(37,99,235,.1); pointer-events:none; }
    .refine-annotation-box span { position:absolute; top:-22px; left:-2px; min-width:22px; padding:2px 6px; border-radius:4px 4px 0 0; color:white; background:#2563eb; font-size:11px; line-height:18px; }
    .refine-inspector { display:flex; min-height:0; flex-direction:column; gap:12px; }
    .refine-panel { overflow:hidden; border:1px solid #e6e9ef; border-radius:12px; background:#fff; }
    .refine-panel__head { display:flex; min-height:42px; padding:0 14px; align-items:center; justify-content:space-between; border-bottom:1px solid #edf0f4; color:#243047; font-size:13px; font-weight:600; }
    .refine-panel__head small { color:#8993a3; font-weight:400; }
    .refine-version-list { min-height:138px; max-height:230px; padding:8px; overflow-y:auto; }
    .refine-version { display:flex; width:100%; min-height:38px; padding:7px 10px; align-items:center; gap:9px; border:0; border-radius:7px; color:#536174; background:transparent; text-align:left; cursor:pointer; }
    .refine-version:hover, .refine-version.is-active { color:#243047; background:#f0f4fa; }
    .refine-version__dot { width:7px; height:7px; flex:none; border-radius:50%; background:#3478eb; }
    .refine-version__label { flex:1; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; }
    .refine-version__tag { padding:2px 7px; border-radius:10px; color:#637086; background:#e8edf4; font-size:11px; }
    .refine-version__tag.is-primary { color:#fff; background:#2869da; }
    .refine-note-list { min-height:114px; max-height:240px; padding:10px; overflow-y:auto; }
    .refine-note-empty { padding:15px 8px; border:1px dashed #e2e6ed; border-radius:8px; color:#9ca6b4; font-size:12px; text-align:center; }
    .refine-note-row { display:flex; align-items:center; gap:7px; margin-bottom:7px; }
    .refine-note-index { display:grid; width:22px; height:22px; flex:none; place-items:center; border-radius:6px; color:#fff; background:#2869da; font-size:11px; }
    .refine-composer { grid-column:1/-1; padding:14px; border:1px solid #e6e9ef; border-radius:12px; background:#fff; }
    .refine-composer__hint { margin-bottom:8px; color:#8993a3; font-size:12px; line-height:1.5; }
    .refine-composer .el-textarea__inner { min-height:80px; padding:4px 0; border:0; box-shadow:none; resize:vertical; }
    .refine-composer__foot { display:flex; margin-top:10px; align-items:flex-end; justify-content:space-between; gap:12px; }
    .refine-composer__tools { display:flex; align-items:center; gap:8px; flex-wrap:wrap; }
    .refine-reference { position:relative; display:inline-flex; width:38px; height:38px; overflow:visible; border:1px solid #dce3ec; border-radius:7px; }
    .refine-reference img { width:100%; height:100%; border-radius:6px; object-fit:cover; }
    .refine-reference button { position:absolute; top:-7px; right:-7px; width:17px; height:17px; padding:0; border:0; border-radius:50%; color:#fff; background:#5e6a79; cursor:pointer; }
    .refine-advanced-row { display:flex; align-items:center; gap:10px; margin:0 0 14px; }
    .refine-advanced-row strong { width:72px; flex:none; font-size:13px; }
    .refine-chip { display:inline-flex; padding:5px 10px; border:1px solid #dce3ec; border-radius:16px; color:#697586; background:#fff; font-size:12px; cursor:pointer; }
    .refine-chip.is-selected { border-color:#b9d0fb; color:#1f57ac; background:#eef4ff; }
    @media (max-width:900px) { .refine-workspace { grid-template-columns:1fr; grid-template-rows:auto; height:auto; min-height:0; } .refine-canvas { min-height:320px; } .refine-canvas img { max-height:460px; } .refine-composer { grid-column:1; } }
    .model-lock { display: inline-flex; align-items: center; gap: 6px; padding: 5px 10px; border: 1px solid #DDE2EC; border-radius: 4px; color: #606266; background: #F7F8FB; font-size: 12px; }
    .metric-table td { padding: 8px 10px; border-bottom: 1px solid #ECEEF3; line-height: 20px; }
    .metric-table { width: 100%; border-collapse: collapse; }
    .muted { color: var(--sw-muted); }
    .el-button--primary { border-color: var(--sw-primary); background: var(--sw-primary); }
    .el-pagination.is-background .el-pager li:not(.disabled).active { background: var(--sw-primary); }
    .el-drawer__header { height: 56px; margin: 0; padding: 0 20px; align-items: center; color: #303133; background: #F8F8F9; }
    .el-drawer__body { padding: 20px; overflow: auto; }
    /* 用户提供的 V1.0 页面截图为本轮最高优先级视觉基线 */
    .sw-shell { display: block; min-height: 142.857142vh; background: #F7F7F8; }
    .sw-main { width: 100%; }
    .reference-header { position: sticky; z-index: 20; top: 0; display: flex; height: 92px; align-items: center; gap: 54px; padding: 0 48px; border-bottom: 1px solid #ECEEF2; background: rgba(255,255,255,.98); }
    .reference-brand { display: flex; min-width: 210px; align-items: center; gap: 13px; color: #2F3033; font-size: 24px; font-weight: 600; }
    .reference-brand__mark { position: relative; display: inline-flex; width: 38px; height: 38px; align-items: center; justify-content: center; overflow: hidden; border-radius: 50%; background: #E9F7FF; }
    .reference-brand__mark::before, .reference-brand__mark::after { position: absolute; width: 17px; height: 31px; border-radius: 50%; background: #49D7F3; content: ""; transform: rotate(28deg); }
    .reference-brand__mark::after { margin-left: 13px; background: #248CFF; transform: rotate(32deg); }
    .reference-steps { display: flex; min-width: 650px; flex: 1; align-items: center; gap: 22px; }
    .reference-step { display: inline-flex; min-width: 156px; height: 50px; align-items: center; justify-content: center; padding: 0 28px; border: 0; border-radius: 28px; color: #C4C6CB; background: #fff; font-size: 19px; font-weight: 600; cursor: pointer; }
    .reference-step.is-active { color: #fff; background: var(--sw-primary); box-shadow: 0 8px 16px rgba(0,100,255,.13); }
    .reference-step-line { width: 56px; height: 1px; background: #ECEEF2; }
    .reference-tools { display: flex; align-items: center; gap: 18px; }
    .reference-model { width: 245px; }
    .reference-model .el-input__inner { height: 52px; border-radius: 28px; font-size: 17px; }
    .reference-icon-button.el-button { width: 52px; height: 52px; padding: 0; border-radius: 16px; font-size: 23px; }
    .new-design.el-button { height: 52px; padding: 0 18px; border: 0; font-size: 18px; font-weight: 600; }
    .reference-settings { width: 250px; padding: 8px 4px; }
    .reference-settings__row { display: flex; margin: 10px 0; align-items: center; justify-content: space-between; gap: 10px; }
    .sw-workspace { min-height: calc(142.857142vh - 92px); padding: 0; background: #F7F7F8; }
    .reference-planning-page.sw-business-card { min-height: 1200px; padding: 0; border-radius: 0; background: #F7F7F8; box-shadow: none; }
    .planning-hero { display: flex; min-height: 122px; align-items: center; justify-content: space-between; gap: 20px; padding: 26px 48px; border-bottom: 1px solid #ECEEF2; background: #fff; }
    .planning-hero h1 { margin: 0; color: #303133; font-size: 22px; }
    .planning-hero p { margin: 0; color: #7A7D84; font-size: 16px; }
    .planning-hero__title-row { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
    .planning-outdated-hint { color: #E6A23C; font-size: 13px; font-weight: 400; white-space: nowrap; }
    .planning-hero__actions { display: flex; align-items: center; gap: 12px; }
    .planning-hero__actions .el-button { height: 52px; padding: 0 28px; border-radius: 27px; font-size: 18px; }
    .planning-hero__actions .el-button + .el-button { margin-left: 0; }
    .prompt-mode-dropdown { display: inline-flex; }
    .prompt-mode-dropdown .el-button-group { display: inline-flex; }
    .prompt-mode-dropdown .el-button--primary:first-child { min-width: 166px; padding-right: 22px; border-radius: 27px 0 0 27px; }
    .prompt-mode-dropdown .el-button--primary:last-child { width: 48px; padding: 0; border-radius: 0 27px 27px 0; }
    .prompt-mode-dropdown .el-button--primary:last-child::before { top: 9px; bottom: 9px; }
    .prompt-mode-menu { min-width: 196px; padding: 7px; border-radius: 10px; }
    .prompt-mode-menu .el-dropdown-menu__item { display: flex; min-height: 42px; align-items: center; padding: 0 14px; border-radius: 7px; color: #303133; font-size: 15px; }
    .prompt-mode-menu .el-dropdown-menu__item:hover { color: var(--sw-primary); background: #F2F7FF; }
    .prompt-mode-menu .el-dropdown-menu__item i { margin-right: 9px; color: inherit; font-size: 17px; }
    .planning-hero__actions .el-select { width: 132px; }
    .planning-hero__actions .el-input__inner { height: 42px; border-radius: 22px; }
    .planning-result-note { margin: 0 48px; padding-top: 14px; }
    .planning-reference-layout { display: grid; grid-template-columns: minmax(650px, .98fr) minmax(760px, 1.02fr); gap: 16px; padding: 24px 48px 50px; align-items: start; }
    .planning-form-column { display: flex; flex-direction: column; gap: 18px; }
    .reference-form-card { padding: 22px 24px; border: 1px solid #F0F1F3; border-radius: 14px; background: #fff; }
    .reference-form-card__title { display: flex; margin: 0 0 16px; align-items: center; justify-content: space-between; color: #303133; font-size: 18px; font-weight: 600; }
    .reference-form-card__hint { color: #858990; font-size: 14px; font-weight: 400; }
    .category-pills, .tag-pills { display: flex; flex-wrap: wrap; gap: 10px; }
    .category-pills .el-radio-button__inner, .tag-pills .el-checkbox-button__inner { padding: 8px 16px; border: 1px solid #E6E8EC !important; border-radius: 18px !important; box-shadow: none !important; font-size: 15px; }
    .category-pills .el-radio-button:first-child .el-radio-button__inner, .tag-pills .el-checkbox-button:first-child .el-checkbox-button__inner { border-left: 1px solid #E6E8EC; }
    .category-pills .el-radio-button__orig-radio:checked + .el-radio-button__inner, .tag-pills .el-checkbox-button.is-checked .el-checkbox-button__inner { border-color: var(--sw-primary) !important; color: #fff; background: var(--sw-primary); }
    .forbidden-pills .el-checkbox-button.is-checked .el-checkbox-button__inner { border-color: #FFB6B6 !important; color: #E52626; background: #FFF5F5; }
    .reference-form-card .el-textarea__inner { border-radius: 10px; font-size: 15px; line-height: 24px; }
    .reference-image-row { display: grid; grid-template-columns: 100px 1fr; min-height: 66px; align-items: center; gap: 14px; border-top: 1px solid #F0F1F3; }
    .reference-image-row:first-of-type { border-top: 0; }
    .reference-image-label { color: #4E5157; font-size: 15px; }
    .reference-upload { display: grid; min-height: 66px; grid-template-columns: 52px minmax(0,1fr); align-items: center; gap: 12px; padding: 7px 10px; border: 1px solid #ECEEF2; border-radius: 10px; transition: border-color .18s ease,box-shadow .18s ease,background .18s ease; }
    .reference-upload.is-active { border-color: #bfd0e8; background: #fbfcff; box-shadow: 0 0 0 2px rgba(135,164,204,.11); }
    .reference-upload.is-active .reference-upload__thumb { border-color: #a8bfdc; background: #f5f8fc; }
    .reference-upload:focus-visible { outline: 2px solid #a8bfdc; outline-offset: 2px; }
    .reference-upload__content { display:flex; min-width:0; height:48px; flex-direction:column; justify-content:center; }
    .reference-upload__hint { overflow:hidden; color:#8795a8; font-size:12px; line-height:17px; text-overflow:ellipsis; white-space:nowrap; }
    .reference-upload__content:focus-within .reference-upload__hint { display:none; }
    .reference-upload__trigger { width: 52px; }
    .reference-upload__thumb { position: relative; display: inline-flex; width: 48px; height: 48px; align-items: center; justify-content: center; overflow: hidden; border: 1px dashed #DADDE3; border-radius: 8px; color: #2F3135; background: #FAFAFB; font-size: 24px; }
    .reference-upload__thumb img { width: 100%; height: 100%; object-fit: cover; }
    .reference-upload__actions { position: absolute; inset: 0; opacity: 0; background: rgba(31,35,41,.42); transition: opacity .16s ease; }
    .reference-upload__thumb:hover .reference-upload__actions, .reference-upload__thumb:focus-within .reference-upload__actions { opacity: 1; }
    .reference-upload__action { position: absolute; display: inline-flex; width: 22px; height: 22px; align-items: center; justify-content: center; border: 0; border-radius: 50%; color: #fff; background: rgba(31,35,41,.72); cursor: pointer; }
    .reference-upload__action:hover { background: rgba(31,35,41,.92); }
    .reference-upload__action--preview { top: 50%; left: 50%; font-size: 15px; transform: translate(-50%,-50%); }
    .reference-upload__action--delete { top: 2px; right: 2px; background: rgba(255,255,255,.94); color: #60656F; font-size: 13px; }
    .reference-upload__action--delete:hover { color: #F04444; background: #fff; }
    .reference-upload__content > .el-input { min-width: 0; }
    .reference-upload__content > .el-input .el-input__inner { height: 29px; border: 0; padding: 0; color: #4A4E55; background: transparent; font-size: 13px; }
    .prompt-column { position: sticky; top: 108px; min-height: 900px; padding: 22px 24px; border: 1px solid #F0F1F3; border-radius: 14px; background: #fff; }
    .prompt-column__head { display: flex; margin-bottom: 16px; align-items: center; justify-content: space-between; gap: 18px; color: #565A61; }
    .prompt-column__dot { display: inline-block; width: 8px; height: 8px; margin-right: 8px; border-radius: 50%; background: var(--sw-primary); }
    .prompt-column__meta { display: flex; align-items: center; gap: 24px; color: #7C8087; font-size: 14px; }
    .reference-direction-list { display: flex; flex-direction: column; gap: 16px; }
    .reference-direction-card { position: relative; padding: 22px 24px; border: 2px solid #E8EAF0; border-radius: 14px; background: #fff; cursor: pointer; }
    .reference-direction-card.is-selected { border-color: var(--sw-primary); }
    .reference-direction-card.is-generation-failed { border-color: #F56C6C; box-shadow: 0 0 0 1px rgba(245,108,108,.12); }
    .reference-direction-card__head { display: flex; margin-bottom: 14px; align-items: center; gap: 14px; padding-right: 36px; }
    .match-chip { display: inline-flex; height: 28px; align-items: center; padding: 0 12px; border-radius: 16px; color: #5C80D6; background: #EEF3FF; }
    .reference-direction-code { color: var(--sw-primary); font-size: 20px; font-weight: 600; }
    .reference-direction-name { padding-left: 14px; border-left: 1px solid #E6E8EC; color: #303133; font-size: 17px; }
    .reference-card-check { position: absolute; top: 24px; right: 24px; color: var(--sw-primary); font-size: 25px; }
    .reference-card-check.is-off { color: #C6CAD2; }
    .reference-card-error { display: inline-flex; width: 25px; height: 25px; align-items: center; justify-content: center; border: 2px solid #F56C6C; border-radius: 50%; color: #F56C6C; background: #fff; font-size: 15px; font-style: normal; font-weight: 700; line-height: 1; cursor: help; }
    .reference-detail-row { display: grid; grid-template-columns: 76px 1fr; margin: 9px 0; color: #3E4248; font-size: 15px; line-height: 24px; }
    .reference-detail-row dt { color: #777B82; }
    .reference-detail-row dd { margin: 0; }
    .reference-direction-summary { margin: 16px 0; color: #373B42; font-size: 15px; line-height: 25px; }
    .reference-card-actions { display: flex; gap: 16px; }
    .reference-card-actions .el-button { height: 40px; padding: 0 18px; border-radius: 10px; font-size: 15px; }
    .splice-panel-heading { display: flex; align-items: center; gap: 12px; color: #303133; font-size: 19px; font-weight: 600; }
    .splice-mode-chip { display: inline-flex; height: 26px; align-items: center; padding: 0 10px; border-radius: 14px; color: var(--sw-primary); background: #EDF4FF; font-size: 13px; font-weight: 500; }
    .splice-card { min-height: 530px; padding: 24px; border: 1px solid #E1E5EC; border-radius: 12px; background: #fff; }
    .splice-card__head { display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; }
    .splice-card__title-row { display: flex; align-items: baseline; gap: 12px; }
    .splice-card__title { color: var(--sw-primary); font-size: 21px; font-weight: 500; }
    .splice-card__method { color: #909399; font-size: 13px; font-weight: 400; }
    .splice-card__hint { margin: 8px 0 0; color: #777B82; font-size: 14px; }
    .splice-card__actions { display: flex; align-items: center; gap: 12px; }
    .splice-card__actions .el-button { height: 38px; border-radius: 8px; font-size: 15px; }
    .splice-card__actions .splice-action-button.el-button { min-width: 116px; height: 44px; padding: 0 20px; border: 1px solid #D9DDE5; border-radius: 10px; color: #303133; background: #fff; font-size: 15px; font-weight: 400; }
    .splice-card__actions .splice-action-button.el-button:hover, .splice-card__actions .splice-action-button.el-button:focus { border-color: #B9C1CC; color: #303133; background: #FAFBFC; }
    .splice-prompt-surface { min-height: 500px; margin-top: 24px; padding: 30px 28px; border: 1px solid #E1E5EC; border-radius: 10px; background: #fff; font-weight: 400; }
    .splice-natural-prompt { margin: 0; color: #24272C; font-size: 17px; line-height: 34px; overflow-wrap: anywhere; white-space: normal; word-break: break-all; }
    .splice-natural-prompt .splice-inline-image { display: inline-flex; width: 46px; height: 46px; margin: 1px 7px; padding: 2px; vertical-align: middle; border-radius: 10px; }
    .splice-natural-prompt .splice-inline-image img { border-radius: 7px; }
    .splice-natural-prompt .splice-token { height: 32px; margin: 2px 5px; padding: 0 11px; vertical-align: middle; border-radius: 8px; font-size: 14px; line-height: 30px; }
    .splice-natural-prompt .splice-edit-image-wrap { margin: 1px 7px; vertical-align: middle; }
    .splice-natural-prompt .splice-edit-image-wrap .splice-inline-image { margin: 0; flex: 0 0 46px; }
    .splice-natural-prompt .splice-direct-edit { word-break: break-all; }
    .splice-natural-prompt .splice-edit-note-remove { margin: 0 2px; vertical-align: middle; }
    .splice-natural-prompt .splice-add-note.el-button { margin: 0 3px; vertical-align: middle; }
    .splice-content-rows { display: flex; margin-top: 26px; flex-direction: column; gap: 20px; }
    .splice-content-row { display: grid; grid-template-columns: max-content minmax(0,1fr); align-items: start; gap: 12px; color: #303133; }
    .splice-content-row__label { padding-top: 6px; font-size: 16px; font-weight: 400; line-height: 24px; white-space: nowrap; }
    .splice-reference-flow { display: flex; min-width: 0; flex-direction: column; align-items: stretch; gap: 14px; }
    .splice-inline-reference { display: grid; width: 100%; min-width: 0; grid-template-columns: 76px minmax(0,1fr); align-items: start; gap: 10px; }
    .splice-inline-reference.is-text-only { grid-template-columns: minmax(0,1fr); }
    .splice-inline-image { display: inline-flex; width: 76px; height: 64px; flex: 0 0 76px; padding: 4px; align-items: center; justify-content: center; overflow: hidden; border: 1px solid #DDE1E8; border-radius: 9px; background: #fff; cursor: zoom-in; }
    .splice-inline-image img { width: 100%; height: 100%; border-radius: 5px; object-fit: cover; }
    .splice-reference-sentence { min-width: 0; padding-top: 4px; color: #30343A; font-size: 15px; line-height: 26px; overflow-wrap: anywhere; white-space: pre-wrap; word-break: break-all; }
    .splice-inline-punctuation { color: #30343A; font-size: 15px; }
    .splice-text-reference-list { display: flex; margin-top: 22px; flex-direction: column; gap: 10px; }
    .splice-text-only-reference, .splice-standalone-note { margin: 0; color: #3D424A; font-size: 15px; line-height: 25px; }
    .splice-tag-groups { display: flex; margin-top: 34px; flex-direction: column; gap: 20px; }
    .splice-tag-line { display: grid; grid-template-columns: max-content minmax(0,1fr); align-items: start; gap: 12px; color: #303133; }
    .splice-tag-line__label { padding-top: 6px; font-size: 16px; font-weight: 400; line-height: 24px; white-space: nowrap; }
    .splice-tag-values { display: flex; min-width: 0; flex-wrap: wrap; align-items: center; gap: 10px; }
    .splice-token { display: inline-flex; height: 36px; align-items: center; gap: 8px; padding: 0 12px; border: 1px solid #DDE1E8; border-radius: 8px; color: #30343A; background: #fff; font-size: 14px; }
    button.splice-token { cursor: pointer; }
    button.splice-token:hover { border-color: #AEB7C3; background: #FAFBFC; }
    button.splice-token:disabled { cursor: default; opacity: .7; }
    .splice-token__close { color: #657080; font-size: 16px; font-weight: 400; }
    .splice-edit-intro { display: grid; margin: 0; grid-template-columns: max-content minmax(0,1fr); align-items: start; color: #24272C; font-size: 17px; line-height: 30px; }
    .splice-edit-prefix { white-space: nowrap; }
    .splice-edit-value { display: block; min-width: 0; overflow-wrap: anywhere; white-space: pre-wrap; word-break: break-word; }
    .splice-reference-sentence--edit { display: grid; grid-template-columns: max-content minmax(0,1fr); align-items: start; }
    .splice-direct-edit { display: inline; min-width: 2em; padding: 1px 2px; border: 0; border-radius: 4px; outline: 0; color: inherit; background: transparent; font: inherit; line-height: inherit; overflow-wrap: anywhere; white-space: pre-wrap; word-break: break-word; cursor: text; }
    .splice-direct-edit:focus { background: #F3F7FF; box-shadow: 0 0 0 2px #E5EFFF; }
    .splice-direct-edit:empty::before { color: #A4A8AF; content: attr(data-placeholder); pointer-events: none; }
    .splice-edit-image-wrap { position: relative; display: inline-flex; flex: 0 0 auto; }
    .splice-edit-image-remove { position: absolute; top: -7px; right: -7px; display: inline-flex; width: 21px; height: 21px; align-items: center; justify-content: center; border: 1px solid #D9DDE5; border-radius: 50%; color: #6F7680; background: #fff; font-size: 14px; line-height: 1; cursor: pointer; }
    .splice-edit-image-remove:hover { border-color: #F04444; color: #F04444; }
    .splice-edit-copy { color: #30343A; font-size: 15px; line-height: 26px; }
    .splice-edit-note-remove { display: inline-flex; width: 22px; height: 22px; margin-left: 3px; vertical-align: middle; align-items: center; justify-content: center; border: 0; border-radius: 50%; color: #8B919A; background: transparent; font-size: 16px; cursor: pointer; }
    .splice-edit-note-remove:hover { color: #F04444; background: #FFF2F2; }
    .splice-add-note.el-button { margin-left: 2px; padding: 0; color: var(--sw-primary); font-size: 13px; }
    .splice-editor { margin: 0; }
    .splice-editor .el-textarea__inner { min-height: 390px !important; padding: 18px; border-radius: 8px; font-size: 15px; line-height: 1.8; }
    .splice-card__footer { display: flex; margin-top: 16px; align-items: center; color: #9AA0AA; font-size: 13px; }
    .reference-image-dialog .el-dialog__body { padding-top: 10px; }
    .reference-image-preview { display: flex; min-height: 420px; align-items: center; justify-content: center; overflow: hidden; border-radius: 10px; background: #F5F7FA; }
    .reference-image-preview img { display: block; max-width: 100%; max-height: 68vh; object-fit: contain; }
    .prompt-initial-empty { display: flex; min-height: 820px; align-items: center; justify-content: center; color: #8B9098; background: #fff; text-align: center; }
    .prompt-empty-logo { position: relative; display: inline-flex; width: 92px; height: 92px; margin-bottom: 22px; align-items: center; justify-content: center; overflow: hidden; border: 7px solid #E4F4FF; border-radius: 50%; background: #DFF6FF; box-shadow: 0 8px 20px rgba(32,143,255,.12); }
    .prompt-empty-logo::before, .prompt-empty-logo::after { position: absolute; width: 36px; height: 70px; border-radius: 50%; background: #55D8F4; content: ""; transform: rotate(27deg); }
    .prompt-empty-logo::after { margin-left: 30px; background: #248CFF; transform: rotate(33deg); }
    .prompt-initial-empty strong { display: block; margin-bottom: 10px; color: #303133; font-size: 21px; font-weight: 600; }
    .prompt-initial-empty p { margin: 0; color: #8A8E95; font-size: 15px; line-height: 25px; }
    .reference-empty { display: flex; min-height: 720px; align-items: center; justify-content: center; color: #9A9EA5; text-align: center; }
    .reference-page-shell { padding: 24px 48px 50px; }
    .reference-page-shell .sw-business-card { border-radius: 14px; }
    .reference-secondary-page { margin: 24px 48px 50px; }
    .creative-reference-page.sw-business-card { min-height: 1200px; padding: 0; border-radius: 0; background: #F7F7F8; box-shadow: none; }
    .creative-hero { display: flex; min-height: 122px; align-items: center; justify-content: space-between; gap: 20px; padding: 26px 48px; border-bottom: 1px solid #ECEEF2; background: #fff; }
    .creative-hero h1 { margin: 0 0 10px; color: #303133; font-size: 22px; }
    .creative-hero p { margin: 0; color: #7A7D84; font-size: 16px; }
    .creative-hero__actions { display: flex; align-items: center; gap: 16px; }
    .creative-hero__actions .el-button { height: 52px; padding: 0 28px; border-radius: 27px; font-size: 18px; }
    .creative-hero__back.el-button { border: 0; color: #60646B; background: transparent; }
    .creative-reference-layout { display: grid; grid-template-columns: 360px minmax(900px, 1fr); gap: 24px; padding: 24px 48px 50px; align-items: start; }
    .creative-side { display: flex; flex-direction: column; gap: 18px; }
    .creative-setting-card { padding: 24px; border: 1px solid #F0F1F3; border-radius: 14px; background: #fff; }
    .creative-setting-card__head { display: flex; margin-bottom: 22px; align-items: center; justify-content: space-between; color: #303133; font-size: 18px; font-weight: 600; }
    .creative-setting-card__head span:last-child { color: #858990; font-size: 15px; font-weight: 400; }
    .format-options { display: flex; gap: 24px; }
    .format-options .el-checkbox { margin-right: 0; font-size: 16px; }
    .creative-parameter-row { display: grid; grid-template-columns: 72px 1fr; margin-top: 18px; align-items: center; gap: 10px; color: #4F5359; font-size: 16px; }
    .creative-parameter-row .el-input__inner { height: 48px; border-radius: 12px; font-size: 16px; }
    .creative-result-panel { padding: 24px; border: 1px solid #F0F1F3; border-radius: 14px; background: #fff; }
    .creative-result-head { display: flex; margin-bottom: 18px; align-items: center; justify-content: space-between; gap: 20px; color: #5A5E65; font-size: 16px; }
    .creative-result-title { display: flex; align-items: center; gap: 9px; }
    .creative-result-title::before { display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: var(--sw-primary); content: ""; }
    .creative-result-help { color: #7B7F86; }
    .creative-filter-pills { margin-bottom: 20px; }
    .creative-filter-pills .el-radio-button__inner { height: 44px; padding: 0 22px; border: 1px solid #E5E7EC !important; border-radius: 24px !important; line-height: 42px; box-shadow: none !important; font-size: 16px; }
    .creative-filter-pills .el-radio-button:first-child .el-radio-button__inner { border-left: 1px solid #E5E7EC; }
    .creative-filter-pills .el-radio-button__orig-radio:checked + .el-radio-button__inner { border-color: var(--sw-primary) !important; color: #fff; background: var(--sw-primary); box-shadow: 0 8px 14px rgba(0,100,255,.13) !important; }
    .creative-reference-grid { display: grid; grid-template-columns: repeat(3,minmax(260px,1fr)); gap: 20px; }
    .creative-reference-card { overflow: hidden; border: 1px solid #E8EAF0; border-radius: 14px; background: #fff; }
    .creative-reference-card.is-failed { border-color: #F0C987; }
    .creative-reference-image { position: relative; height: 430px; overflow: hidden; background: #F1F2F4; }
    .creative-reference-image img { width: 100%; height: 100%; object-fit: cover; }
    .creative-reference-image.is-failed { display: flex; align-items: center; justify-content: center; background: #FFF9F0; }
    .creative-failed-state { display: flex; max-width: 250px; align-items: center; flex-direction: column; color: #8A5A14; text-align: center; }
    .creative-failed-state__icon { display: inline-flex; width: 62px; height: 62px; margin-bottom: 16px; align-items: center; justify-content: center; border-radius: 50%; color: #E6A23C; background: #FFF0D0; font-size: 29px; }
    .creative-failed-state strong { color: #6B4A16; font-size: 20px; }
    .creative-failed-state p { margin: 9px 0 0; color: #A06B1D; font-size: 14px; line-height: 21px; }
    .creative-direction-chip { position: absolute; top: 14px; left: 14px; z-index: 1; padding: 6px 12px; border-radius: 9px; color: #3F4349; background: rgba(255,255,255,.92); font-size: 15px; }
    .creative-reference-body { padding: 16px; border-top: 14px solid #F7F7F8; }
    .creative-code-row { display: flex; align-items: center; justify-content: space-between; }
    .creative-code-chip { display: inline-flex; height: 28px; align-items: center; padding: 0 12px; border-radius: 16px; color: var(--sw-primary); background: #EEF3FF; }
    .creative-delete.el-button { padding: 4px; color: #333; font-size: 20px; }
    .creative-reference-name { margin: 10px 0 7px; color: #34373D; font-size: 18px; font-weight: 600; }
    .creative-reference-desc { min-height: 42px; margin: 0 0 10px; color: #73777E; font-size: 14px; line-height: 21px; }
    .creative-reference-tags { min-height: 30px; }
    .creative-reference-tags .el-tag { margin-right: 6px; border: 0; border-radius: 14px; color: #71757B; background: #F1F2F4; }
    .creative-refine.el-button { width: 100%; height: 50px; margin-top: 14px; border-radius: 10px; font-size: 18px; }
    .creative-result-empty { display: flex; min-height: 650px; align-items: center; justify-content: center; }
    .required-mark { margin-left: 4px; color: #F56C6C; font-size: 16px; line-height: 1; vertical-align: middle; }
    .field-page { min-height: 1080px; padding: 28px 48px 50px; background: #F7F7F8; }
    .secondary-page-heading { display: flex; margin-bottom: 24px; align-items: flex-start; justify-content: space-between; gap: 24px; }
    .secondary-page-heading__main { display: flex; min-width: 0; align-items: flex-start; gap: 10px; }
    .secondary-page-back.el-button { display: inline-flex; width: 32px; min-width: 32px; height: 32px; margin: -2px 0 0; flex: 0 0 32px; align-items: center; justify-content: center; padding: 0; border: 0; border-radius: 6px; color: #606266; background: transparent; box-shadow: none; }
    .secondary-page-back.el-button:hover, .secondary-page-back.el-button:focus { border: 0; color: #303133; background: #ECEEF2; box-shadow: none; }
    .secondary-page-back.el-button i { margin: 0; font-size: 20px; font-weight: 400; }
    .secondary-page-copy { min-width: 0; }
    .secondary-page-title { margin: 0 0 8px; color: #303133; font-size: 22px; font-weight: 600; }
    .secondary-page-subtitle { margin: 0; color: #858990; line-height: 22px; }
    .secondary-page-heading > .meta-right { flex: 0 0 auto; color: #858990; text-align: right; }
    .field-page__title { margin: 0 0 8px; color: #303133; font-size: 22px; }
    .field-page__desc { margin: 0 0 22px; color: #858990; line-height: 22px; }
    .field-page__card { padding: 22px 24px; border: 1px solid #F0F1F3; border-radius: 14px; background: #fff; }
    .field-page__head { display: flex; margin-bottom: 18px; align-items: center; justify-content: space-between; }
    .field-page__head h2 { margin: 0; color: #303133; font-size: 18px; }
    @media (max-width: 980px) {
      .reference-header { gap: 18px; padding: 0 24px; }
      .reference-steps { min-width: 500px; gap: 8px; }
      .reference-step { min-width: 132px; padding: 0 18px; }
      .reference-tools { gap: 8px; }
      .reference-model { width: 205px; }
      .planning-reference-layout { grid-template-columns: 1fr; padding: 20px 24px 40px; }
      .planning-hero { padding: 24px; }
      .prompt-column { position: static; }
      .creative-reference-layout { grid-template-columns: 300px minmax(720px,1fr); padding: 20px 24px 40px; }
      .creative-reference-grid { grid-template-columns: repeat(2,minmax(280px,1fr)); }
      .creative-grid { grid-template-columns: repeat(2, minmax(230px, 1fr)); }
    }
  </style>
</head>
<body>
  <div id="app" class="prototype-scale" data-prototype-layout="user-reference-ai-design" data-style-profile="ai-product-design-white" data-prototype-scale="70" data-prd-annotation="enabled" data-prd-annotation-priority="highest" data-requirement-id="ai-product-design" data-requirement-version="v1.2" data-generated-at="2026-10-10">
    <div class="sw-shell">
      <section class="sw-main">
        <header class="reference-header" data-layout-section="top-toolbar">
          <div class="reference-brand"><span class="reference-brand__mark"></span><span>AI 产品设计</span></div>
          <nav class="reference-steps" data-layout-section="tab-navigation">
            <button class="reference-step" :class="{'is-active':currentPage==='planning'}" type="button" @click="goPage('planning')">企划输入</button>
            <span class="reference-step-line"></span>
            <button class="reference-step" :class="{'is-active':currentPage==='creative'}" type="button" @click="goPage('creative')">生成创意</button>
            <span class="reference-step-line"></span>
            <button class="reference-step" type="button" @click="$message.info('高清导出沿用 V1.0，本次原型不重建该页面')">高清导出</button>
          </nav>
          <div class="reference-tools">
            <el-select class="reference-model" value="Nano Banana 2" disabled><el-option label="Nano Banana 2" value="Nano Banana 2"></el-option></el-select>
            <el-tooltip content="历史设计" placement="bottom"><el-button class="reference-icon-button" icon="el-icon-refresh-left" @click="goPage('history')"></el-button></el-tooltip>
            <el-popover placement="bottom-end" width="270" trigger="click">
              <div class="reference-settings">
                <div class="reference-settings__row"><span>当前版本</span><el-tag size="small">v1.2</el-tag></div>
                <div class="reference-settings__row"><span>演示角色</span><el-select v-model="roleMode" size="small" style="width:135px" @change="handleRoleChange"><el-option label="设计师" value="designer"></el-option><el-option label="只读访客" value="viewer"></el-option></el-select></div>
                <div class="reference-settings__row"><span>演示生图结果</span><el-select v-model="imageScenario" size="small" style="width:135px" data-field-description="仅用于原型演示；正式产品由后端生成结果决定，不允许用户选择。"><el-option label="全部成功" value="success"></el-option><el-option label="部分成功" value="partial"></el-option><el-option label="全部失败" value="allFailed"></el-option><el-option label="处理中/连接异常" value="processing"></el-option></el-select></div>
                <el-button type="text" icon="el-icon-setting" @click="goPage('fields')">进入字段管理</el-button><br>
                <el-button type="text" icon="el-icon-data-analysis" @click="acceptanceVisible=true">查看 V1.1 验收口径</el-button>
                <div class="field-description">原型数据均为模拟数据</div>
              </div>
              <el-button slot="reference" class="reference-icon-button" icon="el-icon-setting"></el-button>
            </el-popover>
            <el-button class="new-design" type="text" icon="el-icon-edit-outline" @click="startNewDesign">新设计</el-button>
          </div>
        </header>

        <main class="sw-workspace" data-layout-section="workspace">
          <section v-if="currentPage==='planning'" class="sw-business-card reference-planning-page" data-annotation-page="planning-input" data-annotation-title="企划输入">
            <section class="planning-hero" data-user-task="选择提示词生成方式并生成文字方案">
              <div data-flow-step="entry">
                <div class="planning-hero__title-row">
                  <h1>1. 企划输入</h1>
                  <span v-if="isCurrentPromptOutdated" class="planning-outdated-hint">已修改，方案待更新</span>
                </div>
                <p>填写左侧需求 → 点击按钮主体执行当前方式；点击小三角可切换另一种提示词生成方式</p>
              </div>
              <div class="planning-hero__actions" data-flow-step="action">
                <el-dropdown class="prompt-mode-dropdown" split-button type="primary" trigger="click" :disabled="isViewer || promptLoading" @click="runCurrentPromptMode" @command="switchPromptMode">
                  <i :class="promptMode==='ai' ? 'el-icon-magic-stick' : 'el-icon-document'"></i>&nbsp;{{ promptActionLabel }}
                  <el-dropdown-menu slot="dropdown" class="prompt-mode-menu">
                    <el-dropdown-item :command="promptMode==='ai' ? 'splice' : 'ai'" :icon="promptMode==='ai' ? 'el-icon-document' : 'el-icon-magic-stick'">{{ alternatePromptActionLabel }}</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <el-button v-if="hasCurrentPromptResult && !showRetryButton" type="primary" :loading="imageLoading" :disabled="isViewer || !activeGenerationDirections.length" @click="requestGenerateCreative">{{ imageLoading ? '生成中' : '生成创意' }} <i class="el-icon-arrow-right el-icon--right"></i></el-button>
                <el-button v-if="showRetryButton" type="primary" icon="el-icon-refresh" @click="requestGenerateCreative" :disabled="isViewer">重新生成创意</el-button>
              </div>
            </section>

            <div v-if="planningMessage && (planningMessageType==='error' || planningMessageType==='warning')" class="planning-result-note" data-flow-step="result"><el-alert :title="planningMessage" :type="planningMessageType" :closable="false" show-icon></el-alert></div>

            <div class="planning-reference-layout">
              <el-form ref="planningForm" :model="planning" label-position="top" class="planning-form-column">
                <section class="reference-form-card">
                  <h2 class="reference-form-card__title"><span>品类选择<span class="required-mark" aria-label="必填">*</span></span></h2>
                  <el-radio-group v-model="planning.category" class="category-pills" :disabled="isViewer" data-field-description="品类选择：必填；可选内裤、文胸、袜子、吊带；决定创意方向与约束推荐。"><el-radio-button v-for="item in categories" :key="item" :label="item">{{ item }}</el-radio-button></el-radio-group>
                  <div class="field-description">当前品类会影响创意方向与工艺约束的推荐内容。</div>
                </section>

                <section class="reference-form-card">
                  <h2 class="reference-form-card__title"><span>企划需求<span class="required-mark" aria-label="必填">*</span></span><span class="reference-form-card__hint">一句话讲清要做什么、卖给谁、核心卖点</span></h2>
                  <el-input v-model="planning.need" type="textarea" :rows="3" maxlength="500" show-word-limit :disabled="isViewer" placeholder="一句话讲清需求是什么" data-field-description="企划需求：必填；最多 500 字；沿用 V1.0 原有校验时机与文案。"></el-input>
                </section>

                <section class="reference-form-card">
                  <h2 class="reference-form-card__title">参考图片</h2>
                  <div v-for="kind in imageKinds" :key="kind.key" class="reference-image-row" data-req-ids="REQ-009 REQ-010 REQ-011 REQ-012" @click="activeImageKind=kind.key" @focusin="activeImageKind=kind.key">
                    <div class="reference-image-label">{{ kind.label }}（{{ planning.images[kind.key] ? '1/1' : '0/1' }}）</div>
                    <div class="reference-upload" :class="{'is-active':activeImageKind===kind.key}" tabindex="0" :aria-label="kind.label+'参考图片格，可直接粘贴图片'" :data-reference-kind="kind.key" :data-field-description="kind.label+'图片：选填；每组最多 1 张；选中本格后直接粘贴，替换后在方案中展示缩略图和对应说明。'">
                      <el-upload class="reference-upload__trigger" action="#" accept="image/*" :auto-upload="false" :show-file-list="false" :disabled="isViewer" :on-change="function(file){setImage(kind.key,file)}">
                        <span class="reference-upload__thumb">
                          <img v-if="planning.imagePreviews[kind.key]" :src="planning.imagePreviews[kind.key]" :alt="kind.label+'参考图'">
                          <i v-else :class="planning.images[kind.key] ? 'el-icon-picture-outline' : 'el-icon-plus'"></i>
                          <span v-if="planning.imagePreviews[kind.key]" class="reference-upload__actions">
                            <button type="button" class="reference-upload__action reference-upload__action--preview" aria-label="查看图片" @click.stop.prevent="previewPlanningImage(kind.key)"><i class="el-icon-view"></i></button>
                            <button type="button" class="reference-upload__action reference-upload__action--delete" aria-label="删除文件" @click.stop.prevent="removePlanningImage(kind.key)"><i class="el-icon-close"></i></button>
                          </span>
                        </span>
                      </el-upload>
                      <div class="reference-upload__content"><span v-if="!planning.imageNotes[kind.key]" class="reference-upload__hint">{{ planning.images[kind.key] ? '已添加图片 · 可粘贴替换' : '点击上传 · 也可直接粘贴' }}</span><el-input v-model="planning.imageNotes[kind.key]" maxlength="100" :disabled="isViewer" placeholder="填写说明"></el-input></div>
                    </div>
                  </div>
                </section>

                <section class="reference-form-card main-color-card" data-req-ids="REQ-001 REQ-006 REQ-007 REQ-008">
                  <div class="main-color-card__header" data-req-id="REQ-001"><h2 class="reference-form-card__title">产品配色</h2><div class="main-color-card__header-side"><p class="reference-form-card__hint main-color-card__subtitle">为生成创意提供配色参考</p><div v-if="planning.mainColor.hex" class="main-color-card__actions"><el-button size="small" icon="el-icon-edit-outline" :disabled="isViewer" @click="openColorDialog('pantone')">调整配色</el-button><el-button type="text" size="small" :disabled="isViewer" @click="clearMainColor">清空</el-button></div></div></div>
                  <div v-if="planning.mainColor.hex" class="palette-preview" :class="{'is-reordering':paletteDragIndex!==null}">
                    <div class="palette-preview__item palette-preview__item--main" :class="{'is-selected':paletteSelectedHex===planning.mainColor.hex,'is-dragging':paletteDragIndex===0,'is-drop-target':paletteDropIndex===0&&paletteDragIndex!==null}" :style="{'--palette-main-color':planning.mainColor.hex}" :data-planning-palette-index="0" data-hover-tip="点击选中颜色；按住拖动排序，移到第一位设为主色" @click="selectPlanningPaletteColor(planning.mainColor)" @pointerdown.prevent="startPaletteDrag($event,0)" @pointermove="movePaletteDrag" @pointerup="finishPaletteDrag" @pointercancel="endPaletteDrag" @lostpointercapture="endPaletteDrag"><span class="palette-preview__swatch" :style="{background:planning.mainColor.hex}"></span><div class="palette-preview__info"><span class="palette-preview__role">主色</span><strong class="palette-preview__code">{{ (planning.mainColor.pantone ? planning.mainColor.pantone+' TPG' : planning.mainColor.hex) }}</strong><small v-if="planning.mainColor.pantone" class="palette-preview__hex">{{ planning.mainColor.hex }}</small></div><button v-if="!isViewer" type="button" class="palette-preview__remove" aria-label="删除主色" title="删除主色" draggable="false" @pointerdown.stop @click.stop="removePaletteColor(0)">×</button></div>
                    <div v-for="(item,index) in planning.additionalColors" :key="item.hex" class="palette-preview__item" :class="{'is-selected':paletteSelectedHex===item.hex,'is-dragging':paletteDragIndex===index+1,'is-drop-target':paletteDropIndex===index+1&&paletteDragIndex!==null}" :data-planning-palette-index="index+1" data-hover-tip="点击选中颜色；按住拖动排序，移到第一位设为主色" @click="selectPlanningPaletteColor(item)" @pointerdown.prevent="startPaletteDrag($event,index+1)" @pointermove="movePaletteDrag" @pointerup="finishPaletteDrag" @pointercancel="endPaletteDrag" @lostpointercapture="endPaletteDrag"><span class="palette-preview__swatch" :style="{background:item.hex}"></span><div class="palette-preview__info"><span class="palette-preview__role">参考色</span><strong class="palette-preview__code">{{ (item.pantone ? item.pantone+' TPG' : item.hex) }}</strong><small v-if="item.pantone" class="palette-preview__hex">{{ item.hex }}</small></div><button v-if="!isViewer" type="button" class="palette-preview__remove" :aria-label="'删除参考色 '+((item.pantone ? item.pantone+' TPG' : item.hex))" :title="'删除参考色 '+((item.pantone ? item.pantone+' TPG' : item.hex))" draggable="false" @pointerdown.stop @click.stop="removePaletteColor(index+1)">×</button></div>
                  </div>
                  <div v-else class="main-color-card__empty"><el-button size="small" icon="el-icon-brush" :disabled="isViewer" @click="openColorDialog('pantone')">选择配色</el-button></div>
                </section>

                <section class="reference-form-card">
                  <h2 class="reference-form-card__title"><span>参考竞品及文字说明</span><span class="reference-form-card__hint">说明竞品色彩、版型、工艺和卖点特征</span></h2>
                  <el-input v-model="planning.competitor" type="textarea" :rows="2" maxlength="300" show-word-limit :disabled="isViewer" placeholder="填写竞品说明（选填）" data-field-description="竞品文字说明：选填；最多 300 字；空值不输出到复制文本。"></el-input>
                </section>

                <section class="reference-form-card">
                  <h2 class="reference-form-card__title">创意方向（可多选）</h2>
                  <el-checkbox-group v-model="planning.directions" class="tag-pills" :disabled="isViewer" data-field-description="创意方向：选填多选；来源为字段管理；空值时不写入拼接提示词。"><el-checkbox-button v-for="item in directionOptions" :key="item" :label="item">{{ item }}</el-checkbox-button></el-checkbox-group>
                </section>

                <section class="reference-form-card">
                  <h2 class="reference-form-card__title">工艺 / 成本 / 面料约束（可多选）</h2>
                  <el-checkbox-group v-model="planning.constraints" class="tag-pills" :disabled="isViewer" data-field-description="工艺约束：选填多选；来源为字段管理并按品类过滤。"><el-checkbox-button v-for="item in constraintOptions" :key="item" :label="item">{{ item }}</el-checkbox-button></el-checkbox-group>
                </section>

                <section class="reference-form-card">
                  <h2 class="reference-form-card__title"><span>禁止项（AI 必须规避）</span><span class="reference-form-card__hint">沿用 V1.0，不修改规则</span></h2>
                  <el-checkbox-group v-model="planning.forbidden" class="tag-pills forbidden-pills" data-req-ids="REQ-013 REQ-014 REQ-015 REQ-016" :disabled="isViewer" data-field-description="禁止项：选填多选；沿用 V1.0；在 Prompt 中优先级高于风格建议。"><el-checkbox-button v-for="item in forbiddenOptions" :key="item" :label="item">{{ item }}</el-checkbox-button></el-checkbox-group>
                </section>
              </el-form>

              <section class="prompt-column" data-user-task="生成拼接方案或三套 AI 文字方案">
                <template v-if="promptMode==='splice'">
                  <article v-if="hasSplicedPrompt" class="splice-card" data-flow-step="result" data-annotation-identity="SPLICE-1">
                    <div class="splice-card__head">
                      <div><div class="splice-card__title-row"><span class="splice-card__title">拼接方案</span><span class="splice-card__method">字段直接拼接</span></div><p class="splice-card__hint">该方案将作为后续生成创意的提示词</p></div>
                      <div class="splice-card__actions" data-flow-step="action">
                        <template v-if="!splicedEditing"><el-button class="splice-action-button" @click="copyText(splicedPrompt,'方案已复制')">复制方案</el-button><el-button class="splice-action-button" @click="beginSpliceEdit">编辑方案</el-button></template>
                        <template v-else><el-button class="splice-action-button" @click="cancelSpliceEdit">取消编辑</el-button><el-button type="primary" @click="saveSplicedPrompt">保存方案</el-button></template>
                      </div>
                    </div>
                    <div class="splice-prompt-surface">
                      <p :class="['splice-natural-prompt',{'is-editing':splicedEditing}]"><span>本次设计品类为{{ activeSpliceScheme.category }}，企划需求是</span><span v-if="splicedEditing" class="splice-direct-edit" contenteditable="true" spellcheck="false" data-splice-edit-field="need" data-placeholder="请输入企划需求" @input="limitSpliceEditable($event,500)" @blur="commitSpliceDraftNeed" @paste="pasteSplicePlainText" @keydown.enter.prevent>{{ spliceEditDraft.need }}</span><span v-else>{{ spliceScheme.need }}</span><span>。</span><template v-if="activeSpliceScheme.mainColor && activeSpliceScheme.mainColor.hex"><span>产品主体面料主色固定为</span><span class="splice-token">{{ activeSpliceScheme.mainColor.hex }}</span><span v-if="activeSpliceScheme.mainColor.pantone">（{{ pantoneOriginText(activeSpliceScheme.mainColor) }} {{ activeSpliceScheme.mainColor.pantone }}，未核验）</span><span>；不要用其他颜色替代主体主色。</span></template><template v-if="activeSpliceScheme.additionalColors && activeSpliceScheme.additionalColors.length"><span>其他选色可参考</span><span v-for="item in activeSpliceScheme.additionalColors" :key="item.hex" class="splice-token">{{ item.hex }}<small v-if="item.pantone"> · {{ pantoneOriginText(item) }} {{ item.pantone }}</small></span><span>；可自由搭配，不要求全部使用。</span></template><template v-if="activeSpliceReferenceGroups.length"><template v-for="(item,index) in activeSpliceReferenceGroups"><template v-if="item.preview"><span>{{ item.imageLead }}</span><span v-if="splicedEditing" class="splice-edit-image-wrap"><button type="button" class="splice-inline-image" :aria-label="'查看'+item.label+'参考图片'" @click="previewSpliceReference(item)"><img :src="item.preview" :alt="item.label+'参考图'"></button><button type="button" class="splice-edit-image-remove" :aria-label="'删除'+item.label+'参考图片'" @click="removeSpliceDraftReference(item.key)">×</button></span><button v-else type="button" class="splice-inline-image" :aria-label="'查看'+item.label+'参考图片'" @click="previewSpliceReference(item)"><img :src="item.preview" :alt="item.label+'参考图'"></button><span>{{ item.imageTail }}</span><template v-if="item.noteItem||item.note"><span>，{{ item.noteLead }}</span><span v-if="splicedEditing" class="splice-direct-edit" contenteditable="true" spellcheck="false" :data-splice-note-key="item.key" data-placeholder="补充参考说明" @input="limitSpliceEditable($event,300)" @blur="commitSpliceDraftNote(item.noteItem,$event)" @paste="pasteSplicePlainText" @keydown.enter.prevent>{{ item.note }}</span><span v-else>{{ item.note }}</span><button v-if="splicedEditing" type="button" class="splice-edit-note-remove" :aria-label="'删除'+item.label+'参考说明'" @click="removeSpliceDraftTextReference(item.key)">×</button></template><el-button v-else-if="splicedEditing" type="text" class="splice-add-note" @click="addSpliceDraftTextReference(item.key,item.label)">添加说明</el-button></template><template v-else><span>{{ item.noteLead }}</span><span v-if="splicedEditing" class="splice-direct-edit" contenteditable="true" spellcheck="false" :data-splice-note-key="item.key" data-placeholder="补充参考说明" @input="limitSpliceEditable($event,300)" @blur="commitSpliceDraftNote(item.noteItem,$event)" @paste="pasteSplicePlainText" @keydown.enter.prevent>{{ item.note }}</span><span v-else>{{ item.note }}</span><button v-if="splicedEditing" type="button" class="splice-edit-note-remove" :aria-label="'删除'+item.label+'参考说明'" @click="removeSpliceDraftTextReference(item.key)">×</button></template><span>{{ index===activeSpliceReferenceGroups.length-1 ? '。' : '；' }}</span></template></template><template v-if="activeSpliceScheme.directions.length"><span>创意方向聚焦</span><template v-for="item in activeSpliceScheme.directions"><button v-if="splicedEditing" :key="'direction-edit-'+item" type="button" class="splice-token" @click="removeSpliceDraftTag('directions',item)">{{ item }}<span class="splice-token__close">×</span></button><span v-else :key="'direction-view-'+item" class="splice-token">{{ item }}</span></template><span>{{ activeSpliceScheme.constraints.length||activeSpliceScheme.forbidden.length ? '；' : '。' }}</span></template><template v-if="activeSpliceScheme.constraints.length"><span>工艺与面料上采用</span><template v-for="item in activeSpliceScheme.constraints"><button v-if="splicedEditing" :key="'constraint-edit-'+item" type="button" class="splice-token" @click="removeSpliceDraftTag('constraints',item)">{{ item }}<span class="splice-token__close">×</span></button><span v-else :key="'constraint-view-'+item" class="splice-token">{{ item }}</span></template><span>做法{{ activeSpliceScheme.forbidden.length ? '；' : '。' }}</span></template><template v-if="activeSpliceScheme.forbidden.length"><span>禁止项包含</span><template v-for="item in activeSpliceScheme.forbidden"><button v-if="splicedEditing" :key="'forbidden-edit-'+item" type="button" class="splice-token" @click="removeSpliceDraftTag('forbidden',item)">{{ item }}<span class="splice-token__close">×</span></button><span v-else :key="'forbidden-view-'+item" class="splice-token">{{ item }}</span></template><span>。</span></template></p>
                    </div>
                    <div class="splice-card__footer"><span>来源：{{ spliceSourceSummary }}（仅包含非空字段）</span></div>
                  </article>
                  <div v-else class="prompt-initial-empty" data-flow-step="result"><div><span class="prompt-empty-logo" aria-hidden="true"></span><strong>请先填写左侧需求</strong><p>点击「拼接提示词」按钮，将左侧信息拼接为1个文字方案</p></div></div>
                </template>
                <template v-else>
                <div v-if="directions.length" class="prompt-column__head">
                  <span class="splice-panel-heading">提示词方案 <span class="splice-mode-chip">AI 智能生成</span></span>
                  <span v-if="directions.length" class="prompt-column__meta"><span>已保存 {{ directions.length }} 套文字方案</span><span>已选 {{ selectedDirections.length }} / {{ directions.length }} 方案</span></span>
                  <span v-else class="prompt-column__meta">尚未生成 AI 方案</span>
                </div>
                <div v-if="promptLoading" class="reference-empty" v-loading="true" element-loading-text="AI 正在生成 3 套文字方案"></div>
                <div v-else-if="!directions.length" class="prompt-initial-empty" data-flow-step="result"><div><span class="prompt-empty-logo" aria-hidden="true"></span><strong>请先填写左侧需求</strong><p>点击「生成提示词」按钮，AI将整理出3个文字方案</p></div></div>
                <div v-else class="reference-direction-list" data-flow-step="result">
                  <article v-for="item in directions" :key="item.id" class="reference-direction-card" :class="{'is-selected':item.selected,'is-generation-failed':showRetryButton&&item.selected}" :data-annotation-identity="item.id" @click="toggleDirection(item)">
                    <div class="reference-direction-card__head"><span class="match-chip">匹配 {{ item.match }}%</span><span class="reference-direction-code">方案 {{ item.code }}</span><span class="reference-direction-name">{{ item.name }}</span></div>
                    <el-tooltip v-if="showRetryButton&&item.selected" :content="directionFailureReason(item)" placement="top" effect="dark"><span class="reference-card-check reference-card-error" aria-label="生成失败，悬浮查看原因" @click.stop>!</span></el-tooltip>
                    <i v-else class="reference-card-check" :class="item.selected ? 'el-icon-circle-check' : 'el-icon-circle-check is-off'"></i>
                    <dl>
                      <div class="reference-detail-row"><dt>角色</dt><dd>{{ item.role }}</dd></div>
                      <div class="reference-detail-row"><dt>风格</dt><dd>{{ item.style }}</dd></div>
                      <div class="reference-detail-row"><dt>配色</dt><dd>{{ item.colors }}</dd></div>
                      <div class="reference-detail-row"><dt>版型</dt><dd>{{ item.shape }}</dd></div>
                      <div class="reference-detail-row"><dt>面料</dt><dd>{{ item.material }}</dd></div>
                    </dl>
                    <p class="reference-direction-summary">{{ item.idea }}</p>
                    <div class="reference-card-actions" @click.stop><el-button @click="copyText(item.prompt,'详细 Prompt 已复制')">拷贝详细Prompt</el-button><el-button @click="showPrompt(item)">修改提示词</el-button></div>
                  </article>
                </div>
                </template>
              </section>
            </div>
          </section>

          <section v-if="currentPage==='creative'" class="sw-business-card creative-reference-page" data-annotation-page="creative-results" data-annotation-title="生成创意图">
            <section class="creative-hero" data-user-task="首次生成创意图并处理部分失败">
              <div data-flow-step="entry"><h1>2. 生成创意</h1><p>查看创意图，选择喜欢的方向继续精修</p></div>
              <div class="creative-hero__actions" data-flow-step="action"><el-button class="creative-hero__back" icon="el-icon-arrow-left" @click="goPage('planning')">上一步</el-button><el-button type="primary" @click="$message.success('已进入高清图生成流程')">生成高清图</el-button></div>
            </section>

            <div v-if="generationMainColor.hex" class="color-result-strip"><span class="color-result-strip__swatch" :style="{background:generationMainColor.hex}"></span><span>本轮产品主色 <strong>{{ generationMainColor.hex }}</strong><small v-if="generationMainColor.pantone">｜{{ pantoneOriginText(generationMainColor) }} {{ generationMainColor.pantone }}</small></span><small>仅用于原型演示；正式生图仍需验证颜色符合度</small></div>

            <div class="creative-reference-layout">
              <aside class="creative-side">
                <section class="creative-setting-card">
                  <div class="creative-setting-card__head"><span>输出格式</span><span>默认 PNG</span></div>
                  <el-checkbox-group v-model="generation.formats" class="format-options" data-field-description="输出格式：至少选择 1 种；默认 PNG；高清导出沿用 V1.0。"><el-checkbox label="PNG">PNG图</el-checkbox><el-checkbox label="JPG">JPG图</el-checkbox><el-checkbox label="BMP">BMP图</el-checkbox></el-checkbox-group>
                </section>
                <section class="creative-setting-card">
                  <div class="creative-setting-card__head"><span>生成参数</span><span></span></div>
                  <div class="creative-parameter-row"><span>分辨率</span><el-select v-model="generation.resolution" data-field-description="分辨率：沿用 V1.0 可选范围；原型默认 4K。"><el-option label="2K" value="2K"></el-option><el-option label="4K" value="4K"></el-option></el-select></div>
                  <div class="creative-parameter-row"><span>比例</span><el-select v-model="generation.ratio" data-field-description="图片比例：沿用 V1.0 可选范围；原型默认 3:4。"><el-option label="1:1" value="1:1"></el-option><el-option label="3:4" value="3:4"></el-option><el-option label="4:3" value="4:3"></el-option></el-select></div>
                  <div class="field-description" style="margin-top:18px">默认生图模型：Nano Banana 2。失败图片不会自动重试。</div>
                </section>
              </aside>

              <section class="creative-result-panel">
                <div class="creative-result-head"><span class="creative-result-title">创意图（成功 {{ successfulCreativeCount }} 张）</span><span class="creative-result-help">选择喜欢的图片查看详情或精修</span></div>
                <div class="creative-filter-pills" data-layout-section="status-filter"><el-radio-group v-model="creativeStatus"><el-radio-button label="全部"></el-radio-button><el-radio-button label="定稿"></el-radio-button><el-radio-button label="已移除"></el-radio-button></el-radio-group></div>
                <section data-layout-section="filters" style="display:none"><el-input v-model="creativeKeyword" data-annotation-filter="creativeKeyword"></el-input></section>
                <div data-layout-section="list">
                  <div v-if="filteredCreatives.length" class="creative-reference-grid">
                    <article v-for="item in pagedCreatives" :key="item.id" class="creative-reference-card" :class="{'is-failed':item.failed}" :data-annotation-identity="item.id" @click="openCreativeDetail(item)">
                      <div class="creative-reference-image" :class="{'is-failed':item.failed}"><span class="creative-direction-chip">方向 {{ item.code.charAt(0) }}</span><img v-if="!item.failed" :src="item.image" :alt="item.name"><div v-else class="creative-failed-state"><span class="creative-failed-state__icon"><i :class="item.retrying ? 'el-icon-loading' : 'el-icon-picture-outline'"></i></span><strong>{{ item.retrying ? '重新生成中' : '生成失败' }}</strong><p>{{ item.retrying ? '正在重新提交当前图片，请稍候。' : item.failedReason }}</p></div></div>
                      <div class="creative-reference-body">
                        <div class="creative-code-row"><span class="creative-code-chip">{{ item.code }}</span><el-button class="creative-delete" type="text" icon="el-icon-delete" :disabled="isViewer" @click.stop="removeCreative(item)"></el-button></div>
                        <h3 class="creative-reference-name">{{ item.name }}</h3><p class="creative-reference-desc">{{ item.desc }}</p>
                        <div class="creative-reference-tags"><el-tag v-for="tag in item.tags" :key="tag" size="small">{{ tag }}</el-tag></div>
                        <div v-if="item.mainColor && item.mainColor.hex" class="color-card-meta"><span class="color-card-meta__swatch" :style="{background:item.mainColor.hex}"></span>目标主色 {{ item.mainColor.hex }}</div>
                        <el-button v-if="item.failed" class="creative-refine" type="primary" :loading="item.retrying" :disabled="isViewer || item.removed || item.retrying" @click.stop="retryCreative(item)">{{ item.retrying ? '生成中' : '重新生成' }}</el-button>
                        <el-button v-else class="creative-refine" type="primary" :disabled="isViewer || item.removed" @click.stop="openRefine(item)">精修</el-button>
                      </div>
                    </article>
                  </div>
                  <el-empty v-else class="creative-result-empty" description="暂无符合当前状态的创意图"></el-empty>
                </div>
                <div class="sw-pagination" data-layout-section="pagination"><span style="margin-right:12px">共 {{ filteredCreatives.length }} 张</span><el-pagination data-annotation-pagination :data-current-page="creativePage" :data-page-size="creativePageSize" background layout="prev, pager, next" :total="filteredCreatives.length" :page-size="creativePageSize" :current-page.sync="creativePage"></el-pagination></div>
              </section>
            </div>
          </section>

          <section v-if="currentPage==='history'" class="sw-business-card reference-secondary-page" data-annotation-page="history-designs" data-annotation-title="历史设计">
            <div class="secondary-page-heading">
              <div class="secondary-page-heading__main">
                <el-tooltip content="返回企划输入" placement="bottom"><el-button class="secondary-page-back" icon="el-icon-arrow-left" aria-label="返回企划输入" data-flow-step="action" @click="goPage('planning')"></el-button></el-tooltip>
                <div class="secondary-page-copy"><h1 class="secondary-page-title">历史设计</h1><p class="secondary-page-subtitle">查看历史方案，恢复未完成的设计任务。</p></div>
              </div>
              <div class="meta-right">版本：v1.1｜历史模型数据保留可查看<br>Seedream 5 未完成任务恢复时自动切换模型</div>
            </div>
            <section data-user-task="恢复 Seedream 5 未完成设计并切换模型">
              <el-alert class="task-guide" type="info" :closable="false" show-icon data-flow-step="entry"><div slot="title">用户任务：恢复未完成设计｜入口：AI 产品设计 / 历史设计 / 继续设计｜角色：设计师</div><p class="task-guide__line">操作步骤：1. 查询未完成设计；2. 点击“继续设计”；3. 若原模型为 Seedream 5，自动切换 Nano Banana 2 并保留企划上下文。</p></el-alert>
              <el-alert v-if="historyMessage" class="result-strip" :title="historyMessage" type="warning" :closable="false" show-icon data-flow-step="result"></el-alert>
            </section>
            <section class="history-filter" data-layout-section="filters" data-flow-step="action">
              <div class="sw-filter-row"><div class="sw-filter-item"><span>设计名称</span><el-input v-model="historyFilters.keyword" size="small" clearable placeholder="名称/创建人/品类" data-annotation-filter="historyKeyword" data-field-description="设计名称：可选；支持名称、创建人或品类模糊查询；空值显示全部。"></el-input></div><div class="sw-filter-item"><span>品类</span><el-select v-model="historyFilters.category" size="small" clearable placeholder="全部品类" data-annotation-filter="historyCategory"><el-option v-for="item in categories" :key="item" :label="item" :value="item"></el-option></el-select></div><div class="sw-filter-actions"><el-button type="primary" size="small" @click="historyPage=1">查询</el-button><el-button size="small" @click="resetHistoryFilters">重置</el-button></div></div>
            </section>
            <div class="sw-list-head"><div class="sw-status-filter" data-layout-section="status-filter"><span class="sw-list-title">历史设计列表</span><el-radio-group v-model="historyFilters.status" size="small"><el-radio-button label="全部"></el-radio-button><el-radio-button label="未完成"></el-radio-button><el-radio-button label="已完成"></el-radio-button></el-radio-group></div><span class="muted">当前命中 {{ filteredHistory.length }} 条</span></div>
            <div class="history-table" data-layout-section="list">
              <el-table :data="pagedHistory" row-key="id" border style="width:100%">
                <el-table-column prop="name" label="设计名称" min-width="240"><template slot-scope="scope"><span :data-annotation-identity="scope.row.id">{{ scope.row.name }}</span></template></el-table-column>
                <el-table-column prop="category" label="品类" width="100"></el-table-column><el-table-column prop="creator" label="创建用户" width="120"></el-table-column><el-table-column prop="createdAt" label="创建时间" width="175" sortable data-annotation-sort="createdAt"></el-table-column><el-table-column prop="model" label="原生图模型" width="150"></el-table-column><el-table-column prop="status" label="状态" width="100"><template slot-scope="scope"><el-tag size="mini" :type="scope.row.status==='已完成'?'success':'warning'">{{ scope.row.status }}</el-tag></template></el-table-column><el-table-column label="操作" width="180"><template slot-scope="scope"><el-button type="text" @click="openHistoryDetail(scope.row)">查看</el-button><el-button v-if="scope.row.status==='未完成' && !isViewer" type="text" @click="resumeDesign(scope.row)">继续设计</el-button></template></el-table-column>
              </el-table>
              <el-empty v-if="!filteredHistory.length" description="暂无符合当前条件的历史设计"></el-empty>
            </div>
            <div class="sw-pagination" data-layout-section="pagination"><span style="margin-right:12px">共 {{ filteredHistory.length }} 条</span><el-pagination data-annotation-pagination :data-current-page="historyPage" :data-page-size="historyPageSize" background layout="sizes, prev, pager, next" :total="filteredHistory.length" :page-size.sync="historyPageSize" :current-page.sync="historyPage" :page-sizes="[5,10,20]"></el-pagination></div>
          </section>

          <section v-if="currentPage==='fields'" class="sw-business-card field-page" data-annotation-page="field-management" data-annotation-title="字段管理">
            <section data-user-task="从字段管理返回 AI 产品设计">
              <div class="secondary-page-heading">
                <div class="secondary-page-heading__main">
                  <el-tooltip content="返回企划输入" placement="bottom"><el-button class="secondary-page-back" icon="el-icon-arrow-left" aria-label="返回企划输入" data-flow-step="action" @click="goPage('planning')"></el-button></el-tooltip>
                  <div class="secondary-page-copy"><h1 class="field-page__title" data-flow-step="entry">字段管理</h1><p class="secondary-page-subtitle">维护企划输入中的创意方向、工艺 / 成本 / 面料约束与禁止项。</p></div>
                </div>
              </div>
              <section class="field-page__card" data-flow-step="result">
                <div class="field-page__head"><h2>企划字段</h2><el-button type="primary" icon="el-icon-plus" :disabled="isViewer">新增字段</el-button></div>
                <el-table :data="fieldRows" border style="width:100%">
                  <el-table-column prop="name" label="字段名称" min-width="220"></el-table-column>
                  <el-table-column prop="type" label="字段类型" width="160"></el-table-column>
                  <el-table-column prop="scope" label="适用品类" min-width="220"></el-table-column>
                  <el-table-column prop="required" label="必填" width="100"><template slot-scope="scope"><el-tag size="mini" :type="scope.row.required?'danger':'info'">{{ scope.row.required ? '是' : '否' }}</el-tag></template></el-table-column>
                  <el-table-column prop="status" label="状态" width="110"><template slot-scope="scope"><el-tag size="mini" type="success">{{ scope.row.status }}</el-tag></template></el-table-column>
                  <el-table-column label="操作" width="140"><template><el-button type="text" :disabled="isViewer">编辑</el-button></template></el-table-column>
                </el-table>
              </section>
            </section>
          </section>
        </main>
      </section>
    </div>

    <div v-if="paletteDragPreview" class="palette-drag-preview" :style="{left:paletteDragPreview.x+'px',top:paletteDragPreview.y+'px'}" aria-hidden="true"><span class="palette-drag-preview__swatch" :style="{background:paletteDragPreview.hex}"></span><div><small>拖动调整配色</small><strong>{{ paletteDragPreview.code }}</strong></div></div>

    <el-dialog title="修改提示词" :visible.sync="promptDialogVisible" width="620px" append-to-body data-modal-id="prompt-detail">
      <el-input v-model="activePrompt" type="textarea" :rows="12" maxlength="2000" show-word-limit :disabled="isViewer" data-field-description="详细 Prompt：最多 2000 字；只展示业务 Prompt，不包含系统提示词或接口密钥。"></el-input>
      <span slot="footer"><el-button @click="promptDialogVisible=false">取消</el-button><el-button @click="copyText(activePrompt,'详细 Prompt 已复制')">复制详细 Prompt</el-button><el-button type="primary" :disabled="isViewer" @click="saveActivePrompt">保存修改</el-button></span>
    </el-dialog>

    <el-dialog :title="previewImageName || '查看参考图片'" :visible.sync="previewDialogVisible" width="720px" custom-class="reference-image-dialog" append-to-body data-modal-id="reference-image-preview">
      <div class="reference-image-preview"><img v-if="previewImage" :src="previewImage" :alt="previewImageName || '参考图片预览'"></div>
    </el-dialog>

    <el-dialog title="选择产品配色" :visible.sync="colorDialogVisible" width="94vw" custom-class="color-dialog color-dialog--main" append-to-body data-modal-id="main-color-picker">
      <section class="color-step-card color-step-card--selection" aria-label="第一步：选择颜色">
      <div class="color-step-card__heading"><span class="color-step-card__number">01</span><strong>选择颜色</strong><small>选择一种方式挑选颜色</small></div>
      <el-tabs v-model="colorTab">
        <el-tab-pane label="潘通FHI色号" name="pantone">
          <div class="pantone-workspace">
            <section class="pantone-colors-pane" aria-label="潘通参考色卡">
              <div class="pantone-colors-head"><strong>颜色</strong><span class="pantone-count">{{ filteredPantoneColors.length }} / {{ pantoneColors.length }} 色</span></div>
              <div ref="pantoneColorsScroll" class="pantone-colors-scroll">
                <div v-if="pagedPantoneColors.length" class="pantone-grid" :style="{'--pantone-card-width':pantoneCardWidth+'px','--pantone-card-height':Math.round(pantoneCardWidth*.6)+'px'}"><button v-for="item in pagedPantoneColors" :key="item.code" type="button" class="pantone-swatch" :class="{'is-selected':colorDraft.source==='第三方编号参考' && colorDraft.pantone===item.code}" :aria-label="'潘通编号 '+item.code+' TPG，颜色 '+item.hex" :title="item.code+' TPG · '+item.hex" @click="choosePantoneColor(item)"><span class="pantone-swatch__color" :style="{background:item.hex}"></span><span class="pantone-swatch__code" v-fit-swatch-label>{{ item.code }} TPG</span><span class="pantone-swatch__hex">{{ item.hex }}</span></button></div>
                <div v-else class="field-description" style="padding:28px 0;text-align:center">当前条件下没有匹配颜色，请调整筛选范围或搜索词。</div>
              </div>
              <div v-if="filteredPantoneColors.length>pantonePageSize" class="pantone-page"><el-pagination background layout="prev, pager, next" :current-page.sync="pantonePage" :page-size="pantonePageSize" :total="filteredPantoneColors.length" :pager-count="5" @current-change="scrollPantoneColorsTop"></el-pagination></div>
            </section>
            <aside class="pantone-controls-pane" aria-label="颜色筛选">
              <div class="pantone-toolbar"><el-input v-model.trim="pantoneQuery" clearable placeholder="搜索编号或 HEX" aria-label="搜索潘通参考编号或颜色值"></el-input></div>

              <div class="pantone-filters">
                <div class="pantone-filters__head"><span>筛选条件</span><button v-if="hasActivePantoneFilters" type="button" aria-label="清除全部筛选条件" @click="resetPantoneFilters">清空</button></div>
                <div v-for="filter in pantoneFilterDefs" :key="filter.key" class="pantone-filter">
                  <div class="pantone-filter-head"><strong>{{ filter.label }}</strong><button v-if="pantoneFilters[filter.key].active" type="button" :aria-label="'清除'+filter.label+'筛选'" :title="'清除'+filter.label+'筛选'" @click="resetPantoneFilter(filter.key)">×</button></div>
                  <div class="pantone-filter-track" :class="'pantone-filter-track--'+filter.key" role="button" :aria-label="'拖动上下把手调整'+filter.label+'范围'" @pointerdown="startPantoneFilterDrag(filter.key,$event)" @pointermove="movePantoneFilterDrag(filter.key,$event)" @pointerup="endPantoneFilterDrag(filter.key,$event)" @pointercancel="cancelPantoneFilterDrag" @lostpointercapture="cancelPantoneFilterDrag"><span class="pantone-filter-selection" :style="pantoneFilterSelectionStyle(filter)"><button type="button" class="pantone-filter-handle pantone-filter-handle--top" :data-bound="filter.key==='s'?'to':'from'" :title="'拖动调整'+filter.label+(filter.key==='s'?'上限':'下限')" :aria-label="filter.label+(filter.key==='s'?'最大值滑块':'最小值滑块')"></button><button type="button" class="pantone-filter-handle pantone-filter-handle--bottom" :data-bound="filter.key==='s'?'from':'to'" :title="'拖动调整'+filter.label+(filter.key==='s'?'下限':'上限')" :aria-label="filter.label+(filter.key==='s'?'最小值滑块':'最大值滑块')"></button></span></div>
                  <div class="pantone-filter-bounds"><input type="number" :min="0" :max="filter.max" :value="pantoneFilters[filter.key].from" :aria-label="filter.label+'最小值'" @change="setPantoneFilterBound(filter.key,'from',$event)"><span>–</span><input type="number" :min="0" :max="filter.max" :value="pantoneFilters[filter.key].to" :aria-label="filter.label+'最大值'" @change="setPantoneFilterBound(filter.key,'to',$event)"></div>
                </div>
                <div class="pantone-card-size"><div class="pantone-card-size__head"><strong>色卡大小</strong></div><input type="range" min="50" max="100" step="1" v-model.number="pantoneCardWidth" aria-label="调整色卡大小"><div class="pantone-card-size__scale"><span>50 px</span><span>100 px</span></div></div>
              </div>
            </aside>
          </div>
        </el-tab-pane>
        <el-tab-pane label="HEX色盘" name="wheel">
          <div class="color-picker-layout color-picker-layout--wheel">
            <div class="color-wheel-group">
              <div class="color-wheel" role="button" tabindex="0" aria-label="在色盘上点击或拖动选择颜色" @pointerdown="startWheelDrag" @pointermove="moveWheelDrag" @pointerup="endWheelDrag" @pointercancel="cancelWheelDrag" @lostpointercapture="cancelWheelDrag" @keydown.enter="pickWheelCenter" @keydown.space.prevent="pickWheelCenter">
                <span class="color-wheel__shade" :style="{opacity:1-wheelBrightness/100}"></span><span class="color-wheel__cursor" :style="colorWheelCursor"></span>
              </div>
            </div>
            <div class="color-picker-controls"><div class="color-picker-preview" :style="{background:colorDraft.hex}"></div><label for="main-color-brightness">明暗</label><input id="main-color-brightness" type="range" min="5" max="100" v-model.number="wheelBrightness" :style="{'--brightness-fill':((wheelBrightness-5)/95*100)+'%'}" @input="updateWheelColor"><div class="color-picker-value-row"><label>颜色值</label><button type="button" class="color-wheel-eyedropper" aria-label="用吸色笔取屏幕颜色" title="吸取屏幕颜色" @click="pickScreenColor"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21l1-4 9-9 3 3-9 9-4 1Z"></path><path d="m12 6 6 6"></path><path d="m15 5 2-2a3 3 0 0 1 4 4l-2 2"></path></svg><span>吸色笔</span></button></div><el-input v-model="colorDraft.hex" maxlength="7" placeholder="#A8C9D8" @input="colorDraft.pantone='';colorDraft.source='色盘选择'" @blur="normalizeColorHex"></el-input><div class="field-description">在色盘上按住并滑动取色；也可以直接输入 #RRGGBB。</div></div>
          </div>
          <div class="frequent-color-section"><span class="frequent-color-title"><strong>常用颜色</strong><small>{{ frequentColors.length }}/10</small></span><div class="color-quick-list"><span v-for="hex in frequentColors" :key="hex" class="frequent-color-item" :class="{'is-selected':colorDraft.hex===hex}"><button type="button" class="color-quick" :aria-pressed="colorDraft.hex===hex" :aria-label="'试用常用色 '+hex" :title="hex" @click="chooseDraftColor(hex,'常用色')"><span class="color-quick__swatch" :style="{background:hex}"></span></button><button type="button" class="frequent-color-remove" :aria-label="'从常用色删除 '+hex" :title="'删除 '+hex" @click="removeFrequentColor(hex)">×</button></span><button v-if="frequentColors.length<10" type="button" class="frequent-color-empty" aria-label="选择颜色加入常用色" title="选择颜色加入常用色" @click="openFrequentColorAdd"><span class="frequent-color-empty__swatch">＋</span></button></div></div>
        </el-tab-pane>

      </el-tabs>
      </section>
      <section class="color-step-card color-role-flow" aria-label="第二步：组合产品配色">
        <div class="color-step-card__heading"><span class="color-step-card__number">02</span><strong>组合产品配色</strong><small>点击色块选中，按住拖动；第一位为主色，最多 8 色</small></div>
        <div class="color-role-flow__current"><span class="main-color-card__swatch" :style="{background:colorDraft.hex}"></span><span class="color-role-flow__current-copy"><strong>当前选中 {{ (colorDraft.pantone ? colorDraft.pantone+' TPG' : colorDraft.hex) }}</strong><small v-if="colorDraft.pantone">{{ colorDraft.hex }}</small></span><el-button class="color-role-flow__add" :icon="colorDraftExistingIndex>=0?'el-icon-check':'el-icon-plus'" :disabled="colorDraftExistingIndex>=0" @click="addDraftColor">{{ colorDraftActionLabel }}</el-button></div>
        <div class="color-role-flow__palette" :class="{'is-reordering':draftPaletteDragIndex!==null}" aria-label="已选产品配色">
          <div v-for="(item,index) in colorSelections" :key="item.hex" class="palette-preview__item" :class="{'palette-preview__item--main':index===0,'is-dragging':draftPaletteDragIndex===index,'is-drop-target':draftPaletteDropIndex===index&&draftPaletteDragIndex!==null}" :style="{'--palette-main-color':item.hex}" :data-palette-index="index" data-hover-tip="点击选中颜色；按住拖动排序，移到第一位设为主色" @click="selectDraftPaletteColor(item)" @pointerdown.prevent="startDraftPaletteDrag($event,index)" @pointermove="moveDraftPaletteDrag" @pointerup="finishDraftPaletteDrag" @pointercancel="endDraftPaletteDrag" @lostpointercapture="endDraftPaletteDrag">
            <button type="button" class="palette-preview__swatch" :class="{'is-selected':colorDraft.hex===item.hex}" :style="{background:item.hex}" :aria-pressed="colorDraft.hex===item.hex" :aria-label="'选中颜色 '+((item.pantone ? item.pantone+' TPG' : item.hex))+'，按住拖动调整顺序，第一位为主色'"    @keydown.left.prevent="moveDraftPaletteColor(index,index-1)" @keydown.up.prevent="moveDraftPaletteColor(index,index-1)" @keydown.right.prevent="moveDraftPaletteColor(index,index+1)" @keydown.down.prevent="moveDraftPaletteColor(index,index+1)"></button>
            <div class="palette-preview__info"><span class="palette-preview__role">{{ index===0 ? '产品主色' : '参考色' }}</span><strong class="palette-preview__code">{{ (item.pantone ? item.pantone+' TPG' : item.hex) }}</strong><small v-if="item.pantone" class="palette-preview__hex">{{ item.hex }}</small></div>
            <button type="button" class="palette-preview__remove" :aria-label="'移除'+(index===0?'主色 ':'参考色 ')+((item.pantone ? item.pantone+' TPG' : item.hex))" @pointerdown.stop @click.stop="removeDraftColor(index)">×</button>
          </div>
          <div v-if="!colorSelections.length" class="color-role-flow__empty"><span aria-hidden="true"></span><div><strong>尚未选择产品主色</strong><small>点击上方“设为主色”开始组合配色，参考色可按需添加</small></div></div>
        </div>
      </section>
      <span slot="footer"><el-button @click="colorDialogVisible=false">取消</el-button><el-button type="primary" :disabled="!colorSelections.length" @click="applyMainColor">保存产品配色</el-button></span>
    </el-dialog>

    <el-dialog title="添加常用色" :visible.sync="frequentColorAddVisible" width="590px" custom-class="color-dialog frequent-add-dialog" append-to-body data-modal-id="frequent-color-add">
      <div class="field-description">从色盘选择、用吸色笔取色，或输入 HEX 色值，然后保存到常用色。</div>
      <div class="color-picker-layout color-picker-layout--wheel">
        <div class="color-wheel-group"><div class="color-wheel" role="button" tabindex="0" aria-label="选择要加入常用色的颜色" @pointerdown="startFrequentWheelDrag" @pointermove="moveFrequentWheelDrag" @pointerup="endFrequentWheelDrag" @pointercancel="cancelFrequentWheelDrag" @lostpointercapture="cancelFrequentWheelDrag" @keydown.enter="pickFrequentWheelCenter" @keydown.space.prevent="pickFrequentWheelCenter"><span class="color-wheel__shade" :style="{opacity:1-frequentAddBrightness/100}"></span><span v-if="frequentColorDraft.hex" class="color-wheel__cursor" :style="frequentColorWheelCursor"></span></div></div>
        <div class="color-picker-controls"><div class="color-picker-preview" :class="{'is-empty':!validColorHex(frequentColorDraft.hex)}" :style="validColorHex(frequentColorDraft.hex)?{background:frequentColorDraft.hex}:{}"><span v-if="!validColorHex(frequentColorDraft.hex)">请选择颜色</span></div><label for="frequent-color-brightness">明暗</label><input id="frequent-color-brightness" type="range" min="5" max="100" v-model.number="frequentAddBrightness" @input="updateFrequentWheelColor"><div class="color-picker-value-row"><label for="frequent-color-hex">颜色值</label><button type="button" class="color-wheel-eyedropper" aria-label="吸取屏幕颜色加入常用色" title="吸取屏幕颜色" @click="pickFrequentScreenColor"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21l1-4 9-9 3 3-9 9-4 1Z"></path><path d="m12 6 6 6"></path><path d="m15 5 2-2a3 3 0 0 1 4 4l-2 2"></path></svg><span>吸色笔</span></button></div><el-input id="frequent-color-hex" v-model="frequentColorDraft.hex" maxlength="7" placeholder="#RRGGBB" @blur="normalizeFrequentColorHex"></el-input></div>
      </div>
      <span slot="footer"><el-button @click="frequentColorAddVisible=false">取消</el-button><el-button type="primary" :disabled="!validColorHex(frequentColorDraft.hex)" @click="addFrequentColor">加入常用色</el-button></span>
    </el-dialog>

    <el-dialog title="V1.1 验收口径" :visible.sync="acceptanceVisible" width="760px" append-to-body data-modal-id="acceptance-rules">
      <table class="metric-table"><tr><td><strong>性能范围</strong></td><td>生成提示词、首次生成创意图、单图精修生成新版本。</td></tr><tr><td><strong>P95 目标</strong></td><td>相同网络、Nano Banana 2、相同输入和生成数量下，V1.1 相较 V1.0 降低至少 20%。</td></tr><tr><td><strong>失败率样本</strong></td><td>每版本不少于 30 批且累计不少于 90 张。</td></tr><tr><td><strong>失败率目标</strong></td><td>单张图片失败率和生成批次失败率均降低至少 20%；若 V1.0 为 0，V1.1 保持为 0。</td></tr><tr><td><strong>失败处理</strong></td><td>不自动重试；部分成功保留成功图片进入结果页；全部失败保留输入并允许重新生成。</td></tr></table>
      <span slot="footer"><el-button type="primary" @click="acceptanceVisible=false">知道了</el-button></span>
    </el-dialog>

    <el-drawer title="创意图详情" :visible.sync="detailDrawerVisible" size="73%" direction="rtl" append-to-body data-layout-section="detail-drawer" data-drawer-id="creative-detail">
      <section class="drawer-section"><h2 class="drawer-section__title">基本信息</h2><el-row :gutter="20"><el-col :span="12"><el-form label-width="100px"><el-form-item label="款式编号"><el-input :value="selectedCreative.code" disabled></el-input></el-form-item><el-form-item label="款式名称"><el-input :value="selectedCreative.name" disabled></el-input></el-form-item></el-form></el-col><el-col :span="12"><el-form label-width="100px"><el-form-item label="生成模型"><el-input value="Nano Banana 2" disabled></el-input></el-form-item><el-form-item label="状态"><el-input :value="selectedCreative.final?'定稿候选':'创意图'" disabled></el-input></el-form-item></el-form></el-col></el-row></section>
      <section class="drawer-section"><h2 class="drawer-section__title">设计说明</h2><p>{{ selectedCreative.desc }}</p><div v-if="selectedCreative.mainColor && selectedCreative.mainColor.hex" class="color-detail-row"><span class="color-detail-row__swatch" :style="{background:selectedCreative.mainColor.hex}"></span><span>生成时的目标主色：{{ selectedCreative.mainColor.hex }}<small v-if="selectedCreative.mainColor.pantone">｜{{ pantoneOriginText(selectedCreative.mainColor) }} {{ selectedCreative.mainColor.pantone }}</small></span></div><el-alert title="查看态保留列表上下文；完整边界、权限、状态和失败规则以同版本 Markdown 为准。" type="info" :closable="false"></el-alert></section>
      <div class="drawer-footer"><el-button @click="detailDrawerVisible=false">关闭</el-button><el-button type="primary" :disabled="isViewer" @click="detailDrawerVisible=false;openRefine(selectedCreative)">进入精修</el-button></div>
    </el-drawer>

    <el-drawer :title="'精修 · '+selectedCreative.code" :visible.sync="refineDrawerVisible" size="86%" direction="rtl" append-to-body data-drawer-id="single-image-refine" data-user-task="单图精修生成新版本">
      <div class="refine-workspace" data-flow-step="action">
        <div class="refine-canvas" @mousedown="startRefineAnnotation" @mousemove="moveRefineAnnotation" @mouseup="finishRefineAnnotation" @mouseleave="finishRefineAnnotation" title="在图片上拖拽框选需要修改的区域">
          <img :src="refineCurrentVersion.image || selectedCreative.image" :alt="selectedCreative.name" :style="{filter:refineCurrentVersion.filter||'none'}">
          <div v-for="(note,index) in refine.annotations" :key="note.id" class="refine-annotation-box" :style="annotationStyle(note)"><span>{{ index+1 }}</span></div>
          <div v-if="refine.draftRect" class="refine-annotation-box" :style="annotationStyle(refine.draftRect)"></div>
        </div>
        <aside class="refine-inspector">
          <div class="refine-panel"><div class="refine-panel__head"><span>版本历史</span><small>深度 {{ refine.versions.length }} / 4</small></div><div class="refine-version-list"><button v-for="(version,index) in refine.versions" :key="version.id" type="button" class="refine-version" :class="{'is-active':refine.activeVersionIndex===index}" @click="selectRefineVersion(index)"><span class="refine-version__dot"></span><span class="refine-version__label">{{ version.code }} <small>{{ index===0?'一级':'第 '+(index+1)+' 版' }}</small></span><span class="refine-version__tag" :class="{'is-primary':index===0}">{{ index===0?'主版本':'精修版' }}</span></button></div></div>
          <div class="refine-panel" style="flex:1"><div class="refine-panel__head"><span>图片标注（{{ refine.annotations.length }} 个）</span><small>在主图上拖拽框选</small></div><div class="refine-note-list"><div v-if="!refine.annotations.length" class="refine-note-empty">框选想调整的区域，再写下具体修改要求</div><div v-for="(note,index) in refine.annotations" :key="note.id" class="refine-note-row"><span class="refine-note-index">{{ index+1 }}</span><el-input v-model="note.text" size="mini" :placeholder="'标注 '+(index+1)+'：希望怎样修改？'"></el-input><el-button type="text" icon="el-icon-close" aria-label="删除标注" @click="removeRefineAnnotation(index)"></el-button></div></div></div>
        </aside>
        <div class="refine-composer"><div class="refine-composer__hint">描述要保留的主体和想调整的细节。局部修改可先在图上框选并填写标注。</div><el-input v-model="refine.prompt" type="textarea" :rows="3" maxlength="500" show-word-limit placeholder="例如：保留原有版型，把局部提花改得更细密，配色更柔和……" data-field-description="修改内容：最多 500 字；填写文字或图片标注后才能生成。"></el-input><div class="refine-composer__foot"><div class="refine-composer__tools"><input ref="refineFileInput" type="file" accept="image/*" multiple style="display:none" @change="addRefineReferences"><el-button icon="el-icon-plus" size="mini" title="添加参考图片" @click="$refs.refineFileInput.click()"></el-button><span v-for="(file,index) in refine.references" :key="file.id" class="refine-reference"><img :src="file.url" :alt="file.name"><button type="button" :aria-label="'移除'+file.name" @click="removeRefineReference(index)">×</button></span><el-button size="mini" @click="refineAdvancedVisible=true">高级参数</el-button></div><el-button type="primary" :loading="refine.loading" :disabled="!canGenerateRefine" @click="generateRefinedVersion">{{ refine.loading ? '生成中…' : '生成新版本' }}</el-button></div></div>
      </div>
      <details style="margin-top:12px;color:#8993a3;font-size:12px"><summary>演示状态</summary><el-radio-group v-model="refine.scenario" size="mini"><el-radio label="success">成功</el-radio><el-radio label="failed">失败</el-radio><el-radio label="processing">处理中</el-radio></el-radio-group></details>
      <el-alert v-if="refine.message" style="margin-top:12px" :title="refine.message" :type="refine.messageType" :closable="false" show-icon data-flow-step="result"></el-alert>
    </el-drawer>
    <el-dialog title="高级参数" :visible.sync="refineAdvancedVisible" width="560px" append-to-body><div class="refine-advanced-row"><strong>门襟</strong><button type="button" class="refine-chip" :class="{'is-selected':refine.cuff==='无'}" @click="refine.cuff='无'">无</button><button v-if="refine.customCuff" type="button" class="refine-chip" :class="{'is-selected':refine.cuff===refine.customCuff}" @click="refine.cuff=refine.customCuff">{{ refine.customCuff }}</button><el-button size="mini" @click="editRefineTag('cuff')">+ 自定义标签</el-button></div><div class="refine-advanced-row"><strong>图案 / 花型</strong><button type="button" class="refine-chip" :class="{'is-selected':refine.pattern==='无图案'}" @click="refine.pattern='无图案'">无图案</button><button v-if="refine.customPattern" type="button" class="refine-chip" :class="{'is-selected':refine.pattern===refine.customPattern}" @click="refine.pattern=refine.customPattern">{{ refine.customPattern }}</button><el-button size="mini" @click="editRefineTag('pattern')">+ 自定义标签</el-button></div><span slot="footer"><el-button @click="refineAdvancedVisible=false">关闭</el-button><el-button type="primary" @click="refineAdvancedVisible=false">应用</el-button></span></el-dialog>

    <el-drawer title="历史设计详情" :visible.sync="historyDrawerVisible" size="73%" direction="rtl" append-to-body data-drawer-id="history-detail">
      <section class="drawer-section"><h2 class="drawer-section__title">历史信息</h2><el-form label-width="110px"><el-row :gutter="20"><el-col :span="12"><el-form-item label="设计名称"><el-input :value="selectedHistory.name" disabled></el-input></el-form-item></el-col><el-col :span="12"><el-form-item label="品类"><el-input :value="selectedHistory.category" disabled></el-input></el-form-item></el-col><el-col :span="12"><el-form-item label="原生图模型"><el-input :value="selectedHistory.model" disabled></el-input></el-form-item></el-col><el-col :span="12"><el-form-item label="恢复后模型"><el-input :value="selectedHistory.model==='Seedream 5'?'Nano Banana 2':selectedHistory.model" disabled></el-input></el-form-item></el-col></el-row></el-form></section>
      <div class="drawer-footer"><el-button @click="historyDrawerVisible=false">关闭</el-button><el-button v-if="selectedHistory.status==='未完成'" type="primary" :disabled="isViewer" @click="historyDrawerVisible=false;resumeDesign(selectedHistory)">继续设计</el-button></div>
    </el-drawer>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue@2.7.16/dist/vue.js"><\/script>
  <script src="https://unpkg.com/element-ui@2.15.14/lib/index.js"><\/script>
  <script>/* TPG code/HEX references: user-provided 潘通TPG卡-电子色卡.html, 2,801 unique colors. */
window.PANTONE_FHI_COLORS=[["17-3938","#696AAD"],["12-1505","#EDD7D3"],["12-2400","#E9D8D5"],["11-1400","#EEDBDF"],["12-2900","#E6CED9"],["13-2930","#DCC6D1"],["13-2705","#F9CEDE"],["14-2609","#E3ACCA"],["13-2009","#EEBCBE"],["13-2016","#FAB5C3"],["14-1715","#EAA6AF"],["14-1816","#EDA1B0"],["15-2122","#F294AD"],["14-2216","#F89BB7"],["15-1910","#F4809E"],["13-1218","#FFCDBA"],["13-1418","#F0BBAC"],["13-1330","#FFC1AC"],["14-1320","#F8AA9B"],["14-1430","#F3AA99"],["14-1417","#ECA28E"],["14-1602","#E59E91"],["12-1015","#F1CCBC"],["12-1121","#FDD0B9"],["13-1307","#F9B8A4"],["14-1440","#FFB194"],["14-1431","#FFAA8C"],["14-1242","#FFAD84"],["15-1232","#FEA870"],["12-0730","#F8E2A1"],["12-0640","#F5E686"],["12-0719","#F5EF72"],["12-0650","#F0E332"],["12-0743","#F3F291"],["12-0723","#E5DD8A"],["12-0618","#E3DCA8"],["12-0745","#E4EEA4"],["12-0550","#E2F082"],["12-0641","#E1EC7B"],["12-0430","#DDF096"],["12-0540","#DDE8AD"],["12-0549","#D6EE7A"],["14-0440","#C7CD5B"],["12-0230","#C3E5BA"],["13-0216","#B3E1A0"],["12-6000","#CAE7CD"],["12-0107","#BDDEC3"],["13-6226","#B2DEAF"],["14-0225","#9CD199"],["14-0120","#8EC898"],["12-5806","#C6E6D4"],["14-5710","#A7D7C2"],["13-6010","#A8DEC9"],["13-5615","#9EE0C6"],["13-5710","#94DCBE"],["14-5828","#6CD3AA"],["15-5810","#62C49D"],["13-5612","#A4E2D4"],["13-5512","#ABDCD3"],["13-5320","#A0DED4"],["14-5618","#80C8B9"],["14-5612","#86C8BC"],["14-5412","#8FCBC2"],["14-5419","#77C7BA"],["14-5520","#81CBC6"],["14-5320","#6AC8C4"],["14-5125","#48C4BD"],["14-4912","#5DCBC8"],["14-5117","#70B7B7"],["15-5220","#5DB7B1"],["15-4912","#65B8BB"],["12-5211","#C0D8DE"],["14-4716","#9ED3DC"],["14-4714","#87D5E2"],["15-4512","#6BB7C2"],["15-4719","#61AAB6"],["13-4520","#A0D6ED"],["14-4509","#99C9DF"],["13-4016","#BFD0E6"],["14-4111","#B3C1D4"],["14-4015","#AEC5E0"],["14-4130","#A7C5E6"],["15-3926","#91ADD4"],["15-3931","#8FA6CA"],["16-4039","#7893C4"],["13-4005","#C4BEC9"],["13-3905","#C7C3CE"],["14-3915","#B4B2CB"],["14-3926","#B5B4D5"],["14-3935","#B0B1D6"],["14-3813","#B1AFC8"],["16-3928","#9A9AB7"],["14-3610","#CDB6D2"],["14-3715","#C4B1CF"],["15-3615","#C6A8D1"],["14-3512","#D0B7DA"],["15-3530","#B8A3BC"],["16-3610","#A995B0"],["16-3615","#AD9DB8"],["11-4101","#F1F1EE"],["11-3900","#EFEFED"],["12-0508","#E8E7DF"],["12-0003","#E6E0D9"],["12-0705","#E6DDD1"],["11-0002","#E9E1DA"],["12-1306","#E8DDD0"],["12-4001","#DED9D3"],["14-0207","#B4B0AB"],["15-4401","#B0A9A6"],["13-0005","#CAC3C2"],["14-3700","#BCB2B2"],["14-0702","#B7AEAA"],["16-3710","#A29894"],["14-3802","#BBB4B4"],["14-4109","#BDB8BB"],["14-4116","#AFAAAB"],["16-1523","#9B9697"],["16-3804","#9F9B9E"],["16-2901","#9B989C"],["17-0400","#877F80"],["17-3927","#918B91"],["17-2501","#857D80"],["18-3801","#797274"],["18-0407","#6F6869"],["18-3709","#625A5B"],["18-3901","#575254"],["19-0914","#453F40"],["16-1503","#9E9C9D"],["16-1502","#8D8B8B"],["17-1504","#848384"],["18-1611","#777271"],["17-5800","#787471"],["18-0307","#696461"],["18-1408","#5B5955"],["18-4012","#706D71"],["18-3914","#5C5758"],["19-0610","#5A5554"],["19-3904","#504D50"],["19-4002","#4A484C"],["19-3913","#4B4B51"],["19-1011","#48454A"],["15-5212","#9B9CA1"],["16-0005","#939398"],["17-4017","#80828A"],["18-3924","#6B6C78"],["18-4021","#4F535C"],["19-3820","#40424B"],["19-4103","#3A3F4A"],["14-4309","#B7BCC2"],["14-4205","#9EA2A7"],["18-4705","#6C6F73"],["18-4205","#6C757D"],["18-4319","#676E79"],["19-4209","#60646B"],["19-4310","#575C62"],["14-4605","#BCBCB9"],["14-4216","#B6B8B8"],["16-4705","#A0A0A1"],["17-5103","#8B8A8B"],["18-4602","#6D6F6F"],["18-5103","#636362"],["19-0503","#494848"],["16-4803","#888882"],["17-4005","#848480"],["18-4331","#7C7B78"],["18-0205","#64615D"],["19-0507","#4F504E"],["19-0505","#50524E"],["19-4001","#3F4140"],["18-4007","#5B585C"],["19-3914","#5A5659"],["19-5303","#484A4C"],["19-4100","#444446"],["19-4204","#3A3E42"],["19-4000","#3A3D40"],["19-4206","#3F4144"],["11-4001","#EFF0F1"],["11-0601","#F5F7F6"],["11-0700","#F3F4F5"],["11-4800","#E9E9E7"],["11-4201","#F1F0EC"],["11-0608","#F0EDE5"],["11-4801","#EAE6DA"],["11-0607","#F3EFE7"],["11-1001","#ECE8E4"],["11-0602","#F0EDE7"],["11-4202","#ECECE7"],["11-4300","#EFEDE3"],["11-4302","#F2F0E3"],["11-0103","#EFEDE1"],["11-0104","#F1ECDD"],["11-0606","#EEEADB"],["11-0701","#EFE8DD"],["12-0601","#EAE0D2"],["11-0604","#F0EAE0"],["11-0605","#EAE3DB"],["13-0905","#DED5C6"],["11-0105","#EEE7D4"],["12-0703","#E3DAC2"],["12-0000","#E2D7C6"],["12-0304","#E1D7C6"],["13-0908","#DED1BC"],["13-1006","#DACBB2"],["12-0709","#E7D2BA"],["11-0110","#F0E3CE"],["11-0907","#EFE1CE"],["12-0704","#ECDDC8"],["11-0809","#F2E1CD"],["12-0710","#EFDEC3"],["12-0605","#DED3BB"],["13-1008","#E0D1B7"],["13-1104","#DFCDBC"],["12-1404","#DBCBBC"],["13-1107","#DECDBF"],["13-1106","#DECEBB"],["13-1308","#DDCCB7"],["12-1403","#DDCEBA"],["13-0907","#DACEBA"],["13-0404","#D1C7B9"],["13-0401","#CCC4B4"],["13-0003","#D6CCC1"],["13-0400","#CCC1B3"],["14-0002","#C4BEB4"],["13-5304","#D4CBBF"],["13-0000","#D6CFC7"],["12-0105","#DED7C4"],["13-0607","#D4C9B6"],["14-1107","#CFC4B1"],["14-1106","#C4BCAD"],["15-1305","#C0B3A3"],["15-1306","#BDAD9E"],["15-1304","#B7A897"],["12-4302","#E1E2DB"],["12-4300","#D9D8D1"],["13-4403","#CECDC1"],["12-4301","#D9D0BE"],["14-0105","#C4C0AA"],["14-6305","#C6C0B1"],["16-1105","#B3A898"],["12-5201","#DFE1D3"],["12-0404","#DAD6CB"],["12-6204","#D6D5C6"],["14-6308","#B9B9A4"],["15-6410","#AAA994"],["15-6307","#B4B3A5"],["14-6408","#A5A696"],["12-5202","#DED7C7"],["12-0104","#E3DECA"],["12-0110","#DED6BE"],["14-0108","#CEC4AE"],["14-0210","#C4BCA4"],["15-0513","#ADA890"],["15-0309","#B2AA97"],["12-0311","#D7D4B9"],["13-1007","#D6CDB1"],["13-0611","#D3CEB0"],["14-0615","#CCC8A5"],["15-1115","#B9AC94"],["17-1107","#948E7C"],["17-0510","#979280"],["13-0513","#DCD4B8"],["13-0711","#D4CDB0"],["13-1105","#C8BCA4"],["16-1119","#A29780"],["17-1108","#998F7F"],["17-1113","#998D7A"],["17-1118","#857860"],["15-1116","#C1AE94"],["16-1010","#AB997B"],["15-1114","#AF9C83"],["16-1315","#AD987D"],["17-1022","#998C6E"],["17-1115","#8F7C64"],["17-1314","#8E7A66"],["14-1108","#DECDB1"],["15-1218","#D1BC9D"],["14-1112","#D2BC9D"],["14-1208","#C2AD92"],["16-1213","#A89583"],["17-1112","#9F9283"],["17-1312","#A59382"],["14-1014","#D0C2A5"],["15-1217","#C7B795"],["15-1216","#C4B396"],["15-1307","#BAAA95"],["16-1101","#AC9F8B"],["16-1104","#AB9E8D"],["17-1109","#9B927B"],["14-1110","#D1BE9A"],["14-1116","#D1B894"],["15-1119","#BFAB83"],["16-0924","#CAAD89"],["16-0920","#C1A786"],["16-1120","#B39D7B"],["16-1324","#BFA077"],["13-1009","#DCCAA9"],["13-1016","#E2C6A5"],["13-1011","#DFC5AC"],["14-1118","#D4B996"],["15-1214","#CBB395"],["15-1020","#C1A68B"],["17-1320","#A68B6F"],["12-0811","#F1D7BA"],["13-1010","#ECD4B6"],["14-1120","#E9C7A4"],["13-1013","#E3C3A5"],["14-1119","#E4C49D"],["13-1015","#DEC19C"],["13-1014","#E0C2A0"],["12-1009","#F9DDCA"],["12-1006","#EBD9C6"],["12-1008","#EFD6C0"],["12-0912","#F8D4B4"],["12-0911","#F3D3B7"],["12-1011","#F3D0B6"],["12-0913","#F4CFB2"],["12-1007","#E8D0BB"],["12-0807","#ECD3BC"],["12-1005","#E7D2BB"],["14-1210","#D8C4AC"],["14-1217","#DEB99C"],["14-1213","#D1B099"],["14-1315","#D3B296"],["14-1209","#CBB7A2"],["14-0708","#C7B8A7"],["14-1212","#D2B8A1"],["15-1215","#BFA68F"],["16-1212","#BAA48F"],["15-1314","#C3A990"],["15-1213","#C8AA8F"],["15-1309","#C2AE9D"],["16-1210","#B7A293"],["15-1308","#BDAD9A"],["16-1310","#AD957F"],["16-1318","#B19886"],["17-1319","#9B8571"],["17-1316","#998576"],["16-1412","#AA9185"],["16-1415","#AC907F"],["16-1414","#A38C79"],["17-1418","#968072"],["17-1321","#927968"],["17-1417","#957867"],["18-1321","#8F7467"],["13-0403","#CFC2B9"],["14-1305","#BBA99F"],["16-0806","#AD9E95"],["15-1506","#A89791"],["17-0807","#8D7C70"],["17-1412","#87766E"],["18-1312","#73615B"],["12-1406","#DBCABF"],["13-3801","#DACDC5"],["16-1211","#9F8E84"],["17-0808","#938176"],["17-1506","#8E837D"],["17-1212","#8D8177"],["17-1409","#816F65"],["15-4504","#BBB1AB"],["16-1406","#AB9F98"],["16-3800","#99908D"],["17-1210","#968F85"],["18-1210","#877F7A"],["17-1410","#857669"],["18-1306","#736763"],["16-1102","#B3AB9E"],["16-1106","#A99A8B"],["17-1009","#9E8D7C"],["17-1311","#918679"],["18-1017","#887568"],["18-1015","#746759"],["19-0916","#64544C"],["16-1407","#AC9F94"],["16-1109","#96887A"],["17-0909","#807366"],["18-1016","#6C6051"],["19-0809","#6A6054"],["19-0808","#70675F"],["18-1304","#6F6560"],["16-0906","#ABA093"],["17-1105","#978C7F"],["17-1310","#8B8170"],["18-0513","#716A61"],["19-0822","#5A564E"],["19-0810","#605B52"],["19-0823","#645A51"],["16-1103","#B1A699"],["16-0205","#9C9387"],["18-1110","#887E74"],["18-1108","#867E74"],["19-0820","#61594E"],["18-1112","#786D60"],["18-0615","#72695C"],["14-4500","#C3C1B9"],["15-4502","#C5BDB5"],["14-4501","#C0BAAD"],["14-0000","#C5BEB6"],["15-4503","#BDB3AB"],["16-1305","#ACA49B"],["16-1107","#A49A8C"],["13-0002","#DCD6D1"],["14-4002","#CAC6C4"],["15-0703","#B2ABAC"],["15-3800","#ACA4A2"],["16-3801","#A39D9D"],["16-3802","#A19C9B"],["17-1508","#7F7C7A"],["15-0000","#B7B1AA"],["16-5803","#9E9D98"],["17-0000","#848587"],["17-1502","#868485"],["17-1500","#82807D"],["18-0403","#62605E"],["18-0601","#6E6E6D"],["14-4203","#C6C4C3"],["16-4703","#999A98"],["16-4402","#A4A29F"],["16-4400","#9B9591"],["17-0207","#938E87"],["17-0205","#8F8C88"],["17-5102","#8C9092"],["12-4306","#DCE0DC"],["13-4303","#C8CCCA"],["15-4703","#AEB3B1"],["16-4702","#9C9F9C"],["18-4105","#858683"],["17-1501","#8B8D8D"],["18-0510","#696F6A"],["12-4705","#D5DED9"],["13-4305","#D0D4CD"],["14-4804","#B5BEB8"],["15-4003","#B0B8B4"],["17-4402","#898F8D"],["18-5105","#697171"],["18-0306","#606360"],["11-4601","#E4E9E9"],["13-4201","#C8CACB"],["15-4101","#A9B1B3"],["15-4305","#9AA4A9"],["17-4405","#7E868A"],["17-3914","#8A8A8D"],["18-0202","#64676A"],["13-4108","#DAD9DB"],["14-4104","#BDC1C0"],["17-5104","#96999C"],["16-3917","#8F8F93"],["15-4304","#8E939B"],["18-4017","#7E7E83"],["18-4004","#66686C"],["14-4201","#C7C8CA"],["14-4102","#C5C9CA"],["13-4104","#C9C9C8"],["14-4103","#BEC2C0"],["14-4107","#BCBCBE"],["14-4105","#BCBFC3"],["14-4202","#B4B7BA"],["16-3850","#9E9EA3"],["16-5102","#9C9B9D"],["16-3915","#96989B"],["17-3913","#87888F"],["17-3911","#868387"],["18-4006","#6D6E72"],["18-3907","#68656A"],["16-5101","#969393"],["17-4014","#868587"],["18-5102","#7C7877"],["17-4013","#7E7C7E"],["18-4005","#6D7073"],["18-4016","#7E7C7C"],["18-4010","#747376"],["16-3803","#A6A0A6"],["17-2601","#91898C"],["17-3802","#908C92"],["17-1503","#7C787C"],["18-3908","#686368"],["19-3803","#615E60"],["18-3906","#5D585F"],["16-0000","#A4A09D"],["17-4016","#898586"],["18-4015","#7E7D80"],["18-0503","#6A6C6B"],["18-5203","#656768"],["18-5206","#605E60"],["19-3906","#505557"],["19-4405","#3B4142"],["19-5002","#43484B"],["19-5005","#484A49"],["19-4406","#48494C"],["19-1100","#474445"],["19-3912","#4F5152"],["19-0205","#494A4D"],["18-0000","#6A6C6E"],["18-0201","#5F6367"],["18-5204","#696667"],["18-5210","#666062"],["19-3910","#575B5F"],["19-0201","#525257"],["19-3901","#545358"],["19-3905","#5E5A5E"],["18-3905","#66636B"],["19-3903","#4D484B"],["19-3900","#5A5659"],["19-3908","#4A484F"],["19-4104","#494D53"],["19-3918","#53525A"],["19-0203","#555459"],["19-3907","#535255"],["19-3917","#58565B"],["19-3902","#4B484D"],["19-4205","#404145"],["19-4007","#3D3F43"],["19-0303","#3E4043"],["19-3911","#3B3C40"],["19-4003","#3F3C41"],["19-4004","#3C3C3E"],["19-4005","#3B3F42"],["19-4006","#3B3D3F"],["19-4008","#403D3F"],["19-4203","#3D3E41"],["19-0405","#4C4C49"],["19-0608","#4D4B46"],["19-0000","#454546"],["19-0506","#494A47"],["19-0508","#494948"],["19-4305","#3D4040"],["19-5708","#3D4243"],["19-0812","#4C4743"],["19-0814","#524841"],["19-0614","#4E4841"],["19-0712","#4D4440"],["19-0910","#504846"],["19-1102","#413E3F"],["19-1103","#443E40"],["19-1015","#554B47"],["19-0912","#4D433E"],["19-0840","#4C4441"],["19-1016","#4B413E"],["19-0915","#473F3E"],["19-1106","#483D3C"],["19-1101","#433F3F"],["19-1213","#5A4B47"],["19-1012","#5F4E4B"],["19-1314","#4B4140"],["19-1109","#473E3E"],["19-1111","#473F3F"],["19-1018","#463D3E"],["19-3909","#443D42"],["19-1118","#5B4C46"],["19-1234","#624A44"],["19-1420","#5D4A48"],["19-1518","#584747"],["19-1215","#5D4944"],["19-1419","#574542"],["19-1110","#4B3F40"],["19-1224","#665149"],["19-1233","#6C5046"],["19-1214","#644B44"],["19-1235","#674D46"],["19-1218","#604E47"],["19-1432","#604944"],["19-1322","#604B4B"],["19-1217","#6E574D"],["19-1430","#75544D"],["19-1228","#76554E"],["19-1220","#6A4E46"],["19-1431","#6A4C48"],["19-1321","#5F4241"],["19-1317","#5A4243"],["19-1436","#6F4D47"],["19-1320","#764E4B"],["19-1334","#835049"],["19-1429","#72423B"],["19-1337","#753D3C"],["19-1331","#704445"],["19-1325","#704A49"],["18-1336","#976459"],["18-1433","#965E53"],["18-1425","#855451"],["18-1541","#78463E"],["19-1338","#7B4748"],["18-1325","#7E4847"],["19-1435","#714640"],["18-1432","#9F5E55"],["18-1243","#8C5A4B"],["18-1341","#8D574B"],["18-1323","#874C4A"],["19-1541","#834A42"],["19-1428","#784F45"],["19-1242","#774F3F"],["18-1346","#AF5F54"],["18-1350","#A3574D"],["18-1438","#975A58"],["18-1531","#904F4C"],["18-1442","#914C48"],["18-1440","#944743"],["19-1540","#824945"],["18-1443","#A45F57"],["18-1434","#A25F57"],["18-1441","#A15E4F"],["18-1343","#9D6154"],["19-1245","#8C5247"],["19-1333","#835347"],["19-1230","#725246"],["18-1239","#9E654F"],["18-1140","#8E5E4A"],["17-1142","#91624D"],["18-1242","#8A5B4C"],["18-1230","#875545"],["18-1238","#895A4D"],["19-1241","#7D5446"],["17-1422","#917363"],["18-1320","#866459"],["18-1229","#876456"],["18-1235","#8F6457"],["18-1421","#89675F"],["18-1314","#7F665C"],["18-1326","#7F625A"],["18-1124","#745B4C"],["18-1033","#795C46"],["18-1031","#755841"],["18-1027","#6B5445"],["18-1222","#70594D"],["19-1121","#655248"],["19-1116","#5C4D43"],["18-1019","#8C725F"],["18-1028","#6C4F3D"],["18-1307","#6D5D58"],["19-1119","#614F43"],["19-1223","#684B41"],["19-1216","#5D4E4B"],["19-0913","#544743"],["17-1322","#A5846C"],["17-1044","#967152"],["17-1327","#967759"],["18-1030","#91705A"],["18-1024","#88644B"],["18-1137","#866351"],["19-1227","#704D3E"],["17-1324","#A08068"],["17-1318","#A78C79"],["17-1317","#96796C"],["18-1324","#927567"],["18-1125","#7F5F50"],["18-1130","#795C4F"],["18-1232","#6F5346"],["17-1223","#A98B74"],["16-1323","#B18B73"],["17-1225","#AF8971"],["17-1226","#A8856E"],["17-1328","#AE8765"],["17-1221","#AF876D"],["17-1330","#A1785A"],["16-1317","#B79B87"],["16-1320","#BC9D89"],["16-1221","#B49581"],["17-1224","#AD846B"],["17-1227","#A9836E"],["17-1230","#A47B67"],["18-1422","#89685F"],["13-1108","#E3C6B4"],["14-1314","#E4BDAA"],["15-1317","#C19E87"],["15-1316","#CAA590"],["16-1219","#C09A87"],["16-1220","#C49783"],["16-1422","#B78A75"],["13-1405","#E6D5C8"],["12-1206","#EAD2C6"],["14-1309","#DDBFB9"],["14-1310","#D6B6A8"],["14-1307","#CEB3A6"],["15-1315","#C6A994"],["15-1511","#C3A292"],["11-1006","#EDE6E2"],["11-1007","#EFE3DF"],["11-2309","#F4E6E2"],["12-2103","#EADEDB"],["11-0603","#E5DCD5"],["12-1105","#F1DDD3"],["11-1305","#F3E1D8"],["11-1302","#F1E9E0"],["12-1106","#F2E7DB"],["11-1306","#F2E2D8"],["11-1005","#EDE5DE"],["12-1108","#EFE2D4"],["12-2901","#E6D2C9"],["13-1504","#E6CDC5"],["11-1404","#F3E7DC"],["12-1107","#F2DBCC"],["12-1209","#F2D9CC"],["12-1110","#F8DBC9"],["12-1010","#FAD6C6"],["13-1404","#F0CFC3"],["12-1207","#F2CEC5"],["13-1406","#EED1C7"],["13-1407","#F5D5CD"],["13-1208","#E7BFB4"],["14-1312","#E5BDB0"],["14-1311","#DFB7AA"],["14-1313","#DEB3A3"],["14-1316","#E0AD9E"],["13-1109","#EBC6B0"],["13-1114","#F4C7AB"],["15-1319","#E6B49B"],["14-1220","#E7AF8F"],["15-1318","#DEAD95"],["15-1322","#D09D83"],["16-1330","#D09786"],["12-0813","#F2D6B3"],["13-1024","#EBC594"],["13-1018","#E3BD8F"],["12-0921","#E5BD8E"],["14-1127","#E0B588"],["14-1122","#DBB690"],["16-1333","#B9926C"],["15-1125","#D0A783"],["15-1220","#CBAA88"],["15-1231","#D5A576"],["16-1341","#C39169"],["15-1425","#C4936F"],["15-1430","#C08E68"],["16-1438","#A9754F"],["15-1225","#CDAB81"],["16-1331","#CB9B79"],["16-1336","#B4875F"],["16-1235","#BB8C69"],["16-1432","#A97A54"],["17-1134","#A07855"],["17-1137","#A67651"],["17-1336","#A87452"],["17-1340","#A66948"],["18-1154","#945F3D"],["17-1052","#99623A"],["18-1155","#935D3B"],["18-1142","#975E3E"],["18-1148","#8B5A3D"],["15-1327","#DC9D7C"],["16-1327","#C58B6C"],["16-1332","#C68667"],["17-1430","#A67459"],["16-1429","#B37359"],["17-1147","#A76D54"],["17-1143","#AE7757"],["16-1328","#C88E6F"],["16-1439","#CA815A"],["17-1436","#B9745A"],["17-1347","#B26B54"],["18-1250","#A15A40"],["17-1342","#A55B3B"],["18-1246","#9C583A"],["18-1450","#BC6350"],["18-1451","#B26150"],["18-1340","#A6533A"],["18-1345","#A2553A"],["18-1355","#AB4C3A"],["19-1250","#924A3D"],["18-1244","#8C5641"],["17-1540","#C26D5E"],["17-1532","#AE6C60"],["18-1535","#B96758"],["18-1444","#9F534F"],["18-1540","#9D504C"],["18-1547","#99403A"],["18-1449","#984A46"],["16-1520","#DE948F"],["16-1329","#E39282"],["16-1431","#CD8578"],["16-1624","#D87E7B"],["18-1629","#BB6869"],["18-1630","#AD6464"],["18-1648","#B04E52"],["14-1318","#EAAD9D"],["15-1523","#E09C8B"],["17-1341","#D98575"],["16-1532","#D57C6F"],["16-1526","#CE837A"],["17-1544","#C46157"],["18-1536","#AD5B54"],["15-1333","#E2957A"],["16-1340","#D18365"],["16-1435","#D17C62"],["15-1429","#D07B61"],["16-1441","#D07157"],["16-1440","#C76C5A"],["17-1446","#B76452"],["15-1520","#EC9787"],["16-1529","#EC8A83"],["16-1345","#D6866A"],["17-1345","#BE624C"],["17-1444","#C86656"],["16-1450","#DF7258"],["18-1354","#B65748"],["15-1433","#FEA088"],["14-1228","#FFBAA0"],["15-1331","#F9A482"],["15-1530","#F89685"],["15-1340","#F39470"],["15-1239","#FFA47F"],["16-1442","#F6896A"],["12-0915","#FCD0B8"],["12-0917","#FCCFAD"],["14-1219","#F9BFAA"],["13-1021","#FCC0A3"],["14-1323","#F6AD99"],["14-1227","#F1AC88"],["15-1334","#EC9A79"],["13-1023","#FFC196"],["14-1225","#F8BF9A"],["14-1230","#F6B088"],["14-1231","#FFB482"],["14-1241","#FAAC7E"],["14-1135","#FFB17F"],["14-1139","#F9A76C"],["13-1026","#FFD4B1"],["13-1020","#FCC19A"],["13-1022","#F3C29A"],["13-1125","#F5B995"],["14-1224","#EEAB8A"],["16-1338","#E39065"],["16-1337","#D9875D"],["13-1017","#F4CAA8"],["13-1019","#FAC69D"],["14-1133","#EEA975"],["15-1234","#DE9D69"],["15-1237","#DD9760"],["16-1346","#CA7E4A"],["16-1443","#D0804F"],["16-1347","#C77748"],["16-1348","#C6794C"],["18-1248","#B35F43"],["16-1448","#C96939"],["16-1449","#BC603A"],["17-1353","#C46B45"],["16-1260","#D26A3E"],["15-1242","#F29863"],["16-1350","#E17F47"],["16-1253","#DF7F45"],["16-1454","#DB7344"],["17-1145","#C86C32"],["17-1140","#C66E33"],["18-1249","#BC6537"],["15-1245","#FFA76C"],["15-1243","#FFA269"],["15-1247","#F7955D"],["16-1257","#F18643"],["15-1150","#E4882E"],["16-1164","#E57E2E"],["16-1255","#E47A2E"],["15-1160","#FFA351"],["15-1153","#F0973D"],["15-1151","#F59D4D"],["15-1157","#F98E30"],["15-1164","#FF911F"],["15-1262","#FF8B27"],["15-1263","#FF8927"],["15-1264","#FF842A"],["15-1335","#FF7F28"],["17-1350","#FF7B25"],["16-1364","#FF7338"],["16-1356","#F57B35"],["16-1358","#FD7133"],["17-1349","#E87133"],["16-1343","#F58C57"],["16-1344","#E68059"],["16-1359","#FD823E"],["17-1360","#E87544"],["16-1459","#EA6F46"],["16-1462","#F36E3C"],["16-1453","#FB6E45"],["16-1357","#FF8C54"],["16-1360","#FF895A"],["16-1349","#F3794E"],["16-1361","#F77042"],["17-1361","#F7613A"],["16-1363","#E56132"],["16-1460","#FB6D44"],["16-1362","#FB683F"],["16-1452","#F2714E"],["17-1452","#CF5E44"],["17-1462","#F75B3B"],["17-1461","#E45C3B"],["17-1464","#F25E35"],["17-1463","#E34F33"],["17-1456","#E2654D"],["17-1450","#C25448"],["18-1448","#BF5B4E"],["18-1447","#C2634F"],["17-1553","#CC5853"],["18-1454","#C15044"],["17-1449","#C04E38"],["18-1445","#DD523F"],["17-1558","#DC4C46"],["18-1561","#D84538"],["17-1563","#E94B3C"],["17-1564","#DE4D44"],["18-1564","#C94235"],["18-1550","#BD4848"],["16-1544","#F57A6E"],["16-1541","#F77765"],["17-1547","#E66C62"],["16-1451","#F96A51"],["17-1562","#EA5643"],["18-1664","#D2393E"],["18-1549","#BD3D3A"],["16-1543","#FF8573"],["16-1548","#F77D73"],["16-1539","#EC776B"],["16-1542","#FF8673"],["16-1545","#F7796D"],["16-1546","#FC766A"],["17-1656","#F0605C"],["15-1435","#FF9A8D"],["16-1641","#F37778"],["16-1640","#F86E76"],["17-1647","#ED696F"],["17-1643","#E67072"],["17-1644","#D8696B"],["17-1545","#B85357"],["16-1632","#F48385"],["18-1649","#DB6265"],["17-1635","#D85F67"],["18-1651","#DB555B"],["17-1654","#CD4350"],["17-1641","#BB525B"],["18-1643","#A74B54"],["18-1661","#C24654"],["17-1663","#D84652"],["18-1652","#BF4450"],["18-1660","#CE3845"],["18-1762","#D84552"],["19-1760","#B43B4C"],["18-1764","#C63A4F"],["18-1763","#CC333D"],["18-1555","#BC3D3A"],["18-1657","#AC303D"],["18-1551","#B8363B"],["18-1659","#B8333E"],["18-1658","#A74145"],["19-1758","#A52E3A"],["18-1559","#D34038"],["18-1563","#C33C41"],["18-1453","#AC423D"],["18-1553","#B73438"],["19-1756","#B53743"],["18-1552","#9F383A"],["19-1755","#A2323C"],["18-1662","#D13B40"],["17-1664","#DF484F"],["19-1763","#BC2E3E"],["18-1663","#C03443"],["19-1664","#BD3645"],["19-1663","#B93845"],["19-1662","#A9363E"],["18-1653","#BA2B42"],["18-1761","#B8314B"],["19-1764","#B23649"],["18-1654","#BB2F43"],["19-1762","#B1354D"],["18-1759","#B2334B"],["19-1862","#9E3744"],["18-1655","#BF3A45"],["19-1757","#B02B3B"],["19-1559","#A13941"],["19-1761","#B12D41"],["19-1759","#A74450"],["19-1863","#9A3141"],["19-1557","#9D363F"],["19-1554","#9B313C"],["19-1657","#923943"],["19-1875","#96353D"],["19-1558","#A33745"],["19-1537","#833C3F"],["19-1653","#93363D"],["19-1527","#714145"],["19-1650","#803D45"],["19-1652","#7A3640"],["19-1534","#7A393E"],["19-1555","#863339"],["19-1531","#803A40"],["19-1535","#74373A"],["19-1327","#694546"],["19-1629","#794045"],["19-1536","#804145"],["19-1934","#81404A"],["19-1726","#6F4048"],["19-1724","#713B43"],["19-1525","#6D4549"],["19-1521","#674A4E"],["19-1533","#8B5252"],["19-1530","#874850"],["19-1524","#754A4E"],["19-1930","#6F3841"],["19-1522","#663F45"],["19-1725","#6B3B44"],["19-1526","#674248"],["18-1631","#9C505D"],["19-1543","#90484D"],["19-1532","#874648"],["19-1656","#8E3841"],["19-1655","#964049"],["19-1840","#9C4150"],["19-1940","#823B47"],["16-1617","#D0878E"],["17-1927","#D16D7C"],["17-1929","#CE6981"],["18-1634","#B05A68"],["18-1635","#B65E6B"],["17-1633","#B55464"],["18-1633","#B15662"],["14-1911","#F5B2C0"],["15-1816","#EC9EAC"],["14-1714","#F0ABAE"],["15-1717","#ECA1A6"],["15-1821","#F498A0"],["15-1624","#F88D97"],["15-1626","#FC8B93"],["15-1611","#D7A3A4"],["15-1614","#D0969E"],["16-1610","#CC8A92"],["16-1720","#E48990"],["16-1626","#E28388"],["16-1620","#DD727D"],["17-1537","#AF5B5F"],["15-1415","#E3ACA4"],["16-1511","#CE9694"],["17-1718","#B87D83"],["17-1514","#B28282"],["17-1424","#B3746D"],["17-1518","#B17D7B"],["17-1520","#B17370"],["14-1506","#D6B9B1"],["14-1803","#DABEBA"],["15-1512","#CDA7A0"],["15-1516","#D4A299"],["16-1516","#BF8B84"],["18-1435","#A36E6D"],["18-1426","#885558"],["15-1515","#DDA9A2"],["16-1518","#CB8986"],["16-1522","#C2877D"],["17-1524","#BA7D76"],["18-1436","#B0746D"],["17-1525","#A26E64"],["17-1516","#9A7673"],["14-1418","#F9BDB0"],["13-1318","#FFC5B2"],["14-1419","#F9B6A9"],["14-1420","#FBB2A9"],["14-1324","#FBB2A7"],["15-1423","#FAA094"],["15-1621","#F4A19F"],["13-1513","#F9C5C2"],["13-1310","#F4C3C0"],["13-1510","#FDC2BA"],["14-1511","#ECB7B7"],["14-1513","#F2B5B0"],["14-1521","#F4A7A2"],["16-1434","#E39A93"],["13-2005","#F4C3C4"],["13-2003","#F5C2C2"],["12-1708","#F8C5C8"],["14-1910","#F6BCC6"],["13-1716","#FFBBB9"],["16-1615","#E28790"],["15-1919","#F898A6"],["13-1501","#F3D6D1"],["12-1212","#F5CEC8"],["13-1408","#EFC5BE"],["13-1409","#F6C8C3"],["13-1511","#FAD0C9"],["13-1520","#F8CDCD"],["15-1712","#FAA3A5"],["12-1303","#F1DFE1"],["12-1304","#F3DAD6"],["12-1706","#F5D3D4"],["13-2004","#E9C8CA"],["14-1907","#E1B8B9"],["14-1508","#DCB4B3"],["14-1904","#EBB1B9"],["11-2409","#F0E3E0"],["12-1305","#F3DEDF"],["11-1408","#F2DBD7"],["12-2102","#EADAD9"],["12-1605","#EED4D1"],["14-1905","#E3C1C1"],["13-2007","#E7C6C8"],["12-1310","#F5D3DB"],["12-1813","#F8D3D5"],["12-2902","#E3D2CF"],["12-2904","#EED7D9"],["13-2803","#E3C9CE"],["13-1904","#E8C7CE"],["12-1808","#F5CCD1"],["12-2807","#F2D6E1"],["13-2808","#F0D1D8"],["13-2802","#EFC2D1"],["13-1906","#F7C2D0"],["13-2006","#F5BDC8"],["13-2010","#F1BCCA"],["14-1909","#E7B6BE"],["11-2511","#F0DDE1"],["12-2906","#F1D7DD"],["13-2807","#ECCFDB"],["13-2801","#F6CFDD"],["14-2304","#D9B0B9"],["13-2804","#EAC4CF"],["13-2008","#EAB4C4"],["12-2907","#F8E3E8"],["11-2509","#EADEE3"],["12-2905","#E7CDD9"],["13-3406","#DCCED9"],["12-2903","#E0C7D2"],["13-3405","#E1C7D9"],["14-3203","#DDB5C8"],["12-2908","#F4DAE9"],["13-2806","#EDC2D8"],["13-2805","#EAC0D3"],["13-2809","#F1C1D8"],["14-2710","#E9ADCA"],["14-2808","#E7B7CF"],["14-3205","#EFC2E1"],["13-2800","#F0CDE5"],["13-3207","#F4CFE0"],["14-2806","#F0C0D8"],["15-2218","#F1ABCF"],["15-2213","#F1A9CF"],["16-2118","#D66D97"],["17-2519","#CF608F"],["15-1915","#E87D98"],["15-1922","#F492A2"],["16-1731","#F88192"],["17-1928","#E77591"],["17-1930","#F16886"],["17-1926","#D36480"],["17-1739","#CA4564"],["16-1723","#E87A90"],["16-1735","#FA7B95"],["17-1741","#C4516C"],["17-1744","#EE6779"],["17-1640","#BE4253"],["18-1665","#CC4358"],["18-1750","#BE3455"],["15-1822","#F891A3"],["17-1746","#ED6075"],["17-1736","#E5707F"],["17-1755","#E64D67"],["17-1753","#D74B61"],["18-1755","#E44F6B"],["18-1756","#DC455F"],["18-2120","#D85A7B"],["17-1740","#C35369"],["18-1741","#B63E5C"],["18-1852","#C3375C"],["18-1760","#B4334D"],["17-1842","#D84565"],["18-1856","#CB335C"],["18-1754","#D64161"],["18-1945","#C0335F"],["18-1951","#BF3360"],["18-1950","#B53359"],["19-1955","#A03553"],["19-1860","#A23550"],["19-1850","#9B3D55"],["17-1937","#E86288"],["18-2043","#CD4A76"],["19-2039","#A03A59"],["19-2041","#9B3456"],["19-2045","#A93660"],["19-2047","#9F3E5D"],["19-2033","#893A53"],["15-1920","#E982A0"],["16-2126","#E46C99"],["17-2127","#D6638D"],["17-2230","#DB6292"],["17-2033","#DD5B86"],["18-2133","#CE567E"],["17-1831","#BB4F72"],["14-2311","#EEA5C5"],["15-2216","#F38CB1"],["15-2217","#E683A9"],["16-2124","#EA7DA4"],["16-2120","#D673A0"],["17-2120","#D47898"],["17-2520","#C76491"],["15-2215","#E89ABC"],["15-2214","#E28FB4"],["15-2718","#E08CB9"],["17-2623","#CF6AA2"],["17-2227","#BE4C7C"],["18-2333","#C8508B"],["17-2031","#C34E7C"],["16-2122","#ED7FA8"],["17-2235","#E66694"],["18-2330","#CC4C8B"],["17-2034","#CE4A7E"],["17-2036","#CF4F80"],["18-2143","#CB4273"],["18-2042","#C43F66"],["17-2619","#DD72A8"],["17-2625","#CF6FA7"],["17-2521","#C15B89"],["18-2436","#CD497D"],["18-2140","#CB3E77"],["18-2045","#C83E74"],["18-2336","#BB467D"],["17-2627","#D368A2"],["17-2624","#C25391"],["18-2615","#A65382"],["18-2328","#B44580"],["18-2326","#AC4977"],["19-2434","#A14275"],["18-1722","#8A4563"],["18-2525","#A04E78"],["18-2527","#9A3F6F"],["19-2431","#893D62"],["19-2432","#864061"],["19-2430","#723E54"],["19-2428","#753D5A"],["19-2429","#6D3D5B"],["17-2617","#A95988"],["18-3027","#AD5691"],["18-3339","#9F4C84"],["19-2630","#964677"],["18-3022","#964B7C"],["18-2320","#944477"],["18-2929","#924678"],["18-3224","#B067A1"],["18-3331","#975591"],["18-3324","#8A4E85"],["19-2924","#894777"],["19-3138","#8C4C83"],["19-2820","#75436A"],["19-3022","#684463"],["17-3014","#A9729D"],["17-3323","#A96BA6"],["18-3120","#925188"],["18-3025","#99598F"],["19-3336","#814A7E"],["19-3230","#724066"],["18-3340","#6A4069"],["16-3115","#C383B0"],["17-3020","#BC70A4"],["17-3240","#B66CA2"],["17-3023","#B5639F"],["18-3230","#A55E90"],["18-3015","#84547A"],["18-3014","#805170"],["15-3216","#D5A0CB"],["16-3320","#BE81B6"],["16-3321","#BF7DB6"],["17-3310","#B581AC"],["17-3320","#AD69A2"],["18-3223","#A15491"],["18-3024","#8C4B81"],["15-3412","#D0ACD0"],["16-3416","#C493C3"],["15-3214","#D29AC7"],["14-3209","#DAA4C9"],["15-2913","#DD9CC7"],["16-3118","#D88ABE"],["16-3116","#CB83B5"],["14-3207","#DBB1CD"],["16-2111","#B3819A"],["16-2614","#D091B2"],["15-2210","#D295AC"],["16-2215","#CF87A1"],["15-1912","#E198AD"],["16-1715","#D0879D"],["14-2305","#D7A7B4"],["14-2307","#DCABBA"],["15-1906","#CAA2AA"],["16-1712","#C18A9D"],["16-1710","#BD8793"],["16-1708","#BA8E9C"],["17-1610","#9C7988"],["17-1609","#AA737D"],["17-1614","#98606B"],["17-1522","#AD6472"],["18-1718","#865666"],["18-1725","#925266"],["18-1619","#885461"],["18-1420","#81565D"],["17-1623","#A76277"],["17-1608","#AB7184"],["17-1723","#A45872"],["18-2027","#863D55"],["19-2030","#84394F"],["19-2025","#823F54"],["19-2024","#7A3F4F"],["15-1607","#C4A4A3"],["17-1512","#A57D85"],["17-1511","#97737E"],["18-1613","#865762"],["18-1418","#815560"],["18-1616","#89595F"],["18-1614","#7F5660"],["15-1905","#C3ADB3"],["15-2705","#C2A9B3"],["15-2205","#C1A4B2"],["16-3205","#B59BA6"],["17-1605","#9C8690"],["17-2411","#998189"],["18-2109","#8A6F79"],["13-3804","#D8CDCF"],["15-2706","#C1AFB2"],["16-1707","#AD9294"],["16-1806","#AE9092"],["18-1807","#8A7377"],["18-1612","#826567"],["18-1512","#835E63"],["14-3803","#D5C3C2"],["16-1509","#B9A59F"],["16-1508","#B89C96"],["16-1510","#B09894"],["17-1510","#927A77"],["18-1415","#735957"],["18-1409","#6F5E5F"],["13-3803","#D5CCCC"],["16-1703","#AB9995"],["16-1506","#A79592"],["19-1620","#5F4B51"],["18-1404","#6E6267"],["18-1506","#6E5F61"],["19-1606","#5D4B51"],["16-1606","#96868B"],["17-1708","#776570"],["18-1705","#796472"],["18-1405","#725F69"],["18-1708","#77636E"],["18-1706","#6E5E6C"],["19-3316","#524550"],["18-1411","#715360"],["19-2311","#654D57"],["19-1621","#614B50"],["19-1624","#5C4A50"],["19-1625","#5E4648"],["19-1623","#60474D"],["19-1619","#534548"],["19-1716","#624350"],["19-1718","#58414B"],["19-1627","#5F3E45"],["19-1617","#6A464F"],["19-1528","#643E46"],["19-1529","#643E47"],["19-2118","#534249"],["18-1709","#865F71"],["18-1710","#8E6678"],["19-2014","#654856"],["19-2315","#604151"],["19-1608","#644D5C"],["19-2514","#5A4252"],["19-2520","#583C4B"],["17-1710","#9B6C86"],["17-1612","#99687D"],["17-1818","#A8627F"],["18-1720","#8D5269"],["18-1716","#815568"],["19-2410","#704058"],["19-2312","#684955"],["14-3204","#CFAEBF"],["15-3207","#C49EB7"],["16-2107","#B2889E"],["18-3011","#856079"],["18-3211","#846B81"],["18-3012","#7D5E77"],["18-3013","#75536A"],["16-3307","#AF91A9"],["17-3410","#9D7894"],["18-3220","#91738B"],["18-3418","#87678A"],["18-3218","#815C83"],["19-3424","#765278"],["18-3415","#77617B"],["18-3522","#7E5D86"],["19-3325","#7A5076"],["19-3223","#724F6E"],["19-2524","#6D3E5B"],["19-2420","#58394B"],["19-2620","#533A4B"],["19-2816","#574354"],["14-3206","#D1B6CC"],["16-3110","#B78BB0"],["17-3313","#9C789A"],["16-3310","#B490AF"],["17-3520","#9E7FA6"],["17-3612","#917A9A"],["18-3530","#966E9C"],["15-3520","#BE9EC9"],["16-3521","#BEA0C4"],["16-3617","#BB97C6"],["16-3520","#B185BA"],["17-3617","#9D7EB1"],["17-3640","#987DB4"],["18-3628","#966DA5"],["13-3802","#DCD4DC"],["13-3820","#D4C7D9"],["13-3805","#CDC3D3"],["15-3507","#B9A8BE"],["15-3508","#C0ABC2"],["16-3525","#AA8CB0"],["16-3817","#A28AAC"],["14-3612","#C4AED0"],["15-3620","#BCA0CB"],["15-3720","#B6A1CD"],["15-3716","#B2A1CD"],["16-3815","#A893BD"],["16-3720","#A290C0"],["17-3735","#9C8BBC"],["17-3619","#916DA4"],["17-3628","#9369A8"],["18-3533","#8D5B99"],["19-3438","#7E5186"],["18-3634","#7F619B"],["19-3526","#765686"],["19-3425","#735079"],["18-3633","#7A5999"],["18-3531","#7A5491"],["19-3542","#6E4C82"],["19-3536","#764C82"],["19-3540","#6F4774"],["19-3528","#614468"],["19-3220","#644564"],["18-3635","#6D5380"],["18-3520","#775B8C"],["18-3615","#604E79"],["18-3518","#6F577E"],["18-3521","#6C4C7D"],["18-3540","#76528B"],["19-3514","#614266"],["19-3518","#5B4161"],["19-3632","#5A446D"],["19-3628","#563C65"],["19-3640","#533F5C"],["19-3218","#584157"],["18-3410","#625162"],["19-3217","#573E54"],["18-3513","#72617D"],["19-2814","#654F6A"],["19-3323","#5E465C"],["19-2009","#604B5E"],["19-3714","#58495D"],["19-3519","#524255"],["19-3520","#4E3D53"],["18-3714","#625871"],["18-3715","#6E6276"],["18-3620","#67577A"],["19-3622","#61526E"],["19-3620","#5C4E71"],["19-3215","#584962"],["19-3619","#564C5C"],["19-3722","#554A6D"],["19-3716","#54495F"],["19-3720","#4C3E55"],["19-3617","#493F50"],["19-3712","#4C4551"],["19-3725","#50485B"],["19-3728","#554863"],["18-3834","#736C99"],["18-3840","#695FA2"],["19-3850","#57508C"],["19-3847","#544B82"],["19-3737","#5A4678"],["19-3750","#4F3F68"],["19-3731","#504363"],["17-3834","#8272AD"],["18-3737","#715C99"],["18-3839","#625593"],["18-3838","#6B5B95"],["19-3748","#605089"],["19-3642","#634F82"],["19-3638","#64437D"],["14-3812","#BFB1D2"],["15-3817","#B2A4D0"],["16-3823","#9C90C4"],["17-3725","#9D86BD"],["17-3730","#8B7AB0"],["17-3826","#8278A9"],["19-3730","#605282"],["14-3710","#BDB1CB"],["16-3810","#A19AB3"],["16-3812","#9993B1"],["17-3817","#8A83A3"],["17-3812","#8B839D"],["17-3615","#8E7CA5"],["18-3718","#7F7398"],["15-3807","#BBB6C6"],["14-3907","#BCB7CA"],["14-3904","#BCB8C8"],["17-3910","#9690A3"],["17-3810","#8D8598"],["18-3710","#7F7785"],["18-3712","#756C7F"],["14-3903","#C0B9C2"],["15-3802","#B4A8AC"],["14-3906","#B4ACB3"],["14-3805","#BCB1BE"],["17-3808","#9C8D9A"],["16-3304","#A994A0"],["17-1505","#98878F"],["13-4105","#D1D0D8"],["14-3905","#C0BDD1"],["16-3911","#9F99AC"],["16-3905","#9E9CA9"],["16-3907","#9C9CA9"],["17-3906","#918E9B"],["18-1703","#6D6771"],["15-3910","#A3A3BC"],["15-3908","#B0B3C7"],["15-3912","#9CA0B5"],["17-3933","#86879E"],["17-3907","#83838F"],["18-3933","#77798E"],["18-3812","#6C677D"],["14-3911","#B9B7D4"],["15-3909","#A5A8C4"],["16-3930","#959AC0"],["17-3925","#8B8DB2"],["18-3820","#6A698F"],["18-3817","#686884"],["19-3842","#53507A"],["16-3931","#9C9CC4"],["17-3924","#7880A9"],["18-3930","#6C76A1"],["18-3833","#696A9E"],["18-3828","#696697"],["19-3947","#555282"],["18-3963","#494A83"],["17-3929","#8B96C9"],["17-3932","#7D84BD"],["17-3940","#757EB9"],["18-3944","#5F65A2"],["18-3950","#6266A3"],["18-3943","#6364A5"],["19-3832","#4B4C76"],["16-3925","#9199CC"],["17-3930","#888FC7"],["17-3934","#6C80BE"],["18-3935","#697CB5"],["18-3946","#5A69AF"],["19-3955","#4D4E8D"],["19-3951","#474981"],["17-4037","#5F7DBE"],["18-3945","#5065AC"],["18-3949","#3E55AB"],["19-3950","#485489"],["19-3954","#3F488E"],["19-3952","#3E4989"],["19-3864","#414A7E"],["19-3964","#3A5081"],["19-4055","#415786"],["19-4041","#3B5B8A"],["19-4057","#395081"],["19-4044","#3D4D7A"],["19-4029","#394868"],["19-3953","#384477"],["19-4045","#2D5593"],["19-4150","#2E5D9F"],["18-4148","#3263A4"],["19-4049","#1B538F"],["19-4050","#315592"],["19-4053","#375998"],["19-4056","#3D5C97"],["18-4039","#547DB9"],["18-4043","#4871B3"],["18-4143","#4178BC"],["18-4051","#3B64A7"],["18-4048","#3F69AA"],["19-4058","#415997"],["19-4054","#485F91"],["18-4141","#4176B0"],["18-4250","#006FAF"],["18-4244","#046AAA"],["18-4045","#31679F"],["19-4151","#1F609E"],["19-4048","#30598C"],["19-4052","#34558B"],["16-4132","#6FA0D8"],["17-4139","#508BC3"],["17-4245","#277FBB"],["18-4252","#007BBB"],["18-4247","#0078BA"],["18-4140","#3078B4"],["19-4245","#195D99"],["14-4320","#7AB7DC"],["15-4323","#61A9D2"],["16-4134","#59A0D1"],["17-4435","#2D90C6"],["17-4129","#3785AC"],["18-4032","#3B6A90"],["18-4037","#35709C"],["14-4122","#95B8D9"],["15-4225","#6FAAD3"],["17-4032","#638DB7"],["18-4036","#5581AB"],["17-4033","#5B84B1"],["17-4029","#607DA0"],["18-4029","#44638C"],["15-4020","#98B2D1"],["16-4121","#7296BB"],["16-4021","#718DB1"],["18-4035","#5C84A7"],["18-4027","#586E8B"],["18-3929","#586C8A"],["19-4026","#45566F"],["16-4018","#6F8AAD"],["17-4027","#5D7AA5"],["17-4028","#587199"],["18-4034","#3E6A93"],["18-4041","#45689A"],["19-4039","#46618E"],["19-4037","#416392"],["15-3932","#859DC5"],["18-4033","#5B86B2"],["18-4022","#3E6490"],["19-4042","#365176"],["19-4035","#405A7A"],["19-4033","#304561"],["19-4117","#3F4B5B"],["16-4031","#7592CA"],["16-4032","#6A8DC3"],["17-4041","#5B89CB"],["16-4033","#6585C1"],["17-3936","#6987BC"],["18-3937","#5876A7"],["18-3928","#526891"],["16-3923","#A4ABD5"],["16-3921","#9BA6C9"],["15-3919","#95AAD3"],["15-3930","#7E9CD3"],["16-3920","#8B9CC0"],["16-4030","#8A9FCC"],["16-3929","#8396C9"],["15-4031","#A6BEE5"],["15-3917","#8BA7CE"],["15-3920","#8DACD3"],["15-3922","#97B4E2"],["16-4020","#7899C8"],["16-4029","#7592C2"],["18-3936","#647EAC"],["13-4202","#C1D6EA"],["14-4005","#BCD5EA"],["14-4124","#99BDE4"],["14-4214","#95B1CE"],["14-4121","#92B2D5"],["17-4140","#5C98CD"],["17-4030","#6489B8"],["13-4306","#D4E4F0"],["13-4302","#C8D3DF"],["14-4112","#AABDD4"],["14-4115","#A1B5D0"],["15-4030","#9EB4D4"],["16-3922","#9AA8C9"],["16-4022","#8097B6"],["13-3920","#BDC4D6"],["14-4110","#B6C0D6"],["14-3949","#BBC3D7"],["15-3915","#A0B0D1"],["14-3912","#A6AFC2"],["16-4016","#93A6BE"],["15-4009","#95A1B7"],["12-4108","#D1DAE7"],["13-4110","#C2C9D6"],["14-4211","#ADBDCC"],["16-4023","#8294AC"],["17-3912","#6C7690"],["17-3926","#79879F"],["18-3919","#576A7E"],["16-3919","#909BB5"],["16-4019","#839ABB"],["17-4015","#6B7D98"],["17-3915","#76819B"],["17-3917","#77839E"],["17-3918","#707E9B"],["19-3929","#535D71"],["18-3916","#687585"],["18-3910","#61697A"],["18-3912","#616676"],["19-4121","#384B60"],["19-4028","#414C60"],["19-4118","#425267"],["19-4122","#354558"],["17-3919","#8791B5"],["17-3923","#67789C"],["18-3921","#4D6080"],["19-4030","#4C5B7D"],["19-3926","#52566C"],["19-4031","#485167"],["19-4024","#363D4E"],["17-3920","#7181A3"],["18-3920","#566284"],["18-3917","#565F7E"],["19-3928","#515A75"],["19-3919","#595F73"],["19-3915","#4D4E5F"],["19-3815","#3A384D"],["17-3922","#747EA0"],["18-3927","#666E91"],["18-3932","#5B6487"],["19-3936","#55567B"],["19-3839","#4A4A69"],["19-3830","#3F3C57"],["19-3810","#3B3A50"],["19-3934","#434D68"],["19-3932","#3D4053"],["19-3943","#383F65"],["19-3851","#3F425D"],["19-3942","#3D3D5E"],["19-3937","#3A3F59"],["19-3838","#3E3B59"],["19-3935","#4B4F6B"],["19-4027","#3A4462"],["19-3938","#424C6D"],["19-3939","#3B4166"],["19-3940","#3D4161"],["19-3933","#3F425C"],["19-3925","#42455D"],["19-4111","#353E52"],["19-4109","#3E424B"],["19-4018","#41424E"],["19-3812","#3A3A46"],["19-4017","#444B5A"],["19-3811","#3E3C49"],["19-4105","#43454F"],["19-3921","#383E4E"],["19-3831","#3E3D4C"],["19-4025","#434A59"],["19-3920","#3F3F50"],["19-4010","#3B4049"],["19-4022","#40434F"],["19-4020","#3A3D49"],["19-3930","#4F4F5C"],["19-4009","#3B414F"],["19-3927","#484754"],["19-4023","#434752"],["19-3923","#3B3D4B"],["19-3922","#393C47"],["19-3713","#3E3C47"],["19-4014","#4C525C"],["19-4019","#4A4F59"],["19-4013","#414349"],["19-4015","#404347"],["19-4011","#3B3F49"],["19-4218","#3F4147"],["19-3924","#3B3C48"],["19-4908","#394448"],["19-4112","#3B4853"],["19-4108","#414A53"],["19-3944","#3F4251"],["19-4016","#434752"],["19-4051","#3F454C"],["19-3916","#424047"],["16-3916","#9D9EA4"],["15-4307","#878F99"],["18-4214","#616E76"],["19-4215","#595F66"],["19-4110","#444E5A"],["19-4021","#3A414A"],["19-4012","#3C3F48"],["17-4020","#6C88A1"],["19-4227","#485F6F"],["19-4318","#476577"],["18-3918","#576B7D"],["19-4229","#4C5B66"],["19-4220","#4E5A61"],["19-4316","#445A65"],["17-4019","#7C95A9"],["17-4018","#738799"],["18-4221","#698295"],["18-4218","#53687C"],["18-3923","#596F80"],["19-4129","#3F5165"],["19-4128","#35465A"],["18-4220","#5F7E94"],["18-4217","#587587"],["18-4320","#567789"],["18-3922","#5A7490"],["18-4020","#5B7691"],["18-4025","#587189"],["18-4026","#46647D"],["18-4215","#5C707E"],["18-4028","#546275"],["19-4126","#385265"],["19-4038","#30475E"],["19-4120","#2E4762"],["19-4034","#2E4A62"],["19-4125","#3E4E5F"],["17-4023","#5D7E98"],["18-4222","#476C84"],["18-4018","#4B6479"],["19-4127","#38637B"],["18-4023","#46657D"],["19-4234","#2E5C73"],["19-4241","#265870"],["14-4106","#B7BECB"],["14-4206","#ACB9BF"],["14-4210","#A4B5C5"],["15-4008","#97ABBD"],["16-4010","#889BAE"],["16-4013","#879AAC"],["17-4021","#798FA8"],["12-4303","#D1DEEA"],["12-4202","#C7DFEC"],["14-4215","#B4C7D7"],["14-4316","#A4C6DE"],["14-4123","#A0C0DD"],["14-4209","#A7B6C8"],["16-4118","#84A3BC"],["13-4111","#C4CED6"],["13-4200","#B3CBD9"],["14-4317","#A5C7DB"],["14-4313","#9BC4D5"],["15-4005","#9EBDD0"],["14-4318","#8DBCD4"],["15-4319","#7CAECA"],["15-4105","#9CBAD4"],["16-4120","#7DA0BD"],["16-4127","#679BBE"],["17-4123","#5D8DAA"],["17-4131","#4882AA"],["18-4232","#396F90"],["18-4231","#2E6784"],["17-4336","#2888BE"],["17-4433","#008AC0"],["18-4334","#2E7BA8"],["18-4330","#2982B1"],["18-4440","#0080B8"],["17-4247","#0084C0"],["18-4434","#045E88"],["15-4427","#56A8CB"],["17-4540","#009AC9"],["17-4432","#008CB5"],["17-4440","#008AB6"],["18-4535","#0086B5"],["18-4538","#007FAF"],["18-4537","#007CAD"],["14-4514","#9AD7EC"],["16-4520","#68BEE0"],["15-4421","#63AED0"],["15-4428","#60B1D3"],["16-4526","#41A9D4"],["16-4530","#42ADD5"],["16-4529","#23A3C7"],["13-4307","#89CFE7"],["14-4310","#7BBED4"],["14-4522","#4CB9D6"],["15-4720","#44B0CD"],["16-4535","#00B5D7"],["16-4427","#37A1C2"],["17-4427","#3085A8"],["13-4410","#C7E3EE"],["13-4401","#C3E5F1"],["12-4401","#B8DFEC"],["14-4311","#ADCFDF"],["13-4411","#A0C9DB"],["14-4516","#86C3D5"],["16-4421","#5DADC7"],["18-4430","#007493"],["18-4528","#117893"],["18-4432","#056E8F"],["18-4530","#2B6E8D"],["18-4225","#3C6B82"],["19-4342","#116383"],["19-4329","#2D5F74"],["17-4328","#4088A6"],["17-4429","#3F86A3"],["18-4630","#007286"],["19-4536","#006883"],["19-4540","#185E6F"],["19-4535","#076A7D"],["19-4340","#29627C"],["16-4525","#55A4B9"],["17-4728","#00869F"],["17-4530","#0088A5"],["17-4730","#0086A3"],["18-4525","#0085A3"],["17-4735","#008AA0"],["18-4733","#007F95"],["12-4608","#ABD6DF"],["14-4816","#64C8D3"],["15-4722","#49BBCA"],["15-4825","#36BAC6"],["16-4725","#00AEC5"],["16-4834","#00A1B4"],["16-4728","#00A4B7"],["13-4409","#ABD2DC"],["14-4510","#97C0CC"],["14-4315","#9AC1CD"],["13-5410","#AED6E0"],["14-4508","#9ABFCB"],["14-4512","#90BFCC"],["15-4415","#74A9BD"],["13-4304","#BCCCDA"],["13-4308","#B3C7D6"],["15-4312","#8EADBF"],["16-4519","#669DB2"],["17-4320","#638D9F"],["17-4421","#427C93"],["17-4716","#4C7D8E"],["16-4109","#859BA6"],["17-4412","#6A8B95"],["17-4111","#758A98"],["18-4417","#4A6A78"],["19-4526","#2D5C6C"],["19-4324","#385466"],["19-4326","#354957"],["13-4404","#C7D3D4"],["13-4103","#C9D6DD"],["14-4306","#9DB5B9"],["14-4506","#A2B9BC"],["16-4411","#86A3AC"],["16-4114","#809CA7"],["16-4414","#78A0AB"],["14-4307","#A5BDCA"],["15-4309","#9DB9C3"],["16-4612","#6C9EAA"],["16-4610","#6DA2AF"],["15-4717","#69A1B0"],["16-5121","#5A9AA1"],["16-4719","#5A9BA3"],["12-4609","#B4CFD9"],["13-4809","#A4D1D9"],["15-4712","#6FACB6"],["15-4714","#66ACB5"],["15-4715","#6CAEB4"],["15-5209","#84B7BB"],["15-5210","#7AA7AC"],["12-4611","#CEE8EF"],["13-5411","#A6CFD9"],["14-4515","#8CCDDF"],["14-4513","#7BB8CB"],["14-4511","#8DC6D4"],["15-4710","#64B6C3"],["15-4716","#67BDC5"],["14-4620","#95DEE2"],["13-4720","#95DBE5"],["14-4812","#85D0D1"],["13-4810","#99DEDF"],["14-4710","#83C5CA"],["14-4814","#83C6CF"],["14-4615","#83C4CF"],["14-4618","#94DBE0"],["14-4818","#78BBBE"],["14-4815","#80C0C5"],["15-4711","#6CA9B1"],["15-4713","#56B0BB"],["17-4725","#00899C"],["18-4631","#007384"],["17-4928","#008E9A"],["18-4735","#008D9B"],["18-4726","#257A88"],["17-4724","#2F8293"],["18-4728","#16737E"],["19-4524","#286168"],["19-4914","#30535A"],["18-5610","#55828A"],["18-4718","#496C77"],["19-4826","#366470"],["18-4522","#396A78"],["19-4820","#436066"],["19-4517","#3A5D62"],["19-4726","#32575C"],["12-4604","#CEE5E3"],["12-4607","#BDD6D9"],["14-4810","#9AC1C7"],["16-5114","#67A0A3"],["17-4818","#569195"],["17-5117","#408388"],["17-4919","#4B878B"],["13-5306","#ADD2D0"],["13-4909","#A6DDDB"],["13-4910","#9EDADA"],["13-5313","#85D7D4"],["14-4811","#7FC9CB"],["15-5217","#5BB3B0"],["16-5123","#329A9F"],["11-4607","#E7F0EF"],["11-4606","#DBEEEF"],["12-5208","#D3EEED"],["12-5207","#CCEDEE"],["13-4908","#B6E7EC"],["14-4715","#9EDEE3"],["12-5302","#BCDBDC"],["12-5206","#C5E1E0"],["12-5209","#C7E9E3"],["12-5808","#B8E3D2"],["12-5409","#BCE5DF"],["12-5410","#B2E0DC"],["14-4809","#9CC8C6"],["13-5309","#95C5C6"],["11-4604","#DFE9E6"],["12-4305","#D5E1DF"],["12-4805","#CBDDDE"],["12-4610","#C8DDDD"],["13-4804","#C5D8D7"],["13-4405","#BDCFCE"],["14-4504","#B7C7C5"],["11-4805","#DCEBE4"],["12-5508","#D9E9E3"],["12-5204","#CADDD9"],["12-5303","#CAD9D3"],["12-4806","#C8D8D7"],["14-4807","#ABC4C0"],["14-4908","#A6C2BB"],["15-4707","#9DB8B8"],["15-4706","#98ADAE"],["16-5106","#8FA9A5"],["15-5207","#83ABAD"],["16-4712","#6F9293"],["17-5110","#6E8E8D"],["17-4911","#66888F"],["16-4408","#8B9EA1"],["16-4706","#89999B"],["16-4404","#8B9D9E"],["17-4408","#77898F"],["18-4711","#718383"],["18-4510","#687B7E"],["18-4011","#607278"],["16-5304","#8DA19B"],["16-5804","#8A9792"],["17-5107","#778A86"],["16-5806","#859690"],["18-5606","#5A686A"],["18-4612","#577477"],["18-5112","#516F71"],["18-5612","#587876"],["18-5410","#59706E"],["18-5308","#51716E"],["19-4818","#4C6768"],["19-5408","#3B5855"],["19-5030","#395052"],["19-5320","#324D4D"],["19-5226","#1F6768"],["19-4922","#276A6C"],["19-4916","#386268"],["19-5413","#3F6364"],["19-5217","#2E6464"],["18-5315","#34625F"],["19-5414","#2F5050"],["18-4835","#166E72"],["18-4833","#006D72"],["19-4918","#25595F"],["19-4534","#2A5B64"],["19-4727","#325B63"],["19-4523","#255663"],["19-5025","#304E53"],["16-5112","#73A2A1"],["16-5412","#63A19C"],["16-5119","#589D98"],["17-5122","#429394"],["17-5421","#328D87"],["18-5121","#3A7778"],["18-5115","#36716E"],["16-5127","#00ADAD"],["17-5126","#00979C"],["18-4930","#008B8C"],["17-5025","#00878A"],["17-5029","#008889"],["17-5034","#008D8F"],["18-4834","#106972"],["15-5218","#6EBEBA"],["15-5519","#4DB6AD"],["15-5516","#49B2A7"],["16-5418","#53A09C"],["16-5422","#3AA6A1"],["18-5128","#008383"],["18-4936","#00757A"],["15-5425","#00B3A3"],["16-5425","#00B19E"],["17-5335","#009E92"],["17-5330","#009589"],["17-5130","#00948D"],["17-5024","#078282"],["18-5025","#006E6D"],["14-5416","#5BC8B3"],["14-5721","#42C0A8"],["15-5421","#1CBAA4"],["16-5427","#00AE99"],["16-5431","#00A88E"],["16-5533","#00A591"],["18-5020","#007773"],["13-6009","#A8DECC"],["13-5714","#88DCBE"],["14-5714","#7DCDB6"],["14-5718","#70CEB4"],["15-5819","#66C0A4"],["15-5718","#4EC5A5"],["15-5728","#0CB695"],["12-5407","#D3E8DD"],["12-5507","#BDE7D8"],["13-5409","#9ED9CC"],["13-5412","#97DFCE"],["13-5414","#7FD6C1"],["14-5420","#5ECCB9"],["15-5416","#50BFAC"],["12-5406","#C3DED7"],["12-5408","#C2E5DB"],["12-5505","#C1DAD4"],["14-5711","#8EC5B7"],["14-5413","#7BC2B3"],["14-5713","#76BEB1"],["15-5711","#7CB7A3"],["16-5109","#74A59E"],["16-5515","#68938A"],["17-5111","#678E8D"],["17-5513","#53817B"],["18-5618","#457876"],["18-5619","#27706B"],["18-5620","#397873"],["16-5919","#73A18D"],["16-5815","#749D8C"],["18-5622","#578273"],["17-5722","#4A8376"],["18-5418","#3B6D69"],["18-5725","#30665D"],["19-5230","#345654"],["16-5917","#6C9988"],["18-5621","#467768"],["19-5420","#31655A"],["18-5616","#3E625B"],["19-5511","#435E55"],["18-5718","#4E6C64"],["19-5232","#375550"],["16-5721","#499E8C"],["17-5430","#288A7C"],["17-5734","#1A8872"],["17-5528","#158172"],["18-5624","#297969"],["18-5424","#12756A"],["18-5322","#236661"],["16-5426","#29A793"],["17-5440","#00887D"],["17-5730","#008D7D"],["17-5527","#007C6D"],["18-5016","#00746D"],["18-5425","#007265"],["19-5421","#0E5E55"],["16-5421","#2BA08B"],["17-5633","#00947D"],["17-5638","#00A386"],["17-5641","#00997B"],["18-5841","#00856A"],["17-5735","#009270"],["18-5642","#009170"],["16-5932","#14A07C"],["17-5936","#139C7A"],["16-5938","#00A779"],["17-5937","#00A376"],["18-5633","#0A8066"],["18-5845","#00755D"],["18-5338","#007762"],["14-6017","#81BBA1"],["16-6030","#69B794"],["14-6330","#70D4A5"],["15-6123","#65BA96"],["16-5930","#40A37B"],["16-5942","#00A87C"],["16-5825","#40A98D"],["15-5812","#99C2B0"],["13-5907","#AECEBE"],["13-5911","#A8D0BD"],["13-6110","#A7CEB9"],["14-6011","#9AC0AC"],["16-5820","#5C9F85"],["16-5924","#59A085"],["11-0304","#DEE3D7"],["12-6208","#DCE2D6"],["12-6206","#DBE3D6"],["12-5504","#CFE3D7"],["13-6008","#BDDACA"],["12-5506","#C2DCD2"],["14-6312","#A6C2AE"],["11-4303","#E5E8E0"],["12-4304","#E0E6E0"],["11-4301","#E4E3DD"],["11-4802","#E4E9E1"],["11-4804","#E7EBE0"],["12-5203","#D3DCD7"],["12-5603","#D5DDD4"],["12-5404","#E2E6D9"],["12-6205","#CFDAD0"],["13-0107","#C1D0BE"],["13-6106","#C5CDC0"],["13-6107","#BDCEBD"],["13-6108","#B4CAB7"],["14-6008","#AFC9BA"],["14-4505","#BCC6C2"],["13-5305","#C0CDC4"],["14-5707","#ABC4B6"],["14-5706","#ABC0B5"],["15-5706","#A1B4A7"],["16-5907","#84A295"],["16-5810","#7A8E81"],["12-5403","#D1DCD7"],["14-4502","#BBC3BE"],["14-4503","#B2BCB9"],["15-4702","#A0ADAA"],["15-4704","#A6B0AB"],["15-5205","#A2AEA8"],["16-5808","#899C92"],["16-5807","#7E8F84"],["17-6009","#627169"],["18-5611","#586864"],["18-6011","#5A6F65"],["18-5913","#425751"],["19-5411","#465B57"],["19-5220","#30524E"],["19-5004","#525A5B"],["19-4906","#445252"],["19-5212","#424F50"],["19-5406","#384A46"],["19-5918","#3B4B40"],["19-6110","#444C48"],["19-5350","#3B4443"],["17-6212","#6E7F71"],["18-5806","#6E746E"],["19-0309","#596258"],["19-5621","#4F5D56"],["19-5914","#4B5B58"],["19-5920","#455851"],["19-5917","#3B4E47"],["18-0515","#6C6B61"],["19-0312","#5F645A"],["19-0307","#50544E"],["19-0417","#434D40"],["19-0315","#4B5A4C"],["19-0415","#464C46"],["19-0509","#444841"],["17-0610","#8C8B7B"],["17-0613","#808174"],["18-0312","#6C7160"],["18-0517","#6A6960"],["18-0514","#6D6F67"],["19-0404","#54574F"],["19-0406","#555551"],["15-6304","#AEAFA4"],["16-0207","#A09F92"],["15-4306","#A6ABA7"],["16-5904","#94A09B"],["17-0209","#91938D"],["17-0208","#8E8E84"],["18-0516","#6E6D63"],["12-5703","#D1D8CE"],["13-6105","#CDD0C0"],["15-5704","#B0B6AE"],["16-0110","#A3AC9B"],["16-6008","#92998C"],["16-0213","#999E88"],["17-6206","#899087"],["13-0210","#BFCAB3"],["13-0212","#C5CFB4"],["14-0114","#B1C1A2"],["15-6313","#A8B89E"],["15-6310","#ABB49C"],["15-6414","#A1B194"],["17-6323","#718775"],["14-6007","#B6C1B4"],["15-6315","#A3BCA6"],["16-0220","#859E7F"],["16-0224","#7C9670"],["17-0119","#6E8E6E"],["17-0220","#728D6C"],["18-0121","#5C795E"],["13-6006","#CFD6C5"],["13-6208","#C2CFB5"],["16-6318","#7B9F7F"],["18-6216","#617E6B"],["17-5912","#5F7C6B"],["18-6114","#567263"],["18-6018","#457462"],["13-6007","#BDD5BC"],["13-0116","#B2D4B2"],["14-6316","#9CBF9C"],["14-6324","#7FB185"],["14-6327","#7CB284"],["16-6324","#72A078"],["15-6432","#77A670"],["15-6114","#96C1A3"],["14-6319","#8DBB96"],["15-6120","#80B58F"],["15-6322","#7DB289"],["14-6329","#72B584"],["16-6329","#719F72"],["18-0110","#688863"],["14-0127","#89BF8C"],["16-6127","#4E9D73"],["18-6022","#438A68"],["17-6030","#008A59"],["18-6030","#00804F"],["19-6026","#286F53"],["18-6024","#347757"],["17-6154","#189255"],["18-6028","#318051"],["18-6031","#007C4C"],["18-6033","#007E57"],["18-6026","#236E48"],["19-6350","#355B3E"],["19-6027","#22674E"],["14-0121","#A8C798"],["13-0221","#ABD79E"],["13-0117","#9FDBAD"],["14-6340","#6FCF90"],["15-6340","#4BC37C"],["16-6240","#34B36E"],["15-5534","#00A466"],["12-0225","#B0E7AF"],["14-0156","#79D381"],["16-6444","#52B86A"],["16-6340","#3CB24E"],["16-6339","#5DAB63"],["16-6138","#339E66"],["17-6153","#009353"],["13-0220","#B4E7A0"],["15-0146","#75CB5D"],["15-0545","#83CB53"],["16-0237","#78A059"],["17-0145","#548A4D"],["18-0135","#547144"],["19-0230","#526447"],["14-0232","#A3C77C"],["14-0244","#A2C66C"],["15-0343","#92B558"],["17-0235","#72945B"],["18-0119","#59744D"],["18-0107","#61774F"],["18-0330","#5C6C43"],["17-0232","#658946"],["17-0340","#758C3E"],["17-0345","#6B8845"],["18-0230","#577340"],["18-0226","#4A673E"],["19-0231","#48603F"],["19-0220","#445540"],["13-0331","#B1CE86"],["15-0341","#8FB258"],["16-0235","#7BAC5F"],["17-0133","#679058"],["17-0230","#6A8E58"],["18-0130","#5C7547"],["18-0125","#557451"],["14-0123","#9DC68F"],["15-6437","#7DB46C"],["15-6442","#7CB469"],["15-6428","#81A76D"],["16-0123","#8BA475"],["17-0215","#7F9B7A"],["16-0228","#779768"],["13-0324","#BED390"],["14-0226","#A2C583"],["16-0233","#72975E"],["17-6229","#55875F"],["18-6330","#4D7653"],["18-6320","#4E7459"],["17-6333","#598459"],["13-0215","#C1D3A5"],["12-0317","#C1D2B1"],["14-0115","#B1C5A0"],["15-6423","#8FAC7F"],["16-6116","#739279"],["17-6319","#6D8D71"],["17-6219","#5A876E"],["16-6216","#829E86"],["17-0210","#758E77"],["18-0108","#5D7050"],["18-0117","#5E7558"],["19-6311","#3C5542"],["19-6050","#355743"],["19-5513","#425951"],["12-0106","#D4DDC4"],["12-0109","#D7E7CA"],["13-0111","#BFCFB1"],["15-6317","#9FC09A"],["15-6316","#8FAF8A"],["17-0123","#68926D"],["17-5923","#4D826C"],["12-0313","#C9D9B3"],["12-0312","#DCE9BE"],["13-0319","#D3E09C"],["12-0322","#C9DDA2"],["13-0317","#C4D19A"],["14-0223","#B2BB88"],["15-0531","#A5AD6F"],["12-6207","#DDE5D9"],["12-0315","#D4DBB3"],["14-0217","#BDC9A1"],["14-0116","#B7C791"],["15-0628","#BFB87E"],["15-0525","#BAB984"],["16-0430","#989E68"],["12-0435","#CCD77F"],["13-0442","#B3CD69"],["14-0445","#B1BC55"],["16-0435","#9CA954"],["15-0332","#A6B172"],["15-0336","#A0B267"],["16-0439","#909E56"],["13-0535","#C9E881"],["13-0443","#C5DE48"],["14-0340","#BDE040"],["13-0550","#BFD641"],["14-0446","#BBCF51"],["16-0230","#9EB749"],["17-0336","#7D944C"],["13-0643","#D7DA58"],["15-0549","#BEC338"],["14-0443","#C1D236"],["14-0442","#ACC453"],["16-0229","#90AD3B"],["17-0332","#6D9140"],["18-0323","#627B4F"],["12-0741","#DEE884"],["12-0530","#E4E58F"],["13-0645","#D2D864"],["13-0650","#D2D431"],["13-0651","#D3E031"],["13-0540","#CAD66A"],["14-0452","#A0C23D"],["11-0710","#EDEBB2"],["11-0618","#EEEDB0"],["12-0426","#D2D591"],["12-0525","#E2E9A6"],["12-0520","#E7E9A5"],["13-0530","#CED48C"],["13-0532","#C5CA79"],["11-4803","#E3E8DE"],["12-0108","#D8E0CC"],["11-0410","#E6E7CB"],["12-0607","#E6E6C7"],["12-0521","#E0E0A7"],["12-0524","#DEDE9D"],["11-0623","#EFEC9C"],["11-0205","#EEEDD1"],["13-0614","#DFD8A8"],["12-0418","#D6CEA5"],["13-0720","#E8D88D"],["13-0333","#DDD38E"],["14-0827","#E3CD81"],["13-0739","#E0C568"],["11-0609","#EDECCC"],["11-0617","#F6EDC3"],["13-0624","#D6CF92"],["12-0619","#D5D09E"],["14-0627","#CFC385"],["14-0826","#D1BD81"],["16-0737","#A89B59"],["13-0633","#EBE39C"],["14-0636","#D5CD7E"],["13-0632","#D7D182"],["15-0636","#BBB167"],["16-0632","#9D905A"],["17-0636","#8A7F53"],["18-0627","#6B5F3E"],["12-0626","#D9D491"],["12-0633","#DEDC80"],["14-0647","#D0C456"],["15-0646","#C8B643"],["15-0643","#BCAD48"],["16-0840","#BEA437"],["16-0639","#AC994C"],["15-0533","#C5BF73"],["15-0543","#BDBD49"],["15-0544","#A5A728"],["16-0540","#A5A451"],["16-0543","#9C9A40"],["16-0545","#A29F4B"],["16-0550","#AEA84E"],["15-0548","#B6AC38"],["15-0542","#A4A02A"],["16-0541","#A4963A"],["16-0640","#A09040"],["16-0544","#9A933C"],["16-0634","#90894C"],["18-0537","#82853A"],["15-0538","#B5BB5C"],["16-0436","#A0A653"],["16-0532","#9B9B5B"],["18-0540","#89923C"],["18-0530","#7F8545"],["17-0530","#7D7F44"],["18-0538","#82853E"],["13-0522","#D0CF96"],["14-0434","#B6BB71"],["15-0535","#B1B160"],["16-0531","#949049"],["17-0529","#7A7A40"],["18-0428","#717244"],["18-0529","#6C6F4E"],["14-0425","#BDBE88"],["15-0326","#A3B07D"],["17-0324","#829367"],["17-0330","#808956"],["18-0324","#7B8059"],["18-0332","#7C8851"],["18-0435","#707647"],["13-0608","#CFD2B2"],["14-0216","#B7BE9A"],["16-0421","#8F936F"],["17-0525","#8B8D68"],["18-0525","#80865E"],["18-0228","#5F6945"],["18-0328","#677249"],["15-0523","#AEB385"],["16-0526","#979569"],["17-0535","#8E8B5B"],["18-0430","#6B6947"],["18-0426","#6D7057"],["18-0220","#6B6D50"],["18-0527","#74714E"],["17-0115","#808A73"],["18-0316","#69725F"],["18-0317","#58624E"],["19-0323","#565D47"],["18-0322","#5B624C"],["18-0523","#60614C"],["19-0419","#515848"],["18-0422","#70775D"],["18-0420","#626959"],["18-0521","#706E5C"],["19-0512","#605E51"],["19-0510","#67645A"],["19-0515","#5F5C50"],["19-0413","#53554C"],["18-0617","#7F7865"],["17-0517","#7D7465"],["19-0622","#69614C"],["19-0516","#605A49"],["19-0403","#655F55"],["19-0511","#5A5B4F"],["19-0414","#4C4F47"],["16-0518","#A29D7D"],["17-0625","#948B6A"],["17-0627","#8A8061"],["18-0622","#777352"],["18-0825","#75694C"],["18-0629","#7B7354"],["18-0625","#766F57"],["14-0418","#B7B996"],["15-0318","#AFAC87"],["16-0713","#A1977D"],["17-0619","#8C8575"],["16-0613","#A5A088"],["17-0620","#857D65"],["17-0618","#817E6A"],["15-0522","#B7AC8A"],["16-1110","#A49A7A"],["16-1108","#A89F84"],["16-1118","#A79C7D"],["17-0630","#9B8F77"],["17-1019","#928167"],["18-0724","#81755B"],["13-0715","#DACCA7"],["13-0613","#DCD0AC"],["13-0919","#D7C49E"],["13-0915","#DCCDA3"],["14-1113","#DAC29B"],["14-0925","#D6C694"],["14-1026","#CFB686"],["14-0626","#CABB80"],["14-1025","#CDB97F"],["14-0721","#C5B482"],["15-0719","#BBAC81"],["16-0726","#A09165"],["17-0929","#9B855B"],["18-0820","#6B644F"],["16-1326","#B49A68"],["16-1126","#A99260"],["16-1133","#B19358"],["17-1028","#948260"],["17-0935","#86724A"],["18-0830","#7D6C4E"],["19-0617","#64594A"],["16-0730","#B6A166"],["17-0836","#98814C"],["17-0840","#9D884A"],["17-0843","#A0824D"],["19-1034","#776144"],["18-0920","#74654F"],["19-0618","#5C5440"],["15-0730","#BEAB6E"],["15-0732","#C2AD68"],["16-0742","#B0913F"],["17-0839","#AF9130"],["16-0847","#AC9041"],["18-0835","#987E43"],["18-0832","#7D6A45"],["13-0725","#DBC986"],["15-0743","#C4A850"],["14-0740","#D3B457"],["15-0850","#D5AE41"],["15-0751","#CEA432"],["16-0946","#BB9645"],["18-0840","#83683E"],["14-0837","#D9B965"],["14-0952","#DBAF49"],["16-0954","#BD8F32"],["16-0952","#CB9C31"],["15-0948","#C59941"],["16-0953","#C59632"],["17-0949","#B9893D"],["14-1031","#D4B373"],["14-1036","#D9AE5F"],["15-1132","#C8AA6E"],["15-0942","#C2A156"],["16-0945","#C39C52"],["16-0948","#B38B41"],["18-0939","#917345"],["15-1142","#D5A351"],["16-0947","#D1A451"],["16-0950","#C6954A"],["16-1139","#BC9151"],["15-1046","#D7A246"],["15-0960","#DAA03D"],["15-0953","#CE942D"],["16-0940","#C49D69"],["17-1047","#B79154"],["17-1129","#A68146"],["18-0940","#916C3A"],["18-0937","#82643E"],["18-0933","#85674C"],["18-1048","#77553D"],["17-1036","#927448"],["18-1022","#826C51"],["18-1018","#7F6A55"],["18-0930","#6E5B4A"],["18-0928","#705E4A"],["19-0815","#5E4E3E"],["19-1020","#5F4D40"],["16-1334","#BA9C76"],["17-1325","#AC8E6F"],["17-1038","#9D8168"],["18-1014","#856C58"],["18-1020","#8B7360"],["18-1029","#8F725D"],["18-1025","#8F6C50"],["14-1038","#D8B780"],["16-0928","#BC9D6E"],["15-1040","#B69573"],["17-1045","#AE895D"],["17-1128","#9D794C"],["17-1125","#9A7C52"],["17-0942","#97784D"],["13-1031","#FDD19C"],["13-1030","#FAC58C"],["16-1144","#D09F64"],["16-1143","#CB9658"],["17-1040","#BF8D4E"],["17-1048","#BD7F37"],["18-0935","#AC7835"],["13-1027","#F4BF86"],["14-1128","#FFBE7B"],["15-1145","#F6B066"],["14-1051","#FFB762"],["16-1142","#E19E5A"],["16-1342","#D29056"],["16-1148","#CE8C4E"],["16-1149","#CA7B3D"],["17-1046","#C37A3B"],["18-1160","#A97241"],["18-1050","#B36E36"],["18-1049","#AF6F34"],["18-1163","#AA6938"],["18-0950","#9A6B3F"],["13-0945","#FFC867"],["14-1050","#FEAE51"],["15-1058","#FAA12F"],["15-1147","#DD974A"],["15-1054","#EE9D32"],["16-1140","#D18D46"],["16-1150","#D18648"],["13-0942","#F9B95C"],["13-0947","#FDBE56"],["15-0955","#EEB127"],["14-0955","#FEB236"],["15-1062","#FFB100"],["14-1064","#FFAF12"],["14-1159","#FFA637"],["14-0936","#E1C289"],["13-1025","#FDD497"],["13-0935","#FFC97E"],["14-1045","#F0B058"],["15-1049","#E8A546"],["14-0941","#EFAC51"],["15-1045","#DB9332"],["13-0939","#F1BC69"],["13-0946","#E8AA54"],["14-1052","#FCAF5A"],["16-1054","#D49537"],["15-1050","#DDA142"],["14-1041","#DFAD61"],["15-1051","#D79232"],["13-0941","#FFD075"],["13-0932","#ECC478"],["13-0940","#F9C66D"],["14-0851","#F5CC71"],["14-0847","#F2C471"],["14-0850","#FFC752"],["14-0846","#E3B253"],["12-0826","#FADA95"],["12-0758","#F0CB76"],["14-0848","#EBBF57"],["13-0859","#FFC600"],["14-0957","#FFC428"],["13-0759","#F3C44D"],["14-0951","#E8AC32"],["13-0840","#FFD673"],["13-0851","#FFD763"],["13-0850","#FED65E"],["13-0849","#FFD653"],["13-0758","#FFD31A"],["13-0752","#F0C62D"],["14-0852","#F3C336"],["13-0754","#F5D051"],["14-0849","#F4C863"],["14-0751","#EFC326"],["13-0757","#E0B13A"],["14-0958","#F0B903"],["15-0956","#EFAF0D"],["15-0954","#DFA51D"],["12-0737","#F3DB74"],["12-0736","#F5D777"],["13-0755","#F0CD5B"],["13-0756","#F1D762"],["14-0754","#E5C049"],["13-0746","#F1D14A"],["14-0755","#E1BA36"],["13-0760","#F4D04F"],["13-0749","#F3D143"],["13-0751","#F5CB00"],["14-0750","#E5C634"],["14-0757","#E8C338"],["14-0758","#D9B02A"],["16-0748","#C29926"],["12-0738","#EED971"],["13-0644","#F7E14A"],["12-0752","#F9E244"],["12-0643","#F6E63E"],["14-0756","#F3D321"],["14-0760","#FDD20E"],["13-0858","#FDDB27"],["12-0735","#EDDC6B"],["13-0753","#EDD732"],["13-0647","#F3E04E"],["14-0745","#E6C823"],["15-0635","#CDBC38"],["15-0647","#D1B425"],["16-0838","#CFB52B"],["12-0740","#F1EA7F"],["12-0742","#F6EA7B"],["12-0646","#F0E366"],["12-0642","#F1DD61"],["13-0640","#DCD067"],["13-0648","#DDD257"],["13-0646","#ECDB54"],["11-0615","#EEE9C7"],["11-0616","#F1E3AD"],["12-0715","#F7E4AC"],["12-0722","#EDDFA3"],["12-0721","#EFE59A"],["11-0622","#EEE892"],["11-0620","#EFEB9A"],["12-0720","#EEDC9C"],["12-0824","#F6E096"],["12-0711","#EEE29C"],["12-0825","#F7E08E"],["12-0718","#E6D594"],["12-0729","#E7CF8F"],["12-0727","#F9DF82"],["11-0510","#F5ECD0"],["11-0619","#EAE0B7"],["12-0717","#ECE3BA"],["13-0822","#F0DAA4"],["13-0917","#EAD4A2"],["13-0922","#E3CA92"],["14-0935","#DEC283"],["12-0812","#EFDFBC"],["12-0806","#ECE1BD"],["13-0815","#E6D3A6"],["12-0910","#EAD4B3"],["13-0814","#EAD6AF"],["12-0714","#F4DBB2"],["12-0822","#F6D09D"],["11-0515","#F4EBC8"],["12-0804","#E7DDC3"],["12-0713","#F1E5BE"],["12-0815","#F0E1B9"],["12-0712","#F4E5C4"],["13-0916","#EAD4A6"],["12-0817","#F0D4A3"],["11-0108","#F0EBDB"],["11-0202","#EBE6D5"],["11-0507","#F1EAD4"],["11-0107","#F1ECD8"],["11-0106","#F2EDD7"],["12-0602","#E7E0D1"],["12-0908","#D9CEBB"],["13-1012","#D9C4AB"],["14-1012","#C3A98B"],["15-0927","#C89B69"],["16-0836","#BCA360"],["16-1325","#BF7D5C"],["18-1537","#B1624E"],["14-5002","#AAABA7"]];
<\/script>
  <script>
    function pantoneHexToHsl(hex){
      var r=parseInt(hex.slice(1,3),16)/255,g=parseInt(hex.slice(3,5),16)/255,b=parseInt(hex.slice(5,7),16)/255;
      var high=Math.max(r,g,b),low=Math.min(r,g,b),delta=high-low,light=(high+low)/2,hue=0,saturation=0;
      if(delta){saturation=delta/(1-Math.abs(2*light-1));if(high===r)hue=((g-b)/delta)%6;else if(high===g)hue=(b-r)/delta+2;else hue=(r-g)/delta+4;hue=(hue*60+360)%360;}
      return {h:Math.round(hue),s:Math.round(saturation*100),l:Math.round(light*100)};
    }
    Vue.directive('fit-swatch-label', {
      inserted: function(el){
        function fit(){
          var width=el.clientWidth;if(!width)return;
          el.style.fontSize='';
          var size=parseFloat(getComputedStyle(el).fontSize),range=document.createRange();range.selectNodeContents(el);
          var textWidth=range.getBoundingClientRect().width;
          if(textWidth>width-2)el.style.fontSize=(Math.floor(size*(width-2)/textWidth*10)/10)+'px';
        }
        el._fitSwatch=fit;el._fitObserver=new ResizeObserver(fit);el._fitObserver.observe(el);
        requestAnimationFrame(fit);document.fonts.ready.then(fit);
      },
      componentUpdated: function(el){el._fitSwatch();},
      unbind: function(el){el._fitObserver.disconnect();}
    });
    new Vue({
      el: '#app',
      data: function () {
        return {
          activeMenu: 'product', currentPage: 'planning', roleMode: 'designer', planningStep: 0,
          planningMessage: '请填写企划需求；关键操作后自动保存。', planningMessageType: 'info',
          promptLoading: false, imageLoading: false, showRetryButton: false, promptDialogVisible: false, previewDialogVisible: false,
          acceptanceVisible: false, detailDrawerVisible: false, refineDrawerVisible: false, refineAdvancedVisible:false, historyDrawerVisible: false,
          colorDialogVisible: false, colorTab: 'pantone', colorSelections: [], colorDraft: {hex:'#DCECF8',pantone:'',source:'色盘选择'}, paletteDragIndex:null, paletteDropIndex:null, palettePointer:null, paletteSuppressClick:false, paletteSelectedHex:'', paletteDragPreview:null, draftPaletteDragIndex:null, draftPaletteDropIndex:null, draftPalettePointer:null, draftPaletteSuppressClick:false, colorStorageKey: 'ai-product-design-v12-main-color', frequentColorStorageKey: 'ai-product-design-v12-frequent-colors', frequentColors:['#E9F3FC','#DCECF8','#FBF4DA','#F9E5C7','#E8F2E6','#F4DDDA','#F2EBF5','#E7E9EA'], frequentColorAddVisible:false, frequentColorDraft:{hex:''}, frequentAddHue:200, frequentAddSaturation:0, frequentAddBrightness:100, frequentAddDragging:false, pantoneColors:(window.PANTONE_FHI_COLORS||[]).map(function(pair){return {code:pair[0],hex:pair[1],hsl:pantoneHexToHsl(pair[1])};}), pantoneQuery:'', pantonePage:1, pantonePageSize:40, pantoneCardWidth:70, pantoneFilterDefs:[{key:'h',label:'色相',max:360,unit:'°'},{key:'s',label:'饱和度',max:100,unit:'%'},{key:'l',label:'明度',max:100,unit:'%'}], pantoneFilters:{h:{active:false,from:0,to:360},s:{active:false,from:0,to:100},l:{active:false,from:0,to:100}}, pantoneDrag:null, wheelHue: 200, wheelSaturation: 22, wheelBrightness: 85, wheelDragging: false,
          activePrompt: '', activePromptItemId: '', previewImage: '', previewImageName: '', promptMode: 'ai', splicedPrompt: '', splicedEditing: false, spliceScheme:{category:'',need:'',mainColor:{hex:'',pantone:'',source:''},additionalColors:[],references:[],textReferences:[],directions:[],constraints:[],forbidden:[]}, spliceEditDraft:{category:'',need:'',mainColor:{hex:'',pantone:'',source:''},additionalColors:[],references:[],textReferences:[],directions:[],constraints:[],forbidden:[]}, promptPlanningFingerprints:{ai:'',splice:''}, promptOutdatedToastReady:false, promptStorageKey: 'ai-product-design-v12-empty-state-prompt-results', imageScenario: 'success', creativeMessage: '本次计划生成 3 张，成功 3 张，失败 0 张。', creativeMessageType: 'success', failedImageCount: 0,
          categories: ['内裤','文胸','袜子','吊带'], directionOptions: ['少女感','清新耐看','几何撞色','休闲字母'], constraintOptions: ['车缝','随心裁','精梳棉混纺','基础色'], forbiddenOptions: ['复杂印花','浮夸 Logo','禁止与竞品完全一致','禁止人体穿着展示','禁止文字内容','禁止浮夸Logo','禁止竞品复刻','禁止非指定品牌标识'],
          imageKinds: [{key:'sketch',label:'线稿'},{key:'competitor',label:'竞品'},{key:'creative',label:'创意'}], activeImageKind:'sketch',
          planning: { category:'内裤', need:'', mainColor:{hex:'',pantone:'',source:''}, additionalColors:[], competitor:'', directions:[], constraints:[], forbidden:[], images:{sketch:'',competitor:'',creative:''}, imagePreviews:{sketch:'',competitor:'',creative:''}, imageNotes:{sketch:'',competitor:'',creative:''} },
          directionTemplates: [
            {id:'DIR-A',code:'A',name:'清新浪点提花中筒袜',match:95,selected:true,role:'资深内衣产品设计师',style:'年轻活泼、清新耐看。袜身主体为纯色，脚踝至小腿中部区域采用细密的局部提花波点图案，袜口为罗纹收边设计。',colors:'奶白色、浅灰色、藏青色',shape:'中筒袜版型，长度覆盖脚踝至小腿肚下方，袜口采用高弹力罗纹设计，贴合腿部曲线不勒腿。',material:'主体采用75%精梳棉+20%锦纶+5%氨纶混纺纱线，保证透气吸汗与高弹力。',idea:'以“清新耐看”为核心，通过局部小波点提花打破纯色袜子的单调感，波点图案规则排列，辨识度高且不过于复杂。',prompt:'方案 A｜清新浪点提花中筒袜\\n角色：资深内衣产品设计师\\n风格：年轻活泼、清新耐看\\n配色：奶白色、浅灰色、藏青色'},
            {id:'DIR-B',code:'B',name:'几何撞色条纹中筒袜',match:92,selected:true,role:'资深内衣产品设计师',style:'年轻活力、清新简约。袜身采用大色块几何拼接与细条纹撞色设计，整体视觉冲击力强但线条干净利落。',colors:'米白色、薄荷绿、柠檬黄',shape:'标准中筒长度，袜筒部分采用竖向细条纹提花，拉长腿部视觉比例；袜口采用宽边罗纹设计。',material:'采用80%精梳棉+15%聚酯纤维+5%氨纶，提升图案色彩的持久度与耐磨性。',idea:'通过几何色块与细条纹的撞色组合，营造年轻活泼的视觉效果。色彩选择低饱和度的清新色系，避免色彩过于艳丽浮夸。',prompt:'方案 B｜几何撞色条纹中筒袜\\n角色：资深内衣产品设计师\\n风格：年轻活力、清新简约\\n配色：米白色、薄荷绿、柠檬黄'},
            {id:'DIR-C',code:'C',name:'局部字母提花休闲中筒袜',match:90,selected:true,role:'资深内衣产品设计师',style:'青春休闲、清新百搭。袜身主体为纯色，小腿外侧局部区域提花呈现简约的英文字母或符号。',colors:'燕麦色、天蓝色、浅粉色',shape:'中筒袜型，袜筒高度适中，适合搭配运动鞋或休闲鞋；袜口罗纹弹力适中，不勒腿。',material:'采用70%精梳棉+25%锦纶+5%氨纶，袜底毛圈部分采用加厚纱线，提升舒适度与耐穿性。',idea:'将年轻群体喜爱的简约字母元素融入局部提花设计中，增加趣味性与辨识度，同时保持整体清新感。',prompt:'方案 C｜局部字母提花休闲中筒袜\\n角色：资深内衣产品设计师\\n风格：青春休闲、清新百搭\\n配色：燕麦色、天蓝色、浅粉色'}
          ],
          directions: [],
          generation: {formats:['PNG'],ratio:'3:4',resolution:'4K'}, creativeKeyword:'', creativeStatus:'全部', creativePage:1, creativePageSize:6,
          creatives: [], selectedCreative:{name:'',code:'',desc:'',tags:[],image:'',final:false},
          generationMainColor:{hex:'',pantone:'',source:''},
          refine: {prompt:'',scenario:'success',loading:false,message:'',messageType:'info',versions:[],activeVersionIndex:0,annotations:[],draftRect:null,dragStart:null,references:[],cuff:'无',pattern:'无图案',customCuff:'',customPattern:''},
          historyFilters:{keyword:'',category:'',status:'全部'}, historyPage:1, historyPageSize:5, historyMessage:'', selectedHistory:{},
          fieldRows:[
            {name:'品类选择',type:'单选',scope:'全部品类',required:true,status:'启用'},
            {name:'企划需求',type:'多行文本',scope:'全部品类',required:true,status:'启用'},
            {name:'产品主色与参考色',type:'多色选择 / HEX色盘 / 潘通FHI色号 / 屏幕吸色',scope:'全部品类',required:false,status:'启用'},
            {name:'创意方向',type:'多选标签',scope:'按品类配置',required:false,status:'启用'},
            {name:'工艺 / 成本 / 面料约束',type:'多选标签',scope:'按品类配置',required:false,status:'启用'},
            {name:'禁止项',type:'多选标签',scope:'按品类配置',required:false,status:'启用'}
          ],
          historyRows:[
            {id:'HIS-001',name:'2027 春夏轻盈通勤文胸',category:'文胸',creator:'张文强',createdAt:'2026-08-18 14:22:00',model:'Seedream 5',status:'未完成'},
            {id:'HIS-002',name:'凉感无痕基础款',category:'内裤',creator:'徐洋',createdAt:'2026-08-17 10:35:00',model:'Nano Banana 2',status:'已完成'},
            {id:'HIS-003',name:'运动支撑吊带',category:'吊带',creator:'李晓',createdAt:'2026-08-16 09:10:00',model:'Nano Banana 2',status:'未完成'},
            {id:'HIS-004',name:'轻薄通勤袜',category:'袜子',creator:'张文强',createdAt:'2026-08-15 16:40:00',model:'Nano Banana 2',status:'已完成'}
          ]
        };
      },
      computed: {
        isViewer: function(){ return this.roleMode==='viewer'; },
        hasActivePantoneFilters: function(){ return Boolean(this.pantoneQuery)||this.pantoneFilterDefs.some(function(def){return this.pantoneFilters[def.key].active;}.bind(this)); },
        filteredPantoneColors: function(){ var query=(this.pantoneQuery||'').trim().toUpperCase().replace(/^#/,''),filters=this.pantoneFilters;return this.pantoneColors.filter(function(item){if(query&&item.code.indexOf(query)===-1&&item.hex.slice(1).indexOf(query)===-1)return false;return ['h','s','l'].every(function(key){var range=filters[key],value=item.hsl[key];return !range.active||value>=range.from&&value<=range.to;});}); },
        pagedPantoneColors: function(){ var start=(this.pantonePage-1)*this.pantonePageSize;return this.filteredPantoneColors.slice(start,start+this.pantonePageSize); },
        colorWheelCursor: function(){ var radians=this.wheelHue*Math.PI/180;var radius=this.wheelSaturation/100*108;return {left:(112+Math.sin(radians)*radius)+'px',top:(112-Math.cos(radians)*radius)+'px'}; },
        frequentColorWheelCursor: function(){ var radians=this.frequentAddHue*Math.PI/180;var radius=this.frequentAddSaturation/100*108;return {left:(112+Math.sin(radians)*radius)+'px',top:(112-Math.cos(radians)*radius)+'px'}; },
        pantoneDisplay: function(code){ return code ? code+' TPG' : ''; },
        colorDraftExistingIndex: function(){ var hex=(this.colorDraft.hex||'').trim().toUpperCase();if(/^[0-9A-F]{6}$/.test(hex))hex='#'+hex;return this.colorSelections.findIndex(function(item){return item.hex.toUpperCase()===hex;}); },
        colorDraftActionLabel: function(){ if(this.colorDraftExistingIndex===0)return '已是主色';if(this.colorDraftExistingIndex>0)return '已加入参考色';return this.colorSelections.length?'加入参考色':'设为主色'; },
        selectedDirections: function(){ return this.directions.filter(function(item){return item.selected;}); },
        hasSplicedPrompt: function(){ return Boolean(this.splicedPrompt && this.splicedPrompt.trim()); },
        hasSpliceSchemeReference: function(){ return Boolean(this.spliceScheme.references.length||this.spliceScheme.textReferences.length); },
        spliceReferenceGroups: function(){ var self=this;var images={};var notes={};this.spliceScheme.references.forEach(function(item){images[item.key]=item;});this.spliceScheme.textReferences.forEach(function(item){notes[item.key]=item;});var groups=this.imageKinds.map(function(kind){var image=images[kind.key];var note=notes[kind.key];return {key:kind.key,label:kind.label,preview:image?image.preview:'',note:note&&note.note?note.note.trim():''};}).filter(function(item){return Boolean(item.preview||item.note);});return groups.map(function(item,index){return Object.assign(item,self.spliceReferenceWording(item.key,index>0));}); },
        spliceEditReferenceGroups: function(){ var self=this;var images={};var notes={};this.spliceEditDraft.references.forEach(function(item){images[item.key]=item;});this.spliceEditDraft.textReferences.forEach(function(item){notes[item.key]=item;});var groups=this.imageKinds.map(function(kind){var image=images[kind.key];var noteItem=notes[kind.key];return {key:kind.key,label:kind.label,preview:image?image.preview:'',noteItem:noteItem||null,note:noteItem&&noteItem.note?noteItem.note:''};}).filter(function(item){return Boolean(item.preview||item.noteItem);});return groups.map(function(item,index){return Object.assign(item,self.spliceReferenceWording(item.key,index>0));}); },
        activeSpliceScheme: function(){ return this.splicedEditing?this.spliceEditDraft:this.spliceScheme; },
        activeSpliceReferenceGroups: function(){ return this.splicedEditing?this.spliceEditReferenceGroups:this.spliceReferenceGroups; },
        spliceSourceSummary: function(){ var sources=['品类选择','企划需求'];if(this.spliceScheme.mainColor&&this.spliceScheme.mainColor.hex)sources.push('产品主色');if(this.spliceScheme.additionalColors&&this.spliceScheme.additionalColors.length)sources.push('补充选色');if(this.spliceScheme.references.length)sources.push('参考图片');if(this.spliceScheme.textReferences.length)sources.push('参考说明');if(this.spliceScheme.directions.length)sources.push('创意方向');if(this.spliceScheme.constraints.length)sources.push('工艺约束');if(this.spliceScheme.forbidden.length)sources.push('禁止项');return sources.join('、'); },
        hasCurrentPromptResult: function(){ return this.promptMode==='splice' ? this.hasSplicedPrompt : this.directions.length>0; },
        isCurrentPromptOutdated: function(){ var fingerprint=this.promptPlanningFingerprints[this.promptMode];return Boolean(this.hasCurrentPromptResult&&fingerprint&&fingerprint!==this.planningFingerprint()); },
        promptActionLabel: function(){ return this.promptMode==='ai' ? (this.directions.length ? '重新生成提示词' : '生成提示词') : '拼接提示词'; },
        alternatePromptActionLabel: function(){ return this.promptMode==='ai' ? '拼接提示词' : '生成提示词'; },
        activeGenerationDirections: function(){ return this.promptMode==='splice' ? (this.hasSplicedPrompt ? [{id:'SPLICE-1',code:'P',name:'拼接方案 1',match:100,selected:true,prompt:this.splicedPrompt,mainColor:this.spliceScheme.mainColor||{hex:'',pantone:'',source:''}}] : []) : this.selectedDirections; },
        successfulCreativeCount: function(){ return this.creatives.filter(function(item){return !item.failed;}).length; },
        filteredCreatives: function(){ var self=this; return this.creatives.filter(function(item){var byKeyword=!self.creativeKeyword||item.name.indexOf(self.creativeKeyword.trim())!==-1;var byStatus=self.creativeStatus==='已移除'?item.removed:(self.creativeStatus==='定稿'?item.final&&!item.removed:!item.removed);return byKeyword&&byStatus;}); },
        pagedCreatives: function(){ return this.filteredCreatives.slice((this.creativePage-1)*this.creativePageSize,this.creativePage*this.creativePageSize); },
        refineCurrentVersion: function(){ return this.refine.versions[this.refine.activeVersionIndex]||{}; },
        canGenerateRefine: function(){ return !this.refine.loading&&this.refine.versions.length<4&&Boolean(this.refine.prompt.trim()||this.refine.annotations.some(function(note){return note.text.trim();})); },
        filteredHistory: function(){ var self=this; return this.historyRows.filter(function(row){var key=self.historyFilters.keyword.trim();var byKey=!key||[row.name,row.creator,row.category].join(' ').indexOf(key)!==-1;var byCategory=!self.historyFilters.category||row.category===self.historyFilters.category;var byStatus=self.historyFilters.status==='全部'||row.status===self.historyFilters.status;return byKey&&byCategory&&byStatus;}); },
        pagedHistory: function(){ return this.filteredHistory.slice((this.historyPage-1)*this.historyPageSize,this.historyPage*this.historyPageSize); }
      },
      watch: {
        pantoneQuery: function(){ this.pantonePage=1; },
        pantoneFilters: {deep:true,handler:function(){ this.pantonePage=1; }},
        isCurrentPromptOutdated: function(isOutdated,wasOutdated){ if(this.promptOutdatedToastReady&&isOutdated&&!wasOutdated)this.$message.warning('企划输入已修改，当前方案待更新'); }
      },
      created: function(){ var self=this;this.restoreColorState();this.restoreFrequentColors();this.restorePromptResults();this.$nextTick(function(){self.promptOutdatedToastReady=true;}); },
      mounted: function(){ document.addEventListener('paste',this.handlePlanningImagePaste); },
      beforeDestroy: function(){ document.removeEventListener('paste',this.handlePlanningImagePaste); },
      methods: {
        validColorHex: function(value){ return /^#[0-9a-fA-F]{6}$/.test((value||'').trim()); },
        hsvToHex: function(h,s,v){ s/=100;v/=100;var c=v*s,x=c*(1-Math.abs((h/60)%2-1)),m=v-c,r=0,g=0,b=0;if(h<60){r=c;g=x;}else if(h<120){r=x;g=c;}else if(h<180){g=c;b=x;}else if(h<240){g=x;b=c;}else if(h<300){r=x;b=c;}else{r=c;b=x;}return '#'+[r,g,b].map(function(n){return Math.round((n+m)*255).toString(16).padStart(2,'0');}).join('').toUpperCase(); },
        hexToHsv: function(hex){ if(!this.validColorHex(hex))return null;var r=parseInt(hex.slice(1,3),16)/255,g=parseInt(hex.slice(3,5),16)/255,b=parseInt(hex.slice(5,7),16)/255,max=Math.max(r,g,b),min=Math.min(r,g,b),delta=max-min,h=0;if(delta){if(max===r)h=60*(((g-b)/delta)%6);else if(max===g)h=60*((b-r)/delta+2);else h=60*((r-g)/delta+4);}return {h:(h+360)%360,s:max===0?0:Math.round(delta/max*100),v:Math.round(max*100)}; },
        syncWheelFromHex: function(hex){ var hsv=this.hexToHsv(hex);if(!hsv)return;this.wheelHue=hsv.h;this.wheelSaturation=hsv.s;this.wheelBrightness=hsv.v; },
        updateWheelColor: function(){ var hex=this.hsvToHex(this.wheelHue,this.wheelSaturation,this.wheelBrightness);if(this.colorDraft.hex!==hex)this.colorDraft.pantone='';this.colorDraft.hex=hex;this.colorDraft.source='色盘选择'; },
        pickWheelColor: function(event){ var rect=event.currentTarget.getBoundingClientRect(),dx=event.clientX-(rect.left+rect.width/2),dy=event.clientY-(rect.top+rect.height/2);this.wheelHue=(Math.atan2(dx,-dy)*180/Math.PI+360)%360;this.wheelSaturation=Math.round(Math.min(1,Math.sqrt(dx*dx+dy*dy)/(rect.width/2))*100);this.updateWheelColor(); },
        startWheelDrag: function(event){ if(event.button!==0&&event.pointerType==='mouse')return;this.wheelDragging=true;event.currentTarget.setPointerCapture(event.pointerId);this.pickWheelColor(event); },
        moveWheelDrag: function(event){ if(this.wheelDragging)this.pickWheelColor(event); },
        endWheelDrag: function(event){ if(!this.wheelDragging)return;this.pickWheelColor(event);this.wheelDragging=false;if(event.currentTarget.hasPointerCapture(event.pointerId))event.currentTarget.releasePointerCapture(event.pointerId); },
        cancelWheelDrag: function(){ this.wheelDragging=false; },
        pickWheelCenter: function(){ this.wheelSaturation=0;this.updateWheelColor(); },
        chooseDraftColor: function(hex,source){ if(!this.validColorHex(hex))return;var normalized=hex.toUpperCase();if(this.colorDraft.hex!==normalized||this.colorDraft.source==='第三方编号参考'&&source!=='第三方编号参考')this.colorDraft.pantone='';this.colorDraft.hex=normalized;this.colorDraft.source=source||'色盘选择';this.syncWheelFromHex(this.colorDraft.hex); },
        choosePantoneColor: function(item){ this.colorDraft={hex:item.hex,pantone:item.code,source:'第三方编号参考'};this.syncWheelFromHex(item.hex); },
        scrollPantoneColorsTop: function(){ if(this.$refs.pantoneColorsScroll)this.$refs.pantoneColorsScroll.scrollTop=0; },
        pantoneFilterDef: function(key){ return this.pantoneFilterDefs.find(function(item){return item.key===key;}); },
        pantoneFilterSelectionStyle: function(def){ var range=this.pantoneFilters[def.key],top=def.key==='s'?1-range.to/def.max:range.from/def.max;return {top:(top*100)+'%',height:((range.to-range.from)/def.max*100)+'%'}; },
        pantoneFilterValue: function(key,event){ var rect=event.currentTarget.getBoundingClientRect(),def=this.pantoneFilterDef(key),fraction=Math.max(0,Math.min(1,(event.clientY-rect.top)/rect.height));return Math.round((key==='s'?1-fraction:fraction)*def.max); },
        startPantoneFilterDrag: function(key,event){ if(event.button!==0&&event.pointerType==='mouse')return;event.preventDefault();var value=this.pantoneFilterValue(key,event),range=this.pantoneFilters[key],handle=event.target.closest('[data-bound]'),rect=event.currentTarget.getBoundingClientRect(),def=this.pantoneFilterDef(key),top=(key==='s'?1-range.to/def.max:range.from/def.max)*rect.height,bottom=top+(range.to-range.from)/def.max*rect.height,y=event.clientY-rect.top,topBound=key==='s'?'to':'from',bottomBound=key==='s'?'from':'to',mode;if(handle)mode=handle.dataset.bound;else if(Math.abs(y-top)<=16||Math.abs(y-bottom)<=16)mode=Math.abs(y-top)<=Math.abs(y-bottom)?topBound:bottomBound;else if(y>top&&y<bottom)mode='move';else mode=Math.abs(y-top)<=Math.abs(y-bottom)?topBound:bottomBound;this.pantoneDrag={key:key,start:value,pointerId:event.pointerId,mode:mode,offset:mode==='move'?0:value-range[mode],from:range.from,to:range.to};event.currentTarget.setPointerCapture(event.pointerId); },
        movePantoneFilterDrag: function(key,event){ var drag=this.pantoneDrag;if(!drag||drag.key!==key||drag.pointerId!==event.pointerId)return;var value=this.pantoneFilterValue(key,event),max=this.pantoneFilterDef(key).max,from=drag.from,to=drag.to;value=Math.max(0,Math.min(max,value-(drag.offset||0)));if(drag.mode==='from')from=Math.min(value,to);else if(drag.mode==='to')to=Math.max(value,from);else if(drag.mode==='move'){var delta=Math.max(-from,Math.min(max-to,value-drag.start));from+=delta;to+=delta;}else{from=Math.min(drag.start,value);to=Math.max(drag.start,value);}this.$set(this.pantoneFilters,key,{active:true,from:from,to:to}); },
        endPantoneFilterDrag: function(key,event){ if(!this.pantoneDrag||this.pantoneDrag.key!==key||this.pantoneDrag.pointerId!==event.pointerId)return;var mode=this.pantoneDrag.mode;this.movePantoneFilterDrag(key,event);var range=this.pantoneFilters[key],def=this.pantoneFilterDef(key);if(mode==='new'&&range.from===range.to){var radius=key==='h'?15:7;this.$set(this.pantoneFilters,key,{active:true,from:Math.max(0,range.from-radius),to:Math.min(def.max,range.to+radius)});}this.pantoneDrag=null;if(event.currentTarget.hasPointerCapture(event.pointerId))event.currentTarget.releasePointerCapture(event.pointerId); },
        cancelPantoneFilterDrag: function(){ this.pantoneDrag=null; },
        setPantoneFilterBound: function(key,bound,event){ var def=this.pantoneFilterDef(key),value=Number(event.target.value);if(!Number.isFinite(value))value=bound==='from'?0:def.max;value=Math.round(Math.max(0,Math.min(def.max,value)));var range=Object.assign({},this.pantoneFilters[key]);range[bound]=value;range.active=true;if(range.from>range.to)range[bound==='from'?'to':'from']=value;this.$set(this.pantoneFilters,key,range);event.target.value=value; },
        resetPantoneFilter: function(key){ var def=this.pantoneFilterDef(key);this.$set(this.pantoneFilters,key,{active:false,from:0,to:def.max}); },
        resetPantoneFilters: function(){ this.pantoneQuery='';this.pantoneFilterDefs.forEach(function(def){this.resetPantoneFilter(def.key);}.bind(this));this.pantonePage=1; },
        pantoneOriginText: function(){ return '潘通编号'; },
        normalizeColorHex: function(){ var hex=(this.colorDraft.hex||'').trim();if(/^[0-9a-fA-F]{6}$/.test(hex))hex='#'+hex;if(!this.validColorHex(hex)){this.$message.error('请输入 6 位十六进制颜色值，例如 #A8C9D8');return false;}this.chooseDraftColor(hex,this.colorDraft.source);return true; },
        openColorDialog: function(tab){ if(this.isViewer)return;this.endDraftPaletteDrag();var current=this.planning.mainColor;this.colorSelections=(current.hex?[Object.assign({},current)]:[]).concat((this.planning.additionalColors||[]).map(function(item){return Object.assign({},item);}));this.colorDraft={hex:current.hex||'#DCECF8',pantone:current.pantone||'',source:current.source||'色盘选择'};this.syncWheelFromHex(this.colorDraft.hex);this.colorTab=tab==='wheel'?'wheel':'pantone';this.colorDialogVisible=true; },
        pickScreenColor: function(){ if(!window.EyeDropper){this.$message.warning('当前浏览器不支持屏幕吸色笔，请用桌面版 Chrome／Edge 打开公开网址，或直接输入 HEX 颜色值');return;}var self=this;new window.EyeDropper().open().then(function(result){self.chooseDraftColor(result.sRGBHex,'屏幕吸色');self.$message.success('已吸取屏幕颜色 '+result.sRGBHex.toUpperCase());}).catch(function(error){if(error&&error.name!=='AbortError')self.$message.error('屏幕吸色未完成，请重试');}); },
        restoreFrequentColors: function(){ try{var raw=localStorage.getItem(this.frequentColorStorageKey);if(raw===null)return;var saved=JSON.parse(raw);if(!Array.isArray(saved))return;this.frequentColors=Array.from(new Set(saved.filter(function(hex){return typeof hex==='string'&&this.validColorHex(hex);}.bind(this)).map(function(hex){return hex.trim().toUpperCase();}))).slice(0,10);}catch(e){} },
        persistFrequentColors: function(){ try{localStorage.setItem(this.frequentColorStorageKey,JSON.stringify(this.frequentColors));}catch(e){} },
        openFrequentColorAdd: function(){ if(this.frequentColors.length>=10)return;this.frequentColorDraft={hex:''};this.frequentAddHue=200;this.frequentAddSaturation=0;this.frequentAddBrightness=100;this.frequentAddDragging=false;this.frequentColorAddVisible=true; },
        updateFrequentWheelColor: function(){ this.frequentColorDraft.hex=this.hsvToHex(this.frequentAddHue,this.frequentAddSaturation,this.frequentAddBrightness); },
        pickFrequentWheelColor: function(event){ var rect=event.currentTarget.getBoundingClientRect(),dx=event.clientX-(rect.left+rect.width/2),dy=event.clientY-(rect.top+rect.height/2);this.frequentAddHue=(Math.atan2(dx,-dy)*180/Math.PI+360)%360;this.frequentAddSaturation=Math.round(Math.min(1,Math.sqrt(dx*dx+dy*dy)/(rect.width/2))*100);this.updateFrequentWheelColor(); },
        startFrequentWheelDrag: function(event){ if(event.button!==0&&event.pointerType==='mouse')return;this.frequentAddDragging=true;event.currentTarget.setPointerCapture(event.pointerId);this.pickFrequentWheelColor(event); },
        moveFrequentWheelDrag: function(event){ if(this.frequentAddDragging)this.pickFrequentWheelColor(event); },
        endFrequentWheelDrag: function(event){ if(!this.frequentAddDragging)return;this.pickFrequentWheelColor(event);this.frequentAddDragging=false;if(event.currentTarget.hasPointerCapture(event.pointerId))event.currentTarget.releasePointerCapture(event.pointerId); },
        cancelFrequentWheelDrag: function(){ this.frequentAddDragging=false; },
        pickFrequentWheelCenter: function(){ this.frequentAddSaturation=0;this.updateFrequentWheelColor(); },
        normalizeFrequentColorHex: function(){ var hex=(this.frequentColorDraft.hex||'').trim();if(/^[0-9a-fA-F]{6}$/.test(hex))hex='#'+hex;if(!this.validColorHex(hex))return false;this.frequentColorDraft.hex=hex.toUpperCase();var hsv=this.hexToHsv(hex);this.frequentAddHue=hsv.h;this.frequentAddSaturation=hsv.s;this.frequentAddBrightness=hsv.v;return true; },
        pickFrequentScreenColor: function(){ if(!window.EyeDropper){this.$message.warning('当前浏览器不支持屏幕吸色笔，可以从色盘选色或输入 HEX');return;}var self=this;new window.EyeDropper().open().then(function(result){if(!self.frequentColorAddVisible)return;self.frequentColorDraft.hex=result.sRGBHex.toUpperCase();self.normalizeFrequentColorHex();}).catch(function(error){if(error&&error.name!=='AbortError')self.$message.error('屏幕吸色未完成，请重试');}); },
        addFrequentColor: function(){ if(!this.normalizeFrequentColorHex()){this.$message.error('请选择颜色或输入 6 位 HEX 色值');return;}var hex=this.frequentColorDraft.hex;if(this.frequentColors.indexOf(hex)!==-1){this.$message.info(hex+' 已在常用色中');return;}if(this.frequentColors.length>=10){this.$message.warning('常用色最多保存 10 个');return;}this.frequentColors.push(hex);this.persistFrequentColors();this.frequentColorAddVisible=false;this.$message.success('已将 '+hex+' 加入常用色'); },
        removeFrequentColor: function(hex){ this.frequentColors=this.frequentColors.filter(function(item){return item!==hex;});if(this.colorDraft.hex===hex&&this.colorDraft.source==='常用色')this.colorDraft.source='色盘选择';this.persistFrequentColors();this.$message.success('已从常用色删除 '+hex); },
        persistColorState: function(){ try{localStorage.setItem(this.colorStorageKey,JSON.stringify({mainColor:this.planning.mainColor,additionalColors:this.planning.additionalColors}));}catch(e){} },
        restoreColorState: function(){ try{var saved=JSON.parse(localStorage.getItem(this.colorStorageKey)||'{}');if(saved.mainColor&&this.validColorHex(saved.mainColor.hex))this.planning.mainColor={hex:saved.mainColor.hex.toUpperCase(),pantone:(saved.mainColor.pantone||'').slice(0,32),source:saved.mainColor.source||'已保存主色'};if(Array.isArray(saved.additionalColors))this.planning.additionalColors=saved.additionalColors.filter(function(item){return item&&this.validColorHex(item.hex);}.bind(this)).slice(0,7).map(function(item){return {hex:item.hex.toUpperCase(),pantone:(item.pantone||'').slice(0,32),source:item.source||'选色'};});}catch(e){} var colors=[this.planning.mainColor].concat(this.planning.additionalColors||[]);var lookup=new Map(this.pantoneColors.map(function(item){return [item.code,item.hex];}));colors.forEach(function(item){if(!item.pantone)return;var code=item.pantone.replace(/\\s+(TCX|TPG)$/i,'');if(lookup.has(code)){item.pantone=code;item.hex=lookup.get(code);}else{item.pantone='';item.source='HEX颜色';}}); },
        addDraftColor: function(){ if(!this.normalizeColorHex())return;var hex=this.colorDraft.hex;var existing=this.colorSelections.findIndex(function(item){return item.hex===hex;});if(existing!==-1){return;}if(this.colorSelections.length>=8){this.$message.warning('最多加入 8 个颜色');return;}var isPrimary=this.colorSelections.length===0;this.colorSelections.push({hex:hex,pantone:(this.colorDraft.pantone||'').trim().slice(0,32),source:this.colorDraft.source});this.$message.success('已'+(isPrimary?'设为主色 ':'加入参考色 ')+hex); },
        selectGroupColor: function(item){ this.colorDraft=Object.assign({},item);this.syncWheelFromHex(item.hex); },
        setPrimaryColor: function(index){ if(index<1||index>=this.colorSelections.length)return;this.colorSelections.unshift(this.colorSelections.splice(index,1)[0]);this.selectGroupColor(this.colorSelections[0]); },
        removeDraftColor: function(index){ this.colorSelections.splice(index,1);if(this.colorSelections.length)this.selectGroupColor(this.colorSelections[0]); },
        applyMainColor: function(){ if(this.isViewer)return;if(!this.colorSelections.length){this.$message.warning('请先设定产品主色');return;}this.planning.mainColor=Object.assign({},this.colorSelections[0]);this.planning.additionalColors=this.colorSelections.slice(1).map(function(item){return Object.assign({},item);});this.persistColorState();this.colorDialogVisible=false;this.$message.success('已保存 '+this.colorSelections.length+' 个颜色'); },
        clearMainColor: function(){ if(this.isViewer)return;this.planning.mainColor={hex:'',pantone:'',source:''};this.planning.additionalColors=[];this.persistColorState();this.$message.success('已清除本组颜色'); },
        removePaletteColor: function(index){ if(this.isViewer)return;if(index===0){this.planning.mainColor=this.planning.additionalColors.shift()||{hex:'',pantone:'',source:''};this.$message.success(this.planning.mainColor.hex?'已删除主色，第一参考色已设为主色':'已删除主色');}else{this.planning.additionalColors.splice(index-1,1);this.$message.success('已删除参考色');}this.persistColorState(); },
        selectDraftPaletteColor: function(item){ if(this.draftPaletteSuppressClick){this.draftPaletteSuppressClick=false;return;}this.selectGroupColor(item); },
        startDraftPaletteDrag: function(event,index){ if(event.button!==0)return;this.draftPaletteSuppressClick=false;this.draftPalettePointer={id:event.pointerId,x:event.clientX,y:event.clientY,index:index};event.currentTarget.setPointerCapture(event.pointerId); },
        moveDraftPaletteDrag: function(event){ var pointer=this.draftPalettePointer;if(!pointer||pointer.id!==event.pointerId)return;if(this.draftPaletteDragIndex===null&&Math.hypot(event.clientX-pointer.x,event.clientY-pointer.y)<5)return;this.draftPaletteDragIndex=pointer.index;this.updatePaletteDragPreview(event,this.colorSelections[pointer.index]);var target=document.elementFromPoint(event.clientX,event.clientY),card=target&&target.closest('.color-role-flow__palette [data-palette-index]');this.draftPaletteDropIndex=card?Number(card.dataset.paletteIndex):null; },
        finishDraftPaletteDrag: function(event){ var pointer=this.draftPalettePointer;if(!pointer||pointer.id!==event.pointerId)return;var from=this.draftPaletteDragIndex,to=this.draftPaletteDropIndex;this.draftPaletteSuppressClick=from!==null;this.endDraftPaletteDrag();if(event.currentTarget.hasPointerCapture(event.pointerId))event.currentTarget.releasePointerCapture(event.pointerId);if(from===null||to===null||from===to)return;this.moveDraftPaletteColor(from,to);this.$message.success(to===0?'已设为主色':'已调整颜色顺序'); },
        moveDraftPaletteColor: function(from,to){ if(from<0||from>=this.colorSelections.length||to<0||to>=this.colorSelections.length||from===to)return;this.colorSelections.splice(to,0,this.colorSelections.splice(from,1)[0]);if(to===0)this.selectGroupColor(this.colorSelections[0]); },
        endDraftPaletteDrag: function(){ this.paletteDragPreview=null;this.draftPalettePointer=null;this.draftPaletteDragIndex=null;this.draftPaletteDropIndex=null; },
        updatePaletteDragPreview: function(event,color){ if(!color)return;this.paletteDragPreview={x:Math.max(4,Math.min(event.clientX+14,window.innerWidth-180)),y:Math.max(4,Math.min(event.clientY+14,window.innerHeight-72)),hex:color.hex,code:color.pantone||color.hex}; },
        selectPlanningPaletteColor: function(color){ if(this.isViewer)return;if(this.paletteSuppressClick){this.paletteSuppressClick=false;return;}this.paletteSelectedHex=color.hex; },
        startPaletteDrag: function(event,index){ if(this.isViewer||event.button!==0)return;this.paletteSuppressClick=false;this.palettePointer={id:event.pointerId,x:event.clientX,y:event.clientY,index:index};event.currentTarget.setPointerCapture(event.pointerId); },
        movePaletteDrag: function(event){ var pointer=this.palettePointer;if(!pointer||pointer.id!==event.pointerId)return;if(this.paletteDragIndex===null&&Math.hypot(event.clientX-pointer.x,event.clientY-pointer.y)<5)return;this.paletteDragIndex=pointer.index;this.updatePaletteDragPreview(event,[this.planning.mainColor].concat(this.planning.additionalColors)[pointer.index]);var target=document.elementFromPoint(event.clientX,event.clientY),card=target&&target.closest('[data-planning-palette-index]');this.paletteDropIndex=card?Number(card.dataset.planningPaletteIndex):null; },
        finishPaletteDrag: function(event){ var pointer=this.palettePointer;if(!pointer||pointer.id!==event.pointerId)return;var from=this.paletteDragIndex,to=this.paletteDropIndex;this.paletteSuppressClick=from!==null;this.endPaletteDrag();if(event.currentTarget.hasPointerCapture(event.pointerId))event.currentTarget.releasePointerCapture(event.pointerId);if(this.isViewer||from===null||to===null||from===to)return;var colors=[this.planning.mainColor].concat(this.planning.additionalColors);colors.splice(to,0,colors.splice(from,1)[0]);this.planning.mainColor=colors[0];this.planning.additionalColors=colors.slice(1);this.paletteSelectedHex=colors[to].hex;this.persistColorState();this.$message.success(to===0?'已设为主色':'已调整颜色顺序'); },
        endPaletteDrag: function(){ this.paletteDragPreview=null;this.palettePointer=null;this.paletteDragIndex=null;this.paletteDropIndex=null; },
        goPage: function(page){ if(page==='creative'&&!this.creatives.length){this.$message.warning('请先在企划输入中生成至少 1 张成功创意图');return;} this.currentPage=page;this.activeMenu=page==='history'?'history':'product'; },
        startNewDesign: function(){
          this.currentPage='planning';
          this.activeMenu='product';
          this.promptMode='ai';
          this.directions=[];
          this.splicedPrompt='';
          this.splicedEditing=false;
          this.promptPlanningFingerprints={ai:'',splice:''};
          this.spliceScheme={category:'',need:'',mainColor:{hex:'',pantone:'',source:''},additionalColors:[],references:[],textReferences:[],directions:[],constraints:[],forbidden:[]};
          this.spliceEditDraft={category:'',need:'',mainColor:{hex:'',pantone:'',source:''},additionalColors:[],references:[],textReferences:[],directions:[],constraints:[],forbidden:[]};
          this.creatives=[];
          this.generationMainColor={hex:'',pantone:'',source:''};
          this.colorSelections=[];
          this.failedImageCount=0;
          this.showRetryButton=false;
          this.planningStep=0;
          this.planning={category:'内裤',need:'',mainColor:{hex:'',pantone:'',source:''},additionalColors:[],competitor:'',directions:[],constraints:[],forbidden:[],images:{sketch:'',competitor:'',creative:''},imagePreviews:{sketch:'',competitor:'',creative:''},imageNotes:{sketch:'',competitor:'',creative:''}};
          this.activeImageKind='sketch';
          this.persistColorState();
          try{localStorage.removeItem(this.promptStorageKey);}catch(e){}
          this.planningMessage='已进入新设计，请填写企划需求后生成提示词。';
          this.planningMessageType='success';
          this.$message.success('已进入新设计');
        },
        handleRoleChange: function(){ this.$message[this.isViewer?'warning':'success'](this.isViewer?'已切换只读访客：生成、复制、精修和继续设计不可用':'已切换设计师角色'); },
        toggleDirection: function(item){ if(this.isViewer){this.$message.error('暂无权限执行此操作，请联系管理员');return;}item.selected=!item.selected;this.persistPromptResults(); },
        setImage: function(key,file){ var oldPreview=this.planning.imagePreviews[key];var usedByScheme=this.spliceScheme.references.some(function(item){return item.preview===oldPreview;});if(oldPreview&&!usedByScheme&&oldPreview.indexOf('blob:')===0&&window.URL)try{URL.revokeObjectURL(oldPreview);}catch(e){}var raw=file.raw||file;var preview=file.url||'';if(!preview&&raw&&window.URL&&URL.createObjectURL)try{preview=URL.createObjectURL(raw);}catch(e){}this.$set(this.planning.images,key,file.name||'已上传图片');this.$set(this.planning.imagePreviews,key,preview);this.planningMessage='已选择'+(file.name||'图片')+'，可继续填写参考说明。';this.planningMessageType='success'; },
        setPastedPlanningImage: function(key,blob){
          if(this.isViewer||!blob||!blob.type||blob.type.indexOf('image/')!==0)return;
          var kind=this.imageKinds.find(function(item){return item.key===key;});
          var extension=blob.type.split('/')[1].replace('jpeg','jpg').replace('svg+xml','svg')||'png';
          this.setImage(key,{raw:blob,name:'粘贴图片.'+extension});
          this.$message.success('已粘贴到'+(kind?kind.label:'参考')+'图片');
        },
        handlePlanningImagePaste: function(event){
          if(this.isViewer||this.currentPage!=='planning'||this.colorDialogVisible||this.previewDialogVisible||this.promptDialogVisible||event.defaultPrevented)return;
          var items=Array.from(event.clipboardData&&event.clipboardData.items||[]);
          var image=items.find(function(item){return item.type&&item.type.indexOf('image/')===0;});
          var blob=image&&image.getAsFile();
          if(!blob)blob=Array.from(event.clipboardData&&event.clipboardData.files||[]).find(function(file){return file.type&&file.type.indexOf('image/')===0;});
          if(!blob)return;
          var row=event.target&&event.target.closest&&event.target.closest('[data-reference-kind]');
          var key=row?row.getAttribute('data-reference-kind'):this.activeImageKind;
          if(!this.imageKinds.some(function(kind){return kind.key===key;}))return;
          event.preventDefault();
          this.activeImageKind=key;
          this.setPastedPlanningImage(key,blob);
        },
        previewPlanningImage: function(key){ var preview=this.planning.imagePreviews[key];if(!preview)return;var kind=this.imageKinds.find(function(item){return item.key===key;});this.previewImage=preview;this.previewImageName=(kind?kind.label+'参考图片':'参考图片');this.previewDialogVisible=true; },
        removePlanningImage: function(key){ var preview=this.planning.imagePreviews[key];var usedByScheme=this.spliceScheme.references.some(function(item){return item.preview===preview;});if(preview&&!usedByScheme&&preview.indexOf('blob:')===0&&window.URL)try{URL.revokeObjectURL(preview);}catch(e){}var kind=this.imageKinds.find(function(item){return item.key===key;});this.$set(this.planning.images,key,'');this.$set(this.planning.imagePreviews,key,'');if(this.previewImage===preview&&!usedByScheme){this.previewDialogVisible=false;this.previewImage='';this.previewImageName='';}this.planningMessage=(kind?kind.label:'参考')+'图片已删除，已填写的说明保留。';this.planningMessageType='success';this.$message.success(this.planningMessage); },
        previewSpliceReference: function(item){ if(!item||!item.preview)return;this.previewImage=item.preview;this.previewImageName=item.label+'参考图片';this.previewDialogVisible=true; },
        cloneSpliceScheme: function(scheme){ return JSON.parse(JSON.stringify(scheme)); },
        planningFingerprint: function(){ var p=this.planning;var payload={category:p.category,need:(p.need||'').trim(),mainColor:p.mainColor,additionalColors:p.additionalColors,competitor:(p.competitor||'').trim(),directions:p.directions.slice(),constraints:p.constraints.slice(),forbidden:p.forbidden.slice(),images:{},imageNotes:{}};this.imageKinds.forEach(function(kind){payload.images[kind.key]=[(p.images[kind.key]||''),(p.imagePreviews[kind.key]||'')].join('|');payload.imageNotes[kind.key]=(p.imageNotes[kind.key]||'').trim();});var raw=JSON.stringify(payload);var hash=2166136261;for(var i=0;i<raw.length;i++){hash^=raw.charCodeAt(i);hash=Math.imul(hash,16777619);}return raw.length+'-'+(hash>>>0).toString(36); },
        persistPromptResults: function(){ try{localStorage.setItem(this.promptStorageKey,JSON.stringify({directions:this.directions,splicedPrompt:this.splicedPrompt,spliceScheme:this.spliceScheme,promptPlanningFingerprints:this.promptPlanningFingerprints,savedAt:new Date().toISOString()}));}catch(e){} },
        restorePromptResults: function(){ try{var raw=localStorage.getItem(this.promptStorageKey);if(!raw)return;var saved=JSON.parse(raw);if(Array.isArray(saved.directions)&&saved.directions.length)this.directions=saved.directions;if(saved.spliceScheme&&saved.spliceScheme.category){var restored=this.cloneSpliceScheme(saved.spliceScheme);var self=this;restored.references=Array.isArray(restored.references)?restored.references:[];restored.textReferences=Array.isArray(restored.textReferences)?restored.textReferences:[];restored.references.forEach(function(item){if(!item.preview||item.preview.indexOf('blob:')===0)item.preview=self.referencePlaceholder(item.label);if(item.note){var current=restored.textReferences.find(function(note){return note.key===item.key;});if(current)current.note=self.mergeReferenceText(current.note,item.note);else restored.textReferences.push({key:item.key,label:item.label,note:item.note});delete item.note;}});if(restored.competitorSupplement){var competitor=restored.textReferences.find(function(item){return item.key==='competitor';});if(competitor)competitor.note=self.mergeReferenceText(competitor.note,restored.competitorSupplement,'，');else restored.textReferences.push({key:'competitor',label:'竞品',note:restored.competitorSupplement});delete restored.competitorSupplement;}this.spliceScheme=restored;if(typeof saved.splicedPrompt==='string')this.splicedPrompt=this.buildSplicedPromptFromScheme(restored);}if(saved.promptPlanningFingerprints)this.promptPlanningFingerprints=Object.assign({ai:'',splice:''},saved.promptPlanningFingerprints);var currentFingerprint=this.planningFingerprint();if(this.directions.length&&!this.promptPlanningFingerprints.ai)this.promptPlanningFingerprints.ai=currentFingerprint;if(this.hasSplicedPrompt&&!this.promptPlanningFingerprints.splice)this.promptPlanningFingerprints.splice=currentFingerprint;}catch(e){} },
        runCurrentPromptMode: function(){ if(this.promptMode==='splice')this.openSplicedPrompt();else this.generatePrompts(); },
        switchPromptMode: function(mode){
          if(mode===this.promptMode)return;
          this.persistPromptResults();
          this.splicedEditing=false;
          var hasSaved=mode==='splice' ? this.hasSplicedPrompt : this.directions.length>0;
          if(hasSaved){
            this.promptMode=mode;
            this.planningMessage=mode==='splice'?'已恢复已保存的拼接提示词。':'已恢复已保存的 AI 提示词方案。';
            this.planningMessageType='success';
            this.$message.success(this.planningMessage);
            return;
          }
          if(!this.validatePlanningRequired())return;
          this.promptMode=mode;
          if(mode==='splice'){
            this.openSplicedPrompt();
          }else{
            this.generatePrompts();
          }
        },
        referencePlaceholder: function(label){ var svg='<svg xmlns="http://www.w3.org/2000/svg" width="320" height="260"><rect width="320" height="260" fill="#F5F7FA"/><path d="M65 190l60-70 42 45 34-37 55 62H65z" fill="#DDE5EF"/><circle cx="218" cy="76" r="24" fill="#CBD8E7"/><text x="160" y="232" text-anchor="middle" font-family="PingFang SC,sans-serif" font-size="24" fill="#7D8794">'+label+'参考图</text></svg>';return 'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(svg); },
        mainColorPromptText: function(color){ return color&&color.hex?'产品主体面料主色固定为 '+color.hex+(color.pantone?'（'+this.pantoneOriginText(color)+' '+color.pantone+'，未核验）':'')+'；不要用其他颜色替代主体主色。':''; },
        combinedPrompt: function(){ var p=this.planning,self=this;var lines=['品类：'+p.category];if(p.need.trim())lines.push('企划需求：'+p.need.trim());if(p.mainColor.hex)lines.push('主色要求：'+this.mainColorPromptText(p.mainColor));if(p.additionalColors.length)lines.push('其他选色参考：'+p.additionalColors.map(function(item){return item.hex+(item.pantone?'（'+self.pantoneOriginText(item)+' '+item.pantone+'，未核验）':'');}).join('、')+'。这些颜色是创意参考，不要求全部使用，可自由搭配。');var imgs=[];this.imageKinds.forEach(function(kind){if(p.images[kind.key]){var note=(p.imageNotes[kind.key]||'').trim();imgs.push(kind.label+'：'+p.images[kind.key]+(note?'（'+note+'）':''));}});if(imgs.length)lines.push('参考图片：'+imgs.join('；'));if(p.competitor.trim())lines.push('竞品说明：'+p.competitor.trim());if(p.directions.length)lines.push('创意方向：'+p.directions.join('、'));if(p.constraints.length)lines.push('工艺约束：'+p.constraints.join('、'));if(p.forbidden.length)lines.push('禁止项：'+p.forbidden.join('、'));return lines.join('\\n'); },
        isSimilarReferenceText: function(a,b){ var clean=function(value){return (value||'').replace(/[\\s，。；、,.;：:]/g,'');};var first=clean(a);var second=clean(b);return Boolean(first&&second&&(first===second||first.indexOf(second)!==-1||second.indexOf(first)!==-1)); },
        mergeReferenceText: function(a,b,separator){ var first=(a||'').trim();var second=(b||'').trim();if(!first)return second;if(!second)return first;if(this.isSimilarReferenceText(first,second))return first.length>=second.length?first:second;return first+(separator||'；')+second; },
        spliceReferenceWording: function(key,hasPrevious){ if(key==='sketch')return {imageLead:'以',imageTail:'为线稿参考',noteLead:'线稿说明：'};if(key==='competitor')return {imageLead:hasPrevious?'可对照竞品':'参考竞品',imageTail:'',noteLead:'竞品说明：'};return {imageLead:hasPrevious?'同时借鉴创意图':'借鉴创意图',imageTail:'',noteLead:'创意说明：'}; },
        createSpliceSchemeFromPlanning: function(){
          var p=this.planning;
          var self=this;
          var scheme={category:p.category,need:p.need.trim().replace(/[。；;]+$/,''),mainColor:Object.assign({},p.mainColor),additionalColors:p.additionalColors.map(function(item){return Object.assign({},item);}),references:[],textReferences:[],directions:p.directions.slice(),constraints:p.constraints.slice(),forbidden:p.forbidden.slice()};
          this.imageKinds.forEach(function(kind){
            var hasImage=Boolean(p.images[kind.key]);
            var note=(p.imageNotes[kind.key]||'').trim();
            var competitorText=kind.key==='competitor'?(p.competitor||'').trim():'';
            if(hasImage)scheme.references.push({key:kind.key,label:kind.label,preview:p.imagePreviews[kind.key]||self.referencePlaceholder(kind.label)});
            var relatedNote=kind.key==='competitor'?self.mergeReferenceText(note,competitorText,'，'):note;
            if(relatedNote)scheme.textReferences.push({key:kind.key,label:kind.label,note:relatedNote});
          });
          return scheme;
        },
        buildSplicedPromptFromScheme: function(scheme){
          var self=this;var clauses=['本次设计品类为'+scheme.category+'，企划需求是'+scheme.need+'。'];if(scheme.mainColor&&scheme.mainColor.hex)clauses.push(this.mainColorPromptText(scheme.mainColor));if(scheme.additionalColors&&scheme.additionalColors.length)clauses.push('其他选色可参考'+scheme.additionalColors.map(function(item){return item.hex+(item.pantone?'（'+self.pantoneOriginText(item)+' '+item.pantone+'，未核验）':'');}).join('、')+'；可自由搭配，不要求全部使用。');
          var images={},notes={};
          scheme.references.forEach(function(item){images[item.key]=item;});
          scheme.textReferences.forEach(function(item){notes[item.key]=item;});
          var imageNumber=0;var referenceRows=this.imageKinds.map(function(kind){var image=images[kind.key];var note=notes[kind.key]&&notes[kind.key].note?notes[kind.key].note.trim():'';if(!image&&!note)return null;if(image)imageNumber+=1;return {key:kind.key,imageMark:image?'<图'+imageNumber+'>':'',note:note,hasImage:Boolean(image)};}).filter(Boolean);
          var referenceParts=referenceRows.map(function(item,index){var wording=self.spliceReferenceWording(item.key,index>0);if(item.hasImage){var copy=wording.imageLead+item.imageMark+wording.imageTail;return item.note?copy+'，'+wording.noteLead+item.note:copy;}return wording.noteLead+item.note;});
          if(referenceParts.length)clauses.push(referenceParts.join('；')+'。');
          if(scheme.directions.length)clauses.push('创意方向聚焦'+scheme.directions.join('、')+(scheme.constraints.length||scheme.forbidden.length?'；':'。'));
          if(scheme.constraints.length)clauses.push('工艺与面料上采用'+scheme.constraints.join('、')+'做法'+(scheme.forbidden.length?'；':'。'));
          if(scheme.forbidden.length)clauses.push('禁止项包含'+scheme.forbidden.join('、')+'。');
          return clauses.join('');
        },
        buildSplicedPrompt: function(){ return this.buildSplicedPromptFromScheme(this.createSpliceSchemeFromPlanning()); },
        openSplicedPrompt: function(){
          if(this.isViewer){this.$message.error('暂无权限执行此操作，请联系管理员');return;}
          if(!this.validatePlanningRequired())return;
          this.spliceScheme=this.createSpliceSchemeFromPlanning();
          this.spliceEditDraft=this.cloneSpliceScheme(this.spliceScheme);
          this.splicedPrompt=this.buildSplicedPromptFromScheme(this.spliceScheme);
          this.$set(this.promptPlanningFingerprints,'splice',this.planningFingerprint());
          this.splicedEditing=false;
          this.promptMode='splice';
          this.planningStep=Math.max(this.planningStep,1);
          this.planningMessage='已按左侧当前字段直接拼接为 1 个方案；AI 方案保持保存。';
          this.planningMessageType='success';
          this.persistPromptResults();
          this.$message.success('拼接提示词已生成并保存');
        },
        beginSpliceEdit: function(){ if(this.isViewer){this.$message.error('暂无权限执行此操作，请联系管理员');return;}this.spliceEditDraft=this.cloneSpliceScheme(this.spliceScheme);this.splicedEditing=true; },
        cancelSpliceEdit: function(){ this.spliceEditDraft=this.cloneSpliceScheme(this.spliceScheme);this.splicedEditing=false;this.$message.info('已取消编辑，方案内容未变更'); },
        spliceEditableValue: function(element,limit){ return (element&&element.innerText?element.innerText:'').replace(/\\u00a0/g,' ').replace(/[\\r\\n]+/g,' ').slice(0,limit); },
        placeSpliceCaretAtEnd: function(element){ var selection=window.getSelection();var range=document.createRange();range.selectNodeContents(element);range.collapse(false);selection.removeAllRanges();selection.addRange(range); },
        limitSpliceEditable: function(event,limit){ var element=event.currentTarget;var value=(element.innerText||'').replace(/\\u00a0/g,' ');if(value.length<=limit)return;element.innerText=value.slice(0,limit);this.placeSpliceCaretAtEnd(element); },
        commitSpliceDraftNeed: function(event){ this.spliceEditDraft.need=this.spliceEditableValue(event.currentTarget,500); },
        commitSpliceDraftNote: function(item,event){ if(item)item.note=this.spliceEditableValue(event.currentTarget,300); },
        syncSpliceEditableFields: function(){ var needElement=this.$el.querySelector('[data-splice-edit-field="need"]');if(needElement)this.spliceEditDraft.need=this.spliceEditableValue(needElement,500);var self=this;Array.prototype.forEach.call(this.$el.querySelectorAll('[data-splice-note-key]'),function(element){var key=element.getAttribute('data-splice-note-key');var item=self.spliceEditDraft.textReferences.find(function(row){return row.key===key;});if(item)item.note=self.spliceEditableValue(element,300);}); },
        pasteSplicePlainText: function(event){ event.preventDefault();var clipboard=event.clipboardData||window.clipboardData;var value=clipboard?clipboard.getData('text/plain').replace(/[\\r\\n]+/g,' '):'';document.execCommand('insertText',false,value); },
        saveSplicedPrompt: function(){
          this.syncSpliceEditableFields();
          if(!this.spliceEditDraft.need.trim()){this.$message.error('企划需求不能为空');return;}
          this.spliceEditDraft.need=this.spliceEditDraft.need.trim().replace(/[。；;]+$/,'');
          this.spliceEditDraft.references=this.spliceEditDraft.references.filter(function(item){return Boolean(item.preview);}).map(function(item){return {key:item.key,label:item.label,preview:item.preview};});
          this.spliceEditDraft.textReferences=this.spliceEditDraft.textReferences.filter(function(item){return Boolean((item.note||'').trim());}).map(function(item){var next=Object.assign({},item);next.note=next.note.trim().replace(/[，,；;。\\.\\s]+$/,'');return next;});
          this.spliceScheme=this.cloneSpliceScheme(this.spliceEditDraft);
          this.splicedPrompt=this.buildSplicedPromptFromScheme(this.spliceScheme);
          this.splicedEditing=false;
          this.persistPromptResults();
          this.$message.success('拼接方案已保存');
        },
        removeSpliceDraftTag: function(group,item){ if(this.isViewer)return;this.$set(this.spliceEditDraft,group,this.spliceEditDraft[group].filter(function(value){return value!==item;})); },
        removeSpliceDraftReference: function(key){ if(this.isViewer)return;this.spliceEditDraft.references=this.spliceEditDraft.references.filter(function(item){return item.key!==key;});this.spliceEditDraft.textReferences=this.spliceEditDraft.textReferences.filter(function(item){return item.key!==key||Boolean((item.note||'').trim());}); },
        removeSpliceDraftTextReference: function(key){ if(this.isViewer)return;this.spliceEditDraft.textReferences=this.spliceEditDraft.textReferences.filter(function(item){return item.key!==key;}); },
        addSpliceDraftTextReference: function(key,label){ if(this.isViewer)return;if(!this.spliceEditDraft.textReferences.some(function(item){return item.key===key;}))this.spliceEditDraft.textReferences.push({key:key,label:label,note:''}); },
        copyText: function(text,successMessage){ var self=this;function fallback(){var area=document.createElement('textarea');area.value=text;area.style.position='fixed';area.style.opacity='0';document.body.appendChild(area);area.select();try{document.execCommand('copy');self.$message.success(successMessage);}catch(e){self.$message.error('复制失败，请重试');}document.body.removeChild(area);}if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(text).then(function(){self.$message.success(successMessage);}).catch(fallback);}else{fallback();} },
        validatePlanningRequired: function(){
          if(!this.planning.category){ this.$message.error('请选择品类'); return false; }
          if(!this.planning.need.trim()){ this.$message.error('请输入企划需求'); return false; }
          return true;
        },
        generatePrompts: function(){ if(this.isViewer){this.$message.error('暂无权限执行此操作，请联系管理员');return;}if(!this.validatePlanningRequired())return;var self=this;this.showRetryButton=false;this.promptMode='ai';this.splicedEditing=false;this.promptLoading=true;this.planningMessage='正在使用 Nano Banana 2 生成 3 套文字方案…';this.planningMessageType='info';setTimeout(function(){self.promptLoading=false;self.directions=self.directionTemplates.map(function(item){var next=Object.assign({},item);next.selected=true;next.mainColor=Object.assign({},self.planning.mainColor);var schemePrompt=item.prompt;if(next.mainColor.hex){next.colors='主体主色 '+next.mainColor.hex+(next.mainColor.pantone?'（'+self.pantoneOriginText(next.mainColor)+' '+next.mainColor.pantone+'）':'')+(self.planning.additionalColors.length?'；参考色 '+self.planning.additionalColors.map(function(color){return color.hex+(color.pantone?'（'+color.pantone+'）':'');}).join('、')+'，可自由搭配':'；其余为辅助色');schemePrompt=schemePrompt.replace(/^配色：.*$/m,'配色：以产品主体主色 '+next.mainColor.hex+' 为准'+(self.planning.additionalColors.length?'，参考色可自由搭配，不要求全部使用':'，其余颜色仅作辅助'));}next.prompt=self.combinedPrompt()+'\\n设计方案：'+item.name+'\\n'+schemePrompt;return next;});self.$set(self.promptPlanningFingerprints,'ai',self.planningFingerprint());self.planningStep=2;self.planningMessage='已生成并保存 3 套 AI 文字方案；拼接方案保持保存。';self.planningMessageType='success';self.persistPromptResults();self.$message.success('AI 提示词已生成并保存');},850); },
        showPrompt: function(item){ this.activePrompt=item.prompt;this.activePromptItemId=item.id;this.promptDialogVisible=true; },
        saveActivePrompt: function(){ var item=this.directions.find(function(row){return row.id===this.activePromptItemId;}.bind(this));if(item)item.prompt=this.activePrompt;this.promptDialogVisible=false;this.persistPromptResults();this.$message.success('提示词修改已保存'); },
        productSvg: function(color,label,accent){ accent=accent||'#FFFFFF';var svg='<svg xmlns="http://www.w3.org/2000/svg" width="720" height="540" viewBox="0 0 720 540"><rect width="720" height="540" fill="#F7F8FA"/><g transform="translate(205 70)"><path d="M75 20 H220 V235 C220 292 181 328 126 328 H70 C34 328 18 305 36 276 L75 215 Z" fill="'+color+'" stroke="#CDD3DC" stroke-width="4"/><path d="M75 72 H220 M75 110 H220" stroke="'+accent+'" stroke-opacity=".9" stroke-width="13"/><circle cx="113" cy="164" r="11" fill="'+accent+'"/><circle cx="151" cy="164" r="11" fill="'+accent+'"/><circle cx="189" cy="164" r="11" fill="'+accent+'"/></g><text x="360" y="455" text-anchor="middle" font-family="PingFang SC, sans-serif" font-size="25" fill="#667085">'+label+'</text></svg>';return 'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(svg); },
        directionFailureReason: function(item){ var reasons={A:'图像生成模型响应超时，请重新生成创意。',B:'图片生成服务暂时不可用，请稍后重试。',C:'生成任务执行异常，未返回图片结果。'};return reasons[item.code]||'图片生成失败，请重新生成创意。'; },
        requestGenerateCreative: function(){ if(this.isViewer){this.$message.error('暂无权限执行此操作，请联系管理员');return;}var self=this;if(this.isCurrentPromptOutdated){this.$confirm('企划输入已发生修改，当前方案尚未更新。继续生成创意将使用修改前的方案。','方案待更新',{confirmButtonText:'继续生成创意',cancelButtonText:'取消',type:'warning',closeOnClickModal:false}).then(function(){self.generateCreative();}).catch(function(){});return;}this.generateCreative(); },
        generateCreative: function(){ var activeDirections=this.activeGenerationDirections;if(!activeDirections.length){this.$message.error('请至少选择 1 个文字方案');return;}var self=this;var targetColor=Object.assign({hex:'',pantone:'',source:''},activeDirections[0].mainColor||{});this.imageLoading=true;this.showRetryButton=false;this.planningMessage='正在生成创意图；前端不设置固定超时，以后端任务终态为准。';this.planningMessageType='info';setTimeout(function(){self.imageLoading=false;if(self.imageScenario==='processing'){self.planningMessage='任务仍在处理中';self.planningMessageType='warning';self.showRetryButton=false;self.$message.warning('任务仍在处理中，可离开并从历史任务恢复查看最终结果');return;}if(self.imageScenario==='allFailed'){self.failedImageCount=3;self.planningMessage='';self.planningMessageType='info';self.showRetryButton=true;self.$message.error('生成失败');return;}var partial=self.imageScenario==='partial';var successCount=partial?1:3;var palette=['#D8E4EA','#D8EBDD','#EADCE6'];var selected=activeDirections;self.generationMainColor=Object.assign({},targetColor);self.creatives=[];for(var i=0;i<3;i++){var source=selected[i%selected.length];var failed=partial&&i>=successCount;var displayColor=targetColor.hex||palette[i];self.creatives.push({id:'STYLE-'+(i+1),code:source.code+'-01',name:source.name,desc:self.promptMode==='splice'?'基于字段直接拼接方案生成，提示词未经 AI 改写。':'基于已选文字方案生成，突出局部提花、清新配色与日常舒适穿着。',tags:self.promptMode==='splice'?['字段拼接','直接生成']:(i===0?['提花','清新']:i===1?['撞色','几何']:['字母','休闲']),image:failed?'':self.productSvg(displayColor,source.name,self.planning.additionalColors.length?self.planning.additionalColors[i%self.planning.additionalColors.length].hex:'#FFFFFF'),palette:displayColor,accent:self.planning.additionalColors.length?self.planning.additionalColors[i%self.planning.additionalColors.length].hex:'#FFFFFF',mainColor:Object.assign({},targetColor),failed:failed,failedReason:i===1?'模型响应超时，请重新生成。':'图片生成服务异常，请重新生成。',retryOutcome:i===1?'failed':'success',retrying:false,retryAttempts:0,final:false,removed:false});}self.failedImageCount=3-successCount;self.creativeMessage='本次计划生成 3 张，成功 '+successCount+' 张，失败 '+self.failedImageCount+' 张。';self.creativeMessageType=self.failedImageCount?'warning':'success';self.creativeStatus='全部';self.currentPage='creative';self.planningStep=2;self.$message[self.failedImageCount?'warning':'success'](self.creativeMessage);},1000); },
        retryCreative: function(item){ if(this.isViewer){this.$message.error('暂无权限执行此操作，请联系管理员');return;}if(!item.failed||item.retrying)return;var self=this;item.retrying=true;item.retryAttempts+=1;setTimeout(function(){item.retrying=false;if(item.retryOutcome==='failed'){item.failedReason='模型再次响应超时，请继续重新生成。';self.$message.warning('重新生成失败，请再次尝试');return;}item.failed=false;item.image=self.productSvg(item.palette,item.name,item.accent);item.desc='该图片已单独重新生成成功，可继续查看详情或进行精修。';self.failedImageCount=self.creatives.filter(function(row){return row.failed;}).length;self.creativeMessage='本次计划生成 3 张，成功 '+self.successfulCreativeCount+' 张，失败 '+self.failedImageCount+' 张。';self.creativeMessageType=self.failedImageCount?'warning':'success';self.$message.success('图片重新生成成功');},850); },
        openCreativeDetail: function(item){ if(item.failed||item.retrying)return;this.selectedCreative=item;this.detailDrawerVisible=true; },
        removeCreative: function(item){ item.removed=true;item.final=false;this.$message.success('已移至“已移除”'); },
        openRefine: function(item){
          if(this.isViewer){this.$message.error('暂无权限执行此操作，请联系管理员');return;}
          this.refine.references.forEach(function(file){URL.revokeObjectURL(file.url);});
          this.selectedCreative=item;
          if(!item.refineVersions)this.$set(item,'refineVersions',[{id:item.id+'-original',code:item.code,image:item.image,filter:'',prompt:''}]);
          this.refine.versions=item.refineVersions;
          this.refine.activeVersionIndex=item.refineVersions.length-1;
          this.refine.references=[];this.refine.draftRect=null;this.refine.dragStart=null;
          this.refine.customCuff='';this.refine.customPattern='';this.refine.message='';this.refine.messageType='info';
          this.selectRefineVersion(this.refine.activeVersionIndex);
          this.refineDrawerVisible=true;
        },
        annotationStyle: function(note){return {left:note.x+'%',top:note.y+'%',width:note.w+'%',height:note.h+'%'};},
        selectRefineVersion: function(index){var version=this.refine.versions[index];if(!version)return;this.refine.activeVersionIndex=index;this.refine.prompt=version.prompt||'';this.refine.annotations=(version.annotations||[]).map(function(note){return Object.assign({},note);});this.refine.cuff=version.cuff||'无';this.refine.pattern=version.pattern||'无图案';},
        refinePoint: function(event){var box=event.currentTarget.getBoundingClientRect();return {x:Math.max(0,Math.min(100,(event.clientX-box.left)/box.width*100)),y:Math.max(0,Math.min(100,(event.clientY-box.top)/box.height*100))};},
        startRefineAnnotation: function(event){if(event.button!==0)return;this.refine.dragStart=this.refinePoint(event);this.refine.draftRect=null;},
        moveRefineAnnotation: function(event){if(!this.refine.dragStart)return;var start=this.refine.dragStart,end=this.refinePoint(event);this.refine.draftRect={x:Math.min(start.x,end.x),y:Math.min(start.y,end.y),w:Math.abs(end.x-start.x),h:Math.abs(end.y-start.y)};},
        finishRefineAnnotation: function(){var note=this.refine.draftRect;if(note&&note.w>2&&note.h>2){this.refine.annotations.push(Object.assign({id:Date.now()+'-'+Math.random().toString(36).slice(2),text:''},note));}this.refine.dragStart=null;this.refine.draftRect=null;},
        removeRefineAnnotation: function(index){this.refine.annotations.splice(index,1);},
        addRefineReferences: function(event){var self=this;Array.from(event.target.files||[]).slice(0,Math.max(0,4-this.refine.references.length)).forEach(function(file){if(file.type.indexOf('image/')===0)self.refine.references.push({id:Date.now()+'-'+Math.random(),name:file.name,url:URL.createObjectURL(file)});});event.target.value='';},
        removeRefineReference: function(index){var file=this.refine.references.splice(index,1)[0];if(file)URL.revokeObjectURL(file.url);},
        editRefineTag: function(field){var self=this;this.$prompt('输入自定义标签','高级参数',{inputPattern:/\\S+/,inputErrorMessage:'请输入标签名称',confirmButtonText:'添加',cancelButtonText:'取消'}).then(function(result){var value=result.value.trim();if(field==='cuff'){self.refine.customCuff=value;self.refine.cuff=value;}else{self.refine.customPattern=value;self.refine.pattern=value;}}).catch(function(){});},
        toggleFinal: function(item){ item.final=!item.final;this.$message.success(item.final?'已标记定稿候选':'已取消定稿候选'); },
        generateRefinedVersion: function(){
          var self=this;if(!this.canGenerateRefine)return;
          this.refine.loading=true;this.refine.message='正在生成精修版本…';this.refine.messageType='info';
          setTimeout(function(){
            self.refine.loading=false;
            if(self.refine.scenario==='processing'){self.refine.message='任务仍在处理中，当前修改内容和标注已保留。';self.refine.messageType='warning';return;}
            if(self.refine.scenario==='failed'){self.refine.message='生成失败，请调整描述后重试；原图和现有版本已保留。';self.refine.messageType='error';return;}
            var index=self.refine.versions.length+1;
            var version={id:self.selectedCreative.id+'-v'+index,code:self.selectedCreative.code+'-V'+index,image:self.refine.versions[0].image,filter:'hue-rotate('+((index-1)*10)+'deg) saturate('+(1+(index-1)*.07)+')',prompt:self.refine.prompt.trim(),annotations:self.refine.annotations.map(function(note){return Object.assign({},note);}),references:self.refine.references.map(function(file){return file.name;}),cuff:self.refine.cuff,pattern:self.refine.pattern};
            self.refine.versions.push(version);self.refine.activeVersionIndex=self.refine.versions.length-1;
            self.refine.message='已创建 '+version.code+'，可在版本历史中切换查看。';self.refine.messageType='success';self.$message.success('已生成新版本');
          },900);
        },
        resetHistoryFilters: function(){ this.historyFilters={keyword:'',category:'',status:'全部'};this.historyPage=1;this.historyMessage='筛选条件已重置，页码已回到第 1 页。'; },
        openHistoryDetail: function(row){ this.selectedHistory=row;this.historyDrawerVisible=true; },
        resumeDesign: function(row){ this.planning.category=row.category;this.currentPage='planning';this.activeMenu='product';if(row.model==='Seedream 5'){this.historyMessage='原模型已下架，已自动切换为 Nano Banana 2';this.planningMessage='原模型已下架，已自动切换为 Nano Banana 2';this.planningMessageType='warning';this.$message.warning('原模型已下架，已自动切换为 Nano Banana 2');}else{this.planningMessage='已恢复未完成设计，继续使用 Nano Banana 2。';this.planningMessageType='success';this.$message.success('已恢复未完成设计');} }
      }
    });
  <\/script>

<script>
document.addEventListener('click',function(e){
 var region=e.target.closest('[data-req-id],[data-req-ids],.color-dialog');
 if(!region)return;
 var ids=(region.getAttribute('data-req-ids')||region.getAttribute('data-req-id')||'REQ-002 REQ-003 REQ-004 REQ-005').split(/\\s+/);
 parent.postMessage({type:'prd:prototype-interaction',action:(e.target.textContent||'原型操作').trim().slice(0,70),reqIds:ids},location.origin);
},true);
<\/script>
</body>
</html>`,V={class:"existing-review","data-req-ids":"REQ-001 REQ-002 REQ-003 REQ-004 REQ-005 REQ-006 REQ-007 REQ-008 REQ-009 REQ-010 REQ-011 REQ-012 REQ-013 REQ-014 REQ-015 REQ-016 REQ-017 REQ-018 REQ-019"},j=["src","alt"],H={class:"prototype-context"},$=["srcdoc"],O=A({__name:"DesktopPrototype",setup(N){const s=new URLSearchParams(window.location.search),m=s.get("mode")==="snapshot",n=w.boardSections.flatMap(e=>e.frames).find(e=>e.id===s.get("frameId")),h=Object.assign({"../evidence/baseline-planning.png":k,"../evidence/baseline-rules.png":P,"../evidence/color-combination.jpg":S,"../evidence/color-fhi.jpg":z,"../evidence/color-hex.jpg":R,"../evidence/forbidden.jpg":q,"../evidence/planning-color.jpg":I,"../evidence/planning-top.jpg":M}),u=_(()=>{var e;return h["../evidence/"+(((e=n==null?void 0:n.snapshot)==null?void 0:e.sceneId)||"planning-color.jpg")]}),p=e=>{var t;e.origin===window.location.origin&&e.source!==window.parent&&((t=e.data)==null?void 0:t.type)==="prd:prototype-interaction"&&window.parent.postMessage(e.data,window.location.origin)};return B(()=>window.addEventListener("message",p)),E(()=>window.removeEventListener("message",p)),(e,t)=>{const x=r("a-tag"),b=r("a-button"),v=r("a-config-provider");return o(),y(v,{locale:l(C)},{default:a(()=>{var c;return[i("main",V,[m?(o(),d("img",{key:0,class:"evidence-image",src:u.value,alt:((c=l(n))==null?void 0:c.title)||"原型操作快照"},null,8,j)):(o(),d(F,{key:1},[i("div",H,[f(x,{color:"blue"},{default:a(()=>[...t[0]||(t[0]=[g("已有原型副本",-1)])]),_:1}),t[2]||(t[2]=i("span",null,"保留原型交互；变更标注请切换「PRD 标注」。当前为演示数据。",-1)),f(b,{size:"small",type:"link",href:"https://zhu-huiwen.github.io/ai-product-design-v12-copy/?v=24291dd",target:"_blank",rel:"noopener noreferrer","data-req-id":"REQ-001"},{default:a(()=>[...t[1]||(t[1]=[g("打开原链接",-1)])]),_:1})]),i("iframe",{class:"existing-prototype",title:"已有 AI 产品设计 V1.2 交互原型副本",srcdoc:l(T),sandbox:"allow-scripts allow-same-origin allow-downloads allow-modals",allow:"clipboard-read; clipboard-write"},null,8,$)],64))])]}),_:1},8,["locale"])}}}),K=D(O,[["__scopeId","data-v-e9f73e30"]]);export{K as default};
