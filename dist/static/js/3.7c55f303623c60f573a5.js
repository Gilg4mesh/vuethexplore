webpackJsonp([3],{KCtJ:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[t.connected?t._e():s("div",[t._v("Please choose the host to connect blockchain! ")]),t._v(" "),t.connected&&t.loading?s("div",[t._v("Loading! ")]):t._e(),t._v(" "),t.connected&&!t.loading?s("div",[s("div",{staticClass:"section"},[s("div",{staticClass:"card"},[s("header",{staticClass:"card-header"},[s("p",{staticClass:"card-header-title"},[t._v("\r\n            Block #"+t._s(t.block.number)+"\r\n          ")]),t._v(" "),s("div",{staticClass:"tabs"},[s("ul",[s("li",{class:{"is-active":t.isSelected("information")}},[s("a",{on:{click:function(e){t.select("information")}}},[t._v("Information")])]),t._v(" "),s("li",{class:{"is-active":t.isSelected("transactions")}},[s("a",{on:{click:function(e){t.select("transactions")}}},[t._v("Transactions")])])])])]),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"content",staticStyle:{"word-wrap":"break-word"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isSelected("information"),expression:"isSelected('information')"}]},[s("p",[t._v("Transaction: "),s("router-link",{attrs:{to:{name:"Transaction",params:{transactionHash:t.block.transactions[0]}}}},[t._v(t._s(t.block.transactions[0]))]),t._v(", and other "+t._s(t.block.transactions.length-1)+" transactions")],1),t._v(" "),s("p",[t._v("Difficulty "+t._s(t.block.difficulty))]),t._v(" "),s("p",[t._v("Total Difficulty: "+t._s(t.block.totalDifficulty))]),t._v(" "),s("p",[t._v("Gas Limit: "+t._s(t.block.gasLimit))]),t._v(" "),s("p",[t._v("Gas Used: "+t._s(t.block.gasUsed))]),t._v(" "),s("p",[t._v("Hash: "+t._s(t.block.hash))]),t._v(" "),s("p",[t._v("Parent Hash: "),s("router-link",{attrs:{to:{name:"Block",params:{blockNumber:t.block.parentHash}}}},[t._v(t._s(t.block.parentHash))])],1),t._v(" "),s("p",[t._v("Logs Bloom: "+t._s(t.block.logsBloom))]),t._v(" "),s("p",[t._v("SHA3 Uncles: "+t._s(t.block.sha3Uncles))]),t._v(" "),s("p",[t._v("Miner: "),s("router-link",{attrs:{to:{name:"Address",params:{address:t.block.miner}}}},[t._v(t._s(t.block.miner))])],1),t._v(" "),s("p",[t._v("Mix Hash: "+t._s(t.block.mixHash))]),t._v(" "),s("p",[t._v("Nonce: "+t._s(t.block.nonce))]),t._v(" "),s("p",[t._v("Size: "+t._s(t.block.size))]),t._v(" "),s("p",[t._v("Extra Data: "+t._s(t.toUtf8(t.block.extraData))+" (Hex: "+t._s(t.block.extraData)+")")]),t._v(" "),s("time",[t._v("Timestamp: "+t._s(t.block.timestamp)+" ("+t._s(new Date(1e3*t.block.timestamp).toString())+")")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isSelected("transactions"),expression:"isSelected('transactions')"}]},t._l(t.block.transactions,function(e){return s("p",[s("router-link",{attrs:{to:{name:"Transaction",params:{transactionHash:e}}}},[t._v(t._s(e))])],1)}))])])])])]):t._e()])},n=[],c={render:a,staticRenderFns:n};e.a=c},T3b1:function(t,e,s){"use strict";var a=s("Dd8w"),n=s.n(a),c=s("NYxO");e.a={name:"block",data:function(){return{block:{},loading:!0,selected:""}},computed:n()({},Object(c.d)({web3:function(t){return t.blockchain.web3}}),Object(c.c)(["connected"])),created:function(){var t=this.$route.params.blockNumber;this.getBlock(t)},methods:n()({},Object(c.b)(["notify"]),{isValidBlockNumber:function(t){return!!/^[\d]+$/.test(t)||!!/^0x[0-9a-fA-F]{64}$/.test(t)},getBlock:function(t){var e=this;return this.connected?this.isValidBlockNumber(t)?void this.web3.eth.getBlock(t).then(function(t){e.block=t}).catch(function(s){e.notify({text:"Failed to get block "+t+"! Error: "+s.message,class:"is-danger"})}).then(function(){e.select("information"),e.loading=!1}):void this.notify({text:"Block number is not valid!",class:"is-danger"}):void this.notify({text:"Please choose the host to connect blockchain!",class:"is-danger"})},toUtf8:function(t){var e="";try{e=this.web3.utils.toUtf8(t)}catch(s){e=t}return e},isSelected:function(t){return!1===/^[\w]+$/.test(t)?(this.notify({text:"Cannot check "+t+" is selected!",class:"is-danger"}),!1):t===this.selected},select:function(t){!1===/^[\w]+$/.test(t)&&this.notify({text:"Cannot select "+t+"!",class:"is-danger"}),this.selected=t}}),watch:{$route:function(t,e){var s=t.params.blockNumber;s!==e.params.blockNumber&&this.getBlock(s)}}}},"mSQ/":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("T3b1"),n=s("KCtJ"),c=s("VU/8"),i=c(a.a,n.a,!1,null,null,null);e.default=i.exports}});
//# sourceMappingURL=3.7c55f303623c60f573a5.js.map