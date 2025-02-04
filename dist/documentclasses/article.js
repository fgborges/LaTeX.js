// Generated by LiveScript 1.6.0
(function(){
  'use strict';
  var Base, Article, out$ = typeof exports != 'undefined' && exports || this;
  Base = require('./base').Base;
  out$.Article = Article = (function(superclass){
    var args, prototype = extend$((import$(Article, superclass).displayName = 'Article', Article), superclass).prototype, constructor = Article;
    Article.css = "css/article.css";
    function Article(generator, options){
      Article.superclass.apply(this, arguments);
      this.g.setCounter('secnumdepth', 3);
      this.g.setCounter('tocdepth', 3);
    }
    args = Article.args = Base.args;
    Article.prototype['refname'] = function(){
      return ["References"];
    };
    args['tableofcontents'] = ['V'];
    Article.prototype['tableofcontents'] = function(){
      return this.section(true, undefined, this.g.macro('contentsname')).concat([this.g._toc]);
    };
    args['abstract'] = ['V'];
    Article.prototype['abstract'] = function(){
      var head;
      this.g.setFontSize("small");
      this.g.enterGroup();
      this.g.setFontWeight("bf");
      head = this.g.create(this.g.list, this.g.macro("abstractname"), "center");
      this.g.exitGroup();
      return [head].concat(this.quotation());
    };
    Article.prototype['endabstract'] = function(){
      this.endquotation();
    };
    args['appendix'] = ['V'];
    Article.prototype['appendix'] = function(){
      this.g.setCounter('section', 0);
      this.g.setCounter('subsection', 0);
      this['thesection'] = function(){
        return [this.g.Alph(this.g.counter('section'))];
      };
    };
    return Article;
  }(Base));
  function extend$(sub, sup){
    function fun(){} fun.prototype = (sub.superclass = sup).prototype;
    (sub.prototype = new fun).constructor = sub;
    if (typeof sup.extended == 'function') sup.extended(sub);
    return sub;
  }
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb2N1bWVudGNsYXNzZXMvYXJ0aWNsZS5scyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztFQUFBOztFQUdnQixJQUFaLENBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBSjtpQkFJYSxXQUFOLFFBQUEsQ0FBQSxVQUFBOztJQUdILE9BQUMsQ0FBQSxHQUFJLENBQUEsQ0FBQSxDQUFtQjtJQUl4QixRQUFBLENBQUEsT0FBQSxDQUFBLFNBQUEsRUFBQSxPQUFBO01BQ0ksT0FBQSxpQ0FBTTtNQUVOLElBQUMsQ0FBQSxDQUFDLENBQUMsV0FBVyxlQUFjLENBQWQ7TUFDZCxJQUFDLENBQUEsQ0FBQyxDQUFDLFdBQVcsWUFBYyxDQUFkOztJQUdsQixJQUFLLENBQUEsQ0FBQSxDQUFFLE9BQUMsQ0FBQSxJQUFLLENBQUEsQ0FBQSxDQUFFLElBQUksQ0FBQztzQkFFcEIsYUFBcUIsUUFBQSxDQUFBO2FBQUcsQ0FBYyxZQUFkOztJQUt4QixJQUFJLENBQUMsaUJBQUQsQ0FBa0IsQ0FBQSxDQUFBLENBQUUsQ0FBQSxHQUFBO3NCQUN4QixxQkFBc0IsUUFBQSxDQUFBO2FBQUcsSUFBQyxDQUFBLFFBQVEsTUFBTSxXQUFXLElBQUMsQ0FBQSxDQUFDLENBQUMsTUFBTSxjQUFELENBQTFCLENBQTJDLENBQUEsT0FBRyxDQUFFLElBQUMsQ0FBQSxDQUFDLENBQUMsSUFBTDs7SUFHL0UsSUFBSSxDQUFDLFVBQUQsQ0FBVyxDQUFBLENBQUEsQ0FBSyxDQUFBLEdBQUE7c0JBRXBCLGNBQXFCLFFBQUEsQ0FBQTs7TUFFakIsSUFBQyxDQUFBLENBQUMsQ0FBQyxZQUFtQixPQUFBO01BR3RCLElBQUMsQ0FBQSxDQUFDLENBQUMsV0FBVTtNQUNiLElBQUMsQ0FBQSxDQUFDLENBQUMsY0FBa0IsSUFBTDtNQUNoQixJQUFLLENBQUEsQ0FBQSxDQUFFLElBQUMsQ0FBQSxDQUFDLENBQUMsT0FBTyxJQUFDLENBQUEsQ0FBQyxDQUFDLE1BQU0sSUFBQyxDQUFBLENBQUMsQ0FBQyxNQUFvQixjQUFmLEdBQTBCLFFBQTNDO01BQ2pCLElBQUMsQ0FBQSxDQUFDLENBQUMsVUFBUzthQUVaLENBQUUsSUFBRixDQUFTLENBQUEsT0FBRyxJQUFDLENBQUEsVUFBUzs7c0JBRTFCLGlCQUFxQixRQUFBLENBQUE7TUFBSSxJQUFDLENBQUEsYUFBWTs7SUFHdEMsSUFBSSxDQUFDLFVBQUQsQ0FBVyxDQUFBLENBQUEsQ0FBSyxDQUFBLEdBQUE7c0JBRXBCLGNBQXFCLFFBQUEsQ0FBQTtNQUNqQixJQUFDLENBQUEsQ0FBQyxDQUFDLFdBQVcsV0FBUyxDQUFUO01BQ2QsSUFBQyxDQUFBLENBQUMsQ0FBQyxXQUFXLGNBQVksQ0FBWjtNQUNkLElBQUMsQ0FBQyxZQUFELENBQWMsQ0FBQSxDQUFBLENBQUUsUUFBQSxDQUFBO2VBQUcsQ0FBRSxJQUFDLENBQUEsQ0FBQyxDQUFDLEtBQUssSUFBQyxDQUFBLENBQUMsQ0FBQyxRQUFRLFNBQUEsQ0FBWCxDQUFWOzs7O0lBL0NQIiwiZmlsZSI6ImFydGljbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxucmVxdWlyZSEge1xuICAgICcuL2Jhc2UnOiB7IEJhc2UgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBBcnRpY2xlIGV4dGVuZHMgQmFzZVxuXG4gICAgIyBwdWJsaWMgc3RhdGljXG4gICAgQGNzcyA9IFwiY3NzL2FydGljbGUuY3NzXCJcblxuXG4gICAgIyBDVE9SXG4gICAgKGdlbmVyYXRvciwgb3B0aW9ucykgLT5cbiAgICAgICAgc3VwZXIgLi4uXG5cbiAgICAgICAgQGcuc2V0Q291bnRlciBcXHNlY251bWRlcHRoICAzXG4gICAgICAgIEBnLnNldENvdW50ZXIgXFx0b2NkZXB0aCAgICAgM1xuXG5cbiAgICBhcmdzID0gQGFyZ3MgPSBCYXNlLmFyZ3NcblxuICAgIFxccmVmbmFtZSAgICAgICAgICAgIDotPiBbIFwiUmVmZXJlbmNlc1wiIF1cblxuXG4gICAgIyB0b2NcblxuICAgIGFyZ3MuXFx0YWJsZW9mY29udGVudHMgPSA8WyBWIF0+XG4gICAgXFx0YWJsZW9mY29udGVudHMgICAgOiAtPiBAc2VjdGlvbih0cnVlLCB1bmRlZmluZWQsIEBnLm1hY3JvKFxcY29udGVudHNuYW1lKSkgKysgWyBAZy5fdG9jIF1cblxuXG4gICAgYXJncy5cXGFic3RyYWN0ID0gICAgPFsgViBdPlxuXG4gICAgXFxhYnN0cmFjdCAgICAgICAgICAgOi0+XG4gICAgICAgICMgb25lY29sdW1uLCBubyB0aXRsZXBhZ2VcbiAgICAgICAgQGcuc2V0Rm9udFNpemUgXCJzbWFsbFwiXG5cbiAgICAgICAgIyBUT0RPIHVzZSBjZW50ZXIgZW52IGRpcmVjdGx5IGluc3RlYWQuLi5cbiAgICAgICAgQGcuZW50ZXJHcm91cCFcbiAgICAgICAgQGcuc2V0Rm9udFdlaWdodChcImJmXCIpXG4gICAgICAgIGhlYWQgPSBAZy5jcmVhdGUgQGcubGlzdCwgQGcubWFjcm8oXCJhYnN0cmFjdG5hbWVcIiksIFwiY2VudGVyXCJcbiAgICAgICAgQGcuZXhpdEdyb3VwIVxuXG4gICAgICAgIFsgaGVhZCBdICsrIEBxdW90YXRpb24hXG5cbiAgICBcXGVuZGFic3RyYWN0ICAgICAgICA6IS0+IEBlbmRxdW90YXRpb24hXG5cblxuICAgIGFyZ3MuXFxhcHBlbmRpeCA9ICAgIDxbIFYgXT5cblxuICAgIFxcYXBwZW5kaXggICAgICAgICAgIDohLT5cbiAgICAgICAgQGcuc2V0Q291bnRlciBcXHNlY3Rpb24gMFxuICAgICAgICBAZy5zZXRDb3VudGVyIFxcc3Vic2VjdGlvbiAwXG4gICAgICAgIEBbXFx0aGVzZWN0aW9uXSA9IC0+IFsgQGcuQWxwaCBAZy5jb3VudGVyIFxcc2VjdGlvbiBdXG4iXX0=
