Widgetfly
==============

A javascript library for building cross-site web widgets.


#Installation
Install using bower:
```shell
$ bower install widgetfly --save
```
Configure RequireJS 
```
require.config({
	...
	paths : {
		...
		'widgetfly' : 'path_to_bower_components/widgetfly/dist/widgetfly.min'
		...
	}
...
	
define(["widgetfly"], function (Widgetfly) {
	var WidgetA = new Widgetfly.Modal.extend({ 'custom' : 'and override' });
	var myWidgetA = new WidgetA({ 'custom' : 'options' });
	myWidgetA.onStart(function(){
		myWidgetA.show();
	});
});

```

#Usage
Include the Widgetfly SDK on your page once, ideally right after the opening ```<body>``` tag.
```
<div id="widgetfly-root"></div>
<script>(function(d, s, id, callback) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)){
  	callback(Widgetfly.Mediator.get(id));
  	return;
  }
  js = d.createElement(s); js.id = id;
  js.onload = function() {
  	callback(Widgetfly.Mediator.get(js.getAttribute('data-widgetfly-id'));
  };
  js.src = "//yourwebsite/wigetfly.min.js#xfbml=1&appId=430127053738244";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'widgetfly-sdk', function(widget){
	//do something with your widget
}));</script>

```

##Using a Widgetfly programmatically
Following example shows how to interact between widgets.
```
<script src="wigetfly.min.js"></script>
<script>
	//Creating a custom widget class. 
	var MyWidgetA = Widgetfly.Panel.extend({ 'custom' : 'and override' });
	var MyWidgetB = Widgetfly.Modal.extend({ 'custom' : 'and override' });
	//Using your widget class.
	var widgetA = new MyWidgetA({ 'custom' : 'options' });
	widgetA('widget-event',function(result){
		var widgetB = new MyWidgetB({ 'custom' : 'options' });
		widgetB.show();
	});
</script>
```
#Widgetfly Modules
##Widgetfly.Panel
**Panel** is a module that ................ For example:
```
var MyWidgetA = Widgetfly.Panel.extend({ 'custom' : 'and override' });
var widgetA = new MyWidgetA({
	container : '.classContainer',
	autoGrow : true,
	show : true,
	src : 'http://host.domain/page/which/used',
	options : {
		hello: 'world'
	}
});
```
###Module Options
* container : id / class / HTML tag
* autoGrow : true / false
* src : URL
* show : true / false
* options : { key : value }

###Methods support list

##Widgetfly.Modal
**Modal** is a module that ................ For example:
```
var MyWidgetB = Widgetfly.Modal.extend({ 'custom' : 'and override' });
var widgetB = new MyWidgetB({
	container : '.classContainer',
	backdrop : true,
	autoGrow : true,
	show : true,
	src : 'http://host.domain/page/which/used'
});
```
###Module Options
* container : id / class / HTML tag
* backdrop: light / dark
* autoGrow : true / false
* src : URL
* show : true / false

###Methods support list

##Widgetfly.Popover
**Popover** is a module that ................ For example:
```
var MyWidgetC = Widgetfly.Popover.extend({ 'custom' : 'and override' });
var widgetC = new MyWidgetC({
	target : '.classContainer',
	placement : 'top',
	autoGrow : true,
	show : true,
	src : 'http://host.domain/page/which/used'
});
```
###Module Options
* target : id / class / HTML tag
* placement : top / left / bottom / right
* autoGrow : true / false
* src : URL
* show : true / false

###Methods support list



#Module Methods
We will follow example in [using a Widgetfly programmatically](#using a Widgetfly programmatically) to explain the method below.
##onStart()
**onStart** method used to tells framework the widget is already started, and developer can do something after this callback function.
```
widgetA.onStart(function() {
	console.log('widgetA is started');
});
```
##show()
**show()** is used to show the widget if it is invisible.

**In App Case :**
```
widgetA.show();
```

**In Widget Case :**
```
widgetfly.Server.show();
```
##onShow(callback)
**onShow()** is a callback function with **show()**, this function will fire when show() is fired, it will action before show(), after it finished, call show() to work.
```
widgetA.onShow(function(){
	console.log('widgetA is prepare to hide');
	return true;
});
```
##hide()
**hide()** is used to hide the widget if it is visible.

**In App Case :**
```
widgetA.hide();
```

**In Widget Case :**
```
widgetfly.Server.hide();
```
##onHide(callback)
**onHide()** is similar to **onShow()**, one is for show() callback, and this is a callback for hide().
```
widgetA.onHide(function(){
	console.log('widgetA is prepare to hide');
	return true;
});
```
##close()
**close()** can helps you to **destroy** the widget and release memory.
```
widgetA.close();
```
##onBeforeClose(callback)
When **close()** method is fired, this method will fire before close(), it's a callback function for close().
```
widgetA.onBeforeClose(function(){
	console.log('widgetA is closing');
	return true;
});
```
##sizeChange(size)
When widget is started and set autoGrow as ```true``` in initialize setting, ```Widgetfly.Server``` can helps you to fire the method to this, and auto resize the widget in disply, the detail of this usage you can see [Widgetfly.Server expand()](#expand) also.



#Widgetfly.Server

**Server** is a module that ................ For example:


```
Widgetfly.Server.close();
```


##Methods
###show()
```
Widgetfly.Server.show();
```
###hide()
```
Widgetfly.Server.hide();
```
###close()
```
Widgetfly.Server.close();
```
###expand()
This method is usually used after widget is loaded and render HTML finished. It can help widget to auto sizing.
```
Widgetfly.Server.expand();
```




