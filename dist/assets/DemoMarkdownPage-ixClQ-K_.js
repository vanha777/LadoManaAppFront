import{ac as s,as as i,aN as p,aB as t,fo as h,ae as c,b2 as e}from"./index-kAVNsXXW.js";import{M as a}from"./Markdown-EScK2ww8.js";import{C as d}from"./CustomBreadcrumbs-07KkEdSP.js";import{C as r}from"./Card-yNtnckip.js";import{C as n}from"./CardHeader-cbPk7NV8.js";import{C as l}from"./CardContent-Yl8ry9fC.js";const m=`

<h1>h1</h1>

<h2>h2</h2>

<p> <strong>Paragraph</strong> Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</p>

<p>
  <a href='https://www.google.com/'>Link (https://www.google.com/)</a>
</p>

<h6>Lists</h6>

<ul>
  <li>
    <input type="checkbox" disabled="" checked=""> Write the press release
  </li>
  <li>
    <input type="checkbox" disabled=""> Update the website
  </li>
  <li>
    <input type="checkbox" disabled=""> Contact the media
  </li>
</ul>

<hr/>

<h6>A table:</h6>

<table>
  <thead>
    <tr>
      <th style="text-align: left;">Syntax</th>
      <th style="text-align: center;">Description</th>
      <th style="text-align: right;">Test Text</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: left;">Header</td>
      <td style="text-align: center;">Title</td>
      <td style="text-align: right;">Here's this</td>
    </tr>
    <tr>
      <td style="text-align: left;">Paragraph</td>
      <td style="text-align: center;">Text</td>
      <td style="text-align: right;">And more</td>
    </tr>
  </tbody>
</table>

<pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span> <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">ReactDOM</span> <span class="hljs-keyword">from</span> <span class="hljs-string">'react-dom'</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">ReactMarkdown</span> <span class="hljs-keyword">from</span> <span class="hljs-string">'react-markdown'</span>;
<span class="hljs-keyword">import</span> rehypeHighlight <span class="hljs-keyword">from</span> <span class="hljs-string">'rehype-highlight'</span>;

<span class="hljs-title class_">ReactDOM</span>.<span class="hljs-title function_">render</span>(
  <span class="hljs-tag">&lt;<span class="hljs-name">ReactMarkdown</span> <span class="hljs-attr">rehypePlugins</span>=<span class="hljs-string">{[rehypeHighlight]}</span>&gt;</span>{'# Your markdown here'}<span class="hljs-tag">&lt;/<span class="hljs-name">ReactMarkdown</span>&gt;</span>,
  <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">querySelector</span>(<span class="hljs-string">'#content'</span>)
);
</pre>

<img alt='cover' src='https://res.cloudinary.com/trinhmai/image/upload/v1660897321/_minimal_mock/_Cover/cover_19.jpg'>

<blockquote> <p>A block quote with <s>strikethrough</s> and a URL: <a href='https://reactjs.org'>https://reactjs.org</a>.</p> </blockquote>
`,g=`
# h1

## h2

**Paragraph** Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

[Link (https://www.google.com/)](https://www.google.com/)

###### Lists

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

---

###### A table:

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |

\`\`\`tsx
import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';

ReactDOM.render(
  <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{'# Your markdown here'}</ReactMarkdown>,
  document.querySelector('#content')
);
\`\`\`

![cover](https://res.cloudinary.com/trinhmai/image/upload/v1660897321/_minimal_mock/_Cover/cover_19.jpg)

> A block quote with ~~strikethrough~~ and a URL: [https://reactjs.org](https://reactjs.org).
`;function b(){return s.jsxs(s.Fragment,{children:[s.jsx(i,{children:s.jsx("title",{children:" Extra Components: Markdown | Minimal UI"})}),s.jsx(p,{sx:{pt:6,pb:1,bgcolor:o=>o.palette.mode==="light"?"grey.200":"grey.800"},children:s.jsx(t,{children:s.jsx(d,{heading:"Markdown",links:[{name:"Components",href:h.components},{name:"Markdown"}],moreLink:["https://www.npmjs.com/package/react-markdown"]})})}),s.jsx(t,{sx:{my:10},children:s.jsxs(c,{spacing:3,direction:{xs:"column",md:"row"},children:[s.jsxs(r,{children:[s.jsx(n,{title:"Html content",sx:{pb:3}}),s.jsx(e,{sx:{borderStyle:"dashed"}}),s.jsx(l,{children:s.jsx(a,{children:m})})]}),s.jsxs(r,{children:[s.jsx(n,{title:"Mardown content",sx:{pb:3}}),s.jsx(e,{sx:{borderStyle:"dashed"}}),s.jsx(l,{children:s.jsx(a,{children:g})})]})]})})]})}export{b as default};
