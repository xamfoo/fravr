// Custom Handlebars helpers
//failed handle bars 
/* Handlebars.registerHelper ("set_product", function (products, product_type) {
	products.item = products[product_type];
});  */

// Declare global namespace
var Main = {},
	Template = {};

//Compile and store template function in closure
Template = function () {
	var that = {};
	var template = Handlebars.compile( $('script[data-body]').html() );

	that.render = function () {
		var html = template(Data);
		$('body').html(html);
	}
	return that;
}();

Main.updateData = function () {
	for (var obj in amplify.store()) {
		// If modified data exists in storage, update data
		if (Data[obj]) {
			Data[obj] = amplify.store(obj);
		}
	}
}

Main.clearData = function () {
	for (var obj in amplify.store()) {
		amplify.store(obj, null);
	}
}

Main.ready = function () {
	//Register all Handlebars partials
	$("script[data-name][type='text/x-handlebars-template']").each(function(){
		Handlebars.registerPartial($(this).attr('data-name'), $(this).html());
	});
	$("script[data-name][src]").each(function(){
		Handlebars.registerPartial($(this).attr('data-name'), $(this).html());
	});
	
	Template.render();
};

// Execute when DOM is ready
$( document ).ready(function () {
	Main.ready();
});
