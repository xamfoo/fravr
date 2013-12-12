// Custom Handlebars helpers
//failed handle bars 
/* Handlebars.registerHelper ("set_product", function (products, product_type) {
	products.item = products[product_type];
});  */

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

//product database 
Data.profile = {
	name: 'Pak Lun'
}

Data.cart = {
	total: 0
}

Data.products = {
	item:	{
		name: "Default Name",
		price: 0,
		currency: "SGD",
		merchant: "Default Merchant",
		description: "Text",
		img_urls: [{url:"empty"}],
		comments: {},
		reviews: {}
		},
	mug: 	{
		name: "Mighty Mug (Grip Base Mug)",
		price: 29.9,
		currency: "SGD",
		merchant: "theheartdirector",
		description: "<p>The Mighty Mug features a Smart-Grip technology that latches on to your desk by creating a powerful airlock and prevents clumsy spills. When you pick up the cup by the soft ergonomic handle, however, it lifts up effortlessly.</p>\
		<p>To activate the Mighty Mug's Smartgrip base &#45; Bend and flex the grippy pad with your fingers. If the mug starts to lose its grippiness, simply repeat the flexing process.</p>\
		<p>Only works on flat surfaces</p>\
		<p>Microwave safe (remove the lid first)</p>\
		<p>Inner body and lid are both top rack dishwasher safe</p>\
		<p>Measures approximately 14cm(W) x 16cm(H) x 10cm(D)</p>\
		<p><strong>Please allow 1 week for shipping.</strong></p> ",
		img_urls: [{url:"img/Mighty Mug 01.jpg"}, {url:"img/Mighty Mug 02.jpg"}, {url:"img/Mighty Mug 03.jpg"}, {url:"img/Mighty Mug 04.jpg"}, {url:"img/Mighty Mug 05.jpg"}],
		comments: {},
		reviews: {}
		},
	cup:	{
		name: "cup",
		price: 29,
		currency: "SGD",
		merchant: "some merchant",
		description: "",
		img_urls: ["url01", "url02", "url03"],
		comments: {},
		reviews: {}
		}
};

Data.clipping = {
	total: 0
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
