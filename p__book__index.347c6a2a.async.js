(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{OvcY:function(e,t,a){"use strict";var l=a("284h"),n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("MVZn")),o=l(a("MebM")),i=a("MuoO"),s=n(a("LvDl")),d=n(a("dnEz")),p=n(a("UbMB")),c=a("Kvkj"),u=n(a("20nU")),m=n(a("zDtn")),f=u.default.gitalkOption,h=u.default.booksOption,b=h.enableGitalk,v=h.qoute,g=p.default.bind(m.default);class k extends o.PureComponent{constructor(e){super(e),this.renderGitalk=(()=>{b&&(setTimeout(()=>{var e=new d.default((0,r.default)({},f,{title:"\u4e66\u5355"}));e.render("gitalk")},100),this.setState({renderGitalk:!0}))}),this.state={showLoading:!0,renderGitalk:!1}}componentDidMount(){this.props.dispatch({type:"app/queryPage",payload:{type:"book"}})}componentWillReceiveProps(e){e.loading||s.default.isEmpty(e.books)||this.setState({showLoading:!1})}componentWillUnmount(){this.props.dispatch({type:"app/updateState",payload:{books:{}}})}render(e,t){var a=e.books,l=e.loading,n=t.showLoading,r=a.body&&a.body.trim().split("## ").filter(e=>e.length).map(e=>{var t=e.split("\r\n").filter(e=>e.length);return{name:t[0],author:t[1].split("author:")[1].trim(),published:t[2].split("published:")[1].trim(),progress:t[3].split("progress:")[1].trim(),rating:t[4].split("rating:")[1].trim(),postTitle:t[5].split("postTitle:")[1].trim(),postLink:t[6].split("postLink:")[1].trim(),cover:t[7].split("cover:")[1].trim(),desc:t[9].split("desc:")[1].trim()}});return o.default.createElement("div",{class:g("container")},o.default.createElement(c.Transition,{visible:!l&&!n,animation:"drop",duration:600,onShow:this.renderGitalk},o.default.createElement("div",{class:g("body")},o.default.createElement(c.Quote,{text:v}),o.default.createElement("div",{class:g("content")},r&&r.map((e,t)=>{var a=e.name,l=e.author,n=e.published,r=e.progress,i=e.rating,s=e.postTitle,d=e.postLink,p=e.cover,c=e.desc,u=new Array(10).fill(1).map((e,t)=>{return o.default.createElement("i",{class:"icon",style:{color:t<=4&&"#f6f"}},"\ue809")}),m=[].slice.call(u,5-parseInt(i,10),10-parseInt(i,10));return o.default.createElement("div",{key:t,class:g("book")},o.default.createElement("h2",null,a),o.default.createElement("div",{class:g("header")},o.default.createElement("img",{alt:"",src:p}),o.default.createElement("div",{class:g("info")},o.default.createElement("h2",null,a),o.default.createElement("p",null,"\u4f5c\u8005\uff1a",l),o.default.createElement("p",null,"\u51fa\u7248\u65f6\u95f4\uff1a",n),o.default.createElement("p",null,"\u9605\u8bfb\u8fdb\u5ea6\uff1a",r),o.default.createElement("p",null,"\u8bfb\u4e66\u7b14\u8bb0\uff1a",d.trim().length?o.default.createElement("a",{href:d,rel:"noopener noreferrer",target:"_blank"},s):"\u6682\u65e0"),o.default.createElement("p",null,"\u63a8\u8350\u6307\u6570\uff1a",m))),o.default.createElement("div",{class:g("desc")},c))})))),b&&o.default.createElement("div",{id:"gitalk"}),n&&o.default.createElement(c.Loading,{className:g("loading")}))}}var _=(0,i.connect)(e=>{var t=e.app,a=e.loading;return{books:t.book,loading:a.effects["app/queryPage"]}})(k);t.default=_},zDtn:function(e,t,a){e.exports={container:"container___3-skb",body:"body___2n2pm",content:"content___3RivX",book:"book___65vLL",header:"header___2xfWE",info:"info___2E2lb",desc:"desc___3sqNw",loading:"loading___2F6cQ"}}}]);