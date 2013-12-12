// Declare global namespace
var Main = {},
	Data = {},
	Template = {};

// Define default data
Data.header = {
	title: "My New Post",
	body: "This is my first post!"
};

Data.home = {
}

Data.messages = {
	total: 0,
	unread: 0
};

Data.wishlist = {
	unread: 0
}

Data.profile = {
	name: 'Pak Lun'
}
//Default data end

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
	
	Template.render();
};

// Execute when DOM is ready
$( document ).ready(function () {
	Main.ready();
});
