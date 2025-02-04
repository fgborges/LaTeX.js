// Generated by LiveScript 1.6.0
(function(){
  'use strict';
  var Base, Report, out$ = typeof exports != 'undefined' && exports || this;
  Base = require('./base').Base;
  out$.Report = Report = (function(superclass){
    var args, x$, prototype = extend$((import$(Report, superclass).displayName = 'Report', Report), superclass).prototype, constructor = Report;
    Report.css = "css/book.css";
    function Report(generator, options){
      Report.superclass.apply(this, arguments);
      this.g.newCounter('chapter');
      this.g.addToReset('section', 'chapter');
      this.g.setCounter('secnumdepth', 2);
      this.g.setCounter('tocdepth', 2);
      this.g.addToReset('figure', 'chapter');
      this.g.addToReset('table', 'chapter');
      this.g.addToReset('footnote', 'chapter');
    }
    Report.prototype['chaptername'] = function(){
      return ["Chapter"];
    };
    Report.prototype['bibname'] = function(){
      return ["Bibliography"];
    };
    args = Report.args = Base.args;
    x$ = args;
    x$['part'] = x$['chapter'] = ['V', 's', 'X', 'o?', 'g'];
    Report.prototype['part'] = function(s, toc, ttl){
      return [this.g.startsection('part', -1, s, toc, ttl)];
    };
    Report.prototype['chapter'] = function(s, toc, ttl){
      return [this.g.startsection('chapter', 0, s, toc, ttl)];
    };
    Report.prototype['thechapter'] = function(){
      return [this.g.arabic(this.g.counter('chapter'))];
    };
    Report.prototype['thesection'] = function(){
      return this.thechapter().concat("." + this.g.arabic(this.g.counter('section')));
    };
    Report.prototype['thefigure'] = function(){
      return (this.g.counter('chapter') > 0
        ? this.thechapter().concat(".")
        : []).concat(this.g.arabic(this.g.counter('figure')));
    };
    Report.prototype['thetable'] = function(){
      return (this.g.counter('chapter') > 0
        ? this.thechapter().concat(".")
        : []).concat(this.g.arabic(this.g.counter('table')));
    };
    args['tableofcontents'] = ['V'];
    Report.prototype['tableofcontents'] = function(){
      return this.chapter(true, undefined, this.g.macro('contentsname')).concat([this.g._toc]);
    };
    args['abstract'] = ['V'];
    Report.prototype['abstract'] = function(){
      var head;
      this.g.setFontSize("small");
      this.g.enterGroup();
      this.g.setFontWeight("bf");
      head = this.g.create(this.g.list, this.g.macro("abstractname"), "center");
      this.g.exitGroup();
      return [head].concat(this.quotation());
    };
    Report.prototype['endabstract'] = function(){
      this.endquotation();
    };
    args['appendix'] = ['V'];
    Report.prototype['appendix'] = function(){
      this.g.setCounter('chapter', 0);
      this.g.setCounter('section', 0);
      this['chaptername'] = this['appendixname'];
      this['thechapter'] = function(){
        return [this.g.Alph(this.g.counter('chapter'))];
      };
    };
    return Report;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb2N1bWVudGNsYXNzZXMvcmVwb3J0LmxzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0VBQUE7O0VBR2dCLElBQVosQ0FBQSxDQUFBLENBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFKO2dCQUlhLFVBQU4sUUFBQSxDQUFBLFVBQUE7O0lBR0gsTUFBQyxDQUFBLEdBQUksQ0FBQSxDQUFBLENBQWdCO0lBSXJCLFFBQUEsQ0FBQSxNQUFBLENBQUEsU0FBQSxFQUFBLE9BQUE7TUFDSSxNQUFBLGlDQUFNO01BRU4sSUFBQyxDQUFBLENBQUMsQ0FBQyxXQUFXLFNBQUE7TUFDZCxJQUFDLENBQUEsQ0FBQyxDQUFDLFdBQVcsV0FBYyxTQUFkO01BRWQsSUFBQyxDQUFBLENBQUMsQ0FBQyxXQUFXLGVBQWMsQ0FBZDtNQUNkLElBQUMsQ0FBQSxDQUFDLENBQUMsV0FBVyxZQUFjLENBQWQ7TUFFZCxJQUFDLENBQUEsQ0FBQyxDQUFDLFdBQVcsVUFBYyxTQUFkO01BQ2QsSUFBQyxDQUFBLENBQUMsQ0FBQyxXQUFXLFNBQWMsU0FBZDtNQUNkLElBQUMsQ0FBQSxDQUFDLENBQUMsV0FBVyxZQUFjLFNBQWQ7O3FCQUlsQixpQkFBcUIsUUFBQSxDQUFBO2FBQUcsQ0FBVyxTQUFYOztxQkFDeEIsYUFBcUIsUUFBQSxDQUFBO2FBQUcsQ0FBZ0IsY0FBaEI7O0lBRXhCLElBQUssQ0FBQSxDQUFBLENBQUUsTUFBQyxDQUFBLElBQUssQ0FBQSxDQUFBLENBQUUsSUFBSSxDQUFDO1NBRXBCO0lBQ0MsRUFBRSxDQUFBLE1BQUEsQ0FBTSxDQUFBLENBQUEsQ0FDUixFQUFFLENBQUEsU0FBQSxDQUFTLENBQUEsQ0FBQSxDQUFRLENBQUEsS0FBQSxLQUFBLEtBQUEsTUFBQSxHQUFBO3FCQUVwQixVQUFzQixRQUFBLENBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBO2FBQWlCLENBQUUsSUFBQyxDQUFBLENBQUMsQ0FBQyxhQUFhLFFBQWdCLENBQUEsR0FBSSxH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dCI6WyIndXNlIHN0cmljdCdcblxucmVxdWlyZSEge1xuICAgICcuL2Jhc2UnOiB7IEJhc2UgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBSZXBvcnQgZXh0ZW5kcyBCYXNlXG5cbiAgICAjIHB1YmxpYyBzdGF0aWNcbiAgICBAY3NzID0gXCJjc3MvYm9vay5jc3NcIlxuXG5cbiAgICAjIENUT1JcbiAgICAoZ2VuZXJhdG9yLCBvcHRpb25zKSAtPlxuICAgICAgICBzdXBlciAuLi5cblxuICAgICAgICBAZy5uZXdDb3VudGVyIFxcY2hhcHRlclxuICAgICAgICBAZy5hZGRUb1Jlc2V0IFxcc2VjdGlvbiAgICAgIFxcY2hhcHRlclxuXG4gICAgICAgIEBnLnNldENvdW50ZXIgXFxzZWNudW1kZXB0aCAgMlxuICAgICAgICBAZy5zZXRDb3VudGVyIFxcdG9jZGVwdGggICAgIDJcblxuICAgICAgICBAZy5hZGRUb1Jlc2V0IFxcZmlndXJlICAgICAgIFxcY2hhcHRlclxuICAgICAgICBAZy5hZGRUb1Jlc2V0IFxcdGFibGUgICAgICAgIFxcY2hhcHRlclxuICAgICAgICBAZy5hZGRUb1Jlc2V0IFxcZm9vdG5vdGUgICAgIFxcY2hhcHRlclxuXG5cblxuICAgIFxcY2hhcHRlcm5hbWUgICAgICAgIDotPiBbIFwiQ2hhcHRlclwiIF1cbiAgICBcXGJpYm5hbWUgICAgICAgICAgICA6LT4gWyBcIkJpYmxpb2dyYXBoeVwiIF1cblxuICAgIGFyZ3MgPSBAYXJncyA9IEJhc2UuYXJnc1xuXG4gICAgYXJnc1xuICAgICAuLlxccGFydCA9ICAgICAgICAgIFxcXG4gICAgIC4uXFxjaGFwdGVyID0gICAgICAgPFsgViBzIFggbz8gZyBdPlxuXG4gICAgXFxwYXJ0ICAgICAgICAgICAgICAgOiAocywgdG9jLCB0dGwpIC0+IFsgQGcuc3RhcnRzZWN0aW9uIFxccGFydCwgICAgICAgICAgLTEsIHMsIHRvYywgdHRsIF1cbiAgICBcXGNoYXB0ZXIgICAgICAgICAgICA6IChzLCB0b2MsIHR0bCkgLT4gWyBAZy5zdGFydHNlY3Rpb24gXFxjaGFwdGVyLCAgICAgICAgMCwgcywgdG9jLCB0dGwgXVxuXG5cbiAgICBcXHRoZWNoYXB0ZXIgICAgICAgICA6LT4gWyBAZy5hcmFiaWMgQGcuY291bnRlciBcXGNoYXB0ZXIgXVxuICAgIFxcdGhlc2VjdGlvbiAgICAgICAgIDotPiBAdGhlY2hhcHRlciEgKysgXCIuXCIgKyBAZy5hcmFiaWMgQGcuY291bnRlciBcXHNlY3Rpb25cblxuICAgIFxcdGhlZmlndXJlICAgICAgICAgIDotPiAoaWYgQGcuY291bnRlcihcXGNoYXB0ZXIpID4gMCB0aGVuIEB0aGVjaGFwdGVyISArKyBcIi5cIiBlbHNlIFtdKSArKyBAZy5hcmFiaWMgQGcuY291bnRlciBcXGZpZ3VyZVxuICAgIFxcdGhldGFibGUgICAgICAgICAgIDotPiAoaWYgQGcuY291bnRlcihcXGNoYXB0ZXIpID4gMCB0aGVuIEB0aGVjaGFwdGVyISArKyBcIi5cIiBlbHNlIFtdKSArKyBAZy5hcmFiaWMgQGcuY291bnRlciBcXHRhYmxlXG5cblxuICAgICMgdG9jXG5cbiAgICBhcmdzLlxcdGFibGVvZmNvbnRlbnRzID0gPFsgViBdPlxuICAgIFxcdGFibGVvZmNvbnRlbnRzICAgIDogLT4gQGNoYXB0ZXIodHJ1ZSwgdW5kZWZpbmVkLCBAZy5tYWNybyhcXGNvbnRlbnRzbmFtZSkpICsrIFsgQGcuX3RvYyBdXG5cblxuICAgIGFyZ3MuXFxhYnN0cmFjdCA9ICAgIDxbIFYgXT5cblxuICAgIFxcYWJzdHJhY3QgICAgICAgICAgIDotPlxuICAgICAgICAjIG9uZWNvbHVtbiwgbm8gdGl0bGVwYWdlXG4gICAgICAgIEBnLnNldEZvbnRTaXplIFwic21hbGxcIlxuXG4gICAgICAgICMgVE9ETyB1c2UgY2VudGVyIGVudiBkaXJlY3RseSBpbnN0ZWFkLi4uXG4gICAgICAgIEBnLmVudGVyR3JvdXAhXG4gICAgICAgIEBnLnNldEZvbnRXZWlnaHQoXCJiZlwiKVxuICAgICAgICBoZWFkID0gQGcuY3JlYXRlIEBnLmxpc3QsIEBnLm1hY3JvKFwiYWJzdHJhY3RuYW1lXCIpLCBcImNlbnRlclwiXG4gICAgICAgIEBnLmV4aXRHcm91cCFcblxuICAgICAgICBbIGhlYWQgXSArKyBAcXVvdGF0aW9uIVxuXG4gICAgXFxlbmRhYnN0cmFjdCAgICAgICAgOiEtPiBAZW5kcXVvdGF0aW9uIVxuXG5cbiAgICBhcmdzLlxcYXBwZW5kaXggPSAgICA8WyBWIF0+XG5cbiAgICBcXGFwcGVuZGl4ICAgICAgICAgICA6IS0+XG4gICAgICAgIEBnLnNldENvdW50ZXIgXFxjaGFwdGVyIDBcbiAgICAgICAgQGcuc2V0Q291bnRlciBcXHNlY3Rpb24gMFxuICAgICAgICBAW1xcY2hhcHRlcm5hbWVdID0gQFtcXGFwcGVuZGl4bmFtZV1cbiAgICAgICAgQFtcXHRoZWNoYXB0ZXJdID0gLT4gWyBAZy5BbHBoIEBnLmNvdW50ZXIgXFxjaGFwdGVyIF1cbiJdfQ==
