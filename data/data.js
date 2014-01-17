// Define default data
var Data = {};

Data.header = {
};

Data.messages = {
	total: 0,
	unread: 0
};

Data.users = {
	paklun: {
		name: 'Pak Lun',
		img_url: 'img/users/Pak Lun.jpg',
		fravs: 10
	},
	wenting: {
		name: 'Wen Ting',
		img_url: 'img/users/Wen Ting.jpg',
		fravs: 6
	},
	jiahe: {
		name: 'Jiahe',
		img_url: 'img/users/Jiahe.jpg',
		fravs: 10
	},
	alexkhow: {
		name: 'Alex',
		img_url: 'img/users/Alex.jpg',
		fravs: 32
	},
	Sera: {
		name: 'Sera',
		img_url: 'img/users/Sera.jpg',
		fravs: 31
	},
	Singh: {
		name: 'Jasper Singh',
		img_url: 'img/users/Singh.jpg',
		fravs: 33
	},
	Genevieve: {
		name: 'Genevieve Goh',
		img_url: 'img/users/Genevieve.jpg',
		fravs: 15
	},
	Samantha: {
		name: 'Samantha',
		img_url: 'img/users/Samantha.jpg',
		fravs: 10
	},
	Max: {
		name: 'Max Foo',
		img_url: 'img/users/Max.jpg',
		fravs: 22
	},
	Vince: {
		name: 'Vince Van',
		img_url: 'img/users/Vince.jpg',
		fravs: 10
	},
	Jesslyn: {
		name: 'Jesslyn Tai',
		img_url: 'img/users/Jesslyn.jpg',
		fravs: 19
	},
	Theresa: {
		name: 'Theresa Tong',
		img_url: 'img/users/Theresa.jpg',
		fravs: 10
	},
	Cynthia: {
		name: 'Cynthia',
		img_url: 'img/users/Cynthia.jpg',
		fravs: 19
	},
	ColinTan: {
		name: 'Colin Tan',
		img_url: 'img/users/Colin Tan.jpg',
		fravs: 10
	},
	yuri: {
		name: 'Yuri',
		img_url: 'img/users/Yuri.jpg',
		fravs: 10
	},
	Liza: {
		name: 'Liza Smith',
		img_url: 'img/users/Liza.jpg',
		fravs: 10
	},
	Tiffany: {
		name: 'Tiffany',
		img_url: 'img/users/Tiffany.jpg',
		fravs: 67
	},
	sethrogen: {
		name: 'Seth Rogen',
		img_url: 'img/users/Seth Rogen.jpg',
		fravs: 21
	},
	mizutani: {
		name: 'Masako Mizutani',
		img_url: 'img/users/Mizutani.jpg',
		fravs: 31
	},
	Tkimura: {
		name: 'Takuya Kimura',
		img_url: 'img/users/TKimura.jpg',
		fravs: 46
	},
	JulieBowen: {
		name: 'Julie Bowen',
		img_url: 'img/users/Julie Bowen.jpg',
		fravs: 8
	},
	Hyori: {
		name: 'Lee Hyori',
		img_url: 'img/users/Hyori Lee.jpg',
		fravs: 10
	},
	TakuyaS: {
		name: 'Takuya Shimizu',
		img_url: 'img/users/TakuyaS.jpg',
		fravs: 14
	},
	Boa: {
		name: 'BoA',
		img_url: 'img/users/Boa.jpg',
		fravs: 20
	},
	takeshi: {
		name: 'Takeshi Kaneshiro',
		img_url: 'img/users/Takeshiro.jpg',
		fravs: 31
	},
	Tyra: {
		name: 'Tyra',
		img_url: 'img/users/Tyra.jpg',
		fravs: 12
	},
	bernetta: {
		name: 'Bernetta',
		img_url: 'img/users/Bernetta.jpg',
		fravs: 49
	},
	kleine: {
		name: 'Kleine',
		img_url: 'img/users/Kleine.jpg',
		fravs: 16
	},
	priya: {
		name: 'Priya',
		img_url: 'img/users/priya.jpg',
		fravs: 44
	},
	xiaoqian: {
		name: 'Xiao Qian',
		img_url: 'img/users/Xiao Qian.jpg',
		fravs: 62
	},
	bridgette: {
		name: 'Bridgette',
		img_url: 'img/users/Bridgette.jpg',
		fravs: 76
	},
	Kloc: {
		name: 'Kloc',
		img_url: 'img/users/Kloc.jpg',
		fravs: 13
	},
	Riyanti: {
		name: 'Riyanti',
		img_url: 'img/users/Riyanti.jpg',
		fravs: 56
	},
	Damien: {
		name: 'Damien Chung',
		img_url: 'img/users/Damien.jpg',
		fravs: 18
	},
	Linh: {
		name: 'Melissa Linh',
		img_url: 'img/users/Linh.jpg',
		fravs: 17
	},
	Shakir: {
		name: 'Shakir',
		img_url: 'img/users/Shakir.jpg',
		fravs: 10
	},
	Kapoor: {
		name: 'Kapoor',
		img_url: 'img/users/Kapoor.jpg',
		fravs: 12
	},
	Marie: {
		name: 'Marie',
		img_url: 'img/users/Marie.jpg',
		fravs: 10
	},
	Xavier: {
		name: 'Xavier',
		img_url: 'img/users/Xavier.jpg',
		fravs: 11
	}
}	
Data.profile = Data.users['paklun'];

Data.profile.banner_img_url = 'img/profile-banner.jpg';

Data.profile.status = "I'm just some random guys with random fravrs";

Data.profile.following = [
	
	Data.users.Sera,
	Data.users.Max,
	Data.users.jiahe,
	Data.users.alexkhow,
	Data.users.Samantha,
	
	Data.users.Genevieve,
	Data.users.Jesslyn,
	Data.users.Cynthia,
	Data.users.ColinTan,
	Data.users.Theresa,
	Data.users.Vince,
	Data.users.yuri,
	Data.users.Liza,
	Data.users.Tiffany,
	Data.users.sethrogen,
	Data.users.mizutani,
	Data.users.Tkimura,
	Data.users.JulieBowen,
	Data.users.Hyori,
	Data.users.TakuyaS,
	Data.users.Boa,
	Data.users.Singh,
	Data.users.takeshi,
	Data.users.Tyra,
	Data.users.wenting,
]

Data.profile.friends = [
	Data.users.wenting,
	Data.users.Sera,
	Data.users.Max,
	Data.users.jiahe,
	Data.users.alexkhow,
	Data.users.Samantha,
	Data.users.Singh,
	Data.users.Genevieve,
	Data.users.Jesslyn,
	Data.users.Cynthia,
	Data.users.ColinTan,
	Data.users.Theresa,
	Data.users.Vince
]
Data.profile.followers = [
	Data.users.wenting,
	Data.users.Sera,
	Data.users.Max,
	Data.users.jiahe,
	Data.users.alexkhow,
	Data.users.Samantha,
	Data.users.Singh,
	Data.users.Genevieve,
	Data.users.Jesslyn,
	Data.users.Cynthia,
	Data.users.ColinTan,
	Data.users.Theresa,
	Data.users.Vince,
	Data.users.Xavier,
	Data.users.Marie,
	Data.users.Kapoor,
	Data.users.Shakir,
	Data.users.Linh,
	Data.users.Damien,
	Data.users.Riyanti,
	Data.users.Kloc,
	Data.users.bridgette,
	Data.users.xiaoqian,
	Data.users.priya,
	Data.users.kleine,
	Data.users.bernetta
]

Data.cart = {
	total: 0
}

Data.products = {
	item:
		{
		id: "item",
		name: "Default Name",
		price: 0,
		currency: "SGD",
		merchant: "Default Merchant",
		merchant_url: "#",
		description: "Text",
		img_urls: [{url:"empty"}],
		comments: [{commenter: null,
					comment: null}],
		reviews: [{	reviewer: null,
					review: null}],
		product_url: null
		},
CoolFaucet:
		{
		id: "CoolFaucet",
		name: "HANSALATRAVA Faucet",
		price: 999.0,
		currency: "SGD",
		merchant: "Octopus Designs",
		merchant_url: "#",
		description: "<p>Sleek. Minimalistic. Smart. Add designer flair to your bathroom with HANSALATRAVA faucets. Crafted out of stainless steel and featuring our built-in sensor to activate the tap.</p>\
		<p>A perfect design complement to HANSALATRAVA sinks.</p>\
		",
		img_urls: [{url:"img/products/HANSALATRAVA Faucet by Octopus Design 3150.jpg"}],
		comments: [{commenter: null,
					comment: null}],
		reviews: [{	reviewer: null,
					review: null}],
		product_url: null
		},
EggWhiteSeparator:
		{
		id: "EggWhiteSeparator",
		name: "Egg White Separator",
		price: 15.00,
		currency: "SGD",
		merchant: "Bakerz",
		merchant_url: "#",
		description: "<p>Bakers, we hear your pains. Here we have a simple contraption to help separate the yolks and the eggs for your baking sessions. Just give the pump a squeeze and go for the yolk. Next thing you know, the yolk is sucked into the pump where you can easily release it elsewhere.</p>\
		<p>Available in White only.</p>\
		",
		img_urls: [{url:"img/products/Pluck Egg White Separator 15.jpg"}],
		comments: [{commenter: null,
					comment: null}],
		reviews: [{	reviewer: null,
					review: null}],
		product_url: null
		},
FeatherBookmark:
		{
		id: "FeatherBookmark",
		name: "Exquisite Feather Bookmark",
		price: 14.00,
		currency: "SGD",
		merchant: "iMaculate",
		merchant_url: "#",
		description: "<p>The perfect gift for the bookworm - a bird feather cut out of aluminium, complete with tassel. Weighs 75g.</p>\
		",
		img_urls: [{url:"img/products/feather bookmark 14.jpg"}],
		comments: [{commenter: null,
					comment: null}],
		reviews: [{	reviewer: null,
					review: null}],
		product_url: null
		},
RaybanAviators:
		{
		id: "RaybanAviators",
		name: "Aviators LARGE METAL II Gold/Brown",
		price: 235.0,
		currency: "SGD",
		merchant: "Rayban",
		merchant_url: "#",
		description: "<p>CLASSIC COOL<br>The spontaneous choice of artists and celebrities, Ray-Ban has become a true worldwide phenomenon. Ray-Ban is preferred by legends, loved by individualists and imitated by everyone. With 70 years of authenticity, tradition and quality to its name, Ray-Ban will continue to look to its past to envision its future. For anyone who simply wants to be real, Ray-Ban believes the most fashionable thing to be is yourself.</p>\
		<p>The classic Aviators were made legendary by Tom Cruise in TOP GUN and were representative of the official military eyepiece design of the era. The iconic large teardrop shades provide glare-protection and better vision for the pilots in the cockpits.</p>\
		<p>Go On. Own an Icon</p>\
		",
		img_urls: [{url:"img/products/Rayban Aviator LARGE METAL Gold Brown.png"},{url:"img/products/Rayban aviators large metal gold brown 2.jpg"},{url:"img/products/Tom-Cruise-Top-Gun-031.jpg"},{url:"img/products/Jennifer-Aniston-Ray-Ban-Aviator-Sunglasses.jpg"}],
		comments: [{commenter: null,
					comment: null}],
		reviews: [{	reviewer: null,
					review: null}],
		product_url: null
		},
SkullcandyAviators:
		{
		id: "SkullcandyAviators",
		name: "ROCNation Aviators Brown/Gold",
		price: 247.00,
		currency: "SGD",
		merchant: "SkullCandy",
		merchant_url: "#",
		description: "<p>Go back to the era of TOPGUN with this classic-looking Aviators-inspired headphones. A product borne out of Skullcandy\'s collaboration with Jay-Z\'s ROCNation, it boasts comfortable earpads and exceptional bass response. Removable tangle-free cords also includes in-line mics and remote controls for IOS devices.</p>\
		",
		img_urls: [{url:"img/products/Skullcandy Aviator Brown.jpg"},{url:"img/products/Skullcandy Aviator Brown 2.jpg"},{url:"img/products/Skullcandy Aviator Brown 3.jpg"}],
		comments: [{commenter: null,
					comment: null}],
		reviews: [{	reviewer: "PCMAG.COM",
					review: "Cool design based on Aviator sunglasses. Quality bass response with barely any distortion at maximum volume.\
<p>Integrated Apple iPhone/iPod mic and controls.<br>Skullcandy\'s Roc Nation Aviator headphones take design cues from that staple of American style, Ray-Ban Aviator sunglasses, and branding from Jay-Z's music and entertainment company. Somewhere in the earpieces, which are shaped like Aviator lenses, there are drivers that pump out audio, too. Needless to say, the Aviator is quite the fashion statement. At $149.99 (direct), however, they need to deliver quality audio performance as well, and the Aviator offers a hit-and-miss experience, mixing deep bass that generally does not distort, with treble that seems a bit too sculpted and boosted. The built-in microphone and playback controls for the Apple iPhone (4 stars, $199 and up) and iPods are a nice touch, but the Aviator suffers from a weak physical construction and is not a serious choice for audiophiles.</p>\
<p>Design.<br>The Roc Nation Aviator comes in three styles—white, brown and gold, and black. The headphones truly look cool. Our black test unit features transparent \"lenses\" as the plastic covering over the earpieces, allowing for a glimpse at the innards of the headphones. On the inside of the rounded-triangles that form the ear cups, there is plush padding that comfortably envelopes your ear. This type of headphone, which creates a loose seal, is called circumaural.</p>\
<p>The headphones are easily adjustable and feature cushioned, pseudo-suede padding on the inside of the headband. The logo for Roc Nation appears on each ear piece, and the Skullcandy logo—an ominous upper half of a human skull—appears above each ear on the headband and once again on the 3.5-inch cable connection. The nylon cable extends from the left ear, and roughly four inches below the ear cup, the mic, and Apple playback controls (for Volume, Play, Pause, Fast Forward, Rewind, as well a button for starting and ending calls) are built into a silver-colored plastic compartment. The headphones fold up into a more portable size and they come with a stylish zip-up, pseudo-leather pouch.</p>\
<p>While the headphones manage to look exceedingly cool without screaming for attention—kind of like the real Aviator sunglasses—the actual construction is a little flimsy for a $150 investment. Lightly pressing on the inside of the left ear cup lightly—where there happens to be yet another emblazoned Skull logo—temporarily disabled the left ear's drivers. Another press, and the music came back, but I had to repeat this step a few times before the nuisance permanently ceased. A $150 pair of headphones should be able to withstand this sort of activity. When I got the headphones working properly again, the Aviators were comfortable and offered a very solid listening experience. But I'd be remiss if I didn't point out that they're not exactly durable.</p>\
<p>Performance.<br>Unfortunately, the Apple controls and mic don't mix well with our HEAD Acoustics frequency-response tests, so we are unable to run frequency response graphs. I can tell you that the performance, from ear-to-ear, is reasonably well-matched—it's quite similar to the KRK Systems KNS-8400 (4 stars, $149) linear frequency response, which is a more-than-acceptable result.</p>\
<p>Bass response is on par with headphones in this price range. The Knife's \"Silent Shout\" which has tremendous low end, can be played at maximum volume without serious distortion. Occasionally, I heard the synth drum hits distort slightly, but only at the very highest level, and even this was minor. At normal-to-loud listening levels, the Aviator has no problem reproducing heavy bass, but the treble can often be too bright and intense. Ironically, on Jay-Z's \"99 Problems\", this is one problem that is apparent—at moderate-to-high volumes, it is almost uncomfortable to listen because the treble is so boosted in certain ranges. On orchestral music, like John Adams's \"The Chairman Dances\" the high end is still quite present but seems less tweaked and the overall balance is more agreeable. It's probable that pop music, which often has modified high frequencies to begin with, is going to suffer from the inherent brightness the most.</p>\
<p>In this general price range, you have a couple more music-friendly headphone options (and plenty of in-ear options), but nothing quite so visually arresting. The same-price KRK Systems KNS-8400 is a great option for home studio engineers and audiophiles on a budget, but it looks like a pair of studio monitors. The Denon AH-D1100 (4.5 stars, $199.99) splits the difference, from a design standpoint, between a more stylish pair of headphones and a studio monitor look, and the extra $50 gets you audio performance worthy of our Editors' Choice. Still, for bridging an oft-ignored gap between style and performance, the Skullcandy Roc Nation Aviator is to be commended—but I still think it's a bit overpriced.</p>\
"}],
		product_url: null
		},
MarshallMajors:
		{
		id: "MarshallMajors",
		name: "'Major' On-Ear Headphones (Black)",
		price: 140.0,
		currency: "SGD",
		merchant: "Marshall",
		merchant_url: "#",
		description: "<p>THE MAJOR ENCLOSES VAST AMOUNTS OF THE MASSIVE MARSHALL LEGACY. THE EXTERIOR OF THE HEADBAND IS MADE OUT OF THE SAME VINYL USED IN MARSHALL AMPLIFIERS AND IT BEARS THE ORIGINAL MARSHALL TEXTURE. BESIDES BEING STRAIGHT UP DAZZLING. THE MAJOR IS A SOLID WORKHORSE WITH GREAT STAMINA, DESIGNED WITH NON-STOP, ALL-DAY LISTENING IN MIND.</p>\
		<p>SUPER SOFT EAR CUSHIONS<br>FULLY COLLAPSIBLE CONSTRUCTION<br>MIC & REMOTE<br>COMPATIBLE WITH MOST DEVICES USING THE 3.5MM STANDARD PLUG</p>",
		img_urls: [{url:"img/products/Marshall Major Headphones 1.jpg"},{url:"img/products/Marshall Major Headphones 2.jpg"},{url:"img/products/Marshall Major Headphone.jpg"}],
		comments: [{commenter: null,
					comment: null}],
		reviews: [{	reviewer: null,
					review: null}],
		product_url: null
		},
CrochetHighNeck:
		{
		id: "CrochetHighNeck",
		name: "Crochet Lace High Neck Top",
		price: 20.00,
		currency: "SGD",
		merchant: "Esgesee",
		merchant_url: "#",
		description: "<p>Full cotton 3/4 sleeved top with crochet lace high neck. Intricate crochet pattern and pearl adornments brings sophistication and elegance.</p>\
		<p><strong>Sizes: S - XL</strong></p>",
		img_urls: [{url:"img/products/crochet lace highneck white top1.jpg"},{url:"img/products/crochet lace highneck white top2.jpg"},{url:"img/products/crochet lace highneck white top3.jpg"}],
		comments: [{commenter: null,
					comment: null}],
		reviews: [{	reviewer: null,
					review: null}],
		product_url: null
		},
WhiteLaceTop:
		{
		id: "WhiteLaceTop",
		name: "Elegant Lace Long Sleeved Top",
		price: 14.00,
		currency: "SGD",
		merchant: "Esgesee",
		merchant_url: "#",
		description: "<p>Full cotton long sleeved top with lace collar. Intricate lace embroidery with adornments lend an air of sophistication and understated elegance to a casual white top.</p>\
		<p><strong>Sizes: S - XXL</strong></p>\ ",
		img_urls: [{url:"img/products/esgesee white lace collar top1.jpg"},{url:"img/products/esgesee white lace collar top2.jpg"},{url:"img/products/esgesee white lace collar top3.jpg"}],
		comments: [{commenter: null,
					comment: null}],
		reviews: [{	reviewer: null,
					review: null}],
		product_url: null
		},
Owlhalfsleeve:
		{
		id: "Owlhalfsleeve",
		name: "Owl Print Vintage Half Sleeve",
		price: 18.90,
		currency: "SGD",
		merchant: "East Knitting",
		description: "<p>Vintage-styled Half Sleeve Tee shirt made of 100% cotton with elastic cuffs. Owl design print. O-collar of color matching with cuffs.</p>\
		<p>Available in Teal, Cyan, Fuchsia, Orange, White and Black</p>\
		<p><strong>Sizes: XS - XL</strong></p>\
		",
		img_urls: [{url:"img/products/Vintage loose tee white owl print halfsleeve.jpg"}],
		comments: null,
		reviews: null
		},
WhiteEmbroideredDress:
		{
		id: "WhiteEmbroideredDress",
		name: "Timeless White Embroidered Dress",
		price: 20.0,
		currency: "SGD",
		merchant: "Ella Dress Dress Dress Dress Dress Dress Dress Dress Dress Dress Dress Dress Dress Dress Dress Dress Dress Dress Dress Dress ",
		description: "<p>A simple white dress can be a timeless fashion piece. Ella brings you another wardrobe must-haves with this lightweight, embroidered babydoll dress. Contrasted tribal lines of embroidery paired with like-colored lace pattern on the chest complete the look.</p>\
		<p><strong>Sizes: XS - XXL</p>\
		",
		img_urls: [{url:"img/products/Ella Timeless White Embroidered Dress 20.jpg"}],
		comments: null,
		reviews: null
		},
Tuxedotee:
		{
		id: "Tuxedotee",
		name: "Tuxedo White Tee",
		price: 39.9,
		currency: "SGD",
		merchant: "Lazy Oaf",
		description: "<p>Dress like a sir even while you're in a simple tee shirt. Be smartly casual with this tee shirt with a tuxedo print, topped off with a big bright bowtie.</p>\
		<p><strong>Sizes: XXS - XXL</strong></p>\
		",
		img_urls: [{url:"img/products/Lazy Oaf Tuxedo White Slob T-shirt (Lazy Oaf) 39.9.jpg"}],
		comments: null,
		reviews: null
		},
CannondaleRacer:
		{
		id: "CannondaleRacer",
		name: "SuperX SRAM Red Carbon Racer",
		price: 5300,
		currency: "SGD",
		merchant: "Cannondale",
		description: "<p>Beat the competition or cut through traffic with this super high performance roadbike. The frame is contructed out of high-strength fibers developed for Ballistic armoring and high-impact resins, building remarkable strength into this ultralight frameset (1400grams*).</p>\
		<p>FRAME: SUPERX, BALLISTEC HI-MOD CARBON, SPEED SAVE, BB30; FORK: SUPERX, BALLISTEC HI-MOD FULL CARBON, 1-1/8' TO 1-1/4'; STEERERCRANK: FSA SLK LIGHT CARBON, BB30, 46-36 </p>\
<p>SHIFTERS: SRAM RED; COG SET: SRAM PG-1070, 11-26, 10-SPEED; CHAIN: KMC X10SL, 10-SPEED; FRONT DERAILLEUR: SRAM RED, BRAZE-ON; REAR DERAILLEUR: SRAM RED</p>\
<p>RIMS: MAVIC KSYRIUM ELITE; HUBS: MAVIC KSYRIUM ELITE; TIRES: SCHWALBE RACING RALPH, 700X33C</p>\
<p>PEDALS: <strong>NOT INCLUDED</strong></p>\
<p>BRAKE: FSA SLK</p>\
<p>HANDLEBAR: FSA ENERGY COMPACT; STEM: FSA SL-K, 31.8; HEADSET: CANNONDALE SUPERX, 1-1/8' TO 1-1/4', 15MM TOP CAP; GRIPS: CANNONDALE 3MM SUEDE W/ GEL BACKING BAR TAPE</p>\
<p>SADDLE: FI'ZI:K TUNDRA 2; SEAT POST: FSA SLK, 27.2MMX250MM<p>\
",
		img_urls: [{url:"img/products/cannondale_super_x_sram_red_carbon_2012_-_road_bike.jpg"}],
		comments: null,
		reviews: null
		},
Sandwichcutter:
		{
		id: "Sandwichcutter",
		name: "Puzzle Sandwich Cutter",
		price: 14.90,
		currency: "SGD",
		merchant: "Bites & Pieces",
		description: "<p>Make your daily breakfast more interesting and appealing with this Puzzle Sandwich Cutter. Made out of dishwasher-safe plastic and with no moving parts to maintain, the Puzzle Sandwich Cutter is a kitchen tool you should get. Cutting edges are sharp enough to cut through sandwich but safe enough for any stray fingers, perfect for kids!</p>\
		<p>Available in Teal, Cyan, Fuchsia, Orange, White and Black</p>\
		",
		img_urls: [{url:"img/products/Bites _ Pieces Sandwich Cutter 9.jpg"}],
		comments: null,
		reviews: null
		},
spacerockettent:
		{
		id: "spacerockettent",
		name: "Space Rocket Tent",
		price: 422,
		currency: "SGD",
		merchant: "Outside Adventures",
		description: "<p>Camp in style with this 4-man tent styled like a Space-Faring Rocket. The tent is made with Gore-Tex, rendering it breathable yet waterproof. 4 Steel struts converge to give shape and support to the tent. The base of the tent is lined with a thicker fibre to add insulation and comfort to its inhabitants.</p>\
		<p>The entrance to the tent is ties in cleverly with the image of the rocket's escape hatch, ensuring you make your grand entrance (or escape) in style.</p>\
		<p>Gets yours today to enhance your adventures with the more futuristic tent!</p>\
		<p>Dimensions: 1.9m x 1.9m x 2.2m</p>\
		",
		img_urls: [{url:"img/products/Space Rocket Tent $422.jpg"}],
		comments: null,
		reviews: null
		},
MiaPinkFloralDress:
		{
		id: "MiaPinkFloralDress",
		name: "Mia Pink Based Floral Dress",
		price: 30.0,
		currency: "SGD",
		merchant: "All Would Envy",
		description: "<p>Good quality and comfortable material, Full inner lining, Concealed side zip</p>\
		<p>Size S: PTP: 15'-15.5' ;Waist: 12'-12.5' ;Length: 33'</p>\
		<p>Size M: PTP: 16'-16.5'; Waist: 13'-13.5'; Length: 33'</p>\
",
		img_urls: [{url:"img/products/Mia Pink-Based Floral Dress 30.jpg"},{url:"img/products/mia pink floral dress AWE.jpg"}],
		comments: null,
		reviews: null
		},
CrochetDaisySweater:
		{
		id: "CrochetDaisySweater",
		name: "Crochet Daisy Sweater",
		price: 35.60,
		currency: "SGD",
		merchant: "BangShotUDown",
		description: "<p>Floral crochet flower on quality material sweater, can be worn as top Colours: Black, White</p>\
<p>Shoulder - 14inches | Ptp - 26inches | Length - 26inches</p>\
<p>Fits a UK 6-8 (FREE SIZE)</p>\
<p>Model: Model is 160cm tall and wears a Size UK6</p>\
",
		img_urls: [{url:"img/products/Crochet Daisy Sweater Black 20.9.jpg"}],
		comments: null,
		reviews: null
		},
Jumpwithpuppet:
		{
		id: "Jumpwithpuppet",
		name: "Jump with the Puppet Handphone Pouch",
		price: 24.90,
		currency: "SGD",
		merchant: "PickAStory",
		description: "<p>Add color to your life with the wonderfully lively artwork on this handphone pouch from PickAStory. Made with PU leather and felt inner lining. Highly water and dirt resistant outer. Protect your handheld gadgets in style!</p>\
		<p>Handphone holder suitable for Samsung Note 3 or smaller phones. Dimensions (15.5 x 9 cm).</p>\
		",
		img_urls: [{url:"img/products/Jump with the puppet (samsung note 3 case) 24.90.jpg"}],
		comments: null,
		reviews: null
		},
IWCbigpilot:
		{
		id: "IWCbigpilot",
		name: "IWC Big Pilot Perpetual Calender 2011 Edition RoseGold",
		price: 18500.0,
		currency: "SGD",
		merchant: "IWC Schaffhausen",
		description: "<p>The Big Pilot Perpetual Calendar Edition 2011 in handsome 18-carat rose gold, meant as a tribute to pilot-poet Antoine de Saint-Exupéry, who will go down in history as the author of the beloved novella, Le Petit Prince.</p>\
<p>Limited to 250 pieces, the special edition with its distinctive black or sand beige dial is packed with stellar technical features, chief among them the IWC-manufactured 51614 calibre with Pellaton winding and seven-day power reserve, as well as a perpetual calendar with a four-digit year display.</p>\
<p>The gorgeous dial melds the Big Pilot’s characteristic cockpit-style design with the intricate display of the perpetual calendar - and comes complete with subtle aeroplane silhouettes to indicate the state of the moon in the northern and southern hemispheres. Those in the know will immediately recognize the piece as a very special collector's edition.</p>\
<ul>\
<li><strong>Reference IW5026</strong></li>\
<li><strong>Case Material:</strong> 18-carat rose gold</li>\
<li><strong>Bracelet/Strap:</strong> brown calfskin strap</li>\
<li><strong>Dial:</strong> Black or brown</li>\
<li><strong>Jewels:</strong> 62</li>\
<li>Calibre 51614</li>\
<li>Limited edition of 250 watches in 18-carat rose gold</li>\
<li>Mechanical movement</li>\
<li>Pellaton automatic winding</li>\
<li>7-day power reserve when fully wound</li>\
<li>Power reserve display</li>\
<li>Perpetual calendar with displays for the date, day, month, year in four digits and perpetual moon phase</li>\
<li>Small hacking seconds</li>\
<li>Glucydur®* beryllium alloy balance with high-precision adjustment cam on balance arms</li>\
<li>Breguet spring</li>\
<li>Rotor with engraving and 18-carat gold medallion</li>\
<li>Screw-in crown</li>\
<li>Sapphire glass, convex, antireflective coating on both sides</li>\
<li>See-through sapphire-glass back</li>\
<li>Water-resistant 6 bar</li>\
<li>Case height 16 mm</li>\
<li>Diameter 46 mm</li>\
</ul>",
		img_urls: [{url:"img/products/the-iwc-big-pilot-perpetual-calendar-edition-2011_4.jpg"},{url:"img/products/IWC bigpilot perpetual.jpg"}],
		comments: null,
		reviews: null
		},
Classicblazerladies:
		{
		id: "Classicblazerladies",
		name: "Ladies Classic Coco Blazer",
		price: 35,
		currency: "SGD",
		merchant: "Kayssa",
		description: "<p>This piece has the similar feel as the Burda 7303. As the style is so versatile, it can be worn for many years. Made of light-weighted wool boucle and lined it with a faux leather lining.</p>\
		<p>Available in Grey and White. The 2 versions has a slight difference: White has shimmering yarn in it, Grey is of a heavier material. Matching boucle shorts for white is also available.</p>\
<p>Size S measures 14inch shoulder width, 17inch PTP, 15inch waist, 9.5inch arm opening, 23inch at the sleeve, 19inch down.</p>\
<p>Size M measures 14.5inch shoulder width, 18inch PTP, 16inch waist, 10inch arm opening, 23.5inch at the sleeve, 19.5inch down.</p>\
<p>Model Karine stands at 160cm and a UK6/8.</p>\
",
		img_urls: [{url:"img/products/Classic Coco Blazer Grey 35.00.jpg"}],
		comments: null,
		reviews: null
		},
kingoftokyo:
		{
		id: "kingoftokyo",
		name: "King of Tokyo",
		price: 40.90,
		currency: "SGD",
		merchant: "Gamersaurus",
		description: "<p>King of Tokyo is a game from Richard Garfield for 2 to 6 players in which you will be able to play mutant monsters, gigantic robots and other aliens, all of whom are happily whacking each other in a joyous atmosphere in order to become the one and only King of Tokyo. When it is your turn to play, you throw six dice. Each die bears the following six symbols: 1, 2 or 3 Points of Destruction, Energy, Healing and Whack. In three successive throws, you are going to choose whether to keep or discard each die in order to come up with combinations that will enable you to win destruction points, hoard energy, restore your health or whack other players into understanding Tokyo is YOUR territory. The fiercest player will be crowned King of Tokyo... and will end up facing all the other monsters alone!</p>\
		<p>Top this off with special cards that you can purchase with energy and that have a permanent or temporary effect, such as the growing of a second head which grants you an additional die, body armor, nova death ray, and more.... and you hold one of the most explosive games of the year!</p>\
		<p>In order to win the game, one must either destroy Tokyo by accumulating 20 destruction points, or be the only surviving monster once the fighting has ended.</p>\
",
		img_urls: [{url:"img/products/king of tokyo 25.49.jpg"}],
		comments: null,
		reviews: null
		},
brickwatchstrap:
		{
		id: "brickwatchstrap",
		name: "Brick Full Leather Nato Watch Strap 22mm",
		price: 85,
		currency: "SGD",
		merchant: "Worn_Wound",
		description: "<p>22mm Leather NATO-styled Watch Strap cut and stitched by hand. Complete with matt black buckle rings and black threadings.</p>\
		<p>Fits all 22mm casewidths.</p>\
		<p>Designed and handmade in Ireland using Calf Leather and 6061-T6 Aluminium Alloy.</p>\
		",
		img_urls: [{url:"img/products/Brick Full Grain NYC NATO Watch Strap by Worn _ Wound 59.jpg"}],
		comments: null,
		reviews: null
		},
topmanshirt:
		{
		id: "topmanshirt",
		name: "Mens Contrast Checkered Slim",
		price: 79,
		currency: "SGD",
		merchant: "TOPMAN",
		description: "White long sleeve shirt with black-white checkered pattern lining on fly front, collar and cuffs. Clean and crisp.</p>\
		<p>100% Cotton.</p>\
		<p><strong>Sizes: S - XL</strong></p>\
		",
		img_urls: [{url:"img/products/Topman_ContrastCheckTrimShirt $79 2.jpg"},{url:"img/products/Topman_ContrastCheckTrimShirt $79.jpg"}],
		comments: null,
		reviews: null
		},
NarutoTee:
		{
		id: "NarutoTee",
		name: "Naruto Kyubi Seal Custom White Tee",
		price: 39.9,
		currency: "SGD",
		merchant: "POP Kulture",
		description: "<p>Keep your inner demons in check with this Custom Naruto Kyubi Seal Tee as you unleash your style and fanboy-ism on those around you.</p>\
		<p>100% cotton provides cool and comfort in the heat of battle. Ninja tested, Kage-approved.</p>\
		<p><strong>Sizes: XS - XXXL</strong></p>\ ",
		img_urls: [{url:"img/products/Naruto 9 Tails Seal Custom White T-Shirt Tee Size XS-XXL - T-Shirts 26 (colenank).jpg"}],
		comments: null,
		reviews: null
		},
womenlongformalshirt:
		{
		id: "womenlongformalshirt",
		name: "Ladies Long Sleeve Formal Shirt",
		price: 23.9,
		currency: "SGD",
		merchant: "DHGate",
		description: "Ladies Slim Cut shirt for every occasion. Narrow waistline and slanted left breastpocket helps to accentuate your body curves, while large collar flares to bring out a subtle masculine styling that will definitely highlight your feminism. Buttons spaced in tight groups of 3 for you to experiment with different necklines.</p>\
		<p>80% Cotton - 20% Synthetic Fibres</p>\
		<p><strong>Sizes: XS - L</strong></p>\
		",
		img_urls: [{url:"img/products/women long sleeve leisure Formal White shirt (23.86) DHGate.jpg"},{url:"img/products/1.0x0.jpg"},{url:"img/products/1.0x0 (1).jpg"},{url:"img/products/1.0x0 (2).jpg"},{url:"img/products/1.0x0 (3).jpg"},{url:"img/products/1.0x0 (4).jpg"}],
		comments: null,
		reviews: null
		},
poloralphlauren:
		{
		id: "poloralphlauren",
		name: "Polo Ralph Lauren Slimfit Polo Tee",
		price: 99.0,
		currency: "SGD",
		merchant: "Polo Ralph Lauren",
		description: "<p> This short-sleeved polo shirt is crafted from soft cotton mesh and designed with our modern slim-fitting silhouette. Tailored closer to the chest and waist than the Custom Fit, with slimmer arms and a shorter hem. Ribbed collar. Two-button placket. Short sleeves. Ribbed armbands. Uneven vented hem.</p>\
<p>Applied no.3 patch accents the right sleeve.</p>\
<p>Our signature embroidered Big Pony accents the left chest.</p>\
<p><strong>100% cotton.</strong> Machine washable. Imported.</p>\
<p><strong>Sizes: S - XXL</strong></p>\
",
		img_urls: [{url:"img/products/polo-ralph-lauren-white-slim-fit-polo-shirt-product-2-3177287-219127477_large_flex.jpeg"},{url:"img/products/polo-ralph-lauren-white-slim-fit-polo-shirt-product-3-3177287-157406102_large_flex.jpeg"},{url:"img/products/polo-ralph-lauren-white-slim-fit-polo-shirt-product-5-3177287-219102829_large_flex.jpeg"}],
		comments: null,
		reviews: null
		},
leathercollarDH:
		{
		id: "leathercollarDH",
		name: "Dior Homme LeatherNeck",
		price: 622.0,
		currency: "SGD",
		merchant: "Dior Homme",
		description: "<p>White cotton shirt with complementing tan leather collar from Dior Homme . Spread collar leads into a concealed button down front. Long sleeves with single button cuffs. Curved hemline. Leather dry clean only.</p>\
		<p><strong>Body: 100% cotton</strong></p>\
		<p><strong>Trim: 100% leather</strong></p>\
		<p><strong>Made in Italy</strong></p>\
		",
		img_urls: [{url:"img/products/diorhomme leathercollar $622.jpg"},{url:"img/products/diorhomme leathercollared $622 -2.jpg"}],
		comments: null,
		reviews: null
		},
mathsnerdwhitetee:
		{
		id: "mathsnerdwhitetee",
		name: "Maths Nerd Tee (white)",
		price: 39.9,
		currency: "SGD",
		merchant: "POP Kulture",
		description: "<p>Nothing screams NERD more than a secret message that only fellow geniuses can decipher! Complete the nerd look with a custom <strong>I 8 SUM PI</strong> tee today.</p>\
		<p>Made of 100% cotton. Also available in <strong>Black</strong> and <strong>Gray</strong>.</p>\
		<p><strong>Sizes: XS - XXL</strong></p>\
		",
		img_urls: [{url:"img/products/New I ATE SUM PIE Custom White T-Shirt math nerd science algebra Tee All Size - T-Shirts (39.9) colenank.jpg"}],
		comments: null,
		reviews: null
		},
basicwhiteslimfit:
		{
		id: "basicwhiteslimfit",
		name: "Mens Basic White Shirt regular",
		price: 37,
		currency: "SGD",
		merchant: "Bombayduck",
		description: "<p>There can never be enough white shirts in a man's wardrobe. Go back to basics with Bombayduck's Basic Mens regular cut shirt.</p>\
		<p>The shirt looks smart enough for work and casual enough for a good dinner gathering in the evening. Made to be comfortable with 100% cotton and matched with white buttons.</p>\
		<p><strong>Sizes: XS - XXL</strong></p>\ ",
		img_urls: [{url:"img/products/Basics white slimfit $37-3.jpg"},{url:"img/products/Basics white slimfit $37.jpg"},{url:"img/products/Basics white slimfit $37 -2.jpg"}],
		comments: null,
		reviews: null
		},
mightymug: 
		{
		id: "mightymug",
		name: "Mighty Mug (Grip Base Mug)",
		price: 29.9,
		currency: "SGD",
		merchant: "theheartdirector",
		merchant_url: "#",
		description: "<p>The Mighty Mug features a Smart-Grip technology that latches on to your desk by creating a powerful airlock and prevents clumsy spills. When you pick up the cup by the soft ergonomic handle, however, it lifts up effortlessly.</p>\
		<p>To activate the Mighty Mug's Smartgrip base &#45; Bend and flex the grippy pad with your fingers. If the mug starts to lose its grippiness, simply repeat the flexing process.</p>\
		<p>Only works on flat surfaces</p>\
		<p>Microwave safe (remove the lid first)</p>\
		<p>Inner body and lid are both top rack dishwasher safe</p>\
		<p>Measures approximately 14cm(W) x 16cm(H) x 10cm(D)</p><br>\
		<p><strong>Please allow 1 week for shipping.</strong></p> ",
		img_urls: [{url:"img/products/Mighty Mug 01.jpg"}, {url:"img/products/Mighty Mug 02.jpg"}, {url:"img/products/Mighty Mug 03.jpg"}, {url:"img/products/Mighty Mug 04.jpg"}, {url:"img/products/Mighty Mug 05.jpg"}],
		comments: [{	commenter: "Farhan Herab",
						merchant: false,
						img_url: "img/sonic.jpg",
						comment: "this is so cool! how much liquid can it store?"
					},
					{	commenter: "theheartdirector",
						merchant: true,
						img_url: "img/sonic.jpg",
						comment: "Hi Farhan, thanks for your interest! This is a 450ml mug."
					},
					{	commenter: "Wanhui",
						merchant: false,
						img_url: "img/sonic.jpg",
						comment: "I just got this mug yesterday! It's grip is indeed wonderful!"
					},
					{	commenter: "Mighty Mouse",
						merchant: false,
						img_url: "img/sonic.jpg",
						comment: "Mighty indeed."
					}
					],
		reviews: [	{	reviewer: "Frank Thompson",
						review: "Simply Ingenious. The most useful mug I will ever need"},
					{	reviewer: "Sally Anderson",
						review: "I have sweaty palms and this mug is just what I needed"},
					{	reviewer: "TheProductMagazine",
						review: "Practical design with a touch of elegance"}
					],
		},
SonyNex7:
		{
		id: "SonyNex7",
		name: "Sony Alpha NEX-7 Mirrorless Camera",
		price: 1549,
		currency: "SGD",
		merchant: "Sony",
		description: "<p>Experience speed and style meet performance and control with the &#945;  NEX-7, \
		which comes with a large APS-C size sensor to produce superb, high-quality images. \
		It features the world's fastest release time lag of 0.02 second and high-speed AF for lightning-quick response.</p>\
		<ul>\
		<li>Ultra-High 24.3MP \"Exmor\" APS HD CMOS sensor</li>\
		<li>World's fastest release time lag of 0.02 second (as of August 2011)</li>\
		<li>Customizable and intuitive TRINAVI operation</li>\
		<li>High resolution XGA OLED Tru-Finder and built-in flash</li>\
		<li>10fps continuous shooting (Speed priority continuous mode)</li>\
		<br><br><br><br>\
		",
		img_urls: [{url:"img/products/Sony Nex 7 (1).jpg"},{url:"img/products/Sony Nex 7 (2).jpg"},{url:"img/products/Sony Nex 7 (3).jpg"},{url:"img/products/Sony Nex 7 (4).jpg"},{url:"img/products/Sony Nex 7 (5).jpg"},{url:"img/products/Sony Nex 7 (6).jpg"},{url:"img/products/Sony Nex 7 (7).jpg"},{url:"img/products/Sony Nex 7 (8).jpg"},{url:"img/products/Sony Nex 7 (9).jpg"}],
		comments: null,
		reviews: null
		}
};

Data.timeline = function () {
	var that = {};
	that.everything = [];
	for (var product in Data.products) {
		that.everything.push({product: Data.products[product]});
	}
	that.everything.shift();

	return that;
}();

Data.search = {
	results: [
		{
			product: Data.products['topmanshirt']
		},
		{
			product: Data.products['NarutoTee']
		},
		{
			product: Data.products['womenlongformalshirt']
		},
		{
			product: Data.products['poloralphlauren']
		},
		{
			product: Data.products['leathercollarDH']
		},
		{
			product: Data.products['mathsnerdwhitetee']
		},
		{
			product: Data.products['basicwhiteslimfit']
		},
		{
			product: Data.products['CrochetHighNeck']
		},
		{
			product: Data.products['WhiteLaceTop']
		},
		{
			product: Data.products['Owlhalfsleeve']
		},
		{
			product: Data.products['WhiteEmbroideredDress']
		},
		{
			product: Data.products['Tuxedotee']
		}
	]
}

Data.clipping = {
	total: 0,
	items: [
		{
			product: Data.products['SonyNex7']
		},
		{
			product: Data.products['spacerockettent']
		}
	]
}

Data.owned = {
	total: 1
}

Data.owned.ownedlist_items = [
	Data.products.brickwatchstrap
]

Data.fravlist = [
{
	product: Data.products.mightymug,
	fravCount: 3
},
{
	product: Data.products.brickwatchstrap,
	fravCount: 14
},
{
	product: Data.products.basicwhiteslimfit,
	fravCount: 0,
},
{
	product: Data.products.Sandwichcutter,
	fravCount: 1,
},
{
	product: Data.products.kingoftokyo,
	fravCount: 6
},
{
	product: Data.products.NarutoTee,
	fravCount: 3
},
{
	product: Data.products.IWCbigpilot,
	fravCount: 0
},
{
	product: Data.products.CannondaleRacer,
	fravCount: 1
}
]
Data.fravlist[0].product.discount = -50;
Data.fravlist[0].comments = {
	total: 2,
	commentList: [
		{
			user: Data.users.Jesslyn,
			time: (new Date).setHours((new Date).getHours()-2),
			comment: "Nice"
		},
		{
			user: Data.users.Sera,
			time: (new Date).setDate((new Date).getDate()-3),
			comment: "I have one in my office!"
		},
	]
}
Data.fravlist[0].comments = {
	total: 2,
	commentList: [
		{
			user: Data.users.Jesslyn,
			time: (new Date).setHours((new Date).getHours()-2),
			comment: "Nice"
		},
		{
			user: Data.users.Sera,
			time: (new Date).setDate((new Date).getDate()-3),
			comment: "I have one in my office!"
		},
	]
}
Data.fravlist[1].desc = "Love the watch";
Data.fravlist[4].desc = "Gaming sessions!";

Data.chat = [ 
	{	conversation_name: "Jesslyn, Cynthia & Me",
		conversation_participants: [	
		Data.users.Jesslyn,
		Data.users.Cynthia],
		conversation_msges: [
			{	by: "Jesslyn",
				msg: "Hi guys, need your help!",
				unread: 0},
			{	by: "Cynthia",
				msg: "Yes?",	
				unread: 0},
			{	by: "Jesslyn",
				msg: "I am invited for diners en blanc next month and I need a white shirt!",
				unread: 0},
			{	by: "Jesslyn",
				msg: "I saw a few pieces of white tops, but I can't really decide.. =(",
				unread: 0},
			{	by: "Paklun",
				msg: "Sure, show us what you've picked!",
				unread: 0},
			{	by: "Jesslyn",
				msg: "\
				<div class=\"row\">\
				<div class=\"col-xs-10 col-xs-offset-1\">\
					<div class=\"col-xs-4\">\
						<a href=\"product.htm?product=WhiteLaceTop\" title=\""+Data.products.WhiteLaceTop.name+"\">\
							<img src=\""+Data.products.WhiteLaceTop.img_urls[0].url+"\" class=\"img-responsive border-radius-5\" style=\"height:209px;\">\
							<div class=\"tc text-ellipsis ptop10\">"+Data.products.WhiteLaceTop.name+"</div>\
							<div class=\"tl ptop5\">"+Data.products.WhiteLaceTop.price+" "+Data.products.WhiteLaceTop.currency+"</div>\
						</a>\
					</div>\
					<div class=\"col-xs-4\">\
						<a href=\"product.htm?product=womenlongformalshirt\" title=\""+Data.products.womenlongformalshirt.name+"\">\
							<img src=\""+Data.products.womenlongformalshirt.img_urls[0].url+"\" class=\"img-responsive border-radius-5\" style=\"height:209px;\">\
							<div class=\"tc text-ellipsis ptop10\">"+Data.products.womenlongformalshirt.name+"</div>\
							<div class=\"tl ptop5\">"+Data.products.womenlongformalshirt.price+" "+Data.products.womenlongformalshirt.currency+"</div>\
						</a>\
					</div>\
					<div class=\"col-xs-4\">\
						<a href=\"product.htm?product=Owlhalfsleeve\" title=\""+Data.products.Owlhalfsleeve.name+"\">\
							<img src=\""+Data.products.Owlhalfsleeve.img_urls[0].url+"\" class=\"img-responsive border-radius-5\" style=\"height:209px;\">\
							<div class=\"tl text-ellipsis ptop10\">"+Data.products.Owlhalfsleeve.name+"</div>\
							<div class=\"tl ptop5\">"+Data.products.Owlhalfsleeve.price+" "+Data.products.Owlhalfsleeve.currency+"</div>\
						</a>\
					</div>\
				</div>\
				</div>\
				",
				unread: 1},
			{	by: "Cynthia",
				msg: "I like the Owl Print. My taste haha :P",	
				unread: 1},
		],
		active:true
	},
	{	conversation_name: "Wenting",
		conversation_participants: [
			Data.users.wenting],
		conversation_msges: [
			{	by: "Wenting",
				msg: "eh.",
				unread: 0},
			{	by: "Wenting",
				msg: "Did you get the gift for christmas exchange?",
				unread: 0},
			{	by: "Paklun",
				msg: "No man, the item is simply too filmsy looking to be $20.",
				unread: 0},
		]
	},
	{	conversation_name: "Jiahe",
		conversation_participants: [
			Data.users.jiahe],
		conversation_msges: [
			{	by: "Paklun",
				msg: "Hey jiahe..",
				unread: 0},
			{	by: "Jiahe",
				msg: "Yes pak?",
				unread: 0},
			{	by: "Paklun",
				msg: "My D90 sucks, i'm thinking of getting a new camera.",
				unread: 0},
			{	by: "Paklun",
				msg: "Don't know what to get. I've got 3 lenses now but a DSLR is rather bulky for my adventures.",
				unread: 0},
			{	by: "Paklun",
				msg: "Think i'm venturing into video-ing more than still photography...",
				unread: 0},
			{	by: "Jiahe",
				msg: "Maybe you can look at micro 4/3s and adapt your lenses..",
				unread: 1},
			{	by: "Jiahe",
				msg: "Or you can try Sony Nex Mirrorless Series. APSC sensor. Good stuff. I share you the link and you can take a look and buy.",
				unread: 1},
			{	by: "Jiahe",
				msg: "\
				<div class=\"row\">\
				<div class=\"col-xs-10 col-xs-offset-1\">\
					<div class=\"col-xs-4 \">\
						<a href=\"product.htm?product=SonyNex7\" title=\""+Data.products.SonyNex7.name+"\">\
							<img src=\""+Data.products.SonyNex7.img_urls[0].url+"\" class=\"img-responsive border-radius-5\">\
							<div class=\"tc text-ellipsis ptop10\">"+Data.products.SonyNex7.name+"</div>\
							<div class=\"tl ptop5\">"+Data.products.SonyNex7.price+" "+Data.products.SonyNex7.currency+"</div>\
						</a>\
					</div>\
					<div class=\"col-xs-8\" style=\"height: 154px; overflow:hidden;\">\
						<div>"+Data.products.SonyNex7.description+"</div>\
					</div>\
				</div>\
				</div>",
				unread: 1},
			{	by: "Jiahe",
				msg: "I heard Wenting has a Nex 5R. You can ask him about it",
				unread: 1},
		]
	},
	{	conversation_name: "Samantha",
		conversation_participants: [
			Data.users.Samantha],
		conversation_msges: [
			{	by: "Paklun",
				msg: "Hello there.",
				unread: 0},
			{	by: "Paklun",
				msg: "Nice display pic. Is that a new hat you bought?",
				unread: 0},
			{	by: "Samantha",
				msg: "Hey thanks! Yes it is!",
				unread: 1},
		]
	},
	{	conversation_name: "Dumbcyclers",
		conversation_participants: [
			Data.users.wenting,
			Data.users.jiahe,
	 		Data.users.alexkhow,
			Data.users.Max,
			Data.users.paklun],
		conversation_msges: [
			{	by: "Wenting",
				msg: "Hi.",
				unread: 0},
			{	by: "Jiahe",
				msg: "Testing..",
				unread: 0},
			{	by: "Alex",
				msg: "Seeing.",
				unread: 0},
			{	by: "Max",
				msg: "Seen.",
				unread: 0},
			{	by: "Paklun",
				msg: "Saw.",
				unread: 0},
			{	by: "Wenting",
				msg: "Dumb! Lol!",
				unread: 1},
			{	by: "Alex",
				msg: "So what'sup?",
				unread: 1},
		]
	},
	{	conversation_name: "Fravr Chatting System",
		conversation_participants: [
			Data.users.wenting,
			Data.users.Max,
			Data.users.paklun],
		conversation_msges: [
			{	by: "Wenting",
				msg: "I think the chat system very hard to code.",
				unread: 0},
			{	by: "Max",
				msg: "Err..",
				unread: 0},
			{	by: "Paklun",
				msg: "We can just adopt the free IM ajax codes...but restrictions..",
				unread: 0},
			{	by: "Wenting",
				msg: "Link some of them and see..",
				unread: 0},
			{	by: "Paklun",
				msg: "<a href=\"http://ajaxim.com/\"> http://ajaxim.com/</a>",
				unread: 0},
			{	by: "Wenting",
				msg: "Hmm...",
				unread: 0},
			{	by: "Max",
				msg: "Actually ... I can code from ground up.",
				unread: 0},
			{	by: "Paklun",
				msg: "K!",
				unread: 0},
			{	by: "Wenting",
				msg: "Win.",
				unread: 0},
		]
	},
	{	conversation_name: "Max's Birthday Gift",
		conversation_participants: [
			Data.users.wenting,
			Data.users.Sera,
			Data.users.paklun,
			Data.users.jiahe,
			Data.users.alexkhow,
			Data.users.Genevieve,
			Data.users.Jesslyn,
			Data.users.Cynthia,
			Data.users.Theresa],
		conversation_msges: [
			{	by: "Sera",
				msg: "Hey guys, Max's birthday is coming! Lets get him something!",
				unread: 0},
			{	by: "Jesslyn",
				msg: "Good Idea! What does he want?",
				unread: 0},
			{	by: "Sera",
				msg: "Go check out his fravlist!",
				unread: 0},
			{	by: "Wenting",
				msg: "Wow ok! Count me in!",
				unread: 0},
			{	by: "Wenting",
				msg: "Hope we can get him something useful..",
				unread: 0},
			{	by: "Jiahe",
				msg: "Are we surprising him too? Count prawnie in!",
				unread: 0},
			{	by: "Paklun",
				msg: "I'm in, looking at his fravlist now...",
				unread: 0},
			{	by: "Jesslyn",
				msg: "Just clipped some from his fravlist, we'll get one of these ok?",
				unread: 1},
			{	by: "Jesslyn",
				msg: "\
				<div class=\"row\">\
				<div class=\"col-xs-10 col-xs-offset-1\">\
					<div class=\"col-xs-4\">\
						<a href=\"product.htm?product=NarutoTee\" title=\""+Data.products.NarutoTee.name+"\">\
							<img src=\""+Data.products.NarutoTee.img_urls[0].url+"\" class=\"img-responsive border-radius-5\">\
							<div class=\"tc text-ellipsis ptop10\">"+Data.products.NarutoTee.name+"</div>\
							<div class=\"tl ptop5\">"+Data.products.NarutoTee.price+" "+Data.products.NarutoTee.currency+"</div>\
						</a>\
					</div>\
					<div class=\"col-xs-4\">\
						<a href=\"product.htm?product=CannondaleRacer\" title=\""+Data.products.CannondaleRacer.name+"\">\
							<img src=\""+Data.products.CannondaleRacer.img_urls[0].url+"\" class=\"img-responsive border-radius-5\">\
							<div class=\"tc text-ellipsis ptop10\">"+Data.products.CannondaleRacer.name+"</div>\
							<div class=\"tl ptop5\">"+Data.products.CannondaleRacer.price+" "+Data.products.CannondaleRacer.currency+"</div>\
						</a>\
					</div>\
					<div class=\"col-xs-4\">\
						<a href=\"product.htm?product=spacerockettent\" title=\""+Data.products.spacerockettent.name+"\">\
							<img src=\""+Data.products.spacerockettent.img_urls[0].url+"\" class=\"img-responsive border-radius-5\">\
							<div class=\"tl text-ellipsis ptop10\">"+Data.products.spacerockettent.name+"</div>\
							<div class=\"tl ptop5\">"+Data.products.spacerockettent.price+" "+Data.products.spacerockettent.currency+"</div>\
						</a>\
					</div>\
				</div>\
				</div>\
				",
				unread: 1},
			{	by: "Alex",
				msg: "Wah fruck so costly!",
				unread: 1},
			{	by: "Wenting",
				msg: "The bike looks good but... $5300.. <p class=\"ptop5\">The tent doesn't looks all too useful all the time eh..</p>",
				unread: 1},
			{	by: "Jiahe",
				msg: "I think can get the 'Naruto Kyubi Seal Custom White Tee' plus some food!",
				unread: 1},
			{	by: "Cynthia",
				msg: "Good idea..he loves food",
				unread: 1},
			{	by: "Genevieve",
				msg: "Settled then!",
				unread: 1},
			{	by: "Sera",
				msg: "OK..I'm getting size L 'Naruto Kyubi Seal Custom White Tee' then. Someone get the food hamper!",
				unread: 1},
		]
	},
]

Data.chat_current = Data.chat[0];
