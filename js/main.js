// Declare global namespace
var Main = {},
	Data = {};

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

Data.fravrs = {
	unread: 0
}
//Default data end

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

	var source   = $('script[data-body]').html();
	var template = Handlebars.compile(source);

	var html = template(Data);
	// var html = template();
	$('body').html(html);
};

// Execute when DOM is ready
$( document ).ready(function () {
	Main.ready();
});
