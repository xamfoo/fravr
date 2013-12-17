// Declare global namespace
var Main = {},
	Template = {},
	Session = {};

//Compile and store template function in closure
Template = function () {
	var that = {};
	var body = Handlebars.compile( $('script[data-body]').html() );
	var template = {};

	//Register all Handlebars partials
	that.registerPartials = function () {
		$("script[data-name][type='text/x-handlebars-template']").each(function(){
			Handlebars.registerPartial($(this).attr('data-name'), $(this).html());
		});
		$("script[data-name][src]").each(function(){
			Handlebars.registerPartial($(this).attr('data-name'), $(this).html());
		});
	}

	that.render = function () {
		var html = body(Data);
		$('body').html(html);
	}

	that.set = function (name, html) {
		if (typeof name === 'string' && typeof html === 'string') {
			template[name] = Handlebars.compile(html);
			return template[name];
		}
	}

	that.get = function (name) {
		if (typeof template[name] != 'undefined') {
			return template[name];
		}
	}

	return that;
}();

Main = function () {
	var that = {};
	var ready = function () {};
	
	that.ready = function (f) {
		if (typeof f === 'function') ready = f;
	}

	// Execute when DOM is ready
	$( document ).ready(function () {
		Template.registerPartials();
		Main.url.parse();
		if (Main.url.get().reset === true) Main.clearData();
		if (Main.url.get().default != true) Main.loadData();
		ready(); // Run user-defined function
		Template.render();
	});
	
	return that;
}();

//Store url state in closure
Main.url = function () {
	var that = {},
		// default url state
		url = {
			default: false,
			reset: false
		};

	that.get = function (key) {
		if (typeof key === 'undefined') {
			return url;
		} else if (typeof url[key] === 'undefined') {
			return;
		} else {
			return url[key];
		}
	}

	that.parse = function () {
		if (window.location.search != '') {
			var pairs = window.location.search.replace('?','').split('&');
			for (var i=0; i<pairs.length; i+=1) {
				var x = pairs[i].split('=');

				if (x[1] === 'true') x[1]=true; //boolean conversion
				else if (x[1] === 'false') x[1]=false;

				url[x[0]] = x[1];
			}
		}
	}
	
	return that;
}();

// Load all data from storage and replace existing data
Main.loadData = function () {
	for (var obj in amplify.store()) {
		// If modified data exists in storage, update data
		if (Data[obj]) {
			Data[obj] = amplify.store(obj);
		}
	}
}

// Save specified data to storage
Main.saveData = function (key) {
	if (typeof Data[key] != 'undefined') {
		amplify.store('key', Data[key]);
	}
}

// Clear all data from storage
Main.clearData = function () {
	for (var obj in amplify.store()) {
		amplify.store(obj, null);
	}
}

// Custom Handlebars helpers
Handlebars.registerHelper ("ifequals", function (obj, val, options) {
	console.log(obj);
	if (obj === val) {
		return options.fn(this);
	} else {
		return "";
	}
});
