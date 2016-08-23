var app = angular.module('cities', []);

app.controller('CitiesController', function() {

    this.cities = data;

        
});


var data = [{
			"city": "Charlotte",
			"cityFlag": "/graphics/christmas_icons-charlotte.svg",
			"image": "/images/pic-ratio.png",
			"icon-animation": "",
			"position": {
				"top": "325px",
				"left": "720px"
				},
			"categories": [
				{
				"categoryType": "Light Show",
				"id": 10,
				"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
				"events": [
					{
					"name": "Speedway Christmas",
					"address": "5555 Concord Pkwy S, Concord, NC 28027",
					"position":{
						"top": "370px",
						"left": "770px"
					},
					"image": "/images/charlotte_motor_speedway.jpg",
					"imageCredit": "© Patrick Schneider",
					"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
					"description": "sdkjfklsajfdkladjflkdjsf.",
					"dates": "example",
					"googleMaps": "",
					"webLink": "charlottemotorspeedway.com"
					},
					{
					"name": "McAdenville",
					"address": "100 Main Street, McAdenville, NC 28101",
					"position":{
						"top": "350px",
						"left": "695px"
					},
					"image": "/images/mcadenville.jpg",
					"imageCredit": "© Henderson Properties",
					"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
					"description": "The quiet little town of McAdenville, which lies along the South Fork River in Gaston County  N.C., comes alive in spectacular fashion each year as Christmas draws near.  Almost overnight, the small textile town is transformed into Christmas Town, USA. While much emphasis has been placed on the lighting of trees, this represents only a portion of the effort that goes into the preparation for Christmas.   The town residents play a big part as they decorate their doors in original styles according to their own personal feelings.  This gives a special expression of “Best Wishes for a Merry Christmas” from the townspeople to their visitors. ",
					"dates": "Dec 1st - Dec 26th",
					"googleMaps": "",
					"webLink": "charlottemotorspeedway.com"
					},
					{
					"name": "Panthers Tree-Lighting",
					"address": "800 S Mint St, Charlotte, NC 28202",
					"position":{
						"top": "410px",
						"left": "750px"
					},
					"image": "/images/panthers_tree_lighting.jpg",
					"imageCredit": "© Mark Hames | Charlotte Observer",
					"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
					"description": "sdkjfklsajfdkladjflkdjsf.",
					"dates": "example",
					"googleMaps": "",
					"webLink": "http://www.panthers.com/schedule/calendar.html"
					},
					{
					"name": "A Kannapolis Christmas",
					"address": "700 W C St, Kannapolis, NC 28081",
					"position":{
						"top": "315px",
						"left": "775px"
					},
					"image": "/images/kannapolis_christmas.jpg",
					"imageCredit": "© DowntownKannapolis.org",
					"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
					"description": "Check back soon for 2016 details!",
					"dates": "Nov 28 - ",
					"googleMaps": "",
					"webLink": "https://kannapolischristmas.com/"
					}
				],
				},
				{
				"categoryType": "Tour",
				"id": 20,
				"categoryIcon": "/graphics/christmas_icons-tours.svg",
				"events": [
					{
					"name": "Fourth Ward Holiday Home Tour",
					"address": "Fourth Ward, Charlotte, NC 29202",
					"position":{
						"top": "385px",
						"left": "770px"
					},
					"image": "/images/fourth-ward-christmas.jpg",
					"imageCredit": "© Friends of Fourth Ward",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "This walkable, self-guided tour includes admission to a variety of private homes in Fourth Ward, all beautifully decorated for the season. Throughout the weekend, choirs and hand bell ensembles will perform seasonal music on the porches of neighborhood homes. Tour guests also will receive complimentary horse and carriage rides throughout the neighborhood, wine, food and beer samplings (while they last), tasty treats from selected Center City restaurants, and special holiday surprises at the 7th Street Public Market.",
					"dates": "TBD - Check back soon!",
					"googleMaps": "",
					"webLink": "http://www.fofw.org/#!holidayhometour/cc6x"
					},
					{
					"name": "Downtown Christmas Village",
					"address": "Main Street, Belmont, NC 28012",
					"position":{
						"top": "350px",
						"left": "676px"
					},
					"image": "/images/belmont-village.jpg",
					"imageCredit": "© City of Belmont",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "Celebrate the season with carolers, apple cider and cookies as you stroll along historic downtown Belmont's Main Street during a festive evening of shopping and seasonal activities. Event to include giveaways, food vendors, horse-drawn carriage rides, Santa and more.",
					"dates": "Dec 9",
					"googleMaps": "",
					"webLink": "http://www.cityofbelmont.org/"
					},
					{
					"name": "Christmas in Davidson",
					"address": "South Main Street, Davidson, NC 28036",
					"position":{
						"top": "315px",
						"left": "740px"
					},
					"image": "/images/davidson-downtown.jpg",
					"imageCredit": "© Lake Norman Living",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "An annual tradition since 1988, Christmas in Davidson kicks off the holiday season offering the young and the young-at-heart three magical nights of holiday family fun! As the largest and most popular Davidson event, Christmas in Davidson will immediately put you into the holiday spirit. With an estimated attendance of 20,000+ each year, Christmas in Davidson offers you and your loved ones the opportunity to make holiday memories. Take a ride on the trolley, stroll down beautiful and picturesque Main Street, start your holiday shopping early at the many wonderful and unique specialty shops, take a journey through the Holiday Village of vendors on the Village Green and enjoy a wide variety of entertainment on the Library Stage.",
					"dates": "Nov - Dec",
					"googleMaps": "",
					"webLink": "http://www.christmasindavidson.com/"
					},
					{
					"name": "Holiday at the Garden at DSBG",
					"address": "6500 S New Hope Rd, Belmont, NC 28012",
					"position":{
						"top": "400px",
						"left": "730px"
					},
					"image": "/images/DSBG-christmas.jpg",
					"imageCredit": "© Greg Briley Photography",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "Winter glistens as dazzling lights dance throughout the garden this holiday season. Holidays at the Garden, a must-see family, decade-old tradition for thousands of all ages, is a magical time of year when the trees twinkle, the fountains sparkle, and botanical-themed displays glisten among the natural beauty of the winter Garden.",
					"dates": "example",
					"googleMaps": "",
					"webLink": "http://www.dsbg.org/"
					},
					{
					"name": "100 Years of Christmas",
					"address": "5225 Sample Rd, Huntersville, NC 28078",
					"position":{
						"top": "355px",
						"left": "715px"
					},
					"image": "/images/latta-plantation.jpg",
					"imageCredit": "© Lake Norman Magazine",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "Skip out on the hectic black-Friday shopping and instead bring your family to Historic Latta Plantation for a day full of holiday cheer.  Open both the Friday and Saturday after Thanksgiving for the annual Christmas living history event which is sure to be a highlight of the season. See the circa 1800 plantation home and buildings decorated in period holiday décor. See dressed re-enactors as they demonstrate primitive activities in preparation for the Christmas holiday. See how festivities changed within the one hundred years between the colonial days to the antebellum ways. Fun for the entire family! Picnicking available.",
					"dates": "Nov 25 - Nov 26",
					"googleMaps": "",
					"webLink": "http://www.lattaplantation.org/"
					},
					{
					"name": "Gingerbread Lane",
					"address": "10000 Ballantyne Commons Pkwy, Charlotte, NC 28277",
					"position":{
						"top": "430px",
						"left": "780px"
					},
					"image": "/images/ballantyne.jpg",
					"imageCredit": "© 2012 The Bissell Companies, Inc.",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "Vote on your favorite gingerbread creation. $1 for each time you vote. All proceeds will benefit the Levine Children's Hospital.",
					"dates": "TBD - Check back soon!",
					"googleMaps": "",
					"webLink": "http://www.theballantynehotel.com/"
					}
				],
				},
				{
				"categoryType": "Production",
				"id": 30,
				"categoryIcon": "/graphics/christmas_icons-production.svg",
				"events": [
					{
					"name": "The Nutcracker",
					"address": "130 N Tryon St, Charlotte, NC 28202",
					"position":{
						"top": "400px",
						"left": "760px"
					},
					"image": "/images/nutcracker-belk2.jpg",
					"imageCredit": "© Charlotte Theater",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "The story of The Nutcracker was originally written by E.T.A. Hoffmann however the beautiful score which accompanies this world-famous ballet was created by Tchaikovsky and received its debut over 100 years ago in 1892. A evening spent at a performance of this enchanting Holiday classic by your local ballet company is the perfect way to welcome in Christmas with the whole family!",
					"dates": "Dec 3 - Dec 23",
					"googleMaps": "",
					"webLink":  "http://charlotteballet.org/tickets/nutcracker/#performancedetails"
					},
					{
					"name": "Charlotte Symphony: Magic of Christmas",
					"address": "130 N Tryon St, Charlotte, NC 28202",
					"position":{
						"top": "400px",
						"left": "770px"
					},
					"image": "/images/magic-of-christmas.jpg",
					"imageCredit": "© Charlotte Symphony",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "Join your Charlotte Symphony for an all new Magic of Christmas with a special appearance by Santa Claus. This festive celebration features holiday favorites such as Sleigh Ride, Jingle Bells, We Need A Little Christmas, plus rousing sing-alongs and much more.",
					"dates": "Dec 9 - Dec 10",
					"googleMaps": "",
					"webLink":  "http://www.charlottesymphony.org/"
					},
					{
					"name": "The 62nd Annual Singing Christmas Tree",
					"address": "430 S Tryon St, Charlotte, NC 28202",
					"position":{
						"top": "400px",
						"left": "748px"
					},
					"image": "/images/singing-tree.jpg",
					"imageCredit": "© Patrick Schneider",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "One of Charlotte’s grandest holiday traditions, The Singing Christmas Tree will offer a glittering performance of music, song, dance, puppetry, and comedy. This year’s theme is “Home for the Holidays” and indeed that’s where we’ll be – in our new home, the Knight Theater. Come celebrate and enjoy the music, dancing, and the thrill of a new tradition as we bring the show to Uptown Charlotte.",
					"dates": "Dec 10 - Dec 11",
					"googleMaps": "",
					"webLink": "http://www.carolinavoices.org/"
					},
					{
					"name": "Holiday Jazz at the Bechtler",
					"address": "420 S Tryon St, Charlotte, NC 28202",
					"position":{
						"top": "400px",
						"left": "785px"
					},
					"image": "/images/jazz.jpg",
					"imageCredit": "© Laura Mueller",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "Get in the holiday spirit with jazzy renditions of seasonal classics at the Bechtler Museum of Modern Art.",
					"dates": "example",
					"googleMaps": "",
					"webLink": "http://www.bechtler.org/Programs/Jazz-at-the-bechtler"
					},
					{
					"name": "The Best Christmas Pageant Ever",
					"address": "300 E 7th St, Charlotte, NC 28202",
					"position":{
						"top": "400px",
						"left": "795px"
					},
					"image": "/images/christmas-pageant.jpg",
					"imageCredit": "© Childrens Theater of Charlotte",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "What happens when the worst kids in the history of the world find out there are free snacks at Sunday school? They decide to audition for the annual Christmas pageant! The Herdmans have taken over the holiday and insist on playing all the good parts. It’s disgraceful! They’ve never heard the Christmas story, and have no idea who Mary, Joseph or the wise men are. Will the pageant be canceled? Will the other kids even show up to participate? Will this be the worst pageant ever? This brand new musical comedy, adapted from Barbara Robinson’s classic book, makes its world premiere at Children’s Theatre of Charlotte just in time for the holidays.",
					"dates": "Dec 25 - Dec 23",
					"googleMaps": "",
					"webLink": "https://www.ctcharlotte.org/Online/default.asp"
					}
				],
				},
				{
				"categoryType": "Celebration",
				"id": 40,
				"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
				"events": [
					{
					"name": "Weihnachtsmarkt",
					"address": "4150 Yancey Rd, Charlotte, NC 28217",
					"position":{
						"top": "390px",
						"left": "750px"
					},
					"image": "/images/omb-market.jpg",
					"imageCredit": "© Old Mecklenburg Brewery",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "The Olde Mecklenburg Brewery’s 8th Annual Weihnachtsmarkt returns to the Biergarten this December! Weihnachtsmarkt is our version of a traditional, German-inspired “Christmas Market” with open air booths selling gifts and baked goods from local, Charlotte vendors. Our Winter seasonal beers — Dunkel, Bauern Bock, and Yule Bock — will all be on tap, along with our homemade Glühwein: a delicious, spiced red wine served hot and fresh.",
					"dates": "TBD - Check back soon!",
					"googleMaps": "",
					"webLink": "http://www.oldemeckbrew.com/"
					},
					{
					"name": "Winter Market",
					"address": "820 Hamilton St, Charlotte, North Carolina 28206",
					"position":{
						"top": "370px",
						"left": "755px"
					},
					"image": "/images/vtg-clt-market.jpg",
					"imageCredit": "© Vintage Charlotte",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "Vintage Charlotte is popping up at The Fillmore Charlotte for the fifth annual Winter Market! Come out and spend the day shopping with over 60 of the region’s best vintage & handmade vendors.",
					"dates": "TBD - Check back soon!",
					"googleMaps": "",
					"webLink": "http://vintage-charlotte.com/"
					},
					{
					"name": "Christmas at the Library",
					"address": "4330 Westmont Dr, Charlotte, NC 28217",
					"position":{
						"top": "405px",
						"left": "770px"
					},
					"image": "/images/bg-library.jpg",
					"imageCredit": "© Billy Graham Evangelistic Association",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "Christmas is a special time at the Billy Graham Library with plenty of family-friendly attractions to celebrate the birth of Christ. The main activities include a Live Nativity, Horse-drawn Carriage Rides, Story Time, Christmas Dinner and Christmas Carolers.",
					"dates": "TBD - Check back soon!",
					"googleMaps": "",
					"webLink": "http://billygrahamlibrary.org/"
					},
					{
					"name": "Southern Christmas Show",
					"address": "2500 E Independence Blvd, Charlotte, NC 28205",
					"position":{
						"top": "400px",
						"left": "760px"
					},
					"image": "/images/scs.jpg",
					"imageCredit": "© Charlotte Agenda",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "What do you get when you combine an Olde Town filled with charming shops, Festive music, Smiling faces, Crafts galore, Yummy food, Holiday decor, Local wines, Santa, Over 400 holiday merchants with gifts for all ages, …and enough fun to last all year? You get the 49th annual Southern Christmas Show, this year celebrating a Carolina Christmas …All under one roof, and waiting to welcome you.",
					"dates": "Nov 10 - Nov 20",
					"googleMaps": "",
					"webLink": "https://southernshows.com/scs"
					},
					{
					"name": "ChristmasVille",
					"address": "139 E Main St, Rock Hill, SC 29730",
					"position":{
						"top": "450px",
						"left": "740px"
					},
					"image": "/images/rock-hill-christmasville.jpg",
					"imageCredit": "© Town of Rock Hill",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "Once again, “Old Town” Rock Hill will come alive as a charming, picturesque holiday village and outdoor art festival. The 11th annual ChristmasVille will take place December 1 - December 4, 2016. This award winning festival has over 70 events including horse drawn carriage rides, historic tours, strolling Dickens carolers, art, theater, dance, music, a gingerbread house contest, multiple Santa activities, and a REAL ice skating rink! We hope to see you at ChristmasVille 2016!",
					"dates": "Dec 1 - 4",
					"googleMaps": "",
					"webLink": "http://www.christmasvillerockhill.com/"
					},
					{
					"name": "Winter Wonderland Craft Fair",
					"address": "288 Dairy Barn Ln, Fort Mill, SC 29715",
					"position":{
						"top": "430px",
						"left": "758px"
					},
					"image": "/images/winter-craft-fair.jpg",
					"imageCredit": "© Anne Springs Close Greenway",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "More than 100 artists and crafters from the Charlotte region will offer unique holiday gifts and decorations at the Winter Wonderland Craft Fair. All items are handmade and include pottery, jewelry, quilts, handbags, children’s clothing, woodwork, soap, candles and gourmet foods such infused olive oils. Admission is free and the event will be held at the Greenway’s picturesque Dairy Barn. More details for 2016 will be announced soon.",
					"dates": "Nov 26",
					"googleMaps": "",
					"webLink": "http://www.ascgreenway.org/events/detail/winter-wonderland-craft-fair-1"
					}
				],
				},
				{
				"categoryType": "Activities",
				"id": 50,
				"categoryIcon": "/graphics/christmas_icons-activities.svg",
				"events": [
					{
					"name": "Holiday on Ice",
					"address": "400 E MLK Jr Blvd, Charlotte, NC 28202",
					"position":{
						"top": "380px",
						"left": "760px"
					},
					"image": "/images/holiday-on-ice.jpg",
					"imageCredit": "© Amelia Catherine",
					"categoryIcon": "/graphics/christmas_icons-activities.svg",
					"description": "WBT Holiday on Ice brings an outdoor ice skating rink to the heart of Uptown on the NASCAR Hall of Fame Plaza. Perfect for families, romantic dates or fun outings with friends, WBT Holiday on Ice has become a beloved holiday tradition in Charlotte.",
					"dates": "Nov 18 - Jan 8th",
					"googleMaps": "",
					"webLink": "http://wbt.com/shows/holiday-on-ice/"
					},
					{
					"name": "The Train to Christmas Town",
					"address": "Piedmont and Northern Railroad, Charlotte, NC",
					"position":{
						"top": "370px",
						"left": "740px"
					},
					"image": "/images/christmas-train.jpg",
					"imageCredit": "© Train to Christmas Town",
					"categoryIcon": "/graphics/christmas_icons-activities.svg",
					"description": "For the first time ever in North Carolina! The Train to Christmas Town is a fun, festive holiday train ride based on the book of the same name published in 2012 and departing from three other locations across the USA. The story follows Janice, her brother Paul and their woodland friends on their yearly journey to Christmas Town. This heartwarming tale highlights the power of family tradition, friendship and the magic of Christmas. Guests are reminded that the event takes place completely on board the train. Upon arrival at ‘Christmas Town’ – a secret location named for the town in the book – Santa boards the train and visits.",
					"dates": "TBD - Check back soon!",
					"googleMaps": "",
					"webLink": "http://www.traintochristmastown.com/"
					}
				],
				},
			],
	},
	{"city": "Raleigh",
			"cityFlag": "/graphics/christmas_icons-raleigh.svg",
			"icon-animation": "",
			"position": {
				"top": "175px",
				"left": "1200px"
				},
			"categories": [
				{
				"categoryType": "Light Show",
				"id": 10,
				"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
				"events": [
					{
					"name": "Lighting of the Tree",
					"address": "8450 Honeycutt Rd., Raleigh, NC 27615",
					"position": {
						"top": "185px",
						"left": "1230px"
					},
					"image": "/images/lafayette-village.jpg",
					"imageCredit": "© Ernest B. | Yelp",
					"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
					"description": "Head to North Raleigh's Lafayette Village for a spectacular tree lighting ceremony. The event runs from 4-8pm with Good Old St. Nick lighting our tree in the courtyard at 7pm.",
					"dates": "Nov 19",
					"googleMaps": "",
					"webLink": "http://lafayettevillageraleigh.com/lighting-of-the-tree-2016/"
					},
					{
					"name": "Wendell Wonderland",
					"address": "210 E. Fourth St., Wendell, NC 27591",
					"position": {
						"top": "240px",
						"left": "1280px"
					},
					"image": "/images/wendell.jpg",
					"imageCredit": "© Johnny Whitfield | News & Observer",
					"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
					"description": "Join us at one of the largest holiday light shows in the State, which will be held in downtown Wendell. Wendell Wonderland is open to the public and will be cancelled if it is raining or snowing.",
					"dates": "Nov 23 - Dec 31",
					"googleMaps": "",
					"webLink": "http://www.visitraleigh.com/includes/calendar-of-events/Wendell-Wonderland/44449/"
					}
				],
				},
				{
				"categoryType": "Celebration",
				"id": 40,
				"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
				"events": [
					{
					"name": "WRAL Raleigh Christmas Parade",
					"address": "Hillsborough St. at Saint Mary's St.",
					"position": {
						"top": "230px",
						"left": "1200px"
					},
					"image": "/images/wral-parade.jpg",
					"imageCredit": "© Nancy Thomas ",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "The WRAL Raleigh Christmas Parade is the largets parade between Washington, DC and Atlanta. The parade will last about 2.5 hours starting at 9:40AM. The parade will air from 10:00AM to 12:00PM on the day of at WRAL-TV and UNC-TV and again on Christmas morning.",
					"dates": "Nov 19",
					"googleMaps": "",
					"webLink": "http://grma.org/christmas-parade/"
					},
					{
					"name": "Lights on the Neuse",
					"address": "1620 Loop Rd, Clayton, NC 27527",
					"position": {
						"top": "270px",
						"left": "1270px"
					},
					"image": "/images/neuse-lights.jpg",
					"imageCredit": "© Lights On The Neuse",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "Bring your family and celebrate Christmas at Lights on the Neuse. This down home Christmas Lights park is located on Boyette Farms. Activities will include Sugar Barn (sugar cookie decorating), a Christmas Hayride, Santa's Sweet Shoppe and Santa himself!",
					"dates": "Nov 27 - Dec 24 (varying dates)",
					"googleMaps": "",
					"webLink": "http://lightsontheneuse.com/"
					}
				],
				},
				{
				"categoryType": "Tree Farm",
				"id": 20,
				"categoryIcon": "/graphics/christmas_icons-trees.svg",
				"events": [
					{
					"name": "Back Archers",
					"address": "4533 Inwood Road, Raleigh, NC  27603",
					"position": {
						"top": "260px",
						"left": "1220px"
					},
					"image": "/images/back-archers.jpg",
					"imageCredit": "© Back Archers Christmas Tree Farm",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Our trees are grown by an old man with a white mustache who was trained as a forester much closer to the North Pole than we are here. This gave him many opportunities to consult with Santa Claus and other experts on how to grow the perfect tree. Our mission is not just to sell trees, but to provide a fun-filled outing for the family. Bring the children and let them romp among the trees. Let them run and yell and have a great time.  But, please warn them to be careful and watch out for tree stumps so they don’t fall.",
					"dates": "example",
					"googleMaps": "",
					"webLink": "http://www.back-achers.com/"
					},
					{
					"name": "Boyce Farms",
					"address": "2813 Mount Vernon Church Road Raleigh, NC 27613",
					"position": {
						"top": "180px",
						"left": "1200px"
					},
					"image": "/images/boyce-farms.jpg",
					"imageCredit": "© Kris Montgomery | Raleigh Parks",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Boyce Farms, Inc. is a family owned and operated Christmas Tree Farm located in Raleigh, NC (northern Wake county) and is committed to providing a family-oriented, hands-on experience for families from all walks of life when the holiday season rolls around.",
					"dates": "example",
					"googleMaps": "",
					"webLink": "http://boycefarms.com/"
					},
					{
					"name": "Jordan Lake Tree Farm",
					"address": "2170 Marthas Chapel Rd Apex NC 27523",
					"position": {
						"top": "250px",
						"left": "1140px"
					},
					"image": "/images/jordan-lake.jpg",
					"imageCredit": "© Jordan Lake Christmas Tree Farm",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Diana and Byron moved from Durham to the country in July of 1994 after seeing a wonderful old 1860 built farm house on a great piece of land just south of I-40 in Chatham County.  The previous owners, Mike and Jane Harrell, had started a Christmas Tree farm and were moving.  Being young and naive we thought that Christmas Tree farming would be a fun hobby.  We survived our first Christmas in 1994 with the help of the Harrells and here we are 21 years later still growing the farm, making memories with all our wonderful customers and still learning about growing Christmas Trees.",
					"dates": "Nov 19",
					"googleMaps": "",
					"webLink": "http://www.jordanlakechristmas.com/"
					}
				],
				},
				{
				"categoryType": "Production",
				"id": 30,
				"categoryIcon": "/graphics/christmas_icons-production.svg",
				"events": [
					{
					"name": "A Kids' Christmas",
					"address": "2 E. South St., Raleigh, NC 27601",
					"position": {
						"top": "255px",
						"left": "1210px"
					},
					"image": "/images/nc-symphony.jpg",
					"imageCredit": "© North Carolina Symphony",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "Take a break from preparing for Thanksgiving and bring the entire family to this one-hour singing and dancing celebration with music from Babes in Toyland, The Polar Express, and Frozen. Be sure to arrive early to meet our Snow Princesses and Santa! Plus, visit our popular Instrument Zoo! Dress as your favorite Frozen character or wear your jammies.",
					"dates": "Nov 23",
					"googleMaps": "",
					"webLink": "http://www.ncsymphony.org/"
					},
					{
					"name": "A Pink Martini Christmas",
					"address": "2 E. South St., Raleigh, NC 27601",
					"position": {
						"top": "245px",
						"left": "1210px"
					},
					"image": "/images/pops.png",
					"imageCredit": "© North Carolina Symphony",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "China Forbes returns! One of the world’s favorite cocktail, jazz, and world pop ensembles returns to Meymandi Concert Hall. Pink Martini delivers a festive holiday concert featuring beloved songs from around the globe. Led by bandleader Thomas Lauderdale, the “little orchestra” draws inspiration from music all over the world, crossing genres of classical, jazz and old-fashioned pop.",
					"dates": "Dec 10",
					"googleMaps": "",
					"webLink": "http://www.ncsymphony.org/events/index.cfm?view=details&viewref=calendar&detailid=3235&eid=4216"
					}
				],
				},
			]
	},
	{"city": "Ronda",
			"cityFlag": "",
			"icon-animation": "",
			"position": {
				"top": "",
				"left":"",
			},
		"categories": [
			{
				"categoryType": "Celebration",
				"id": 40,
				"categoryIcon": "/graphics/christmas_icons-celebration.svg",
				"events": [
					{
					"name": "An Afternoon of Holiday Cheer",
					"address": "450 Groce Road, Ronda, NC 28670",
					"position": {
						"top": "135px",
						"left": "735px"
					},
					"image": "/images/raffaldini-vineyards.jpg",
					"imageCredit": "",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "Carol along with the Raffaldini chorus, enjoy light refreshments, and a 3pm visit from the Italian Christmas character, La Befana. This mystical woman will read her story fireside for all to enjoy. While visiting, participating in some last minute shopping. This is an event for your entire family!",
					"dates": "Dec 11",
					"googleMaps": "",
					"webLink": "https://www.raffaldini.com/event/an-afternoon-of-holiday-cheer/"
					}
				],
				},
			]
	},
	{"city": "Pilot Mountain",
			"cityFlag": "",
			"icon-animation": "",
			"position": {
				"top": "",
				"left":"",
			},
		"categories": [
			{
				"categoryType": "Light Show",
				"id": 10,
				"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
				"events": [
					{
					"name": "Pilot Mountain Christmas",
					"address": "450 Groce Road, Ronda, NC 28670",
					"position": {
						"top": "115px",
						"left": "770px"
					},
					"image": "/images/pilot-mountain.jpg",
					"imageCredit": "© Larry & Rachel Charpiat ",
					"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
					"description": "Enjoy a trail walking tour through a decorated four acres of Pilot Mountain. View over 750,000 lights and hundreds of figures in Santa's enchanted forest. See animated windows, Santa's workshop, computer animated displays, a talking christmas tree and much more!",
					"dates": "Nov 24 - Jan 2",
					"googleMaps": "",
					"webLink": "http://pilotmountainchristmas.com/"
					}
				],
				},
			]
	},
	{"city": "Kernersville",
			"cityFlag": "",
			"icon-animation": "",
			"position": {
				"top": "",
				"left":"",
			},
		"categories": [
			{
				"categoryType": "Tour",
				"id": 20,
				"categoryIcon": "/graphics/christmas_icons-tours.svg",
				"events": [
					{
					"name": "Christmas at Korner's Folly",
					"address": "413 South Main St. Kernersville, NC 27284",
					"position": {
						"top": "150px",
						"left": "860px"
					},
					"image": "/images/korners-folly.jpg",
					"imageCredit": "© Körner’s Folly",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "Körner’s Folly is transformed in the holidays with floor-to-ceiling garland, lights, live holiday music, and Christmas trees in nearly every room.  Tours and special events promise visitors of all ages holiday cheer and an unforgettable experience!",
					"dates": "Nov 25 - Dec 31",
					"googleMaps": "",
					"webLink": "https://www.kornersfolly.org/event/christmas/"
					}
				],
				},
			]
	},
	{"city": "Highpoint",
			"cityFlag": "",
			"icon-animation": "",
			"position": {
				"top": "",
				"left":"",
			},
		"categories": [
			{
				"categoryType": "Production",
				"id": 30,
				"categoryIcon": "/graphics/christmas_icons-production.svg",
				"events": [
					{
					"name": "The Nutcracker",
					"address": "220 E Commerce Ave, High Point, NC 27260",
					"position": {
						"top": "180px",
						"left": "860px"
					},
					"image": "/images/hp-ballet.jpg",
					"imageCredit": "© High Point News",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "Choreography is by award-winning Artistic Director, Gary Taylor. Sets are by award-winning designer, Howard Jones, Lighting is by Craig Stelzenmueller.  Original costumes are designed by Executive Director and Founder Rita Taylor.",
					"dates": "Dec 16 - Dec 23",
					"googleMaps": "",
					"webLink": "http://highpointballet.org/html/nutcracker.html"
					}
				],
				},
			]
	},
	{"city": "Winston-Salem",
			"cityFlag": "",
			"icon-animation": "",
			"position": {
				"top": "",
				"left":"",
			},
		"categories": [
			{
				"categoryType": "Tour",
				"id": 20,
				"categoryIcon": "/graphics/christmas_icons-tours.svg",
				"events": [
					{
					"name": "Christmas by Candlelight Guided Tours",
					"address": "900 Old Salem Road, Winston-Salem, NC 27101",
					"position": {
						"top": "155px",
						"left": "820px"
					},
					"image": "/images/old-salem.jpg",
					"imageCredit": "© Old Salem",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "Take a guided tour by candlelight through the Historic District where the customs and traditions of Christmas in Salem will be brought to life through all of your senses.",
					"dates": "Nov 18 - Dec 23",
					"googleMaps": "",
					"webLink": "http://www.oldsalem.org/events/event/christmas-by-candlelight-tours/"
					}
				],
				},
				{
				"categoryType": "Light Show",
				"id": 10,
				"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
				"events": [
					{
					"name": "Tanglewood Festival of Lights",
					"address": "Tanglewood Park, 4061 Clemmons Rd, Clemmons, NC 27012",
					"position": {
						"top": "170px",
						"left": "805px"
					},
					"image": "/images/tanglewood.jpg",
					"imageCredit": "© J. Sinclair",
					"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
					"description": "Tanglewood Park's rolling countryside will be transformed into a winter wonderland of giant, twinkling snowflakes and whimsical scenes! Entering our 25th season, Tanglewood's Festival of Lights continues to be one of the largest and most spectacular light shows in the entire Southeast.",
					"dates": "Nov 18 - Jan 1",
					"googleMaps": "",
					"webLink": "http://www.forsyth.cc/Parks/Tanglewood/fol/index.html"
					}
				],
				},
			]
	},
	{"city": "Chapel Hill",
			"cityFlag": "",
			"icon-animation": "",
			"position": {
				"top": "135px",
				"left": "1045px"
				},
			"categories": [
				{
				"categoryType": "Light Show",
				"id": 10,
				"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
				"mapLocation": "coordinates",
				"events": [
				],
				},
				{
				"categoryType": "Production",
				"id": 30,
				"categoryIcon": "/graphics/christmas_icons-production.svg",
				"mapLocation": "coordinates",
				"events": [
					{
					"name": "A New World Christmas",
					"address": "Chapel of the Cross 304 E Franklin St. Chapel Hill, NC 27517",
					"position": {
						"top": "180px",
						"left": "1090px"
					},
					"image": "/images/new-world.jpg",
					"imageCredit": "© Visit Chapel Hill",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "El Fuego presents: A selection of fun Villancicos and Ensaladas (quod Libet) by Mateo Flecha and composers from Colonial Latin-America time.",
					"dates": "Dec 18",
					"googleMaps": "",
					"webLink": "https://www.visitchapelhill.org/event/a-new-world-christmas/9340/"
					}
				],
				},
				{
				"categoryType": "Celebration",
				"id": 40,
				"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
				"events": [
					{
					"name": "Twelve Days of Christmas",
					"address": "211 Pittsboro Street., Chapel Hill, NC 27516",
					"position": {
						"top": "190px",
						"left": "1073px"
					},
					"image": "/images/carolina-inn.jpg",
					"imageCredit": "© Emily March",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "The Carolina Inn, A Destination Hotel, will once again celebrate the Christmas season with enchanting decorations inspired by the traditional holiday song, The Twelve Days of Christmas. A vision of seasonal wonder will be displayed throughout the Inn including amazing gingerbread houses, magnificently decorated trees, beautifully appointed holiday décor, and events to keep children and adults of all ages entertained.",
					"dates": "Dec 1 - Dec 31",
					"googleMaps": "",
					"webLink": "http://www.carolinainn.com/about/chapel-hill-event-calendar?year=2016&month=12"
					},
					{
					"name": "Chapel Hill - Carrboro Holiday Parade",
					"address": "211 Pittsboro Street., Chapel Hill, NC 27516",
					"position": {
						"top": "185px",
						"left": "1053px"
					},
					"image": "/images/chapel-parade.jpg",
					"imageCredit": "© Downtownchapelhill.com",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "A favorite Chapel Hill tradition, the annual holiday parade highlights the rich diversity of the community. From marching bands to business leaders, youth groups, and creatively decorated floats, this event puts everyone in a festive mood. At 10 a.m., the parade begins in front of the Post Office on Franklin Street and progresses through Chapel Hill, ending around noon at the Carrboro Town Hall.",
					"dates": "Dec 10",
					"googleMaps": "",
					"webLink": "http://www.chapelhillholidayparade.com/"
					}
				],
				}
			]
	},
	{"city": "Durham",
			"cityFlag": "/graphics/christmas_icons-durham.svg",
			"icon-animation": "",
			"position": {
				"top": "110px",
				"left": "1120px"
				},
			"categories": [
				{
				"categoryType": "Light Show",
				"id": 10,
				"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
				"mapLocation": "coordinates",
				"events": [
					
				],
				},
				{
				"categoryType": "Tree Farm",
				"id": 20,
				"categoryIcon": "/graphics/christmas_icons-trees.svg",
				"events": [
					
				],
				},
				{
				"categoryType": "Production",
				"id": 30,
				"categoryIcon": "/graphics/christmas_icons-production.svg",
				"events": [
					{
					"name": "Carolina Ballet Presents the Nutcracker",
					"address": "123 Vivian Street, Durham, NC 27701",
					"position": {
						"top": "185px",
						"left": "1130px"
					},
					"image": "/images/carolina-ballet.jpg",
					"imageCredit": "© Chris Walt",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "Join Carolina Ballet as they celebrate the 15th anniversary of Carolina Ballet’s family favorite, The Nutcracker. A holiday tradition that’s perfect for the whole family, Carolina Ballet’s is the only performance of The Nutcracker in the country with illusions created by world-renowned magician, Rick Thomas. Marvel as beloved characters levitate, disappear, and reappear before your very eyes.",
					"dates": "Dec 9 - Dec 11",
					"googleMaps": "",
					"webLink": "http://www.dpacnc.com/events/detail/carolina-ballet-presents-the-nutcracker-1"
					},
					{
					"name": "How the Grinch Stole Christmas the Musical",
					"address": "123 Vivian Street, Durham, NC 27701",
					"position": {
						"top": "195px",
						"left": "1130px"
					},
					"image": "/images/dpac-grinch.jpg",
					"imageCredit": "© DPAC",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "Discover the magic of Dr. Seuss’ classic holiday tale as it comes to life on stage. Featuring the hit songs “You’re A Mean One, Mr. Grinch” and “Welcome Christmas,” The Grinch discovers there’s more to Christmas than he bargained for in this heart-warming holiday classic.",
					"dates": "Nov 29 - Dec 4",
					"googleMaps": "",
					"webLink": "http://www.dpacnc.com/events/detail/the-grinch"
					},
					{
					"name": "A Christmas Carol",
					"address": "123 Vivian Street, Durham, NC 27701",
					"position": {
						"top": "185px",
						"left": "1140px"
					},
					"image": "/images/dpac-carol.jpg",
					"imageCredit": "© DPAC",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "Theatre In The Park's original musical comedy adaptation of A Christmas Carol, based on the book by Charles Dickens and adapted for the stage by Ira David Wood III, now in its 42nd year, has been cited as “one of the most successful shows in North Carolina theatre history” and voted one of “the top 20 events in the Southeast” by the Southeast Tourism Society.",
					"dates": "Dec 15 - Dec 18",
					"googleMaps": "",
					"webLink": "http://www.dpacnc.com/events/detail/ira-david-wood-iiis-a-christmas-carol"
					},
					{
					"name": "Mannheim Steamroller Christmas",
					"address": "123 Vivian Street, Durham, NC 27701",
					"position": {
						"top": "185px",
						"left": "1150px"
					},
					"image": "/images/dpac-steamroller.jpg",
					"imageCredit": "© DPAC",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "This year marks the 32nd Anniversary of the Christmas Tour and release of Mannheim Steamroller Christmas, an album that revolutionized the Holiday Season music category.",
					"dates": "Dec 20",
					"googleMaps": "",
					"webLink": "http://www.dpacnc.com/events/detail/manheim-steamrollers"
					},
					{
					"name": "Hip Hop Nutchracker",
					"address": "123 Vivian Street, Durham, NC 27701",
					"position": {
						"top": "185px",
						"left": "1130px"
					},
					"image": "fileName",
					"imageCredit": "",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "A holiday mash-up for the entire family, The Hip Hop Nutcracker, a contemporary re-imagination of Tchaikovsky’s timeless music, sets out on its second national tour following the success of last year's sold-out inaugural tour across the United States and Russia.",
					"dates": "Nov 26",
					"googleMaps": "",
					"webLink": "http://www.dpacnc.com/events/detail/hip-hop-nutcracker"
					},
					{
					"name": "A Christmas Carol",
					"address": "309 West Morgan St. Street, Durham, NC 27701",
					"position": {
						"top": "175px",
						"left": "1130px"
					},
					"image": "fileName",
					"imageCredit": "",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "Perhaps the best loved holiday story of all time, our adaptation of Dicken’s classic is particularly suited for children, and features a magnificent score by Paul Deiss. Watch Mr. Scrooge have a change of heart from stone to gold as he is visited by the ghosts of Christmas. All the joy, sentiment and meaning are here, without being too scary for young audiences.",
					"dates": "Nov 29",
					"googleMaps": "",
					"webLink": "http://www.carolinatheatre.org/events/christmas-carol-5"
					},
					{
					"name": "Moscow Ballet's Great Russian Nutcracker",
					"address": "309 West Morgan St. Street, Durham, NC 27701",
					"position": {
						"top": "175px",
						"left": "11130px"
					},
					"image": "fileName",
					"imageCredit": "",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "The biggest Christmas experience of the year! The original, direct from Russia, Moscow Ballet’s Great Russian Nutcracker! “Knock Out..and... Hot Ticket!” raves the New York Times. Enchant the whole family with larger than life magical props, a 60 foot growing Christmas tree and spectacular Russian-made costumes and sets. A must-see event, witness the world’s best dancers on stage in your city!",
					"dates": "Dec 14 - Dec 15",
					"googleMaps": "",
					"webLink": "http://www.carolinatheatre.org/events/moscow-ballets-great-russian-nutcracker"
					},
					{
					"name": "Holiday Songs: Music Around the World",
					"address": "309 West Morgan St. Street, Durham, NC 27701",
					"position": {
						"top": "175px",
						"left": "1130px"
					},
					"image": "fileName",
					"imageCredit": "",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "Travel the globe and explore some of the world’s many winter holidays in this musical revue. Songs and stories come together for a truly magical wintertime show. We will travel from Africa to Mexico and everywhere in between. You will hear a range of songs from “I Have A Little Dreidel” and “Auld Lang Syne” to “Away in a Manger,” “Sankta Lucia” and so much more. Similar in style to out hit Holidays Around the World, this show is packed with music from many of the celebrations that happen this time of year around the globe.",
					"dates": "Dec 6",
					"googleMaps": "",
					"webLink": "http://www.carolinatheatre.org/events/holiday-songs-music-around-world"
					},
					{
					"name": "Moscow Ballet's Great Russian Nutcracker",
					"address": "309 West Morgan St. Street, Durham, NC 27701",
					"position": {
						"top": "175px",
						"left": "1130px"
					},
					"image": "fileName",
					"imageCredit": "",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "",
					"dates": "Dec 16",
					"googleMaps": "",
					"webLink": "http://www.carolinatheatre.org/films/nutcracker"
					},
					{
					"name": "Christmas Concert: Britten's Saint Nicolas, plus carols",
					"address": "401 Chapel Dr, Durham, NC 27708",
					"position": {
						"top": "165px",
						"left": "1115px"
					},
					"image": "fileName",
					"imageCredit": "",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "",
					"dates": "Dec 10 - Dec 11",
					"googleMaps": "",
					"webLink": "http://choral-society.org/concerts/current-season/"
					}
				],
				},
				{
				"categoryType": "Celebration",
				"id": 40,
				"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
				"events": [
					{
					"name": "Kwanzaa",
					"address": "401 N. Driver St. Durham, NC 27703",
					"position": {
						"top": "170px",
						"left": "1150px"
					},
					"image": "fileName",
					"imageCredit": "",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "Kwanzaa is a celebration of family, community and culture centered on seven basic values as building blocks for peace and progress within neighborhoods. This family friendly event will include entertainment by local and/or regional artists. The celebration will be held on the fifth day of Kwanzaa and will celebrate the principle of Nia (purpose).",
					"dates": "Dec 30",
					"googleMaps": "",
					"webLink": "http://durhamnc.gov/1651/Kwanzaa"
					},
					{
					"name": "KwanzaaFest",
					"address": "220 Foster St. Durham, NC 27701",
					"position": {
						"top": "155px",
						"left": "1130px"
					},
					"image": "fileName",
					"imageCredit": "",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "For over 30 years the African American Dance Ensemble has sponsored KwanzaaFest in Durham, North Carolina. Kwanzaa is a celebration of family, community and culture centered on seven basic values as building blocks for peace and progress within neighborhoods. This family friendly event will include entertainment by local and/or regional artists.",
					"dates": "Jan 1",
					"googleMaps": "",
					"webLink": "http://aadekwanzaafest.wixsite.com/kwanzaafest/kwanzaafest-2017"
					}
				],
				},
				{
				"categoryType": "Tour",
				"id": 20,
				"categoryIcon": "/graphics/christmas_icons-tours.svg",
				"events": [
					{
					"name": "100 Years of Christmas at Stagville",
					"address": "5828 Old Oxford Hwy. Durham, NC 27712",
					"position": {
						"top": "115px",
						"left": "1175px"
					},
					"image": "fileName",
					"imageCredit": "",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "During the day, visit the historic homes of slaves, sharecroppers, and slaveholders, and learn about the Christmas traditions of enslaved and free people in North Carolina. After dark, purchase a ticket to see some of these buildings lit by lanterns, while your guide shares stories of holidays during slavery.",
					"dates": "Dec 3",
					"googleMaps": "",
					"webLink": "http://www.stagville.org/events/"
					},
					{
					"name": "Christmas by Candlelight",
					"address": "2828 Duke Homestead Rd, Durham, NC 27705",
					"position": {
						"top": "155px",
						"left": "1130px"
					},
					"image": "fileName",
					"imageCredit": "",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "Experience a historical North Carolina holiday season with Duke Homestead! Take an evening and join us as we celebrate Christmas by Candlelight. Costumed interpreters will lead you on a candlelit tour through the Historic Area festooned with period decorations as we celebrate Christmas in the 1870s.",
					"dates": "Dec 3",
					"googleMaps": "",
					"webLink": "http://dukehomestead.org/events.php"
					},
					{
					"name": "2nd Annual Civil War Christmas by Candlelight Tour",
					"address": "4409 Bennett Memorial Rd. Durham, NC 27705",
					"position": {
						"top": "140px",
						"left": "1095px"
					},
					"image": "fileName",
					"imageCredit": "",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "Take a tour by candlelight around the farm to watch as both soldiers and civilians attempted to celebrate the holidays during the Civil War. Complimentary hot apple cider and cookies will be available at the visitor center. Tours will take place every 15 minutes.",
					"dates": "Dec 9",
					"googleMaps": "",
					"webLink": "http://nchistoricsites.org/bennett/event.htm#!/81396-2nd-annual-civil-war-christmas-by-candlelight-tour-program"
					},
					{
					"name": "Annual Christmas in the Piedmont",
					"address": "4409 Bennett Memorial Rd. Durham, NC 27705",
					"position": {
						"top": "140px",
						"left": "1095px"
					},
					"image": "fileName",
					"imageCredit": "",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "Visit Bennett Place during the Christmas season and witness how this occasion was celebrated in the Piedmont Carolinas during the American Civil War. Living historians will decorate the farm in a typical modest fashion of the time. There will be cooking demonstrations in the kitchen house, games for kids, Christmas decorations and examples of presents in the main house. Soldiers will also be on site in their camp and no program would be complete without a visit from Santa. Complimentary hot apple cider and cookies will be available at the visitor center.",
					"dates": "Dec 10",
					"googleMaps": "",
					"webLink": "http://nchistoricsites.org/bennett/event.htm#!/81427-annual-christmas-in-the-piedmont"
					}
				],
				}
			]
	},
	{"city": "Asheville",
			"cityFlag": "/graphics/christmas_icons-asheville.svg",
			"icon-animation": "",
			"position": {
				"top": "270px",
				"left": "440px"
				},
			"categories": [
				{
				"categoryType": "Light Show",
				"id": 10,
				"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
				"mapLocation": "coordinates",
				"events": [
					
				],
				},
				{
				"categoryType": "Tour",
				"categoryIcon": "/graphics/christmas_icons-tours.svg",
				"events": [
					{
					"name": "Christmas at Biltmore",
					"address": "1 Lodge St, Asheville, NC 28803",
					"position": {
						"top": "340px",
						"left": "430px"
					},
					"image": "/images/biltmore.jpg",
					"imageCredit": "© HGTV",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "Immerse yourself in the holiday spirit at the most enchanting place imaginable. The wonders of Biltmore House filled with masterpieces of art and Vanderbilt family treasures are enhanced with more than 70 exquisitely decorated Christmas trees, miles of garlands, hundreds of poinsettias, and more lights than you can count.",
					"dates": "Nov 4 - Jan 8",
					"googleMaps": "",
					"webLink": "http://www.biltmore.com/visit/plan-your-visit/buy-tickets/christmas-at-biltmore"
					}
				],
				},
				{
				"categoryType": "Production",
				"id": 30,
				"categoryIcon": "/graphics/christmas_icons-production.svg",
				"events": [
					
				],
				},
			]
	},
	{"city": "Greensboro",
			"cityFlag": "/graphics/christmas_icons-greensboro.svg",
			"icon-animation": "",
			"position": {
				"top": "100px",
				"left": "900px"
				},
			"categories": [
				{
				"categoryType": "Light Show",
				"id": 10,
				"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
				"mapLocation": "coordinates",
				"events": [
					
				],
				},
				{
				"categoryType": "Celebration",
				"id": 40,
				"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
				"events": [
					{
					"name": "Made 4 the Holidays Arts, Crafts & Pottery Show",
					"address": "501 Yanceyville Street, Greensboro, NC 27405",
					"position": {
						"top": "155px",
						"left": "923px"
					},
					"image": "fileName",
					"imageCredit": "",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "There will be a variety of handcrafted jewelry, pottery, fiber art, fine art, packaged artisan foods at this historic farmers market that houses over 170 vendors and artist.",
					"dates": "Nov 13 & Dec 4",
					"googleMaps": "",
					"webLink": "https://www.eventbrite.com/e/made-4-the-holidays-arts-crafts-pottery-show-nov-13-dec-4-2016-registration-25842782458?aff=es2"
					}
				],
				},
				{
				"categoryType": "Tour",
				"categoryIcon": "/graphics/christmas_icons-tours.svg",
				"events": [
					
				],
				},
				{
				"categoryType": "Production",
				"id": 30,
				"categoryIcon": "/graphics/christmas_icons-production.svg",
				"events": [
					
				],
				},
			]
	},
	{"city": "Wilmington",
			"cityFlag": "/graphics/christmas_icons-wilmington.svg",
			"icon-animation": "",
			"position": {
				"top": "600px",
				"left": "1350px"
				},
			"categories": [
				{
				"categoryType": "Light Show",
				"id": 10,
				"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
				"mapLocation": "coordinates",
				"events": [
					{
					"name": "Holiday Floatilla",
					"address": "Wrightsville Beach",
					"position": {
						"top": "670px",
						"left": "1390px"
					},
					"image": "fileName",
					"imageCredit": "",
					"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
					"description": "It is the Southern coastal version of a holiday parade – on water – at night.",
					"dates": "Nov 25 - Nov 26",
					"googleMaps": "",
					"webLink": "http://ncholidayflotilla.org/"
					}
				],
				},
				{
				"categoryType": "Tour",
				"id": 20,
				"categoryIcon": "/graphics/christmas_icons-tours.svg",
				"events": [
					{
					"name": "A Christmas Stroll Through the Past",
					"address": "503 Market St, Wilmington, NC 28401",
					"position": {
						"top": "670px",
						"left": "1350px"
					},
					"image": "fileName",
					"imageCredit": "",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "The Bellamy Mansion Museum and the Burgwin-Wright House and Gardens invite the community on a Christmas Stroll Through the Past in historic downtown Wilmington, NC. Attendees can celebrate the holidays with period decorations, music, costumed interpreters, a petting zoo, refreshments and more.",
					"dates": "?????",
					"googleMaps": "",
					"webLink": "http://www.bellamymansion.org/"
					}
				],
				},
				{
				"categoryType": "Production",
				"id": 30,
				"categoryIcon": "/graphics/christmas_icons-production.svg",
				"events": [
					
				],
				},
			]
	},
	{"city": "New Bern",
			"cityFlag": "/graphics/christmas_icons-newbern.svg",
			"icon-animation": "",
			"position": {
				"top": "350px",
				"left": "1520px"
				},
			"categories": [
				{
				"categoryType": "Light Show",
				"id": 10,
				"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
				"mapLocation": "coordinates",
				"events": [
					
				],
				},
				{
				"categoryType": "Tour",
				"categoryIcon": "/graphics/christmas_icons-tours.svg",
				"events": [
					{
					"name": "Holiday Tours at Tryon Palace",
					"address": "529 S Front St, New Bern, NC 28562",
					"position":{
						"top": "420px",
						"left": "1530px",
					},
					"image": "fileName",
					"imageCredit": "",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "The Governor’s Palace and historic homes are decked out for the holidays and open for daily tours. Explore the traditions of Christmases past throughout the Tryon Palace grounds.",
					"dates": "Nov 27 - Jan 3",
					"googleMaps": "",
					"webLink": "http://www.tryonpalace.org/events/holiday-tours-tryon-palacetryon"
					}
				],
				},
				{
				"categoryType": "Production",
				"categoryIcon": "/graphics/christmas_icons-production.svg",
				"id": 30,
				"events": [
					
				],
				},
			]
	},
	{"city": "Edenton",
			"cityFlag": "/graphics/christmas_icons-newbern.svg",
			"icon-animation": "",
			"position": {
				"top": "100px",
				"left": "1580px"
				},
			"categories": [
				{
				"categoryType": "Light Show",
				"id": 10,
				"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
				"mapLocation": "coordinates",
				"events": [
					
				],
				},
				{
				"categoryType": "Tour",
				"categoryIcon": "/graphics/christmas_icons-tours.svg",
				"events": [
					{
					"name": "Dickens Christmas Candlelight Tour",
					"address": "505 S Broad St., Edenton, NC 27932",
					"position":{
						"top": "157px",
						"left": "1600px",
					},
					"image": "fileName",
					"imageCredit": "",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "You won’t want to miss this self-guided walking tour of homes of Edenton’s over-300-years old historic district, beautifully decorated for the holidays.",
					"dates": "Dec 9 - Dec 10",
					"googleMaps": "",
					"webLink": "example.com"
					}
				],
				},
				{
				"categoryType": "Production",
				"categoryIcon": "/graphics/christmas_icons-production.svg",
				"id": 30,
				"events": [
					
				],
				},
			]
	},
	{"city": "Fayettville",
			"cityFlag": "/graphics/christmas_icons-fayettville.svg",
			"icon-animation": "",
			"position": {
				"top": "400px",
				"left": "1180px"
				},
			"categories": [
				{
				"categoryType": "Light Show",
				"id": 10,
				"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
				"mapLocation": "coordinates",
				"events": [
					
				],
				},
				{
				"categoryType": "Tree Farm",
				"categoryIcon": "/graphics/christmas_icons-trees.svg",
				"events": [
					
				],
				},
				{
				"categoryType": "Production",
				"id": 30,
				"categoryIcon": "/graphics/christmas_icons-production.svg",
				"events": [
					
				],
				},
			]
	},
];
 