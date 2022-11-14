"use strict";(self.webpackChunkmy_website_ts=self.webpackChunkmy_website_ts||[]).push([[918],{1565:function(e,t,a){a.r(t),a.d(t,{default:function(){return ve}});var n=a(7294),l=a(6010),r=a(5999),s=a(9960);function c(e){return n.createElement(n.Fragment,null)}var i=a(2263),o=a(5551),d=a(373),m=a(5281),u=a(4477);var b={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=b[e.versionMetadata.banner];return n.createElement(t,e)}function p(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(s.Z,{to:a,onClick:l},n.createElement(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function E(e){var t,a=e.className,r=e.versionMetadata,s=(0,i.Z)().siteConfig.title,c=(0,o.gA)({failfast:!0}).pluginId,u=(0,d.J)(c).savePreferredVersionName,b=(0,o.Jo)(c),E=b.latestDocSuggestion,h=b.latestVersionSuggestion,g=null!=E?E:(t=h).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(a,m.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:s,versionMetadata:r})),n.createElement("div",{className:"margin-top--md"},n.createElement(p,{versionLabel:h.label,to:g.path,onClick:function(){return u(h.name)}})))}function h(e){var t=e.className,a=(0,u.E)();return a.banner?n.createElement(E,{className:t,versionMetadata:a}):null}function g(e){var t=e.className,a=(0,u.E)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,m.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function f(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(r.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function N(e){var t=e.lastUpdatedBy;return n.createElement(r.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function Z(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:m.k.common.lastUpdated},n.createElement(r.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(f,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(N,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var L=a(7462),_=a(3366),k="iconEdit_dcUD",U=["className"];function T(e){var t=e.className,a=(0,_.Z)(e,U);return n.createElement("svg",(0,L.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(k,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function w(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.k.common.editThisPage},n.createElement(T,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var y="tag_hD8n",C="tagRegular_D6E_",A="tagWithCount_i0QQ";function B(e){var t=e.permalink,a=e.label,r=e.count;return n.createElement(s.Z,{href:t,className:(0,l.Z)(y,r?A:C)},a,r&&n.createElement("span",null,r))}var M="tags_XVD_",I="tag_JSN8";function x(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(M,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:I},n.createElement(B,{label:t,permalink:a}))}))))}var H="lastUpdated_foO9";function D(e){return n.createElement("div",{className:(0,l.Z)(m.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(x,e)))}function V(e){var t=e.editUrl,a=e.lastUpdatedAt,r=e.lastUpdatedBy,s=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(m.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(w,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",H)},(a||r)&&n.createElement(Z,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:r})))}function S(e){var t=e.content.metadata,a=t.editUrl,r=t.lastUpdatedAt,s=t.formattedLastUpdatedAt,c=t.lastUpdatedBy,i=t.tags,o=i.length>0,d=!!(a||r||c);return o||d?n.createElement("footer",{className:(0,l.Z)(m.k.docs.docFooter,"docusaurus-mt-lg")},o&&n.createElement(D,{tags:i}),d&&n.createElement(V,{editUrl:a,lastUpdatedAt:r,lastUpdatedBy:c,formattedLastUpdatedAt:s})):null}var F=a(1575),P=a(6043),z="tocCollapsible_bZGK",O="tocCollapsibleContent_NNA8",R="tocCollapsibleExpanded_IqtF",X=a(721),q="tocCollapsibleButton_l22C",J="tocCollapsibleButtonExpanded_KeTX",G=["collapsed"];function K(e){var t=e.collapsed,a=(0,_.Z)(e,G);return n.createElement("button",(0,L.Z)({type:"button"},a,{className:(0,l.Z)("clean-btn",q,!t&&J,a.className)}),n.createElement(r.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}function Q(e){var t=e.toc,a=e.className,r=e.minHeadingLevel,s=e.maxHeadingLevel,c=(0,P.u)({initialState:!0}),i=c.collapsed,o=c.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(z,!i&&R,a)},n.createElement(K,{collapsed:i,onClick:o}),n.createElement(P.z,{lazy:!0,className:O,collapsed:i},n.createElement(X.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:s})))}var W=a(9649),j="docItemContainer_vinB",Y="docItemCol_DM6M",$="tocMobile_TmEX",ee=a(1944),te=a(7524),ae=a(8425),ne=a(8596),le={breadcrumbsContainer:"breadcrumbsContainer_Xlws",breadcrumbHomeIcon:"breadcrumbHomeIcon_kU5B"},re=a(4996);function se(e){return n.createElement("svg",(0,L.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}function ce(e){var t=e.children,a=e.href,l="breadcrumbs__link";return e.isLast?n.createElement("span",{className:l,itemProp:"name"},t):a?n.createElement(s.Z,{className:l,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:l},t)}function ie(e){var t=e.children,a=e.active,r=e.index,s=e.addMicrodata;return n.createElement("li",(0,L.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(r+1)}))}function oe(){var e=(0,re.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(s.Z,{"aria-label":(0,r.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,l.Z)("breadcrumbs__link",le.breadcrumbsItemLink),href:e},n.createElement(se,{className:le.breadcrumbHomeIcon})))}function de(){var e=(0,ae.s1)(),t=(0,ne.Ns)();return e?n.createElement("nav",{className:(0,l.Z)(m.k.docs.docBreadcrumbs,le.breadcrumbsContainer),"aria-label":(0,r.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(oe,null),e.map((function(t,a){var l=a===e.length-1;return n.createElement(ie,{key:a,active:l,index:a,addMicrodata:!!t.href},n.createElement(ce,{href:t.href,isLast:l},t.label))})))):null}var me=a(5290);function ue(e){var t,a=e.content,l=a.metadata,r=a.frontMatter,s=a.assets,c=r.keywords,i=l.description,o=l.title,d=null!=(t=s.image)?t:r.image;return n.createElement(ee.d,{title:o,description:i,keywords:c,image:d})}function be(e){var t=e.content,a=t.metadata,r=t.frontMatter,s=r.hide_title,i=r.hide_table_of_contents,o=r.toc_min_heading_level,d=r.toc_max_heading_level,u=a.title,b=!s&&void 0===t.contentTitle,v=(0,te.i)(),p=!i&&t.toc&&t.toc.length>0,E=p&&("desktop"===v||"ssr"===v);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!i&&Y)},n.createElement(h,null),n.createElement("div",{className:j},n.createElement("article",null,n.createElement(de,null),n.createElement(g,null),p&&n.createElement(Q,{toc:t.toc,minHeadingLevel:o,maxHeadingLevel:d,className:(0,l.Z)(m.k.docs.docTocMobile,$)}),n.createElement("div",{className:(0,l.Z)(m.k.docs.docMarkdown,"markdown")},b&&n.createElement("header",null,n.createElement(W.Z,{as:"h1"},u)),n.createElement(me.Z,null,n.createElement(t,null))),n.createElement(S,e)),n.createElement(c,{previous:a.previous,next:a.next}))),E&&n.createElement("div",{className:"col col--3"},n.createElement(F.Z,{toc:t.toc,minHeadingLevel:o,maxHeadingLevel:d,className:m.k.docs.docTocDesktop})))}function ve(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(ee.FG,{className:t},n.createElement(ue,e),n.createElement(be,e))}}}]);