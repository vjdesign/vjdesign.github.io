// classlist.js
"document"in self&&("classList"in document.createElement("_")?!function(){"use strict";var t=document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var n,i=arguments.length;for(n=0;i>n;n++)t=arguments[n],e.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:n.call(this,t)}}t=null}():!function(t){"use strict";if("Element"in t){var e="classList",n="prototype",i=t.Element[n],s=Object,r=String[n].trim||function(){return this.replace(/^\s+|\s+$/g,"")},o=Array[n].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1},a=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},c=function(t,e){if(""===e)throw new a("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(e))throw new a("INVALID_CHARACTER_ERR","String contains an invalid character");return o.call(t,e)},l=function(t){for(var e=r.call(t.getAttribute("class")||""),n=e?e.split(/\s+/):[],i=0,s=n.length;s>i;i++)this.push(n[i]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},u=l[n]=[],f=function(){return new l(this)};if(a[n]=Error[n],u.item=function(t){return this[t]||null},u.contains=function(t){return t+="",-1!==c(this,t)},u.add=function(){var t,e=arguments,n=0,i=e.length,s=!1;do t=e[n]+"",-1===c(this,t)&&(this.push(t),s=!0);while(++n<i);s&&this._updateClassName()},u.remove=function(){var t,e,n=arguments,i=0,s=n.length,r=!1;do for(t=n[i]+"",e=c(this,t);-1!==e;)this.splice(e,1),r=!0,e=c(this,t);while(++i<s);r&&this._updateClassName()},u.toggle=function(t,e){t+="";var n=this.contains(t),i=n?e!==!0&&"remove":e!==!1&&"add";return i&&this[i](t),e===!0||e===!1?e:!n},u.toString=function(){return this.join(" ")},s.defineProperty){var h={get:f,enumerable:!0,configurable:!0};try{s.defineProperty(i,e,h)}catch(g){-2146823252===g.number&&(h.enumerable=!1,s.defineProperty(i,e,h))}}else s[n].__defineGetter__&&i.__defineGetter__(e,f)}}(self));

// legit.js
function _(e){"use strict";var t={};if(t.selector=e,"object"==typeof e)t.element=t.selector;else{var n=document.querySelectorAll(t.selector);1===n.length?t.element=document.querySelector(t.selector):t.elements=n}return t.html=function(e){if(!e)return t.elements||t.element;if(t.elements)for(var n=0;n<t.elements.length;n++)t.elements[n].outerHTML=e;else t.element.outerHTML=e;return t},t.attr=function(e,n){if(!n)return t.element.getAttribute(e);if(t.elements)for(var l=0;l<t.elements.length;l++)t.elements[l].setAttribute(e,n);else t.element.setAttribute(e,n);return t},t.text=function(e){if(!e)return t.element.textContent;if(t.elements)for(var n=0;n<t.elements.length;n++)t.elements[n].textContent=e;else t.element.textContent=e;return t},t.next=function(){return t.element=t.element.nextElementSibling,t},t.prev=function(){return t.element=t.element.previousElementSibling,t},t.after=function(e){return t.element.insertAdjacentHTML("afterend",e),t},t.replaceWith=function(e){return t.element.outerHTML=e,t},t.before=function(e){return t.element.insertAdjacentHTML("beforebegin",e),t},t.height=function(){return t.element.offsetHeight},t.width=function(){return t.element.offsetWidth},t.first=function(){return t.elements&&(t.element=t.elements[0]),t},t.parent=function(){return t.element=t.element.parentNode,t},t.children=function(e){return e||(e=0),t.element=t.element.childNodes[e],t},t.on=function(e,n){if(t.elements)for(var l=0;l<t.elements.length;l++)t.elements[l]["on"+e]=n;else t.element["on"+e]=n;return t},t.css=function(e,n){if(t.elements)for(var l=0;l<t.elements.length;l++)t.elements[l].style[e]=n;else{if(!n)return t.element.style[e];t.element.style[e]=n}return t},t.hasClass=function(e){if(!e)return t.element.classList;if(t.elements)for(var n=0;n<t.elements.length;n++)t.elements[n].classList.contains(e);else t.element.classList.contains(e);return t},t.addClass=function(e){if(t.elements)for(var n=0;n<t.elements.length;n++)t.elements[n].classList.add(e);else t.element.classList.add(e);return t},t.removeClass=function(e){if(t.elements)for(var n=0;n<t.elements.length;n++)t.elements[n].classList.remove(e);else t.element.classList.remove(e);return t},t.toggleClass=function(e){if(t.elements)for(var n=0;n<t.elements.length;n++)t.elements[n].classList.toggle(e);else t.element.classList.toggle(e);return t},t.hide=function(){if(t.elements)for(var e=0;e<t.elements.length;e++)t.elements[e].classList.add("hidden");else t.element.classList.add("hidden");return t},t.show=function(){if(t.elements)for(var e=0;e<t.elements.length;e++)t.elements[e].classList.remove("hidden");else t.element.classList.remove("hidden");return t},t.toggle=function(){if(t.element.classList.contains("hidden")){if(t.elements)for(var e=0;e<t.elements.length;e++)t.elements[e].classList.remove("hidden");else t.element.classList.remove("hidden");return t}if(t.elements)for(var e=0;e<t.elements.length;e++)t.elements[e].classList.add("hidden");else t.element.classList.add("hidden");return t},t}

// right-height (main.js)

!function(t,e){"function"==typeof define&&define.amd?define("rightHeight",e(t)):"object"==typeof exports?module.exports=e(t):t.rightHeight=e(t)}(window||this,function(t){"use strict";var e,n,i,o={},r=!!document.querySelector&&!!t.addEventListener,c={callbackBefore:function(){},callbackAfter:function(){}},f=function(t,e,n){if("[object Object]"===Object.prototype.toString.call(t))for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(n,t[i],i,t);else for(var o=0,r=t.length;r>o;o++)e.call(n,t[o],o,t)},u=function(t,e){var n={};return f(t,function(e,i){n[i]=t[i]}),f(e,function(t,i){n[i]=e[i]}),n},l=function(t){var e=0;if(t.offsetParent)do e+=t.offsetTop,t=t.offsetParent;while(t);return e},a=function(t){var e=t.item(0),n=t.item(1);return e&&n?l(e)-l(n)===0?!1:!0:!1},h=function(t){t.style.height="",t.style.minHeight=""},s=function(t,e){return t.offsetHeight>e&&(e=t.offsetHeight),e},d=function(t,e){t.style.height=e+"px"};o.adjustContainerHeight=function(t,e){var n=u(n||c,e||{}),i=t.querySelectorAll("[data-right-height-content]"),o=a(i),r="0";n.callbackBefore(t),f(i,function(t){h(t)}),o||(f(i,function(t){r=s(t,r)}),f(i,function(t){d(t,r)})),n.callbackAfter(t)};var g=function(){f(n,function(t){o.adjustContainerHeight(t,e)})},v=function(){i||(i=setTimeout(function(){i=null,g(n,e)},66))};return o.destroy=function(){e&&(f(n,function(t){var e=t.querySelectorAll("[data-right-height-content]");f(e,function(t){h(t)})}),t.removeEventListener("resize",v,!1),e=null,n=null,i=null)},o.init=function(i){r&&(o.destroy(),e=u(c,i||{}),n=document.querySelectorAll("[data-right-height]"),g(n,i),t.addEventListener("load",g,!1),t.addEventListener("resize",v,!1))},o});


window.onload = function(){
    
    // initialise addons
    rightHeight.init();
    
    
// Test before using Legit    
var legitsupported = !!document.querySelectorAll && !!document.querySelector && !!window.addEventListener;
if ( !legitsupported ) return;
        
    _('.show-content').hide();
    _('.show-link').on('click', function(e){
        e.preventDefault();
        _(this).next('.show-content').toggle();
    });
    
    
    /* validate form */

    // Hide the error messages
    _('#noquery').hide();
    _('#noemail').hide();
    _('#validemail').hide();
    
    _('#comments').on('blur',function(){
        if(this.value==""){
            _('#noquery').show();
        } else {
            _('#noquery').hide();   
        }
    });
    
    function ValidateEmail(inputText)
        {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(inputText.value.match(mailformat))
        {
            _('#validemail').hide();
        }
        else
        {
            _('#validemail').show();
            document.contact.email.focus();
            return false;
        }
    }


    _('#email').on('blur',function(){
        

        if(this.value==""){
            _('#noemail').show();
        } else {
            _('#noemail').hide();   
            var email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
            ValidateEmail(this);
        }
    });
}