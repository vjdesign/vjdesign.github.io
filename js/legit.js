function _(selector) {
    "use strict";
	var self = {};
	self.selector = selector;
	if (typeof selector === 'object') {
		self.element = self.selector;
	} else {
		var allElements = document.querySelectorAll(self.selector);
		if (allElements.length === 1) { self.element = document.querySelector(self.selector);
		} else { self.elements = allElements; }
	}
/* BASIC FUNCTIONS */
	self.html = function(value) { //grab the html of an element mz('selector').html()
        if(!value) { return self.elements || self.element;
        } else if (self.elements) {
			for (var i=0; i < self.elements.length; i++){
				self.elements[i].outerHTML = value;
			}
		} else{
            self.element.outerHTML = value;
        } return self;
	}
	self.attr = function(names,value) { //get and set attribute values
		if (!value) { return self.element.getAttribute(names);
		} else if (self.elements){
			for (var i=0; i < self.elements.length; i++){
				self.elements[i].setAttribute(names,value);
			}
		} else {
			self.element.setAttribute(names,value);
		} return self;
	}
	self.text = function(value) { //get the textContent of an element mz('selector').text()	
		if (!value) return self.element.textContent;
		else if (self.elements){
			for (var i=0; i < self.elements.length; i++){
				self.elements[i].textContent = value;
			}
		}
		else {
			self.element.textContent = value;
		} return self;
	}
	self.next = function() { //get next element
		self.element = self.element.nextElementSibling;
		return self;
	}
	self.prev = function() { //get previous element
		self.element = self.element.previousElementSibling;
		return self;
	}
	self.after = function(htmlString) { //insert after a parent element
		self.element.insertAdjacentHTML('afterend', htmlString);
		return self;
	}
	self.replaceWith = function(htmlString) { //insert after a parent element
		self.element.outerHTML = htmlString;
		return self;
	}
	self.before = function(htmlString) { //insert before a parent element
		self.element.insertAdjacentHTML('beforebegin', htmlString);
		return self;
	}
	self.height = function() { //get the height of an element
		return self.element.offsetHeight;
	}
	self.width = function() { //get the width
		return self.element.offsetWidth;
	}
	self.first = function() {
		if(self.elements) {self.element = self.elements[0];}
		return self;
	}
	self.parent = function() { //get parent element
		self.element = self.element.parentNode;
		return self;
	}
	self.children = function(key) { //get children elements
		if(!key) key = 0;
		self.element = self.element.childNodes[key];
		return self;
	}
/* Event FUNCTIONS */
	self.on = function(type,callback) {
		if(self.elements) {
			for (var i=0; i < self.elements.length; i++){
				self.elements[i]['on' + type] = callback;
			}
		}
		else self.element['on' + type] = callback;
		return self;
	}
	self.css = function(names,value) { //add css rule inline
		if(self.elements){
			for (var i=0; i < self.elements.length; i++){
				self.elements[i].style[names] = value;
			}
		} else{
			if (!value) return self.element.style[names];
			self.element.style[names] = value;
		} return self;
	}
    
    self.hasClass = function(className) {
        if (!className) return self.element.classList;
            if (self.elements){
			 for (var i=0; i < self.elements.length; i++){
				self.elements[i].classList.contains(className);
			 }
        } else self.element.classList.contains(className);
        return self;
    }

    self.addClass = function(className) {
    if(self.elements) {
			for (var i=0; i < self.elements.length; i++){
				self.elements[i].classList.add(className);
			}
		}
		else self.element.classList.add(className);
    return self;
  }

  self.removeClass = function(className) {
    if (self.elements){
			for (var i=0; i < self.elements.length; i++){
				self.elements[i].classList.remove(className);
			}
		}
		else self.element.classList.remove(className);
    return self;
  }

  
   self.toggleClass = function(className) {
       if (self.elements){
			for (var i=0; i < self.elements.length; i++){
				self.elements[i].classList.toggle(className);
			}
		}
		else self.element.classList.toggle(className);
    return self;  
   }
   
   self.hide = function(){ //hide an element
		if (!self.elements){
            self.element.classList.add('hidden');
		} else {
			for (var i=0; i < self.elements.length; i++){
                self.elements[i].classList.add('hidden');
			}
		}
		return self;
	}
	self.show = function(){ //show an element
		if (self.elements){
			for (var i=0; i < self.elements.length; i++){
                self.elements[i].classList.remove('hidden');
			}
		} else {
            self.element.classList.remove('hidden');
		} return self;
	}
    self.toggle = function(){ //toggle an element
		if (self.element.classList.contains('hidden')){
            if (self.elements){
                for (var i=0; i < self.elements.length; i++){
                    self.elements[i].classList.remove('hidden');
                }
            } else {
                self.element.classList.remove('hidden');
            } return self;
        } else {
            if (!self.elements){
            self.element.classList.add('hidden');
		} else {
			for (var i=0; i < self.elements.length; i++){
                self.elements[i].classList.add('hidden');
			}
		  }
        } return self;
	}
   
    
	return self; // so that you may chain functions
}