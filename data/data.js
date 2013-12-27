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
		img_url: 'img/users/pak lun.jpg',
		fravs: 10
	},
	wenting: {
		name: 'Wen Ting',
		img_url: 'img/users/wenting.jpg',
		fravs: 6
	},
	jiahe: {
		name: 'Jiahe',
		img_url: 'img/users/jiahe.jpg',
		fravs: 10
	},
	alexkhow: {
		name: 'Alex',
		img_url: 'img/users/alex.jpg',
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
		img_url: 'img/users/max.jpg',
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
		img_url: 'img/users/ColinTan.jpg',
		fravs: 10
	},
	yuri: {
		name: 'Yuri',
		img_url: 'img/users/yuri.jpg',
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
		img_url: 'img/users/sethrogen.jpg',
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
		img_url: 'img/users/JulieBowen.jpg',
		fravs: 8
	},
	Hyori: {
		name: 'Lee Hyori',
		img_url: 'img/users/Hyorilee.jpg',
		fravs: 10
	},
	TakuyaS: {
		name: 'Takuya Shimizu',
		img_url: 'img/users/TakuyaS.jpg',
		fravs: 14
	},
	Boa: {
		name: 'BoA',
		img_url: 'img/users/BoA.jpg',
		fravs: 20
	},
	takeshi: {
		name: 'Takeshi Kaneshiro',
		img_url: 'img/users/takeshiro.jpg',
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
		img_url: 'img/users/kleine.jpg',
		fravs: 16
	},
	priya: {
		name: 'Priya',
		img_url: 'img/users/priya.jpg',
		fravs: 44
	},
	xiaoqian: {
		name: 'Xiao Qian',
		img_url: 'img/users/xiaoqian.jpg',
		fravs: 62
	},
	bridgette: {
		name: 'Bridgette',
		img_url: 'img/users/bridgette.jpg',
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
		id: "mightymug:",
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

Data.clipping = {
	total: 0
}

Data.owned = {
	total: 1
}

Data.owned.ownedlist_items = [
	Data.products.brickwatchstrap
]

Data.fravlist = [
	Data.products.mightymug,
	Data.products.brickwatchstrap,
	Data.products.basicwhiteslimfit,
	Data.products.Sandwichcutter,
	Data.products.kingoftokyo,
	Data.products.NarutoTee,
	Data.products.IWCbigpilot,
	Data.products.CannondaleRacer
]
//Default data end

Data.chat = [ 
	{	conversation_name: "chat 01",
		conversation_participants: [
			Data.users.wenting,
			Data.users.Sera,
			Data.users.Max,			],
		conversation_msges: [
			{	by: "Wen Ting",
				msg: "Test01"	},
			{	by: "Max",
				msg: "Test01"	},
			{	by: "Pak Lun",
				msg: "Test01"	},
		]
	},
	{	conversation_name: null,
		conversation_participants: [
			Data.users.wenting,
			Data.users.Sera,
			Data.users.Max,			],
		conversation_msges: [
			{	by: "Alex",
				msg: "Test01"	},
			{	by: "Jiahe",
				msg: "Test01"	},
			{	by: "Sheena",
				msg: "Test01"	},
		]
	}
]