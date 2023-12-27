import{F as u,ac as e,as as f,aN as y,aB as p,fo as g,bR as l,bi as a,an as d,b7 as b}from"./index-kAVNsXXW.js";import{C as j}from"./CustomBreadcrumbs-07KkEdSP.js";import{B as o}from"./Block-GOmpvx5w.js";import{c as S}from"./countries-ACrf0PN6.js";import{M as T}from"./Masonry-3kExvnkR.js";import"./CardHeader-cbPk7NV8.js";const c=["Option 1","Option 2"];function C(n){return typeof String.fromCodePoint<"u"?n.toUpperCase().replace(/./g,s=>String.fromCodePoint(s.charCodeAt(0)+127397)):n}function P(){const[n,s]=u.useState(c[0]),[h,m]=u.useState("");return e.jsxs(e.Fragment,{children:[e.jsx(f,{children:e.jsx("title",{children:" MUI Components: Autocomplete | Minimal UI"})}),e.jsx(y,{sx:{pt:6,pb:1,bgcolor:t=>t.palette.mode==="light"?"grey.200":"grey.800"},children:e.jsx(p,{children:e.jsx(j,{heading:"Autocomplete",links:[{name:"Components",href:g.components},{name:"Autocomplete"}],moreLink:["https://mui.com/components/autocomplete"]})})}),e.jsx(p,{sx:{my:10},children:e.jsxs(T,{columns:{xs:1,sm:2,md:3},spacing:3,children:[e.jsx(o,{title:"Combo box",children:e.jsx(l,{fullWidth:!0,options:r,getOptionLabel:t=>t.title,renderInput:t=>e.jsx(a,{...t,label:"Combo box",margin:"none"})})}),e.jsx(o,{title:"Country Select",children:e.jsx(l,{fullWidth:!0,autoHighlight:!0,options:S,getOptionLabel:t=>t.label,renderOption:(t,i)=>e.jsxs(y,{component:"li",...t,sx:{px:"8px !important"},children:[e.jsx(y,{component:"span",sx:{flexShrink:0,mr:2,fontSize:22},children:C(i.code)}),i.label," (",i.code,") +",i.phone]}),renderInput:t=>e.jsx(a,{...t,label:"Choose a country",inputProps:{...t.inputProps,autoComplete:"new-password"}})})}),e.jsx(o,{title:" Controllable states",sx:{flexDirection:"column"},children:e.jsxs(e.Fragment,{children:[e.jsx(l,{fullWidth:!0,value:n,options:c,onChange:(t,i)=>{s(i)},inputValue:h,onInputChange:(t,i)=>{m(i)},renderInput:t=>e.jsx(a,{...t,label:"Controllable"})}),e.jsx(d,{variant:"body2",sx:{mt:2},children:`value: ${n!==null?`'${n}'`:"null"}`}),e.jsx(d,{variant:"body2",children:`inputValue: '${h}'`})]})}),e.jsxs(o,{title:"Free solo",children:[e.jsx(l,{fullWidth:!0,freeSolo:!0,options:r.map(t=>t.title),renderInput:t=>e.jsx(a,{...t,label:"freeSolo"}),sx:{mb:2}}),e.jsx(l,{fullWidth:!0,freeSolo:!0,disableClearable:!0,options:r.map(t=>t.title),renderInput:t=>e.jsx(a,{...t,label:"Search input",InputProps:{...t.InputProps,type:"search"}})})]}),e.jsx(o,{title:"Multiple Values",children:e.jsx(l,{multiple:!0,fullWidth:!0,options:r,getOptionLabel:t=>t.title,defaultValue:[r[13]],filterSelectedOptions:!0,renderInput:t=>e.jsx(a,{...t,label:"filterSelectedOptions",placeholder:"Favorites"})})}),e.jsx(o,{title:"Checkboxes",children:e.jsx(l,{fullWidth:!0,multiple:!0,options:r,disableCloseOnSelect:!0,getOptionLabel:t=>t.title,renderOption:(t,i,{selected:x})=>e.jsxs("li",{...t,children:[e.jsx(b,{checked:x}),i.title]}),renderInput:t=>e.jsx(a,{...t,label:"Checkboxes",placeholder:"Favorites"})})}),e.jsx(o,{title:"Sizes",children:e.jsxs(e.Fragment,{children:[e.jsx(l,{fullWidth:!0,options:r,getOptionLabel:t=>t.title,defaultValue:r[13],renderInput:t=>e.jsx(a,{...t,label:"Size Medium",placeholder:"Favorites"})}),e.jsx("br",{}),e.jsx(l,{fullWidth:!0,multiple:!0,size:"small",options:r,getOptionLabel:t=>t.title,defaultValue:[r[13]],renderInput:t=>e.jsx(a,{...t,label:"Size small",placeholder:"Favorites"})})]})})]})})]})}const r=[{title:"The Shawshank Redemption",year:1994},{title:"The Godfather",year:1972},{title:"The Godfather: Part II",year:1974},{title:"The Dark Knight",year:2008},{title:"12 Angry Men",year:1957},{title:"Schindler's List",year:1993},{title:"Pulp Fiction",year:1994},{title:"The Lord of the Rings: The Return of the King",year:2003},{title:"The Good, the Bad and the Ugly",year:1966},{title:"Fight Club",year:1999},{title:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{title:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{title:"Forrest Gump",year:1994},{title:"Inception",year:2010},{title:"The Lord of the Rings: The Two Towers",year:2002},{title:"One Flew Over the Cuckoo's Nest",year:1975},{title:"Goodfellas",year:1990},{title:"The Matrix",year:1999},{title:"Seven Samurai",year:1954},{title:"Star Wars: Episode IV - A New Hope",year:1977},{title:"City of God",year:2002},{title:"Se7en",year:1995},{title:"The Silence of the Lambs",year:1991},{title:"It's a Wonderful Life",year:1946},{title:"Life Is Beautiful",year:1997},{title:"The Usual Suspects",year:1995},{title:"Léon: The Professional",year:1994},{title:"Spirited Away",year:2001},{title:"Saving Private Ryan",year:1998},{title:"Once Upon a Time in the West",year:1968},{title:"American History X",year:1998},{title:"Interstellar",year:2014},{title:"Casablanca",year:1942},{title:"City Lights",year:1931},{title:"Psycho",year:1960},{title:"The Green Mile",year:1999},{title:"The Intouchables",year:2011},{title:"Modern Times",year:1936},{title:"Raiders of the Lost Ark",year:1981},{title:"Rear Window",year:1954},{title:"The Pianist",year:2002},{title:"The Departed",year:2006},{title:"Terminator 2: Judgment Day",year:1991},{title:"Back to the Future",year:1985},{title:"Whiplash",year:2014},{title:"Gladiator",year:2e3},{title:"Memento",year:2e3},{title:"The Prestige",year:2006},{title:"The Lion King",year:1994},{title:"Apocalypse Now",year:1979},{title:"Alien",year:1979},{title:"Sunset Boulevard",year:1950},{title:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{title:"The Great Dictator",year:1940},{title:"Cinema Paradiso",year:1988},{title:"The Lives of Others",year:2006},{title:"Grave of the Fireflies",year:1988},{title:"Paths of Glory",year:1957},{title:"Django Unchained",year:2012},{title:"The Shining",year:1980},{title:"WALL·E",year:2008},{title:"American Beauty",year:1999},{title:"The Dark Knight Rises",year:2012},{title:"Princess Mononoke",year:1997},{title:"Aliens",year:1986},{title:"Oldboy",year:2003},{title:"Once Upon a Time in America",year:1984},{title:"Witness for the Prosecution",year:1957},{title:"Das Boot",year:1981},{title:"Citizen Kane",year:1941},{title:"North by Northwest",year:1959},{title:"Vertigo",year:1958},{title:"Star Wars: Episode VI - Return of the Jedi",year:1983},{title:"Reservoir Dogs",year:1992},{title:"Braveheart",year:1995},{title:"M",year:1931},{title:"Requiem for a Dream",year:2e3},{title:"Amélie",year:2001},{title:"A Clockwork Orange",year:1971},{title:"Like Stars on Earth",year:2007},{title:"Taxi Driver",year:1976},{title:"Lawrence of Arabia",year:1962},{title:"Double Indemnity",year:1944},{title:"Eternal Sunshine of the Spotless Mind",year:2004},{title:"Amadeus",year:1984},{title:"To Kill a Mockingbird",year:1962},{title:"Toy Story 3",year:2010},{title:"Logan",year:2017},{title:"Full Metal Jacket",year:1987},{title:"Dangal",year:2016},{title:"The Sting",year:1973},{title:"2001: A Space Odyssey",year:1968},{title:"Singin' in the Rain",year:1952},{title:"Toy Story",year:1995},{title:"Bicycle Thieves",year:1948},{title:"The Kid",year:1921},{title:"Inglourious Basterds",year:2009},{title:"Snatch",year:2e3},{title:"3 Idiots",year:2009},{title:"Monty Python and the Holy Grail",year:1975}];export{P as default,r as top100Films};
