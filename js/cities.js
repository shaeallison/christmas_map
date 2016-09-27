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
					"description": "The Charlotte Motor Speedway will hold its annual Speedway Christmas light show again this year. Drive through 2.5 miles a Christmas light park and village. Sure to be fun for the whole family!",
					"dates": "TBD - Check back soon!",
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
					"description": "The quiet little town of McAdenville, which lies along the South Fork River in Gaston County  N.C., comes alive in spectacular fashion each year as Christmas draws near. Almost overnight, the small textile town is transformed into Christmas Town, USA. While much emphasis has been placed on the lighting of trees, this represents only a portion of the effort that goes into the preparation for Christmas. The town residents play a big part as they decorate their doors in original styles according to their own personal feelings. This gives a special expression of “Best Wishes for a Merry Christmas” from the townspeople to their visitors.",
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
					"description": "Gather around Bank of America's Panther Stadium at the corner of Mint and Graham Street to watch the tree lighting and other performances!",
					"dates": "TBD - Check back soon!",
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
					"description": "The 78th Annual Kannapolis Christmas events will begin after Thanksgiving and run through the month of December.",
					"dates": "Nov 28 - ",
					"googleMaps": "https://www.google.com/maps/place/700+W+C+St,+Kannapolis,+NC+28081/@35.502895,-80.6339993,17z/data=!3m1!4b1!4m5!3m4!1s0x8854062a799722a9:0x9f03c682288d08e6!8m2!3d35.502895!4d-80.6318053",
					"webLink": "https://kannapolischristmas.com/"
					}
				],
				},
				{
				"categoryType": "Tour",
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
					"location": "Latta Plantation",
					"address": "5225 Sample Rd, Huntersville, NC 28078",
					"position":{
						"top": "355px",
						"left": "715px"
					},
					"image": "/images/latta-plantation.jpg",
					"imageCredit": "© Lake Norman Magazine",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "Skip out on the hectic black-Friday shopping and instead bring your family to Historic Latta Plantation for a day full of holiday cheer.  Open both the Friday and Saturday after Thanksgiving for the annual Christmas living history event which is sure to be a highlight of the season. See the circa-1800 plantation home and buildings decorated in period holiday décor. See dressed re-enactors as they demonstrate primitive activities in preparation for the Christmas holiday. See how festivities changed within the one hundred years between the colonial days to the antebellum ways. Fun for the entire family! Picnicking available.",
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
					"description": "Visit The Ballantyne to view an enchanting display of gingerbread creations from Thursday, December 8 through Wednesday, December 28. Gingerbread Lane is free to visit and open to the public, anytime throughout the dates offered. Attendees may vote on their favorite entries with $1 minimum donation per vote. All proceeds will benefit Levine Children’s Hospital (LCH), dedicated to caring for the physical and emotional needs of children and their families. Bissell, The Ballantyne’s parent company, has played an integral role in fundraising for LCH even before its inception. Also, Santa Claus will make periodic visits to Gingerbread Lane throughout the holiday season.",
					"dates": "TBD - Check back soon!",
					"googleMaps": "https://www.google.com/maps/place/The+Ballantyne,+a+Luxury+Collection+Hotel,+Charlotte/@35.056497,-80.8503875,17z/data=!4m5!3m4!1s0x0:0xabf32b050a1a5618!8m2!3d35.0564968!4d-80.8481935",
					"webLink": "http://www.theballantynehotel.com/dining/gallery-restaurant/special-events/"
					}
				],
				},
				{
				"categoryType": "Production",
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
					"dates": "Dec 2",
					"googleMaps": "https://www.google.com/maps/place/Bechtler+Museum+of+Modern+Art/@35.2246023,-80.8496045,17z/data=!4m5!3m4!1s0x0:0x3d1743fc4e7596ce!8m2!3d35.2244822!4d-80.8473279",
					"webLink": "http://bechtler.org/Learn/Events/details/jazz-at-the-bechtler-holiday-jazz-vi-jingle-bell-jazz"
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
					"description": "Vintage Charlotte is popping up at The Fillmore Charlotte for the annual Winter Market! Come out and spend the day shopping with over 60 of the region’s best vintage & handmade vendors.",
					"dates": "Nov 20",
					"googleMaps": "https://www.google.com/maps/place/The+Fillmore+Charlotte/@35.2402992,-80.8475085,17z/data=!4m5!3m4!1s0x0:0xa561448b68aa901d!8m2!3d35.2398978!4d-80.8452813",
					"webLink": "http://vintage-charlotte.com/announcing-2016-vtgclt-winter-market/"
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
					"dates": "December",
					"googleMaps": "https://www.google.com/maps/place/Billy+Graham+Library/@35.1905251,-80.9115349,17z/data=!4m5!3m4!1s0x0:0x3b0bf80939fa1cd1!8m2!3d35.1905038!4d-80.9092641",
					"webLink": "http://billygrahamlibrary.org/christmas-at-the-library/"
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
					"webLink": "http://www.traintochristmastown.com/northcarolina/"
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
					"dates": "Nov 27 - Dec 24",
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
					"dates": "December",
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
					"dates": "Nov 19 - Dec 20",
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
	{"city": "High Point",
			"cityFlag": "",
			"icon-animation": "",
			"position": {
				"top": "",
				"left":"",
			},
		"categories": [
			{
				"categoryType": "Production",
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
			"cityFlag": "/graphics/christmas_icons-winston-salem.svg",
			"icon-animation": "",
			"position": {
				"top": "80px",
				"left":"850px",
			},
		"categories": [
			{
				"categoryType": "Tour",
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
					},
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
				{
				"categoryType": "Celebration",
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
				{
				"categoryType": "Activities",
				"categoryIcon": "/graphics/christmas_icons-activities.svg",
				"mapLocation": "coordinates",
				"events": [
					{
					"name": "Gingerbread House Workshop",
					"location": "Children's Museum of Winston-Salem",
					"address": "390 South Liberty Street Winston-Salem, NC 27101",
					"position":{
						"top": "150px",
						"left": "840px"
					},
					"image": "/images/childrens-museum.jpg",
					"imageCredit": "© Children’s Museum of Winston Salem",
					"categoryIcon": "/graphics/christmas_icons-activities.svg",
					"description": "Make and take a mini gingerbread house for $6.40, while supplies last! Build your creation with a mini milk carton, graham crackers, icing, and a variety of sweet treats! Museum admission required.",
					"dates": "Dec 23",
					"googleMaps": "https://www.google.com/maps/place/Children's+Museum+of+Winston-Salem/@36.0913133,-80.2461151,17z/data=!4m13!1m7!3m6!1s0x8853ae4fe6099c35:0x18d1c260dac137b4!2s390+S+Liberty+St,+Winston-Salem,+NC+27101!3b1!8m2!3d36.0913133!4d-80.2439211!3m4!1s0x8853ae4fe4fe6b7d:0x1bd0eb62ed1c7c2a!8m2!3d36.091312!4d-80.2438642",
					"webLink": "http://www.childrensmuseumofws.org/programs/noon-years-eve-celebration/"
					}
				],
				},
				{
				"categoryType": "Production",
				"categoryIcon": "/graphics/christmas_icons-production.svg",
				"mapLocation": "coordinates",
				"events": [
					{
					"name": "Nutcracker",
					"location": "Stevens Center",
					"address": "405 West 4th Street, Winston-Salem, NC 27101",
					"position": {
						"top": "130px",
						"left": "830px"
					},
					"image": "/images/uncsa-nutcracker.jpg",
					"imageCredit": "© UNCSA",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "Presented by First Tennessee Bank. Music by Pyotr Ilyich Tchaikovsky; Directed by Jared Redick. Original Staging and Direction by Ethan Stiefel. Experience the extraordinary performances, vivid staging and beloved score that have made UNCSA's The Nutcracker a holiday tradition! Cited as a production of enormous power and artistic excellence by YES! Weekly, the Winston-Salem Journal raves gorgeous...UNCSA's Nutcracker thrills. Featuring the largest Nutcracker orchestra in the Triad.",
					"dates": "Dec 9 - Dec 18",
					"googleMaps": "https://www.google.com/maps/place/Community+Music+School+of+UNC+School+of+the+Arts/@36.0984358,-80.2503287,17z/data=!4m13!1m7!3m6!1s0x8853ae43f9f69741:0x8b7cd9e1a1f54965!2s405+W+4th+St,+Winston-Salem,+NC+27101!3b1!8m2!3d36.0984358!4d-80.2481347!3m4!1s0x8853ae43f79a8097:0x65ac86961398382d!8m2!3d36.0983589!4d-80.2483007",
					"webLink": "http://www.childrensmuseumofws.org/programs/gingerbread-house-workshop/"
					},
					{
					"name": "Macy's Yes Virginia: The Musical",
					"location": "Twin City Stage",
					"address": "610 Coliseum Dr NW, Winston-Salem, NC 27106",
					"position":{
						"top": "100px",
						"left": "825px",
					},
					"image": "/images/yes-musical.jpg",
					"imageCredit": "© Yes Virginia Musical",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "Twin City Stage will present Macy’s Yes, Virginia: The Musical, December 16-18 at the Arts Council Theatre. Does Santa Claus really exist? Eight-year-old Virginia O’Hanlon is determined to find out. When an excitable librarian, a scraggly street Santa and even her own parents can’t give her a satisfactory answer, she writes to Francis Church at the New York Sun. Based on a true story, Church’s answer will ultimately become the most famous newspaper editorial of all time. This is TCS’s 3rd annual production of this heartwarming family musical. Friday & Saturday performances are at 7:30 pm and the Sunday matinee is at 2 pm. Tickets are $25; the box office opens to the public on Monday, December 5 at noon and is open Mon-Fri from noon-5:30 pm.",
					"dates": "Dec 16 - Dec 18",
					"googleMaps": "https://www.google.com/maps/place/Twin+City+Stage/@36.1235555,-80.2623337,17z/data=!4m13!1m7!3m6!1s0x8853ae0986cf3a13:0x712816e3893d9c00!2s610+Coliseum+Dr+NW,+Winston-Salem,+NC+27106!3b1!8m2!3d36.1235555!4d-80.2601397!3m4!1s0x8853ae09836bf75f:0x3bc8b956aafc5528!8m2!3d36.1235359!4d-80.2602718",
					"webLink": "http://twincitystage.org/show-virginia.html"
					}
				],
				},
				{
				"categoryType": "Light Show",
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
					},
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
	{"city": "Chapel Hill",
			"cityFlag": "",
			"icon-animation": "",
			"position": {
				"top": "135px",
				"left": "1045px"
				},
			"categories": [
				{
				"categoryType": "Production",
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
				"categoryType": "Production",
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
				"categoryType": "Tour",
				"categoryIcon": "/graphics/christmas_icons-tours.svg",
				"events": [
					{
					"name": "Christmas at...",
					"location": "Biltmore Estate",
					"address": "1 Lodge St, Asheville, NC 28803",
					"position": {
						"top": "320px",
						"left": "430px"
					},
					"image": "/images/biltmore.jpg",
					"imageCredit": "© HGTV",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "Immerse yourself in the holiday spirit at the most enchanting place imaginable. The wonders of Biltmore House filled with masterpieces of art and Vanderbilt family treasures are enhanced with more than 70 exquisitely decorated Christmas trees, miles of garlands, hundreds of poinsettias, and more lights than you can count.",
					"dates": "Nov 4 - Jan 8",
					"googleMaps": "https://www.google.com/maps/place/1+Lodge+St,+Asheville,+NC+28803/@35.5670324,-82.5464409,17z/data=!3m1!4b1!4m5!3m4!1s0x8859f33c9a80434d:0x6339bea763fbb558!8m2!3d35.5670324!4d-82.5442522?sa=X&ved=0ahUKEwiB_7bgiN3OAhVHHB4KHdLCDAYQ8gEIJDAB",
					"webLink": "http://www.biltmore.com/visit/plan-your-visit/buy-tickets/christmas-at-biltmore"
					},
					{
					"name": "Aluminum Ornament & Tree Museum",
					"location": "Brevard",
					"address": "189 W Main St, Brevard, NC 28712",
					"position": {
						"top": "340px",
						"left": "440px"
					},
					"image": "/images/aluminum-tree.jpg",
					"imageCredit": "© Romantic Asheville",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "This blast from the past will take you back to the 1950s when these trees were all the rage. This is a fun, quirky holiday outing that will make you smile and it's free to visit! The Aluminum Tree & Ornament Museum (ATOM) is the world's only museum dedicated to vintage aluminum Christmas trees.",
					"dates": "Nov 12 - Dec 22",
					"googleMaps": "https://www.google.com/maps/place/Transylvania+Heritage+Museum/@35.2347667,-82.7397206,17z/data=!3m1!4b1!4m5!3m4!1s0x8859a4cb089ad0c1:0xf6cc50fe9c231682!8m2!3d35.2347623!4d-82.7375319",
					"webLink": "https://www.romanticasheville.com/aluminum_tree_museum.htm"
					},
					{
					"name": "Candlelight Tour at Vance Birthplace",
					"location": "Weaverville",
					"address": "911 Reems Creek Rd, Weaverville, NC 28787",
					"position":{
						"top": "280px",
						"left": "450px"
					},
					"image": "/images/vance.jpg",
					"imageCredit": "© Romantic Asheville",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "Be transported to an 1830s era Christmas celebrated in the mountains of North Carolina, just 15 minutes north of Asheville. The two-story reconstructed log house, will be decorated and costumed guides will relate the symbolism of each of the decorations. Live music. $5/person. 4-8:30 PM",
					"dates": "Dec 3",
					"googleMaps": "https://www.google.com/maps/place/Vance+Birthplace/@35.700979,-82.4962641,15z/data=!4m5!3m4!1s0x0:0xe61d534a50a6a063!8m2!3d35.700979!4d-82.4962641?sa=X&ved=0ahUKEwjG8frAl_vOAhXGMyYKHWo7CGAQ_BIIdTAK",
					"webLink": "https://www.romanticasheville.com/vance.htm"
					},
					{
					"name": "Holiday Homecoming",
					"location": "Oconaluftee Visitor Center",
					"address": "1194 Newfound Gap Rd, Cherokee, NC 28719",
					"position":{
						"top": "300px",
						"left": "300px"
					},
					"image": "/images/oconaluftee.jpg",
					"imageCredit": "© theonefeather.com",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "Located near Cherokee at the Great Smoky Mountains entrance, see old time crafts being demonstrated at the Mountain Farm Museum. Learn by observing the practical arts of quilting, weaving, and basket and doll making, apple cider and apple butter. 10 AM-2 PM. Free",
					"dates": "Dec 17",
					"googleMaps": "https://www.google.com/maps/place/Oconaluftee+Visitor+Center/@35.5130675,-83.3083143,17z/data=!3m1!4b1!4m5!3m4!1s0x885943084a5a0cc1:0x2cb5dc8a86dd8004!8m2!3d35.5130675!4d-83.3061256",
					"webLink": "https://www.romanticasheville.com/listing/events/holiday-homecoming-oconaluftee-visitor-center.htm"
					}
				],
				},
				{
				"categoryType": "Activities",
				"categoryIcon": "/graphics/christmas_icons-activities.svg",
				"events": [
					{
					"name": "Western NC Pottery Festival",
					"location": "Dillsboro",
					"address": "Front Street Sylva, NC 28779",
					"position":{
						"top": "340px",
						"left": "400px"
					},
					"image": "/images/wnc-pottery.jpg",
					"imageCredit": "© WNC Potter Festival",
					"categoryIcon": "/graphics/christmas_icons-activities.svg",
					"description": "Join us for our 11th annual festival! This juried event showcases more than 40 master potters, with many demonstrations in a variety of techniques. Come see why it's become a top arts event in the mountains, attended annually by several thousand aficionados of pottery. * Event will go on rain or shine * ",
					"dates": "Nov 5",
					"googleMaps": "https://www.google.com/maps/place/Front+St,+Sylva,+NC+28779/@35.3691707,-83.2509934,19z/data=!3m1!4b1!4m5!3m4!1s0x88591557d4ba1c93:0x212c7af62a901821!8m2!3d35.3691707!4d-83.2504386",
					"webLink": "http://www.wncpotteryfestival.com/"
					},
					{
					"name": "Polar Express Train",
					"location": "Great Smoky Mountains Railroad",
					"address": "226 Everett St, Bryson City, NC 28713",
					"position":{
						"top": "330px",
						"left": "380px"
					},
					"image": "/images/polar-express.jpg",
					"imageCredit": "© Great Smoky Mountains Railroad",
					"categoryIcon": "/graphics/christmas_icons-activities.svg",
					"description": "A favorite area holiday tradition for kids of all ages – including the adults! More than 70,000 passengers rode last year! This year, there will be a few special excursions on their newly restored steam engine.",
					"dates": "Nov 11 - Jan 8",
					"googleMaps": "https://www.google.com/maps/place/Great+Smoky+Mountains+Railroad/@35.2945379,-83.8769264,9.5z/data=!4m5!3m4!1s0x0:0x4e298943f73c7e25!8m2!3d35.4305206!4d-83.4467965",
					"webLink": "http://www.gsmr.com/events/polar-express#.V8XG-pMrJTY"
					},
					{
					"name": "Gallery Art Walk",
					"location": "Asheville",
					"address": "Downtown Asheville, NC 28801",
					"position":{
						"top": "300px",
						"left": "440px"
					},
					"image": "/images/art-walk.jpg",
					"imageCredit": "© Visit NC",
					"categoryIcon": "/graphics/christmas_icons-activities.svg",
					"description": "Galleries stay open late with special exhibits and atists mingling.",
					"dates": "Dec 2",
					"googleMaps": "https://www.google.com/maps/place/Downtown,+Asheville,+NC+28801/@35.5941223,-82.5571812,16z/data=!3m1!4b1!4m5!3m4!1s0x8859f357a9e8cd9f:0xb17e815d911c971d!8m2!3d35.5945768!4d-82.5530753",
					"webLink": "https://www.romanticasheville.com/downtown.htm"
					},
					{
					"name": "Santa on the Rock",
					"location": "Chimney Rock",
					"address": "431 Main St, Chimney Rock, NC 28720",
					"position":{
						"top": "350px",
						"left": "480px"
					},
					"image": "/images/chimney-rock.jpg",
					"imageCredit": "© Explore Asheville",
					"categoryIcon": "/graphics/christmas_icons-activities.svg",
					"description": "Watch Sana practicing for his world-wide chimney-dropping tour on his practice chimney, the 312 foot tall Chimney Rock monolith. Repeats every week until Saturday December 10th.",
					"dates": "Dec 3 - Dec 10",
					"googleMaps": "https://www.google.com/maps/place/Chimney+Rock/@35.2706102,-82.4382464,9.04z/data=!4m5!3m4!1s0x0:0xf0c5185c44bc28f!8m2!3d35.4327351!4d-82.2502854",
					"webLink": "https://www.romanticasheville.com/chimney_rock_santa.htm"
					}
				],
				},
				{
				"categoryType": "Production",
				"categoryIcon": "/graphics/christmas_icons-production.svg",
				"events": [
					{
					"name": "A Christmas Carol",
					"location": "Flat Rock Playhouse",
					"address": "2661 Greenville Hwy, Flat Rock, NC 28731",
					"position":{
						"top": "370px",
						"left": "440px"
					},
					"image": "/images/flat-rock.jpg",
					"imageCredit": "© James Johnson",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "Charles Dickens’ classic tale adapted by Richard Hellesen and David De Berry, returns to the Flat Rock Playhouse stage in 2016. The State Theatre of North Carolina will be presenting the hit 2014 production bi-annually. Flat Rock Playhouse Mainstage.",
					"dates": "Nov 17 - Dec 17",
					"googleMaps": "https://www.google.com/maps/place/Flat+Rock+Playhouse/@35.3499017,-82.6184101,9.91z/data=!4m5!3m4!1s0x0:0x308ba8dcfd1a61a4!8m2!3d35.2739804!4d-82.4432249",
					"webLink": "https://www.flatrockplayhouse.org/2015/08/flat-rock-playhouse-announces-2016-season/"
					},
					{
					"name": "A Celtic Christmas",
					"location": "Flat Rock Playhouse",
					"address": "2661 Greenville Hwy, Flat Rock, NC 28731",
					"position":{
						"top": "360px",
						"left": "440px"
					},
					"image": "/images/playhouse.jpg",
					"imageCredit": "© Flat Rock Playhouse",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "TBD - Check back soon!",
					"dates": "Dec 1 - Dec 18",
					"googleMaps": "https://www.google.com/maps/place/Flat+Rock+Playhouse/@35.3499017,-82.6184101,9.91z/data=!4m5!3m4!1s0x0:0x308ba8dcfd1a61a4!8m2!3d35.2739804!4d-82.4432249",
					"webLink": "https://www.flatrockplayhouse.org/2015/08/flat-rock-playhouse-announces-2016-season/"
					},
					{
					"name": "Snowbound",
					"location": "ACT Theater",
					"address": "35 E Walnut St, Asheville, NC 28801",
					"position":{
						"top": "300px",
						"left": "470px"
					},
					"image": "/images/ACT.jpg",
					"imageCredit": "© Jeff Pittman",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "A mountain play with mountain music! It’s Christmas Eve in 1955 at a small town train depot where the snowy weather has caused some delays. Over the course of the evening, strangers become friends, friends become family, and the warmth of human connection is deepened through stories and songs. Though the weather outside is frightful, inside the depot it’s delightful as memories of Christmases past are shared. A World Premiere play with original bluegrass music played live onstage by members of Buncombe Turnpike and Sons of Ralph.",
					"dates": "Dec 2 - Dec 18",
					"googleMaps": "https://www.google.com/maps/place/Asheville+Community+Theatre/@35.597075,-82.550704,15z/data=!4m5!3m4!1s0x0:0xef9b017e4a5e1bbf!8m2!3d35.597075!4d-82.550704",
					"webLink": "http://www.ashevilletheatre.org/shows-events/mainstage-2016-17/"
					},
					{
					"name": "All is Calm: The Christmas Truce 1914",
					"location": "North Carolina Stage Company",
					"address": "15 Stage Lane, Asheville, NC 28801",
					"position":{
						"top": "300px",
						"left": "420px"
					},
					"image": "/images/stage-company.jpg",
					"imageCredit": "© Ask Asheville",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "NC Stage Theatre in downtown Asheville presents a poignant moment in history when Allied and German soldiers laid down their arms to celebrate the holiday together with holiday songs. Back by popular demand!",
					"dates": "Dec 7 - Dec 23",
					"googleMaps": "https://www.google.com/maps/place/North+Carolina+Stage+Company/@35.595963,-82.554177,15z/data=!4m5!3m4!1s0x0:0x1ad6653af52793df!8m2!3d35.595963!4d-82.554177",
					"webLink": "http://www.ncstage.org/productions/calm-christmas-truce-1914-reprises/"
					}
				],
				},
				{
				"categoryType": "Light Show",
				"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
				"events": [
					{
					"name": "Winter Lights",
					"location": "NC Arboretum",
					"address": "100 Frederick Law Olmsted Way, Asheville, NC 28806",
					"position":{
						"top": "350px",
						"left": "410px"
					},
					"image": "/images/nc-winter-lights.jpg",
					"imageCredit": "© Creston ",
					"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
					"description": "Don't miss The North Carolina Arboretum's elaborate Winter Lights show, transforming the gardens into a nighttime wonderland. Stroll through spectacular lighted displays and see the gardens in a completely new way. Designed with an artistic aesthetic, The Winter Lights show enhances the natural beauty of the gardens as you celebrate the holidays.",
					"dates": "Nov 18 - Jan 1",
					"googleMaps": "https://www.google.com/maps/place/The+North+Carolina+Arboretum/@35.5369178,-82.6097923,12.12z/data=!4m5!3m4!1s0x0:0x4585c3a152c29f6b!8m2!3d35.497852!4d-82.60824",
					"webLink": "http://www.ncarboretum.org/exhibits-events/winter-lights/"
					},
					{
					"name": "Christmas Lights",
					"location": "Forest City",
					"address": "Forest City, NC 28043",
					"position":{
						"top": "380px",
						"left": "500px"
					},
					"image": "/images/forest-city.jpg",
					"imageCredit": "© Romantic Asheville",
					"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
					"description": "For the ultimate festive small town experience to get you in the holiday spirit, drive and stroll down Main Street decked out with a million lights for Hometown Holidays in our top Christmas Town Forest City in Rutherford County. Wrapped around the live oak trees and hanging overhead, the displays center around the town fountain. The tradition dates back to 1930 when the town hung its first set of lights on two trees. Bundle up with a cup of hot chocolate and hop on a carriage or hayride (offered on weekends) through the magical display of holiday lights.",
					"dates": "Nov 24 - Jan 6",
					"googleMaps": "https://www.google.com/maps/place/Forest+City,+NC+28043/@35.4188588,-82.3079683,9.92z/data=!4m5!3m4!1s0x88574079b6b8f88b:0xd1dcd1c51ee70f1c!8m2!3d35.3340108!4d-81.8651028",
					"webLink": "https://www.romanticasheville.com/forest-city-lights"
					},
					{
					"name": "Festival of Lights",
					"location": "Lake Julian",
					"address": "406 Overlook Rd Ext, Arden, NC 28704",
					"position":{
						"top": "330px",
						"left": "440px"
					},
					"image": "/images/lake-julian.jpg",
					"imageCredit": "© Romantic Asheville",
					"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
					"description": "Drive through a festive holiday light display along Lake Julian in south Asheville (near Biltmore Park). Their Festival of Lights is lit with thousands of colored lights and 50 animated and stationary light displays. The road circling this Buncombe County park becomes a magical journey. The light show is open 6-9 PM and admission is $5/car. ",
					"dates": "Dec 1 - Dec 23",
					"googleMaps": "https://www.google.com/maps/place/Buncombe+County+Lake+Julian+Park/@35.3699838,-83.1476442,8.56z/data=!4m5!3m4!1s0x0:0x6adf584848feb8c0!8m2!3d35.480289!4d-82.539448",
					"webLink": "https://www.romanticasheville.com/lake_julian.htm"
					},
					{
					"name": "Festival of Lights",
					"location": "Dillsboro",
					"address": "Dillsboro, North Carolina 28779",
					"position":{
						"top": "340px",
						"left": "320px"
					},
					"image": "/images/dillsboro-lights.jpg",
					"imageCredit": "© Romantic Asheville ",
					"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
					"description": "The Dillsboro Festival of Lights & Luminaries illuminates this mountain village the first two weekends in December. In an era of electronic gadgetry and LED lights, Dillsboro’s celebration is a throwback. Adapted from a Scandinavian custom of lighting the way for the Christ child, more than 2,500 candles in white bags line the streets with more than a dozen shops to explore.",
					"dates": "Dec 2-3 & Dec 9-10",
					"googleMaps": "https://www.google.com/maps/place/Dillsboro,+NC+28779/@35.3690007,-83.2726026,14z/data=!3m1!4b1!4m5!3m4!1s0x88593ffc91620839:0xcb3c67c532afb4ea!8m2!3d35.3692665!4d-83.2523705?sa=X&ved=0ahUKEwiqp5CjiurOAhXIRSYKHSJMB8kQ8gEIkQEwCw",
					"webLink": "https://www.romanticasheville.com/dillsboro_festival_luminaries.htm"
					}
				],
				},
				{
				"categoryType": "Celebration",
				"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
				"events": [
					{
					"name": "Holiday Parade",
					"location": "Asheville",
					"address": "S Charlotte St Asheville, NC 28801",
					"position": {
						"top": "310px",
						"left": "470px"
					},
					"image": "/images/holiday-asheville.jpg",
					"imageCredit": "© Pat Barcas",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "Kick off the festive season with the annual Asheville Holiday Parade, presented by Bojangles, that starts at 11 AM (so several downtown streets will be closed). The Parade will line up along South Charlotte Street which will be closed to traffic beginning at 7 AM. The parade travels up Biltmore Avenue towards Pack Square.",
					"dates": "Nov 19",
					"googleMaps": "https://www.google.com/maps/place/S+Charlotte+St,+Asheville,+NC+28801/@35.5924,-82.5508171,17z/data=!3m1!4b1!4m5!3m4!1s0x8859f3599b0af441:0x10180de3cffa5ad3!8m2!3d35.5924!4d-82.5486284?sa=X&ved=0ahUKEwj5i4_D9enOAhUGZCYKHbAbCsYQ8gEIGzAA",
					"webLink": "https://www.romanticasheville.com/holiday_parade.htm"
					},
					{
					"name": "Old Fashioned Dickens of a Christmas Festival",
					"location": "Biltmore Village",
					"address": "10 Brook St, Asheville, NC 28803",
					"position":{
						"top": "300px",
						"left": "490px"
					},
					"image": "/images/biltmore-dickens.jpg",
					"imageCredit": "© Romantic Asheville ",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "Enjoy many festivities including horse-drawn carriages, carolers, tree lighting, storytellers and instrumentalists in historic Biltmore Village. And chestnuts roasting on an open fire!",
					"dates": "Dec 2 - Dec 3",
					"googleMaps": "https://www.google.com/maps/place/Historic+Biltmore+Village/@35.5668837,-82.5430212,17z/data=!3m1!4b1!4m5!3m4!1s0x8859f33c9edf2521:0x7a076ecf1eac536!8m2!3d35.5668837!4d-82.5408325",
					"webLink": "historicbiltmorevillage.com"
					},
					{
					"name": "Old Fashioned Christmas",
					"location": "Hendersonville",
					"address": "Main St Hendersonville, NC 28792",
					"position":{
						"top": "330px",
						"left": "450px"
					},
					"image": "/images/hendersonville.jpg",
					"imageCredit": "© Visit NC",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "Walk down Main Street in beautiful downtown Hendersonville, filled with shopping, hot cider, cookies, carolers and food. Return Saturday morning for the 10AM parade.",
					"dates": "Dec 2 - Dec 3",
					"googleMaps": "https://www.google.com/maps/place/N+Main+St,+Hendersonville,+NC/@35.3250048,-82.4645339,17z/data=!3m1!4b1!4m5!3m4!1s0x8859c208e01265c9:0x67d547f4ca23581d!8m2!3d35.3250004!4d-82.4623452",
					"webLink": "http://downtownhendersonville.org/news/calendar-of-events/"
					},
					{
					"name": "Holiday Twilight Tour",
					"location": "Brevard",
					"address": "E Main St Brevard, NC 28712",
					"position":{
						"top": "380px",
						"left": "410px"
					},
					"image": "/images/brevard-tour.jpg",
					"imageCredit": "© Romantic Asheville",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "Join the locals in a longtime favorite in downtown Brevard tradition. After the Christmas parade at 3PM, Main Street will be closed to traffic so you can enjoy live music, horse-drawn carriages, bonfires, shopping, vendors and more.",
					"dates": "Dec 3",
					"googleMaps": "https://www.google.com/maps/place/Brevard,+NC/@35.2012563,-82.8780957,10.68z/data=!4m5!3m4!1s0x8859a4cb5640a41d:0x8f85466844a544b3!8m2!3d35.2334472!4d-82.7342919",
					"webLink": "https://www.google.com/maps/place/E+Main+St+%26+S+Broad+St,+Brevard,+NC+28712/@35.2337585,-82.7365,17z/data=!3m1!4b1!4m5!3m4!1s0x8859bb34b10bab05:0x14f55de419742b6!8m2!3d35.2337541!4d-82.734306"
					},
					{
					"name": "Candlelight Christmas Stroll",
					"location": "Weaverville",
					"address": "N Main St Weaverville, NC 28787",
					"position":{
						"top": "300px",
						"left": "440px"
					},
					"image": "/images/weaver-stroll.jpg",
					"imageCredit": "© Romantic Asheville",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "Downtown Weaverville has luminaries along the streets, local choirs and bands will provide music, and horse and buggy rides will be available through town. 6-9 PM. Local businesses will be open late and the official tree lighting at 7:30 PM.",
					"dates": "Dec 9",
					"googleMaps": "https://www.google.com/maps/place/Weaverville,+NC+28787/@35.6977972,-82.5608568,18.16z/data=!4m5!3m4!1s0x885a1f22e2043b5d:0x3708d1cce5eb1f76!8m2!3d35.6970547!4d-82.5606851",
					"webLink": "https://www.romanticasheville.com/weaverville.htm"
					},
					{
					"name": "Chanukah Live!",
					"location": "Asheville",
					"address": "TBD - Check back soon!",
					"position":{
						"top": "300px",
						"left": "440px"
					},
					"image": "/images/chanukah-live.jpg",
					"imageCredit": "© Citizen-Times",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "Asheville’s largest Hanukkah party with fun for all ages. Features music, attractions for teens and adults, Sushi Bar and Kosher food stations, shopping and more. 3-6 PM. Free",
					"dates": "Dec 18",
					"googleMaps": "",
					"webLink": "http://www.chabadasheville.org/templates/articlecco_cdo/aid/442789/jewish/Holiday-Events.htm"
					},
					{
					"name": "Hanukkah Shuk",
					"location": "Asheville",
					"address": "TBD - Check back soon!",
					"position":{
						"top": "300px",
						"left": "400px"
					},
					"image": "/images/shuk.jpg",
					"imageCredit": "© Asheville JCC",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "Dreidels, wrapping paper, Hanukkah toys, disposable menorahs, candles, gelt (chocolate coins), tzedakah boxes, games, puzzles and more! We’ll have a lot of new items available this year! Come and get your supplies while they last. If you have requests, please get them in to rochelle@jcc-asheville.org by October first and she’ll happily add them to the order!",
					"dates": "Dec 18",
					"googleMaps": "",
					"webLink": "http://www.chabadasheville.org/templates/articlecco_cdo/aid/442789/jewish/Holiday-Events.htm"
					}
				],
				},
				{
				"categoryType": "Tree Farm",
				"categoryIcon": "/graphics/christmas_icons-trees.svg",
				"events": [
					{
					"name": "Buck Knob Farm",
					"location": "Cullowhee",
					"address": "1051 Wolf Knob Rd, Cullowhee, NC 28723",
					"position":{
						"top": "385px",
						"left": "290px"
					},
					"image": "/images/buck-knob.jpg",
					"imageCredit": "© Buck Knob Farm",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Buck Knob Farm offers chose and cut fraser fir christmas trees and wreaths.",
					"dates": "TBD - Check back soon!",
					"googleMaps": "https://www.google.com/maps/place/1051+Wolf+Knob+Rd,+Cullowhee,+NC+28723/@35.4533063,-83.3890305,10.46z/data=!4m5!3m4!1s0x8859177eb34266dd:0x511da3244ae91442!8m2!3d35.2037456!4d-83.2041838",
					"webLink": "http://www.buckknobfarm.com/home.html"
					},
					{
					"name": "Pressley Tree Farm",
					"location": "Glenville",
					"address": "770 Shirley Pressley Rd. Glenville, NC 28736",
					"position":{
						"top": "400px",
						"left": "300px"
					},
					"image": "/images/pressley-trees.jpg",
					"imageCredit": "© Jackson County Trees",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Pressley Tree Farm offers chose and cut fraser fir christmas trees and wreaths.",
					"dates": "Nov 21 - Dec 20",
					"googleMaps": "https://www.google.com/maps/place/770+Shirley+Pressley+Rd,+Glenville,+NC+28736/@35.1016209,-83.2239661,9.97z/data=!4m5!3m4!1s0x88591ac4135e5b2f:0x739ea7d57efa2c61!8m2!3d35.165128!4d-83.094193",
					"webLink": "http://www.ncchristmastrees.com/member-directory/911-pressley-tree-farm-llc"
					},
					{
					"name": "Christmas Tree Farm",
					"location": "Little Switzerland",
					"address": "456 McKinney Mine Road Little Switzerland, NC 28749",
					"position":{
						"top": "220px",
						"left": "480px"
					},
					"image": "/images/little-switzerland.jpg",
					"imageCredit": "© Asheville Guide Book",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Located in picturesque Little Switzerland. Open starting November 14, 9 AM-5 PM on Fridays and Saturdays and Sundays from 12-5 PM. An experience the whole family will enjoy. There's a cozy pot belly stove available while enjoying hot cider or cocoa. Then you head to the field to select your tree, finishing up by visiting Huck the farm dog while the tree is bailed and prepared for transport. Your trip will be jam-packed with memories for years to come. They are only 30 minutes from I-40 and in the shadow of Mt. Mitchell in one of the most picturesque areas in all the mountains. The farm is pet friendly and just off the Blue Ridge Parkway.",
					"dates": "Nov 21 - Dec 6",
					"googleMaps": "https://www.google.com/maps/place/456+McKinney+Mine+Rd,+Spruce+Pine,+NC+28777/@35.8454401,-82.524009,8.91z/data=!4m5!3m4!1s0x8850a5e3c152c451:0x15ba997d8d73e5b9!8m2!3d35.84644!4d-82.124095",
					"webLink": "http://lsctf.com/"
					},
					{
					"name": "Mehaffey Tree Farm",
					"location": "Waynesville",
					"address": "24 Corner Drive, Waynesville, NC 28785",
					"position":{
						"top": "250px",
						"left": "330px"
					},
					"image": "/images/mehaffey.jpg",
					"imageCredit": "© Mehaffey Tree Farm",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "We are a North Carolina Christmas tree farm located in western North Carolina in the Blue Ridgefarm1 Mountains. Our fraser firs love the climate of Haywood County and the Great Smoky Mountains as much as we do. We have been a family owned and operated tree farm since 1984. We are a wholesale grower and distributor of fraser firs and wreaths. In addition, we open our farm to families for retail Choose & Cut for several weeks during the year. Our tree farm takes pride in growing our trees and providing the highest quality trees and services to our customers.",
					"dates": "Nov 19 - Dec 11",
					"googleMaps": "https://www.google.com/maps/place/24+Corner+Dr,+Waynesville,+NC+28785/@35.5575663,-83.0403744,15z/data=!4m21!1m15!4m14!1m6!1m2!1s0x88597a7b61e08879:0xb81b106c907bc9e9!2s445+Boyd+Farm+Road,+Waynesville,+NC+28785!2m2!1d-83.030756!2d35.548748!1m6!1m2!1s0x88597a8cacf60ee5:0xf832f6b063b3cada!2s24+Corner+Dr,+Waynesville,+NC+28785!2m2!1d-83.04195!2d35.561739!3m4!1s0x88597a8cacf60ee5:0xf832f6b063b3cada!8m2!3d35.561739!4d-83.04195",
					"webLink": "http://www.mehaffeytreefarm.com/"
					},
					{
					"name": "Boyd Mountain Christmas Tree Farm",
					"location": "Waynesville",
					"address": "445 Boyd Farm Road Waynesville, NC 28785",
					"position":{
						"top": "260px",
						"left": "340px"
					},
					"image": "/images/boyd-mnt.jpg",
					"imageCredit": "© Boyd Mountain Christmas Tree Farm",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Easy paved access, lots of parking, restrooms, handicap facilities, free refreshments, wreaths and gift items in our hospitality tent. You select the tree...they cut it, bale it and tie it on your vehicle or you can use their bow saws and cut it yourself! A wonderful family experience walking through the manicured fields and selecting your own tree! *Weekdays only*",
					"dates": "Nov 11 - Dec 11",
					"googleMaps": "https://www.google.com/maps/place/445+Boyd+Farm+Rd,+Waynesville,+NC+28785/@35.6388988,-83.2055227,8.95z/data=!4m5!3m4!1s0x88597a7b61e08879:0xb81b106c907bc9e9!8m2!3d35.548748!4d-83.030756",
					"webLink": "http://www.boydmountainchristmastreefarm.com/"
					},
					{
					"name": "Sandy Hollar Tree Farm",
					"location": "Leicester",
					"address": "63 Sandy Hollar Road Leicester, NC 28748",
					"position":{
						"top": "280px",
						"left": "380px"
					},
					"image": "/images/sandy-hollar.jpg",
					"imageCredit": "© Sandy Hollar Farms",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Open Sunday-Saturday 9 AM-4:30 PM from the weekend before Thanksgiving through the weekend before Christmas. Buy wreaths, garland (roping), decorations, refreshments, and crafts. Hay rides to the tree fields and marshmallow roasting on weekends.",
					"dates": "Nov 19 - Dec 18",
					"googleMaps": "https://www.google.com/maps/place/63+Sandy+Hollar+Ln,+Leicester,+NC+28748/@35.596798,-83.3752484,8.58z/data=!4m5!3m4!1s0x885980ddd2d8d6f3:0xc57c0bca4f644411!8m2!3d35.6648439!4d-82.8398903",
					"webLink": "http://sandyhollarfarms.com/"
					},
					{
					"name": "Frosty Mountain Christmas Trees",
					"location": "Marshall",
					"address": "13623 Highway 212 Marshall, NC 28753",
					"position":{
						"top": "200px",
						"left": "360px"
					},
					"image": "/images/frosty-mnt.jpg",
					"imageCredit": "© Frosty Mountain Christmas Trees",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Donna and Chipper Jones and their family grow 80,000 Fraser fir on 55 acres of their 300 acre farm at elevations of 3200 to 4800 feet. Donna grades the trees herself. The annual harvest begins in November — not September — so Frosty Mountain trees are the freshest possible when they are displayed on the retailer’s lot. In addition to Fraser fir trees, the farm provides lush garland of any length and handmade wreaths from 10” to 48” in diameter made of natural, fresh Fraser fir trimmings.",
					"dates": "TBD - Check back soon!",
					"googleMaps": "https://www.google.com/maps/place/13623+NC-212,+Marshall,+NC+28753/@35.8019071,-82.9078927,10.23z/data=!4m5!3m4!1s0x885a3f11848d7799:0xce2a4aae10712281!8m2!3d36.008352!4d-82.618217",
					"webLink": "http://frostymountainchristmastrees.com/"
					},
					{
					"name": "Cartner Christmas Tree Farm",
					"location": "Newland",
					"address": "901 Balsam Drive Newland, NC 28657",
					"position":{
						"top": "170px",
						"left": "490px"
					},
					"image": "/images/cartner-trees.jpg",
					"imageCredit": "© Vitit NC",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Enjoy warm accommodations, hot cocoa, hot cider and cookies. They will cut, bale and load your tree once it’s selected. The farm is located in Newland, approximately 65 miles northeast from Asheville. They also have wreaths and garland, along with special greenery requests.",
					"dates": "Nov 19 - Dec 25",
					"googleMaps": "https://www.google.com/maps/place/901+Balsam+Dr,+Newland,+NC+28657/@36.124476,-81.9414747,17z/data=!3m1!4b1!4m5!3m4!1s0x88509233079084f9:0x1a013e175c024252!8m2!3d36.124476!4d-81.939286",
					"webLink": "http://www.carolinafraserfir.com/choose-cut/"
					},
					{
					"name": "Smoky Mountain Christmas Tree Farm",
					"location": "Waynesville",
					"address": "756 Hemphill Road Waynesville, NC 28785",
					"position":{
						"top": "270px",
						"left": "310px"
					},
					"image": "/images/smoky-mnt.jpg",
					"imageCredit": "© Smoky Mountain Christmas Tree Farm",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "In Jonathan creek, near Maggie Valley, NC, you will find Smoky Mountain Christmas Tree Farm. The beautiful old red barn is surrounded by Fraser Fir Christmas trees...",
					"dates": "TBD - Check back soon!",
					"googleMaps": "https://www.google.com/maps/place/756+Hemphill+Rd,+Waynesville,+NC+28785/@35.596497,-83.1798624,10.69z/data=!4m5!3m4!1s0x88597a611c7ccc97:0x8daf38518b1f4e66!8m2!3d35.5583653!4d-83.0326194",
					"webLink": "http://smokymountainchristmastreefarm.com/"
					},
					{
					"name": "Two D's Nursery",
					"location": "Newland",
					"address": "7849 Linville Falls Hwy, Newland, NC 28657",
					"position":{
						"top": "210px",
						"left": "520px"
					},
					"image": "/images/two-ds.jpg",
					"imageCredit": "© Two D’s Nursery",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Two D's Nursery is a Fraser Fir Christmas Tree and White Pine Christmas Tree farm in Newland, NC; owned and operated by the father and son team of Herman and John Dellinger located in the mountains of western North Carolina, known as The High Country. Herman Dellinger is a pioneer of the North Carolina Christmas tree industry. He and his brothers planted their first Fraser Firs in 1959. He served as one of the founders of the North Carolina Christmas Tree Growers' Association. Like his father before him, Herman farmed and taught high school agriculture and horticulture in Avery County Schools for over 30 years.",
					"dates": "Nov 24 - Dec 25",
					"googleMaps": "https://www.google.com/maps/place/7849+Linville+Falls+Hwy,+Newland,+NC+28657/@35.9153436,-82.2714007,9.95z/data=!4m5!3m4!1s0x8850be71226cbd1b:0x949e24f202c08f4c!8m2!3d35.9636632!4d-81.9470541",
					"webLink": "http://www.twodsnursery.com/chooseAndCut.html"
					},
					{
					"name": "Sugar Plum Farm",
					"location": "Plumtree",
					"address": "1263 Isaacs Branch Rd Newland, NC 28657",
					"position":{
						"top": "180px",
						"left": "470px"
					},
					"image": "/images/sugar-plum.jpg",
					"imageCredit": "© Mckimmon Center NCSU",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "We have all sizes of North Carolina Fraser fir trees to choose from. We furnish the saw to cut your tree or we will cut it for you and we will bail the tree. We will load and tie down your tree to insure a safe trip home for you and your tree. Wreaths, garland, and other greenery items are available. Bring the whole family and take a hayride to pick the perfect North Carolina Fraser fir Christmas tree. We have picnic tables around a pond and small animals (ducks, farm dog, etc.). Apple cider, hot chocolate and coffee along with other drinks and souvenirs will be provided at no extra cost. We have home made apple butter and honey for sale. Trout fishing in our pond is extra.",
					"dates": "TBD - Check back soon!",
					"googleMaps": "https://www.google.com/maps/place/1263+Isaacs+Branch+Rd,+Newland,+NC+28657/@36.1498333,-81.6057904,9.17z/data=!4m5!3m4!1s0x885096e4ceb0af09:0xb52078125e4236a9!8m2!3d36.0500299!4d-81.9899137",
					"webLink": "http://www.sugarplumfarms.com/choose&cut.htm"
					},
					{
					"name": "Lil' Grandfather Choose and Cut",
					"location": "Laurel Springs",
					"address": "15371 NC Hwy 18 South Laurel Springs, NC 28644",
					"position":{
						"top": "90px",
						"left": "640px"
					},
					"image": "/images/lil-choose.jpg",
					"imageCredit": "© Lil’ Grandfather Mountain Christmas Tree Farm",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Lil' Grandfather Mountain is a full service choose and cut Christmas tree farm. We offer premium Fraser fir, Concolor fir, White Pine and Blue Spruce Christmas trees. As well as wreaths, roping, baskets, and specialty wreaths. Bring your family and friends and spend the day enjoying Lil' Grandfather Mountain Christmas Tree Farm’s free horse rides, hay rides, hay bale movie theater, heated restroom, Santa Claus and Santa's workshop, handmade local crafts, and concessions. ",
					"dates": "TBD - Check back soon!",
					"googleMaps": "https://www.google.com/maps/place/15371+NC-18,+Laurel+Springs,+NC+28644/@36.1498333,-81.6057904,9.17z/data=!4m5!3m4!1s0x8851a3fde416578b:0xdf54ee03a46b2dc6!8m2!3d36.3755559!4d-81.2459349",
					"webLink": "http://lilgrand.com/"
					},
					{
					"name": "Grouse Ridge Christmas Tree Farm",
					"location": "Grassy Creek",
					"address": "14911 Old NC Hwy 16 Grassy Creek, NC 28631",
					"position":{
						"top": "60px",
						"left": "690px"
					},
					"image": "/images/grouse-trees.jpg",
					"imageCredit": "© Grouse Ridge Christmas Tree Farm",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Established in 1976 by Sanford and Deborah Fishel, Grouse Ridge has committed to the growing of quality Christmas Trees of all sizes from table top to over ten feet in height. ",
					"dates": "TBD - Check back soon!",
					"googleMaps": "https://www.google.com/maps/place/Fishel+Organics/@36.5701729,-81.401005,17z/data=!3m1!4b1!4m5!3m4!1s0x8851b6cf4ce10091:0x47509cf81bf2fd8c!8m2!3d36.5701729!4d-81.398811",
					"webLink": "http://www.grouseridgetrees.com/"
					},
					{
					"name": "Douglas R. Clark Nursery",
					"location": "Newland",
					"address": "204 White Pine Rd Newland, NC 28657",
					"position":{
						"top": "190px",
						"left": "490px"
					},
					"image": "/images/douglas-trees.jpg",
					"imageCredit": "© C & G Nursery",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "C&G Nursery is a family owned nursery located in the beautiful Blue Ridge Mountains of Western North Carolina. We began our business in 1961 growing Christmas tree and native ornamentals. We are wholesale growers of over 100 different varieties of trees and shrubs as well as still growing the Fraser fir and other natives, which started our business.",
					"dates": "TBD - Check back soon!",
					"googleMaps": "https://www.google.com/maps/place/204+White+Pine+Rd,+Newland,+NC+28657/@36.0924194,-82.4705549,9.4z/data=!4m5!3m4!1s0x88509453b8b9e6d5:0x67c684ccb0f260e2!8m2!3d36.037899!4d-81.9170339",
					"webLink": "http://www.candgnursery.com/"
					},
					{
					"name": "Helms Christmas Tree Farm",
					"location": "Vale",
					"address": "6345 Christmas Tree Lane Vale, NC 28168",
					"position":{
						"top": "290px",
						"left": "650px"
					},
					"image": "/images/helms-trees.jpg",
					"imageCredit": "© Helms Christmas Tree Farm",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Helms Christmas Tree Farm  has been in business for over 30 years and we offer our customers a fresh farm grown Christmas Tree that they can cut themselves. We provide a saw and we shake and bale your tree. You can enjoy a day on the farm with your family.",
					"dates": "TBD - Check back soon!",
					"googleMaps": "https://www.google.com/maps/place/Helms+Christmas+Tree+Farm/@35.5132482,-81.4199831,17z/data=!4m13!1m7!3m6!1s0x8856d1500cab1fa3:0xa697e18aa80723fe!2s6345+Christmas+Tree+Ln,+Vale,+NC+28168!3b1!8m2!3d35.5132482!4d-81.4177944!3m4!1s0x8856d1500cab1fa3:0xfe54af9dfa651f23!8m2!3d35.5133838!4d-81.4179551",
					"webLink": "http://www.helmschristmastreefarm.com/"
					},
					{
					"name": "Snowy Mountain Christmas Tree Farm",
					"location": "Newland",
					"address": "4699 Linville Falls Hwy Newland, NC 28657",
					"position":{
						"top": "170px",
						"left": "510px"
					},
					"image": "/images/snowy-trees.jpg",
					"imageCredit": "© Snowy Mountain Christmas Tree Farm",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Our Choose & Cut farm features the Fraser Fir Christmas Tree. Fraser Fir is the very best choice because of its perfect shape, rich dark green color, clean pine scent, and ability to hold its needles for a long time after being cut. Choose and cut sizes range from table top 3ft ft. to 16 ft. tall. The farm offers easy access and breathtaking views of the surrounding countryside. Be sure to check-in at our Christmas shop during your choose and cut excursion. You are also welcome to pre-tag your Christmas tree at any time during the year.",
					"dates": "May - Dec",
					"googleMaps": "https://www.google.com/maps/place/4699+Linville+Falls+Hwy,+Newland,+NC+28657/@35.8097969,-82.4421419,8.92z/data=!4m5!3m4!1s0x8850951fab42e427:0x7878fbcaadc7eded!8m2!3d36.025031!4d-81.9169753",
					"webLink": "http://www.snowymountainchristmastreefarm.com/choose-and-cut"
					}
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
				"categoryType": "Celebration",
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
				"categoryType": "Tree Farm",
				"categoryIcon": "/graphics/christmas_icons-trees.svg",
				"events": [
					{
					"name": "Spillman's Christmas Tree Farm",
					"location": "Sophia",
					"address": "1576 Will Coltrane Rd, Sophia, NC 27350",
					"position":{
						"top": "170px",
						"left": "890px"
					},
					"image": "/images/spillman-trees.jpg",
					"imageCredit": "© Spillman’s Christmas Tree Farm",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Here at the Spillman’s Tree farm you can create family traditions and start your Christmas season with a beautiful pre-cut Fraser Fir or White Pine; and we have Choose & Cut trees ready this year:  Leyland Cypress, Red Cedar, Carolina Sapphire and White Pine.  We also have decorated wreaths, garlands and tree stands for you to choose from. You will have a wonderful experience riding our wagon out to the Randleman Lake, scenic overlook to build beautiful memories for your children, families, and friends choosing your Christmas tree.",
					"dates": "Nov 25 - Dec 25",
					"googleMaps": "https://www.google.com/maps/place/Spillman's+Christmas+Tree+Farm/@35.83258,-80.1399568,10.11z/data=!4m13!1m7!3m6!1s0x885313418403dc3f:0xe42ae827ca9d4047!2s1576+Will+Coltrane+Rd,+Sophia,+NC+27350!3b1!8m2!3d35.852061!4d-79.846846!3m4!1s0x885313418403dc3f:0xfa11a35fab15f32b!8m2!3d35.852061!4d-79.846846",
					"webLink": "https://www.facebook.com/Spillmans-Christmas-Tree-Farm-126267813644/"
					},
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
				"categoryType": "Activities",
				"categoryIcon": "/graphics/christmas_icons-activities.svg",
				"events": [
					{
					"name": "Christmas by the Sea",
					"location": "Carolina Beach Boardwalk",
					"address": "Carolina Beach Ave S, Carolina Beach, NC 28428",
					"position": {
						"top": "650px",
						"left": "1360px"
					},
					"image": "/images/christmas-sea.jpg",
					"imageCredit": "© Southern Digital Art",
					"categoryIcon": "/graphics/christmas_icons-activities.svg",
					"description": "The Boardwalk area will be decorated and lit up each and every night during the holiday season starting with the lighting ceremony on November 25 . On noted days, the following activities will be available for the enjoyment of the whole family: Santa at the Welcome Center, fire pit with storytelling, hot chocolate at the Welcome Center, live Nativity scene, caroling, holiday themed movies at the Gazebo, puppet shows and an arts & crafts area with ornament making activities for kids. Celebrate the holidays with Christmas by the Sea!",
					"dates": "Nov 25 - Dec 17",
					"googleMaps": "https://www.google.com/maps/place/Carolina+Beach+Boardwalk/@34.0328788,-77.8942144,17z/data=!3m1!4b1!4m5!3m4!1s0x89a9f8fa58c0f57b:0x7be551d6001bb1f3!8m2!3d34.0328788!4d-77.8920257",
					"webLink": "http://www.facebook.com/Xmasbythesea/timeline"
					},
					{
					"name": "Holiday Market",
					"location": "Kure Beach",
					"address": "105 Atlantic Avenue Kure Beach NC 28449",
					"position": {
						"top": "670px",
						"left": "1350px"
					},
					"image": "/images/beach-market.jpg",
					"imageCredit": "© Visit Carolina Beach NC",
					"categoryIcon": "/graphics/christmas_icons-activities.svg",
					"description": "Come enjoy the closest holiday market to the Atlantic Ocean! Get a jumpstart on your holiday shopping while supporting local artisans at the Kure Beach Holiday Market. You can enjoy the beautiful ocean view as you browse through items handcrafted by talented artists and crafters as well as a DJ and plenty of food trucks to choose from.  Who wouldn't want to shop oceanfront!?",
					"dates": "Nov 19 - Nov 26",
					"googleMaps": "https://www.google.com/maps/place/105+Atlantic+Ave,+Kure+Beach,+NC+28449/@33.9966476,-77.9074884,2187m/data=!3m1!1e3!4m5!3m4!1s0x89a9f8b552f38f9b:0x976127ab1bac3fd6!8m2!3d33.998639!4d-77.905929",
					"webLink": "http://www.townofkurebeach.org/OFPP-activities-events.aspx"
					}
				],
				},
				{
				"categoryType": "Production",
				"categoryIcon": "/graphics/christmas_icons-production.svg",
				"events": [
					{
					"name": "Fantasy Christmas Show",
					"location": "Kure Beach",
					"address": "101 K Avenue Kure Beach NC 28449",
					"position": {
						"top": "680px",
						"left": "1350px"
					},
					"image": "/images/fantasy-show.jpg",
					"imageCredit": "© Town of Kure Beach",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "Come and see this Kure Beach tradition! Enjoy Frosty and his penguin friend, Harriet Hippo, The Grinch, Cookie Monster, the dancing bears and more, along with Santa Claus and crazy elves, as they entertain you with song, dance and their zany antics. Dress warm because it always snows at the show!!",
					"dates": "Dec 9 - Dec 11",
					"googleMaps": "https://www.google.com/maps/place/101+K+Avenue,+Kure+Beach,+NC+28449/@33.9979048,-77.9082549,17z/data=!3m1!4b1!4m5!3m4!1s0x89a9ff4aafe0e089:0xd05062e034ebff67!8m2!3d33.9979048!4d-77.9060609",
					"webLink": "http://www.townofkurebeach.org/fantasy-christmas-show.aspx"
					},
				],
				},
				{
				"categoryType": "Light Show",
				"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
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
					},
					{
					"name": "Island of Lights",
					"location": "Carolina Lake",
					"address": "400 S Lake Park Blvd Carolina Beach, NC 28428",
					"position": {
						"top": "660px",
						"left": "1360px"
					},
					"image": "/images/island-lights.jpg",
					"imageCredit": "© CVB",
					"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
					"description": "The brief opening ceremony, prior to the actual lighting, will feature the President of The Island of Lights Committee, Pleasure Island elected officials, and musical entertainment. Local Cub Scouts provide the Honor Guard and display the Flag for the singing of the National Anthem. Families can walk one mile around the lake to view the beautiful lighted displays and this year's tree which will remain up until after New Year's Eve. Santa will visit the celebration and free refreshments will be served prior to Light Up so come and enjoy!",
					"dates": "Nov 25",
					"googleMaps": "https://www.google.com/maps/place/400+S+Lake+Park+Blvd,+Carolina+Beach,+NC+28428/@34.0299763,-77.8958991,285m/data=!3m1!1e3!4m5!3m4!1s0x89a9f8efe748f4ed:0x6fad4e43748b2e2e!8m2!3d34.029983!4d-77.895241",
					"webLink": "http://www.pleasureislandoflights.com/lighting-at-the-lake.html"
					},
					{
					"name": "Christmas Flotilla",
					"location": "Carolina Beach",
					"address": "Snow's Cut Federal Point, NC",
					"position": {
						"top": "640px",
						"left": "1375px"
					},
					"image": "/images/carolina-floatilla.jpg",
					"imageCredit": "© Pleasure Island of Lights",
					"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
					"description": "Fishing boats and pleasure craft decorated with thousands of lights present a spectacular display on the Intracoastal Waterway at the annual Island of Lights Christmas Flotilla. Water crafts will cruise from Snows Cut to the Carolina Beach Boat Basin and back, competing for prizes and adding to the wonderful holiday spirit! A panel of judges will be on hand to choose the winners. Bring the family and enjoy a colorful evening!",
					"dates": "Dec 3",
					"googleMaps": "https://www.google.com/maps/place/Snow's+Cut/@34.0524091,-77.9076337,15z/data=!4m22!1m16!4m15!1m6!1m2!1s0x89a9f8429dbdf201:0xb5ee9b3ce62cf30!2sSnow's+Cut!2m2!1d-77.9052261!2d34.0551316!1m6!1m2!1s0x89a9f857e904d685:0xdcba226a1e03ed36!2sFederal+Point+Yacht+Club,+910+Basin+Road,+Carolina+Beach,+NC+28428!2m2!1d-77.8924967!2d34.0412965!3e0!3m4!1s0x89a9f8429dbdf201:0xb5ee9b3ce62cf30!8m2!3d34.0551316!4d-77.9052261",
					"webLink": "http://www.pleasureislandoflights.com/christmas-parade.html"
					}
				],
				},
				{
				"categoryType": "Tour",
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
					},
					{
					"name": "Holiday Tour of Homes",
					"location": "Carolina Beach",
					"address": "Carolina Beach, NC 28428",
					"position": {
						"top": "650px",
						"left": "1350px"
					},
					"image": "/images/pleasure-island-homes.jpg",
					"imageCredit": "© Mancuso Photography",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "Take a self-guided tour through some of Pleasure Island's most beautiful homes decorated for the holidays. Enjoy Southern hospitality at its best as the homeowners open their doors to welcome you for this special holiday treat.",
					"dates": "Dec 10",
					"googleMaps": "https://www.google.com/maps/place/Carolina+Beach,+NC+28428/@34.0381307,-77.9124383,14z/data=!3m1!4b1!4m5!3m4!1s0x89a9f8f555957b5f:0xbfb3627c771e9b56!8m2!3d34.0351639!4d-77.8935814",
					"webLink": "http://www.pleasureislandoflights.com/tour-of-homes.html"
					}
				],
				},
				{
				"categoryType": "Celebration",
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
					},
					{
					"name": "Cape Fear Festival of Trees",
					"location": "N.C. Aquarium at Fort Fisher",
					"address": "900 Loggerhead Rd, Kure Beach, NC 28449",
					"position": {
						"top": "700px",
						"left": "1340px"
					},
					"image": "/images/capefear-trees.jpg",
					"imageCredit": "© LCFH Foundation",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "The Cape Fear Festival of Trees returns as one of the most heart-warming holiday traditions in our area. During the two-week festival, starting with an opening on November 21, you are invited to wander through a winter wonderland of holiday elegance. Glittering trees decorated by local businesses, various organizations and individual artists transform the aquarium space into an enchanted forest for all to enjoy. In addition to the dazzling array of trees, enjoy performances by local musical groups and artists. Treat your ears to the wonderful sounds of harps, handbell and ukulele choirs, A Capella singing and more. This is the perfect way to kick off your holiday celebrations! Visit their website for schedule information and pricing for specific festival events.",
					"dates": "Nov 21 - Dec 4",
					"googleMaps": "https://www.google.com/maps/place/North+Carolina+Aquarium+At+Fort+Fisher/@33.9621448,-77.9324443,17z/data=!4m13!1m7!3m6!1s0x89aa01d5d98999ab:0x77857b8b538b7340!2sKure+Beach,+NC+28449!3b1!8m2!3d33.9621448!4d-77.9302503!3m4!1s0x0:0xcb898b94e2c2d3a!8m2!3d33.9626269!4d-77.9261541",
					"webLink": "http://www.lcfhfoundation.org/event/cape-fear-festival-trees/"
					},
					{
					"name": "Christmas Parade",
					"location": "Carolina Beach",
					"address": "N Lake Park Blvd, Carolina Beach, NC 28428",
					"position": {
						"top": "650px",
						"left": "1340px"
					},
					"image": "/images/beach-parade.jpg",
					"imageCredit": "© Visit Carolina Beach NC",
					"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
					"description": "Residents and visitors both young and old look forward to the annual Christmas Parade. Floats, bands and Santa Claus will be there to add to the festivities of the season and provide a night of entertainment and holiday cheer for families.",
					"dates": "Dec 2",
					"googleMaps": "https://www.google.com/maps/place/N+Lake+Park+Blvd,+Carolina+Beach,+NC+28428/@34.0440623,-77.900037,17z/data=!3m1!4b1!4m5!3m4!1s0x89a9f8590041f145:0x679f565942854db6!8m2!3d34.0440623!4d-77.8978483",
					"webLink": "http://www.pleasureislandoflights.com/christmas-parade.html"
					},
					{
					"name": "New Year's Eve Celebration",
					"location": "Ocean Front Park and Pavillion",
					"address": "105 Atlantic Avenue Kure Beach NC 28449",
					"position": {
						"top": "680px",
						"left": "1370px"
					},
					"image": "/images/new-years-kure-beach.jpg",
					"imageCredit": "© Paul Borosnoff",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "Come celebrate New Year's Eve at the beach with the Island of Lights New Year's Eve Celebration! This free family-friendly event will feature a DJ and dancing with refreshments and party favors available for purchase. Patrons can also enjoy the annual raffle, with the winner taking home the original artowrk for the Island of Lights 2016 Official Christmas card and ornament. Don't miss the giant ball being dropped at midnight followed by an epic fireworks display!",
					"dates": "Dec 31",
					"googleMaps": "https://www.google.com/maps/place/Ocean+Front+Park+and+Pavilion/@33.998639,-77.908123,17z/data=!4m13!1m7!3m6!1s0x89a9f8b552f38f9b:0x976127ab1bac3fd6!2s105+Atlantic+Ave,+Kure+Beach,+NC+28449!3b1!8m2!3d33.998639!4d-77.905929!3m4!1s0x89a9f8b552f38f9b:0x103365970082b5a4!8m2!3d33.998639!4d-77.905929",
					"webLink": "http://www.pleasureislandoflights.com/the-new-year-celebration.html"
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
				"categoryType": "Celebration",
				"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
				"events": [
					{
					"name": "Cookie Walk",
					"location": "Downtown",
					"address": "311 Middle St, New Bern, NC 28560",
					"position":{
						"top": "390px",
						"left": "1520px",
					},
					"image": "/images/cookie-walk.jpg",
					"imageCredit": "© Charlie Hall/Sun Journal",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "Tables full of homemade cookies for sale, including hostess trays and specialty cookies of all kinds, will be available for purchase. Breakfast and/or lunch can also be enjoyed at the Cookie Walk Cafe. Music will be provided by David Leahey. Net proceeds will benefit Outreach Ministries in and around New Bern. Please come and join us!",
					"dates": "Dec 10",
					"googleMaps": "https://www.google.com/maps/place/311+Middle+St,+New+Bern,+NC+28560/@35.1070548,-77.0395651,19.14z/data=!4m21!1m15!4m14!1m6!1m2!1s0x89a8d195f7eec3c9:0xcdd6119da4733bd!2sChrist+Church,+New+Bern,+320+Pollock+Street,+New+Bern,+NC+28560!2m2!1d-77.0391588!2d35.1072256!1m6!1m2!1s0x89a8d1bdf9c74d9d:0x4855ec4cb33e0465!2s311+Middle+St,+New+Bern,+NC+28560!2m2!1d-77.0398081!2d35.107376!3m4!1s0x89a8d1bdf9c74d9d:0x4855ec4cb33e0465!8m2!3d35.107376!4d-77.0398081",
					"webLink": "http://www.visitnewbern.com/calendar/event-details?3330"
					}
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
					},
					{
					"name": "The Holly and The Ivy",
					"location": "Downtown",
					"address": "New Bern",
					"position":{
						"top": "405px",
						"left": "1525px",
					},
					"image": "/images/newbern-tour.jpg",
					"imageCredit": "© New Bern Woman’s Club",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "Join the New Bern Woman’s Club as they ring in the holiday season with their annual “The Holly and The Ivy” Holiday Homes Tour in the historic city of New Bern! Visit six homes and a charming bed and breakfast, all delight-fully decorated for the holiday season, and enjoy cookies and hot cider from the “Sugar Plum” House as you stroll through the beautiful Historic District.",
					"dates": "Dec 10",
					"googleMaps": "https://www.google.com/maps/place/New+Bern,+NC/@35.0776578,-77.1453038,12z/data=!3m1!4b1!4m5!3m4!1s0x89a8d06ec57ecbf9:0x7b0e42e4e4e60070!8m2!3d35.1084928!4d-77.0441151",
					"webLink": "http://newbernwomansclub.com/club-events/holiday-homes-tour/"
					}
				],
				},
				{
				"categoryType": "Production",
				"categoryIcon": "/graphics/christmas_icons-production.svg",
				"events": [
					{
					"name": "Irving Berlin's: White Christmas",
					"location": "Historic Masonic Theatre",
					"address": "514 Hancock St, New Bern, NC 28560",
					"position":{
						"top": "415px",
						"left": "1525px",
					},
					"image": "/images/irving-christmas.jpg",
					"imageCredit": "© The Estate of Irving Berlin",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "Irving Berlin’s White Christmas tells the story of a song-and-dance team putting on a show in a magical Vermont inn and falling for a stunning sister act in the process. This performance will be full of dancing, laughter and some of the greatest songs ever written! Give everyone the gift they’re dreaming of with this merry and bright holiday musical.",
					"dates": "Dec 2 - Dec 10",
					"googleMaps": "https://www.google.com/maps/place/RiverTowne+Players/@35.1106337,-77.0430571,17z/data=!4m13!1m7!3m6!1s0x89a8d1965f5c201d:0x5e7f5092cc2e2043!2s514+Hancock+St,+New+Bern,+NC+28560!3b1!8m2!3d35.1106337!4d-77.0408684!3m4!1s0x89a8d1968b30323f:0x52ccc73e3a172800!8m2!3d35.1105804!4d-77.0404821",
					"webLink": "http://www.rivertowneplayers.org/productions.html"
					},
					{
					"name": "Holiday Pops",
					"location": "Riverfront Convention Center",
					"address": "203 South Front Street New Bern, NC 28560",
					"position":{
						"top": "415px",
						"left": "1525px",
					},
					"image": "/images/pops-newbern.jpg",
					"imageCredit": "© Edgecombe Community College",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "Bring the family as we celebrate the most wonderful time of the year with this sparkling holiday spectacular! Join us for carols and warm your heart with traditional holiday favorites performed by the North Carolina Symphony Orchestra.",
					"dates": "Dec 13",
					"googleMaps": "https://www.google.com/maps/place/New+Bern-Craven+County+Convention+%26+Visitors+Center/@35.1035144,-77.0394676,17z/data=!4m13!1m7!3m6!1s0x89a8d1bef094b617:0x205e348e5740036d!2s203+S+Front+St,+New+Bern,+NC+28560!3b1!8m2!3d35.1035144!4d-77.0372736!3m4!1s0x89a8d1bee8e200b7:0xad8ccdcf7f9a5dcb!8m2!3d35.1035791!4d-77.0371978",
					"webLink": "http://www.ncsymphony.org/events/index.cfm?view=details&detailid=5268&viewref=venue&venue=41&eid=6299"
					}
				],
				},
			]
	},
	{"city": "Jacksonville",
			"cityFlag": "/graphics/christmas_icons-jacksonville.svg",
			"icon-animation": "",
			"position": {
				"top": "475px",
				"left": "1460px",
				},
			"categories": [
				{
				"categoryType": "Celebration",
				"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
				"mapLocation": "coordinates",
				"events": [
					{
					"name": "Christmas Holiday Parade",
					"location": "Jacksonville Onslow Chamber of Commerce",
					"address": "1099 Gum Branch Rd, Jacksonville, North Carolina 28540",
					"position":{
						"top": "515px",
						"left": "1470px",
					},
					"image": "/images/jacksonville-parade.jpg",
					"imageCredit": "© Jacksonville | Onlso Chamber of Commere",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "This is an annual tradition in the Jacksonville community to start the holiday season.  Every year a large number of spectators (approx. 15,000) come from different cities in Onslow County and out of town to watch and enjoy this beautiful parade.  Every year, the Saturday before Thanksgiving, 200 plus entries travel down Western BLVD in Jacksonville.",
					"dates": "Nov 19",
					"googleMaps": "https://www.google.com/maps/place/Jacksonville+Onslow+Chamber+of+Commerce/@34.7759917,-77.4154944,17z/data=!4m13!1m7!3m6!1s0x89a91057826428e3:0x9c151569dca5b839!2s1099+Gum+Branch+Rd,+Jacksonville,+NC+28540!3b1!8m2!3d34.7759917!4d-77.4133057!3m4!1s0x89a910577f29d7e5:0xf8c9f39107202c6e!8m2!3d34.7758733!4d-77.4131959",
					"webLink": "https://www.facebook.com/events/1824287504469702/"
					},
					{
					"name": "Christmas Parade",
					"location": "Downtown Burgaw",
					"address": "Downtown Burgaw, NC 28425",
					"position":{
						"top": "555px",
						"left": "1390px",
					},
					"image": "/images/parade-burgaw.jpg",
					"imageCredit": "© Burgaw Area Chamber of Commerce",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "The town of Burgaw would like to invite you to our Annual Lighted Christmas Parade! Floats, cars and even bands will be covered in bright, shiny Christmas lights. Bring the family and come enjoy a small-town tradition that can brighten up anyone’s holiday!",
					"dates": "Dec 10",
					"googleMaps": "https://www.google.com/maps/place/Burgaw,+NC+28425/@34.5551037,-77.9488599,13z/data=!4m5!3m4!1s0x89a9809efdea9fe9:0x27b8782d12a495eb!8m2!3d34.5521113!4d-77.926098",
					"webLink": "http://www.onlyinonslow.com/events/#!/85486-burgaw-christmas-parade"
					},
				],
				},
				{
				"categoryType": "Production",
				"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
				"mapLocation": "coordinates",
				"events": [
					{
					"name": "Holiday Pops",
					"location": "Northside High School",
					"address": "365 Commons Dr S, Jacksonville, NC 28546",
					"position":{
						"top": "475px",
						"left": "1510px",
					},
					"image": "/images/jacksonville-pops.jpg",
					"imageCredit": "© Michael Zirkle",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "The North Carolina Symphony’s Holiday Pops is a musical tradition that will fill your heart with cheer. Enjoy all your holiday favorites and our popular sing-a-long; special guests this year include Triangle Youth Ballet and the Raleigh Boychoir. Be sure to visit Santa in the lobby before the performance! David Glover, conductor.",
					"dates": "Dec 1",
					"googleMaps": "https://www.google.com/maps/place/Northside+High+School/@34.7909494,-77.3891999,18.37z/data=!4m5!3m4!1s0x0:0x1d4fb51aba2f14a3!8m2!3d34.7915319!4d-77.388787",
					"webLink": "http://ncsymphony.org/events/index.cfm?view=details&viewref=calendar&detailid=5268&eid=6314&sdate=12/1/2016"
					},
				],
				},
				{
				"categoryType": "Activities",
				"categoryIcon": "/graphics/christmas_icons-activities.svg",
				"events": [
					{
					"name": "Saturday with Santa",
					"location": "Carmike 16 Cinema",
					"address": "Carmike 16, Western Boulevard, Jacksonville, NC",
					"position":{
						"top": "475px",
						"left": "1500px",
					},
					"image": "/images/carmike-santa.jpg",
					"imageCredit": "© Carmike",
					"categoryIcon": "/graphics/christmas_icons-activities.svg",
					"description": "Santa will be arriving on a Fire Truck Saturday December 3, 9am at the Carmike Cinema 16 (behind the Jacksonville Mall) . Admission 3 canned goods to be donated to Christmas Cheer. Visit with Santa, take a picture, and watch a kid friendly Christmas Movie. Goody Bags for all participants.",
					"dates": "Dec 3",
					"googleMaps": "https://www.google.com/maps/place/Carmike+16/@34.7635748,-77.3800799,17.08z/data=!4m5!3m4!1s0x89a9107987f00469:0x9692836ae9d91927!8m2!3d34.7635427!4d-77.3780472",
					"webLink": "http://www.onlyinonslow.com/events/#!/94874-saturday-with-santa"
					},
					{
					"name": "Naughty & Nice 5K",
					"location": "Wallace Creek Fitness Center",
					"address": "WC1, Birch St, Camp Lejeune, NC 28547",
					"position":{
						"top": "515px",
						"left": "1490px",
					},
					"image": "/images/jacksonville-5k.jpg",
					"imageCredit": "© MCCS Camp Lejeune",
					"categoryIcon": "/graphics/christmas_icons-activities.svg",
					"description": "The race starts and finishes at the Wallace Creek Fitness Center. Runners are encouraged to dress up in the most festive holiday running attire. Following the event will be the presentation of awards for the race as well as to the winner of the 2016 Grand Prix Series.",
					"dates": "Dec 10",
					"googleMaps": "https://www.google.com/maps/place/Wallace+Creek+Fitness+Center/@34.6779385,-77.3473247,17z/data=!3m1!4b1!4m5!3m4!1s0x89a905ac30ff1899:0xa89f9251f9a71eea!8m2!3d34.6779341!4d-77.345136",
					"webLink": "http://www.mccslejeune-newriver.com/grandprix/naughtynice/"
					}
				],
				},
				{
				"categoryType": "Tour",
				"categoryIcon": "/graphics/christmas_icons-tours.svg",
				"events": [
					{
					"name": "Burgaw Home and Tree Tour",
					"location": "Downtown Burgaw",
					"address": "Downtown Burgaw, NC 28425",
					"position":{
						"top": "545px",
						"left": "1400px",
					},
					"image": "/images/burgaw-tour.jpg",
					"imageCredit": "© Visit NC ",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "The Pender County Historical Society invites you to the Annual Burgaw Christmas Homes and Tree Tour. Join them a tour some of the most beautiful structures in Burgaw all decorated with the Christmas Spirit. Then head over to the Burgaw Community Building for the Festival of Trees. Tickets are $15 for the Tour and the Festival of Trees. Tickets will also be sold for just the Festival of Trees for $8. Tickets can be purchased from the Pender County Historical Society as well as several locations around Burgaw.",
					"dates": "Dec 3",
					"googleMaps": "https://www.google.com/maps/place/Burgaw,+NC+28425/@34.5551037,-77.9488599,13z/data=!3m1!4b1!4m5!3m4!1s0x89a9809efdea9fe9:0x27b8782d12a495eb!8m2!3d34.5521113!4d-77.926098",
					"webLink": "http://www.onlyinonslow.com/events/#!/85674-the-burgaw-christmas-homes-and-tree-tour"
					}
				],
				}
			]
	},
	{"city": "Boone",
			"cityFlag": "/graphics/christmas_icons-boone.svg",
			"icon-animation": "",
			"position": {
				"top": "90px",
				"left": "547px"
				},
			"categories": [
				{
				"categoryType": "Tree Farm",
				"categoryIcon": "/graphics/christmas_icons-trees.svg",
				"events": [
					{
					"name": "Appalachian Evergreens",
					"location": "Boone",
					"address": "1371 NC-194, Boone, NC 28607",
					"position":{
						"top": "140px",
						"left": "560px"
					},
					"image": "/images/app-evergreens.jpg",
					"imageCredit": "© Lauren Carroll",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Appalachian Evergreens was founded in 1933 by Charles Cole Wilcox. In the heart of the Blue Ridge Mountains in Western North Carolina. Our real Fraser Fir Christmas wreaths, fireplace mantle garlands and other greenery are handmade with fresh cut evergreens from our local farms. If you're looking for a great Holiday experience with the family, visit our Choose and Cut Christmas Tree Farm. Here you'll find the perfect tree and memories that will last a lifetime.",
					"dates": "TBD - Check back soon!",
					"googleMaps": "https://www.google.com/maps/place/Applachian+Evergreens/@36.2357385,-81.6608286,17.38z/data=!4m5!3m4!1s0x0:0xb2c83aa791c6412!8m2!3d36.2358355!4d-81.658176",
					"webLink": "https://www.appevergreens.com/about-us/"
					},
					{
					"name": "Panoramic View Christmas Tree Farm",
					"location": "Boone",
					"address": "368 Panoramic Ln, Boone, NC 28607",
					"position":{
						"top": "120px",
						"left": "570px"
					},
					"image": "/images/panoramic-trees.jpg",
					"imageCredit": "© Panoramic Tree Farm",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "If you're looking for the perfect Christmas tree or wreath to celebrate the Christmas season, look no further! We offer a wide selection of Fraser Fir trees and wreaths to adorn any setting. Stroll through our tree farm and choose from trees of all sizes, ranging from table top size to 13 feet. We will help make sure your tree is cut, bagged and strapped down for your ride home (after you've enjoyed our free family activities of course)!",
					"dates": "TBD - Check back soon!",
					"googleMaps": "https://www.google.com/maps/place/368+Panoramic+Ln,+Boone,+NC+28607/@36.0839224,-81.9151923,9.71z/data=!4m21!1m15!4m14!1m6!1m2!1s0x88509f64fd4a1549:0x769e2e3dcc77cc39!2sBakersville,+NC!2m2!1d-82.1587351!2d36.0156735!1m6!1m2!1s0x8850f9022077475f:0x30e0b301e5f29f3e!2s368+Panoramic+Ln,+Boone,+NC+28607!2m2!1d-81.641848!2d36.272439!3m4!1s0x8850f9022077475f:0x30e0b301e5f29f3e!8m2!3d36.272439!4d-81.641848",
					"webLink": "http://panoramictreefarm.com/trees-wreaths"
					},
					{
					"name": "Snow Creek Christmas Trees",
					"location": "Bakersville",
					"address": "302 Slagle Rd Bakersville, NC 28705",
					"position":{
						"top": "120px",
						"left": "540px"
					},
					"image": "/images/snow-creek.jpg",
					"imageCredit": "© Snow Creek Christmas Farm",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "A second generation Fraser fir Christmas Tree farm, the Wilson family has been in the Christmas tree business for over 50 years.  Though the farm has grown significantly through the years it still remains family run, with over 40,000 Christmas Trees.  The Choose and Cut farm runs on weekends from Thanksgiving until the weekend before Christmas.",
					"dates": "Nov 24 - Dec 25",
					"googleMaps": "https://www.google.com/maps/place/302+Slagle+Rd,+Bakersville,+NC+28705/@35.5267085,-82.721626,8.54z/data=!4m5!3m4!1s0x8850a19a5ba6dd69:0xdcc6d34014a2480d!8m2!3d35.97139!4d-82.141941",
					"webLink": "https://www.facebook.com/Snow-Creek-Christmas-Trees-129732959659/"
					},
					{
					"name": "Jonas Ridge Tree Farm",
					"location": "Newland",
					"address": "8040 Joe Poore Rd Jonas Ridge, NC 28641",
					"position":{
						"top": "210px",
						"left": "520px"
					},
					"image": "/images/jonas-trees.jpg",
					"imageCredit": "© Jonas Ridge Tree Farm",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Jonas Ridge Tree Farm is a full service choose and cut farm located in Northern Burke County , North Carolina. We have thousands of beautiful Fraser Fir trees to choose from and invite you and your family to visit us for your perfect Christmas tree. After you choose your family's tree our family will cut, bale and secure it to your car for you. We also have a large assortment of wreaths, garlands and table arrangements.",
					"dates": "TBD - Check back soon!",
					"googleMaps": "https://www.google.com/maps/place/Jonas+Ridge+Tree+Farm/@35.8068652,-82.2687443,9z/data=!4m13!1m7!3m6!1s0x8850bfeb7526d393:0xd25ccbc8d4384de!2s8040+Joe+Poore+Rd,+Newland,+NC+28657!3b1!8m2!3d35.969341!4d-81.88383!3m4!1s0x8850bfeb7526d393:0x414c354e2fb3ad1e!8m2!3d35.969341!4d-81.8838299",
					"webLink": "http://www.jonasridgetreefarm.com/"
					},
					{
					"name": "Clawson's Christmas Tree Farm",
					"location": "Boone",
					"address": "4805 194 N Boone, NC 28607",
					"position":{
						"top": "150px",
						"left": "580px"
					},
					"image": "/images/clawson-trees.jpg",
					"imageCredit": "© Watauga Democrat",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Clawson's Christmas Tree Farm offers choose and cut Fraser Fir's, wreath's, garland and tree bailing!",
					"dates": "TBD - Check back soon!",
					"googleMaps": "https://www.google.com/maps/place/4805+NC-194,+Boone,+NC+28607/@36.2769575,-81.651662,17z/data=!3m1!4b1!4m5!3m4!1s0x8850f8568ecb19a9:0xcf647345014d4037!8m2!3d36.2769532!4d-81.6494733",
					"webLink": "http://www.ncchristmastrees.com/member-directory/1022-clawson-s-christmas-tree-farm"
					},
					{
					"name": "Stonewall Christmas Trees",
					"location": "Bakersville",
					"address": "1510 McKinney Cove Rd Road, Bakersville, NC 28705",
					"position":{
						"top": "140px",
						"left": "540px"
					},
					"image": "/images/stonewall-trees.jpg",
					"imageCredit": "© The Tribune Papers",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Live trees, wreaths, and garland straight from Stonewall Christmas tree Farm in Bakersville, NC! Come get yours while supplies last!",
					"dates": "TBD - Check back soon!",
					"googleMaps": "https://www.google.com/maps/place/1510+McKinney+Cove+Rd,+Bakersville,+NC+28705/@36.0358613,-82.143501,17z/data=!3m1!4b1!4m5!3m4!1s0x88509f3afd07abf9:0x88c7bd3d41ee0e4b!8m2!3d36.035857!4d-82.141307",
					"webLink": "https://www.facebook.com/stonewallchristmastrees/info?fref=ps_result&tab=overview"
					},
					{
					"name": "Fir Heaven Sake Christmas Tree Farm",
					"location": "Topton",
					"address": "40 Fir Heaven Sake Lane Topton, NC 28781",
					"position":{
						"top": "405px",
						"left": "210px"
					},
					"image": "/images/fir-heaven.jpg",
					"imageCredit": "© Fir Heaven Sake Christmas Tree Farm",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Fir Heaven Sake Christmas Tree Farm is the place where your family can come and renew or start an old tradition by looking through a field of Christmas trees to choose and cut the one you would like. Or if you prefer, we can cut it for you. We also offer live or dug trees, It is better to dig a tree that is 5' or smaller for it to live. In addition to the trees, we offer sleigh rides with Santa! Your whole family will enjoy the ride through the field, where we have several hand painted wooden scenes. There will be several opportunities for pictures as well.",
					"dates": "TBD - Check back soon!",
					"googleMaps": "https://www.google.com/maps/place/Forest+Service+Rd+711,+Topton,+NC+28781/@35.2025426,-83.6159238,15.77z/data=!4m5!3m4!1s0x885ed338bc54d915:0x617f842a4bd69b8!8m2!3d35.1954888!4d-83.5999282",
					"webLink": "http://www.firheavensakechristmastrees.com/"
					},
					{
					"name": "Dutch Cove Christmas Tree Farm",
					"location": "Canton",
					"address": "280 Setzer Dr, Canton, NC 28716",
					"position":{
						"top": "305px",
						"left": "400px"
					},
					"image": "/images/dutch-cove.jpg",
					"imageCredit": "© Christopher Vengala",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Choose and cut Frasier Fir Christmas tree farm, owned and operated by Mike & Judy Medford. Open all day Saturdays and Monday - Friday by afternoons by appointment.",
					"dates": "Nov - Dec",
					"googleMaps": "https://www.google.com/maps/place/280+Setzer+Dr,+Canton,+NC+28716/@35.484062,-82.8092705,14.48z/data=!4m5!3m4!1s0x88599b74ba3523b7:0xb89a51f175ebf838!8m2!3d35.486851!4d-82.800257",
					"webLink": "http://www.ncchristmastrees.com/member-directory/1044-dutch-cove-christmas-tree-farm"
					},
					{
					"name": "Clark's Evergreens and Landscaping",
					"location": "Fleetwood",
					"address": "2930 Liberty Grove Church Rd. Fleetwood, NC 28626",
					"position":{
						"top": "135px",
						"left": "600px"
					},
					"image": "/images/clarks-trees.jpg",
					"imageCredit": "© Clark’s Evergreen and Landscaping",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "We are open for business! Come on up and pick out a beautiful Christmas tree and wreath for your family. We have all sizes of trees and wreaths. We also have specialty wreaths like squares, crosses, candy canes and mailbox swags. It's one stop shopping here--you can get a tree stand, wreath hangers and bows too!",
					"dates": "TBD - Check back soon!",
					"googleMaps": "https://www.google.com/maps/place/2930+Liberty+Grove+Church+Rd,+Fleetwood,+NC+28626/@36.2869823,-81.542435,17z/data=!3m1!4b1!4m5!3m4!1s0x8850ffbfca64dfe7:0x90482ab1aa2c4733!8m2!3d36.286978!4d-81.540241",
					"webLink": "https://www.facebook.com/Clarks-Evergreen-Choose-Cut-123875251003348/"
					},
					{
					"name": "RRR Tree Farm",
					"location": "Boone",
					"address": "1029 Rainbow Trail Boone, NC 28607",
					"position":{
						"top": "125px",
						"left": "570px"
					},
					"image": "/images/rrr-trees.jpg",
					"imageCredit": "© RRR Tree Farm",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "There is nothing like visiting a Choose and Cut Christmas Tree Farm and picking and cutting your own live Christmas tree. You know it's what you want, and you know it's fresh. Your biggest decision is choosing your “perfect tree” from among the thousands.",
					"dates": "TBD - Check back soon!",
					"googleMaps": "https://www.google.com/maps/place/1029+Rainbow+Trail,+Boone,+NC+28607/@36.2376193,-81.675752,17z/data=!3m1!4b1!4m5!3m4!1s0x8850f9f41250c039:0xd57d7a347b63cc7a!8m2!3d36.237615!4d-81.673558",
					"webLink": "http://www.rrrtreefarm.com/choose-and-cut-christmas-tree-farms.html"
					},
					{
					"name": "Mistletoe Meadows",
					"location": "Laurel Springs",
					"address": "583 Burnt Hill Road Laurel Springs, NC 28644",
					"position":{
						"top": " 95px",
						"left": "630px"
					},
					"image": "/images/mistletoe-trees.jpg",
					"imageCredit": "© Mistletoe Meadows",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Make new holiday memories – breathe the fresh mountain air and choose and cut your tree right on the Mistletoe Meadows Farm. Come and have a cup of cocoa or hot cider with us in the barn during our special holiday farm weekends. Just a short day trip from the triangle, the triad, or Charlotte, you and your family can make a new tradition when you visit us.",
					"dates": "TBD - Check back soon!",
					"googleMaps": "https://www.google.com/maps/place/583+Burnt+Hill+Rd,+Laurel+Springs,+NC+28644/@36.4117839,-81.5666645,9.78z/data=!4m5!3m4!1s0x8851a5b16acf98e3:0x7c7e845f809d33fd!8m2!3d36.407077!4d-81.302766",
					"webLink": "http://mistletoemeadows.com/laurel-springs/"
					},
					{
					"name": "Circle C Tree Farms",
					"location": "Boone",
					"address": "372 Will Cook Road Boone, NC 28607",
					"position":{
						"top": "145px",
						"left": "600px"
					},
					"image": "/images/circle-trees.jpg",
					"imageCredit": "© Circle C Tree Farms",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Circle C Tree Famrs is a full-service Choose and Cut Christmas Tree Farm located in Boone, N.C. The farm offers thousands of beautiful trees to choose from in a convenient and scenic location.",
					"dates": "Nov 24 - Dec 25",
					"googleMaps": "https://www.google.com/maps/place/372+Will+Cook+Rd,+Boone,+NC+28607/@36.2099963,-81.627894,17z/data=!3m1!4b1!4m5!3m4!1s0x8850fbc02661a129:0xcde4c7071d75e0e6!8m2!3d36.209992!4d-81.6257",
					"webLink": "https://www.facebook.com/Circle-C-Tree-Farms-Choose-Cut-Christmas-Trees-131292440217215/"
					},
					{
					"name": "Cornett-Deal Christmas Tree Farm",
					"location": "Vilas",
					"address": "142 Tannenbaum Lane Vilas, NC 28692",
					"position":{
						"top": "125px",
						"left": "510px"
					},
					"image": "/images/cornett-trees.jpg",
					"imageCredit": "© Cornett-Deal Christmas Tree Farm",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Our Cornett family began operations in 1979 when Clint Cornett planted his first field of Fraser Fir Christmas trees in the beautiful Mountain Dale Community in the Northwest Mountains of North Carolina. Dale Cornett, Clint’s son, now manages the wholesale Christmas tree operation while his sister, Diane Cornett Deal, owns and operates her choose and cut farm and craft shop.",
					"dates": "TBD - Check back soon!",
					"googleMaps": "https://www.google.com/maps/place/142+Tannenbaum+Ln,+Vilas,+NC+28692/@36.3015855,-81.779799,10.9z/data=!4m5!3m4!1s0x8850f55fa9fd8611:0x36db71cf8b6a417e!8m2!3d36.328854!4d-81.847024",
					"webLink": "https://www.facebook.com/Cornett-Deal-Christmas-Tree-Farm-147850505255460/"
					},
					{
					"name": "Roberts Tree Farm",
					"location": "Ennice",
					"address": "223 Wilson Rd Ennice, NC 28623",
					"position":{
						"top": "55px",
						"left": "750px"
					},
					"image": "/images/roberts-trees.jpg",
					"imageCredit": "© Alleghany NC",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Roberts Tree Farm planted their first trees in 1979, and has been growing and selling Christmas Trees for thirty-one years! Our first Choose and Cut operation began in 1987, in November and December we had numerous customers from Charlotte, Raleigh and the Winston area. This was an outing for the family. The Christmas Tree was purchased, many pictures were made, and the memories are never forgotten. The children that were brought by their parents are now bringing their children. Make choosing a Christmas Tree from or farm a family tradition that will always be in your heart and a fond memory with your family. ",
					"dates": "TBD - Check back soon!",
					"googleMaps": "https://www.google.com/maps/place/223+Wilson+Rd,+Ennice,+NC+28623/@36.446829,-81.1314759,10.4z/data=!4m5!3m4!1s0x88518df875460ea3:0xee27514d879bd93e!8m2!3d36.53634!4d-80.987041",
					"webLink": "http://www.alleghanync.com/1alleghanytrees.html"
					},
					{
					"name": "Ewing's Fraser Fir Farm",
					"location": "Vilas",
					"address": "175 Navidad Lane Vilas, NC 28692",
					"position":{
						"top": "125px",
						"left": "540px"
					},
					"image": "/images/ewings- trees.jpg",
					"imageCredit": "© Ewing’s Fraser Fir Farm",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "We have been growing fraser firs for 26 years.  For over 20 years families have been making it an annual tradition to head to our farm to choose their Christmas tree.  Our customers enjoy walking through the thousands of trees and enjoying the view, while deciding on the perfect Christmas tree for their home.  Once you choose your tree we will cut, bale, and load your tree.  You may cut your own if you like.  We have a variety of wreaths and roping available for purchase.",
					"dates": "Nov 19 - Dec 25",
					"googleMaps": "https://www.google.com/maps/place/175+Navidad+Ln,+Vilas,+NC+28692/@36.0571738,-82.3154488,9.04z/data=!4m5!3m4!1s0x8850f6eb627b7501:0xf2733591a2fc19f!8m2!3d36.26559!4d-81.754971",
					"webLink": "http://www.ewingsfraserfirfarm.com/"
					},
					{
					"name": "Sweetwater Christmas Tree Farm",
					"location": "Franklin",
					"address": "51 Sweet Water Drive Franklin, NC 28734",
					"position":{
						"top": "395px",
						"left": "260px"
					},
					"image": "/images/sweetwater-trees.jpg",
					"imageCredit": "© Winter Blue Music",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Sweetwater Christmas Tree Farm is located in Franklin, North Carolina. The farm offers choose and cut Fraser Fir trees, bough and tree bailing.",
					"dates": "TBD - Check back soon!",
					"googleMaps": "https://www.google.com/maps/place/51+Sweet+Water+Dr,+Franklin,+NC+28734/@35.2801122,-83.6336511,8.84z/data=!4m5!3m4!1s0x885923a24bb5a73b:0x3b9753e83b9a1695!8m2!3d35.155218!4d-83.312372",
					"webLink": "http://www.ncchristmastrees.com/member-directory/1085-sweetwater-christmas-tree-farm"
					},
					{
					"name": "Shady Rest Tree Farm",
					"location": "Glendale Springs",
					"address": "287 Trading Post Rd, Glendale Springs, NC 28629",
					"position":{
						"top": "95px",
						"left": "610px"
					},
					"image": "/images/shady-trees.jpg",
					"imageCredit": "© Shady Rest Tree Farm",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Come visit Shady Rest Tree Farm prior to or during the Christmas season and experience the magic of walking amidst snow covered NC Christmas Tree Farms, choosing your favorite tree and taking it home to herald the Christmas season. Shady Rest is among the premier NC Choose and Cut Christmas Tree Farms, offering you a captivating and memorable choose and cut experience.",
					"dates": "Nov 19 - Dec 24",
					"googleMaps": "https://www.google.com/maps/place/Shady+Rest+Tree+Farm+LLC/@36.3129055,-81.5530061,10.5z/data=!4m13!1m7!3m6!1s0x8851a8f9290ed9df:0xf2051d0d0b5ee8!2s287+Trading+Post+Rd,+Glendale+Springs,+NC+28629!3b1!8m2!3d36.344067!4d-81.3782643!3m4!1s0x8851a8fbd09888f5:0x5ac4dc372f531265!8m2!3d36.3442709!4d-81.3765915",
					"webLink": "http://www.shadyresttreefarm.com/choose.htm"
					},
					{
					"name": "Papa Goats Tree Farm",
					"location": "Sparta",
					"address": "687 Three Creeks Lane Sparta, NC 28675",
					"position":{
						"top": "55px",
						"left": "660px"
					},
					"image": "/images/goats-trees.jpg",
					"imageCredit": "© Papa Goats Tree Farm",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Papa Goats Tree Farm is a family owned and operated choose and cut Christmas tree farm located in the Blue Ridge Mountains of North Carolina near the town of Sparta. We strive to make every family’s visit to our farm a lasting holiday memory. We offer Fraser fir trees from table top to 12 ft. tall also white pine trees up to 9 ft. tall, blue spruce, wreaths, roping, bows, and tree stands. Our staff will cut, bale, tree drilling and secure your tree to your vehicle for a safe ride home. For those that would like to cut their own tree, we provide hand saws.",
					"dates": "Nov 19 - Dec 24",
					"googleMaps": "https://www.google.com/maps/place/Papa+Goats+Tree+Farm/@36.1194079,-81.8159442,8.74z/data=!4m13!1m7!3m6!1s0x885196a831f6995d:0xd7ebbb9d4efec734!2s687+3+Creeks+Ln,+Sparta,+NC+28675!3b1!8m2!3d36.533597!4d-81.084104!3m4!1s0x885196a831f6995d:0x2e0040ec75af2ea0!8m2!3d36.5337477!4d-81.0841467",
					"webLink": "https://www.facebook.com/PapaGoatsTreeFarm"
					},
					{
					"name": "Frosty's Choose and Cut",
					"location": "West Jefferson",
					"address": "2152 Beaver Creek School Rd West Jefferson, NC 28694",
					"position":{
						"top": "95px",
						"left": "580px"
					},
					"image": "/images/frosty-trees.jpg",
					"imageCredit": "© Frosty’s Choose and Cut",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Frosty's Choose and Cut is the childhood dream of three brothers. Founded when Andrew, Matthew, and Thomas were all still in school, the business gives the brothers a sense of purpose and accomplishment. The love of Christmas Trees is instilled in the blood of the brothers. They have taken the fourth generation of Sexton's Christmas Tree Farms and the beautiful Fraser Fir into the 21st Century. The Sexton brothers have created a local business that provides premium Christmas Trees and an unforgettable experience for the whole family. Selecting,and cutting “The Tree”, along with making your own Wreath or Garland generates the highest level of pleasure and satisfaction for their customers.",
					"dates": "Year Round",
					"googleMaps": "https://www.google.com/maps/place/Frosty's+Choose+and+Cut/@36.3855085,-81.5825036,12.02z/data=!4m13!1m7!3m6!1s0x885054ceafd49c2d:0x30435a2afa990466!2s2152+Beaver+Creek+School+Rd,+West+Jefferson,+NC+28694!3b1!8m2!3d36.3695122!4d-81.5194082!3m4!1s0x885054cbb09d7ffb:0xdcf9d164019f0119!8m2!3d36.3695122!4d-81.5194082",
					"webLink": "http://www.gofrostys.com/"
					},
					{
					"name": "C & J Christmas Trees",
					"location": "Boone",
					"address": "1011 NC-194, Boone, NC 28607",
					"position":{
						"top": "115px",
						"left": "550px"
					},
					"image": "/images/cj-trees.jpg",
					"imageCredit": "© C and J Christmas Trees",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Come and browse our winter wonderland to find your perfect family Christmas tree.  You pick it, we cut, bale and tie it onto whatever you are driving. Four wheel drive trucks are ideal, but we've tied them to the top of almost anything. We have fraser firs from Charlie Brown size to 10 feet tall.",
					"dates": "TBD - Check back soon!",
					"googleMaps": "https://www.google.com/maps/place/1011+NC-194,+Boone,+NC+28607/@36.2128352,-81.7263023,12.35z/data=!4m5!3m4!1s0x8850fa2784825fcb:0xddc94739fe87ea43!8m2!3d36.231603!4d-81.6607152",
					"webLink": "https://www.facebook.com/C-and-J-Christmas-Trees-170744909619460/?hc_ref=PAGES_TIMELINE"
					},
					{
					"name": "Yeater's Christmas Trees",
					"location": "Burnsville",
					"address": "489 River Walk Dr Burnsville, NC 28714",
					"position":{
						"top": "205px",
						"left": "430px"
					},
					"image": "/images/yeaters-trees.jpg",
					"imageCredit": "© Yeater's Christmas Trees",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Yeater's Choose n Cut Christmas Tree Farm offers premium Fraser Fir trees and fresh wreaths. Yeater's has been in the Christmas Trees business since 1982.",
					"dates": "TBD - Check back soon!",
					"googleMaps": "https://www.google.com/maps/place/489+River+Walk+Dr,+Burnsville,+NC+28714/@35.5509765,-82.7458144,9.07z/data=!4m5!3m4!1s0x8850a744000d01bf:0x5f632f5511884566!8m2!3d35.906564!4d-82.198627",
					"webLink": "https://www.facebook.com/Yeaters-Christmas-Tree-Farm-1720025014898967/"
					},
					{
					"name": "Wishon Evergreens",
					"location": "Sparta",
					"address": "200 Presnell Road Sparta, NC 28675",
					"position":{
						"top": "65px",
						"left": "670px"
					},
					"image": "/images/wishon-trees.jpg",
					"imageCredit": "© Johnny Wishon",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "Quality Fraser Fir Christmas trees are what we are all about! We have table top to 16’ Christmas trees available. Several different grades are available to customize an order for your particular sales market while achieving your desired price point. We use strict grading standards so you get what you pay for!",
					"dates": "TBD - Check back soon!",
					"googleMaps": "https://www.google.com/maps/place/200+Presnell+Rd,+Sparta,+NC+28675/@36.4982989,-81.0180856,17z/data=!3m1!4b1!4m5!3m4!1s0x885191ba3bd75381:0xc4a927a4f9234df5!8m2!3d36.4982989!4d-81.0158969",
					"webLink": "http://wishonevergreens.com/christmas_trees.php"
					}
				],
				},
			]
	},
	{"city": "Edenton",
			"cityFlag": "/graphics/christmas_icons-edenton.svg",
			"icon-animation": "",
			"position": {
				"top": "120px",
				"left": "1590px"
				},
			"categories": [
				{
				"categoryType": "Light Show",
				"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
				"mapLocation": "coordinates",
				"events": [
					{
					"name": "Dickens Christmas and Flotilla",
					"location": "The Monument at South Broad Street",
					"address": "504 S Broad St Edenton, NC 27932",
					"position":{
						"top": "170px",
						"left": "1600px",
					},
					"image": "/images/edenton-floatilla.jpg",
					"imageCredit": "© Visit NC",
					"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
					"description": "Kick off the joyous holiday season with a wonderful annual event in Historic Downtown Edenton to include Tree Lighting and Flotilla - 5:30 pm. This event is sponsored by Destination Downtown Edenton.",
					"dates": "Dec 2",
					"googleMaps": "https://www.google.com/maps/place/504+S+Broad+St,+Edenton,+NC+27932/@36.056532,-76.6102515,198m/data=!3m2!1e3!4b1!4m13!1m7!3m6!1s0x89af8fba8dcc97bd:0x73055c921168e299!2sS+Broad+St,+Edenton,+NC+27932!3b1!8m2!3d36.0580094!4d-76.6091659!3m4!1s0x89af8fbba8fbfdf3:0xf4857c3e3842cacb!8m2!3d36.0567268!4d-76.6095887",
					"webLink": "http://mainstreetedenton.com/events.html"
					}
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
						"top": "145px",
						"left": "1600px",
					},
					"image": "/images/edenton-tour.jpg",
					"imageCredit": "© Visit Edenton",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "You won’t want to miss this self-guided walking tour of homes of Edenton’s over-300-years old historic district, beautifully decorated for the holidays.",
					"dates": "Dec 9 - Dec 10",
					"googleMaps": "https://www.google.com/maps/place/Barker+House/@36.05581,-76.611976,17z/data=!4m5!3m4!1s0x0:0x4d881ddf22c3b811!8m2!3d36.0561309!4d-76.6094913",
					"webLink": "http://visitedenton.com/christmas-candlelight-tour"
					},
					{
					"name": "Groaning Board",
					"location": "Iredell House",
					"address": "108 N Broad St, Edenton, NC 27932",
					"position":{
						"top": "140px",
						"left": "1590px",
					},
					"image": "/images/iredell-house.jpg",
					"imageCredit": "© Trip Advisor",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "The Iredell House is decorated for the season with period decorations and foods that make the table heavily laden with treats to enjoy. This event is part of the 35th annual Candlelight Christmas Tour.",
					"dates": "Dec 9 - Dec 10",
					"googleMaps": "https://www.google.com/maps/place/Historic+Edenton/@36.0614384,-76.6100784,17z/data=!3m1!4b1!4m5!3m4!1s0x89af8fb0384a14c7:0xc7d4035e70534e4f!8m2!3d36.0614384!4d-76.6078897",
					"webLink": "http://www.nchistoricsites.org/iredell/iredell.htm"
					}
				],
				},
				{
				"categoryType": "Production",
				"categoryIcon": "/graphics/christmas_icons-production.svg",
				"events": [
					{
					"name": "Rocky Hock Opry Christmas Show",
					"location": "Swain Auditorium",
					"address": "200 E Church St, Edenton, NC 27932",
					"position":{
						"top": "150px",
						"left": "1590px",
					},
					"image": "/images/edenton-christmas-show.jpg",
					"imageCredit": "© Brian Smith",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "Christmas Favorites from the 80s some old and some new. This show is a annually-held holiday event that brings together classic Southern Christmas music in a live performance that is fun for the entire family.",
					"dates": "Dec 2 - Dec 3",
					"googleMaps": "https://www.google.com/maps/place/200+E+Church+St,+Edenton,+NC+27932/@36.0597009,-76.6085417,17z/data=!3m1!4b1!4m5!3m4!1s0x89af8faffc23d671:0x188c36891a76227d!8m2!3d36.0597009!4d-76.606353",
					"webLink": "http://www.visitedenton.com/december-events"
					},
					{
					"name": "A Christmas Carol",
					"location": "Swain Auditorium",
					"address": "200 E Church St, Edenton, NC 27932",
					"position":{
						"top": "150px",
						"left": "1590px",
					},
					"image": "/images/edenton-carol.jpg",
					"imageCredit": "© Wikipedia",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "Charles Dickens' classic tale is brought to life and reawakens the true spirit of Christmas. There's fun for the whole family as Epic Music Theatre weaves the story with delightful Christmas songs, rousing dance numbers, a touch of comedy and a heart-warming cast. The show is 90 minutes long with a short intermission.",
					"dates": "Dec 9 - Dec 11",
					"googleMaps": "https://www.google.com/maps/place/200+E+Church+St,+Edenton,+NC+27932/@36.0597009,-76.6085417,17z/data=!3m1!4b1!4m5!3m4!1s0x89af8faffc23d671:0x188c36891a76227d!8m2!3d36.0597009!4d-76.606353",
					"webLink": "http://www.visitedenton.com/december-events"
					}
				],
				},
			]
	},
	{"city": "Greenville",
			"cityFlag": "/graphics/christmas_icons-greenville.svg",
			"icon-animation": "",
			"position": {
				"top": "270px",
				"left": "1510px"
				},
			"categories": [
				{
				"categoryType": "Light Show",
				"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
				"mapLocation": "coordinates",
				"events": [
					{
					"name": "Festival of Lights",
					"location": "Greenville Convention Center",
					"address": "303 SW Greenville Blvd Greenville, NC 27834",
					"position":{
						"top": "320px",
						"left": "1520px",
					},
					"image": "/images/festival-greenville.jpg",
					"imageCredit": "© FSNENC",
					"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
					"description": "Bring the entire family and enjoy more than 100 trees, as they are transformed into a Holiday wonderland with each displaying a different meaning and theme. Story time with Santa December 1st and December 6th at 6 pm, reservation must be made in advance.",
					"dates": "Dec 1 - Dec 23",
					"googleMaps": "https://www.google.com/maps/place/Greenville+Convention+Center/@35.5730438,-77.3932978,17z/data=!4m13!1m7!3m6!1s0x89aec2c6691e222d:0xdb4b529eb01e3acb!2s303+Greenville+Blvd+SW,+Greenville,+NC+27834!3b1!8m2!3d35.5730438!4d-77.3911091!3m4!1s0x89aec2c63f5a8cf1:0xda55d6134deb8f38!8m2!3d35.574257!4d-77.391034?sa=X&ved=0ahUKEwjIpJSOyK3PAhWLdSYKHccgDIsQ8gEIGzAA",
					"webLink": "http://www.greenvilleconventioncenter.com/event"
					}
				],
				},
				{
				"categoryType": "Celebration",
				"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
				"events": [
					{
					"name": "Down East Holiday Show",
					"location": "Greenville Convention Center",
					"address": "303 SW Greenville Blvd Greenville, NC 27834",
					"position":{
						"top": "320px",
						"left": "1520px",
					},
					"image": "/images/down-east.jpg",
					"imageCredit": "© Pitt Community College",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "Each year, the Pitt Community College Foundation presents the Down East Holiday Show to raise funds for student scholarships and educational activities at Pitt Community College. Our 2015 Holiday Show was a record success, generating more than $100,000 to benefit PCC students. Started in 2002, the Down East Holiday Show helps to kick off the holiday shopping season by featuring more than 145 exhibitors selling everything from holiday decorations and handcrafted gift items to mouth-watering foods and an array of services. This year, we’d like to encourage you to discover what more than 12,000 shoppers found out in 2015 – that the Down East Holiday Show is an ideal opportunity to purchase the perfect gifts for your loved ones.",
					"dates": "Nov 3 - Nov 6",
					"googleMaps": "https://www.google.com/maps/place/Greenville+Convention+Center/@35.5730438,-77.3932978,17z/data=!4m13!1m7!3m6!1s0x89aec2c6691e222d:0xdb4b529eb01e3acb!2s303+Greenville+Blvd+SW,+Greenville,+NC+27834!3b1!8m2!3d35.5730438!4d-77.3911091!3m4!1s0x89aec2c63f5a8cf1:0xda55d6134deb8f38!8m2!3d35.574257!4d-77.391034?sa=X&ved=0ahUKEwjIpJSOyK3PAhWLdSYKHccgDIsQ8gEIGzAA",
					"webLink": "http://downeastholidayshow.com/"
					},
					{
					"name": "Christmas Parade",
					"location": "Uptown Greenville",
					"address": "5th & Evans street Greenville, NC 27835",
					"position":{
						"top": "300px",
						"left": "1510px",
					},
					"image": "/images/greenville-parade.jpg",
					"imageCredit": "© indiadamjones.com",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "For the over 30 years, the Greenville Jaycees have provided an exciting beginning to the holiday season in Greenville. The Greenville Christmas Parade marches through the Uptown Greenville area giving thousands of citizens their first celebration of the Christmas holidays. Typically, over 150 entrants march through the parade including numerous Girl Scout and Boy Scout Troops, several high school bands  as well as local groups merchants. Many media outlets participate in the event and often broadcast the event live for the their viewers. Sponsorships pay for numerous expenses associated with the parade including performance fees, float rentals, and insurance.",
					"dates": "Dec 10",
					"googleMaps": "https://www.google.com/maps/place/Evans+St+%26+E+5th+St,+Greenville,+NC+27858/@35.6111537,-77.3735743,19z/data=!3m1!4b1!4m5!3m4!1s0x89aee7e38c775a7f:0x67ddae8fba4f5435!8m2!3d35.6111537!4d-77.3730271",
					"webLink": "http://greenvillejaycees.com/projects/greenville-christmas-parade/"
					},
				],
				},
			]
	},
	{"city": "Fayetteville",
			"cityFlag": "/graphics/christmas_icons-fayetteville.svg",
			"icon-animation": "",
			"position": {
				"top": "400px",
				"left": "1180px"
				},
			"categories": [
				{
				"categoryType": "Light Show",
				"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
				"mapLocation": "coordinates",
				"events": [
					{
					"name": "Christmas Tree Lighting",
					"location": "Fort Bragg",
					"address": "11-, 25 Capron St, Fort Bragg, NC 28307",
					"position":{
						"top": "380px",
						"left": "1120px"
					},
					"image": "/images/fort-christmas.jpg",
					"imageCredit": "© Sgt. Jessica M. Kuhn",
					"categoryIcon": "/graphics/christmas_icons-lightshow.svg",
					"description": "Enjoy this family-friendly holiday ceremony and watch as Fort Bragg's Christmas tree lights are turned on for the season. Attendees will have the opportunity to visit with Santa and Mrs. Claus, enjoy light refreshments and holiday entertainment, and play in the Kidz Corner. Open to the public.",
					"dates": "Dec 1",
					"googleMaps": "https://www.google.com/maps/place/Main+Post+Parade+Field/@35.1473251,-78.9967978,17z/data=!3m1!4b1!4m5!3m4!1s0x89ab6a21bcaf9395:0x73b4aea733e18225!8m2!3d35.1473251!4d-78.9946091",
					"webLink": "http://bragg.armymwr.com/us/bragg/ft-bragg-events/christmas-tree-lighting?query=christmas"
					}
				],
				},
				{
				"categoryType": "Tour",
				"categoryIcon": "/graphics/christmas_icons-tours.svg",
				"mapLocation": "coordinates",
				"events": [
					{
					"name": "Christmas at the 1897 Poe House",
					"location": "Museum of the Cape Fear Historical Complex",
					"address": "801 Arsenal Ave, Fayetteville, NC 28305",
					"position":{
						"top": "420px",
						"left": "1140px"
					},
					"image": "/images/poe-house.jpg",
					"imageCredit": "© Visit Fayetteville NC",
					"categoryIcon": "/graphics/christmas_icons-tours.svg",
					"description": "Decorated with a big tree in the parlor, long hallways and tall windows decked wFront of house decorated for Christmasith greenery, and the splash of red berries from holly sprigs will give your Christmas spirit a boost. You’ll also come to know and appreciate how people from the 1900s celebrated the traditions that so many hold dear today.",
					"dates": "Nov 22 - Jan 1",
					"googleMaps": "https://www.google.com/maps/place/Museum+of+the+Cape+Fear+Historical+Complex/@35.0545048,-78.8926655,15z/data=!4m5!3m4!1s0x0:0x6b557b7baed97dd!8m2!3d35.0545048!4d-78.8926655",
					"webLink": "http://www.visitfayettevillenc.com/events/search"
					}
					
				],
				},
				{
				"categoryType": "Tree Farm",
				"categoryIcon": "/graphics/christmas_icons-trees.svg",
				"events": [
					{
					"name": "B&D Christmas Tree Farm",
					"location": "Fayetteville",
					"address": "1206 Elliot Farm Rd, Fayetteville, NC 28311",
					"position":{
						"top": "320px",
						"left": "1180px"
					},
					"image": "/images/BD-farm.jpg",
					"imageCredit": "© Hardis Barnes",
					"categoryIcon": "/graphics/christmas_icons-trees.svg",
					"description": "B&D offers a range of Choose & Cut Christmas Trees, Christmas Tree Live, Christmas Trees, Tours, Wreaths.",
					"dates": "Nov 24 - Dec 24",
					"googleMaps": "https://www.google.com/maps/place/B+%26+D+Christmas+Tree+Farm/@35.2081471,-78.8870555,15z/data=!4m5!3m4!1s0x0:0xbe1b170de0aeec8b!8m2!3d35.2081471!4d-78.8870555",
					"webLink": "https://www.facebook.com/pages/B-D-Christmas-Tree-Farm/147270341982340"
					}
				],
				},
				{
				"categoryType": "Production",
				"categoryIcon": "/graphics/christmas_icons-production.svg",
				"events": [
					{
					"name": "The Best Christmas Pageant Ever",
					"location": "Cape Fear Regional Theatre",
					"address": "1209 Hay St, Fayetteville, NC 28305",
					"position":{
						"top": "420px",
						"left": "1130px"
					},
					"image": "/images/faye-christmas.jpg",
					"imageCredit": "© Fayetteville Observer",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "In this hilarious Christmas classic, a couple struggling to put on a church Christmas pageant is faced with casting the Herdman kids, probably the most inventively awful kids in history. You will not believe the mayhem, and the fun, when the Herdmans collide with the Christmas story head on! This play continues to be a highlight of Fayetteville’s holiday season for more than 25 years.",
					"dates": "Dec 1 - Dec 18",
					"googleMaps": "https://www.google.com/maps/place/Cape+Fear+Regional+Theatre/@35.0566206,-78.9015723,17z/data=!3m1!4b1!4m5!3m4!1s0x89ab6cccb924fb5d:0x1fac029688342153!8m2!3d35.0566206!4d-78.8993836",
					"webLink": "http://www.visitfayettevillenc.com/event/2016/12/01/the-best-christmas-pageant-ever"
					},
					{
					"name": "Its a Wonderful Life",
					"location": "Gilbert Theater",
					"address": "116 Green St, Fayetteville, NC 28301",
					"position":{
						"top": "420px",
						"left": "1180px"
					},
					"image": "/images/wonderful-gilbert.jpg",
					"imageCredit": "© Fayetteville Observer",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "The Gilbert Theater's second show of the 2016-2017 season is this ageless holiday classic, by James Rodgers. This is the story of George Bailey, the every-man from the small town of Bedford Falls whose dreams of escape and adventure have been quashed by family obligation and civic duty. His guardian angel has to descend on Christmas Eve to save him from despair and to show him what the world would have been like had he never been born--that his life has been, after all, a wonderful life. Shows typically run Friday through Sunday.",
					"dates": "Nov 26 - Dec 18",
					"googleMaps": "https://www.google.com/maps/place/Gilbert+Theater/@35.0587334,-78.9047038,13.5z/data=!4m5!3m4!1s0x0:0xb9e056aa180038c7!8m2!3d35.0530939!4d-78.8778146",
					"webLink": "http://www.gilberttheater.com/2015-2016-season/"
					},
					{
					"name": "A Folk Christmas Cantata",
					"location": "Holy Trinity Episcopal Church",
					"address": "1601 Raeford Rd, Fayetteville, NC 28305",
					"position":{
						"top": "420px",
						"left": "1120px"
					},
					"image": "/images/cantata.jpg",
					"imageCredit": "© Sweet Tea Shakespeare",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "Join Sweet Tea Shakespeare (STS) for the story of Advent and Christmas, told in song and story. Featuring Andrew Peterson’s Behold the Lamb of God and music and readings by the STS artists, this special event is an ideal way to center oneself in the hustle and bustle of the Advent and Christmas seasons. Join STS for warm and warming beverages and a night of music and fellowship.",
					"dates": "Dec 8 - Dec 9",
					"googleMaps": "https://www.google.com/maps/place/Holy+Trinity+Episcopal+Church/@35.0539326,-78.9095308,14.81z/data=!4m5!3m4!1s0x89ab134a925ceb79:0x81a1075585c1d067!8m2!3d35.053497!4d-78.90743",
					"webLink": "http://fsuarts.com/event/behold-a-folk-christmas-cantata/"
					},
					{
					"name": "Waltzing in a Winter Wonderland",
					"location": "Huff Concert Hall",
					"address": "5400 Ramsey Street Fayetteville, NC 28311",
					"position":{
						"top": "370px",
						"left": "1180px"
					},
					"image": "/images/huff-wonderland.jpg",
					"imageCredit": "© David Bickley",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "Bring your family and celebrate the holiday season with the Fayetteville Symphony and Guest Conductor Aram Demirjian, Music Director of the Knoxville Symphony, for an evening of traditional holiday music that will have you feeling like you’re waltzing in a winter wonderland!",
					"dates": "Dec 10",
					"googleMaps": "https://www.google.com/maps/place/5400+Ramsey+St,+Fayetteville,+NC+28311/@35.1334615,-78.8739977,17z/data=!3m1!4b1!4m5!3m4!1s0x89ab6dd91d8a3a3b:0x990c1934995abe80!8m2!3d35.1334615!4d-78.8726749",
					"webLink": "http://www.fayettevillesymphony.org/2016-2017-concerts/"
					},
					{
					"name": "FYSO Winter Concert",
					"location": "Huff Concert Hall",
					"address": "5400 Ramsey Street Fayetteville, NC 28311",
					"position":{
						"top": "370px",
						"left": "1170px"
					},
					"image": "/images/fsyo.jpg",
					"imageCredit": "© Fayetteville Symphony",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "Students of the Fayetteville Symphony Youth Orchestra perform for their winter concert.",
					"dates": "Dec 11",
					"googleMaps": "https://www.google.com/maps/place/5400+Ramsey+St,+Fayetteville,+NC+28311/@35.1334615,-78.8739977,17z/data=!3m1!4b1!4m5!3m4!1s0x89ab6dd91d8a3a3b:0x990c1934995abe80!8m2!3d35.1334615!4d-78.8726749",
					"webLink": "http://www.fayettevillesymphony.org/youth-orchestra/"
					},
					{
					"name": "Disney on Ice: Follow Your Heart",
					"location": "Crown Coliseum",
					"address": "1960 Coliseum Dr, Fayetteville, NC 28306",
					"position":{
						"top": "450px",
						"left": "1170px"
					},
					"image": "/images/disney-ice.jpg",
					"imageCredit": "© Disney",
					"categoryIcon": "/graphics/christmas_icons-production.svg",
					"description": "Follow your heart to Disney On Ice! Swim with Dory and new pal Hank, from Finding Dory. Cheer with the Emotions from Inside Out. Join Olaf as he helps reunite Anna and Elsa. See the Disney Princesses achieve their dreams. And celebrate true friendship with the Toy Story gang. Make unforgettable memories with your whole family!",
					"dates": "Dec 15 - Dec 18",
					"googleMaps": "https://www.google.com/maps/place/Crown+Complex/@35.0151782,-78.8939641,17z/data=!3m1!4b1!4m5!3m4!1s0x89ab13042592521d:0x3ddbb894ba36349f!8m2!3d35.0151782!4d-78.8917701",
					"webLink": "http://www.crowncomplexnc.com/events/detail/disney-on-ice"
					}
				],
				},
				{
				"categoryType": "Celebration",
				"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
				"events": [
					{
					"name": "A Dickens Holiday",
					"location": "Downtown Fayetteville",
					"address": "433 Hay St, Fayetteville, NC 28301",
					"position":{
						"top": "420px",
						"left": "1180px"
					},
					"image": "/images/dickens-fayetteville.jpg",
					"imageCredit": "© Visit Downtown Fayetteville",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "Historic Downtown Fayetteville will again be transformed into a unique and wonderful experience. So roll back the clock with us for A Dickens Holiday from 1 to 9p.m. Horse-drawn carriages roll down Hay Street carrying shoppers the old-fashioned way, past merchants’ windows adorned with beautiful Victorian holiday decorations, past artisans and vendors of all sorts of delightful treats. Joyful children pose with Father Christmas for memory-laden pictures.The smells of cider and gingerbread permeate the chilly air. And there is Ebenezer Scrooge himself, pursued by the ghost of Jacob Marley. As darkness approaches and the clock reaches 5 p.m., townspeople gather in front of the Arts Council for the candlelight procession to the Market House, followed by fireworks. After the fireworks, the festivities continue until 9 p.m.",
					"dates": "Nov 25",
					"googleMaps": "https://www.google.com/maps/place/Downtown+Fayetteville/@35.0538203,-78.8836384,15z/data=!4m5!3m4!1s0x0:0x6b82a0ecd2e115fe!8m2!3d35.0538203!4d-78.8836384?sa=X&ved=0ahUKEwjRsOelhoDPAhXDMyYKHZSwAKYQ_BIIhQEwDg",
					"webLink": "http://www.theartscouncil.com/dickensmain/"
					},
					{
					"name": "Kwanzaa Celebration",
					"location": "Smith Recreation Center",
					"address": "1520 Slater Ave, Fayetteville, NC 28301",
					"position":{
						"top": "370px",
						"left": "1150px"
					},
					"image": "/images/faye-kwanzaa.jpg",
					"imageCredit": "© Umoja Group Inc.",
					"categoryIcon": "/graphics/christmas_icons-celebrations.svg",
					"description": "The Umoja Group, Inc., presents a longstanding Fayetteville tradition: Kwanzaa Celebration. Various activities at this special event include a drum call, welcome song, tribute to elders, libation, parade of African kings and queens, college scholarship award, feast, children’s candlelight ceremony, and traditional dance performance. Attendees are asked to bring a dish to share at the feast and donation(s) of winter clothing or nonperishable food items.",
					"dates": "Dec 31",
					"googleMaps": "https://www.google.com/maps/place/Smith+Recreation+Center/@35.0781276,-78.8997242,17z/data=!3m1!4b1!4m5!3m4!1s0x89ab6ce9cc072585:0x2a6dc355371e4d28!8m2!3d35.0781276!4d-78.8975355",
					"webLink": ""
					}
				],
				},
			]
	},
];
 