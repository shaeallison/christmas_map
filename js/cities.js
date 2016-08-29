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
					"location": "Charlotte Motor Speedway",
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
					"googleMaps": "https://www.google.com/maps/place/5555+Concord+Pkwy+S,+Concord,+NC+28027/@35.3515472,-80.6887447,17z/data=!3m1!4b1!4m5!3m4!1s0x88541b1a5c551711:0x6fa37f14287b98c1!8m2!3d35.3515472!4d-80.6865507",
					"webLink": "charlottemotorspeedway.com"
					},
					{
					"name": "McAdenville",
					"location": "McAdenville",
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
					"googleMaps": "https://www.google.com/maps/place/100+Main+St,+McAdenville,+NC+28101/@35.25854,-81.078092,17z/data=!3m1!4b1!4m5!3m4!1s0x8856be755117d6db:0x938ffa2c50c58b02!8m2!3d35.25854!4d-81.075898",
					"webLink": "charlottemotorspeedway.com"
					},
					{
					"name": "Panthers Tree-Lighting",
					"location": "Bank of America Stadium",
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
					"googleMaps": "https://www.google.com/maps/place/800+S+Mint+St,+Charlotte,+NC+28202/@35.2257952,-80.8550356,17z/data=!3m1!4b1!4m5!3m4!1s0x8856a02c9707857d:0x1116773e122c477!8m2!3d35.2257952!4d-80.8528416",
					"webLink": "http://www.panthers.com/schedule/calendar.html"
					},
					{
					"name": "A Kannapolis Christmas",
					"location": "Kannapolis",
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
					"googleMaps": "https://www.google.com/maps/place/700+W+C+St,+Kannapolis,+NC+28081/@35.502895,-80.6339993,17z/data=!3m1!4b1!4m5!3m4!1s0x8854062a799722a9:0x9f03c682288d08e6!8m2!3d35.502895!4d-80.6318053",
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
					"location": "Charlotte",
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
					"googleMaps": "https://www.google.com/maps/place/Fourth+Ward+Park/@35.2329104,-80.8456148,16.79z/data=!4m8!1m2!2m1!1sFourth+Ward,+Charlotte,+NC+29202!3m4!1s0x0:0x995d0c179a7ad709!8m2!3d35.2315394!4d-80.842756",
					"webLink": "http://www.fofw.org/#!holidayhometour/cc6x"
					},
					{
					"name": "Downtown Christmas Village",
					"location": "Belmont",
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
					"googleMaps": "https://www.google.com/maps/place/Main+Street,+Belmont,+NC+28012/@35.2468543,-81.0420682,17z/data=!3m1!4b1!4m5!3m4!1s0x8856bd8439d0443d:0xf09e6ff07d779e4e!8m2!3d35.2468543!4d-81.0398742",
					"webLink": "http://www.cityofbelmont.org/"
					},
					{
					"name": "Christmas in...",
					"location": "Davidson",
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
					"googleMaps": "https://www.google.com/maps/place/S+Main+St,+Davidson,+NC+28036/@35.4963505,-80.8545015,17z/data=!3m1!4b1!4m5!3m4!1s0x8856aa2b419bd8a5:0x9ce0921bc177bc79!8m2!3d35.4963505!4d-80.8523075",
					"webLink": "http://www.christmasindavidson.com/"
					},
					{
					"name": "Holiday at the Garden",
					"location": "Daniel Stowe Botanical Gardens",
					"address": "6500 S New Hope Rd, Belmont, NC 28012",
					"position":{
						"top": "400px",
						"left": "730px"
					},
					"image": "/images/DSBG-christmas.jpg",
					"imageCredit": "© Greg Briley Photography",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "Winter glistens as dazzling lights dance throughout the garden this holiday season. Holidays at the Garden, a must-see family, decade-old tradition for thousands of all ages, is a magical time of year when the trees twinkle, the fountains sparkle, and botanical-themed displays glisten among the natural beauty of the winter Garden.",
					"dates": "TBD - Check back soon!",
					"googleMaps": "https://www.google.com/maps/place/Daniel+Stowe+Botanical+Garden/@35.1676604,-81.05906,17z/data=!4m13!1m7!3m6!1s0x885696be458cda85:0x3faffed36005bf!2s6500+S+New+Hope+Rd,+Belmont,+NC+28012!3b1!8m2!3d35.1676604!4d-81.056866!3m4!1s0x0:0xc8d6769108161b53!8m2!3d35.1681253!4d-81.0510772",
					"webLink": "http://www.dsbg.org/"
					},
					{
					"name": "100 Years of Christmas",
					"location": "Historic Latta Plantation",
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
					"googleMaps": "https://www.google.com/maps/place/Latta+Plantation+Nature+Preserve/@35.354958,-80.932856,17z/data=!4m13!1m7!3m6!1s0x8856a44d4105e987:0x1b43560dd687dec8!2s5225+Sample+Rd,+Huntersville,+NC+28078!3b1!8m2!3d35.354958!4d-80.930662!3m4!1s0x0:0x93bf8e43616b07cb!8m2!3d35.3525511!4d-80.9302497",
					"webLink": "http://www.lattaplantation.org/"
					},
					{
					"name": "Gingerbread Lane",
					"location": "Ballantyne Hotel",
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
					"googleMaps": "https://www.google.com/maps/place/The+Ballantyne,+a+Luxury+Collection+Hotel,+Charlotte/@35.056497,-80.8503875,17z/data=!4m5!3m4!1s0x0:0xabf32b050a1a5618!8m2!3d35.0564968!4d-80.8481935",
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
					"location": "Belk Theater",
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
					"googleMaps": "https://www.google.com/maps/place/Belk+Theater/@35.2267035,-80.8432402,17.85z/data=!3m1!5s0x8856a0250c4a29f5:0x9b70ed151cc7b874!4m5!3m4!1s0x0:0xe4be8289d356bd43!8m2!3d35.2274785!4d-80.8417475",
					"webLink":  "http://charlotteballet.org/tickets/nutcracker/#performancedetails"
					},
					{
					"name": "Charlotte Symphony: Magic of Christmas",
					"location": "Belk Theater",
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
					"googleMaps": "https://www.google.com/maps/place/Belk+Theater/@35.2267035,-80.8432402,17.85z/data=!3m1!5s0x8856a0250c4a29f5:0x9b70ed151cc7b874!4m5!3m4!1s0x0:0xe4be8289d356bd43!8m2!3d35.2274785!4d-80.8417475",
					"webLink":  "http://www.charlottesymphony.org/"
					},
					{
					"name": "The 62nd Annual Singing Christmas Tree",
					"location": "Knight Theater",
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
					"googleMaps": "https://www.google.com/maps/place/Knight+Theater/@35.224676,-80.849976,17z/data=!3m1!5s0x8856a02eb38e238b:0x9b70ed1555eb5940!4m13!1m7!3m6!1s0x8856a02eb4af7b3d:0x8df278261cea1378!2s430+S+Tryon+St,+Charlotte,+NC+28202!3b1!8m2!3d35.224676!4d-80.847782!3m4!1s0x0:0x47532fcac95f8ed!8m2!3d35.2248585!4d-80.84792",
					"webLink": "http://www.carolinavoices.org/"
					},
					{
					"name": "Holiday Jazz",
					"location": "Bechtler Museum of Modern Art",
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
					"googleMaps": "https://www.google.com/maps/place/Bechtler+Museum+of+Modern+Art/@35.2246023,-80.8496045,17z/data=!4m5!3m4!1s0x0:0x3d1743fc4e7596ce!8m2!3d35.2244822!4d-80.8473279",
					"webLink": "http://www.bechtler.org/Programs/Jazz-at-the-bechtler"
					},
					{
					"name": "The Best Christmas Pageant Ever",
					"location": "ImaginOn",
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
					"googleMaps": "https://www.google.com/maps/place/ImaginOn:+The+Joe+%26+Joan+Martin+Center/@35.2269383,-80.8398579,17z/data=!4m5!3m4!1s0x0:0x3a3f8a01a6bccbfa!8m2!3d35.2269378!4d-80.8376639",
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
					"location": "Olde Mecklenburg Brewery",
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
					"googleMaps": "https://www.google.com/maps/place/The+Olde+Mecklenburg+Brewery/@35.1874487,-80.8840093,17z/data=!4m13!1m7!3m6!1s0x88569f23611730bf:0xe97dc1722321f729!2s4150+Yancey+Rd,+Charlotte,+NC+28217!3b1!8m2!3d35.1874487!4d-80.8818153!3m4!1s0x88569f23974339db:0x87945c956da204ef!8m2!3d35.1873485!4d-80.8818733",
					"webLink": "http://www.oldemeckbrew.com/"
					},
					{
					"name": "Winter Market",
					"location": "The Fillmore Charlotte",
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
					"googleMaps": "https://www.google.com/maps/place/The+Fillmore+Charlotte/@35.2402992,-80.8475085,17z/data=!4m5!3m4!1s0x0:0xa561448b68aa901d!8m2!3d35.2398978!4d-80.8452813",
					"webLink": "http://vintage-charlotte.com/"
					},
					{
					"name": "Christmas at the Library",
					"location": "Billy Graham Library",
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
					"googleMaps": "https://www.google.com/maps/place/Billy+Graham+Library/@35.1905251,-80.9115349,17z/data=!4m5!3m4!1s0x0:0x3b0bf80939fa1cd1!8m2!3d35.1905038!4d-80.9092641",
					"webLink": "http://billygrahamlibrary.org/"
					},
					{
					"name": "Southern Christmas Show",
					"location": "The Park Expo and Conference Center",
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
					"googleMaps": "https://www.google.com/maps/place/The+Park+Expo+%26+Conference+Center/@35.2068416,-80.8000457,17z/data=!4m5!3m4!1s0x0:0x1940b50b32f9f8de!8m2!3d35.2072693!4d-80.7977083",
					"webLink": "https://southernshows.com/scs"
					},
					{
					"name": "ChristmasVille",
					"location": "Rock Hill",
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
					"googleMaps": "https://www.google.com/maps/place/139+E+Main+St,+Rock+Hill,+SC+29730/@34.9265905,-81.0307176,17z/data=!3m1!4b1!4m5!3m4!1s0x88568855789f7b53:0x9eea6ceb10c64353!8m2!3d34.9265905!4d-81.0285236",
					"webLink": "http://www.christmasvillerockhill.com/"
					},
					{
					"name": "Winter Craft Fair",
					"location": "Anne Springs Close Greenway",
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
					"googleMaps": "https://www.google.com/maps/place/Anne+Springs+Close+Greenway+(Dairy+Barn+Entrance)/@35.0454631,-80.9345043,17z/data=!4m5!3m4!1s0x0:0xb79f33685e15d365!8m2!3d35.0454757!4d-80.9322345",
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
					"location": "NASCAR Hall of Fame",
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
					"googleMaps": "https://www.google.com/maps/place/NASCAR+Hall+of+Fame/@35.2211909,-80.8461467,17z/data=!4m5!3m4!1s0x0:0xae5de43691fbcde9!8m2!3d35.2212875!4d-80.8434273",
					"webLink": "http://wbt.com/shows/holiday-on-ice/"
					},
					{
					"name": "Train to Christmas Town",
					"location": "Piedmont and Northern Railroad",
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
					"googleMaps": "https://www.google.com/maps/place/Piedmont+and+Northern+Railroad,+Charlotte,+NC/@35.2505874,-80.887008,17z/data=!3m1!4b1!4m5!3m4!1s0x8856a191765769f1:0x862c70f707375fc8!8m2!3d35.2505874!4d-80.884814",
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
					"location": "Lafayette Village",
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
					"googleMaps": "https://www.google.com/maps/place/Lafayette+Village/@35.8949198,-78.624184,17z/data=!4m5!3m4!1s0x0:0x44825b909f88d1f0!8m2!3d35.8949202!4d-78.6219902",
					"webLink": "http://lafayettevillageraleigh.com/lighting-of-the-tree-2016/"
					},
					{
					"name": "Wendell Wonderland",
					"location": "Wendell",
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
					"googleMaps": "https://www.google.com/maps/place/210+E+4th+St,+Wendell,+NC+27591/@35.7822722,-78.3682889,17z/data=!4m5!3m4!1s0x89ac414b66dc2933:0xa7eaa34ade26f861!8m2!3d35.782355!4d-78.366725",
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
					"location": "Raleigh",
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
					"googleMaps": "https://www.google.com/maps/place/Hillsborough+St+%26+St+Marys+St,+Raleigh,+NC+27603/@35.7808993,-78.6527636,17z/data=!3m1!4b1!4m5!3m4!1s0x89ac5f649abc7717:0xdf615398abe02fb4!8m2!3d35.7808993!4d-78.6505696",
					"webLink": "http://grma.org/christmas-parade/"
					},
					{
					"name": "Lights on the Neuse",
					"location": "Clayton",
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
					"googleMaps": "https://www.google.com/maps/place/Lights+on+the+Neuse/@35.6761649,-78.4267164,17z/data=!4m5!3m4!1s0x0:0xf8ffe4349b56bb05!8m2!3d35.6761257!4d-78.4244831",
					"webLink": "http://lightsontheneuse.com/"
					},
					{
					"name": "Holiday Gift Market",
					"location": "NC State Fair Grounds",
					"address": "1025 Blue Ridge Road Raleigh, NC 27607",
					"position":{
						"top": "170px",
						"left": "1250px",
					},
					"image": "/images/christmas-carousel.jpg",
					"imageCredit": "© Visit Raleigh",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "One of the largest collections of arts, crafts and holiday gifts with more than 250 exhibitors from across the Southeast. Going strong almost 30 years and showcasing thousands of one-of-a-kind items and unique gifts including crafts, jewelry, art, pottery and holiday foods. Santa will be there and admission is good all three days! Thanksgiving weekend at the Jim Graham Building.",
					"dates": "Nov 25 - Nov 27",
					"googleMaps": "https://www.google.com/maps/place/Raleigh+Flea+Market/@35.7947309,-78.7099821,17z/data=!4m5!3m4!1s0x0:0xcedebd3dcd82a33f!8m2!3d35.7947308!4d-78.7077881",
					"webLink": "http://raleigh.eventful.com/events/christmas-carousel-holiday-gift-market-/E0-001-084065601-3"
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
					"location": "Raleigh",
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
					"googleMaps": "https://www.google.com/maps/place/Back+Achers+Christmas+Tree+Farm/@35.720564,-78.675128,17z/data=!4m5!3m4!1s0x0:0xc96045927893354f!8m2!3d35.7205642!4d-78.6729341",
					"webLink": "http://www.back-achers.com/"
					},
					{
					"name": "Boyce Farms",
					"location": "Raleigh",
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
					"googleMaps": "https://www.google.com/maps/place/2813+Mt+Vernon+Church+Rd,+Raleigh,+NC+27613/@35.97558,-78.69443,17z/data=!3m1!4b1!4m5!3m4!1s0x89acf8dabe73f825:0x8172d94fceba53f2!8m2!3d35.97558!4d-78.692236",
					"webLink": "http://boycefarms.com/"
					},
					{
					"name": "Jordan Lake Tree Farm",
					"location": "Jordan Lake",
					"address": "2170 Marthas Chapel Rd Apex, NC 27523",
					"position": {
						"top": "250px",
						"left": "1140px"
					},
					"image": "/images/jordan-lake.jpg",
					"imageCredit": "© Jordan Lake Christmas Tree Farm",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Diana and Byron moved from Durham to the country in July of 1994 after seeing a wonderful old 1860 built farm house on a great piece of land just south of I-40 in Chatham County.  The previous owners, Mike and Jane Harrell, had started a Christmas Tree farm and were moving.  Being young and naive we thought that Christmas Tree farming would be a fun hobby.  We survived our first Christmas in 1994 with the help of the Harrells and here we are 21 years later still growing the farm, making memories with all our wonderful customers and still learning about growing Christmas Trees.",
					"dates": "Nov 19",
					"googleMaps": "https://www.google.com/maps/place/Jordan+Lake+Christmas+Tree+Farm+(see+website+for+hours)/@35.7938837,-78.9760862,17z/data=!4m5!3m4!1s0x0:0x85cd51fca51bc7d!8m2!3d35.7937741!4d-78.973994",
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
					"name": "A Kids Christmas",
					"location": "Duke Energy Center for the Performing Arts",
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
					"googleMaps": "https://www.google.com/maps/place/Duke+Energy+Center+for+the+Performing+Arts/@35.7711818,-78.6419339,17z/data=!4m5!3m4!1s0x0:0xbad5e93da1a22112!8m2!3d35.7711293!4d-78.6395708",
					"webLink": "http://www.ncsymphony.org/"
					},
					{
					"name": "A Pink Martini Christmas",
					"location": "Duke Energy Center for the Performing Arts",
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
					"googleMaps": "https://www.google.com/maps/place/Duke+Energy+Center+for+the+Performing+Arts/@35.7711818,-78.6419339,17z/data=!4m5!3m4!1s0x0:0xbad5e93da1a22112!8m2!3d35.7711293!4d-78.6395708",
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
					"location": "Ronda",
					"address": "450 Groce Road, Ronda, NC 28670",
					"position": {
						"top": "135px",
						"left": "735px"
					},
					"image": "/images/raffaldini-vineyards.jpg",
					"imageCredit": "© Raffaldini Vineyards",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "Carol along with the Raffaldini chorus, enjoy light refreshments, and a 3pm visit from the Italian Christmas character, La Befana. This mystical woman will read her story fireside for all to enjoy. While visiting, participating in some last minute shopping. This is an event for your entire family!",
					"dates": "Dec 11",
					"googleMaps": "https://www.google.com/maps/place/Raffaldini+Vineyards+%26+Winery,+LLC/@36.180389,-80.890064,17z/data=!4m5!3m4!1s0x0:0x76b8a9a2555aa182!8m2!3d36.1803891!4d-80.8878701",
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
					"name": "Christmas Lights",
					"location": "Pilot Mountain",
					"address": "4236 NC 268 Highway East, Pilot Mountain, NC 27041",
					"position": {
						"top": "115px",
						"left": "770px"
					},
					"image": "/images/pilot-mountain.jpg",
					"imageCredit": "© Larry & Rachel Charpiat ",
					"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
					"description": "Enjoy a trail walking tour through a decorated four acres of Pilot Mountain. View over 750,000 lights and hundreds of figures in Santa's enchanted forest. See animated windows, Santa's workshop, computer animated displays, a talking christmas tree and much more!",
					"dates": "Nov 24 - Jan 2",
					"googleMaps": "https://www.google.com/maps/place/Pilot+Mountain+Christmas/@36.4010004,-80.4361587,18.1z/data=!4m5!3m4!1s0x0:0x9dc38c83472d23b5!8m2!3d36.400621!4d-80.4336977",
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
					"name": "Christmas at...",
					"location": "Korner's Folly",
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
					"googleMaps": "https://www.google.com/maps/place/K%C3%B6rner's+Folly/@36.1152324,-80.0809514,17z/data=!4m5!3m4!1s0x0:0xc29c207cfe475746!8m2!3d36.1152205!4d-80.0786892",
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
					"location": "High Point Theater",
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
					"googleMaps": "https://www.google.com/maps/place/High+Point+Theatre/@35.9549459,-80.005532,17z/data=!4m5!3m4!1s0x0:0x9c58fc29638fd4a4!8m2!3d35.9555632!4d-80.0030959",
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
					"location": "Old Salem Museum and Gardens",
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
					"googleMaps": "https://www.google.com/maps/place/Old+Salem+Museums+%26+Gardens/@36.083516,-80.245075,17z/data=!4m5!3m4!1s0x0:0xa4997592e1f7b3d4!8m2!3d36.0835158!4d-80.2428813",
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
					"location": "Clemmons",
					"address": "4061 Clemmons Rd, Clemmons, NC 27012",
					"position": {
						"top": "170px",
						"left": "805px"
					},
					"image": "/images/tanglewood.jpg",
					"imageCredit": "© J. Sinclair",
					"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
					"description": "Tanglewood Park's rolling countryside will be transformed into a winter wonderland of giant, twinkling snowflakes and whimsical scenes! Entering our 25th season, Tanglewood's Festival of Lights continues to be one of the largest and most spectacular light shows in the entire Southeast.",
					"dates": "Nov 18 - Jan 1",
					"googleMaps": "https://www.google.com/maps/place/Tanglewood+Park/@36.0093039,-80.4149274,17z/data=!4m12!1m6!3m5!1s0x8853b90089b15917:0xc0a256eee1c10d6!2sTanglewood+Park!8m2!3d36.0093039!4d-80.4127334!3m4!1s0x8853b90089b15917:0xc0a256eee1c10d6!8m2!3d36.0093039!4d-80.4127334",
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
					"location": "Chapel of the Cross",
					"address": "304 E Franklin St. Chapel Hill, NC 27517",
					"position": {
						"top": "180px",
						"left": "1090px"
					},
					"image": "/images/new-world.jpg",
					"imageCredit": "© Visit Chapel Hill",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "El Fuego presents: A selection of fun Villancicos and Ensaladas (quod Libet) by Mateo Flecha and composers from Colonial Latin-America time.",
					"dates": "Dec 18",
					"googleMaps": "https://www.google.com/maps/place/Chapel+of+the+Cross/@35.9146154,-79.0521272,17z/data=!4m5!3m4!1s0x0:0x8a044143096759e!8m2!3d35.9145706!4d-79.0498549",
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
					"location": "Carolina Inn",
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
					"googleMaps": "https://www.google.com/maps/place/The+Carolina+Inn/@35.9097518,-79.056579,17z/data=!4m5!3m4!1s0x0:0xc5f7ca9ed5ca47dd!8m2!3d35.9099369!4d-79.0545601",
					"webLink": "http://www.carolinainn.com/about/chapel-hill-event-calendar?year=2016&month=12"
					},
					{
					"name": "Chapel Hill - Carrboro Holiday Parade",
					"location": "Chapel Hill",
					"address": "Franklin St, Chapel Hill, NC 27516",
					"position": {
						"top": "185px",
						"left": "1053px"
					},
					"image": "/images/chapel-parade.jpg",
					"imageCredit": "© Downtownchapelhill.com",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "A favorite Chapel Hill tradition, the annual holiday parade highlights the rich diversity of the community. From marching bands to business leaders, youth groups, and creatively decorated floats, this event puts everyone in a festive mood. At 10 a.m., the parade begins in front of the Post Office on Franklin Street and progresses through Chapel Hill, ending around noon at the Carrboro Town Hall.",
					"dates": "Dec 10",
					"googleMaps": "https://www.google.com/maps/place/W+Franklin+St,+Chapel+Hill,+NC+27516/@35.9113469,-79.0626028,17z/data=!3m1!4b1!4m5!3m4!1s0x89acc2e11fba9c11:0xba6c960230bf3b6f!8m2!3d35.9113469!4d-79.0604088",
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
					"location": "Durham Performing Arts Center",
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
					"googleMaps": "https://www.google.com/maps/place/Durham+Performing+Arts+Center/@35.9930612,-78.9044849,17z/data=!4m5!3m4!1s0x0:0xc266ae4a60dc2ee7!8m2!3d35.9932529!4d-78.9022207",
					"webLink": "http://www.dpacnc.com/events/detail/carolina-ballet-presents-the-nutcracker-1"
					},
					{
					"name": "How the Grinch Stole Christmas the Musical",
					"location": "Durham Performing Arts Center",
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
					"googleMaps": "https://www.google.com/maps/place/Durham+Performing+Arts+Center/@35.9930612,-78.9044849,17z/data=!4m5!3m4!1s0x0:0xc266ae4a60dc2ee7!8m2!3d35.9932529!4d-78.9022207",
					"webLink": "http://www.dpacnc.com/events/detail/the-grinch"
					},
					{
					"name": "A Christmas Carol",
					"location": "Durham Performing Arts Center",
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
					"googleMaps": "https://www.google.com/maps/place/Durham+Performing+Arts+Center/@35.9930612,-78.9044849,17z/data=!4m5!3m4!1s0x0:0xc266ae4a60dc2ee7!8m2!3d35.9932529!4d-78.9022207",
					"webLink": "http://www.dpacnc.com/events/detail/ira-david-wood-iiis-a-christmas-carol"
					},
					{
					"name": "Mannheim Steamroller Christmas",
					"location": "Durham Performing Arts Center",
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
					"googleMaps": "https://www.google.com/maps/place/Durham+Performing+Arts+Center/@35.9930612,-78.9044849,17z/data=!4m5!3m4!1s0x0:0xc266ae4a60dc2ee7!8m2!3d35.9932529!4d-78.9022207",
					"webLink": "http://www.dpacnc.com/events/detail/manheim-steamrollers"
					},
					{
					"name": "Hip Hop Nutchracker",
					"location": "Durham Performing Arts Center",
					"address": "123 Vivian Street, Durham, NC 27701",
					"position": {
						"top": "185px",
						"left": "1130px"
					},
					"image": "/images/dpac-hiphop.jpg",
					"imageCredit": "© Blumenthal Arts",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "A holiday mash-up for the entire family, The Hip Hop Nutcracker, a contemporary re-imagination of Tchaikovsky’s timeless music, sets out on its second national tour following the success of last year's sold-out inaugural tour across the United States and Russia.",
					"dates": "Nov 26",
					"googleMaps": "https://www.google.com/maps/place/Durham+Performing+Arts+Center/@35.9930612,-78.9044849,17z/data=!4m5!3m4!1s0x0:0xc266ae4a60dc2ee7!8m2!3d35.9932529!4d-78.9022207",
					"webLink": "http://www.dpacnc.com/events/detail/hip-hop-nutcracker"
					},
					{
					"name": "Moscow Ballet Nutcracker",
					"location": "The Carolina Theater",
					"address": "309 West Morgan St. Street, Durham, NC 27701",
					"position": {
						"top": "175px",
						"left": "1100px"
					},
					"image": "/images/moscow-ballet.jpg",
					"imageCredit": "© Carolina Theater",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "The biggest Christmas experience of the year! The original, direct from Russia, Moscow Ballet’s Great Russian Nutcracker! “Knock Out..and... Hot Ticket!” raves the New York Times. Enchant the whole family with larger than life magical props, a 60 foot growing Christmas tree and spectacular Russian-made costumes and sets. A must-see event, witness the world’s best dancers on stage in your city!",
					"dates": "Dec 14 - Dec 15",
					"googleMaps": "https://www.google.com/maps/place/The+Carolina+Theatre/@35.9978295,-78.9049935,17z/data=!4m5!3m4!1s0x0:0xef73a72afcc70843!8m2!3d35.9977108!4d-78.9030415",
					"webLink": "http://www.carolinatheatre.org/events/moscow-ballets-great-russian-nutcracker"
					},
					{
					"name": "Music Around the World",
					"location": "The Carolina Theater",
					"address": "309 West Morgan St. Street, Durham, NC 27701",
					"position": {
						"top": "175px",
						"left": "1030px"
					},
					"image": "/images/world-music.jpg",
					"imageCredit": "© Carolina Theater",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "Travel the globe and explore some of the world’s many winter holidays in this musical revue. Songs and stories come together for a truly magical wintertime show. We will travel from Africa to Mexico and everywhere in between. You will hear a range of songs from “I Have A Little Dreidel” and “Auld Lang Syne” to “Away in a Manger,” “Sankta Lucia” and so much more. Similar in style to out hit Holidays Around the World, this show is packed with music from many of the celebrations that happen this time of year around the globe.",
					"dates": "Dec 6",
					"googleMaps": "https://www.google.com/maps/place/The+Carolina+Theatre/@35.9978295,-78.9049935,17z/data=!4m5!3m4!1s0x0:0xef73a72afcc70843!8m2!3d35.9977108!4d-78.9030415",
					"webLink": "http://www.carolinatheatre.org/events/holiday-songs-music-around-world"
					},
					{
					"name": "Christmas Concert",
					"location": "Duke Chapel",
					"address": "401 Chapel Dr, Durham, NC 27708",
					"position": {
						"top": "145px",
						"left": "1115px"
					},
					"image": "/images/choral-society.jpg",
					"imageCredit": "© Choral Society",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "Celebrate the season by joining the Choral Society of Durham for Christmas Concert: Britten's Saint Nicolas, plus carols with Durham Children's Choir and Conductor Dena Byers at Duke University Chapel.",
					"dates": "Dec 10 - Dec 11",
					"googleMaps": "https://www.google.com/maps/place/Duke+Chapel,+401+Chapel+Dr,+Durham,+NC+27705/@36.0017863,-78.9423642,17z/data=!3m1!4b1!4m5!3m4!1s0x89ace6b02795322f:0x243071b622007d8!8m2!3d36.0017863!4d-78.9401702",
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
					"location": "Holton Career and Resource Center",
					"address": "401 N. Driver St. Durham, NC 27703",
					"position": {
						"top": "170px",
						"left": "1150px"
					},
					"image": "/images/kwanzaa-durham.jpg",
					"imageCredit": "© Al Drago | News & Observer",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "Kwanzaa is a celebration of family, community and culture centered on seven basic values as building blocks for peace and progress within neighborhoods. This family friendly event will include entertainment by local and/or regional artists. The celebration will be held on the fifth day of Kwanzaa and will celebrate the principle of Nia (purpose).",
					"dates": "Dec 30",
					"googleMaps": "https://www.google.com/maps/place/Holton+Career+and+Resource+Center/@35.9895449,-78.8811625,17z/data=!4m5!3m4!1s0x0:0x906a2560e45a0509!8m2!3d35.9897258!4d-78.8792302",
					"webLink": "http://durhamnc.gov/1651/Kwanzaa"
					},
					{
					"name": "KwanzaaFest",
					"location": "Durham Armory",
					"address": "220 Foster St. Durham, NC 27701",
					"position": {
						"top": "155px",
						"left": "1145px"
					},
					"image": "/images/dance-ensemble.jpg",
					"imageCredit": "© AADE",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "For over 30 years the African American Dance Ensemble has sponsored KwanzaaFest in Durham, North Carolina. Kwanzaa is a celebration of family, community and culture centered on seven basic values as building blocks for peace and progress within neighborhoods. This family friendly event will include entertainment by local and/or regional artists.",
					"dates": "Jan 1",
					"googleMaps": "https://www.google.com/maps/place/Durham+Armory/@35.9977554,-78.9019124,19.05z/data=!4m5!3m4!1s0x0:0xf4400ffa900fbe86!8m2!3d35.9977352!4d-78.9014335",
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
					"name": "100 Years of Christmas",
					"location": "Stagville State Historic Site",
					"address": "5828 Old Oxford Hwy. Durham, NC 27712",
					"position": {
						"top": "115px",
						"left": "1175px"
					},
					"image": "/images/stagville.jpg",
					"imageCredit": "© Durham Herald-Sun",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "During the day, visit the historic homes of slaves, sharecroppers, and slaveholders, and learn about the Christmas traditions of enslaved and free people in North Carolina. After dark, purchase a ticket to see some of these buildings lit by lanterns, while your guide shares stories of holidays during slavery.",
					"dates": "Dec 3",
					"googleMaps": "https://www.google.com/maps/place/Stagville+State+Historic+Site/@36.1200327,-78.8397728,16.36z/data=!4m5!3m4!1s0x89ad03213356a2ab:0x10f7684e959ae8ec!8m2!3d36.1199177!4d-78.8366266",
					"webLink": "http://www.stagville.org/events/"
					},
					{
					"name": "Christmas by Candlelight",
					"location": "Duke Homestead",
					"address": "2828 Duke Homestead Rd, Durham, NC 27705",
					"position": {
						"top": "155px",
						"left": "1130px"
					},
					"image": "/images/duke-homestead.jpg",
					"imageCredit": "© Duke Homestead",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "Experience a historical North Carolina holiday season with Duke Homestead! Take an evening and join us as we celebrate Christmas by Candlelight. Costumed interpreters will lead you on a candlelit tour through the Historic Area festooned with period decorations as we celebrate Christmas in the 1870s.",
					"dates": "Dec 3",
					"googleMaps": "https://www.google.com/maps/place/Duke+Homestead/@36.0357471,-78.9231564,17z/data=!4m5!3m4!1s0x0:0x69db01cecdce952f!8m2!3d36.0357691!4d-78.9209888",
					"webLink": "http://dukehomestead.org/events.php"
					},
					{
					"name": "Civil War Christmas Tour",
					"location": "Bennett Place",
					"address": "4409 Bennett Memorial Rd. Durham, NC 27705",
					"position": {
						"top": "140px",
						"left": "1195px"
					},
					"image": "/images/bennett-civil.jpg",
					"imageCredit": "© NCDCR",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "Take a tour by candlelight around the farm to watch as both soldiers and civilians attempted to celebrate the holidays during the Civil War. Complimentary hot apple cider and cookies will be available at the visitor center. Tours will take place every 15 minutes.",
					"dates": "Dec 9",
					"googleMaps": "https://www.google.com/maps/place/Bennett+Place/@36.0292855,-78.9772518,17z/data=!4m5!3m4!1s0x0:0xd1d157f90ef3bb13!8m2!3d36.0292619!4d-78.9750849",
					"webLink": "http://nchistoricsites.org/bennett/event.htm#!/81396-2nd-annual-civil-war-christmas-by-candlelight-tour-program"
					},
					{
					"name": "Christmas in the Piedmont",
					"location": "Bennett Place",
					"address": "4409 Bennett Memorial Rd. Durham, NC 27705",
					"position": {
						"top": "140px",
						"left": "1085px"
					},
					"image": "/images/bennett-place.jpg",
					"imageCredit": "© NCDCR",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "Visit Bennett Place during the Christmas season and witness how this occasion was celebrated in the Piedmont Carolinas during the American Civil War. Living historians will decorate the farm in a typical modest fashion of the time. There will be cooking demonstrations in the kitchen house, games for kids, Christmas decorations and examples of presents in the main house. Soldiers will also be on site in their camp and no program would be complete without a visit from Santa. Complimentary hot apple cider and cookies will be available at the visitor center.",
					"dates": "Dec 10",
					"googleMaps": "https://www.google.com/maps/place/Bennett+Place/@36.0292855,-78.9772518,17z/data=!4m5!3m4!1s0x0:0xd1d157f90ef3bb13!8m2!3d36.0292619!4d-78.9750849",
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
					"name": "Christmas at...",
					"location": "Biltmore Estate",
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
					"googleMaps": "https://www.google.com/maps/place/1+Lodge+St,+Asheville,+NC+28803/@35.5670324,-82.5464409,17z/data=!3m1!4b1!4m5!3m4!1s0x8859f33c9a80434d:0x6339bea763fbb558!8m2!3d35.5670324!4d-82.5442522?sa=X&ved=0ahUKEwiB_7bgiN3OAhVHHB4KHdLCDAYQ8gEIJDAB",
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
					"name": "Made 4 the Holidays Craft Fair",
					"location": "Farmers Curb Market",
					"address": "501 Yanceyville Street, Greensboro, NC 27405",
					"position": {
						"top": "155px",
						"left": "923px"
					},
					"image": "/images/made4.jpg",
					"imageCredit": "© GoFarmersMarket.org",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "There will be a variety of handcrafted jewelry, pottery, fiber art, fine art, packaged artisan foods at this historic farmers market that houses over 170 vendors and artist.",
					"dates": "Nov 13 & Dec 4",
					"googleMaps": "https://www.google.com/maps/place/Greensboro+Farmers+Curb+Market/@36.078425,-79.781053,17z/data=!4m5!3m4!1s0x0:0x79d2ef95b8a63b2a!8m2!3d36.0784249!4d-79.7788592",
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
					"location": "Wrightsville Beach",
					"address": "Wrightsville Beach",
					"position": {
						"top": "670px",
						"left": "1390px"
					},
					"image": "/images/floatilla.jpg",
					"imageCredit": "© Joshua McClure",
					"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
					"description": "It is the Southern coastal version of a holiday parade – on water – at night.",
					"dates": "Nov 25 - Nov 26",
					"googleMaps": "https://www.google.com/maps/place/Wrightsville+Beach,+NC/@34.1942825,-77.8516697,12.5z/data=!4m5!3m4!1s0x89a9f301471f0185:0x81d3f3190d749c7a!8m2!3d34.2085036!4d-77.7963709",
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
					"location": "Wilmington",
					"address": "503 Market St, Wilmington, NC 28401",
					"position": {
						"top": "670px",
						"left": "1350px"
					},
					"image": "/images/bellamy.jpg",
					"imageCredit": "© Bellamy Mansion",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "The Bellamy Mansion Museum and the Burgwin-Wright House and Gardens invite the community on a Christmas Stroll Through the Past in historic downtown Wilmington, NC. Attendees can celebrate the holidays with period decorations, music, costumed interpreters, a petting zoo, refreshments and more.",
					"dates": "TBD - Check back soon!",
					"googleMaps": "https://www.google.com/maps/place/Bellamy+Mansion+Museum/@34.2359058,-77.9434995,20.48z/data=!4m5!3m4!1s0x0:0xac77d95426661dba!8m2!3d34.2361411!4d-77.9429917",
					"webLink": "http://www.bellamymansion.org/"
					}
				],
				},
				{
				"categoryType": "Celebration",
				"id": 30,
				"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
				"events": [
					{
					"name": "Meet Santa By The Sea",
					"location": "N.C. Aquarium at Fort Fisher",
					"address": "900 Loggerhead Rd, Kure Beach, NC 28449",
					"position": {
						"top": "700px",
						"left": "1350px"
					},
					"image": "/images/santa-sea.jpg",
					"imageCredit": "© NCDCR",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "Tis' almost the season to be jolly, so purchase your tickets today and save $3 per ticket! Admission is $15 for children and adults. NC Aquarium members receive a 10% discount. Children 2 and under are free. Tickets at the door are $18 for adults and children.",
					"dates": "TBD - Check back soon!",
					"googleMaps": "https://www.google.com/maps/place/North+Carolina+Aquarium+At+Fort+Fisher/@33.9621448,-77.9324443,17z/data=!4m13!1m7!3m6!1s0x89aa01d5d98999ab:0x77857b8b538b7340!2sKure+Beach,+NC+28449!3b1!8m2!3d33.9621448!4d-77.9302503!3m4!1s0x0:0xcb898b94e2c2d3a!8m2!3d33.9626269!4d-77.9261541",
					"webLink": "https://reservations.ncaquariums.com/fortfisher/Info.aspx?EventID=17"
					}
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
					"name": "Holiday Tours",
					"location": "Tryon Place",
					"address": "529 S Front St, New Bern, NC 28562",
					"position":{
						"top": "420px",
						"left": "1530px",
					},
					"image": "/images/tryon.jpg",
					"imageCredit": "© Tryon Palace",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "The Governor’s Palace and historic homes are decked out for the holidays and open for daily tours. Explore the traditions of Christmases past throughout the Tryon Palace grounds.",
					"dates": "Nov 27 - Jan 3",
					"googleMaps": "https://www.google.com/maps/place/North+Carolina+History+Center+at+Tryon+Palace/@35.1046004,-77.0452626,17z/data=!4m5!3m4!1s0x0:0xe58d279c3c33a0b5!8m2!3d35.1046902!4d-77.0430824",
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
			"cityFlag": "",
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
					"location": "Baker House",
					"address": "505 S Broad St., Edenton, NC 27932",
					"position":{
						"top": "157px",
						"left": "1650px",
					},
					"image": "/images/edenton-tour.jpg",
					"imageCredit": "© Visit Edenton",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "You won’t want to miss this self-guided walking tour of homes of Edenton’s over-300-years old historic district, beautifully decorated for the holidays.",
					"dates": "Dec 9 - Dec 10",
					"googleMaps": "https://www.google.com/maps/place/Barker+House/@36.05581,-76.611976,17z/data=!4m5!3m4!1s0x0:0x4d881ddf22c3b811!8m2!3d36.0561309!4d-76.6094913",
					"webLink": "http://visitedenton.com/christmas-candlelight-tour"
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
				"categoryType": "Celebration",
				"id": 30,
				"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
				"events": [
			
				],
				},
			]
	},
];
 