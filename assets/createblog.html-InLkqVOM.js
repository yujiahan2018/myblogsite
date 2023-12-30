import{_ as t,r as i,o as c,c as r,a as s,b as a,d as l,e as n}from"./app-5LCzN76x.js";const p={},m=n('<blockquote><p>主题选用vuepress-theme-reco，默认无Latex支持</p></blockquote><h2 id="官方文档" tabindex="-1"><a class="header-anchor" href="#官方文档" aria-hidden="true">#</a> 官方文档</h2><p><img src="https://img.shields.io/badge/vuepress-0.14.8-brightgreen.svg" alt="vuepress"><img src="https://img.shields.io/badge/leancloud--storage-3.10.1-orange.svg" alt="leancloud-storage"><img src="https://img.shields.io/badge/valine-1.3.4-blue.svg" alt="valine"></p>',3),o={class:"custom-container tip"},d=n('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">介绍</p>',2),u=s("li",null,[a("这是一个vuepress主题，旨在添加博客所需的分类、TAB墙、分页、评论等能；"),s("br")],-1),h=s("li",null,[a("主题追求极简，根据 vuepress 的默认主题修改而成，官方的主题配置仍然适用；"),s("br")],-1),v={href:"http://recoluan.gitlab.io",target:"_blank",rel:"noopener noreferrer"},g=s("h2",{id:"快速开始",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#快速开始","aria-hidden":"true"},"#"),a(" 快速开始")],-1),b={href:"https://vuepress-theme-reco.recoluan.com/docs/guide/introduce.html",target:"_blank",rel:"noopener noreferrer"},y=n(`<p><strong>npx</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 初始化，并选择 2.x</span>
npx @vuepress-reco/theme-cli init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>npm</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 初始化，并选择 2.x</span>
<span class="token function">npm</span> <span class="token function">install</span> @vuepress-reco/theme-cli@1.0.7 <span class="token parameter variable">-g</span>
theme-cli init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>yarn</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 初始化，并选择 2.x</span>
<span class="token function">yarn</span> global <span class="token function">add</span> @vuepress-reco/theme-cli@1.0.7
theme-cli init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Build</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run build

<span class="token comment"># or</span>

<span class="token function">yarn</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Server</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run dev

<span class="token comment"># or</span>

<span class="token function">yarn</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置latex支持" tabindex="-1"><a class="header-anchor" href="#配置latex支持" aria-hidden="true">#</a> 配置Latex支持</h2>`,11),k={href:"https://plugin-md-enhance.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},x=n(`<p>markdown默认不支持latex语法，但是我们在写博客的时候又往往需要通过Latex语法写数学公式。这个时候就需要通过插件去解决。</p><p>虽然网上有许多开源插件可供选择，但是绝大部分都已经停止维护1年以上了，考虑到后面的迭代性，故一直在寻找替代品。</p><p>theme-hope.vuejs.press的内置插件：<strong>vuepress-plugin-md-enhance</strong>，功能强大且目前一直在维护，故将其引入到自己使用的主题中</p><h3 id="配置过程" tabindex="-1"><a class="header-anchor" href="#配置过程" aria-hidden="true">#</a> 配置过程</h3><p>安装vuepress-plugin-md-enhance核心包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i vuepress-plugin-md-enhance
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装相关数学环境支持包：katex 或 mathjax-full:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> katex
<span class="token comment"># or</span>
<span class="token function">npm</span> i <span class="token parameter variable">-D</span> mathjax-full
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>导包</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// .vuepress/config.ts
<span class="token function">import</span> <span class="token punctuation">{</span> mdEnhancePlugin <span class="token punctuation">}</span> from <span class="token string">&quot;vuepress-plugin-md-enhance&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>引入插件</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> default <span class="token punctuation">{</span>
  plugins: <span class="token punctuation">[</span>
    mdEnhancePlugin<span class="token punctuation">(</span><span class="token punctuation">{</span>
      // 使用 KaTeX 启用 TeX 支持
      katex: true,
      // 使用 mathjax 启用 TeX 支持
      mathjax: true,
    <span class="token punctuation">}</span><span class="token punctuation">)</span>,
  <span class="token punctuation">]</span>,
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用测试" tabindex="-1"><a class="header-anchor" href="#使用测试" aria-hidden="true">#</a> 使用测试</h3>`,13),f=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mtable",{rowspacing:"0.16em",columnspacing:"1em"},[s("mtr",null,[s("mtd",{class:"mtr-glue"}),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mo",{fence:"true"},"{"),s("mtable",{rowspacing:"0.16em",columnalign:"center left",columnspacing:"1em"},[s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow")])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mi",null,"x"),s("mo",null,"+"),s("mi",null,"y"),s("mo",null,"+"),s("mi",null,"z"),s("mo",null,"="),s("mn",null,"0")])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow")])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mn",null,"5"),s("mo",null,"∗"),s("mi",null,"x"),s("mo",null,"+"),s("mn",null,"3"),s("mo",null,"∗"),s("mi",null,"y"),s("mo",null,"+"),s("mfrac",null,[s("mi",null,"z"),s("mn",null,"3")]),s("mo",null,"="),s("mn",null,"100")])])])])])])])]),s("mtd",{class:"mtr-glue"}),s("mtd",{class:"mml-eqn-num"})])]),s("annotation",{encoding:"application/x-tex"}," \\begin{equation} \\left\\{ \\begin{array}{cl} & x+y+z=0 \\\\ & 5*x+3*y+\\frac{z}{3}=100 \\\\ \\end{array} \\right. \\end{equation} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.4em","vertical-align":"-0.95em"}}),s("span",{class:"mtable"},[s("span",{class:"col-align-c"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.45em"}},[s("span",{style:{top:"-3.45em"}},[s("span",{class:"pstrut",style:{height:"3.45em"}}),s("span",{class:"mord"},[s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},"{")]),s("span",{class:"mord"},[s("span",{class:"mtable"},[s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"col-align-c"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.45em"}},[s("span",{style:{top:"-3.45em"}},[s("span",{class:"pstrut",style:{height:"2.84em"}}),s("span",{class:"mord"})]),s("span",{style:{top:"-2.25em"}},[s("span",{class:"pstrut",style:{height:"2.84em"}}),s("span",{class:"mord"})])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.95em"}},[s("span")])])])]),s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"col-align-l"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.45em"}},[s("span",{style:{top:"-3.61em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord"},"0")])]),s("span",{style:{top:"-2.41em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"5"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"3"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6954em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"3")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.04398em"}},"z")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord"},"100")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.95em"}},[s("span")])])])]),s("span",{class:"arraycolsep",style:{width:"0.5em"}})])]),s("span",{class:"mclose nulldelimiter"})])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.95em"}},[s("span")])])])])])]),s("span",{class:"tag"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.45em"}},[s("span",{style:{top:"-3.45em"}},[s("span",{class:"pstrut",style:{height:"3.45em"}}),s("span",{class:"eqn-num"})])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.95em"}},[s("span")])])])])])])])],-1);function _(w,z){const e=i("ExternalLinkIcon");return c(),r("div",null,[m,s("div",o,[d,s("ol",null,[u,h,s("li",null,[a("你可以打开 "),s("a",v,[a("午后南杂"),l(e)]),a(" 来查看效果。")])])]),g,s("blockquote",null,[s("p",null,[s("a",b,[a("官方文档"),l(e)]),a("。")])]),y,s("blockquote",null,[s("p",null,[s("a",k,[a("官方文档"),l(e)])])]),x,f])}const j=t(p,[["render",_],["__file","createblog.html.vue"]]);export{j as default};
