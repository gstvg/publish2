!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){"use strict";function t(i,r){this.$element=e(i),this.options=e.extend({},t.DEFAULTS,e.isPlainObject(r)&&r),this.init()}var i=window.location,r=e(document),n="qor.filter",a="enable."+n,o="disable."+n,s="click."+n,l=".qor-filter__scheduled-time",h="[data-search-param]",c=".qor-filter__dropdown",d=".qor-filter-toggle";return t.prototype={constructor:t,init:function(){this.bind();var t=this.$element;this.$scheduleTime=t.find(l),this.$searchButton=t.find(this.options.button),this.$trigger=t.find(this.options.trigger),this.publishReadyOn=e("#qor-publishready__on").data().label,this.publishReadyOff=e("#qor-publishready__off").data().label,this.initActionTemplate()},bind:function(){var e=this.options;this.$element.on(s,e.trigger,this.show.bind(this)).on(s,e.clear,this.clear.bind(this)).on(s,e.button,this.search.bind(this)),r.on(s,this.close)},unbind:function(){var e=this.options;this.$element.off(s,e.trigger,this.show.bind(this)).off(s,e.clear,this.clear.bind(this)).off(s,e.button,this.search.bind(this))},initActionTemplate:function(){var t=this.getUrlParameter("publish_scheduled_time"),i=this.getUrlParameter("publish_ready"),r=this.$trigger,n=r.find(".qor-selector-label"),a=r.find(".qor-publishready-label");(t||i)&&("true"===i?(a.html(this.publishReadyOn),a.before('<i class="material-icons qor-selector-clear" data-type="publishready">clear</i>'),e("#qor-publishready__on").prop("checked",!0)):(a.html(this.publishReadyOff),e("#qor-publishready__on").prop("checked",!1),a.next("i").remove()),t&&(this.$scheduleTime.val(t),n.html(t),n.before('<i class="material-icons qor-selector-clear">clear</i>')))},show:function(){this.$element.find(c).toggle()},close:function(t){var i=e(t.target),r=e(c),n=r.is(":visible"),a=i.closest(c).size(),o=i.closest(d).size(),s=i.closest(".qor-modal").size();n&&(a||o||s)||r.hide()},clear:function(t){var i=e(t.target),r=this.$trigger,n=r.find(".qor-selector-label"),a=r.find(".qor-publishready-label");return i.data().type?(a.html(this.publishReadyOff),e("#qor-publishready__on").prop("checked",!1)):(n.html(n.data("label")),this.$scheduleTime.val("")),i.remove(),this.$searchButton.click(),!1},getUrlParameter:function(e){var t=i.search;e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var r=new RegExp("[\\?&]"+e+"=([^&#]*)"),n=r.exec(t);return null===n?"":decodeURIComponent(n[1].replace(/\+/g," "))},updateQueryStringParameter:function(e,t,r){var n=r||i.href,a=String(e).replace(/[\\^$*+?.()|[\]{}]/g,"\\$&"),o=new RegExp("([?&])"+a+"=.*?(&|$)","i"),s=-1!==n.indexOf("?")?"&":"?";return n.match(o)?n.replace(o,"$1"+e+"="+t+"$2"):n+s+e+"="+t},search:function(){var t,r=this.$element.find(h),n=this;r.size()&&(r.each(function(){var i=e(this),r=i.data().searchParam,a=i.val();"publish_ready"==r&&(a=!!Number(i.find("input:checked").val())),t=n.updateQueryStringParameter(r,a,t)}),i.href=t)},destroy:function(){this.unbind(),this.$element.removeData(n)}},t.DEFAULTS={trigger:!1,button:!1,clear:!1},t.plugin=function(i){return this.each(function(){var r,a=e(this),o=a.data(n);if(!o){if(/destroy/.test(i))return;a.data(n,o=new t(this,i))}"string"==typeof i&&e.isFunction(r=o[i])&&r.apply(o)})},e(function(){var i='[data-toggle="qor.filter.time"]',r={trigger:"a.qor-filter-toggle",button:".qor-filter__button-search",clear:".qor-selector-clear"};e(document).on(o,function(r){t.plugin.call(e(i,r.target),"destroy")}).on(a,function(n){t.plugin.call(e(i,n.target),r)}).triggerHandler(a)}),t});