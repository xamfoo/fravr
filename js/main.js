// Custom Handlebars helpers
// access individual img_array entries in data.product json struct
Handlebars.registerHelper ("get_img", function (product_value,index_1, index_2) {
	return product_value.img_urls.slice(index_1,index_2); 
});


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
};

Data.products = {
	mug: 
		{
		product_name: "Mighty Mug (Grip Base Mug)",
		price: 29.9,
		currency: "SGD",
		merchant: "theheartdirector",
		product_description: "",
		img_urls: ["img/Mighty Mug 01.jpg", "img/Mighty Mug 02.jpg", "img/Mighty Mug 03.jpg", "img/Mighty Mug 04.jpg"]
		//img_urls: ["url01", "url02", "url03"]
		},
	cup:
		{
		product_name: "cup",
		price: 29,
		currency: "SGD",
		merchant: "some merchant",
		product_description: "",
		img_urls: ["url01", "url02", "url03"]
		}
};

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
