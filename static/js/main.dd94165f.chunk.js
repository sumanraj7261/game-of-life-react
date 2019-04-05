(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports=n(19)},,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){var i=n(18),r=i.sum,o=i.parseBoolToInt,l={grid:[],generateGrid:function(t){var e=t.length,n=t.width;return new Array(e).fill(0).map(function(t){return new Array(n).fill(0)})},getGridDimension:function(t){return{length:t.length,width:t[0].length}},isCellPositionValid:function(t){var e=t.latitude,n=t.longitude,i=this.getGridDimension(this.grid),r=i.length,o=i.width;return!(Math.min(e,n)<0||e>=r||n>=o)},isCellStateAlive:function(t){var e=t.latitude,n=t.longitude;return this.isCellPositionValid(t)&&1==this.grid[e][n]},getAllNeighbours:function(t){var e=t.latitude,n=t.longitude,i=[-1,0,1],r=[];return i.forEach(function(t){i.forEach(function(i){r.push([e+t,n+i])})}),r.filter(function(t){return!(t[0]==e&&t[1]==n)})},getAliveNeighbours:function(t){var e=this;return this.getAllNeighbours(t).map(function(t){return e.isCellStateAlive({latitude:t[0],longitude:t[1]})}).map(o)},getAliveNeighboursCount:function(t){return this.getAliveNeighbours(t).reduce(r)},updatePositionState:function(t){var e=t.latitude,n=t.longitude,i=t.aliveNeighbours;return i<2||i>3?0:3==i?1:this.grid[e][n]},updateGrid:function(){for(var t=this.grid.map(function(t){return t.slice()}),e=this.getGridDimension(this.grid),n=e.length,i=e.width,r=0;r<n;r++)for(var o=0;o<i;o++){var l=this.getAliveNeighboursCount({latitude:r,longitude:o}),a=this.updatePositionState({latitude:r,longitude:o,aliveNeighbours:l});t[r][o]=a}this.grid=t},initializeGrid:function(t){var e=t.latitude,n=t.longitude;this.grid[e][n]=1}};t.exports={world:l}},function(t,e){t.exports={sum:function(t,e){return t+e},parseBoolToInt:function(t){return 0+t},repeatCharacter:function(t,e){return new Array(t).fill(e).join("")}}},function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i),o=n(3),l=n.n(o),a=(n(15),n(4)),u=n(5),s=n(7),c=n(6),d=n(8),h=n(1),g=(n(16),n(17).world),f=function(t,e,n){return g.grid=g.generateGrid({length:t,width:e}),n.forEach(function(t){g.initializeGrid({latitude:t[0],longitude:t[1]})}),g.updateGrid(),function(){for(var t=[],e=g.getGridDimension(g.grid),n=e.length,i=e.width,r=0;r<n;r++)for(var o=0;o<i;o++)1==g.grid[r][o]&&t.push([r,o]);return t}()},v=function(t){function e(t){var n;return Object(a.a)(this,e),(n=Object(s.a)(this,Object(c.a)(e).call(this,t))).setState={bounds:{topLeft:[0,0],bottomRight:[4,4]},currGeneration:[],aliveCells:[]},n.length=n.setState.bounds.bottomRight[0]-n.setState.bounds.topLeft[0]+1,n.width=n.setState.bounds.bottomRight[1]-n.setState.bounds.topLeft[1]+1,n.selectCell=n.selectCell.bind(Object(h.a)(Object(h.a)(n))),n.runGame=n.runGame.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(e,t),Object(u.a)(e,[{key:"selectCell",value:function(t){t.target.style.backgroundColor="black"}},{key:"getAllSelectedCellsNumbers",value:function(t){var e=1,n=!0,i=!1,r=void 0;try{for(var o,l=t[Symbol.iterator]();!(n=(o=l.next()).done);n=!0)for(var a=o.value,u=0;u<this.length;u++)"black"==a.children[u].style.backgroundColor&&this.setState.aliveCells.push(e),e++}catch(s){i=!0,r=s}finally{try{n||null==l.return||l.return()}finally{if(i)throw r}}}},{key:"willAlive",value:function(t){return this.setState.currGeneration.some(function(e){return+e.join("")==+t.join("")})}},{key:"runGame",value:function(){var t=this,e=document.getElementById("Board").children;this.getAllSelectedCellsNumbers(e),this.setState.currGeneration=function(t,e,n){for(var i=new Array,r=1,o=0;o<n;o++)for(var l=0;l<e;l++)t.includes(r)&&i.push([o,l]),r++;return i}(this.setState.aliveCells,this.length,this.width),setInterval(function(){t.setState.currGeneration=f(t.length,t.width,t.setState.currGeneration);var n=0,i=!0,r=!1,o=void 0;try{for(var l,a=e[Symbol.iterator]();!(i=(l=a.next()).done);i=!0){for(var u=l.value,s=0;s<t.width;s++)u.children[s].style.backgroundColor="white",t.willAlive([n,s])&&(u.children[s].style.backgroundColor="black");n++}}catch(c){r=!0,o=c}finally{try{i||null==a.return||a.return()}finally{if(r)throw o}}},1e3)}},{key:"rowsGenerator",value:function(){var t=r.a.createElement("td",{onClick:this.selectCell}),e=new Array(this.length).fill(t),n=r.a.createElement("tr",{className:"CellRow"},e);return new Array(this.width).fill(n)}},{key:"render",value:function(){return document.getElementById("done").onclick=this.runGame,r.a.createElement("div",{className:"Game"},r.a.createElement("table",{id:"Board",className:"Board"},this.rowsGenerator()))}}]),e}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.dd94165f.chunk.js.map