// Declare global namespace
var Main = {},
	Template = {},
	Session = {};

//Compile and store template function in closure
Template = function () {
	var that = {};
	var body;
	var template = {};

	//Register all Handlebars partials
	that.registerPartials = function () {
		$("script[data-name][type='text/x-handlebars-template']").each(function(){
			Handlebars.registerPartial($(this).attr('data-name'), $(this).html());
		});
		// $("script[data-name][src]").each(function(){
		// 	Handlebars.registerPartial($(this).attr('data-name'), $(this).html());
		// });
	}

	that.render = function (f) {
		if (!body) {
			body = Handlebars.compile( $('script[data-body]').html() );
		}
		var html = body(Data);
		$('body').html(html);
		$(document).ready(function () {
			Main.ready();
			// Temporary binding to fravr button
			$('.navbar-brand').on('click', function () {
				Main.clearData();
			});
			if (typeof f === 'function') f();
		});
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
	var onDataReady = function () {};
	var onDomReady = function () {};
	
	that.dataReady = function (f) {
		if (typeof f === 'function') {
			onDataReady = f;
		} else {
			onDataReady();
		}
	}

	that.ready = function (f) {
		if (typeof f === 'function') {
			onDomReady = f;
		} else {
			onDomReady();
		}
	}

	// Execute when DOM is ready
	$( document ).ready(function () {
		Template.registerPartials();
		Main.url.parse();
		if (Main.url.get().reset === true) Main.clearData();
		if (Main.url.get().default != true) Main.loadData();
		onDataReady(); // Run user-defined function
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
	console.log('Loading data');
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
		console.log('Data saved: ' + key);
		amplify.store(key, Data[key]);
	}
}

// Clear all data from storage
Main.clearData = function () {
	console.log('Clearing data');
	for (var obj in amplify.store()) {
		amplify.store(obj, null);
	}
}

Main.product = function () {
	var that = {};

	that.inFravlist = function (id) {
		for (var i=0; i<Data.fravlist.items.length; i+=1) {
			if (Data.fravlist.items[i].product.id === id) {
				return true;
			}
		}
		return false;
	}

	that.inClipping = function (id) {
		for (var i=0; i<Data.clipping.items.length; i+=1) {
			if (Data.clipping.items[i].product.id === id) {
				return true;
			}
		}
		return false;
	}

	return that;
}();

// A constructor for clipping animation in each page
Main.clippingToggle = function (spec) {
	var mem = {}; // container for private variables;
	var that = function (e) {
		e.preventDefault();
		if (!$('.fravr-clipping').is(':visible')) {
			spec.open(mem);
			$('.fravr-clipping').css('display','block').animate({
				width:3/12*100 + "%",
				opacity: 1
			},{
				complete: function () {
					$('.fravr-clipping .clipping-container').show();
				}
			});
			$('body').css('overflow','hidden');
		} else {
			spec.close(mem);
			$('.fravr-clipping .clipping-container').hide();
			$('.fravr-clipping').animate({
				width:0,
				opacity: 0
			},
			{
				complete:function () {
					$(this).hide();
					$('body').css('overflow','visible');
				}
			});
		}
	}
	return that;
};

// Timeline - Constructor to generate html code for timeline
// Options:
// data - an array of objects that contain keys "product" and "actions" (optional)
// width - width of div container (typically need to add 30 due to div.row's negative margin
// container - a string that contains the css selector for the container
var Timeline = function (opt) {
	// Comment 2 lines below to enable debugging
	var console = {};
	console.log = function() {};
	if (typeof opt != 'undefined') {
		if (typeof opt.data === 'object' && typeof opt.data.length === 'number') {
			var data = opt.data;
		}
		if (typeof opt.width === 'number') {
			var vw = opt.width;
		}
		if (typeof opt.container === 'string') {
			var container = opt.container;
		}
		if (!(data && vw && container)) {
			console.log('Error: Missing parameters');
			return;
		}
	} else {
		console.log('Error: Missing parameters');
		return;
	}
	
	var that = {};
	var count = data.length,
		pointer = 0,
		buffer = [],
		completePattern = [],
		maxRDiff = 0.05,
		lastPattern = [];


	that.allSizesLoaded = false; // flag to stop loop

	that.getRW = function (wh) {
		var r = wh.h/wh.w;

		if (r < 1/3) {
			return { r: r, w: [12]};
		} else if (r >=2) {
			return { r: 2, w: [3]};
		} else {
			var w = [];
			for (var h=3; h<=9; h+=1) {
				if (r*h <= 6) {
					w.push(h);
				}
			}
			var result = { r: r, w: w};
			
			// Correct up to maximum allowable difference
			var rAdjusted = r-r*maxRDiff;
			if (rAdjusted < 1/3) {
				rAdjusted = 1/3;
			}
			var wAdjusted = [];
			for (var h=3; h<=9; h+=1) {
				if (rAdjusted*h <= 6) {
					wAdjusted.push(h);
				}
			}
			if (wAdjusted.length > result.w.length) {
				return { r: rAdjusted, w: wAdjusted};
			} else {
				return result;
			}
		}

// 
// 		if (r < rAllowed[0].r) {
// 			return { r: r, w: [12]};
// 		} else if (r >= rAllowed[rAllowed.length - 1]) {
// 			return { r: 2, w: [3]};
// 		} else {
// 			var index = Math.floor((Math.log(r) - Math.log(rAllowed[0].r)) / Math.log(100/95));
// 			return rAllowed[index];
// 		}
	}

	that.getPLeft = function (rw,pLeft_old) {
		var	pattern = [
			{ p: [6,6], },
			{ p: [3,3,3,3], },
			{ p: [4,4,4], },
			{ p: [3,9], },
			{ p: [4,8], },
			{ p: [3,3,6], },
			{ p: [5,7], },
			{ p: [3,4,5], }
		];
		var pLeft = [];

		if (typeof pLeft_old === 'object') {
			for (var i=0; i<pLeft_old.length; i+=1) {
				// Copy object
				var obj = $.extend(true, {}, pLeft_old[i]);
				for (var j=0; j<obj.pr.length; j+=1) {
					//Calculate difference of r
					if (obj.pr[j].r >= rw.r) {
						var rDiff = (obj.pr[j].r - rw.r)/obj.pr[j].r;
					} else {
						var rDiff = (rw.r - obj.pr[j].r)/rw.r;
					}
					// If difference is less than max allowable difference,
					// modify pLeft and return
					if (rDiff < maxRDiff) {
						console.log('hit');
						// Add to used possibility
						obj.wt.push({
							t: rw.t,
							w: obj.pr[j].p,
							r: obj.pr[j].r
						});
						obj.pr.splice(j,1); // Remove from possiblity left
						if (obj.pr.length === 0) {
							console.log('complete');
							completePattern.push(obj);
						}
						break;
					}
				}
				pLeft.push(obj);
			}
			return pLeft;
		} else {
			for (var i=0; i<rw.w.length; i+=1) {
				for (var j=0; j<pattern.length; j+=1) {
					var index = $.inArray(rw.w[i], pattern[j].p);
					if (index >= 0) {
						var p = pattern[j].p.slice(0); //copy array
						var obj = {
							wt: [{
								w: p.splice(index,1)[0], //remove matched w from array
								t: rw.t, //timeline index
								r: rw.r //store r related
							}],
							op: pattern[j].p, // Original P
							pr: [] //P left
						};
						for (var k=0; k<p.length; k+=1) {
							obj.pr.push({
								p: p[k],
								r: rw.r*(pattern[j].p[index]/12*vw-20)/(p[k]/12*vw-20)
							});
							if (obj.pr[obj.pr.length-1].r > 2 || obj.pr[obj.pr.length-1].r < 1/3) {
								k = null;
								break;
							}
						}
						if (!(k === null)) {
							pLeft.push(obj);
						}
					}
				}
			}
			return pLeft;
		}
	}

	that.getCP = function () {
		return completePattern;
	};

	that.setCP = function (array) {
		completePattern = array;
	};

	that.loadSize = function (num, successCallback, endCallback) {
		var imgLoadCount = 0;
		for (var y=pointer+num; pointer<y; pointer+=1) {
			if (typeof data[pointer] === 'undefined') break;
			var image = new Image();
			$(image).load(function (timelineItem) {
					var that = function () {
						var width = $(this).width();
						var height = $(this).height();
						data[timelineItem].product.img_urls[0].size = {
							width: width,
							height: height,
							hdw: height/width
						}
						$(this).remove(); //Remove this image from DOM
						imgLoadCount += 1;
						if (imgLoadCount === num) {
							successCallback(pointer);
						};
					};
					return that;
				}(pointer));
			$(image).css('display','none')
				.attr('src', data[pointer].product.img_urls[0].url)
				.appendTo('body');
		}
		// When loop is broken prematurely
		if (pointer != y) {
			that.allSizesLoaded = true;
			endCallback();
			return 'All sizes loaded';
		}
	}

	that.updatePLeft = function () {
		// For each image in buffer except the last added
		for (var i=0; i<buffer.length-1; i+=1) {
			// update possibilities
			buffer[i].pLeft = that.getPLeft({
				r: buffer[buffer.length-1].r,
				w: buffer[buffer.length-1].w,
				t: buffer[buffer.length-1].t
			}, buffer[i].pLeft);

			// update possiblity of last added image
			buffer[buffer.length-1].pLeft = that.getPLeft({
				r: buffer[i].r,
				w: buffer[i].w,
				t: buffer[i].t
			}, buffer[buffer.length-1].pLeft);
		}
	}

	that.loadNext = function (callBack) {
		that.loadSize(1, function (pointer) {
			// Add image to buffer
			buffer.push(data[pointer-1].product.img_urls[0].size);
			var rw = that.getRW({
				h: buffer[buffer.length-1].height,
				w: buffer[buffer.length-1].width
			});
			buffer[buffer.length-1].r = rw.r;
			buffer[buffer.length-1].w = rw.w;
			buffer[buffer.length-1].t = pointer-1;
			rw.t= pointer-1;
			buffer[buffer.length-1].pLeft = that.getPLeft(rw);

			that.updatePLeft();

			if (typeof callBack === 'object') {
				if (typeof callBack.done === 'function') {
					callBack.done();
				}
			}
		}, function () {
			if (typeof callBack === 'object') {
				if (typeof callBack.end === 'function') {
					callBack.end();
				}
			}
		});
	}

	that.addPatternToDom = function () {
		console.log('adding pattern...');
		var cp = that.getCP();

		var isRepeatPattern = function (pattern) {
			var repeated = true;
			for (var i=1; i<pattern.length; i+=1) {
				if (pattern[0] != pattern[i]) {
					repeated = false;
					break;
				}
			}
			return repeated;
		};
		
		var arraysEqual = function (arr1, arr2) {
			if(arr1.length !== arr2.length)
				return false;
			for(var i = arr1.length; i--;) {
				if(arr1[i] !== arr2[i])
					return false;
			}

			return true;
		}

		// Decide which pattern to use
		var bestCP = {};
		for (var i=0; i<cp.length; i+=1) {
			// If pattern is same as last used pattern in DOM and has all same numbers
			// if (arraysEqual(lastPattern,cp[i].op) && isRepeatPattern(cp[i].op)) {
			//	console.log('same pattern as last');
			//} else {
				for (var j=0; j<cp[i].wt.length; j+=1) {
					if (typeof bestCP.t === 'undefined') {
						bestCP.t = cp[i].wt[j].t;
						bestCP.i = i;
					} else if (bestCP.t > cp[i].wt[j].t) {
						bestCP.t = cp[i].wt[j].t;
						bestCP.i = i;
					};
				}
			// }
		}

		// If a valid pattern is selected
		if (typeof bestCP.i != 'undefined') {
			console.log("Valid pattern: ");
			console.log(cp[bestCP.i]);
			var wt = cp[bestCP.i].wt;

			// Add pattern to DOM
			var row = $("<div class='row'></div>");
			for (var i=0; i<wt.length; i+=1) {
				var col=$("<div class='col-sm-" + wt[i].w +"'></div>");
				var item = $(Template.get('timelineItem')(data[wt[i].t]));
				item.first().hover(function () {
					$(this).find('.fravr-btn').show();
					$(this).find('.overlay-effect').show();
				},function () {
					$(this).find('.fravr-btn').hide();
					$(this).find('.overlay-effect').hide();
				});
				item.on('click', function (evt) {
					var tt = $(evt.target).first();
					if (tt.prop("tagName") === 'SPAN') {
						tt = tt.parent();
					}
					if (tt.hasClass('btn-share')) {
						tt.html("Shared").addClass('disabled');
					} else if (tt.hasClass('btn-frav')) {
						tt.html("Frav'd").addClass('disabled');
						Data.fravlist.items.unshift({
							product: Data.products[$(this).attr('data-name')],
							fravCount: Math.floor(Math.random()*11)
						});
						Main.saveData('fravlist');
					} else if (tt.hasClass('btn-clip')) {
						tt.html("Clipped").addClass('disabled');
						Data.clipping.items.unshift({
							product: Data.products[$(this).attr('data-name')]
						});
						Data.clipping.total += 1;
						Main.saveData('clipping');
						$('.clipping-count').html(Data.clipping.total);
					} else if (tt.hasClass('btn-cart')) {
						var cartCount = tt.html().match(/[(].+[)]/g);
						if (cartCount) {
							tt.html("Carted (" + (Number(cartCount[0].replace(/[()]/g,"")) + 1) + ")");
						} else {
							tt.html("Carted (1)");
						}
					}
				});
				item.find('div.fravr-btn').on('click', function(evt) {
					if (evt.target.nodeName === 'DIV') {
						window.location.href = "product.htm?product=" + $(this).parentsUntil('.item').parent().attr('data-name');
					}
				});
				console.log(wt[i].t);
				var size = data[wt[i].t].product.img_urls[0].size;
				if (size.hdw < wt[i].r) {
					// Crop width
					var width = (wt[i].r - size.hdw)/size.hdw*100+100;
					var wCrop = (wt[i].r - size.hdw)/size.hdw*100/-2;
					console.log(wCrop);
					item.find('img').css("width",width+'%').css("margin","0 0 0 " + wCrop + '%');
				} else if (wt[i].r < size.hdw) {
					// Crop height
					var hCrop = (size.hdw - wt[i].r)*100/-2;
					item.find('img').css("margin",hCrop +"% 0 " + hCrop + "% 0");
				} else {
					console.log(size.hdw + '=' + wt[i].r);
				}
				col.append(item);
				row.append(col);
			}
			row.appendTo(container);

			that.onUsePattern(bestCP.i);
		}
	}

	// Invalidate complete patterns and update data when pattern is used
	that.onUsePattern = function (cpIndex) {
		// Copy completed pattern for reference
		var cp = $.extend(true, {}, completePattern[cpIndex]);
		console.log('onUsePattern');
		console.log(cp);
		console.log(buffer);

		lastPattern = completePattern[cpIndex].op.slice(0);
		var completePattern2 = []; // Reset completePattern
		// For each image in used pattern
		for (var i=0; i<cp.wt.length; i+=1) {
			for (var j=0; j<buffer.length; j+=1) {
				if (buffer[j].t === cp.wt[i].t) {
					console.log('matched in cp');
					console.log(buffer.splice(j,1)); // Remove matching image in buffer
					break; // Go to next image in used pattern
				}
			}
		}
		// For each image left in buffer, re-add possibility from used images
		for (var i=0; i<buffer.length; i+=1) {
			// For each pattern
			for (var i2=0; i2<buffer[i].pLeft.length; i2+=1) {
				// For each used image in the pattern
				for (var j=0; j<buffer[i].pLeft[i2].wt.length; j+=1) {
					// Check index if matches any of the used image
					for (var k=0; k<cp.wt.length; k+=1) {
						if (buffer[i].pLeft[i2].wt[j].t === cp.wt[k].t) {
							// Add back possibility
							buffer[i].pLeft[i2].pr.push({
								p: buffer[i].pLeft[i2].wt[j].w,
								r: buffer[i].pLeft[i2].wt[j].r
							});
							// Remove from used possibility
							buffer[i].pLeft[i2].wt.splice(j,1);
							j-=1; // Drop counter by 1 as current is removed
							break; // Break and move to next used image
						}
					}
				}
				// If pattern is still complete, add it back to completed patterns
				if (buffer[i].pLeft[i2].pr.length === 0) {
					completePattern2.push(buffer[i].pLeft[i2]);
					console.log('add back to complete pattern');
				}
			}
		}

		console.log('clean up complete');
		that.setCP(completePattern2);
		console.log(completePattern2);
		console.log(that.getCP());
		console.log(buffer.length);
		console.log(buffer);
	}

	that.create = function () {
		var loadLoop = function () {
			that.loadNext({
				done: function () {
					// Check for completed patterns
					var cp = that.getCP();
					if (cp.length > 0) {
						that.addPatternToDom();
						// Add to DOM and pattern
						// Remove added index
						// Go through buffer and update possiblities
					} else {
					}
					if (that.allSizesLoaded === false) {
						loadLoop();
					}
				},
				end: function () {
					if (!buffer.length) {
						console.log('no images left in buffer');
					} else {
						console.log(buffer.length + ' images left in buffer');
						that.endCreate();
					}
				}
			});
		}
		loadLoop();
	}

	that.endCreate = function () {
		if (buffer.length > 1) {
			maxRDiff *= 2;
			var bufferLeft = $.extend(true, [], buffer);
			for (var i=0; i<bufferLeft.length; i+=1) {
				bufferLeft[i].pLeft = that.getPLeft(bufferLeft[i]);
			}
			buffer = [];
			buffer.push(bufferLeft.splice(0,1)[0]);
			for (;bufferLeft.length>0;) {
				buffer.push(bufferLeft.splice(0,1)[0]);
				that.updatePLeft();
				if (that.getCP().length > 0) {
					that.addPatternToDom();
				}
			}
			if (buffer.length > 1) {
				console.log('asdfasdf');
				console.log(buffer.length);
				that.endCreate();
			}
		}
		if (buffer.length === 1) {
			console.log('left one');
			var row = $("<div class='row'></div>");
			var col=$("<div class='col-sm-" + buffer[0].w[buffer[0].w.length-1] +"'></div>");
			var item = $(Template.get('timelineItem')(data[buffer[0].t]));
			item.first().hover(function () {
				$(this).find('.fravr-btn').show();
				$(this).find('.overlay-effect').show();
			},function () {
				$(this).find('.fravr-btn').hide();
				$(this).find('.overlay-effect').hide();
			});
			item.on('click', function (evt) {
				var tt = $(evt.target).first();
				if (tt.prop("tagName") === 'SPAN') {
					tt = tt.parent();
				}
				if (tt.hasClass('btn-share')) {
					tt.html("Shared").addClass('disabled');
				} else if (tt.hasClass('btn-frav')) {
					tt.html("Frav'd").addClass('disabled');
					Data.fravlist.items.unshift({
						product: Data.products[$(this).attr('data-name')],
						fravCount: Math.floor(Math.random()*11)
					});
					Main.saveData('fravlist');
				} else if (tt.hasClass('btn-clip')) {
					tt.html("Clipped").addClass('disabled');
					Data.clipping.items.unshift({
						product: Data.products[$(this).attr('data-name')]
					});
					Data.clipping.total += 1;
					Main.saveData('clipping');
					$('.clipping-count').html(Data.clipping.total);
				} else if (tt.hasClass('btn-cart')) {
					var cartCount = tt.html().match(/[(].+[)]/g);
					if (cartCount) {
						tt.html("Carted (" + (Number(cartCount[0].replace(/[()]/g,"")) + 1) + ")");
					} else {
						tt.html("Carted (1)");
					}
				}
				item.find('div.fravr-btn').on('click', function() {
					window.location.href = "product.htm?product=" + $(this).parentsUntil('.item').parent().attr('data-name');
				});
			});
			col.append(item);
			row.append(col);
			row.appendTo(container);
			buffer = [];
		}
	}

	return that;
};

// Custom Handlebars helpers
Handlebars.registerHelper ("ifequals", function (obj, val, options) {
	if (obj === val) {
		return options.fn(obj);
	} else {
		return options.inverse(obj);
	}
});

// If product id is in fravlist
Handlebars.registerHelper ("ifFrav", function (id, options) {
	if (Main.product.inFravlist(id)) {
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
});

// If product id is in clipping
Handlebars.registerHelper ("ifClipping", function (id, options) {
	if (Main.product.inClipping(id)) {
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
});

// Convert price to 2 decimal place
Handlebars.registerHelper ("pricefix", function (num, options) {
	if (typeof num === 'number') {
		return num.toFixed(2);
	}
});

// Calculate discounted price
Handlebars.registerHelper ("discountprice", function (price, discount, options) {
	if (typeof price === 'number' && typeof discount === 'number') {
		return (price + discount * price/100).toFixed(2);
	}
});

// Convert epoch to pretty date
Handlebars.registerHelper ("printPrettyDate", function (d, options) {
	if (typeof d === 'number') {
		var ms = {
			s: 1000,
			m: 1000*60,
			h: 1000*60*60,
			d: 1000*60*60*24
		}
		var d = {
			ms: new Date(d),
			s: new Date(Math.floor(d/ms.s)*ms.s),
			m: new Date(Math.floor(d/ms.m)*ms.m),
			h: new Date(Math.floor(d/ms.h)*ms.h),
			d: new Date(Math.floor(d/ms.d)*ms.d)
		}
		var t = (new Date).getTime();
		var tNow = {
			ms: new Date(t),
			s: new Date(Math.floor(t/ms.s)*ms.s),
			m: new Date(Math.floor(t/ms.m)*ms.m),
			h: new Date(Math.floor(t/ms.h)*ms.h),
			d: new Date(Math.floor(t/ms.d)*ms.d)
		}
		var monthNames = [ "January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December" ];

		if (tNow.d.valueOf() - d.d.valueOf() > ms.d) {
			var str = monthNames[d.ms.getMonth()] + " " + d.ms.getDate();
			if (!(tNow.ms.getFullYear() === d.ms.getFullYear())) {
				str += ", " + d.ms.getFullYear();
			}
		} else if (tNow.d.valueOf() - d.d.valueOf() === ms.d) {
			var str = "Yesterday at " + d.ms.getHours() + ":" + d.ms.getMinutes();
		} else if (tNow.d.valueOf() - d.d.valueOf() < ms.d) {
			if (tNow.h.valueOf() - d.h.valueOf() > ms.h) {
				var str = Math.floor((tNow.h.valueOf() - d.h.valueOf())/ms.h) + " hours ago";
			} else if (tNow.m.valueOf() - d.m.valueOf() > ms.m) {
				var str = Math.floor((tNow.m.valueOf() - d.m.valueOf())/ms.m) + " minutes ago";
			} else {
				var str = "Just now";
			}
		} else {
			var str = "";
		}
		return str;
	}
});

// returns array length of input json data array
Handlebars.registerHelper ("arraylength", function (obj, options) {
	return obj.length;
});

// returns value of the last entry of input json data array as an object to be used in handlebars block
Handlebars.registerHelper ("lastvalue", function (obj_in, options) {
	var obj_out = obj_in[obj_in.length-1];
	return options.fn(obj_out);
});

